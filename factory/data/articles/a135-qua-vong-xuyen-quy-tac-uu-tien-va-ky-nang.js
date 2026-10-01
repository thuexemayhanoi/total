// AI WIKI TOTAL — bài mở rộng cụm /learn/ky-thuat-lai-xe/: qua vòng xuyến: quy tắc ưu tiên và kỹ năng (slot S00135)
'use strict';

module.exports = {
  slug: 'qua-vong-xuyen-quy-tac-uu-tien-va-ky-nang',
  title: 'Qua vòng xuyến: quy tắc ưu tiên và kỹ năng',
  seoTitle: 'Qua vòng xuyến xe máy: quy tắc ưu tiên và kỹ năng',
  metaDescription: 'Vòng xuyến khiến nhiều người lái bối rối về nhường đường và làn. Bài viết giải thích quy tắc ưu tiên, chọn làn và kỹ thuật ra vào vòng xuyến an toàn.',
  summary: 'Vòng xuyến được thiết kế để dòng xe tự điều phối mà không cần đèn tín hiệu — nhưng chính sự tự điều phối đó khiến nhiều người lái xe máy bối rối: ai nhường ai, vào làn nào, và ra ở vị trí nào. Bài viết này giải quyết trọn bộ ba câu hỏi. Phần nguyên lý: vòng xuyến đổi phép tắc của giao lộ — mọi xe trong vòng được ưu tiên trước xe chuẩn bị vào, và trật tự ra khỏi dòng ưu tiên là nguồn gần như mọi va chạm tại đây. Phần quy tắc cụ thể: nhường xe đang trong vòng trước khi vào, chọn làn theo hướng ra — phải cho lối ra đầu, trái cho lối ra xa, vào làn rồi giữ làn tới điểm ra, và báo hiệu xi nhan đúng nhịp: xi nhan phải khi chuẩn bị ra, không xi nhan khi còn đi tiếp. Ph phần kỹ năng chạy trong vòng: tốc độ đúng — đủ chậm để xử lý, đủ đều để không làm dòng phía sau gấp; vị trí trong làn rõ ràng để xe khác đọc được ý định; quan sát góc vào mù của vòng; và cách đối phó với xe ô tô lớn chiếm làn. Ph phần các tình huống khó: vòng xuyến nhiều làn đông giờ cao điểm, vòng nhỏ trong hẻm khu dân cư, và vòng có xe đạp xe điện lẫn dòng; cách xử lý khi lỡ qua lối ra — đi tiếp một vòng rồi ra, không phanh gấp và cắt ngang. Ph phần sai lầm phổ biến: dừng chết trước vòng khi dòng vẫn chảy đều, vào vòng không nhường, đổi làn giữa vòng không báo hiệu, và tốc độ quá nhanh khiến xe trong vòng không đoán được. Kết bài là nguyên tắc tổng: vòng xuyến an toàn dựa trên ba chữ — nhường trước, giữ làn, và ra dứt khoát.',
  quickAnswer: 'Trả lời ngắn: qua vòng xuyến an toàn nằm ở ba chữ — nhường trước, giữ làn, ra dứt khoát. Vào vòng: giảm tốc từ xa, quan sát dòng trong vòng, nhường mọi xe đang đi trong vòng rồi mới vào với ga đều — không dừng chết trước vòng khi dòng vẫn chảy, chỉ dừng khi thực sự cần. Trong vòng: chọn làn theo hướng ra ngay từ lúc vào — lối ra đầu thì làn ngoài, lối xa thì làn trong; giữ đúng làn của mình và báo hiệu rõ: xi nhan phải trước khi chuẩn bị ra, không xi nhan khi còn đi tiếp. Ra vòng: xi nhan phải sớm, thong thả chuyển ra làn ngoài rồi rời vòng, nhường người đi bộ và xe đạp ở miệng ra nếu có. Lỡ qua lối ra: giữ bình tĩnh đi tiếp một vòng nữa rồi ra — không phanh gấp, không cắt ngang làn giữa vòng. Với ô tô lớn trong vòng: đừng bám sát vào góc mù của nó, để nó chiếm chỗ trước rồi mình đi sau theo hướng rõ ràng. Tốc độ trong vòng giữ ở mức dòng xe cùng chạy: quá nhanh làm xe khác không đoán được mình, quá chậm làm cả vòng bị nghẽn sau lưng.',
  keyPoints: [
    'Xe đang trong vòng được ưu tiên — nhường dòng trong vòng rồi mới vào, không dừng chết khi dòng vẫn chảy đều.',
    'Chọn làn ngay từ lúc vào theo hướng ra: lối ra đầu đi làn ngoài, lối xa đi làn trong, giữ làn tới điểm ra.',
    'Xi nhan đúng nhịp: xi nhan phải khi chuẩn bị ra khỏi vòng, không xi nhan khi còn tiếp tục trong vòng.',
    'Tốc độ trong vòng đủ đều để dòng phía sau đọc được — quá nhanh làm người khác không đoán, quá chậm làm nghẽn.',
    'Lỡ qua lối ra: đi tiếp một vòng rồi ra — không phanh gấp và cắt ngang làn giữa vòng.',
    'Với ô tô lớn: không bám góc mù, để nó chiếm chỗ trước rồi đi sau theo hướng rõ ràng của mình.',
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['vòng xuyến', 'quy tắc ưu tiên', 'làn đường', 'xi nhan', 'góc mù', 'miệng vòng'],
  keywords: ['qua vòng xuyến xe máy', 'quy tắc vòng xuyến', 'nhường đường vòng xuyến', 'kỹ thuật đi vòng xuyến', 'vào vòng xuyến đúng làn', 'đi vòng xuyến an toàn'],
  sections: [
    {
      h2: 'Vì sao vòng xuyến đổi phép tắc của giao lộ',
      html: `<p>Tại giao lộ thường, trật tự đến từ đèn tín hiệu hoặc quy tắc ưu tiên theo đường. Vòng xuyến bỏ đèn và đổi trật tự sang một quy tắc duy nhất: xe nào đang ở trong dòng vòng thì được ưu tiên, xe nào chuẩn bị vào thì nhường. Sự đơn giản đó là sức mạnh của vòng xuyến — dòng xe tự điều phối liên tục không cần ai chỉ huy — và cũng là bối rối của người chưa quen: không có đèn đỏ cầm nhịp, mọi quyết định nằm ở mắt và nhường nhịn của từng người.</p>
<p>Nguồn va chạm tại vòng xuyến vì thế rất tập trung: gần như toàn bộ nằm ở miệng vào — nơi xe chuẩn bị vào gặp xe đang trong vòng. Ai vào mà không nhường tạo ra hai kịch bản: hoặc bị tông từ phía trong vòng, hoặc khiến xe trong vòng phanh gấp gây dây chuyền phía sau. Hiểu rằng va chạm của vòng nằm ở miệng vào là hiểu chỗ cần đặt sự cảnh giác cao nhất.</p>
<p>Một điểm đặc thù của xe máy tại vòng: kích thước nhỏ khiến xe máy dễ chui vào được khe — và chính sức chui đó làm người lái lạm dụng, vào vòng bằng khe thay vì bằng nhường. Khe có thể vào được trong hai giây này không phải quyền vào của mình; quy tắc vẫn là nhường dòng, và chui khe là đánh cược bằng quy tắc với những xe không thấy mình tới.</p>`,
    },
    {
      h2: 'Ba làn và ba hướng ra: chọn làn ngay từ lúc vào',
      html: `<p>Vòng xuyến nhiều làn trên đường lớn thường tổ chức theo nguyên tắc: làn ngoài dành cho lối ra đầu tiên và ra sớm, làn giữa cho các lối ở giữa, làn trong cho lối ra xa hoặc đi tiếp nhiều nhánh. Chọn làn đúng ngay từ lúc vào là quyết định quan trọng nhất của cả vòng — vì đổi làn giữa vòng đông là thao tác rủi ro nhất tại đây.</p>
<p>Cách thực hành: trước khi vào vòng, biết trước mình sẽ ra ở nhánh nào — xem biển báo hướng trước miệng vòng, định vị lối ra bằng cách đếm nhánh theo chiều kim đồng hồ từ hướng mình vào. Ra đầu hoặc thứ hai: vào làn ngoài, đi một quãng ngắn rồi ra. Ra xa hơn: vào làn trong, đi vòng tới gần lối ra của mình rồi chuyển ra làn ngoài chuẩn bị ra — chuyển sớm một nhánh trước lối ra, có xi nhan, không rảo chuyển sát miệng ra.</p>
<p>Nguyên tắc kèm theo: giữ làn có nghĩa là giữ cả vị trí trong làn — đi giữa làn, không lượn lờ sát mép trong rồi mép ngoài, vì xe phía sau đọc vị trí đó để đoán ý định. Vòng xuyến là nơi mọi người đọc nhau thay vì đọc đèn: vị trí rõ ràng trong làn chính là ngôn ngữ của mình với dòng xe, và người đi lang bang trong làn là người bắt cả vòng phải đoán mò.</p>`,
    },
    {
      h2: 'Kỹ năng trong vòng: tốc độ đều, quan sát và ô tô lớn',
      html: `<p>Tốc độ trong vòng: đi bằng tốc độ dòng xe — không phải con số bảng hiệu, mà là nhịp chung của vòng lúc đó. Quá nhanh làm xe trong vòng không đoán được mình sẽ vào chỗ nào trong hai giây tới; quá chậm làm xe phía sau phải veer tránh và dây chuyền phanh. Tốc độ đều còn cho phép giữ ga ổn định — mọi điều chỉnh bằng ga nhẹ chứ không bằng phanh gấp, vì phanh gấp trong vòng là tín hiệu hiểu lầm cho xe sau.</p>
<p>Quan sát: vòng xuyến có góc mù riêng — khối đảo phân cách ở tâm che tầm nhìn ngang, và ô tô to phía trước che cả nhánh phía kia. Kỹ năng bù: liếc xuyên qua khe xe phía trước hơn là bám đuôi đèn phanh của nó — nhìn được dòng phía trước xe trước là nhìn được sớm một nhịp; và tại các vòng nhỏ không có đảo tâm, cúi thấp mắt qua để thấy nhánh đối diện qua mặt đường.</p>
<p>Với ô tô xe tải trong vòng: chúng cần bán kính rộng, nhiều lúc chiếm tràn cả hai làn để quay — đó không phải ẩu mà là hình học. Cách xử lý: lùi lại một nhịp, để nó thực hiện bán kính của nó, không song song bám sát vào góc mù bên hông; ô tô không thấy xe máy song song ngay hông là tình huống va chạm kinh điển của vòng xuyến, và người lái xe máy luôn là bên có thể tránh trước bằng cách không đứng vào chỗ đó.</p>`,
    },
    {
      h2: 'Ra khỏi vòng: dứt khoát và không cắt ngang',
      html: `<p>Ra khỏi vòng là phần dễ nhất nếu các bước trước đúng: xi nhan phải trước khi tới lối ra một nhịp, chuyển ra làn ngoài nếu còn ở làn trong, giữ tốc độ đều và ra khỏi miệng với ga nhẹ. Xi nhan đúng lúc quan trọng vì xe ở nhánh chuẩn bị vào đang đọc tín hiệu đó để quyết định vào hay chờ — xi nhan muộn làm họ vào sớm, xi nhan sớm khi chưa ra làm họ chờ oan và gây tắc.</p>
<p>Ở miệng ra có người đi bộ hoặc xe đạp qua: quy tắc nhường vẫn kéo dài ra khỏi vòng — miệng ra của vòng xuyến là một phần của giao lộ, và rời vòng với ga vọt khi có người đang qua đường là lỗi quen thuộc của người coi vòng xuyến đã xong khi ra khỏi tâm. Giữ tốc độ ra vừa phải tới khi hoàn toàn rời nhánh.</p>
<p>Lỡ qua lối ra: điều duy nhất đúng là đi tiếp — vòng xuyến cho phép quay lại một cách duyên dáng mà không giao lộ nào khác có: đi tiếp một vòng, về lại vị trí, và ra đúng lối. Phanh gấp sát miệng ra, hoặc tệ hơn, rảo ngược cắt làn để lấy lại lối đã lỡ — đó là hai thao tác biến một lỗi bé (đi quá lối) thành một rủi ro lớn (va chạm giữa vòng). Người đi vòng xuyến giỏi là người chấp nhận đi thêm một vòng mà mặt không đổi vẻ gì.</p>`,
    },
    {
      h2: 'Vòng nhỏ khu dân cư và vòng giờ cao điểm',
      html: `<p>Vòng xuyến nhỏ trong hẻm, khu dân cư: thường chỉ một làn, không có biển hướng, và dòng chảy chậm. Tại đây quy tắc rút gọn còn nguyên: nhường xe trong vòng, vào ga đều, và tốc độ hạ thêm một bậc vì người đi bộ, trẻ con và xe đạp quanh vòng nhỏ xuất hiện không báo trước. Vòng nhỏ không có làn để chọn nhưng có vị trí: ôm theo quỹ đạo rộng quanh tâm, tránh cắt gần mép tâm vì bánh trước dễ chạm mép curb.</p>
<p>Giờ cao điểm ở vòng lớn: dòng trong vòng đặc và chậm, và quy tắc nhường tự biến thể thành quy tắc nêm — xen vào theo nêm khi dòng chậm dưới tốc độ đi bộ: đi kề sát xe phía trước bên, xi nhan, và nhích vào từng chút với dòng. Không cố vồ vào bằng ga vì dòng đặc không có chỗ cho vồ — chỉ tạo phanh dây chuyền; và không đứng chết chờ một khoảng trống lớn vì khoảng đó không bao giờ tới giờ cao điểm.</p>
<p>Xe đạp và xe điện trong vòng nhỏ: chúng chậm hơn xe máy và thường ôm sát mép ngoài — vượt họ ngay trong vòng là rủi ro vì họ cũng cần quỹ đạo cong rộng hơn vẻ ngoài. Cho họ đi trước hoặc theo sau một nhịp tới khi vòng thưa ra: một phút nhường ở vòng nhỏ luôn rẻ hơn một tình huống chạm và cãi giữa đường.</p>`,
    },
    {
      h2: 'Bốn sai lầm phổ biến và cách sửa bằng thói quen',
      html: `<p>Sai lầm một: vào vòng không nhường — thói quen sửa bằng quy tắc mắt: trước khi tới miệng vòng, mắt đã quét dòng trong vòng trước khi mắt nhìn khoảng trống để vào. Nhìn dòng trước nhìn khe là trật tự quan sát đúng, vì quyết định vào hợp lệ phụ thuộc dòng, không phụ thuộc khe.</p>
<p>Sai lầm hai: đổi làn giữa vòng không xi nhan — thói quen sửa bằng quy tắc một giây: đổi làn nào thì xi nhan trước giây ấy, và chỉ đổi khi thấy xe làng cạnh đã nhả khoảng. Sai lầm ba: phanh gấp trong vòng vì lỡ lối ra — thói quen sửa bằng chấp nhận một vòng: luyện phản xạ "đi tiếp" thay vì phản xạ "phanh lại", vì trong vòng, đi tiếp luôn là phương án có sẵn còn phanh gấp thì không.</p>
<p>Sai lầm bốn: dừng chết trước vòng trong mọi tình huống — thói quen sửa bằng đọc dòng: dòng chảy đều thì nhịn một nhịp rồi vào, chỉ dừng khi dòng quá đặc hoặc có xe trong vòng tới gần. Dừng chết khi dòng vẫn chảy làm xe sau bất ngờ và dễ đuôi, và đó là nguyên nhân tắc nhiều hơn cả vòng xuyến nhỏ vốn chịu được. Ba chữ kết của toàn bài — nhường trước, giữ làn, ra dứt khoát — là thói quen nhiều hơn là kỹ năng: luyện trong mỗi vòng gặp trên đường, và sau vài tuần chúng tự động hóa thành cách đi vòng mà không cần nghĩ.</p>`,
    },
  ],
  checklist: [
    'Trước miệng vòng: giảm tốc từ xa, quét dòng trong vòng trước, nhường xe trong vòng rồi mới vào với ga đều.',
    'Chọn làn ngay từ lúc vào theo hướng ra — ra sớm đi làn ngoài, ra xa đi làn trong, giữ đúng vị trí giữa làn.',
    'Trong vòng: tốc độ bằng nhịp dòng xe, liếc xuyên khe xe phía trước, không phanh gấp, không bám góc mù ô tô lớn.',
    'Chuẩn bị ra: xi nhan phải trước lối ra một nhịp, chuyển ra làn ngoài sớm, giữ tốc độ qua miệng và nhường người đi bộ.',
    'Lỡ lối ra: đi tiếp một vòng rồi ra — không phanh gấp, không rảo ngược cắt làn giữa vòng.',
    'Vòng nhỏ và giờ cao điểm: hạ tốc thêm một bậc cho người đi bộ xe đạp, và xen nêm từng chút khi dòng đặc chậm.',
  ],
  steps: [
    { title: 'Đọc dòng và vào', detail: 'Giảm tốc từ xa, quét dòng trong vòng trước khe vào, nhường xe trong vòng rồi vào với ga đều theo làn đã chọn.' },
    { title: 'Giữ làn trong vòng', detail: 'Đi giữa làn với tốc độ bằng nhịp dòng, quan sát xuyên khe xe trước, không đổi làn không xi nhan, không bám góc mù ô tô.' },
    { title: 'Chuyển ra và rời vòng', detail: 'Xi nhan phải trước lối ra một nhịp, chuyển ra làn ngoài sớm, ra dứt khoát với ga nhẹ và nhường người đi bộ ở miệng ra.' },
    { title: 'Xử lý trục trặc', detail: 'Lỡ lối ra thì đi tiếp một vòng rồi ra; dòng đặc giờ cao điểm thì xen nêm từng chút; vòng nhỏ hạ thêm tốc cho người đi bộ.' },
  ],
  warnings: [
    'Không vào vòng bằng cách chui khe — khe trống hai giây không phải quyền vào, nhường dòng trong vòng vẫn là quy tắc duy nhất.',
    'Không phanh gấp sát miệng ra hoặc rảo ngược cắt làn để lấy lại lối đã lỡ — đi tiếp một vòng luôn là phương án an toàn có sẵn.',
    'Không song song bám sát hông ô tô xe tải trong vòng — chúng cần bán kính rộng và không thấy xe máy ngay cạnh, lùi một nhịp rồi đi sau theo hướng rõ.',
  ],
  notes: [
    'Gần như mọi va chạm vòng xuyến nằm ở miệng vào — đặt cảnh giác cao nhất tại chỗ chuẩn bị vào, không phải trong tâm vòng.',
    'Xi nhan là ngôn ngữ duy nhất để dòng xe đọc ý định mình trong vòng — xi nhan đúng nhịp giá trị hơn tăng giảm ga đúng lúc.',
  ],
  references: [
    'Quy tắc nhường đường tại vòng xuyến và sử dụng báo hiệu rẽ theo quy định về an toàn giao thông đường bộ của Việt Nam.',
    'Kỹ năng quan sát xuyên qua khe xe phía trước và tránh góc mù phương tiện lớn thuộc nội dung huấn luyện lái xe an toàn chuẩn.',
  ],
  related: [
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'bat-xi-nhan-dung-luc-tin-hieu-giua-dong-xe',
    'giu-khoang-cach-an-toan-khi-di-xe-may',
    'ky-thuat-vuot-xe-an-toan',
  ],
};
