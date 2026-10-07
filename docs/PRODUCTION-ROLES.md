# Production roles — FACTORY LITE BATCH

`/total` dùng mô hình Writer ngoài + GitHub publisher, tối ưu cho quy mô lớn (capacity hiện tại 20.000).

## Hot loop

Writer:

1. fetch fresh `main`;
2. `node factory/factory.js writer-next --count 10`;
3. viết 1–10 article modules thật trong `factory/data/articles/`;
4. `node factory/factory.js verify-batch ID1,ID2,...`;
5. push batch;
6. **không cần chờ để viết tiếp trong tư duy/session**; sau khi batch trước được publisher xử lý, fetch fresh main và lấy batch kế.

Publisher `.github/workflows/factory-publish.yml`:

exact push scope → fresh main → recover/check-state → verify-batch → **publish-batch 1–10 một lần** → scoped 404 link gate → commit/push một lần.

Không còn chia queue 10 bài thành 5 pair trong hot path. `publish-pair` vẫn giữ lại làm recovery/repair compatibility.

## QA hot path

Mỗi bài vẫn giữ minimal gate hiện có:

- cấu trúc + tối thiểu 1.600 từ;
- không trùng ID/slug;
- canonical đúng slot;
- render sạch;
- không bịa business facts;
- related links hợp lệ;
- QA >= 70; SEO advisory.

Thêm **internal link integrity fail-closed** sau render. Mọi href nội bộ trên trang vừa sinh phải resolve tới file thật dưới project path `/total/`. Link nội bộ dẫn tới 404 hoặc thoát sai project base làm batch fail trước khi ghi PUBLISHED.

Checker hot path chỉ quét 1–10 trang mới, nên không biến mỗi batch thành full-site scan. Deep audit có `link-integrity --all` để rà toàn site khi chủ động chạy.

## Heavy work tách khỏi hot loop

`article-quality.yml` chỉ chạy khi engine/template/workflow/test thay đổi. Article content push không chạy thêm một pipeline QA trùng lặp.

`factory-coordinator.yml` chỉ làm maintenance nhẹ: recover/state guard → queue refill → production status. Không manifest rebuild / invariant full-site mỗi 10 phút.

`factory-deep-audit.yml` là manual-only và chịu trách nhiệm full suites, manifest/index rebuild, invariant, byte-exact generate check và full-site link integrity.

## 20k scale

Matrix hiện có logical capacity 20.000; không reset ID, slug hay bài đã PUBLISHED. Hot path luôn bounded 10 bài/batch và scoped QA/link check. Full-site O(N) work không nằm trong mỗi article push.

Nguồn topic vẫn là giới hạn độc lập: capacity 20.000 không tự sinh 20.000 chủ đề. Queue-refill chỉ dùng topic hợp lệ sẵn có; không bịa topic để lấp số lượng.

## Recovery

Mất session: fetch fresh main → recover-txn → writer-next. Không force push, không reset matrix, không tái sử dụng ID/slug, không bypass QA.

GitHub Actions không tự viết prose và không thể đánh thức một Mistral session đã chết; writer vẫn là phiên AI ngoài.


## Mistral one-command writer

Mistral nên bắt đầu mỗi vòng bằng:

`node factory/factory.js writer-pack --count 10`

Runbook đầy đủ: `docs/MISTRAL-WRITER.md`.

Không tự chọn ID, không tự bịa internal-link slug. `writer-pack` trả file path, intent và related PUBLISHED; `verify-batch` + Factory Publish Lite chịu trách nhiệm QA/publish/404 gate.
