// AI WIKI TOTAL — bài mở rộng cụm /learn/ky-thuat-lai-xe/: kỹ thuật vượt xe an toàn (slot S00073)
'use strict';

module.exports = {
  slug: 'ky-thuat-vuot-xe-an-toan',
  title: 'Kỹ thuật vượt xe an toàn',
  seoTitle: 'Kỹ thuật vượt xe an toàn đúng tình huống',
  metaDescription: 'Vượt xe an toàn cần quan sát trước – sau, chọn đúng đoạn đường thông thoáng, báo hiệu sớm và quay về làn đúng lúc. Bài viết hướng dẫn từng bước vượt xe.',
  summary: 'Vượt xe là thao tác bình thường nhất trên mọi cung đường, nhưng cũng là thao tác chứa đựng toàn bộ các yếu tố nguy hiểm của giao thông: đi vào làn ngược chiều, tăng tốc, cắt quãm đường quan sát bị che khuất và khoảng thời gian không có lối thoát nếu tình huống đổi bất ngờ. Bài viết này chia thao tác vượt thành bốn giai đoạn rõ ràng: đánh giá — nhìn trước xem đoạn đường phía sau xe định vượt có đủ dài và thông thoáng, nhìn sau qua gương xem có xe nào đang vượt mình không; báo hiệu — mở xi nhan sớm để cả xe phía trước lẫn xe phía sau đều đoán được ý định; thực hiện — kéo ga dứt khoát, giữ khoảng bên, không vượt nửa chừng rồi bỏ; và trở về — về đúng làn khi thấy cả xe vừa vượt trong gương, không ép xe bị vượt phải phanh. Bài viết cũng đi qua các tình huống đặc thù: vượt xe tải và xe khách có điểm mù lớn, vượt xe máy trên đường hẹp, vượt ở đường đôi có vạch phân làn, và những chỗ tuyệt đối không vượt như trước ngã tư, trước đỉnh dốc, đường cong tầm nhìn che khuất, gần vạch người đi bộ và khi trời mưa tầm nhìn kém. Mỗi quy tắc đều được giải thích bằng lý do an toàn cụ thể để người lái tự quyết được khi nào vượt được và khi nào kiềm chế.',
  quickAnswer: 'Trả lời ngắn: vượt xe an toàn là một quyết định bốn bước. Một, nhìn trước: đoạn đường sau xe định vượt phải thẳng và thông thoáng đủ dài để hoàn tất trong vài giây — không vượt khi sắp tới ngã tư, đỉnh dốc, cua gắt, vạch người đi bộ. Hai, nhìn sau qua gương: chắc chắn không có xe nào đang vượt mình hoặc lao tới từ sau. Ba, báo hiệu và thực hiện dứt khoát: mở xi nhan trái, kéo ga qua nhanh, giữ khoảng cách bên với xe bị vượt, không vượt nửa chừng rồi chững lại sát bánh xe kia. Bốn, trở về: khi thấy toàn bộ xe vừa vượt hiện trong gương thì mở xi nhan phải và về làn cũ với khoảng cách an toàn, không ép xe bị vượt phanh. Hai quy tắc vàng: chỉ vượt khi toàn bộ thao tác làm được mà không khiến xe khác phải phanh hay né mình; và khi còn chút nghi ngờ thì không vượt — năm giây chậm hơn không đáng giá bằng một tình huống đối đầu. Vượt xe tải, xe khách phải nhớ điểm mù của chúng to gấp nhiều lần xe máy: nếu không thấy gương của tài xế thì tài xế không thấy mình.',
  keyPoints: [
    'Nhìn trước và sau trước khi vượt: đoạn đường thông thoáng đủ dài và không xe nào đang vượt từ phía sau.',
    'Báo hiệu xi nhan sớm, thực hiện dứt khoát — vượt nửa chừng rồi chững lại là thế nguy hiểm nhất.',
    'Về làn khi thấy cả xe vừa vượt trong gương, không ép xe bị vượt phải phanh hay né.',
    'Tuyệt đối không vượt trước ngã tư, đỉnh dốc, cua che tầm nhìn, vạch người đi bộ và trường học.',
    'Vượt xe tải, xe khách: né điểm mù, nhìn thấy gương tài xế trước khi vượt, không kéo dài bên hông xe dài.',
    'Còn nghi ngờ thì không vượt: thao tác an toàn là thao tác không khiến xe khác phải xử lý vì mình.',
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['vượt xe', 'làn ngược chiều', 'điểm mù', 'xi nhan', 'gương chiếu hậu', 'tầm nhìn thông thoáng'],
  keywords: ['kỹ thuật vượt xe', 'vượt xe an toàn', 'quy tắc vượt xe', 'vượt xe tải xe khách', 'điểm mù xe tải', 'khi nào không được vượt xe'],
  sections: [
    {
      h2: 'Vượt xe là thao tác rủi ro cao, dù làm mỗi ngày',
      html: `<p>Trên mọi thao tác lái, vượt xe là thao tác duy nhất đưa người lái rời khỏi làn của mình sang làn ngược chiều — dù chỉ vài giây. Vài giây đó chứa toàn bộ phần rủi ro của giao thông: nếu có xe từ hướng ngược tới trong lúc mình đang bên hông xe bị vượt thì không còn lối thoát, vì hai bên đều là xe và đường cùng lúc.</p>
<p>Vì rủi ro nằm ở cấu trúc của thao tác chứ không ở trình độ, cách giảm rủi ro không phải lái nhanh hơn hay phản xạ tốt hơn, mà là sàng lọc kỹ hơn trước khi bắt đầu: đa số các tình huống vượt nguy hiểm đều có thể nhận ra là không nên vượt ngay từ trước khi kéo ga — chỉ cần nhìn trước, nhìn sau và hỏi mình một câu: thao tác này có bắt buộc xe khác phải né hoặc phanh vì mình không.</p>
<p>Thói quen dùng câu hỏi đó làm bộ lọc tạo ra sự khác biệt lớn giữa người đi đường trường nhiều mà chưa từng gặp sự cố với người hay vượt vội: người vượt vội tiết kiệm được vài giây mỗi lần vượt nhưng thỉnh thoảng trả giá bằng cả một tình huống đối đầu. Bài viết này viết các bước sàng lọc và thực hiện thành trình tự cụ thể, để câu hỏi kia được trả lời bằng thao tác chứ không bằng may mắn.</p>`,
    },
    {
      h2: 'Bước 1 — 2: đánh giá trước và sau, chọn đoạn đường đúng',
      html: `<p>Mọi thao tác vượt an toàn bắt đầu từ hai cái nhìn. Nhìn trước, qua vai trái của xe định vượt và qua khe hở giữa xe đó với đường: đoạn đường mình sắp chiếm phải thẳng, bằng và thông thoáng đủ dài — nghĩa là nhìn thấy đủ xa để một xe ngược chiều nếu có cũng còn cách cả quãng; đoạn có dốc, cua, cây lớn che tầm nhìn thì coi như chưa đủ thông tin để vượt.</p>
<p>Nhìn sau qua gương: có xe nào đang kéo ra để vượt mình không, có xe máy hoặc ô tô lao tới từ sau với tốc độ nhanh không. Đây là lỗi dễ quên nhất của người đi xe máy: nhìn trước kỹ nhưng không nhìn sau, rồi hai xe cùng vượt một xe tải cùng lúc và va nhau giữa làn ngược. Gương vì thế phải chỉnh đúng trước chuyến đi — một cái gương lệch làm mất nửa thông tin của bước này.</p>
<p>Kèm theo hai cái nhìn là việc đọc tình huống của chính xe định vượt: nó có xi nhan chuẩn bị rẽ không, có nhích lệch làn như sắp lượn không, có phanh nhẹ như sắp dừng đón khách không. Đa số va chạm khi vượt xe máy là xe bị vượt đổi hướng bất ngờ — nhìn xi nhan và dáng lái của người trước khi quyết định, và nếu không thấy rõ thì chờ.</p>`,
    },
    {
      h2: 'Bước 3 — 4: thực hiện dứt khoát và trở về đúng cách',
      html: `<p>Khi cả hai cái nhìn đều xanh, thực hiện dứt khoát. Mở xi nhan trái sớm — cho xe sau biết mình sắp ra, và với hy vọng xe trước cũng thấy qua gương. Kéo ga về không gian đã chọn, vượt với tốc độ chênh vừa đủ để thao tác ngắn nhưng không đua: chênh tốc độ quá nhỏ khiến mình nằm bên hông xe kia quá lâu, quá lớn khiến khó xử lý nếu tình huống đổi.</p>
<p>Khi đã ngang hoặc vượt đầu xe, tiếp tục giữ ga cho tới khi toàn bộ xe vừa vượt hiện rõ trong gương — mốc duy nhất đáng tin để về làn, vì về sớm là cắt mặt xe vừa vượt và ép nó phanh. Mở xi nhan phải, lượn về làn với khoảng cách thoáng, tắt xi nhan, và quan sát lại nhịp đường: vừa xong một thao tác, mắt dễ lơ là đúng lúc xe sau mình cũng đang muốn vượt.</p>
<p>Hai lỗi của khâu thực hiện cần gọi tên. Vượt nửa chừng: kéo ra được rồi chững lại, đi song song với xe kia hàng chục mét — đó là vị trí xấu nhất của đường vì hai xe cùng khóa nhau ở hai làn. Và vượt bằng cảm giác thay vì bằng mốc gương: người lái quen đường hay về làn theo ước lượng, thi thoảng ước lượng sai vài mét — vài mét đó là cú phanh gấp của người bị vượt.</p>`,
    },
    {
      h2: 'Vượt xe tải, xe khách và các phương tiện có điểm mù lớn',
      html: `<p>Xe tải và xe khách không chỉ đi chậm mà còn che tầm nhìn và có điểm mù lớn: tài xế không thấy xe máy ở sát bên hông, ngay sau góc cabin hoặc sát lưng xe. Vượt chúng đòi hỏi thêm hai nguyên tắc: nhìn thấy gương của tài xế trước khi vượt — nếu mình không thấy gương thì tài xế không thấy mình — và không đi lững thững bên hông xe dài.</p>
<p>Trình tự vượt xe tải an toàn: lùi lại xa hơn mức bình thường để có tầm nhìn cả hai phía, xi nhan, tăng ga vượt dứt khoát cả chiều dài xe trong một mạch, không dừng giữa hông xe tại điểm mù, và chỉ lượn về sau khi xa đầu xe một khoảng rõ ràng. Đường hẹp chỉ một làn mỗi chiều thì vượt xe tải phải tính thêm quãng đường dài hơn nhiều — nếu thấy xe ngược chiều từ xa mà quãng thông thoáng không đủ cho cả thao tác thì chờ, xe tải không phải đối tượng để cược thời gian.</p>
<p>Một chi tiết đáng nhớ với xe khách: nó dừng đón khách mọi lúc và không phải lần nào cũng xi nhan chuẩn — nếu xe khách đang chậm lại không rõ lý do, tuyệt đối không vượt bên phải, vì cửa mở và hành khách xuống đường ở đúng làn đó. Với xe ba gác, xe chở hàng vượt tầm, chờ chúng về làn trước khi vượt: hàng vượt tầm có thể nghiêng chiếm làn ngược lúc mình đang ở đó.</p>`,
    },
    {
      h2: 'Những chỗ và thời điểm tuyệt đối không vượt',
      html: `<p>Danh mục cấm vượt là phần quan trọng nhất của bài, vì nó là các tình huống mà rủi ro không phụ thuộc kỹ năng. Không vượt trước và trong ngã tư — nơi các dòng xe cắt nhau từ bốn hướng; không vượt trên hoặc gần đỉnh dốc — tầm nhìn bị mặt đường che, xe ngược chiều có thể xuất hiện từ sau đỉnh với tốc độ cao; không vượt trong và trước cua không nhìn thấy lối ra; không vượt gần vạch người đi bộ, cổng trường học và đoạn đông người đi bộ.</p>
<p>Không vượt khi mưa to, sương mù hoặc đêm tối tầm nhìn kém — mọi đánh giá khoảng cách và tốc độ đều sai nhiều hơn bình thường; không vượt khi đường ướt có vết bánh xe trơn — quãng phanh kéo dài khiến cả thao tác trở nên không kiểm soát nổi nếu cần dừng giữa chừng; không vượt ở đoạn đường đang sửa chữa, đường gồ ghề hoặc đường có vệt cát đá dăm — những bề mặt bắt lốp kém bất cứ lúc nào.</p>
<p>Cuối cùng, không vượt khi bản thân đang mệt mỏi, sau khi chạy dài hoặc trong lúc nóng nổi vì bị xe khác cắt mặt: vượt xe trong lúc đang buồn ngủ là vượt với một nửa khả năng quan sát, còn vượt trong lúc nóng giận thì chọn thời điểm tồi hơn mọi tình huống khách quan. Kỷ luật của người đi đường lâu năm không nằm ở chỗ vượt được nhiều xe, mà ở chỗ kiềm chế được đúng những lần không nên vượt.</p>`,
    },
    {
      h2: 'Tự đánh giá sau mỗi lần vượt: cách rèn thói quen',
      html: `<p>Người lái cải thiện kỹ năng vượt không bằng số lần vượt mà bằng chất lượng mỗi lần đánh giá. Cách rèn đơn giản: sau mỗi lần vượt trên đường trường, tự chấm một câu — thao tác đó có khiến bất kỳ xe nào phải phanh, né hoặc đổi hướng vì mình không? Nếu câu trả lời là có thì, dù thao tác diễn ra êm, thì đó là một lần vượt chưa đạt và cần xem lại khâu nào: nhìn sau thiếu, về làn sớm, hay chọn đoạn quá ngắn.</p>
<p>Bài tập cụ thể cho người mới: đếm số lần vượt trong một đoạn đường quen và thử giảm một nửa bằng cách chỉ vượt khi thực sự chậm đáng kể — ví dụ xe trước đi chậm hơn tốc độ dòng chảy chung. Bài tập này dạy thứ khó nhất của việc vượt: nhận ra đa số thao tác vượt hằng ngày chỉ tiết kiệm vài giây nhưng lấy đi một phần chú ý đáng kể của cả cung đường.</p>
<p>Và một nguyên tắc chốt lại toàn bộ: vượt xe là quyền được sử dụng khi mọi điều kiện cùng thuận — đường thông thoáng, tầm nhìn đủ, không xe nào đang vượt, xe định vượt đi ổn định. Thiếu một điều thì thao tác chuyển từ vượt sang đánh cược, và trên đường, mỗi ván cược đều có người trả bằng thứ đắt hơn vài giây.</p>`,
    },
  ],
  checklist: [
    'Trước khi vượt: nhìn trước lấy đoạn thông thoáng, nhìn sau qua gương xác nhận không ai đang vượt mình.',
    'Đọc xe định vượt: xi nhan, dáng lái, tốc độ — không vượt xe đang có dấu hiệu rẽ, lượn hay dừng.',
    'Thực hiện dứt khoát: xi nhan sớm, ga đều, không nằm dài bên hông xe, không vượt nửa chừng.',
    'Về làn khi thấy cả xe vừa vượt trong gương, mở xi nhan phải và giữ khoảng thoáng cho xe bị vượt.',
    'Vượt xe tải, xe khách: thấy gương tài xế trước khi ra, vượt dứt khoát cả chiều dài, không dừng tại điểm mù.',
    'Không vượt trước ngã tư, đỉnh dốc, cua che tầm nhìn, vạch người đi bộ, trường học và khi mưa tối tầm nhìn kém.',
  ],
  steps: [
    { title: 'Đánh giá hai đầu', detail: 'Nhìn trước qua khe hở xe định vượt: đoạn thẳng thông thoáng đủ dài; nhìn sau qua gương: không xe nào đang vượt hoặc lao tới từ sau.' },
    { title: 'Báo hiệu và ra hiệu', detail: 'Mở xi nhan trái sớm, giữ vị trí sau xe thêm một nhịp để xác nhận tình huống không đổi, rồi mới kéo ga ra.' },
    { title: 'Vượt dứt khoát', detail: 'Tăng tốc vừa đủ để vượt trong một mạch, giữ khoảng bên hông xe, không giảm ga giữa chừng dù nhìn thấy vạch gì đó phía trước.' },
    { title: 'Về làn an toàn', detail: 'Thấy toàn bộ xe vừa vượt trong gương thì xi nhan phải, lượn về với khoảng thoáng, tắt xi nhan và quét lại gương cho xe sau cũng muốn vượt.' },
  ],
  warnings: [
    'Không vượt khi bất kỳ xe nào phải phanh hoặc né vì mình — đó là ranh giới giữa vượt và đánh cược.',
    'Không nằm song song bên hông xe tải, xe khách: đó là vùng điểm mù của tài xế và vị trí không lối thoát.',
    'Không vượt bên phải xe khách đang chậm lại không rõ lý do: cửa mở và hành khách xuống đường ở làn đó.',
  ],
  notes: [
    'Điều chỉnh gương trước chuyến đi là một phần của thao tác vượt: một gương lệch làm mất nửa thông tin nhìn sau.',
    'Sau mỗi lần vượt, tự hỏi có xe nào phải xử lý vì mình không — trả lời có thì coi như một lần vượt chưa đạt, dù đã xong êm.',
  ],
  references: [
    'Các quy định về nơi cấm vượt và điều kiện vượt an toàn được quy định trong Luật Giao thông đường bộ của Việt Nam.',
    'Khái niệm điểm mù của xe tải và nguyên tắc nhìn thấy gương tài xế là nội dung cơ bản của kỹ thuật lái phòng vệ.',
  ],
  related: [
    'ky-thuat-phanh-khan-cap-xe-may',
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'ky-thuat-di-xe-may-ban-dem',
    'guong-chieu-hau-xe-may-cach-chinh-dung',
  ],
};
