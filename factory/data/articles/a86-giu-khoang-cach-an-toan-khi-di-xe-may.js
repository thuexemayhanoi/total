// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: giữ khoảng cách an toàn khi đi xe máy (slot S00086)
'use strict';

module.exports = {
  slug: 'giu-khoang-cach-an-toan-khi-di-xe-may',
  title: 'Giữ khoảng cách an toàn khi đi xe máy',
  seoTitle: 'Giữ khoảng cách an toàn khi đi xe máy',
  metaDescription: 'Khoảng cách là chiếc phanh vô hình của người đi xe máy: quy tắc hai giây, cách điều chỉnh theo mưa đêm tải nặng và vị trí trên đường.',
  summary: 'Tay lái giỏi, phanh tốt, mũ đội đúng — tất cả chỉ cần một khoảng trống quá ngắn trước đầu xe để trở thành vô nghĩa. Bài viết này nói về kỹ năng bị đánh giá thấp nhất trên đường: giữ khoảng cách. Vì sao khoảng cách là phanh vô hình: mọi tai nạn đâm đuôi đều xảy ra trong phạm vi khoảng cách đã tiêu hết — cự ly phanh không thương lượng với vật lý, dù xe và người tốt đến đâu. Quy tắc hai giây: chọn mốc cố định phía trước, đếm từ lúc xe trước qua mốc — nếu bạn qua mốc trước khi đếm hết hai giây là đang quá sát; mưa, đêm, chở nặng thì nhân lên ba giây. Các yếu tố đổi khoảng cách cần đếm: đường ướt dài gấp đôi quãng phanh, trời tối rút ngắn tầm nhìn, hàng nặng và người ngồi sau kéo dài cự ly phanh, xuống dốc đà tự tăng. Khoảng cách bên: không chạy song song dài lâu với xe khác, tránh điểm mù của xe container và xe tải, không chui sát vào góc khuất. Với xe phía sau: phanh dứt khoát nhưng sớm, không phanh gắt vô lý, và dùng đèn phanh báo trước bằng vài cú nhấp nhẹ. Phần cuối là thói quen rèn: đếm mốc thành phản xạ, nhìn gương mỗi vài giây, và tự hỏi một câu duy nhất mỗi lần sát đầu xe quá — nếu xe trước phanh hết lực ngay bây giờ, mình còn đủ đường không?',
  quickAnswer: 'Trả lời ngắn: khoảng cách an toàn là phần đường bạn cần để dừng lại nếu xe trước dừng đột ngột — và nó là kỹ năng rẻ nhất trên đường vì chỉ cần đếm. Quy tắc hai giây: khi xe trước qua một mốc cố định như cây xăng, cột điện, vạch sơn, đếm một hai — nếu bạn tới mốc trước khi đếm xong là quá sát, buông ga lùi lại. Mưa, đường ướt, đêm, chở người hoặc hàng nặng: ba giây trở lên vì quãng phanh dài ra và tầm nhìn ngắn lại. Không chạy song song dài lâu bên xe khác — giữ hành lang thoát phía trước hoặc phía sau. Với xe container, tránh điểm mù hai bên hông và ngay sau đuôi. Với xe sau ép sát: giữ khoảng cách với xe trước rộng hơn nữa để có đệm, phanh sớm dứt khoát, nhấp phanh vài lần trước chỗ sắp dừng để đèn phanh báo hiệu trước. Đếm mốc mỗi chuyến vài lần — thành phản xạ thì khoảng cách tự giữ, không cần nghĩ.',
  keyPoints: [
    'Khoảng cách là phanh vô hình: tai nạn đâm đuôi chỉ xảy ra ở nơi khoảng cách đã tiêu hết trước đó.',
    'Quy tắc hai giây: xe trước qua mốc, đếm một hai — qua mốc trước khi đếm xong là quá sát, buông ga lùi lại.',
    'Mưa, đêm, chở nặng, xuống dốc: nhân khoảng cách lên ba giây trở lên — cự ly phanh dài ra, tầm nhìn ngắn lại.',
    'Không chạy song song dài lâu với xe khác: luôn giữ hành lang thoát phía trước hoặc phía sau.',
    'Tránh điểm mù xe container và xe tải: hai bên hông và sát đuôi là chỗ họ không thấy bạn.',
    'Xe sau ép sát thì tăng khoảng cách với xe trước — đệm đó là phần đường xe sau mượn tạm khi cần dừng gấp.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['khoảng cách an toàn', 'quy tắc hai giây', 'quãng phanh', 'điểm mù', 'hành lang thoát', 'đèn phanh'],
  keywords: ['khoảng cách an toàn xe máy', 'quy tắc hai giây', 'đi xe máy giữ khoảng cách', 'quãng đường phanh xe máy', 'điểm mù xe tải', 'đâm đuôi xe máy'],
  sections: [
    {
      h2: 'Khoảng cách là chiếc phanh vô hình',
      html: `<p>Trên mọi nguyên nhân gây tai nạn xe máy, đâm đuôi thuộc nhóm đáng tiếc nhất — vì nó gần như hoàn toàn phòng được bằng một việc không tốn công sức gì: để trống đoạn đường trước đầu xe. Xe trước dừng đột ngột, va li rơi xuống, người đi bộ băng ngang — mọi kịch bản đều cần cùng một thứ: quãng đường giữa bạn và rủi ro để hóa giải đà.</p>
<p>Vật lý không thương lượng: ở bốn mươi cây số một giờ, một chiếc xe máy cần khoảng mười mét chỉ để phản ứng — khoảng thời gian mắt thấy, não ra lệnh, tay bóp — cộng thêm chục mét nữa cho phanh ăn vào. Chạy sát đầu xe dưới mười mét ở tốc độ đó nghĩa là đã tiêu hết toàn bộ quãng phanh trước khi có chuyện gì xảy ra.</p>
<p>Điểm đáng ngạc nhiên: người lái giỏi không phải người phanh giỏi — mà là người hiếm khi cần phanh gấp. Khoảng cách giữ được biến hầu hết các tình huống phải phanh khẩn cấp thành tình huống chỉ cần buông ga, nhẹ nhàng hơn nhiều cho cả người lẫn xe.</p>`,
    },
    {
      h2: 'Quy tắc hai giây: đếm thay vì đo',
      html: `<p>Không ai mang thước ra đường — quy tắc hai giây là cách đo khoảng cách bằng thời gian. Chọn mốc cố định phía trước: vạch sơn ngang, cột điện, miệng cống, biển báo. Khi đuôi xe trước vừa qua mốc, đếm đều: một — hai. Bạn qua mốc đúng lúc đếm xong là khoảng cách ổn; tới trước khi đếm xong là quá sát.</p>
<p>Hai giây ở tốc độ nào cũng tự nhân đúng theo quãng đường: ba mươi cây số một giờ hai giây là hơn mười mét, sáu mươi cây số một giờ đã thành hơn ba mươi mét — quy tắc tự co giãn, khỏi phải nhớ bảng số.</p>
<p>Chú ý đếm cho đúng: đếm thật đều — một hai ngắn gọn, không đếm nhanh vì muốn đi sát — tự lừa mình thì quy tắc mất tác dụng. Và đếm lại mỗi khi đổi làn, vượt xe, hoặc đường đổi tình trạng: hai ba lần mỗi chuyến, năm giây tổng cộng, là toàn bộ chi phí của kỹ năng này.</p>`,
    },
    {
      h2: 'Khi nào nhân khoảng cách lên ba giây trở lên',
      html: `<p>Đường ướt là tình huống số một: mặt đường ướt làm lốp mất một phần độ bám, quãng phanh dài gần gấp đôi, và vệt bánh xe trước — chỗ loáng như lớp dầu — trượt trước cả lốp tốt. Mưa to thêm cả tầm nhìn: hai giây thường lệch thành ba giây là tối thiểu.</p>
<p>Đêm: đèn pha chỉ cho thấy phần đường trong tầm chiếu — khoảng cách nhìn thấy được quyết định khoảng cách giữ được, và người đi bộ, vật cản nhỏ chỉ hiện ra khi đã rất gần. Chở người ngồi sau hoặc hàng nặng: khối lượng kéo dài cự ly phanh rõ rệt, cộng thêm trọng tâm đổi khiến bóp gắt dễ mất bám.</p>
<p>Xuống dốc dài: đà tự tăng trong khi phanh phải chống lại cả trọng lượng — khoảng cách cần rộng hơn, và kèm theo đó là về số thấp cho phanh động cơ gánh. Đường có cát, đá dăm, lá cây rụng: mọi thứ giảm độ bám đều là lý do cộng thêm giây — tính thừa một giây không bao giờ thiệt bằng tính thiếu một giây.</p>`,
    },
    {
      h2: 'Khoảng cách bên hông và điểm mù xe lớn',
      html: `<p>Khoảng cách không chỉ có phía trước. Chạy song song dài lâu với xe khác — ô tô, xe máy, xe điện — là tự đặt mình vào thế không thoát: xe bên cạnh chéo sang là không có chỗ tránh, và hai phương tiện song song thì không ai nhìn thấy ai kỹ. Nguyên tắc: vượt qua hoặc buông cho rớt lại, luôn giữ hành lang thoát phía trước hoặc phía sau.</p>
<p>Xe container và xe tải có vùng điểm mù lớn hơn tưởng tượng: ngay sau đuôi, sát hai bên hông — đặc biệt bên phải trước cabin — là những chỗ tài xế không nhìn thấy bạn trong gương. Cách đơn giản: nếu không nhìn thấy gương của họ trong gương của mình thì họ cũng không thấy mình — đổi vị trí ngay.</p>
<p>Chỗ khuất nhìn: đầu cua, dốc gãy, xe đỗ nhô chiếm làn — khoảng cách bên giảm tự động vì không biết cái gì sắp từ phía khuất tràn ra. Giảm tốc sớm và bám làn phải của mình, giữ khoảng cách với mép khuất như đang giữ với một chiếc xe vô hình có thể xuất hiện bất cứ lúc nào.</p>`,
    },
    {
      h2: 'Với xe phía sau: bạn cũng là xe trước của ai đó',
      html: `<p>Khoảng cách là chuyện hai chiều: xe sau sát đuôi bạn thì phanh gắt của bạn cũng gây tai nạn cho họ — và phần thiệt về thân xe và thân người của bạn. Cách xử lý xe ép sát: không tăng tốc chạy đua — tăng khoảng cách với xe trước lên thành đệm, phần đường xe sau mượn tạm khi bạn phải giảm tốc.</p>
<p>Báo phanh sớm: vài cú nhấp nhẹ phanh trước chỗ sắp dừng — đèn phanh nháy vài nhịp trước khi phanh thật — cho xe sau thời gian đọc tình huống. Dừng đèn đỏ: dừng lệch về một bên làn, không đứng chính giữa vệt bánh xe của ô tô phía sau, và canh gương cho tới khi xe phía sau đã khựng hẳn.</p>
<p>Một thói quen đáng có: nhìn gương mỗi vài giây — không chỉ để chuyển làn, mà để biết xe sau đang cách bao xa, đang nhanh hay chậm. Biết xe sau ở đâu là biết mình còn bao nhiêu đệm — và đó là thông tin quyết định khi nào nhường, khi nào phải giữ khoảng cách rộng thêm.</p>`,
    },
    {
      h2: 'Rèn khoảng cách thành phản xạ',
      html: `<p>Điểm tốt nhất của kỹ năng giữ khoảng cách: nó rẻ và không cần thiết bị. Bắt đầu bằng cách đếm mốc mỗi chuyến vài lần — vài ngày là quen, vài tuần là thành phản xạ không cần nghĩ nữa. Đếm khi đường quen nhất: đường quen là nơi người ta lơ đãng nhiều nhất.</p>
<p>Rèn cùng lúc hai việc nhỏ: giữ vị trí di chuyển — nơi nhìn thấy được qua kính của xe trước và có hai đường thoát — và dự đoán sớm — nhìn qua xe trước của mình, thấy đèn phanh của xe cách ba bốn chiếc thì buông ga sớm. Người giữ khoảng cách giỏi gần như biết xe phía trước sắp phanh trước cả khi đèn phanh của họ nháy.</p>
<p>Câu hỏi tự vấn duy nhất đáng nhớ: mỗi lần thấy mình sát đầu xe, hỏi — nếu xe trước phanh hết lực ngay bây giờ, mình còn đủ đường không? Nếu câu trả lời không chắc chắn, câu trả lời chính là khoảng cách — buông ga, lùi lại, và mọi thứ khác tự về đúng chỗ.</p>`,
    },
  ],
  checklist: [
    'Đếm mốc hai giây mỗi lần đổi làn, vượt xe, hoặc đường đổi tình trạng — vài lần mỗi chuyến thành phản xạ.',
    'Mưa, đêm, chở người hoặc hàng, xuống dốc, mặt đường giảm bám: nhân khoảng cách lên ba giây trở lên.',
    'Không chạy song song dài lâu với xe khác — vượt qua hoặc buông rớt, luôn có hành lang thoát.',
    'Không thấy gương của xe container trong gương của họ là đổi vị trí ngay — đang nằm trong điểm mù.',
    'Xe sau ép sát: tăng khoảng cách với xe trước thành đệm, phanh sớm dứt khoát, nhấp đèn phanh báo trước chỗ dừng.',
    'Dừng đèn đỏ lệch một bên làn, canh gương tới khi xe sau khựng hẳn; nhìn gương mỗi vài giây để biết xe sau đang ở đâu.',
  ],
  steps: [
    { title: 'Đếm mốc hai giây', detail: 'Xe trước qua mốc cố định, đếm một hai đều — tới mốc trước khi đếm xong là quá sát, buông ga lùi lại.' },
    { title: 'Nhân theo hoàn cảnh', detail: 'Mưa đêm, chở nặng, xuống dốc, mặt đường loáng — cộng thêm ít nhất một giây cho mỗi yếu tố rủi ro.' },
    { title: 'Tránh điểm mù và thế kẹt', detail: 'Không song song dài lâu, tránh sát hông và đuôi xe tải container, bám làn phải ở đoạn khuất nhìn.' },
    { title: 'Quản cả xe sau', detail: 'Nhấp phanh báo trước chỗ dừng, tăng đệm khi bị ép sát, dừng lệch làn và canh gương tới xe sau khựng hẳn.' },
  ],
  warnings: [
    'Không nán lâu sát hông hay ngay sau xe container — hai bên và đuôi xe là vùng tài xế không nhìn thấy bạn trong gương.',
    'Không đạp phanh gắt không lý do khi có xe sau ép sát: đệm phía trước là phần đường mượn cho cả hai, tiêu hết là cả hai cùng thiệt.',
    'Không tin lốp và phanh tốt thay cho khoảng cách: vật lý cần quãng đường — thiết bị chỉ rút ngắn được chừng mực, khoảng cách thì không giới hạn.',
  ],
  notes: [
    'Quy tắc hai giây không dành riêng xe máy — ô tô và xe tải cũng dùng nó, nên nhìn xe trước của xe trước mình để dự đoán sớm cả khối luồng.',
    'Đếm mốc bằng vạch sơn ngang, cột điện, miệng cống — chọn mốc cố định, tránh mốc là xe đang chạy vì thế đếm không đứng yên.',
  ],
  references: [
    'Quy tắc hai giây và khuyến nghị tăng khoảng cách theo điều kiện thời tiết, ánh sáng và tải trọng là nội dung an toàn giao thông cơ bản trong các chương trình đào tạo người lái.',
    'Quãng đường phản ứng cộng quãng phanh tăng theo bình phương tốc độ là nội dung vật lý chuyển động được giảng dạy trong giáo trình an toàn giao thông.',
  ],
  related: [
    'ky-thuat-phanh-khan-cap-xe-may',
    'mu-bao-hiem-dat-chuan-cach-chon',
    'ky-thuat-vuot-xe-an-toan',
    'guong-chieu-hau-xe-may-cach-chinh-dung',
  ],
};
