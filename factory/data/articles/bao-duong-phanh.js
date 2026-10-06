// AI WIKI TOTAL — wiki/he-thong-phanh: hướng dẫn chi tiết về bảo dưỡng phanh (slot S00295)
'use strict';

module.exports = {
  slug: 'bao-duong-phanh',
  title: 'Hướng dẫn chi tiết về bảo dưỡng phanh',
  seoTitle: 'Bảo dưỡng phanh xe máy: lịch trình, từng bước và dấu hiệu cần kiểm tra',
  metaDescription: 'Bảo dưỡng phanh xe máy theo lịch: kiểm độ rơ, soi má, vệ sinh caliper và trống, thay dầu phanh, xả khí — hướng dẫn từng bước và các sai lầm thường gặp.',
  summary: 'Phanh là hệ thống không có "chỉ số hao mòn" trên bảng đồng hồ — nó mòn âm thầm cho tới khi cần bóp lún sâu hoặc rít gắt mới báo. Vì vậy bảo dưỡng phanh là công việc của lịch trình, không phải của cảm giác: mỗi tuần một phép kiểm nhanh không dụng cụ, mỗi kỳ thay nhớt một lần soi má và các điểm lưu động, mỗi hai năm một lần thay dầu phanh. Bài viết này xếp bảo dưỡng phanh thành ba tầng theo chu kỳ: kiểm tra hàng tuần, bảo dưỡng theo kỳ, và thay thế theo ngưỡng — kèm trình tự từng bước cho từng công việc, danh sách sai lầm phổ biến từ việc tra mỡ sai chỗ tới xả khí chưa hết bọt, và cách lập sổ bảo dưỡng để mọi món thay đều có căn cứ đo đếm chứ không phỏng đo.',
  quickAnswer: 'Bảo dưỡng phanh chia ba tầng. Hàng tuần: kiểm độ rơ cần phanh (ăn trong nửa đầu hành trình), nghe tiếng khi đẩy xe, nhìn vệt dầu dưới xe. Theo kỳ (cùng thay nhớt): soi độ mòn má qua khe caliper, lau bột má trên đĩa, vệ sinh bột mòn trong trống, tra mỡ chịu nhiệt trục cam, kiểm cáp và ống cao su. Theo ngưỡng: thay má khi tới độ dày giới hạn, thay dầu phanh hai năm một lần (dầu hút ẩm), xả khí khi cần mềm, đo đĩa/trống khi thay má. Nguyên tắc nền tảng: không để mỡ dính mặt má hoặc mặt đĩa, luôn dùng đúng loại dầu ghi trên nắp bình, và thay theo chỉ số khắc trên chi tiết.',
  keyPoints: [
    'Phanh mòn âm thầm: bảo dưỡng phải chạy theo lịch, không chờ dấu hiệu — độ rơ, tiếng rít là dấu hiệu muộn.',
    'Ba tầng chu kỳ: kiểm nhanh hàng tuần, soi và vệ sinh theo kỳ thay nhớt, thay thế theo ngưỡng khắc trên chi tiết.',
    'Dầu phanh hút ẩm không đảo ngược được — thay hai năm một lần bất kể nhìn dầu còn trong.',
    'Vệ sinh bột mòn là việc bắt buộc: bột má đóng mặt đĩa tạo rít và giảm lực; bột trong trống tích dần làm phanh kẹt.',
    'Xả khí là kỹ thuật nền tảng: bọt khí nén được và làm phanh mềm — bóp tới khi cảm giác cứng ở đầu cần.',
    'Mỗi lần thay má là dịp đo kèm đĩa hoặc trống — thay má lên đĩa mòn lệch là mất tiền và mất phanh.',
  ],
  category: 'wiki',
  hub: 'he-thong-phanh',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['bảo dưỡng phanh', 'độ rơ cần phanh', 'thay dầu phanh', 'xả khí phanh', 'vệ sinh caliper', 'độ mòn má phanh'],
  keywords: ['bảo dưỡng phanh xe máy', 'thay dầu phanh', 'xả khí phanh xe máy', 'vệ sinh phanh đĩa', 'chu kỳ bảo dưỡng phanh', 'phanh mềm phải làm gì'],
  sections: [
    {
      h2: 'Tầng một: kiểm nhanh hàng tuần không dụng cụ',
      html: `<p>Ba phép thử của tầng này mất chưa đến hai phút. Một — kéo cần phanh trước khi xe đứng yên: lực "ăn" nên đến trong nửa đầu hành trình; lún sâu quá nghĩa là má mòn, khe hở rộng, hoặc có khí trong dầu. Hai — đẩy xe tới tay và nghe: bánh lăn sạch không tiếng là chuẩn; rì rì đều là má cạ nhẹ, rít kim loại là má tới đế thép. Ba — nhìn xuống mặt đất chỗ xe đậu qua đêm: vệt dầu bất thường dưới khung hoặc gần bánh là rò dầu phanh, phải kiểm ngay.</p>
<p>Thêm một phép thứ tư nếu xe để lâu hoặc chạy mưa nhiều: bóp phanh vài nhịp trước khi lăn xe khỏi chỗ đỗ, cảm nhận độ cứng đều nhau giữa các nhịp. Độ cứng khác nhau giữa các nhịp — mềm lúc đầu cứng sau — là túi khí nhỏ đang dồn trong đường dầu, tín hiệu cần xả khí.</p>
<p>Tầng này có sức mạnh của việc phát hiện sớm: phần lớn sự cố phanh nghiêm trọng đều đi qua giai đoạn "dấu hiệu nhẹ" nhiều ngày trước khi thành vấn đề trên đường. Ghi kết quả vào sổ xe (hoặc ghi chú điện thoại) — ba dòng mỗi tuần giúp thấy xu hướng, không chỉ thấy trạng thái.</p>`,
    },
    {
      h2: 'Tầng hai: soi và vệ sinh theo kỳ thay nhớt',
      html: `<p>Cùng lúc thay nhớt là thời điểm lý tưởng soi phanh: xe đã trên kênh, bánh tháo rời. Soi má phanh đĩa qua khe cửa caliper — nhiều má có rãnh khía báo mòn; rãnh còn sâu là còn chạy, rãnh mất hết là tới hạn. Soi cả hai mép má: một mép mòn nhanh hơn mép kia là dấu piston kẹt lệch. Lau mặt đĩa bằng dung dịch vệ sinh phanh và khăn không xơ — bột má đóng dày tạo rít và giảm hệ số bám.</p>
<p>Với phanh trống: mở trống, lau bột mòn đen bằng khăn ướt (không thổi bằng miệng — bột hại phổi), kiểm độ dày hai má, soi lò xo không chai, tra mỡ chịu nhiệt vào trục cam và điểm xoay của xương phanh, rồi chỉnh lại kề hở má-trống bằng cần chỉnh sau khi lắp. Trống kín giữ lại mọi bột — không vệ sinh thì bột đóng dày theo năm, đẩy má cạy lệch khỏi vị trí nghỉ.</p>
<p>Kiểm hai chi tiết thường bị bỏ qua: ống cao su dẫn dầu gần caliper (vết nứt tóc trên vỏ ống là chu kỳ thay đã tới) và cáp phanh sau (lộn vỏ cáp soi rạn sứt; độ cứng bất thường khi bóp là tín hiệu lõi cáp gỉ). Hai chi tiết này hỏng giữa đường thì không có cách tạm sửa an toàn — phòng bệnh rẻ hơn cứu bệnh.</p>`,
    },
    {
      h2: 'Tầng ba: thay má, dầu và xả khí đúng cách',
      html: `<p>Thay má phanh đĩa: ép piston lùi về (dùng dụng cụ ép piston chuyên dụng — không khò bằng vật tùy tiện), rút chốt má, kéo bộ má, lau chỗ ngồi, lắp má mới, đạp-bóp cần vài nhịp cho piston áp má vào vị trí làm việc trước khi lăn xe. Bước ép piston lùi đẩy dầu ngược về bình — mở nắp bình trước khi ép để tránh phớt xilanh chính chịu áp quá. Sau lắp, bóp cần nhiều nhịp tới khi lực cứng ổn định rồi mới đưa xe xuống kênh.</p>
<p>Thay dầu phanh: mở nắp bình, hút dầu cũ, châm dầu mới đúng chuẩn ghi trên nắp, rồi xả tuần tự tại bulông xả của caliper: giập ống sạch vào lọ, mở bulông nửa vòng, bóp cần giữ, đóng bulông, buông cần — lặp tới khi dầu chảy ra trong không bọt, và châm dầu liên tục để bình không cạn (cạn là hút khí vào từ đầu).</p>
<p>Xả khí khi nào: sau mỗi lần mở đường dầu, khi cần mềm bóp nhiều nhịp mới cứng, hoặc sau để xe lâu. Thử cuối: cần bóp lên lực cứng ngay ở đầu hành trình và giữ được — lực không "chảy" đi sau hai giây giữ. Cần vẫn mềm lún thì trong hệ còn khí — xả tiếp, hoặc soi rò ở phớt và ống, vì hệ thống hút được khí nghĩa là hệ đang rò chỗ nào đó.</p>`,
    },
    {
      h2: 'Sai lầm phổ biến và cách tránh',
      html: `<p>Sai lầm một — tra mỡ bừa: mỡ chịu nhiệt chỉ dùng ở điểm xoay, trượt và ren, tuyệt đối không để mỡ dính mặt má hoặc mặt đĩa. Mỡ trên mặt ma sát làm mất phanh cục bộ và không cứu vãn được bằng cách "chạy cho nó bay mỡ". Lau bằng dung dịch vệ sinh phanh ngay nếu dính.</p>
<p>Sai lầm hai — xả khí vội: bọt khí bám vách ống không ra hết trong hai ba nhịp đầu. Xả tới khi dầu trong suốt không bọt, và để yên hệ thống vài phút rồi xả thêm một lượt — bọt nhỏ thoát chậm. Sử dụng ống giập chìm trong lọ dầu để đầu ống không hút khí lại trong lúc đóng mở bulông.</p>
<p>Sai lầm ba — thay má lên đĩa hoặc trống đã mòn lệch: má mới cong theo mặt mòn cũ, lực ép không đều, má mòn lại nhanh bất thường. Mỗi lần thay má là dịp đo đĩa (độ dày tối thiểu khắc trên vành) hoặc trống (giới hạn đường kính khắc trên thành). Ngoài hai sai lầm đó: trộn lẫn dầu các chuẩn khác nhau, và xả hết cạn bình dầu giữa chừng — hai việc đều đưa không khí vào hệ thống mất công xả lại từ đầu.</p>`,
    },
    {
      h2: 'Lập sổ bảo dưỡng và chọn nơi làm',
      html: `<p>Sổ bảo dưỡng phanh cần ba cột: ngày/số km, việc làm, và chỉ số đo được — độ dày má, độ rơ cần, mầu dầu, ngày thay. Chỉ số đo được là điều phân biệt bảo dưỡng với phỏng đo: "má còn 2,1 mm, tới hạn 1,5, dự kiến thay sau 3.000 km" là kế hoạch; "má nhìn còn được" là may rủi.</p>
<p>Chu kỳ tham chiếu cho xe chạy phố: soi má và vệ sinh mỗi 3.000–5.000 km; vệ sinh trống mỗi 8.000–10.000 km; thay dầu phanh hai năm hoặc theo khuyến nghị hãng; cáp phanh và ống cao su bốn năm một lần xét thay dù chưa hỏng — cao su lão hóa theo thời gian, không chỉ theo km.</p>
<p>Chọn nơi làm: hỏi cụ thể "thay má có đo đĩa không", "thay dầu có xả khí đủ không", "dùng dầu đúng chuẩn DOT nào". Nơi trả lời được bằng chỉ số và trình bày trình tự là nơi hiểu việc; nơi trả lời "cứ để đó lo hết" thì kết quả tùy may. Với người tự làm: bắt đầu từ việc vệ sinh và soi má — hai việc rủi ro thấp nhất để làm quen cụm, trước khi chuyển sang thay dầu và xả khí cần dụng cụ và kỹ thuật hơn.</p>`,
    },
  ],
  checklist: [
    'Hàng tuần: kiểm độ rơ cần, nghe tiếng khi đẩy xe, nhìn vệt dầu dưới xe.',
    'Mỗi kỳ thay nhớt: soi má qua caliper, lau đĩa, vệ sinh trống, tra mỡ chịu nhiệt trục cam, kiểm cáp và ống.',
    'Thay má kèm đo đĩa hoặc trống; thay theo độ dày giới hạn khắc trên chi tiết.',
    'Thay dầu phanh hai năm một lần; xả khí tới khi dầu trong không bọt và cần cứng đầu hành trình.',
    'Không để mỡ dính mặt má/đĩa; lau ngay bằng dung dịch vệ sinh phanh nếu dính.',
    'Ghi ba cột vào sổ: ngày-km, việc, chỉ số đo — không ghi "còn tốt" chung chung.',
  ],
  warnings: [
    'Sau khi thay má hoặc mở đường dầu, bóp cần nhiều nhịp tới khi lực ổn định mới đưa xe xuống kênh — không lăn xe ngay.',
    'Không trộn dầu phanh các chuẩn khác nhau; dùng đúng chuẩn ghi trên nắp bình.',
    'Vệt dầu dưới xe hoặc bình dầu hạ nhanh là rò — kiểm trước khi chạy tiếp, không chờ kỳ bảo dưỡng.',
  ],
  notes: [
    'Chu kỳ trong bài là tham chiếu cho xe máy phổ thông chạy phố; xe chạy nhiều, chở nặng hoặc đường bụi cần rút ngắn kỳ vệ sinh.',
    'Tiêu chuẩn độ dày, loại dầu và chu kỳ chính hãng nằm trong sổ tay dịch vụ của từng dòng xe.',
  ],
  references: [
    'Tài liệu kỹ thuật về hệ thống phanh thủy lực và cơ khí trên xe gắn máy hai bánh.',
    'Sổ tay dịch vụ của các nhà sản xuất — chu kỳ bảo dưỡng phanh và tiêu chuẩn vật liệu tiêu hao.',
    'Quy chuẩn kỹ thuật quốc gia về hệ thống phanh xe mô tô hai bánh.',
  ],
  related: [
    'thay-ma-phanh-xe-may-thoi-diem-va-cach-kiem-tra',
    'dau-phanh-xe-may-khi-nao-thay',
    'phanh-dia',
    'phanh-tang-trong',
  ],
};
