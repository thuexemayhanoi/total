# Factory Reliability — Hợp đồng kiểm thử 4 tầng

Tài liệu chính thức cho chuẩn kiểm thử của content factory. Mọi thay đổi `factory/**` hoặc `.github/workflows/**` liên quan production pipeline **phải** giữ xanh đủ 4 tầng dưới đây. Canonical agent instruction là `AGENTS.md`; tài liệu này chỉ mô tả hợp đồng reliability, không duplicate toàn bộ quy trình vận hành.

## Nguyên tắc: "green means progress"

**Hợp đồng hiện hành (24/10/2026):** FAST writer → publisher xử lý batch 1–10. Một run SUCCESS khi **batch do run nhận** đã qua QA/404/state guard, transaction sạch, commit/push thành công (hoặc no-op vì không có article-backed backlog); **không có nghĩa tất cả các slot PLANNED đã có bài**, cũng không có nghĩa đã viết mới. Lịch fallback 30 phút sẽ tiếp tục nhận tối đa 10 article-backed IDs/run. Các lệnh kiểm toàn site (`verify-invariant`, `generate --check`, `audit --min-score 70`, regression suites) chạy trên engine gate hoặc manual deep audit, **không nằm trong đường nóng mỗi batch**.

**Legacy fixtures:** Các test cũ pair-2/cycle 12–18/continuous-drain vẫn tồn tại để phát hiện regression và lỗi transaction; chúng không định nghĩa batch size của workflow hiện tại. Đừng sửa assert để lấy màu xanh. **GitHub Actions không khởi tạo AI writer.**

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
- publish theo explicit IDs; hot path 1–10/batch, legacy pair/cycle vẫn có test.

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

## Backlog recovery của publisher hiện hành

`factory-publish.yml` chạy theo push article (lấy exact IDs) hoặc cron fallback `17,47 * * * *` / dispatch. Trên cron/no-scope, sau khi fetch fresh main, dùng `plan-chunk --limit 10` để chọn tối đa 10 ID có module bài và chưa PUBLISHED. Với nhiều hơn 10 ID, run kết thúc sau một transaction có thể còn backlog, các cron sau tiếp tục xử lý. Một run không có ID là no-op thành công; không hề chứng minh writer đã hoạt động. Publisher giữ mutex/concurrency và QA/404/commit safeguards; full-site audit là `factory-deep-audit.yml` MANUAL-ONLY.

## Chạy

```
node factory/test.js              # nền tảng (Layer 1 cơ bản + UI/UX regression)
node factory/test-hardening.js   # hardening regression
node factory/test-reliability.js  # 4 tầng reliability (L1–L4)
node factory/test-pair.js     # pair mode (PAIR_SIZE/exact scope/txn recovery)
node factory/test-cycle.js    # production cycle (12-18 bài, scoped QA, refill, defer REPAIR)
```

Đây là bộ regression nặng khi engine/workflow/test thay đổi hoặc trong deep audit thủ công; content-only push dùng scoped `verify-batch` tại publisher. **Lưu ý:** lần kiểm gần đây `test-topic-v2.js` còn lỗi coverage 4/6 và chưa có xác nhận engine gate xanh; phải sửa nguyên nhân phân loại khi xử lý engine, không xóa test/giảm chuẩn để lấy màu xanh.
