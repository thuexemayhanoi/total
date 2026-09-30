# QA — kiểm định chất lượng bài

## Điểm và ngưỡng
- Mỗi bài chấm theo trọng số, thang 100. PUBLISHED yêu cầu ≥ 75 và không check critical nào rơi.
- Chạy: `node factory/factory.js qa <slot-id>`; audit toàn bộ: `node factory/factory.js audit --min-score 75`.

## Check critical (rơi là hỏng)
- Độ dài ≥ 1.600 từ.
- Không ký tự rác CJK/Cyrillic/Hangul.
- Không pattern bịa dữ kiện: giá thuê chỉ từ, địa chỉ số nhà, liên hệ zalo, hotline.
- Tiêu đề SEO 25–70 ký tự.

## Check advisory (trừ điểm)
- Meta description 100–165 ký tự, tiêu đề không template cứng `| AI WIKI TOTAL`, đủ tóm tắt, câu trả lời nhanh, điểm chính, mục H2, checklist, cảnh báo, nguồn tham khảo, bài liên quan, lưu ý, ngày hợp lệ.

## Quy trình sau QA
QA không đạt → REPAIR → QA; nhiều lần không đạt → BLOCKED. Không bao giờ publish bài dưới ngưỡng.

## QA bài KHÔNG thay thế factory reliability tests
`qa <slot-id>` / `audit` chỉ chấm chất lượng nội dung một bài. Sự ổn định của xưởng (lock ownership-safe, continuous backlog drain, NO-PROGRESS sentinel, recovery/resume, bất biến production) nằm ở bộ test 4 tầng — chuẩn bắt buộc khi sửa factory/workflow:
- `node factory/test-hardening.js` — regression hardening (byte-exact --check, publish atomic, breadcrumb, sitemap).
- `node factory/test-reliability.js` — **Unit → Integration → Production invariant → Long-run/Failure recovery** (chi tiết contract: `docs/FACTORY-RELIABILITY.md`, "green means progress").
Cả hai do Article Quality chạy trên CI và đều phải xanh trước khi merge mọi thay đổi factory/workflow.
