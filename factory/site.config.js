// AI WIKI TOTAL — cấu hình site (single source of truth)
'use strict';

const SITE = {
  name: 'AI WIKI TOTAL',
  shortName: 'AI WIKI',
  locale: 'vi-VN',
  // GitHub Pages custom domain serves the published site at its own root.
  baseUrl: 'https://wiki.thuexemaynguyentu.com/',
  basePath: '/',
  homeTitle: 'AI WIKI TOTAL — Cẩm nang xe, thuê xe và kiến thức giao thông Việt Nam',
  homeDescription: 'Cẩm nang tiếng Việt về thuê xe, xe máy, xe điện, ô tô, sửa chữa, giá xe, địa phương và hành trình — kiến thức tổng hợp cho người Việt.',
  tagline: 'Kiến thức xe, thuê xe và hành trình cho người Việt.',
  publisher: 'AI WIKI TOTAL',
  searchPlaceholder: 'Thuê xe máy Hà Nội, Honda Vision, lỗi phanh, giá xe cũ...',
  searchTitle: 'Bạn muốn tìm gì?',
  chatbotName: 'Trợ lý AI WIKI TOTAL',
  chatbotLauncher: 'Hỏi AI',
};

// Thứ tự danh mục trên trang chủ — THUÊ XE nổi bật đầu tiên (spec mục 29)
const HOME_CATEGORY_ORDER = [
  'thue-xe', 'moto', 'garage', 'local', 'review', 'market',
  'guide', 'wiki', 'learn', 'ride', 'tips', 'docs', 'news', 'map', 'hub',
];

// Menu chính desktop — header gọn (spec UI/UX): Trang chủ → Giới thiệu → nhóm ưu tiên
// Thuê xe (dropdown) → một mục "Danh mục" (mega menu 15 cha + toàn bộ hub con) → Liên hệ.
// Chính sách bảo mật / Điều khoản sử dụng nằm trong nhóm "Thông tin" của menu mobile
// và cột "Thông tin" của footer — vẫn truy cập được từ mọi trang.
const PRIMARY_NAV = [
  { label: 'Trang chủ', href: '', cat: null },
  { label: 'Giới thiệu', href: 'gioi-thieu/', cat: null },
  { label: 'Thuê xe', href: 'thue-xe/', cat: 'thue-xe', dropdown: true },
  { label: 'Danh mục', href: null, cat: null, mega: true },
  { label: 'Liên hệ', href: 'lien-he/', cat: null },
];

// Cấu hình trình bày dùng chung. Giữ nguyên nhãn để không đổi UI hiện tại.
const EDITORIAL = Object.freeze({
  readMore: 'Đọc tiếp', readFeatured: 'Đọc bài', relatedHeading: 'Bài liên quan',
  related: Object.freeze({ autoFill: true, minItems: 3, maxItems: 5 }),
});
// Slot là điểm mở rộng khi cần; tắt mặc định để giữ bố cục live.
const CONTENT_SLOTS = Object.freeze({
  'article.after-key-points': Object.freeze({
    enabled: false, type: 'editorial-link', title: 'Khám phá thêm',
    text: 'Tra cứu thêm các chủ đề cùng lĩnh vực.',
    label: 'Tìm kiếm kiến thức', href: 'tim-kiem/',
  }),
  'article.after-prose': Object.freeze({
    enabled: false, type: 'editorial-link', title: 'Đọc thêm trên AI WIKI TOTAL',
    text: 'Tìm nội dung đã được xuất bản trong thư viện kiến thức.',
    label: 'Khám phá chủ đề', href: 'tim-kiem/',
  }),
  'site.before-footer': Object.freeze({
    enabled: false, type: 'editorial-link', title: 'Tiếp tục khám phá',
    text: 'Tìm bài viết và chủ đề phù hợp với nhu cầu của bạn.',
    label: 'Tìm kiếm', href: 'tim-kiem/',
  }),
});

const FEATURES = Object.freeze({
  smartSearch: true,
  previousNext: true,
  authorBox: true,
});

// Publisher already identified as AI WIKI TOTAL throughout the site.
// Contact is the existing contact page; no fabricated personal details.
const PUBLISHER_PROFILE = Object.freeze({
  name: SITE.publisher,
  description: 'Ban biên tập cổng kiến thức AI WIKI TOTAL về xe và thuê xe tại Việt Nam. Nội dung mang tính tham khảo.',
  contactLabel: 'Liên hệ ban biên tập',
  contactPath: 'lien-he/',
});

module.exports = { SITE, HOME_CATEGORY_ORDER, PRIMARY_NAV, EDITORIAL, CONTENT_SLOTS, FEATURES, PUBLISHER_PROFILE };
