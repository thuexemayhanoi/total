PROJECT: AI WIKI TOTAL

Repository:
thuexemayhanoi/total

Public URL:
https://thuexemayhanoi.github.io/total/

SITE NAME:
AI WIKI TOTAL

LANGUAGE:
Vietnamese only for public-facing content.

SEO LANGUAGE:
Vietnamese.

DEFAULT LOCALE:
vi-VN

MISSION:
Dựng một cổng kiến thức tổng hợp tiếng Việt lâu dài về:

- Thuê xe
- Xe máy
- Xe điện
- Xe ô tô
- Sửa chữa / bảo dưỡng
- Phụ tùng
- Giá xe
- Thị trường
- Review
- Pháp lý
- Hành trình
- Địa phương
- Bản đồ
- Hướng dẫn
- Kiến thức kỹ thuật

Đây là nền móng cho một hệ thống có thể mở rộng lên 6.000–10.000 bài
trong tương lai.

KHÔNG viết hàng nghìn bài ngay.

Giai đoạn này:
dựng kiến trúc + category hubs + child hubs + design system + factory +
search + chatbot + SEO foundation + tests + deploy.

==================================================
1. BRAND
==================================================

Public brand:

AI WIKI TOTAL

Không dùng tên TOTAL đơn lẻ làm brand chính.

Title homepage định hướng:

AI WIKI TOTAL — Cẩm nang xe, thuê xe và kiến thức giao thông Việt Nam

Tagline:

Kiến thức xe, thuê xe và hành trình cho người Việt.

Tất cả UI công khai:
TIẾNG VIỆT.

Không để:
Home
About
Search
Read more
Latest articles
Category

Phải dùng:
Trang chủ
Giới thiệu
Tìm kiếm
Đọc tiếp
Bài mới
Danh mục
v.v.

==================================================
2. THEME
==================================================

THEME NAME:

TOTAL ATLAS

DESIGN CONCEPT:

Editorial
+
Knowledge Atlas
+
Technical Magazine
+
Knowledge Graph

Không giống /lab.
Không giống /shop.
Không giống /blog.

Không giống:
- SaaS landing page
- admin dashboard
- spam SEO blog
- WordPress template phổ thông

==================================================
3. COLOR SYSTEM
==================================================

Base:

background:
#F7F5EF

text:
#172033

brand cobalt:
#3157D5

accent amber:
#F59E0B

secondary:
#64748B

footer:
deep navy

Card:
white / near-white

Dùng màu tiết chế.

Không gradient quá nhiều.
Không glassmorphism nặng.

==================================================
4. CATEGORY ARCHITECTURE
==================================================

Có 15 DANH MỤC CHA:

/total/thue-xe/
/total/guide/
/total/hub/
/total/wiki/
/total/learn/
/total/moto/
/total/ride/
/total/tips/
/total/docs/
/total/news/
/total/local/
/total/map/
/total/garage/
/total/market/
/total/review/

THUÊ XE là một cluster quan trọng,
không phải mục phụ.

==================================================
5. THUÊ XE — BUSINESS / RENTAL CLUSTER
==================================================

Parent:

/total/thue-xe/

Child hubs:

/total/thue-xe/xe-may/
/total/thue-xe/xe-dien/
/total/thue-xe/xe-oto/

Có thể mở rộng về sau thành:

/total/thue-xe/xe-may/ha-noi/
/total/thue-xe/xe-may/long-bien/
/total/thue-xe/xe-dien/ha-noi/
/total/thue-xe/xe-oto/ha-noi/

NHƯNG:
không tự tạo hàng loạt location page trong phase này.

==================================================
6. SEO OWNERSHIP — KHÔNG CANNIBALIZATION
==================================================

Phân intent rõ:

/thue-xe/
= transactional / commercial rental intent

Ví dụ:
- thuê xe máy
- thuê xe điện
- thuê xe ô tô
- thủ tục thuê
- giá thuê
- đặt cọc
- kinh nghiệm chọn xe thuê

/moto/
= kiến thức về xe máy, model, thông số, vận hành

/market/
= giá thị trường, mua bán, chi phí

/review/
= đánh giá / so sánh

/local/
= thông tin theo địa phương

/garage/
= sửa chữa / bảo dưỡng

Không để:

/moto/honda-vision/
và
/thue-xe/xe-may/honda-vision/

cùng nhắm một intent.

Ví dụ:

/moto/honda/vision/
→ thông số, vận hành, lịch sử, kỹ thuật

/thue-xe/xe-may/honda-vision/
→ nhu cầu thuê Vision, thủ tục, cách chọn, chi phí thuê nếu có dữ liệu xác minh

==================================================
7. VERIFIED BUSINESS FACTS
==================================================

Nếu repo có verified business facts của chủ sở hữu,
chỉ dùng đúng dữ liệu xác minh.

Không bịa:
- giá
- địa chỉ
- giờ mở cửa
- xe đang có
- phạm vi giao xe
- điều khoản
- dịch vụ ngoài khu vực thực tế

Đối với nội dung ngoài khu vực verified:
INFORMATIONAL ONLY.

Không giả vờ có chi nhánh toàn quốc.

==================================================
8. GUIDE
==================================================

/total/guide/

Child hubs:

/total/guide/mua-xe/
/total/guide/thue-xe/
/total/guide/su-dung-xe/
/total/guide/bao-duong/
/total/guide/xu-ly-su-co/
/total/guide/thu-tuc-xe/

Lưu ý:

/guide/thue-xe/
= hướng dẫn kiến thức thuê xe

/thue-xe/
= cluster commercial / rental

Không duplicate intent.

==================================================
9. HUB
==================================================

/total/hub/

Child hubs:

/total/hub/hang-xe/
/total/hub/dong-xe/
/total/hub/loai-xe/
/total/hub/nhu-cau-su-dung/
/total/hub/dia-phuong/
/total/hub/van-de-thuong-gap/

HUB = directory của các hub.

Không sản xuất hàng loạt bài riêng cạnh tranh category khác.

==================================================
10. WIKI
==================================================

/total/wiki/

Child hubs:

/total/wiki/cau-tao-xe/
/total/wiki/dong-co/
/total/wiki/dien-xe/
/total/wiki/he-thong-phanh/
/total/wiki/lop-banh-xe/
/total/wiki/dau-nhot/
/total/wiki/ac-quy-pin/
/total/wiki/thuat-ngu-xe/

==================================================
11. LEARN
==================================================

/total/learn/

Child hubs:

/total/learn/ky-thuat-lai-xe/
/total/learn/cham-soc-xe/
/total/learn/doc-thong-so/
/total/learn/chuan-doan-loi/
/total/learn/kien-thuc-phap-ly/
/total/learn/kien-thuc-xe-dien/

==================================================
12. MOTO
==================================================

/total/moto/

Child hubs:

/total/moto/honda/
/total/moto/yamaha/
/total/moto/suzuki/
/total/moto/sym/
/total/moto/piaggio/
/total/moto/xe-50cc/
/total/moto/xe-so/
/total/moto/xe-ga/
/total/moto/xe-con-tay/

==================================================
13. RIDE
==================================================

/total/ride/

Child hubs:

/total/ride/cung-duong/
/total/ride/du-lich-xe-may/
/total/ride/di-phuot/
/total/ride/lai-xe-duong-dai/
/total/ride/lai-xe-trong-thanh-pho/
/total/ride/an-toan-giao-thong/

==================================================
14. TIPS
==================================================

/total/tips/

Child hubs:

/total/tips/meo-lai-xe/
/total/tips/meo-tiet-kiem-xang/
/total/tips/meo-bao-duong/
/total/tips/meo-mua-xe/
/total/tips/meo-thue-xe/
/total/tips/meo-xu-ly-su-co/

==================================================
15. DOCS
==================================================

/total/docs/

Child hubs:

/total/docs/huong-dan-su-dung/
/total/docs/checklist/
/total/docs/quy-trinh-bao-duong/
/total/docs/thong-so-ky-thuat/
/total/docs/bieu-mau-thu-tuc/
/total/docs/tai-lieu-tham-khao/

==================================================
16. NEWS
==================================================

/total/news/

Child hubs:

/total/news/thi-truong-xe/
/total/news/xe-moi/
/total/news/xe-dien/
/total/news/chinh-sach-phap-ly/
/total/news/gia-xe/
/total/news/cong-nghe-xe/

News content phải có ngày rõ ràng.

Không evergreen hóa thông tin đã lỗi thời.

==================================================
17. LOCAL
==================================================

/total/local/

Initial hubs:

/total/local/ha-noi/
/total/local/tp-hcm/
/total/local/da-nang/
/total/local/hai-phong/
/total/local/can-tho/
/total/local/tinh-thanh/
/total/local/quan-huyen/

Không tạo doorway city pages.

Mỗi local page cần giá trị địa phương thực tế.

==================================================
18. MAP
==================================================

/total/map/

Child hubs:

/total/map/cay-xang/
/total/map/tram-sac/
/total/map/diem-sua-xe/
/total/map/bai-do-xe/
/total/map/diem-dang-ky-xe/
/total/map/diem-thi-bang-lai/

Chỉ đưa địa điểm xác minh được.

Không invent POI.

==================================================
19. GARAGE
==================================================

/total/garage/

Child hubs:

/total/garage/dong-co/
/total/garage/phanh/
/total/garage/lop/
/total/garage/dien-ac-quy/
/total/garage/truyen-dong/
/total/garage/phun-xang-che-hoa-khi/
/total/garage/bao-duong-dinh-ky/
/total/garage/loi-thuong-gap/

==================================================
20. MARKET
==================================================

/total/market/

Child hubs:

/total/market/gia-xe-moi/
/total/market/gia-xe-cu/
/total/market/gia-phu-tung/
/total/market/chi-phi-su-dung/
/total/market/khau-hao/
/total/market/mua-ban-xe-cu/
/total/market/xu-huong-thi-truong/

==================================================
21. REVIEW
==================================================

/total/review/

Child hubs:

/total/review/review-xe/
/total/review/so-sanh-xe/
/total/review/review-phu-tung/
/total/review/review-mu-bao-hiem/
/total/review/review-lop/
/total/review/review-dau-nhot/
/total/review/review-xe-dien/

==================================================
22. CONTENT TREE
==================================================

Hierarchy:

AI WIKI TOTAL
↓
Danh mục cha
↓
SEO hub con
↓
Article

Ví dụ:

/total/thue-xe/
/total/thue-xe/xe-may/
/total/thue-xe/xe-may/thue-honda-vision-ha-noi/

/total/moto/
/total/moto/honda/
/total/moto/honda/honda-vision/

/total/garage/
/total/garage/phanh/
/total/garage/phanh/phanh-dia-keu/

==================================================
23. MATRIX
==================================================

Matrix capacity:

10,000 slots

Không fill ngay.

Initial planned target:
khoảng 6,000 potential topics

Nhưng phase đầu chỉ populate:
architecture + hubs + seed content.

4,000 slots còn lại giữ cho:

- GSC query discovery
- model xe mới
- địa phương mới
- luật mới
- thị trường
- technical gaps
- rental intent gaps

==================================================
24. ARTICLE LANGUAGE
==================================================

Toàn bộ article:

TIẾNG VIỆT.

Target:

1.600–3.000 từ tiếng Việt.

Simple:
1.600–2.000

Deep:
2.000–3.000

QA:
>=90

Không dùng:
- Vietnamese dịch máy cứng
- câu tiếng Anh chen không cần thiết
- heading tiếng Anh
- CTA tiếng Anh

==================================================
25. SEO TITLE
==================================================

SEO title phải tự nhiên bằng tiếng Việt.

Không template máy móc:

[keyword] | AI WIKI TOTAL

cho mọi bài.

Có thể dùng brand khi phù hợp,
nhưng variation phải tự nhiên.

Ví dụ:

Thuê xe máy Hà Nội: Giá, thủ tục và kinh nghiệm chọn xe

Honda Vision: Thông số, mức tiêu hao và kinh nghiệm sử dụng

Xe máy bị bó phanh: Nguyên nhân và cách xử lý an toàn

==================================================
26. META DESCRIPTION
==================================================

Meta tiếng Việt.

Không keyword stuffing.

Phải:
- mô tả đúng intent
- có giá trị
- không hứa sai
- không bịa số liệu

==================================================
27. INTERNAL LINKING
==================================================

Mỗi article:

→ child hub
→ parent category
→ 2–5 article liên quan

Có thể thêm cross-cluster link khi hợp intent.

Ví dụ:

/thue-xe/xe-may/
→ /guide/thue-xe/
→ /moto/honda/
→ /local/ha-noi/

Nhưng không spam exact-match anchor.

==================================================
28. HOMEPAGE
==================================================

Hero:

AI WIKI TOTAL

Cẩm nang xe, thuê xe và giao thông Việt Nam.

Khám phá kiến thức về:
thuê xe máy,
xe điện,
xe ô tô,
sửa chữa,
giá xe,
địa phương
và hàng nghìn chủ đề liên quan.

Search lớn:

“Bạn muốn tìm gì?”

Placeholder:

“Thuê xe máy Hà Nội, Honda Vision, lỗi phanh, giá xe cũ...”

==================================================
29. HOMEPAGE PRIORITY
==================================================

Thuê Xe phải xuất hiện nổi bật.

Không giấu ở cuối 15 category.

Homepage top category order đề xuất:

1. Thuê Xe
2. Xe Máy
3. Garage
4. Local
5. Review
6. Market

Sau đó mới:
Guide
Wiki
Learn
Ride
Tips
Docs
News
Map
Hub

==================================================
30. HEADER
==================================================

Desktop primary menu:

Trang chủ
Thuê xe
Xe máy
Sửa chữa
Địa phương
Thị trường
Đánh giá
Tất cả

“Tất cả”
→ mega menu 15 danh mục.

==================================================
31. THUÊ XE MEGA MENU
==================================================

Thuê xe dropdown:

Xe máy
Xe điện
Xe ô tô

Mô tả:

Xe máy
Giá thuê, thủ tục và kinh nghiệm chọn xe.

Xe điện
Thuê xe điện, pin, phạm vi hoạt động và chi phí.

Xe ô tô
Kiến thức thuê ô tô, thủ tục và lựa chọn phù hợp.

Không bịa sản phẩm thực tế đang có.

==================================================
32. CATEGORY ACCENTS
==================================================

Thuê Xe → emerald / green-blue

Guide → cobalt
Hub → navy
Wiki → violet
Learn → cyan
Moto → blue
Ride → teal
Tips → amber
Docs → slate
News → red
Local → emerald
Map → cyan
Garage → orange
Market → gold
Review → purple

==================================================
33. ARTICLE DESIGN
==================================================

Style:

Vietnamese editorial technical magazine.

Components:

- Breadcrumb
- Nhãn chuyên mục
- H1
- Tóm tắt
- Câu trả lời nhanh
- Điểm chính
- Mục lục
- H2/H3
- Checklist
- Các bước thực hiện
- Bảng so sánh
- Lưu ý
- Cảnh báo
- Nguồn tham khảo
- Bài liên quan

Tên component hiển thị bằng tiếng Việt.

==================================================
34. SEARCH
==================================================

Search index:

title
description
category
hub
entities
keywords
summary

Search result UI tiếng Việt.

Không để:
“No results”

Phải:
“Không tìm thấy kết quả phù hợp.”

==================================================
35. CHATBOT
==================================================

Public name:

Trợ lý AI WIKI TOTAL

Launcher:

Hỏi AI WIKI TOTAL

Hoặc compact:

Hỏi AI

UI:
command palette + assistant

Không sales chatbot.

Không tự quảng cáo dịch vụ.

Không Zalo CTA tự động.

Không số điện thoại trong mọi câu trả lời.

==================================================
36. CHATBOT KNOWLEDGE
==================================================

Retrieval first.

Ưu tiên dữ liệu trong AI WIKI TOTAL.

Nếu câu hỏi liên quan thuê xe:

phân biệt rõ:
- thông tin editorial
- thông tin business verified

Không tự biến bài toàn quốc thành claim dịch vụ toàn quốc.

==================================================
37. AGENTS.md
==================================================

Tạo AGENTS.md.

Mọi agent phải đọc trước khi sửa repo.

Định nghĩa rõ:

SITE:
AI WIKI TOTAL

LANGUAGE:
VIETNAMESE

SEO:
VIETNAMESE FIRST

ARCHITECTURE:
15 parent categories

BUSINESS CLUSTER:
THUÊ XE

RENTAL CHILD HUBS:
XE MÁY
XE ĐIỆN
XE Ô TÔ

Không agent nào được tự đổi architecture mà không có yêu cầu.

==================================================
38. DOCS
==================================================

Create:

docs/ARCHITECTURE.md
docs/CONTENT-FACTORY.md
docs/ARTICLE-RULES.md
docs/SEO-HUBS.md
docs/SEO-INTENT-OWNERSHIP.md
docs/INTERNAL-LINKING.md
docs/RESEARCH-BEFORE-WRITE.md
docs/SOURCE-POLICY.md
docs/LOCAL-SEO.md
docs/RENTAL-SEO.md
docs/QA.md
docs/PUBLISH.md
docs/RECOVERY.md
docs/DESIGN-SYSTEM.md
docs/CHATBOT.md
docs/SEARCH.md

==================================================
39. FACTORY
==================================================

Lifecycle:

PLANNED
→ RESEARCH
→ WRITING
→ QA
→ PASS
→ PUBLISHED

Failure:

QA
→ REPAIR
→ QA
→ BLOCKED

One writer.

Writer lock.

Checkpoint.

Transaction protection.

Resume.

No AI API inside GitHub Actions.

==================================================
40. GENERATOR FIRST
==================================================

Shared:

header
footer
nav
mega menu
article shell
hub shell
schema
breadcrumb
related articles
search
chatbot

Không patch hàng trăm HTML file bằng tay.

==================================================
41. SCHEMA
==================================================

Use appropriate:

WebSite
WebPage
CollectionPage
Article
BreadcrumbList
ItemList

LocalBusiness:
ONLY when verified and appropriate.

Không đặt LocalBusiness schema lên hàng nghìn bài informational.

==================================================
42. SITEMAP
==================================================

Generate sitemap.

Support scale.

Nếu vượt ngưỡng hợp lý:
sitemap index + segmented sitemap.

Ví dụ:

sitemap-pages.xml
sitemap-articles.xml
sitemap-categories.xml

==================================================
43. ROBOTS
==================================================

Valid robots.txt.

Không block public content.

Drafts không được deploy.

==================================================
44. RESPONSIVE
==================================================

Test:

Mobile
320
360
390
430

Tablet
768
820
1024

Desktop
1280
1440
1920

==================================================
45. PERFORMANCE
==================================================

Static-first.

Prefer:

HTML
CSS
Vanilla JS
SVG

Không framework nặng nếu không cần.

==================================================
46. ACCESSIBILITY
==================================================

Vietnamese labels.

Keyboard.

ARIA.

Focus states.

Contrast AA.

Safe-area iPhone.

Touch >=44px.

==================================================
47. INITIAL CONTENT
==================================================

Không viết 6.000 bài.

Chỉ viết đủ content để:

homepage hữu ích

15 parent categories hữu ích

child hubs có semantic context

THUÊ XE:
ưu tiên có content nền tốt ngay từ đầu.

Ví dụ parent /thue-xe/ phải giải thích:

- loại phương tiện
- cách chọn
- thủ tục chung
- giá thuê phụ thuộc gì
- đặt cọc
- giấy tờ
- an toàn
- xe máy
- xe điện
- xe ô tô

Không bịa bảng giá nếu chưa có verified data.

==================================================
48. FUTURE COMMAND SUPPORT
==================================================

Architecture phải xử lý được lệnh:

“Viết 20 bài cho /thue-xe/xe-may/”

“Mở rộng /thue-xe/xe-dien/”

“Thêm cluster thuê ô tô Hà Nội”

“Viết 30 bài /garage/phanh/”

“Audit tất cả bài dưới 90”

“Mở rộng /local/ha-noi/”

mà không cần redesign factory.

==================================================
49. TESTS
==================================================

Test:

15 parent categories

all child hubs

Thuê Xe parent

Xe Máy child

Xe Điện child

Xe Ô Tô child

Vietnamese title

Vietnamese nav

canonical

breadcrumb

schema

internal links

matrix

factory state

search index

chatbot index

sitemap

robots

no orphan pages

no duplicate intent obvious from matrix

==================================================
50. PAGES
==================================================

GitHub Pages:

main
/(root)

Không custom deploy architecture phức tạp nếu không cần.

Root public files phải commit đúng.

==================================================
51. LIVE VERIFY
==================================================

Verify:

/total/

/total/thue-xe/

/total/thue-xe/xe-may/

/total/thue-xe/xe-dien/

/total/thue-xe/xe-oto/

/total/moto/

/total/garage/

/total/local/

/total/review/

All HTTP 200.

==================================================
52. FINAL REPORT
==================================================

Return:

SITE_NAME
AI WIKI TOTAL

LANGUAGE
VIETNAMESE

SEO_LANGUAGE
VIETNAMESE

HEAD_BEFORE
HEAD_AFTER

PUBLIC_URL

THEME
TOTAL ATLAS

PARENT_CATEGORIES
15

RENTAL_CLUSTER
READY / NOT READY

RENTAL_CHILD_HUBS
XE MAY
XE DIEN
XE O TO

CHILD_HUB_COUNT

MATRIX_CAPACITY
10000

FACTORY
READY / NOT READY

SEARCH
READY / NOT READY

CHATBOT
READY / NOT READY

TESTS
PASSED / FAILED

LIVE
ROOT
THUE_XE
XE_MAY
XE_DIEN
XE_OTO

Do not claim completion until live site works.

FINAL MARKER:

AI_WIKI_TOTAL_FOUNDATION_COMPLETE
