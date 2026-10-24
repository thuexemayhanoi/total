# AI WIKI TOTAL

Cẩm nang xe, thuê xe và hành trình cho người Việt.

Cổng kiến thức tổng hợp tiếng Việt về thuê xe, xe máy, xe điện, xe ô tô, sửa chữa, phụ tùng, giá xe, thị trường, đánh giá, pháp lý, hành trình, địa phương, bản đồ và kiến thức kỹ thuật. Đây là nền móng của một hệ thống có thể mở rộng theo capacity cấu hình trong `factory/state/matrix.json` (canonical source-of-truth — không phải giới hạn trọn đời của AI WIKI TOTAL): mở rộng bất cứ lúc nào bằng `node factory/factory.js expand-capacity <NEW_CAPACITY>` (migration an toàn, không đổi ID/URL/state hiện có).

## Trang web
- Địa chỉ: https://wiki.thuexemaynguyentu.com/

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
| Thư mục root | HTML sinh tự động cho tên miền riêng (phục vụ dưới `/`) |
| `assets/` | CSS, JS, chỉ mục tìm kiếm và chatbot |
| `docs/` | Tài liệu vận hành; đọc `docs/FAST-WRITER-LOOP.md` để xem quy trình hiện hành |
| `AGENTS.md` | Quy tắc cho mọi agent trước khi sửa repo |

## Quy định bài viết và QA
- Bài Writer: **1.000–5.000 từ**, không bắt buộc tất cả bài đạt một độ dài cố định.
- **QA ≥ 70/100**, giữ nguyên 7 critical gates, ít nhất 4 H2 và 2 liên kết nội bộ thực sự tồn tại; SEO nhẹ chỉ cảnh báo.
- Single source of truth: `factory/lib/factory-runtime.js` (`ARTICLE_MIN_WORDS`, `ARTICLE_MAX_WORDS`).
- Hướng dẫn Writer hiện hành: [`docs/FAST-WRITER-LOOP.md`](docs/FAST-WRITER-LOOP.md) (Claude/Mistral/ChatGPT); kiểm tra QA: `docs/QA.md`; quy tắc: `AGENTS.md`. Tên `MISTRAL-WRITER.md` là tài liệu tương thích.

## Lệnh chính
```bash
node factory/generate.js          # sinh site tĩnh
node factory/generate.js --check  # xác nhận không patch tay HTML
node factory/test.js              # bộ kiểm thử nền tảng
node factory/factory.js status    # trạng thái content factory
node factory/factory.js audit --min-score 70
```

## Capacity mở rộng được
`capacity` luôn đọc từ `factory/state/matrix.json` (canonical — KHÔNG hardcode con số trong docs/code; ví dụ dưới chỉ **EXAMPLE ONLY**). Quy trình mở rộng khi cần:
```bash
node factory/factory.js expand-capacity <NEW_CAPACITY> --dry-run  # xem trước, không ghi file
node factory/factory.js expand-capacity <NEW_CAPACITY>             # migration thật (chỉ tăng, refuse shrink)
node factory/factory.js set-planned-target <N>                    # tùy nhu cầu, sau khi đã mở rộng
```
Expand chỉ tăng logical capacity — không preallocate slot, giữ nguyên mọi ID/slot/PUBLISHED/plannedTarget/reserved; phần capacity mới là unallocated cho tới khi chủ repo ra lệnh.

## Nguyên tắc nội dung
- Tiếng Việt cho toàn bộ UI và nội dung; **MINIMAL PRODUCTION QA GATE 70–100 = PASS** (SEO chỉ advisory).
- Không bịa dữ kiện kinh doanh — chỉ dùng dữ liệu đã xác minh.
- Chi tiết đầy đủ trong `AGENTS.md` và `docs/`.

## Vận hành tự động
**FAST WRITER (chủ repo duyệt ngày 24/10/2026):** Claude/Mistral/ChatGPT viết tiếng Việt → `writer-pack --count 10` (tùy chọn shard khác nhau cho 2–3 phiên) → nghiên cứu, tự bỏ ý tưởng trùng → `verify-batch` QA ≥70 → push tối đa 10 module bài/lần. `factory-publish.yml` tự xử lý push hoặc phục hồi backlog mỗi 30 phút, dùng `publish-batch` 1–10 ID, kiểm tra liên kết nội bộ 404 và lưu checkpoint; **không bắt buộc người dùng duyệt chủ đề từng bài** cho slot legacy hiện có. `topic-governance.json` hiện `mode=off`, `requireApproved=false`, nhưng `v1Generation=frozen` (không đẻ thêm tiêu đề hoán vị). Nguồn topic V2 mới vẫn dùng công cụ tạo slot chuẩn; chỉ bãi bỏ bước duyệt của 300 slot cũ, chưa có tính năng tự tạo/duyệt topic mới vô hạn. Coordinator mỗi 10 phút chỉ bảo trì, watchdog mỗi giờ chỉ theo dõi; cả hai KHÔNG tự viết. `article-quality.yml` giữ heavy engine gate cho thay đổi engine/workflow, không chạy test toàn site mỗi bài. Deep audit là manual. `publish-pair`/cycle chỉ là legacy recovery. GitHub Pages phục vụ tại `wiki.thuexemaynguyentu.com` (không WordPress). Không force push; không AI/API sinh nội dung trong Actions.
