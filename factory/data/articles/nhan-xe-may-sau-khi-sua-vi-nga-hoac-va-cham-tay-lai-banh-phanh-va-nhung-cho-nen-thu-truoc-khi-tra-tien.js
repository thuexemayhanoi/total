// AI WIKI TOTAL — S01764; nhận xe sau khi sửa vì ngã hoặc va chạm, quan sát và thử chậm, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'nhan-xe-may-sau-khi-sua-vi-nga-hoac-va-cham-tay-lai-banh-phanh-va-nhung-cho-nen-thu-truoc-khi-tra-tien',
  title: 'Nhận xe máy sau khi sửa vì ngã hoặc va chạm: tay lái, bánh, phanh và những chỗ nên thử trước khi trả tiền',
  seoTitle: 'Nhận xe máy sau khi sửa vì ngã: kiểm tay lái, bánh và phanh',
  metaDescription: 'Nhận xe máy sau khi sửa vì ngã hay va chạm: nhìn tay lái và bánh lúc xe đứng yên, thử phanh tại chỗ, chạy chậm ở chỗ vắng và biết lúc nào chưa nên trả tiền.',
  summary: 'Bài hướng dẫn người nhận xe máy vừa được sửa sau một lần ngã hoặc va chạm cách kiểm tra theo thứ tự an toàn tăng dần. Nội dung giải thích vì sao xe sau va chạm cần kiểm khác xe sau bảo dưỡng, rồi đi qua bốn bước: nhìn bằng mắt khi xe đứng yên, thử tay lái, phanh và bánh tại chỗ, chạy thử ngắn ở chỗ vắng, và nhận ra lúc nào chưa nên nhận xe hay trả tiền. Mọi việc nắn hoặc chỉnh đều thuộc về thợ; người nhận xe chỉ quan sát, thử nhẹ và ghi lại điều thấy.',
  quickAnswer: 'Xe sửa sau va chạm có thể còn lệch ở những chỗ không nhìn thấy ngay, nên đừng chỉ dựa vào vẻ ngoài sạch sẽ. Hãy nhìn tay lái có thẳng với bánh trước và hai bánh có cùng một đường không, thử đánh lái, bóp phanh và dắt xe tại chỗ, rồi chạy chậm ở chỗ vắng. Xe kéo lệch, tay lái lệch, phanh lạ hoặc rung bất thường thì nói với thợ trước khi trả tiền.',
  keyPoints: [
    'Lực va chạm có thể làm cong hoặc lệch những chi tiết khuất sau nhựa ốp hay lớp sơn mới, nên xe sửa xong sạch đẹp chưa chắc đã hết lệch bên trong.',
    'Khi xe đứng yên, hãy xem ghi-đông có thẳng với bánh trước không, hai bánh có nằm cùng một đường khi nhìn từ phía sau không, và gương, đèn, xi-nhan đã gắn chắc chưa.',
    'Tại chỗ, đánh lái hết hai bên, bóp phanh trước và phanh sau, dắt xe một đoạn ngắn để xem tay lái có kẹt hay vướng dây, bánh có bó hay cọ không.',
    'Chạy thử chậm và thẳng ở chỗ vắng, giữ tay lái nhẹ nhàng, không thử buông hai tay; để ý xe kéo lệch, rung, tiếng lạ và phanh có đều không.',
    'Xe kéo lệch, tay lái lệch, phanh lạ hoặc rung bất thường thì nói với thợ trước khi trả tiền, nhờ ghi rõ việc đã làm và hẹn kiểm tra lại; mọi việc chỉnh đều do thợ làm.'
  ],
  category: 'docs',
  hub: 'checklist',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['xe máy sau va chạm', 'ghi-đông và cổ lái', 'phanh trước và phanh sau', 'bánh xe và vành', 'chạy thử chậm', 'kiểm tra khi nhận xe'],
  keywords: ['nhận xe máy sau khi sửa vì ngã', 'xe máy sửa sau tai nạn kiểm tra gì', 'kiểm tra tay lái sau khi nắn', 'nhận xe sửa sau va chạm'],
  sections: [
    P('Vì sao xe sửa sau va chạm cần kiểm khác với xe sau bảo dưỡng', [
      'Nhận xe máy sau khi sửa vì ngã không giống nhận xe sau một buổi bảo dưỡng. Ở bảo dưỡng, xe vào tiệm với các chi tiết còn nguyên hình dạng, thợ thay vật tư hao mòn rồi chỉnh lại, nên lúc nhận chủ yếu là xem việc đã làm có đúng và đủ không; phần đó đã có bài riêng về nhận xe sau bảo dưỡng. Xe sau va chạm khác ở gốc rễ: trước khi vào tiệm, nó đã chịu một cú lực lớn và đột ngột mà bạn không đo được. Câu hỏi khi nhận xe vì vậy không chỉ là thợ đã làm gì, mà còn là những chỗ chịu lực đã thật sự trở về đúng vị trí hay chưa. Câu hỏi này không thể trả lời chỉ bằng cách nhìn chiếc xe đã được lau sạch bóng.',
      'Lực va chạm đi theo đường của nó: từ chỗ chạm đất hoặc chạm vật cản, truyền qua tay lái, cổ lái, phuộc, vành, trục bánh rồi vào khung. Mỗi chi tiết trên đường truyền ấy có thể cong hoặc xô lệch một chút mà mắt thường khó thấy, nhất là khi nó nằm khuất sau nhựa ốp hoặc đã được phủ lớp sơn mới. Hư hỏng ngoài mặt như vỡ nhựa, trầy xước, gãy gương thì dễ nhận ra và dễ sửa; chỗ lệch bên trong thường chỉ lộ ra qua cách xe cư xử: tay lái không thẳng, hai bánh không cùng đường, phanh cọ, xe kéo về một bên, rung ở những chỗ trước đây êm. Vì thế người nhận xe cần xem hành vi của xe, không chỉ xem vẻ ngoài của nó.',
      'Sửa xong, vẻ ngoài chưa chắc đồng nghĩa với hết lệch bên trong. Một chi tiết được nắn lại hoặc thay mới có thể rất đẹp, trong khi chi tiết kế bên cùng chịu lực lại chưa được ai xét tới. Trước khi kiểm, hãy hỏi thợ đã nắn, đã thay và đã chỉnh những gì, và nhờ họ nói bằng lời dễ hiểu; danh sách ấy cho bạn biết nên nhìn kỹ chỗ nào hơn. Phần kiểm sau đó chia theo thứ tự an toàn tăng dần: nhìn khi xe đứng yên, thử tại chỗ, rồi mới chạy chậm ở chỗ vắng. Thấy lạ ở bước nào thì dừng ở bước đó và nói với thợ ngay. Việc nắn hay chỉnh lại luôn là việc của thợ, không phải của bạn.'
    ]),
    P('Xem bằng mắt khi xe đứng yên', [
      'Hãy để xe đứng thẳng trên nền phẳng, nhờ thợ hoặc người quen giữ giúp nếu cần, rồi lùi ra vài bước để nhìn tổng thể trước khi cúi sát từng chi tiết. Việc đầu tiên là xem ghi-đông có thẳng với bánh trước không: đứng sau xe nhìn về phía trước, đường giữa của ghi-đông phải trùng với đường giữa của bánh trước khi bánh hướng thẳng. Hai đầu tay cầm nhìn ngang phải cân nhau, không đầu nào cao hơn hay nhô ra hơn đầu kia, còn đồng hồ và chân gương không bị xoay vênh. Ghi-đông lệch so với bánh là dấu hiệu rất quen sau một lần ngã; cách nhận biết kỹ hơn, cùng lý do không nên tự nắn lại, đã có bài riêng về ghi-đông lệch hoặc cong sau khi ngã.',
      'Tiếp theo, cúi thấp ở phía sau xe và nhìn dọc thân xe về phía trước. Khi xe đứng thẳng và tay lái đặt thẳng, hai bánh phải nằm trên cùng một đường, thể hiện ở chỗ phần lốp hẹp hơn lọt vào giữa phần lốp rộng hơn, và phần lộ ra ở hai bên trông đều nhau. Nếu một bên lộ nhiều hơn hẳn, hai bánh có thể đã không còn cùng một đường, một dấu hiệu có thể liên quan đến khung, càng hay cổ lái đã lệch. Bạn không cần biết chi tiết nào là thủ phạm; chỉ cần ghi nhận điều mình thấy và nói lại với thợ. Nên nhìn thêm từ hai bên: khoảng hở giữa lốp với chắn bùn hoặc nhựa ốp có đều không, vành có chỗ nào méo hay cấn không. Góc nhìn thuận tiện tùy kiểu xe.',
      'Sau đó đi qua những chi tiết hay gãy hoặc xô khi ngã. Gương có vặn chắc, chỉnh về góc nhìn thoải mái và không rơ khi lay nhẹ không; đèn pha, đèn hậu, xi-nhan có bám chắc, không chúc lệch hướng không. Nhờ thợ bật đèn, xi-nhan và còi cho bạn xem để biết chúng hoạt động đủ. Ở chỗ vừa sửa, nhìn kỹ xem có vết nứt nhỏ ở mép nhựa hoặc quanh chỗ bắt ốc, có ốc thiếu hay lỏng, khe hở giữa các tấm nhựa đều hay chỗ chồng chỗ hở. Dây phanh, dây ga và dây điện phải đi gọn, không bị kẹp, căng hay cọ vào cạnh sắc. Dây bị vướng ở chỗ vừa tháo ra lắp lại là sơ suất có thể xảy ra, và thường lộ rõ nhất khi bạn đánh lái.'
    ]),
    P('Thử tay lái, phanh và bánh tại chỗ', [
      'Bước thử tại chỗ đầu tiên là đánh lái. Giữ xe thẳng đứng, nhẹ nhàng đánh tay lái hết về bên trái rồi hết về bên phải, chậm và liên tục vài lần. Tay lái phải quay trơn, nặng nhẹ giống nhau ở cả hai phía, không có điểm bị kẹt hay nặng đột ngột giữa hành trình, không phát tiếng cạ hoặc lạch cạch. Trong lúc đánh lái, nhìn xuống các dây dẫn: dây phanh, dây ga, dây điện không được bị kéo căng, gập góc hay vướng vào chi tiết khác khi tay lái ở vị trí hết cỡ. Tay lái hết cỡ ở một phía sớm hơn phía còn lại, hoặc chạm vào nhựa ốp, là dấu hiệu cần nói với thợ. Bạn chỉ quan sát và báo, không tự nới hay chỉnh bất kỳ chi tiết nào.',
      'Tiếp đến là phanh. Bóp phanh trước rồi phanh sau, mỗi lần chậm rãi và cảm nhận: tay phanh và chân phanh phải hoạt động êm, không kẹt, không cứng hay lún bất thường, và khi thả ra phải trở về hẳn. Độ nặng nhẹ bình thường của phanh còn tùy xe, vì có xe dùng phanh cơ, có xe dùng phanh dầu, nên hãy hỏi thợ chiếc xe này bóp lên thường ra sao. Sau đó dắt xe thẳng một đoạn ngắn trên nền phẳng và lắng nghe: bánh phải quay trơn khi không bóp phanh, không bị bó, không cọ lặp lại theo từng vòng quay, không có tiếng sột soạt từ khu vực phanh hay chắn bùn. Bánh quay nặng bất thường hoặc kêu cọ là lý do để dừng lại, nhờ thợ xem lại trước khi bạn lên xe.',
      'Một phép thử tại chỗ nữa nên nhờ thợ làm cùng bạn: giữ xe thẳng, bóp phanh trước thật chắc rồi đẩy xe nhẹ tới trước và kéo lại một chút, bàn tay đặt hờ lên ghi-đông để cảm nhận. Phuộc nhún nhẹ khi xe nhấp tới là bình thường; điều đáng chú ý là tiếng cộc hoặc độ lỏng, rơ ở phần cổ lái mà vẫn còn rõ dù phuộc chỉ nhún rất ít. Mức bình thường tùy xe và tùy thiết kế nên khó tự phán đoán; hãy nhờ thợ làm trước để bạn nghe và cảm nhận xe bình thường ra sao. Đây là phép thử để phát hiện, không phải để siết chỉnh. Nghi ngờ rơ thì chỉ nói với thợ và để họ kiểm bằng dụng cụ; đừng tự vặn thêm ốc nào ở tay lái hay cổ lái.'
    ]),
    P('Chạy thử ngắn ở chỗ vắng', [
      'Sau khi xe qua các phép thử tại chỗ mà không có gì lạ, hãy chạy thử một đoạn ngắn, và chọn nơi thật vắng, phẳng, ít người để nếu xe có vấn đề thì bạn có chỗ dừng an toàn. Mặc đồ bảo hộ cơ bản như mọi lần đi xe, nhất là mũ bảo hiểm, và nói với thợ rằng bạn sẽ chạy thử để họ biết đường chờ bạn quay lại. Chạy thật chậm theo một đường thẳng, hai tay đặt nhẹ trên ghi-đông và đi như bình thường, không tăng tốc để thử xe; mục đích là cảm nhận chứ không phải thử giới hạn. Tuyệt đối không thử buông hai tay, kể cả khi xe có vẻ đi thẳng: nếu bánh hay cổ lái còn lệch, xe có thể đổi hướng đột ngột ngay lúc bạn thả tay.',
      'Trên đoạn thẳng, hãy tự hỏi những điều đơn giản. Xe có dần kéo về một bên khi bạn giữ tay lái thật nhẹ không, hay bạn phải gồng tay ngược lại mới đi thẳng? Tay lái nằm thẳng khi xe đi thẳng, hay lệch đi một chút? Có rung ở tay lái, ở gác chân hay ở yên không, nhất là trong lúc đang chạy chậm? Có tiếng cọ, tiếng cộc hay lạch cạch khi qua chỗ gồ nhỏ không? Xe kéo lệch có nhiều nguyên nhân, từ lốp, bánh tới khung hay phuộc; bài về xe kéo lệch về một bên khi buông nhẹ tay lái đã bàn kỹ phần đó. Việc của bạn lúc này chỉ là nhận ra và nhớ mình cảm thấy gì, ở chỗ nào, để nói lại cho thợ thật chính xác.',
      'Cuối đoạn chạy thử, hãy thử phanh từ nhẹ tới chắc dần, nhưng vẫn ở tốc độ chậm. Phanh trước và phanh sau nên ăn đều, không giật, không rít kéo dài bất thường, không làm xe bị kéo lệch sang một bên, và khi nhả phanh thì xe phải lăn tự do trở lại. Chạy vòng lại và dừng thêm vài lần cũng giúp bạn biết xe có đứng vững, không rung lắc lúc dừng hay không. Gặp bất cứ điều gì lạ, bóp phanh, dừng xe an toàn rồi tắt máy, đừng cố chạy thêm cho xong đoạn thử. Dắt xe quay về và mô tả đúng điều đã cảm thấy cho thợ nghe. Một lần chạy thử ngắn không thay được việc theo dõi những ngày sau, nhưng đủ để phát hiện các lỗi rõ ràng.'
    ]),
    P('Khi nào chưa nhận xe hoặc phải quay lại ngay', [
      'Có những dấu hiệu khiến bạn nên chưa nhận xe, cũng chưa trả tiền, mà nói ngay với thợ tại tiệm: xe kéo lệch về một bên, tay lái không thẳng khi xe đi thẳng, phanh lạ tay như kẹt, cứng, lún sâu hay kêu, xe rung bất thường, hoặc ở chỗ vừa sửa còn thấy ốc lỏng, dây vướng, vết nứt. Hãy nói bằng điều mình thấy được: chạy chậm thì xe kéo sang bên nào, rung ở đâu, phanh nào thấy lạ. Cách nói này giúp thợ biết cần xem lại đúng chỗ, hơn hẳn câu chung chung như xe chạy chưa êm. Việc nhờ kiểm lại trước khi nhận xe là bình thường và hợp lý, không phải làm khó ai.',
      'Dù xe qua được các phép thử, vẫn nên nhờ thợ ghi rõ việc đã làm, trên phiếu hoặc bằng tin nhắn: chi tiết nào đã nắn, chi tiết nào đã thay, chi tiết nào chỉ chỉnh, và chỗ nào thợ đề nghị theo dõi thêm. Bản ghi này không dùng để tranh cãi mà để cả hai bên cùng biết nên xem lại chỗ nào khi xe có biểu hiện lạ. Hãy hẹn một lần kiểm tra lại sau vài ngày đi, nói rõ rằng bạn sẽ mang xe quay lại dù không thấy gì bất thường, vì sau va chạm có thể có chỗ chỉ lộ ra khi xe quay lại chịu tải đều đặn. Còn chuyện thanh toán, cách yên tâm nhất vẫn là kiểm xong rồi mới trả, để mọi trao đổi còn rõ ràng.',
      'Những ngày đầu sau khi nhận xe, hãy đi chậm, tránh chở nặng, tránh đường xấu hoặc đường đông nếu có thể, để xe và bạn có thời gian làm quen. Chú ý những điều mới xuất hiện: tiếng cộc ở phía trước, rung ở tay lái, phanh khác trước, xe tự kéo lệch, tay lái nặng dần, đèn hay gương lại lỏng. Gặp bất kỳ điều nào trong số đó, bóp phanh, dừng xe an toàn và đưa xe quay lại thợ sớm, thay vì chờ xem có tự hết không; chỗ lệch hay lỏng sau va chạm thường không tự hết. Đừng tự siết ốc, tự chỉnh phanh hay tay lái. Vẫn còn lo thì có thể nhờ thợ có chuyên môn xem thêm, đối chiếu với sách hướng dẫn của xe, và đọc bài về kiểm tra người và xe sau khi ngã để không bỏ sót phần chăm sóc bản thân.'
    ])
  ],
  checklist: [
    'Hỏi thợ đã nắn, thay và chỉnh những chi tiết nào, và nhờ ghi lại trước khi bắt đầu kiểm.',
    'Nhìn ghi-đông có thẳng với bánh trước không, rồi nhìn từ phía sau xem hai bánh có cùng một đường không.',
    'Xem gương, đèn, xi-nhan đã gắn chắc chưa, và tìm vết nứt, ốc lỏng, dây vướng ở chỗ vừa sửa.',
    'Đánh lái hết hai bên, bóp phanh trước và phanh sau, dắt xe một đoạn ngắn để xem tay lái, dây và bánh có kẹt, bó hay cọ không.',
    'Chạy thử chậm và thẳng ở chỗ vắng, để ý xe có kéo lệch, rung, tiếng lạ hay phanh không đều, rồi mới quyết định trả tiền.'
  ],
  steps: [
    { title: 'Hỏi thợ đã làm những gì', detail: 'Nhờ thợ nói rõ chi tiết nào đã nắn, thay hoặc chỉnh để biết nên nhìn kỹ chỗ nào, và nhờ ghi lại bằng chữ.' },
    { title: 'Nhìn kỹ khi xe đứng yên', detail: 'Xem tay lái có thẳng với bánh trước không, hai bánh có cùng một đường khi nhìn từ phía sau không, gương, đèn, xi-nhan đã chắc chưa, chỗ vừa sửa có nứt, lỏng hay vướng dây không.' },
    { title: 'Thử tay lái, phanh và bánh tại chỗ', detail: 'Đánh lái hết hai bên, bóp phanh trước và phanh sau, dắt xe một đoạn ngắn, nhờ thợ làm cùng phép thử đẩy xe khi bóp phanh trước; chỉ quan sát và báo lại, không tự chỉnh.' },
    { title: 'Chạy thử chậm ở chỗ vắng', detail: 'Chạy thẳng, chậm, giữ tay lái nhẹ nhàng và không buông hai tay; để ý xe kéo lệch, rung, tiếng lạ, phanh đều hay không rồi nói lại với thợ trước khi trả tiền.' }
  ],
  warnings: [
    'Không tự nắn, siết hay chỉnh tay lái, phanh, bánh hoặc cổ lái; mọi việc chỉnh đều do thợ có chuyên môn làm bằng dụng cụ phù hợp.',
    'Không thử buông hai tay khi chạy; chỉ chạy thử chậm ở chỗ vắng, mặc đồ bảo hộ, và gặp điều lạ thì bóp phanh, dừng xe an toàn rồi tắt máy.',
    'Xe kéo lệch, tay lái lệch, phanh lạ hoặc rung bất thường là lý do để chưa nhận xe và chưa trả tiền, hãy nói với thợ để kiểm lại ngay.'
  ],
  notes: [
    'Các phép thử trong bài chỉ giúp phát hiện dấu hiệu bất thường bằng quan sát; xe có còn lệch ở khung hay phuộc hay không chỉ thợ có chuyên môn mới kết luận được.',
    'Độ nặng của phanh, độ nặng của tay lái và cách bố trí dây khác nhau tùy xe; hãy đối chiếu với sách hướng dẫn của đúng dòng xe bạn đang đi.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần tay lái, phanh và kiểm tra trước khi đi',
    'Tài liệu kỹ thuật của nhà sản xuất về khung, phuộc và hệ thống phanh của đúng dòng xe'
  ],
  related: ['nhan-xe-sau-bao-duong-kiem-tra-gi', 'ghi-dong-xe-may-bi-lech-hoac-cong-sau-nga', 'xe-may-keo-lech-khi-buong-tay-lai', 'sau-khi-nga-xe-may-kiem-tra-nguoi-va-xe', 'checklist-nhan-xe']
};
