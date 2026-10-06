// AI WIKI TOTAL — wiki/ac-quy-pin: hướng dẫn chi tiết về sạc ắc quy (slot S00307)
'use strict';

module.exports = {
  slug: 'sac-ac-quy',
  title: 'Hướng dẫn chi tiết về sạc ắc quy',
  seoTitle: 'Sạc ắc quy xe máy: khi nào cần, sạc thế nào đúng và chọn sạc nào',
  metaDescription: 'Sạc ắc quy xe máy khi nào cần, dùng sạc loại gì, dòng sạc bao nhiêu, thời gian bao lâu, và cách sạc an toàn cho ắc MF khô với người tự làm ở nhà.',
  summary: 'Sạc ắc quy là việc đơn giản đến mức dễ làm sai: dùng sai loại sạc, chọn sai dòng, hoặc sạc khi không cần — mỗi lỗi đều rút ngắn tuổi thọ ắc thay vì kéo dài. Trên xe máy, ắc quy được nạp chủ yếu bởi máy phát trên xe khi chạy, nên sạc ngoài là biện pháp bổ trợ cho các tình huống cụ thể: xe để lâu không chạy, mùa lạnh đề yếu, ắc mới trước khi lắp, hoặc sau khi để quên đèn. Bài hướng dẫn này trả lời theo trình tự: khi nào thực sự cần sạc ngoài (và khi nào chạy xe là đủ); đo ắc trước khi quyết định bằng vôn kế; chọn đúng loại sạc cho ắc chì-axit MF/VRLA; dòng và thời gian sạc tham chiếu; trình tự sạc an toàn từng bước cho người tự làm ở nhà — và danh sách những việc tuyệt đối không làm với ắc quy chì-axit trong gara nhà.',
  quickAnswer: 'Sạc ngoài cần khi: ắc đo dưới 12,4V hở mạch sau đêm để, xe sẽ không chạy được vài tuần, ắc mới mua chuẩn bị lắp, hoặc đề yếu buổi sáng mùa lạnh. Chọn sạc có ghi hỗ trợ ắc chì-axit MF/AGM/VRLA với chế độ dòng nhỏ tự động (tối ưu có chế độ giữ điện float). Dòng sạc tham chiếu: khoảng 1/10 dung lượng Ah — ắc 5Ah sạc dòng 0,5A, thời gian vài tiếng cho ắc tụt nhẹ. Trình tự: cọt đỏ vào cực dương trước, đen vào cực âm, đặt sạc, cắm điện, sạc tới khi đèn báo đầy — ngược lại khi tháo: rút điện, tháo cực âm trước. Không sạc ắc phồng, không sạc qua đêm không canh, không để tia lửa gần ắc đang sạc.',
  keyPoints: [
    'Chạy xe đủ dài là cách nạp chính — sạc ngoài chỉ dành cho các tình huống cụ thể: để lâu, ắc yếu, ắc mới.',
    'Đo trước khi sạc: 12,4-12,8V hở mạch là khỏe, dưới 12V là cần sạc, dưới 11,5V là xả sâu nghiêm trọng.',
    'Dùng sạc hỗ trợ ắc chì-axit MF/VRLA với dòng tự động — không dùng sạc thô không kiểm soát.',
    'Dòng sạc tham chiếu khoảng 1/10 dung lượng Ah; ắc xe máy sạc vài tiếng là đủ, không quá đêm không canh.',
    'Trình tự an toàn: nối đỏ (+) trước, tháo âm (-) trước khi ngắt; sạc nơi thoáng khí.',
    'Ắc phồng, rò, có mùi trứng thối: không sạc — thay; ắc chì-axit sinh khí hydro dễ cháy khi sạc.',
  ],
  category: 'wiki',
  hub: 'ac-quy-pin',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['sạc ắc quy', 'sạc giữ điện', 'dòng sạc', 'điện thế hở mạch', 'sulfat hóa', 'ắc quy MF', 'chế độ float'],
  keywords: ['sạc ắc quy xe máy', 'cách sạc ắc quy đúng', 'sạc ắc quy bao lâu', 'chọn sạc ắc quy xe máy', 'sạc ắc quy khi để xe lâu', 'đo ắc quy bằng vôn kế'],
  sections: [
    {
      h2: 'Khi nào cần sạc ngoài — và khi nào chạy xe là đủ',
      html: `<p>Hệ thống nạp trên xe (cuộn phát + chỉnh lưu) là người nạp chính: chạy xe liên tục 20-30 phút ở vòng tua làm việc nạp lại phần ắc đã dùng để đề và phần tự phóng. Xe chạy đều mỗi ngày gần như không bao giờ cần sạc ngoài.</p>
<p>Bốn tình huống cần sạc ngoài: xe sẽ nằm im trên hai tuần (tự phong điện và dòng rô chờ kéo ắc xuống vùng nguy hiểm); ắc đo dưới 12,4V hở mạch khi tắt máy qua đêm; ắc mới mua loại cần kích trước khi lắp; và sau sự cố để quên đèn, còi kêu dài khiến đề yếu. Ngoài bốn tình huống, sạc ngoài "cho chắc" mỗi tuần với xe chạy thường là thừa — và với sạc thô còn có hại.</p>
<p>Nguyên tắc nền: sạc ngoài là biện pháp cứu và duy trì cho ắc không được nạp đủ, không phải thói quen tăng cường cho mọi ắc. ắc được nạp đúng bởi hệ thống xe khỏe sống lâu mà không cần can thiệp nào; ắc phải sạc ngoài thường xuyên nghĩa là hoặc xe ít chạy, hoặc hệ thống nạp có vấn đề — soi hai phía đó trước khi đổ lỗi cho ắc.</p>`,
    },
    {
      h2: 'Đo ắc trước khi quyết định',
      html: `<p>Vôn kế là dụng cụ quyết định mọi tranh luận về ắc: đo hở mạch (khóa máy tắt, để xe yên 30 phút trở lên) tại hai cột cực. Vùng số: 12,6-12,8V là đầy; 12,4V là còn khoảng ba phần tư; 12,0V là tụt nửa — cần sạc; dưới 11,8V là xả sâu, sạc ngay và theo dõi kỹ; dưới 11V thường là ắc hư hoặc hư thẳng cục chì trong.</p>
<p>Phép đo thứ hai sau khi sạc: đo lại sau khi để ắc nghỉ 1-2 giờ không nối — số tụt nhanh về dưới 12,4V nghĩa là ắc giữ điện kém, cực mòn, gần hết đời. Sạc đầy mà để vài tiếng tụt tự do là dấu phân biệt "ắc yếu do thiếu sạc" và "ắc yếu vì hết tuổi".</p>
<p>Không có vôn kế: dùng đèn và còi khi bật chìa — sáng dịu, còi cháy không phải sạc lại, đề hai ba lần vẫn quẫy mạnh là đạt cho ngày hôm đó. Phép thô này không phát hiện được xu hướng — vôn kế vài chục nghìn là khoản đáng đầu tư cho ai định giữ xe lâu năm. Với xe đề điện và xe có nhiều phụ tải điện (đèn LED, sạc điện thoại, loa), phép đo vôn càng đáng giá: nhóm xe này vẽ ra nhiều dòng hơn và ắc tụt nhanh hơn cảm giác chung của xe máy phổ thông.</p>
<p>Một lưu ý về thói quen đo: luôn đo cùng một điều kiện — hở mạch, sau nửa tiếng tắt máy, buổi sáng trước khi đề — thì các số liệu qua các tuần mới so được với nhau. Đo ngay sau khi tắt máy cho số cao hơn do sạc nổi bề mặt; so loại số đó với số đo sáng hôm sau sẽ kết luận sai rằng ắc tụt nhanh.</p>`,
    },
    {
      h2: 'Chọn sạc: loại nào đúng cho ắc xe máy',
      html: `<p>Tối thiểu cần: sạc ghi rõ hỗ trợ ắc chì-axit, có dòng sạc nhỏ cỡ 0,5-1,5A (hoặc chọn được nấc dòng), và tự ngắt hoặc hạ dòng khi đầy. Tốt hơn: có chế độ giữ điện float cho ắc MF và đèn báo tiến trình — loại này để được lâu trên xe ít chạy.</p>
<p>Tuyệt đối tránh: sạc ổn áp thô không kiểm soát dòng (kiểu sạc mô tơ cũ), và sạc nhanh boost cường độ — ắc MF nước hữu hạn, mỗi lần nạp mạnh đốt một phần nước qua van không bù được. Sạc dòng nhỏ lâu hơn luôn tốt hơn dòng lớn nhanh hơn với tuổi thọ ắc.</p>
<p>Ba chữ trên nhãn sạc cần có: "lead-acid" hoặc "Pb", dòng sạc ghi bằng ampere cụ thể, và nhãn an toàn ngắn mạch. Sạc rẻ mà đủ ba chữ đó làm tròn việc; sạc đắt thêm cho các chế độ gel/AGM riêng, pulse phục hồi và màn hình — tiện nhưng không bắt buộc cho xe phổ thông.</p>`,
    },
    {
      h2: 'Trình tự sạc an toàn từng bước',
      html: `<p>Bước 1 — chuẩn bị: sạc ở nơi thoáng khí, khô, xa nguồn lửa và tia lửa; lau khô mặt ắc; kiểm vỏ không phồng không nứt. ắc phồng hoặc có mùi trứng thối: dừng ở đây, thay ắc, không sạc.</p>
<p>Bước 2 — nối: giữ sạc chưa cắm điện; kẹp đỏ lên cực dương (+), kẹp đen lên cực âm (-); kẹp phải bám kim loại trần sạch, không kẹp lên lớp oxit. Với ắc còn lắp trên xe, một số hãng khuyên tháo cực âm khỏi xe trước khi sạc để dòng sạc không chạy vòng qua mạch — đọc sổ tay xe mình.</p>
<p>Bước 3 — sạc: cắm điện sạc, chọn nấc dòng nhỏ nhất đạt được; để sạc làm việc tới báo đầy. Thời gian tham chiếu: ắc 4-9Ah tụt nhẹ sạc 3-6 tiếng ở dòng 0,5-1A. Bước 4 — xong: rút điện sạc trước, rồi tháo kẹp âm (-) trước, dương (+) sau; lau mặt ắc lần nữa, lắp lại cực lên xe nếu đã tháo, tra mỡ chì hai cột cực.</p>`,
    },
    {
      h2: 'Những việc tuyệt đối không làm',
      html: `<p>Không sạc qua đêm không theo dõi ở nơi kín: ắc chì-axit sinh khí hydro khi sạc cuối — khí này nhẹ, tích ở trần phòng kín, một tia lửa là cháy. Sạc nơi thoáng, trong tầm mắt ít nhất định kỳ, và với sạc tự ngắt thì mới yên tâm để lâu hơn.</p>
<p>Không sạc ắc đông lạnh có băng (hiếm ở Việt Nam nhưng vùng cao mùa cực lạnh có thể): ắc đá bên trong sạc dòng lớn là vỡ tấm cực. Không "khơi lại" ắc phồng bằng cách chọc van — van hỏng là ắc chết, chọc thêm biến thành ắc nguy hiểm. Không đặt sạc trên nắp ắc khi làm việc — sạc rơi làm nứt vỏ.</p>
<p>Và một thói quen đáng rè nhất: không dùng sạc ô tô dòng lớn cho ắc xe máy "cho nhanh". Dòng lớn với ắc nhỏ là nạp quá mức trên mọi thang đo — nóng ắc, mất nước qua van, cong tấm cực. Chậm mà đúng luôn nhanh hơn nhanh mà sai trong việc sạc ắc.</p>`,
    },
  ],
  checklist: [
    'Đo vôn hở mạch trước khi quyết định sạc: dưới 12,4V mới là ứng viên sạc ngoài.',
    'Chọn sạc hỗ trợ ắc chì-axit với nấc dòng 0,5-1A và tự ngắt hoặc chế độ giữ điện.',
    'Sạc nơi thoáng khí, khô, không có nguồn lửa và tia lửa.',
    'Nối đỏ (+) trước, tháo âm (-) trước; tháo cực âm khỏi xe nếu sổ tay khuyên vậy.',
    'Sau sạc để nghỉ 1-2 giờ rồi đo lại — tụt nhanh về dưới 12,4V là ắc gần hết đời.',
    'Ắc phồng, nứt, rò hoặc có mùi trứng thối: không sạc — thay.',
  ],
  warnings: [
    'Khí hydro sinh khi sạc dễ cháy — không sạc trong phòng kín hoặc gần ngọn lửa, điếu thuốc.',
    'Không dùng sạc ô tô dòng lớn cho ắc xe máy — nạp quá dòng làm phồng và chết ắc MF.',
    'Sau khi sạc mà đề vẫn yếu mỗi sáng: soi hệ thống nạp và chỉnh lưu trên xe, không đổ thêm cho ắc.',
  ],
  notes: [
    'Bài viết viết cho ắc chì-axit MF/VRLA phổ thông trên xe máy; ắc lithium có trình tự sạc và sạc riêng theo hướng dẫn nhà sản xuất.',
    'Dòng sạc và thời gian chuẩn cho từng ắc nằm trong tài liệu kèm theo ắc quy và sạc.',
  ],
  references: [
    'Tài liệu kỹ thuật về nạp ắc quy chì-axit điều tiết van và khí sinh ra khi nạp.',
    'Hướng dẫn sử dụng của các nhà sản xuất sạc ắc quy về dòng sạc và chế độ giữ điện.',
    'Sổ tay người dùng các dòng xe phổ thông — hệ thống nạp và khuyến nghị tháo cực khi sạc ngoài.',
  ],
  related: [
    'ac-quy-xe-may',
    'ac-quy-kho',
    'ac-quy-yeu',
    'de-xe-day-khi-ac-quy-yeu',
  ],
};
