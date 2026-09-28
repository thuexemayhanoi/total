# AI WIKI TOTAL

Cẩm nang xe, thuê xe và hành trình cho người Việt.

Cổng kiến thức tổng hợp tiếng Việt về thuê xe, xe máy, xe điện, xe ô tô, sửa chữa, phụ tùng, giá xe, thị trường, đánh giá, pháp lý, hành trình, địa phương, bản đồ và kiến thức kỹ thuật. Đây là nền móng của một hệ thống có thể mở rộng lên 6.000–10.000 bài.

## Trang web
- Địa chỉ: https://thuexemayhanoi.github.io/total/

## Kiến trúc
- **15 danh mục cha**, trong đó cụm **Thuê xe** (xe máy, xe điện, xe ô tô) là cụm thương mại quan trọng.
- **97 hub con** chuyên đề.
- Mọi trang sinh từ dữ liệu (generator-first) bằng Node.js thuần: `node factory/generate.js`.

## Cấu trúc thư mục
| Thư mục | Nội dung |
| --- | --- |
| `factory/` | Bộ sinh trang tĩnh, QA, content factory và test |
| `factory/data/` | Dữ liệu danh mục, hub và bài viết (nguồn sự thật duy nhất) |
| `factory/state/` | Ma trận chủ đề, trạng thái factory, checkpoint |
| `total/` | Trang HTML đã sinh (phục vụ dưới `/total/`) |
| `assets/` | CSS, JS, chỉ mục tìm kiếm và chatbot |
| `docs/` | 16 tài liệu vận hành bằng tiếng Việt |
| `AGENTS.md` | Quy tắc cho mọi agent trước khi sửa repo |

## Lệnh chính
```bash
node factory/generate.js          # sinh site tĩnh
node factory/generate.js --check  # xác nhận không patch tay HTML
node factory/test.js              # bộ kiểm thử nền tảng
node factory/factory.js status    # trạng thái content factory
node factory/factory.js audit --min-score 90
```

## Nguyên tắc nội dung
- Tiếng Việt cho toàn bộ UI và nội dung; QA ≥ 90 mới xuất bản.
- Không bịa dữ kiện kinh doanh — chỉ dùng dữ liệu đã xác minh.
- Chi tiết đầy đủ trong `AGENTS.md` và `docs/`.
