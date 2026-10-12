// AI WIKI TOTAL: cách đọc báo giá sửa xe, không nêu số liệu, mức giá hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'doc-bao-gia-sua-xe-truoc-khi-dong-y',
  title: 'Đọc báo giá sửa xe trước khi đồng ý: hỏi gì để biết việc nào cần làm ngay, việc nào có thể chờ',
  seoTitle: 'Đọc báo giá sửa xe máy: việc nào cần làm ngay, việc nào có thể chờ',
  metaDescription: 'Cách đọc báo giá sửa xe máy: chia hạng mục theo mức an toàn, hỏi nguyên nhân và hậu quả nếu hoãn, thỏa thuận khoản phát sinh và xin ghi bằng văn bản.',
  summary: 'Bài hướng dẫn cách đọc một bản báo giá sửa xe máy trước khi đồng ý, dành cho người nhận danh sách việc kèm tổng tiền mà không biết việc nào gấp, việc nào hoãn được. Nội dung gồm những thông tin một bản báo giá tốt cần ghi rõ, cách chia hạng mục thành ba nhóm là an toàn, vận hành và bảo dưỡng định kỳ, các câu hỏi về nguyên nhân và hậu quả nếu hoãn, cách thỏa thuận khoản phát sinh, và cách lưu báo giá để đối chiếu khi nhận xe. Bài không nêu mức giá nào và luôn khuyến khích xin ghi bằng văn bản.',
  quickAnswer: 'Hãy xin báo giá viết ra, tách tiền công với phụ tùng, rồi chia từng dòng vào ba nhóm: an toàn như phanh, lốp, lái cần xử lý trước; ảnh hưởng vận hành cần theo dõi sát; bảo dưỡng định kỳ có thể xếp lịch. Với mỗi dòng, hỏi thợ nguyên nhân và hậu quả nếu hoãn, đồng thời xin ghi bằng văn bản mọi khoản phát sinh. Cách chia này chỉ giúp bạn hỏi đúng, còn chẩn đoán thuộc về thợ.',
  keyPoints: [
    'Báo giá tốt liệt kê từng hạng mục, tách tiền công với phụ tùng, ghi rõ động từ thay, vệ sinh, kiểm tra hay điều chỉnh; một dòng gộp kèm tổng tiền thì chưa đủ để bạn quyết định.',
    'Chia mỗi dòng vào một trong ba nhóm: an toàn gồm phanh, lốp, lái và đèn; ảnh hưởng vận hành; bảo dưỡng định kỳ. Nhóm an toàn không nên xếp vào việc để sau khi chưa nghe thợ giải thích.',
    'Với từng hạng mục hãy hỏi thợ thấy gì trên xe, có cho xem chi tiết hỏng được không, và hậu quả cụ thể nếu hoãn thêm một thời gian là gì.',
    'Phát sinh trong lúc sửa cần được báo trước, xác nhận từng khoản và có dấu vết bằng chữ; câu cứ làm đi cho xong biến mọi đề xuất thành việc đã được duyệt.',
    'Giữ bản báo giá cuối, đối chiếu từng dòng khi nhận xe, xin ghi điều kiện bảo hành, và dừng đi xe nếu phanh, lốp hay lái có điều bất thường sau khi sửa.'
  ],
  category: 'guide',
  hub: 'bao-duong',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['báo giá sửa xe', 'tiền công', 'phụ tùng thay thế', 'hạng mục sửa chữa', 'khoản phát sinh', 'điều kiện bảo hành'],
  keywords: ['báo giá sửa xe máy', 'hỏi giá sửa xe trước khi làm', 'việc nào cần sửa ngay', 'cách đọc báo giá sửa xe'],
  sections: [
    P('Báo giá tốt cần ghi rõ những gì', [
      'Một bản báo giá đáng tin là bản mà đọc xong, bạn hình dung được thợ sẽ làm gì trên xe của mình. Báo giá chỉ có một dòng kiểu sửa tổng thể kèm một con số cuối trang thì gần như không cho bạn gì để so sánh hay hỏi lại. Hãy tìm bản liệt kê từng hạng mục, mỗi hạng mục có tên việc, tên chi tiết liên quan và đơn vị tính rõ ràng. Tiền công và tiền phụ tùng nên tách thành hai phần để bạn biết đâu là sức người, đâu là vật tư. Lời báo miệng chỉ nằm trong trí nhớ của hai bên, dễ lệch sau vài hôm, nên trước khi để xe lại, hãy xin thợ ghi ra giấy hoặc nhắn tin xác nhận. Xin như vậy là chuyện bình thường, không phải dấu hiệu nghi ngờ.',
      'Phần công cần đọc kỹ động từ. Thay, vệ sinh, kiểm tra, điều chỉnh và siết lại là năm việc rất khác nhau về công sức lẫn vật tư. Thay nghĩa là tháo chi tiết cũ, lắp chi tiết mới. Vệ sinh là làm sạch chi tiết đang dùng để dùng tiếp. Kiểm tra thường chỉ là nhìn, đo, thử và nhìn chung không tốn vật tư. Điều chỉnh là chỉnh độ lỏng chặt hay khe hở của chi tiết hiện có. Một dòng chỉ ghi bảo dưỡng phần phanh chưa nói được thợ sẽ thay má phanh hay chỉ làm sạch, vì thế hãy nhờ ghi rõ động từ cho từng dòng. Chỗ nào chỉ ghi chung chung như xử lý, làm lại hay kiểm tra tổng thể, hãy hỏi cụ thể sẽ làm những bước nào và dùng vật tư gì.',
      'Phần phụ tùng cần ghi tên chi tiết, số lượng viết bằng chữ và nguồn gốc của loại sẽ dùng. Hãy hỏi đó là phụ tùng mới hay đã qua sử dụng, loại theo đúng xe hay loại tương thích dùng thay thế, vì những lựa chọn này khác nhau về độ bền và khả năng bảo hành, còn mức độ phù hợp thì tùy từng xe. Báo giá tốt cũng nên có thời gian xe nằm tiệm dự kiến, ngày lập, thông tin nhận dạng xe và tình trạng xe lúc gửi, như vết xước hay móp đã có sẵn. Cuối cùng là điều kiện bảo hành: áp dụng cho công hay cho phụ tùng, kéo dài bao lâu, và những trường hợp nào không được tính. Mọi điều đó nên nằm trên cùng tờ giấy với danh sách việc.'
    ]),
    P('Chia hạng mục theo mức cần gấp', [
      'Có bản liệt kê rồi, hãy lấy bút chia từng dòng vào ba nhóm theo mức cần gấp. Nhóm thứ nhất là an toàn: phanh, lốp, hệ thống lái, cùng đèn chiếu sáng và đèn báo phanh giúp người khác nhìn thấy bạn. Hỏng ở nhóm này có thể làm xe không dừng được, mất kiểm soát hoặc khó nhận ra giữa đường. Nhóm thứ hai là ảnh hưởng vận hành: xe khó nổ, giật, nóng máy, hao xăng, ồn bất thường. Những việc này chưa chắc nguy hiểm ngay nhưng để lâu có thể kéo theo hư thêm. Nhóm thứ ba là bảo dưỡng định kỳ như nhớt, lọc gió, bugi và chỉnh sửa theo lịch, nhằm giữ xe bền chứ không chữa một triệu chứng đang có. Cách chia này không thay chẩn đoán của thợ, chỉ giúp bạn biết nên hỏi gì trước.',
      'Nhóm an toàn đáng được đối xử nghiêm nhất. Dòng nào dính tới phanh, lốp hay lái, đừng vội xếp vào việc để sau trước khi nghe thợ giải thích vì sao nó chưa gấp. Có những dấu hiệu bạn tự nhận ra mà không cần dụng cụ: bóp phanh thấy lún sâu hoặc hụt, phanh kêu rít kim loại, lốp có chỗ phồng, nứt hay rách, tay lái rung mạnh hoặc xe tự lệch về một bên. Gặp các dấu hiệu đó, hãy bóp phanh, dừng xe ở chỗ an toàn và ngưng đi, nhờ thợ kiểm tra hoặc đưa xe đi bằng dịch vụ chở xe thay vì cố chạy nốt quãng đường. Hạng mục an toàn nằm trong báo giá thì nên làm trước, rồi mới tính tới phần còn lại.',
      'Hai nhóm còn lại có thể sắp xếp theo thứ tự và thời điểm, nhưng chờ được không có nghĩa là bỏ qua. Với nhóm vận hành, hãy hỏi triệu chứng hiện nay có thể ảnh hưởng gì đến việc đi hằng ngày và có thể xấu đi nhanh hay chậm. Với nhóm định kỳ, hãy đối chiếu với sách hướng dẫn của nhà sản xuất: chu kỳ phụ thuộc từng dòng xe và cách dùng, nên lời thợ chỉ là một nguồn tham khảo để so với sách. Dòng nào thợ không xếp được vào nhóm nào, hoặc xếp được vào cả ba, là dòng cần hỏi lại. Việc đã quyết hoãn nên ghi vào nhật ký bảo dưỡng, kèm lý do và dấu hiệu sẽ khiến bạn quay lại làm sớm hơn, để không quên và không phải bắt đầu hỏi lại từ đầu.'
    ]),
    P('Câu hỏi để hiểu nguyên nhân và hậu quả nếu hoãn', [
      'Sau khi chia nhóm, bước tiếp theo là hỏi nguyên nhân, và nên hỏi bằng câu mở để thợ giải thích thay vì chỉ trả lời có hay không. Câu đầu tiên: thợ đã thấy gì trên xe dẫn tới dòng này, chi tiết đang mòn, rò, nứt hay lỏng. Câu thứ hai: có thể cho xem chi tiết đó ngay trên xe được không, hoặc chụp ảnh nếu thợ đồng ý. Người làm nghề thường sẵn lòng chỉ ra chỗ hỏng, vì xem tận mắt là cách nhanh nhất để hai bên cùng hiểu. Câu thứ ba: hiện tượng bạn gặp, như tiếng ồn, rung hay khó nổ, có khớp với nguyên nhân thợ nêu hay không. Một nguyên nhân hợp lý thường giải thích được cả triệu chứng bạn mô tả lẫn dòng ghi trong báo giá.',
      'Câu hỏi quan trọng nhất của bài này là hậu quả nếu hoãn. Hãy hỏi thẳng: để thêm một thời gian thì điều gì có thể xảy ra, và dấu hiệu nào cho thấy phải quay lại sớm hơn. Câu trả lời tốt là câu cụ thể, chẳng hạn nói rõ hậu quả thuộc về an toàn, về hư kéo theo chi tiết khác, hay chỉ là khó chịu khi dùng. Câu trả lời kiểu để lâu hỏng nặng lắm mà không kèm giải thích thì chưa đủ để bạn quyết định, nhưng cũng đừng vội cho rằng thợ nói quá. Hãy đề nghị thợ nói chi tiết hơn, rồi ghi lại điều nghe được. Nhớ rằng thợ cũng không thể biết chính xác bao lâu nữa một chi tiết sẽ hỏng, nên lời đáp trung thực thường mang tính khả năng chứ không phải lời hứa.',
      'Hai câu hỏi cuối giúp bạn tối ưu quyết định. Thứ nhất: việc nào phụ thuộc việc nào. Có những dòng nên làm cùng nhau vì chung công tháo lắp, và gộp lại thường hợp lý hơn làm riêng hai lần; có những dòng không liên quan, hoàn toàn tách được. Thứ hai: có phương án khác không, chẳng hạn vệ sinh hay điều chỉnh thay vì thay, hoặc ngược lại, mỗi phương án được và mất gì. Còn phân vân về một hạng mục lớn thì bạn có thể mang bản báo giá viết ra đến một tiệm khác để xin ý kiến thứ hai. Trong trường hợp xe đang ở tình trạng không an toàn để chạy, hãy nhờ chở xe thay vì tự lái đến nơi khác.'
    ]),
    P('Phát sinh trong lúc sửa và cách thỏa thuận', [
      'Phát sinh là việc không có trong bản báo giá ban đầu mà xuất hiện khi xe đã nằm trong tiệm. Có phát sinh chính đáng: tháo ra mới thấy chi tiết bên trong mòn hoặc hỏng mà bên ngoài không nhìn thấy được. Cũng có phát sinh chỉ là lời đề xuất thêm vì tiện làm luôn. Hai loại này cần cách xử lý khác nhau, và điểm chung là phải được báo trước khi làm. Thỏa thuận rõ ràng nên có ngay từ lúc nhận báo giá: thợ sẽ liên hệ trước mỗi khi thấy việc ngoài danh sách, nói rõ việc gì, vì sao cần, tốn thêm bao nhiêu công và phụ tùng, và làm ngay hay để dịp sau. Nhờ vậy, cuộc gọi báo phát sinh là một bước bình thường của quy trình chứ không gây bất ngờ.',
      'Để thỏa thuận có hiệu lực, hãy để lại số điện thoại thường trực và nói rõ bạn muốn được báo trước. Xác nhận từng khoản một, đừng đồng ý gộp bằng câu cứ làm đi cho xong, vì câu đó biến mọi thứ thợ thấy cần thành việc đã được duyệt. Sau cuộc gọi, hãy nhờ thợ nhắn lại nội dung vừa nói hoặc tự nhắn tóm tắt: việc phát sinh, lý do và khoản bạn đồng ý, để có dấu vết bằng chữ. Trường hợp thợ chưa liên lạc được vì bạn không nghe máy, việc nên làm là chờ chứ không tự làm thêm; cách xử lý này nên được nói trước. Đồng thời, hạng mục bạn đã từ chối ở bước báo giá không nên tự quay lại danh sách mà không có xác nhận mới.',
      'Nhận được thông tin phát sinh, hãy áp dụng lại ba nhóm và những câu hỏi ở phần trước. Hỏi nguyên nhân, xin xem hoặc chụp ảnh chi tiết, hỏi hậu quả nếu hoãn. Hạng mục thuộc nhóm an toàn thường nên làm ngay trong lần này vì xe đã được tháo sẵn; hạng mục khác có thể hẹn lần sau, miễn là thợ xác nhận xe vẫn lắp lại gọn gàng và an toàn để chạy. Quyết định dừng ở giữa chừng thì cần hỏi rõ phần công đã làm được ghi nhận thế nào và xe đã an toàn để lấy về chưa, rồi ghi lại trên tờ báo giá hay trong tin nhắn. Mục tiêu không phải là chặn mọi phát sinh mà là để mỗi khoản đều có lý do, có sự đồng ý và có dấu vết.'
    ]),
    P('Lưu báo giá và đối chiếu khi nhận xe', [
      'Bản báo giá cuối cùng, gồm cả khoản phát sinh đã đồng ý, là tài liệu bạn nên giữ. Hãy chụp ảnh tờ giấy hoặc lưu tin nhắn, kèm tên tiệm và ngày làm, rồi ghi vào nhật ký bảo dưỡng của xe. Mỗi lần ghi cần có việc đã làm, chi tiết đã thay, việc đã hoãn kèm lý do và dấu hiệu theo dõi. Thói quen này mất ít thời gian nhưng cho bạn một lịch sử thật của xe, giúp lần sau ở tiệm khác bạn không phải nhớ lại từ đầu, và cũng giúp tránh làm lại một việc vừa được làm cách đây không lâu. Với xe cũ hay xe đổi chủ, bản ghi này còn cho người đến sau biết xe đã được chăm sóc ra sao.',
      'Lúc nhận xe, hãy đối chiếu từng dòng giữa bản báo giá cuối cùng và thực tế. Dòng ghi thay thì nên xin xem chi tiết cũ đã tháo ra, hoặc nhờ thợ chỉ chi tiết mới trên xe; dòng ghi vệ sinh hay kiểm tra thì hỏi lại kết quả thợ đã thấy. Xem có dòng nào xuất hiện trên phiếu cuối mà bạn chưa từng đồng ý hay không, và các khoản có khớp với phần đã thỏa thuận không. Sau đó đi thử một đoạn ngắn, chậm, ở chỗ vắng: bóp phanh nhẹ xem xe dừng đều, để ý tay lái có thẳng và có tiếng lạ nào không. Thấy phanh, lốp hay lái có gì bất thường, hãy dừng lại và quay về tiệm ngay, đừng tăng tốc để thử thêm.',
      'Phần cuối cùng là bảo hành và việc theo dõi. Hãy xin ghi điều kiện bảo hành lên phiếu cuối: phần nào được bảo hành, kéo dài bao lâu, cần mang theo giấy tờ gì khi quay lại. Với các hạng mục đã hoãn, hãy đặt nhắc việc trong điện thoại hoặc nhật ký, kèm điều kiện sẽ khiến bạn làm sớm hơn. Sau vài ngày sử dụng, triệu chứng cũ quay lại hoặc xuất hiện triệu chứng lạ thì mang theo bản báo giá để đối chiếu, và nói chuyện với thợ bằng sự việc cụ thể thay vì cảm giác. Giữ thái độ hợp tác thường giúp việc xử lý nhanh hơn, và bản ghi của bạn là cơ sở để cả hai bên cùng tìm ra nguyên nhân thật.'
    ])
  ],
  checklist: [
    'Có bản liệt kê từng hạng mục, tách tiền công với phụ tùng, mỗi dòng ghi rõ là thay, vệ sinh, kiểm tra hay điều chỉnh.',
    'Mỗi dòng đã được xếp vào một nhóm: an toàn, ảnh hưởng vận hành hoặc bảo dưỡng định kỳ.',
    'Với từng hạng mục quan trọng, bạn đã hỏi thợ thấy gì trên xe, có xem được chi tiết hỏng không và hậu quả nếu hoãn.',
    'Thợ đã hứa báo trước mọi việc ngoài danh sách, và bạn đã xin xác nhận từng khoản phát sinh bằng chữ.',
    'Đã chụp hoặc lưu bản báo giá cuối, điều kiện bảo hành, rồi ghi việc đã làm và việc đã hoãn vào nhật ký bảo dưỡng.'
  ],
  steps: [
    { title: 'Xin báo giá viết ra', detail: 'Nhờ thợ liệt kê từng hạng mục, tách tiền công với phụ tùng, ghi rõ động từ thay, vệ sinh, kiểm tra hay điều chỉnh, kèm điều kiện bảo hành.' },
    { title: 'Chia hạng mục theo mức cần gấp', detail: 'Xếp từng dòng vào nhóm an toàn, ảnh hưởng vận hành hoặc bảo dưỡng định kỳ; làm trước nhóm an toàn, các nhóm còn lại sắp theo thời điểm hợp lý.' },
    { title: 'Hỏi nguyên nhân và hậu quả nếu hoãn', detail: 'Hỏi thợ đã thấy gì trên xe, xin xem hoặc chụp ảnh chi tiết hỏng, hỏi hậu quả cụ thể và dấu hiệu cần quay lại sớm hơn nếu quyết định hoãn.' },
    { title: 'Thỏa thuận phát sinh và đối chiếu khi nhận xe', detail: 'Xác nhận từng khoản phát sinh bằng tin nhắn, giữ bản báo giá cuối, đối chiếu từng dòng khi nhận xe và thử xe chậm ở chỗ vắng trước khi đi xa.' }
  ],
  warnings: [
    'Phanh hụt hoặc lún sâu, phanh kêu rít kim loại, lốp phồng nứt rách, tay lái rung mạnh hay xe tự lệch là lý do dừng đi xe: bóp phanh, dừng xe an toàn và nhờ thợ hoặc dịch vụ chở xe, không cố chạy tiếp.',
    'Không xếp hạng mục phanh, lốp, lái vào việc để sau khi chưa nghe thợ giải thích rõ nguyên nhân và hậu quả; các nhóm khác mới là nhóm có thể sắp lịch.',
    'Không đồng ý gộp bằng câu cứ làm đi cho xong; mỗi khoản phát sinh cần được báo trước, nói rõ lý do và xác nhận riêng.'
  ],
  notes: [
    'Cách chia ba nhóm chỉ là công cụ giúp bạn đặt câu hỏi; việc chẩn đoán, kiểm tra độ an toàn của xe và quyết định kỹ thuật cuối cùng thuộc về thợ có chuyên môn.',
    'Chu kỳ bảo dưỡng, loại phụ tùng phù hợp và điều kiện bảo hành khác nhau tùy dòng xe và từng cơ sở sửa chữa; hãy đối chiếu với sách hướng dẫn của xe và với những gì được ghi trên phiếu.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bảo dưỡng định kỳ và các hạng mục an toàn',
    'Phiếu báo giá, phiếu nhận xe và điều kiện bảo hành do cơ sở sửa chữa cung cấp'
  ],
  related: ['doc-hoa-don-bao-duong-xe-may', 'tho-sua-xe-tin-cay', 'nhat-ky-bao-duong-xe-may', 'chi-phi-phat-sinh-sau-khi-mua-xe-cu', 'chon-tiem-sua-xe-may-dang-tin']
};
