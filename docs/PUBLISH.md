# Quy trình xuất bản

## Xuất bản tự động (SIMPLE PRODUCTION MODE — pair, port /vanchinh)
1. Writer ngoài viết **ĐÚNG 2 bài** (PAIR_SIZE = 2) mỗi vòng: module trong `factory/data/articles/` + slot tương ứng trong ma trận, `verify-sources` scoped đạt (QA ≥ 75, SEO ≥ 70, intent sạch) rồi push lên nhánh `main`.
2. Workflow `Factory Publish (pair)` tự chạy: đọc state → recover txn nếu sót → xác định **EXACT push scope** (`push-scope`: đúng article IDs được ADD/MODIFY bởi commit đó) → `publish-plan` (resume backlog article-backed cũ TRƯỚC, scope pair SAU; mỗi txn đúng 2 ID) → từng txn `publish-pair <ids>`: lock → scoped QA + SEO → sinh site → `verify-pair` nhẹ → lật đúng rows PUBLISHED → COMMIT txn (atomic) → commit "factory: publish pair <ids>" + push.
   - **KHÔNG sweep slot khác**, không tự claim 10 bài khác — publisher xử lý đúng IDs của commit.
   - QA < 75 hoặc SEO < 70 → REPAIR: sửa bài rồi push lại; pipeline chỉ xử lý đúng IDs được sửa (mode repair: chấm lại + sinh lại trang, không lật state).
   - Fail giữa chừng → KHÔNG ghi state dở (txn marker recover-txn: ids đã PUBLISHED → completed, ngược lại → rolled-back); chạy lại resume đúng pair.
3. Cổng cuối nhẹ: `check-state` + `backlog --fail-if-claimable` + `generate --check`. **Mốc 100 PUBLISHED**: heavy gate (audit ≥ 75, `verify-invariant`, toàn bộ test suite) tự chạy thêm trong cùng workflow.
4. Sau publish, `factory-publish-verify` (read-only, light) verify: state sạch, không patch tay HTML, bất biến PUBLISHED ↔ trang sinh ↔ sitemap, backlog claimable = 0.
5. Heavy gate đầy đủ (audit + hardening + reliability + pair + invariant) chạy tại `factory-deep-audit.yml` (workflow_dispatch) và khi engine/workflow đổi — KHÔNG chạy mỗi pair.

Quy trình thủ công dưới đây là đường dự phòng khi pipeline không dùng được.

## Trình tự (thủ công)
1. Viết xong bài (module trong `factory/data/articles/`).
2. `node factory/factory.js qa-preview <slot-id>` — QA thử + SEO thử, đạt QA ≥ 75 / SEO ≥ 70.
3. `node factory/factory.js verify-sources <ID,ID>` — rà source đúng pair (read-only).
4. `node factory/factory.js publish-pair <ID,ID>` — publish đúng pair (tối đa 2 ID; lệnh tự sinh lại site + verify-pair, chỉ ghi state khi mọi cổng xanh). Lệnh legacy `publish <ID>...` (≤ 10 ID) và `drain-iteration` giữ làm manual recovery.
5. `node factory/generate.js --check` — xác nhận không patch tay HTML.
6. `node factory/factory.js verify-pair <ID,ID>` — light verify chỉ pair.
7. `node factory/factory.js verify-invariant` + `node factory/factory.js backlog --fail-if-claimable --head-sha "$(git rev-parse HEAD)"`.
8. Full gate (`test.js` + `test-hardening.js` + `test-reliability.js` + `test-pair.js`) chỉ bắt buộc khi đổi engine/workflow.
9. Commit và push lên nhánh `main` — GitHub Pages triển khai từ gốc nhánh main.

## Quy tắc
- Draft không được deploy: chỉ commit khi QA ≥ 75 và SEO ≥ 70.
- Một writer tại một thời điểm (writer lock ownership-safe: unlock cần --owner + --token của chính acquisition; xem docs/RECOVERY.md).
- Publish luôn theo explicit IDs, tối đa 2 ID mỗi transaction (PAIR_SIZE) — không bao giờ sweep mọi slot PASS.
- WAITING_FOR_WRITER (PLANNED chưa có bài) không bao giờ vào publish plan.
- Sau push, xác minh các trang live trả HTTP 200.
