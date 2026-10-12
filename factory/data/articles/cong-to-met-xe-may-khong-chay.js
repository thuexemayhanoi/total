'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'cong-to-met-xe-may-khong-chay',
  title: 'Đồng hồ tốc độ và công tơ mét xe máy không chạy hoặc báo sai: dây, cảm biến và đồng hồ điện tử',
  seoTitle: 'Công tơ mét xe máy không chạy: lỗi dây, cảm biến hay bảng đồng hồ',
  metaDescription: 'Công tơ mét xe máy không chạy, kim tốc độ đứng yên hoặc báo sai? Cách phân biệt lỗi dây cơ, cảm biến, bảng đồng hồ điện tử, ảnh hưởng của lốp và lúc cần đưa thợ.',
  summary: 'Bài giải thích tín hiệu tốc độ đi từ bánh xe lên bảng đồng hồ theo hai kiểu, dây cơ và cảm biến điện tử, rồi dùng sự khác biệt đó để suy đoán nguyên nhân khi kim đứng yên, nhảy loạn hoặc số km không tăng. Nội dung nêu vì sao đổi lốp, lốp mòn hay làm bánh có thể làm số đọc lệch, cách tách lỗi đường tín hiệu khỏi lỗi nguồn điện hay bảng đồng hồ, và vì sao số km phải phản ánh độ mòn thật của xe chứ không nên bị chỉnh. Cuối bài là quan sát nên ghi lại và ranh giới giao thợ.',
  quickAnswer: 'Kim tốc độ đứng yên hoặc nhảy loạn kèm số km không tăng thường do đường tín hiệu từ bánh xe bị gián đoạn: dây cơ gãy hoặc khô, cảm biến và giắc cắm lỏng, hoặc lỗi nguồn điện và bảng đồng hồ. Kim và số km cùng đứng gợi ý lỗi ở dây hay cảm biến; nhiều đèn cùng chớp gợi ý nguồn điện hoặc bảng đồng hồ. Cách xử lý tùy kiểu xe, nên hãy ghi lại triệu chứng rồi đưa thợ.',
  keyPoints: [
    'Đồng hồ chỉ nhận một thông tin là bánh xe hoặc trục nối với bánh đang quay nhanh hay chậm; tín hiệu đi bằng dây cơ hoặc bằng cảm biến điện tử tùy xe.',
    'Kim đứng yên cùng số km không nhích gợi ý đường tín hiệu bị đứt; nhiều đèn báo chớp loạn gợi ý nguồn điện hoặc chính bảng đồng hồ.',
    'Đổi cỡ lốp, lốp mòn hay làm bánh đều có thể làm kim chỉ lệch, vì đồng hồ suy ra tốc độ từ số vòng quay nhân với chu vi bánh đã đặt sẵn.',
    'Số km phản ánh độ mòn thật của xe nên không được chỉnh cho đẹp; sửa để đồng hồ đếm lại đúng khác hẳn việc làm sai lệch số đã đi.',
    'Ghi lại triệu chứng, hoàn cảnh xảy ra và các đèn báo khác; mùi khét, khói hoặc đèn ABS sáng kèm cảm giác phanh khác lạ là lý do dừng xe và ra thợ.'
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['dây công tơ mét', 'cảm biến tốc độ bánh xe', 'bảng đồng hồ điện tử', 'số km hiển thị', 'chu vi bánh xe', 'giắc cắm cảm biến'],
  keywords: ['công tơ mét xe máy không chạy', 'đồng hồ tốc độ xe máy hỏng', 'đồng hồ xe máy báo sai', 'kim tốc độ xe máy đứng yên'],
  sections: [
    P('Tín hiệu tốc độ đi từ bánh xe lên đồng hồ như thế nào', [
      'Bảng đồng hồ không tự đo được tốc độ. Nó chỉ nhận một thông tin duy nhất: bánh xe, hoặc một trục nối với bánh xe, đang quay nhanh hay chậm. Với kiểu dây cơ, thông tin ấy đi bằng chuyển động cơ học. Một bộ răng nhỏ ở cụm bánh quay theo bánh, kéo sợi lõi xoắn chạy trong ống bọc mềm, và đầu kia của sợi lõi làm quay cơ cấu trong bảng đồng hồ. Ở đó, một nam châm quay kéo kim lệch ra, lò xo cuộn kéo kim về, nên kim dừng ở vị trí tương ứng với tốc độ. Cụm bánh răng giảm tốc phía sau cộng dồn các vòng quay thành số km. Vì chung một sợi dây, kim và số km ở kiểu này thường cùng sống hoặc cùng chết. Điểm lấy tín hiệu, bánh trước hay phía truyền động, tùy xe.',
      'Kiểu điện tử bỏ hẳn sợi dây quay. Một cảm biến tốc độ đặt gần vòng răng hoặc các nam châm nhỏ gắn cùng bánh xe hay trục truyền động, và mỗi lần răng hoặc nam châm đi ngang qua, cảm biến phát ra một xung điện. Xung chạy theo dây điện tới bảng đồng hồ, hoặc qua bộ điều khiển rồi mới tới bảng, tùy xe. Bên trong bảng, mạch điện đếm nhịp xung để ra tốc độ, rồi nhân với chu vi bánh xe mà nhà sản xuất đã đặt sẵn để ra quãng đường. Chuỗi này dài hơn kiểu cơ, gồm vòng răng, cảm biến, giắc cắm, dây dẫn, bộ xử lý và màn hình, nên chỗ nào đứt thì số đọc cũng đứt theo.',
      'Nhận ra xe mình thuộc kiểu nào là bước đầu của mọi chẩn đoán, và khá dễ làm bằng mắt. Xe có một ống bọc tròn chạy từ cụm bánh xe lên sau bảng đồng hồ thường dùng dây cơ. Xe chỉ có dây điện nhỏ cùng giắc cắm gần bánh xe, hoặc bảng hiển thị bằng màn hình số, thường dùng cảm biến, dù vẫn có bảng kim chạy bằng điện. Sách hướng dẫn của xe là nguồn xác nhận chắc nhất. Một số xe có ABS còn dùng chung tín hiệu tốc độ bánh cho đồng hồ, nên đèn ABS và đồng hồ tốc độ cùng bất thường gợi ý chung một nguồn, nhưng điều này tùy xe. Chỗ lấy tín hiệu cũng quyết định việc thay bánh hay đổi lốp ảnh hưởng ra sao, sẽ bàn ở phần sau.'
    ]),
    P('Kim đứng yên hoặc nhảy loạn: nên nghi ngờ chỗ nào trước', [
      'Với xe dùng dây cơ, kim đứng yên cùng số km không nhích thường chỉ về chỗ đứt giữa bánh xe và bảng đồng hồ. Lõi dây có thể gãy sau nhiều năm xoắn liên tục, đầu nối có thể lỏng hoặc tuột khỏi cụm răng, và bộ răng dẫn ở cụm bánh có thể mòn hay khô mỡ. Kim rung lắc hoặc nhảy lên xuống, đôi khi kèm tiếng rít hay lạch cạch từ phía dưới bảng đồng hồ, gợi ý dây khô, bị gập gắt khi đánh lái hoặc cọ vào chi tiết khác. Nếu kim đổi tính khí theo cách bẻ lái hay độ nhún của phuộc, hướng nghi ngờ càng nghiêng về đường đi của dây. Tháo dây, tra mỡ hay thay dây là việc của thợ.',
      'Ở kiểu cảm biến, kim chết hẳn có thể do cảm biến hỏng, đứt dây tín hiệu, hoặc giắc cắm lỏng, ướt, oxy hóa vì nước rửa xe và bụi đường. Kim chập chờn, lúc có lúc không, lúc qua ổ gà lại mất, thường hợp với giắc cắm lỏng hay dây bị cọ nứt vỏ ngay gần bánh xe. Cảm biến nằm sát bánh nên hay bám bụi, bùn hoặc mạt sắt, làm tín hiệu yếu đi, nhất là ở loại làm việc bằng từ trường. Kim nhảy loạn ở đúng một khoảng tốc độ gợi ý vòng răng biến dạng hay bám bẩn, hoặc khe hở giữa cảm biến và vòng răng đã lệch. Đây là cách mô tả cho thợ chứ không phải kết luận; đừng rút giắc, thổi khí nén hay chọc vật nhọn vào cảm biến.',
      'Không phải lúc nào lỗi cũng nằm trên đường tín hiệu. Chỉ riêng kim tốc độ và số km bất thường, trong khi vòng tua, mức xăng, nhiệt độ và đèn báo vẫn bình thường, thì nên nghi ngờ đường tín hiệu tốc độ. Ngược lại, màn hình chớp tắt, nhiều đèn báo sáng loạn hoặc cả bảng khởi động lại khi bóp phanh hay bấm còi là dấu hiệu của nguồn điện, dây mass hoặc chính bảng đồng hồ: ắc quy yếu, cọc bình lỏng, giắc cắm sau bảng bị oxy hóa, nước lọt vào bảng. Màn hình mờ, thiếu nét hoặc đọng hơi nước cho thấy bảng đã ẩm. Hãy ghi lại cả những đèn báo khác sáng cùng lúc, vì thợ dùng chúng để biết lỗi chung hay riêng.'
    ]),
    P('Sai lệch sau khi thay bánh hoặc đổi lốp', [
      'Bảng đồng hồ chỉ biết bánh quay bao nhiêu vòng, không biết xe đi được bao xa. Quãng đường được suy ra bằng cách nhân số vòng với chu vi bánh xe mà nhà sản xuất đã đặt sẵn, nên mọi thay đổi làm chu vi thật của bánh khác đi đều kéo theo sai lệch cả tốc độ lẫn số km. Lốp lớn hơn hoặc cao hơn chuẩn khiến mỗi vòng quay đi xa hơn, kim sẽ chỉ thấp hơn tốc độ thật; lốp nhỏ hơn thì ngược lại. Nhiều xe còn được hiệu chỉnh để kim thường chỉ cao hơn thực tế một chút, nên sai lệch nhỏ theo chiều chỉ cao chưa chắc là hỏng. Chênh lệch lớn, hoặc kim chỉ thấp hơn thực tế, mới nên đưa thợ kiểm tra.',
      'Ngay cả khi giữ nguyên cỡ, chu vi lăn của lốp vẫn thay đổi nhẹ trong suốt đời lốp. Lốp mới gai cao nên chu vi lớn hơn, lốp mòn gần hết gai thì nhỏ đi chút ít, và lốp non hơi bị ép xẹp cũng làm chu vi lăn nhỏ lại. Những thay đổi này thường nhỏ, không phải đồng hồ hỏng, nhưng có thể khiến kim chỉ khác đi sau khi thay cặp lốp mới. Đổi sang lốp bề ngang khác, thân lốp thấp hoặc cao hơn, hay mâm khác cỡ thì chênh lệch rõ rệt hơn nhiều. Muốn có mốc tham khảo, hãy nhờ người ngồi sau đọc tốc độ trên ứng dụng định vị ở đoạn đường vắng, an toàn, và chỉ coi đó là tham khảo, vì định vị cũng có sai số.',
      'Một nhóm lỗi khác không do chu vi mà do cơ cấu lấy tín hiệu bị xê dịch lúc làm bánh. Với xe dùng dây cơ, bộ răng dẫn ở cụm bánh phải khớp đúng vào rãnh dẫn động; lắp lệch, thiếu hoặc không ăn khớp thì kim đứng yên ngay sau lần thay bánh hay vá lốp. Với xe dùng cảm biến, vòng răng hoặc nam châm quay cùng bánh phải đúng chỗ, giắc cắm và dây dẫn phải nguyên vẹn, vì lúc làm bánh chúng dễ bị kéo, kẹp hoặc đụng. Bánh hay mâm thay bằng loại khác kiểu có thể không có chỗ gắn các chi tiết ấy. Kim chết ngay sau khi làm bánh thì nên quay lại chỗ đã làm và mô tả đúng điều xảy ra. Xe đổi tỷ số truyền phía trước xích cũng có thể lệch tốc độ, tùy xe lấy tín hiệu ở đâu.'
    ]),
    P('Số km không tăng và những điều cần lưu ý', [
      'Số km được cộng từ cùng nguồn tín hiệu với kim tốc độ, chỉ khác cách xử lý. Ở bảng cơ, một chuỗi bánh răng nhựa cộng dồn các vòng quay, nên dây đứt hay kim chết thì số cũng đứng theo. Kim vẫn chạy mà số km nằm im thường làm người ta nghĩ tới bộ răng đếm bên trong bảng đã mòn hoặc trượt, và việc sửa cần mở bảng nên thuộc về thợ. Ở bảng điện tử, quãng đường được tính từ xung rồi lưu vào bộ nhớ; kim tốc độ vẫn hiện nhưng quãng đường không tăng có thể do mạch đếm hay bộ nhớ của bảng gặp lỗi. Cách phân biệt chi tiết tùy xe, nên đừng vội kết luận trước khi thợ kiểm tra bằng thiết bị phù hợp.',
      'Số km là một trong ít thông tin cho người mua biết xe đã đi bao nhiêu và đã mòn tới đâu. Nhớt, xích, lốp, phuộc, má phanh đều mòn theo quãng đường thật, nên số hiển thị chạm thẳng vào sự trung thực khi mua bán. Sửa đồng hồ để nó đếm lại đúng từ lúc hỏng trở đi là một chuyện; chỉnh con số cho thấp hơn quãng đường đã đi là che giấu độ mòn thật của xe, và đó là điều không nên làm, cũng không có hướng dẫn nào ở đây. Số km thấp bất thường so với tình trạng gỉ, mòn của xe chính là dấu hiệu người mua hay nghi ngờ. Ghi chú thật về thời gian đồng hồ không đếm giúp người mua hiểu đúng tình trạng xe.',
      'Hỏng bộ đếm còn kéo theo một rắc rối thực tế là lịch bảo dưỡng. Nhiều mốc bảo dưỡng tính theo số km, nên đồng hồ đứng thì mốc cũng đứng, và nhớt, xích, má phanh có thể quá hạn mà không ai nhận ra. Hãy ghi lại ngày thay nhớt, số km cuối cùng còn đọc được và mức đi lại trung bình mỗi tuần, dùng thời gian làm mốc dự phòng. Thay cả bảng đồng hồ thì bảng mới có thể hiển thị khác bảng cũ, nên cần giữ phiếu của thợ ghi lại số km của bảng cũ nếu còn đọc được. Khi bán xe, hãy nói rõ chuyện đã sửa hay thay đồng hồ, kèm giấy tờ của thợ, để người mua không phải đoán.'
    ]),
    P('Việc nên làm và lúc nào đưa xe cho thợ', [
      'Trước khi mang xe đi, hãy quan sát những gì không cần dụng cụ. Ghi lại kim đứng hẳn hay nhảy, số km có tăng không, hiện tượng bắt đầu từ lúc nào và có gắn với sự kiện nào như rửa xe, đi mưa, ngập nước, thay lốp, làm bánh hay thay ắc quy. Xem các đồng hồ khác và đèn báo còn bình thường không. Nhìn bằng mắt phần ống bọc dây nếu thấy được, xem có bị gập, kẹt hay rách; nhìn giắc cắm gần bánh xem có ướt, nứt hoặc tuột. Chỉ nhìn, không kéo, không bẻ. Việc đối chiếu với sách hướng dẫn cũng có ích vì mỗi xe lấy tín hiệu một kiểu. Ghi chú càng cụ thể thì thợ càng khoanh vùng nhanh và đỡ phải tháo nhiều chỗ.',
      'Kim tốc độ hỏng không làm xe mất khả năng chạy, nhưng làm bạn mất khả năng ước lượng tốc độ, và đó là rủi ro thật: dễ chạy nhanh hơn dự định hoặc không biết mình đang ở tốc độ nào trên đoạn có giới hạn. Hãy chạy chậm hơn thường lệ, giữ khoảng cách rộng và dựa vào nhịp xe quanh, tiếng máy, tiếng gió. Dừng xe và ra thợ ngay nếu thấy mùi khét, khói, dây nóng hoặc chảy ở khu vực bảng đồng hồ hay bánh xe. Lúc đó hãy bóp phanh, dừng xe an toàn rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Đèn ABS sáng kèm cảm giác phanh khác lạ cũng là lý do ra thợ.',
      'Thợ có chuyên môn thường kiểm tra theo chuỗi: dây cơ cùng bộ răng dẫn ở cụm bánh, hoặc cảm biến cùng vòng răng, giắc cắm và dây dẫn, rồi tới nguồn điện, dây mass và cuối cùng là bảng đồng hồ. Với đồng hồ điện tử, họ có thể đọc dữ liệu để xem tín hiệu tốc độ có tới bảng không. Hãy nói rõ bạn muốn đồng hồ đếm lại đúng, và nhờ ghi số km hiện tại lên phiếu sửa. Nếu phải thay bảng hay thay dây, hỏi xem chi tiết có đúng dòng xe không. Đừng nhờ ai điều chỉnh số km cho khớp với con số cũ. Sau sửa, thử lại trên đoạn đường an toàn và hỏi thợ cách nhận ra kim còn lệch.'
    ])
  ],
  checklist: [
    'Ghi lại kim tốc độ đứng yên hay nhảy loạn, số km có tăng không và hiện tượng bắt đầu sau sự kiện nào như rửa xe, đi mưa, thay lốp hay làm bánh.',
    'Xem vòng tua, mức xăng, nhiệt độ và các đèn báo khác còn bình thường không để phân biệt lỗi tín hiệu tốc độ với lỗi nguồn điện hoặc bảng đồng hồ.',
    'Xác định xe dùng dây cơ hay cảm biến bằng cách nhìn đường dây từ cụm bánh lên bảng đồng hồ và đối chiếu sách hướng dẫn.',
    'Nhìn bằng mắt ống bọc dây và giắc cắm gần bánh xe xem có gập, rách, ướt hoặc tuột, chỉ nhìn chứ không kéo hay bẻ.',
    'Ghi ngày thay nhớt, ngày bảo dưỡng và số km cuối cùng còn đọc được để làm mốc dự phòng khi đồng hồ không đếm.'
  ],
  steps: [
    { title: 'Quan sát và ghi lại triệu chứng', detail: 'Ghi kim đứng yên hay nhảy, số km tăng hay không, hiện tượng bắt đầu lúc nào và có gắn với rửa xe, đi mưa, thay lốp hay làm bánh không.' },
    { title: 'Đối chiếu kiểu tín hiệu của xe', detail: 'Xem xe có ống bọc dây cơ từ cụm bánh lên bảng đồng hồ hay chỉ có dây điện và giắc cắm, rồi đối chiếu sách hướng dẫn để biết mình thuộc kiểu nào.' },
    { title: 'Tách lỗi tín hiệu khỏi lỗi nguồn điện', detail: 'Nếu chỉ kim tốc độ và số km bất thường thì nghiêng về đường tín hiệu; nếu cả bảng chớp tắt hoặc nhiều đèn báo loạn thì nghiêng về nguồn điện hay bảng đồng hồ.' },
    { title: 'Đưa thợ kiểm tra và ghi số km lên phiếu', detail: 'Nhờ kiểm tra dây hoặc cảm biến, giắc cắm, nguồn điện và bảng; yêu cầu ghi số km hiện tại lên phiếu sửa và không nhờ chỉnh con số cho khớp số cũ.' }
  ],
  warnings: [
    'Mùi khét, khói, dây nóng hoặc chảy ở khu vực bảng đồng hồ hay bánh xe là lý do dừng xe ngay: bóp phanh, dừng an toàn, tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt rồi đưa xe đi kiểm tra.',
    'Đèn ABS sáng hoặc cảm giác phanh khác lạ cùng lúc với đồng hồ tốc độ bất thường cần được thợ kiểm tra trước khi chạy tiếp; không tự tháo bất kỳ chi tiết phanh hay bánh xe nào.',
    'Không tự rút giắc cảm biến, thổi khí nén hay chọc vật nhọn vào cảm biến và vòng răng; không chỉnh hoặc nhờ chỉnh số km vì số hiển thị phải phản ánh độ mòn thật của xe.'
  ],
  notes: [
    'Cách lấy tín hiệu tốc độ, vị trí cảm biến hay dây và cách bảng đồng hồ lưu quãng đường khác nhau tùy dòng xe; các dấu hiệu trong bài chỉ là gợi ý để trao đổi với thợ, không thay cho việc chẩn đoán bằng thiết bị.',
    'Sai lệch nhỏ giữa kim tốc độ và tốc độ thực là chuyện thường gặp và có thể do lốp mới, lốp mòn hay áp suất lốp; chỉ chênh lệch lớn hoặc thay đổi đột ngột sau khi làm bánh mới đáng nghi ngờ.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bảng đồng hồ, đèn báo và thông số lốp của đúng dòng xe',
    'Tài liệu kỹ thuật của nhà sản xuất về hệ thống truyền tín hiệu tốc độ và bảng đồng hồ của đúng dòng xe'
  ],
  related: ['xe-cu-bi-chinh-cong-to-met', 'cam-bien-tren-xe-phun-xang', 'den-canh-bao-tren-xe-may-hieu-va-xu-ly', 'lich-bao-duong-xe-may-dinh-ky-theo-so-km']
};
