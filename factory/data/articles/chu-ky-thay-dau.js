// AI WIKI TOTAL — wiki/dau-nhot: hướng dẫn chi tiết về chu kỳ thay dầu (slot S00303)
'use strict';

module.exports = {
  slug: 'chu-ky-thay-dau',
  title: 'Hướng dẫn chi tiết về chu kỳ thay dầu',
  seoTitle: 'Chu kỳ thay dầu xe máy: theo km, theo thời gian và cách tự xác định',
  metaDescription: 'Chu kỳ thay dầu xe máy là bao lâu: theo km hay theo thời gian, xe chạy ít thì sao, các yếu tố rút ngắn chu kỳ và cách tự xác định cho xe mình.',
  summary: 'Chu kỳ thay dầu là con số bị hỏi nhiều nhất và trả lời sai nhiều nhất trong việc giữ xe: có người thay mỗi 1.000 km, có người để 5.000 km, cả hai đều có thể đúng — vì chu kỳ không phải một con số cố định mà là kết quả của ba yếu tố: loại dầu đổ vào, điều kiện chạy của xe, và thời gian trôi qua kể cả khi xe nằm im. Bài hướng dẫn xếp ba yếu tố đó thành khung tính chu kỳ riêng cho từng xe: mốc km tham chiếu theo loại dầu và loại xe, mốc thời gian cho xe chạy ít, các yếu tố rút ngắn chu kỳ (chạy phố ngắn liên tục, chở nặng, đường bụi, máy cũ), và ba phép kiểm bằng mắt thường để biết dầu còn dùng được hay đã tới hạn — soi màu, nhỏ giọt giấy, và theo dõi mực. Kết là cách lập lịch thay trong sổ xe để không bao giờ để quá hạn mà vẫn không phí tiền thay sớm vô ích.',
  quickAnswer: 'Chu kỳ thay dầu xe máy phổ thông tham chiếu: xe số chạy phố 1.000-1.500 km một lần, xe tay ga 2.000-3.000 km, xe dùng nhớt tổng hợp theo sổ tay có thể dài hơn. Xe chạy ít phải thay theo thời gian: không quá 3-6 tháng một lần, vì nhớt oxy hóa trong lọc chờ. Rút ngắn chu kỳ khi: chạy phố quãng ngắn liên tục (máy không đạt nhiệt chuẩn, nhớt nhiễm nước condensation), chở nặng, đường bụi, máy cũ. Tự kiểm nhanh: nhớt đổi màu sữa nhạt là nhiễm nước, nhỏ một giọt lên giấy thấm thấy lõi sáng quanh chấm sẫm là nhớt còn phụ gia, mực hạ nhanh là máy ăn nhớt.',
  keyPoints: [
    'Chu kỳ là kết quả của ba yếu tố: loại dầu, điều kiện chạy, và thời gian — không phải một con số chung.',
    'Tham chiếu phổ thông: xe số 1.000-1.500 km, xe tay ga 2.000-3.000 km, nhớt tổng hợp dài hơn theo sổ tay.',
    'Xe chạy ít vẫn phải thay 3-6 tháng một lần: oxy hóa và ẩm ngưng hư nhớt trong lọc chờ.',
    'Chạy phố quãng ngắn liên tục là điều kiện khắc nhất: máy không nóng đủ, nhớt nhiễm nước và xăng loãng.',
    'Dấu hiệu nhớt hỏng nhìn được: màu sữa nhạt (nhiễm nước), chấm giấy loang mờ đột ngột, mùi khét cháy.',
    'Ghi lịch thay trong sổ xe: ngày, km, loại dầu — chu kỳ tự nó trở nên rõ ràng sau vài lần thay.',
  ],
  category: 'wiki',
  hub: 'dau-nhot',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['chu kỳ thay dầu', 'oxy hóa nhớt', 'nhớt nhiễm nước', 'giấy thấm nhớt', 'lịch thay nhớt', 'mực nhớt'],
  keywords: ['chu kỳ thay dầu xe máy', 'thay nhớt bao lâu một lần', 'xe chạy ít thay nhớt', 'dấu hiệu nhớt cũ', 'thay nhớt 1000km', 'nhớt nhiễm nước'],
  sections: [
    {
      h2: 'Khung tính chu kỳ: loại dầu, điều kiện chạy, thời gian',
      html: `<p>Loại dầu đặt nền: nhớt khoáng oxy hóa nhanh, chu kỳ ngắn; bán tổng hợp lâu hơn; tổng hợp giữ chất lâu nhất ở nhiệt cao. Điều kiện chạy đè lên nền đó: chạy cao tốc đường trường đều tay là điều kiện nhẹ — nhiệt máy ổn, nhớt ít nhiễm bẩn; chạy phố nhấp nhô là điều kiện nặng — máy không đạt nhiệt chuẩn, nhớt nhiễm nước ngưng và một phần xăng lọt qua xilanh.</p>
<p>Thời gian là trục thứ ba ai cũng quên: phụ gia trong nhớt phản ứng với không khí và hơi nước từ ngày đổ vào, kể cả khi xe nằm im trong gara. Hơi ẩm ngưng trong lọc qua đêm đông ẩm, axit sinh ra từ quá trình oxy hóa ăn mòn dần lớp bảo vệ — đó là lý do mốc thời gian 3-6 tháng tồn tại song song với mốc km, ai tới trước theo đó.</p>
<p>Ghép ba trục lại thành quy tắc thực dụng: lấy mốc km tham chiếu theo loại xe và dầu làm trần, lấy mốc thời gian 6 tháng làm trần thứ hai, và rút ngắn cả hai khi điều kiện chạy nặng. Chu kỳ của xe mình, tính bằng xe mình, không phải bảng chung của mọi người.</p>`,
    },
    {
      h2: 'Mốc tham chiếu theo loại xe và loại dầu',
      html: `<p>Xe số phổ thông (Wave, Sirius, Blade, Exciter đời phổ thông): nhiều hãng khuyến nghị 1.000 km cho xe chạy phố, kéo tới 1.500-2.000 km nếu chạy đường trường là chính. Xe tay ga: 2.000-3.000 km là dải phổ biến — ly hợp khô không ngâm nhớt nên dầu ít chịu ứng lực ma sát ly hợp. Máy nhiều xy-lanh nhỏ, chạy vòng tua cao: theo sổ tay, thường ngắn hơn cảm giác chung.</p>
<p>Đổi loại dầu là đổi chu kỳ: đổ từ khoáng lên bán tổng hợp, có thể kéo thêm vài trăm km theo khuyến nghị của chai dầu và sổ tay; đổ tổng hợp cho xe chạy điều kiện nặng là cách giữ chu kỳ dài mà không hy sinh độ bảo vệ. Nhưng nhớ nguyên tắc: chu kỳ của loại dầu tốt hơn là "được phép dài hơn", không phải "bắt buộc dài hơn" — điều kiện chạy vẫn là trọng số lớn hơn.</p>
<p>Nhầm lẫn cần dọn: thay lọc nhớt không đồng nghĩa thay dầu và ngược lại — với xe có lọc giấy, lọc thay theo kỳ riêng dài hơn kỳ dầu (thường hai kỳ dầu một kỳ lọc); xe phổ thông có lưới lọc thì vệ sinh lưới mỗi lần thay dầu là đủ. Thay dầu mà bỏ lưới lọc bẩn là rót nước sạch vào ly bẩn.</p>`,
    },
    {
      h2: 'Xe chạy ít: cột thời gian không thương lượng',
      html: `<p>Xe đi làm quãng ngắn, mỗi tuần vài chục km, cả năm chưa đủ 1.000 km — nhóm này bị hại kép. Một là quãng ngắn không cho máy đạt nhiệt đủ lâu để đuổi hơi ẩm ngưng trong nhớt: nước ngưng qua đêm mỗi lần chạy lại thêm chút, tích tụ thành nhớt màu sữa nhạt. Hai là phụ gia tiêu hao theo thời gian kể cả khi xe nằm im: chai dầu mở nắp để một năm còn giảm chất lượng, nói gì nhớt trong máy.</p>
<p>Quy tắc cho nhóm này: thay theo mốc thời gian 3-6 tháng, kể cả khi kim dầu chưa nhích. Cứ 6 tháng là một lần thay trọn vẹn — công và tiền của một lần thay không đổi vì km ít, nhưng chất lượng bôi trơn trong máy luôn như nhớt mới.</p>
<p>Bổ sung thói quen cho xe chạy ít: mỗi tuần một lần chạy liên tục 20-30 phút để máy đạt và giữ nhiệt làm việc — vừa sạc lại ắc quy vừa bốc hơi phần ẩm trong nhớt. Kỹ thuật "sấy máy" này không thay được thay dầu, nhưng nó chậm lại quá trình nhớt hỏng theo kiểu xe chạy ít, và là cách rẻ nhất giữ máy khỏe cho xe đi quãng ngắn.</p>`,
    },
    {
      h2: 'Ba phép kiểm nhớt không cần dụng cụ',
      html: `<p>Phép một — soi màu: rút que thăm nhớt, nhỏ vài giọt lên mặt phẳng sáng. Nhớt còn dùng: nâu sẫm trong, loang đều. Nhớt nhiễm nước: màu sữa cà phê nhạt hoặc các vân kem — thời tiết mưa dầm chạy phố ngắn là thủ phạm thường gặp; nhiễm nước là thay ngay không đợi kỳ. Nhớt khét cháy có mùi khét như cao su cháy: quá hạn hoặc máy đang có vấn đề nhiệt — thay và soi tiếp nguyên nhân.</p>
<p>Phép hai — chấm giấy thấm: nhỏ một giọt nhớt lên giấy thấm (giấy lọc cà phê là chuẩn), để 30 phút. Chấm loang ra hai vòng: vòng ngoài màu nhạt loang rộng, lõi sẫm gọn ở giữa nghĩa là nhớt còn phụ gia giữ bẩn lơ lửng tốt — nhớt còn dùng. Chấm loang cục bộ, lõi sẫm to không tách vòng: nhớt đã đầy bẩn, phụ gia cạn — tới kỳ thay.</p>
<p>Phép ba — theo dõi mực: que lau sạch, đo mực giữa hai vạch mỗi tuần. Mực hạ nhanh không đổ lại được mãi: máy ăn nhớt (phớt xupap, piston mòn), bù dầu mới chỉ che dấu hiệu trong khi vấn đề tiến triển. Mực tăng bất thường và có mùi xăng: xăng lọt vào nhớt qua xy-lanh — chạy phố đề ga kéo dài là nguyên nhân quen thuộc, cần chạy dài sấy máy và xem xét bu gi.</p>`,
    },
    {
      h2: 'Lập lịch: một trang sổ quyết định mọi kỳ sau',
      html: `<p>Sổ xe cần bốn cột: ngày thay, số km trên đồng hồ, loại và độ đặc dầu, ghi chú điều kiện chạy kỳ đó (phố nhiều hay tỉnh đường, mưa hay nắng, chở nặng không). Sau ba kỳ, trang sổ tự nói: nếu mỗi kỳ nhớt về màu sữa sớm thì xe thuộc nhóm "rút ngắn chu kỳ"; nếu mỗi kỳ nhớt còn trong sạch tới cữ thì có thể tin kéo dài theo khuyến nghị trần.</p>
<p>Cách đặt lịch thực dụng: chọn mốc dễ nhớ — ngày đầu tháng, hoặc trùng cữ thay nhớt xe (không khuyến khích trùng hẳn để tránh xê lệch), hoặc theo app nhắc việc nhà. Mốc dễ nhớ quan trọng hơn mốc đẹp: lịch đều đặn 4 tháng một lần cho xe chạy ít tốt hơn lịch "đúng 5 tháng" mà quên hai lần.</p>
<p>Trường hợp biên thường gặp: mua xe cũ không rõ lần thay cuối — coi như chưa từng thay, thay ngay một kỳ "làm sạch", chạy 500-1.000 km rồi thay lại lần hai, sau đó về chu kỳ chuẩn. Cách này đắt hơn một lần thay nhưng rẻ hơn một lần lợp máy vì nhớt bẩn cặn dồn trong máy cũ. Kết lại: chu kỳ thay dầu không phải con số thuộc lòng, mà là lịch trình mình tự viết cho xe mình — và viết được vì biết mình chạy xe thế nào.</p>`,
    },
  ],
  checklist: [
    'Ghi ngay kỳ thay gần nhất vào sổ: ngày, km, loại dầu — không có kỷ lục thì coi như chưa thay.',
    'Xe chạy đủ: theo mốc km tham chiếu của xe và loại dầu, không vượt mốc thời gian 6 tháng.',
    'Xe chạy ít: thay theo thời gian 3-6 tháng, kể cả khi km chưa tới.',
    'Mỗi tuần: que thăm mực giữa hai vạch, soi màu nhớt qua nắp đổ.',
    'Thấy nhớt màu sữa nhạt hoặc mùi khét: thay ngay, không đợi kỳ.',
    'Mỗi tuần một lần chạy liên tục 20-30 phút cho xe chạy ít — sấy ẩm và sạc ắc quy.',
  ],
  warnings: [
    'Nhớt nhiễm nước màu sữa là thay ngay — bôi trơn kém tức thời và ăn mòn tăng lên tới trục khuỷu.',
    'Mực hạ nhanh là máy ăn nhớt: kiểm nguyên nhân, không bù mãi dầu mới.',
    'Không kéo chu kỳ vì "xe vẫn chạy êm" — hư hại do nhớt cũ âm thầm, tới lúc nghe thấy là đã đắt.',
  ],
  notes: [
    'Mốc trong bài là tham chiếu cho xe phổ thông tại Việt Nam; mốc chuẩn của từng xe nằm trong sổ tay người dùng.',
    'Loại dầu và độ đặc khuyến nghị xem thêm bài chọn dầu nhớt — hai quyết định này đi kèm nhau trong mỗi kỳ thay.',
  ],
  references: [
    'Tài liệu kỹ thuật về oxy hóa dầu bôi trơn và tiêu hao phụ gia trong động cơ bốn kỳ.',
    'Sổ tay người dùng các dòng xe phổ thông — chu kỳ thay dầu khuyến nghị theo điều kiện vận hành.',
    'Hướng dẫn phân tích nhanh trạng thái dầu bằng chấm giấy thấm (blotter spot test) trong thực hành bảo dưỡng.',
  ],
  related: [
    'dau-nhot-xe-may',
    'thay-dau-nhot',
    'do-dac-dau',
    'chon-dau-nhot',
  ],
};
