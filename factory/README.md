# Content Factory — AI WIKI TOTAL

Bộ máy sinh nội dung và trang tĩnh của AI WIKI TOTAL.

## Thành phần
| File | Vai trò |
| --- | --- |
| `site.config.js` | Cấu hình site: tên, URL, basePath, thứ tự trang chủ, menu |
| `data/categories.js` | 15 danh mục cha + 97 hub con (nguồn sự thật duy nhất) |
| `data/articles/*.js` | Dữ liệu bài viết (module JS) |
| `lib/shell.js` | Vỏ trang: header, footer, nav, mega menu, breadcrumb |
| `lib/schema.js` | JSON-LD: WebSite, CollectionPage, Article, BreadcrumbList |
| `lib/render.js` | Kết xuất trang chủ, danh mục, hub, bài viết |
| `generate.js` | Sinh toàn bộ site tĩnh + chỉ mục + sitemap (`--check`, `--out`) |
| `qa.js` | Kiểm định chất lượng bài viết (ngưỡng ≥ 90) |
| `factory.js` | CLI vòng đời slot: plan → research → write → qa → publish |
| `test.js` | Bộ kiểm thử nền tảng (chạy sau generate) |
| `state/` | matrix.json, factory-state.json, checkpoint.json, manifest.json |

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED. QA lỗi: → REPAIR → QA → BLOCKED.

## Bảo vệ
- One writer + writer lock TTL 30 phút.
- Ghi file atomic (ghi tạm → đổi tên).
- Checkpoint khớp số slot ma trận.
- Không gọi AI API trong GitHub Actions.

## Trình tự chuẩn
```bash
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 90
```
