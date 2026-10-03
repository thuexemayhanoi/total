# Quy trình xuất bản — PRODUCTION CYCLE + PAIR

## Production loop (vòng cycle)
```
auto-refill queue (queue-refill, planned < 100 → refill ~300 topic)
→ cycle-plan: allocate 12–18 bài
→ chia cho 3 writer (writer CHỈ viết)
→ cycle-qa: scoped minimal QA (chỉ bài mới của cycle, KHÔNG quét toàn site)
→ PASS ≥ 70 (FAIL → repair queue, KHÔNG giữ cycle)
→ cycle-publish: COORDINATOR duy nhất merge + build/deploy ĐÚNG 1 LẦN
→ mark PUBLISHED → cycle mới
```
- **Coordinator là thành phần duy nhất** được claim ID, đổi state, merge, publish, deploy.
- **Writer tuyệt đối không sửa** global state/matrix/txn/publish — chỉ nộp module bài vào `factory/data/articles/`.
- Slot PLANNED chưa có module bài = `WAITING_FOR_WRITER` — không phải lỗi.
- Lỗi nhỏ tự repair/retry; chỉ dừng khi lỗi lớn không recover, hết topic hợp lệ, hết quota/runtime, hoặc owner ra lệnh dừng.

### Lệnh cycle (`node factory/factory.js`)
- `queue-refill [--role coordinator]` — planned < 100 (QUEUE_REFILL_FLOOR) → refill lên ~300 (QUEUE_REFILL_TARGET) slot PLANNED từ `factory/data/topic-pool.js` (intent mặc định `informational/<slug>`; chỉ coordinator).
- `cycle-plan` — kế hoạch cycle hiện tại (read-only): 12–18 slot PLANNED theo ID tăng dần, `writers=3`, hint refill khi planned < 100.
- `cycle-qa <ID,ID,...>` (1–18 ID) — scoped minimal QA chỉ bài mới của cycle; PASS → state PASS, FAIL → REPAIR queue; skip bài đã PUBLISHED.
- `cycle-publish <ID,ID,...> [--owner coordinator]` — chỉ publish slot PASS, defer slot REPAIR (không giữ cycle); txn atomic + `generate` **đúng 1 lần** cho cả cycle → verify → lật PUBLISHED → COMMIT.

## Xuất bản pair (hot path commit-based, SIMPLE PRODUCTION MODE)
1. Writer viết ĐÚNG 2 bài (PAIR_SIZE = 2): module trong `factory/data/articles/` + slot trong ma trận, `verify-sources <ID,ID>` đạt (QA minimal ≥ 70 chặn; SEO/intent chỉ advisory) rồi push lên `main`.
2. Workflow `factory-publish.yml` tự chạy: recover txn nếu sót → `push-scope` (EXACT IDs của commit) → `check-state` guard → `publish-pair <ids>`: lock → scoped QA minimal → FAIL vào repair queue (bài PASS của pair vẫn publish) → generate → verify-pair → lật đúng rows → COMMIT txn → commit derived state.
3. Cổng cuối: `check-state` + `backlog --fail-if-claimable` + `generate --check`.

## CI theo change-mode (article-quality.yml)
- `change-mode` → **CONTENT_ONLY**: chỉ `verify-sources` scoped các bài của commit (QA minimal chặn; SEO advisory).
- **ENGINE_CHANGE** (engine/test/workflow đổi): heavy gate — full test suites + `verify-invariant` + `generate --check`.
- **Full-site audit KHÔNG thuộc production loop**: `factory-deep-audit.yml` chỉ chạy khi owner bấm Run workflow (workflow_dispatch) — manifest-sync + index-rebuild/index-check + `audit --min-score 70` + full suites.

## Trình tự thủ công (dự phòng)
1. Viết bài (module trong `factory/data/articles/`).
2. `node factory/factory.js qa-preview <slot-id>` — QA thử + SEO thử (advisory), read-only.
3. `node factory/factory.js verify-sources <ID,ID>` — rà source đúng pair.
4. `node factory/factory.js cycle-publish <IDs>` (cycle) hoặc `publish-pair <ID,ID>` (pair).
5. `node factory/generate.js --check` — xác nhận không patch tay HTML.
6. `node factory/factory.js verify-invariant` + `backlog --fail-if-claimable`.
7. Full gate (`test.js` + `test-hardening.js` + `test-reliability.js` + `test-pair.js` + `test-cycle.js`) chỉ bắt buộc khi đổi engine/workflow.
8. Commit và push lên `main` — KHÔNG force push.

## Quy tắc
- Draft không được deploy: chỉ publish bài PASS minimal gate (≥ 70, không critical).
- Bài ≥ 70 không sửa chỉ để tăng điểm; SEO/intent chỉ advisory.
- Một writer tại một thời điểm (writer lock ownership-safe).
- Publish theo explicit IDs (pair ≤ 2, cycle ≤ 18 mỗi txn) — không bao giờ sweep mọi slot PASS.
- WAITING_FOR_WRITER không bao giờ vào publish plan.
- Sau push, xác minh các trang live trả HTTP 200.
