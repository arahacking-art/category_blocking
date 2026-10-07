# Category Blocking — Custom Web Filtering App

A custom category-based web filtering app built on CrowdStrike Falcon Foundry.
It blocks domains (FQDNs) by category using Falcon Firewall Management.

**Current version:** `1.2.0` (`APP_VERSION` in `functions/urlblock/app_core.py`)

## Credits

This project is based on the official CrowdStrike Falcon Foundry sample
**[foundry-sample-category-blocking](https://github.com/CrowdStrike/foundry-sample-category-blocking)**,
created and maintained by [CrowdStrike](https://github.com/CrowdStrike). All credit for the
original design, architecture and base implementation goes to the CrowdStrike team.

This repository extends that sample with the reliability, performance and UI changes described in
[Recent changes](#recent-changes). Please refer to the original repository for its license terms.

## How it works

The app creates host-level firewall policies that block outbound traffic to specific domains grouped by category. It uses the FalconPy APIs (`FirewallManagement`, `FirewallPolicies`, `HostGroup`, `CustomStorage`) to:

1. Create firewall policies with enforcement enabled
2. Create rule groups with FQDN rules (full domain + `*.domain` wildcard)
3. Assign policies to host groups
4. Store category ↔ rule group ↔ host group ↔ policy relationships in Foundry collections

**Important:** This app operates at L3/L4 (host firewall). It is not an HTTP (L7) proxy. It blocks by full domain (FQDN), not by URL path or content.

## Architecture

### Backend (Python Functions — `functions/urlblock`)
- `main.py` — Entry point, registers all handlers
- `app_core.py` — FUNC instance, FalconPy client cache with TTL, collection versions
- `app_utils.py` — Shared utilities:
  - URL/FQDN sanitization and validation, firewall rule building
  - Deterministic Custom Storage keys (`category_key`, `relationship_key`)
  - Paginated, parallel collection reads (`list_object_keys`, `read_all_objects`, `get_object`, `delete_object`)
  - FalconPy response validation (`_validate_falcon_response`)
  - Query parameter reading from the Foundry SDK (`query_param`)
  - Identifying the user performing the action (`resolve_creator`) and token-free context for logs (`safe_context`)
- `handlers/policies.py` — Policy CRUD, health check, enforcement, simulation
- `handlers/categories.py` — Category CRUD, CSV import
- `handlers/analytics.py` — Firewall event analytics
- `handlers/relationships.py` — Category-policy-host group relationship management

### Collections (Custom Storage)
- **domain** (`v2.0`) — One object per category, with its domains separated by `;`. The object key is the normalized category name (see [Custom Storage keys](#custom-storage-keys)).
- **relationship** (`v5.0`) — Relationships between categories, rule groups, host groups and policies. Includes `policy_id`, `created_by` and `created_by_source`.

### UI Pages (React + Shoelace — `ui/pages/urlblocking`)

| Tab | Route | Description |
|-----|-------|-------------|
| **Category Blocking Policy** | `/` | Create category blocking policies, whitelist, and domain simulator |
| **Custom Categories** | `/about` | Create categories manually and import categories from CSV |
| **Domain Analytics** | `/domain-analytics` | Tables of most visited domains, unique IPs and hosts |
| **Firewall Rules** | `/firewall-rules` | View, edit and delete the policies created by the app |

Shared frontend utilities (`src/utils/`):
- `api.js` — `callFunction()`: single wrapper for calling the `urlblock` cloud function. Turns 4xx/5xx responses and execution failures into exceptions, so an error is never shown as a success.
- `categories.js` — `fetchCategoryNames()`: paginated category list from the `domain` collection.
- `keys.js` — `categoryKey()`: must match the backend's `category_key()`.

## Recent changes

### Backend

**Reliability and consistency**
- **Automatic rollback** when creating policies: if any step fails (create policy → enable → assign host group → create rule group → attach it), the resources already created in Falcon are deleted.
- **Safe policy updates** (`/update-policy`), in phases:
  1. Only the old policy is deleted (frees its name); the old rule group and relationships are kept as a safety net.
  2. The new policy + rule group are created (rolled back on failure).
  3. The old rule group and relationships are deleted.
  4. The new relationships are written.
- **Full deletion** (`/delete-policy`): now also deletes the firewall policy (`policy_id`), not just the rule group, and returns how many relationships were removed.
- Every FalconPy call is validated with `_validate_falcon_response`, with clear error messages.
- Relationships are stored with a deterministic key (`<category>_<rule_group_id>_<host_group_id>`) instead of random IDs, avoiding duplicates.

**Custom Storage reads**
- `SearchObjects` only returns metadata, so collections are now read by listing keys with `ListObjectsByVersion` (paginated with the `start` cursor) and fetching each object in parallel with `GetVersionedObject`.
- No more fixed 1000-object limit: configurable pagination (`page_size`, `max_pages`), and responses include a `pagination` block (`pages_fetched`, `returned`, `has_more`, `truncated`).
- `/list-categories` accepts `limit` and `max_pages` and reports `failed_reads`.

**Categories and CSV import**
- `/import-csv` now receives the CSV content in the request body (`{"csv": "..."}`) instead of reading an `output.csv` bundled with the function.
- Rows of the same category are grouped and **one object per category** is written (in parallel), with validated, de-duplicated domains and automatic wildcards. The response includes `domains_imported`.
- Case conflict detection: `games` cannot be created if `Games` already exists (HTTP 409 on `/manage-category`).
- `/search-categories` requires the `category` parameter (400 if missing, 404 if not found).
- Removed the obsolete `/categories` endpoint (read from the local CSV) and `/update-rules` (replaced by `/update-policy`).

**Validation and simulation**
- URLs are normalized to lowercase and entries that are not valid FQDNs are discarded.
- `/simulate-policy` validates the FQDN and also checks parent-domain wildcards (e.g. `mail.google.com` → `mail.google.com`, `*.mail.google.com`, `*.google.com`). It returns the matching rule (`regla`) and stops searching as soon as a match is found.

**Performance**
- `/health-check` batches Falcon queries (`get_policies` and `get_policy_containers` in a single call) instead of one call per policy. Values in FQL filters are escaped.
- `/domain-analytics` caps the query at 20 pages (10,000 events) and returns `truncated` + `message` when results may be incomplete.
- FalconPy client cache with a 1500 s TTL: clients are rebuilt after that time so expired tokens are never reused.

**Auditing**
- The user who creates/updates a policy is taken first from the Foundry request context; if unavailable, from the session user sent by the UI. The source is recorded in `created_by_source` (`context`, `ui` or `none`).

**Configuration and dependencies**
- `manifest.yml`: accurate descriptions for every handler, new `/healthz`, `/check-enforcement` and `/health-check` handlers, execution limits (`max_exec_duration_seconds: 300`, `max_exec_memory_mb: 512`), and `__pycache__`, `*.pyc` and test files excluded from deployment.
- `requirements.txt` with pinned versions (`crowdstrike-foundry-function==1.0.1`, `crowdstrike-falconpy>=1.4.0,<2.0.0`, `pytz>=2024.1`) and a new `requirements-dev.txt` (pytest, pytest-cov).
- New `.gitignore` (Python, Node, environments, IDE). `node_modules/` and `__pycache__/` are no longer tracked; `dist/` **is** tracked because Foundry deploys it as-is.

### Frontend (visual and behavior changes)

**Category Blocking Policy (`/`)**
- Clicking "Preview" before creating is no longer required: if there is no preview or the selection changed, it is regenerated automatically when creating.
- Clear error message when a selected category has no domains, listing which ones.
- Loading indicator on the create button, and the button is disabled while the preview loads.
- Status alerts open automatically.
- The domain simulator shows the backend result (category and the rule that blocks the domain).

**Custom Categories (`/about`)**
- New **"Import categories from CSV"** section: `.csv` file picker, *Import CSV* button with loading state, and an alert summarizing the result (categories, domains and rows imported, with failed rows shown as a warning).
- Help text describing the expected format (`category,url`, one row per domain).
- After creating or importing categories, the cached category list is refreshed across the app without reloading the page.

**Domain Analytics (`/domain-analytics`)**
- Plotly charts were replaced with **tables** (`DataTable` component): *Top 20 Most Visited Domains (Last 15 Days)*, *Visits vs Unique IPs by Domain*, and the per-domain detail table (visits, unique IPs, unique hosts, first/last seen).
- Warning alert when results are truncated.
- Errors and "no data" states are shown with `SlAlert` (danger / warning).
- Removed the `plotly.js-dist`, `react-plotly.js` and `d3` dependencies, significantly reducing bundle size.

**Firewall Rules (`/firewall-rules`)**
- Deleting a policy also deletes the firewall policy in Falcon (`policy_id` is sent).
- The **"Edit policy"** dialog sends the `policyId` so the update replaces the correct policy.
- Reading domains per category uses the same normalized key as the backend.

**General**
- All backend calls go through `callFunction()`, with consistent error messages.
- Global category cache in `FalconApiContext` (`cachedCategories`, `refreshCategories`).
- Styles (`styles.css`): custom scrollbar on the URL preview textarea and a `slideIn` animation for status messages.
- Shoelace tab navigation (`SlTabGroup`), with the active tab highlighted by a blue border.
- Debug `console.log` calls were removed.

## Custom Storage keys

A category's key is its name with every character that is not a letter, digit or `_` replaced by `_` (case is preserved, compatible with older keys such as `AI_Applications`):

```
category_key("Social Media")  ->  "Social_Media"
relationship_key(cat, rg, hg) ->  "<category_key(cat)>_<rg>_<hg>"
```

`categoryKey()` in `ui/pages/urlblocking/src/utils/keys.js` must stay identical to `category_key()` in `app_utils.py`.

## API Endpoints

### Policies
| Method | Path | Description |
|--------|------|-------------|
| POST | /create-rule | Create a policy with rule group and FQDN rules (with rollback) |
| GET | /list-policies | List all policies created by the app |
| POST | /update-policy | Replace a policy and rule group (`ruleGroupId`, `policyId`, ...) |
| POST | /delete-policy | Delete policy, rule group and relationships (`rule_group_id`, `policy_id`) |
| GET | /simulate-policy?fqdn= | Simulate whether an FQDN would be blocked |
| GET | /check-enforcement?policy_id= | Check enforcement of a specific policy |
| GET | /health-check | Bulk check of all policies |

### Categories
| Method | Path | Description |
|--------|------|-------------|
| GET | /list-categories?limit=&max_pages= | List categories with their domains |
| GET | /search-categories?category= | Find a category by name |
| POST | /manage-category | Create or update a category (`categoryName`, `urls`) |
| POST | /import-csv | Import categories from CSV (`{"csv": "<content>"}`) |

### Host Groups
| Method | Path | Description |
|--------|------|-------------|
| GET | /urlblock | List available host groups |

### Relationships
| Method | Path | Description |
|--------|------|-------------|
| POST | /manage-relationship | Create/update a relationship |
| GET | /get-relationship | Get relationships and graph data (nodes/links) |

### Analytics
| Method | Path | Description |
|--------|------|-------------|
| GET | /domain-analytics | Firewall event analytics (top domains, unique IPs and hosts) |

### System
| Method | Path | Description |
|--------|------|-------------|
| GET | /healthz | Basic function health check |

## CSV format

```csv
category,url
Games,steam.com
Games,epicgames.com
Social Media,facebook.com;instagram.com
```

- The header row is optional (detected when the first column is `category`).
- A row can contain one domain or several separated by `;`.
- Rows of the same category are merged; `*.domain` wildcards are added automatically.
- An existing category is replaced by the imported content.

## Prerequisites for filtering to work

1. **Falcon Sensor** installed and connected to the CID on every endpoint
2. **Windows Firewall** (MpsSvc service) running — Falcon enables it automatically with enforcement
3. **Falcon Firewall Management** enabled (active license)
4. **Enforcement ON** in the policy — without it, Falcon only monitors and does NOT block
5. **Policy assigned** to a host group with hosts
6. **Rule group attached** to the policy with FQDN rules

Use the `/health-check` endpoint to verify that all of these prerequisites are met.

## Known limitations (L3/L4)

- ❌ Cannot show a warning (WARN) page to the user
- ❌ Cannot enforce Safe Search (Google, Bing, YouTube)
- ❌ Cannot filter by URL path (full FQDN only)
- ❌ Cannot inspect HTTPS / SSL decryption
- ❌ Cannot filter by web page content

## Foundry technical limits

| Resource | Limit |
|----------|-------|
| Function timeout | 900 seconds (the app sets 300) |
| JSON payload (input + output) | 1018 KB |
| Memory per function | 1024 MB (the app sets 512) |
| Concurrent executions | 100 |
| Indexable fields per collection | 10 |

> Since the CSV is sent in the request body, files close to ~1 MB should be split into several imports.

## Development

### Backend
```bash
cd functions/urlblock
pip install -r requirements-dev.txt
pytest                # test_main.py and test_fixes.py
```

### Frontend
```bash
cd ui/pages/urlblocking
npm install
npm run build         # generates src/dist, which is what Foundry deploys
```

Remember to commit `src/dist` after every build.

## Setup

1. Install the app from the Foundry App Manager
2. Import categories from CSV or add them manually in **Custom Categories**
3. Create blocking policies in **Category Blocking Policy**
4. Review, edit or delete policies in **Firewall Rules**
5. Check the status with `/health-check`
