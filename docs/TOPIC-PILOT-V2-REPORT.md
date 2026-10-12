# Pilot Topic Factory V2 — 100 topic ứng viên

> Mục tiêu: chứng minh hệ thống kiểm soát chất lượng **chạy đúng** trên một batch nhỏ có đối chứng với toàn bộ 782 bài đã xuất bản, trước khi cấp thêm queue cho writer.
> Dữ liệu gốc: `factory/data/topic-pilot-v2.jsonl` (ứng viên), `factory/data/topic-pilot-v2-review.json` (rà soát biên tập lượt 1), `factory/state/topic-matrix.jsonl` (kết quả, `source=v2-pilot`).

## 1. Kết quả

| | Số topic |
|---|---:|
| Ứng viên đưa vào | **100** |
| Qua gate từ vựng/hình dạng | 87 ACCEPT · 13 NEEDS-RESEARCH · **0 bị chặn trùng lặp** |
| Sau lượt đọc láng giềng #1 (H2 của 5 bài gần nhất) | 70 ACCEPT · 19 MERGE · 11 NEEDS-RESEARCH |
| Sau lượt đọc #2 (đọc nội dung bài đích) | **43 ACCEPT · 46 MERGE-CANDIDATE · 11 NEEDS-RESEARCH** |
| → **APPROVED** (lát cắt đầu tiên: 10 + 1 bài cặp bắt buộc, xem mục 4; có ack + xác nhận đã đọc láng giềng) | **11** |
| → ACCEPT đang chờ duyệt (writer **không** thấy) | 32 |
| → **REJECTED** (gộp vào bài đã có, không tạo URL) | **46** |
| → **NEEDS-RESEARCH** (thiếu nguồn xác minh) | **11** |

Cách đọc: *chỉ 43% ý tưởng tự biên tập là thực sự độc lập* sau khi đối chiếu với kho bài hiện có. Đây là phép đo thật về việc “nghĩ thêm tiêu đề” trong một lĩnh vực đã có 782 bài là con đường
sai để đạt hàng chục nghìn URL.

## 2. Ứng viên được tạo thế nào (nói rõ giới hạn)

* Do agent biên tập đề xuất, **nhắm vào khoảng trống quan sát được** (hub `garage/*`, `market/*`, `review/*` còn trống; chủ đề kỹ thuật/mua bán xe cũ/thủ tục), mỗi ứng viên có `userProblem`, `informationGain`, outline ≥ 4 H2, `contentType`.
* **Không có dữ liệu Search Console/site-search** ⇒ 100/100 có `demand.source=none`; không số nhu cầu nào được ghi; ưu tiên tối đa P1 (43 ACCEPT hiện tại: 28 P1, 15 P2).
* 11 topic cần luật/giá/thông số (`legal`, `price`, `spec`) bị chặn `NEEDS-RESEARCH` đúng như thiết kế; chỉ **1** topic (GPLX A1/A/B1 không thời hạn) có bằng chứng đã xác minh từ văn bản hợp nhất của Luật.

## 3. Ba phát hiện đo được

1. **Gate từ vựng bắt 0/46 topic trùng ý khác từ ngữ.** Cả 46 topic bị gộp đều đã *qua* gate (điểm giống headline với bài đã xuất bản gần nhất, trung vị: 0,174 ở nhóm gộp lượt #1, 0,136 ở nhóm gộp lượt #2, so với 0,123 của topic độc lập — chồng lấn gần như hoàn toàn).
   Gate chỉ có tác dụng với hoán vị template và bản sao gần nguyên văn (320/320 hoán vị nhân tạo của bài thật bị chặn; 277/300 slot legacy). ⇒ **bước đọc láng giềng là bắt buộc**, không thể thay bằng điểm số.
2. **Danh sách “phải đọc” hoạt động**: với 43 quyết định gộp có bài đích đã xuất bản (3 quyết định khác gộp vào topic anh em đang xếp hàng), bài đích nằm trong top-1/3/5/8 láng giềng headline ở **53% / 81% / 91% / 95%** (hai ca ở hạng 15).
   Vì vậy `topic-approve` bắt buộc xác nhận đã đọc **5** bài gần nhất. *Lưu ý thiên lệch:* nhãn lượt #1 được tìm bằng chính danh sách láng giềng (17/17 trong top-5); nhãn lượt #2 — tìm bằng đọc thân bài và dò từ khóa — nằm sâu hơn
   (hạng 1–15, trung vị 2; **4/26 ngoài top-5**). Con số khách quan hơn cho recall top-5 là mức thấp của hai nhóm, khoảng 85%.
3. **Hai lượt đọc cần thiết**: lượt #1 (H2 của 5 bài gần nhất) bắt 19; lượt #2 (đọc nội dung bài đích, dò từ khóa đặc trưng trong thân bài) bắt thêm **27** (ví dụ: “đọc màu bugi” đã được trả lời ở ba bài; “rung tay lái khi bóp phanh” là một H2 của bài rung tay lái;
   “thử mũ tại cửa hàng” đã nằm trong hai bài chọn mũ). Dò từ khóa thân bài *không* tăng recall so với danh sách láng giềng (đo: 17 → 17) nên **không đưa vào engine**; nó chỉ là công cụ đọc.

## 4. Lát cắt đầu tiên — 11 topic APPROVED (10 + 1 bài cặp)

Tiêu chí chọn: gate ACCEPT; **cả hai lượt đọc** không thấy bài nào trả lời cùng câu hỏi; không dữ kiện rủi ro (hoặc đã xác minh); trải đều hub (nhiều hub đang trống); hàng đợi nhỏ (trần 50) để kiểm chứng toàn bộ vòng
đời trước khi mở rộng.

| Slot | Topic | Slug | Hub | Intent | Loại | Ưu tiên | Dữ kiện |
|---|---|---|---|---|---|---|---|
| S01083 | T001143 | `blow-by-xe-may-la-gi` | wiki/thuat-ngu-xe | informational | explainer | P2 | không số liệu (no-figures) |
| S01084 | T001134 | `he-thong-idling-stop-xe-tay-ga` | wiki/dien-xe | informational | explainer | P2 | không số liệu (no-figures) |
| S01085 | T001133 | `cam-bien-nghieng-xe-may` | wiki/dien-xe | informational | explainer | P2 | không số liệu (no-figures) |
| S01086 | T001122 | `xe-cu-bi-chinh-cong-to-met` | market/mua-ban-xe-cu | informational | checklist | P2 | không số liệu (no-figures) |
| S01087 | T001096 | `lop-xe-may-nut-chan-gai` | garage/lop | troubleshooting | troubleshooting | P1 | không số liệu (no-figures) |
| S01088 | T001085 | `xe-so-kho-vao-so-1` | garage/dong-co | troubleshooting | troubleshooting | P1 | không số liệu (no-figures) |
| S01089 | T001164 | `cach-dung-smart-key-xe-tay-ga` | docs/huong-dan-su-dung | informational | guide | P1 | không số liệu (no-figures) |
| S01090 | T001166 | `kiem-tra-xe-moi-khi-nhan-tu-dai-ly` | guide/mua-xe | informational | checklist | P1 | không số liệu (no-figures) |
| S01091 | T001128 | `cach-doc-review-xe-may` | review/review-xe | informational | guide | P2 | không số liệu (no-figures) |
| S01092 | T001159 | `giay-phep-lai-xe-a1-khong-thoi-han` | learn/kien-thuc-phap-ly | informational | explainer | P1 | đã xác minh |
| S01093 | T001129 | `lai-thu-xe-may-de-so-sanh` | review/so-sanh-xe | commercial | comparison | P2 | không số liệu (no-figures) |

Mỗi topic có `editorial.acknowledged` (đúng các cảnh báo gate đưa ra), `editorial.neighboursReviewed` (5 bài đã xuất bản gần nhất) và `editorial.approvedBy`. `writer-pack` chỉ trả đúng 11 slot này kèm TOPIC_BRIEF/GAIN/OUTLINE/SCOPE.

**Vì sao 11 chứ không phải 10.** S01093 là bài cặp bắt buộc cho S01091: danh mục `review` chưa có bài nào, nên một bài `review` đơn lẻ không có bài trước/sau cùng danh mục và làm đỏ assert `art-pn` của `test.js` (phát hiện khi diễn tập `publish-batch` trong bản sao repo — xem [giới hạn #8](TOPIC-FACTORY-V2.md#13-giới-hạn-đã-biết)). Topic T001129 là một trong 43 ACCEPT, đã qua cùng hai lượt đọc láng giềng; S01091 và S01093 được xuất bản trong cùng một lô, 9 bài còn lại ở lô trước.

32 topic ACCEPT còn lại **không** được cấp cho writer — chờ chủ repo/biên tập duyệt thêm (mỗi topic vẫn phải ack + đọc láng giềng).

### Kết quả vận hành thật của lát cắt (2026-10-12)

| Chỉ số | Kết quả |
|---|---|
| QA nội bộ (`qaArticle`, ngưỡng 70) | 11/11 đạt **100/100**; SEO (advisory) 91–100; 1.687–2.494 từ theo cách đếm của QA |
| Diễn tập `publish-batch` trong bản sao repo | lần 1 (cả 10 bài đầu) phát hiện giới hạn #8 (S01091 đơn lẻ trong danh mục `review` ⇒ `test.js` đỏ); sau khi tách thành lô 1 (9 bài) + lô 2 (cặp `review`) cả hai lô xanh: `test.js` 0 lỗi, `generate --check` byte-exact, `audit --min-score 70`, `verify-invariant`, `topic-check --recheck` |
| CI thật | `Factory Publish Lite` #218 (9 bài) và #219 (2 bài): success, khoảng 20 giây mỗi lô; `Factory Engine Quality` (heavy gate) chạy trên branch trước khi hợp nhất: success |
| Trạng thái sau xuất bản | 793 PUBLISHED; 41 topic PLANNED (9 legacy REWRITE + 32 ACCEPT chờ duyệt); 0 slot writer có thể nhận; 300 slot legacy PLANNED vẫn bị đóng băng chờ duyệt |
| Không đụng | không xóa/đổi URL/chuyển hướng/đổi tiêu đề bài đã xuất bản; không đổi kiến trúc danh mục/hub |

### Bảng B — 46 topic bị gộp (MERGE-CANDIDATE): đề xuất bổ sung vào bài đã có, KHÔNG tạo URL mới

| Topic | Slug đề xuất | Gộp vào | Lần rà soát | Bằng chứng (đã đọc trong bài đích) |
|---|---|---|---:|---|
| T001091 | `heo-dau-phanh-bi-ket` | `xe-may-bi-bo-phanh-nguyen-nhan-va-cach-xu-ly` | 2 | bài đích nêu piston kẹp phanh kẹt bẩn, trục kẹp thiếu bôi trơn là nguyên nhân phổ biến của bó phanh kèm cách xử lý; heo dầu kẹt là một trường hợp của cùng vấn đề. |
| T001092 | `phanh-sau-xe-so-an-yeu` | `phanh-tang-trong` | 2 | bài đích có mục "Dấu hiệu mòn và cách chỉnh độ rơ" cho phanh tang trống — phanh sau xe số ăn yếu chủ yếu thuộc nhóm này. |
| T001093 | `rung-tay-lai-khi-bop-phanh-truoc` | `xe-may-rung-tay-lai-nguyen-nhan-va-cach-xu-ly` | 2 | bài đích có riêng mục "Vòng kiểm tra thứ hai: rung khi bóp phanh — dấu hiệu của cụm phanh trước" — chính là câu hỏi của topic. |
| T001094 | `lop-khong-sam-xi-hoi-cham` | `ap-suat-lop` | 2 | bài đích có mục "Rò kéo dài: săn nguồn rò bằng nước xà phòng" — chính là phương pháp của topic; thung-lop-giua-duong, lop-khong-sang và bo-va-lop-khong-sang-chon-va-su-dung đã phủ phần… |
| T001097 | `van-lop-xe-may-bi-ri-hoi` | `ap-suat-lop` | 2 | topic anh em lop-khong-sam-xi-hoi-cham đã được gộp vào ap-suat-lop; van lốp rò hơi là một nguyên nhân của cùng câu hỏi lốp mất hơi từ từ — gộp vào cùng bài đích. |
| T001099 | `de-khong-no-nhung-den-van-sang` | `cach-de-xe-ga` | 2 | bài đích có mục "Chẩn đoán khi đề không nổ: nghe tiếng và nhìn đèn" (đèn sáng nhưng không đề: ắc quy, khóa từ, cảm biến nghiêng, cầu chì); ac-quy-yeu có "Xử lý khi xe không nổ vì ắc quy… |
| T001100 | `den-xi-nhan-nhay-nhanh` | `den-xi-nhan-hong-giua-duong-cach-xu-ly` | 1 | Bài đích đã nêu xi-nhan nháy nhanh = một bóng cháy, nguyên nhân từ bóng đến công tắc, cầu chì; phần mới chỉ là rơ le/giắc cắm — bổ sung thành một mục. |
| T001101 | `coi-xe-may-yeu-khong-keu` | `coi-xe` | 2 | bài đích có mục "Phân loại lỗi còi và tự xử từng loại" và "Công tắc còi: điểm ẩn của hệ thống" — kiểm tra cầu chì/giắc/cụm còi là nội dung đó. |
| T001102 | `ac-quy-xe-tay-ga-het-dien-khi-de-vai-ngay` | `giu-ac-quy` | 2 | ac-quy-yeu, giu-ac-quy ("Xe hay để lâu: chăm ắc khác xe đi thường") và ac-quy-xe-may-cau-tao-va-cach-bao-quan ("Những gì giết ắc quy sớm nhất") đã trả lời vì sao ắc quy hết điện khi để vài… |
| T001103 | `den-pha-xe-may-chap-chon` | `den-pha-xe-may-mo-nguyen-nhan-va-xu-ly` | 2 | bài đích có mục "Giắc nối và mạch dây: chỗ làm đèn chớp tắt âm ỉ"; đèn pha chập chờn khi xóc là cùng nhóm giắc/mass/bóng. |
| T001104 | `kiem-tra-do-chung-xich-xe-so` | `cham-soc-day-xich-xe-may-dung-ky` | 1 | Kiểm tra độ chùng/căng xích là lõi của bài chăm sóc xích đúng kỹ thuật. |
| T001106 | `bo-noi-xe-ga-bi-mon` | `xe-tay-ga-ro-ga-khong-len-toc-do` | 1 | Trùng với topic anh em (cùng cụm truyền động CVT, gate cảnh báo 0.30); gộp thành một bài theo triệu chứng. |
| T001107 | `chinh-day-con-xe-so` | `con-la-gi` | 2 | bài đích có mục "Chỉnh độ rơ và bảo dưỡng cụm côn" (độ rơ cần côn, cách chỉnh bằng ốc chỉnh, khi nào thay lá côn). Phần cáp côn khô/xơ có thể bổ sung vào mục đó. |
| T001108 | `doc-mau-bugi-xe-may` | `bugi-xe-may-chu-ky-thay-va-dau-hieu-hong` | 2 | bài đích đã nêu màu điện cực nâu nhạt đồng đều là khỏe, đen bồ hóng/trắng bệch/ướt dầu là dấu hiệu cần kiểm tra; thay-dau-nhot và xe-may-bi-giat-hut-ga cũng diễn giải màu bugi. Câu hỏi đọc… |
| T001111 | `chinh-vit-gio-xe-che-hoa-khi` | `ve-sinh-buong-ga-xe-may-tai-nha` | 2 | bài đích có mục "Lắp lại và chỉnh vít giò về điểm máy êm" — chỉnh vít gió/vít cầm chừng là một bước trong quy trình vệ sinh buồng ga. |
| T001113 | `mo-ta-trieu-chung-xe-cho-tho` | `chan-doan-loi-xe` | 1 | Bài đích có riêng bước 'Mô tả chuẩn cho thợ' (bốn bước chẩn đoán); phần mới (quay video, mẫu ghi) nên thành mục bổ sung. |
| T001115 | `den-bao-loi-dong-co-xe-may-phun-xang` | `den-canh-bao-tren-xe-may-hieu-va-xu-ly` | 2 | bài đích có mục về đèn xăng, đèn kiểm tra động cơ; ecu-tren-xe-may-la-gi có mục "Đọc mã lỗi" — câu hỏi đèn báo lỗi động cơ đã được trả lời. |
| T001116 | `xe-giat-cuc-khi-nha-ga` | `xe-may-bi-giat-hut-ga-nguyen-nhan-va-cach-xu-ly` | 2 | bài đích đã mô tả giật cục lúc nhả ga/bóp ga của xe ga do bi ly tâm mòn và cách phân biệt với nhóm nhiên liệu; bài cvt-la-gi-tren-xe-ga và bi-em-xe-ga-cau-tao-va-thoi-diem-thay cũng nêu… |
| T001118 | `cach-tinh-tien-xang-xe-may-hang-thang` | `xe-hao-xang-nguyen-nhan-va-cach-xu-ly` | 2 | bài đích có mục "Đo trước, phán đoán sau: xác định xe thật sự hao xăng" (phương pháp đổ đầy bình); giam-hao-xang có mục đo đếm. Phần quy đổi ra ngân sách tháng có thể bổ sung vào bài đích. |
| T001123 | `chay-thu-xe-may-cu-truoc-khi-mua` | `mua-xe-may-cu-nhung-diem-can-kiem-tra` | 2 | bài đích có mục "Bộ máy và chạy thử"; kiem-tra-xe-truoc-khi-mua có "Vòng bốn — khởi động nguội và chạy thử". Lộ trình chạy thử nên bổ sung vào bài đích. |
| T001124 | `phan-biet-phu-tung-chinh-hang-va-hang-nhai` | `phu-tung-thay-the-xe-may-co-nen-dung` | 2 | hai topic anh em cùng chủ đề phụ tùng thay thế (chính hãng/tương đương/nhái); gộp thành một bài tổng hợp thay vì hai URL. Các bài chon-dau-nhot, thay-loc-gio-xe-may-khi-nao-va-cach-lam đã… |
| T001130 | `cach-thu-mu-bao-hiem-khi-mua` | `mu-bao-hiem-dat-chuan-cach-chon` | 2 | mu-bao-hiem-dat-chuan có mục "Chọn mũ đúng đầu: đo, thử, và chọn kiểu che"; mu-bao-hiem-dat-chuan-cach-chon có "Chọn đúng size và đội mũ đúng cách" — thử mũ tại cửa hàng đã được trả lời. |
| T001139 | `chi-so-tai-trong-va-toc-do-lop-xe-may` | `kich-thuoc-lop` | 1 | Bài đích giải mã dãy số trên thành lốp; chỉ số tải/tốc độ là phần mở rộng của cùng mục — cần xác minh nguồn rồi bổ sung. |
| T001142 | `phuoc-truoc-xe-may-chay-dau` | `giam-xoc-xe-may-cham-soc-va-dau-hieu-yeu` | 1 | Bài đích đã nói dấu hiệu giảm xóc yếu và chăm sóc phuộc; chảy dầu phốt là một mục. |
| T001144 | `noi-ma-sat-kho-va-noi-ly-tam` | `con-la-gi` | 2 | bài đích có mục "Bốn kiểu côn trên xe máy" đã phân loại các kiểu ly hợp; nhot-ly-hop-va-nhot-may-khac-nhau-o-dau và thuat-ngu-xe-may bổ sung thuật ngữ. Phần phân biệt thuật ngữ nồi ma sát… |
| T001145 | `so-khung-so-may-xe-may-la-gi` | `kiem-tra-so-khung-so-may-xe-cu` | 1 | Trùng với topic anh em cùng batch (vị trí + cách đọc số khung/số máy); gộp phần định nghĩa vào bài kiểm tra xe cũ. |
| T001146 | `xuat-phat-ngang-doc-xe-so` | `cach-lai-xe-con` | 2 | bài đích có mục Ba tình huống khó: đèn đỏ, dốc và quay đầu; bài di-xe-may-so-ky-thuat-bop-con-va-chuyen-so có mục Xuất phát. Xuất phát ngang dốc xe số đã nằm trong các mục này — bổ sung… |
| T001147 | `chay-xe-may-khi-co-gio-ngang` | `ky-thuat-di-xe-may-trong-gio-lon` | 1 | Bài đích đã có tư thế/tay lái, ga đều, vị trí tránh gió tích tụ và khi nào dừng — cùng câu hỏi. |
| T001149 | `rua-xe-may-bang-voi-ap-luc` | `rua-xe-may-dung-cach` | 1 | Bài đích có mục 'Những vị trí tuyệt đối không xịt nước trực tiếp' — chính là cốt lõi của topic. |
| T001150 | `bao-quan-xe-may-mua-nom` | `de-xe-noi-am` | 1 | Bài đích là bài thin cùng chủ đề (để xe nơi ẩm): nên nâng cấp/viết lại bài hiện có thay vì tạo URL thứ hai. |
| T001153 | `tieng-keu-tu-nhong-sen-dia` | `nhoong-sen-dia-xe-may-cau-tao-va-thoi-diem-thay` | 1 | Bài đích có dấu hiệu hao mòn nhông sên dĩa; tiếng rít là một dấu hiệu trong đó. |
| T001154 | `tieng-cach-cach-khi-may-nguoi` | `xe-keu-lach-cach` | 1 | Bài đích truy tìm tiếng gõ rời rạc; điều kiện 'chỉ khi nguội' là một mục. |
| T001155 | `xe-may-co-mui-xang-song` | `xe-may-co-mui-khet-nguyen-nhan-va-cach-xu-ly` | 2 | bài đích có mục "Mùi xăng: nhóm nguy hiểm nhất, xử trước mọi nhóm khác". |
| T001158 | `bao-quan-pin-xe-may-dien-khi-khong-dung` | `pin-va-sac-xe-may-dien-nhung-dieu-can-biet` | 1 | Bài đích có mục 'Cất xe lâu ngày và bảo quản theo mùa' — người đọc cần một bài tổng hợp. |
| T001160 | `quyen-khi-bi-lap-bien-ban-vi-pham-giao-thong` | `xu-phat-vi-pham` | 1 | Bài đích có 'Trình tự một ca xử phạt: từ biên bản đến quyết định' và 'Quyền của người bị xử phạt: giải trình và khiếu nại'. |
| T001161 | `cho-muon-xe-may-can-luu-y-gi` | `muon-xe-may-di-khi-nao-kiem-tra-gi` | 2 | bài đích đã có mục "Giấy tờ và thỏa thuận: nền móng của chuyện mượn xe" và kiểm tra kỹ thuật trước khi đi; góc nhìn người cho mượn có thể bổ sung thành một mục. |
| T001165 | `y-nghia-den-bao-tren-dong-ho-xe-tay-ga` | `den-canh-bao-tren-xe-may-hieu-va-xu-ly` | 1 | Cùng câu hỏi: nhóm đèn cảnh báo trên đồng hồ và việc cần làm. |
| T001171 | `khoi-dong-xe-so-khi-troi-lanh` | `xe-may-kho-no-buoi-sang-nguyen-nhan-va-xu-ly` | 1 | Bài đích xử lý đúng tình huống khó nổ lúc lạnh/buổi sáng; thao tác khởi động đúng là phần bổ sung. |
| T001172 | `do-xe-may-tren-doc` | `do-xe-may-tren-le-doc-an-toan` | 1 | Cùng câu hỏi: đỗ xe trên dốc, chống trôi, chân chống. |
| T001174 | `bao-duong-lan-dau-xe-may-moi` | `chay-ra-xe-may-dung-cach` | 2 | bài đích có mục "Nhớt lần đầu và các mốc bảo dưỡng"; lich-bao-duong-xe-may-dinh-ky-theo-so-km và checklist-bao-duong đã nêu mốc và dấu hiệu nên đi sớm. |
| T001175 | `thoi-quen-do-xang-xe-may` | `do-xang-xe-may-luu-y-va-sai-lam` | 1 | Cùng câu hỏi: thói quen/sai lầm khi đổ xăng. |
| T001176 | `thue-xe-may-dien-het-pin-giua-duong` | `thu-xe-dien-nhung-dieu-can-biet` | 2 | pin-xe-dien có mục "Xử lý khi hết pin giữa đường"; thu-xe-dien-nhung-dieu-can-biet có mục "Thủ tục thuê xe điện và những điều cần ghi trong hợp đồng". Danh sách câu hỏi với bên cho thuê… |
| T001177 | `thue-xe-may-dien-di-du-lich` | `tra-tram-sac` | 2 | tra-tram-sac có mục "Lập kế hoạch sạc khi đi xa"; thue-xe-dien-di-quan-luu-y có "Quản lý pin giữa các chặng". Kế hoạch sạc khi du lịch bằng xe điện thuê đã nằm trong các mục này. |
| T001178 | `nhan-xe-dien-cho-thue-kiem-tra-gi` | `thu-xe-dien-nhung-dieu-can-biet` | 2 | bài đích có mục "Kiểm tra xe điện trước khi nhận"; thue-xe-dien có "Bước 4 — Nhận xe: kiểm tra những gì". |
| T001180 | `bien-ban-ban-giao-o-to-thue` | `nghiem-thu-xe` | 1 | Bài nghiệm thu xe (thuê ô tô) đã hướng dẫn chụp ảnh/ghi biên bản khi nhận và trả xe. |
| T001181 | `thue-o-to-di-tinh-can-luu-y-gi-trong-hop-dong` | `thue-o-to-duong-dai` | 2 | bài đích có mục "Chốt điều khoản quãng đường và phạm vi trước khi ký", "Lên kế hoạch chặng, nghỉ và nhiên liệu", "Trả xe cuối hành trình không vướng phụ thu"; hop-dong-thue-o-to bổ sung… |


### Bảng C — 11 topic NEEDS-RESEARCH (cần nguồn đã xác minh trước khi viết)

| Topic | Slug | Loại dữ kiện | Cần gì để mở khóa |
|---|---|---|---|
| T001137 | `dau-phanh-dot-3-dot-4-la-gi` | declared | declared |
| T001138 | `ma-dot-lop-xe-may` | declared | declared |
| T001140 | `jaso-ma-mb-nhot-xe-may` | price | nguồn giá/chi phí có ngày truy xuất |
| T001141 | `nhot-xe-ga-dung-cho-xe-so-duoc-khong` | declared | declared |
| T001152 | `ty-le-cong-suat-tren-trong-luong-xe-may` | spec | tài liệu kỹ thuật chính hãng (thông số) |
| T001163 | `mau-giay-uy-quyen-su-dung-xe-may` | legal, price | văn bản pháp luật hiện hành (số hiệu, điều khoản, hiệu lực); nguồn giá/chi phí có ngày truy xuất |
| T001168 | `sang-ten-xe-may-khac-tinh` | legal | văn bản pháp luật hiện hành (số hiệu, điều khoản, hiệu lực) |
| T001169 | `mat-giay-dang-ky-xe-may` | legal | văn bản pháp luật hiện hành (số hiệu, điều khoản, hiệu lực) |
| T001170 | `mat-bien-so-xe-may` | legal | văn bản pháp luật hiện hành (số hiệu, điều khoản, hiệu lực) |
| T001179 | `bao-hiem-khi-thue-o-to-tu-lai` | legal | văn bản pháp luật hiện hành (số hiệu, điều khoản, hiệu lực) |
| T001182 | `diem-sat-hach-bang-lai-xe-may-gan-nhat` | legal | văn bản pháp luật hiện hành (số hiệu, điều khoản, hiệu lực) |


### Bảng D — 43 topic độc lập (gate ACCEPT + đã qua hai lượt đọc láng giềng)

| Hub | Topic | Slug | Intent | Loại | Ưu tiên | Trạng thái |
|---|---|---|---|---|---|---|
| docs/checklist | T001162 | `nhan-xe-sau-khi-sua-can-kiem-tra-gi` | informational | checklist | P1 | ACCEPT — chờ duyệt |
| docs/huong-dan-su-dung | T001164 | `cach-dung-smart-key-xe-tay-ga` | informational | guide | P1 | APPROVED |
| garage/bao-duong-dinh-ky | T001112 | `doc-hoa-don-bao-duong-xe-may` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/bao-duong-dinh-ky | T001114 | `nhat-ky-bao-duong-xe-may` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/dong-co | T001083 | `xe-may-no-khong-deu-luc-cam-chung` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/dong-co | T001084 | `xe-tay-ga-ro-ga-khong-len-toc-do` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/dong-co | T001085 | `xe-so-kho-vao-so-1` | troubleshooting | troubleshooting | P1 | APPROVED |
| garage/dong-co | T001086 | `xe-may-bi-ngap-xang` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/dong-co | T001087 | `quat-ket-nuoc-xe-tay-ga-khong-quay` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/dong-co | T001088 | `khoi-den-ong-xa-xe-phun-xang` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/lop | T001095 | `lop-xe-may-mon-lech-mot-ben` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/lop | T001096 | `lop-xe-may-nut-chan-gai` | troubleshooting | troubleshooting | P1 | APPROVED |
| garage/lop | T001098 | `thay-lop-xe-may-can-kiem-tra-gi` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/phanh | T001089 | `phanh-dia-xe-may-keu-rit` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/phanh | T001090 | `tay-phanh-mem-an-sau-xe-may` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/phun-xang-che-hoa-khi | T001109 | `ve-sinh-hong-ga-xe-phun-xang` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/phun-xang-che-hoa-khi | T001110 | `xe-phun-xang-kho-no-khi-may-nong` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| garage/truyen-dong | T001105 | `day-curoa-xe-ga-khi-nao-thay` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| guide/mua-xe | T001166 | `kiem-tra-xe-moi-khi-nhan-tu-dai-ly` | informational | checklist | P1 | APPROVED |
| guide/mua-xe | T001167 | `chon-xe-may-cho-nguoi-cao-tuoi` | informational | guide | P2 | ACCEPT — chờ duyệt |
| learn/doc-thong-so | T001151 | `doc-tem-thong-tin-xe-may` | informational | reference | P2 | ACCEPT — chờ duyệt |
| learn/kien-thuc-phap-ly | T001159 | `giay-phep-lai-xe-a1-khong-thoi-han` | informational | explainer | P1 | APPROVED |
| learn/kien-thuc-xe-dien | T001156 | `pin-xe-may-dien-bao-day-nhung-nhanh-het` | troubleshooting | troubleshooting | P1 | ACCEPT — chờ duyệt |
| learn/kien-thuc-xe-dien | T001157 | `xe-may-dien-di-mua-co-sao-khong` | informational | guide | P1 | ACCEPT — chờ duyệt |
| learn/ky-thuat-lai-xe | T001148 | `kiem-soat-xe-may-o-toc-do-cham` | informational | guide | P2 | ACCEPT — chờ duyệt |
| market/chi-phi-su-dung | T001117 | `chi-phi-so-huu-xe-may` | informational | guide | P1 | ACCEPT — chờ duyệt |
| market/chi-phi-su-dung | T001119 | `chi-phi-phat-sinh-sau-khi-mua-xe-cu` | informational | checklist | P1 | ACCEPT — chờ duyệt |
| market/gia-phu-tung | T001125 | `mua-phu-tung-xe-may-online` | informational | checklist | P2 | ACCEPT — chờ duyệt |
| market/gia-phu-tung | T001126 | `phu-tung-thay-the-xe-may-co-nen-dung` | commercial | comparison | P1 | ACCEPT — chờ duyệt |
| market/gia-xe-cu | T001127 | `cach-dinh-gia-xe-may-cu` | informational | guide | P1 | ACCEPT — chờ duyệt |
| market/mua-ban-xe-cu | T001120 | `kiem-tra-so-khung-so-may-xe-cu` | informational | checklist | P1 | ACCEPT — chờ duyệt |
| market/mua-ban-xe-cu | T001121 | `dau-hieu-xe-may-tung-ngap-nuoc` | informational | checklist | P1 | ACCEPT — chờ duyệt |
| market/mua-ban-xe-cu | T001122 | `xe-cu-bi-chinh-cong-to-met` | informational | checklist | P2 | APPROVED |
| review/review-xe | T001128 | `cach-doc-review-xe-may` | informational | guide | P2 | APPROVED |
| review/so-sanh-xe | T001129 | `lai-thu-xe-may-de-so-sanh` | commercial | comparison | P2 | ACCEPT — chờ duyệt |
| tips/meo-mua-xe | T001173 | `cau-hoi-can-hoi-khi-mua-xe-may-moi` | commercial | checklist | P2 | ACCEPT — chờ duyệt |
| wiki/dien-xe | T001133 | `cam-bien-nghieng-xe-may` | informational | explainer | P2 | APPROVED |
| wiki/dien-xe | T001134 | `he-thong-idling-stop-xe-tay-ga` | informational | explainer | P2 | APPROVED |
| wiki/dien-xe | T001135 | `loc-dien-xe-may` | informational | explainer | P2 | ACCEPT — chờ duyệt |
| wiki/dong-co | T001131 | `lam-mat-bang-gio-va-bang-dung-dich` | informational | explainer | P2 | ACCEPT — chờ duyệt |
| wiki/dong-co | T001132 | `he-thong-danh-lua-xe-may` | informational | explainer | P2 | ACCEPT — chờ duyệt |
| wiki/he-thong-phanh | T001136 | `phanh-cbs-xe-may-la-gi` | informational | explainer | P2 | ACCEPT — chờ duyệt |
| wiki/thuat-ngu-xe | T001143 | `blow-by-xe-may-la-gi` | informational | explainer | P2 | APPROVED |


## 5. Tái lập phép đo

```
# trên bản sao repo: bỏ các dòng source=v2-pilot khỏi factory/state/topic-matrix.jsonl rồi chạy
node factory/factory.js topic-propose --file factory/data/topic-pilot-v2.jsonl \
     --review factory/data/topic-pilot-v2-review.json --source v2-pilot --dry-run
```

Kết quả gate (trước lượt đọc #2) là tất định. Lượt đọc #2 được ghi từng quyết định kèm bằng chứng trong dòng topic (`editorial.note`, `editorial.reviewedBy`, `mergeInto`);
`topic-reopen` đảo một quyết định nếu chủ repo không đồng ý. `node factory/test-topic-v2.js` (tầng 3) kiểm lại hồ sơ pilot: đúng 100 ứng viên, mọi quyết định gộp có người rà soát + lý do + bài đích có thật, mọi topic NEEDS-RESEARCH kèm lý do dữ kiện.

## 6. Việc tiếp theo (cần quyết định)

1. Duyệt thêm từ 32 topic ACCEPT còn lại **chỉ sau khi** lát cắt đầu được viết, QA, publish và đo trên Search Console (28 ngày) — xem [kế hoạch migration](TOPIC-V2-MIGRATION-PLAN.md).
2. Thực hiện 46 đề xuất gộp = **chỉnh sửa bài đã xuất bản** (thêm mục vào bài đích) ⇒ cần chủ repo duyệt; không có xóa/chuyển hướng/đổi URL.
3. Mở khóa 11 topic NEEDS-RESEARCH bằng nguồn chính thức có ngày truy xuất.
