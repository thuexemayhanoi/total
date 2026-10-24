// AI WIKI TOTAL — S02027 (topic V2 T002215); không nêu số liệu hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'nut-nho-tren-tay-lai-va-dong-ho-xe-may-set-sel-mode-nhay-pha-moi-nut-lam-gi-va-nut-nao-khong-nen-bam-khi-dang-chay',
  title: 'Nút nhỏ trên tay lái và đồng hồ xe máy (SET, SEL, MODE, nháy pha): mỗi nút làm gì và nút nào không nên bấm khi đang chạy',
  seoTitle: 'Nút nhỏ trên tay lái, đồng hồ xe máy: SET, SEL, MODE làm gì',
  metaDescription: 'Gom nút nhỏ trên tay lái và đồng hồ xe máy thành ba nhóm, giải thích bấm ngắn khác giữ lâu, cách làm quen khi đứng yên và nút nào không nên bấm lúc đang chạy.',
  summary: 'Nhiều người nhìn thấy mấy nút nhỏ ghi SET, SEL, MODE hay ký hiệu lạ quanh tay lái và đồng hồ mà không biết bấm để làm gì, rồi ngại bấm thử vì sợ xóa số đã lưu hay đổi cài đặt. Bài này gom các nút thành ba nhóm theo vị trí và việc chúng làm: ánh sáng và tín hiệu ở tay lái, điều khiển máy, và chỉnh hiển thị trên đồng hồ. Bài cũng giải thích bấm ngắn khác giữ lâu, cách đảo lại khi lỡ đổi cài đặt, cách lập bảng nút nhỏ cho xe mình, nút nào không nên bấm lúc đang chạy và nơi tra ký hiệu.',
  quickAnswer: 'Hãy chia nút thành ba nhóm: ánh sáng và tín hiệu ở tay lái, điều khiển máy, và chỉnh hiển thị trên đồng hồ. Chỉ nhóm tay lái gắn với việc lái mới bấm khi đang chạy, bằng ngón cái và không nhìn xuống. Nhóm đồng hồ, chế độ lái, tạm ngắt máy và mọi thao tác giữ lâu nên làm khi đã dừng hẳn, vì giữ lâu thường là xóa, đặt lại hoặc vào cài đặt. Ký hiệu mỗi xe một kiểu nên hãy đối chiếu sách hướng dẫn hoặc tem trên xe, rồi thử từng nút lúc đứng yên.',
  keyPoints: [
    'Nút nhỏ trên xe máy chia được thành ba nhóm: ánh sáng và tín hiệu ở tay lái, điều khiển máy, và chỉnh hiển thị trên đồng hồ.',
    'Bấm ngắn thường chỉ duyệt hoặc đổi lựa chọn, còn giữ lâu thường là xóa, đặt lại hoặc vào chế độ cài đặt.',
    'Cùng một ký hiệu, mỗi xe có thể làm một việc khác, nên đối chiếu sách hướng dẫn hoặc tem trên xe thay vì đoán theo xe quen.',
    'Khi đang chạy chỉ dùng pha cốt, xi nhan, còi và nháy pha ngắn; nhóm đồng hồ, chế độ lái, nút phụ để lúc dừng hẳn.',
    'Làm quen khi tắt máy, dựng xe chắc, bấm từng nút và lập bảng nhỏ ghi nút nào làm gì, kể cả cách đảo lại khi lỡ đổi.'
  ],
  category: 'docs',
  hub: 'huong-dan-su-dung',
  date: '2026-10-24',
  updated: '2026-10-24',
  entities: ['nút trên tay lái', 'đồng hồ xe máy', 'nút SET', 'nút SEL', 'nút MODE', 'bấm ngắn và giữ lâu', 'nháy pha', 'sách hướng dẫn sử dụng'],
  keywords: ['ý nghĩa các nút trên xe máy', 'nút SET SEL MODE trên đồng hồ xe máy', 'nút nhỏ trên tay lái xe máy', 'nút nào không nên bấm khi đang chạy', 'bấm ngắn và giữ lâu trên đồng hồ xe máy'],
  sections: [
    P('Vì sao xe máy có nhiều nút nhỏ và mỗi dòng xe ghi ký hiệu một kiểu', [
      'Một chiếc xe máy ngày nay phải điều khiển khá nhiều thứ cùng lúc: đèn trước và sau, tín hiệu rẽ, còi, việc nổ và tắt máy, rồi cả phần đồng hồ hiển thị thông tin cho người lái. Chỗ để đặt nút trên tay lái và quanh đồng hồ lại rất chật, nên nhà sản xuất thường dồn nhiều chức năng vào ít nút. Kết quả là cùng một nút nhỏ có thể làm việc này khi bấm ngắn và việc khác khi giữ lâu. Nhìn thấy cả mảng nút nhỏ mà thấy rối là chuyện bình thường, không phải do người lái kém.',
      'Điều làm người dùng bối rối hơn là ký hiệu không có một chuẩn chung chặt chẽ. Có xe ghi chữ viết tắt như SET, SEL hay MODE, có xe chỉ in một hình tượng trưng, có xe không ghi gì mà chỉ phân biệt bằng hình dáng và vị trí nút. Cùng một chữ MODE, xe này dùng để đổi màn hình hiển thị, xe kia dùng để đổi chế độ chạy, xe khác nữa lại dùng để vào phần cài đặt. Mỗi xe một khác, nên khi cần chắc chắn thì sách hướng dẫn sử dụng của chính chiếc xe đang cầm lái là nguồn đáng tin nhất.',
      'Cách dễ nhớ nhất là gom các nút nhỏ thành ba nhóm theo vị trí và việc chúng làm. Nhóm thứ nhất là ánh sáng và tín hiệu ở tay lái: pha cốt, xi nhan, còi, nháy pha và đèn khẩn cấp. Nhóm thứ hai là điều khiển máy: nút đề, công tắc tắt máy và, nếu xe có, chế độ tạm ngắt máy khi dừng. Nhóm thứ ba là chỉnh hiển thị trên đồng hồ: các nút kiểu SET, SEL, MODE hay nút một chạm để đổi giữa tổng quãng đường, quãng chuyến, giờ, đơn vị và độ sáng. Gặp một nút lạ, hãy tự hỏi nó thuộc nhóm nào, câu trả lời thường cho biết ngay nó có nên chạm vào lúc đang chạy hay không.',
      'Một điểm nữa cần biết sớm là sự khác nhau giữa bấm ngắn và giữ lâu. Bấm ngắn thường chỉ duyệt qua các màn hình hoặc đổi một lựa chọn, còn giữ lâu thường là xóa, đặt lại hoặc đi vào chế độ cài đặt. Nhiều người ngại bấm thử vì sợ mất số đã lưu hay làm hỏng cài đặt, nhưng nỗi lo đó thường tập trung vào những thao tác giữ lâu hoặc bấm kết hợp, và còn tùy xe. Hiểu như vậy giúp bạn biết lúc nào nên thận trọng và lúc nào có thể thử nhẹ khi xe đứng yên.'
    ]),
    P('Cụm tay lái: pha cốt, xi nhan, còi, nháy pha, đề và tắt máy', [
      'Ở nhiều xe, tay trái giữ cụm ánh sáng và tín hiệu: công tắc chuyển pha và cốt, cần gạt hoặc nút xi nhan sang trái và sang phải, nút còi và nút nháy pha. Tay phải thường giữ nút đề, công tắc tắt máy và, ở một số xe, nút đèn khẩn cấp hoặc công tắc đèn. Cách bố trí này chỉ là phổ biến chứ không phải xe nào cũng giống, có xe đổi chỗ vài nút hoặc gộp hai việc vào một cần. Điểm chung là các nút dùng thường xuyên khi chạy được đặt sao cho ngón cái với tới mà bàn tay không phải rời tay nắm.',
      'Pha cốt, xi nhan và còi là ba nút bạn dùng nhiều nhất, nên cần quen đến mức bấm không cần nhìn. Hãy tập cho ngón cái nhớ vị trí từng nút ngay khi xe đứng yên, cảm nhận độ cao, độ cứng và tiếng tách của mỗi nút. Xi nhan là nút hay bị quên tắt nhất, vì thế nên tập thói quen gạt về giữa ngay sau khi rẽ xong. Nếu một nút bấm không ăn, bị kẹt hay chập chờn, bài công tắc ở tay lái xe máy bị kẹt hoặc không ăn trên trang giải thích vì sao hộp công tắc hay hỏng do ẩm bẩn và nên ghi gì cho thợ.',
      'Nút nháy pha, hay còn gọi là nút passing, thuộc cụm này nhưng đã có bài riêng về dùng lúc nào và vì sao dễ bị hiểu sai, nên ở đây chỉ cần nhớ nó khác công tắc chuyển pha cốt. Công tắc tắt máy cũng vậy: bài công tắc tắt máy trên tay lái xe máy trên trang nói rõ khi nào nên dùng và cách xử lý khi lỡ gạt nhầm lúc đang chạy. Điều cần rút ra cho bài này là hai nút đó nằm gần nút đề và nút còi nên dễ chạm nhầm bằng ngón cái, nhất là khi đeo găng dày. Nếu từng bị tắt máy bất ngờ hay nháy đèn không chủ ý, hãy xem lại cách đặt ngón cái khi cầm lái.',
      'Nút đề cần thêm một lưu ý: nó dùng khi xe đứng yên và máy đang tắt, và nhiều xe chỉ cho đề khi đã bóp phanh hoặc gạt chân chống lên, tùy xe. Đừng bấm đề khi máy còn đang nổ, và thường cũng không nên giữ nút đề quá lâu nếu máy chưa nổ, vì dễ làm yếu ắc quy hoặc mòn bộ đề. Khi đang chạy mà đèn pha tắt đột ngột, đừng vội nghĩ do nút; bài đèn pha xe máy tắt đột ngột khi đang chạy đêm trên trang hướng dẫn giữ bình tĩnh và đưa xe về chỗ an toàn. Cả nhóm tay lái nói chung được phép dùng lúc chạy, nhưng chỉ bằng ngón cái, không nhìn xuống và không để bàn tay rời tay nắm.'
    ]),
    P('Cụm đồng hồ: SET, SEL, MODE đổi hiển thị, cài giờ và đặt lại quãng chuyến thế nào', [
      'Cụm đồng hồ là nơi các nút nhỏ dễ gây ngại nhất, vì chúng nằm sát bảng hiển thị, ít khi dùng và hậu quả bấm sai thì không rõ ràng. Việc chính của chúng là chọn thông tin hiển thị: tổng quãng đường đã đi, quãng chuyến, giờ, đơn vị đo, độ sáng màn hình và ở một số xe là vài thông tin khác. Điều đáng nhớ là nhóm nút này không dành cho lúc đang chạy: việc xem và chỉnh nên làm khi đã dừng hẳn. Khi cần xem một thông tin nào đó trên đường, hãy tấp vào chỗ an toàn thay vì vừa chạy vừa bấm.',
      'Một cách đặt tên hay gặp là nút SEL hoặc MODE để chọn, tức duyệt từng màn hình theo vòng, còn nút SET để xác nhận hoặc đưa vào chế độ cài đặt. Cũng có xe làm ngược lại hoặc gộp cả hai việc vào một nút, nên hãy coi đây là gợi ý để đoán chứ không phải quy luật. Với phần lớn đồng hồ, bấm ngắn nhiều lần sẽ đưa bạn qua các màn hình lần lượt rồi quay về chỗ cũ, và thường không làm mất dữ liệu gì. Muốn cài giờ, thường phải giữ một nút lâu để vào chế độ chỉnh, bấm ngắn để tăng giá trị, rồi bấm xác nhận để chuyển sang phần tiếp theo.',
      'Đặt lại quãng chuyến thường là thao tác giữ lâu một nút khi màn hình đang hiện đúng quãng chuyến đó. Điểm quan trọng là giữ lâu sẽ tác động vào màn đang hiển thị, cho nên hãy nhìn kỹ màn nào đang hiện trước khi giữ. Tổng quãng đường thường không đặt lại được bằng tay, vì vậy màn đó nên được xem là chỉ để đọc. Cách đọc và dùng hai loại số này đã được nói kỹ trong bài đồng hồ ODO và TRIP trên xe máy trên trang, nên ở đây không đào lại mà chỉ nhắc rằng đặt lại quãng chuyến là thao tác nên làm khi dừng xe. Nếu lỡ đặt lại nhầm, thường chỉ số quãng chuyến mất đi, còn tổng quãng đường vẫn giữ nguyên.',
      'Lỡ đổi nhầm đơn vị, độ sáng hay giờ thì cách đảo lại thường đơn giản: vào lại đúng màn cài đặt đó rồi chỉnh về giá trị cũ. Vì vậy trước khi thử chỉnh thứ gì, hãy nhìn và nhớ giá trị đang có, hoặc chụp ảnh đồng hồ bằng điện thoại. Nếu bị kẹt trong một màn cài đặt mà không biết thoát, nhiều đồng hồ sẽ tự thoát sau một lúc không bấm, hoặc bạn có thể tắt khóa điện rồi bật lại, tùy xe. Nếu đồng hồ vẫn hiển thị lạ sau khi đã thử nhẹ, hãy mang xe đến thợ thay vì bấm tiếp.'
    ]),
    P('Nút tiện ích: tạm ngắt máy khi dừng, chế độ lái và đèn khẩn cấp dùng lúc nào', [
      'Một số xe có chế độ tạm ngắt máy khi dừng: máy tự tắt sau một lúc đứng yên, rồi nổ lại khi bạn vặn ga hoặc nhả phanh, tùy xe. Chế độ này thường có đèn báo trên đồng hồ và có thể có nút bật tắt riêng hoặc nằm trong phần cài đặt. Người chưa biết dễ tưởng xe vừa chết máy giữa đèn đỏ rồi hoảng, trong khi thật ra xe đang làm đúng theo thiết kế. Muốn bật hoặc tắt hẳn chế độ, hãy làm khi xe đứng yên ở chỗ an toàn, đừng làm khi đang nằm giữa dòng xe.',
      'Ở xe có nhiều chế độ lái, nhất là xe điện, nút chế độ làm đổi cách ga phản ứng, mức tiết kiệm hoặc giới hạn tốc độ, tùy xe. Đây là nút dễ bấm nhầm vì thường nằm ngay dưới ngón cái, và đổi chế độ lúc đang chạy có thể làm xe đáp ga khác hẳn cảm giác vừa rồi. Nên làm quen từng chế độ khi xe đứng yên và nhìn đồng hồ xem chế độ nào đang bật. Dù xe có cho đổi lúc đang chạy hay không, cách an toàn vẫn là dừng ở chỗ phù hợp rồi mới đổi.',
      'Đèn khẩn cấp thường có nút riêng, hay nằm ở cụm tay lái hoặc trên thân xe, bấm một lần để bật và bấm lại để tắt, tùy xe. Khi đèn khẩn cấp bật nhầm, người phía sau thấy cả hai bên cùng nháy thì không biết bạn định rẽ hướng nào, nên hãy liếc đèn báo nháy trên đồng hồ khi đã dừng sau mỗi lần nghi ngờ vừa chạm nút. Bài đèn khẩn cấp trên xe máy trên trang nói rõ lúc nào nên bật, lúc nào bật lại gây hiểu nhầm và xe không có nút thì làm gì. Ở đây chỉ cần nhớ nút này dùng khi dừng hoặc gặp sự cố, không phải để thay cho xi nhan.',
      'Ngoài ba nút trên, xe còn có thể có thêm vài nút phụ như đèn phụ, sưởi tay nắm, chỉnh độ sáng hay nút mở cốp, tùy xe. Với mọi nút lạ, quy tắc chung là không bấm khi đang chạy, vì mỗi lần bấm là một lần mắt và đầu óc rời khỏi đường. Nếu nút liên quan đến phanh, ga hay hệ thống điện chính, tuyệt đối đừng thử bừa mà hãy xem sách hướng dẫn hoặc hỏi thợ. Cũng đừng giữ lâu một nút lạ chỉ để xem điều gì xảy ra, vì giữ lâu thường là thao tác xóa hoặc đặt lại.'
    ]),
    P('Làm quen nút của xe mình khi đứng yên, nút nào không bấm lúc chạy và nơi tra ký hiệu', [
      'Cách làm quen an toàn nhất là làm khi xe đứng yên, trên mặt phẳng và chắc chắn. Dựng xe bằng chân chống nếu xe có, tắt máy, chỉ xoay khóa điện sang vị trí bật khi cần xem đồng hồ hoặc thử đèn, và để hai tay rảnh. Đừng thử nút đề lung tung, và đừng nổ máy trong chỗ kín vì khí thải. Đứng yên và bình tĩnh là điều kiện đầu tiên để biết nút nào làm gì mà không lo bấm nhầm.',
      'Hãy bấm từng nút một, theo thứ tự, và ghi lại điều xảy ra sau mỗi lần. Với mỗi nút nhỏ, thử bấm ngắn trước, nhìn đồng hồ hoặc đèn xem có gì đổi, rồi mới cân nhắc giữ lâu nếu sách hướng dẫn nói thao tác đó an toàn. Sau khi thử, lập một bảng nhỏ với ba cột: tên hoặc vị trí nút, điều xảy ra khi bấm ngắn, điều xảy ra khi giữ lâu. Ghi luôn điều bạn đã đổi và cách đảo lại, để không phải nhớ từ đầu khi lỡ chỉnh nhầm.',
      'Quy tắc cho lúc đang chạy khá đơn giản: nút nào làm mắt rời đường hoặc làm xe phản ứng khác đi thì chờ khi dừng. Nhóm đồng hồ như SET, SEL, MODE, mọi thao tác giữ lâu, chế độ lái, nút tạm ngắt máy, đèn phụ, sưởi tay nắm và chỉnh độ sáng đều thuộc nhóm này. Chỉ nên dùng khi đang chạy những nút gắn với việc lái là pha cốt, xi nhan, còi và nháy pha ngắn, và chỉ bằng ngón cái, không nhìn xuống. Công tắc tắt máy và đèn khẩn cấp thì chỉ cần biết vị trí để không chạm nhầm. Nếu thật sự cần xem hay chỉnh điều gì, hãy giảm tốc, báo hiệu và tấp vào chỗ an toàn rồi làm khi đã dừng hẳn.',
      'Muốn tra ký hiệu, nơi đáng tin nhất là sách hướng dẫn sử dụng của chính xe bạn, thường có phần riêng cho tay lái và đồng hồ. Ngoài ra còn có tem hoặc hình in cạnh nút, tem dưới yên hay trong cốp, tài liệu của nhà sản xuất và thợ ở cơ sở bảo dưỡng quen thuộc. Với xe mượn, xe người nhà hay xe thuê, hãy nhờ người giao xe chỉ qua các nút chính trước khi đi, rồi tự thử lại khi đứng yên. Đừng suy theo xe cũ của mình vì cùng một ký hiệu có thể làm việc khác. Mỗi lần đổi xe, hãy lập lại bảng nút nhỏ, vì thói quen cũ là nguồn bấm nhầm hay gặp nhất.'
    ])
  ],
  checklist: [
    'Gom nút của xe thành ba nhóm: ánh sáng và tín hiệu, điều khiển máy, chỉnh hiển thị trên đồng hồ.',
    'Đối chiếu sách hướng dẫn hoặc tem trên xe thay vì đoán theo xe quen, vì cùng ký hiệu mỗi xe có thể làm việc khác.',
    'Làm quen khi tắt máy, dựng xe chắc, bấm từng nút một và ghi lại điều xảy ra, cả bấm ngắn lẫn giữ lâu.',
    'Nhìn kỹ màn hình đang hiện trước khi giữ lâu một nút, vì giữ lâu thường tác động vào đúng màn đó.',
    'Khi đang chạy chỉ dùng pha cốt, xi nhan, còi và nháy pha ngắn, bằng ngón cái và không nhìn xuống.',
    'Lập một bảng nhỏ ba cột (nút, bấm ngắn, giữ lâu), chụp ảnh hoặc dán trong cốp và lập lại mỗi khi đổi xe.'
  ],
  steps: [
    { title: 'Dừng xe chắc và tắt máy', detail: 'Chọn chỗ bằng phẳng, dựng xe vững, tắt máy; chỉ bật khóa điện khi cần xem đồng hồ hoặc thử đèn.' },
    { title: 'Mở sách hướng dẫn hoặc tìm tem ký hiệu', detail: 'Đọc phần nói về tay lái và đồng hồ, xem hình in cạnh nút để biết nút thuộc nhóm nào trong ba nhóm.' },
    { title: 'Bấm từng nút một và ghi lại', detail: 'Bấm ngắn trước, xem đồng hồ hay đèn đổi gì; chỉ giữ lâu khi sách nói an toàn, và nhớ giá trị cũ để đảo lại.' },
    { title: 'Lập bảng nút nhỏ', detail: 'Ghi ba cột: vị trí nút, điều xảy ra khi bấm ngắn, khi giữ lâu; chụp ảnh hoặc dán một tờ trong cốp.' },
    { title: 'Phân loại nút nào dùng lúc chạy', detail: 'Chỉ pha cốt, xi nhan, còi và nháy pha ngắn dùng lúc chạy; mọi nút còn lại để khi dừng hẳn ở chỗ an toàn.' }
  ],
  warnings: [
    'Không bấm nút đồng hồ, chế độ lái hay nút phụ khi đang chạy: mắt rời đường chỉ một lát cũng đủ gây nguy hiểm, hãy tấp vào chỗ an toàn rồi mới thao tác.',
    'Không giữ lâu một nút lạ để thử xem điều gì xảy ra, vì giữ lâu thường là xóa, đặt lại hoặc vào chế độ cài đặt.',
    'Không tự thử nút liên quan đến phanh, ga hay hệ thống điện chính; nút không rõ ký hiệu thì hỏi thợ hoặc xem sách hướng dẫn.'
  ],
  notes: [
    'Vị trí, ký hiệu và cách hoạt động của nút khác nhau tùy xe và tùy đời xe; bài này chỉ là bản đồ chung, sách hướng dẫn của xe mới là nguồn chính xác.',
    'Phần đồng hồ ODO và TRIP, nháy pha, công tắc tắt máy và đèn khẩn cấp đã có bài riêng trên trang; bài này chỉ đặt chúng vào bức tranh chung.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần nói về tay lái, công tắc và đồng hồ hiển thị',
    'Tài liệu đào tạo lái xe an toàn về thao tác khi đang chạy và việc không để mắt rời đường'
  ],
  related: [
    'cong-tac-tat-may-tren-tay-lai-xe-may-dung-khi-nao-va-xu-ly-khi-lo-gat-nham-luc-dang-chay',
    'nhay-den-va-nut-passing-khi-di-xe-may-dung-luc-nao-va-tranh-hieu-nham',
    'den-pha-xe-may-tat-dot-ngot-khi-dang-chay-dem-giu-lai-trong-bong-toi-thu-chuyen-pha-cot-va-ve-nha-an-toan',
    'den-khan-cap-tren-xe-may-bat-khi-nao-va-khi-nao-khong-nen',
    'cong-tac-to-hop-o-tay-lai-xe-may-ket-hoac-khong-an'
  ]
};
