# Chính sách lập chỉ mục theo bài (`factory/data/index-policy.json`)

> **TRẠNG THÁI HIỆN TẠI (2026-10-12, quyết định của chủ repo): `entries` RỖNG — toàn bộ trang và bài đều phải được lập chỉ mục, không để noindex.** 144 mục noindex của quyết định đầu tiên đã được gỡ (rollback: xóa mục + `node factory/generate.js`; 0 trang còn meta robots, `sitemap-articles.xml` đủ mọi bài PUBLISHED). Cơ chế (loader, validator, kiểm tra bất biến) được giữ nguyên và có test, nhưng agent KHÔNG được thêm mục khi chủ repo chưa ra lệnh mới. Phần dưới là hồ sơ lịch sử của quyết định đã gỡ.


> Công cụ để **hợp nhất ý định mà không xóa bài, không đổi URL, không redirect, không đổi canonical**.
> Chỉ chủ repo hoặc coordinator được thêm mục. Quyết định đầu tiên (2026-10-12) chạm **144 bài** trong `thue-xe/xe-may` — xem “Quyết định đầu tiên”.

## Cơ chế

| Thành phần | Hành vi |
|---|---|
| `factory/data/index-policy.json` | `{ "schemaVersion": 1, "entries": { "<slug>": { robots, reason, consolidatedInto?, decidedBy, decidedAt, family? } } }` |
| `factory/lib/indexing.js` | `load` (thiếu file ⇒ policy rỗng; **file hỏng ⇒ lỗi rõ ràng**), `validate`, `isNoindex`, `robotsFor` |
| Trang bài (`render.js`) | bài trong policy có đúng một dòng `<meta name="robots" content="noindex,follow">`; **mọi thứ khác trên trang giữ nguyên** (URL, canonical tự tham chiếu, JSON-LD, liên kết nội bộ, bài trước/sau, “bài liên quan”) |
| `sitemap-articles.xml` | chỉ chứa URL **muốn được lập chỉ mục**: bài noindex vắng mặt; mọi bài khác bắt buộc có mặt |
| Tìm kiếm trong site, chatbot | **không đổi**: người đọc vẫn tìm thấy và đọc được bài noindex |
| `robots.txt` | **không đụng** (quy tắc 6 AGENTS.md: không chặn nội dung công khai trong robots.txt; `noindex` bằng meta để công cụ tìm kiếm vẫn đọc được thẻ) |
| `verify-invariant`, `verify-pair`, `publish-*` | policy-aware: bài noindex phải **có** meta và **vắng** sitemap; bài thường phải **có** sitemap và **không** có meta; mục policy sai (không PUBLISHED, đích hợp nhất không PUBLISHED/cũng noindex, robots khác `noindex,follow`, thiếu lý do/người duyệt/ngày) ⇒ ĐỎ |
| Trần an toàn | tối đa **30%** số bài PUBLISHED (`MAX_SHARE` trong `indexing.js`); vượt ⇒ ĐỎ — muốn vượt phải đổi hằng số (quyết định của chủ repo) |

Rollback = **xóa mục (hoặc cả file) rồi `node factory/generate.js`**; trang và sitemap về đúng byte như trước (có test: `test-topic-v2.js` tầng 2c và `test-hardening.js` mục 8b).
Một thay đổi policy phải đi kèm HTML sinh lại trong cùng commit (`generate --check` và `verify-invariant` bắt lệch).

## Quyết định đầu tiên (2026-10-12): 144 bài hoán vị tên riêng trong `thue-xe/xe-may`

**Cơ sở phê duyệt.** Báo cáo ngày 2026-10-12 nêu cụm bài trùng ý định của hub thuê xe và hỏi cách xử lý khi chưa có dữ liệu Search Console; chủ repo trả lời: *“site mới ko có mấy thông tin console đâu / Duyệt / Tiếp tục hoàn thành workflow”*. Việc thực thi chọn dạng **nhẹ nhất và hoàn tác được** của “gộp”: `noindex,follow` + vắng sitemap. Không xóa, không redirect, không đổi canonical/URL/tiêu đề/nội dung.

**Phạm vi.**

| Họ | Bài (slot) | Hợp nhất vào |
|---|---|---|
| “Thuê xe máy Hà Nội: *góc* … *bối cảnh*” | 72 (S00600–S00671) | bài “Thuê xe máy: *góc* … *bối cảnh*” cùng đuôi tiêu đề (72 bài chung, S00528–S00599) |
| “Thuê Honda Vision: *góc* … *bối cảnh*” | 72 (S00672–S00743) | cùng 72 bài chung (mỗi bài chung nhận đúng 2 bài hoán vị) |

144/793 bài PUBLISHED ≈ 18,2% (trần 30%). **Vẫn lập chỉ mục:** 72 bài chung, 11 bài trụ cột của hub (gồm `kinh-nghiem-thue-xe-may-ha-noi` và `thu-honda-vision-ha-noi`, đại diện cho ý định Hà Nội/Honda Vision), 39 bài “Giấy tờ thuê xe” và mọi bài khác.

**Căn cứ (đo được, tái lập được).**

1. Chúng là hoán vị tên riêng của cùng một cặp *góc × bối cảnh* (12 góc × 6 bối cảnh × 3 “hạt giống” thuê xe máy / Hà Nội / Honda Vision). Đây đúng là mẫu “hạt giống × góc × bối cảnh” mà Topic Factory V2 cấm, và `docs/RENTAL-SEO.md` cấm tạo hàng loạt trang theo địa danh trong giai đoạn nền.
2. **Không phải bản sao chữ**: độ trùng 5-gram giữa bản hoán vị và bản chung chỉ khoảng 1% (Hà Nội: trung bình 0,010, tối đa 0,036; Honda Vision: 0,007, tối đa 0,027) — nên cổng chống trùng bằng chữ của V1/V2 không bắt được; kết luận trùng là về **ý định**, không phải về văn bản.
3. **Gần như không có thông tin riêng của tên riêng**: trong thân bài, “Hà Nội” xuất hiện trung bình 1,06 lần/bài (~1.500 từ), “Vision” 0,78 lần/bài. Đã đọc mẫu 14 bài (7 mỗi họ, so với bản chung cùng góc × bối cảnh): khoảng một nửa số bài mẫu không có câu nào nhắc riêng đến Hà Nội/mẫu xe ngoài tiêu đề; số còn lại chỉ có vài câu chung chung (“trong môi trường đông xe của Hà Nội…”, “với một chiếc xe tay ga phổ thông như…”). Không có dữ kiện kinh doanh đã xác minh (giá, điểm giao nhận, giờ mở cửa) nên không thể có nội dung riêng thật sự (quy tắc 4 AGENTS.md).
4. Tiêu đề hứa nội dung riêng nhưng thân bài không có ⇒ bản chung (tiêu đề đúng với nội dung) là đại diện trung thực hơn.

Tái lập số đo (chạy ở thư mục gốc repo):

```bash
node -e "
const I = require('./factory/lib/topic-intel');
const pol = require('./factory/data/index-policy.json').entries;
const by = new Map(require('./factory/generate').loadArticles().map(a => [a.slug, a]));
const avg = xs => (xs.reduce((s, x) => s + x, 0) / xs.length).toFixed(3);
for (const fam of ['ha-noi', 'honda-vision']) {
  const rows = Object.entries(pol).filter(([, e]) => e.family === fam).map(([slug, e]) => {
    const a = by.get(slug), g = by.get(e.consolidatedInto);
    const sa = I.shingles(I.articleText(a), 5), sg = I.shingles(I.articleText(g), 5);
    const noun = fam === 'ha-noi' ? /Hà Nội/g : /Vision/g;
    return { c5: Math.max(I.containment(sa, sg), I.containment(sg, sa)), body: (a.sections.map(s => s.h2 + ' ' + s.html).join(' ').match(noun) || []).length };
  });
  console.log(fam, 'n=' + rows.length, 'trùng 5-gram TB=' + avg(rows.map(r => r.c5)), 'tối đa=' + Math.max(...rows.map(r => r.c5)).toFixed(3), 'tên riêng trong thân bài TB=' + avg(rows.map(r => r.body)));
}"
```

## Rủi ro đã biết (nói thẳng)

* **Chưa có dữ liệu Search Console**: quyết định dựa trên phân tích nội dung và học thuyết SEO của chủ repo, không dựa trên hiệu suất thật. Site mới nên chưa có thứ hạng để mất, nhưng truy vấn đuôi dài kiểu “thuê Honda Vision … cho người mới” có thể từng do bài hoán vị bắt được; bài trụ cột và bài chung giữ phần lớn ý định đó.
* **Muốn thắng truy vấn Hà Nội/Honda Vision thật sự cần nội dung riêng đã xác minh** (giá, điểm giao nhận, đội xe, điều khoản) do chủ repo cung cấp — không thể bịa. Khi có dữ kiện đó, nên viết **một** bài thật cho mỗi ý định thay vì 72 hoán vị.
* Khi Search Console có số liệu (≥ 28 ngày): với từng URL noindex, nếu có impressions/click đáng kể hoặc trạng thái “Đã thu thập – hiện chưa lập chỉ mục” của bài chung cho thấy bài chung không đủ ý định ⇒ **xóa mục tương ứng** và generate lại. Mỗi mục độc lập nên hoàn tác từng bài được.
* Mở rộng policy sang hub khác hay vượt 30% là quyết định mới của chủ repo (test phạm vi trong `test-topic-v2.js` buộc cập nhật có chủ ý).

## Cách thêm / bỏ mục (coordinator)

1. Sửa `factory/data/index-policy.json` (đủ `robots`, `reason`, `decidedBy`, `decidedAt`; nên có `consolidatedInto` là bài PUBLISHED còn lập chỉ mục cùng hub).
2. `node factory/generate.js` rồi `node factory/generate.js --check`, `node factory/factory.js verify-invariant`.
3. Chạy bộ test trong AGENTS.md; commit policy + HTML sinh lại cùng nhau.
