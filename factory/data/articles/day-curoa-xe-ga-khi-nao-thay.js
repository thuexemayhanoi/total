// AI WIKI TOTAL — S01111 (topic V2 T001105); dấu hiệu bằng mắt và cảm giác khi chạy, mốc thay theo sổ bảo hành, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'day-curoa-xe-ga-khi-nao-thay',
  title: 'Dây curoa xe ga: dấu hiệu nứt, bóng mòn và cách theo dõi theo sổ bảo hành',
  seoTitle: 'Dây curoa xe ga khi nào thay: dấu hiệu hỏng và mốc trong sổ bảo hành',
  metaDescription: 'Dây curoa xe ga khi nào thay? Dấu hiệu nứt, mặt bên bóng, mòn mép, triệu chứng giật rít khi chạy, cách theo dõi mốc trong sổ bảo hành và ứng phó khi dây đứt.',
  summary: 'Dây curoa là vòng cao su đưa lực từ động cơ ra bánh sau trên xe tay ga, nằm kín trong vỏ che nên chỉ xem được khi thợ lấy ra. Bài liệt kê dấu hiệu nhìn thấy như nứt ở chân răng, mặt bên bóng, mòn mép, mòn lệch và dính dầu, cùng triệu chứng khi chạy gồm giật, rít, hụt tốc độ và rung. Bài cũng giải thích cách đối chiếu mốc kiểm tra và mốc thay trong sổ bảo hành của nhà sản xuất, vì mốc khác nhau theo từng dòng xe, rồi nêu cách ứng phó an toàn khi dây đứt giữa đường.',
  quickAnswer: 'Không có mốc thay chung cho mọi xe: mốc kiểm tra và mốc thay dây curoa ghi trong sổ bảo hành của nhà sản xuất, tùy dòng xe. Hãy đối chiếu mốc đó với tình trạng thật: nhờ thợ cho xem dây để tìm vết nứt, mặt bên bóng, mép sờn, mòn lệch hay dính dầu, và để ý giật, rít, hụt tốc độ khi chạy. Thấy dấu hiệu rõ thì nên thay sớm hơn mốc, đừng chờ dây đứt giữa đường.',
  keyPoints: [
    'Dây curoa đưa lực từ động cơ ra bánh sau bằng ma sát ở hai mặt bên, nên khi mặt bên bóng, chai hoặc bề ngang hẹp dần, dây dễ trượt và xuống cấp nhanh hơn.',
    'Dấu hiệu nhìn thấy trên sợi dây thợ cho xem: vết nứt ở chân răng mặt trong, mặt bên bóng, mép sờn hoặc lộ sợi, mòn lệch một đoạn hay một bên, vệt dầu mỡ.',
    'Giật lúc lấy đà, rít khi tăng tốc, hụt tốc độ và rung là các triệu chứng khi chạy; chúng cũng có thể đến từ chi tiết khác, nên chỉ là lý do để nhờ thợ xem dây.',
    'Mốc kiểm tra và mốc thay nằm trong sổ bảo hành của nhà sản xuất và khác nhau theo dòng xe; hãy ghi lại lần xem hoặc thay gần nhất và kiểm tra sớm hơn mốc nếu dùng xe nặng.',
    'Dây đứt giữa đường làm xe mất lực kéo ngay: nhả ga, bóp phanh, dừng xe an toàn, không vặn ga thử, không chạy tiếp và không tự mở vỏ che.'
  ],
  category: 'garage',
  hub: 'truyen-dong',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['dây curoa', 'bộ truyền động CVT', 'pulley', 'vỏ che truyền động', 'sổ bảo hành', 'mốc bảo dưỡng định kỳ'],
  keywords: ['dây curoa xe ga khi nào thay', 'dấu hiệu dây curoa xe ga hỏng', 'dây curoa bị nứt', 'thay curoa xe tay ga theo sổ bảo hành'],
  sections: [
    P('Dây curoa làm gì trong xe tay ga: mắt xích đưa lực từ máy ra bánh sau', [
      'Muốn biết dây curoa sắp hỏng hay chưa, bạn dựa vào ba nguồn: vết nứt, mặt bên bóng và mép mòn khi thợ cho xem dây; cảm giác giật, rít, hụt tốc độ lúc chạy; và mốc bảo dưỡng trong sổ của nhà sản xuất. Để thấy vì sao những dấu hiệu ấy quan trọng, hãy hình dung phần truyền lực của xe tay ga như hai cụm pulley, một cụm ở trục máy phía trước, một cụm nối về bánh sau, còn dây curoa là vòng cao su gia cường vắt qua cả hai. Máy quay thì cụm trước kéo dây, dây kéo cụm sau, rồi lực đi tiếp qua ly hợp và bánh răng giảm tốc tới bánh xe. Thiếu sợi dây này, máy vẫn nổ nhưng bánh sau không nhận được chút lực nào.',
      'Điểm dễ hiểu nhầm là tưởng dây ăn khớp bằng răng như xích xe số. Thực ra hai mặt bên nghiêng của dây bị má pulley kẹp vào, và lực truyền đi nhờ ma sát ở đó; các răng nhỏ ở mặt trong của nhiều loại dây chỉ giúp nó uốn quanh pulley, không ăn khớp như bánh răng. Vì vậy phần quan trọng nhất của curoa là hai mặt bên: chúng phải còn nhám, còn đàn hồi và còn đủ bề ngang. Mặt bên trơn đi hay cứng lại, bề ngang hẹp dần, là dây dễ bắt đầu trượt; trượt sinh nhiệt, nhiệt làm cao su chai thêm, và vòng luẩn quẩn ấy rút ngắn dần tuổi thọ của nó. Cách CVT đổi tỷ số truyền đã có bài riêng, nên ở đây chỉ bàn về chính sợi dây.',
      'Curoa là chi tiết tiêu hao: nó mòn dần vì ma sát, già dần vì nhiệt và năm tháng, nứt dần vì vòng quay nào cũng bị uốn quanh pulley. Nó lại nằm kín trong vỏ che truyền động, và thường không có đèn hay cảm biến nào báo tình trạng của nó lên đồng hồ. Việc thay phải mở cụm truyền động và dùng dụng cụ riêng, nên thuộc về thợ; phần của bạn là biết nhìn gì và theo dõi ra sao. Ba nguồn thông tin nói trên phải đi cùng nhau: chỉ nhìn dây thì dễ bỏ sót phần cao su đã già mà mắt khó thấy, chỉ nhìn mốc thì dễ bỏ sót hỏng sớm do cách dùng, còn chỉ chờ triệu chứng thì có thể đợi tới lúc dây đứt giữa đường.'
    ]),
    P('Dấu hiệu bằng mắt: nứt, mặt bên bóng, mòn mép, mòn lệch và dính dầu', [
      'Vì nằm kín trong vỏ che, dây chỉ xem được khi thợ lấy ra, thường lúc bảo dưỡng định kỳ hoặc khi xe có triệu chứng lạ. Hãy nhờ thợ đưa dây ra chỗ sáng và chỉ từng vùng; bạn chỉ cần quan sát, vì dây và các chi tiết quanh nó có thể còn nóng sau khi chạy. Vết nứt là dấu dễ thấy nhất, thường hiện thành những đường ngang nhỏ ở chân răng mặt trong, nơi cao su bị uốn nhiều nhất. Vài đường mảnh cho thấy cao su đã lão hóa. Nứt sâu, nứt dày đặc chạy qua nhiều răng liên tiếp hoặc mẻ cả mảnh răng là giai đoạn muộn, khi dây có thể hỏng bất cứ lúc nào. Mức nứt còn chấp nhận được do thợ đối chiếu giới hạn của hãng quyết định.',
      'Hai mặt bên là nơi dây làm việc nên cần nhìn kỹ nhất. Dây còn tốt thường có mặt bên xỉn màu, hơi nhám khi nhìn nghiêng dưới đèn. Mặt bên bóng loáng như được mài, trông trơn láng, là dấu dây từng trượt nhiều và bị nhiệt làm chai; bề mặt ấy bám pulley kém nên càng dễ trượt thêm. Ở hai mép, hãy chú ý chỗ sờn xơ, rách nhỏ, lộ sợi bên trong hoặc bị vát mòn. Một dấu nữa là bề ngang: dây mòn sẽ hẹp lại và chìm sâu hơn giữa hai má pulley, nên thợ thường đo bề ngang rồi so với giới hạn trong tài liệu của hãng, hoặc đặt cạnh một sợi mới cùng loại nếu tiệm có sẵn để thấy rõ chênh lệch.',
      'Mòn lệch và dính dầu là hai dấu hiệu dễ bị bỏ sót. Mòn lệch là khi một đoạn mòn nhiều hơn phần còn lại, hoặc một mặt bên mòn hơn mặt kia; nguyên nhân có thể nằm ở chi tiết khác trong cụm như mặt pulley xước hay lệch, nên chỉ thay dây mà không tìm nguyên nhân thì sợi mới có thể mòn theo cách cũ. Dính dầu mỡ nhận ra qua vệt ướt bóng, bụi mòn vón thành bùn đen và mùi dầu; dầu có thể đến từ phớt rò hoặc mỡ bôi thừa, và dây ngấm dầu thường được khuyên thay vì dầu làm cao su trơn, mềm đi. Cuối buổi xem, hãy chụp ảnh mặt trong, hai mặt bên và mép để có mốc so sánh cho lần sau.'
    ]),
    P('Triệu chứng khi chạy: giật, rít, hụt tốc độ và rung', [
      'Dây hư không chỉ lộ ra khi xem tận mắt mà còn thể hiện qua cảm giác lái. Giật là triệu chứng dễ nhận ra nhất: lúc nhấn ga lấy đà từ đứng yên, xe chồm lên từng nhịp thay vì lăn mượt, trong khi chạy đều có thể lại êm. Một cơ chế có thể gặp là mặt bên chai hoặc dính dầu khiến dây lúc bám lúc trượt trên pulley. Rít là tiếng the thé phát ra từ vùng vỏ che truyền động ở bên hông xe, rõ nhất lúc lấy đà, tăng tốc gấp hoặc leo dốc, nghe như cao su cọ vào kim loại. Hơi ẩm sau mưa hay rửa xe cũng có thể gây rít tạm thời rồi hết khi khô; tiếng rít lặp lại giữa ngày nắng ráo mới đáng để ý.',
      'Hụt tốc độ biểu hiện ở chỗ xe tăng tốc ì hơn trước, leo dốc hay chở thêm người thấy yếu rõ, và tốc độ cuối không còn như lúc xe còn khỏe. Dây đã mòn hẹp, chìm sâu hơn giữa hai má pulley, thường làm tỷ số truyền không đạt tới mức thiết kế, cộng thêm phần lực mất đi do trượt. Rung là dấu hiệu thứ tư: xe rung hoặc đập nhịp ở một dải tốc độ nhất định, có thể do dây mòn lệch hay mẻ răng. Cả bốn triệu chứng cần được so với chính chiếc xe của bạn: xe vốn êm mà nay bắt đầu giật mới là thay đổi đáng chú ý, còn đem so với xe của người khác thì không cho biết gì.',
      'Điều cần nhớ là các triệu chứng này không dành riêng cho dây curoa. Những chi tiết khác trong cùng cụm truyền động, và cả đánh lửa hay nhiên liệu, đều có thể làm xe giật hoặc yếu, nên chúng chỉ là lý do để nhờ thợ xem dây chứ không thay được chẩn đoán. Ngược lại, dây có thể xuống cấp âm thầm tới lúc đứt mà chưa gây triệu chứng nào, nên không thấy triệu chứng chưa chắc là dây ổn; vì thế vẫn cần xem dây định kỳ. Hãy ghi lại tình huống: xe nguội hay nóng, lấy đà hay đang chạy đều, có chở người không, sau mưa hay lúc khô. Gặp rít to kéo dài, mùi cao su khét hoặc lực kéo mất từng đợt thì dừng đi xe và đưa xe đi kiểm tra.'
    ]),
    P('Đối chiếu mốc thay trong sổ bảo hành của nhà sản xuất', [
      'Căn cứ đáng tin nhất để quyết định thời điểm thay là bảng bảo dưỡng định kỳ trong sổ bảo hành hoặc sổ hướng dẫn của đúng dòng xe bạn đi. Hãy tìm dòng ghi dây curoa, có sổ gọi là dây đai truyền động, rồi đọc kỹ xem nhà sản xuất ghi mốc kiểm tra, mốc thay hay cả hai. Có dòng xe chỉ yêu cầu kiểm tra theo mốc rồi thay khi dây mòn quá giới hạn, có dòng ghi luôn mốc thay cố định. Cách tính mốc cũng khác nhau: theo quãng đường trên công tơ mét, theo thời gian, hoặc cả hai, và ở một số sổ thì mốc nào tới trước sẽ được áp dụng. Vì mỗi sổ mỗi khác, bài không nêu con số nào và bạn cũng đừng mượn mốc của xe khác.',
      'Để theo dõi, hãy biến dòng trong sổ thành ba thông tin cụ thể. Thứ nhất là mốc của hãng dành cho dây, ghi vào điện thoại cùng tên dòng xe. Thứ hai là lần gần nhất dây được xem hoặc thay: nhờ tiệm ghi vào phần lịch sử bảo dưỡng trong sổ kèm ngày và số công tơ mét, rồi giữ lại hóa đơn. Thứ ba là khoảng còn lại tới mốc kế tiếp, cùng một lời nhắc đặt trước mốc đủ sớm để kịp hẹn lịch. Mỗi lần bảo dưỡng, hãy hỏi thẳng dây đã được kiểm tra chưa, kết quả ra sao, và xin xem dây. Với xe mua lại mà sổ không cho biết dây đã từng thay hay chưa, hãy coi như chưa biết và nhờ thợ xem dây trước khi đặt mốc mới.',
      'Mốc trong sổ thường tính cho cách dùng thông thường, nên dùng nặng làm dây xuống cấp sớm hơn: chở nặng thường xuyên, leo dốc dài, kẹt xe nhiều, trời nóng, bụi bẩn, lội nước hoặc quen vặn ga gắt. Xe dùng như vậy nên nhờ thợ xem dây sớm hơn mốc; sổ cũng có thể ghi chú riêng cho điều kiện nặng. Khi tình trạng thật và mốc lệch nhau, hãy chọn phía an toàn hơn: dây đã nứt hay bóng thì bàn với thợ để thay sớm dù chưa tới mốc; tới mốc thay mà dây trông vẫn đẹp thì nên làm theo sổ, hoặc hỏi thợ vì sao có thể hoãn, bởi cao su có thể già đi mà mắt khó thấy. Dây có thuộc diện bảo hành hay không tùy hãng, nên hãy đọc điều khoản trong sổ.'
    ]),
    P('Dây đứt giữa đường: cách ứng phó an toàn', [
      'Dây curoa đứt hoặc tuột khỏi pulley khiến xe mất lực kéo ngay lập tức. Máy vẫn nổ, nhưng bánh sau không còn nhận lực, nên vặn ga chỉ làm máy gào không tải mà xe không tiến thêm. Bạn có thể nghe tiếng bịch, tiếng quật hoặc tiếng lạo xạo từ vỏ che truyền động, rồi xe trôi theo đà và chậm dần. Phanh vẫn hoạt động bình thường vì không phụ thuộc vào dây, nhưng phanh động cơ không còn, và trên dốc xe có thể trôi lùi nếu bạn nhả phanh. Nguy hiểm nằm ở chỗ chuyện này có thể xảy ra giữa ngã tư hay làn đường đông, khi các xe phía sau chưa kịp nhận ra bạn đang chậm lại.',
      'Việc đầu tiên là nhả hẳn tay ga và giữ chắc tay lái, đừng vặn ga thử xem xe còn đi được không. Nhìn gương, bật xi nhan và đèn báo nguy hiểm nếu xe có, rồi bóp cả hai phanh đều tay để giảm tốc dần, chỉ bóp gấp khi thật cần, vì xe phía sau cần thời gian phản ứng. Tận dụng đà để lăn vào lề, chọn chỗ thoáng, xa khúc cua và làn xe chạy, tránh dừng trên dốc nếu còn chỗ khác. Tóm lại: nhả ga, bóp phanh, dừng xe an toàn. Xe đã dừng hẳn thì dựng chân chống rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Người ngồi sau nên xuống và đứng ở chỗ an toàn.',
      'Sau khi dừng, đừng cố chạy tiếp dù chỉ một quãng ngắn và đừng tự mở vỏ che để xem: mảnh dây vỡ có thể còn kẹt trong cụm, nhiều chi tiết quanh đó vẫn nóng, và vặn ga lúc này có thể gây thêm hư hại. Hãy dắt xe tới nơi an toàn hoặc nhờ phương tiện chở xe tới tiệm, tránh kiểu kéo bằng dây hay đẩy bằng chân từ xe đang chạy vì rất dễ mất lái. Tới thợ, hãy nói rõ xe vừa mất lực đột ngột và nhờ kiểm tra cả cụm truyền động chứ không chỉ thay dây, bởi mảnh dây vỡ có thể làm xước pulley hay hỏng vỏ che. Hỏi thêm nguyên nhân khiến dây hỏng để tránh lặp lại, rồi ghi vào sổ.'
    ])
  ],
  checklist: [
    'Tìm dòng dây curoa trong bảng bảo dưỡng của sổ, ghi mốc kiểm tra và mốc thay của đúng dòng xe vào điện thoại.',
    'Nhờ tiệm ghi ngày và số công tơ mét của lần kiểm tra hoặc thay gần nhất vào sổ, rồi giữ hóa đơn.',
    'Mỗi kỳ bảo dưỡng, nhờ thợ cho xem mặt trong, hai mặt bên và mép dây; chụp ảnh để so với lần sau.',
    'Ghi lại triệu chứng giật, rít, hụt tốc độ, rung: xảy ra lúc nào, xe nguội hay nóng, có chở người không, sau mưa hay lúc khô.',
    'Nhớ sẵn cách ứng phó khi dây đứt: nhả ga, bóp phanh, dừng xe an toàn, không vặn ga thử, không chạy tiếp.'
  ],
  steps: [
    { title: 'Tìm mốc của hãng trong sổ', detail: 'Mở bảng bảo dưỡng định kỳ của đúng dòng xe, tìm dòng dây curoa hoặc dây đai truyền động, ghi lại mốc kiểm tra, mốc thay và cách tính mốc theo quãng đường, thời gian hay cả hai.' },
    { title: 'Nhờ thợ cho xem dây', detail: 'Mỗi lần bảo dưỡng, nhờ thợ đưa dây ra chỗ sáng và chỉ các vùng nứt, mặt bên bóng, mép sờn, mòn lệch hoặc dính dầu; bạn chỉ quan sát và chụp ảnh để so lần sau.' },
    { title: 'Đối chiếu với cảm giác khi chạy', detail: 'So tình trạng dây với mốc trong sổ và với các triệu chứng giật, rít, hụt tốc độ, rung đã ghi lại; dùng xe nặng hoặc có dấu hiệu rõ thì kiểm tra sớm hơn mốc.' },
    { title: 'Quyết định cùng thợ và ghi lại', detail: 'Thay hoặc tiếp tục theo dõi theo khuyến nghị của thợ dựa trên giới hạn của hãng, dùng dây đúng loại cho dòng xe, rồi nhờ ghi ngày và số công tơ mét vào sổ và đặt nhắc cho mốc kế tiếp.' }
  ],
  warnings: [
    'Dây đứt giữa đường làm xe mất lực kéo ngay: nhả ga, bóp phanh, dừng xe an toàn; không vặn ga để thử và không chạy tiếp dù chỉ một quãng ngắn.',
    'Không tự mở vỏ che truyền động để xem dây: bên trong có chi tiết quay và có thể còn nóng; để thợ thao tác, bạn chỉ quan sát.',
    'Rít to kéo dài, mùi cao su khét, giật nặng hoặc lực kéo mất từng đợt là lý do dừng đi xe và đưa xe đi kiểm tra, nhất là khi chở người, leo dốc hoặc chạy đường nhanh.'
  ],
  notes: [
    'Các dấu hiệu trong bài chỉ là manh mối để trao đổi với thợ; giật, rít, hụt tốc độ hay rung cũng có thể đến từ chi tiết khác trong cụm truyền động hoặc từ hệ thống khác, và chỉ thợ có chuyên môn mới kết luận được.',
    'Mốc kiểm tra, mốc thay, loại dây và giới hạn mòn khác nhau tùy dòng xe và đời xe nên bài không nêu con số nào; hãy đối chiếu sổ bảo hành và tài liệu của nhà sản xuất xe của bạn.'
  ],
  references: [
    'Sổ bảo hành và sổ hướng dẫn sử dụng của nhà sản xuất xe, phần bảng bảo dưỡng định kỳ của đúng dòng xe',
    'Tài liệu kỹ thuật của nhà sản xuất về cụm truyền động CVT của đúng dòng xe, phần kiểm tra và giới hạn mòn của dây curoa'
  ],
  related: ['cvt-la-gi-tren-xe-ga', 'cvt-la-gi', 'bao-duong-xe-ga', 'dau-hop-so', 'xe-tay-ga-ro-ga-khong-len-toc-do']
};
