// AI WIKI TOTAL — S01133; giải thích kim phun xăng bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'kim-phun-xang-xe-may-bi-tac-hoac-ro',
  title: 'Kim phun xăng xe máy: vai trò, vì sao bị bẩn tắc hoặc rò và triệu chứng quan sát được',
  seoTitle: 'Kim phun xăng xe máy: vai trò, nguyên nhân tắc rò và dấu hiệu',
  metaDescription: 'Kim phun xăng xe máy mở ngắn theo lệnh ECU để phun tơi xăng. Vì sao kim bám cặn, tắc hoặc rò, triệu chứng nhận biết được và ranh giới khi nào phải giao thợ.',
  summary: 'Bài giải thích kim phun xăng xe máy là một van điện từ nhỏ, mở rất ngắn theo lệnh của bộ điều khiển ECU để phun xăng thành sương mịn vào dòng khí nạp. Bài chỉ ra vì sao cặn từ xăng và nhiệt sau khi tắt máy làm kim phun lệch, tắc hoặc đóng không kín, rồi mô tả triệu chứng nhìn, nghe, ngửi được như khó nổ, hụt ga, hao xăng, mùi xăng. Bài cũng nêu cách phân biệt gợi ý với bugi và lọc gió, những việc nên tránh như tự tháo kim hay đổ phụ gia theo mẹo, và lúc nào nên dừng xe, giao thợ.',
  quickAnswer: 'Kim phun xăng là van điện từ nhỏ, mở rất ngắn theo lệnh ECU để phun xăng thành sương mịn. Cặn bám làm kim phun ít hơn hoặc lệch tia, gây khó nổ, hụt ga; kim đóng không kín gây thừa xăng, hao xăng, mùi xăng. Đó chỉ là gợi ý, vì bugi, lọc gió, bơm xăng cũng gây triệu chứng tương tự. Đừng tự tháo kim hay đổ phụ gia theo mẹo; mùi xăng nồng hoặc xăng ướt là lý do dừng xe.',
  keyPoints: [
    'Kim phun là van điện từ nhỏ: ECU cấp điện thì van mở, xăng có áp suất phía sau phun ra thành sương mịn, ngắt điện thì van đóng lại.',
    'Lượng xăng phụ thuộc thời gian kim mở và độ thông của lỗ phun; cặn làm lỗ hẹp hoặc tia phun lệch nên xăng thực tế khác với lượng ECU đã tính.',
    'Cặn đến từ xăng biến chất, tạp chất và nhiệt tích tụ sau khi tắt máy; kim rò có thể do vòng đệm cao su lão hóa hoặc đế kim đóng không kín.',
    'Kim tắc nghiêng về hụt ga, giật, khó nổ; kim rò nghiêng về mùi xăng, hao xăng, khó nổ lại khi nóng, nhưng bugi, lọc gió, bơm xăng cũng có thể gây ra tương tự.',
    'Không tự tháo kim hay đường xăng, không đổ phụ gia theo mẹo; mùi xăng nồng hoặc xăng ướt quanh máy là lý do dừng xe, tránh lửa và đưa xe đi kiểm tra.'
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['kim phun xăng', 'bộ điều khiển ECU', 'van điện từ', 'cặn bám đầu kim', 'hỗn hợp xăng và không khí', 'bugi và lọc gió'],
  keywords: ['kim phun xăng xe máy', 'kim phun bị tắc', 'vòi phun xăng xe máy', 'dấu hiệu kim phun xe máy bị bẩn'],
  sections: [
    P('Kim phun làm gì trong hệ thống phun xăng điện tử', [
      'Kim phun, còn gọi là vòi phun xăng, là chi tiết đưa nhiên liệu vào động cơ trên xe phun xăng điện tử. Hiểu đơn giản, đó là một van điện từ nhỏ đặt ở cuối đường dẫn xăng. Bộ điều khiển ECU cấp điện thì van mở, xăng có áp suất phía sau lập tức thoát ra qua lỗ phun; ngắt điện thì van đóng lại. Vì thế, khi thợ nói kim phun bẩn hoặc tắc, ý họ là cái van nhỏ này không còn mở, đóng hay phun đúng như thiết kế. Ở đa số xe máy phun xăng, kim nằm gần họng nạp và hướng xăng vào dòng khí nạp. Chi tiết nhỏ ấy ảnh hưởng trực tiếp tới việc xe nổ dễ hay khó, chạy êm hay giật và hao xăng nhiều hay ít.',
      'Để thấy kim phun đứng ở đâu, hãy nhìn cả chuỗi làm việc. Xăng từ bình được bơm điện đẩy qua bộ lọc rồi theo đường dẫn tới kim, luôn được giữ ở một mức áp suất ổn định. Trong lúc đó ECU nhận thông tin từ các cảm biến, thường gồm vị trí bướm ga, lượng hay áp suất không khí nạp, nhiệt độ động cơ và tốc độ quay của máy, tùy xe còn có cảm biến khí thải. Từ đó ECU tính xem cần bao nhiêu xăng rồi ra lệnh cho kim. Có thể ví bơm là nguồn lực, ECU là bộ não và kim phun là cánh tay thực hiện. Cánh tay làm sai thì dù bộ não tính đúng, lượng xăng thật vẫn lệch so với lượng cần thiết.',
      'Một đặc điểm đáng nhớ là nhiều xe máy phổ thông chỉ có một xi-lanh, thường tức là chỉ có một kim phun, nên không có kim nào khác để bù. Trên xe nhiều xi-lanh, một kim yếu chỉ làm lệch một xi-lanh và phần còn lại vẫn kéo xe đi được; còn ở xe một xi-lanh, kim yếu là cả máy yếu, vì thế triệu chứng thường lộ rõ và khó chịu hơn. Kim phun cũng không phải chi tiết có tuổi thọ cố định: nó bền hay mau xuống cấp tùy chất lượng xăng, thói quen sử dụng và điều kiện khí hậu. Bài này chỉ bàn phần người dùng nhìn, nghe và ngửi được, còn mọi thao tác trên kim và đường xăng thuộc về thợ.'
    ]),
    P('Xăng được phun tơi và định lượng ra sao', [
      'Đầu kim phun có lỗ rất nhỏ, tùy xe là một lỗ hoặc vài lỗ. Xăng bị ép qua lỗ này ở mức áp suất được giữ ổn định sẽ tách thành những hạt li ti như sương mịn thay vì chảy thành dòng. Phun tơi quan trọng vì hạt càng nhỏ thì tổng bề mặt tiếp xúc với không khí càng lớn, xăng bay hơi nhanh, trộn đều với khí nạp và cháy trọn khi bugi đánh lửa. Ngược lại, hạt thô hoặc tia phun bị méo thì bay hơi chậm, một phần bám lên thành họng nạp và cháy không hết. Hệ quả người dùng cảm nhận được là máy chạy kém êm, tăng ga kém nhạy, mùi xăng chưa cháy hết nặng hơn và xe hao nhiên liệu hơn.',
      'Phần định lượng nghe phức tạp nhưng nguyên tắc khá gọn. Lượng xăng mỗi lần phun gần như phụ thuộc vào hai yếu tố: kim mở trong bao lâu, và xăng thoát ra nhanh cỡ nào qua lỗ phun, điều này do áp suất xăng và độ thông của lỗ quyết định. ECU điều chỉnh yếu tố thứ nhất, tức thời gian mở kim, còn yếu tố thứ hai được coi là chuẩn và ổn định. Vặn ga mạnh, cảm biến báo không khí vào nhiều, ECU kéo dài thời gian mở. Máy còn lạnh, ECU cho phun đậm hơn để dễ nổ. Một số xe còn cắt phun trong lúc xuống dốc thả ga, tùy xe. Như vậy mỗi lần phun là một phép tính nhỏ được lặp lại rất nhanh suốt lúc máy chạy.',
      'Giả định rằng lỗ phun thông và áp suất xăng đủ chính là chỗ cặn gây hại. Cùng một lệnh mở, kim bám cặn có thể cho ra ít xăng hơn vì lỗ bị thu hẹp, hoặc phun tia lệch. ECU không nhìn thấy thẳng điều này. Một số xe có cảm biến khí thải để ECU tự hiệu chỉnh và bù dần phần chênh, nên lệch nhẹ thường chưa gây triệu chứng; chỉ khi chênh vượt khả năng bù, người lái mới thấy xe khó nổ hay hụt ga. Điều đó giải thích vì sao nhiều người cảm thấy xe xuống cấp khá đột ngột dù cặn có thể đã tích từ lâu. Khả năng bù tùy từng dòng xe, nên đừng dựa vào việc xe vẫn chạy ổn để kết luận kim phun còn tốt.'
    ]),
    P('Vì sao kim phun bám cặn, tắc hoặc rò', [
      'Cặn trong kim phun có vài nguồn gốc. Nguồn dễ thấy nhất là bản thân nhiên liệu: xăng để lâu trong bình hoặc đường dẫn có thể biến chất, một phần tạo lớp nhựa dính; xăng kém sạch có thể lẫn bụi, hơi nước hay vụn gỉ từ bình chứa. Bộ lọc xăng và lưới lọc ở đầu bơm giữ lại phần lớn tạp chất, không phải tất cả, và khi lọc đã quá tải thì bơm phải làm việc nặng hơn trong khi bụi mịn vẫn có thể lọt xuống kim. Vì thế thói quen đổ xăng ở nơi đáng tin, cùng việc bảo dưỡng định kỳ theo sổ, có ý nghĩa thực tế. Cặn tích dần, nên chuyện tắc thường là kết quả của cả một quãng sử dụng hơn là một lần đổ xăng duy nhất.',
      'Nguồn thứ hai đến từ chính nhiệt của động cơ. Đầu kim nằm sát máy nóng. Tắt máy xong thì luồng gió làm mát biến mất, nhiệt từ xi-lanh ngấm lên họng nạp và thân kim. Lượng xăng còn đọng ở đầu kim và quanh lỗ phun ấm lên, phần nhẹ bay đi, phần nặng ở lại thành lớp cặn nhựa mỏng. Mỗi lần tắt máy lúc còn nóng lại thêm một chút, và lớp cặn dày dần theo thời gian. Do đó xe hay chạy quãng ngắn, nghỉ nhiều lần trong ngày có thể dễ bám cặn hơn xe chạy đều. Xe để lâu không nổ cũng có nguy cơ tương tự khi xăng đọng ở đầu kim khô lại. Đây là cơ chế chung, mức độ nhiều ít còn tùy thiết kế xe và chất lượng xăng.',
      'Rò là chuyện khác với tắc, và có hai kiểu. Rò ra ngoài thường xảy ra ở vòng đệm cao su quanh thân kim hoặc chỗ nối với đường dẫn, khi cao su cứng và nứt vì nhiệt cùng tuổi; xăng thấm ướt vùng quanh kim, tình huống có nguy cơ cháy. Rò vào trong xảy ra khi kim không đóng kín: cặn kẹt ở đế, mặt đóng mòn hoặc lò xo yếu khiến xăng nhỏ giọt vào họng nạp lúc máy nghỉ, làm xi-lanh ướt sẵn khi khởi động lại. Tách riêng với hai kiểu rò là lỗi điện ở cuộn dây hoặc giắc cắm, làm kim không mở dù xăng đủ. Mỗi kiểu cho triệu chứng khác nhau, nên thợ cần kiểm tra rồi mới kết luận, còn người dùng chỉ ghi lại điều mình thấy.'
    ]),
    P('Triệu chứng và cách phân biệt với bugi, lọc gió', [
      'Kim bám cặn hoặc tắc từng phần làm xăng ra ít hơn lệnh của ECU, hỗn hợp trở nên nhạt, và triệu chứng thường nghiêng về thiếu sức. Bạn có thể gặp xe khó nổ hơn, nhất là buổi sáng, hụt ga khi vặn nhanh, giật nhẹ khi tăng tốc hoặc leo dốc, cầm chừng rung và không đều, đi chở nặng thấy yếu hơn trước. Trong vài trường hợp xe còn nóng máy hơn thường lệ vì hỗn hợp nhạt cháy nóng hơn, nhưng đó chỉ là khả năng, không phải dấu hiệu chắc chắn. Triệu chứng thường tăng dần theo tuần tháng và hay rõ nhất ở những chế độ cần nhiều xăng. Cũng cần nhớ rằng thiếu xăng còn có thể do bơm yếu hoặc lọc xăng nghẹt, nên đây mới chỉ là gợi ý.',
      'Kim rò hoặc đóng không kín thì ngược lại: xăng thừa. Dấu hiệu hay gặp là mùi xăng sống ở ống xả hoặc quanh máy, xe hao nhiên liệu hơn thường lệ, máy ho rồi tắt khi khởi động lại lúc đang nóng, đề quay khỏe mà máy rung giật vài giây đầu mới đều. Thợ mở bugi ra có thể thấy đầu bugi đen hoặc ướt xăng, còn nhớt máy có mùi xăng cho thấy xăng thừa đã trôi xuống cạc-te; cả hai chỉ thợ kiểm tra được. Kim rò ra ngoài lại có dấu hiệu riêng: mùi xăng nồng ở khu vực máy, vệt ẩm hay xăng đọng quanh chỗ gắn kim. Gặp những dấu hiệu rò ra ngoài, hãy coi là nguy cơ cháy chứ đừng coi là chuyện khó nổ thông thường.',
      'Phân biệt với bugi và lọc gió dựa nhiều vào mẫu hình xuất hiện. Bugi yếu, bám muội hoặc ướt thường gây nổ hụt, máy rung, khó đề, và hay lộ rõ khi vặn ga mạnh; bugi là chi tiết thay theo định kỳ nên xe quá hạn bảo dưỡng đáng nghi trước. Lọc gió bẩn làm thiếu không khí, hỗn hợp thành giàu, xe ì, hao xăng, nặng hơn khi chạy nhiều đường bụi. Nếu bugi và lọc gió đã bảo dưỡng đúng hạn mà triệu chứng vẫn còn, kim phun và các khâu cấp xăng mới đáng nghi hơn. Nhưng ranh giới vẫn mờ, vì cùng một triệu chứng còn do bơm xăng, cảm biến, hút gió lọt hay xăng kém. Vì vậy chỉ nên coi chúng là gợi ý để ghi chú cho thợ.'
    ]),
    P('Việc nên làm, việc nên tránh và lúc giao thợ', [
      'Việc nên làm đều đơn giản và không đụng tới đường xăng. Hãy đổ xăng ở nơi bạn tin tưởng, tránh thói quen chạy cho tới khi bình gần cạn vì cặn lắng ở đáy bình có thể bị hút lên, và bơm cũng dễ nóng hơn khi ít xăng bao quanh. Giữ đúng lịch bảo dưỡng trong sách hướng dẫn, trong đó có các hạng mục về lọc và bugi tùy xe. Xe sắp để lâu không chạy thì nên hỏi thợ cách bảo quản phù hợp thay vì để xăng nằm lâu trong hệ thống. Khi triệu chứng xuất hiện, hãy ghi lại lúc nào xảy ra, nóng hay nguội, có mùi hay đèn báo không, rồi lúc gặp thợ thì hỏi họ kết luận kim bẩn dựa trên phép kiểm tra nào.',
      'Điều nên tránh còn quan trọng hơn. Đừng tự tháo kim phun, ống xăng hay giắc điện: đường xăng có thể còn áp suất, xăng bắn ra gần máy nóng rất dễ bốc cháy, và lắp lại sai chỗ làm kín dễ gây rò về sau. Đừng đổ phụ gia theo lời mách, đừng xịt chất tẩy vào họng ga, đừng thổi khí nén vào các chi tiết điện tử, vì những việc ấy khó kiểm soát, có thể che mất triệu chứng, thậm chí gây hỏng thêm. Đừng đề liên tục khi xe ngập xăng, và đừng thử kim bằng cách gõ hay lắc. Hơi xăng bắt lửa từ ống xả nóng, tia lửa điện hay điếu thuốc, nên làm việc gần nhiên liệu luôn phải cách xa mọi nguồn lửa. Trong nhà kín, mùi xăng càng đáng ngại.',
      'Có những tình huống cần ngừng chạy ngay. Gặp mùi xăng nồng, thấy xăng ướt hoặc nhỏ giọt quanh máy, máy giật mạnh gây mất an toàn hay tắt giữa đường đông, hãy bóp phanh, giảm tốc, tấp vào chỗ an toàn rồi dừng xe. Tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Sau đó dắt xe ra xa vật dễ cháy, không hút thuốc, không đề lại, không dùng lửa soi tìm chỗ rò. Những trường hợp nhẹ hơn nhưng lặp lại cũng nên đưa thợ sớm. Họ có thể đọc dữ liệu, kiểm tra áp suất xăng, độ kín và dạng tia phun, rồi làm sạch bằng thiết bị chuyên dụng hoặc thay kim tùy tình trạng, đúng yêu cầu của từng dòng xe.'
    ])
  ],
  checklist: [
    'Ghi lại triệu chứng theo hoàn cảnh: khó nổ, hụt ga hay hao xăng, xảy ra lúc nóng hay nguội, ở chế độ nào của tay ga.',
    'Chú ý mùi xăng sống ở ống xả hoặc quanh khu vực máy; đứng cách xa vật nóng khi ngửi, không cúi sát.',
    'Xem đèn báo lỗi động cơ trên bảng đồng hồ tắt như bình thường hay sáng, nháy, và vào thời điểm nào.',
    'Đối chiếu lịch bảo dưỡng bugi và lọc gió trong sách hướng dẫn trước khi nghi ngờ kim phun.',
    'Đưa ghi chú cho thợ và hỏi họ kết luận kim bẩn, tắc hay rò dựa trên phép kiểm tra nào.'
  ],
  steps: [
    { title: 'Quan sát và ghi lại triệu chứng', detail: 'Ghi xe khó nổ, hụt ga, giật hay hao xăng, xảy ra lúc nóng hay nguội, ở chế độ nào; có mùi xăng hoặc đèn báo hay không.' },
    { title: 'Đối chiếu bảo dưỡng định kỳ', detail: 'Xem sổ bảo dưỡng để biết bugi, lọc gió và các hạng mục lọc đã đến hạn chưa; quá hạn thì nhờ thợ xử lý trước.' },
    { title: 'Giữ thói quen nhiên liệu tốt', detail: 'Đổ xăng ở nơi đáng tin, tránh chạy cho bình gần cạn thường xuyên, và hỏi thợ cách bảo quản nếu xe sắp để lâu.' },
    { title: 'Giao thợ chẩn đoán bằng thiết bị', detail: 'Nhờ đọc dữ liệu, kiểm tra áp suất xăng, độ kín và dạng tia phun của kim; để thợ quyết định làm sạch hay thay.' }
  ],
  warnings: [
    'Mùi xăng nồng, xăng ướt hoặc nhỏ giọt quanh máy là nguy cơ cháy: bóp phanh, dừng xe an toàn, tắt máy bằng công tắc hoặc khóa điện, tránh lửa và tia lửa, không đề lại, đưa xe đi kiểm tra.',
    'Không tự tháo kim phun, ống xăng hay giắc điện; đường xăng có thể còn áp suất và hơi xăng rất dễ bắt lửa gần máy nóng.',
    'Không đổ phụ gia theo mẹo, không xịt chất tẩy vào họng ga, không thổi khí nén vào chi tiết điện tử, không đề liên tục khi xe ngập xăng.'
  ],
  notes: [
    'Các triệu chứng trong bài chỉ là gợi ý để trao đổi với thợ; bugi, lọc gió, bơm xăng, cảm biến, hút gió lọt hay xăng kém cũng gây biểu hiện tương tự và chỉ thợ mới kết luận được.',
    'Cấu tạo, số lượng kim, cách ECU hiệu chỉnh và các đèn báo khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần nhiên liệu, bảo dưỡng định kỳ và các đèn báo trên bảng đồng hồ',
    'Tài liệu kỹ thuật của nhà sản xuất về hệ thống phun xăng điện tử của đúng dòng xe'
  ],
  related: ['xe-phun-xang-kho-no-khi-may-nong', 'xe-may-bi-giat-hut-ga-nguyen-nhan-va-cach-xu-ly', 'xe-hao-xang-nguyen-nhan-va-cach-xu-ly', 'cam-bien-tren-xe-phun-xang', 'phun-xang-dien-tu']
};
