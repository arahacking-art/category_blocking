import re

def _sanitize_url(url: str) -> str:
    """Strip whitespace, http(s):// protocol prefixes and trailing slashes."""
    url = url.strip()
    url = re.sub(r'^https?://', '', url)
    url = url.rstrip('/')
    return url

def _sanitize_url_list(raw: str, separator: str = ';') -> list:
    """
    Split a separator-delimited URL string, sanitize each entry and
    auto-generate *.domain wildcard variants.
    """
    seen: set = set()
    result: list = []
    for part in raw.split(separator):
        clean = _sanitize_url(part)
        if not clean:
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
