// AI WIKI TOTAL — S00518; informational-only; không nêu tên nhà cung cấp, địa chỉ, giá điện hay điều khoản dịch vụ.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'tra-tram-sac',
  title: 'Tra trạm sạc — những điều cần biết',
  seoTitle: 'Tra trạm sạc xe điện: cách tìm, kiểm tra và dự phòng',
  metaDescription: 'Hướng dẫn tra trạm sạc xe điện: dùng bản đồ và ứng dụng, kiểm tra loại cổng sạc, công suất, tình trạng hoạt động, cách thanh toán và chuẩn bị phương án dự phòng khi đi xa.',
  summary: 'Bài viết giải thích cách tra cứu trạm sạc cho xe điện: dùng bản đồ và ứng dụng chuyên dụng, đọc thông tin về loại cổng sạc, công suất, tình trạng hoạt động và hình thức thanh toán, đối chiếu dữ liệu, lập kế hoạch sạc theo chặng và chuẩn bị phương án dự phòng khi đi xa.',
  quickAnswer: 'Để tra trạm sạc, hãy dùng bản đồ hoặc ứng dụng của nhà cung cấp, xem loại cổng sạc có khớp với xe không, công suất, giờ hoạt động và tình trạng trụ. Đối chiếu nhiều nguồn, lên kế hoạch sạc khi pin còn khoảng một phần ba và luôn có điểm sạc dự phòng.',
  keyPoints: [
    'Cần kiểm tra cổng sạc và chuẩn kết nối có tương thích với xe hay không.',
    'Công suất sạc ảnh hưởng thời gian chờ; xe cũng có giới hạn công suất nhận riêng.',
    'Tình trạng trụ, giờ hoạt động và hình thức thanh toán có thể thay đổi theo thời điểm.',
    'Nên sạc khi pin còn khoảng một phần ba thay vì chờ gần cạn.',
    'Luôn lưu thêm một đến hai điểm sạc dự phòng dọc tuyến.'
  ],
  category: 'map',
  hub: 'tram-sac',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['trạm sạc', 'xe điện', 'cổng sạc', 'lập kế hoạch sạc'],
  keywords: ['tra trạm sạc', 'tìm trạm sạc xe điện', 'cổng sạc xe máy điện', 'lập kế hoạch sạc'],
  sections: [
    P('Tra trạm sạc trên bản đồ và ứng dụng', [
      'Trạm sạc là nơi bổ sung điện năng cho xe điện và việc tìm đúng điểm sạc là kỹ năng cơ bản với người dùng mới. Cách đơn giản nhất là dùng ứng dụng bản đồ phổ biến, nhập từ khóa như trạm sạc xe điện hoặc điểm sạc và xem các vị trí gần bạn. Nhiều nhà cung cấp trạm sạc cũng có ứng dụng riêng hiển thị trụ trống, trụ đang dùng và chi tiết kỹ thuật.',
      'Khi xem kết quả, không chỉ nhìn khoảng cách mà hãy xem điểm đó có phù hợp với loại xe của bạn hay không. Nhiều trạm chỉ dành cho ô tô điện với cổng sạc nhanh, trong khi xe máy điện thường dùng cổng và công suất khác. Thông tin về loại cổng sạc thường nằm ở phần chi tiết điểm đến hoặc hình ảnh trụ.',
      'Hãy tải sẵn các ứng dụng cần thiết trước chuyến đi và đăng ký tài khoản khi chưa vội. Một số trạm yêu cầu quét mã hoặc đăng nhập mới bắt đầu sạc. Nếu để đến khi pin gần cạn mới cài ứng dụng và xác minh, bạn sẽ mất thời gian và dễ lúng túng. Chuẩn bị sớm giúp mọi bước diễn ra trơn tru.'
    ]),
    P('Đọc thông tin kỹ thuật: cổng sạc, công suất, tình trạng', [
      'Cổng sạc là yếu tố quyết định khả năng tương thích. Mỗi xe có chuẩn cổng riêng và thường được ghi trong hướng dẫn sử dụng hoặc do nhà sản xuất công bố. Nếu không khớp, bạn cần bộ chuyển đổi đạt chuẩn do nhà sản xuất khuyến nghị; không nên dùng dây hoặc bộ chuyển đổi không rõ nguồn gốc vì có nguy cơ cháy nổ.',
      'Công suất của trụ cho biết tốc độ sạc tối đa, nhưng thời gian sạc thực tế còn phụ thuộc giới hạn công suất mà xe nhận được, nhiệt độ pin và mức pin hiện tại. Thông thường tốc độ sạc chậm lại khi pin gần đầy. Vì vậy, đừng chỉ chọn trạm công suất cao nhất mà hãy chọn điểm phù hợp với khả năng của xe và thời gian bạn có.',
      'Tình trạng hoạt động gồm trụ trống, đang sạc hoặc lỗi. Dữ liệu này đôi khi cập nhật chậm, vì thế nên coi đó là tham khảo. Đọc thêm đánh giá và ảnh gần đây để biết trạm có ổn định không, có chỗ đỗ rộng không và có thu phí giữ chỗ hay không. Khi đến nơi, quan sát thực tế trước khi cắm.'
    ]),
    P('Thanh toán và quy trình sử dụng trạm', [
      'Hình thức thanh toán khác nhau theo từng nhà cung cấp: có nơi trừ tiền qua ứng dụng, có nơi quét mã thanh toán hoặc dùng thẻ. Một số điểm tính phí theo điện năng, số khác theo thời gian. Bạn nên xem thông tin này trên ứng dụng trước khi bắt đầu sạc thay vì đợi đến khi nhận hóa đơn, và chọn nơi có điều khoản rõ ràng.',
      'Quy trình thường gồm: đỗ xe đúng vị trí, tắt máy, kết nối dây sạc, xác nhận trên ứng dụng hoặc màn hình trụ, và theo dõi trạng thái sạc. Hãy làm theo hướng dẫn tại trạm. Khi kết thúc, rút dây theo đúng thao tác, đặt lại đúng chỗ và rời khỏi vị trí để người khác sử dụng, không chiếm chỗ sau khi đã sạc xong.',
      'Trong lúc chờ, không rời xa xe quá lâu và không để đồ vật cản trở khu vực trụ. Nếu thấy dây hỏng, đầu nối nóng bất thường, trụ rò rỉ hoặc có mùi khét, hãy dừng lại và báo cho đơn vị vận hành. Tuyệt đối không tự sửa trụ sạc hay can thiệp vào hệ thống điện.'
    ]),
    P('Lập kế hoạch sạc khi đi xa', [
      'Khi đi xa bằng xe điện, hãy ước tính quãng đường pin đầy của xe dựa trên trải nghiệm thực tế và trừ khoảng đệm do tải nặng, đường dốc, thời tiết hoặc tốc độ cao. Chia hành trình thành các chặng và tìm trạm sạc ở cuối mỗi chặng. Thay vì chờ pin gần cạn, hãy sạc khi còn khoảng một phần ba để có dư địa nếu điểm sạc gặp sự cố.',
      'Kết hợp thời gian sạc với nghỉ chân. Chọn trạm gần quán ăn, nơi nghỉ hoặc điểm tham quan để tận dụng thời gian chờ. Nếu đi nhóm, thống nhất điểm sạc trước và kiểm tra khả năng chứa nhiều xe cùng lúc, tránh tình trạng cả nhóm phải chờ lâu ở một trụ.',
      'Với đoạn đường vắng hoặc vùng xa, hãy kiểm tra kỹ khoảng cách giữa các trạm. Có nơi trạm sạc rất thưa, buộc bạn phải sạc đầy trước khi vào đoạn đó. Việc đặt phòng ở nơi có sạc hoặc sạc qua đêm khi lưu trú là cách thuận tiện nếu cơ sở lưu trú cho phép và đáp ứng điều kiện an toàn điện.'
    ]),
    P('Phương án dự phòng và thói quen tốt', [
      'Không phải trạm nào cũng luôn sẵn sàng; có thể gặp trạm hỏng, hết chỗ hoặc mất điện. Bạn nên lưu thêm một đến hai điểm sạc dự phòng dọc tuyến và biết trước khoảng cách giữa chúng. Nếu pin xuống thấp, giảm tốc độ, tắt các tiện ích không cần thiết, đi đều ga và hạn chế tăng tốc mạnh để kéo dài quãng đường.',
      'Mang theo sạc xách tay của xe nếu có thể và biết cách sử dụng an toàn tại ổ cắm hợp quy. Không dùng ổ cắm quá tải, dây nối dài kém chất lượng hay sạc ở nơi ẩm ướt. Hỏi chủ nhà hoặc cơ sở lưu trú trước khi sạc xe điện bằng điện của họ, và tuân thủ quy định phòng cháy chữa cháy.',
      'Hãy ghi lại các trạm đã dùng cùng nhận xét ngắn về độ ổn định, chỗ đỗ và thời gian sạc. Sau vài chuyến, bạn sẽ có danh sách điểm sạc đáng tin cậy. Tra trạm sạc trở thành thói quen trước mỗi chuyến đi giống như kiểm tra áp suất lốp, góp phần làm cho việc sử dụng xe điện an tâm và thuận tiện hơn.'
    ])
  ],
  checklist: [
    'Xác nhận loại cổng sạc của xe và công suất sạc tối đa mà xe nhận được.',
    'Tải ứng dụng và đăng ký tài khoản trước khi cần sạc.',
    'Xem tình trạng trụ, giờ hoạt động và hình thức thanh toán trước khi đến.',
    'Sạc khi pin còn khoảng một phần ba và lưu điểm sạc dự phòng.',
    'Không dùng dây hoặc bộ chuyển đổi không rõ nguồn gốc.'
  ],
  steps: [
    { title: 'Tìm điểm sạc', detail: 'Dùng bản đồ hoặc ứng dụng của nhà cung cấp để xem các trạm quanh tuyến.' },
    { title: 'Kiểm tra tương thích', detail: 'Đối chiếu cổng sạc, công suất và điều kiện sử dụng với xe.' },
    { title: 'Thực hiện sạc', detail: 'Kết nối đúng cách, xác nhận trên ứng dụng và theo dõi trạng thái.' },
    { title: 'Kết thúc và rời đi', detail: 'Rút dây đúng thao tác, đặt lại và nhường chỗ cho người khác.' }
  ],
  warnings: [
    'Không dùng dây sạc hoặc bộ chuyển đổi không rõ nguồn gốc cho xe điện.',
    'Không tự sửa trụ sạc hay can thiệp vào hệ thống điện.',
    'Không sạc ở nơi ẩm ướt hoặc dùng ổ cắm quá tải.'
  ],
  notes: [
    'Bài viết không nêu tên nhà cung cấp, địa chỉ, giá điện hay điều khoản dịch vụ cụ thể.',
    'Thông tin kỹ thuật và dịch vụ có thể thay đổi; hãy kiểm tra từ nguồn chính thức của nhà cung cấp.'
  ],
  references: [
    'Hướng dẫn sử dụng xe điện của nhà sản xuất — mục sạc và an toàn điện.',
    'Tài liệu chính thức của đơn vị vận hành trạm sạc.',
    'Quy định an toàn phòng cháy chữa cháy khi sử dụng điện của cơ quan chức năng.'
  ],
  related: ['doi-pin-xe-dien', 'cay-xang-duong-truong', 'di-xe-o-sai-gon']
};
