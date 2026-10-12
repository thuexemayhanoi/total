// AI WIKI TOTAL — S01103 (topic V2 T001083); quy trình loại trừ nguyên nhân nổ không đều lúc cầm chừng, từ việc tự kiểm tra an toàn tới việc ra thợ; không nêu số liệu, thông số, tên hãng hay quy trình chỉnh bộ chế hòa khí và xupap.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-may-no-khong-deu-luc-cam-chung',
  title: 'Xe máy nổ không đều lúc cầm chừng: phân biệt lỗi bugi, đường nạp và hở gioăng',
  seoTitle: 'Xe máy nổ không đều lúc cầm chừng: bugi, đường nạp hay hở gioăng?',
  metaDescription: 'Xe máy nổ rộp rộp, rung hoặc ì ạch khi đứng đèn đỏ: cách loại trừ lần lượt bugi, lọc gió, nắp bình xăng, hở gioăng cổ hút và lúc nào cần ra thợ.',
  summary: 'Bài giải thích vì sao xe máy rộp rộp khi đứng đèn đỏ, rung giật hoặc ì ạch sắp tắt, tức nổ không đều lúc cầm chừng. Nội dung phân biệt ba nhóm nguyên nhân là bugi, đường nạp cùng gioăng cổ hút bị hở, và nhiên liệu hoặc đánh lửa; đưa ra thứ tự loại trừ từ việc tự làm an toàn tại nhà như soi bugi, lọc gió, nắp bình xăng và nghe hơi gió lọt đến việc phải nhờ thợ; kèm những sai lầm hay gặp và dấu hiệu cần dừng đi xe.',
  quickAnswer: 'Xe máy nổ không đều lúc cầm chừng thường do ba nhóm: bugi bẩn hoặc yếu gây hụt nhịp rộp rộp; hở đường nạp hay gioăng cổ hút làm vòng tua lên xuống kèm tiếng xì; nhiên liệu và đánh lửa thất thường theo nóng lạnh, mưa ẩm. Kiểm tra theo thứ tự bugi, lọc gió, nắp bình xăng rồi nghe hơi gió lọt. Chưa hết, hoặc có mùi xăng, đèn báo lỗi, chết máy lặp lại thì ra thợ.',
  keyPoints: [
    'Cầm chừng là lúc động cơ nhạy nhất với lỗi nhỏ vì lượng gió và xăng đi qua rất ít, nên một chút gió lọt hay một nhịp lửa yếu cũng làm máy rung giật.',
    'Nhịp hụt rời rạc, có khi hết sau đoạn chạy xa, thiên về bugi; vòng tua lên xuống kèm tiếng xì thiên về hở đường nạp; triệu chứng đổi theo nóng lạnh, mưa ẩm thiên về nhiên liệu hoặc đánh lửa.',
    'Thứ tự loại trừ tại nhà là ghi triệu chứng, bugi, lọc gió, nắp bình xăng rồi nghe hơi gió lọt; các bước tháo và soi làm khi máy tắt hẳn, nguội, xa lửa, mỗi lần chỉ đổi một thứ.',
    'Bugi có thể chỉ là nhân chứng: thay đúng loại mà triệu chứng quay lại sau ít ngày thì nguyên nhân nằm sâu hơn ở đường nạp, nhiên liệu hoặc đánh lửa.',
    'Không vặn vít chỉnh cầm chừng bằng tai, không xịt chất dễ cháy quanh cổ hút, không trám keo mối nối; mùi xăng, đèn báo lỗi hay chết máy lặp lại là lúc ra thợ.'
  ],
  category: 'garage',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['cầm chừng', 'bugi', 'lọc gió', 'đường nạp', 'gioăng cổ hút', 'nắp bình xăng'],
  keywords: ['xe máy nổ không đều lúc cầm chừng', 'xe máy rộp rộp khi đứng đèn đỏ', 'xe ì ạch lúc cầm chừng', 'xe máy chạy cầm chừng không ổn định'],
  sections: [
    P('Nổ không đều ở cầm chừng nghĩa là gì', [
      'Cầm chừng là lúc động cơ chạy với bướm ga gần đóng kín và vòng tua thấp, khi mỗi nhịp nổ phải tự đứng vững vì bánh đà quay chậm, chưa đủ quán tính để bù cho nhịp yếu. Nổ không đều nghĩa là nhịp ấy mất ổn định: tiếng máy rộp rộp khi đứng đèn đỏ, đôi lúc hụt nhịp, thân xe rung giật, vòng tua lúc cao lúc thấp, hoặc xe ì ạch lúc cầm chừng như sắp tắt. Phần lớn trường hợp quy về ba nhóm nguyên nhân: tia lửa ở bugi yếu hay chập chờn, không khí thừa lọt vào đường nạp làm hỗn hợp loãng, hoặc nhiên liệu và hệ đánh lửa thất thường. Hai nhóm đầu bạn có thể tự khoanh vùng bằng vài bước an toàn; nhóm thứ ba thường cần thợ.',
      'Lỗi lộ ra ở cầm chừng trước vì lượng không khí và xăng đi qua rất ít, nên một chút gió thừa hay một nhịp lửa yếu chiếm tỷ lệ lớn so với toàn bộ hỗn hợp. Khi mở ga, dòng khí tăng lên và bánh đà quay nhanh hơn giúp máy vượt qua nhịp hụt, nên triệu chứng nhẹ đi hoặc biến mất. Sự khác biệt ấy chính là manh mối. Máy rối nhiều ở cầm chừng nhưng dịu khi mở ga nhẹ thường thiên về hở đường nạp. Nhịp nổ hụt rời rạc, lúc có lúc không, đôi khi hết sau một đoạn chạy xa, thường thiên về bugi. Triệu chứng đổi theo nóng lạnh, mưa ẩm hoặc thời điểm đổ xăng thường thuộc nhiên liệu và đánh lửa.',
      'Cũng cần loại trừ những trạng thái bình thường. Máy mới nổ lúc nguội thường giữ vòng tua cao một lúc rồi tụt dần; động cơ một xi lanh rung nhiều; một số xe tay ga tự ngắt máy khi dừng rồi nổ lại khi vặn ga, đó là tính năng, không phải lỗi. Rung kèm tiếng lạch cạch mà nhịp nổ vẫn đều có thể chỉ do ốp pô hoặc ốp nhựa lỏng. Mốc so sánh là chính chiếc xe của bạn, tức cầm chừng hôm nay khác trước ở điểm nào. Triệu chứng này khác giật hụt lúc mở ga, máy ì khi tăng tốc hay xe không nổ được; hãy ghi lại nó xuất hiện lúc nóng hay nguội, sau mưa hay sau đổ xăng, vì mỗi chi tiết thu hẹp danh sách nghi vấn.'
    ]),
    P('Kiểm tra nhanh tại nhà: bugi, lọc gió và nắp bình xăng', [
      'Thứ tự kiểm tra đi từ việc rẻ, an toàn, dễ hoàn tác và hay gặp nhất sang việc ít gặp hơn: ghi triệu chứng, bugi, lọc gió, nắp bình xăng, rồi nghe hơi gió lọt. Các bước tháo và soi đều làm khi máy tắt hẳn và nguội, xe đứng vững trên nền phẳng, xa lửa và nguồn nhiệt. Bugi đứng đầu. Quét sạch bụi quanh chân bugi để vật lạ không rơi vào xi lanh, tháo bằng dụng cụ đúng cỡ rồi quan sát điện cực, sứ cách điện và lớp bám ở đầu. Điện cực mòn tròn, sứ nứt, muội đen dày hoặc đầu bugi ướt dầu, ướt xăng đều cho thấy bugi không còn làm việc tốt, nhất là ở cầm chừng, nơi đầu bugi ít nóng nên khó tự cháy sạch cặn.',
      'Bugi có thể là thủ phạm, nhưng cũng có thể chỉ là nhân chứng. Bugi hỏng chỉ vì đã dùng lâu thì việc thay bugi đúng loại theo sách hướng dẫn thường làm máy êm lại ngay. Bugi bám muội dày, ướt dầu hoặc trắng khô bất thường lại là hệ quả của nguyên nhân khác, như hỗn hợp quá đậm, quá loãng hay dầu lọt vào buồng đốt, nên bugi mới chỉ giúp được một thời gian ngắn rồi triệu chứng quay lại. Lúc lắp, vặn tay cho ren vào thẳng rồi mới siết vừa đủ theo sách, vì vặn lệch ren trên nắp máy bằng nhôm là hỏng nặng; cắm chụp bugi thật chắc và xem cao su có nứt không. Đừng uốn điện cực bằng kìm hay cọ mạnh bằng bàn chải sắt.',
      'Lọc gió và nắp bình xăng là hai điểm kế tiếp. Lọc gió bẩn vừa phải thường ảnh hưởng rõ khi chạy nhanh hơn là lúc cầm chừng; lọc ngấm dầu hoặc bít nặng mới có thể làm hỗn hợp đậm lên và máy rung, còn hộp lọc hở nắp hay kẹp ống nối lỏng thì để bụi lọt thẳng vào máy. Với nắp bình xăng, chỉ mở khi máy nguội và ở nơi thoáng: xem gioăng nắp có nứt không, lỗ hoặc ống thông hơi có bị bùn, bụi, côn trùng bít không. Thông hơi nghẹt thường làm máy thiếu xăng dần sau một đoạn chạy nên ít khi gây rối cầm chừng một mình, nhưng việc kiểm tra rất rẻ và dễ bị bỏ sót; nắp hở còn để nước mưa lọt vào bình.'
    ]),
    P('Dấu hiệu hở đường nạp và gioăng cổ hút', [
      'Đường nạp là lối đi của không khí từ hộp lọc gió qua họng ga hoặc bộ chế hòa khí vào xi lanh, và có hai kiểu lỗi trái ngược. Nghẹt, như lọc bít hay ống nối bị xẹp, làm hỗn hợp đậm; hở, tức không khí lọt vào sau bướm ga qua gioăng cổ hút hoặc ống cao su nối, làm hỗn hợp loãng. Hở là lỗi đặc trưng của cầm chừng, vì ngay sau bướm ga đang gần đóng, lực hút mạnh nhất trong khi lượng gió đi đúng đường lại rất ít, nên khe nứt nhỏ cũng đủ làm hỗn hợp loãng rõ rệt. Dấu hiệu điển hình là vòng tua lên xuống hoặc cao hơn thường lệ, máy hay chết khi nhả ga và triệu chứng dịu đi khi mở ga nhẹ.',
      'Để nghe hơi gió lọt, hãy chọn nơi yên tĩnh và thoáng khí, dựng xe vững trên nền phẳng, về số mo (vị trí trung gian) nếu là xe số, rồi cho máy nổ cầm chừng và lắng nghe quanh khu vực nối họng ga với đầu xi lanh cùng các ống cao su gần đó. Tiếng xì mảnh, tiếng rít nhẹ hoặc tiếng hút khẽ tại một mối nối là gợi ý có hở. Giữ tay, tóc và quần áo xa bộ phận quay, ống xả và chi tiết nóng. Khi máy đã nguội, nhìn kỹ các mối nối, tháo ốp theo sách hướng dẫn nếu cần: vệt bụi hoặc dầu bẩn kéo thành đường dọc mối ghép, cao su nứt chân chim, kẹp lỏng hay ống chưa vào hết cổ đều là dấu hiệu đáng ngờ.',
      'Gioăng và cao su cổ hút hỏng vì già hóa qua nhiều chu kỳ nóng lạnh, vì rung lâu ngày, hoặc vì lần tháo lắp trước lắp chưa kín, nên triệu chứng xuất hiện ngay sau lần tháo lắp họng ga hay ống nối là manh mối đáng nhớ. Có xe chỉ lộ khi máy nóng, lúc các mối ghép giãn nở. Hở còn có thể kèm tiếng nổ lụp bụp khi nhả ga, máy nóng hơn bình thường và bugi sáng màu bất thường, vì hỗn hợp loãng cháy nóng. Cách chữa đúng là thay gioăng hoặc ống hỏng đúng loại, lắp theo thứ tự và lực siết của sách hướng dẫn; người chưa quen tháo lắp nên nhờ thợ, vì siết sai làm nứt cổ hút hoặc méo gioăng, khiến chỗ hở nặng hơn.'
    ]),
    P('Khi nào nghi ngờ hệ thống nhiên liệu hoặc đánh lửa', [
      'Nhiên liệu đáng nghi khi triệu chứng bắt đầu sau một thời gian xe nằm không, sau lần đổ xăng ở chỗ lạ hoặc sau những ngày mưa nhiều. Xăng để lâu trong bình hay trong bộ chế hòa khí tạo cặn nhựa làm tắc các đường dầu nhỏ phục vụ cầm chừng; nước lẫn trong xăng khiến máy rung giật rồi chết; với xe phun xăng, cặn ở họng ga hay kim phun cũng làm vòng tua không ổn định. Dấu hiệu đi kèm thường là khó nổ lúc nguội, chết máy khi nhả ga, mùi xăng sống, khói đen, hay giật cả khi tăng ga. Vệ sinh đúng quy trình và thay lọc xăng thuộc việc của thợ, không phải thứ có thể đoán rồi đổ phụ gia vào bình.',
      'Hệ đánh lửa gồm chụp bugi, dây cao áp, bobin và phần điều khiển, và lỗi ở đây thường chập chờn: lúc tốt lúc xấu, nặng hơn khi trời ẩm, khi máy nóng hoặc ngay sau khi rửa xe. Chụp bugi lỏng hay nứt, giắc cắm ẩm hoặc oxy hóa, dây mát lỏng đều làm tia lửa yếu, và cầm chừng là chế độ lộ ra trước vì lúc vòng tua thấp tia lửa thường yếu nhất. Trên xe phun xăng, điện áp thấp cũng làm cầm chừng thất thường: đèn pha mờ khi đứng yên rồi sáng lên khi vặn ga, đề yếu, là gợi ý cần kiểm tra ắc quy và hệ sạc. Đèn báo lỗi động cơ sáng thì bước kế tiếp là đọc mã lỗi, không phải thử thay đồ.',
      'Nếu bugi mới, đường nạp kín, nhiên liệu và điện đều ổn mà cầm chừng vẫn không đều, nguyên nhân có thể nằm sâu hơn trong cơ khí: khe hở xupap lệch, độ kín buồng đốt giảm, bướm ga hoặc van điều khiển cầm chừng bám bẩn. Những kiểm tra này cần dụng cụ đo và quy trình riêng, nên đừng cố đoán tại nhà. Việc bạn làm được là chuẩn bị thông tin cho thợ: triệu chứng lúc nóng hay nguội, mưa hay khô, có tiếng xì không, đã kiểm tra và thay những gì, và sau lần thay đó triệu chứng đổi ra sao. Bản ghi này thường rút ngắn chẩn đoán và tránh việc thay đi thay lại những chi tiết còn tốt.'
    ]),
    P('Những việc không nên tự làm và lúc cần ra thợ', [
      'Sai lầm phổ biến nhất là vặn vít chỉnh cầm chừng hoặc vít gió cho tới khi tiếng máy nghe êm. Chỉnh kiểu này chỉ bù tạm cho một chỗ hở hoặc một bugi yếu, che mất nguyên nhân thật, và hỗn hợp lại lệch ở các dải ga khác. Chỉnh cầm chừng cần dụng cụ đo vòng tua và thực hiện theo sách hướng dẫn của nhà sản xuất, nên để thợ. Sai lầm thứ hai nguy hiểm hơn: xịt chất làm sạch bộ chế hòa khí, bình xịt khởi động hay bất kỳ chất dễ cháy nào quanh cổ hút để dò chỗ hở. Hơi dễ cháy gần ống xả nóng hoặc tia lửa có thể bốc cháy, nên đây là cách dò không nên dùng tại nhà.',
      'Vài thói quen khác làm tình hình tệ hơn. Thay cùng lúc bugi, lọc gió và gioăng theo đoán mò khiến bạn tốn công mà không biết món nào có tác dụng; mỗi lần chỉ nên đổi một thứ rồi cho máy nổ cầm chừng để so sánh. Siết thêm bu lông cổ hút theo cảm tính có thể làm nứt cổ hút hoặc ép méo gioăng. Trám keo hay quấn băng dính vào mối nối đường nạp có thể bong ra và bị hút vào máy. Dùng khí nén hoặc xịt nước áp lực quanh họng ga, giắc cắm và chụp bugi dễ đẩy nước, bụi vào chỗ không nên có. Rồ ga tại chỗ để thông máy chỉ che triệu chứng trong chốc lát.',
      'Hãy ra thợ khi đã đi hết các bước trên mà cầm chừng vẫn không đều, hoặc khi triệu chứng quay lại chỉ sau một thời gian ngắn kể từ lần thay bugi. Dừng đi xe ngay nếu ngửi mùi xăng nồng, thấy xăng rò hay nhỏ giọt, có mùi khét, nghe tiếng gõ kim loại hoặc máy nóng bất thường. Đèn báo lỗi động cơ sáng, khói đen hay khói xanh nhiều, hoặc chết máy lặp lại ở chỗ dừng thì nên đến thợ sớm. Chiếc xe có thể tắt đột ngột giữa ngã tư là rủi ro an toàn thật, nên trong lúc chờ sửa hãy tránh đường đông, chạy chậm và giữ khoảng cách rộng với xe phía trước.'
    ])
  ],
  checklist: [
    'Ghi lại triệu chứng: nóng hay nguội, sau mưa hay sau đổ xăng, nhịp hụt rời rạc hay vòng tua lên xuống, có tiếng xì hay không.',
    'Tắt máy, chờ nguội hẳn rồi tháo bugi bằng dụng cụ đúng cỡ; xem điện cực, sứ cách điện và lớp bám ở đầu bugi.',
    'Nhìn lọc gió, nắp hộp lọc và kẹp ống nối xem có kín, có ngấm dầu hoặc bị bít không.',
    'Mở nắp bình xăng khi máy nguội, xem gioăng nắp và lỗ hoặc ống thông hơi có nứt hay bị bít không.',
    'Cho máy nổ cầm chừng ở nơi yên tĩnh, thoáng khí để nghe tiếng xì quanh cổ hút; khi máy nguội, soi các mối nối tìm vệt bụi, cao su nứt, kẹp lỏng.'
  ],
  steps: [
    { title: 'Ghi lại kiểu rối của máy', detail: 'Ghi lúc nóng hay nguội, sau mưa hay sau đổ xăng, nhịp hụt rời rạc hay vòng tua lên xuống, có tiếng xì hay không, rồi so với cầm chừng bình thường của chiếc xe.' },
    { title: 'Soi bugi và lọc gió khi máy nguội', detail: 'Tháo bugi bằng dụng cụ đúng cỡ để xem điện cực, sứ và lớp bám; kiểm tra lọc gió, nắp hộp và kẹp ống nối; thay hoặc làm sạch theo đúng hướng dẫn của sách.' },
    { title: 'Xem nắp bình xăng và nghe hơi gió lọt', detail: 'Kiểm tra gioăng và lỗ thông hơi của nắp bình xăng; cho máy nổ cầm chừng ở nơi yên tĩnh, thoáng khí để nghe tiếng xì quanh cổ hút, rồi soi các mối nối khi máy nguội.' },
    { title: 'Chuyển sang thợ kèm bản ghi', detail: 'Đưa bản ghi triệu chứng và các bước đã loại trừ để thợ thử kín đường nạp, đọc mã lỗi, kiểm tra nhiên liệu, đánh lửa và cơ khí bằng dụng cụ đo.' }
  ],
  warnings: [
    'Chỉ tháo bugi, mở nắp bình xăng hay soi các mối nối khi máy đã tắt hẳn và nguội, xa lửa và nguồn nhiệt; không thử tia lửa bằng cách kê bugi gần miệng bình xăng.',
    'Chỉ nổ máy để nghe hơi gió lọt ở nơi thoáng khí, không nổ máy trong phòng kín, và không xịt chất làm sạch bộ chế hòa khí, bình xịt khởi động hay chất dễ cháy quanh cổ hút để dò chỗ hở.',
    'Ngửi mùi xăng nồng, thấy xăng rò, có mùi khét, tiếng gõ kim loại hoặc máy nóng bất thường thì dừng đi xe ngay; đèn báo lỗi sáng hay chết máy lặp lại thì đến thợ sớm.'
  ],
  notes: [
    'Vị trí bugi, hộp lọc gió, cổ hút và cách tháo ốp khác nhau tùy xe số, xe tay ga, xe dùng bộ chế hòa khí hay phun xăng; luôn đối chiếu sách hướng dẫn của nhà sản xuất.',
    'Bài không nêu chu kỳ bảo dưỡng, lực siết, khe hở bugi hay cách chỉnh vít cầm chừng và xupap vì phụ thuộc từng mẫu xe; những việc đó thuộc về sách hướng dẫn và thợ có dụng cụ đo.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bugi, lọc gió, nhiên liệu và vòng tua cầm chừng',
    'Sổ tay sửa chữa của nhà sản xuất xe, phần hệ thống nạp khí và hệ thống đánh lửa'
  ],
  related: ['xe-may-bi-giat-hut-ga-nguyen-nhan-va-cach-xu-ly', 'may-i', 'xe-hao-xang-nguyen-nhan-va-cach-xu-ly', 'xe-khong-no-xu-ly', 've-sinh-hong-ga-xe-phun-xang']
};
