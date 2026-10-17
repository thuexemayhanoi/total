// AI WIKI TOTAL — S01753; so hai báo giá sửa xe theo phạm vi, phụ tùng và lời hẹn; không nêu số liệu, mức tiền hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'hoi-hai-tiem-cung-mot-viec-so-bao-gia-theo-pham-vi-cong-viec-phu-tung-va-loi-hen-thay-vi-chi-nhin-tong-tien',
  title: 'Hỏi hai tiệm cùng một việc: so báo giá theo phạm vi công việc, phụ tùng và lời hẹn thay vì chỉ nhìn tổng tiền',
  seoTitle: 'So sánh báo giá sửa xe hai tiệm: so phạm vi, phụ tùng và lời hẹn',
  metaDescription: 'So sánh báo giá sửa xe hai tiệm thế nào cho đúng? Cách để hai nơi báo cùng một việc, rồi so phạm vi công việc, phụ tùng, chi tiết cũ và lời hẹn.',
  summary: 'Bài dành cho người đã nhận một bản báo sửa xe, hỏi thêm một tiệm nữa cho chắc và nhận về hai bản báo giá khác nhau. Nội dung giải thích vì sao tổng tiền một mình không cho biết bản báo đã gồm gì, cách để hai tiệm cùng báo một việc bằng cùng một đoạn mô tả triệu chứng, cách xếp hạng mục theo mức gấp, và những câu hỏi nên đặt về loại phụ tùng, chi tiết cũ, thời gian xong, hẹn kiểm tra lại. Cuối bài là cách chọn khi hai bên vẫn khác nhau mà không coi rẻ nhất hay đắt nhất là đúng.',
  quickAnswer: 'Muốn so sánh báo giá sửa xe hai tiệm, đừng so tổng tiền trước. Hãy đưa cho cả hai cùng một đoạn mô tả triệu chứng, nhờ tiệm thứ hai tự kiểm tra rồi ghi từng hạng mục, sau đó đặt hai bản cạnh nhau theo bốn tiêu chí: phạm vi và mức gấp, loại phụ tùng, chi tiết cũ có trả không, lời hẹn và bảo hành. Việc liên quan phanh, lái thì không trì hoãn chỉ để so.',
  keyPoints: [
    'Tổng tiền chỉ là con số cuối: mỗi tiệm kiểm tra, chẩn đoán và liệt kê theo cách riêng nên hai bản chưa chắc nói về cùng một phạm vi công việc.',
    'Để hai tiệm báo cùng một việc, hãy đưa cùng một đoạn mô tả triệu chứng, nhờ tiệm thứ hai tự kiểm tra thay vì đọc cho họ chẩn đoán của tiệm đầu, và nhờ ghi rõ từng hạng mục.',
    'Chia hạng mục thành việc ảnh hưởng an toàn, việc nên làm sớm và việc có thể sắp xếp sau; hạng mục chỉ có ở một bên cần được hỏi lý do, không vội coi là thừa hay thiếu.',
    'Hỏi rõ loại phụ tùng mỗi bên dùng, có trả lại chi tiết cũ hay cho xem không, bao giờ xong, có hẹn kiểm tra lại và bảo hành thế nào, rồi ghi bằng chữ thay vì đoán.',
    'Khi hai bên vẫn khác nhau, hỏi lại cả hai về chỗ khác biệt, ưu tiên nơi giải thích rõ và cho xem chi tiết hỏng; việc phanh, lái làm trước, không coi rẻ nhất hay đắt nhất là đúng.'
  ],
  category: 'map',
  hub: 'diem-sua-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['báo giá sửa xe', 'phạm vi công việc', 'phụ tùng thay thế', 'chi tiết cũ', 'lời hẹn và bảo hành', 'mức gấp về an toàn'],
  keywords: ['so sánh báo giá sửa xe hai tiệm', 'hỏi thêm tiệm khác trước khi sửa xe', 'báo giá sửa xe khác nhau', 'so sánh hai báo giá sửa xe máy'],
  sections: [
    P('Vì sao hai báo giá khó so trực tiếp', [
      'Hai tờ báo giá cho cùng một chiếc xe mà tổng tiền lệch nhau thường không có nghĩa một bên sai. Tổng tiền chỉ là con số cuối cùng của một chuỗi việc: kiểm tra những gì, kết luận ra sao, liệt kê thế nào, rồi mới đến thay gì và làm gì. Mỗi tiệm đi qua chuỗi ấy theo cách riêng, nên hai con số cuối thường là kết quả của hai câu chuyện khác nhau, và đặt chúng cạnh nhau giống như so hai tấm bản đồ vẽ theo hai tỷ lệ. Muốn so có ý nghĩa, bạn cần kéo cả hai về cùng một mặt bằng: cùng triệu chứng, cùng phạm vi, cùng loại phụ tùng, cùng lời hẹn. Các phần sau của bài đi lần lượt qua từng bước, bắt đầu từ lý do vì sao tổng tiền một mình không nói được điều gì.',
      'Sự khác biệt đầu tiên nằm ở khâu kiểm tra. Một tiệm có thể nghe tiếng, nhìn vết dầu, lắc thử bánh rồi kết luận nhanh; tiệm khác nâng xe lên, gỡ lớp che chắn, thử từng chi tiết trước khi nói. Hai cách kiểm tra cho ra hai danh sách phát hiện khác nhau, và danh sách dài hơn chưa chắc vì bên đó thích làm nhiều, có khi chỉ vì bên đó nhìn kỹ hơn hoặc nhìn sang chỗ khác. Chẩn đoán cũng vậy: cùng một tiếng kêu, người này nghi chi tiết nọ, người kia nghi chi tiết kia, và cả hai đều có thể đúng một phần. Triệu chứng giống nhau chưa đảm bảo nguyên nhân giống nhau, nhất là khi xe có vài chi tiết cùng mòn một lượt.',
      'Cách liệt kê là lớp khác biệt thứ ba. Có tiệm viết gộp một dòng kiểu “làm lại cụm phía trước”, có tiệm tách thành từng chi tiết kèm tiền công riêng; có tiệm đã tính sẵn vật tư nhỏ như dầu mỡ, vòng đệm, vệ sinh, tiệm khác để dòng ấy ra sau khi làm xong. Bản gộp trông gọn nhưng không cho biết bên trong có gì, bản tách trông dài nhưng dễ đối chiếu hơn. Cũng có bản chỉ ghi phụ tùng mà quên tiền công, hoặc ghi việc chính mà chưa ghi việc kèm theo như chạy thử sau khi sửa. Vì mỗi người một kiểu, tổng tiền không cho bạn biết nó đã gồm những gì và chưa gồm những gì. Việc đọc kỹ từng dòng của một bản đơn lẻ nằm ở các bài khác trong chuyên mục; bài này chỉ bàn chuyện đặt hai bản cạnh nhau.'
    ]),
    P('Làm sao để hai tiệm báo cùng một việc', [
      'Điểm xuất phát công bằng nhất là đưa cho hai tiệm cùng một đoạn mô tả triệu chứng. Hãy viết ra giấy hoặc ghi vào điện thoại trước khi đi: xe có hiện tượng gì, xảy ra lúc nào, nặng lên hay nhẹ đi khi chạy nhanh, khi rẽ, khi bóp phanh, khi trời mưa, khi chở nặng. Đọc nguyên văn đoạn ấy cho cả hai nơi thay vì kể lại bằng lời mới mỗi lần, vì mỗi lần kể lại bạn sẽ vô tình nhấn vào chỗ khác. Chỉ mô tả cái thấy, cái nghe, cái cảm nhận bằng tay và chân; đừng chen suy đoán nguyên nhân vào, vì một lời chẩn đoán đi kèm có thể kéo người nghe nghiêng theo. Nếu tiệm đầu đã nói tên một chi tiết, hãy tạm gác cái tên ấy sang bên khi làm việc với tiệm thứ hai.',
      'Điều dễ làm hỏng cuộc so sánh nhất là đọc cho tiệm thứ hai nghe bản báo của tiệm đầu rồi hỏi “vậy có đúng không”. Lúc ấy bạn không còn nhận được ý kiến độc lập, mà nhận về một cái gật hoặc lắc đầu trước kết luận có sẵn, và người trả lời có thể ngại đụng tới đồng nghiệp hoặc ngược lại muốn chứng tỏ mình hơn. Hãy xin tiệm thứ hai tự kiểm tra từ đầu, rồi nói họ thấy gì và vì sao. Chỉ khi họ đã nêu kết luận của mình, bạn mới nhờ họ bình luận về những chỗ hai bên khác nhau. Giữ thái độ hỏi để hiểu, không hỏi để bắt bẻ; người thợ được hỏi một cách thoải mái thường giải thích sẵn lòng hơn. Ghi lại lời giải thích ngay tại chỗ, kẻo về nhà hai bản lẫn vào nhau.',
      'Bước còn lại là nhờ ghi rõ từng hạng mục theo cùng một khung. Một khung đơn giản gồm bốn cột: việc cần làm, chi tiết liên quan, tiền công, phụ tùng thay mới nếu có. Nếu một bên đưa bản gộp, bạn có thể hỏi bên trong dòng ấy gồm những việc nào, việc nào chỉ là kiểm tra, việc nào là thay, việc nào là vệ sinh hay điều chỉnh. Hỏi như vậy không phải đòi hỏi quá đáng; một bản rõ ràng cũng giúp chính tiệm tránh hiểu lầm lúc giao xe. Bạn có thể tự kẻ bảng trên giấy rồi điền lời hai bên vào, mỗi hạng mục một hàng. Chỗ nào một bên có mà bên kia để trống, hãy đánh dấu để hỏi tiếp, chưa vội kết luận bên nào thừa hay bên nào thiếu.'
    ]),
    P('So theo phạm vi công việc và mức gấp', [
      'Sau khi hai bản đã cùng khung, bước đầu là chia hạng mục theo mức gấp thay vì cộng dồn. Nhóm thứ nhất là việc ảnh hưởng an toàn khi đi: phanh, lái, bánh xe, hệ treo, đèn tín hiệu, các điểm bắt chặt. Nhóm thứ hai là việc chưa gây nguy hiểm tức thì nhưng sẽ xấu dần nếu để lâu, như rò rỉ nhẹ, tiếng kêu mới xuất hiện, độ rơ còn nhỏ. Nhóm thứ ba là việc thiên về êm ái, gọn gàng hoặc thẩm mỹ, có thể sắp xếp theo lịch của bạn. Khi mỗi dòng đã có nhãn, hai bản vốn trông chênh nhau nhiều có thể thu về vài chỗ khác biệt thật sự. Hãy hỏi từng tiệm vì sao họ xếp hạng mục vào nhóm ấy, vì ranh giới giữa các nhóm đôi khi tùy xe và tùy cách bạn sử dụng.',
      'Đặt hai bản cạnh nhau sẽ thấy những hạng mục chỉ xuất hiện ở một bên. Đừng vội xem đó là dấu hiệu bên kia bỏ sót hay bên này làm dày thêm; có ba lý do thường gặp. Một là bên kia chưa kiểm tra tới chỗ đó. Hai là cả hai đều thấy nhưng một bên coi là chưa cần, còn bên kia coi là nên làm luôn trong lúc đã mở sẵn cụm chi tiết, vì làm cùng đợt có thể đỡ công tháo lắp lần sau. Ba là hai bên hiểu khác nhau về mức hao mòn còn chấp nhận được. Cách làm sáng tỏ là nhờ bên có hạng mục ấy chỉ cho xem dấu hiệu cụ thể, rồi hỏi bên kia họ có nhìn chỗ đó không và thấy tình trạng ra sao. Hai câu trả lời đặt cạnh nhau cho bạn nhiều thông tin hơn bất kỳ tổng tiền nào.',
      'Có một ranh giới mà việc so sánh không nên kéo dài: những gì liên quan tới phanh và lái. Nếu một tiệm, dù chỉ một, nêu lý do rõ ràng rằng hệ thống phanh hay tay lái có vấn đề, thì đừng chờ thêm ý kiến thứ ba hay chờ cân nhắc tổng tiền rồi mới quyết. Bóp phanh thấy hụt, lún sâu, xe lệch về một bên, có tiếng cào kim loại, hoặc tay lái rơ, nặng bất thường, rung mạnh đều là lý do ngừng đi xe và đưa xe ra thợ có chuyên môn; cách kiểm tra cụ thể tùy xe. Hãy để việc an toàn đi trước, rồi dùng thời gian còn lại để so những hạng mục không gấp. Nếu buộc phải di chuyển tới tiệm, hãy đi thật chậm, chọn đoạn đường ngắn và ít xe, hoặc nhờ người chở hay dắt hộ.'
    ]),
    P('So phụ tùng, chi tiết cũ và lời hẹn', [
      'Cùng một dòng “thay chi tiết” có thể là những món rất khác nhau. Phụ tùng có thể là loại do nhà sản xuất xe cung cấp, loại do nơi khác làm theo cùng kiểu dáng, loại tân trang, hoặc loại đã qua sử dụng. Mỗi loại có độ bền, độ vừa vặn và chế độ bảo hành khác nhau, và không loại nào tự động đúng cho mọi hoàn cảnh. Điều bạn cần là biết mỗi bên định dùng loại nào, chưa cần tự chấm điểm. Hãy hỏi thẳng: đây là phụ tùng mới hay đã qua sử dụng, của nhà sản xuất xe hay của nơi khác, có hợp đúng đời xe của mình không, và có bao bì hay dấu hiệu nhận biết nào không. Nếu một bên không nói rõ, hãy ghi vào chỗ trống chứ đừng đoán rằng họ dùng loại tốt hay loại kém.',
      'Chi tiết cũ là phần dễ bị bỏ quên khi so. Hãy hỏi từng tiệm có trả lại chi tiết đã thay không, và nếu bạn muốn xem thì xem vào lúc nào: trước khi tháo, ngay sau khi tháo hay lúc nhận xe. Nhìn chi tiết hỏng giúp bạn hiểu vì sao phải thay, nhất là khi hai bên bất đồng về mức cần thiết; một vết nứt, một chỗ mòn lệch, một phần đã rỉ sét nói được nhiều hơn lời giải thích. Không phải lúc nào cũng trả được: có chi tiết dính dầu mỡ khó giữ, có chi tiết hỏng đến mức không còn nhìn ra gì, có chi tiết là một phần của cụm lớn phải đổi nguyên cụm. Nếu bên nào không trả được, hãy hỏi lý do và nhờ chỉ cho xem tận mắt trước khi bỏ, giữ giọng bình thản.',
      'Lời hẹn là phần hai bản dễ lệch nhau mà ít ai để ý. Hãy hỏi mỗi tiệm xe xong vào lúc nào, thời điểm ấy tính từ khi nhận xe hay từ khi phụ tùng về đến nơi, có phải chờ phụ tùng đặt riêng hay không, và nếu trễ thì họ báo bạn bằng cách nào. Hỏi thêm có hẹn kiểm tra lại sau một thời gian chạy hay không, và nếu có thì lần kiểm tra ấy nằm trong báo giá hay tính thêm. Hỏi cả chuyện bảo hành: bảo hành cho phụ tùng, cho tiền công hay cho cả hai, và điều gì làm mất bảo hành. Một bản nhanh hơn chưa chắc tốt hơn nếu không có hẹn kiểm tra, và một bản chậm hơn chưa chắc kém hơn nếu lý do chờ phụ tùng rõ ràng. Mọi câu trả lời nên được ghi bằng chữ, không chỉ nói miệng.'
    ]),
    P('Chọn thế nào khi hai bên vẫn khác nhau', [
      'Sau khi đã cùng khung, cùng phạm vi và hỏi kỹ phụ tùng, lời hẹn, vẫn có thể còn vài chỗ hai bên không giống nhau. Đó là chuyện bình thường, vì sửa xe có một phần là phán đoán nghề nghiệp. Việc nên làm lúc này là quay lại hỏi cả hai về chính những chỗ khác biệt ấy, mỗi bên một câu hỏi cụ thể: bên kia cho rằng chỗ này chưa cần, bạn thấy sao; bên kia đề nghị làm cùng đợt, vì sao bên bạn để sau. Hãy trình bày như một thông tin để hiểu thêm, đừng chuyển lời với giọng gay gắt. Câu trả lời tốt thường có lý do cơ khí rõ ràng, nêu được hậu quả nếu để lại, và chỉ ra dấu hiệu nào cho thấy đã đến lúc phải làm.',
      'Khi hai bên vẫn khác nhau, nơi nào giải thích rõ hơn là tiêu chí đáng cân nhắc hơn tổng tiền. Dấu hiệu của sự rõ ràng gồm: họ chỉ cho bạn xem chi tiết hỏng và nói được vì sao hỏng; họ phân biệt được việc cần làm ngay với việc để sau mà không dọa; họ vui lòng nghe câu hỏi, không khó chịu khi bạn muốn nghe thêm; họ ghi bằng chữ những gì đã hứa. Ngược lại, một câu trả lời mơ hồ như “cứ làm đi cho chắc” mà không nêu được lý do chưa có nghĩa là sai, nhưng là lý do để bạn hỏi thêm. Bạn cũng không bắt buộc phải chọn trọn một bên: có thể giao việc gấp cho nơi đã giải thích tốt, rồi cân nhắc các việc còn lại sau.',
      'Đừng lấy bản rẻ nhất hay đắt nhất làm thước đo đúng sai. Bản thấp hơn có thể vì phạm vi hẹp hơn, phụ tùng khác loại hoặc chưa tính hết việc kèm theo; bản cao hơn có thể vì làm rộng hơn, dùng phụ tùng khác hoặc có thêm hẹn kiểm tra. Cả hai đều có thể hợp lý, và cũng có thể cả hai đều chưa khớp với điều bạn cần. Thước đo hữu ích hơn là câu hỏi: bản nào giúp mình hiểu rõ nhất mình đang trả tiền cho việc gì, chi tiết nào, bảo đảm ra sao. Nếu sau tất cả vẫn chưa yên tâm, bạn có thể hỏi thêm một nơi nữa theo đúng cách đã nêu, nhưng hãy nhớ việc phanh, lái không nên chờ lâu. Hãy ghi lại lý do chọn để lần sau nhìn lại.'
    ])
  ],
  checklist: [
    'Viết sẵn một đoạn mô tả triệu chứng (hiện tượng, lúc xảy ra, điều kiện đi kèm) và đọc nguyên văn cho cả hai tiệm.',
    'Nhờ tiệm thứ hai tự kiểm tra trước, chưa đọc cho họ kết luận của tiệm đầu.',
    'Nhờ cả hai ghi từng hạng mục: việc làm, chi tiết liên quan, tiền công và phụ tùng thay mới, rồi kẻ bảng đối chiếu.',
    'Gắn nhãn mỗi hạng mục: ảnh hưởng an toàn, nên làm sớm hoặc có thể để sau, và hỏi mỗi bên vì sao xếp như vậy.',
    'Hỏi và ghi bằng chữ loại phụ tùng, việc trả hay cho xem chi tiết cũ, thời gian xong, hẹn kiểm tra lại và bảo hành.'
  ],
  steps: [
    { title: 'Chuẩn bị đoạn mô tả triệu chứng', detail: 'Ghi hiện tượng, thời điểm xảy ra và điều kiện đi kèm bằng lời trung tính, không kèm suy đoán nguyên nhân hay tên chi tiết mà tiệm đầu đã nói.' },
    { title: 'Nhờ mỗi tiệm kiểm tra độc lập và ghi hạng mục', detail: 'Đưa cùng đoạn mô tả cho tiệm thứ hai, nhờ họ tự kiểm tra rồi liệt kê từng hạng mục; chỗ nào gộp thì hỏi bên trong gồm những việc nào.' },
    { title: 'Đặt hai bản cạnh nhau theo mức gấp', detail: 'Chia hạng mục theo mức ảnh hưởng an toàn, đánh dấu chỗ chỉ có ở một bên và hỏi lý do thay vì vội kết luận thừa hay thiếu.' },
    { title: 'So phụ tùng, chi tiết cũ, lời hẹn rồi quyết định', detail: 'Hỏi loại phụ tùng, việc cho xem chi tiết cũ, thời gian xong, hẹn kiểm tra lại, bảo hành; chọn nơi giải thích rõ và làm trước việc liên quan phanh, lái.' }
  ],
  warnings: [
    'Việc liên quan phanh và lái không nên trì hoãn chỉ để so thêm báo giá: bóp phanh thấy hụt hoặc lệch, tay lái rơ hay rung bất thường là lý do ngừng đi xe và đưa xe ra thợ có chuyên môn.',
    'Đừng coi bản rẻ nhất hay đắt nhất là đúng, và đừng đọc cho tiệm này nghe kết luận của tiệm kia rồi hỏi đúng hay sai; hai cách đó đều làm sai lệch phần so sánh.',
    'Đừng đoán loại phụ tùng hay phạm vi công việc mà tiệm chưa nói rõ; chỗ nào chưa rõ thì hỏi và nhờ ghi bằng chữ trước khi đồng ý.'
  ],
  notes: [
    'Bài chỉ nêu cách đặt câu hỏi và cách đối chiếu hai bản báo giá; không đánh giá tiệm nào và không nêu mức tiền hợp lý cho bất kỳ việc nào.',
    'Chi tiết cần làm, thứ tự làm và cách kiểm tra khác nhau tùy xe; hãy đối chiếu với sách hướng dẫn của xe hoặc hỏi thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bảo dưỡng định kỳ và các hạng mục cần kiểm tra',
    'Tài liệu kỹ thuật của nhà sản xuất về phụ tùng và bảo hành của đúng dòng xe'
  ],
  related: ['doc-bao-gia-sua-xe-truoc-khi-dong-y', 'chon-tiem-sua-xe-may-dang-tin', 'doc-hoa-don-bao-duong-xe-may', 'tho-sua-xe-tin-cay', 'tiem-sua-xe-gan-day']
};
