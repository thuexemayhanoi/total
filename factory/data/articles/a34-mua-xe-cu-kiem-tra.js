// AI WIKI TOTAL — bài mở rộng cụm /guide/mua-xe/: mua xe máy cũ những điểm cần kiểm tra (slot S00034)
'use strict';

module.exports = {
  slug: 'mua-xe-may-cu-nhung-diem-can-kiem-tra',
  title: 'Mua xe máy cũ: những điểm cần kiểm tra',
  seoTitle: 'Mua xe máy cũ: những điểm cần kiểm tra',
  metaDescription: 'Mua xe máy cũ cần kiểm tra gì: hồ sơ nguồn gốc, khung xe, máy, thử xe, đàm phán và thủ tục sang tên — hướng dẫn theo trình tự từ lúc xem xe tới lúc bàn giao.',
  summary: 'Mua xe cũ là bài toán bất cân xứng: người bán biết mọi điểm yếu của xe, người mua chỉ có một buổi để tìm ra chúng. Bài viết này xây dựng phương pháp kiểm tra theo trình tự đúng của một buổi đi xem xe — bắt đầu từ hồ sơ và nguồn gốc (loại rủi ro tốn kém nhất nếu bỏ qua), sang ngoại hình và khung (nơi giấu dấu va chạm lớn), tới bộ máy và tư thế lái khi chạy thử, rồi mới tới chuyện đàm phán giá và thủ tục bàn giao. Mỗi phần kèm cả các dấu hiệu "đạt" lẫn "cờ đỏ" cần quay lưng, để một buổi xem xe biến thành một quyết định có căn cứ thay vì một canh bạc.',
  quickAnswer: 'Khi đi xem xe cũ, kiểm tra theo trình tự: hồ sơ trước hết — giấy đăng ký khớp số khung số máy, nguồn gốc rõ, không thế chấp; khung và ngoại hình — nhìn dấu sơn lại, gờ hàn, khung thẳng, không móp lệch; bộ máy — đề nhanh, không khói lạ, không tiếng gõ, không rò dầu nhớt; chạy thử — tay lái không rung lệch, phanh chắc, số vào nhẹ; và cuối cùng mới đàm phán giá kèm điều khoản sang tên. Bỏ qua hồ sơ để mặc vào giá là rủi ro lớn nhất — xe rẻ mà hồ sơ có vấn đề là tiền mất táo víu.',
  keyPoints: [
    'Hồ sơ và nguồn gốc là cổng kiểm tra số một: khớp số khung - số máy với đăng ký, chủ đứng tên rõ ràng, không tranh chấp hay thế chấp — rủi ro hồ sơ đắt hơn mọi lỗi kỹ thuật.',
    'Vết sơn lại và gờ hàn kể lại lịch sử va chạm: soi mép lỗi sơn, bỏ gờ, khuỷu khung — dấu va chạm lớn có thể giấu dưới lớp sơn đẹp nhưng khó giấu dưới các chi tiết nhỏ.',
    'Máy thử bằng tai và mũi trước mắt: đề nhanh, không khói xanh trắng đậm, không mùi khét, không tiếng gõ kim loại khi ga — một vòng nghe ở tua thấp và tua cao đáng giá hơn mọi lời quảng cáo.',
    'Chạy thử là bắt buộc, không phải tùy chọn: tay lái thẳng, không rung lệch ở tốc độ, phanh chắc, vào số nhẹ, và hết hành trình gợi ý của riêng xe (tăng ga - phanh gấp nhẹ - cua chậm) trong điều kiện an toàn.',
    'Đàm phán giá cần danh sách phát hiện: mỗi lỗi tìm ra là một khoản trong toán giá, nhưng đừng để chi tiết nhỏ che mất các lỗi lớn — khung móp hay hồ sơ lấn cấn không thuộc nhóm "bớt chút rồi lấy".',
    'Sang tên ngay sau khi mua là việc của mình, không phải việc "khoan đã": xe chưa sang tên là rủi ro pháp lý nằm nguyên trên vai người mua mới — đặt lịch làm thủ tục trước khi về.',
  ],
  category: 'guide',
  hub: 'mua-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['mua xe máy cũ', 'kiểm tra xe cũ', 'số khung số máy', 'sơn lại xe', 'chạy thử xe', 'sang tên xe'],
  keywords: ['mua xe máy cũ cần kiểm tra gì', 'cách kiểm tra xe máy cũ', 'mua xe cũ lưu ý gì', 'kiểm tra máy xe cũ', 'mua xe máy cũ hồ sơ giấy tờ', 'chạy thử xe máy cũ'],
  sections: [
    {
      h2: 'Vì sao xem xe cũ cần phương pháp, không cần may mắn',
      html: `<p>Chợ xe cũ có một quy luật đáng ghi nhớ: chiếc xe đẹp thật sự thường được người quen lấy đi sớm; những chiếc còn treo lâu hoặc có cái gì đó lệch, hoặc nằm ngoài vùng giá hợp lý của nó. Người mua mua được xe tốt không phải người may mắn gặp được xe đẹp — mà là người biết mình đang nhìn cái gì, hỏi đúng câu và thoát ra đúng lúc. Cái giá của một buổi xem xe cẩu thận không hiện ra hôm đó; nó hiện ra ba tháng sau ở tiệm sửa.</p>
<p>Phương pháp là thứ bù vào bất cân xứng thông tin. Người bán sống với chiếc xe mỗi ngày — biết tiếng kêu nào là quen, mùi nào là mới, điểm nào sờ vào là tay bẩn; người mua có một buổi. Checklist theo trình tự chính là cách gấp một buổi ngắn thành màn rà có hệ thống: hồ sơ trước (loại rủi ro lớn nhất ra khỏi bàn ngay từ đầu), khung và ngoại hình (đọc lại lịch sử xe), bộ máy (tìm bệnh hiện tại), chạy thử (kiểm chứng cảm giác lái), rồi mới giá và thủ tục. Trình tự này tránh được lỗi phổ biến nhất: bị cuốn vào màu sơn và vòng tua máy lúc đầu, quên mất coi giấy tờ tới phút chót.</p>
<p>Một nguyên tắc tâm lý đáng mang theo: đừng yêu chiếc xe trong lúc xem. Yêu từ lúc chưa kiểm tra là tự trói tay đàm phán của chính mình và tự nhắm mắt trước các cờ đỏ. Chiếc xe đáng mua là chiếc vẫn đáng mua sau khi toàn bộ checklist đi qua — không phải chiếc khiến mình quên mất checklist.</p>
<p>Và cuối cùng — mục tiêu của buổi xem không phải là "chốt được xe" mà là "ra được quyết định đúng". Biết kết thúc một buổi xem bằng câu "xe này không hợp" là kỹ năng quan trọng không kém kỹ năng chọn xe: một lời từ chối kịp thời luôn rẻ hơn một lần sửa máy không đáy.</p>`,
    },
    {
      h2: 'Cổng số một: hồ sơ, nguồn gốc và lịch sử xe',
      html: `<p>Trước khi soi tới một con ốc trên xe, hãy soi bộ giấy tờ. Ba loại giấy bắt buộc phải có và khớp: giấy đăng ký xe (khớp biển số đang gắn), và thông tin đăng ký khớp với số khung, số máy dập trên xe — đây là phép kiểm tra có tính quyết định, làm tại chỗ bằng cách đối chiếu trực tiếp ký tự. Biển số cũng so với đăng ký: biển đổi lại mà không có lý do rõ là câu hỏi đáng hỏi thẳng.</p>
<p>Chủ sở hữu: người bán nên là người đứng tên trên đăng ký, hoặc có giấy tờ chứng minh được ủy quyền hợp pháp của chủ. Mua qua trung gian (hàng xe, người cầm lệ) cần hỏi rõ nguồn hàng — xe được mua lại từ chủ chính gốc có giấy tờ đi kèm là loại đáng yên hơn xe "nhanh gọn không cần hỏi". Tình trạng tranh chấp, thế chấp (ví dụ xe mua trả góp chưa tất toán) nếu không hỏi thì không ai tự kể — và đúng phần này là phần phát hiện muộn tốn tiền nhất.</p>
<p>Lịch sử xe có thể tự điều tra thêm ở một số khía cạnh: năm sản xuất ghi trên xe so với đời xe người bán kể (xe "đời này nhưng máy để từ đời kia" không phải chuyện hiếm ở chợ xe cũ), số km trên đồng hồ so với dấu mòn thật của xe (bốm tay chân côn, màu khung dưới gầm, mòn của chỗ tựa lên xe — đồng hồ chỉnh lại là chuyện phổ biến, số đọc đẹp quá so với mức mòn là cờ đỏ). Kiểm tra xe đã từng qua tác nạn lớn cần hỏi thẳng và so với dấu khung ở phần sau.</p>
<p>Quyết định của cổng này đơn giản: hồ sơ sạch — đi tiếp; hồ sơ có một trong các lỗi (không khớp số, chủ không rõ, nghi tranh chấp - thế chấp) — dừng, không mặc cả "cho rẻ bù lại". Xe máy hỏng máy thì sửa được; xe máy vướng pháp lý thì không thợ nào sửa được — ranh giới đáng nhớ nhất của toàn bộ buổi đi xem xe.</p>`,
    },
    {
      h2: 'Đọc ngoại hình và khung: lịch sử xe không tự kể, nhưng tự lộ',
      html: `<p>Soi sơn là việc đầu tiên ở khâu này, và soi có kỹ thuật: nhìn soi mép — viền giữa các tấm sơn khác màu (nắp máy, cốp, vành trước) phải sắc nét; nhìn dưới ánh sáng chéo để bắt mép sơn lại sần, bóng khác lớp. Sơn lại toàn xe không nhất thiết là tội — nhiều xe sơn lại vì xước lâu năm — nhưng sơn lại một tấm cụ thể lại là câu hỏi cần câu trả lời: tấm nào sơn lại, va ở đâu, sửa tới đâu. Người bán kể được rõ ràng thỉnh thoảng còn đáng tin hơn xe "nguyên vẹn không sơn lại" nhưng soi mép lại thấy ba tấm bóng khác.</p>
<p>Khung xe và các điểm hàn: soi khu vực khung chính (dưới chỗ để chân, dọc khung sau) tìm dấu gờ hàn mới — mép hàn ngoài xưởng khác hàn nhà máy hoàn toàn về độ đều; tìm dấu kéo thẳng (khung bị va rồi kéo lại để thẳng luôn để lại vệt: các lỗ,khe trên khung méo lệch nhau). Dấu va chạm lớn đáng chú ý nhất chính là không phải màu sơn — mà là hình học: dựng chống chữ A, đứng phía trước nhìn thẳng — hai mép vành, hai gương, phuộc phải đối xứng; xe bị đâm lệch một bên rất khó giấu qua phép nhìn thẳng này.</p>
<p>Các cụm nhỏ nói nhiều: ốc của khung và càng — ốc đã tháo nhiều lần có mép tuốc lăn tròn, và các ốc cùng một cụm phải cùng độ bóng cũ (một cụm ốc mới lấp lánh giữa ốc cũ đồng nhất là dấu cụm đó vừa được tháo thay); chỗ bắt ắc quy và buồng điện — mối dây tự quấn rối là dấu của sửa điện không chuyên nghiệp; mặt trong cốp và gầm — ngập nước từng suất hiện rõ bằng vệt bùn khô cứng ở gầm và mùi ẩm mốc trong hộc.</p>
<p>Nhóm dấu hiệu nên đọc cùng nhau thay vì từng cái riêng: một tấm sơn lại cộng một cụm ốc tháo cộng một mép khung gợn — ba dấu riêng từng cái là chuyện nhỏ, ba dấu cùng xuất hiện ở một vùng là câu chuyện va chạm có chiều sâu. Phép cộng này chính là phần "đọc xe" của người mua cũ — kỹ năng tới từ vài buổi xem xe có chủ đích quan sát.</p>`,
    },
    {
      h2: 'Bộ máy và chạy thử: nghe, nhìn, cảm',
      html: `<p>Trước khi nổ máy, mở nhìn vài điểm nhanh: mực nhớt (que thăm — nhớt đen sệt quá kỳ là dấu bảo dưỡng kém, nhớt có bọt kem trắng là cờ vào nước), dầu phanh và ống dẫn (rò nhẹ cũng phải biết trước), độ căng xích và rãnh lá xích, lốp (mòn đều hay mòn một vai — mòn một vai nói về thẳng lái hoặc phuộc), và bugi nếu người bán không ngại tháo (chấm cháy màu nâu nhạt là khỏe, đen bồ hóng là máy chạy già, ướt nhớt là dấu nhớt lọt).</p>
<p>Nổ máy: đề phải bén — một hai nhát nổ là chuẩn, đề lâu mới bén kèm ắc quy yếu hoặc bộ đề mệt. Nghe ở hai tốc độ: không tải (tua thấp — nghe đều, không tiếng gõ, không tiếng lạch cạch từ van hoặc xích cam) và ga lên giữ (tua cao — máy không rít bất thường, không rung khác thường, và khi thả ga về không tải nhanh gọn). Mũi làm việc song song: mùi khét chua điện, mùi xăng loãng quanh máy là hai mùi đáng quay xe lại từ buổi đầu.</p>
<p>Nhìn pô: khói thoảng lúc đề là chấp nhận được (ngưng tụ trong pô), nhưng khói xanh đậm liên tục (nhớt lọt buồng đốt — dấu bệnh gioăng hoặc piston), khói trắng đặc không tan (nước vào buồng đốt) là hai dấu đáng cân nhắc dừng lại hoặc tính vào giá thật đắn đo. Trên một chiếc 4 thì bình thường, pô trong lúc chạy là tiêu chuẩn — mọi màu khói kéo dài đều là thông điệp.</p>
<p>Chạy thử trong điều kiện cho phép: cảm tay lái thẳng không kéo lệch (buông hai tay hơi vài giây ở đoạn vắng thẳng — xe đi lệch là dấu thẳng lái hoặc mòn lệch), phanh chắc không rít không lệch, số vào nhẹ không lọc cọc, và các bớt ga - phanh nhẹ để nghe lại máy ở có tải. Sau chuyến chạy thử, soi lại máy một vòng: rò dầu nhớt mới lộ sau khi máy nóng là kiểu lỗi chỉ hiện khi nóng — đúng lý do chạy thử tồn tại. Cuối cùng, hỏi thử lịch sử bảo dưỡng: người chủ có sổ hoặc nhớ rõ kỳ nhớt, thay gì lúc nào — ký ức bảo dưỡng tốt thường đi cùng chiếc xe được giữ tử tế; người bán lúng túng mọi câu hỏi về lịch sử thì hãy tự hỏi vì sao.</p>`,
    },
    {
      h2: 'Giá, đàm phán và bàn giao: phần chốt và phần dễ sai nhất',
      html: `<p>Đàm phán đúng cách với xe cũ: mang theo danh sách phát hiện. Ba lỗi nhỏ (xích khô, bugi già, nhớt quá kỳ) là ba khoản trong toán giá; một lỗi lớn (khung kéo lại, máy khói xanh) không thuộc toán giá — thuộc quyết định mua hay không. Người mua có danh sách đàm phán được có căn cứ ("em thấy lốp cạn, nhớt quá kỳ, xích khô — anh bớt giúp phần này") — kiểu đàm phán này chuyên nghiệp, khó chê, và giữ được thiện cảm cho giao dịch.</p>
<p>Tham chiếu giá nên làm ở nhà trước buổi xem, không phải tại chỗ: dải giá xe cũ trên thị trường cho từng đời, từng tình trạng là dữ liệu nên nắm sẵn, để tại chỗ chỉ cần phân loại — xe này nằm trên, giữa hay dưới dải — thay vì đo giá bằng cảm giác trước mặt người bán. Giá rẻ bất thường tự nó là một thông tin: chợ xe cũ không có nhiều của ngon rơi — thứ rẻ bất thường thường đắt ở phần sau (sửa, giấy tờ, tranh chấp).</p>
<p>Bàn giao cần trọn: tiền trao giấy — đăng ký bản gốc, chìa khóa đủ, và xác nhận viết tay việc mua bán (thời gian, giá, thông tin hai bên) dù thủ tục sang tên chính sẽ làm sau. Dẫn xe về khi chưa làm xong thủ tục thì tối thiểu phải có đăng ký bản gốc trên tay — không có giấy tờ gốc là không dẫn xe về, nguyên tắc không có ngoại lệ nào đáng mở.</p>
<p>Và mục quan trọng người mua hay bỏ: sang tên. Đặt lịch làm thủ tục sang tên theo đúng quy định ngay trong tuần đầu — chậm trễ sang tên là tự gánh mọi rủi ro pháp lý phát sinh từ chủ cũ (phí trước ba, phí phạt chậm, thậm chí tranh chấp). Chi tiết quy trình sang tên xin xem bài viết riêng về thủ tục sang tên xe máy trong mục liên quan của bộ wiki.</p>`,
    },
    {
      h2: 'Sau khi mua: tuần đầu tiên của người chủ mới',
      html: `<p>Chuyến về nhà với xe cũ nên là chuyến thăm dò, không phải chuyến trình làng: chạy nhẹ, tránh ga mạnh và tốc độ cao trong vài trăm cây đầu — vừa làm quen tính xe, vừa cho các chi tiết quen tiếng lạ kịp lộ. Những tiếng kêu xe cũ thường chỉ lộ rõ sau vài ngày vận hành thật — ghi lại tiếng kêu kèm bối cảnh xuất hiện (khi nào, ga bao nhiêu, đường gì) là cách mô tả cho thợ đáng giá hơn mọi phỏng đoán.</p>
<p>Kỳ bảo dưỡng "làm lại từ đầu" là khoản đáng chi ngay: thay nhớt và lọc gió (kể cả khi người bán kể vừa thay — nhớt mới giá nhỏ, biết chắc giá lớn), kiểm tra - thay bugi, vệ sinh buồng đốt nếu cần, xịch lại và tra mỡ xích, kiểm tra má phanh và dầu phanh, soi ắc quy và hệ điện, bơm lốp đúng áp suất. Một buổi chi đúng chỗ này biến chiếc xe "của người khác" thành chiếc xe "của mình" về cả kỹ thuật lẫn tâm lý — mọi con số bảo dưỡng từ đó là con số mình tự biết.</p>
<p>Giấy tờ tuần đầu: làm thủ tục sang tên theo lịch đã đặt, mua bảo hiểm trách nhiệm dân sự bắt buộc còn hiệu lực cho chính mình, kiểm tra lại hạn của mọi loại giấy (người bán để dở là chuyện bình thường). Cặp giấy tờ xe nên vào túi chống nước ngay từ hôm nay — thói quen của chủ mới bắt đầu từ ngày đầu.</p>
<p>Chốt lại: mua xe cũ tốt là một quá trình ba giai đoạn — buổi xem có phương pháp, giao dịch có trọn giấy tờ, và tuần đầu làm lại bảo dưỡng. Bỏ một giai đoạn thì hai giai đoạn còn lại phải gánh rủi ro của nó; làm đủ cả ba thì chiếc xe cũ — thứ bị coi là rủi ro — thực ra là lựa chọn giá trị tốt nhất của rất nhiều người: đã qua giai đoạn mất giá nhanh nhất của xe mới, và giờ nằm trong tay người biết rõ từng con ốc của nó.</p>`,
    },
  ],
  checklist: [
    'Trước buổi xem: nắm sẵn dải giá thị trường của đúng đời xe, yêu cầu gửi ảnh giấy tờ trước, và chuẩn bị checklist theo trình tự hồ sơ - khung - máy - chạy thử.',
    'Hồ sơ: đối chiếu số khung - số máy trên xe với đăng ký tại chỗ, xác nhận người bán là chủ đứng tên hoặc có ủy quyền hợp lệ, hỏi rõ nguồn gốc và tình trạng thế chấp - tranh chấp.',
    'Ngoại hình: soi mép sơn dưới ánh sáng chéo, kiểm tra đối xứng bằng phép nhìn thẳng từ đầu xe, soát gờ hàn và cụm ốc có độ mới đồng nhất, ngửi - soi gầm nếu nghi ngập nước.',
    'Máy: kiểm mực nhớt - dầu phanh - bugi, nghe tua thấp và tua cao, nhìn màu khói pô, và ngửi mùi bất thường trước khi chạy thử.',
    'Chạy thử: tay lái thẳng không kéo, phanh chắc không lệch, vào số nhẹ, có tải nghe lại máy; sau chạy thử soi lại rò dầu khi máy nóng.',
    'Bàn giao và tuần đầu: tiền trao giấy đăng ký bản gốc, viết xác nhận mua bán, đặt lịch sang tên ngay, mua bảo hiểm hợp lệ, và làm lại một kỳ bảo dưỡng từ đầu (nhớt - bugi - lọc gió - xích - phanh).',
  ],
  warnings: [
    'Không đặt cọc hoặc giao tiền khi chưa thấy giấy đăng ký bản gốc và đối chiếu khớp số khung - số máy — kể cả với người quen giới thiệu, hồ sơ là phần không cho phép "tin trước kiểm tra sau".',
    'Không mua xe có dấu khung kéo thẳng lại hoặc gờ hàn lại ở khung chính với lý do "sơn lại cho đẹp" — khung đã mất hình học là mất an toàn vĩnh viễn, không sửa nào trả lại được như cũ.',
    'Không tin số km trên đồng hồ như thông tin duy nhất — đối chiếu với mức mòn thật của xe (bốm tay chân, gầm, khung) trước khi để số km định giá.',
    'Không trì hoãn thủ tục sang tên sau khi nhận xe — mọi phát sinh pháp lý từ chủ cũ trong thời gian chưa sang tên đều rơi vào người mua mới, đúng nghĩa đen của hai chữ "rủi ro".',
  ],
  notes: [
    'Bài viết mang tính kiến thức chung về quy trình kiểm tra khi mua xe máy cũ; các quy định cụ thể về thủ tục sang tên, lệ phí và giấy tờ ủy quyền cần đối chiếu quy định hiện hành tại thời điểm giao dịch.',
    'Không có con số giá cụ thể nào trong bài được đưa ra như khuyến nghị — giá xe cũ phụ thuộc thị trường từng thời điểm, từng vùng và tình trạng từng chiếc; hãy tham chiếu nhiều nguồn bán thực tế cùng lúc.',
  ],
  references: [
    'Quy định hiện hành về đăng ký, sang tên xe máy và giấy tờ cần có khi giao dịch xe đã qua sử dụng.',
    'Hướng dẫn kiểm tra xe cũ của các nền tảng mua bán xe uy tín — các điểm soi sơn, khung, hồ sơ và chạy thử.',
    'Sổ tay hướng dẫn của các nhà sản xuất — thông số bảo dưỡng để đối chiếu lịch sử chăm sóc của chiếc xe đang xem.',
  ],
  related: ['cach-doc-gia-xe-may-moi', 'sang-ten-xe-may-quy-trinh-va-giay-to', 'chay-ra-xe-may-dung-cach'],
};
