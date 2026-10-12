// AI WIKI TOTAL — lùi xe máy ra khỏi chỗ đỗ; hướng dẫn thao tác, không số liệu, không tên hãng, tùy xe và sách hướng dẫn.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'lui-xe-may-ra-khoi-cho-do-an-toan-ky-thuat-day-lui-va-quan-sat',
  title: 'Lùi xe máy ra khỏi chỗ đỗ an toàn: kỹ thuật đẩy lùi bằng chân, quan sát và xử lý khi chỗ đỗ chật hoặc dốc',
  seoTitle: 'Lùi xe máy ra khỏi chỗ đỗ: đẩy lùi bằng chân, giữ phanh, quan sát',
  metaDescription: 'Cách lùi xe máy ra khỏi chỗ đỗ chật hoặc dốc: số rỗng, tắt máy xe ga, giữ phanh, đẩy lùi bằng chân hoặc dắt bên cạnh, quan sát, lỗi hay gặp và lúc nên nhờ người.',
  summary: 'Bài hướng dẫn cách lùi xe máy ra khỏi chỗ đỗ mà không làm đổ xe hay va vào xe khác. Nội dung giải thích vì sao lùi dễ mất thăng bằng, rồi đi qua phần chuẩn bị gồm số rỗng cho xe số, tắt máy cho xe tay ga, giữ phanh và quan sát phía sau lẫn hai bên. Bài tách hai kỹ thuật là ngồi trên xe đẩy lùi bằng chân và đứng bên cạnh dắt lùi, nêu cách bẻ lái, xử lý dốc, nền trơn và chỗ hẹp, những lỗi hay gặp cùng lúc nên nhờ người.',
  quickAnswer: 'Đưa xe số về số rỗng, tắt máy xe tay ga, giữ sẵn phanh trước, nhìn thẳng ra sau và sang hai bên rồi mới lùi. Ngồi trên xe thì đẩy lùi bằng chân từng bước ngắn; chân không chạm đất vững hoặc nền dốc, nền trơn, chỗ chật thì xuống xe dắt lùi từ bên cạnh. Lùi thật chậm, nhả phanh từng chút, không mở ga, và nhờ người hỗ trợ khi tầm nhìn bị che hoặc xe quá nặng.',
  keyPoints: [
    'Lùi dễ đổ vì xe nặng, trọng tâm cao, tốc độ thấp làm mất khả năng tự giữ thăng bằng, tay lái dễ bật sang một bên và tầm nhìn phía sau bị che.',
    'Xe số về số rỗng, xe tay ga tắt máy bằng công tắc tắt máy hoặc khóa điện về vị trí tắt, thu chân chống, rồi giữ sẵn phanh trước trước khi nhích xe.',
    'Ngồi trên xe thì đẩy lùi bằng chân từng bước ngắn; chân không vững hoặc chỗ khó thì xuống xe, đứng bên cạnh và dắt lùi, một ngón tay luôn đặt trên cần phanh.',
    'Trên dốc hướng đuôi xe xuống dốc là hướng xe dễ trôi nên phải giữ phanh; nền trơn và chỗ hẹp đòi hỏi lùi thẳng trước, bẻ lái nhẹ sau, và dừng bằng phanh chứ không bằng chân.',
    'Lỗi hay gặp là lùi khi còn mở ga, không quan sát và lùi trên nền trơn; chỗ chật, dốc rõ, nền ướt hoặc xe chở nặng thì nhờ người hoặc dắt xe ra khỏi hàng rồi mới nổ máy.'
  ],
  category: 'tips',
  hub: 'meo-lai-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['số rỗng', 'phanh trước', 'chân chống nghiêng', 'đẩy lùi bằng chân', 'dắt xe bên cạnh', 'nền dốc và nền trơn'],
  keywords: ['cách lùi xe máy ra khỏi chỗ đỗ', 'lùi xe máy', 'lùi xe số ra khỏi chỗ đỗ chật', 'dắt lùi xe máy ra khỏi bãi đỗ'],
  sections: [
    P('Vì sao lùi xe máy lại dễ đổ', [
      'Lùi xe máy trông là động tác đơn giản, nhưng lại là một trong những lúc xe dễ đổ nhất, kể cả với người đã đi quen nhiều năm. Lý do đầu tiên là trọng lượng: xe nặng hơn nhiều so với cảm giác khi bạn ngồi trên yên và chạy, và khối nặng ấy nằm khá cao vì có máy, bình xăng, hành lý cùng người ngồi. Lý do thứ hai là tốc độ. Xe hai bánh giữ thăng bằng nhờ chuyển động về phía trước và những cú bù nhỏ ở tay lái; khi xe gần như đứng yên hoặc lăn lùi từng chút, sự bù trừ ấy yếu đi rất nhiều. Chỉ cần xe nghiêng quá điểm cân bằng là trọng lực làm nốt phần còn lại, và đôi chân khó chống kịp.',
      'Lùi còn khó vì gần như mọi thứ đều ngược với phản xạ thường ngày. Lúc đi tiến, bánh trước có xu hướng tự trả về vị trí thẳng; lúc đẩy lùi, bánh trước thường không còn ổn định như vậy, tay lái dễ bật sang một bên và kéo đầu xe theo, làm xe nghiêng đột ngột. Mắt bạn phải nhìn ra sau, thân người xoay, trọng tâm lệch khỏi trục xe, trong khi tay vẫn phải giữ phanh và tay lái. Chiều đi của đuôi xe cũng dễ gây nhầm: bẻ tay lái sang bên nào thì đuôi xe thường lệch về bên đó, ngược với cảm giác lúc đi tiến. Mọi việc ấy diễn ra ở tốc độ rất thấp, nơi xe ít tha thứ cho sai sót nhất.',
      'Bối cảnh thực tế làm rủi ro nhân lên. Chỗ đỗ thường hẹp, xe hai bên san sát, nền có thể dốc, ướt hoặc gồ ghề, còn phía sau là lối đi có người và xe qua lại mà bạn chưa nhìn thấy hết. Một cú đổ ở bãi đỗ hiếm khi nghiêm trọng về người, nhưng rất dễ kéo theo cả hàng xe đổ dây chuyền, làm gãy gương, nứt ốp của người khác, và để lại đau chân hay cổ tay vì bạn cố đỡ. Phần dưới đây đi theo đúng thứ tự thao tác thật: chuẩn bị xe và quan sát, chọn cách đẩy lùi bằng chân hoặc dắt lùi từ bên cạnh, xử lý dốc, nền trơn, chỗ hẹp, rồi nhận ra lỗi hay gặp và lúc cần nhờ người.'
    ]),
    P('Chuẩn bị: số rỗng, phanh và quan sát', [
      'Việc đầu tiên là đưa xe về trạng thái không còn tự kéo bạn đi. Xe số cần về số rỗng trước khi lùi: nếu còn gài số, bánh sau bị nối với máy nên đẩy rất nặng, dễ giật và có thể bị kẹt. Đèn báo số rỗng thường sáng khi đã về đúng, nhưng vị trí và cách báo tùy xe, nên hãy đối chiếu sách hướng dẫn của xe bạn. Xe tay ga không có số rỗng để ngắt, vì vậy nên tắt máy trước khi lùi tay: chỉ cần vô ý chạm vào tay ga lúc máy còn nổ là xe có thể chồm lên phía trước, đúng lúc bạn đang đứng sát bên hoặc kẹp giữa hai xe. Chuyện không nên gạt số rỗng khi đang chạy đã có bài riêng; ở đây số rỗng chỉ dùng lúc xe đứng yên.',
      'Tắt máy lúc xe đứng yên cũng cần đúng cách. Hãy dùng công tắc tắt máy nếu xe có, hoặc xoay khóa điện về vị trí tắt, tuyệt đối không xoay sang vị trí khóa cổ vì tay lái bị khóa cứng sẽ không bẻ được khi bạn cần. Lưu ý rằng khi khóa điện đã tắt, đèn phanh thường không sáng, nên người phía sau không biết bạn đang hãm xe; đó là lý do phải quan sát kỹ và lùi thật chậm. Tiếp đến là thu chân chống lên hết cỡ, vì chân chống còn xòe ra dễ vướng nền và làm xe ngả bất ngờ. Từ lúc thu chân chống cho tới khi xe nằm ở chỗ thoáng, tay giữ sẵn cần phanh trước; phanh là thứ duy nhất cho phép bạn dừng xe ngay giữa chừng.',
      'Quan sát trước khi lùi quan trọng ngang với kỹ thuật lùi. Hãy xoay đầu và vai nhìn thẳng ra phía sau, rồi nhìn sang từng bên, thay vì chỉ liếc gương: gương xe máy hẹp, hay rung và để lại những vùng khuất, nhất là ngay sau bánh và hai bên đuôi xe. Cần để ý người đi bộ, trẻ nhỏ chạy ra bất ngờ, xe đang đi vào hoặc ra khỏi hàng, cùng những vật thấp như trụ, gờ, bậc nền, chậu cây mà mắt dễ bỏ sót. Nếu nghe tiếng động cơ hay tiếng bước chân phía sau mà bạn chưa thấy nguồn, hãy dừng lại chờ. Quan sát không chỉ làm một lần: lùi được một đoạn lại dừng, nhìn lại, vì tình hình phía sau thay đổi liên tục.'
    ]),
    P('Đẩy lùi bằng chân hoặc dắt lùi từ bên cạnh xe', [
      'Cách thứ nhất là ngồi trên xe và đẩy lùi bằng chân, phù hợp khi hai bàn chân của bạn chạm đất vững. Giữ tay lái thẳng, đặt sẵn ngón tay hoặc cả bàn tay lên cần phanh trước, người ngồi thẳng và giữ xe gần như thẳng đứng chứ không để ngả sang một bên. Nhấc từng chân ra sau, đặt bàn chân xuống chắc rồi mới chuyển trọng lượng, bước ngắn và đều. Đừng dồn hết lực vào một chân vì xe sẽ nghiêng về phía chân ấy. Muốn dừng, hãy bóp phanh chứ không dùng chân chặn chiếc xe đang lăn. Nếu chỉ chạm đất bằng đầu mũi chân, chân không đủ vững để cầm xe, và cách này nên nhường chỗ cho cách dắt lùi từ bên cạnh.',
      'Cách thứ hai là xuống xe, đứng bên cạnh và dắt xe lùi. Đây là lựa chọn an toàn hơn khi xe nặng, chân bạn không chạm đất thoải mái, nền có độ dốc hoặc chỗ rất chật. Một tay giữ tay lái ở phía có cần phanh, tay kia nắm vào chỗ chắc phía sau như tay dắt hoặc khung sau, nghiêng nhẹ xe về phía người để thân bạn đỡ bớt trọng lượng. Bạn bước cùng hướng với xe, mặt quay về phía đuôi xe nên thấy rõ đường lùi hơn nhiều so với vặn cổ nhìn từ trên yên. Chọn phía đứng sao cho ngón tay với tới cần phanh dễ nhất, tùy xe và tùy chỗ. Giữ bàn chân tránh xa đường lăn của bánh sau, và nhớ ống xả vừa chạy xong có thể rất nóng nên đừng để chân hay ống quần chạm vào.',
      'Dù chọn cách nào, kiểm soát nằm ở hai việc là phanh và tay lái. Phanh được nhả từng chút cho xe lăn đúng tốc độ bước chân, và bóp lại ngay khi thấy xe nhanh hơn bước chân bạn; mọi động tác giật mạnh đều làm xe lắc. Tay lái giữ thẳng trong đoạn đầu, lúc xe còn nằm giữa hai xe khác, rồi mới bẻ nhẹ và chậm khi đầu xe đã thoát khỏi vật cản. Vì đuôi xe thường đi về phía bạn bẻ tay lái, muốn đuôi xe tách khỏi hàng sang bên nào thì bẻ sang bên đó. Ra tới chỗ thoáng, dừng hẳn bằng phanh, đưa tay lái về hướng bạn sẽ đi tiếp rồi mới chuyển sang tiến; đừng xoay đầu xe thật gắt khi xe còn đang lăn lùi vì tay lái lúc này dễ bật.'
    ]),
    P('Lùi trên dốc, nền trơn và chỗ hẹp', [
      'Dốc đưa trọng lực vào cuộc, và hướng của xe so với dốc quyết định bạn phải chống lại điều gì. Đuôi xe quay xuống dốc thì xe có xu hướng tự trôi lùi, càng lăn càng nhanh, nên tay giữ phanh trước thật chắc và nhả từng chút. Đầu xe quay xuống dốc thì lùi nghĩa là kéo xe ngược lên, rất nặng, và chỉ cần bạn ngừng sức mà quên phanh là xe tụt trở lại về phía trước. Cả hai trường hợp đều không nên dừng giữa chừng bằng sức chân; hãy dừng bằng phanh. Với dốc dài hoặc dốc rõ rệt, đừng cố lùi một mình: tìm hướng khác để đưa xe ra, hoặc nhờ người giữ giúp. Phần giữ phanh để xe không tụt khi xuất phát trên dốc đã có bài riêng, đọc thêm khi cần.',
      'Nền trơn khiến cả xe lẫn chân bạn mất bám cùng lúc. Gạch men ướt, sàn bóng, lối dốc hầm gửi xe đọng nước, vệt dầu nhớt, bùn, lá ướt, cát và sỏi rời đều đáng ngại; cát và sỏi còn làm bánh xe lún hoặc chợt khựng, khiến khối nặng dồn về một phía. Dấu hiệu nhận biết là mặt nền bóng ướt, đế giày trượt khi bạn thử rê nhẹ, hoặc bánh xe lăn lên thấy lạ. Hãy đi giày hoặc dép có quai giữ chân và có độ bám, đặt hai chân rộng hơn bình thường, bước ngắn và bóp phanh nhẹ, đều tay thay vì bóp mạnh vì bánh trước bị khóa trên nền trơn dễ trượt ngang. Nền quá trơn thì đừng lùi: chờ khô, chọn đường khác hoặc nhờ người.',
      'Chỗ hẹp đòi hỏi lùi thẳng trước, bẻ lái sau. Trong hàng xe san sát, hãy lùi theo đường thẳng cho tới khi đầu xe và tay lái của bạn thoát khỏi đuôi xe bên cạnh, rồi mới bẻ nhẹ để đưa đuôi ra lối đi; bẻ sớm là cách nhanh nhất để móc tay lái, gương vào xe khác. Trước mỗi đoạn lùi, hãy nhìn bằng mắt khoảng hở hai bên tay lái, gương và yên xe, vì khoảng hở nhìn từ trên xe thường khác với khoảng hở nhìn từ bên ngoài. Tay lái của bạn đã chạm xe bên cạnh thì dừng lại, đừng giằng hay nhấc xe người khác. Cũng đừng vội lùi cho kịp nhịp của người đứng chờ phía sau; chờ thêm một chút luôn đỡ phiền hơn một cú đổ dây chuyền.'
    ]),
    P('Lỗi hay gặp và khi nào nên nhờ người', [
      'Có bốn lỗi lặp đi lặp lại. Thứ nhất là lùi khi còn mở ga: xe tay ga còn nổ máy hoặc xe số còn gài số mà bàn tay vô tình xoay ga thì xe chồm tới ngược chiều bạn đang đẩy, tay lái giật và xe đổ. Thứ hai là không quan sát, chỉ tin vào gương hoặc vào thói quen rằng bãi sau xe vẫn trống. Thứ ba là lùi trên nền trơn hoặc nền dốc mà vẫn giữ nhịp như trên nền khô. Thứ tư là vội: bước dài, buông phanh nhanh, vừa lùi vừa bẻ gắt. Cách nhận ra là cảm giác xe nhanh hơn bước chân hoặc tay lái bật, và cách sửa là dừng bằng phanh, đặt chân vững, làm lại chậm hơn. Xe còn chở người hay hành lý nặng phía sau thì nên bỏ tải trước khi lùi.',
      'Có những lúc nhờ người là lựa chọn đúng chứ không phải chuyện ngại. Đó là lúc hàng xe quá dày để thấy phía sau, nền dốc rõ rệt, nền ướt trơn, xe chở nặng, hoặc bạn mệt, đau tay chân, cầm xe không còn chắc. Người giúp nên đứng ở chỗ bạn nhìn thấy, lệch khỏi đường lăn của bánh sau chứ không đứng sát bánh, và hai bên thống nhất trước dấu hiệu dừng bằng tay hoặc bằng lời; không ai kéo yên hay tay lái giữa chừng vì lực kéo bất ngờ làm xe mất thăng bằng. Người trông xe ở nơi đỗ thường quen việc xếp và lấy xe nên có thể nhờ họ đưa xe ra. Nếu xe đã nghiêng quá điểm cân bằng, tùy tình huống, buông tay và bước tránh an toàn hơn gồng đỡ vì chấn thương thường nặng hơn vết xước xe.',
      'Chỗ chật thì cách an toàn là dắt xe ra khỏi hàng rồi mới nổ máy. Nổ máy ngay giữa hai xe khác khiến khói ống xả phả vào xe và người bên cạnh, ống xả nóng gần chân người đi qua, và là lúc bàn tay dễ chạm ga ở tư thế gò bó. Hãy đưa xe ra nơi thoáng, thẳng hướng với lối ra, dừng hẳn bằng phanh, rồi mới bật khóa điện, kiểm tra xe đã về số rỗng hay chưa nếu là xe số, và nổ máy theo thói quen của xe bạn. Chỗ đỗ cũng là nơi ô tô lùi qua lại, và cách nhận biết sớm rồi né vùng quét đã có bài riêng; trước khi bước ra lối đi chung, hãy dừng và nhìn cả hai hướng. Một lần lùi chậm, thẳng, có người quan sát hộ thường đỡ rủi ro hơn nhiều lần chỉnh xe vội vàng.'
    ])
  ],
  checklist: [
    'Xe số đã về số rỗng, xe tay ga đã tắt máy bằng công tắc tắt máy hoặc khóa điện về vị trí tắt, không để ở vị trí khóa cổ.',
    'Chân chống đã thu lên hết cỡ và tay đã đặt sẵn trên cần phanh trước.',
    'Đã xoay đầu nhìn thẳng ra sau và sang hai bên, kiểm tra người đi bộ, trẻ nhỏ, xe khác và vật thấp.',
    'Biết rõ hướng dốc, độ trơn của nền và khoảng hở của tay lái, gương với xe bên cạnh.',
    'Chân chạm đất vững để đẩy lùi, hoặc đã chọn xuống xe dắt lùi; chỗ khó đã tính tới chuyện nhờ người.'
  ],
  steps: [
    { title: 'Đưa xe về trạng thái an toàn', detail: 'Xe số về số rỗng, xe tay ga tắt máy bằng công tắc tắt máy hoặc khóa điện về vị trí tắt, thu chân chống và giữ sẵn phanh trước.' },
    { title: 'Quan sát phía sau và hai bên', detail: 'Xoay đầu nhìn thẳng ra sau rồi sang từng bên, chú ý người đi bộ, trẻ nhỏ, xe khác và vật thấp; dừng lại nhìn lại giữa chừng.' },
    { title: 'Lùi chậm bằng chân hoặc dắt bên cạnh', detail: 'Ngồi trên xe thì bước chân ngắn, đều; chân không vững hoặc chỗ khó thì xuống xe dắt lùi, nhả phanh từng chút và dừng bằng phanh.' },
    { title: 'Bẻ lái nhẹ rồi dắt ra chỗ thoáng', detail: 'Lùi thẳng cho tới khi tay lái thoát khỏi xe bên cạnh, bẻ lái nhẹ và chậm, dừng hẳn ở chỗ thoáng rồi mới nổ máy và chuyển sang tiến.' }
  ],
  warnings: [
    'Không lùi khi còn mở ga hoặc khi máy còn nổ mà tay đặt trên tay ga: xe có thể chồm tới ngược chiều bạn đang đẩy.',
    'Không lùi một mình trên dốc rõ rệt hoặc nền ướt trơn; chọn hướng khác, chờ nền khô hoặc nhờ người, và dừng bằng phanh chứ không bằng sức chân.',
    'Xe đã nghiêng quá điểm cân bằng thì buông tay, bước tránh; chân và cổ tay quan trọng hơn lớp sơn xe. Chân đứng cũng phải tránh ống xả còn nóng.'
  ],
  notes: [
    'Vị trí công tắc tắt máy, đèn báo số rỗng, chân chống và hành vi của đèn phanh khi tắt khóa điện khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của xe bạn.',
    'Bài chỉ nêu nguyên tắc thao tác chung; xe quá nặng so với sức người, hoặc người có chấn thương tay chân, nên nhờ người hỗ trợ thay vì cố tự lùi.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần chân chống, số rỗng và khóa điện',
    'Tài liệu hướng dẫn lái xe máy an toàn của cơ sở đào tạo người lái có chuyên môn'
  ],
  related: ['xe-so-dang-chay-ve-so-n-co-hai-khong', 'di-xe-may-gap-o-to-dang-lui-xu-ly', 'xuat-phat-tren-doc-xe-so-va-xe-ga', 'cach-su-dung-xe-may', 'dung-xe-len-chan-chong-dung-dung-cach-tu-the-va-nen-do']
};
