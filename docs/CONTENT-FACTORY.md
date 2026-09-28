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

## Bảo mật quy trình
- **One writer:** writer lock TTL 30 phút, chống hai agent ghi đồng thời.
- **Atomic write:** ghi tạm rồi đổi tên — không bao giờ để file JSON dở.
- **Checkpoint:** `factory/state/checkpoint.json` ghi slotCount khớp ma trận.
- **Không AI API trong GitHub Actions** — CI chỉ chạy generate --check, audit, test.

## Không phá kiến trúc
Factory phục vụ các lệnh mở rộng tương lai ("viết 20 bài cho /thue-xe/xe-may/", "audit mọi bài dưới 90") mà không cần thiết kế lại.
