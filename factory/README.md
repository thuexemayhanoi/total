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

## Độ dài bài viết (chung cho Writer và QA)
- **1.000–5.000 từ/bài**; chỉ nới độ dài, **không hạ QA 70/100** hoặc bỏ critical gate.
- Mốc chính thức: `lib/factory-runtime.js` (`ARTICLE_MIN_WORDS`, `ARTICLE_MAX_WORDS`).
- `writer-pack` cung cấp min/max cho AI; `qa.js` dùng đúng cùng mốc để quyết định PASS/REPAIR.
- Vẫn ít nhất 4 H2, 2 related PUBLISHED, không trùng slug, sai canonical hoặc bịa dữ kiện.

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED. QA lỗi: → REPAIR → QA → BLOCKED.
Trong cycle: một bài FAIL → repair queue, KHÔNG giữ cycle (bài PASS vẫn publish).

## 3 Writer AI ngoài — 1 Publisher duy nhất

```
W1: writer-pack --writer W1 --count 10 → viết module riêng → writer-verify → push
W2: writer-pack --writer W2 --count 10 → viết module riêng → writer-verify → push
W3: writer-pack --writer W3 --count 10 → viết module riêng → writer-verify → push
              ↓ shared article backlog trên main
     Factory Publish Lite (serial, QA ≥70, tối đa 30/run)
              ↓ scoped link QA → Content Index → 1 commit
```

Ba Writer dùng working copy riêng và ID shard cố định; bài có lỗi vẫn giữ quyền của Writer đó. Coordinator thực hiện maintenance, không viết prose; Watchdog chỉ đọc heartbeat riêng của W1/W2/W3. Không AI API hoặc tự đánh thức AI khi mất quota. Giữ Topic V2 approval; một publisher xử lý state chung theo `total-production` nên không có hai tác vụ ghi Matrix đồng thời. Các lệnh pair/cycle là đường recovery cũ.

Chi tiết: [THREE-EXTERNAL-WRITERS.md](../docs/THREE-EXTERNAL-WRITERS.md) và [PRODUCTION-ROLES.md](../docs/PRODUCTION-ROLES.md).

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
