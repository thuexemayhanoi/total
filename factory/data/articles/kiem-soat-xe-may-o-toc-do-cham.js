// AI WIKI TOTAL — S01118 (topic V2 T001148); kiểm soát xe máy ở tốc độ rất chậm: ga đều, côn trượt nhẹ, phanh sau, hướng nhìn; không nêu số liệu, khoảng cách hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'kiem-soat-xe-may-o-toc-do-cham',
  title: 'Kiểm soát xe ở tốc độ rất chậm: bóp côn nhẹ, phanh sau và nhìn xa để không loạng choạng',
  seoTitle: 'Kiểm soát xe máy ở tốc độ chậm: bóp côn, phanh sau, hướng nhìn',
  metaDescription: 'Cách kiểm soát xe máy ở tốc độ chậm khi kẹt xe, quay đầu hay đỗ chỗ hẹp: ga đều, bóp côn nhẹ, phanh sau, hướng nhìn, tư thế và bài tập ở bãi vắng.',
  summary: 'Bài giải thích vì sao xe máy dễ loạng choạng khi lăn bánh chậm lúc kẹt xe, quay đầu hay đỗ ở chỗ hẹp: đà lăn không còn giúp giữ thăng bằng nên mọi cú giật ga hay nhịp phanh gấp đều bị khuếch đại. Nội dung hướng dẫn kiểm soát tốc độ bằng tay ga đều, côn trượt nhẹ (xe có tay côn) và phanh sau (xe không có tay côn), cách nhìn xa thay vì nhìn bánh trước, tư thế thả lỏng, cùng bài tập từng bước ở bãi vắng với đồ bảo hộ đầy đủ và quy tắc dừng khi mệt.',
  quickAnswer: 'Xe loạng choạng khi đi chậm vì đà lăn không còn giúp giữ thăng bằng, nên mọi cú giật ga hay phanh gấp đều bị khuếch đại. Hãy giữ tay ga đều và nhẹ, chỉnh tốc độ bằng côn trượt nhẹ (xe có tay côn) hoặc phanh sau (xe tay ga, xe số không tay côn). Nhìn nơi muốn tới thay vì bánh trước, thả lỏng tay và vai. Luyện ở bãi vắng, mặc đồ bảo hộ, dừng khi mệt.',
  keyPoints: [
    'Đi chậm khó hơn vì đà lăn không còn giúp xe tự đứng vững: độ nghiêng lớn dần nhanh so với quãng xe đi được, mỗi cú chỉnh phải lớn và sớm hơn nên mọi giật cục đều bị khuếch đại.',
    'Tay ga nên cố định ở mức nhẹ để xe có lực kéo ổn định; đóng rồi mở ga theo từng nhịp tạo ra cú nhún đầu rồi vọt tới, làm lệch thăng bằng.',
    'Xe có tay côn chỉnh tốc độ bằng trượt côn nhẹ ở số thấp, chỉ khi đang nhích và không giữ nửa côn lâu; xe tay ga và xe số không tay côn dùng ga nhẹ kèm phanh sau, cách điều khiển tùy xe.',
    'Phanh sau chạm nhẹ làm xe đầm và chậm lại êm; tránh bóp phanh trước lúc tay lái đang bẻ gắt ở tốc độ chậm và tránh đạp hoặc bóp phanh sau giật cục.',
    'Nhìn xa về phía muốn tới, xoay đầu theo vòng quay, tay và vai thả lỏng; luyện ở bãi vắng với đồ bảo hộ đầy đủ, từng bài ngắn và dừng ngay khi mệt.'
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['thăng bằng ở tốc độ chậm', 'côn trượt nhẹ', 'tay ga', 'phanh sau', 'hướng nhìn', 'bãi tập vắng'],
  keywords: ['kiểm soát xe máy ở tốc độ chậm', 'đi xe chậm bị loạng choạng', 'giữ thăng bằng khi đi chậm', 'kỹ thuật lái xe máy chậm khi kẹt xe'],
  sections: [
    P('Vì sao đi chậm lại khó giữ thăng bằng hơn đi nhanh', [
      'Cảnh quen thuộc trong giờ tắc đường là chiếc xe nhích từng đoạn ngắn, hai chân chực chạm đất liên tục, còn lúc quay đầu ở chỗ hẹp thì tay lái đảo qua đảo lại như muốn gục. Chuyện này ít khi do thiếu năng khiếu mà do cơ học: xe hai bánh không tự đứng vững khi đứng yên, nó đứng được nhờ đang lăn tới và nhờ người lái liên tục chỉnh nhẹ. Ở tốc độ đường phố, đà tiến của hai bánh cùng cấu tạo của cụm tay lái thường giúp xe tự thẳng lại, và một cú chỉnh nhỏ cũng đưa bánh về dưới thân xe rất nhanh. Ở tốc độ đi bộ, những trợ lực ấy yếu đi rõ rệt, việc giữ thăng bằng dồn gần hết vào tay, mắt và thân người bạn.',
      'Có hai lý do khiến một sai sót nhỏ bị khuếch đại khi đi chậm. Thứ nhất, xe lăn chậm thì mỗi đoạn đường tốn nhiều thời gian hơn, nên một độ nghiêng nhỏ có đủ thì giờ lớn dần trước khi bánh xe kịp đến chỗ dưới trọng tâm; muốn cứu xe phải bẻ tay lái nhiều hơn và sớm hơn. Thứ hai, những tác động do chính bạn gây ra, như một cú nhả ga, một nhịp bóp phanh giật cục hay bàn tay run vì gồng, chiếm tỷ trọng lớn so với đà của xe, nên chúng làm xe chúi, nhún hoặc xoay đầu thấy rõ. Phản xạ tự nhiên là siết tay lái, nhìn xuống bánh trước và đóng ga; cả ba lại làm vòng giật cục nặng thêm.',
      'Vì vậy, kiểm soát xe ở tốc độ rất chậm xoay quanh bốn việc sẽ lần lượt được bàn dưới đây: giữ tay ga đều và chỉnh tốc độ bằng thứ khác ngoài việc đóng mở ga, dùng phanh sau như một cái hãm nhẹ, nhìn xa thay vì nhìn bánh trước, và thả lỏng thân người. Cách thực hiện khác nhau giữa xe có tay côn, xe số không tay côn và xe tay ga, và phần dưới đây nói rõ chỗ khác ấy. Cách vào cua ở tốc độ thông thường và phanh khẩn cấp đã có bài riêng; bài này chỉ bàn quãng tốc độ gần như đi bộ. Chi tiết còn tùy từng mẫu xe, nên hãy đối chiếu với sách hướng dẫn sử dụng của xe bạn.'
    ]),
    P('Giữ ga đều và dùng côn trượt nhẹ để chỉnh tốc độ', [
      'Nền của mọi kỹ thuật đi chậm là một mức ga nhẹ và đều, đủ để động cơ chạy êm, không rung giật, không có nguy cơ tắt, và truyền xuống bánh sau một lực kéo ổn định. Lực kéo ấy giữ cho hệ truyền động luôn căng đều và thân xe không chúi lên chúi xuống, đồng thời cho bạn một nền chuyển động đều để dựa vào mà giữ thăng bằng. Trái lại, vặn ga rồi nhả ga theo từng nhịp tạo ra những cú giật dọc: đóng ga thì xe nhún đầu, mở lại thì xe vọt tới, và mỗi cú đều là một cú đẩy làm lệch thăng bằng. Vì thế hãy cố định tay ga ở mức thấp, rồi chỉnh tốc độ bằng côn hoặc phanh sau thay vì bằng chính tay ga.',
      'Trên xe có tay côn, hãy dùng số thấp nhất, giữ ga ở mức vừa đủ cho máy chạy êm, rồi tìm vùng côn bắt đầu ăn: đó là đoạn ngắn của hành trình cần côn, nơi lực truyền xuống bánh sau vừa được nối và xe bắt đầu nhích. Ép cần côn thêm một chút thì xe chậm lại, nới ra một chút thì xe nhanh lên, trong khi tay ga và tiếng máy gần như không đổi. Chuyển động của ngón tay phải nhỏ và đều; bóp hết rồi nhả bật là tạo ra chính cú giật mà bạn đang tránh. Nên để sẵn vài ngón tay trên cần côn khi chạy chậm, kẻo mỗi lần cần chỉnh lại phải với tìm.',
      'Trượt côn là để các tấm ma sát cọ vào nhau, nên sinh nhiệt và mòn dần; chỉ dùng ngắn, khi xe còn đang nhích. Dừng chờ lâu ở đèn đỏ hoặc trên dốc, hãy giữ xe bằng phanh, về số không và thả cần côn thay vì giữ bằng nửa côn. Có mùi khét, hoặc máy gào mà xe không tiến tương ứng, là lúc dừng đi xe và nhờ thợ kiểm tra. Xe số không tay côn và xe tay ga không có cần côn để chỉnh bằng tay, vì ly hợp tự nối theo vòng tua, nên việc chỉnh tốc độ dồn sang phanh sau. Ở nhiều xe tay ga, nhả hẳn ga làm ly hợp ngắt và xe lăn gần như tự do, rồi mở ga lại thì xe có thể giật tới một nhịp.'
    ]),
    P('Dùng phanh sau để kiểm soát tốc độ thay vì đóng ga', [
      'Phanh sau chạm nhẹ là cách chỉnh tốc độ êm ở quãng chậm, vì nó hãm xe mà không cắt lực kéo từ tay ga. Bánh sau bị hãm một chút trong khi tay ga vẫn đẩy tới, tạo ra thế căng giữa hai lực ngược chiều; thế căng ấy làm xe bớt nhún, bớt chúi và có cảm giác đầm hơn, giống một sợi dây được kéo căng thì ít võng. Khác với phanh trước, phanh sau ít dồn trọng lượng lên bánh trước nên ít làm đầu xe chúi xuống. Cách làm là đặt sẵn chân hoặc ngón tay trên bộ phận phanh sau, ép rất nhẹ và nhả cũng nhẹ như vậy, để tốc độ đổi từ từ chứ không đổi theo nhịp giật. Chỉ dùng ngắn lúc xe đang nhích: giữ phanh sau ép lâu trong khi ga vẫn mở làm má phanh và ly hợp nóng, mòn nhanh.',
      'Cần nhận ra đúng bộ phận phanh sau trên xe của mình trước khi tập. Ở xe số và xe côn tay, phanh sau thường là bàn đạp bên chân phải; ở nhiều xe tay ga, phanh sau là cần bên tay trái còn cần bên tay phải là phanh trước, nhưng cách bố trí tùy xe nên cần đối chiếu sách hướng dẫn. Xe có hệ thống phanh kết hợp thì bóp cần phanh sau có thể kéo theo một phần phanh trước, khiến cảm giác và mức hãm khác hẳn, vì vậy cần làm quen riêng ở bãi vắng. Việc này đáng kiểm tra từ trước, vì bóp nhầm cần ở tốc độ chậm vẫn có thể làm xe chúi hoặc khựng đột ngột.',
      'Ba lỗi dưới đây thường gặp. Một là đóng ga hẳn để xe chậm lại rồi lại vặn ga tăng lên, khiến xe nhún đầu rồi vọt tới theo nhịp. Hai là đạp hoặc bóp phanh sau giật cục, thậm chí khóa bánh, làm xe khựng hoặc đuôi xe trượt. Ba là dùng phanh trước lúc tay lái đang bẻ gắt ở tốc độ chậm, vì bánh trước có thể gập vào trong và kéo xe đổ về phía đó; hãy để phanh trước cho lúc tay lái đã thẳng và bạn thật sự cần dừng. Trước khi tập, kiểm tra phanh sau ăn đều và nhả sạch; bàn đạp hoặc cần lỏng, kêu rít, ăn giật hay có mùi khét sau khi dùng là dấu hiệu phải ngừng đi xe và nhờ thợ kiểm tra.'
    ]),
    P('Hướng nhìn và tư thế thân người khi lăn bánh chậm', [
      'Xe có xu hướng đi về nơi mắt bạn hướng tới, và ở tốc độ chậm xu hướng ấy rõ hơn vì mọi chuyển động của đầu và vai đều truyền thẳng vào tay lái. Nhìn xuống bánh trước hoặc dán mắt vào vật cản ngay trước đầu xe làm tay lái giật nhỏ liên tục và xe dễ trôi về phía vật đó; nhìn xa tới nơi bạn muốn xe đến kế tiếp thì tay lái tự chỉnh mượt hơn. Giữa dòng xe đặc, hãy nhìn xuyên qua khe hở tới nơi khe ấy dẫn đến, dùng thị giác ngoại vi để theo dõi xe sát bên và chừa một khoảng trống vừa đủ với xe phía trước để không phải dừng đột ngột.',
      'Lúc quay đầu, hãy xoay đầu và vai sớm về phía lối ra của vòng quay, nhìn qua vai thay vì nhìn lề đường hay bánh trước. Đầu xoay trước thì tay lái, thân người và xe có xu hướng bám theo, và bạn cũng thấy sớm xe nào đang tới. Giữ đầu ngay ngắn, tầm mắt ngang với đường chân trời, vì đầu cúi hoặc nghiêng theo xe dễ làm cảm giác thăng bằng của chính bạn bị lệch. Với chỗ đỗ hẹp, chọn điểm đến cuối cùng, nhìn vào điểm đó và để xe vẽ đường cong tự nhiên tới đó, thay vì chỉnh từng chút theo vật cản sát bên. Chỗ hẹp đến mức phải chống chân nhiều lần mới xoay nổi thì xuống dắt xe.',
      'Về thân người, mục tiêu là thả lỏng nhưng vững. Hai khuỷu tay hơi cong, vai hạ xuống, cổ tay không gồng; bàn tay ôm tay lái vừa đủ để không tuột, đủ lỏng để tay lái tự bù những dao động nhỏ. Mỏi cẳng tay hoặc tê bàn tay sau đoạn kẹt xe là dấu hiệu bạn đang gồng. Thân trên thẳng, ở giữa xe, hai chân đặt vững trên bàn hoặc sàn để chân, xe có bình xăng thì kẹp nhẹ hai đầu gối. Trong vòng quay chậm, để xe nghiêng nhẹ vào trong còn thân người giữ gần thẳng hoặc hơi lệch ra ngoài, vì người nghiêng cùng xe làm trọng tâm chung dồn hẳn vào trong và xe dễ ngã vào đó. Chân chạm đất là việc của lúc dừng, không phải chỗ tựa.'
    ]),
    P('Bài tập luyện tại bãi vắng: từ đường thẳng đến vòng quay đầu', [
      'Hãy luyện ở bãi thật vắng, mặt phẳng, khô và sạch: không cát, sỏi, dầu hay lá ướt, không người, không xe khác, không trẻ nhỏ hoặc vật nuôi chạy ngang, và quanh bạn còn đủ chỗ trống để xe có thể trượt đi mà không va vào đâu. Mặc đồ bảo hộ đầy đủ ngay cả khi chậm: mũ bảo hiểm cài quai, găng tay, giày kín cổ, quần áo dài, thêm đồ bảo vệ khuỷu tay và đầu gối nếu có, vì ngã chậm vẫn dễ kẹt chân hoặc trầy xước. Trước khi tập, kiểm tra phanh sau ăn đều, lốp trông bình thường, xe không rò xăng hoặc dầu. Dùng vật mốc mềm như chóp nhựa hoặc vạch phấn, không dùng gạch đá hay vật cứng.',
      'Nên đi từ dễ đến khó, mỗi buổi chỉ tập một hai bài. Bài đầu là đường thẳng thật chậm: ga đều, chỉnh tốc độ bằng côn trượt nhẹ hoặc phanh sau, mắt nhìn vật mốc ở xa, mục tiêu là xe đi thẳng mà không đặt chân xuống. Bài hai là dừng rồi đi lại: hạ tốc gần như đứng yên bằng phanh sau, rồi nhả ra cho xe nhích êm, không giật. Bài ba là vòng tròn rộng thu nhỏ dần, cả hai chiều, chiều yếu hơn thì tập thêm. Bài bốn là hình số tám, đầu xoay sớm theo lối ra. Bài năm là hành lang hẹp dần giữa hai hàng vật mốc, đi chậm nhất có thể mà không chống chân. Cuối cùng là quay đầu trong một ô vẽ bằng phấn, rộng trước, hẹp sau.',
      'Giữ buổi tập ngắn và nghỉ giữa các bài, vì đi chậm đòi hỏi tập trung cao và làm mỏi cẳng tay, bàn tay lẫn cổ. Dừng ngay khi thấy mệt, tay run hoặc tê, mắt kém tập trung, buồn ngủ hay bắt đầu bực bội, cũng như khi xe có biểu hiện lạ như mùi khét từ ly hợp hoặc phanh. Tập lúc mệt chỉ củng cố thói quen gồng, giật và dễ gây ngã. Sau mỗi buổi, ghi vài dòng về bài nào làm tốt, bài nào còn phải chống chân và bạn đoán nguyên nhân nằm ở đâu. Chỉ đem kỹ thuật ra đường đông khi ở bãi bạn đã đi được các bài trên êm, không chống chân và không giật ga, rồi bắt đầu ở đoạn ít xe.'
    ])
  ],
  checklist: [
    'Kiểm tra phanh sau ăn đều và nhả sạch trước khi tập; có tiếng rít, mùi khét hoặc cảm giác lỏng thì ngừng đi xe và ra thợ.',
    'Chọn bãi vắng, phẳng, khô, sạch, không người và không xe khác; mặc đủ mũ bảo hiểm cài quai, găng tay, giày kín và quần áo dài.',
    'Giữ tay ga đều ở mức nhẹ, chỉnh tốc độ bằng côn trượt nhẹ nếu xe có tay côn hoặc bằng phanh sau nếu là xe tay ga và xe số không tay côn.',
    'Nhìn về nơi mình muốn tới, xoay đầu theo vòng quay, giữ khuỷu tay hơi cong, vai hạ, cổ tay không gồng.',
    'Luyện từng bài ngắn, nghỉ giữa các bài và dừng ngay khi mệt, mỏi tay, buồn ngủ hoặc mất tập trung.'
  ],
  steps: [
    { title: 'Chuẩn bị xe, đồ bảo hộ và bãi tập', detail: 'Kiểm tra phanh sau, lốp và đồ bảo hộ, chọn bãi vắng phẳng, khô, sạch, rồi đặt vài vật mốc mềm làm điểm nhìn và đường đi.' },
    { title: 'Tập ga đều và chỉnh tốc độ bằng côn hoặc phanh sau', detail: 'Đi đường thẳng thật chậm với tay ga cố định ở mức nhẹ; xe có tay côn thì trượt côn nhẹ ở số thấp, xe không tay côn thì ép phanh sau thật nhẹ; tập dừng rồi đi lại cho êm.' },
    { title: 'Thêm hướng nhìn và tư thế thả lỏng', detail: 'Nhìn vật mốc ở xa thay vì bánh trước, xoay đầu theo vòng quay, giữ tay và vai lỏng, rồi thử vòng tròn rộng, hình số tám và quay đầu từ rộng đến hẹp dần.' },
    { title: 'Nâng độ khó dần rồi mới thử ngoài đường', detail: 'Chỉ khi các bài đều êm, không chống chân và không giật ga mới thử ở đoạn đường ít xe; mệt hoặc mất tập trung thì dừng và nghỉ.' }
  ],
  warnings: [
    'Không tập trên đường có người và xe qua lại, trên mặt đường trơn, có cát, sỏi hoặc dầu; không tập khi mệt, buồn ngủ hoặc khi phanh có dấu hiệu lỏng, rít, ăn giật.',
    'Không giữ nửa côn lâu lúc đứng chờ ở đèn đỏ hay trên dốc vì côn nóng và mòn nhanh; có mùi khét, hoặc máy gào mà xe không tiến tương ứng, thì dừng đi xe và nhờ thợ kiểm tra.',
    'Không dùng phanh trước lúc tay lái đang bẻ gắt ở tốc độ chậm, không đạp hoặc bóp phanh sau giật cục đến khóa bánh, không đóng ga đột ngột rồi vặn mạnh trở lại.'
  ],
  notes: [
    'Mỗi dòng xe có cách bố trí ly hợp, cần phanh sau, hệ thống phanh kết hợp và cảm giác ga khác nhau, kể cả xe điện; hãy đối chiếu sách hướng dẫn sử dụng của xe bạn và hỏi thợ có chuyên môn khi chưa chắc.',
    'Bài chỉ trình bày nguyên tắc chung, không thay thế khóa huấn luyện lái xe có người hướng dẫn trực tiếp; vào cua ở tốc độ thông thường và phanh khẩn cấp đã có bài riêng nên không lặp lại ở đây.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần ly hợp, phanh và vị trí các cần điều khiển',
    'Tài liệu huấn luyện kỹ năng lái xe hai bánh an toàn của các cơ sở đào tạo có chuyên môn'
  ],
  related: ['vao-cua-an-toan', 'ky-thuat-lai-xe-may', 'meo-lai-xe', 'ky-thuat-phanh-khan-cap-xe-may', 'phanh-cbs-xe-may-la-gi']
};
