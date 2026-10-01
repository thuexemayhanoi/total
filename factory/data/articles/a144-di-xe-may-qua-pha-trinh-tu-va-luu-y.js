// AI WIKI TOTAL — bài mở rộng cụm /guide/su-dung-xe/: đi xe máy qua phà: trình tự và lưu ý (slot S00144)
'use strict';

module.exports = {
  slug: 'di-xe-may-qua-pha-trinh-tu-va-luu-y',
  title: 'Đi xe máy qua phà: trình tự và lưu ý',
  seoTitle: 'Đi xe máy qua phà: trình tự và lưu ý an toàn',
  metaDescription: 'Qua phà bằng xe máy có trình tự riêng: mua vé, lên tàu, dựng xe chống giữa khi tàu lắc và xuống theo hiệu lệnh. Bài viết hướng dẫn từng bước cho người mới đi phà.',
  summary: 'Ở những vùng sông nước miền Tây và dọc các tuyến quốc lộ cắt qua sông lớn, phà vẫn là một mắt xích giao thông hằng ngày: sáng ngược chiều quê, chiều lại qua phà về chợ, và người đi xe máy thường là nhóm đông nhất trên mỗi chuyến. Nhìn người quen quá dễ — xe tấp vào lề, quẹt vé, đẩy xe lên mạn theo lượt — nhưng chuyến phà có những quy tắc riêng mà người không biết dễ bị rượt: khe hở giữa mạn tàu và bến, cách dựng xe chống lắc khi tàu chạy, vị trí đứng sao cho không bị kẹt giữa hai xe, và điều cần nhất — làm gì khi tàu giảm tốc và mọi người đổ dồn về mạn xuống sớm. Bài viết này đi theo đúng trình tự một chuyến phà: chuẩn bị trước khi tới bến (giấy tờ, vé, tài sản, xe đủ xăng và dây xích chắc), xếp hàng và lên tàu đúng cách (không tấp ngang, giữ khoảng với xe trước, đề nhẹ nhàng hoặc đẩy xe theo chỉ dẫn), dựng xe trên tàu (chống giữa, nghiêng theo chiều dao động, buộc ga rô nếu tàu lắc), đứng ở đâu và giữ gì trong suốt hành trình (tránh mép mạn, không đứng sau xe, giữ trẻ nhỏ trong tầm tay), và xuống tàu an toàn (đợi tới lượt, không nổ máy sớm trong khoang, tránh khe mạn-bến). Phần cuối là các tình huống đặc biệt: phà chở nhiều tầng, ngày mưa lớn và sóng, và câu hỏi thường gặp về vé, giá và thời gian chờ.',
  quickAnswer: 'Trả lời ngắn: qua phà bằng xe máy gồm năm bước chuẩn — mua vé tại quầy hoặc trạm, xếp hàng theo làn xe máy, lên tàu theo chỉ dẫn của nhân viên với máy để số không hoặc tắt máy đẩy nhẹ, dựng xe chống giữa bằng gác giữa thay vì nghiêng tựa lên xe khác, và đứng gần xe nhưng không đứng sau xe suốt chuyến. Ba điều quan trọng nhất: nhìn khe giữa mạn tàu và bến khi lên xuống — khoảng vài tấc nhưng nhiều xe lọt ga xuống đó; khi tàu lắc thì ghì nhẹ cổ xe và hơi nghiêng xe theo chiều lắc thay vì chống thẳng cứng; và khi tới bến đợi chiêng hoặc loa mời xuống, không nổ máy dồn. Trẻ nhỏ và người già nên lên xuống trước với người dắt hộ xe. Giữ xe khi tàu chạy: xe nghiêng tựa lẫn nhau theo lượt là cách trên phà dùng chung, nhưng buộc ga rô hoặc dây nhỏ cho chuyến sóng lớn. Mua vé và giữ biên lai; giá theo tuyến niêm yết tại quầy. Tần suất phà theo tuyến giờ giấc từng bến — chờ lâu thì tắt máy, không để xe nổ cả chục phút trong hàng.',
  keyPoints: [
    'Lên xuống tàu là khoảnh khắc nguy hiểm nhất: nhìn khe giữa mạn tàu và bến trước khi lăn bánh qua, nhiều xe lọt ga đúng chỗ đó.',
    'Dựng xe trên tàu bằng gác giữa, buộc ga rô nếu sóng lớn, và không nghiêng xe dựa lên xe người khác nếu chưa hỏi.',
    'Đứng gần xe nhưng không đứng sau xe: tàu lắc hoặc phanh đột ngột thì xe đổ về sau và đè đúng vị trí đó.',
    'Nghe chiêng hoặc loa của tàu và nhân viên bến làm dấu hiệu xuống, không nổ máy dồn trong khoang.',
    'Xếp hàng xe máy theo làn riêng, giữ khoảng với xe trước, và tuân theo chỉ dẫn đẩy hoặc đề nhẹ khi lên dốc mạn tàu.',
    'Ngày mưa và gió: chờ chuyến tiếp theo thay vì chen lên chuyến đầy, mặt mạn tàu ướt trơn và hàng xe chật dễ đổ dây chuyền.',
  ],
  category: 'guide',
  hub: 'su-dung-xe',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['bến phà', 'mạn tàu', 'gác giữa', 'vé phà', 'chiêng tàu', 'khe mạn bến'],
  keywords: ['đi phà bằng xe máy', 'quy trình đi phà xe máy', 'dựng xe trên phà', 'lên xuống tàu an toàn', 'đi phà lần đầu', 'xe máy qua sông'],
  sections: [
    {
      h2: 'Chuẩn bị trước khi tới bến phà',
      html: `<p>Một chuyến phà suôn sẻ bắt đầu ở lề đường trước bến: giảm tốc từ xa, bật xi nhan rẽ vào làn xếp hàng, và để ý biển phân làn — hầu hết bến phà lớn có làn riêng cho xe máy tách khỏi xe ô tô và xe tải, và ai rẽ nhầm làn ô tô sẽ bị điều hướng lại ra khỏi hàng mất lượt. Quan sát dòng xe đang xếp: hàng dài qua được mấy chuyến, và người cần kịp giờ có thể hỏi nhân viên bến xem chuyến kế tiếp còn chỗ không hay nên chuyển phương án khác.</p>
<p>Mua vé tại quầy hoặc trạm vé của bến trước khi lên tàu: tuyến phà có giá niêm yết công khai, và giữ biên lai tới khi xuống bến đối diện. Người đi quên mua hoặc mua trên tàu ở một số bến bị tính phụ thêm hoặc làm thủ tục phiền hơn — quy định từng bến khác nhau, nên thói quen an toàn là vé trong túi trước khi lăn tới mạn. Tài sản: điện thoại, ví và máy ảnh để vào túi kín hoặc túi áo trước ngực, vì trên tàu đông và chen lấn, còn khi hai tay đang ghì xe thì túi áo mông là chỗ dễ mất thứ nhất.</p>
<p>Về xe: kiểm tra nhanh dây xích, ga và phanh trước khi vào hàng — dừng máy giữa mạn tàu lúc lên là tình huống khó chịu nhất cho cả người lái lẫn cả hàng sau. Tắt máy khi xếp hàng chờ lâu, vừa để giữ bình yên cho cả dãy, vừa tiết kiệm xăng: hàng phà giờ cao điểm có khi chờ hai ba chuyến, và nổ máy đều đặn trong hàng là thói quen gây khó chịu cho mọi người xung quanh.</p>`,
    },
    {
      h2: 'Lên tàu: khoảnh khắc cần nhất của cả chuyến',
      html: `<p>Nghe hiệu lệnh của nhân viên bến: tàu căng dây neo và hạ dốc mạn là lúc được phép lên, và trình tự theo lượt từ đầu hàng. Khe giữa mép mạn tàu và mép bến — chỗ lăn bánh qua — hẹp chỉ vài tấc nhưng là điểm rớt ga, rớt ví và tụt cả bánh xe nếu nhìn lơ đãng. Kỹ thuật chuẩn: đi thẳng đều ga thấp, mắt nhìn thẳng qua khe về sàn tàu thay vì nhìn xuống khe, hai tay ghì nhẹ, và người mới hoặc chở hàng nặng nên có một chân bước kèm bước nhấn ga thật nhẹ thay vì để xe tự phóng.</p>
<p>Mán tàu ướt, rêu hoặc dầu là ba thứ làm bánh xe trượt ngay điểm lên: nhìn nhanh mặt mạn trước khi lăn qua, và nếu trơn thì nhờ người phía sau giữ đuôi xe. Xe số có thể để số hai nhẹ nhàng để lên; xe tay ga chỉ dùng ga vừa đủ — ga mạnh trên dốc mán ngắn khiến xe bật đầu và người phía sau không kịp. Một số bến yêu cầu tắt máy và đẩy xe lên: quy định đó ra vì mạn ngắn và mui tàu có thể chứa xăng hơi — tuân theo dù hàng dài, vì đẩy mười mấy mét rẻ hơn một cú cháy máy nhỏ giữa bến.</p>
<p>Trẻ nhỏ và người già lên trước cùng một người trợ giúp, người còn lại dắt xe lên sau: nếu để trẻ đứng một mình trên bến trong lúc mình đẩy xe giữa mạn là khoảng trống nguy hiểm khó quản nhất của cả trình tự. Vào tới sàn tàu thì đi tiếp vào sâu theo chỉ dẫn, không dừng ngang ở cửa mạn chắn lượt sau, và tìm vị trí dựng xe theo khu được phân.</p>`,
    },
    {
      h2: 'Dựng xe và đứng đúng chỗ trong suốt chuyến',
      html: `<p>Dựng xe trên tàu khác hẳn dựng ở bến: sàn tàu lắc liên tục theo sóng và theo dao động của chính tàu, nên xe chống nghiêng một bên bằng gác chân dễ trượt chân chống trên sàn kim loại ướt. Chuẩn an toàn là dựng đứng bằng gác giữa, bánh sau và bánh trước nằm trong một trục dọc theo tàu, và nếu buộc được ga rô hoặc dây mềm vào sườn tàu, sàn có điểm buộc thì làm luôn — cho chuyến sóng lớn, một sợi dây nhỏ giữ xe không đổ là bảo hiểm rẻ nhất trên tàu.</p>
<p>Xếp xen kẽ theo hướng nhân viên chỉ: xe nghiêng tựa lẫn nhau theo lượt là cách phổ biến trên phà đông, nhưng có một phép lịch sự ít ai nói: trước khi tựa mũi xe mình lên xe người khác, hỏi một câu hoặc gật đầu — người chủ xe cạnh có hàng hóa, có lốp non hoặc đơn giản không muốn dựng quá sẽ tự chỉnh lại. Cốp xe và khóa cổ khóa kỹ trước khi rời xe vào khu ngồi: hàng trên phà đông và chen, kể cả khi bến nhỏ quen thuộc.</p>
<p>Vị trí người: đứng gần xe trong tầm hai ba bước, nhưng không đứng ngay phía sau xe — tàu phanh hoặc lắc mạnh thì xe đổ về sau, và người đứng sau hứng trọn. Không đứng tựa lan can mạn khi tàu chạy, không ngồi mép mạn, và giữ trẻ nhỏ trong tầm tay suốt hành trình: trên tàu mọi thứ lắc theo cùng nhịp, và trẻ nhỏ không có cảm nhận về khoảng cách an toàn với mép. Có người say sóng thì ngồi giữa khoang, nhìn về một điểm xa trên bờ thay vì nhìn xuống mặt nước, và chuẩn bị sẵn túi nilon — chi tiết nhỏ nhưng cứu cả chuyến của người xung quanh.</p>`,
    },
    {
      h2: 'Xuống tàu và rời bến đối diện',
      html: `<p>Tín hiệu xuống là tiếng chiêng, loa hoặc nhân viên tàu mời theo lượt — và quy tắc đầu tiên: không xông xuống sớm. Người vội dồn về mạn khi tàu còn cách bến vài chục mét khiến hàng xe nghiêng đổ dây chuyền, và cũng là lúc khe mạn-bến chưa khít. Đợi tàu căng neo hẳn, mạn hạ và ghép khít vào bến, rồi theo lượt từ trong ra.</p>
<p>Khi tới lượt xe mình: gỡ dây nếu có buộc, dựng lại thẳng xe, và đề hoặc đẩy ra mán theo hướng nhân viên chỉ. Không nổ máy trong khoang kín giữa hàng xe để "lấy đà" — hơi xăng trong khoang cộng đông người là tổ hợp không ai muốn, và hầu hết bến quy định tắt máy cho tới khi ra khỏi mán. Lăn qua khe mạn-bến với cùng kỹ thuật lúc lên: mắt nhìn thẳng qua khe, ga nhẹ đều, và người chở hàng nặng hoặc chở người sau thì nhờ một tay giữ đuôi.</p>
<p>Rời bến: đi chậm theo làn ra, không vượt ngay tại cổng bến vì lối ra thường hẹp và hai chiều gặp nhau, và nếu cần dừng chỉnh lại đồ thì chạy hết ra khỏi khu bến rồi dừng vào lề. Người xuống phà vùng xa cần để ý giờ chuyến cuối về — niêm yết tại quầy vé, và chuyện lỡ chuyến cuối ở bến sông vắng là trải nghiệm dạy giá trị của việc nhìn bảng giờ từ sáng.</p>`,
    },
    {
      h2: 'Ngày mưa, gió và các tình huống đặc biệt',
      html: `<p>Mưa lớn làm mọi mặt phẳng trên tàu thành mặt trơn: mán lên trơn, sàn tàu trơn, và hàng xe chật trong khoang hở dễ đổ dây chuyền khi tàu lắc. Người lái khôn chọn chuyến sau: chờ thêm mười lăm phút tới chuyến thưa hơn luôn rẻ hơn một cú ngã giữa khoang đầy. Tàu dừng và neo đợi khi gió mạnh là chuyện thường của bến sông lớn — tin từ loa hoặc nhân viên luôn chính xác hơn phán đoán của người đang vội.</p>
<p>Phà nhiều tầng: xe máy thường xếp tầng hầm hoặc mạn sau tầng một, theo chỉ dẫn vẽ sẵn trên tường khoang; lối xe hẹp và dốc hơn, nên giữ khoảng xe trước lớn hơn và không dừng giữa dốc. Tàu chở kèm xe tải: xe máy luôn xếp khu riêng tách khỏi xe tải, và tuyệt đối không lách vào khe giữa hai xe tải — đó là khu bị ép khi tàu lắc và tài xế xe tải không nhìn thấy người hai bánh trong gương ở điểm đó.</p>
<p>Trẻ em, phụ nữ mang thai và người lớn tuổi: ưu tiên lên xuống khi nhân viên mời, đứng ngồi khu có mái che nếu tàu có, và người đi cùng phân công rõ ai giữ xe ai giữ người — chia đôi hai việc lớn nhất của chuyến phà, và chỉ cần một người quên nhiệm vụ là cả hai đều bị động. Chuyến phà an toàn không phải chuyến nhanh nhất, mà là chuyến mà mỗi bước đều có người phụ trách rõ ràng.</p>`,
    },
    {
      h2: 'Câu hỏi thường gặp của người đi phà lần đầu',
      html: `<p>Giá vé và cách mua: mỗi tuyến phà có bảng giá niêm yết tại quầy và thường tính theo lượt chiều, vé lẻ hoặc vé tháng cho người qua lại hằng ngày. Mua trước khi lên, giữ biên lai, và lưu ý một số bến thu phí bằng vé điện tử hoặc thẻ qua lượt — nhìn theo biển tại quầy, không có thì hỏi nhân viên một câu duy nhất "lấy vé ở đâu" là đủ.</p>
<p>Thời gian chờ và tần suất: bến lớn chạy theo khung giờ giấc cố định dán sẵn tại quầy; bến nhỏ chạy theo lượt đầy tàu, nên giờ cao điểm hàng dài là chuyện thường. Khoảng thời gian một chuyến đi phụ thuộc bến — có tuyến mười lăm phút, có tuyến gần một giờ — và người thông minh nhất là xem bảng giờ chuyến cuối về trước khi quyết định lịch trình chiều.</p>
<p>Nhóm câu hỏi về an toàn còn lại: sóng lớn tàu có chạy hay không là quyết định của thuyền trưởng, và lời mời xuống hoặc đợi của tàu luôn đúng hơn sự sốt ruột của hành khách; xe đổ trên tàu gây hư hỏng thì báo nhân viên tàu ngay để cùng ghi nhận tình huống; và mất vé sau khi mua thì quay lại quầy trình biên lai hoặc nhờ đối chiếu — mọi quy định loại này đều hỏi được ngay tại quầy, và câu hỏi trước bao giờ cũng rẻ hơn câu hỏi sau.</p>`,
    },
  ],
  checklist: [
    'Trước bến: vào đúng làn xe máy, mua vé và giữ biên lai, tắt máy khi xếp hàng chờ lâu.',
    'Lên tàu: nghe hiệu lệnh, đi đều ga nhẹ, mắt nhìn thẳng qua khe mạn-bến, nhờ người giữ đuôi xe nếu chở nặng.',
    'Dựng xe: gác giữa theo trục dọc tàu, hỏi trước khi tựa xe lên xe người khác, buộc ga rô cho chuyến sóng lớn.',
    'Suốt chuyến: đứng gần xe nhưng không sau xe, không tựa lan can mạn, trẻ nhỏ trong tầm tay, khóa cốp và khóa cổ.',
    'Xuống tàu: đợi chiêng hoặc loa mời theo lượt, không nổ máy trong khoang, lăn qua khe mạn-bến chậm đều.',
    'Rời bến: đi hết khu bến rồi mới dừng chỉnh đồ, và ghi nhớ giờ chuyến cuối về ngay từ sáng.',
  ],
  steps: [
    { title: 'Chuẩn bị và mua vé', detail: 'Giảm tốc từ xa vào làn xe máy, kiểm tra nhanh xích ga phanh, tắt máy khi xếp hàng, mua vé tại quầy và giữ biên lai, để tài sản nhỏ vào túi kín trước ngực.' },
    { title: 'Lên tàu theo hiệu lệnh', detail: 'Đợi nhân viên bến hiệu lệnh, theo lượt từ đầu hàng, đi đều ga nhẹ qua khe mạn-bến với mắt nhìn thẳng, nhờ người giữ đuôi nếu chở người hoặc hàng nặng, trẻ nhỏ lên trước cùng người trợ giúp.' },
    { title: 'Dựng xe và định vị trong chuyến', detail: 'Dựng đứng bằng gác giữa theo trục dọc tàu, gỡ dây khi có điểm buộc, hỏi trước khi tựa xe lên xe cạnh, đứng cách xe hai ba bước và không sau xe, giữ trẻ nhỏ trong tầm tay suốt hành trình.' },
    { title: 'Xuống tàu và rời bến', detail: 'Đợi chiêng hoặc loa mời và tàu căng neo khít, theo lượt từ trong ra, không nổ máy trong khoang, lăn chậm qua khe mạn, ra khỏi khu bến rồi mới dừng chỉnh đồ, và ghi giờ chuyến cuối về.' },
  ],
  warnings: [
    'Không xông về mạn xuống sớm khi tàu chưa khít bến — hàng xe dồn vào đúng lúc đó làm xe nghiêng đổ dây chuyền.',
    'Không đứng sau xe suốt chuyến: tàu lắc hoặc phanh đột ngột thì xe đổ về sau và đè đúng vị trí đó.',
    'Không nổ máy trong khoang tàu giữa hàng xe để lấy đà — dùng ga nhẹ hoặc đẩy theo chỉ dẫn nhân viên.',
  ],
  notes: [
    'Ngày mưa gió: mặt mạn và sàn tàu trơn, chọn chuyến thưa hơn thay vì chen chuyến đầy, và tàu dừng hành trình khi gió mạnh là quyết định của thuyền trưởng.',
    'Say sóng thì ngồi giữa khoang, nhìn về một điểm cố định trên bờ, chuẩn bị túi nilon — và báo người cùng xe từ đầu chuyến để có chỗ ngồi phù hợp.',
  ],
  references: [
    'Quy định vận tải đường thủy nội địa về chuyên chở hành khách và xe hai bánh trên phà tuyến sông.',
    'Hướng dẫn an toàn của các bến phà về trình tự lên xuống tàu và sắp xếp phương tiện trong khoang.',
  ],
  related: [
    'checklist-chuyen-duong-dai-xe-may',
    'cho-nguoi-ngoi-sau-an-toan',
    'ky-thuat-di-xe-may-trong-mua-lon',
    'checklist-kiem-tra-xe-may-hang-tuan',
  ],
};
