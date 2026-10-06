# Production roles — WRITE-AHEAD QUEUE

Mô hình production của `/total` giữ 3 vai trò (Writer 1 + Đốc công 2 + Đốc công 3), nhưng hot path publish đã học cơ chế ổn định của `/vanchinh`.

## WRITER 1 — viết queue, không sửa engine

Writer vẫn là phiên AI bên ngoài. GitHub Actions không tự viết prose và không gọi AI API.

### Vòng lặp chuẩn

1. Fetch fresh `main`.
2. Chạy `node factory/factory.js writer-next --count N`, với `N=2..10` (turbo có thể dùng 10).
3. Viết đúng các module được trả về trong `factory/data/articles/`.
4. Chia danh sách thành pair 1–2 ID và chạy `verify-sources` cho từng pair trước khi push.
5. Ghi `writer-heartbeat --phase waiting-publish --pair <ids>`.
6. Push **1–10 bài** trong một commit. Đây là write-ahead queue an toàn trên `main`.
7. `factory-publish.yml` chụp exact push scope, refresh fresh truth, dựng `publish-plan`, rồi tự chia queue thành pair 1–2 ID và consume tuần tự.
8. Xác nhận workflow/Pages xanh, fetch fresh `main`, lấy queue kế tiếp và lặp.

Không cần dừng sau mỗi pair 2 bài. Pair vẫn là đơn vị transaction/QA, còn writer push là queue tối đa 10 bài.

## Publisher — event driven, queue 1–10

`factory-publish.yml`:

- capture exact event scope **trước** khi refresh;
- từ chối push có hơn 10 article IDs;
- refresh `origin/main` trước mọi mutation để tránh stale checkout;
- recover txn + check-state;
- `publish-plan --scope` ưu tiên backlog article-backed cũ rồi scope mới;
- consume từng pair bằng `publish-pair`;
- QA minimal gate vẫn **>=70**, SEO/intent advisory như hiện tại;
- pair QA fail đi REPAIR và queue tiếp tục;
- infra fail ở pair sau sẽ recover, giữ checkpoint pair trước, commit phần đã thành công rồi báo đỏ;
- `generate.js --check` chạy trước commit;
- commit/push **một lần cho cả queue**;
- final gate không ép `backlog=0`, vì writer mới có thể vừa push queue kế tiếp và đó không phải lỗi.

Publisher và coordinator dùng chung concurrency `total-production`, không chạy đè nhau.

## Coordinator — maintenance only

`factory-coordinator.yml` chạy mỗi 10 phút:

fresh `origin/main` → recover → check-state → queue-refill → manifest-sync → verify-invariant → backlog/status → commit chỉ khi có diff thật.

Refresh fresh truth ngay đầu tick là bắt buộc để tránh lỗi rebase conflict do scheduled event checkout SHA cũ.

## Đốc công 2

Theo dõi `production-status`, `liveness` và `error-queue`.

- heartbeat cũ quá 120 phút khi đang writing/waiting-publish → stalled;
- lỗi writer/publisher được ghi `error-log`;
- 3 lần không sửa được → escalated cho Đốc công 3;
- không khởi chạy writer trùng khi heartbeat còn tươi.

## Đốc công 3

Chỉ xử lý entry escalated, sửa nguyên nhân gốc, chạy validation liên quan rồi `error-resolve`.

## Watchdog và verify

- `factory-liveness.yml`: read-only mỗi giờ, chỉ phát hiện stall/escalated.
- `factory-publish-verify.yml`: manual read-only, chạy invariant + generate check + toàn bộ regression suite.
- `factory-deep-audit.yml`: manual full-site audit; không đưa vào hot path.

## Giới hạn môi trường

GitHub Actions không thể tự đánh thức một phiên Mistral đã kết thúc. Write-ahead queue giúp một phiên writer làm được nhiều bài hơn trước khi kết thúc, còn watchdog chỉ phát hiện xưởng đứng.

Topic pool vẫn là nguồn đề tài của queue-refill. Không reset matrix, không tái sử dụng ID/slug đã dùng.

## Resume an toàn

Mất phiên giữa chừng: phiên sau fetch fresh `main` → `writer-next --count N` ưu tiên bài dở có module trước, rồi PLANNED mới. Txn marker sót được `recover-txn` xử lý. Không force push và không bypass QA.
