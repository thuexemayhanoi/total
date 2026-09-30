# Quy trình xuất bản

## Xuất bản tự động (pipeline publish — continuous backlog drain)
1. Writer viết bài (module trong `factory/data/articles/`, slot tương ứng đang PLANNED trong ma trận) và push lên nhánh `main`.
2. Workflow `factory-publish` tự chạy: đọc state → guard state sạch → **drain liên tục**: mỗi vòng một chunk ≤ 10 ID (resume slot dở trước, claim sau) → QA từng slot (≥ 75 mới PASS) → publish theo **explicit IDs** (PASS → PUBLISHED, sinh lại site; mọi cổng xanh mới ghi state) → commit chunk → lặp vòng kế tiếp TỚI KHI backlog article-backed claimable = 0.
   - KHÔNG dựa vào bot commit tự trigger workflow kế tiếp (commit bằng GITHUB_TOKEN không tự chạy workflow push) — một run drain hết backlog, không "xanh nhưng đứng".
   - NO-PROGRESS sentinel: backlog > 0 mà một vòng không tiến triển hợp lệ → workflow FAIL LOUD.
   - Giới hạn vòng an toàn tính từ workload thực tế (`drain-bound`), không hardcode.
3. QA chưa đạt → slot rơi vào REPAIR: sửa bài rồi push lại, pipeline tự resume slot dở trước khi claim mới. Nhiều lần không đạt → BLOCKED, cần người rà.
4. Sau publish, chạy `factory-publish-verify` (read-only): bất biến PUBLISHED ↔ trang sinh ↔ sitemap (`verify-invariant`) VÀ còn backlog claimable > 0 → FAIL (không chỉ cảnh báo). Slot PLANNED chưa có module bài (WAITING_FOR_WRITER) không làm fail CI.

Quy trình thủ công dưới đây là đường dự phòng khi pipeline không dùng được.

## Trình tự (thủ công)
1. Viết xong bài (module trong `factory/data/articles/`).
2. `node factory/factory.js qa <slot-id>` — đạt ≥ 75.
3. `node factory/factory.js publish <ID> [<ID>...]` — publish slot PASS theo ID tường minh, tối đa 10 ID mỗi lệnh (KHÔNG có publish-all; lệnh tự sinh lại site + chạy test, chỉ ghi state khi mọi cổng xanh).
4. `node factory/generate.js --check` — xác nhận không patch tay HTML.
5. `node factory/test.js` + `node factory/test-hardening.js` + `node factory/test-reliability.js` — toàn bộ test phải PASSED.
6. `node factory/factory.js verify-invariant` + `node factory/factory.js backlog --fail-if-claimable --head-sha "$(git rev-parse HEAD)"` — bất biến production + không còn backlog.
7. Commit và push lên nhánh `main` — GitHub Pages triển khai từ gốc nhánh main.

## Quy tắc
- Draft không được deploy: chỉ commit khi QA đạt và test xanh.
- Một writer tại một thời điểm (writer lock ownership-safe: unlock cần --owner + --token của chính acquisition; xem docs/RECOVERY.md).
- Publish luôn theo explicit IDs, ≤ 10 ID mỗi transaction — không bao giờ sweep mọi slot PASS.
- Sau push, xác minh các trang live trả HTTP 200.
