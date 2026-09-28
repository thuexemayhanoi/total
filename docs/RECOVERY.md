# Khôi phục khi có sự cố

## Nguyên tắc
Mọi thứ sinh từ dữ liệu: HTML hỏng → chạy lại `node factory/generate.js`. Trạng thái quy trình nằm trong 3 file JSON của `factory/state/`.

## Các tình huống
- **HTML bị lỗi / patch tay:** xóa HTML sinh, chạy lại generate; `--check` sẽ báo file lệch.
- **Factory dở dang:** `node factory/factory.js resume` xem checkpoint và slot đang dở; tiếp tục từ đó, KHÔNG làm lại từ đầu.
- **Writer lock kẹt (agent cũ crash):** `node factory/factory.js unlock` sau khi chắc chắn không ai đang ghi.
- **Mất file state:** đối chiếu `factory/state/manifest.json` (sinh kèm site) với thực tế để dựng lại matrix; ưu tiên pull từ nhánh main của repo.

## Chống lặp lại
Atomic write và checkpoint đảm bảo không có file dở; mọi thao tác state phải qua factory.js, không sửa JSON tay khi đang chạy.
