// Loads category display names through the backend (/list-categories), which reads the
// whole collection with pagination. Names keep their original casing; use categoryKey()
// from ./keys.js to turn a name into its Custom Storage object key.
export async function fetchCategoryNames(falcon) {
  const resp = await falcon
    .cloudFunction({ name: 'urlblock', version: 1 })
    .path('/list-categories?limit=500&max_pages=20')
    .get();
  return resp?.body?.categories ?? [];
}
