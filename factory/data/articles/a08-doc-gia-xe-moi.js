// AI WIKI TOTAL — bài nền tảng: cách đọc giá xe máy mới (cụm /market/gia-xe-moi/)
// Nguyên tắc: mô tả cơ chế hình thành giá, KHÔNG công bố con số giá cụ thể theo thời điểm
'use strict';

module.exports = {
  slug: 'cach-doc-gia-xe-may-moi',
  title: 'Cách đọc giá xe máy mới: giá công bố, giá lăn bánh và nghệ thuật so sánh',
  seoTitle: 'Cách đọc giá xe máy mới: công bố, lăn bánh và so sánh',
  metaDescription: 'Giá xe máy mới không chỉ là con số niêm yết: giải thích khác nhau giữa giá công bố, giá đại lý và giá lăn bánh, cấu trúc các khoản phí và cách so sánh nơi bán đúng.',
  summary: 'Nhiều người mua xe lần đầu bỡ ngỡ khi con số mình chuẩn bị bỏ ra cao hơn "giá niêm yết" thấy trên mạng. Lý do đơn giản: giá xe máy mới tại Việt Nam có nhiều tầng — giá công bố của nhà sản xuất, giá thực tế tại đại lý, và giá lăn bánh sau khi cộng các khoản phí theo quy định. Hiểu cấu trúc này giúp bạn so sánh các nơi bán theo cùng một chuẩn, không bị dẫn dắt bởi những con số "rẻ bất thường" và đàm phán dựa trên tổng chi phí thực. Bài viết này giải thích cơ chế hình thành từng tầng giá và cách đọc chúng đúng cách.',
  quickAnswer: 'Khi so sánh giá xe máy mới, hãy so trên giá lăn bánh — tổng số bạn thực sự bỏ ra gồm giá bán xe, thuế trước bạ, phí đăng ký, bảo hiểm trách nhiệm bắt buộc và các khoản phí đăng kiểm nếu áp dụng. Giá công bố của nhà sản xuất chỉ là điểm khởi đầu; hai nơi bán cùng công bố một con số có thể chênh nhau ở phần lăn bánh và quà tặng kèm theo, vì vậy luôn yêu cầu bảng chi phí đầy đủ trước khi quyết định.',
  keyPoints: [
    'Giá xe mới có nhiều tầng: giá công bố của nhà sản xuất, giá đại lý thực tế và giá lăn bánh sau các khoản phí.',
    'Giá lăn bánh = giá bán xe + thuế trước bạ + phí đăng ký + bảo hiểm bắt buộc + phí đăng kiểm (nếu có).',
    'Hai nơi bán cùng công bố một con số có thể chênh nhau ở phần phí, quà tặng và phụ kiện kèm theo.',
    'Yêu cầu bảng chi tiết tổng chi phí bằng văn bản trước khi đặt cọc — con số duy nhất đáng tin là tổng phải trả.',
    'Thời điểm mua ảnh hưởng giá: cuối năm, dịp ra mắt thế hệ mới thường có không gian ưu đãi hơn.',
  ],
  category: 'market',
  hub: 'gia-xe-moi',
  date: '2026-09-22',
  updated: '2026-09-22',
  entities: ['giá xe máy mới', 'giá lăn bánh', 'thuế trước bạ', 'phí đăng ký', 'bảo hiểm trách nhiệm', 'đại lý'],
  keywords: ['giá xe máy mới', 'giá lăn bánh là gì', 'thuế trước bạ xe máy', 'phí đăng ký xe', 'mua xe máy mới', 'so giá xe máy', 'kinh nghiệm mua xe mới'],
  sections: [
    {
      h2: 'Ba tầng giá của một chiếc xe máy mới',
      html: `<p>Tầng thứ nhất là giá công bố (niêm yết) của nhà sản xuất: con số thống nhất trên toàn quốc dùng làm mốc tham chiếu. Tầng thứ hai là giá thực tế tại đại lý: có thể bằng, cao hơn hoặc thấp hơn giá công bố tùy khu vực, thời điểm và mức cầu của từng dòng xe. Tầng thứ ba là giá lăn bánh: tổng chi phí để chiếc xe chạy hợp pháp trên đường, gồm giá bán xe cộng các khoản thuế, phí bắt buộc.</p>
<p>Sự phân tầng này lý giải vì sao cùng một dòng xe, người này trả cao hơn người kia dù "giá trên mạng" như nhau. Dòng xe bán chạy thường được bán sát hoặc cao hơn giá công bố ở giai đoạn khan xe; dòng tồn kho lâu có không gian giảm. Các quà tặng kèm theo — mũ bảo hiểm, gương, phụ kiện — cũng là một dạng "giá ẩn": hai nơi bán cùng con số nhưng nơi tặng kèm nhiều hơn thực chất đang bán rẻ hơn.</p>
<p>Nguyên tắc đọc giá vì thế rất rõ: khi hỏi giá, đừng hỏi "giá xe bao nhiêu" mà hỏi "giá lăn bánh bao nhiêu, gồm những gì". Câu hỏi này buộc người bán liệt kê đầy đủ, và hai nơi bán chỉ thực sự so được khi cả hai đều trả lời bằng tổng chi phí cùng cấu phần.</p>`,
    },
    {
      h2: 'Giá lăn bánh: những khoản nào nằm trong tổng số tiền',
      html: `<p>Thành phần lớn nhất của phần lăn bánh là thuế trước bạ: khoản thu một lần khi đăng ký xe, tính theo tỷ lệ phần trăm trên giá tính thuế, với mức tỷ lệ do địa phương quyết định trong khung quốc gia. Vì tỷ lệ theo địa phương, cùng một chiếc xe đăng ký ở hai tỉnh khác nhau có thể chênh nhau một khoản đáng kể ở mục này.</p>
<p>Thành phần thứ hai là phí đăng ký, cấp biển số: gồm lệ phí đăng ký xe và chi phí làm biển. Biển thường và các dạng biển đặc biệt có chi phí khác nhau tùy quy định từng thời kỳ. Thành phần thứ ba là bảo hiểm trách nhiệm dân sự bắt buộc: không có nó, xe không được lưu thông; bạn có thể mua thêm bảo hiểm tự nguyện cho người ngồi trên xe và tài sản.</p>
<p>Ngoài nhóm bắt buộc, nhiều nơi bán tính thêm các dịch vụ kèm: phí ra hồ sơ, phí hỗ trợ đăng ký, gói đăng kiểm định kỳ nếu áp dụng. Các dịch vụ này không bắt buộc mua tại nơi bán xe — bạn hoàn toàn có thể tự làm hồ sơ đăng ký. Đó là lý do khi nhận bảng báo giá, nên yêu cầu tách rõ: phần bắt buộc theo quy định và phần dịch vụ tự chọn, từ đó quyết định phần sau dựa trên thời gian và sự tiện lợi của mình.</p>
<p>Một điểm hay bị bỏ quên: giá tính thuế trước bạ thường căn theo giá do cơ quan quản lý quy định cho từng dòng xe, không nhất thiết bằng số tiền bạn mua thực tế. Khi xe bán thấp hơn giá tính thuế (khuyến mãi), phần thuế vẫn tính theo giá quy định — yếu tố nhỏ nhưng khiến thực chi khác dự toán nếu chỉ tính theo số tiền mua xe.</p>`,
    },
    {
      h2: 'Cách so sánh giá giữa các nơi bán đúng chuẩn',
      html: `<p>Bước một: chốt cụ thể phiên bản xe — năm sản xuất, màu, và những trang bị kèm. Giá giữa các phiên bản cùng dòng có thể chênh nhau đáng kể; so giá khi chưa chốt phiên bản là so sai từ gốc. Bước hai: yêu cầu mỗi nơi bán cung cấp bảng tổng chi phí gồm giá bán xe, từng khoản phí bắt buộc, các dịch vụ tự chọn và danh sách quà tặng kèm theo — tất cả bằng văn bản hoặc tin nhắn có thể lưu lại.</p>
<p>Bước ba: chuẩn hóa để so sánh. Nếu nơi bán hỗ trợ đăng ký trọn gói, tách phần phí thật theo quy định khỏi phần dịch vụ; quy quà tặng ra giá trị tương đương để cộng trừ. Chỉ sau bước này, hai con số "tổng" mới thực sự so được với nhau. Một nơi có giá bán thấp hơn nhưng thu phí dịch vụ cao và tặng quà ít có thể đắt hơn nơi bán xe cao hơn hẳn phần còn lại.</p>
<p>Bước bốn: hỏi chính sách giá trong trường hợp xe phải đặt cọc chờ về. Thị trường xe khan hàng có nơi bán giữ "giá đặt lúc cọc", nơi khác ghi điều khoản "giá tại thời điểm nhận xe". Khác biệt một dòng chữ này có thể khiến bạn trả cao hơn hàng loạt khi xe về trễ — hãy yêu cầu ghi rõ giá chốt và thời hạn giữ giá trong phiếu đặt cọc.</p>
<p>Cuối cùng, đừng quên so cả "chi phí sau bán": khoảng cách tới đại lý chính hãng gần nhất cho bảo dưỡng định kỳ, chính sách bảo hành và thái độ hỗ trợ sau bán. Một nơi bán rẻ hơn vài phần trăm nhưng bảo dưỡng bất tiện sẽ lấy lại phần chênh lệch qua thời gian và công sức của bạn.</p>`,
    },
    {
      h2: 'Thời điểm mua và các dạng ưu đãi phổ biến',
      html: `<p>Giá xe mới không tĩnh theo mùa. Các giai đoạn thường có không gian ưu đãi hơn gồm: cuối năm khi các điểm bán gắng hoàn chỉ tiêu; giai đoạn một thế hệ mới chuẩn bị ra mắt khiến thế hệ hiện tại cần giải tỏa tồn kho; và các dịp lễ, hội có hoạt động khuyến mãi tập trung. Ngược lại, ngay sau khi một mẫu mới ra mắt, nguồn cung thường khan và giá thực tế có xu hướng cao hơn giá công bố.</p>
<p>Các dạng ưu đãi phổ biến trên thị trường gồm: giảm trực tiếp giá bán; hỗ trợ một phần phí trước bạ hoặc đăng ký; tặng phụ kiện, mũ bảo hiểm, thẻ xăng; trả góp lãi suất ưu đãi hoặc hỗ trợ tiền trả trước. Mỗi dạng có giá trị quy đổi khác nhau — hỗ trợ phí trước bạ tiết kiệm ngay tổng chi, còn trả góp ưu đãi chỉ có giá trị nếu bạn định vay và so được với lãi suất gốc.</p>
<p>Lưu ý với tin tức "giảm sốc": luôn kiểm tra xe được giảm là phiên bản nào, năm sản xuất nào. Ưu đãi lớn nhất thường rơi vào phiên bản màu ít người chọn hoặc xe năm sản xuất của năm trước. Với dòng xe giữ giá, mua "đời cũ giải tồn" có thể hợp lý; với dòng xe bán chạy, chờ đợi ưu đãi đôi khi chỉ làm lỡ thời điểm xe sẵn hàng.</p>
<p>Kinh nghiệm tổng quát: quyết định thời điểm mua dựa trên nhu cầu thật của bạn — xe cũ hỏng, nhu cầu di chuyển thay đổi — kết hợp theo dõi mặt bằng giá qua vài tuần. Chờ đợi vô hạn để "bắt đáy" thường tốn kém hơn phần chênh lệch mà bạn không bắt được.</p>`,
    },
    {
      h2: 'Tránh những cạm bẫy phổ biến khi đọc bảng báo giá',
      html: `<p>Cạm bẫy thứ nhất: "giá từ" trong quảng cáo. Con số này thường là phiên bản cơ bản nhất, màu phổ thông nhất, chưa gồm phí và thường không phải xe sẵn hàng. Khi đến nơi bán, phiên bản quảng cáo hay "vừa hết" và bạn được mời xem phiên bản cao hơn. Phòng cách: gọi trước xác nhận phiên bản, màu và tổng chi phí trước khi mất công di chuyển.</p>
<p>Cạm bẫy thứ hai: tách nhỏ phí để con số chính trông thấp. Bảng báo giá thiếu dòng nào đó — thường là phí làm biển, phí hồ sơ — sẽ cộng vào lúc chốt. Phòng cách: yêu cầu bảng chi tiết đến từng khoản và cam kết không phát sinh ngoài bảng.</p>
<p>Cạm bẫy thứ ba: quà tặng "trị giá cao". Giá trị khai báo của quà tặng thường cao hơn giá bán ra thực tế của cùng món đồ. Phòng cách: chỉ quy quà tặng theo giá trị bạn sẵn sàng trả tiền mua — không theo giá trị khai báo.</p>
<p>Cạm bẫy thứ tư: hợp đồng đặt cọc ghi giá mập mờ về thời điểm. Giá ghi rõ ràng cùng thời hạn giữ giá giúp bạn tránh cảnh "xe về thì giá đổi". Nếu bảng đặt cọc không có các dòng này, đề nghị bổ sung trước khi ký; nơi bán nghiêm túc không ngại viết rõ điều họ cam kết.</p>
<p>Cạm bẫy thứ năm: so giá bằng tin đồn trên mạng xã hội. Hai người kể hai con số khác nhau có thể đang nói hai tầng giá khác nhau (công bố và lăn bánh) tại hai địa phương khác nhau. Con số đáng tin để so là bảng chi phí bằng văn bản mà bạn trực tiếp nhận được.</p>`,
    },
    {
      h2: 'Sau khi mua: giữ lại chứng từ để bảo vệ quyền lợi',
      html: `<p>Khi nhận xe, kiểm tra sự khớp giữa thực nhận và cam kết: phiên bản, màu, phụ kiện tặng kèm, và bộ giấy tờ xe. Yêu cầu hóa đơn đầy đủ: hóa đơn giá trị gia tăng hoặc chứng từ bán hàng là căn cứ pháp lý khi có tranh chấp, đồng thời cần cho việc đăng ký và các thủ tục sau.</p>
<p>Lưu trữ bảng báo giá, phiếu đặt cọc và các tin nhắn trao đổi giá. Nếu phát sinh chênh lệch giữa cam kết và thực thu, các văn bản này là bằng chứng của bạn. Trường hợp không thể tự thỏa thuận, người tiêu dùng có thể phản ánh tới cơ quan quản lý thị trường hoặc hiệp hội bảo vệ người tiêu dùng với bộ chứng từ đầy đủ.</p>
<p>Cuối cùng, khi mua xe để dùng nhiều năm, hãy đối chiếu định kỳ vài năm một lần giữa chi phí bạn đã bỏ ra và giá trị bán lại của dòng xe đó trên thị trường cũ. Cách đọc giá không kết thúc ở ngày mua: hiểu cách dòng xe giữ giá giúp lần mua sau — và cả quyết định thuê hay mua — sáng suốt hơn.</p>`,
    },
  ],
  checklist: [
    'Chốt cụ thể phiên bản xe: năm sản xuất, màu, trang bị — trước khi so giá.',
    'Yêu cầu bảng chi phí đầy đủ: giá bán, từng khoản phí bắt buộc, dịch vụ tự chọn, quà tặng — bằng văn bản.',
    'So sánh giữa các nơi bán trên tổng chi phí chuẩn hóa, không so giá công bố trần trụi.',
    'Kiểm tra xe tính thuế trước bạ theo giá nào và tỷ lệ địa phương đang áp dụng.',
    'Ghi rõ giá chốt và thời hạn giữ giá trong phiếu đặt cọc.',
    'Giữ hóa đơn, bảng báo giá và tin nhắn trao đổi làm căn cứ khi có chênh lệch.',
  ],
  warnings: [
    'Không đặt cọc khi phiếu đặt không ghi giá chốt và thời hạn giữ giá rõ ràng.',
    'Không tin "giá từ" trong quảng cáo khi chưa xác nhận phiên bản và tổng chi phí qua điện thoại.',
    'Không so giá giữa hai nơi bán khi một bên chưa liệt kê đầy đủ các khoản phí.',
    'Không quyết định dựa trên giá trị khai báo của quà tặng — hãy quy theo giá mua thực tế.',
  ],
  notes: [
    'Bài viết mô tả cấu trúc và cơ chế hình thành giá xe máy mới tại Việt Nam, không công bố con số giá theo thời điểm vì giá thay đổi liên tục theo thị trường.',
    'Tỷ lệ thuế trước bạ và các khoản phí áp dụng theo địa phương và văn bản hiện hành; hãy đối chiếu quy định tại nơi đăng ký xe trước khi lập ngân sách.',
  ],
  references: [
    'Luật Thuế trước bạ và các văn bản hướng dẫn — căn cứ tính thuế và tỷ lệ theo địa phương.',
    'Thông tư của Bộ Tài chính về quy định thuế, phí với xe máy khi đăng ký lần đầu.',
    'Nghị định của Chính phủ về cấp biển số đăng ký xe — cơ sở các khoản phí đăng ký.',
  ],
  related: ['honda-vision-thong-so-va-kinh-nghiem', 'thu-tuc-thue-xe-dieu-can-biet'],
};
