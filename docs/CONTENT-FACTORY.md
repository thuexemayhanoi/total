# Content Factory

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED.
Khi QA thất bại: QA → REPAIR → QA → BLOCKED (sau nhiều lần sửa không đạt).

## Lệnh CLI (`node factory/factory.js`)
- `status` — tổng quan ma trận, writer lock, checkpoint.
- `plan --hub <hub> --slug <slug> --intent <intent>` — thêm slot PLANNED.
- `list` — liệt kê slot theo trạng thái.
- `research <id>` / `write <id>` — chuyển trạng thái.
- `qa <id>` — chạy kiểm định chất lượng bài của slot.
- `publish` — chuyển mọi slot PASS → PUBLISHED và sinh site.
- `audit --min-score 90` — kiểm lại toàn bộ bài PUBLISHED.
- `resume` — xem checkpoint, slot đang dở để tiếp tục.
- `expand-capacity <N> [--dry-run]` — mở rộng capacity ma trận (migration an toàn: chỉ tăng, refuse shrink/cùng mức; giữ nguyên ID/slots/plannedTarget/reserved; `--dry-run` chỉ báo cáo, không ghi file).
- `set-planned-target <N> [--dry-run]` — đặt mục tiêu kế hoạch (phải <= capacity và >= số slot đã tồn tại; không trộn với expand-capacity).

## Capacity là cấu hình
`capacity` (hiện 10.000) nằm trong `state/matrix.json` — đây là canonical source-of-truth, không phải hard limit trong code. **10.000 is the current configured capacity, not the lifetime limit of AI WIKI TOTAL.** Quy trình tương lai:
```bash
node factory/factory.js expand-capacity 20000 --dry-run   # xem trước (CURRENT/REQUESTED/DELTA/STATE_SAFE/MIGRATION_ACTIONS)
node factory/factory.js expand-capacity 20000             # migration: lock -> snapshot(hash) -> migrate -> verify (generate --check, test, audit) -> rollback nếu fail -> unlock
node factory/factory.js set-planned-target ...             # sau đó, tùy nhu cầu chủ repo
```
Phần capacity mới là unallocated/future-reserve — không tự phân vào các pool dự phòng nếu chủ repo chưa yêu cầu. plannedTarget có thể giữ nguyên sau khi expand.

## Bảo mật quy trình
- **One writer:** writer lock TTL 30 phút, chống hai agent ghi đồng thời.
- **Atomic write:** ghi tạm rồi đổi tên — không bao giờ để file JSON dở.
- **Checkpoint:** `factory/state/checkpoint.json` ghi slotCount khớp ma trận.
- **Không AI API trong GitHub Actions** — CI chỉ chạy generate --check, audit, test.

## Không phá kiến trúc
Factory phục vụ các lệnh mở rộng tương lai ("viết 20 bài cho /thue-xe/xe-may/", "audit mọi bài dưới 90") mà không cần thiết kế lại.

## Pipeline publish tự động (GitHub Actions)
Kiến trúc vận hành port từ /vanchinh, adapt toàn bộ sang Node factory hiện có (không Python, không thay taxonomy/URL):
- **factory-publish.yml** — writer đẩy bài mới vào `factory/data/articles/` → pipeline: đọc state → guard (không writer lock) → chọn chunk (resume slot dở trước, rồi mới claim slot PLANNED có bài, tối đa 5–10 slot) → QA từng slot → publish (PASS → PUBLISHED, sinh site + test) → cổng publish (audit ≥ 90, `--check`, test) → MỘT commit state + site. Deterministic, không AI/API trong Actions.
- **article-quality.yml** — cổng chất lượng push/PR đổi `factory/**` (tích hợp ci.yml cũ: generate, `--check`, audit ≥ 90, test).
- **site-quality.yml** — kiểm định trang sinh khi push/PR đổi HTML/assets/sitemap/robots.
- **article-batch.yml** — dry-run read-only: xem kế hoạch chunk, QA thử, không đổi state.
- **factory-publish-verify.yml** — verify read-only sau publish: mọi slot PUBLISHED có trang sinh + nằm trong sitemap, mọi URL bài trong sitemap thuộc slot PUBLISHED, checkpoint khớp ma trận, không lock bỏ lại.

Chống chồng lấn: concurrency group riêng cho từng workflow, writer lock TTL 30 phút, KHÔNG force push, bounded retry ≤ 3 khi push, KHÔNG cron AI writing, KHÔNG AI/API trong Actions.
