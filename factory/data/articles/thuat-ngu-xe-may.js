// AI WIKI TOTAL — wiki/thuat-ngu-xe: kinh nghiệm thuật ngữ xe máy dành cho người mới (slot S00309)
'use strict';

module.exports = {
  slug: 'thuat-ngu-xe-may',
  title: 'Kinh nghiệm thuật ngữ xe máy dành cho người mới',
  seoTitle: 'Thuật ngữ xe máy cần biết: từ côn, ga, tua đến xi-lanh cho người mới',
  metaDescription: 'Tổng hợp thuật ngữ xe máy cơ bản người mới cần hiểu: côn, ga, vòng tua, xi-lanh, đề điện, xe số, xe ga — giải thích dễ hiểu theo nhóm chức năng.',
  summary: 'Bước vào thế giới xe máy, người mới va vào một bức tường thuật ngữ: thợ nói "côn ba di chim", diễn đàn bàn về "tua đáy", quảng cáo ghi "phun xăng điện tử". Hiểu lầm một thuật ngữ dẫn tới mua sai, sửa sai và nói sai khi trao đổi với thợ. Bài này không phải cuốn từ điển — nó là bản đồ học thuật ngữ theo nhóm chức năng: nhóm vận hành mà tay chân người lái chạm mỗi ngày (côn, ga, phanh, số); nhóm trái tim máy (xy-lanh, piston, tua, công suất và mô men); nhóm hệ thống quanh máy (điện, nạp, phun xăng); và nhóm danh xưng xe (xe số, xe ga, xe côn tay, đề điện, chủ động). Mỗi thuật ngữ được giải bằng một câu chức năng thật — nó làm gì trên xe — thay vì định nghĩa trích dẫn. Kết bài là phương pháp tự học thuật ngữ: hỏi đúng câu khi gặp thợ, ghi chép theo nhóm, và đọc tài liệu xe mình thay vì tài liệu chung chung.',
  quickAnswer: 'Thuật ngữ xe máy cơ bản chia theo nhóm. Vận hành: côn (ly hợp — ngắt-nối lực giữa máy và hộp số), ga (điều vị độ mở bướm ga), phanh trước/sau, số (tỷ lệ truyền trong hộp số). Máy: xy-lanh (nơi piston chuyển động), piston (nén và nhận lực cháy), vòng tua (vòng quay mỗi phút — rpm), công suất (mã lực — tốc độ tối đa), mô men xoắn (lực kéo — tăng tốc và leo dốc). Hệ thống: đề điện (mô tơ khởi động), phun xăng điện tử vs chế hòa khí, ắc quy và hệ thống nạp. Danh xưng: xe số (bóp côn đổi số bằng chân), xe tay ga (tăng giảm ga tự đổi tỉ lệ), xe côn tay (xe số bóp côn tay), xe đề điện (bấm nút đề).',
  keyPoints: [
    'Côn (ly hợp) là bộ ngắt-nối lực máy vào hộp số — bóp côn để đổi số không cho máy giật.',
    'Vòng tua (rpm) là tốc độ quay máy; vùng tua đẹp cho xe phổ thông khoảng giữa đồng hồ, không đáy, không đỏ.',
    'Công suất (mã lực) quyết định tốc độ tối đa; mô men xoắn quyết định cảm giác kéo khi ra ga và leo dốc.',
    'Xe số đổi số bằng chân, xe tay ga đổi tỉ số tự động qua ly hợp và pulley — hai nguyên lý khác hẳn nhau.',
    'Đề điện là mô tơ khởi động thay cho đề chân; xe đề điện luôn cần ắc quy khỏe.',
    'Phun xăng điện tử (FI) phun nhiên liệu theo tính toán IC; chế hòa khí phun theo chân không — FI chuẩn của xe mới.',
  ],
  category: 'wiki',
  hub: 'thuat-ngu-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['thuật ngữ xe máy', 'côn', 'vòng tua', 'mô men xoắn', 'xy-lanh', 'phun xăng điện tử', 'xe tay ga'],
  keywords: ['thuật ngữ xe máy', 'côn là gì', 'vòng tua là gì', 'mô men xoắn là gì', 'xe số và xe ga khác nhau', 'phun xăng điện tử FI'],
  sections: [
    {
      h2: 'Nhóm vận hành: những gì tay chân chạm mỗi ngày',
      html: `<p>Côn (ly hợp): bộ điều phối giữa máy đang quay và hộp số. Máy quay liên tục; đổi số cần "ngắt" máy khỏi hộp số một khoảnh khắc — đó là việc bóp côn làm. Không bóp côn mà đổi số, bánh răng hộp số va nhau theo quán tính: tiếng "lạch cạch" khó chịu và mòn răng về sau. Xe số phổ thông: bóp cần côn tay trái, đá cần số chân trái.</p>
<p>Ga: quay tay ga là mở bướm ga — cánh cửa điều khiển lượng hỗn hợp không khí-xăng vào máy. Ga mạnh hơn là vào nhiều hơn, máy quay nhanh hơn; ga về vị trí nghỉ là nhả máy về vòng tua không tải. Phanh và số đã có bài riêng trong chuỗi wiki — ở đây chỉ nhấn vị trí của chúng trong bản đồ thuật ngữ: phanh trước gánh lực dừng chính, số là các cấp tỷ lệ truyền tốc độ-lực.</p>
<p>Số (N, 1, 2, 3...): các tỷ lệ khác nhau giữa máy và bánh — số thấp cho lực kéo mạnh (khởi hành, dốc), số cao cho tốc độ (đường trường). "Số N" (nghĩa là neutral, trống) không truyền lực. Người mới thường nghe "chạy đáy số" — nghĩa là giữ tua quá thấp với số cao, máy đuối: thuật ngữ nghe đời nhưng hiện tượng là vật lý thật.</p>`,
    },
    {
      h2: 'Nhóm trái tim máy: tua, công suất, mô men',
      html: `<p>Vòng tua (rpm — vòng mỗi phút): tốc độ quay của trục khuỷu. Đồng hồ tua trên xe có công tơ tua (không phải mọi xe phổ thông có) vẽ vùng an toàn: tua thấp máy đuối, tua quá cao mòn nhanh và nóng. "Vòng tua đẹp" với xe phổ thông là khoảng giữa — đủ máy ấm, đủ lực, không gằn.</p>
<p>Công suất (mã lực — hp hoặc kW): tốc độ sinh công của máy — quyết định tốc độ tối đa xe đạt được. Mô men xoắn (Nm): lực xoắn tức thời trục khuỷu sinh ra — quyết định cảm giác xe "kéo" khi ra ga từ tốc độ thấp và khi leo dốc. Hai đại lượng này không cao-thấp nhau: xe mô men lớn cho cảm giác bốc ở phố; xe công suất lớn cho tốc độ cuối trên đường trường.</p>
<p>Xy-lanh — piston: xy-lanh là ống xy-lanh hình trụ nơi piston chuyển động lên xuống; piston là chi tiết trượt kín trong đó, nhận lực cháy đẩy xuống. Khe hở giữa piston và xy-lanh được các vành găng (piston ring) làm kín — thuật ngữ nghe từ thợ "găng xéc măng" chính là ring. Khi thợ nói "máy xuống" thường nghĩa là găng mòn, áp nén mất, máy yếu: hiểu ba từ piston-xy-lanh-găng là hiểu một nửa hội thoại sửa máy.</p>`,
    },
    {
      h2: 'Nhóm hệ thống: điện, nạp, phun xăng',
      html: `<p>Đề điện: mô tơ điện khởi động thay cho việc đạp cần đề bằng cần chân. Từ "bình ắc yếu" mà thợ nói lúc xe không nổ thường là ắc không đủ dòng đề kéo mô tơ — chi tiết đã có bài riêng về ắc quy trong chuỗi wiki.</p>
<p>Chế hòa khí (carburetor) và phun xăng điện tử (FI — fuel injection): hai cách đưa xăng vào máy. Carb phun xăng theo hiệu ứng chân không và độ mở bướm — giản dị, dễ sửa, chuẩn của xe cũ và xe phổ thông đời trước; FI phun xăng theo tính toán của IC dựa trên các cảm biến — tiết kiệm hơn, khởi động lạnh dễ hơn, chuẩn của xe mới. "Xe FI" trên quảng cáo nghĩa là xe phun xăng điện tử.</p>
<p>Hệ thống nạp: cuộn phát trên máy tạo điện khi máy quay, chỉnh lưu (rectifier) biến điện đó thành một chiều và ổn định để nạp ắc và nuôi đèn. "Chỉnh lưu cháy" là sự cố quen thuộc của xe đời cũ: đèn sáng tối bất thường, ắc chai nhanh — ba hệ thống (phát, chỉnh, nạp) là một cụm, hiểu cụm này giúp người mới nghe hiểu báo giá sửa điện.</p>`,
    },
    {
      h2: 'Nhóm danh xưng: xe số, xe ga, côn tay, đề điện',
      html: `<p>Xe số (xe có số bắp: Wave, Sirius, Exciter…): người lái tự đổi số — đá cần số chân trái, bóp côn tay trái. Đặc trưng: trực tiếp, tiết kiệm, sửa rẻ, hợp tải nặng và đường xấu. Xe tay ga: hộp số tự động kiểu pulley-belt — người lái chỉ quay ga; đặc trưng: tiện trong phố, êm, không bóp côn; nhược điểm là dây curoa và pulley có kỳ bảo dưỡng riêng.</p>
<p>Xe côn tay: xe số quốc tế kiểu thể thao — cần số theo trăm chân trái, bóp côn tay trái như xe số phổ thông nhưng số tròn: thuật ngữ phân biệt với "xe số phổ thông" kiểu Việt Nam (cần số bắp). Xe đề điện là cụm từ chỉ kiểu đề bằng mô tơ trên xe số — với xe tay ga, đề điện là mặc định nên cụm từ ít khi được nhắc trên ga.</p>
<p>Còn lại là các từ lóng phố biến dạng thức thành danh xưng: "xe mô" (xe mô tô phân khối lớn), "xe côn" (xe côn tay)... — nhận biết để hiểu hội thoại, nhưng khi trao đổi với thợ và với cửa hàng, dùng thuật ngữ chuẩn của hãng: đọc đúng tên phụ tùng trong bảng giá là cách tự bảo vệ rẻ nhất khỏi việc bị "thả mồi" bằng từ lóng.</p>`,
    },
    {
      h2: 'Phương pháp tự học thuật ngữ đúng cách',
      html: `<p>Nguyên tắc một — học theo nhóm chức năng, không học theo bảng chữ cái: thuộc nhóm vận hành rồi tới nhóm máy như bản đồ ở trên giúp mỗi thuật ngữ mới có chỗ để treo, nhớ lâu hơn. Nguyên tắc hai — mỗi thuật ngữ gắn với một hiện tượng cảm nhận được: côn gắn với tiếng giật khi nhả nhanh, găng gắn với khói xanh khi máy cũ — hiện tượng là keo của trí nhớ.</p>
<p>Nguyên tắc ba — hỏi thợ đúng câu: thay vì "nó hư gì thầy", hỏi "thầy nói chậm lại giúp em: bộ phận này làm việc gì trong cụm nào" — thợ giỏi thường sẵn lòng giải thích, và câu hỏi đúng cũng khiến báo giá thêm cẩn trọng. Nguyên tắc bốn — ghi về sổ xe mình theo cụm: điện, máy, truyền lực, phanh, lốp — mỗi lần sửa là một lần ghi thêm hai ba từ thật của xe mình.</p>
<p>Cuối cùng — đọc tài liệu của xe mình, không phải tài liệu chung: sổ tay người dùng của chính dòng xe mình chứa đúng bộ thuật ngữ áp dụng cho xe đó, với nghĩa đúng ngữ cảnh. Chuỗi wiki này là bản đồ chung; sổ tay là bản đồ riêng — hai thứ đọc song song thì sau vài tháng, hội thoại với thợ không còn là tiếng nước ngoài.</p>`,
    },
  ],
  checklist: [
    'Học thuật ngữ theo nhóm chức năng: vận hành — máy — hệ thống — danh xưng.',
    'Mỗi thuật ngữ gắn một hiện tượng cảm nhận được để nhớ lâu.',
    'Khi thợ nói thuật ngữ lạ: hỏi "bộ phận này làm việc gì trong cụm nào".',
    'Đọc sổ tay của chính dòng xe mình làm chuẩn đối chiếu.',
    'Ghi thuật ngữ thật của xe mình vào sổ xe theo cụm sau mỗi lần sửa.',
    'Trao đổi với cửa hàng bằng tên phụ tùng chuẩn, không dùng từ lóng.',
  ],
  warnings: [
    'Không đổi số không bóp côn trên xe số — mòn hộp số nhanh và giật xe nguy hiểm.',
    'Không chạy "đáy số" kéo dài — tua thấp số cao làm máy đuối và nóng, về lâu xuống máy.',
    'Đèn sáng tối bất thường và ắc chai nhanh: nghi chỉnh lưu — kiểm sớm, không chỉ thay ắc.',
  ],
  notes: [
    'Bài viết dùng thuật ngữ phổ thông tại Việt Nam; tên phụ tùng chính thức nằm trong catalogue của từng hãng.',
    'Chi tiết từng hệ thống (phanh, ắc, nhớt, lốp) có bài riêng trong chuỗi wiki — đây là bản đồ tổng quan.',
  ],
  references: [
    'Tài liệu kỹ thuật về cấu tạo và vận hành xe gắn máy bốn kỳ phổ thông.',
    'Sổ tay người dùng của các dòng xe phổ thông — thuật ngữ và tên phụ tùng chuẩn.',
    'Giáo trình cơ sở về động cơ đốt trong: công suất, mô men và vòng tua.',
  ],
  related: [
    'tu-dien-xe-may',
    'con-la-gi',
    'mo-men-xoan',
    'di-xe-may-so-ky-thuat-bop-con-va-chuyen-so',
  ],
};
