# Quy trình xuất bản AI WIKI TOTAL — FAST WRITER (hiện hành từ 24/10/2026)

> **Nguồn chuẩn:** [AGENTS.md](../AGENTS.md), [FAST-WRITER-LOOP.md](FAST-WRITER-LOOP.md), `.github/workflows/factory-publish.yml` và `factory/factory.js`. Các mô hình pair-2/cycle 12–18 là **đường legacy/manual recovery**, không còn là publisher mặc định. Site đích là GitHub Pages `https://wiki.thuexemaynguyentu.com/`, không phải WordPress.

## 1. Writer bên ngoài, không phải Actions sinh văn bản

Claude/Mistral/ChatGPT phiên đang chạy:

1. `git fetch origin main && git rebase origin/main`.
2. `node factory/factory.js writer-pack --count 10 --json`. Có thể dùng `--shard 1/3`, `2/3`, `3/3` cho phiên độc lập, nhưng shard **không phải khóa** và slot đang dở có thể trùng giữa pack. Rà lại ID/slug trước khi viết.
3. Với 300 slot `PLANNED` legacy hiện có: `mode=off`, `requireApproved=false`, nên **không cần topic-approve hoặc người duyệt từng bài**. Tuy nhiên nhiều chủ đề V1 là hoán vị/trùng intent; writer phải đọc bài PUBLISHED gần nhất và chỉ viết bài có thông tin mới thật.
4. Viết tối đa 10 module mới trong `factory/data/articles/<slug>.js`, đúng slot/hub/canonical, 1.000–5.000 từ, ≥4 H2, ≥2 links PUBLISHED, không bịa dữ kiện. `verify-batch "Sxxxxx,Syyyyy"` phải PASS; QA >=70 và 7 critical gates được giữ.
5. Chỉ `git add` file mình làm, commit và push. Nếu một writer, có thể dùng `writer-heartbeat`; nếu W1/W2/W3 đồng thời, **không cùng chỉnh/push heartbeat chung**. Không force push, không sửa ma trận/transaction/HTML sinh bằng tay.
6. Còn phiên và quota thì fetch/rebase rồi lấy batch kế, không phải chờ full-site audit. GitHub Actions không gọi AI viết hay đánh thức phiên kết thúc.

## 2. Publisher duy nhất — `.github/workflows/factory-publish.yml`

Trigger:
- **push vào `main`** có module bài `factory/data/articles/**` thay đổi: lấy **exact push scope** (tối đa 10 ID/push).
- **schedule `17,47 * * * *`** hoặc `workflow_dispatch`: trên latest main, lấy tối đa 10 ID **đã có module bài nhưng chưa publish** qua `plan-chunk --limit 10`, phục hồi push bị bỏ lỡ. Không có module chờ → xanh/no-op; không tự viết.
- `github-actions[bot]` push không được dùng để kích vòng lặp tự gọi Actions; lịch fallback giúp thu hồi backlog. Lịch cron có thể trễ theo GitHub.

Một transaction: fresh main → `recover-txn` → `check-state` → `verify-batch` (scoped) → `publish-batch` (1–10 ID) → kiểm internal link 404 → `index-refresh` / `index-check` → commit/push một lần. Một article có QA không đạt thì repair; không báo xuất bản thành công khi chưa có commit + HTML + sitemap hợp lệ.

**Chỉ một publisher** được ghi `matrix.json`, checkpoint, manifest, HTML/site; concurrency group `total-production` dùng chung coordinator, không cancel-in-progress. Không cần writer cầm lock thủ công nhưng **không được bỏ lock giao dịch nội bộ**.

## 3. Coordinator và watchdog

`factory-coordinator.yml` có lịch khoảng 10 phút: fetch main → recover/check-state/topic-check → `queue-refill` → production-status → commit nếu có diff. Hiện `v1Generation=frozen` nên **queue-refill là no-op**, không tự sinh topic và không publish bài.

`factory-liveness.yml` chạy read-only theo giờ; có thể phát hiện writer đứng hoặc lỗi escalated nhưng không tự khởi chạy Claude/Mistral.

`article-quality.yml` chạy heavy engine gate trên thay đổi engine/workflow/test, **không phải bước QA bắt buộc sau mỗi bài content**. `factory-deep-audit.yml` là manual-only cho kiểm tra toàn site; không cản batch hằng ngày.

## 4. Nguồn topic và giới hạn FAST MODE

- Tắt **duyệt bắt buộc** cho slot PLANNED legacy: `factory/topic-governance.json` hiện `mode=off`, `requireApproved=false`.
- Giữ `v1Generation=frozen`: tránh auto refill những tiêu đề khác vỏ cùng intent; 300 slot cũ **không đồng nghĩa 300 bài nên publish**.
- **Topic mới ngoài các slot hiện có:** engine vẫn yêu cầu coordinator đi qua `topic-propose` / `topic-approve` để tạo slot (có thể AI coordinator thực hiện thay người dùng, nhưng phải có bằng chứng và so trùng). Chưa có workflow "AI tự nghĩ topic mới vô hạn". Không đổi `matrix.json` bằng tay.

## 5. Khi lỗi và manual recovery

- QA/404 lỗi: xem job publisher, sửa đúng module ID lỗi, chạy lại `verify-batch`, push. Không giảm QA hoặc tắt link gate.
- Publisher push bị lỡ: cron 30 phút hoặc workflow dispatch sẽ **thử lại các article-backed IDs**; có thể vẫn cần xử lý lỗi code/content.
- Dữ liệu `PUBLISHED`/checkpoint/transaction lệch: dùng `recover-txn`, `check-state`, `resume`; không force push/reset ID hoặc unlock force khi chưa xác minh an toàn.
- `publish-pair`, `verify-pair`, `cycle-plan/cycle-qa/cycle-publish` chỉ cho recovery/fixture compatibility, không phải quy trình batch 10.

Sau commit phải xác minh `PUBLISHED`, HTML sinh, sitemap và GitHub Pages deploy. Workflow xanh/no-op không có nghĩa có bài mới nếu writer chưa nộp module.
