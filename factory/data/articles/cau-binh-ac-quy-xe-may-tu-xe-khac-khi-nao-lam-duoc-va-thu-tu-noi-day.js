// AI WIKI TOTAL — S01358; hướng dẫn câu bình ắc quy bằng quy trình và quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'cau-binh-ac-quy-xe-may-tu-xe-khac-khi-nao-lam-duoc-va-thu-tu-noi-day',
  title: 'Câu bình ắc quy xe máy từ xe khác: khi nào làm được, thứ tự nối dây và những điều không được làm',
  seoTitle: 'Câu bình ắc quy xe máy từ xe khác: điều kiện và thứ tự nối dây',
  metaDescription: 'Câu bình ắc quy xe máy từ xe khác: điều kiện cần kiểm tra, thứ tự nối và tháo dây, những điều không được làm và lúc nên gọi thợ thay vì tự xử lý.',
  summary: 'Nội dung giải thích câu bình ắc quy xe máy từ xe khác là gì, khi nào làm được và khi nào không nên. Tiếp theo là điều kiện cần kiểm tra trước khi nối, thứ tự nối dây từ cực dương sang cực âm, cách đề từng nhịp ngắn và tháo dây theo chiều ngược lại. Bài cũng liệt kê những điều không được làm như để kẹp chạm nhau, nối ngược cực hay nổ máy ô tô, cùng việc cần làm sau khi nổ máy và các tình huống nên gọi thợ hoặc cứu hộ.',
  quickAnswer: 'Câu bình chỉ giúp khi xe hết điện vì ắc quy yếu, và chỉ làm khi hai ắc quy cùng mức điện áp theo sách hướng dẫn, ắc quy yếu không phồng, nứt, rỉ nước. Tắt khóa điện cả hai xe, nối đỏ vào cực dương xe yếu rồi cực dương xe khỏe, nối đen vào cực âm xe khỏe rồi cực âm hoặc điểm nối mát sách chỉ định trên xe yếu. Ô tô cho mượn điện thì phải để tắt máy.',
  keyPoints: [
    'Câu bình là dùng ắc quy còn tốt của xe khác để xe hết điện khởi động; chỉ giúp khi nguyên nhân là ắc quy yếu, không chữa được ắc quy hỏng hay lỗi ở xăng, bugi, cầu chì, mô-tơ đề.',
    'Trước khi làm cần đọc sách hướng dẫn của cả hai xe, hai ắc quy cùng mức điện áp, ắc quy yếu không phồng, nứt, rỉ nước hay có mùi lạ, chạm tới hai cực dễ dàng và có bộ dây câu kẹp bọc cách điện.',
    'Thứ tự nối: tắt khóa điện cả hai xe, kẹp đỏ vào cực dương xe yếu rồi cực dương xe khỏe, kẹp đen vào cực âm xe khỏe rồi cực âm hoặc điểm nối mát sách chỉ định trên xe yếu; tháo theo thứ tự ngược lại.',
    'Đề từng nhịp ngắn, nghỉ giữa các lần; không để kẹp chạm nhau hay chạm khung, không nối ngược cực, không có lửa gần ắc quy, không nổ máy ô tô khi câu cho xe máy, không câu liên tiếp khi xe vẫn không nổ.',
    'Sau khi nổ, để xe chạy một lúc rồi kiểm tra ắc quy và hệ thống sạc vì hết điện có thể do ắc quy già hay rò điện; không tiếp cận được ắc quy, không chắc cực nào, xe không nổ sau vài lần hay có mùi khét thì gọi thợ hoặc cứu hộ.'
  ],
  category: 'wiki',
  hub: 'ac-quy-pin',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['câu bình ắc quy', 'bộ dây câu có kẹp cách điện', 'cực dương và cực âm', 'điểm nối mát', 'hệ thống sạc', 'ắc quy yếu'],
  keywords: ['câu bình ắc quy xe máy', 'câu bình xe máy từ xe khác', 'cách nối dây câu ắc quy xe máy', 'kích bình ắc quy xe máy'],
  sections: [
    P('Câu bình là gì và khi nào nên dùng cách này', [
      'Câu bình, nhiều nơi còn gọi là kích bình, là dùng ắc quy còn tốt của một xe khác để cấp điện tạm thời cho xe đang hết điện, qua bộ dây câu chuyên dụng có kẹp ở hai đầu mỗi sợi. Lúc bấm đề, mô-tơ đề cần dòng điện lớn trong thời gian ngắn; ắc quy yếu không cấp nổi nên bộ đề chỉ ì ạch hoặc kêu tách rồi thôi. Ắc quy khỏe của xe bên cạnh bù phần thiếu ấy cho tới khi máy bắt nổ, sau đó hệ thống sạc của chính xe vừa nổ tự gánh việc cấp điện. Vì thế câu bình không phải sạc ắc quy, cũng không làm ắc quy hồi sức; nó chỉ là cú hích đủ để khởi động.',
      'Cách này chỉ đúng bệnh khi xe không đề được vì ắc quy yếu. Gợi ý thường gặp là đèn và còi yếu hẳn lúc bấm đề, đồng hồ chớp tắt, tiếng đề uể oải hoặc chỉ nghe tiếng tách, trong khi hôm trước xe vẫn chạy bình thường. Đề quay khỏe mà máy không bắt là chuyện khác, thường nằm ở xăng, bugi hay đánh lửa, và dây câu không giúp được gì. Với ắc quy đã hỏng hẳn, mượn điện có thể giúp máy nổ một lần, nhưng ắc quy không giữ được điện nên lần sau xe lại không đề được. Cầu chì đứt, cọc ắc quy lỏng hay sùi, rơ-le hoặc mô-tơ đề hỏng cũng không chữa được bằng dây câu.',
      'Trước khi bắt tay vào nối dây, hãy xem các lựa chọn. Xe số còn có thể đẩy nổ mà không cần xe khác cho mượn điện; cách làm có trong bài riêng về đề xe đẩy khi ắc quy yếu. Xe tay ga thường khó đạp hay đẩy nổ, nên câu bình hoặc nhờ người đến xử lý là hai đường chính. Tuy vậy, câu bình đòi hỏi bộ dây đúng loại, một xe cho điện cùng nơi đủ thoáng, khô ráo để hai xe đứng gần nhau mà không chạm nhau. Thiếu một trong các thứ ấy, hoặc chưa chắc về điều kiện, thì gọi thợ hay cứu hộ là lựa chọn an toàn hơn. Còn nếu bạn chưa chắc ắc quy đã yếu thật, dấu hiệu nhận biết có trong bài riêng về ắc quy yếu.'
    ]),
    P('Điều kiện cần kiểm tra trước khi câu bình', [
      'Việc đầu tiên là mở sách hướng dẫn của cả hai xe, vì quy định không giống nhau giữa các nhà sản xuất. Có xe cho phép nhận điện từ ắc quy ngoài, có xe chỉ định hẳn điểm nối riêng, và cũng có xe không khuyến khích làm vậy; gặp lời khuyên ấy, hãy chọn cách khác. Điều kiện kế tiếp là hai ắc quy cùng mức điện áp theo sách hướng dẫn, thông tin thường cũng in trên vỏ ắc quy. Nhiều xe máy và ô tô đời mới dùng chung một mức nên giúp nhau được, kể cả ô tô cấp điện cho xe máy, nhưng xe đời rất cũ, xe tải hay xe chuyên dụng có thể khác. Từ đây, xe hết điện gọi là xe yếu, xe cho mượn điện gọi là xe khỏe.',
      'Ắc quy của xe yếu cần được nhìn kỹ trước khi nối. Vỏ phồng, nứt, ướt chất lỏng quanh nắp hay cọc, mùi chua gắt hoặc mùi lạ đều là lý do dừng hẳn: ắc quy ở tình trạng đó có thể sinh khí, thêm dòng điện lớn hoặc tia lửa là điều không nên. Đây là việc của thợ, và đã có bài riêng về ắc quy phồng, rỉ nước hoặc có mùi lạ. Điều kiện nữa là chạm tới được cả hai cực mà không phải tháo nhiều chi tiết. Nâng yên hay mở một nắp che đơn giản theo sách hướng dẫn thì được; còn phải tháo nhiều ốc, nhiều tấm ốp mới thấy ắc quy thì không nên tự làm bên đường, vì dễ sót ốc và kẹt dây.',
      'Phần chuẩn bị cuối cùng là dụng cụ và tư thế của hai xe. Bộ dây câu phải đúng loại, kẹp có lò xo bám chắc và phần bọc cách điện, vỏ dây còn nguyên, không nứt hay lộ lõi đồng; dây điện tự chế không đạt yêu cầu này. Hai xe nên đứng vững trên nền phẳng, đủ gần để dây không bị căng nhưng không chạm vào nhau; xe số về số không, xe tay ga dựng chân chống chắc chắn, ô tô kéo phanh tay. Tắt khóa điện cả hai xe, tắt đèn và mọi thiết bị điện như sạc điện thoại, camera hành trình hay còi báo động gắn thêm. Tháo nhẫn, dây chuyền kim loại ra khỏi người, đeo găng và kính nếu có.'
    ]),
    P('Thứ tự nối dây, khởi động và tháo dây', [
      'Trước hết phải biết chắc đâu là cực dương, đâu là cực âm. Trên vỏ ắc quy có dấu cộng và dấu trừ in hoặc đúc nổi; cực dương hay có nắp cao su đỏ che, nhưng màu sắc chỉ là quy ước thường gặp, nên hãy tin ký hiệu hơn màu. Không chắc cực nào thì dừng lại, đừng nối thử. Thứ tự nối như sau. Một đầu dây đỏ vào cực dương của xe yếu, đầu đỏ còn lại vào cực dương của xe khỏe. Một đầu dây đen vào cực âm của xe khỏe, đầu đen còn lại vào cực âm hoặc điểm nối mát mà sách hướng dẫn chỉ định trên xe yếu. Lần nối cuối cùng có thể bật tia lửa nhỏ, nên đừng cúi sát ắc quy lúc đặt kẹp.',
      'Nối xong, hãy kiểm tra lại trước khi bật khóa. Các kẹp phải bám chắc vào phần kim loại của cực, không lung lay, không tì lên nhựa hay lớp sùi trắng. Dây không được vắt qua bánh xe, ống xả còn nóng, xích, quạt gió hay các chi tiết đang chuyển động, và các đầu kẹp khác cực phải nằm cách xa nhau. Sau đó bật khóa điện xe yếu, rồi bấm đề thành từng nhịp ngắn, nghỉ một lúc giữa các lần cho dây và mô-tơ đề bớt nóng. Đề liên tục chỉ làm nóng dây, nóng mô-tơ đề và rút kiệt cả ắc quy của xe khỏe. Nghe tiếng đề khỏe lên là dấu hiệu tốt; đề vẫn uể oải hoặc chỉ tách một tiếng thì dừng, kiểm tra lại các kẹp rồi hãy thử tiếp.',
      'Máy nổ rồi thì giữ xe thật vững, để máy xe yếu tiếp tục nổ và tháo dây theo thứ tự ngược lại với lúc nối. Đầu tiên là đầu đen ở xe yếu, rồi đầu đen ở xe khỏe, kế đó là đầu đỏ ở xe khỏe, cuối cùng mới đến đầu đỏ ở xe yếu. Mỗi kẹp sau khi nhả nên được cầm riêng ra xa, không để chạm kẹp khác hay khung xe, vì các kẹp đỏ vẫn mang điện cho tới khi gỡ hết; đồng thời giữ tay, tóc, áo tránh xa chi tiết đang quay. Máy chết ngay khi gỡ dây là gợi ý hệ sạc hoặc ắc quy có vấn đề. Tháo xong, đậy lại nắp che cực nếu có, đặt yên về chỗ rồi cuốn gọn dây câu cất đi.'
    ]),
    P('Những điều tuyệt đối không được làm khi câu bình', [
      'Hai lỗi nặng nhất đều liên quan đến dây. Lỗi thứ nhất là để hai kẹp khác màu chạm nhau, hoặc để kẹp đỏ chạm vào khung xe, trong lúc đang nối hay đang tháo: gây chập, tia lửa bắn ra, dây nóng lên rất nhanh, vỏ nhựa có thể chảy và người cầm dễ bị bỏng. Vì thế kẹp chưa dùng phải cầm riêng hoặc đặt nơi không chạm kim loại. Lỗi thứ hai là nối ngược cực. Dòng điện chạy sai chiều có thể làm đứt cầu chì và gây hại cho bộ chỉnh lưu hay bộ điều khiển; hậu quả cụ thể đã được phân tích trong bài riêng về lắp ngược cực ắc quy. Hãy kiểm tra lại ký hiệu dấu cộng, dấu trừ trên ắc quy trước khi kẹp xuống.',
      'Nhóm điều cấm kế tiếp xoay quanh khí và tia lửa. Ắc quy có thể thoát ra khí dễ cháy, còn lần nối kẹp cuối cùng có thể bật tia lửa nhỏ, nên tuyệt đối không hút thuốc, không bật lửa và không để lửa nào gần ắc quy. Ắc quy phồng, nứt hoặc rỉ nước thì không câu, vì nối điện vào một ắc quy đang hỏng chỉ làm tăng nguy cơ cháy nổ và văng axit. Cũng không nổ máy ô tô trong lúc câu cho xe máy: hệ sạc của ô tô mạnh hơn nhiều so với nhu cầu của xe máy, nên có thể gây quá tải cho bộ chỉnh lưu và các bộ điều khiển. Xe máy cho mượn điện có nổ máy hay không thì theo sách hướng dẫn của xe đó.',
      'Còn lại là những việc dễ làm hỏng đồ hoặc gây tai nạn. Không câu hết lần này đến lần khác khi xe vẫn không nổ: sau vài lần mà máy không bắt thì có thể vấn đề không chỉ là ắc quy yếu, còn cứ đề tiếp chỉ làm nóng dây, hao ắc quy xe khỏe và có thể hại mô-tơ đề. Dây điện tự chế, dây trần hay kẹp không có cách điện cũng bị loại, vì lõi mỏng dễ nóng, tiếp xúc kém và rất dễ chập khi kẹp trượt. Mưa, nền ướt hay chỗ bí gió đều là nơi nên tránh. Trẻ em, thú nuôi và người không liên quan cũng nên đứng xa lúc nối dây và bấm đề.'
    ]),
    P('Sau khi nổ máy và lúc nên gọi thợ hay cứu hộ', [
      'Cú hích đã thành công khi máy nổ, nhưng ắc quy chưa vì thế mà khỏe lại. Hãy để máy nổ một lúc; tốt nhất là chạy xe một quãng liền mạch thay vì tắt máy ngay, để hệ sạc có thời gian bù điện. Tắt máy sớm rồi đề lại rất dễ rơi về tình trạng cũ, nhất là khi ắc quy đã yếu từ trước. Trong lúc chạy, quan sát đèn có sáng đều, còi có đủ tiếng, đồng hồ có ổn định không; đèn mờ dần hay đèn báo lạ hiện lên là tín hiệu cần kiểm tra. Nên chọn lộ trình dẫn tới nơi có thể kiểm tra xe, tránh dừng giữa đường đông, và đừng dựa vào việc ngày mai lại câu tiếp.',
      'Xe hết điện thường có lý do, và câu bình chỉ giải quyết triệu chứng. Ắc quy già hoặc đã chai là thủ phạm hay gặp, nhất là ở xe để lâu không chạy hoặc chỉ đi những quãng quá ngắn. Rò điện là khả năng tiếp theo, khi một thiết bị gắn thêm, một đoạn dây chạm hay chi tiết hỏng cứ hút điện kể cả lúc xe đứng. Hệ thống sạc yếu cũng cho kết quả tương tự, vì máy chạy mà ắc quy không được bù đủ. Bằng mắt thường khó phân biệt các nguyên nhân này, nên hãy nhờ thợ kiểm tra ắc quy và hệ thống sạc sớm. Xe lại hết điện sau vài ngày là cảnh báo rõ ràng rằng ắc quy hoặc hệ sạc cần xử lý, đừng câu tiếp.',
      'Có những lúc không nên tự câu mà gọi thợ hoặc cứu hộ. Đó là các tình huống: không tiếp cận được ắc quy nếu không tháo nhiều chi tiết; không chắc cực nào là dương, cực nào là âm; thiếu bộ dây đúng loại hay xe cho điện phù hợp. Cũng nên gọi khi xe vẫn không nổ sau vài lần đề đúng cách, hoặc lúc ngửi thấy mùi khét, thấy khói, dây nóng bất thường hay ắc quy có dấu hiệu phồng, nứt, rỉ nước. Lúc gọi, hãy mô tả điều bạn quan sát: tiếng đề trước đó ra sao, đèn sáng thế nào, đã câu bao nhiêu lần và nối theo thứ tự nào. Thông tin ấy giúp thợ khoanh vùng nhanh và đỡ phải tháo lắp thừa.'
    ])
  ],
  checklist: [
    'Đọc sách hướng dẫn của cả hai xe và xác nhận hai ắc quy cùng mức điện áp trước khi lấy dây ra.',
    'Nhìn ắc quy của xe yếu: không phồng, nứt, rỉ nước, không có mùi lạ, và chạm tới được hai cực mà không phải tháo nhiều chi tiết.',
    'Kiểm tra bộ dây câu có kẹp bọc cách điện, vỏ dây nguyên vẹn; tắt khóa điện, đèn và thiết bị điện của cả hai xe.',
    'Đối chiếu dấu cộng, dấu trừ trên ắc quy, nối đúng thứ tự, kiểm tra kẹp chắc và dây không vướng bánh, ống xả hay bộ phận chuyển động.',
    'Sau khi nổ, tháo dây theo thứ tự ngược lại, để xe chạy một lúc rồi đưa đi kiểm tra ắc quy và hệ thống sạc.'
  ],
  steps: [
    { title: 'Kiểm tra điều kiện trước khi câu', detail: 'Đọc sách hướng dẫn của cả hai xe, xác nhận cùng mức điện áp, nhìn ắc quy xe yếu có phồng, nứt, rỉ nước hay mùi lạ không và chắc chắn chạm tới hai cực dễ dàng.' },
    { title: 'Chuẩn bị xe và dây', detail: 'Đặt hai xe vững, không chạm nhau; tắt khóa điện, đèn và thiết bị điện của cả hai xe; dùng bộ dây có kẹp bọc cách điện, vỏ dây còn nguyên.' },
    { title: 'Nối dây đúng thứ tự', detail: 'Kẹp đỏ vào cực dương xe yếu rồi cực dương xe khỏe; kẹp đen vào cực âm xe khỏe rồi cực âm hoặc điểm nối mát sách hướng dẫn chỉ định trên xe yếu; kiểm tra kẹp chắc và dây không vướng chi tiết chuyển động.' },
    { title: 'Khởi động, tháo dây và kiểm tra xe', detail: 'Bật khóa xe yếu, đề từng nhịp ngắn, nghỉ giữa các lần; máy nổ thì tháo đen ở xe yếu, đen ở xe khỏe, đỏ ở xe khỏe, cuối cùng đỏ ở xe yếu, rồi để xe chạy một lúc và đưa đi kiểm tra ắc quy, hệ thống sạc.' }
  ],
  warnings: [
    'Không để hai kẹp khác màu chạm nhau hoặc kẹp đỏ chạm khung xe khi đang nối hay tháo, và không nối ngược cực; chập hay ngược cực có thể gây tia lửa, đứt cầu chì và hỏng bộ chỉnh lưu hoặc bộ điều khiển.',
    'Không câu khi ắc quy phồng, nứt, rỉ nước hay có mùi lạ; không hút thuốc, không để lửa hay tia lửa gần ắc quy, và không nổ máy ô tô trong lúc câu cho xe máy.',
    'Không câu liên tiếp khi xe vẫn không nổ và không dùng dây tự chế thiếu kẹp cách điện; không tiếp cận được ắc quy, không chắc cực nào hay có mùi khét thì dừng lại và gọi thợ hoặc cứu hộ.'
  ],
  notes: [
    'Cách làm trong bài là nguyên tắc chung; mỗi xe có quy định riêng về việc có nên câu bình hay không, điểm nối mát và thứ tự cụ thể, nên luôn đối chiếu sách hướng dẫn của cả hai xe và hỏi thợ khi chưa chắc.',
    'Câu bình chỉ giúp xe hết điện vì ắc quy yếu; không chữa được ắc quy hỏng, rò điện hay lỗi hệ thống sạc, nên sau khi nổ máy vẫn cần kiểm tra ắc quy và hệ thống sạc.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần ắc quy, cầu chì và khởi động bằng nguồn điện ngoài',
    'Hướng dẫn của nhà sản xuất bộ dây câu về cách nối và các lưu ý an toàn'
  ],
  related: ['lap-nguoc-cuc-ac-quy-xe-may-co-sao-khong', 'de-xe-day-khi-ac-quy-yeu', 'ac-quy-yeu', 'ac-quy-xe-may-phong-ri-nuoc-mui-la', 'coc-ac-quy-xe-may-bi-sui-trang-va-cach-ve-sinh-an-toan']
};
