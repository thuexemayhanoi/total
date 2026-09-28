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

// Menu chính desktop (spec mục 30) — "Tất cả" mở mega menu 15 danh mục
const PRIMARY_NAV = [
  { label: 'Trang chủ', href: '', cat: null },
  { label: 'Thuê xe', href: 'thue-xe/', cat: 'thue-xe', dropdown: true },
  { label: 'Xe máy', href: 'moto/', cat: 'moto' },
  { label: 'Sửa chữa', href: 'garage/', cat: 'garage' },
  { label: 'Địa phương', href: 'local/', cat: 'local' },
  { label: 'Thị trường', href: 'market/', cat: 'market' },
  { label: 'Đánh giá', href: 'review/', cat: 'review' },
  { label: 'Tất cả', href: null, cat: null, mega: true },
];

module.exports = { SITE, HOME_CATEGORY_ORDER, PRIMARY_NAV };
