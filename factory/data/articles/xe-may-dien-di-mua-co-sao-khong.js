// AI WIKI TOTAL — S01120 (topic V2 T001157); xe máy điện đi mưa và rửa xe, giải thích cấp bảo vệ bằng lời, không nêu số liệu, mã hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-may-dien-di-mua-co-sao-khong',
  title: 'Xe máy điện đi mưa và rửa xe: điểm kín nước, điểm tuyệt đối không xịt nước',
  seoTitle: 'Xe máy điện đi mưa và rửa xe: chỗ kín nước, chỗ không được xịt',
  metaDescription: 'Xe máy điện đi mưa có sao không? Cấp bảo vệ nghĩa là gì, những chỗ tuyệt đối không xịt nước, cách rửa xe áp thấp và việc cần làm khi xe vào nước sâu.',
  summary: 'Bài trả lời người lo nước vào pin và bộ điều khiển khi đi mưa hoặc rửa xe máy điện: vì sao mưa thông thường ít đáng lo còn nước ép dưới áp lực hay nước ngập thì đáng lo, cấp bảo vệ là gì và vì sao nhãn ấy không phải giấy phép xịt rửa, những chỗ xe thường được làm kín và những chỗ tuyệt đối không xịt. Bài cũng nêu cách rửa áp thấp, lau khô ổ sạc, chờ khô rồi mới sạc, cùng việc cần làm khi xe đã vào nước sâu và các dấu hiệu phải đưa đi kiểm tra.',
  quickAnswer: 'Mưa thông thường ít gây hại vì xe được thiết kế chịu nước rơi từ trên xuống và nước bắn; cần tránh vũng nước sâu và tia nước áp lực. Rửa bằng áp thấp, không xịt vào ổ sạc, khoang pin, bộ điều khiển, giắc nối, đồng hồ và ngăn dưới yên; lau khô ổ sạc và chờ khô mới sạc. Xe đã vào nước sâu thì dừng, tắt nguồn, không khởi động, không sạc, đưa thợ kiểm tra. Mức chịu nước tùy xe.',
  keyPoints: [
    'Đi mưa thông thường ít khi hại xe máy điện; mối lo thật là nước bị ép vào khe dưới áp lực, nước đọng ở các đầu nối và vũng nước sâu.',
    'Cấp bảo vệ là kết quả bài thử tiêu chuẩn trên vỏ chi tiết còn mới, không phải giấy phép xịt rửa: chịu ngâm tạm thời chưa chắc đã chịu tia nước mạnh, và nhãn không phủ giắc nối hay gioăng đã lão hóa.',
    'Không xịt nước vào ổ sạc và đầu phích, khe nối khoang pin, bộ điều khiển, giắc nối dây, đồng hồ và ngăn dưới yên; vùng nhạy chỉ lau bằng khăn ẩm vắt kỹ.',
    'Rửa bằng áp thấp sau khi tắt nguồn và rút sạc, lau khô ổ sạc sau khi rửa hoặc sau chuyến đi mưa, và chờ khô hẳn rồi mới sạc.',
    'Xe đã vào nước sâu thì dừng, tắt nguồn, không khởi động, không sạc, đưa thợ có kinh nghiệm về xe điện; lỗi báo, mùi khét hoặc nóng bất thường là lý do ngừng dùng.'
  ],
  category: 'learn',
  hub: 'kien-thuc-xe-dien',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['xe máy điện', 'cấp bảo vệ chống nước', 'ổ sạc', 'khoang pin', 'bộ điều khiển', 'giắc nối điện'],
  keywords: ['xe máy điện đi mưa có sao không', 'rửa xe máy điện', 'xe điện bị vào nước', 'xe máy điện đi mưa có hỏng không'],
  sections: [
    P('Nước gặp hệ thống điện trên xe máy điện: điều gì đáng lo, điều gì không', [
      'Đi mưa thông thường ít khi làm hỏng xe máy điện, vì pin, mô-tơ và bộ điều khiển thường nằm trong hộp kín, được thiết kế để chịu nước rơi từ trên xuống cùng nước bánh xe hắt lên. Điều đáng lo nằm ở ba tình huống khác: nước bị ép vào khe hở dưới áp lực, nước đọng lâu quanh các đầu nối, và nước ngập đủ cao để tràn vào chi tiết đặt thấp. Xe xăng sợ nước chui vào đường hút gió và buồng đốt; xe điện sợ nước nối tắt những chỗ lẽ ra phải cách điện, như tiếp điểm ổ sạc, giắc nối, bo mạch bộ điều khiển và mạch quản lý pin. Mức chịu nước khác nhau giữa các mẫu xe, nên sách hướng dẫn của nhà sản xuất luôn là nguồn cần đọc đầu tiên.',
      'Nước vào chỗ có điện gây hại theo hai kiểu. Kiểu nhanh là chập hoặc rò điện: nước lẫn bụi bẩn dẫn điện, tạo đường tắt giữa hai tiếp điểm, làm cầu chì hoặc bộ điều khiển ngắt nguồn, đôi khi hỏng linh kiện. Kiểu chậm là ăn mòn: hơi ẩm ở lại trong giắc nối làm tiếp điểm xỉn màu và đóng cặn, điện trở chỗ nối tăng lên, mối nối nóng dần mỗi lần có dòng lớn chạy qua. Vì vậy xe vừa dính nước mà vẫn chạy bình thường chưa chắc đã ổn: đèn báo chập chờn, xe mất lực rồi lại có, sạc lúc được lúc không thường chỉ lộ ra sau vài ngày. Nhiều bộ pin có mạch bảo vệ riêng để ngắt khi có sự cố, nhưng mạch ấy không thay được việc giữ nước ở ngoài.',
      'Từ đó rút ra thói quen đi mưa. Mưa rơi và mặt đường ướt thông thường thì cứ đi, nhưng chậm lại, ga và phanh nhẹ tay, vì độ trơn của đường thường là rủi ro lớn hơn cả với người ngồi trên xe. Vũng nước sâu là chỗ nên tránh: bánh trước hắt nước theo mọi hướng, nước dễ tạt vào phần gầm, nơi tùy mẫu xe có thể đặt giắc nối, bộ điều khiển hay khoang pin, còn mặt đường dưới nước thì che mất ổ gà. Không nhìn thấy đáy vũng thì chọn đường khác hoặc chờ nước rút. Về đến nơi, đừng cắm sạc ngay: nhìn và lau khô ổ sạc, đậy nắp, cho xe nghỉ để hơi ẩm bay bớt rồi mới sạc.'
    ]),
    P('Cấp bảo vệ nghĩa là gì và vì sao nhãn ấy không phải giấy phép xịt rửa', [
      'Cấp bảo vệ là nhãn ghi mức chống bụi và chống nước của vỏ một thiết bị điện, được xác định qua các bài thử tiêu chuẩn trong phòng thí nghiệm. Nhãn có hai phần: phần đầu nói về bụi và vật rắn, phần sau nói về nước. Phần về nước không phải một thang điểm duy nhất mà là nhiều bài thử khác nhau: nước nhỏ giọt từ trên xuống, nước phun hoặc bắn từ nhiều hướng, tia nước mạnh, và ngâm tạm thời trong nước. Mỗi bài thử quy định lượng nước, hướng nước, thời gian và khoảng cách, thường dùng nước sạch, trên thiết bị còn mới và đóng kín đúng thiết kế. Nhãn vì thế trả lời một câu hỏi hẹp: trong đúng điều kiện thử ấy, nước có lọt vào vỏ hay không.',
      'Có bốn lý do khiến nhãn này không phải giấy phép để xịt rửa. Một là các bài thử không bao hàm nhau: chi tiết chịu được ngâm tạm thời chưa chắc đã chịu được tia nước mạnh, và ngược lại. Hai là điều kiện thử khác cách rửa xe: máy xịt có thể mạnh hơn, đặt sát hơn, dùng nước nóng, hoặc nước pha xà phòng thường dễ len vào khe nhỏ hơn nước sạch. Ba là nhãn thường áp cho vỏ của một chi tiết lúc còn mới, chưa qua sửa chữa; nó không đảm bảo cho giắc nối, đoạn dây đi vào vỏ hay chỗ ghép giữa hai chi tiết trên xe. Bốn là gioăng cao su cứng dần, nứt hoặc lệch theo năm tháng hay sau lần mở ra lắp vào, khi đó mức ghi trên nhãn không còn đúng.',
      'Cách dùng thông tin này khá đơn giản. Hãy tìm xem sách hướng dẫn hoặc nhãn trên chi tiết có ghi mức bảo vệ không, và ghi cho bộ phận nào. Pin, mô-tơ, bộ điều khiển và ổ sạc thường mỗi nơi một mức, và có xe chỉ công bố cho vài bộ phận. Đọc mức ấy như khả năng chịu mưa và nước bắn của riêng chi tiết đó, không đọc thành khả năng chịu tia nước áp lực của cả chiếc xe. Lời quảng cáo chống nước chung chung không nói được gì; điều cần biết là chống nước ở bộ phận nào, trước kiểu tiếp xúc nước nào, và có bao gồm giắc nối hay không. Chưa tìm được thông tin thì coi như chưa biết, rồi chọn cách rửa nhẹ nhất và né các vùng nhạy.'
    ]),
    P('Chỗ xe được làm kín nước và chỗ tuyệt đối không xịt', [
      'Phần lớn xe máy điện được làm kín ở những chỗ mưa dễ chạm tới nhất. Vỏ mô-tơ, vỏ bộ điều khiển và vỏ khối pin thường là các hộp đóng kín bằng gioăng, tính cho nước rơi từ trên xuống và nước bánh xe hắt lên. Công tắc ở tay lái thường có chụp cao su, đèn có chụp kín, nhiều giắc nối quan trọng có vòng đệm và nắp che; tất cả chịu mưa tốt vì đã được tính đến ngay từ khi thiết kế, dù mức độ tùy mẫu xe. Điểm yếu thường không nằm ở mặt phẳng của vỏ mà ở những chỗ có khe: đường ghép nắp, lỗ luồn dây, đầu giắc và nắp cao su của ổ sạc. Đó cũng là nơi nước áp lực dễ tìm được lối vào nhất.',
      'Sáu nhóm vị trí sau không nên bị xịt nước trực tiếp, nhất là khi tia nước chếch từ dưới lên. Một là ổ sạc và đầu phích, vì tiếp điểm kim loại ở đó dễ rò điện và ăn mòn khi dính nước. Hai là đường ghép và giắc nối của khoang pin, nơi pin gặp dây điện của xe. Ba là bộ điều khiển, hộp chứa mạch công suất, nhạy với hơi ẩm hơn mọi chi tiết cơ khí. Bốn là các giắc nối dây, nhất là ở gầm sàn để chân và quanh cổ xe. Năm là đồng hồ hiển thị và ổ khóa điện, nơi nước lọt qua khe quanh mặt kính hay lỗ khóa. Sáu là ngăn dưới yên, tùy mẫu có thể chứa pin, bộ điều khiển hoặc đầu dây, và là nơi nước đọng khó thấy.',
      'Vị trí các bộ phận khác nhau giữa các mẫu xe, nên hãy tự xác định trên chiếc xe của bạn thay vì dựa vào quy luật chung. Sơ đồ trong sách hướng dẫn thường chỉ chỗ đặt pin, bộ điều khiển và ổ sạc; nếu không có, hãy quan sát: chỗ nào có chụp cao su, nắp đậy hay dây điện chui vào hộp kín thì coi là vùng nhạy. Định kỳ nhìn xem các nắp cao su còn đủ, không nứt, đóng khít không. Xe từng sửa chữa hoặc thay pin thì hỏi thợ xem gioăng và nắp che đã được lắp lại đúng chỗ chưa. Vùng nhạy chỉ lau bằng khăn vắt kỹ thay cho tia nước, và chỗ nào chưa chắc thì cứ coi là cấm xịt.'
    ]),
    P('Rửa xe máy điện đúng cách: áp thấp, né vùng nhạy, làm khô rồi mới sạc', [
      'Chuẩn bị là việc làm trước khi có giọt nước nào chạm vào xe. Tắt nguồn, rút chìa nếu xe dùng chìa, và chắc chắn xe không đang cắm sạc: rút đầu sạc khỏi xe và khỏi ổ điện nhà, rồi đậy nắp ổ sạc đúng chỗ. Sau chuyến đi dài hoặc vừa sạc xong, hãy để xe nguội bớt, vì chi tiết đang nóng gặp nước lạnh có thể làm hơi ẩm bị hút vào các hộp kín lúc chúng nguội đi. Pin gắn cố định thì đừng tự mở nắp nào; pin thiết kế để người dùng tháo ra thì chỉ làm đúng như sách hướng dẫn mô tả. Chọn chỗ rửa thoát nước tốt, dời bộ sạc, ổ cắm và dây nối dài ra khỏi vùng nước bắn, và nói rõ với người rửa hộ rằng đây là xe điện.',
      'Áp thấp là nguyên tắc chính khi rửa. Vòi tưới nhẹ, hoặc xô nước với bọt biển và khăn mềm, là đủ cho bụi đường và bùn. Hãy để nước chảy từ trên xuống thay vì dồn tia vào một điểm, giữ tia chếch xuống chứ không bắn từ dưới lên vào gầm, khe ốp hay sàn để chân, nơi các giắc nối thường nằm. Sáu vùng nhạy kể trên chỉ lau bằng khăn ẩm vắt kỹ. Với bánh có mô-tơ, tưới cho bùn trôi, đừng dí tia sát trục hay chỗ dây đi ra. Máy xịt áp lực cao và máy hơi nước không hợp để rửa vùng có điện; rửa ở tiệm thì nhờ họ giữ khoảng cách và tránh các vùng ấy. Hóa chất và thứ tự rửa nói chung đã có bài riêng về rửa xe máy đúng cách.',
      'Làm khô là nửa sau của buổi rửa và quyết định chuyện sạc. Dùng khăn mềm lau khô ổ sạc, nắp cao su, đầu phích của bộ sạc và các khe quanh đồng hồ; mở nắp ổ sạc ở chỗ thoáng, râm mát và nhìn xem còn giọt nước không. Đừng thổi khí nén hay hơi nóng sát vào ổ, đừng dùng vật nhọn khều bên trong, vì dễ đẩy ẩm vào sâu hoặc làm hỏng tiếp điểm. Sau đó hãy chờ: chưa có mốc chung cho mọi xe, nhưng tiếp điểm còn ẩm thì chưa nên sạc, và ổ ướt nhiều có thể cần để qua đêm. Trước khi đi lại, bật nguồn xem đèn báo, đồng hồ và đèn xe; có lỗi hiện lên hoặc chập chờn thì đừng sạc, đừng đi, đưa xe cho thợ.'
    ]),
    P('Xe đã vào nước sâu: cách xử lý và dấu hiệu cần kiểm tra', [
      'Xe tắt giữa nước, hoặc nước đã tràn qua sàn để chân, là lúc cần làm đúng thứ tự. Bóp phanh, dừng xe ở chỗ an toàn, rồi xoay khóa điện hoặc bấm nút nguồn về vị trí tắt, không xoay sang vị trí khóa cổ khi xe còn lăn. Sau đó đừng cố khởi động lại, đừng vặn ga thử và tuyệt đối không cắm sạc, kể cả khi đồng hồ vẫn sáng. Nước còn đọng trong giắc nối và hộp điện, cấp điện lúc này dễ gây chập, hỏng bộ điều khiển hoặc mạch quản lý pin, và với pin lithium còn có thể sinh nhiệt đáng lo. Dắt xe ra chỗ khô, thoáng, xa vật dễ cháy, đừng cất vào phòng kín hay để cạnh lối đi.',
      'Trong lúc chờ thợ, hãy tránh nghiêng xe để xả nước, tự mở nắp ốp, khoang pin hay bộ điều khiển, và dùng máy sấy tóc hoặc khí nén thổi vào cụm điện cho nhanh khô; nhiệt tập trung làm hỏng gioăng và nhựa mà vẫn không đuổi được ẩm trong giắc nối. Xe không tự lăn được thì nhờ chở đi thay vì cố khởi động. Đưa xe cho thợ có kinh nghiệm về xe điện và kể rõ: nước dâng tới đâu so với bánh và sàn để chân, xe đang tắt hay đang chạy, có đang sạc không, đồng hồ báo gì, có mùi lạ không. Nước mặn hoặc nước bẩn lẫn bùn ăn mòn nhanh hơn nước mưa, nên đưa đi sớm; xe chạy lại bình thường sau khi khô vẫn cần kiểm tra vì ăn mòn có thể lộ muộn.',
      'Dấu hiệu quan sát được chia thành ba nhóm. Nhóm thông báo: đèn báo lỗi sáng hoặc chớp, đồng hồ nhấp nháy hay tự tắt, xe mất lực rồi lại có, sạc lúc nhận lúc không. Nhóm mùi và âm thanh: mùi khét, mùi hóa chất lạ, tiếng lách tách, xì hoặc ù lạ từ gầm xe hay bộ sạc. Nhóm nhiệt: khu vực pin, bộ sạc hoặc đầu phích nóng bất thường. Chụp đèn mờ hơi thường tan khi đèn ấm, nhưng đọng thành giọt nước thường cho thấy gioăng đã hở. Gặp dấu hiệu nào sau mưa, sau khi rửa hay ngập nước thì ngừng sạc, ngừng đi và đưa xe đi kiểm tra. Thấy khói, lửa hoặc pin phồng thì lùi xa và gọi lực lượng cứu hỏa; xe đang cắm sạc mà nước dâng tới chỗ để xe thì đừng lội vào rút phích.'
    ])
  ],
  checklist: [
    'Biết vị trí ổ sạc, khoang pin, bộ điều khiển và ngăn dưới yên trên xe của bạn, và đọc phần nói về nước và vệ sinh xe trong sách hướng dẫn.',
    'Trước chuyến đi mưa, chắc rằng nắp ổ sạc đóng khít và các chụp cao su không nứt, không tuột.',
    'Tránh vũng nước sâu, chậm lại, ga và phanh nhẹ tay; không nhìn thấy đáy thì chọn đường khác hoặc chờ nước rút.',
    'Về đến nơi, lau khô ổ sạc và đầu phích, đậy nắp, cho xe nghỉ để ẩm bay bớt rồi mới sạc.',
    'Xe đã vào nước sâu: bóp phanh, dừng an toàn, tắt nguồn, không khởi động, không sạc, đưa thợ có kinh nghiệm về xe điện.'
  ],
  steps: [
    { title: 'Tắt nguồn, rút sạc, đậy nắp ổ sạc', detail: 'Tắt xe, rút chìa, ngắt bộ sạc ở cả hai đầu và đậy nắp ổ sạc đúng chỗ; để xe nguội bớt nếu vừa chạy xa hoặc vừa sạc xong.' },
    { title: 'Rửa bằng áp thấp, né vùng nhạy', detail: 'Dùng vòi tưới nhẹ hoặc xô và khăn mềm, để nước chảy từ trên xuống; không xịt vào ổ sạc, khoang pin, bộ điều khiển, giắc nối, đồng hồ và ngăn dưới yên.' },
    { title: 'Lau khô ổ sạc và các khe', detail: 'Lau khô ổ sạc, nắp cao su, đầu phích và khe quanh đồng hồ; mở nắp ổ sạc ở chỗ thoáng, râm mát và nhìn xem còn giọt nước không.' },
    { title: 'Chờ khô rồi kiểm tra trước khi sạc', detail: 'Chưa sạc cho tới khi tiếp điểm chắc chắn khô; bật nguồn xem đèn báo và đồng hồ, có lỗi hoặc chập chờn thì không sạc, không đi và đưa xe cho thợ.' }
  ],
  warnings: [
    'Không xịt nước áp lực cao hoặc hơi nước vào ổ sạc, khoang pin, bộ điều khiển, giắc nối, đồng hồ và ngăn dưới yên; nước ép qua gioăng gây hỏng thường lộ ra muộn, sau vài ngày.',
    'Không cắm sạc khi ổ sạc, đầu phích, bộ sạc hoặc xe còn ướt; chưa chắc khô thì chờ thêm, và không để bộ sạc, ổ cắm, dây nối dài ở chỗ nước bắn.',
    'Xe đã vào nước sâu hoặc có lỗi báo, mùi khét, nóng bất thường, pin phồng: ngừng dùng, không khởi động, không sạc, đưa thợ; thấy khói hoặc lửa thì lùi xa và gọi lực lượng cứu hỏa.'
  ],
  notes: [
    'Bài nêu nguyên tắc chung cho xe máy điện phổ thông; vị trí bộ phận, mức chịu nước và cách rửa được phép khác nhau giữa các mẫu xe, nên sách hướng dẫn của đúng xe bạn luôn đi trước bài này.',
    'Mức bảo vệ ghi trên nhãn chỉ có nghĩa trong điều kiện thử nghiệm của nó; việc kiểm tra bên trong khoang pin, bộ điều khiển hay giắc nối thuộc về thợ có chuyên môn về xe điện, không tự thực hiện.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần vệ sinh xe, đi mưa và sạc pin',
    'Tài liệu kỹ thuật của nhà sản xuất về mức bảo vệ của pin, mô-tơ, bộ điều khiển và ổ sạc trên đúng dòng xe, cùng tiêu chuẩn quốc tế về phân cấp bảo vệ vỏ thiết bị điện'
  ],
  related: ['cham-soc-xe-may-mua-mua', 'rua-xe-may-dung-cach', 'huong-dan-xe-dien', 'pin-va-sac-xe-may-dien-nhung-dieu-can-biet', 'pin-xe-may-dien-bao-day-nhung-nhanh-het']
};
