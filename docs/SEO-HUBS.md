# SEO Hub

## Mô hình
Cấu trúc: Danh mục cha → SEO hub con → Bài viết. Hub là trang tập trung ngữ nghĩa cho một cụm từ khóa, không phải trang bài viết.

## Vai trò hub
- Trang danh mục cha: định vị cluster, liên kết xuống hub con.
- Trang hub: mô tả chủ đề (moTa), từ khóa đại diện (chuDe), liên kết tới bài viết trong hub.
- Bài viết: nhắm một intent cụ thể, liên kết ngược lên hub và danh mục cha.

## Kỹ thuật
- Canonical đúng cho mọi trang; JSON-LD: WebSite, WebPage, CollectionPage, Article, BreadcrumbList, ItemList.
- LocalBusiness schema CHỈ đặt khi có dữ liệu kinh doanh đã xác minh — không đặt lên bài informational.
- Sitemap phân đoạn theo loại trang; robots.txt không chặn nội dung công khai, không deploy bản nháp.
