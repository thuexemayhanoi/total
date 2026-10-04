// Hướng dẫn chi tiết về lịch bảo dưỡng xe máy — S00235 (hub guide/bao-duong)
'use strict';
module.exports = {
  slug: 'lich-bao-duong-xe-may',
  title: 'Hướng dẫn chi tiết về lịch bảo dưỡng xe máy',
  seoTitle: 'Hướng dẫn chi tiết về lịch bảo dưỡng xe máy',
  metaDescription: 'Hướng dẫn chi tiết cách tạo và duy trì lịch bảo dưỡng xe máy: đọc bảng của hãng, ghi nhắc đúng mốc, cân chỉnh theo điều kiện chạy và ba nhóm việc.',
  summary: 'Đa số xe máy đều kèm một bảng lịch bảo dưỡng, nhưng bảng đó chỉ phát huy tác dụng khi có người theo — và "theo" là kỹ năng, không phải thói quen ngẫu nhiên. Hướng dẫn chi tiết này đi qua từng bước của việc dựng lịch bảo dưỡng xe máy: đọc đúng cấu trúc bảng của hãng (hạng mục nhân mốc, hai cột ki-lô-mét và tháng), chọn công cụ ghi nhắc bền vững, cân chỉnh mốc theo điều kiện chạy thật của mình, phân loại ba nhóm việc — theo ki-lô-mét, theo thời gian, và theo triệu chứng — cùng cách giữ lịch cho xe cũ có thêm các hạng mục tuổi. Cuối bài là một mẫu lịch tối giản có thể áp cho bất kỳ chiếc xe nào trong mười lăm phút.',
  quickAnswer: 'Lịch bảo dưỡng xe máy nên dựng trong ba bước: chép các mốc và hạng mục từ bảng của hãng vào nhắc việc điện thoại, để nhắc trước mốc hai trăm ki-lô-mét, và thêm ghi chú điều kiện (bụi, nặng, đoạn ngắn) để rút ngắn kỳ khi cần. Phân loại việc theo ba nhóm: theo ki-lô-mét (nhớt, lọc), theo tháng (ắc quy, cao su, xăng cũ) và theo triệu chứng (tiếng lạ, rò rỉ). Xe cũ cộng thêm hạng mục tuổi; mười lăm phút dựng lịch là khoản đầu tư sinh lời rõ nhất của người sở hữu xe.',
  keyPoints: [
    'Điểm xuất phát: bảng lịch của hãng — chép đúng mốc và hạng mục, không phóng tác.',
    'Nhắc việc điện thoại với báo trước hai trăm ki-lô-mét — khỏi dựa vào trí nhớ.',
    'Ba nhóm việc: theo ki-lô-mét, theo tháng, và theo triệu chứng xuất hiện.',
    'Điều kiện khắc (bụi, nặng, đoạn ngắn): rút ngắn kỳ, không kéo dài vì xe "vẫn êm".',
    'Xe cũ thêm hạng mục tuổi: ắc quy, cao su, dây côn, phớt, gioăng.',
    'Lịch tối giản một trang dùng được cho mọi xe: xem lại mỗi kỳ nhớt.',
  ],
  category: 'guide',
  hub: 'bao-duong',
  date: '2026-10-04',
  updated: '2026-10-04',
  entities: ['bảng lịch của hãng', 'nhắc việc', 'kỳ nhớt', 'hạng mục tuổi'],
  keywords: ['lịch bảo dưỡng xe máy', 'lich bao duong xe may', 'tạo lịch bảo dưỡng', 'bảng lịch của hãng', 'nhắc lịch bảo dưỡng'],
  sections: [
    {
      h2: 'Đọc đúng cấu trúc bảng lịch của hãng',
      html: `<p>Bảng lịch trong sách xe thường trình bày dạng lưới: hàng là hạng mục, cột là mốc ki-lô-mét, ô đánh dấu là việc cần làm tại mốc đó. Điểm cần chú ý đầu tiên: bảng luôn có hai trục — ki-lô-mét và thời gian — và dòng chú "điều kiện nào tới trước thì theo điều kiện đó" là phần quan trọng nhất của cả bảng. Nhiều người chỉ đọc trục ki-lô-mét rồi thắc mắc sao xe ít chạy vẫn hỏng.</p>
<p>Thứ hai, bảng phân biệt "kiểm tra" và "thay": kiểm tra là soi tình trạng rồi quyết định, thay là đổi mới theo kế hoạch. Việc ghi "thay" thì làm theo mốc; việc ghi "kiểm tra" thì mốc chỉ là lúc soi, không phải cam kết đổi mới. Nhầm hai cột này là cách nhanh nhất để trả tiền thay đồ xe không cần.</p>
<p>Thứ ba, bảng có phần "điều kiện chạy khắc" — bụi, chở nặng, ngập nước, đoạn ngắn — với mốc rút ngắn. Đây là phần hay bị bỏ qua nhất dù là phần cá nhân hóa duy nhất của bảng: nó chính là chỗ lịch của hãng gặp lịch của riêng bạn.</p>`,
    },
    {
      h2: 'Chọn công cụ ghi nhắc bền vững',
      html: `<p>Công cụ tốt cho việc này chỉ cần ba năng lực: tạo nhắc việc theo ngày, ghi chú kèm số ki-lô-mét dự kiến, và tìm lại được lịch sử bằng vài lần chạm. Ứng dụng nhắc việc có sẵn trên mọi điện thoại là đủ; sổ giấy cũng được nếu bạn là người vẫn mang theo nó. Rủi ro thật của công cụ không nằm ở tính năng mà ở việc bỏ dở giữa chừng — chọn thứ bạn đã mở mỗi ngày, đừng tạo một hệ thống mới chỉ để rồi quên mở.</p>
<p>Cấu trúc một mục ghi đáng giữ: tên việc (thay nhớt), mốc (ba nghìn ki-lô-mét hoặc sáu tháng), vị trí hiện tại (ki-lô-mét trên đồng hồ hôm ghi), và ghi chú điều kiện (đường bụi nhiều). Khi nhắc việc kêu, bạn không cần tra lại gì — mọi thứ để quyết định đã nằm trong một dòng.</p>
<p>Một thói quen nhỏ nhân đôi giá trị của công cụ: mỗi lần rời tiệm, mở mục ra và ghi lại số ki-lô-mét cùng việc đã làm. Sau một năm, chuỗi ghi chép đó trở thành hồ sơ xe — thứ giúp thợ chẩn nhanh, giúp bạn soi chi phí, và giúp người mua sau tin chiếc xe được chăm có nề nếp.</p>`,
    },
    {
      h2: 'Ba nhóm việc và cách gắn vào lịch',
      html: `<p>Nhóm thứ nhất — việc theo ki-lô-mét: nhớt, lọc nhớt, lọc gió, bugi, dây côn. Nhóm này mòn theo số vòng quay của máy, nên nhắc việc tính bằng ki-lô-mét là chuẩn; ước lượng ki-lô-mét bạn chạy mỗi tuần để chuyển mốc thành ngày nhắc (mốc ba nghìn, chạy hai trăm một tuần thì hẹn mười lăm tuần).</p>
<p>Nhóm thứ hai — việc theo thời gian: ắc quy, cao su các loại, xăng để lâu, nhớt trong máy nằm im. Nhóm này già đi dù xe đứng, nên nhắc theo tháng. Đây là nhóm bị bỏ qua nhiều nhất ở xe ít chạy, và cũng là nhóm tạo ra những sự cố buổi sáng khó nổ máy nhất.</p>
<p>Nhóm thứ ba — việc theo triệu chứng: tiếng kêu mới, vết loang dưới nền, đèn mờ, đề yếu. Nhóm này không có mốc — chúng tự đặt lịch bằng cách xuất hiện. Vai trò của lịch đối với nhóm ba chỉ là một dòng ghi chép "thấy gì, ngày nào", để khi tới tiệm bạn không phải trả lời câu "bị từ bao giờ?" bằng một cái lắc đầu.</p>`,
    },
    {
      h2: 'Cân chỉnh mốc theo điều kiện chạy',
      html: `<p>Nguyên tắc chỉnh: một yếu tố khắc trừ khoảng một phần năm mốc. Chạy đường bụi mỗi ngày — lọc gió soi sớm hơn; chở người nặng hoặc hàng tạp hóa mỗi ngày — nhớt rút ngắn; toàn đoạn ngắn dưới năm ki-lô-mét — máy không đạt nhiệt độ làm việc, cả nhớt lẫn ắc quy đều mệt hơn những gì bảng của hãng giả định; vùng ngập mùa mưa — sau mỗi lần lội nước sâu đáng soi nhớt và toàn bộ hệ thống điện.</p>
<p>Chiều ngược lại cũng có: chạy đều đường trường sạch, một mình, thời tiết ôn hòa thì mốc bảng của hãng có phần thoải mái — kéo dài thêm vài trăm ki-lô-mét không phải tội. Điều chỉnh là việc hai chiều, miễn là cả hai chiều đều dựa trên điều kiện thật chứ không dựa trên mong muốn tiết kiệm.</p>
<p>Cách giữ cho việc chỉnh không thành chuyện tự phát: ghi chú điều kiện vào mỗi mục nhắc, và chỉ đổi mốc khi có lý do ghi được ra. "Thấy rẻ nên kéo dài" không phải lý do; "ba tháng nay chuyển sang chạy đường trường" là lý do. Lịch là bản hợp đồng giữa bạn và chiếc xe — hợp đồng được sửa vì hoàn cảnh đổi, không phải vì một bên lười.</p>`,
    },
    {
      h2: 'Lịch cho xe cũ: thêm hạng mục tuổi',
      html: `<p>Xe trên năm năm tuổi hoặc trên ba mươi nghìn ki-lô-mét nên có thêm một trang trong lịch: hạng mục tuổi. Đây là các chi kiện không mòn theo ki-lô-mét mà già theo năm: ắc quy (tuổi thọ điển hình hai đến bốn năm), cao su ống dẫn và lốp (nứt theo thời gian dù gai còn), dây côn và cáp ga (giãn sờn), phớt dầu, gioăng nắp máy, và mỡ ở các điểm xoay.</p>
<p>Cách gắn hạng mục tuổi vào lịch: mỗi mục lấy mốc theo năm, kèm một dòng "soi tình trạng" nửa năm một lần. Việc soi chỉ mất vài phút trong các đợt tiệm có sẵn — và khác biệt giữa thay đúng lúc với thay sau khi vỡ là khác biệt giữa một khoản nhỏ có chủ đích và một sự cố ngoài kế hoạch.</p>
<p>Một ghi chú cho xe cũ mua lại không kèm hồ sơ: dựng lại lịch từ zero — một đợt tổng thể để có mốc tin được, rồi các mốc tính từ đó. Đừng nối lịch của người trước khi không có bằng chứng; chiếc xe không nhớ ai từng chăm nó, và mốc không rõ nguồn là mốc không đáng gọi là mốc.</p>`,
    },
    {
      h2: 'Mẫu lịch tối giản trong mười lăm phút',
      html: `<p>Trang nhất — theo ki-lô-mét: dòng nhớt (mốc của hãng, ghi chú điều kiện), dòng lọc gió (mốc gấp đôi nhớt hoặc theo bảng), dòng bugi, dòng kiểm tra toàn diện hằng năm. Trang hai — theo tháng: ắc quy (soi nửa năm, thay theo tuổi), cao su và ống dẫn (soi nửa năm), xăng (không để quá một tháng khi xe nghỉ). Trang ba — theo triệu chứng: một cột "thấy gì — ngày nào" để ghi nhanh trong ba mươi giây.</p>
<p>Bước thực hành mười lăm phút: mở sách xe, chép bốn dòng đầu trang nhất vào nhắc việc với số ki-lô-mét hôm nay; thêm hai nhắc tháng; dán quy tắc "trước mốc hai trăm ki-lô-mét thì hẹn tiệm". Xong. Mọi thứ tinh tế hơn — cân chỉnh, hạng mục tuổi, lịch sử — được cộng dồn sau, vì lịch tốt nhất là lịch được dùng, không phải lịch đẹp.</p>
<p>Chốt lại: hướng dẫn chi tiết về lịch bảo dưỡng rốt cuộc chỉ đòi một cam kết — nhìn lại trang lịch mỗi kỳ nhớt, một lần một quý. Mười lăm phút dựng, một phút mỗi quý rà, và phần còn lại chiếc xe tự trả lời bằng cách chạy êm dài hơn, tiêu ít hơn, và không chọn giữa hai việc hỏng đúng sáng đang đi gấp.</p>`,
    },
  ],
  checklist: [
    'Mở sách xe, chép bốn dòng chính (nhớt, lọc gió, bugi, tổng thể) vào nhắc việc.',
    'Mỗi mục ghi: mốc hai cột (km/tháng), số ki-lô-mét hôm nay, ghi chú điều kiện.',
    'Bật nhắc trước hai trăm ki-lô-mét — hẹn tiệm trước khi mốc tới.',
    'Thêm trang tháng: ắc quy, cao su, ống dẫn — soi nửa năm một lần.',
    'Rà lịch mỗi kỳ nhớt: một phút, cập nhật ki-lô-mét và việc mới.',
    'Xe cũ: dựng lại từ một đợt tổng thể, không nối lịch không rõ nguồn.',
  ],
  warnings: [
    'Không chỉ theo trục ki-lô-mét — xe ít chạy già theo cột tháng, không theo km.',
    'Không nhầm "kiểm tra" với "thay" — cột ghi soi không phải cam kết đổi mới.',
    'Không kéo dài mốc vì "xe vẫn êm" — im lặng không có nghĩa là khỏe.',
    'Không dựng lịch trên giấy dán chỗ hay bị ướt hoặc mất — bền vững mới là tiêu chí.',
  ],
  notes: [
    'Nhắc việc điện thoại kèm ghi chú ki-lô-mét dự kiến tuần sau giúp chuyển mốc km thành ngày cụ thể.',
    'Hồ sơ xe đầy đủ giúp bán lại dễ hơn rõ rệt — người mua trả thêm cho bằng chứng chăm sóc, không cho lời hứa.',
  ],
  references: [
    {
      title: 'Thông tư 85/2014/TT-BGTVT — Quy chuẩn kỹ thuật an toàn về xe máy',
      url: 'https://thuvienphapluat.vn/van-ban/Giao-thong-Van-tai/Thong-tu-85-2014-TT-BGTVT-quy-chuan-ky-thuat-quoc-gia-ve-an-toan-ky-thuat-va-bao-ve-moi-truong-cua-xe-may-281006.aspx',
    },
    {
      title: 'Nghị định 46/2016/NĐ-CP — Điều kiện bảo đảm an toàn kỹ thuật của xe cơ giới',
      url: 'https://thuvienphapluat.vn/van-ban/Giao-thong-Van-tai/Nghi-dinh-46-2016-NĐ-CP-dieu-kien-va-bao-dam-an-toan-ky-thuat-cua-xe-co-giieu-thong-co-gioi-270377.aspx',
    },
  ],
  related: ['bao-duong-dinh-ky', 'thay-dau-nhot'],
};
