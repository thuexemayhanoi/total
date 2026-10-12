// AI WIKI TOTAL — S00519; informational-only; không nêu tên cửa hàng, địa chỉ hay giá dịch vụ.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'tiem-sua-xe-gan-day',
  title: 'Hướng dẫn chi tiết về tiệm sửa xe gần đây',
  seoTitle: 'Tiệm sửa xe gần đây: cách tìm nhanh và chọn nơi an toàn',
  metaDescription: 'Hướng dẫn tìm tiệm sửa xe gần đây khi xe gặp sự cố: dùng bản đồ, hỏi người địa phương, đánh giá tiệm, trao đổi lỗi, hỏi báo giá trước và giữ an toàn trong lúc chờ sửa.',
  summary: 'Bài viết hướng dẫn người đi xe máy tìm tiệm sửa xe gần nhất khi gặp sự cố: dùng bản đồ số, hỏi người dân, nhận biết dấu hiệu của tiệm đáng tin, trao đổi triệu chứng rõ ràng, xin báo giá trước khi sửa, giữ lại hóa đơn và đảm bảo an toàn trong lúc chờ.',
  quickAnswer: 'Khi xe hỏng, hãy đưa xe vào nơi an toàn, tìm tiệm sửa xe gần bằng bản đồ hoặc hỏi người địa phương, mô tả rõ triệu chứng, hỏi báo giá và thời gian dự kiến trước khi đồng ý sửa, rồi giữ lại hóa đơn. Tránh sửa vội ở nơi không rõ ràng.',
  keyPoints: [
    'Dùng bản đồ số, biển hiệu và người địa phương để tìm tiệm sửa xe gần.',
    'Mô tả triệu chứng xe rõ ràng để thợ chẩn đoán đúng.',
    'Hỏi báo giá và hạng mục sửa trước khi đồng ý, yêu cầu báo lại nếu phát sinh.',
    'Giữ lại hóa đơn và hỏi về bảo hành phần đã sửa nếu có.',
    'Giữ an toàn cho bản thân và xe trong lúc chờ sửa.'
  ],
  category: 'map',
  hub: 'diem-sua-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['tiệm sửa xe', 'xe hỏng giữa đường', 'bản đồ số', 'sửa chữa xe máy'],
  keywords: ['tiệm sửa xe gần đây', 'xe hỏng giữa đường', 'tìm tiệm sửa xe', 'sửa xe máy'],
  sections: [
    P('Việc đầu tiên khi xe gặp sự cố', [
      'Khi xe đột ngột chết máy, nổ lốp hoặc có tiếng kêu lạ, phản ứng đầu tiên nên là giữ bình tĩnh và đưa xe vào chỗ an toàn. Giảm tốc từ từ, bật xi nhan và tấp vào lề hoặc vỉa hè nơi không cản trở giao thông. Tránh dừng ở khúc cua, đầu dốc hoặc trên cầu vì xe phía sau có thể không nhìn thấy kịp.',
      'Sau đó, kiểm tra nhanh tình hình mà không làm điều gì nguy hiểm. Xem xe có rò rỉ chất lỏng, khói hay mùi khét không. Nếu có, tránh khởi động lại và giữ khoảng cách. Nếu chỉ là xẹp lốp hoặc hết xăng, bạn có thể xử lý đơn giản hơn. Mục đích là xác định mức độ để biết cần thợ chuyên nghiệp hay chỉ cần hỗ trợ nhỏ.',
      'Bật đèn cảnh báo nếu xe có và đặt vật báo hiệu phía sau khi cần. Nếu trời tối hoặc mưa, mặc áo có phản quang và đứng ở nơi an toàn phía sau rào chắn hoặc lề đường. Việc bảo đảm an toàn quan trọng hơn việc sửa nhanh, vì người dừng ở lòng đường có nguy cơ bị va chạm cao.'
    ]),
    P('Cách tìm tiệm sửa xe gần nhất', [
      'Công cụ đầu tiên là bản đồ số. Nhập từ khóa như sửa xe máy hoặc tiệm sửa xe và xem các điểm quanh bạn, kèm khoảng cách và giờ mở cửa nếu có. Hãy chọn điểm không chỉ gần nhất mà còn đang mở cửa và nằm trên đường dễ đi, vì đôi khi bạn phải dắt xe đi bộ một đoạn.',
      'Khi không có sóng hoặc bản đồ thiếu dữ liệu, hãy quan sát biển hiệu bên đường: tiệm sửa xe thường có biển lớn, nhiều xe đỗ trước cửa và dụng cụ bày ra. Hỏi người dân, người bán hàng hoặc người chạy xe là cách hiệu quả, vì họ biết thợ nào làm tốt và mở cửa giờ nào. Đối chiếu ít nhất hai nguồn nếu có thể.',
      'Nếu điểm sửa xe ở xa và xe không thể chạy, cân nhắc gọi dịch vụ cứu hộ hoặc nhờ người quen đưa xe. Tránh kéo xe bằng cách buộc dây vào xe khác nếu bạn chưa có kinh nghiệm vì rất nguy hiểm. Dắt xe bộ cũng cần quan sát kỹ giao thông xung quanh, đi sát lề và dùng đèn hoặc phản quang khi tối.'
    ]),
    P('Trao đổi triệu chứng và báo giá trước khi sửa', [
      'Khi gặp thợ, hãy mô tả rõ ràng triệu chứng: xe bị gì, xảy ra khi nào, có tiếng kêu hay mùi gì, trước đó có sự kiện nào như đi qua nước hoặc va chạm không. Thông tin càng cụ thể thì thợ chẩn đoán càng nhanh và giảm khả năng sửa nhầm. Đừng ngại đặt câu hỏi về nguyên nhân và cách khắc phục.',
      'Trước khi đồng ý sửa, hãy hỏi hạng mục cần sửa, ước tính chi phí và thời gian hoàn thành. Nếu thợ phát hiện thêm lỗi khác, yêu cầu báo lại và chỉ đồng ý khi bạn hiểu rõ. Không nên để thợ tự ý thay phụ tùng khi chưa thống nhất. Nếu có thể, yêu cầu cho xem phụ tùng cũ để biết bộ phận nào đã được thay.',
      'Với những sự cố nhỏ như vá lốp hoặc thay bóng đèn, quy trình thường nhanh. Với lỗi lớn liên quan đến động cơ, phanh hoặc hệ thống điện, hãy cân nhắc hỏi thêm một nơi khác nếu điều kiện cho phép. Đừng để sự vội vàng khiến bạn chấp nhận phương án không rõ ràng, nhưng cũng đừng trì hoãn sửa phanh hay lỗi an toàn.'
    ]),
    P('Nhận biết tiệm đáng tin và những dấu hiệu cần cẩn trọng', [
      'Một tiệm đáng tin thường có khu vực làm việc gọn gàng, dụng cụ phù hợp, thợ chịu giải thích và đưa ra giá rõ ràng. Họ sẵn sàng cho bạn xem bộ phận hỏng và không thúc ép thay mới toàn bộ. Đánh giá của khách hàng trên bản đồ, đặc biệt các nhận xét gần đây, có thể là tham khảo hữu ích nhưng cần đọc nhiều ý kiến.',
      'Cần cẩn trọng khi thợ đưa ra những lý do mơ hồ để đòi thay nhiều bộ phận, từ chối cho xem bộ phận cũ hoặc không nói rõ chi phí. Tương tự, nếu giá được đưa ra quá khác thường so với mặt bằng chung, bạn nên hỏi thêm. Không có gì sai khi nói để tôi cân nhắc và đi hỏi chỗ khác nếu bạn cảm thấy không chắc.',
      'Về phụ tùng, hãy hỏi nguồn gốc và loại phụ tùng đang dùng, chính hãng hay thay thế, để biết tuổi thọ và bảo hành. Với xe thuê hoặc xe mượn, thông báo cho chủ xe trước khi sửa vì có thể có quy định riêng về nơi và cách sửa. Giữ lại ảnh chụp tình trạng xe trước khi giao cho thợ để tránh tranh chấp.'
    ]),
    P('Sau khi sửa: hóa đơn, bảo hành và kiểm tra lại', [
      'Sau khi sửa xong, hãy kiểm tra xe trước khi trả tiền: khởi động thử, kiểm tra phanh, đèn, còi và phần vừa được sửa. Đi một đoạn ngắn nếu có thể để chắc chắn mọi thứ hoạt động bình thường. Nếu thấy chưa ổn, nói ngay với thợ để xử lý, thay vì rời đi rồi gặp lại sự cố giữa đường.',
      'Yêu cầu hóa đơn hoặc ghi chú hạng mục đã sửa, chi phí và thời gian. Hỏi về bảo hành cho phần đã làm và ghi lại thông tin liên lạc của tiệm. Giữ chứng từ lại để đối chiếu và để trình bày khi cần liên hệ lại hoặc khi xe thuê cần giải trình với chủ xe.',
      'Cuối cùng, rút kinh nghiệm cho những lần sau: nguyên nhân hỏng, cách phát hiện sớm và việc bảo dưỡng định kỳ. Nhiều sự cố giữa đường có thể tránh được nếu kiểm tra lốp, phanh, nhớt và xích đều đặn. Một chút chuẩn bị giúp bạn đỡ phải tìm tiệm sửa xe vội vàng trong những hoàn cảnh bất lợi.'
    ])
  ],
  checklist: [
    'Đưa xe vào nơi an toàn, bật đèn cảnh báo và tránh khúc cua, dốc, cầu.',
    'Tìm tiệm bằng bản đồ, biển hiệu và hỏi người địa phương, đối chiếu ít nhất hai nguồn.',
    'Mô tả rõ triệu chứng và hỏi báo giá, thời gian dự kiến trước khi sửa.',
    'Chụp ảnh tình trạng xe trước khi giao cho thợ.',
    'Giữ hóa đơn và hỏi về bảo hành phần đã sửa.'
  ],
  steps: [
    { title: 'Bảo đảm an toàn', detail: 'Đưa xe vào lề, bật đèn cảnh báo và đứng nơi an toàn.' },
    { title: 'Tìm tiệm phù hợp', detail: 'Dùng bản đồ, biển hiệu và hỏi người địa phương để chọn nơi đang mở cửa.' },
    { title: 'Thống nhất hạng mục', detail: 'Mô tả triệu chứng, xin báo giá và đồng ý từng hạng mục trước khi sửa.' },
    { title: 'Kiểm tra sau khi sửa', detail: 'Thử xe, nhận hóa đơn và hỏi về bảo hành.' }
  ],
  warnings: [
    'Không kéo xe bằng cách buộc dây vào xe khác nếu thiếu kinh nghiệm.',
    'Không để thợ tự ý thay phụ tùng khi chưa thống nhất.',
    'Không tiếp tục chạy xe khi phanh hoặc hệ thống an toàn có dấu hiệu bất thường.'
  ],
  notes: [
    'Bài viết không nêu tên cửa hàng, địa chỉ hay giá dịch vụ cụ thể.',
    'Mức độ phức tạp của sự cố khác nhau; khi nghi ngờ lỗi an toàn, hãy dừng xe và nhờ thợ chuyên nghiệp.'
  ],
  references: [
    'Hướng dẫn sử dụng xe của nhà sản xuất — mục bảo dưỡng và xử lý sự cố.',
    'Cục Cảnh sát giao thông — tài liệu an toàn khi điều khiển xe máy.',
    'Quy định bảo vệ quyền lợi người tiêu dùng của cơ quan quản lý.'
  ],
  related: ['sua-xe-duong-bo', 'tho-sua-xe-tin-cay', 'di-xe-o-can-tho']
};
