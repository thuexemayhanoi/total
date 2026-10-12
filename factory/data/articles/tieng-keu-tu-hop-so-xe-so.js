// AI WIKI TOTAL — S01171; phân loại tiếng kêu hộp số xe số theo điều kiện xuất hiện, không số liệu, không tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'tieng-keu-tu-hop-so-xe-so',
  title: 'Tiếng kêu từ hộp số xe số: rít, gầm, lạch cạch ở từng số và cách mô tả để thợ chẩn đoán',
  seoTitle: 'Tiếng kêu hộp số xe máy: rít, gầm, lạch cạch và cách mô tả cho thợ',
  metaDescription: 'Tiếng kêu hộp số xe máy rít, gầm hay lạch cạch ở từng số? Cách phân loại âm thanh theo điều kiện, liên hệ với nhớt, bạc đạn, bánh răng, xích và ghi chú cho thợ.',
  summary: 'Bài giúp bạn biến tiếng rít, gầm hoặc lạch cạch từ vùng hộp số của xe số thành những mô tả có điều kiện: kêu ở số nào, lúc tăng ga hay nhả ga, khi máy nguội hay đã nóng. Nội dung liên hệ từng loại âm thanh với nhớt, bạc đạn trục và bánh răng mòn, rồi chỉ cách tách chúng khỏi tiếng sên xích và ly hợp bằng những quan sát an toàn. Bài cũng nêu cách ghi chú để thợ nghe đúng điều kiện và những dấu hiệu cho thấy không nên chạy tiếp khi tiếng nặng dần.',
  quickAnswer: 'Tiếng rít thường gợi ý bánh răng mòn, tiếng gầm đều ở nhiều số gợi ý bạc đạn trục hoặc nhớt thiếu, còn tiếng lạch cạch có nhịp có thể đến từ độ rơ truyền động, ly hợp hoặc cơ cấu gài số. Hãy ghi kêu ở số nào, lúc tăng ga hay nhả ga, nguội hay nóng. Tiếng nặng dần, nhảy số, trượt côn hoặc mạt kim loại trong nhớt là lý do dừng xe, giao thợ.',
  keyPoints: [
    'Tiếng chỉ xuất hiện ở một số thường dẫn về cặp bánh răng hoặc cơ cấu gài của số đó; tiếng có ở nhiều số và đậm theo tốc độ thường dẫn về bạc đạn hoặc nhớt.',
    'Tiếng rít là âm cao, mảnh, hay đi cùng mặt răng mòn; tiếng gầm là âm trầm, nặng, hay đi cùng bạc đạn mòn rơ; tiếng lạch cạch có nhịp gợi ý độ rơ trong truyền động hoặc ly hợp.',
    'Xe đứng yên, nổ cầm chừng ở số mo thì sên xích không chạy, nên tiếng còn nghe được lúc ấy gần như không đến từ sên.',
    'Ghi chú nên có: tiếng gì, số nào, lúc nào, nguội hay nóng, tốc độ nào, nặng dần hay giữ nguyên, bắt đầu sau sự việc gì.',
    'Tiếng nặng dần, rung lên cần số, nhảy số, trượt côn, mùi khét, rò nhớt hoặc mạt kim loại trong nhớt là lý do dừng xe an toàn và giao thợ.'
  ],
  category: 'garage',
  hub: 'truyen-dong',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['hộp số xe số', 'bánh răng hộp số', 'bạc đạn trục', 'nhớt hộp số', 'sên xích truyền động', 'ly hợp'],
  keywords: ['tiếng kêu hộp số xe máy', 'hộp số xe máy kêu', 'xe số gầm khi chạy', 'hộp số xe số có tiếng rít'],
  sections: [
    P('Hộp số xe số gồm những gì và tiếng đến từ đâu', [
      'Hộp số của xe số nằm chung trong cụm vỏ máy với trục khuỷu và ly hợp, nên người lái ít khi nhìn thấy nó mà chủ yếu nghe thấy nó. Bên trong có hai trục chạy song song: trục sơ cấp nhận lực từ ly hợp, còn trục thứ cấp đưa lực ra nhông trước để sên xích kéo bánh sau. Trên hai trục là các cặp bánh răng ăn khớp nhau, mỗi số ứng với một cặp riêng, nên số thấp và số cao dùng những cặp bánh răng khác nhau. Quy tắc đầu tiên: tiếng chỉ xuất hiện ở một số thường dẫn về cặp bánh răng hoặc cơ cấu gài của số ấy, còn tiếng xuất hiện ở mọi số thường dẫn về thứ dùng chung cho cả cụm, như bạc đạn hay nhớt.',
      'Muốn chuyển số, chân bạn đạp cần số, và chuyển động ấy đi qua trống số có rãnh cùng các càng gạt bên trong máy. Càng gạt đẩy bánh răng hoặc vấu gài trượt dọc trục để khóa một cặp bánh răng vào trục, trong khi các cặp còn lại quay trơn không truyền lực. Nghĩa là ở bất kỳ số nào cũng chỉ có một cặp đang gánh tải, còn những cặp khác vẫn quay theo và vẫn có thể phát ra tiếng nhỏ. Vì thế một chiếc xe khỏe mạnh vẫn có tiếng vo vo hoặc lách cách nhẹ đều đặn, và mỗi xe có một giọng riêng mà người dùng lâu ngày sẽ quen. Điều đáng lo là giọng ấy thay đổi: to hơn, thô hơn, hoặc có thêm một âm mới.',
      'Quanh các bánh răng còn có bạc đạn đỡ trục, phớt giữ kín và nhớt bôi trơn. Ở nhiều xe số, nhớt trong cụm máy dùng chung cho động cơ, ly hợp và hộp số, nhưng cách chia nhớt và cách kiểm tra mức nhớt tùy từng xe, nên bạn cần đối chiếu với sách hướng dẫn của đúng xe mình. Nhớt làm ba việc: tạo màng bôi trơn trên mặt răng, mang bớt nhiệt và cuốn mạt kim loại nhỏ đi. Nhớt thiếu, quá cũ hoặc đã loãng đi vì dùng lâu thì màng bảo vệ mỏng dần, và tiếng kim loại chạm kim loại bắt đầu lộ ra. Ngoài hộp số còn có ba nguồn dễ gây nhầm: sên xích với nhông dĩa bên ngoài, ly hợp nằm sát bên và bạc đạn bánh xe.'
    ]),
    P('Âm thanh theo điều kiện: số nào, lúc nào', [
      'Cách lọc nguyên nhân là biến tiếng kêu thành một câu có điều kiện. Bốn câu hỏi cần trả lời: kêu ở số nào, kêu lúc tăng ga hay lúc nhả ga, kêu khi máy nguội hay đã nóng, và kêu khi xe đứng yên hay đang lăn bánh. Tiếng chỉ có ở một số và biến mất khi sang số khác gợi ý cặp bánh răng hoặc cơ cấu gài của số đó. Tiếng có ở nhiều số, cao dần theo tốc độ, thường gợi ý bạc đạn, nhớt hoặc chi tiết dùng chung. Thêm một mẹo nhỏ: tiếng đổi cao độ theo vòng tua máy thì nghiêng về phía ly hợp và trục sơ cấp, còn tiếng bám theo tốc độ xe dù đang ở số nào thì nghiêng về phía sau, gần nhông, sên và bánh xe. Ranh giới này tùy xe.',
      'Tiếng rít là âm cao, mảnh, giống tiếng hú kéo dài, thường cao hơn khi xe nhanh lên. Nếu rít rõ ở một số và đổi tính chất giữa lúc kéo ga với lúc nhả ga, nguyên nhân hay gặp là mặt răng bị mòn, rỗ hoặc khe hở giữa các răng đã khác đi. Hai chiều tải làm hai mặt răng khác nhau tiếp xúc, nên một bánh răng mòn lệch có thể rít khi kéo mà im khi nhả, hoặc ngược lại. Tiếng gầm thì trầm và nặng, như tiếng ù, thường đều ở nhiều số và đậm lên theo tốc độ. Kiểu xe số gầm khi chạy này hay đi cùng bạc đạn trục đã mòn rơ, vì bạc đạn quay liên tục bất kể bạn đang ở số nào.',
      'Tiếng lạch cạch, lách cách hoặc cụp là âm rời rạc, có nhịp. Nghe ở số mo lúc cầm chừng rồi đổi hoặc mất đi khi thao tác côn hay thay đổi ga nhẹ, bạn đang nghe thứ gì đó phía trục sơ cấp hoặc ly hợp. Nghe như một cú rơ nhỏ ở thời điểm vừa nhả ga hoặc vừa chạm ga lại, hướng nghi ngờ là độ rơ trong truyền động. Tiếng cụp mạnh lúc gài số, số vào nặng, khó vào hoặc xe tự nhảy số khi tăng ga là chuyện của cơ cấu gài, nên đưa thợ sớm. Về nhiệt độ, ồn lúc nguội rồi êm dần gợi ý nhớt còn đặc hoặc khe hở nhỏ, còn chỉ ồn khi đã nóng gợi ý nhớt loãng, thiếu hoặc bạc đạn đã rơ.'
    ]),
    P('Nhớt, bạc đạn và bánh răng mòn', [
      'Nhớt đứng đầu danh sách nghi ngờ vì là thứ dễ kiểm tra nhất và dễ loại trừ nhất. Cơ chế khá đơn giản: nhớt đủ và còn tốt tạo màng giữa hai mặt kim loại, màng mỏng đi thì ma sát tăng, nhiệt tăng, bề mặt mòn nhanh hơn và âm thanh to dần. Bạn có thể quan sát vài điều mà không cần mở máy: mức nhớt theo cách sách hướng dẫn chỉ cho đúng xe, màu nhớt đen đặc bất thường, mùi khét hoặc ánh kim loại lấp lánh khi soi dưới đèn. Đừng đổ thêm bừa khi chưa biết loại và mức đúng, đừng đổi loại tùy ý, và đừng dùng chất che tiếng, vì che tiếng không sửa được hư hỏng mà còn làm thợ mất manh mối.',
      'Bạc đạn là vòng bi đỡ các trục, gồm bi hoặc con lăn quay giữa hai vòng. Chúng mòn vì thiếu bôi trơn, lẫn bụi hoặc nước, quá tải lâu ngày hay đơn giản là đã già. Bạc đạn mòn rất khó tự hết tiếng: nó kêu gầm đều, đậm theo tốc độ và thường nặng dần theo thời gian, không biến mất sau khi máy nóng. Khi bạc đạn rơ, trục lệch đi chút ít, bánh răng ăn khớp không đều và sinh thêm tiếng rít hoặc lạch cạch. Bạc đạn bánh xe cũng hay bị nhầm vào đây: nó thường kêu theo tốc độ xe, đổi khi nghiêng xe vào cua và vẫn kêu khi bạn nhả ga, còn tiếng từ bạc đạn trong máy hay đổi theo ga và vòng tua. Phân biệt chắc chắn là việc của thợ.',
      'Bánh răng mòn là kết quả cuối của nhiều lý do: nhớt thiếu hoặc bẩn, mạt kim loại cuốn qua mặt răng, chở nặng và leo dốc lâu ở số cao khi máy đang gồng, hay thói quen gài số thô bạo, vào số lúc còn ga lớn. Mặt răng đầu tiên bị bóng loáng hoặc rỗ li ti, sau đó xuất hiện tiếng rít ở đúng số hay dùng nhiều nhất. Khi răng sứt hoặc mẻ, tiếng chuyển thành lạch cạch có nhịp theo vòng quay của trục, và các mảnh vụn nhỏ trôi trong nhớt gây mòn thêm cho các chi tiết khác. Dấu hiệu bổ sung gồm số vào giật, hụt lực rõ ở một số, xe nhảy số khi tăng ga và mạt sáng lấp lánh trong nhớt khi thợ kiểm tra.'
    ]),
    P('Phân biệt với tiếng xích và ly hợp', [
      'Sên xích là thủ phạm thường bị nhầm nhất. Tiếng sên là kiểu lạch xạch hoặc rin rít đều đặn, nhịp theo vòng quay bánh xe, nhanh dần khi xe nhanh lên và gần như không phụ thuộc bạn đang ở số nào, chỉ cần sên khô, bẩn, chùng hoặc nhông dĩa mòn. Có một phép thử đơn giản và an toàn: để xe đứng yên, chống xe vững, nổ máy cầm chừng ở số mo. Lúc này bánh xe không quay nên sên cũng không chạy, vậy tiếng nào còn nghe được lúc ấy gần như không đến từ sên. Ngược lại, tiếng chỉ có khi xe đang lăn và biến mất khi xe dừng thì nghiêng về sên, nhông hoặc bánh xe. Đừng chạm tay vào sên hay nhông khi máy đang nổ.',
      'Ly hợp nằm sát hộp số và ở nhiều xe cùng ngâm trong nhớt chung, nên tiếng của nó dễ lẫn vào tiếng hộp số. Với xe có tay côn, tiếng lạch cạch ở số mo cầm chừng mà đổi hoặc mất khi bạn bóp tay côn thường nghiêng về ly hợp hoặc trục sơ cấp; tiếng rè rè chỉ xuất hiện lúc đang bóp côn thường gợi ý bộ phận đẩy côn. Với xe dùng ly hợp tự động, tiếng đổi theo vòng tua lúc cầm chừng và lúc vừa tăng ga nhẹ. Còn một dấu hiệu phụ đáng chú ý: vòng tua vọt lên mà xe không tăng tốc tương ứng, kèm mùi khét, nghĩa là ly hợp có thể đang trượt chứ không phải hộp số kêu, nên giao thợ.',
      'Để dễ nhớ, hãy xếp các nguồn theo thứ tự điều kiện. Tiếng của phần trên động cơ, như cò mổ hay sên cam, bám theo vòng tua máy và vẫn có ở số mo, không đổi theo số. Tiếng ly hợp đổi theo thao tác côn hoặc ga lúc cầm chừng. Tiếng sên và bạc đạn bánh xe bám theo tốc độ xe, mất khi xe đứng yên. Tiếng hộp số thường gắn với số đang gài, thay đổi giữa lúc kéo ga và lúc nhả ga, và đôi khi vẫn nghe nhỏ ở số mo. Ngoài ra đừng bỏ qua những thủ phạm vụn vặt: ống xả lỏng, chắn sên hay chắn bùn rơ, ốc bắt các nắp che bị lỏng cũng tạo ra tiếng gầm hoặc lạch cạch rất giống tiếng trong máy.'
    ]),
    P('Việc nên làm và lúc giao thợ', [
      'Phần việc của bạn là quan sát và loại trừ những thứ đơn giản, không phải mở máy. Chống xe vững trên nền phẳng, để máy nguội, xem mức nhớt theo đúng cách sách hướng dẫn mô tả. Nhìn quanh vỏ máy, nắp bên và chắn sên xem có vết nhớt ướt hoặc bụi dính thành mảng không. Xem sên có khô, rỉ, bám cát hoặc chùng bất thường không, và lốp hay mâm sau có dính nhớt bắn không, vì nhớt trên bánh sau là nguy cơ trượt. Sau đó nổ máy ở nơi thoáng, đứng yên ở số mo, nghe tiếng nền ra sao để so với lúc xe chạy. Tuyệt đối không tự mở vỏ hộp số, không tháo nắp ly hợp hay thử gài số mạnh để dò tiếng.',
      'Thợ chẩn đoán tốt nhất khi nghe đúng điều kiện, nên ghi chú của bạn rất đáng giá. Hãy ghi tiếng gì (rít, gầm, lạch cạch hay cụp), kêu ở số nào, lúc tăng ga, nhả ga, vào số hay cầm chừng, lúc máy nguội hay đã nóng, ở vùng tốc độ hoặc vòng tua nào, và có đổi khi nghiêng xe hoặc khi chở nặng không. Cũng ghi tiếng to dần hay giữ nguyên, bắt đầu từ lúc nào, sau sự việc gì như thay nhớt, ngập nước hay ngã xe. Có thể quay một đoạn ngắn lúc xe đứng yên, hoặc nhờ người đi cùng quay, đừng vừa lái vừa cầm điện thoại. Hãy mang xe đến khi tiếng còn xuất hiện, và tránh đổ thêm chế phẩm trước đó để khỏi xóa manh mối.',
      'Tiếng nặng dần theo thời gian hoặc to lên rõ rệt, rung truyền lên cần số hoặc bàn đạp, số khó vào, xe nhảy số khi tăng ga, trượt côn kèm mùi khét, nhớt rò ướt vỏ máy hoặc nhớt có ánh kim loại đều là lý do ngừng chạy tiếp. Lý do là bạc đạn rơ sẽ kéo bánh răng lệch, bánh răng mẻ làm vụn kim loại trôi theo nhớt chung sang cả động cơ, và trong trường hợp xấu một răng gãy hoặc bạc đạn vỡ có thể làm kẹt trục, khiến bánh sau khựng bất ngờ. Lúc ấy hãy bóp phanh, dừng xe vào chỗ an toàn, rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Đừng đề lại để thử, hãy nhờ chở xe đi.'
    ])
  ],
  checklist: [
    'Ghi lại tiếng bằng từ ngữ cụ thể như rít, gầm, lạch cạch hay cụp, kèm số đang gài.',
    'Để ý tiếng đổi thế nào giữa lúc tăng ga và lúc nhả ga, giữa lúc máy nguội và lúc đã nóng.',
    'Đứng yên ở số mo, nổ cầm chừng ở nơi thoáng để nghe tiếng nền và loại trừ sên xích.',
    'Xem mức nhớt theo đúng cách sách hướng dẫn mô tả và nhìn quanh vỏ máy có vết nhớt ướt hay không.',
    'Xem sên có khô, bẩn hoặc chùng bất thường không, và lốp sau có dính nhớt bắn không.'
  ],
  steps: [
    { title: 'Nghe và gọi tên âm thanh', detail: 'Nghe ở nơi yên tĩnh, xác định tiếng giống rít, gầm hay lạch cạch, có nhịp hay kéo dài, rồi ghi lại bằng lời mô tả.' },
    { title: 'Gắn tiếng với điều kiện', detail: 'Ghi số nào, tăng ga hay nhả ga, nguội hay nóng, đứng yên hay đang lăn, tốc độ hay vòng tua nào và có đổi khi nghiêng xe không.' },
    { title: 'Loại trừ phần dễ kiểm tra', detail: 'Xem mức nhớt theo sách hướng dẫn, nhìn vết rò quanh vỏ máy, tình trạng sên và chắn sên; thử đứng yên ở số mo để tách tiếng sên khỏi tiếng trong máy.' },
    { title: 'Giao thợ cùng ghi chú', detail: 'Mang xe đến khi tiếng còn xuất hiện, đưa ghi chú và đoạn quay ngắn lúc xe đứng yên; không tự mở hộp số hay nắp ly hợp.' }
  ],
  warnings: [
    'Tiếng nặng dần, rung lên cần số hoặc bàn đạp, nhảy số, trượt côn kèm mùi khét, rò nhớt hoặc mạt kim loại trong nhớt là lý do dừng xe: bóp phanh, dừng vào chỗ an toàn, tắt máy bằng công tắc tắt máy hoặc khóa điện về vị trí tắt rồi nhờ chở xe đi kiểm tra.',
    'Không tự mở vỏ hộp số, không tháo nắp ly hợp, không thử gài số mạnh để dò tiếng và không chạm tay vào sên hay nhông khi máy đang nổ.',
    'Không đổ thêm nhớt hay chất che tiếng khi chưa biết loại và mức đúng theo sách hướng dẫn; nhớt dính lên lốp sau làm xe dễ trượt, cần lau sạch và tìm chỗ rò.'
  ],
  notes: [
    'Các phép phân biệt trong bài chỉ là gợi ý định hướng: cấu tạo hộp số, ly hợp, cách dùng chung nhớt và vị trí kiểm tra khác nhau tùy dòng xe, và chỉ thợ có thiết bị mới kết luận được nguồn tiếng.',
    'Tiếng kêu ở vùng hộp số đôi khi chỉ là sên khô, ống xả lỏng hay chắn rơ; hãy loại trừ những thứ đơn giản trước, nhưng đừng trì hoãn khi tiếng nặng dần.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bôi trơn, kiểm tra mức nhớt và bảo dưỡng sên xích',
    'Tài liệu kỹ thuật của nhà sản xuất về cụm hộp số và ly hợp của đúng dòng xe'
  ],
  related: ['xe-keu-lach-cach', 'tieng-keu-la-tren-xe-may-phan-doan', 'chan-doan-loi-xe', 'bac-dan-banh-xe-may-vai-tro-va-dau-hieu-mon', 'xich-cam-xe-may-keu-va-tang-xich-cam']
};
