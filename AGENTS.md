# AGENTS.md — AI WIKI TOTAL

Mọi agent phải đọc file này trước khi sửa repo.

## Thông tin bắt buộc
- **SITE:** AI WIKI TOTAL (không dùng tên TOTAL đơn lẻ làm brand chính).
- **LANGUAGE:** VIETNAMESE — toàn bộ UI công khai và nội dung bằng tiếng Việt. Không để Home, About, Search, Read more, Latest articles, Category; phải dùng Trang chủ, Giới thiệu, Tìm kiếm, Đọc tiếp, Bài mới, Danh mục.
- **SEO:** VIETNAMESE FIRST — locale vi-VN; tiêu đề và meta tự nhiên, không template cứng.
- **ARCHITECTURE:** 15 danh mục cha (thue-xe, guide, hub, wiki, learn, moto, ride, tips, docs, news, local, map, garage, market, review) + 97 hub con. Nguồn dữ liệu: `factory/data/categories.js`.
- **BUSINESS CLUSTER:** THUÊ XE — cụm commercial duy nhất cho intent thuê.
- **RENTAL CHILD HUBS:** XE MÁY (`/thue-xe/xe-may/`), XE ĐIỆN (`/thue-xe/xe-dien/`), XE Ô TÔ (`/thue-xe/xe-oto/`).

## Quy tắc bất di bất dịch
1. **Không agent nào được tự thay đổi kiến trúc** (thêm/xóa/sửa danh mục, hub, cấu trúc URL) nếu không có yêu cầu rõ ràng của chủ sở hữu.
2. **Generator-first:** mọi trang HTML sinh từ `node factory/generate.js`. Không bao giờ sửa tay file HTML đã sinh.
3. **Mọi liên kết nội bộ qua `u()`** trong `factory/lib/shell.js` — tránh lỗi `/total/total/`.
4. **Không bịa dữ kiện kinh doanh:** giá, địa chỉ, giờ mở cửa, danh sách xe, điều khoản dịch vụ. Chỉ dùng verified business facts; ngoài khu vực xác minh là informational only.
5. **QA ≥ 90** mới được PUBLISHED; test (`node factory/test.js`) phải PASSED trước khi commit.
6. **Không deploy draft**; không chặn nội dung công khai trong robots.txt.
7. Chỉ mục tìm kiếm/chatbot lưu URL **không** có tiền tố `total/`; file trong repo **có** tiền tố `total/`.
8. Không để ký tự rác CJK/Cyrillic/Hangul trong bất kỳ nguồn nào.

## Vòng đời nội dung
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED (lỗi: QA → REPAIR → QA → BLOCKED).
Dùng `node factory/factory.js` (status/plan/list/research/write/qa/publish/audit/resume) — không sửa JSON state tay khi factory đang chạy.
Pipeline publish tự động (factory-publish.yml) chạy chunk: resume slot dở trước khi claim mới, QA ≥ 90 mới PUBLISHED, một commit mỗi chunk. Writer chỉ đẩy bài vào factory/data/articles/ — không tự sửa state khi pipeline đang chạy.

## Trước khi commit
```
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 90
```
Cả bốn lệnh phải xanh.
