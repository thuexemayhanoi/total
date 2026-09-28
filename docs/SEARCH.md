# Tìm kiếm

## Chỉ mục
`assets/data/search-index.json` sinh bởi generate.js từ mọi trang indexable: title, description, category, hub, entities, keywords, summary. URL lưu **không** có tiền tố `total/`.

## Hành vi
- Tìm kiếm client-side thuần (vanilla JS), không phụ thuộc dịch vụ ngoài.
- Chuẩn hóa truy vấn: tách dấu (NFD), đ→d, không phân biệt hoa thường.
- Không có kết quả: hiển thị "Không tìm thấy kết quả phù hợp." — không để câu tiếng Anh.

## Điểm tiếp cận
- Ô tìm kiếm lớn trên trang chủ (modal) và trang `/tim-kiem/`.
- Test kiểm: chỉ mục ≥ 100 mục, mọi URL trỏ tới trang tồn tại, không mục bài viết trùng lặp.
