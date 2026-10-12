// AI WIKI TOTAL — S01090 (topic V2 T001166); quy trình kiểm tra khi nhận xe mới, không nêu giá, điều khoản bảo hành hay quy định cụ thể.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'kiem-tra-xe-moi-khi-nhan-tu-dai-ly',
  title: 'Kiểm tra xe mới nhận từ đại lý trước khi ký biên bản giao xe: các điểm cần xem tận nơi',
  seoTitle: 'Kiểm tra xe máy mới khi nhận từ đại lý trước khi ký biên bản giao xe',
  metaDescription: 'Quy trình kiểm tra xe máy mới tại đại lý trước khi ký biên bản giao xe: ngoại quan, số khung, điện đèn, phanh lốp, rò rỉ, phụ kiện giấy tờ và ghi chú vào biên bản.',
  summary: 'Bài lập quy trình kiểm tra xe máy mới ngay tại đại lý theo thứ tự ngoại quan và số khung, điện đèn và đồng hồ, phanh lốp và rò rỉ, phụ kiện đi kèm và giấy tờ, kèm cách ghi chú những điểm chưa đạt vào biên bản giao xe trước khi ký, để vấn đề được xử lý ngay từ đầu.',
  quickAnswer: 'Hãy kiểm tra xe mới tại đại lý theo thứ tự: ngoại quan và số khung, điện đèn đồng hồ, phanh lốp và rò rỉ, phụ kiện và giấy tờ. Điểm nào chưa đạt cần ghi vào biên bản giao xe và yêu cầu xử lý trước khi ký nhận.',
  keyPoints: [
    'Xe mới vẫn có thể có lỗi lắp ráp, vận chuyển hoặc trầy xước; kiểm tra tại chỗ là lúc dễ xử lý nhất.',
    'Số khung và số máy trên xe phải khớp với giấy tờ và biên bản giao xe.',
    'Đèn, còi, đồng hồ, phanh và lốp là những hạng mục an toàn cần thử trước khi nhận.',
    'Phụ kiện, sách hướng dẫn, sổ bảo hành và chìa phải đủ như thỏa thuận.',
    'Ghi mọi điểm chưa đạt vào biên bản trước khi ký; không ký khi còn băn khoăn.'
  ],
  category: 'guide',
  hub: 'mua-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['xe máy mới', 'đại lý', 'biên bản giao xe', 'số khung', 'kiểm tra xe'],
  keywords: ['kiểm tra xe mới khi nhận từ đại lý', 'biên bản giao xe mới', 'xe mới có lỗi khi nhận', 'checklist nhận xe máy mới'],
  sections: [
    P('Vì sao nên kiểm tra kỹ tại đại lý', [
      'Nhiều người nghĩ xe mới thì không cần kiểm tra, và chỉ nhìn qua rồi ký nhận cho nhanh. Thực tế xe mới vẫn có thể có trầy xước do vận chuyển và lưu kho, ốc lỏng, dây điện chưa gài chắc, phụ kiện thiếu hoặc nhầm màu, nhầm đời. Những điều này hầu như luôn được xử lý nhanh chóng nếu phát hiện ngay tại đại lý; khi đã ký và mang xe về, việc chứng minh lỗi có từ trước trở nên khó khăn hơn nhiều.',
      'Thời điểm nhận xe cũng là lúc bạn có nhiều lợi thế nhất để đề nghị khắc phục. Đại lý có sẵn thợ, phụ tùng và nhân viên chịu trách nhiệm, còn bạn chưa hoàn tất giao nhận. Việc kiểm tra kỹ không phải là nghi ngờ, mà là quy trình hợp lý cho cả hai bên. Một đại lý làm việc nghiêm túc sẽ chào đón việc đó thay vì giục bạn ký nhanh.',
      'Hãy sắp xếp thời gian và không đến nhận xe khi vội. Chọn buổi có ánh sáng tốt, mang theo điện thoại để chụp ảnh và ghi chú, và nếu được, đi cùng người quen biết xe. Mang danh sách kiểm tra in hoặc ghi sẵn để không quên hạng mục nào. Một buổi nhận xe kỹ lưỡng mất chừng một tiếng nhưng giúp bạn yên tâm trong suốt thời gian sử dụng sau đó.'
    ]),
    P('Ngoại quan và số khung', [
      'Bắt đầu bằng việc đi quanh xe dưới ánh sáng đủ rõ. Xem toàn bộ nhựa ốp, đèn, gương, yên và khung có trầy xước, móp, nứt hay vết ố không; các khe ghép giữa tấm ốp có đều và khít không; bu lông và ốc có sạch, không bị trầy hay gỉ. Những vết xước nhỏ cần được chụp ảnh và ghi lại ngay, vì sau khi nhận xe rất khó chứng minh xước xuất hiện lúc nào.',
      'Tiếp theo là số khung và số máy. Tìm vị trí của chúng trên xe theo sổ hướng dẫn, đối chiếu với giấy tờ đi kèm và biên bản giao xe. Số trên xe phải rõ, không bị mờ hoặc có dấu hiệu bất thường, và khớp với giấy tờ từng ký tự. Chụp ảnh các số này để lưu. Nếu có chỗ không khớp, dừng lại và yêu cầu đại lý giải thích bằng văn bản trước khi tiếp tục.',
      'Đừng quên màu sắc, đời xe và phiên bản đúng với đơn hàng, cũng như số ki-lô-mét trên đồng hồ ở mức rất thấp như xe mới. Nếu đồng hồ hiển thị một quãng đường lớn hơn dự kiến, hãy hỏi lý do, vì xe có thể đã được chạy thử hoặc vận chuyển. Một vài ki-lô-mét là bình thường; nhưng nếu khác thường, ghi lại và yêu cầu đại lý xác nhận bằng văn bản rằng đó là xe chưa qua sử dụng.'
    ]),
    P('Điện, đèn và đồng hồ', [
      'Bật khóa điện và quan sát đồng hồ khi khởi động: các đèn báo phải sáng rồi tắt theo trình tự của hãng, màn hình hoặc kim hiển thị bình thường, không có đèn báo lỗi nào còn sáng sau khi máy nổ. Thử đèn pha cốt thấp và cao, đèn hậu, đèn phanh bằng cả tay phanh và chân phanh, xi nhan hai bên, đèn biển số, đèn vị trí. Có thể nhờ người đứng phía sau xe quan sát giúp.',
      'Thử còi, công tắc ở tay lái, nút đề, nút khóa ngắt nếu có, và các chức năng tiện ích như cổng sạc, đèn cốp, đèn chiếu sáng. Với xe có chìa khóa thông minh hoặc chế độ tắt bật đặc biệt, thử đầy đủ các thao tác theo hướng dẫn. Những tính năng này thường chỉ được kiểm khi gặp sự cố, trong khi kiểm ngay lúc nhận xe giúp phát hiện lỗi còn trong thời gian đại lý dễ xử lý nhất.',
      'Nổ máy và nghe tiếng: máy nên chạy đều, không có tiếng lạ hay rung bất thường. Xe mới đôi khi chưa chạy rà nên tiếng máy chưa hoàn toàn êm, nhưng không nên có tiếng gõ, kêu lạ. Nếu có điều gì khiến bạn thắc mắc, quay video ngắn để ghi lại và hỏi thợ của đại lý ngay tại chỗ. Đừng chấp nhận lời giải thích chung chung như xe mới đều như vậy mà không có cơ sở.'
    ]),
    P('Phanh, lốp và rò rỉ', [
      'Bóp tay phanh trước và đạp phanh sau khi xe đứng yên: hành trình đều, không quá lỏng hay quá cứng, và tay phanh trở về nhẹ nhàng. Đẩy xe tiến lùi vài mét khi buông phanh để xem bánh có quay tự do, không bị bó. Nếu được phép, chạy thử một đoạn ngắn trong khuôn viên hoặc đường nội bộ để cảm nhận phanh, tay lái và việc xe có chạy thẳng không.',
      'Kiểm tra lốp: bề mặt không có vết cắt hay phồng, gai còn nguyên, áp suất hơi hợp lý và các van có nắp. Xem mã ngày sản xuất trên thành lốp để biết lốp mới đến mức nào; nếu có nghi ngờ thì hỏi đại lý. Xem bánh xe có lắc không, các nan hoa hoặc mâm có vết va chạm. Nhìn xuống gầm và quanh máy để tìm dấu vết rò nhớt, xăng hoặc nước làm mát; xe mới tuyệt đối không nên có vết dầu loang.',
      'Kiểm tra mức nhớt và nước làm mát nếu xe có, xích hoặc dây curoa nhìn thấy được, và độ rơ tay lái bằng cách xoay nhẹ khi bánh trước nhấc khỏi mặt đất nếu có điều kiện. Những kiểm tra này đơn giản, nhưng nếu bạn không chắc, hãy nhờ thợ của đại lý làm cùng và quan sát cách họ thực hiện. Mọi điểm bạn nhận thấy đều nên được ghi lại, kể cả những điểm bạn cho là nhỏ.'
    ]),
    P('Phụ kiện, giấy tờ và ghi chú trong biên bản', [
      'Đối chiếu danh sách những thứ đi kèm xe với thực tế: chìa chính và chìa phụ, sách hướng dẫn, sổ bảo hành, bộ đồ nghề, phụ kiện đã thỏa thuận như bảo hiểm, mũ, gương hoặc các món tặng kèm. Xem sổ bảo hành đã được điền thông tin đúng chưa, ngày giao xe và số khung có khớp không, và các điều khoản về lịch bảo dưỡng đầu tiên được ghi rõ ở đâu. Hãy giữ lại bản sao các giấy tờ quan trọng.',
      'Đọc kỹ biên bản giao xe trước khi ký. Biên bản thường có dòng xác nhận đã nhận xe trong tình trạng tốt; nếu bạn thấy còn điểm chưa đạt, đừng ký dòng đó mà hãy ghi cụ thể từng điểm vào phần ghi chú và yêu cầu đại lý xác nhận bằng chữ ký. Ghi rõ điều gì được hẹn xử lý, bởi ai và khi nào. Một lời hứa miệng khó giữ hơn rất nhiều so với một dòng ghi trên giấy có chữ ký hai bên.',
      'Nếu có điểm nghiêm trọng như số khung không khớp, lỗi phanh, rò rỉ hoặc hư hỏng lớn, bạn có quyền từ chối nhận xe và yêu cầu đổi hoặc khắc phục theo thỏa thuận. Với điểm nhỏ có thể xử lý nhanh, hãy yêu cầu làm ngay trước khi rời đại lý hoặc hẹn thời gian cụ thể. Sau khi nhận xe, lưu ảnh, video và giấy tờ gọn gàng, và đặt lịch bảo dưỡng đầu tiên theo sổ hướng dẫn để bảo vệ cả xe lẫn quyền lợi của bạn.'
    ])
  ],
  checklist: [
    'Đi quanh xe dưới ánh sáng tốt, chụp ảnh mọi vết xước hay móp.',
    'Đối chiếu số khung và số máy với giấy tờ và biên bản giao xe.',
    'Thử đèn, còi, xi nhan, đồng hồ, nút đề và các tính năng của xe.',
    'Kiểm tra phanh, lốp, rò rỉ dưới gầm và quanh máy.',
    'Đủ chìa, sách hướng dẫn, sổ bảo hành, bộ đồ nghề và phụ kiện đã thỏa thuận.'
  ],
  steps: [
    { title: 'Chuẩn bị trước buổi nhận xe', detail: 'Chọn buổi có ánh sáng tốt, mang điện thoại và danh sách kiểm tra, đi cùng người quen biết xe nếu có thể.' },
    { title: 'Kiểm tra theo thứ tự', detail: 'Ngoại quan và số khung, điện đèn đồng hồ, phanh lốp rò rỉ, phụ kiện giấy tờ; chụp ảnh khi có điểm cần ghi.' },
    { title: 'Ghi điểm chưa đạt vào biên bản', detail: 'Không ký dòng xác nhận tình trạng tốt khi còn băn khoăn; ghi cụ thể và yêu cầu đại lý xác nhận.' },
    { title: 'Giữ chứng từ và đặt lịch bảo dưỡng', detail: 'Lưu bản sao giấy tờ, ảnh, video và đặt lịch bảo dưỡng đầu tiên theo sổ hướng dẫn.' }
  ],
  warnings: [
    'Không ký biên bản xác nhận tình trạng tốt khi chưa kiểm tra xong hoặc còn điểm chưa đạt.',
    'Số khung hoặc số máy không khớp giấy tờ là lý do dừng lại ngay và yêu cầu giải thích bằng văn bản.',
    'Không nhận xe có lỗi phanh, rò rỉ hoặc hư hỏng liên quan an toàn khi chưa được khắc phục.'
  ],
  notes: [
    'Bài nêu quy trình kiểm tra chung; điều khoản bảo hành và cách xử lý lỗi do từng đại lý và hãng quy định.',
    'Bài không đề cập giá bán, thuế phí hay thủ tục đăng ký vì những nội dung này cần tra nguồn chính thức.'
  ],
  references: [
    'Sổ hướng dẫn sử dụng và sổ bảo hành của nhà sản xuất xe',
    'Biên bản giao xe và hợp đồng mua bán do đại lý cung cấp'
  ],
  related: ['kiem-tra-xe-truoc-khi-mua', 'checklist-nhan-xe', 'mua-xe-may-moi']
};
