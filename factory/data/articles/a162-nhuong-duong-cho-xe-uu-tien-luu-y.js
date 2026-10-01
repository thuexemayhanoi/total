// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: nhường đường cho xe ưu tiên (slot S00162)
'use strict';

module.exports = {
  slug: 'nhuong-duong-cho-xe-uu-tien-luu-y',
  title: 'Nhường đường cho xe ưu tiên: cứu thương, PCCC, cảnh sát',
  seoTitle: 'Nhường đường xe ưu tiên khi đi xe máy',
  metaDescription: 'Xe cứu thương, xe PCCC và cảnh sát có còi ưu tiên cần đường thông thoáng. Bài viết chỉ cách nhận biết, nhường và đi lại an toàn.',
  summary: 'Tiếng còi ưu tiên vang lên trên đường là tình huống giao thông đòi hỏi phản ứng nhanh và đúng của mọi phương tiện, và xe máy — phương tiện nhỏ, cơ động và gần nhất với dòng chảy — lại là bên có vai trò lớn nhất trong việc mở đường. Nghĩa vụ nhường đường cho xe ưu tiên không chỉ là quy định pháp lý; nó là chuỗi phản ứng mà mỗi xe thực hiện đúng thì phần đường thông thoáng mở ra theo làn, còn một xe giữ nguyên vị trí hoặc né sai hướng là đủ làm toàn bộ nút kẹt lại — và xe cứu thương bị kẹt đúng vài chục giây cũng có thể là sinh mạng của người nào đó. Bài viết này đi theo chuỗi phản ứng đó từ đầu đến cuối: nhận biết — phân biệt còi ưu tiên với còi thường, xác định hướng xe đang tới từ âm thanh và gương; nhường đúng — nguyên tắc ghép về một phía theo dòng, không dừng ngang giữa phần đường, không phanh gấp khiến xe sau va; và các tình huống đặc thù của xe máy — bị kẹt giữa hai làn khi còi tới gần, nhường trong hầm và cầu vượt, nhường khi đèn đỏ, và cách đi lại sau khi xe ưu tiên qua khỏi. Phần cuối nói về phía bên kia: khi mình là người cần xe cứu thương gấp — cách chuẩn bị để người nhà gọi và dẫn xe nhanh nhất, và vì sao văn hóa nhường đường của cộng đồng là thứ quyết định thời gian xe cứu thương tới, nhiều khi còn hơn khoảng cách.',
  quickAnswer: 'Trả lời ngắn: nghe còi ưu tiên, việc đầu tiên là xác định hướng xe tới — lắng âm thanh hai bên, soi gương — rồi ghép sớm về phía phải theo hướng đi của mình, giảm tốc nhàng nhàng cho cả dòng cùng thu về, không dừng ngang giữa phần đường và không phanh gấp gây va cho xe sau. Không vượt lên trong lúc nhường: xe ưu tiên có thể đổi làn bất kỳ lúc nào để tìm khe thoáng. Với xe cứu thương tới gần mà mình bị kẹt giữa hai làn xe: chọn phía có không gian dừng thật sự rồi kéo sát hẳn, dừng hẳn nếu cần — đứng giữa hai làn là vị trí tồi nhất. Trong hầm và cầu vượt: ghép theo mép hầm mà không dừng giữa làn; đèn đỏ nghe còi ưu tiên thì vẫn nhường — chạy lên mép phần đường trống theo tín hiệu của xe ưu tiên khi được dẫn đường. Sau khi xe ưu tiên qua, chờ dòng xe khác thu về lại rồi mới lấn ra — nhịp nhường tạo ra cú dâng xe theo sau mà lao ra sớm là tự đâm vào nó. Cứu thương, PCCC, cảnh sát đuổi bắt: mọi loại đều nhường như nhau, kể cả khi mình đang vội.',
  keyPoints: [
    'Xác định hướng xe ưu tiên trước khi nhường — lắng âm thanh hai bên và soi gương, nhường sai hướng còn tắc hơn không nhường.',
    'Ghép về một phía theo hướng đi của mình, nhường từ xa, nhàng nhàng cho cả dòng cùng thu về — không phanh gấp gây va cho xe sau.',
    'Không dừng ngang giữa phần đường và không vượt lên trong lúc nhường — xe ưu tiên đổi làn liên tục để tìm khe thoáng.',
    'Bị kẹt giữa hai làn khi còi tới gần: chọn phía có không gian dừng thật sự, kéo sát hẳn và dừng hẳn — đứng giữa hai làn là vị trí tồi nhất.',
    'Đèn đỏ nghe còi ưu tiên vẫn phải nhường — mở đường theo tín hiệu dẫn đường của xe ưu tiên, rồi thu về đúng vạch khi có thể.',
    'Sau khi xe ưu tiên qua, chờ dòng xe dâng theo sau lặng lại rồi mới trở lại làn — lao ra sớm là tự đâm vào cú dâng.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['xe cứu thương', 'xe ưu tiên', 'còi ưu tiên', 'xe PCCC', 'dòng xe', 'phần đường thông thoáng'],
  keywords: ['nhường đường xe ưu tiên', 'xe cứu thương nhường đường', 'còi ưu tiên xe máy', 'nhường đường cứu thương', 'xe PCCC nhường đường', 'đi xe máy gặp xe ưu tiên'],
  sections: [
    {
      h2: 'Xe ưu tiên là gì và vì sao vài giây quan trọng',
      html: `<p>Theo quy định giao thông, xe ưu tiên gồm xe chữa cháy đi làm nhiệm vụ, xe quân đội và công an đi làm nhiệm vụ khẩn cấp, xe cứu thương đang cấp cứu hoặc đang vận chuyển người bệnh, xe dẫn đường và một số loại đặc biệt — tất cả khi đang phát tín hiệu còi, đèn ưu tiên. Chữ đang là chìa khóa: một xe cứu thương chạy không còi là phương tiện bình thường, còn khi còi bật lên thì nó đang chở sự sống theo từng giây.</p>
<p>Vài giây quan trọng đến mức nào: với ca cấp cứu tim ngừng đập, xác suất sống giảm theo từng phút chậm trễ; với hỏa hoạn, đám cháy lan theo cấp số nhân trong ba phút đầu. Xe cứu thương qua một nút giao thông đông nhờ dòng xe nhường trong năm giây thay vì kẹt ba mươi giây — cộng dồn qua chục nút trên quãng đường — là chênh lệch tính bằng phút, và phút là đơn vị đo sống chết của các ca này.</p>
<p>Và đó cũng là lý do văn hóa nhường đường là tài sản chung: người bệnh nằm trong xe cứu thương không biết ai đã nhường, người lái xe ưu tiên không cảm ơn từng xe được — nhưng phần đường thoáng mà cả một dòng xe mở ra chỉ tồn tại khi từng chiếc, trong đó có chiếc xe máy của mình, làm đúng phần mình. Một xe giữ nguyên chỗ giữa dòng là đủ bóp nghẹt toàn bộ khe mà chục xe khác đã cố mở.</p>`,
    },
    {
      h2: 'Nhận biết: phân biệt còi ưu tiên và xác định hướng',
      html: `<p>Còi ưu tiên có âm sắc riêng: chuỗi âm cao thấp liên tục, dồn dập và vang xa — khác hẳn còi xe hơi thường và tiếng còi điện một âm của xe máy. Nghe thấy trong đô thị ồn ào, mẹo là giảm nhẹ ga trong một hai giây: bớt tiếng động cơ và gió giúp tai tách âm còi ra khỏi nền, đồng thời việc giảm ga này cũng chính là bước một của nhường đường.</p>
<p>Xác định hướng từ xa: âm thanh còi nghe lớn dần theo hướng xe tới; mở rộng quét gương hai bên ngay khi nghe — xe ưu tiên thường chạy nhanh hơn dòng, nên nó hiện trong gương sớm hơn dự kiến. Đêm thì thêm tín hiệu đèn: đèn xanh đỏ nhấp nháy loang trên mặt đường và tường hai bên cho biết hướng trước khi xe hiện hình. Quy tắc tổng: không xác định được hướng thì chưa di chuyển mạnh — nhường sai hướng tự tạo thêm một chướng ngại ở nơi xe ưu tiên đang lao tới.</p>
<p>Cẩn thận hai tình huống nhầm: một là xe ưu tiên chạy trên đường vuông góc sắp cắt ngang phía trước — còi to dần nhưng xe không lao theo hướng đi của mình, việc đúng chỉ là chậm lại để nhường phần đường cắt ngang; hai là hai xe ưu tiên cùng lúc — cứu thương và PCCC trong phố, khi đó nhường theo hướng đi của mình và chờ dòng tự phân giải, không cố chọn nhường cho ai trước bằng cách đan xen giữa hai xe.</p>`,
    },
    {
      h2: 'Nhường đúng: ghép một phía, nhường từ xa, không dừng ngang',
      html: `<p>Nguyên tắc nhường của xe máy giống mọi phương tiện: ghép về một phía — bên phải theo hướng đi của mình — nhưng xe máy có lợi thế cơ động để làm việc này sớm và sạch hơn ô tô. Nhường từ xa nghĩa là bắt đầu thu về ngay khi xác định hướng xe, không đợi xe tới gần mới bẻ lái: khoảng cách xa cho cả dòng xe xung quanh có thời gian thu theo, và phần đường thoáng hình thành từ từ thay vì một cú dồn ép.</p>
<p>Giữ nhịp giảm tốc nhàng nhàng: phanh gấp để nhường là tự hoán đổi một rủi ro thành hai — xe ưu tiên được nhường nhưng xe phía sau mình va. Trong dòng xe, cú phanh của một xe là tín hiệu lan truyền cho cả dòng sau: phanh sớm nhẹ làm cả dòng giảm êm, phanh gấp muộn làm ba bốn xe sau phanh gấp nối tiếp. Nhường đường an toàn là nhường có kiểm soát nhịp của cả chuỗi xe phía sau mình.</p>
<p>Hai vị trí tuyệt đối tránh: dừng ngang giữa phần đường — chặn kẹp dòng hai bên không còn khe cho ai, kể cả xe ưu tiên; và dừng sát vai ngã tư khi xe ưu tiên đang cắt ngang phía trước — khoảng đó là vùng chết của giao tiếp, xe ưu tiên đang phân tâm dẫn đường, bấm còi xin ra ở đó chỉ thêm nhiễu. Đúng là: thu về sát mép, dừng hẳn, để phần đường giữa thật sự trống và thật sự đoán được.</p>`,
    },
    {
      h2: 'Những vị trí khó: kẹt giữa hai làn, hầm, cầu vượt, đèn đỏ',
      html: `<p>Kẹt giữa hai làn xe khi còi tới gần là vị trí tồi nhất của xe máy: hai bên là xe, trước sau là dòng, không khe dừng. Xử lý đúng: chọn ngay phía có không gian thật — mép phải hoặc khe xe đỗ — và kéo hẳn sang dứt khoát với xi nhan hoặc tay giơ tín hiệu, chấp nhận đi lùi nửa mét nếu cần; đứng tiếp giữa hai làn là để xe ưu tiên tự tính đường qua mình, tức phó thác an toàn cho người đang gấp gáp gấp bội.</p>
<p>Trong hầm và trên cầu vượt: không có lề để nhường kiểu thường — ghép theo mép hầm sát vách, giảm tốc đều cả dòng; tuyệt đối không dừng giữa làn hầm vì xe ưu tiên không thể quay đầu và không thể đổi lộ trình trong hầm. Hầm cũng là chỗ âm còi dội lại khó định hướng: mặc định nhường theo phía mép bên phải của mình và theo hành vi của dòng xe xung quanh — trong hầm, dòng xe là chỉ dẫn tốt hơn phán đoán cá nhân.</p>
<p>Đèn đỏ nghe còi ưu tiên: nghĩa vụ vẫn là mở đường. Nếu đang đứng chờ đèn mà nghe còi tới, mở gương quan sát hướng xe ưu tiên và nhích sát mép phần đường theo hướng nó cần đi, kể cả khi phải vượt vạch đèn đỏ để mở khe — mở đường theo hiệu lệnh của người điều phối hoặc tín hiệu xe ưu tiên là được pháp luật thừa nhận. Sau đó thu về đúng chỗ có thể chờ lại. Nhiều người vẫn đứng chết vạch vì sợ bị phạt — nhưng giữ nguyên chỗ lúc đó lại là để xe ưu tiên kẹt, điều luật không muốn.</p>`,
    },
    {
      h2: 'Sau khi xe ưu tiên qua: nhịp dâng xe và cách trở lại dòng',
      html: `<p>Ngay sau xe ưu tiên là cú dâng xe: cả dòng đã nhường sẽ quay lại vị trí, và phần lớn va chạm sau tình huống nhường xảy ra ở giai đoạn này — xe lao ra sớm, đâm đúng xe thứ hai trong nhóm ưu tiên (cứu thương thường đi kèm xe dẫn đường) hoặc đụng xe cùng thu về từ phía đối diện. Quy tắc đơn giản: đếm hai giây sau khi nhóm xe ưu tiên qua khỏi mới lấn ra, và kiểm tra gương trước khi về lại làn.</p>
<p>Chú ý xe ưu tiên có thể chuyển hướng đột ngột: xe cứu thương ra vào cổng bệnh viện, xe PCCC vào ngõ nhỏ, cảnh sát rẽ theo đối tượng đuổi bắt — nên giữ khoảng cách với một xe ưu tiên cùng hướng đi của mình, không bám theo sát vì các xe này phanh và rẻ bất ngờ ngoài mọi dự đoán. Nếu cùng kẹt đèn với xe ưu tiên, để nó ở phía trước thay vì song song.</p>
<p>Và một thói quen đáng hình thành: sau mỗi lần nhường, để lại khoảng trống phía trước thêm hai ba giây — vừa là phần dự phòng cho xe ưu tiên quay lại (nhiều ca chạy nhiều chuyến trong đêm), vừa cho dòng xe sau mình kịp ổn định. Nhường đường không kết thúc khi còi tắt lặng; nó kết thúc khi cả dòng trở lại nhịp đều.</p>`,
    },
    {
      h2: 'Phía bên kia: khi người thân mình cần xe cứu thương gấp',
      html: `<p>Nhường đường tốt nhất được hiểu từ phía bên kia: người gọi xe cứu thương cho người nhà. Ba việc làm trước khi xe tới: xác định địa chỉ theo mốc thật — ngõ số nhà, đầu hẻp, hoặc gửi một người ra đứng chờ ở ngã lớn để dẫn xe; dọn lối vào nhà — chìa khóa, xe đạp, ghế nằm chắn lối; và ghi sẵn tình trạng người bệnh để báo nhanh: tuổi, triệu chứng chính, bệnh nền. Mỗi giây xe cứu thương được tiết kiệm ở khâu dẫn đường là công sức của cả chuỗi người đã nhường trên đường cộng lại.</p>
<p>Khi xe cứu thương đang chở người nhà đi: người nhà đi kèm bằng xe máy thì giữ xe sau xa, không bấm còi ép dòng — xe cứu thương có quyền ưu tiên và kỹ năng dẫn đường riêng; việc bấm còi đằng sau chỉ làm dòng đường thêm rối quanh xe đang chở bệnh nhân. Trong xe, phần đường thông thoáng mà bệnh nhân nhận được là kết quả của những người đi trước đã nhường.</p>
<p>Đóng lại bằng một ý lớn: văn hóa nhường đường là hạ tầng không tốn tiền của y tế và an toàn. Một thành phố mà mười xe thì tám xe nhường đúng thì xe cứu thương chạy gần như bay trên dòng; một thành phố mà nhường đường là chuyện may rủi thì khoảng ba cây số cũng là cả một hành trình. Mỗi lần nghe còi ưu tiên và thu về đúng phía, chiếc xe máy của mình không chỉ tránh một tình huống nguy hiểm — nó đang góp một mét thoáng vào một mạng sống nào đó mà mình sẽ không bao giờ biết mặt.</p>`,
    },
  ],
  checklist: [
    'Nghe còi ưu tiên: giảm ga để tách âm, xác định hướng bằng tai và gương, soi đèn nhấp nháy về phía hai mép đường khi trời tối.',
    'Thu về phía phải từ xa, giảm tốc nhàng nhàng cho cả dòng, không phanh gấp tạo va cho xe sau.',
    'Không dừng ngang giữa phần đường, không vượt lên trong lúc nhường, không đứng giữa hai làn khi bị kẹt — chọn phía có khe thật và kéo hẳn.',
    'Hầm và cầu vượt: ghép sát mép vách, giảm đều cả dòng, tuyệt đối không dừng giữa làn hầm.',
    'Đèn đỏ nghe còi ưu tiên: mở khe theo tín hiệu xe ưu tiên hoặc người điều phối, kể cả vượt vạch để nhường, rồi thu về đúng chỗ chờ lại.',
    'Sau khi xe qua: đếm hai giây, kiểm tra gương rồi mới trở lại làn — đề phòng xe ưu tiên thứ hai và cú dâng của dòng xe.',
  ],
  steps: [
    { title: 'Nhận biết và định hướng', detail: 'Giảm ga để nghe rõ còi ưu tiên, xác định hướng xe tới bằng âm thanh, gương và đèn nhấp nháy, quyết định phía nhường theo hướng đi của mình.' },
    { title: 'Thu về và mở đường', detail: 'Ghép về phía phải từ xa với xi nhan, giảm tốc nhàng nhàng cho cả dòng, dừng sát mép khi xe tới gần, tuyệt đối không dừng giữa phần đường.' },
    { title: 'Xử lý vị trí khó', detail: 'Kẹt giữa hai làn thì chọn phía có khe thật và kéo hẳn; trong hầm ghép mép vách; đèn đỏ mở khe theo tín hiệu xe ưu tiên rồi thu về chờ lại.' },
    { title: 'Trở lại dòng an toàn', detail: 'Đếm hai giây sau khi nhóm xe ưu tiên qua, kiểm tra gương trước khi lấn ra, giữ khoảng cách với xe ưu tiên còn lại và để dòng xe sau ổn định nhịp.' },
  ],
  warnings: [
    'Không bấm còi xe máy trong lúc nhường đường — tiếng còi hỗn loạn làm người lái xe ưu tiên mất chỉ dẫn và người bộ hành mất phản xạ.',
    'Không bám sát theo xe ưu tiên chạy cùng hướng — các xe này phanh và rẽ đột ngột ngoài mọi dự đoán; để nó ở phía trước, không song song.',
    'Không lao ra trở lại làn ngay khi còi tắt — xe cứu thương thường có xe dẫn đường theo sau và dòng xe dâng lên chưa ổn định.',
  ],
  notes: [
    'Xe ưu tiên chỉ được hưởng quyền khi đang phát tín hiệu còi, đèn ưu tiên và đang làm nhiệm vụ — còi tắt thì nó là phương tiện bình thường, nhưng mặc định nên vẫn nhường bởi không biết rõ nhiệm vụ.',
    'Phần lớn va chạm trong tình huống nhường xảy ra sau khi xe ưu tiên qua — giai đoạn dòng xe dâng trở lại; đếm hai giây và soi gương là toàn bộ kỹ năng của giai đoạn này.',
  ],
  references: [
    { title: 'Quy tắc qua ngã tư và ưu tiên', url: 'https://thuexemayhanoi.github.io/total/learn/ky-thuat-lai-xe/ky-thuat-qua-nga-tu-va-quy-tac-uu-tien/' },
    { title: 'Đi xe máy tránh va chạm với xe buýt', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/di-xe-may-tranh-va-cham-voi-xe-buyt/' },
  ],
  related: [
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'di-xe-may-tranh-va-cham-voi-xe-buyt',
    'giu-khoang-cach-an-toan-khi-di-xe-may',
    'ky-thuat-phanh-khan-cap-xe-may',
  ],
};
