# Liên kết nội bộ

## Mỗi bài viết phải có
- Liên kết lên child hub và parent category (breadcrumb + nhãn chuyên mục).
- 2–5 bài liên quan (`related`) — slug phải tồn tại, test kiểm tra.

## Cross-cluster
Chỉ liên kết chéo cụm khi hợp intent, ví dụ: `/thue-xe/xe-may/` → `/guide/thue-xe/` → `/moto/honda/` → `/local/ha-noi/`.

## Kỹ thuật bắt buộc
- Mọi href nội bộ qua `u()` trong `factory/lib/shell.js` — tự ghép basePath, tránh lỗi `/total/total/`.
- Không spam exact-match anchor; anchor tự nhiên theo ngữ cảnh câu.
- Test kiểm: không link vỡ, không trang mồ côi, không `/total/total/`.
