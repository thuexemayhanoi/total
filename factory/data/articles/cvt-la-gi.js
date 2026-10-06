// AI WIKI TOTAL — wiki/thuat-ngu-xe: kinh nghiệm cvt là gì dành cho người mới (slot S00313)
'use strict';

module.exports = {
  slug: 'cvt-la-gi',
  title: 'Kinh nghiệm CVT là gì dành cho người mới',
  seoTitle: 'CVT là gì trên xe tay ga: nguyên lý pulley, curoa và bảo dưỡng',
  metaDescription: 'CVT là gì trên xe tay ga: pulley, bi set, dây curoa hoạt động thế nào, vì sao ga là đủ, các dấu hiệu hư CVT và chu kỳ bảo dưỡng cụm truyền lực.',
  summary: 'CVT (continuously variable transmission — hộp số vô cấp) là trái tim của mọi xe tay ga: lý do xe ga không có cần côn, không có cần số, chỉ cần vặn ga là đi. Nhưng "vô cấp" hoạt động ra sao mà ga thành số, và vì sao xe ga lại có kỳ bảo dưỡng pulley — curoa — bi mà xe số không có? Bài viết giải thích CVT theo đúng trình tự truyền lực: pulley trước trên trục máy với các quả bi ly tâm, dây curoa nối sang pulley sau có lò xo ép, và cách cả cụm tự đổi tỷ số mượt theo vòng tua — không có bước số, không có lúc giật chuyển số. Phần hai dành cho người mới bảo dưỡng: dấu hiệu CVT mòn qua cảm giác xe (giật khi tăng tốc, rít từ cụm sau, ga vù không tương xứng tốc độ), chu kỳ lau pulley — thay bi — thay curoa tham chiếu, và hai sai lầm phổ biến: mua bi độ "nâng" theo phong trào mà không hiểu đổi gì, và để curoa mòn tới đứt giữa đường.',
  quickAnswer: 'CVT là hộp số vô cấp: thay vì các cặp bánh răng có tỷ số cố định, CVT dùng hai pulley (bánh côn có mặt côn di động) nối bằng dây curoa. Máy quay nhanh, bi ly tâm trong pulley trước văng ra ép mặt côn thu hẹp, curoa chạy lên rãnh pulley trước và xuống pulley sau — tỷ số truyền thay đổi liên tục, mượt không có bước số. Pulley sau có lò xo ép giữ lực căng và chống trượt. Vì tỷ số tự điều chỉnh theo vòng tua, người lái chỉ cần ga. Bảo dưỡng: lau pulley và lọc bụi curoa mỗi 8.000-15.000 km, thay bi set pulley theo mòn (20.000-30.000 km tham chiếu), thay curoa khi nứt hoặc theo kỳ (~20.000-25.000 km). Dấu hiệu hư: giật khi tăng tốc, rít từ cụm sau, ga vù mà tốc không theo.',
  keyPoints: [
    'CVT = hộp số vô cấp: hai pulley nối dây curoa, tỷ số truyền thay đổi liên tục không có bước số.',
    'Bi ly tâm trong pulley trước văng theo vòng tua, ép mặt côn đổi bán kính curoa — ga là số.',
    'Pulley sau có lò xo ép giữ căng curoa và điều phối lực — lò xo chai làm xe giật và ì.',
    'Bảo dưỡng định kỳ: lau pulley, lọc bụi, kiểm curoa mỗi 8.000-15.000 km.',
    'Dây curoa nứt hoặc mòn là thay — đứt giữa đường là mất truyền lực hoàn toàn.',
    'Dấu hiệu CVT hư: giật khi tăng tốc, rít cụm sau, tua lên nhanh mà tốc độ không tương xứng.',
  ],
  category: 'wiki',
  hub: 'thuat-ngu-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['CVT', 'hộp số vô cấp', 'pulley', 'bi set pulley', 'dây curoa', 'lò xo pulley sau', 'trượt curoa'],
  keywords: ['cvt là gì', 'hộp số vô cấp xe ga', 'pulley là gì', 'dây curoa xe tay ga', 'thay bi pulley', 'bảo dưỡng cvt'],
  sections: [
    {
      h2: 'Nguyên lý: hai pulley, một dây, vô số tỷ số',
      html: `<p>Một cụm CVT gồm ba món chính: pulley trước (gắn trục máy), pulley sau (gắn trục bánh sau qua cụm giảm tốc), và dây curoa nối hai pulley. Mỗi pulley có hai mặt côn: một cố định, một di động trượt trên trục — khe giữa hai mặt là rãnh curoa. Rãnh hẹp ở pulley này đẩy curoa chạy ra mép ngoài (bán kính lớn); rãnh rộng cho curoa tụt vào giữa (bán kính nhỏ).</p>
<p>Bán kính curoa trên hai pulley chính là tỷ số: pulley trước bán kính nhỏ — pulley sau bán kính lớn là số "thấp" (lực kéo mạnh, tốc chậm), ngược lại là số "cao". Vì mặt côn di động trượt liên tục, bán kính đổi mượt — tỷ số truyền đổi vô cấp: không có bước nhảy số, không có lúc giật chuyển.</p>
<p>Trên lý thuyết CVT có vô số "số"; trên thực tế vùng tỷ số bị giới hạn bởi biên đường kính pulley — xe ga vẫn có "số 1" và "số tối đa" ảo, chỉ là đi qua chúng bằng đường cong mượt thay vì nấc nhảy. Đó là lý do trải nghiệm xe ga êm: mọi thay đổi tốc diễn ra trong một chuyển động liên tục.</p>`,
    },
    {
      h2: 'Ga thành số: bi ly tâm và lò xo phối hợp thế nào',
      html: `<p>Trong pulley trước là một bộ bi (bi set) chạy trong rãnh xoắn: máy quay nhanh, lực ly tâm văng bi ra ngoài, bi ép mặt côn di động — rãnh pulley trước hẹp lại, curoa chạy lên bán kính lớn. Tua máy càng cao, bi văng càng mạnh, tỷ số càng "cao": ga chính là lệnh đổi số.</p>
<p>Pulley sau là phía phản kháng: lò xo ép mặt côn, giữ curoa căng và tụt về bán kính lớn khi tải tăng (leo dốc, chở nặng). Lò xo và bi mặc cả với nhau: bi đẩy tỷ số lên cao theo tua, lò xo kéo tỷ số xuống thấp theo tải — xe tự cân bằng hai lực đó để luôn chọn tỷ số phù hợp lực kéo.</p>
<p>Từ cơ chế này sinh ra mọi cảm giác xe ga: khởi hành êm (curoa trượt nhẹ trên pulley khi mới đi — vai trò "côn" của CVT), tăng tốc mượt, và cả hai hiện tượng hư quen thuộc: giật khi bi mòn không văng đều, và ì khi lò xo chai mất phản kháng. Hiểu bộ ba bi — lò xo — curoa là hiểu toàn bộ tính cách chiếc xe ga của mình.</p>`,
    },
    {
      h2: 'Chu kỳ bảo dưỡng cụm CVT',
      html: `<p>Mỗi 8.000-15.000 km (tham chiếu phổ thông, theo sổ tay xe mình): mở nắp cụm CVT, thổi và lau sạch bột mòn curoa khỏi rãnh pulley và nắp, vệ sinh lỗ thoát bụi, kiểm tra dây curoa không nứt, tra mỡ chịu nhiệt đúng chuẩn vào ren trượt của mặt côn di động (nhiều pulley có gầu mỡ riêng).</p>
<p>Thay theo mòn chứ không theo cảm giác: bi set pulley mòn mất khối và trượt rãnh — thay tham chiếu 20.000-30.000 km tùy cách chạy; dây curoa nứt chân răng, mòn mặt, hoặc vượt độ giãn — thay quanh 20.000-25.000 km; lò xo pulley sau chai (chiều cao ngắn hơn chuẩn) — thay cùng kỳ bi hoặc theo kiểm. Ba món này là bộ ba tiêu hao của CVT, thay đúng kỳ giữ cho "ga thành số" luôn chuẩn như ngày mới.</p>
<p>Việc lớn hơn để thợ: cân bằng pulley sau khi thay bi và lò xo (gầu bi lệch làm rung), và kiểm cụm giảm tốc sau pulley (dầu hộp — đã có bài riêng trong chuỗi wiki về dầu hộp số xe ga). Người dùng giữ phần kỳ và dấu hiệu — phần còn lại là của người có dụng cụ.</p>`,
    },
    {
      h2: 'Dấu hiệu CVT hư qua cảm giác xe',
      html: `<p>Dấu hiệu một — giật khi tăng tốc từ tốc thấp: bi mòn không văng đều, tỷ số nhảy thay vì trượt mượt; cảm giác xe "hắt" từng nhịp như xe số đổi số vụng. Dấu hiệu hai — rít kim loại từ phía sau khi tăng tốc: curoa trượt trên rãnh vì bụi bột mòn đóng dày hoặc bi kẹt rãnh.</p>
<p>Dấu hiệu ba — tua lên nhanh mà tốc độ không tương xứng: curoa mòn hẹp, chìm sâu trong rãnh — bán kính thực tế nhỏ hơn thiết kế, tỷ số "chót" mất; xe ga mà có cảm giác "trượt côn" của xe số thì đó là curoa. Dấu hiệu bốn — rung theo nhịp tốc độ sau khi thay bi: cụm sau mất cân bằng hoặc bi lệch gầu.</p>
<p>Dấu hiệu năm — nặng đề khởi hành, xe ì từ vạch xuất phát: lò xo pulley sau chai, không giữ được tỷ số thấp khi cần lực kéo. Năm dấu hiệu này không chẩn đoán thay nhau — nhưng đều chỉ về một cụm, và phép xử lý đầu tiên luôn rẻ giống nhau: lau pulley, thay phần tiêu hao đúng kỳ. CVT sạch và đủ mới là 80% của việc "xe ga đi mượt".</p>`,
    },
    {
      h2: 'Hai hiểu lầm: bi độ và "curoa bền vĩnh viễn"',
      html: `<p>Hiểu lầm một — "nâng bi" cho xe bốc: bi nặng hơn văng chậm hơn, giữ pulley ở tỷ số thấp lâu hơn — cảm giác "bốc" ở tua thấp thực ra là giữ số thấp thêm chút, đổi lại tua máy cao hơn ở cùng tốc độ (ồn và tốn xăng hơn), và buộc lò xo phải phản kháng mạnh hơn (chai sớm). Nâng bi là chỉnh tính cách xe — hợp người hiểu mình đổi gì; với người mới, bi chuẩn hãng cho cân bằng đã được nhà sản xuất tính.</p>
<p>Hiểu lầm hai — curoa "còn nhìn được là còn chạy": curoa chết âm thầm từ nứt chân răng bên trong — nhìn ngoài mặt còn nguyên; nứt tiến triển thành đứt từng đoạn răng, và đứt giữa đường là mất truyền lực hoàn toàn: máy tua, ga vù, xe đứng. Kiểm curoa mỗi kỳ lau pulley, soi chân răng dưới đèn — thay khi thấy nứt, không đợi mòn mặt.</p>
<p>Tư duy tổng cho người mới về CVT: cụm này làm việc bằng ma sát và ly tâm — hai thứ tiêu hao theo bản chất. Cho nó kỳ lau sạch, thay đúng phần tiêu hao, và nó trả lại bằng trải nghiệm đặc trưng của xe ga: mượt, êm, một tay ga. Đó là hợp đồng bảo dưỡng rẻ nhất trong thế giới xe máy — chỉ cần người lái nhớ rằng "không có cần số" không đồng nghĩa "không có gì để bảo dưỡng".</p>`,
    },
  ],
  checklist: [
    'Mỗi 8.000-15.000 km: lau pulley, vệ sinh lỗ thoát bụi, kiểm tra curoa không nứt chân răng.',
    'Thay curoa quanh 20.000-25.000 km hoặc khi thấy nứt — không đợi đứt.',
    'Thay bi set pulley theo mòn (tham chiếu 20.000-30.000 km), chọn bi chuẩn hãng.',
    'Theo dõi cảm giác xe: giật tăng tốc, rít cụm sau, tua-tốc lệch là tín hiệu soi CVT.',
    'Tra mỡ chịu nhiệt đúng chuẩn ren trượt mặt côn khi lau pulley.',
    'Ghi kỳ CVT vào sổ xe — cụm này tiêu hao theo km, lịch là cách duy nhất canh.',
  ],
  warnings: [
    'Curoa nứt chân răng mà đứt giữa đường là mất truyền lực hoàn toàn — thay trước, không chạy tiếp.',
    'Không nâng bi khi không hiểu hệ quả: ồn, tốn xăng, lò xo chai sớm — tính cách đổi hai chiều.',
    'Rít kim loại kéo dài từ cụm CVT: dừng kiểm sớm — curoa trượt dài làm mòn rãnh pulley vĩnh viễn.',
  ],
  notes: [
    'Chu kỳ trong bài tham chiếu xe tay ga phổ thông; kỳ chuẩn và loại phụ tùng theo sổ tay dịch vụ của từng dòng xe.',
    'Dầu hộp số sau cụm CVT là hệ thống riêng — xem bài dầu hộp số trong chuỗi wiki.',
  ],
  references: [
    'Tài liệu kỹ thuật về hệ thống truyền lực vô cấp (CVT) trên xe tay ga.',
    'Sổ tay dịch vụ các dòng xe tay ga phổ thông — chu kỳ bảo dưỡng pulley, bi set, curoa.',
    'Hướng dẫn của nhà sản xuất phụ tùng CVT về tra mỡ chịu nhiệt và kiểm tra độ mòn.',
  ],
  related: [
    'con-la-gi',
    'thuat-ngu-xe-may',
    'dau-hop-so',
    'tu-dien-xe-may',
  ],
};
