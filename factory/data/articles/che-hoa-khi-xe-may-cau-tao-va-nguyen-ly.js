// AI WIKI TOTAL — S01127 (topic V2 T001189); giải thích chế hòa khí theo chuỗi nhiên liệu cho chủ xe đời cũ, không nêu số liệu, tên hãng hay thao tác chỉnh, thay, tháo bộ chế hòa khí.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'che-hoa-khi-xe-may-cau-tao-va-nguyen-ly',
  title: 'Chế hòa khí xe máy: cấu tạo, nguyên lý và vì sao xe đời cũ cần chỉnh',
  seoTitle: 'Chế hòa khí xe máy là gì: cấu tạo, nguyên lý và lý do cần chỉnh',
  metaDescription: 'Chế hòa khí xe máy làm việc ra sao: bình xăng con và phao, họng gió, đường cầm chừng, đường chính, cần gió, vì sao xe đời cũ cần chỉnh và khi nào nên giao thợ.',
  summary: 'Bài giải thích cấu tạo và nguyên lý của chế hòa khí xe máy cho người dùng xe đời cũ hay nghe thợ nói chỉnh gió, chỉnh cầm chừng, bình xăng con. Nội dung đi theo chuỗi nhiên liệu: bình xăng con với phao và kim phao, họng gió và gíclơ, đường cầm chừng và đường chính, cần gió lúc máy nguội. Bài cũng cho thấy vì sao hỗn hợp xăng gió lệch khi thời tiết, độ cao đổi hoặc khi xe già đi, so sánh ngắn với phun xăng điện tử và nêu dấu hiệu cần giao thợ.',
  quickAnswer: 'Chế hòa khí trộn xăng với gió bằng cơ khí: bình xăng con giữ mực xăng ổn định nhờ phao, dòng gió qua họng gió thắt hẹp hút xăng qua gíclơ vào máy. Cầm chừng dùng đường xăng nhỏ riêng, mở ga rộng mới sang đường chính, còn cần gió làm đậm hỗn hợp cho máy nguội. Cỡ lối xăng cố định nên thời tiết, độ cao và cặn bám làm hỗn hợp lệch, vì vậy xe đời cũ cần thợ chỉnh.',
  keyPoints: [
    'Chế hòa khí trộn xăng với gió bằng cơ khí: dòng gió qua họng gió thắt hẹp tạo lực hút kéo xăng qua gíclơ, nên lượng xăng chạy theo lượng gió mà không cần cảm biến hay hộp điều khiển.',
    'Bình xăng con giữ mực xăng gần như không đổi nhờ phao và kim phao; mực quá cao hoặc kim không kín gây mùi xăng, hao xăng, ngập xăng, còn mực thấp hay xăng đến không kịp gây hụt hơi ở ga lớn.',
    'Lúc cầm chừng máy sống bằng đường cầm chừng với lối xăng rất mảnh, mở ga rộng mới sang đường chính; chỉnh gió là độ đậm nhạt lúc cầm chừng, chỉnh cầm chừng là vòng tua lúc nhả ga.',
    'Gíclơ và lối xăng có cỡ cố định nên thời tiết, độ cao, cặn nhựa và cao su mòn làm hỗn hợp lệch khỏi mức thiết kế; xe phun xăng điện tử thường tự bù nhờ cảm biến, còn chế hòa khí thì không.',
    'Khó nổ, cầm chừng rối, hụt ga hay mùi xăng chỉ là gợi ý cho thợ; đừng tự vặn vít, thay gíclơ hay tháo bình xăng con, và thấy xăng nhỏ giọt thì dừng xe, tránh lửa.'
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['chế hòa khí', 'bình xăng con', 'kim phao', 'họng gió', 'gíclơ', 'cần gió'],
  keywords: ['chế hòa khí xe máy là gì', 'cấu tạo chế hòa khí', 'bình xăng con xe máy', 'nguyên lý hoạt động của chế hòa khí'],
  sections: [
    P('Chế hòa khí làm nhiệm vụ gì trong chuỗi nhiên liệu của xe máy', [
      'Chế hòa khí là bộ phận trộn xăng với không khí thành hỗn hợp có tỷ lệ phù hợp rồi đưa vào xi-lanh, và phần trộn ấy làm việc hoàn toàn bằng cơ khí, không dùng cảm biến hay hộp điều khiển để tính lượng xăng. Ba cụm từ thợ hay nói đều thuộc về nó: bình xăng con là ngăn chứa một lượng xăng nhỏ nằm sát đường gió; chỉnh gió thường là chỉnh độ đậm nhạt của hỗn hợp, tức nhiều hay ít xăng so với gió, lúc máy cầm chừng; chỉnh cầm chừng thường là đặt lại tốc độ quay của máy khi bạn nhả hẳn tay ga. Tên gọi và cách bố trí khác nhau tùy xe, nhưng nguyên lý thì chung, và phần dưới đi theo đường của xăng từ bình chính tới xi-lanh.',
      'Mỗi nhịp hút, động cơ tạo ra vùng áp suất thấp kéo không khí từ ngoài vào qua lọc gió rồi tới chế hòa khí. Ở đây đường gió bị thắt hẹp tại đoạn gọi là họng gió, kỹ thuật gọi là ống venturi. Qua chỗ hẹp, dòng gió chạy nhanh hơn và áp suất tại đó tụt xuống, đủ mạnh để hút xăng từ một vòi nhỏ mở thẳng vào họng gió. Xăng bị dòng gió xé thành giọt rất nhỏ rồi hòa vào gió. Lượng xăng không do bộ phận nào tính toán: gió mạnh thì xăng được kéo nhiều, gió yếu thì xăng ít. Vòi nhỏ ấy là đầu ống có lỗ định cỡ, thường gọi là gíclơ, và cỡ lỗ do nhà sản xuất chọn để lượng xăng khớp với lượng gió của động cơ.',
      'Chuỗi nhiên liệu của xe dùng chế hòa khí vì thế khá rõ thứ tự: bình xăng chính, khóa xăng cùng ống dẫn, bình xăng con có phao giữ mực xăng, gíclơ định lượng, rồi họng gió nơi xăng gặp gió. Bên cạnh chuỗi ấy là van ga, nối với tay ga qua dây ga và tùy xe là van trượt hoặc cánh bướm; vặn ga là mở cho nhiều gió đi qua hơn, kéo theo nhiều xăng hơn và máy quay mạnh hơn. Mỗi mắt xích chỉ làm một việc nhỏ, và xe chạy êm khi mọi mắt xích làm đúng việc của mình. Hiểu mắt xích nào làm gì, bạn sẽ nghe ra thợ đang nghi ngờ chỗ nào mỗi khi họ nhắc tới một triệu chứng.'
    ]),
    P('Bình xăng con và phao xăng giữ mực xăng ổn định', [
      'Bình xăng con, còn gọi là buồng phao, là một ngăn nhỏ gắn dưới hoặc bên hông thân chế hòa khí, giữ một lượng xăng dự trữ rất ít. Bên trong có chiếc phao nổi trên mặt xăng, nối với một cái kim nhỏ gọi là kim phao. Xăng từ bình chính chảy tới qua một lỗ mà đầu kim có thể bịt lại. Xăng dâng lên thì phao nổi theo và ép kim vào bệ, chặn đường xăng vào; máy dùng xăng làm mực hạ xuống thì phao hạ theo, kim hở ra và xăng chảy bù. Nhờ cơ chế đóng mở tự động ấy, mực xăng quanh gíclơ giữ gần như không đổi dù bình chính còn nhiều hay sắp cạn.',
      'Mực xăng ổn định quan trọng vì nó đặt mức nền cho lượng xăng bị hút ra. Mực hơi cao thì xăng nằm gần chỗ phun vào họng gió, bị hút ra dễ hơn mức cần, nên hỗn hợp có xu hướng đậm. Mực hơi thấp thì xăng lên khó hơn, hỗn hợp có xu hướng nhạt, và chỗ lộ ra trước là lúc máy đòi nhiều xăng như ga lớn hay leo dốc. Phao lệch, kim phao mòn hoặc kẹt cặn khiến mực xăng trôi khỏi mức thiết kế. Kim không bịt kín thì xăng cứ chảy vào và bình xăng con tràn; xăng thừa thoát ra ống thoát nhỏ thường dẫn xuống gầm xe hoặc tràn vào đường hút, gây mùi xăng, hao xăng và ngập xăng, tức bugi ướt xăng nên máy khó bắt lửa.',
      'Nhìn, ngửi và cảm nhận lúc chạy cũng cho được vài gợi ý. Mùi xăng sống sau khi tắt máy, vệt ướt quanh ống thoát hoặc dưới gầm, đề khỏe mà mãi không bắt kèm mùi xăng nồng ở ống xả là nhóm dấu hiệu thường nghiêng về xăng thừa, trong đó kim phao không kín là một nguyên nhân có thể. Chiều ngược lại, xe đang chạy bỗng hụt hơi ở ga lớn hoặc khi leo dốc rồi đỡ sau một lúc nghỉ thường nghiêng về xăng đến không kịp, với nguyên nhân có thể là khóa xăng, lọc xăng hay ống dẫn bị tắc, mực xăng thấp hoặc lỗ thông hơi ở nắp bình nghẹt. Cặn và nước lắng đáy bình xăng con khi xe để lâu cũng gây rối. Tất cả chỉ là gợi ý cho thợ.'
    ]),
    P('Đường gió cầm chừng và đường chính: xăng vào dòng gió bằng lối nào', [
      'Phần lớn chế hòa khí có hai lối đưa xăng vào dòng gió, và máy dùng lối nào tùy van ga đang mở bao nhiêu. Lúc cầm chừng van ga gần như đóng, dòng gió qua họng gió yếu đến mức chưa đủ kéo xăng qua gíclơ chính. Máy khi ấy sống nhờ đường cầm chừng: một gíclơ nhỏ hơn cùng những lối đi rất mảnh dẫn xăng tới các lỗ ra nằm sát van ga, nơi lực hút mạnh nhất lúc van gần khép. Xăng được trộn với một ít gió dẫn riêng, gọi là đường gió cầm chừng, rồi vào máy thành giọt li ti. Lối đi càng mảnh càng dễ bị cặn nhựa làm tắc, nên triệu chứng đầu tiên thường lộ ra lúc đứng đèn đỏ.',
      'Hai chốt điều chỉnh của đường cầm chừng tương ứng với hai cụm từ bạn hay nghe thợ nói. Chỉnh gió thường là xoay vít gió trên thân chế hòa khí; tùy kiểu, vít này điều tiết lượng gió hoặc lượng hỗn hợp đi vào đường cầm chừng, nên quyết định độ đậm nhạt khi máy đứng yên. Chỉnh cầm chừng thường là chỉnh vít chặn van ga, quyết định van ga hé tối thiểu bao nhiêu lúc nhả tay ga, tức vòng tua của máy khi đứng yên. Hai chốt ảnh hưởng lẫn nhau nên thợ làm theo trình tự trong sách của xe và dựa vào dụng cụ đo vòng tua. Chỉnh bằng tai tới khi máy nghe êm chỉ che triệu chứng, chưa chắc đã trúng nguyên nhân.',
      'Mở ga rộng dần, dòng gió trong họng gió mạnh lên và đường chính vào cuộc: xăng đi qua gíclơ chính, ở nhiều xe còn qua khe quanh một chiếc kim thon dần gắn trên van ga, thường gọi là kim ga. Ga mở thì kim nâng theo, khe rộng ra và xăng ra nhiều hơn. Đường cầm chừng giảm dần phần việc, nên đoạn chuyển giữa hai đường dễ lộ lỗi khi một lối xăng hẹp lại. Máy rung hoặc chết lúc nhả ga gợi ý đường cầm chừng; giật nhẹ ở ga nhỏ gợi ý đoạn chuyển; đuối khi vặn ga lớn gợi ý đường chính hoặc xăng đến thiếu. Bugi yếu và hở đường nạp cho triệu chứng tương tự; cách phân biệt đã có bài riêng về xe máy nổ không đều lúc cầm chừng.'
    ]),
    P('Cần gió và lúc máy nguội: vì sao cần hỗn hợp đậm hơn', [
      'Máy nguội đòi nhiều xăng hơn lúc bình thường. Xăng bay hơi kém ở nhiệt độ thấp, một phần lại bám vào thành đường hút còn lạnh, nên lượng hơi xăng tới được xi-lanh ít hơn lượng chế hòa khí đã cấp và hỗn hợp thực tế bị nhạt. Cần gió là cơ chế bù: làm hỗn hợp đậm lên tạm thời cho tới khi máy ấm. Tùy xe, đó có thể là một van bịt bớt đường gió hoặc một đường xăng phụ được mở thêm, điều khiển bằng cần hay núm ở tay lái hoặc cạnh bộ chế hòa khí. Chức năng, cách kéo và thời điểm nhả cần gió đã có bài riêng về cần gió xe máy, nên ở đây chỉ xét chỗ của nó trong chuỗi nhiên liệu.',
      'Có xe không có cần nào để kéo vì dùng bộ gió tự động, mở dần theo nhiệt độ máy nhờ một chi tiết nhạy nhiệt hoặc điện trở sưởi, tùy xe. Với loại này bạn chỉ quan sát: máy nguội nổ được, vòng tua cao hơn chút ít lúc đầu rồi tụt dần khi máy ấm. Bộ gió, loại tay hay tự động, có thể hỏng theo hai hướng. Không đủ đậm thì sáng nào xe cũng khó nổ hoặc chết máy lúc mới chạy. Kẹt ở vị trí đậm thì xe hao xăng, có mùi xăng sống, khói đen và bugi bám muội ngay cả khi máy đã ấm. Ghi lại triệu chứng xảy ra lúc nguội hay lúc nóng là manh mối rẻ nhất để đưa cho thợ.',
      'Cần gió còn là phép thử gián tiếp cho phần còn lại của chế hòa khí. Xe chỉ giữ được máy khi còn kéo gió, nhả ra là máy rung rồi chết, thường gợi ý hỗn hợp cầm chừng bị nhạt, chẳng hạn do đường cầm chừng hẹp lại sau thời gian xe để lâu với xăng cũ; hở đường nạp cũng cho dấu hiệu tương tự. Kéo gió lâu hơn để giữ máy chỉ che triệu chứng, đổi lại là hao xăng và bugi bám muội. Cần gió sinh ra để bù cho nhiệt độ thấp, không phải để bù cho xăng hỏng hay lối xăng tắc. Khi phải kéo gió mới giữ được máy, hãy ghi lại và đưa xe cho thợ xem bình xăng con cùng đường cầm chừng.'
    ]),
    P('Vì sao xe đời cũ cần chỉnh và khi nào nên giao thợ', [
      'Chế hòa khí không đo gì cả. Gíclơ và lối xăng có cỡ cố định, còn lượng xăng được hút ra chỉ đáp lại dòng gió chạy qua, nên khi không khí đổi tính chất, tỷ lệ xăng và gió lệch theo. Không khí loãng hơn, như ở vùng núi cao hoặc trời nóng bức, mỗi hơi hút mang ít oxy hơn mà xăng hút ra không giảm theo kịp, nên hỗn hợp có xu hướng đậm lên. Không khí đặc hơn, như khi trời lạnh hoặc xuống vùng thấp, thì ngược lại: hỗn hợp có xu hướng nhạt đi. Mức lệch thường nhỏ, nhưng sau thay đổi lớn hoặc khi lối xăng đã hẹp, sai lệch lộ thành hụt hơi, hao xăng hay chết máy. Vì thế thợ hay hỏi xe đã chạy ở đâu và vào mùa nào.',
      'Xe đời cũ già đi theo ba cách: cặn nhựa từ xăng để lâu thu hẹp các lối xăng nhỏ, cao su và kim phao mòn hoặc chai cứng nên kém kín, và vít xê dịch do rung hoặc do từng bị vặn. Xe đời mới phần lớn đã chuyển sang phun xăng điện tử và xử lý chuyện này khác hẳn: cảm biến đo nhiệt độ, khí nạp và độ mở ga, hộp điều khiển ECU liên tục tính lại lượng xăng, nên nhiều thay đổi do thời tiết và độ cao thường được bù tự động. Đổi lại, hệ ấy cần bơm điện, cảm biến và máy đọc lỗi; chi tiết nằm trong bài tổng hợp về phun xăng điện tử. Chế hòa khí không tự bù, nên cần người chỉnh lại khi điều kiện hoặc xe đổi.',
      'Chỉnh đúng là kiểm tra mực xăng, làm sạch lối xăng, cân lại hỗn hợp cầm chừng và vòng tua theo sách của xe bằng dụng cụ chứ không bằng tai; đó là việc của thợ. Phần của bạn là quan sát và ghi: máy nóng hay nguội, cầm chừng hay ga lớn, xe có để lâu không, loại xăng, thời tiết, chuyến đi vùng cao gần đây. Hãy giao thợ khi triệu chứng lặp lại, khi xe vừa nằm lâu hoặc khi hao xăng tăng dần mà bugi, lọc gió không có gì lạ; bài về nguyên nhân xe hao xăng giúp loại lý do khác. Đừng tự vặn vít, thay gíclơ hay tháo bình xăng con. Mùi xăng nồng, xăng nhỏ giọt hay máy chết lặp lại ở chỗ đông xe là lý do ngừng đi xe.'
    ])
  ],
  checklist: [
    'Ghi triệu chứng theo hoàn cảnh: máy nguội hay nóng, lúc cầm chừng hay vặn ga lớn, sau khi xe để lâu hay đang chạy liên tục.',
    'Ngửi mùi xăng sống quanh máy và ống xả sau khi tắt máy, rồi nhìn gầm xe và quanh ống thoát nhỏ dưới chế hòa khí xem có vệt ướt không; đứng cách xa vật nóng, không cúi sát.',
    'Để ý cầm chừng: có rung, lên xuống hay chết máy khi nhả ga không, và có phải kéo gió mới giữ được máy hay không.',
    'Nhớ lại thay đổi gần đây: xe nằm lâu, đổi loại xăng, trời lạnh hoặc nóng hơn, chuyến đi lên vùng cao, vừa thay bugi hay lọc gió.',
    'Đối chiếu sách hướng dẫn để biết xe dùng cần gió hay gió tự động, rồi đưa bản ghi cho thợ quen đúng kiểu chế hòa khí của xe.'
  ],
  steps: [
    { title: 'Đặt triệu chứng vào đúng mắt xích', detail: 'Đi theo chuỗi xăng đến bình xăng con, xăng qua gíclơ, gió qua họng gió, rồi đường cầm chừng hay đường chính; mỗi triệu chứng chỉ gợi ý về một mắt xích, chưa phải kết luận.' },
    { title: 'Ghi triệu chứng kèm hoàn cảnh', detail: 'Ghi máy nóng hay nguội, cầm chừng hay ga lớn, có phải kéo gió mới giữ được máy không, xe để lâu bao nhiêu ngày, thời tiết và chuyến đi vùng cao gần đây.' },
    { title: 'Loại trừ nguyên nhân ngoài chế hòa khí', detail: 'Bugi, lọc gió, nắp bình xăng, hở đường nạp và nguồn điện cũng gây triệu chứng tương tự; cách loại trừ đã có trong bài về xe máy nổ không đều lúc cầm chừng.' },
    { title: 'Giao thợ kèm bản ghi', detail: 'Đưa bản ghi cho thợ quen đúng kiểu chế hòa khí để kiểm tra mực xăng, lối xăng và hỗn hợp cầm chừng bằng dụng cụ; bạn không tự vặn vít hay tháo bộ phận.' }
  ],
  warnings: [
    'Mùi xăng nồng hoặc xăng nhỏ giọt, chảy thành vệt quanh chế hòa khí, ống thoát và gầm xe là nguy cơ cháy, nhất là khi máy và ống xả còn nóng: bóp phanh, dừng xe an toàn rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ; dắt xe ra xa nguồn lửa, không hút thuốc gần xe và nhờ thợ kiểm tra trước khi chạy tiếp.',
    'Không tự vặn vít gió hay vít cầm chừng, không thay hoặc chọc thông gíclơ, không tháo bình xăng con; chỉnh sai làm hỗn hợp lệch, các chi tiết nhỏ dễ hỏng, và xăng còn trong bình xăng con có thể đổ ra gần máy nóng.',
    'Không xịt chất làm sạch, bình xịt khởi động hay xăng vào họng gió để thử máy, và không kéo gió lâu hay rồ ga để che triệu chứng; máy chết lặp lại ở chỗ đông xe là lý do ngừng đi xe và nhờ thợ.'
  ],
  notes: [
    'Tên gọi, số đường xăng, kiểu van ga, vị trí vít và cách bố trí gió tự động khác nhau theo từng kiểu chế hòa khí và từng đời xe; bài chỉ mô tả nguyên lý chung, hãy đối chiếu với sách hướng dẫn của xe bạn.',
    'Bài không nêu cách tháo, làm sạch hay chỉnh chế hòa khí, không nêu thông số, cỡ gíclơ hay chu kỳ bảo dưỡng, vì những việc ấy phụ thuộc từng xe và cần dụng cụ đo cùng tay nghề của thợ.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hệ thống nhiên liệu, cần gió và vòng tua cầm chừng',
    'Tài liệu sửa chữa của nhà sản xuất xe, phần cấu tạo và nguyên lý chế hòa khí của đúng dòng xe'
  ],
  related: ['can-gio-xe-may-chuc-nang-va-cach-dung', 'phun-xang-dien-tu', 'xe-may-no-khong-deu-luc-cam-chung', 'xe-hao-xang-nguyen-nhan-va-cach-xu-ly', 'xe-may-bi-ngap-xang']
};
