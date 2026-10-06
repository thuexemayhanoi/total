// AI WIKI TOTAL — wiki/ac-quy-pin: ắc quy khô — những điều cần biết (slot S00306)
'use strict';

module.exports = {
  slug: 'ac-quy-kho',
  title: 'Ắc quy khô — những điều cần biết',
  seoTitle: 'Ắc quy khô xe máy: cấu tạo, khác ắc quy nước và cách bảo quản',
  metaDescription: 'Ắc quy khô là gì, cấu tạo MF-GEL ra sao, khác ắc quy nước ở đâu, vì sao vẫn cần châm nước cất định kỳ, và cách bảo quản đúng với xe hay để lâu.',
  summary: 'Ắc quy khô là loại ắc quy phổ biến nhất trên xe máy hiện nay — nhưng tên gọi này nửa đúng nửa sai: bên trong không "khô" mà là các tấm cực và tấm separator ngập trong dung dịch điện phân được giữ chặt trong chất sợi thủy tinh, không cần châm và khó tràn như ắc quy nước. Tên chuẩn hơn là ắc quy MF (bảo dưỡng ít) hoặc VRLA/AGM/GEL theo công nghệ bên trong. Bài viết đi theo trình tự: cấu tạo bên trong của một ắc quy "khô" và vì sao nó không cần châm như ắc quy nước; các công nghệ AGM và GEL khác nhau ở đâu; tuổi thọ thật phụ thuộc vào gì (sạc xả sâu, nhiệt, thời gian để xe không chạy); các dấu hiệu ắc quy xuống cấp từ đề máy yếu tới đèn nhấp nháy; và cách bảo quản đúng — đặc biệt với nhóm người để xe vài ngày không đi, nhóm giết ắc quy nhanh nhất bằng cách nào ngờ nhất.',
  quickAnswer: 'Ắc quy khô (chuẩn hơn: ắc quy MF/VRLA) là ắc quy chì-axit hở van: dung dịch điện phân được hút giữ trong tấm separator sợi thủy tinh (AGM) hoặc đóng thành gel, không tràn, không cần châm nước như ắc quy nước. Ưu: bảo quản gần như không phải làm, ít tự phóng điện hơn, không tràn axit ăn gỉ. Nhược: nhạy với xả sâu — để xe không chạy lâu ắc tụt xuống mức thấp và hư không hồi phục. Tuổi thọ tham chiếu 1,5-3 năm tùy cách dùng. Bảo quản: chạy xe đủ dài mỗi tuần để hệ thống nạp đầy, hoặc dùng sạc giữ điện nếu để lâu; thấy đề yếu, đèn nhấp nháy là kiểm sớm.',
  keyPoints: [
    'Ắc quy khô thực chất là ắc quy MF/VRLA: điện phân giữ trong AGM hoặc gel, không tràn, không châm.',
    'Van một chiều thoát khí khi nạp mạnh — vì vậy gọi là "hở van kín" (VRLA), không hẳn kín tuyệt đối.',
    'Khác ắc quy nước: không châm được, ít bảo dưỡng, nhưng nhạy hơn với xả sâu và sạc sai loại.',
    'Tuổi thọ 1,5-3 năm; kẻ thù lớn nhất là để xe lâu không chạy — ắc xả sâu chết không hồi phục.',
    'Dấu hiệu xuống cấp: đề yếu buổi sáng, đèn và còi nhấp nháy theo vòng tua, cần boost mới nổ.',
    'Bảo quản: chạy xe 20-30 phút mỗi tuần, hoặc ngắt cực âm khi để lâu, hoặc dùng sạc giữ điện nhỏ.',
  ],
  category: 'wiki',
  hub: 'ac-quy-pin',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['ắc quy khô', 'ắc quy MF', 'VRLA', 'AGM', 'gel', 'xả sâu', 'van một chiều'],
  keywords: ['ắc quy khô xe máy', 'ắc quy MF là gì', 'ắc quy khô và nước khác nhau', 'ắc quy AGM gel', 'tuổi thọ ắc quy xe máy', 'bảo quản ắc quy khi để xe lâu'],
  sections: [
    {
      h2: 'Cấu tạo: vì sao "khô" mà vẫn có axit',
      html: `<p>Bên trong ắc quy khô vẫn là bộ đôi quen thuộc của mọi ắc quy chì-axit: các tấm cực chì-chì-đioxide và dung dịch axit sunfuric. Điều khác nằm ở trạng thái giữ điện phân: thay vì các ô hở cho ta châm nước như ắc quy nước, điện phân ở ắc quy MF được hút giữ toàn bộ vào các tấm separator bằng sợi thủy tinh ép chặt giữa các tấm cực (công nghệ AGM — absorbed glass mat), hoặc trộn thành gel bằng phụ gia silica (công nghệ GEL).</p>
<p>Nhờ đó ắc không tràn khi xe nghiêng, không bắn khí axit ra ngoài ăn mòn ác sườn, và hầu như không mất nước trong đời sử dụng. Khi nạp mạnh, khí sinh ra thoát qua van một chiều (một chiều: ra ngoài, không vào trong) — đây chính là chữ V trong VRLA: valve-regulated, điều chỉnh bằng van.</p>
<p>Vì không châm được, mọi thứ bên trong là hữu hạn: nước mất đi qua van trong các lần nạp mạnh cộng dần không bù được như ắc quy nước. Đây là lý do ắc MF nhạy với sạc quá dòng: mỗi lần nạp mạnh là một lần "đốt" phần nước hữu hạn — và cũng là lý do dùng sạc giữ điện phải đúng loại có chế độ float cho MF.</p>`,
    },
    {
      h2: 'AGM và GEL: hai anh em hai tính cách',
      html: `<p>AGM (sợi thủy tinh hút): điện phân ngấm trong tấm sợi, các tấm cực ép chặt — cấu trúc này cho dòng nạp-xả lớn tốt, chịu rung xóc tốt, giá vừa. Phần lớn ắc quy xe máy phổ thông là AGM dưới tên MF.</p>
<p>GEL (gel hóa): điện phân đóng thành khối gel — không bao giờ chảy kể cả vở vỏ một phần, tự phóng điện thấp, chịu xả sâu tương đối tốt hơn AGM; đổi lại nhạy với nạp quá dòng: nạp mạnh làm gel bị phân rã túi khí, ắc phồng và chết. GEL thường thấy ở xe đề điện, xe phân khối và các ứng dụng cần đặt ắc ở vị trí khó.</p>
<p>Người dùng không cần ghi nhớ công nghệ — chỉ cần một quy tắc khi mua thay: thay đúng thông số ghi trên ắc cũ (định thế 12V, dung lượng Ah, dòng đề lạnh CCA nếu ghi, kích thước lo đế) và đúng loại xe khuyến nghị. Đổ AGM thay GEL cho xe có cuộn nạp mạnh có thể chạy được nhưng rút ngắn đời ắc; ngược chiều cũng vậy — mua theo bảng thay của hãng cho dòng xe mình là gọn nhất.</p>`,
    },
    {
      h2: 'Khác ắc quy nước ở đâu trong sử dụng',
      html: `<p>Bảng so thực dụng: ắc nước cần châm nước cất mỗi kỳ vài tháng, kiểm mực theo vạch trên vỏ, để nghiêng là tràn — bù lại chịu nạp mạnh và giá rẻ; ắc khô không châm, không kiểm mực, không tràn, đặt gần như thoải mái — bù lại nhạy xả sâu và nạp sai loại. Với xe máy, đặt nghiêng và rung xóc thường trực: ắc khô gần như là lựa chọn duy nhất hợp lý.</p>
<p>Sai lầm hay gặp khi chuyển từ ắc nước sang khô: vẫn giữ thói quen "nạp boost thật nhanh cho chắc" bằng sạc ổn áp thô — ắc MF nạp bằng dòng đúng chuẩn (thường 1/10 dung lượng Ah), nạp quá làm nước mất qua van không bù được. Sạc đúng là mua sạc có nhãn hỗ trợ MF/AGM với chế độ nhỏ dòng.</p>
<p>Một khác biệt nữa ít ai nói: ắc khô gần như chết đột ngột hơn ắc nước. ắc nước báo trước bằng mực hạ, màu điện phân đổi; ắc khô chỉ báo bằng... hiệu năng: một sáng nào đó đề không nổ. Vì vậy thói quen đề yếu buổi sáng — dấu hiệu sớm duy nhất — cần được coi là hạn mức thay ắc chứ không phải "chắc để mai vẫn đi được".</p>`,
    },
    {
      h2: 'Xả sâu: cách ắc khô chết âm thầm',
      html: `<p>Tự phóng điện là tính chất của mọi ắc quy: không nối với gì, ắc vẫn tụt khoảng vài phần trăm điện mỗi tuần. Trên xe, thêm một nhóm tiêu thụ chờ: đồng hồ, IC chờ, chuông — dòng rò nhỏ nhưng liên tục. Để xe một hai tuần, ắc tụt nhẹ; một hai tháng không chạy, ắc tụt xuống vùng thấp — đó là ngưỡng nguy hiểm.</p>
<p>Xả sâu (tụt dưới khoảng 11,5-11,8V hở mạch) làm các tấm cực hình thành lớp sulfat chì kết dày — sulfat hóa. Ở ắc nước, nạp kéo dài có thể đảo một phần; ở ắc khô, van giới hạn việc "nạp gỡ" — phần lớn sulfat hóa ở MF là vĩnh viễn. Vài lần để xả sâu là một viên ắc MF về đích đời sớm.</p>
<p>Phòng ngừa theo ba cấp: xe chạy hằng ngày không cần gì — máy nạp đủ; xe thỉnh thoảng chạy, mỗi tuần một vòng 20-30 phút đủ giữ ắc trên mức an toàn; xe để lâu (công tác, về quê lâu ngày) thì chọn một trong hai: ngắt cực âm (cắt dòng rò, ắc chỉ tự phóng), hoặc để ắc trên xe và cắm sạc giữ điện float. Làm một trong hai, không làm gì cả là chọn cách thay ắc sớm nhất.</p>`,
    },
    {
      h2: 'Bảo quản, kiểm tra và khi nào thay',
      html: `<p>Kiểm tra định kỳ nhẹ nhàng: đề máy buổi sáng — vòng tua quẫy khoe, đèn không nhấp nháy khi đề là tín hiệu ắc còn sức. Với xe có vôn kế, số 12,4-12,8V hở mạch khi tắt máy là vùng khỏe; dưới 12V là đang tụt, dưới 11,5V là xả sâu đã xảy ra. Không cần đồng hồ: bật chìa khóa nhìn đèn trước — đèn sáng dịu, không mờ khi bóp còi là đạt.</p>
<p>Chăm đúng: giữ hai cột cực sạch — lớp oxit trắng xanh trên cột tăng điện trở, làm đèn đề đều yếu giả tạo; tháo lau bằng giấy nhám mịn, tra mỡ chì mỏng chống oxy hóa lại. Vệ sinh mặt ắc: ắc MF bụi ẩm tạo rò bề mặt nhỏ giọt — lau khô mỗi kỳ. Vặn chặt hai đai ắc: rung lắc làm tấm separator trong ắc mòn sớm và cực lỏng lây ra tiếp xúc kém.</p>
<p>Thay khi: đề yếu từng sáng liên tục dù đã chạy xe đủ (hệ thống nạp đã làm tròn việc), vôn hở mạch thấp hơn 12V sau đêm để, hoặc ắc đã quá 2,5-3 năm — tuổi cũng là chỉ số. Thay đúng thông số và lo đế của ắc cũ; mang ắc cũ đi thu hồi đúng nơi quy định — chì trong ắc là vật liệu tái chế chứ không phải rác thải thường.</p>`,
    },
  ],
  checklist: [
    'Mỗi tuần chạy xe 20-30 phút liên tục để hệ thống nạp đầy ắc — hoặc ngắt cực âm khi để lâu.',
    'Đề yếu buổi sáng, đèn nhấp nháy theo vòng tua: kiểm ắc sớm, không đợi tới không nổ.',
    'Vệ sinh hai cột cực bằng giấy nhám mịn, tra mỡ chì mỏng, vặn chặt đai giữ ắc.',
    'Sạc bổ sung dùng sạc hỗ trợ MF/AGM với dòng nhỏ — không nạp boost thô.',
    'Ghi ngày lắp ắc vào sổ xe — sau 2,5-3 năm chủ động kiểm hoặc thay.',
    'Thay đúng thông số và lo đế của ắc cũ theo khuyến nghị hãng cho dòng xe.',
  ],
  warnings: [
    'Để xe lâu không chạy và không ngắt cực là cách ngắn nhất giết ắc MF — xả sâu hư không hồi phục.',
    'Không dùng sạc không có chế độ cho ắc khô — nạp quá dòng làm phồng và chết ắc.',
    'Ắc phồng vỏ hoặc có mùi trứng thối (khí hydro sunfua) là ắc hỏng nguy hiểm — thay ngay, không sạc lại.',
  ],
  notes: [
    'Bài viết mô tả ắc quy chì-axit MF/VRLA phổ thông trên xe máy tại Việt Nam; xe có hệ thống start-stop hoặc ắc lithium có yêu cầu riêng.',
    'Thông số định thế, dung lượng và dòng đề lạnh của từng xe nằm trong sổ tay người dùng.',
  ],
  references: [
    'Tài liệu kỹ thuật về ắc quy chì-axit điều tiết bằng van (VRLA) công nghệ AGM và Gel.',
    'Hướng dẫn bảo trì của các nhà sản xuất ắc quy xe máy về nạp giữ điện và bảo quản.',
    'Sổ tay người dùng các dòng xe phổ thông — thông số ắc quy và hệ thống nạp.',
  ],
  related: [
    'ac-quy-xe-may',
    'ac-quy-yeu',
    'de-xe-day-khi-ac-quy-yeu',
    'sac-ac-quy',
  ],
};
