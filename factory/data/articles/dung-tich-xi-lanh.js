// AI WIKI TOTAL — wiki/dong-co: tổng hợp kiến thức dung tích xi lanh (slot S00284)
'use strict';

module.exports = {
  slug: 'dung-tich-xi-lanh',
  title: 'Tổng hợp kiến thức: dung tích xi lanh',
  seoTitle: 'Dung tích xi lanh xe máy: ý nghĩa, cách tính và chọn xe theo dung tích',
  metaDescription: 'Dung tích xi lanh là gì, tính thế nào, quan hệ với công suất và tua máy, và nên chọn xe dung tích bao nhiêu theo nhu cầu thực tế.',
  summary: 'Con số 50cc, 110cc, 150cc ghi trên tài liệu xe chính là dung tích xi lanh — chỉ số quen thuộc nhất nhưng ít người hiểu đúng ý nghĩa. Dung tích xi lanh quyết định lượng hòa khí mỗi chu trình động cơ nạp được, từ đó chi phối sức mạnh tiềm năng; nhưng nó không quyết định một mình: tỷ số nén, thời điểm phối khí, cách phối khí v.v. cùng góp phần. Bài viết giải thích dung tích xi lanh theo cách tổng hợp: nó là gì, tính ra sao, quan hệ thực tế với công suất và cách chọn xe theo dung tích phù hợp nhu cầu đi lại hằng ngày.',
  quickAnswer: 'Dung tích xi lanh là thể tích buồng cháy mà piston quét qua trong một chu trình, tính bằng đường kính xy lanh nhân với chiều dài hành trình piston. Xe 50cc nạp ít hòa khí nên nhẹ và tiết kiệm; xe 150cc nạp nhiều hơn nên khỏe hơn khi chở nặng hoặc lên dốc. Dung tích lớn hơn thường đi kèm xe nặng hơn và hao xăng hơn, nên chọn dung tích theo nhu cầu: đi phố một mình dùng xe nhỏ gọn, thường xuyên chở người hoặc đi xa nên chọn dung tích lớn hơn.',
  keyPoints: [
    'Dung tích xi lanh là thể tích piston quét trong một chu trình: đường kính nhân chiều dài hành trình.',
    'Dung tích quyết định lượng hòa khí mỗi lần cháy — nền của công suất tiềm năng, không phải toàn bộ.',
    'Cùng dung tích, xe có thể khác sức mạnh rõ rệt do tỷ số nén, phối khí và điều chỉnh của từng hãng.',
    'Dung tích lớn hơn thường nghĩa là khỏe hơn khi chở nặng — lên dốc, nhưng hao xăng và xe nặng hơn.',
    'Xe dưới 50cc thuộc nhóm hạn chế tốc độ theo quy định — cần phân loại giấy phép lái xe cho đúng.',
    'Chọn xe theo dung tích nên đi từ nhu cầu: số người chở, lộ trình phố hay đường trường, cân nặng người lái.',
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['dung tích xi lanh', 'phân khối', 'công suất', 'mô men xoắn', 'hành trình piston', 'đường kính xy lanh'],
  keywords: ['dung tích xi lanh là gì', 'phân khối xe máy', 'xe 50cc 110cc 150cc', 'chọn xe theo phân khối', 'công suất và dung tích xi lanh', 'cc xe máy ý nghĩa'],
  sections: [
    {
      h2: 'Dung tích xi lanh là gì và tính như thế nào',
      html: `<p>Mỗi khi piston đi từ điểm c dưới lên điểm c trên, nó "quét" qua một thể tích buồng đốt; thể tích ấy chính là dung tích xi lanh, hay phân khối, đơn vị là centimet khối — viết tắt cc. Công thức giản dị: diện tích mặt xy lanh (tính từ đường kính) nhân với chiều dài hành trình piston. Một xy lanh đường kính lớn kết hợp hành trình dài cho dung tích lớn; các nhà thiết kế chọn tỷ lệ giữa hai chiều này theo tính cách máy muốn tạo ra.</p>
<p>Khi quảng cáo ghi "150cc", đó là dung tích một xy lanh trên xe một xy lanh; các xe nhiều xy lanh thì cộng lại. Dung tích chỉ nói mỗi chu trình máy nạp tối đa bao nhiêu hòa khí — giống sức chứa của một hơi thở; còn máy "hô hấp" nhanh bao nhiêu nhờ tua máy, thời điểm mở xupap và độ thông thoát của họng nạp. Vì thế hai xe cùng 150cc có thể cho cảm giác rất khác nhau.</p>
<p>Hệ quả nhỏ ít người để ý: dung tích lớn hơn, mỗi chu trình đốt nhiều xăng hơn, nên cùng một cung đường, xe phân khối lớn tiêu thụ nhiên liệu nhiều hơn trừ khi tốc độ thấp hơn nhiều so với khả năng. Ngược lại xe quá nhỏ phải chạy gần giới hạn trên thường xuyên lại hao xăng và mau mòn hơn số liệu lý thuyết.</p>`,
    },
    {
      h2: 'Dung tích, công suất và mô men xoắn — ba chỉ số hay bị nhầm lẫn',
      html: `<p>Công suất (nếu ghi mã lực hoặc kW) nói máy làm được bao nhiêu việc trong một đơn vị thời gian — phụ thuộc cả lực lẫn tốc độ quay. Mô men xoắn là lực xoắn tức thời tại trục, quyết định cảm giác "bốc" khi ra ga từ tốc độ thấp. Hai chỉ số này đọc kèm dải tua máy mới có ý nghĩa: cùng một con số công suất, xe đạt ở tua thấp êm và dễ đi phố hơn xe đạt ở tua rất cao nhưng yếu khi xuống tua.</p>
<p>Dung tích xi lanh liên quan trực tiếp đến mô men: xy lanh lớn đốt nhiều hòa khí hơn mỗi chu trình, tạo lực dồi dào ở tua thấp. Đó là lý do xe phân khối lớn kéo hai người lên dốc nhẹ nhàng, trong khi xe 50cc cùng việc đó phải "gào" tua cao. Công suất thì còn phụ thuộc mức độ "quay nhanh" của máy — nhiều xe nhỏ tua cao vẫn ra công suất lớn nhưng trong dải hẹp.</p>
<p>Người chọn xe nên đọc cả ba chỉ số cùng đường cong công suất mô men nếu có, thay vì chỉ so một con số phân khối. Một câu hỏi thực tế hơn mọi thông số: xe chở trọng lượng hằng ngày của bạn lên dốc quen thuộc có nhẹ nhàng không — và câu trả lời ấy thường nói đúng hơn mọi bảng thông số.</p>`,
    },
    {
      h2: 'Chọn dung tích theo nhu cầu thực tế',
      html: `<p>Nhóm dưới 50cc: xe moped và xe điện hỗ trợ, gọn nhẹ, tốc độ bị giới hạn theo quy định đối với xe máy dưới 50cc, hợp học sinh đi học quãng ngắn và người đi chợ trong khu dân cư. Điểm mạnh là tiết kiệm và dễ lùa trong phố; điểm yếu là sức chở và khả năng đường trường gần như không có.</p>
<p>Nhóm 110–125cc: "dân số" của xe phổ thông Việt Nam, cân bằng giữa khỏe vừa đủ cho một người thêm occasionally một người sau, nhẹ, rẻ bảo dưỡng. Đi phố là thế mạnh; đường trường quãng vừa cũng ổn nếu không chở nặng. Nhóm 150–160cc: dành cho người thường xuyên chở hai người, đi xa cuối tuần hoặc muốn dự trữ sức khi vượt xe trên quốc lộ. Nhóm 250cc trở lên: thiên về sở thích và đường dài, chi phí bảo dưỡng và nhiên liệu tăng theo.</p>
<p>Một lỗi chọn xe phổ biến: mua xe quá nhỏ so với trọng lượng người lái — xe yếu tương đối, phải kéo tua cao liên tục, hao xăng và mau mòn. Trọng lượng người lái và hành lý hằng ngày nên nằm trong phạm vi thiết kế của xe, và dung tích xi lanh là chỉ số đầu tiên tham chiếu cho điều đó.</p>`,
    },
    {
      h2: 'Dung tích xi lanh và quy định pháp lý',
      html: `<p>Phân khối không chỉ là kỹ thuật — nó liên quan giấy tờ. Xe dưới 50cc thuộc nhóm không phải giấy phép lái xe hạng A1 theo quy định hiện hành, trong khi xe trên 50cc yêu cầu giấy phép lái xe mô tô hạng tương ứng. Khi mua xe cũ, đối chiếu dung tích ghi trong giấy đăng ký với thực tế xe là một bước kiểm tra cơ bản: xe đã "nâng xi lanh" hoặc thay máy khác phân khối mà không khai báo sẽ rắc rối khi đăng kiểm.</p>
<p>Chi phí vận hành cũng dịch theo phân khối: phí trước bạ, phí đường bộ một số nhóm và đặc biệt mức tiêu hao nhiên liệu đều tăng dần. Người cân ngân sách hằng tháng nên tính theo cây số thực tế của mình: một xe 150cc đi 20 cây mỗi ngày ở phố đông có thể vừa vặn, nhưng nếu chỉ đi 5 cây trong hẻm thì phần lớn sức của nó bỏ không.</p>
<p>Cuối cùng là bảo hiểm trách nhiệm dân sự bắt buộc: loại xe, dung tích và tình trạng giấy tờ ảnh hưởng đến hiệu lực khi có sự cố. Chọn dung tích đúng nhóm giấy phép mình có và giữ giấy tờ khớp thực tế là hai nguyên tắc pháp lý đơn giản nhưng nhiều người bỏ qua tới khi cần thì đã muộn.</p>`,
    },
    {
      h2: 'Những hiểu lầm thường gặp về phân khối',
      html: `<p>Hiểu lầm một: "phân khối lớn là chạy nhanh hơn". Không hẳn — tốc độ tối đa còn phụ thuộc tỷ số truyền, giới hạn thiết kế và surtout trọng lượng; nhiều xe 125cc đường trường chạy thoải mái hơn một xe 150cc cắt phố. Hiểu lầm hai: "xe lớn hao xăng hơn luôn luôn" — xe lớn đi đều tốc độ thấp thường lại tiết kiệm hơn xe nhỏ phải gào ga, vì xe nhỏ làm việc gần giới hạn của nó.</p>
<p>Hiểu lầm ba: "nâng xi lanh là khỏe hơn". Việc nâng dung tích bằng thay piston xy lanh lớn hơn làm thay đổi cả tỷ số nén, thời điểm phối khí và nhu cầu làm mát; làm thiếu tính toán thường kết thúc bằng máy nóng, cháy piston và tuổi thọ ngắn. Với xe đang trả góp hoặc đi đăng kiểm định kỳ, nâng xi lanh còn đưa xe ra ngoài số liệu đăng ký.</p>
<p>Hiểu lầm bốn: "đổi xe lớn là giải pháp mọi bất mãn". Nếu bất mãn nằm ở chở nặng hoặc đường dài thì đúng; nếu nằm ở kiểu ngồi, yên cứng hay tiếng ồn, đổi xe đôi khi chỉ đổi một tính cách mà giữ nguyên vấn đề. Chọn xe nên bắt đầu từ nhật ký lộ trình thực tế của chính mình, và dung tích xi lanh chỉ là một trong vài con số phục vụ quyết định đó.</p>`,
    },
  ],
  checklist: [
    'Đối chiếu dung tích ghi trên xe với giấy đăng ký khi mua xe cũ.',
    'Chọn phân khối theo trọng lượng người lái và người chở hằng ngày.',
    'Đọc kèm công suất và mô men với dải tua máy thay vì chỉ so phân khối.',
    'Xác nhận nhóm giấy phép lái xe phù hợp với dung tích xe định mua.',
    'Tính chi phí nhiên liệu theo cây số thực tế của bạn, không theo quảng cáo.',
    'Không nâng xi lanh khi chưa tính đầy đủ hệ quả kỹ thuật và pháp lý.',
  ],
  warnings: [
    'Không mua xe đã nâng xi lanh chưa khai báo — rắc rối đăng kiểm rơi đúng lúc người mua.',
    'Xe dưới 50cc vẫn phải tuân thủ giới hạn tốc độ và quy định giao thông như mọi xe.',
    'Không kéo xe nhỏ chở nặng vượt tải trọng thiết kế — hao mòn và mất an toàn.',
  ],
  notes: [
    'Bài viết tổng hợp kiến thức về dung tích xi lanh cho người chọn xe, mang tính tham khảo.',
    'Quy định giấy phép lái xe và phân khối theo văn bản pháp luật hiện hành của cơ quan có thẩm quyền.',
  ],
  references: [
    'Giáo trình động cơ đốt trong — thông số kết cấu piston xy lanh và dung tích làm việc.',
    'Thông tư của Bộ Giao thông vận tải về phân loại phương tiện và giấy phép lái xe mô tô hai bánh.',
    'Tài liệu công bố thông số kỹ thuật của các nhà sản xuất xe máy tại thị trường Việt Nam.',
  ],
  related: [
    'piston-xy-lanh',
    'ty-so-nen',
    'xe-50cc-can-bang-lai-khong',
    'phan-loai-xe-may',
  ],
};
