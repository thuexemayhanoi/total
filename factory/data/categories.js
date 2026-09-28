// AI WIKI TOTAL — 15 danh mục cha + 97 hub con (single source of truth)
// slug/mô tả bằng tiếng Việt; không nhắm trùng intent giữa các cụm (spec mục 6)
'use strict';

// Hub con: slug, tên, mô tả ngắn, mô tả dài, chủ đề đại diện
function H(slug, name, desc, moTa, chuDe) {
  return { slug, name, desc, moTa, chuDe };
}
// Danh mục cha: slug, tên, tagline, metaDescription, children
function P(slug, name, tagline, metaDescription, children) {
  return { slug, name, tagline, metaDescription, children };
}

const CATEGORIES = [
  P('thue-xe', 'Thuê xe',
    'Thuê xe máy, xe điện, ô tô: thủ tục, đặt cọc và kinh nghiệm chọn xe.',
    'Cụm kiến thức thuê xe: thuê xe máy, xe điện, ô tô tự lái — thủ tục, giấy tờ, đặt cọc, hợp đồng, nghiệm thu xe và kinh nghiệm chọn xe phù hợp mỗi chuyến đi.',
    [
      H('xe-may', 'Xe máy',
        'Giá thuê, thủ tục và kinh nghiệm chọn xe.',
        'Tổng hợp kiến thức thuê xe máy: loại xe phổ biến tại các điểm cho thuê, thủ tục cần chuẩn bị, cách kiểm tra xe khi nhận và khi trả, cùng kinh nghiệm chọn xe phù hợp với mục đích chuyến đi.',
        ['thuê xe máy', 'thuê xe máy hà nội', 'thuê honda vision', 'giấy tờ thuê xe', 'kinh nghiệm thuê xe máy', 'kiểm tra xe thuê']),
      H('xe-dien', 'Xe điện',
        'Thuê xe điện, pin, phạm vi hoạt động và chi phí.',
        'Thuê xe điện khác thuê xe xăng ở điểm quản lý pin và phạm vi hoạt động. Hub này tổng hợp kiến thức chọn xe điện, sạc pin đúng cách, tính chi phí sạc và lưu ý khi di chuyển quãng đường xa.',
        ['thuê xe điện', 'pin xe điện', 'trạm sạc', 'phạm vi hoạt động', 'chi phí sạc', 'thuê xe điện giao thông']),
      H('xe-oto', 'Xe ô tô',
        'Kiến thức thuê ô tô, thủ tục và lựa chọn phù hợp.',
        'Thuê ô tô tự lái đòi hỏi thủ tục chặt hơn xe máy: giấy phép lái xe hợp hạng, đặt cọc, hợp đồng và nghiệm thu xe kỹ lưỡng. Hub này tổng hợp mọi điều cần biết trước khi thuê ô tô tự lái.',
        ['thuê ô tô tự lái', 'thuê xe 4 chỗ', 'đặt cọc thuê ô tô', 'hợp đồng thuê ô tô', 'nghiệm thu xe', 'thuê ô tô đường dài']),
    ]),

  P('guide', 'Hướng dẫn',
    'Hướng dẫn từng bước về mua, thuê, sử dụng và bảo dưỡng xe.',
    'Hướng dẫn kiến thức theo từng bước: mua xe, thuê xe, sử dụng xe hàng ngày, bảo dưỡng định kỳ, xử lý sự cố và thủ tục giấy tờ — viết cho người Việt, theo trình tự thực tế.',
    [
      H('mua-xe', 'Mua xe', 'Quy trình mua xe mới và cũ.', 'Từ xác định nhu cầu, chọn loại xe, so sánh giá đến làm thủ tục sang tên — trình tự đầy đủ khi quyết định mua một chiếc xe.', ['mua xe máy mới', 'mua xe cũ', 'thủ tục sang tên', 'chọn xe theo nhu cầu', 'kiểm tra xe trước khi mua']),
      H('thue-xe', 'Thuê xe', 'Hướng dẫn kiến thức thuê xe.', 'Hướng dẫn kiến thức về thuê xe (khác với cụm commercial /thue-xe/): cách đọc hợp đồng, chuẩn bị giấy tờ, nghiệm thu — tiếp cận dưới góc độ quy trình.', ['hướng dẫn thuê xe', 'đọc hợp đồng thuê xe', 'nghiệm thu xe thuê', 'quy trình thuê xe']),
      H('su-dung-xe', 'Sử dụng xe', 'Dùng xe đúng cách mỗi ngày.', 'Vận hành, để xe, tiếp nhiên liệu, chạy rà máy và những thói quen hằng ngày giúp xe bền và an toàn hơn.', ['cách sử dụng xe máy', 'chạy rà máy', 'để xe nơi nào', 'vận hành xe ga', 'thói quen dùng xe']),
      H('bao-duong', 'Bảo dưỡng', 'Bảo dưỡng xe theo chu kỳ.', 'Lịch bảo dưỡng định kỳ theo số km: dầu nhớt, lọc gió, bugi, dầu hộp số, xiên chuyên và những hạng mục cần nhớ.', ['bảo dưỡng định kỳ', 'thay dầu nhớt', 'lịch bảo dưỡng xe máy', 'vệ sinh lọc gió', 'bảo dưỡng xe ga']),
      H('xu-ly-su-co', 'Xử lý sự cố', 'Xử lý khi xe gặp sự cố.', 'Xe không nổ, chết máy giữa đường, mất phanh, thủng lốp — cách nhận diện, xử lý an toàn tại chỗ và khi nào cần gọi hỗ trợ.', ['xe không nổ máy', 'xe chết máy giữa đường', 'thủng lốp giữa đường', 'cứu hộ xe máy', 'xe mất điện']),
      H('thu-tuc-xe', 'Thủ tục xe', 'Giấy tờ và thủ tục pháp lý xe.', 'Đăng ký xe, đăng kiểm, chuyển nhượng, đổi giấy phép lái xe và các thủ tục pháp lý thường gặp của người sở hữu xe.', ['đăng ký xe máy', 'sang tên xe', 'đổi giấy phép lái xe', 'thủ tục xe máy', 'nộp phí trước bạ']),
    ]),

  P('hub', 'Trung tâm chủ đề',
    'Thư mục các cụm chủ đề: hãng xe, dòng xe, loại xe và nhu cầu sử dụng.',
    'Thư mục trung tâm điều hướng: theo hãng xe, dòng xe, loại xe, nhu cầu sử dụng, địa phương và vấn đề thường gặp — điểm khởi đầu khi bạn chưa biết bắt đầu từ đâu.',
    [
      H('hang-xe', 'Hãng xe', 'Chủ đề theo hãng sản xuất.', 'Honda, Yamaha, Suzuki, SYM, Piaggio, VinFast — tổng quan các hãng xe phổ biến tại Việt Nam.', ['hãng xe máy việt nam', 'honda việt nam', 'yamaha việt nam', 'vinfast', 'so sánh hãng xe']),
      H('dong-xe', 'Dòng xe', 'Chủ đề theo dòng xe.', 'Vision, Air Blade, Vision Future, FreeGo, Grande — kiến thức theo từng dòng xe cụ thể đang lưu hành.', ['dòng xe ga', 'xe vision', 'air blade', 'grande', 'freego']),
      H('loai-xe', 'Loại xe', 'Chủ đề theo loại xe.', 'Xe số, xe ga, xe điện, xe côn tay, xe 50cc — đặc điểm và cách chọn theo loại xe.', ['xe số hay xe ga', 'xe côn tay', 'xe điện', 'xe 50cc', 'phân loại xe máy']),
      H('nhu-cau-su-dung', 'Nhu cầu sử dụng', 'Chủ đề theo nhu cầu.', 'Đi làm hằng ngày, chở gia đình, đi phượt, giao hàng — chọn xe và dùng xe theo đúng nhu cầu thực tế.', ['xe đi làm', 'xe chở gia đình', 'xe đi phượt', 'xe giao hàng', 'chọn xe theo nhu cầu']),
      H('dia-phuong', 'Địa phương', 'Chủ đề theo địa phương.', 'Kiến thức xe theo từng thành phố: điều kiện giao thông, quy định địa phương và đặc thù từng khu vực.', ['giao thông hà nội', 'giao thông tp hcm', 'xe máy địa phương', 'quy định giao thông địa phương']),
      H('van-de-thuong-gap', 'Vấn đề thường gặp', 'Chủ đề theo vấn đề.', 'Bó phanh, hao xăng, ắc quy yếu, máy ì — thư mục các vấn đề người dùng xe hay gặp nhất.', ['xe bị bó phanh', 'xe hao xăng', 'ắc quy yếu', 'xe máy kêu', 'máy ì']),
    ]),

  P('wiki', 'Bách khoa xe',
    'Kiến thức nền tảng về cấu tạo, động cơ, điện và thuật ngữ xe.',
    'Bách khoa toàn thư về xe máy: cấu tạo, động cơ, điện xe, hệ thống phanh, lốp bánh xe, dầu nhớt, ắc quy pin và thuật ngữ chuyên ngành — nền tảng để hiểu mọi bài viết sâu hơn.',
    [
      H('cau-tao-xe', 'Cấu tạo xe', 'Cấu tạo tổng thể một chiếc xe máy.', 'Khung xe, hệ thống treo, yên xe, đồng hồ, các cụm chính và vai trò của từng bộ phận trên xe máy.', ['cấu tạo xe máy', 'khung xe', 'hệ thống treo', 'các cụm xe máy', 'bộ phận xe máy']),
      H('dong-co', 'Động cơ', 'Nguyên lý động cơ xe máy.', 'Động cơ four thì, two thì, xy-lanh, piston, cam — cách động cơ biến nhiên liệu thành chuyển động.', ['động cơ xe máy', 'nguyên lý 4 thì', 'piston xy lanh', 'dung tích xi lanh', 'tỷ số nén']),
      H('dien-xe', 'Điện xe', 'Hệ thống điện trên xe.', 'Ắc quy, còi, đèn, gầu sạc và mạch điện — hệ thống dễ gặp rối nhất trên xe máy.', ['hệ thống điện xe', 'ắc quy xe máy', 'đèn xe máy', 'còi xe', 'mạch điện xe']),
      H('he-thong-phanh', 'Hệ thống phanh', 'Cấu tạo và nguyên lý phanh.', 'Phanh đĩa khác phanh tang trống chỗ nào, ABS trên xe máy hoạt động ra sao và cách bảo dưỡng hệ thống phanh.', ['phanh đĩa', 'phanh tang trống', 'abs xe máy', 'cấu tạo phanh', 'bảo dưỡng phanh']),
      H('lop-banh-xe', 'Lốp và bánh xe', 'Lốp xe và cách chọn.', 'Kích cỡ lốp, không lốp, lốp không săng, thời điểm thay và cách đọc ký hiệu trên lốp xe máy.', ['lốp xe máy', 'kích cỡ lốp', 'lốp không săng', 'áp suất lốp', 'thay lốp khi nào']),
      H('dau-nhot', 'Dầu nhớt', 'Dầu nhớt và các loại dầu.', 'Dầu động cơ, dầu hộp số, độ đặc (độ sệt), chu kỳ thay và cách chọn đúng loại dầu cho xe.', ['dầu nhớt xe máy', 'độ đặc dầu', 'chu kỳ thay dầu', 'chọn dầu nhớt', 'dầu hộp số']),
      H('ac-quy-pin', 'Ắc quy và pin', 'Ắc quy xe và pin xe điện.', 'Ắc quy khô, ắc quy nước, pin lithium trên xe điện — cấu tạo, cách sạc và tuổi thọ.', ['ắc quy xe máy', 'ắc quy khô', 'pin xe điện', 'sạc ắc quy', 'tuổi thọ pin']),
      H('thuat-ngu-xe', 'Thuật ngữ xe', 'Từ điển thuật ngữ.', 'Giải nghĩa các thuật ngữ kỹ thuật xe máy bằng tiếng Việt — từ "tuabin" đến "côn", từ "CVT" đến "mô-men xoắn".', ['thuật ngữ xe máy', 'từ điển xe máy', 'mô men xoắn', 'côn là gì', 'cvt là gì']),
    ]),

  P('learn', 'Kiến thức chuyên sâu',
    'Kỹ thuật lái xe, chăm sóc xe, đọc thông số và pháp lý.',
    'Kiến thức chuyên sâu cho người muốn hiểu rõ hơn: kỹ thuật lái xe, chăm sóc xe, đọc hiểu thông số kỹ thuật, chẩn đoán lỗi, kiến thức pháp lý và kiến thức xe điện.',
    [
      H('ky-thuat-lai-xe', 'Kỹ thuật lái xe', 'Kỹ năng lái xe nâng cao.', 'Vào cua, phanh khẩn cấp, lái xe đường trơn, chở người ngồi sau — kỹ thuật lái an toàn ở các tình huống thực tế.', ['kỹ thuật lái xe máy', 'phanh khẩn cấp', 'vào cua an toàn', 'lái xe đường mưa', 'chở người ngồi sau']),
      H('cham-soc-xe', 'Chăm sóc xe', 'Chăm sóc xe lâu dài.', 'Rửa xe đúng cách, để xe nơi hợp lý, chống rỉ sét và thói quen giữ xe bền qua các năm.', ['chăm sóc xe máy', 'rửa xe đúng cách', 'chống rỉ sét xe', 'giữ xe bền', 'để xe nơi ẩm']),
      H('doc-thong-so', 'Đọc thông số', 'Đọc hiểu thông số kỹ thuật.', 'Công suất, mô-men xoắn, kích thước lốp, tỷ số truyền — cách đọc bảng thông số và hiểu ý nghĩa thực tế.', ['đọc thông số xe', 'công suất mô men xoắn', 'tỷ số truyền', 'bảng thông số xe', 'kích thước lốp']),
      H('chuan-doan-loi', 'Chẩn đoán lỗi', 'Chẩn đoán lỗi từ dấu hiệu.', 'Tiếng kêu, rung, mùi, khói — phương pháp chẩn đoán sự cố xe từ dấu hiệu bên ngoài trước khi đến thợ.', ['chẩn đoán lỗi xe', 'xe kêu lạch cạch', 'xe rung bất thường', 'xe ra khói', 'xe có mùi khét']),
      H('kien-thuc-phap-ly', 'Kiến thức pháp lý', 'Pháp lý giao thông xe.', 'Luật giao thông, mức xử phạt, điều kiện lái xe, bảo hiểm bắt buộc — kiến thức pháp lý người điều khiển xe cần nắm.', ['luật giao thông đường bộ', 'xử phạt vi phạm', 'bảo hiểm trách nhiệm', 'điều kiện lái xe máy', 'giấy tờ khi lái xe']),
      H('kien-thuc-xe-dien', 'Kiến thức xe điện', 'Nền tảng về xe điện.', 'Động cơ điện, pin, sạc, phạm vi — nền tảng kiến thức để hiểu và chọn xe điện tại Việt Nam.', ['xe điện là gì', 'động cơ xe điện', 'pin lithium', 'sạc xe điện', 'xe điện việt nam']),
    ]),

  P('moto', 'Xe máy',
    'Kiến thức về các dòng xe máy: Honda, Yamaha, Suzuki, SYM, Piaggio và các loại xe.',
    'Kiến thức về xe máy tại Việt Nam: các hãng Honda, Yamaha, Suzuki, SYM, Piaggio, phân khúc xe 50cc, xe số, xe ga, xe côn tay — thông số, vận hành và đặc điểm từng dòng.',
    [
      H('honda', 'Honda', 'Kiến thức về các dòng xe máy Honda tại Việt Nam.', 'Honda chiếm phần lớn thị trường xe máy Việt Nam: Vision, Air Blade, Future, SH, Wave — thông số, đặc điểm và vị trí từng dòng trong thị trường.', ['honda vision', 'honda air blade', 'honda sh', 'honda wave', 'xe honda việt nam']),
      H('yamaha', 'Yamaha', 'Kiến thức về các dòng xe máy Yamaha.', 'Grande, FreeGo, Sirius, Janus — kiến thức về các dòng xe Yamaha và phong cách khác biệt của hãng.', ['yamaha grande', 'yamaha freego', 'yamaha sirius', 'xe yamaha', 'janus']),
      H('suzuki', 'Suzuki', 'Kiến thức về các dòng xe máy Suzuki.', 'Raider, Address, GD — kiến thức về các dòng xe Suzuki tại Việt Nam và đặc điểm thiết kế thể thao.', ['suzuki raider', 'suzuki address', 'xe suzuki', 'suzuki gd', 'suzuki việt nam']),
      H('sym', 'SYM', 'Kiến thức về các dòng xe SYM.', 'Angela, Elegant, Excel — kiến thức về các dòng xe SYM và vị trí của hãng trong phân khúc phổ thông.', ['sym angela', 'sym elegant', 'xe sym', 'sym excel', 'sym việt nam']),
      H('piaggio', 'Piaggio', 'Kiến thức về các dòng xe Piaggio và Vespa.', 'Vespa, Liberty, Medley — kiến thức về dòng xe scooter châu Âu và đặc điểm riêng của Piaggio tại Việt Nam.', ['piaggio liberty', 'vespa', 'piaggio medley', 'xe piaggio', 'scooter ý']),
      H('xe-50cc', 'Xe 50cc', 'Kiến thức nhóm xe 50cc.', 'Xe 50cc có cần bằng lái không, quy định hiện hành và đặc điểm nhóm xe dưới 50cc tại Việt Nam.', ['xe 50cc', 'xe dưới 50cc cần bằng lái', 'quy định xe 50cc', 'xe điện dưới 50cc', 'xe 50cc cho học sinh']),
      H('xe-so', 'Xe số', 'Kiến thức về xe số.', 'Wave, Sirius, Blade — ưu điểm của xe số: bền, nhẹ, tiết kiệm và dễ sửa; phù hợp với người cần xe đi lại thuần.', ['xe số', 'wave alpha', 'xe số hay xe ga', 'ưu điểm xe số', 'xe số 110']),
      H('xe-ga', 'Xe ga', 'Kiến thức về xe ga.', 'Vision, Grande, Air Blade — đặc điểm xe ga: cốp xe, CVT, cách dùng và bảo dưỡng khác xe số chỗ nào.', ['xe ga', 'xe ga 110cc', 'xe ga 125cc', 'cvt xe ga', 'bảo dưỡng xe ga']),
      H('xe-con-tay', 'Xe côn tay', 'Kiến thức về xe côn tay.', 'Winner X, Raider RCK — nhóm xe côn tay thể thao: cấu tạo, cách lái và đối tượng phù hợp.', ['xe côn tay', 'winner x', 'raider rck', 'cách lái xe côn', 'xe thể thao việt nam']),
    ]),

  P('ride', 'Hành trình',
    'Cung đường, du lịch xe máy, đi phượt và kỹ năng lái xe an toàn.',
    'Hành trình với xe máy: cung đường trong cả nước, du lịch xe máy, đi phượt, kỹ năng đường dài, lái xe trong thành phố và an toàn giao thông.',
    [
      H('cung-duong', 'Cung đường', 'Các cung đường nổi tiếng.', 'Tổng quan các cung đường xe máy quen thuộc — từ đường ven biển đến đường miền núi phía bắc — và đặc điểm từng cung.', ['cung đường xe máy', 'phượt miền bắc', 'đường ven biển', 'cung đường núi', 'du lịch đường dài']),
      H('du-lich-xe-may', 'Du lịch xe máy', 'Du lịch bằng xe máy.', 'Chuẩn bị hành trang, thuê xe địa phương, lịch trình và an toàn khi du lịch bằng xe máy.', ['du lịch xe máy', 'thuê xe du lịch', 'chuẩn bị đi phượt', 'lịch trình du lịch', 'du lịch tự túc']),
      H('di-phuot', 'Đi phượt', 'Kỹ năng đi phượt.', 'Đi phượt an toàn: đi theo đoàn, giữ khoảng cách, xử lý thời tiết xấu và những quy tắc bất thành văn.', ['đi phượt', 'phượt đoàn', 'đi phượt mưa', 'an toàn khi phượt', 'kỹ năng phượt']),
      H('lai-xe-duong-dai', 'Lái xe đường dài', 'Kỹ năng đường dài.', 'Mệt mỏi, điểm dừng, tốc độ hợp lý và chuẩn bị xe trước chuyến đường dài.', ['lái xe đường dài', 'chạy xe đường trường', 'mệt mỏi khi lái', 'chuẩn bị xe đường dài', 'tốc độ đường trường']),
      H('lai-xe-trong-thanh-pho', 'Lái xe trong thành phố', 'Kỹ năng đô thị.', 'Luồn lách an toàn, giữ khoảng cách, xử lý giờ cao điểm và giao thông đông đúc trong các thành phố lớn.', ['lái xe trong thành phố', 'luồn lách an toàn', 'giờ cao điểm', 'giao thông hà nội', 'lái xe đô thị']),
      H('an-toan-giao-thong', 'An toàn giao thông', 'An toàn cho mọi hành trình.', 'Mũ bảo hiểm đạt chuẩn, quy tắc cơ bản, tầm nhìn và những thói quen giữ an toàn mỗi khi ra đường.', ['an toàn giao thông', 'mũ bảo hiểm đạt chuẩn', 'quy tắc giao thông', 'tầm nhìn khi lái', 'an toàn xe máy']),
    ]),

  P('tips', 'Mẹo',
    'Mẹo thực dụng: lái xe, tiết kiệm xăng, bảo dưỡng, mua và thuê xe.',
    'Mẹo thực dụng súc tích cho người dùng xe hằng ngày: mẹo lái xe, tiết kiệm xăng, bảo dưỡng, mua xe, thuê xe và xử lý sự cố nhanh.',
    [
      H('meo-lai-xe', 'Mẹo lái xe', 'Mẹo lái xe thực dụng.', 'Những mẹo nhỏ giúp lái xe êm hơn, an toàn hơn và đỡ mệt hơn trên mọi chặng đường.', ['mẹo lái xe', 'lái xe êm', 'lái xe đỡ mệt', 'mẹo vào cua', 'lái xe an toàn']),
      H('meo-tiet-kiem-xang', 'Mẹo tiết kiệm xăng', 'Mẹo giảm hao xăng.', 'Tốc độ tiết kiệm, ép xe đúng cách, bảo dưỡng ảnh hưởng hao xăng và thói quen giúp giảm tiêu hao nhiên liệu.', ['tiết kiệm xăng', 'xe hao xăng', 'tốc độ tiết kiệm', 'giảm hao xăng', 'ép xe đúng cách']),
      H('meo-bao-duong', 'Mẹo bảo dưỡng', 'Mẹo bảo dưỡng rẻ.', 'Bảo dưỡng nhỏ tự làm: vệ sinh lọc gió, đo áp suất lốp, giữ ắc quy — việc rẻ cứu xe đắt.', ['mẹo bảo dưỡng', 'vệ sinh lọc gió', 'đo áp suất lốp', 'giữ ắc quy', 'bảo dưỡng tự làm']),
      H('meo-mua-xe', 'Mẹo mua xe', 'Mẹo khi mua xe.', 'Mua mới mua cũ: thời điểm mua, kiểm tra xe, mặc giá và những điều cần hỏi trước khi xuống tiền.', ['mẹo mua xe', 'kiểm tra xe cũ', 'mặc giá xe', 'thời điểm mua xe', 'mua xe trả góp']),
      H('meo-thue-xe', 'Mẹo thuê xe', 'Mẹo khi thuê xe.', 'Chụp ảnh xe, hỏi rõ điều khoản, kiểm tra thử đề — những mẹo giúp chuyến thuê xe suôn sẻ và tránh tranh chấp.', ['mẹo thuê xe', 'thuê xe cần hỏi gì', 'kiểm tra xe thuê', 'tránh tranh chấp khi thuê xe', 'chụp ảnh xe thuê']),
      H('meo-xu-ly-su-co', 'Mẹo xử lý sự cố', 'Mẹo xử lý nhanh.', 'Xe không nổ, quên chìa, lốp non nhanh — mẹo xử lý tại chỗ khi gặp sự cố giữa đường.', ['xe không nổ xử lý', 'lốp non nhanh', 'xe chết máy', 'mẹo cứu xe', 'sự cố giữa đường']),
    ]),

  P('docs', 'Tài liệu',
    'Hướng dẫn sử dụng, checklist, quy trình bảo dưỡng và biểu mẫu thủ tục.',
    'Tài liệu tham khảo dạng quy trình: hướng dẫn sử dụng, checklist, quy trình bảo dưỡng, thông số kỹ thuật, biểu mẫu và tài liệu tham khảo — viết dưới dạng tài liệu dùng lại được.',
    [
      H('huong-dan-su-dung', 'Hướng dẫn sử dụng', 'Hướng dẫn sử dụng từng loại xe.', 'Hướng dẫn vận hành xe số, xe ga, xe điện — từ nổ máy, đề pa đến những chức năng đặc thù từng loại.', ['hướng dẫn sử dụng xe máy', 'cách đề xe ga', 'hướng dẫn xe điện', 'vận hành xe số']),
      H('checklist', 'Checklist', 'Danh sách kiểm tra chuẩn.', 'Checklist nhận xe thuê, checklist trước chuyến đi đường dài, checklist bảo dưỡng định kỳ — dùng lại được nhiều lần.', ['checklist nhận xe', 'checklist đường dài', 'checklist bảo dưỡng', 'danh sách kiểm tra xe']),
      H('quy-trinh-bao-duong', 'Quy trình bảo dưỡng', 'Quy trình bảo dưỡng chuẩn.', 'Quy trình từng hạng mục bảo dưỡng theo số km: nhớt, lọc, bugi, xiên, ắc quy — theo trình tự thợ chuyên nghiệp.', ['quy trình bảo dưỡng', 'bảo dưỡng 1000km', 'quy trình thay dầu', 'bảo dưỡng 5000km', 'quy trình chuyên môn']),
      H('thong-so-ky-thuat', 'Thông số kỹ thuật', 'Bảng thông số kỹ thuật.', 'Bảng thông số các dòng xe: kích thước, động cơ, công suất, dung tích bình — dạng tài liệu tra cứu.', ['thông số xe máy', 'bảng thông số', 'thông số động cơ', 'kích thước xe', 'tra cứu thông số']),
      H('bieu-mau-thu-tuc', 'Biểu mẫu thủ tục', 'Biểu mẫu và giấy tờ.', 'Các loại biểu mẫu, giấy tờ cần chuẩn bị cho thủ tục xe — mô tả cấu trúc và mục cần điền.', ['biểu mẫu thủ tục xe', 'giấy tờ đăng ký xe', 'hợp đồng thuê xe mẫu', 'giấy tờ sang tên']),
      H('tai-lieu-tham-khao', 'Tài liệu tham khảo', 'Tài liệu tham khảo tổng hợp.', 'Tài liệu tổng hợp để đọc sâu: nguyên lý kỹ thuật, quy định pháp lý và hướng dẫn chính hãng.', ['tài liệu kỹ thuật xe', 'tài liệu tham khảo', 'hướng dẫn chính hãng', 'sách kỹ thuật xe máy']),
    ]),

  P('news', 'Tin tức',
    'Tin thị trường xe, xe mới, xe điện, chính sách và giá xe.',
    'Tin tức có ghi rõ ngày cập nhật về thị trường xe, xe mới ra mắt, xe điện, chính sách pháp lý, giá xe và công nghệ — không evergreen hóa thông tin lỗi thời.',
    [
      H('thi-truong-xe', 'Thị trường xe', 'Thị trường xe Việt Nam.', 'Diễn biến thị trường xe máy, xe điện Việt Nam — doanh số, xu hướng và bối cảnh cạnh tranh giữa các hãng.', ['thị trường xe máy', 'doanh số xe', 'thị trường xe điện', 'cạnh tranh hãng xe']),
      H('xe-moi', 'Xe mới', 'Xe mới ra mắt.', 'Các mẫu xe mới ra mắt tại Việt Nam — thông tin công bố của hãng kèm ngày rõ ràng.', ['xe mới ra mắt', 'xe mới 2026', 'mẫu xe mới việt nam', 'ra mắt xe máy']),
      H('xe-dien', 'Xe điện', 'Tin xe điện.', 'Tin về xe điện: mẫu mới, pin, trạm sạc và chính sách khuyến khích xe điện tại Việt Nam.', ['xe điện việt nam', 'tin xe điện', 'trạm sạc xe điện', 'chính sách xe điện']),
      H('chinh-sach-phap-ly', 'Chính sách pháp lý', 'Tin chính sách pháp lý.', 'Thay đổi quy định, nghị định, thông tư liên quan xe máy và giao thông — cập nhật theo ngày hiệu lực.', ['quy định xe máy mới', 'nghị định giao thông', 'chính sách đăng ký xe', 'thay đổi luật giao thông']),
      H('gia-xe', 'Giá xe', 'Tin biến động giá.', 'Biến động giá niêm yết và giá thực tế tại đại lý — luôn kèm mốc thời gian của thông tin.', ['giá xe hôm nay', 'biến động giá xe', 'giá đại lý', 'giá niêm yết']),
      H('cong-nghe-xe', 'Công nghệ xe', 'Công nghệ trên xe.', 'Công nghệ mới trên xe máy và xe điện: ABS, phun xăng điện tử, kết nối thông minh — giải thích dễ hiểu.', ['công nghệ xe máy', 'abs là gì', 'phun xăng điện tử', 'xe kết nối thông minh']),
    ]),

  P('local', 'Địa phương',
    'Kiến thức xe theo địa phương: Hà Nội, TP.HCM, Đà Nẵng và các tỉnh thành.',
    'Kiến thức xe theo địa phương: điều kiện giao thông, quy định và đặc thù từng thành phố — Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Hải Phòng, Cần Thơ và các tỉnh thành. Không doorway page: mỗi trang cần giá trị địa phương thực.',
    [
      H('ha-noi', 'Hà Nội', 'Kiến thức xe tại Hà Nội.', 'Giao thông Hà Nội: giờ cao điểm, đường cấm xe máy, thời tiết bốn mùa và những đặc thù khi đi xe tại thủ đô.', ['giao thông hà nội', 'đường cấm xe máy hà nội', 'thuê xe hà nội', 'đi xe ở hà nội', 'giờ cao điểm hà nội']),
      H('tp-hcm', 'TP. Hồ Chí Minh', 'Kiến thức xe tại TP. Hồ Chí Minh.', 'Giao thông TP. Hồ Chí Minh: mưa chiều, ngập cục bộ, xu hướng xe điện và đặc thù đô thị phương Nam.', ['giao thông tp hcm', 'thuê xe tp hcm', 'ngập đường sài gòn', 'đi xe ở sài gòn']),
      H('da-nang', 'Đà Nẵng', 'Kiến thức xe tại Đà Nẵng.', 'Đà Nẵng: đô thị dễ đi, cầu vượt sông, du lịch thuê xe hai bánh và quy định địa phương.', ['thuê xe đà nẵng', 'giao thông đà nẵng', 'du lịch đà nẵng', 'đi xe ở đà nẵng']),
      H('hai-phong', 'Hải Phòng', 'Kiến thức xe tại Hải Phòng.', 'Hải Phòng: giao thông đô thị cảng, đặc thù khí hậu ven biển và những điều cần biết khi đi xe.', ['giao thông hải phòng', 'thuê xe hải phòng', 'đi xe ở hải phòng']),
      H('can-tho', 'Cần Thơ', 'Kiến thức xe tại Cần Thơ.', 'Cần Thơ: đô thị sông nước, cầu lớn, thời tiết miền Tây và đi xe tại đồng bằng.', ['giao thông cần thơ', 'thuê xe cần thơ', 'đi xe ở cần thơ']),
      H('tinh-thanh', 'Tỉnh thành', 'Các tỉnh thành khác.', 'Kiến thức xe theo từng tỉnh thành — từ đô thị trung tâm đến các tỉnh miền núi, với đặc thù địa phương riêng.', ['giao thông các tỉnh', 'đi xe miền núi', 'xe máy nông thôn', 'quy định tỉnh thành']),
      H('quan-huyen', 'Quận huyện', 'Theo quận huyện.', 'Góc nhìn chi tiết theo quận huyện trong các thành phố lớn: khu vực đông xe, điểm đỗ, đặc thù từng khu.', ['giao thông quận huyện', 'đi xe theo quận', 'khu vực đông xe']),
    ]),

  P('map', 'Bản đồ',
    'Bản đồ các điểm tiện ích xác minh được: cây xăng, trạm sạc, sửa xe, bãi đỗ.',
    'Bản đồ các điểm tiện ích cho người đi xe — chỉ bao gồm địa điểm xác minh được, không bịa POI: cây xăng, trạm sạc, điểm sửa xe, bãi đỗ xe, điểm đăng ký xe và điểm thi bằng lái.',
    [
      H('cay-xang', 'Cây xăng', 'Vị trí cây xăng.', 'Cách tra vị trí cây xăng gần nhất, nhóm xăng và những điều cần biết khi tiếp nhiên liệu đường trường.', ['cây xăng gần đây', 'tra cây xăng', 'cây xăng đường trường']),
      H('tram-sac', 'Trạm sạc', 'Vị trí trạm sạc xe điện.', 'Trạm sạc và điểm đổi pin xe điện — cách tra vị trí và lưu ý khi phụ thuộc trạm sạc trên chuyến đi.', ['trạm sạc xe điện', 'đổi pin xe điện', 'tra trạm sạc']),
      H('diem-sua-xe', 'Điểm sửa xe', 'Điểm sửa xe đáng tin.', 'Cách tìm và đánh giá điểm sửa xe: dấu hiệu thợ tin cậy, giá minh bạch và quy trình làm việc.', ['tiệm sửa xe gần đây', 'sửa xe đường bộ', 'thợ sửa xe tin cậy']),
      H('bai-do-xe', 'Bãi đỗ xe', 'Điểm đỗ xe.', 'Bãi đỗ, điểm giữ xe, quy định đỗ xe trong đô thị — những điều cần biết để đỗ xe đúng chỗ.', ['bãi đỗ xe', 'giữ xe máy', 'đỗ xe ở đâu', 'quy định đỗ xe']),
      H('diem-dang-ky-xe', 'Điểm đăng ký xe', 'Điểm đăng ký xe.', 'Cơ quan đăng ký xe: nơi làm thủ tục đăng ký, đăng kiểm, sang tên — tra vị trí và chuẩn bị giấy tờ.', ['đăng ký xe ở đâu', 'cơ quan đăng ký xe', 'nơi làm đăng kiểm']),
      H('diem-thi-bang-lai', 'Điểm thi bằng lái', 'Điểm thi bằng lái.', 'Trung tâm sát hạch giấy phép lái xe: tra vị trí, quy trình và những điều cần chuẩn bị trước ngày thi.', ['sát hạch bằng lái', 'trung tâm thi bằng lái', 'thi bằng lái xe máy']),
    ]),

  P('garage', 'Sửa chữa',
    'Sửa chữa và bảo dưỡng: động cơ, phanh, lốp, điện ắc quy và các lỗi thường gặp.',
    'Kiến thức sửa chữa và bảo dưỡng xe máy: động cơ, phanh, lốp, điện ắc quy, truyền động, phun xăng chế hòa khí, bảo dưỡng định kỳ và các lỗi thường gặp — giúp bạn hiểu vấn đề trước khi đến thợ.',
    [
      H('dong-co', 'Động cơ', 'Sửa chữa động cơ.', 'Máy kêu, máy đuối, ra khói — chẩn đoán và hướng xử lý các vấn đề động cơ xe máy phổ biến.', ['sửa động cơ xe máy', 'máy kêu', 'máy đuối', 'động cơ ra khói', 'két máy nóng']),
      H('phanh', 'Phanh', 'Hệ thống phanh: đĩa, tang trống và xử lý sự cố.', 'Phanh là bộ phận an toàn sống còn. Hub này tổng hợp kiến thức phanh đĩa, phanh tang trống, cách nhận biết phanh mòn và xử lý khi xe bị bó phanh hoặc hụt phanh.', ['xe bị bó phanh', 'phanh kêu rít', 'thay má phanh', 'phanh đĩa', 'phanh tang trống', 'hụt phanh']),
      H('lop', 'Lốp', 'Lốp xe và thay lốp.', 'Lốp mòn, lốp nứt, vá lốp không săng và thời điểm thay — kiến thức về nhóm bộ phận duy nhất chạm đường.', ['thay lốp xe máy', 'vá lốp không săng', 'lốp mòn', 'chọn lốp xe', 'lốp nứt']),
      H('dien-ac-quy', 'Điện ắc quy', 'Điện và ắc quy xe.', 'Đề không nổ, đèn mờ, còi yếu — chẩn đoán ắc quy và hệ thống điện, kèm cách xử lý từng tình huống.', ['ắc quy yếu', 'đề không nổ', 'đèn xe mờ', 'sạc ắc quy', 'hệ thống điện xe']),
      H('truyen-dong', 'Truyền động', 'Hộp số và truyền động.', 'Bi êm, nhíp, xích và dây côn — nhóm bộ phận truyền lực của xe số và xe ga.', ['bi êm xe ga', 'thay nhíp xe', 'xích xe số', 'dây côn', 'hộp số cvt']),
      H('phun-xang-che-hoa-khi', 'Phun xăng chế hòa khí', 'Phun xăng và chế hòa khí.', 'Bugi, gió hòa, vòi phun — hệ thống cung cấp nhiên liệu và cách nhận biết khi xe hao xăng bất thường.', ['vệ sinh bugi', 'gió hòa', 'vòi phun xăng', 'xe hao xăng', 'chế hòa khí']),
      H('bao-duong-dinh-ky', 'Bảo dưỡng định kỳ', 'Bảo dưỡng theo chu kỳ.', 'Lịch bảo dưỡng theo số km — hạng mục nào làm ở mốc nào và vì sao, để bạn không bị làm quá dịch vụ.', ['lịch bảo dưỡng', 'bảo dưỡng 3000km', 'dịch vụ bảo dưỡng', 'mốc bảo dưỡng xe']),
      H('loi-thuong-gap', 'Lỗi thường gặp', 'Các lỗi xe hay gặp.', 'Thư mục lỗi hay gặp theo dòng xe và tình huống — điểm khởi đầu khi xe có dấu hiệu bất thường.', ['lỗi xe máy thường gặp', 'xe máy kêu rít', 'xe giật cục', 'máy nóng bất thường']),
    ]),

  P('market', 'Thị trường',
    'Giá xe mới, xe cũ, phụ tùng, chi phí sử dụng và xu hướng thị trường.',
    'Giá và thị trường xe máy Việt Nam: cách đọc giá xe mới, giá xe cũ, giá phụ tùng, chi phí sử dụng, khấu hao và xu hướng — mô tả cơ chế giá thay vì con số chết.',
    [
      H('gia-xe-moi', 'Giá xe mới', 'Cách đọc và hiểu giá xe mới tại Việt Nam.', 'Giá công bố, giá đại lý, chi phí lăn bánh — cấu trúc con số khi mua xe mới và cách so sánh đúng giữa các nơi bán.', ['giá xe máy mới', 'giá lăn bánh', 'phí trước bạ', 'so giá xe', 'bảng báo giá']),
      H('gia-xe-cu', 'Giá xe cũ', 'Giá xe đã qua sử dụng.', 'Cách định giá xe cũ: đời xe, số km, tình trạng và khung tham chiếu — mô tả cơ chế giá xe cũ.', ['giá xe cũ', 'định giá xe cũ', 'xe cũ đời nào đáng mua', 'so giá xe cũ']),
      H('gia-phu-tung', 'Giá phụ tùng', 'Giá phụ tùng và thay thế.', 'Phụ tùng chính hãng, phụ tùng thải, cách so giá và nhận biết phụ tùng kém chất lượng.', ['giá phụ tùng', 'phụ tùng chính hãng', 'phụ tùng thải', 'so giá phụ tùng', 'giá lốp']),
      H('chi-phi-su-dung', 'Chi phí sử dụng', 'Chi phí vận hành xe.', 'Xăng, bảo dưỡng, lốp, ắc quy, phí — khung tính chi phí sử dụng xe máy theo năm để tự lập kế hoạch.', ['chi phí sử dụng xe máy', 'chi phí xăng', 'chi phí bảo dưỡng', 'tính chi phí xe']),
      H('khau-hao', 'Khấu hao', 'Khấu hao giá trị xe.', 'Giá trị xe giảm theo thời gian ra sao, dòng nào giữ giá và khung suy nghĩ khi mua để bán lại.', ['khấu hao xe máy', 'xe giữ giá', 'giá trị bán lại', 'xe nào giữ giá tốt']),
      H('mua-ban-xe-cu', 'Mua bán xe cũ', 'Giao dịch xe cũ.', 'Kiểm tra xe cũ, giấy tờ sang tên, thủ tục công chứng và những cạm bẫy khi mua bán xe đã qua sử dụng.', ['mua bán xe cũ', 'kiểm tra xe cũ', 'sang tên xe cũ', 'công chứng xe máy', 'lừa đảo xe cũ']),
      H('xu-huong-thi-truong', 'Xu hướng thị trường', 'Xu hướng thị trường xe.', 'Chuyển dịch xe điện, thay đổi thị hiếu, tác động chính sách — xu hướng dài hạn của thị trường xe Việt Nam.', ['xu hướng xe điện', 'thị trường xe việt nam', 'thị hiếu xe máy', 'tương lai xe máy']),
    ]),

  P('review', 'Đánh giá',
    'Đánh giá và so sánh xe, phụ tùng, mũ bảo hiểm, lốp, dầu nhớt.',
    'Đánh giá và so sánh: xe, phụ tùng, mũ bảo hiểm, lốp, dầu nhớt, xe điện — tiêu chí rõ ràng, khách quan và theo trải nghiệm thực tế, không khen theo quảng cáo.',
    [
      H('review-xe', 'Đánh giá xe', 'Đánh giá các dòng xe.', 'Đánh giá từng dòng xe theo tiêu chí nhất quán: vận hành, tiện ích, chi phí và đối tượng phù hợp.', ['đánh giá xe máy', 'review vision', 'review air blade', 'đánh giá xe ga']),
      H('so-sanh-xe', 'So sánh xe', 'So sánh các dòng xe.', 'So sánh trực tiếp các dòng xe cùng phân khúc — bảng so sánh theo tiêu chí, cho từng đối tượng người dùng khác nhau.', ['so sánh xe máy', 'vision hay grande', 'xe số hay xe ga', 'so sánh 125cc']),
      H('review-phu-tung', 'Đánh giá phụ tùng', 'Đánh giá phụ tùng.', 'Đánh giá nhóm phụ tùng: chính hãng, thải, phổ thông — tiêu chí chọn theo túi tiền và nhu cầu.', ['review phụ tùng', 'phụ tùng hãng hay thải', 'đánh giá phụ kiện xe']),
      H('review-mu-bao-hiem', 'Đánh giá mũ bảo hiểm', 'Đánh giá mũ bảo hiểm.', 'Mũ half, mũ full, tiêu chuẩn an toàn và đánh giá trải nghiệm thực tế các dòng mũ phổ biến.', ['mũ bảo hiểm loại nào tốt', 'mũ half hay full', 'tiêu chuẩn mũ bảo hiểm', 'review mũ bảo hiểm']),
      H('review-lop', 'Đánh giá lốp', 'Đánh giá lốp xe.', 'Lốp săng truyền thống, lốp không săng, các dòng lốp phổ biến — đánh giá theo bám đường, bền và giá.', ['review lốp xe máy', 'lốp nào bền', 'lốp bám đường', 'chọn lốp']),
      H('review-dau-nhot', 'Đánh giá dầu nhớt', 'Đánh giá dầu nhớt.', 'Đánh giá các dòng dầu nhớt theo độ đặc và đặc tính — cách chọn theo dòng xe và cách chạy.', ['review dầu nhớt', 'dầu nhớt loại nào tốt', 'chọn dầu theo xe', 'độ đặc dầu nhớt']),
      H('review-xe-dien', 'Đánh giá xe điện', 'Đánh giá xe điện.', 'Đánh giá xe điện: pin, phạm vi, chi phí và độ bền — bao gồm cả dòng xe điện phổ biến tại Việt Nam.', ['đánh giá xe điện', 'review xe điện', 'xe điện nào đáng mua', 'xe điện tầm giá']),
    ]),
];

module.exports = { CATEGORIES };
