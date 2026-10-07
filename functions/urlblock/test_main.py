"""Tests for the urlblock function handlers.

The Foundry SDK and FalconPy are stubbed in conftest.py, so no real SDK is needed.
Handlers obtain their Custom Storage client through `get_client`, which is patched
per module to return a MagicMock.
"""

import io
import threading
import types
import unittest
from unittest.mock import MagicMock, patch

from crowdstrike.foundry.function import Request

import app_core
import main  # noqa: F401  (registers all handlers)
from app_utils import paginated_search
from handlers import categories, policies, relationships


def make_request(body=None, **params):
    return Request(body=body, params=types.SimpleNamespace(**params))


def search_page(items, status_code=200, next_cursor=None):
    resp = {"status_code": status_code, "resources": items}
    if next_cursor:
        resp["body"] = {"meta": {"pagination": {"next": next_cursor}}}
    return resp


class HandlerTestCase(unittest.TestCase):
    """Base: patches `get_client` in the handler module under test."""

    module = None

    def setUp(self):
        self.logger = MagicMock()
        self.api = MagicMock()
        p = patch.object(self.module, "get_client", return_value=self.api)
        p.start()
        self.addCleanup(p.stop)


class ManageCategoryTestCase(HandlerTestCase):
    module = categories

    def test_success_uses_versioned_put(self):
        self.api.PutObjectByVersion.return_value = {"status_code": 200}
        req = make_request({"categoryName": "Games", "urls": "steam.com,epicgames.com"})

        resp = categories.manage_category(req, None, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertTrue(resp.body["success"])
        self.assertEqual(resp.body["categoryName"], "Games")
        self.api.PutObjectByVersion.assert_called_once()
        kwargs = self.api.PutObjectByVersion.call_args.kwargs
        self.assertEqual(kwargs["collection_version"], "v2.0")
        self.assertEqual(kwargs["collection_name"], "domain")
        self.api.PutObject.assert_not_called()

    def test_missing_name(self):
        resp = categories.manage_category(make_request({"categoryName": "", "urls": "a.com"}), None, self.logger)
        self.assertEqual(resp.code, 400)
        self.assertEqual(resp.body["error"], "Category name is required")

    def test_missing_urls(self):
        resp = categories.manage_category(make_request({"categoryName": "Games", "urls": ""}), None, self.logger)
        self.assertEqual(resp.code, 400)
        self.assertEqual(resp.body["error"], "URLs are required")

    def test_api_error_returns_500(self):
        self.api.PutObjectByVersion.return_value = {"status_code": 500, "body": {"message": "boom"}}
        resp = categories.manage_category(
            make_request({"categoryName": "Games", "urls": "steam.com"}), None, self.logger)
        self.assertEqual(resp.code, 500)


class SearchCategoriesTestCase(HandlerTestCase):
    module = categories

    def test_success_uses_get_versioned_object(self):
        self.api.GetVersionedObject.return_value = b'{"category": "Games", "domain": "steam.com"}'

        resp = categories.search_categories(make_request(category="Games"), None, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["category"], "Games")
        kwargs = self.api.GetVersionedObject.call_args.kwargs
        self.assertEqual(kwargs["collection_version"], "v2.0")
        self.assertEqual(kwargs["collection_name"], "domain")
        self.assertEqual(kwargs["object_key"], "games")
        self.api.GetObject.assert_not_called()

    def test_client_failure_returns_500(self):
        with patch.object(categories, "get_client", side_effect=Exception("Connection failed")):
            resp = categories.search_categories(make_request(), None, self.logger)
        self.assertEqual(resp.code, 500)
        self.assertIn("Connection failed", resp.errors[0].message)


class ListCategoriesTestCase(HandlerTestCase):
    module = categories

    def test_returns_resources_and_pagination(self):
        self.api.SearchObjects.return_value = search_page([
            {"_key": "Games", "category": "Games", "domain": "steam.com"},
            {"_key": "News", "category": "News", "domain": "bbc.com"},
        ])

        resp = categories.list_categories(make_request(), None, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["total_items"], 2)
        self.assertEqual(resp.body["categories"], ["Games", "News"])
        self.assertEqual(len(resp.body["domains"]), 2)
        pagination = resp.body["pagination"]
        self.assertEqual(pagination["returned"], 2)
        self.assertEqual(pagination["pages_fetched"], 1)
        self.assertFalse(pagination["has_more"])
        self.assertIsNone(pagination["next_cursor"])
        kwargs = self.api.SearchObjects.call_args.kwargs
        self.assertEqual(kwargs["collection_name"], "domain")
        self.assertEqual(kwargs["collection_version"], "v2.0")

    def test_limit_param_is_capped_at_500(self):
        self.api.SearchObjects.return_value = search_page([])
        categories.list_categories(make_request(limit="9999"), None, self.logger)
        self.assertEqual(self.api.SearchObjects.call_args.kwargs["limit"], 500)

    def test_api_error_returns_400(self):
        self.api.SearchObjects.return_value = {"status_code": 403, "errors": ["denied"]}
        resp = categories.list_categories(make_request(), None, self.logger)
        self.assertEqual(resp.code, 400)
        self.assertIn("API Error", resp.errors[0].message)


class ListPoliciesTestCase(HandlerTestCase):
    module = policies

    def test_groups_by_rule_group_and_includes_pagination(self):
        self.api.SearchObjects.return_value = search_page([
            {"_key": "1", "rule_group_id": "rg1", "policy_name": "P1", "category_name": "Games"},
            {"_key": "2", "rule_group_id": "rg1", "policy_name": "P1", "category_name": "News"},
            {"_key": "3", "rule_group_id": "rg2", "policy_name": "P2", "category_name": "Games"},
            {"_key": "4", "category_name": "orphan"},  # no rule_group_id: ignored
        ])

        resp = policies.list_policies(make_request(), None, self.logger)

        self.assertEqual(resp.code, 200)
        by_id = {p["rule_group_id"]: p for p in resp.body["policies"]}
        self.assertEqual(set(by_id), {"rg1", "rg2"})
        self.assertEqual(by_id["rg1"]["categories"], ["Games", "News"])
        self.assertEqual(resp.body["pagination"]["returned"], 4)
        self.assertFalse(resp.body["pagination"]["truncated"])
        self.assertEqual(self.api.SearchObjects.call_args.kwargs["collection_version"], "v5.0")

    def test_api_error_returns_500(self):
        self.api.SearchObjects.return_value = {"status_code": 500}
        resp = policies.list_policies(make_request(), None, self.logger)
        self.assertEqual(resp.code, 500)


class RelationshipTestCase(HandlerTestCase):
    module = relationships

    def test_get_relationship_builds_graph_with_pagination(self):
        self.api.SearchObjects.return_value = search_page([{
            "_key": "k1", "category_name": "Games", "rule_group_id": "rg1",
            "rule_group_name": "P_RuleGroup", "host_group_id": "hg1", "host_group_name": "Hosts",
        }])

        resp = relationships.get_relationship(make_request(), None, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertTrue(resp.body["success"])
        self.assertEqual(len(resp.body["relationship"]), 1)
        graph = resp.body["graphData"]
        self.assertEqual({n["type"] for n in graph["nodes"]}, {"category", "rule_group", "host_group"})
        self.assertEqual(len(graph["links"]), 2)
        self.assertEqual(resp.body["pagination"]["returned"], 1)

    def test_get_relationship_api_error_returns_500(self):
        self.api.SearchObjects.return_value = {"status_code": 500}
        resp = relationships.get_relationship(make_request(), None, self.logger)
        self.assertEqual(resp.code, 500)

    def test_manage_relationship_success(self):
        self.api.PutObjectByVersion.return_value = {"status_code": 200}
        req = make_request({
            "category_name": "Games", "rule_group_id": "rg-123", "host_group_id": "hg-456",
            "rule_group_name": "Games_RuleGroup", "host_group_name": "Hosts",
        })

        resp = relationships.manage_relationship(req, None, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["relationshipId"], "games_rg-123_hg-456")
        kwargs = self.api.PutObjectByVersion.call_args.kwargs
        self.assertEqual(kwargs["collection_version"], "v5.0")
        self.assertEqual(kwargs["collection_name"], "relationship")
        self.assertEqual(kwargs["object_key"], "games_rg-123_hg-456")

    def test_manage_relationship_missing_fields(self):
        req = make_request({"category_name": "Games", "rule_group_id": "", "host_group_id": ""})
        resp = relationships.manage_relationship(req, None, self.logger)
        self.assertEqual(resp.code, 400)
        self.assertIn("error", resp.body)
        self.api.PutObjectByVersion.assert_not_called()


class PaginatedSearchTestCase(unittest.TestCase):
    def test_follows_cursor_and_drops_inclusive_duplicate(self):
        api = MagicMock()
        api.SearchObjects.side_effect = [
            search_page([{"_key": "a"}, {"_key": "b"}], next_cursor="b"),
            search_page([{"_key": "b"}, {"_key": "c"}]),  # cursor item repeated
        ]
        result = paginated_search(api, "domain", "v2.0", page_size=2)
        self.assertEqual([r["_key"] for r in result["resources"]], ["a", "b", "c"])
        self.assertEqual(result["pagination"]["pages_fetched"], 2)
        self.assertFalse(result["pagination"]["has_more"])
        self.assertEqual(api.SearchObjects.call_args_list[1].kwargs["start"], "b")

    def test_truncated_when_max_pages_reached(self):
        api = MagicMock()
        api.SearchObjects.return_value = search_page([{"_key": "a"}, {"_key": "b"}], next_cursor="b")
        result = paginated_search(api, "domain", "v2.0", page_size=2, max_pages=1)
        self.assertTrue(result["pagination"]["truncated"])
        self.assertEqual(result["pagination"]["next_cursor"], "b")

    def test_stop_when_returns_match(self):
        api = MagicMock()
        api.SearchObjects.return_value = search_page([{"_key": "a"}, {"_key": "b"}])
        result = paginated_search(api, "domain", "v2.0", stop_when=lambda r: r["_key"] == "b")
        self.assertEqual(result["match"], {"_key": "b"})

    def test_error_response(self):
        api = MagicMock()
        api.SearchObjects.return_value = {"status_code": 500}
        self.assertIn("error", paginated_search(api, "domain", "v2.0"))


class ProcessCsvRecordsTestCase(unittest.TestCase):
    CSV = "category,urls\nGames,steam.com\nNews,bbc.com\nBad,\nShort\n"

    def run_process(self, api, **kwargs):
        logger = MagicMock()
        with patch("builtins.open", return_value=io.StringIO(self.CSV)):
            results = categories.process_csv_records(
                csv_path="/fake/path.csv", custom_storage=api, logger=logger,
                collection_name="domain", collection_version="v2.0", **kwargs)
        return results, logger

    def test_writes_valid_rows_with_versioned_method(self):
        api = MagicMock()
        api.PutObjectByVersion.return_value = {"status_code": 200}

        results, logger = self.run_process(api)

        self.assertEqual(api.PutObjectByVersion.call_count, 2)
        keys = {c.kwargs["object_key"] for c in api.PutObjectByVersion.call_args_list}
        self.assertEqual(keys, {"games", "news"})
        for c in api.PutObjectByVersion.call_args_list:
            self.assertEqual(c.kwargs["collection_version"], "v2.0")
            self.assertEqual(c.kwargs["collection_name"], "domain")
        api.PutObject.assert_not_called()
        self.assertEqual(results["total_rows"], 4)
        self.assertEqual(results["success_count"], 2)
        # "Bad," fails validation (empty domain); "Short" has <2 columns and is skipped
        self.assertEqual(results["error_count"], 1)
        logger.error.assert_called()

    def test_runs_writes_concurrently(self):
        barrier = threading.Barrier(2, timeout=5)

        def put(**_kw):
            barrier.wait()  # only completes if two workers run at the same time
            return {"status_code": 200}

        api = MagicMock()
        api.PutObjectByVersion.side_effect = put

        results, _ = self.run_process(api, max_workers=2)

        self.assertEqual(results["success_count"], 2)

    def test_http_error_codes_count_as_failures(self):
        api = MagicMock()
        api.PutObjectByVersion.side_effect = lambda **kw: {
            "status_code": 500 if kw["object_key"] == "news" else 200}

        results, logger = self.run_process(api)

        self.assertEqual(results["success_count"], 1)
        self.assertEqual(results["error_count"], 2)  # validation failure + HTTP 500
        self.assertTrue(any("News" in str(c) and "HTTP 500" in str(c) for c in logger.error.call_args_list))

    def test_exception_in_worker_is_counted_not_raised(self):
        api = MagicMock()
        api.PutObjectByVersion.side_effect = RuntimeError("network down")
        results, _ = self.run_process(api)
        self.assertEqual(results["success_count"], 0)
        self.assertEqual(results["error_count"], 3)


class GetClientCacheTestCase(unittest.TestCase):
    class FakeClient:
        def __init__(self, debug=False):
            pass

    def setUp(self):
        app_core._client_cache.clear()
        self.addCleanup(app_core._client_cache.clear)

    def test_reuses_client_while_token_valid(self):
        a = app_core.get_client(self.FakeClient)
        b = app_core.get_client(self.FakeClient)
        self.assertIs(a, b)

    def test_not_cached_without_token(self):
        with patch.object(app_core, "_current_token", return_value=None):
            a = app_core.get_client(self.FakeClient)
            b = app_core.get_client(self.FakeClient)
        self.assertIsNot(a, b)

    def test_rebuilt_after_ttl(self):
        a = app_core.get_client(self.FakeClient)
        key = self.FakeClient.__name__
        app_core._client_cache[key] = (a, app_core._client_cache[key][1] - app_core.TOKEN_TTL - 1)
        self.assertIsNot(a, app_core.get_client(self.FakeClient))


if __name__ == "__main__":
    unittest.main()
