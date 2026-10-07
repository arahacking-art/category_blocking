import re

def category_key(category_name: str) -> str:
    """
    Deterministic Custom Storage key for a category. Case is preserved so keys created by
    earlier versions (e.g. 'AI_Applications') keep working; only characters other than
    letters, digits and '_' (spaces included) become '_'.
    """
    return re.sub(r'[^A-Za-z0-9_]', '_', category_name.strip())


def relationship_key(category_name: str, rule_group_id: str, host_group_id: str) -> str:
    """Generate deterministic Custom Storage key for a relationship."""
    return f"{category_key(category_name)}_{rule_group_id}_{host_group_id}"


def validate_fqdn(fqdn: str) -> bool:
    """Validate that a string looks like a valid FQDN or wildcard FQDN."""
    pattern = r'^(\*\.)?([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$'
    return bool(re.match(pattern, fqdn.strip()))


def _validate_falcon_response(response, operation_name: str, logger=None):
    """Validate a FalconPy response. Returns (success: bool, error_message: str | None)."""
    status = response.get("status_code", 0) if isinstance(response, dict) else 0
    if status in (200, 201, 202, 204):
        return True, None

    body = response.get("body") if isinstance(response, dict) else None
    errors = (body.get("errors") if isinstance(body, dict) else None) or []
    if errors and isinstance(errors[0], dict):
        error_msg = errors[0].get("message", "Unknown error from CrowdStrike")
    else:
        error_msg = f"CrowdStrike API returned status {status}"

    if logger:
        if 400 <= status < 500:
            logger.warning(f"{operation_name} failed ({status}): {error_msg}")
        else:
            logger.error(f"{operation_name} failed ({status}): {error_msg}")

    return False, error_msg


def _get_username(config) -> str:
    """Extract the authenticated username from the Foundry context (never from the request body)."""
    if isinstance(config, dict):
        user = config.get('user', {})
        if isinstance(user, dict):
            return user.get('username', '') or user.get('uuid', '') or 'unknown'
        return config.get('username', '') or 'unknown'
    return 'unknown'


def _sanitize_url(url: str) -> str:
    """Strip whitespace, http(s):// protocol prefixes and trailing slashes."""
    url = url.strip()
    url = re.sub(r'^https?://', '', url)
    url = url.rstrip('/')
    return url

def _sanitize_url_list(raw: str, separator: str = ';') -> list:
    """
    Split a separator-delimited URL string, sanitize each entry, drop entries
    that are not valid FQDNs and auto-generate *.domain wildcard variants.
    """
    seen: set = set()
    result: list = []
    for part in raw.split(separator):
        clean = _sanitize_url(part)
        if not clean or not validate_fqdn(clean):
            continue
        if clean not in seen:
            seen.add(clean)
            result.append(clean)
        # Auto-add wildcard only for non-wildcard entries (*.domain.com)
        if not clean.startswith('*'):
            wildcard = f'*.{clean}'
            if wildcard not in seen:
                seen.add(wildcard)
                result.append(wildcard)
    return result

def _build_rule(name: str, action: str, fqdn: str, temp_id: str,
                description: str = "") -> dict:
    """Build a single firewall rule dict for use in create_rule_group."""
    return {
        "action": action,
        "address_family": "NONE",
        "description": description or f"Rule: {name}",
        "direction": "OUT",
        "enabled": True,
        "fields": [
            {
                "name": "image_name",
                "value": "",
                "type": "windows_path",
                "values": []
            }
        ],
        "fqdn_enabled": True,
        "fqdn": fqdn,
        "icmp": {"icmp_code": "", "icmp_type": ""},
        "local_address": [{"address": "*", "netmask": 0}],
        "log": False,
        "monitor": {"count": "1", "period_ms": "1000000"},
        "name": name,
        "protocol": "*",
        "remote_address": [{"address": "*", "netmask": 0}],
        "temp_id": temp_id
    }


def paginated_search(custom_storage, collection_name: str, collection_version: str,
                     page_size: int = 100, max_pages: int = 10,
                     filter: str = None, stop_when=None) -> dict:
    """
    Read a collection page by page using the SearchObjects `start` cursor.

    `stop_when(item)` (optional) is evaluated per item; the scan ends as soon
    as it returns True and that item is returned in `match`.

    Returns {"resources", "match", "pagination"} or {"error"} on API failure.
    """
    resources: list = []
    match = None
    cursor = None
    pages = 0
    has_more = False

    while pages < max_pages:
        kwargs = {
            "collection_name": collection_name,
            "collection_version": collection_version,
            "limit": page_size,
        }
        if filter:
            kwargs["filter"] = filter
        if cursor:
            kwargs["start"] = cursor

        response = custom_storage.SearchObjects(**kwargs)
        if not response or response.get("status_code", 200) != 200:
            return {"error": response}
        pages += 1

        page = [r for r in response.get("resources", []) if isinstance(r, dict)]
        # `start` may be inclusive: drop the item the cursor points at
        if cursor and page and page[0].get("_key") == cursor:
            page = page[1:]
        resources.extend(page)

        if stop_when:
            found = next((r for r in page if stop_when(r)), None)
            if found is not None:
                match = found
                has_more = False
                break

        # Cursor for the next page: API-provided offset, else last object key
        body = response.get("body")
        meta = response.get("meta") or (body.get("meta") if isinstance(body, dict) else None) or {}
        next_cursor = (meta.get("pagination") or {}).get("next") or (page[-1].get("_key") if page else None)
        has_more = len(page) >= page_size and bool(next_cursor) and next_cursor != cursor
        if not has_more:
            break
        cursor = next_cursor

    return {
        "resources": resources,
        "match": match,
        "pagination": {
            "page_size": page_size,
            "pages_fetched": pages,
            "returned": len(resources),
            "has_more": has_more,
            "next_cursor": cursor if has_more else None,
            "truncated": has_more,
        },
    }
