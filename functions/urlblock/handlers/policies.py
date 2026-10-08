"""Handlers for creating, updating, deleting, listing and simulating firewall policies."""

# Handlers deliberately catch every exception to log it and return a 500 response.
# pylint: disable=broad-exception-caught

import traceback
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
from logging import Logger

import pytz
from crowdstrike.foundry.function import Request, Response
from falconpy import FirewallManagement, FirewallPolicies, CustomStorage, HostGroup

from app_core import FUNC, get_client, COLLECTION_DOMAIN_VER, COLLECTION_RELATION_VER
from app_utils import (
    _sanitize_url_list, _build_rule, read_all_objects, delete_object, query_param,
    relationship_key, validate_fqdn, _validate_falcon_response, resolve_creator, safe_context,
)

PLATFORM_NAMES = {'windows': 'Windows', 'mac': 'Mac', 'linux': 'Linux'}


@FUNC.handler(method='GET', path='/urlblock')
def on_create(_: Request, __: dict, logger: Logger) -> Response:
    """Handle requests to retrieve host groups."""
    logger.info("Starting host groups handler")
    try:
        hostgroup = get_client(HostGroup)
        response = hostgroup.query_host_groups()
        ok, err = _validate_falcon_response(response, "query_host_groups", logger)
        if not ok:
            return Response(code=response.get("status_code", 500), body={"error": f"Failed to retrieve host groups: {err}"})

        groups = response["body"]["resources"]
        groups_details = hostgroup.get_host_groups(ids=groups)
        ok, err = _validate_falcon_response(groups_details, "get_host_groups", logger)
        if not ok:
            return Response(code=groups_details.get("status_code", 500),
                            body={"error": f"Failed to retrieve host groups: {err}"})

        host_groups_list = [
            {"id": group["id"], "name": group["name"]}
            for group in groups_details["body"]["resources"]
        ]
        return Response(code=200, body={"host_groups": host_groups_list})
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Unexpected error occurred"})


# pylint: disable-next=too-many-arguments,too-many-locals
def _write_relationships(categories_list, rule_group_id, host_group_id, host_group_name,
                         policy_name, platform, whitelist, username, policy_id,
                         custom_storage, logger=None, created_by_source=None):
    """Write relationships to custom storage in parallel. Returns success/error counts."""
    def _write_single(cat):
        record = {
            "category_name": cat,
            "rule_group_id": rule_group_id,
            "rule_group_name": f"{policy_name}_RuleGroup",
            "host_group_id": host_group_id,
            "host_group_name": host_group_name,
            "policy_id": policy_id,
            "policy_name": policy_name,
            "platform": platform,
            "whitelist": whitelist,
            "created_at": datetime.now(pytz.UTC).isoformat(),
            "created_by": username,
            "created_by_source": created_by_source or "none"
        }
        try:
            resp = custom_storage.PutObjectByVersion(
                body=record,
                collection_name="relationship",
                collection_version=COLLECTION_RELATION_VER,
                object_key=relationship_key(cat, rule_group_id, host_group_id)
            )
        except Exception as e:
            if logger:
                logger.error(f"Error writing relationship for {cat}: {e}")
            return False
        if resp.get('status_code') == 200:
            return True
        if logger:
            logger.error(f"Failed to write relationship for {cat}: {resp}")
        return False

    with ThreadPoolExecutor(max_workers=5) as executor:
        results = list(executor.map(_write_single, categories_list))

    success_count = sum(results)
    return {"success_count": success_count, "error_count": len(results) - success_count}


def _build_rules_list(policy_name, categories, whitelist_raw):
    """Build the firewall rules for a policy from its whitelist and categories."""
    rules_list = []
    temp_counter = 0

    if whitelist_raw:
        wl_urls = _sanitize_url_list(whitelist_raw, separator=';')
        if wl_urls:
            rules_list.append(_build_rule("whitelist_allow", "ALLOW", ';'.join(wl_urls), str(temp_counter),
                                          f"Whitelist for {policy_name}"))
            temp_counter += 1

    for category_name, urls_raw in categories.items():
        if not urls_raw:
            continue
        clean_urls = _sanitize_url_list(urls_raw, separator=';')
        if not clean_urls:
            continue
        rules_list.append(_build_rule(f"deny_{category_name}", "DENY", ';'.join(clean_urls), str(temp_counter),
                                      f"Block {category_name}"))
        temp_counter += 1

    return rules_list


def _create_policy_with_rule_group(mgmt, fw_policies, policy_name, platform, platform_name,
                                   host_group_id, rules_list, description_prefix, logger):
    """
    Create policy -> enable -> assign host group -> create rule group -> attach it.

    Any failure rolls back what was created in Falcon.
    Returns (policy_id, rule_group_id, None) or (None, None, Response).
    """
    policy_id = None
    rg_id = None

    def _fail(code, message):
        if rg_id:
            mgmt.delete_rule_groups(ids=[rg_id])
        if policy_id:
            fw_policies.delete_policies(ids=policy_id)
        return None, None, Response(code=code, body={"error": message})

    policy_resp = fw_policies.create_policies(
        description=f"Policy for {policy_name}", name=policy_name, platform_name=platform_name)
    ok, err = _validate_falcon_response(policy_resp, "create_policies", logger)
    if not ok:
        return None, None, Response(code=policy_resp.get("status_code", 500),
                                    body={"error": f"Failed to create policy: {err}"})
    policy_id = policy_resp["body"]["resources"][0]["id"]

    resp = fw_policies.perform_action(action_name="enable", ids=policy_id)
    ok, err = _validate_falcon_response(resp, "enable_policy", logger)
    if not ok:
        return _fail(500, f"Failed to enable policy: {err}. Rolled back.")

    resp = fw_policies.perform_action(action_name="add-host-group", group_id=host_group_id, ids=policy_id)
    ok, err = _validate_falcon_response(resp, "add_host_group", logger)
    if not ok:
        return _fail(500, f"Failed to assign host group: {err}. Rolled back.")

    rg_resp = mgmt.create_rule_group(
        description=f"{description_prefix} for {policy_name}", enabled=True,
        name=f"{policy_name}_RuleGroup", platform=platform, rules=rules_list)
    ok, err = _validate_falcon_response(rg_resp, "create_rule_group", logger)
    if not ok:
        return _fail(500, f"Failed to create rule group: {err}. Rolled back.")
    rg_id = rg_resp["body"]["resources"][0]

    resp = mgmt.update_policy_container(
        default_inbound="ALLOW", default_outbound="ALLOW", platform_id=platform, enforce=True,
        local_logging=True, is_default_policy=False, test_mode=False,
        rule_group_ids=rg_id, policy_id=policy_id, body={}
    )
    ok, err = _validate_falcon_response(resp, "update_policy_container", logger)
    if not ok:
        return _fail(500, f"Failed to attach rule group: {err}. Rolled back.")

    return policy_id, rg_id, None


@FUNC.handler(method='POST', path='/create-rule')
# pylint: disable-next=too-many-return-statements
def create_rule(request: Request, _: dict, logger: Logger) -> Response:
    """Create a firewall policy + rule group and persist the relationships."""
    logger.info("Starting create-rule handler")
    logger.info(f"Request context: {safe_context(request)}")  # TEMP diagnostic: confirm where the user comes from
    try:
        if not request.body:
            return Response(code=400, body={"error": "Request body is required"})

        host_group_id = request.body.get('hostGroupId')
        policy_name = request.body.get('policyName', '').strip()
        platform = request.body.get('platform', '').lower()
        categories = request.body.get('categories', {})
        whitelist_raw = request.body.get('whitelist', '').strip()
        host_group_name = request.body.get('hostGroupName', 'Unknown Host Group')
        username, username_source = resolve_creator(request)

        platform_name = PLATFORM_NAMES.get(platform)
        if not platform_name:
            return Response(code=400, body={"error": f"Platform must be one of: {', '.join(PLATFORM_NAMES)}"})

        if not host_group_id or not policy_name or not isinstance(categories, dict):
            return Response(code=400, body={"error": "Missing required fields"})

        rules_list = _build_rules_list(policy_name, categories, whitelist_raw)
        if not rules_list:
            return Response(code=400, body={"error": "No valid rules could be built"})

        mgmt = get_client(FirewallManagement)
        fw_policies = get_client(FirewallPolicies)
        custom_storage = get_client(CustomStorage)

        policy_id, rule_group_id, error = _create_policy_with_rule_group(
            mgmt, fw_policies, policy_name, platform, platform_name,
            host_group_id, rules_list, "Rule group", logger)
        if error:
            return error

        # Relationship write failures are logged but do not roll back Falcon resources
        write_result = _write_relationships(
            list(categories.keys()), rule_group_id, host_group_id, host_group_name,
            policy_name, platform, whitelist_raw, username, policy_id, custom_storage, logger,
            created_by_source=username_source)
        if write_result["error_count"]:
            logger.warning(f"create-rule: {write_result['error_count']} relationship writes failed")

        logger.info(f"Create-rule completed: {policy_name}, policy={policy_id}, rg={rule_group_id}")
        return Response(code=200, body={
            "success": True,
            "policyName": policy_name,
            "policyId": policy_id,
            "ruleGroupId": rule_group_id,
            "rulesCreated": len(rules_list),
            "relationsWritten": write_result["success_count"],
            "createdBy": username,
            "createdBySource": username_source,
            "debugContext": safe_context(request)  # TEMP: remove once the context shape is known
        })

    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to create rule"})


@FUNC.handler(method='GET', path='/list-policies')
def list_policies(_: Request, __: dict, logger: Logger) -> Response:
    """List the policies created by this app with their categories and host groups."""
    try:
        custom_storage = get_client(CustomStorage)
        result = read_all_objects(custom_storage, "relationship", COLLECTION_RELATION_VER, logger=logger)
        if "error" in result:
            return Response(code=500, body={"error": "Failed to list policies"})

        grouped: dict = {}
        for item in result['resources']:
            if not isinstance(item, dict):
                continue
            rg_id = item.get('rule_group_id')
            if not rg_id:
                continue

            if rg_id not in grouped:
                grouped[rg_id] = {
                    "rule_group_id": rg_id, "policy_id": item.get('policy_id', ''),
                    "policy_name": item.get('policy_name', ''),
                    "host_group_id": item.get('host_group_id', ''), "host_group_name": item.get('host_group_name', ''),
                    "platform": item.get('platform', ''), "whitelist": item.get('whitelist', ''),
                    "created_at": item.get('created_at', ''), "created_by": item.get('created_by', ''),
                    "created_by_source": item.get('created_by_source', ''),
                    "categories": []
                }
            cat = item.get('category_name')
            if cat and cat not in grouped[rg_id]["categories"]:
                grouped[rg_id]["categories"].append(cat)

        return Response(code=200, body={"policies": list(grouped.values()), "pagination": result["pagination"]})
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to list policies"})


def _parallel_delete_relationships(rule_group_id, custom_storage, logger=None):
    """Delete the relationships of a rule group. Returns the number actually deleted."""
    result = read_all_objects(custom_storage, "relationship", COLLECTION_RELATION_VER, logger=logger)
    if "error" in result:
        if logger:
            logger.error(f"Could not list relationships to delete: {result['error']}")
        return 0

    keys_to_delete = []
    for item in result['resources']:
        if item.get('rule_group_id') == rule_group_id:
            obj_key = item.get('_key') or item.get('object_key') or item.get('key')
            if obj_key:
                keys_to_delete.append(obj_key)

    if not keys_to_delete:
        return 0

    def _delete_single(key):
        try:
            if delete_object(custom_storage, "relationship", COLLECTION_RELATION_VER, key):
                return True
        except Exception as e:
            if logger:
                logger.error(f"Error deleting relationship {key}: {e}")
            return False
        if logger:
            logger.warning(f"Failed to delete relationship {key}")
        return False

    with ThreadPoolExecutor(max_workers=5) as executor:
        results = list(executor.map(_delete_single, keys_to_delete))

    deleted_count = sum(results)
    if logger and deleted_count < len(results):
        logger.warning(f"Relationship cleanup: {deleted_count} deleted, {len(results) - deleted_count} errors")
    return deleted_count


@FUNC.handler(method='POST', path='/delete-policy')
def delete_policy(request: Request, _: dict, logger: Logger) -> Response:
    """Delete a policy together with its rule group and stored relationships."""
    logger.info("Starting delete-policy handler")
    try:
        body = request.body or {}
        rule_group_id = body.get('rule_group_id', '').strip()
        policy_id = body.get('policy_id', '').strip()

        if not rule_group_id:
            return Response(code=400, body={"error": "rule_group_id is required"})

        mgmt = get_client(FirewallManagement)
        fw_policies = get_client(FirewallPolicies)
        custom_storage = get_client(CustomStorage)

        rg_resp = mgmt.delete_rule_groups(ids=[rule_group_id])
        _validate_falcon_response(rg_resp, "delete_rule_groups", logger)

        if policy_id:
            pol_resp = fw_policies.delete_policies(ids=policy_id)
            _validate_falcon_response(pol_resp, "delete_policies", logger)

        deleted = _parallel_delete_relationships(rule_group_id, custom_storage, logger)

        logger.info(f"Delete-policy completed: RG={rule_group_id}, Policy={policy_id}, relations deleted={deleted}")
        return Response(code=200, body={"success": True, "relationsDeleted": deleted})
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to delete policy"})


@FUNC.handler(method='POST', path='/update-policy')
# pylint: disable-next=too-many-locals
def update_policy(request: Request, _: dict, logger: Logger) -> Response:
    """
    Replace a policy. Order matters:
      1. delete ONLY the old policy (frees its name; old rule group + relations stay as a safety net)
      2. create the new policy/rule group (rolled back on failure)
      3. delete the old rule group and relations, then write the new relations
    """
    logger.info("Starting update-policy handler")
    try:
        body = request.body or {}
        old_rg_id = body.get('ruleGroupId', '').strip()
        old_policy_id = body.get('policyId', '').strip()
        policy_name = body.get('policyName', '').strip()
        host_group_id = body.get('hostGroupId', '').strip()
        platform = body.get('platform', '').lower()
        categories = body.get('categories', {})
        whitelist_raw = body.get('whitelist', '').strip()
        host_group_name = body.get('hostGroupName', 'Unknown')
        username, username_source = resolve_creator(request)

        platform_name = PLATFORM_NAMES.get(platform)
        if not platform_name or not old_rg_id or not policy_name or not host_group_id or not isinstance(categories, dict):
            return Response(code=400, body={"error": "Missing required fields or invalid platform"})

        rules_list = _build_rules_list(policy_name, categories, whitelist_raw)
        if not rules_list:
            return Response(code=400, body={"error": "No valid rules could be built"})

        mgmt = get_client(FirewallManagement)
        fw_policies = get_client(FirewallPolicies)
        custom_storage = get_client(CustomStorage)

        # Phase 1: free the policy name by deleting only the old policy
        if old_policy_id:
            ok, err = _validate_falcon_response(fw_policies.delete_policies(ids=old_policy_id), "delete_old_policy", logger)
            if not ok:
                return Response(code=500, body={"error": f"Failed to delete old policy: {err}. Nothing was changed."})

        # Phase 2: create everything new (rolled back automatically on failure)
        new_policy_id, new_rg_id, error = _create_policy_with_rule_group(
            mgmt, fw_policies, policy_name, platform, platform_name,
            host_group_id, rules_list, "Group", logger)
        if error:
            if old_policy_id:
                logger.error(f"update-policy: old policy {old_policy_id} was deleted but the new one failed; "
                             f"old rule group {old_rg_id} and its relationships were kept for recovery")
            return error

        # Phase 3: new resources are in place, remove the old rule group and relations
        _validate_falcon_response(mgmt.delete_rule_groups(ids=[old_rg_id]), "delete_old_rule_group", logger)
        deleted_count = _parallel_delete_relationships(old_rg_id, custom_storage, logger)
        logger.info(f"Deleted {deleted_count} old relationships")

        # Phase 4: write the new relationships
        write_result = _write_relationships(
            list(categories.keys()), new_rg_id, host_group_id, host_group_name,
            policy_name, platform, whitelist_raw, username, new_policy_id, custom_storage, logger,
            created_by_source=username_source)

        logger.info(f"Update-policy completed: {policy_name}, new RG: {new_rg_id}")
        return Response(code=200, body={
            "success": True,
            "newRuleGroupId": new_rg_id,
            "newPolicyId": new_policy_id,
            "relationsWritten": write_result["success_count"]
        })
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to update policy"})


def _blocking_candidates(fqdn: str) -> list:
    """
    Rule entries that would block `fqdn`, most specific first: the exact name, its own
    wildcard and the wildcard of every parent domain (never a bare TLD wildcard like *.com).
    e.g. mail.google.com -> [mail.google.com, *.mail.google.com, *.google.com]
    """
    labels = fqdn.split('.')
    return [fqdn] + ['*.' + '.'.join(labels[i:]) for i in range(len(labels) - 1)]


@FUNC.handler(method='GET', path='/simulate-policy')
def simulate_policy(request: Request, _: dict, logger: Logger) -> Response:
    """Report whether a given FQDN would be blocked by any stored category."""
    try:
        fqdn = query_param(request, 'fqdn').strip().lower()
        if not fqdn:
            return Response(code=400, body={"error": "fqdn required"})
        if not validate_fqdn(fqdn):
            return Response(code=400, body={"error": "Invalid fqdn"})

        custom_storage = get_client(CustomStorage)
        candidates = _blocking_candidates(fqdn)

        def _matching_entry(item):
            domains = {d.strip().lower() for d in item.get('domain', '').split(';') if d.strip()}
            return next((c for c in candidates if c in domains), None)

        # Early return: stop paging as soon as the domain is found
        result = read_all_objects(custom_storage, 'domain', COLLECTION_DOMAIN_VER,
                                  stop_when=lambda item: _matching_entry(item) is not None, logger=logger)
        if "error" in result:
            return Response(code=500, body={"error": "Failed to simulate"})

        item = result["match"]
        if item:
            return Response(code=200, body={"encontrado": True, "categoria": item.get('category'),
                                            "regla": _matching_entry(item),
                                            "mensaje": f"Bloqueado por {item.get('category')}",
                                            "pagination": result["pagination"]})

        return Response(code=200, body={"encontrado": False, "categoria": None, "mensaje": "No bloqueado",
                                        "pagination": result["pagination"]})
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to simulate"})


@FUNC.handler(method='GET', path='/check-enforcement')
def check_enforcement(request: Request, _: dict, logger: Logger) -> Response:
    """Verificar el estado de enforcement de una política específica."""
    logger.info("Starting /check-enforcement handler")
    try:
        policy_id = query_param(request, 'policy_id').strip()
        if not policy_id:
            return Response(code=400, body={"error": "policy_id is required"})

        mgmt = get_client(FirewallManagement)
        resp = mgmt.get_policy_containers(ids=policy_id)

        if resp.get('status_code') != 200 or not resp.get('body', {}).get('resources'):
            return Response(code=404, body={"error": "Policy container not found"})

        container = resp['body']['resources'][0]

        result = {
            "policy_id": container.get("policy_id"),
            "enforce": container.get("enforce"),
            "default_inbound": container.get("default_inbound"),
            "default_outbound": container.get("default_outbound"),
            "local_logging": container.get("local_logging"),
            "test_mode": container.get("test_mode"),
            "rule_group_ids": container.get("rule_group_ids", [])
        }

        logger.info(f"Successfully completed /check-enforcement for policy {policy_id}")
        return Response(code=200, body=result)
    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to check enforcement"})




def _escape_fql(value: str) -> str:
    return value.replace("\\", "\\\\").replace("'", "\\'")


@FUNC.handler(method='GET', path='/health-check')
# pylint: disable-next=too-many-locals,too-many-branches,too-many-statements
def health_check(_request: Request, _: dict, logger: Logger) -> Response:
    """Validate all policies created by the app (batched Falcon calls)."""
    logger.info("Starting /health-check handler")
    try:
        custom_storage = get_client(CustomStorage)
        fw_policies = get_client(FirewallPolicies)
        mgmt = get_client(FirewallManagement)

        result = read_all_objects(custom_storage, "relationship", COLLECTION_RELATION_VER, logger=logger)
        if "error" in result:
            return Response(code=500, body={"error": "Failed to read relationships"})

        # One entry per policy: keyed by policy_id, or by name for legacy records without it
        unique_policies = {}
        for item in result['resources']:
            if not isinstance(item, dict):
                continue
            policy_name = item.get('policy_name')
            if not policy_name:
                continue
            unique_policies.setdefault(item.get('policy_id') or f"name:{policy_name}", item)

        # Legacy records (no policy_id): resolve by name, with the value escaped for FQL
        resolved = {}  # key -> policy_id
        for key, item in unique_policies.items():
            if key.startswith("name:"):
                resp = fw_policies.query_combined_policies(
                    filter=f"name:'{_escape_fql(item['policy_name'])}'", limit=1)
                resources = resp.get('body', {}).get('resources') if resp.get('status_code') == 200 else None
                resolved[key] = resources[0].get('id') if resources else None
            else:
                resolved[key] = key

        policy_ids = [pid for pid in resolved.values() if pid]
        policies_by_id = {}
        containers_by_id = {}
        if policy_ids:
            pol_resp = fw_policies.get_policies(ids=policy_ids)
            if pol_resp.get('status_code') == 200:
                policies_by_id = {p.get('id'): p for p in pol_resp.get('body', {}).get('resources', [])}
            cont_resp = mgmt.get_policy_containers(ids=policy_ids)
            if cont_resp.get('status_code') == 200:
                containers_by_id = {c.get('policy_id'): c for c in cont_resp.get('body', {}).get('resources', [])}

        results = []
        healthy_count = 0
        issues_count = 0

        for key, rel_item in unique_policies.items():
            policy_id = resolved[key]
            pol_info = {"policy_name": rel_item['policy_name'], "policy_id": policy_id, "status": "error", "issues": []}

            pol = policies_by_id.get(policy_id) if policy_id else None
            if not pol:
                pol_info["issues"].append("Policy not found in Falcon")
                issues_count += 1
                results.append(pol_info)
                continue

            pol_info['enabled'] = pol.get('enabled', False)
            if not pol.get('enabled'):
                pol_info["issues"].append("Policy DISABLED")

            groups = pol.get('groups', [])
            pol_info['host_groups'] = len(groups)
            if not groups:
                pol_info["issues"].append("No host groups assigned")

            container = containers_by_id.get(policy_id)
            if container:
                pol_info['enforce'] = container.get('enforce', False)
                if not container.get('enforce'):
                    pol_info["issues"].append("Enforcement OFF - filtering NOT active")
                rule_groups = container.get('rule_group_ids', [])
                pol_info['rule_groups'] = len(rule_groups)
                if not rule_groups:
                    pol_info["issues"].append("No rule groups attached")
            else:
                pol_info["issues"].append("Could not fetch policy container")

            if not pol_info["issues"]:
                pol_info["status"] = "healthy"
                del pol_info["issues"]
                healthy_count += 1
            else:
                issues_count += 1
            results.append(pol_info)

        summary = {
            "healthy": issues_count == 0 and len(unique_policies) > 0,
            "total_policies_checked": len(unique_policies),
            "healthy_count": healthy_count,
            "issues_count": issues_count,
            "policies": results,
            "pagination": result["pagination"]
        }

        logger.info("Successfully completed /health-check")
        return Response(code=200, body=summary)

    except Exception:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to run health check"})
