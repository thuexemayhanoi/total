# Content Factory

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED.
Khi QA thất bại: → REPAIR → QA → BLOCKED (sau nhiều lần sửa không đạt).
Trong production cycle: một bài FAIL → REPAIR queue, KHÔNG giữ cycle — các bài PASS vẫn publish.

## Lệnh CLI (`node factory/factory.js`)
- `status` — tổng quan ma trận, writer lock, checkpoint.
- `plan <hub> <slug> <tiêu đề...> [--intent <type/slug>]` — thêm slot PLANNED. Intent mặc định `informational/<slug>`.
- `list` — liệt kê slot theo trạng thái.
- `research <id>` / `write <id>` — chuyển trạng thái.
- `qa <id>` — QA minimal gate bài của slot; `qa-preview <id>` — QA thử read-only.
- **Production 3 vai trò** (docs/PRODUCTION-ROLES.md): `writer-next` (WRITER 1 lấy pair 2 ID — resume trước, new sau, không trả PUBLISHED), `writer-heartbeat` (phase writing/waiting-publish/idle), `production-status` (phase tổng hợp), `liveness` (watchdog read-only, exit 1 khi stall > 120' hoặc lỗi escalated), `error-log`/`error-queue`/`error-resolve` (hàng đợi lỗi Đốc công 2→3, tự escalated tại 3 lần thử). `queue-refill [--role coordinator]` (planned < 100 → refill topic từ topic-pool, chỉ coordinator). Legacy recovery thủ công: `cycle-plan` (read-only, 12–18 slot PLANNED), `cycle-qa <ID,ID,...>`, `cycle-publish <ID,ID,...>` — KHÔNG còn phân công 3 writer.
- `publish <ID> [<ID>...]` — legacy manual (≤ 10 ID); `publish-pair <ID,ID>` — hot path pair (≤ 2 ID, txn atomic).
- `verify-pair <ID,ID>` / `verify-sources <ID,ID>` — light verify / rà source read-only (SEO/intent chỉ advisory).
- `audit [--min-score 70]` — deep audit MANUAL-ONLY mọi bài PUBLISHED (KHÔNG chạy trong production loop).
- `resume`, `backlog [--fail-if-claimable]`, `check-state`, `plan-chunk`, `verify-invariant`, `publish-plan`, `push-scope`, `change-mode`, `recover-txn`, `drain-bound`, `drain-iteration` (legacy/manual recovery), `lock`/`unlock`, `expand-capacity`, `set-planned-target`.
- **Content index**: `manifest-sync [--role R]` (đồng bộ `factory/state/article-manifest.jsonl` từ articles+matrix — JSONL source of truth), `index-rebuild [--role R]` (dựng lại `content-index.sqlite` derived cache), `index-check` (read-only: SQLite vs manifest).

## Content index — JSONL source of truth + SQLite derived cache (scale 10k–100k bài)
- **Source of truth**: `factory/state/article-manifest.jsonl` (được commit) + content files trong `factory/data/articles/`.
- **`factory/state/content-index.sqlite` là DERIVED CACHE — KHÔNG BAO GIỜ commit** (đã .gitignore). Schema: id, slug, normalized title/topic, intent, entities, cluster, content_hash, qa_status, published_at.
- **QA/query đọc SQLite thay vì rescan** toàn bộ bài cũ — `index-check` xác minh `quick_check` + số dòng + `manifest_sha256`.
- **CHỈ coordinator** được ghi/rebuild SQLite + manifest (`assertCoordinator`: role ≠ coordinator bị từ chối; writer read-only).
- Missing/corrupt/stale → `index-rebuild` dựng lại an toàn từ full manifest + content; `index-check` phát hiện và exit 1 yêu cầu rebuild.
- Xem thêm trong `factory/lib/content-index.js` (node:sqlite — cần Node 22).

## Pipeline publish tự động (GitHub Actions)
- **factory-coordinator.yml (maintenance tick)** — schedule `7,17,27,37,47,57 * * * *` (mỗi 10 phút) + `workflow_dispatch`; mỗi run BOUNDED một tick: recover-txn → check-state → queue-refill (idempotent) → manifest-sync → verify-invariant → backlog + production-status → commit state CHỈ KHI có diff thật (tick rỗng không commit). KHÔNG while-true; push bằng GITHUB_TOKEN không tự kích workflow kế tiếp. Concurrency `total-production` dùng CHUNG với factory-publish.yml → hai actor không bao giờ chạy đè nhau. Writer là EXTERNAL (session Mistral ngoài đọc `writer-next`); Actions không tự viết prose, không fake article. Watchdog **factory-liveness.yml** chạy mỗi giờ read-only (`liveness`): stall > 120' hoặc lỗi escalated → Actions đỏ — KHÔNG thể tự resume phiên Mistral.
- **factory-publish.yml (pair)** — writer push article files → pipeline: recover txn → `push-scope` (EXACT IDs) → guard `check-state` → `publish-pair` (scoped QA minimal ≥ 70 → FAIL vào repair queue, PASS publish → generate → verify-pair → atomic COMMIT) → commit derived state. Cổng cuối: check-state + backlog 0 + generate --check. Node 22.
- **article-quality.yml** — phân mode bằng `change-mode`: CONTENT_ONLY → gate nhẹ `verify-sources` scoped đúng EXACT IDs (QA minimal chặn; SEO/intent advisory); ENGINE_CHANGE → heavy gate (full test suites, gồm test-cycle.js + test-coordinator.js, + verify-invariant + generate --check). KHÔNG full-site audit trong production loop.
- **factory-deep-audit.yml** — full gate MANUAL-ONLY (`workflow_dispatch`): manifest-sync + index-rebuild + index-check + `audit --min-score 70` + full suites + verify-invariant + generate --check. Không chạy theo push.
- **og-image.yml** — sinh ảnh OG.

Draft không rò lên site: `generate.js` chỉ render slot PUBLISHED (+ scope publish hiện tại truyền qua FACTORY_GEN_INCLUDE) — bài REPAIR/WAITING/PLANNED không có trang, không vào sitemap/search/chatbot.

Chống chồng lấn: concurrency group `total-production` chung cho coordinator + publisher (không cancel, queued), group riêng cho các workflow CI, writer lock TTL 30 phút, KHÔNG force push, bounded retry ≤ 3, KHÔNG cron AI writing, KHÔNG AI/API trong Actions.

## Capacity là cấu hình
`capacity` luôn đọc từ `state/matrix.json` — canonical source-of-truth, KHÔNG hardcode con số trong docs/code:
```bash
node factory/factory.js expand-capacity <NEW_CAPACITY> --dry-run  # xem trước
node factory/factory.js expand-capacity <NEW_CAPACITY>            # migration an toàn (chỉ tăng)
node factory/factory.js set-planned-target <N>                    # mục tiêu kế hoạch
```

## Bảo mật quy trình
- **One writer (ownership-safe)**: lock primitive exclusive thật + token unique; unlock chỉ xóa lock của chính mình (xem `factory/lib/lock.js`).
- **Atomic write**: ghi tạm rồi đổi tên — không bao giờ file JSON dở.
- **Checkpoint**: `factory/state/checkpoint.json` ghi slotCount khớp ma trận.
- **Không AI API trong GitHub Actions.**

## Không phá kiến trúc
Factory phục vụ các lệnh mở rộng tương lai mà không cần thiết kế lại (queue-refill từ topic-pool, cycle 12–18 bài, content-index SQLite scale 10k–100k bài).
