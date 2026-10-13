'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'dong-ho-odo-va-trip-tren-xe-may-doc-so-km-dat-lai-trip-va-dung-de-theo-doi-xe',
  title: 'Đồng hồ ODO và TRIP trên xe máy: đọc số km, đặt lại TRIP và dùng để theo dõi xăng, lịch bảo dưỡng',
  seoTitle: 'ODO và TRIP trên xe máy là gì: cách xem, đặt lại và dùng hiệu quả',
  metaDescription: 'ODO là tổng quãng đường xe đã đi, TRIP là quãng đường tính từ lần đặt lại. Cách xem, đặt lại TRIP và dùng để theo dõi xăng, nhớ lịch bảo dưỡng.',
  summary: 'Bài giải thích hai dãy số trên đồng hồ xe máy: ODO là tổng quãng đường xe đã đi từ khi xuất xưởng và không đặt lại được, còn TRIP là quãng đường tạm tính kể từ lần bạn đặt lại. Nội dung nêu cách đọc trên đồng hồ cơ và điện tử, cách đặt lại TRIP theo sách hướng dẫn khi xe đã dừng, cách dùng TRIP theo dõi xăng hay quãng đi giữa các lần sạc, cách ghi ODO để nhớ lịch bảo dưỡng, và lưu ý khi số km sai lệch hoặc khi mua xe cũ.',
  quickAnswer: 'ODO là tổng quãng đường xe đã đi từ khi xuất xưởng và không đặt lại được; TRIP là quãng đường tạm tính kể từ lần bạn đặt lại. Muốn đặt lại TRIP, hãy dừng xe rồi làm theo sách hướng dẫn, thường là giữ nút, xoay núm hoặc chọn chế độ. Đặt lại TRIP mỗi lần đổ đầy xăng giúp biết xe đi được bao xa với một bình; ghi ODO mỗi lần bảo dưỡng giúp nhớ lịch.',
  keyPoints: [
    'ODO là tổng quãng đường xe đã đi từ khi xuất xưởng và người dùng không đặt lại được; TRIP là quãng đường tạm tính kể từ lần bạn đặt lại, một số xe có hai TRIP.',
    'Đồng hồ cơ hiển thị bằng các ô số lăn, đồng hồ điện tử hiển thị trên màn hình và chuyển qua lại bằng nút; cách đặt lại TRIP tùy xe, nên theo sách hướng dẫn và chỉ làm khi xe đã dừng.',
    'Đặt lại TRIP mỗi lần đổ đầy xăng cho biết xe đi được bao xa với một bình, giúp nhận ra khi xe hao xăng bất thường và ước chừng quãng còn lại trước đoạn đường vắng.',
    'Ghi ODO vào sổ hay điện thoại mỗi lần thay nhớt, bảo dưỡng để biết lần sau; với xe điện, theo dõi quãng đi giữa các lần sạc để nhận ra pin yếu dần.',
    'Số đọc có thể lệch khi đổi bánh hay lốp khác cỡ, ODO không tăng là lỗi cần sửa, ODO cần đối chiếu khi mua xe cũ vì có thể bị chỉnh; không bấm nút đồng hồ khi xe đang chạy.'
  ],
  category: 'wiki',
  hub: 'thuat-ngu-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['công tơ mét', 'bộ đếm quãng đường tích lũy', 'bộ đếm quãng đường tạm tính', 'đồng hồ cơ và đồng hồ điện tử', 'nhật ký bảo dưỡng', 'mức hao nhiên liệu'],
  keywords: ['ODO và TRIP trên xe máy là gì', 'cách xem số km đã đi trên xe máy', 'cách reset trip xe máy', 'đồng hồ trip xe máy dùng để làm gì', 'ý nghĩa ODO và TRIP trên xe máy'],
  sections: [
    P('ODO và TRIP khác nhau thế nào: một bên cộng dồn mãi, một bên đo từng chặng', [
      'Trên bảng đồng hồ xe máy, ODO và TRIP trả lời hai câu hỏi khác nhau: ODO cho biết xe đã đi tổng cộng bao xa từ ngày xuất xưởng, còn TRIP cho biết xe đã đi bao xa kể từ lần bạn đặt lại. ODO là cách gọi tắt của bộ đếm quãng đường tích lũy: con số chỉ tăng chứ không giảm và người dùng không đặt lại được, nên nó là bản ghi tuổi đời của chiếc xe. Trong lời nói hằng ngày, ODO hay được gọi là công tơ mét hoặc số km, và có người dùng cùng cách gọi ấy cho cả cụm đồng hồ. Lịch bảo dưỡng theo quãng đường và việc đánh giá xe cũ đều thường lấy ODO làm gốc.',
      'TRIP là bộ đếm quãng đường tạm tính, bắt đầu đếm từ lúc bạn đặt lại về không và cộng dần cho tới lần đặt lại kế tiếp. Trong lúc xe chạy, ODO và TRIP tăng cùng nhịp; khác biệt là ODO không quay về điểm xuất phát, còn TRIP do bạn quyết định bắt đầu lúc nào. Giả sử bạn đặt lại TRIP trước khi rời nhà đi một chuyến dài: tới nơi, TRIP cho biết đúng quãng đường của chuyến đó, còn ODO vẫn cộng vào tổng của cả đời xe. Một số xe có hai TRIP, thường phân biệt bằng chữ cái hoặc thứ tự; hai bộ đặt lại độc lập nên bạn đo được hai việc song song, chẳng hạn một bộ theo từng bình xăng, một bộ theo cả hành trình.',
      'Từ đó suy ra cách dùng riêng cho từng bộ. ODO hợp với những việc dài hạn: theo dõi tuổi đời của xe, canh mốc bảo dưỡng, đối chiếu độ mòn với số km. TRIP hợp với những việc ngắn hạn: đo một chuyến đi, một bình xăng hay một lần sạc. Vì TRIP có thể bị đặt lại bất cứ lúc nào, đừng lấy nó làm mốc cho lịch bảo dưỡng, cũng đừng coi nó là bằng chứng về tuổi đời của xe. Đặt lại TRIP không làm ODO thay đổi: nếu bạn vừa bấm và thấy một dãy số về không, đó là TRIP, còn ODO vẫn nguyên. Bên cạnh dãy số thường có nhãn chữ, hãy đọc nhãn ấy để biết mình đang xem bộ nào.'
    ]),
    P('Đặt lại TRIP trên đồng hồ cơ và đồng hồ điện tử: mỗi xe một cách', [
      'Đồng hồ cơ hiển thị quãng đường bằng các ô số lăn, mỗi ô là một con lăn nhỏ có in chữ số và quay dần theo quãng đường xe đi. Dãy ODO của loại này không có nút đặt lại, đó là chủ ý của thiết kế. Với TRIP, việc đặt lại (hay reset) thường dùng một núm hoặc một nút cơ khí nhỏ ở gần mặt đồng hồ, và cách thao tác tùy xe: có xe chỉ cần nhấn, có xe phải nhấn giữ hoặc xoay núm cho tới khi các ô về không. Hãy làm đúng theo sách hướng dẫn của xe. Đừng cưỡng ép khi núm cứng hay đã hết hành trình, vì cơ cấu bên trong có thể bị hỏng; núm kẹt thì mang xe đến thợ.',
      'Đồng hồ điện tử hiển thị quãng đường bằng chữ số trên màn hình, và bạn chuyển giữa ODO, TRIP cùng các thông tin khác bằng một hoặc vài nút, đặt trên đồng hồ hay trên cụm công tắc tay lái. Thông thường bạn chuyển tới chế độ TRIP muốn đặt lại, rồi giữ nút trong một lúc cho tới khi dãy số về không. Chi tiết khác nhau rất nhiều: có xe dùng một nút, có xe dùng cặp nút, có xe bắt chọn chế độ trước; nhấn nhanh và nhấn giữ có thể cho kết quả khác hẳn nhau. Có xe còn gắn các thông số trung bình đi kèm TRIP, nên đặt lại một thứ có thể xóa luôn thứ khác. Sách hướng dẫn, phần nói về bảng đồng hồ, là nguồn đúng nhất.',
      'Quy tắc chung cho mọi loại đồng hồ là chỉ thao tác khi xe đã dừng hẳn: tấp vào chỗ an toàn, chống xe vững rồi mới cúi nhìn và bấm. Đặt lại TRIP không có gì gấp, nên không có lý do để làm lúc đang chạy; rời mắt khỏi đường một thoáng giữa dòng xe đông cũng đủ gây tai nạn, huống chi bỏ tay khỏi tay lái để dò nút. Thói quen tốt là đặt lại TRIP ngay tại trạm xăng, lúc xe đã đứng yên. Sau khi bấm, hãy nhìn lại để chắc chắn đúng bộ TRIP đã về không và ODO vẫn nguyên. Nếu bấm mãi không được, nút bị kẹt hay màn hình không phản ứng, đừng cố mở đồng hồ tự sửa, hãy mang xe đến thợ có chuyên môn.'
    ]),
    P('Dùng TRIP để theo dõi xăng và ước chừng quãng đường còn lại', [
      'Cách dùng hữu ích nhất của TRIP là gắn nó với bình xăng. Mỗi lần đổ đầy, bạn đặt lại TRIP về không; đến lần đổ đầy kế tiếp, hãy ghi số trên TRIP trước khi đặt lại, vì đó là quãng đường xe đã đi với đúng lượng xăng vừa bổ sung. Để các lần so sánh được với nhau, hãy đổ theo cùng một cách, dừng ở cùng một mức đầy, chống xe cùng một kiểu chân chống. Đừng cố đổ tràn cổ bình, vì xăng tràn vừa lãng phí vừa nguy hiểm khi ở gần nguồn lửa. Ghi đủ vài lần là bạn có con số tham chiếu riêng cho xe của mình, sát thực tế hơn mọi con số công bố chung vì phản ánh đúng đường đi và thói quen lái của bạn.',
      'Giá trị thật sự của thói quen này nằm ở phép so sánh giữa các lần. Cùng kiểu đường, cùng cách chạy, cùng cách đổ mà quãng đi được với một bình ngắn dần qua vài lần liên tiếp thì xe đang hao xăng hơn bình thường. Con số không nói nguyên nhân, nhưng gợi ý nên nhờ thợ xem những thủ phạm quen thuộc như lốp non hơi, phanh bị bó, lọc gió bẩn hay bugi đã yếu. Cũng nên loại trừ lý do ngoài xe: đường kẹt, chở nặng, chạy ngược gió hay đổi thói quen vặn ga đều làm quãng đi được ngắn lại. Mùi xăng nồng hoặc vệt xăng ướt dưới xe không còn là chuyện hao xăng mà là rò rỉ: dừng xe, tránh lửa và đưa xe đi kiểm tra.',
      'TRIP còn giúp ước chừng quãng còn lại trước đoạn đường vắng hay chuyến đi dài. Từ các lần ghi trước, bạn biết xe thường đi được bao xa từ lúc đổ đầy đến khi đèn báo xăng sáng; so với TRIP hiện tại, bạn thấy mình còn rộng rãi hay đã gần mốc ấy, rồi đổ thêm xăng sớm thay vì chờ trạm kế tiếp. Đó là phép ước lượng, không phải lời cam kết: dốc, gió ngược và chở nặng đều làm quãng đi được ngắn lại. Với xe điện, hãy đặt lại TRIP sau mỗi lần sạc đầy và ghi quãng đi được cho tới lần sạc kế tiếp. Quãng ấy ngắn dần qua nhiều tuần trong điều kiện tương đương là gợi ý pin đang yếu, nên nhờ nơi có chuyên môn kiểm tra.'
    ]),
    P('Dùng ODO để nhớ lịch thay nhớt và bảo dưỡng', [
      'Lịch thay nhớt và bảo dưỡng định kỳ của nhà sản xuất thường tính theo quãng đường, và quãng đường đó chính là ODO. Vì ODO liên tục và không bị đặt lại nhầm tay, nó là con số đáng tin để neo mọi mốc bảo dưỡng. Cách làm rất đơn giản: mỗi lần thay nhớt hay đưa xe đi bảo dưỡng, hãy ghi lại ODO lúc đó cùng ngày làm và việc đã làm vào sổ tay hoặc ghi chú trong điện thoại. Lần sau, lấy ODO hiện tại trừ đi số đã ghi là biết xe đã đi bao xa kể từ lần đó và đã gần mốc trong sách hướng dẫn hay chưa, thay vì nhớ mơ hồ rằng hình như mới thay gần đây.',
      'Khoảng cách giữa hai lần thay nhớt hay bảo dưỡng do nhà sản xuất khuyến nghị cho đúng dòng xe, ghi trong sách hướng dẫn hoặc sổ bảo hành, nên không có mốc chung nào đúng cho mọi xe. Nhiều lịch tính cả theo quãng đường lẫn theo thời gian, cái nào đến trước thì làm trước, vì nhớt vẫn xuống cấp theo ngày tháng dù xe ít chạy. Do đó, ngoài ODO, bạn nên ghi cả ngày làm để theo dõi được cả hai chiều, và khi phân vân thì đối chiếu sách hướng dẫn hoặc hỏi thợ. Xe hay chạy đường kẹt, chạy đoạn ngắn, chở nặng hoặc đi nhiều bụi thường nên bảo dưỡng sớm hơn mốc tính theo ODO, vì máy làm việc nhiều giờ trong khi số km tích lũy lại ít.',
      'Một dòng ghi chú gồm ba thứ là đủ: ODO, ngày và việc đã làm. Hãy ghi ngay tại tiệm khi nhận xe, vì để đến tối rất dễ quên hay ghi lệch. Chụp luôn bảng đồng hồ bằng điện thoại là cách ghi nhanh và khó sai, ảnh còn mang theo thời gian chụp. Bạn cũng có thể ghi những lần thay lốp, má phanh hay lọc gió để thấy chu kỳ thật của từng chi tiết với cách chạy của riêng mình, rồi đối chiếu với khuyến nghị của nhà sản xuất. Gom lại, các dòng này thành một cuốn nhật ký bảo dưỡng, và nếu sau này bán xe, một cuốn nhật ký có ODO ghi đều đặn là tư liệu đáng tin hơn mọi lời nói.'
    ]),
    P('Khi số km sai lệch và những lưu ý lúc mua xe cũ', [
      'Số km trên đồng hồ không phải lúc nào cũng khớp tuyệt đối với quãng đường thật. Đồng hồ suy ra quãng đường từ chuyển động của bánh xe hoặc bộ truyền động, tính theo cỡ bánh mà xe được thiết kế. Vì vậy khi bạn đổi bánh hay lốp sang cỡ khác, số đọc sẽ lệch: lốp lớn hơn khiến mỗi vòng quay đi xa hơn nên đồng hồ báo thiếu, lốp nhỏ hơn thì ngược lại. Lốp mòn nhiều cũng làm số đọc lệch đôi chút. Chênh lệch nhỏ so với quãng đường đo bằng thiết bị khác là bình thường; với TRIP, điều quan trọng là so sánh nhất quán giữa các lần. Xe đã đổi cỡ bánh thì nên đọc các con số theo sự thay đổi ấy, đừng tin tuyệt đối.',
      'ODO không tăng khi xe đang chạy là lỗi cần sửa, không phải chuyện nhỏ có thể bỏ qua. Nguyên nhân thường nằm ở khâu truyền tín hiệu, chẳng hạn dây dẫn động hay cảm biến, hoặc ở chính bộ hiển thị, và chỉ thợ mới xác định được sau khi kiểm tra. Hậu quả là mọi mốc bảo dưỡng tính theo ODO bị lệch, còn TRIP cũng không dùng được để theo dõi xăng. Kim tốc độ đứng yên hoặc nhảy lung tung là dấu hiệu thường đi kèm. Hãy ghi lại ODO ở lần cuối đồng hồ còn chạy đúng rồi báo cho thợ, để các mốc bảo dưỡng về sau vẫn có chỗ tựa. Chuyện đồng hồ không chạy hay báo sai là chủ đề riêng, với nhiều nguyên nhân khác nhau.',
      'Khi mua xe cũ, ODO là một trong những thông tin nên đối chiếu, vì số km hiển thị có thể bị chỉnh cho thấp đi. Đừng tin riêng một con số: hãy xem nó có ăn khớp với độ mòn của xe hay không, như cao su tay lái, mặt yên, bàn để chân, cần phanh, cần số, lốp và độ cũ của thân vỏ. Số km thấp mà các chi tiết người dùng chạm vào hằng ngày đã bóng nhẵn là điểm đáng nghi. Sổ bảo dưỡng và hóa đơn sửa chữa có ghi ODO các lần trước là nguồn đối chiếu tốt, nên một chiếc xe có hồ sơ đều đặn đáng được ưu tiên hơn. Gặp điểm bất thường, hãy nhờ thợ có chuyên môn xem xét trước khi quyết định.'
    ])
  ],
  checklist: [
    'Đọc nhãn chữ cạnh dãy số để biết mình đang xem ODO hay TRIP trước khi ghi chép.',
    'Tìm trong sách hướng dẫn cách đặt lại TRIP của đúng dòng xe: nhấn, giữ nút, xoay núm hay chọn chế độ.',
    'Ghi số TRIP của bình xăng vừa dùng rồi mới đặt lại về không, làm lúc xe đã dừng hẳn.',
    'Ghi ODO, ngày và việc đã làm mỗi lần thay nhớt hay bảo dưỡng; chụp luôn bảng đồng hồ làm tư liệu.',
    'Theo dõi quãng đi được giữa các lần đổ xăng hoặc sạc pin; thấy ngắn đi rõ rệt qua nhiều lần thì nhờ thợ kiểm tra.'
  ],
  steps: [
    { title: 'Nhận biết đúng bộ đếm', detail: 'Đọc nhãn chữ cạnh dãy số để biết đang xem ODO hay TRIP; với đồng hồ điện tử, chỉ bấm nút chuyển chế độ khi xe đã dừng.' },
    { title: 'Đặt lại TRIP khi xe đã dừng', detail: 'Tra sách hướng dẫn của xe để biết phải nhấn, giữ nút hay xoay núm, rồi làm sau khi đã dừng hẳn ở chỗ an toàn.' },
    { title: 'Ghi TRIP mỗi lần đổ đầy xăng', detail: 'Đọc và ghi số TRIP của bình vừa dùng, đặt lại về không rồi so các lần với nhau để nhận ra khi xe hao xăng bất thường.' },
    { title: 'Ghi ODO mỗi lần bảo dưỡng', detail: 'Ghi ODO cùng ngày và việc đã làm vào sổ hoặc điện thoại, chụp bảng đồng hồ làm tư liệu, để lần sau biết xe đã đi được bao xa kể từ đó.' }
  ],
  warnings: [
    'Không bấm nút trên đồng hồ khi xe đang chạy: dừng xe ở chỗ an toàn, chống xe vững rồi mới thao tác; rời mắt khỏi đường dù một thoáng cũng có thể gây tai nạn.',
    'Không cưỡng ép núm hay nút đặt lại khi bị cứng hoặc kẹt, không tự tháo đồng hồ; ODO đứng yên, kim tốc độ bất thường là lỗi cần đưa xe đến thợ.',
    'Không chạy cố tới khi cạn xăng hay cạn pin để thử quãng đi được, và coi ước tính từ TRIP chỉ là gần đúng; mùi xăng nồng hoặc vệt xăng ướt dưới xe là dấu hiệu rò rỉ, cần dừng xe, tránh lửa và đưa xe đi kiểm tra.'
  ],
  notes: [
    'Cách hiển thị, tên gọi và cách đặt lại TRIP khác nhau tùy dòng xe và loại đồng hồ; hãy đối chiếu với sách hướng dẫn sử dụng của đúng xe bạn.',
    'Các dấu hiệu nêu trong bài chỉ là gợi ý để theo dõi và trao đổi với thợ; nguyên nhân hao xăng, pin yếu hay số km sai lệch chỉ được kết luận sau khi kiểm tra trực tiếp.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần về bảng đồng hồ và các nút hiển thị',
    'Sổ bảo hành và lịch bảo dưỡng của nhà sản xuất dành cho đúng dòng xe'
  ],
  related: ['cong-to-met-xe-may-khong-chay', 'nhat-ky-bao-duong-xe-may', 'xe-cu-bi-chinh-cong-to-met', 'lich-bao-duong-xe-may-dinh-ky-theo-so-km', 'ky-thuat-lai-xe-tiet-kiem-xang']
};
