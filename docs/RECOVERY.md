# Khôi phục khi có sự cố

## Nguyên tắc
Mọi thứ sinh từ dữ liệu: HTML hỏng → chạy lại `node factory/generate.js`. Trạng thái quy trình nằm trong 3 file JSON của `factory/state/`.

## Các tình huống
- **HTML bị lỗi / patch tay:** xóa HTML sinh, chạy lại generate; `--check` sẽ báo file lệch.
- **Factory dở dang:** `node factory/factory.js resume` xem checkpoint và slot đang dở; tiếp tục từ đó, KHÔNG làm lại từ đầu.
- **Writer lock kẹt (agent cũ crash):** lock có ownership (owner + token unique từng acquisition). KHÔNG bao giờ `unlock` trần — sẽ bị REFUSE. Đường đúng:
  1. `node factory/factory.js status` — xem owner/pid/at của người giữ lock.
  2. Xác minh writer đó thật sự không còn sống (pid chết, run cũ đã kết thúc, đã quá TTL 30 phút — TTL KHÔNG phải daemon tự xóa, chỉ có nghĩa là lock stale sẽ được reclaim an toàn ở lần `acquire` kế tiếp theo contract trong `factory/lib/lock.js`).
  3. Nếu chắc chắn không ai đang ghi: `node factory/factory.js unlock --force` (lệnh recovery thủ công RIÊNG — workflow không bao giờ gọi).
- **Nhầm owner/token khi unlock:** REFUSE exit 1, lock giữ nguyên — đó là hành vi đúng (không xóa lock của writer khác); kiểm tra lại token từ output `WRITER_LOCK_TOKEN=...` của lần `lock` tương ứng.
- **Mất file state:** đối chiếu `factory/state/manifest.json` (sinh kèm site) với thực tế để dựng lại matrix; ưu tiên pull từ nhánh main của repo.

## Chống lặp lại
Atomic write và checkpoint đảm bảo không có file dở; mọi thao tác state phải qua factory.js, không sửa JSON tay khi đang chạy.

## Session/mạng đứt — repository là checkpoint
State (matrix, factory-state, checkpoint) nằm trên `main`. Publisher hiện có **push trigger + schedule phục hồi 30 phút** (`17,47 * * * *`) + dispatch; trên schedule/no-scope, nó fetch main và tìm tối đa 10 ID có module bài nhưng chưa PUBLISHED qua `plan-chunk --limit 10`. Luồng: READ FRESH STATE → recover/check-state → scoped verify-batch → publish-batch → link 404 + index-refresh → commit/push. Mất push trigger không có nghĩa bài bị xóa; run sau thử lại nhưng lỗi content/transaction vẫn phải xử lý. Không reset matrix hoặc ID.

## Bounded recovery / transaction fail
- Mỗi publisher run hiện xử lý tối đa 10 article-backed IDs, **không phải while-true drain toàn queue trong cùng run**. Nhiều batch có thể cần nhiều lượt cron; đừng suy SUCCESS + backlog còn lại là lỗi khi run đã xử lý xong scope của mình.
- Chỉ nhận ID có module thật; batch QA/404 fail phải sửa đúng nội dung, không bypass QA để có màu xanh.
- Khi push/rebase fail, kiểm tra latest main, transaction/lock trước khi retry; không force push, không ghi đè published commit.
- Nếu publisher không có ID thì no-op là bình thường, không chứng minh AI writer đang hoạt động. Nếu writer bị hết phiên thì phải mở phiên AI mới; GitHub Actions không thể tự gọi Claude/Mistral.
- Lock là khóa giao dịch của publisher, không đòi writer AI chạy `lock`. Sai owner/token phải REFUSE; dùng `unlock --force` chỉ khi xác minh lock stale theo hướng dẫn trên.

## Mở rộng capacity (expand-capacity) đứt giữa chừng
`expand-capacity` là migration có giao dịch: lock → snapshot (hash ma trận ghi vào factory-state.lastAction) → migrate (chỉ đổi con số capacity) → verify (generate --check, test, audit) → commit → unlock.
- **Verify fail:** tự ROLLBACK về capacity cũ — không bao giờ để state half-migrated.
- **Process chết giữa chừng:** matrix ghi atomic (không có file dở); writer lock còn sót sẽ chỉ là lock stale — TTL 30 phút KHÔNG phải daemon tự xóa, nhưng `acquire` kế theo contract trong `factory/lib/lock.js` sẽ reclaim race-safe khi đã quá hạn; checkpoint không đổi (số slot không đổi). Chạy `node factory/factory.js status` + `resume` để kiểm, rồi chạy lại lệnh expand — mọi validate (checkpoint khớp, không lock sống, ma trận hợp lệ, refuse shrink) sẽ từ chối nếu state chưa sạch.
- **Không bao giờ** sửa tay `capacity` trong matrix.json — luôn qua lệnh canonical (hoặc rollback bằng `git checkout` state cũ khi chủ repo yêu cầu).
