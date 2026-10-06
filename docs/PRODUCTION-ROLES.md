# Production 3 VAI TRÒ (Writer 1 + Đốc công 2 + Đốc công 3)

> Thay thế mô hình "3 writer song song" cũ (writer-a/b/c + CYCLE_ALLOCATE).
> Mô hình mới KHÔNG phải 3 agent độc lập chạy nền — là **3 vai trò** trong một
> quy trình có checkpoint, heartbeat và hàng đợi lỗi. Không tạo 3 tên trong log
> rồi tuyên bố có 3 agent; mỗi vai trò là một phiên làm việc thật (session
> Mistral) hoặc một pha trong phiên đó.

## Vai trò

### WRITER 1 — chỉ viết bài (writer duy nhất)

Mỗi vòng **1 pair = 2 bài**:

1. Fetch state mới nhất từ `main` (matrix + checkpoint + heartbeat).
2. `node factory/factory.js writer-next` → nhận đúng 2 ID (resume slot dở có
   bài trước, còn lại lấy PLANNED mới theo ID; KHÔNG bao giờ trả PUBLISHED).
3. Viết 2 module bài vào `factory/data/articles/<mới>-<slug>.js` theo chuẩn
   QA hiện có (gate ≥ 70, không hạ chuẩn).
4. `node factory/factory.js verify-sources <ID,ID>` rồi qa-preview từng bài.
5. Push **2 file bài + `factory/state/writer-heartbeat.json`**
   (phase `waiting-publish`, kèm 2 ID) → `factory-publish.yml` tự publish
   exact push scope (scoped QA → sinh site → verify-pair → atomic txn).
6. Xác nhận publish xong (matrix +2 PUBLISHED) → ghi heartbeat phase
   `writing` cho pair kế → lặp lại pair tiếp theo.

Ràng buộc: KHÔNG sửa engine/workflow, KHÔNG chạy lệnh coordinator
(queue-refill/manifest-sync bị role guard chặn), KHÔNG viết trùng ID/slug.

### ĐỐC CÔNG 2 — theo dõi và sửa lỗi

- Đọc `node factory/factory.js production-status` (phase hiện tại:
  `waiting-writer` / `idle` / `writing` / `waiting-publish` / `error` /
  `stalled`) và `liveness` (heartbeat cũ quá `WRITER_STALL_MINUTES`=120 phút
  → stall).
- Heartbeat ngừng tiến triển → kiểm tra nguyên nhân: đang viết, chờ publish,
  hết phiên, hay gặp lỗi. KHÔNG có kết nối Actions↔Mistral nên **không thể
  đánh thức phiên writer** — chỉ phiên writer mới resume từ checkpoint.
- Lỗi writer/publisher → ghi `error-log` (cùng nguồn+pair tăng attempts,
  tự `escalated` khi đạt `DOCONG2_MAX_ATTEMPTS`=3), đọc log, sửa đúng nguyên
  nhân, đẩy phần việc dang dở tiếp tục.
- KHÔNG khởi chạy writer trùng khi writer còn đang hoạt động (heartbeat còn tươi).
- Sửa không được sau 3 lần thử → lỗi đã `escalated` chờ Đốc công 3.

### ĐỐC CÔNG 3 — xử lý lỗi được chuyển lên

- Chỉ audit đúng các entry `escalated` trong
  `factory/state/error-queue.json` (đọc: `error-queue --role coordinator`).
- Tìm nguyên nhân gốc, sửa, kiểm tra phần liên quan, push.
- Đóng entry: `node factory/factory.js error-resolve <id> --note "..."` →
  bàn giao lại cho Đốc công 2, Writer 1 chạy tiếp.
- KHÔNG audit toàn repo mỗi vòng; KHÔNG sửa đồng thời với Đốc công 2.

## Trạng thái & công cụ

| Lệnh | Vai trò | Ý nghĩa |
|---|---|---|
| `writer-next` | Writer 1 | Lấy pair 2 ID tiếp theo (resume trước, new sau) |
| `writer-heartbeat --phase <p> --pair <ids>` | Writer 1 | Ghi heartbeat (phase `writing`/`waiting-publish`/`idle`) |
| `production-status` | đọc | Phase tổng hợp + PUBLISHED/PLANNED + lỗi escalated |
| `liveness` | đọc | Exit 1 khi stall > 120' hoặc có lỗi escalated (watchdog `factory-liveness.yml` chạy read-only mỗi giờ) |
| `error-log --source <s> --pair <ids> --message <m>` | Đốc công 2 | Thêm/cập nhật entry (attempts, tự escalate tại 3) |
| `error-queue` | Đốc công 2/3 | Xem hàng đợi lỗi |
| `error-resolve <id>` | Đốc công 3 | Đóng entry đã xử lý |

File state: `factory/state/writer-heartbeat.json` (Writer 1 ghi),
`factory/state/error-queue.json` (ledger Đốc công 2→3, resolve loại khỏi match).

## Coordinator giờ là maintenance tick

`factory-coordinator.yml` (cron 7,17,27,37,47,57 * * * *) KHÔNG còn phân công
writer: recover-txn → check-state → queue-refill (idempotent) → manifest-sync
→ verify-invariant → backlog + production-status → commit CHỈ KHI có diff thật
(tick rỗng không commit — chống churn timestamp). Publish hot path là
`factory-publish.yml` (publisher duy nhất, concurrency `total-production`).
Các lệnh `cycle-plan`/`cycle-qa`/`cycle-publish` còn lại chỉ là legacy recovery
chạy thủ công, không thuộc tick.

## GIỚI HẠN đã ghi nhận

- **Không có agent/phiên độc lập tự đánh thức nhau** trong môi trường Mistral:
  không có cơ chế gửi lệnh giữa các agent. Watchdog (`factory-liveness.yml`)
  chỉ PHÁT HIỆN đứng (Actions đỏ) — không thể tự resume phiên writer. Resume
  do phiên writer/đốc công kế tiếp đọc trạng thái thật trên `main` (checkpoint
  + heartbeat + matrix) mà tiếp tục.
- Topic pool gần cạn (~27 topic tự do): queue-refill thêm được tối đa ~27 slot;
  KHÔNG reset matrix để lấy thêm đề bài.
- GitHub Actions không tự viết nội dung, không gọi API trả phí, không secret mới.

## Resume an toàn

Mất phiên giữa chừng: phiên sau fetch state thật → `writer-next` trả đúng slot
dở (chưa PUBLISHED, có bài rồi thì reason=resume) → KHÔNG viết lại bài đã xuất
bản. Txn marker còn sót (crash giữa publish) → `recover-txn` rollback rồi publish lại đúng 1 lần.
