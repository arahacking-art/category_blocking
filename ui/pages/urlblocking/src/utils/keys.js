// Must match category_key() in functions/urlblock/app_utils.py
export function categoryKey(name) {
  return String(name).trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
}
