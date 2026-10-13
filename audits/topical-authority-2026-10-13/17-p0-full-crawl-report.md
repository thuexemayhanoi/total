# P0 audit: full live HTTP/HTML crawl + manifest consistency

**READ-ONLY**, source pinned to commit `8954a79f96b947c3ed1f3a14f95128b2c0d1fcef`.

## Site-wide full article sitemap crawl, 2026-10-13
- Source: https://wiki.thuexemaynguyentu.com/sitemap-articles.xml — **1,010 unique loc URLs**.
- **1,010/1,010 attempted** via same-origin public GET, 11 sequential batches, maximum 10 concurrent requests.
- First pass: **1,009 HTTP 200**, **1 HTTP 503**; **0 HTTP 404**, **0 HTTP 429**.
- One 503: https://wiki.thuexemaynguyentu.com/local/tp-hcm/di-xe-may-o-tp-hcm-luu-y/
- **Two GET retries both returned HTTP 200**, so transient server-side error, not a persistent missing URL. Monitor recurrence; do not redirect/delete.
- Canonical exact = 1,009 of 1,009 normal initial HTML responses (the error page is excluded).
- H1 and meta description each present on 1,009 of 1,009 normal HTML responses. All 1,010 responses had a title tag, but the 503 page's title is NOT evidence of a normal SEO article title.
- JSON-LD parse errors: **0**; noindex detected: **0**.
- Internal href extraction: **125,428 per-page unique same-origin link occurrences**, union **1,128 URLs**; actual target status and contextual anchor audit remain unverified.
- All 11 batch summaries are in `18-p0-batch-checkpoints.csv` and `16-p0-checkpoint.json`.

## Manifest P0 finding
- `matrix.json` published: **1,010**; generated manifest `kind=article`: **1,010**; article sitemap: **1,010**.
- `article-manifest.jsonl`: **322** (first S00001, last S00322), **688 published IDs absent**.
- `content-index.status` compares derived SQLite to JSONL row count/hash, NOT to all published Matrix IDs. Thus a stale-but-matching subset may be reported as OK.
- Actual SQLite file/runtime count unavailable from repository, **not verified**. Cannot conclude live writer has read only 322 records.
- Inspected workflow paths did not show automatic `manifest-sync` for each batch. `manifest-sync` and `index-rebuild` write data and were **NOT EXECUTED**.

## P0 priorities for owner approval (future write work)
1. Read-only `index-check` cross-verify full published IDs / modules / sitemap vs JSONL manifest, fail closed when incomplete.
2. Pilot corrected manifest sync/index rebuild on dev branch using fixed snapshot and Diff/QA, not on production.
3. After scoped approval, integrate coordinator-owned manifest update transaction after each published batch. Preserve Article Factory and external Writer locks.
4. Investigate recurrent HTTP 503 only if reproduced; one recovered event does not justify cache/hosting changes.

## QA limits
- Full live HTTP and HTML metadata checks: completed on 1,010/1,010 sitemap URLs with one recovered transient 503.
- Not checked: each distinct internal link target HTTP response, per-page actual anchor relationships, source citations accuracy, topic intent similarity, Google Search Console, true indexed count, Web Vitals.
- Browser-run complete per-URL raw JSON was produced in the browser's separate output; **the audit branch records the verified aggregate and eleven checkpoints, not the raw per-URL JSON blob**.

## Production safety
No production changes. No index/manifest sync, no Writer activation, no generator, no merge, no URL, canonical or index policy edits.
