# Topic Factory — báo cáo audit 2026-10-12

> Phạm vi: **đo** bài đã xuất bản (nội dung không bị sửa trong lúc đo). Số liệu sinh bằng `node factory/factory.js topic-audit --md` và `topic-coverage` (deterministic, đọc `matrix.json` + `factory/data/articles/`);
> không dùng keyword/volume/ranking giả định — **không có dữ liệu Search Console nào trong phiên làm việc này**, nên mọi “rủi ro cannibalization” dưới đây suy ra từ cấu trúc, chưa phải từ hiệu suất tìm kiếm.

> **Đính chính (2026-10-12, cùng ngày).** Bản audit đầu đo bài đã xuất bản bằng `slot.title` (nhãn lúc lập kế hoạch) thay vì tiêu đề công khai `module.title` — thứ generator thật sự render ra H1/breadcrumb/thẻ bài.
> 63 slot đã lệch vì writer sửa tiêu đề trong module. Công cụ đã sửa (audit, backfill, coverage và gợi ý related của writer-pack dùng `module.title`; có test hồi quy) và đo lại. Thay đổi trên cùng 782 bài:
> tiêu đề template **592 → 559**; lỗi tiêu đề **92 → 89** với detector cũ (ba lỗi “lặp từ” chỉ nằm ở nhãn slot, module đã sửa từ trước; cả 89 còn lại là địa danh viết thường) — rồi mở rộng detector bằng bảng tên riêng dùng chung (`factory/lib/title-case.js`) thì thấy thêm **108** tiêu đề công khai viết thường tên riêng/viết tắt (hãng/mẫu xe, Việt Nam, TP HCM, ABS/CVT…): tổng **197**, tất cả đã sửa; cụm intent ≥ 2 bài **51 → 46** (310 → 296 bài);
> intent riêng biệt trong từng hub **545 → 550**; `thue-xe/xe-may` **36 → 38 intent** (trùng 7,39 → 7,0). **Phán quyết gate của 300 slot chờ không đổi** (đã kiểm từng slot: 0 khác biệt). Các số dưới đây là số đã đính chính, đo trên 793 bài (782 + 11 bài lát cắt V2).

## Kết luận chính

1. **Nguyên nhân gốc là cơ chế sinh topic**, không phải chất lượng từng bài: V1 nhân *hạt giống × 12 góc × 6 bối cảnh* (443 hạt giống / 97 hub ⇒ 31.896 topic). `plannedTarget` 16.000 là phần cắt từ kho hoán vị đó chứ không xuất phát từ nhu cầu.
2. **300 slot đang chờ** (slot S00783–S01082, do `queue-refill` sinh) chỉ chứa **35 intent thật**; phân loại: **KEEP 0 · REWRITE 9 · MERGE-CANDIDATE 78 · REJECT 199 · NEEDS-RESEARCH 14**.
   Tức 92% (277/300) là hoán vị của một slot khác hoặc của bài đã xuất bản.
3. **Bài đã xuất bản (793)**: 562 (71%) mang tiêu đề do template sinh; có **46 cụm intent ≥ 2 bài** (chứa 296 bài). Độ giống nội dung giữa hai bài cùng intent trung vị 0,13 (khác intent: 0,05) và
   trùng cụm 5 từ gần như bằng 0 ⇒ **không có sao chép văn bản; vấn đề là trùng ý định tìm kiếm** (nhiều bài trả lời cùng một câu hỏi bằng chữ khác nhau).
4. **Mất cân bằng theo hub** (`topic-coverage`): 793 bài chỉ có 561 intent riêng biệt trong từng hub; `thue-xe/xe-may` có **266 bài nhưng 38 intent** (trùng 7,0 lần, 98% tiêu đề template) trong khi **14/97 hub chưa có bài nào**
   (19 lúc audit đầu; 5 hub được lát cắt V2 lấp): 4/8 hub `garage/*`, 4/7 hub `market/*`, 5/7 hub `review/*` và `map/diem-thi-bang-lai`.
5. **Lỗi tiêu đề**: 197 tiêu đề công khai viết thường tên riêng — 89 địa danh (Hà Nội, Sài Gòn, Đà Nẵng, Hải Phòng, Cần Thơ) và 108 hãng/mẫu xe/Việt Nam/TP HCM/miền Bắc/viết tắt (vd. “Thuê honda vision” ×72, “abs”, “cvt”) — **đã sửa** ngày 2026-10-12 (20 lô ≤ 10 bài qua CI; chỉ đổi chữ hoa/thường của trường `title`: H1/breadcrumb/thẻ bài; slug/URL/`seoTitle`/nội dung giữ nguyên). Detector hiện báo 0; `verify-batch` nhắc (không chặn) khi tiêu đề mới còn tên riêng viết thường.
6. **Rủi ro dữ kiện**: nhiều slot chờ chứa chủ đề giá/pin/thông số/luật (`needs-verified-data` xuất hiện ở 135/300 slot) mà không có nguồn xác minh — viết ra sẽ buộc phải bịa hoặc nêu số chung chung.
7. **Bài học thiết kế**: bộ lọc từ vựng/thống kê **bắt được hoán vị template và bản sao gần nguyên văn** nhưng **bỏ sót câu hỏi giống nhau khác từ ngữ** — điều đó chỉ lộ ra khi đọc láng giềng (xem [báo cáo pilot](TOPIC-PILOT-V2-REPORT.md)).

### Các hub đông nhất (trích `topic-coverage`)

```
hub                               bài  intent  trùng  mẫu%  chờ  nghiên-cứu  duyệt
thue-xe/xe-may                    266      38      7    98    0          0      0
ride/an-toan-giao-thong            41      41      1    20    0          0      0
tips/meo-lai-xe                    32      32      1    19    0          0      0
learn/ky-thuat-lai-xe              20      20      1    10    1          0      0
guide/xu-ly-su-co                  16      16      1    38    0          0      0
learn/cham-soc-xe                  13      13      1    15    0          0      0
wiki/dien-xe                       12      12      1    50    1          0      0
wiki/thuat-ngu-xe                  12      12      1    42    0          0      0
```

Danh sách 14 hub trống và công cụ đầy đủ: `node factory/factory.js topic-coverage`.

### Việc đã làm / chưa làm với kết quả audit

| Việc | Trạng thái |
|---|---|
| Đóng băng sinh topic V1 (`v1Generation: frozen`) | **Đã làm** (có rollback) |
| 300 slot legacy: ghi quyết định vào `topic-matrix.jsonl` (277 REJECTED, 9 PLANNED/REWRITE, 14 RESEARCH); slot trong `matrix.json` **giữ nguyên PLANNED** (writer không nhận vì chưa APPROVED) | **Đã làm**; xử lý slot trong matrix.json — *chờ duyệt* |
| Gộp/chuyển hướng/làm mới các cụm bài đã xuất bản trùng intent | **Không làm** — *chờ duyệt + dữ liệu GSC* (kế hoạch migration) |
| Sửa 197 tiêu đề công khai viết thường tên riêng (89 địa danh + 108 hãng/mẫu xe/viết tắt) | **Đã làm** (2026-10-12, theo yêu cầu khắc phục của chủ repo; 20 lô qua CI, URL không đổi) |
| Đo lại audit bằng tiêu đề công khai + sửa công cụ | **Đã làm** (đính chính ở đầu báo cáo) |

---

## Số liệu chi tiết (sinh tự động)

## 1. Nguyên nhân gốc

- `topic-factory.js` (V1) sinh topic bằng hoán vị **seed × 12 góc nhìn × 6 bối cảnh**: 443 seed trong 97 hub → **31,896 topic tiềm năng**. Mốc `plannedTarget` 16,000 là phần cắt từ kho hoán vị này, không phải từ nhu cầu tìm kiếm.
- Pool tĩnh `topic-pool.js` dùng 4 khung tiêu đề cố định (“Kinh nghiệm X dành cho người mới”, “Tổng hợp kiến thức: X”, “Hướng dẫn chi tiết về X”, “X — những điều cần biết”).

**562/793 bài đã xuất bản (71%) mang tiêu đề do template sinh**; 100% trong 300 slot đang chờ.

Họ tiêu đề trong ma trận hiện tại:

| Họ | Đã xuất bản | Đang chờ |
|---|---:|---:|
| F: tiêu đề viết tay / khác | 231 | 0 |
| E: V1 hoán vị "Seed: góc × bối cảnh" | 282 | 300 |
| A: "Kinh nghiệm X dành cho người mới" | 69 | 0 |
| D: "X — những điều cần biết" | 76 | 0 |
| C: "Hướng dẫn chi tiết về X" | 70 | 0 |
| B: "Tổng hợp kiến thức: X" | 65 | 0 |

## 2. 300 slot PLANNED

300 slot chỉ chứa **35 intent độc lập** (trung bình 8.6 biến thể/intent).

| Phân loại | Số slot |
|---|---:|
| KEEP | 0 |
| REWRITE | 9 |
| MERGE-CANDIDATE | 78 |
| REJECT | 199 |
| NEEDS-RESEARCH | 14 |

Mã lý do (một slot có thể có nhiều lý do):

| Verdict · lý do | Số slot |
|---|---:|
| REJECT · intent-cluster-queued | 112 |
| REJECT · context-only-variant | 87 |
| REJECT · needs-verified-data | 78 |
| REJECT · composite-aspects | 51 |
| MERGE-CANDIDATE · lead-subject-published | 42 |
| MERGE-CANDIDATE · needs-verified-data | 42 |
| MERGE-CANDIDATE · intent-cluster-published | 36 |
| NEEDS-RESEARCH · needs-verified-data | 14 |
| REWRITE · composite-aspects | 9 |
| REWRITE · needs-verified-data | 1 |

Theo họ hạt giống:

| Hạt giống | Slot | Verdict |
|---|---:|---|
| Giấy tờ thuê xe | 33 | REJECT 18, MERGE-CANDIDATE 12, REWRITE 3 |
| Kinh nghiệm thuê xe máy | 72 | REJECT 72 |
| Kiểm tra xe thuê | 72 | MERGE-CANDIDATE 24, REJECT 42, REWRITE 6 |
| Thuê xe điện | 72 | MERGE-CANDIDATE 24, NEEDS-RESEARCH 8, REJECT 40 |
| Pin xe điện | 51 | MERGE-CANDIDATE 18, NEEDS-RESEARCH 6, REJECT 27 |

## 3. Bài đã xuất bản (giữ nguyên, chỉ đo)

- 793 bài; **46 cụm intent có ≥2 bài**, chứa 296 bài.
- Độ giống nội dung (TF-IDF unigram+bigram) giữa hai bài **cùng intent**: {"n":1621,"p10":0.098,"p50":0.133,"p90":0.186,"p99":0.255,"max":0.327}; giữa hai bài **khác intent**: {"n":19869,"p10":0.04,"p50":0.053,"p90":0.092,"p99":0.148,"max":0.269}.
- Trùng cụm 5 từ giữa các bài cùng intent: {"n":3242,"p10":0,"p50":0.002,"p90":0.01,"p99":0.031,"max":0.088} ⇒ **không có dấu hiệu sao chép văn bản**; vấn đề là *trùng ý định tìm kiếm*, không phải trùng chữ.
- 8 cặp bài khác intent-key nhưng headline giống ≥0.40 (ví dụ bên dưới) — intent-key không bắt được, cần lớp similarity.

| Cụm intent | Bài | Cosine nội dung TB | Rủi ro cannibalization (theo kích thước cụm, chưa có GSC) |
|---|---:|---:|---|
| `thue¦` | 26 | 0.116 | high |
| `thue¦@ha noi` | 26 | 0.127 | high |
| `honda+thue+vision¦` | 25 | 0.136 | high |
| `thue¦paperwork` | 22 | 0.161 | high |
| `thue¦inspection` | 8 | 0.114 | high |
| `thue¦cost` | 6 | 0.129 | high |
| `thue¦contract` | 6 | 0.136 | high |
| `thue¦risk` | 6 | 0.135 | high |
| `thue¦compare` | 6 | 0.143 | high |
| `thue¦return` | 6 | 0.149 | high |
| `thue¦deposit` | 6 | 0.165 | high |
| `thue¦paperwork@ha noi` | 6 | 0.189 | high |
| `thue¦cost@ha noi` | 6 | 0.149 | high |
| `thue¦inspection@ha noi` | 6 | 0.129 | high |
| `thue¦contract@ha noi` | 6 | 0.166 | high |

Cặp khác intent-key nhưng headline giống cao:

- 0.51 — S00361 Kinh nghiệm xe SYM dành cho người mới ⇄ S00363 Hướng dẫn chi tiết về SYM Việt Nam
- 0.45 — S00369 Kinh nghiệm xe dưới 50cc cần bằng lái dành cho người mới ⇄ S00370 Quy định xe 50cc — những điều cần biết
- 0.45 — S00612 Thuê xe máy Hà Nội: chi phí và cách tính cho người mới ⇄ S00684 Thuê Honda Vision: chi phí và cách tính cho người mới
- 0.44 — S00701 Thuê Honda Vision: hợp đồng và điều khoản cần đọc theo tình huống thực tế ⇄ S00773 Giấy tờ thuê xe: hợp đồng và điều khoản cần đọc theo tình huống thực tế
- 0.42 — S00554 Thuê xe máy: hợp đồng và điều khoản cần đọc khi dùng dài ngày ⇄ S00626 Thuê xe máy Hà Nội: hợp đồng và điều khoản cần đọc khi dùng dài ngày
- 0.41 — S00324 Đọc thông số xe máy: hiểu con số nhà sản xuất công bố ⇄ S00454 Thông số xe máy — những điều cần biết
- 0.41 — S00563 Thuê xe máy: rủi ro thường gặp và cách tránh theo tình huống thực tế ⇄ S00641 Thuê xe máy Hà Nội: checklist từng bước theo tình huống thực tế
- 0.4 — S00540 Thuê xe máy: chi phí và cách tính cho người mới ⇄ S00684 Thuê Honda Vision: chi phí và cách tính cho người mới

Lỗi tiêu đề (tên riêng/viết tắt viết thường, lặp từ) trên tiêu đề công khai: **0**.


## 4. Ngưỡng đang dùng

```json
{
 "headlineHigh": 0.4,
 "headlineMid": 0.25,
 "outlineMid": 0.55,
 "maxPerIntentCluster": 1,
 "minTitleChars": 15,
 "maxTitleChars": 120,
 "minUserProblemChars": 30,
 "minGainChars": 60,
 "minDistinctGainTokens": 6,
 "minOutline": 4,
 "minOutlineHeadingChars": 8,
 "maxOutlineSelfSimilarity": 0.8
}
```
