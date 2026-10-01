// AI WIKI TOTAL — bài mở rộng cụm /guide/xu-ly-su-co/: ổ gà và vết san trên đường, nhận biết và xử lý (slot S00169)
'use strict';

module.exports = {
  slug: 'o-ga-va-vet-san-tren-duong-nhan-biet-va-xu-ly',
  title: 'Ổ gà và vết san trên đường: nhận biết và xử lý',
  seoTitle: 'Ổ gà và vết san trên đường: nhận biết, xử lý',
  metaDescription: 'Ổ gà, vết san và mép đường sập là bẫy quen thuộc của người đi xe máy. Bài viết chỉ cách nhận biết từ xa, né hay đè qua đúng kỹ thuật, và kiểm tra xe sau cú đâm.',
  summary: 'Ổ gà là sự cố đường nằm im chờ người vội: nó không nhường, không đổi chỗ, và gần như mọi người đi xe máy đều từng ăn một cú — khác biệt chỉ nằm ở chỗ người này đâm qua trong tư thế sẵn sàng và xe chỉ hụt bánh, người kia đâm qua lúc đang phanh gấp cho một chuyện khác và nằm ra giữa đường với cân xe gãy. Bài viết này gom lại kinh nghiệm xử lý các bẫy mặt đường thành một hệ: phần nhận biết — đọc ổ gà, vết san, rãnh cắt, mép nhựa sập từ xa qua màu sắc mặt đường, bóng nước, tư thế của các xe đi trước; phần phòng ngự — đặt xe ở đâu, giữ tốc độ nào, và vì sao nhìn xa ba giây trước mũi xe là miễn phí còn repair thì không; phần xử lý trong khoảnh khắc — kỹ thuật đè qua ổ gà đúng cách: nhả phanh ngay trước vệt, rót trọng tâm xuống chân, hông nhún theo, và tuyệt đối không bóp phanh hoặc ra ga giữa vệt; phần xử lý tình huống đã trót — không nhìn thấy, bánh trước đã rơi: làm gì trong hai phần mười giây để đổi cú ngã thành cú hụt; và phần sau cú đâm — kiểm tra xe theo thứ tự mối nguy trước mối hư: phanh, coccấu lái, vành, ống dầu; và khi nào phải đi sửa chứ không nên đi tiếp. Thông điệp xuyên suốt: với mặt đường, người lái cảnh giác hơn mặt đường tốt hơn — vì mặt đường xấu luôn xuất hiện sớm hơn bộ phận chịu tải muốn.',
  quickAnswer: 'Trả lời ngắn: ổ gà và vết san xử lý được bằng ba tầng. Tầng một là nhìn xa — quét mặt đường ba, bốn giây phía trước thay vì nhìn vào đuôi xe trước, vì nhìn xuống ba mét trước bánh thì mọi ổ gà đều hiện ra quá muộn để làm gì. Tầng hai là né đúng — đổi vệt bánh từ xa với tín hiệu cho xe sau, không đánh lái đột ngột sát vệt; không né được thì chuẩn bị đè qua: nhả phanh hết ngay trước ổ gà, giữ ga đều, gót ghì sát hông yên, để người nhún theo cú va thay vì cứng ngắc đón nó — bóp phanh giữa vệt ổ gà là công thức ngã kinh điển vì bánh trước đang vùi thì lực phanh kéo nó trượt luôn. Tầng ba là sau cú đâm — dừng kiểm tra ở chỗ an toàn: bóp phanh thử xem còn ăn, thò lắc tay lái nghe có đơ lỏng không, ngó vành cong, mốp mép vành, ống phanh dầu chảy; mà bánh mép gãy hay nghiêng cột trước thì đừng cố đi tiếp. Và với vệt san, rãnh cắt mép đường: đặt bánh song song qua nó chứ không chéo — bánh băng qua vệt theo phương dọc gần như mất tiếng va, băng chéo là tự quay xe trong hai phần mười giây.',
  keyPoints: [
    'Ổ gà phát hiện được từ xa: nhìn mặt đường ba, bốn giây phía trước mũi xe — nhìn xuống sát bánh thì mọi vệt đều hiện ra sau khi đã quá muộn.',
    'Né từ xa với tín hiệu cho xe sau; không đánh lái chèn vọt sát vệt — cú va với xe bên cạnh tệ hơn cú hụt của chính ổ gà.',
    'Không né được thì đè qua đúng kỹ thuật: nhả phanh hết trước vệt, giữ ga đều, trọng tâm thấp, người nhún theo cú va — không bóp phanh, không ra ga giữa vệt.',
    'Băng qua vệt san và rãnh cắt theo phương song song với vệt, không chéo — bánh chéo qua rãnh là tự lay động cả hệ lái trong tích tắc.',
    'Sau cú đâm, kiểm tra theo thứ tự mối nguy: phanh có ăn, tay lái có đơ, vành có cong, ống dầu có chảy — trước khi lo đến xước son.',
    'Đường ướt che ổ gà dưới bóng nước: mọi vệt loang trên mặt đường ướt phải coi là ổ gà cho tới khi bánh mình chứng minh ngược lại.',
  ],
  category: 'guide',
  hub: 'xu-ly-su-co',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['ổ gà', 'vết san', 'mặt đường', 'phanh', 'nhún giảm xóc', 'vành bánh xe'],
  keywords: ['ổ gà trên đường', 'vết san xe máy', 'đi xe qua ổ gà', 'mặt đường xấu xe máy', 'bánh xe đâm ổ gà', 'rãnh cắt mặt đường'],
  sections: [
    {
      h2: 'Nhận biết từ xa: đọc mặt đường như đọc biển báo',
      html: `<p>Ổ gà không đột ngột xuất hiện — nó trưởng thành. Mặt đường báo trước bằng những dấu nhỏ: vệt nứt chân chim lan trên lớp nhựa, miếng vá loang khác màu, chỗ trũng nhỏ đọng thành vũng nước hình thoi sau cơn mưa. Người đi đường nhiều học được cách quét những dấu này từ xa, nhưng phần lớn người ta chỉ nhìn xuống vùng ba mét trước bánh — tức nhìn đúng chỗ mà khi thấy thì đã không còn thời gian làm gì. Quy tắc quét: mắt thả xa ba, bốn giây quãng đường phía trước theo tốc độ đang đi, rồi thu về, rồi lại thả xa — vùng quét của mắt cần nhịp, đứng yên một chỗ là mù dần.</p>
<p>Nước là lớp ngụy trang nguy hiểm nhất của ổ gà. Mặt đường khô ráo thì trũng hiện rõ bằng bóng đổ và vệt va cũ; trời mưa thì mọi chỗ trũng thành mặt phẳng loang bóng — trũng hai xen-ti-mét và trũng hai mươi xen-ti-mét trông y hệt nhau. Vì vậy sau mưa, vùng nước loang không quen phải coi là ổ gà ngụy trang: giảm trước, băng qua theo vệt bánh của xe trước nếu có, hoặc chậm tới mức cú đâm không đủ lực làm hại gì.</p>
<p>Nguồn tin tình báo đáng tin nhất trên đường vẫn là hành vi của các xe đi trước: dòng xe phía trước xê dịch cùng một chỗ, xe máy nghiêng nhẹ cùng một tư thế, xe tải chở nặng né lệch — đó là bản đồ chướng ngại vật được vẽ bằng chính nhịp tránh của người ta. Đi sau một xe khác với khoảng cách đủ, quan sát tư thế né của nó, là cách phát hiện ổ gà rẻ nhất và chuẩn nhất — miễn là khoảng cách đủ để mình nhìn thấy tư thế đó trước khi tới chỗ nó.</p>`,
    },
    {
      h2: 'Phòng ngự: đặt xe đúng chỗ, giữ đúng tốc',
      html: `<p>Vị trí trên làn đường quyết định phần lớn nguy cơ: vệt bánh xe ô tô là vùng mặt đường chịu tải nặng, nứt và sập sớm nhất, nhưng cũng là vùng đã bị các xe trước đè qua vô số lần — tức tương đối bằng phẳng. Khoảng giữa hai vệt bánh ô tô, nơi người xe máy hay đi, lại là nơi nhựa đọng dày khi lát đường và dễ thành loang gợn, lượn sóng sau nắng. Không có vị trí hoàn hảo cho mọi đường; có điều là ý thức đổi vệt theo mặt đường: thấy nhựa loang gợn thì dịch về vệt bánh ô tô, thấy vệt đó nứt nặng thì nhích ra ngoài — và đổi vệt luôn kèm mắt sau, tay xin nếu cần, vì đổi vệt đột ngột không báo là tự đổi mình từ nạn nhân của mặt đường thành nguyên nhân cho xe sau.</p>
<p>Tốc độ là biến số còn lại, và nó không đối xứng: giảm mười ki-lô-mét giờ cắt bớt lực va nhiều hơn phần tốc độ tưởng tượng. Lý do là năng lượng tăng theo bình phương — cú đâm ổ gà ở bốn mươi không gấp đôi cú đâm ở hai mươi, nó gấp bốn. Trên đường quen mỗi ngày, não có xu hướng lái theo trí nhớ của đường chứ không theo đường thật hôm đó — ổ gà mới sinh sau đợt mưa tuần trước vẫn được não coi là đường phẳng cũ. Cách chống lại: gán điểm nghi ngờ cố định — đầu cầu, cuối dốc, miệng cống, đoạn vá — và chủ động rút ga về đúng những điểm đó, dù hôm nay trông nó phẳng.</p>
<p>Trọng tâm là lớp phòng ngự cuối. Đi xe máy với tư thế ngồi lưng thẳng, khuỷu buông thõng, mắt nhìn xuống — tư thế có vẻ thảnh thơi nhưng để cho mọi cú va mặt đường truyền thẳng lên cột sống. Ngồi với gót ghì hông yên, đầu gối kẹp má bình, người hơi rót về trước: cú va xuống đuôi xe và sau đó là cú hất lên được hai lớp phần thân hấp thụ trước khi tới lưng. Khác biệt nghe nhỏ; trên ổ gà sâu nó là khác biệt giữa ê ẩm và nằm đường.</p>`,
    },
    {
      h2: 'Kỹ thuật đè qua ổ gà: nhả phanh, giữ ga, nhún theo',
      html: `<p>Khi khoảng cách đã không cho phép né, kỹ thuật đè qua quyết định hậu quả. Chuỗi động tác đúng: thứ nhất, nhả phanh hoàn toàn ngay trước vệt — bánh xe đang vùi xuống đáy ổ thì bất kỳ lực phanh nào cũng kéo nó trượt thẳng thay vì lăn tiếp; nguyên tắc gọi là phanh trước vệt, lăn qua vệt, phanh sau vệt. Thứ hai, giữ ga đều, không cắt ga đột ngột — cú mất mô-men kéo làm đuôi xe dội lên đúng lúc cần nó bám đường. Thứ ba, nâng trọng tâm lên phần trên của tư thế, đứng nửa trên bàn đạp nếu xe số cho phép, gót ghì, để xe nhún dưới mình như hệ thống treo thứ hai — người căng cứng đón cú va thì mọi xung lực đi thẳng từ bánh lên cột sống.</p>
<p>Với vệt san — rãnh cắt mặt đường cho ống, mép nhựa lộ ra sau lớp mòn — nguyên tắc khác: phương băng. Vệt san là rãnh dài và hẹp; bánh băng qua theo góc gần vuông với vệt thì chỉ một điểm bánh tiếp xúc rãnh tại một thời điểm, cú va nhỏ. Băng chéo thì bánh đi trong rãnh một quãng, mép rãnh kê vào hông bánh và xô hệ lái — với rãnh sâu, cú xô đó đủ quay cả xe. Vì vậy gặp vệt san dài: chỉnh hướng cho bánh băng vuông qua, không băng chéo vì tiện đường; và tuyệt đối không để bánh sau rơi hẳn vào rãnh rồi mới cố nhảy ra.</p>
<p>Điều đáng ngạc nhiên là phần lớn các cú ngã tại ổ gà không do ổ gà sâu, mà do phản ứng sai trong khoảnh khắc phát hiện: thấy muộn, bóp phanh gấp, và bánh trước đang giảm tốc nhanh hơn bánh sau thì trượt ngã trước cả khi chạm ổ. Đào tạo phản xạ đúng không làm bằng việc gặp ổ thật, mà bằng cách gán nhịp: mọi lần thấy vệt khó chịu trên đường — kể cả vệt nhỏ — tập phản ứng nhả phanh, giữ hướng, nhìn thẳng. Cơ thể học nhịp đó trong hàng trăm lần lặp với vệt nhỏ, để đến hôm gặp vệt lớn, hai tay làm đúng trình tự không cần nghĩ.</p>`,
    },
    {
      h2: 'Trót không né được: hai phần mười giây quyết định',
      html: `<p>Tình huống xấu nhất: bánh trước đã rơi xuống ổ trước khi mắt kịp đăng ký. Trong hai phần mười giây đó, mọi thứ sai làm hại nhân đôi. Bóp phanh thêm — bánh trước đang vùi dưới đáy ổ, lực phanh làm nó loe và trượt, xe quăng ngang. Đánh lái tách vệt — bánh đang gài trong mép ổ, đánh lái là xỏ vành vào mép và xe đổ ngay tại chỗ. Cắt ga đứng — đuôi xe dội lên, đẩy trọng lượng về trước đúng lúc bánh trước cần nhẹ. Việc đúng là gần như không làm gì cả: giữ ga nguyên, giữ hướng thẳng, người lỏng, để bánh rút khỏi vệt và lăn tiếp — xe máy được thiết kế để tự thoát khỏi cú va mà người không can.</p>
<p>Nếu ổ quá sâu và tốc độ quá cao, xe hất mạnh — lúc đó phản ứng cứu được là ghì gót và kéo người về phía yên, không chống tay duỗi thẳng ra phía trước. Chống tay cứng là khóa cột sống thành thanh dẫn lực thẳng: cú hất đẩy vai, đẩy khuỷu, đẩy cổ tay, và tổn thương nằm ở khớp yếu nhất trong chuỗi. Người ngã có kinh nghiệm rút người về gần khung xe, co, và trượt — đổi gãy thành trầy.</p>
<p>Sau khi thoát cú hất, việc tiếp theo là tìm chỗ dừng ngay chứ không phải liều đi tiếp xem sao: cú va đủ mạnh để hất người thì đủ mạnh để làm một việc vô hình — tuột vành, gãy nan hoa, tuột ống dẫn dầu phanh trước. Xe sau cú đâm nhìn vẫn nguyên vẹn có thể đã hỏng đúng phần giữ an toàn. Dừng lại, đứng nhìn xe hai mươi giây, đáng giá hơn mọi cây số tiếp theo.</p>`,
    },
    {
      h2: 'Kiểm tra xe sau cú đâm: mối nguy trước mối hư',
      html: `<p>Thứ tự kiểm tra sau cú va mạnh vào ổ gà, rãnh, mép sập: một, phanh — đứng dừng, bóp nhẹ phanh trước rồi phanh sau, cảm ngưỡng độ ăn có đều, ngó xuống chỗ ống dầu phanh có chảy không; cú va đủ mạnh gãy ống phanh trước hoặc tuột kẹp phanh, mà phanh hỏng là mục duy nhất trong danh sách không cho phép đi tiếp chậm rãi. Hai, hệ lái — thò nhẹ cổ, lắc bánh trước, nghe ngóng tiếng đơ của cổ phuộc, cảm xem tay lái có vặn lệch so với trước; cột trước cong nhẹ nhiều khi chỉ hiện ra qua cảm giác xe tự rót về một phía khi buông tay ở đoạn bằng phẳng. Ba, bánh vành — xoay nhìn vành rìa cong, mép lốp tuột khỏi vành, nan hoa nứt; vành cong nhẹ có thể về được chậm, vành sứt là không. Bốn, động cơ và khung — ngó gầm sau cú va: chảy dầu ở chỗ lọc dầu hoặc nắp máy nghĩa là có thứ gì đó đã nứt, và dầu rỉ trên đường là rủi ro cháy dưới nóng máy.</p>
<p>Khi nào đi tiếp được và khi nào phải gọi cứu hộ: đi tiếp nếu phanh ăn, lái thẳng, vành không sứt, không dầu chảy — và chỉ đi chậm về chỗ sửa gần nhất, không lấy lại tốc độ thường. Không đi tiếp nếu một trong bốn mục trên hụt: phanh mềm, xe rót lệch, vành méo rõ, hoặc dầu nhỏ giọt. Với bánh mép và nan hoa, cố lết thêm chỉ đổi sửa vành thành sửa vành cộng cộc. Kéo xe vài cây số về tiệm rẻ hơn rất nhiều so với thay cả bộ phuộc vì một cú va tiếp theo nó hứng trong lúc lết.</p>
<p>Cuối cùng là ghi lại vị trí: ổ gà khiến mình hụt hôm nay sẽ tiếp tục ăn bánh của hàng trăm người đi sau. Báo cho chính quyền địa phương qua đầu mối tiếp nhận thông tin phản ánh giao thông của địa phương — nhiều thành phố hiện nhận phản ánh qua ứng dụng hoặc trang thông tin điện tử — với vị trí mô tả gắn với mốc quen: số cây, đầu cầu, trước cổng gì. Cú hụt của mình thành dữ liệu cho người sửa đường; đó là cách một người đi đường biến cái ổ đã ăn xe mình thành chỗ phẳng cho cả dòng xe sau.</p>`,
    },
    {
      h2: 'Văn hóa đi trên đường xấu: chậm không phải là thua',
      html: `<p>Mặt đường xấu ở nước ta không phải hiện tượng hiếm gặp cần chuyên đề riêng — nó là môi trường mặc định của phần lớn tuyến đường người đi xe máy dùng mỗi ngày: hẻm mới khoét ống xong chưa lái lại, quốc lộ vá chằng chịt sau mùa mưa, khu xây dựng băm nát mặt nhựa. Vì vậy cách ứng xử với đường xấu không phải kỹ năng dự phòng, nó là kỹ năng nền, và người càng đi nhiều càng có xu hướng... đi chậm hơn, không phải nhanh hơn. Kinh nghiệm dạy một điều ngược với hình ảnh ngoài đời: tay lái lâu năm trên đường xấu là người duy nhất trong dòng xe vẫn giữ được ba mươi ki-lô-mét giờ nơi những người khác đánh nhau với mặt đường bằng năm mươi.</p>
<p>Cuối cùng, hãy để một nguyên tắc nhỏ bọc túi áo trước mặt: mốc độ xấu của mặt đường nên được đo bằng mắt và bánh xe của chính mình ngay hôm nay, không phải bằng trí nhớ của tuần trước, cũng không phải bằng khung tốc độ của người khác trên cùng tuyến. Mặt đường không gửi thông báo trước khi nó sập thêm một miếng; người lái cảnh giác bù lại bằng cách luôn trả trước một phần tư tốc độ cho mọi đoạn không nhìn rõ. Mặt nối giữa kỹ thuật né ổ gà và mọi kỹ thuật khác trong bài, suy cho cùng, chỉ là một câu: đường xấu không đánh người nào đang chậm và nhìn xa — nó chuyên ăn những người đang vội và nhìn ngắn.</p>`,
    },
  ],
  checklist: [
    'Trước khi đi: gán nhịp quét mặt đường ba, bốn giây trước mũi xe, đặc biệt sau mưa và trên đường mới vá.',
    'Gặp ổ gà không né được: nhả phanh hết trước vệt, giữ ga đều, trọng tâm thấp, người nhún theo cú va — không bóp phanh, không đánh lái giữa vệt.',
    'Băng qua vệt san, rãnh cắt theo phương vuông góc với vệt, không băng chéo vì tiện đường.',
    'Sau cú đâm mạnh: dừng kiểm tra phanh, tay lái, vành, dầu gầm theo đúng thứ tự mối nguy — hụt một mục là không đi tiếp.',
    'Ổ gà đã ăn xe mình: ghi vị trí và phản ánh qua đầu mối tiếp nhận của địa phương để dòng xe sau không ăn tiếp.',
  ],
  steps: [
    { title: 'Quét và nhận biết từ xa', detail: 'Nhìn xa ba, bốn giây theo nhịp thả xa thu về; đọc dấu nứt chân chim, miếng vá, vùng nước loang và tư thế né của các xe phía trước.' },
    { title: 'Đặt xe và tốc độ phòng', detail: 'Đổi vệt bánh theo mặt đường với tín hiệu cho xe sau; rút ga tại điểm nghi ngờ cố định — đầu cầu, miệng cống, đoạn vá, sau mưa.' },
    { title: 'Đè qua đúng kỹ thuật', detail: 'Nhả phanh trước vệt, lăn qua vệt, phanh sau vệt; giữ ga đều, gót ghì hông yên; vệt san băng vuông góc, không chéo.' },
    { title: 'Kiểm tra sau cú va', detail: 'Phanh ăn, lái thẳng, vành không sứt, không dầu chảy thì đi chậm về chỗ sửa; hụt mục nào trong bốn mục thì dừng và gọi hỗ trợ.' },
  ],
  warnings: [
    'Không bóp phanh khi bánh trước đang vùi trong ổ gà — lực phanh kéo bánh trượt và xe đổ ngay tại vệt, đây là nguyên nhân ngã phổ biến nhất tại ổ gà.',
    'Không coi vùng nước loang trên đường ướt là mặt phẳng — trũng nông và trũng sâu trông giống hệt nhau, băng qua chậm hoặc theo vệt xe trước.',
    'Không cố lết xe sau khi phanh mềm, tay lái lệch, vành sứt hoặc dầu gầm chảy — cú va tiếp theo trên bộ phận đã hỏng biến sửa lặt vặt thành sửa lớn.',
  ],
  notes: [
    'Bài viết về lốp xe máy bị dăm giữa đường xử lý tình huống lốp thủng sau cú va; bài này dừng ở trước đó — nhận biết và đè qua vệt mặt đường đúng cách, cộng phần kiểm tra xe sau cú đâm.',
    'Độ sâu ổ gà, chất lượng miếng vá và mức trũng thay đổi theo từng tuyến; mọi khung tốc độ trong bài là tham chiếu cho mặt nhựa thông thường — tự điều chỉnh theo mặt đường thật của từng đoạn.',
  ],
  references: [
    { title: 'Lốp xe máy bị dăm giữa đường', url: 'https://thuexemayhanoi.github.io/total/tips/meo-xu-ly-su-co/lop-xe-may-bi-dame-giua-duong/' },
    { title: 'Giảm xóc xe máy: chăm sóc và dấu hiệu yếu', url: 'https://thuexemayhanoi.github.io/total/learn/cham-soc-xe/giam-xoc-xe-may-cham-soc-va-dau-hieu-yeu/' },
  ],
  related: [
    'lop-xe-may-bi-dame-giua-duong',
    'giam-xoc-xe-may-cham-soc-va-dau-hieu-yeu',
    'ky-thuat-phanh-khan-cap-xe-may',
    'dong-vat-chay-ra-duong-xu-ly',
  ],
};
