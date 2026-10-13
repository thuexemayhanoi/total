# Topic Factory V2 — quản trị topic theo giá trị, không theo số lượng

> Trạng thái: **đã triển khai lớp quản trị an toàn (governance), có công tắc rollback**. Phần cần chủ repo duyệt nằm ở
> [TOPIC-V2-MIGRATION-PLAN.md](TOPIC-V2-MIGRATION-PLAN.md). Bằng chứng đo thật: [TOPIC-AUDIT-2026-10-12.md](TOPIC-AUDIT-2026-10-12.md)
> và [TOPIC-PILOT-V2-REPORT.md](TOPIC-PILOT-V2-REPORT.md).

## 0. Tóm tắt một màn hình

| Câu hỏi | Trả lời |
|---|---|
| V1 hỏng ở đâu? | Sinh topic bằng hoán vị **hạt giống × 12 góc × 6 bối cảnh** (31.896 topic tiềm năng); 300 slot đang chờ chỉ chứa **35 intent thật**. |
| V2 làm gì khác? | Topic phải **đi qua gate** (trùng lặp, bằng chứng, nhu cầu) rồi **người duyệt đọc 5 bài gần nhất** mới thành slot. Writer chỉ nhận slot đã APPROVED. |
| 40.000 bài? | Là **trần năng lực**, không phải chỉ tiêu. Số bài tăng chỉ khi có nhu cầu/thông tin độc lập thật (GSC, site-search, nguồn xác minh). |
| Tắt V2 thế nào? | Sửa `factory/topic-governance.json` thành `{"mode":"off","v1Generation":"allowed"}` (hoặc xóa file). Không mất dữ liệu. |
| Kiểm chứng? | `node factory/test-topic-v2.js` (327 assert, 4 tầng) + `node factory/factory.js topic-check --recheck`. |

## 1. Nguyên tắc (không thương lượng)

1. Không lấy số lượng thay thế giá trị. Một topic mới phải nêu **thông tin độc lập** mà bài hiện có chưa có; nếu không thì *cải thiện bài cũ*.
2. Không tạo nhiều bài cùng intent. Tối đa **1 topic V2 / intent cluster** (`maxPerIntentCluster`).
3. Không dùng hoán vị template làm phương pháp tăng bài. `topic-factory.js` (V1) bị đóng băng (`v1Generation: frozen`).
4. Không bịa nhu cầu tìm kiếm. `demand` chỉ nhận số đo thật (`gsc` / `site-search`) kèm kỳ báo cáo; thiếu → `demand-unverified`, ưu tiên tối đa P1.
5. Không bịa dữ kiện. Chủ đề có luật/giá/thông số/tin mới/địa phương **bắt buộc** có bằng chứng đã xác minh (nhãn + URL + ngày truy xuất), nếu không → `NEEDS-RESEARCH`.
6. Không xóa bài, không đổi URL, không redirect, không đổi kiến trúc nếu chưa được duyệt. Quyết định *gộp* chỉ là **đề xuất bổ sung vào bài đã có**.

## 2. Luồng sản xuất

```
 ý tưởng ──► topic-propose ──► GATE ──► topic-matrix.jsonl  (PLANNED · RESEARCH · REJECTED)
 (GSC, site-search,            │
  hub còn trống,               ▼
  nguồn xác minh)      topic-neighbours  ← người duyệt ĐỌC 5 bài đã xuất bản gần nhất (+H2)
                               │
                               ▼
              topic-approve  (coordinator: --by, --ack <cảnh báo>, --reviewed <5 bài>)
                               │   slot PLANNED (matrix.json) + row APPROVED   [slot trước, row sau — fail-closed]
                               ▼
        writer-pack (CHỈ slot APPROVED + TOPIC_BRIEF/GAIN/OUTLINE/SCOPE) ──► Writer
                               ▼
          verify-batch ──► publish-batch ──► scoped QA ≥ 70 ──► PUBLISHED   (pipeline cũ, không đổi)
```

`matrix.json` vẫn là **sổ cái slot sản xuất** (S-ID, trạng thái, capacity — chủ repo kiểm soát). `topic-matrix.jsonl` là **lớp quản trị**:
topic nào được phép thành slot, vì sao, trùng với gì, bằng chứng gì. Trạng thái thật của một topic đã có slot được **suy ra từ slot**
(`effectiveLifecycle`), không cần đồng bộ thủ công.

## 3. Bản đồ chủ đề (Semantic Topic Universe)

Taxonomy là **cố định** (15 danh mục cha + 97 hub, `factory/data/categories.js`) — V2 không thêm/xóa hub. “Vũ trụ chủ đề” được biểu diễn bằng các trường
của Master Topic Matrix thay vì sinh trước hàng chục nghìn tiêu đề:

| Tầng | Trường / nơi lưu | Ví dụ |
|---|---|---|
| Lĩnh vực | (cố định) thuê xe & dùng xe máy tại Việt Nam | |
| Danh mục cha → Hub | `hub` = `garage/dong-co` (kiểm với taxonomy 97 hub) | |
| Chủ đề con | `subtopic` | hệ thống nhiên liệu |
| Intent tìm kiếm | `intent`: informational · commercial · transactional · navigational · troubleshooting | troubleshooting |
| Cụm intent | `cluster` = intent key (chủ thể × góc topical × địa danh) | `blow+by|` |
| Vấn đề người dùng | `userProblem` (≥ 30 ký tự, vấn đề thật) | “xe hao nhớt, khói thông hơi…” |
| Bài độc lập | `informationGain` + `outline` (≥ 4 H2) + `contentType` + `schemaOrg` | |

Công cụ nhìn bản đồ: `topic-coverage` (read-only) cho **số bài, số intent riêng biệt, tỷ lệ trùng, tỷ lệ tiêu đề template, hàng đợi** theo hub, liệt kê hub
**chưa có bài** và hub **đông + trùng intent**. Trạng thái 2026-10-12 (sau lát cắt đầu, đo bằng tiêu đề công khai): 793 bài / 561 intent riêng biệt trong từng hub; 14/97 hub trống (19 lúc audit đầu); `thue-xe/xe-may`
có 266 bài nhưng chỉ 38 intent (tỷ lệ trùng 7,0; 98% tiêu đề template).

### Nguồn hợp lệ để mở rộng (không phải hoán vị)

1. **Truy vấn Search Console** thật (`topic-import` → lead GAP/NEARBY/COVERED) — nguồn nhu cầu duy nhất được ghi vào `demand`.
2. **Tìm kiếm nội bộ** (site-search) có số liệu và kỳ báo cáo.
3. **Khoảng trống hub** (14 hub chưa có bài) — topic do biên tập đề xuất, vẫn qua gate + đọc láng giềng.
4. **Nguồn đã xác minh**: văn bản pháp luật hiện hành, tài liệu chính hãng, dữ liệu mẫu xe (mỗi mẫu xe có thông số thật là thông tin độc lập) — cần `evidence.status=verified`.
5. **Dữ liệu địa phương đã xác minh** (`evidence.type=local-source`) — địa danh đơn thuần không tạo thông tin mới.

Kỳ vọng thực tế (đo được): trong pilot, **43/100** ý tưởng tự biên tập là độc lập sau hai lượt đọc láng giềng. Với lĩnh vực đã có 793 bài, đạt 40.000 URL
**độc lập** chỉ khả thi nếu có nguồn dữ liệu lớn đã xác minh (mẫu xe, địa phương, văn bản); không khả thi bằng cách nghĩ thêm tiêu đề.

## 4. Master SEO Topic Matrix — `factory/state/topic-matrix.jsonl`

Mỗi dòng một topic (JSON, `schema: 2`). Nguồn sự thật được commit; không có cache nào bắt buộc để đọc.

| Nhóm | Trường |
|---|---|
| Định danh | `topicId` (T000001…), `slotId` (sau khi duyệt), `slug`, `url`, `title` |
| Vị trí | `hub`, `subtopic`, `cluster` |
| Từ khóa & intent | `primaryKeyword`, `secondaryKeywords[]`, `intent`, `userProblem` |
| Giá trị | `informationGain`, `outline[]`, `contentType`, `schemaOrg` |
| Bằng chứng | `evidence{type,status,sources[{label,url,retrievedAt}],verifiedFacts[]}`, `requiresVerifiedData`, `factualScope` |
| Nhu cầu | `demand{source: none|gsc|site-search, impressions, clicks, position, period}` |
| Rủi ro trùng | `overlap{risk,urls[]}`, `mergeInto`, `internalLinks[]` |
| Quyết định | `gate{verdict,rulesVersion,reasons[],nearest[],nearestPublished[]}`, `disposition`, `priority` P0/P1/P2 |
| Biên tập | `editorial{approvedBy,approvedAt,acknowledged[],neighboursReviewed[],reviewedBy,note,history[]}` |
| Vòng đời | `lifecycle`: PLANNED · RESEARCH · APPROVED · WRITING · QA · PUBLISHED · REJECTED; `source` |

Lifecycle lưu trữ chỉ gồm PLANNED/RESEARCH/APPROVED/REJECTED (+ PUBLISHED cho dòng legacy); WRITING/QA/PUBLISHED **suy ra từ slot**.
`validateRow` + `checkInvariants` (xem `topic-check`) kiểm: topicId/slotId duy nhất, slug sống duy nhất, topic APPROVED phải có slot + người duyệt + gate ACCEPT +
`neighboursReviewed`, slot đang xử lý phải có topic APPROVED (khi enforce), tối đa 1 topic V2/intent cluster.

## 5. Gate — `factory/lib/topic-gate.js`

Verdict (mạnh thắng khi nhiều lý do): `REJECT` > `MERGE-CANDIDATE` > `REWRITE` > `NEEDS-RESEARCH` > `ACCEPT`. Lý do `WARN` không đổi verdict nhưng
**người duyệt phải ack đích danh từng mã**.

| Nhóm | Mã → verdict | Ý nghĩa |
|---|---|---|
| Trùng tuyệt đối | `dup-slug`, `dup-title` → REJECT | trùng slug / title chuẩn hóa với bài hoặc topic |
| Hoán vị | `context-only-variant` → REJECT | cùng intent + cùng hình thức, chỉ khác bối cảnh/khung |
| | `intent-cluster-published` → MERGE | intent đã được bài đã xuất bản phục vụ |
| | `lead-subject-published` → MERGE | chủ thể chính (trước dấu “:”) trùng bài có đuôi mô tả |
| | `intent-cluster-queued`, `lead-subject-queued` → REJECT | hoán vị của topic đã xếp hàng |
| | `location-only-variant` → REJECT | chỉ khác địa danh (không có nguồn địa phương đã xác minh) |
| Ngữ nghĩa | `semantic-overlap-high` → MERGE/REJECT | cosine headline ≥ 0,40, hoặc ≥ 0,25 kèm outline giống ≥ 0,55 |
| | `semantic-overlap-mid`, `same-subject-published` → WARN | gần nghĩa / cùng chủ thể — `informationGain` phải chứng minh khác |
| Hình dạng | `title-length`, `slug-format`, `hub-unknown`, `intent-invalid`, `content-type-invalid`, `keyword-*`, `user-problem-missing`, `info-gain-missing/boilerplate/thin`, `outline-invalid/repetitive`, `evidence-*`, `demand-fabricated/incomplete`, `priority-without-demand` → REWRITE | thiếu/yếu thông tin bắt buộc |
| Chính sách | `intent-ownership` → REWRITE | intent **thuê xe** thương mại chỉ thuộc cụm `/thue-xe/` |
| | `composite-aspects` → REWRITE | ghép hai góc topical từ template |
| | `slug-taken-by-slot` → REWRITE | slug đã thuộc slot khác trong matrix.json |
| Dữ kiện | `needs-verified-data`, `local-evidence-unverified` → NEEDS-RESEARCH | luật/giá/thông số/tin mới/địa phương thiếu bằng chứng xác minh |
| Biên tập | `editorial-overlap` → MERGE | người rà soát đọc láng giềng và xác định cùng câu hỏi (`--review` / `topic-reject --merge-into`) |
| WARN | `demand-unverified`, `evidence-unverified` | chưa có số đo nhu cầu / chưa ghi nguồn xác minh |

Chuẩn hóa tiêu đề → **intent key** (`factory/lib/topic-intel.js`, từ vựng `factory/data/topic-lexicon.js`): bỏ khung template, bối cảnh, đối tượng, hình thức
(checklist/FAQ/hướng dẫn…); giữ chủ thể + góc topical (giấy tờ, chi phí, kiểm tra, hợp đồng, đặt cọc, rủi ro, trả xe, so sánh) + địa danh; từ phủ định được giữ
(“xe không nổ máy” ≠ “xe nổ máy”). Ngưỡng nằm ở `DEFAULT_THRESHOLDS` và có thể ghi đè trong `topic-governance.json`.

### Độ tin cậy đo được (và giới hạn)

| Phép đo | Kết quả |
|---|---|
| 300 slot legacy (hoán vị V1) | 277/300 bị chặn (199 REJECT + 78 MERGE); 0 KEEP; 9 REWRITE; 14 NEEDS-RESEARCH |
| Hoán vị nhân tạo của bài thật (khung, đối tượng, địa danh × 80 tiêu đề) | **320/320** bị chặn |
| Flood: 300 hoán vị khung×bối cảnh×địa danh của một chủ đề | **1** ACCEPT |
| Ý tưởng tự viết khác từ ngữ, cùng câu hỏi với bài có sẵn (pilot) | **0/46** bị gate từ vựng bắt — chỉ bắt được khi **người đọc láng giềng** |
| Bài đích thật nằm trong top-K láng giềng đã xuất bản (43 ca) | top-1 53% · top-3 81% · **top-5 91%** · top-8 95% (2 ca ở hạng 15) |

⇒ Gate **chặn tốt hoán vị template và bản sao gần nguyên văn**, nhưng *không thể* chứng minh hai topic khác từ ngữ là khác câu hỏi. Vì vậy V2 buộc
**đọc 5 bài gần nhất** ở bước duyệt; điểm similarity chỉ là tín hiệu sàng lọc.

## 6. Duyệt topic (`topic-approve`)

```
node factory/factory.js topic-neighbours T001143            # đọc 5 bài đã xuất bản gần nhất + H2 (+ láng giềng đang xếp hàng)
node factory/factory.js topic-approve T001143 --by "tên" --role coordinator \
     --ack demand-unverified,evidence-unverified \
     --reviewed pin-xe-dien,doi-pin-xe-dien,...             # đủ 5 slug trong “PHẢI ĐỌC”
node factory/factory.js topic-approve --file approvals.json --by "tên" --role coordinator   # theo từng topic (khuyến nghị)
```

Từ chối toàn bộ (atomic, không ghi gì) nếu: topic không phải PLANNED + gate ACCEPT; **đánh giá lại tại thời điểm duyệt** không còn ACCEPT; thiếu ack một cảnh báo;
thiếu một bài trong danh sách phải đọc; slug đã thuộc slot khác; vượt `maxApprovedQueue`; topicId lặp. Thứ tự ghi: **slot trước, dòng topic sau** — crash giữa chừng để lại slot mồ côi
(chưa APPROVED nên writer không nhận); chạy lại `topic-approve` sẽ **nhận lại slot mồ côi**, không tạo slot trùng.

`topic-reject --merge-into <slug> --by NAME --reason …` ghi quyết định gộp sau gate (đọc thân bài đích); `topic-reopen` đảo quyết định biên tập **nhưng không vượt gate**.

Hạn chế trung thực: `--reviewed` là **kiểm soát quy trình** (không chứng minh người duyệt đã đọc). Giảm rủi ro bằng: danh sách bắt buộc do máy tính, lưu vào `editorial.neighboursReviewed`,
`topic-check --recheck` (deep audit) đánh giá lại topic đã duyệt, và lấy mẫu kiểm tra.

## 7. Nhu cầu và bằng chứng

* `demand.source` ∈ `none | gsc | site-search`. `none` mà có `impressions/clicks` → `demand-fabricated` (REWRITE). `gsc/site-search` phải có `impressions` (số) và `period`.
* `priority: P0` chỉ khi có nhu cầu đo thật; không có dữ liệu thì tối đa P1.
* `topic-import --file gsc.csv --period a..b [--out leads.jsonl]` đọc export “Queries” của Search Console, **gom truy vấn theo intent key**, KHÔNG sinh topic, KHÔNG thêm số: lead mang
  `impressions` = tổng đúng bằng CSV, và `coverage`: `COVERED` (cùng intent/chủ thể với bài có sẵn — cải thiện bài cũ), `NEARBY` (từ khóa nằm trong title/H2/keywords của bài gần — đọc bài trước),
  `GAP` (ứng viên topic mới). Đo trên corpus thật (1.564 truy vấn lấy từ keywords của chính các bài): 98,5% COVERED, 1,5% NEARBY, ~0% GAP; 6/6 truy vấn ngoài chủ đề là GAP.
* `factualScope: no-figures` loại trigger giá — bài chỉ nêu quy trình/nguyên tắc, không số tiền. Chủ đề luật/thông số phải có `evidence.verifiedFacts` + nguồn có ngày truy xuất.
* **Phiên làm việc này không có dữ liệu GSC nào** ⇒ toàn bộ topic pilot có `demand.source=none`; không con số nhu cầu nào được ghi.

## 8. Governance và rollback — `factory/topic-governance.json`

| Khóa | Giá trị hiện tại | Tác dụng |
|---|---|---|
| `mode` | `enforce` | `off` tắt kiểm soát writer |
| `v1Generation` | `frozen` | `queue-refill` không sinh topic V1/pool cũ |
| `requireApproved` | `true` | writer-pack / verify-batch / publish chỉ nhận slot có topic APPROVED |
| `maxApprovedQueue` | `50` | trần số topic APPROVED chưa xuất bản (chống đổ queue) |
| `thresholds` | `{}` | ghi đè ngưỡng gate |

* Không có file ⇒ `off/allowed` (tương thích mọi checkout cũ). File hỏng ⇒ **fail-closed** (`enforce` + `frozen`).
* **Rollback hoàn toàn**: `{"mode":"off","v1Generation":"allowed"}` hoặc xóa file. `matrix.json`, bài đã xuất bản, URL **không bị đụng**.
* Chỉ chủ repo quyết định đổi công tắc (AGENTS.md).

## 9. Lệnh CLI (`node factory/factory.js <lệnh>`)

| Lệnh | Quyền | Việc |
|---|---|---|
| `topic-audit [--out f.json] [--md f.md]` | read-only | đo trùng lặp thật, phân loại slot legacy |
| `topic-coverage [--json]` | read-only | độ phủ / đa dạng intent theo hub |
| `topic-status [--json]`, `topic-check [--recheck]` | read-only | tóm tắt; invariant (exit 1 khi lỗi); `--recheck` đánh giá lại topic đã duyệt |
| `topic-neighbours <T…> [--top N] [--json]` | read-only | láng giềng + H2 để người duyệt đọc |
| `topic-brief <T…\|S…>` | read-only | brief cho writer |
| `topic-import --file gsc.csv --period a..b` | read-only | lead từ Search Console |
| `topic-backfill` | coordinator | tạo dòng topic cho slot cũ (idempotent, không đụng matrix.json); `--refresh-published` đồng bộ dòng published legacy về tiêu đề công khai |
| `topic-propose --file c.jsonl [--review r.json] [--source …] [--dry-run] [--update]` | coordinator | đánh giá ứng viên, ghi dòng (idempotent, kể cả topic đã REJECTED) |
| `topic-approve <T…>` / `--file approvals.json` | coordinator | topic → slot PLANNED + APPROVED (atomic) |
| `topic-reject <T…> --reason … [--merge-into slug --by NAME]` | coordinator | từ chối / gộp vào bài đã có |
| `topic-reopen <T…> --by NAME --reason …` | coordinator | mở lại topic V2 nếu gate vẫn ACCEPT |
| `topic-index-rebuild` / `topic-index-check` | coordinator / read-only | cache SQLite chữ ký headline (derived, không commit) |
| `writer-pack [--count N] [--shard k/n]` | writer | chỉ slot APPROVED; kèm TOPIC_BRIEF/GAIN/OUTLINE/SCOPE; `--shard` để nhiều writer song song không trùng |

Lệnh ghi **từ chối khi `topic-matrix.jsonl` có dòng hỏng** (không ghi đè để khỏi làm mất dữ liệu). `queue-refill` in `QUEUE_REFILL frozen` và không ghi state khi `v1Generation=frozen`.

## 10. Tự động hóa và CI

* `factory-coordinator.yml` (10 phút/tick): thêm `topic-check` (read-only) sau `check-state`; `queue-refill` bị đóng băng ⇒ tick rỗng không commit.
* `article-quality.yml` (engine gate): thêm `test-topic-v2.js` + `topic-check --recheck`; trigger thêm `factory/topic.js`, `factory/data/topic-*.js`, `factory/topic-governance.json`.
* `factory-deep-audit.yml` (thủ công): `topic-check --recheck`, rebuild/check cache chữ ký, `test-topic-v2.js`.
* Một coordinator duy nhất ghi `topic-matrix.jsonl`/`matrix.json` (cùng concurrency group `total-production`); writer không thể tạo/nới duyệt (verify-batch từ chối slot chưa APPROVED).
* Sửa nhỏ tự xử lý được; lỗi invariant ⇒ job đỏ, **dừng và báo** (không tự che).

## 11. Quy mô: số đo

| Phép đo | Kết quả |
|---|---|
| 3.000 ứng viên đa dạng, một lần `topic-propose` (CLI, corpus nhỏ) | 35 s (11,4 ms/ứng viên) |
| Chỉ mục gate 10.000 mục (tổng hợp, từ vựng thật) | dựng 4,1 s; ~26,5 ms/lần đánh giá |
| Chỉ mục gate 40.000 mục (script đo, không nằm trong test) | dựng 19,6 s; ~163 ms/lần đánh giá; ~1,5 GB heap |
| Kích thước `topic-matrix.jsonl` | 576 B/dòng bài đã xuất bản; ~3 KB/dòng topic V2 đầy đủ (outline, gain, láng giềng) ⇒ **40.000 dòng ≈ 23–120 MB** (GitHub cảnh báo ≥ 50 MB, chặn ≥ 100 MB) ⇒ cần nén dòng đã xuất bản và chia shard |

Kết luận: V2 vận hành tốt tới vài nghìn bài. Trước ~15–20k bài cần: chia shard `topic-matrix` (active/archive), cắt tỉa postings từ phổ biến hoặc truy vấn láng giềng từ SQLite/FTS,
và chuyển sang build tăng dần. Chi tiết và phần hạ tầng sitemap/hosting nằm ở kế hoạch migration (cần duyệt).

## 12. Kiểm thử — `factory/test-topic-v2.js` (327 assert)

| Tầng | Nội dung |
|---|---|
| 1. Unit | intent key & hoán vị, phủ định, risk trigger (không dương tính giả), shape, gate trên corpus tổng hợp (từng mã), precedence/`addReason` chỉ làm chặt hơn, governance (absent/hỏng/off/rollback), matrix (validate, invariant, effective lifecycle, JSONL I/O), CSV |
| 2. Integration | micro-repo trong tmp (engine thật + corpus giả lập): backfill → audit read-only → propose (dry-run, role, file lỗi, `--review` fail-closed, idempotent) → neighbours → approve (mọi đường từ chối, atomic, `--file`, trần queue) → writer-pack (chỉ APPROVED, brief, `--shard`) → verify-batch từ chối slot chưa duyệt → queue-refill frozen → reject/merge/reopen → topic-import → **rollback**; tiêu đề công khai (audit/backfill/coverage/writer-pack dùng `module.title`, `--refresh-published`); `topic-coverage` đếm theo lifecycle hiệu lực |
| 3. Production invariant | repo thật, READ-ONLY: `topic-check [--recheck]`, mọi PUBLISHED có dòng, không bịa nhu cầu/bằng chứng, topic rủi ro chỉ duyệt khi đã xác minh, ack đủ, hồ sơ pilot, không ký tự CJK/Cyrillic/Hangul, recall hoán vị trên corpus thật, hiệu chuẩn độ phủ |
| 4. Long-run / failure recovery | dòng JSONL cắt cụt/hỏng ⇒ lệnh ghi từ chối, không mất dữ liệu; file `.tmp` mồ côi; cache SQLite stale/thiếu/hỏng ⇒ rebuild an toàn, kết quả không đổi; crash giữa slot↔row ⇒ nhận lại slot mồ côi; slot lậu bị bắt; flood hoán vị; 3.000 ứng viên; chỉ mục 10.000 mục |

Các suite cũ (`test`, `test-hardening`, `test-reliability`, `test-pair`, `test-cycle`, `test-coordinator`, …) **giữ nguyên assert**; chỉ thêm một dòng cô lập fixture
(`topic-governance.json` = off) vào hàm `copyRepoToTmp` vì chúng dựng slot thủ công chưa qua duyệt.

## 13. Giới hạn đã biết

1. Gate từ vựng không bắt được topic **cùng câu hỏi khác từ ngữ** (0/46 ở pilot) — cần người đọc láng giềng (top-5 chứa bài đích 91%).
2. `--reviewed` là kiểm soát quy trình, không phải bằng chứng đã đọc.
3. Chuẩn hóa bỏ dấu gây va chạm (má/mà, cảm/cấm): `fold` dùng cho intent key; tín hiệu quét thân bài dùng chữ có dấu thì tốt hơn nhưng chưa nằm trong engine (đo: không tăng recall hợp nhất).
4. `cluster` lưu trong dòng là kết quả của `rulesVersion=1`; đổi từ vựng sau này cần `topic-backfill` lại cụm.
   **Tiêu đề công khai = `module.title`**, không phải `slot.title` (nhãn lúc lập kế hoạch, đã lệch ở 63 bài do writer sửa tiêu đề trong module). Gate/`topic-propose` luôn dùng module; audit, backfill, coverage và gợi ý related của `writer-pack` được sửa 2026-10-12 để dùng cùng nguồn (audit đầu từng đo nhầm trên nhãn slot — xem đính chính ở báo cáo audit).
5. Chưa có dữ liệu nhu cầu thật; ưu tiên P0 không thể dùng. Quyết định “độc lập” trong pilot là phán đoán của một người rà soát (agent), có thể đảo bằng `topic-reopen`.
6. Chỉ mục gate nằm trong bộ nhớ; xem mục 11 cho giới hạn quy mô.
7. Không có khóa liên tiến trình cho `topic-matrix.jsonl`: dựa vào “một coordinator” + concurrency group + hợp nhất git.
8. **(Đã khắc phục 2026-10-12)** Danh mục chỉ có đúng 1 bài PUBLISHED từng làm đỏ `test.js`: assert `art-pn` đòi mọi bài live có điều hướng bài trước/sau, còn hợp đồng silo trong `test-features.js` chỉ cho hàng xóm CÙNG danh mục ⇒ bài đầu tiên của một danh mục trống không có hàng xóm. Phát hiện bằng diễn tập `publish-batch` (xem mục 14) vì `publish-batch` và `factory-publish.yml` **không chạy `test.js`**. Khắc phục: `test.js` phần 15 nay khớp hợp đồng silo (≥ 2 bài live trong danh mục ⇒ mọi bài phải có điều hướng, assert cũ giữ nguyên nội dung; đúng 1 bài ⇒ không có khối `art-pn`) và `test-features.js` có test render hồi quy cho danh mục 1 bài / 2 bài. Đã kiểm trên bản sao có đúng 1 bài `review`: `test.js` cũ đỏ (1 lỗi), bản mới xanh (0 lỗi). Với repo hiện tại (mọi danh mục ≥ 2 bài) số assert không đổi (24.013).

## 14. Vận hành hằng ngày

1. Thu thập ý tưởng thật: export GSC → `topic-import` → chọn lead `GAP`/`NEARBY`; hoặc đề xuất cho hub trống (`topic-coverage`).
2. Viết ứng viên JSONL đầy đủ (userProblem, informationGain cụ thể, outline ≥ 4 H2, evidence/factualScope) → `topic-propose --dry-run` → `topic-propose`.
3. `topic-neighbours` → **đọc** bài gần nhất → nếu cùng câu hỏi: `topic-reject --merge-into` (cải thiện bài cũ), nếu không: `topic-approve --file`.
4. Writer: `writer-pack` → viết đúng TOPIC_BRIEF (không số liệu ngoài `evidenceVerified`) → `verify-batch` → push.
5. Sau 28 ngày: đối chiếu GSC (impressions/clicks theo URL) để giữ/cải thiện/gộp — xem kế hoạch migration.
6. **Diễn tập trước khi push lô đầu cho danh mục/hub trống**: sao chép repo (bỏ `.git`) vào thư mục tạm, chạy `verify-batch` → `publish-batch` → `check-state` → `verify-invariant` → `topic-check --recheck` → `generate --check` → `node factory/test.js` → `audit --min-score 70`. Chỉ push khi tất cả xanh (đã làm cho lát cắt 1: lô 1 = 9 bài, lô 2 = cặp `review`).

## 15. Nhật ký triển khai theo lát cắt (số đo thật, cập nhật 2026-10-13)

Từ khi V2 bật (`mode: enforce`), **399 bài V2** (50 ở lát cắt 1–6, 82 ở vòng 1–10, 51 ở vòng 11–29, 55 ở vòng 31–38, 77 ở vòng 39–51, 43 ở vòng 52–65 và 41 ở vòng 66–78 bên dưới) đã đi hết vòng đời qua đúng một cổng: `topic-propose` → rà láng giềng → `topic-approve` → writer → `verify-batch` → diễn tập → `publish-batch` (CI) → bot commit. Không bài nào được thêm bằng đường tắt (không `plan`, không sửa tay `matrix.json`).

| Lát cắt | Slot | Số bài | Nội dung chính |
|---|---|---|---|
| 1 | S01083–S01093 | 11 | pilot đầu tiên; diễn tập `publish-batch` phát hiện lỗi `art-pn` của danh mục chỉ có 1 bài (mục 13.8, đã khắc phục) |
| 2 | S01094–S01103 | 10 | lấp hub trống `garage/*`, `market/*`: họng ga phun xăng, khó nổ khi nóng, hóa đơn/nhật ký bảo dưỡng, chi phí sở hữu, phụ tùng, định giá xe cũ |
| 3 | S01104–S01113 | 10 | chẩn đoán xe tay ga (rồ ga không lên tốc độ, quạt két nước, dây curoa), phanh (kêu rít, tay phanh mềm), lốp, kiểm tra xe cũ (số khung, từng ngập nước) |
| 4–5 | S01114–S01123 | 10 | hệ làm mát, đánh lửa, sạc điện (lốc điện), CBS, kiểm soát xe tốc độ chậm, xe điện (pin báo đầy, đi mưa), chọn xe cho người cao tuổi, ắc quy phồng, xe kéo lệch |
| 6 | S01124–S01132 | 9 | bán xe cũ (chuẩn bị, tin đăng), lái thử xe điện, chế hòa khí, hệ thống bôi trơn, mâm đúc/nan hoa, bạc đạn bánh, cổ lái, cảm biến xe phun xăng |
| V1 | S01133–S01169 | 37 | nhiên liệu xe phun xăng (kim phun, bơm, lọc, đồng hồ xăng, nắp bình), cao su chân máy, độ nén, ổ khóa, củ đề, công tắc an toàn, còi, đèn phanh, hao bình, dây mát, chân chống, yên và cốp, van lốp, săm, bố thắng, tiệm sửa, báo giá, bảo hành, thuật ngữ và xe điện (ly hợp ly tâm, moay-ơ, tay ga điện tử, phanh tái tạo, BMS, bộ điều khiển), rò xăng, phòng cháy, mất phanh, xích đứt |
| V2 | S01170–S01183 | 14 | ly hợp trượt, hộp số kêu, lốp phồng u, lốp bẹp, sunfat ắc quy, nổ ống xả, vít ga, xuất phát dốc, xích cam, tay côn, đèn pha đọng hơi nước, phớt phuộc, bình xăng gỉ, kính mũ |
| V3–V4 | S01184–S01195 | 12 | số N khi đang chạy, nhựa bạc màu, hybrid, đèn luôn sáng, remap ECU, tư thế lái; tay ga giật khi đi chậm, tiếng kêu bộ nồi, tự rồ ga, xe điện không lên nguồn, yên rách, bộ sạc xe điện |
| V5–V7 | S01196–S01207 | 12 | cốp nóng, nước ống xả, curoa đứt, tiếng bíp, hết xăng, xe cũ bổ máy, ngồi sau mặc váy; gương lỏng, đồng hồ mờ, tem thông tin, hub motor, ống xả nóng |
| V8–V10 | S01208–S01214 | 7 | tắt máy khi chờ đèn đỏ, tiếng tách sau khi tắt máy, đèn báo số, lốc máy, đổ dư nhớt, đổ nhầm nhiên liệu, lắp ngược cực ắc quy |
| V11–V16 | S01215–S01227 | 13 | lọc nhớt, bơm nhớt, cò mổ và trục cam, đầu bò, khóa xăng, rơ-le, gác chân, chắn bùn, bảo dưỡng xe điện, cổ pô, trục khuỷu, phớt xupap, càng sau |
| V17 | S01228–S01231 | 4 | cần đạp nổ (cách dùng và lỗi), ống dẫn dầu phanh, cần số |
| V18–V19 | S01232–S01238 | 7 | xe điện giật hoặc yếu, tay ga Hall, chế độ lái, pin nóng hoặc phồng, hết pin giữa đường, hao nhớt không rò, camera hành trình |
| V20–V21 | S01239–S01245 | 7 | bơm nước làm mát, bầu giảm thanh, bộ xúc tác, đèn pha halogen và LED, kiểm tra mức nhớt, chùm sáng đèn pha, độ rơ tay ga |
| V22 | S01246–S01250 | 5 | SOHC và DOHC, chiều dài cơ sở, kiểm soát lực kéo, van biến thiên, vòng tua |
| V23–V25 | S01251–S01258 | 8 | tự chết máy khi nhả ga, chết máy khi nhả côn, yếu khi leo dốc, khí nitơ trong lốp, cọc ắc quy sùi, ống nước làm mát, công tắc tay lái, ghi-đông lệch |
| V26–V27 | S01259–S01261 | 3 | cốp đọng nước, ốc xả nhớt, đèn mờ khi bấm còi hoặc đề |
| V28–V29 | S01262–S01265 | 4 | dựng xe lên chân chống đứng, nâng xe dậy sau khi đổ, lùi xe ra khỏi chỗ đỗ, bugi nóng và bugi lạnh |
| V31 | S01266–S01273 | 8 | xích có phốt, lốp bố chéo và bố tỏa tròn, đèn pha thấu kính, phuộc ngược, vết xước sơn nhỏ, gỡ tem và vết keo, xe trong mùa nồm, kính chắn gió |
| V32 | S01274–S01282 | 9 | đĩa phanh nổi, truyền động xích, đai và các-đăng, động cơ một và nhiều xy-lanh, chi tiết mạ crom, nhựa đường, nhựa cây và phân chim, tay nắm và gù tay lái, xe tay ga bánh lớn và bánh nhỏ, sáp phủ nano và ceramic, kẹp điện thoại |
| V33 | S01283–S01289 | 7 | phuộc sau có bình dầu phụ, góc nghiêng cổ lái, các kiểu khung, xuống hầm gửi xe, đi cùng đường với xe đạp, hệ thống hút khí phụ, bình hấp thụ hơi xăng |
| V34 | S01290–S01295 | 6 | dán keo trong PPF, khung bảo vệ và nấm chống đổ, keo tự vá trong lốp, thổi gioăng mặt máy, đồng hồ điện tử tắt hoặc lỗi hiển thị, phụ gia pha xăng |
| V35 | S01296–S01301 | 6 | lốp đặc, tháo lắp lốp có săm bằng cây nạy, bơm lốp mini, chai xịt bôi trơn và làm bóng, chân dựng phụ và kệ đỡ, phụ gia pha nhớt |
| V36 | S01302–S01306 | 5 | đánh lái ngược, đầu xe lắc mạnh khi chạy, ly hợp chống trượt và côn trợ lực, bộ sang số nhanh, củ đề kiêm máy phát |
| V37 | S01307–S01310 | 4 | đoạn có rạp cưới, rạp tang và đoàn đưa tang, đường lát đá và lát gạch, chứng kiến tai nạn trên đường, cây đổ và dây điện sà xuống đường |
| V38 | S01311–S01320 | 10 | pin tháo rời xe điện, vệ sinh xe không cần xịt nước, xe điện bật nguồn là chạy được, đeo kính khi lái, giữ bình tĩnh trên đường, đồ ở sàn và móc treo xe tay ga, phản quang, áo trùm xe, lề đường bị hẫng, đưa xe vào nhà qua bậc cửa |
| V39 | S01321–S01329 | 9 | nháy đèn và nút passing, đèn khẩn cấp, thùng sau, bao tay gắn tay lái, ghế ngồi và đai đeo cho trẻ, phòng giật đồ, đoạn đường bị rải đinh, vận chuyển xe đi xa, giảm xóc sau một bên và hai bên |
| V40–V43 | S01330–S01342 | 13 | chở bình gas, túi sơ cứu, vùng mất sóng, đã uống rượu bia thì không lái, kẹp gối vào bình xăng, cửa ô tô mở bất ngờ; người cao tuổi tự lái, bỏng ống xả, ê mông khi đi xa, cầu dao xe điện nhảy, người đi bộ sang đường, phụ nữ mang thai, giữ xe khi có bão |
| V44–V45 | S01343–S01359 | 17 | bụi hoặc côn trùng bay vào mắt, chuột rút khi lái, chở người ốm đi khám, lái lại sau thời gian dài, đi một mình ban đêm, người thấp chống chân, chống trộm pin xe điện; chóng mặt khi lái, xe điện thủng lốp, lái lại sau chấn thương, không tự lái về sau khi gây mê, kính áp tròng, đi sau xe chở hàng cồng kềnh, đồ để sẵn trong cốp, phượt một mình, câu bình ắc quy, nghỉ đêm dọc đường |
| V46–V47 | S01360–S01374 | 15 | ba lô và túi đeo, lái khi căng thẳng, dừng xe chụp ảnh trên đèo, du lịch cùng trẻ nhỏ, về quê dịp Tết, mua xe điện cũ, cổng sạc xe điện; xem pháo hoa và lễ hội, đưa con đi thi, ngồi sau xe ôm, chở vali, chảy nước mắt vì gió, tự lái khi mặc áo dài, gửi xe nhiều ngày ở sân bay, ODO và TRIP |
| V48–V49 | S01375–S01387 | 13 | mặt đèn pha ố vàng, tựa lưng cho người lái, xe ba bánh cho người lớn tuổi và người khuyết tật, ắc quy và pin cũ, người cao to chọn xe, mũ bảo hiểm hỏng vặt; đèn báo ABS, xe chỉ chạy quãng ngắn, sạt lở và lũ quét trên đường núi, chở người đang say, xe ba gác và xe đẩy hàng rong, ăn uống khi đi xa, bình chữa cháy mini |
| V50–V51 | S01388–S01397 | 10 | hơi nóng phả vào chân, nghi xe bị gắn định vị lén, mẹ sau sinh và trẻ sơ sinh, sinh viên mới lên thành phố, cầm ô trên xe, khẩu trang, áo và váy chống nắng; khi nào thay đĩa phanh, cho con đi xe đạp điện, tiếng kêu từ bánh có động cơ xe điện |
| V52 | S01398–S01401 | 4 | đường đê và đường ven kênh, khóa phanh đỗ trên xe tay ga, cao su giảm chấn ở đùm bánh sau, đi xe côn tay trong phố kẹt xe |
| V53–V54 | S01402–S01409 | 8 | chạy xe ôm công nghệ, xe bị cạy khóa nhưng chưa mất, thay pin xe điện (pin chính hãng, pin tương thích, độ pin); sợ lái lại sau một lần ngã, chết máy khi đi mưa hoặc sau khi rửa xe, túi ni lông hay dây cuốn vào bánh, chìa khóa gãy trong ổ, quên tháo khóa đĩa |
| V55–V57 | S01410–S01419 | 10 | giao hàng cả ngày bằng xe điện, qua cầu phao; người nghe kém, người mù màu, đèn tín hiệu hỏng hoặc chỉ nháy vàng; chở cây cảnh, để mũ bảo hiểm khi đỗ xe, xe dính xi măng hay sơn, ong kiến gián làm tổ trong xe, rắn chui vào xe |
| V58–V60 | S01420–S01430 | 11 | gặp nhóm đua xe lạng lách, người ăn vạ, đồ trong cốp bị lấy; đồ công sở, tóc dài dưới mũ, giày cao gót và dép lê, mưa phùn mưa bụi; chở xe đạp, cảm biến áp suất lốp gắn thêm, baga gắn thêm, đèn trợ sáng |
| V61–V65 | S01431–S01440 | 10 | chở gà vịt, tay phanh hoặc tay côn gãy sau khi ngã, lấy nhầm xe giống hệt; xe điện lên xuống dốc dài, mua xe cũ qua mạng, báo động chống trộm tự kêu; đi gần xe chở sắt thép hay cây dài, trẻ nhỏ nghịch xe đang dựng, dừng giúp người hỏng xe giữa đường, gặp người lái say chạy loạng choạng |
| V66–V67 | S01441–S01450 | 10 | dắt chó chạy theo xe, gặp đoàn đi bão, tấm thép lót đường và nắp hố ga, ngày ô nhiễm không khí, xe cũ hay hỏng vặt nên sửa hay đổi; bị xe khác chắn lối ra, qua ngầm tràn đường núi, đường đất trơn mùa mưa, chở đồ ăn nóng và đồ uống, đoạn đang cắt tỉa cây hay có xe thang |
| V68–V69 | S01451–S01460 | 10 | hút thuốc khi lái, xao nhãng khi lái, xe bị phá khi đỗ, qua cổng bệnh viện, khu đô thị mới; viếng mộ và tảo mộ, gặp người chạy bộ và nhóm tập thể dục, hắt hơi hay ho khi lái, thảm lót sàn xe tay ga, vệt nắng loang lổ dưới hàng cây |
| V70–V72 | S01461–S01469 | 9 | lúc chạng vạng, đánh rơi đồ khi đang chạy, lỡ lối rẽ hay đi nhầm đường, công tắc tắt máy trên tay lái; qua cổng có thanh chắn tự động, chở người bó bột hay chống nạng; chuyển trọ bằng xe máy, mang laptop trên xe, người lạ xin đi nhờ xe |
| V73–V75 | S01470–S01476 | 7 | chọn xe cho khu hay ngập nước, chọn xe cho vùng đồi núi, tay phanh xa bàn tay bóp không tới; tự lái về sau khi hiến máu, lái xe ngay sau khi tập thể thao nặng, đi gần xe đang kéo hay chở xe hỏng; chuyển từ xe đạp điện lên xe máy |
| V77–V78 | S01477–S01481 | 5 | xe bị bó máy khi đang chạy, đi xe máy bị ù tai; độ nồi, độ pô hay độ máy, đi đường dài bằng xe tay ga, gắn dù hay mái che lên xe máy |

Kết quả đo được sau lát cắt 6: `matrix.json` 1.132 slot, **832 PUBLISHED** (782 legacy + 50 V2), 0 topic APPROVED chờ viết. Sau vòng 10: `matrix.json` 1.214 slot, **914 PUBLISHED** (782 legacy + 132 V2), 300 slot PLANNED còn lại đều là slot V1 đã đóng băng (không có topic APPROVED), 0 topic APPROVED chờ viết. Sau vòng 29: `matrix.json` 1.265 slot, **965 PUBLISHED** (782 legacy + 183 V2), 300 slot PLANNED còn lại vẫn chỉ là slot V1 đã đóng băng, 0 topic APPROVED chờ viết. Sau vòng 38: `matrix.json` 1.320 slot, **1.020 PUBLISHED** (782 legacy + 238 V2), 300 slot V1 vẫn đóng băng. Sau vòng 51: `matrix.json` 1.401 slot (đã gồm 4 slot vòng 52), **1.097 PUBLISHED** (782 legacy + 315 V2), 300 slot V1 vẫn đóng băng; vòng 52 (4 topic, S01398–S01401) đã duyệt và đang viết. Sau vòng 65: `matrix.json` 1.440 slot, **1.140 PUBLISHED** (782 legacy + 358 V2), 300 slot PLANNED còn lại vẫn chỉ là slot V1 đã đóng băng, 0 topic APPROVED chờ viết. Sau vòng 78: `matrix.json` 1.481 slot, **1.181 PUBLISHED** (782 legacy + 399 V2), 300 slot PLANNED còn lại vẫn chỉ là slot V1 đã đóng băng, 0 topic APPROVED chờ viết. Mọi lát cắt: `verify-batch` OK, diễn tập trên bản sao (`publish-batch` → `check-state` → `verify-invariant` → `topic-check --recheck` → `generate --check` → `test.js` → `audit --min-score 70` → `test-features.js` → `link-integrity --all`; từ vòng 31 thêm `test-shared-site.js` sau khi chủ repo đổi giao diện dùng chung) xanh, `factory-publish.yml` tạo bot commit thành công cho mọi lô.

**Chất lượng đo được của 29 bài lát cắt 3–6** (đo bằng chính bộ QA của repo, không phải ước lượng): QA 100/100 và 7 critical gate đạt ở cả 29 bài; SEO advisory 100/100 ở cả 29 bài sau khi xuất bản (đo lại bằng `seoArticle` trên corpus đã PUBLISHED; chạy riêng lẻ trước khi publish thì bài có liên kết tới bài anh em cùng lô chỉ được 91 vì sibling chưa PUBLISHED); thân bài 1.900–2.170 từ (tổng gồm tiêu đề, tóm tắt, checklist ≈ 2.700–3.200); độ trùng 5-gram cao nhất với bài đã xuất bản: **không có** (công cụ `scan-draft`); không ký tự CJK/Cyrillic/Hangul; không số liệu, giá, tên hãng/mẫu xe; `related` đều trỏ tới bài đã PUBLISHED.

**Điều đã học (ghi lại để lô sau không lặp):**
1. *Cổng từ vựng là điều kiện cần, không đủ.* Ở nhiều ý tưởng ACCEPT, bài đã xuất bản vẫn trả lời cùng câu hỏi bằng từ khác (ví dụ ý tưởng về lốp xì hơi chậm đã nằm trọn trong bài áp suất lốp). Chỉ **đọc thân bài láng giềng + `text-grep` nhiều biến thể từ ngữ** mới lộ ra; những ý tưởng đó bị gộp (`topic-reject --merge-into`) hoặc bỏ, không viết bài mới. Các quyết định gộp được ghi trong commit `topic-approve` và trong `topic-matrix.jsonl` (`mergeInto`).
2. *Luôn đặt `slug` ngắn tường minh trong tệp ứng viên.* 5 topic đợt B bị gate tự sinh slug theo tiêu đề dài; đã rút gọn bằng thay chuỗi trong `matrix.json`/`topic-matrix.jsonl` TRƯỚC khi có module/URL (topic-check, check-state, verify-invariant xanh). Từ đó tệp ứng viên nào cũng có `slug`.
3. *Writer (agent) sẽ gỡ liên kết chéo giữa các bài anh em cùng lô nếu thấy tệp bị sửa từ bên ngoài.* Vì vậy liên kết chéo được gắn bởi coordinator trên bản sao trong repo, sau khi mọi writer của lô đã xong (`related` ≤ 5, bài sát chủ đề nhất đứng đầu, chỉ trỏ tới bài PUBLISHED hoặc bài cùng lô publish một lần).
4. *Khẳng định kỹ thuật không kiểm chứng được phải bị loại hoặc nới bằng “thường/có thể/tùy xe”.* Ví dụ đã gỡ: quạt két nước chạy khi đã tắt khóa; đã thêm vào bài ắc quy: xả nước sạch liên tục khi axit bắn vào mắt (sơ cứu tối thiểu, không số liệu); đã thêm vào bài kiểm soát xe chậm: không giữ phanh sau lâu khi ga còn mở. Mỗi bài được coordinator đọc toàn văn, và mỗi lần chỉnh đều chạy lại `scan-draft`.
5. *Diễn tập trước khi push vẫn bắt buộc:* với push chỉ chứa module bài, `publish-batch` và `factory-publish.yml` chỉ chạy `verify-batch` + `link-integrity` và không chạy `test.js`; bản sao tạm là nơi `test.js`, `test-features.js` và kiểm tra bất biến chạy trước khi bài lên `main`.

**Vòng 1–10 (82 bài, đo bằng `audit --min-score 70` trên corpus đã PUBLISHED):** QA 100/100 ở cả 82 bài; độ dài theo `audit` (tính cả tiêu đề, tóm tắt, checklist) trung bình khoảng 2.950 từ, thân bài do writer viết đo bằng `scan-draft` từ 1.948 đến 2.354 từ (trung bình 2.126); mọi lô đều qua `verify-batch`, diễn tập đủ chín bước và `factory-publish.yml` tạo bot commit. Quy trình mỗi vòng: ý tưởng (census khoảng trống + gợi ý tự động hoàn thành) → `indep-check` + `text-grep` → `topic-propose --dry-run` → `topic-propose` → `topic-neighbours` đọc thân bài láng giềng → `topic-approve` hoặc `topic-reject --merge-into` → brief → writer → `scan-draft` + `check-slice` → coordinator đọc các đoạn an toàn → `verify-batch` → diễn tập → push ≤ 10 ID.

**Vòng 11–29 (51 bài, đo trên `matrix.json` và `audit --min-score 70`):** QA 100/100 ở cả 51 bài; thân bài do writer viết đo bằng `scan-draft` và `audit` từ 2.690 đến 3.200 từ tính cả tiêu đề, tóm tắt, checklist (trung bình 2.988); SEO advisory từ 91 đến 100 (8 bài dưới 100, chỉ là advisory, bài ≥ 70 không sửa để tăng điểm); không số liệu, giá, tên hãng hay mẫu xe; mọi lô qua `verify-batch`, diễn tập đủ chín bước và `factory-publish.yml` tạo bot commit. Mỗi bài do coordinator đọc các đoạn có rủi ro an toàn (ống dẫn dầu phanh, axit ắc quy, pin lithium nóng hoặc phồng, nâng xe dậy sau khi đổ, bộ xúc tác) trước khi đưa vào lô.

**Vòng 31–38 (55 bài, đo bằng `qaArticle`/`seoArticle` trên corpus đã PUBLISHED):** QA 100/100 ở cả 55 bài; độ dài tính cả tiêu đề, tóm tắt, checklist từ 2.832 đến 3.062 từ (trung bình 2.936), thân bài do writer viết đo bằng `scan-draft` khoảng 2.000–2.100 từ; SEO advisory từ 91 đến 100 (13 bài dưới 100, chỉ là advisory); không số liệu, giá, tên hãng hay mẫu xe; `scan-draft` không thấy đoạn trùng 5-gram với bài đã xuất bản; mọi lô qua `verify-batch`, diễn tập đủ mười một bước và `factory-publish.yml` tạo bot commit. Coordinator đọc toàn văn hoặc các đoạn rủi ro (chứng kiến tai nạn, dây điện sà xuống đường, pin tháo rời, lề đường bị hẫng, đưa xe vào nhà) và sửa trước khi xuất bản các khẳng định lệch (đường cắt sáng của đèn pha, màu tấm phản quang).

**Vòng 39–51 (77 bài, đo bằng `qaArticle`/`seoArticle` trên corpus đã PUBLISHED):** QA 100/100 ở cả 77 bài; độ dài tính cả tiêu đề, tóm tắt, ý chính và checklist từ 2.501 đến 2.835 từ (trung bình 2.652), thân bài do writer viết đo bằng `scan-draft` khoảng 1.990–2.080 từ; SEO advisory từ 91 đến 100 (12 bài dưới 100, chỉ là advisory); không số liệu, giá, tên hãng hay mẫu xe; mọi lô qua `verify-batch` và diễn tập; từ vòng 47 diễn tập thêm `index-refresh` + `index-check` cho khớp bước mới của `factory-publish.yml` (P0-02 do chủ repo gộp), tổng cộng mười ba bước. Coordinator đọc toàn văn từng bài trước khi đưa vào lô, sửa trên bản nháp các chữ dễ bị hiểu là dẫn quy định (“quy định” đổi thành “hướng dẫn” hay “khuyến nghị”) và thêm liên kết liên quan còn thiếu.

**Vòng 52–65 (43 bài, đo bằng `qa-preview` — `qaArticle`/`seoArticle` — trên corpus đã PUBLISHED):** QA 100/100 ở cả 43 bài; độ dài tính cả tiêu đề, tóm tắt, ý chính và checklist từ 2.807 đến 3.298 từ (trung bình 3.025); SEO advisory từ 91 đến 100 (13 bài dưới 100, chỉ là advisory, không sửa để tăng điểm); không số liệu, giá, tên hãng hay mẫu xe; mọi lô qua `verify-batch` và diễn tập mười ba bước, `factory-publish.yml` tạo bot commit cho mọi lô. Coordinator đọc toàn văn từng bài và sửa trên bản nháp trước khi xuất bản: chữ dễ hiểu là dẫn quy định (“quy định tùy từng nơi” đổi thành “cách làm tùy từng nơi”), một câu khẳng định về giấy tờ người lái trong bài mua xe cũ qua mạng (thay bằng lời khuyên an toàn khi lái thử), và các slug `related` gõ sai.

**Vòng 66–78 (41 bài, đo bằng `qa-preview` — `qaArticle`/`seoArticle` — trên corpus đã PUBLISHED):** QA 100/100 ở cả 41 bài; độ dài tính cả tiêu đề, tóm tắt, ý chính và checklist từ 2.823 đến 3.256 từ (trung bình 3.049); SEO advisory từ 91 đến 100 (11 bài dưới 100, chỉ là advisory, không sửa để tăng điểm); không số liệu, giá, tên hãng hay mẫu xe; mọi lô qua `verify-batch` và diễn tập mười ba bước, `factory-publish.yml` tạo bot commit cho mọi lô. Coordinator đọc toàn văn từng bài và sửa trên bản nháp trước khi xuất bản: chữ dễ hiểu là dẫn quy định (“quy định riêng” đổi thành “nội quy riêng”, “tập quán và quy định mỗi nơi” đổi thành “điều kiện mỗi nơi”, câu dẫn quy định chở trẻ em đổi thành liên kết sang bài chở trẻ em an toàn), chữ dễ bị hiểu là giá (“lời báo giá”, “giá hàng”), một câu mở bài viết theo kiểu từ khóa (“Nhiều người tìm riêng cho …”) và thêm liên kết liên quan cho đủ năm.

**Số ý tưởng đã chấp nhận theo từng vòng** (cho thấy nguồn topic độc lập cạn dần): vòng 1: 37 · vòng 2: 14 (từ 37 ứng viên) · vòng 3: 6 (từ 10; 2 gộp, 2 NEEDS-RESEARCH) · vòng 4: 6 · vòng 5: 3 · vòng 6: 4 · vòng 7: 5 (1 gộp) · vòng 8: 2 (1 gộp, 1 NEEDS-RESEARCH) · vòng 9: 2 (1 gộp) · vòng 10: 3 (1 gộp) · vòng 11–16: 13 (3 gộp) · vòng 17: 4 · vòng 18: 5 (từ 6; 1 gộp) · vòng 19: 2 (từ 3; 1 gộp, thêm 1 ý tưởng bị bỏ trước khi đề xuất vì đã có bài `xe-may-no-lop-bop-o-ong-xa`) · vòng 20: 4 (từ 5; 1 gộp) · vòng 21: 3 (từ 4; 1 gộp) · vòng 22: 5 · vòng 23: 3 · vòng 24: 2 (từ 3; 1 gộp) · vòng 25: 3 (từ 4; 1 gộp) · **vòng 26: 0 (từ 3; cả 3 gộp)** · vòng 27: 3 (từ 4; 1 gộp) · vòng 28: 3 · vòng 29: 1 · vòng 30: 0 (từ 1; gộp) · vòng 31: 8 · vòng 32: 9 (từ 11; 2 gộp) · vòng 33: 7 (từ 9; 2 gộp) · vòng 34: 6 (từ 8; 2 trùng hẳn bài đã có) · vòng 35: 6 (từ 7; 1 trùng hẳn) · vòng 36: 5 · vòng 37: 4 (từ 5; 1 gộp) · vòng 38: 10 (từ 11; 1 gộp) · vòng 39: 9 · vòng 40–43: 13 (6 gộp) · vòng 44: 7 (từ 8; 1 gộp) · vòng 45: 10 · vòng 46: 7 (từ 8; 1 gộp) · vòng 47: 8 · vòng 48: 6 (từ 7; 1 gộp) · vòng 49: 7 (từ 9; 2 gộp) · vòng 50: 7 · vòng 51: 3 (từ 5; 2 gộp) · vòng 52: 4 (từ 6; 1 gộp, 1 NEEDS-RESEARCH) · vòng 53: 3 (từ 5; 2 gộp) · vòng 54: 5 · vòng 55: 2 (từ 4; 2 gộp) · vòng 56: 3 (từ 5; 2 gộp) · vòng 57: 5 · vòng 58: 3 (thêm 2 ý tưởng bị bỏ trước khi đề xuất vì đã có bài) · vòng 59: 4 · vòng 60: 4 (từ 6; 2 gộp) · vòng 61: 3 (từ 4; 1 gộp) · vòng 62: 3 (từ 4; 1 gộp) · **vòng 63: 1 (từ 3; 2 gộp)** · **vòng 64: 1 (từ 3; 2 gộp)** · vòng 65: 2 (từ 3; 1 gộp) · vòng 66: 5 · vòng 67: 5 · vòng 68: 5 · vòng 69: 5 · vòng 70: 4 (từ 5; 1 gộp) · vòng 71: 2 (từ 4; 2 gộp) · vòng 72: 3 (từ 5; 2 gộp) · vòng 73: 3 · vòng 74: 3 · vòng 75: 1 (từ 3; 2 gộp) · **vòng 76: 0 (từ 3; cả 3 gộp)** · vòng 77: 2 (từ 3; 1 gộp) · vòng 78: 3. Các ý tưởng bị gộp ghi trong `topic-matrix.jsonl` (`mergeInto`), chưa đụng tới bài đã xuất bản: T001248 → `chay-am-may-truoc-khi-di-can-khong`, T001254 → `kich-thuoc-xe`, T001269 → `chan-chong-xe-may-long-hoac-yeu`, T001276 → `xe-tay-ga-ro-ga-khong-len-toc-do`, T001277 → `he-thong-danh-lua-xe-may`, T001283 → `thay-lop-xe-may-can-kiem-tra-gi`; từ vòng 11: T001288 → `nuoc-lam-mat-xe-may-vai-tro-va-cach-kiem-tra`, T001291 → `xe-may-bi-ro-xang-xu-ly-an-toan`, T001292 → `ve-sinh-hong-ga-xe-phun-xang`, T001309 → `bo-sac-xe-may-dien-bi-hong-dau-hieu-nhan-biet`, T001311 → `dung-dien-thoai-va-tai-nghe-khi-di-xe-may`, T001317 → `lop-khong-sang-tubeless-la-gi`, T001321 → `giam-xoc-xe-may-cham-soc-va-dau-hieu-yeu`, T001331 → `lop-xe-may`, T001336 → `den-phanh-xe-may-khong-sang`, T001337 → `xe-may-dien-khong-len-nguon-kiem-tra-gi`, T001338 → `bo-sac-xe-may-dien-bi-hong-dau-hieu-nhan-biet`, T001339 → `bo-thang-phanh-tang-trong-mon`, T001341 → `xe-may-keu`, T001348 → `ep-xe-dung-cach`; từ vòng 31: T001359 → `lop-xe-may`, T001363 → `bao-ve-xe-may-duoi-nang-nong`, T001371 → `xe-may-dien-bi-giat-hoac-yeu-di-khi-van-ga`, T001373 → `di-xe-may-qua-duong-ngap`, T001382 → `co-nen-tat-may-xe-may-khi-dung-den-do-hoac-cho-lau`, T001383 → `xe-cu-bi-chinh-cong-to-met`, T001391 → `xe-mat-dien`, T001397 → `phu-tung-thay-the-xe-may-co-nen-dung`, T001406 → `thay-ma-phanh-xe-may-thoi-diem-va-cach-kiem-tra`; từ vòng 40: T001424 → `chuan-bi-di-phuot`, T001429 → `checklist-chuyen-duong-dai-xe-may`, T001436 → `ve-sinh-va-bao-quan-mu-bao-hiem`, T001437 → `phanh-tai-tao-xe-may-dien-la-gi`, T001438 → `pin-va-sac-xe-may-dien-nhung-dieu-can-biet`, T001439 → `phanh-dia-xe-may-keu-rit`, T001448 → `xe-may-dien-bat-nguon-la-chay-duoc-che-do-do-va-tranh-van-ga-nham`, T001460 → `xe-may-sa-lay-thoat-khoi-bun-va-cat`, T001475 → `chong-trom-xe-may-meo-va-thiet-bi`, T001485 → `yen-va-cop-xe-may-khong-mo`, T001486 → `sac-xe-dien`, T001500 → `pin-va-sac-xe-may-dien-nhung-dieu-can-biet`, T001502 → `tra-tram-sac`, T001503 → `tai-lieu-ky-thuat-xe`; từ vòng 53: T001509 → `tu-thay-dau-may-xe-may-tai-nha`, T001513 → `xe-di-lam`, T001520 → `bao-duong-xe-may-dien-nhung-hang-muc-van-phai-lam`, T001521 → `lai-xe-sau-khi-dung-thuoc-luu-y`, T001523 → `nhat-ky-bao-duong-xe-may`, T001526 → `huong-dan-xe-dien`, T001542 → `lop-xe-may-nut-chan-gai`, T001545 → `kiem-tra-siet-oc-xe-may-dinh-ky`, T001549 → `do-xe-may-tren-le-doc-an-toan`, T001553 → `chuan-bi-ban-xe-may-cu`, T001554 → `di-xe-may-qua-khu-cho-luu-y`, T001556 → `di-xe-may-gap-o-to-dang-lui-xu-ly`, T001557 → `chay-ra-xe-may-dung-cach`, T001559 → `phong-chay-xe-may-nguyen-nhan-va-dau-hieu`, T001562 → `ky-thuat-di-xe-may-ban-dem`; từ vòng 70: T001586 → `lai-xe-duong-mua`, T001590 → `sac-xe-dien`, T001591 → `sac-xe-dien`, T001594 → `cho-do-nang-tren-xe-may-an-toan`, T001596 → `phong-bi-giat-dien-thoai-tui-xach-khi-di-xe-may`, T001603 → `gui-xe-may-nhieu-ngay-o-bai-san-bay-ben-xe-hay-nha-ga-chuan-bi-va-kiem-tra-khi-lay`, T001605 → `huong-dan-xe-dien`, T001606 → `xe-may-keu`, T001607 → `yen-va-cop-xe-may-khong-mo`, T001608 → `den-canh-bao-tren-xe-may-hieu-va-xu-ly`, T001611 → `de-xe-noi-am`.

**Bài học thêm từ vòng 1–10:**
6. *Gợi ý tự động hoàn thành của công cụ tìm kiếm chỉ giúp tìm cách người dùng diễn đạt câu hỏi và khoảng trống kho; nó KHÔNG phải nhu cầu đo được.* Các topic dùng nguồn này vẫn mang `evidence: editorial-gap`, `unverified`, `demand` bỏ trống (không ghi số lượng tìm kiếm nào). Một số truy vấn thương mại hoặc pháp lý (giá, mức phạt, thủ tục) bị loại vì phải có dữ kiện đã xác minh.
7. *Census từ vựng trước, đọc thân bài sau.* Đếm số bài đã xuất bản chứa một cụm từ cho biết nhanh cụm nào chưa có bài; nhưng regex gộp nhiều cụm bằng `|` dễ cho kết quả lớn giả. Ba lần, ý tưởng có vẻ mới lại đã nằm trọn trong một H2 của bài cũ (chạy ấm máy, thử chạm chân khi chọn xe, chiều quay lốp) và chỉ lộ ra khi đọc H2 của láng giềng; cả ba bị gộp thay vì viết lại.
8. *Liên kết chéo giữa các lô phải trỏ tới bài đã PUBLISHED.* Gate G7 từ chối `related` trỏ tới bài sẽ xuất bản ở lô sau; liên kết chéo chỉ gắn giữa các bài cùng một lô push (≤ 10 ID), còn liên kết sang bài ở lô khác phải đợi bài đó PUBLISHED.
9. *Đừng duyệt vòng mới khi bot commit của lô trước chưa về.* `factory-publish.yml` ghi `matrix.json`, `checkpoint.json`, `factory-state.json`; commit duyệt cục bộ chạm cùng các tệp nên rebase xung đột. Cách làm đúng: đợi bot commit, `git pull --rebase`, rồi mới `topic-approve`. Nếu vẫn xung đột: hai con trỏ trạng thái lấy bản của commit đang áp dụng (mới hơn), `matrix.json` hòa hai khối, rồi chạy `check-state`, `verify-invariant`, `topic-check --recheck`.
10. *Không sửa module bài đã PUBLISHED chỉ để thêm liên kết chéo:* sửa một bài đã xuất bản cần HTML sinh lại và nằm ngoài phạm vi lô; liên kết một chiều từ bài mới sang bài cũ là đủ.

**Bài học thêm từ vòng 11–30:**
11. *Cổng từ vựng mù trước biến thể chính tả.* Bài `lop-khong-sang-tubeless-la-gi` viết “săng” thay vì “săm” nên ý tưởng “lốp không săm và lốp có săm” được cổng cho ACCEPT, chỉ khi đọc H2 láng giềng mới thấy đã có cả hai bài (`lop-khong-sang-tubeless-la-gi`, `lop-khong-sang`). Census cần thử cả biến thể (săm/săng, xéc/séc, bô bin/mobin) và đọc H2, không tin riêng điểm gate.
12. *Một số ý tưởng bị NEEDS-RESEARCH chỉ vì từ ngữ* (công suất, thông số, tiêu hao, quy định, mô-men) dù bài là `no-figures`. Cách xử lý: đổi từ ngữ trong tệp ứng viên để nói đúng điều bài sẽ làm (không đưa thông số), rồi chạy lại cổng; **không** bỏ qua cổng và không ghi `evidence: verified`. Bài vẫn bị ràng buộc `factualScope: no-figures` và `scan-draft` cấm chữ số.
13. *Họ bài cùng khuôn.* Các bài “… rạn, phồng hoặc rò” (ống dẫn dầu phanh, ống nước làm mát), “… cong, lỏng hoặc gãy” (gác chân, ghi-đông, cần số, chắn bùn) có điểm trùng từ vựng cao nhưng đối tượng khác nhau. Quy tắc dùng: cùng đối tượng thì gộp, khác đối tượng thì chấp nhận nhưng writer phải viết đặc thù của đối tượng, không sao chép bố cục bài trước; coordinator theo dõi để không biến thành hoán vị mẫu.
14. *Đo nhu cầu bằng công cụ từ khóa cho thấy trần của nguồn topic.* Truy vấn `research_keywords` (Việt Nam, tiếng Việt) trả số đo thật: các truy vấn kỹ thuật dài như “xe tay ga bị hụt ga khi tăng tốc” chỉ ở mức vài trăm mỗi tháng và đã có bài; các truy vấn lớn nhất là pháp lý và hành chính (phạt nguội, biển số, nồng độ cồn) cần dữ kiện đã xác minh nên không viết. Các số đo này **không** được ghi vào trường `demand` (chỉ nhận GSC hoặc site-search).
15. *Vòng 26 có 3/3 ý tưởng bị gộp và vòng 30 là 0/1,* tín hiệu rõ nhất rằng vùng chi tiết cơ khí và điện đã bão hòa; phần còn lại là thao tác người lái (dựng xe, nâng xe dậy, lùi xe) và thuật ngữ, mỗi vòng chỉ vài bài. Quy trình đúng vẫn là đợi bot commit rồi mới `topic-approve` (bài học 9): một lần duyệt trước khi kéo commit bot về gây xung đột `matrix.json`, đã giải bằng cách giữ khối của bot rồi thêm ba slot mới, sau đó `check-state`, `verify-invariant` và `topic-check --recheck` xanh.

**Bài học thêm từ vòng 31–39:**
16. *Cổng từ vựng có thể ACCEPT cả ý tưởng trùng hẳn bài đã có.* Ba ý tưởng (tắt máy khi chờ đèn đỏ, xe cũ bị chỉnh công-tơ-mét, xe mất điện) được ACCEPT vì tiêu đề bài cũ dùng từ khác; census bằng regex cũng bỏ sót vì diễn đạt khác. Chỉ đọc tiêu đề và H2 của láng giềng mới lộ ra, nên đọc láng giềng là bước bắt buộc trước mọi `topic-approve`, kể cả khi gate không cảnh báo.
17. *`requiredReview` đổi sau mỗi lô xuất bản* vì bài vừa lên trở thành láng giềng gần nhất. Luôn đợi bot commit, đồng bộ, tạo lại tệp duyệt bằng `make-approvals.js`, đối chiếu danh sách láng giềng mới với những bài đã đọc (đọc thêm bài mới nếu có), rồi mới `topic-approve`.
18. *Bot commit ghi ID theo thứ tự ngẫu nhiên* (“publish lite batch S01298,S01299,S01300,S01296,…”): bộ chờ phải so khớp bằng biểu thức chứa bất kỳ ID nào của lô, không so khớp chuỗi bắt đầu bằng ID đầu tiên. Không dùng `pkill -f` với mẫu có trong chính dòng lệnh đang chạy, vì lệnh sẽ tự hủy.
19. *Writer có thể dừng giữa chừng vì giới hạn phiên của công cụ.* Ở vòng 38, ba writer dừng sau khi đã ghi xong tệp nhưng chưa kịp gửi báo cáo. Coordinator không viết lại mà kiểm tra tệp bằng `scan-draft` và `check-slice`, đọc toàn văn những bài thiếu báo cáo “khẳng định kém chắc chắn”, rồi mới đưa vào lô.
20. *Sửa bản nháp, không sửa bài đã xuất bản.* Khẳng định lệch phát hiện trong lúc rà được sửa ngay trên bản nháp (đường cắt sáng của đèn pha, màu tấm phản quang). Bài đã PUBLISHED thì để nguyên cho đợt audit SEO của chủ repo, chỉ ghi lại việc cần xem: `cho-do-nang-tren-xe-may-an-toan` mô tả thùng hộp gắn sau là “khối lượng nằm thấp”, trái với nguyên tắc đồ nặng đặt thấp và gần giữa xe.
21. *Tỷ lệ chấp nhận tăng lại khi đổi họ chủ đề.* Từ vòng 31, ý tưởng lấy từ tình huống đường (rạp cưới và đám tang, đường lát đá, lề đường bị hẫng), phụ kiện (kẹp điện thoại, áo trùm, thùng sau, bao tay) và thói quen sử dụng (đeo kính, đưa xe vào nhà, phòng giật đồ) thay vì chi tiết cơ khí đã bão hòa; mỗi vòng giữ 4–10 bài sau khi đọc láng giềng.

**Bài học thêm từ vòng 39–52:**
22. *Bước CI mới phải có trong diễn tập.* Khi chủ repo gộp P0-02, `factory-publish.yml` thêm `index-refresh <ID> --role coordinator` và `index-check` (manifest phải phủ đủ mọi ID PUBLISHED) trước khi commit; diễn tập được thêm đúng hai lệnh đó, và mọi lô sau đó qua CI ngay lần đầu.
23. *Writer dừng vì giới hạn phiên vẫn có thể đã ghi xong tệp.* Ở vòng 47–48, bảy writer báo lỗi giới hạn phiên; năm trong số đó đã ghi tệp đầy đủ. Coordinator kiểm tra từng tệp bằng `scan-draft`, đọc toàn văn, chỉ giao lại hai slot thật sự trống sau khi giới hạn hết hạn.
24. *Census theo cụm động từ dễ bỏ sót; hãy liệt kê tiêu đề chứa danh từ chính.* Ý tưởng “yên xe không mở được” qua census vì regex tìm “mở yên, khóa yên” trong khi bài cũ viết “Yên và cốp xe máy không mở được”; chỉ đọc láng giềng mới thấy và ý tưởng bị gộp.
25. *Gợi ý từ khóa chỉ dùng để tìm cách người dùng hỏi.* Các truy vấn sức khỏe (sau sinh), quyền riêng tư (thiết bị định vị lén) và sinh hoạt (cầm ô, khẩu trang, áo chống nắng) mở ra họ chủ đề mới; truy vấn pháp lý, giá, đời xe bị bỏ. Không số đo nào từ công cụ được ghi vào `demand`; một ý tưởng (số tròn và số quốc tế) bị cổng đánh NEEDS-RESEARCH và được để nguyên, không ép duyệt.

**Bài học thêm từ vòng 53–65:**
26. *Census phải thử danh từ cốt lõi và mọi cách viết, rồi vẫn phải đọc láng giềng.* 15 ý tưởng ở vòng 53–65 được cổng cho ACCEPT nhưng bị gộp sau khi đọc tiêu đề và H2 láng giềng: bài cũ dùng những từ mà census ban đầu không thử (“chạy rà”, “khu chợ”, “dùng thuốc”, “đường hầm”) hoặc chính tả khác (“va quẹt” và “va quệt”). Danh sách census nay luôn gồm danh từ chính, từ đồng nghĩa và biến thể chính tả.
27. *Ý tưởng bị REWRITE được sửa rồi đề xuất lại bằng `topic-propose --update`, không đi vòng cổng.* T001534 bị đánh `keyword-not-in-title-or-outline`; đổi `primaryKeyword` sang cụm có thật trong tiêu đề (“người ăn vạ”) và chạy lại cổng thì được ACCEPT.
28. *Mọi slug trong `related` được kiểm với `matrix.json` trước `verify-batch`.* Slug gõ theo trí nhớ (`chon-mu-bao-hiem`, `ac-quy-xe-may-yeu-dau-hieu`, `nang-xe-may-day-sau-khi-bi-do`) không tồn tại; kiểm từng slug và thay bằng slug thật của bài đã PUBLISHED (`mu-bao-hiem-dat-chuan-cach-chon`, `ac-quy-xe-may`, `nang-xe-may-day-sau-khi-bi-do-an-toan-cho-nguoi-va-xe`).
29. *Đổi họ chủ đề chỉ kéo dài được một thời gian.* Các họ tình huống đường, người dùng đặc thù (nghe kém, mù màu), sinh vật trong xe và phụ kiện gắn thêm cho 3–5 bài mỗi vòng ở vòng 53–62, rồi tụt còn 1–2 ở vòng 63–65. Không có cách nào nâng tỷ lệ này mà vẫn giữ luật không hoán vị và không bịa dữ kiện.

**Bài học thêm từ vòng 66–78:**
30. *Census phải nhìn cả topic đã bị gộp hay từ chối, không chỉ bài đã xuất bản và topic đang chờ.* T001605 (chuyển từ xe xăng sang xe máy điện) trùng ý tưởng T001526 đã gộp vào `huong-dan-xe-dien` từ vòng 53; census khi đó lọc bỏ topic REJECTED nên không thấy. Công cụ census nay in mọi topic khớp kèm trạng thái và `mergeInto`, để ý tưởng đã từng bị gộp không quay lại.
31. *H2 trong trang mẫu xe hay trang thuê xe vẫn là láng giềng.* Ý tưởng chuyển từ xe số sang xe tay ga và tập đi xe côn tay đã có H2 tương ứng trong các trang mẫu xe và bài kỹ thuật bóp côn, nên bị bỏ trước khi đề xuất; ý tưởng đi đường dài bằng xe tay ga được duyệt vì trang thuê một mẫu xe chỉ nói về mẫu đó, còn bài mới viết cho mọi xe tay ga và chỉ dẫn sang bài sự cố.
32. *Gợi ý tự động hoàn thành ở vòng 77–78 chủ yếu trả về truy vấn pháp lý và giá* (mức phạt, giấy tờ, bảo hiểm, giá sửa); phần còn lại phần lớn đã có bài. Vòng 76 là vòng thứ hai có 0 ý tưởng được nhận (sau vòng 26 và 30). Bộ lọc của bộ chờ CI cũng phải khớp đúng ID của lô: mẫu `S0147` khớp nhầm bot commit của lô trước (chứa S01472), nên bộ chờ dùng ID cuối của lô hiện tại.

**Giới hạn của cách làm hiện tại.** Nguồn topic độc lập là nút cổ chai: các ý tưởng tự nghĩ ra có tỷ lệ chấp nhận chỉ khoảng 40% sau khi đọc láng giềng (pilot: 39 ACCEPT, 50 MERGE-CANDIDATE, 11 NEEDS-RESEARCH trên 100 ý tưởng; ở vòng 5–10 chỉ còn 2–5 ý tưởng mỗi vòng; ở vòng 11–30 từ 0 đến 8; ở vòng 31–39 từ 4 đến 10 sau khi đổi họ chủ đề; ở vòng 40–52 từ 3 đến 10; ở vòng 53–65 từ 1 đến 5; ở vòng 66–78 từ 0 đến 5), và kho nội dung kiến thức chung đã khá dày (754 bài ngoài hub `thue-xe/xe-may` sau vòng 38). Mốc 20.000 bài không thể đạt bằng topic độc lập và an toàn về dữ kiện: capacity là trần cấu hình, không phải mục tiêu phải lấp bằng hoán vị. Tăng tiếp phải đến từ (a) dữ liệu nhu cầu thật (GSC, mục 7), (b) dữ kiện đã xác minh cho chủ đề địa phương/giá/luật, hoặc (c) đợt “scout” có đối chiếu SERP (evidence `serp-review`, trạng thái `unverified`, chỉ chứng minh câu hỏi có thật, **không** chứng minh lượng tìm kiếm). Không có đường nào trong ba đường này được phép bịa số.
