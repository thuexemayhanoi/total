# Quy tắc viết bài

## Ngôn ngữ
- Toàn bộ bài viết bằng **tiếng Việt**: 1.600–3.000 từ (simple 1.600–2.000, deep 2.000–3.000).
- Không heading tiếng Anh, không câu tiếng Anh chen ngang, không dịch máy cứng.

## Cấu trúc bài (module JS trong `factory/data/articles/`)
`slug, title, seoTitle (25–70 ký tự), metaDescription (100–165 ký tự), summary (≥100 ký tự), quickAnswer (≥80 ký tự), keyPoints (≥4), category, hub, date, updated, entities, keywords, sections (≥4 mục H2), checklist (≥3), steps, warnings (≥2), notes (≥1), references (≥2), related (≥2 slug tồn tại).`

## Cấm bịa dữ kiện kinh doanh
Không bịa giá, địa chỉ, giờ mở cửa, danh sách xe đang có, phạm vi giao xe, điều khoản dịch vụ. Với nội dung ngoài khu vực đã xác minh: **informational only**. QA chặn các pattern: giá thuê chỉ từ, địa chỉ số nhà, liên hệ zalo, hotline.

## Chất lượng
- **MINIMAL PRODUCTION QA GATE**: 70–100 = PASS, < 70 = FAIL/REPAIR (7 critical gate override điểm). KHÔNG REVIEW/EXCELLENT/score band; không đòi 75/90/100; bài ≥ 70 không sửa chỉ để tăng điểm.
- Không ký tự rác CJK/Cyrillic/Hangul — QA và test đều quét.
- Mục lục, breadcrumb, bài liên quan sinh tự động từ dữ liệu.
- SEO chỉ advisory (điểm được ghi lại để huấn luyện, KHÔNG chặn publish).

## Cạnh tranh intent
Mỗi bài chỉ nhắm một intent. Bài thuộc `/moto/` không được nhắm intent thuê (thuộc `/thue-xe/`).
