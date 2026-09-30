# Content Factory

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED.
Khi QA thất bại: QA → REPAIR → QA → BLOCKED (sau nhiều lần sửa không đạt).

## Lệnh CLI (`node factory/factory.js`)
- `status` — tổng quan ma trận, writer lock, checkpoint.
- `plan <hub> <slug> <tiêu đề...> [--intent <type/slug>]` — thêm slot PLANNED. Intent mặc định `informational/<slug>`; override bằng `--intent` (cờ + giá trị không rơi vào tiêu đề; intent rỗng/sai format bị từ chối — slot mới không bao giờ có `primaryIntent` rỗng).
- `list` — liệt kê slot theo trạng thái.
- `research <id>` / `write <id>` — chuyển trạng thái.
- `qa <id>` — chạy kiểm định chất lượng bài của slot; `qa-preview <id>` — QA thử read-only (không ghi state).
- `publish <ID> [<ID>...]` — publish slot PASS theo **ID tường minh** (tối đa 10 ID mỗi lệnh — chunk limit theo config canonical; KHÔNG hỗ trợ publish-all, KHÔNG sweep mọi slot PASS). Lệnh tự sinh lại site + chạy test; mọi cổng xanh mới ghi state (atomic), fail thì slot giữ nguyên để resume.
- `audit --min-score 75` — kiểm lại toàn bộ bài PUBLISHED.
- `resume` — xem checkpoint, slot đang dở để tiếp tục.
- `backlog [--fail-if-claimable]` — đếm backlog claimable (article-backed) + WAITING_FOR_WRITER; `--fail-if-claimable` là cổng CI (exit 1 nếu còn backlog).
- `check-state` — guard state sạch (không lock bị commit, ma trận hợp lệ, checkpoint khớp).
- `plan-chunk [--limit N]` — kế hoạch chunk read-only (resume trước, claim sau).
- `verify-invariant` — bất biến production: PUBLISHED ↔ article source ↔ trang sinh ↔ sitemap-articles, checkpoint, không lock.
- `drain-bound <N>` — giới hạn vòng drain an toàn tính từ workload (ceil(N/10)+2).
- `drain-iteration [--owner O] [--token-file F]` — một vòng drain (workflow gọi lặp tới khi backlog = 0; NO-PROGRESS sentinel fail-loud).
- `lock <owner>` / `unlock --owner <O> --token <T>` — writer lock ownership-safe (token unique mỗi acquisition; sai owner/token bị REFUSE; `unlock --force` chỉ dành cho recovery thủ công).
- `expand-capacity <N> [--dry-run]` — mở rộng capacity ma trận (migration an toàn: chỉ tăng, refuse shrink/cùng mức; giữ nguyên ID/slots/plannedTarget/reserved; `--dry-run` chỉ báo cáo, không ghi file).
- `set-planned-target <N> [--dry-run]` — đặt mục tiêu kế hoạch (phải <= capacity và >= số slot đã tồn tại; không trộn với expand-capacity).

## Capacity là cấu hình
`capacity` luôn đọc từ `state/matrix.json` — đây là canonical source-of-truth, không phải hard limit trong code, và KHÔNG được hardcode con số "hiện tại" trong docs (con số trong ví dụ dưới đây chỉ là **EXAMPLE ONLY** — giá trị thật luôn lấy từ matrix.json). Quy trình:
```bash
node factory/factory.js expand-capacity <NEW_CAPACITY> --dry-run  # xem trước (CURRENT/REQUESTED/DELTA/STATE_SAFE/MIGRATION_ACTIONS)
node factory/factory.js expand-capacity <NEW_CAPACITY>            # migration: lock -> snapshot(hash) -> migrate -> verify (generate --check, test, audit) -> rollback nếu fail -> unlock
node factory/factory.js set-planned-target ...                    # sau đó, tùy nhu cầu chủ repo
```
Phần capacity mới là unallocated/future-reserve — không tự phân vào các pool dự phòng nếu chủ repo chưa yêu cầu. plannedTarget có thể giữ nguyên sau khi expand.

## Bảo mật quy trình
- **One writer (ownership-safe):** writer lock acquire bằng primitive exclusive thật (link/open 'wx') + token unique mỗi acquisition; unlock chỉ xóa lock của chính owner/token đó — không bao giờ xóa lock của writer khác. TTL 30 phút không phải daemon tự xóa: lock stale chỉ được reclaim race-safe theo contract trong `factory/lib/lock.js`.
- **Atomic write:** ghi tạm rồi đổi tên — không bao giờ để file JSON dở.
- **Checkpoint:** `factory/state/checkpoint.json` ghi slotCount khớp ma trận.
- **Không AI API trong GitHub Actions** — CI chỉ chạy generate --check, audit, test.

## Không phá kiến trúc
Factory phục vụ các lệnh mở rộng tương lai ("viết 20 bài cho /thue-xe/xe-may/", "audit mọi bài dưới 90") mà không cần thiết kế lại.

## Pipeline publish tự động (GitHub Actions)
Kiến trúc vận hành port từ /vanchinh, adapt toàn bộ sang Node factory hiện có (không Python, không thay taxonomy/URL):
- **factory-publish.yml** — writer đẩy bài mới vào `factory/data/articles/` → pipeline: đọc state → guard (không writer lock) → chọn chunk (resume slot dở trước, rồi mới claim slot PLANNED có bài, tối đa 5–10 slot) → QA từng slot → publish (PASS → PUBLISHED, sinh site + test) → cổng publish (audit ≥ 75, `--check`, test) → MỘT commit state + site. Deterministic, không AI/API trong Actions.
- **article-quality.yml** — cổng chất lượng push/PR đổi `factory/**` (tích hợp ci.yml cũ: generate, `--check`, audit ≥ 75, test).
- **site-quality.yml** — kiểm định trang sinh khi push/PR đổi HTML/assets/sitemap/robots.
- **article-batch.yml** — dry-run read-only: xem kế hoạch chunk, QA thử, không đổi state.
- **factory-publish-verify.yml** — verify read-only sau publish: mọi slot PUBLISHED có trang sinh + nằm trong sitemap, mọi URL bài trong sitemap thuộc slot PUBLISHED, checkpoint khớp ma trận, không lock bỏ lại.

Chống chồng lấn: concurrency group riêng cho từng workflow, writer lock TTL 30 phút, KHÔNG force push, bounded retry ≤ 3 khi push, KHÔNG cron AI writing, KHÔNG AI/API trong Actions.
