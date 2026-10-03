# Quy trình xuất bản — PRODUCTION COORDINATOR + CYCLE + PAIR

## Production coordinator (factory-coordinator.yml — tự động)
Workflow `factory-coordinator.yml` là **watchdog tick** chạy mỗi 10 phút
(`cron: 7,17,27,37,47,57 * * * *` + `workflow_dispatch`; concurrency group
`total-production`, `cancel-in-progress: false` — dùng CHUNG group với
`factory-publish.yml` nên coordinator và publisher KHÔNG BAO GIỜ chạy đè nhau).
Mỗi run BOUNDED — đúng một lượt tick rồi thoát, KHÔNG while-true:

```
recover-txn → resume + check-state → queue-refill (idempotent) → cycle-plan
→ không workload: exit 0 → cycle-qa scoped → cycle-publish chỉ slot PASS
(FAIL đã ở repair queue, build/deploy đúng 1 lần) → manifest-sync →
check-state + verify-invariant + backlog → commit derived state (retry ≤ 3)
```

- Crash giữa tick: run sau `recover-txn` + resume (slot PASS có bài được
  cycle-plan xếp RESUME ưu tiên) — không mất backlog, không publish trùng.
- Push bằng GITHUB_TOKEN KHÔNG trigger workflow kế tiếp — schedule là cơ chế
  đánh thức chính, KHÔNG đệ quy.
- Writer là **external** (session Mistral ngoài): Actions KHÔNG tự viết prose,
  KHÔNG tạo fake article. Coordinator allocate `CYCLE_ALLOCATE writer-a/b/c`
  trong `cycle-plan`; writer đọc allocation từ repo, viết module bài vào
  `factory/data/articles/` rồi push main → `factory-publish.yml` publish exact
  push scope, tick sau cycle-qa/cycle-publish gom nốt. Phần integration còn
  thiếu để chạy 100% tay: runner/model tự viết bài trong Actions (self-hosted
  runner + API) — hiện writer phải là session AI ngoài.

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
- **ENGINE_CHANGE** (engine/test/workflow đổi): heavy gate — full test suites (gồm `test-cycle.js` + `test-coordinator.js`) + `verify-invariant` + `generate --check`.
- **Full-site audit KHÔNG thuộc production loop**: `factory-deep-audit.yml` chỉ chạy khi owner bấm Run workflow (workflow_dispatch) — manifest-sync + index-rebuild/index-check + `audit --min-score 70` + full suites.
- Bài draft (REPAIR/WAITING_FOR_WRITER/PLANNED) KHÔNG render trang, KHÔNG vào sitemap/search/chatbot — `generate.js` chỉ render slot PUBLISHED (+ scope publish hiện tại).

## Trình tự thủ công (dự phòng)
1. Viết bài (module trong `factory/data/articles/`).
2. `node factory/factory.js qa-preview <slot-id>` — QA thử + SEO thử (advisory), read-only.
3. `node factory/factory.js verify-sources <ID,ID>` — rà source đúng pair.
4. `node factory/factory.js cycle-publish <IDs>` (cycle) hoặc `publish-pair <ID,ID>` (pair).
5. `node factory/generate.js --check` — xác nhận không patch tay HTML.
6. `node factory/factory.js verify-invariant` + `backlog --fail-if-claimable`.
7. Full gate (`test.js` + `test-hardening.js` + `test-reliability.js` + `test-pair.js` + `test-cycle.js` + `test-coordinator.js`) chỉ bắt buộc khi đổi engine/workflow.
8. Commit và push lên `main` — KHÔNG force push.

## Quy tắc
- Draft không được deploy: chỉ publish bài PASS minimal gate (≥ 70, không critical).
- Bài ≥ 70 không sửa chỉ để tăng điểm; SEO/intent chỉ advisory.
- Một writer tại một thời điểm (writer lock ownership-safe).
- Publish theo explicit IDs (pair ≤ 2, cycle ≤ 18 mỗi txn) — không bao giờ sweep mọi slot PASS.
- WAITING_FOR_WRITER không bao giờ vào publish plan.
- Sau push, xác minh các trang live trả HTTP 200.
