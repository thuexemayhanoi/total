# Kế hoạch migration Topic Factory V2 — **chờ chủ repo duyệt**

> Phạm vi của tài liệu này: những việc **không** được tự làm vì chạm bài/URL đã xuất bản, kiến trúc sản xuất hoặc hạ tầng.
> Đã triển khai (an toàn, có rollback): lớp governance, gate, ma trận topic, duyệt có đọc láng giềng, đóng băng sinh topic V1 — xem [TOPIC-FACTORY-V2.md](TOPIC-FACTORY-V2.md).
> Không mục nào dưới đây xóa bài, đổi URL hay redirect trừ khi chủ repo ghi rõ “DUYỆT” cho đúng mục đó.

## Bảng quyết định

| # | Quyết định | Đề xuất | Rủi ro nếu làm | Rollback | Cần duyệt |
|---|---|---|---|---|---|
| M1 | 300 slot legacy `PLANNED` trong `matrix.json` | **Giữ nguyên** (writer đã không nhận được). Nếu muốn dọn: chuyển `BLOCKED` bằng lệnh có kiểm soát, không xóa, không tái dùng ID | thấp | khôi phục `matrix.json` từ git | có |
| M2 | Cụm bài đã xuất bản trùng intent (46 cụm / 296 bài — số đã đính chính theo tiêu đề công khai; cụm lớn: `thue¦` 26, `thue¦@ha noi` 26, `honda+thue+vision¦` 25) | **ĐÃ LÀM MỘT PHẦN 2026-10-12 theo “Duyệt” của chủ repo (site mới, chưa có dữ liệu Search Console):** 144 bài hoán vị tên riêng của `thue-xe/xe-may` (72 “Thuê xe máy Hà Nội” + 72 “Thuê Honda Vision”) → `noindex,follow` + vắng `sitemap-articles.xml`, hợp nhất ý định vào 72 bài chung cùng góc × bối cảnh. **Không** xóa/redirect/đổi URL/canonical/tiêu đề/nội dung/liên kết nội bộ; bài trụ cột và bài chung vẫn lập chỉ mục. Chi tiết, số đo và rủi ro: [INDEX-POLICY.md](INDEX-POLICY.md). Các cụm còn lại (~150 bài, chủ yếu là cụm khóa thô) **chưa động tới**; xem lại theo dữ liệu GSC khi có | cao → trung bình (chưa có thứ hạng để mất; bù bằng bài trụ cột + bài chung) | xóa mục trong `factory/data/index-policy.json` rồi `node factory/generate.js` (từng bài hoặc cả file) | đã duyệt (phần 144 bài); các cụm khác vẫn cần duyệt |
| M3 | 46 đề xuất MERGE-CANDIDATE của pilot | **Đa số không cần sửa gì**: ghi chú biên tập cho thấy bài đích đã trả lời trực tiếp câu hỏi (đã đọc thân bài). Chỉ 13/46 ghi chú nhắc tới phần thiếu nhỏ có thể bổ sung (lọc theo từ khóa trong `editorial.note`, cần người đọc lại từng ca). Nếu muốn làm: **theo lô ≤ 5 bài**, mỗi lô một commit, không số liệu chưa xác minh; chưa có số đo nhu cầu nên giá trị chưa chứng minh | thấp–trung bình | git revert | có |
| M4 | ~~92~~ **197** tiêu đề công khai viết thường tên riêng: 89 địa danh + 108 hãng/mẫu xe/Việt Nam/TP HCM/viết tắt (bản đầu đo trên nhãn slot với detector hẹp; 3 lỗi “lặp từ” chỉ nằm ở nhãn slot) | **ĐÃ LÀM 2026-10-12 theo yêu cầu khắc phục của chủ repo**: chỉ đổi chữ hoa/thường của trường `title` module (không sửa tay HTML) theo bảng `factory/lib/title-case.js`, 20 lô ≤ 10 bài qua CI; slug/URL/`seoTitle`/nội dung giữ nguyên; detector báo 0; `verify-batch` nhắc khi tiêu đề mới còn lỗi | trung bình (đổi H1) | git revert từng lô | đã làm |
| M5 | Hạ tầng cho quy mô lớn (sitemap, hub phân trang, search index, hosting) | Xem mục “Quy mô 40.000 URL” | cao | theo từng bước | có |
| M6 | Chuẩn hóa vòng dữ liệu GSC | Xuất CSV “Queries” hằng tháng → `topic-import`; lưu kết quả vào `demand` kèm kỳ báo cáo | thấp | — | có (cấp quyền truy cập GSC) |
| M7 | Rà soát độ tươi của nội dung luật/giá/thông số đã xuất bản | Thêm `verifiedAt` + lịch xác minh lại; dùng `NEEDS-RESEARCH` cho cập nhật | thấp | — | có |
| M8 | Trần năng lực (`capacity` 20.000, `plannedTarget` 16.000, 7 kho dự phòng 4.000) | Coi là **trần**, không phải chỉ tiêu; không `expand-capacity`; cân nhắc hạ `plannedTarget` bằng `set-planned-target` | thấp | `set-planned-target` | có |
| M9 | Mở hàng đợi writer ngoài lát cắt 11 topic đầu | Duyệt từng nhóm ≤ 10 sau khi lát cắt đầu publish + QA + đo | thấp | `topic-governance.json` | có |

## Quy mô 40.000 URL — những gì **chắc chắn** phải đổi (đo thật)

| Giới hạn | Số liệu | Hệ quả |
|---|---|---|
| Dung lượng HTML | 861 trang index.html ≈ **50,5 MB** ⇒ ~**58 KB/trang** | 40.000 trang ≈ **2,3 GB** |
| GitHub Pages | *site đã publish ≤ 1 GB*; *repo nguồn khuyến nghị ≤ 1 GB*; deploy timeout 10 phút; băng thông mềm 100 GB/tháng ([docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), truy xuất 2026-10-12) | chạm trần ở **~17.000 trang** nếu giữ 58 KB/trang và commit HTML vào repo |
| Sitemap | một file ≤ 50.000 URL hoặc 50 MB chưa nén; dùng sitemap index; Google bỏ qua `priority`/`changefreq`, chỉ tin `lastmod` nếu chính xác ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), truy xuất 2026-10-12) | tách `sitemap-articles.xml` thành nhiều file ≤ 10.000 URL + index; mỗi file riêng để theo dõi hiệu suất từng nhóm trong Search Console |
| `topic-matrix.jsonl` | 576 B/dòng bài đã xuất bản, ~3 KB/dòng topic đầy đủ ⇒ 23–120 MB ở 40.000 dòng | nén dòng đã xuất bản (bỏ outline/gain/láng giềng), chia shard active/archive; tránh file ≥ 50 MB |
| Chỉ mục gate trong bộ nhớ | 40.000 mục ≈ 1,5 GB heap, ~163 ms/lần đánh giá, dựng 20 s | cắt tỉa postings từ phổ biến hoặc truy vấn láng giềng bằng SQLite/FTS5; batch duyệt ≤ 50 |
| Build | `generate.js` sinh lại toàn bộ trang mỗi lần | build tăng dần (chỉ trang đổi) + kiểm `--check` theo phạm vi |
| Tìm kiếm phía client | `assets/js/search.js` đọc một chỉ mục | chia chỉ mục theo danh mục/hub hoặc dùng chỉ mục tĩnh phân mảnh |
| Trang hub | liệt kê toàn bộ bài của hub | phân trang hub (`/hub/trang/2/`), canonical đúng; breadcrumb + `BreadcrumbList` giữ nguyên |

**Quyết định kiến trúc cần chủ repo** (đây là thay đổi quy tắc AGENTS.md số 7 “HTML sinh ở thư mục root của repo”): hoặc (a) giảm ~58 KB/trang (CSS/JSON-LD/liên kết trùng lặp inline) để vừa 1 GB đến ~17k trang rồi dừng; hoặc (b) build trong CI và deploy
bằng artifact (không commit HTML) / chuyển sang CDN-object storage khi vượt ~15k trang. Đề xuất: **không làm gì trước khi vượt ~5.000 bài**; khi đó làm (b). Trước mốc đó giá trị lớn nhất nằm ở chất lượng và gộp trùng, không ở số URL.

## Chiến lược lập chỉ mục (khi có > 5.000 URL)

1. `sitemap.xml` là **sitemap index**; `sitemap-articles-N.xml` ≤ 10.000 URL, chỉ chứa trang **PUBLISHED**; `lastmod` lấy từ ngày sửa thật của bài (không bump hàng loạt).
2. Mỗi trang **self-canonical**; không tạo tham số/biến thể URL; trang gộp (nếu được duyệt) dùng canonical về bài chính — *GitHub Pages không có 301 máy chủ*, nên “redirect” thực chất là meta refresh + canonical, cần duyệt riêng. (M2 đợt đầu chọn `noindex,follow` + vắng sitemap thay vì canonical chéo: giữ trang tự tham chiếu, không tạo tín hiệu mâu thuẫn, hoàn tác bằng một thay đổi.)
3. Cấu trúc dữ liệu: `BreadcrumbList` mọi trang; `Article` đúng thuộc tính; không thêm schema không có nội dung tương ứng (FAQ chỉ khi có hỏi-đáp thật).
4. Không bao giờ đưa bản nháp/PLANNED vào sitemap hay robots (đã là quy tắc 6). **Không tự `noindex`** hàng loạt: chỉ qua `factory/data/index-policy.json` (coordinator thêm mục kèm lý do, người quyết định, ngày; trần 30%; hoàn tác bằng xóa mục) sau audit và duyệt của chủ repo — [INDEX-POLICY.md](INDEX-POLICY.md); khi có dữ liệu Search Console thì đối chiếu từng URL (impressions/click, trạng thái “Đã thu thập – hiện chưa lập chỉ mục”) để giữ hay bỏ mục.
5. Liên kết nội bộ: mỗi bài mới nhận 2–8 liên kết tới bài liên quan **đã xuất bản** (đã có kiểm tra `related ≥ 2`); hub giới thiệu bài quan trọng, không dump toàn bộ.
6. Theo dõi: gửi từng sitemap con vào Search Console; lập bảng “URL → hiệu suất” để giữ/cải thiện/gộp (M2, M3).

## Vòng phản hồi nhu cầu (M6/M9)

```
GSC “Queries” (CSV, 28 ngày) ──► topic-import ──► lead: GAP | NEARBY | COVERED
   GAP    → ứng viên topic (propose → gate → đọc láng giềng → approve)
   NEARBY → đọc bài gần nhất trước; mặc định cải thiện bài cũ
   COVERED→ kiểm vị trí/CTR của bài đã có; cải thiện nội dung/tiêu đề, KHÔNG tạo URL mới
Sau 28 ngày với bài mới: impressions/clicks → giữ · cải thiện · gộp
```

Chỉ khi dữ liệu thật cho thấy một nhóm chủ đề có nhu cầu và còn khoảng trống mới mở thêm queue (mỗi lần ≤ 10 topic). Không dùng suy đoán thay cho dữ liệu.

## Thứ tự thực hiện đề xuất

1. (Làm xong) governance + lát cắt 11 topic → kiểm chứng toàn bộ vòng đời trên production.
2. Xuất từ Search Console (Hiệu suất → Kết quả tìm kiếm → 3 tháng) bảng **Truy vấn** sang CSV (cột query/clicks/impressions) → `topic-import --file … --period a..b`; xuất thêm bảng **Trang** để đối chiếu từng URL trong cụm trùng ý định — công cụ gom theo URL sẽ làm khi có dữ liệu thật. Sau đó xác định cụm bài *thật sự* cạnh tranh (M2; đợt đầu 144 bài hoán vị đã noindex — đối chiếu từng URL đó với bảng **Trang**, xóa mục nào có hiệu suất). Lưu ý: cụm intent là tín hiệu thô — 28/46 cụm (203 bài) nằm trọn trong `thue-xe/xe-may` (26 cụm có đúng 6 biến thể đối tượng/hoàn cảnh); các cụm lớn nhất dùng khóa thô nên có thể gom cả bài khác chủ đề.
3. (**M4 đã làm 2026-10-12**: 197 tiêu đề công khai.) M3 chỉ làm nếu muốn: 13/46 ca có phần thiếu nhỏ, còn lại bài đích đã trả lời; theo lô ≤ 5 bài.
4. Chỉ khi vượt ~5.000 bài: M5 (sitemap index, phân trang hub, chỉ mục tìm kiếm phân mảnh, build tăng dần, nén dòng topic-matrix).
5. Đánh giá lại trần năng lực và `plannedTarget` (M8) theo dữ liệu nhu cầu.

## Cách nhận biết đã “xong” một mục

* Có commit riêng, `node factory/test-topic-v2.js`, các suite trong AGENTS.md và `node factory/factory.js topic-check --recheck` đều xanh.
* Không có thay đổi nào đối với URL đã xuất bản trừ khi mục tương ứng được ghi “DUYỆT”.
* Mọi số liệu trong báo cáo là số **đo được** (không có số Search Console giả định).
