# Production roles — FACTORY LITE BATCH

`/total` dùng Writer AI ở phiên ngoài + GitHub publisher cho site GitHub Pages `wiki.thuexemaynguyentu.com` (root `/`). **Cấu hình hiện hành từ 24/10/2026:** `mode=off`, `requireApproved=false`, `v1Generation=frozen`. Slot PLANNED legacy không cần duyệt từng topic; vẫn phải kiểm tra trùng intent trước khi viết, và giữ QA đầy đủ. Capacity lấy tại `factory/state/matrix.json`, không coi capacity là bài cần đẻ.

## Hot loop

Writer:

1. fetch/rebase `main` trước khi nhận việc;
2. `node factory/factory.js writer-pack --count 10 --json` (tùy chọn `--shard 1/3`, `2/3`, `3/3` nếu có nhiều phiên writer độc lập);
3. **đọc và so intent với bài đã PUBLISHED**: nhiều trong 300 slot legacy là tiêu đề biến thể, không có nghĩa tất cả nên viết; chỉ chọn topic có nhu cầu và thông tin mới;
4. viết 1–10 article modules thật trong `factory/data/articles/` đúng ID/hub/slug;
5. `node factory/factory.js verify-batch "ID1,ID2,..."` và chỉ push khi PASS;
6. push batch, fetch/rebase rồi tiếp tục batch mới trong cùng phiên nếu quota còn; không cần đợi full-site audit. Writer không được chỉnh sửa matrix, topic ledger, manifest/SQLite hoặc HTML sinh.

Publisher `.github/workflows/factory-publish.yml`:

push trigger **hoặc** cron fallback mỗi 30 phút → fresh main → exact push IDs; nếu không có push IDs thì lấy tối đa 10 article-backed backlog bằng `plan-chunk` → recover/check-state → verify-batch → **publish-batch 1–10 một lần** → scoped 404 link gate → commit/push một lần.

Không còn chia queue 10 bài thành 5 pair trong hot path. `publish-pair` vẫn giữ lại làm recovery/repair compatibility.

## QA hot path

Mỗi bài vẫn giữ minimal gate hiện có:

- cấu trúc + **1.000–5.000 từ** (đồng bộ Writer Pack và QA);
- không trùng ID/slug;
- canonical đúng slot;
- render sạch;
- không bịa business facts;
- related links hợp lệ;
- QA >= 70; SEO advisory.

Thêm **internal link integrity fail-closed** sau render. Mọi href nội bộ của trang vừa sinh phải resolve tới file thật theo `SITE.baseUrl` / custom domain root `/` hiện hành; không tự thêm `/total/` vào URL. Link 404 hoặc sai base làm batch fail trước khi ghi PUBLISHED.

Checker hot path chỉ quét 1–10 trang mới, nên không biến mỗi batch thành full-site scan. Deep audit có `link-integrity --all` để rà toàn site khi chủ động chạy.

## Heavy work tách khỏi hot loop

`article-quality.yml` chỉ chạy khi engine/template/workflow/test thay đổi. Article content push không chạy thêm một pipeline QA trùng lặp.

`factory-coordinator.yml` chỉ maintenance nhẹ: recover/state guard → topic-check → `queue-refill` (đang `frozen`, no-op) → production status. Không tạo bài, không chạy full-site manifest/invariant mỗi 10 phút.

`factory-deep-audit.yml` là manual-only và chịu trách nhiệm full suites, manifest/index rebuild, invariant, byte-exact generate check và full-site link integrity.

## 20k scale

Matrix có logical capacity do `factory/state/matrix.json` quy định; không reset ID, slug hay bài PUBLISHED. Hot path bounded tối đa 10 bài/batch và scoped QA/link check; full-site O(N) work không nằm trong mỗi article push.

Nguồn topic là giới hạn độc lập: capacity không tự sinh nội dung. `queue-refill` hiện bị `v1Generation=frozen` chặn. Các 300 slot PLANNED legacy **được nhận để nghiên cứu** nhưng phần lớn có thể không đáng xuất bản do trùng ý. Topic ngoài số slot đã có vẫn dùng bộ lệnh Topic V2 (công cụ tạo slot mới chưa được tự động hóa hoàn toàn); không giả vờ là coordinator đã auto approve.

## Owner pause / resume (Writer ngoài)

Mặc định giám sát đọc file versioned `factory/writer-control.json` qua cờ
`--honor-owner-control`. Khi `mode: paused` (chủ repo chủ động dừng các Writer AI ngoài),
Watchdog báo `phase=paused-by-owner` và không báo sai `stalled` do heartbeat cũ;
**lỗi escalated hoặc backlog đã có bài nguồn chờ publish vẫn khiến Watchdog FAIL**. Coordinator cũng hiển thị paused khi an toàn.

Để mở lại giám sát nghiêm ngặt: sau khi chủ repo cho phép Writer hoạt động,
đổi `mode` thành `running`, rồi mở lại phiên Claude/Mistral tương ứng. Chuyển
mode không tự tạo bài, không tự mở session AI, không reset checkpoint hoặc ma trận.

`node factory/factory.js liveness` KHÔNG có cờ luôn kiểm tra heartbeat nghiêm
ngặt; test fixture dùng cách này để phát hiện stall thật.

## Recovery

Mất session: fetch fresh main → recover-txn → writer-next. Không force push, không reset matrix, không tái sử dụng ID/slug, không bypass QA.

GitHub Actions không tự viết prose, không tự tạo topic mới và không thể đánh thức phiên Claude/Mistral đã kết thúc; writer vẫn là phiên AI ngoài.


## Một lệnh cho Writer AI

Claude/Mistral/ChatGPT nên bắt đầu mỗi vòng bằng:

`node factory/factory.js writer-pack --count 10 --json`

Runbook hiện hành: [`docs/FAST-WRITER-LOOP.md`](FAST-WRITER-LOOP.md). File `docs/MISTRAL-WRITER.md` là bản tương thích.

Không tự chọn ID, không tự bịa internal-link slug. `writer-pack` trả file path, intent và related PUBLISHED; `verify-batch` + Factory Publish Lite chịu trách nhiệm QA/publish/404 gate.
