// AI WIKI TOTAL — S01944 (topic V2 T002123); không nêu số liệu hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'den-xe-may-hay-chay-bong-lien-tuc-hoac-sang-ruc-khi-ga-manh-roi-toi-luc-cam-chung-dien-ap-bo-nap-bong-hay-chan-den',
  title: 'Đèn xe máy hay cháy bóng liên tục hoặc sáng rực khi ga mạnh rồi tối lúc cầm chừng: điện áp bộ nạp, bóng hay chân đèn',
  seoTitle: 'Đèn xe máy hay cháy bóng, rực lên khi ga: tìm lỗi theo thứ tự',
  metaDescription: 'Thay bóng mãi vẫn cháy, đèn chói khi vặn ga rồi tối lúc cầm chừng: loại trừ theo thứ tự từ bóng, chân đèn, giắc, nước vào chóa tới bộ nạp và ghi gì cho thợ.',
  summary: 'Thay bóng đèn pha hay đèn hậu được ít lâu lại cháy, đèn chói mỗi khi vặn ga rồi tối hẳn lúc cầm chừng, đổi bóng vài lần vẫn vậy, khiến nhiều người tưởng mua phải bóng kém. Thực ra cùng biểu hiện cháy bóng có thể đến từ chân đèn lỏng, giắc oxy hóa, nước vào chóa, tay chạm vào bóng halogen, bóng sai loại, hoặc từ bộ nạp không còn ghìm được điện khi máy quay nhanh. Bài giải thích khi nào đèn đổi độ sáng theo ga là bình thường, dấu hiệu nào cho thấy điện đang vọt cao, và cách loại trừ từng nhóm nguyên nhân theo thứ tự rẻ trước, đắt sau. Phần cuối là cách tự kiểm tại nhà không cần dụng cụ, điều nên ghi cho thợ và thứ tự thợ sẽ kiểm.',
  quickAnswer: 'Đèn hơi yếu lúc cầm chừng và sáng dần khi ga là bình thường trên nhiều xe, nhất là xe đèn lấy điện xoay chiều thẳng từ máy; đáng lo là khi đèn rực chói theo ga, tụt sâu khi nhả, bóng cháy lặp lại ở nhiều vị trí và ắc quy nóng hay phồng, vì đó là dấu hiệu bộ nạp để điện vọt cao. Nếu bóng chỉ cháy ở đúng một chỗ còn các đèn khác bền, hãy loại trừ theo thứ tự: bóng đúng loại chưa, chân đèn có lỏng rung, giắc và đui có gỉ, chóa có đọng nước, có cầm tay trần vào bóng halogen khi lắp không. Đừng thay bóng tiếp khi chưa tìm ra nguyên nhân phía trên. Đo điện lúc máy nổ và thay bộ nạp nên để thợ làm; bạn chỉ cần ghi lại hiện tượng và mang theo bóng cũ.',
  keyPoints: [
    'Đèn hơi yếu lúc cầm chừng, sáng dần khi ga là đặc điểm của nhiều xe; bất thường là khi đèn rực chói theo ga, tụt sâu khi nhả và mới xuất hiện gần đây.',
    'Bộ nạp mất khả năng ghìm điện thường gom đủ ba dấu hiệu: bóng cháy lặp lại ở nhiều vị trí, đèn rực lên theo ga, ắc quy nóng hoặc phồng sau khi chạy.',
    'Bóng chỉ cháy ở một chỗ thường do chân đèn lỏng rung, giắc hay đui oxy hóa, nước vào chóa, tay chạm bóng halogen hoặc bóng sai loại.',
    'Tự kiểm không cần dụng cụ: so độ sáng lúc cầm chừng và khi ga, ghi vị trí bóng cháy qua từng lần thay, nhìn bóng và đui vừa tháo, sờ vỏ ắc quy khi xe đã tắt.',
    'Không thay bóng mãi khi chưa rõ nguyên nhân; thợ sẽ đo điện lúc cầm chừng và lúc ga, rồi kiểm bộ nạp, cuộn phát, giắc, mát và ắc quy theo thứ tự.'
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-23',
  updated: '2026-10-23',
  entities: ['bóng đèn xe máy', 'bộ nạp (chỉnh lưu, điều áp)', 'chân đèn', 'giắc nối', 'chóa đèn', 'ắc quy', 'bóng halogen', 'tiếp mát'],
  keywords: ['đèn xe máy hay cháy bóng', 'đèn xe máy sáng rực khi ga', 'đèn pha xe máy tối lúc cầm chừng', 'bộ nạp xe máy hỏng cháy bóng', 'thay bóng đèn xe máy mãi vẫn cháy'],
  sections: [
    P('Đèn đổi độ sáng theo ga: khi nào là chuyện bình thường của xe', [
      'Trước khi lo lắng, cần biết rằng không phải cứ đèn sáng hơn khi ga là xe đang hỏng. Trên nhiều xe số đời cũ và một số xe phổ thông, đèn pha không lấy điện từ ắc quy mà lấy thẳng dòng xoay chiều từ cuộn phát trong máy. Dòng này mạnh yếu theo vòng quay của động cơ, nên đèn thường hơi vàng, hơi yếu lúc cầm chừng và sáng dần lên khi tăng ga. Đó là đặc điểm thiết kế chứ không phải lỗi, và sách hướng dẫn của xe thường ghi rõ đèn thuộc loại nào.',
      'Ở xe mà đèn được cấp từ ắc quy qua bộ nạp, độ sáng về lý thuyết ổn định hơn, nhưng vẫn có dao động nhẹ. Khi vừa đề máy, khi kẹt xe lâu với đèn, xi nhan và còi cùng dùng, ắc quy phải bù phần thiếu, nên đèn có thể hơi xuống một chút rồi tươi lại khi xe chạy đều. Dao động kiểu này nhỏ, êm, và mắt phải chú ý mới thấy. Bài về xe yếu hẳn hoặc tắt máy khi bật xi nhan, bấm còi lúc cầm chừng trên trang đã mô tả kỹ chuyện điện sụt khi có tải, nên ở đây chỉ nhắc để bạn phân biệt.',
      'Điều bất thường nằm ở mức chênh. Nếu lúc cầm chừng đèn tối hẳn, gần như chỉ còn sợi đốt đỏ, rồi khi vặn ga đèn bật lên trắng rực, chói tới mức nhìn thẳng thấy khó chịu, và lặp lại như thế mỗi lần nhấp ga, thì dao động đã vượt xa mức một chiếc xe khỏe mạnh thể hiện. Càng đáng chú ý hơn khi hiện tượng này mới xuất hiện gần đây trên một chiếc xe trước nay đèn vẫn đều, hoặc khi nó đi cùng chuyện bóng cháy liên tục dù vừa thay. Đó là lúc nên ngừng đổi bóng và nhìn lên phía nguồn.',
      'Một cách nhìn đơn giản: dao động nhịp nhàng theo ga và chỉ hơi yếu lúc dừng nghiêng về bình thường, hoặc về khâu nạp thiếu và dây mát kém. Còn kiểu tối hẳn lúc dừng, rực lên lúc ga và kèm bóng cháy thì nghiêng về nguồn điện đang bị đẩy lên quá cao khi máy quay nhanh. Hai hướng này đòi hỏi cách xử lý khác nhau, nên phần sau của bài sẽ tách riêng. Dù nghiêng về hướng nào, bạn chỉ đoán được hướng nghi ngờ, còn kết luận cần phép đo của thợ.'
    ]),
    P('Bộ nạp để điện vọt cao: dấu hiệu đi kèm trên ắc quy và đèn', [
      'Bộ nạp, tức cụm chỉnh lưu và điều áp, có nhiệm vụ nhận điện từ cuộn phát, đổi sang dạng ắc quy dùng được và giữ mức điện trong vùng an toàn dù máy quay nhanh hay chậm. Cấu tạo và đường đi của điện đã được bài lốc điện và bộ nạp điện trên xe máy trên trang trình bày đầy đủ, nên ở đây chỉ nói về một kiểu hỏng cụ thể: bộ nạp mất khả năng ghìm điện. Khi đó, máy quay càng nhanh thì điện đẩy lên càng cao, và cả hệ thống phía sau phải chịu mức điện mà nó không được thiết kế để chịu.',
      'Bóng đèn là chỗ lộ ra đầu tiên vì sợi đốt rất nhạy với điện cao. Đèn sáng rực mỗi lần ga mạnh, rồi sau vài chuyến đi, thậm chí sau vài lần nhấp ga trên đường trường, bóng đứt sợi. Thay bóng mới, cảnh đó lặp lại, có khi bóng mới chỉ trụ được ít ngày. Điểm đặc trưng là nhiều bóng cùng chết lần lượt: đèn pha, đèn hậu, đèn soi biển số, đèn đồng hồ, chứ không chỉ một vị trí.',
      'Ắc quy là nơi báo hiệu thứ hai và đáng sợ hơn. Khi điện nạp vào quá cao, ắc quy nóng bất thường sau mỗi chuyến đi, loại châm nước thì hao nước nhanh, lâu hơn có thể phồng vỏ, có mùi hăng hay chua quanh nắp. Những bộ phận điện tử như đồng hồ, bộ điều khiển, rơ le cũng có thể hỏng sớm vì phải chịu điện quá mức. Ắc quy phồng, rỉ dung dịch hoặc bốc mùi là lý do dừng xe nơi an toàn, tắt máy và không lại gần lửa. Tới mức đó, đây không còn là chuyện bóng đèn nữa.',
      'Một chiếc xe có bộ nạp hỏng kiểu này thường gom đủ ba thứ: bóng cháy lặp lại ở nhiều vị trí, đèn rực lên theo ga, và ắc quy nóng hoặc phồng. Khi bạn thấy đủ cả ba, hướng nghi ngờ khá rõ, và việc tiếp tục thay bóng chỉ là đốt tiền trong lúc chờ ắc quy hỏng theo. Nhưng nếu chỉ có một thứ, nhất là chỉ có bóng cháy ở một vị trí, thì còn nhiều nguyên nhân rẻ hơn và dễ xử lý hơn cần loại trừ trước. Phần kế tiếp đi theo đúng thứ tự đó.'
    ]),
    P('Cháy bóng vì chân đèn, giắc, nước vào chóa và cách thay bóng sai', [
      'Bóng cháy lặp lại ở đúng một vị trí, trong khi các đèn khác vẫn bền và không sáng rực theo ga, thường không phải do nguồn mà do chính chỗ lắp bóng. Chân đèn lỏng là nguyên nhân rất hay gặp: lò xo giữ bóng yếu, ngàm gài mòn, hoặc bóng lắp chưa khớp, khiến bóng rung theo mặt đường. Sợi đốt trong bóng dây tóc khi nóng rất mềm, chỉ cần rung liên tục là đứt sớm dù điện hoàn toàn bình thường. Dấu hiệu nhận ra là đèn chớp nhẹ khi qua ổ gà, hoặc khi lấy tay lắc nhẹ chụp đèn lúc xe đã tắt máy.',
      'Giắc nối và đui đèn oxy hóa là nhóm thứ hai. Chân tiếp xúc bị gỉ, xỉn hay cháy xém làm mối nối lúc dính lúc rời, bóng vì thế bật tắt liên tục ở mức mắt không thấy nhưng sợi đốt thì chịu hết. Mối nối kém còn sinh nhiệt ngay tại chỗ, làm chảy nhựa đui, đổi màu giắc, có khi ngửi thấy mùi khét nhẹ sau khi đi xa. Bài đèn pha xe máy mờ trên trang có nói về giắc gây đèn chớp âm ỉ, còn bài về xe bị chập hay chỉ lỏng giắc trên trang giúp bạn hiểu những chữ thợ hay dùng khi mô tả nhóm lỗi này.',
      'Nước vào chóa đèn là nhóm thứ ba, hay gặp sau mưa lớn, sau khi rửa xe bằng tia nước mạnh, hoặc khi nắp cao su sau chóa đã rách, lắp lệch. Hơi nước đọng trong chóa làm bóng đang nóng bị sốc nhiệt khi giọt nước chạm vào, thủy tinh nứt hoặc sợi đốt đứt; nước còn làm đui đèn và giắc gỉ nhanh hơn. Dấu hiệu dễ thấy là màng sương mờ trong mặt kính buổi sáng, vệt nước đọng dưới đáy chóa, hoặc chụp đèn ố vàng. Chỗ nào vào nước thì bóng chỗ đó cháy trước, trong khi các đèn kín vẫn bền.',
      'Nhóm cuối là do chính cách thay bóng. Bóng halogen rất kỵ dầu mỡ từ tay người: vệt mồ hôi bám trên thủy tinh tạo điểm nóng cục bộ khi đèn hoạt động, bóng phồng rộp rồi vỡ sớm. Bóng không đúng loại chân, lắp ép cho vừa, hoặc bóng có mức tiêu thụ khác với thiết kế cũng làm nóng đui và cháy nhanh. Khác biệt giữa bóng halogen và LED, cùng những điều cần kiểm khi thay bóng, đã có trong bài so sánh đèn pha halogen và LED trên trang. Ở đây chỉ nhắc rằng cầm bóng bằng khăn sạch hoặc qua lớp bao, lắp đúng loại, đóng nắp che kín là ba việc rất nhỏ nhưng quyết định tuổi thọ bóng.'
    ]),
    P('Tự kiểm tại nhà và điều nên ghi lại trước khi ra tiệm', [
      'Bạn không cần dụng cụ đo để thu hẹp nghi ngờ, chỉ cần quan sát có chủ ý và ghi lại. Bài kiểm đầu tiên làm vào buổi tối ở chỗ ít sáng: dựng xe chắc chắn, nổ máy, để đèn chiếu vào tường. Nhìn độ sáng lúc cầm chừng, rồi vặn ga từ từ và giữ ở mức vừa phải trong vài nhịp, xem đèn tăng sáng tới đâu. Tăng nhẹ và đều là một chuyện; bật rực lên, trắng chói, đổi màu rõ rệt rồi tụt sâu khi nhả ga là chuyện khác. Lặp lại vài lần rồi ghi lại cảm nhận bằng lời.',
      'Bài thứ hai là lần theo vị trí bóng cháy. Mỗi lần thay bóng, ghi ngày và vị trí vào một mẩu giấy hay ghi chú điện thoại: pha, cốt, hậu, soi biển số, đồng hồ. Sau vài lần, bạn sẽ thấy một trong hai mẫu hình: hoặc cháy luôn một chỗ và các chỗ khác bền, hoặc cháy rải rác nhiều chỗ nối tiếp nhau. Mẫu đầu nghiêng về chân đèn, giắc, nước, cách lắp; mẫu sau nghiêng về nguồn điện. Nhìn kỹ bóng và đui vừa tháo cũng có ích: vệt tay trên thủy tinh, điểm phồng, sợi đứt, chân cắm xém hay nhựa chảy.',
      'Bài thứ ba dành cho ắc quy và chỉ làm khi xe đã tắt máy, rút chìa. Sau một chuyến đi đủ dài cho máy nóng, mở chỗ để ắc quy theo sách hướng dẫn và đưa mu bàn tay lại gần vỏ, không chạm vào cọc. Ấm nhẹ là bình thường; nóng rõ, vỏ căng, có mùi hăng hay thấy vết ẩm quanh nắp là dấu hiệu đáng lo, cần dừng dùng xe và báo thợ. Tuyệt đối không tháo nắp, không soi lửa, không tự đấu nối gì để thử.',
      'Trước khi ra tiệm, gom những gì đã thấy thành một ghi chú ngắn: đèn tăng sáng theo ga ở mức nào; bóng cháy ở vị trí nào, mấy lần và cách nhau bao lâu theo cảm nhận; ắc quy có nóng, phồng hay có mùi không; hiện tượng bắt đầu sau sự kiện gì, như sau mưa, sau rửa xe, sau khi thay bóng, sau khi gắn thêm đồ điện, hay sau khi sửa phần khác. Kèm luôn bóng cũ vừa cháy để thợ nhìn. Ghi chú như vậy giúp thợ đi thẳng tới phép đo đúng thay vì dò từ đầu, và giúp bạn đối chiếu khi nhận lại xe.'
    ]),
    P('Vì sao không nên thay bóng mãi và thứ tự thợ sẽ kiểm', [
      'Thay bóng rồi lại thay bóng là phản ứng tự nhiên vì bóng rẻ và dễ tìm, nhưng nếu nguyên nhân nằm ở phía trên, mỗi bóng mới chỉ là một vật hy sinh. Tệ hơn, trong lúc chờ bóng kế tiếp cháy, điện cao vẫn đang bào mòn ắc quy, đồng hồ và các mạch điện tử đắt hơn bóng nhiều lần. Có người thử đổi sang bóng LED cho bền thì gặp cảnh đèn nhấp nháy hoặc mạch trong bóng hỏng, vì LED còn nhạy với điện không ổn định hơn bóng dây tóc. Ngược lại, khi lỗi chỉ ở chân đèn lỏng hay giắc gỉ mà lại đi thay bộ nạp theo lời đồn thì vừa tốn tiền vừa không hết bệnh.',
      'Cũng cần tách với một bệnh nhìn giống mà khác gốc: đèn mờ do tiếp mát kém. Dây mát ở đuôi đèn hay điểm bắt mát vào khung bị gỉ làm vòng điện không khép kín trọn vẹn, đèn mờ, vàng, đôi khi sáng lên khi bật thêm thiết bị khác rồi lại mờ. Kiểu này hiếm khi làm bóng cháy hàng loạt và không đi kèm ắc quy nóng, nhưng lại dễ bị nhầm với đèn yếu lúc cầm chừng. Nếu đèn của bạn chỉ mờ mà không rực lên theo ga và bóng vẫn bền, hãy đọc bài đèn pha xe máy mờ trên trang trước khi nghĩ tới bộ nạp.',
      'Tại tiệm, thợ có kinh nghiệm thường đi theo một thứ tự khá ổn định. Họ đo điện ở ắc quy khi máy cầm chừng rồi khi tăng ga để xem mức có vọt lên quá vùng an toàn hay không; đây chính là phép đo trả lời câu hỏi của bài này, và không có cách nào thay thế bằng mắt. Nếu điện vọt, họ kiểm bộ nạp và các giắc của nó, vì giắc nóng chảy hay mát kém ở bộ nạp cũng cho kết quả tương tự. Nếu điện không vọt, họ quay sang cuộn phát để loại trừ nạp thiếu, rồi tới dây dẫn, giắc đèn, mối mát, và cuối cùng là tình trạng của chính ắc quy.',
      'Những việc thuộc về thợ gồm đo điện khi máy nổ, tháo lắp bộ nạp, kiểm cuộn phát và xử lý ắc quy có dấu hiệu phồng, vì chúng liên quan tới điện đang chạy, chi tiết nóng và bộ phận quay. Phần bạn tự làm được nằm ở phía dưới: lắp bóng đúng loại và sạch tay, giữ nắp chóa kín, giữ giắc khô, ghi lại hiện tượng. Khi nhận xe sau sửa, nhờ thợ cho xem lại số đo sau khi thay để chắc mức điện đã ổn, rồi theo dõi bóng và ắc quy thêm vài tuần. Nếu bóng vẫn cháy sau khi đã thay bộ nạp, đừng ngần ngại quay lại, vì lúc đó nguyên nhân còn lại thường nằm ở giắc, mát hoặc cách lắp bóng.'
    ])
  ],
  checklist: [
    'Xem đèn tăng sáng theo ga ở mức nào: tăng nhẹ và đều hay rực chói rồi tụt sâu khi nhả ga.',
    'Ghi vị trí bóng cháy qua từng lần thay để biết cháy một chỗ hay rải rác nhiều chỗ.',
    'Nhìn bóng và đui vừa tháo: vệt tay, điểm phồng, sợi đứt, chân cắm xém hay nhựa chảy.',
    'Khi xe đã tắt máy: kiểm chân đèn, giắc, nắp cao su sau chóa và xem chóa có đọng nước.',
    'Sau chuyến đi dài, kiểm vỏ ắc quy khi xe đã tắt: nóng rõ, căng phồng, có mùi là báo thợ.',
    'Mang ghi chú và bóng cũ ra tiệm; nhờ thợ đo điện lúc cầm chừng và lúc ga rồi ghi lại.'
  ],
  steps: [
    { title: 'So độ sáng theo ga', detail: 'Buổi tối, dựng xe chắc, nổ máy, chiếu đèn vào tường; so độ sáng lúc cầm chừng với lúc giữ ga vừa phải, lặp vài lần và ghi lại bằng lời.' },
    { title: 'Lần theo vị trí bóng cháy', detail: 'Ghi ngày và vị trí mỗi lần thay bóng; cháy luôn một chỗ nghiêng về chỗ lắp bóng, cháy nhiều chỗ nối tiếp nghiêng về nguồn.' },
    { title: 'Loại trừ tại chỗ lắp bóng', detail: 'Khi xe tắt máy: kiểm bóng đúng loại, chân đèn có lỏng rung, giắc và đui có gỉ, chóa có đọng nước, nắp che có kín; lắp lại bóng qua khăn sạch.' },
    { title: 'Kiểm ắc quy sau khi chạy', detail: 'Xe tắt máy, rút chìa, mở chỗ để ắc quy theo sách hướng dẫn, đưa mu bàn tay gần vỏ; nóng rõ, phồng hay có mùi là dừng dùng xe và báo thợ.' },
    { title: 'Ra tiệm với ghi chú và bóng cũ', detail: 'Đưa thợ ghi chú về độ sáng theo ga, vị trí bóng cháy, tình trạng ắc quy, sự kiện trước khi có bệnh; nhờ đo điện lúc cầm chừng và lúc ga rồi kiểm bộ nạp, cuộn phát, giắc, mát.' }
  ],
  warnings: [
    'Không tiếp tục thay bóng khi đèn rực theo ga và nhiều bóng cùng cháy: điện cao đang hại cả ắc quy và đồ điện tử.',
    'Ắc quy nóng rõ, phồng, rỉ dung dịch hay bốc mùi: dừng xe nơi an toàn, tắt máy, tránh xa lửa và không tự tháo nắp hay đấu nối.',
    'Không chọc que kim loại vào đui đèn hay giắc khi đang bật khóa; mọi phép đo điện lúc máy nổ và việc thay bộ nạp nên để thợ làm.'
  ],
  notes: [
    'Cách cấp điện cho đèn, loại bóng và vị trí ắc quy khác nhau tùy xe; hãy đối chiếu sách hướng dẫn sử dụng của xe trước khi tự kiểm.',
    'Bài chỉ giúp thu hẹp hướng nghi ngờ bằng quan sát; kết luận cuối cùng cần phép đo của thợ, và việc thay bộ nạp hay ắc quy nên dựa trên số đo chứ không dựa trên lời đồn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hệ thống đèn, ắc quy và thay bóng',
    'Tài liệu kỹ thuật cơ bản về hệ thống điện xe máy dùng trong đào tạo thợ sửa xe'
  ],
  related: [
    'loc-dien-xe-may',
    'den-pha-halogen-va-led-tren-xe-may-khac-nhau-the-nao',
    'xe-may-yeu-han-hoac-tat-may-moi-khi-bat-xi-nhan-hay-bam-coi-luc-cam-chung-dien-sut-khi-co-tai-va-cach-ghi-cho-tho',
    'den-pha-xe-may-mo-nguyen-nhan-va-xu-ly',
    'den-xi-nhan-xe-may-nhay-nhanh-mot-ben-hoac-nhay-cham-sang-mo-doc-nhip-nhay-de-biet-bong-chay-tiep-mat-kem-hay-ro-le'
  ]
};
