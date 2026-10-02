// AI WIKI TOTAL — bài mở rộng cụm /learn/ky-thuat-lai-xe/: kỹ thuật qua gờ giảm tốc (slot S00183)
'use strict';

module.exports = {
  slug: 'ky-thuat-di-xe-may-qua-go-giam-toc',
  title: 'Kỹ thuật đi xe máy qua gờ giảm tốc: đón bánh, giữ lái, không hất người',
  seoTitle: 'Kỹ thuật qua gờ giảm tốc bằng xe máy an toàn',
  metaDescription: 'Gờ giảm tốc hất bánh trước, đuối bánh sau và giật lái nếu đi nhanh. Bài viết chỉ cách giảm đúng nhịp, chọn vệt, đứng người và giữ ga qua mọi loại gờ an toàn.',
  summary: 'Gờ giảm tốc là chướng ngại duy nhất trên đường được sơn màu để người lái nhìn thấy từ xa, và cũng là chướng ngại gây hư xe nhiều nhất trong số các chướng ngại nhìn thấy được — vì phần lớn người đi không hiểu nó làm gì trên xe mình. Một gờ không giết ai ở tốc độ hai mươi cây số, nhưng nó hất bánh trước khỏi mặt đường, nén nhíp tới đáy, đuối bánh sau ngay khi bánh trước vừa xuống, và giật lái khỏi tay — bốn cú trong chưa tới một giây, lặp lại theo chuỗi gờ nối đuôi trước cổng trường, đầu hẻm và khu dân cư. Bài viết này bóc từng lớp: bản chất của gờ với hai bánh — vì sao cú hất đỉnh gờ nguy hiểm hơn chính chiều cao của nó, và vì sao phanh đang còn siết khi bánh chạm gờ là cú nén gấp nhất mà nhíp xe gánh trong cả chuyến; ba loại gờ thường gặp — dải nhựa thấp sơn vàng, gờ bê tông tròn cao, dải giảm tốc dài lượn sóng — và cách mỗi loại đòi một tốc độ khác nhau; trình tự chuẩn bị từ xa: thấy vệt mòn dừng trước gờ là thấy gờ trước khi thấy gờ, giảm và về số từ trước, hoàn tất phanh trước khi bánh trước chạm; kỹ thuật đón bánh: nhả phanh đúng lúc, để xe tự nhún, ga nhẹ nhịp sau khi bánh sau xuống, và giữ thân người trên hai bàn đạp thay vì ghì chặt vào tay lái; các tình huống đặc biệt — gờ bị mòn một vệt lệch giữa, gờ trên mặt đường ướt, gờ đầu hẻm chật có hàng xe ngược chiều, và chở người ngồi sau; cuối cùng là kiểm tra sau chặng gờ dày: xi lanh trước, vành, lốp, và dấu hiệu nhíp yếu đi. Kết lại bằng một câu nằm lưng cả bài: gờ là bài kiểm tra kỷ luật giảm tốc — nó không trừng phạt người nhanh, nó trừng phạt người giảm muộn.',
  quickAnswer: 'Trả lời ngắn: qua gờ giảm tốc đúng cách là giảm và về số từ xa, hoàn tất mọi phanh trước khi bánh trước chạm gờ, nhả phanh để bánh tự nhún qua đỉnh, rồi ga nhẹ nhịp sau khi bánh sau xuống. Ba lỗi phổ biến nhất: phanh còn siết lúc bánh chạm đỉnh — nén nhíp gấp nhất chuyến đi; ga kéo bánh trước bật khỏi đỉnh — mất tiếp xúc và giật lái; và đi đúng vệt mòn giữa gờ khi vệt đó đã bị mòn sâu thành rãnh — mép rãnh sắc cạo hông lốp. Với gờ bê tông tròn cao, về số một và gần như cho xe bò qua; với dải nhựa thấp, số hai ga đều là đủ; với dải dài lượn sóng, giữ đều nhịp chứ không nhấp ga theo từng đợt sóng. Chở người ngồi sau thì báo trước bằng một câu, ngả người sau lại nhẹ khi xe xuống, và tuyệt đối không phanh gấp ngay sau gờ — hàng xe nối đuôi qua gờ giữ khoảng giữa xe chỉ vài mét. Gờ ướt, gờ mòn vệt, gờ đầu hẻm có xe ngược chiều: cả ba đều giảm thêm một bậc so với bình thường, và nếu lưỡng lự giữa hai tốc độ, chọn tốc thấp hơn — qua gờ chậm hơn cần thiết chưa bao giờ là lỗi, qua nhanh hơn cần thiết thì gần như luôn.',
  keyPoints: [
    'Gờ giảm tốc không trừng phạt người nhanh — nó trừng phạt người giảm muộn: mọi phanh phải hoàn tất trước khi bánh trước chạm đỉnh gờ.',
    'Ba loại gờ đòi ba tốc độ: dải nhựa thấp đi số hai, gờ bê tông cao về số một gần đi bộ, dải dài lượn sóng giữ ga đều nhịp liên tục.',
    'Nhả phanh đúng lúc bánh chạm gờ: để xe tự nhún qua đỉnh thay vì nén nhíp — phanh còn siết trên đỉnh gờ là cú nén gấp nhất nhíp xe gánh cả chuyến.',
    'Vệt mòn giữa gờ là tin vị báo gờ từ xa, nhưng cũng là rãnh sắc cạo lốp khi mòn sâu — chọn lốp vệt, tránh cán mép rãnh giữa bánh.',
    'Chở người ngồi sau qua gờ: báo trước bằng lời, ngả người khi xe xuống, và không phanh gấp ngay sau gờ vì hàng xe nối đuôi chỉ cách vài mét.',
    'Sau chặng gờ dày mà xe có tiếng lạ ở trước: kiểm tra xi lanh, vành, độ căng nan hoa và chỗ đệm giảm xóc — gờ là thủ phạm số một của nhíp yếu đi.',
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-10-02',
  updated: '2026-10-02',
  entities: ['gờ giảm tốc', 'nhíp xe', 'bánh trước', 'vệt mòn', 'gờ bê tông', 'dải nhựa giảm tốc'],
  keywords: ['qua gờ giảm tốc', 'gờ giảm tốc xe máy', 'kỹ thuật qua gờ', 'gờ bê tông', 'nhíp xẹp sớm', 'đi xe máy khu dân cư'],
  sections: [
    {
      h2: 'Bản chất của gờ với hai bánh: cú hất, cú nén, cú đuối',
      html: `<p>Với xe bốn bánh, gờ giảm tốc là một cú xóc: toàn bộ khối xe nâng lên rồi hạ xuống trên hệ thống treo, và người ngồi cảm nhận bằng lưng. Với xe hai bánh, cùng một gờ là chuỗi bốn cú riêng biệt xảy ra trong chưa tới một giây — và mỗi cú đánh vào một bộ phận khác nhau. Cú thứ nhất là cú hất bánh trước: bánh leo đỉnh gờ, và nếu tốc độ còn cao, bánh không lăn qua đỉnh mà bay khỏi đỉnh — mất tiếp xúc với mặt đường đúng lúc tay lái cần bám đất nhất. Cú thứ hai là cú nén: nhíp và giảm xóc nén tới đáy trong khoảnh khắc bánh trên đỉnh gờ, và toàn bộ tải trọng dồn lên một điểm của vành.</p>
<p>Cú thứ ba là cú rơi: bánh trước xuống phía đối diện của gờ, và nếu đỉnh gờ cao, bánh rơi một đoạn trước khi chạm đất — cú chạm trở lại là cú đập thẳng hàng lên vành và đầu lái. Cú thứ tư là cú đuối bánh sau: bánh sau gánh phần lớn tải xe, và nó gặp gờ đúng lúc bánh trước vừa qua — xe đang ngả nặng về sau vì phản ứng của thân, khiến cú nén bánh sau còn lớn hơn cú nén bánh trước. Người đi xe máy gồng theo cả bốn cú bằng hai tay và hai chân, và đó là lý do một chuỗi gờ khiến mỏi vai nhanh hơn mười cây số đường gập ghềnh.</p>
<p>Điểm mấu chốt của cả chuỗi là bản chất hình học của đỉnh gờ: đỉnh gờ là một cung tròn nhỏ, và bánh xe chỉ an toàn trên cung tròn nếu bánh lăn qua — tức là chạm đỉnh với lực ép nhẹ và tốc độ vừa phải để ma sát giữa lốp và mặt gờ giữ bánh bám. Càng nhanh, thời gian tiếp xúc trên đỉnh càng ngắn, lực ép càng nhỏ, và bánh càng dễ trượt khỏi đỉnh theo phương ngang — cú trượt ngang trên đỉnh gờ chính là cú giật lái mà người hay đi nhanh qua gờ đều biết, và cũng là cú khiến xe lệch hẳn sang làn bên nếu gờ không đều hai bên.</p>`,
    },
    {
      h2: 'Ba loại gờ và ba tốc độ không thể dùng chung',
      html: `<p>Dải nhựa giảm tốc — từng nắp nhựa sơn vàng đen bắt vít xuống mặt đường, cao ba đến năm centimet, sống tròn — là loại phổ biến nhất trong khu dân cư. Với loại này, tốc độ an toàn nằm quanh số hai: đủ chậm để bánh lăn qua từng nắp thay vì bật, đủ đà để nhíp nhún trở lại giữa hai nắp. Đi quá nhanh, xe nhảy theo từng nắp như trống dồn; quá chậm giữa các nắp, xe lết từng nấc và người phải chống chân. Nhịp đúng nghe ra bằng tai: một nhịp xóc đều đặn, không có tiếng chạm vành.</p>
<p>Gờ bê tông tròn cao — đúc nguyên khối, cao tới mười centimet, thường ở đầu hẻm, cổng khu công sở và lối ra khu trường — là loại nguy nhất cho vành và lốp. Cao hơn nắp nhựa gấp đôi, đỉnh tròn hơn, và mặt bê tông mòn nhẵn sau thời gian dài bị bánh cán khiến lốp dễ trượt khi ướt. Với loại này, không có kỹ thuật nào thay thế được việc về số một và gần như cho xe bò qua: bánh trước leo đỉnh chậm, lăn qua, rơi chậm, rồi bánh sau làm lại cú leo. Người đi nhanh qua gờ bê tông cao một lần có thể nghe ra ngay: tiếng chạm vành là tiếng kim loại khô, không lẫn được với tiếng nhíp nhún.</p>
<p>Dải giảm tốc dài lượn sóng — bê tông hoặc nhựa kéo dài cả chục mét với các đợt sóng nối tiếp — là loại dễ nhất về va nhưng khó nhất về nhịp, vì nó dụ người lái nhấp ga theo từng đợt sóng: ga lên giữa sóng, dừng trên đỉnh, rồi lại ga. Cách đi đúng là ngược lại: giảm trước dải về số hai, vào dải với ga đều, và giữ nguyên ga đó xuyên suốt — xe nhún theo sóng với tần số đều như một chiếc thuyền giữ máy qua sóng nước. Nhấp ga giữa dải không chỉ gây xóc cho người sau mà còn khiến bánh trước bật trên đỉnh từng sóng, mất tiếp xúc nhiều lần liên tiếp trên đoạn mà người lái tưởng là đã kiểm soát.</p>`,
    },
    {
      h2: 'Chuẩn bị từ xa: gờ được nhìn thấy trước khi được nhìn thấy',
      html: `<p>Câu thần chú của người đi gờ giỏi: gờ được nhìn thấy trước khi được nhìn thấy — bằng vệt mòn, bằng biển báo, bằng hành vi của dòng xe. Vệt mòn là dấu vết đáng tin nhất: trước một gờ, mặt đường luôn có hai vệt phanh và bánh cán đè — chỗ vệt đậm dồn về một điểm giữa làn chính là gờ, ngay cả khi gờ trùng màu mặt đường hoặc bị che bởi xe ngược chiều. Biển báo hình gờ cũng đáng tin, nhưng với một khoảng lệch: gờ thật thường nằm xa hơn biển mười hai mét — người sợ gờ phanh ngay tại biển là phanh sớm năm nhịp, và người quen đường phanh theo vệt mòn chứ không theo biển.</p>
<p>Hành vi của dòng xe là tín hiệu thứ ba và tinh nhất: xe phía trước lom khom nhấp nhô là có gờ hoặc ổ chuỗi; xe ngược chiều ngóc cổng lên rồi lật xuống tại cùng một điểm là gờ ở làn của họ; và một dòng xe máy rạp đều về một tốc độ chậm tại cùng chỗ là gờ lớn. Ba tín hiệu đó cho người lái một quãng chuẩn bị mà không cần nhìn thấy gờ — đủ để giảm và về số khi còn cách vài chục mét, thay vì phát hiện gờ ở cỡ mười mét và phanh gấp ngay trước nó.</p>
<p>Và đây là điểm phân biệt kỹ năng: phanh gấp trước gờ là động tác gây hại nhiều nhất trong cả vấn đề. Phanh gấp dồn tải bánh trước đúng lúc bánh sắp chạm đỉnh — tức là bánh leo gờ trong thế đã nặng gấp đôi, nhíp đã nén sẵn, và cú nén trên đỉnh cộng với cú nén phanh vượt quá hành trình nhíp: đáy. Mọi việc giảm cần hoàn tất trước gờ, và tay rời phanh đúng lúc bánh trước còn cách đỉnh một mét — để xe vào gờ trong thế tự do, nhún theo gờ thay vì bị ép xuống gờ. Người trông như đi gờ nhàn không phải vì xe họ êm hơn, mà vì họ giảm xong từ trước khi người khác mới bắt đầu giảm.</p>`,
    },
    {
      h2: 'Đón bánh và giữ người: hai bàn đạp, hai khuỷu, một thân lỏng',
      html: `<p>Tư thế qua gờ bắt đầu từ hai chân: đứng nhẹ trên hai bàn đạp, mũi chân chống hướng, gối khuỳnh vừa — thế đứng cho phép hai chân nhận cú xóc bằng cách cho thân người một tầng treo riêng, thay vì truyền thẳng từ yên lên sống lưng. Người ngồi ghì cứng, hai tay ghì bám chết vào tay lái, là người nhận trọn cú giật: mọi cú hất của bánh truyền qua xe lên người không giảm chút nào. Người đứng nhẹ nhận cú bằng gối, và gối là giảm xóc rẻ nhất mà xe máy có sẵn.</p>
<p>Hai tay giữ vai trò ngược với trực giác: không ghì, mà dẫn. Tay lái trên gờ cần được buông cho tự xoay trong tay người — bánh trước tự tìm đường lăn qua đỉnh tốt hơn mọi sự chỉnh tay, và cú chỉnh tay giữa lúc bánh trên đỉnh chính là cú lệch. Khuỷu gập nhẹ, vai thả, và người hơi ngả sau khi bánh trước chạm đỉnh — ngả sau chuyển một phần tải ra bánh sau, giảm cú nén bánh trước. Khi bánh trước rơi phía đối diện, người lại ngả nhẹ về trước — hai cú ngả đó nhỏ đến mức người ngoài nhìn không thấy, nhưng chính chúng phân bổ tải qua bốn cú của gờ thay vì để mỗi cú đánh một đầu xe.</p>
<p>Về ga: nhát ga đúng là nhát ga sau khi bánh sau xuống. Bánh trước lên đỉnh — ngắt ga; bánh trước xuống, bánh sau lên — giữ ga chết; bánh sau xuống — ga nhẹ nhịp đón xe về nhịp đi. Nhát ga giữa gờ kéo bánh trước bật khỏi đỉnh, và nhát ga đúng sau gờ giúp xe rời vùng gờ nhanh — điều quan trọng với gờ đầu hẻm ra đường lớn, nơi xe cần thoát nhanh khỏi điểm gờ để nhường chỗ cho dòng xe sau. Toàn bộ trình tự đó là một nhịp cố định: giảm, nhả, tự do, ga — và người đi chuỗi gờ dài thực ra chỉ lặp một nhịp duy nhất như một bài nhạc.</p>`,
    },
    {
      h2: 'Các tình huống đặc biệt: gờ mòn vệt, gờ ướt, gở đầu hẻm, chở người sau',
      html: `<p>Gờ bị mòn một vệt lệch giữa là gờ thường gặp nhất ở đường cũ: dòng xe nối đuôi qua gờ đều chọn cùng một điểm mòn nhất, tạo thành một rãnh lõm chạy dọc qua gờ. Đi trong rãnh êm hơn — nhưng mép rãnh là mép sắc của bê tông hoặc nhựa bị bào mòn, và cán mép giữa bánh là thế lốp bị cạo hông. Quy tắc: đi lệch nửa bánh so với tâm rãnh — bánh lăn trên phần gờ chưa mòn kề rãnh, tránh cả đáy rãnh lẫn mép sắc. Nếu gờ mòn không đều hai bên (một bên phẳng, một bên còn cao), tuyệt đối tránh thế bánh trước hai bên lệch độ cao khác nhau — đó là thế xe nghiêng ngay trên đỉnh gờ, cú nguy nhất của loại gờ này.</p>
<p>Gờ ướt — sau mưa hoặc lúc rửa đường — đổi bản chất của mặt gờ: nắp nhựa sơn bóng và mặt bê tông mòn nhẵn đều giảm bám trầm trọng, và cú trượt ngang trên đỉnh ướt xảy ra ở tốc độ mà đường khô vẫn qua tốt. Giải pháp không có gì tinh vi: giảm thêm một bậc so với bình thường, thẳng hàng bánh với gờ (không xiên), và ngắt ga hoàn toàn trên đỉnh. Xiên gờ khi ướt là cú trượt ngang không cần bàn đạp nào hết — bánh trước trượt theo mặt cong của đỉnh về phía thấp, và người chưa hiểu vì sao đã thấy xe lệch.</p>
<p>Gờ đầu hẻm và gờ trước cổng trường thêm một biến: hàng xe. Mọi người đều giảm tại gờ, nên khoảng cách giữa các xe co lại còn vài mét — và cú phanh gấp ngay sau gờ (vì xe trước chậm hơn mình tưởng) là va cuối lùm phổ biến nhất của khu vực gờ. Cách xử: giữ khoảng với xe trước lớn hơn bình thường khi tới gờ, giả định xe trước sẽ phanh gấp sau gờ, và không vượt trong đoạn gờ kể cả khi thấy khe — khe đó là chỗ xe trước sẽ lạng về để né gờ mòn. Chở người ngồi sau thì thêm một nguyên tắc: báo trước bằng một câu ngắn, vì người sau không thấy gờ tới — cú hất khiến người sau chúi đầu vào người lái, và trong chuỗi gờ nối tiếp, mỗi cú chúi làm người sau mất tựa, tới cú thứ ba thì gần như lơ lửng trên yên.</p>`,
    },
    {
      h2: 'Sau chặng gờ dày: đọc lại xe và đọc lại chính mình',
      html: `<p>Một chuỗi gờ dài đi đúng cách vẫn để lại dấu vết, và người đi cẩn thận có thói quen nghe lại xe sau chặng gờ dày. Ba dấu hiệu cần để ý: tiếng khô kim loại ở trước mỗi lần phanh — khả năng cao nhíp đã nén đáy nhiều lần, xi lanh trước bắt đầu yếu; tiếng lạch cạch nhịp theo bánh quay — nan hoa lỏng hoặc vành cong nhẹ; và cảm giác tay lái lệch tâm — cổ lái hoặc trục lái đã chịu cú hất. Ba dấu hiệu đó đều rẻ để kiểm tra và đắt để bỏ qua: một vòng siết nan hoa và một lần kiểm tra xi lanh tại tiệm sửa xe chưa bằng giá của một vành mẻ.</p>
<p>Lốp là điểm cần nhìn nhất sau gờ bê tông cao: cú nén đáy nhíp đẩy vành chạm mặt đường qua lốp, và lốp non căng là lốp để vành chạm đất — mỏng nhất ở hông và ngay vết cán mép gờ. Sờ hông lốp hai bên sau chặng gờ dày, soi dưới nắng hoặc đèn pin: một vết rạch dài dọc hông là vết cán mép rãnh mòn, một vết tròn lõm là vết đáy gờ. Lốp bị hai vết đó không nổ ngay, nhưng đó là chỗ nổ lụi giữa đường ướt vài ngày sau — khi người lái đã quên gờ và chỉ nhớ cú xì bất ngờ.</p>
<p>Và dấu thứ tư là người, không phải xe: vai gồng, cổ cứng, hai bàn tay tê rần sau chuỗi gờ là dấu của tư thế sai — ghì tay lái thay vì đứng nhẹ trên hai bàn đạp. Cảm giác đó đáng để tự sửa ngay, vì nó không mòn theo thời gian mà tích: người đi gờ bằng tay lực là người hết vai sau một giờ, và hết vai là bắt đầu ghì thêm bằng lưng — một vòng xoắn dần lên đúng kỹ thuật. Gờ vì thế là bài kiểm tra kép: nó kiểm tra kỷ luật giảm tốc của người lái, và kiểm tra tư thế của người ngồi trên xe. Người qua gờ nhàn là người đã tập cả hai — giảm xong từ xa, và để xe nhún thay mình xóc.</p>`,
    },
  ],
  checklist: [
    'Nhìn gờ từ xa qua ba tín hiệu: vệt mòn dồn về một điểm, biển báo, và hành vi nhấp nhô của dòng xe — giảm và về số khi còn cách vài chục mét.',
    'Hoàn tất phanh trước gờ: tay rời phanh khi bánh trước còn cách đỉnh một mét, để xe vào gờ trong thế tự do.',
    'Đi lệch nửa bánh so với tâm rãnh mòn trên gờ mòn — tránh cả đáy rãnh lẫn mép sắc, và tuyệt đối không để hai bánh lệch độ cao trên đỉnh.',
    'Nhịp ga cố định: ngắt khi bánh trước lên, giữ chết khi hai bánh luân chuyển, ga nhẹ nhịp sau khi bánh sau xuống — không nhấp ga giữa gờ.',
    'Sau chặng gờ dày: nghe tiếng trước khi phanh, sờ hông lốp, và tự hỏi vai có gồng — ba phút kiểm tra rẻ hơn một vành mẻ.',
  ],
  steps: [
    { title: 'Đọc gờ từ xa', detail: 'Dùng vệt mòn, biển báo và hành vi dòng xe để biết gờ ở đâu và loại gì; giả định gờ xấu hơn vẻ ngoài — bê tông cao, mòn rãnh, hoặc ướt.' },
    { title: 'Giảm và về số trước gờ', detail: 'Hoàn tất giảm ở cỡ vài chục mét: dải nhựa về số hai, gờ bê tông cao về số một, dải sóng dài số hai ga đều — mọi phanh chấm dứt trước khi bánh chạm đỉnh.' },
    { title: 'Đón bánh với thân lỏng', detail: 'Đứng nhẹ trên hai bàn đạp, khuỷu gập, ngả nhẹ sau khi bánh trước lên đỉnh và ngả nhẹ trước khi bánh rơi — hai tay dẫn lái chứ không ghì.' },
    { title: 'Thoát và kiểm tra', detail: 'Ga nhẹ nhịp sau khi bánh sau xuống để rời vùng gờ nhanh; sau chặng gờ dày, nghe tiếng trước khi phanh, sờ hông lốp, và siết nan hoa khi có tiếng lạch cạch.' },
  ],
  warnings: [
    'Không phanh khi bánh đang trên đỉnh gờ — phanh dồn tải bánh trước đúng lúc nhíp cần hành trình nhún, và cú nén đáy trên đỉnh là cú nén gấp nhất nhíp gánh cả chuyến.',
    'Không xiên gờ khi ướt — mặt gờ mòn nhẵn giảm bám, bánh trước trượt theo đỉnh cong về phía thấp không cần bàn đạp nào hết.',
    'Không phanh gấp ngay sau gờ — hàng xe qua gờ nối đuôi với khoảng cách vài mét, và xe trước luôn chậm hơn mình tưởng ở ngay sau đỉnh.',
    'Không đi đúng đáy rãnh mòn trên gờ cũ — mép rãnh bê tông bị bào mòn là dao cạo hông lốp; lệch nửa bánh sang phần gờ chưa mòn kề bên.',
  ],
  notes: [
    'Việc hất bánh, mẻ vành và dấu hiệu lốp yếu liên quan tới gờ được nói sâu hơn trong bài giảm xóc xe máy chăm sóc và dấu hiệu yếu — phần sau chặng gờ ở đây nên đọc kèm bài đó.',
    'Kỹ thuật đón bánh và tư thế thân trên đây dùng chung nguyên lý với bài qua đoạn ổ gà — một bên là va lởm chởm, một bên là va đỉnh tròn, nhưng tầng treo của con người làm việc theo cùng một cách.',
  ],
  references: [
    { title: 'Kỹ thuật đi xe máy qua đoạn ổ gà', url: 'https://thuexemayhanoi.github.io/total/learn/ky-thuat-lai-xe/ky-thuat-di-xe-may-qua-doan-oc-ga/' },
    { title: 'Giảm xóc xe máy: chăm sóc và dấu hiệu yếu', url: 'https://thuexemayhanoi.github.io/total/learn/cham-soc-xe/giam-xoc-xe-may-cham-soc-va-dau-hieu-yeu/' },
  ],
  related: [
    'ky-thuat-di-xe-may-qua-doan-oc-ga',
    'giam-xoc-xe-may-cham-soc-va-dau-hieu-yeu',
    'di-xe-may-qua-khu-vuc-truong-hoc-luu-y',
    'ky-thuat-phanh-khan-cap-xe-may',
  ],
};
