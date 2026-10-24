# Nghiên cứu trước khi viết

## Trình tự bắt buộc — FAST MODE
1. Fetch/rebase main rồi lấy slot đã có bằng `node factory/factory.js writer-pack --count 10 --json` (hoặc shard riêng cho nhiều writer). **Không chạy `plan` để tạo slot bằng tay; legacy PLANNED hiện có không cần topic-approve.**
2. `research` theo nghĩa nghiên cứu nội dung (không nhất thiết gọi lệnh chuyển state): đọc bài cùng intent/hub đã PUBLISHED; 300 slot V1 có nhiều tiêu đề hoán vị, không viết nếu không có câu hỏi và information gain độc lập.
3. `write` module JS đúng ID/hub/slug đã cấp, tham chiếu nguồn thật, QA ≥70 và `verify-batch` trước khi push; publisher GitHub tự xuất bản.
4. Topic V2 mới ngoài slot đã có hiện vẫn cần coordinator tạo slot bằng công cụ `topic-propose`/`topic-approve` sau khi rà trùng; không tự chỉnh matrix. Hướng dẫn: [FAST-WRITER-LOOP.md](FAST-WRITER-LOOP.md).

## Nguyên tắc dữ kiện
- Ưu tiên nguồn chính thống: văn bản pháp luật, tài liệu nhà sản xuất, quy định địa phương.
- Không chép nguyên đoạn; viết lại bằng tiếng Việt tự nhiên, có cấu trúc riêng.
- Dữ kiện không kiểm chứng được → mô tả cơ chế thay vì con số, hoặc để dành (placeholder) cho đến khi xác minh.

## Trùng lặp
Trước khi viết, đối chiếu ma trận: nếu đã có slot cùng intent, mở rộng slot đó thay vì tạo slot mới cạnh tranh chính nó.
