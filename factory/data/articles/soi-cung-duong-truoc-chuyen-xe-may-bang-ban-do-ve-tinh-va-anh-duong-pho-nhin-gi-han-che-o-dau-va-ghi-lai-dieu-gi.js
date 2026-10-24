// AI WIKI TOTAL — S02100 (topic V2); không nêu số liệu, giá hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'soi-cung-duong-truoc-chuyen-xe-may-bang-ban-do-ve-tinh-va-anh-duong-pho-nhin-gi-han-che-o-dau-va-ghi-lai-dieu-gi',
  title: 'Soi cung đường trước chuyến xe máy bằng bản đồ vệ tinh và ảnh đường phố: nhìn gì, hạn chế ở đâu và ghi lại điều gì',
  seoTitle: 'Soi cung đường xe máy bằng ảnh vệ tinh và ảnh đường phố: nhìn gì',
  metaDescription: 'Dùng ảnh vệ tinh và ảnh đường phố để đọc cung đường như người lái xe máy: nhìn độ rộng, cua, cầu, chỗ vắng, giới hạn của ảnh và điểm cần ghi trước chuyến.',
  summary: 'Trước chuyến đi xa, nhiều người chỉ xem bản đồ để biết đường nào ngắn nhất, rồi đến nơi mới gặp đoạn hẹp, khúc cua liên tiếp, cầu nhỏ hay đoạn vắng không có chỗ nghỉ mà lẽ ra đã nhìn thấy trước trên ảnh. Bài này hướng dẫn dùng lớp ảnh vệ tinh và ảnh đường phố để đọc cung đường như người lái xe máy: nhìn độ rộng mặt đường và lề, mật độ nhà dọc tuyến, khúc cua, chỗ thắt hẹp, cầu nhỏ, ngã rẽ, bóng cây và nơi có thể dừng nghỉ. Bài cũng nói rõ giới hạn của ảnh và cách ghi điểm cần chậm, điểm nghỉ, điểm lui để đối chiếu với người địa phương.',
  quickAnswer: 'Đường ngắn nhất trên bản đồ chưa chắc là cung đường dễ đi bằng xe máy. Hãy dùng ảnh vệ tinh để nhìn bức tranh lớn như độ rộng đường, nhà dọc tuyến để đoán đoạn đông hay vắng, khúc cua liên tiếp, chỗ sát vực hay sát nước; dùng ảnh đường phố để nhìn mặt đường, lề, cầu nhỏ, ngã rẽ và bóng cây. Nhớ rằng ảnh có thể cũ, bị che và không cho thấy ổ gà, sạt lở hay công trình mới, nên chỉ dùng để đặt câu hỏi chứ không để kết luận. Hãy đánh dấu ba loại điểm: cần chậm, cần nghỉ và cần lui, rồi hỏi người địa phương về hiện trạng mặt đường trước khi chốt kế hoạch.',
  keyPoints: [
    'Bản đồ đường nét tối ưu cho đường ngắn hay nhanh, còn người đi xe máy cần đường ít mệt và ít bất ngờ; ảnh vệ tinh và ảnh đường phố giúp thấy tính chất từng đoạn thay vì chỉ thấy một nét mảnh.',
    'Ảnh vệ tinh cho thấy độ rộng đường và lề, mật độ nhà dọc tuyến, khúc cua liên tiếp, đường sát vực hay sát nước và những đoạn dài vắng; ảnh đường phố cho thấy mặt đường, lề, cầu nhỏ, ngã rẽ, bóng cây và biển hiệu.',
    'Ảnh có thể cũ, bị mây hay tán cây che, không cho thấy ổ gà, sạt lở, bùn, nước tràn hay công trình mới, độ dốc cũng bị dẹt đi; mùa chụp có thể khác mùa bạn đi.',
    'Ghi lại ba loại điểm: điểm cần chậm như cua gập, cầu hẹp, ngã rẽ khuất; điểm nghỉ như quán, bãi rộng, chỗ đổ xăng hay sạc; điểm lui là chỗ quay đầu được trước một đoạn khó.',
    'Việc tự làm là đánh dấu các điểm ấy trên bản đồ và lưu lại; điều cần hỏi thêm là hiện trạng mặt đường, và khi lời người địa phương khác với ảnh thì tin người địa phương.'
  ],
  category: 'ride',
  hub: 'cung-duong',
  date: '2026-10-24',
  updated: '2026-10-24',
  entities: ['ảnh vệ tinh', 'ảnh đường phố', 'độ rộng mặt đường và lề', 'khúc cua liên tiếp', 'cầu nhỏ và ngã rẽ khuất', 'mật độ nhà dọc tuyến', 'điểm cần chậm', 'điểm nghỉ và điểm lui', 'hiện trạng mặt đường'],
  keywords: ['xem cung đường bằng ảnh vệ tinh', 'ảnh đường phố trước chuyến đi xe máy', 'đọc cung đường trước khi đi phượt', 'bản đồ vệ tinh có đủ tin không', 'chuẩn bị tuyến đường xe máy'],
  sections: [
    P('Vì sao đường ngắn nhất trên bản đồ chưa chắc là cung đường dễ đi bằng xe máy', [
      'Bản đồ trên điện thoại được thiết kế để trả lời một câu hỏi: đi từ chỗ này đến chỗ kia nhanh nhất hoặc ngắn nhất bằng cách nào. Câu trả lời ấy hợp lý với nhiều người, nhưng người đi xe máy đường dài thường cần trả lời một câu khác: đường nào đi được an toàn, ít mệt và ít bất ngờ nhất. Hai câu hỏi này không luôn cho cùng một đáp án, và nhiều người chỉ nhận ra khi đã ngồi trên một đoạn hẹp, nhiều cua hay không có chỗ nghỉ mà nét đường trên bản đồ không hề cảnh báo.',
      'Xe máy nhạy với những thứ mà ô tô gần như bỏ qua. Mặt đường xấu, một đoạn sỏi, khúc cua nối cua, cầu nhỏ trơn hay lề dốc đều tác động trực tiếp lên thăng bằng của hai bánh. Người lái lại phơi ra nắng, gió, mưa và mệt nhanh hơn trên đoạn đường nhiều xe tải. Vì thế một con đường ngắn hơn nhưng hẹp, nhiều cua, vắng người có thể mệt hơn và nhiều rủi ro hơn một con đường dài hơn nhưng rộng và thoáng. Điều cần nhìn không chỉ là chiều dài tuyến mà là tính chất của từng đoạn.',
      'Bản đồ đường nét thông thường cho bạn biết có đường và đường đi đâu, nhưng gần như không nói gì về chất lượng của đường. Một nét mảnh có thể là quốc lộ rộng, cũng có thể là lối đi hẹp giữa hai bờ ruộng. Đây là chỗ lớp ảnh vệ tinh và ảnh đường phố có ích: chúng cho bạn nhìn thấy cung đường bằng mắt, gần với cách người lái sẽ nhìn khi tới đó. Mục đích của bài không phải thay thế việc hỏi người địa phương mà là giúp bạn đặt đúng câu hỏi trước khi hỏi.',
      'Hai loại ảnh cũng có thế mạnh khác nhau. Ảnh vệ tinh nhìn từ trên xuống, giỏi cho bức tranh lớn: độ rộng, hình dáng đường, nhà cửa dọc tuyến, cây cối, sông suối. Ảnh đường phố nhìn từ mặt đất, giỏi cho chi tiết gần: mặt đường, lề, cầu, ngã rẽ. Dùng cả hai thì chúng bổ sung cho nhau, nhưng cả hai chỉ là một phần của việc chuẩn bị, không phải kết luận. Chuyện ứng dụng bản đồ dẫn vào đường nhỏ hay đường cụt giữa chuyến đã có bài riêng trên trang; bài này tập trung vào việc xem trước khi đi.'
    ]),
    P('Ảnh vệ tinh cho thấy gì: độ rộng, nhà dọc đường, khúc cua và chỗ vắng', [
      'Điều đầu tiên ảnh vệ tinh cho thấy là độ rộng tương đối của đường và lề. Phóng lớn dần vào một đoạn, bạn có thể thấy dải đường chiếm bao nhiêu so với hai bên, có vạch hay không, hai xe tránh nhau có đủ chỗ không, hay đường chỉ như một vệt hẹp giữa cây. Những đoạn thắt lại giữa hai vách đá, qua cầu nhỏ hay giữa hai hàng nhà đều dễ nhận ra. Đây là nơi cần giảm tốc và để ý xe ngược chiều, nên đáng được đánh dấu.',
      'Mật độ nhà dọc tuyến giúp đoán một đoạn là đông hay vắng. Nhiều mái nhà sát hai bên đường nghĩa là có dân cư, có thể có quán nước, cửa hàng và người để hỏi, nhưng cũng có nghĩa là xe ra vào, trẻ em, gia súc, chợ họp, xe đón khách bất ngờ. Ngược lại, một đoạn dài chỉ thấy rừng, đồi hay ruộng có thể rất thoáng và yên tĩnh nhưng thường không có chỗ nghỉ, không có sóng điện thoại và không có ai ở gần nếu xe trục trặc. Hai loại đoạn này cần hai kiểu chuẩn bị khác nhau.',
      'Khúc cua liên tiếp lộ ra khá rõ trên ảnh vệ tinh qua hình dạng của dải đường. Đường thẳng dài khác hẳn đường uốn khúc dày đặc trên sườn núi, nơi cua gập nối tiếp nhau hoặc có những đoạn ngoặt như móc áo. Đoạn như vậy buộc người lái giảm tốc liên tục, mỏi tay phanh và dễ bị lệch làn nếu xe ngược chiều lấn cua. Khi thấy nét đường chồng lớp trên sườn dốc, hãy tính thêm thời gian và đừng giả định tốc độ trung bình như trên đường thẳng.',
      'Ảnh vệ tinh cũng cho thấy địa hình quanh đường: bên cạnh là vách hay vực, đường chạy sát sông suối, qua thung lũng hay cắt qua những dòng nước nhỏ. Nơi đường sát vực hoặc cắt dòng nước đáng được ghi lại để hỏi thêm về lan can, cầu, ngầm tràn khi mưa. Những đoạn đường trải dài giữa vùng không có nhà hay công trình nào cũng cần ghi: đó là nơi nên đổ xăng, uống nước, nạp pin trước khi vào, vì bên trong sẽ không có điều kiện để làm.',
      'Cách xem hiệu quả là đi dọc tuyến theo từng đoạn ngắn thay vì xem tổng thể một lần. Kéo bản đồ theo hướng chạy dự kiến, phóng vừa đủ để thấy dải đường và hai bên, và chú ý cả các ngã nhánh vì ở đó dễ rẽ nhầm. Đừng quên lùi ra xem bức tranh lớn để biết đoạn nào nối với đoạn nào. Một vài phút kiên nhẫn ở bước này có thể thay cho cả buổi bất ngờ trên đường.'
    ]),
    P('Ảnh đường phố cho thấy gì: mặt đường, lề, cầu nhỏ, ngã rẽ và bóng cây', [
      'Khi ảnh vệ tinh đã giúp bạn khoanh vùng những đoạn đáng chú ý, ảnh đường phố cho bạn nhìn gần như thể đang đứng trên đường. Việc đầu tiên là xem mặt đường: nhựa còn mịn hay đã nứt, đã vá nhiều, hay chỉ là bê tông, đất hoặc đá dăm. Hãy chú ý vệt bánh xe lún, mép đường vỡ, chỗ đọng nước, cát sỏi trôi ra mặt đường. Nếu khung ảnh đủ nét, bạn có thể thấy cả những ổ gà lớn, nhưng đừng coi việc không thấy là việc không có, nhất là khi ảnh đã chụp từ lâu.',
      'Phần lề và hai bên cũng đáng xem. Lề cỏ, lề đất hay lề bê tông khác nhau khi bạn cần tránh xe lớn hoặc dừng nghỉ. Rãnh nước, cống hở, chỗ lề sụt hay chỗ lề rất hẹp sát mép dốc là những thứ khiến một lần né xe trở nên nguy hiểm. Nhìn thêm xem có biển báo, gương cầu, vạch kẻ hay lan can không, vì chúng cho biết đoạn ấy từng được coi là chỗ cần lưu ý, và đôi khi biển hiệu còn cho biết có cửa hàng, quán hay trạm gần đó.',
      'Cầu nhỏ là chỗ nhiều người thấy muộn. Trên ảnh đường phố, bạn có thể xem cầu có hẹp hơn đường không, có lan can không, mặt cầu là bê tông hay ván, đường dẫn vào cầu có thắt lại không. Ngã rẽ cũng vậy: ngã ba bị khuất sau cua, ngã tư không có tín hiệu, hai nhánh trông giống nhau dễ rẽ nhầm đều lộ ra khi xoay ảnh nhiều hướng. Hãy ghi những ngã rẽ dễ nhầm kèm một mốc nhận biết như một cây lớn, một quán hay một biển hiệu để lúc tới nơi nhận ra nhanh.',
      'Bóng cây có hai mặt. Tán cây giúp mát và che nắng gắt, nhưng đường dưới tán rậm thường ẩm hơn, rêu và lá mục làm mặt đường trơn vào mùa mưa, và bóng đổ loang lổ làm mắt khó thích nghi khi chạy từ chỗ sáng vào chỗ tối. Tán cây cũng che mất khúc cua, khiến người lái thấy xe ngược chiều muộn. Khi xem ảnh, hãy thử nhìn theo cả chiều đi của bạn lẫn chiều ngược lại, vì khung cảnh nhìn từ hai hướng có thể rất khác, nhất là ở cua và ngã rẽ.',
      'Ảnh đường phố cũng giúp tìm chỗ nghỉ và chỗ đổ xăng. Hãy tìm biển hiệu quán nước, bãi đất rộng ven đường, khu có nhà dân, cây xăng hoặc điểm sạc. Ghi nhận cả khoảng cách tương đối giữa chúng, vì một đoạn không thấy gì qua nhiều khung ảnh liên tiếp là đoạn cần chuẩn bị nước, xăng và tinh thần riêng. Nhưng biển hiệu trong ảnh có thể đã cũ nên chỉ nên coi là điểm cần xác nhận lại.'
    ]),
    P('Giới hạn của ảnh: cũ, bị che và không thấy ổ gà hay sạt lở', [
      'Đây là phần quan trọng nhất của bài, vì nhiều sai lầm đến từ việc tin ảnh hơn mức nó đáng tin. Giới hạn đầu tiên là độ cũ. Ảnh vệ tinh và ảnh đường phố được chụp vào các thời điểm khác nhau, thậm chí hai đoạn liền nhau có thể chụp cách nhau rất lâu. Trong khoảng thời gian ấy, đường có thể đã được sửa, mở rộng, rải mới, hoặc ngược lại đã hỏng, sạt, đang thi công. Bạn thường không biết ảnh nào cũ tới mức nào, nên cần xem ngày chụp nếu ứng dụng có hiển thị và hiểu rằng ngay cả khi có thì đó cũng chỉ là một lát cắt.',
      'Giới hạn thứ hai là bị che. Mây, bóng núi, tán cây dày, hầm và cầu vượt có thể che khuất đúng đoạn bạn cần xem. Ảnh chụp từ trên cao khó cho thấy chi tiết mặt đường, nên một dải đường trông đẹp trong ảnh vệ tinh chưa chắc là đường tốt. Nhiều đoạn đường vùng sâu còn không có ảnh đường phố, hoặc chỉ có ảnh ở một số điểm, và bạn không thể suy đoán đoạn không có ảnh từ đoạn có ảnh bên cạnh, vì chất lượng đường có thể thay đổi nhanh theo từng khúc.',
      'Giới hạn thứ ba, và nguy hiểm nhất, là những thứ ảnh gần như không bao giờ cho thấy. Ổ gà nhỏ nhưng sâu, mặt đường đã nứt chìm dưới bóng cây, bùn vừa chảy xuống sau mưa, đá rơi, sườn đất bên đường sạt xuống, nước tràn qua ngầm, dầu hay cát trên mặt đường. Một công trình mới, đoạn chốt chặn, hoặc chợ họp ven đường vào những giờ nhất định cũng không hiện trong ảnh. Độ dốc cũng bị dẹt đi trong ảnh phẳng, nên bạn khó cảm nhận được một đoạn dốc đứng và dài.',
      'Mùa cũng là một giới hạn ít được nhắc. Ảnh chụp vào mùa khô cho cảm nhận khác hẳn về cùng đoạn đường vào mùa mưa, khi mặt đường trơn, nước chảy ngang và sương mù dày. Nếu chuyến của bạn đi vào mùa khác với mùa chụp ảnh, hãy tự hình dung thêm lớp khó khăn tương ứng thay vì xem ảnh như bản mô tả đúng. Về nguyên tắc, hình ảnh chỉ giúp bạn đặt câu hỏi, không giúp bạn kết luận rằng đường ổn.',
      'Từ những giới hạn đó, kết luận thực tế là: ảnh dùng để phát hiện nơi cần hỏi, không dùng để xác nhận nơi an toàn. Điều ảnh không thể cho bạn biết, tức hiện trạng mặt đường, chỉ người vừa đi qua hoặc người sống ở đó mới biết. Tình huống ứng dụng bản đồ dẫn vào đường nhỏ hay đường hết nhựa ngay khi đang đi là chuyện đã có bài riêng, và việc xem ảnh trước chính là cách để bạn ít gặp tình huống ấy hơn.'
    ]),
    P('Ghi lại điểm cần chậm, điểm nghỉ và điểm lui rồi đối chiếu với người địa phương', [
      'Xem ảnh mà không ghi lại thì sau vài ngày bạn chỉ còn nhớ cảm giác chung, và đến lúc ngồi trên xe thì không còn tác dụng. Cách hữu ích là chia những điều thấy được thành ba loại điểm. Điểm cần chậm là nơi nên giảm tốc hoặc đi thật cẩn thận: cua gập liên tiếp, cầu nhỏ, đoạn thắt hẹp, ngã rẽ khuất, đoạn mặt đường nghi ngờ. Điểm nghỉ là nơi có thể dừng, uống nước, đổ xăng hay sạc. Điểm lui là nơi quay đầu được, hoặc chỗ cuối cùng bạn còn có thể đổi ý trước một đoạn khó.',
      'Điểm lui thường bị bỏ quên, nhưng lại là điểm làm bạn an tâm nhất. Với mỗi đoạn khó, hãy xác định chỗ trước đó mà bạn còn đường quay lại, tức đoạn đường đủ rộng để xoay xe, hoặc nơi có thể nghỉ lại qua đêm nếu cần. Sau đó đặt cho mình một tiêu chí rõ ràng để lui: nếu mặt đường tệ hơn mức đã chuẩn bị, nếu trời đổi xấu, nếu thấy mình mệt hơn dự tính thì quay lại ở điểm lui thay vì cố tiến vào đoạn mà không còn đường lui. Quyết định này dễ hơn nhiều khi đã được tính trước ở nhà.',
      'Về cách ghi, đơn giản là đủ. Dùng ghim hoặc nhãn trên bản đồ để đánh dấu từng điểm, thêm một dòng ghi chú ngắn như “cầu hẹp, đi chậm” hay “quán cuối cùng, nghỉ ở đây”, và lưu ảnh chụp màn hình cho phần cần nhìn lại. Nhớ rằng nhiều vùng đi qua có thể mất sóng, nên cần có bản đồ ngoại tuyến và báo lộ trình cho người thân, chuyện đã có bài riêng trên trang. Hãy chia sẻ các điểm này cho người đi cùng để mọi người cùng biết chỗ cần chậm và chỗ dừng.',
      'Bước cuối là đối chiếu với người địa phương. Mang theo danh sách điểm đã ghi và hỏi đúng chỗ: mặt đường đoạn này hiện thế nào, gần đây có sạt lở hay sửa đường không, cầu này còn đi được không, quán và chỗ đổ xăng còn mở không, vào giờ nào đoạn này đông. Cách hỏi, tin đến đâu và đối chiếu với bản đồ ra sao đã có bài riêng trên trang. Khi lời người địa phương khác với ảnh, hãy tin người địa phương, vì họ nhìn thấy đường hôm nay, còn ảnh chỉ là một lát cắt.',
      'Cuối cùng, hãy chừa khoảng đệm. Đoạn đường nhìn dễ trên ảnh vẫn có thể chậm hơn dự kiến, nên đừng xếp lịch quá chặt, và luôn chuẩn bị một tuyến thay thế cho đoạn quan trọng nhất. Việc chọn giữa quốc lộ đông xe tải với đường tỉnh, đường huyện vắng hơn cũng nhờ cách đọc ảnh này mà rõ hơn, và đã có bài riêng so sánh các loại tuyến. Còn với tuyến đi hằng ngày, đi thử trước là cách tốt nhất, cũng đã có bài riêng. Việc tự làm của bạn là đánh dấu điểm chậm, điểm nghỉ và điểm lui; điều cần hỏi thêm luôn là hiện trạng mặt đường.'
    ])
  ],
  checklist: [
    'Chuyển bản đồ sang lớp ảnh vệ tinh và đi dọc tuyến từng đoạn ngắn, kể cả các ngã nhánh, thay vì chỉ xem tổng thể một lần.',
    'Ghi lại đoạn thắt hẹp, khúc cua liên tiếp, đường sát vực hoặc sát sông suối và những đoạn dài không thấy nhà.',
    'Dùng ảnh đường phố để xem mặt đường, lề, cầu nhỏ, ngã rẽ khuất, bóng cây và biển hiệu, nhìn theo cả hai chiều nếu có thể.',
    'Xem ngày chụp nếu có, nhớ ảnh có thể cũ, bị che và không thấy ổ gà, sạt lở, bùn hay công trình mới.',
    'Đánh dấu ba loại điểm trên bản đồ: điểm cần chậm, điểm nghỉ hoặc đổ xăng và sạc, điểm lui có thể quay đầu.',
    'Lưu ảnh chụp màn hình và tải bản đồ ngoại tuyến cho những đoạn có thể mất sóng.',
    'Hỏi người địa phương về hiện trạng mặt đường tại từng điểm đã đánh dấu và tin lời họ khi khác với ảnh.',
    'Chừa khoảng đệm về thời gian, chuẩn bị tuyến thay thế và chia sẻ danh sách điểm cho người đi cùng.'
  ],
  steps: [
    { title: 'Xem bức tranh lớn bằng ảnh vệ tinh', detail: 'Đi dọc tuyến từng đoạn, nhìn độ rộng đường, nhà dọc tuyến, khúc cua liên tiếp, đường sát vực hay sát nước và những đoạn dài vắng.' },
    { title: 'Xem chi tiết bằng ảnh đường phố', detail: 'Nhìn mặt đường, lề, cầu nhỏ, ngã rẽ khuất, bóng cây và biển hiệu ở những điểm đã khoanh vùng, nhìn cả hai chiều nếu có.' },
    { title: 'Nhận ra giới hạn của ảnh', detail: 'Xem ngày chụp, tính tới mùa khác nhau, nhớ ảnh không cho thấy ổ gà, sạt lở, bùn, nước tràn hay công trình mới.' },
    { title: 'Đánh dấu ba loại điểm', detail: 'Ghim điểm cần chậm, điểm nghỉ hoặc đổ xăng và sạc, điểm lui; thêm một dòng ghi chú ngắn và lưu ảnh chụp màn hình.' },
    { title: 'Đối chiếu với người địa phương', detail: 'Hỏi hiện trạng mặt đường, sạt lở, sửa đường, cầu và chỗ nghỉ tại từng điểm; khi lời người địa phương khác với ảnh thì tin người địa phương.' },
    { title: 'Chừa đệm và chuẩn bị đường thay thế', detail: 'Xếp lịch lỏng hơn, có tuyến thay thế cho đoạn quan trọng nhất và chia sẻ danh sách điểm cho người đi cùng.' }
  ],
  warnings: [
    'Không coi một dải đường trông đẹp trên ảnh vệ tinh là đường tốt; ảnh từ trên cao không cho thấy mặt đường, ổ gà hay sạt lở.',
    'Không tin vào ảnh cũ để quyết định đi hay không đi qua một đoạn; đường có thể đã sửa, đã hỏng hoặc đang thi công vào lúc bạn tới.',
    'Không suy đoán đoạn không có ảnh đường phố từ đoạn có ảnh bên cạnh; chất lượng đường có thể đổi rất nhanh theo từng khúc.',
    'Không cố đi tiếp khi tới nơi thấy mặt đường, cầu hay thời tiết tệ hơn mức đã chuẩn bị; hãy quay lại ở điểm lui đã chọn.',
    'Không dừng xe giữa lòng đường, ngay sau khúc cua hay trên cầu hẹp để xem lại bản đồ; hãy dừng ở chỗ rộng và an toàn.'
  ],
  notes: [
    'Ảnh vệ tinh và ảnh đường phố có thể được chụp ở nhiều thời điểm, nhiều mùa và không phủ hết mọi đoạn; chỉ dùng để chuẩn bị, hiện trạng đường lúc bạn đi mới là điều quyết định.',
    'Bài tập trung vào việc xem ảnh trước khi đi; chuyện ứng dụng bản đồ dẫn vào đường nhỏ giữa chuyến, hỏi người địa phương, đi qua vùng mất sóng và so sánh các loại tuyến đã có bài riêng trên trang.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần chở hành lý và kiểm tra xe trước chuyến đi xa',
    'Tài liệu đào tạo lái xe an toàn và hướng dẫn cơ bản về đọc bản đồ, lập kế hoạch lộ trình khi đi xa'
  ],
  related: [
    'ung-dung-ban-do-dan-vao-duong-nho-duong-cut-hoac-duong-het-nhua-khi-nao-tin-ung-dung-khi-nao-dung-va-quay-dau',
    'doi-cho-lam-hoac-chuyen-nha-phai-di-tuyen-moi-hang-ngay-bang-xe-may-di-thu-truoc-ghi-diem-kho-va-chon-duong-du-phong',
    'hoi-chu-cho-nghi-va-nguoi-dia-phuong-ve-duong-ngay-mai-hoi-gi-tin-den-dau-va-doi-chieu-voi-ban-do-the-nao',
    'quoc-lo-dong-xe-tai-hay-duong-tinh-duong-huyen-vang-hon-moi-loai-tuyen-met-kieu-nao-rui-ro-gi-va-cach-chon-cho-xe-may'
  ]
};
