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
| `qa.js` | Kiểm định chất lượng bài viết (ngưỡng ≥ 75) |
| `factory.js` | CLI vòng đời slot: plan → research → write → qa → publish; expand-capacity/set-planned-target |
| `test.js` | Bộ kiểm thử nền tảng (chạy sau generate) |
| `state/` | matrix.json, factory-state.json, checkpoint.json, manifest.json |

## Vòng đời slot
PLANNED → RESEARCH → WRITING → QA → PASS → PUBLISHED. QA lỗi: → REPAIR → QA → BLOCKED.

## Capacity (cấu hình, không hard limit)
`capacity` luôn đọc từ `state/matrix.json` (canonical — KHÔNG hardcode con số trong docs/code; giá trị ví dụ dưới chỉ là **EXAMPLE ONLY**, lệnh sẽ REFUSE nếu `<NEW_CAPACITY>` không lớn hơn capacity hiện tại):
```bash
node factory/factory.js expand-capacity <NEW_CAPACITY> --dry-run  # xem trước: CURRENT/REQUESTED/DELTA/STATE_SAFE...
node factory/factory.js expand-capacity <NEW_CAPACITY>            # migration thật: lock -> snapshot -> migrate -> verify -> rollback nếu fail
node factory/factory.js set-planned-target <N>                    # mục tiêu kế hoạch (<= capacity, >= số slot đã có)
```
Chỉ tăng (refuse shrink/cùng mức), không preallocate slot, giữ nguyên ID/PUBLISHED/plannedTarget/reserved.

## Bảo vệ
- One writer — lock **ownership-safe**: acquire bằng primitive exclusive thật (link/open 'wx') + token unique mỗi acquisition; unlock cần `--owner` + `--token` của chính acquisition (sai là REFUSE), TTL 30 phút chỉ reclaim theo contract trong `factory/lib/lock.js` (không phải daemon tự xóa).
- Publish theo explicit IDs, tối đa 10 ID mỗi transaction (KHÔNG publish-all, KHÔNG sweep PASS); continuous drain trong workflow không dựa vào self-trigger của bot commit.
- Ghi file atomic (ghi tạm → đổi tên).
- Checkpoint khớp số slot ma trận.
- Bộ test reliability 4 tầng: `node factory/test-reliability.js` (xem `docs/FACTORY-RELIABILITY.md`).
- Không gọi AI API trong GitHub Actions.
- Pipeline publish theo chunk trong Actions (factory-publish.yml): resume slot dở trước khi claim mới, QA ≥ 75 mới PUBLISHED, một commit mỗi chunk, không force push, bounded retry khi push.

## Trình tự chuẩn
```bash
node factory/generate.js
node factory/generate.js --check
node factory/test.js
node factory/factory.js audit --min-score 75
```
