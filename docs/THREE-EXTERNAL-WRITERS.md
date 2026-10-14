# 3 Writer AI ngoài — Wiki Tú (/total)

Mục tiêu: W1, W2, W3 viết **đồng thời**, mỗi phiên AI riêng trên ChatGPT/Claude/Mistral hoặc nền tảng người dùng chọn. **KHÔNG API AI, KHÔNG mô hình AI mã nguồn mở, KHÔNG GitHub Actions tự viết nội dung.** GitHub chỉ thực hiện chia nhiệm vụ, QA, build, publish.

## 1. Quyền sở hữu cố định / tránh trùng

- `W1`: ID Sxxxx chia hết cho 3 (n % 3 = 0).
- `W2`: ID có n % 3 = 1.
- `W3`: ID có n % 3 = 2.
- Mỗi Writer phải chạy trong **workspace/git worktree riêng** và fetch main mới nhất trước khi nhận batch. Không dùng chung working copy hoặc sửa các tệp Matrix/state/manifest.
- `writer-pack` chỉ giao slot APPROVED theo Topic Factory V2. Mặc định cũ `writer-pack --count 10` chỉ dành cho W1 (không còn giao toàn queue).
- Slot REPAIR/WRITING/PASS có bài nguồn chỉ được RESUME đúng Writer đã sở hữu ID. Không chiếm shard của nhau; nếu một Writer hết quota thì shard đó chờ hoặc phải xin chủ sở hữu quyết định phân công lại.
- Một Writer tối đa 10 bài mỗi lượt. Ba Writer tối đa 30 bài đang viết. Không sinh thêm chủ đề/tự phê duyệt Topic V2.

## 2. Mỗi AI ngoài sử dụng lệnh riêng

| Phiên | Lệnh lấy việc |
|---|---|
| Writer 1 | `node factory/factory.js writer-pack --writer W1 --count 10` |
| Writer 2 (trước đây Đốc công 2) | `node factory/factory.js writer-pack --writer W2 --count 10` |
| Writer 3 (trước đây Đốc công 3) | `node factory/factory.js writer-pack --writer W3 --count 10` |

Có thể thêm `--json` để AI đọc brief/outline. Trước khi viết: `git fetch origin main && git rebase origin/main` (chỉ khi worktree sạch, không force push). Khi push bị non-fast-forward: **fetch rồi rebase, kiểm tra lại phần diff & QA, push lại**, không force. Không tự sửa tệp của Writer khác.

## 3. Chu kỳ mỗi Writer

1. Tải main mới nhất và chạy `writer-pack --writer Wn --count 10`.
2. Nếu `status=awaiting-approval`: dừng tạo bài, chờ Topic V2 được duyệt. Không bịa slot hay topic để đủ quota.
3. Viết đúng các module `factory/data/articles/<slug>.js` trong gói của mình; khai `writerOwner: 'Wn'` ở object bài cho CI kiểm tra ownership. Giữ tiêu đề/intent/scope đã duyệt, QA >=70, 1.000–5.000 từ, >=4 H2, >=2 liên kết PUBLISHED.
4. Kiểm tra bằng `node factory/factory.js writer-verify "Sxxxxx,Syyyyy" --writer Wn` và chỉ commit khi `WRITER_VERIFY_OK`.
5. Ghi heartbeat riêng: `node factory/factory.js writer-heartbeat --writer Wn --phase waiting-publish --pair "Sxxxxx,Syyyyy"`. Nếu chưa có ID: `--phase waiting-writer`.
6. Commit CHỈ các bài của mình và `factory/state/writer-heartbeats/Wn.json`; push bình thường, không sửa shared Matrix/manifest/txn/HTML.
7. Chờ workflow `Factory Publish Lite` xử lý: **một publisher**, khóa chung `total-production`, QA lại, xuất bản theo batch tối đa 10, và mỗi run có thể gom thêm các bài đang đợi từ 2 Writer kia (tối đa 30).
8. Sau batch: fetch main → xem PUBLISHED/REPAIR → sửa bài của mình nếu REPAIR → lấy batch mới. Không tự chỉnh published article.

## 4. Vận hành an toàn

- `writer-control.json mode=paused` do chủ repo quyết định, không chuyển sang running nếu chưa được phép.
- Liveness hiển thị `WRITER_STATUS writer=Wn` độc lập; một phiên không che heartbeat stale của phiên khác.
- Publisher quét backlog theo những module mới được commit vào main; không phụ thuộc duy nhất vào event push, vì GitHub có thể dồn pending workflow.
- Hàng đợi topic có thể thấp: số slot PLANNED legacy **không tương đương** với Topic V2 APPROVED. Ba Writer chạy đồng thời chỉ khi có 3 nhóm ID đã được APPROVED.
- Nếu QA sai/không đủ nguồn: Writer sửa bài của chính mình, không chỉnh QA threshold và không đụng bài đã PUBLISHED.
- Nếu GitHub push conflict hoặc outage: chờ, fetch main mới, làm lại kiểm thử; không reset Matrix, không xóa URL/SEO, không force push.
- Không có một script nào gọi LLM hay tự đánh thức ba phiên AI khi bị mất mạng/hết quota.

## 5. Giới hạn và rollback

- Phân công cố định theo ID an toàn cho ba phiên có danh tính W1–W3; **khác với registry lease động của /blog**. Không có cơ chế tự động chiếm ID của Writer đã hết quota. Đây là lựa chọn chủ ý để không ghi đè.
- CI chỉ xử lý tối đa 30 bài mỗi lần chạy. Nếu còn hơn 30 draft từ các lần push cũ, cần thêm trigger hợp lệ hoặc hoạt động khôi phục được chủ repo duyệt.
- Mọi thay đổi chỉ nằm trên branch thử nghiệm cho đến khi **duyệt merge**; rollback bản triển khai tương lai bằng revert các commit kỹ thuật, bảo toàn bài và metadata đã PUBLISHED.
