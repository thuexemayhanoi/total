// AI WIKI TOTAL — bài mở rộng cụm /learn/ky-thuat-lai-xe/: kỹ thuật đi xe máy qua cầu vượt (slot S00178)
'use strict';

module.exports = {
  slug: 'ky-thuat-di-xe-may-qua-cau-vuot',
  title: 'Kỹ thuật đi xe máy qua cầu vượt: dốc, giao cắt và làn gộp',
  seoTitle: 'Đi xe máy qua cầu vượt: kỹ thuật an toàn',
  metaDescription: 'Qua cầu vượt bằng xe máy có ba phần rủi ro riêng: lên dốc giữ đà, trên cao né làn gộp, xuống dốc giữ phanh động cơ. Bài viết chỉ từng phần.',
  summary: 'Cầu vượt là công trình được xây để tách dòng xe khỏi ngã tư, nhưng với người đi xe máy, nó thay một giao cắt ngang bằng ba đoạn rủi ro nối tiếp: dốc lên dài giữ đà nhưng nuốt tốc nếu vào số sai, đoạn cao với các nhánh gộp và nhánh rẽ bắt dòng xe phải trộn vào nhau, và dốc xuống — phần nguy hiểm nhất với xe máy vì tốc độ tự sinh mà tay ga không hề vặn. Bài viết này đi lần lượt theo đúng trình tự của một lần qua cầu: chuẩn bị từ chân dốc — đọc biển nhánh sớm, chọn làn đúng ngay từ dưới vì nhánh rẽ trên cao không cho phép đổi lại; kỹ thuật lên dốc — giữ đà và chọn số sao cho máy không bị gò, khoảng cách với xe phía trước tính bằng khả năng xe đó chết máy và lùi về; đoạn trên cao — gió hở hai bên, nhánh gộp nhỉ, và cách đọc xe phía sau đang đổi làn để chọn nhánh xuống; kỹ thuật xuống dốc — phanh động cơ là chính, phanh tang trống là phụ, và tuyệt đối không để tốc độ tự do tăng tới khúc quăng cuối dốc; nhánh xuống trộn vào đường dưới — nhường dòng, chọn khe, và không phanh gấp đúng điểm trộn; và cuối cùng là những lỗi hay gặp trên cầu vượt: dừng chụp ảnh, đi chậm sát mép trong, và cố vượt lại ở nhánh gộp. Kết lại bằng nguyên tắc tổng của công trình này: cầu vượt chỉ an toàn khi đi trọn theo đúng trình tự một lần — chuẩn bị từ chân dốc, giữ đúng làn trên cao, và kiểm soát trọn dốc xuống, vì mỗi phần của nó tự sinh rủi ro riêng mà phần trước quyết định phần sau.',
  quickAnswer: 'Trả lời ngắn: qua cầu vượt an toàn nằm ở đúng trình tự ba đoạn. Chân dốc: đọc biển nhánh sớm, chọn làn đúng từ dưới, về số đủ đà trước khi vào dốc — không vào dốc ở số cao rồi mới chỉnh. Lên dốc: giữ ga đều, khoảng cách với xe trước rộng hơn đường bằng vì xe trước có thể chết máy và tuột về sau; không vượt trên dốc lên vì hai xe mất đà cùng lúc là hai xe chạm nhau. Đoạn cao: né ngay mép trong vì xe chờ rẽ nhánh hay chậm đột ngột, đọc gương trước các biển nhánh xuống, và canh gió hở hai bên ở cầu cao. Xuống dốc: giảm số cho máy giữ xe — phanh động cơ là chính, bóp phanh nhát ngắn chứ không kẹp dài làm nóng má phanh, và không bao giờ để xe lượt tự do tăng tốc tới khúc quăng cuối dốc. Nhánh xuống trộn vào đường dưới: nhường dòng xe dưới trước, chọn khe rồi mới trộn, không phanh gấp đúng điểm trộn. Và tuyệt đối không dừng trên cầu vượt lấy lý do gì — dốc hai bên không có lề thoát, đúng như trên cầu ngang không có chỗ dừng.',
  keyPoints: [
    'Cầu vượt thay một giao cắt ngang bằng ba đoạn rủi ro nối tiếp: dốc lên giữ đà, đoạn cao với làn gộp nhánh rẽ, và dốc xuống tự sinh tốc — mỗi đoạn cần kỹ thuật riêng.',
    'Chọn làn đúng từ chân dốc: biển nhánh rẽ trên cao không cho phép đổi lại giữa dốc, nhầm làn là phải đi tiếp cả nhánh cầu.',
    'Lên dốc giữ ga đều và khoảng cách rộng hơn đường bằng: xe trước chết máy trên dốc sẽ tuột về sau — khoảng cách đó là chỗ mình phanh được.',
    'Xuống dốc lấy phanh động cơ làm chính: về số cho máy giữ xe, bóp phanh nhát ngắn, không kẹp dài cho má phanh nóng — và không để tốc tự do tăng tới khúc quăng cuối dốc.',
    'Ở nhánh xuống trộn vào đường dưới, nhường dòng trước chọn khe sau: phanh gấp đúng điểm trộn là tự bị đuôi xe sau đâm.',
    'Không dừng trên cầu vượt với bất kỳ lý do gì: dốc lên xuống không có lề thoát như cầu ngang, và làn dốc dài tự sinh dòng xe tốc độ cao phía sau.',
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-10-02',
  updated: '2026-10-02',
  entities: ['cầu vượt', 'dốc lên', 'dốc xuống', 'phanh động cơ', 'nhánh rẽ', 'làn gộp'],
  keywords: ['qua cầu vượt an toàn', 'đi xe máy cầu vượt', 'kỹ thuật xuống dốc', 'phanh động cơ xe máy', 'lên dốc giữ đà', 'nhánh rẽ cầu vượt'],
  sections: [
    {
      h2: 'Cầu vượt không xóa rủi ro, nó chia rủi ro thành ba đoạn',
      html: `<p>Mục đích của cầu vượt là tách dòng xe khỏi giao cắt ngang — và nó làm tốt việc đó: không còn đèn đỏ giữa đường, không còn các cú đâm chéo ở ngã tư. Nhưng với người đi xe máy, công trình này đổi lấy một dạng căng thẳng mới: toàn bộ rủi ro tập trung của giao cắt bị dải thành ba đoạn nối tiếp, mỗi đoạn có cơ chế rủi ro riêng. Dốc lên đòi hỏi máy đủ đà và khoảng cách đủ phanh; đoạn cao đòi hỏi đúng làn giữa các nhánh gộp; dốc xuống đòi hỏi kiểm soát tốc bằng kỹ thuật chứ không bằng ý muốn. Người quen đi ngã tư nhưng mới qua cầu vượt thường gặp rắc rối đúng ở chỗ này: họ mang kỹ năng của đoạn bằng phẳng áp vào đoạn dốc.</p>
<p>Điểm khác căn bản giữa cầu vượt và đường bằng không nằm ở tốc độ — nằm ở việc tốc độ trên cầu vượt thay đổi liên tục theo địa hình. Mỗi mét dốc lên lấy bớt tốc của xe, mỗi mét dốc xuống trả lại với lãi — và toàn bộ kỹ thuật của bài viết này xoay quanh việc quản lý hai dòng chảy tốc đó: giữ được đà lên, và không để dốc cho lại nhanh hơn mức mình kiểm soát. Đây cũng là lý do cầu vượt là bài kiểm tra thật sự của người mới: trên đường bằng, sai một nhịp ga thường chỉ là một cú giật; trên cầu vượt, sai một nhịp ga ở đúng chỗ là mất đà giữa dốc hoặc dội tốc vào khúc quăng.</p>
<p>Và một điều cần nói rõ từ đầu: độ dài của cầu vượt khiến mọi lỗi ở phần trước bị đẩy về phần sau. Vào dốc nhầm số thì tới đoạn cao máy đã gò; đi nhầm làn dưới chân dốc thì phải đi trọn một nhánh thừa; để tốc tự do đầu dốc xuống thì tới khúc quăng cuối là phanh đã mỏng. Vì thế phần chuẩn bị — đọc biển, chọn làn, chọn số — không phải thủ tục mở đầu mà là phần quyết định của cả lần qua cầu.</p>`,
    },
    {
      h2: 'Chân dốc: đọc biển nhánh sớm và chọn làn đúng ngay từ dưới',
      html: `<p>Trước mỗi chân dốc lên là cụm biển quyết định toàn bộ hành trình: biển chỉ dẫn nhánh phải rẽ, nhánh đi thẳng, và làn quy định cho từng hướng. Quy tắc số một: đọc cụm biển này từ xa và chốt làn ngay khi còn ở đoạn phẳng trước cầu — vì trên dốc lên, đổi làn tốn tốc, và ở nhiều cầu, vạch phân làn giữa dốc là vạch liền không cho phép cắt. Nhầm một làn ở đây thường phải trả bằng cả một nhánh cầu: đi trọn nhánh rồi mới quay lại được, và quãng quay lại có khi dài hơn cả đoạn đường lẽ ra không cần đi.</p>
<p>Chọn số cũng là việc của chân dốc chứ không phải của dốc: về số đủ đà trước khi mặt đường bắt đầu nghiêng, để khi vào dốc máy đã đang kéo đều lực. Vào dốc ở số cao rồi thấy máy gò mới về số là lỗi điển hình: cú về số giữa dốc làm tốc rơi đúng lúc xe cần lực nhất, và nếu về sát quá, xe giật cục còn khó giữ hơn cả lúc gò. Cách làm đúng của người đi cầu nhiều: nghe máy và thấy biển dốc là về sớm một nhịp — chấp nhận máy rền lên chút ở đầu dốc, vì xe có đà thừa luôn chỉnh được, xe mất đà thì không.</p>
<p>Khoảng cách với xe phía trước trên dốc lên cũng tính khác đường bằng: xe máy và ô tô đều có thể chết máy hoặc trượt côn trên dốc, và một xe đứng dính giữa dốc sẽ tuột về sau theo trọng lượng — về phía mình. Khoảng cách cần vì thế rộng hơn mức đường bằng một bậc, đủ để nếu xe trước khựng lại, mình còn chỗ dừng hẳn hoặc nghiêng né chứ không cần phanh gấp trên dốc. Nhìn thấy một xe chở nặng hoặc xe tải chậm trước mặt từ chân dốc, chủ động về sớm và lấy khoảng dài hơn — vượt nó trên dốc là một quyết định hầu như luôn sai, phần sau sẽ nói kỹ.</p>`,
    },
    {
      h2: 'Lên dốc: giữ đà đều, không vượt, đề phòng xe tuột về sau',
      html: `<p>Kỹ thuật lên dốc tóm lại trong một từ là đều: ga đều, tư thế người ghì về trước chút để bánh trước không nhẹ đi, và mắt nhìn vượt qua vai xe trước để đọc tiếp địa hình thay vì chỉ nhìn đuôi xe. Giữ đà bằng cách đón dốc: trước khi mặt nghiêng, tốc đã ở mức máy kéo nhẹ; giữa dốc, thêm ga theo độ dốc chứ không đợi xe yếu mới vặn. Một xe lên dốc đều chậm hơn một xe vọt rồi gò, và tới đỉnh vẫn còn lực để xử lý đoạn cao — trong khi xe gò dốc thường bị dòng xe phía sau xâu lốc, đúng lúc mình mỏng lực nhất.</p>
<p>Về việc vượt trên dốc lên: hầu như luôn là quyết định sai. Lý do nằm ở hình học của dốc — xe bị vượt mất đà khi nhường, xe vượt hao đà khi kéo ra, và nếu dốc dài hơn dự tính, hai xe đi song song hai xe cùng yếu giữa làn không ai nhường được ai. Thêm nữa phần nhìn khi vượt trên dốc lên bị cắt: mặt đường phía trước sau xe to là vùng mù tuyệt đối vì góc nghiêng che hết tầm. Nếu thực sự cần vượt một xe quá chậm, đúng cách là chờ tới đoạn cao phẳng phía trên — nơi hai xe đều lấy lại đà và tầm nhìn mở — chứ không phải giữa dốc.</p>
<p>Một tình huống đặc thù của dốc lên với xe máy số sàn: xe chết máy hoặc trượt côn giữa dốc. Với người phía sau, tín hiệu báo trước là tiếng máy xe trước đột ngột rè xuống, tốc rơi nhanh bất thường, và xe bắt đầu chồm khất khỉu. Thấy ba dấu hiệu đó ở xe phía trước, lập tức nới khoảng cách tối đa và chuẩn bị nghiêng né sang làn trống — vì xe đứng dính dốc sẽ tuột về sau vài mét trước khi người lái kịp bóp phanh. Với chính mình khi bị chết máy giữa dốc: bóp phanh cho đứng hẳn, đặt hai chân, đề lại và về số thấp — tuyệt đối không cố lết nửa côn cho xe nhúc nhích chậm chạp, vì nửa côn trên dốc là cách nhanh nhất làm nóng bộ côn và chết máy lần thứ hai.</p>`,
    },
    {
      h2: 'Đoạn cao: gió hở, nhánh gộp và biển nhánh xuống',
      html: `<p>Đoạn cao của cầu vượt là nơi dòng xe ổn nhất về tốc, nhưng phức tạp nhất về hình học: các nhánh lên từ hai chân cầu gộp vào một thân chính, và các nhánh rẽ xuống tách ra về hai bên theo biển báo. Trên thân chính, ba thứ cần đọc song song: dòng xe phía sau đang đổi làn để chọn nhánh, biển chỉ dẫn nhánh xuống cho hướng của mình, và mép trong — nơi các xe chuẩn bị rẽ nhánh hay chậm lại đột ngột. Lỗi hay gặp ở đoạn này là đi sát mép trong để né gió hoặc theo thói quen: mép trong đúng chỗ xe chờ rẽ, và một cú phanh của xe trước mặt trên cầu cao là tình huống không có lề thoát.</p>
<p>Gió trên cầu cao đáng tôn trọng hơn trên đường: hai bên thân cầu hở hoàn toàn xuống phía dưới, gió ngang thẳng và liên tục — cùng cơ chế đã nói kỹ trong bài qua cầu ngang, nhưng trên cầu vượt thường mạnh hơn vì chiều cao. Người đi sát mép ngoài vì thế gặp đôi rủi ro: gió đẩy về phía ngoài, và mép ngoài sát rào chắn không có biên độ né. Vệt đi đúng là giữa làn: cách mép ngoài một khoảng đủ cho cú gió không đẩy l bánh chạm rào, và cách mép trong đủ để xe rẽ nhánh phía trước có chỗ chậm mà mình không bị cuốn theo.</p>
<p>Đọc biển nhánh xuống cần làm sớm hơn cảm giác bình thường: các nhánh rẽ xuống của cầu vượt thường có vạch liền khá dài trước điểm tách, và đổi làn trễ là hoặc đi trọn nhánh thừa, hoặc — tệ hơn — cắt vạch liền để lách vào nhánh giữa lúc xe khác đang dồn. Cách đi đúng: biết trước hướng của mình, thấy biển nhánh từ xa là quét gương, đổi làn ngay khi còn khoảng, và khi đã lỡ nhịp thì chấp nhận đi trọn nhánh đó quay lại — một vòng quay lại mất mười phút, một cú cắt vạch giữa dồn xe có khi mất nhiều hơn thế.</p>`,
    },
    {
      h2: 'Xuống dốc: phanh động cơ là chính, phanh tang là phụ',
      html: `<p>Dốc xuống là đoạn nguy hiểm nhất của cầu vượt với xe máy, vì một lý do vật lý đơn giản: trọng lực thay ga. Xe lượt dốc tự tăng tốc liên tục, và nếu chỉ thả ga cho xe trôi, tốc cuối dốc luôn vượt mức khởi đầu — người lái không hề vặn ga mà tốc đã lên. Kiểm soát đúng lấy phanh động cơ làm trục: về số thấp hơn để máy giữ xe, ga buông nhẹ, và xe lượt trong biên độ tốc của số đó thay vì lượt tự do. Tiêu chí chọn số: xuống dốc ở số mà nếu buông hoàn toàn, xe chỉ tăng tốc từ từ — không phải số mà máy gào l èn hộp số.</p>
<p>Phanh tang trống trên xe máy chỉ dùng để tinh chỉnh trong biên độ đó: bóp nhát ngắn khi cần giảm thêm, nhả, rồi bóp nhát sau — chứ không kẹp nửa côn phanh dài suốt dốc. Kẹp phanh liên tục trên dốc dài là lỗi kinh điển và hậu quả của nó xếp đúng lớp: má phanh nóng lên, độ ma sát giảm dần, và phần cuối dốc — nơi cần phanh nhất vì khúc quăng — là lúc phanh yếu nhất. Người xuống dốc thấy tay nắm cứng phanh suốt mà vẫn cảm giác xe không bớt nhanh, chính là đang trải nghiệm đúng trình tự đó.</p>
<p>Khúc quăng cuối dốc cần nói riêng vì nó là điểm va hay gặp: nhiều nhánh xuống không thẳng mà cong nhẹ theo hướng trộn vào đường dưới, và xe lượt tự do tới khúc cong thì đúng lúc tốc cao nhất. Kỹ thuật cho khúc quăng: giảm tốc trước khi tới cong — nhìn xa qua mép cong đo hướng ra, không phanh giữa cong — và vào cong bằng người nghiêng nhẹ cùng ga đều, giữ vệt bánh xa mép trong vì lực quán tính đẩy về phía ngoài. Một thói quen đáng hình thành: coi vạch bắt đầu dốc xuống là biển báo giảm tốc, chứ không phải lệnh rú ga — vì phần lớn rủi ro của dốc nằm ở tốc mình mang vào, chứ không ở bản thân dốc.</p>`,
    },
    {
      h2: 'Nhánh xuống trộn vào đường dưới và những lỗi hay gặp',
      html: `<p>Điểm cuối của cầu vượt không phải hết dốc, mà là điểm trộn vào dòng đường dưới: nhánh xuống đổ xe ra với tốc độ cao hơn dòng bên dưới, và hai dòng gặp nhau ở một khe hẹp đúng đầu nhánh. Quy tắc trộn đúng: nhường dòng dưới trước — nhìn sớm từ giữa dốc xuống để đo nhịp dòng — rồi chọn khe trống mà giảm nhẹ về tốc của dòng, trộn vào như một xe cùng nhịp chứ không như một xe phóng tới. Lỗi chết người tại điểm này là phanh gấp đúng mép trộn vì tự thấy nhanh quá: xe sau trên nhánh không nhìn thấy điểm trộn là điểm dừng, và một cú phanh gấp ở mép trộn là tự đặt mình vào đúng quỹ đạo đâm của xe đi sau.</p>
<p>Trường hợp nhánh đổ vào đường đông và không thấy khe: giữ tốc giảm dần đều theo nhánh, kéo dài phần trộn — dùng chính chiều dài của phần cuối nhánh làm chỗ giảm từ từ — và chèn vào khe đầu tiên đủ rộng. Không cố bấm vào khe quá hẹp giữa hai xe dưới: khe hẹp vừa đủ xe mình là khe không còn biên độ sai cho bất kỳ ai, và ở điểm hai dòng trộn, biên độ sai là thứ cần nhất. Nếu nhánh có gương lồi cho xe nhánh thấy đường dưới, dùng nó như một đôi mắt phụ — nhìn gương trước khi nhìn trực tiếp.</p>
<p>Các lỗi hay gặp trên cầu vượt, kể để tự soi: dừng trên cầu lấy cảnh hoặc điện thoại — dốc hai bên không có lề, dừng là chặn làn tốc cao; đi ngược lên nhánh xuống hoặc lượn ngược chiều để tiết kiệm đường — giao cắt với dòng đúng chiều ở tốc dốc là va đối đầu thật sự; và cố vượt lại ở đoạn nhánh gộp — nơi hai dòng đang dồn, mỗi lần vượt thêm là một lần cắt thêm một dòng không nhìn thấy mình. Cầu vượt cho đi nhanh hơn ngã tư có đèn, nhưng chỉ cho — điều kiện của nó là đi đúng trình tự, và mọi phần rút ngắn trình tự đều bị thu lại bằng lãi suất ở phần sau.</p>`,
    },
  ],
  checklist: [
    'Chân dốc: đọc cụm biển nhánh từ xa, chốt làn đúng hướng trước khi vào dốc, về số đủ đà trước khi mặt đường nghiêng.',
    'Lên dốc: ga đều, người ghì về trước chút, khoảng cách với xe trước rộng hơn đường bằng — đề phòng xe tuột về sau khi chết máy dốc.',
    'Đoạn cao: giữ giữa làn, né mép trong nơi xe chờ rẽ nhánh, quét gương trước mọi biển nhánh xuống, tôn trọng gió hở hai bên.',
    'Xuống dốc: về số cho máy giữ xe làm chính, phanh tang bóp nhát ngắn làm phụ, giảm xong trước khúc quăng — không phanh giữa cong.',
    'Trộn vào đường dưới: đo nhịp dòng từ giữa dốc, chọn khe rộng, giảm đều theo chiều dài nhánh — không phanh gấp đúng mép trộn.',
  ],
  steps: [
    { title: 'Chuẩn bị từ chân dốc', detail: 'Đọc biển nhánh sớm, chốt làn đúng hướng từ đoạn phẳng trước cầu, về số đủ đà trước khi vào dốc — nhầm làn dưới chân dốc phải trả bằng cả một nhánh cầu.' },
    { title: 'Lên dốc giữ đà đều', detail: 'Ga đều, tư thế người ghì về trước, thêm ga theo độ dốc; không vượt trên dốc lên, và thấy xe trước có dấu hiệu chết máy thì nới khoảng cách tối đa nghiêng né.' },
    { title: 'Giữ đúng làn trên cao', detail: 'Đi giữa làn, né mép trong của xe chờ rẽ nhánh, đọc gương trước từng biển nhánh xuống, đổi làn ngay khi còn khoảng — lỡ nhịp thì đi trọn nhánh quay lại.' },
    { title: 'Kiểm soát trọn dốc xuống', detail: 'Về số cho phanh động cơ giữ xe, phanh tang chỉ tinh chỉnh bằng nhát ngắn, giảm xong trước khúc quăng cuối dốc, và trộn vào dòng dưới qua khe rộng không phanh gấp mép trộn.' },
  ],
  warnings: [
    'Không kẹp phanh tang trống dài suốt dốc xuống — má phanh nóng làm phanh yếu dần, và khúc quăng cuối dốc là đúng lúc cần phanh nhất.',
    'Không thả xe lượt tự do hết dốc rồi mới phanh: tốc tự sinh của dốc luôn vượt mức vào, và phần rủi ro nằm ở tốc mình mang vào khúc quăng chứ không ở bản thân dốc.',
    'Không dừng trên cầu vượt với bất kỳ lý do gì — dốc không có lề thoát, làn sau là làn tốc cao, và dừng trên dốc lên còn có nguy cơ tuột về sau.',
    'Không phanh gấp đúng mép trộn ở chân nhánh xuống: xe sau trên nhánh không thấy điểm trộn là điểm dừng — giảm đều theo chiều dài nhánh thay vì gấp ở cuối.',
  ],
  notes: [
    'Phần gió ngang trên đoạn cầu cao có cùng cơ chế với gió trên cầu ngang — kỹ thuật đón gió được nói kỹ trong bài kỹ thuật đi xe máy qua cầu, hai bài dùng kèm cho đủ góc nhìn.',
    'Kỹ thuật giữ đà và khoảng cách trên dốc lên ở đây áp dụng cho dốc cầu; các chặng dốc dài đèo dật có thêm lớp về số và mát máy, được trình bày trong bài kỹ thuật xuống đèo an toàn.',
  ],
  references: [
    { title: 'Kỹ thuật đi xe máy qua cầu: gió ngang và mặt đường', url: 'https://thuexemayhanoi.github.io/total/learn/ky-thuat-lai-xe/ky-thuat-di-xe-may-qua-cau/' },
    { title: 'Kỹ thuật xuống đèo an toàn', url: 'https://thuexemayhanoi.github.io/total/tips/meo-lai-xe/ky-thuat-do-deo-an-toan/' },
  ],
  related: [
    'ky-thuat-di-xe-may-qua-cau',
    'ky-thuat-do-deo-an-toan',
    'do-xe-may-tren-le-doc-an-toan',
    'ky-thuat-di-xe-may-trong-gio-lon',
  ],
};
