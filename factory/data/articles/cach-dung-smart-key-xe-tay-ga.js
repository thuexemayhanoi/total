// AI WIKI TOTAL — S01089 (topic V2 T001164); hướng dẫn chung, thao tác cụ thể phải theo sổ hướng dẫn của từng hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'cach-dung-smart-key-xe-tay-ga',
  title: 'Chìa khóa thông minh smart key trên xe tay ga: cách dùng, thay pin và xử lý khi không mở được xe',
  seoTitle: 'Smart key xe tay ga: cách dùng, thay pin và khi xe không nhận chìa',
  metaDescription: 'Hướng dẫn dùng smart key xe tay ga: cách hoạt động, dấu hiệu pin chìa yếu, thay pin đúng cách, các bước thử khi xe không nhận chìa và lưu ý bảo quản chống trộm.',
  summary: 'Bài hướng dẫn người dùng xe tay ga có smart key: chìa nhận diện thế nào, dấu hiệu pin chìa yếu, cách thay pin an toàn, những bước thử khi xe không nhận chìa hoặc không mở được khóa, và các lưu ý về cách giữ chìa để vừa tiện vừa hạn chế rủi ro mất trộm.',
  quickAnswer: 'Smart key cho phép mở khóa và khởi động khi chìa nằm trong vùng nhận của xe. Khi xe không nhận chìa, hãy thử đưa chìa lại gần, thay pin chìa, kiểm tra ắc quy xe và dùng chìa phụ trước khi đến đại lý để xử lý tiếp.',
  keyPoints: [
    'Smart key giao tiếp bằng tín hiệu vô tuyến công suất thấp giữa chìa và bộ nhận trên xe.',
    'Pin chìa yếu làm tầm nhận ngắn lại hoặc xe không nhận chìa; thay pin đúng loại là việc đơn giản.',
    'Ắc quy xe yếu cũng có thể khiến xe không phản ứng với chìa.',
    'Mỗi hãng có cách dự phòng riêng khi chìa không hoạt động; cần đọc sổ hướng dẫn.',
    'Giữ chìa xa xe khi ở nhà và có chìa phụ ở nơi an toàn.'
  ],
  category: 'docs',
  hub: 'huong-dan-su-dung',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['smart key', 'chìa khóa thông minh', 'xe tay ga', 'pin chìa', 'ắc quy'],
  keywords: ['cách dùng smart key xe tay ga', 'thay pin chìa khóa thông minh', 'smart key không mở được xe', 'xe không nhận chìa khóa'],
  sections: [
    P('Smart key hoạt động thế nào', [
      'Smart key, hay chìa khóa thông minh, là loại chìa không cần cắm vào ổ. Bên trong chìa là một mạch nhỏ phát tín hiệu vô tuyến công suất thấp; bộ nhận trên xe lắng nghe tín hiệu đó, kiểm tra mã nhận diện và, nếu đúng, cho phép các thao tác như mở khóa cổ, mở yên, bật điện hay khởi động. Người dùng chỉ cần mang chìa theo người, trong túi áo hoặc túi xách, và thao tác trên núm hoặc nút của xe.',
      'Mỗi hãng bố trí tính năng khác nhau nên bài này nói ở mức chung. Có xe dùng núm xoay để mở khóa điện khi chìa ở gần, có xe dùng nút bấm; có xe có thêm nút trên chìa để mở yên, báo vị trí xe hoặc khóa ngắt từ xa. Một số dòng xe có thể có cả chìa cơ dự phòng. Đọc kỹ sổ hướng dẫn để biết xe bạn hỗ trợ những gì, vì thao tác sai là nguyên nhân phổ biến của việc cho rằng chìa không hoạt động.',
      'Smart key còn là một lớp chống trộm: xe chỉ nổ máy khi nhận đúng chìa đã đăng ký. Vì mã được ghép với xe, chìa phụ hoặc chìa thay thế cần được đăng ký tại nơi có thiết bị phù hợp, thường là đại lý chính hãng; không thể chỉ đi cắt một chiếc chìa như chìa cơ truyền thống. Điều này làm xe an toàn hơn nhưng cũng khiến việc mất chìa phiền hơn, nên cần giữ chìa phụ cẩn thận.'
    ]),
    P('Dấu hiệu pin chìa yếu', [
      'Chìa dùng một viên pin nhỏ để phát tín hiệu. Khi pin yếu, dấu hiệu đầu tiên thường là tầm nhận ngắn lại: trước đây xe nhận chìa trong túi quần, giờ bạn phải đưa chìa sát hơn mới nhận. Đôi khi xe lúc nhận lúc không, nhất là ở những nơi có nhiều nhiễu sóng. Một số xe có đèn hoặc thông báo trên đồng hồ khi pin chìa thấp; nếu xe bạn có, hãy chú ý khi thấy đèn này sáng.',
      'Tuổi thọ pin chìa phụ thuộc cách dùng và loại pin, nên bài không nêu thời gian cụ thể. Thay vì chờ chìa hết hẳn mới thay, hãy coi tầm nhận ngắn lại là tín hiệu đầu tiên và chuẩn bị pin thay. Một viên pin dự phòng đúng loại để sẵn ở nhà là thói quen nhỏ nhưng tránh được nhiều rắc rối vào buổi sáng đi làm.',
      'Nhận biết đúng nguyên nhân giúp tránh sửa nhầm. Chìa không nhận không phải lúc nào cũng do pin chìa; nó cũng có thể do ắc quy xe yếu, chìa bị ướt hoặc va đập, nhiễu sóng mạnh xung quanh hay bộ nhận trục trặc. Thử đổi sang chìa phụ là cách nhanh nhất để biết vấn đề nằm ở chìa hay ở xe: nếu chìa phụ hoạt động bình thường, nhiều khả năng chìa chính cần thay pin hoặc kiểm tra.'
    ]),
    P('Thay pin chìa đúng cách', [
      'Trước hết biết đúng loại pin của chìa; thường in trên viên pin hoặc ghi trong sổ hướng dẫn. Dùng đúng loại và đúng điện áp, không thay bằng loại tương tự khi chưa chắc, vì khác biệt nhỏ cũng có thể làm chìa chập chờn. Chuẩn bị bề mặt sạch, khô, dụng cụ nhỏ như tua vít dẹt mỏng hoặc đồng xu, và chìa phụ hoặc chìa cơ nếu có để phòng khi cần.',
      'Mở vỏ chìa theo khe hoặc nút mở mà hãng thiết kế, tránh cạy mạnh làm nứt vỏ. Ghi nhớ chiều đặt pin hiện tại trước khi lấy ra, chụp ảnh nếu cần. Đặt pin mới đúng cực, không chạm tay vào mặt tiếp xúc của pin và mạch vì mồ hôi hoặc bụi có thể làm tiếp xúc kém. Đóng vỏ lại cho khít, tránh nước và bụi lọt vào.',
      'Sau khi thay, thử ngay: đưa chìa gần xe, thao tác như bình thường và kiểm tra tầm nhận. Nếu xe vẫn không nhận, đừng cố lặp lại nhiều lần; kiểm tra lại chiều pin, tiếp xúc và thử chìa phụ. Trong một số xe, sau khi thay pin cần thao tác ghép lại chìa với xe theo hướng dẫn, nên hãy đọc kỹ sổ trước khi làm. Nếu không tự tin, nhờ đại lý chính hãng là lựa chọn an toàn nhất.'
    ]),
    P('Khi xe không nhận chìa: các bước thử', [
      'Khi xe không phản ứng, hãy bình tĩnh thử theo thứ tự từ dễ đến khó. Bước một đưa chìa sát bộ nhận hoặc núm xoay, xa các vật kim loại lớn và thiết bị phát sóng như điện thoại, và thử lại. Bước hai kiểm tra xe còn điện không: đèn đồng hồ có sáng, còi có kêu không; ắc quy yếu có thể khiến xe không nhận chìa dù chìa hoàn toàn bình thường.',
      'Bước ba thử chìa phụ. Nếu chìa phụ mở được, chìa chính cần thay pin hoặc kiểm tra. Bước bốn tìm cách dự phòng do hãng thiết kế: nhiều xe có cách mở khóa hoặc khởi động khi chìa hết pin, như chìa cơ để mở khóa cổ hoặc vị trí đặt chìa sát bộ nhận. Những thao tác này khác nhau giữa các hãng nên cần đọc sổ hướng dẫn; đừng thử những mẹo trôi nổi có thể làm hỏng bộ điều khiển.',
      'Nếu tất cả không có kết quả, đừng ép xe bằng cách can thiệp vào dây điện hay cạy khóa. Hãy dừng ở nơi an toàn, liên hệ đại lý chính hãng hoặc dịch vụ cứu hộ và mô tả những gì đã thử. Nếu bạn ở xa, một trong những lý do để luôn mang theo chìa phụ hoặc biết cách dự phòng là tránh bị kẹt giữa đường. Kiểm tra ắc quy định kỳ cũng là cách phòng ngừa đơn giản mà hiệu quả.'
    ]),
    P('Lưu ý bảo quản chìa và chống trộm', [
      'Vì xe nhận chìa khi chìa ở gần, nên thói quen cất chìa quan trọng. Ở nhà, đặt chìa xa cửa ra vào và xa chỗ để xe, tốt nhất là cất ở nơi không dễ bị sóng của chìa truyền ra ngoài. Một số người dùng túi chắn sóng đặc biệt để hạn chế việc thiết bị lạ khuếch đại tín hiệu chìa; bạn có thể cân nhắc nếu sống ở nơi có nhiều xe bị mất trộm. Đây là biện pháp bổ sung, không thay thế khóa cổ và khóa đĩa.',
      'Bảo vệ chìa khỏi nước, nhiệt và va đập. Không để chìa trong xe, trên yên hay trong cốp khi rời xe vì nếu có người lấy được, họ có thể khởi động xe. Tránh để chìa gần nam châm mạnh, thiết bị điện tử công suất lớn, hay chèn trong túi cùng nhiều chìa kim loại để không làm mòn vỏ và gây trục trặc. Nếu lỡ làm rơi xuống nước, lau khô và thay pin nếu cần.',
      'Cuối cùng, chuẩn bị cho tình huống mất chìa. Biết rõ chìa phụ ở đâu, ghi lại thông tin xe cần thiết để làm chìa thay thế như giấy tờ chứng minh chủ sở hữu theo yêu cầu của đại lý, và liên hệ nơi có thể đăng ký chìa mới sớm. Nếu nghi chìa bị mất ở nơi có người lạ, nên báo cho nơi cấp chìa để xử lý bảo mật. Một chút chuẩn bị sẽ giúp bạn xử lý nhanh khi xảy ra sự cố.'
    ])
  ],
  checklist: [
    'Đọc sổ hướng dẫn để biết thao tác mở khóa và khởi động bằng smart key của xe bạn.',
    'Biết loại pin của chìa và để sẵn một viên dự phòng đúng loại.',
    'Cất chìa phụ ở nơi an toàn, không để trong xe.',
    'Kiểm tra ắc quy xe định kỳ vì ắc quy yếu cũng làm xe không nhận chìa.',
    'Giữ chìa khô ráo, tránh va đập và để xa chỗ đỗ xe khi ở nhà.'
  ],
  steps: [
    { title: 'Thử lại đúng thao tác', detail: 'Đưa chìa sát bộ nhận, xa vật kim loại và điện thoại rồi thao tác lại theo sổ hướng dẫn.' },
    { title: 'Kiểm tra điện của xe', detail: 'Xem đèn đồng hồ và còi có hoạt động không; ắc quy yếu là một nguyên nhân khiến xe không nhận chìa.' },
    { title: 'Thử chìa phụ và thay pin', detail: 'Nếu chìa phụ hoạt động thì thay pin chìa chính đúng loại, đúng chiều cực.' },
    { title: 'Dùng cách dự phòng hoặc nhờ đại lý', detail: 'Làm theo cách dự phòng của hãng trong sổ; nếu vẫn không được thì liên hệ đại lý chính hãng.' }
  ],
  warnings: [
    'Không can thiệp vào dây điện hay cạy khóa để khởi động xe khi smart key không hoạt động.',
    'Không để chìa trong xe, trên yên hay trong cốp khi rời xe.',
    'Không dùng pin sai loại hoặc cạy vỏ chìa mạnh tay; có thể làm hỏng chìa.'
  ],
  notes: [
    'Tên gọi, thao tác và tính năng của chìa khác nhau giữa các hãng và đời xe; hãy ưu tiên sổ hướng dẫn của xe bạn.',
    'Việc làm chìa thay thế cần đăng ký với xe, thường thực hiện tại đại lý chính hãng.'
  ],
  references: [
    'Sổ hướng dẫn sử dụng xe của nhà sản xuất, phần chìa khóa thông minh',
    'Đại lý chính hãng của hãng xe về đăng ký chìa thay thế và cách dự phòng'
  ],
  related: ['mat-chia-khoa-xe-may-xu-ly-the-nao', 'cach-de-xe-ga', 'huong-dan-su-dung-cac-chuc-nang-tren-xe-ga']
};
