# Content Factory — AI WIKI TOTAL

Bộ máy sinh nội dung và trang tĩnh của AI WIKI TOTAL.

## Thành phần
| File | Vai trò |
| --- | --- |
| `site.config.js` | Cấu hình site: tên, URL, basePath, thứ tự trang chủ, menu |
| `data/categories.js` | 15 danh mục cha + 97 hub con (nguồn sự thật duy nhất) |
| `data/articles/*.js` | Dữ liệu bài viết (module JS) |
| `lib/shell.js` | Vỏ trang: header, footer, nav desktop (dropdown + mega), mobile drawer accordion, breadcrumb |
| `lib/schema.js` | JSON-LD: WebSite, CollectionPage, Article, BreadcrumbList |
| `lib/render.js` | Kết xuất trang chủ, danh mục, hub, bài viết, trang tiện ích (giới thiệu, liên hệ, bảo mật, điều khoản) |
| `generate.js` | Sinh toàn bộ site tĩnh + chỉ mục + sitemap (`--check`, `--out`) |
| `qa.js` | Kiểm định chất lượng bài viết (ngưỡng ≥ 90) |
| `factory.js` | CLI vòng đời slot: plan → research → write → qa → publish; expand-capacity/set-planned-target |
| `test.js` | Bộ kiểm thử nền tảng (chạy sau generate) |
| `state/` | matrix.json, factory-state.json, checkpoint.json, manifest.json |

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED. QA lỗi: → REPAIR → QA → BLOCKED.

## Capacity (cấu hình, không hard limit)
`capacity` nằm trong `state/matrix.json` (hiện 20.000 — không phải giới hạn trọn đời):
```bash
node factory/factory.js expand-capacity 20000 --dry-run  # xem trước: CURRENT/REQUESTED/DELTA/STATE_SAFE...
node factory/factory.js expand-capacity 20000             # migration thật: lock -> snapshot -> migrate -> verify -> rollback nếu fail
node factory/factory.js set-planned-target 8000           # mục tiêu kế hoạch (<= capacity, >= số slot đã có)
```
Chỉ tăng (refuse shrink/cùng mức), không preallocate slot, giữ nguyên ID/PUBLISHED/plannedTarget/reserved.

## Bảo vệ
- One writer + writer lock TTL 30 phút.
- Ghi file atomic (ghi tạm → đổi tên).
- Checkpoint khớp số slot ma trận.
- Không gọi AI API trong GitHub Actions.
- Pipeline publish theo chunk trong Actions (factory-publish.yml): resume slot dở trước khi claim mới, QA ≥ 90 mới PUBLISHED, một commit mỗi chunk, không force push, bounded retry khi push.

## Trình tự chuẩn
```bash
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 90
```
