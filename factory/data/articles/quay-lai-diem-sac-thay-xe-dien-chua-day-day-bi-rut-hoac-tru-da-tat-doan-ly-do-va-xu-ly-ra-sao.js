// AI WIKI TOTAL — S01825; quan sát trước khi chạm, khoanh vùng lý do, xử lý tại chỗ.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'quay-lai-diem-sac-thay-xe-dien-chua-day-day-bi-rut-hoac-tru-da-tat-doan-ly-do-va-xu-ly-ra-sao',
  title: 'Quay lại điểm sạc thấy xe điện chưa đầy, dây bị rút hoặc trụ đã tắt: đoán lý do và xử lý ra sao',
  seoTitle: 'Quay lại điểm sạc thấy xe chưa đầy, dây bị rút: đoán lý do, xử lý',
  metaDescription: 'Quay lại điểm sạc thấy pin chưa đầy, dây bị rút hoặc trụ đã tắt: nhìn gì trước khi chạm, các nhóm lý do có thể, xử lý tại chỗ và báo cho chủ điểm sạc.',
  summary: 'Bài dành cho người cắm sạc ở chỗ dùng chung rồi đi làm việc khác, lúc quay lại thấy pin thấp hơn dự tính, đầu cắm nằm lệch hoặc bị rút, đèn trụ tắt. Nội dung hướng dẫn nhìn gì trước khi chạm vào dây, chia các lý do có thể thành bốn nhóm mà không quy kết ai, xử lý ngay tại chỗ, báo cho ai và kể những gì, rồi tính lại chặng đi với lượng pin đang có và rút kinh nghiệm cho lần cắm sau. Bài luôn đặt ranh giới an toàn khi thấy dấu hiệu ướt, nóng, khét hoặc hư.',
  quickAnswer: 'Quay lại thấy xe chưa đầy, dây bị rút hoặc trụ đã tắt thì chưa cắm lại vội: hãy nhìn vị trí đầu cắm, đèn trên trụ, báo trên xe, nền ướt và mùi khét trước. Lý do có thể là đầu cắm chưa khít, người khác rút hoặc vướng, trụ tự ngắt, hay xe tự ngắt. Có dấu hiệu ướt, nóng, khét, hư thì đừng chạm, hãy báo chủ điểm sạc; mọi thứ bình thường thì cắm lại một lần và quan sát.',
  keyPoints: [
    'Nhìn trước, chạm sau: đầu cắm đang ở đâu, dây có bị kéo căng hay rơi xuống nền không, đèn trên trụ, báo trên xe, nền có ướt không, có mùi khét không.',
    'Bốn nhóm lý do có thể: đầu cắm chưa khít từ đầu, người khác rút hoặc vô tình vướng, trụ tự ngắt, xe hoặc bộ sạc tự ngắt; nhiều lần bạn sẽ không biết chắc nhóm nào.',
    'Dây, đầu cắm hoặc ổ có dấu hiệu ướt, nóng, khét, hư thì không chạm, không cắm lại, không tự mở trụ và báo ngay cho chủ điểm sạc.',
    'Mọi thứ bình thường thì chỉ cắm lại một lần cho chắc và quan sát đèn báo; sạc lại bị ngắt thì dừng chứ không cắm đi cắm lại.',
    'Tính lại chặng đi theo lượng pin thật đang có, chọn cách chạy nhẹ nhàng, về chỗ quen hoặc nhờ người đón nếu không chắc đủ; lần sau chờ đèn báo xác nhận rồi mới rời đi.'
  ],
  category: 'map',
  hub: 'tram-sac',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['điểm sạc dùng chung', 'đầu cắm sạc', 'cổng sạc trên xe', 'trụ sạc', 'cầu dao', 'bộ sạc'],
  keywords: ['quay lại điểm sạc xe chưa đầy', 'xe điện sạc bị ngắt giữa chừng', 'dây sạc bị rút khi đang sạc', 'trụ sạc tự tắt khi chưa đầy'],
  sections: [
    P('Nhìn gì trước khi chạm vào dây', [
      'Quay lại thấy pin chưa lên như dự tính, đầu cắm nằm lệch hoặc đã rời khỏi xe, đèn trên trụ đã tắt, phản xạ tự nhiên của nhiều người là cắm lại ngay hoặc nghĩ ngay đến chuyện có ai đó đã động vào xe mình. Hãy dừng lại cách vài bước và nhìn trước, vì hiện trường còn nguyên là manh mối dễ giữ nhất mà bạn có, còn cắm lại vội có thể xóa mất nó hoặc làm tình hình tệ hơn. Điều cần xác định đầu tiên là đầu cắm đang ở đâu: còn nằm trong cổng sạc của xe nhưng hơi chênh, đang treo lơ lửng, hay đã rơi xuống nền. Hãy nhìn cả sợi dây: nó nằm gọn, bị kéo căng về một phía, hay bị vắt ngang lối đi và có dấu vết bị xe khác đè qua.',
      'Sau đầu cắm là đến trụ và xe. Trên trụ, hãy đọc xem đèn hoặc màn hình đang cho biết điều gì: tắt hẳn, sáng ở trạng thái chờ, hay đang hiện một dấu hiệu bất thường. Ý nghĩa từng đèn tùy trụ, vì vậy nếu có hướng dẫn dán sẵn ngay trên trụ thì hãy đọc theo đó thay vì đoán. Trên xe, nhìn bảng đồng hồ xem có biểu tượng liên quan đến sạc hoặc thông báo lỗi nào không, và xem mức pin hiện có so với lúc bạn cắm. Hai mảnh thông tin này, một từ trụ và một từ xe, thường gợi ý sự cố nằm ở phía nào, dù không phải lúc nào cũng đủ để kết luận. Ở bước này, hãy dùng mắt chứ chưa dùng tay.',
      'Phần cuối của vòng quan sát là môi trường quanh trụ. Nền dưới trụ và quanh đầu cắm có ướt hoặc đọng nước không, có vết đen, chỗ nhựa biến dạng, mùi khét hay mùi nóng của nhựa và dây điện không. Đầu cắm, vỏ dây và cổng sạc có nứt, cong chân, lỏng hay bám bẩn không. Bất kỳ dấu hiệu ướt, nóng, khét hoặc hư hại nào cũng là ranh giới: không chạm vào dây, ổ hay đầu cắm, không cắm lại, lùi ra một khoảng an toàn và báo cho chủ điểm sạc. Hãy chụp ảnh từ xa, ghi lại giờ giấc rồi mới trao đổi với người quản lý. Chỉ khi mọi thứ trông bình thường và khô ráo, bạn mới chuyển sang các bước xử lý ở những mục sau.'
    ]),
    P('Những nhóm lý do có thể khiến phiên sạc dừng', [
      'Có bốn nhóm lý do thường được nghĩ đến khi phiên sạc bị ngắt giữa chừng, và việc chia nhóm chỉ giúp bạn khoanh vùng chứ không nhằm kết luận về ai. Nhóm thứ nhất là đầu cắm chưa vào khít ngay từ đầu nên phiên sạc không bắt đầu hoặc dừng sớm. Nhóm thứ hai là tác động từ bên ngoài, chẳng hạn có người rút dây để cắm xe của họ, hoặc chỉ vô tình vướng chân, vướng xe làm đầu cắm lệch hay rơi. Nhóm thứ ba nằm ở trụ: mất điện, cầu dao nhảy hoặc một chế độ bảo vệ tự ngắt. Nhóm thứ tư nằm ở phía xe hoặc bộ sạc, tự ngắt vì nóng hay phát hiện lỗi. Nhiều lần bạn sẽ không bao giờ biết chắc nhóm nào, và điều đó hoàn toàn bình thường.',
      'Với nhóm đầu cắm chưa khít, dấu hiệu gợi ý là đầu cắm vẫn nằm trong cổng nhưng chênh, hoặc dây có dấu vết bị kéo ngay sau khi bạn rời đi. Mỗi loại đầu cắm khớp vào theo một kiểu riêng và nhiều loại có chốt giữ, nên tiếng khớp hay đèn báo xác nhận đáng tin hơn cảm nhận bằng tay. Với nhóm tác động bên ngoài, hãy nhớ rằng người khác có thể đã rút dây vì tưởng xe sạc xong, vì cần ổ cho xe của họ, hoặc không rút mà chỉ làm dây bị vướng. Thiếu bằng chứng thì đừng gán lỗi cho ai, vì cách nghĩ đó thường chỉ khiến bạn nóng vội và bỏ qua nguyên nhân thật. Đầu cắm nằm ở chỗ bạn không bao giờ để nó chỉ là một gợi ý, chưa phải kết luận.',
      'Nhóm trụ tự ngắt có thể nhận ra qua bối cảnh: các trụ bên cạnh cũng tắt, đèn khu vực tối, hoặc trụ hiện báo lỗi. Mất điện cục bộ, cầu dao nhảy hay chế độ bảo vệ của trụ đều cho cùng một kết quả với bạn là phiên sạc dừng, nên việc phân biệt thuộc về chủ điểm sạc. Nhóm xe hoặc bộ sạc tự ngắt vì nóng hay lỗi thường để lại dấu vết ở phía xe: biểu tượng báo trên đồng hồ, bộ sạc hoặc vỏ dây ấm bất thường, hay xe không chịu bắt đầu sạc lại ngay. Cách xe và bộ sạc phản ứng, có tự thử lại hay chờ người cắm lại, tùy xe, nên hãy đối chiếu với sách hướng dẫn của xe. Cũng cần nhớ rằng một biểu hiện bên ngoài có thể đến từ hai nhóm khác nhau.'
    ]),
    P('Xử lý ngay tại chỗ, báo cho ai và kể những gì', [
      'Quyết định đầu tiên là có cắm lại hay không, và nó phụ thuộc hoàn toàn vào những gì bạn vừa quan sát. Dây, đầu cắm hay ổ có dấu hiệu hư, ướt, nóng hoặc khét thì đừng cắm lại, đừng thử gạt hay bẻ cho vào khít, đừng dùng ổ hoặc bộ sạc khác để vượt qua chỗ hỏng. Hãy đứng ra xa, giữ tay khô và nhờ người quản lý nơi đó xử lý. Tuyệt đối không tự mở trụ, không nạy nắp, không chọc vào ổ, dù bên trong có vẻ chỉ cần chạm nhẹ. Trụ có phần mang điện mà người dùng không được tiếp cận, và chỉ người có chuyên môn mới làm việc đó. Các tình huống nặng hơn như trụ được báo trống mà tới nơi bị hỏng, cổng sạc trên xe bị ướt hay lỡ dắt xe khi dây còn cắm đã có bài riêng, bạn nên đọc thêm ở đó.',
      'Mọi thứ trông bình thường, khô ráo, không mùi lạ, đầu cắm và cổng sạc nguyên vẹn thì bạn có thể cắm lại đúng một lần cho chắc. Hãy đưa đầu cắm vào cổng theo đúng chiều, đến khi nghe hoặc cảm nhận khớp theo cách của loại đầu cắm trên xe bạn, rồi đứng lại quan sát đèn báo trên trụ và trên xe. Phiên sạc bắt đầu và ổn định thì bạn có thể rời đi, nhưng nên đợi một lúc để chắc là nó không dừng lại ngay. Đèn lại tắt, trụ báo lỗi hoặc xe không nhận sạc thì dừng ở đó. Cắm đi cắm lại liên tục không làm sự cố biến mất, trái lại có thể làm đầu cắm mòn, nóng thêm và che mất manh mối mà người quản lý cần để tìm nguyên nhân.',
      'Báo cho ai thì câu trả lời thường là chủ điểm sạc hoặc người quản lý nơi đặt trụ, vì họ mới là người được phép mở trụ, xem tình trạng điện và quyết định có cho tiếp tục dùng hay không. Hãy kể bằng sự việc chứ không bằng kết luận: bạn cắm lúc nào, rời đi lúc nào, quay lại lúc nào, đầu cắm đang ở đâu khi bạn thấy, đèn hoặc màn hình trên trụ hiện gì, xe báo gì, nền có ướt không, có mùi khét không. Ảnh chụp trước khi bạn động vào bất cứ thứ gì sẽ giúp ích rất nhiều. Nếu nơi đó có cách xem lại diễn biến thì hãy để họ tự xem. Tránh nói kiểu có người đã rút dây của tôi; hãy nói là dây có thể đã bị rút và để họ kiểm tra.'
    ]),
    P('Tính lại chặng đi với lượng pin đang có', [
      'Sau khi phiên sạc dừng hoặc không còn đáng tin, hãy tính lại chuyến đi từ lượng pin thật đang hiện trên đồng hồ, không phải lượng bạn đã dự định sẽ có. Chặng sắp đi nên hiểu là cả đi lẫn về, cộng thêm một khoảng dự phòng cho những điều khó lường như đường kẹt, dốc, gió ngược, trời nóng hoặc lạnh, chở thêm đồ hay thêm người. Mức tiêu hao tùy xe và tùy cách chạy, nên ước lượng quãng đường còn lại trên đồng hồ chỉ là gợi ý, nhất là khi pin đã thấp, lúc đó chỉ báo có thể thay đổi nhanh hơn bạn nghĩ. Chưa chắc đủ thì hãy coi như không đủ và chọn phương án thận trọng hơn, thay vì hy vọng mọi thứ sẽ suôn sẻ đến cuối chặng.',
      'Nếu quyết định đi tiếp, hãy chạy nhẹ nhàng hơn thường lệ: giữ ga đều, tránh tăng tốc gắt, tránh những đoạn dốc không cần thiết, bớt tải và tắt những thứ phụ không dùng đến. Ưu tiên đường quen, ít tắc và ít bất ngờ để ước lượng của bạn sát với thực tế hơn. Hướng về chỗ quen, nơi bạn biết chắc có thể sạc an toàn, thay vì thử vận may ở một điểm lạ khác trong lúc pin đã thấp. Xe báo hạn chế vận hành hay cảnh báo pin yếu thì hãy nghe theo cảnh báo của xe chứ đừng cố đi cho đến hết. Cách xe tự giảm sức chạy khi pin thấp tùy xe, nên sách hướng dẫn là nơi đáng đọc trước khi bạn cần đến.',
      'Có những lúc câu trả lời đúng là không đi tiếp bằng chính chiếc xe này. Nhờ người quen đón, chuyển sang phương tiện khác, hoặc để xe ở một chỗ an toàn có người trông và quay lại sau khi vấn đề ở điểm sạc đã được xử lý, đều tốt hơn chuyện xe hết điện giữa đường. Xe điện hết pin giữa dòng xe không chỉ phiền mà còn nguy hiểm, vì bạn phải dắt một chiếc xe nặng trên mặt đường đông, trong khi người đi sau khó thấy bạn. Trường hợp sự cố đến từ dây sạc, đầu cắm hay cổng sạc có dấu hiệu hư, đừng dùng chính chúng để sạc thêm ở nơi khác cho đến khi thợ có chuyên môn xem qua. Đi chậm một bước ở đây thường an toàn hơn nhiều so với liều một chuyến.'
    ]),
    P('Lần sau cắm sạc thế nào để đỡ gặp lại', [
      'Thói quen hữu ích nhất là cắm xong đừng đi ngay. Hãy chờ đèn báo trên trụ và trên xe cho thấy phiên sạc đã thực sự bắt đầu, nhìn đầu cắm nằm ổn trong cổng, dây không bị kéo căng, không ngáng lối đi của người và xe khác, không đặt xuống chỗ ướt hay đọng nước. Dây nên được xếp gọn, để người đến sau khó vướng vào hơn. Nhiều sự cố kiểu bị ngắt giữa chừng thực ra xuất hiện trong khoảng ngắn đầu tiên, khi đầu cắm chưa khít hoặc trụ chưa nhận xe, và bạn sẽ phát hiện sớm nếu còn đứng đó. Cách xe và trụ báo hiệu một phiên sạc bình thường khác nhau tùy xe và tùy trụ, nên hãy làm quen với dấu hiệu bình thường của chính mình.',
      'Nếu nơi đó cho phép, hãy để lại cách liên lạc ở chỗ dễ thấy, để người cần cắm xe của họ có thể hỏi bạn trước khi rút dây. Một lời nhắn ngắn thường đủ và đỡ bao nhiêu hiểu lầm cho cả hai bên. Đặt nhắc giờ quay lại bằng đồng hồ báo trên điện thoại cũng giúp bạn không để xe nằm quá lâu sau khi đã đầy, thứ dễ làm người khác sốt ruột. Nếu có lựa chọn, hãy ưu tiên chỗ có người trông coi hoặc có lối đi thoáng, ít ai phải bước qua dây. Những việc này không đảm bảo sự cố sẽ không xảy ra, nhưng chúng giảm xác suất bạn quay lại và phải đoán xem chuyện gì đã diễn ra trong lúc mình vắng mặt.',
      'Nếu hiện tượng lặp lại ở nhiều điểm sạc khác nhau, khả năng cao là vấn đề nằm ở phía xe chứ không phải mỗi nơi một sự cố. Lúc đó hãy nhờ thợ xe điện có chuyên môn xem bộ sạc, dây và cổng sạc, và mang theo ghi chú: xảy ra ở loại trụ nào, vào lúc nào, đèn báo ra sao, xe báo gì, có kèm nóng hay mùi lạ không. Đừng tự mở bộ sạc, đừng dùng nước hay vật nhọn làm sạch cổng sạc, đừng thử bằng bộ sạc không rõ nguồn gốc. Còn nếu chỉ xảy ra ở một nơi, hãy báo chủ điểm sạc để họ kiểm tra trụ. Vấn đề cổng sạc ướt, bẩn hay lỏng đã có bài riêng, và bạn nên đọc thêm trước khi đi gặp thợ.'
    ])
  ],
  checklist: [
    'Dừng lại cách vài bước và nhìn trước khi chạm: vị trí đầu cắm, độ căng của dây, nền có ướt không, có mùi khét không.',
    'Đọc đèn hoặc màn hình trên trụ và biểu tượng, thông báo trên bảng đồng hồ xe; ý nghĩa tùy trụ và tùy xe nên đối chiếu hướng dẫn.',
    'Chụp ảnh hiện trường từ xa, ghi giờ cắm và giờ quay lại trước khi động vào bất cứ thứ gì.',
    'Dây, đầu cắm hoặc ổ có dấu hiệu ướt, nóng, khét, hư thì không chạm, không cắm lại và báo chủ điểm sạc.',
    'Tính lại chặng đi theo lượng pin thật đang có, gồm cả đường về; không chắc đủ thì nhờ người đón hoặc chọn phương án khác.'
  ],
  steps: [
    { title: 'Nhìn kỹ rồi mới chạm', detail: 'Quan sát đầu cắm, dây, đèn trên trụ, báo trên xe, nền ướt và mùi khét; chưa cắm lại, chưa kéo dây, chưa kết luận ai đã làm gì.' },
    { title: 'Phân loại theo dấu hiệu', detail: 'Có ướt, nóng, khét, hư thì dừng và báo chủ điểm sạc; mọi thứ bình thường và khô ráo thì chuyển sang bước tiếp theo.' },
    { title: 'Cắm lại đúng một lần', detail: 'Đưa đầu cắm vào khít theo đúng chiều, đứng quan sát đèn báo trên trụ và xe; sạc bắt đầu thì chờ cho ổn định, lại ngắt thì dừng hẳn, không cắm đi cắm lại.' },
    { title: 'Báo, ghi và tính lại chặng đi', detail: 'Kể sự việc kèm ảnh cho chủ điểm sạc, rồi tính lại chặng đi theo lượng pin thật; không đủ chắc thì nhờ người đón hoặc chọn nơi sạc quen.' }
  ],
  warnings: [
    'Không chạm vào dây, ổ hay đầu cắm có dấu hiệu ướt, nóng, khét, nứt hoặc cong chân; không cắm lại, lùi ra xa và báo chủ điểm sạc.',
    'Không tự mở trụ, không nạy nắp, không chọc vào ổ; việc đó chỉ thuộc về người có chuyên môn và được phép của chủ điểm sạc.',
    'Không cắm đi cắm lại liên tục, không kết luận hay đổ lỗi cho người khác khi chưa có bằng chứng; không cố chạy cho tới khi hết pin giữa đường.'
  ],
  notes: [
    'Các nhóm lý do trong bài chỉ là gợi ý để khoanh vùng; nhiều khi không thể biết chắc nguyên nhân, và kết luận thuộc về chủ điểm sạc hoặc thợ xe điện có chuyên môn.',
    'Ý nghĩa đèn báo, cách xe và bộ sạc tự ngắt hay tự thử lại, cách xe giảm sức chạy khi pin thấp đều khác nhau tùy xe và tùy trụ; hãy đối chiếu với sách hướng dẫn của xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần sạc pin, đèn báo và thông báo trên bảng đồng hồ',
    'Hướng dẫn của chủ điểm sạc hoặc người quản lý nơi đặt trụ về cách dùng an toàn và cách báo sự cố'
  ],
  related: [
    'ung-dung-bao-tru-sac-trong-ma-toi-noi-hong-tra-tien-roi-khong-vao-dien-hoac-phien-sac-chua-dung-xu-ly-ra-sao',
    'lo-dat-hoac-cho-xe-may-dien-di-khi-day-sac-con-cam-cong-sac-day-va-o-cam-bi-giat-kiem-tra-gi-truoc-khi-sac-lai',
    'cong-sac-tren-xe-may-dien-bi-uot-ban-long-hoac-chay-xem-dau-hieu-va-viec-nen-lam',
    'sac-xe-dien',
    'xe-may-dien-dang-sac-luc-troi-noi-giong-hoac-nuoc-bat-dau-dang-rut-sac-the-nao-de-pin-o-dau-va-kiem-tra-gi-sau'
  ]
};
