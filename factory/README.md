# Content Factory — AI WIKI TOTAL

Bộ máy sinh nội dung và trang tĩnh của AI WIKI TOTAL.

## Thành phần
| File | Vai trò |
| --- | --- |
| `site.config.js` | Cấu hình site: tên, URL, basePath, thứ tự trang chủ, menu |
| `data/categories.js` | 15 danh mục cha + 97 hub con (nguồn sự thật duy nhất) |
| `data/articles/*.js` | Dữ liệu bài viết (module JS) |
| `data/topic-pool.js` | 327 topic {hub, slug, title} cho queue-refill (không có intent) |
| `lib/shell.js` | Vỏ trang: header, footer, nav, breadcrumb |
| `lib/schema.js` | JSON-LD: WebSite, CollectionPage, Article, BreadcrumbList |
| `lib/render.js` | Kết xuất trang chủ, danh mục, hub, bài viết, trang tiện ích |
| `lib/content-index.js` | Content index: article-manifest.jsonl (source of truth) + content-index.sqlite (derived cache, không commit) — cần Node 22 (node:sqlite) |
| `lib/factory-runtime.js` | Hàm thuần orchestration: backlog/chunk/cycle/refill/invariant |
| `generate.js` | Sinh toàn bộ site tĩnh + chỉ mục + sitemap (`--check`, `--out`) |
| `qa.js` | MINIMAL PRODUCTION QA GATE (70–100 PASS, <70 FAIL/REPAIR; 7 critical gate) |
| `seo.js` | Kiểm định SEO theo bài — ADVISORY, KHÔNG chặn publish |
| `factory.js` | CLI vòng đời slot + cycle pipeline + content index |
| `test.js` | Bộ kiểm thử nền tảng (chạy sau generate) |
| `test-pair.js` | Regression pair mode (PAIR_SIZE = 2, exact push scope, txn recovery) |
| `test-cycle.js` | Regression production cycle (12–18 bài, scoped QA, refill, defer REPAIR, 1 build/deploy) |
| `state/` | matrix.json, factory-state.json, checkpoint.json, manifest.json, article-manifest.jsonl (sqlite sinh tại chỗ, KHÔNG commit) |

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED. QA lỗi: → REPAIR → QA → BLOCKED.
Trong cycle: một bài FAIL → repair queue, KHÔNG giữ cycle (bài PASS vẫn publish).

## Production cycle (12–18 bài, 3 writer)
```
queue-refill (planned < 100 → refill ~300 topic, chỉ coordinator)
→ cycle-plan (12–18 slot PLANNED)
→ 3 writer chỉ viết
→ cycle-qa (scoped minimal QA, chỉ bài mới — KHÔNG quét toàn site)
→ PASS ≥ 70 → cycle-publish (coordinator duy nhất, build/deploy ĐÚNG 1 lần)
→ PUBLISHED → cycle mới
```
Pair mode (commit-based): `verify-sources <ID,ID>` → push → factory-publish.yml `publish-pair` atomic.
Coordinator tự động: `factory-coordinator.yml` tick mỗi 10 phút (cron lệch phút, concurrency `total-production` dùng chung với factory-publish.yml) — recover → check-state → queue-refill → cycle-plan → idle exit 0 → cycle-qa → cycle-publish → manifest-sync → verify-invariant → commit state. Mỗi run bounded một tick, KHÔNG while-true. Writer là external (session Mistral ngoài) đọc `CYCLE_ALLOCATE` — Actions không tự viết bài.

## Content index (scale 10k–100k bài)
- `state/article-manifest.jsonl` (commit) + content files = SOURCE OF TRUTH.
- `state/content-index.sqlite` = DERIVED CACHE (id, slug, normalized title/topic, intent, entities, cluster, content_hash, qa_status, published_at) — KHÔNG commit; chỉ coordinator ghi/rebuild (`manifest-sync` / `index-rebuild` / `index-check`); missing/corrupt/stale → rebuild an toàn.

## Capacity (cấu hình, không hard limit)
`capacity` luôn đọc từ `state/matrix.json` (canonical — KHÔNG hardcode con số trong docs/code; giá trị ví dụ dưới chỉ là **EXAMPLE ONLY**):
```bash
node factory/factory.js expand-capacity <NEW_CAPACITY> --dry-run  # xem trước: CURRENT/REQUESTED/DELTA/STATE_SAFE...
node factory/factory.js expand-capacity <NEW_CAPACITY>            # migration thật: lock -> snapshot -> migrate -> verify -> rollback nếu fail
node factory/factory.js set-planned-target <N>                    # mục tiêu kế hoạch (<= capacity, >= số slot đã có)
```

## Bảo vệ
- One writer — lock **ownership-safe** (token unique; unlock cần `--owner` + `--token` đúng; TTL 30 phút reclaim theo contract).
- Publish theo explicit IDs (pair ≤ 2, cycle ≤ 18 mỗi txn) — KHÔNG publish-all, KHÔNG sweep PASS.
- Ghi file atomic (ghi tạm → đổi tên); checkpoint khớp ma trận.
- Bộ test: `test.js` + `test-hardening.js` + `test-reliability.js` (4 tầng) + `test-pair.js` + `test-cycle.js` + `test-coordinator.js` — xem `docs/FACTORY-RELIABILITY.md`.
- Không gọi AI API trong GitHub Actions.
- CI: article-quality.yml theo change-mode (CONTENT_ONLY → verify-sources scoped; ENGINE_CHANGE → heavy gate); full-site audit chỉ trong factory-deep-audit.yml MANUAL-ONLY (workflow_dispatch).

## Trình tự chuẩn
```bash
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 70
```
