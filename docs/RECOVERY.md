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
Toàn bộ state (matrix, factory-state, checkpoint) nằm trên nhánh `main`. Pipeline publish đứt giữa chừng thì KHÔNG mất gì: lần chạy kế tiếp (push bài sau, hoặc re-run workflow) tự chạy theo luồng **READ STATE → RECOVER/RESUME → ACQUIRE LOCK → VERIFY → drain tiếp** (slot dở được resume trước, chunk ≤ 10 ID). Không restart factory, không reset ma trận, không quay về bài đầu.

## Continuous drain đứt giữa chừng (workflow chết sau chunk N)
- Mỗi chunk là một transaction riêng đã commit; chunk N xong rồi run chết thì chunk 1..N vẫn nguyên vẹn trên main — KHÔNG rollback, KHÔNG làm lại.
- Drain dùng explicit IDs + publish idempotent theo ID: rerun sẽ bỏ qua slot đã PUBLISHED, chỉ xử lý phần còn lại — không duplicate, không renumber, không mất slot.
- Push/rebase thất bại sau khi commit chunk: repo trên GitHub là checkpoint của chunk trước — rerun drain sẽ resume đúng điểm (QA transitions đã lưu theo từng slot nên không phải chấm lại từ đầu).
- NO_PROGRESS (backlog > 0 mà một vòng không tiến): workflow FAIL LOUD — xem dòng `DRAIN FAIL: NO_PROGRESS` + các dòng QA ngay trên đó; thường là bài REPAIR chưa sửa xong. Sửa bài rồi chạy lại — slot REPAIR sẽ được resume.
- Sai owner lock / lock của writer khác: workflow REFUSE và KHÔNG đụng lock đó (cleanup chỉ thả lock khi token file của chính run tồn tại). Chờ writer kia xong, hoặc xử lý theo mục "Writer lock kẹt" ở trên.

## Mở rộng capacity (expand-capacity) đứt giữa chừng
`expand-capacity` là migration có giao dịch: lock → snapshot (hash ma trận ghi vào factory-state.lastAction) → migrate (chỉ đổi con số capacity) → verify (generate --check, test, audit) → commit → unlock.
- **Verify fail:** tự ROLLBACK về capacity cũ — không bao giờ để state half-migrated.
- **Process chết giữa chừng:** matrix ghi atomic (không có file dở); writer lock còn sót sẽ chỉ là lock stale — TTL 30 phút KHÔNG phải daemon tự xóa, nhưng `acquire` kế theo contract trong `factory/lib/lock.js` sẽ reclaim race-safe khi đã quá hạn; checkpoint không đổi (số slot không đổi). Chạy `node factory/factory.js status` + `resume` để kiểm, rồi chạy lại lệnh expand — mọi validate (checkpoint khớp, không lock sống, ma trận hợp lệ, refuse shrink) sẽ từ chối nếu state chưa sạch.
- **Không bao giờ** sửa tay `capacity` trong matrix.json — luôn qua lệnh canonical (hoặc rollback bằng `git checkout` state cũ khi chủ repo yêu cầu).
