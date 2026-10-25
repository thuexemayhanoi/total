# Báo cáo kiểm toán 300 slot legacy (đã đóng biên tập)

Tạo lúc 2026-10-25T15:54:17.365Z. Dữ liệu đầy đủ từng slot: `factory/reports/legacy-300-audit.json`.

Phạm vi: 300 slot PLANNED đã đóng biên tập (topic-matrix lifecycle REJECTED + mergeInto), nguồn legacy-v1.

## Kết luận

| Nhóm | Ý nghĩa | Số slot |
| --- | --- | ---: |
| A | Trùng intent, `SKIPPED_DUPLICATE` | 299 |
| B | Gộp, chỉ khi có information gain thật (`MERGE_PROPOSED`) | 1 |
| C | Viết lại thành topic V2 độc lập | 0 |
| D | Lưu trữ kèm lý do | 0 |
| | Tổng | 300 |

Không có slot nào trong 300 slot được viết hay xuất bản. 300 slot này không tính vào chỉ tiêu 20.000 bài xuất bản; cách đếm bài đã xuất bản là `docs/autopilot-kit/tools/count-published.js`.

## Nguyên nhân

- Cả 300 slot đều là hoán vị tiêu đề V1 của vài hạt giống (kiểm tra xe thuê, giấy tờ thuê xe, chi phí, rủi ro, so sánh, thuê xe điện, pin xe điện): hạt giống nhân với các khung "người mới / ngắn ngày / dài ngày / đường dài / đô thị / tình huống thực tế" hoặc đổi tiền tố tiêu đề.
- Mỗi khung bối cảnh đã có bài xuất bản riêng; slot không có câu hỏi tìm kiếm hay thông tin mới nào ngoài bài đó.
- Dữ kiện giá, phí, điều khoản cửa hàng không có nguồn xác minh nên không thể viết thêm nội dung khác biệt.

Lý do cổng của engine (một slot có thể có nhiều lý do):

| Lý do | Số slot |
| --- | ---: |
| `needs-verified-data` | 135 |
| `intent-cluster-queued` | 112 |
| `context-only-variant` | 87 |
| `intent-cluster-published` | 78 |
| `composite-aspects` | 60 |
| `editorial-overlap` | 23 |

Theo hub: `thue-xe/xe-may` 177, `thue-xe/xe-dien` 123.

## Kiểm chứng

- Đọc toàn bộ slot và bài bao phủ do engine chọn (docs/autopilot-kit/tools/legacy-audit-input.js).
- 20 agent: mỗi cụm một agent đọc bài bao phủ, tự tìm bài xuất bản gần nhất theo đúng bối cảnh slot, quyết định A/B/C/D kèm trích dẫn nguyên văn.
- Verifier đối kháng độc lập đọc lại mọi quyết định không phải A và một mẫu A (cứ 4 slot A lấy 1), đối chiếu từng trích dẫn với file bài.
- Điều phối viên đối chiếu máy: mọi bài bao phủ là PUBLISHED, có trong manifest, có HTML và có trong sitemap-articles.xml; từng trích dẫn trong evidence có nguyên văn trong bài được viện dẫn.

- Verifier yêu cầu đổi 0 quyết định, báo thiếu 0 slot.
- Đối chiếu máy: {"slotsChecked":300,"coverPublishedWithHtmlAndSitemap":300,"evidenceQuotes":644,"quotesVerbatimInCoveringArticle":558,"quotesVerbatimInOtherCitedArticle":85,"quotesDifferingOnlyByCase":1,"quotesNotFound":0,"auditorCoverDiffersFromEngineChainCover":237,"note":"237 slot được auditor gán bài cùng bối cảnh cụ thể hơn bài cuối chuỗi mergeInto của engine; cả hai đều là bài đã xuất bản."}.

## Việc đã làm và chưa làm

- Không sửa matrix.json, topic-matrix.jsonl, bài đã xuất bản, URL, slug, canonical hay sitemap.
- Không viết bài cho bất kỳ slot nào trong 300 slot này.
- Báo cáo chỉ ghi nhãn; trạng thái engine giữ nguyên (EDITORIAL_CLOSED).

## Cần chủ repo quyết định

### S00966 (nhóm B)

Bài nhận bổ sung: `/thue-xe/xe-dien/thu-xe-dien-nhung-dieu-can-biet/`.

Đề xuất: Thêm một đoạn khoảng 100–150 từ vào H2 "Thủ tục thuê xe điện và những điều cần ghi trong hợp đồng" của S00004. Nội dung: (1) "xe điện" gồm nhiều nhóm pháp lý (xe đạp điện, xe gắn máy điện, mô tô điện), và yêu cầu giấy phép lái xe cùng đăng ký phụ thuộc nhóm đó. (2) Người thuê nhờ bên cho thuê cho xem giấy đăng ký, biển số, công suất động cơ và vận tốc thiết kế của đúng chiếc xe, rồi tự đối chiếu GPLX của mình với nhóm xe, không dựa vào việc cửa hàng có hỏi hay không. (3) Ghi loại xe và số biển trong phiếu giao nhận. Chỉ nêu nguyên tắc bằng lời và nhắc tên bài S02066 (phân loại theo Điều 34, văn bản hợp nhất 55/VBHN-VPQH) và S00338; không sửa related hay liên kết hiện có. Không khẳng định hạng GPLX hay ngưỡng miễn bằng cụ thể, và không nêu giá cọc hay yêu cầu riêng của một cửa hàng nào, cho đến khi các bài trong site nói về GPLX xe gắn máy/xe điện được thống nhất (xem notes).

Chưa áp dụng vì Sửa nội dung bài đã xuất bản cần chủ repo duyệt; đoạn đề xuất chỉ nêu nguyên tắc, không có số liệu mới.

## Bài bao phủ (mỗi bài đã xuất bản đỡ bao nhiêu slot)

| Bài bao phủ | URL | Số slot | Slot |
| --- | --- | ---: | --- |
| S00207 Thuê xe điện — hướng dẫn chi tiết từng bước | `/thue-xe/xe-dien/thue-xe-dien/` | 25 | S00960, S00961, S00965, S00978, S00983, S00991, S00996, S01001, S01003, S01007, S01008, S01013, S01019, S01020, S01023, S01025, S01026, S01027, S01029, S01030, S01031, S01051, S01063, S01068, S01069 |
| S00017 Thuê xe điện theo tháng: những điều cần biết | `/thue-xe/xe-dien/thue-xe-dien-theo-thang-dieu-can-biet/` | 20 | S00962, S00968, S00974, S00980, S00986, S00992, S00998, S01004, S01010, S01016, S01022, S01028, S01034, S01040, S01046, S01052, S01058, S01064, S01070, S01076 |
| S00208 Pin xe điện — tổng hợp kiến thức cho người thuê xe | `/thue-xe/xe-dien/pin-xe-dien/` | 17 | S00995, S01032, S01033, S01037, S01038, S01039, S01043, S01050, S01055, S01056, S01061, S01062, S01067, S01073, S01075, S01079, S01081 |
| S00212 Thuê xe điện phục vụ giao thông hằng ngày | `/thue-xe/xe-dien/thue-xe-dien-giao-thong/` | 16 | S00964, S00970, S00976, S00982, S00988, S00994, S01000, S01006, S01012, S01018, S01036, S01042, S01060, S01066, S01072, S01078 |
| S00210 Phạm vi hoạt động của xe điện thuê — những điều cần biết | `/thue-xe/xe-dien/pham-vi-hoat-dong/` | 15 | S00963, S00969, S00981, S00987, S00993, S00999, S01005, S01011, S01017, S01035, S01041, S01053, S01059, S01065, S01077 |
| S00004 Thuê xe điện: pin, phạm vi hoạt động và những điều cần biết | `/thue-xe/xe-dien/thu-xe-dien-nhung-dieu-can-biet/` | 12 | S00966, S00967, S00971, S00979, S00984, S00985, S00989, S00990, S00997, S01002, S01054, S01057 |
| S00211 Chi phí sạc xe điện thuê — hướng dẫn chi tiết | `/thue-xe/xe-dien/chi-phi-sac/` | 10 | S00972, S00973, S00975, S00977, S01009, S01044, S01045, S01047, S01048, S01049 |
| S00549 Thuê xe máy: cách kiểm tra trước khi quyết định khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kiem-tra-duong-dai/` | 5 | S00837, S00891, S00909, S00933, S00945 |
| S00550 Thuê xe máy: cách kiểm tra trước khi quyết định trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kiem-tra-do-thi/` | 5 | S00838, S00892, S00910, S00934, S00946 |
| S00551 Thuê xe máy: cách kiểm tra trước khi quyết định theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kiem-tra-thuc-te/` | 5 | S00839, S00893, S00911, S00929, S00947 |
| S00753 Giấy tờ thuê xe: thủ tục và giấy tờ khi đi đường dài | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-thu-tuc-duong-dai/` | 5 | S00783, S00789, S00795, S00801, S00897 |
| S00754 Giấy tờ thuê xe: thủ tục và giấy tờ trong điều kiện đô thị | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-thu-tuc-do-thi/` | 5 | S00784, S00790, S00796, S00802, S00898 |
| S00755 Giấy tờ thuê xe: thủ tục và giấy tờ theo tình huống thực tế | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-thu-tuc-thuc-te/` | 5 | S00785, S00791, S00797, S00803, S00899 |
| S00751 Giấy tờ thuê xe: thủ tục và giấy tờ khi dùng ngắn ngày | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-thu-tuc-ngan-ngay/` | 4 | S00787, S00793, S00799, S00895 |
| S00752 Giấy tờ thuê xe: thủ tục và giấy tờ khi dùng dài ngày | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-thu-tuc-dai-ngay/` | 4 | S00788, S00794, S00800, S00896 |
| S00010 Thuê xe điện đi quán: những lưu ý | `/thue-xe/xe-dien/thue-xe-dien-di-quan-luu-y/` | 3 | S01015, S01021, S01024 |
| S00546 Thuê xe máy: cách kiểm tra trước khi quyết định cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kiem-tra-nguoi-moi/` | 3 | S00834, S00888, S00906 |
| S00547 Thuê xe máy: cách kiểm tra trước khi quyết định khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kiem-tra-ngan-ngay/` | 3 | S00835, S00889, S00907 |
| S00548 Thuê xe máy: cách kiểm tra trước khi quyết định khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kiem-tra-dai-ngay/` | 3 | S00836, S00890, S00908 |
| S00588 Thuê xe máy: những điều cần nhớ khi hoàn trả cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-tra-xe-nguoi-moi/` | 3 | S00804, S00876, S00948 |
| S00589 Thuê xe máy: những điều cần nhớ khi hoàn trả khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-tra-xe-ngan-ngay/` | 3 | S00805, S00877, S00949 |
| S00590 Thuê xe máy: những điều cần nhớ khi hoàn trả khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-tra-xe-dai-ngay/` | 3 | S00806, S00878, S00950 |
| S00591 Thuê xe máy: những điều cần nhớ khi hoàn trả khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-tra-xe-duong-dai/` | 3 | S00807, S00879, S00951 |
| S00592 Thuê xe máy: những điều cần nhớ khi hoàn trả trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-tra-xe-do-thi/` | 3 | S00808, S00880, S00952 |
| S00593 Thuê xe máy: những điều cần nhớ khi hoàn trả theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-tra-xe-thuc-te/` | 3 | S00809, S00881, S00953 |
| S00594 Thuê xe máy: đặt cọc và nghiệm thu an toàn cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-dat-coc-nguoi-moi/` | 3 | S00810, S00882, S00954 |
| S00595 Thuê xe máy: đặt cọc và nghiệm thu an toàn khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-dat-coc-ngan-ngay/` | 3 | S00811, S00883, S00955 |
| S00596 Thuê xe máy: đặt cọc và nghiệm thu an toàn khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-dat-coc-dai-ngay/` | 3 | S00812, S00884, S00956 |
| S00597 Thuê xe máy: đặt cọc và nghiệm thu an toàn khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-dat-coc-duong-dai/` | 3 | S00813, S00885, S00957 |
| S00598 Thuê xe máy: đặt cọc và nghiệm thu an toàn trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-dat-coc-do-thi/` | 3 | S00814, S00886, S00958 |
| S00599 Thuê xe máy: đặt cọc và nghiệm thu an toàn theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-dat-coc-thuc-te/` | 3 | S00815, S00887, S00959 |
| S00204 Giấy tờ thuê xe — tổng hợp những điều cần biết | `/thue-xe/xe-may/giay-to-thue-xe/` | 2 | S00786, S00798 |
| S00209 Trạm sạc xe điện — kinh nghiệm cho người thuê lần đầu | `/thue-xe/xe-dien/tram-sac/` | 2 | S01014, S01071 |
| S00341 Kinh nghiệm pin lithium dành cho người mới | `/learn/kien-thuc-xe-dien/pin-lithium/` | 2 | S01080, S01082 |
| S00540 Thuê xe máy: chi phí và cách tính cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-chi-phi-nguoi-moi/` | 2 | S00828, S00900 |
| S00541 Thuê xe máy: chi phí và cách tính khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-chi-phi-ngan-ngay/` | 2 | S00829, S00901 |
| S00542 Thuê xe máy: chi phí và cách tính khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-chi-phi-dai-ngay/` | 2 | S00830, S00902 |
| S00543 Thuê xe máy: chi phí và cách tính khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-chi-phi-duong-dai/` | 2 | S00831, S00903 |
| S00544 Thuê xe máy: chi phí và cách tính trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-chi-phi-do-thi/` | 2 | S00832, S00904 |
| S00545 Thuê xe máy: chi phí và cách tính theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-chi-phi-thuc-te/` | 2 | S00833, S00905 |
| S00553 Thuê xe máy: hợp đồng và điều khoản cần đọc khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-hop-dong-ngan-ngay/` | 2 | S00841, S00913 |
| S00554 Thuê xe máy: hợp đồng và điều khoản cần đọc khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-hop-dong-dai-ngay/` | 2 | S00842, S00914 |
| S00555 Thuê xe máy: hợp đồng và điều khoản cần đọc khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-hop-dong-duong-dai/` | 2 | S00843, S00915 |
| S00556 Thuê xe máy: hợp đồng và điều khoản cần đọc trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-hop-dong-do-thi/` | 2 | S00844, S00916 |
| S00557 Thuê xe máy: hợp đồng và điều khoản cần đọc theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-hop-dong-thuc-te/` | 2 | S00845, S00917 |
| S00558 Thuê xe máy: rủi ro thường gặp và cách tránh cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-rui-ro-nguoi-moi/` | 2 | S00846, S00918 |
| S00559 Thuê xe máy: rủi ro thường gặp và cách tránh khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-rui-ro-ngan-ngay/` | 2 | S00847, S00919 |
| S00560 Thuê xe máy: rủi ro thường gặp và cách tránh khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-rui-ro-dai-ngay/` | 2 | S00848, S00920 |
| S00561 Thuê xe máy: rủi ro thường gặp và cách tránh khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-rui-ro-duong-dai/` | 2 | S00849, S00921 |
| S00562 Thuê xe máy: rủi ro thường gặp và cách tránh trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-rui-ro-do-thi/` | 2 | S00850, S00922 |
| S00563 Thuê xe máy: rủi ro thường gặp và cách tránh theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-rui-ro-thuc-te/` | 2 | S00851, S00923 |
| S00564 Thuê xe máy: checklist từng bước cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-checklist-nguoi-moi/` | 2 | S00852, S00924 |
| S00565 Thuê xe máy: checklist từng bước khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-checklist-ngan-ngay/` | 2 | S00853, S00925 |
| S00566 Thuê xe máy: checklist từng bước khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-checklist-dai-ngay/` | 2 | S00854, S00926 |
| S00567 Thuê xe máy: checklist từng bước khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-checklist-duong-dai/` | 2 | S00855, S00927 |
| S00568 Thuê xe máy: checklist từng bước trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-checklist-do-thi/` | 2 | S00856, S00928 |
| S00570 Thuê xe máy: câu hỏi thường gặp cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-faq-nguoi-moi/` | 2 | S00858, S00930 |
| S00571 Thuê xe máy: câu hỏi thường gặp khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-faq-ngan-ngay/` | 2 | S00859, S00931 |
| S00572 Thuê xe máy: câu hỏi thường gặp khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-faq-dai-ngay/` | 2 | S00860, S00932 |
| S00575 Thuê xe máy: câu hỏi thường gặp theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-faq-thuc-te/` | 2 | S00863, S00935 |
| S00576 Thuê xe máy: cách so sánh lựa chọn cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-so-sanh-nguoi-moi/` | 2 | S00864, S00936 |
| S00577 Thuê xe máy: cách so sánh lựa chọn khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-so-sanh-ngan-ngay/` | 2 | S00865, S00937 |
| S00578 Thuê xe máy: cách so sánh lựa chọn khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-so-sanh-dai-ngay/` | 2 | S00866, S00938 |
| S00579 Thuê xe máy: cách so sánh lựa chọn khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-so-sanh-duong-dai/` | 2 | S00867, S00939 |
| S00580 Thuê xe máy: cách so sánh lựa chọn trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-so-sanh-do-thi/` | 2 | S00868, S00940 |
| S00581 Thuê xe máy: cách so sánh lựa chọn theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-so-sanh-thuc-te/` | 2 | S00869, S00941 |
| S00582 Thuê xe máy: kinh nghiệm sử dụng thực tế cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kinh-nghiem-nguoi-moi/` | 2 | S00870, S00942 |
| S00583 Thuê xe máy: kinh nghiệm sử dụng thực tế khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kinh-nghiem-ngan-ngay/` | 2 | S00871, S00943 |
| S00584 Thuê xe máy: kinh nghiệm sử dụng thực tế khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kinh-nghiem-dai-ngay/` | 2 | S00872, S00944 |
| S00040 Pin và sạc xe máy điện: những điều cần biết | `/learn/kien-thuc-xe-dien/pin-va-sac-xe-may-dien-nhung-dieu-can-biet/` | 1 | S01074 |
| S00225 Đọc hợp đồng thuê xe — kinh nghiệm cho người mới | `/guide/thue-xe/doc-hop-dong-thue-xe/` | 1 | S00912 |
| S00528 Thuê xe máy: hướng dẫn thực tế cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-huong-dan-nguoi-moi/` | 1 | S00816 |
| S00529 Thuê xe máy: hướng dẫn thực tế khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-huong-dan-ngan-ngay/` | 1 | S00817 |
| S00530 Thuê xe máy: hướng dẫn thực tế khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-huong-dan-dai-ngay/` | 1 | S00818 |
| S00531 Thuê xe máy: hướng dẫn thực tế khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-huong-dan-duong-dai/` | 1 | S00819 |
| S00532 Thuê xe máy: hướng dẫn thực tế trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-huong-dan-do-thi/` | 1 | S00820 |
| S00533 Thuê xe máy: hướng dẫn thực tế theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-huong-dan-thuc-te/` | 1 | S00821 |
| S00534 Thuê xe máy: thủ tục và giấy tờ cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-thu-tuc-nguoi-moi/` | 1 | S00822 |
| S00535 Thuê xe máy: thủ tục và giấy tờ khi dùng ngắn ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-thu-tuc-ngan-ngay/` | 1 | S00823 |
| S00536 Thuê xe máy: thủ tục và giấy tờ khi dùng dài ngày | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-thu-tuc-dai-ngay/` | 1 | S00824 |
| S00537 Thuê xe máy: thủ tục và giấy tờ khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-thu-tuc-duong-dai/` | 1 | S00825 |
| S00538 Thuê xe máy: thủ tục và giấy tờ trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-thu-tuc-do-thi/` | 1 | S00826 |
| S00539 Thuê xe máy: thủ tục và giấy tờ theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-thu-tuc-thuc-te/` | 1 | S00827 |
| S00552 Thuê xe máy: hợp đồng và điều khoản cần đọc cho người mới | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-hop-dong-nguoi-moi/` | 1 | S00840 |
| S00569 Thuê xe máy: checklist từng bước theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-checklist-thuc-te/` | 1 | S00857 |
| S00573 Thuê xe máy: câu hỏi thường gặp khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-faq-duong-dai/` | 1 | S00861 |
| S00574 Thuê xe máy: câu hỏi thường gặp trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-faq-do-thi/` | 1 | S00862 |
| S00585 Thuê xe máy: kinh nghiệm sử dụng thực tế khi đi đường dài | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kinh-nghiem-duong-dai/` | 1 | S00873 |
| S00586 Thuê xe máy: kinh nghiệm sử dụng thực tế trong điều kiện đô thị | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kinh-nghiem-do-thi/` | 1 | S00874 |
| S00587 Thuê xe máy: kinh nghiệm sử dụng thực tế theo tình huống thực tế | `/thue-xe/xe-may/thue-xe-may-thue-xe-xe-may-kinh-nghiem-thuc-te/` | 1 | S00875 |
| S00750 Giấy tờ thuê xe: thủ tục và giấy tờ cho người mới | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-thu-tuc-nguoi-moi/` | 1 | S00894 |
| S00762 Giấy tờ thuê xe: cách kiểm tra trước khi quyết định cho người mới | `/thue-xe/xe-may/giay-to-thue-xe-thue-xe-xe-may-kiem-tra-nguoi-moi/` | 1 | S00792 |

## Từng slot

| Slot | Tiêu đề V1 | Nhóm | Bài bao phủ |
| --- | --- | --- | --- |
| S00783 | Giấy tờ thuê xe: checklist từng bước khi đi đường dài | A | S00753 |
| S00784 | Giấy tờ thuê xe: checklist từng bước trong điều kiện đô thị | A | S00754 |
| S00785 | Giấy tờ thuê xe: checklist từng bước theo tình huống thực tế | A | S00755 |
| S00786 | Giấy tờ thuê xe: câu hỏi thường gặp cho người mới | A | S00204 |
| S00787 | Giấy tờ thuê xe: câu hỏi thường gặp khi dùng ngắn ngày | A | S00751 |
| S00788 | Giấy tờ thuê xe: câu hỏi thường gặp khi dùng dài ngày | A | S00752 |
| S00789 | Giấy tờ thuê xe: câu hỏi thường gặp khi đi đường dài | A | S00753 |
| S00790 | Giấy tờ thuê xe: câu hỏi thường gặp trong điều kiện đô thị | A | S00754 |
| S00791 | Giấy tờ thuê xe: câu hỏi thường gặp theo tình huống thực tế | A | S00755 |
| S00792 | Giấy tờ thuê xe: cách so sánh lựa chọn cho người mới | A | S00762 |
| S00793 | Giấy tờ thuê xe: cách so sánh lựa chọn khi dùng ngắn ngày | A | S00751 |
| S00794 | Giấy tờ thuê xe: cách so sánh lựa chọn khi dùng dài ngày | A | S00752 |
| S00795 | Giấy tờ thuê xe: cách so sánh lựa chọn khi đi đường dài | A | S00753 |
| S00796 | Giấy tờ thuê xe: cách so sánh lựa chọn trong điều kiện đô thị | A | S00754 |
| S00797 | Giấy tờ thuê xe: cách so sánh lựa chọn theo tình huống thực tế | A | S00755 |
| S00798 | Giấy tờ thuê xe: kinh nghiệm sử dụng thực tế cho người mới | A | S00204 |
| S00799 | Giấy tờ thuê xe: kinh nghiệm sử dụng thực tế khi dùng ngắn ngày | A | S00751 |
| S00800 | Giấy tờ thuê xe: kinh nghiệm sử dụng thực tế khi dùng dài ngày | A | S00752 |
| S00801 | Giấy tờ thuê xe: kinh nghiệm sử dụng thực tế khi đi đường dài | A | S00753 |
| S00802 | Giấy tờ thuê xe: kinh nghiệm sử dụng thực tế trong điều kiện đô thị | A | S00754 |
| S00803 | Giấy tờ thuê xe: kinh nghiệm sử dụng thực tế theo tình huống thực tế | A | S00755 |
| S00804 | Giấy tờ thuê xe: những điều cần nhớ khi hoàn trả cho người mới | A | S00588 |
| S00805 | Giấy tờ thuê xe: những điều cần nhớ khi hoàn trả khi dùng ngắn ngày | A | S00589 |
| S00806 | Giấy tờ thuê xe: những điều cần nhớ khi hoàn trả khi dùng dài ngày | A | S00590 |
| S00807 | Giấy tờ thuê xe: những điều cần nhớ khi hoàn trả khi đi đường dài | A | S00591 |
| S00808 | Giấy tờ thuê xe: những điều cần nhớ khi hoàn trả trong điều kiện đô thị | A | S00592 |
| S00809 | Giấy tờ thuê xe: những điều cần nhớ khi hoàn trả theo tình huống thực tế | A | S00593 |
| S00810 | Giấy tờ thuê xe: đặt cọc và nghiệm thu an toàn cho người mới | A | S00594 |
| S00811 | Giấy tờ thuê xe: đặt cọc và nghiệm thu an toàn khi dùng ngắn ngày | A | S00595 |
| S00812 | Giấy tờ thuê xe: đặt cọc và nghiệm thu an toàn khi dùng dài ngày | A | S00596 |
| S00813 | Giấy tờ thuê xe: đặt cọc và nghiệm thu an toàn khi đi đường dài | A | S00597 |
| S00814 | Giấy tờ thuê xe: đặt cọc và nghiệm thu an toàn trong điều kiện đô thị | A | S00598 |
| S00815 | Giấy tờ thuê xe: đặt cọc và nghiệm thu an toàn theo tình huống thực tế | A | S00599 |
| S00816 | Kinh nghiệm thuê xe máy: hướng dẫn thực tế cho người mới | A | S00528 |
| S00817 | Kinh nghiệm thuê xe máy: hướng dẫn thực tế khi dùng ngắn ngày | A | S00529 |
| S00818 | Kinh nghiệm thuê xe máy: hướng dẫn thực tế khi dùng dài ngày | A | S00530 |
| S00819 | Kinh nghiệm thuê xe máy: hướng dẫn thực tế khi đi đường dài | A | S00531 |
| S00820 | Kinh nghiệm thuê xe máy: hướng dẫn thực tế trong điều kiện đô thị | A | S00532 |
| S00821 | Kinh nghiệm thuê xe máy: hướng dẫn thực tế theo tình huống thực tế | A | S00533 |
| S00822 | Kinh nghiệm thuê xe máy: thủ tục và giấy tờ cho người mới | A | S00534 |
| S00823 | Kinh nghiệm thuê xe máy: thủ tục và giấy tờ khi dùng ngắn ngày | A | S00535 |
| S00824 | Kinh nghiệm thuê xe máy: thủ tục và giấy tờ khi dùng dài ngày | A | S00536 |
| S00825 | Kinh nghiệm thuê xe máy: thủ tục và giấy tờ khi đi đường dài | A | S00537 |
| S00826 | Kinh nghiệm thuê xe máy: thủ tục và giấy tờ trong điều kiện đô thị | A | S00538 |
| S00827 | Kinh nghiệm thuê xe máy: thủ tục và giấy tờ theo tình huống thực tế | A | S00539 |
| S00828 | Kinh nghiệm thuê xe máy: chi phí và cách tính cho người mới | A | S00540 |
| S00829 | Kinh nghiệm thuê xe máy: chi phí và cách tính khi dùng ngắn ngày | A | S00541 |
| S00830 | Kinh nghiệm thuê xe máy: chi phí và cách tính khi dùng dài ngày | A | S00542 |
| S00831 | Kinh nghiệm thuê xe máy: chi phí và cách tính khi đi đường dài | A | S00543 |
| S00832 | Kinh nghiệm thuê xe máy: chi phí và cách tính trong điều kiện đô thị | A | S00544 |
| S00833 | Kinh nghiệm thuê xe máy: chi phí và cách tính theo tình huống thực tế | A | S00545 |
| S00834 | Kinh nghiệm thuê xe máy: cách kiểm tra trước khi quyết định cho người mới | A | S00546 |
| S00835 | Kinh nghiệm thuê xe máy: cách kiểm tra trước khi quyết định khi dùng ngắn ngày | A | S00547 |
| S00836 | Kinh nghiệm thuê xe máy: cách kiểm tra trước khi quyết định khi dùng dài ngày | A | S00548 |
| S00837 | Kinh nghiệm thuê xe máy: cách kiểm tra trước khi quyết định khi đi đường dài | A | S00549 |
| S00838 | Kinh nghiệm thuê xe máy: cách kiểm tra trước khi quyết định trong điều kiện đô thị | A | S00550 |
| S00839 | Kinh nghiệm thuê xe máy: cách kiểm tra trước khi quyết định theo tình huống thực tế | A | S00551 |
| S00840 | Kinh nghiệm thuê xe máy: hợp đồng và điều khoản cần đọc cho người mới | A | S00552 |
| S00841 | Kinh nghiệm thuê xe máy: hợp đồng và điều khoản cần đọc khi dùng ngắn ngày | A | S00553 |
| S00842 | Kinh nghiệm thuê xe máy: hợp đồng và điều khoản cần đọc khi dùng dài ngày | A | S00554 |
| S00843 | Kinh nghiệm thuê xe máy: hợp đồng và điều khoản cần đọc khi đi đường dài | A | S00555 |
| S00844 | Kinh nghiệm thuê xe máy: hợp đồng và điều khoản cần đọc trong điều kiện đô thị | A | S00556 |
| S00845 | Kinh nghiệm thuê xe máy: hợp đồng và điều khoản cần đọc theo tình huống thực tế | A | S00557 |
| S00846 | Kinh nghiệm thuê xe máy: rủi ro thường gặp và cách tránh cho người mới | A | S00558 |
| S00847 | Kinh nghiệm thuê xe máy: rủi ro thường gặp và cách tránh khi dùng ngắn ngày | A | S00559 |
| S00848 | Kinh nghiệm thuê xe máy: rủi ro thường gặp và cách tránh khi dùng dài ngày | A | S00560 |
| S00849 | Kinh nghiệm thuê xe máy: rủi ro thường gặp và cách tránh khi đi đường dài | A | S00561 |
| S00850 | Kinh nghiệm thuê xe máy: rủi ro thường gặp và cách tránh trong điều kiện đô thị | A | S00562 |
| S00851 | Kinh nghiệm thuê xe máy: rủi ro thường gặp và cách tránh theo tình huống thực tế | A | S00563 |
| S00852 | Kinh nghiệm thuê xe máy: checklist từng bước cho người mới | A | S00564 |
| S00853 | Kinh nghiệm thuê xe máy: checklist từng bước khi dùng ngắn ngày | A | S00565 |
| S00854 | Kinh nghiệm thuê xe máy: checklist từng bước khi dùng dài ngày | A | S00566 |
| S00855 | Kinh nghiệm thuê xe máy: checklist từng bước khi đi đường dài | A | S00567 |
| S00856 | Kinh nghiệm thuê xe máy: checklist từng bước trong điều kiện đô thị | A | S00568 |
| S00857 | Kinh nghiệm thuê xe máy: checklist từng bước theo tình huống thực tế | A | S00569 |
| S00858 | Kinh nghiệm thuê xe máy: câu hỏi thường gặp cho người mới | A | S00570 |
| S00859 | Kinh nghiệm thuê xe máy: câu hỏi thường gặp khi dùng ngắn ngày | A | S00571 |
| S00860 | Kinh nghiệm thuê xe máy: câu hỏi thường gặp khi dùng dài ngày | A | S00572 |
| S00861 | Kinh nghiệm thuê xe máy: câu hỏi thường gặp khi đi đường dài | A | S00573 |
| S00862 | Kinh nghiệm thuê xe máy: câu hỏi thường gặp trong điều kiện đô thị | A | S00574 |
| S00863 | Kinh nghiệm thuê xe máy: câu hỏi thường gặp theo tình huống thực tế | A | S00575 |
| S00864 | Kinh nghiệm thuê xe máy: cách so sánh lựa chọn cho người mới | A | S00576 |
| S00865 | Kinh nghiệm thuê xe máy: cách so sánh lựa chọn khi dùng ngắn ngày | A | S00577 |
| S00866 | Kinh nghiệm thuê xe máy: cách so sánh lựa chọn khi dùng dài ngày | A | S00578 |
| S00867 | Kinh nghiệm thuê xe máy: cách so sánh lựa chọn khi đi đường dài | A | S00579 |
| S00868 | Kinh nghiệm thuê xe máy: cách so sánh lựa chọn trong điều kiện đô thị | A | S00580 |
| S00869 | Kinh nghiệm thuê xe máy: cách so sánh lựa chọn theo tình huống thực tế | A | S00581 |
| S00870 | Kinh nghiệm thuê xe máy: kinh nghiệm sử dụng thực tế cho người mới | A | S00582 |
| S00871 | Kinh nghiệm thuê xe máy: kinh nghiệm sử dụng thực tế khi dùng ngắn ngày | A | S00583 |
| S00872 | Kinh nghiệm thuê xe máy: kinh nghiệm sử dụng thực tế khi dùng dài ngày | A | S00584 |
| S00873 | Kinh nghiệm thuê xe máy: kinh nghiệm sử dụng thực tế khi đi đường dài | A | S00585 |
| S00874 | Kinh nghiệm thuê xe máy: kinh nghiệm sử dụng thực tế trong điều kiện đô thị | A | S00586 |
| S00875 | Kinh nghiệm thuê xe máy: kinh nghiệm sử dụng thực tế theo tình huống thực tế | A | S00587 |
| S00876 | Kinh nghiệm thuê xe máy: những điều cần nhớ khi hoàn trả cho người mới | A | S00588 |
| S00877 | Kinh nghiệm thuê xe máy: những điều cần nhớ khi hoàn trả khi dùng ngắn ngày | A | S00589 |
| S00878 | Kinh nghiệm thuê xe máy: những điều cần nhớ khi hoàn trả khi dùng dài ngày | A | S00590 |
| S00879 | Kinh nghiệm thuê xe máy: những điều cần nhớ khi hoàn trả khi đi đường dài | A | S00591 |
| S00880 | Kinh nghiệm thuê xe máy: những điều cần nhớ khi hoàn trả trong điều kiện đô thị | A | S00592 |
| S00881 | Kinh nghiệm thuê xe máy: những điều cần nhớ khi hoàn trả theo tình huống thực tế | A | S00593 |
| S00882 | Kinh nghiệm thuê xe máy: đặt cọc và nghiệm thu an toàn cho người mới | A | S00594 |
| S00883 | Kinh nghiệm thuê xe máy: đặt cọc và nghiệm thu an toàn khi dùng ngắn ngày | A | S00595 |
| S00884 | Kinh nghiệm thuê xe máy: đặt cọc và nghiệm thu an toàn khi dùng dài ngày | A | S00596 |
| S00885 | Kinh nghiệm thuê xe máy: đặt cọc và nghiệm thu an toàn khi đi đường dài | A | S00597 |
| S00886 | Kinh nghiệm thuê xe máy: đặt cọc và nghiệm thu an toàn trong điều kiện đô thị | A | S00598 |
| S00887 | Kinh nghiệm thuê xe máy: đặt cọc và nghiệm thu an toàn theo tình huống thực tế | A | S00599 |
| S00888 | Kiểm tra xe thuê: hướng dẫn thực tế cho người mới | A | S00546 |
| S00889 | Kiểm tra xe thuê: hướng dẫn thực tế khi dùng ngắn ngày | A | S00547 |
| S00890 | Kiểm tra xe thuê: hướng dẫn thực tế khi dùng dài ngày | A | S00548 |
| S00891 | Kiểm tra xe thuê: hướng dẫn thực tế khi đi đường dài | A | S00549 |
| S00892 | Kiểm tra xe thuê: hướng dẫn thực tế trong điều kiện đô thị | A | S00550 |
| S00893 | Kiểm tra xe thuê: hướng dẫn thực tế theo tình huống thực tế | A | S00551 |
| S00894 | Kiểm tra xe thuê: thủ tục và giấy tờ cho người mới | A | S00750 |
| S00895 | Kiểm tra xe thuê: thủ tục và giấy tờ khi dùng ngắn ngày | A | S00751 |
| S00896 | Kiểm tra xe thuê: thủ tục và giấy tờ khi dùng dài ngày | A | S00752 |
| S00897 | Kiểm tra xe thuê: thủ tục và giấy tờ khi đi đường dài | A | S00753 |
| S00898 | Kiểm tra xe thuê: thủ tục và giấy tờ trong điều kiện đô thị | A | S00754 |
| S00899 | Kiểm tra xe thuê: thủ tục và giấy tờ theo tình huống thực tế | A | S00755 |
| S00900 | Kiểm tra xe thuê: chi phí và cách tính cho người mới | A | S00540 |
| S00901 | Kiểm tra xe thuê: chi phí và cách tính khi dùng ngắn ngày | A | S00541 |
| S00902 | Kiểm tra xe thuê: chi phí và cách tính khi dùng dài ngày | A | S00542 |
| S00903 | Kiểm tra xe thuê: chi phí và cách tính khi đi đường dài | A | S00543 |
| S00904 | Kiểm tra xe thuê: chi phí và cách tính trong điều kiện đô thị | A | S00544 |
| S00905 | Kiểm tra xe thuê: chi phí và cách tính theo tình huống thực tế | A | S00545 |
| S00906 | Kiểm tra xe thuê: cách kiểm tra trước khi quyết định cho người mới | A | S00546 |
| S00907 | Kiểm tra xe thuê: cách kiểm tra trước khi quyết định khi dùng ngắn ngày | A | S00547 |
| S00908 | Kiểm tra xe thuê: cách kiểm tra trước khi quyết định khi dùng dài ngày | A | S00548 |
| S00909 | Kiểm tra xe thuê: cách kiểm tra trước khi quyết định khi đi đường dài | A | S00549 |
| S00910 | Kiểm tra xe thuê: cách kiểm tra trước khi quyết định trong điều kiện đô thị | A | S00550 |
| S00911 | Kiểm tra xe thuê: cách kiểm tra trước khi quyết định theo tình huống thực tế | A | S00551 |
| S00912 | Kiểm tra xe thuê: hợp đồng và điều khoản cần đọc cho người mới | A | S00225 |
| S00913 | Kiểm tra xe thuê: hợp đồng và điều khoản cần đọc khi dùng ngắn ngày | A | S00553 |
| S00914 | Kiểm tra xe thuê: hợp đồng và điều khoản cần đọc khi dùng dài ngày | A | S00554 |
| S00915 | Kiểm tra xe thuê: hợp đồng và điều khoản cần đọc khi đi đường dài | A | S00555 |
| S00916 | Kiểm tra xe thuê: hợp đồng và điều khoản cần đọc trong điều kiện đô thị | A | S00556 |
| S00917 | Kiểm tra xe thuê: hợp đồng và điều khoản cần đọc theo tình huống thực tế | A | S00557 |
| S00918 | Kiểm tra xe thuê: rủi ro thường gặp và cách tránh cho người mới | A | S00558 |
| S00919 | Kiểm tra xe thuê: rủi ro thường gặp và cách tránh khi dùng ngắn ngày | A | S00559 |
| S00920 | Kiểm tra xe thuê: rủi ro thường gặp và cách tránh khi dùng dài ngày | A | S00560 |
| S00921 | Kiểm tra xe thuê: rủi ro thường gặp và cách tránh khi đi đường dài | A | S00561 |
| S00922 | Kiểm tra xe thuê: rủi ro thường gặp và cách tránh trong điều kiện đô thị | A | S00562 |
| S00923 | Kiểm tra xe thuê: rủi ro thường gặp và cách tránh theo tình huống thực tế | A | S00563 |
| S00924 | Kiểm tra xe thuê: checklist từng bước cho người mới | A | S00564 |
| S00925 | Kiểm tra xe thuê: checklist từng bước khi dùng ngắn ngày | A | S00565 |
| S00926 | Kiểm tra xe thuê: checklist từng bước khi dùng dài ngày | A | S00566 |
| S00927 | Kiểm tra xe thuê: checklist từng bước khi đi đường dài | A | S00567 |
| S00928 | Kiểm tra xe thuê: checklist từng bước trong điều kiện đô thị | A | S00568 |
| S00929 | Kiểm tra xe thuê: checklist từng bước theo tình huống thực tế | A | S00551 |
| S00930 | Kiểm tra xe thuê: câu hỏi thường gặp cho người mới | A | S00570 |
| S00931 | Kiểm tra xe thuê: câu hỏi thường gặp khi dùng ngắn ngày | A | S00571 |
| S00932 | Kiểm tra xe thuê: câu hỏi thường gặp khi dùng dài ngày | A | S00572 |
| S00933 | Kiểm tra xe thuê: câu hỏi thường gặp khi đi đường dài | A | S00549 |
| S00934 | Kiểm tra xe thuê: câu hỏi thường gặp trong điều kiện đô thị | A | S00550 |
| S00935 | Kiểm tra xe thuê: câu hỏi thường gặp theo tình huống thực tế | A | S00575 |
| S00936 | Kiểm tra xe thuê: cách so sánh lựa chọn cho người mới | A | S00576 |
| S00937 | Kiểm tra xe thuê: cách so sánh lựa chọn khi dùng ngắn ngày | A | S00577 |
| S00938 | Kiểm tra xe thuê: cách so sánh lựa chọn khi dùng dài ngày | A | S00578 |
| S00939 | Kiểm tra xe thuê: cách so sánh lựa chọn khi đi đường dài | A | S00579 |
| S00940 | Kiểm tra xe thuê: cách so sánh lựa chọn trong điều kiện đô thị | A | S00580 |
| S00941 | Kiểm tra xe thuê: cách so sánh lựa chọn theo tình huống thực tế | A | S00581 |
| S00942 | Kiểm tra xe thuê: kinh nghiệm sử dụng thực tế cho người mới | A | S00582 |
| S00943 | Kiểm tra xe thuê: kinh nghiệm sử dụng thực tế khi dùng ngắn ngày | A | S00583 |
| S00944 | Kiểm tra xe thuê: kinh nghiệm sử dụng thực tế khi dùng dài ngày | A | S00584 |
| S00945 | Kiểm tra xe thuê: kinh nghiệm sử dụng thực tế khi đi đường dài | A | S00549 |
| S00946 | Kiểm tra xe thuê: kinh nghiệm sử dụng thực tế trong điều kiện đô thị | A | S00550 |
| S00947 | Kiểm tra xe thuê: kinh nghiệm sử dụng thực tế theo tình huống thực tế | A | S00551 |
| S00948 | Kiểm tra xe thuê: những điều cần nhớ khi hoàn trả cho người mới | A | S00588 |
| S00949 | Kiểm tra xe thuê: những điều cần nhớ khi hoàn trả khi dùng ngắn ngày | A | S00589 |
| S00950 | Kiểm tra xe thuê: những điều cần nhớ khi hoàn trả khi dùng dài ngày | A | S00590 |
| S00951 | Kiểm tra xe thuê: những điều cần nhớ khi hoàn trả khi đi đường dài | A | S00591 |
| S00952 | Kiểm tra xe thuê: những điều cần nhớ khi hoàn trả trong điều kiện đô thị | A | S00592 |
| S00953 | Kiểm tra xe thuê: những điều cần nhớ khi hoàn trả theo tình huống thực tế | A | S00593 |
| S00954 | Kiểm tra xe thuê: đặt cọc và nghiệm thu an toàn cho người mới | A | S00594 |
| S00955 | Kiểm tra xe thuê: đặt cọc và nghiệm thu an toàn khi dùng ngắn ngày | A | S00595 |
| S00956 | Kiểm tra xe thuê: đặt cọc và nghiệm thu an toàn khi dùng dài ngày | A | S00596 |
| S00957 | Kiểm tra xe thuê: đặt cọc và nghiệm thu an toàn khi đi đường dài | A | S00597 |
| S00958 | Kiểm tra xe thuê: đặt cọc và nghiệm thu an toàn trong điều kiện đô thị | A | S00598 |
| S00959 | Kiểm tra xe thuê: đặt cọc và nghiệm thu an toàn theo tình huống thực tế | A | S00599 |
| S00960 | Thuê xe điện: hướng dẫn thực tế cho người mới | A | S00207 |
| S00961 | Thuê xe điện: hướng dẫn thực tế khi dùng ngắn ngày | A | S00207 |
| S00962 | Thuê xe điện: hướng dẫn thực tế khi dùng dài ngày | A | S00017 |
| S00963 | Thuê xe điện: hướng dẫn thực tế khi đi đường dài | A | S00210 |
| S00964 | Thuê xe điện: hướng dẫn thực tế trong điều kiện đô thị | A | S00212 |
| S00965 | Thuê xe điện: hướng dẫn thực tế theo tình huống thực tế | A | S00207 |
| S00966 | Thuê xe điện: thủ tục và giấy tờ cho người mới | B | S00004 |
| S00967 | Thuê xe điện: thủ tục và giấy tờ khi dùng ngắn ngày | A | S00004 |
| S00968 | Thuê xe điện: thủ tục và giấy tờ khi dùng dài ngày | A | S00017 |
| S00969 | Thuê xe điện: thủ tục và giấy tờ khi đi đường dài | A | S00210 |
| S00970 | Thuê xe điện: thủ tục và giấy tờ trong điều kiện đô thị | A | S00212 |
| S00971 | Thuê xe điện: thủ tục và giấy tờ theo tình huống thực tế | A | S00004 |
| S00972 | Thuê xe điện: chi phí và cách tính cho người mới | A | S00211 |
| S00973 | Thuê xe điện: chi phí và cách tính khi dùng ngắn ngày | A | S00211 |
| S00974 | Thuê xe điện: chi phí và cách tính khi dùng dài ngày | A | S00017 |
| S00975 | Thuê xe điện: chi phí và cách tính khi đi đường dài | A | S00211 |
| S00976 | Thuê xe điện: chi phí và cách tính trong điều kiện đô thị | A | S00212 |
| S00977 | Thuê xe điện: chi phí và cách tính theo tình huống thực tế | A | S00211 |
| S00978 | Thuê xe điện: cách kiểm tra trước khi quyết định cho người mới | A | S00207 |
| S00979 | Thuê xe điện: cách kiểm tra trước khi quyết định khi dùng ngắn ngày | A | S00004 |
| S00980 | Thuê xe điện: cách kiểm tra trước khi quyết định khi dùng dài ngày | A | S00017 |
| S00981 | Thuê xe điện: cách kiểm tra trước khi quyết định khi đi đường dài | A | S00210 |
| S00982 | Thuê xe điện: cách kiểm tra trước khi quyết định trong điều kiện đô thị | A | S00212 |
| S00983 | Thuê xe điện: cách kiểm tra trước khi quyết định theo tình huống thực tế | A | S00207 |
| S00984 | Thuê xe điện: hợp đồng và điều khoản cần đọc cho người mới | A | S00004 |
| S00985 | Thuê xe điện: hợp đồng và điều khoản cần đọc khi dùng ngắn ngày | A | S00004 |
| S00986 | Thuê xe điện: hợp đồng và điều khoản cần đọc khi dùng dài ngày | A | S00017 |
| S00987 | Thuê xe điện: hợp đồng và điều khoản cần đọc khi đi đường dài | A | S00210 |
| S00988 | Thuê xe điện: hợp đồng và điều khoản cần đọc trong điều kiện đô thị | A | S00212 |
| S00989 | Thuê xe điện: hợp đồng và điều khoản cần đọc theo tình huống thực tế | A | S00004 |
| S00990 | Thuê xe điện: rủi ro thường gặp và cách tránh cho người mới | A | S00004 |
| S00991 | Thuê xe điện: rủi ro thường gặp và cách tránh khi dùng ngắn ngày | A | S00207 |
| S00992 | Thuê xe điện: rủi ro thường gặp và cách tránh khi dùng dài ngày | A | S00017 |
| S00993 | Thuê xe điện: rủi ro thường gặp và cách tránh khi đi đường dài | A | S00210 |
| S00994 | Thuê xe điện: rủi ro thường gặp và cách tránh trong điều kiện đô thị | A | S00212 |
| S00995 | Thuê xe điện: rủi ro thường gặp và cách tránh theo tình huống thực tế | A | S00208 |
| S00996 | Thuê xe điện: checklist từng bước cho người mới | A | S00207 |
| S00997 | Thuê xe điện: checklist từng bước khi dùng ngắn ngày | A | S00004 |
| S00998 | Thuê xe điện: checklist từng bước khi dùng dài ngày | A | S00017 |
| S00999 | Thuê xe điện: checklist từng bước khi đi đường dài | A | S00210 |
| S01000 | Thuê xe điện: checklist từng bước trong điều kiện đô thị | A | S00212 |
| S01001 | Thuê xe điện: checklist từng bước theo tình huống thực tế | A | S00207 |
| S01002 | Thuê xe điện: câu hỏi thường gặp cho người mới | A | S00004 |
| S01003 | Thuê xe điện: câu hỏi thường gặp khi dùng ngắn ngày | A | S00207 |
| S01004 | Thuê xe điện: câu hỏi thường gặp khi dùng dài ngày | A | S00017 |
| S01005 | Thuê xe điện: câu hỏi thường gặp khi đi đường dài | A | S00210 |
| S01006 | Thuê xe điện: câu hỏi thường gặp trong điều kiện đô thị | A | S00212 |
| S01007 | Thuê xe điện: câu hỏi thường gặp theo tình huống thực tế | A | S00207 |
| S01008 | Thuê xe điện: cách so sánh lựa chọn cho người mới | A | S00207 |
| S01009 | Thuê xe điện: cách so sánh lựa chọn khi dùng ngắn ngày | A | S00211 |
| S01010 | Thuê xe điện: cách so sánh lựa chọn khi dùng dài ngày | A | S00017 |
| S01011 | Thuê xe điện: cách so sánh lựa chọn khi đi đường dài | A | S00210 |
| S01012 | Thuê xe điện: cách so sánh lựa chọn trong điều kiện đô thị | A | S00212 |
| S01013 | Thuê xe điện: cách so sánh lựa chọn theo tình huống thực tế | A | S00207 |
| S01014 | Thuê xe điện: kinh nghiệm sử dụng thực tế cho người mới | A | S00209 |
| S01015 | Thuê xe điện: kinh nghiệm sử dụng thực tế khi dùng ngắn ngày | A | S00010 |
| S01016 | Thuê xe điện: kinh nghiệm sử dụng thực tế khi dùng dài ngày | A | S00017 |
| S01017 | Thuê xe điện: kinh nghiệm sử dụng thực tế khi đi đường dài | A | S00210 |
| S01018 | Thuê xe điện: kinh nghiệm sử dụng thực tế trong điều kiện đô thị | A | S00212 |
| S01019 | Thuê xe điện: kinh nghiệm sử dụng thực tế theo tình huống thực tế | A | S00207 |
| S01020 | Thuê xe điện: những điều cần nhớ khi hoàn trả cho người mới | A | S00207 |
| S01021 | Thuê xe điện: những điều cần nhớ khi hoàn trả khi dùng ngắn ngày | A | S00010 |
| S01022 | Thuê xe điện: những điều cần nhớ khi hoàn trả khi dùng dài ngày | A | S00017 |
| S01023 | Thuê xe điện: những điều cần nhớ khi hoàn trả khi đi đường dài | A | S00207 |
| S01024 | Thuê xe điện: những điều cần nhớ khi hoàn trả trong điều kiện đô thị | A | S00010 |
| S01025 | Thuê xe điện: những điều cần nhớ khi hoàn trả theo tình huống thực tế | A | S00207 |
| S01026 | Thuê xe điện: đặt cọc và nghiệm thu an toàn cho người mới | A | S00207 |
| S01027 | Thuê xe điện: đặt cọc và nghiệm thu an toàn khi dùng ngắn ngày | A | S00207 |
| S01028 | Thuê xe điện: đặt cọc và nghiệm thu an toàn khi dùng dài ngày | A | S00017 |
| S01029 | Thuê xe điện: đặt cọc và nghiệm thu an toàn khi đi đường dài | A | S00207 |
| S01030 | Thuê xe điện: đặt cọc và nghiệm thu an toàn trong điều kiện đô thị | A | S00207 |
| S01031 | Thuê xe điện: đặt cọc và nghiệm thu an toàn theo tình huống thực tế | A | S00207 |
| S01032 | Pin xe điện: hướng dẫn thực tế cho người mới | A | S00208 |
| S01033 | Pin xe điện: hướng dẫn thực tế khi dùng ngắn ngày | A | S00208 |
| S01034 | Pin xe điện: hướng dẫn thực tế khi dùng dài ngày | A | S00017 |
| S01035 | Pin xe điện: hướng dẫn thực tế khi đi đường dài | A | S00210 |
| S01036 | Pin xe điện: hướng dẫn thực tế trong điều kiện đô thị | A | S00212 |
| S01037 | Pin xe điện: hướng dẫn thực tế theo tình huống thực tế | A | S00208 |
| S01038 | Pin xe điện: thủ tục và giấy tờ cho người mới | A | S00208 |
| S01039 | Pin xe điện: thủ tục và giấy tờ khi dùng ngắn ngày | A | S00208 |
| S01040 | Pin xe điện: thủ tục và giấy tờ khi dùng dài ngày | A | S00017 |
| S01041 | Pin xe điện: thủ tục và giấy tờ khi đi đường dài | A | S00210 |
| S01042 | Pin xe điện: thủ tục và giấy tờ trong điều kiện đô thị | A | S00212 |
| S01043 | Pin xe điện: thủ tục và giấy tờ theo tình huống thực tế | A | S00208 |
| S01044 | Pin xe điện: chi phí và cách tính cho người mới | A | S00211 |
| S01045 | Pin xe điện: chi phí và cách tính khi dùng ngắn ngày | A | S00211 |
| S01046 | Pin xe điện: chi phí và cách tính khi dùng dài ngày | A | S00017 |
| S01047 | Pin xe điện: chi phí và cách tính khi đi đường dài | A | S00211 |
| S01048 | Pin xe điện: chi phí và cách tính trong điều kiện đô thị | A | S00211 |
| S01049 | Pin xe điện: chi phí và cách tính theo tình huống thực tế | A | S00211 |
| S01050 | Pin xe điện: cách kiểm tra trước khi quyết định cho người mới | A | S00208 |
| S01051 | Pin xe điện: cách kiểm tra trước khi quyết định khi dùng ngắn ngày | A | S00207 |
| S01052 | Pin xe điện: cách kiểm tra trước khi quyết định khi dùng dài ngày | A | S00017 |
| S01053 | Pin xe điện: cách kiểm tra trước khi quyết định khi đi đường dài | A | S00210 |
| S01054 | Pin xe điện: cách kiểm tra trước khi quyết định trong điều kiện đô thị | A | S00004 |
| S01055 | Pin xe điện: cách kiểm tra trước khi quyết định theo tình huống thực tế | A | S00208 |
| S01056 | Pin xe điện: hợp đồng và điều khoản cần đọc cho người mới | A | S00208 |
| S01057 | Pin xe điện: hợp đồng và điều khoản cần đọc khi dùng ngắn ngày | A | S00004 |
| S01058 | Pin xe điện: hợp đồng và điều khoản cần đọc khi dùng dài ngày | A | S00017 |
| S01059 | Pin xe điện: hợp đồng và điều khoản cần đọc khi đi đường dài | A | S00210 |
| S01060 | Pin xe điện: hợp đồng và điều khoản cần đọc trong điều kiện đô thị | A | S00212 |
| S01061 | Pin xe điện: hợp đồng và điều khoản cần đọc theo tình huống thực tế | A | S00208 |
| S01062 | Pin xe điện: rủi ro thường gặp và cách tránh cho người mới | A | S00208 |
| S01063 | Pin xe điện: rủi ro thường gặp và cách tránh khi dùng ngắn ngày | A | S00207 |
| S01064 | Pin xe điện: rủi ro thường gặp và cách tránh khi dùng dài ngày | A | S00017 |
| S01065 | Pin xe điện: rủi ro thường gặp và cách tránh khi đi đường dài | A | S00210 |
| S01066 | Pin xe điện: rủi ro thường gặp và cách tránh trong điều kiện đô thị | A | S00212 |
| S01067 | Pin xe điện: rủi ro thường gặp và cách tránh theo tình huống thực tế | A | S00208 |
| S01068 | Pin xe điện: checklist từng bước cho người mới | A | S00207 |
| S01069 | Pin xe điện: checklist từng bước khi dùng ngắn ngày | A | S00207 |
| S01070 | Pin xe điện: checklist từng bước khi dùng dài ngày | A | S00017 |
| S01071 | Pin xe điện: checklist từng bước khi đi đường dài | A | S00209 |
| S01072 | Pin xe điện: checklist từng bước trong điều kiện đô thị | A | S00212 |
| S01073 | Pin xe điện: checklist từng bước theo tình huống thực tế | A | S00208 |
| S01074 | Pin xe điện: câu hỏi thường gặp cho người mới | A | S00040 |
| S01075 | Pin xe điện: câu hỏi thường gặp khi dùng ngắn ngày | A | S00208 |
| S01076 | Pin xe điện: câu hỏi thường gặp khi dùng dài ngày | A | S00017 |
| S01077 | Pin xe điện: câu hỏi thường gặp khi đi đường dài | A | S00210 |
| S01078 | Pin xe điện: câu hỏi thường gặp trong điều kiện đô thị | A | S00212 |
| S01079 | Pin xe điện: câu hỏi thường gặp theo tình huống thực tế | A | S00208 |
| S01080 | Pin xe điện: cách so sánh lựa chọn cho người mới | A | S00341 |
| S01081 | Pin xe điện: cách so sánh lựa chọn khi dùng ngắn ngày | A | S00208 |
| S01082 | Pin xe điện: cách so sánh lựa chọn khi dùng dài ngày | A | S00341 |

Chứng cứ trích dẫn và lý do từng slot nằm trong file JSON (trường `evidence`, `rationale`).
