# AI WIKI TOTAL — 3 external AI Writers + 1 GitHub publisher

**Source of truth:** `AGENTS.md`, Topic Factory V2, `factory/state/matrix.json` và `docs/THREE-EXTERNAL-WRITERS.md`.

| Thành phần | Trách nhiệm |
|---|---|
| Writer W1 | Nhận ID chia dư 0, viết bài qua AI bên ngoài |
| Writer W2 (Đốc công 2 cũ) | Nhận ID chia dư 1, viết độc lập |
| Writer W3 (Đốc công 3 cũ) | Nhận ID chia dư 2, viết độc lập |
| GitHub Factory Publish Lite | Publisher duy nhất: kiểm tra QA ≥70, SEO, link, cập nhật manifest và sinh HTML |
| GitHub Coordinator | Chỉ maintenance / check-state, không gọi AI |

Mỗi phiên dùng worktree riêng và `node factory/factory.js writer-pack --writer Wn --count 10`, sau đó `writer-verify --writer Wn`. Mọi file bài được ghi vào đường dẫn đúng theo slot, có `writerOwner: 'Wn'`.

Publisher nhận event push article, cập nhật `main`, chọn bài đã nộp và qua QA, publish serial tối đa 3×10 trong một run. `total-production` giữ lock độc quyền giữa Publisher và Coordinator. Fail-closed khi có lỗi nguồn/hub/QA; bài Writer khác hợp lệ không bị mất. Chỉ Publisher được chỉnh matrix/state/sitemap; Writer không đụng shared state hoặc URL/SEO.

Không API AI, không mã nguồn mở LLM, không tự sinh bài bằng workflow. Giữ Topic V2 approval, nguyên tắc noindex, canonical, QA hiện có. Watchdog hiển thị heartbeat từng Writer. Nếu Writer mất kết nối: không chiếm shard tự động.

**Khả năng mở rộng:** Ba Writer xử lý độc lập nhưng tốc độ website vẫn do một publisher kiểm soát. Chưa bao giờ cam kết không có lỗi hạ tầng; lệnh có fail-closed, retry và rollback.

Chi tiết: [THREE-EXTERNAL-WRITERS.md](THREE-EXTERNAL-WRITERS.md).
