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

## Production hiện hành — FAST WRITER, batch 1–10
```
Claude / Mistral / ChatGPT phiên ngoài (1–3 shard PLANNED riêng):
  writer-pack --count 10 [--shard k/3] → nghiên cứu + chống trùng ý
  → viết 1–10 module bài thực → verify-batch → push main
  → factory-publish.yml → scoped QA ≥ 70 + gate 404 → publish-batch
  → commit checkpoint/state → batch kế
```
Slot PLANNED legacy đã có không cần topic-approve: `topic-governance.json` = `mode=off`, `requireApproved=false`, `v1Generation=frozen`. **300 slot cũ có nhiều biến thể V1 trùng intent:** writer phải tự bỏ đề tài không có information gain. Khi hết topic giá trị, không mở refill V1 hoán vị để tăng số lượng. Tạo slot V2 mới vẫn cần quy trình coordinator trong code hiện tại. Publisher chạy theo push và fallback theo cron `17,47 * * * *` cho backlog đã có module. Coordinator mỗi ~10 phút chỉ recover/check-state/topic-check/queue-refill (frozen) và báo trạng thái; watchdog mỗi giờ chỉ phát hiện lỗi/đứng, không tự gọi AI. Tương thích legacy: `publish-pair`, `cycle-plan`, `cycle-qa`, `cycle-publish` dùng khi recovery thủ công, không là hot path. Xem [`docs/FAST-WRITER-LOOP.md`](../docs/FAST-WRITER-LOOP.md) và [`docs/PRODUCTION-ROLES.md`](../docs/PRODUCTION-ROLES.md).

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
- Một publisher duy nhất dùng khóa giao dịch **ownership-safe**, không bắt writer lấy khóa bằng tay. 2–3 writer ngoài chỉ được dùng shard/working copy độc lập, không cùng sửa một file. TTL 30 phút, unlock đúng owner+token; không tự force-unlock.
- Hot path publish theo exact batch 1–10 ID/push; cron recovery chọn tối đa 10 article-backed ID chưa publish từ `plan-chunk`, không sweep slot chưa có module và không publish-all. Pair ≤2, cycle ≤18 là lối recovery cũ.
- Ghi file atomic (ghi tạm → đổi tên); checkpoint khớp ma trận.
- Bộ test: `test.js` + `test-hardening.js` + `test-reliability.js` (4 tầng) + `test-pair.js` + `test-cycle.js` + `test-coordinator.js` — xem `docs/FACTORY-RELIABILITY.md`.
- Không gọi AI API trong GitHub Actions.
- CI: `article-quality.yml` heavy gate khi engine/workflow đổi; bài content push chỉ đi qua scoped QA tại `factory-publish.yml`. Full-site audit trong `factory-deep-audit.yml` MANUAL-ONLY (workflow_dispatch).

## Kiểm tra engine/deep audit (không chạy mỗi batch bài)

Bài content theo `writer-pack` → `verify-batch` → push và publisher. Các lệnh sau dùng khi kiểm thử engine hoặc audit thủ công:
```bash
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 70
```
