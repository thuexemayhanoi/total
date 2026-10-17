// AI WIKI TOTAL — S01795; xem xe máy cũ nằm lâu, nhận biết bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'di-xem-xe-may-cu-da-nam-lau-khong-chay-hoi-gi-nhin-luc-no-may-ra-sao-va-khi-nao-nen-hen-lai',
  title: 'Đi xem chiếc xe máy cũ đã nằm lâu không chạy: hỏi gì, nhìn lúc nổ máy ra sao và khi nào nên hẹn lại',
  seoTitle: 'Xem xe máy cũ nằm lâu không chạy: hỏi gì, nhìn gì, khi nào hẹn lại',
  metaDescription: 'Mua xe máy cũ để lâu không chạy: hỏi người bán cất xe ở đâu, nhìn lốp, dây, ống và vệt rò trước khi nổ máy, chạy thử ngắn và biết lúc nào nên hẹn lại.',
  summary: 'Bài dành cho người đi xem xe máy cũ mà người bán nói là ít đi hoặc để trong nhà lâu không chạy. Nội dung giải thích vì sao ít đi chưa chắc đã tốt, những hư hỏng có thể gặp ở xe nằm lâu như lốp, ắc quy, xăng cũ, gioăng, ống cao su, gỉ và dấu vết chuột. Bài gợi ý câu hỏi về nơi cất và việc chủ xe đã làm trước khi bán, điều nên nhìn trước khi nổ máy, cách quan sát lúc nổ máy và chạy thử ngắn, cùng lúc nên hẹn lại hoặc nhờ thợ xem.',
  quickAnswer: 'Xe ít đi chưa chắc đã tốt, vì xe nằm lâu có thể bị lốp chai hoặc biến dạng, ắc quy yếu, xăng cũ, gioăng và ống cao su khô, gỉ ở chỗ ẩm hay dấu vết chuột, tùy cách cất. Hãy hỏi xe nằm ở đâu, nhìn kỹ trước khi nổ máy, chỉ chạy thử ngắn khi người bán đồng ý. Có rò rỉ, dây bị cắn hoặc xe chưa ai xem thì nên hẹn lại và nhờ thợ xem trước.',
  keyPoints: [
    'Ít đi không đồng nghĩa với còn mới: cao su, xăng, dầu nhớt và ắc quy vẫn đổi tính chất khi xe đứng yên, mức độ tùy cách cất và việc có ai chăm sóc hay không.',
    'Hỏi xe nằm ở đâu, trong nhà hay ngoài trời, có che không, có từng nổ máy không và trước khi bán đã làm gì, để biết nên nhìn kỹ chỗ nào.',
    'Nhìn trước khi nổ máy: vết nứt hông lốp, gỉ ở đĩa phanh và xích, ống cao su cứng nứt, dây điện bị cắn, dấu chuột làm tổ và vệt dầu hay xăng dưới gầm.',
    'Lúc nổ máy chú ý tiếng đề, khói, mùi, tiếng lạ và đèn báo; chỉ chạy thử ngắn khi người bán đồng ý, ở đoạn vắng, có đội mũ bảo hiểm.',
    'Xe mới nổ được sau thời gian dài, chưa ai xem, có rò rỉ hoặc dây bị cắn thì nên hẹn lại và nhờ thợ xem; mua rồi cũng nên cho thợ xem tổng thể trước khi đi hằng ngày.'
  ],
  category: 'guide',
  hub: 'mua-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['xe máy cũ nằm lâu', 'ắc quy tự xả', 'xăng để lâu', 'gioăng và ống cao su', 'gỉ đĩa phanh và xích', 'dấu vết chuột cắn dây'],
  keywords: ['mua xe máy cũ để lâu không chạy', 'xe máy cũ nằm kho lâu', 'xe cũ ít đi có tốt không', 'xem xe cũ để lâu ngày'],
  sections: [
    P('Vì sao ít đi chưa chắc đã là tốt', [
      'Câu “xe ít đi nên còn mới” nghe thuyết phục vì người ta hay đánh đồng ít chạy với ít hao mòn. Thực tế xe máy không chỉ mòn vì chạy mà còn già đi vì đứng yên. Cao su, nhựa, dầu nhớt, xăng và ắc quy đều đổi tính chất theo thời gian dù không ai động tới, và nhiều chi tiết quen được vận hành đều đặn hơn là nằm im một chỗ. Chiếc xe đi thường xuyên, được chăm đều đặn đôi khi còn khỏe hơn chiếc nằm kho thật lâu. Vì thế “ít đi” chỉ là một dữ kiện trung tính, chưa phải lời bảo đảm cho chất lượng. Điều đáng hỏi là xe nằm trong hoàn cảnh nào và có ai chăm sóc trong lúc nằm hay không, bởi mức xuống cấp tùy cách cất rất nhiều.',
      'Những vấn đề riêng của xe nằm lâu thường xoay quanh vài nhóm chi tiết. Lốp có thể chai cứng, nứt hông hoặc biến dạng ở chỗ chạm đất nên chạy lên bị rung. Ắc quy tự xả dần theo thời gian, nên có thể yếu hẳn hoặc hỏng, và đây là lý do phổ biến khiến xe đề không nổi. Xăng để lâu trong bình có thể biến chất; xe dùng chế hòa khí có thể bị cặn xăng cũ bám làm nghẹt đường cấp, còn xe phun xăng thì xăng cũ có thể khiến bơm và kim phun làm việc kém đi, tùy xe. Gioăng và ống cao su khô cứng, nứt dần, rồi có thể rò dầu hoặc xăng khi máy hoạt động trở lại. Tất cả đều chỉ là khả năng, không phải điều chắc chắn xảy ra với mọi chiếc xe.',
      'Nhóm còn lại đến từ nơi cất. Chỗ ẩm khiến đĩa phanh, xích, ốc vít, ống xả và những góc khung đọng nước bị gỉ, nhẹ thì chỉ phủ lớp bề mặt, nặng thì ăn sâu vào kim loại. Chuột và côn trùng thích những nơi yên tĩnh như cốp, gầm yên hay khe yếm, nơi chúng có thể làm tổ, tha vật liệu vào, thậm chí cắn dây điện và ống dẫn. Ngược lại, xe cất khô ráo, được che kín và có người chăm sóc vẫn có thể ở tình trạng khá tốt sau thời gian dài. Cách cất xe cùng việc đưa xe trở lại hoạt động đã có bài riêng về bảo quản xe máy lâu ngày không dùng, còn phần lốp có bài riêng về xe để lâu bị bẹp lốp; bài này chỉ đứng ở góc nhìn người đi xem xe.'
    ]),
    P('Hỏi gì về khoảng thời gian xe nằm', [
      'Hãy mở đầu bằng những câu hỏi bình thường như đang trò chuyện, không dò xét. Xe bắt đầu nằm từ lúc nào và vì sao lại nằm: chủ đi xa, chuyển sang xe khác, ít có nhu cầu hay xe có trục trặc nên bỏ đó? Nằm vì ít dùng khác hẳn nằm vì hỏng chưa sửa. Lần cuối xe chạy là lúc nào, lúc ấy xe có ổn không, có tiếng lạ, đèn báo hay chuyện khó nổ nào khiến chủ thôi không đi nữa? Cứ để người bán kể theo cách của họ, rồi hỏi thêm cho rõ từng chỗ còn mơ hồ. Câu trả lời lúng túng chưa có nghĩa là xe xấu, nhưng nên được ghi nhớ để đối chiếu với những gì bạn nhìn thấy ở bước sau.',
      'Câu hỏi tiếp theo là về nơi cất, vì đây là yếu tố quyết định xe xuống cấp nhiều hay ít. Xe để trong nhà hay ngoài trời, có mái che hay phủ bạt, nền khô hay ẩm, gần chỗ đọng nước không, có từng thấy chuột hoặc côn trùng không? Xe được kê cho bánh lơ lửng hay để lốp chạm đất suốt thời gian nằm? Có ai nổ máy thỉnh thoảng không, nổ xong có cho chạy hay chỉ nổ tại chỗ rồi tắt máy? Mục đích của những câu hỏi này không phải để chấm đúng sai cách cất xe của người ta, mà để bạn hình dung xe đã sống trong môi trường nào, từ đó biết nên nhìn kỹ chỗ nào trước. Xe ngoài trời ẩm thì chú ý gỉ; xe cất nơi kín tối thì chú ý dấu vết chuột.',
      'Sau cùng, hỏi xem trước khi rao bán chủ xe đã làm gì. Có thay nhớt không, có sạc hay thay ắc quy không, xăng cũ trong bình đã được xử lý ra sao, có thay lốp hay vệ sinh gì không, và ai làm: tự làm hay nhờ thợ? Nếu còn hóa đơn hoặc ghi chép thì xin xem, không có thì cũng đừng làm căng. Việc làm lại trước khi bán là điều tốt nếu làm đúng cách, nhưng cũng nên hiểu rằng xe nổ ngon sau khi vừa sạc hoặc thay ắc quy chỉ cho biết ắc quy đã ổn, chưa nói được gì về những phần còn lại. Hãy ghi từng câu trả lời bằng ghi chú ngắn trong điện thoại. Người bán không nhớ hoặc không biết cũng là một thông tin, và nó khiến bước nhìn xe kỹ phía sau càng cần thiết.'
    ]),
    P('Nhìn gì trước khi nổ máy', [
      'Hãy nhìn xe trước khi nổ máy, khi mọi thứ còn nguyên trạng và chưa bị khói, rung hay tiếng ồn che đi. Bạn chỉ cần đôi mắt, đôi tay sạch và đèn pin của điện thoại; việc quan sát không đòi hỏi tháo chi tiết nào, và cũng không nên tự tháo đồ của xe người khác. Bắt đầu từ lốp vì đây là chỗ xe nằm lâu hay lộ bệnh nhất. Hông lốp có những vết nứt nhỏ chằng chịt, bề mặt cao su chai bóng và cứng, chỗ tiếp đất có vẻ bẹp hoặc lệch, van hở hay mất nắp van đều đáng ghi lại. Dắt xe đi chậm vài bước rồi để ý xem bánh quay có nhịp “cộp cộp” đều đặn mỗi vòng không. Lốp đã nứt hông thì nên nhờ thợ nhận xét, cách giữ lốp khi cất xe có trong bài riêng về xe để lâu bị bẹp lốp.',
      'Tiếp theo nhìn những chỗ dễ gỉ và dễ kẹt. Đĩa phanh của xe nằm lâu thường có lớp gỉ mỏng trên mặt, phần nhiều chỉ là bề mặt, nhưng đĩa rỗ, có gờ hoặc gỉ ăn sâu ở mép thì nên để thợ xem. Với xe dùng xích, hãy nhìn xích có khô và ngả màu nâu đỏ, các mắt xích có cứng khớp không; tùy loại xe, có loại truyền động kín nên không nhìn được bằng mắt. Bóp thử tay phanh hoặc chân phanh khi xe đứng yên, xem có kẹt, rít hay trả về chậm không, cảm giác cứng mềm có khác lạ không. Vặn thử tay ga xem có trả về dứt khoát. Cơ cấu mỗi xe một khác, nên hãy đối chiếu sách hướng dẫn của xe. Việc làm sạch, bôi trơn hay chỉnh phanh để sau, do thợ làm.',
      'Cuối cùng là dây, ống và dấu vết sinh vật. Ống cao su lộ ra ngoài mà có vết nứt, phồng hoặc cứng đơ như nhựa là dấu hiệu cao su đã lão hóa. Dây điện có chỗ trầy hở lõi, vỏ bị gặm thành rãnh, hoặc quanh đó có mảnh vụn, phân chuột, rơm cỏ, bông gòn kéo vào làm tổ ở cốp, hộc đồ, gầm yên và khe yếm là dấu vết chuột đã vào xe. Mở cốp nhìn bằng mắt là đủ, đừng thò tay vào chỗ tối. Sau đó cúi nhìn gầm xe và nền nơi xe đỗ: vệt dầu, vệt xăng hoặc nước loang, ẩm ướt ở các mối nối, hay mùi xăng bốc lên từ xe đang đứng yên đều là dấu hiệu rò rỉ, tùy xe mà chất lỏng khác nhau. Hãy chụp ảnh lại trước khi nổ máy để sau còn so sánh.'
    ]),
    P('Lúc nổ máy và chạy thử ngắn', [
      'Hãy xin người bán nổ máy ngay trước mặt bạn, tốt nhất lúc máy còn nguội, vì xe nằm lâu lộ chuyện khó nổ rõ nhất ở lần khởi động đầu. Nếu bạn đến mà máy đã ấm vì chủ nổ trước, cứ hỏi nổ từ lúc nào và đã làm gì để nổ được. Nghe tiếng đề: quay khỏe hay uể oải, nổ ngay hay phải đề nhiều lần mới bắt. Sau khi nổ, nghe tiếng máy có đều không, vòng tua lúc đứng yên ổn định hay lên xuống, đèn báo trên đồng hồ sáng lúc bật khóa rồi tắt hay sáng mãi; ý nghĩa từng đèn tùy xe nên đối chiếu sách hướng dẫn. Nếu xe sạch bóng bất thường hoặc vừa được làm lại ngay trước buổi xem, hãy hỏi đã làm những gì, vì lớp sạch có thể che mất vệt rò hoặc dấu gỉ.',
      'Trong lúc máy chạy, hãy quan sát bằng cả mắt, tai và mũi. Khói lạ ở ống xả, mùi khét, mùi xăng sống, tiếng gõ, tiếng rít hay tiếng lạch cạch bất thường đều cần ghi lại. Xe nằm lâu có thể phả ra chút khói mỏng hay có tiếng hơi lạ lúc mới nổ rồi êm dần, nhưng khói đậm, kéo dài hoặc tiếng lạ không mất đi thì đừng bỏ qua. Nhìn xuống gầm xem có giọt dầu hay xăng nhỏ ra khi máy chạy một lúc không, và nghe xem có tiếng xì hơi ở chỗ nào. Thấy khói đặc, mùi khét hoặc xăng rò thì bảo người bán tắt máy rồi dừng buổi xem, đứng tránh xa vật nóng và nguồn lửa. Đừng tự tăng ga thật mạnh cho máy kêu thử, vì máy nằm lâu có thể chưa chịu được.',
      'Chạy thử chỉ nên làm khi người bán đồng ý, ở đoạn đường vắng, và bạn phải đội mũ bảo hiểm. Trước khi lăn bánh, bóp phanh khi xe còn đứng yên; nếu lốp đã nứt rõ hoặc phanh có vẻ không chắc thì thôi, không chạy thử. Đi thật chậm một vòng ngắn rồi quay lại. Trong lúc đi, hãy cảm nhận xe có rung khi chạy chậm không, vì lốp biến dạng có thể gây rung theo nhịp đều; tay lái có nặng, lệch hay đảo không; ga lên mượt hay giật cục; bóp phanh nhẹ thì xe chậm lại đều, không kêu rít, không lệch sang một bên. Có điều gì lạ thì nhả ga, bóp phanh, dừng xe an toàn rồi tắt máy. Về đến nơi, để máy nghỉ một lúc rồi đề lại xem có khó nổ hơn không.'
    ]),
    P('Khi nào nên hẹn lại hoặc nhờ thợ xem trước, và mua rồi thì làm gì trước khi đi hằng ngày', [
      'Có những tình huống nên bình tĩnh hẹn lại thay vì chốt ngay. Xe chỉ vừa mới nổ được sau thời gian dài mà chưa ai xem xét, người bán chưa rõ tình trạng thật bên trong. Bạn thấy dấu hiệu rò rỉ dưới gầm, dây điện bị cắn, lốp nứt hông, phanh chưa chắc, hoặc xe nổ được nhưng tiếng và khói vẫn lạ. Hẹn lại không phải là từ chối, mà là cho người bán cơ hội đưa xe cho thợ kiểm tra và xử lý, đồng thời cho bạn thời gian nhờ người có chuyên môn xem. Đừng để lời giục kiểu có người khác đang hỏi làm bạn vội quyết. Chuyện giá cả là việc bàn riêng, nên để sau khi tình trạng xe đã rõ, thay vì lấy giá làm lý do bỏ qua dấu hiệu bất thường.',
      'Nhờ thợ xem trước là cách hiệu quả nhất để thay phỏng đoán bằng nhận xét có cơ sở. Hãy chọn thợ có chuyên môn mà bạn tin cậy, tốt nhất là người không có lợi ích gì với việc bán xe, rồi xin người bán cho phép đưa xe tới hoặc mời thợ đến xem. Những phần thợ kiểm được bằng dụng cụ mà người mua khó tự làm gồm hệ thống nhiên liệu, ắc quy và hệ thống sạc, dây điện, phanh, độ kín của gioăng và ống, nhớt và tình trạng bên trong máy, tùy xe. Hãy xin nhận xét bằng lời cụ thể, nói rõ cái nào cần làm ngay, cái nào chỉ cần theo dõi. Người bán từ chối mọi cách cho xem kỹ là điều nên cân nhắc. Cách hỏi khi người bán nói xe chỉ cần sửa nhẹ đã có bài riêng; cách nhận biết xe đã bổ máy cũng vậy.',
      'Giả sử bạn quyết định mua, đừng vội cho xe đi hằng ngày ngay. Một chiếc xe nằm lâu nên được đưa thợ xem tổng thể trước, vì nhiều hư hỏng do nằm lâu có thể không lộ rõ cho tới lúc xe chạy đường dài hoặc phải phanh gấp. Việc cần làm và thứ tự thế nào tùy xe, nên hãy đối chiếu sách hướng dẫn của nhà sản xuất và nghe thợ; thường gồm nhớt, lọc, ắc quy, nhiên liệu, phanh, lốp, xích hoặc bộ truyền động, dây và ống. Trong giai đoạn đầu, cho xe chạy gần, đi chậm, để ý tiếng lạ, mùi lạ, cảm giác phanh và tay lái; có gì bất thường thì dừng, ghi lại rồi quay lại thợ. Phần đưa xe trở lại hoạt động sau thời gian đỗ đã có trong bài về bảo quản xe máy lâu ngày không dùng, nên đọc trước khi đi hằng ngày.'
    ])
  ],
  checklist: [
    'Hỏi xe bắt đầu nằm từ lúc nào, vì sao nằm, nằm trong nhà hay ngoài trời, có che chắn và có từng nổ máy không.',
    'Hỏi trước khi bán chủ xe đã làm gì như thay nhớt, sạc hoặc thay ắc quy, xử lý xăng cũ, và xin hóa đơn hay ghi chép nếu còn.',
    'Nhìn trước khi nổ máy: hông lốp, đĩa phanh, xích, ống cao su, dây điện, dấu chuột, vệt dầu hoặc xăng dưới gầm; chụp ảnh lại.',
    'Quan sát lúc nổ máy nguội: tiếng đề, khói, mùi, tiếng lạ, đèn báo, rồi chạy thử ngắn nếu người bán đồng ý và hoàn cảnh an toàn.',
    'Có rò rỉ, dây bị cắn, lốp nứt hoặc phanh chưa chắc thì hẹn lại và nhờ thợ xem trước khi quyết.'
  ],
  steps: [
    { title: 'Hỏi về thời gian nằm và cách cất', detail: 'Xe nằm từ lúc nào, vì sao nằm, để ở đâu, có che không, có nổ máy thỉnh thoảng không và trước khi bán đã làm gì; ghi lại từng câu trả lời.' },
    { title: 'Nhìn kỹ khi máy chưa nổ', detail: 'Xem hông lốp, đĩa phanh, xích, ống cao su, dây điện, dấu vết chuột và vệt dầu hay xăng dưới gầm; chỉ quan sát, không tự tháo gì.' },
    { title: 'Nổ máy nguội và chạy thử ngắn nếu được phép', detail: 'Nghe tiếng đề, nhìn khói, đèn báo, ngửi mùi; chỉ chạy thử khi người bán đồng ý, ở đoạn vắng, có đội mũ bảo hiểm, đi chậm một vòng ngắn.' },
    { title: 'Quyết định hẹn lại hoặc nhờ thợ xem', detail: 'Gặp dấu hiệu bất thường thì hẹn lại; nhờ thợ có chuyên môn xem bằng dụng cụ và xin nhận xét cụ thể trước khi chốt, mua xong cũng cho thợ xem tổng thể trước khi đi hằng ngày.' }
  ],
  warnings: [
    'Mùi xăng nồng, xăng nhỏ giọt, khói đặc hoặc mùi khét lúc nổ máy là lý do dừng buổi xem: tắt máy, đứng tránh xa vật nóng và nguồn lửa, không nổ thêm.',
    'Chỉ chạy thử khi người bán đồng ý, ở đoạn vắng, có đội mũ bảo hiểm; lốp nứt rõ hoặc phanh có vẻ không chắc thì không chạy thử. Có điều lạ khi đi thì nhả ga, bóp phanh, dừng xe an toàn rồi tắt máy.',
    'Không tự tháo, tự xịt hay tự chỉnh phanh, xích, dây điện hoặc đường xăng của xe người khác; các việc đó thuộc về thợ có chuyên môn.'
  ],
  notes: [
    'Mức độ xuống cấp của xe nằm lâu rất khác nhau tùy cách cất và tùy xe; những dấu hiệu trong bài chỉ là manh mối để hỏi và để thợ kiểm tra, không thay cho chẩn đoán bằng dụng cụ.',
    'Vị trí chi tiết, ý nghĩa đèn báo và cách kiểm tra khác nhau giữa các xe; hãy đối chiếu sách hướng dẫn của đúng xe đang xem và hỏi thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần đèn báo, khởi động và kiểm tra trước khi đi',
    'Tài liệu bảo dưỡng của nhà sản xuất về lốp, phanh, ắc quy và hệ thống nhiên liệu của đúng dòng xe'
  ],
  related: ['bao-quan-xe-may-lau-ngay-khong-dung', 'lop-xe-may-de-lau-khong-chay-bi-bep', 'nguoi-ban-noi-xe-chi-can-sua-nhe-hoi-gi-xem-loi-o-dau-va-khi-nao-nho-tho-nhin-truoc-khi-quyet', 'mua-xe-may-cu-nhung-diem-can-kiem-tra', 'xe-may-cu-da-bo-may-hay-con-zin-dau-hieu-nhan-biet']
};
