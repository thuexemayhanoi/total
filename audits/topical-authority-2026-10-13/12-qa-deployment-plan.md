# QA Report and Deployment Plan — AUDIT-ONLY

Snapshot source commit: 8954a79f96b947c3ed1f3a14f95128b2c0d1fcef. This review did not deploy anything or run writer.

## Verified
- 1,010 published URLs in Matrix = 1,010 unique article sitemap URLs; no missing or extra.
- Category sitemap 15; hub sitemap 97; pages sitemap 5; taxonomy 15 parents and 97 hubs.
- robots.txt allows crawlers and cites the Wiki sitemap; index-policy entries empty.
- Sample HTML: rental category, 3 hubs and 3 articles: correct canonicals, no noindex, appropriate Article/CollectionPage types.
- Existing Wiki Domain Rebuild and Pages pipelines were SUCCESS before audit.

## NOT fully checked
- Live HTTP response, canonical, title, meta, H1, schema and internal links for EACH of 1,010 articles.
- Full semantic body collision detection and author/source/factual freshness.
- Real inbound/outbound links, anchors and orphans (graph file is taxonomy relationships, not clickable href verification).
- GSC data for Wiki subdomain; Core Web Vitals measurements for new audit.
- 688 PUBLISHED IDs missing from article-manifest.jsonl and whether stale derived SQLite is in use.

## P0 QA plan (read only)
1. Pin same Git SHA and batch article URLs in <=100 records each with checkpoints and error count.
2. Parse each generated article HTML and live HTTP: status, redirects, canonical, robots, JSON-LD, title/H1/meta, quick answers, actual href edges.
3. Build real link matrix incoming/outgoing/anchor. Flag orphans only after nav/template links are accounted.
4. Review semantic neighbors with full bodies, and only after GSC connection add clicks/impressions/CTR/position.
5. Do not claim 100% audit until every batch has checked URL IDs and match Matrix/sitemap.

## P1–P4 rollout proposal
P1: review /thue-xe/ pillar and 3 rental hubs; <=5-URL pilot after owner approval.
P2: improve approved supporting content and natural internal links; keep URL/canonical.
P3: only vetted new topic with true information gain, credible sources, collision guard and owner approval.
P4: expand clusters whose outcomes are measurable, not by arbitrary article quota.

## Deployment gate — future only
- Work on separate feature branch, preserve production, compare content hashes and URL inventory.
- Run existing generator and factory tests in CI, link integrity, 404/canonical/schema/sitemap/index gates, mobile 390/768/1440 QA.
- Only owner approval DUYET MERGE authorizes merge/deploy. Post-deploy diff and rollback per scoped commit.

Official content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
