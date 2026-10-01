// AI WIKI TOTAL — bài mở rộng cụm /tips/meo-lai-xe/: đỗ xe máy trên lề dốc (slot S00158)
'use strict';

module.exports = {
  slug: 'do-xe-may-tren-le-doc-an-toan',
  title: 'Đỗ xe máy trên lề dốc: chống trôi và lăn',
  seoTitle: 'Đỗ xe máy trên lề dốc an toàn, chống trôi',
  metaDescription: 'Đỗ xe máy trên lề dốc dễ bị trôi, lăn hoặc đổ khi chân chống lún. Bài viết chỉ cách vào số, quay đầu xe và chọn chỗ đỗ đúng.',
  summary: 'Đỗ xe máy trên mặt bằng phẳng là thao tác phản xạ, nhưng trên lề dốc thì mọi giả định của thao tác đó đều thay đổi: chân chống nghiêng theo độ dốc làm xe đứng xiên hơn thiết kế, mặt nhựa nóng mùa hè làm chân chống lún, và trọng lượng xe có xu hướng trôi theo hướng dốc bất chấp khóa cổ. Bài viết này giải thích ba lực đang đấu với nhau khi xe đỗ trên dốc — trọng lực kéo theo phương dốc, ma sát chân chống với mặt đường, và lực giữ của hệ truyền động khi vào số — rồi từ đó rút ra quy trình đỗ đúng cho hai tình huống: dốc lên và dốc xuống. Nội dung bao gồm cách quay đầu xe vào lề sao cho bánh trước khum men theo mép đường, việc vào số một như một lớp khóa cơ khí thứ hai, điểm khác nhau giữa chân chống bên và càng giữa trên mặt dốc, cách xử lý khi mặt đường là nhựa mềm hoặc đất mềm, và cách kiểm tra trước khi rời xe — nghiêng nhẹ vào xe để thử độ đứng. Phần cuối nhắc lại một nguyên tắc mà nhiều người bỏ qua: xe đỗ trên dốc không chỉ tự vệ — nó còn bị tác động từ bên ngoài: gió lớn, xe khác đỗ chạm, trẻ em dựa — và lớp phòng thủ tốt nhất vẫn là vị trí đỗ và hướng bánh, chứ không phải một lớp khóa duy nhất.',
  quickAnswer: 'Trả lời ngắn: đỗ trên dốc lên, quay đầu xe sao cho bánh trước hướng vào lề và hơi lái về phía mép — xe nếu trôi sẽ bị mép đường đỡ; đỗ trên dốc xuống, vẫn quay bánh trước vào lề và cho xe nghiêng sao cho trọng lượng ép vào chân chống phía trên dốc. Vào số một trước khi rời xe: số vào làm bánh sau khóa cứng với động cơ, tạo lớp chặn cơ khí mà không lớp khóa điện nào thay được. Buông côn từ từ để xe ăn số, không để côn căng. Ưu tiên chân chống bên đặt phía cao của mặt đường, mặt đặt phẳng; nếu mặt nhựa nóng hoặc đất mềm thì lót tấm ván mỏng dưới chân chống. Trước khi đi: nghiêng nhẹ xe thử độ đứng, nhìn góc xiên của xe so với mặt đường. Không bao giờ đỗ ngang mặt dốc hoặc chỉ trông chờ vào khóa cổ — trôi xe trên dốc xảy ra trong chớp mắt và xe tự lăn là vật nặng không thể né.',
  keyPoints: [
    'Quay đầu bánh trước vào lề khi đỗ trên dốc — xe nếu trôi sẽ bị mép đường chặn lại thay vì chạy thẳng ra lòng đường.',
    'Vào số một và buông côn từ từ trước khi rời xe: bánh sau khóa cứng với động cơ là lớp chặn cơ khí mà khóa điện không thay được.',
    'Chân chống bên nên đặt phía cao của mặt dốc, mặt đặt phẳng — lót ván mỏng trên nhựa nóng hoặc đất mềm để chống lún.',
    'Không đỗ ngang mặt dốc: xe nghiêng quá góc an toàn của chân chống là tự đổ, kể cả khi không trôi.',
    'Kiểm tra trước khi rời xe: nghiêng nhẹ thử độ đứng, nhìn góc xe so với mặt đường, để côn ăn số hẳn.',
    'Xe đỗ trên dốc còn chịu tác động ngoài: gió, xe đỗ chạm, người dựa — chọn chỗ có điểm tựa mép và hướng bánh đúng là phòng thủ tốt nhất.',
  ],
  category: 'tips',
  hub: 'meo-lai-xe',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['lề dốc', 'chân chống', 'vào số một', 'bánh trước', 'mặt nhựa nóng', 'khóa cổ xe'],
  keywords: ['đỗ xe máy trên dốc', 'xe máy đỗ lề dốc', 'chống trôi xe máy', 'vào số khi đỗ xe', 'chân chống xe máy', 'đỗ xe máy an toàn'],
  sections: [
    {
      h2: 'Ba lực đấu với nhau khi xe đỗ trên dốc',
      html: `<p>Lực thứ nhất là trọng lực: trên mặt dốc, thành phần trọng lực song song mặt đường luôn kéo xe theo phương dốc — với dốc năm phần trăm, một chiếc xe nặng một trăm ký tạo lực trôi cỡ năm kilôgam, đủ thắng ma sát của bánh trên sỏi hoặc mặt vụn. Lực này không tự mất đi theo thời gian; nó kéo đều đều suốt lúc xe đứng, và chỉ cần ma sát nơi chân chống giảm — trời mưa, dầu loang, rêu — là xe bắt đầu chuyển động chậm mà không ai nghe thấy.</p>
<p>Lực thứ hai là ma sát và độ đứng của chân chống: chân chống bên giữ xe bằng một tam giác đứng hẹp, và góc nghiêng tự nhiên của xe khi chống bên vào khoảng tám đến mười độ — nghĩa là xe có biên dự trữ nghiêng rất ít. Trên dốc, mặt đường đã nghiêng sẵn, khiến góc tương đối giữa xe và mặt đường có thể vượt góc đứng: đó là lý do nhiều xe chống bên trên dốc lại đổ về phía chống. Càng giữa thì tam giác đứng rộng hơn nhưng đặt càng trên dốc đòi hỏi sức và kỹ hơn.</p>
<p>Lực thứ ba là lực chặn của hệ truyền động khi vào số: bánh sau qua xích nối với hộp số và động cơ tạo thành khối gần như khóa cứng — quay bánh trước khi đã vào số một gặp cảm giác khựng lại sau vài độ. Lớp chặn này mạnh hơn mọi chuyển động trôi chậm vì nó không phụ thuộc ma sát mặt đường, và chính vì vậy "vào số rồi mới rời xe" là quy tắc đỗ xe trên dốc phổ biến ở mọi hướng dẫn.</p>`,
    },
    {
      h2: 'Đỗ trên dốc lên: quay bánh vào lề và cho xe dựa',
      html: `<p>Trên dốc lên, quy trình chuẩn bắt đầu bằng cách tiếp cận lề theo góc nghiêng nhẹ, sát giảm tốc cho tới khi dừng hẳn — không dừng nửa vế rồi đạp chống giữa lúc xe còn nặng về sau. Tay lái quay về phía lề: bánh trước khum men theo mép đường khoảng mười lăm đến hai mươi độ, sao cho trục bánh hướng hơi vào lề. Với bố trí này, nếu mọi lớp giữ đều thất bại, xe trôi ngắn rồi bánh trước tựa vào mép đường hoặc tường — lực trôi bị chuyển thành lực ép vào vật chắn thay vì đưa xe ra lòng đường.</p>
<p>Chân chống: với dốc lên, ưu tiên chống bên sao cho phía mặt đường cao hơn — tức xe nghiêng về phía lề. Nghiêng này cộng với độ nghiêng tự nhiên của chân chống khiến xe đứng trên tam giác ổn định hơn; ngược lại, nếu đặt chống bên sao cho xe nghiêng theo hướng mặt đường dốc xuống thì góc nghiêng tổng có thể vượt góc an toàn. Đơn giản hóa: đỗ sao cho xe hơi "dựa lên" dốc, không "ngả theo" dốc.</p>
<p>Sau khi chống, vào số một: bóp côn, đạp cần số xuống, rồi buông côn từ từ cho tới khi cảm giác xe khựng nhẹ lại — tức số đã ăn. Bước buông côn này quan trọng: nhiều người vào số xong giữ côn căng và rời tay, để côn lò về nửa bướm — trạng thái lỏng không chặn được gì. Cuối cùng là thử: đứng bên trái xe, tay nắm tay lái, nghiêng nhẹ xe về phía sau rồi về phía trước — nếu bánh sau có xu hướng nhúc nhích theo dốc thì số chưa ăn, bóp côn vào lại lần nữa.</p>`,
    },
    {
      h2: 'Đỗ trên dốc xuống: hướng bánh và độ nghiêng đảo lại',
      html: `<p>Trên dốc xuống, lực trôi kéo xe về phía trước và ra lòng đường — tình huống nguy hiểm hơn vì xe lăn theo chiều xe mình nhìn thấy. Bố trí đúng vẫn là quay đầu bánh trước vào lề, nhưng lần này góc quay đóng vai trò chắn chính: bánh trước hướng vào mép đường với góc rõ hơn, và xe được để nghiêng sao cho trọng lượng phần lớn dồn vào chân chống phía trên dốc. Nếu lề có gờ hoặc tường thấp, đưa bánh sát gần mà không chạm — một lần trôi vài centimét là bánh đã tựa.</p>
<p>Về chân chống: nguyên tắc "phía cao của mặt đường" càng quan trọng hơn khi dốc xuống, vì trọng lượng xe có xu hướng lăn ra phía trước rồi đổ về phía thấp. Trên nhiều dòng xe tay ga không có cần số, lớp chặn cơ khí không tồn tại — lúc đó vị trí bánh và độ dựa của xe gần như là toàn bộ hệ phòng thủ, cộng với khóa cổ: một số dòng khóa cổ tự chốt trụ lái, tạo lực cản quay bánh; khóa thắng hoặc khóa đĩa cản quay bánh trước cũng chặn trôi hiệu quả.</p>
<p>Điểm dễ sai nhất khi đỗ dốc xuống là đỗ đầu xe hướng theo lòng đường vì tiện lúc ra: bố trí này biến mọi lần trôi thành cú lao thẳng ra đường, đúng phương nguy hiểm nhất. Đổi hướng ra mất thêm mười lăm giây quay xe, nhưng đổi lại mọi kịch bản trôi đều kết thúc tại mép lề thay vì giữa dòng xe — một trao đổi không cần cân nhắc.</p>`,
    },
    {
      h2: 'Chân chống bên hay càng giữa trên mặt dốc',
      html: `<p>Chân chống bên nhanh và là lựa chọn bình thường, nhưng trên dốc nó có hai điểm yếu: diện tích tiếp xúc nhỏ — dễ lún trên nhựa nóng, đất mềm, cát — và tam giác đứng hẹp. Càng giữa cho tam giác đứng rộng hơn và không tạo góc nghiêng cộng với mặt dốc, nên với những dốc nghiêng rõ, hoặc xe chở đồ nặng, càng giữa là lựa chọn ổn định hơn — đổi lại, dựng xe bằng càng giữa trên dốc đòi hỏi giữ xe thẳng bằng trong lúc kéo càng, một thao tác cần tập.</p>
<p>Mẹo chung cho cả hai loại chống: lót chân. Một tấm ván mỏng, miếng các-tông dày hoặc nắp chai lớn đặt dưới chân chống tăng diện tích tiếp xúc nhiều lần, chống lún trên nhựa nắng và đất mưa. Vài ba tấm lót để trong cốp không chiếm chỗ và cứu được những lần đỗ trên bãi xe hình thành giữa hè nhựa phơi nắng — mặt mà mùa hè đủ mềm để chân chống lún chậm trong một giờ, và xe đổ không tiếng động.</p>
<p>Và một chi tiết ít ai để ý: góc nghiêng của càng giữa theo thiết kế giả định mặt bằng phẳng. Trên dốc, xe dựng càng giữa có thể đứng thẳng hơn bình thường — mức dựa của càng gần như hết — khiến một cơn gió hoặc một cái chạm nhẹ đủ làm xe ngã về phía thấp. Vì vậy kể cả với càng giữa, việc quay đầu bánh vào lề và để bánh trước sát mép vẫn cần làm: lớp dựa cơ học không thay thế được lớp định hướng.</p>`,
    },
    {
      h2: 'Mặt đường mềm, trơn và những bẫy của lề dốc',
      html: `<p>Nhựa nóng là bẫy mùa hè: mặt nhựa phơi nắng giữa trưa đủ mềm để chân chống lún dần trong vài chục phút, và xe đổ về phía chống — thường là ra giữa đường. Nhận diện đơn giản: đặt bàn chân ấn mạnh vào mặt lề, nếu dấu giày còn hằn thì mặt đủ mềm để lún; khi ấy buộc phải lót. Đất đỏ sau mưa thì bẫy ngược: mặt ngoài trông khô nhưng dưới là lớp nhão, chân chống ăn xuống rồi mất độ đứng trong lúc chủ xe đang mua hàng.</p>
<p>Mặt trơn — rêu mỏng, vá dầu, lá ướt — làm giảm ma sát dưới chân chống nhưng nguy hiểm hơn là giảm ma sát dưới bánh: xe trôi không cần lực lớn, chỉ cần bánh bắt đầu lăn trên mặt trơn thì ma sát giữ rất yếu. Với lề kiểu này, nguyên tắc là không tin vào bất kỳ lớp ma sát nào: vào số, hướng bánh vào vật chắn thật — gờ lề, tường, cột — và nếu không có gì, chọn chỗ khác. Đi thêm hai mươi mét tìm được điểm đỗ tốt luôn rẻ hơn một lần xe lăn ra đường.</p>
<p>Cấu trúc lề cũng thay đổi theo dốc: nhiều đoạn lề nghiêng ngược với lòng đường — rãnh thoát nước khiến mặt lề dốc về phía tường. Trên những đoạn này, hướng nghiêng thực của mặt đặt xe không trùng với hướng dốc đường, và cách duy nhất đọc đúng là xuống xe nhìn ngang: đứng cạnh xe, nhắm mắt theo mặt đường, để thấy xe dựa theo hướng nào thật. Mười giây nhìn ngang này quyết định chống bên phía nào — và đó là quyết định cả đỗ đúng hay đỗ đổ.</p>`,
    },
    {
      h2: 'Kiểm tra trước khi rời xe và trước khi nổ máy',
      html: `<p>Quy trình kiểm tra khi rời xe gồm bốn bước nhỏ: thứ nhất, nhìn góc xe so với mặt đường — xe phải nghiêng nhẹ về phía chân chống, không bao giờ thẳng hoặc ngược; thứ hai, nghiêng nhẹ xe về phía trước sau thử độ ăn số; thứ ba, nhìn điểm đặt chân chống — không vũng dầu, không mặt vụn, không cạnh hố; thứ tư, nhìn quanh xe một vòng: mép đường cách bao xa, có xe nào đỗ gần dễ chạm không. Cả quy trình mất dưới mười giây nhưng bắt được gần toàn bộ nguyên nhân xe đổ trên dốc.</p>
<p>Trước khi nổ máy rời đi, thứ tự thao tác đảo lại: nắm chắc tay lái trước khi vào vị trí, bóp côn ra số về mo, rồi mới nổ máy. Lỗi phổ biến trên dốc là nổ máy trước, ra số sau — tay buông côn sớm và xe vọt theo phương dốc, và nhiều cú ngã khi rời điểm đỗ xảy ra đúng trong một giây đó. Với xe tay ga: giữ phanh sau chắc khi quay chìa, và đề xe hướng ra trước, để lúc nhả phanh xe đi theo hướng mình định.</p>
<p>Cuối cùng, một thói quen đáng hình thành: đỗ xong, bước đi vài bước rồi ngoái lại nhìn một lần. Nghe như một chi tiết thừa, nhưng đúng ra là lớp kiểm tra cuối cùng bắt được những thứ không thấy từ tư thế ngồi trên xe — xe xiên bất thường, bánh bắt đầu hơi nhúc nhích, chân chống lún. Trên mặt phẳng, một lần ngoái là thừa; trên dốc, đó là lần kiểm tra có tỷ lệ bắt lỗi cao nhất trong toàn bộ quy trình.</p>`,
    },
  ],
  checklist: [
    'Quay đầu bánh trước vào lề, khum men theo mép đường mười lăm đến hai mươi độ trước khi chống xe.',
    'Chống bên phía cao của mặt đường, mặt đặt phẳng; lót ván mỏng trên nhựa nóng hoặc đất mềm.',
    'Vào số một và buông côn từ từ cho số ăn hẳn — lớp chặn cơ khí không phụ thuộc ma sát mặt đường.',
    'Không đỗ ngang mặt dốc, không đỗ đầu xe hướng thẳng ra lòng đường theo phương dốc xuống.',
    'Xe tay ga: dùng khóa cổ chốt trụ lái hoặc khóa đĩa cản bánh — không có số làm lớp chặn.',
    'Rời xe: nhìn góc nghiêng, thử độ ăn số, xem điểm đặt chân, quét mép đường — dưới mười giây.',
  ],
  steps: [
    { title: 'Tiếp cận và định hướng xe', detail: 'Giảm tốc tới dừng hẳn sát lề theo góc nghiêng nhẹ, quay đầu bánh trước vào mép đường, xác định phía cao của mặt đường để chọn phía chống.' },
    { title: 'Chống xe và tạo lớp chặn', detail: 'Đặt chân chống phía cao, lót tấm nếu mặt mềm, vào số một và buông côn từ từ, hoặc với xe tay ga khóa trụ lái hoặc khóa đĩa bánh trước.' },
    { title: 'Kiểm tra trước khi rời', detail: 'Nhìn góc nghiêng xe so với mặt đường, nghiêng nhẹ thử độ ăn số, kiểm tra điểm đặt chân sạch và mép đường gần nhất.' },
    { title: 'Rời điểm đỗ an toàn', detail: 'Nắm chắc tay lái trước khi lên, bóp côn ra số về mo, giữ phanh sau chắc khi nổ máy, đề xe hướng đi định trước khi nhả phanh.' },
  ],
  warnings: [
    'Không rời xe khi chỉ khóa cổ trên dốc — khóa cổ cản quay trụ lái nhưng không cản bánh lăn theo phương dốc.',
    'Không chống xe lên mép hố, cạnh vũng dầu hoặc mặt vụn — chân chống trượt là xe đổ ngay trong lúc mình quay lưng.',
    'Không để côn căng sau khi vào số rồi rời tay — côn lò về nửa bướm là lớp chặn không tồn tại.',
  ],
  notes: [
    'Góc nghiêng an toàn của chân chống bên vào khoảng tám đến mười độ — mặt dốc ăn vào góc này, nên phía chống phải chọn theo phía cao của mặt đường.',
    'Mặt nhựa phơi nắng giữa trưa đủ mềm để chân chống lún — thử bằng bàn chân ấn mạnh, nếu hằn dấu giày thì phải lót.',
  ],
  references: [
    { title: 'Kỹ thuật qua đèo dốc an toàn', url: 'https://thuexemayhanoi.github.io/total/tips/meo-lai-xe/ky-thuat-di-deo-doc-an-toan/' },
    { title: 'Chở đồ nặng trên xe máy an toàn', url: 'https://thuexemayhanoi.github.io/total/tips/meo-lai-xe/cho-do-nang-tren-xe-may-an-toan/' },
  ],
  related: [
    'dung-do-xe-may-dung-quy-dinh',
    'ky-thuat-di-deo-doc-an-toan',
    'cho-do-nang-tren-xe-may-an-toan',
    'chong-trom-xe-may-meo-va-thiet-bi',
  ],
};
