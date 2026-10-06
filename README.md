# AI WIKI TOTAL

Cẩm nang xe, thuê xe và hành trình cho người Việt.

Cổng kiến thức tổng hợp tiếng Việt về thuê xe, xe máy, xe điện, xe ô tô, sửa chữa, phụ tùng, giá xe, thị trường, đánh giá, pháp lý, hành trình, địa phương, bản đồ và kiến thức kỹ thuật. Đây là nền móng của một hệ thống có thể mở rộng theo capacity cấu hình trong `factory/state/matrix.json` (canonical source-of-truth — không phải giới hạn trọn đời của AI WIKI TOTAL): mở rộng bất cứ lúc nào bằng `node factory/factory.js expand-capacity <NEW_CAPACITY>` (migration an toàn, không đổi ID/URL/state hiện có).

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
Luồng publish chính: **pair mode** (WRITER 1 viết đúng 2 bài/lần, PAIR_SIZE = 2, push main → `factory-publish` xử lý EXACT push scope: `publish-pair` scoped QA minimal ≥ 70 → sinh site → verify-pair → atomic COMMIT txn; checkpoint + heartbeat sau mỗi pair, mô hình 3 vai trò WRITER 1 / ĐỐC CÔNG 2 / ĐỐC CÔNG 3 xem docs/PRODUCTION-ROLES.md). Các lệnh `cycle-plan/cycle-qa/cycle-publish` chỉ còn là legacy recovery thủ công — KHÔNG còn phân công 3 writer. CI `article-quality` phân mode bằng `change-mode` (CONTENT_ONLY → verify-sources scoped; ENGINE_CHANGE → heavy gate full suites); full-site audit chỉ ở `factory-deep-audit` MANUAL-ONLY (workflow_dispatch) — KHÔNG thuộc production loop. Content index: article-manifest.jsonl là source of truth, content-index.sqlite là derived cache (không commit, chỉ coordinator ghi/rebuild). Không cron AI writing, không AI/API trong Actions, không force push.
