// AI WIKI TOTAL — S01216; giải thích nguyên lý bơm nhớt bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'bom-nhot-xe-may-la-gi-va-dau-hieu-bom-yeu',
  title: 'Bơm nhớt xe máy là gì: vai trò, kiểu bơm thường gặp và dấu hiệu bơm nhớt yếu hoặc nhớt không lên',
  seoTitle: 'Bơm nhớt xe máy là gì: vai trò, kiểu bơm và dấu hiệu bơm yếu',
  metaDescription: 'Bơm nhớt xe máy hút nhớt từ đáy máy và đẩy tới các điểm bôi trơn. Tìm hiểu kiểu bơm, lý do nhớt không lên, đèn báo nhớt và lúc phải dừng xe ngay.',
  summary: 'Bài giải thích bơm nhớt xe máy làm gì: hút nhớt từ đáy máy rồi đẩy theo áp lực tới các điểm bôi trơn để kim loại không cọ trực tiếp vào nhau. Nội dung nêu hai kiểu bơm thường gặp là bơm bánh răng và bơm rô-to ở mức nguyên lý, cách bơm được dẫn động từ trục khuỷu, rồi phân tích lý do nhớt không lên đủ như thiếu nhớt, lưới lọc nghẹt, nhớt biến chất hay bơm mòn. Bài cũng mô tả dấu hiệu quan sát được như đèn báo nhớt, tiếng gõ khô, nóng máy và việc nên làm trước khi giao thợ.',
  quickAnswer: 'Bơm nhớt hút nhớt từ đáy máy và đẩy tới các điểm bôi trơn để kim loại không cọ trực tiếp vào nhau. Kiểu thường gặp là bơm bánh răng hoặc bơm rô-to, quay theo trục khuỷu. Nhớt không lên đủ có thể do thiếu nhớt, lưới lọc nghẹt, nhớt loãng hoặc bơm mòn. Đèn báo nhớt sáng lúc đang chạy, tiếng gõ khô hay máy nóng bất thường là lý do để bóp phanh, dừng xe an toàn, tắt máy và không chạy tiếp.',
  keyPoints: [
    'Bơm nhớt hút nhớt từ đáy máy và đẩy qua các đường dẫn tới trục khuỷu, trục cam, bạc và nhiều điểm khác, giữ cho giữa các mặt kim loại luôn có một lớp màng nhớt.',
    'Kiểu bơm thường gặp là bơm bánh răng và bơm rô-to; cả hai thường được dẫn động từ trục khuỷu, nên bơm làm việc khi nào máy quay thì bơm chạy khi ấy.',
    'Nhớt không lên đủ thường đến từ thiếu nhớt, lưới lọc ở đầu hút bị nghẹt, nhớt loãng hoặc biến chất, bơm mòn, van xả áp kẹt hay bạc trục mòn rộng.',
    'Đèn báo nhớt sáng khi đang chạy, tiếng gõ khô theo vòng tua và máy nóng bất thường là dấu hiệu cần dừng xe an toàn, không cố đi thêm một đoạn.',
    'Sau khi dừng, chỉ kiểm tra mức nhớt và vết rò theo sách hướng dẫn; nếu mức nhớt ổn mà đèn vẫn sáng thì giao thợ, không nổ máy lại để thử.'
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['bơm nhớt', 'lưới lọc nhớt', 'đáy máy chứa nhớt', 'đường dẫn nhớt', 'đèn báo nhớt', 'màng nhớt'],
  keywords: ['bơm nhớt xe máy', 'bơm nhớt yếu', 'đèn báo nhớt', 'nhớt không lên'],
  sections: [
    P('Bơm nhớt làm gì trong động cơ', [
      'Bơm nhớt là chi tiết có nhiệm vụ lấy nhớt từ nơi chứa ở đáy động cơ rồi đẩy đi khắp các điểm cần bôi trơn, dưới một áp lực đủ để nhớt chui được vào những khe hẹp giữa các mặt kim loại. Nhờ đó trục khuỷu, thanh truyền, trục cam, xi-lanh và các bánh răng luôn được ngăn cách bằng một lớp màng nhớt mỏng thay vì cọ thẳng vào nhau. Không có bơm, nhớt chỉ nằm yên ở đáy máy, và phần lớn chi tiết quay nhanh phía trên sẽ khô dầu chỉ sau một quãng chạy ngắn. Vì vậy câu nói bơm nhớt hỏng là cháy máy tuy nghe dữ dội nhưng đúng bản chất: bơm ngừng làm việc đồng nghĩa với mất bôi trơn, và mất bôi trơn là con đường nhanh nhất dẫn tới kẹt máy.',
      'Hành trình của nhớt bắt đầu ở đáy máy, nơi có một đầu hút thường được bọc lưới lọc thô để giữ lại cặn lớn. Bơm hút nhớt qua lưới, đẩy tiếp qua bộ lọc nhớt ở những xe có bộ lọc, rồi vào các đường dẫn khoan sẵn trong lốc máy và trục khuỷu, tỏa ra bạc đầu to, bạc trục, cơ cấu cam và nhiều điểm khác tùy thiết kế. Nhớt sau khi làm việc chảy xuống, gom về đáy máy và được bơm hút đi lần nữa, tạo thành một vòng tuần hoàn khép kín. Cấu tạo bơm nhớt xe máy nhìn chung đơn giản so với nhiều bộ phận khác, nhưng vị trí của nó mang tính quyết định: nằm ở đầu nguồn, mọi chi tiết phía sau đều phụ thuộc vào nó. Lộ trình nhớt cụ thể khác nhau tùy xe, nên ở đây chỉ nêu nguyên lý chung.',
      'Cần phân biệt hai ý hay bị lẫn với nhau. Bơm tạo ra dòng chảy, còn áp lực nhớt hình thành khi dòng chảy ấy gặp lực cản của khe hở và đường dẫn hẹp phía sau. Khe hở vừa đủ nhỏ thì nhớt bị giữ lại, tạo thành màng chịu tải; khe hở mòn rộng ra thì nhớt thoát nhanh hơn và áp lực tụt dù bơm vẫn quay. Phần lớn động cơ còn có van xả áp ở bơm hoặc ngay sau bơm, mở ra cho nhớt quay về khi áp lực vượt mức thiết kế để không làm hại gioăng và bộ lọc. Ngoài bôi trơn, dòng nhớt còn mang bớt nhiệt khỏi những chỗ nóng như ổ trục, và cuốn mạt kim loại nhỏ về phía lưới lọc. Đó là lý do thiếu nhớt thường kèm nóng máy: bôi trơn và làm mát gắn liền với nhau.'
    ]),
    P('Kiểu bơm thường gặp và cách dẫn động', [
      'Hai kiểu bơm nhớt hay được nhắc tới ở xe máy là bơm bánh răng và bơm rô-to. Bơm bánh răng gồm hai bánh răng ăn khớp đặt khít trong một vỏ nhỏ. Khi quay, nhớt bị kẹt trong các rãnh giữa răng và thành vỏ, được mang dọc theo vỏ từ cửa hút sang cửa đẩy, còn chỗ hai bánh răng ăn khớp chặn không cho nhớt chảy ngược. Kiểu này bền, dễ chế tạo và chịu được nhớt có lẫn chút cặn mịn. Điểm đáng nhớ là lượng nhớt bơm đi gần như tỷ lệ với tốc độ quay, nên lúc cầm chừng bơm đẩy ít hơn lúc vòng tua cao. Không có kiểu nào tuyệt đối tốt hơn kiểu nào; nhà sản xuất chọn theo kích thước, chi phí và cách bố trí trong lốc máy.',
      'Bơm rô-to gồm một rô-to trong có các thùy, đặt lệch tâm bên trong một rô-to ngoài có nhiều hơn rô-to trong một rãnh. Khi hai rô-to cùng quay, các khoang nằm giữa chúng liên tục đổi thể tích: khoang nở rộng ở phía cửa hút nên kéo nhớt vào, khoang thu hẹp ở phía cửa đẩy nên ép nhớt ra. Hình dạng này cho dòng nhớt khá đều và gọn, nên được dùng nhiều ở động cơ cỡ nhỏ. Cả hai kiểu đều thuộc nhóm bơm thể tích, nghĩa là dựa vào khe hở rất nhỏ giữa các chi tiết để giữ nhớt lại, vì thế mòn lâu ngày sẽ làm hiệu suất giảm. Xe của bạn dùng kiểu nào, bạn chỉ cần tra tài liệu kỹ thuật; thợ mở nắp bơm là nhận ra ngay.',
      'Còn bơm được dẫn động bằng gì? Cách thường gặp là lấy chuyển động từ trục khuỷu, qua bánh răng, xích hoặc một trục trung gian, nên bơm thường chạy bằng cơ khí, không có công tắc riêng. Máy quay là bơm quay theo, và nhớt được đẩy đi từ ngay lúc nổ máy. Có xe gắn bơm ở đầu trục, có xe đặt trong nắp lốc máy; vị trí và cách truyền tùy dòng xe. Nhiều xe để nhớt ngay đáy máy, trong khi một vài dòng xe lớn dùng thêm két chứa riêng và bơm hồi để rút nhớt về, gọi là bôi trơn đáy khô. Bài này nói về bơm bôi trơn của động cơ bốn thì; xe hai thì đời cũ có bơm nhớt pha riêng, hoạt động và dấu hiệu khác hẳn. Nếu bộ truyền động của bơm gãy hoặc mòn, bơm dừng mà máy vẫn quay, và đó là tình huống rất nguy hiểm.'
    ]),
    P('Nhớt không lên đủ vì những lý do nào', [
      'Lý do dễ gặp và dễ xử lý nhất là thiếu nhớt. Mức nhớt hạ dần vì hao theo thời gian, rò ở gioăng, hoặc sau một lần thay nhớt đổ chưa đủ. Mức xuống thấp thì đầu hút ở đáy máy có thể bị hở, nhất là lúc xe nghiêng khi vào cua, phanh gấp hay leo dốc, nhớt dồn về một phía và bơm hút lẫn bọt khí. Bơm vốn sinh ra để đẩy chất lỏng, nên hút phải khí thì dòng nhớt đứt quãng và áp lực chao đảo. Điều đáng chú ý là một chiếc bơm hoàn toàn khỏe mạnh vẫn cho kết quả kém chỉ vì thiếu nguyên liệu. Do đó, trước khi nghi bơm hỏng, việc xem mức nhớt luôn đứng đầu danh sách: rẻ, an toàn và đủ để loại trừ một nguyên nhân lớn. Tư thế xe và vạch mức đúng đều tùy xe, đọc trong sách hướng dẫn.',
      'Nhóm thứ hai nằm ở đường hút và đường dẫn. Lưới lọc ở đầu hút gom cặn của nhiều mùa chạy: mạt kim loại, bùn nhớt hình thành khi để nhớt quá lâu, mảnh gioăng hay keo thừa sau lần sửa máy. Lưới bám bẩn khiến bơm hút khó, nhớt vào ít đi và đôi khi tạo hiệu ứng giống như hút phải khí. Bộ lọc nhớt tắc cũng cản dòng, dù nhiều bộ có van cho nhớt đi tắt để máy không bị bỏ đói hẳn, đổi lại là nhớt chưa được lọc chạy vào máy. Nhớt lão hóa, nhiễm xăng hoặc loãng đi vì nóng quá mức cũng làm áp lực thấp, bởi nhớt chảy qua khe hở dễ hơn và màng nhớt kém chịu tải. Đây là lý do thay nhớt đúng kỳ và đúng loại theo sách hướng dẫn được xem như bảo vệ cho cả chiếc bơm.',
      'Nhóm thứ ba là bản thân bơm và những chi tiết phía sau nó. Bơm mòn vì tuổi thọ, vì cặn mài hoặc vì chạy lâu với nhớt bẩn: khe hở giữa bánh răng hay rô-to với vỏ tăng lên, nhớt rò ngược từ cửa đẩy về cửa hút, lượng nhớt thật sự đi ra giảm, nhất là khi máy nóng và nhớt loãng. Van xả áp bị kẹt ở vị trí mở hoặc lò xo yếu cũng làm nhớt xả về quá sớm. Chiều ngược lại cũng xảy ra: bạc trục và bạc biên mòn rộng khiến nhớt thoát nhanh qua khe, áp lực tụt dù bơm còn tốt, nên không thể kết luận bơm hỏng chỉ từ một cái đèn. Cuối cùng, công tắc hay cảm biến báo nhớt cũng có thể hỏng, đèn sáng mà nhớt vẫn đủ. Phân biệt từng nguyên nhân cần dụng cụ đo và việc mở máy, thuộc phần việc của thợ.'
    ]),
    P('Dấu hiệu và đèn báo cần dừng xe ngay', [
      'Đèn báo nhớt là tín hiệu rõ nhất mà bảng đồng hồ có thể đưa ra. Ở nhiều xe, đèn gắn với một công tắc đo áp lực nhớt trong máy: đèn sáng lúc bật khóa chưa nổ để tự kiểm tra, rồi tắt ngay sau khi máy nổ và áp lực lên. Một số xe lại dùng đèn hoặc biểu tượng để báo mức nhớt thấp, ý nghĩa khác đi, nên hãy đọc sách hướng dẫn để biết đèn của xe mình mang nghĩa nào. Điểm chung là đèn nhớt sáng lúc đang chạy, hoặc chập chờn nhất là khi cầm chừng sau lúc máy đã nóng, là dấu hiệu nghiêm trọng chứ không phải lời nhắc nhẹ. Đừng tự nhủ cố thêm một đoạn nữa về nhà hay tới tiệm; mỗi quãng đường máy chạy lúc thiếu bôi trơn là thêm một lần kim loại cọ vào kim loại.',
      'Cách dừng xe cũng quan trọng không kém. Hãy báo hiệu, giảm ga từ từ, bóp phanh và tấp vào nơi an toàn, tránh phanh gấp giữa dòng xe đông. Sau đó tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, tuyệt đối không xoay sang vị trí khóa cổ khi xe còn lăn bánh. Chống xe chắc chắn trên nền phẳng, rồi để máy nguội một lúc. Đừng nổ máy lại chỉ để xem đèn còn sáng hay không, vì mỗi lần nổ là thêm một lần các chi tiết quay mà không được bôi trơn đủ. Nếu xe mất công suất đột ngột, máy kêu lạ hoặc có cảm giác bị bó cứng, việc đầu tiên vẫn là giữ tay lái ổn định, bóp phanh và dừng xe, không vặn thêm ga để cố đi tiếp.',
      'Ngoài đèn báo, thân máy cũng cảnh báo bằng âm thanh và nhiệt. Tiếng gõ khô, lạch cạch đều theo vòng tua, nghe rõ hơn khi máy nóng hoặc khi tăng ga, có thể là dấu hiệu bạc và trục thiếu màng nhớt, dù tiếng gõ cũng đến từ nhiều nguyên nhân khác như muội than hay xu-páp rơ. Máy nóng nhanh bất thường, mùi khét, ống xả ra khói hoặc máy yếu hẳn rồi tắt đột ngột đều là những dấu hiệu đáng lo. Cần nhớ rằng mỗi dấu hiệu đứng riêng chưa chứng minh bơm nhớt yếu; nhưng khi chúng đi cùng đèn nhớt sáng hay mức nhớt thấp, nghĩa là bôi trơn đang gặp vấn đề và xe phải ngưng chạy. Lời khuyên an toàn nhất là coi những tín hiệu này như báo động thật, chứ không phải chuyện để theo dõi thêm vài ngày.'
    ]),
    P('Việc nên làm và lúc giao thợ', [
      'Sau khi dừng xe và để máy nguội bớt, hãy xem mức nhớt. Đặt xe thẳng đứng trên nền phẳng, kiểm tra bằng que thăm hoặc kính ngắm tùy xe, đối chiếu với vạch trong sách hướng dẫn. Cùng lúc, nhìn quanh lốc máy, đáy máy và nền đất xem có vệt nhớt rò, nắp xả nhớt hay bộ lọc có ướt dầu không; nhớt nóng có thể gây bỏng nên chỉ làm khi máy đã nguội bớt. Mức nhớt thấp rõ ràng thì có thể bổ sung đúng loại nhớt xe yêu cầu rồi theo dõi, nhưng hãy hiểu bổ sung chỉ giải quyết chuyện thiếu nhớt, không sửa được nguyên nhân làm nhớt hao. Còn mức nhớt bình thường mà đèn vẫn sáng, hoặc đèn sáng lại sau khi bổ sung, thì đừng chạy tiếp: gọi cứu hộ hoặc nhờ chở xe tới thợ.',
      'Những việc còn lại thuộc về thợ có chuyên môn: đo áp lực nhớt bằng dụng cụ, mở nắp để xem lưới lọc và đáy máy, kiểm tra độ mòn của bơm cùng khe hở bạc, thay bơm hoặc chi tiết liên quan. Đừng tự tháo vỏ máy, đổi lò xo van hay thử nới đường nhớt để tìm lỗi, vì làm sai chỉ khiến máy hỏng nặng hơn. Hãy đưa cho thợ một ghi chú cụ thể: đèn sáng lúc nguội hay lúc nóng, lúc cầm chừng hay lúc ga lớn, có tiếng gõ không, lần thay nhớt gần nhất cách đây bao lâu, loại nhớt đã dùng, từng đổ thiếu hay thừa ra sao. Những chi tiết đó giúp thợ phân loại nhanh giữa thiếu nhớt, lưới bẩn, bơm mòn, bạc mòn và cảm biến báo sai, thay vì phải đoán từ một câu xe kêu và mất nhớt.',
      'Phòng bệnh cho bơm nhớt thực chất là chăm sóc nhớt. Hãy kiểm tra mức nhớt định kỳ và trước những chuyến đi dài, thay nhớt cùng bộ lọc theo lịch trong sách hướng dẫn, dùng loại nhớt đúng cấp và đúng độ nhớt xe yêu cầu, tránh để nhớt quá cũ hóa bùn. Sau mỗi lần thay nhớt hoặc sửa máy, để ý đèn nhớt tắt đúng lúc nổ máy và máy êm như thường. Tránh rồ ga mạnh lúc máy còn nguội, vì nhớt lạnh đặc cần chút thời gian mới chảy tới mọi nơi. Với xe đã chạy nhiều năm, thói quen nghe tiếng máy mỗi sáng giúp phát hiện sớm điều khác lạ. Hãy xem đèn nhớt là lời cảnh báo cuối cùng chứ không phải tín hiệu đầu tiên; mức nhớt hao nhanh hay tiếng máy đổi giọng thường xuất hiện trước đó.'
    ])
  ],
  checklist: [
    'Kiểm tra mức nhớt định kỳ và trước chuyến đi dài, đặt xe thẳng đứng trên nền phẳng và đọc vạch theo sách hướng dẫn.',
    'Để ý đèn nhớt: sáng lúc bật khóa rồi tắt khi máy nổ là bình thường, sáng hoặc chập chờn lúc đang chạy là dấu hiệu phải dừng xe.',
    'Nghe tiếng máy mỗi sáng và ghi nhớ tiếng bình thường, để nhận ra tiếng gõ khô hay tiếng lạ sớm hơn.',
    'Nhìn nền chỗ đỗ xe và quanh lốc máy xem có vệt nhớt rò không.',
    'Thay nhớt và bộ lọc đúng lịch trong sách hướng dẫn, dùng loại nhớt đúng yêu cầu của xe.'
  ],
  steps: [
    { title: 'Giảm ga và tấp xe vào nơi an toàn', detail: 'Báo hiệu, giảm ga từ từ, bóp phanh và dừng xe ở chỗ không cản đường, tránh phanh gấp giữa dòng xe đông.' },
    { title: 'Tắt máy đúng cách', detail: 'Dùng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ, chống xe chắc chắn rồi để máy nguội bớt.' },
    { title: 'Xem mức nhớt và vết rò', detail: 'Đặt xe thẳng đứng trên nền phẳng, kiểm tra bằng que thăm hoặc kính ngắm theo sách hướng dẫn, nhìn quanh lốc máy xem có nhớt rò không.' },
    { title: 'Quyết định đi tiếp hay gọi hỗ trợ', detail: 'Mức nhớt thấp thì bổ sung đúng loại rồi theo dõi; mức ổn mà đèn vẫn sáng hoặc có tiếng gõ thì không nổ máy lại, nhờ chở xe tới thợ và đưa ghi chú triệu chứng.' }
  ],
  warnings: [
    'Đèn nhớt sáng hoặc chập chờn lúc đang chạy, kèm tiếng gõ khô, nóng máy hay mùi khét là dấu hiệu phải bóp phanh, dừng xe an toàn và tắt máy ngay, không cố chạy thêm một đoạn.',
    'Không nổ máy lại nhiều lần để thử đèn; mỗi lần nổ khi thiếu bôi trơn là thêm một lần mài mòn hoặc kẹt máy.',
    'Không tự tháo vỏ máy, thay lò xo van hay nới đường nhớt để tìm lỗi; nhớt nóng còn có thể gây bỏng, nên chỉ kiểm tra khi máy đã nguội bớt.'
  ],
  notes: [
    'Các dấu hiệu trong bài chỉ là manh mối quan sát được; đèn nhớt sáng có thể do thiếu nhớt, lưới bẩn, bơm mòn, bạc mòn hoặc cảm biến hỏng, và chỉ thợ có dụng cụ đo mới kết luận được.',
    'Ý nghĩa của đèn báo, vị trí và kiểu bơm, cách kiểm tra mức nhớt khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bôi trơn động cơ, kiểm tra mức nhớt và đèn báo trên bảng đồng hồ',
    'Tài liệu kỹ thuật của nhà sản xuất về hệ thống bôi trơn của đúng dòng xe'
  ],
  related: ['he-thong-boi-tron-dong-co-xe-may', 'dau-nhot-xe-may', 'loc-may-xe-may-la-gi', 'loc-nhot-xe-may-la-gi-va-luoi-loc-nhot']
};
