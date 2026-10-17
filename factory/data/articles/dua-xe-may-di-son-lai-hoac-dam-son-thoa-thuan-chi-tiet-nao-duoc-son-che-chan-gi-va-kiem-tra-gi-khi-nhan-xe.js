// AI WIKI TOTAL — S01807; hướng dẫn thỏa thuận, che chắn và kiểm tra khi sơn lại xe máy, không nêu số liệu, giá, tên sơn hay hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'dua-xe-may-di-son-lai-hoac-dam-son-thoa-thuan-chi-tiet-nao-duoc-son-che-chan-gi-va-kiem-tra-gi-khi-nhan-xe',
  title: 'Đưa xe máy đi sơn lại hoặc dặm sơn: thỏa thuận chi tiết nào được sơn, che chắn gì và kiểm tra gì khi nhận xe',
  seoTitle: 'Đưa xe máy đi sơn lại: thỏa thuận, che chắn và kiểm tra khi nhận xe',
  metaDescription: 'Đưa xe máy đi sơn lại hay dặm sơn cần chốt gì trước: chi tiết được sơn, màu, độ bóng, che chắn, tháo lắp và cách soi xe khi nhận, kể cả vỏ nhựa.',
  summary: 'Bài giải thích vì sao sơn lại hoặc dặm sơn xe máy cần được thỏa thuận kỹ trước khi giao xe, vì sơn xong khó sửa, màu dễ lệch và chỗ không muốn sơn dễ bị dính. Nội dung đi qua việc thống nhất chi tiết được sơn, màu, độ bóng và tem, việc che chắn hoặc tháo lắp đèn, ổ khóa, đồng hồ, cao su, dây điện, cách dọn xe và chụp ảnh lúc gửi, rồi những điểm cần soi khi nhận xe và theo dõi trong những ngày đầu sau đó.',
  quickAnswer: 'Trước khi đưa xe đi sơn lại, hãy chốt bốn việc: chi tiết nào được sơn cùng màu và độ bóng, chi tiết nào được che hoặc tháo và ai lắp lại, tình trạng xe lúc gửi qua ảnh và ghi chép, cùng cách kiểm lúc nhận. Khi nhận xe, soi màu ngoài trời, nhìn nghiêng tìm vệt chảy, hạt bụi, chỗ sót, rồi thử khóa, đèn, còi, xi nhan và kiểm ốp, ốc. Sau đó theo dõi bong, phồng và báo thợ sớm.',
  keyPoints: [
    'Sơn xong khó sửa nên mọi lựa chọn về chi tiết, màu và độ bóng cần được chốt và ghi lại trước khi giao xe, chứ không đợi đến lúc nhận xe.',
    'Dặm sơn dễ lộ ranh màu vì màu cũ đã phai; hãy hỏi thợ cách làm cho màu liền và xem mẫu dưới ánh sáng ngoài trời, không chỉ dưới đèn xưởng.',
    'Hỏi rõ chi tiết nào được che, chi tiết nào tháo ra, ai lắp lại và ốc vít được giữ ra sao; việc đụng tới phanh, bánh, dây điện thuộc về thợ.',
    'Dọn cốp, chụp ảnh từ nhiều góc và ghi lại thỏa thuận lúc gửi để phân biệt lỗi sẵn có với lỗi phát sinh sau khi sơn.',
    'Lúc nhận xe, soi ngoài trời, nhìn nghiêng tìm vệt chảy, bụi, chỗ sót, keo che; thử khóa, đèn, còi, xi nhan; sơn dính vào phanh hay lốp thì không chạy, báo thợ.'
  ],
  category: 'docs',
  hub: 'quy-trinh-bao-duong',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['sơn lại xe máy', 'dặm sơn', 'vỏ nhựa xe máy', 'che chắn khi sơn', 'tem và chữ trên xe', 'kiểm tra khi nhận xe'],
  keywords: ['đưa xe máy đi sơn lại', 'dặm sơn xe máy ở tiệm', 'nhận xe sau khi sơn lại', 'sơn lại vỏ nhựa xe máy'],
  sections: [
    P('Vì sao việc sơn lại cần thỏa thuận kỹ trước khi đưa xe vào xưởng', [
      'Sơn là công việc đi một chiều: khi màu đã lên và lớp bóng đã hoàn thiện, muốn đổi ý thường phải làm lại cả mảng chứ hiếm khi gỡ riêng được một chút. Vì vậy mọi quyết định nên được chốt trước lúc xe vào xưởng, thay vì đợi đến khi nhận xe về mới phát hiện điều mình không muốn. Chủ xe thường đưa xe đi vì trầy nhiều hoặc vì muốn làm mới, rồi để xe lại mà chưa nói rõ mình cần gì và không cần gì. Câu trả lời ngắn cho người đang phân vân là chốt đủ bốn việc: phần nào được sơn, chi tiết nào được che hoặc tháo ra, tình trạng xe lúc gửi ra sao, và khi nhận xe sẽ kiểm những gì. Chuyện giá cả bàn riêng; bài này chỉ bàn phạm vi công việc và cách kiểm tra.',
      'Có ba rủi ro hay gặp. Thứ nhất là sơn xong khó sửa, vì mỗi lần chỉnh lại là thêm một lượt làm việc trên chính bề mặt vừa hoàn thiện. Thứ hai là màu lệch: màu cũ đã phai theo nắng và thời gian, còn màu mới pha ra đặt cạnh nó có thể lộ ranh giới, nhất là ở những chỗ chỉ dặm sơn. Với dặm sơn, thợ thường phải xử lý lan sang vùng bên cạnh để màu liền mạch, nên phạm vi thực tế có thể rộng hơn chỗ trầy bạn chỉ vào; hãy hỏi trước để không bị bất ngờ. Thứ ba là chỗ không muốn sơn lại bị dính sơn, như kính đèn, ổ khóa, cao su hay tem. Cả ba rủi ro đều giảm đáng kể nếu hai bên nói rõ từ đầu, thay vì đoán ý nhau.',
      'Chữ “làm mới” có thể được hiểu rất khác nhau: bạn nghĩ đến cả chiếc xe, thợ hiểu là vài chi tiết đang xuống màu; bạn tưởng thợ đã tự biết phải che đèn, thợ lại tưởng bạn muốn phủ kín mọi thứ. Nói rõ từ đầu giúp thợ làm đúng ý và cho bạn căn cứ cụ thể nếu sau này có chỗ chưa khớp. Hãy nhờ thợ nói ra quy trình dự kiến bằng lời dễ hiểu: chi tiết nào sơn, chi tiết nào tháo, xe sẽ nằm xưởng bao lâu, và ai báo tin khi có thay đổi. Sau cuộc trao đổi, ghi lại bằng tin nhắn hoặc phiếu nhận xe để hai bên cùng đọc lại được. Người thợ có kinh nghiệm thường sẵn lòng giải thích; nếu câu hỏi nào cũng bị gạt đi, đó là lúc nên cân nhắc lại.'
    ]),
    P('Thống nhất phần nào được sơn, màu và độ bóng', [
      'Bước đầu là gọi tên từng chi tiết sẽ sơn và từng chi tiết giữ nguyên: ốp thân, mặt nạ, chắn bùn, ốp đuôi, bình xăng, khung hay chi tiết kim loại khác, tùy xe. Với việc sơn lại vỏ nhựa xe máy, hãy hỏi thêm cách thợ xử lý bề mặt nhựa, và chi tiết nào là nhựa đã được sơn từ đầu, chi tiết nào là nhựa có màu sẵn; điều này tùy xe và tùy từng chi tiết nên đừng tự suy đoán. Những chi tiết nhựa đen nhám hoặc nhựa thô thường được để nguyên, nhưng vẫn cần hỏi cho chắc. Hãy chỉ trực tiếp vào xe, chụp ảnh và đánh dấu chi tiết nào sơn. Đừng quên hỏi mặt khuất, mép trong và những góc ít nhìn thấy có được sơn tới nơi không, vì đó là chỗ hay phát sinh hiểu lầm.',
      'Màu là chỗ dễ lệch nhất. Hãy hỏi rõ thợ sẽ pha theo màu cũ của xe hay đổi sang màu khác. Xe dùng đã lâu thì màu cũ có thể phai, nên pha đúng màu nguyên bản chưa chắc khớp với phần còn lại; thợ có thể cho màu chuyển liền sang chi tiết kề bên, và bạn nên hỏi họ định làm cách nào. Hãy xem mẫu màu ngoài trời, dưới ánh sáng ban ngày, vì dưới đèn xưởng màu nhìn khác hẳn; màu có nhũ hay ánh kim càng cần xem ở nhiều góc. Độ bóng cũng cần chốt: bóng, bán bóng hay mờ. Nếu chọn sơn mờ, cách rửa và lau về sau khác sơn bóng, nội dung ấy nằm ở bài riêng về sơn mờ trên xe máy, nên ở đây chỉ nhắc để bạn biết mà hỏi thợ.',
      'Tem và chữ trên xe thường bị bỏ sót trong lúc bàn. Hãy chụp lại vị trí từng tem, từng chữ trước khi giao xe, rồi nói rõ giữ nguyên, bóc ra rồi dán lại, hay bỏ hẳn; nếu muốn có tem mới thì hỏi ai chuẩn bị và có giống mẫu cũ không. Tem nằm trên vùng cần sơn thường phải bóc hoặc che, và tem cũ có thể không dùng lại được nguyên vẹn, tùy chất liệu. Cuối cùng là chuyện thời gian: hãy hỏi xe sẽ nằm xưởng bao lâu, để ở chỗ nào, ai giữ chìa, và thợ sẽ báo bạn bằng cách nào khi xe xong hoặc khi cần quyết định thêm. Hãy hỏi thêm điều gì có thể làm xe nằm lâu hơn dự kiến, vì công việc sơn phụ thuộc nhiều vào điều kiện làm việc của xưởng.'
    ]),
    P('Che chắn và tháo lắp những gì', [
      'Lúc phun, sơn không chỉ bám vào chỗ cần sơn mà còn bay thành sương mịn, rơi lên mọi thứ gần đó. Vì vậy những chi tiết không được sơn phải được che kín hoặc tháo ra khỏi xe. Danh sách cần hỏi gồm đèn và kính đèn, ổ khóa, kính và viền đồng hồ, tay nắm, các mảnh cao su và gioăng, dây điện cùng giắc cắm, tem và logo, rồi đến những phần gần phanh, bánh và ống xả. Cao su, gioăng mà dính sơn dễ cứng lại, nứt hoặc bong về sau; kính đèn và kính đồng hồ dính sơn thì dễ mờ, khó phục hồi như cũ. Chi tiết nào che bằng băng, chi tiết nào tháo hẳn là do thợ quyết định, nhưng bạn nên biết trước để hiểu điều gì sẽ diễn ra với xe của mình.',
      'Với chi tiết được tháo ra, hãy hỏi ba điều: tháo những chi tiết nào, ai lắp lại, và ốc vít được gom giữ ra sao. Ốc vít trên cùng một chiếc xe thường không giống nhau về loại và độ dài, nên chúng cần về đúng chỗ cũ; cách gom thường thấy là đựng riêng theo từng chi tiết, và bạn có thể hỏi thợ làm thế nào. Dây điện và giắc cắm cũng vậy: chi tiết nào đã bị rút ra thì phải được cắm lại đúng và thử lại, chứ không phải để đó. Mọi thao tác liên quan đến phanh, bánh, dây điện là việc của thợ có chuyên môn; bạn chỉ cần biết chúng có bị đụng tới hay không, không cần và không nên tự làm. Chi tiết nào cần tháo ra và tháo đến mức nào còn tùy xe, nên hãy để thợ giải thích cách làm phù hợp với chiếc xe của bạn.',
      'Che chắn không bao giờ hoàn hảo tuyệt đối: các mép giữa ốp, khe quanh đèn, rãnh quanh ổ khóa là những chỗ khó che kín. Hãy hỏi thợ chỗ nào họ thấy khó nhất, rồi nhớ đúng những chỗ ấy khi nhận xe để soi kỹ hơn. Có một giới hạn an toàn cần nói rõ: sơn hay dung môi dính lên mặt lốp hoặc bề mặt liên quan đến phanh có thể làm giảm độ bám và hiệu quả phanh. Bạn nên hỏi thợ cách giữ các phần này sạch trong lúc làm. Nếu lúc nhận xe thấy sơn dính vào lốp, vào gần phanh hoặc có gì lạ ở những chỗ đó, đừng chạy; hãy báo thợ để kiểm tra và xử lý trước. Những chỗ khác bị dính sơn, như cao su hay kính, cũng nên để thợ làm sạch bằng cách phù hợp chứ bạn không nên tự cạo.'
    ]),
    P('Dọn xe và ghi lại tình trạng lúc gửi', [
      'Trước khi đưa xe đi, hãy dọn sạch cốp và mọi ngăn chứa. Giấy tờ quan trọng, chìa dự phòng, áo mưa, dụng cụ và đồ cá nhân nên mang theo bên mình; xe nằm xưởng một thời gian, nhiều người qua lại, và đồ để trong cốp rất dễ thất lạc hay dính sơn. Các phụ kiện gắn thêm như giá để đồ, thùng, gương phụ, bọc tay lái hay giá đỡ điện thoại cũng cần được bàn: phụ kiện nào tháo trước, ai tháo, tháo xong để ở đâu. Xe nên được rửa sạch bụi bẩn trước khi gửi, không phải để thợ đỡ việc mà để ảnh chụp sau đó rõ nét và nhìn thấy hết những vết sẵn có. Hãy nói với thợ nếu xe có điểm lạ khi sử dụng, ví dụ đèn không sáng hoặc ổ khóa chập chờn, để về sau không bị nhầm là lỗi phát sinh.',
      'Ảnh chụp là cách ghi lại hiện trạng nhẹ nhàng mà hiệu quả. Hãy chụp toàn bộ xe từ nhiều góc, rồi chụp cận từng bộ phận sẽ được sơn, kể cả những vết trầy, móp, nứt nhựa hay chỗ phai màu đã có sẵn, để sau này phân biệt được lỗi cũ với lỗi mới. Đừng bỏ qua các chi tiết dễ bị quên: kính đèn, kính đồng hồ, gương, ổ khóa, tem, cao su, ốp ở mặt dưới và mặt sau. Chụp ngoài trời, đủ sáng, và nếu tiện thì quay thêm một đoạn phim ngắn đi quanh xe. Giờ giấc lưu trong ảnh là một tài liệu đáng tin hơn trí nhớ. Mục đích không phải để nghi ngờ thợ mà để hai bên cùng nhìn vào một hiện trạng, đỡ mất công tranh cãi về sau.',
      'Phần còn lại là ghi chép thỏa thuận ở một chỗ có thể xem lại, như tin nhắn gửi cho thợ hoặc phiếu nhận xe mà xưởng đưa. Nội dung nên gồm danh sách chi tiết được sơn, màu và độ bóng đã chốt, cách xử lý tem, những đồ để lại trên xe nếu có, người giữ chìa và cách hai bên liên lạc. Hãy dặn thêm một điều: nếu thợ thấy cần xử lý thêm chỗ chưa bàn, họ nên báo bạn trước khi làm. Chụp lại phiếu hoặc lưu tin nhắn, rồi giữ đến hết giai đoạn kiểm tra sau nhận xe. Nên có một người liên hệ cụ thể ở xưởng, để khi bạn hỏi thăm không bị chuyển qua lại giữa nhiều người. Việc ghi chép này không làm công việc nặng nề hơn, nó chỉ khiến lúc nhận xe nhẹ nhàng và rõ ràng hơn.'
    ]),
    P('Kiểm tra gì khi nhận xe và theo dõi những ngày sau đó', [
      'Đừng nhận xe trong góc xưởng tối hoặc lúc vội. Hãy dắt xe ra ngoài trời, ban ngày, và nhìn từ nhiều góc. Soi màu trước: so với mẫu đã xem, so giữa các chi tiết cạnh nhau, và so chỗ dặm với vùng quanh nó. Rồi nhìn nghiêng sát bề mặt để ánh sáng lướt qua, vì đó là cách dễ thấy nhất những vệt chảy, hạt bụi bị kẹt trong lớp sơn, chỗ sần lợn cợn, chỗ sót chưa phủ và đường ranh màu. Soi kỹ các mép và khe đã nói là khó che, xem còn sót keo che quanh đèn, ổ khóa hay tem hay không. Đừng dùng móng tay hoặc vật cứng ấn thử bề mặt, vì sơn mới có thể còn nhạy với tác động; có gì nghi ngờ thì chỉ cho thợ xem và hỏi.',
      'Sau phần nhìn là phần thử. Mở cốp và thử các ổ khóa, kiểm tra đèn, còi, xi nhan và phần hiển thị trên đồng hồ như trước lúc gửi; ánh đèn phải sáng đều, kính đèn không mờ do dính sơn. Các ốp phải lắp khít, khe hai bên đều nhau, không lỏng, không kêu lạch cạch khi lay nhẹ. Ốc vít phải đủ, đúng loại, không thừa không thiếu; ốp nào còn hở vì thiếu ốc thì nhờ thợ bổ sung. Dây điện không được bị kẹt giữa các mảnh ốp. Với phanh, hãy bóp thử khi xe đứng yên và để ý cảm giác có giống lúc gửi không; cảm giác khác thường, hoặc có sơn dính vào phần gần phanh hay lốp, thì không chạy, quay lại báo thợ. Tem, chữ và màu cuối cùng phải khớp với điều đã thỏa thuận, đối chiếu từng mục trên danh sách và ảnh chụp lúc gửi.',
      'Việc nhận xe chưa kết thúc ở cửa xưởng. Trước khi về, hãy hỏi thợ sơn lúc nào được rửa xe, lúc nào được đánh bóng hay phủ bảo vệ, và nên tránh gì trong giai đoạn đầu; thời điểm và cách làm tùy loại sơn nên cần làm đúng theo hướng dẫn của thợ sơn chứ không theo thói quen cũ. Những ngày đầu, hãy tránh chà xát, đặt vật nặng lên các chi tiết mới sơn, và tránh để xe dưới cây rụng nhựa hay nơi chim đậu. Quan sát định kỳ xem có chỗ bong, phồng, nổi bọt, nứt, đổi màu hay vết loang không, rồi chụp ảnh lại và báo thợ sớm, vì phát hiện sớm giúp dễ xác định nguyên nhân và xử lý. Cách chăm sơn mờ đã có bài riêng trong cùng chuyên mục, còn vết xước nhỏ về sau có bài phân biệt xước lớp bóng và xước tới lớp nền.'
    ])
  ],
  checklist: [
    'Liệt kê từng chi tiết sẽ sơn và chi tiết giữ nguyên, chụp ảnh và đánh dấu trước khi giao xe.',
    'Xem mẫu màu ngoài trời, chốt độ bóng, cách xử lý tem, thời gian xe nằm xưởng và người liên hệ.',
    'Hỏi chi tiết nào che, chi tiết nào tháo, ai lắp lại và ốc vít được giữ ra sao.',
    'Dọn cốp, mang theo giấy tờ và đồ cá nhân, chụp ảnh cận từng chỗ trầy hoặc lỗi sẵn có.',
    'Lúc nhận xe: soi ngoài trời, thử khóa, đèn, còi, xi nhan, kiểm ốp và ốc, rồi hỏi hướng dẫn rửa và đánh bóng.'
  ],
  steps: [
    { title: 'Chốt phạm vi, màu và độ bóng', detail: 'Gọi tên từng chi tiết được sơn, xem mẫu màu ngoài trời, chốt độ bóng và cách xử lý tem; ghi lại bằng tin nhắn hoặc phiếu nhận xe.' },
    { title: 'Thống nhất che chắn và tháo lắp', detail: 'Hỏi chi tiết nào che, chi tiết nào tháo, ai lắp lại, ốc vít giữ ra sao; việc đụng tới phanh, bánh, dây điện để thợ có chuyên môn làm.' },
    { title: 'Dọn xe và ghi lại hiện trạng', detail: 'Dọn cốp, mang theo đồ giá trị, rửa bụi, chụp ảnh nhiều góc và cận từng lỗi sẵn có trước khi giao xe.' },
    { title: 'Nhận xe và theo dõi sau đó', detail: 'Soi ngoài trời, thử khóa, đèn, còi, xi nhan, kiểm ốp và ốc; hỏi hướng dẫn rửa, đánh bóng; thấy bong hay phồng thì báo thợ sớm.' }
  ],
  warnings: [
    'Sơn hoặc dung môi dính lên lốp hay bề mặt liên quan đến phanh có thể làm giảm độ bám và hiệu quả phanh; thấy dính hoặc phanh có cảm giác lạ thì không chạy, quay lại báo thợ.',
    'Không tự cạo, chà hay dùng dung môi lên chỗ bị dính sơn như kính, cao su, tem; hãy nhờ thợ xử lý bằng cách phù hợp.',
    'Không tự tháo hay lắp lại chi tiết liên quan đến phanh, bánh, dây điện sau khi nhận xe; thấy thiếu ốc hay ốp lỏng thì báo thợ để bổ sung.'
  ],
  notes: [
    'Cách làm, thứ tự và thời điểm rửa hay đánh bóng khác nhau tùy loại sơn và tùy xưởng; hãy làm theo hướng dẫn của thợ sơn đã làm chiếc xe của bạn.',
    'Bài này không bàn giá cả và không hướng dẫn tự sơn; chi tiết nào tháo ra, che ra sao còn tùy xe và tùy thợ.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần vệ sinh và chăm sóc bề mặt sơn',
    'Hướng dẫn của thợ sơn đã làm chiếc xe về cách chăm sóc sơn mới'
  ],
  related: ['vet-xuoc-son-xe-may-nho-xu-ly-the-nao', 'son-mo-son-nham-tren-xe-may-rua-lau-va-bao-ve-khac-son-bong-o-dau-nhung-viec-khong-nen-lam', 'chon-luc-dua-xe-may-vao-tiem-va-luc-nhan-xe-ra-dua-som-tranh-sat-gio-dong-cua-de-con-quay-lai-neu-co-gi-la', 'van-chuyen-xe-may-di-xa-bang-tau-xe-khach-hoac-xe-tai', 'chon-mau-xe-may-theo-cach-ban-giu-xe-mau-sang-dam-mo-hay-nhu-lo-bui-xuot-va-vet-nuoc-ra-sao']
};
