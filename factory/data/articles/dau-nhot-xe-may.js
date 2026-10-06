// AI WIKI TOTAL — wiki/dau-nhot: kinh nghiệm dầu nhớt xe máy dành cho người mới (slot S00301)
'use strict';

module.exports = {
  slug: 'dau-nhot-xe-may',
  title: 'Kinh nghiệm dầu nhớt xe máy dành cho người mới',
  seoTitle: 'Dầu nhớt xe máy: chọn, thay và những hiểu lầm cho người mới',
  metaDescription: 'Dầu nhớt xe máy hoạt động thế nào, phân loại theo chuẩn JASO và độ đặc, chu kỳ thay đúng, cách đọc nhãn chai và các hiểu lầm phổ biến người mới hay vấp.',
  summary: 'Dầu nhớt là "máu" của động cơ xe máy: bôi trơn các chi tiết kim loại quay ở tốc độ hàng nghìn vòng mỗi phút, mang nhiệt từ piston về cacte, giữ kín xilanh, và cuốn mạt kim loại đi lọc. Nhưng với người mới, ngần ấy vai trò thường bị cô đọng thành hai câu hỏi thực tế: mua chai nào, và bao lâu thay một lần. Bài viết trả lời theo trình tự người mới cần: dầu làm gì trong động cơ bốn kỳ; hai chỉ số trên nhãn chai quan trọng nhất — chuẩn JASO (MB/MA cho ly hợp ướt) và độ đặc SAE — nghĩa là gì; bao giờ dùng nhớt bán tổng hợp hay tổng hợp; chu kỳ thay tham chiếu theo km và theo thời gian; và năm hiểu lầm kinh điển từ "nhớt càng đặc càng tốt" tới "đổ cao cấp là chạy êm hơn" — mỗi hiểu lầm kèm giải thích vì sao sai.',
  quickAnswer: 'Dầu nhớt xe máy bôi trơn, làm mát, giữ kín và rửa sạch động cơ. Chọn nhớt theo hai chỉ số trên nhãn: chuẩn JASO MA/MA2 cho xe số ly hợp ướt (MB cho xe tay ga ly hợp khô), và độ đặc SAE như 10W-30 theo khuyến nghị sổ tay. Chu kỳ thay phổ thông: 1.000 km cho xe số chạy phố nhiều (hoặc theo sổ tay), không quá 6 tháng cho xe chạy ít. Không lạm dụng nhớt quá đặc — nhớt đặc hơn chuẩn tăng ma sát bên trong máy và nóng máy; không pha nhớt khác loại; và đổ đúng mực, thừa nhớt cũng hại như thiếu.',
  keyPoints: [
    'Dầu nhớt làm bốn việc: bôi trơn, mang nhiệt, giữ kín xilanh, cuốn mạt kim loại đi lọc.',
    'Chuẩn JASO quyết định tương thích ly hợp: MA/MA2 cho xe số ly hợp ướt, MB cho tay ga ly hợp khô.',
    'Độ đặc SAE (10W-30, 15W-40) chọn theo sổ tay xe — đặc hơn chuẩn không phải tốt hơn.',
    'Xe chạy ít vẫn phải thay theo thời gian: nhớt oxy hóa theo tháng, không chỉ theo km.',
    'Mực nhớt thừa cũng hại: hồi dầu bị cuốn vào buồng đốt, khói trắng và tốn dầu.',
    'Không pha lẫn nhớt khoáng và tổng hợp các loại — mỗi công thức có phụ gia riêng, pha tạp mất tác dụng của cả hai.',
  ],
  category: 'wiki',
  hub: 'dau-nhot',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['dầu nhớt xe máy', 'JASO MA', 'SAE 10W-30', 'ly hợp ướt', 'chu kỳ thay nhớt', 'mực nhớt'],
  keywords: ['dầu nhớt xe máy', 'chọn dầu nhớt xe số', 'JASO MA là gì', '10W-30 là gì', 'thay nhớt bao lâu một lần', 'nhớt tổng hợp xe máy'],
  sections: [
    {
      h2: 'Dầu nhớt làm gì trong động cơ',
      html: `<p>Bôi trơn là việc đầu tiên ai cũng biết: giữa piston và thành xilanh, giữa trục khuỷu và bi, giữa các bánh răng — mọi cặp kim loại quay cọ nhau đều cần một lớp dầu mỏng ngăn cách. Không có lớp dầu đó, hai bề mặt kim loại hàn cứng vào nhau trong vài giây ở nhiệt độ và tốc độ động cơ xe máy.</p>
<p>Ba việc còn lại ít được nhắc. Mang nhiệt: piston nhận nhiệt cháy hàng trăm độ, và dầu văng tung tóe lên mặt dưới piston là kênh làm mát quan trọng — piston không có "quạt" riêng, dầu chính là chất làm mát của nó. Giữ kín: lớp dầu giữa piston và xilanh bịt kín khe hở, giữ áp suất cháy khỏi lọt xuống cacte — piston mòn, nhớt loãng thì áp nén mất, máy yếu. Cuốn sạch: mạt kim loại sinh ra mỗi ngày được dầu cuốn về lọc lưới và lọc giấy, không để mạt quay lại giữa các bề mặt.</p>
<p>Hiểu bốn việc này giải thích vì sao nhớt cũ hại kép: dầu oxy hóa loãng đi mất độ bám màng — bôi trơn kém; phụ gia kiềm cạn dần mất khả năng trung hoà axit sinh ra từ cháy — ăn mòn tăng; và nhớt bẩn đặc lại, vừa khó bơm lúc khởi động lạnh vừa bám lọc. Thay nhớt là reset cả bốn việc trong một lần.</p>`,
    },
    {
      h2: 'Đọc nhãn chai: hai chỉ số quyết định',
      html: `<p>Chỉ số thứ nhất — chuẩn JASO: quyết định tương thích với ly hợp. Xe số phổ thông có ly hợp ướt — các lá ly hợp ngâm trong nhớt và dùng chính nhớt làm môi trường ma sát: cần nhớt chuẩn JASO MA/MA2 để lá ly hợp không bị trượt (nhớt có phụ gia giảm ma sát quá mạnh làm ly hợp quay tua không truyền lực). Xe tay ga có ly hợp khô (nhớt không chạm lá ly hợp), dùng nhớt JASO MB — nhớt tiết kiệm nhiên liệu hơn vì được phép giảm ma sát mạnh hơn. Đổ nhầm chiều là lỗi thật: MA vào tay ga thì chỉ phí mà không hại nhiều, nhưng MB vào xe số là trượt ly hợp.</p>
<p>Chỉ số thứ hai — độ đặc SAE: dạng 10W-30, số trước chữ W là độ đặc mùa lạnh (càng nhỏ càng loãng khi lạnh, bơm nhanh lúc khởi động), số sau là độ đặc ở nhiệt 100 độ làm việc. Con số đúng nhất nằm trong sổ tay xe — nhà sản xuất tính theo khe hở chế tạo của máy mình, không phải "đặc hơn là đậm hơn là tốt hơn".</p>
<p>Hai chữ "API SG/SN" hoặc tương tự là cấp chất lượng — càng về sau càng chuẩn mới, chọn cấp bằng hoặc cao hơn sổ tay. Ba chỉ số đó — JASO, SAE, API — chọn xong là chọn được chai nhớt đúng; mọi nhãn đẹp, lời quảng cáo "racing", "bảo vệ tối đa" chỉ là trang trí quanh ba dòng chữ nhỏ.</p>`,
    },
    {
      h2: 'Khoáng, bán tổng hợp, tổng hợp: đáng tiền ở đâu',
      html: `<p>Nhớt khoáng: dầu gốc dầu mỏ tinh luyện, rẻ, phổ biến trong xe phổ thông. Ưu điểm giá và tính "hiền" với động cơ cũ khe hở rộng; nhược là oxy hóa nhanh — chu kỳ ngắn hơn. Bán tổng hợp (semi): trộn gốc khoáng và gốc tổng hợp, cân bằng giá và tuổi thọ — lựa chọn hợp lý của đa số xe phổ thông chạy phố.</p>
<p>Tổng hợp (fully synthetic): gốc hóa chất chế tạo đồng đều, oxy hóa chậm, giữ độ đặc ổn định khi nóng lạnh — hợp xe chạy cao tốc dài, chạy tải nặng, hoặc máy nóng cao (đa xilanh, vận hành mạnh). Đáng tiền ở chu kỳ dài hơn và bảo vệ ở nhiệt cao, không phải ở "tiếng máy êm hơn" như quảng cáo gợi ý — tiếng máy chủ yếu do trạng thái cơ khí, không phải gốc dầu.</p>
<p>Kinh nghiệm chọn của người mới: theo sổ tay trước đã — máy thiết kế cho nhớt gì thì dùng đúng đó. Xe phổ thông chạy dưới 60 km/h quanh phố không "cần" nhớt tổng hợp; xe chạy đường trường nhiều hoặc mùa hè chở nặng chạy dài thì tổng hợp trả công bằng nhiệt độ ổn định và chu kỳ dài. Đừng chọn nhớt theo màu vỏ chai, chọn theo hai chỉ số mục trước cộng ngân sách.</p>`,
    },
    {
      h2: 'Chu kỳ thay: theo km và theo thời gian',
      html: `<p>Con số tham chiếu phổ thông: xe số chạy phố đổi nhớt mỗi 1.000-1.500 km (nhiều hãng phổ thông tại Việt Nam khuyến nghị cữ 1.000), xe tay ga mỗi 2.000-3.000 km, xe dùng nhớt tổng hợp chu kỳ dài hơn theo sổ tay. Nhưng chu kỳ km chỉ áp cho xe chạy đủ — xe chạy ít phải cộng thêm cột thời gian: 3-6 tháng đổi một lần bất kể km.</p>
<p>Vì sao theo thời gian: nhớt oxy hóa ngay trong lọc chờ — độ ẩm ngưng trong lọc qua đêm, phụ gia tiêu hao phản ứng với không khí và hơi nước. Xe để ba tháng mới chạy 300 km thì nhớt trong máy đã cũ theo cách riêng của nó. Cột thời gian là cột không thương lượng với xe chạy ít.</p>
<p>Ba hệ quả của kéo chu kỳ: máy nóng hơn (nhớt loãng làm mát kém), tiếng máy to dần và điện khó đề lúc lạnh (nhớt đặc oxy hóa), và cặn bám thành xilanh dày dần. Ngược lại cũng đừng thay dày hơn khuyến nghị — nhớt còn tốt nhưng thay sớm quá là phí; khuyến nghị hãng là điểm cân bằng đã tính.</p>`,
    },
    {
      h2: 'Năm hiểu lầm kinh điển của người mới',
      html: `<p>Hiểu lầm một: "nhớt đặc hơn là tốt hơn". Sai với máy thiết kế theo độ đặc chuẩn: nhớt 20W-50 vào máy chuẩn 10W-30 làm bơm nhớt nặng lúc khởi động, ma sát bên trong máy tăng, máy nóng thêm — "đặc" chỉ tốt cho máy già khe rộng theo yêu cầu riêng.</p>
<p>Hiểu lầm hai: "đổ thừa cho chắc". Mực vượt chuẩn làm quay trục khuỷu quật dầu sinh bọt khí, váng dầu vào buồng đốt — khói xăng ra ống pô, bugi dầu, và hồi nhớt tốn. Đổ đúng mực giữa hai vạch là chuẩn, thừa thiếu đều hại. Hiểu lầm ba: "pha giữa hai chai nhớt cho đỡ tốn" — trộn hai công thức phụ gia khác nhau cho kết quả không ai kiểm chứng, tốt nhất đừng pha.</p>
<p>Hiểu lầm bốn: "nhớt đen là nhớt hỏng". Nhớt đen sau vài trăm km là dấu hiệu dầu đang làm việc rửa sạch — màu không phải chỉ số, chỉ số là độ trong của nhớt mới và chu kỳ. Hiểu lầm năm: "xe mới không cần thay nhớt theo kỳ" — sai nhất trong các sai: phản ứng của phụ gia giảm dần theo km không quan tâm xe cũ mới, và xe càng mới càng cần giữ vì khe hở còn chuẩn. Kiểm tra mực hàng tuần cùng lúc kiểm áp suất lốp là thói quen kết hợp rẻ nhất cho cả hai hệ thống.</p>`,
    },
  ],
  checklist: [
    'Ghi ba chỉ số sổ tay xe vào điện thoại: chuẩn JASO, độ đặc SAE, chu kỳ thay khuyến nghị.',
    'Kiểm mực nhớt hàng tuần: xe đứng thẳng, que lau sạch rồi đo, mực giữa hai vạch là chuẩn.',
    'Xe chạy ít: thay nhớt theo cột thời gian 3-6 tháng, không đợi đủ km.',
    'Không pha lẫn hai loại nhớt — chai cũ còn lại thì để riêng cho tới kỳ sau dùng tiếp.',
    'Thay nhớt kèm lọc/lưới lọc theo kỳ; với xe phổ thông vệ sinh lưới lọc mỗi lần thay.',
    'Chọn theo chỉ số và nguồn hàng chính hãng, không theo vỏ chai và lời quảng cáo.',
  ],
  warnings: [
    'Đổ nhớt JASO MB vào xe số ly hợp ướt gây trượt ly hợp — dùng đúng chuẩn ghi trong sổ tay.',
    'Mực nhớt vượt vạch max làm khói trắng, tốn nhớt và hỏng bugi — rút bớt ngay, không chạy tiếp.',
    'Nhớt mới mà mực hạ nhanh theo tuần là dấu máy "ăn nhớt" — kiểm piston, xupap và phớt, không đổ bù mãi.',
  ],
  notes: [
    'Bài viết viết cho động cơ bốn kỳ phổ thông; xe hai kỳ có hệ thống bôi trơn và loại nhớt hoàn toàn khác.',
    'Chu kỳ thay và chỉ số chuẩn của từng xe nằm trong sổ tay người dùng do hãng cung cấp.',
  ],
  references: [
    'Tài liệu kỹ thuật về bôi trơn động cơ xe gắn máy bốn kỳ.',
    'Chuẩn JASO T903 về phân loại dầu nhớt theo tính năng ly hợp ướt.',
    'Sổ tay người dùng của các dòng xe phổ thông — chỉ số nhớt và chu kỳ thay khuyến nghị.',
  ],
  related: [
    'dau-nhot-xe-may-loai-chu-ky-va-cach-chon',
    'thay-dau-nhot',
    'do-dac-dau',
    'tu-thay-dau-may-xe-may-tai-nha',
  ],
};
