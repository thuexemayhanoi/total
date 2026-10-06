// AI WIKI TOTAL — wiki/lop-banh-xe: tổng hợp kiến thức: lốp xe máy (slot S00296)
'use strict';

module.exports = {
  slug: 'lop-xe-may',
  title: 'Tổng hợp kiến thức: lốp xe máy',
  seoTitle: 'Lốp xe máy: cấu tạo, các loại, tuổi thọ và cách chọn đúng',
  metaDescription: 'Tổng hợp kiến thức về lốp xe máy: cấu tạo lớp mỏi, lốp có săng và không săng, bám đường theo tiết diện, tuổi thọ thật, dấu hiệu xuống cấp và cách chọn lốp phù hợp cách chạy.',
  summary: 'Lốp là chi tiết duy nhất nối xe với mặt đường — mọi mã lực, mọi lần bóp phanh, mỗi cua rẽ đều đi qua hai mảng cao su nhỏ bằng bàn tay. Nhưng lốp cũng là chi tiết bị hiểu lầm nhiều nhất: người ta chọn lốp theo mẫu vẽ "đẹp", tra áp suất theo cảm giác, và dùng lốp cho tới khi chạm sườn mà không biết lốp có tuổi thọ dùng bằng cả thời gian lẫn số km. Bài tổng hợp này gói kiến thức lốp vào một vòng tròn: cấu tạo bên trong quyết định vì sao lốp no hơi lại đủ dẻo bám đường; sự khác nhau giữa lốp có săng và không săng; cách đọc kích cỡ trên thành lốp; ba nhóm hoa văn phục ba loại đường; tuổi lốp tính theo ký tự tuần sản xuất; và dấu hiệu xuống cấp đọc được bằng mắt thường — từ nứt tóc vỏ đến gờ mòn chỉ báo. Kết bài là phương pháp chọn lốp theo cách chạy thật thay vì theo giá niêm yết.',
  quickAnswer: 'Lốp xe máy gồm các lớp mỏi (ply) xếp chéo hoặc xoắn tròn quanh ruột khí, ngoài phủ lớp hoa văn cao su chịu mài. Hai loại chính: có săng (tube) — ruột khí riêng, vá dễ nhưng nổ là xì ngay; không săng (tubeless) — không ruột, hơi bị lỗ đâm thì xì chậm, an toàn hơn. Hệ số bám phụ thuộc trạng thái mặt đường, áp suất đúng và độ mòn hoa. Lốp không nên dùng quá 5 năm tính từ ngày sản xuất — cao su lão hóa theo thời gian dù ít chạy. Chọn lốp: đúng kích cỡ khắc trên thành, hoa văn đúng loại đường (sạch/ổ tròn/cát đá), và bám theo nhu cầu chạy ướt nếu đi mưa nhiều.',
  keyPoints: [
    'Lốp là điểm tiếp xúc duy nhất giữa xe và đường — khoảng tiếp xúc chỉ cỡ hai bàn tay chịu toàn bộ lực phanh và lái.',
    'Hai loại chính: có săng (dễ vá, nổ nhanh) và không săng (xì chậm, an toàn hơn, cần vành nguyên).',
    'Đọc kích cỡ trên thành lốp: ví dụ 90/90-14 nghĩa là ngang 90 mm, cao 90% bề ngang, vành 14 inch.',
    'Áp suất đúng quyết định cả tuổi thọ lốp lẫn lực bám — non hơi mép mòn nhanh, căng quá giữa mòn và mất bám.',
    'Lốp có tuổi: mã DOT 4 chữ số ghi tuần và năm sản xuất — không nên dùng quá khoảng 5 năm.',
    'Ba nhóm hoa văn: đường sạch (vạch thoát nước mảnh), đường xấu/sỏi (khối vuông sâu), đường hỗn hợp — chọn theo loại đường chạy thật.',
  ],
  category: 'wiki',
  hub: 'lop-banh-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['lốp xe máy', 'lốp không săng', 'lốp có săng', 'mã DOT', 'hoa văn lốp', 'áp suất lốp', 'chỉ báo mòn lốp'],
  keywords: ['lốp xe máy', 'chọn lốp xe máy', 'tuổi thọ lốp', 'lốp không săng là gì', 'đọc kích cỡ lốp', 'dấu hiệu lốp mòn'],
  sections: [
    {
      h2: 'Cấu tạo bên trong: vì sao lốp vừa cứng vừa dẻo',
      html: `<p>Bên trong một chiếc lốp là nhiều lớp "mỏi" — sợi polyester hoặc thép tẩm cao su — xếp chéo hoặc xoắn tròn quanh trục, tạo bộ khung chịu tải. Xoắn quanh lớp khung là "đai" (belt) giữ hình dáng mặt lốp phẳng đúng chuẩn, và ngoài cùng là lớp cao su hoa văn chịu mài trực tiếp. Mép lốp có hai vòng "gờ" thép cứng để kẹp chặt vào vành khi bơm hơi — chính lực bám cơ học giữa gờ và vành giữ hơi, không phải keo dán.</p>
<p>Điểm kỳ diệu của lốp nằm ở tính chất "bán cứng": đủ cứng chịu tải cả thân xe và người ngồi, nhưng đủ dẻo để phần tiếp xúc bẹp nhẹ xuống, ôm lấy gờ đường nhỏ — cơ chế bám chính của bánh xe. Gờ nhô cao hơn mặt đường cỡ milimet bị lớp cao su bám quanh, tạo lực bám. Cũng chính sự dẻo này giải thích vì sao lốp non hơi hoặc quá căng đều mất bám: non thì thành lốp gập sai dạng, căng thì mặt lốp không ôm mặt đường đủ.</p>
<p>Cao su lốp không phải một thứ: lớp lăn ngoài cứng để chịu mài, trong khi lớp lăn nghiêng hai vai và thành bên dẻo hơn để vào cua uốn cong — thiết kế gọi là "crown" và "shoulder" có công thức khác nhau. Đây là lý do không nên dùng lốp xe thể thao găng lực chạy đường bụi: công thức mỗi vùng lốp đã tính cho loại việc cụ thể.</p>`,
    },
    {
      h2: 'Có săng và không săng: khác nhau ở điểm sống còn',
      html: `<p>Lốp có săng (tube type) chứa một ruột khí bằng cao su mỏng bên trong — hơi nằm trong ruột, lốp chỉ là áo giáp bảo vệ. Ưu: vá dễ trên đường (tháo lốp vá ruột), rẻ, và vành xước nhẹ vẫn dùng được. Nhược lớn: khi ruột bị đâm xuyên, hơi thoát toàn bộ gần như ngay — bánh xẹp đột ngột giữa cua là cú ngã.</p>
<p>Lốp không săng (tubeless) bỏ ruột: mặt trong lốp phủ lớp màng kín khí, và hơi bám trực tiếp vào thành lốp qua gờ ép vành. Khi bị đinh đâm, vật thể kẹt trong lỗ giữ chặt, hơi xì chậm từng chút — nhiều người về tới nhà mới biết lốp có đinh. An toàn hơn rõ rệt, và nhờ thế là chuẩn của hầu hết xe mới.</p>
<p>Điều kiện dùng tubeless: vành phải nguyên — mép vành móp hoặc gỉ ăn là chỗ thoát hơi chậm, kiểu rò khó phát hiện. Và khi lốp mòn tới ruột hoặc bên hông nứt sâu thì phải thay cả chiếc, không vá ruột kiểu xe có săng. Kinh nghiệm phổ thông: xe cũ vành còn nguyên thì đổi lên tubeless được; vành xấu thì giữ có săng cho chắc ăn, hoặc thay vành trước.</p>`,
    },
    {
      h2: 'Đọc lốp: kích cỡ, tải, tốc độ và ngày sinh',
      html: `<p>Trên thành lốp khắc dòng cỡ dạng 90/90-14: bề ngang 90 mm, chiều cao bằng 90% bề ngang, vành 14 inch. Dòng cũ chỉ ghi số inch (2.75-14) — bề ngang 2,75 inch. Không đổi cỡ tùy tiện: lốp cao hơn đổi bán kính lăn, sai tốc độ đồng hồ và kẹp gầm; lốp rộng hơn đổi độ ổn định hướng và có thể cạ gầm.</p>
<p>Sau cỡ là chỉ số tải và ký tự tốc độ — ví dụ 46J: chịu 168 kg, tới 100 km/h. Chở chạy đôi hoặc chở nặng thì chọn chỉ số tải đúng, không "tạm được" — lốp quá tải là nổ lốp gây ngã. Với xe phổ thông Việt Nam, mọi lốp phổ biến đều đạt dư dả, nhưng xe bàn chở tải là câu chuyện khác.</p>
<p>Ngày sinh lốp nằm ở mã DOT 4 chữ số ở thành bên: hai số đầu là tuần, hai số sau là năm — 2823 nghĩa là sản xuất tuần 28 năm 2023. Cao su lão hóa theo thời gian: ozone và nhiệt làm lớp cao su khô, mất tính đàn hồi và nứt tóc. Nguyên tắc chung: mua lốp càng mới càng tốt, và không dùng lốp quá khoảng 5 năm kể từ ngày sản xuất — kể cả khi hoa còn sâu.</p>`,
    },
    {
      h2: 'Hoa văn và loại đường: chọn theo chỗ xe chạy',
      html: `<p>Ba nhóm hoa chính. Nhóm đường sạch (street): các rãnh thoát nước mảnh, khối lăn to li ti, diện tích cao su tiếp xúc lớn — bám tốt trên nhựa, êm và bền. Nhóm đường xấu (semi/off): khối hoa vuông dày, rãnh sâu — bám trên sỏi đất và bẩn, nhưng ồn và mòn nhanh trên nhựa sạch. Nhóm hỗn hợp (all-round): giữa hai thái cực, hợp xe chạy phố nhưng cuối tuần sang đường vùng ven.</p>
<p>Vạch trơn mờ theo hướng quay cũng quan trọng: khối nghiêng một chiều giúp thoát nước ra hai bên, cho bám ướt tốt. Lốp dùng ngược hướng quay (lắp xoay bánh lốp hướng trong ra ngoài) giảm bám ướt và mòn lệch — nhiều lốp có mũi tên hướng quay khắc trên thành.</p>
<p>Câu hỏi chọn lốp thật ra chỉ một: xe chạy ở đâu phần lớn thời gian? Người phố-xuyên-nhựa mua lốp street bền và êm là đầu tư đúng. Người về quê cuối tuần đường đá dăm chọn semi. Người chạy mưa nhiều quanh năm chọn lốp có đánh giá bám ướt tốt — rãnh thoát nước thật sự sâu, không chỉ vẽ hoa cho vui. Giá chênh giữa lốp xấu và tốt nhỏ hơn nhiều so với một cú trượt do mất bám.</p>`,
    },
    {
      h2: 'Dấu hiệu xuống cấp và khi nào thay',
      html: `<p>Bốn dấu hiệu đọc bằng mắt. Một — gờ mòn chỉ báo (TWI): khối cao su nhỏ nằm trong rãnh hoa; khi mặt lăn mòn xuống ngang với đỉnh khối này là tới hạn thay. Hai — nứt tóc trên thành hoặc giữa các khối hoa: cao su lão hóa, lốp mất đàn hồi kể cả hoa còn sâu. Ba — mòn lệch một bên: mép ngoài mòn nhanh hơn giữa là lốp chạy căng quá; mép trong mòn là non hơi; một bên trái/phải mòn khác nhau là cán bánh lệch — sửa căn chỉnh thay vì chỉ thay lốp. Bốn — nổi phồng trên thành: lớp mỏi bên trong đứt, phồng là tiền nổ — thay ngay không thương.</p>
<p>Hai dấu hiệu cảm nhận được: xe rung theo nhịp tốc độ (lốp mòn hình vuông do đạp phanh gấp thường xuyên hoặc cán lệch) và vào cua "lửng lơ" thiếu cảm giác bám — lốp cứng do tuổi hoặc quá căng. Cả hai đều đáng soi sớm.</p>
<p>Thói quen quan trọng: đảo lốp trước-sau không phổ thông trên xe máy như ô tô (lốp hai bánh khác vai trò và cỡ), nhưng đổi lốp trước và sau đúng cặp thời điểm là cân nhắc — lốp trước mòn sau cùng tốc độ mòn của sau, và lốp trước hỏng thì ngã. Khi thay, kiểm đồng thời vành, van bơm và cân bằng bánh — thay lốp mới lên vành mép là tiền lốp đi mất một phần.</p>`,
    },
  ],
  checklist: [
    'Kiểm áp suất lốp mỗi tuần khi lốp nguội — theo con số ghi trên Tem dán cốp hoặc sổ tay, không theo cảm giác.',
    'Soi gờ chỉ báo mòn TWI mỗi kỳ thay nhớt; mòn ngang đỉnh khối là tới hạn thay.',
    'Đọc mã DOT khi mua lốp mới — chọn lốp sản xuất trong vòng gần nhất, không dùng lốp quá khoảng 5 năm.',
    'Chọn hoa văn theo loại đường chạy thật: street cho nhựa, semi cho sỏi, all-round cho hỗn hợp.',
    'Không đổi cỡ lốp tùy tiện — sai bán kính lăn đổi tốc độ thực và kẹt gầm.',
    'Thấy phồng trên thành lốp: thay ngay, không chạy tiếp.',
  ],
  warnings: [
    'Lốp mòn tới mức lốp lọc lộ lớp mỏi là mất bám gần hết — không chờ tới chỉ báo mới nhận.',
    'Không bơm quá áp suất ghi chuẩn để "bền hơn" — lốp căng quá mất bám và giữa mòn nhanh.',
    'Vết nứt sâu trên thành hoặc hông lốp là lão hóa hẳn — thay lốp, không vá.',
  ],
  notes: [
    'Bài viết tổng hợp cho lốp xe máy phổ thông; lốp xe phân khối thể thao có kết cấu và chỉ số khác hẳn.',
    'Áp suất chuẩn theo dòng xe nằm trên tem dán cốp xe hoặc sổ tay người dùng của hãng.',
  ],
  references: [
    'Tài liệu kỹ thuật về kết cấu và phân loại lốp xe gắn máy hai bánh.',
    'Hướng dẫn tiêu chuẩn của các nhà sản xuất lốp về tuổi sử dụng, mã DOT và áp suất.',
    'Quy chuẩn kỹ thuật quốc gia về lốp và kết cấu bánh xe mô tô hai bánh.',
  ],
  related: [
    'lop-xe-may-cach-chon-va-thoi-diem-thay',
    'ap-suat-lop',
    'lop-khong-sang',
    'thay-lop-khi-nao',
  ],
};
