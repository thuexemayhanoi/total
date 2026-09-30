# Kiến trúc AI WIKI TOTAL

## Tổng quan
AI WIKI TOTAL là cổng kiến thức tĩnh tiếng Việt, sinh từ dữ liệu (generator-first), phục vụ tại `https://thuexemayhanoi.github.io/total/`. Mọi trang HTML công khai đều sinh bằng `node factory/generate.js` — không bao giờ sửa tay file HTML.

## Cây nội dung
- **Danh mục cha (15):** thue-xe, guide, hub, wiki, learn, moto, ride, tips, docs, news, local, map, garage, market, review.
- **Hub con (97):** mỗi danh mục cha có các hub chuyên đề; dữ liệu nguồn ở `factory/data/categories.js`.
- **Bài viết:** `factory/data/articles/*.js` → sinh ra `total/<danh-mục>/<hub>/<slug>/`.

## Cụm THUÊ XE (business cluster)
`/thue-xe/` là cụm thương mại quan trọng, gồm 3 hub con: `xe-may`, `xe-dien`, `xe-oto`. Đây là cluster duy nhất nhắm intent thuê — các cụm khác không được nhắm trùng.

## Quy tắc đường dẫn
- URL công khai: `SITE.basePath + <đường-dẫn>`; file repo mang tiền tố `total/`.
- Mọi liên kết nội bộ phải qua `u()` trong `factory/lib/shell.js` — không ghép chuỗi tay.
- Chỉ mục tìm kiếm/chatbot lưu URL **không** có tiền tố `total/`.

## Ma trận chủ đề
`factory/state/matrix.json`: capacity/plannedTarget/reserved luôn đọc từ file này (canonical — con số không được hardcode trong docs/code; EXAMPLE ONLY: mục tiêu kế hoạch plannedTarget, dự phòng reserved.total chia pool (gsc-query-discovery, model-xe-moi, dia-phuong-moi, luat-moi, thi-truong, technical-gaps, rental-intent-gaps). Capacity là logical: engine chỉ instantiate slot khi `plan` — mở rộng capacity KHÔNG sinh sẵn slot object và không thay đổi trang/site đã phát hành.

## Sitemap
Sitemap index `sitemap.xml` trỏ 4 sitemap phân đoạn: pages, categories, hubs, articles. Sẵn sàng mở rộng theo phân đoạn khi vượt ngưỡng khi vượt ngưỡng hợp lý.
