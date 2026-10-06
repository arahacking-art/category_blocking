import time

from crowdstrike.foundry.function import Function

# Initialize FUNCtion
FUNC = Function.instance()

# ---------------------------------------------------------------------------
# Version Constants
# ---------------------------------------------------------------------------
COLLECTION_DOMAIN_VER = "v2.0"
COLLECTION_RELATION_VER = "v5.0"
APP_VERSION = "1.2.0"

# ---------------------------------------------------------------------------
# Client cache with TTL (Warm-Start Pattern)
# ---------------------------------------------------------------------------
TOKEN_TTL = 1500  # seconds; cached clients are rebuilt after this

_client_cache: dict = {}  # class name -> (client, created_at)


def _current_token():
    """Return the Foundry SDK token, or None when unavailable."""
    token_fn = getattr(FUNC, "cs_sdk_token", None)
    if not callable(token_fn):
        return None
    try:
        return token_fn() or None
    except Exception:
        return None


def get_client(client_class):
    """
    Return a cached FalconPy client for the given class.

    Clients are reused for TOKEN_TTL seconds and rebuilt afterwards (or when
    no valid SDK token is available) so an expired token is never reused.
    """
    key = client_class.__name__
    now = time.monotonic()
    cached = _client_cache.get(key)
    if cached and now - cached[1] < TOKEN_TTL:
        return cached[0]
    client = client_class(debug=False)
    # Only cache when a valid token was obtained, otherwise retry next call
    if _current_token() is not None:
        _client_cache[key] = (client, now)
    else:
        _client_cache.pop(key, None)
    return client
