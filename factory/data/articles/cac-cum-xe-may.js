// AI WIKI TOTAL — wiki/cau-tao-xe: hướng dẫn chi tiết về các cụm xe máy (slot S00279)
'use strict';

module.exports = {
  slug: 'cac-cum-xe-may',
  title: 'Hướng dẫn chi tiết về các cụm xe máy',
  seoTitle: 'Các cụm xe máy: chia nhỏ cấu tạo theo từng cụm để dễ hiểu dễ sửa',
  metaDescription: 'Chia cấu tạo xe máy thành từng cụm nhỏ — nắp máy, đầu máy, lốc, truyền động, điện, treo, phanh — mỗi cụm vai trò gì và triệu chứng khi hỏng ra sao.',
  summary: 'Nhìn tổng thể một chiếc xe máy, người mới thường choáng ngợp vì quá nhiều chi tiết. Cách học hiệu quả là chia chiếc xe thành các cụm nhỏ theo chức năng: cụm nắp máy và hệ thống phân phối khí, cụm đầu máy với piston và trục khuỷu, cụm lốc và bộ truyền, cụm điện, cụm treo, cụm phanh và cụm điều khiển. Mỗi cụm chỉ cần hiểu một câu "nó làm gì" là đủ để nghe triệu chứng và đoán được đúng hướng. Bài viết đi qua từng cụm theo cách này, kèm triệu chứng đặc trưng khi cụm đó suy giảm.',
  quickAnswer: 'Chia xe máy thành các cụm để dễ hiểu: cụm nắp máy (cam, xupap) quản việc đóng mở khí; cụm đầu máy (piston, xilanh, trục khuỷu) sinh công; cụm lốc (nhông trước, côn, puly với xe tay ga) truyền lực ra bánh; cụm điện (ắc quy, máy phát, đánh lửa) cấp năng lượng; cụm treo và phanh giữ an toàn vận hành. Khi xe có triệu chứng, hãy xếp nó vào đúng cụm: tiếng kêu có nhịp theo tua máy thuộc cụm máy, tiếng kêu khi nảy xe thuộc cụm treo, đèn mờ thuộc cụm điện.',
  keyPoints: [
    'Chia xe thành cụm nhỏ giúp người mới ghi nhớ cấu tạo nhanh hơn nhiều so với học từng chi tiết rời rạc.',
    'Cụm nắp máy và đầu máy là nơi sinh công: triệu chứng thường là khó nổ, ì máy, kêu theo vòng tua.',
    'Cụm lốc và truyền động quyết định lực có tới bánh xe hay không: triệu chứng là tua lên mà xe không nhích.',
    'Cụm điện gồm nguồn, phát và tiêu thụ: triệu chứng là đề yếu, đèn mờ, khó nổ.',
    'Cụm treo và phanh quyết định an toàn: triệu chứng là nảy lục cục, đu đưa, rít khi phanh.',
    'Mỗi cụm có một loại dầu/mỡ bảo dưỡng riêng: không dùng lẫn nhớt máy, dầu phuộc, mỡ xích.',
  ],
  category: 'wiki',
  hub: 'cau-tao-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['cụm máy', 'nắp máy', 'đầu máy', 'lốc xe', 'truyền động', 'cụm điện', 'cụm phanh'],
  keywords: ['các cụm xe máy', 'cấu tạo cụm máy xe máy', 'nắp máy xupap', 'lốc xe tay ga', 'cụm điện xe máy', 'chức năng các cụm trên xe máy'],
  sections: [
    {
      h2: 'Cụm nắp máy và hệ thống phân phối khí',
      html: `<p>Nắp máy nằm phía trên động cơ, nơi chứa trục cam và hệ thống xupap — "người gác cổng" của buồng đốt. Mỗi chu trình, xupap nạp mở để hòa khí chảy vào, rồi đóng để piston nén, sau đó xupap xả mở thả khí cháy ra. Khe hở xupap phải nằm trong khoảng quy định: khe quá rộng tạo tiếng "khà khà" có nhịp và động cơ mất một phần nén; khe quá khít làm xupap không đóng kín, xe yếu và khó nổ máy lúc nguội.</p>
<p>Triệu chứng đặc trưng của cụm này: tiếng kêu có nhịp đều theo vòng tua máy, nghe rõ gần khu vực trên của máy; xe khó nổ sáng lạnh; hao xăng nhẹ. Việc chỉnh khe hở xupap theo định kỳ là một mục bảo dưỡng cơ bản trên động cơ 4 thì, chi phí thấp nếu làm đúng lịch.</p>
<p>Người mới lưu ý một điểm: tiếng xupap và tiếng "gõ máy" do cháy kích nổ dễ nhầm với nhau. Thử đổi cây xăng tốt và xem tiếng có giảm khi máy nóng chưa; nếu tiếng gõ nặng hơn khi vặn ga mạnh và kèm hiện tượng máy nóng nhanh, nên để thợ kiểm sớm hơn là tự kết luận lành tính.</p>`,
    },
    {
      h2: 'Cụm đầu máy: piston, xilanh và trục khuỷu',
      html: `<p>Đây là lõi sinh công của động cơ: piston chuyển động lên xuống trong xilanh, nhận lực nổ của hòa khí cháy, truyền qua tay quay sang trục khuỷu để biến thành chuyển động quay. Vòng găng piston giữ kín buồng đốt; khi găng mòn, nén giảm, nhớt lọt lên buồng đốt cháy tạo khói, máy yếu dần và hao nhớt — nhóm triệu chứng đặc trưng của "đầu máy già".</p>
<p>Chẩn đoán sơ bộ đầu máy là đo nén: một động cơ khỏe có trị số nén theo chuẩn hãng; nén thấp hơn rõ rệt kết hợp khói pô và hao nhớt chỉ về piston-xilanh hoặc xupap hở. Người dùng không tự đo được nhưng biết nhóm triệu chứng này giúp tránh thay đồ lệch hướng — ví dụ thay bugi, lọc gió bừa bãi trong khi vấn đề nằm trong nén máy.</p>
<p>Bảo dưỡng cho cụm này chỉ có một từ: nhớt. Nhớt đúng loại tạo lớp màng bôi trơn giữ piston và trục khuỷu sống lâu; nhớt sai loại, quá hạn hoặc cạn là con đường ngắn nhất tới đầu máy mòn sớm. Thay nhớt đúng chu kỳ là khoản bảo dưỡng rẻ nhất so với giá trị của cụm mà nó bảo vệ.</p>`,
    },
    {
      h2: 'Cụm lốc và bộ truyền động',
      html: `<p>Sau khi trục khuỷu quay, lực phải tới được bánh sau — công việc của cụm lốc và bộ truyền. Trên xe số, trục khuỷu nối qua côn sang hộp số, từ hộp số ra nhông trước, sên và dĩa sau. Trên xe tay ga, thay vì hộp số là cụm truyền vô cấp: dây cua nối trục khuỷu với puly trước, puly sau và chuột cống tự đổi tỷ số theo tua máy.</p>
<p>Triệu chứng của cụm này dễ phân biệt: động cơ tua lên nhanh nhưng xe không tăng tốc tương xứng — nghĩa là trượt xảy ra giữa tua máy và bánh xe. Trên xe tay ga, thủ phạm thường là chuột cống mòn, côn trượt hoặc puly rãnh; trên xe số, thường là má côn mòn hoặc sên lỏng quá mức. Tiếng kêu lục cục khi ga giật tại chỗ cũng thường nằm ở đây.</p>
<p>Bảo dưỡng cụm này cũng khác nhau: xe số dưỡng xích bằng mỡ định kỳ và thay cả bộ nhông sên dĩa cùng lúc; xe tay ga thì giặt bụi cụm lốc, thay chuột cống đúng lúc và thay dầu hộp truyền theo chu kỳ. Đây là cụm mà việc "chờ thêm chút nữa" khiến chi phí nhân lên vì một chi tiết mòn kéo mòn chi tiết kề cạnh.</p>`,
    },
    {
      h2: 'Cụm điện: nguồn, phát và tiêu thụ',
      html: `<p>Cụm điện gồm ba phần khép kín thành một vòng: ắc quy là nguồn dự trữ, máy phát cùng chỉnh lưu là phần phát khi máy quay, và các thiết bị tiêu thụ — hệ thống đánh lửa, đèn, còi, đồng hồ. Hiểu theo dòng: khi máy tắt, mọi thứ ăn từ ắc quy; khi máy chạy, máy phát gánh cả tiêu thụ lẫn sạc lại cho ắc quy.</p>
<p>Triệu chứng phân theo phần: đề yếu, đèn mờ khi tắt máy — nghi ắc quy; thay ắc quy mới mà vài ngày lại yếu — nghi chỉnh lưu hoặc máy phát; xe khó nổ dù ắc quy khỏe — nghi bugi, bô bin, cục đánh lửa hoặc cảm biến trên xe phun xăng điện tử. Chẩn đoán trong cụm này rẻ nhất khi đi đúng trình tự, tốn kém nhất khi thay bừa.</p>
<p>Bảo dưỡng thực tế: giữ hai cọc ắc quy sạch và siết chặt, không rút thêm phụ kiện quá tải, không để xe dưới mưa ẩm nhiều ngày liên tục. Trên xe dùng phun xăng điện tử, khi đèn check sáng thì mang xe đọc mã lỗi thay vì mò mẫm — cách tiết kiệm nhất cả thời gian lẫn tiền.</p>`,
    },
    {
      h2: 'Cụm treo, phanh và cụm điều khiển',
      html: `<p>Ba cụm cuối cùng quyết định xe đi an toàn và nghe theo tay lái. Cụm treo gồm phuộc trước, giảm xóc sau và các vòng bi cổ — giữ bánh xe bám mặt đường. Cụm phanh gồm má phanh hoặc kẹp đĩa, đùm phanh, dây/côn phanh — biến quyết định dừng của người lái thành lực thực tế trên vành. Cụm điều khiển gồm tay lái, ga, cần số, các công tắc — nơi tiếp xúc trực tiếp giữa người và xe.</p>
<p>Triệu chứng của ba cụm này đều "cảm nhận được": xe nảy lục cục, đu đưa tay lái, phanh rít hoặc mềm, ga đơ hoặc giật, cần số nặng. Vì triệu chứng rõ ràng như vậy, người lái thường phát hiện sớm — vấn đề chỉ là có nghiêm túc xử lý hay không. Phanh và treo là hai cụm không nên trì hoãn trong mọi tình huống.</p>
<p>Bảo dưỡng ba cụm trên cũng là phần người dùng tự làm được nhiều nhất: kiểm tra và bơm lốp, thổi sạch má phanh và vành, tra mỡ cần ga, kiểm tra độ rơ dây phanh, bóp xe nghe tiếng treo, siết ốc định kỳ. Mười lăm phút mỗi tuần dành cho các việc này giúp xe luôn ở trạng thái an toàn để ra đường.</p>`,
    },
  ],
  checklist: [
    'Nhớ câu hỏi định vị triệu chứng: kêu theo tua máy (cụm máy), kêu theo nảy xe (cụm treo), tua lên xe không nhích (cụm truyền).',
    'Chỉnh khe hở xupap theo định kỳ trên động cơ 4 thì.',
    'Thay nhớt đúng chu kỳ — khoản bảo vệ đầu máy rẻ nhất.',
    'Dưỡng xích hoặc giặt bụi lốc theo loại xe của mình.',
    'Giữ cọc ắc quy sạch; đèn check sáng thì đọc mã lỗi trước khi thay đồ.',
    'Kiểm tra treo và phanh mỗi tuần bằng thao tác bóp xe và bóp phanh tại chỗ.',
  ],
  warnings: [
    'Không tự tháo nắp máy hoặc cụm lốc khi chưa có dụng cụ và kinh nghiệm — dễ hở mép gioăng gây rò dầu.',
    'Phanh mềm hoặc rít kéo dài: kiểm ngay, không chạy tiếp với phanh không tin cậy.',
    'Mỗi cụm một loại dầu bảo dưỡng riêng: không dùng lẫn nhớt máy, dầu phuộc, mỡ xích.',
  ],
  notes: [
    'Bài viết chia cấu tạo theo cụm để dễ ghi nhớ, mang tính tham khảo chung cho xe số và xe tay ga phổ thông.',
    'Vị trí và chu kỳ bảo dưỡng từng cụm khác nhau theo dòng xe; hãy đối chiếu sổ tay hãng.',
  ],
  references: [
    'Tài liệu đào tạo kỹ thuật nghề về sửa chữa xe gắn máy — phân cấp cụm máy và truyền động.',
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất — sơ đồ cấu tạo và lịch bảo dưỡng theo cụm.',
    'Giáo trình động cơ đốt trong — hệ thống phân phối khí và cơ cấu piston trục khuỷu.',
  ],
  related: [
    'cau-tao-xe-may-tong-quan-cac-he-thong',
    'he-thong-dien-xe-may-tong-quan',
    'bi-em-xe-ga-cau-tao-va-thoi-diem-thay',
    'cau-chi-xe-may-vai-tro-kiem-tra-va-thay',
  ],
};
