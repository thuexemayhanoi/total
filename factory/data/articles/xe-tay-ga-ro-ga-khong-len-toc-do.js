// AI WIKI TOTAL — S01104 (topic V2 T001084); phân biệt bằng triệu chứng quan sát được, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-tay-ga-ro-ga-khong-len-toc-do',
  title: 'Xe tay ga rồ ga nhưng không lên tốc độ: phân biệt bố nồi, dây curoa và bi nồi',
  seoTitle: 'Xe tay ga rồ ga không lên tốc độ: bố nồi, dây curoa hay bi nồi?',
  metaDescription: 'Xe tay ga rồ ga không lên tốc độ có thể do dây curoa, bố nồi hoặc bi nồi. Cách phân biệt qua thời điểm, tiếng, mùi, độ rung và khi nào phải dừng xe.',
  summary: 'Bài giải thích vì sao xe tay ga có thể rồ ga lên nhưng tăng tốc rất chậm, và cách phân biệt ba nhóm nghi ngờ trong bộ truyền động CVT: dây curoa mòn hoặc trượt, bố nồi cùng lò xo nồi suy yếu, bi nồi mòn. Mỗi nhóm được đối chiếu bằng điều bạn tự quan sát được như thời điểm xảy ra, tiếng kêu, mùi khét và độ rung, kèm thứ tự kiểm tra từ đơn giản đến cần thợ. Bài cũng nêu lúc nào có thể chạy nhẹ ra thợ, lúc nào phải dừng xe ngay, và những gì thợ cần mở nắp đo.',
  quickAnswer: 'Xe tay ga rồ ga nhưng không lên tốc độ thường do dây curoa mòn hoặc trượt, bố nồi cùng lò xo nồi suy yếu, hoặc bi nồi mòn. Rít kèm mùi cao su cháy lúc tải nặng nghiêng về dây curoa; nhích ì ạch rồi giật cục khi xuất phát, khét như má phanh, nghiêng về bố nồi; lên tốc độ rề rà, rung theo dải nghiêng về bi nồi. Chỉ thợ mở nắp CVT và đo mới kết luận chắc.',
  keyPoints: [
    'Máy gầm mà xe lên tốc độ chậm là cảm giác chung của ba nhóm lỗi: dây curoa mòn hoặc trượt, bố nồi cùng lò xo nồi suy yếu, bi nồi mòn; riêng cảm giác ấy chưa đủ để chốt nhóm nào.',
    'Dây curoa lộ bệnh lúc tải nặng: máy vọt tua mà tốc độ đuổi theo chậm, kèm tiếng rít và mùi cao su cháy, hoặc trượt thoáng qua sau mưa và sau khi rửa xe.',
    'Bố nồi và lò xo nồi lộ bệnh lúc xuất phát: máy gầm mà xe nhích ì ạch rồi giật cục, mùi khét như má phanh, rung giật ở phía sau, có khi xe trườn nhẹ lúc cầm chừng.',
    'Bi nồi mòn thường gây tốc độ lên rề rà, rung trong một dải tốc độ và tiếng lạch cạch từ khoang CVT, ít rít, ít khét, diễn biến chậm theo thời gian.',
    'Mùi khét nồng, tiếng kim loại, rung mạnh hoặc mất lực hoàn toàn là lý do dừng xe an toàn ngay; việc mở nắp CVT và đo từng chi tiết thuộc về thợ.'
  ],
  category: 'garage',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['bộ truyền động CVT', 'dây curoa', 'bố nồi', 'lò xo nồi', 'bi nồi', 'ly hợp ly tâm'],
  keywords: ['xe tay ga rồ ga không lên tốc độ', 'xe ga bị trượt nồi', 'xe ga ì không chạy nhanh', 'phân biệt bố nồi dây curoa bi nồi'],
  sections: [
    P('Rồ ga mà xe không lên tốc độ: đây là hiện tượng gì', [
      'Rồ ga là vặn tay ga cho máy gầm lên. Hiện tượng đang bàn là vòng quay máy tăng đúng ý nhưng tốc độ trên đồng hồ tăng rất chậm hoặc dừng ở mức thấp hơn thường lệ. Trên phần lớn xe tay ga, lực đi qua một chuỗi gồm máy, nồi trước chứa các bi nồi, dây curoa, nồi sau chứa bố nồi của bộ ly hợp ly tâm, rồi mới tới bánh sau. Người ta hay gọi chung hiện tượng này là trượt nồi, nhưng cách gọi ấy dồn ba thủ phạm khác nhau vào một chỗ: dây curoa mòn hoặc trượt, bố nồi cùng lò xo nồi suy yếu, hoặc bi nồi mòn. Bài này giúp bạn khoanh vùng bằng những gì quan sát được; kết luận cuối cùng thuộc về thợ mở nắp và đo.',
      'Trước hết cần tách chuyện bình thường khỏi bất thường. Bộ truyền động vô cấp vốn có một nhịp trễ ngắn giữa tiếng máy và tốc độ lúc bạn vặn ga mạnh; nguyên lý ấy đã có trong bài về CVT trên xe ga nên không nhắc lại. Đáng ngờ là nhịp trễ kéo dài, nặng dần theo tuần, kèm tiếng hay mùi lạ, hoặc chiếc xe không còn chạm tới tốc độ quen thuộc. Kế đến hãy loại nguyên nhân ngoài bộ truyền động: máy có lên tua gọn gàng không (máy ì ạch thuộc hướng khác, được bàn trong bài về máy ì), lốp sau còn đủ hơi không, xe có đang chở quá sức không. Cuối cùng tắt máy rồi dắt thử: nặng tay hoặc rít ở bánh sau thì nghi phanh kẹt hay bánh sau trục trặc, chưa phải chuyện CVT.',
      'Sau khi loại trừ, hãy đọc hiện tượng bằng bốn câu hỏi. Nó xảy ra lúc nào: ngay khi xuất phát, giữa chừng lúc tăng tốc, khi leo dốc hay chở nặng, hay chỉ sau trời mưa. Tiếng gì: rít chói, lạch cạch, ken két hay chỉ ù đều. Mùi gì: cao su cháy hay khét giống má phanh nóng. Rung ra sao: giật ở phía sau lúc xuất phát hay rung trong một dải tốc độ nhất định. Nói gọn, rít cùng mùi cao su lúc tải nặng nghiêng về dây curoa, nhích ì ạch rồi giật cục lúc xuất phát nghiêng về bố nồi, còn rề rà kèm rung theo dải nghiêng về bi nồi. Đó mới chỉ là xác suất, vì ba chi tiết làm việc thành bộ và hay xuống cấp cùng nhau.'
    ]),
    P('Dấu hiệu nhận ra dây curoa mòn hoặc trượt', [
      'Dây curoa truyền lực bằng ma sát ở hai thành bên, nên chỉ cần mặt ma sát ấy giảm bám là dây trượt. Nguyên nhân thường gặp là dây mòn hẹp lại và lún sâu vào rãnh nồi, mặt dây chai bóng sau thời gian dài chịu nhiệt, hoặc dây dính nước, dầu mỡ lọt vào buồng CVT. Dấu hiệu tiêu biểu là máy vọt tua lúc bạn vặn ga sâu, leo dốc hay chở người phía sau, còn tốc độ đuổi theo rất chậm, cảm giác như có lực nào đó níu xe lại. Trượt thường kèm tiếng rít chói và mùi cao su cháy, rõ nhất ngay sau một lần tăng tốc gắt. Khác với bố nồi, dây curoa hay lộ bệnh lúc tải nặng ở bất kỳ tốc độ nào chứ không riêng lúc xuất phát.',
      'Diễn biến theo thời gian cũng là một manh mối. Dây mòn dần thường làm xe ì từng chút qua một thời gian dài, kèm chuyện máy gầm cao hơn mà đồng hồ không chạm mức quen, tức là mất phần tốc độ cuối. Trường hợp xe đang khỏe bỗng rít và trượt sau cơn mưa, sau lần ngập nước hay sau khi rửa xe, rồi hết dần lúc khô, thì nghi nhiều hơn là nước lọt vào buồng CVT làm ướt dây. Tình trạng này thoáng qua, nhưng nó cho thấy buồng truyền động không kín như thiết kế nên vẫn cần thợ tìm đường nước vào. Dây dính dầu mỡ, chẳng hạn do rò rỉ hoặc tra mỡ quá tay lúc bảo dưỡng, thì trượt dai dẳng và không tự hết.',
      'Có hai việc nên tránh. Đừng chữa tiếng rít bằng cách xịt dầu, chất bôi trơn hay hóa chất vào buồng CVT, vì làm vậy dây trượt nặng hơn và hỏng nhanh hơn. Đừng để trượt kéo dài, bởi ma sát sinh nhiệt làm mặt dây chai thêm và làm bóng thành nồi, càng để lâu càng khó cứu. Mức nặng nhất là máy rồ hết cỡ mà xe hoàn toàn không đi, hoặc nghe tiếng quật lạch cạch trong hộp CVT: hãy bóp phanh, dừng xe an toàn và đừng cố chạy tiếp. Bài này chỉ dùng triệu chứng của dây để phân biệt với hai nhóm còn lại; cách soi dây bằng mắt hay mốc thay dây không nằm trong phạm vi bài viết.'
    ]),
    P('Dấu hiệu bố nồi và lò xo nồi đã suy yếu', [
      'Trong cụm nồi sau, bố nồi là các má ma sát của bộ ly hợp ly tâm. Lò xo nồi giữ các má ấy co lại cho tới khi máy quay đủ nhanh, lúc đó má văng ra áp vào chuông nồi và truyền lực xuống bánh. Vì vậy trục trặc ở nhóm này lộ rõ nhất lúc ly hợp ăn, tức là lúc xuất phát hay nhích từng đoạn. Thường gặp là vặn ga, máy gầm lên mà xe chỉ nhích đi ì ạch, đến một mức tua nào đó mới bắt lực và lao tới giật cục; má mòn mỏng hay chai bóng còn bắt bạn vặn ga lớn hơn trước mới thấy xe chịu đi. Vào đà trên đoạn đường thoáng, xe có thể chạy gần như bình thường vì ly hợp đã ăn hết cỡ. Điểm này khác với dây curoa.',
      'Mùi, tiếng và độ rung của nhóm này có vài nét đặc trưng. Mùi khét giống má phanh nóng hoặc giấy cháy hay bốc lên sau chuỗi xuất phát nặng như dừng đèn đỏ liên tục hoặc leo dốc có chở người. Vì mùi ấy cũng có thể đến từ phanh sau bị kẹt, hãy dắt thử lúc tắt máy để loại trừ. Rung giật ở phía sau lúc xuất phát rồi êm dần khi xe đã chạy gợi ý má mòn không đều hoặc chuông nồi bị xước. Lò xo gãy hay má vỡ có thể gây tiếng lạch cạch, lục cục ở tua thấp. Lò xo yếu còn có thể làm ly hợp ăn quá sớm, khiến xe trườn nhẹ lúc cầm chừng hoặc giật ngay khi vừa chạm ga.',
      'Một nguyên nhân hay bị bỏ sót là dầu. Dầu hộp số cuối hoặc mỡ rò vào cụm nồi sau làm bố và chuông nồi ướt trơn, khiến nồi trượt nặng và bốc mùi khét dù má còn dày; vệt dầu quanh bánh sau hay hông máy là gợi ý đáng báo thợ. Nồi quá nóng cũng ăn kém đi, nên xe có thể yếu hẳn sau vài lần xuất phát liên tiếp rồi khá lên lúc nguội. Đừng thử bằng cách xuất phát dồn ga liên tục để nồi mau ăn, vì làm vậy chỉ khiến má mòn và nóng thêm. Cũng đừng kỳ vọng tự phân biệt chắc chắn giữa má mòn và lò xo yếu, vì cả hai cho triệu chứng gần giống nhau và thường được thay cùng bộ.'
    ]),
    P('Bi nồi mòn: khi nào mới là nguyên nhân', [
      'Bi nồi, còn gọi là bi êm, là các con lăn nằm trong nồi trước. Chúng văng ra theo vòng quay của máy và đẩy dây curoa lên vòng lớn, qua đó quyết định bộ truyền động đổi tỷ số nhanh hay chậm; cấu tạo và thời điểm thay bi êm đã có bài riêng nên ở đây chỉ bàn cách phân biệt bi nồi với hai nhóm còn lại. Bi mòn, vát cạnh hoặc lăn không đều thì nồi trước khép lệch nhịp. Dấu hiệu nghiêng về bi là tốc độ lên rề rà ở mọi mức tải, máy gầm cao hơn thường lệ mà xe không vọt, tốc độ cuối kém, trong khi không có tiếng rít hay mùi khét. Diễn biến thường chậm, từ từ theo thời gian dùng, chứ không đột ngột.',
      'Hai dấu hiệu nghiêng về bi nồi rõ hơn so với hai nhóm còn lại. Một là rung hoặc giật theo nhịp trong một dải tốc độ nhất định lúc tăng tốc từ chậm lên trung bình, vì bi mòn không đều thì lăn không êm. Hai là tiếng lọc cọc hoặc lạch cạch từ khoang CVT, nghe rõ khi nhấp ga rồi nhả hoặc lúc mới nổ máy. Cảm giác ga hẫng một nhịp rồi mới lên cũng hay gặp. Thêm một gợi ý bằng tai: dây trượt hay làm tiếng máy vọt lên rồi tụt xuống theo từng cú ga, còn bi mòn có xu hướng giữ tiếng máy cao và đều hơn. Bi mòn nhanh hơn ở xe thường chở nặng, chạy nhiều đường bụi hoặc lâu ngày không vệ sinh buồng CVT.',
      'Vậy khi nào nên nghi bi nồi là nguyên nhân chính? Đó là lúc xe vẫn xuất phát bình thường, không rít, không khét, nhưng càng lên tốc độ càng rề rà và rung theo dải. Ngược lại, rồ ga ngay lúc xuất phát hoặc có mùi khét thì ít khả năng chỉ do bi. Bi thường mòn cùng lúc với các chi tiết lân cận, nên thay riêng bi trong khi dây curoa đã hẹp lại thì xe vẫn ì. Đừng tự chọn bi nặng hay nhẹ hơn mức nhà sản xuất khuyến nghị để chữa, vì như thế làm lệch nhịp tăng tốc của cả bộ truyền động. Cách đúng là để thợ đo bi, đối chiếu giới hạn trong tài liệu của hãng và kiểm các chi tiết còn lại cùng lúc.'
    ]),
    P('Có nên chạy tiếp, và khi nào phải dừng xe', [
      'Câu trả lời tùy mức nặng. Xe mới chỉ ì hơn, máy gầm hơi lâu, không tiếng lạ, không mùi khét và vẫn truyền được lực thì bạn có thể chạy nhẹ một quãng ngắn thẳng ra thợ: vặn ga đều, tránh dốc, không chở người hay chở nặng, giữ khoảng cách rộng với xe trước. Đường tới thợ dài hoặc nhiều dốc thì nhờ chở xe an toàn hơn. Đừng kéo dài nhiều tuần cho tới khi hết hẳn lực, vì trượt sinh nhiệt làm dây, bố và mặt nồi hỏng thêm. Chiếc xe không đáp ga đúng lúc là mối nguy thật khi nhập dòng xe, băng ngã tư rộng hay vượt. Cũng đừng vặn ga sâu và giữ lâu để ép xe chạy, vì chỉ làm nóng thêm các chi tiết đang trượt.',
      'Một số dấu hiệu buộc phải dừng ngay: mùi khét nồng hoặc khói, tiếng kim loại va đập hay ken két từ khoang CVT, rung mạnh bất thường, xe giật mạnh lao tới khi nồi bất ngờ bắt lực, máy rồ mà mất lực hoàn toàn, hoặc bánh sau nặng bất thường. Hãy giảm ga, bóp phanh, dừng xe an toàn vào lề, rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Đừng chạm vào nắp CVT và ống xả vì rất nóng, cũng đừng tự mở nắp xem bên trong. Chờ máy nguội rồi nhờ xe cứu hộ hoặc phương tiện chở thay vì cố chạy về.',
      'Phần mở và đo thuộc về thợ. Thợ phải mở nắp CVT để kiểm bề rộng dây curoa, độ dày bố nồi, độ mòn và vết xước của chuông nồi, độ yếu của lò xo nồi cùng lò xo lớn ở nồi sau, kích thước bi nồi, mặt trượt của nồi trước và nồi sau, đồng thời tìm dấu vết nước hay dầu mỡ. Số đo được so với giới hạn trong tài liệu của nhà sản xuất cho đúng dòng xe. Vì ba nhóm hay hỏng cùng nhau, hãy hỏi thợ chi tiết nào vượt giới hạn và vì sao, thay vì chấp nhận thay mò từng món; dây mới vẫn có thể trượt nếu mặt nồi đã bóng hay lò xo đã yếu. Hãy mang theo bản ghi chú về thời điểm, tiếng, mùi, rung, và sau sửa chạy nhẹ để xem triệu chứng hết thật chưa.'
    ])
  ],
  checklist: [
    'Ghi lại nó xảy ra lúc nào: xuất phát, tăng tốc giữa chừng, leo dốc, chở nặng hay chỉ sau trời mưa và sau khi rửa xe.',
    'Nghe và ghi tiếng: rít chói, lạch cạch, ken két hay ù đều, xảy ra ở tua thấp hay lúc vặn ga sâu.',
    'Ngửi mùi sau khi dừng ở nơi thoáng, đứng cách xa nắp CVT và ống xả: cao su cháy hay khét như má phanh.',
    'Tắt máy rồi dắt xe để biết bánh sau có nặng hoặc rít không, nhằm loại trừ phanh kẹt hay lốp non hơi.',
    'Xem quanh bánh sau và hông máy có vệt dầu mỡ hay vệt nước không, rồi ghi cả những lần xe chạy bình thường để đối chiếu.'
  ],
  steps: [
    { title: 'Loại trừ nguyên nhân ngoài bộ truyền động', detail: 'Xem máy có lên tua gọn không, lốp sau đủ hơi không, dắt xe lúc tắt máy có nhẹ tay không và xe có đang chở quá sức không, rồi mới nghi tới CVT.' },
    { title: 'Ghi lại thời điểm và hoàn cảnh', detail: 'Mỗi lần xảy ra, ghi xe đang xuất phát, tăng tốc hay leo dốc, chở nặng hay nhẹ, trời khô hay ướt, và triệu chứng bắt đầu từ lúc nào hoặc sau lần bảo dưỡng nào.' },
    { title: 'Quan sát tiếng, mùi, độ rung', detail: 'Dừng ở nơi thoáng sau khi chạy, nghe và ngửi từ xa, không chạm vào nắp CVT hay ống xả vì rất nóng, rồi đối chiếu quan sát với ba nhóm nghi ngờ.' },
    { title: 'Đưa thợ mở nắp và đo từng chi tiết', detail: 'Giao ghi chú cho thợ, nhờ kiểm dây curoa, bố nồi, chuông nồi, lò xo, bi nồi và mặt nồi so với giới hạn của nhà sản xuất, rồi hỏi chi tiết nào cần thay.' }
  ],
  warnings: [
    'Mùi khét nồng, khói, tiếng kim loại va đập, rung mạnh hoặc mất lực hoàn toàn: giảm ga, bóp phanh, dừng xe an toàn, rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ; không cố chạy về.',
    'Không xịt dầu, mỡ, chất bôi trơn hay hóa chất vào buồng CVT, không rồ ga liên tục hay xuất phát dồn ga để thử, vì làm các chi tiết đang trượt nóng và mòn thêm.',
    'Không tự mở nắp CVT và không chạm vào nắp hay ống xả vừa chạy xong; chi tiết bên trong quay nhanh, nóng và cần dụng cụ cùng tài liệu để đo đúng.'
  ],
  notes: [
    'Các dấu hiệu trong bài chỉ là manh mối để trao đổi với thợ, không thay chẩn đoán: ba nhóm lỗi hay xuất hiện cùng lúc, và máy yếu, phanh kẹt hay lốp non hơi cũng cho cảm giác tương tự.',
    'Tên gọi, vị trí và cấu tạo của cụm nồi, bố nồi, lò xo nồi, bi nồi khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của đúng xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần vận hành và các dấu hiệu bất thường của xe tay ga',
    'Tài liệu kỹ thuật của nhà sản xuất về bộ truyền động CVT của đúng dòng xe, phần giới hạn mòn của dây curoa, bố nồi, lò xo và bi nồi'
  ],
  related: ['cvt-la-gi-tren-xe-ga', 'bi-em-xe-ga-cau-tao-va-thoi-diem-thay', 'may-i', 'cvt-la-gi', 'day-curoa-xe-ga-khi-nao-thay']
};
