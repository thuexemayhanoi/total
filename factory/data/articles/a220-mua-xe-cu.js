// Tổng hợp kiến thức: mua xe cũ — S00220 (hub guide/mua-xe)
'use strict';
module.exports = {
  slug: 'mua-xe-cu',
  title: 'Mua xe cũ — tổng hợp kiến thức cho người mua',
  seoTitle: 'Mua xe cũ — tổng hợp kiến thức cho người mua',
  metaDescription: 'Tổng hợp kiến thức khi mua xe cũ: chọn nguồn mua, định giá, kiểm tra hiện trạng, thẩm định giấy tờ pháp lý, đặt cọc và thanh toán an toàn, sang tên đúng luật.',
  summary: 'Mua xe cũ là cách tiết kiệm lớn nhất khi cần một chiếc xe, nhưng cũng là giao dịch dễ rủi ro nhất nếu không nắm đủ kiến thức: xe đẹp giá tốt vẫn có thể là xe không rõ nguồn gốc, đã từng đâm nặng, hoặc giấy tờ không thể sang tên. Bài viết tổng hợp kiến thức mua xe cũ theo đúng trật tự của một giao dịch an toàn: chọn nguồn mua, định giá dựa trên đời xe và hiện trạng, kiểm tra hiện trạng kỹ thuật, thẩm định giấy tờ pháp lý, và tổ chức đặt cọc — thanh toán — sang tên sao cho tiền và xe đổi chủ cùng một lúc, không lọt vào kẽ hở nào.',
  quickAnswer: 'Khi mua xe cũ, làm đủ sáu việc theo thứ tự: xác định nguồn mua đáng tin, tra giá thị trường của đúng đời xe, kiểm tra hiện trạng tại chỗ, thẩm định giấy tờ và đối chiếu số khung số máy, đặt cọc kèm giấy ghi rõ điều kiện, và thanh toán cùng lúc nhận đủ giấy tờ gốc để sang tên. Không chuyển tiền trước khi giấy tờ gốc nằm trên tay — và không nhận xe không kèm giấy chứng nhận đăng ký gốc.',
  keyPoints: [
    'Chọn nguồn mua: người quen, cửa hàng có địa chỉ rõ, hoặc nền tảng có đánh giá.',
    'Định giá dựa trên đời xe, số ki-lô-mét, hiện trạng, và giá chào bán cùng đời trên thị trường.',
    'Kiểm tra hiện trạng: khung xe, động cơ, điện, và dấu vết từng đâm sửa.',
    'Thẩm định giấy tờ: đăng ký gốc, chủ tên thật, số khung số máy khớp.',
    'Đặt cọc bằng giấy ghi rõ điều kiện hoàn tiền nếu không sang tên được.',
    'Thanh toán và sang tên trong cùng ngày — không để xe hoặc giấy tờ đi trước tiền.',
  ],
  category: 'guide',
  hub: 'mua-xe',
  date: '2026-10-04',
  updated: '2026-10-04',
  entities: ['giấy chứng nhận đăng ký xe', 'số khung số máy', 'đặt cọc mua xe', 'thẩm định giấy tờ'],
  keywords: ['mua xe cũ', 'mua xe cu', 'kiểm tra xe cũ trước khi mua', 'giấy tờ mua xe cũ', 'sang tên xe cũ'],
  sections: [
    {
      h2: 'Chọn nguồn mua và loại rủi ro tương ứng',
      html: `<p>Ba nguồn mua xe cũ phổ biến nhất — người quen, cửa hàng xe cũ, và chợ trực tuyến — mỗi nguồn mang một loại rủi ro riêng. Người quen giảm rủi ro về nguồn gốc xe nhưng làm khó việc mặc cả và đôi khi khiến người mua bỏ qua bước kiểm tra; cửa hàng có địa chỉ rõ cho giá cao hơn một chút nhưng bù lại đáng tin khi có vấn đề sau giao dịch; chợ trực tuyến nhiều lựa chọn và giá tốt nhất nhưng là nơi rủi ro giấy tờ và xe đã đâm nặng tập trung nhiều nhất.</p>
<p>Nguyên tắc chung cho mọi nguồn: người bán phải chứng minh được quyền sở hữu — đứng tên trên giấy chứng nhận đăng ký hoặc có giấy ủy quyền hợp lệ kèm giấy tờ người ủy. Chỉ cần một khâu không rõ ở đây, mọi khoản giá rẻ hơn sẽ không đáng với rủi ro không sang tên được về mình. Với chợ trực tuyến, chỉ gặp người bán tại địa chỉ nhà ghi trong đăng ký; gặp ở bãi xe hoặc quán cà phê là dấu hiệu nên dừng lại.</p>
<p>Riêng với mua xe máy cũ, phần kiểm tra kỹ thuật có những điểm riêng cần làm kỹ hơn — với tổng hợp này, bạn có thể đọc thêm hướng dẫn kiểm tra xe máy cũ để biết các điểm chạm tay cụ thể trước khi quyết. Với mua ô tô cũ, nên thuê dịch vụ kiểm định độc lập đi cùng nếu không tự kiểm được động cơ và gầm xe.</p>`,
    },
    {
      h2: 'Định giá xe cũ dựa trên những gì',
      html: `<p>Giá xe cũ hình thành từ bốn yếu tố: đời xe và dòng xe, số ki-lô-mét đã đi, hiện trạng thực tế, và vùng miền. Người mua dễ chỉ nhìn vào hai yếu tố đầu vì chúng in trên giấy tờ và quảng cáo, nhưng hai yếu tố sau mới tạo chênh lệch lớn: hai xe cùng đời cùng số ki-lô-mét có thể chênh nhau nhiều triệu chỉ vì một xe giữ nguyên bản và một xe đã đâm sửa nhiều.</p>
<p>Cách tra giá thực tế: tìm ít nhất ba đến năm tin rao bán cùng dòng, cùng đời, số ki-lô-mét gần tương đương, rồi lấy vùng giá trung vị thay vì giá rẻ nhất — xe rẻ bất thường trong cùng phân khúc gần như luôn có lý do ẩn. Giá niêm yết của tin rao cũng chỉ là điểm chào, khoản thực chốt thường thấp hơn vài phần trăm tới mười phần trăm tùy thời gian xe đã đăng.</p>
<p>Yếu tố cuối cùng ảnh hưởng giá là chi phí phát sinh sau mua: một xe cần thay lốp cả bộ, sửa hồi đồng hồ, hay làm lại giấy tờ tới hạn đăng kiểm thực ra không bằng một xe chênh giá hai triệu nhưng sẵn sàng chạy ngay. Tính giá mua cũ bằng công thức giá chốt cộng chi phí đưa về trạng thái dùng được ngay, rồi so các tổng đó với nhau thay vì so các con số chào bán.</p>`,
    },
    {
      h2: 'Kiểm tra hiện trạng xe trước khi trả giá',
      html: `<p>Hiện trạng của xe cũ gồm bốn lớp kiểm tra: khung và thân xe, động cơ và hệ truyền động, hệ điện, và nội thất phụ kiện. Lớp khung quan trọng nhất vì nó quyết định an toàn và khả năng sang tên: dấu vết đâm sửa lộ ra qua chênh màu sơn, mép tấm ốp không khít, vết hàn trên khung, hoặc gờ bị bẹp ở các điểm chịu lực. Khung đã hàn lại gần như không nên mua dù giá hấp dẫn tới đâu.</p>
<p>Động cơ nghe khi khởi động nguội — đây là lúc tiếng bất thường lộ rõ nhất: tiếng gõ kim loại trong máy, tiếng hú từ hộp số, hoặc khó nổ kéo dài đều là dấu hiệu của các sửa chữa tốn kém sắp tới. Động cơ tốt chạy đều, không khói đen hoặc trắng ra ống pô khi tăng ga, và nhiệt độ đứng yên ổn định sau mười phút nổ máy. Với xe máy, chạy thử một vòng và cảm nhận độ ăn của côn, sự êm của xích, và độ nhạy của ga.</p>
<p>Hệ điện và các chức năng phụ: đèn pha, đèn xi nhan, còi, khả năng sạc (với xe máy nhìn đèn sáng khi tăng ga), khóa cổ từ hoạt động đúng. Nội thất và phụ kiện: dấu hiệu bị ngập nước (mùi ẩm, gỉ ở các ốc dưới gầm, vệt bùn trong khe hẹp) là điểm trừ lớn vì nước từng vào xe gây hỏng hóc dây điện kéo dài nhiều năm. Với ô tô, kiểm tra thêm máy lạnh và các cửa kính điện từng cửa một.</p>`,
    },
    {
      h2: 'Thẩm định giấy tờ — khâu quyết định giao dịch được hay không',
      html: `<p>Giấy tờ quyết định: một chiếc xe hoàn hảo về máy móc mà không sang tên được cũng chỉ là tiền mất. Bộ giấy tờ tối thiểu gồm giấy chứng nhận đăng ký xe gốc, giấy chứng nhận kiểm định an toàn kỹ thuật còn hiệu lực (với ô tô), giấy tờ tùy thân của người đứng tên, và chứng từ chuyển nhượng hợp lệ — hóa đơn hoặc giấy viết có công chứng theo quy định.</p>
<p>Việc đầu tiên là đối chiếu ba bộ số: số khung và số máy trên giấy đăng ký với số dập trên xe, và tên người bán với tên chủ xe. Nếu người bán không phải chủ xe, yêu cầu giấy ủy quyền có công chứng và giấy tờ của cả hai; mua theo kiểu "cầm hộ giấy" là rủi ro lớn nhất của thị trường xe cũ. Kiểm tra tình trạng pháp lý của xe qua dấu ghi trên đăng ký: xe đang thế chấp ngân hàng thường có ghi chú — loại này chỉ mua được khi chốt tất toán và bỏ ghi chú trước khi sang tên.</p>
<p>Bước cuối của thẩm định là kiểm tra hạn đăng kiểm và tiền phạt chậm nộp nếu có: xe quá hạn đăng kiểm lâu hoặc đang tồn khoản phạt sẽ thành gánh người mua phải xử lý sau này. Nếu thiếu bất kỳ khâu nào trong phần này, vị thế đúng của người mua không phải là trả giá rẻ hơn — mà là dừng giao dịch; giấy tờ không sửa được bằng tiền lẻ của thương lượng.</p>`,
    },
    {
      h2: 'Đặt cọc, thanh toán và những giấy từ giao dịch',
      html: `<p>Sau khi kiểm tra và thẩm định, giao dịch thường qua hai bước: đặt cọc để giữ xe, và thanh toán phần còn lại khi nhận đủ giấy tờ. Đặt cọc cần kèm giấy viết tay hoặc biên bản có chữ ký hai bên, ghi rõ số tiền, mục đích giữ xe, thời hạn hoàn tất, và quan trọng nhất — điều kiện hoàn lại toàn bộ tiền cọc nếu giao dịch không hoàn tất vì lý do pháp lý như không sang tên được. Không có điều kiện này, tiền cọc có thể bị giữ oan.</p>
<p>Thanh toán phần còn lại nên tổ chức cùng lúc với việc giao đủ giấy tờ gốc và xe: hai bên hẹn tại điểm giao dịch thuận tiện, người mua chuyển khoản phần còn lại ngay khi nhận bộ giấy gốc đầy đủ. Chuyển khoản có vết tốt hơn tiền mặt vì tạo chứng từ tự động; nếu dùng tiền mặt, viết giấy biên nhận đủ ba thông tin: số tiền, thời điểm, và mục đích.</p>
<p>Hai giấy từ giao dịch nên lập thêm: biên bản giao nhận xe ghi hiện trạng tại thời điểm mua, và chứng từ chuyển nhượng đúng mẫu để nộp khi sang tên. Chụp lại toàn bộ giấy tờ trước khi giao dịch xong — bộ ảnh này là bản lưu phòng khi giấy gốc có vấn đề về sau, và là căn cứ để làm thủ tục sang tên trong những ngày tiếp theo.</p>`,
    },
    {
      h2: 'Sang tên xe và những việc ngay sau giao dịch',
      html: `<p>Thủ tục sang tên làm tại cơ quan công an nơi người mua đăng ký thường trú, với hồ sơ gồm chứng từ chuyển nhượng, giấy chứng nhận đăng ký xe, giấy tờ tùy thân và phiếu khai. Thời hạn nộp hồ sơ sau khi mua có quy định riêng — làm sớm nhất có thể vừa tránh phạt chậm, vừa đẩy nhanh việc phát hiện vấn đề giấy tờ (nếu có) khi còn có thể truy lại người bán.</p>
<p>Trong chờ cấp đăng ký mới, người mua nên làm ngay ba việc bảo vệ xe: mua bảo hiểm trách nhiệm dân sự, mang xe đi bảo dưỡng tổng (thay dầu, kiểm tra lốp và đèn, siết lại các cụm), và kiểm tra trộm cắp qua khóa cổ hoặc immobilizer nếu xe chưa có. Chi phí bảo dưỡng đầu này nên tính vào giá mua cũ từ đầu — nó là khoản nhỏ nhưng biến chiếc xe vừa mua thành xe đáng tin cho quãng đường dài phía trước.</p>
<p>Sau khi có giấy đăng ký tên mình, đối chiếu lại toàn bộ thông tin trên giấy với thực tế xe một lần cuối: biển số, số khung, số máy, tên chủ. Nhìn tổng thể, mua xe cũ an toàn không nằm ở may mắn gặp người bán tử tế — nó nằm ở trật tự: nguồn rõ, giá đúng, hiện trạng kiểm, giấy tờ thẩm, cọc và thanh toán chặt, sang tên sớm. Mỗi khâu một lớp bảo vệ, và toàn bộ chuỗi chỉ cần một khâu bị bỏ qua để trở thành bài học đắt giá.</p>`,
    },
  ],
  checklist: [
    'Xác định người bán là chủ xe trên giấy đăng ký hoặc có ủy quyền công chứng.',
    'Tra ba đến năm tin rao cùng đời xe để lấy vùng giá trung vị.',
    'Kiểm tra khung xe, động cơ, hệ điện, và dấu vết đâm sửa tại chỗ.',
    'Đối chiếu số khung số máy trên giấy với số dập trên xe.',
    'Viết giấy đặt cọc ghi rõ điều kiện hoàn tiền nếu không sang tên được.',
    'Nộp hồ sơ sang tên sớm nhất có thể sau khi nhận đủ giấy tờ gốc.',
  ],
  warnings: [
    'Không chuyển tiền trước khi giấy tờ gốc nằm trên tay — không ngoại lệ.',
    'Tránh xe có dấu hàn trên khung hoặc chênh màu sơn từng mảng lớn.',
    'Không mua xe đang thế chấp ngân hàng khi chưa chốt tất toán và bỏ ghi chú.',
    'Coi chừng giá rẻ bất thường so với cùng đời cùng số ki-lô-mét — gần như luôn có lý do ẩn.',
  ],
  notes: [
    'Với ô tô cũ, cân nhắc thuê dịch vụ kiểm định độc lập đi cùng nếu không tự kiểm được động cơ và gầm xe.',
    'Mua cuối năm hoặc sau dịp lễ thường dễ thương lượng hơn vì người bán muốn giải ngân trước năm mới.',
  ],
  references: [
    {
      title: 'Thông tư 15/2014/TT-BCA — Quy định về đăng ký, cấp biển số xe',
      url: 'https://thuvienphapluat.vn/van-ban/Can-bo-pham-nhan-2016-Thong-tu-15-2014-TT-BCA-285694.aspx',
    },
    {
      title: 'Nghị định 168/2024/NĐ-CP — Quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ',
      url: 'https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh-Nghi-dinh-168-2024-NĐ-CP-xu-phat-vi-pham-hanh-chinh-trong-linh-vuc-giao-thong-duong-bo-643246.aspx',
    },
  ],
  related: ['mua-xe-may-cu-nhung-diem-can-kiem-tra', 'mua-xe-may-moi'],
};
