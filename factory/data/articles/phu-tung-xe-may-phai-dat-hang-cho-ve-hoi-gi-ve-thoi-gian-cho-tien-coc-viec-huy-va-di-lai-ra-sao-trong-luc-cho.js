// AI WIKI TOTAL — S01834; hỏi gì khi phụ tùng phải đặt hàng chờ về, không nêu số liệu, mức cọc, giá hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'phu-tung-xe-may-phai-dat-hang-cho-ve-hoi-gi-ve-thoi-gian-cho-tien-coc-viec-huy-va-di-lai-ra-sao-trong-luc-cho',
  title: 'Phụ tùng xe máy phải đặt hàng chờ về: hỏi gì về thời gian chờ, tiền cọc, việc hủy và đi lại ra sao trong lúc chờ',
  seoTitle: 'Phụ tùng xe máy phải đặt hàng: hỏi gì về thời gian chờ và tiền cọc',
  metaDescription: 'Thợ báo phụ tùng xe máy phải đặt hàng chờ về? Nên hỏi gì về thời gian chờ, tiền cọc, việc hủy, xe có đi tạm được không và kiểm tra gì khi hàng về.',
  summary: 'Bài giải thích vì sao một số phụ tùng xe máy tiệm không trữ sẵn mà phải đặt rồi chờ hàng về, và người đi xe nên hỏi gì khi thợ báo như vậy: đặt chi tiết nào, loại nào, ước chừng bao lâu, ai báo khi hàng về, có cọc không, hủy được không, hàng sai thì sao. Bài cũng so sánh đặt qua tiệm với tự tìm nơi khác, nêu ranh giới khi nào xe không được đi tạm, gợi ý cách sắp xếp đi lại trong lúc chờ và những điều cần kiểm tra khi hàng về trước khi thợ lắp.',
  quickAnswer: 'Khi thợ báo phụ tùng phải đặt, hãy hỏi đặt chi tiết nào, loại nào, ước chừng bao lâu, ai báo khi hàng về, có phải cọc không, hủy hoặc đổi được không, hàng sai thì xử lý ra sao, rồi nhờ tiệm xác nhận bằng tin nhắn. Phanh, lốp, tay lái, cổ lái, giảm xóc hoặc rò xăng thì không đi tạm; chi tiết khác thì hỏi thợ. Hàng về, hãy đối chiếu đúng chi tiết và xin lại món cũ.',
  keyPoints: [
    'Phụ tùng phải đặt thường là chi tiết ít hỏng, của dòng xe ít phổ biến hoặc đi theo từng đời xe, nên tiệm không trữ; việc đó chưa hẳn là dấu hiệu tiệm làm ăn thiếu nghiêm túc.',
    'Khi thợ báo phải đặt, hỏi cho rõ đặt chi tiết nào, loại nào, ước chừng bao lâu, ai báo khi hàng về, có cọc không, hủy được không và hàng không vừa thì sao.',
    'Cọc, hủy và đổi trả đều tùy tiệm: hỏi trước, nhờ ghi lại bằng tin nhắn và giữ biên nhận hoặc tin xác nhận, thay vì dựa vào lời nói.',
    'Phanh, lốp, tay lái, cổ lái, giảm xóc hoặc rò xăng thì không đi tạm và không nhờ làm tạm; chi tiết khác cũng nên hỏi thợ xe có đi được không và dấu hiệu nào thì phải dừng.',
    'Hàng về, đối chiếu đúng chi tiết, kiểm tra bao bì, xin lại món cũ, hỏi bảo hành phần thay và chạy thử cẩn thận trước khi tin là xong.'
  ],
  category: 'market',
  hub: 'gia-phu-tung',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['phụ tùng đặt hàng', 'tiền cọc', 'tin nhắn xác nhận', 'chi tiết cũ', 'bảo hành phần thay', 'nơi cung cấp phụ tùng'],
  keywords: ['phụ tùng xe máy phải đặt hàng', 'chờ phụ tùng về để sửa xe', 'đặt cọc phụ tùng xe máy', 'xe chờ phụ tùng có đi được không'],
  sections: [
    P('Vì sao có phụ tùng phải đặt mới có', [
      'Nhiều người nghe thợ nói “món này phải đặt” thì thấy khó hiểu: xe hỏng một chi tiết mà tiệm sửa xe lại không có sẵn. Lý do thường nằm ở cách tiệm trữ hàng. Một tiệm chỉ có chỗ để và vốn để giữ những món bán đều, như đồ hao mòn nhanh và đồ của những dòng xe đang chạy đầy đường. Chi tiết ít khi hỏng, chi tiết của dòng xe ít người dùng hoặc chi tiết đi theo riêng từng đời xe thì có thể nằm trên kệ rất lâu mới bán được một cái, nên tiệm không muốn trữ. Đó là cách làm ăn bình thường, chưa hẳn là dấu hiệu tiệm thiếu năng lực. Gặp món như vậy, tiệm sẽ hỏi nơi cung cấp, và hàng có khi đang nằm ở kho khác chứ chưa chắc đã hết hẳn.',
      'Thêm một lý do ít người nghĩ tới là chuyện chính xác. Hai chi tiết nhìn gần giống nhau vẫn có thể khác ở chỗ bắt, độ dài, hình dáng hoặc phần đi kèm, tùy từng xe và từng đời xe. Vì thế, trước khi đặt, thợ thường phải xác nhận đúng món cần thay, đối chiếu với xe hoặc với chi tiết cũ, rồi mới báo cho nơi cung cấp. Bước này nghe thì chậm, nhưng đặt vội còn mất thời gian hơn, vì hàng về sai lại phải đặt lại từ đầu. Có chi tiết còn phải chờ nơi cung cấp gom đủ hàng rồi mới gửi đi, nên tiệm chỉ ước chừng được chứ khó hứa chắc. Mỗi tiệm và mỗi nguồn hàng lại một khác, nên đừng suy từ trải nghiệm ở chỗ khác sang chỗ này.',
      'Hiểu được lý do giúp bạn đặt câu hỏi đúng thay vì nghi ngờ vô cớ. Có hai câu hỏi hợp lý ngay từ đầu. Câu thứ nhất là vì sao chi tiết này cần thay, tức thợ đã thấy gì trên xe để kết luận như vậy, bởi công chờ hàng chỉ đáng khi việc thay là chắc chắn. Câu thứ hai là chi tiết này có thể có sẵn ở nơi khác hay không, vì tiệm quen nguồn nào thì thường chỉ hỏi nguồn đó. Nếu vẫn còn băn khoăn về kết luận của thợ, bạn có quyền nhờ một tiệm khác xem lại, nhưng với phanh, tay lái hay cổ lái thì đừng để việc xin ý kiến kéo dài trong lúc vẫn tiếp tục đi xe. Chuyện giá cả của món đặt hàng nên bàn riêng, đừng trộn vào phần hỏi về nguồn gốc và thời gian.'
    ]),
    P('Hỏi gì khi thợ báo phải đặt hàng', [
      'Nghe thợ báo phải đặt, nhiều người gật đầu rồi ra về, đến lúc hàng chậm mới nhận ra mình gần như chưa biết gì. Hãy tranh thủ hỏi ngay vài điều cốt lõi. Điều thứ nhất là đặt chính xác chi tiết nào, gọi tên ra sao và nằm ở đâu trên xe, để sau này bạn đối chiếu được với món nhận về. Điều thứ hai là loại nào: món do nhà sản xuất xe cung cấp hay món thay thế do bên khác làm, và hai loại khác nhau ở điểm nào. Loại nào phù hợp thì tùy xe và tùy chi tiết, nên hãy nghe thợ giải thích thay vì chọn theo cảm tính. Điều thứ ba là ước chừng bao lâu hàng về, và mốc ước chừng ấy dựa trên điều gì: nơi cung cấp đã hẹn hay chỉ là dự đoán của tiệm.',
      'Nhóm câu hỏi thứ hai xoay quanh tiền cọc và việc hủy. Hãy hỏi có phải đặt cọc không, cọc giữ cho món nào, và khoản cọc được trừ vào tiền sửa ra sao khi hàng về. Hỏi tiếp: nếu bạn đổi ý, hoặc thợ tháo xe ra mới thấy không cần thay nữa, thì hủy đơn được không và phần cọc xử lý thế nào. Nhiều tiệm coi hàng đặt riêng là khó trả lại vì nơi cung cấp cũng không nhận lại, nhưng điều này tùy tiệm, không thể đoán mà phải hỏi trước. Hãy hỏi cả những tình huống xấu: hàng về lâu hơn hẹn thì bạn được báo bằng cách nào, hàng về sai hoặc không vừa thì ai lo đặt lại, và trong lúc đó khoản cọc nằm ở đâu. Những câu này không hề thất lễ, tiệm làm việc rõ ràng thường trả lời được.',
      'Điều quan trọng nhất là ghi lại những gì đã nói. Lời hứa miệng dễ bị hiểu lệch sau một thời gian, nên hãy gửi cho tiệm một tin nhắn tóm tắt: chi tiết đặt, loại hàng, mốc ước chừng, ai sẽ báo khi hàng về và báo bằng cách nào, có hay không khoản cọc, cùng cách hủy hoặc đổi nếu hàng không đúng. Sau đó nhờ tiệm nhắn lại xác nhận là đúng. Khoản tiền cọc nên có biên nhận hoặc tin nhắn ghi rõ đã nhận và cọc cho món nào. Cách làm này không nhằm đề phòng tiệm; nó giúp cả hai bên nhớ cùng một chuyện. Nếu tiệm ngại ghi lại bất cứ điều gì, đó là lý do để bạn cân nhắc kỹ trước khi giao tiền hay để xe ở lại.'
    ]),
    P('Đặt ở tiệm hay tự tìm nơi khác', [
      'Đặt qua tiệm là lựa chọn mặc định của đa số người, và có lý do chính đáng. Thợ đã nhìn tận mắt chiếc xe, biết món cần thay và có thể đối chiếu với món cũ khi tháo ra, nên việc chọn đúng loại, đúng đời thuộc về tiệm. Hàng về không vừa thì bên làm việc với nơi cung cấp thường là tiệm, bạn không phải tự đi tìm người bán để giải quyết. Đổi lại, bạn phụ thuộc vào nguồn hàng của tiệm: tiệm chỉ hỏi những nơi họ quen, còn thời gian chờ và việc chọn loại hàng cũng nằm trong tay họ. Cách xử lý khi hàng sai, hàng chậm hay khách đổi ý đều tùy từng tiệm, vì vậy mới phải hỏi từ trước. Nếu mốc chờ nghe quá dài, bạn có thể hỏi thêm tiệm có nguồn nào khác không.',
      'Cũng có người muốn tự tìm món, vì thấy hàng sẵn ở nơi khác hoặc muốn tự chọn loại. Hướng này chỉ ổn khi bạn tự bảo đảm được món đúng với xe của mình: phải biết đúng tên chi tiết, đối chiếu mã hoặc hình dạng với xe, và chấp nhận rằng mua nhầm thì người chịu là bạn. Trước khi bỏ tiền, hãy hỏi tiệm có nhận lắp đồ khách mang tới không, vì không phải tiệm nào cũng nhận. Bài về tự mua phụ tùng rồi nhờ thợ lắp đã bàn kỹ cách hỏi tiệm, đối chiếu tại chỗ và giữ lại chi tiết cũ, còn bài về mua phụ tùng trực tuyến bàn việc đối chiếu mã phụ tùng với xe và điều kiện đổi trả. Ở đây chỉ cần nhớ một nguyên tắc: tự mua thì tự lo đúng loại.',
      'Chọn hướng nào còn tùy món cần thay là món gì. Với chi tiết liên quan phanh, tay lái, cổ lái hay giảm xóc, hãy nghiêng về nguồn rõ ràng và người thợ bạn tin, vì hàng không rõ xuất xứ ở những chỗ này không đáng để tiết kiệm công tìm hiểu. Với xe đời cũ hoặc dòng xe ít còn bán, thợ quen loại xe ấy thường biết hàng nằm ở đâu và loại thay thế nào dùng được; chưa chắc nên hỏi ai thì bài về hỏi thợ gì trước khi chốt xe đời cũ có những câu hỏi dùng lại được. Còn nếu đã đặt cọc ở tiệm rồi mới muốn tự mua, hãy báo tiệm và hỏi cách hủy đơn trước, để khỏi vừa mất cọc vừa trùng hàng. Dù chọn cách nào, đừng đổi hướng giữa chừng mà không nói với tiệm.'
    ]),
    P('Trong lúc chờ, xe có đi tạm được không và đi lại ra sao', [
      'Câu trả lời phụ thuộc hoàn toàn vào chi tiết đang chờ. Món đó thuộc phanh, lốp, tay lái, cổ lái hay giảm xóc, hoặc xe đang rò xăng, thì xe không đi tạm, kể cả đoạn ngắn hay chỉ chạy chậm. Những bộ phận này quyết định bạn có dừng được, giữ được hướng và giữ được thăng bằng hay không, và hỏng hóc ở đó có thể diễn biến rất nhanh; xăng rò còn thêm nguy cơ cháy. Cũng đừng nhờ ai “làm tạm cho đi được” hoặc tìm món thay thế không đúng loại trong lúc chờ, vì việc đó đẩy rủi ro sang bạn mà không giải quyết được gốc. Hãy hỏi thợ cách đưa xe đi hoặc để xe lại cho an toàn; nếu đang ở giữa đường, hãy dừng xe ở chỗ an toàn và nhờ người giúp đưa xe đi bằng cách phù hợp.',
      'Với chi tiết không dính trực tiếp tới an toàn, câu trả lời không còn đen trắng như vậy. Đừng tự phán xét món nào quan trọng; hãy hỏi thợ ba điều: xe đi được trong lúc chờ không, đi trong điều kiện nào, và thấy dấu hiệu gì thì phải dừng. Nên nhớ rằng ngay cả chi tiết trông không quan trọng, nếu đã lỏng hoặc nứt thì mảnh rời có thể rơi ra đường hoặc vướng vào chi tiết đang quay. Hãy hỏi thêm xe sẽ nằm ở đâu trong lúc chờ. Để xe lại tiệm thì hỏi tiệm giữ xe ở chỗ nào, đồ để trên xe xử lý ra sao, và chụp ảnh tình trạng xe lúc gửi. Mang xe về thì chỉ nên làm khi thợ nói xe di chuyển được an toàn hoặc đã chỉ cách đưa về.',
      'Phần còn lại là chuyện đi lại hằng ngày, và nên tính trước vì thời gian chờ có thể dài hơn tiệm ước chừng. Hãy liệt kê những chuyến bắt buộc như đi làm, đưa đón con, đi chợ, rồi chia chúng ra: chuyến nào nhờ người thân hoặc đồng nghiệp chở, chuyến nào đi chung với người cùng đường, chuyến nào dùng phương tiện công cộng, chuyến nào gộp lại hoặc dời lịch. Nhờ vả sớm dễ hơn nhờ vào phút chót. Những món cá nhân để trong cốp hay móc trên xe nên lấy ra trước khi gửi xe. Đừng vì kẹt lịch mà ép chiếc xe đang chờ chi tiết liên quan an toàn quay lại đường: nhờ vả có thể phiền một chút, còn tai nạn thì không sửa lại được.'
    ]),
    P('Khi hàng về: kiểm tra gì trước khi lắp', [
      'Khi tiệm báo hàng đã về, đừng vội bảo thợ lắp ngay; hãy dành một lúc đối chiếu. Mở tin nhắn đã ghi lúc đặt và xem món nhận có đúng chi tiết, đúng loại như đã nói không. Nhìn bao bì còn nguyên hay đã rách, đã mở; chi tiết có trầy, móp, nứt, lệch hay thiếu phần đi kèm như gioăng, ốc, đệm không, việc cần phụ kiện nào thì tùy từng chi tiết. Nếu chi tiết cũ đã tháo ra, hãy đặt món mới cạnh món cũ: hình dáng, chỗ bắt và đầu nối nên khớp nhau. Mã in trên bao bì hoặc trên chi tiết mà khác với mã thợ đã báo thì hỏi cho rõ trước khi lắp. Món đã lắp và đã dùng thường khó đổi, nên nghi ngờ thì dừng lại, còn việc đổi trả cụ thể thì tùy tiệm.',
      'Hãy xin lại chi tiết cũ. Giữ lại món đã tháo giúp bạn tận mắt thấy món đó có hỏng thật không, so với món mới nếu còn nghi ngờ, và là bằng chứng rằng việc thay đã được làm. Chụp ảnh món cũ, món mới và vị trí lắp, rồi nhắn cho tiệm nếu có điều gì khác với thỏa thuận ban đầu. Đây cũng là lúc xem lại khoản cọc: nó được trừ vào hóa đơn thế nào, và hóa đơn có ghi đúng chi tiết đã thay hay không. Có tiệm giữ chi tiết cũ vì lý do riêng, chẳng hạn trả lại cho nơi cung cấp; khi đó hãy hỏi xem bạn có được xem và chụp ảnh trước khi họ giữ không. Đừng tự tháo hay thử lại chi tiết cũ, nhất là chi tiết thuộc phanh, lái hay đường xăng.',
      'Trước khi nhận xe, hãy hỏi về bảo hành phần thay. Có hai điều cần rõ: bảo hành áp dụng cho chi tiết, cho công lắp hay cả hai, và nếu có vấn đề sau khi lắp thì bạn mang xe đến đâu, mang theo những gì. Hỏi thêm điều kiện nào làm mất bảo hành, rồi nhờ ghi bằng chữ trên hóa đơn hoặc tin nhắn. Sau khi lắp xong, hãy chạy thử đoạn ngắn ở nơi vắng, thật chậm lúc đầu, nghe tiếng lạ và cảm nhận lực bóp phanh hay độ lái nếu chi tiết thuộc hai bộ phận ấy. Thấy khác thường như tay lái lệch, phanh bất thường, rò rỉ hoặc tiếng kêu mới thì dừng xe an toàn và quay lại tiệm, đừng cố chạy tiếp cho quen. Việc cần chạy rà hay kiểm tra lại sau một thời gian dùng thì tùy xe, hãy hỏi thợ.'
    ])
  ],
  checklist: [
    'Hỏi rõ đặt chi tiết nào, loại nào, ước chừng bao lâu và ai báo khi hàng về, rồi ghi lại bằng tin nhắn.',
    'Hỏi có phải cọc không, cọc giữ cho món nào, trừ vào tiền sửa ra sao, đổi ý hoặc hàng sai thì xử lý thế nào.',
    'Hỏi thợ xe có đi tạm được không; phanh, lốp, tay lái, cổ lái, giảm xóc hoặc rò xăng thì không đi.',
    'Lên sẵn cách đi lại trong lúc chờ: nhờ người thân, đi chung, dùng phương tiện khác hoặc dời lịch.',
    'Khi hàng về, đối chiếu đúng chi tiết, kiểm tra bao bì, xin lại món cũ và hỏi bảo hành phần thay.'
  ],
  steps: [
    { title: 'Hỏi cho rõ lúc thợ báo phải đặt', detail: 'Hỏi vì sao cần thay, đặt chi tiết nào và loại nào, ước chừng bao lâu, ai báo khi hàng về, có cọc không, hủy hoặc đổi được không.' },
    { title: 'Gửi tin nhắn tóm tắt và nhờ xác nhận', detail: 'Ghi lại những điều đã thỏa thuận, nhờ tiệm nhắn lại xác nhận và giữ biên nhận hoặc tin nhắn nhận cọc nếu có.' },
    { title: 'Quyết định xe nằm ở đâu và đi lại ra sao', detail: 'Hỏi thợ xe có đi tạm được không; chi tiết an toàn thì không đi, đồng thời sắp xếp người chở hoặc phương tiện khác cho các chuyến bắt buộc.' },
    { title: 'Đối chiếu khi hàng về trước khi lắp', detail: 'So món nhận với tin nhắn đã ghi, xem bao bì và tình trạng chi tiết, xin lại món cũ, hỏi bảo hành rồi chạy thử cẩn thận sau khi lắp.' }
  ],
  warnings: [
    'Xe hỏng phanh, lốp, tay lái, cổ lái, giảm xóc hoặc rò xăng thì không đi tạm, kể cả đoạn ngắn; dừng xe ở chỗ an toàn và nhờ thợ hướng dẫn cách đưa xe đi.',
    'Không nhờ ai làm tạm cho đi được và không tự chế, tự sửa tạm trong lúc chờ hàng; các việc này đẩy rủi ro sang người đi xe mà không giải quyết được nguyên nhân.',
    'Không giao tiền hay để xe lại khi tiệm không chịu ghi lại điều đã thỏa thuận; hàng nghi sai hoặc không khớp thì dừng lại, không cố lắp.'
  ],
  notes: [
    'Việc đặt cọc, hủy đơn, đổi trả và bảo hành phần thay khác nhau giữa các tiệm; bài chỉ nêu những câu nên hỏi, không nêu điều kiện hay mức cụ thể nào.',
    'Chi tiết nào đi được tạm, loại hàng nào dùng được và cách đưa xe đi an toàn đều tùy xe; hãy hỏi thợ có chuyên môn và đối chiếu sách hướng dẫn của xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bảo dưỡng và các chi tiết cần thay đúng loại',
    'Tài liệu phụ tùng của nhà sản xuất xe dành cho đúng dòng xe và đời xe'
  ],
  related: ['tu-mua-phu-tung-roi-nho-tho-lap-hoi-tiem-co-nhan-khong-doi-chieu-tai-cho-va-giu-lai-chi-tiet-cu', 'mua-phu-tung-xe-may-online', 'mua-xe-may-doi-cu-hoac-dong-it-con-ban-hoi-tho-gi-ve-phu-tung-truoc-khi-chot', 'hoi-hai-tiem-cung-mot-viec-so-bao-gia-theo-pham-vi-cong-viec-phu-tung-va-loi-hen-thay-vi-chi-nhin-tong-tien', 'tho-sua-xe-tin-cay']
};
