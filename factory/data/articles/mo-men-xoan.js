// AI WIKI TOTAL — wiki/thuat-ngu-xe: hướng dẫn chi tiết về mô men xoắn (slot S00311)
'use strict';

module.exports = {
  slug: 'mo-men-xoan',
  title: 'Hướng dẫn chi tiết về mô men xoắn',
  seoTitle: 'Mô men xoắn xe máy là gì: Nm, lực kéo và khác công suất ra sao',
  metaDescription: 'Mô men xoắn là gì, đơn vị Nm nghĩa sao, mô men khác công suất ở đâu, vì sao mô men quyết định cảm giác kéo của xe, và cách đọc thông số xe.',
  summary: 'Mô men xoắn là chỉ số bị hiểu lầm nhiều nhất trên bảng thông số xe: người ta đọc "9,5 Nm tại 6.500 vòng" mà không biết nó nói gì về cảm giác ngồi trên xe. Thực tế mô men là khái niệm vật lý gần gũi nhất với người lái — nó chính là "lực kéo" mà ta cảm nhận mỗi lần ra ga: xe bốc lên hay ì ịch, leo dốc gọn hay đuối. Bài hướng dẫn này giải thích mô men bằng hình ảnh thật (lực vặn nắp chai, đòn bẩy), đơn vị Nm, vì sao mô men luôn đi kèm một vòng tua cụ thể, và khác công suất như thế nào — vì sao xe mô men lớn chạy phố dễ chịu hơn xe công suất lớn nhưng mô men nhỏ. Phần hai là ý nghĩa thực tiễn: đọc bảng thông số xe mới ra sao, mô men của xe phổ thông so với xe phân khối khác bao nhiêu, và vì sao chạy phố dùng phần dưới của dải mô men — nơi người lái sống 90% thời gian.',
  quickAnswer: 'Mô men xoắn là lực xoay — đo bằng Nm (newton-mét): lực 1 newton tác động tại cánh tay đòn dài 1 mét. Trên xe, mô men là lực xoắn trục khuỷu sinh ra, quyết định cảm giác kéo khi ra ga và leo dốc; công suất (mã lực) là tốc độ sinh công, quyết định tốc độ tối đa. Công thức nối hai đại lượng: công suất tỷ lệ với mô men nhân vòng tua. Mô men luôn ghi kèm một vòng tua cụ thể ("9,5 Nm tại 6.500 vòng") vì lực xoay thay đổi theo tốc độ máy. Xe mô men lớn ở tua thấp chạy phố dễ chịu, tăng tốc gọn; xe hướng công suất cần vặn tua cao mới ra sức — kiểu chạy đường trường.',
  keyPoints: [
    'Mô men xoắn (Nm) là lực xoay — cảm giác "lực kéo" người lái thấy khi ra ga.',
    'Công suất là tốc độ sinh công (mã lực); hai đại lượng nối nhau qua vòng tua.',
    'Mô men luôn đi kèm vòng tua: giá trị mô men thay đổi theo tốc độ quay máy.',
    'Xe mô men lớn ở tua thấp dễ chịu trong phố; xe công suất lớn hợp đường trường vặn tua.',
    'Xe phổ thông 110-150cc có mô men khoảng 8-14 Nm; phân khối thể thao gấp nhiều lần.',
    'Chạy xe trong phần dưới của dải mô men — nơi tua thấp — giúp bền máy và tiết kiệm.',
  ],
  category: 'wiki',
  hub: 'thuat-ngu-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['mô men xoắn', 'Nm', 'công suất', 'vòng tua', 'dải mô men', 'đường cong công suất', 'cảm giác kéo'],
  keywords: ['mô men xoắn là gì', 'mô men và công suất khác nhau', 'Nm là gì', 'mô men xe máy', 'đọc thông số xe máy', 'xe mô men lớn'],
  sections: [
    {
      h2: 'Mô men là gì: lực vặn quen thuộc mỗi ngày',
      html: `<p>Hình ảnh dễ nhất: vặn nắp chai nước. Bàn tay tạo một lực xoay quanh trục nắp — đó chính là mô men. Đo nó bằng lực nhân khoảng cách tới trục: đòn dài hơn vặn dễ hơn đòn ngắn, cùng một lực. Đơn vị Nm (newton-mét): lực 1 N tại cánh tay 1 m — hoặc 10 N tại 0,1 m, cứ nhân ra là một.</p>
<p>Trên xe máy, trục khuỷu quay quanh trục — mô men là lực xoay mà quá trình cháy đẩy piston chuyển thành. Mô men càng lớn, trục càng "nặng tay" quay — và qua hộp số truyền ra bánh, thành lực kéo người ngồi cảm nhận khi vặn ga. Xe "bốc", "kéo", "vù" là ngôn ngữ đời của mô men.</p>
<p>Câu hỏi vui giúp khắc ghi: vì sao đạp xe đạp ở càng số 1 nhẹ hơn số 7? Vì tỷ số truyền nhân mô men chân lên bánh — hộp số xe máy làm đúng việc đó: số thấp đổi tốc độ lấy mô men (leo dốc dễ), số cao đổi mô men lấy tốc độ. Hộp số là máy nhân mô men — mọi lý thuyết về "số" quay quanh ý này.</p>`,
    },
    {
      h2: 'Mô men và công suất: hai anh em một công thức',
      html: `<p>Công thức nối: công suất = mô men × vòng tua × hằng số. Nghĩa: cùng một mô men, quay nhanh hơn cho công suất lớn hơn. Hai xe cùng mô men tối đa nhưng xe A đạt ở tua 6.000, xe B ở 10.000 — xe B có lợi thế công suất nếu người lái chịu vặn tua cao.</p>
<p>Từ công thức ra hai tính cách xe: xe mô men lớn ở tua thấp (xe phổ thông, xe ga) — ra ga là có lực ngay, dễ đi phố, không cần vặn; xe công suất lớn ở tua cao (xe thể thao) — ì ở tua thấp, bùng ở tua cao, hợp người lái chịu kéo tua khi ra sức. Không xe nào mạnh hơn tuyệt đối — mỗi xe mạnh ở dải của nó.</p>
<p>Vì sao bảng thông số ghi "công suất cực đại 8,8 mã lực tại 8.500 vòng, mô men cực đại 9,4 Nm tại 6.500 vòng": cả hai đều là giá trị đỉnh tại một vòng tua cụ thể. Đường cong đầy đủ (biểu đồ mô men theo toàn dải tua) nói nhiều hơn hai con số đỉnh — xe có đường cong dẹt (mô men đều từ tua thấp tới cao) dễ đi hơn xe cùng đỉnh nhưng đường cong nhọn (chỉ mạnh quanh đúng một dải).</p>`,
    },
    {
      h2: 'Đọc bảng thông số xe như người hiểu',
      html: `<p>Tham chiếu phổ thông: xe số-tay ga 110-125cc quanh 8-10 Nm; 150cc thể thao 11-14 Nm; xe phân khối 250cc+ thường trên 20 Nm; mô tô lớn trên 100 Nm — con số cho khái niệm thứ tự, không phải để đua bằng từng Nm.</p>
<p>Điều đáng đọc hơn đỉnh: vòng tua đạt đỉnh. Mô men đỉnh ở 6.000 vòng (dải giữa) nghĩa là xe cho lực trong vùng người phổ thông chạy hằng ngày — dải mô men dưới là phần đắt giá nhất. Mô men đỉnh ở 9.000-10.000 vòng nói: xe thiết kế cho người kéo tua — chạy phố 40 km/h sẽ thấy ì so với con số bảng.</p>
<p>So hai xe khi mua: đừng so đỉnh với đỉnh — so mô men tại vùng tua mình hay chạy (khoảng 4.000-6.500 vòng với xe phố). May mắn là các bảng quảng cáo chỉ ghi đỉnh, nên khi cần so thực, bài chạy thử xe là bước không thay được: ngồi lên, ra ga từ thấp, cảm giác kéo là số liệu thật cho cách mình định dùng xe.</p>`,
    },
    {
      h2: 'Mô men trong các tình huống chạy thật',
      html: `<p>Khởi hành và leo dốc: hai tình huống đòi mô men nhiều nhất vì cần lực kéo ở tốc độ thấp — hộp số trả lời bằng số thấp nhân mô men. Cảm giác xe "đuối" khi chở nặng lên dốc bằng số cao không phải xe yếu — là đang đòi vùng mô men không có ở tua đó: về số là đúng thuốc.</p>
<p>Tăng tốc vượt xe: vùng mô men quyết định nhịp lên số — lên số khi máy còn trong vùng có lực (thường hơi qua đỉnh mô men), không để tua rơi về vùng ì rồi mới lên. Người lái quen xe mình biết "điểm ngọt" — vùng tua mà xe vọt rõ nhất — và giữ xe quanh đó khi cần ra sức.</p>
<p>Chạy tiết kiệm và bền: phần dưới của dải mô men — tua thấp trong số phù hợp — cho phép máy làm việc nhẹ nhàng, nhớt ít chịu tải, tiết kiệm xăng. Đây không phải mâu thuẫn với mô men: dùng mô men đủ cho công việc, không đòi công suất tối đa mỗi lần ra ga — xe sống lâu và người đỡ mỏi tay.</p>`,
    },
    {
      h2: 'Vì sao xe máy mô men "nhỏ" mà vẫn kéo được cả người và hàng',
      html: `<p>Nhìn con số 9 Nm, ai cũng thắc mắc: sao lực tí hon kéo nổi cả tạ người và hàng? Câu trả lời là chuỗi nhân của truyền lực: từ trục khuỷu, qua hộp số (tỷ số vài lần), qua bộ truyền cuối (tỷ số lần nữa, thường trên 2,5:1 với xe số) — mô men ra tới bánh xe nhân lên nhiều lần, đổi lấy tốc độ quay giảm xuống tương ứng.</p>
<p>Ví dụ tính nhanh: mô men 9 Nm, số 1 tỷ số 3, truyền cuối 3: tổng nhân ~9 lần (chưa tính hao phí) — tới bánh là quanh 80 Nm, và bán kính bánh 0,25 m đổi thành lực kéo tại mặt đường trên 300 N — tương đương sức đẩy của vài chục kg liên tục. Đó là chưa kể đà và quán tính giúp việc khởi hành — đúng nghĩa "xe chỉ cần lực tiếp tục, không cần lực nâng".</p>
<p>Hiểu chuỗi nhân này giải thích luôn vì sao về số nhẹ dốc: đổi tỷ số hộp số lên hệ số nhân lớn hơn — cùng mô men máy, lực tới bánh nhân thêm lần nữa. Và vì sao xe tay ga hợp phố: pulley tự đổi tỷ số mượt để giữ máy ở vùng mô men tốt liên tục — một bài học thiết kế quanh đúng khái niệm của trang này.</p>`,
    },
  ],
  checklist: [
    'Khi đọc bảng thông số: chú ý cả con số mô men và vòng tua đạt đỉnh.',
    'So xe bằng mô men tại vùng tua mình hay chạy, không chỉ đỉnh với đỉnh.',
    'Chạy thử xe khi mua: ra ga từ tua thấp xem cảm giác kéo là số liệu thật.',
    'Xe đuối khi chở nặng lên dốc: về số — dùng hộp số nhân mô men đúng cách.',
    'Giữ xe quanh vùng tua ngọt khi cần ra sức; tua thấp số phù hợp khi đi thường.',
    'Không kéo dài bằng con số công suất: mô men và dải tua mới quyết định cảm giác chạy.',
  ],
  warnings: [
    'Lên số để tua rơi về vùng quá thấp làm máy đuối và nóng — về số thay vì ôm ga.',
    'Không so "mạnh hơn" qua công suất cực đại: hai xe hai vùng tua mạnh khác hẳn nhau.',
    'Chở nặng kéo dài ở tua thấp số cao là đun máy — giảm tải hoặc về số đúng lúc.',
  ],
  notes: [
    'Con số trong bài là tham chiếu cho xe phổ thông; thông số chính thức của từng xe nằm trong catalogue của hãng.',
    'Khái niệm công suất — mô men — vòng tua thuộc giáo trình cơ sở động cơ đốt trong.',
  ],
  references: [
    'Giáo trình cơ sở về động cơ đốt trong: mô men, công suất và đường cong đặc tính.',
    'Catalogue thông số của các dòng xe máy phổ thông và phân khối.',
    'Tài liệu kỹ thuật về hệ thống truyền lực và tỷ số hộp số xe gắn máy.',
  ],
  related: [
    'cong-suat-va-mo-men-xoan-khac-nhau-the-nao',
    'thuat-ngu-xe-may',
    'tu-dien-xe-may',
    'di-xe-may-so-ky-thuat-bop-con-va-chuyen-so',
  ],
};
