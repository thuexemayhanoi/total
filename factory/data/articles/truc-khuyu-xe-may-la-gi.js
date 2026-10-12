// AI WIKI TOTAL: giải thích nguyên lý trục khuỷu; không hướng dẫn tháo lắp, không nêu số liệu hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'truc-khuyu-xe-may-la-gi',
  title: 'Trục khuỷu xe máy là gì: biến chuyển động lên xuống của piston thành chuyển động quay như thế nào',
  seoTitle: 'Trục khuỷu xe máy là gì: cấu tạo và cách tạo chuyển động quay',
  metaDescription: 'Trục khuỷu xe máy là gì, nằm ở đâu và nối với piston qua tay biên ra sao? Giải thích nguyên lý, vai trò bánh đà, bạc đạn, nhớt và dấu hiệu hỏng để nói rõ với thợ.',
  summary: 'Trục khuỷu là trục nằm kín trong lốc máy, nhận lực đẩy của piston qua tay biên rồi biến chuyển động lên xuống thành chuyển động quay đưa ra hộp số và bánh xe. Nội dung giải thích hình dáng trục với cổ trục, cổ biên và má khuỷu, vai trò của bánh đà gắn cùng, các bạc đạn đỡ trục và màng nhớt bảo vệ chúng. Tiếp theo là những hỏng hóc thường gặp như thiếu nhớt hay va chạm, dấu hiệu quan sát được như tiếng gõ nặng, rung và mất lực, cùng lý do việc này thuộc về thợ đại tu.',
  quickAnswer: 'Trục khuỷu là trục xoay nằm sâu trong lốc máy, nối với piston qua tay biên. Mỗi lần piston bị đẩy xuống, lực dồn vào cổ biên lệch tâm của trục và làm trục quay, rồi chuyển động quay ấy đi tới hộp số và bánh xe. Trục được đỡ bằng bạc đạn và cần nhớt bôi trơn. Tiếng gõ nặng từ dưới máy, rung và mất lực là dấu hiệu cần dừng xe và đưa thợ đại tu kiểm tra.',
  keyPoints: [
    'Trục khuỷu nằm kín trong lốc máy dưới xi-lanh, nên người dùng chỉ nghe nhắc tới chứ gần như không thấy trong bảo dưỡng thông thường.',
    'Tay biên nối piston với cổ biên lệch tâm của trục khuỷu: lực đẩy thẳng của piston nhờ độ lệch ấy mà biến thành lực xoay.',
    'Bánh đà gắn cùng trục giữ cho máy quay đều giữa các kỳ nổ; nhiều xe còn dùng nó làm mâm từ của bộ phát điện, tùy xe.',
    'Bạc đạn đỡ trục chỉ bền khi có màng nhớt đủ và sạch; thiếu nhớt hoặc va chạm mạnh là hai nguyên nhân hay gặp của hư hại.',
    'Tiếng gõ nặng, rung và mất lực là lý do dừng xe an toàn, tắt máy và nhờ thợ kiểm tra; mở lốc máy là việc đại tu của thợ.'
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['trục khuỷu', 'tay biên', 'piston', 'bánh đà', 'bạc đạn trục khuỷu', 'nhớt bôi trơn'],
  keywords: ['trục khuỷu xe máy là gì', 'cấu tạo trục khuỷu xe máy', 'trục khuỷu và tay biên', 'trục khuỷu hoạt động như thế nào'],
  sections: [
    P('Trục khuỷu nằm ở đâu trong động cơ xe máy', [
      'Trục khuỷu là chi tiết nằm sâu nhất trong thân máy, ngay phía dưới xi-lanh, và là nơi lực của các lần cháy nổ được gom lại thành chuyển động quay. Nhìn từ bên ngoài bạn không thấy nó: trục nằm kín trong khoang gọi là hộp trục khuỷu hay lốc máy, thường ghép từ hai nửa vỏ bắt vào nhau. Phía trên là xi-lanh chứa piston, một đầu trục mang bánh đà hoặc bộ phát điện, đầu kia dẫn lực tới cụm truyền động về hộp số rồi bánh sau. Người dùng nghe thợ nói bạc biên hỏng hay trục khuỷu mòn thường khó hình dung vì chi tiết này không lộ diện khi thay nhớt hay thay bugi, chỉ xuất hiện khi máy đã được mở ra đại tu.',
      'Trục khuỷu không phải một thanh thẳng trơn. Hãy hình dung một thanh thép dày, có những đoạn nằm đúng tâm quay gọi là cổ trục, xen giữa là những đoạn bị lệch hẳn khỏi tâm gọi là cổ biên, các đoạn ấy nối với nhau bằng các má khuỷu. Chính độ lệch này làm nên tên gọi, vì nhìn nghiêng trục giống một cánh tay gập khuỷu. Cổ trục tựa vào vỏ máy để trục quay quanh một tâm cố định, còn cổ biên là chỗ đầu to của tay biên ôm vào. Má khuỷu thường có thêm khối đối trọng ở phía đối diện cổ biên, để cân bớt lực quán tính của piston và tay biên. Số cổ biên nhiều hay ít phụ thuộc số xi-lanh, còn hình dáng cụ thể tùy từng dòng xe.',
      'Nhiều người nhầm trục khuỷu với trục cam vì cả hai đều là trục quay trong động cơ. Trục cam nằm phía trên, gần nắp máy, có việc đóng mở xupap nạp và xả đúng nhịp, và được trục khuỷu dẫn động qua xích hoặc dây đai; ở động cơ bốn thì nó quay chậm hơn trục khuỷu. Trục khuỷu mới là nơi nhận lực đẩy trực tiếp từ piston và cũng là trục đưa công suất ra ngoài. Cách chế tạo cũng tùy xe: có xe dùng trục ghép sẵn từ nhiều mảnh thành một cụm, xe khác dùng trục liền khối. Vì thế khi thợ nói phải sửa trục khuỷu, thứ cần thay có thể là cả cụm chứ không chỉ một mảnh riêng lẻ trong đó.'
    ]),
    P('Từ piston và tay biên tới chuyển động quay', [
      'Piston chạy lên xuống trong xi-lanh theo đường thẳng, kỹ thuật gọi đó là chuyển động tịnh tiến. Nó không thể tự quay vì bị thành xi-lanh dẫn hướng, nên cần một chi tiết trung gian biến đường thẳng thành vòng tròn: đó là tay biên, còn gọi là thanh truyền. Đầu nhỏ của tay biên nối với piston qua chốt piston, cho phép tay biên nghiêng qua lại khi trục xoay. Đầu to ôm lấy cổ biên của trục khuỷu qua một ổ đỡ, có thể là bạc đạn kim hoặc bạc lót trượt tùy xe. Thân tay biên ở giữa là đoạn thép phải chịu nén rồi chịu kéo liên tục mỗi vòng quay. Bộ ba piston, tay biên, trục khuỷu giống cái chân đạp xe đạp: chân đẩy lên xuống, còn bàn đạp quay tròn.',
      'Lần cháy nổ đẩy piston đi xuống, lực ấy truyền qua chốt piston và tay biên rồi dồn vào cổ biên. Vì cổ biên nằm lệch khỏi tâm trục nên cú đẩy không đi thẳng vào tâm mà tạo ra mô-men xoay, làm trục quay đi một góc. Nhờ độ lệch đó, lực thẳng biến thành lực xoay. Điều đáng lưu ý là trong chu trình bốn thì chỉ một trong bốn kỳ sinh công, còn hút, nén và xả đều cần lấy năng lượng từ chính trục khuỷu để kéo piston chạy. Sau kỳ nổ, trục tiếp tục quay nhờ quán tính, kéo piston đi lên, nén hỗn hợp rồi lặp lại chu trình. Ở động cơ hai thì nhịp sinh công dày hơn, nhưng cách chuyển lực qua tay biên vẫn như vậy.',
      'Chuyển động quay đã có, bước tiếp theo là đưa nó ra bánh xe. Từ một đầu trục khuỷu, lực quay được dẫn qua bộ truyền sơ cấp, thường là bánh răng hoặc xích, tới ly hợp và hộp số ở xe số; xe tay ga thường dùng cụm truyền động dây đai biến thiên, tùy xe. Sau hộp số, lực đi tiếp qua xích hoặc bộ truyền cuối để quay bánh sau. Trục khuỷu cũng dẫn động nhiều bộ phận phụ của máy, như cụm cam qua xích hoặc dây đai, bơm nhớt ở nhiều xe và cả bộ phát điện. Một trục quay đều và êm là điều kiện để mọi bộ phận phía sau làm việc ổn định; trục cong hay ổ đỡ rơ làm cả chuỗi truyền động rung theo.'
    ]),
    P('Bánh đà và bạc đạn trục khuỷu làm việc ra sao', [
      'Bánh đà là khối kim loại nặng, tròn, gắn chặt vào một đầu trục khuỷu và quay cùng trục. Công dụng chính của nó là tích trữ động năng: ở kỳ nổ nó nhận bớt năng lượng, còn ở các kỳ hút, nén, xả không sinh công nó trả lại năng lượng ấy để trục quay đều và piston vượt qua được điểm nén. Nhờ vậy máy chạy cầm chừng không giật cục. Trên nhiều xe máy, bánh đà đồng thời là mâm từ của bộ phát điện: nam châm gắn bên trong quay quanh các cuộn dây cố định để sinh điện sạc ắc quy hoặc phục vụ đánh lửa, tùy xe. Vì nặng và quay nhanh, bánh đà phải được lắp đúng tâm và siết chặt đúng yêu cầu của nhà sản xuất, nếu không máy sẽ rung mạnh.',
      'Trục khuỷu quay rất nhanh dưới tải thay đổi liên tục, nên mọi điểm tựa của nó đều cần ổ đỡ. Ở các cổ trục, trục tựa vào vỏ máy qua bạc đạn bi hoặc bạc đạn đũa ở nhiều xe máy nhỏ, hay qua những bạc lót mỏng dạng nửa vòng ở động cơ lớn hơn. Ở cổ biên, đầu to của tay biên thường dùng bạc đạn kim hoặc bạc biên. Dù kiểu nào, mục đích cũng giống nhau: để hai bề mặt kim loại chuyển động tương đối mà không cọ thẳng vào nhau. Các ổ đỡ này chịu lực ép rất lớn theo từng nhịp nổ, nên thợ hay nhắc bạc biên và bạc đạn trục khuỷu khi nói về tuổi thọ của lốc máy. Kiểu ổ đỡ cụ thể tùy xe, sách hướng dẫn của nhà sản xuất sẽ ghi rõ.',
      'Ổ đỡ chỉ bền khi có màng nhớt ngăn giữa các bề mặt. Ở động cơ bốn thì, nhớt thường được bơm qua các đường dẫn trong vỏ máy và trong thân trục tới cổ trục và cổ biên, rồi chảy hoặc văng ra bôi trơn tiếp thành xi-lanh; một số xe còn dùng thêm cách bắn tóe, tùy xe. Màng nhớt vừa giảm ma sát vừa mang nhiệt và mạt kim loại nhỏ đi, về lọc rồi về đáy máy. Nhớt cạn, quá bẩn hoặc bị loãng làm màng này mỏng dần, kim loại bắt đầu chạm nhau và mòn nhanh. Vì vậy chuyện bạc đạn mòn thường bắt nguồn từ thói quen bảo dưỡng: thiếu nhớt hoặc để nhớt quá cũ. Động cơ hai thì bôi trơn theo cách riêng, nên cần làm đúng theo sách hướng dẫn của đúng dòng xe.'
    ]),
    P('Hỏng hóc thường gặp của trục khuỷu và dấu hiệu nhận biết', [
      'Bản thân trục khuỷu là chi tiết rất bền, ít khi hỏng nếu máy được chăm sóc đúng. Hỏng hóc thường bắt đầu từ các ổ đỡ quanh nó. Thiếu nhớt hoặc nhớt quá bẩn làm màng bôi trơn đứt, ổ đỡ mòn và bắt đầu rơ; rơ làm va đập mạnh hơn, mòn nhanh hơn, thành vòng luẩn quẩn. Chạy vòng tua cao kéo dài hoặc chở tải nặng liên tục khiến ổ đỡ phải chịu nhiều hơn. Va chạm cũng gây hại: nước lọt vào buồng đốt khi lội ngập sâu không bị nén như hơi nên có thể làm cong tay biên hoặc hỏng đầu to, còn kẹt piston đột ngột dồn lực ngược về trục. Ở mức nặng nhất, tay biên có thể gãy và phá thủng vỏ máy, lúc đó thiệt hại lan sang nhiều chi tiết khác.',
      'Dấu hiệu quen thuộc nhất là tiếng gõ nặng, trầm, nghe như búa nhỏ gõ từ phía dưới lốc máy và thường tăng theo ga hoặc vòng tua. Tiếng này thường đục và sâu hơn tiếng lạch cạch nhẹ của xupap hay tiếng lách tách của xích cam phía trên. Tuy vậy việc phân biệt bằng tai chỉ là gợi ý, vì piston rơ hay chốt piston mòn cũng có thể gây tiếng gõ, nên kết luận thuộc về thợ. Bên cạnh tiếng gõ, bạn có thể thấy máy rung nhiều hơn bình thường, tay lái hoặc chỗ để chân rung rõ ở một số dải vòng tua. Máy yếu, kéo nặng, nhớt hao nhanh hoặc đổi màu bất thường cũng là manh mối; ở xe có đèn báo áp lực nhớt, đèn sáng là cảnh báo nghiêm trọng.',
      'Cần nhấn mạnh ranh giới an toàn. Một tiếng gõ nặng mới xuất hiện, hoặc tiếng gõ đang to dần, không phải thứ có thể chạy cố về nhà. Ổ đỡ đã rơ mà vẫn cho máy chạy tiếp thì chỉ sau thời gian ngắn trục có thể hỏng, tay biên có thể gãy, và nhớt có thể văng ra bánh sau gây trượt rất nguy hiểm. Hãy nhả ga, bật tín hiệu, bóp phanh và dừng xe ở nơi an toàn, rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Sau đó nhờ xe cứu hộ hoặc người có phương tiện chở xe tới thợ. Đừng đề lại để thử xem tiếng còn hay không, vì mỗi vòng quay thêm là thêm hư hại.'
    ]),
    P('Vì sao đây là việc của thợ đại tu', [
      'Muốn tiếp cận trục khuỷu, thợ phải làm những việc người dùng không thể thay thế: đưa động cơ ra khỏi khung hoặc ít nhất tháo gần hết các bộ phận bao quanh, tách vỏ máy thành hai nửa, rồi mới lấy được trục. Đó là đại tu, tức mở phần cốt lõi của máy, khác hẳn việc thay nhớt hay thay bugi. Mỗi chi tiết trong lốc máy ăn khớp với nhau rất chính xác, một chỗ lắp sai chiều hoặc thiếu gioăng đều có thể làm hỏng cả cụm, rò nhớt hoặc làm mất áp nhớt. Vì vậy người dùng chỉ nên dừng ở việc hiểu nguyên lý và quan sát triệu chứng, còn tháo lắp thuộc về thợ có chuyên môn. Tự mở vỏ máy tại nhà dễ làm hỏng mặt ghép, ren và còn có nguy cơ chấn thương khi nâng máy.',
      'Sau khi mở máy, thợ còn phải đo và đánh giá. Họ kiểm tra độ đảo của trục, tình trạng bề mặt cổ trục và cổ biên, độ rơ của đầu to tay biên, độ mòn của các bạc đạn và mức hư hại của chi tiết liên quan, rồi đối chiếu với dung sai mà nhà sản xuất quy định cho đúng dòng xe. Những phép đo này cần dụng cụ chính xác và thông số riêng, mắt thường không đủ để kết luận. Tùy mức hư hại, kết quả có thể là thay bạc đạn, thay tay biên, ép lại trục hoặc thay nguyên cụm trục khuỷu. Thợ cũng phải xem piston, xi-lanh và đường nhớt, vì nguyên nhân gốc có thể nằm ở đó; chỉ thay trục mà không tìm ra lý do thì hư hại có thể lặp lại.',
      'Phần việc của người dùng là ngăn hư hại xảy ra và mô tả đúng cho thợ. Giữ mức nhớt theo hướng dẫn, thay nhớt đúng loại và đúng kỳ hạn của nhà sản xuất, không rồ ga mạnh lúc máy còn nguội, không lội ngập sâu quá mức xe cho phép là những thói quen bảo vệ trục khuỷu đơn giản nhất. Khi nghi có vấn đề, hãy ghi lại tiếng gõ xuất hiện lúc nào: máy nguội hay nóng, tăng ga hay nhả ga, có kèm rung hoặc mất lực không, nhớt có đổi màu hay hao nhanh không. Bạn cũng có thể nhờ thợ cho xem chi tiết hỏng và giải thích vì sao hỏng. Đại tu động cơ là việc nghiêm túc, nên chọn thợ có chuyên môn và đối chiếu với sách hướng dẫn của đúng dòng xe.'
    ])
  ],
  checklist: [
    'Kiểm tra mức nhớt theo hướng dẫn của nhà sản xuất xe và thay nhớt đúng loại, đúng kỳ hạn.',
    'Nghe tiếng máy lúc cầm chừng và lúc tăng ga để nhận ra tiếng gõ nặng, trầm lạ từ phía dưới lốc máy.',
    'Để ý máy rung hơn bình thường, tay lái hoặc chỗ để chân rung rõ, hoặc xe yếu đi kéo nặng.',
    'Quan sát nhớt hao nhanh hoặc đổi màu bất thường, và đèn báo áp lực nhớt nếu xe có.',
    'Ghi lại tiếng gõ xuất hiện lúc nguội hay nóng, tăng ga hay nhả ga để mô tả cho thợ.'
  ],
  steps: [
    { title: 'Dừng xe an toàn', detail: 'Nhả ga, bật tín hiệu, bóp phanh và dừng ở nơi an toàn; tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt.' },
    { title: 'Không đề lại để thử', detail: 'Mỗi lần quay thêm với ổ đỡ đã rơ có thể làm hư hại nặng hơn, nên đừng đề máy chỉ để xem tiếng còn hay không.' },
    { title: 'Đưa xe tới thợ', detail: 'Nhờ xe cứu hộ hoặc người có phương tiện chở xe đi, thay vì chạy cố về nhà.' },
    { title: 'Mô tả triệu chứng cụ thể', detail: 'Nói rõ tiếng gõ xuất hiện lúc nào, có rung hay mất lực không, nhớt hao hay đổi màu ra sao để thợ khoanh vùng.' }
  ],
  warnings: [
    'Tiếng gõ nặng mới xuất hiện hoặc đang to dần là lý do dừng xe ngay; chạy cố có thể làm gãy tay biên, phá vỏ máy và làm nhớt văng ra bánh sau gây trượt.',
    'Không tự mở lốc máy hay tháo trục khuỷu tại nhà; đây là việc đại tu cần dụng cụ đo, thông số riêng và thợ có chuyên môn.',
    'Tiếng gõ chỉ là gợi ý, không phải chẩn đoán: piston, chốt piston hay các chi tiết khác cũng có thể gây tiếng tương tự, nên cần thợ kết luận.'
  ],
  notes: [
    'Kiểu trục khuỷu, kiểu ổ đỡ, cách dẫn nhớt và vị trí bánh đà khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của đúng xe bạn.',
    'Nội dung chỉ giải thích nguyên lý và dấu hiệu quan sát để người dùng hiểu và trao đổi với thợ, không thay cho chẩn đoán trực tiếp.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bôi trơn và bảo dưỡng động cơ',
    'Tài liệu kỹ thuật của nhà sản xuất về cấu tạo động cơ của đúng dòng xe'
  ],
  related: ['piston-xy-lanh', 'he-thong-boi-tron-dong-co-xe-may', 'nguyen-ly-4-thi', 'dong-co-2-thi-va-4-thi-khac-biet-co-ban', 'cang-sau-xe-may-la-gi-bac-cang-mon-va-lech']
};
