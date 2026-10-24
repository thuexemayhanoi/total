# AGENTS.md — AI WIKI TOTAL

## OWNER OVERRIDE — FAST WRITER, 24/10/2026 (hiện hành)

Chủ repo yêu cầu áp dụng hot-loop đơn giản của `thuexemayhanoi/blog` cho riêng `/total`: **AI nghiên cứu chủ đề -> viết bài -> QA scoped -> push -> publisher -> tiếp bài**, không chờ owner duyệt từng topic hoặc khóa/claim bằng tay. `factory/topic-governance.json` hiện `mode=off`, `requireApproved=false`; 300 slot PLANNED cũ có thể được `writer-pack --count 10` nhận ngay. **Không đánh đồng 300 slot là 300 chủ đề chất lượng:** dữ liệu V1 từng có nhiều biến thể trùng intent. AI phải tự so câu hỏi, ý định tìm kiếm và các bài PUBLISHED trước khi viết; bỏ/đề xuất gộp slot trùng, không tạo bài nhồi từ khóa. Giữ `v1Generation=frozen` để KHÔNG tự đẻ thêm biến thể tiêu đề rác; nguồn chủ đề tiếp theo phải là ý tưởng nghiên cứu độc lập, đủ bằng chứng.

**Đường nóng:** `git fetch/rebase origin main` -> `node factory/factory.js writer-pack --count 10 --json` -> viết chỉ đúng module `factory/data/articles/<slug>.js` cho topic đủ giá trị, tự kiểm tra SEO/dữ kiện -> `node factory/factory.js verify-batch "ID1,ID2,..."` -> push (1–10 bài/lần) -> `.github/workflows/factory-publish.yml` tự QA ≥70, chống lỗi critical, xuất bản. Publisher có cron phục hồi backlog 30 phút/lần nếu mất push event; không có AI nội bộ trong GitHub Actions. AI writer còn phiên thì tiếp batch mới. Không chờ QA nặng toàn site trong mỗi batch. Không dùng `topic-approve` như chốt đợi chủ repo cho 300 slot legacy.

**Giữ khóa AN TOÀN duy nhất bên trong publisher** (`concurrency: total-production`, transaction lock, không force push) để hai workflow không ghi đè sitemap/matrix. Đây không phải khóa thủ công ngăn writer; không xóa primitive này. Tất cả bài vẫn cần QA ≥70, 1.000–5.000 từ, ≥4 H2, ≥2 related PUBLISHED, canonical, category, link 404 và dữ kiện thật; `intentConflicts` hiện chỉ cảnh báo, vì vậy AI có trách nhiệm tự loại chủ đề trùng trước khi push. Không tạo bài mới từ V1 hoán vị khi hết 300 slot; ưu tiên nguồn thật và ý định tìm kiếm độc lập. Bài đã PUBLISHED không được đổi URL.

**Nguồn hướng dẫn hiện hành:** `AGENTS.md` + [docs/FAST-WRITER-LOOP.md](docs/FAST-WRITER-LOOP.md) + file YAML/code thực tế; tài liệu lưu lịch sử V2 chỉ là bản tham chiếu. Không coi `QA PASS` là bảo đảm không trùng intent: trước khi viết cần tự rà bài gần nhất. Các lệnh topic tạo slot mới hiện vẫn phụ thuộc coordinator; FAST MODE chỉ bỏ yêu cầu APPROVED cho các slot đã có.

---


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
7. Custom Domain `wiki.thuexemaynguyentu.com` phục vụ site từ `/` (không dùng `/total/`). Search index, chatbot index, canonical và sitemap không được chứa tiền tố project cũ; file HTML được generator sinh ở thư mục root của repo.
8. Không để ký tự rác CJK/Cyrillic/Hangul trong bất kỳ nguồn nào.
9. **TOÀN BỘ TRANG PHẢI INDEX (chủ repo, 2026-10-12): không noindex bất kỳ trang/bài nào; `factory/data/index-policy.json` để `entries` rỗng.** Chính sách lập chỉ mục (`factory/data/index-policy.json`, xem `docs/INDEX-POLICY.md`): chỉ chủ repo/coordinator thêm mục `noindex,follow`; mục phải có lý do, người quyết định, ngày; trần 30% số bài PUBLISHED; không dùng robots.txt; không xóa bài/đổi URL/redirect. Bài noindex vắng `sitemap-articles.xml` và có meta robots — sửa policy phải kèm HTML sinh lại (generator-first). Rollback = xóa mục rồi `node factory/generate.js`. Agent không tự thêm mục.

## Vòng đời nội dung
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED (lỗi: QA → REPAIR → QA → BLOCKED).
Dùng `node factory/factory.js`: **hot path** `writer-pack`/`verify-batch`/`push-scope`/`publish-batch`; **monitor/recovery** `status`/`production-status`/`backlog`/`check-state`/`plan-chunk`/`recover-txn`/`resume`; **legacy/manual** `publish-pair`/`verify-pair`/`cycle-plan`/`cycle-qa`/`cycle-publish`; **coordinator** `topic-propose`/`topic-approve`/`manifest-sync`/`index-refresh`/`index-rebuild`/`index-check`. Không sửa JSON state/ma trận bằng tay khi factory đang chạy.

**WRITER FAST MODE (docs/FAST-WRITER-LOOP.md):** Có thể dùng 1 Writer hoặc tối đa 3 phiên ngoài độc lập (W1/W2/W3), mỗi phiên chọn một shard `--shard 1/3`, `2/3`, `3/3` của các slot PLANNED chưa có bài; không bắt buộc chạy 3 phiên. Dùng `writer-pack --count 10 [--shard k/3]` → tạo tối đa 10 module bài hợp lệ → `verify-batch` → push. GitHub Actions `factory-publish.yml` nhận exact push scope hoặc phục hồi backlog 30 phút/lượt → verify-batch → `publish-batch` (1–10 bài trong một transaction) → scoped 404 gate → commit state. Không có AI/API tạo prose trong GitHub Actions. `publish-pair`/cycle là legacy recovery, không phải đường nóng.

**ĐỐC CÔNG 2/3:** theo dõi `production-status`, `liveness`, `error-log`, escalated sau 3 lần xử lý và `error-resolve` khi sửa xong. Khi chủ repo dừng Writer, `factory/writer-control.json` có `mode: paused`; scheduled watchdog dùng `--honor-owner-control` để không báo nhầm heartbeat cũ. Không che lỗi escalated hoặc backlog đã có bài nguồn chờ publish. Muốn chạy lại Writer phải có quyết định chủ repo và đổi mode sang `running`; không xóa checkpoint/Matrix.

**Content index (scale 10k–100k bài):** `factory/state/article-manifest.jsonl` + content files là SOURCE OF TRUTH (được commit); `factory/state/content-index.sqlite` là DERIVED CACHE (KHÔNG commit, đã .gitignore) — chỉ coordinator được ghi/rebuild (manifest-sync/index-rebuild/index-check); QA/query đọc SQLite thay vì rescan; missing/corrupt/stale → index-rebuild an toàn.

**CHÍNH SÁCH ĐỘ DÀI BÀI:** 1.000–5.000 từ/bài, áp dụng thống nhất cho Writer Pack và QA bằng `ARTICLE_MIN_WORDS` / `ARTICLE_MAX_WORDS` tại `factory/lib/factory-runtime.js`. Giữ QA **70/100**, ≥4 H2, ≥2 related đã PUBLISHED, 7 critical gates và mọi yêu cầu an toàn khác; không nới các ràng buộc ngoài số từ. Không sửa hàng loạt bài PUBLISHED chỉ để tăng điểm.

Writer chỉ đẩy module bài vào `factory/data/articles/` (có thể cập nhật `factory/state/writer-heartbeat.json` qua lệnh chuẩn), không sửa matrix/txn/manifest/sqlite/HTML. Slot PLANNED chưa có module bài = `WAITING_FOR_WRITER` (không phải lỗi CI; GitHub Actions không tự viết prose). Kiểm tra trùng **trước khi viết**: 300 slot legacy còn lại không bảo đảm topic độc lập; nếu không tìm được ý tưởng đủ giá trị thì không viết đệm để lấy số lượng.

## TOPIC FACTORY V2 — giá trị trước số lượng (docs/TOPIC-FACTORY-V2.md)
- **Slot legacy PLANNED đã có**: writer được dùng ngay, **không cần `topic-approve` hoặc owner duyệt từng bài**. **Topic V2 mới ngoài các slot hiện có**: công cụ `topic-propose`/`topic-approve` vẫn là đường tạo slot trong code hiện tại; nếu muốn tự cấp slot không qua bước này cần một thay đổi engine riêng, không được giả vờ đã tự động hóa. Không tự sửa matrix hoặc tạo topic hoán vị.
- **Cấu hình hiện hành** `factory/topic-governance.json`: `mode=off`, `requireApproved=false`, `v1Generation=frozen`; writer-pack/verify-batch không đòi APPROVED cho slot legacy; `queue-refill` vẫn bị đóng băng để tránh biến thể V1 trùng ý. Chỉ chủ repo được quyết định bật lại `enforce` hoặc mở `v1Generation`.
- Topic V2 có brief thì bám TOPIC_BRIEF/GAIN/OUTLINE/SCOPE; legacy thiếu brief thì AI tự nghiên cứu nguồn, xác minh information gain và tránh trùng intent trước khi viết. `factualScope: no-figures` không được tự đưa số liệu/giá/thông số; `demand` chỉ nhận số đo GSC/site-search thật, không bịa.
- Quyết định MERGE-CANDIDATE chỉ là đề xuất bổ sung vào bài đã có: KHÔNG xóa bài, đổi URL, redirect, đổi tiêu đề bài đã xuất bản nếu chủ repo chưa duyệt (docs/TOPIC-V2-MIGRATION-PLAN.md).
- Topic mới nếu đăng ký qua `topic-propose`/`topic-approve` vẫn cần coordinator quản lý `factory/state/topic-matrix.jsonl`; writer không sửa ledger này hay `matrix.json` bằng tay. Dòng JSONL hỏng ⇒ lệnh ghi từ chối (khôi phục từ git).

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
Mọi thay đổi engine/workflow phải giữ và mở rộng bộ test theo chuẩn **Unit → Integration → Production invariant → Long-run / Failure recovery** (`docs/FACTORY-RELIABILITY.md`). Không xóa test cũ để lấy màu xanh. Thay đổi riêng docs phải nhất quán với workflow hiện hành; không cần chạy full-site gate mỗi lô bài.

## Kiểm tra trước khi commit

**Chỉ sửa nội dung:** dùng `node factory/factory.js writer-pack --count 10 --json`, `node factory/factory.js verify-batch "<ID1,ID2,...>"` cho tối đa 10 IDs; chỉ push khi PASS. Không chạy lại generate/full-site/audit và toàn bộ suite nặng cho từng lô bài. Publisher sẽ re-verify-scoped, generate, kiểm tra 404, cập nhật state/manifest. Nếu một bài fail QA, sửa nội dung; không giảm gate.

**Sửa engine/workflow:** chạy full regression (lỗi đỏ phải sửa nguyên nhân), gồm:
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
node factory/test-topic-v2.js
node factory/factory.js topic-check --recheck
```
Đối với thay đổi engine/workflow, tất cả test bắt buộc phải xanh (bao gồm `test-cycle.js` và `test-topic-v2.js`); không sửa assert/threshold chỉ để tạo màu xanh. Lỗi coverage Topic V2 4/6 (ghi nhận 23/10) đã sửa ngày 24/10 bằng khớp đúng dấu trong `queryCoverage` (docs/TOPIC-FACTORY-V2.md mục 13.9); `test-topic-v2.js` phải xanh hoàn toàn — nếu đỏ lại, sửa hàm phân loại hoặc bằng chứng, không xóa test hay nới ngưỡng.

**PRODUCTION COORDINATOR TỰ ĐỘNG:** `factory-coordinator.yml` chạy maintenance mỗi khoảng 10 phút: recover-txn → check-state/topic-check → queue-refill (hiện frozen/no-op) → production-status → commit chỉ khi có diff. Publisher dùng cùng concurrency `total-production`, nhận push bài và có cron fallback mỗi 30 phút, chỉ publish những module bài thực sự tồn tại; full audit ở workflow manual. Writer có thể là Claude/Mistral/ChatGPT phiên ngoài (1 hoặc nhiều shard không trùng), Actions không tự viết bài hoặc đánh thức phiên AI; watchdog read-only không phải writer.
