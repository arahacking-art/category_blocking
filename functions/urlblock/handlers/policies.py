import time
import uuid
import traceback
from datetime import datetime
import pytz
from concurrent.futures import ThreadPoolExecutor, as_completed
from crowdstrike.foundry.function import Request, Response
from falconpy import FirewallManagement, FirewallPolicies, CustomStorage, HostGroup
from logging import Logger

from app_core import FUNC, get_client, COLLECTION_DOMAIN_VER, COLLECTION_RELATION_VER
from app_utils import _sanitize_url_list, _build_rule, paginated_search


@FUNC.handler(method='GET', path='/urlblock')
def on_create(_: Request, __: dict, logger: Logger) -> Response:
    """Handle requests to retrieve host groups."""
    logger.info("Starting host groups handler")
    try:
        hostgroup = get_client(HostGroup)
        response = hostgroup.query_host_groups()

        if response["status_code"] == 200:
            groups = response["body"]["resources"]
            groups_details = hostgroup.get_host_groups(ids=groups)

            host_groups_list = [
                {"id": group["id"], "name": group["name"]}
                for group in groups_details["body"]["resources"]
            ]
            return Response(code=200, body={"host_groups": host_groups_list})

        return Response(code=response["status_code"], body={"error": "Failed to retrieve host groups"})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Unexpected error occurred"})


def _write_relationships(categories_list, rule_group_id, host_group_id, host_group_name, policy_name, platform, whitelist, username, custom_storage):
    """Helper to write relationships to custom storage in parallel."""
    def _write_single(cat):
        rel_id = f"rel-{int(time.time() * 1000)}-{uuid.uuid4().hex[:8]}"
        record = {
            "category_name": cat,
            "rule_group_id": rule_group_id,
            "rule_group_name": f"{policy_name}_RuleGroup",
            "host_group_id": host_group_id,
            "host_group_name": host_group_name,
            "policy_name": policy_name,
            "platform": platform,
            "whitelist": whitelist,
            "created_at": datetime.now(pytz.UTC).isoformat(),
            "created_by": username
        }
        custom_storage.PutObjectByVersion(
            body=record,
            collection_name="relationship",
            collection_version=COLLECTION_RELATION_VER,
            object_key=rel_id
        )

    with ThreadPoolExecutor(max_workers=5) as executor:
        list(executor.map(_write_single, categories_list))


@FUNC.handler(method='POST', path='/create-rule')
def create_rule(request: Request, _: dict, logger: Logger) -> Response:
    """Create firewall rule groups and database records (Improvement A)."""
    try:
        if not request.body:
            return Response(code=400, body={"error": "Request body is required"})

        host_group_id = request.body.get('hostGroupId')
        policy_name = request.body.get('policyName', '').strip()
        platform = request.body.get('platform', '').lower()
        categories = request.body.get('categories', {})
        whitelist_raw = request.body.get('whitelist', '').strip()
        username = request.body.get('username', 'unknown')
        host_group_name = request.body.get('hostGroupName', 'Unknown Host Group')

        platform_name_map = {'windows': 'Windows', 'mac': 'Mac', 'linux': 'Linux'}
        if platform not in platform_name_map:
            return Response(code=400, body={"error": f"Platform must be one of: {', '.join(platform_name_map.keys())}"})
        
        platform_name = platform_name_map[platform]

        if not host_group_id or not policy_name or not isinstance(categories, dict):
            return Response(code=400, body={"error": "Missing required fields"})

        rules_list = []
        temp_counter = 0

        if whitelist_raw:
            wl_urls = _sanitize_url_list(whitelist_raw, separator=';')
            if wl_urls:
                rules_list.append(_build_rule("whitelist_allow", "ALLOW", ';'.join(wl_urls), str(temp_counter), f"Whitelist for {policy_name}"))
                temp_counter += 1

        for category_name, urls_raw in categories.items():
            if not urls_raw: continue
            clean_urls = _sanitize_url_list(urls_raw, separator=';')
            if not clean_urls: continue
            rules_list.append(_build_rule(f"deny_{category_name}", "DENY", ';'.join(clean_urls), str(temp_counter), f"Block {category_name}"))
            temp_counter += 1

        if not rules_list:
            return Response(code=400, body={"error": "No valid rules could be built"})

        mgmt = get_client(FirewallManagement)
        policies = get_client(FirewallPolicies)
        custom_storage = get_client(CustomStorage)

        # Create policy
        policy_resp = policies.create_policies(description=f"Policy for {policy_name}", name=policy_name, platform_name=platform_name)
        policy_id = policy_resp["body"]["resources"][0]["id"]
        policies.perform_action(action_name="enable", ids=policy_id)
        policies.perform_action(action_name="add-host-group", group_id=host_group_id, ids=policy_id)

        # Create rule group
        rg_resp = mgmt.create_rule_group(description=f"Rule group for {policy_name}", enabled=True, name=f"{policy_name}_RuleGroup", platform=platform, rules=rules_list)
        rule_group_id = rg_resp["body"]["resources"][0]

        # Attach rule group
        mgmt.update_policy_container(
            default_inbound="ALLOW", default_outbound="ALLOW", platform_id=platform, enforce=True,
            local_logging=True, is_default_policy=False, test_mode=False,
            rule_group_ids=rule_group_id, policy_id=policy_id, body={}
        )

        # Write relationships to DB (Improvement A)
        _write_relationships(list(categories.keys()), rule_group_id, host_group_id, host_group_name, policy_name, platform, whitelist_raw, username, custom_storage)

        return Response(code=200, body={
            "success": True,
            "policyName": policy_name,
            "ruleGroupId": rule_group_id,
            "rulesCreated": len(rules_list)
        })

    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to create rule"})


@FUNC.handler(method='GET', path='/list-policies')
def list_policies(_: Request, __: dict, logger: Logger) -> Response:
    try:
        custom_storage = get_client(CustomStorage)
        result = paginated_search(custom_storage, "relationship", COLLECTION_RELATION_VER)
        if "error" in result:
            return Response(code=500, body={"error": "Failed to list policies"})

        grouped: dict = {}
        for item in result['resources']:
            if not isinstance(item, dict): continue
            rg_id = item.get('rule_group_id')
            if not rg_id: continue

            if rg_id not in grouped:
                grouped[rg_id] = {
                    "rule_group_id": rg_id, "policy_name": item.get('policy_name', ''),
                    "host_group_id": item.get('host_group_id', ''), "host_group_name": item.get('host_group_name', ''),
                    "platform": item.get('platform', ''), "whitelist": item.get('whitelist', ''),
                    "created_at": item.get('created_at', ''), "created_by": item.get('created_by', ''),
                    "categories": []
                }
            cat = item.get('category_name')
            if cat and cat not in grouped[rg_id]["categories"]:
                grouped[rg_id]["categories"].append(cat)

        return Response(code=200, body={"policies": list(grouped.values()), "pagination": result["pagination"]})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to list policies"})


def _parallel_delete_relationships(rule_group_id, custom_storage):
    """Deletes relationships in parallel (Improvement C)."""
    result = paginated_search(custom_storage, "relationship", COLLECTION_RELATION_VER)
    if "error" not in result:
        keys_to_delete = []
        for item in result['resources']:
            if item.get('rule_group_id') == rule_group_id:
                obj_key = item.get('_key') or item.get('object_key') or item.get('key')
                if obj_key: keys_to_delete.append(obj_key)

        def _delete_single(key):
            custom_storage.DeleteObject(collection_name="relationship", collection_version=COLLECTION_RELATION_VER, object_key=key)

        with ThreadPoolExecutor(max_workers=5) as executor:
            list(executor.map(_delete_single, keys_to_delete))


@FUNC.handler(method='POST', path='/delete-policy')
def delete_policy(request: Request, _: dict, logger: Logger) -> Response:
    try:
        rule_group_id = request.body.get('rule_group_id', '').strip() if request.body else ''
        if not rule_group_id: return Response(code=400, body={"error": "rule_group_id is required"})

        mgmt = get_client(FirewallManagement)
        custom_storage = get_client(CustomStorage)

        mgmt.delete_rule_groups(ids=[rule_group_id])
        _parallel_delete_relationships(rule_group_id, custom_storage)

        return Response(code=200, body={"success": True})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to delete policy"})


@FUNC.handler(method='POST', path='/update-policy')
def update_policy(request: Request, _: dict, logger: Logger) -> Response:
    try:
        body = request.body or {}
        old_rg_id = body.get('ruleGroupId', '')
        policy_name = body.get('policyName', '')
        host_group_id = body.get('hostGroupId', '')
        platform = body.get('platform', '').lower()
        categories = body.get('categories', {})
        whitelist_raw = body.get('whitelist', '')
        username = body.get('username', 'unknown')
        host_group_name = body.get('hostGroupName', 'Unknown')

        platform_name = {'windows': 'Windows', 'mac': 'Mac', 'linux': 'Linux'}.get(platform)
        if not platform_name or not old_rg_id or not policy_name or not host_group_id:
            return Response(code=400, body={"error": "Missing required fields or invalid platform"})

        mgmt = get_client(FirewallManagement)
        fw_policies = get_client(FirewallPolicies)
        custom_storage = get_client(CustomStorage)

        mgmt.delete_rule_groups(ids=[old_rg_id])
        _parallel_delete_relationships(old_rg_id, custom_storage)

        rules_list = []
        temp_counter = 0
        if whitelist_raw:
            wl_urls = _sanitize_url_list(whitelist_raw, separator=';')
            if wl_urls:
                rules_list.append(_build_rule("whitelist_allow", "ALLOW", ';'.join(wl_urls), str(temp_counter)))
                temp_counter += 1

        for cat_name, urls_raw in categories.items():
            if not urls_raw: continue
            clean_urls = _sanitize_url_list(urls_raw, separator=';')
            if clean_urls:
                rules_list.append(_build_rule(f"deny_{cat_name}", "DENY", ';'.join(clean_urls), str(temp_counter)))
                temp_counter += 1

        policy_resp = fw_policies.create_policies(description=f"Policy for {policy_name}", name=policy_name, platform_name=platform_name)
        policy_id = policy_resp["body"]["resources"][0]["id"]
        fw_policies.perform_action(action_name="enable", ids=policy_id)
        fw_policies.perform_action(action_name="add-host-group", group_id=host_group_id, ids=policy_id)

        rg_resp = mgmt.create_rule_group(description=f"Group for {policy_name}", enabled=True, name=f"{policy_name}_RuleGroup", platform=platform, rules=rules_list)
        new_rg_id = rg_resp["body"]["resources"][0]

        mgmt.update_policy_container(
            default_inbound="ALLOW", default_outbound="ALLOW", platform_id=platform, enforce=True,
            local_logging=True, is_default_policy=False, test_mode=False,
            rule_group_ids=new_rg_id, policy_id=policy_id, body={}
        )

        # Write new relationships
        _write_relationships(list(categories.keys()), new_rg_id, host_group_id, host_group_name, policy_name, platform, whitelist_raw, username, custom_storage)

        return Response(code=200, body={"success": True, "newRuleGroupId": new_rg_id})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to update policy"})


@FUNC.handler(method='GET', path='/simulate-policy')
def simulate_policy(request: Request, _: dict, logger: Logger) -> Response:
    try:
        fqdn = getattr(request.params, 'fqdn', '').strip().lower()
        if not fqdn: return Response(code=400, body={"error": "fqdn required"})
        
        custom_storage = get_client(CustomStorage)
        wildcard_query = f'*.{fqdn}'

        def _matches(item):
            domains = {d.strip().lower() for d in item.get('domain', '').split(';') if d.strip()}
            return fqdn in domains or wildcard_query in domains

        # Early return: stop paging as soon as the domain is found
        result = paginated_search(custom_storage, 'domain', COLLECTION_DOMAIN_VER,
                                  page_size=100, max_pages=50, stop_when=_matches)
        if "error" in result:
            return Response(code=500, body={"error": "Failed to simulate"})

        item = result["match"]
        if item:
            return Response(code=200, body={"encontrado": True, "categoria": item.get('category'), "mensaje": f"Bloqueado por {item.get('category')}", "pagination": result["pagination"]})

        return Response(code=200, body={"encontrado": False, "categoria": None, "mensaje": "No bloqueado", "pagination": result["pagination"]})
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to simulate"})


@FUNC.handler(method='GET', path='/check-enforcement')
def check_enforcement(request: Request, _: dict, logger: Logger) -> Response:
    """Verificar el estado de enforcement de una política específica."""
    logger.info("Starting /check-enforcement handler")
    try:
        policy_id = getattr(request.params, 'policy_id', '').strip()
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
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to check enforcement"})


@FUNC.handler(method='GET', path='/health-check')
def health_check(request: Request, _: dict, logger: Logger) -> Response:
    """Validación masiva de TODAS las políticas creadas por la app."""
    logger.info("Starting /health-check handler")
    try:
        custom_storage = get_client(CustomStorage)
        fw_policies = get_client(FirewallPolicies)
        mgmt = get_client(FirewallManagement)
        
        # 1. Read all relationships
        result = paginated_search(custom_storage, "relationship", COLLECTION_RELATION_VER)
        if "error" in result:
            return Response(code=500, body={"error": "Failed to read relationships"})

        # 2. Group by policy_name
        unique_policies = {}
        for item in result['resources']:
            if not isinstance(item, dict): continue
            policy_name = item.get('policy_name')
            if not policy_name: continue
            if policy_name not in unique_policies:
                unique_policies[policy_name] = item
                
        # 3. Check each policy
        results = []
        healthy_count = 0
        issues_count = 0
        
        for policy_name, rel_item in unique_policies.items():
            pol_info = {
                "policy_name": policy_name,
                "policy_id": None,
                "status": "error",
                "issues": []
            }
            
            # a. Find policy
            search_resp = fw_policies.query_combined_policies(filter=f"name:'{policy_name}'", limit=500)
            if search_resp.get('status_code') != 200 or not search_resp.get('body', {}).get('resources'):
                pol_info["issues"].append("Policy not found in Falcon")
                issues_count += 1
                results.append(pol_info)
                continue
                
            pol = search_resp['body']['resources'][0]
            policy_id = pol.get('id')
            pol_info['policy_id'] = policy_id
            
            # Enabled?
            pol_info['enabled'] = pol.get('enabled', False)
            if not pol.get('enabled'):
                pol_info["issues"].append("Policy DISABLED")
                
            # Host groups?
            groups = pol.get('groups', [])
            pol_info['host_groups'] = len(groups)
            if not groups:
                pol_info["issues"].append("No host groups assigned")
                
            # Enforcement & Rule Groups?
            cont_resp = mgmt.get_policy_containers(ids=policy_id)
            if cont_resp.get('status_code') == 200 and cont_resp.get('body', {}).get('resources'):
                container = cont_resp['body']['resources'][0]
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
        
        logger.info(f"Successfully completed /health-check")
        return Response(code=200, body=summary)
        
    except Exception as e:
        logger.error(traceback.format_exc())
        return Response(code=500, body={"error": "Failed to run health check"})
