// AI WIKI TOTAL — S01085 (topic V2 T001133); giải thích nguyên lý chung, thao tác đặt lại phải theo sổ hướng dẫn của từng xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'cam-bien-nghieng-xe-may',
  title: 'Cảm biến nghiêng ngắt máy khi xe đổ: vì sao xe tắt và cách khởi động lại',
  seoTitle: 'Cảm biến nghiêng xe máy: vì sao xe đổ tắt máy và cách nổ lại',
  metaDescription: 'Cảm biến nghiêng tự ngắt máy khi xe ngã để giảm nguy cơ cháy. Bài giải thích mục đích, cách nhận biết trạng thái ngắt, cách đặt lại và khi nào cần kiểm tra thêm.',
  summary: 'Bài giải thích cảm biến nghiêng (còn gọi cảm biến ngã) trên xe máy: nó làm gì, vì sao xe đổ thì máy tắt, cách nhận biết xe đang ở trạng thái ngắt an toàn, thao tác đặt lại theo hướng dẫn của hãng và những tình huống cần kiểm tra kỹ hơn sau cú đổ hoặc khi xe tắt máy vô cớ.',
  quickAnswer: 'Cảm biến nghiêng ngắt đánh lửa hoặc nhiên liệu khi xe nghiêng quá mức trong một khoảng thời gian, nhằm giảm nguy cơ cháy sau khi ngã. Muốn nổ lại, dựng xe thẳng, tắt rồi bật lại khóa điện theo hướng dẫn của hãng và kiểm tra xe trước khi chạy tiếp.',
  keyPoints: [
    'Cảm biến nghiêng là thiết bị an toàn: xe đổ thì động cơ tự ngắt để giảm nguy cơ cháy do rò xăng.',
    'Xe đang ở trạng thái ngắt có thể vẫn quay đề nhưng không nổ, hoặc không quay đề tùy dòng xe.',
    'Đặt lại thường gồm dựng xe thẳng và tắt bật khóa điện; chi tiết phải theo sổ hướng dẫn của xe.',
    'Sau cú đổ phải kiểm tra rò xăng, nhớt, phanh, tay lái trước khi chạy lại.',
    'Không được vô hiệu hóa hay tháo cảm biến để tránh việc tắt máy.'
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['cảm biến nghiêng', 'xe máy', 'khóa điện', 'ngắt đánh lửa', 'an toàn'],
  keywords: ['cảm biến nghiêng xe máy', 'xe đổ tự tắt máy', 'cảm biến ngã xe máy', 'xe không nổ sau khi ngã'],
  sections: [
    P('Cảm biến nghiêng làm gì', [
      'Cảm biến nghiêng, còn gọi là cảm biến ngã hoặc cảm biến lật, là một thiết bị nhỏ gắn trên khung xe, theo dõi góc nghiêng của xe so với phương thẳng đứng. Khi góc nghiêng vượt một ngưỡng và kéo dài đủ lâu, như xảy ra khi xe nằm xuống mặt đường, thiết bị gửi tín hiệu cho bộ điều khiển để cắt đánh lửa hoặc cắt bơm xăng. Vì thế máy tắt gần như ngay sau khi xe đổ.',
      'Lý do tồn tại của nó là an toàn. Xe nằm nghiêng với máy còn nổ có thể làm xăng tràn ra từ nắp bình hoặc ống thoát hơi, gặp ống xả nóng hay tia lửa điện thì nguy cơ cháy tăng cao. Cắt máy ngay giảm bớt rủi ro đó. Bạn có thể coi nó như cầu chì an toàn cho kịch bản xe ngã: một tính năng mà ta mong không bao giờ phải dùng nhưng khi cần thì rất đáng giá.',
      'Cảm biến này thường có mặt trên xe phun xăng điện tử và nhiều dòng xe tay ga đời mới; xe đời cũ dùng bộ chế hòa khí thường không có. Cách làm việc cụ thể, ngưỡng góc nghiêng và thời gian xác nhận khác nhau giữa các hãng, và bài này cố ý không nêu con số vì không có số chung nào áp dụng cho mọi xe. Hãy dùng tài liệu của đúng dòng xe bạn để biết chính xác.'
    ]),
    P('Vì sao xe đổ thì máy tắt', [
      'Chuỗi sự việc khi xe ngã diễn ra rất nhanh. Cảm biến nhận ra xe không còn thẳng, chờ một khoảng ngắn để chắc chắn đó không phải một cú nghiêng khi vào cua gắt hay đỗ xe lên chân chống nghiêng, rồi mới báo cho bộ điều khiển. Bộ điều khiển cắt các tín hiệu cần để duy trì máy chạy, và động cơ dừng. Với người ngồi trên xe, cảm giác là máy chết ngay khi đất áp vào thân xe.',
      'Vì có thời gian xác nhận, xe nghiêng mạnh trong thoáng chốc không làm máy tắt, nhưng xe nằm yên một lúc thì sẽ tắt. Đây cũng là lý do một số người thấy xe tắt máy khi dựng nghiêng trên nền dốc nhiều giây, hoặc khi để xe nghiêng khi bảo dưỡng. Hiện tượng đó thường chỉ là cảm biến làm đúng việc của nó, không phải lỗi, miễn là xe nổ lại bình thường sau khi dựng thẳng.',
      'Cảm biến không phân biệt được ngã thật với những lần xe bị nghiêng vì lý do khác. Nếu cảm biến lắp lệch sau khi sửa chữa hoặc gắn thêm phụ kiện, ngưỡng nghiêng thực tế có thể thay đổi và xe tắt máy ở những lúc không ngờ. Đó là lý do mọi can thiệp quanh vị trí cảm biến, như dời cụm điện hay tháo ốp, cần để thợ lắp lại đúng chiều và đúng vị trí.'
    ]),
    P('Nhận biết xe đang ở trạng thái ngắt an toàn', [
      'Sau cú đổ, xe thường không nổ lại dù bạn đề nhiều lần. Tùy dòng xe, đề vẫn quay nhưng máy không nổ, hoặc không có phản ứng gì với nút đề. Một số xe hiện đèn báo hệ thống phun xăng hoặc đèn cảnh báo trên đồng hồ, một số thì không có dấu hiệu rõ. Triệu chứng này dễ làm người dùng hoảng và nghĩ rằng xe đã hỏng nặng, trong khi nhiều trường hợp chỉ là hệ thống đang ở chế độ ngắt.',
      'Hãy phân biệt với các nguyên nhân khác của việc xe không nổ như hết xăng, ắc quy yếu, chân chống nghiêng chưa gạt lên, tay phanh chưa bóp ở xe yêu cầu bóp phanh khi đề, hoặc khóa từ chưa nhận. Nếu xe vừa đổ và triệu chứng xuất hiện ngay sau đó, khả năng cao nó liên quan đến cảm biến nghiêng. Đây vẫn chỉ là phán đoán ban đầu; nếu thao tác đặt lại không có kết quả thì cần xem xét thêm.',
      'Điều quan trọng nhất trong lúc này không phải là khởi động mà là an toàn. Nếu có mùi xăng, vết xăng loang dưới xe hoặc khói, đừng đề máy hay bật lửa gần đó. Hãy dắt xe ra chỗ thoáng, dựng thẳng, tắt khóa điện và kiểm tra trước. Chỉ khi chắc chắn không có rò rỉ nghiêm trọng mới nên thử đặt lại và nổ máy.'
    ]),
    P('Cách đặt lại và khởi động', [
      'Thao tác cơ bản trên đa số xe là dựng xe thẳng đứng trên mặt phẳng bằng chân chống đúng cách, tắt khóa điện, chờ vài giây rồi bật lại và khởi động như thường lệ. Việc tắt bật khóa điện làm bộ điều khiển xóa trạng thái ngắt và cho phép đánh lửa trở lại khi cảm biến thấy xe đã thẳng. Một số xe có thể yêu cầu thêm thao tác khác như bật tắt công tắc ngắt máy, nên bạn cần đọc sổ hướng dẫn.',
      'Nếu xe nổ lại bình thường, đừng vội chạy ngay. Dành ít phút xem xe có rò xăng, nhớt hay nước làm mát không, nghe tiếng máy có êm không, và kiểm tra các chi tiết thường bị ảnh hưởng trong cú đổ như tay phanh, tay côn, gương, cần số, bàn đạp, tay lái có lệch hay cong không. Chạy thử vài chục mét ở chỗ vắng để cảm nhận phanh và lái trước khi vào đường chính.',
      'Nếu sau khi đặt lại xe vẫn không nổ, đừng đề liên tục nhiều lần vì sẽ làm yếu ắc quy và bugi bị ướt. Hãy kiểm tra các nguyên nhân thông thường như xăng, ắc quy, cầu chì rồi cân nhắc gọi hỗ trợ cứu hộ hoặc đưa xe tới thợ. Kể cho thợ rằng xe vừa bị đổ và bạn đã thử đặt lại bằng cách nào, thông tin này giúp họ khoanh vùng đến cảm biến hoặc các giắc nối bị lỏng sau va chạm.'
    ]),
    P('Khi nào cần kiểm tra thêm', [
      'Có ba nhóm tình huống nên đi kiểm tra kỹ hơn. Nhóm thứ nhất là sau cú đổ thật: ngay cả khi xe nổ lại, những va đập có thể làm lỏng giắc điện, nứt ống dẫn xăng hoặc làm cong chi tiết ở phanh và lái. Nhóm thứ hai là xe tắt máy vô cớ khi đi qua ổ gà, vào cua hoặc lúc đứng chân chống, dù không hề bị đổ. Nhóm thứ ba là xe không bao giờ tắt máy khi nằm nghiêng, điều này cũng cần chú ý vì có thể tính năng an toàn không còn hoạt động.',
      'Xe tắt máy vô cớ có thể do giắc cảm biến bị oxy hóa, lỏng hoặc ngấm nước, hoặc cảm biến bị lắp lệch sau sửa chữa. Việc đo và thay cảm biến thuộc về thợ có dụng cụ chẩn đoán; bạn nên mô tả cụ thể xe tắt trong hoàn cảnh nào, bao nhiêu lần, có đèn báo nào không. Ghi chú đó rút ngắn đáng kể thời gian tìm lỗi so với việc chỉ nói rằng xe hay chết máy.',
      'Dù thấy phiền, tuyệt đối không tháo, bỏ qua hay đấu tắt cảm biến để xe khỏi tắt máy. Làm vậy lấy đi chính lớp bảo vệ dành cho kịch bản nguy hiểm nhất, và nếu xe ngã với máy còn nổ thì hậu quả có thể nghiêm trọng. Đồng thời việc can thiệp vào hệ thống điện của xe phun xăng có thể gây lỗi dây chuyền khó sửa. Nếu cảm biến hỏng, thay bằng phụ tùng đúng loại là con đường duy nhất đáng làm.'
    ])
  ],
  checklist: [
    'Biết xe của bạn có cảm biến nghiêng hay không và vị trí đặt nó theo sổ hướng dẫn.',
    'Sau cú đổ, kiểm tra mùi xăng, vết loang và khói trước khi nghĩ tới việc nổ máy.',
    'Dựng xe thẳng, tắt rồi bật khóa điện theo hướng dẫn của hãng để đặt lại.',
    'Kiểm tra phanh, côn, tay lái, gương và các giắc điện sau khi xe nổ lại.',
    'Ghi lại hoàn cảnh nếu xe tắt máy vô cớ để báo thợ.'
  ],
  steps: [
    { title: 'Giữ an toàn trước', detail: 'Dắt xe ra chỗ thoáng, tắt khóa điện, quan sát rò xăng hoặc khói trước khi chạm vào xe.' },
    { title: 'Dựng thẳng và đặt lại', detail: 'Dựng xe thẳng đứng trên mặt phẳng, tắt khóa điện vài giây rồi bật lại và khởi động theo sổ hướng dẫn.' },
    { title: 'Kiểm tra sau khi nổ', detail: 'Để máy chạy cầm chừng, xem có rò rỉ không, thử tay phanh và tay lái trước khi chạy tiếp.' },
    { title: 'Báo thợ khi bất thường', detail: 'Nếu xe vẫn không nổ hoặc tắt máy vô cớ, mô tả hoàn cảnh cụ thể và nhờ thợ kiểm tra cảm biến và giắc nối.' }
  ],
  warnings: [
    'Không đề máy khi có mùi xăng hoặc xăng loang quanh xe sau cú đổ.',
    'Không tháo, đấu tắt hay vô hiệu hóa cảm biến nghiêng để tránh việc xe tự tắt máy.',
    'Không đề liên tục nhiều lần khi xe không nổ; có thể làm yếu ắc quy và ướt bugi.'
  ],
  notes: [
    'Thao tác đặt lại và tín hiệu đèn báo khác nhau giữa các hãng; hãy ưu tiên sổ hướng dẫn của xe bạn.',
    'Bài không nêu góc nghiêng hay thời gian ngắt cụ thể vì mỗi dòng xe một khác.'
  ],
  references: [
    'Sổ hướng dẫn sử dụng xe của nhà sản xuất, phần hệ thống an toàn và khởi động',
    'Tài liệu kỹ thuật chính hãng của đúng dòng xe về cảm biến nghiêng và hệ thống phun xăng'
  ],
  related: ['huong-dan-su-dung-cac-chuc-nang-tren-xe-ga', 'xe-khong-no-xu-ly', 'xe-may-khong-no-may-nguyen-nhan-va-cach-xu-ly']
};
