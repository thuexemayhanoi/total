// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: đi xe máy khi trời sương: tầm nhìn và tốc độ (slot S00098)
'use strict';

module.exports = {
  slug: 'di-xe-may-khi-troi-suong-tam-nhin-va-toc-do',
  title: 'Đi xe máy khi trời sương: tầm nhìn và tốc độ',
  seoTitle: 'Đi xe máy khi trời sương: tầm nhìn và tốc độ',
  metaDescription: 'Sương sớm làm giảm tầm nhìn của người lái và độ bị nhìn thấy của xe: nguyên tắc chọn tốc độ, tầm phanh, đèn và khoảng cách khi đi xe máy trong sương.',
  summary: 'Trời sương là một trong những điều kiện khó hơn cả mưa lớn: không có tiếng rào rào báo động, không có gió nổi — chỉ có một bức màn trắng lặng lẽ ăn dần tầm nhìn, và nhiều người đi xe chỉ điều chỉnh cảm giác chứ không điều chỉnh tốc độ. Sự thật cần khắc ghi: tốc độ hợp lý không quyết định bởi tay ga, mà bởi quãng đường mình nhìn thấy — nếu tầm nhìn chỉ còn ba mươi mét thì tốc độ phải là tốc độ kịp dừng trong ba mươi mét, và đó là phép toán, không phải cảm giác. Bài viết này đi qua bốn lớp điều chỉnh. Tầm nhìn: ước khoảng cách nhìn thấy được bằng cách nhắm cột cây hoặc vạch sơn phía trước và đếm nhịp — sương dày thì tầm đo ngắn, và chạy theo tầm đo. Tốc độ và khoảng cách: nguyên tắc dừng trong tầm nhìn, khoảng cách với xe trước nhân đôi vì xe trước cũng đang mù. Đèn: bật đèn sớm bất kể trời sáng tới đâu, vì sương nuốt phần lớn ánh sáng — nhưng không dùng đèn pha chiếu cao trong sương dày, ánh sáng hắt ngược vào màn sương làm chính mình mù thêm. Chiến thuật đường: chậm ở chỗ giao cắt và ngã tư — sương che cả tai và mắt các bên; tránh vượt trong màn sương vì khoảng quan sát không đủ; và cẩn trọng cầu phao, bờ sông, đoạn trũng — nơi sương đậm nhất. Cuối cùng là điều khiển tốt tình huống thật: sương dày tới mức không thấy là tín hiệu dừng, không phải tín hiệu bám theo bóng đèn xe trước.',
  quickAnswer: 'Trả lời ngắn: đi xe máy trong sương thì để tầm nhìn quyết định tốc độ. Một, đo tầm: nhắm một cột mốc phía trước, đếm xem từ bao xa mất hình — ba mươi mét thì chạy đúng tốc độ kịp dừng trong ba mươi mét, đừng để tay ga theo thói quen ngày nắng. Hai, đèn: bật sớm ngay khi trời sương mờ, đèn chiếu gần là chủ lực trong sương dày vì chiếu cao sẽ hắt ngược vào màn trắng làm mình mù thêm. Ba, khoảng cách: nhân đôi khoảng cách với xe trước vì xe trước cũng đang nhìn kém, mà mình lại đang đi theo dáng đèn của nó. Bốn, chỗ đặc biệt: ngã tư, đoạn trũng, cầu và bờ sông là nơi sương đậm và ẩn giấu — tới là chậm sẵn, không chờ nhìn rõ mới giảm. Và một ranh giới không thương lượng: sương dày tới mức không thấy trước mười mét, hoặc thấy đèn ngược chiều mà không định vị được khoảng cách — dừng chỗ an toàn chờ sương mỏng, bám theo xe khác trong màn mù không phải lái, mà là đánh cược.',
  keyPoints: [
    'Nguyên tắc vàng: tốc độ phải khớp với tầm nhìn — kịp dừng trong quãng đường mình nhìn thấy, sương dày bao nhiêu thì tốc độ giảm bấy nhiêu.',
    'Đo tầm nhìn bằng mốc: nhắm cột cây hoặc vạch sơn phía trước, quãng mất hình là quãng phanh tối đa được phép của mình.',
    'Đèn chiếu gần là chủ lực trong sương: chiếu cao hắt ngược vào màn sương, ánh sáng phản lại làm chính mình mù thêm.',
    'Khoảng cách với xe trước nhân đôi: mình đang đi theo dáng đèn xe trước, mà xe trước cũng đang nhìn kém hơn ngày thường.',
    'Ngã tư, đoạn trũng, cầu và bờ sông là điểm sương đậm nhất: chậm sẵn khi tới, không chờ nhìn rõ mới giảm tốc.',
    'Sương quá dày, không thấy trước mười mét: dừng chỗ an toàn chờ — bám theo xe khác trong màn mù là đánh cược, không phải lái xe.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['trời sương', 'tầm nhìn', 'tốc độ an toàn', 'đèn chiếu gần', 'khoảng cách an toàn', 'điều kiện thời tiết'],
  keywords: ['đi xe máy khi trời sương', 'đi xe trong sương mù', 'đèn xe máy trời sương', 'tầm nhìn khi lái xe', 'đi xe máy sáng sớm sương mù', 'nguyên tắc tốc độ theo tầm nhìn'],
  sections: [
    {
      h2: 'Sương nguy hiểm theo cách riêng của nó',
      html: `<p>Mưa lớn báo hiệu rõ ràng: tiếng mưa, đường ướt, kính mờ — người lái biết mình đang trong điều kiện xấu và phần nhiều có điều chỉnh. Sương không báo: đường vẫn khô, tay lái vẫn chắc, tiếng gió vẫn như mọi sáng — chỉ có bức màn trắng âm thầm lấy đi từng chục mét tầm nhìn, và tốc độ của người lái phần nhiều giữ nguyên vì cảm giác xe vẫn ổn.</p>
<p>Điểm nguy hiểm thứ hai của sương là sự bất cân xứng: người đi xe máy thấy đèn ô tô từ xa mà tưởng mình được an toàn, nhưng ô tô gần như không nhìn thấy xe máy trong sương — mục tiêu nhỏ, ánh sáng tán xạ, và kính ô tô có thể còn đọng hơi nước. Trong sương, xe máy vừa nhìn kém đi, vừa bị nhìn thấy kém đi, hai chiều cùng xấu.</p>
<p>Và sương không đều: mỏng ở đoạn thông thoáng, đột ngột dày ở đoạn trũng, cầu, ven sông — người lái vừa kịp quen với tầm bốn chục mét thì bỗng rơi vào đoạn chỉ còn mười. Vì vậy chiến lược đi trong sương không phải một tốc độ duy nhất, mà là cách đọc sương và điều chỉnh liên tục theo từng đoạn.</p>`,
    },
    {
      h2: 'Nguyên tắc vàng: dừng được trong tầm nhìn',
      html: `<p>Mọi quy tắc tốc độ trong sương gói trong một câu: chạy đúng tốc độ kịp dừng trong quãng đường mình nhìn thấy. Nếu trước mắt chỉ còn ba mươi mét nhìn rõ, thì ba mươi mét là quãng phanh tối đa — vượt qua tốc độ ấy là mượn phần đường chưa nhìn thấy, và trong sương phần đường chưa nhìn thấy có thể chứa bất cứ gì.</p>
<p>Cách ước tầm nhìn tại chỗ: nhắm một cột điện, thân cây hoặc vạch sơn phía trước, và để ý khoảng cách từ chỗ mất hình của nó — đó là tầm nhìn thực của mình trong giây này. Lặp lại thói quen nhỏ mỗi vài chục giây: sương dày lên là giảm ga theo, sương mỏng đi là nhích lại — điều chỉnh theo đo, không theo cảm giác xe đang êm.</p>
<p>Phép toán thô để tự hiệu: ở tốc độ bốn mươi cây số một giờ, xe máy đi được khoảng mười một mét một giây, và quãng phanh kịp dừng trên đường khô vào cỡ một chục mét nữa — vậy tầm nhìn dưới hai mươi mét thì tốc độ đó đã là đi vay. Con số không cần chính xác, cần là thói quen cặp tay ga với tầm nhìn như hai thứ phải khớp nhau.</p>`,
    },
    {
      h2: 'Đèn trong sương: gần là chủ lực, cao là phản tác dụng',
      html: `<p>Điều ngược với trực giác nhiều người: trong sương dày, đèn pha chiếu cao làm mình mù thêm. Ánh sáng chiếu thẳng vào màn sương bị tán xạ ngược về mắt — hiện tượng như đèn pin chiếu vào tường sương trắng, càng sáng càng loá. Chiếu gần với góc thấp cho luồng sáng bám mặt đường, mặt đường luôn phản chiếu ổn hơn màn sương — vì vậy chiếu gần là chế độ chủ lực khi sương dày.</p>
<p>Bật đèn sớm — ngay cả khi trời đã tỏ hơn ngày thường: sương nuốt ánh sáng chậm, và giá trị lớn nhất của đèn trong sương không phải cho mình nhìn, mà cho người khác nhìn thấy mình. Đèn vị trí chạy chế độ bật thường trực càng tốt, nhất là với xe bánh nhỏ thân thấp vốn đã khó thấy.</p>
<p>Một lưu ý khi đi theo xe khác: giữ khoảng cách đủ để không đi trong đuôi sương của chính xe trước — khói ống xả và hơi nước mà xe trước hất lên tạo thêm một lớp mù cục bộ ngay sau nó, khoảng cách quá gần là tự đặt mình vào mù kép: sương trời cộng sương xe.</p>`,
    },
    {
      h2: 'Khoảng cách và ngã tư: hai chỗ cần nhân đôi sự cẩn thận',
      html: `<p>Ngày thường giữ khoảng cách với xe trước theo nguyên tắc vài giây di chuyển; trong sương nguyên tắc nhân đôi: xe trước nhìn thấy chướng ngại trước mình cũng muộn, và phản ứng của nó — phanh gấp, vẹt — phát tới mình cũng muộn hơn. Đi trong sương mà bám sát là nối phản xạ của mình vào tầm nhìn của người khác, người mà mình không biết đang nhìn được bao xa.</p>
<p>Ngã tư là điểm cần chậm sớm hơn mọi điều kiện: sương che tầm nhìn của mình cũng che tầm nhìn của các bên, và tiếng động cơ trong màn trắng không định vị được phương hướng — người nghe không biết xe mình tới từ đâu. Cách xử lý: giảm tốc trước khi tới giao cắt thật sâu, quan sát bằng mắt và tai, và không xông qua theo kiểu ngày nắng chỉ vì đèn bên kia chưa thấy — trong sương chưa thấy không có nghĩa là chưa tới.</p>
<p>Quy tắc nhỏ đáng nhớ ở ngã tư sương: mở rộng quan sát tới mọi hướng rồi mới vào giao cắt, và trong sương đậm thì chấp nhận chờ thêm vài giây — vài giây là đơn vị thời gian rẻ nhất trên đường, đắt nhất chỉ khi đã va rồi.</p>`,
    },
    {
      h2: 'Những đoạn đường sương đậm bất ngờ',
      html: `<p>Sương không rải đều mà tụ chỗ: đoạn trũng, lòng chảo, cầu và dải ven sông — nơi không khí lạnh đọng — luôn đậm hơn mặt đường thông thoáng bên trên. Ai quen tầm nhìn của đoạn cao rồi lao xuống trũng là rơi vào một bức màn trắng đột ngột trong khi tốc độ đang giữ nguyên của đoạn trước.</p>
<p>Cầu phao và cầu dài ven nước còn thêm hai rủi ro ghép: sương đậm cộng bề mặt cầu có thể ẩm trơn vì hơi nước ngưng — vành cầu không có phần đất hai bên đỡ, một cú trượt là rơi thẳng. Tới cầu trong sương: giảm trước, giữ đều ga, tuyệt đối không phanh hay chỉnh hướng giữa nhịp cầu khi có thể tránh.</p>
<p>Và một thói quen đọc sương từ xa đáng hình thành: nhìn phía trước xem màn trắng có kéo sườn theo địa hình không — sương đậm đang nằm thấp thì chỉnh tốc trước khi lao xuống, chứ không đợi tận trong màn để nhận ra mình đã quá nhanh. Đọc sương cũng là một kỹ năng lái, không khác đọc đường một chiều hay đọc ổ gà.</p>`,
    },
    {
      h2: 'Khi nào dừng hẳn: ranh giới không thương lượng',
      html: `<p>Có một ngưỡng mà mọi kỹ thuật đều bó tay: sương dày tới mức không nhìn rõ trước mười mét. Ở đó, không có tốc độ an toàn nào ngoài tốc độ bước chân, mà trôi trên đường với tốc độ đó giữa các xe vẫn đang chạy cũng chính là rủi ro — phương án đúng là rời khỏi làn đường, dừng ở chỗ an toàn và chờ sương mỏng theo nắng lên.</p>
<p>Dấu hiệu thứ hai cần dừng: nhìn thấy đèn ngược chiều mà không ước định được khoảng cách — khi mình không còn đo được xa gần thì mọi quyết định vượt hay nhường đều là phán đoán trong mù. Chọn chỗ dừng cũng phải cẩn thận: lề rộng có điểm tựa, đèn bật đủ để người khác thấy xe đỗ sớm, và tuyệt đối không dừng ngay sau khúc cong trong sương dày.</p>
<p>Cuối cùng, đừng đánh đồng bám theo xe trước với an toàn: nhiều người trong sương dày chọn chạy theo dáng đèn xe phía trước với niềm tin nó nhìn được giùm mình — nhưng xe đó cũng đang mù, cũng đang phán đoán, và khi nó phanh gấp thì mình là cặp đèn kế tiếp trong màn trắng. Lái trong sương là tự mình nhìn và tự mình quyết định; hết nhìn được thì dừng — đó là kỹ năng cuối và cũng là kỹ năng khó nhất: biết chờ.</p>`,
    },
  ],
  checklist: [
    'Đo tầm nhìn bằng mốc phía trước: quãng mất hình của cột cây là quãng phanh tối đa — chỉnh tốc cho kịp dừng trong tầm đó.',
    'Bật đèn sớm và giữ chiếu gần trong sương dày: chiếu cao hắt ngược vào màn sương, càng sáng càng loá mắt mình.',
    'Khoảng cách với xe trước nhân đôi: không bám sát dáng đèn xe trước trong màn mù — nó cũng đang nhìn kém như mình.',
    'Chậm sâu trước ngã tư: sương che cả hai bên, quan sát mọi hướng rồi mới vào — chưa thấy không có nghĩa là chưa tới.',
    'Đọc sương theo địa hình: đoạn trũng, cầu, ven sông luôn đậm hơn — giảm tốc trước khi lao xuống, không đợi trong màn mới giảm.',
    'Ngưỡng dừng: không nhìn rõ trước mười mét, hoặc không đo được khoảng cách đèn ngược chiều — rời làn đường, dừng chỗ an toàn, chờ sương mỏng.',
  ],
  steps: [
    {
      title: 'Đo tầm nhìn liên tục',
      detail: 'Nhắm cột mốc phía trước, ghi quãng mất hình, lặp lại mỗi vài chục giây — sương dày lên là giảm ga theo, không theo cảm giác xe êm.'
    },
    {
      title: 'Chỉnh đèn đúng chế độ',
      detail: 'Bật sớm cho người khác thấy mình, chuyển chiếu gần trong sương dày — luồng sáng bám mặt đường ổn hơn luồng chiếu vào màn trắng.'
    },
    {
      title: 'Nhân đôi khoảng cách và cẩn thận ngã tư',
      detail: 'Xe trước cũng đang mù nên không bám sát; tới giao cắt giảm sâu, quan sát mọi hướng, chấp nhận chờ thêm vài giây trong sương.'
    },
    {
      title: 'Đọc sương theo địa hình và biết dừng',
      detail: 'Trũng, cầu, ven sông là chỗ sương tụ — giảm trước khi xuống; hết nhìn rõ trước mười mét thì dừng chỗ an toàn chờ nắng mỏng sương.'
    }
  ],
  warnings: [
    'Không bật đèn pha chiếu cao trong sương dày: ánh sáng tán xạ ngược về mắt làm chính mình mù thêm — chiếu gần là chế độ an toàn.',
    'Không bám theo dáng đèn xe trước trong màn mù: xe đó cũng đang phán đoán, và khi nó phanh gấp thì mọi khoảng cách đều đã tính muộn.',
    'Không cố vượt qua sương dày tới mức không thấy đèn ngược chiều ở đâu: khi không đo được xa gần, dừng chỗ an toàn là kỹ năng, không phải yếu đuối.',
  ],
  notes: [
    'Sương đậm nhất thường quanh bình minh rồi mỏng dần theo nắng: biết mình đi trong khung giờ nào cũng là một phần kế hoạch — khởi hành muộn hơn nửa tiếng nhiều khi đổi cả màn trắng thành màn mỏng.',
    'Kính mũ bảo hiểm chống hơi nước trong sương sớm cũng đáng chuẩn bị: một lớp màng mỏng trên kính cộng sương trời là mất thêm nửa tầm nhìn còn lại.',
  ],
  references: [
    'Khuyến nghị về sử dụng đèn và điều chỉnh tốc độ theo điều kiện tầm nhìn hạn chế khi tham gia giao thông là nội dung chung của các hướng dẫn an toàn giao thông đường bộ hiện hành.',
    'Yêu cầu về tốc độ của phương tiện phù hợp với điều kiện thời tiết và tầm nhìn thực tế được quy định trong quy tắc giao thông đường bộ hiện hành.',
  ],
  related: [
    'ky-thuat-di-xe-may-ban-dem',
    'giu-khoang-cach-an-toan-khi-di-xe-may',
    'chay-ra-xe-may-dung-cach',
    'mu-bao-hiem-dat-chuan-cach-chon',
  ],
};
