// AI WIKI TOTAL — bài mở rộng cụm /learn/ky-thuat-lai-xe/: đi xe máy trên đường một chiều (slot S00176)
'use strict';

module.exports = {
  slug: 'di-xe-may-duong-mot-chieu-dung-lan',
  title: 'Đi xe máy trên đường một chiều: chọn làn và né cửa mở',
  seoTitle: 'Đi xe máy đường một chiều: chọn làn an toàn',
  metaDescription: 'Đường một chiều tưởng dễ lại giấu rủi ro riêng: cửa xe đỗ mở, ngõ đẻ ra và người băng giữa dòng xe. Bài viết chỉ cách chọn làn và né cửa mở.',
  summary: 'Nhiều người nghĩ đường một chiều là loại đường dễ đi nhất: không có xe ngược chiều, không có cảnh vượt nhau chéo mặt, tốc độ dòng xe đồng đều. Nhưng chính vì dễ, nó sinh ra một bộ rủi ro riêng mà người đi xe máy hay bỏ qua: vì không cần canh xe ngược, ánh nhìn của mình dồn về phía trước và mất hẳn sự cảnh giác hai bên — trong khi trên đường một chiều, nguy hiểm lại đến từ hai bên nhiều hơn từ phía trước: cửa xe đỗ mở ra đúng lúc mình đi ngang, ngõ nhỏ đẻ xe ra mà không ai nhường, người đi bộ băng giữa khe hai xe vì thấy dòng xe cùng chiều dễ đoán, và những chiếc xe rẽ trái cắt qua cả dòng xe để vào ngõ. Bài viết này đi qua từng lớp kỹ thuật: cách chọn làn — vì sao làn trong là làn chậm và an toàn cho người đi ngắn, còn làn ngoài là làn của cửa mở và miệng ngõ; cách đọc hàng xe đỗ để đoán cửa sắp mở và chọn khe đi; kỹ thuật né cú mở cửa vô tình và cách nhìn khe hở giữa các xe; cách xử lý người đi bộ băng giữa dòng — họ nhìn dòng trước, không nhìn dòng sau mình; trình tự rẽ trái qua dòng trên đường một chiều và vị trí chờ đúng; và cuối cùng là cách đi trong giờ cao điểm và buổi tối, khi hàng xe đỗ dài hơn, khe xe hẹp hơn, và các ngõ không đèn trở thành những mồm tối không đoán được. Kết lại bằng một quy tắc đảo chiều lưu ý: trên đường một chiều, phần đầu của mình vẫn nhìn về trước, nhưng phần cảnh giác phải rải về hai bên — vì dòng xe không còn đánh mình từ phía trước nữa, nó đánh mình từ bên cạnh.',
  quickAnswer: 'Trả lời ngắn: trên đường một chiều, chọn làn theo mục đích — đi ngắn hoặc sắp rẽ vào ngõ thì bám làn trong cho chắc, đi xa và thẳng thì làn giữa hoặc ngoài, nhưng tuyệt đối không lượn sát mép ngoài nơi xe đỗ, vì cửa mở và ngõ đẻ đều nằm ở mép đó. Đọc hàng xe đỗ như đọc một bức tường có cửa: xe nào có người ngồi trong, gương gập lệch, đèn trần bật, hoặc bánh trước xoay — đó là cửa sắp mở, chậm lại hoặc kéo ra khỏi mép. Người đi bộ trên đường một chiều hay băng giữa khe hai xe vì họ chỉ canh dòng xe cùng chiều với mình — vì vậy khi thấy hai xe phía trước đang bít tầm nhìn của mình, hạ sẵn tốc độ và chờ khe mở. Rẽ trái qua dòng: không cắt góc từ làn trong, mà rời sớm về phía vạch phân làn, xi nhan từ xa, nhường dòng trước rồi mới cắt — chấp nhận chờ một nhịp chứ đừng chen xiên qua hai làn. Buổi tối, mọi miệng ngõ không đèn đều coi như có xe lao ra: giảm nhẹ, nghiêng người nhìn vào, và luôn giữ một khe thoát về phía làn trong.',
  keyPoints: [
    'Đường một chiều không có xe ngược chiều nhưng đầy rủi ro từ hai bên: cửa xe đỗ mở, ngõ đẻ ra, và người đi bộ băng giữa khe xe — phần cảnh giác phải rải về hai bên.',
    'Chọn làn theo mục đích: bám làn trong khi đi ngắn hoặc chuẩn bị rẽ, giữ làn giữa hoặc ngoài khi đi thẳng xa, nhưng không lượn sát mép xe đỗ.',
    'Đọc hàng xe đỗ như đọc một bức tường có cửa: người ngồi trong xe, gương gập lệch, đèn trần bật, bánh trước xoay — tín hiệu cửa sắp mở, chậm lại hoặc kéo khỏi mép.',
    'Người đi bộ băng giữa khe hai xe vì họ chỉ canh dòng xe cùng chiều — khi hai xe phía trước bít tầm nhìn, hạ sẵn tốc độ chờ khe mở, không giữ nguyên tốc độ bấm khe.',
    'Rẽ trái qua dòng trên đường một chiều: rời sớm về phía vạch, xi nhan từ xa, nhường dòng rồi mới cắt — không cắt góc từ làn trong, không chen xiên hai làn một lượt.',
    'Buổi tối, mọi miệng ngõ không đèn đều coi như có xe lao ra: giảm nhẹ, nhìn vào khe tối, và luôn giữ một khe thoát về phía làn trong.',
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-10-02',
  updated: '2026-10-02',
  entities: ['đường một chiều', 'làn đường', 'xe đỗ', 'cửa xe mở', 'ngõ nhỏ', 'vạch phân làn'],
  keywords: ['đi xe máy đường một chiều', 'chọn làn an toàn', 'né cửa xe mở', 'rẽ trái đường một chiều', 'cửa xe đỗ mở', 'khe hở giữa các xe'],
  sections: [
    {
      h2: 'Vì sao đường một chiều không bớt rủi ro mà chỉ đổi dạng rủi ro',
      html: `<p>Cảm giác an toàn trên đường một chiều là thật nhưng chỉ đúng một nửa: đúng, vì không còn xe ngược chiều lao tới, không còn những cuộc vượt chéo mặt, và nhịp dòng xe đồng đều hơn. Sai, vì cái giá của sự đó là mọi thứ khác trên đường đều tăng hoạt động theo: hàng xe đỗ dài hơn và dày hơn do dòng xe không bị cắt đôi, các ngõ nhỏ đẻ xe ra liên tục vì xe trong ngõ chỉ cần canh một phía, người đi bộ băng đường thoải mái hơn vì chỉ nhìn một dòng, và cửa nhà, cửa quán mở thẳng ra mép xe chạy. Bớt một nguồn rủi ro to, nhưng dồn rủi ro vào hai bên mép đường — nơi trước nay vẫn là vùng hoạt động của xe máy.</p>
<p>Cái bẫy tâm lý ở chỗ dòng xe đồng đều khiến người lái thả lỏng: không cần canh xe ngược, ánh nhìn dồn về lưng xe phía trước, và dần dần tốc độ tự vọt lên theo dòng. Trên đường hai chiều, một người lái thả lỏng thường bị đánh thức bởi xe ngược chiều lượn ra; trên đường một chiều, không có gì đánh thức — cho tới khi một cánh cửa mở, một chiếc xe từ ngõ ló ra, hoặc một người băng giữa khe hai xe. Các vụ va trên đường một chiều vì thế hay có chung một câu chuyện: tốc độ hơi nhanh so với mép đường, và ánh nhìn mải về phía trước.</p>
<p>Vì thế nguyên tắc tổng cho cả bài viết này là đảo sự cảnh giác: phần đầu xe vẫn nhìn về trước để canh dòng, nhưng phần chú ý của người lái phải rải đều về hai bên — đặc biệt mép ngoài nơi xe đỗ, và mép trong nơi các ngõ đẻ ra. Trên đường hai chiều, ai cũng hiểu mép đường là chỗ nguy hiểm; trên đường một chiều, cảm giác dễ đi khiến người ta quên rằng mép đường vẫn đầy những thứ bất động chực chờ trở nên di động: cánh cửa, bánh xe trong ngõ, và đôi chân người băng đường.</p>`,
    },
    {
      h2: 'Chọn làn trên đường một chiều: làn trong, làn giữa, làn ngoài',
      html: `<p>Đường một chiều nhiều làn cho phép một lựa chọn mà đường hai chiều không có: đi thẳng dài hàng chục phút mà không đổi làn. Nhưng đúng lựa chọn làn từ đầu tiết kiệm cả chục lần đổi làn rủi ro. Nguyên tắc chọn: đi ngắn, sắp rẽ vào ngõ, hoặc mới ra từ một ngõ — bám làn trong, làn sát mép vỉa hè nhưng không sát xe đỗ; đi thẳng xa — làn giữa, nơi dòng xe ổn định nhất và mình có biên độ né cả hai phía; chỉ dùng làn ngoài khi vượt, và dùng xong về lại — không ở lâu, vì làn ngoài là làn của cửa mở, của miệng ngõ, và của mọi xe rẽ phải bất ngờ.</p>
<p>Mép ngoài của làn ngoài là vùng cần nói kỹ, vì đó là nơi xe máy hay đi nhất và cũng là nơi hậu quả gắn chặt nhất: cửa xe đỗ mở ra một cánh tay là đủ hất một xe máy đang băng ngang, và tốc độ trong cú hất không cần cao — va ở mép là va vào cánh cửa thép đúng điểm người lái và người ngồi sau. Khi buộc phải đi sát hàng xe đỗ, hãy giảm tốc xuống mức đi được dừng lại trong khoảng một hai thân xe, và nghiêng tầm nhìn để quét các khe giữa các xe — khe nào tối và sâu thì coi như có người đang chuẩn bị bước ra.</p>
<p>Làn trong cũng có rủi ro riêng của nó: các ngõ nhỏ đẻ xe ra, và xe từ ngõ luôn nhô đầu ra trước khi ngó — người trong ngõ chỉ canh được một dòng, và dòng họ canh là dòng gần họ nhất, không phải làn mình đang chạy. Vì thế khi bám làn trong, giữ thói quen liếc vào mỗi miệng ngõ: một cái nghiêng đầu nhỏ về phía ngõ tối cho mình nhìn sâu thêm vài mét, và tốc độ ở mức phanh được nếu một bánh xe đang ló ra. Chọn làn không phải chọn một lần rồi giữ mãi — mà là chọn theo từng đoạn: đoạn có hàng xe đỗ dài thì về giữa, đoạn ngõ dày thì nới khỏi mép, đoạn thoáng mới đi đều tốc độ.</p>`,
    },
    {
      h2: 'Đọc hàng xe đỗ và né cú mở cửa vô tình',
      html: `<p>Hàng xe đỗ trên đường một chiều là một bức tường có cửa, và cửa của tường đó mở theo quy luật đọc được. Các tín hiệu báo một cánh cửa sắp mở: có người ngồi ghế trên và tay họ đang khum về phía tay nắm cửa; gương ngoài bị gập lệch hoặc ngả về phía người xuống; đèn trong xe bật, nhất là đèn trần; bánh trước hơi xoay hoặc xe tự hạ xương chìm xuống một bên — dấu hiệu có người vừa đè trọng lượng lên mép xe; và tiếng chìa khóa, tiếng nói chuyện vọng ra từ khe cửa. Không cần nhìn rõ từng chi tiết ở tốc độ chạy — chỉ cần một tín hiệu trong số đó bắt mắt là hạ tốc hoặc kéo khỏi mép.</p>
<p>Khoảng cách né cửa không cần những con số lớn: một cánh cửa mở hết vươn ra khoảng một mét, nên đi cách mép xe đỗ trên một mét rưỡi là đủ sống sót ở tốc độ phố; nếu hàng xe đỗ chật mà khe đi hẹp hơn, trao đổi bằng tốc độ — giảm xuống mức mà nếu cửa mở cũng chỉ là cú gờ tay lái, không phải cú hất ngã. Quy tắc đổi giữa khoảng cách và tốc độ này là nguyên tắc lõi khi luồn qua các đoạn phố một chiều chật xe: không bao giờ có được cả khoảng cách rộng lẫn tốc độ cao trong cùng một khe hẹp, phải chọn một trong hai.</p>
<p>Có một kiểu cửa mở còn nguy hiểm hơn cửa xe con: cửa xe tải và xe buýt. Cửa xe tải cao và rộng, mở ra chiếm gần trọn khe giữa xe và mép; cửa xe buýt mở thẳng xuống làn ngoài, và hành khách xuống xe buýt luôn băng ra phía sau xe buýt — tức là lao thẳng vào vệt bánh xe mình nếu mình đang vượt xe buýt đang đỗ. Vì thế gặp xe buýt đang dừng ở đường một chiều, chờ phía sau cho tới khi cửa buýt khép lại hoặc hành khách đã lên hết: cú băng sau xe buýt của người xuống xe là một trong những va quen thuộc nhất trên đường phố, và nó xảy ra ở đúng khe mà kẻ vượt xe buýt đang băng.</p>`,
    },
    {
      h2: 'Người đi bộ băng giữa khe xe và cách đi trong giờ cao điểm',
      html: `<p>Trên đường một chiều, người đi bộ băng đường theo một logic riêng: họ canh dòng xe cùng chiều với mình, tính được tốc độ và khoảng hở, rồi băng — và họ gần như không tính tới xe máy đang băng khe giữa hai xe, vì trong mắt người băng, xe máy trong khe là thứ bị hai xe hai bên che mất. Kết quả là người băng và người luồn khe đều không nhìn thấy nhau, và điểm giao nhau là đúng chỗ hai xe đang chạy song song. Kỹ năng đối ứng: khi hai xe phía trước đang bít tầm nhìn hai bên của mình, hạ sẵn tốc độ và không bấm theo khe — đi chậm hơn dòng một nhịp, để nếu người băng nhô ra từ khe, khoảng cách phanh của mình là của xe chậm chứ không phải xe nhanh.</p>
<p>Giờ cao điểm trên đường một chiều còn thêm một lớp: hàng xe đỗ biến thành hàng xe máy dọc mép, khe di chuyển hẹp lại, và dòng xe dao động nhịp tăng giặt. Trong thế đó, quy tắc thứ nhất là buông ham vượt: trong dòng chật, chỗ vượt được đổi liên tục và mỗi lần chen là một lần tương tác; quy tắc thứ hai là giữ biên độ hai bên đều — đừng ôm sát mép xe đỗ bên này để né dòng bên kia, mà chọn vệt đi cân giữa khe, vì rủi ro cửa mở bên ngoài và rủi ro bị bóp bên trong đều giảm khi mình không sát cả hai mép.</p>
<p>Cũng cần nói thẳng về một thói quen phổ biến: leo lề và đi trên vỉa hè để né dòng. Ngoài việc vi phạm quy định và gây rủi ro cho người đi bộ, leo lề trên đường một chiều còn đẩy mình vào đúng miệng các ngõ, cửa quán, và hàng xe máy đỗ trên lề — tức là tập trung cả ba rủi ro của mép đường vào một vệt đi. Dòng bên dưới dù chậm vẫn có nhịp và có thể đoán; mép lề là bất ngờ thuần túy. Giữ vệt xe của mình trong làn, đổi tốc độ thay vì đổi chỗ, là cách đi giờ cao điểm vừa tới nơi vừa không tự may rủi ro thêm.</p>`,
    },
    {
      h2: 'Rẽ trái và vào ngõ trên đường một chiều: nhường dòng trước rồi mới cắt',
      html: `<p>Rẽ trái trên đường một chiều là một cuộc cắt qua cả dòng xe đang chạy — và cũng là một trong những điểm yếu không may hay bị đối xử hời hợt nhất: nhiều người rẽ trái bằng cách chéo dần từ làn trong, cắt góc qua hai ba làn trong vài giây, và tin rằng xi nhan là đủ để dòng xe phía sau nhường. Thực tế dòng xe không nhường vì được xin — dòng xe nhường vì bị chặn: xe rẽ trái an toàn là xe rời sớm về phía vạch phân làn bên trái, xi nhan từ xa, và chờ nhịp dòng đứt ra rồi mới cắt qua từng làn, chứ không phải chéo một lượt qua tất cả.</p>
<p>Vị trí chờ đúng cũng quan trọng: dừng ngang hàng chờ không phải ngay góc ngõ, mà dịch về trước góc ngõ một khoảng — để khi mình chờ, xe phía sau vẫn thấy mình từ sớm và không bị bất ngờ bởi một xe đứng giữa làn; và khi cắt qua, mình nhìn được dòng phía bên kia của ngõ trước khi lọt vào. Không bao giờ chờ trong vùng mù giữa hai xe: xe rẽ trái đứng chờ ở khe giữa hai xe tải là tự đặt mình vào chỗ cả hai bên đều không nhìn thấy. Chờ nhịp ở mép làn, nơi mọi dòng xe nhìn thấy mình, là cách duy nhất để việc chờ không tự tạo thêm rủi ro.</p>
<p>Vào ngõ nhỏ cũng theo cùng một trình tự thu nhỏ: xi nhan, giảm tốc từ xa, nghiêng người ngó vào ngõ xem có xe đang lao ra không, và chỉ rẽ khi cái đầu xe đã ngó trọn đường vào. Cú rẽ phải vào ngõ trên đường một chiều tưởng nhẹ vì không cắt dòng, nhưng nó có một rủi ro riêng: xe máy phía sau nhìn thấy mình giảm tốc từ xa thì định vượt phải — vượt mình ở bên phải đúng lúc mình rẽ phải. Vì thế rẽ phải vào ngõ cũng cần xi nhan sớm thật sự và giữ làn thẳng cho tới điểm rẽ, không rời mép sớm về phía ngõ: hành vi đoán trước được của mình chính là hàng rào an toàn của mình.</p>`,
    },
    {
      h2: 'Buổi tối trên đường một chiều: mồm ngõ tối và đèn xe sau',
      html: `<p>Buổi tối, đường một chiều đổi tính chất ở một điểm đáng kể: mọi miệng ngõ không đèn trở thành mồm tối — xe từ ngõ lao ra với đèn phanh hoặc đèn cốt mờ tắt, và người lái trên đường không nhìn thấy chúng cho tới khi cách vài mét. Đối ứng là ba thói quen: giảm nhẹ tốc độ so với ban ngày trên cùng đoạn; nghiêng người nhìn vào từng khe tối thay vì chỉ phóng tầm nhìn dọc đường; và luôn giữ khe thoát về phía làn trong, để nếu một xe lao ra từ ngõ, mình có chỗ né về bên kia thay vì phanh chết chờ đụng.</p>
<p>Đèn của xe phía sau cũng là một nguồn tin đáng khai thác: đèn phanh bật ở hàng xe phía trước là tin có chướng ngại hoặc người băng; đèn xi nhan nháy ở một xe phía trước là tin nó sắp cắt dòng — và trên đường một chiều, xe xi nhan trái ban đêm gần như chắc chắn sắp rẽ trái qua dòng, tức là dòng mình đang đi sắp bị chặn ngang. Đọc đèn thay vì đọc khối xe là cách thấy sớm hơn một hai giây — và một hai giây ở tốc độ phố là vài thân xe, tức đúng phần biên độ cần để xử lý từ tốn.</p>
<p>Cuối cùng, một thói quen nhỏ đáng hình thành cho đêm: hạ ánh nhìn xuống mặt đường ở những đoạn đèn đường thưa. Vệt sáng của đèn xe trong ngõ phản chiếu lên mặt nhựa trước khi cái xe ló ra — một vệt sáng di động trên mặt đường gần miệng ngõ là tín hiệu sớm nhất của xe đang ra. Kỹ năng đọc phản chiếu là kỹ năng mọn nhưng giá trị của người đi phố đêm: nó đổi một cú bất ngờ toàn phần thành một cú bất ngờ mình đã thấy từ mười mét.</p>`,
    },
  ],
  checklist: [
    'Lên đường một chiều: chọn làn theo mục đích — làn trong khi đi ngắn hoặc sắp rẽ ngõ, làn giữa khi đi thẳng xa, không ở lâu làn ngoài.',
    'Đi qua hàng xe đỗ: giảm tốc, quét các khe giữa các xe, và né mép trên một mét rưỡi; thấy tín hiệu cửa sắp mở thì kéo khỏi mép.',
    'Hai xe phía trước bít tầm nhìn: hạ tốc, không bấm khe — người băng đường không nhìn thấy xe máy trong khe và ngược lại.',
    'Rẽ trái: rời sớm về vạch, xi nhan từ xa, chờ nhịp đứt dòng rồi cắt từng làn — không chéo góc qua nhiều làn một lượt.',
    'Ban đêm: giảm nhẹ, nghiêng nhìn vào miệng ngõ tối, giữ khe thoát về làn trong, và đọc vệt sáng phản chiếu của xe trong ngõ.',
  ],
  steps: [
    { title: 'Chọn làn theo mục đích chuyến đi', detail: 'Đi ngắn hoặc sắp vào ngõ bám làn trong; đi thẳng xa giữ làn giữa; chỉ dùng làn ngoài để vượt rồi về lại — không lượn sát mép xe đỗ nơi cửa mở và ngõ đẻ ra.' },
    { title: 'Đọc mép và hàng xe đỗ', detail: 'Quét tín hiệu cửa sắp mở: người ngồi trong xe, gương gập lệch, đèn trần bật, bánh trước xoay; khe nào tối và sâu coi như có người — đổi khoảng cách bằng tốc độ khi khe hẹp.' },
    { title: 'Giữ nhịp trong dòng và qua khe mù', detail: 'Khi hai xe phía trước bít tầm nhìn, hạ tốc một nhịp so với dòng và không vượt khe; đọc đèn phanh và xi nhan của hàng xe phía trước làm tin sớm.' },
    { title: 'Rẽ trái và vào ngõ đúng trình tự', detail: 'Rời sớm về vạch phân làn, xi nhan từ xa, chờ dòng đứt rồi cắt từng làn; vào ngõ nhỏ thì ngó trọn đường vào trước khi rẽ, không chờ trong vùng mù giữa hai xe.' },
  ],
  warnings: [
    'Không băng nhanh qua khe giữa xe buýt đang mở cửa — người xuống xe băng ra sau xe buýt đúng lúc kẻ vượt đang đi qua, đây là điểm va quen thuộc nhất trên phố một chiều.',
    'Không coi xi nhan là thứ phép màu bắt dòng nhường: xi nhan là lời xin, vị trí chờ đúng ở mép làn và kiên nhẫn nhịp đứt dòng mới là thứ ngăn va.',
    'Không rẽ trái chéo góc từ làn trong qua hai ba làn một lượt — mỗi làn bị cắt là một dòng không nhìn thấy mình, cắt từng làn sau khi nhường dòng.',
    'Không leo lề đi vỉa hè để né dòng: tự đưa mình vào đúng tập hợp miệng ngõ, cửa quán và hàng xe máy đỗ — rủi ro nhiều hơn dòng xe chật bên dưới.',
  ],
  notes: [
    'Rủi ro xe ngược chiều vẫn tồn tại ở dạng hi hữu: xe đi sai chiều trên đường một chiều — cách xử lý tình huống gặp xe chạy ngược chiều có trong bài gặp xe chạy ngược chiều, hai bài dùng kèm cho đủ góc nhìn.',
    'Các quy tắc ưu tiên khi cắt dòng và nhường dòng tại ngã tư được trình bày kỹ hơn trong bài kỹ thuật qua ngã tư và quy tắc ưu tiên — phần rẽ trái ở đây là phần áp dụng riêng cho đường một chiều.',
  ],
  references: [
    { title: 'Đi xe máy gặp xe chạy ngược chiều: xử lý', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/di-xe-may-gap-xe-chay-nguoc-chieu-xu-ly/' },
    { title: 'Kỹ thuật qua ngã tư và quy tắc ưu tiên', url: 'https://thuexemayhanoi.github.io/total/learn/ky-thuat-lai-xe/ky-thuat-qua-nga-tu-va-quy-tac-uu-tien/' },
  ],
  related: [
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'di-xe-may-gap-xe-chay-nguoc-chieu-xu-ly',
    'ky-thuat-vuot-xe-an-toan',
    'ky-thuat-di-xe-may-trong-gio-lon',
  ],
};
