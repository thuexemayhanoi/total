// AI WIKI TOTAL — S02020 (topic V2 T002207); không nêu số liệu hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-khong-con-so-bao-duong-hoac-cong-to-met-hong-khong-biet-da-di-bao-xa-dung-lich-bao-duong-theo-thoi-gian-va-dau-hieu',
  title: 'Xe không còn sổ bảo dưỡng hoặc công tơ mét hỏng, không biết đã đi bao xa: dựng lịch bảo dưỡng theo thời gian và dấu hiệu',
  seoTitle: 'Công tơ mét hỏng, mất sổ bảo dưỡng: dựng lại lịch cho xe máy',
  metaDescription: 'Xe không còn sổ bảo dưỡng, công tơ mét hỏng hay đã thay? Dựng lại lịch bằng thời gian, mức sử dụng và dấu hiệu quan sát được, rồi đặt mốc mới và ghi sổ.',
  summary: 'Xe mua lại hoặc được cho tặng thường không kèm sổ bảo dưỡng, và đôi khi công tơ mét đã hỏng hay từng thay nên không ai biết xe đã đi bao xa. Bài này cho thấy lịch bảo dưỡng vẫn dựng lại được bằng ba nguồn thay cho số km: thời gian kể từ lần thay chắc chắn, mức sử dụng ước lượng từ thói quen đi lại và tình trạng quan sát được. Các hạng mục được chia thành nhóm đi theo thời gian và nhóm đi theo mức sử dụng để biết nên đếm ngày hay nhìn dấu hiệu. Bài cũng hướng dẫn đặt lại mốc bằng một lần kiểm tra toàn diện rồi ghi sổ mới có ngày và ảnh, nhìn xích, má phanh, lốp, nhớt, ắc quy thay cho con số, và ghi chú chuyển tiếp khi công tơ mét đã thay hoặc hỏng.',
  quickAnswer: 'Không có số km, bạn vẫn dựng được lịch bảo dưỡng bằng thời gian, mức sử dụng và tình trạng nhìn thấy của xe. Hãy đưa xe đi kiểm tra toàn diện ở nơi tin cậy, coi ngày đó là mốc mới, rồi ghi sổ có ngày, mô tả việc đã làm và ảnh. Nhóm nhớt, ắc quy, cao su và xăng để lâu tính theo thời gian, còn xích, má phanh, lốp và dây curoa theo dõi bằng dấu hiệu mòn. Khi công tơ mét đã thay hoặc hỏng, hãy chụp số cuối của đồng hồ cũ, số đầu của đồng hồ mới rồi ghi một dòng chuyển tiếp; việc về phanh và hệ lái nên để thợ.',
  keyPoints: [
    'Số km chỉ là cách đo gián tiếp; khi mất số km vẫn dựng lại lịch bằng thời gian, mức sử dụng ước lượng và tình trạng quan sát được.',
    'Nhóm đi theo thời gian gồm nhớt, ắc quy, cao su, xăng để lâu; nhóm đi theo mức sử dụng gồm xích, má phanh, lốp, dây curoa.',
    'Đặt lại mốc bằng một lần kiểm tra toàn diện ở nơi tin cậy rồi ghi sổ mới có ngày, mô tả việc làm và ảnh.',
    'Dùng dấu hiệu nhìn thấy được như độ chùng xích, má phanh, rãnh gai lốp, màu nhớt, cọc ắc quy thay cho con số kỹ thuật.',
    'Khi công tơ mét thay hoặc hỏng, chụp số cuối cũ và số đầu mới, ghi một dòng chuyển tiếp để lần sau không mất mốc.'
  ],
  category: 'garage',
  hub: 'bao-duong-dinh-ky',
  date: '2026-10-24',
  updated: '2026-10-24',
  entities: ['sổ bảo dưỡng', 'công tơ mét', 'số km', 'lịch bảo dưỡng', 'kiểm tra toàn diện', 'độ chùng xích', 'má phanh', 'ắc quy'],
  keywords: ['công tơ mét hỏng lịch bảo dưỡng xe máy', 'xe không còn sổ bảo dưỡng', 'không biết xe đã đi bao xa', 'bảo dưỡng xe máy theo thời gian', 'ghi chú chuyển tiếp khi thay công tơ mét'],
  sections: [
    P('Mất mốc số km: vì sao lịch bảo dưỡng vẫn dựng lại được', [
      'Chiếc xe mua lại từ người quen, được cho tặng hay do người thân để lại thường đến tay chủ mới mà không kèm sổ bảo dưỡng. Có xe còn thêm rắc rối là công tơ mét đã hỏng, từng được thay hoặc đứng yên ở một con số chẳng ai tin. Lúc đó người chủ mới hay rơi vào hai thái cực: làm hết mọi hạng mục cho chắc, hoặc bỏ mặc vì không biết bắt đầu từ đâu. Tin tốt là lịch bảo dưỡng không phụ thuộc hoàn toàn vào một con số trên đồng hồ.',
      'Số km thực ra chỉ là cách đo gián tiếp. Thứ ta muốn biết là chi tiết nào đã mòn tới đâu, già tới đâu, còn quãng đường chỉ là một đại diện tiện lợi. Hai chiếc xe cùng số km vẫn có thể ở hai tình trạng rất khác nhau, tùy cách đi, loại đường và việc chăm sóc. Vì vậy ngay cả khi đồng hồ chạy đúng, thợ giỏi vẫn nhìn vào chính chi tiết. Khi mất con số, bạn chỉ phải làm điều thợ vẫn làm: đọc thẳng tình trạng của chiếc xe.',
      'Có ba nguồn thông tin thay được số km. Nguồn thứ nhất là thời gian kể từ lần thay mà bạn biết chắc, chẳng hạn lần thợ làm trước mặt bạn hoặc ngày ghi trên hóa đơn. Nguồn thứ hai là mức sử dụng ước lượng từ thói quen hằng ngày, như đi làm xa hay gần, phố đông hay đường thoáng, có chở nặng hay không. Nguồn thứ ba là tình trạng quan sát được, tức là nhìn và sờ vào xích, má phanh, lốp, nhớt, ắc quy ngay hôm nay. Không nguồn nào hoàn hảo, nhưng khi cả ba cùng chỉ một hướng thì độ tin cậy tăng đáng kể.',
      'Cần nói rõ giới hạn của cách làm này. Lịch dựng lại chỉ là ước lượng thận trọng, và khi chưa chắc thì nên nghiêng về phía làm sớm, nhất là với phanh, lốp và hệ lái. Sách hướng dẫn sử dụng của xe vẫn là tài liệu gốc, còn việc của bạn là tìm mốc xuất phát khi số km không còn dùng được. Bảng mốc theo quãng đường nằm ở bài lịch bảo dưỡng xe máy định kỳ theo số km trên trang, còn cách đọc ODO và TRIP khi đồng hồ vẫn tốt có ở bài đồng hồ ODO và TRIP trên xe máy trên trang.'
    ]),
    P('Hai nhóm hạng mục: nhóm đi theo thời gian và nhóm đi theo mức sử dụng', [
      'Nhóm thứ nhất gồm những hạng mục già đi theo năm tháng, kể cả khi xe đứng yên trong nhà. Nhớt trong máy hút ẩm và mất dần khả năng bảo vệ, ắc quy tự yếu đi, các chi tiết cao su như ống dẫn, gioăng thường cứng và nứt dần, còn xăng để lâu trong bình có thể biến chất và gây khó nổ máy. Dầu phanh cũng thường được khuyến nghị thay theo thời gian chứ không chỉ theo quãng đường. Thước đo chính của nhóm này là lịch, nên mất số km gần như không ảnh hưởng.',
      'Khi không có bằng chứng về lần thay gần nhất, cách an toàn là coi như hạng mục đó chưa từng được làm. Bằng chứng là hóa đơn, nhãn dán nhắc lần thay ở tiệm, ảnh cũ của chủ trước hoặc lời xác nhận của thợ quen, chứ không phải trí nhớ mơ hồ của người bán. Với nhớt, lọc nhớt và những việc đơn giản tương tự, thay một lần để lấy mốc sạch thường là quyết định hợp lý. Với ắc quy, hãy để thợ kiểm tra khả năng giữ điện thay vì đoán theo tuổi. Dầu phanh, nhớt hộp số và xăng để lâu nên giao cho thợ, tránh mọi nguồn lửa.',
      'Nhóm thứ hai gồm những hạng mục mòn theo mức sử dụng, tức là theo cách và số lần xe làm việc. Xích hoặc dây curoa, má phanh, lốp, bộ ly hợp và các bạc đạn đều thuộc nhóm này, mòn nhanh hay chậm tùy xe được dùng ra sao. Để ước lượng mức sử dụng khi không có số km, hãy tự hỏi: xe dùng hằng ngày hay thỉnh thoảng, phố đông hay đường thoáng, chở một mình hay chở nặng, có hay đi qua đường bụi và nước không. Nếu gặp được người chủ trước, hãy hỏi đúng những câu này thay vì hỏi xe đã đi bao xa.',
      'Thực tế nhiều hạng mục nằm giữa hai nhóm. Nhớt vừa già theo thời gian vừa bẩn theo quãng đường, lốp vừa mòn gai vừa lão hóa cao su, ắc quy vừa yếu theo tuổi vừa mệt vì những lần đề máy. Với các hạng mục này, mốc nào tới trước thì theo mốc đó, và khi không biết cả hai thì lấy tình trạng quan sát được làm trọng tài. Cách gắn từng nhóm việc vào lịch nhắc đã có ở bài lịch bảo dưỡng xe máy trên trang, nên ở đây chỉ cần nhớ: nhóm thời gian thì đếm ngày, nhóm mức sử dụng thì nhìn dấu hiệu.'
    ]),
    P('Đặt lại mốc: một lần kiểm tra toàn diện rồi ghi sổ mới có ngày và ảnh', [
      'Thay vì cố đoán quá khứ của xe, hãy tạo ra một mốc mới ngay hôm nay. Cách thực tế nhất là đưa xe tới nơi tin cậy để kiểm tra toàn diện một lần, rồi coi ngày đó là điểm xuất phát của cuốn sổ mới. Nơi tin cậy có thể là tiệm bạn đã quen, xưởng dịch vụ của nhà sản xuất hoặc thợ được người quen giới thiệu, miễn là họ chịu giải thích và cho bạn xem tận mắt. Hãy nói thẳng rằng xe không còn sổ và không biết số km thật, để thợ khỏi dựa vào giả định thiếu cơ sở.',
      'Buổi kiểm tra nên đi qua những nhóm việc chính: nhớt máy và nhớt các bộ phận khác tùy xe, lọc gió, bugi, xích hoặc dây curoa, má phanh và dầu phanh, lốp cả về gai lẫn độ già của cao su, ắc quy cùng cọc điện, ống cao su, độ rơ của hệ lái và phuộc. Danh sách chính xác tùy từng xe, nên hãy đối chiếu sách hướng dẫn nếu còn giữ hoặc tìm lại được. Xin thợ chỉ cho bạn thấy từng chi tiết đã mòn hoặc hư, thay vì chỉ nghe kết luận. Phần việc ở phanh, hệ lái, bánh xe và trục bánh luôn nên để thợ làm, bạn chỉ cần quan sát và hỏi.',
      'Sau buổi kiểm tra, hãy chia kết quả thành ba nhóm để quyết định có thứ tự. Nhóm làm ngay gồm những gì ảnh hưởng an toàn như má phanh mòn sát, lốp nứt hoặc nhẵn, xích quá chùng hay quá khô, và thợ nên là người xử lý. Nhóm thay một lần để lấy mốc sạch gồm những hạng mục không có bằng chứng về lần thay cuối và khá đơn giản, như nhớt hay lọc. Nhóm theo dõi gồm những chi tiết còn dùng được nhưng bắt đầu có dấu hiệu mòn, bạn ghi lại để nhìn lại sau.',
      'Tiếp theo là ghi sổ mới, và sổ này khác sổ cũ ở chỗ trung thực về những gì chưa biết. Dòng đầu ghi ngày kiểm tra, nơi làm, những việc đã làm và một câu nêu rõ lịch sử trước ngày này là chưa rõ. Kèm theo là ảnh bảng đồng hồ, phiếu dịch vụ, bộ phận cũ vừa tháo và những chi tiết bạn sẽ theo dõi như má phanh, xích hay rãnh gai lốp. Các cột nên có và mẫu bảng đơn giản đã có ở bài nhật ký bảo dưỡng xe máy trên trang. Từ dòng đầu tiên ấy, mọi mốc về sau đếm từ ngày đã ghi chứ không còn đếm từ một con số không ai tin.'
    ]),
    P('Dùng dấu hiệu quan sát được thay cho con số: xích, má phanh, lốp, nhớt và ắc quy', [
      'Với xích, hãy nhìn và sờ vào độ chùng thay vì tìm một con số. Tắt máy, để xe nguội, dựng xe vững theo sách hướng dẫn, rồi ấn nhẹ ngón tay vào đoạn giữa xích để cảm nhận nó võng nhiều hay ít. Xích quá chùng thường kêu lạch cạch, xích quá căng lại làm ổ trục chịu lực nhiều hơn, nên cảm giác đúng thường nằm ở giữa. Xích khô gỉ, mắt xích cứng hoặc răng nhông nhọn như vây cá đều đáng nhờ thợ xem. Xe tay ga dùng dây curoa, thường nứt chân hoặc bóng mặt khi già, nên để thợ mở nắp kiểm tra; căn chỉnh hay thay xích, nhông cũng nên giao cho thợ.',
      'Má phanh là chi tiết không nên đoán, nhưng vẫn có dấu hiệu bạn quan sát được an toàn. Nhiều xe có khe nhỏ để nhìn bề dày má đĩa hoặc vạch báo mòn ở cụm phanh tang trống, nên bạn có thể quan sát lớp má còn lại chỉ bằng mắt. Cảm giác ở tay phanh và chân phanh cũng nói nhiều điều: hành trình dài hơn trước, phanh ăn muộn, tiếng rít hoặc tiếng kim loại cọ nhau là dấu hiệu nên đi kiểm tra sớm. Đĩa phanh có rãnh sâu hoặc đổi màu bất thường cũng đáng để thợ xem. Đừng tự tháo cụm phanh hay tự xả gió, thay dầu; hãy chụp ảnh chi tiết bạn thấy và mang đến thợ.',
      'Lốp có thể quan sát khá đầy đủ bằng mắt. Rãnh gai còn rõ hay đã gần nhẵn, vạch báo mòn trong rãnh gai nếu có, và cao su có mòn lệch hay không là những điều dễ nhận ra. Lốp còn gai vẫn có thể đã già, với dấu hiệu là vết nứt nhỏ ở chân gai hoặc hông lốp và bề mặt chai cứng. Hãy xem thêm vết phồng, vết cắt sâu và nhờ thợ chỉ cách đọc mã ngày sản xuất trên thành lốp. Áp suất đúng thường nằm trên nhãn dán của xe hoặc trong sách hướng dẫn; việc thay hay vá lốp nên để thợ làm.',
      'Với nhớt, hãy kiểm tra khi xe đứng thẳng, máy đã nguội hoặc đã để lắng theo sách hướng dẫn, rồi xem giọt nhớt trên que thăm hoặc qua kính ngắm. Nhớt còn tốt thường trong và có màu từ vàng hổ phách đến nâu; nhớt sẫm chưa chắc là lỗi, nhưng nhớt đặc sệt, mùi khét hoặc đục như cà phê sữa là dấu hiệu nên gặp thợ sớm. Với ắc quy, hãy nhìn cọc điện: lớp trắng xanh sùi quanh cọc, vỏ phồng hoặc đề máy yếu, đèn mờ khi đề đều là dấu hiệu ắc quy đã mệt. Khi chạm vào gần ắc quy hãy tắt máy, đeo găng, tránh tia lửa và lửa gần xăng, rồi để thợ kiểm tra trước khi quyết định thay.'
    ]),
    P('Khi công tơ mét đã thay hoặc hỏng: ghi chú chuyển tiếp và thói quen theo dõi từ nay', [
      'Nếu công tơ mét hỏng và sắp được sửa hoặc thay, đây là lúc quan trọng nhất để không mất mốc lần nữa. Trước khi thợ tháo đồng hồ cũ, hãy chụp ảnh bảng đồng hồ với con số cuối còn đọc được, dù bạn nghi nó đã sai. Khi đồng hồ mới được lắp, hãy chụp lại ngay con số đầu tiên hiện ra, vì nhiều đồng hồ mới bắt đầu từ một số thấp chẳng liên quan đến quãng đường thật của xe. Thiếu hai tấm ảnh cùng ngày này, về sau chẳng ai phân biệt được con số trên đồng hồ là của chiếc xe hay chỉ của chiếc đồng hồ.',
      'Ghi chú chuyển tiếp nên viết thành một dòng riêng trong sổ, tách khỏi các dòng bảo dưỡng. Dòng này nêu ngày thay hoặc sửa, số cuối của đồng hồ cũ, số đầu của đồng hồ mới, lý do thay và độ tin cậy của từng con số, ghi bằng chữ như chắc chắn, ước lượng hay không rõ. Sự minh bạch này có ích khi bán xe, vì người mua thấy lịch sử rõ ràng thay vì một con số không giải thích được. Người mua xe có đồng hồ từng thay có thể xem bài công tơ mét xe cũ có bị chỉnh không trên trang để đối chiếu số km với độ mòn thực tế.',
      'Khi đồng hồ không còn đáng tin, hãy dùng những thước đo thay thế đơn giản. Một là tần suất đổ xăng: ghi lại bạn đổ đầy bình mấy lần giữa hai lần kiểm tra, vì số lần tăng lên nghĩa là xe được dùng nhiều hơn. Hai là ứng dụng ghi quãng đường có sẵn trên điện thoại, bật trong những chuyến đi đều đặn để hình dung quãng đi hằng tuần. Ba là ghi lại những chuyến đi dài hoặc giai đoạn xe nằm yên. Những thước đo này không chính xác như một chiếc đồng hồ tốt, nhưng đủ để biết xe được dùng nhiều hay ít hơn lần kiểm tra trước.',
      'Từ nay, hãy biến việc quan sát thành thói quen nhỏ và đều. Mỗi tháng dành một lúc ngắn nhìn xích, lốp, nhớt, cọc ắc quy và cảm giác ở tay phanh, rồi ghi một dòng nếu có thay đổi. Làm lại kiểm tra toàn diện sau mùa mưa, sau chuyến đi dài, sau thời gian xe đỗ lâu hoặc khi có triệu chứng mới. Nếu sau này tìm lại được sổ cũ hay hóa đơn cũ, hãy bổ sung vào sổ mới như thông tin về quá khứ, đừng ghi đè mốc đã đặt. Kế hoạch này chỉ là khung tạm thời nghiêng về phía cẩn thận, không thay sách hướng dẫn và không phải lý do để hoãn việc an toàn.'
    ])
  ],
  checklist: [
    'Tìm bằng chứng về lần thay gần nhất: hóa đơn, nhãn dán ở tiệm, ảnh cũ, lời thợ quen.',
    'Ước lượng mức sử dụng: dùng hằng ngày hay thỉnh thoảng, phố đông hay đường thoáng, chở nặng hay không.',
    'Đưa xe đi kiểm tra toàn diện một lần ở nơi tin cậy và nói rõ xe không còn sổ, không biết số km thật.',
    'Ghi sổ mới có ngày, mô tả việc đã làm, ảnh đồng hồ, phiếu dịch vụ và ảnh chi tiết cần theo dõi.',
    'Mỗi tháng nhìn nhanh xích, lốp, nhớt, cọc ắc quy và cảm giác tay phanh, ghi một dòng nếu có thay đổi.',
    'Khi công tơ mét thay hoặc hỏng, chụp số cuối của đồng hồ cũ và số đầu của đồng hồ mới rồi ghi dòng chuyển tiếp.'
  ],
  steps: [
    { title: 'Gom bằng chứng về quá khứ', detail: 'Tìm hóa đơn, nhãn dán nhắc lần thay, ảnh cũ và hỏi chủ trước cách xe được dùng thay vì hỏi xe đã đi bao xa.' },
    { title: 'Chia hạng mục thành hai nhóm', detail: 'Nhớt, ắc quy, cao su, xăng để lâu tính theo thời gian; xích, má phanh, lốp, dây curoa theo dõi bằng mức sử dụng và dấu hiệu mòn.' },
    { title: 'Kiểm tra toàn diện một lần', detail: 'Đưa xe tới nơi tin cậy, nhờ thợ chỉ từng chi tiết đã mòn và phân thành việc làm ngay, việc thay lấy mốc sạch, việc theo dõi.' },
    { title: 'Ghi sổ mới', detail: 'Dòng đầu ghi ngày, nơi làm, việc đã làm và câu nêu lịch sử trước đó chưa rõ, kèm ảnh.' },
    { title: 'Ghi chuyển tiếp và theo dõi đều', detail: 'Chụp số cuối cũ và số đầu mới, ghi dòng chuyển tiếp, rồi mỗi tháng nhìn nhanh các dấu hiệu chính.' }
  ],
  warnings: [
    'Không tự tháo cụm phanh, xả gió hay thay dầu phanh; mọi việc đụng tới phanh, hệ lái và trục bánh nên để thợ làm.',
    'Không coi nhớt sẫm hay một con số trên đồng hồ cũ là kết luận duy nhất; hãy nhìn thêm tình trạng thật của từng chi tiết.',
    'Khi chạm vào gần ắc quy hoặc xăng, hãy tắt máy, đeo găng và tránh tia lửa, lửa; ắc quy yếu nên để thợ kiểm tra và thay.'
  ],
  notes: [
    'Mỗi dòng xe có hạng mục và cách kiểm tra khác nhau; hãy đối chiếu sách hướng dẫn sử dụng của xe và hỏi thợ khi chưa chắc.',
    'Lịch dựng lại khi thiếu số km chỉ là ước lượng thận trọng; khi có thêm hồ sơ cũ, hãy bổ sung vào sổ mới mà không xóa mốc đã đặt.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần nói về bảo dưỡng và kiểm tra định kỳ',
    'Tài liệu kỹ thuật cơ bản về bảo dưỡng xe máy và tài liệu đào tạo lái xe an toàn'
  ],
  related: [
    'dong-ho-odo-va-trip-tren-xe-may-doc-so-km-dat-lai-trip-va-dung-de-theo-doi-xe',
    'lich-bao-duong-xe-may-dinh-ky-theo-so-km',
    'xe-cu-bi-chinh-cong-to-met',
    'lich-bao-duong-xe-may',
    'nhat-ky-bao-duong-xe-may'
  ]
};
