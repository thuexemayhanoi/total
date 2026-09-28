# Quy trình xuất bản

## Xuất bản tự động (pipeline publish theo chunk)
1. Writer viết bài (module trong `factory/data/articles/`, slot tương ứng đang PLANNED trong ma trận) và push lên nhánh `main`.
2. Workflow `factory-publish` tự chạy: đọc state → chọn chunk (resume slot dở trước, claim tối đa 5–10 slot) → QA từng slot (≥ 90 mới PASS) → publish (PASS → PUBLISHED, sinh lại site) → cổng publish (audit ≥ 90, `--check`, test) → MỘT commit state + site.
3. QA chưa đạt → slot rơi vào REPAIR: sửa bài rồi push lại, pipeline tự resume slot dở trước khi claim mới. Nhiều lần không đạt → BLOCKED, cần người rà.
4. Sau publish, chạy `factory-publish-verify` (read-only) để kiểm tra bất biến: PUBLISHED ↔ trang sinh ↔ sitemap.

Quy trình thủ công dưới đây là đường dự phòng khi pipeline không dùng được.

## Trình tự (thủ công)
1. Viết xong bài (module trong `factory/data/articles/`).
2. `node factory/factory.js qa <slot-id>` — đạt ≥ 90.
3. `node factory/generate.js` — sinh toàn bộ site tĩnh.
4. `node factory/generate.js --check` — xác nhận không patch tay HTML.
5. `node factory/test.js` — toàn bộ test phải PASSED.
6. `node factory/factory.js publish` — chuyển slot PASS → PUBLISHED.
7. Commit và push lên nhánh `main` — GitHub Pages triển khai từ gốc nhánh main.

## Quy tắc
- Draft không được deploy: chỉ commit khi QA đạt và test xanh.
- Một writer tại một thời điểm (writer lock).
- Sau push, xác minh các trang live trả HTTP 200.
