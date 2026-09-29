// AI WIKI TOTAL — cấu hình site (single source of truth)
'use strict';

const SITE = {
  name: 'AI WIKI TOTAL',
  shortName: 'AI WIKI',
  locale: 'vi-VN',
  // GitHub Pages project site: repo thuexemayhanoi/total phục vụ dưới /total/
  baseUrl: 'https://thuexemayhanoi.github.io/total/',
  basePath: '/total/',
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

module.exports = { SITE, HOME_CATEGORY_ORDER, PRIMARY_NAV };
