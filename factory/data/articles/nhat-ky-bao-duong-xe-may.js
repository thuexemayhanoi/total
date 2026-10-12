// AI WIKI TOTAL — S01097 (topic V2 T001114); cách giữ nhật ký bảo dưỡng cá nhân, mẫu bảng mô tả bằng lời, lưu ảnh bằng điện thoại; không nêu số liệu, giá, chu kỳ hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'nhat-ky-bao-duong-xe-may',
  title: 'Nhật ký bảo dưỡng xe máy: nên ghi những gì và mẫu bảng ghi đơn giản',
  seoTitle: 'Nhật ký bảo dưỡng xe máy: ghi gì, mẫu bảng và cách lưu ảnh hóa đơn',
  metaDescription: 'Nhật ký bảo dưỡng xe máy nên ghi gì: cột ngày, số km, hạng mục, người làm, ghi chú; mẫu bảng gọn, cách lưu ảnh hóa đơn bằng điện thoại và chốt lần bảo dưỡng sau.',
  summary: 'Bài hướng dẫn người hay bảo dưỡng xe ở nhiều nơi cách giữ một nhật ký bảo dưỡng xe máy để không bỏ sót và không làm lại không cần thiết: vì sao nên ghi, những cột thông tin cần có như ngày, số trên đồng hồ, hạng mục, người làm, ghi chú và nhắc lần sau, một mẫu bảng ghi đơn giản mô tả bằng lời, cách chụp và lưu ảnh hóa đơn cùng phụ tùng đã thay trên điện thoại, và cách đối chiếu với sổ bảo hành để quyết định lần bảo dưỡng tiếp theo.',
  quickAnswer: 'Nhật ký bảo dưỡng xe máy nên là một bản chung cho mọi nơi bảo dưỡng, mỗi hạng mục một dòng với ngày, số trên đồng hồ, việc đã làm, người hoặc nơi làm, ghi chú và mốc nhắc lần sau. Chụp hóa đơn cùng bộ phận đã thay, lưu vào album riêng của xe. Trước lần bảo dưỡng kế tiếp, đọc lại theo từng hạng mục và đối chiếu sổ bảo hành để biết việc nào đã đến hạn.',
  keyPoints: [
    'Bảo dưỡng ở nhiều nơi khiến không ai thấy trọn lịch sử ngoài bạn; một nhật ký chung ghép các mảnh ấy lại để tránh bỏ sót và làm lại không cần thiết.',
    'Ghi mỗi hạng mục một dòng, gồm ngày, số trên đồng hồ chép đúng như hiển thị, việc đã làm, người hoặc nơi làm, ghi chú và mốc nhắc lần sau.',
    'Cột ghi chú giữ thông tin giá trị nhất: điều bạn quan sát trước khi làm và điều thợ dặn sau khi làm.',
    'Chụp hóa đơn, bảng đồng hồ, bộ phận cũ và trang sổ bảo hành, lưu trong album riêng của xe, đặt tên theo thứ tự năm, tháng, ngày và sao lưu thêm một bản.',
    'Đọc nhật ký theo từng hạng mục trước mỗi lần bảo dưỡng và đối chiếu sổ bảo hành, sách hướng dẫn; triệu chứng về phanh, lốp, rò rỉ hay điện không chờ đến ngày hẹn.'
  ],
  category: 'garage',
  hub: 'bao-duong-dinh-ky',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['nhật ký bảo dưỡng', 'sổ bảo hành', 'số km trên đồng hồ', 'ảnh hóa đơn', 'phụ tùng đã thay', 'mốc bảo dưỡng tiếp theo'],
  keywords: ['nhật ký bảo dưỡng xe máy', 'sổ ghi bảo dưỡng xe', 'mẫu theo dõi bảo dưỡng', 'cách ghi nhật ký bảo dưỡng bằng điện thoại'],
  sections: [
    P('Vì sao nên giữ nhật ký bảo dưỡng cho chiếc xe của mình', [
      'Bảo dưỡng ở nhiều nơi là chuyện rất thường gặp: tiệm gần nhà khi cần làm gấp, dịch vụ của hãng lúc xe còn bảo hành, một tiệm khác gần chỗ làm khi xe trục trặc giữa tuần, thêm vài việc tự làm vào cuối tuần. Mỗi nơi chỉ giữ phần lịch sử của riêng mình, nên người duy nhất nhìn được toàn cảnh là bạn, trong khi trí nhớ thì kém tin cậy hơn ta tưởng. Hậu quả xuất hiện theo hai hướng. Một là bỏ sót, chẳng hạn nhớt hộp số hay dầu phanh ở những xe có hạng mục này bị mỗi nơi cho rằng nơi khác đã lo. Hai là làm lại không cần thiết, khi cùng một hạng mục được thay chỉ vì không ai nhớ lần trước làm khi nào.',
      'Một cuốn sổ ghi bảo dưỡng xe dùng được trả lời nhanh bốn câu hỏi: hạng mục này làm lần cuối khi nào, ở số km nào, ai làm và dùng vật tư gì. Có câu trả lời ngay tại quầy tiếp nhận, bạn quyết định dựa trên dữ kiện thay vì gật đầu với mọi đề nghị hay từ chối theo cảm tính. Nhật ký còn làm lộ ra những quy luật mà từng lần ghé tiệm không thể thấy: một bộ phận phải xử lý lại sau thời gian ngắn, một tiếng kêu được ghi nhận nhiều lần, một hạng mục rất lâu chưa ai đụng tới. Với thợ, một dòng ghi chú chính xác về lần trước có thể rút ngắn thời gian chẩn đoán so với lời kể chung chung.',
      'Cần tỉnh táo về giới hạn của nhật ký. Nó không thay lịch bảo dưỡng của nhà sản xuất, không thay việc kiểm tra xe bằng mắt và tay, và càng không phải lý do để hoãn một việc an toàn tới ngày đã hẹn; nó chỉ ghi lại và nhắc. Muốn cuốn nhật ký sống lâu, hãy đặt ba yêu cầu: ngắn, mỗi lần ghi chỉ mất ít phút; ghi ngay trong ngày làm xe; và tìm lại được, mở lên là thấy hạng mục cần xem. Chưa có lịch sử cũng không sao. Bắt đầu từ hôm nay, dòng đầu ghi ngày, số km hiện tại và những gì bạn biết về quá khứ của xe; chỗ nào thiếu dữ liệu thì ghi hai chữ chưa rõ, vì chưa rõ cũng là một thông tin có giá trị.'
    ]),
    P('Các cột thông tin cần ghi trong mỗi lần bảo dưỡng', [
      'Hai cột đầu tiên là ngày và số trên đồng hồ, vì việc bảo dưỡng chạy theo cả thời gian lẫn quãng đường. Quãng đường phản ánh mức hao mòn cơ khí, còn thời gian quyết định độ lão hóa của nhớt, ắc quy và các chi tiết cao su, kể cả lúc xe ít chạy. Ngày nên chép theo một thứ tự cố định, chẳng hạn ngày, tháng rồi năm, để sau này xếp và so sánh không nhầm. Số km là tổng quãng đường hiển thị trên đồng hồ lúc đưa xe vào, chép đúng chứ không ước chừng, và không lấy số của đồng hồ đo chuyến. Nếu bảng đồng hồ từng phải thay, ghi riêng một dòng nêu việc đó cùng số cuối của đồng hồ cũ để mạch dữ liệu không bị đứt.',
      'Nhật ký có tra cứu được hay không phụ thuộc vào cột hạng mục và cột việc đã làm. Quy tắc là mỗi hạng mục một dòng, không dồn cả lần ghé tiệm vào một ô, vì về sau bạn cần lọc ra lần cuối của riêng nhớt hộp số hay riêng má phanh sau. Gọi tên bộ phận thống nhất và mô tả việc đã làm bằng một trong bốn từ: thay, vệ sinh, kiểm tra hoặc điều chỉnh. Cột người làm ghi tên tiệm hoặc thợ, dịch vụ chính hãng hay tự làm, để bạn biết nơi nào đã động vào bộ phận nào và hỏi ai khi có vấn đề. Nếu có thay phụ tùng hay vật tư, thêm loại, cấp và mã phụ tùng đúng như in trên hóa đơn hoặc bao bì.',
      'Giá trị lớn nhất nằm ở hai cột còn lại. Cột ghi chú nhận điều bạn quan sát trước khi làm, như tiếng kêu hay cảm giác phanh, và điều thợ dặn sau khi làm, chẳng hạn bộ phận nào còn dùng được nhưng cần xem lại. Cột nhắc lần sau chép mốc kế tiếp theo sách hướng dẫn của xe hoặc lời thợ, tính theo quãng đường hay thời gian, mốc nào đến trước thì làm theo mốc ấy. Chi phí và việc đã vào sổ bảo hành hay chưa là hai cột tùy chọn. Để bảng khỏi rườm rà và bị bỏ dở, việc lặt vặt như rửa xe, bơm hơi không cần ghi từng lần, nhưng sự kiện bất thường như ngập nước, ngã xe hay để xe lâu không chạy đáng một dòng riêng.'
    ]),
    P('Mẫu bảng ghi đơn giản và cách điền từng ô', [
      'Mẫu theo dõi bảo dưỡng gọn nhất gồm bảy cột đặt theo thứ tự cố định: ngày, số trên đồng hồ, hạng mục, việc đã làm, người hoặc nơi làm, ghi chú, nhắc lần sau. Mỗi hạng mục chiếm một dòng, dòng mới nhất nằm cuối bảng hoặc đầu bảng tùy bạn chọn, miễn là không đổi giữa chừng. Về nơi lưu, cách nào cũng dùng được: cuốn sổ nhỏ kẻ cột cất cùng sổ bảo hành, ứng dụng ghi chú có sẵn trên điện thoại với mỗi hạng mục viết thành một dòng theo cùng thứ tự, hoặc bảng tính nếu bạn muốn lọc theo từng hạng mục. Hãy chọn nơi mở ra dễ nhất khi đang đứng trước quầy tiếp nhận, vì công cụ nào tốn công mở thì sẽ sớm bị bỏ quên.',
      'Hai dòng minh họa đọc từ trái sang phải. Dòng thứ nhất, hạng mục nhớt máy: ngày làm xe; số trên đồng hồ chép từ ảnh chụp lúc đưa xe vào; việc là thay; nơi làm là tiệm quen gần nhà; ghi chú nêu loại nhớt theo hóa đơn và lời thợ nhắc xem lại lọc gió lần tới; nhắc lần sau theo mốc trong sách hướng dẫn. Dòng thứ hai, hạng mục lốp trước: hai ô đầu điền như dòng trên; việc là thay; nơi làm là tiệm chuyên về lốp; ghi chú nêu loại lốp, mã ngày sản xuất đọc trên thành lốp và nhận xét của thợ về lốp còn lại; nhắc lần sau theo độ mòn và tuổi lốp. Hai dòng ấy cho thấy ô ghi chú giữ những chi tiết hóa đơn không có.',
      'Phía trên bảng, nên dành một trang hồ sơ xe cho những thông tin cố định mà bạn hay phải tra lại: loại và cấp nhớt theo sách hướng dẫn, ký hiệu kích cỡ lốp trước và sau, loại bugi, nơi bảo dưỡng chính hãng gần nhất, mốc bảo dưỡng đầu tiên. Các mục này tùy từng xe, nên chép nguyên văn từ sách hướng dẫn thay vì từ trí nhớ. Giữ cách đặt tên thống nhất, chẳng hạn luôn viết nhớt máy chứ không lúc viết dầu máy lúc viết nhớt động cơ, để việc tìm kiếm không trượt. Điền ngay trong ngày làm xe, tại tiệm lúc chờ hoặc tối hôm đó, vì để qua tuần là chi tiết đã mờ. Ô nào chưa biết thì ghi hai chữ chưa rõ chứ đừng bỏ trống.'
    ]),
    P('Lưu ảnh hóa đơn và phụ tùng đã thay bằng điện thoại', [
      'Phần chữ của nhật ký chỉ là bản tóm tắt, còn ảnh là chứng cứ đi kèm. Có năm loại ảnh nên chụp sau mỗi lần làm xe: toàn bộ hóa đơn hoặc phiếu dịch vụ, bảng đồng hồ lúc đưa xe vào, bộ phận cũ vừa tháo ra, nhãn hoặc bao bì của phụ tùng mới, và trang sổ bảo hành sau khi được xác nhận. Với hóa đơn, hãy đặt phẳng trên mặt bàn, đủ sáng, thấy rõ bốn góc, chữ đọc được khi phóng to, có cả ngày và tên nơi làm. Nhiều loại giấy in hóa đơn phai chữ theo thời gian, nên chụp ngay hôm nhận xe thay vì đợi đến lúc cần mới đi tìm.',
      'Ảnh chụp xong mà nằm lẫn với ảnh gia đình thì cũng như không có. Hãy lập riêng một album hoặc thư mục cho từng xe, đặt tên ảnh theo thứ tự năm, tháng, ngày rồi đến hạng mục để ảnh tự xếp đúng thời gian. Ở dòng tương ứng trong nhật ký, ghi hai chữ có ảnh hoặc chép luôn tên tệp, nhờ vậy từ dòng chữ bạn mở thẳng ra được hóa đơn. Việc tiếp theo là sao lưu: nhật ký và ảnh chỉ nằm trong một chiếc điện thoại sẽ mất theo máy khi hỏng hay thất lạc, nên cần thêm một bản ở kho lưu trữ trực tuyến hoặc gửi cho người thân đáng tin. Hóa đơn thường có số điện thoại, địa chỉ, nên hãy giữ album ở chế độ riêng tư.',
      'Với phụ tùng đã thay, ảnh thay cho việc giữ vật thật. Hãy nhờ thợ cho xem chi tiết vừa tháo, hỏi lý do phải thay, rồi chụp rõ chỗ mòn, nứt hoặc biến dạng, kèm mặt có mã in nếu có. Bức ảnh giúp đối chiếu về sau, chẳng hạn khi bộ phận mới thay mà hỏng sớm, và cho biết bộ phận được thay có đúng như ghi trên hóa đơn không. Nhớt cũ, ắc quy hỏng hay chi tiết dính dầu mỡ thì không nên mang về nhà; đó là chất thải cần được nơi bảo dưỡng xử lý đúng cách. Cũng đừng chạm vào chi tiết còn nóng để chụp. Chỉ ghi và chụp khi xe đã dừng hẳn, tắt máy ở chỗ an toàn, tuyệt đối không dùng điện thoại lúc đang lái.'
    ]),
    P('Dùng nhật ký để quyết định lần bảo dưỡng tiếp theo', [
      'Trước mỗi lần đưa xe đi làm, dành ít phút đọc lại nhật ký theo từng hạng mục chứ không theo thứ tự thời gian. Với mỗi hạng mục, lấy số đồng hồ hiện tại trừ đi số ghi ở lần làm cuối để biết xe đã đi được bao xa kể từ đó, rồi tính thời gian đã trôi qua. Đặt hai kết quả cạnh mốc trong sách hướng dẫn của xe, mốc nào đến trước thì làm theo mốc ấy. Từ đây bạn có ba nhóm: đã đến hạn, sắp đến hạn và chưa cần. Hạng mục nào đang ghi là chưa rõ nên nhờ thợ kiểm tra trước khi quyết định thay hay bỏ qua. Mang danh sách này đến tiệm cùng các dòng ghi chú liên quan, thay vì để tiệm đề xuất cả loạt.',
      'Sổ bảo hành là nguồn đối chiếu thứ hai nên đặt cạnh nhật ký cá nhân. Nhiều sổ bảo hành có phần để nơi bảo dưỡng chính hãng xác nhận từng lần làm xe, nên đó là bản ghi bên ngoài giúp bạn kiểm tra chéo. Hãy xem ngày và số km trong sổ có khớp với nhật ký không, lần nào đã làm mà chưa được ghi vào sổ, và mốc nào trong sổ bạn chưa thực hiện. Điều kiện bảo hành do nhà sản xuất quy định, vì vậy hãy đọc kỹ trong sổ hoặc hỏi nơi bảo dưỡng chính hãng; nhật ký của bạn không thay được xác nhận chính thức. Nếu thấy lệch, hãy mang ảnh hóa đơn và nhờ nơi liên quan giải thích hoặc chỉnh lại.',
      'Cuối cùng, đọc nhật ký để tìm quy luật. Một hạng mục phải làm lại sau thời gian ngắn, hay một triệu chứng được ghi nhiều lần, thường cho thấy nguyên nhân gốc chưa được xử lý; việc cần làm là mang đúng những dòng ấy đến thợ chứ không chỉ rút ngắn lịch. Ranh giới an toàn cần rõ: phanh mềm hoặc kém ăn, lốp phồng hay nứt sâu, rò rỉ nhớt hay xăng, mùi khét từ hệ thống điện và tiếng kêu lạ mới xuất hiện đều là lý do dừng đi xe và ra thợ ngay, không đợi tới ngày hẹn trong nhật ký. Điện thoại không biết số km của xe, nên hãy đặt lời nhắc theo thời gian, kèm một lời nhắc định kỳ để tự nhìn đồng hồ và so với mốc.'
    ])
  ],
  checklist: [
    'Chọn nơi lưu nhật ký mở được nhanh nhất, rồi kẻ hoặc tạo cột theo đúng thứ tự: ngày, số trên đồng hồ, hạng mục, việc đã làm, người làm, ghi chú, nhắc lần sau.',
    'Ghi mỗi hạng mục một dòng ngay trong ngày làm xe, chép số km đúng như đồng hồ hiển thị và viết hai chữ chưa rõ vào ô chưa có dữ liệu.',
    'Chụp hóa đơn, bảng đồng hồ, bộ phận cũ vừa tháo, nhãn phụ tùng mới và trang sổ bảo hành; lưu vào album riêng của xe và sao lưu thêm một bản.',
    'Trước mỗi lần bảo dưỡng, lấy số đồng hồ trừ số ở lần làm cuối, tính thời gian đã qua và đặt cạnh mốc trong sách hướng dẫn của xe.',
    'Đối chiếu nhật ký với sổ bảo hành, lập danh sách việc đến hạn rồi mang theo khi đưa xe đi làm.'
  ],
  steps: [
    { title: 'Lập bảng và hồ sơ xe', detail: 'Tạo bảy cột theo thứ tự cố định và một trang hồ sơ xe chép từ sách hướng dẫn những thông tin cố định bạn hay phải tra lại.' },
    { title: 'Ghi ngay sau mỗi lần làm xe', detail: 'Mỗi hạng mục một dòng, số km chép đúng như đồng hồ, kèm ghi chú về điều bạn thấy và điều thợ dặn.' },
    { title: 'Chụp và lưu chứng từ', detail: 'Chụp hóa đơn, đồng hồ, bộ phận cũ và trang sổ bảo hành; đặt tên theo năm, tháng, ngày, cất trong album riêng và sao lưu.' },
    { title: 'Đọc lại trước lần làm sau', detail: 'Xem từng hạng mục, đối chiếu sổ bảo hành và sách hướng dẫn, chia thành đã đến hạn, sắp đến hạn, chưa cần, rồi mang danh sách tới tiệm.' }
  ],
  warnings: [
    'Không dùng điện thoại để chụp hay ghi trong lúc đang lái; chỉ làm khi xe đã dừng hẳn ở nơi an toàn và đã tắt máy.',
    'Nhật ký không thay việc kiểm tra xe: phanh mềm hoặc kém ăn, lốp phồng hay nứt sâu, rò rỉ nhớt hoặc xăng, mùi khét từ hệ thống điện là lý do dừng đi xe và ra thợ ngay, không chờ ngày hẹn đã ghi.',
    'Không giữ nhớt cũ, ắc quy hỏng hoặc chi tiết dính dầu mỡ ở nhà để làm chứng cứ; hãy chụp ảnh và để nơi bảo dưỡng xử lý.'
  ],
  notes: [
    'Bài nêu cách ghi và lưu chung cho xe máy; mốc bảo dưỡng, loại nhớt và điều kiện bảo hành tùy từng xe và do nhà sản xuất quy định, hãy đọc trong sách hướng dẫn và sổ bảo hành của xe bạn.',
    'Bài chỉ nói về cách ghi và lưu hồ sơ, không nêu giá hay chu kỳ cụ thể; mẫu bảng chỉ là gợi ý, bạn có thể thêm bớt cột cho hợp thói quen.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần lịch bảo dưỡng và thông tin kỹ thuật',
    'Sổ bảo hành và phiếu bảo dưỡng định kỳ của nhà sản xuất xe'
  ],
  related: ['bao-duong-dinh-ky', 'lich-bao-duong-xe-may-dinh-ky-theo-so-km', 'cham-soc-xe-may', 'lop-xe-may-nut-chan-gai', 'doc-hoa-don-bao-duong-xe-may']
};
