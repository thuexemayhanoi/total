// AI WIKI TOTAL — S00520; informational-only; không nêu tên cửa hàng, địa chỉ hay giá dịch vụ.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'sua-xe-duong-bo',
  title: 'Tổng hợp kiến thức: sửa xe đường bộ',
  seoTitle: 'Sửa xe đường bộ: xử lý sự cố thường gặp khi đi xa',
  metaDescription: 'Tổng hợp kiến thức xử lý sự cố xe máy trên đường bộ: thủng lốp, chết máy, đứt dây ga, hỏng phanh, quá nhiệt; dụng cụ nên mang theo và khi nào cần gọi cứu hộ.',
  summary: 'Bài viết tổng hợp cách xử lý các sự cố xe máy thường gặp khi đi đường bộ: thủng lốp, chết máy, mất điện, quá nhiệt, hỏng phanh hoặc đứt dây. Nội dung nêu dụng cụ cơ bản nên mang theo, thao tác an toàn có thể tự làm và dấu hiệu cho thấy cần dừng hẳn và gọi cứu hộ.',
  quickAnswer: 'Khi xe gặp sự cố trên đường, ưu tiên đưa xe vào nơi an toàn, xác định triệu chứng và chỉ tự xử lý những việc đơn giản như vá lốp tạm hoặc kiểm tra xăng, bugi. Lỗi liên quan phanh, lái hoặc động cơ nặng cần dừng hẳn và gọi cứu hộ hoặc thợ chuyên nghiệp.',
  keyPoints: [
    'An toàn bản thân và người xung quanh quan trọng hơn việc sửa nhanh.',
    'Một số sự cố đơn giản có thể tự xử lý tạm nếu có dụng cụ và kinh nghiệm.',
    'Lỗi phanh, hệ thống lái hoặc động cơ nghiêm trọng cần nhờ thợ chuyên nghiệp.',
    'Bộ dụng cụ gọn gàng giúp xử lý nhanh những sự cố thường gặp.',
    'Bảo dưỡng định kỳ làm giảm đáng kể nguy cơ hỏng giữa đường.'
  ],
  category: 'map',
  hub: 'diem-sua-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['sự cố xe máy', 'sửa xe trên đường', 'cứu hộ', 'bảo dưỡng xe'],
  keywords: ['sửa xe đường bộ', 'xe máy hỏng giữa đường', 'vá lốp tạm', 'bộ dụng cụ xe máy'],
  sections: [
    P('Nguyên tắc chung khi xe gặp sự cố trên đường', [
      'Dù sự cố là gì, bước đầu tiên luôn là bảo đảm an toàn. Dừng xe ở vị trí xa dòng giao thông, tránh khúc cua và dốc, bật đèn cảnh báo, và nếu có thể thì đứng phía sau rào chắn hoặc lề đường. Với người đi cùng, hãy yêu cầu mọi người rời khỏi xe và tránh đứng ngay lòng đường. Việc giữ an toàn quan trọng hơn thời gian bạn tiết kiệm được.',
      'Tiếp theo, quan sát và xác định triệu chứng: xe không nổ, nổ rồi tắt, có tiếng lạ, có khói, có mùi, mất lực kéo, rung giật hay phanh yếu. Mỗi triệu chứng gợi ý một nhóm nguyên nhân khác nhau. Không vội thử khởi động liên tục vì có thể làm nặng thêm tình trạng, ví dụ làm hết điện ắc quy hoặc ngập xăng.',
      'Cuối cùng, quyết định mức độ xử lý. Những việc nhỏ như kiểm tra xăng, thử công tắc, lau bugi hoặc vá lốp tạm có thể tự làm nếu bạn có kinh nghiệm. Những lỗi liên quan đến phanh, lái, hệ thống điện lớn hoặc động cơ nên nhờ người chuyên môn. Không cố làm vượt khả năng vì có thể gây nguy hiểm cho bạn và hỏng thêm xe.'
    ]),
    P('Thủng lốp và xì hơi', [
      'Thủng lốp là sự cố phổ biến nhất. Dấu hiệu là xe lắc, nặng tay lái và tiếng ì ì ở bánh. Khi nghi thủng lốp, giảm tốc từ từ và tấp vào lề, tránh phanh gấp hoặc đánh lái mạnh. Chạy tiếp trên lốp xẹp có thể làm hỏng vành và mất kiểm soát.',
      'Nếu có dụng cụ và kinh nghiệm, bạn có thể vá tạm bằng dung dịch bơm vá hoặc miếng vá nguội rồi bơm hơi bằng bơm mini. Đây chỉ là giải pháp tạm để đến tiệm gần nhất, không nên chạy quãng đường dài hoặc tốc độ cao. Nếu lốp rách ở hông hoặc vết thủng lớn, việc vá tạm không an toàn; hãy tìm nơi thay lốp.',
      'Cách phòng tránh gồm kiểm tra lốp trước chuyến đi, giữ áp suất đúng khuyến nghị, tránh đi qua vật sắc nhọn và thay lốp khi gai mòn. Lưu ý khi dắt xe có lốp xẹp: đi sát lề, tránh làm hỏng thêm vành và dùng đèn hoặc phản quang nếu trời tối để người khác thấy bạn.'
    ]),
    P('Chết máy, mất điện và quá nhiệt', [
      'Xe đột ngột chết máy có thể do hết xăng, nước vào bình xăng, bugi bẩn, ắc quy yếu hoặc hệ thống điện trục trặc. Hãy bắt đầu với những kiểm tra đơn giản: còn xăng không, công tắc và đèn báo có sáng không, cầu chì có đứt không. Nếu xe có hiện tượng ngập xăng sau nhiều lần khởi động, chờ vài phút trước khi thử lại.',
      'Khi đèn và còi yếu hoặc tắt, thường liên quan đến ắc quy hoặc dây điện. Với xe tay ga, đạp khởi động dự phòng có thể hữu ích nếu xe có trang bị. Tránh nối tắt dây điện bằng cách không đúng vì dễ cháy và hỏng hệ thống. Nếu không rõ nguyên nhân, nhờ thợ kiểm tra thay vì thử nhiều cách.',
      'Quá nhiệt thường biểu hiện bằng mùi nóng, hơi nước, đèn cảnh báo hoặc động cơ mất lực. Hãy dừng xe, tắt máy và để nguội trước khi kiểm tra; không mở nắp két nước khi động cơ còn nóng vì có thể bị bỏng. Kiểm tra mức nước làm mát hoặc dầu nhớt khi đã nguội, và nếu thấy rò rỉ, không chạy tiếp.'
    ]),
    P('Phanh, dây ga, xích và các lỗi liên quan đến an toàn', [
      'Phanh yếu hoặc mất là sự cố nghiêm trọng. Nếu cảm thấy phanh nhũn, kêu ken két hoặc đi xa mới dừng, hãy giảm tốc bằng cách nhả ga, dùng số thấp nếu có và tìm nơi an toàn để dừng. Không tiếp tục chạy với phanh có vấn đề, và nhờ thợ kiểm tra má phanh, dầu phanh và dây phanh.',
      'Đứt hoặc kẹt dây ga là tình huống có thể nguy hiểm vì xe có thể tăng tốc ngoài ý muốn hoặc mất ga. Nếu ga bị kẹt, hãy tắt công tắc máy hoặc bóp côn rồi dừng xe từ từ. Với xe số, kiểm tra dây côn và dây ga định kỳ. Xích lỏng hoặc đứt có thể làm xe mất lực kéo đột ngột, vì vậy nên kiểm tra độ căng và bôi trơn.',
      'Những lỗi này thường báo trước bằng dấu hiệu nhẹ: tay phanh sâu hơn bình thường, ga giật, xích kêu. Đừng bỏ qua. Bảo dưỡng theo lịch của nhà sản xuất là cách hiệu quả nhất để tránh bị bất ngờ giữa đường. Với lỗi không chắc chắn, quyết định an toàn nhất là dừng và hỏi chuyên gia.'
    ]),
    P('Bộ dụng cụ cơ bản và khi nào gọi cứu hộ', [
      'Một bộ dụng cụ gọn có thể giúp xử lý nhiều sự cố nhỏ: cờ lê và tua vít phù hợp với xe, bộ vá lốp hoặc dung dịch vá tạm, bơm mini, đèn pin, băng keo cách điện, vài cầu chì dự phòng, găng tay và khăn. Hãy chọn dụng cụ vừa với kinh nghiệm của bạn và biết cách sử dụng trước khi cần dùng đến.',
      'Khi sự cố vượt khả năng hoặc có yếu tố nguy hiểm như phanh hỏng, rò rỉ nhiên liệu, khói lửa, hay xe nằm ở vị trí nguy hiểm, hãy gọi cứu hộ hoặc người thân ngay. Cung cấp vị trí chính xác bằng tên đường, số km hoặc chia sẻ vị trí trên bản đồ. Giữ liên lạc và ở nơi an toàn trong lúc chờ.',
      'Cuối cùng, thói quen kiểm tra xe trước mỗi chuyến đi như lốp, phanh, đèn, nhớt và xích giúp giảm khả năng gặp sự cố. Đồng thời, nắm vài số liên lạc quan trọng và lưu bản đồ ngoại tuyến sẽ giúp bạn chủ động hơn trong những hoàn cảnh bất ngờ trên đường bộ.'
    ])
  ],
  checklist: [
    'Kiểm tra lốp, phanh, đèn, nhớt và xích trước mỗi chuyến đi.',
    'Mang bộ dụng cụ cơ bản, bơm mini, đèn pin và dung dịch vá tạm.',
    'Biết cách xử lý thủng lốp và chết máy ở mức đơn giản.',
    'Lưu số liên lạc cứu hộ và người thân, tải bản đồ ngoại tuyến.',
    'Gọi hỗ trợ khi gặp lỗi phanh, lái, rò rỉ nhiên liệu hoặc khói lửa.'
  ],
  steps: [
    { title: 'Giữ an toàn', detail: 'Đưa xe vào lề, bật đèn cảnh báo và tránh đứng giữa lòng đường.' },
    { title: 'Nhận biết triệu chứng', detail: 'Quan sát tiếng, mùi, khói, độ nhạy phanh và phản ứng của xe.' },
    { title: 'Xử lý ở mức an toàn', detail: 'Chỉ tự làm các việc đơn giản như vá tạm hoặc kiểm tra xăng, bugi.' },
    { title: 'Gọi hỗ trợ khi cần', detail: 'Báo vị trí chính xác khi lỗi vượt khả năng hoặc có nguy hiểm.' }
  ],
  warnings: [
    'Không mở nắp két nước hoặc tháo bộ phận khi động cơ còn nóng.',
    'Không tiếp tục chạy khi phanh yếu, rò rỉ nhiên liệu hoặc có khói lửa.',
    'Không nối tắt dây điện nếu không hiểu rõ hệ thống.'
  ],
  notes: [
    'Bài viết mang tính hướng dẫn chung, không thay thế sổ tay của nhà sản xuất hoặc tư vấn của thợ chuyên nghiệp.',
    'Không nêu tên cửa hàng, địa chỉ hay giá dịch vụ cụ thể.'
  ],
  references: [
    'Hướng dẫn sử dụng xe của nhà sản xuất — mục bảo dưỡng và xử lý sự cố.',
    'Cục Cảnh sát giao thông — tài liệu an toàn khi điều khiển xe máy.',
    'Ủy ban An toàn giao thông quốc gia — tài liệu tuyên truyền an toàn đường bộ.'
  ],
  related: ['tiem-sua-xe-gan-day', 'tho-sua-xe-tin-cay', 'di-xe-o-hai-phong']
};
