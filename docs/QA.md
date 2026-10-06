# QA — MINIMAL PRODUCTION QA GATE

QA chỉ nhằm **ngăn bài rác/lỗi nguy hiểm** — không phải full-site SEO audit.
Writer viết nhanh → scoped QA bài mới → PASS → coordinator publish.

## Điểm và ngưỡng (policy mới)
- Thang 100. **Score 70–100 = PASS. Score < 70 = FAIL/REPAIR** (chuyển repair queue).
- **Không REVIEW. Không EXCELLENT. Không warning score band. Không yêu cầu 75/90/100.**
- **Bài ≥ 70 KHÔNG được sửa chỉ để tăng điểm.**
- Mỗi warning (check không critical rơi) trừ 5 điểm: `score = 100 − 5 × warningFail`; đủ warning thì điểm tụt dưới 70 và bài mới FAIL.
- Bất kỳ critical gate nào rơi → FAIL bất kể điểm (critical override).
- Chạy: `node factory/factory.js qa <slot-id>`; audit toàn bộ (manual-only): `node factory/factory.js audit --min-score 70`.

## 7 CRITICAL GATE (rơi là FAIL)
1. **not-empty** — bài rỗng/cụt nghiêm trọng: mất cấu trúc hoặc < 1.600 từ.
2. **dup-id** — duplicate article ID (trùng ID slot/manifest đã có).
3. **dup-slug** — duplicate slug (trùng slug slot/manifest đã có).
4. **canonical** — duplicate/sai canonical: slug bẩn hoặc lệch hub/slug với slot.
5. **render-ok** — HTML/frontmatter hỏng khiến trang không render + ký tự rác CJK/Cyrillic/Hangul.
6. **business** — sai giá/policy kinh doanh đã xác minh: bịa giá thuê, bịa địa chỉ, nhồi Zalo/hotline.
7. **links-ok** — broken link nghiêm trọng làm build/deploy fail (related trỏ slug không tồn tại, related < 2).

## Warning (chỉ −5 điểm, KHÔNG chặn một mình)
W1 seoTitle 25–70 ký tự · W2 meta 100–165 ký tự · W3 keyPoints ≥ 4 · W4 checklist ≥ 3 · W5 cảnh báo ≥ 2 · W6 nguồn tham khảo ≥ 2 · W7 lưu ý miễn trừ ≥ 1 · W8 ngày hợp lệ (YYYY-MM-DD) · W9 schema cơ bản (entities ≥ 2, keywords ≥ 3).

Mọi lỗi SEO nhẹ khác **chỉ ghi warning — KHÔNG chặn publish**.

## SCOPED QA — chỉ bài mới của cycle
- QA **chỉ** các bài mới của pair/cycle hiện tại: `publish-pair <ID,ID>` (hot path, 2 bài) hoặc `cycle-qa <ID,ID,...>` (legacy, 12–18 bài) — `node factory/factory.js`.
- **Tuyệt đối không quét lại toàn site trong production loop.**
- **Không re-audit bài đã PUBLISHED** (cycle-qa tự skip).
- **Một bài FAIL không giữ cycle**: bài FAIL → repair queue, các bài PASS tiếp tục publish (`cycle-publish` defer REPAIR, chỉ publish PASS).

## SEO giờ là ADVISORY (KHÔNG chặn publish)
- `factory/seo.js` chấm SEO thang 100 để cảnh báo/huấn luyện writer (`qa-preview <id>` in cả QA + SEO).
- Điểm SEO được ghi lại theo dõi; dưới 70 chỉ in `PAIR_ADVISORY`/`SEO_ADVISORY` — **không chặn publish**. Intent rỗng/trùng cũng chỉ `INTENT_WARNING`/`PAIR_ADVISORY`.

## Repair queue
QA FAIL → slot state `REPAIR` → writer sửa bài → chạy lại QA (hoặc cycle sau chấm lại). Nhiều lần không đạt (lệnh `qa` cũ) → BLOCKED cần người rà. Production loop KHÔNG vì một bài FAIL mà dừng cả cycle.

## Full-site audit = MANUAL-ONLY
`audit --min-score 70` rà mọi bài PUBLISHED nhưng **KHÔNG thuộc production loop** — chỉ chạy khi owner bấm `factory-deep-audit.yml` (workflow_dispatch) hoặc khi engine đổi (ENGINE_CHANGE heavy gate trên CI).

## QA bài KHÔNG thay thế factory reliability tests
Sự ổn định của xưởng (lock, txn recovery, bất biến production) nằm ở bộ test: `test.js`, `test-hardening.js`, `test-reliability.js`, `test-pair.js`, `test-cycle.js` — xem `docs/FACTORY-RELIABILITY.md`.
