# Sở hữu intent — chống cannibalization

## Phân intent
- `/thue-xe/` — intent thuê (transactional/commercial): thuê xe máy, xe điện, ô tô, thủ tục, đặt cọc.
- `/moto/` — kiến thức xe máy: model, thông số, vận hành.
- `/market/` — giá thị trường, mua bán, chi phí.
- `/review/` — đánh giá, so sánh.
- `/local/` — thông tin theo địa phương.
- `/garage/` — sửa chữa, bảo dưỡng.
- `/guide/` — hướng dẫn quy trình từng bước.

## Ví dụ ranh giới
`/moto/honda/vision/` → thông số, vận hành, kỹ thuật.
`/thue-xe/xe-may/thu-honda-vision-ha-noi/` → nhu cầu thuê, thủ tục, cách chọn.
Hai intent này KHÔNG được gộp.

## Kiểm soát
Ma trận chủ đề lưu `primaryIntent` cho mỗi slot; `factory/test.js` kiểm tra hai slot thuộc cụm moto/thue-xe không được cùng intent. Thêm slot mới phải khai báo intent rõ ràng.
