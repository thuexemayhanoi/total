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
5. **QA MINIMAL GATE ≥ 70** mới được PUBLISHED (7 critical gate override điểm; SEO/intent chỉ advisory — không đòi 75/90/100, không REVIEW/EXCELLENT; bài ≥ 70 không sửa chỉ để tăng điểm); test (`node factory/test.js`) phải PASSED trước khi commit engine.
6. **Không deploy draft**; không chặn nội dung công khai trong robots.txt.
7. Chỉ mục tìm kiếm/chatbot lưu URL **không** có tiền tố `total/`; file trong repo **có** tiền tố `total/`.
8. Không để ký tự rác CJK/Cyrillic/Hangul trong bất kỳ nguồn nào.

## Vòng đời nội dung
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED (lỗi: QA → REPAIR → QA → BLOCKED).
Dùng `node factory/factory.js` (status/plan/list/research/write/qa/qa-preview/publish/audit/resume/expand-capacity/set-planned-target/backlog/check-state/plan-chunk/verify-invariant/drain-bound/drain-iteration + hot path pair: publish-pair/verify-pair/verify-sources/push-scope/publish-plan/change-mode/recover-txn + production cycle: cycle-plan/cycle-qa/cycle-publish/queue-refill + content index: manifest-sync/index-rebuild/index-check) — không sửa JSON state tay khi factory đang chạy.

**PRODUCTION 3 VAI TRÒ (docs/PRODUCTION-ROLES.md, KHÔNG còn 3 writer):** WRITER 1 là writer duy nhất — mỗi pair 2 bài: `writer-next` (pair 2 ID, resume trước/new sau) → viết 2 bài → `verify-sources` → push bài + heartbeat (`writer-heartbeat`) → `factory-publish.yml` publish → pair kế, checkpoint tự khớp state. ĐỐC CÔNG 2 theo dõi `production-status`/`liveness`, ghi `error-log` (tự escalated tại 3 lần thử), sửa lỗi writer/publisher. ĐỐC CÔNG 3 xử lý entry escalated trong `error-queue.json` rồi `error-resolve` bàn giao lại. Các lệnh `cycle-plan/cycle-qa/cycle-publish` (12–18 bài) giờ chỉ là legacy recovery chạy thủ công — KHÔNG còn CYCLE_ALLOCATE.

**PAIR (commit-based hot path):** writer viết đúng 2 bài, `verify-sources` scoped (QA minimal ≥ 70 chặn; SEO/intent advisory) rồi push main → `factory-publish.yml`: push-scope (EXACT IDs) → publish-pair atomic (scoped QA → FAIL vào repair queue, PASS publish → generate → verify-pair → lật đúng rows → COMMIT txn). KHÔNG sweep slot khác. Txn marker sót → `recover-txn` idempotent. Heavy gate (audit ≥ 70/invariant/test suites) chỉ chạy khi engine đổi (ENGINE_CHANGE) hoặc owner chủ động chạy `factory-deep-audit.yml` (workflow_dispatch MANUAL-ONLY) — KHÔNG chạy trong production loop.

**Content index (scale 10k–100k bài):** `factory/state/article-manifest.jsonl` + content files là SOURCE OF TRUTH (được commit); `factory/state/content-index.sqlite` là DERIVED CACHE (KHÔNG commit, đã .gitignore) — chỉ coordinator được ghi/rebuild (manifest-sync/index-rebuild/index-check); QA/query đọc SQLite thay vì rescan; missing/corrupt/stale → index-rebuild an toàn.

Writer chỉ đẩy bài vào factory/data/articles/ — không tự sửa state/matrix/txn/sqlite khi pipeline đang chạy. Slot PLANNED chưa có module bài = `WAITING_FOR_WRITER` (không phải lỗi CI; GitHub Actions không tự viết prose).

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
node factory/factory.js audit --min-score 70
node factory/test-hardening.js
node factory/test-reliability.js
node factory/test-pair.js
node factory/test-cycle.js
node factory/test-coordinator.js
```
Cả tám lệnh phải xanh (reliability/hardening là cổng pre-commit bắt buộc cho thay đổi factory/workflow).

**PRODUCTION COORDINATOR TỰ ĐỘNG (factory-coordinator.yml):** tick mỗi 10 phút (`cron 7,17,27,37,47,57 * * * *` + workflow_dispatch), mỗi run bounded một lượt maintenance: recover-txn → check-state → queue-refill (idempotent) → manifest-sync → verify-invariant → backlog + production-status → commit state CHỈ KHI có diff thật (tick rỗng không commit). Concurrency `total-production` dùng chung với factory-publish.yml (không cancel). Writer là external (session Mistral ngoài) — Actions KHÔNG tự viết bài, KHÔNG fake article; Writer 1 đọc `writer-next` rồi nộp module bài vào `factory/data/articles/`. Watchdog `factory-liveness.yml` (mỗi giờ, read-only) phát hiện writer đứng/lỗi escalated — chỉ Actions đỏ, KHÔNG thể tự đánh thức phiên Mistral.
