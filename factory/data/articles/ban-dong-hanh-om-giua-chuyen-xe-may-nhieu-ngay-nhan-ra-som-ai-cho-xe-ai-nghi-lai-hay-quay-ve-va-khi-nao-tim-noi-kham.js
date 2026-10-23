// AI WIKI TOTAL — S01964 (topic V2); không nêu số liệu, giá hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'ban-dong-hanh-om-giua-chuyen-xe-may-nhieu-ngay-nhan-ra-som-ai-cho-xe-ai-nghi-lai-hay-quay-ve-va-khi-nao-tim-noi-kham',
  title: 'Bạn đồng hành ốm giữa chuyến xe máy nhiều ngày: nhận ra sớm, ai chở xe ai, nghỉ lại hay quay về và khi nào tìm nơi khám',
  seoTitle: 'Bạn đi cùng ốm giữa chuyến xe máy dài ngày: xử lý thế nào',
  metaDescription: 'Một người trong nhóm sốt, đau bụng hay mệt lả giữa chuyến phượt: nhận ra khi họ giấu bệnh, ai chở người, ai chạy xe của họ, nên nghỉ lại, quay về hay đi khám.',
  summary: 'Giữa một chuyến xe máy nhiều ngày, có người trong nhóm bắt đầu sốt, đau bụng hay mệt lả nhưng vẫn nói mình ổn vì sợ làm hỏng chuyến của mọi người. Cả nhóm lúng túng: người đó còn tự lái được không, xe của họ ai cầm, nên nghỉ lại một chỗ, quay về hay đưa đi khám. Bài tách ốm giữa chuyến khỏi mệt sau chặng dài, chỉ cách nhận ra sớm qua những gì cả nhóm thấy trên đường, đặt nguyên tắc người ốm không cầm lái kèm cách xử lý chiếc xe của họ, xếp các lựa chọn thành bậc thang từ nghỉ tại chỗ tới tìm nơi khám, nêu dấu hiệu phải tìm trợ giúp y tế ngay và cách nói để người ốm không thấy mình là gánh nặng.',
  quickAnswer: 'Mệt sau chặng dài hết sau một bữa ăn nóng và một đêm ngủ; ốm thì không đỡ hoặc nặng thêm khi tiếp tục chạy xe vì gió, nắng, mất nước và đường xóc, đồng thời làm phản xạ chậm đi mà người ốm không tự thấy. Khi một người tụt lại, phanh muộn, im lặng khác thường hay bỏ bữa, hãy dừng và hỏi riêng. Người ốm không cầm lái: người vững nhất chở họ, người khác chạy xe của họ, hoặc gửi xe lại chỗ nghỉ rồi quay lại lấy. Nhóm chọn theo bậc thang nghỉ hẳn tại chỗ, rút ngắn chặng, đưa về bằng phương tiện khác hay tìm nơi khám gần nhất, và tìm trợ giúp y tế ngay khi có dấu hiệu nặng như lơ mơ, khó thở, nôn không ngừng hay đau dữ dội.',
  keyPoints: [
    'Mệt hết sau một đêm ngủ, còn ốm nặng thêm khi chạy xe vì gió, nắng, mất nước và đường xóc; phản xạ chậm đi là thứ người ốm không tự nhận ra.',
    'Nhận ra sớm bằng mắt của cả nhóm: tụt lại, phanh muộn, vào cua không gọn, im lặng khác thường, bỏ bữa, uống ít; hỏi riêng và hỏi việc cụ thể thay vì hỏi có sao không.',
    'Người ốm không cầm lái dù nói đã đỡ: người vững tay nhất chở họ, người khác chạy xe của họ sau khi làm quen xe, hoặc gửi xe lại chỗ nghỉ có ghi nhận rồi quay lại lấy.',
    'Quyết định theo bậc thang: nghỉ hẳn tại chỗ, rút ngắn chặng tới nơi có chỗ nghỉ và nơi khám, đưa về bằng phương tiện khác có người đi cùng, hoặc tìm nơi khám gần nhất ngay.',
    'Lơ mơ, khó thở, nôn hay đi ngoài không ngừng, sốt kèm cứng gáy, co giật, đau dữ dội hoặc xấu đi sau cú ngã trước đó là dấu hiệu tìm trợ giúp y tế ngay, không chờ qua đêm.'
  ],
  category: 'ride',
  hub: 'di-phuot',
  date: '2026-10-23',
  updated: '2026-10-23',
  entities: ['bạn đồng hành ốm giữa chuyến', 'mệt sau chặng dài', 'người ốm không cầm lái', 'chở người ốm bằng xe máy', 'gửi xe lại chỗ nghỉ', 'rút ngắn chặng', 'đưa về bằng xe khách', 'nơi khám gần nhất', 'dấu hiệu nguy hiểm'],
  keywords: ['bạn đồng hành ốm giữa chuyến đi phượt', 'người trong nhóm ốm khi đi phượt xe máy', 'người ốm có nên tự lái xe máy', 'nên nghỉ lại hay quay về khi có người ốm', 'khi nào đưa bạn đi khám giữa chuyến'],
  sections: [
    P('Ốm giữa chuyến khác mệt sau chặng dài ở đâu và vì sao gió, nắng, đường xóc làm bệnh nặng thêm', [
      'Sau một chặng dài, ai cũng mệt: vai cứng, lưng ê, mắt khô, đầu óc chậm lại. Cái mệt này có một đặc điểm rất rõ là hết sau bữa ăn nóng và một đêm ngủ đủ; sáng hôm sau người đó lại ăn uống bình thường, nói cười, lên xe tỉnh táo. Ốm thì khác: ngủ một đêm vẫn không đỡ, hoặc đỡ một chút rồi xấu đi khi lên đường, kèm theo sốt, lạnh run, đau bụng, đi ngoài, đau đầu không dứt hay buồn nôn. Phân biệt hai thứ này quan trọng vì cách xử lý gần như ngược nhau: mệt thì nghỉ cho lại sức rồi đi tiếp, còn ốm thì càng đi càng nặng.',
      'Vì sao lại nặng thêm khi tiếp tục chạy xe? Gió táp liên tục vào người làm cơ thể mất nhiệt và mất nước nhanh hơn người ốm tưởng, nhất là khi đang sốt hay vừa đi ngoài nhiều lần. Nắng gắt trên đầu, trong chiếc mũ bảo hiểm kín, lại làm người nóng lên và mệt thêm. Đường xóc, ổ gà, đèo dốc nối nhau khiến người đang đau bụng hay đau đầu bị dằn từng nhịp, mỗi nhịp là một lần đau thêm. Ăn uống dọc đường không đều, uống ít vì ngại dừng, càng làm vòng xoáy này nặng hơn.',
      'Điều đáng ngại nhất lại là thứ người ốm không tự thấy: phản xạ chậm đi. Sốt nhẹ, mất nước, cơn đau âm ỉ làm đầu óc lơ mơ, mắt nhìn đường kém tập trung, tay phanh bóp muộn hơn một nhịp, chân chống xuống đất lúc dừng loạng choạng. Người ốm thường vẫn tin mình lái được vì cảm giác bên trong chỉ là hơi mệt, trong khi người đi sau nhìn thấy xe họ lạng và vào cua không gọn. Chính vì vậy nhóm phải nhìn bằng mắt của người ngoài, không trông chờ người ốm tự nhận.',
      'Một lý do nữa khiến ốm giữa chuyến hay bị coi nhẹ là tâm lý cố gắng. Người ốm sợ làm chậm cả đoàn, sợ mang tiếng yếu, sợ lấy mất ngày nghỉ của bạn bè, nên nói mình ổn và cố theo. Cả nhóm thì nôn nóng về đích hoặc muốn giữ lịch đã đặt trước. Hai nỗi lo này cộng lại thành một người không nên lái vẫn lái. Nhận ra sớm, nói sớm, quyết sớm là cách tránh phải xử lý tình huống khó hơn nhiều vào buổi chiều, giữa đèo, khi trời sắp tối và chỗ nghỉ còn xa.'
    ]),
    P('Nhận ra sớm khi người đi cùng giấu bệnh: tụt lại, phanh muộn, im lặng và bỏ bữa', [
      'Dấu hiệu dễ thấy nhất là tụt lại. Người đang ốm không giữ được nhịp của nhóm: đi chậm hơn, mất hút sau khúc cua, hay dừng lại không rõ lý do. Có người ngược lại chạy ẩu và vượt sai vì sốt ruột muốn kết thúc chặng cho nhanh. Cả hai đều lạ so với cách đi thường ngày của họ, và người chốt đoàn, tức người đi cuối, là người nhìn rõ nhất. Hãy giao hẳn cho người đi cuối nhiệm vụ để ý những thay đổi này và báo cho cả nhóm ở điểm dừng gần nhất.',
      'Phanh muộn và vào cua không gọn là dấu hiệu kín hơn nhưng nguy hiểm hơn. Người sau sẽ thấy xe phía trước bóp phanh sát điểm dừng, nhích vào cua rộng hơn bình thường, đè vạch, hoặc giật mình rồi mới xử lý khi có xe tạt đầu. Nếu một người vốn đi vững mà hôm nay liên tục như vậy, khả năng cao đầu óc họ không còn tỉnh. Đừng đợi tới lúc lạng mạnh mới nói; chỉ cần vài lần bất thường là đã đủ lý do để dừng lại hỏi.',
      'Ở điểm dừng, hãy nhìn cách họ sinh hoạt. Im lặng khác thường là một chỉ báo: người hay nói đùa nay ngồi một góc, trả lời cụt, không rút điện thoại chụp ảnh như mọi khi. Bỏ bữa hoặc chỉ ăn vài miếng, gọi đồ rồi để nguyên, uống nước ít, ngồi xuống là tựa đầu ngay, mặc áo khoác giữa trưa nắng vì thấy lạnh, đi vệ sinh nhiều lần là những thứ cả nhóm thấy được mà không cần ai khám. Nhìn gương mặt: mắt lờ đờ, môi khô, da tái hoặc đỏ bừng đều đáng chú ý.',
      'Cách hỏi quyết định việc họ có nói thật hay không. Hỏi trước mặt cả nhóm bạn có sao không gần như luôn nhận được câu không sao. Hãy để người thân nhất với họ hỏi riêng, hỏi cụ thể: có đau bụng không, có sốt không, đêm qua ngủ được không, sáng nay có ăn được không. Hỏi về việc cụ thể dễ nhận được câu trả lời thật hơn hỏi về cảm giác chung. Và nếu người đó trả lời nhẹ nhàng nhưng dấu hiệu trên đường vẫn còn, hãy tin dấu hiệu hơn lời nói.'
    ]),
    P('Người ốm không cầm lái: ai chở người, ai chạy xe của họ và khi nào gửi xe lại', [
      'Nguyên tắc đầu tiên là người đang ốm không cầm lái, kể cả khi họ nói đã đỡ. Lý do là khoảng cách giữa cảm giác đỡ và phản xạ đủ nhanh để xử lý tình huống còn rất xa, và trên đường không có chỗ cho thử sai. Nguyên tắc này nên được nói ra từ trước chuyến, khi mọi người còn khỏe, để lúc áp dụng không ai thấy bị ép. Khi đã xác định có người ốm, câu hỏi tiếp theo là xử lý con người và chiếc xe của họ thế nào.',
      'Với con người: người vững tay nhất, quen chở người, đi đều và bình tĩnh nên là người chở người ốm. Trước khi lên đường, kiểm tra xem người ốm có ngồi thẳng được, ôm được người lái, đáp lại được khi gọi hay không. Người ngồi sau lơ mơ, gục đầu, buông tay là nguy hiểm cho cả hai, và lúc ấy xe máy không còn là phương tiện phù hợp nữa. Người ốm ngồi sau nên mặc đủ ấm, có kính che gió, còn người lái đi chậm, tránh phanh gấp và dừng thường xuyên để hỏi han.',
      'Với chiếc xe: cách gọn nhất là một người khác trong nhóm chạy xe của người ốm, còn xe của người này nếu có người thứ ba thì chạy tiếp hoặc để lại. Người nhận lái xe lạ cần làm quen vài phút ở chỗ vắng: tầm tay phanh, độ nhạy ga, chân chống, cách sang số nếu có, hành lý buộc trên xe có vướng không. Hành lý của người ốm nên san sang xe khác hoặc buộc lại cho cân, vì xe lạ cộng hành lý lệch là nguyên nhân hay gặp của những cú ngã ở tốc độ thấp.',
      'Khi nhóm không đủ người để vừa chở người vừa chạy xe, hãy gửi xe lại. Nhà nghỉ, quán ăn vừa ghé hay nhà dân gần đó thường sẵn lòng trông xe nếu được hỏi tử tế và có hẹn ngày quay lại. Hãy khóa cổ, khóa thêm nếu có, chụp ảnh xe cùng người trông, ghi lại tên và cách liên lạc của họ, gỡ giấy tờ và đồ giá trị khỏi cốp. Quay lại lấy xe sau có thể bằng xe khách hoặc nhờ người trong nhóm chạy lên; chuyện đó giải quyết được, còn một người ốm cầm lái thì không có cách nào sửa nếu lỡ xảy ra chuyện.'
    ]),
    P('Nghỉ hẳn tại chỗ, rút ngắn chặng, đưa về hay tìm nơi khám: bậc thang quyết định cho cả nhóm', [
      'Quyết định của nhóm không nên là có đi tiếp hay không, mà là chọn bậc nào trên một bậc thang từ nhẹ tới nặng, và cho phép leo lên bậc nặng hơn bất cứ lúc nào tình hình xấu đi. Bậc thấp nhất là nghỉ hẳn tại chỗ: dừng ở nơi đang ở hoặc nơi gần nhất có chỗ ngủ tử tế, cho người ốm nằm nghỉ, uống nước, ăn nhẹ, rồi xem lại sau một đêm. Bậc này phù hợp khi dấu hiệu nhẹ, người ốm vẫn ăn uống được và không có dấu hiệu nguy hiểm nào.',
      'Bậc tiếp theo là rút ngắn chặng: vẫn đi nhưng chỉ tới điểm dừng gần, đường dễ, có chỗ nghỉ và có nơi khám gần đó, bỏ các đoạn đèo và đoạn hẻo lánh đã định. Đây là lựa chọn khi phải rời chỗ hiện tại vì không có nơi ở phù hợp hoặc thời tiết đang xấu đi. Người ốm đi với tư cách người ngồi sau, nhóm đi chậm và dừng nhiều. Hãy xác định trước điểm đến hôm đó và không đổi ý giữa đường chỉ vì thấy người ốm có vẻ khá hơn.',
      'Bậc thứ ba là đưa về bằng phương tiện khác. Khi người ốm không khá sau một đêm, hoặc chặng còn lại quá xa và khó, hãy tìm xe khách, tàu hoặc thuê xe ô tô có người lái đưa người đó về nhà hay tới nơi có người thân chăm sóc. Một người trong nhóm nên đi cùng, không để người ốm về một mình. Xe của họ xử lý như phần trên: gửi lại hoặc người khác chạy. Việc này cần hỏi nhà xe về chỗ ngồi, điểm dừng dọc đường và việc có nhận chở người đang ốm hay không, vì mỗi nhà xe mỗi khác.',
      'Bậc cao nhất là tìm nơi khám gần nhất ngay lúc đó, không chờ qua đêm. Hãy hỏi chủ chỗ nghỉ hoặc người địa phương về trạm y tế, phòng khám hay bệnh viện gần nhất và đường tới đó, vì họ biết chính xác hơn bản đồ. Đừng cố chạy xe máy đường dài tới nơi khám lớn ở xa khi gần đó có chỗ nhỏ hơn; nơi gần có thể sơ cứu, nhận định và chỉ đi đâu tiếp. Khi đã quyết đi khám, cả nhóm cùng dừng hành trình chứ không tách một người đi với người ốm còn phần còn lại chạy tiếp, trừ khi đã bàn kỹ. Chuyện chở người ốm đi khám sao cho an toàn và chuyện nhóm bất đồng khi người muốn về, người muốn đi tiếp đã có bài riêng trên trang.'
    ]),
    P('Dấu hiệu phải tìm trợ giúp y tế ngay và cách nói để người ốm không thấy mình làm hỏng chuyến', [
      'Có những dấu hiệu không được chờ xem sau một đêm. Người ốm lơ mơ, gọi không đáp rõ, nói lẫn, hoặc ngược lại kích động khác thường. Khó thở, thở nhanh, đau tức ngực. Nôn liên tục không giữ được nước, đi ngoài nhiều lần kèm mệt lả, không đứng vững. Sốt kèm cứng gáy, phát ban lan nhanh, hoặc co giật. Đau bụng dữ dội ở một chỗ, nhất là khi ấn vào càng đau. Những dấu hiệu này cần người có chuyên môn xem ngay, và cách đúng là gọi cấp cứu hoặc đưa tới cơ sở y tế gần nhất bằng phương tiện an toàn, không phải tự chẩn đoán rồi chờ.',
      'Cũng cần tìm trợ giúp ngay nếu người ốm vừa ngã xe trước đó, dù nhẹ, nay thấy đau đầu tăng dần, buồn nôn hay nhìn mờ; hoặc nếu họ có bệnh nền đã biết như hen, tim mạch, tiểu đường mà đang xấu đi. Trong lúc chờ hoặc di chuyển, giữ người ốm ấm, ở tư thế thoải mái, không cho uống thuốc của người khác, không tự ý dùng thuốc không rõ, và ghi lại diễn biến: bắt đầu từ lúc nào, đã ăn gì, uống gì, đi ngoài mấy lần, để nói lại với người khám. Bài này không thay cho ý kiến của người có chuyên môn y tế; khi nghi ngờ, hãy chọn hướng cẩn trọng hơn.',
      'Về cách nói. Người ốm hầu như luôn thấy có lỗi, và câu nói của nhóm có thể khiến họ cố giấu thêm hoặc yên tâm nghỉ. Tránh những câu kiểu tiếc quá, hoặc bàn về lịch bị lỡ ngay trước mặt họ. Thay vào đó nói về chuyến đi như của chung: cả nhóm đổi kế hoạch, hôm nay nghỉ, mai tính tiếp; nơi này cũng đáng ở thêm một ngày. Để người ốm được chọn trong các phương án đã lọc sẵn, thay vì bị quyết thay hoàn toàn, họ sẽ bớt cảm giác bị coi là gánh nặng.',
      'Hãy để người ốm vẫn có việc nhẹ và có vai trò: giữ bản đồ, tìm chỗ ăn tối, nhắn tin báo tình hình cho người nhà của cả nhóm. Trước chuyến, nhóm nên thống nhất rằng sức khỏe của một người là lý do hợp lệ để đổi lịch, và nhắc lại điều này khi có người ốm để họ hiểu đây là luật chung đã định, không phải sự nhượng bộ dành riêng cho họ. Chuyện chèn một ngày nghỉ giữa chuyến sao cho khỏi thành ngày chạy phụ, và cách gửi bớt hành lý khi phải đổi phương tiện, đã có bài riêng trên trang.'
    ])
  ],
  checklist: [
    'Trước chuyến, cả nhóm thống nhất: người ốm không cầm lái và sức khỏe là lý do hợp lệ để đổi lịch.',
    'Người đi cuối để ý ai tụt lại, phanh muộn, vào cua không gọn và báo ở điểm dừng gần nhất.',
    'Ở điểm dừng, nhìn cách ăn uống, nói chuyện, sắc mặt; hỏi riêng và hỏi việc cụ thể.',
    'Người ốm ngồi sau phải ngồi thẳng, ôm được người lái và đáp lại khi gọi; không thì không chở bằng xe máy.',
    'Người nhận lái xe của người ốm làm quen xe vài phút ở chỗ vắng, san hoặc buộc lại hành lý cho cân.',
    'Gửi xe lại: khóa kỹ, chụp ảnh cùng người trông, ghi tên và cách liên lạc, gỡ giấy tờ và đồ giá trị.',
    'Chọn bậc trên bậc thang và sẵn sàng nâng bậc khi tình hình xấu đi; hỏi người địa phương về nơi khám gần nhất.',
    'Ghi lại diễn biến bệnh để nói với người khám; không cho dùng thuốc của người khác.'
  ],
  steps: [
    { title: 'Dừng và hỏi riêng', detail: 'Khi thấy một người tụt lại, phanh muộn hay im lặng khác thường, dừng ở điểm an toàn gần nhất và để người thân nhất hỏi riêng bằng câu hỏi cụ thể.' },
    { title: 'Quyết người ốm không lái', detail: 'Nhắc lại nguyên tắc đã thống nhất trước chuyến, kiểm tra người ốm có ngồi sau được không và chọn người vững tay nhất để chở.' },
    { title: 'Xử lý chiếc xe', detail: 'Giao xe của người ốm cho người khác chạy sau khi làm quen xe, hoặc gửi lại chỗ nghỉ với ảnh, tên người trông và hẹn ngày quay lại.' },
    { title: 'Chọn bậc trên bậc thang', detail: 'Nghỉ hẳn tại chỗ, rút ngắn chặng, đưa về bằng phương tiện khác có người đi cùng, hay tìm nơi khám gần nhất; chọn theo dấu hiệu hiện tại, không theo lịch.' },
    { title: 'Theo dõi và nâng bậc khi cần', detail: 'Xem lại sau một đêm; nếu có dấu hiệu nặng như lơ mơ, khó thở, nôn không ngừng hay đau dữ dội thì tìm trợ giúp y tế ngay.' },
    { title: 'Nói chuyện với người ốm', detail: 'Nói về chuyến đi như của chung, cho họ chọn trong các phương án đã lọc và giao việc nhẹ để họ không thấy mình là gánh nặng.' }
  ],
  warnings: [
    'Không để người đang ốm cầm lái, kể cả khi họ khẳng định đã đỡ; phản xạ chậm đi là thứ người ốm không tự nhận ra.',
    'Không chở người ốm ngồi sau khi họ lơ mơ, gục đầu hay không ôm được người lái; lúc đó cần phương tiện khác.',
    'Không tự chẩn đoán và chờ qua đêm khi có dấu hiệu nặng như lơ mơ, khó thở, nôn hay đi ngoài không ngừng, sốt kèm cứng gáy, co giật.',
    'Không cho người ốm dùng thuốc của người khác hay thuốc không rõ; bài này không thay cho ý kiến của người có chuyên môn y tế.',
    'Không giao xe lạ cho người chưa làm quen xe, nhất là khi xe đang chất hành lý lệch.'
  ],
  notes: [
    'Các dấu hiệu nêu trong bài chỉ để nhận biết tình huống và quyết định dừng hay tìm trợ giúp; việc nhận định bệnh thuộc về người có chuyên môn y tế tại nơi khám.',
    'Cách gửi xe, phương tiện đưa người về và điều kiện của nhà xe khác nhau theo từng nơi; hãy hỏi trực tiếp và ghi lại điều đã thỏa thuận.'
  ],
  references: [
    'Tài liệu đào tạo lái xe an toàn, phần điều kiện sức khỏe của người điều khiển phương tiện và đi theo nhóm',
    'Tài liệu hướng dẫn sơ cứu cơ bản và các dấu hiệu cần đưa người bệnh tới cơ sở y tế của các tổ chức y tế cộng đồng'
  ],
  related: [
    'chen-mot-ngay-nghi-giua-chuyen-di-xe-may-nhieu-ngay-khi-nao-can-lam-gi-voi-xe-va-nguoi-tranh-thanh-ngay-chay-phu',
    'nhom-bat-dong-giua-chuyen-di-xe-may-nguoi-muon-quay-ve-nguoi-muon-di-tiep-ai-quyet-va-tach-nhom-the-nao',
    'gui-bot-hanh-ly-ve-nha-hoac-gui-di-truoc-giua-chuyen-xe-may-nhieu-ngay-do-nao-nen-gui-hoi-gi-va-ghi-nhan-ra-sao',
    'di-xe-may-nhung-ngay-hanh-kinh-dau-bung-hay-nguoi-ra-roi-sap-chang-cho-dung-va-khi-nao-nen-nho-nguoi-dua-ve',
    'hoi-chu-cho-nghi-va-nguoi-dia-phuong-ve-duong-ngay-mai-hoi-gi-tin-den-dau-va-doi-chieu-voi-ban-do-the-nao',
    'tham-gia-chuyen-di-xe-may-cua-nhom-chua-quen-hoi-gi-truoc-thu-nhip-o-doan-dau-va-quyen-rut-lui-khi-khong-hop'
  ]
};
