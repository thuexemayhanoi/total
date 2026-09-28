# Quy trình xuất bản

## Trình tự
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
