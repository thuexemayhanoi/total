# P0 checkpoint — committed manifest drift and index completeness guard

Source main HEAD pinned: `8954a79f96b947c3ed1f3a14f95128b2c0d1fcef` (2026-10-13). Audit is READ-ONLY on production.

## Verified
- `factory/state/matrix.json`: 1,320 slots = 1,010 PUBLISHED + 310 PLANNED.
- `sitemap-articles.xml`: 1,010 unique URLs, exactly equal to all PUBLISHED paths; no missing or extra.
- `factory/state/manifest.json` (GENERATED file manifest): 1,010 kind=article records.
- **`factory/state/article-manifest.jsonl`: 322 rows, first S00001, last S00322; 688 PUBLISHED IDs not represented.** This is metadata sync drift, NOT a site URL deletion.
- `factory/lib/content-index.js` `status()` checks SQLite row count and manifest content SHA against **article-manifest**, not Matrix PUBLISHED IDs or modules. Therefore a perfectly hash-matched SQLite index containing 322 records COULD be reported as OK despite missing 688 published IDs. Actual SQLite state was NOT accessible/verified (gitignored).
- `factory/factory.js`: `manifest-sync` writes JSONL and `index-rebuild` writes JSONL/SQLite; both are **NOT read-only** and NOT run.
- The inspected `.github/workflows/factory-publish.yml` and `wiki-domain-rebuild.yml` do not show an automatic `manifest-sync` step for each published batch, so drift is consistent with missing ongoing synchronization. Other upstream steps not exhaustively analyzed.
- The source-based Topic Gate uses article modules and Matrix/topic source; presence of an incomplete manifest does not itself prove the live writer allowed duplicate posts.

## Suggested P0 fix (NOT APPROVED for production)
1. Add a *read-only* `index-check` completeness gate comparing Matrix PUBLISHED IDs, article modules, JSONL manifest and derived SQLite counts/hash.
2. On separate development branch, test coordinator-only `manifest-sync` and `index-rebuild` against frozen snapshot; inspect diff, count IDs and SHA; do not automatically overwrite current production manifest yet.
3. Schedule safe coordinator sync **after each successful publish batch**, preserving writer ownership and transactional checks. Design exact hook after examining publish workflow end-to-end.
4. Run regression tests that deliberately truncate the manifest to 322 rows while Matrix has 1,010 PUBLISHED and assert CI fails closed.
5. Request specific OWNER APPROVAL before merging or running writes in main.

## Full P0 URL crawl
Live 1,010-URL crawl is independently in progress; no counts or successes will be claimed until verified checkpoints return. Partial findings must identify their exact checked URL count.

**Production writes during P0 audit: ZERO.**
