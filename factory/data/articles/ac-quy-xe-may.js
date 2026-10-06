// AI WIKI TOTAL — wiki/dien-xe: hướng dẫn chi tiết về ắc quy xe máy (slot S00287)
'use strict';

module.exports = {
  slug: 'ac-quy-xe-may',
  title: 'Hướng dẫn chi tiết về ắc quy xe máy',
  seoTitle: 'Ắc quy xe máy: chủng loại, tuổi thọ, chọn mua và bảo quản đúng cách',
  metaDescription: 'Chi tiết về ắc quy xe máy: phân loại ắc quy nước và ắc quy khô, tuổi thọ, cách chọn mua đúng chủng loại và bảo quản kéo dài tuổi thọ.',
  summary: 'Ắc quy là cụm điện hao mòn theo thời gian rõ ràng nhất trên xe máy: cứ hai đến bốn năm là phải thay, và thay đúng — đúng chủng loại, đúng nguồn hàng — quyết định xe có khởi động êm trong chu kỳ kế tiếp hay không. Bài viết đi chi tiết từng khía cạnh của ắc quy xe máy: hai loại phổ biến và khác biệt của chúng, các chỉ số cần đọc trên vỏ ắc quy, cách chọn mua tránh hàng kém, thời điểm nên thay, và cách bảo quản giúp ắc quy sống đủ tuổi thọ thay vì chết sớm vì thói quen sử dụng.',
  quickAnswer: 'Ắc quy xe máy chia hai loại chính: ắc quy nước (cần châm dung dịch, giá rẻ) và ắc quy khô miễn bảo quản (kín, không cần chăm, phổ biến trên xe đời mới). Khi mua, đọc ba chỉ số trên vỏ: điện áp chuẩn (thường 12V), dung lượng tính bằng Ampe giờ (Ah) và dòng khởi động; chọn đúng chỉ số xe đang dùng và mua từ nguồn tin cậy, chú ý ngày sản xuất vì ắc quy "cận date" đã mất một phần tuổi thọ ngay khi xuất kho.',
  keyPoints: [
    'Ắc quy nước rẻ nhưng cần châm nước cất định kỳ; ắc quy khô kín tiện nhưng nhạy với phóng sâu.',
    'Ba chỉ số cần khớp khi mua: điện áp (V), dung lượng (Ah), dòng khởi động (A).',
    'Ngày sản xuất quyết định tuổi thực tế của ắc quy: hàng để kho lâu đã giảm tuổi từ trước.',
    'Ắc quy chết vì phóng sâu nhiều lần: đề quá lâu, để xe lâu không nổ, phụ kiện rút điện nhỏ giọt.',
    'Thay ắc quy đúng cực tính, siết chặt chụp, và ghi lại ngày thay để canh chu kỳ kế tiếp.',
    'Ắc quy mới mà nhanh yếu lại: kiểm tra bộ chỉnh lưu sạc trước khi kết luận ắc quy lỗi.',
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['ắc quy', 'ắc quy nước', 'ắc quy khô', 'dung lượng Ah', 'chỉnh lưu', 'sạc ắc quy', 'đề máy'],
  keywords: ['ắc quy xe máy', 'chọn ắc quy xe máy', 'ắc quy nước và ắc quy khô', 'tuổi thọ ắc quy xe máy', 'chỉ số ắc quy', 'bảo quản ắc quy xe'],
  sections: [
    {
      h2: 'Hai loại ắc quy phổ biến và khác biệt của chúng',
      html: `<p>Ắc quy nước (kiểu cổ điển) chứa các bản cực chìm trong dung dịch acid: giá rẻ, chịu phóng sâu khá và có thể phục vụ nhiều năm nếu chăm đúng — châm nước cất khi mức tụt, giữ lỗ thoát hơi thông thoáng, vệ sinh hai cọc khỏi oxyt. Nhược điểm là phải chăm: bỏ quên một lần châm là bản cực hở không, hỏng sớm không hồi phục.</p>
<p>Ắc quy khô (miễn bảo quản, hay gọi ắc quy MF) là loại kín: dung dịch gel hoặc chất liệu đệm giữ acid, không cần châm gì suốt đời. Phổ biến trên xe đời mới vì tiện, sạch và ít nhạy oxyt tại cọc. Nhược điểm: nhạy với việc phóng sâu — xả hết vài lần là vĩnh viễn mất khả năng giữ điện, nên xe để lâu không chạy chính là kẻ thù lớn nhất của loại này.</p>
<p>Một loại gặp ở phân khúc cao hơn là ắc quy gel hoặc lithium dùng cho xe máy công nghệ — nhẹ hơn và bền hơn nhưng giá cao và có yêu cầu sạc riêng. Với người dùng phổ thông, quan trọng nhất vẫn là chọn đúng loại xe đang quy định trong sổ tay, thay vì nâng cấp theo cảm tính.</p>`,
    },
    {
      h2: 'Đọc chỉ số trên vỏ ắc quy trước khi mua',
      html: `<p>Mọi ắc quy đều in ba nhóm chỉ số quan trọng. Điện áp chuẩn: xe máy phổ thông dùng 12V — mua sai là không cài vừa và không đủ line cho hệ thống. Dung lượng tính bằng Ampe giờ (Ah): cho biết bình chứa được bao nhiêu điện; xe tay ga với cụm điện tử nhiều thường cần Ah cao hơn xe số cùng thế hệ. Dòng khởi động tối đa (A): khả năng cấp dòng lớn cho mô tơ đề trong vài giây — chỉ số quyết định đề có khởi được máy lạnh hay không.</p>
<p>Ba chỉ số nên khớp hoặc tương đương với ắc quy cũ đang tháo ra. Tăng nhẹ Ah một chút thường chấp nhận được nếu kích thước buồng chứa vừa; giảm Ah để rẻ hơn là quyết định tồi: đề yếu về già và ắc quy xả sâu thường xuyên hơn. Giảm dòng khởi động thì tai hại trực tiếp mùa lạnh.</p>
<p>Ngày sản xuất là chỉ số thứ tư ít ai đọc: ắc quy để kho lâu ngày tự phóng dần và cả không sạc lại được một phần dung lượng. Một viên "mới" nhưng sản xuất cách hai năm đã mất phần tuổi thọ đầu tiên. Hàng chính hãng tại điểm bán lẻ đáng tin thường luân chuyển hàng nhanh và ngày sản xuất mới.</p>`,
    },
    {
      h2: 'Tuổi thọ và thời điểm nên thay',
      html: `<p>Chu kỳ phổ biến của ắc quy xe máy là hai đến bốn năm, tùy loại và cách dùng. Dấu hiệu già đọng: đề chậm dần, đèn mờ hơn khi tắt máy, cần đề nhiều lần hơn trước khi nổ, đồng hồ điện tử mất cài đặt mỗi lần tắt khóa. Khi các dấu hiệu này tới sớm và rõ, kiểm tra điện áp trước: dưới 12V khi tắt máy với loại 12V là yếu đáng kể.</p>
<p>Câu hỏi kinh điển: sạc lại hay thay mới? Ắc quy hạ hóa do ngồi lâu không chạy thường phục hồi được một phần sau sạc chuyên dụng. Ắc quy đã qua ba năm, đã sạc phục hồi vài lần mà vẫn tụt, hoặc vỏ phồng chảy — thay mới là phương án đúng; tiếp tục sạc chỉ là trì hoãn chi phí trong khi rủi ro đứng đường vẫn nguyên.</p>
<p>Người dùng nên chủ động với lịch: ghi ngày thay ắc quy vào nhật ký xe, và từ giữa năm thứ hai trở đi kiểm điện áp định kỳ. Thay chủ động trước một chuyến đi xa quan trọng luôn rẻ hơn thay bị động trên đường trường trong đêm.</p>`,
    },
    {
      h2: 'Bảo quản: giữ ắc quy sống đủ tuổi',
      html: `<p>Ba nguyên tắc bảo quản. Một: không phóng sâu — mỗi lần đề không quá năm giây, nghỉ mười lăm giây giữa các lần; xe không nổ thì dừng đề và tìm nguyên nhân, đừng "đề cho tới khi kiệt". Hai: không để xe đứng lâu — ắc quy tự phóng kể cả khi xe im; sau vài tuần, điện áp tụt tới mức tổn hại. Xe để lâu nên nổ chạy mười lăm phút mỗi tuần hoặc tháo cọc âm.</p>
<p>Ba: không rút điện ngoài quy định — phụ kiện gắn thêm chạy khi khóa tắt là "máy hút máu" nhỏ giọt: camera hành trình chế độ chờ, định vị GPS là hai thủ phạm phổ biến khiến xe để một tuần đã khó nổ. Người gắn các thiết bị này nên chọn loại có cắt điện tự động hoặc tuyến qua khóa điện.</p>
<p>Về sạc bổ sung: sạc đúng loại — ắc quy nước dùng sạc dòng thấp thường, ắc quy khô cần sạc có chế độ phù hợp (nhiều loại chỉ sạc được qua hai cọc với giới hạn dòng nhỏ). Không sạc bằng cục sạc "cứ cắm vào là chạy" không rõ thông số: sạc sai chế độ làm ắc quy phồng, giảm tuổi trầm trọng.</p>`,
    },
    {
      h2: 'Thay ắc quy: việc tự làm được trong hai mươi phút',
      html: `<p>Thay ắc quy là việc người dùng tự làm được trên hầu hết xe tay ga: mở ắp hoặc nắp hông, tháo cọc âm trước rồi cọc dương, rắc ắc quy cũ ra, đặt viên mới, cặp cọc dương trước rồi âm sau, siết vừa tay, tra mỡ chống oxyt tại cọc. Trình tự âm trước dương sau (tháo) và dương trước âm sau (lắp) tránh tình trạng chạm mát vô tình khi cờ lê chạm vỏ xe.</p>
<p>Một lưu ý nhỏ: một số xe tay ga mất thiết lập đồng hồ khi ngắt ắc quy — giờ cần cài lại, không phải lỗi. Và với ắc quy nước loại mới chưa nạp dung dịch, phải nạp dung dịch kèm theo đúng vạch rồi mới sử dụng; viên nạp rồi để dành càng lâu càng giảm tuổi.</p>
<p>Sau khi thay, kiểm tra bằng một tuần quan sát: đề có nhanh trở lại, đèn có ổn định, và nếu một tuần sau đã lại đề yếu — mang xe kiểm bộ chỉnh lưu sạc. Thay ắc quy là rẻ; để nguyên một lỗi sạc thì cứ hai năm thay một lần và đầy rủi ro đứng đường. Phân biệt được hai tình huống này là toàn bộ sự khác biệt giữa "biết thay" và "biết chăm".</p>`,
    },
  ],
  checklist: [
    'Ghi ngày thay ắc quy vào nhật ký xe để canh chu kỳ hai đến bốn năm.',
    'Mua ắc quy khớp ba chỉ số: điện áp, dung lượng Ah, dòng khởi động.',
    'Đọc ngày sản xuất trên vỏ trước khi trả tiền.',
    'Mỗi lần đề không quá năm giây; xe không nổ thì tìm nguyên nhân, không đề tới kiệt.',
    'Xe để lâu: nổ chạy mười lăm phút mỗi tuần hoặc tháo cọc âm.',
    'Sau khi thay: kiểm tra một tuần; nếu nhanh yếu lại thì đo kiểm bộ chỉnh lưu sạc.',
  ],
  warnings: [
    'Tháo cọc âm trước, cắm cọc dương trước — tránh chạm chập khi thao tác.',
    'Không sạc ắc quy khô bằng sạc không rõ chế độ: nguy cơ phồng và giảm tuổi.',
    'Dung dịch ắc quy nước là acid: đeo găng và kính khi thao tác, tránh đổ lên sơn xe.',
  ],
  notes: [
    'Bài viết hướng dẫn chi tiết theo kinh nghiệm phổ biến, không thay thế hướng dẫn cụ thể của nhà sản xuất xe và ắc quy.',
    'Loại ắc quy quy định cho từng dòng xe nằm trong sổ tay — luôn ưu tiên thông tin này.',
  ],
  references: [
    'Tài liệu kỹ thuật của các nhà sản xuất ắc quy xe máy — hướng dẫn kích hoạt, sạc và bảo quản.',
    'Sổ tay hướng dẫn sử dụng xe máy — thông số ắc quy quy định và vị trí lắp.',
    'Quy chuẩn về an toàn pin và ắc quy trên phương tiện giao thông cơ giới.',
  ],
  related: [
    'ac-quy-yeu',
    'he-thong-dien-xe',
    'de-xe-day-khi-ac-quy-yeu',
    'ac-quy-xe-may-cau-tao-va-cach-bao-quan',
  ],
};
