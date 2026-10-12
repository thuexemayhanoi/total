// AI WIKI TOTAL — S01148; nhận biết bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'chan-chong-xe-may-long-hoac-yeu',
  title: 'Chân chống xe máy lỏng, cong hoặc lò xo yếu: vì sao xe đổ và cách kiểm tra khi dựng xe',
  seoTitle: 'Chân chống xe máy lỏng, cong, lò xo yếu: nhận biết và kiểm tra',
  metaDescription: 'Chân chống xe máy bị lỏng, cong hoặc lò xo yếu có thể làm xe đổ hay tự hạ khi chạy. Cách nhận biết bằng mắt, kiểm tra khi dựng xe và việc nên giao thợ.',
  summary: 'Bài giải thích chân chống xe máy gồm những bộ phận nào và vì sao lỏng, cong hoặc mòn có thể làm xe đổ. Nội dung phân biệt chân chống nghiêng với chân chống giữa, mô tả vai trò của lò xo giữ chống và chốt xoay, chỉ ra dấu hiệu nhận biết bằng mắt khi dựng xe, rồi giải thích vì sao chân chống tự hạ khi chạy có thể gây mất lái. Bài cũng đưa ra cách kiểm tra định kỳ không cần dụng cụ, cách xử lý khi chân chống chạm đường và những việc nên giao cho thợ.',
  quickAnswer: 'Xe tự đổ khi dựng hoặc chân chống tự hạ khi chạy thường do lò xo giữ chống yếu, chốt xoay rơ, chân chống cong hoặc đế mòn. Bạn có thể nhìn, chạm nhẹ và thử hồi để nhận ra chân chống lỏng, cong hay mòn. Chân chống tự hạ khi chạy rất nguy hiểm vì có thể chạm đường lúc vào cua và làm xe mất lái, nên hãy dừng xe an toàn rồi đưa ra thợ trước khi chạy tiếp.',
  keyPoints: [
    'Chân chống nghiêng đỡ xe qua một đế nhỏ nên rất nhạy với độ lún của nền, độ mòn của đế và độ cong của thanh; chân chống giữa chia lực rộng hơn nhưng cũng có thể rỉ chốt hoặc yếu lò xo.',
    'Lò xo giữ chống kéo chân chống về vị trí gập, còn chốt xoay là trục quay; lò xo yếu hoặc chốt rơ khiến chân chống lỏng và dễ bật khỏi vị trí cất khi xe xóc.',
    'Dấu hiệu nhận biết bằng mắt gồm chân chống lắc hoặc kêu lạch cạch, xe nghiêng khác thường khi dựng, thanh chìa lệch, đế nhẵn mẻ và vệt rỉ quanh chốt.',
    'Chân chống tự hạ khi chạy có thể chạm đường lúc nghiêng vào cua, làm bánh mất bám hoặc khiến người lái giật mình; hãy giữ vững tay lái, giảm ga, bóp phanh đều rồi dừng an toàn.',
    'Không tự nắn chân chống cong, không tự tháo lò xo căng, không đấu tắt công tắc chân chống; thay lò xo, chốt, chân chống và công tắc là việc của thợ.'
  ],
  category: 'garage',
  hub: 'loi-thuong-gap',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['chân chống nghiêng', 'chân chống giữa', 'lò xo giữ chống', 'chốt xoay chân chống', 'đế chân chống', 'công tắc chân chống'],
  keywords: ['chân chống xe máy', 'chân chống nghiêng bị lỏng', 'lò xo chân chống yếu', 'chân chống xe máy tự hạ khi chạy'],
  sections: [
    P('Chân chống nghiêng và chân chống giữa khác nhau thế nào', [
      'Chân chống xe máy thường chia làm hai loại theo cách xe đứng. Chân chống nghiêng, còn gọi là chân chống bên, là một thanh kim loại gắn ở một bên khung, thường là bên trái, và khi hạ xuống thì cả chiếc xe nghiêng hẳn về phía đó, tựa lên hai bánh cùng đế chân chống như một cái kiềng ba điểm. Chân chống giữa, còn gọi là chân chống đứng, nằm dưới gầm xe, nâng bánh sau lên khỏi mặt đất để xe đứng thẳng, dựa trên đế của chính nó và bánh trước. Nhiều xe có cả hai loại, một số xe chỉ có chân chống nghiêng, và bố trí cụ thể ra sao là tùy dòng xe. Biết xe mình đang dựa vào bộ phận nào là bước đầu để hiểu vì sao nó có thể gây đổ.',
      'Hai loại chân chống chịu lực theo hai kiểu khác nhau. Chân chống nghiêng đỡ phần lớn trọng lượng xe qua một đế nhỏ, và thiết kế dựa vào độ nghiêng để trọng tâm đổ về phía chân chống, nên xe tự tựa vào nó thay vì đứng thẳng. Điều đó có nghĩa là chỉ cần đế lún xuống nền mềm, hoặc thanh chân chống ngắn đi, dài ra, cong đi so với thiết kế, góc nghiêng sẽ đổi theo và xe có thể trượt hoặc ngả sang phía còn lại. Chân chống giữa chia lực ra hai chân rộng nên thường vững hơn trên nền phẳng, tiện khi đỗ lâu hoặc khi chăm sóc xe, nhưng đưa xe lên chân chống này cần đúng thao tác và đúng chỗ đứng, còn trên nền dốc hay nền trơn thì xe vẫn có thể xê dịch.',
      'Vì được dùng với tần suất khác nhau nên hai loại cũng hỏng theo hai kiểu khác nhau. Chân chống nghiêng được hạ xuống và gập lên mỗi ngày, có khi nhiều lần, nên chốt xoay mòn, lò xo mỏi và đế chân mòn là những lỗi hay gặp, cộng thêm nguy cơ chân chống tự hạ khi chạy. Chân chống giữa ít dùng hơn nên hay hỏng âm thầm: chốt rỉ vì lâu không cử động, lò xo hồi yếu khiến chân chống không gập sát lên và có thể cọ xuống mặt đường lúc xe nghiêng hoặc qua gờ. Một số xe có công tắc chân chống, thường để ngăn xe chạy hoặc làm tắt máy khi chân chống chưa gập lên; xe bạn có hay không và hoạt động thế nào là tùy xe, cần xem sách hướng dẫn sử dụng. Phần còn lại của bài chủ yếu nói về chân chống nghiêng, vì nó được dùng nhiều nhất.'
    ]),
    P('Lò xo và chốt xoay giữ chân chống ra sao', [
      'Chân chống được gắn vào khung bằng một chốt xoay, thường là bu lông hoặc trục có đai ốc hay chốt hãm, tùy xe. Chốt này cho thanh chân chống quay quanh một trục: hạ xuống để dựng xe, gập lên để chạy. Chốt phải vừa khít, vì quá rơ thì chân chống lắc ngang và xê dịch khi chịu tải, còn quá chặt hay rỉ kẹt thì khó hạ và khó gập. Lò xo giữ chống, thường là lò xo kéo, có một đầu móc vào chân chống và đầu kia móc vào khung hoặc giá đỡ. Lò xo luôn kéo chân chống về phía vị trí gập, nên chân chống đã cất lên sẽ nằm yên chứ không buông xuống, trừ khi bạn chủ động đạp nó xuống. Đó là cơ chế đơn giản nhưng quyết định chân chống nằm ở đâu lúc xe đang chạy.',
      'Lực của lò xo được tính để vừa đủ. Đủ mạnh để giữ chân chống sát thân xe trước rung động, ổ gà, gờ giảm tốc và những cú nghiêng khi vào cua, nhưng đủ nhẹ để người dùng đạp chân chống xuống bằng một cú đạp bình thường. Vì thế lò xo yếu, lò xo giãn dài hoặc móc lò xo mòn hở sẽ làm lực giữ tụt đi mà bạn khó nhận ra, bởi chân chống vẫn gập được và vẫn hạ được. Biểu hiện thường chỉ xuất hiện lúc xe xóc: chân chống bật khỏi vị trí cất, kèm tiếng cạch hoặc tiếng cọ đường. Lò xo chân chống yếu có thể do mỏi kim loại sau thời gian dài, do rỉ sét, do bị kéo giãn quá mức hoặc do gãy một phần ở chỗ móc. Vì vậy đây được xem là lỗi cần xử lý sớm, không phải lỗi vặt.',
      'Chốt xoay và lò xo hỏng theo kiểu ảnh hưởng lẫn nhau. Chốt mòn hoặc đai ốc nới lỏng vì rung làm chân chống rơ, khiến lò xo bị kéo lệch hướng, mòn nhanh và mất lực. Ngược lại, lò xo yếu để chân chống va mạnh vào điểm chặn mỗi lần gập, làm chốt chịu thêm sốc. Bùn đất, nước và hơi ẩm bám quanh chỗ này cũng làm rỉ, khiến chân chống kẹt, chậm hồi hoặc hồi không hết hành trình. Việc bạn có thể làm là giữ sạch vùng chốt, quan sát vết rỉ, và bôi trơn đúng loại, đúng vị trí theo sách hướng dẫn, tránh để mỡ dính lên đế chân chống hay lên chỗ đặt chân. Thay lò xo, thay chốt hoặc siết lại đúng lực là việc của thợ: lò xo luôn căng, tự tháo có thể làm nó bật ra gây thương tích, còn siết sai lực có thể làm chốt hoặc ren hỏng.'
    ]),
    P('Dấu hiệu lỏng, cong hoặc mòn khi dựng xe', [
      'Dấu hiệu lỏng dễ nhận nhất lúc xe đứng yên trên nền chắc. Gạt chân chống nghiêng xuống rồi nhìn xem nó có chùng, xê dịch ngang hay kêu lạch cạch ở chốt khi bạn chạm nhẹ vào thanh chân chống. Chân chống nghiêng bị lỏng thường cho cảm giác hạ xuống không dứt khoát, thiếu điểm dừng rõ ràng, hoặc hạ xong vẫn lắc nhẹ lúc xe chịu tải. Với chân chống đã gập lên, thử đưa tay kéo nhẹ thanh chân chống ra ngoài rồi thả: thường nó phải bật về sát thân xe thay vì đứng chênh vênh. Quanh chốt, vệt rỉ nâu, dầu mỡ khô lẫn bụi, hoặc vết mài bóng loáng cho biết chỗ đó đang chuyển động quá mức. Đừng thử bằng cách đẩy mạnh khi xe đang nghiêng cheo leo, và đừng đưa tay vào giữa chân chống với khung khi xe đứng chưa vững.',
      'Chân chống cong khó thấy hơn, nhưng xe thường báo bằng cách đứng khác lạ. Xe nghiêng nhiều hơn hoặc ít hơn hẳn so với trước, hoặc chỉ một cơn gió, một cú chạm nhẹ đã làm xe chao đảo, đều là lý do để nhìn kỹ chân chống. Đứng phía sau xe nhìn thanh chân chống đã gập lên, bạn có thể thấy nó chìa ra ngoài bất thường, nằm lệch hướng hoặc cọ vào một chi tiết khác. Nguyên nhân thường gặp là xe từng đổ đè lên chân chống, bị va khi đỗ, hoặc bị đưa lên chân chống giữa sai cách. Đừng tự nắn lại: kim loại bị bẻ ngược hay hơ nóng có thể yếu đi và gãy đột ngột khi chịu tải, nên hãy để thợ đánh giá, thường là thay chân chống mới.',
      'Mòn là kiểu hao hụt chậm, dễ bỏ qua nhất. Đế chân chống cọ xuống bê tông, nhựa đường mỗi lần dựng xe nên nhẵn dần, mất các gờ chống trượt, và có thể mòn lệch khiến phần tì xuống nền thay đổi. Thanh chân chống mòn ngắn đi làm xe nghiêng sâu hơn thiết kế, còn đế bị mẻ hoặc bong lớp bảo vệ, nếu xe có, thì dễ trượt trên nền trơn. Tai đạp, tức chỗ bạn đặt chân để gạt chân chống xuống, cũng mòn nhẵn theo thời gian và làm chân trượt khỏi nó. Mỗi dấu hiệu nhỏ không gây tai nạn ngay, nhưng cộng dồn lại sẽ làm xe đứng kém vững, nhất là khi nền mềm, nghiêng hoặc đang có gió. Hãy nhớ độ nghiêng của xe hôm trước để so với hôm nay, và nhìn kỹ đế chân chống mỗi lần rửa xe.'
    ]),
    P('Chân chống tự hạ khi chạy và vì sao nguy hiểm', [
      'Chân chống tự hạ khi đang chạy nguy hiểm hơn hầu hết các lỗi vặt vì nó xuất hiện đúng lúc người lái đang dồn sự chú ý vào đường. Nguyên nhân thường là lò xo yếu hoặc gãy, chốt rơ, hoặc một cú xóc đủ mạnh để thắng lực giữ của lò xo. Dấu hiệu có thể là tiếng cạch bất ngờ, tiếng kim loại cọ lên mặt đường, rung nhẹ ở phía chân trái, và ở xe có công tắc chân chống thì đèn báo sáng hoặc máy yếu đi, tắt máy, tùy xe. Điều khiến chuyện này đáng ngại là chân chống nghiêng nằm thấp ở một bên thân xe: chỉ cần nó rời khỏi vị trí cất, đế chân chống đã ở độ cao có thể chạm mặt đường, nhất là lúc xe nghiêng vào cua, dù xe vẫn đang chạy bình thường.',
      'Cơ chế gây ngã thường diễn ra như sau. Xe đang nghiêng về phía có chân chống, đế chân chống chạm mặt đường trước khi bánh xe kịp giữ lực bám, và điểm chạm cứng ấy chống ngược lên, có thể nâng một phần thân xe hoặc đẩy bánh khỏi mặt đường. Bánh mất bám chỉ trong khoảnh khắc rất ngắn cũng đủ để xe văng khỏi quỹ đạo hoặc trượt ngã. Ngay cả khi chân chống chỉ lê trên đường thẳng, tiếng động và rung bất ngờ có thể làm người lái giật mình, phanh gấp, bẻ lái hoặc buông ga đột ngột, và chính những phản ứng ấy mới khiến xe mất ổn định. Mức độ còn phụ thuộc cách xe nghiêng và tốc độ, nên đừng nghĩ chuyện này chỉ xảy ra ở xe chạy nhanh: chân chống tự hạ lúc chạy chậm vẫn đủ gây nguy hiểm.',
      'Gặp tình huống này, việc quan trọng nhất là đừng hoảng. Giữ tay lái vững, nhả ga từ từ, bóp phanh đều tay thay vì phanh gấp, quan sát phía sau, bật đèn báo rẽ và tấp vào chỗ an toàn rồi dừng hẳn. Chỉ khi xe đã dừng và đứng vững mới cúi xuống xem chân chống, rồi dùng chân hoặc tay gạt nó về vị trí gập. Đừng thò chân xuống đạp gạt lúc xe còn đang lăn. Xe có công tắc chân chống thì đừng tự đấu tắt hoặc tháo công tắc để khỏi bị tắt máy: đó là lớp bảo vệ, và chân chống tự hạ là lý do để sửa, không phải để tắt cảnh báo. Chân chống đã tự hạ một lần thì nên coi xe chưa an toàn cho những chuyến dài, hãy đưa tới thợ kiểm tra lò xo và chốt trước khi chạy tiếp.'
    ]),
    P('Kiểm tra định kỳ và lúc giao thợ', [
      'Kiểm tra định kỳ chân chống không cần dụng cụ, chỉ cần ba thao tác lặp lại mỗi lần rửa xe hoặc trước chuyến đi dài. Một là nhìn: thanh chân chống có thẳng không, đế còn gờ hay đã nhẵn, lò xo còn nguyên hay hở móc, rỉ, giãn dài bất thường, chốt có vệt rỉ hoặc dầu mỡ khô, đai ốc có dấu hiệu xê dịch. Hai là chạm nhẹ: thử lay thanh chân chống ở cả hai trạng thái đã gập và đã hạ, xem có lỏng ngang hay lạch cạch không. Ba là thử hồi: hạ và gập chân chống vài lần, cảm nhận lực hồi của lò xo, tiếng cạch ở điểm chặn và độ trơn của chuyển động. Chân chống tốt thường hạ dứt khoát, gập gọn, không kẹt, không bồng bềnh. Hãy ghi nhớ cảm giác đó để lần sau nhận ra khác thường.',
      'Thói quen dựng xe cũng quan trọng không kém tình trạng chân chống. Trước khi bỏ xe, hãy nhìn nền: nền chắc và ít dốc thì tốt, còn nền cát, bùn, đất mới đắp, nắp cống mỏng hay nhựa đường mềm dưới nắng gắt đều dễ làm đế chân chống lún. Tránh dựng ở nơi dốc rõ rệt, vì nền nghiêng làm góc nghiêng của xe đổi đi so với thiết kế. Đừng treo túi nặng lên một bên tay lái hoặc móc đồ nặng khi xe đang dựng nghiêng, vì trọng tâm lệch có thể làm xe đổ. Khóa tay lái, vào số hoặc dùng phanh đỗ theo từng loại xe để xe khỏi lăn và khỏi xoay. Dựng xong, thử lay nhẹ để biết xe đã tựa chắc chưa, nhất là ở bãi đông, nơi một cú chạm của xe khác cũng đủ làm đổ.',
      'Một số việc nên giao thợ. Đó là thay lò xo yếu hoặc gãy, thay chân chống cong hoặc nứt, thay chốt và ổ mòn, siết hay thay đai ốc đúng lực quy định của từng xe, kiểm tra và thay công tắc chân chống, cùng nhìn vùng khung nơi chân chống bám vào xem có nứt, hở mối hàn hay sơn bong thành vết. Hãy mô tả cho thợ bằng sự việc: chân chống lỏng vào thời điểm nào, nghe tiếng gì, xe có từng đổ hay va chạm không, đèn báo chân chống có sáng bất thường không. Đừng buộc dây thun, quấn dây hay chèn vật gì để giữ chân chống thay lò xo, và đừng tự chế hoặc đổi chân chống khác chiều dài vì độ nghiêng sẽ thay đổi. Dừng đi xe và ra thợ ngay nếu lò xo gãy, chốt lỏng thấy rõ, chân chống cong rõ rệt hoặc chân chống tự hạ khi chạy.'
    ])
  ],
  checklist: [
    'Nhìn thanh chân chống nghiêng và chân chống giữa xem có cong, nứt hoặc chìa lệch so với lúc trước không.',
    'Xem lò xo giữ chống còn nguyên, không hở móc, không rỉ nặng, không giãn dài bất thường.',
    'Chạm nhẹ vào chân chống ở cả hai trạng thái gập và hạ để biết có lỏng hoặc kêu lạch cạch ở chốt không.',
    'Kiểm tra đế chân chống và tai đạp còn gờ chống trượt hay đã nhẵn, mẻ.',
    'Trước khi chạy, nhìn hoặc cảm nhận bằng chân để chắc chân chống đã gập hẳn lên vị trí cất.'
  ],
  steps: [
    { title: 'Dựng xe ở nền chắc', detail: 'Chọn nền phẳng, chắc, ít dốc, không cát bùn hay nhựa mềm; tránh treo đồ nặng lệch một bên rồi mới bắt đầu quan sát.' },
    { title: 'Nhìn kỹ các bộ phận', detail: 'Quan sát thanh chân chống, đế, lò xo, chốt xoay và vùng khung quanh chỗ gắn xem có cong, mòn, rỉ, nứt hoặc lỏng đai ốc không.' },
    { title: 'Thử hạ và gập chân chống', detail: 'Hạ rồi gập chân chống vài lần, cảm nhận độ dứt khoát, lực hồi của lò xo và tiếng cạch ở điểm chặn; kẹt hoặc bồng bềnh là dấu hiệu cần để ý.' },
    { title: 'Ghi lại và giao thợ', detail: 'Ghi nhận dấu hiệu, thời điểm xảy ra và việc xe từng đổ hay va chạm, rồi đưa thợ có chuyên môn xử lý trước khi chạy tiếp.' }
  ],
  warnings: [
    'Chân chống tự hạ khi đang chạy có thể chạm đường lúc nghiêng vào cua; hãy giữ vững tay lái, giảm ga, bóp phanh đều rồi dừng xe an toàn, không đạp gạt chân chống khi xe còn lăn.',
    'Không tự nắn chân chống cong, không tự tháo lò xo đang căng, không đấu tắt hay tháo công tắc chân chống; những việc này dễ gây thương tích hoặc làm mất lớp bảo vệ.',
    'Lò xo gãy, chốt lỏng rõ, chân chống cong rõ hoặc chân chống đã tự hạ một lần là lý do dừng đi xe và ra thợ trước khi chạy tiếp.'
  ],
  notes: [
    'Số lượng, hình dạng và vị trí chân chống, cũng như việc có công tắc chân chống hay không, đều tùy từng dòng xe; hãy đối chiếu với sách hướng dẫn sử dụng của xe mình.',
    'Bài chỉ nêu cách nhận biết bằng quan sát và ranh giới giao thợ, không thay cho việc kiểm tra bằng dụng cụ của thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe',
    'Tài liệu bảo dưỡng và phụ tùng chính hãng của từng dòng xe'
  ],
  related: ['do-xe-may-tren-le-doc-an-toan', 'huong-dan-su-dung-cac-chuc-nang-tren-xe-ga', 'xe-tay-ga-ro-ga-khong-len-toc-do', 'cong-tac-an-toan-chan-chong-va-phanh']
};
