// AI WIKI TOTAL — S01106 (topic V2 T001087); kiểm tra theo nhóm nguồn điện, bộ ra lệnh và mô tơ, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'quat-ket-nuoc-xe-tay-ga-khong-quay',
  title: 'Quạt két nước xe tay ga không quay: kiểm tra theo thứ tự cảm biến, cầu chì và mô tơ',
  seoTitle: 'Quạt két nước xe tay ga không quay: nghe, nhìn và kiểm tra từng bước',
  metaDescription: 'Xe tay ga nóng máy khi kẹt xe, nghi quạt két nước không quay? Cách nghe và nhìn quạt an toàn, rồi kiểm tra theo thứ tự cầu chì, giắc cắm, cảm biến, rơ le, mô tơ.',
  summary: 'Bài hướng dẫn người dùng xe tay ga làm mát bằng dung dịch cách tìm nguyên nhân khi nghi quạt két nước không quay lúc máy nóng, nhất là khi kẹt xe. Nội dung giải thích vai trò của quạt, cách nghe và nhìn quạt an toàn, rồi đi qua ba nhóm nguyên nhân từ dễ kiểm tới khó: nguồn điện với cầu chì và giắc cắm, cảm biến nhiệt cùng rơ le ra lệnh, và mô tơ quạt. Bài cũng nêu dấu hiệu quá nhiệt, lúc phải dừng đi và phần việc nên giao cho thợ.',
  quickAnswer: 'Xe tay ga nóng máy khi kẹt xe mà quạt két nước không quay thường do lỗi ở một trong ba nhóm. Hãy cho máy nóng lên ở nơi thoáng, nghe và nhìn vùng két từ xa, rồi kiểm tra theo thứ tự: cầu chì và giắc cắm, cảm biến nhiệt cùng rơ le ra lệnh, cuối cùng là mô tơ quạt. Đèn báo nhiệt độ sáng thì bóp phanh, dừng xe an toàn, tắt máy chờ nguội và không chạy tiếp.',
  keyPoints: [
    'Quạt két nước thay luồng gió lúc xe đi chậm hoặc đứng yên, nên lỗi quạt thường chỉ lộ ra khi kẹt xe, đứng đèn đỏ lâu hay leo dốc chậm.',
    'Quạt không bật ngay sau khi nổ máy mà chỉ chạy khi nhiệt độ dung dịch vượt ngưỡng; im lặng lúc máy còn nguội hay mới ấm chưa phải là lỗi.',
    'Kiểm tra từ dễ tới khó: cầu chì và giắc cắm trước, rồi cảm biến nhiệt cùng rơ le ra lệnh, sau cùng mới tới mô tơ quạt.',
    'Quạt có thể tự quay bất ngờ khi máy còn nóng: giữ tay, tóc, quần áo xa cánh quạt và không đưa vật gì vào để thử.',
    'Đèn báo nhiệt độ sáng hoặc kim nhiệt vào vùng nóng là lúc bóp phanh, dừng xe an toàn, tắt máy, chờ nguội; không mở nắp két hay nắp bình phụ khi máy còn nóng.'
  ],
  category: 'garage',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['quạt két nước', 'xe tay ga làm mát bằng dung dịch', 'cảm biến nhiệt độ dung dịch', 'rơ le quạt', 'cầu chì và giắc cắm', 'mô tơ quạt'],
  keywords: ['quạt két nước xe tay ga không quay', 'xe tay ga nóng máy khi kẹt xe', 'quạt làm mát xe ga', 'kiểm tra quạt két nước xe ga'],
  sections: [
    P('Vì sao quạt két nước quan trọng với xe tay ga làm mát bằng dung dịch', [
      'Để xử lý nghi vấn quạt két nước không quay, hãy cho máy nóng lên ở nơi thoáng, nghe và nhìn vùng két xem quạt có vào việc không, rồi lần theo ba nhóm từ dễ tới khó: nguồn điện, bộ ra lệnh và mô tơ. Lý do cần quạt nằm ở vòng tuần hoàn của hệ làm mát: bơm đẩy dung dịch qua thân máy lấy nhiệt, đưa ra két, rồi không khí lùa qua các lá két mang nhiệt đi. Chạy nhanh thì gió tự lùa qua két lo phần này; đứng đèn đỏ, nhích từng đoạn hay leo dốc chậm thì gió gần như biến mất, quạt phải thay gió. Vì vậy quạt hỏng thường lộ ra bằng một kiểu quen thuộc: xe tay ga nóng máy khi kẹt xe, đi thoáng lại mát.',
      'Ở phần lớn xe tay ga, quạt làm mát là quạt điện gắn sát két, thường khuất sau ốp thân nên đứng cạnh xe bạn không nhìn thấy nó. Quạt không chạy liên tục: một bộ phận ra lệnh theo nhiệt độ dung dịch sẽ cấp điện cho mô tơ khi máy vượt ngưỡng làm việc, rồi ngắt khi nhiệt độ hạ xuống. Cơ chế tự bật tự tắt này khiến lỗi quạt rất dễ lọt qua: máy vẫn nổ êm, mức dung dịch vẫn đủ, đồng hồ không có gì lạ cho tới đúng lúc cần quạt. Vị trí quạt, kiểu bộ ra lệnh và hộp cầu chì đều khác nhau tùy dòng xe, nên sách hướng dẫn của xe bạn là nơi tra cứu chính xác nhất.',
      'Quạt chỉ là một mắt xích của hệ làm mát. Nhiệt độ leo lên lúc đứng yên còn có thể đến từ dung dịch thiếu, két bám bẩn, bơm yếu hoặc nhớt đã cũ; phần mức nước làm mát và vệ sinh két đã có trong bài về nước làm mát xe máy, còn bài về xe máy nóng máy bàn các nguyên nhân chung như tải nặng và thói quen chạy. Xem quạt trước có lợi vì loại trừ rất nhanh: quạt bật đúng lúc và quay đều thì bạn có thể gạt nó sang bên để tìm ở chỗ khác. Thứ tự ba nhóm đi từ việc tự nhìn được, rẻ và an toàn, tới việc cần dụng cụ đo và thợ: cầu chì cùng giắc cắm trước, cảm biến cùng rơ le sau, mô tơ cuối cùng.'
    ]),
    P('Quan sát quạt khi máy nóng: lúc nào quạt chạy, nghe và nhìn gì', [
      'Hãy đặt xe ở chỗ thoáng, nền bằng phẳng, tốt nhất là ngoài trời hoặc nơi có gió lùa, vì khí thải của máy đang nổ rất độc trong không gian kín. Dựng xe chắc chắn theo hướng dẫn của nhà sản xuất và dọn mọi vật dễ cháy ra xa ống xả. Tóc dài, khăn, quai túi, dây áo mưa nên gom gọn và để cách xa vùng két. Quạt có thể khởi động bất ngờ ngay lúc bạn đứng cạnh, kể cả khi trước đó nó đã im lặng khá lâu. Vì vậy hãy coi vùng quanh két là nơi có chi tiết chuyển động bất kỳ lúc nào máy chưa nguội.',
      'Muốn thấy quạt làm việc, phải cho máy đạt nhiệt độ làm việc: chạy một đoạn đường rồi dừng lại cho máy nổ cầm chừng; ngày nóng thì để máy nổ một lúc trong bóng râm, chỗ đủ yên tĩnh để nghe. Quạt không bật ngay sau khi nổ máy; nó chỉ vào việc khi nhiệt độ dung dịch vượt ngưỡng đặt sẵn, nên im lặng lúc máy còn nguội hay mới ấm là bình thường, chưa nói lên lỗi gì. Hãy theo dõi kim nhiệt độ hoặc đèn báo nếu có, đừng để kim chạm vùng nóng. Quạt khỏe thường cho tiếng vù đều tăng lên rồi giữ ổn định, kèm luồng khí ấm thoát ra ở khe thoáng của ốp thân. Sau một lúc nó ngắt rồi có thể bật lại, đó là chu kỳ bình thường.',
      'Đối chiếu những gì nghe và thấy với ba tình huống sau sẽ khoanh vùng được lỗi. Quạt vào việc đúng lúc, quay đều, máy giữ nhiệt ổn thì thủ phạm nóng máy nằm ở chỗ khác. Kim nhiệt độ leo cao hoặc đèn báo sáng mà vùng két hoàn toàn im lặng nghĩa là mạch quạt đang đứt ở đâu đó giữa nguồn điện, bộ ra lệnh và mô tơ. Quạt có quay nhưng yếu, rít, lạch cạch hoặc kèm mùi khét thì nghi vấn dồn về mô tơ. Đừng đưa tay, que hay vật gì vào gần cánh quạt để thử, đừng chạm vào két, ống nước hay ống xả đang nóng, không mở nắp két hay nắp bình phụ; nhiệt độ sắp chạm vùng nóng mà quạt vẫn im thì tắt máy chờ nguội, đừng cố đợi quạt.'
    ]),
    P('Nguồn điện cấp cho quạt: cầu chì và giắc cắm', [
      'Mạch cấp điện cho mô tơ quạt đi qua một cầu chì, riêng hoặc dùng chung với nhóm phụ tải khác tùy xe, rồi qua ít nhất một giắc cắm gần két. Đây là nhóm dễ kiểm nhất và ít tốn kém nhất, nên đứng đầu trong thứ tự kiểm tra. Sách hướng dẫn thường có sơ đồ hộp cầu chì kèm ghi chú mỗi cầu chì bảo vệ mạch nào; vai trò của cầu chì, giắc nối và điểm mát nói chung đã có trong bài về mạch điện xe. Hộp cầu chì thường nằm dưới yên, sau ốp trước hoặc gần ắc quy; hộp nào phải tháo nhiều ốp mới tới thì hãy nhờ thợ. Cầu chì riêng của quạt đứt thì máy vẫn nổ êm, đó là lý do lỗi nằm im cho tới lúc kẹt xe.',
      'Xoay khóa điện về vị trí tắt, chờ máy nguội rồi mới mở hộp. Rút đúng cầu chì theo sơ đồ, bằng kẹp nhựa thường có sẵn trong hộp, rồi soi dưới ánh sáng tốt: sợi kim loại bên trong đứt ngang hoặc ám đen là cầu chì đã chảy. Thay bằng cầu chì cùng loại, cùng định mức ghi trên nắp hộp hoặc trong sách; tuyệt đối không dùng dây, giấy bạc hay cầu chì lớn hơn cho chắc ăn, vì mất lớp bảo vệ là dây điện có thể cháy. Cầu chì thay xong mà lại đứt sớm nghĩa là mạch đang quá tải hoặc chập, chẳng hạn mô tơ bị kẹt hay vỏ dây trầy chạm khung. Đến đó hãy dừng tự xử lý và đưa xe cho thợ.',
      'Giắc cắm của quạt nằm sát két và thân máy nên chịu nóng, rung và nước văng liên tục. Chân giắc oxy hóa, vỏ nhựa chảy vì tiếp xúc kém sinh nhiệt, dây trầy do cọ vào khung đều khiến quạt lúc chạy lúc không; quạt chập chờn theo ổ gà, sau mưa, sau khi rửa xe áp lực cao hay tháo ốp bảo dưỡng thì nên nghi nhóm này trước. Giắc nào lộ ra thì hãy kiểm bằng mắt lúc máy nguội: khóa giắc còn cài chặt không, nhựa có đổi màu hay mùi cháy không, dây có trầy hay bị cắn dở không. Đừng nối tắt hai chân giắc để ép quạt quay, vì dòng điện đi sai đường dễ làm cháy dây và hỏng bộ điều khiển. Đo điện áp và điểm mát ở giắc là việc của thợ.'
    ]),
    P('Cảm biến nhiệt và rơ le: nơi ra lệnh cho quạt quay', [
      'Cầu chì và giắc cắm đều ổn mà quạt vẫn im thì nghi vấn chuyển sang phần ra lệnh. Chuỗi này thường đi như sau: cảm biến hoặc công tắc nhiệt đo nhiệt độ dung dịch, bộ điều khiển hoặc chính công tắc quyết định bật quạt, rồi một rơ le, tức công tắc điện từ nhỏ, đóng mạch cho dòng lớn chạy tới mô tơ. Tùy xe, vài khâu có thể gộp lại hoặc không có. Xe phun xăng điện tử thường để bộ điều khiển đọc cảm biến nhiệt rồi ra lệnh, còn nhiều xe khác dùng công tắc nhiệt gắn trên két hoặc đường nước. Tài liệu kỹ thuật của đúng dòng xe mới cho biết xe bạn thuộc kiểu nào.',
      'Cảm biến báo thấp hơn nhiệt độ thật, công tắc nhiệt không đóng hay rơ le mòn tiếp điểm đều cho cùng một kết quả: mô tơ không nhận được lệnh. Manh mối nằm ở thời điểm quạt chạy. Quạt bật quá trễ, chỉ khi máy đã rất nóng, thường trỏ về cảm biến hoặc công tắc nhiệt lệch ngưỡng; quạt lúc chạy lúc không giữa các ngày có thể do bộ ra lệnh, nhưng cũng có thể do giắc cắm. Ở xe phun xăng điện tử, cảm biến nhiệt còn góp tín hiệu để chỉnh lượng xăng; quạt im mà xe lại khó nổ khi máy nóng, hao xăng hơn hoặc có đèn báo lỗi động cơ thì khả năng do cảm biến cao hơn, bài về xe phun xăng khó nổ khi máy đã nóng bàn kỹ phần này.',
      'Ở một số xe, cùng một cảm biến vừa ra lệnh cho quạt vừa đưa tín hiệu lên đồng hồ, nên khi nó báo thấp hơn thực tế thì cả quạt lẫn đèn báo có thể cùng im trong lúc máy thật sự nóng. Vì thế đừng chỉ tin vào kim hay đèn: mùi khét, máy yếu đi, tiếng máy khác thường cũng là tín hiệu để dừng. Cảm biến, công tắc nhiệt và rơ le không kiểm được bằng mắt, và cũng không nên thử bằng cách rút giắc hay nối tắt để ép quạt quay. Thợ tách lỗi bằng cách cấp điện trực tiếp, có kiểm soát, ngay tại mô tơ: quạt quay tốt thì lỗi nằm ở nguồn hoặc phần ra lệnh, quạt vẫn đứng yên thì lỗi nằm ở chính mô tơ.'
    ]),
    P('Mô tơ quạt hỏng: dấu hiệu nhận biết và hướng xử lý', [
      'Mô tơ quạt là một động cơ điện nhỏ làm việc ngay cạnh nguồn nhiệt, nên ổ trục mòn, các tiếp điểm bên trong hao, bụi và hơi ẩm đều làm nó yếu dần. Dấu hiệu thường xuất hiện dần: tiếng vù vốn đều bỗng khàn, rít hoặc lạch cạch; cánh quay uể oải rồi mới lấy đà; luồng khí thoát ra yếu hơn trước; mùi khét của nhựa hay dây cuốn nóng lan từ vùng két. Giai đoạn cuối là mô tơ đứng hẳn, đôi khi chỉ quay lại sau một cú rung của xe. Cầu chì mạch quạt đứt lặp lại cũng gợi ý mô tơ đang kẹt hoặc hút dòng quá mức, vì mô tơ bị cản sẽ kéo dòng điện lớn hơn bình thường.',
      'Mô tơ đã kẹt hay mòn thì không có mẹo tại chỗ nào làm nó bền trở lại. Việc nên làm là đưa xe tới thợ để thử mô tơ bằng nguồn điện trực tiếp, rồi thay mô tơ hoặc cả cụm quạt đúng với dòng xe. Sau khi thay, nên nhờ thợ kiểm tra thêm giắc cắm, cánh quạt và đường cấp điện, vì giắc lỏng hay dây xuống cấp có thể làm mô tơ mới hỏng lại sớm; xe từng nóng máy nhiều lần thì xem lại cả dung dịch, ống dẫn và két. Bạn có thể giúp thợ bằng ghi chú về lúc quạt từng chạy, mức kim nhiệt độ khi quạt bật và các triệu chứng đi kèm. Đừng tự tháo ốp để thò tay vào, xoay cánh bằng tay hay xịt dầu mỡ, chất tẩy vào mô tơ.',
      'Ranh giới an toàn cần nhớ rõ. Đèn báo nhiệt độ sáng, kim nhiệt độ vào vùng nóng, máy bỗng yếu hẳn, có mùi khét, hơi nước hay tiếng xì từ vùng két là lúc phải dừng đi tiếp: bóp phanh, dừng xe an toàn rồi tắt máy bằng công tắc tắt máy hoặc đưa khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Sau đó dựng xe chắc, đứng xa luồng hơi, chờ máy nguội hẳn và tuyệt đối không mở nắp két hay nắp bình phụ lúc còn nóng. Đã biết quạt hỏng thì chỉ nên chạy quãng ngắn trên đường thoáng tới thợ, tránh kẹt xe, đứng đèn lâu và chở nặng; quãng đường dài hoặc phải qua đoạn đông thì nên gọi cứu hộ.'
    ])
  ],
  checklist: [
    'Đặt xe ngoài trời hoặc nơi thoáng, dựng chắc, gom tóc, khăn, quai túi ra xa vùng két trước khi cho máy nổ.',
    'Cho máy đạt nhiệt độ làm việc rồi nghe tiếng vù từ vùng két, để ý luồng khí ấm thoát ra ở khe ốp, từ khoảng cách an toàn.',
    'Ghi lại lúc quạt bật, mức kim nhiệt độ hoặc đèn báo khi đó, và quạt chạy đều hay yếu, ì, kêu lạ.',
    'Xem cầu chì theo sơ đồ trong sách hướng dẫn; chỉ thay đúng loại, đúng định mức, và dừng tự xử lý nếu cầu chì mới lại đứt.',
    'Soi giắc cắm của quạt bằng mắt lúc máy nguội: khóa cài chắc, nhựa không đổi màu, không mùi cháy, dây không trầy; phần đo điện giao cho thợ.'
  ],
  steps: [
    { title: 'Quan sát quạt khi máy nóng', detail: 'Cho máy nổ ở nơi thoáng tới lúc đạt nhiệt độ làm việc, nghe và nhìn vùng két từ xa, ghi lại quạt có bật không, bật lúc nào và chạy ra sao.' },
    { title: 'Kiểm tra nguồn điện', detail: 'Tắt máy và khóa điện, xem cầu chì liên quan theo sơ đồ, thay đúng loại nếu đứt, rồi nhìn giắc quạt xem có lỏng, đổi màu, ẩm hay dây trầy không.' },
    { title: 'Xét cảm biến nhiệt và rơ le', detail: 'Nguồn ổn mà quạt vẫn im hoặc bật trễ thì ghi lại triệu chứng đi kèm như khó nổ lúc nóng hay đèn báo lỗi, rồi nhờ thợ đo cảm biến và kiểm rơ le.' },
    { title: 'Nhờ thợ thử mô tơ', detail: 'Để thợ cấp điện trực tiếp, tách lỗi mô tơ khỏi lỗi điều khiển; trước khi sửa xong, tránh kẹt xe, đứng đèn lâu và chở nặng.' }
  ],
  warnings: [
    'Không đưa tay, que hay vật gì vào gần cánh quạt, và giữ tóc, khăn, quần áo thật xa vùng két: quạt có thể quay bất ngờ khi máy còn nóng.',
    'Không mở nắp két hay nắp bình phụ khi máy còn nóng và không dội nước lên máy; đèn báo nhiệt độ sáng thì bóp phanh, dừng xe an toàn, tắt máy chờ nguội, không chạy tiếp.',
    'Không nối tắt cầu chì, giắc cắm hay chân cảm biến để ép quạt quay, không dùng dây hoặc giấy bạc thay cầu chì; làm vậy dễ cháy dây và hỏng bộ điều khiển.'
  ],
  notes: [
    'Bài chỉ hướng dẫn quan sát và kiểm tra bằng mắt, tai; việc đo điện, thử mô tơ và thay cảm biến hay rơ le cần dụng cụ và thợ có chuyên môn.',
    'Cách bố trí quạt, bộ ra lệnh và cầu chì khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn hoặc tài liệu kỹ thuật của đúng xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hệ thống làm mát, hộp cầu chì và đèn báo nhiệt độ',
    'Tài liệu kỹ thuật của nhà sản xuất về mạch điều khiển quạt làm mát của đúng dòng xe'
  ],
  related: ['xe-may-nong-may-nguyen-nhan-va-cach-xu-ly', 'nuoc-lam-mat-xe-may-vai-tro-va-cach-kiem-tra', 'mach-dien-xe', 'xe-phun-xang-kho-no-khi-may-nong']
};
