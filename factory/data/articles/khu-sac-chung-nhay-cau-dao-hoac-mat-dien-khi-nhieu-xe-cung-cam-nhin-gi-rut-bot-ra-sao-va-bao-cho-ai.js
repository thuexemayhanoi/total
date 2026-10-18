// AI WIKI TOTAL — S01828; phân biệt cầu dao của khu với bảo vệ trên xe, dấu hiệu cần tránh xa, báo cho ai; không số liệu, không thao tác điện.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'khu-sac-chung-nhay-cau-dao-hoac-mat-dien-khi-nhieu-xe-cung-cam-nhin-gi-rut-bot-ra-sao-va-bao-cho-ai',
  title: 'Khu sạc chung nhảy cầu dao hoặc mất điện khi nhiều xe cùng cắm: nhìn gì, rút bớt ra sao và báo cho ai',
  seoTitle: 'Khu sạc chung nhảy cầu dao: nhìn gì, rút xe ra sao, báo cho ai',
  metaDescription: 'Khu sạc chung nhảy cầu dao hoặc mất điện lúc đông xe cắm: cách phân biệt với bảo vệ trên xe, dấu hiệu phải tránh xa, việc làm với xe mình và báo cho ai.',
  summary: 'Bài giải thích vì sao cầu dao của khu để xe nhảy hoặc cả khu mất điện lúc nhiều xe điện cùng sạc, và cách phân biệt với lớp bảo vệ nằm trên xe và bộ sạc. Nội dung nêu các dấu hiệu nguy hiểm cần tránh xa, lý do không tự đóng cầu dao nhiều lần hay dồn xe vào ổ nối, việc nên làm với xe của mình, cách báo cho ban quản lý, chủ nhà hoặc người phụ trách điện kèm những chi tiết cần kể, và cách cùng sắp xếp lâu dài như chia giờ sạc, nhờ thợ điện có chuyên môn kiểm tra.',
  quickAnswer: 'Cầu dao của khu nhảy là lớp bảo vệ chung của cả hệ thống, khác với bảo vệ riêng trên xe và bộ sạc; nhìn đèn trên bộ sạc, đèn trên xe và xem các xe khác có cùng mất điện không để phân biệt. Thấy mùi khét, khói, nhựa chảy, tia lửa hoặc nền ướt quanh ổ thì tránh xa, báo người quản lý, có cháy thì gọi cứu hỏa. Đừng tự đóng cầu dao nhiều lần hay cắm dồn vào ổ nối.',
  keyPoints: [
    'Cầu dao của khu bảo vệ cả mạch chung nên có thể nhảy dù từng xe đều bình thường; lớp bảo vệ trên xe và bộ sạc chỉ ngắt riêng xe đó.',
    'Để phân biệt, nhìn đèn trên bộ sạc, đèn hoặc thông báo trên xe và xem các xe khác có cùng ngừng nạp không; đây chỉ là gợi ý, không phải chẩn đoán.',
    'Mùi khét, khói, nhựa chảy, tia lửa, ổ hay phích có dấu hiệu cháy xém, nền ướt quanh ổ: tránh xa, báo người quản lý, có cháy thì gọi cứu hỏa.',
    'Không tự đóng cầu dao nhiều lần hay cắm dồn vào ổ nối: nhảy liên tục là dấu hiệu hệ thống chưa đủ cho số xe đang cắm, ép đóng lại có thể gây nóng và cháy.',
    'Báo ban quản lý, chủ nhà hoặc người phụ trách điện kèm giờ xảy ra, mức đông xe và dấu hiệu thấy được; cùng chia giờ sạc và nhờ thợ điện có chuyên môn kiểm tra.'
  ],
  category: 'map',
  hub: 'tram-sac',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['cầu dao của khu', 'khu sạc chung', 'bộ sạc xe điện', 'ổ cắm và phích sạc', 'ban quản lý tòa nhà', 'thợ điện có chuyên môn'],
  keywords: ['khu sạc chung nhảy cầu dao', 'nhiều xe điện cùng sạc bị mất điện', 'cầu dao khu để xe nhảy khi sạc', 'sạc xe điện ở tòa nhà bị ngắt điện'],
  sections: [
    P('Cầu dao của khu khác cầu dao trên xe ra sao', [
      'Cầu dao của khu để xe là thiết bị bảo vệ đặt trong tủ điện chung, trông coi cả dãy ổ cắm và đoạn dây phía sau nó chứ không riêng chiếc xe nào. Nhiệm vụ của nó là tự ngắt mạch khi điện qua dây vượt mức hệ thống chịu được, hoặc khi xảy ra chạm chập hay rò điện, để dây dẫn và ổ cắm không nóng lên đến mức gây hại. Vào giờ đông người về cắm sạc, cầu dao có thể nhảy dù từng chiếc xe đều bình thường: thứ bị vượt quá là sức chịu chung của cả hệ thống. Cầu dao nhảy trong khu sạc chung vì vậy không có nghĩa xe của bạn hỏng, cũng không có nghĩa xe của ai khác hỏng; nó chỉ báo rằng mạch điện đang quá sức hoặc có sự cố.',
      'Xe điện và bộ sạc có lớp bảo vệ riêng, nằm phía sau ổ cắm. Bộ sạc thường có đèn cho biết đang cấp điện, đã nạp xong hay đang gặp lỗi; xe có thể báo bằng đèn trên bảng đồng hồ, tiếng kêu hoặc dòng chữ khi việc nạp bị ngắt; một số xe còn có cầu dao hoặc chế độ tự ngắt riêng khi phát hiện điều bất thường. Mọi chi tiết này tùy xe và tùy bộ sạc, nên hãy đọc sách hướng dẫn của xe để biết mỗi đèn mang nghĩa gì. Điểm cốt lõi là lớp bảo vệ trên xe chỉ ngắt riêng chiếc xe ấy, các xe bên cạnh thường vẫn nạp, còn cầu dao của khu nhảy thì nhiều xe ngừng nạp cùng lúc. Phần cầu dao ngay trên xe điện chỉ nhắc ngắn ở đây.',
      'Muốn phân biệt, hãy quan sát thay vì thử. Nhìn đèn trên bộ sạc của mình còn sáng hay đã tắt, nhìn đèn hoặc thông báo trên xe, rồi để ý xung quanh xem các xe khác có cùng ngừng nạp, đèn chiếu sáng của khu có tắt theo hay không. Cả khu tối và mọi bộ sạc cùng tắt thì nghiêng về cầu dao của khu hoặc nguồn cấp chung. Chỉ riêng xe mình báo lỗi, các xe bên cạnh vẫn nạp bình thường, thì nghiêng về lớp bảo vệ trên xe hoặc bộ sạc, và nên để thợ có chuyên môn xem. Đây chỉ là gợi ý để mô tả sự việc cho đúng người, không phải chẩn đoán, và bạn không cần mở tủ điện hay chạm vào thiết bị nào để biết điều đó.'
    ]),
    P('Dấu hiệu nguy hiểm phải tránh xa', [
      'Có một nhóm dấu hiệu mà thấy một cái là phải lùi ra, không cần đoán xem nguyên nhân nằm ở đâu. Mùi khét hoặc mùi nhựa cháy cho thấy vỏ dây, phích hay ổ có thể đang nóng quá mức. Khói, dù mỏng, là lý do để rời xa ngay. Nhựa quanh ổ hay đầu phích chảy, phồng, đổi màu hoặc ám đen cho thấy đã có nhiệt kéo dài. Tia lửa, tiếng lách tách hay tiếng ù lạ phát ra từ ổ là dấu hiệu tiếp xúc không tốt hoặc chập. Nền ướt, đọng nước quanh ổ cũng thuộc nhóm này vì nước có thể làm điện đi lạc sang nơi không nên đi. Chỉ cần một dấu hiệu trên xuất hiện, hãy coi cả khu vực đang có nguy cơ, kể cả khi điện đã ngắt, vì có thể có người bật lại.',
      'Phản ứng đúng là tránh xa, không chạm, không cúi sát để ngửi hay nhìn cho rõ. Đừng dội nước vào ổ hay vào xe, đừng dùng tay kéo phích đang có mùi khét hoặc có dấu hiệu cháy xém, đừng gạt thử công tắc nào. Hãy nhắc những người đứng gần lùi ra, rồi báo ngay cho người quản lý hoặc người phụ trách điện của nơi đó. Nếu đã có lửa hoặc khói bốc lên, ưu tiên là rời khỏi khu vực và gọi cứu hỏa theo số khẩn cấp quen thuộc ở địa phương, nói rõ nơi xảy ra sự việc. Xe, bộ sạc và đồ đạc đều có thể thay thế; sức khỏe thì không, nên đừng quay lại lấy xe khi lửa hay khói còn đó. Việc dập lửa nên để lực lượng có chuyên môn đảm nhận.',
      'Một số dấu hiệu khó thấy hơn nhưng đáng ghi nhận. Phích cắm lỏng, lung lay hoặc ổ cắm hở mặt, nứt vỡ cho thấy chỗ tiếp xúc có thể sinh nhiệt khi sạc. Vết đen quanh lỗ cắm là dấu của lần đánh lửa hoặc nóng trước đó, dù hiện tại ổ vẫn dùng được. Dây kéo dài chạy ngang lối đi, bị xe cán hay vắt qua nơi đọng nước cũng là điểm yếu. Bạn không cần, và không nên, sờ vào ổ để kiểm tra có nóng hay không; những gì nhìn và nghe được từ khoảng cách vừa đủ đã đủ để quyết định có đứng lại gần hay không. Hãy chụp ảnh từ xa nếu thấy an toàn, vì hình ảnh rõ ràng giúp người phụ trách hiểu vấn đề nhanh hơn lời mô tả.'
    ]),
    P('Vì sao không tự đóng cầu dao nhiều lần', [
      'Cầu dao nhảy là thiết bị đang làm đúng việc của nó, không phải một sự cố cần chữa bằng cách bật lại ngay. Sau khi có điện trở lại mà cầu dao nhảy tiếp, nguyên nhân vẫn còn nguyên: hoặc hệ thống chưa đủ sức cho số xe đang cắm cùng lúc, hoặc có một điểm chạm chập hay rò điện chưa ai tìm ra. Nhảy liên tục vì thế là lời nhắc rằng cách dùng hiện tại đang vượt khả năng của mạch điện, chứ không phải chuyện xui rủi của một buổi tối. Người đứng trước tủ điện hầu như không thể nhìn ra nguyên nhân bằng mắt thường; việc xác định cần dụng cụ, hiểu biết và quyền can thiệp mà người cắm sạc thường không có.',
      'Ép cầu dao đóng lại nhiều lần có thể biến lời cảnh báo thành sự cố. Mỗi lần bật lại lúc nguyên nhân chưa hết, dây dẫn, mối nối, phích và ổ cắm lại bị nung thêm một đợt, và nhiệt có thể tích dần ở những chỗ tiếp xúc kém mà từ ngoài không thấy. Người bật lại cũng thường không biết phía sau có đang ướt, đang hở hay có thiết bị lỗi hay không, nên tự mình thao tác ở tủ điện vừa nguy hiểm cho bản thân vừa có thể làm tình hình tệ hơn. Tủ điện chung thuộc về người phụ trách, và việc đóng hay mở nó nên để người đó, hoặc thợ điện có chuyên môn, quyết định sau khi đã xem xét.',
      'Cách dồn thêm xe vào cùng một ổ cũng cùng gốc rễ. Ổ nối dài hay ổ chia nhiều lỗ chỉ là cách đưa nhiều bộ sạc vào cùng một điểm cấp điện, nghĩa là dồn thêm tải lên đúng đoạn dây và đúng cái phích đang gánh sẵn; nó không tạo ra thêm sức chịu cho hệ thống. Cắm thử một lát cho xong cũng không khác gì: mạch điện không biết bạn định cắm bao lâu. Tương tự, đừng tự kéo thêm dây hay thêm ổ cho khu mình; những việc đó thuộc về người có chuyên môn và chịu trách nhiệm với toàn bộ hệ thống, vì chỉ họ biết mạch ấy được làm ra để chịu tới đâu.'
    ]),
    P('Làm gì với xe của mình', [
      'Việc đầu tiên với chiếc xe của mình là đứng yên và quan sát từ khoảng cách an toàn. Hãy xem đèn trên bộ sạc, đèn hoặc thông báo trên xe, và xem các xe khác có cùng ngừng nạp hay không. Thấy bất kỳ dấu hiệu nguy hiểm nào đã nêu ở trên, hãy gác mọi suy tính về chiếc xe: tránh xa, không chạm vào xe, bộ sạc, dây hay ổ, và đi báo người phụ trách. Một chiếc xe đang nạp mà ổ cắm có vấn đề không đáng để đánh đổi bằng sự an toàn của bạn. Ở nơi đông người, hãy nhắc nhẹ những người xung quanh cùng lùi ra thay vì xúm lại xem, vì đám đông làm cản lối thoát và cản lực lượng đến hỗ trợ.',
      'Còn khi không có dấu hiệu nguy hiểm nào và điện đã ngắt, bạn có thể rút phích của xe mình khỏi ổ. Hãy cầm vào thân phích, không giật dây, tay khô, và chỉ làm khi ổ không có dấu hiệu cháy xém, không có mùi khét, nền quanh ổ không ướt; nghi ngờ một trong ba điều thì để nguyên và đi báo người phụ trách. Rút phích có lý do thực tế: lúc điện trở lại, mọi bộ sạc còn cắm có thể cùng khởi động một lượt và khiến hệ thống quá sức lần nữa. Đừng bật lại cầu dao hộ khu, đừng rút phích của xe người khác; xe của họ là việc của họ và của người phụ trách. Tránh luôn việc cắm sang ổ khác chỉ để tiếp tục sạc ngay.',
      'Về lâu hơn, hãy xem lại thói quen sạc của chính mình. Nếu được, dời việc sạc sang lúc khu vắng hơn; xe chưa đầy pin thì tính trước đường đi cho phù hợp và chờ khu ổn định rồi mới sạc tiếp. Đừng bỏ mặc xe đang nạp trong lúc khu đang có sự cố chưa rõ nguyên nhân, và chỉ cắm lại khi người phụ trách cho biết hệ thống đã được xem xét. Sau lần cắm lại, hãy nhìn đèn trên bộ sạc và trên xe, để ý có mùi lạ hay tiếng kêu bất thường không; thấy gì lạ thì rút phích khi an toàn rồi báo tiếp. Cầu dao hay nhảy đúng lúc xe bạn nạp thì nên đưa xe và bộ sạc cho thợ có chuyên môn kiểm tra riêng.'
    ]),
    P('Báo cho ai, kể những gì và cùng sắp xếp lâu dài', [
      'Người nhận báo đầu tiên là người quản lý nơi đó: ban quản lý tòa nhà, chủ nhà hay chủ dãy trọ, người phụ trách điện hoặc bảo trì của cơ quan, công ty. Nơi nào có nhóm nhắn tin chung cho cư dân hay đồng nghiệp thì có thể báo thêm ở đó để mọi người cùng biết mà đừng tự bật lại. Chưa tìm được ai phụ trách thì hãy ghi lại và báo tiếp vào lúc khác, đừng tự xử lý thay họ. Riêng tình huống đang có cháy hoặc khói bốc ra thì không chờ báo quản lý: rời xa và gọi cứu hỏa theo số khẩn cấp quen thuộc ở địa phương trước, báo người quản lý sau. Một lời báo sớm và bình tĩnh giúp người phụ trách xử lý trước khi chuyện nhỏ thành chuyện lớn.',
      'Lời báo hữu ích nhất là lời kể sự việc, không phải lời kết luận. Hãy nói rõ giờ xảy ra, lúc đó khu đông hay vắng xe và nhiều xe đang cắm hay ít, cầu dao nhảy một lần hay lặp lại, và đây là lần đầu hay đã từng gặp. Kể thêm điều bạn thấy được: đèn trên bộ sạc và trên xe của bạn ra sao, các xe khác có cùng ngừng nạp không, có mùi khét, khói, ổ hay phích đổi màu, nền ướt hay không. Đừng đoán xe nào gây ra và đừng nêu tên ai; hệ thống điện chung có nhiều nguyên nhân, và người phụ trách cần dữ kiện chứ không cần người để trách. Nếu có ảnh chụp từ xa, hãy kèm theo.',
      'Cách bền vững là cùng nhau sắp xếp, không để mỗi người tự xoay xở. Việc dễ làm nhất là chia giờ sạc hoặc luân phiên theo nhóm để không phải ai cũng cắm vào đúng lúc đông nhất. Bước quan trọng hơn là đề nghị người phụ trách mời thợ điện có chuyên môn kiểm tra hệ thống phục vụ khu sạc, xem nó có đáp ứng được số xe thực tế hay cần sửa chữa, nâng cấp. Cả khu có thể thống nhất vài nguyên tắc rõ ràng, chẳng hạn không tự kéo thêm dây, không thêm ổ, không dùng ổ chia, ghi ở nơi dễ thấy và nhắc nhau tuân theo. Bạn cũng có thể đề nghị xem lại định kỳ, vì nhu cầu sạc của khu có thể thay đổi theo thời gian.'
    ])
  ],
  checklist: [
    'Nhìn đèn trên bộ sạc của mình và đèn hoặc thông báo trên xe trước khi kết luận điều gì.',
    'Quan sát xem các xe khác có cùng ngừng nạp, hay chỉ riêng xe mình.',
    'Kiểm tra từ xa bằng mắt, mũi, tai: mùi khét, khói, nhựa chảy, tia lửa, nền ướt quanh ổ.',
    'Chỉ rút phích xe mình khi điện đã ngắt, ổ không có dấu hiệu cháy xém hay mùi khét và nền khô ráo.',
    'Ghi giờ xảy ra, khu đông hay vắng xe, dấu hiệu thấy được rồi báo người quản lý hoặc người phụ trách điện.'
  ],
  steps: [
    { title: 'Dừng lại và quan sát từ xa', detail: 'Đứng ở khoảng cách an toàn, nhìn đèn trên bộ sạc, đèn trên xe và xem các xe khác có cùng ngừng nạp không; không mở tủ điện, không chạm vào thiết bị.' },
    { title: 'Tránh xa khi có dấu hiệu nguy hiểm', detail: 'Thấy mùi khét, khói, nhựa chảy, tia lửa hoặc nền ướt thì lùi ra, nhắc người xung quanh, báo người quản lý; có cháy thì gọi cứu hỏa theo số khẩn cấp quen thuộc ở địa phương.' },
    { title: 'Rút phích xe mình khi an toàn', detail: 'Chỉ làm khi điện đã ngắt và ổ không có dấu hiệu bất thường; cầm thân phích, không giật dây, rồi dời việc sạc sang lúc khu vắng hơn nếu được.' },
    { title: 'Báo và kể sự việc', detail: 'Nói với ban quản lý, chủ nhà hoặc người phụ trách điện về giờ xảy ra, mức đông xe, dấu hiệu thấy được; đề nghị chia giờ sạc và nhờ thợ điện có chuyên môn kiểm tra.' }
  ],
  warnings: [
    'Mùi khét, khói, tia lửa, nhựa chảy hoặc nền ướt quanh ổ là lý do để tránh xa ngay, không chạm, báo người quản lý; có cháy thì rời khỏi khu vực và gọi cứu hỏa theo số khẩn cấp quen thuộc ở địa phương.',
    'Không tự bật lại cầu dao của khu, không mở tủ điện, không tự kéo thêm dây hay thêm ổ; đóng đi đóng lại có thể làm dây và ổ nóng lên rồi cháy.',
    'Không cắm dồn nhiều xe vào ổ nối hay ổ chia, không chạm vào ổ hoặc phích có mùi khét hay dấu hiệu cháy xém, không dội nước vào khu vực có điện.'
  ],
  notes: [
    'Bài chỉ nêu cách quan sát và báo người phụ trách; việc kiểm tra, sửa chữa hay nâng cấp hệ thống điện của khu thuộc về thợ điện có chuyên môn.',
    'Đèn báo, chế độ tự ngắt và cách xử lý trên xe và bộ sạc khác nhau tùy xe; hãy đối chiếu với sách hướng dẫn của xe bạn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe và bộ sạc, phần sạc điện và các đèn báo',
    'Hướng dẫn an toàn về dùng điện và phòng cháy do cơ quan phòng cháy chữa cháy ở địa phương phát hành'
  ],
  related: ['cau-dao-tren-xe-may-dien-bi-nhay-nguyen-nhan-va-viec-nen-lam', 'xe-may-dien-dang-sac-luc-troi-noi-giong-hoac-nuoc-bat-dau-dang-rut-sac-the-nao-de-pin-o-dau-va-kiem-tra-gi-sau', 'cong-sac-tren-xe-may-dien-bi-uot-ban-long-hoac-chay-xem-dau-hieu-va-viec-nen-lam', 'mat-dien-co-sac-xe-may-dien-bang-may-phat-bo-kich-dien-hay-pin-mat-troi-duoc-khong', 'sac-xe-dien']
};
