# Trợ lý AI WIKI TOTAL (chatbot)

## Danh tính
Tên công khai: **Trợ lý AI WIKI TOTAL**. Launcher: "Hỏi AI WIKI TOTAL" (hoặc "Hỏi AI"). UI dạng command palette + assistant.

## Nguyên tắc
- **Retrieval-first:** ưu tiên dữ liệu có trong AI WIKI TOTAL qua `assets/data/chatbot-index.json`; không bịa câu trả lời ngoài chỉ mục.
- Không sales chatbot: không tự quảng cáo dịch vụ, không Zalo CTA, không số điện thoại trong câu trả lời.
- Câu hỏi về thuê xe: phân biệt thông tin editorial và thông tin business verified; không biến bài informational thành claim dịch vụ toàn quốc.

## Kỹ thuật
- Chỉ mục sinh bởi generate.js từ dữ liệu bài viết; URL không có tiền tố `total/`.
- Chuẩn hóa tìm kiếm: tách dấu (NFD), thay đ→d để khớp truy vấn người dùng gõ nhanh.
- Test kiểm: chỉ mục đủ số bài, URL trỏ tới trang tồn tại, không chứa tiền tố `total/`.
