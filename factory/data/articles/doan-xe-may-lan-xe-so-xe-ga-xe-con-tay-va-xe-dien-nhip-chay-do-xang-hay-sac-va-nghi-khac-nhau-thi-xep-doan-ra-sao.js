// AI WIKI TOTAL — S02008 (topic V2 T002195); không nêu số liệu hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'doan-xe-may-lan-xe-so-xe-ga-xe-con-tay-va-xe-dien-nhip-chay-do-xang-hay-sac-va-nghi-khac-nhau-thi-xep-doan-ra-sao',
  title: 'Đoàn xe máy lẫn xe số, xe ga, xe côn tay và xe điện: nhịp chạy, đổ xăng hay sạc và nghỉ khác nhau thì xếp đoàn ra sao',
  seoTitle: 'Đoàn xe máy lẫn xe điện, xe ga, xe số: xếp đoàn theo nhịp nào',
  metaDescription: 'Đoàn có xe số, xe ga, xe côn tay lẫn xe điện thì chạy theo nhịp xe giới hạn, gộp điểm dừng xăng, sạc và nghỉ, xếp đội hình sao cho không ai bị ghìm hay bị đuổi.',
  summary: 'Nhóm bạn rủ nhau đi xa nhưng mỗi người một loại xe thì nhịp chạy, tầm xăng hay tầm pin và thời gian dừng khác nhau, dễ sinh cảm giác người chờ, người bị ép. Bài nói ở mức đặc tính chung cách mỗi loại xe kéo nhịp của đoàn, rồi chỉ cách tìm xe giới hạn để lấy làm nhịp chung. Bài hướng dẫn gộp đổ xăng, sạc pin và nghỉ vào một điểm dừng, xếp đội hình và tín hiệu cho công bằng. Cuối bài là cách tách hai nhóm có điểm hẹn và phương án khi một xe hỏng hay hết pin.',
  quickAnswer: 'Hãy tìm xe hoặc người giới hạn nhất của đoàn, thường là xe có tầm xăng hay tầm pin ngắn nhất hoặc người dễ mỏi nhất, rồi lấy đó làm nhịp chung thay vì lấy xe mạnh nhất. Gộp đổ xăng, sạc pin và nghỉ vào một điểm dừng chọn theo xe tầm ngắn, và xác nhận điểm sạc, điểm đổ xăng cùng điểm dự phòng trước chuyến. Xếp xe điện hay xe tầm ngắn gần đầu đoàn, thống nhất tín hiệu xin dừng cho mọi người. Nếu nhịp vẫn lệch quá nhiều, hãy tách hai nhóm có điểm hẹn riêng.',
  keyPoints: [
    'Mỗi loại xe kéo nhịp theo một trục khác nhau: bền hơi, độ êm, độ nhạy ga hay tầm pin, cộng với sức người lái.',
    'Lấy xe hoặc người giới hạn nhất làm nhịp chung, không lấy xe mạnh nhất; gọi tên trung tính, không chê ai.',
    'Gộp đổ xăng, sạc pin và nghỉ vào một điểm dừng theo xe tầm ngắn, kèm điểm dự phòng đã xác nhận.',
    'Xe điện hay xe tầm ngắn xếp gần đầu đoàn; người dẫn và người đóng đoàn chọn theo sự bình tĩnh, không theo độ mạnh xe.',
    'Khi nhịp quá lệch, tách hai nhóm có điểm hẹn; có phương án cho xe hỏng hay hết pin, không bỏ ai lại một mình.'
  ],
  category: 'ride',
  hub: 'di-phuot',
  date: '2026-10-24',
  updated: '2026-10-24',
  entities: ['đoàn xe máy nhiều loại xe', 'xe giới hạn của đoàn', 'nhịp chạy chung', 'điểm dừng gộp', 'điểm sạc dự phòng', 'xe điện', 'người dẫn đầu', 'người đóng đoàn'],
  keywords: ['đi phượt nhóm nhiều loại xe', 'đoàn xe máy lẫn xe điện', 'xếp đoàn xe số xe ga xe côn tay', 'nhịp chạy chung của cả đoàn', 'điểm dừng sạc và đổ xăng cho đoàn'],
  sections: [
    P('Mỗi loại xe kéo nhịp của cả đoàn theo một cách khác nhau', [
      'Khi cả nhóm đi cùng một loại xe, nhịp chạy gần như tự khớp. Nhưng khi trong đoàn có xe số, xe ga, xe côn tay và xe điện thì mỗi chiếc kéo nhịp theo một hướng riêng. Điều đó không có nghĩa xe nào tốt hơn hay dở hơn, chỉ là mỗi loại có một điểm tựa khác nhau: độ bền hơi, sự êm tay, cảm giác ga nhạy hay pin. Nếu không nhìn ra khác biệt này từ đầu, người ta hay quy sự lệch nhịp cho thái độ của từng người rồi sinh ra khó chịu không đáng có.',
      'Xe số thường chạy đều và bền hơi trên đoạn đường dài, người lái giữ một số ổn định nên nhịp thường êm và dễ đoán. Tuy vậy khi lên dốc hay cần tăng tốc, người lái phải về số, và xe có thể tụt lại hoặc vọt lên so với đoàn. Xe ga dễ lái, không phải sang số nên người lái thường ít mỏi tay chân. Đổi lại, nhiều xe ga có bình xăng không lớn và có thể hao xăng hơn khi chạy nhanh hay đổ đèo, nên đoàn thường phải dừng đổ xăng sớm hơn, mà tất cả còn tùy xe. Bài đi đường dài bằng xe tay ga trên trang nói thêm về nhịp chạy và nhịp nghỉ của loại xe này.',
      'Xe côn tay thường đáp ga nhanh, nên người đi xe này dễ muốn tăng tốc, muốn vượt và thấy khó chịu khi phải chạy đều ở nhịp thấp. Mỗi lần đổi nhịp đột ngột, xe phía sau phải phanh hoặc vặn ga theo, và sự giật cục lan về cuối đoàn như một làn sóng. Xe điện kéo nhịp theo trục khác hẳn: lực kéo tới gần như ngay, nhưng quãng đường còn lại phụ thuộc vào pin, tải trọng, địa hình, gió và cách vặn ga. Chạy nhanh, đèo dốc hay chở nặng thường làm pin cạn nhanh hơn người ta tưởng, và một lần sạc thường lâu hơn nhiều so với một lần đổ xăng. Bài về việc cần tăng tốc gấp trên trang so sánh cách các loại xe đáp ga.',
      'Ngoài xe còn có người, và người mới là chỗ nhịp lệch nhiều nhất. Cùng một loại xe, người đã quen đường dài và người lần đầu đi xa có nhịp rất khác nhau, người có sức bền và người dễ mỏi cũng vậy. Một đoàn nhiều loại xe vì thế có nhiều trục nhịp chồng lên nhau: tầm xăng hay tầm pin, thời gian nạp năng lượng, độ nhạy ga, sức và kinh nghiệm của người lái. Khi gọi tên được từng trục, cả đoàn thôi hỏi ai nhanh ai chậm mà chuyển sang hỏi điều gì đang giới hạn nhịp của đoàn lúc này.'
    ]),
    P('Tìm xe giới hạn của đoàn và lấy nó làm nhịp chung thay vì lấy xe mạnh nhất', [
      'Nhịp chung của đoàn không nên lấy theo xe mạnh nhất hay người lái giỏi nhất, mà theo mắt xích giới hạn nhất. Mắt xích đó có thể là xe có tầm đi ngắn nhất, người có sức yếu nhất hay ít kinh nghiệm nhất, hoặc một chiếc xe đang có vấn đề. Nếu đoàn chạy theo xe mạnh nhất, xe giới hạn phải chạy quá khả năng, tụt lại rồi vặn ga đuổi theo, đúng lúc xăng hay pin hao nhanh nhất và người lái dễ mắc lỗi. Khi nhịp đặt theo mắt xích giới hạn, cả đoàn ít phải dừng bất ngờ nên tổng thể thường đi đều và không chậm hơn là bao.',
      'Muốn tìm mắt xích giới hạn, hãy hỏi trước chuyến khi mọi người còn thoải mái. Mỗi người nói tầm đi ước chừng của xe mình với một lần đầy bình hay đầy pin, trong điều kiện thật như có chở đồ, có đèo dốc, có nắng gió, chứ không theo con số trong quảng cáo. Với xe điện nên lấy ước lượng thận trọng, vì pin cạn nhanh hơn khi tải nặng hay chạy nhanh, và pin đã dùng lâu có thể không còn như lúc mới. Ai cũng được nói thẳng về giới hạn của mình mà không bị coi là làm khó đoàn.',
      'Hãy tách ba loại giới hạn thay vì gộp thành một. Giới hạn về quãng đường là tầm xăng hay tầm pin, giới hạn về sức là người dễ mỏi hay chưa quen đường dài, còn giới hạn về an toàn là xe có lốp mòn, phanh yếu, đèn không sáng hay chở quá nặng. Cả đoàn nên lấy giới hạn nghiêm nhất ở từng thời điểm làm nhịp. Nếu một xe có vấn đề về phanh, lốp hay hệ thống điện, việc đúng là dừng lại cho thợ kiểm tra chứ không cố đi tiếp để theo kịp đoàn.',
      'Cách gọi tên cũng quan trọng. Thay vì nói xe yếu hay người chậm, hãy nói xe cần dừng sớm nhất hoặc người cần nhịp thoải mái nhất, vì những lời đầu dễ khiến người ta thấy mình bị xếp hạng. Người đi đầu và người đóng đoàn cũng không nhất thiết là người có xe khỏe nhất: người đi đầu cần biết đọc đường và kiên nhẫn giữ nhịp, người đóng đoàn cần bình tĩnh và biết xử lý sự cố cơ bản. Bài đi xe máy theo nhóm: kỹ năng giữ đội hình an toàn trên trang nói rõ hơn về hai vai này.'
    ]),
    P('Thống nhất nhịp dừng: đổ xăng, sạc pin và nghỉ giữa chặng cho nhiều loại xe', [
      'Cách đơn giản nhất để nhiều loại xe đi chung là gộp mọi nhu cầu vào cùng một điểm dừng. Thay vì mỗi nhóm xe dừng một nơi, cả đoàn chọn điểm dừng theo xe có tầm ngắn nhất rồi tất cả cùng dừng ở đó. Xe còn nhiều xăng vẫn nên tranh thủ đổ thêm, người chưa mỏi vẫn nên uống nước, duỗi người và kiểm tra xe. Như vậy đoàn chỉ dừng một lần cho nhiều việc, và không ai có cảm giác cả đoàn phải dừng vì mình. Điểm dừng nên ở chỗ an toàn, rộng, ngoài lề đường, đủ chỗ cho cả đoàn đỗ mà không cản lối người khác.',
      'Thời gian dừng của từng loại xe khác nhau, và đoàn nên tính điều đó ngay từ đầu. Đổ xăng thường nhanh, còn sạc pin thường lâu hơn nhiều, tùy trụ sạc, tùy xe và mức pin còn lại. Thay vì để xe xăng đứng chờ sốt ruột, hãy coi thời gian sạc là thời gian nghỉ thật của cả đoàn: ăn nhẹ, uống nước, kiểm tra lốp, xếp lại đồ, trò chuyện. Người đi xe điện không nên cảm thấy mình đang giữ chân cả đoàn, vì nghỉ giữa chặng vốn là điều ai cũng cần.',
      'Thông tin về điểm sạc và điểm đổ xăng phải được xác nhận trước chuyến, không dựa vào trí nhớ hay thông tin cũ. Hãy kiểm tra điểm đó còn hoạt động không, có mở cửa vào lúc mình dự định tới không, loại đầu sạc có hợp với xe điện trong đoàn không và có đủ chỗ cho nhiều xe đỗ không. Điều gì gọi hỏi trực tiếp được thì nên gọi hỏi, điều gì chỉ thấy trên bản đồ hay bài đăng thì chỉ coi là gợi ý. Mỗi chặng nên có thêm một điểm dự phòng gần đó, nhất là ở đoạn thưa dân cư, vì một điểm sạc hỏng hay đóng cửa có thể làm cả kế hoạch đổ vỡ.',
      'Về nhịp dừng, đừng đợi tới khi xăng hay pin gần cạn mới tính chuyện dừng. Hãy dừng khi xe giới hạn còn dư một phần kha khá, để nếu điểm dừng dự định gặp sự cố, đoàn vẫn tới được điểm dự phòng. Khi đổ xăng, hãy tắt máy, để xe nguội, không hút thuốc và không dùng lửa gần chỗ đổ. Khi sạc, dùng bộ sạc đi kèm xe và làm theo sách hướng dẫn của nhà sản xuất, không cắm bừa vào ổ ẩm ướt hay ổ lỏng. Nếu thấy mùi khét, nóng bất thường hay đèn báo lạ, hãy ngừng ngay và nhờ thợ kiểm tra.'
    ]),
    P('Xếp đội hình và tín hiệu để xe mạnh không phải ghìm chán, xe tầm ngắn không bị đuổi', [
      'Thứ tự trong đoàn nên sắp theo nhu cầu quan sát chứ không theo độ mạnh của xe. Người đi đầu là người đọc đường tốt, biết các điểm dừng và chịu giữ nhịp theo mắt xích giới hạn. Xe điện hoặc xe có quãng đường giới hạn nên xếp gần đầu đoàn, ngay sau người dẫn, để người dẫn thường xuyên thấy xe đó trong gương và dễ hỏi mức pin hay mức xăng ở mỗi lần dừng. Vị trí này cũng giúp khi cần rẽ vào điểm sạc hay điểm đổ xăng, xe giới hạn không bị tụt xa ở cuối đoàn. Xếp như vậy là vì lý do thực tế chứ không phải vì ai đó bị coi là cần trông chừng.',
      'Phần giữa đoàn dành cho người ít kinh nghiệm, người đang mỏi hoặc xe cần để mắt thêm, vì họ có người phía trước để bám và người phía sau để canh. Cách xếp này giúp ai cũng có người để mắt tới mà không ai bị đối xử như gánh nặng. Người đóng đoàn nên là người bình tĩnh, có đồ nghề cơ bản và biết xử lý một sự cố nhỏ, chứ không phải người bị đẩy xuống vì kém nhất. Khoảng cách, đội hình so le và cách tránh dồn cục là kiến thức chung của đi nhóm, nên bài đi xe máy theo nhóm: kỹ năng giữ đội hình an toàn trên trang là chỗ để đọc kỹ.',
      'Người đi xe mạnh thường là người phải ghìm nhịp nhiều nhất, và nếu không có việc để làm thì dễ sốt ruột rồi vượt khỏi đội hình. Thay vì để họ thấy mình bị phạt, hãy trao cho họ vai trò có ích như người đóng đoàn, người giữ danh sách điểm dừng, người nhắn báo khi tới nơi hay người kiểm tra xe sau mỗi lần nghỉ. Xe côn tay và xe số khỏe nên giữ ga đều, tránh bóp ga rồi nhả ga liên tục vì sự giật cục làm đoàn dồn lại. Xe điện nên vặn ga theo nấc nhẹ, vì lực kéo tới ngay có thể làm xe vọt khỏi nhịp.',
      'Tín hiệu cần ít và dễ nhớ, thống nhất ngay tại điểm xuất phát. Đoàn cần ít nhất các tín hiệu báo giảm tốc, báo dừng ở điểm kế tiếp, báo xe cần dừng sớm và báo cả đoàn đã đủ. Tín hiệu xe cần dừng sớm đặc biệt quan trọng: bất kỳ ai, kể cả người đi xe điện đang lo pin hay người đang mỏi, đều có quyền dùng nó, và cả đoàn coi đó là chuyện bình thường, không ai hỏi vặn hay trách móc. Người đóng đoàn là người xác nhận sau cùng. Không ai cầm điện thoại khi đang chạy; muốn nhắn hay gọi thì dừng ở chỗ an toàn rồi mới làm.'
    ]),
    P('Khi nhịp quá lệch: tách thành hai nhóm có điểm hẹn và cách giữ đoàn vui', [
      'Có những đoàn dù đã chọn nhịp theo mắt xích giới hạn, đã gộp điểm dừng và xếp đội hình hợp lý, nhịp vẫn lệch quá nhiều. Dấu hiệu thường là xe mạnh liên tục phải ghìm đến mức mất vui, xe tầm ngắn liên tục bị dồn, hoặc tầm đi chênh nhau đến mức điểm sạc và điểm đổ xăng không thể gộp. Tách thành hai nhóm lúc đó là giải pháp thực tế, không phải dấu hiệu của bất hòa. Điều quan trọng là tách có kế hoạch, chứ không phải bỏ lại một ai đó trên đường.',
      'Việc tách nhóm nên được quyết định ở một điểm dừng, hoặc tốt nhất là từ trước chuyến, chứ không quyết định giữa đường lúc mọi người đang mệt và bực. Mỗi nhóm có người dẫn đầu và người đóng đoàn riêng, đi theo nhịp riêng và dùng chung bộ tín hiệu đã thống nhất. Hai nhóm cùng thống nhất lộ trình, điểm hẹn và điểm hẹn dự phòng, chọn ở nơi dễ nhận, an toàn, có chỗ đỗ và chỗ nghỉ. Nhóm tới điểm hẹn trước nhắn cho nhóm kia, nhưng chỉ nhắn sau khi đã dừng xe.',
      'Để chuyến vẫn vui, hãy chia nhóm theo nhịp chứ không theo loại xe, vì xe điện và xe xăng vẫn có thể đi cùng một nhóm nếu tầm đi và nhịp hợp nhau. Hãy cho nhóm đi nhanh một việc để làm ở điểm hẹn, như chọn chỗ ăn hay tìm chỗ nghỉ, thay vì ngồi chờ sốt ruột. Nhóm đi chậm không nên có cảm giác bị bỏ rơi, nên nhóm nhanh hãy đợi đủ lâu để hai nhóm cùng ăn, cùng nghỉ. Đừng đùa kiểu chê xe nhỏ hay xe chậm, vì một câu đùa vô ý có thể làm cả nhóm mất vui.',
      'Dù tách hay không, mỗi nhóm đều cần một phương án cho xe hỏng hoặc hết pin: ai ở lại với xe, ai đi tìm trợ giúp, cả nhóm chờ ở đâu. Nếu là xe điện hết pin giữa đường, bài xe máy điện hết pin giữa đường trên trang hướng dẫn cách dừng xe an toàn, dắt hoặc nhờ kéo xe và những điều cần tránh. Không ai nên bị để lại một mình ở chỗ vắng, và xe có dấu hiệu hỏng nặng thì giao cho thợ. Phần tổ chức đoàn nói chung đã có bài tổng hợp phượt đoàn trên trang, còn chuyện bất đồng giữa chuyến và người bị tách khỏi đoàn có những bài riêng. Người mới được rủ vào nhóm chưa quen nên đọc bài về việc tham gia chuyến đi của nhóm chưa quen trên trang.'
    ])
  ],
  checklist: [
    'Hỏi tầm đi thực tế của từng xe và sức của từng người trước chuyến, lấy ước lượng thận trọng.',
    'Chọn xe hoặc người giới hạn nhất làm nhịp chung, gọi tên trung tính, không chê ai.',
    'Gộp đổ xăng, sạc pin và nghỉ vào cùng một điểm dừng chọn theo xe tầm ngắn.',
    'Xác nhận điểm sạc, điểm đổ xăng và điểm dự phòng cho mỗi chặng trước khi khởi hành.',
    'Xếp xe điện hay xe tầm ngắn gần đầu đoàn; thống nhất người dẫn, người đóng đoàn và tín hiệu xin dừng.',
    'Thống nhất phương án khi xe hỏng hay hết pin, và điểm hẹn nếu phải tách thành hai nhóm.'
  ],
  steps: [
    { title: 'Hỏi tầm đi và sức của từng người', detail: 'Trước chuyến, mỗi người nói tầm đi thực tế của xe mình và mức sức của bản thân; nghe nhau mà không đánh giá.' },
    { title: 'Chọn mắt xích giới hạn làm nhịp chung', detail: 'Xác định xe hoặc người giới hạn nhất ở từng chặng, lấy đó làm nhịp chạy của cả đoàn thay vì lấy xe mạnh nhất.' },
    { title: 'Gộp điểm dừng và xác nhận điểm sạc, đổ xăng', detail: 'Chọn điểm dừng theo xe tầm ngắn, dùng chung cho đổ xăng, sạc pin và nghỉ; xác nhận điểm chính và điểm dự phòng.' },
    { title: 'Xếp đội hình và thống nhất tín hiệu', detail: 'Xe điện hay xe tầm ngắn gần đầu, người mới ở giữa, người đóng đoàn bình tĩnh ở cuối; ai cũng được ra tín hiệu xin dừng.' },
    { title: 'Điều chỉnh hoặc tách nhóm có kế hoạch', detail: 'Nếu nhịp vẫn lệch quá nhiều thì tách hai nhóm có điểm hẹn và có phương án cho xe hỏng hay hết pin.' }
  ],
  warnings: [
    'Không lấy nhịp của xe mạnh nhất làm nhịp chung: xe giới hạn sẽ bị đuổi, hao xăng hay pin nhanh hơn và dễ mắc lỗi khi lái.',
    'Không dựa vào thông tin điểm sạc hay điểm đổ xăng chưa xác nhận, và không để xe tầm ngắn chạy cạn mới tính chuyện dừng.',
    'Không bỏ ai lại một mình ở chỗ vắng khi xe hỏng hay hết pin; việc liên quan tới phanh, xăng, điện nên giao cho thợ.'
  ],
  notes: [
    'Mọi mô tả về xe số, xe ga, xe côn tay và xe điện trong bài chỉ ở mức đặc tính chung; từng xe cụ thể có thể khác, hãy đối chiếu sách hướng dẫn sử dụng của xe.',
    'Bài không nêu thông số, giá hay địa điểm cụ thể; thông tin điểm sạc và điểm đổ xăng cần được người trong đoàn tự xác nhận trước chuyến.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần nói về nhiên liệu, sạc pin và bảo dưỡng',
    'Tài liệu đào tạo lái xe an toàn và kỹ năng đi xe máy theo nhóm của các cơ sở đào tạo lái xe'
  ],
  related: [
    'di-xe-may-theo-nhom-an-toan',
    'phuot-doan',
    'di-duong-dai-bang-xe-tay-ga-kiem-tra-day-curoa-va-bo-noi-do-deo-cho-do-va-nhip-nghi',
    'can-tang-toc-gap-de-vuot-hay-thoat-xe-so-xe-ga-xe-con-tay-va-xe-dien-dap-ga-khac-nhau-nen-chuan-bi-gi-truoc',
    'tham-gia-chuyen-di-xe-may-cua-nhom-chua-quen-hoi-gi-truoc-thu-nhip-o-doan-dau-va-quyen-rut-lui-khi-khong-hop'
  ]
};
