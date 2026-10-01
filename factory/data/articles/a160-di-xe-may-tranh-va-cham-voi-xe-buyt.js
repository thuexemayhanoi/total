// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: đi xe máy tránh va chạm với xe buýt (slot S00160)
'use strict';

module.exports = {
  slug: 'di-xe-may-tranh-va-cham-voi-xe-buyt',
  title: 'Đi xe máy tránh va chạm với xe buýt: vùng mù, điểm rẽ và làn bị chiếm',
  seoTitle: 'Đi xe máy tránh va chạm với xe buýt an toàn',
  metaDescription: 'Xe buýt có vùng mù lớn, rẽ ngang không báo trước và chiếm làn khi đón khách. Bài viết chỉ cách đi xe máy tránh va chạm với xe buýt.',
  summary: 'Xe buýt là một trong những đối tượng giao thông đặc thù nhất với người đi xe máy: khối lượng lớn khiến nó không thể phanh hay đổi hướng nhanh, kích thước cao tạo vùng mù rộng hơn mọi phương tiện đường bộ khác, và tính chất tuyến điểm khiến nó rẽ ngang, dừng đón khách và xuất phát lại theo nhịp riêng không báo trước. Va chạm xe máy với xe buýt gần như luôn nghiêm trọng — không phải vì tốc độ xe buýt cao, mà vì khối lượng: một va chạm chậm với phương tiện nặng nhiều chục tấn vẫn tạo lực nghiền vượt xa khả năng chịu đựng của con người trên xe máy. Bài viết này hệ thống lại toàn bộ các tình huống giao nhau giữa xe máy và xe buýt: đi song song và vượt — vùng mù nào của xe buýt phải tránh; đi phía sau — cự ly không được rơi vào khi xe buýt xuất phát lại từ trạm; đi phía trước và bên — điểm rẽ của xe buýt vào trạm và ra khỏi làn; và tình huống nguy hiểm nhất — xe buýt và xe máy cùng rẽ tại ngã tư, nơi làn rẽ của hai loại phương tiện giao nhau chéo. Toàn bài xoay quanh một nguyên tắc: với xe buýt, người đi xe máy không giành quyền ưu tiên bằng vị trí — giành bằng thời gian, tức giữ khoảng cách đủ để mọi hành động của xe buýt đều có thời gian thấy, phản ứng và né.',
  quickAnswer: 'Trả lời ngắn: tránh va chạm với xe buýt dựa trên một quy tắc — không ở trong vùng nó không thấy và không ở trong vùng nó không thể tránh. Không đi song song dài với xe buýt, nhất là phần đầu và phần đuôi: đầu xe buýt là vùng mù của gương, đuôi là nơi nó chuẩn bị rẽ vào trạm. Vượt xe buýt thì vượt dứt điểm về phía trái với chênh tốc đủ, không vượt khi nó đang tiến gần trạm hoặc ngã rẽ. Đi phía sau xe buýt: thấy toàn bộ gương của nó trong tầm nhìn mới là cự ly an toàn; không bám sát vì nó xuất phát lại từ trạm với gia tốc thấp nhưng lẫn xe máy dễ vào đúng vùng mù. Đi phía trước: không cắt ngang trước đầu xe buýt đang bắt đầu xuất phát — nó chậm nhưng khối lượng khiến phanh của nó dài xa hơn xe máy tưởng. Tại ngã tư rẽ cùng chiều với xe buýt: đi theo mép ngoài của nó, không bám sát mép trong — điểm rẽ xe buýt quét ra ngoài nhiều hơn xe máy tưởng và đây là kịch bản va chạm chéo phổ biến nhất.',
  keyPoints: [
    'Vùng mù xe buýt trải rộng dọc thân: nếu không thấy gương của xe buýt trong tầm nhìn thì tài xế không thấy mình — nguyên tắc áp cho mọi vị trí song song.',
    'Không vượt xe buýt khi nó tiến gần trạm hoặc ngã rẽ — nó sẽ rẽ hoặc xuất phát lại ngay lúc mình đang ở đúng vùng mù.',
    'Đi phía sau giữ cự ly thấy được gương hai bên; không bám sát đuôi — xe buýt xuất phát từ trạm chậm nhưng chiếm làn theo quỹ đạo rộng.',
    'Không cắt đầu xe buýt đang xuất phát: cự ly phanh của xe buýt dài hơn xe máy tưởng nhiều vì khối lượng, dù tốc độ thấp.',
    'Rẽ cùng chiều tại ngã tư: bám mép ngoài quỹ đạo rẽ của xe buýt, không chen vào khe mép trong — điểm quét ngoài của nó là kịch bản va chạm chéo phổ biến nhất.',
    'Mọi phán đoán về xe buýt đều theo hướng giữ tốc và giữ khoảng cách — với khối lượng lớn, thứ giành được an toàn là thời gian, không phải vị trí.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['xe buýt', 'vùng mù', 'trạm dừng', 'ngã tư rẽ', 'làn đường', 'gương chiếu hậu'],
  keywords: ['đi xe máy tránh xe buýt', 'vùng mù xe buýt', 'vượt xe buýt bằng xe máy', 'an toàn đi cùng xe buýt', 'xe máy và xe buýt', 'va chạm xe buýt'],
  sections: [
    {
      h2: 'Vì sao xe buýt là đối tượng đặc biệt với xe máy',
      html: `<p>Khối lượng là khác biệt căn bản đầu: một xe buýt thành phố nặng cỡ mười hai đến mười tám tấn — gấp trăm lần một chiếc xe máy chở người. Vật lý của khối lượng này tạo hai hệ quả người lái xe máy cần khắc cốt ghi tâm: cự ly phanh của xe buýt dài — kể cả ở tốc độ ba mươi ký một giờ, phanh hết cỡ vẫn cần hàng chục mét — và khả năng né gần như bằng không: xe buýt không có lựa chọn đổi hướng gấp, mọi tình huống bất ngờ đều được xử lý bằng phanh là chính.</p>
<p>Vùng nhìn là khác biệt thứ hai: tài xế xe buýt ngồi cao, gương hai bên nhưng vẫn để lại dải mù dài dọc thân xe — bên trái gần cạnh, hai bên sát thân, và toàn bộ khoảng phía trước cản thấp không quan sát được qua cửa. Một chiếc xe máy đi song song phần giữa thân xe buýt gần như chắc chắn không hiện diện trong nhận thức của tài xế; và khi xe buýt đổi làn theo tín hiệu đúng chuẩn, phần thân giữa vẫn quét qua vị trí đó.</p>
<p>Thứ ba là nhịp hoạt động theo tuyến: xe buýt dừng trạm theo điểm, xuất phát lại theo giờ, và rẽ vào trạm theo quỹ đạo gần như cố định — những cử chỉ không phụ thuộc xe xung quanh. Người lái xe máy vì vậy có thể dự đoán xe buýt chính xác hơn mọi phương tiện khác: thấy biển trạm phía trước là biết nó sắp rẽ vào, thấy nó dừng là biết trong vài giây nó xuất phát. Đây là lợi thế đặc biệt — và cũng là lý do mọi va chạm xe máy với xe buýt đều đáng tiếc gấp đôi: đối tượng hoàn toàn dự đoán được, tai nạn đến từ phía người không chịu dự đoán.</p>`,
    },
    {
      h2: 'Đi song song và vượt: vùng mù dọc thân xe buýt',
      html: `<p>Quy tắc song song với xe buýt chỉ có một: không ở lâu. Nếu vì dòng xe mà buộc đi song song, chọn vị trí phía sau gương trái của xe buýt — nơi mình nhìn thấy gương và tài xế có khả năng nhìn thấy mình — và giữ chênh tốc nhỏ để thoát khỏi vùng này nhanh nhất có thể. Ngược lại, hai vị trí nguy hiểm tuyệt đối phải tránh là phần đầu và phần giữa thân: phần đầu là vùng gương mù khi xe buýt chuẩn bị đổi làn, phần giữa là dải không quan sát được suốt dọc thân.</p>
<p>Vượt xe buýt cần ba điều kiện đủ: đoạn phía trước thoáng dài, xe buýt không có tín hiệu sắp rẽ hoặc trạm phía trước gần, và chênh tốc vượt đủ để thời gian ở vùng mù của thân ngắn nhất. Vượt về phía trái theo quy tắc chung — với xe buýt, thêm một lưu ý: bắt đầu vượt từ sau xa hơn so với vượt xe con, vì phải đi qua quãng thân dài và cần đường đón đầu xe khi kết thúc, không rơi vào việc tăng tốc rồi khựng lại ở phần đầu xe buýt.</p>
<p>Tình huống vượt lỗi kinh điển: xe buýt đang tiến gần trạm, xe máy quyết vượt bên trái — đúng lúc xe buýt rẽ vào trạm theo quỹ đạo quét chéo cả làn. Kịch bản thứ hai: vượt bên phải khi xe buýt dừng trạm — bên phải là nơi cửa mở, khách bước xuống, và xe buýt chuẩn bị xuất phát lại; vùng này vừa mù vừa đông người. Với xe buýt đang dừng, không vượt bên phải kể cả khi trống — đó là khoảng không tồn tại trong vài giây kế tiếp.</p>`,
    },
    {
      h2: 'Đi phía sau: bám đuôi xe buýt là tự vào vùng nguy hiểm',
      html: `<p>Bám sát đuôi xe buýt che mất toàn bộ tầm nhìn đường phía trước — mình chỉ thấy thân xe buýt, không thấy đèn phanh sớm, không thấy ổ gà, không thấy dòng xe dừng. Cự ly an toàn tối thiểu với xe buýt phía trước là khoảng cách nhìn thấy ít nhất một gương của nó — mức cho phép phản ứng với mọi cú phanh của xe buýt mà không cần phanh gấp.</p>
<p>Có một tác nhân nữa ít ai tính: người đi bộ từ trước đầu xe buýt băng ra. Xe buýt dừng trạm che tầm nhìn của cả người đi bộ và xe máy phía sau — người xuống xe băng qua đầu buýt, xe máy bám sát phía sau không thấy họ cho tới khi họ đã ở trong làn. Với lề trạm buýt, quy tắc trải khắp thế giới: chậm lại và chuẩn bị dừng khi tiếp cận xe buýt đang dừng, luôn giả định có người sẽ băng ra từ trước nó.</p>
<p>Và khi xe buýt xuất phát lại từ trạm: nó chiếm lại làn từ tư thế sát lề, quỹ đạo đầu xe quét ra ngoài. Xe máy phía sau thấy chênh tốc thấp của xe buýt và thành thói quen luồn bên phải vượt lên — lọt vào đúng hai rủi ro: vùng mù phần giữa thân và quỹ đạo quét ra của đầu xe. Cách xử lý chuẩn: nhường xe buýt nhập làn — giảm nhẹ tốc cho nó vào hẳn rồi vượt theo quy tắc vượt thường, thay vì đua luồn khe lúc nó đang nhập.</p>`,
    },
    {
      h2: 'Đi phía trước: đừng cắt đầu xe buýt đang xuất phát',
      html: `<p>Đi phía trước xe buýt, vấn đề là ảo giác về tốc độ: xe buýt vừa xuất phát trông chậm, và xe máy dễ coi cự ly phía trước là đủ để cắt ngang. Nhưng xe buýt tăng tốc đều và nhanh hơn vẻ ngoài — một xe buýt hiện đại đạt hai mươi ký một giờ trong khoảng vài chục mét — và ở thời điểm mình cắt ngang, khoảng cách mình nghĩ là an toàn có thể đã mất hơn một nửa.</p>
<p>Khối lượng làm phần còn lại: cự ly phanh của xe buýt ở hai ba mươi ký một giờ đo bằng chục mét, và tài xế buýt còn một giới hạn nữa — phanh gấp xe buýt có thể làm hành khách đứng bên trong ngã, nên nhiều tài xế chủ quan phanh theo ngưỡng nhẹ ban đầu. Nghĩa là xe máy phía trước không được tính vào phanh của xe buýt như lớp cứu: lớp cứu là khoảng cách mình giữ, không phải phản ứng của nó.</p>
<p>Từ đó rút ra ba quy tắc phía trước: đổi làn ra trước xe buýt chỉ khi chênh tốc dương rõ — tức mình nhanh hơn nó — và có khoảng đệm sau khi đổi; không nhả ga ngay trước đầu xe buýt, kể cả khi đã qua — mỗi cú phanh của mình sau khi cắt đầu là một lần buộc xe buýt phanh theo; và tại đèn đỏ, không dừng sát đuôi xe phía trước theo cách chặn toàn bộ đường thoát — dừng lệch sang một bên để có lối tránh nếu xe buýt phía sau không giữ được cự ly.</p>`,
    },
    {
      h2: 'Rẽ cùng xe buýt tại ngã tư: kịch bản va chạm chéo phổ biến nhất',
      html: `<p>Hầu hết va chạm xe máy với xe buýt tại ngã tư đều là va chạm chéo bên trong làn rẽ: cả hai cùng rẽ cùng hướng — thường là rẽ trái với quy tắc đường bên trái — xe máy bám sát mép trong của xe buýt, và quỹ đạo rẽ của xe buýt quét ra phía ngoài rộng hơn xe máy tưởng. Mặt phẳng xe buýt dừng rẽ nghiêng về trong, nhưng phần đuôi quét ra ngoài — và xe máy trong khe mép trong chính là điểm giao của quỹ đạo.</p>
<p>Cách đi đúng khi rẽ cùng xe buýt: trì hoãn điểm rẽ của mình về phía sau và phía ngoài — đi theo mép ngoài quỹ đạo xe buýt, rẽ sau khi thấy phần đuôi nó đã quẹo xong, và giữ khoảng cách theo phương ngang với thân nó suốt lúc rẽ. Trông như mất vị trí, nhưng thực tế là giữ nguyên khoảng cách an toàn trong suốt đường cong — vùng mù phần giữa thân xe buýt tồn tại không chỉ khi đi thẳng.</p>
<p>Ngược lại, tình huống xe buýt rẽ ngang qua đường mình đi thẳng: biển báo trạm, vạch dẫn vào bến và đèn xin nhường của xe buýt là ba tín hiệu báo trước rẽ. Thấy một trong ba tín hiệu này với xe buýt phía trước gần, chuẩn bị phanh sớm và nhường — vì quỹ đạo rẽ của nó chiếm phần lớn mặt đường và không thể nhường lại được. Với xe buýt, mọi tranh giành vị trí đều kết thúc theo một hướng: xe máy mất — và vì vậy tranh trước bằng cách không tranh, giữ thời gian và khoảng cách, là kỹ năng cuối cùng và cũng là kỹ năng bao trùm mọi tình huống trong bài.</p>`,
    },
    {
      h2: 'Tư duy tổng: nhường xe buýt là nhường cho đúng chỗ',
      html: `<p>Đặt hết các tình huống cạnh nhau, một mẫu số chung hiện ra: gần như mọi va chạm xe máy với xe buýt đều bắt đầu từ một lần xe máy cố giữ vị trí — bên phải xe dừng, khe mép trong khi rẽ, khoảng đệm phía trước đầu buýt. Vị trí ấy mỗi lần tiết kiệm được vài giây, và cái giá của nó khi sai là không có mức trừ: với khối lượng chục tấn, không tồn tại va chạm nhẹ.</p>
<p>Nhưng nhường không có nghĩa là cam kết đi chậm cả quãng: nhường đúng chỗ — trạm, ngã rẽ, lúc nhập làn — và đi bình thường ở lại khoảng đường thoáng. Cách phân biệt rất đơn giản: nếu hành động của mình làm xe buýt phải phanh, đổi hướng hay chờ, thì đó là chỗ nhường; còn lại là đoạn đường của mọi người, cứ đi.</p>
<p>Và một điều đáng nhớ nhất: tài xế xe buýt là một trong những người lái được đào tạo nhất trên đường phố — họ có giờ giấc tuyến, có luật vào trạm, có gương và kinh nghiệm hàng chục nghìn giờ. Nếu cả lớp người được đào tạo ấy vẫn để lại vùng mù rộng tới thế, thì lớp phòng thủ thật sự của người đi xe máy không nằm ở phán đoán tay lái đối phương — nằm ở khoảng cách mình giữ với mọi vùng không thấy. Giữ được khoảng cách đó là giữ được toàn bộ bài học của chuyến đi.</p>`,
    },
  ],
  checklist: [
    'Song song xe buýt: chỉ ở vùng thấy được gương, thoát nhanh — không đi dài phần giữa thân là vùng mù.',
    'Vượt xe buýt: phía trái, chênh tốc đủ, đoạn trước thoáng, không vượt khi gần trạm hoặc ngã rẽ, không vượt bên phải xe buýt dừng.',
    'Đi phía sau: giữ cự ly thấy được gương xe buýt; chậm và chuẩn bị dừng khi qua trạm buýt vì người đi bộ băng từ trước đầu nó.',
    'Không cắt đầu xe buýt đang xuất phát — tăng tốc của nó nhanh hơn vẻ ngoài và cự ly phanh dài theo khối lượng.',
    'Rẽ cùng hướng với xe buýt: bám mép ngoài quỹ đạo, rẽ sau phần đuôi nó quét xong, giữ khoảng cách ngang suốt đường cong.',
    'Nhường xe buýt nhập làn khi nó xuất phát từ trạm — không luồn bên phải vượt lên lúc nó đang nhập.',
  ],
  steps: [
    { title: 'Đọc vị trí và dự đoán', detail: 'Quan sát biển trạm, vạch dẫn vào bến và tín hiệu rẽ của xe buýt từ xa, xác định vùng mù dọc thân và chọn vị trí đi có gương nhìn thấy được.' },
    { title: 'Xử lý khi song song hoặc vượt', detail: 'Thoát nhanh khỏi vùng song song, chỉ vượt về trái với chênh tốc đủ tại đoạn thoáng, tránh hoàn toàn việc vượt khi xe buýt gần trạm hoặc ngã rẽ.' },
    { title: 'Xử lý phía sau và phía trước', detail: 'Giữ cự ly thấy gương khi bám theo, chậm lại khi qua trạm dừng, không cắt đầu xe buýt xuất phát và không nhả ga ngay sau khi vượt.' },
    { title: 'Rẽ an toàn cùng xe buýt', detail: 'Bám mép ngoài quỹ đạo rẽ của xe buýt, trì hoãn điểm rẽ tới khi phần đuôi nó quét xong, giữ khoảng cách ngang với thân suốt đường cong.' },
  ],
  warnings: [
    'Không vượt bên phải xe buýt đang dừng trạm — vùng cửa mở có người bước xuống và xe buýt xuất phát lại sau vài giây.',
    'Không bám sát đuôi xe buýt — che hết tầm nhìn phía trước và tự đặt mình vào vùng không kịp phản ứng với mọi cú phanh của nó.',
    'Không chen mép trong khi rẽ cùng xe buýt — phần đuôi xe buýt quét ra ngoài là điểm giao quỹ đạo của phần lớn va chạm chéo.',
  ],
  notes: [
    'Cự ly phanh xe buýt dài theo khối lượng — ở tốc độ ba mươi ký một giờ vẫn cần chục mét dừng hết, mọi phán đoán khoảng cách cần cộng phần dự phòng này.',
    'Xe buýt là phương tiện dự đoán được nhất đường phố: trạm theo điểm, rẽ theo tín hiệu, xuất phát theo giờ — va chạm gần như luôn đến từ phía không chịu dự đoán.',
  ],
  references: [
    { title: 'Vùng mù của xe tải khi đi xe máy', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/vung-mu-cua-xe-tai-khi-di-xe-may/' },
    { title: 'Giữ khoảng cách an toàn khi đi xe máy', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/giu-khoang-cach-an-toan-khi-di-xe-may/' },
  ],
  related: [
    'vung-mu-cua-xe-tai-khi-di-xe-may',
    'giu-khoang-cach-an-toan-khi-di-xe-may',
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'ky-thuat-phanh-khan-cap-xe-may',
  ],
};
