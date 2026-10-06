// AI WIKI TOTAL — wiki/cau-tao-xe: tổng hợp kiến thức cấu tạo xe máy (slot S00276)
'use strict';

module.exports = {
  slug: 'cau-tao-xe-may',
  title: 'Tổng hợp kiến thức: cấu tạo xe máy',
  seoTitle: 'Cấu tạo xe máy tổng hợp: các cụm chính và cách chúng phối hợp',
  metaDescription: 'Tổng hợp cấu tạo xe máy theo từng cụm: khung, động cơ, truyền động, điện, treo, phanh — mỗi cụm làm gì và liên hệ bảo dưỡng thực tế.',
  summary: 'Hiểu cấu tạo xe máy không cần phải là kỹ sư: chỉ cần nắm được bốn cụm lớn — khung xe và hệ thống treo, động cơ, bộ truyền động và hệ thống điện — cùng cách chúng phối hợp với nhau, người điều khiển đã đủ tự tin đọc các triệu chứng của xe, mô tả đúng cho thợ và bảo dưỡng đúng lúc. Bài viết tổng hợp kiến thức cấu tạo theo hướng thực dụng: mỗi cụm được giải thích vai trò, các chi tiết đáng chú ý nhất và liên hệ tới việc bảo dưỡng hằng ngày mà người mới thường phải làm.',
  quickAnswer: 'Một chiếc xe máy gồm bốn cụm lớn: khung xe gánh toàn bộ tải trọng và là nơi gắn mọi chi tiết; động cơ biến nhiên liệu thành chuyển động; bộ truyền động đưa lực tới bánh sau qua nhông sên dĩa hoặc hộp truyền vô cấp; hệ thống điện cấp nguồn cho nổ máy, đèn, còi. Thêm hai cụm hỗ trợ là hệ thống treo (giảm xóc, phuộc) và phanh. Khi xe có triệu chứng lạ, việc đầu tiên là đoán xem triệu chứng đó thuộc cụm nào để mô tả đúng cho thợ.',
  keyPoints: [
    'Bốn cụm lớn của xe máy: khung, động cơ, bộ truyền động, hệ thống điện; hai cụm hỗ trợ: treo và phanh.',
    'Khung xe là "xương sống": mọi triệu chứng rung lắc, tiếng kêu kim loại đều nên loại trừ bulong khung trước khi nghi máy.',
    'Động cơ 2 thì gọn nhẹ, 4 thì tiết kiệm nhiên liệu và bền hơn — hầu hết xe hiện nay dùng 4 thì.',
    'Xe số truyền lực qua xích tới dĩa sau; xe tay ga truyền qua dây cua và chuột cống — điểm khác biệt quan trọng khi chẩn bệnh.',
    'Hệ thống điện xoay chiều từ máy phát qua chỉnh lưu về ắc quy: ắc quy yếu không có nghĩa là ắc quy hư, có thể lỗi bộ sạc.',
    'Bảo dưỡng đúng cấu tạo: nhớt cho động cơ, mỡ cho xích, dầu phuộc cho hệ treo — mỗi cụm một loại dầu không thay thế cho nhau.',
  ],
  category: 'wiki',
  hub: 'cau-tao-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['cấu tạo xe máy', 'khung xe', 'động cơ', 'bộ truyền động', 'hệ thống điện', 'hệ thống treo', 'phanh'],
  keywords: ['cấu tạo xe máy', 'các bộ phận chính của xe máy', 'xe máy gồm những gì', 'nguyên lý hoạt động xe máy', 'cụm chính trên xe máy', 'cấu tạo xe tay ga và xe số'],
  sections: [
    {
      h2: 'Khung xe và hệ thống treo — nền tảng gánh mọi thứ',
      html: `<p>Khung xe là chi tiết ít được chú ý nhất nhưng lại là "xương sống" của cả chiếc xe: mọi cụm khác — máy, bình xăng, yên, bánh xe — đều gắn lên khung, và khung chịu toàn bộ tải trọng cả xe lẫn người ngồi. Khung xe máy thường làm từ thép ống hàn hoặc hợp kim nhôm đúc trên các dòng cao cấp; thiết kế khung quyết định độ cứng vững, cảm giác chắc chắn khi vào cua và cả trọng lượng xe.</p>
<p>Gắn liền khung là hệ thống treo: phuộc trước và bộ giảm xóc sau, cùng các vòng bi cổ trước, cổ sau. Nhiệm vụ của cụm này là giữ bánh xe bám mặt đường khi mặt đường không phẳng: ổ gà, hố ga, gờ đường. Khi treo yếu, bánh xe nảy lên mất tiếp xúc mặt đường, vừa giảm an toàn phanh vừa gây mòn lốp. Người mới nên nhớ: các tiếng kêu "cọt cẹt" khi qua ổ gà phần lớn nằm ở cụm này, không phải ở máy.</p>
<p>Bảo dưỡng thực tế cho cụm khung-treo rất giản dị: định kỳ siết lại các bulong tì vè, đòn after, móc giảm xóc; nghe tiếng kêu khi bóp xe đứng tại chỗ; thay dầu phuộc theo chu kỳ hoặc khi xe nảy nhiều. Đây là nhóm việc mà người dùng tự làm được phần lớn và hiệu quả rõ rệt.</p>`,
    },
    {
      h2: 'Động cơ — nơi nhiên liệu biến thành chuyển động',
      html: `<p>Động cơ là trái tim xe, nơi hòa khí xăng-gió được nén và đốt để sinh công. Một động cơ 4 thì điển hình gồm các cụm chính: piston và xilanh (nén và nhận lực nổ), trục khuỷu (biến chuyển động tịnh tiến thành quay), cam và xupap (đóng mở khí nạp-xả), cùng hệ thống bôi trơn và làm mát. Người mới chỉ cần nắm một nguyên tắc: động cơ sống nhờ ba yếu tố — nén tốt, tia lửa đúng lúc, hòa khí đúng tỷ lệ — thiếu bất kỳ yếu tố nào xe đều khó nổ hoặc ì máy.</p>
<p>Ngày nay hầu hết xe máy phổ thông dùng động cơ 4 thì: tiết kiệm nhiên liệu, ít khói, bền; các dòng xe thể thao và xe cà phê đời cũ từng chuộng 2 thì gọn nhẹ nhưng hao dầu và khói nhiều. Cách phân biệt nhanh: xe 2 thì nhớt pha chung với xăng hoặc có bơm tự pha, xe 4 thì nhớt nằm trong cacte riêng và phải thay định kỳ.</p>
<p>Liên hệ bảo dưỡng: nhớt động cơ là món quan trọng nhất với cụm này — đúng loại, đúng cấp, thay đúng chu kỳ. Thói quen để xe bụi bẩn, lọc gió tắc, hoặc chạy xăng kém đều gián tiếp hành hạ động cơ thông qua hòa khí xấu. Hiểu cấu tạo giúp người dùng hiểu vì sao "thay nhớt đúng giờ" rẻ hơn nhiều lần so với "đại tu máy".</p>`,
    },
    {
      h2: 'Bộ truyền động — đưa lực ra bánh sau theo hai con đường khác nhau',
      html: `<p>Sau động cơ là bộ truyền động — cụm biến chuyển động quay của trục khuỷu thành chuyển động quay của bánh sau. Ở xe số, lực đi qua hộp số và dây xích ra dĩa bánh sau: người lái trực tiếp điều khiển các cấp số bằng chân trái và côn bằng tay trái, nhờ vậy cảm giác vận hành trực tiếp và giữ được động cơ ở dải tua hợp lý.</p>
<p>Ở xe tay ga, không có chân số và côn tay: lực đi qua dây cua, cụm puly và chuột cống — một hộp truyền vô cấp tự đổi tỷ số theo vòng tua. Đây là lý do xe tay ga tăng tốc mượt mà không cần thao tác, nhưng cũng là lý do cụm chuột cống — côn — puly là những chi tiết hao mòn đáng kể sau vài chục nghìn cây số, và triệu chứng "tua lên mà xe không nhích" luôn bắt đầu từ cụm này.</p>
<p>Bảo dưỡng cụm truyền động khác nhau giữa hai loại xe: xe số cần dưỡng xích và thay cả bộ nhông sên dĩa cùng lúc khi mòn; xe tay ga cần kiểm tra giặt bụi chuột cống, thay dầu hộp truyền theo chu kỳ. Nhận biết khác biệt này giúp người mới không áp nhầm kinh nghiệm giữa hai loại xe khi trao đổi với thợ.</p>`,
    },
    {
      h2: 'Hệ thống điện — mạch máu cấp nguồn cho mọi thiết bị',
      html: `<p>Hệ thống điện gồm ba phần: nguồn (ắc quy), phần phát (máy phát xoay chiều với chỉnh lưu sạc) và phần tiêu thụ (hệ thống đánh lửa, đèn, còi, đồng hồ). Máy phát chỉ chạy khi động cơ quay; khi tắt máy, mọi thiết bị ăn điện từ ắc quy. Hiểu mối quan hệ này giải thích nhanh một chẩn đoán thông dụng: đèn mờ khi máy tắt nhưng sáng khi máy chạy thường là ắc quy yếu; thay ắc quy mới mà vài ngày sau lại yếu thì lỗi nằm ở bộ chỉnh lưu sạc.</p>
<p>Hệ thống đánh lửa là phần nhạy cảm: bugi, bô bin và cục đánh lửa quyết định tia lửa đốt hòa khí. Đây là cụm mà người dùng có thể tự thay đơn giản nhất (bugi) và cũng là cụm đầu tiên nên nghi khi xe khó nổ. Các dây điện và chụp cọc giắt ẩm nước là nguyên nhân lỗi điện phổ biến vào mùa mưa.</p>
<p>Thói quen tốt với hệ thống điện: không gắn quá nhiều phụ kiện rút điện (đèn LED công suất lớn, camera), không rà dây nối tùy tiện, giữ hai cọc ắc quy sạch và siết chặt. Một mối nối ẩn gián tiếp có thể tạo ra hàng loạt triệu chứng kỳ lạ khiến việc chẩn đoán mất rất nhiều thời gian.</p>`,
    },
    {
      h2: 'Phanh, bánh xe và cách các cụm phối hợp với nhau',
      html: `<p>Phanh không tạo ra chuyển động nhưng là cụm quyết định dừng xe an toàn. Xe máy có hai loại chính: phanh đùm (trống) ở xe phổ thông giá rẻ và phanh đĩa với lực phanh mạnh và ổn định hơn. Phanh trước gánh phần lớn lực phanh khi xe đang chạy; thói quen chỉ bóp phanh sau là sai lầm phổ biến và dễ gây trượt bánh vì phanh sau gánh ít hơn nhiều.</p>
<p>Bánh xe gồm vành, nan hoa và lốp; lốp là điểm tiếp xúc duy nhất với mặt đường nên tình trạng lốp áp trực tiếp đến mọi cụm khác: lốp non làm khung và treo chịu xóc nhiều hơn, phanh kém hiệu quả hơn và xe hao xăng hơn. Vẽ sơ đồ mối quan hệ này giúp người mới hiểu vì sao một chiếc lốp "chỉ cao su" lại ảnh hưởng tới cả cảm giác vận hành tổng thể.</p>
<p>Điểm mấu chốt của bài tổng hợp này: các cụm không hoạt động riêng lẻ. Người lái ga — động cơ sinh công — bộ truyền đưa ra bánh — treo giữ lốp bám đường — phanh quyết định dừng — điện giữ mọi phần chạy nhịp nhàng. Khi xe có triệu chứng, hãy nghĩ theo dòng chảy này: xác định triệu chứng xảy ra ở khâu nào trong dòng, rồi lần theo hướng phù hợp để kiểm tra. Đó là cách tư duy cấu tạo thực dụng nhất mà người mới nên rèn mỗi lần xe gặp trục trặc.</p>`,
    },
  ],
  checklist: [
    'Nhớ bốn cụm lớn: khung, động cơ, truyền động, điện — mô tả triệu chứng theo cụm.',
    'Thay nhớt động cơ đúng loại, đúng cấp, đúng chu kỳ.',
    'Dưỡng xích hoặc bảo dưỡng hộp truyền theo loại xe đang dùng.',
    'Giữ hai cọc ắc quy sạch, không gắn phụ kiện rút điện quá tải.',
    'Kiểm tra lốp đều vì lốp ảnh hưởng tới treo, phanh và hao xăng.',
    'Định kỳ siết bulong khung, tì vè, giảm xóc sau các chuyến đường dài.',
  ],
  warnings: [
    'Không tự tháo các cụm gắn trực tiếp vào khung khi thiếu dụng cụ — bulong khung cần siết đúng lực quy định.',
    'Không dùng nhớt động cơ để dưỡng xích hoặc ngược lại — mỗi cụm một loại dầu riêng.',
    'Phanh đĩa nóng sau khi chạy xa: không sờ vào kẹp phanh và không xịt nước lạnh đột ngột.',
  ],
  notes: [
    'Bài viết tổng hợp kiến thức cấu tạo theo hướng hiểu hệ thống, không thay thế tài liệu kỹ thuật của từng dòng xe.',
    'Cách sắp xếp cụm có thể khác nhẹ giữa các hãng và kiểu xe; hãy đối chiếu sổ tay sử dụng của xe mình.',
  ],
  references: [
    'Tài liệu đào tạo kỹ thuật nghề về kết cấu và sửa chữa xe gắn máy — các chương tổng quan cụm máy.',
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất xe máy phổ thông — sơ đồ cấu tạo và chu kỳ bảo dưỡng.',
    'Giáo trình động cơ đốt trong — nguyên lý động cơ 2 thì và 4 thì.',
  ],
  related: [
    'cau-tao-xe-may-tong-quan-cac-he-thong',
    'he-thong-dien-xe-may-tong-quan',
    'hop-cau-chi-xe-may-cau-tao-va-cach-kiem-tra',
    'piston-xilanh-xe-may-cau-tao-va-dau-hieu-mon',
  ],
};
