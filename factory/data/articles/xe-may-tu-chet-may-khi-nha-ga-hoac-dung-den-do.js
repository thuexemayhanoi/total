// AI WIKI TOTAL — S01251; phân nhóm nguyên nhân chết máy lúc cầm chừng bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-may-tu-chet-may-khi-nha-ga-hoac-dung-den-do',
  title: 'Xe máy tự chết máy khi nhả ga hoặc dừng đèn đỏ: phân nhóm nguyên nhân từ gió, xăng, lửa đến ga cầm chừng',
  seoTitle: 'Xe máy tự chết máy khi nhả ga, dừng đèn đỏ: nguyên nhân thường gặp',
  metaDescription: 'Xe máy tự chết máy khi nhả ga hoặc dừng đèn đỏ: phân nhóm nguyên nhân theo gió, xăng, tia lửa và phần điều khiển cầm chừng, cách ghi nhận và xử trí an toàn.',
  summary: 'Bài giải thích vì sao xe máy hay tắt đúng lúc nhả ga hoặc dừng đèn đỏ dù chạy bình thường. Nội dung chia nguyên nhân theo ba thứ động cơ cần lúc cầm chừng là gió, xăng và tia lửa, rồi theo phần điều khiển cầm chừng gồm họng ga, vít chỉnh, cảm biến và nguồn điện. Bài hướng dẫn ghi nhận xe tắt lúc nóng hay nguội, ở xe phun xăng hay chế hòa khí, nêu nguy cơ khi xe tắt giữa ngã tư, cách xử trí an toàn và lúc nên giao thợ, đồng thời khuyên không tự vặn vít hay tháo họng ga.',
  quickAnswer: 'Xe máy chết máy khi nhả ga hoặc dừng đèn đỏ thường do máy thiếu một trong ba thứ cần lúc cầm chừng là gió, xăng hoặc tia lửa, hay do phần điều khiển cầm chừng lệch: họng ga bẩn, ga cầm chừng quá thấp, hở khí phụ, cảm biến báo sai, nguồn điện yếu. Hãy ghi lại xe tắt lúc nóng hay nguội, đừng tự vặn vít hay tháo họng ga, và đưa thợ kiểm tra nếu tình trạng lặp lại.',
  keyPoints: [
    'Nhả ga là lúc cửa nạp gần đóng và máy quay chậm, nên chỗ yếu về gió, xăng hoặc tia lửa lộ ra trước hết; vì vậy xe có thể tắt lúc nhả ga dù chạy ga lớn vẫn êm.',
    'Ba thứ máy cần lúc cầm chừng là gió, xăng và tia lửa: hở khí phụ hoặc lọc gió bẩn, xăng cũ hay nghẹt đường xăng, bugi và đánh lửa yếu đều có thể làm máy tắt.',
    'Phần điều khiển cầm chừng gồm họng ga bẩn, ga cầm chừng quá thấp hoặc chỉnh lệch, cảm biến báo sai và nguồn điện yếu; bạn không nên tự vặn vít chỉnh hay tháo họng ga.',
    'Ghi lại xe tắt lúc nóng hay nguội, là xe phun xăng hay chế hòa khí, tắt ngay hay sau vài giây, vì các chi tiết ấy giúp thợ khoanh vùng nguyên nhân nhanh hơn.',
    'Xe tắt giữa ngã tư có nguy cơ bị va từ phía sau: giữ phanh, quan sát gương, thử đề lại một hai lần rồi dắt xe vào lề; mùi xăng, khói hay đèn báo nhiệt là lý do dừng hẳn và ra thợ.'
  ],
  category: 'garage',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['ga cầm chừng', 'họng ga', 'hở khí phụ', 'bugi và hệ thống đánh lửa', 'cảm biến nhiệt độ và vị trí tay ga', 'xe phun xăng và chế hòa khí'],
  keywords: ['xe máy tự chết máy khi dừng', 'xe máy chết máy khi nhả ga', 'xe máy chết máy khi dừng đèn đỏ', 'xe máy tắt máy khi cầm chừng'],
  sections: [
    P('Vì sao nhả ga là lúc máy dễ tắt nhất', [
      'Xe chạy êm suốt quãng đường mà hễ nhả tay ga hay dừng đèn đỏ là tắt máy, khiến bạn phải vặn ga giữ lại, thường cho thấy động cơ đang thiếu một thứ gì đó ở chế độ cầm chừng chứ chưa chắc đã hỏng nặng. Lúc chạy, tay ga mở rộng cửa nạp nên gió và xăng vào dồi dào, các chỗ yếu nhỏ đều được dòng khí mạnh che đi. Nhả ga là lúc cửa nạp gần như đóng kín, máy chỉ còn một đường rất hẹp để thở và một lượng xăng rất ít để cháy, nên khâu nào lệch dù chỉ chút ít cũng lộ ra ngay. Vì vậy triệu chứng hầu như chỉ xuất hiện ở đoạn nhả ga, rồi biến mất ngay khi bạn vặn ga trở lại, khiến nhiều người tưởng xe vẫn bình thường.',
      'Cầm chừng còn là chế độ mỏng manh vì máy quay chậm. Vòng tua thấp nghĩa là các nhịp cháy cách xa nhau, bánh đà không còn tích nhiều đà quay như lúc chạy nhanh, nên chỉ một nhịp bỏ lửa hoặc một nhịp thiếu hỗn hợp cũng đủ kéo máy chững lại rồi tắt. Máy phát điện của xe cũng cho ít điện nhất ở vòng tua thấp, trong lúc đèn, còi, bộ điều khiển và bơm xăng ở xe phun vẫn cần điện, nên một nguồn điện vốn đã yếu sẽ lộ rõ đúng lúc này. Cũng vì lẽ đó, lỗi cầm chừng thường đến từ từ: ban đầu chỉ là vòng tua rung nhẹ lúc dừng, rồi vài lần suýt tắt, sau cùng mới tắt hẳn ngay khi nhả ga. Những dấu hiệu sớm ấy rất đáng ghi nhớ.',
      'Thay vì đoán từng chi tiết, hãy nhìn vấn đề theo hai tầng. Tầng thứ nhất là ba thứ mà mọi động cơ xăng đều cần để chạy ở cầm chừng: gió, xăng và tia lửa. Tầng thứ hai là phần điều khiển cầm chừng, gồm họng ga, vít chỉnh, cảm biến và bộ điều khiển, tức nơi quyết định lượng gió và xăng ấy nhiều hay ít. Cách chia này giúp bạn biết nên quan sát gì và nói gì với thợ, thay vì thay phụ tùng lần lượt cho đến khi trúng. Vặn ga giữ máy chỉ là biện pháp tạm để qua được ngã tư, không phải cách chữa, và thói quen đó còn che mất lỗi đang nặng lên. Các dấu hiệu dưới đây chỉ mang tính gợi ý, mọi chi tiết cụ thể đều tùy dòng xe.'
    ]),
    P('Ba thứ máy cần lúc cầm chừng: gió, xăng và lửa', [
      'Gió đi qua lọc gió, ống nạp và họng ga rồi mới vào buồng đốt, và ở chế độ cầm chừng lượng gió này lọt qua một lối rất nhỏ nên rất dễ bị ảnh hưởng. Lọc gió bám bụi nặng hoặc ướt dầu làm hỗn hợp đậm quá mức; ngược lại, cổ hút nứt, mối nối lỏng hay gioăng chai cứng cho không khí lọt vào mà bộ phận cấp xăng không hề tính tới, làm hỗn hợp loãng và vòng tua dao động trước khi tắt. Dấu hiệu gợi ý hở khí phụ gồm tiếng xì nhỏ quanh cổ hút, vòng tua lên xuống như sóng và máy hay nổ lụp bụp. Tình trạng ấy đôi khi lại gây vòng tua cầm chừng cao bất thường, chiều ngược với bài này, và đã có bài riêng về rò khí nạp, họng ga và cảm biến.',
      'Xăng cũng phải đến đủ và đều. Xăng để lâu ngày hoặc lẫn nước, lọc xăng hay lưới lọc trong bình đã bẩn, đường dẫn bị nghẹt một phần đều làm máy thiếu nhiên liệu, và chỗ nhạy nhất là mạch cầm chừng. Trên xe chế hòa khí, đường xăng cầm chừng rất nhỏ nên cặn bẩn thường bịt chỗ này trước, khiến xe chạy ga lớn vẫn khỏe nhưng nhả ga là tắt. Trên xe phun xăng, bơm yếu hoặc kim phun bẩn làm lượng xăng kém ổn định ở vòng tua thấp. Manh mối gợi ý là xe còn hụt hơi hoặc giật khi vặn ga mạnh, hay tắt lúc bình gần cạn, hoặc triệu chứng bắt đầu ngay sau một lần đổ xăng ở chỗ lạ. Đường xăng chứa nhiên liệu dễ cháy, nên việc tháo lọc hay ống dẫn thuộc về thợ.',
      'Tia lửa là yếu tố thứ ba, và ở vòng tua thấp nó phải đều đặn hơn bạn nghĩ. Bugi mòn, bám muội hoặc ướt xăng, đầu bugi lỏng, dây cao áp nứt, cuộn đánh lửa yếu hay giắc điện oxy hóa đều có thể làm tia lửa bỏ nhịp, và máy bỏ nhịp ở cầm chừng thường rung giật rồi tắt. Dấu hiệu gợi ý là nổ không đều, có khói hoặc mùi xăng chưa cháy, xe khó đề lại ngay sau khi tắt. Nguồn điện yếu là nhóm đi kèm: ắc quy kiệt, dây mát lỏng hay hệ thống sạc yếu làm điện áp tụt đúng lúc vòng tua thấp, và bạn có thể thấy đèn pha mờ đi, còi yếu hoặc đề ì. Không tự thử tia lửa bằng cách chạm tay vào dây cao áp, vì điện áp đánh lửa đủ gây giật mạnh.'
    ]),
    P('Phần điều khiển cầm chừng: họng ga, vít chỉnh và cảm biến', [
      'Họng ga là nơi gió được chia theo ý tay ga, và là chỗ đầu tiên đáng nghi ở xe phun xăng khi máy tắt lúc nhả ga. Ở nhiều xe, lúc nhả ga cánh bướm gần như đóng, gió chỉ lọt qua một khe nhỏ hoặc một đường gió phụ riêng; muội than và hơi dầu từ máy bám dần vào đó làm khe hẹp lại, và lượng gió cầm chừng thiếu đi. Dấu hiệu gợi ý gồm vòng tua cầm chừng thấp dần theo thời gian, máy nặng và hay tắt đúng lúc nhả ga. Việc làm sạch phụ thuộc kiểu họng ga của từng xe, bên trong có cảm biến và bộ phận điều khiển nhạy, nên bạn đừng tháo ra tự làm, đừng xịt chất tẩy hay khí nén vào cảm biến, và hãy để thợ xử lý cùng bước cài đặt lại nếu xe có yêu cầu.',
      'Ga cầm chừng quá thấp hoặc bị chỉnh lệch là nguyên nhân hiển nhiên mà cũng hay bị đổ lỗi nhầm. Trên xe chế hòa khí, vòng tua cầm chừng được đặt bằng vít chỉnh ở chế hòa khí; nếu có ai từng vặn lệch, hoặc rung động làm vít xê dịch, máy sẽ giữ vòng tua quá thấp và tắt khi nhả ga. Bài riêng về vít chỉnh ga cầm chừng đã giải thích vai trò của hai vít và vì sao vặn bừa dễ gây chết máy, hao xăng, nóng máy, nên ở đây chỉ nhắc rằng bạn đừng vặn thử cho xe hết tắt. Trên xe phun xăng, vòng tua cầm chừng thường do bộ điều khiển quyết định và không có vít dành cho người dùng, tùy xe.',
      'Ở xe phun xăng, bộ điều khiển tính lượng xăng và gió cầm chừng dựa trên tín hiệu từ nhiều cảm biến: vị trí tay ga, nhiệt độ máy, lượng khí nạp, đôi khi cả cảm biến oxy trong ống xả. Một cảm biến báo sai làm bộ điều khiển hiểu lầm tình trạng của máy, chẳng hạn tưởng máy còn nguội nên phun đậm, hoặc đọc lượng gió lệch nên phun thừa hay thiếu. Hậu quả có thể là vòng tua dao động, hao xăng hơn hoặc tắt khi nhả ga. Đèn báo lỗi động cơ sáng hay nháy vào lúc nào là chi tiết đáng ghi lại, nhưng đèn không sáng cũng chưa loại trừ được cảm biến lệch. Đây chỉ là gợi ý cho thợ: kiểm tra thật sự cần đọc dữ liệu và đo bằng thiết bị, còn bạn đừng tự rút giắc cắm để thử.'
    ]),
    P('Nóng hay nguội, phun xăng hay chế hòa khí: cách ghi nhận', [
      'Chi tiết đầu tiên cần ghi lại là xe tắt lúc nguội hay lúc nóng. Xe chỉ tắt trong vài phút đầu sau khi nổ buổi sáng rồi chạy êm khi đã ấm gợi ý rằng khâu hỗ trợ lúc nguội đang yếu. Lúc nguội xăng bay hơi kém nên máy cần hỗn hợp đậm hơn và thường cần vòng tua cầm chừng cao hơn một chút; ở xe chế hòa khí phần này do cơ cấu làm đậm đảm nhiệm, tùy xe là tay kéo hay tự động, còn ở xe phun xăng do bộ điều khiển dựa vào cảm biến nhiệt. Cơ cấu làm đậm kẹt, cảm biến nhiệt báo sai hoặc mạch cầm chừng bẩn đều có thể làm máy nguội tắt khi nhả ga. Lỗi do nguội thường nhẹ đi khi máy ấm, nên người lái dễ tưởng xe tự khỏi và bỏ qua, trong khi nguyên nhân vẫn còn đó.',
      'Tắt khi máy đã nóng, sau một quãng đường dài hoặc đoạn kẹt xe dưới nắng, là bức tranh khác. Nhiệt làm một số chi tiết điện như cuộn đánh lửa và cảm biến yếu đi, làm gioăng cổ hút giãn nở và hở thêm, và có thể làm xăng trong đoạn ống gần máy bay hơi bớt, khiến xăng đến không đều. Quạt làm mát, nhớt và mức nước làm mát ở xe dùng nước cũng đáng để ý, vì máy quá nhiệt thật sự có thể yếu hẳn rồi tắt. Dấu hiệu nguy hiểm gồm đèn báo nhiệt sáng, mùi khét hoặc công suất tụt rõ: hãy dừng xe an toàn, để máy nguội tự nhiên và không dội nước lên máy. Xe chỉ tắt khi nóng rồi nổ lại bình thường sau khi nghỉ thường là dấu hiệu một chi tiết đang yếu dần theo nhiệt, nên cần thợ kiểm tra lúc nó đang phát bệnh.',
      'Loại xe cũng gợi ý hướng nghi ngờ. Xe phun xăng có bộ điều khiển tự bù phần nào các sai lệch nhỏ, nên khi đã tắt lúc nhả ga thì lỗi thường nằm ở họng ga bẩn, cảm biến báo sai, bơm xăng hoặc nguồn điện, và có thể có đèn báo lỗi; đọc dữ liệu là việc của thợ. Xe chế hòa khí không có bộ bù ấy, nên hay gặp mạch cầm chừng bẩn, vít chỉnh lệch, hở cổ hút hoặc cặn trong buồng phao. Để thợ khoanh vùng nhanh, hãy ghi bằng lời: tắt lúc nóng hay nguội, tắt ngay hay sau vài giây, đề lại có nổ liền không, vặn ga có giữ được máy không, có tiếng xì, mùi xăng, khói hay đèn báo nào, và xe vừa bảo dưỡng hay đổ xăng chỗ lạ chưa. Không cần số liệu, mô tả chính xác là đủ.'
    ]),
    P('Việc nên làm an toàn và lúc giao thợ', [
      'Chết máy giữa ngã tư nguy hiểm hơn nhiều so với chuyện mất thời gian đề lại. Xe phía sau thường không lường được xe phía trước đứng khựng nên dễ va từ phía sau; xe tắt giữa làn làm dòng xe rối lên; còn người lái luống cuống, đề liên tục giữa làn dễ mất tập trung với xe xung quanh. Khi động cơ tắt, phanh và tay lái thường vẫn dùng được nhưng cảm giác khác đi, nên hãy giữ phanh chắc và đặt chân vững xuống đất. Thao tác hợp lý là bật đèn báo nguy hiểm nếu xe có, nhìn gương, rồi thử đề lại một hai lần với phanh đang giữ chặt, vì nhiều xe tay ga chỉ cho đề khi bóp phanh, tùy xe. Máy không lên thì dắt xe vào lề khi có khoảng trống, đừng đứng giữa làn chờ máy nguội.',
      'Vài thói quen giúp giảm nguy cơ mà không cần can thiệp vào máy. Hãy dùng xăng sạch từ nơi đáng tin, tránh để bình cạn hẳn, và đưa xe đi bảo dưỡng đúng kỳ theo sách hướng dẫn để lọc gió, bugi và đường nạp được kiểm tra. Tránh biến việc vặn ga giữ máy mỗi lần dừng thành thói quen, vì động tác này che lỗi, làm xe dễ bò về phía trước khi phanh lơi và tốn xăng. Cũng đừng thay phụ tùng lần lượt cho đến khi hết tắt, đừng đổ chất tẩy hay phụ gia lạ vào bình xăng hoặc họng nạp, đừng tháo họng ga hay vặn vít. Phần việc an toàn của bạn là quan sát, ghi chép và giữ xe sạch, còn can thiệp vào máy thuộc về thợ.',
      'Lúc nào nên giao thợ ngay? Tắt máy lặp lại, kể cả chỉ ở đèn đỏ, đã là lý do đủ để đi kiểm tra, vì thợ có thể xem độ kín đường nạp, bugi và cuộn đánh lửa, áp xăng, dữ liệu cảm biến và nguồn điện. Cần đi ngay khi tắt máy đi kèm mùi xăng nồng, xăng ướt quanh bình hoặc ống dẫn, khói, mùi khét, đèn báo nhiệt hay đèn báo lỗi sáng, hoặc xe khó đề lại sau mỗi lần tắt. Gặp các dấu hiệu đó trên đường, hãy bóp phanh, dừng xe an toàn, tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ, rồi tránh lửa và để máy nguội trước khi quyết định. Khi gặp thợ, hãy mang theo ghi chú và nói rõ bạn đã làm gì, kể cả việc từng vặn vít hay vệ sinh.'
    ])
  ],
  checklist: [
    'Ghi xem xe tắt lúc nóng hay lúc nguội, tắt ngay khi nhả ga hay sau vài giây dừng.',
    'Để ý có tiếng xì, mùi xăng, khói hoặc đèn báo lỗi động cơ sáng vào lúc xe tắt hay không.',
    'Xem đèn pha có mờ đi, còi có yếu hoặc đề có ì khi dừng không, để biết nguồn điện có yếu hay không.',
    'Nhớ lại lần đổ xăng, bảo dưỡng hoặc vệ sinh gần nhất trước khi triệu chứng bắt đầu.',
    'Mang ghi chú cho thợ và nói rõ có ai từng vặn vít hay can thiệp vào họng ga hay chưa.'
  ],
  steps: [
    { title: 'Giữ phanh và quan sát xung quanh', detail: 'Khi máy tắt giữa đường, bóp phanh chắc, đặt chân vững, bật đèn báo nguy hiểm nếu xe có và nhìn gương trước khi làm gì tiếp.' },
    { title: 'Thử đề lại có kiểm soát', detail: 'Đề một hai lần ngắn với phanh đang giữ; không đề liên tục giữa làn xe, máy không lên thì dắt xe vào lề khi có khoảng trống.' },
    { title: 'Ghi lại hoàn cảnh xảy ra', detail: 'Ghi nóng hay nguội, tắt ngay hay sau vài giây, có tiếng xì, mùi xăng, khói hoặc đèn báo nào, xăng trong bình còn nhiều hay ít và lần bảo dưỡng gần nhất.' },
    { title: 'Đưa thợ kiểm tra theo nhóm nguyên nhân', detail: 'Nhờ kiểm tra độ kín đường nạp, họng ga, bugi và đánh lửa, đường xăng, cảm biến và nguồn điện thay vì thay phụ tùng đoán mò.' }
  ],
  warnings: [
    'Mùi xăng nồng, xăng ướt quanh bình hoặc ống dẫn, khói hay mùi khét là nguy cơ cháy: bóp phanh, dừng xe an toàn, tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ, tránh lửa và đưa xe đi kiểm tra.',
    'Không tự vặn vít chỉnh ga cầm chừng, không tháo họng ga, không xịt chất tẩy hoặc khí nén vào cảm biến và không xịt chất dễ cháy quanh cổ hút để dò chỗ hở khi máy đang nổ.',
    'Không đề liên tục hay đứng giữa làn xe chờ máy nguội ở ngã tư; xe phía sau có thể không kịp nhận ra xe đang tắt, nên hãy bật đèn báo nguy hiểm nếu có và dắt xe vào lề.'
  ],
  notes: [
    'Các nhóm nguyên nhân trong bài chỉ là gợi ý để trao đổi với thợ; nén yếu, khe hở xu-páp sai hoặc hao mòn cơ khí cũng làm cầm chừng kém và chỉ thợ mới kết luận được.',
    'Tên gọi, vị trí và cách hoạt động của họng ga, cảm biến, vít chỉnh và cơ cấu làm đậm khác nhau tùy dòng xe, nên hãy đối chiếu sách hướng dẫn sử dụng của xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần khởi động động cơ, đèn báo trên bảng đồng hồ và bảo dưỡng định kỳ',
    'Tài liệu kỹ thuật của nhà sản xuất về hệ thống nhiên liệu và chế độ cầm chừng của đúng dòng xe'
  ],
  related: ['xe-may-no-khong-deu-luc-cam-chung', 'vit-chinh-ga-cam-chung-xe-may-la-gi', 'xe-may-tu-ro-ga-hoac-ga-cam-chung-cao', 've-sinh-hong-ga-xe-phun-xang', 'xe-chet-may']
};
