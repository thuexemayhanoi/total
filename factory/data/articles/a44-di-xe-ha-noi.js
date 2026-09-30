// AI WIKI TOTAL — bài mở rộng cụm /local/ha-noi/: đi xe máy ở Hà Nội lưu ý cho người mới (slot S00044)
'use strict';

module.exports = {
  slug: 'di-xe-may-o-ha-noi-luu-y',
  title: 'Đi xe máy ở Hà Nội: lưu ý cho người mới — dòng chảy giao thông, phố một chiều, đỗ xe và mùa mưa',
  seoTitle: 'Đi xe máy ở Hà Nội: lưu ý cho người mới',
  metaDescription: 'Đi xe máy ở Hà Nội lần đầu: hiểu dòng chảy giao thông, phố một chiều khu phố cổ, luồng xe buýt, lối đỗ xe, mùa mưa và giờ cao điểm cho người mới lái.',
  summary: 'Đi xe máy ở Hà Nội lần đầu — dù là người mới lấy bằng, người từ tỉnh lên, hay khách thuê xe đi tham quan — là trải nghiệm khác hẳn đi xe máy ở các đô thị nhỏ: mật độ xe lớn, dòng chảy giao thông có logic riêng của nó, nhiều phố một chiều, luồng xe buýt và ô tô chia sẻ mặt đường hẹp, và giờ cao điểm biến mọi cung đường quen thành bài toán chen đi. Bài viết này không dạy luật (bài giấy tờ và luật riêng đã có trong bộ wiki) mà đi vào đúng phần thực chiến: đọc hiểu dòng chảy giao thông Hà Nội, nắm nhóm khu vực một chiều quen, giao nhau với xe buýt và ô tô trên đường hẹp, đỗ xe theo lối của thành phố, và các lưu ý theo mùa cũng như theo khung giờ — để người mới đi được an toàn mà không bị cuốn theo nhịp điệu dễ va chạm.',
  quickAnswer: 'Ba điều chỉnh lớn nhất khi đi xe máy ở Hà Nội với người mới: một, đi theo dòng chảy thay vì theo ý mình — giữ cùng tốc độ trung bình của luồng, tránh bứt lên rồi phanh gấp giữa dòng; hai, nắm quy tắc vùng một chiều (nhiều phố khu phố cổ và khu trung tâm chỉ cho đi một hướng) — tra kỹ trước khi vào khu lạ thay vì rẽ mò rồi quay đầu giữa đường; ba, đỗ đúng lề và gọn — phần đỗ xe chiếm mép đường là tập quán của thành phố, nhìn theo xe đang đỗ xung quanh trước khi chọn chỗ. Thêm vào đó: giờ cao điểm nên né nếu có thể, mùa mưa chuẩn bị sẵn đồ mưa, và luôn giữ khoảng cách với xe buýt đang tiến sát điểm dừng.',
  keyPoints: [
    'Dòng chảy giao thông Hà Nội có nhịp riêng: tốc độ trung bình thấp nhưng đều, các khe hở nhỏ và liên tục thay đổi — kỹ năng số một là quét gương - vai liên tục và đi theo nhịp chung thay vì tự tạo nhịp riêng giữa dòng.',
    'Nhiều khu trung tâm và phố cổ là một chiều hoặc cấm xe: vào khu lạ thì tra bản đồ trước khi rẽ, và quy tắc vàng khi lạc một chiều là đi tiếp theo vòng quay an toàn thay vì quay đầu gấp giữa dòng.',
    'Xe buýt và ô tô có "điểm mù" và điểm dừng riêng: xe buýt tiến sát điểm dừng luôn đè làn mép phải — đi chậm sau nó, không xuyên khe sát cột buýt lúc nó đang vào trạm.',
    'Phần đỗ xe là phần đàm phán của thành phố: đỗ gọn theo lề theo hướng xe đang đỗ xung quanh, không chặn cổng - lối đi - miệng hè xuống của người bộ hành, và không đỗ trên miệng cống hoặc chỗ đổ rác buổi sáng sớm.',
    'Giờ cao điểm làm mọi tính toán sai: lên đường sớm hơn bình thường một quãng hoặc chọn tuyến vòng ít đông hơn là chiến lược tốt hơn là cố đâm vào luồng tắc và mạo hiểm chen khe.',
    'Mùa và thời tiết thay đổi mặt đường: mưa lớn làm các hố hèm lộ ra và ngập điểm trũng quen, mùa hanh khô bụi mù tầm nhìn buổi sáng sớm — chạy chậm lại và bật đèn cả trong ngày mưa mịt.',
  ],
  category: 'local',
  hub: 'ha-noi',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['giao thông Hà Nội', 'đi xe máy ở Hà Nội', 'phố một chiều', 'xe buýt', 'giờ cao điểm', 'đỗ xe máy'],
  keywords: ['đi xe máy ở Hà Nội lưu ý', 'giao thông Hà Nội xe máy', 'phố một chiều Hà Nội', 'đi xe máy giờ cao điểm', 'đỗ xe máy ở Hà Nội', 'mùa mưa đi xe máy Hà Nội'],
  sections: [
    {
      h2: 'Đọc hiểu dòng chảy giao thông Hà Nội',
      html: `<p>Điểm khác căn bản nhất của Hà Nội với các đô thị nhỏ hơn: không phải tốc độ, mà là mật độ và tính liên tục. Dòng xe máy ở Hà Nội hiếm khi dứt khoát thành từng "đợt" như ở nơi vắng — nó là một dải liên tục, các khe hở nhỏ và mở - đóng liên miên. Người mới hay gặp rắc rối vì mang theo thói quen nơi vắng: chờ một khe to rồi mới rẽ, hoặc tăng tốc để "thoát" — ở Hà Nội hai cách này đều kéo theo rủi ro, vì khe to không tồn tại đủ lâu và tăng tốc giữa dòng chỉ đưa mình vào thế va chạm với người cùng tăng theo phía trước.</p>
<p>Kỹ năng nền cho dòng chảy kiểu này là quét liên tục: gương (cả gương và vai, vì xe máy có điểm mù gương không che hết), phía trước hai - ba xe, và hai bên mỗi khi gần ngã tư. Quy tắc chọn vị trí: đi giữa làn mép phải của phần đường xe máy, không rời vào mép cực phải (phần đỗ xe và cột, miệng hè xuống của người bộ hành) và không dạt vào làn ô tô. Người mới nên tập thói quen quét theo nhịp cố định — mỗi vài giây một lần gương, mỗi gần ngã tư một lần cả hai vai — để nó thành phản xạ trước khi cần dùng gấp.</p>
<p>Tốc độ đúng ở Hà Nội là tốc độ của luồng, không phải tốc độ giới hạn hay tốc độ của riêng mình: giữ nhịp chung, đều tay ga, và chấp nhận rằng trong giờ cao điểm mọi người cùng đi chậm. Phong cách "lách" — xuyên khe sát giữa các xe — là phần gây va chạm nhiều nhất cho cả người lách lẫn người bị lách; người mới nên tách hẳn kỹ năng này ra khỏi bộ kỹ năng của mình: mục tiêu của chuyến đi phố là tới nơi, không phải tới trước ai.</p>
<p>Một điều tích cực đáng nói: dòng chảy Hà Nội dễ đoán hơn vẻ ngoài. Phần lớn người đi đường tuân theo vài quy tắc ngầm ổn định — mép phải cho chậm, giữa cho nhanh, xi-nhan hoặc giơ tay trước khi rẽ — và người vi phạm quy tắc ngầm thường thấy sớm (xe lượn không chắc hướng, ga - phanh thất thường). Tập "đọc" người đi phía trước bằng ngôn ngữ cơ thể xe: xe ngả nghiêng là sắp rẽ, đầu xe nhích lệch là sắp đổi làn — kỹ năng này sau vài tuần trở thành thứ giúp người mới tự tin thấy được mình đang trong dòng mà không bị dòng cuốn.</p>`,
    },
    {
      h2: 'Phố một chiều, khu cấm xe và cách xử khi lạc hướng',
      html: `<p>Nhiều tuyến khu phố cổ và một số khu trung tâm của Hà Nội chỉ cho đi một hướng, và vài tuyến cấm hoặc giới hạn loại xe theo khung giờ. Với người mới, đặc thù này tạo ra rắc rối quen thuộc: bản đồ nói rẽ trái, tới nơi mới thấy biển cấm rẽ trái — vì bản đồ tính tuyến theo đường cho phép chung, không nắm hết các cấm theo khung giờ. Vì vậy, khi đi vào khu phố cổ hoặc khu trung tâm lạ, nên xem kỹ tuyến trên bản đồ trước khi lăn bánh, và coi các biển báo trên đường là nguồn sự thật cuối cùng, cao hơn ứng dụng.</p>
<p>Quy tắc vàng khi phát hiện đi ngược một chiều (hoặc vừa rẽ vào đường cấm): không quay đầu gấp giữa dòng, không lùi dài trên đường một chiều. Cách xử an toàn: giữ hướng theo dòng (nếu đường là một chiều ngược hướng mình muốn đi thì tìm ngã tư kế tiếp để rẽ vào đường song song rồi quay lại tự nhiên), và nếu cần quay đầu thì chỉ quay ở các điểm rộng — ngã tư có đèn, đoạn đường được thiết kế điểm quay đầu. Một vòng quay thêm hai phút luôn rẻ hơn một cú quay đầu gấp giữa dòng xe dày.</p>
<p>Nhóm biển báo người mới nên thuộc lòng: biển cấm chiều, cấm rẽ, cấm quay đầu; biển làn đường theo loại xe (làn dành riêng hoặc làn ưu tiên xe buýt trên một số tuyến); biển cấm dừng - đỗ; và biển giới hạn theo khung giờ (đèn thời gian trên biển). Đọc biển trước ngã tư chứ không phải giữa ngã tư — kỹ năng giữ khoảng cách với xe trước vừa đủ để còn nhìn được biển và đèn, một điều chỉ đạt được khi không bám sát.</p>
<p>Lạc hướng ở Hà Nội có một mẹo chung: tìm một trục lớn quen để định vị rồi mới quay về tuyến nhỏ. Đi lòng vòng thêm vài phút để tự định vị an toàn luôn hơn là rẽ mò vào hẻm nhỏ rồi lạc sâu — hẻm Hà Nội nhỏ, đông, và quay đầu trong hẻm là bài toán khó cho cả người đi lâu năm. Ngày nay ứng dụng bản đồ giúp nhiều, nhưng thói quen nhìn biển và giữ định hướng chung (biết mình đang ở phía nào của các trục quen) vẫn là lớp an toàn cho mọi người mới.</p>`,
    },
    {
      h2: 'Giao nhau với xe buýt, ô tô và đi qua ngã tư',
      html: `<p>Xe buýt là "người khổng lồ" của đường phố Hà Nội với người đi xe máy: to, nặng, cần khoảng cách dừng dài, và luôn đi kèm điểm dừng trạm. Quy tắc an toàn với xe buýt: khi buýt tiến sát điểm dừng, nó đè làn mép phải — toàn bộ không gian xe máy hay đi; đi chậm theo sau nó thay vì xuyên khe sát cột buýt lúc nó đang vào trạm, và không vượt buýt ở phía phải khi nó đang vào - ra trạm. Khi vượt buýt (phía trái), vượt dứt khoát và không đi kèm song song dài — di chuyển bên một xe to là nơi mọi điểm mù của tài xế tập trung.</p>
<p>Với ô tô chung: ô tô đỗ ven đường có cửa mở bất ngờ — giữ khoảng cách hơn một sải tay khi đi ngang xe đang đỗ, giảm tốc ở các hàng xe đỗ dài (một cánh cửa mở là kịch bản va chạm phổ biến nhất của xe máy đô thị); ô tô rẽ thường cắt mép đường xe máy — khi thấy ô tô xi-nhan, không cố vượt phía trong quãng rẽ; và taxi - xe công nghệ hay dừng - xuất phát bất ngờ ven lề — khoảng cách với hàng xe này là tiền bảo hiểm rẻ nhất của người đi xe máy.</p>
<p>Ngã tư có đèn: ghép lại thành trình tự — giảm tốc từ xa (nhìn xa giữ đà), dừng đúng vạch (không đè vạch, không dừng trên phần đường dành cho người bộ hành), đếm xe chung quanh trước khi đèn xanh (xe bên trái - bên phải cũng chuẩn bị rẽ), và cẩn trọng riêng với đèn vàng cuối — cú "chen thêm" ở đèn vàng là nguồn va chạm ngã tư kinh điển. Ngã tư không đèn (phố nhỏ, khu dân cư): quy tắc chậm - nhìn - nhường người từ hướng phải đang áp dụng chung, và tại ngã tư không đèn thì chậm lại nhiều hơn mình nghĩ cần.</p>
<p>Đi qua đoạn đường đang thi công hoặc hẹp bất ngờ: các đoạn đang thi công thường hẹp đột ngột, lối đi tạm dọn qua lại dùng chung — giảm tốc về mức đi bộ nếu không rõ, đi đúng theo hướng dẫn của biển - người điều tiết, và không cố vượt trong đoạn một làn tạm. Khoảng vài giây chậm thêm luôn rẻ hơn mọi phán đoán nhanh trong đoạn mắt không bao quát được.</p>`,
    },
    {
      h2: 'Đỗ xe, phần hè và lối đi bộ',
      html: `<p>Đỗ xe máy ở Hà Nội là một kỹ năng riêng: phần đỗ hợp lệ chiếm mép phải của nhiều tuyến phố, và tập quán đỗ của mỗi khu có quy tắc ngầm — đỗ cùng hướng dòng xe, xếp gọn theo hàng xe đang có, và để lối ra cho xe khác. Người mới nên đi chậm khi đến gần khu đỗ, nhìn theo cách xe xung quanh xếp (nhiều khu có người trông giữ xe theo giờ tự thu — hỏi giá trước khi giao xe, cầm phiếu hoặc chụp mão xe và biển số), và đỗ xong luôn kiểm tra khóa cổ - khóa từ đã ăn khớp.</p>
<p>Nhóm chỗ không nên đỗ: trước cổng các cơ quan - nhà cửa đang mở (chặn lối ra vào của người khác), trên miệng hè xuống của người bộ hành, che chắn biển báo - hộp điện - họng cống (họng cống là nơi thu dọn rác buổi sáng, xe đỗ lên miệng cống sáng sớm thường bị khuân đi), và các đoạn biển cấm dừng. Quy tắc chung khi không chắc: nhìn quanh xem có xe nào khác đỗ kiểu mình muốn đỗ không — một khu hoàn toàn không xe đỗ giữa phố đông thường có lý do.</p>
<p>Đỗ lâu trong khu dân phố nhỏ: hẻm Hà Nội là không gian chung của cư dân — đỗ chắn miệng hẻm hoặc giữa lối đi trong hẻm là cách nhanh nhất tạo xung đột (và rủi ro xe bị dịch đi). Đỗ sát tường mép hẻm theo hướng xe khác, và với khách thuê xe đi tham quan, ưu tiên các khu gửi xe trông giữ (bảo tàng, chợ, khu phố đi bộ đều có lối gửi) thay vì để xe ven đường ngoài khu không quen.</p>
<p>Khi đỗ mùa mưa hoặc gần đoạn hay ngập: chọn chỗ cao hơn mặt đường một chút, không đỗ sát miệng cống (nước dồn nhanh nhất ở đó khi mưa lớn), và nếu phải đỗ ngoài trời qua đêm mưa thì che phông gọn cho phần cụm điện - ổ khóa. Thói quen nhỏ sau khi đỗ: liếc quanh chỗ đỗ một lần trước khi rời xe — vị trí mình vừa đỗ có thật sự gọn và an toàn khi nhìn từ phía người đi đường, không chỉ từ phía mình đứng.</p>`,
    },
    {
      h2: 'Giờ cao điểm, mùa và chuẩn bị trước khi lên đường',
      html: `<p>Giờ cao điểm Hà Nội (khung sáng sớm và khung chiều muộn các ngày làm việc) biến cung đường quen thành chậm và dày đặc: xe máy ken cài tới mức các khe chỉ vừa một bánh, và phần lớn va chạm nhẹ (cọ xát, đổ xe khi chen) xảy ra đúng trong khung này. Chiến lược của người mới không phải là kỹ năng chén giỏi hơn mà là né: lên đường sớm hơn bình thường một quãng, chọn tuyến vòng ít đông, hoặc chấp nhận đi trong khung nhưng theo đúng nhịp chậm chung — cả ba đều tốt hơn cố thi đấu với luồng.</p>
<p>Mùa mưa (các tháng mùa hạ mưa lớn đột ngột): mặt đường ngập điểm trũng quen (đoạn trũng trước ngã tư, chân cầu vượt), hố hèm bị nước che — quy tắc mưa lớn: giảm tốc rõ, đi theo vệt bánh xe đi trước (xe trước đã qua được nghĩa là đủ sâu có thể ước), không đi vào phần nước không thấy đáy, và dừng chờ ở chỗ cao khi mưa quá lớn không nhìn rõ. Chuẩn bị đồ mưa gọn trong cốp quanh mùa; đi mưa về rửa xe sớm (bài chăm sóc xe mùa mưa đã nói chi tiết vì sao).</p>
<p>Mùa hanh khô và sáng sớm: bụi mù làm tầm nhìn giảm thấy được trong khoảng sáng sớm — bật đèn cả ban ngày (nhiều xe có chế độ đèn bật tự động, nếu không thì thói quen bật đèn mỗi chuyến), và giảm tốc ở các đoạn nhìn không hết. Cuối tuần và ngày lễ: dòng chảy khác ngày thường — vắng giờ hành chính nhưng dày đặc ở các khu vui chơi, chợ, quanh hồ — và thực tế vẫn cần cùng một bộ kỹ năng quan sát.</p>
<p>Chuẩn bị trước khi lên đường của người mới đi Hà Nội: kiểm tra xe nhanh (phanh, đèn, còi, áp lốp — bộ wiki đã có bài checklist đường dài dùng được cho chuyến phố), mang đủ giấy tờ theo luật (bài giấy tờ cần mang liệt kê cụ thể), đặt sẵn tuyến trên bản đồ và đọc qua phần rẽ - một chiều trước khi ngồi lên xe, và cất điện thoại — ở Hà Nội, mỗi giây mắt rời đường là một kịch bản không ai đọc giúp mình. Bốn việc đó cộng lại mất dưới năm phút, và là phần chênh lệch giữa một chuyến đi thấy được kiểm soát và một chuyến đi chỉ may mắn không có chuyện.</p>`,
    },
  ],
  checklist: [
    'Trước chuyến đi khu lạ: đặt tuyến trên bản đồ, đọc qua phần rẽ và các đoạn một chiều trước khi lên xe; coi biển báo trên đường là nguồn sự thật cuối cùng.',
    'Trên đường: quét gương - vai theo nhịp cố định, giữ tốc độ theo nhịp chung của luồng, không bứt ga - phanh gấp giữa dòng, và không luyện "lách khe".',
    'Gặp xe buýt vào trạm: đi chậm theo sau, không vượt sát cột buýt bên phải; vượt buýt phía trái thì vượt dứt khoát, không đi song song dài.',
    'Đỗ xe: đỗ cùng hướng dòng xe theo hàng có sẵn, không chặn cổng - hè xuống - miệng cống, khu không quen thì ưu tiên lối gửi trông giữ.',
    'Giờ cao điểm: lên đường sớm hơn hoặc chọn tuyến vòng; nếu phải đi trong khung, theo nhịp chậm chung thay vì chen vượt.',
    'Mùa mưa: có sẵn đồ mưa trong cốp, giảm tốc ở đoạn ngập, đi theo vệt xe trước khi không thấy đáy, và rửa xe sớm sau chuyến ướt.',
  ],
  warnings: [
    'Không quay đầu hoặc lùi dài giữa dòng xe và trên đường một chiều khi phát hiện đi ngược hướng — tìm ngã tư hoặc điểm quay an toàn kế tiếp; quay gấp giữa dòng là nguồn va chạm nghiêm trọng nhất của người mới.',
    'Không đi sát cạnh xe buýt và ô tô đang vào - ra trạm hoặc đang rẽ: toàn bộ điểm mù của tài xế xe to nằm ở các khoảnh khắc này — đi chậm theo sau hoặc vượt dứt khoát.',
    'Không đỗ xe che chắn lối ra vào, hè xuống của người bộ hành, miệng cống hoặc biển báo — ngoài xung đột với cư dân và người quản lý, các chỗ này còn là chỗ xe dễ bị dịch hoặc hư hại.',
    'Không dùng điện thoại hoặc cầm đồ vừa lái vừa dùng giữa dòng Hà Nội — mật độ xe không cho phép lấy mắt khỏi đường; cần dùng bản đồ thì dừng hẳn vào chỗ đỗ gọn rồi mới nhìn.',
  ],
  notes: [
    'Bài viết mang tính kinh nghiệm thực chiến về đi xe máy tại Hà Nội cho người mới (kỹ năng quan sát, dòng chảy giao thông, đỗ xe, mùa và khung giờ); các quy định giao thông, tuyến cấm theo khung giờ và cơ sở giữ xe thay đổi theo thời gian — luôn theo biển báo hiện trường và văn bản quy định mới nhất.',
    'Bài không thay thế hướng dẫn an toàn giao thông chính quy: người chưa có bằng lái cần học và thi theo quy định; các kỹ năng trong bài bổ trợ — không thay thế — việc tuân thủ luật giao thông đường bộ.',
  ],
  references: [
    'Hướng dẫn an toàn giao thông cho xe hai bánh trong đô thị — kỹ năng quan sát, giữ khoảng cách và xử lý điểm mù của xe to.',
    'Văn bản quy định về luật giao thông đường bộ — hệ thống biển báo, làn đường và quy tắc nhường đường áp dụng chung.',
    'Khuyến nghị an toàn của các cơ quan quản lý giao thông đô thị — đi trong giờ cao điểm, trời mưa hạn chế tầm nhìn và thói quen bật đèn ban ngày.',
  ],
  related: ['kinh-nghiem-thue-xe-may-ha-noi', 'giay-to-can-mang-khi-lai-xe-may', 'ky-thuat-phanh-khan-cap-xe-may', 'cho-nguoi-ngoi-sau-an-toan'],
};
