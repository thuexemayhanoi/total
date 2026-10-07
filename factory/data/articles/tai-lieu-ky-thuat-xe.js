'use strict';

module.exports = {
  slug: 'tai-lieu-ky-thuat-xe',
  title: 'Hướng dẫn chi tiết về tài liệu kỹ thuật xe',
  seoTitle: 'Tài liệu kỹ thuật xe máy: đọc và dùng đúng cách',
  metaDescription: 'Tài liệu kỹ thuật xe máy gồm những gì, cách đọc sách hướng dẫn, sơ đồ mạch điện, bảng thông số và lịch bảo dưỡng để tra cứu chính xác, không sửa sai.',
  summary: 'Tài liệu kỹ thuật xe là tập hợp giấy tờ và ấn phẩm mà nhà sản xuất cung cấp kèm mỗi chiếc xe: cuốn sách hướng dẫn sử dụng, bảng thông số kỹ thuật, sơ đồ mạch điện, lịch bảo dưỡng định kỳ và danh mục phụ tùng. Phần lớn người sở hữu xe chỉ lật cuốn sách khi xe gặp trục trặc, trong khi tài liệu kỹ thuật thực ra là công cụ tra cứu hằng ngày: áp suất lốp bao nhiêu, loại nhớt nào hợp máy, mốc kilômét thay bugi, ý nghĩa từng đèn cảnh báo trên bảng đồng hồ. Bài viết này đi qua từng loại tài liệu kỹ thuật của một chiếc xe máy, chỉ ra nơi chứa thông tin nào, cách đọc bảng biểu và đơn vị đo, phân biệt thông số khuyến nghị với thông số giới hạn, cùng cách cập nhật khi xe đã qua sử dụng nhiều đời chủ. Hiểu được cấu trúc tài liệu, bạn sẽ mất ít thời gian hơn khi trao đổi với thợ sửa chữa, tránh được những lỗi vô tình do tự ý chỉnh cáp ga, nhớt, hoặc thay phụ tùng sai thông số.',
  quickAnswer: 'Tài liệu kỹ thuật xe gồm ba nhóm chính: tài liệu đi kèm xe (sách hướng dẫn sử dụng, sách bảo hành, thẻ phụ tùng), tài liệu tra cứu (bảng thông số kỹ thuật, sơ đồ mạch điện, catalogue phụ tùng) và tài liệu hướng dẫn lịch bảo dưỡng định kỳ theo số kilômét. Cách dùng hiệu quả nhất: đọc lướt toàn bộ mục lục một lần để biết thông tin nằm ở đâu, đánh dấu các trang hay dùng (lốp, nhớt, đèn cảnh báo), luôn ghi chú năm sản xuất và phiên bản xe trước khi tra, và đối chiếu thông số khuyến nghị của hãng thay vì làm theo kinh nghiệm truyền miệng. Khi mua xe cũ thiếu sách, hãy tìm bản điện tử theo chính xác mẫu xe và năm sản xuất, vì cùng một dòng xe nhưng các đời có thể khác nhau về bugi, xích, dung tích nhớt và áp suất lốp.',
  keyPoints: [
    'Sách hướng dẫn sử dụng là tài liệu kỹ thuật quan trọng nhất đi kèm xe: chứa áp suất lốp, loại nhớt, mực xăng, ý nghĩa đèn cảnh báo và cách xử lý sự cố thường gặp.',
    'Bảng thông số kỹ thuật chia làm hai loại: thông số khuyến nghị (làm theo) và thông số giới hạn (ngưỡng phải sửa hoặc thay) — nhầm lẫn giữa hai loại này khiến xe bị chỉnh sai.',
    'Lịch bảo dưỡng định kỳ theo kilômét là xương sống của việc giữ xe bền: mỗi mốc 1000, 4000, 8000 kilômét lại có nhóm hạng mục bắt buộc khác nhau.',
    'Sơ đồ mạch điện chỉ hữu dụng khi đi kèm chú giải ký hiệu và mã màu dây: tra nhầm vị trí cầu chì có thể làm hỏng cả hệ thống điện.',
    'Xe cũ nên tra tài liệu theo năm sản xuất và số khung thay vì theo tên dòng xe, vì cùng một dòng xe nhưng các đời có thể khác nhau về phụ tùng và thông số.',
    'Tra cứu thông tin trên mạng chỉ đáng tin khi đối chiếu được với tài liệu gốc của hãng: blog và diễn đàn thường ghi thông số của đời khác mà người đọc không nhận ra.',
  ],
  category: 'docs',
  hub: 'tai-lieu-tham-khao',
  date: '2026-10-07',
  updated: '2026-10-07',
  entities: ['sách hướng dẫn sử dụng', 'thông số kỹ thuật', 'lịch bảo dưỡng', 'sơ đồ mạch điện', 'catalogue phụ tùng'],
  keywords: ['tai lieu ky thuat xe', 'sach huong dan su dung xe may', 'thong so ky thuat xe', 'lich bao duong xe', 'so do mach dien xe'],
  sections: [
    {
      h2: 'Tài liệu kỹ thuật xe gồm những gì',
      html: `<p>Mỗi chiếc xe máy khi xuất xưởng đi kèm một gói tài liệu mà nhà sản xuất định nghĩa là bắt buộc: cuốn sách hướng dẫn sử dụng, sổ bảo hành có đóng dấu đại lý, và trong nhiều trường hợp là thẻ ghi số máy số khung cùng danh mục phụ tùng tiêu chuẩn. Cuốn sách hướng dẫn là tài liệu dày nhất, thường vài chục trang, chia theo mục từ giới thiệu vị trí các bộ phận, cách vận hành, bảo dưỡng, đến xử lý sự cố.</p>
<p>Bên cạnh gói đi kèm xe là nhóm tài liệu tra cứu chuyên sâu hơn mà hãng công bố cho thợ sửa chữa: bản vẽ lắp ráp tách lớp, sơ đồ mạch điện chi tiết, bảng so sánh phụ tùng giữa các đời xe. Người dùng phổ thông ít khi cần tới mức chi tiết đó, nhưng biết sự tồn tại của chúng giúp bạn yêu cầu đúng thứ khi mang xe đến tiệm: thợ chuyên nghiệp thường có sẵn bản này cho các dòng xe phổ biến.</p>
<p>Loại tài liệu thứ ba xuất hiện trong kỷ nguyên xe điện và xe có bảng điều khiển thông minh: hướng dẫn cập nhật phần mềm, tài liệu kết nối ứng dụng điện thoại, bảng giải thích mã lỗi hiển thị trên màn hình. Nhóm này thay đổi theo phiên bản phần mềm, nên nguyên tắc tra cứu là luôn đối chiếu phiên bản mới nhất từ kênh chính thức của hãng.</p>`,
    },
    {
      h2: 'Cách đọc sách hướng dẫn sử dụng',
      html: `<p>Đa số người đọc sách hướng dẫn theo kiểu tra cứu khi gặp việc: xe khó nổ thì lật trang xử lý sự cố, lốp non thì tìm trang áp suất. Cách đọc hiệu quả hơn là dành một lần đọc lướt toàn bộ mục lục, ghi nhớ từng chương chứa gì, sau đó đánh dấu các trang chắc chắn sẽ dùng lại: bảng áp suất lốp, mực nhớt, ý nghĩa đèn cảnh báo, vị trí cầu chì. Một giờ đọc lướt ban đầu tiết kiệm hàng chục lần lần mò sau này.</p>
<p>Chú ý cách bảng biểu được trình bày: cột thường ghi tải trọng hoặc tốc độ, hàng ghi vị trí bánh trước hoặc sau. Ví dụ áp suất lốp xe tay ga phổ thông thường ghi hai người cỡ 200 đến 225 kilôpascal cho bánh sau, thấp hơn đáng kể khi chỉ chạy một người; bỏ qua chú thích tải trọng là lỗi phổ biến nhất khiến người bơm lốp bị căng nhầm.</p>
<p>Một số mục viết dưới dạng cảnh báo in đậm hoặc đóng khung: đây là phần hãng nhấn mạnh lỗi gây hư hỏng thật sự như dùng nhớt sai cấp, để xe nơi ngập nước, hoặc độ máy ngoài khuyến nghị. Khi đưa xe cho tiệm sửa, nên mang theo sách để đối chiếu thông số thợ đưa ra, nhất là khi thợ làm trên dòng xe ít gặp.</p>`,
    },
    {
      h2: 'Phân biệt thông số khuyến nghị và thông số giới hạn',
      html: `<p>Tài liệu kỹ thuật của xe máy ghi hai loại số mà người mới hay nhầm. Thông số khuyến nghị là giá trị hãng khuyên dùng khi vận hành và bảo dưỡng: áp suất lốp, khe hở bugi, loại nhớt, mực dầu. Thông số giới hạn là ngưỡng mà vượt qua thì chi tiết được coi là mòn hoặc hỏng và phải thay: khe hở piston xilanh tối đa, độ mòn phanh đĩa, biên độ dao động của trục khuỷu.</p>
<p>Ví dụ điển hình: khe hở bugi của nhiều xe số phổ thông khuyến nghị khoảng 0,6 đến 0,8 milimet; số ghi kèm theo như 0,9 milimet tối đa là giới hạn mòn chứ không phải giá trị cài lại. Người thiếu kiến thức đọc lướt có thể cài đúng bằng thickness gauge sai kê, dẫn đến khó nổ và tốn xăng mà không hiểu nguyên nhân.</p>
<p>Tương tự với lốp: tài liệu ghi áp suất khuyến nghị theo tải trọng, còn cỡ lốp ghi trên thành vỏ là giới hạn thay thế được phép. Khi thợ đề xuất thay cỡ khác với bảng tiêu chuẩn, đó là thay đổi ngoài khuyến nghị, ảnh hưởng đến đồng hồ tốc độ và độ cao vô lăng, nên cân nhắc kỹ trước khi đồng ý.</p>`,
    },
    {
      h2: 'Tra cứu cho xe cũ và xe qua nhiều đời chủ',
      html: `<p>Với xe đã qua sử dụng, tài liệu gốc thường bị thất lạc. Cách tra cứu đúng nhất không phải tìm theo tên dòng xe mà tìm theo năm sản xuất và số khung: số khung chứa mã đời máy, giúp xác định chính xác phiên bản xe. Cùng tên một dòng xe bán nhiều năm liên tiếp vẫn có thể thay đổi loại bugi, cỡ xích, dung tích nhớt hoặc kết cấu cốp, nên thông số trích từ bài viết về đời khác áp vào xe của bạn dễ sai lệch.</p>
<p>Nguồn đáng tin cậy để tìm lại sách hướng dẫn cho xe cũ gồm: trang hỗ trợ chính thức của hãng với bản tải điện tử, đại lý ủy quyền lưu hồ sơ theo số khung, và các kho lưu trữ tài liệu do cộng đồng kỹ thuật số hóa kèm chú thích bản gốc. Khi tài liệu gốc không tìm được, bản điện tử của đời sát năm nhất là phương án khả thi nhất, nhưng cần đọc phần thay đổi hàng năm nếu có.</p>
<p>Với xe đã từng thay phụ tùng không đúng chuẩn, tài liệu gốc phản ánh trạng thái xuất xưởng chứ không phản ánh trạng thái thực tế của xe. Trường hợp đó, hãy ghi chú lại toàn bộ thay đổi lên một bản sao của lịch bảo dưỡng, ghi rõ ngày và hạng mục thay để những lần bảo dưỡng sau có đối chiếu, tránh tình trạng nhớt ba loại trộn lẫn hoặc bugi sai cấp mà chủ xe cũng không hay.</p>`,
    },
    {
      h2: 'Giữ và cập nhật tài liệu qua thời gian',
      html: `<p>Tài liệu giấy nên được bảo quản ở nơi khô ráo, tách khỏi cốp xe để tránh ẩm mốc và bị chai dầu; bản sao số của các trang quan trọng lưu trên điện thoại hoặc cloud cá nhân để tra được ngay khi đi đường. Vài trang đáng sao riêng thành bản phụ: bảng thông số, ý nghĩa đèn cảnh báo, lịch bảo dưỡng theo kilômét, vị trí cầu chì và số khung số máy.</p>
<p>Khi hãng công bố bản cập nhật sách hướng dẫn, thường là đính chính thông số hoặc bổ sung hướng dẫn phần mềm trên các mẫu mới, hãy tải bản mới và so sánh phần thay đổi với bản đang giữ. Thói quen nhỏ này giúp bạn không bảo dưỡng theo thông số cũ đã bị hãng đính chính.</p>
<p>Quy trình gợi ý: mỗi lần xe về mốc bảo dưỡng lớn, mở lịch bảo dưỡng ra đối chiếu hạng mục, ghi ngày và số kilômét thực hiện. Cá nhân nào bán xe sau vài năm sẽ có cuốn hồ sơ minh bạch, vừa giữ giá xe vừa giúp người mua tin tưởng hơn về tình trạng bảo dưỡng. Tài liệu kỹ thuật đầy đủ và có ghi chép là minh chứng chăm xe tốt hơn mọi lời kể.</p>`,
    },
  ],
  checklist: [
    'Xác định chính xác mẫu xe, năm sản xuất và số khung trước khi tra bất kỳ thông số nào.',
    'Đọc lướt mục lục sách hướng dẫn một lần và đánh dấu trang áp suất lốp, mực nhớt, ý nghĩa đèn cảnh báo.',
    'Ghi lại thông số khuyến nghị thường dùng vào một trang tóm tắt dán ở nhà hoặc lưu trên điện thoại.',
    'Đối chiếu lịch bảo dưỡng theo kilômét với sổ bảo dưỡng thực tế đã ghi chép mỗi 4000 kilômét.',
    'Kiểm tra bản cập nhật sách hướng dẫn từ kênh chính thức mỗi khi xe đến mốc dịch vụ lớn.',
    'Chụp hoặc lưu bản số các trang quan trọng, bảo quản bản gốc nơi khô thoáng, tách khỏi cốp xe.',
    'Khi thợ đề xuất thay phụ tùng ngoài thông số tiêu chuẩn, yêu cầu ghi rõ loại và thông số mới vào sổ.',
    'Với xe mua lại, hỏi chủ cũ về sách hướng dẫn, sổ bảo dưỡng và các thay đổi từng thực hiện.',
  ],
  warnings: [
    'Không tra thông số trên mạng mà bỏ qua năm sản xuất: cùng một dòng xe nhưng các đời có thể dùng bugi, xích và nhớt khác nhau.',
    'Không coi thông số giới hạn mòn là giá trị cài lại khi bảo dưỡng — hai loại số này không thay thế nhau.',
    'Không để sách hướng dẫn trong cốp xe lâu ngày: nhiệt độ, dầu mỡ và độ ẩm làm hỏng giấy và mờ chữ ở các bảng biểu.',
    'Không tự chỉnh carburator hoặc phun xăng điện tử chỉ theo cảm tính khi tài liệu ghi rõ quy trình đối chiếu khe hở và mã lỗi.',
  ],
  notes: [
    'Thông số trong bài mang tính tham khảo chung cho xe máy phổ thông tại Việt Nam; luôn ưu tiên số liệu trong sách hướng dẫn đi kèm chính xác mẫu xe của bạn.',
    'Bài viết thuộc cụm tài liệu tham khảo, không thay thế hướng dẫn của nhà sản xuất hoặc chẩn đoán của thợ có chứng chỉ.',
  ],
  references: [
    'Sách hướng dẫn sử dụng xe máy của các nhà sản xuất phân phối chính thức tại Việt Nam.',
    'Tài liệu đào tạo kỹ thuật về bảo dưỡng định kỳ của các hãng xe hàng đầu khu vực.',
    'Hướng dẫn tra cứu số khung và mã đời máy trong hồ sơ đăng ký xe.',
  ],
  related: ['tai-lieu-tham-khao', 'huong-dan-chinh-hang', 'sach-ky-thuat-xe-may', 'thong-so-xe-may', 'bang-thong-so'],
};
