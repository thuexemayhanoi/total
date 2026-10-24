// AI WIKI TOTAL — S02036 (topic V2 T002095); không nêu số liệu hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'mau-day-dien-xe-may-noi-len-dieu-gi-doc-mau-va-soc-day-vi-sao-moi-dong-xe-mot-kieu-va-cach-do-day-truoc-khi-dau-them',
  title: 'Màu dây điện xe máy nói lên điều gì: đọc màu và sọc dây, vì sao mỗi dòng xe một kiểu và cách dò dây trước khi đấu thêm',
  seoTitle: 'Màu dây điện xe máy: đọc màu, sọc dây và vì sao mỗi xe một kiểu',
  metaDescription: 'Màu và sọc dây điện xe máy nói lên điều gì, vì sao không có bảng màu chung, cách dò dây theo sơ đồ đúng đời xe và vì sao không tự đấu thêm khi chưa chắc.',
  summary: 'Mở bó dây điện xe máy ra, ta thấy rất nhiều dây đủ màu và có sọc mà không biết dây nào làm việc gì. Lời mách như đỏ là dương, đen là âm chỉ có thể đúng ở vài chỗ chứ không đúng với mọi dòng xe, vì không có bảng màu chung. Bài giải thích bó dây gồm những nhóm mạch nào, cách đọc dây một màu và dây có sọc, ký hiệu màu viết tắt trong sơ đồ và vì sao cùng một màu có thể mang chức năng khác nhau giữa các xe. Bài cũng nói cách dò dây đúng hơn đoán màu, rủi ro khi đoán sai và lúc nào nên giao việc cho thợ điện xe.',
  quickAnswer: 'Màu dây giúp phân biệt các mạch trong bó dây nhưng không có một bảng màu chung cho mọi xe máy, nên không thể đoán dây nào có điện hay làm việc gì chỉ qua màu. Hãy đối chiếu sơ đồ dây trong tài liệu kỹ thuật của đúng đời xe, chụp ảnh trước khi động vào, và lấy nguồn cho phụ kiện sau khóa điện qua cầu chì hoặc rơ-le thay vì chọc vào dây chính. Việc đo kiểm và đấu nối nên để thợ điện xe làm.',
  keyPoints: [
    'Bó dây gồm nhiều nhóm mạch: nguồn trực tiếp từ ắc quy, nguồn sau khóa điện, đèn, xi nhan và còi, sạc, đề, tín hiệu cảm biến và đường về mát.',
    'Dây có màu thân và có thể có thêm sọc; hai dây cùng màu thân nhưng khác sọc có thể thuộc hai mạch khác hẳn.',
    'Không có bảng màu chung: nhà sản xuất, đời xe và phiên bản đều có thể đổi cách dùng màu, nên lời mách kiểu đỏ dương đen âm không đủ làm căn cứ.',
    'Dò dây đúng là đối chiếu sơ đồ của chính đời xe, chụp ảnh trước khi động vào, nhờ thợ xác nhận dây có điện khi nào, rồi lấy nguồn sau khóa điện qua cầu chì hoặc rơ-le.',
    'Màu có thể phai hoặc đã bị đổi khi từng sửa; đoán sai dễ gây chập, nóng dây, hỏng bộ điều khiển nên việc đấu nối thuộc thợ điện xe.'
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-24',
  updated: '2026-10-24',
  entities: ['màu dây điện', 'sọc dây', 'sơ đồ dây điện', 'bó dây điện', 'giắc nối', 'nguồn sau khóa điện', 'cầu chì', 'tài liệu kỹ thuật'],
  keywords: ['màu dây điện xe máy', 'đọc sọc dây điện xe máy', 'sơ đồ dây điện xe máy', 'dò dây điện xe máy', 'lấy nguồn sau khóa điện xe máy'],
  sections: [
    P('Bó dây điện xe máy gồm những nhóm mạch nào', [
      'Mở lớp ốp ra nhìn vào bó dây điện của xe máy, người ta dễ có cảm giác đó là một đám dây rối không có trật tự. Thực ra bó dây là nhiều mạch nhỏ gom chung một đường đi cho gọn, mỗi mạch phục vụ một việc riêng. Phần lớn xe có thể chia thành vài nhóm lớn, dù cách chia chi tiết còn tùy dòng xe. Hiểu các nhóm này giúp chủ xe nhìn bó dây có phương hướng, thay vì tin rằng mỗi màu dây là một chức năng cố định. Bài về bó dây điện xe máy cũ lão hóa trên trang nói về vỏ dây giòn nứt, còn bài này bàn về nhóm mạch.',
      'Nhóm đầu tiên là nguồn lấy trực tiếp từ ắc quy, tức là những dây còn mang điện ngay cả khi khóa điện đang tắt, thường phục vụ bộ nhớ đồng hồ, báo động chống trộm hay bộ khóa thông minh. Nhóm thứ hai là nguồn sau khóa điện, chỉ có điện khi khóa được bật, nơi đồng hồ, bộ điều khiển và nhiều thiết bị khác lấy điện. Sự khác nhau giữa hai kiểu nguồn này quyết định một thiết bị gắn thêm chỉ chạy khi xe bật hay sẽ hút ắc quy cả lúc xe đỗ. Vì vậy một dây trông vô hại vẫn có thể là dây luôn có điện, và chạm nhầm cũng đủ gây chập.',
      'Nhóm thứ ba là các mạch phụ tải mà ta thấy được hoạt động: đèn pha, đèn hậu, xi nhan, còi, đèn phanh và các đèn báo trên đồng hồ. Mỗi mạch thường gồm dây cấp điện đi qua công tắc hoặc rơ-le, dây tới thiết bị và đường về mát. Nhóm thứ tư là sạc và đề. Đường sạc đưa điện từ bộ phát điện qua bộ điều chỉnh để nạp lại cho ắc quy, còn đường đề đưa điện từ ắc quy qua rơ-le tới củ đề mỗi khi bấm nút. Các mạch này đi chung một bó nhưng khác nhau nhiều về mức tải, nên hậu quả của một lần đấu nhầm cũng khác nhau.',
      'Nhóm cuối là các dây tín hiệu mảnh đi từ cảm biến và công tắc về bộ điều khiển hoặc đồng hồ, chẳng hạn tín hiệu tốc độ, nhiệt độ, vị trí ga, chân chống hay phanh. Dây tín hiệu thường nhỏ và rất nhạy, chỉ mang thông tin, nên đưa điện vào nhầm dây này có thể làm hỏng cả bộ điều khiển chứ không chỉ một bóng đèn. Ngoài ra còn các dây mát, tức đường về của hầu hết mạch, mà bài dây mát xe máy lỏng hoặc gỉ trên trang đã giải thích khá kỹ. Bằng mắt thường, ta không phân biệt được dây ít rủi ro với dây dễ gây hỏng nặng chỉ qua màu.'
    ]),
    P('Dây một màu và dây có sọc: cách đọc và ký hiệu trong sơ đồ', [
      'Dây một màu là dây có lớp vỏ cùng một màu từ đầu đến cuối, còn dây có sọc là dây có màu chính của vỏ cộng thêm một đường sọc màu khác chạy dọc thân dây. Lý do có sọc khá thực tế: số mạch trên một chiếc xe nhiều hơn số màu vỏ dễ phân biệt, nên nhà sản xuất thêm sọc để tạo thêm tổ hợp. Khi đọc, ta gọi theo hai phần là màu thân và màu sọc. Hai dây cùng màu thân nhưng khác sọc là hai dây khác nhau, có thể thuộc hai mạch hoàn toàn khác.',
      'Nhìn màu dây trên xe thật khó hơn nhìn trên sơ đồ nhiều. Dây nằm trong bó chật, ánh sáng yếu, vỏ bám bụi và dầu nên màu sáng dễ thành màu xỉn. Sọc có thể nằm ở mặt khuất, nên cần xoay nhẹ dây hoặc nhìn ở đoạn khác, và sọc rất mảnh còn bị ống bọc hay băng keo che mất. Một số cặp màu rất dễ lẫn: sẫm với đen, xanh lá với xanh dương sẫm, nâu với cam xỉn, trắng với vàng nhạt khi vỏ đã ố. Tốt nhất là xem ở chỗ đủ sáng và lau nhẹ bụi bằng khăn khô.',
      'Trong sơ đồ dây điện, màu thường được ghi bằng chữ viết tắt vì không thể tô màu vào từng đường kẻ. Chữ viết tắt thường là một hoặc hai chữ cái lấy từ tên màu, đôi khi theo tên màu bằng tiếng nước ngoài chứ không theo tiếng Việt. Màu thân thường ghi trước và màu sọc ghi sau, ngăn cách bằng dấu gạch, nhưng thứ tự này tùy tài liệu. Bảng chú giải ở đầu hoặc cuối phần sơ đồ mới là chuẩn cho riêng tài liệu ấy. Đừng áp chú giải của sơ đồ xe này lên xe khác, vì cùng một chữ cái có thể dùng cho những màu khác nhau.',
      'Ngoài màu, sơ đồ còn cho biết điều quan trọng không kém là dây đi từ đâu tới đâu: từ chân nào của giắc này sang chân nào của giắc kia, qua cầu chì hay rơ-le nào. Giắc nối thường có hình dạng khớp riêng, thứ tự chân được đánh dấu trên giắc hoặc vẽ trong sơ đồ. Nhìn nhầm mặt giắc là lỗi hay gặp, vì hình vẽ có thể là nhìn từ phía dây vào hoặc từ phía chân vào tùy tài liệu. Vì vậy hãy đọc cả ghi chú về hướng nhìn giắc rồi mới đối chiếu màu và vị trí. Nếu tài liệu không rõ ràng, hãy dừng lại và hỏi thợ điện xe thay vì đoán.'
    ]),
    P('Vì sao không có bảng màu chung và những quy ước hay gặp không đáng tin tuyệt đối', [
      'Điều bất ngờ với nhiều người là không có một bảng màu dây chung cho mọi xe máy. Mỗi nhà sản xuất tự đặt cách dùng màu cho dòng xe của mình, và cách đó có thể đổi theo đời xe, phiên bản và thị trường bán ra. Cùng một màu dây có thể là nguồn trên xe này nhưng lại là tín hiệu hay đường về trên xe khác. Vì vậy bảng nào khẳng định màu này luôn là chức năng kia cho mọi xe đều đáng ngờ, và bài này cố ý không đưa ra bảng như thế.',
      'Dĩ nhiên vẫn có những thói quen gọi tên truyền miệng. Lời mách quen thuộc nhất là dây đỏ là dương còn dây đen là âm, và lời mách ấy có thể đúng ở một vài vị trí trên một vài xe. Nhưng đúng ở một chỗ không có nghĩa đúng ở mọi chỗ, vì ra khỏi cọc ắc quy dây còn đi qua giắc, cầu chì, công tắc và có thể đổi sang màu khác. Trên một số xe, dây đổi màu ngay ở hai phía của một giắc nối, nên lần theo dây bằng mắt rồi tin vào màu là cách dễ lạc nhất. Lời mách chỉ là gợi ý biết chỗ nào cần xem tiếp, không phải căn cứ để đấu nối.',
      'Một lý do nữa là xe có thể không còn nguyên bản. Xe đã qua nhiều chủ, từng được độ đèn, gắn còi, thay giắc hay nối thêm dây thường chứa những đoạn dây do thợ khác nối vào bằng loại dây sẵn có chứ không đúng màu nguyên bản. Với xe như vậy, màu dây có khi chỉ phản ánh thói quen của người nối gần nhất. Dò dây bằng màu trên xe đã độ vì thế còn rủi ro hơn trên xe nguyên bản.',
      'Có hai tình huống cần cảnh báo rõ hơn cả. Thứ nhất là dây tín hiệu: một dây trông giống dây nguồn nhỏ nhưng thực ra nối với cảm biến, và đấu điện vào nhầm có thể làm hỏng bộ điều khiển nặng hơn nhiều một món phụ kiện. Thứ hai là xe máy điện, nơi ngoài mạch phụ còn có mạch công suất lớn của pin và mô-tơ; đây không phải chỗ để người ngoài nghề đoán màu rồi chạm vào, và mọi việc ở đó thuộc thợ chuyên xe điện. Bài bộ hạ áp trên xe máy điện trên trang giải thích vì sao đèn, còi, đồng hồ dùng nguồn phụ riêng.'
    ]),
    P('Dò dây đúng cách thay vì đoán màu trước khi đấu thêm phụ kiện', [
      'Bước đầu của việc dò dây không phải là mở bó dây mà là xác định đúng chiếc xe của mình. Đời xe, phiên bản, kiểu khóa và hệ thống nhiên liệu đều có thể làm sơ đồ khác đi, nên thông tin nhận dạng trong giấy tờ và trên khung xe cần được đối chiếu khi tìm tài liệu. Tài liệu đáng tin nhất là sơ đồ dây điện trong tài liệu kỹ thuật dành cho thợ của đúng dòng và đúng đời xe, thường do nhà sản xuất hoặc đại lý chính thức lưu giữ. Sách hướng dẫn sử dụng đi kèm xe thường chỉ có sơ đồ rút gọn hoặc vị trí cầu chì, nên chưa đủ để đấu thêm thiết bị.',
      'Trước khi động vào bất kỳ giắc hay dây nào, hãy tắt khóa điện, tắt máy, để xe nguội rồi chụp ảnh rõ từng vị trí: hướng đi của bó dây, chỗ đặt giắc, màu và sọc dây ở từng chân giắc, thứ tự các ốp được tháo ra. Nếu phải tháo ốp để nhìn, hãy để ốc vào hộp nhỏ theo thứ tự tháo. Đừng cắt, bóc hay kéo mạnh dây để xem ruột, vì lớp vỏ cách điện giữ an toàn cho cả mạch. Mở ốp, nhìn đường đi của dây và ghi chép là phần chủ xe làm được; đo kiểm và đấu nối là việc của thợ điện xe.',
      'Xác nhận một dây có điện hay không, và có điện vào lúc nào, là bước mà đoán màu không thể thay thế. Một dây có thể có điện liên tục, chỉ có điện khi bật khóa, hoặc chỉ có điện trong khoảnh khắc như khi bóp phanh hay bấm xi nhan. Thợ điện xe thường dùng dụng cụ đo thích hợp và đối chiếu với sơ đồ, chứ không đoán theo màu hay chạm thử cho biết. Họ cũng tránh chọc kim xuyên qua vỏ dây, vì lỗ chọc làm hở lớp cách điện, về sau dễ vào ẩm và gỉ. Trên xe đời mới có bộ điều khiển, thử bừa bằng dụng cụ không phù hợp còn có thể làm hỏng linh kiện điện tử.',
      'Khi cần lấy nguồn cho phụ kiện, hướng đúng thường là dùng điểm lấy điện đã chuẩn bị sẵn sau khóa điện, đi qua một cầu chì riêng hoặc rơ-le, chứ không chọc hay cắt vào dây chính của bó dây. Cầu chì riêng bảo vệ phần dây thêm vào, còn rơ-le giúp phụ kiện tiêu thụ nhiều không kéo tải qua công tắc nhỏ. Nối xoắn hay kẹp cắm xuyên vỏ dễ gây lỏng, nóng và chập, nên thợ thường dùng giắc đúng loại và bọc kín. Bài phụ kiện gắn thêm xe máy trên trang nói thêm về tải điện và đường dây, còn bài gắn thêm đèn, còi, ổ sạc USB hay camera cho xe máy điện nói vì sao không đấu thẳng vào pin chính. Việc đấu nối thật sự nên để thợ điện xe làm.'
    ]),
    P('Màu dây phai, đổi hoặc từng sửa lại: điều thợ cần biết và rủi ro khi đoán sai', [
      'Ngay cả khi có sơ đồ đúng, màu thật trên xe có thể không còn giống màu trong tài liệu. Nhiệt từ máy và ống xả làm vỏ dây ngả sẫm hoặc xỉn, dầu nhớt và bụi đường bám lên làm màu sáng thành màu bẩn, nắng và thời gian làm vỏ nhựa ố và phai. Đoạn dây gần chỗ nóng thường đổi màu nhiều hơn đoạn nằm sâu trong khung, nên cùng một dây có thể có hai sắc độ ở hai đầu. Vì vậy thợ có kinh nghiệm không tin hoàn toàn vào mắt mà còn kiểm tra thêm bằng đường đi của dây và chân giắc.',
      'Màu dây còn bị đổi bởi chính con người. Một đoạn dây đứt hay cháy từng được thay bằng đoạn dây khác loại, đôi khi khác màu vì thợ trước dùng dây sẵn có. Giắc cũ được thay bằng giắc khác kiểu, dây phụ kiện được nối rẽ vào bó chính, hoặc băng keo cuộn lên che mất sọc. Vì thế với xe từng sửa điện, màu không còn là bằng chứng đáng tin. Chủ xe giúp thợ rất nhiều khi nhớ và nói rõ những lần xe từng sửa điện, độ đèn hay gắn phụ kiện, kèm ảnh hay ghi chép nếu có.',
      'Đoán sai màu rồi đấu vào là con đường nhanh dẫn tới sự cố. Nhẹ nhất là cầu chì đứt ngay khi bật khóa, tức là mạch bị chập hoặc quá tải và cầu chì đã làm đúng việc của nó. Nặng hơn là dây nóng lên, vỏ dây mềm chảy, đèn báo lỗi sáng, bộ điều khiển hỏng, ắc quy bị rút cạn khi để xe, thậm chí có thể gây cháy. Bài cầu chì xe máy trên trang nói về vai trò của cầu chì và cách xử lý khi cầu chì cháy lặp lại, còn tự đấu thêm hoặc cắt dây có thể ảnh hưởng điều kiện bảo hành.',
      'Khi thấy mùi khét, khói, giắc nóng, vỏ dây mềm hay cầu chì đứt lặp lại sau khi từng đụng vào dây, hãy tắt khóa, tắt máy, đưa xe ra chỗ thoáng và cách xa nguồn xăng, rồi gọi thợ thay vì thử đấu lại. Đừng thay cầu chì loại lớn hơn hay nối lại đoạn dây vừa cháy bằng băng keo. Khi đưa xe đến thợ, hãy kể rõ đã gắn và đã tháo những gì. Bài bó dây điện xe máy cũ lão hóa trên trang nói cách nhận ra dây giòn nứt, bài xe máy bị chuột cắn dây điện nói về dây bị cắn hở ruột, còn bài dây mát xe máy lỏng hoặc gỉ giải thích vì sao nhiều lỗi chập chờn không nằm ở dây nguồn.'
    ])
  ],
  checklist: [
    'Xác định đúng đời xe, phiên bản và kiểu khóa rồi mới tìm sơ đồ dây điện.',
    'Dùng sơ đồ trong tài liệu kỹ thuật của đúng đời xe, đọc chú giải màu và hướng nhìn giắc trước khi đối chiếu.',
    'Tắt khóa, tắt máy, để xe nguội và chụp ảnh bó dây, giắc, màu, sọc dây trước khi tháo hay động vào.',
    'Không coi lời mách kiểu đỏ dương đen âm là căn cứ; màu chỉ là gợi ý để thợ đối chiếu với sơ đồ.',
    'Muốn gắn phụ kiện thì lấy nguồn sau khóa điện qua cầu chì riêng hoặc rơ-le, không chọc hay cắt vào dây chính.',
    'Báo cho thợ những lần xe từng sửa điện, độ đèn hay gắn thêm phụ kiện, kèm ảnh nếu có.'
  ],
  steps: [
    { title: 'Xác định đúng xe', detail: 'Ghi lại đời xe, phiên bản, kiểu khóa từ giấy tờ để tìm đúng sơ đồ trong tài liệu kỹ thuật.' },
    { title: 'Tắt xe và chụp ảnh', detail: 'Tắt khóa, tắt máy, để xe nguội rồi chụp bó dây, giắc, màu và sọc dây từ nhiều góc.' },
    { title: 'Đối chiếu sơ đồ', detail: 'Đọc chú giải màu và hướng nhìn giắc của chính tài liệu, đối chiếu cả màu thân, sọc và vị trí chân giắc.' },
    { title: 'Nhờ thợ xác nhận dây có điện', detail: 'Để thợ điện xe đo kiểm dây có điện liên tục, chỉ sau khóa điện hay chỉ trong lúc nào đó.' },
    { title: 'Lấy nguồn đúng chỗ', detail: 'Dùng điểm lấy nguồn sau khóa điện qua cầu chì riêng hoặc rơ-le, đấu bằng giắc đúng loại, không chọc vào dây chính.' }
  ],
  warnings: [
    'Không tự cắt, chọc hay nối thêm vào dây chỉ vì đoán màu: có thể gây chập, nóng dây, cháy, hỏng bộ điều khiển và ảnh hưởng bảo hành.',
    'Không chạm vào mạch công suất của xe máy điện khi chưa có thợ chuyên xe điện; đoán màu ở đây có thể gây giật điện và hỏng pin.',
    'Mùi khét, khói, giắc nóng hay cầu chì đứt lặp lại là lúc tắt khóa, đưa xe ra chỗ thoáng, tránh xa xăng và gọi thợ.'
  ],
  notes: [
    'Cách dùng màu và sọc dây khác nhau theo nhà sản xuất, dòng xe, đời xe và thị trường, nên bài chỉ nêu khái niệm chung và phải đối chiếu tài liệu của đúng xe.',
    'Đo kiểm và đấu nối điện trên xe thuộc thợ điện xe; chủ xe chỉ nên quan sát, chụp ảnh, ghi chép và mô tả lại cho thợ.'
  ],
  references: [
    'Tài liệu kỹ thuật và sơ đồ dây điện của nhà sản xuất cho đúng dòng xe và đúng đời xe',
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần nói về cầu chì, ắc quy và phụ kiện gắn thêm'
  ],
  related: [
    'bo-day-dien-xe-may-cu-lao-hoa-vo-gion-nut-giac-gi-vi-sao-xe-cu-hay-loi-dien-va-va-tam-duoc-khong-hay-thay-ca-bo',
    'gan-them-den-coi-o-sac-usb-hay-camera-cho-xe-may-dien-lay-nguon-o-dau-va-vi-sao-khong-dau-thang-vao-pin-chinh',
    'xe-may-bi-chuot-can-day-dien-phong-va-xu-ly',
    'phu-kien-gan-them-xe-may-luu-y',
    'bo-ha-ap-tren-xe-may-dien-la-gi-vi-sao-den-coi-dong-ho-co-nguon-rieng-va-dau-hieu-bo-ha-ap-yeu'
  ]
};
