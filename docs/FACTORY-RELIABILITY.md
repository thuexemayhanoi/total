# Factory Reliability — Hợp đồng kiểm thử 4 tầng

Tài liệu chính thức cho chuẩn kiểm thử của content factory. Mọi thay đổi `factory/**` hoặc `.github/workflows/**` liên quan production pipeline **phải** giữ xanh đủ 4 tầng dưới đây. Canonical agent instruction là `AGENTS.md`; tài liệu này chỉ mô tả hợp đồng reliability, không duplicate toàn bộ quy trình vận hành.

## Nguyên tắc: "green means progress"

Một CI run SUCCESS với backlog article-backed claimable > 0 là **defect**, không phải thành công. Workflow publish chỉ được SUCCESS khi cuối run:

- writer lock sạch (run đã release đúng lock của chính mình),
- article-backed claimable backlog == 0,
- production invariant (`factory.js verify-invariant`) PASS,
- `generate.js --check`, `audit --min-score 70`, `test.js`, `test-hardening.js`, `test-reliability.js`, `test-pair.js`, `test-cycle.js` đều xanh.

SIMPLE PRODUCTION MODE (pair + cycle): hot path của writer/publisher là `publish-pair` (đúng PAIR_SIZE = 2 ID, exact push scope, scoped QA MINIMAL gate >= 70 — SEO/intent advisory, txn atomic resumable) và `cycle-qa`/`cycle-publish` (12–18 bài/cycle, scoped QA chỉ bài mới, FAIL → repair queue không giữ cycle). Heavy gate KHÔNG chạy mỗi pair/cycle — chỉ khi engine/workflow đổi (CI ENGINE_CHANGE) hoặc owner chủ động chạy `factory-deep-audit.yml` (workflow_dispatch, MANUAL-ONLY).

PLANNED chưa có article module KHÔNG phải backlog claimable — đó là `WAITING_FOR_WRITER`, không làm CI fail.

## Bốn tầng

### Layer 1 — Unit
Hàm thuần, không đụng production state. Bao phủ trong `factory/test-reliability.js`:
- exclusive lock acquire (atomic, exactly-one-winner khi nhiều process cùng acquire),
- ownership token + refuse unlock sai owner (`ELOCKREFUSE`),
- phân loại stale lock (TTL 30 phút, KHÔNG có daemon tự xóa — chỉ reclaim khi code kiểm lock theo contract, có reclaim-mutex race-safe),
- `selectChunk()` ≤ 10 ID (chunk đầu ≤ 5 khi published = 0),
- `maxIterations()` tính từ workload thực (`ceil(claimable / limit) + 2`), không hard-code,
- `findClaimableBacklog()`, `computeProgress()` / `assertProgress()` (NO_PROGRESS fail loud),
- `checkProductionInvariant()` helpers,
- publish theo explicit IDs.

### Layer 2 — Integration
Fixture temp (copy repo ra tmp, KHÔNG production state). 25 article-backed slot hợp lệ → drain 3 chunk liên tiếp trong MỘT run, không cần push thứ hai, không sweep slot PASS ngoài chunk. Cùng với fault injection: QA fail, publish fail, generator fail, module syntax error, wrong lock owner, stale lock.

### Layer 3 — Production invariant
Fixture gần production thật. Sau SUCCESS: backlog claimable = 0; PUBLISHED ↔ article source ↔ generated HTML ↔ sitemap-articles khớp 1-1; QA ≥ 70; `checkpoint.slotCount == matrix.slots.length`; không lock; không state hỏng. Có **regression sentinel**: test phải FAIL nếu code quay lại hành vi "process 1 chunk → exit success → backlog vẫn > 0".

### Layer 4 — Long-run / Failure recovery
Soak fixture temp ≥ 35 article-backed slot (> 3 chunk). Fault injection: push fail giữa run, generator fail, test fail, concurrent acquire, wrong-owner cleanup, resume sau gián đoạn. Sau recover: không restart, không duplicate ID, không renumber, không lock leak, không half-written JSON; state resumable đúng chỗ.

## CLI hỗ trợ (định nghĩa trong `factory/factory.js`)

- `node factory/factory.js lock <owner>` — acquire lock atomically; in `WRITER_LOCK_TOKEN=` để run giữ lại.
- `node factory/factory.js unlock --owner O --token T` — chỉ xóa lock khi owner+token khớp; sai owner → REFUSE, exit non-zero. `unlock --force` chỉ dành recovery thủ công sau khi xác minh owner không còn sống; workflow không bao giờ gọi tự động.
- `node factory/factory.js backlog [--fail-if-claimable] [--head-sha S]` — in `CLAIMABLE_BACKLOG=`, `WAITING_FOR_WRITER=`, `PENDING <id> state= article=yes|no`; exit 1 nếu `--fail-if-claimable` mà claimable > 0.
- `node factory/factory.js check-state` — validate state files, exit non-zero nếu hỏng.
- `node factory/factory.js plan-chunk [--limit N]` — chọn chunk cho writer.
- `node factory/factory.js verify-invariant` — kiểm toàn bộ production invariant cuối run.
- `node factory/factory.js drain-bound <claimable>` — in `MAX_ITERATIONS=` giới hạn vòng lặp drain.
- `node factory/factory.js drain-iteration [--owner O] [--token-file F]` — một vòng READ STATE → acquire lock → chunk ≤ 10 → QA → publish explicit IDs → release own lock → assertProgress; in `DRAIN_RESULT done= published= backlog= waiting=`.
- `node factory/factory.js qa-preview <id>` — chạy QA một slot không đổi state.

Logic production nằm trong `factory/lib/lock.js` và `factory/lib/factory-runtime.js` (hàm thuần, test được); workflow YAML chỉ orchestration.

## Continuous backlog drain

`factory-publish.yml` (pair) xử lý EXACT push scope: `push-scope` → `publish-pair` đúng IDs của commit (txn atomic, commit derived state, retry ≤ 3), KHÔNG sweep slot khác. KHÔNG dựa vào bot-commit tự trigger workflow kế tiếp (GITHUB_TOKEN không đảm bảo self-trigger). Cổng cuối `backlog --fail-if-claimable` fail nếu publish vừa SUCCESS mà claimable backlog > 0. Full-site audit là `factory-deep-audit.yml` MANUAL-ONLY (workflow_dispatch) — KHÔNG thuộc production loop.

## Chạy

```
node factory/test.js              # nền tảng (Layer 1 cơ bản + UI/UX regression)
node factory/test-hardening.js   # hardening regression
node factory/test-reliability.js  # 4 tầng reliability (L1–L4)
node factory/test-pair.js     # pair mode (PAIR_SIZE/exact scope/txn recovery)
node factory/test-cycle.js    # production cycle (12-18 bài, scoped QA, refill, defer REPAIR)
```

Cả năm được CI chạy khi ENGINE_CHANGE (article-quality.yml) và trong deep audit manual. CONTENT_ONLY push chỉ chạy gate nhẹ (`verify-sources` đúng EXACT IDs). Không xóa test cũ để lấy màu xanh.
