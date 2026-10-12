// AI WIKI TOTAL — S00515; informational-only; không nêu tên cửa hàng, địa chỉ hay giá nhiên liệu.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'tra-cay-xang',
  title: 'Hướng dẫn chi tiết về tra cây xăng',
  seoTitle: 'Tra cây xăng: hướng dẫn dùng bản đồ và đánh giá điểm đổ',
  metaDescription: 'Hướng dẫn tra cây xăng chi tiết: dùng ứng dụng bản đồ, đọc thông tin giờ mở cửa, đánh giá, ảnh và hình thức thanh toán, đối chiếu dữ liệu để chọn điểm đổ phù hợp.',
  summary: 'Bài hướng dẫn từng bước tra cứu cây xăng bằng công cụ số: cách tìm kiếm trên bản đồ, đọc các trường thông tin như giờ hoạt động, dịch vụ, ảnh và đánh giá, đối chiếu nhiều nguồn, lưu điểm hay dùng và chuẩn bị phương án dự phòng khi dữ liệu chưa đầy đủ hoặc đã cũ.',
  quickAnswer: 'Tra cây xăng hiệu quả là tìm bằng ứng dụng bản đồ, xem giờ hoạt động, dịch vụ, ảnh gần đây và đánh giá, rồi đối chiếu với biển hiệu thực tế. Nên lưu các điểm quen thuộc dọc tuyến và có phương án dự phòng vì dữ liệu trên mạng có thể chưa cập nhật.',
  keyPoints: [
    'Tìm kiếm theo từ khóa và xem khoảng cách, hướng đi trên bản đồ số.',
    'Đọc giờ hoạt động, dịch vụ đi kèm, ảnh gần đây và đánh giá của người dùng.',
    'Đối chiếu nhiều nguồn vì dữ liệu có thể sai hoặc cũ.',
    'Lưu các điểm đổ xăng quen thuộc dọc tuyến thường đi để dùng khi cần.',
    'Luôn có phương án dự phòng, đặc biệt ở vùng xa hoặc đi vào ban đêm.'
  ],
  category: 'map',
  hub: 'cay-xang',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['tra cứu cây xăng', 'bản đồ số', 'giờ hoạt động', 'đánh giá địa điểm'],
  keywords: ['tra cây xăng', 'tìm cây xăng bằng bản đồ', 'lưu điểm đổ xăng', 'kiểm tra giờ mở cửa cây xăng'],
  sections: [
    P('Bắt đầu tra cứu trên ứng dụng bản đồ', [
      'Hầu hết ứng dụng bản đồ hiện nay đều có ô tìm kiếm cho phép nhập các từ như cây xăng, trạm xăng hoặc xăng dầu. Sau khi gõ, ứng dụng hiển thị các điểm quanh vị trí hiện tại trên bản đồ cùng danh sách theo khoảng cách. Bạn có thể phóng to, thu nhỏ hoặc kéo bản đồ để xem các điểm phía trước tuyến đường thay vì chỉ xung quanh vị trí đang đứng.',
      'Khi đang trong chuyến đi dài, hãy sử dụng tính năng thêm điểm dừng vào tuyến. Cách này giúp bạn biết cây xăng nào nằm gần lộ trình và mất thêm bao nhiêu phút nếu rẽ vào. Đừng chọn điểm chỉ dựa trên khoảng cách đường chim bay; hãy xem thời gian di chuyển thực tế vì có thể phải đi vòng qua dải phân cách hoặc cầu.',
      'Nên tra cứu trước khi đèn báo nhiên liệu sáng, tốt nhất là khi bạn vẫn còn khoảng nửa bình. Tâm lý thoải mái giúp bạn đọc thông tin kỹ hơn, tránh chọn nhầm điểm vì vội. Nếu ứng dụng cho phép tải bản đồ ngoại tuyến, hãy tải trước khu vực sẽ đi để vẫn tra được khi mất sóng.'
    ]),
    P('Đọc các trường thông tin: giờ mở cửa, dịch vụ, ảnh và đánh giá', [
      'Mỗi điểm trên bản đồ thường có một trang thông tin với nhiều trường hữu ích. Giờ mở cửa cho biết cây xăng có hoạt động vào thời điểm bạn đến không; một số nơi ghi mở cả ngày, số khác đóng cửa buổi tối. Hãy chú ý các ghi chú đặc biệt như đóng cửa tạm thời hoặc đang sửa chữa nếu có.',
      'Phần dịch vụ có thể cho biết cây xăng có bơm hơi, cửa hàng tiện lợi, nhà vệ sinh hoặc khu vực nghỉ chân. Với người đi xe máy đường dài, những tiện ích này rất đáng giá. Ảnh do người dùng đăng thường giúp bạn nhìn trước lối vào, biển hiệu và mức độ rộng rãi của khuôn viên, từ đó nhận ra điểm đến dễ hơn.',
      'Đánh giá của người dùng là nguồn tham khảo, nhưng cần đọc có chọn lọc. Hãy chú ý các nhận xét gần đây, đọc nhiều ý kiến thay vì chỉ một ý kiến nổi bật và nhận ra sự khác biệt giữa trải nghiệm cá nhân với thông tin khách quan. Với các vấn đề như chất lượng nhiên liệu hoặc quyền lợi, nên kiểm tra nguồn chính thức nếu cần.'
    ]),
    P('Đối chiếu dữ liệu và nhận biết thông tin cũ', [
      'Dữ liệu trên bản đồ do nhiều nguồn tạo ra nên có thể không đồng nhất. Một cây xăng có thể đã đổi tên, đóng cửa hoặc di dời nhưng bản đồ chưa cập nhật. Vì vậy, hãy đối chiếu giữa các ứng dụng khác nhau nếu có thể và xem ngày của các ảnh hoặc đánh giá để ước đoán độ mới của dữ liệu.',
      'Khi đến gần, hãy xác nhận bằng mắt: biển hiệu, đèn, nhân viên và hoạt động của khu vực bơm. Nếu thấy cây xăng đóng cửa hoặc không phù hợp, đừng bực dọc mà chuyển sang phương án dự phòng đã chuẩn bị. Bạn cũng có thể góp phần cải thiện dữ liệu bằng cách báo cáo thông tin sai nếu ứng dụng cho phép.',
      'Với vùng nông thôn, nhiều điểm bán xăng nhỏ không có trên bản đồ. Hỏi người dân địa phương vẫn là cách hiệu quả. Tuy nhiên, nên cân nhắc về chất lượng và an toàn, ưu tiên điểm có biển hiệu rõ ràng và khu vực bơm sạch sẽ, tránh nơi để xăng trong chai đặt sát đường hoặc gần nguồn lửa.'
    ]),
    P('Lưu điểm quen thuộc và xây dựng bản đồ riêng', [
      'Nếu bạn thường xuyên đi một tuyến, hãy lưu những cây xăng hay dùng vào danh sách yêu thích hoặc nhãn riêng trong ứng dụng. Gắn ghi chú ngắn như có nhà vệ sinh sạch, mở khuya hoặc chỗ rộng dễ vào. Sau vài lần đi, bạn sẽ có một bản đồ cá nhân giúp ra quyết định nhanh hơn trong những lúc cần.',
      'Với những chuyến đi xa, hãy lập kế hoạch tiếp nhiên liệu theo chặng. Ước tính quãng đường xe đi được với một bình đầy dựa trên trải nghiệm thực tế rồi trừ đi một khoảng đệm an toàn. Chọn điểm đổ xăng ở khoảng một nửa quãng đường tối đa để luôn có không gian xử lý nếu điểm đó đóng cửa.',
      'Bạn cũng có thể chia sẻ danh sách điểm đổ xăng với bạn đi cùng để mọi người có cùng thông tin. Khi đi nhóm, thống nhất điểm dừng trước, đặc biệt ở những đoạn đường vắng. Cách này hạn chế tình trạng người này đi qua điểm quan trọng mà người khác chưa kịp đổ.'
    ]),
    P('Phương án dự phòng khi dữ liệu không đủ', [
      'Dù tra cứu kỹ đến đâu, vẫn có lúc dữ liệu thiếu hoặc sai. Phương án dự phòng đầu tiên là chủ động đổ xăng sớm. Đừng đợi đến khi còn rất ít mới tìm; bạn cần có không gian để thử nhiều lựa chọn. Thứ hai là mang theo thông tin liên lạc của dịch vụ cứu hộ hoặc người thân để nhờ hỗ trợ khi cần.',
      'Nếu hết xăng giữa đường, đưa xe vào nơi an toàn, bật đèn cảnh báo và thông báo vị trí. Có thể nhờ người đi đường mua giúp một lượng nhỏ nhiên liệu bằng bình đạt chuẩn hoặc nhờ dịch vụ cứu hộ kéo xe. Tránh tự đi bộ một mình trong điều kiện thiếu ánh sáng hoặc trời mưa lớn.',
      'Cuối cùng, hãy rút kinh nghiệm sau mỗi chuyến đi. Điểm nào đúng như thông tin, điểm nào sai, cách tra cứu nào hiệu quả. Dần dần, bạn sẽ hình thành thói quen quản lý nhiên liệu chủ động, ít bị động và giảm đáng kể rủi ro bị chết máy giữa đường vì cạn xăng.'
    ])
  ],
  checklist: [
    'Tra cứu cây xăng khi bình còn khoảng một nửa thay vì đợi đèn báo sáng.',
    'Đọc giờ hoạt động, ảnh gần đây và đánh giá trước khi chọn điểm.',
    'Tải bản đồ ngoại tuyến cho khu vực sẽ đi.',
    'Lưu các điểm đổ xăng quen thuộc dọc tuyến thường đi.',
    'Chuẩn bị phương án dự phòng và thông tin liên lạc khi cần hỗ trợ.'
  ],
  steps: [
    { title: 'Tìm kiếm trên bản đồ', detail: 'Nhập từ khóa cây xăng và xem các điểm theo khoảng cách hoặc dọc tuyến.' },
    { title: 'Đọc thông tin chi tiết', detail: 'Xem giờ mở cửa, dịch vụ, ảnh và đánh giá gần đây.' },
    { title: 'Đối chiếu và xác nhận', detail: 'So sánh nhiều nguồn và xác nhận bằng biển hiệu thực tế khi đến nơi.' },
    { title: 'Lưu và chia sẻ điểm', detail: 'Ghi chú các điểm hay dùng và chia sẻ với người đi cùng.' }
  ],
  warnings: [
    'Không tin tuyệt đối vào dữ liệu bản đồ vì có thể đã cũ hoặc sai.',
    'Không đợi đến khi gần cạn xăng mới bắt đầu tìm điểm đổ.',
    'Không mua xăng từ nơi không có biển hiệu rõ ràng và điều kiện an toàn.'
  ],
  notes: [
    'Bài viết không nêu tên cửa hàng, địa chỉ hay giá nhiên liệu cụ thể.',
    'Giao diện và tính năng ứng dụng bản đồ có thể khác nhau; hãy làm theo hướng dẫn của ứng dụng bạn dùng.'
  ],
  references: [
    'Tài liệu hướng dẫn của ứng dụng bản đồ số đang sử dụng.',
    'Hướng dẫn sử dụng xe của nhà sản xuất — mục nhiên liệu khuyến nghị.',
    'Cục Cảnh sát giao thông — tài liệu an toàn khi điều khiển xe máy.'
  ],
  related: ['cay-xang-gan-day', 'cay-xang-duong-truong', 'doi-pin-xe-dien']
};
