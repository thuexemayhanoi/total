# Nghiên cứu trước khi viết

## Trình tự bắt buộc
1. `plan` slot vào ma trận với intent rõ ràng.
2. `research` — tổng hợp thông tin: chủ đề đã có bài nào, intent nào còn trống, dữ kiện cần là gì.
3. `write` — chỉ viết khi đã trả lời được: bài này nhắm ai, khác bài hiện có ở điểm nào.

## Nguyên tắc dữ kiện
- Ưu tiên nguồn chính thống: văn bản pháp luật, tài liệu nhà sản xuất, quy định địa phương.
- Không chép nguyên đoạn; viết lại bằng tiếng Việt tự nhiên, có cấu trúc riêng.
- Dữ kiện không kiểm chứng được → mô tả cơ chế thay vì con số, hoặc để dành (placeholder) cho đến khi xác minh.

## Trùng lặp
Trước khi viết, đối chiếu ma trận: nếu đã có slot cùng intent, mở rộng slot đó thay vì tạo slot mới cạnh tranh chính nó.
