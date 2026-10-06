from crowdstrike.foundry.function import Function

# Initialize FUNCtion
FUNC = Function.instance()

# ---------------------------------------------------------------------------
# Version Constants
# ---------------------------------------------------------------------------
COLLECTION_DOMAIN_VER = "v2.0"
COLLECTION_RELATION_VER = "v5.0"
APP_VERSION = "1.1.0"

# ---------------------------------------------------------------------------
# Lazy-init Singleton Cache (Warm-Start Pattern)
# ---------------------------------------------------------------------------
_client_cache: dict = {}

def get_client(client_class):
    """
    Return a cached singleton instance of the given FalconPy client class.
    """
    key = client_class.__name__
    if key not in _client_cache:
        _client_cache[key] = client_class(debug=False)
    return _client_cache[key]
