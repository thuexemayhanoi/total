// AI WIKI TOTAL — S01158; góc nhìn chủ xe khi cho mượn xe máy, không nêu điều luật, mức phạt, số liệu hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'cho-nguoi-khac-muon-xe-may-luu-y',
  title: 'Cho người khác mượn xe máy: điều nên thống nhất và kiểm tra trước khi giao chìa',
  seoTitle: 'Cho mượn xe máy: cần thống nhất và kiểm tra gì trước khi giao chìa',
  metaDescription: 'Cho người khác mượn xe máy cần lưu ý gì? Cách xác nhận người mượn đủ điều kiện lái, ghi nhận tình trạng xe, thống nhất trách nhiệm và nhận lại xe an toàn.',
  summary: 'Bài viết nhìn việc cho mượn xe máy từ góc của chủ xe: khi nào nên cho và khi nào nên từ chối, cách xác nhận người mượn có giấy phép phù hợp cùng khả năng và trạng thái lái, cách ghi nhận tình trạng xe bằng ảnh trước khi giao, những điều cần thống nhất về mục đích, thời gian và ai chịu khi hư hỏng, rồi cách nhận lại xe và xử lý sự cố. Nội dung chỉ nêu nguyên tắc chung, không dẫn điều luật hay mức phạt; quy định hiện hành cần được tự kiểm tra từ nguồn chính thống.',
  quickAnswer: 'Trước khi giao chìa, hãy xem giấy phép phù hợp của người mượn, chụp ảnh tình trạng xe, rồi thống nhất mục đích, giờ trả, người được lái và ai chịu khi hư hỏng. Đừng giao xe đang có lỗi phanh, lốp, đèn hay lái, và có thể từ chối bằng nguyên tắc chung của chính bạn. Trách nhiệm cụ thể phụ thuộc quy định hiện hành nên cần tự kiểm tra.',
  keyPoints: [
    'Chiếc xe đứng tên bạn nên hậu quả của sự cố thường quay về chủ xe; mức trách nhiệm cụ thể tùy quy định hiện hành và hoàn cảnh, cần tự tra cứu nguồn chính thống.',
    'Nhìn tận mắt giấy phép lái xe còn hiệu lực và đúng loại xe, đồng thời hỏi về kinh nghiệm và quan sát trạng thái tỉnh táo của người mượn lúc nhận chìa.',
    'Chụp ảnh quanh xe, đồng hồ và mức nhiên liệu trước khi giao, rồi cùng người mượn nhìn qua phanh, lốp, đèn, còi và tay lái bằng mắt.',
    'Không giao xe đang có lỗi an toàn vì chủ xe biết lỗi còn người mượn thì không; sửa trước hoặc từ chối cho mượn.',
    'Thống nhất mục đích, giờ trả, người được lái và cách chia chi phí khi hư hỏng, nhắn lại để có dấu vết; xe va chạm cần thợ kiểm tra trước khi chạy tiếp.'
  ],
  category: 'guide',
  hub: 'su-dung-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['chủ xe và người mượn', 'giấy phép lái xe', 'tình trạng xe trước khi giao', 'thỏa thuận mượn xe', 'phanh và lốp', 'mũ bảo hiểm'],
  keywords: ['cho mượn xe máy', 'cho người khác mượn xe', 'mượn xe máy cần lưu ý gì cho chủ xe', 'chủ xe cho bạn bè mượn xe cần thỏa thuận gì'],
  sections: [
    P('Khi nào nên và khi nào không nên cho mượn xe', [
      'Từ chối người quen mượn xe là chuyện khó mở lời, nhưng quyết định cho mượn thuộc về chủ xe và hậu quả cũng thường quay về chủ xe. Chiếc xe đứng tên bạn, nên khi xảy ra sự cố, người đầu tiên bị hỏi tới, bị liên lụy hoặc phải gánh phần thiệt hại về tài sản thường vẫn là bạn, dù người cầm lái là ai. Mức trách nhiệm cụ thể của chủ xe và của người lái phụ thuộc quy định hiện hành cùng hoàn cảnh từng vụ việc, nên ở đây không có điều luật hay con số nào được nêu; hãy tự tra cứu nguồn chính thống hoặc hỏi người có chuyên môn pháp lý. Điều bài viết làm được là giúp bạn trả lời câu hỏi thực tế hơn: cho mượn trong điều kiện nào thì còn yên tâm.',
      'Những trường hợp thường chấp nhận được có điểm chung. Người mượn là người bạn biết rõ cách lái, có giấy phép phù hợp, mục đích rõ ràng, quãng đường quen thuộc, và chiếc xe không có điều gì khiến bạn lấn cấn. Một người thân đã quen cỡ xe cùng điều kiện giao thông trong vùng, cần đi một việc ngắn trong ngày, nằm trong nhóm đó. Hãy tự hỏi thêm ba điều trước khi gật đầu: người này có lái ổn định và tôn trọng luật giao thông không, họ có trung thực báo lại ngay nếu xe gặp chuyện không, và nếu xe hư hỏng thì mối quan hệ giữa hai người có giữ nổi không. Câu trả lời ngập ngừng ở bất kỳ câu nào là tín hiệu để nói chuyện kỹ hơn, hoặc nên từ chối.',
      'Có những tình huống nên nói không mà không cần cân nhắc lâu: người chưa có giấy phép phù hợp hoặc chưa từng lái loại xe này; người vừa uống rượu bia, đang mệt, buồn ngủ hay tinh thần không ổn định; người muốn dùng xe cho mục đích mơ hồ như đi xa không rõ đường, chở hàng cồng kềnh hay đưa lại cho người khác lái. Xe đang có lỗi an toàn như phanh yếu, lốp hỏng, đèn không sáng cũng thuộc nhóm này, vì chính bạn biết điều mà người mượn không biết. Cách từ chối nhẹ nhàng là nói về nguyên tắc chung của mình thay vì đánh giá cá nhân, chẳng hạn xe này mình chỉ cho mượn khi đủ giấy tờ và đã kiểm tra xong, rồi gợi ý phương án khác như chở giúp hoặc đi phương tiện khác.'
    ]),
    P('Xác nhận người mượn đủ điều kiện lái', [
      'Bước đầu tiên là nhìn tận mắt giấy phép lái xe của người mượn thay vì hỏi miệng rằng có hay không. Hạng giấy phép phù hợp với từng loại xe máy khác nhau tùy dung tích và đặc điểm xe, và quy định về việc này có thể được điều chỉnh theo thời gian, nên hãy đối chiếu với quy định hiện hành thay vì dựa vào trí nhớ hay lời đồn. Cần xem giấy phép còn hiệu lực, thuộc đúng người đang đứng trước mặt và đúng hạng cho loại xe bạn định giao. Xem giấy tờ không phải là thái độ nghi kỵ: người lái có kinh nghiệm thường hiểu ngay lý do, và đó cũng là điều bạn có thể nói thẳng khi từ chối người chưa đủ điều kiện.',
      'Giấy phép chỉ chứng minh điều kiện về hình thức, còn khả năng lái thực tế cần hỏi và quan sát thêm. Người quen xe số có thể lúng túng với xe tay ga lúc ra ga và bóp phanh; người cao hoặc thấp hơn bạn nhiều có thể không với tới chân chống hay không giữ vững xe khi dừng. Xe nặng, xe có cách vào số lạ hoặc phanh nhạy hơn thông thường cũng cần thời gian làm quen. Hãy hỏi người mượn đã lái loại xe tương tự được bao lâu, quen đường đông hay chỉ quen đường vắng, rồi dành vài phút để họ ngồi lên, chỉnh tư thế và đi chậm ở chỗ rộng. Người mượn tỏ ra thiếu tự tin chính là câu trả lời trung thực nhất, và nên được tôn trọng.',
      'Trạng thái của người mượn vào đúng lúc nhận chìa cũng quan trọng ngang giấy phép. Người mệt, thiếu ngủ, vừa dùng rượu bia hoặc loại thuốc gây buồn ngủ không nên cầm lái, dù họ nói chỉ đi một đoạn ngắn; hãy hỏi thẳng và đừng ngại hoãn lại. Người mượn cũng cần có mũ bảo hiểm đạt chuẩn, đội đúng cách, cùng trang phục và giày phù hợp cho chặng đường. Ngoài ra, hãy hỏi xem họ có định cho ai khác lái hoặc chở người nào không, và thống nhất rõ rằng chỉ một người này được lái. Giấy tờ xe cần mang theo cũng nên được đối chiếu với quy định hiện hành, vì thiếu giấy tờ là chuyện có thể phát sinh rắc rối cho cả hai bên, và việc này phụ thuộc quy định chứ không phải thói quen.'
    ]),
    P('Ghi nhận tình trạng xe trước khi giao', [
      'Đứng quanh xe cùng người mượn và chụp ảnh trước khi giao là thói quen tốn ít công nhất để tránh tranh cãi về sau. Hãy chụp bốn phía thân xe, hai bên tay lái, gương, yên, chân chống, bánh và vành, kèm cận cảnh những vết xước hoặc móp đã có từ trước. Chụp luôn đồng hồ để ghi lại quãng đường đã đi, mức xăng hoặc mức pin, và các đèn báo đang sáng nếu có. Ảnh có ngày giờ trên điện thoại giúp mỗi bên nhớ đúng tình trạng, không ai phải dựa vào trí nhớ hay lời nói. Hãy làm việc này trước mặt người mượn và nói rõ rằng đây là cách giữ cho cả hai yên tâm, không phải để bắt lỗi; nó cũng giúp chính bạn nhớ xe đã xước ở đâu từ trước.',
      'Bên cạnh vẻ ngoài, hãy cùng người mượn nhìn qua các hạng mục an toàn quan sát được mà không cần dụng cụ. Bóp phanh trước và đạp phanh sau để cảm nhận độ chắc, không bị lún sâu hay kẹt; nhìn lốp có bị phồng, nứt, mòn nhẵn hoặc găm vật lạ không; bật đèn pha, đèn phanh, xi nhan, bóp còi và xem gương có chỉnh được. Tay lái nên quay êm hai phía, máy nổ không có tiếng lạ, dưới gầm không rỉ dầu hay xăng. Cách kiểm tra chi tiết tùy xe, nên hãy đối chiếu với sách hướng dẫn của nhà sản xuất. Điều gì bạn thấy bất thường mà không tự đánh giá được thì để thợ kiểm tra trước khi giao, đừng giao đi rồi hy vọng sẽ không sao.',
      'Giao một chiếc xe đang có lỗi an toàn là điều chủ xe nên tránh hẳn, với ba lý do rõ ràng. Thứ nhất, bạn biết lỗi còn người mượn thì không, nên họ không có cách tự đề phòng, chẳng hạn không biết phanh sau yếu hay đèn phanh không sáng. Thứ hai, người quen xe thường vô thức bù trừ cho khuyết điểm quen thuộc, còn người lạ xe thì không có sự bù trừ đó. Thứ ba, nếu sự cố xảy ra do lỗi bạn đã biết trước, việc giải thích trở nên rất khó cả về mặt tình nghĩa lẫn trách nhiệm. Vì vậy xe có lỗi phanh, lốp, lái, đèn hoặc rò xăng nên được sửa trước, hoặc từ chối cho mượn. Đồng thời hãy nói cho người mượn biết đặc điểm riêng của xe như cách mở yên, khóa cổ, vị trí công tắc và cách dừng xe an toàn.'
    ]),
    P('Thống nhất mục đích, thời gian và trách nhiệm', [
      'Trước khi giao chìa, hãy hỏi và nghe rõ ba điều: đi đâu, làm gì, bao lâu sẽ trả. Mục đích mơ hồ như đi loanh quanh một lát có thể kéo dài thành cả buổi tối, còn lộ trình xa lạ làm tăng nguy cơ lạc đường, đi đêm hoặc gặp thời tiết xấu. Hãy thống nhất giờ trả xe cụ thể, nơi trả và cách báo nếu bị trễ. Cùng với đó là các giới hạn thực tế: không đưa xe cho người khác lái, không chở quá số người mà xe cho phép, không chở hàng cồng kềnh, không đi vào đường ngập hoặc đường xấu, không lái khi đã uống rượu bia. Những ràng buộc này nghe có vẻ khắt khe, nhưng nói trước một lần luôn dễ hơn nhiều so với nhắc lại sau khi đã có chuyện.',
      'Phần khó nói nhất nhưng đáng nói nhất là ai chịu gì khi có chuyện. Hãy thống nhất trước một cách đại thể: hư hỏng nhỏ như xước, vỡ gương, mất mũ thì ai lo; hư hỏng lớn hoặc sự cố giao thông thì xử lý thế nào; xăng, phí gửi xe và các chi phí phát sinh khi đi thì ai trả; trường hợp xe bị mất hoặc bị giữ thì báo cho ai trước. Các vi phạm giao thông phát sinh trong lúc mượn nên được nói rõ là người lái tự chịu phần của mình và phải báo lại cho chủ xe. Trách nhiệm thực tế còn phụ thuộc quy định hiện hành, nên đừng coi thỏa thuận miệng là thay thế được quy định; hãy xem đó là cách để hai bên hiểu giống nhau ngay từ đầu.',
      'Cách nói quan trọng không kém nội dung nói. Hãy trình bày như một quy tắc chung của bạn mỗi khi cho mượn xe, áp dụng cho mọi người kể cả người thân, thay vì như sự nghi ngờ nhắm vào ai. Sau khi nói bằng lời, hãy nhắn lại vài dòng xác nhận gồm mục đích, giờ trả, người được lái và cách chia chi phí khi hư hỏng, để cả hai có chỗ tham chiếu về sau. Tin nhắn đơn giản là đủ, không cần văn phong pháp lý. Nếu mối quan hệ thân thiết khiến bạn thấy ngượng khi làm vậy, hãy nhớ rằng chính những mối quan hệ thân là nơi hiểu lầm về tiền sửa xe dễ làm rạn nứt nhất. Trường hợp cần một văn bản chính thức, nên nhờ người có chuyên môn thay vì tự soạn.'
    ]),
    P('Nhận lại xe và xử lý khi có hư hỏng', [
      'Lúc nhận lại xe, hãy dành vài phút cùng người mượn đối chiếu với ảnh đã chụp trước khi giao. Nhìn lại thân xe, gương, tay lái, bánh và vành, đồng hồ, mức xăng hoặc pin, và các đèn báo trên bảng đồng hồ. Hỏi một câu mở đơn giản như trên đường có chuyện gì đáng nói không, vì người mượn đôi khi quên hoặc ngại kể chuyện va quẹt nhẹ, đạp phải ổ gà mạnh hay xe có tiếng lạ. Một vết xước mới nên được ghi nhận ngay, đừng để vài hôm sau mới phát hiện rồi không ai biết xảy ra lúc nào. Đồng thời hãy cảm ơn người mượn đã giữ xe cẩn thận, vì thái độ cởi mở giúp những lần cho mượn sau thuận lợi hơn.',
      'Khi phát hiện hư hỏng, việc đầu tiên là bình tĩnh và ghi nhận bằng ảnh, rồi so với tình trạng trước khi giao. Hãy phân biệt hư hỏng do sự cố lần mượn với hao mòn tự nhiên theo thời gian: phanh mòn, lốp mòn, dây cáp giãn là hệ quả của việc sử dụng lâu ngày, thường không nên quy cho một người mượn trong một lần đi. Để thợ xem và báo chi phí thật, rồi chia theo thỏa thuận đã có từ trước, thay vì ước lượng cảm tính khiến cả hai khó chịu. Không nên ép người mượn nhận phần lớn hơn mức hợp lý chỉ vì bạn thấy mình thiệt, cũng không nên bỏ qua hư hỏng có thể gây nguy hiểm khi chạy tiếp. Phần chia nên dựa trên thỏa thuận ban đầu và sự công bằng giữa hai bên.',
      'Xe vừa va chạm, ngã hoặc đạp mạnh vào vật cản cần được kiểm tra trước khi chạy tiếp, kể cả khi trông chỉ trầy nhẹ. Những chỗ khó nhìn bằng mắt như phanh, càng, vành, tay lái và khung có thể bị ảnh hưởng mà bạn chưa thấy ngay. Dấu hiệu cần dừng xe và ra thợ gồm tay lái lệch hoặc nặng bất thường, phanh yếu hay kêu lạ, bánh xe rung, rỉ dầu hoặc xăng. Đừng tự tháo hay chỉnh các bộ phận an toàn. Trường hợp sự cố có người bị thương, thiệt hại lớn hoặc xe bị mất, hãy ưu tiên an toàn cho người, báo cơ quan có thẩm quyền theo quy định hiện hành và hỏi người có chuyên môn pháp lý. Sau mỗi lần cho mượn, hãy rút ra điều cần thống nhất thêm cho lần sau.'
    ])
  ],
  checklist: [
    'Nhìn tận mắt giấy phép lái xe còn hiệu lực và đúng loại xe của người mượn, đối chiếu với quy định hiện hành.',
    'Hỏi kinh nghiệm lái và quan sát trạng thái tỉnh táo; người mệt, buồn ngủ hay vừa dùng rượu bia thì hoãn lại.',
    'Chụp ảnh quanh xe, đồng hồ, mức nhiên liệu và các vết xước có sẵn trước khi giao.',
    'Cùng nhìn phanh, lốp, đèn, còi, gương và tay lái; xe có lỗi an toàn thì sửa trước hoặc không cho mượn.',
    'Thống nhất mục đích, giờ trả, người được lái và ai chịu khi hư hỏng, rồi nhắn lại xác nhận.'
  ],
  steps: [
    { title: 'Cân nhắc có nên cho mượn', detail: 'Xét người mượn, mục đích và tình trạng xe; ngập ngừng về một trong ba điều đó là lý do để nói chuyện kỹ hơn hoặc từ chối bằng nguyên tắc chung của bạn.' },
    { title: 'Xác nhận điều kiện lái', detail: 'Xem giấy phép phù hợp còn hiệu lực, hỏi kinh nghiệm với loại xe tương tự, cho ngồi thử chỗ rộng, và chắc rằng người mượn tỉnh táo, có mũ bảo hiểm đạt chuẩn.' },
    { title: 'Ghi nhận xe và thống nhất điều khoản', detail: 'Chụp ảnh tình trạng xe, cùng nhìn các hạng mục an toàn, nói rõ mục đích, giờ trả, người được lái và cách chia chi phí khi hư hỏng rồi nhắn lại xác nhận.' },
    { title: 'Nhận lại và xử lý hư hỏng', detail: 'Đối chiếu xe với ảnh, hỏi trên đường có chuyện gì, đưa xe va chạm đến thợ trước khi chạy tiếp, chia chi phí theo thỏa thuận và hao mòn tự nhiên.' }
  ],
  warnings: [
    'Không giao xe đang có lỗi phanh, lốp, đèn hoặc tay lái, và không giao cho người chưa đủ điều kiện lái hay đang buồn ngủ, vừa uống rượu bia.',
    'Xe vừa va chạm, ngã hoặc có dấu hiệu tay lái lệch, phanh yếu, rỉ dầu hay xăng thì dừng xe và đưa thợ kiểm tra trước khi chạy tiếp; không tự tháo hay chỉnh bộ phận an toàn.',
    'Sự cố có người bị thương, thiệt hại lớn hoặc xe bị mất: ưu tiên an toàn cho người, báo cơ quan có thẩm quyền và hỏi người có chuyên môn pháp lý; bài viết không thay thế tư vấn đó.'
  ],
  notes: [
    'Bài viết chỉ nêu nguyên tắc chung và không dẫn điều luật hay mức phạt; trách nhiệm của chủ xe và người lái, loại giấy phép cho từng loại xe và giấy tờ cần mang đều theo quy định hiện hành, cần tự kiểm tra từ nguồn chính thống.',
    'Cách kiểm tra phanh, lốp, đèn và các đèn báo khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của nhà sản xuất hoặc nhờ thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần kiểm tra an toàn trước khi lái và các đèn báo',
    'Văn bản quy định hiện hành về giấy phép lái xe và giấy tờ khi tham gia giao thông, từ cơ quan có thẩm quyền'
  ],
  related: ['muon-xe-may-di-khi-nao-kiem-tra-gi', 'giay-to-can-mang-khi-lai-xe-may', 'kiem-tra-xe-truoc-khi-mua']
};
