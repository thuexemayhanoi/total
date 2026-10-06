// AI WIKI TOTAL — wiki/dien-xe: tổng hợp kiến thức đèn xe máy (slot S00288)
'use strict';

module.exports = {
  slug: 'den-xe-may',
  title: 'Tổng hợp kiến thức: đèn xe máy',
  seoTitle: 'Đèn xe máy: đèn pha, xi nhan, đèn phanh — chọn bóng và chỉnh đúng cách',
  metaDescription: 'Tổng hợp về đèn xe máy: các loại bóng đèn, đèn pha chỉnh thế nào, xi nhan và đèn phanh hoạt động ra sao, và lỗi đèn thường gặp.',
  summary: 'Hệ thống đèn là ngôn ngữ giao tiếp của xe máy với thế giới xung quanh: đèn pha nói "xe tôi ở đây", xi nhan nói "tôi sắp rẽ", đèn phanh nói "tôi đang giảm tốc". Nhưng trên thực tế, đèn là cụm bị thờ ơ nhất cho tới khi bóng cháy đúng lúc chạy đêm hoặc mưa. Bài viết tổng hợp kiến thức về đèn xe máy: các loại bóng và công suất chuẩn, cách chỉnh đèn pha đúng độ chiếu, cách bảo trì xi nhan và đèn phanh, cùng các lỗi thường gặp và cách tự xử cũng như lúc nào nên nhờ thợ.',
  quickAnswer: 'Đèn xe máy gồm đèn pha chiếu sáng, đèn hậu và đèn phanh, xi nhan, đèn biển số và đồng hồ. Bóng đèn phổ biến là halogen với công suất ghi chuẩn trên chụp bóng — thay đúng công suất, không thay loại "sáng hơn" trôi nổi vì rút điện mạnh đốt cháy ổ điện. Đèn pha chỉnh bằng ốc điều chỉnh để vệt sáng dừng đúng khoảng cách mặt đường theo quy định. Xi nhan cháy một bên thường do bóng hoặc flasher; đèn phanh không sáng thường do công tắc phanh hoặc bóng.',
  keyPoints: [
    'Đèn là cụm an toàn giao tiếp: bóng cháy một bên xi nhan vẫn rủi ro khi chuyển hướng vào đêm.',
    'Thay bóng đúng công suất ghi trên chụp: bóng "cường sáng" trôi tiếp đốt dây và ổ điện.',
    'Đèn pha chỉnh bằng ốc: vệt sáng quá cao gây chói mắt xe ngược chiều, quá thấp thì mất tầm nhìn.',
    'Xi nhan nháy nhanh hơn bình thường thường là bóng cháy một bên hoặc tiếp xúc kém.',
    'Đèn phanh không sáng: kiểm bóng trước rồi công tắc phanh — hai thủ phạm phổ biến nhất.',
    'Chạy bằng đèn chiếu xa trong phố gây chói và có thể bị xử lý theo quy định — dùng chiếu gần trong đô thị.',
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['đèn pha', 'đèn hậu', 'xi nhan', 'đèn phanh', 'bóng đèn halogen', 'công tắc phanh', 'flasher'],
  keywords: ['đèn xe máy', 'chỉnh đèn pha xe máy', 'bóng đèn xe máy', 'xi nhan xe máy', 'đèn phanh không sáng', 'chọn bóng đèn xe máy'],
  sections: [
    {
      h2: 'Sơ đồ hệ thống đèn trên xe máy',
      html: `<p>Một chiếc xe máy tiêu chuẩn mang sáu nhóm đèn: đèn pha chiếu phía trước (gồm hai chế độ chiếu gần và chiếu xa), đèn hậu trắng đỏ phía sau, đèn phanh sáng mạnh khi bóp phanh, cặp xi nhan hai đầu nháy khi chuyển hướng, đèn chiếu biển số, và các đèn nền đồng hồ. Mỗi nhóm giữ một vai trò an toàn riêng và thiếu bất kỳ nhóm nào cũng giảm khả năng "xe được nhìn thấy" và "người khác hiểu ý định" của bạn.</p>
<p>Về nguồn sáng, xe phổ thông dùng bóng halogen: sáng vừa, rẻ, dễ thay. Các dòng cao hơn chuyển qua bóng xenon hoặc LED với ưu điểm sáng và bền nhưng đòi hỏi thiết kế chóa đúng loại — cắm bóng LED vào chóa halogen không đúng chuẩn gây chói loạn và tản nhiệt sai, vừa mất an toàn vừa dễ cháy bóng.</p>
<p>Bài học cấu tạo quan trọng nhất: hệ thống đèn đi theo từng mạch cầu chì và công tắc riêng — đèn pha qua khóa và công tắc chiếu gần xa, xi nhan qua flasher, đèn phanh qua công tắc phanh ở cần hoặc đùm phanh. Nhờ vậy khi một nhóm lỗi, nhóm khác vẫn chạy — và đó là chìa khóa để chẩn đoán: lỗi cả cụm thường là cầu chì hoặc khóa; lỗi một bóng thường là bóng.</p>`,
    },
    {
      h2: 'Đèn pha: chỉnh đúng và dùng đúng',
      html: `<p>Đèn pha chỉnh sai là lỗi phổ biến nhất và nguy hiểm bậc nhất trên đường đêm. Vệt sáng quá cao chiếu thẳng vào mắt người xe ngược chiều, gây chói và làm họ mất tầm nhìn vài giây — vài giây đủ cho va chạm. Vệt quá thấp thì người lái mất tầm quan sát xa. Chỉnh chuẩn: dựng xe cách bức tường phẳng vài mét, bật chiếu gần, vệt sáng cắt ngang nên hạ xuống dưới tầm mắt ở khoảng cách an toàn — hầu hết xe có ốc chỉnh độ cao ngay ở cụm đèn hoặc sau ốp.</p>
<p>Về chế độ: chiếu gần dùng trong đô thị và khi có xe ngược chiều; chiếu xa dành cho đường trường vắng để nhìn xa. Còn một thói quen đáng rè: bật đèn pha cả buổi sớm mờ và chiều tối kể cả khi "còn nhìn thấy đường" — đèn không chỉ để bạn nhìn, mà để người khác nhìn thấy bạn.</p>
<p>Trường hợp đèn mờ nhưng bóng còn tốt: chóa đèn bị mờ đục sau năm tháng nắng mưa, kính ố vàng, hoặc tiếp xúc ở giắc yếu. Vệ sinh chóa bằng lau trong và kiem tra giắc thường trả lại phần lớn độ sáng mà người dùng tưởng phải thay bóng. Nếu đèn mờ kèm mùi khét hoặc giắc cháy đen, đó là tiếp xúc kém cần xử trước khi đốt luôn cụm điện.</p>`,
    },
    {
      h2: 'Xi nhan và đèn phanh: hai luồng thông điệp bắt buộc',
      html: `<p>Xi nhan là lời báo trước chuyển hướng — và là cụm đèn người khác đọc nhiều nhất trong đô thị. Lỗi thường gặp: một bên không nháy (bóng cháy hoặc tiếp xúc), nháy nhanh bất thường (bóng một đầu cháy làm flasher đổi nhịp), hoặc công tắc xi nhan không tự nhả sau khi vào cua. Kiểm tra xi nhan đứng tại chỗ trước mỗi chuyến đi dài là thói quen một phút đáng giá: bật từng bên, nhìn gương kiểm cả hai đèn đầu và đuôi.</p>
<p>Đèn phanh sáng khi bóp phanh nhờ công tắc gắn ở cần phanh tay hoặc đùm phanh chân. Khi đèn phanh không sáng: kiểm bóng trước (bóng hậu phanh thường là bóng sợi đúp), rồi công tắc — công tắc ẩm hoặc lệch vị trí là thủ phạm quen thuộc mùa mưa. Lỗi đèn phanh nguy hiểm hơn người dùng tưởng: người đi sau không nhận tín hiệu giảm tốc là va chạm từ phía sau.</p>
<p>Một mẹo kiểm không cần người phụ: dựng xe gần cửa kính hoặc mặt phản chiếu, bóp phanh và nhìn phản chiếu đèn. Người đi một mình vẫn tự kiểm được cả hai cụm đèn tín hiệu trong ba mươi giây trước khi ra đường.</p>`,
    },
    {
      h2: 'Chọn và thay bóng đèn đúng cách',
      html: `<p>Chụp bóng của mỗi xe ghi rõ công suất chuẩn: thay đúng con số đó. Con "bóng sáng gấp rưỡi" giá rẻ trôi nổi là cám dỗ đắt: dòng rút mạnh hơn đốt giắc và cầu chì, ánh sáng tản không theo chóa gây chói; và bóng quá tải thường sống rất ngắn, khép vòng mất tiền. Muốn sáng hơn đúng cách: cân nhắc bóng halogen chất lượng cao cùng công suất, hoặc nâng cấp chóa thiết kế cho bóng đó.</p>
<p>Khi thay bóng, vài nguyên tắc giữ bóng sống đủ tuổi: không chạm tay trần vào mặt bóng halogen — dầu da tạo điểm nóng sớm cháy bóng; lau bằng khăn sạch nếu lỡ chạm. Siết giắc vừa đủ, kiểm chụp chống nước seated đúng chỗ — nước vào chóa là mờ bóng và oxyt giắc. Với bóng LED thay thế, chọn hàng có tản nhiệt đúng và kích thước khớp chóa, không nhồi bóng lệch kiểu bằng băng dính.</p>
<p>Cuối cùng là dự trữ: một cặp bóng pha và xi nhan đúng chủng loại trong cốp là bảo hiểm rẻ cho các chuyến xa — bóng cháy giữa đêm trên quốc lộ là trải nghiệm không ai muốn hai lần, và hàng dự trữ mua tại quán ven đường thường cả chất lượng lẫn giá đều không đẹp.</p>`,
    },
    {
      h2: 'Lỗi đèn và chẩn đoán nhanh',
      html: `<p>Bảng chẩn nhanh người dùng nên thuộc: một bóng cháy — thay bóng; cả cụm đèn pha chết — kiểm cầu chì và khóa điện; xi nhan một bên chết hoàn toàn — bóng hai đầu bên đó hoặc công tắc; xi nhan nháy gấp — bóng cháy một đầu; đèn phanh không sáng — bóng rồi công tắc phanh; đèn cháy bóng liên tục — điện áp vượt chuẩn, nghi chỉnh lưu; đèn mờ khi máy tắt — ắc quy yếu.</p>
<p>Hai lỗi cần nhấn mạnh vì hậu quả lớn: đèn cháy bóng liên tục là dấu hiệu hệ thống phát sạc đang quá áp — tiếp tục thay bóng chỉ là thay vật tế; và đèn mờ dần khi tắt máy là ắc quy đang tới hạn — nên thay hoặc sạc trước khi nó chết đúng chuyến đi quan trọng.</p>
<p>Khi mang xe đi sửa vì lỗi đèn, mô tả theo bảng trên giúp thợ đi thẳng vào mạch đúng: "xi nhan trái nháy gấp, bóng đuôi không sáng" thay vì "đèn bị lỗi". Ba mươi giây mô tả chuẩn tiết kiệm nửa giờ mò mẫm và giữ bạn khỏi thanh toán cho những phần không cần sửa.</p>`,
    },
  ],
  checklist: [
    'Trước chuyến xa: kiểm đèn pha hai chế độ, xi nhan hai bên đầu đuôi, đèn phanh.',
    'Thay bóng đúng công suất ghi trên chụp, không chạm tay vào mặt bóng halogen.',
    'Chỉnh đèn pha: vệt chiếu gần hạ đúng khoảng cách, không chói xe ngược chiều.',
    'Xi nhan nháy gấp: kiểm ngay bóng hai đầu cùng bên trước khi nghi đồ lớn.',
    'Đèn phanh không sáng: kiểm bóng trước, công tắc phanh sau.',
    'Cháy bóng liên tục: đo điện áp hệ thống phát, không chỉ thay bóng mãi.',
  ],
  warnings: [
    'Không dùng chiếu xa trong đô thị hoặc khi có xe ngược chiều — chói mắt là gây nguy hiểm trực tiếp.',
    'Không nhồi bóng LED lệch chuẩn vào chóa halogen — chói loạn và cháy bóng sớm.',
    'Đèn phanh không sáng là lỗi không được trì hoãn: người phía sau không có tín hiệu của bạn.',
  ],
  notes: [
    'Bài viết tổng hợp theo cấu tạo đèn xe máy phổ thông, mang tính tham khảo.',
    'Công suất bóng và sơ đồ mạch theo từng dòng xe nằm trong sổ tay và tài liệu hãng.',
  ],
  references: [
    'Quy chuẩn kỹ thuật quốc gia về trang bị và sử dụng ánh sáng trên xe cơ giới.',
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất xe máy — sơ đồ mạch đèn và công suất bóng quy định.',
    'Tài liệu kỹ thuật về bóng đèn halogen và LED cho xe hai bánh.',
  ],
  related: [
    'den-pha-xe-may-mo-nguyen-nhan-va-xu-ly',
    'den-xi-nhan-hong-giua-duong-cach-xu-ly',
    'den-canh-bao-tren-xe-may-hieu-va-xu-ly',
    'he-thong-dien-xe',
  ],
};
