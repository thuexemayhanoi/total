// Kinh nghiệm bảo dưỡng xe ga dành cho người mới — S00237 (hub guide/bao-duong)
'use strict';
module.exports = {
  slug: 'bao-duong-xe-ga',
  title: 'Kinh nghiệm bảo dưỡng xe ga dành cho người mới',
  seoTitle: 'Kinh nghiệm bảo dưỡng xe ga dành cho người mới',
  metaDescription: 'Kinh nghiệm bảo dưỡng xe ga cho người mới: ắc quy, mỡ nồi truyền động, nhớt máy đúng loại, lọc gió và lịch tối giản giúp xe ga chạy bền quanh năm.',
  summary: 'Xe ga nhìn giống xe máy số ở phần lớn mọi thứ trừ đúng những chỗ cần chăm — và người mới chuyển sang xe ga hay mang theo nếp chăm xe số cũ, bỏ sót các hạng mục chỉ xe ga mới có. Kinh nghiệm bảo dưỡng xe ga trong bài này đi theo đúng sự khác biệt đó: ắc quy — chi tiết hay chết nhất trên xe ga vì mọi đường khởi động đều đi qua nó; cụm nồi truyền động với mỡ, bi và dây curoa mòn theo cách riêng; lỗi đặc trưng "thay nhớt xong đề không nổ" và cách tránh; lọc gió và lọc xăng của xe ga chịu bụi kiểu khác; cùng một lịch tối giản chỉ một trang giúp xe ga chạy êm quanh năm. Hiểu năm điểm khác biệt này, người mới chăm xe ga sẽ không trả tiền oan cho những việc xe số cần mà xe ga không cần — và ngược lại.',
  quickAnswer: 'Bảo dưỡng xe ga cho người mới nên tập trung vào năm điểm khác biệt so với xe số: ắc quy là sinh mệnh của xe ga — soi đèn còi mỗi tuần và thay theo tuổi, đừng đợi sáng lạnh mới biết; cụm nồi truyền động cần mỡ đúng mốc, bi và dây curoa soi theo ki-lô-mét; nhớt máy dùng đúng loại khuyến nghị cho xe ga và không vặn ga khi đề; lọc gió soi mỗi kỳ vì nồi xe ga thổi bụi mạnh; phanh đĩa soi má và dầu phanh hằng năm. Một trang lịch gồm ắc quy, mỡ nồi, nhớt, lọc và phanh là đủ cho hai năm đầu tiên.',
  keyPoints: [
    'Ắc quy là chi tiết số một của xe ga: soi đèn còi mỗi tuần, thay theo tuổi định kỳ.',
    'Mỡ nồi truyền động thay đúng mốc — bi nồi và dây curoa soi theo ki-lô-mét.',
    'Đề xe ga không vặn ga: đề ba đến năm giây, nghỉ mười giây, lặp tối đa bốn lần.',
    'Nhớt máy đúng loại khuyến nghị cho xe ga — sai loại là kẹt van và khó nổ.',
    'Lọc gió soi mỗi kỳ nhớt: cụm nồi xe ga thổi bụi mạnh hơn xe số.',
    'Phanh đĩa: soi má theo mắt thường hằng quý, dầu phanh theo năm.',
  ],
  category: 'guide',
  hub: 'bao-duong',
  date: '2026-10-04',
  updated: '2026-10-04',
  entities: ['ắc quy', 'nồi truyền động', 'mỡ nồi', 'dây curoa'],
  keywords: ['bảo dưỡng xe ga', 'bao duong xe ga', 'chăm sóc xe ga', 'mỡ nồi xe ga', 'ắc quy xe ga'],
  sections: [
    {
      h2: 'Chăm xe ga khác chăm xe số ở đâu',
      html: `<p>Ba khác biệt lớn nhất: khởi động điện thay cho cần giò (mọi đường đi qua ắc quy), cụm nồi truyền động tự động thay cho bộ số (thêm một nhóm chi tiết cần mỡ và soi), và phanh đĩa phổ biến hơn (thêm dầu phanh vào danh sách). Nghe gọn — nhưng chính ba điểm này đổi toàn bộ thứ tự ưu tiên khi chăm xe: người vẫn chăm như xe số sẽ thay nhớt đều nhưng để ắc quy chết tự nhiên, và đó là kiểu hỏng chọn đúng buổi mưa để xảy ra.</p>
<p>Ngược lại, vài việc của xe số xe ga không cần hoặc cần khác đi: không có cần côn nên không có lá côn chỉnh; không có xích nên không có chuỗi giãn — thay vào đó là dây curoa và bi nồi. Điểm "tiết kiệm được" này đáng biết sớm để không nhận những dịch vụ chào theo thói quen mà xe mình không có chi tiết đó.</p>
<p>Cách tư duy cho người mới: lấy danh sách chăm chuẩn của xe số, gạch các dòng xe ga không có, rồi thêm ba dòng riêng — ắc quy, nồi truyền động, phanh đĩa. Kết quả là một trang ngắn hơn tưởng tượng, và mỗi dòng trên đó đều có lý do kỹ thuật thuộc về chiếc xe của chính bạn.</p>`,
    },
    {
      h2: 'Ắc quy: sinh mệnh của xe ga',
      html: `<p>Trên xe ga, ắc quy khởi động máy, và đồng thời nuôi còi, đèn, cấp nguồn cho kim phun và cảm biến — một ắc quy yếu không chỉ khó nổ mà còn khiến máy chạy không đều. Vì vậy tín hiệu sớm đáng tin nhất không nằm ở đề máy, mà ở còi và đèn: còi rè hơn, đèn pha vàng hơn thường lệ buổi tối — hai tín hiệu này xuất hiện trước khi đề còn êm, và là lúc thay rẻ nhất.</p>
<p>Chu kỳ: soi miễn phí hàng tuần bằng còi đèn như trên; mỗi sáu tháng soi tại tiệm (đo điện áp); thay theo tuổi — đa số ắc quy kín khí sống tốt hai đến bốn năm. Xe chạy đoạn ngắn mỗi ngày là điều kiện xấu nhất cho ắc quy: sạc không đủ bù đề, nên một vòng mười lăm phút mỗi tuần đáng giá hơn mọi phụ gia đóng chai.</p>
<p>Hai thói quen kéo dài tuổi ắc quy rõ nhất: tắt toàn bộ đèn trước khi khóa xe (đèn để quên một đêm đủ để sáng hôm sau đi bộ), và không cắm thêm đồ điện công suất lớn không qua cầu chì. Đơn giản, rẻ, và đúng nghĩa "chăm" — vì cả hai việc này đều không tốn một đồng nào tại tiệm.</p>`,
    },
    {
      h2: 'Nồi truyền động: mỡ, bi và dây curoa',
      html: `<p>Cụm nồi truyền động của xe ga gồm hai bánh nồi nối bằng dây curoa, với bi nồi tạo lực ly hợp khi tăng tốc. Ba chi tiết này mòn theo ki-lô-mét theo kiểu riêng: mỡ nồi khô cạn theo mốc (thường ba nghìn đến năm nghìn ki-lô-mét một lần tùy loại xe — tra đúng trong sách), bi nồi mòn tạo độ giật khi xuất phát, dây curoa nứt mặt hoặc giãn làm vọt ga không ăn.</p>
<p>Dấu hiệu nhận trên đường: xuất phát giật một cái rồi mới bình thường (bi nồi), máy gào nhưng xe không tiến tương xứng (curoa trượt), tiếng rắc rắc từ phía lốp sau khi đề (nhớt nồi khô). Mỗi dấu hiệu đáng được soi đúng kỳ gần nhất — cụm này để lâu không chết ngay nhưng ăn dần xăng và khiến mọi cú xuất phát đều vụng về.</p>
<p>Chăm đúng nghĩa ở cụm này là đúng loại mỡ và đúng lượng: mỡ nồi là loại riêng (không phải mỡ bánh xe hay nhớt máy), và thợ giỏi bơm theo rãnh định mức. Xin xem lại bi và curoa cũ mỗi lần mở nồi — hai món này rẻ, và so sánh mới cũ trước mặt là cách học nhanh nhất về chiếc xe của mình.</p>`,
    },
    {
      h2: 'Nhớt máy xe ga và lỗi đề không nổ sau khi thay',
      html: `<p>Xe ga dùng nhớt máy đúng loại khuyến nghị — và điểm khác thật sự nằm ở cách khởi động sau khi thay: với nhiều dòng xe ga, máy vừa được nhớt mới thì lần đề đầu có thể chậm nổ hơn thường lệ; cách xử lý là đề bình tĩnh, không vặn ga. Vặn ga lúc đề trên xe ga bơm thêm nhiên liệu vào buồng cháy và khiến máy khó nổ hơn — lỗi kinh điển của người mới chuyển từ xe số, vì trên xe số vặn ga lúc đề là thói quen lành mạnh.</p>
<p>Kỹ thuật đề chuẩn cho xe ga: kéo phanh, đề ba đến năm giây, nghỉ chừng mười giây, lặp tối đa bốn lần. Nếu bốn nhịp không nổ, dừng và nghĩ — đừng đề liền tay năm phút: ắc quy xả nhanh, và vấn đề gốc không nằm ở sự bền bì của người đề.</p>
<p>Về kỳ: đa số xe ga khuyến nghị kỳ nhớt ngắn hơn xe số cùng cỡ máy — vì cụm truyền và máy chạy nhiệt chút ít khác. Đừng "kéo dài thêm chút xíu cho tiện" — chỉ cần mở sách xem con số, rồi đặt nó vào nhắc việc điện thoại. Việc nhỏ này là ranh giới giữa một chiếc xe ga êm ba năm và một chiếc lăn lóc tới tiệm mỗi tháng.</p>`,
    },
    {
      h2: 'Lọc gió và lọc xăng của xe ga',
      html: `<p>Lọc gió xe ga bẩn nhanh hơn mặt tưởng tượng vì cụm nồi thổi khí mạnh: bụi không chỉ đọng mà còn ép chặt vào mặt lọc. Vì vậy với xe ga, soi lọc gió mỗi kỳ nhớt không phải sự cẩn thận thừa — đó là nhịp chuẩn. Vệ sinh bằng thổi nhẹ khi vật liệu còn nguyên, thay khi giấy rách mép; nguyên tắc giống mọi xe nhưng chu kỳ nghiêng về sớm hơn.</p>
<p>Lọc xăng — chi tiết ít được nhắc nhưng quan trọng với xe ga phun xăng điện tử: tắc một phần khiến máy lép ở ga cao và khó nổ buổi sáng. Kỳ soi dài (theo sách, thường vài chục nghìn ki-lô-mét), nhưng sau những năm xăng không rõ nguồn hoặc nhiên liệu để lâu trong bình, một lần soi sớm đáng làm. Đây cũng là lý do đổ xăng ở điểm tin cậy là việc chăm xe khoác tên khác — chất lượng nhiên liệu là một hạng mục bảo dưỡng không in trong bảng lịch.</p>
<p>Ghép hai lọc với ắc quy trong một buổi thăm định kỳ: mở lọc gió soi, hỏi thợ xem áp lực lọc xăng thế nào nếu xe có triệu chứng lép, và đo ắc quy. Ba việc này cộng lại mất dưới nửa giờ trong đợt tổng thể hằng năm — và là phần lớn những gì một chiếc xe ga thực sự cần ngoài vòng nhớt thường lệ.</p>`,
    },
    {
      h2: 'Phanh đĩa và lịch tối giản cho hai năm đầu',
      html: `<p>Phanh đĩa trước (và nhiều dòng có cả sau) là trang bị đáng mừng nhưng thêm một lớp chăm: má phanh mòn theo ki-lô-mét — soi bằng mắt qua khe nắp định kỳ; dầu phanh già theo năm và hút ẩm dần làm cần phanh mềm nhão. Một lần kiểm và thay dầu phanh mỗi một đến hai năm là mốc hợp lý cho xe chạy phố, và là hạng mục đáng ghi vào lịch đúng cách ghi nhớt.</p>
<p>Trang lịch tối giản cho xe ga hai năm đầu: dòng đề — ắc quy soi sáu tháng, thay theo tuổi; dòng nồi — mỡ theo mốc sách, bi curoa soi mỗi một vạn ki-lô-mét; dòng nhớt — kỳ của hãng không kéo dài; dòng lọc — gió soi mỗi kỳ, xăng theo triệu chứng; dòng phanh — má hằng quý, dầu theo năm. Năm dòng, một trang, đủ cho mọi xe ga phổ thông.</p>
<p>Chốt lại: bảo dưỡng xe ga không khó hơn xe số — nó khác hơn. Người mới nắm được năm điểm khác biệt này sẽ thấy vòng chăm thực ra gọn hơn: ít chỉnh côn xích, nhiều soi điện nồi. Và chiếc xe ga được chăm đúng nhịp thì trả lời bằng đúng thứ người mua nó vẫn mong: đề một phát lên máy, vọt ga êm, và chạy quanh năm vẫn một tiếng máy đều.</p>`,
    },
  ],
  checklist: [
    'Mỗi tuần: bấm còi và mở đèn pha — rè hay vàng hơn là tín hiệu ắc quy.',
    'Ắc quy: đo điện áp sáu tháng một lần, thay theo tuổi hai đến bốn năm.',
    'Mỡ nồi thay đúng mốc sách xe; bi nồi và dây curoa soi mỗi một vạn km.',
    'Đề xe ga: kéo phanh, đề 3–5 giây, nghỉ 10 giây, tối đa bốn nhịp, không vặn ga.',
    'Lọc gió soi mỗi kỳ nhớt — thổi nhẹ khi còn nguyên, thay khi rách mép.',
    'Phanh đĩa: soi má hằng quý, thay dầu phanh mỗi một đến hai năm.',
  ],
  warnings: [
    'Không vặn ga khi đề xe ga — bơm thêm xăng khiến máy càng khó nổ.',
    'Không để đèn mở sau khi khóa xe — một đêm là đủ xả ắc quy tới sáng.',
    'Không dùng mỡ bánh xe hay nhớt máy thay cho mỡ nồi — sai loại là kẹt nồi.',
    'Không đề liền tay quá bốn nhịp — ắc quy xả nhanh mà máy vẫn chưa có tia lửa.',
  ],
  notes: [
    'Với xe ga phun xăng điện tử, đổ xăng nơi tin cậy là một hạng mục bảo dưỡng thật — chất lượng nhiên liệu ảnh hưởng vòi phun và lọc.',
    'Sau khi thay nhớt, lần đề đầu chậm hơn thường lệ là bình thường — đề bình tĩnh, không vặn ga, máy lên sau vài nhịp.',
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
  related: ['bao-duong-dinh-ky', 'van-hanh-xe-ga'],
};
