# P0-02 — Candidate manifest and index repair

**NO PRODUCTION MERGE OR DEPLOYMENT.** Source branch: `fix/p0-02-manifest-completeness-20261013`, parent commit `4abd309241d3ae825b523fe30655167fa4c7183d`.

At snapshot: 1,066 PUBLISHED vs 322 committed JSONL manifest rows (744 missing). Root cause: hot-path batch publish did not refresh the committed article manifest. The deep audit refresh runs only manually.

## Proposed behavior
- `index-check` now validates ALL PUBLISHED IDs, slugs, clusters and QA states against Matrix, before SQLite row count/hash. False green with a truncated but hash-matched cache is blocked.
- `index-refresh <ID,...> --role coordinator` updates only the 1–10 modified published module files on the normal path. If legacy metadata is incomplete, one guarded bootstrap reads the whole source corpus.
- SQLite rebuild uses an ignored staging `.tmp` file and an atomic rename after success. Manifest bytes restore after failed SQLite refresh.
- `factory-publish.yml` has a fail-closed refresh and check step AFTER scoped publish/404 guard but BEFORE committing/pushing outputs. Existing writer does not gain write permission.
- Feature-only QA runs the full repository suite and may stage the corrected JSONL in this **same branch** if green, never in main.

## QA and rollback
1. Strict guard must reject original 322-row manifest.
2. Dedicated tests cover unit, integration, published-ID invariants and failure recovery.
3. Engine regression, link integrity, generator byte check, Topic V2 and QA >=70 must remain green.
4. Compare diff before owner approval: no article source, SEO head, sitemap, robots, URL, canonical or index-policy changes.
5. Before any future merge, rebase onto live main (which may gain new Writer articles) and regenerate candidate metadata; never overwrite newer published state.
6. Rollback code/workflow via commit revert on same branch. Keep published article records; SQLite is derived and can be rebuilt.

**Owner approval to merge/deploy still required.**
