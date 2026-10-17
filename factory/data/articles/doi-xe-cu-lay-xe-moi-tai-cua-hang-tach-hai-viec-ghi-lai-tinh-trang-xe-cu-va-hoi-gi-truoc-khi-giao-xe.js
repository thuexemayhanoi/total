// AI WIKI TOTAL — S01777; đổi xe cũ lấy xe mới tại cửa hàng: tách hai việc, ghi lại, hỏi và kiểm tra; không nêu giá, số liệu, thủ tục, tên hãng hay mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'doi-xe-cu-lay-xe-moi-tai-cua-hang-tach-hai-viec-ghi-lai-tinh-trang-xe-cu-va-hoi-gi-truoc-khi-giao-xe',
  title: 'Đổi xe cũ lấy xe mới tại cửa hàng: tách hai việc, ghi lại tình trạng xe cũ và hỏi gì trước khi giao xe',
  seoTitle: 'Đổi xe cũ lấy xe mới tại cửa hàng: chuẩn bị và hỏi gì trước khi giao',
  metaDescription: 'Đổi xe cũ lấy xe mới tại cửa hàng nên tách hai việc: chụp ảnh và ghi lỗi xe cũ, hỏi điều kiện nhận xe, vẫn kiểm tra xe mới và ghi lại điều đã thống nhất.',
  summary: 'Bài giải thích vì sao khi đổi xe cũ lấy xe mới tại cửa hàng nên tách việc bán xe cũ khỏi việc mua xe mới để nhìn rõ từng phần. Nội dung nêu cách chuẩn bị xe cũ bằng ảnh, clip, ghi chú lỗi đã biết, dọn đồ cá nhân và gỡ liên kết với điện thoại, những câu nên hỏi về cách cửa hàng nhận xét, thứ tự giao nhận và cách xử lý nếu có thêm lỗi, việc vẫn kiểm tra xe mới như một lần mua bình thường, cách đi lại hôm giao nhận và những điều nên ghi bằng giấy hoặc tin nhắn.',
  quickAnswer: 'Hãy coi việc đổi xe là hai việc riêng: bán xe cũ và mua xe mới. Trước khi đi, chụp ảnh, quay clip, ghi lỗi đã biết, dọn đồ cá nhân và gỡ liên kết điện thoại. Tại cửa hàng, hỏi họ nhận xét gì, có điều kiện nào, xe cũ giao trước hay sau xe mới và xử lý ra sao nếu thấy thêm lỗi. Xe mới vẫn phải kiểm tra kỹ trước khi ký nhận.',
  keyPoints: [
    'Xe cũ là một lần bán, xe mới là một lần mua; trộn vào một cuộc nói chuyện thì khó nhìn rõ từng phần, nên hãy xem và quyết định riêng từng việc.',
    'Trước khi mang xe cũ đi, chụp ảnh, quay clip, ghi lại lỗi đã biết, gom giấy tờ, lấy hết đồ cá nhân, gỡ giá đỡ và thiết bị định vị, hủy liên kết ứng dụng nếu có.',
    'Tại cửa hàng, hỏi họ nhận xét gì về xe cũ, có điều kiện nào, giao xe cũ trước hay sau khi nhận xe mới và nếu phát hiện thêm lỗi thì hai bên trao đổi ra sao; không mặc định cửa hàng nào cũng nhận xe cũ.',
    'Đã giao xe cũ cũng không nên vội ký nhận xe mới: vẫn xem thân xe, đèn, phanh, lốp, phụ kiện và đối chiếu điều đã thỏa thuận như một lần mua bình thường.',
    'Chuẩn bị cách đi về nếu xe cũ đã để lại mà xe mới chưa giao, và ghi điều đã thống nhất cùng ngày giao nhận bằng giấy hoặc tin nhắn.'
  ],
  category: 'guide',
  hub: 'mua-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['đổi xe cũ lấy xe mới', 'thu cũ đổi mới', 'ảnh và clip tình trạng xe', 'liên kết ứng dụng với xe', 'thứ tự giao nhận xe', 'tin nhắn ghi lại thỏa thuận'],
  keywords: ['đổi xe cũ lấy xe mới tại cửa hàng', 'thu cũ đổi mới xe máy', 'đổi xe máy cũ lấy xe mới', 'giao xe cũ khi nhận xe mới', 'chuẩn bị xe cũ trước khi đổi xe'],
  sections: [
    P('Vì sao nên tách việc bán xe cũ và mua xe mới', [
      'Người muốn lên đời xe thường chỉ nghĩ tới một chuyện: mang xe cũ tới, nhận xe mới, rồi chạy về. Trong cửa hàng, hai việc ấy hay được nói liền một mạch nên nghe như một cuộc đổi, giống đưa vật này lấy vật kia. Thực chất đó là hai giao dịch khác nhau. Chiếc xe cũ là một lần bán, chiếc xe mới là một lần mua, và mỗi bên có tình trạng cần xem, điều kiện cần hỏi và điều đã thống nhất riêng. Cách gọi thu cũ đổi mới nghe gọn, nhưng sự gọn ấy dễ che mất việc bạn đang phải quyết định hai điều cùng lúc. Bài này đi theo hướng tách từng việc, để lần lên đời không bỏ sót bước nào ở phía xe cũ lẫn phía xe mới.',
      'Gộp hai việc còn làm bạn khó nhìn rõ từng phần. Khi mọi thứ được tính chung, bạn khó biết mình đang hài lòng với chiếc xe mới, với cách cửa hàng nhìn nhận xe cũ, hay chỉ với cảm giác tiện vì xong trong một buổi. Sự tiện lợi là có thật, nhưng nó không nên thay cho việc xem xét từng phần. Chiếc xe mới có điều chưa ưng thì bạn dễ bỏ qua vì ngại ảnh hưởng tới cuộc nói chuyện về xe cũ; xe cũ bị nhận xét khắt khe thì bạn dễ gật đầu với xe mới cho đủ cặp. Giữ hai việc song song nhưng riêng biệt giúp mỗi quyết định đứng trên lý do của chính nó. Chuyện giá cả nên bàn riêng ở từng việc, và bài này không đi vào chuyện đó.',
      'Cũng cần nói rõ rằng không phải cửa hàng nào cũng nhận xe cũ. Nếu cửa hàng có nhận, đó là một dịch vụ riêng, cách làm và điều kiện đi kèm tùy từng nơi. Vì vậy đừng mặc định chiếc xe của bạn chắc chắn được nhận, và đừng hẹn ngày lấy xe mới khi chưa nghe cửa hàng nói gì về xe cũ. Đổi tại cửa hàng cũng không phải đường duy nhất: bán cho người khác là một lựa chọn bạn có thể đặt lên bàn để cân nhắc, dù bài này không bàn chi tiết. Điều đáng làm là hỏi sớm, hỏi bằng lời rõ ràng và coi câu trả lời của cửa hàng là một phần thông tin giúp bạn quyết định, không phải điều hiển nhiên phải chấp nhận.'
    ]),
    P('Chuẩn bị xe cũ trước khi mang tới cửa hàng', [
      'Việc đầu tiên là ghi lại chiếc xe đúng như hôm nay. Chụp ảnh từ nhiều phía gồm đầu xe, đuôi xe, hai bên, yên, tay lái, bánh, lốp và đồng hồ lúc bật điện, rồi quay một đoạn clip chậm quanh xe để thấy vết trầy, móp, ố hoặc nứt ốp nhựa. Chụp ở nơi đủ sáng, tránh bóng đổ làm mất những vết xước nhỏ. Ảnh và clip có hai tác dụng: giúp bạn nhớ xe cũ ở tình trạng nào khi rời tay, và là căn cứ chung nếu sau này hai bên nhìn nhận khác nhau về một vết hỏng. Nên làm xong trước khi mang xe đi, vì ảnh chụp vội ngay tại cửa hàng thường bỏ sót những góc khuất.',
      'Bước tiếp theo là liệt kê những lỗi bạn đã biết. Tiếng kêu lạ ở một vị trí, đèn báo thỉnh thoảng sáng, phanh từng được sửa, chỗ từng bị ngã, đồ điện chạy chập chờn, máy khó nổ vào buổi sáng: tất cả nên viết thành một tờ ghi chú hoặc một tin nhắn gửi cho chính mình, để giữa lúc nói chuyện bạn không phải cố nhớ lại. Hãy ghi điều quan sát được, ví dụ nghe tiếng lạch cạch khi qua đoạn đường xóc, còn chi tiết nào gây ra là việc của người có chuyên môn. Nói rõ những gì mình biết thường giúp cuộc trao đổi đỡ rối. Đồng thời gom giấy tờ xe và giấy tờ cá nhân liên quan vào một chỗ, xem còn đủ và còn đọc được.',
      'Phần thứ ba là dọn xe. Lấy hết đồ trong cốp, hộc, giỏ, móc treo và các khe nhỏ gần yên; gỡ giá đỡ điện thoại, dây sạc, ổ cắm gắn thêm, camera hành trình nếu có và thiết bị định vị nếu bạn từng gắn. Với xe có kết nối điện thoại, hãy gỡ liên kết trong ứng dụng theo hướng dẫn của xe và đăng xuất tài khoản nếu xe có dùng, vì đưa xe đi rồi mới nhớ thì khó thao tác hơn. Cách gỡ tùy xe nên xem sách hướng dẫn hoặc hỏi thợ có chuyên môn. Gom luôn chìa chính, chìa phụ và điều khiển nếu có để biết mình giao những gì. Việc dọn đồ và gỡ liên kết cũng được nói trong bài về xe máy hết đời trước khi giao cho thợ hay người thu mua.'
    ]),
    P('Những điều nên hỏi về chiếc xe cũ', [
      'Cuộc nói chuyện nên bắt đầu bằng câu hỏi cửa hàng nhận xét gì về chiếc xe cũ và dựa vào điểm nào. Hãy để nhân viên xem xe ngay trước mặt bạn, chỉ ra chỗ họ để ý, còn bạn đối chiếu với ảnh và ghi chú đã chuẩn bị. Nghe họ nói về từng điểm cho bạn hiểu cửa hàng đang nhìn xe theo cách nào, thay vì chỉ nhận một nhận xét chung chung. Hỏi thêm cửa hàng nhận xe ở mọi tình trạng hay chỉ trong những điều kiện nhất định, và điều kiện ấy được ghi ở đâu. Câu trả lời tùy từng nơi, vì vậy đừng suy ra từ chuyện của người khác. Ghi lại những điều nghe được, kể cả khi chúng có vẻ hiển nhiên lúc đó.',
      'Câu hỏi quan trọng không kém là thứ tự giao nhận. Xe cũ được giao trước hay sau khi bạn nhận xe mới, giao cùng buổi hay khác ngày, và trong thời gian chờ thì ai giữ chiếc xe cũ, để ở đâu. Nếu xe cũ đã nằm lại cửa hàng mà xe mới chưa sẵn sàng, bạn nên biết chuyện gì sẽ diễn ra với nó trong lúc chờ. Hỏi tiếp khi nào hai bên coi việc giao xe cũ là hoàn tất, và bạn có được ghi nhận điều đó bằng giấy hoặc tin nhắn hay không. Về giấy tờ của xe cũ, hãy hỏi nơi có thẩm quyền xem việc xe sang tay người khác cần những gì và ai thực hiện, rồi đối chiếu với lời cửa hàng; bài này không mô tả thủ tục.',
      'Điều thứ ba cần bàn trước là chuyện gì xảy ra nếu cửa hàng phát hiện thêm lỗi sau khi đã xem xe kỹ hơn. Hãy hỏi trước: lỗi mới sẽ được báo cho bạn thế nào, bằng lời hay bằng tin nhắn, có cho bạn xem trực tiếp không, và điều chỉnh nào cần được hai bên đồng ý lại. Lúc việc ấy xảy ra, giữ giọng bình tĩnh và nhờ nhân viên chỉ tận nơi, rồi so với ảnh của bạn. Nếu lỗi đã có trong ghi chú gửi từ đầu, việc dẫn lại sẽ nhanh và rõ hơn nhiều. Nếu chưa có, hãy nghe lý do, xin thời gian suy nghĩ khi cần và đừng đồng ý ngay chỉ vì không khí cuộc nói chuyện. Mọi điều chỉnh đều nên được ghi lại.'
    ]),
    P('Vẫn kiểm tra xe mới như một lần mua bình thường', [
      'Dù chiếc xe cũ đã được xử lý xong, chiếc xe mới vẫn là một lần mua đầy đủ, nên đừng vội ký nhận chỉ vì cảm thấy phần khó nhất đã qua. Tâm lý đổi xong là về khiến nhiều người rút ngắn bước xem xe, trong khi đây là lúc rõ ràng nhất để phát hiện vết trầy từ kho, thiếu phụ kiện hoặc lắp ráp chưa chuẩn. Hãy xem xe ở nơi đủ sáng, đi một vòng quanh xe tìm vết trầy, móp, ốp nhựa lỏng hay vết bẩn lạ, nhìn các mối nối và dây điện lộ ra. Mọi điều bất thường nên được nói ngay tại chỗ và ghi lại trước khi bạn rời cửa hàng. Bài này chỉ nhắc ngắn phần ấy, vì nó giống mọi lần nhận xe khác.',
      'Sang phần thao tác, hãy bật điện, quan sát đồng hồ và đèn báo, thử đèn pha, đèn xi nhan, đèn phanh và còi. Bóp phanh để cảm nhận tay phanh: không lỏng bất thường, không cứng lạ và xe không tự trôi khi bóp. Nếu cảm giác phanh khác thường thì chưa lái xe đi, nhờ thợ của cửa hàng xem tại chỗ. Nhìn lốp xem có vết lạ, nghe tiếng vận hành lúc xe đứng yên, để ý mùi lạ và vết ướt dưới gầm. Cách vận hành và trình tự bật xe đều tùy xe, nên đối chiếu với sách hướng dẫn hoặc nhờ thợ có chuyên môn chỉ trực tiếp, đừng tự đoán.',
      'Cuối cùng là phụ kiện và những điều đã thỏa thuận. Xem đủ chìa đã nói, sách hướng dẫn, sổ bảo hành nếu có và các phụ kiện đi kèm, rồi đối chiếu với điều đã thống nhất lúc mua: thứ nào có trong thỏa thuận mà chưa thấy thì hỏi ngay. Chuyện giao xe cũ không nên làm bạn quên đối chiếu những điều này. Chỉ ký nhận khi đã xem đủ và thấy khớp; nếu cần thêm thời gian, hãy nói rõ điều gì chưa ổn và hỏi hướng xử lý. Thói quen đối chiếu ảnh, ghi nhận tại chỗ và chưa ký khi chưa xem kỹ cũng được bàn trong bài về vận chuyển xe máy đi xa, và dùng được ở đây. Giấy tờ liên quan xe mới thì hỏi cửa hàng và nơi có thẩm quyền.'
    ]),
    P('Đi lại hôm giao nhận và những điều nên ghi lại', [
      'Hãy nghĩ trước chuyện về nhà bằng gì. Nếu xe mới chưa giao cùng ngày mà xe cũ đã để lại, bạn cần một cách đi về chắc chắn: người quen đón, phương tiện công cộng, xe dịch vụ hoặc một chiếc xe khác trong nhà. Đừng để mình đứng ở cửa hàng không còn phương tiện nào rồi phải quyết định vội. Nên mang theo mũ bảo hiểm, áo mưa, đồ đã lấy khỏi xe cũ và sạc điện thoại. Nếu nhận xe lúc trời tối hoặc đang mưa, hãy cân nhắc dời lịch sang lúc thuận lợi hơn để bạn xem xe kỹ và có đường về an toàn. Chỉ tính tới việc cửa hàng cho đi nhờ hoặc mượn xe tạm khi họ đã nói rõ và bạn hiểu điều kiện.',
      'Những điều nên ghi bằng giấy hoặc tin nhắn gồm nội dung đã thống nhất về xe cũ, tức xe được nhận ở tình trạng nào và điều kiện kèm theo; ngày giờ, nơi giao nhận của cả xe cũ lẫn xe mới; người trực tiếp nhận xe cũ; thứ đi kèm xe mới; và cách hai bên xử lý nếu có phát sinh. Viết ngắn, mỗi ý một dòng, rồi gửi cho nhau bằng tin nhắn để cả hai cùng có bản lưu. Nếu cửa hàng có biên nhận, hãy đọc kỹ từng dòng trước khi ký, hỏi lại chỗ chưa hiểu và chụp lại bản đã ký. Điều gì còn mơ hồ về trách nhiệm hoặc giấy tờ thì hỏi nơi có thẩm quyền, đừng chỉ dựa vào lời nói miệng.',
      'Sau hôm giao nhận, giữ lại ảnh, clip, ghi chú và tin nhắn cho đến khi mọi việc của hai chiếc xe đã xong xuôi. Đọc lại danh sách đồ cá nhân; nếu nhớ ra thứ bỏ quên hoặc liên kết ứng dụng chưa gỡ, nói với cửa hàng sớm. Những lần đi đầu tiên trên xe mới, hãy chú ý tiếng lạ, cảm giác phanh, đèn và vết rò. Có điều bất thường thì bóp phanh, dừng xe an toàn rồi liên hệ cửa hàng hoặc thợ có chuyên môn, kèm ghi chú những gì bạn thấy. Cách chụp ảnh và quay clip để ghi lại tình trạng, như trong bài về vận chuyển xe máy đi xa, cũng dùng tốt cho xe mới ngay ngày nhận để về sau có mốc so sánh.'
    ])
  ],
  checklist: [
    'Quyết định riêng việc bán xe cũ và việc mua xe mới, không để hai việc trộn thành một cuộc nói chuyện.',
    'Chụp ảnh, quay clip xe cũ ở nơi đủ sáng và viết ra những lỗi đã biết trước khi mang xe đi.',
    'Lấy hết đồ cá nhân, gỡ giá đỡ và thiết bị định vị, hủy liên kết ứng dụng nếu có, gom chìa và giấy tờ.',
    'Hỏi cửa hàng về nhận xét, điều kiện, thứ tự giao nhận và cách xử lý nếu phát hiện thêm lỗi, rồi ghi lại câu trả lời.',
    'Kiểm tra xe mới kỹ trước khi ký nhận, chuẩn bị cách đi về và gửi cho nhau tin nhắn ghi điều đã thống nhất.'
  ],
  steps: [
    { title: 'Tách hai việc và chuẩn bị xe cũ', detail: 'Xem xe cũ là một lần bán, xe mới là một lần mua; chụp ảnh, quay clip, ghi lỗi đã biết, dọn đồ và gỡ liên kết trước khi mang xe đi.' },
    { title: 'Hỏi cửa hàng về xe cũ', detail: 'Hỏi cửa hàng nhận xét gì, có điều kiện nào, xe cũ giao trước hay sau xe mới và báo lỗi phát sinh ra sao; nếu cửa hàng có nhận xe cũ thì ghi lại câu trả lời.' },
    { title: 'Kiểm tra xe mới trước khi ký nhận', detail: 'Xem thân xe, đèn, phanh, lốp, phụ kiện và đối chiếu điều đã thỏa thuận; thấy phanh hoặc vận hành lạ thì chưa lái đi, nhờ thợ xem.' },
    { title: 'Chuẩn bị đường về và ghi lại thỏa thuận', detail: 'Có sẵn cách đi về nếu xe mới chưa giao cùng ngày, rồi ghi ngày giao nhận và điều đã thống nhất bằng giấy hoặc tin nhắn.' }
  ],
  warnings: [
    'Đừng mặc định cửa hàng nào cũng nhận xe cũ; nếu cửa hàng có nhận, hãy hỏi điều kiện trước khi hẹn ngày lấy xe mới.',
    'Đừng vội ký nhận xe mới chỉ vì xe cũ đã giao; phanh, đèn, lốp hay vết rò thấy bất thường thì chưa lái xe đi, nhờ thợ có chuyên môn xem.',
    'Đừng để xe cũ nằm lại cửa hàng khi chưa biết xe mới giao lúc nào, ai giữ xe cũ và bạn đi về bằng cách nào.'
  ],
  notes: [
    'Bài này không mô tả thủ tục giấy tờ khi xe đổi chủ; hãy hỏi nơi có thẩm quyền và đối chiếu với lời cửa hàng.',
    'Cách gỡ liên kết ứng dụng, cách bật xe và vận hành tùy từng xe; xem sách hướng dẫn hoặc hỏi thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe',
    'Hướng dẫn của nơi có thẩm quyền về giấy tờ khi xe đổi chủ'
  ],
  related: ['xe-may-da-het-doi-xang-ac-quy-hoac-pin-nhot-chia-va-do-ca-nhan-can-xu-ly-truoc-khi-giao-cho-tho-hay-nguoi-thu-mua', 'van-chuyen-xe-may-di-xa-bang-tau-xe-khach-hoac-xe-tai', 'mua-xe-cu', 'kiem-tra-xe-moi-khi-nhan-tu-dai-ly', 'chuan-bi-ban-xe-may-cu']
};
