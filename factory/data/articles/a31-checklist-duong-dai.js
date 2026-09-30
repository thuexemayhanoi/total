// AI WIKI TOTAL — bài mở rộng cụm /docs/checklist/: checklist chuẩn bị chuyến đi đường dài bằng xe máy (slot S00031)
'use strict';

module.exports = {
  slug: 'checklist-chuyen-duong-dai-xe-may',
  title: 'Checklist chuẩn bị chuyến đi đường dài bằng xe máy',
  seoTitle: 'Checklist chuẩn bị chuyến đi đường dài bằng xe máy',
  metaDescription: 'Checklist chuẩn bị đi phượt đường dài bằng xe máy: kiểm tra máy, lốp, phanh, đồ bảo hộ, hành lý, lộ trình và những việc cần làm ngay trước ngày xuất phát.',
  summary: 'Chuyến đi đường dài bằng xe máy an toàn hay rủi ro thường được quyết định trước khi xe lăn bánh — trong đúng một buổi chuẩn bị. Bài viết này là checklist thực dụng theo trình tự thời gian: việc cần làm vài ngày trước chuyến đi (bảo dưỡng, phụ tùng dự phòng, giấy tờ), việc kiểm tra bộ máy và dung dịch, việc soát lốp và phanh, cách đóng hành lý và đồ bảo hộ, khâu chốt lộ trình với thời tiết và điểm nghỉ, và cuối cùng là lần rà nhanh buổi sáng xuất phát. Mỗi mục đều giải thích vì sao nó nằm trong danh sách, để người đi tự thêm bớt cho phù hợp chuyến đi của mình.',
  quickAnswer: 'Checklist đi đường dài nên rà theo ba mốc: trước chuyến một đến hai ngày — bảo dưỡng xe (nhớt, lốp, phanh, đèn, ắc quy), chuẩn bị giấy tờ, đồ bảo hộ, phụ tùng dự phòng và chốt lộ trình; buổi trước khi đi — đổ xăng, kiểm tra áp suất lốp, siết ốc, đóng gọn hành lý, sạc đầy thiết bị; buổi sáng xuất phát — một vòng rà nhanh năm phút: lốp, đèn, còi, phanh, gương. Chuyến đi nào cũng nên có điểm nghỉ định kỳ mỗi hai đến ba giờ để người và máy cùng hạ nhiệt.',
  keyPoints: [
    'Chuẩn bị đường dài là chuỗi việc theo mốc thời gian, không phải một danh sách làm một lần: bảo dưỡng trước chuyến, đóng hành lý buổi hôm trước, và vòng rà nhanh năm phút sáng xuất phát.',
    'Bộ máy cần vào tiệm trước chuyến: thay nhớt đúng kỳ, kiểm tra lọc gió, bugi, xích - căng xích, dầu phanh và đèn - còi - gương — hỏng giữa đường thường là thứ đã báo trước ở nhà.',
    'Lốp và phanh là hai mục an toàn số một: áp suất chuẩn, độ mòn còn dư cho quãng đường dài, và thử phanh kỹ trước khi chấp nhận chuyến đi xa.',
    'Hành lý gọn và buộc chắc là một mục an toàn, không phải thẩm mỹ: đồ lỏng lẻo làm mất thăng bằng, rơi rớt trên đường và mệt thêm cho người lái.',
    'Lộ trình nên có kế hoạch dự phòng: điểm đổ xăng, điểm nghỉ, đường thay thế khi tắc hoặc mưa, và thời gian dừng — đi đường dài là quản lý năng lượng, không phải đua điểm đến.',
    'Không để mọi việc dồn vào đêm hôm trước: chuẩn bị sớm cho phép sửa những thứ phát hiện trễ — hỏng hóc tìm thấy trước chuyến là chuyện nhỏ, phát hiện giữa đèo mới là chuyện lớn.',
  ],
  category: 'docs',
  hub: 'checklist',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['checklist đi phượt', 'chuẩn bị chuyến đi đường dài', 'bảo dưỡng trước chuyến đi', 'đồ bảo hộ xe máy', 'lộ trình đường dài'],
  keywords: ['checklist chuẩn bị đi phượt xe máy', 'đi đường dài bằng xe máy cần chuẩn bị gì', 'kiểm tra xe trước chuyến đi xa', 'đồ cần mang khi đi phượt xe máy', 'chuẩn bị xe máy đường dài', 'đi phượt an toàn xe máy'],
  sections: [
    {
      h2: 'Vì sao checklist phải rà theo mốc thời gian',
      html: `<p>Những chuyến đi đường dài hỏng kế hoạch thường không hỏng vì thiếu đồ — mà vì đồ và việc đến sai thời điểm. Bảo dưỡng phát hiện bugi hỏng là chuyện của buổi chiều trong tiệm; phát hiện bugi hỏng ở giữa huyện là chuyện của cả một buổi chiều kẹt giữa đường. Checklist theo mốc thời gian tồn tại để mọi phát hiện đều rơi vào mốc còn kịp xử lý.</p>
<p>Ba mốc gợi ý cho đa số chuyến đi: mốc một đến ba ngày trước — bảo dưỡng xe, chuẩn bị giấy tờ và đồ bảo hộ, chốt lộ trình, mua phụ tùng dự phòng; mốc buổi trước khi đi — đổ xăng, kiểm tra áp suất lốp, siết ốc, đóng hành lý, sạc thiết bị; và mốc buổi sáng — vòng rà nhanh năm phút trước khi lăn bánh. Mỗi mốc có nhiệm vụ riêng: mốc đầu là xử lý cái lớn, mốc giữa là chốt cái chi tiết, mốc cuối là xác nhận cái đã chắc.</p>
<p>Nguyên tắc sắp xếp trong mỗi mốc: việc khó lùi lên trước, việc dễ hạ xuống sau. Thay nhớt, thay má phanh là việc phụ thuộc tiệm — lên mốc đầu; đổ xăng là việc tự làm — ở mốc giữa; kiểm tra hành lý buộc chắc là việc một phút — giữ ở mốc cuối. Ai từng sửa checklist ngược kiểu này đều hiểu cái giá: đi tìm tiệm nhớt mở cửa sáng Chủ nhật ở vùng xa lạ là trải nghiệm đắt.</p>
<p>Checklist còn có một vai trò ít ai nói: nó giữ chuyến đi vui. Người lo lắng trên đường là người không chắc xe mình đã sẵn sàng; người rà xong checklist thì đầu óc rảnh cho cảnh vật, cho bạn đồng hành và cho chính quãng đường. Chuẩn bị kỹ không phải lo xa — nó chính là thứ mua được sự thoải mái cho cả chuyến.</p>`,
    },
    {
      h2: 'Mốc trước chuyến: bộ máy, dung dịch và phụ tùng dự phòng',
      html: `<p>Bộ máy cần vào tiệm trước chuyến với danh sách rõ ràng — mang xe tới và nói "cho kiểm tra đi xa" là cách nhanh nhất để nhận về một hóa đơn không trúng mục nào. Danh sách nên mang theo tính chất chuyến đi: nhớt máy và lọc gió (nhất là khi gần đến kỳ), bugi (đề phòng giữa đường không nổ là kịch bản kinh điển của xe để lâu), xích và độ căng xích, sạch bẩn xi-lanh phanh, dầu phanh với phanh đĩa, ắc quy và hệ thống điện (đèn, còi, vè), cùng một lượt kiểm tra tổng thể của thợ tin dùng.</p>
<p>Nhớt là ví dụ cho cả nguyên tắc: nếu kỳ thay nhớt rơi vào khoảng giữa chuyến, nên thay trước khi đi — nhớt mới cho cả chuyến luôn rẻ hơn rủi ro máy chạy quá hạn trên đường dài. Tương tự với má phanh còn mỏng, lốp đã gần mòn: ranh giới "còn dùng được trong phố" và "còn dùng được trên chuyến ba trăm cây" là hai ranh giới khác nhau — thứ vẫn an toàn quanh quảng nhà có thể là rủi ro thật trên quốc lộ.</p>
<p>Phụ tùng dự phòng nên mang theo tính mạng đường xá: bộ đồ nghề cơ bản (cờ lê, tuýp, mỏ lết vừa xe), tuýp vá và bơm (hoặc bộ vá nhanh dạng ống xi), bugi dự phòng, cầu chì, và vài ốc thường gặp của cốp - gương. Người đi nhóm nên phân chia đồ chung: một bộ bơm cho nhóm thay vì mỗi người một bộ — gánh nặng chung nhẹ hơn.</p>
<p>Và một mục hay bị cười ra nhưng giữ giá trị: viết lại biển số và model lốp đang dùng, mang theo hoặc chụp vào điện thoại. Giữa đường cần mua tuýp hay nhớt đúng loại, không ai nhớ nổi mã lốp của xe mình bằng một tấm ảnh — và tiệm tỉnh nhỏ không phải lúc nào cũng có thợ rành từng dòng xe.</p>`,
    },
    {
      h2: 'Mốc trước chuyến: lốp, phanh và các điểm chạm mặt đường',
      html: `<p>Lốp trước chuyến đi xa cần rà ba thứ: độ mòn, áp suất và tình trạng hư hại. Độ mòn nhìn rãnh gai — rãnh cạn là dấu đã tới hạn; áp suất đo bằng đồng hồ thay vì mắt thường, và bơm đúng con số khuyến nghị ghi trên nhãn xe hoặc sổ tay (nhiều trạm xăng có máy bơm kèm đồng hồ); hư hại soát vết nứt do già hóa ở hông lốp, vết rạch, và dị vật cắm sâu (đinh rẹt dài là cái thường chỉ phát hiện khi đang xì giữa đường). Lốp xe đua hay lốp đã quá tuổi dù còn gai cũng không nên tin cậy cho chuyến dài.</p>
<p>Phanh thử theo trình tự nơi trống vắng: chạy tốc độ vừa, bóp cả hai phanh dừng gọn — nghe, cảm và nhìn. Tay nắm không mềm bất thường, xe không ghịch lệch, không tiếng rít, không mùi khét sau vài lần thử. Nếu chuyến đi có đèo dốc dài, hãy thử thêm một lần phanh liên tục từ tốc độ cao hơn ở đoạn quen — cảm giác tay phanh lúc nóng là thông tin quan trọng nhất trước chuyến đi có đèo.</p>
<p>Đèn và còi với gương là nhóm điểm chạm thế giới bên ngoài: đèn pha chiếu xa - chiếu gần chuyển đúng, đèn hậu và đèn phanh sáng khi bóp (nhờ người đứng sau xác nhận), còi rè rõ, hai gương chỉnh đúng tư thế ngồi lái thật — không phải tư thế dựng xe. Trên đường dài, đèn phanh hoạt động là thứ bách hóa xe tải phía sau nhìn thấy bạn trước — giá trị của nó không cần nói thêm.</p>
<p>Áp suất lốp nên đo lại buổi sáng trước khi đi, khi lốp nguội — con số lúc đó mới là con số chuẩn. Và một thói quen đáng hình thành từ chuyến này: nhìn nhanh hai bánh mỗi lần khởi hành sau mỗi điểm nghỉ dọc đường — dị vật cắm mới, áp suất xì dần thường hiện rõ sau mỗi lần dừng xe, đúng lúc còn kịp xử lý.</p>`,
    },
    {
      h2: 'Đồ bảo hộ và hành lý: gọn, chắc, cân bằng',
      html: `<p>Đồ bảo hộ tối thiểu cho chuyến dài: mũ bảo hiểm đạt chuẩn còn độ ôm đúng (mũ đã nứt, lót xẹp sau năm năm hoặc từng hứng cú bể thì là mũ mới — quy tắc một cú ngã một thay mũ), giày hoặc dép có quai bao che mũi chân, găng bảo vệ (buộc chặt cổ tay), và lớp áo phủ tay chân — tốc độ xa trạm xăng trên quốc lộ làm thành những vết xát nghiêm trọng từ những va chạm tưởng nhẹ. Chuyến đêm hoặc trời mát thêm lớp chống gió; quần áo nên xếp theo kiểu lớp để bóc dần khi trời nóng lên.</p>
<p>Hành lý đóng theo nguyên tắc ba thứ: nặng thấp - gần trọng tâm, mềm lót ngoài cùng, và mọi thứ buộc chắc vào giá. Ba lô đeo trên người chỉ nên chứa vật nhẹ thường lấy (đồ giấy tờ, nước, máy ảnh) — nặng trên vai vài giờ là mỏi cổ vai mà còn nguy hiểm khi phải phanh gấp. Túi hành lý nên cân hai bên, kiểm tra sau mỗi điểm nghỉ — dây buộc giãn dần theo số cây số là chuyện của vật lý, không phải sự cẩu thả.</p>
<p>Danh mục đồ nên mang nhưng hay bị quên: áo mưa (không phải chỉ để mặc — còn che được hành lý), giấy tờ tùy thân và giấy tờ xe (giấy đăng ký, giấy phép lái xe, bảo hiểm) trong túi chống nước, tiền lẻ cho trạm dọc đường, đèn pin nhỏ, sạc dự phòng, thuốc cá nhân và một ít thuốc cơ bản (giảm đau, sát khuẩn, băng cá nhân), nước đủ giữa hai điểm nghỉ. Đồ đi nhóm thì phân công mang chung cho gọn.</p>
<p>Cân bằng xe cũng là mục an toàn: chất lên xe xong, ngồi lên thử và lắt nhẹ qua lại — xe chở lệch một bên sẽ kéo lái lệch dần trên quãng dài, mỏi tay và mất chính xác ở chính những lúc mệt. Buộc hành lý xong, khuỵu xuống nhìn một vòng xe: không dây đè lốp, không dây chạm pô nóng, không đồ rơi ra khi nhún thử — năm phút này quyết định cả chiều yên tay lái phía trước.</p>`,
    },
    {
      h2: 'Lộ trình, thời tiết và quản lý năng lượng',
      html: `<p>Lộ trình đường dài nên được viết ra — không phải vì cần cứng nhắc theo nó, mà vì cần biết mình đang ở đâu trong khối quãng đường. Mỗi khúc dài cần biết trước: trạm xăng gần nhất ở đâu (vùng eo người ta đổ xăng theo chủ động chứ không theo đèn báo), điểm ăn nghỉ nào ổn, và đoạn đường nào cần đi ban ngày (đèo, đường gập ghềnh, đoạn hay sạt lở mùa mưa). Câu hỏi "còn bao xa tới chỗ nghỉ" không đáng trả lời bằng phỏng đoán lúc trời sập tối.</p>
<p>Thời tiết rà hai lần: lần trước chuyến để chuẩn bị đồ (áo mưa, túi chống nước), và lần buổi sáng để quyết định giờ đi. Mưa lớn hoặc sương mù dày trên đèo là lý do hợp lệ để đổi khung giờ đi — lộ trình tốt là lộ trình có phương án B, và người đi giỏi là người dừng đúng lúc chứ không phải người bám kế hoạch tới cùng.</p>
<p>Quản lý thể lực người lái là mục ít nằm trong checklist mà quyết định nhiều nhất: mệt là giảm tốc, buồn ngủ là dừng — đây là hai quy tắc không có ngoại lệ trên đường dài. Nhóm người đi càng cần quy ước trước: tốc độ theo người chậm nhất, điểm nghỉ cho cả nhóm, tín hiệu dừng khẩn. Đi rời đoàn vì "của mình khỏe xe" là cách tự loại bỏ đúng phần an toàn của chuyến đi.</p>
<p>Về máy cũng vậy: dừng nghỉ mỗi hai đến ba giờ không chỉ cho người — máy chạy liên tục ở tốc độ cao cũng cần phút hạ nhiệt, và chính những lần dừng đó là lúc rà nhanh bánh xì chưa, xích giãn chưa, hành lý buộc chắc chưa. Nghỉ ngừng kết hợp kiểm tra: một chén nước ở trạm dừng cộng hai phút nhìn quanh xe là bảo dưỡng rẻ nhất trong cả chuyến.</p>`,
    },
    {
      h2: 'Buổi sáng xuất phát: vòng rà nhanh năm phút',
      html: `<p>Chuỗi việc buổi sáng không phải làm lại mọi thứ — chỉ xác nhận lại những gì đã chắc: lốp nhìn hai bánh (soát dị vật, sờ cảm giác áp suất nếu quen), đèn - còi thử một nhịp, phanh bóp thử tại chỗ khi đẩy xe ra (phanh trước và phanh sau đều nắm trước khi lăn), gương chỉnh lại theo tư thế ngồi thật, hành lý kéo thử dây, giấy tờ nằm đúng túi, và mũ đội thoải mái chuẩn tư thế.</p>
<p>Những điều không thuộc xe nhưng thuộc buổi sáng: ăn nhẹ trước khi đi (đi đường dài bụng đói là tự rút ngắn khoảng cách đến lần dừng đầu), nước đặt đúng vị trí lấy được khi dừng, điện thoại nhắn cho người thân lịch trình và giờ tới dự kiến — một tin nhắn hai phút đáng giá hơn mọi việc tìm kiếm khi mất liên lạc vùng sóng yếu.</p>
<p>Km đầu tiên của chuyến đi nên chạy chậm hơn tốc độ dự kiến: đây là lúc nghe tiếng xe (xế mới sửa có tiếng lạ phát hiện ngay ở km đầu), cảm phanh thật, và làm quen hành lý cồng kềnh nếu có. Ai đi nhóm thì km đầu là lúc ổn định hàng: khoảng cách đều nhau, tốc độ thống nhất — chỉnh ngay từ đầu đỡ chỉnh dọc đường.</p>
<p>Cuối cùng — và là điều đáng in đậm nhất của cả bài: checklist không thay thế phán đoán lúc đúng lúc dừng. Trời đổ mưa xối, người mê man buồn ngủ, xe có tiếng lạ không rõ nguồn — lúc đó thứ duy nhất đúng là dừng, bất kể đã xanh checklist bao nhiêu mục. Checklist chuẩn bị cho chuyến đi; phán đoán giữ cho chuyến đi trọn vẹn. Chuẩn bị kỹ để tự tin, và tự tin đó phải luôn đi cùng sự biết dừng đúng lúc.</p>`,
    },
  ],
  checklist: [
    'Một đến ba ngày trước: bảo dưỡng xe (nhớt, lọc gió, bugi, xích, phanh, đèn - còi, ắc quy), thay hoặc sửa những mục chớm hỏng thay vì chấp nhận "còn chạy được".',
    'Trước chuyến: kiểm tra lốp ba mục — độ mòn còn dư, áp suất theo khuyến nghị, và soát vết nứt - dị vật trên hông lốp; thử phanh ở đoạn trống: chắc, không lệch, không rít.',
    'Chuẩn bị giấy tờ đầy đủ trong túi chống nước: giấy tờ tùy thân, giấy phép lái xe, đăng ký xe, bảo hiểm; chụp ảnh lưu mã lốp và model xe.',
    'Đóng hành lý theo nguyên tắc nặng thấp gần trọng tâm, buộc chắc, cân hai bên; giày - găng - mũ đạt chuẩn và lớp áo đủ độ che phủ.',
    'Chốt lộ trình có phương án B: trạm xăng, điểm nghỉ, đoạn cần đi ban ngày; theo dõi thời tiết trước chuyến và buổi sáng; quy ước nhóm nếu đi đoàn.',
    'Buổi sáng: vòng rà năm phút lốp - đèn - còi - phanh - gương - hành lý - giấy tờ; nhắn lịch trình cho người thân; chạy chậm km đầu và nghỉ mỗi hai đến ba giờ.',
  ],
  warnings: [
    'Không xuất phát khi phát hiện dấu hiệu phanh bất thường hoặc lốp cạn rãnh với lý do "tới nơi đó rồi tính" — đường dài không có tiệm sửa tại đoạn giữa, mọi hỏng đều đắt hơn ở xa nhà.',
    'Không chạy tiếp khi buồn ngủ hoặc mệt nặng — đạp ga bám giờ giấc khi mắt đã nheo là đánh cược bằng cả chuyến; dừng nghỉ là phần bắt buộc của lộ trình, không phải phần chọn thêm.',
    'Không buộc hành lý bằng dây mỏng hoặc để hành lý đè lốp - chạm pô — một túi rơi xuống đường lúc đang nhanh là tai nạn cho cả mình lẫn người phía sau.',
    'Không coi đèn báo xăng là đồng hồ cho vùng ít trạm — chủ động nạp đầy và canh trạm xăng kế tiếp theo lộ trình, vùng thưa trạm chỉ cho phép chạy khi còn dư trên nửa bình.',
  ],
  notes: [
    'Bài viết là checklist kiến thức chung cho các chuyến đi đường dài bằng xe máy trong điều kiện đường và thời tiết phổ biến tại Việt Nam; mỗi chuyến đi cụ thể (phượt đèo, đi nhóm đông, mùa mưa bão) cần bổ sung các mục riêng phù hợp.',
    'Không có mốc thời gian, con số áp suất hay phụ tùng nào trong bài là thay thế khuyến nghị của nhà sản xuất — luôn ưu tiên sổ tay hướng dẫn của dòng xe đang dùng và ý kiến thợ tin cậy.',
  ],
  references: [
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất xe máy — áp suất lốp khuyến nghị, chu kỳ bảo dưỡng và tải trọng cho phép của từng dòng xe.',
    'Hướng dẫn an toàn khi đi đường dài và di chuyển đoàn trên xe máy — nguyên tắc nghỉ ngơi, giữ khoảng cách và xử lý thời tiết xấu.',
    'Khuyến nghị về mũ bảo hiểm đạt chuẩn và trang bị bảo hộ khi di chuyển trên xe hai bánh — cách kiểm tra độ ôm, tuổi mũ và tiêu chí thay mới.',
  ],
  related: ['thue-xe-may-di-phuot-chuan-bi-va-luu-y', 'chay-ra-xe-may-dung-cach', 'lop-xe-may-bi-dame-giua-duong'],
};
