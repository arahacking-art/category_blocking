"""Pytest bootstrap: stub the Foundry SDK and FalconPy so tests run without them.

Stubs are installed in sys.modules before any handler module is imported, so
`FUNC.handler(...)` decorators are identity functions and handlers stay directly
callable.
"""

import os
import sys
import types
from unittest.mock import MagicMock

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))


class _Request:
    def __init__(self, body=None, params=None):
        self.body = body
        self.params = params if params is not None else types.SimpleNamespace()


class _Response:
    def __init__(self, code=200, body=None, errors=None, **_):
        self.code = code
        self.body = body
        self.errors = errors or []


class _APIError:
    def __init__(self, code=500, message=""):
        self.code = code
        self.message = message


class _Function:
    _instance = None

    def __init__(self):
        self.cs_sdk_token = MagicMock(return_value="fake-token")

    @classmethod
    def instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

    def handler(self, *_args, **_kwargs):
        return lambda func: func

    def run(self):
        pass


def _install_stubs():
    foundry = types.ModuleType("crowdstrike.foundry.function")
    foundry.Function = _Function
    foundry.Request = _Request
    foundry.Response = _Response
    foundry.APIError = _APIError

    sys.modules["crowdstrike"] = types.ModuleType("crowdstrike")
    sys.modules["crowdstrike.foundry"] = types.ModuleType("crowdstrike.foundry")
    sys.modules["crowdstrike.foundry.function"] = foundry

    falconpy = types.ModuleType("falconpy")
    for name in ("CustomStorage", "FirewallManagement", "FirewallPolicies", "HostGroup"):
        setattr(falconpy, name, type(name, (), {"__init__": lambda self, **kw: None}))
    sys.modules["falconpy"] = falconpy


_install_stubs()
