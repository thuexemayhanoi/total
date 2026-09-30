// AI WIKI TOTAL — bài mở rộng cụm /wiki/thuat-ngu-xe/: CVT là gì trên xe ga (slot S00026)
'use strict';

module.exports = {
  slug: 'cvt-la-gi-tren-xe-ga',
  title: 'CVT là gì: hộp số tự động trên xe ga',
  seoTitle: 'CVT là gì: hộp số tự động trên xe ga',
  metaDescription: 'CVT là gì trên xe ga: nguyên lý pulley và dây curoa, vì sao xe ga không sang số, cách bảo dưỡng curoa và oil, dấu hiệu CVT hỏng và thói quen dùng đúng.',
  summary: 'Xe ga không có cần sang số và không có côn tay — nhưng nó không phải "không có hộp số": bên trong là một cụm truyền động tên CVT, bộ máy biến tốc vô cấp làm đúng việc người lái xe số làm bằng tay chân — điều chỉnh tỷ số truyền giữa máy và bánh sau. Bài viết này giải thích CVT theo lối từ điển thuật ngữ nhưng đi trọn một vòng: cụm pulley và dây curoa vận hành ra sao, vì sao ga lên là vòng tua máy gào trước khi xe tương ứng, dầu hộp số đóng vai trò gì, các dấu hiệu CVT yếu và cách bảo dưỡng, kèm phần phân biệt các tiếng kêu bình thường với tiếng kêu báo hỏng — để người đi xe ga hiểu chiếc xe mình đang ngồi trên hộp số nào.',
  quickAnswer: 'CVT (transmission vô cấp) là hộp số tự động trên xe ga: hai pulley biến đường kính qua bi và lò xo, nối bằng dây curoa — khi ga tăng, pulley trước siết làm curoa chạy vòng lớn hơn, thay đổi tỷ số truyền liên tục thay vì từng số rời rạc như xe số. CVT gần như không cần bảo dưỡng từ người lái ngoài thay curoa và dầu đúng kỳ; dấu hiệu hỏng: giật khi tăng tốc, curoa rít, máy gào mà xe không nhích.',
  keyPoints: [
    'CVT viết tắt của continuously variable transmission — truyền động biến tốc vô cấp: thay đổi tỷ số truyền mượt liên tục thay vì nhảy từng cấp số như hộp số xe số.',
    'Ba thành phần chính: pulley trước gắn máy (biến đường kính theo cảm biến ga), pulley sau gắn trục bánh (lò xo và bi ly tâm), và dây curoa truyền lực giữa hai pulley.',
    'Cảm giác "máy gào mà xe chưa nhích" khi tăng tốc là đặc tính CVT: vòng tua máy nhảy lên vùng có mô-men mạnh trước, rồi tỷ số truyền chạy theo sau — không phải lỗi xe.',
    'Bảo dưỡng CVT là việc của kỳ: thay curoa đúng số km khuyến nghị, thay dầu hộp số (nhiều người nhầm là không cần), vệ sinh buồng CVT khỏi bụi curoa.',
    'Dấu hiệu CVT hỏng có thứ tự: giật lúc khởi động, rít kim loại khi tăng tốc, vọt giật cục khi ga lên, curoa có vết nứt hay sợi đứt — tới kỳ kiểm sớm thay chờ.',
    'Thói quen ảnh hưởng CVT: rồ ga tại chỗ kéo dài làm curoa nóng mòn sớm; vào nước ngập sâu làm bụi - nước vào buồng CVT; chở quá tải làm cụm pulley làm việc ngoài thiết kế.',
  ],
  category: 'wiki',
  hub: 'thuat-ngu-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['CVT', 'hộp số vô cấp', 'dây curoa', 'pulley', 'dầu hộp số', 'xe ga'],
  keywords: ['cvt là gì', 'cvt xe ga', 'hộp số tự động xe ga', 'dây curoa xe ga', 'pulley xe ga', 'bảo dưỡng cvt', 'xe ga có cần sang số không'],
  sections: [
    {
      h2: 'CVT là gì: định nghĩa và chỗ đứng trên xe ga',
      html: `<p>CVT là viết tắt của continuously variable transmission — truyền động biến tốc vô cấp. "Vô cấp" là từ khóa: hộp số xe số có một tập cấp số cố định (một, hai, ba, bốn...), mỗi lần sang số là một cú nhảy tỷ số; CVT không có cấp — tỷ số truyền trượt liên tục trong cả một dải, mượt như kéo cần chỉnh âm lượng thay vì bấm nút chuyển kênh. Đó là lý do xe ga không có cần sang số và không có côn: không có cấp để sang và không có côn để ngắt — cụm CVT tự điều chỉnh theo ga mà người lái vặn.</p>
<p>Trên sơ đồ truyền lực của xe ga: máy → pulley trước (bán kính thay đổi) → dây curoa → pulley sau (bán kính thay đổi) → trục bánh sau. So sánh với xe số: máy → côn → hộp số cấp → xiên xích → bánh sau, và người lái điều khiển hai cụm giữa bằng tay trái và chân trái. CVT dồn toàn bộ việc điều khiển đó vào một động tác duy nhất — vặn ga — và đây chính là trải nghiệm làm nên bản sắc xe ga: đơn giản, không thao tác, hợp dòng chảy đô thị.</p>
<p>Đổi lấy sự đơn giản ấy là một cụm máy có cách hao mòn riêng: curoa là vật phẩm tiêu hao (như lốp, như nhớt — đến kỳ là thay), pulley và bi ly tâm mòn dần theo chục nghìn cây số, và toàn bộ nằm trong buồng kín mà người lái không nhìn thấy được từ ngoài. CVT khỏe nếu được bảo dưỡng đúng kỳ, và hỏng kiểu âm thầm nếu bị bỏ — vì thế phần sau của bài viết dành cho các dấu hiệu đọc được từ tay ga và tai.</p>
<p>Câu hỏi phụ thường đi kèm định nghĩa: "xe ga có phải xe không có hộp số?" — không đúng: hộp số có, chỉ là loại vô cấp và tự động hoàn toàn. Hiểu đúng điều này thay đổi cả cách chăm xe: hộp số là bộ phận có dầu cần thay, có chi tiết tiêu hao cần kỳ kiểm — chứ không phải khối đen vô hình gì không cần đụng tới.</p>`,
    },
    {
      h2: 'Hai pulley và một dây curoa: nguyên lý vận hành',
      html: `<p>Bên trong buồng CVT có hai pulley (ròng ràng biến đường kính) và một dây curoa nối chúng. Pulley trước gắn với trục máy, cấu tạo từ hai đĩa nghiêng khít nhau: khi hai đĩa siết gần, curoa bị đẩy chạy vòng ngoài lớn; khi hai đĩa dãn ra, curoa tụt xuống vòng trong nhỏ. Pulley sau gắn trục bánh, tương tự nhưng vận hành theo lò xo và cụm bi ly tâm. Trò phối hợp giữa hai pulley — một siết một nhả — chính là việc "sang số vô cấp".</p>
<p>Chuyện gì xảy ra khi vặn ga. Ga thấp (xe vừa đề, chạy chậm): pulley trước dãn, curoa chạy vòng nhỏ; pulley sau siết, curoa vòng lớn — tỷ số truyền cao, máy quay nhiều vòng cho một vòng bánh: vừa đề, leo dốc nhẹ, đi chậm. Ga cao (tăng tốc): pulley trước siết dần, curoa đẩy ra vòng lớn; pulley sau nhả dần theo lò xo — tỷ số hạ xuống, mỗi vòng máy ra nhiều vòng bánh hơn: xe tăng tốc rồi nhập hồi trên đường trường.</p>
<p>Hiện tượng "máy gào trước, xe nhích sau" khi rồ ga — gọi là vòng tua nhảy — không phải lỗi mà là hậu quả trực tiếp của nguyên lý: CVT điều chỉnh tỷ số bằng lực ly tâm và lực lò xo, tức là phải có máy quay nhanh mới siết pulley; curoa trượt nhẹ trong lúc tỷ số chạy theo. Cảm giác này khác hẳn xe số (máy và bánh khớp cứng qua các cặp bánh răng) — và là điểm người mới đi xe ga cần làm quen, thay vì tưởng xe bị hỏng.</p>
<p>Điều khiển cái gì ở đâu: trên pulley trước, các con bi ly tâm trong rãnh li tâm văng ra theo tốc độ máy và đẩy đĩa siết; trên pulley sau, lò xo lớn kháng lại mức siết, giữ lực căng curoa và quyết định "nhạy ga" của xe. Khi các chi tiết này mòn — bi mòn, rãnh mòn, lò xo mềm đi — sự ăn khớp lệch: xe giật, vòng tua nhảy sai thời điểm, curoa bị cào mòn vẹt. Đó là toàn bộ cơ chế dẫn tới các dấu hiệu hỏng ở phần sau.</p>`,
    },
    {
      h2: 'Bảo dưỡng CVT: curoa, dầu hộp số và bụi',
      html: `<p>Bộ ba kỳ bảo dưỡng của CVT. Món một — dây curoa: vật phẩm tiêu hao đúng nghĩa, sổ tay mỗi dòng xe ghi kỳ thay riêng (tính theo số km, thường vào cỡ chục nghìn cây số một lần tùy dòng và điều kiện chạy). Curoa hỏng theo hai đường: mòn về bề mặt (răng curoa ăn mòn, mặt chạy xẹp dần — làm trượt và vòng tua nhảy nhiều hơn) và già về lõi (các sợi lõi bị đứt lác đác, thân curoa nứt vệt nhỏ — dạng này đe dọa đứt ngang giữa đường). Kỳ kiểm đơn giản: tháo nắp buồng CVT, soi curoa — vết nứt ngang thân, răng mòn nhẵn, hoặc thân phình to đều là tín hiệu thay.</p>
<p>Món hai — dầu hộp số (dầu láp): nhiều người đi xe ga cả đời tin rằng "xe ga không có dầu hộp số" — nhầm; cụm pulley sau có bộ bánh răng giảm cuối ngâm trong dầu, và dầu này đến kỳ thay y như dầu máy. Dầu láp hết hạn làm bánh răng láp mòn, tiếng kêu ào ào từ phía sau khi chạy, và toàn cụm giảm cuối — bộ phận đắt — hư trước khi bạn kịp nghe rõ. Kỳ thay ghi trong sổ tay, và thường bị bỏ qua trong các buổi "thay nhớt tổng" ở tiệm thiếu quy trình: chủ xe cần chủ động hỏi.</p>
<p>Món ba — bụi buồng CVT: mỗi chuyến chạy, curoa và pulley mài nhau tạo bụi curoa đen đóng trong buồng kín. Bụi dày làm bi ly tâm kẹt nhẹ, làm rãnh trượt đơ, làm CVT "khô" ở phần điều khiển tỷ số dù mọi chi tiết còn tốt. Vệ sinh buồng CVT (thổi, lau, không rửa nước tùy khuyến nghị thợ) khi thay curoa là thói quen rẻ nhất để cụm vận hành đúng — và là dịp duy nhất nhìn được bi, lò xo, rãnh pulley để đánh giá cả cụm còn chuẩn hay không.</p>
<p>Về dầu máy và CVT — một điểm hay nhầm: dầu máy bôi trơn đầu máy không liên quan buồng CVT (buồng CVT khô, chỉ có bụi không có dầu); chỉ dầu láp mới thuộc cụm truyền động. Vì thế "thay nhớt là chăm được CVT" là nói sai — thay nhớt chăm máy, còn CVT cần buổi kiểm riêng theo kỳ của nó.</p>`,
    },
    {
      h2: 'Dấu hiệu CVT hỏng và cách đọc tiếng kêu',
      html: `<p>Dấu hiệu một: giật lúc khởi động — nhả phanh, vặn ga nhẹ, xe giật cục thay vì trôi mượt. Nguyên nhân thường: bi ly tâm mòn kẹt, rãnh pulley mòn không đều, hoặc lò xo pulley sau yếu. Đây là dấu sớm nhất, rẻ sửa nhất nếu đem đi kịp — kéo dài là curoa cào xấu bề mặt pulley, chi phí leo thang.</p>
<p>Dấu hiệu hai: rít kim loại khi tăng tốc — tiếng rít chói từ phía cụm CVT khi ga lên, thường là curoa trượt trên pulley do mòn mặt hoặc bụi đóng làm ma sát kém. Rít kéo dài không chỉ khó chịu: đó là tiếng của curoa đang bị cào từng phát — vật tiêu hao đang bị hủy nhanh hơn kỳ của nó, và lúc rít to hẳn thì curoa đã gần đường đứt.</p>
<p>Dấu hiệu ba: máy gào mà xe không nhích — vòng tua nhảy bất thường: máy lên nhanh, xe chậm lại hoặc đứng. Nhóm nguyên nhân: curoa đã mòn tới mức trượt lớn (không đủ lực truyền), hoặc cụm pulley siết không nổi do lò xo mềm. Đặc biệt nguy hiểm khi cần tăng tốc vượt: xe không tương ứng với ga là rủi ro giao thông thật, không chỉ là phiền hà kỹ thuật.</p>
<p>Dấu hiệu bốn, khẩn cấp: tiếng lạch cạch hoặc lục đục từ buồng CVT — khả năng cao curoa đứt sợi lõi đang quật trong buồng, hoặc bi vỡ. Dừng xe sớm, không chạy tiếp: curoa quật trong buồng có thể phá cả cụm pulley và nắp buồng — từ một món thay curoa thành một cụm CVT. Nhóm bốn dấu hiệu này đọc theo trình tự khó dần; nghe được từ dấu một là chuyện sửa giá một buổi, chờ tới dấu bốn là chuyện sửa cả tuần.</p>`,
    },
    {
      h2: 'Thói quen lái ảnh hưởng tuổi thọ CVT',
      html: `<p>Thói quen một: rồ ga tại chỗ. Mỗi lần ga "chào máy" tại chỗ, CVT điều chỉnh tỷ số nhưng bánh không chạy — curoa và pulley cào nhau mà không có việc thật: nhiệt dồn, bụi sinh nhiều hơn cần, bi ly tâm văng tới mức lớn lặp lại. Cũng không sao nếu thỉnh thoảng; thành thói quen với người hay "ga chào" là mòn sớm thấy rõ so với xe cùng đời.</p>
<p>Thói quen hai: vào nước ngập sâu. Buồng CVT không kín tuyệt đối ở mọi dòng — nước và bùn lọt qua các khe làm ba chuyện cùng lúc: curoa ướt trượt, bụi - đất vào rãnh pulley làm kẹt bi, và về lâu gây rỉ các chi tiết thép. Sau mỗi lần đi ngập đáng kể, buổi mở buồng CVT kiểm tra - vệ sinh sớm là khoản bảo hiểm hợp lý — đừng chờ tiếng kêu lên rồi mới nhớ chuyến ngập tháng trước.</p>
<p>Thói quen ba: chở quá tải và kéo dài Leo dốc nặng. CVT thiết kế cho vùng tải của xe ghi trong sổ tay; vượt tải lặp lại làm lò xo và bi làm việc ngoài vùng, mòn nhanh bất thường — biểu hiện trước khi hỏng là vòng tua nhảy nhiều hơn mỗi khi chở nặng. Với xe hay chở hai, chạy đồi: giảm bớt ga khi xe đã vào đà thay vì giữ ga tối theo bản năng — cho CVT thời gian chạy tỷ số thay vì ép nó trượt.</p>
<p>Thói quen bốn: chấp nhận bụi đường. Chạy thường xuyên đường đất, công trường là chất ma sát cho curoa mòn nhanh hơn kỳ — nhóm xe này nên rút ngắn kỳ kiểm curoa (mở buồng soi sớm hơn khuyến nghị). Ngược lại, xe chỉ chạy phố sạch, rãnh nước ít — giữ kỳ chuẩn là đủ. Điều chỉnh kỳ theo điều kiện thực của chuyến đi: sổ tay viết cho điều kiện trung bình, còn chiếc xe mình chạy điều kiện nào thì chính mình biết.</p>`,
    },
    {
      h2: 'CVT so với xe số và các câu hỏi thường gặp',
      html: `<p>So sánh trung thực, không phe phái. CVT mạnh về: thao tác đơn giản (một tay ga), mượt trong dòng đô thị (không sang số tại đèn đỏ), và bảo dưỡng phần người lái gần như không có. CVT yếu hơn về: hiệu suất truyền (curoa trượt nhẹ hơn cặp bánh răng — một phần lý do xe ga hao xăng hơn xe số cùng cỡ), khả năng gánh tải nặng đường dài (dây curoa không bằng xích - bánh răng khi kéo nặng liên tục), và chi phí khi hỏng lớn (cụm pulley đắt hơn hộp số xe số).</p>
<p>Câu hỏi một: "xe ga có phải bóp phanh thay côn khi đổ dốc?" — không cần và không nên như một thao tác bắt buộc: CVT không có côn để cháy; xuống dốc dài, giữ ga nhẹ cho máy hãm tự nhiên và phanh theo nhịp là đúng kỹ thuật chung cho cả hai loại xe. Câu hỏi hai: "curoa đang tốt có cần thay đúng kỳ không?" — có: lõi curoa già theo thời gian kể cả khi bề mặt còn đẹp, và curoa đứt giữa đường không báo trước — thay đúng kỳ là cách duy nhất trừ loại sự cố này.</p>
<p>Câu hỏi ba: "mua xe ga cũ thì soi CVT thế nào?" — ba điểm: mở nắp buồng soi curoa (nứt, mòn), nghe thử khi tăng tốc (rít, giật), và hỏi lịch sử thay curoa - dầu láp. Một cụm CVT được thay đúng kỳ nghe mượt và nhìn sạch — cụm bị bỏ quên có bụi dày và dấu vết cào; khác biệt nhìn được trong năm phút mở buồng. Câu hỏi bốn: "có 'nâng cấp' CVT cho khỏe hơn không?" — các phụ kiện 'chạy sport' thay bi, lò xo có tồn tại, nhưng đổi sự ăn khớp của hãng là đánh đổi độ bền và đúng nghĩa vận hành cho cảm giác nhất thời; với xe đi lại, giữ chuẩn hãng là lựa chọn khó có lỗi.</p>
<p>Chốt lại bằng một câu về bản chất: CVT là hộp số — hộp số tự động, vô cấp, gần như tàng hình với người lái — và mọi hộp số đều cần hai thứ từ chủ xe: dầu đúng kỳ và chi tiết tiêu hao thay đúng lúc. Hiểu được hai câu chữ "vô cấp" và "tự động" không có nghĩa là "bất tử", chiếc xe ga sẽ được chăm đúng cách nó xứng đáng.</p>`,
    },
  ],
  checklist: [
    'Tra sổ tay xe: kỳ thay dây curoa và kỳ thay dầu hộp số (dầu láp) của dòng xe mình — ghi vào sổ bảo dưỡng, đừng để tiệm bỏ qua dầu láp trong buổi thay nhớt.',
    'Mỗi kỳ thay curoa: vệ sinh luôn buồng CVT (bụi curoa đóng làm bi kẹt và pulley đơ) và nhờ thợ soi bi ly tâm, lò xo, rãnh pulley.',
    'Ghi nhớ bốn dấu hiệu CVT hỏng theo trình tự: giật lúc khởi động - rít khi tăng tốc - máy gào xe không nhích - lục đục trong buồng; gặp dấu nào cũng đem xe đi sớm.',
    'Sau mỗi lần đi ngập nước sâu: mở buồng CVT kiểm tra - vệ sinh sớm, không chờ tiếng kêu; curoa ướt trượt và bùn làm kẹt bi rất nhanh.',
    'Thói quen: không rồ ga tại chỗ làm thói quen "chào máy", giảm ga cho CVT chạy tỷ số khi chở nặng hoặc leo dốc dài thay vì giữ ga tối.',
    'Xe chạy đường bụi - đất - công trường thường xuyên: rút ngắn kỳ soi curoa so với khuyến nghị chuẩn của sổ tay.',
  ],
  warnings: [
    'Không chạy tiếp khi nghe lục đục hoặc lạch cạch từ buồng CVT — curoa đứt sợi đang quật trong buồng có thể phá cả cụm pulley và nắp, chi phí leo thang gấp nhiều lần.',
    'Không bỏ qua dầu hộp số vì tin "xe ga không có dầu láp" — cụm giảm cuối ngâm dầu, dầu hết kỳ làm bánh răng mòn và cụm đắt tiền hư trước khi có dấu rõ.',
    'Không dùng curoa trôi nổi không rõ nguồn gốc khi tới kỳ thay — curoa kém chất lượng đứt ngang giữa đường, và kéo theo hư hóc các chi phí khác.',
    'Không giữ ga tối khi chở nặng hoặc leo dốc dài lặp lại — ép CVT trượt liên tục làm lò xo, bi và curoa mòn sớm bất thường so với kỳ thiết kế.',
  ],
  notes: [
    'Bài viết mang tính kiến thức chung về CVT trên xe ga, không quảng bá cho hãng xe, loại curoa hay phụ kiện cụ thể nào; mọi kỳ bảo dưỡng và thông số phải đối chiếu sổ tay của dòng xe đang dùng.',
    'Cấu tạo CVT khác nhau chút đỉnh giữa các hãng và các dòng; các mô tả trong bài là nguyên lý chung — cách vận hành và bảo dưỡng cụ thể cần kiểm chứng trên chính xe mình.',
  ],
  references: [
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất xe ga — kỳ thay dây curoa, dầu hộp số và các khuyến nghị vận hành của cụm CVT theo từng dòng xe.',
    'Tài liệu kỹ thuật về truyền động vô cấp CVT — cấu tạo pulley, bi ly tâm, lò xo và nguyên lý biến tỷ số truyền.',
    'Hướng dẫn bảo dưỡng định kỳ của nhà sản xuất — quy trình kiểm tra buồng CVT, vệ sinh bụi và kiểm tra curoa tại các mốc số km.',
  ],
  related: ['dau-nhot-xe-may-loai-chu-ky-va-cach-chon', 'lich-bao-duong-xe-may-dinh-ky-theo-so-km', 'xe-hao-xang-nguyen-nhan-va-cach-xu-ly'],
};
