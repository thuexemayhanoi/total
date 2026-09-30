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
5. **QA ≥ 75** mới được PUBLISHED; test (`node factory/test.js`) phải PASSED trước khi commit.
6. **Không deploy draft**; không chặn nội dung công khai trong robots.txt.
7. Chỉ mục tìm kiếm/chatbot lưu URL **không** có tiền tố `total/`; file trong repo **có** tiền tố `total/`.
8. Không để ký tự rác CJK/Cyrillic/Hangul trong bất kỳ nguồn nào.

## Vòng đời nội dung
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED (lỗi: QA → REPAIR → QA → BLOCKED).
Dùng `node factory/factory.js` (status/plan/list/research/write/qa/qa-preview/publish/audit/resume/expand-capacity/set-planned-target/backlog/check-state/plan-chunk/verify-invariant/drain-bound/drain-iteration) — không sửa JSON state tay khi factory đang chạy.
Pipeline publish tự động (factory-publish.yml) chạy **continuous backlog drain**: mỗi vòng một chunk ≤ 10 ID (resume slot dở trước khi claim mới), QA ≥ 75 mới PUBLISHED, publish theo **explicit IDs** (`publish <ID> [<ID>...]` — KHÔNG có publish-all, KHÔNG sweep mọi slot PASS), một commit mỗi chunk, lặp tới khi backlog article-backed claimable = 0 — KHÔNG dựa vào bot commit tự trigger workflow kế tiếp. NO-PROGRESS sentinel: một vòng không tiến triển hợp lệ (published tăng / backlog giảm / slot BLOCKED vì QA thật) mà backlog > 0 → workflow FAIL LOUD.
Writer chỉ đẩy bài vào factory/data/articles/ — không tự sửa state khi pipeline đang chạy. Slot PLANNED chưa có module bài = `WAITING_FOR_WRITER` (không phải lỗi CI; GitHub Actions không tự viết prose).

## Writer lock — ownership-safe
- Acquire dùng primitive exclusive thật (link/open 'wx') + token unique mỗi acquisition; xem `factory/lib/lock.js`.
- Unlock chỉ xóa lock CỦA MÌNH: `node factory/factory.js unlock --owner <O> --token <T>`. Sai owner/token → REFUSE exit 1. `unlock --force` là lệnh recovery thủ công RIÊNG — workflow không bao giờ gọi.
- TTL 30 phút KHÔNG phải background daemon: lock stale chỉ được reclaim theo contract trong `lock.acquire` (race-safe, re-read trước mutation).

## Capacity là cấu hình, không phải hard limit
`capacity` luôn đọc từ `factory/state/matrix.json` (canonical source-of-truth) — KHÔNG hardcode con số capacity trong docs/code/test. Mọi giá trị "hiện tại" trong tài liệu chỉ là ví dụ **EXAMPLE ONLY** và có thể stale sau migration. Quy tắc:
- **Không hardcode** (hay bất kỳ con số capacity nào) trong code/test — mọi validation đọc từ matrix.json (canonical) hoặc qua helper của factory.js; `factory/test.js` có test chống regression literal này.
- Mở rộng qua đúng một lệnh canonical: `node factory/factory.js expand-capacity <N>` (chỉ tăng; shrink/cùng mức bị refuse; `--dry-run` xem trước). KHÔNG sửa tay `capacity` trong matrix.json.
- Expand không đụng ID/slot/PUBLISHED/plannedTarget/reserved; phần capacity mới là unallocated cho tới khi chủ repo ra lệnh (set-planned-target / điều chỉnh pool).
- ID slot (S00001…) không renumber, không recycle; generator hoạt động vượt mọi mốc (S10000, S100000 hợp lệ).
- Chỉ chủ repo quyết định mở rộng — agent không tự expand capacity hay tự phân phối capacity mới vào các pool dự phòng.

## Chuẩn bắt buộc khi sửa factory/workflow — 4 tầng kiểm thử
Mọi thay đổi factory/workflow/docs phải giữ và mở rộng bộ test theo chuẩn: **Unit → Integration → Production invariant → Long-run / Failure recovery** (chi tiết: `docs/FACTORY-RELIABILITY.md`, acceptance contract "green means progress"). KHÔNG xóa test cũ để lấy màu xanh.

## Trước khi commit
```
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 75
node factory/test-hardening.js
node factory/test-reliability.js
```
Cả sáu lệnh phải xanh (reliability/hardening là cổng pre-commit bắt buộc cho thay đổi factory/workflow).
