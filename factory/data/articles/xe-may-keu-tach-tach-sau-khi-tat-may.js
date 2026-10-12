// AI WIKI TOTAL — S01209; phân loại tiếng kêu sau khi tắt máy bằng quan sát, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-may-keu-tach-tach-sau-khi-tat-may',
  title: 'Xe máy kêu tách tách hoặc nổ nhẹ sau khi tắt máy: tiếng kim loại co lại, rơ-le, bơm xăng và khi nào cần lo',
  seoTitle: 'Xe máy kêu tách tách sau khi tắt máy: bình thường hay bất thường',
  metaDescription: 'Xe máy kêu tách tách sau khi tắt máy thường do kim loại co lại, rơ-le hay quạt chạy tiếp. Cách phân biệt tiếng bình thường với khói, mùi và ánh lửa.',
  summary: 'Bài giải thích vì sao xe máy chạy xăng có thể kêu tách tách, tạch tạch hoặc giật nhẹ sau khi tắt máy. Nội dung phân loại các tiếng thường gặp gồm kim loại co lại khi nguội, rơ-le nhả, bơm xăng chạy ngắn ở một số xe, quạt làm mát chạy tiếp ở xe làm mát bằng dung dịch và máy chạy tiếp vì nhiệt ở xe chế hòa khí, rồi chỉ ra cách phân biệt tiếng bình thường với dấu hiệu bất thường như khói, mùi và ánh lửa. Bài cũng nêu việc nên làm, cách ghi chú cho thợ và ranh giới phải dừng xe.',
  quickAnswer: 'Tiếng tách tách vài phút đầu sau khi tắt máy thường là kim loại ở ống xả và máy co lại khi nguội, hoặc rơ-le, bơm xăng, quạt hoạt động ngắn tùy xe. Tiếng đó khô, thưa, giảm dần rồi tự hết. Có khói, mùi xăng, mùi khét, ánh lửa, tiếng nổ to hay máy chạy tiếp lâu thì không còn bình thường: tránh xa, không đề lại và nhờ thợ kiểm tra. Bài chỉ nói về xe chạy xăng.',
  keyPoints: [
    'Tiếng tách khô, thưa, giảm dần trong vài phút đầu thường là kim loại ở ống xả và máy co lại khi nguội, gặp ở hầu hết xe chạy xăng.',
    'Rơ-le nhả, bơm xăng chạy ngắn ở một số xe và quạt làm mát chạy tiếp ở xe làm mát bằng dung dịch đều có thể gây tiếng sau khi tắt khóa; thời điểm cụ thể tùy từng xe.',
    'Máy giật nhẹ hoặc chạy thêm vài nhịp sau khi tắt khóa thường được nhắc ở xe chế hòa khí lúc máy rất nóng hoặc có muội than; xe phun xăng ít gặp hơn.',
    'Khói, ánh lửa, mùi xăng hoặc mùi khét đi kèm tiếng kêu là lý do dừng xe, tránh xa nguồn nóng và không đề lại, dù tiếng nghe nhẹ hay to.',
    'Ghi lại tiếng giống gì, nghe ở vùng nào, bắt đầu sau bao lâu và xe chạy ra sao trước đó để thợ chẩn đoán nhanh hơn; xe điện không có ống xả nên bài không bàn tới.'
  ],
  category: 'learn',
  hub: 'chuan-doan-loi',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['giãn nở nhiệt của kim loại', 'ống xả và bầu giảm thanh', 'rơ-le', 'bơm xăng điện', 'quạt làm mát', 'máy chạy tiếp sau khi tắt khóa'],
  keywords: ['xe máy kêu tách tách sau khi tắt máy', 'xe máy kêu khi tắt máy', 'tiếng tạch tạch sau khi tắt máy', 'xe máy nổ nhẹ sau khi tắt máy là lỗi gì'],
  sections: [
    P('Tiếng kim loại co lại khi nguội', [
      'Sau một chuyến đi, ống xả, cổ xả, nắp máy và các tấm chắn nhiệt đều nóng lên và giãn ra theo nhiệt. Tắt máy xong, khí xả nóng không còn chạy qua và gió cũng không thổi lên thân xe nữa, nên các chi tiết nguội dần và co lại. Kim loại không nguội đều: chỗ dày giữ nhiệt lâu, chỗ mỏng nguội nhanh, nên mỗi phần co theo một nhịp riêng và trượt nhẹ lên nhau ở các mối ghép. Kết quả là những tiếng tách, tích, tạch thưa thớt vang lên trong vài phút đầu, nghe rõ hơn ở nơi yên tĩnh như hầm xe hay gara về đêm. Đó là hiện tượng vật lý bình thường ở hầu hết xe chạy xăng; xe điện không có ống xả nên không thuộc phạm vi bài này.',
      'Muốn nhận ra tiếng co nguội, hãy chú ý đặc điểm của nó. Âm thanh ngắn, khô, rời rạc, thưa dần theo thời gian và tự dừng khi xe nguội hẳn, không tăng lên qua từng lần đi xe. Nguồn tiếng thường nằm ở vùng ống xả, bầu giảm thanh, tấm chắn nhiệt hoặc nắp che máy, tức những chi tiết kim loại mỏng hay chi tiết giữ bằng kẹp và bu-lông. Tiếng nghe giống kim loại gõ nhẹ chứ không phải tiếng máy móc đang quay, và không đi kèm mùi lạ hay khói. Xe vừa chạy đường dài, chạy nhanh hoặc leo dốc thường kêu nhiều hơn vì chi tiết nóng hơn, còn xe chỉ đi một đoạn ngắn thì gần như im lặng.',
      'Dù vậy, tiếng co nguội không nên thành cái cớ để bỏ qua mọi thứ. Tiếng tách bỗng to hơn hẳn, nghe như kim loại đập rời rạc hoặc lanh canh cả lúc xe đang chạy, có thể là dấu hiệu một tấm chắn nhiệt, kẹp ống xả hay bu-lông bắt bầu giảm thanh đã lỏng. Việc siết lại tùy từng xe, cần dụng cụ và lực siết đúng, nên hãy để thợ làm thay vì tự vặn bu-lông ở chi tiết còn nóng. Một mẹo đơn giản là nghe lại khi xe đã nguội hẳn: tiếng chỉ xuất hiện lúc nóng và biến mất lúc nguội thường là giãn co thông thường, còn tiếng lạch cạch vẫn còn khi xe nguội cần được kiểm tra sớm. Không chạm tay vào ống xả để thử.'
    ]),
    P('Rơ-le, bơm xăng và quạt chạy tiếp sau khi tắt khóa', [
      'Rơ-le là công tắc điện nhỏ, dùng dòng điện yếu để đóng ngắt dòng điện mạnh hơn cho bơm xăng, quạt, đèn hoặc củ đề. Mỗi lần đóng hay nhả, lõi rơ-le phát một tiếng tách ngắn. Vì thế sau khi xoay khóa về vị trí tắt, có thể nghe một tiếng tách hoặc vài tiếng rất khẽ từ dưới yên, gần hộp điện hay phía sau đầu xe, nơi hay đặt rơ-le và bộ điều khiển. Xe phun xăng thường có nhiều rơ-le và mạch điện tử hơn xe chế hòa khí nên tiếng này dễ nghe hơn, nhưng số lượng và vị trí tùy từng xe. Một tiếng tách đơn lẻ, gọn, chỉ vang lên một lần ngay lúc tắt khóa thường là rơ-le nhả đúng như thiết kế, chưa phải lỗi.',
      'Bơm xăng điện trên xe phun xăng thường vo lên vài giây ngay lúc vừa bật khóa để nạp áp cho đường dẫn. Ở một số xe, tùy cách bộ điều khiển được lập trình, có thể nghe thêm tiếng vo hoặc tiếng nhả rất ngắn quanh lúc tắt khóa. Tiếng ấy phát ra từ khu vực bình xăng hoặc dưới yên, êm, ngắn và tự dừng. Xe chế hòa khí phần lớn không dùng bơm xăng điện nên không có tiếng này. Điều đáng ngờ là bơm vẫn vo kéo dài sau khi đã tắt khóa, hoặc xe để qua đêm mà ắc quy yếu dần: lúc đó rơ-le dính hoặc dây điện chạm có thể là nguyên nhân, và nên để thợ kiểm tra thay vì tự rút dây hay mở đường xăng.',
      'Xe làm mát bằng dung dịch còn có quạt điện gắn ở két nước, bật lên khi cảm biến hoặc bộ điều khiển thấy máy nóng. Sau chuyến đi nóng hay đoạn kẹt xe, ở một số xe quạt có thể chạy thêm một lúc rồi tự dừng; ở xe khác quạt dừng cùng lúc với khóa điện, và điều này tùy thiết kế nên đừng lấy xe này làm chuẩn cho xe kia. Trường hợp tắt máy bằng công tắc nhưng khóa điện vẫn bật, quạt cũng có thể tiếp tục chạy theo nhiệt. Tiếng quạt là tiếng gió đều, nhẹ, khác hẳn tiếng tách. Quạt gào to bất thường, rung mạnh, phát mùi khét hoặc chạy mãi không dừng là lúc nên ngưng dùng xe và nhờ thợ xem lại phần làm mát lẫn mạch điện.'
    ]),
    P('Máy giật nhẹ hoặc chạy tiếp sau khi tắt khóa', [
      'Có người còn gặp chuyện máy không tắt gọn: sau khi xoay khóa, thân xe rung giật một nhịp, máy ho thêm vài tiếng hoặc chạy lê thêm một lúc mới dừng, đôi khi kèm tiếng nổ nhẹ ở ống xả. Một nhịp rung ngay lúc máy dừng thường chỉ là pít-tông dừng ở kỳ nén cuối cùng, cảm nhận rõ hơn ở máy một xi-lanh, và chưa nói lên điều gì xấu. Còn máy chạy tiếp thật sự thường được nhắc ở xe chế hòa khí: tia lửa bugi đã bị cắt nhưng buồng xăng con của bộ chế hòa khí vẫn còn xăng và gió vẫn được hút vào. Nếu trong buồng đốt có điểm đủ nóng để tự bắt lửa hỗn hợp, máy có thể quay thêm vài vòng dù không còn tia lửa.',
      'Các yếu tố thường được nhắc tới gồm muội than bám trong buồng đốt nóng lên và bén lửa, bugi không đúng loại dành cho xe, máy đang rất nóng sau chuyến đi dài hoặc lúc đứng chờ lâu giữa trời nắng, tốc độ cầm chừng để quá cao và loại xăng không hợp với máy. Mỗi xe một khác, đây chỉ là gợi ý để trao đổi với thợ chứ không phải chẩn đoán. Hiện tượng này thường rõ ngay sau khi chạy nặng và giảm dần khi máy nguội. Xe phun xăng ít gặp hơn vì hệ thống thường ngừng cấp xăng cùng lúc với tắt khóa, nên nếu máy vẫn chạy tiếp ở xe phun xăng thì càng cần để thợ xem, không nên tự đoán nguyên nhân.',
      'Trường hợp máy vẫn chạy tiếp sau khi tắt khóa, hãy bóp phanh, dừng xe an toàn trên chân chống ở chỗ thoáng, rồi thử tắt lại bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt; tuyệt đối không xoay sang vị trí khóa cổ. Máy chỉ chạy thêm một hai nhịp rồi tắt và hiếm khi lặp lại thì thường chỉ cần theo dõi. Máy chạy thêm lâu, lặp lại nhiều lần, kèm tiếng bục hoặc nổ lốp bốp và rung mạnh thì nên ghi lại hoàn cảnh xảy ra rồi nhờ thợ kiểm tra bugi, muội than và tốc độ cầm chừng. Đừng tự vặn vít chỉnh ga hay tháo bộ chế hòa khí, vì chỉnh sai còn làm máy chạy tệ hơn và gần xăng nóng là việc dễ gây nguy hiểm.'
    ]),
    P('Dấu hiệu bất thường: khói, mùi, tiếng to', [
      'Ranh giới quan trọng nhất nằm ở thứ đi kèm với tiếng kêu. Dù tiếng tách nghe nhẹ hay to, hễ thấy khói bốc lên từ vùng máy, ống xả, dưới yên hoặc quanh bình xăng, hay thấy ánh lửa dù chỉ le lói, thì đó là dấu hiệu dừng lại ngay, không phải chuyện để chờ xem thử. Hơi nước mỏng, trắng, tan nhanh và không mùi thỉnh thoảng bay ra trong ngày lạnh hoặc ẩm là chuyện khác; khói sẫm, dày hoặc có mùi khét thì không như vậy. Hãy đưa mình ra xa xe và xa vật dễ cháy, không dội nước trực tiếp lên máy, không cố đề nổ lại. Thấy lửa cháy lan, hãy tránh xa và nhờ lực lượng cứu hỏa thay vì tự dập bằng tay không.',
      'Mùi cũng là manh mối rõ. Mùi xăng sống nồng ở gần bình, ống dẫn hay họng nạp sau khi tắt máy gợi ý xăng rò hoặc bay hơi bất thường, và đi cùng chi tiết còn nóng là nguy cơ cháy. Mùi khét như nhựa hoặc dây điện cháy gợi ý dây bị nóng, chạm hay rơ-le quá tải. Mùi nhớt cháy thường gợi ý nhớt rỉ dính lên ống xả, nhiều khi kèm sợi khói mỏng bốc lên từ chỗ dính. Mùi ngọt ở xe làm mát bằng dung dịch có thể gợi ý nước làm mát rỉ ra. Tất cả chỉ là gợi ý để khoanh vùng, không phải kết luận. Hãy đứng cách xa khi ngửi, không cúi sát vào máy hay ống xả nóng, và ghi lại mùi xuất hiện ở vùng nào của xe.',
      'Về âm thanh, tiếng bình thường là ngắn, khô, thưa và giảm dần. Tiếng bất thường thì khác: nổ, đùng hoặc bục to; kéo dài không dứt; xì hơi liên tục; sôi ùng ục; rè rè hay nhả rơ-le liên hồi dưới yên; hoặc tiếng tách dồn dập, nhanh dần thay vì thưa đi. Tiếng bục ở ống xả sau khi tắt máy có thể là hỗn hợp chưa cháy hết gặp chi tiết nóng, nhưng đó cũng chỉ là gợi ý và nên để thợ xem nếu lặp lại. Tiếng xì hoặc ùng ục gần két nước hay bình xăng càng đáng lo vì liên quan tới áp suất và chất lỏng nóng; không mở nắp két nước hay nắp bình khi máy còn nóng. Tiếng rè từ mạch điện còn có thể làm hao ắc quy qua đêm.'
    ]),
    P('Việc nên làm và lúc giao thợ', [
      'Việc đầu tiên là đứng yên và quan sát thay vì vội kết luận. Dựng xe ở chỗ thoáng, tránh xa vật dễ cháy, giữ tay khỏi ống xả, để xe nguội tự nhiên rồi nghe xem tiếng nằm ở vùng nào, nhẹ hay to, thưa hay dồn. Song song đó, dùng mắt và mũi: có khói, mùi xăng, mùi khét, vết ướt dưới gầm, nhớt hay nước làm mát nhỏ giọt không. Những việc này không cần dụng cụ và không cần tháo bất kỳ chi tiết nào. Khi xe đã nguội hẳn, nhìn quanh khu vực ống xả và dưới yên xem có vết dầu, dây điện cháy xém hoặc tấm chắn nhiệt xê dịch không. Nếu mọi thứ sạch sẽ và tiếng chỉ có lúc nóng, nhiều khả năng bạn đang nghe giãn co nhiệt thông thường.',
      'Ghi chú tốt giúp thợ tìm lỗi nhanh hơn nhiều so với một câu xe kêu lạ. Hãy ghi tiếng giống gì như tách, tạch, vo, rè hay bục; nghe ở vùng nào; bắt đầu sau bao lâu từ lúc tắt máy và kéo dài đến khi nào; chỉ xảy ra sau chuyến đi dài hay kẹt xe, hay cả sau đoạn chạy ngắn; có kèm máy chạy tiếp hoặc quạt chạy không. Đừng quên nêu loại xe: chế hòa khí hay phun xăng, làm mát bằng gió hay dung dịch. Nếu được, thu một đoạn âm thanh ngắn bằng điện thoại từ khoảng cách an toàn, không đưa tay gần xe. Đoạn ghi âm có giá trị hơn lời mô tả vì nhiều tiếng chỉ xuất hiện lúc xe nóng và biến mất khi xe nguội.',
      'Hãy giao xe cho thợ khi gặp một trong các dấu hiệu: khói, ánh lửa, mùi xăng hoặc mùi khét, tiếng to bất thường, máy chạy tiếp lâu hay lặp lại, bơm hoặc quạt chạy mãi, ắc quy yếu dần qua đêm, hay tiếng tách ngày một nhiều. Trước đó, đừng tự tháo chi tiết, đừng dội nước lên máy nóng, đừng đổ xăng hay chất hỗ trợ khởi động vào họng nạp, đừng rút dây điện để thử. Tiếng tách thưa, khô, tự hết khi xe nguội và không kèm gì khác thì cứ yên tâm theo dõi. Thời điểm quạt, bơm và rơ-le hoạt động tùy từng xe, nên hãy đối chiếu với sách hướng dẫn của xe bạn. Xe điện không có ống xả hay bơm xăng, nên tiếng tách ở đó có nguồn gốc khác và cần tra tài liệu riêng của xe.'
    ])
  ],
  checklist: [
    'Nghe và ghi lại tiếng phát ra từ vùng nào: ống xả, máy, bình xăng hay dưới yên.',
    'Đứng cách xa ống xả và máy nóng khi quan sát, không chạm tay để thử.',
    'Ghi tiếng là khô, thưa, giảm dần hay dồn dập, to lên, kéo dài.',
    'Dùng mắt và mũi kiểm tra: có khói, ánh lửa, mùi xăng, mùi khét hay vết ướt dưới gầm không.',
    'Ghi loại xe (chế hòa khí hay phun xăng, làm mát bằng gió hay dung dịch) và xe vừa chạy thế nào trước khi tắt máy.'
  ],
  steps: [
    { title: 'Dừng xe an toàn và tắt máy đúng cách', detail: 'Bóp phanh, dựng xe ở chỗ thoáng, tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ.' },
    { title: 'Đứng xa và nghe tiếng', detail: 'Chờ một lúc, nghe tiếng nằm ở vùng nào, nhẹ hay to, thưa dần hay dồn dập, có máy hoặc quạt chạy tiếp không.' },
    { title: 'Nhìn và ngửi từ khoảng cách an toàn', detail: 'Tìm khói, ánh lửa, mùi xăng, mùi khét, vết ướt dưới gầm; có bất kỳ dấu hiệu nào thì tránh xa, không đề lại.' },
    { title: 'Ghi chú và quyết định', detail: 'Tiếng khô, thưa, tự hết khi nguội thì tiếp tục theo dõi; có dấu hiệu bất thường hoặc lặp lại thì đưa xe cho thợ kèm ghi chú hoặc đoạn ghi âm.' }
  ],
  warnings: [
    'Khói, ánh lửa, mùi xăng nồng hoặc mùi khét đi kèm tiếng kêu là lý do dừng xe ngay: tránh xa, không đề lại, không dội nước lên máy nóng và đưa xe đi kiểm tra trước khi chạy tiếp.',
    'Không chạm vào ống xả hay máy còn nóng, không mở nắp két nước hoặc nắp bình khi máy chưa nguội, không đổ xăng hay chất hỗ trợ khởi động vào họng nạp.',
    'Không tự tháo chi tiết, rút dây điện, siết bu-lông ống xả hay chỉnh bộ chế hòa khí để thử; các việc này cần dụng cụ và thợ có chuyên môn.'
  ],
  notes: [
    'Các nhận định trong bài chỉ là manh mối để trao đổi với thợ; thời điểm bơm, quạt và rơ-le hoạt động sau khi tắt khóa, cũng như việc máy có chạy tiếp hay không, tùy từng dòng xe và từng đời xe.',
    'Bài chỉ nói về xe máy chạy xăng; xe điện không có ống xả, buồng đốt hay bơm xăng, nên tiếng kêu sau khi tắt ở xe điện cần đối chiếu tài liệu riêng của xe.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần tắt máy, hệ thống làm mát và các lưu ý an toàn',
    'Tài liệu kỹ thuật của nhà sản xuất về hệ thống điện, nhiên liệu và làm mát của đúng dòng xe'
  ],
  related: ['tieng-keu-la-tren-xe-may-phan-doan', 'xe-may-keu', 'bom-xang-dien-xe-phun-xang-yeu', 'quat-ket-nuoc-xe-tay-ga-khong-quay', 'co-nen-tat-may-xe-may-khi-dung-den-do-hoac-cho-lau']
};
