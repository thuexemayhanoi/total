// AI WIKI TOTAL — bài mở rộng cụm /tips/meo-lai-xe/: đi xe máy qua khu vực xây dựng (slot S00151)
'use strict';

module.exports = {
  slug: 'di-xe-may-qua-khu-vuc-xay-dung-luu-y',
  title: 'Đi xe máy qua khu vực xây dựng: lưu ý an toàn',
  seoTitle: 'Đi xe máy qua khu vực xây dựng an toàn',
  metaDescription: 'Khu vực xây dựng có gờ chữ A, đá dăm, xe tải ra vào và mặt đường thay đổi liên tục. Bài viết chỉ cách đọc công trường, giữ khoảng cách và chọn làn an toàn.',
  summary: 'Một công trường mở ra giữa đường đổi hoàn toàn môi trường lái chỉ trong vài chục mét: mặt nhựa phẳng thay bằng đá dăm lởm chởm, vạch kẻ đường biến mất dưới lớp bụi, gờ chữ A mọc lên không báo trước, và ở mọi lối ra vào lại có những chiếc xe tải chở đầy đang lùi ra giữa đường với tài xế không thể thấy chiếc xe máy nhỏ bên hông. Điều làm đoạn đường này đặc biệt không phải một nguy hiểm riêng lẻ mà là số lượng nguy hiểm chồng lớp trong không gian hẹp: người điều khiển công trường không có nhiệm vụ với xe lưu thông, biển báo có khi gãy nghiêng hoặc chưa cập nhật theo tiến độ, và đoạn đường "điều chỉnh giao thông tạm thời" thì tồn tại hàng tháng trời. Bài viết này đi theo ba tầng: đọc công trường từ xa — nhận biết loại công việc đang làm (đào đường, rót bê tông, xây nhà sát mép) để biết loại rủi ro mình sắp gặp; kỹ thuật đi qua — giữ khoảng cách với xe tải ra vào, né đá dăm và vũng nước trộn bùn, đi theo vết bánh xe đã nén chặt thay vì mặt rời rạc, và xử lý gờ chữ A đúng cách; cùng phần thường bị bỏ qua — các tình huống cụ thể như lối ra của xe ben không có người chỉ dẫn, đoạn bê tông mới rót còn chăn che, và hố đào có rào chắn lệch vào làn xe. Mục tiêu không phải đi chậm mặc định qua mọi công trường, mà là biết nhìn công trường kiểu người lái: thấy gì sắp thay đổi trước khi tới chỗ nó thay đổi.',
  quickAnswer: 'Trả lời ngắn: qua khu vực xây dựng theo ba nguyên tắc. Một — giảm tốc sớm từ lúc nhìn thấy biển, không đợi tới sát gờ chữ A mới phanh: đá dăm trơn và phanh trên đá dăm không bám như phanh trên nhựa. Hai — giữ khoảng cách với mọi xe tải và xe ben ra vào công trường: chiếc xe lùi ra không thấy xe máy bên hông, và bùn nước văng từ bánh xe tải phủ kín tầm nhìn của người đi sau. Ba — đi theo vết bánh xe đã nén chặt trên mặt đá dăm, né vũng nước màu sữa (nước trộn bùn xi măng, trơn hơn nước thường) và né mép đường mới đào. Gờ chữ A: lấy góc xiên nhẹ với tốc độ gần dừng nếu gờ cao, đạp sớm hai phanh; nếu có làn chờ có người chỉ dẫn thì tuân theo, và quan trọng hơn — coi mọi lối ra vào công trường là nơi xe lớn có quyền tuyệt đối, vì tài xế xe ben đang nhìn công trường chứ không nhìn đường. Sau khi ra khỏi đoạn: kiểm tra nhanh lốp có dăm cua và thân xe có bùn mới phủ ở lốp trước khi chạy tốc độ bình thường trở lại.',
  keyPoints: [
    'Giảm tốc từ lúc thấy biển công trường — phanh trên mặt đá dăm không bám như trên nhựa, và đa số trượt ngã trong công trường xảy ra ở cú phanh sát gờ.',
    'Đi theo vết bánh xe đã nén chặt trên mặt đá dăm, né vũng nước màu sữa của nước trộn bùn và mép đường mới đào.',
    'Mọi lối ra vào công trường là quyền tuyệt đối của xe ben: chiếc xe lùi ra không thấy xe máy bên hông, chờ cho tới khi nó xong thao tác.',
    'Gờ chữ A lấy góc xiên nhẹ với tốc độ gần dừng nếu cao — đây là chỗ hay bị rơi đồ và trượt bánh nhất của cả đoạn.',
    'Biển báo công trường có thể lệch, gãy hoặc chưa cập nhật theo tiến độ — tin mắt mình quan sát hơn tin biển trong đoạn đang thay đổi.',
    'Ra khỏi công trường: kiểm tra lốp dăm cua và người ngồi sau có bùn phủ, rồi mới tăng tốc bình thường trở lại.',
  ],
  category: 'tips',
  hub: 'meo-lai-xe',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['khu vực xây dựng', 'gờ chữ A', 'đá dăm', 'xe ben', 'biển báo tạm', 'vết bánh xe'],
  keywords: ['đi xe máy qua khu vực xây dựng', 'đường qua công trường', 'gờ chữ A xe máy', 'đá dăm trơn', 'xe ben ra vào công trường', 'đường đang sửa an toàn'],
  sections: [
    {
      h2: 'Đọc công trường từ xa: biết loại rủi ro trước khi tới',
      html: `<p>Loại công việc đang làm báo trước loại nguy hiểm. Đào thay đường ống: hố sâu hai bên có rào chắn có thể thò ra làn xe, mặt đường lát lại bằng tấm sắt tạm trơn trượt khi ướt. Rót bê tông: chăn che phủ đoạn chưa khô, xe xi téc ra vào liên tục, và đoạn đường sau xe xi téc luôn có loang nước trộn. Xây nhà sát mép: giàn giáo thò ra, vật liệu chất lên vỉa hè làm người đi bộ dồn xuống làn xe, và xe chở cát xô ra vào ngõ mù. Đọc đúng loại công việc là biết trước mình nên né thứ gì trong vài chục mét tới.</p>
<p>Cấu trúc giao thông tạm của công trường cũng cần đọc: làn điều chỉnh dồn về bên nào, có người cầm cờ chỉ dẫn hay không, đèn vàng nhấp nháy đặt ở đâu, và đoạn một chiều tạm hoạt động theo nhịp nào. Quan sát từ xa vài giây trước khi vào — xe đối diện đi thế nào, xe máy phía trước tránh chỗ nào — là tin tức giá trị nhất, vì nó thay cho biển báo đã lệch hoặc chưa cập nhật. Thói quen tốt: coi biển trong công trường là gợi ý, còn dòng xe thực tế là chỉ dẫn.</p>
<p>Thời gian trong ngày cũng là thông tin: giờ cao điểm công trường đông xe lưu thông nhưng xe ben ít chạy; giữa trưa ngược lại — xe ben và xe tải chạy nhiều hơn, công nhân về bữa nên rào chắn có người coi ít hơn. Đi qua công trường cùng lúc xe ben đang dốc cát là kịch bản nhiều rủi ro chồng nhau: bụi mù, sỏi văng, và mép đường chất ụ sạt ra làn. Nếu không vội, chờ hai phút cho xe ben xong thao tác luôn rẻ hơn mình tưởng.</p>`,
    },
    {
      h2: 'Kỹ thuật đi trên đá dăm và mặt đường lởm chởm',
      html: `<p>Đá dăm — sỏi nhỏ rải trên nền đường đang sửa — là mặt đường giảm bám rõ rệt, nhất là khi chỉ mới rải còn rời rạc. Kỹ thuật: đi theo vết bánh xe đã nén chặt — hai rãnh bánh xe đi trước tạo hai dải phẳng chắc hơn mặt hai bên; giảm ga nhẹ, giữ đều tay lái, không phanh gấp và không đánh lái sốc, vì mọi thao tác sốc trên mặt rời rạc đều khiến bánh trượt. Tốc độ trên đá dăm hợp lý nằm dưới một nửa tốc độ thường, và khoảng cách với xe trước nhân đôi, vì xe trước tung dăm ra phía sau mình.</p>
<p>Vệt bùn và vũng nước cần phân biệt: vũng nước mưa bình thường nguy hiểm vừa, còn vũng màu sữa xám — nước trộn bùn xi măng hoặc nước rút từ hố đào — trơn gần như dầu, và mép vũng hay có lớp bùn mỏng phủ ra xa hơn nhìn thấy. Cách xử: giảm tốc trước, đi qua theo hướng thẳng, tuyệt đối không nghiêng xe hay quay cua giữa vũng. Nếu không nhìn thấy đáy: coi đó là ổ gà, dừng xem mặt đường bằng chân nếu cần — bộ phận dưới gầm xe có thể sửa được, cú ngã giữa vũng bùn thì không.</p>
<p>Gờ chữ A — thanh thép hoặc gờ bê tông tạm ngang đường để ép xe giảm tốc — là điểm ăn tiền nhiều nhất của đoạn công trường: bánh đụng trực diện tốc độ cao làm đồ trên xe bắn lên, người ngồi sau va cằm vào vai người lái, và bánh sau nảy lướt một nhịp mất bám. Kỹ thuật lấy gờ: phanh sớm về gần dừng, lấy góc xiên nhẹ, hai phanh đạp sớm nhẹ; nếu gờ cao bất thường có thể nhấc mông khỏi yên giảm sốc cho người ngồi sau. Nhìn thêm vết xe trước: chỗ vết bánh ai cũng nghiêng ngang qua gờ là chỗ gờ cao nhất — vị trí "cổng" lún xuống là chỗ qua được dễ nhất.</p>`,
    },
    {
      h2: 'Xe ben, xe tải và lối ra vào công trường: quyền tuyệt đối của xe lớn',
      html: `<p>Nguyên tắc số một khi có xe ben, xe tải ra vào công trường: chờ. Chiếc xe tải lùi vào vị trí dốc vật liệu không thể thấy xe máy nhỏ bên hông — gương xe tải che lớn hơn thấy, tài xế đang nhìn người chỉ huy công trường, và tiếng máy xe tải át hoàn toàn tiếng xe máy. Người lái xe máy kinh nghiệm trong khu này không đi vòng qua một chiếc xe đang lùi kể cả khi "thấy còn chỗ" — họ dừng hẳn, để xe xong thao tác, rồi mới đi.</p>
<p>Lối ra vào công trường là chỗ bụi và tầm nhìn cùng chết một lúc: xe vừa ra khỏi công trường kéo theo đám bụi che khoảng nhìn hai chiều, cộng vệt bùn loang ra lòng đường làm mặt trơn cục bộ. Cách đi qua lối ra: giảm tốc như qua ngã tư không đèn, nhìn qua bụi bằng cách quan sát bóng và đèn của xe sắp ra, và không vượt một chiếc xe khác ngay tại lối ra — thao tác vượt khiến mình ở đúng chỗ mù vào đúng thời điểm xe ben thò ra.</p>
<p>Với xe xi téc và xe bồn: những chiếc này nặng, đi chậm và cần đoạn dài để tăng tốc sau lối ra, nên theo sau chúng ở khoảng cách xa hơn thường lệ — màn bùn nước và bụi của chúng phủ kính mũ, và nếu quyết định vượt thì vượt dứt khoát ở đoạn thẳng nhìn thoáng, không nửa vế bên hông một chiếc xe dài. Mẹo thực tế: kính mũ bám bụi công trường thì ghé lên một chút hoặc lau bằng giẻ túi áo ngay khi có chỗ dừng — nhìn xuyên qua lớp bụi mờ suốt một đoạn là tự hạ thị lực của mình giữa đoạn cần thị lực nhất.</p>`,
    },
    {
      h2: 'Vạch tạm, rào chắn và hố đào: các bẫy cụ thể hay gặp',
      html: `<p>Vạch điều chỉnh giao thông tạm thường vẽ bằng sơn hoặc dựng bằng cọc dây màu, và giá trị thật của nó thay đổi theo tiến độ: đoạn đã rải xong đá dăm có vạch còn đúng, đoạn mới đào hôm qua có thể rào chắn đã dịch ra chiếm thêm nửa làn. Thói quen cần có: nhìn rào chắn và cọc thật chứ không nhìn vạch cũ dưới lớp bụi, và khi một đoạn nhìn chật chội thì không cố chen — chờ xe đối diện đi qua trước ở chỗ rộng, vì trong công trường, xe máy nhường trước luôn rẻ hơn xe hơi nhường.</p>
<p>Tấm sắt tạm lấp hố và tấm ván đà là hai vật hay gặp trên đường thay ống: tấm sắt mòn bóng trơn như băng khi có mưa hoặc nước rỉ, tấm ván đà cong vênh tạo bậc cao bất ngờ cho bánh nhỏ. Kỹ thuật qua các tấm này giống qua gờ: thẳng bánh, ga nhẹ, không phanh trên tấm. Điều cần tránh là đi sát mép tấm — mép sắt bậc lên với bánh xe là cú bật bất ngờ, và mép tấm sau mưa luôn có loang bùn hai bên.</p>
<p>Hố đào có rào chắn nhưng có người hay quên phần rào chắn bị xe trước đâm lệch: nhìn hàng rào thẳng không thẳng, cọc có nghiêng không, và phản quang có còn dán không. Ban đêm, các công trường thiếu đèn là chỗ phản quang hỏng không phát sáng — mọi dụng cụ nhìn đường của mình chỉ còn đèn xe, nên giảm thêm tốc so với ban ngày cùng một đoạn. Câu chốt của toàn phần bẫy cụ thể: công trường là môi trường duy nhất trên đường mà hạ tầng xung quanh có thể đổi hình dạng hàng ngày — người lái cập nhật thông tin bằng mắt mỗi lần đi qua, không bằng trí nhớ của lần trước.</p>`,
    },
    {
      h2: 'Sau đoạn công trường: kiểm tra và về lại nhịp lái thường',
      html: `<p>Ra khỏi khu vực xây dựng không có nghĩa mọi thứ đã bình thường: đá dăm nhỏ có thể dăm cua vào rãnh lốp, thân xe và yên phủ lớp bụi xi măng mài mòn khi lau sai cách, và người ngồi sau thường mang theo bùn trên quần áo — thứ sẽ dính lên yên và hông xe mỗi lần phanh. Chỗ dừng đầu tiên sau công trường đáng vài phút: nhổ dăm cua, phủi bụi bằng cách thổi hoặc gõ nhẹ chứ không chà khô (bụi xi măng chà khô chính là giấy nhám), và lau kính mũ bằng nước chứ không giẻ khô.</p>
<p>Phanh cũng cần một lần kiểm tra sau công trường: bụi và bùn bám lên vành bánh và bố phanh làm tiếng rít nhẹ hoặc lệch cảm giác bóp. Một cú phanh thử ở đoạn vắng sau khi ra khỏi khu vực — giảm nhẹ nhưng không dừng hẳn — cho biết bố còn sạch và bám đều không, trước khi mình cần tới một cú phanh thật sự ở tốc độ đường lớn. Thói quen một phút này sát sao với tuổi thọ chi tiết phanh nhiều hơn người lái nghĩ.</p>
<p>Cuối cùng là về lại nhịp: sau một đoạn đi chậm né chướng ngại, tay người lái quen với thao tác nhỏ dè dặt, và trở lại đường lớn cần chủ động "reset" — tăng tốc dứt khoát về đúng tốc độ dòng, mở khoảng cách chuẩn, và quét xa trở lại. Người đi qua công trường mà giữ mãi nhịp chậm dè trên đường lớn cũng là một dạng rủi ro, vì dòng xe sau không ngờ mình vẫn đi chậm không lý do. Mỗi môi trường đường có nhịp của nó, và kỹ năng là biết đổi nhịp đúng lúc.</p>`,
    },
    {
      h2: 'Khi xe gặp sự cố ngay giữa đoạn công trường',
      html: `<p>Xe hết xăng, dăm cua số ruột hay tuột dây côn ngay giữa đoạn đang sửa là tình huống khó hơn hẳn trên đường bình thường: lán ra chỗ dừng không có vỉa hè, vệt dừng của mình có thể nằm trên đá dăm trơn, và dòng xe sau đang đi trong bụi mù khó thấy mình sớm. Nguyên tắc đầu tiên: bật đèn hazard nhấp nháy hoặc vẫy tay thật sớm ngay khi cảm thấy xe có vấn đề — người lái phía sau trong công trường quen nhìn xa để né chướng ngại, một xe dừng đột ngột không tín hiệu là cú bất ngờ lớn nhất của đoạn đường này.</p>
<p>Chọn chỗ dừng trong công trường theo thứ tự ưu tiên: chỗ rộng có rào chắn bảo vệ phía sau trước, bớt có tấm sắt và đá dăm thứ hai, và chỉ khi không còn lựa chọn mới dừng sát mép hố đào — rồi rời khỏi xe sang phía rào chắn ngay, đứng sau rào chứ không đứng giữa xe và dòng xe chạy. Đẩy bộ xe tới chỗ an toàn gần nhất luôn thắng cố nổ máy từng bước một giữa dòng xe; và nếu có người công trường đang chỉ giao thông, xin họ chặn nhịp cho mình sơ tán — người cầm cờ có quyền dừng dòng xe mà mình không có.</p>
<p>Sau khi an toàn, xử lý như mọi sự cố đường: đặt nhánh cây hoặc vật sáng làm tín hiệu phía sau nếu dừng gần khúc che tầm nhìn, gọi hỗ trợ hoặc sửa nhanh những thứ sửa được (thay ruột, siết lại dây) tại chỗ đủ rộng. Điều đáng nhấn: đừng để sĩ diện lấn lý trí — cố bò nốt hai trăm mét tới điểm rộng rãi bằng một xe đang chết máy giữa làn bụi là canh bạc tồi, vì hai trăm mét đó mình là chướng ngại mù của đoạn đường mù.</p>`,
    },
  ],
  checklist: [
    'Giảm tốc từ lúc thấy biển công trường, đặt lại khoảng cách xe trước nhân đôi trên mặt đá dăm.',
    'Đi theo vết bánh xe nén chặt, né vũng nước màu sữa và mép đường mới đào.',
    'Chiếc xe ben nào đang lùi hoặc dốc vật liệu thì dừng chờ xong thao tác — không chen bên hông.',
    'Lối ra vào công trường qua như ngã tư không đèn: giảm tốc, nhìn qua bụi bằng bóng và đèn, không vượt ai ngay tại lối.',
    'Gờ chữ A: phanh sớm gần dừng, lấy góc xiên nhẹ, hai phanh đạp nhẹ sớm, nhấc mông giảm sốc cho người sau nếu gờ cao.',
    'Sau khi ra khỏi: nhổ dăm cua lốp, lau kính mũ bằng nước, phanh thử một cú ở đoạn vắng rồi mới về tốc độ dòng.',
  ],
  steps: [
    { title: 'Đọc công trường từ xa', detail: 'Nhận biết loại công việc, hướng dồn làn, vị trí người chỉ dẫn và hoạt động xe ben; nếu xe ben đang dốc vật liệu ngay lối ra thì chờ vài phút cho xong thao tác.' },
    { title: 'Vào đoạn với nhịp đá dăm', detail: 'Giảm tốc về dưới một nửa thường lệ, bám vết bánh xe nén chặt, ga nhẹ tay lái đều, tăng gấp khoảng cách với xe trước để tránh dăm văng.' },
    { title: 'Xử lý gờ và tạm', detail: 'Phanh sớm trước gờ chữ A, lấy góc xiên gần dừng, hai phanh nhẹ sớm; qua tấm sắt tạm và ván đà thẳng bánh, không phanh trên tấm.' },
    { title: 'Ra khỏi và kiểm tra', detail: 'Dừng chỗ thoáng nhổ dăm cua, phủi bụi bằng gõ nhẹ không chà khô, lau kính mũ bằng nước, phanh thử một cú ở đoạn vắng rồi mới về tốc độ dòng.' },
  ],
  warnings: [
    'Không bao giờ chen bên hông một chiếc xe tải đang lùi vào công trường — tài xế không thể thấy xe máy ở vị trí đó.',
    'Vũng nước màu sữa trong công trường trơn gần như dầu — qua thẳng bánh với tốc độ thấp, không nghiêng xe giữa vũng.',
    'Biển báo trong công trường có thể lệch hoặc chưa cập nhật tiến độ — tin quan sát thực tế của dòng xe hơn trí nhớ lần trước.',
  ],
  notes: [
    'Giờ giữa trưa thường xe ben chạy nhiều hơn và công trường vắng người coi — cân nhắc đi qua vào giờ khác nếu không vội.',
    'Bụi xi măng trên yên và kính lau khô chính là giấy nhám — lau bằng nước hoặc thổi, không chà khô tay.',
  ],
  references: [
    { title: 'Vùng mù của xe tải khi đi xe máy', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/vung-mu-cua-xe-tai-khi-di-xe-may/' },
    { title: 'Đi xe máy qua đường trơn dầu và trơn cục bộ', url: 'https://thuexemayhanoi.github.io/total/tips/meo-lai-xe/di-xe-may-duong-tron-dau-nhot/' },
  ],
  related: [
    'vung-mu-cua-xe-tai-khi-di-xe-may',
    'di-xe-may-duong-tron-dau-nhot',
    'ky-thuat-di-xe-may-ban-dem',
    'di-xe-may-khi-moi-nhan-biet-va-phong-tranh',
  ],
};
