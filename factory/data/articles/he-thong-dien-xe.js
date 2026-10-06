// AI WIKI TOTAL — wiki/dien-xe: hệ thống điện xe — những điều cần biết (slot S00286)
'use strict';

module.exports = {
  slug: 'he-thong-dien-xe',
  title: 'Hệ thống điện xe — những điều cần biết',
  seoTitle: 'Hệ thống điện xe máy: nguồn, phát, tiêu thụ và cách chăm sóc đúng',
  metaDescription: 'Tổng quan hệ thống điện xe máy: ắc quy, máy phát, chỉnh lưu, đánh lửa, đèn còi — cách hoạt động, lỗi thường gặp và bảo dưỡng.',
  summary: 'Hệ thống điện là "mạch máu" của xe máy: không có nó, máy không nổ, đèn không sáng, còi không kêu. Nhưng khác với động cơ, điện là cụm mà người dùng thường sợ chạm tới và dễ nhất để tự kiểm tra nếu hiểu theo đúng mô hình ba phần: nguồn (ắc quy), phần phát (máy phát và chỉnh lưu), phần tiêu thụ (đánh lửa, đèn, còi, đồng hồ). Bài viết đi qua từng phần của hệ thống điện, nhóm lỗi thường gặp theo từng phần và những thói quen giữ hệ thống điện khỏe mà không cần dụng cụ chuyên dụng.',
  quickAnswer: 'Hệ thống điện xe máy gồm ba phần: nguồn là ắc quy dự trữ điện; phần phát gồm máy phát xoay chiều và chỉnh lưu sạc lại cho ắc quy khi máy chạy; phần tiêu thụ gồm hệ thống đánh lửa (bugi, bô bin, cục đánh lửa), đèn, còi, đồng hồ. Chẩn đoán theo dòng điện: đề yếu, đèn mờ khi tắt máy — nguồn ắc quy; thay ắc quy mới mà vẫn yếu — chỉnh lưu hoặc máy phát; khó nổ — đánh lửa; đèn cháy bóng liên tục — điện áp cao do chỉnh lưu hỏng.',
  keyPoints: [
    'Ba phần của hệ thống điện: nguồn (ắc quy), phát (máy phát, chỉnh lưu), tiêu thụ (đánh lửa, đèn, còi).',
    'Đèn mờ khi tắt máy nhưng sáng khi máy chạy thường là ắc quy yếu — dấu hiệu đơn giản nhất để nhận biết.',
    'Thay ắc quy mới mà vài ngày lại yếu: lỗi ở bộ chỉnh lưu sạc, không phải ở ắc quy.',
    'Khó nổ với ắc quy khỏe thường nằm ở cụm đánh lửa: bugi, bô bin, cục đánh lửa hoặc cảm biến.',
    'Cọc ắc quy oxyt hóa và mối nối ẩm là hai lỗi điện phổ biến vào mùa mưa — vệ sinh định kỳ phòng được.',
    'Không gắn phụ kiện rút điện quá tải (đèn LED công suất lớn, camera, loa) khi chưa cân nhắc tuyến điện.',
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['hệ thống điện', 'ắc quy', 'máy phát', 'chỉnh lưu', 'bugi', 'đánh lửa', 'cọc ắc quy'],
  keywords: ['hệ thống điện xe máy', 'máy phát xe máy', 'chỉnh lưu sạc', 'ắc quy xe máy yếu', 'chẩn đoán lỗi điện xe máy', 'hệ thống đánh lửa'],
  sections: [
    {
      h2: 'Bức tranh toàn cảnh: điện chảy trên xe như thế nào',
      html: `<p>Người mới nên hình dung hệ thống điện như một ngôi nhà nhỏ: ắc quy là cục số dự phòng, máy phát là trạm phát chạy bằng chính động cơ xe, và các thiết bị — đánh lửa, đèn, còi, đồng hồ — là đồ dùng trong nhà. Khi tắt máy, mọi thứ ăn từ ắc quy. Khi máy chạy, máy phát xoay chiều sinh dòng, qua chỉnh lưu biến thành dòng một chiều, vừa nuôi thiết bị vừa sạc lại ắc quy.</p>
<p>Trục trặc trên hệ thống vì thế luôn quy được về một câu hỏi: dòng điện bị nghẽn hoặc thiếu ở khâu nào? Đề yếu và đèn mờ lúc tắt máy — dòng dự trữ ít (ắc quy). Đèn bình thường khi chạy nhưng ắc quy tụt nhanh sau mỗi chuyến — khâu sạc (chỉnh lưu, máy phát). Đèn quá sáng gây cháy bóng liên tục — điện áp vượt chuẩn, cũng chỉnh lưu. Đủ điện mà khó nổ — khâu tiêu thụ đánh lửa.</p>
<p>Hiểu bức tranh này mang lại lợi ích thực dụng nhất: mô tả đúng triệu chứng cho thợ thay vì "xe bị lỗi điện". Một câu "đèn mờ khi tắt khóa, nổ máy vài phút lại sáng" cho thợ thông tin nhiều hơn cả trang diễn giải — và ngăn được việc thay bừa đồ theo phán đoán.</p>`,
    },
    {
      h2: 'Ắc quy và bộ sạc: cặp đôi hay bị gán lỗi nhầm',
      html: `<p>Ắc quy là chi tiết hao mòn theo thời gian: hai đến bốn năm là chu kỳ phổ biến. Dấu hiệu xuống cấp: đề chậm, đèn mờ khi tắt máy, đồng hồ mất giờ. Nhưng không phải mọi "ắc quy yếu" đều do ắc quy: nếu sạc đầy rồi vài ngày lại tụt, hoặc thay ắc quy mới mà tình trạng lặp lại, thủ phạm thường là bộ chỉnh lưu hoặc cuộn máy phát — khâu "trạm sạc" của hệ thống.</p>
<p>Cách kiểm tra ở nhà bằng đồng hồ vạn năng: đo ắc quy khi tắt máy (khoảng 12,4–12,8V với ắc quy 12V khỏe) và khi máy đang nổ (thường nhích lên 13–14,5V). Nếu nổ máy mà điện áp không tăng, hoặc tăng vọt quá ngưỡng, lỗi nằm ở phần phát — lúc đó thay ắc quy mới chỉ là ném tiền vào một lỗi chưa được sửa.</p>
<p>Bảo dưỡng đôi này chủ yếu là thói quen: giữ hai cọc sạch, siết chặt chụp, không để xe lâu không nổ, không đề máy quá năm giây mỗi lần. Và một nguyên tắc vàng khi thay: chọn đúng chủng loại ghi trên ắc quy cũ, đấu đúng cực — sai cực có thể cháy chập cả cụm điện mà sửa thì rất đắt.</p>`,
    },
    {
      h2: 'Cụm đánh lửa: nơi quyết định xe nổ hay không',
      html: `<p>Khi ắc quy khỏe mà xe vẫn khó nổ, nghi ngờ chuyển sang cụm đánh lửa: bugi (tia lửa), bô bin (kích điện áp), cục đánh lửa (điều khiển thời điểm), và trên xe phun xăng điện tử là các cảm biến. Đây là cụm nhạy cảm với ẩm: một đêm mưa để xe ngoài trời, sáng hôm sau đề không nổ, nhiều khi chỉ vì ẩm ở chụp bugi hoặc giắc nối.</p>
<p>Trong cụm này, bugi là "bộ phận dễ tự nhất": tháo ra đọc màu (nâu nhạt là tốt, đen bồ hóng là hòa khí đặc, trắng bệch là hòa khí loãng), mòn điện cực thì thay mới theo đúng chủng loại. Bô bin và cục đánh lửa hiếm hỏng hơn nhưng khi hỏng thường gây khó nổ kéo dài không rõ quy luật — cần thợ đo điện trở so với chuẩn hãng.</p>
<p>Mẹo thực hành mùa mưa: khi xe khó nổ sau đêm ẩm, mở nắp che cụm điện, lau khô chụp bugi, xịt dung dịch chống ẩm dành cho điện tử vào các giắc (loại bán sẵn), để khô vài phút rồi đề. Nhiều ca "hỏng điện" sáng mưa hóa ra chỉ là ẩm giắc — xử trong vài phút, không cần thay đồ.</p>`,
    },
    {
      h2: 'Đèn, còi và các thiết bị tiêu thụ',
      html: `<p>Nhóm tiêu thụ nhìn chung đều đơn giản: bóng đèn cháy thì thay, còi rè thì chỉnh ốc chỉnh âm hoặc thay, công tắc lỏng thì vệ sinh. Nhưng vài chi tiết đáng nâng cấp lên thành thói quen: đèn pha chỉnh đúng độ cao chiếu — đèn chiếu quá cao hoặc quá thấp đều nguy hiểm và có thể bị nhắc nhở khi lưu hành; bóng đèn thay đúng công suất ghi chuẩn, không thay bóng "sáng hơn" không rõ nguồn gốc vì dòng rút nhiều hơn có thể đốt dây và ổ điện.</p>
<p>Gương và đèn không chỉ là tiện nghi: chúng là cụm an toàn của hệ thống điện. Chạy đêm với đèn pha yếu hoặc một bên xi nhan hỏng là tự đặt mình vào điểm mù của người khác. Trước chuyến đêm dài, một phút bật tắt đèn, bóp còi, kiểm hai xi nhan là bảo hiểm rẻ nhất hành trình.</p>
<p>Về phụ kiện gắn thêm: camera hành trình, đèn trang trí, cổng sạc điện thoại — mỗi thiết bị rút một dòng nhỏ nhưng liên tục từ hệ thống thiết kế vừa đủ cho xe phổ thông. Gắn nhiều phụ kiện mà không tính tuyến điện dẫn tới ắc quy cạn sớm và khởi động yếu. Người muốn gắn nhiều phụ kiện nên cân nhắc đề xuất của thợ về tuyến và cầu chì riêng, thay vì rà tay qua loa tại chỗ.</p>`,
    },
    {
      h2: 'Lịch chăm sóc hệ thống điện cho người mới',
      html: `<p>Mỗi tuần: bật đèn kiểm bóng cháy, bóp còi nghe rè, bật tắt xi nhan; dựng xe thẳng đo nhìn mức và độ trong của nhớt ắc quy nếu là loại nước. Mỗi vài tháng: mở nắp che cụm điện, lau khô, kiểm chụp bugi và các giắc, vệ sinh cọc ắc quy bằng giấy nhám, siết lại chụp âm dương.</p>
<p>Mỗi năm hoặc khi có triệu chứng: đo điện áp ắc quy lúc tắt máy và lúc nổ máy để kiểm tra cả hai khâu nguồn và sạc. Ghi trị số vào nhật ký xe — dãy trị số qua các năm cho bạn biết ắc quy đang già đi tự nhiên hay có lỗi sạc sớm hơn dự kiến.</p>
<p>Mùa mưa cần lưu ý thêm: che cụm điện khi rửa xe bằng vòi nước mạnh, không rửa trực tiếp vào ổ điện và cục đánh lửa, để xe nơi thoáng khô sau những ngày mưa dầm. Điện sợ nước hơn mọi cụm khác trên xe, và phần lớn "xe hỏng điện" mà người dùng kể lại đều bắt đầu từ một giọt nước ở đúng chỗ sai thời điểm.</p>`,
    },
  ],
  checklist: [
    'Đo điện áp ắc quy khi tắt máy và khi nổ máy để kiểm cả nguồn lẫn bộ sạc.',
    'Vệ sinh cọc ắc quy bằng giấy nhám, siết chặt chụp, tra mỡ chống oxyt mỏng.',
    'Đọc màu bugi định kỳ: nâu nhạt tốt, đen bồ hóng hoặc trắng bệch đều là tín hiệu hòa khí.',
    'Trước chuyến đêm: kiểm đèn pha, xi nhan hai bên, còi trong một phút.',
    'Gắn phụ kiện theo tuyến điện có cầu chì riêng, không rà tay tùy tiện.',
    'Mùa mưa: che cụm điện khi rửa xe, xịt chống ẩm giắc nối khi xe khó nổ buổi ẩm.',
  ],
  warnings: [
    'Không đấu ngược cực ắc quy — cháy chập hệ thống điện, chi phí sửa rất lớn.',
    'Không thay bóng đèn công suất vượt chuẩn: đốt dây điện và ổ điện.',
    'Đèn báo lỗi điện tử sáng trên xe phun xăng: đọc mã trước, không thay đồ theo phán đoán.',
  ],
  notes: [
    'Bài viết tổng quan hệ thống điện xe máy phổ thông theo hướng người dùng, mang tính tham khảo.',
    'Sơ đồ và thông số từng dòng xe khác nhau; ưu tiên sổ tay và tài liệu của nhà sản xuất.',
  ],
  references: [
    'Tài liệu kỹ thuật về hệ thống điện xe gắn máy — máy phát xoay chiều, chỉnh lưu và đánh lửa điện tử.',
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất — sơ đồ điện và chu kỳ kiểm tra.',
    'Quy chuẩn kỹ thuật về trang bị ánh sáng, âm báo trên xe cơ giới hai bánh.',
  ],
  related: [
    'he-thong-dien-xe-may-tong-quan',
    'ac-quy-xe-may',
    'den-pha-xe-may-mo-nguyen-nhan-va-xu-ly',
    'ecu-tren-xe-may-la-gi',
  ],
};
