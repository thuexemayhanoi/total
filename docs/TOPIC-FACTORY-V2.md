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
| Kiểm chứng? | `node factory/test-topic-v2.js` (286 assert, 4 tầng) + `node factory/factory.js topic-check --recheck`. |

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
**chưa có bài** và hub **đông + trùng intent**. Trạng thái 2026-10-12: 782 bài / 545 intent riêng biệt trong từng hub; 19/97 hub trống; `thue-xe/xe-may`
có 266 bài nhưng chỉ 36 intent (tỷ lệ trùng 7,39; 98% tiêu đề template).

### Nguồn hợp lệ để mở rộng (không phải hoán vị)

1. **Truy vấn Search Console** thật (`topic-import` → lead GAP/NEARBY/COVERED) — nguồn nhu cầu duy nhất được ghi vào `demand`.
2. **Tìm kiếm nội bộ** (site-search) có số liệu và kỳ báo cáo.
3. **Khoảng trống hub** (19 hub chưa có bài) — topic do biên tập đề xuất, vẫn qua gate + đọc láng giềng.
4. **Nguồn đã xác minh**: văn bản pháp luật hiện hành, tài liệu chính hãng, dữ liệu mẫu xe (mỗi mẫu xe có thông số thật là thông tin độc lập) — cần `evidence.status=verified`.
5. **Dữ liệu địa phương đã xác minh** (`evidence.type=local-source`) — địa danh đơn thuần không tạo thông tin mới.

Kỳ vọng thực tế (đo được): trong pilot, **43/100** ý tưởng tự biên tập là độc lập sau hai lượt đọc láng giềng. Với lĩnh vực đã có 782 bài, đạt 40.000 URL
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

## 12. Kiểm thử — `factory/test-topic-v2.js` (286 assert)

| Tầng | Nội dung |
|---|---|
| 1. Unit | intent key & hoán vị, phủ định, risk trigger (không dương tính giả), shape, gate trên corpus tổng hợp (từng mã), precedence/`addReason` chỉ làm chặt hơn, governance (absent/hỏng/off/rollback), matrix (validate, invariant, effective lifecycle, JSONL I/O), CSV |
| 2. Integration | micro-repo trong tmp (engine thật + corpus giả lập): backfill → audit read-only → propose (dry-run, role, file lỗi, `--review` fail-closed, idempotent) → neighbours → approve (mọi đường từ chối, atomic, `--file`, trần queue) → writer-pack (chỉ APPROVED, brief, `--shard`) → verify-batch từ chối slot chưa duyệt → queue-refill frozen → reject/merge/reopen → topic-import → **rollback**; tiêu đề công khai (audit/backfill/coverage/writer-pack dùng `module.title`, `--refresh-published`) |
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
