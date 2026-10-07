module.exports = {
  slug: 'bang-thong-so',
  title: 'Hướng dẫn chi tiết về bảng thông số',
  seoTitle: 'Bảng thông số xe máy: cách đọc chi tiết',
  metaDescription: 'Hướng dẫn chi tiết cách đọc bảng thông số xe máy: các cột, đơn vị, ký hiệu thường gặp, chỗ tìm bảng chính thức và cách so sánh hai bảng thông số giữa các dòng xe.',
  summary: 'Hướng dẫn chi tiết về bảng thông số xe máy — bảng thông số là tài liệu ngắn nhất và chứa nhiều thông tin nhất về một chiếc xe: hai mươi dòng chữ và con số tóm tắt toàn bộ tính cách kỹ thuật của chiếc xe. Nhưng bảng chỉ nói chuyện với người biết đọc: cột nào là số đo, cột nào là ghi chú; đơn vị nào dễ nhầm (milimét hay centimét, ký lô hay cân); ký hiệu nào là viết tắt chuẩn của ngành; và đâu là bảng chính thức — bảng trong sách hướng dẫn của hãng — đâu là bảng đã qua chỉnh sửa của tin rao. Bài viết này đi từng phần của một bảng thông số chuẩn: nhóm thông số tổng thể, nhóm động cơ và truyền động, nhóm khung và vận hành, nhóm tiêu thụ; giải thích các cột và đơn vị hay gặp; chỉ cách nhận bảng gốc của hãng; và hướng dẫn quy trình so sánh hai bảng thông số khi cân nhắc hai dòng xe — so từng cột cùng thứ tự, ghi chênh lệch, và hiểu mỗi chênh lệch nói gì. Người mới đọc xong sẽ mở bất kỳ bảng thông số nào và biết trong ba mươi giây con số nào đáng đọc cho mình.',
  quickAnswer: 'Đọc bảng thông số xe máy theo bốn bước. Bước một — xác nhận bảng gốc: bảng chính thức nằm trong sách hướng dẫn hoặc tài liệu kỹ thuật của hãng; bảng trong tin rao có thể đã cắt cột hoặc làm tròn số. Bước hai — đọc theo nhóm: tổng thể (dài rộng cao, trục bánh, trọng lượng, chiều cao yên), động cơ (loại máy, dung tích, đường kính xilanh và hành trình piston, công suất, mô men), truyền động (ly hợp, số cấp, tỷ số, kiểu khởi động), vận hành (bình xăng, tiêu hao, khoảng sáng gầm, phanh, lốp). Bước ba — kiểm tra đơn vị mỗi cột: milimét với centimét, ký với lít, mã lực với kilo oát — đổi về cùng một đơn vị trước khi so hai bảng. Bước bốn — so từng cột cùng thứ tự giữa hai xe, ghi ba đến năm chênh lệch lớn nhất, và đọc mỗi chênh lệch theo nhu cầu mình: yên, trọng lượng, mô men, bình xăng. Bốn bước đó biến bảng chữ và số thành bản mô tả tính cách của hai chiếc xe — và chọn xe trở thành việc của dữ liệu thay vì của cảm giác.',
  keyPoints: [
    'Bảng gốc là bảng trong sách hướng dẫn của hãng — bảng trong tin rao có thể bị cắt cột hoặc làm tròn.',
    'Đọc theo bốn nhóm: tổng thể, động cơ, truyền động, vận hành — mỗi nhóm trả một câu hỏi khác nhau.',
    'Kiểm tra đơn vị từng cột trước khi so sánh — milimét với centimét, ký với lít là hai chỗ nhầm phổ thông nhất.',
    'Đường kính xilanh nhân hành trình piston cho biết máy kiểu dài hay vuông — cơ sở của tính cách kéo ga.',
    'So hai bảng bằng cách đặt cạnh từng cột cùng thứ tự, ghi ba đến năm chênh lệch lớn nhất và đọc theo nhu cầu mình.',
    'Các cột ghi chú như \"tùy phiên bản\" cần xác nhận lại với chính xác phiên bản xe bán cho mình.',
  ],
  category: 'docs',
  hub: 'thong-so-ky-thuat',
  date: '2026-10-07',
  updated: '2026-10-07',
  entities: [
    'bảng thông số',
    'thông số kỹ thuật',
    'đơn vị đo lường',
    'so sánh thông số',
    'sách hướng dẫn xe',
  ],
  keywords: [
    'bang thong so xe may',
    'cach doc bang thong so',
    'thong so ky thuat xe may',
    'so sanh thong so xe may',
    'don vi thong so xe may',
  ],
  sections: [
    {
      h2: 'Bảng gốc ở đâu và vì sao phải dùng bảng gốc',
      html: `<p>Mỗi chiếc xe có một bảng thông số chính thức — nhưng bảng đó không nằm trong tin rao xe, nó nằm trong sách hướng dẫn sử dụng hoặc tài liệu kỹ thuật của hãng. Bảng gốc có ba đặc điểm nhận dạng: ghi rõ dòng xe và phiên bản, ghi đơn vị đầy đủ ở từng cột, và có những cột nhà rao hay lược đi — khoảng sáng gầm, tỷ số truyền động, cỡ lốp cụ thể. Một tin rao còn nguyên cột khoảng sáng gầm là tin rao copy bảng gốc — chi tiết nhỏ nhưng đáng tin.</p>
<p>Vì sao việc bảng gốc lại quan trọng? Vì bảng qua chỉnh sửa là bảng đã mất thông tin theo hướng có lợi cho người bán: làm tròn trọng lượng xuống, ghi mức tiêu hao đẹp nhất, bỏ cột không có gì nổi bật. Đó không phải là nói dối — đó là chọn lọc, và người mua cần chọn ngược lại: tự mở bảng gốc để thấy phần bị chọn lọc. May là bảng gốc của đa số dòng xe phổ thông đều tìm được trên trang chính thức của hãng — vài phút tìm là có bản đầy đủ.</p>
<p>Một chú ý nhỏ về phiên bản: cùng một dòng xe thường có vài phiên bản — phanh đĩa hoặc phanh trống, bản thường và bản cao cấp — và bảng thông số giữa các phiên bản chênh nhau vài cột. Nhìn kỹ dòng ghi \"tùy phiên bản\" hoặc \"bản cao cấp\" và xác nhận với người bán đúng phiên bản xe trước mặt mình, vì bảng đúng dòng mà sai phiên bản vẫn dẫn so sánh lệch.</p>`,
    },
    {
      h2: 'Nhóm tổng thể và động cơ: các cột và đơn vị',
      html: `<p>Nhóm tổng thể gồm các cột kích thước: dài, rộng, cao — đo bằng milimét, ghi rõ cả khoảng cách trục bánh và khoảng sáng gầm. Trọng lượng có hai con số hay nhầm: trọng lượng khô (không xăng không dầu) và trọng lượng đủ trang bị (xăng đầy) — chênh nhau vài ký và với người dùng, con số đủ trang bị là con số thật. Chiều cao yên là cột riêng, ghi bằng milimét — đổi ra centimét cho dễ hình dung khi so với chiều cao chân mình.</p>
<p>Nhóm động cơ mở đầu bằng cột kiểu máy — bốn kỳ, làm mát bằng gió hoặc bình làm mát, xy lanh đơn hoặc đôi — rồi tới các cột con số. Dung tích ghi bằng centimét khối. Tiếp theo là hai cột ít người đọc nhưng nói nhiều: đường kính xilanh và hành trình piston, cả hai bằng milimét; hai con số này nhân với nhau theo công thức của máy cho biết máy \"dài\" hay \"vuông\" — máy hành trình dài kéo mạnh ở vòng thấp, máy vuông nhạy ở vòng cao, và đây là nguồn gốc của rất nhiều khác biệt cảm giác ga giữa hai xe cùng dung tích.</p>
<p>Hai cột cuối nhóm động cơ là công suất và mô men, ghi kèm vòng tua đạt đỉnh — hai con số phải đọc theo cặp. Đơn vị công suất là mã lực hoặc kilo oát (một mã lực gần bằng ba phần tư kilo oát); mô men ghi bằng niu tơn mét. Khi so hai bảng khác đơn vị, đổi về cùng một thứ trước — so mã lực với kilo oát trực tiếp là so táo với cam, một lỗi phổ thông đến mức đáng nhắc thành dòng riêng.</p>`,
    },
    {
      h2: 'Nhóm truyền động và vận hành: cột của cảm giác lái',
      html: `<p>Nhóm truyền động gồm: kiểu ly hợp (thường ướt hoặc khô trên xe tay ga là ly hợp tự động), số cấp hộp số (bốn hoặc năm với xe số), tỷ số truyền động của từng cấp — dãy cột dài nhất bảng và ít người đọc hết. Nhưng hai cột đáng dừng: tỷ số cuối và kiểu khởi động (điện hoặc bằng chân đề). Tỷ số truyền động quyết định xe bốc ở đô phố hoặc bền ở đường trường — xe phổ thông chọn tỷ số hợp phố, xe thể thao chọn hợp vòng cao, và đó là vì sao hai xe cùng máy có thể cho hai cảm giác khác hẳn.</p>
<p>Nhóm vận hành gồm: dung tích bình xăng (lít), mức tiêu hao (lít trên trăm cây), phanh trước sau (đĩa hoặc trống, cỡ), cỡ và loại lốp, giảm xóc, và khoảng sáng gầm. Cỡ lốp đáng đọc kỹ — dãy số ví dụ 90/90-14 đọc là bề ngang, chiều cao theo phần trăm bề ngang, và đường kính vành — vì cỡ lốp quyết định mức giá thay và độ sẵn có của lốp trên thị trường, một chi phí dài hạn ít người nhìn khi mua.</p>
<p>Nhóm cuối là các cột vận hành phụ nhưng tiện: tốc độ tối đa công bố, tải trọng cho phép (người và hàng), và với xe điện — dung lượng pin và thời gian sạc. Tải trọng cho phép là cột đáng đọc với người hay chở hai hoặc chở hàng: con số đó là giới hạn kỹ thuật và cũng là điều kiện bảo hành thường được ghi sâu trong tài liệu.</p>`,
    },
    {
      h2: 'So sánh hai bảng thông số: quy trình bốn cột chốt',
      html: `<p>Đặt hai bảng cạnh nhau, bước một là chuẩn hóa: kiểm tra cùng phiên bản, cùng đơn vị, cùng điều kiện công bố — sai lệch nhỏ ở bước này là sai lệch nhân lên ở mọi cột sau. Bước hai: quét nhanh cả bảng để tìm những cột chỉ có ở một bên — phanh đĩa, bình làm mát, khởi động điện — vì cột có mặt ở một bảng nói khác biệt phiên bản rõ hơn mọi con số chênh nhau.</p>
<p>Bước ba: so từng cột cùng thứ tự và ghi ra ba đến năm chênh lệch lớn nhất — không phải mọi chênh lệch, chỉ những chênh đáng kể: mười ký trọng lượng, hai mươi milimét chiều cao yên, chênh mô men rõ ở cùng vòng tua. Ghi chênh lệch ra giấy nhỏ, mỗi dòng một cột: chiều cao yên chênh bao nhiêu, bình xăng chênh bao nhiêu, mô men chênh bao nhiêu. Dòng chữ nhỏ này chính là bản tóm tắt thật của quyết định — và nó luôn ngắn hơn bảng gốc rất nhiều.</p>
<p>Bước bốn — chấm điểm theo nhu cầu: mỗi chênh lệch đọc theo câu hỏi của mình, không theo cột nào lớn hơn. Yên cao hơn hai xen ti mét là tốt hay xấu tùy chân người cưỡi; bình to hơn là nặng thêm khi dắt; mô men cao hơn ở vòng tua thấp là được với phố. Sau bước này, đa số quyết định tự sáng lên — và nếu vẫn cân bằng, đó là tín hiệu đẹp: hai xe đều hợp, chọn chiếc nào bán hàng tử tế hơn.</p>`,
    },
    {
      h2: 'Lỗi đọc bảng thường gặp và cách tránh',
      html: `<p>Lỗi thứ nhất: so công suất mà quên vòng tua — công suất cao hơn ở vòng tua cao hơn có thể thành ì hơn ở phố. Luôn đọc cặp số. Lỗi thứ hai: nhầm trọng lượng khô với đủ trang bị — bảng ghi không chú thích thì tra lại bảng gốc; hai con số chênh vài ký nhưng người dắt xe cảm nhận được. Lỗi thứ ba: đọc mức tiêu hao công bố như lời hứa — đó là số đo điều kiện chuẩn, dùng làm mốc so giữa hai xe thì được, dùng làm lịch đổ xăng thì không.</p>
<p>Lỗi thứ tư: bỏ qua cột cỡ lốp và tải trọng — hai cột chi phí dài hạn, ai cũng nhìn cột mã lực trước và hai cột này sau, dù tiền lốp và tiền giảm xóc là tiền chi thật mỗi năm. Lỗi thứ năm: tin bảng sao chép trên mạng không ghi nguồn — mỗi lần chia sẻ lại có thể cắt cột, làm tròn, hoặc nhập nhầm; quy tắc an toàn là luôn tra lại bảng gốc trên trang hãng trước khi quyết định.</p>
<p>Chốt lại: bảng thông số là tài liệu duy nhất chiếc xe tự nói về mình — đọc đúng thì mọi câu hỏi tiếp theo với người bán đều sắc hơn, mọi chạy thử đều có trọng tâm (thử đúng chỗ bảng chênh), và quyết định mua đứng trên dữ liệu. Kỹ năng đọc bảng mất một buổi chiều để học và dùng cho mọi lần chọn xe về sau — một khoản đầu tư hiệu quả nhất trong danh mục kỹ năng của người cưỡi xe máy.</p>`,
    },
  ],
  checklist: [
    'Tìm bảng gốc trên trang chính thức của hãng trước khi đọc bảng trong tin rao — cột đầy đủ và ghi phiên bản.',
    'Xác nhận đúng phiên bản xe bán cho mình — bảng đúng dòng mà sai phiên bản vẫn so lệch.',
    'Chuẩn hóa đơn vị trước khi so: mã lực với kilo oát, milimét với centimét, ký với cân.',
    'Đọc nhóm động cơ theo cặp: công suất kèm vòng tua, mô men kèm vòng tua, đường kính xilanh kèm hành trình piston.',
    'Đọc kỹ cột trọng lượng đủ trang bị, chiều cao yên và khoảng sáng gầm — ba cột của đời thường.',
    'Ghi lại cỡ lốp và tải trọng cho phép — hai cột chi phí dài hạn ít người nhìn.',
    'So hai bảng: quét cột có một bên, rồi ghi ba đến năm chênh lệch lớn nhất ra giấy.',
    'Chấm chênh lệch theo nhu cầu mình và chuẩn bị câu hỏi chạy thử đúng chỗ bảng chênh.',
  ],
  warnings: [
    'Không so công suất của hai xe mà không nhìn vòng tua đi kèm — công suất đỉnh ở vòng tua khác nhau là so lệch.',
    'Không dùng mức tiêu hao công bố làm lịch đổ xăng — đó là số điều kiện chuẩn, chỉ dùng so giữa hai xe.',
    'Không tin bảng sao chép không ghi nguồn — mỗi lần sao chép là một lần có thể cắt cột hoặc làm tròn sai.',
    'Không bỏ qua ghi chú \"tùy phiên bản\" — xác nhận lại chính xác bản xe trước mặt trước khi so.',
  ],
  notes: [
    'Bảng thông số giữa các thị trường có thể chênh nhẹ (đơn vị, cách ghi tiêu hao) — dùng bảng của thị trường bán xe cho mình.',
    'Xe điện đọc các cột pin, công suất motor và quãng đường sạc đúng cách đọc nhóm động cơ và vận hành của xe xăng.',
  ],
  references: [
    'Tài liệu thông số kỹ thuật chính thức của các nhà sản xuất xe máy phổ thông (2025).',
    'Sổ tay hướng dẫn đọc bảng thông số phương tiện hai bánh và các đơn vị đo lường kỹ thuật (2025).',
    'Tài liệu quy chuẩn công bố thông số vận hành và tiêu thụ nhiên liệu xe máy (2024).',
  ],
  related: [
    'thong-so-xe-may',
    'thong-so-dong-co',
    'tra-cuu-thong-so',
    'kich-thuoc-xe',
    'xe-ga-125cc',
  ],
};
