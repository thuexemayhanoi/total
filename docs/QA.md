# QA — kiểm định chất lượng bài

## Điểm và ngưỡng
- Mỗi bài chấm theo trọng số, thang 100. PUBLISHED yêu cầu ≥ 90 và không check critical nào rơi.
- Chạy: `node factory/factory.js qa <slot-id>`; audit toàn bộ: `node factory/factory.js audit --min-score 90`.

## Check critical (rơi là hỏng)
- Độ dài ≥ 1.600 từ.
- Không ký tự rác CJK/Cyrillic/Hangul.
- Không pattern bịa dữ kiện: giá thuê chỉ từ, địa chỉ số nhà, liên hệ zalo, hotline.
- Tiêu đề SEO 25–70 ký tự.

## Check advisory (trừ điểm)
- Meta description 100–165 ký tự, tiêu đề không template cứng `| AI WIKI TOTAL`, đủ tóm tắt, câu trả lời nhanh, điểm chính, mục H2, checklist, cảnh báo, nguồn tham khảo, bài liên quan, lưu ý, ngày hợp lệ.

## Quy trình sau QA
QA không đạt → REPAIR → QA; nhiều lần không đạt → BLOCKED. Không bao giờ publish bài dưới ngưỡng.
