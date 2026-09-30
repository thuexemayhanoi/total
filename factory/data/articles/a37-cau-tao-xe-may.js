// AI WIKI TOTAL — bài mở rộng cụm /wiki/cau-tao-xe/: cấu tạo xe máy tổng quan các hệ thống chính (slot S00037)
'use strict';

module.exports = {
  slug: 'cau-tao-xe-may-tong-quan-cac-he-thong',
  title: 'Cấu tạo xe máy: tổng quan các hệ thống chính',
  seoTitle: 'Cấu tạo xe máy: tổng quan các hệ thống chính',
  metaDescription: 'Cấu tạo xe máy gồm những hệ thống nào: máy, truyền động, điện, phanh, treo, khung — vai trò từng cụm và cách chúng phối hợp khi xe vận hành.',
  summary: 'Nhìn một chiếc xe máy, ta thấy tay lái, yên, hai bánh — nhưng đằng sau vẻ ngoài gọn là sự phối hợp của khoảng chục hệ thống kỹ thuật, mỗi hệ thống giữ một vai riêng và giao tiếp với nhau qua những liên kết ít ai để ý. Bài viết này là bản đồ tổng quan cấu tạo xe máy: từ khối máy sinh công suất, hệ truyền động mang công suất tới bánh sau, hệ thống điện nuôi bugi - đèn - đề, nhóm treo và phanh giữ an toàn, tới khung xe là bộ khung mang mọi thứ. Mỗi phần giải thích vai trò, các bộ phận chính và dấu hiệu hỏng đặc trưng — kiến thức nền để đọc hiểu mọi bài viết kỹ thuật sâu hơn trong bộ wiki.',
  quickAnswer: 'Một chiếc xe máy gồm các hệ thống chính: khối máy (sinh công suất từ đốt nhiên liệu), hệ truyền động (truyền lực tới bánh sau qua côn, hộp số, xích hoặc CVT), hệ thống điện (ắc quy, dây nồng, bugi, đèn còi đề), hệ thống nhiên liệu (bình, bơm phin, họng ga), nhóm treo và bánh xe (giảm xóc, lốp), hệ thống phanh, và khung xe chịu tải tổng. Mỗi hệ thống có dấu hiệu hỏng đặc trưng — nghe, nhìn, ngửi đúng chỗ giúp phát hiện sớm trước khi hỏng lan sang hệ khác.',
  keyPoints: [
    'Khối máy là nơi sinh công suất: piston - trục khuỷu - trục cam phối hợp theo nhịp nạp nén nổ xả; mọi triệu chứng máy (khó nổ, giật, hao nhớt) đều truy về nhóm này trước tiên.',
    'Hệ truyền động là cầu nối từ máy ra bánh sau: côn - hộp số - xích (xe số) hoặc pulley - curoa - pulley (CVT xe ga) — mất mát và hao mòn của xe phần lớn xảy ra ở đúng đoạn này.',
    'Hệ thống điện là thần kinh: ắc quy dự trữ, dây nồng phát, bugi đánh lửa, dây - cầu chì dẫn — hỏng điện thường biểu hiện bằng nhiều triệu chứng rắc rối khiến hay bị chẩn nhầm sang máy.',
    'Nhóm treo và phanh là bộ đôi quyết định an toàn: giảm xóc giữ bánh tiếp đất, phanh biến chuyển động thành nhiệt — hai hệ này thoái hóa từ từ nên dễ bị chủ quan khi chưa hẳn hỏng.',
    'Khung xe chịu toàn bộ tải và là bản gốc an toàn: mọi va chạm lớn, kéo thẳng lại, gỉ ăn khung đều là vấn đề của khung — không phải của "tấm sơn bên ngoài".',
    'Hiểu cấu tạo theo hệ giúp mô tả lỗi đúng chỗ cho thợ: "đề không nổ kèm còi yếu" trỏ về điện, "vọt ga nhưng xe không nhích" trỏ về côn — mô tả đúng hệ tiết kiệm buổi sửa.',
  ],
  category: 'wiki',
  hub: 'cau-tao-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['cấu tạo xe máy', 'hệ thống truyền động', 'hệ thống điện xe máy', 'khung xe', 'hệ thống phanh', 'hệ thống treo'],
  keywords: ['cấu tạo xe máy', 'xe máy gồm những hệ thống nào', 'hệ thống truyền động xe máy', 'hệ thống điện xe máy', 'nguyên lý hoạt động xe máy', 'các bộ phận chính của xe máy'],
  sections: [
    {
      h2: 'Khối máy: nơi công suất được sinh ra',
      html: `<p>Khối máy (động cơ) là trái tim của xe: nơi hóa năng của xăng biến thành cơ năng quay trục khuỷu. Các diễn viên chính: xy-lanh là khoang nổ, piston đi lên xuống trong khoang, trục khuỷu đổi chuyển động thẳng của piston thành chuyển động quay, thanh truyền nối hai bên, và trục cam (động cơ 4 thì) điều khiển van hút - van xả theo nhịp. Hòa khí xăng - không khí được nén, bugi đánh lửa, khí giãn đẩy piston — chu kỳ lặp lại hàng nghìn lần mỗi phút tạo ra công suất.</p>
<p>Đi kèm máy là các cụm phục vụ: hệ bôi trơn (nhớt trong cạc te, bơm nhớt, lọc nhớt) giữ các bề mặt ma sát không xé nhau; hệ làm mát — bằng gió (cánh tản nhiệt trên thành xy-lanh, hầu hết xe số phổ thông) hoặc bằng dung dịch (một số xe ga, xe lớn) — giữ máy trong dải nhiệt thiết kế; và hệ thải khí (pô) đưa khí cháy ra và giảm ồn.</p>
<p>Dấu hiệu hỏng đặc trưng của nhóm máy: khó nổ đều đặn (bugi, van, tỷ lệ hòa khí), tiếng gõ kim loại (khe hở van, thanh truyền, piston), khói xanh (nhớt lọt buồng đốt — gioăng, piston mòn), máy nóng bất thường (bôi trơn - làm mát kém). Máy là hệ thống hỏng đắt nhất — nên mọi dấu hiệu từ đây đều đáng được nghe sớm và xử đúng, đừng để một lỗi bôi trơn nhỏ tự trưởng thành thành một lần đại tu.</p>
<p>Về kiến thức nền, hiểu máy là hiểu trước hai bài viết chuyên sâu của bộ wiki: động cơ 2 thì với 4 thì (khác biệt nguyên lý), và hệ thống bôi trơn (đọc bài dầu nhớt). Mỗi nhóm lỗi máy đều có bài riêng sâu hơn — bài này là bản đồ để biết dấu hiệu thuộc cụm nào và nên đọc tiếp phần nào.</p>`,
    },
    {
      h2: 'Hệ truyền động: đưa công suất ra bánh sau',
      html: `<p>Công suất sinh ra ở trục khuỷu chỉ có vài nghìn vòng mỗi phút — cần được "dịch" về tốc độ bánh và mô-men phù hợp mỗi tình huống. Đó là việc của hệ truyền động. Xe số đi đường kinh điển: côn (bố ép vào, ngắt nguồn lực khi vào số), hộp số (bộ tỷ số thay đổi), và xích - lá xích truyền ra bánh sau. Xe ga đi đường CVT: pulley chủ động, curoa, pulley bị động tự đổi tỷ số theo vòng tua — bài viết về CVT trong mục liên quan giải thích sâu nhóm này.</p>
<p>Điểm đáng nhớ về truyền động: đây là nơi phần lớn hao mòn "vô hình" diễn ra. Xích giãn dần theo cây số, curoa CVT mòn theo năm, bố côn mòn theo từng lần lún côn — hệ thống vẫn làm việc nhưng làm việc kém dần, và sự kém đó hiện lên dạng xe "vọt yếu", ga lên xe không tương ứng, ăn xăng tăng nhẹ. Người dùng hay đổ cho máy trong khi thủ phạm thường nằm ở truyền động.</p>
<p>Dấu hiệu hỏng đặc trưng: tiếng rít - lạo xạo từ vùng côn xích (xích khô, căng sai, lá xích mòn), vọt yếu - vòng tua lên nhanh mà xe không nhích (côn mòn, càng côn sai độ rơ; với xe ga là curoa mòn, pulley mòn), giật khi vào số (bộ côn, bố ba chân của xe số). Hầu hết nhóm này bảo dưỡng được: xịch - tra mỡ định kỳ, chỉnh căng xích, thay curoa đúng kỳ — rẻ nếu làm đúng kỳ, đắt nếu để tới hỏng lan (xích đứt giữa đường làm thủng cạc te là câu chuyện thật của nhiều người).</p>
<p>Khi mô tả lỗi cho thợ, việc tách "máy" và "truyền động" giúp chẩn đoán nhanh gấp bội: ga lên máy gào đều nhưng xe không đi tương ứng — vấn đề sau máy (truyền động); ga lên máy yếu đuối luôn — vấn đề tại máy hoặc họng ga. Đây là phép phân loại đầu tiên của mọi cuộc chẩn đoán xe máy.</p>`,
    },
    {
      h2: 'Hệ thống điện và nhiên liệu: thần kinh và mạch máu',
      html: `<p>Hệ thống điện gồm ba mạch lớn: nguồn (ắc quy dự trữ, dây nồng phát điện khi máy chạy, ic bộ chỉnh lưu giữ điện áp ổn định), đánh lửa (cuộn nguồn, cuộn đề - bugi đánh lửa đúng thì), và phụ tải (đèn, còi, đề). Đặc tính quan trọng cần nhớ: điện hỏng hay biểu hiện đa dạng — đề yếu, đèn mờ, còi nhỏ, chập chờn, chết máy khi nóng — vì một mạch chung yếu làm hàng loạt phụ tải cùng giảm, khiến hay bị hiểu nhầm là "nhiều thứ hỏng cùng lúc" trong khi chỉ một nguồn chung.</p>
<p>Ắc quy giữ vai trò bệ đỡ: mọi điện của xe khởi động từ đây lúc máy chưa quay. Ắc quy yếu làm đề chậm — đề chậm làm máy khó nổ — khó nổ lại hay được đổ lỗi cho "máy lạnh" hoặc "bugi". Bài viết về ắc quy trong mục liên quan trình bày nhóm này kỹ; ở đây chỉ cần nguyên tắc: triệu chứng điện thật ít khi đứng một mình, nó kéo theo một chuỗi rối khiến chẩn đoán lẫn.</p>
<p>Hệ nhiên liệu là mạch máu: bình xăng, khóa xăng, lọc xăng, bơm phin (xe phun xăng điện tử) hoặc buồng phin (xe dùng bơm cơ khí), họng ga và ống dẫn về máy. Nhiệm vụ: đong đúng tỷ lệ xăng - không khí cho mỗi chu kỳ máy. Hỏng của nhóm này thường là nghẽn và bẩn — lọc tắc, phin đóng cốc, họng ga dơ bẩn — biểu hiện máy thiếu gas, giật ở ga thấp, hao xăng, khó nổ buổi sáng.</p>
<p>Điểm giao của hai hệ thống đáng biết: phun xăng điện tử (đa số xe mới) là nơi điện điều khiển nhiên liệu — cảm biến (nồng độ khí, vị trí ga, nhiệt độ máy) cho đầu vào, hệ thống tính và phun đúng lượng. Vì thế với xe phun xăng, "hao xăng bất thường" có thể là cảm biến sai — một lỗi điện biểu hiện ra như lỗi nhiên liệu. Đây là ví dụ tốt nhất cho việc các hệ thống trên xe không sống riêng lẻ: chúng sinh bệnh lẫn nhau và chỉ được hiểu cùng nhau.</p>`,
    },
    {
      h2: 'Treo, phanh và khung: nhóm giữ an toàn',
      html: `<p>Hệ thống treo gồm phuộc trước (dầu - lò xo hoặc giảm xóc khí - dầu) và hai giảm xóc sau nối khung với bánh xe. Nhiệm vụ không phải "êm cho người ngồi" như nhiều người tưởng — nhiệm vụ chính là giữ bánh xe tiếp xúc đường: mặt đường gập ghềnh làm bánh nảy, bánh nảy là mất ma sát, mất ma sát là mất lái và mất phanh. Treo tốt cho xe đi gồ ghề mà bánh vẫn ôm mặt đường; treo héo (dầu loãng, lò xo mềm) cho bánh nảy lăn tăn và xe đuôi đuôi khi qua gờ.</p>
<p>Hệ phanh là người chuyển động thành nhiệt theo lệnh người lái: phanh đĩa (kẹp ép đĩa thép) hoặc phanh tang trống (giày ép mặt trong cối) — bài viết riêng so sánh hai loại đã có trong mục liên quan. Điểm cần chốt ở tầm kiến thức tổng quan: phanh là hệ duy nhất trên xe được thiết kế để hao mòn có chủ đích (má - giày - đĩa đều là vật tư tiêu hao), nên bảo dưỡng phanh không phải "xe hỏng" mà là chu trình tự nhiên của thiết kế.</p>
<p>Khung xe là bộ khung mang tất cả: mọi hệ thống phía trên được bắt vào khung, mọi tải trọng (người, hàng, lực va chạm) đi qua khung. Hai điều đáng nhớ về khung: thứ nhất, khung quyết định độ cứng vững của xe — hai xe cùng máy cùng phanh nhưng khung khác nhau cho cảm giác lái khác hẳn; thứ hai, khung là bộ phận không "sửa được về như cũ" một khi đã mất hình học — kéo thẳng lại khung sau va chạm luôn để lại ảnh hưởng về độ chính xác lái và an toàn kết cấu.</p>
<p>Bộ ba treo - phanh - khung cùng bánh xe (lốp) tạo thành nhóm an toàn chủ động của xe: tất cả những gì giữ xe đi đúng lệnh người lái. Vì vậy khi mua xe cũ, đây là nhóm soi kỹ nhất — máy hỏng sửa được, khung méo và treo nát là mất phần an toán không thu hồi được. Bài mua xe cũ trong mục liên quan đã trình bày trình tự soi từng cụm thuộc nhóm này.</p>`,
    },
    {
      h2: 'Đọc cấu tạo theo hệ: kỹ năng mô tả lỗi',
      html: `<p>Bản đồ cấu tạo này phục vụ một kỹ năng thực dụng nhất: mô tả lỗi đúng hệ. Thợ giỏi chẩn đoán nhanh không phải vì tháo nhiều — mà vì nghe đúng: "đề không nổ, còi đèn yếu, buổi sáng mới khó" trỏ gọn về mạch điện nguồn; "ga lên máy gào nhưng xe không đi" trỏ về côn - truyền động; "qua gờ xe đuôi đuôi, phanh tiếng ọc ọc" trỏ về treo - phanh. Mỗi cụm có giọng bệnh riêng — và người lái biết lắng nghe là người tiết kiệm được buổi tháo dò.</p>
<p>Cách luyện: mỗi lần xe có dấu hiệu lạ, thử tự xếp nó vào một trong các hệ trước khi mang đi — và xếp kèm bằng chứng (khi nào xuất hiện, tiếng gì, mùi gì, kèm điều kiện nào). Thói quen nhỏ này hai vai: một là kiến thức của bạn mọc theo từng vụ thật thay vì lý thuyết khô; hai là buổi sửa được rút ngắn vì mô tả chuẩn cho thợ đi thẳng vào cụm.</p>
<p>Một lưu ý cuối về giới hạn của tổng quan: mỗi hệ trong bài đều có nội dung sâu riêng trong bộ wiki — động cơ, dầu nhớt, ắc quy, phanh, lốp, CVT — và bài này chỉ là sợi chỉ dẫn đường. Khi gặp vấn đề thật của xe mình, hãy đọc tiếp bài của đúng hệ đó: kiến thức tổng quan giúp biết cửa nào, kiến thức chuyên sâu giúp biết mở cửa ấy ra làm gì.</p>
<p>Và để chốt cách nhìn: chiếc xe máy là một hệ thống của các hệ thống — sinh công suất (máy), truyền công suất (truyền động), nuôi và điều khiển (điện - nhiên liệu), giữ an toàn (treo - phanh - khung), tất cả trên một bộ khung duy nhất được lái bởi một người duy nhất là mình. Hiểu bản đồ này là hiểu vì sao chăm xe đều đặn rẻ hơn sửa xe theo sự cố — vì mỗi hệ đều cho mượn tín hiệu hỏng sớm, và người đọc được tín hiệu không bao giờ phải trả giá của chữ "bất ngờ" giữa đường.</p>`,
    },
  ],
  checklist: [
    'Hằng tuần rà nhanh theo hệ: nhìn vết rò dầu nhớt dưới máy (máy - bôi trơn), nghe tiếng xích - côn (truyền động), bóp phanh và nghe (phanh), nhún xe ở yên (treo).',
    'Hằng tháng: kiểm tra mực ắc quy và độ căng đầu cọc (điện), lọc gió - họng ga sạch bẩn (nhiên liệu), và chiếu soi khung - các mối hàn có gỉ mới (khung).',
    'Khi có triệu chứng lạ, tự xếp vào đúng hệ trước khi mang xe đi — ghi kèm bằng chứng: khi nào xuất hiện, tiếng gì, mùi gì, kèm điều kiện nào.',
    'Bảo dưỡng truyền động theo kỳ: xịch - tra mỡ và chỉnh căng xích (xe số) hoặc thay curoa đúng kỳ (xe ga) — đừng đợi vọt yếu mới nhớ tới cụm này.',
    'Với mọi thao tác sâu vào máy - điện: nếu chưa nắm rõ trình tự, đọc bài chuyên sâu của đúng hệ trong bộ wiki trước, hoặc nhờ thợ — tháo sai một cụm tốn hơn tháo đúng hai cụm.',
    'Khi mua xe mới hoặc cũ: đọc cấu tạo theo hệ của đúng model mình nhắm để biết hệ nào của dòng xe đó hay hỏng — mỗi dòng xe có "điểm yếu hệ thống" riêng đáng tìm hiểu trước.',
  ],
  warnings: [
    'Không tiếp tục chạy khi máy có tiếng gõ kim loại rõ hoặc đèn dầu - nhiệt bất thường — nhóm máy là cụm hỏng đắt nhất, mỗi cây số thêm với dấu hiệu này là tiền đặt thêm vào hư hỏng lan.',
    'Không để xích giãn hoặc curoa mòn qua hạn — truyền động hỏng giữa đường không chỉ đi đứng: xích đứt khoá bánh sau là mất lái ở tốc độ thật.',
    'Không coi đèn - còi yếu là "chuyện nhỏ của đồ điện phụ" — mạch nguồn chung yếu kéo theo đề chậm và khó nổ; để lâu là hỏng lan từ phụ tải sang nguồn và ngược lại.',
    'Không tự kéo thẳng hay hàn khung sau va chạm ở tiệm không có thiết bị đo hình học — khung sai kích thước nhỏ mất chính xác lái và an toàn kết cấu vĩnh viễn, không có lần sửa thứ hai.',
  ],
  notes: [
    'Bài viết là tổng quan kiến thức chung về các hệ thống chính trên xe máy phổ thông; cấu hình cụ thể từng dòng xe (loại máy, kiểu truyền động, cấu hình phanh treo) khác nhau — tra sổ tay của xe mình trước khi thao tác thật.',
    'Mọi sửa chữa liên quan khung, hệ phanh và hệ điện nên ưu tiên thợ có dụng cụ đúng; tự làm chỉ trong phạm vi đã đọc kỹ hướng dẫn chuyên sâu và có dụng cụ đủ.',
  ],
  references: [
    'Tài liệu kỹ thuật về cấu tạo và nguyên lý hoạt động của xe máy hai bánh — các hệ thống máy, truyền động, điện, treo và khung.',
    'Sổ tay hướng dẫn sử dụng và bảo dưỡng của nhà sản xuất — sơ đồ các cụm, chu kỳ bảo dưỡng theo hệ thống và mô-men siết chuẩn.',
    'Hướng dẫn an toàn khi thao tác bảo dưỡng xe máy — xử lý hệ điện, nhiên liệu và các cụm chịu lực.',
  ],
  related: ['dong-co-2-thi-va-4-thi-khac-biet-co-ban', 'cvt-la-gi-tren-xe-ga', 'ac-quy-xe-may-cau-tao-va-cach-bao-quan'],
};
