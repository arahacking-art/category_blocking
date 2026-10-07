"""Tests for policy lifecycle (create/update/delete/health), key helpers and analytics."""

import types
import unittest
from unittest.mock import MagicMock, patch

from crowdstrike.foundry.function import Request

import main  # noqa: F401
from app_utils import category_key, relationship_key, validate_fqdn, _validate_falcon_response, _get_username
from handlers import analytics, categories, policies

OK = {"status_code": 200}


def req(body=None, **params):
    return Request(body=body, params=types.SimpleNamespace(**params))


def falcon_ok(resources):
    return {"status_code": 200, "body": {"resources": resources}}


class KeyHelpersTestCase(unittest.TestCase):
    def test_category_key_normalizes(self):
        self.assertEqual(category_key(" Social Media "), "Social_Media")
        self.assertEqual(category_key("AI_Applications"), "AI_Applications")  # legacy keys unchanged
        self.assertNotEqual(category_key("Games"), category_key("games"))

    def test_relationship_key_is_deterministic(self):
        self.assertEqual(relationship_key("Social Media", "rg", "hg"), "Social_Media_rg_hg")

    def test_validate_fqdn(self):
        for good in ("a.com", "*.a.com", "sub-d.example.co.uk"):
            self.assertTrue(validate_fqdn(good), good)
        for bad in ("a", "-a.com", "a..com", "http://a.com"):
            self.assertFalse(validate_fqdn(bad), bad)

    def test_validate_falcon_response(self):
        self.assertEqual(_validate_falcon_response({"status_code": 201}, "op"), (True, None))
        ok, err = _validate_falcon_response(
            {"status_code": 409, "body": {"errors": [{"message": "duplicate name"}]}}, "op")
        self.assertFalse(ok)
        self.assertEqual(err, "duplicate name")
        ok, err = _validate_falcon_response({"status_code": 429}, "op")
        self.assertIn("429", err)

    def test_get_username_from_config_only(self):
        self.assertEqual(_get_username({"user": {"username": "ana"}}), "ana")
        self.assertEqual(_get_username({"user": {"uuid": "u-1"}}), "u-1")
        self.assertEqual(_get_username({}), "unknown")
        self.assertEqual(_get_username(None), "unknown")


class PolicyTestCase(unittest.TestCase):
    def setUp(self):
        self.logger = MagicMock()
        self.mgmt, self.pol, self.store = MagicMock(), MagicMock(), MagicMock()
        clients = {"FirewallManagement": self.mgmt, "FirewallPolicies": self.pol, "CustomStorage": self.store}
        p = patch.object(policies, "get_client", side_effect=lambda cls: clients[cls.__name__])
        p.start()
        self.addCleanup(p.stop)

        self.pol.create_policies.return_value = falcon_ok([{"id": "pol-new"}])
        self.pol.perform_action.return_value = OK
        self.mgmt.create_rule_group.return_value = falcon_ok(["rg-new"])
        self.mgmt.update_policy_container.return_value = OK
        self.mgmt.delete_rule_groups.return_value = OK
        self.pol.delete_policies.return_value = OK
        self.store.PutObjectByVersion.return_value = OK
        self.store.DeleteObject.return_value = OK
        self.store.SearchObjects.return_value = {"status_code": 200, "resources": [
            {"_key": "old1", "rule_group_id": "rg-old"},
            {"_key": "old2", "rule_group_id": "rg-old"},
            {"_key": "other", "rule_group_id": "rg-other"},
        ]}

    create_body = {
        "hostGroupId": "hg1", "hostGroupName": "Hosts", "policyName": "P", "platform": "windows",
        "categories": {"Games": "steam.com"}, "whitelist": "ok.com", "username": "spoofed",
    }

    # --- create-rule -------------------------------------------------------
    def test_create_rule_success_stores_policy_id_and_ignores_body_username(self):
        resp = policies.create_rule(req(dict(self.create_body)), {"user": {"username": "ana"}}, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["policyId"], "pol-new")
        self.assertEqual(resp.body["ruleGroupId"], "rg-new")
        self.assertEqual(resp.body["rulesCreated"], 2)
        self.assertEqual(resp.body["relationsWritten"], 1)
        kwargs = self.store.PutObjectByVersion.call_args.kwargs
        self.assertEqual(kwargs["body"]["policy_id"], "pol-new")
        self.assertEqual(kwargs["body"]["created_by"], "ana")
        self.assertEqual(kwargs["object_key"], "Games_rg-new_hg1")

    def test_create_rule_policy_conflict_returns_falcon_error(self):
        self.pol.create_policies.return_value = {
            "status_code": 409, "body": {"errors": [{"message": "name exists"}]}}
        resp = policies.create_rule(req(dict(self.create_body)), {}, self.logger)
        self.assertEqual(resp.code, 409)
        self.assertIn("name exists", resp.body["error"])
        self.pol.delete_policies.assert_not_called()

    def test_create_rule_rolls_back_policy_when_rule_group_fails(self):
        self.mgmt.create_rule_group.return_value = {"status_code": 400, "body": {"errors": [{"message": "bad"}]}}
        resp = policies.create_rule(req(dict(self.create_body)), {}, self.logger)
        self.assertEqual(resp.code, 500)
        self.pol.delete_policies.assert_called_once_with(ids="pol-new")
        self.store.PutObjectByVersion.assert_not_called()

    def test_create_rule_rolls_back_both_when_attach_fails(self):
        self.mgmt.update_policy_container.return_value = {"status_code": 500}
        resp = policies.create_rule(req(dict(self.create_body)), {}, self.logger)
        self.assertEqual(resp.code, 500)
        self.mgmt.delete_rule_groups.assert_called_once_with(ids=["rg-new"])
        self.pol.delete_policies.assert_called_once_with(ids="pol-new")

    def test_create_rule_partial_relationship_failure_does_not_roll_back(self):
        self.store.PutObjectByVersion.return_value = {"status_code": 500}
        resp = policies.create_rule(req(dict(self.create_body)), {}, self.logger)
        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["relationsWritten"], 0)
        self.pol.delete_policies.assert_not_called()

    # --- update-policy -----------------------------------------------------
    update_body = {
        "ruleGroupId": "rg-old", "policyId": "pol-old", "policyName": "P", "hostGroupId": "hg1",
        "platform": "windows", "categories": {"Games": "steam.com"},
    }

    def test_update_deletes_old_policy_first_and_old_rule_group_last(self):
        order = []
        self.pol.create_policies.side_effect = lambda **k: (order.append("create"), falcon_ok([{"id": "pol-new"}]))[1]
        self.mgmt.delete_rule_groups.side_effect = lambda **k: (order.append("delete_rg"), OK)[1]
        self.pol.delete_policies.side_effect = lambda **k: (order.append("delete_pol"), OK)[1]

        resp = policies.update_policy(req(dict(self.update_body)), {}, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["newPolicyId"], "pol-new")
        self.assertEqual(order, ["delete_pol", "create", "delete_rg"])
        self.mgmt.delete_rule_groups.assert_called_once_with(ids=["rg-old"])
        self.pol.delete_policies.assert_called_once_with(ids="pol-old")
        deleted = {c.kwargs["object_key"] for c in self.store.DeleteObject.call_args_list}
        self.assertEqual(deleted, {"old1", "old2"})

    def test_update_create_failure_keeps_old_rule_group_and_relations(self):
        self.pol.create_policies.return_value = {"status_code": 409, "body": {"errors": [{"message": "dup"}]}}
        resp = policies.update_policy(req(dict(self.update_body)), {}, self.logger)
        self.assertEqual(resp.code, 409)
        self.pol.delete_policies.assert_called_once_with(ids="pol-old")  # only the old policy was removed
        self.mgmt.delete_rule_groups.assert_not_called()
        self.store.DeleteObject.assert_not_called()

    def test_update_rule_group_failure_rolls_back_new_policy_and_keeps_old_rule_group(self):
        self.mgmt.create_rule_group.return_value = {"status_code": 500}
        resp = policies.update_policy(req(dict(self.update_body)), {}, self.logger)
        self.assertEqual(resp.code, 500)
        self.assertEqual([c.kwargs["ids"] for c in self.pol.delete_policies.call_args_list], ["pol-old", "pol-new"])
        self.mgmt.delete_rule_groups.assert_not_called()

    def test_update_aborts_untouched_if_old_policy_cannot_be_deleted(self):
        self.pol.delete_policies.return_value = {"status_code": 403, "body": {"errors": [{"message": "forbidden"}]}}
        resp = policies.update_policy(req(dict(self.update_body)), {}, self.logger)
        self.assertEqual(resp.code, 500)
        self.assertIn("Nothing was changed", resp.body["error"])
        self.pol.create_policies.assert_not_called()

    def test_update_without_policy_id_skips_policy_delete(self):
        body = {k: v for k, v in self.update_body.items() if k != "policyId"}
        resp = policies.update_policy(req(body), {}, self.logger)
        self.assertEqual(resp.code, 200)
        self.pol.delete_policies.assert_not_called()

    def test_create_rule_logs_config(self):
        policies.create_rule(req(dict(self.create_body)), {"user": {"username": "ana"}}, self.logger)
        self.logger.info.assert_any_call("Config received: {'user': {'username': 'ana'}}")

    # --- simulate-policy ---------------------------------------------------
    def test_simulate_rejects_invalid_fqdn(self):
        self.assertEqual(policies.simulate_policy(req(fqdn="not a domain"), {}, self.logger).code, 400)
        self.store.SearchObjects.assert_not_called()

    def test_simulate_accepts_valid_fqdn(self):
        self.store.SearchObjects.return_value = {"status_code": 200, "resources": [
            {"category": "Games", "domain": "steam.com;*.steam.com"}]}
        resp = policies.simulate_policy(req(fqdn="Steam.com"), {}, self.logger)
        self.assertTrue(resp.body["encontrado"])

    # --- delete-policy / list-policies --------------------------------------
    def test_delete_policy_removes_policy_rule_group_and_relations(self):
        resp = policies.delete_policy(req({"rule_group_id": "rg-old", "policy_id": "pol-old"}), {}, self.logger)
        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["relationsDeleted"], 2)
        self.mgmt.delete_rule_groups.assert_called_once_with(ids=["rg-old"])
        self.pol.delete_policies.assert_called_once_with(ids="pol-old")

    def test_delete_policy_requires_rule_group(self):
        self.assertEqual(policies.delete_policy(req({}), {}, self.logger).code, 400)

    def test_delete_counts_only_successful_deletes(self):
        self.store.DeleteObject.side_effect = [OK, {"status_code": 500}]
        resp = policies.delete_policy(req({"rule_group_id": "rg-old"}), {}, self.logger)
        self.assertEqual(resp.body["relationsDeleted"], 1)
        self.pol.delete_policies.assert_not_called()

    def test_list_policies_includes_policy_id(self):
        self.store.SearchObjects.return_value = {"status_code": 200, "resources": [
            {"rule_group_id": "rg1", "policy_id": "pol1", "policy_name": "P", "category_name": "Games"}]}
        resp = policies.list_policies(req(), {}, self.logger)
        self.assertEqual(resp.body["policies"][0]["policy_id"], "pol1")

    # --- health-check ------------------------------------------------------
    def test_health_check_uses_batched_calls_by_policy_id(self):
        self.store.SearchObjects.return_value = {"status_code": 200, "resources": [
            {"policy_id": "p1", "policy_name": "A"}, {"policy_id": "p1", "policy_name": "A"},
            {"policy_id": "p2", "policy_name": "B"}]}
        self.pol.get_policies.return_value = falcon_ok([
            {"id": "p1", "enabled": True, "groups": [{"id": "g"}]},
            {"id": "p2", "enabled": False, "groups": []}])
        self.mgmt.get_policy_containers.return_value = falcon_ok([
            {"policy_id": "p1", "enforce": True, "rule_group_ids": ["rg"]},
            {"policy_id": "p2", "enforce": True, "rule_group_ids": ["rg"]}])

        resp = policies.health_check(req(), {}, self.logger)

        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["healthy_count"], 1)
        self.assertEqual(resp.body["issues_count"], 1)
        self.pol.get_policies.assert_called_once()
        self.mgmt.get_policy_containers.assert_called_once()
        self.pol.query_combined_policies.assert_not_called()
        self.assertEqual(sorted(self.pol.get_policies.call_args.kwargs["ids"]), ["p1", "p2"])

    def test_health_check_legacy_name_lookup_escapes_quotes(self):
        self.store.SearchObjects.return_value = {"status_code": 200, "resources": [
            {"policy_name": "o'brien' OR name:*"}]}
        self.pol.query_combined_policies.return_value = falcon_ok([])
        resp = policies.health_check(req(), {}, self.logger)
        self.assertEqual(resp.code, 200)
        flt = self.pol.query_combined_policies.call_args.kwargs["filter"]
        self.assertEqual(flt, "name:'o\\'brien\\' OR name:*'")
        self.assertEqual(resp.body["policies"][0]["issues"], ["Policy not found in Falcon"])


class SanitizeUrlListTestCase(unittest.TestCase):
    def test_drops_invalid_entries_and_adds_wildcards(self):
        from app_utils import _sanitize_url_list
        result = _sanitize_url_list("https://a.com/; bad entry ;b.org;*.c.net", separator=';')
        self.assertEqual(result, ["a.com", "*.a.com", "b.org", "*.b.org", "*.c.net"])

    def test_all_invalid_gives_empty(self):
        from app_utils import _sanitize_url_list
        self.assertEqual(_sanitize_url_list("nope;1.2.3.4", separator=';'), [])

    def test_manage_category_rejects_all_invalid_urls(self):
        resp = categories.manage_category(
            req({"categoryName": "X", "urls": "nope"}), {}, MagicMock())
        self.assertEqual(resp.code, 400)


class ImportCsvHandlerTestCase(unittest.TestCase):
    def test_requires_csv_in_body(self):
        resp = categories.import_csv_handler(req({}), {}, MagicMock())
        self.assertEqual(resp.code, 400)

    def test_imports_csv_text_with_normalized_keys(self):
        api = MagicMock()
        api.PutObjectByVersion.return_value = OK
        with patch.object(categories, "get_client", return_value=api):
            resp = categories.import_csv_handler(
                req({"csv": "category,url\nSocial Media,a.com;*.a.com\n"}), {}, MagicMock())
        self.assertEqual(resp.code, 200)
        self.assertEqual(resp.body["successful_imports"], 1)
        self.assertEqual(api.PutObjectByVersion.call_args.kwargs["object_key"], "Social_Media")


class CsvAggregationTestCase(unittest.TestCase):
    def run_csv(self, text):
        api = MagicMock()
        api.PutObjectByVersion.return_value = OK
        with patch.object(categories, "get_client", return_value=api):
            resp = categories.import_csv_handler(req({"csv": text}), {}, MagicMock())
        return resp, api

    def test_one_row_per_domain_is_merged_per_category(self):
        resp, api = self.run_csv(
            "category,url\nAI Apps,openai.com\nAI Apps,claude.ai\nGames,steam.com\nAI Apps,openai.com\n")
        self.assertEqual(resp.body["total_rows"], 4)
        self.assertEqual(resp.body["successful_imports"], 2)
        self.assertEqual(resp.body["failed_imports"], 0)
        by_key = {c.kwargs["object_key"]: c.kwargs["body"] for c in api.PutObjectByVersion.call_args_list}
        self.assertEqual(set(by_key), {"AI_Apps", "Games"})
        self.assertEqual(by_key["AI_Apps"]["category"], "AI Apps")
        self.assertEqual(by_key["AI_Apps"]["domain"].split(";"),
                         ["openai.com", "*.openai.com", "claude.ai", "*.claude.ai"])
        self.assertEqual(resp.body["domains_imported"], 6)

    def test_header_is_optional_and_invalid_rows_are_counted(self):
        resp, api = self.run_csv("Games,steam.com\nGames,not a domain\n,x.com\n")
        self.assertEqual(resp.body["successful_imports"], 1)
        self.assertEqual(resp.body["failed_imports"], 2)
        self.assertEqual(api.PutObjectByVersion.call_count, 1)


class CategoryCaseConflictTestCase(unittest.TestCase):
    def test_manage_category_rejects_key_differing_only_by_case(self):
        api = MagicMock()
        api.SearchObjects.return_value = {"status_code": 200, "resources": [{"_key": "AI_Apps"}]}
        with patch.object(categories, "get_client", return_value=api):
            resp = categories.manage_category(
                req({"categoryName": "ai apps", "urls": "a.com"}), {}, MagicMock())
        self.assertEqual(resp.code, 409)
        self.assertIn("AI_Apps", resp.body["error"])
        api.PutObjectByVersion.assert_not_called()

    def test_manage_category_updates_existing_exact_key(self):
        api = MagicMock()
        api.SearchObjects.return_value = {"status_code": 200, "resources": [{"_key": "AI_Applications"}]}
        api.PutObjectByVersion.return_value = OK
        with patch.object(categories, "get_client", return_value=api):
            resp = categories.manage_category(
                req({"categoryName": "AI Applications", "urls": "a.com"}), {}, MagicMock())
        self.assertEqual(resp.code, 200)
        self.assertEqual(api.PutObjectByVersion.call_args.kwargs["object_key"], "AI_Applications")

    def test_import_keeps_legacy_keys_and_flags_case_conflicts(self):
        api = MagicMock()
        api.SearchObjects.return_value = {"status_code": 200, "resources": [{"_key": "AI_Applications"}]}
        api.PutObjectByVersion.return_value = OK
        csv_text = "category,url\nAI_Applications,a.com\nai applications,b.com\nGames,c.com\n"
        with patch.object(categories, "get_client", return_value=api):
            resp = categories.import_csv_handler(req({"csv": csv_text}), {}, MagicMock())
        keys = {c.kwargs["object_key"] for c in api.PutObjectByVersion.call_args_list}
        self.assertEqual(keys, {"AI_Applications", "Games"})
        self.assertEqual(resp.body["failed_imports"], 1)


class AnalyticsTruncatedTestCase(unittest.TestCase):
    def run_handler(self, mgmt):
        with patch.object(analytics, "get_client", return_value=mgmt):
            return analytics.get_domain_analytics(req(), {}, MagicMock())

    def event(self):
        return {"domain_name_list": "a.com", "host_name": "h", "timestamp": "2026-01-01T00:00:00Z"}

    def test_not_truncated_when_all_pages_read(self):
        mgmt = MagicMock()
        mgmt.query_events.return_value = falcon_ok(["e1"])
        mgmt.get_events.return_value = falcon_ok([self.event()])
        resp = self.run_handler(mgmt)
        self.assertFalse(resp.body["truncated"])
        self.assertIsNone(resp.body["message"])
        self.assertEqual(resp.body["visualization_data"]["summary"]["total_blocks"], 1)

    def test_truncated_when_page_cap_reached(self):
        mgmt = MagicMock()
        mgmt.query_events.return_value = falcon_ok([f"e{i}" for i in range(500)])
        mgmt.get_events.return_value = falcon_ok([self.event()])
        resp = self.run_handler(mgmt)
        self.assertTrue(resp.body["truncated"])
        self.assertEqual(mgmt.query_events.call_count, 20)

    def test_truncated_on_api_error(self):
        mgmt = MagicMock()
        mgmt.query_events.return_value = {"status_code": 500}
        self.assertTrue(self.run_handler(mgmt).body["truncated"])


if __name__ == "__main__":
    unittest.main()
