# Content Factory

> **Quy trình hiện hành từ 24/10/2026:** [FAST-WRITER-LOOP.md](FAST-WRITER-LOOP.md) và [PUBLISH.md](PUBLISH.md). AI writer 1–10 bài/lô, QA ≥70, GitHub publisher 1–10 bài/transaction, cron phục hồi 30 phút. Slot legacy không cần topic-approve; lịch sử pair/cycle giữ như lệnh recovery, không phải hot path.

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
- **FAST WRITER hiện hành** ([PRODUCTION-ROLES.md](PRODUCTION-ROLES.md)): `writer-pack --count 10 [--shard k/3]` (1–10 slot, shard tùy chọn khi nhiều phiên), `verify-batch <IDs>`, `writer-heartbeat` (chỉ một writer nên cập nhật file chung), `production-status`, `liveness`, `error-log/error-queue/error-resolve`. `queue-refill` đang **frozen/no-op**; slot legacy đã có không đòi APPROVED. `writer-next`/pair/cycle là công cụ recovery hoặc tương thích cũ, không là hot path.
- `publish-batch <IDs>` — **hot path tự động 1–10 ID một transaction**; `publish <ID>...` và `publish-pair <ID,ID>` là manual/recovery legacy.
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

## Topic Factory V2 — chống trùng vẫn giữ, duyệt legacy được bỏ

**Hiện hành:** `factory/topic-governance.json` có `mode=off`, `requireApproved=false`, `v1Generation=frozen`: các slot PLANNED legacy đã có được `writer-pack` nhận mà **không cần `topic-approve`**. Nhưng phần lớn 300 slot cũ có nguy cơ trùng intent (hoán vị V1); writer tự so nội dung và bỏ đề tài không mới. `queue-refill` vẫn frozen để không tự tạo thêm template biến thể.

**Topic V2 mới ngoài slot đã có:** code hiện chỉ tạo slot qua `topic-propose` → gate → `topic-neighbours` → `topic-approve` của coordinator; AI có thể đảm nhiệm thao tác thay người dùng theo kiểm soát nội dung, nhưng tính năng tự sinh/tự duyệt topic mới chưa được tích hợp sẵn. Tài liệu lịch sử [TOPIC-FACTORY-V2.md](TOPIC-FACTORY-V2.md) mô tả chế độ `enforce` trước ngày 24/10, **không phải cấu hình hiện tại**.

## Pipeline publish tự động (GitHub Actions)
- **factory-coordinator.yml (maintenance tick)** — schedule `7,17,27,37,47,57 * * * *` (~10 phút) + dispatch; mỗi run: fresh main → recover-txn → check-state/topic-check → queue-refill (**frozen/no-op**) → production-status → commit chỉ khi có diff. Không tạo bài, không chạy full manifest/invariant. Cùng concurrency `total-production` với publisher. Watchdog `factory-liveness.yml` read-only mỗi giờ, chỉ theo dõi lỗi/đứng; không thể tự mở phiên Claude/Mistral.
- **factory-publish.yml (batch 1–10)** — writer push article files → exact IDs của push; hoặc cron `17,47 * * * *` / dispatch chọn tối đa 10 module bài đang tồn đọng từ fresh main → recover/check-state → `verify-batch` QA ≥70 → `publish-batch` (1 transaction, generate, commit state) → scoped internal-link 404 gate → `index-refresh/index-check` → commit/push derived state. Không có bài chờ thì run no-op; có backlog nhiều hơn 10 thì cron kế tiếp xử lý tiếp.
- **article-quality.yml** — workflow tên `Factory Engine Quality`, chỉ trigger trên engine/template/test/workflow thay đổi; bài thuần nội dung không chạy heavy gate riêng (đã có scoped QA trong publisher). Full engine regression khi thay code, không coi workflow đỏ là publish QA đỏ.
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
- **One publisher (ownership-safe)**: transaction lock primitive exclusive + token unique, chỉ publisher được ghi state; các AI writer không phải lấy lock bằng tay. Dùng nhiều writer phải shard/working copy độc lập, không đụng cùng file/heartbeat.
- **Atomic write**: ghi tạm rồi đổi tên — không bao giờ file JSON dở.
- **Checkpoint**: `factory/state/checkpoint.json` ghi slotCount khớp ma trận.
- **Không AI API trong GitHub Actions.**

## Không phá kiến trúc
Factory vẫn có lệnh legacy pair/cycle cho recovery và mở rộng capacity bằng migration; không bật lại `queue-refill` V1 từ topic-pool để tăng số lượng khi `v1Generation=frozen`. Content-index SQLite vẫn là derived cache. Xem [FAST-WRITER-LOOP.md](FAST-WRITER-LOOP.md).
