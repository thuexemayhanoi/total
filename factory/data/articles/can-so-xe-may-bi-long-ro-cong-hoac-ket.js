// AI WIKI TOTAL — S01231; nhận biết bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'can-so-xe-may-bi-long-ro-cong-hoac-ket',
  title: 'Cần số xe máy bị lỏng, rơ, cong hoặc kẹt: các lỗi bên ngoài hộp số và dấu hiệu lỗi nằm bên trong',
  seoTitle: 'Cần số xe máy bị lỏng, rơ, cong: lỗi bên ngoài hay trong hộp số?',
  metaDescription: 'Cần số xe máy bị lỏng, rơ, cong hoặc kẹt do ốc, khớp nối, thiếu mỡ hay lỗi trong hộp số? Cách quan sát khi tắt máy, điều cần tránh và lúc nên đưa xe ra thợ.',
  summary: 'Bài giải thích cần số trên xe số nối với hộp số ra sao và vì sao cảm giác lỏng, rơ, cứng hay kẹt ở bàn đạp chưa chắc xuất phát từ bên trong. Nội dung tách các lỗi bên ngoài như ốc kẹp lỏng, khớp nối mòn, thiếu mỡ, bàn đạp cong sau ngã khỏi các lỗi nằm trong hộp số như nhảy số hay tuột số, hướng dẫn quan sát bằng mắt và tay khi tắt máy, nêu những điều nên tránh như nắn bừa hoặc vặn ốc sai cách, và chỉ ra lúc cần giao thợ mở máy.',
  quickAnswer: 'Cần số xe máy lỏng, rơ hoặc cong thường do lỗi bên ngoài: ốc kẹp lỏng, khớp nối mòn, thiếu mỡ hay bàn đạp cong sau ngã. Lỗi trong hộp số lại hay thể hiện bằng nhảy số, tuột số hoặc số cứng dù bàn đạp vẫn tự do. Hãy quan sát khi tắt máy, không nắn bừa hay vặn ốc sai cách; xe nhảy số, không vào được số hoặc rỉ nhớt quanh trục thì nên đưa thợ kiểm tra.',
  keyPoints: [
    'Bàn đạp số gắn vào một trục nhô ra khỏi hộp số; cảm giác dưới chân đi qua bàn đạp, mối nối, trục rồi mới tới cơ cấu bên trong, nên lỗi ở khâu ngoài cũng làm cần số khác thường.',
    'Ốc kẹp lỏng, khớp nối mòn hoặc khô mỡ làm bàn đạp rơ, hụt hành trình hoặc nặng và kêu; siết lại chỉ tạm thời nếu bề mặt đã mòn.',
    'Bàn đạp hoặc trục cong sau ngã có thể chạm vỏ máy, làm số vào nửa vời, và không nên nắn bằng búa hay kìm vì dễ rạn, gãy hoặc làm hỏng phốt.',
    'Lỗi ngoài đổi cảm giác ở bàn đạp nhưng hộp số vẫn vào số chắc; nhảy số, tuột số, số cứng dù bàn đạp tự do hay tiếng rít gầm ở từng số nghiêng về lỗi bên trong.',
    'Quan sát khi tắt máy, xe chống vững, máy nguội; xe nhảy số, không vào số, không về số không hoặc rỉ nhớt quanh trục là lúc nên giao thợ.'
  ],
  category: 'garage',
  hub: 'loi-thuong-gap',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['cần số xe máy', 'bàn đạp số', 'trục cần số', 'ốc kẹp bàn đạp', 'khớp nối cần số', 'hộp số xe số'],
  keywords: ['cần số xe máy bị lỏng', 'cần số xe máy bị cứng', 'cần số xe máy bị kẹt', 'cần số xe máy bị cong'],
  sections: [
    P('Cần số nối với hộp số như thế nào', [
      'Trên xe số, bàn đạp ở chân trái chỉ là phần nhìn thấy được của cả một cơ cấu chọn số. Bàn đạp được gắn vào đầu một trục ngắn nhô ra khỏi vỏ hộp số, thường nằm phía trái xe, gần nhông và nắp che xích truyền động. Mỗi lần bạn đạp xuống hay nhấc lên, trục này xoay một góc nhỏ. Bên trong vỏ máy, góc xoay ấy được chuyển thành chuyển động của các chi tiết chọn số, rồi đẩy bánh răng vào ăn khớp với nấc mới. Cảm giác dưới chân vì thế đi qua nhiều khâu liên tiếp, từ bàn đạp, mối nối, trục cho tới cơ cấu bên trong. Chỉ cần một khâu ở ngoài bị lỏng hoặc lệch là bạn đã thấy cần số khác thường, dù hộp số vẫn còn tốt. Cách bố trí cụ thể tùy từng dòng xe.',
      'Phần nằm bên ngoài vỏ hộp số gồm vài chi tiết mà mắt thường kiểm tra được. Đó là bàn đạp với miếng cao su bọc mũi, mối nối giữa bàn đạp và trục, thường là một ốc kẹp ôm lấy đầu trục, và đoạn trục lộ ra ngay chỗ trục đi vào vỏ máy, nơi có phốt chắn nhớt. Một số xe còn dùng thanh nối có khớp ở hai đầu, hoặc bàn đạp có chốt bản lề cho phép gập lại khi va chạm nhẹ. Phần nằm bên trong vỏ gồm lò xo đưa cần về vị trí giữa, càng số và trống số đưa bánh răng vào đúng chỗ. Những chi tiết này không thể thấy từ ngoài và cũng không phải thứ để người dùng mở ra xem; điều bạn làm được là quan sát phần lộ ra, rồi suy luận thận trọng.',
      'Hiểu như vậy sẽ thấy vì sao cùng một triệu chứng có thể xuất phát từ hai nơi hoàn toàn khác nhau. Cần số lỏng, rơ, cứng hay kẹt đều là cảm giác ở đầu bàn đạp, nhưng nguyên nhân có thể nằm ở mối nối bị mòn, ở trục bị cong, hoặc ở cơ cấu trong hộp số đã mòn. Lỗi bên ngoài thường đơn giản hơn và xử lý nhanh hơn nếu nhận ra sớm, còn lỗi bên trong đòi hỏi mở máy và tay nghề thợ. Mục tiêu của bài này là giúp bạn nhìn, sờ và nghe đủ để phân loại sơ bộ trước khi đưa xe đi, chứ không phải để tự sửa. Mọi phép thử dưới đây đều làm khi xe tắt máy, chống vững, máy đã nguội, và không đưa tay vào gần xích hay nhông.'
    ]),
    P('Lỏng và rơ: ốc kẹp và khớp nối', [
      'Ốc kẹp ở đầu bàn đạp là nơi đầu tiên đáng nghi khi cần số bỗng lỏng. Mối nối này thường dựa vào lực siết của ốc để giữ bàn đạp đứng yên so với trục, nên rung động kéo dài, nhất là trên đường xấu, có thể làm ốc nới dần. Lần tháo lắp hoặc bảo dưỡng gần đây mà ốc không được siết đúng cách cũng dễ gây chuyện này. Dấu hiệu thường gặp là bàn đạp xoay trượt trên trục: bạn đạp xuống mà hành trình hụt, cảm giác ì rồi mới ăn số, hoặc bàn đạp tụt thấp hơn vị trí quen thuộc. Có thể thấy bàn đạp nhúc nhích khi lắc nhẹ bằng tay. Đừng đi tiếp cho tới khi ốc rơi mất, vì bàn đạp tuột khỏi trục giữa đường sẽ khiến bạn không sang số được.',
      'Có những trường hợp ốc vẫn chặt mà cần số vẫn rơ, và lúc đó nên nghĩ đến bề mặt đã mòn. Ở đầu trục thường có rãnh hoặc răng nhỏ để bàn đạp ăn khớp, và lâu ngày chỗ ăn khớp ấy có thể mòn, làm bàn đạp quay lỏng trên trục dù ốc đã siết. Với xe dùng thanh nối, khớp cầu hoặc bạc cao su ở hai đầu thanh mòn sẽ tạo khe hở, kèm tiếng lách cách nhẹ khi đạp hoặc khi xe rung, và cảm giác chân đi một quãng rồi mới có lực cản. Siết thêm chỉ giải quyết được khi lỗi nằm ở ốc; với bề mặt đã mòn, siết chặt đến đâu cũng chóng lỏng trở lại, thậm chí làm toét ren hoặc nứt chi tiết. Hướng xử lý thường là thay chi tiết mòn đúng loại do thợ thực hiện.',
      'Một nguyên nhân dễ bị bỏ qua là chi tiết khô mỡ và bám bụi. Chốt bản lề của bàn đạp gập, khớp cầu hay bạc ở thanh nối đều cần lớp mỡ để chuyển động trơn. Mỡ cũ trôi mất sau nhiều lần rửa xe, đi mưa hay lội nước, rồi bùn đất bám vào khiến bàn đạp nặng, chát, kêu kít ở một góc, hoặc hồi về chậm sau khi đạp. Gỉ ở đoạn trục lộ ra cũng làm bàn đạp xoay khó hơn. Bạn có thể lau sạch bụi bùn thấy được bằng giẻ khô. Việc tra mỡ đúng loại và đúng chỗ còn tùy xe, nên dựa vào sách hướng dẫn hoặc nhờ thợ. Tránh xịt dầu hay chất tẩy mạnh bừa vào khu vực gần phốt và xích, vì có thể làm hỏng phốt hoặc kéo bụi bám dày hơn.'
    ]),
    P('Cong sau ngã và vì sao ảnh hưởng tới việc sang số', [
      'Xe đổ về bên trái thường để bàn đạp số chạm đường đầu tiên, nên đây là một trong những chi tiết dễ tổn thương nhất sau một cú ngã, kể cả cú ngã nhẹ lúc dắt xe hay đỗ xe không vững. Lực va làm bàn đạp bị uốn vào phía vỏ máy, hoặc chìa ra ngoài, hay xoay lệch so với vị trí cũ; mũi cao su bị mài và đầu bàn đạp có thể bị vênh. Tệ hơn, lực uốn truyền qua mối nối xuống đoạn trục lộ ra, và trục có thể bị lệch dù mắt thường khó nhận ra. Vì vậy sau mọi cú ngã, hãy kiểm tra lại cần số kể cả khi xe vẫn chạy được, bởi triệu chứng đôi khi chỉ lộ ra sau vài ngày sử dụng.',
      'Hành trình của bàn đạp khi sang số khá ngắn, nên một chút lệch đã đủ gây phiền. Bàn đạp cong có thể chạm vào vỏ máy, nắp che nhông hoặc gác chân trước khi đạt đủ hành trình, khiến cơ cấu trong hộp số chỉ đi được nửa đường: số vào lỏng lẻo, dễ tuột, hoặc nằm lưng chừng giữa hai nấc. Mũi chân cũng không còn đặt đúng chỗ quen, dễ trượt khỏi bàn đạp lúc đạp mạnh. Trục cong lại là chuyện khác: nó có thể bị kẹt, nặng và chát khi xoay, làm phốt bị ép lệch và có thể rỉ nhớt hộp số quanh trục. Lực lệch ấy còn truyền thêm vào cơ cấu bên trong, nên bàn đạp cong không chỉ là chuyện thẩm mỹ hay độ thoải mái khi đặt chân.',
      'Điều nên tránh nhất là tự nắn bàn đạp hoặc trục bằng búa, kìm, hay đứng lên đạp cho thẳng. Kim loại ở chỗ vừa bị uốn có thể đã rạn mà mắt không thấy, nắn thêm lần nữa dễ làm nó gãy giữa đường. Lực nắn lại truyền thẳng vào trục và có thể làm hỏng phốt hoặc cơ cấu bên trong, biến lỗi nhỏ thành lỗi lớn. Nắn bằng mắt cũng không bảo đảm đúng góc, vì chỉ cần lệch chút là hành trình vẫn sai. Cách làm an toàn là chụp lại hiện trạng, so với bên đối diện hoặc ảnh cũ nếu có, rồi giao thợ đánh giá nên thay phần cong hay kiểm tra cả trục. Bàn đạp chạm vỏ máy hoặc không đặt chân được thì nên ngừng đi xe.'
    ]),
    P('Phân biệt lỗi bên ngoài với lỗi nằm trong hộp số', [
      'Cách phân loại đơn giản nhất là xem lỗi nằm ở khâu truyền lực hay khâu ăn số. Lỗi ngoài thay đổi cảm giác ở bàn đạp, nhưng một khi cần đã tới đúng vị trí thì hộp số vẫn vào số chắc. Lỗi trong thì khác: bàn đạp chuyển động bình thường mà xe vẫn nhảy số, tuột số hoặc không vào được số. Phép quan sát an toàn bắt đầu bằng việc tắt máy, chống xe vững trên nền phẳng và chờ máy nguội. Dùng tay, không dùng chân, ấn nhẹ bàn đạp rồi nhìn đoạn trục lộ ra xem nó có xoay theo hay không, và lắc nhẹ theo chiều ngang để tìm độ rơ. Máy tắt thì bánh răng không quay, nhiều xe cho cảm giác bàn đạp bị chặn hoặc nặng ở một hướng, chưa chắc là hỏng; chuyện này tùy xe.',
      'Một số dấu hiệu nghiêng về lỗi bên ngoài: bàn đạp rơ hoặc tụt trong khi trục không xoay tương ứng; ốc kẹp lỏng, thiếu hoặc có vệt dịch chuyển; bàn đạp đổi vị trí so với trước, có vết cọ hay chạm vỏ; tiếng lách cách nhỏ ngay ở mối nối chứ không phải tiếng gầm từ sâu trong máy; triệu chứng bắt đầu sau cú ngã, lần rửa xe hay lần tháo lắp gần đây. Ngược lại, dấu hiệu nghiêng về bên trong gồm: xe nhảy số khi chạy dù chân không chạm bàn đạp; nhả ga là tuột số ở một nấc nhất định; bàn đạp tự do mà số vẫn cứng như bị khóa; khó trở về số không; tiếng rít hoặc gầm ở từng số; nhớt hộp số hao hoặc bẩn rõ rệt.',
      'Ranh giới không phải lúc nào cũng rõ. Bàn đạp lỏng khiến bạn đạp thiếu hành trình có thể tạo cảm giác xe không bám số, trong khi hộp số vẫn lành. Ngược lại, càng số hoặc bánh răng mòn lại cho cảm giác tương tự dù bàn đạp rất chắc. Cũng cần phân biệt với ly hợp trượt, tức vòng tua tăng mà xe không tăng tốc, là một chuyện khác nữa. Vì vậy hãy ghi lại tình huống cụ thể: lỗi ở nấc số nào, lúc đang ga hay lúc nhả ga, đường bằng hay dốc, xe nóng hay nguội, có kèm tiếng kêu hay không. Mô tả như vậy giúp thợ khoanh vùng nhanh hơn nhiều so với một câu chung chung là cần số có vấn đề, và là căn cứ khá tốt để quyết định có cần mở máy hay không.'
    ]),
    P('Việc nên làm và lúc nên giao thợ', [
      'Gặp cần số bất thường khi đang chạy, ưu tiên đầu tiên là an toàn: bóp phanh, giảm tốc từ từ và dừng xe ở chỗ phẳng, tránh vừa chạy vừa thử gạt mạnh. Cần tắt máy thì dùng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Đừng đạp mạnh hơn khi cần số cứng, vì lực thêm chỉ làm cong hoặc gãy chi tiết yếu nhất. Sau khi xe nguội, thực hiện các phép quan sát đã nêu: nhìn bàn đạp, ốc kẹp, đoạn trục lộ ra, vết nhớt quanh trục. Đừng tự vặn ốc khi không biết loại ốc, dụng cụ và mức siết phù hợp, vì vặn sai dễ toét ren, nứt hoặc làm lệch vị trí bàn đạp so với trục.',
      'Có vài thói quen giúp phát hiện sớm. Thỉnh thoảng nhìn qua bàn đạp số lúc xe tắt máy và nguội, xem ốc kẹp còn nguyên, mũi cao su còn chắc, bàn đạp còn nằm đúng vị trí quen. Một mẹo hữu ích là kẻ một vạch nhỏ bằng bút sơn qua ốc và phần bàn đạp; vạch bị lệch nghĩa là mối nối đã dịch chuyển. Hãy lau sạch bùn đất ở khu vực này sau mưa hoặc sau khi rửa xe, rồi lau khô. Xe nào cho phép chỉnh độ cao bàn đạp thì nên tìm chỉ dẫn trong sách hướng dẫn, hoặc để thợ làm, vì vị trí chỉnh sai khiến bạn đạp thiếu hành trình. Chụp ảnh bàn đạp khi còn tốt cũng cho bạn thứ để so sánh về sau.',
      'Có những dấu hiệu nên giao thợ mà không nên chờ. Xe nhảy số hoặc tuột số khi đang chạy là nguy hiểm vì lực kéo có thể mất đột ngột lúc vào cua hay leo dốc. Không vào được số, không về số không, bàn đạp không hồi vị, bàn đạp chạm vỏ máy, trục có vết rỉ nhớt, hoặc lỗi lỏng lặp lại sau khi đã siết đều là lý do để đưa xe đi kiểm tra. Với những trường hợp này, thợ có thể phải mở nắp hoặc mở máy mới biết lỗi ở cơ cấu bên trong, việc đòi hỏi dụng cụ và kinh nghiệm. Trong thời gian chờ, hãy đi chậm, tránh vào cua gấp và tránh đạp ép số. Đối chiếu sách hướng dẫn của xe cũng giúp bạn mô tả đúng tên chi tiết khi trao đổi.'
    ])
  ],
  checklist: [
    'Tắt máy, chống xe vững trên nền phẳng, chờ máy và ống xả nguội trước khi kiểm tra cần số.',
    'Nhìn bàn đạp, mũi cao su, ốc kẹp và đoạn trục lộ ra: có lệch, cọ, chạm vỏ máy, thiếu ốc hay vệt nhớt quanh trục không.',
    'Dùng tay ấn nhẹ bàn đạp và lắc nhẹ theo chiều ngang để tìm độ rơ, xem trục có xoay theo bàn đạp không.',
    'Ghi lại lỗi xuất hiện ở nấc số nào, lúc đang ga hay nhả ga, đường bằng hay dốc, xe nóng hay nguội.',
    'Chụp ảnh bàn đạp khi còn tốt và sau mỗi cú ngã để có thứ so sánh khi trao đổi với thợ.'
  ],
  steps: [
    { title: 'Dừng xe an toàn', detail: 'Bóp phanh, giảm tốc, dừng ở chỗ phẳng rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ.' },
    { title: 'Quan sát bằng mắt', detail: 'Chờ xe nguội rồi nhìn bàn đạp, ốc kẹp, đoạn trục lộ ra và khu vực quanh phốt xem có lệch, cong, chạm vỏ máy hay rỉ nhớt không.' },
    { title: 'Kiểm tra độ rơ bằng tay', detail: 'Ấn nhẹ và lắc nhẹ bàn đạp bằng tay, không đưa tay gần xích hay nhông, để xem trục có xoay theo và độ rơ nằm ở mối nối hay không.' },
    { title: 'Ghi chú rồi giao thợ', detail: 'Mô tả nấc số bị lỗi, lúc đang ga hay nhả ga, xe nóng hay nguội và tiếng kêu đi kèm; lỗi nhảy số, không vào số hoặc rỉ nhớt thì để thợ mở máy kiểm tra.' }
  ],
  warnings: [
    'Xe nhảy số, tuột số hoặc không vào được số khi đang chạy có thể làm mất lực kéo đột ngột: bóp phanh, giảm tốc, dừng xe an toàn rồi mới kiểm tra.',
    'Không nắn bàn đạp hoặc trục bằng búa, kìm hay lực chân; không đạp ép khi số cứng, vì dễ làm gãy chi tiết và hư phốt hoặc cơ cấu bên trong.',
    'Không tự vặn ốc khi chưa biết đúng loại ốc, dụng cụ và mức siết, không tự tháo hộp số hay xịt dầu bừa vào gần phốt và xích.'
  ],
  notes: [
    'Cách bố trí bàn đạp, mối nối, thanh nối và kiểu số khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của đúng xe bạn.',
    'Các dấu hiệu trong bài chỉ là gợi ý để phân loại sơ bộ và trao đổi với thợ; kết luận cuối cùng cần thợ có chuyên môn kiểm tra trực tiếp.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hộp số và bàn đạp số',
    'Tài liệu kỹ thuật của nhà sản xuất về cơ cấu sang số của đúng dòng xe'
  ],
  related: ['xe-so-kho-vao-so-1', 'tieng-keu-tu-hop-so-xe-so', 'ly-hop-xe-so-bi-truot', 'gac-chan-xe-may-bi-cong-long-hoac-gay', 'den-bao-so-xe-so-khong-sang-hoac-bao-sai']
};
