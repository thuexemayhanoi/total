// AI WIKI TOTAL — S01704; xử lý khi xe máy điện đang sạc gặp giông hoặc nước dâng, không nêu số liệu hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'xe-may-dien-dang-sac-luc-troi-noi-giong-hoac-nuoc-bat-dau-dang-rut-sac-the-nao-de-pin-o-dau-va-kiem-tra-gi-sau',
  title: 'Xe máy điện đang sạc lúc trời nổi giông hoặc nước bắt đầu dâng: rút sạc thế nào, để pin ở đâu và kiểm tra gì sau',
  seoTitle: 'Xe máy điện đang sạc gặp giông, nước dâng: rút sạc, cất pin, kiểm tra',
  metaDescription: 'Xe máy điện đang sạc mà trời nổi giông hoặc nước dâng: khi nào nên rút sạc, rút sao khi sàn ướt, cất pin và dắt xe đi đâu, cùng việc cần kiểm tra trước khi sạc lại.',
  summary: 'Bài giải thích vì sao lúc đang cắm sạc là lúc xe máy điện dễ gặp chuyện nhất khi có giông và nước: bộ sạc, ổ cắm và dây nằm thấp, điện lưới chập chờn, cổng sạc đang mở. Nội dung đi qua cách quyết định sớm trước khi giông tới, cách rút sạc an toàn khi đã có nước hoặc mưa hắt, chỗ để xe và pin khi nước bắt đầu dâng, rồi những việc cần kiểm tra trước khi sạc lại. Pin hay bộ sạc từng ngâm nước thì không tự sạc lại mà nhờ nơi bảo hành hoặc thợ có chuyên môn kiểm tra.',
  quickAnswer: 'Thấy giông kéo tới thì rút sạc sớm, lúc sàn và tay còn khô. Đã có nước thì không chạm ổ cắm, dây hay bộ sạc khi tay ướt hoặc đang đứng trong nước; biết cầu dao nằm chỗ khô thì ngắt nguồn trước. Ổ cắm ngập, có tia lửa hay mùi khét thì tránh xa và gọi người có chuyên môn. Pin tháo rời được thì cất lên chỗ cao, khô, thoáng. Pin hay bộ sạc từng ngâm nước thì không tự sạc lại.',
  keyPoints: [
    'Lúc đang sạc, bộ sạc, ổ cắm, dây nối dài nằm thấp và nắp cổng sạc đang mở, nên nước hắt hay nước dâng dễ gặp đúng những điểm yếu nhất của cả bộ dây điện.',
    'Quyết định sớm là cách an toàn nhất: để ý trời, rút sạc trước khi mưa lớn, không cắm sạc qua đêm khi có tin giông hay nước dâng.',
    'Không chạm ổ cắm, dây hay bộ sạc khi tay ướt hoặc đang đứng trong nước; ổ cắm đã ngập, có tia lửa hay mùi khét thì tránh xa và gọi người có chuyên môn.',
    'Pin tháo rời được thì cất lên chỗ cao, khô, thoáng, xa vật dễ cháy và không chắn lối đi; xe thì dắt lên chỗ cao hơn nếu kịp, không cố dắt qua nước đã sâu.',
    'Pin hay bộ sạc từng ngâm nước thì không tự sạc lại; để mọi thứ khô hẳn, xem dấu ẩm, cặn bùn, mùi lạ, vỏ pin phồng hay nóng rồi nhờ nơi bảo hành hoặc thợ kiểm tra.'
  ],
  category: 'learn',
  hub: 'kien-thuc-xe-dien',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['bộ sạc xe máy điện', 'ổ cắm và dây nối dài', 'cổng sạc', 'pin tháo rời', 'cầu dao điện', 'giông và nước dâng'],
  keywords: ['xe máy điện đang sạc khi trời giông', 'rút sạc xe điện khi nước dâng', 'sạc xe máy điện khi mưa bão', 'pin xe điện bị nước tràn vào khi đang sạc'],
  sections: [
    P('Vì sao lúc đang sạc là lúc xe điện dễ gặp chuyện nhất khi có giông và nước', [
      'Xe máy điện đang cắm sạc ngoài hiên, ngoài sân hay ở tầng trệt là tình huống nhiều người gặp mà ít ai tính trước. Trời chuyển giông, mưa hắt xiên vào, hoặc nước ngoài ngõ bắt đầu tràn qua ngưỡng cửa, và câu hỏi hiện ra ngay: rút sạc luôn hay chờ thêm, tay ướt thì làm sao, xe và pin nên để đâu. Muốn trả lời gọn, trước hết cần hiểu vì sao xe máy điện đang sạc khi trời giông lại dễ gặp chuyện hơn hẳn lúc nằm yên. Cùng một cơn giông, chiếc xe đã rút dây, đóng nắp cổng sạc và có bộ sạc cất trong nhà gần như không để lộ điểm yếu nào. Lúc đang sạc thì ngược lại: hàng loạt điểm yếu cùng xuất hiện, và chúng gặp đúng thứ kém hợp nhất với điện là nước.',
      'Hãy nhìn vị trí của từng mắt xích trong bộ dây sạc. Ổ cắm tường hay ổ nối dài thường nằm thấp sát nền, bộ sạc hay được đặt dưới sàn hoặc trên bậc thềm, còn dây sạc kéo dài trên mặt đất từ ổ cắm tới xe. Đó cũng là tầng thấp nhất của căn nhà, nơi nước mưa hắt vào đọng lại trước tiên và nước dâng tràn tới sớm nhất. Thêm vào đó, nắp cổng sạc trên xe phải mở ra khi cắm, nên chỗ tiếp xúc điện của xe lúc ấy hở hơn bình thường. Người ngồi trong nhà lại thường không nhìn thấy những chỗ này, nhất là khi sạc qua đêm. Nước có thể đã hắt tới ổ cắm từ lâu mà không ai hay, vì mọi thứ vẫn lặng lẽ chạy cho tới khi có chuyện.',
      'Giông còn làm mọi thứ khó lường hơn. Điện lưới lúc sấm chớp hay chập chờn, khi yếu đi, khi mất rồi có lại đột ngột; bộ sạc và pin của xe bạn chịu được những đợt như vậy tới đâu là điều tùy xe, nên hãy xem sách hướng dẫn thay vì đoán hay tin lời đồn về chuyện chống sét. Điều chắc chắn là không nên để điện, nước và dây dẫn nằm sát nhau ở chỗ mình không canh được. Cần tách hai nguy cơ: nguy cơ cho người, như chạm vào ổ cắm, dây hay bộ sạc lúc tay ướt hoặc đang đứng trong nước; và nguy cơ cho thiết bị, như nước lọt vào cổng sạc hay vào pin. Phần cổng sạc bị ướt đã có bài riêng, nên bài này chỉ bàn việc quyết định và hành động khi giông và nước tới.'
    ]),
    P('Quyết định sớm trước khi giông tới', [
      'Cách an toàn nhất là không phải rút sạc giữa lúc nước đang tới. Giông thường báo trước: mây đen kéo dày, gió đổi hướng rồi mạnh dần, sấm nghe được từ xa, hoặc bản tin dự báo thời tiết từ nguồn chính thống cảnh báo mưa dông. Thấy những dấu hiệu ấy mà xe đang cắm sạc, đây là lúc rút nhẹ nhàng khi sàn còn khô và tay còn khô, chứ chưa phải lúc chờ thêm cho đầy pin. Pin chưa đầy chỉ là sự bất tiện, còn điện và nước gặp nhau ở chỗ thấp thì hậu quả nặng hơn nhiều. Hãy đặt cho mình một mốc rõ ràng, chẳng hạn nghe thấy sấm là rút sạc, để khỏi phải tự thương lượng với bản thân mỗi lần trời đổi.',
      'Quyết định sớm cũng bao gồm lịch sạc. Có tin giông lớn, mưa bão kéo dài hay nước có thể dâng thì đừng cắm sạc qua đêm rồi đi ngủ, vì đó là lúc không ai canh cổng sạc, ổ cắm và nền nhà. Hãy chuyển việc sạc sang ban ngày, lúc bạn có mặt và quan sát được trời lẫn sàn, hoặc sạc sớm hơn bình thường trước khi thời tiết xấu. Nếu quen sạc ở hiên hay sân, hãy đưa xe vào chỗ có mái che kín gió hắt, cao ráo hơn, và nâng ổ nối dài lên khỏi mặt nền thay vì để nằm trên sàn. Dây thừa nên gọn, không nằm giữa lối đi hay chỗ hay đọng nước. Những việc nhỏ này làm trước cơn mưa bao giờ cũng dễ hơn làm giữa cơn mưa.',
      'Khu nhà dễ ngập mỗi khi mưa lớn thì nên tính sẵn phương án cho xe và pin từ đầu mùa mưa. Hãy xác định chỗ cao hơn để dắt xe lên nhanh, kệ hay bậc cao để đặt bộ sạc và pin tháo rời, cùng vị trí cầu dao hay công tắc điện nằm ở chỗ khô nếu có. Cả nhà nên biết những điều này, vì người rút sạc lúc khẩn cấp không phải lúc nào cũng là chủ xe. Phải ra khỏi nhà khi giông đang kéo tới thì quyết định đơn giản nhất thường là rút sạc rồi mới đi, đừng để xe sạc một mình với hy vọng trời sẽ không mưa. Còn nếu nghi điện lưới đang chập chờn, hãy ngừng sạc cho tới khi thời tiết ổn định trở lại.'
    ]),
    P('Rút sạc an toàn khi đã có nước hoặc mưa hắt', [
      'Khi nước đã hắt vào hoặc đã đọng quanh chỗ sạc, nguyên tắc đầu tiên là bảo vệ chính mình. Không chạm vào ổ cắm, dây sạc hay bộ sạc lúc tay ướt, cũng không làm việc đó khi bạn đang đứng trong nước hay trên nền ướt đẫm. Hãy dừng lại và quan sát từ chỗ khô: nước đang ở đâu, đã chạm tới ổ cắm chưa, dây sạc có nằm trong nước không, đường tới ổ cắm có khô không. Đường tới ổ cắm còn khô và ổ cắm chưa dính nước thì lau tay thật khô, đứng chỗ khô rồi mới rút. Chưa chắc chắn thì đừng thử. Đồ đạc có thể sửa hoặc thay, còn người bị điện giật vì vội thì không có cách quay lại, nên chậm một nhịp luôn đáng hơn.',
      'Cầu dao hay công tắc điện của ổ cắm đó mà bạn biết vị trí, lại nằm ở chỗ khô, là công cụ an toàn nhất lúc này: ngắt nguồn trước, rồi mới xử lý dây và phích. Cầu dao nằm trong vùng ẩm, hoặc phải lội qua nước mới tới được, thì đừng đụng vào. Khi nguồn đã ngắt, bạn rút đầu sạc theo cách sách hướng dẫn mô tả, cầm vào thân đầu cắm chứ không giật dây, và không dùng vật ẩm hay vật kim loại để gạt dây ra khỏi nước. Thứ tự rút khỏi xe và khỏi ổ cắm, cũng như cách đóng nắp cổng sạc, có thể khác nhau tùy xe, nên hãy đọc sẵn phần này từ trước khi mưa tới. Đóng nắp cổng sạc ngay sau khi rút, đừng thọc khăn hay vật nhọn vào bên trong.',
      'Có những dấu hiệu cho thấy bạn không nên tự rút. Ổ cắm đã ngập hoặc nằm trong vũng nước, có tia lửa, có tiếng xèo xèo, có mùi khét, vỏ ổ cắm hay phích đổi màu, thì hãy tránh xa, đừng chạm, đừng tạt nước dập, đừng thử rút hay đẩy vật gì vào. Báo cho mọi người trong nhà, nhất là trẻ em, không lại gần chỗ đó, rồi gọi người có chuyên môn về điện. Nếu đã có khói hay lửa, ưu tiên đưa mọi người ra khỏi khu vực và gọi lực lượng cứu hỏa. Trong lúc chờ, cứ để nguyên xe và bộ sạc ở đó, vì xe còn tìm được cách xử lý khác, còn sức khỏe của bạn thì không thể thay thế.'
    ]),
    P('Chỗ để xe và pin khi nước bắt đầu dâng', [
      'Chỉ khi xe của bạn được thiết kế với pin tháo rời thì mới nói tới chuyện cất pin riêng. Pin gắn liền với xe thì đừng cố tháo; hãy giữ nguyên và dồn sức đưa cả xe lên chỗ cao hơn. Với xe có pin tháo rời, việc tháo chỉ làm sau khi đã ngắt sạc, tay khô và chân đứng chỗ khô, đúng theo cách sách hướng dẫn mô tả. Pin khá nặng, nên nhờ thêm người khi cần, hoặc bỏ ý định tháo thay vì để pin rơi hay va đập. Nước đã ngập tới chỗ để pin hoặc chỗ bạn phải đứng thì đừng tháo, vì đứng trong nước để thao tác với đồ điện là điều cần tránh. Mọi chi tiết cụ thể về việc tháo, mang và đặt lại pin đều tùy xe, nên hãy đối chiếu với sách hướng dẫn hoặc hỏi nơi bảo hành.',
      'Nơi cất pin nên cao hơn mực nước có thể dâng, khô ráo, thoáng khí, xa cửa sổ hay mái hắt mưa. Hãy để pin xa các vật dễ cháy như giấy, vải, đồ nhựa chất đống, bình gas hay can xăng, và đừng đặt chắn lối đi hoặc cửa thoát, vì nếu pin gặp sự cố bạn cần đường ra rõ ràng. Không bỏ pin vào túi kín, hộp kín hay bọc nilon dày với ý chống nước: chỗ kín dễ giữ ẩm và che mất những dấu hiệu bất thường như nóng hay có mùi lạ. Tương tự, bộ sạc và dây sạc đã rút cũng nên được nhấc lên chỗ khô thay vì để lại trên nền nhà. Hãy chọn kệ chắc chắn, đừng chồng pin hay bộ sạc lên chỗ lung lay.',
      'Còn xe thì sao? Nếu còn kịp và nền còn đi được, hãy dắt xe lên chỗ cao hơn như bậc thềm cao, tầng trên hay khu để xe cao ráo, tránh những chỗ nước đang chảy. Đừng cố dắt hay chạy xe qua nước đã sâu: bạn khó thấy mặt nền, dòng nước có thể kéo, vật lạ dưới nước dễ làm ngã, và nước tràn tới các chi tiết điện có thể gây hư hỏng ngoài tầm nhìn. Nước đã tới mức dắt xe nguy hiểm thì hãy để xe ở lại và giữ an toàn cho người. Xe ở lại thì ghi nhận nước đã dâng tới đâu, chụp ảnh nếu an toàn, vì thông tin ấy rất hữu ích cho người kiểm tra sau này. Chuyện xe đi mưa ngoài đường đã có bài riêng; bài này chỉ bàn tình huống xe đang cắm sạc.'
    ]),
    P('Kiểm tra gì trước khi sạc lại', [
      'Sau khi trời tạnh hoặc nước đã rút, đừng vội cắm sạc lại chỉ vì xe trông bình thường. Việc đầu tiên là để cổng sạc, bộ sạc và ổ cắm khô hẳn một cách tự nhiên, ở nơi thoáng, trong khoảng thời gian đủ dài. Đừng hơ lửa, đừng sấy nóng sát cổng sạc hay ổ cắm, vì nhiệt mạnh có thể làm biến dạng gioăng và nhựa mà chưa chắc làm khô được phần ẩm nằm sâu bên trong. Cũng đừng dùng vật nhọn hay thổi khí mạnh vào cổng sạc. Hai chữ khô hẳn nghĩa là không còn giọt nước, không còn hơi ẩm đọng; bề mặt khô mà bên trong còn ẩm thì chưa đủ. Ổ cắm tường hay ổ nối dài từng bị nước hắt vào cũng cần người có chuyên môn xem lại trước khi dùng.',
      'Tiếp theo là quan sát bằng mắt, mũi và tay ở những chỗ dễ thấy. Nhìn xem còn dấu ẩm, vệt nước, cặn bùn hay cát ở cổng sạc, đầu cắm, bộ sạc, ổ cắm và dây hay không. Ngửi xem có mùi lạ, mùi khét hay mùi ẩm mốc. Nhìn vỏ pin có phồng, nứt, biến dạng hay đổi màu không, và chạm nhẹ xem pin có nóng bất thường dù chưa sạc không. Dây sạc nứt vỏ, đầu cắm đổi màu, chân tiếp xúc ố hay cháy xém, bộ sạc có đèn báo khác thường đều là lý do để không cắm điện. Xe báo lỗi lạ hay chạy khác thường sau trận mưa thì hãy ghi lại. Đèn báo nào là bình thường tùy xe, nên xem sách hướng dẫn; bài về dấu hiệu bộ sạc hỏng cũng nêu các biểu hiện thường gặp.',
      'Ranh giới quan trọng nhất là chuyện ngâm nước. Pin hay bộ sạc từng ngâm nước, hoặc từng bị nước tràn tới, thì đừng tự sạc lại dù bên ngoài đã khô và trông bình thường, vì phần nguy hiểm có thể nằm bên trong, nơi bạn không nhìn thấy. Hãy nhờ nơi bảo hành hoặc thợ có chuyên môn kiểm tra trước. Nghi pin bị nước tràn vào khi đang sạc thì đặt pin ở chỗ thoáng, xa vật dễ cháy và xa người, để người chuyên môn xử lý, đừng cố mở vỏ. Còn khi mọi thứ chỉ bị mưa hắt nhẹ, đã khô hẳn và không có dấu hiệu lạ, bạn có thể cắm sạc lại ở chỗ khô, lần đầu có mặt tại chỗ để quan sát. Thấy nóng, mùi lạ, tia lửa hay đèn báo bất thường thì rút ngay khi an toàn và đưa đi kiểm tra.'
    ])
  ],
  checklist: [
    'Để ý trời: mây đen dày, gió đổi, sấm xa hay bản tin cảnh báo mưa dông là lúc rút sạc, khi sàn và tay còn khô.',
    'Không cắm sạc qua đêm khi có tin giông hoặc nước có thể dâng; chuyển việc sạc sang lúc bạn có mặt.',
    'Biết trước vị trí cầu dao hay công tắc nằm chỗ khô, và để cả nhà cùng biết.',
    'Chuẩn bị sẵn chỗ cao, khô, thoáng cho bộ sạc và pin tháo rời, xa vật dễ cháy, không chắn lối đi.',
    'Trước khi sạc lại: cổng sạc, bộ sạc, ổ cắm khô hẳn; nhìn dấu ẩm, cặn bùn, mùi lạ, vỏ pin phồng hay nóng.'
  ],
  steps: [
    { title: 'Rút sạc sớm khi giông còn xa', detail: 'Thấy trời đổi giông thì rút sạc lúc sàn và tay còn khô, đóng nắp cổng sạc, rồi đưa bộ sạc vào chỗ cao ráo thay vì chờ cho đầy pin.' },
    { title: 'Đã có nước thì ngắt nguồn trước', detail: 'Đứng chỗ khô, không chạm ổ cắm, dây hay bộ sạc khi tay ướt; biết cầu dao nằm chỗ khô thì ngắt nguồn rồi mới rút đầu sạc. Ổ cắm ngập, tia lửa hay mùi khét thì tránh xa và gọi người có chuyên môn.' },
    { title: 'Đưa pin và xe lên chỗ cao', detail: 'Chỉ tháo pin nếu xe thiết kế pin tháo rời; cất nơi cao, khô, thoáng, xa vật dễ cháy, không chắn lối đi. Xe dắt lên chỗ cao hơn nếu kịp, không dắt qua nước đã sâu.' },
    { title: 'Kiểm tra kỹ rồi mới sạc lại', detail: 'Để mọi thứ khô hẳn, xem dấu ẩm, cặn bùn, mùi lạ, vỏ pin phồng hay nóng. Pin hay bộ sạc từng ngâm nước thì nhờ nơi bảo hành hoặc thợ kiểm tra, không tự sạc.' }
  ],
  warnings: [
    'Không chạm ổ cắm, dây sạc hay bộ sạc khi tay ướt hoặc đang đứng trong nước; ổ cắm đã ngập, có tia lửa hay mùi khét thì tránh xa, báo người trong nhà và gọi người có chuyên môn.',
    'Không tự sạc lại pin hay bộ sạc từng ngâm nước dù bên ngoài đã khô; đừng tự mở vỏ pin, hãy nhờ nơi bảo hành hoặc thợ có chuyên môn kiểm tra.',
    'Không cố dắt hay chạy xe qua nước đã sâu, không để pin trong túi hay hộp kín, không đặt pin gần vật dễ cháy hay chắn lối đi.'
  ],
  notes: [
    'Mức chịu nước, khả năng chịu điện lưới chập chờn khi giông, vị trí cổng sạc và việc pin có tháo rời được hay không đều khác nhau giữa các xe; hãy đối chiếu với sách hướng dẫn của xe bạn.',
    'Bài này chỉ nêu nguyên tắc an toàn chung; cổng sạc bị ướt, xe đi mưa, sạc trong nhà và phòng cháy cho pin là những chủ đề tách riêng, không bàn lại ở đây.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần sạc pin, pin tháo rời và lưu ý khi tiếp xúc với nước',
    'Hướng dẫn an toàn điện trong gia đình của cơ quan hoặc đơn vị điện lực địa phương'
  ],
  related: ['cong-sac-tren-xe-may-dien-bi-uot-ban-long-hoac-chay-xem-dau-hieu-va-viec-nen-lam', 'bo-sac-xe-may-dien-bi-hong-dau-hieu-nhan-biet', 'lo-dat-hoac-cho-xe-may-dien-di-khi-day-sac-con-cam-cong-sac-day-va-o-cam-bi-giat-kiem-tra-gi-truoc-khi-sac-lai', 'pin-va-sac-xe-may-dien-nhung-dieu-can-biet', 'xe-may-dien-di-mua-co-sao-khong']
};
