// AI WIKI TOTAL — S01096 (topic V2 T001112); cách đọc hóa đơn bảo dưỡng theo bốn động từ thay, vệ sinh, kiểm tra, điều chỉnh; không nêu giá, số liệu, điều khoản dịch vụ hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'doc-hoa-don-bao-duong-xe-may',
  title: 'Cách đọc hóa đơn bảo dưỡng: phân biệt thay, vệ sinh và kiểm tra để không trả tiền hạng mục chưa làm',
  seoTitle: 'Đọc hóa đơn bảo dưỡng xe máy: phân biệt thay, vệ sinh, kiểm tra',
  metaDescription: 'Cách đọc hóa đơn bảo dưỡng xe máy: phân biệt thay, vệ sinh, kiểm tra, điều chỉnh, câu hỏi nên đặt với thợ và cách đối chiếu phụ tùng đã thay.',
  summary: 'Bài hướng dẫn người vừa nhận hóa đơn bảo dưỡng nhiều dòng cách đọc từng hạng mục: hóa đơn gồm những phần nào, thay, vệ sinh, kiểm tra và điều chỉnh khác nhau ra sao, nên hỏi thợ những gì trước khi đồng ý, đối chiếu dòng phụ tùng với chi tiết đã thay và tình trạng xe thế nào, rồi lưu hóa đơn để theo dõi bảo hành và lịch làm tiếp theo, tránh trả tiền cho hạng mục chưa làm.',
  quickAnswer: 'Hãy đọc từng dòng theo động từ. Dòng thay cần đi cùng dòng phụ tùng, chi tiết cũ để xem và chi tiết mới trên xe. Vệ sinh giữ nguyên chi tiết nên chỉ có tiền công. Kiểm tra phải cho ra kết luận. Điều chỉnh đưa thông số về đúng mức mà không thay đồ. Dòng nào chưa rõ thì hỏi trước khi trả tiền, rồi đối chiếu phụ tùng đã thay với tình trạng xe.',
  keyPoints: [
    'Đọc từng dòng hóa đơn theo động từ thay, vệ sinh, kiểm tra hay điều chỉnh, vì mỗi loại để lại một dấu vết kiểm chứng khác nhau.',
    'Dòng thay thường đi cùng dòng phụ tùng, chi tiết cũ đã tháo và chi tiết mới trên xe; vệ sinh, kiểm tra, điều chỉnh thường chỉ có tiền công và vài vật tư nhỏ.',
    'Gọi đúng tên và ghi từng hạng mục vào phiếu trước khi làm để có danh sách gốc đối chiếu với hóa đơn.',
    'Phụ tùng ghi trên hóa đơn cần khớp với chi tiết cũ được xem, chi tiết mới trên xe và triệu chứng đã mô tả lúc gửi xe.',
    'Chụp và lưu hóa đơn ngay sau khi nhận, tách việc đã làm khỏi việc chỉ được đề nghị, rồi đặt nhắc lịch theo phần khuyến nghị.'
  ],
  category: 'garage',
  hub: 'bao-duong-dinh-ky',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['hóa đơn bảo dưỡng', 'hạng mục bảo dưỡng', 'tiền công và phụ tùng', 'chi tiết cũ đã tháo', 'phiếu tiếp nhận xe'],
  keywords: ['đọc hóa đơn bảo dưỡng xe máy', 'hóa đơn bảo dưỡng xe', 'hạng mục bảo dưỡng', 'cách xem hóa đơn bảo dưỡng xe máy'],
  sections: [
    P('Một hóa đơn bảo dưỡng gồm những phần nào', [
      'Đọc hóa đơn bảo dưỡng xe máy bắt đầu từ một quy tắc ghép cặp: dòng thay thường đi cùng một dòng phụ tùng mới, còn vệ sinh và kiểm tra chỉ có tiền công và vài vật tư nhỏ. Nhìn có dòng phụ tùng hay không là cách nhanh nhất để biết một hạng mục được thay, vệ sinh hay chỉ kiểm tra. Để dùng quy tắc ấy, trước hết cần nhận ra các phần của tờ hóa đơn. Phần đầu nhận diện chiếc xe và lượt gửi xe: tên cơ sở, ngày giờ nhận và trả, biển số hoặc số khung, số ki-lô-mét ghi lúc nhận. Hãy đối chiếu biển số và số ki-lô-mét với xe của bạn ngay tại quầy, vì ghi nhầm xe hoặc nhầm lượt gửi sẽ kéo mọi dòng bên dưới sai theo.',
      'Sau phần nhận diện là yêu cầu của bạn và tình trạng xe lúc tiếp nhận, làm mốc để so với kết quả. Phần thân chia thành hai nhóm dòng. Nhóm tiền công mô tả việc thợ đã làm và thường mở đầu bằng một động từ. Nhóm phụ tùng và vật tư liệt kê thứ được lắp lên xe hoặc dùng hết trong lúc làm, kèm số lượng, đơn giá và thành tiền. Phần cuối gồm tổng tiền, khoản giảm trừ, bảo hành và ghi chú khuyến nghị. Hãy thử phép tính: số lượng nhân đơn giá có ra thành tiền không, các thành tiền cộng lại có ra tổng không, khoản giảm giá có nằm ở dòng riêng không. Sai lệch ở đây có thể chỉ là nhầm lẫn, nhưng vẫn cần được sửa trước khi bạn trả.',
      'Phiếu báo giá và hóa đơn thanh toán là hai giấy khác nhau, trả lời hai câu hỏi khác nhau. Báo giá liệt kê việc dự kiến làm và có thể chứa hạng mục mới dừng ở mức đề nghị; hóa đơn phải liệt kê việc đã làm xong. Một số nơi đưa tờ giấy viết tay gộp tất cả vào vài dòng, hoặc dùng cụm mơ hồ như bảo dưỡng tổng thể, vệ sinh toàn bộ, vật tư phụ, công khác. Gói tổng hợp không hẳn là xấu, nhưng bạn có thể đề nghị ghi tách từng việc bên trong gói, kèm nhãn đã làm hoặc đề nghị làm sau. Chữ viết tắt riêng của tiệm cũng nên được hỏi lại cho đến khi bạn đọc ra nghĩa đầy đủ.'
    ]),
    P('Thay, vệ sinh, kiểm tra và điều chỉnh khác nhau ở đâu', [
      'Bốn động từ thường gặp trên hóa đơn khác nhau ở hai điểm: chi tiết trên xe có bị đổi sang chi tiết khác hay không, và trạng thái của xe có bị thay đổi hay không. Thay là hạng mục duy nhất đổi chi tiết: tháo cái cũ, lắp cái mới hoặc cái thay thế. Vì vậy việc thay đúng nghĩa để lại ba dấu vết: dòng phụ tùng trên hóa đơn, chi tiết cũ đã tháo và chi tiết mới trên xe. Nhớt, các loại lọc, bugi, má phanh, dây truyền động, ắc quy, lốp và bóng đèn thường thuộc nhóm này. Dòng thay không kèm phụ tùng chưa chắc là sai, vì phụ tùng có thể do bạn mang đến, nằm trong bảo hành hoặc đã gộp trong gói, nhưng lý do ấy cần được ghi rõ.',
      'Vệ sinh giữ nguyên chi tiết nhưng loại bỏ bụi, muội, cặn hoặc dầu bám, nên thường chỉ đi kèm tiền công và vài vật tư nhỏ như dung dịch, mỡ hay gioăng, không phải phụ tùng chính. Điều đáng hỏi là bộ phận nào được làm sạch, tháo ra hay chỉ xịt từ bên ngoài, và dấu hiệu nào cho thấy nó cần làm sạch. Tùy xe, có loại lọc gió làm sạch được và có loại chỉ thay, nên hãy đối chiếu với sách hướng dẫn của nhà sản xuất. Kiểm tra thì không đổi gì trên xe, sản phẩm của nó là một kết luận như còn tốt, cần theo dõi hoặc cần thay. Dòng kiểm tra mà thợ không nêu được kết quả thì chưa cho bạn thông tin nào dùng được.',
      'Điều chỉnh là đưa một thông số về đúng mức mà không thay chi tiết, chẳng hạn căng lại xích, chỉnh hành trình tay phanh hoặc tay ga, hướng chiếu của đèn, vòng tua cầm chừng. Kết quả của nó cảm nhận được khi dùng xe, nên hãy thử ngay sau khi nhận: tay phanh trở về nhẹ, xích không quá chùng hay quá căng, máy chạy đều lúc dừng đèn đỏ. Mức chỉnh đúng tùy từng mẫu xe và nằm trong sách hướng dẫn. Phiếu còn có thể ghi những việc nằm giữa các nhóm như siết lại, tra mỡ, bổ sung, tháo lắp; hãy hỏi để biết mỗi việc gần nhóm nào nhất. Với mỗi dòng, ba câu hỏi đủ dùng là: động từ gì, có dòng phụ tùng đi kèm không, dấu vết nào kiểm chứng được.'
    ]),
    P('Câu hỏi nên đặt trước khi đồng ý từng hạng mục', [
      'Thời điểm hợp lý để hỏi là lúc thợ đề xuất việc, trước khi tháo xe chứ không phải lúc thanh toán. Khi đó hóa đơn chưa tồn tại, nên danh sách đã thống nhất chính là mốc gốc để so với hóa đơn sau này. Hãy đề nghị ghi từng hạng mục lên phiếu tiếp nhận hoặc xác nhận lại qua tin nhắn, mỗi hạng mục kèm đúng một động từ. Những câu trả lời như làm luôn cho chắc hay chỉnh sơ qua có thể xuất phát từ thiện chí, nhưng chúng không cho bạn biết mình đang đồng ý với việc gì. Có danh sách từ trước, bạn nhìn hóa đơn là thấy ngay dòng nào đã được đồng ý và dòng nào mới xuất hiện thêm.',
      'Mỗi động từ kéo theo một nhóm câu hỏi riêng. Với thay: thay bằng phụ tùng loại nào, nguồn gốc ra sao, sau khi tháo có xem được chi tiết cũ không, hạng mục này có bảo hành không. Với vệ sinh: làm sạch bộ phận nào, tháo ra hay chỉ xịt từ bên ngoài, làm xong thì khác trước ở chỗ nào. Với kiểm tra: kết quả báo bằng cách nào, tính tiền riêng hay nằm trong gói. Với điều chỉnh: chỉnh theo mức nào của nhà sản xuất, kiểm lại bằng cách nào. Thêm một câu dùng chung cho mọi dòng: đây là việc riêng hay chỉ là một bước nằm sẵn trong dòng thay phía trên? Câu hỏi ngắn như vậy, thợ có chuyên môn thường trả lời được ngay.',
      'Hạng mục nào được đề xuất cũng nên kèm lý do thuộc một trong ba kiểu: xe có triệu chứng bạn đã mô tả, bộ phận đến kỳ theo sách hướng dẫn, hoặc thợ phát hiện khi tháo ra xem. Lý do khác nhau thì mức cấp thiết khác nhau: phần chạm tới phanh, lốp, hệ thống lái hay đèn chiếu sáng thường không nên trì hoãn khi thợ chỉ ra được hư hỏng cụ thể, còn các việc khác thường có thể bàn về thời điểm. Với việc chưa muốn làm, hãy nói rõ là chưa đồng ý và nhờ ghi vào phiếu, để nó không xuất hiện trên hóa đơn như một việc đã làm. Việc phát sinh giữa chừng cũng cần được xác nhận bằng một dòng chữ trước khi thợ làm tiếp.'
    ]),
    P('Đối chiếu từng dòng với phụ tùng đã thay', [
      'Đối chiếu là bước biến hóa đơn từ lời khai thành bằng chứng. Với mỗi dòng thay, hãy nối ba điểm: dòng phụ tùng trên hóa đơn, chi tiết cũ đã tháo và chi tiết mới trên xe. Ba kiểu lệch đáng hỏi lại: dòng phụ tùng không có dòng công, dòng thay không thấy phụ tùng, và cùng một bộ phận vừa được vệ sinh vừa được thay. Hãy nhờ thợ đặt chi tiết cũ ra ngay lúc giao xe, trước khi chúng bị gom vào thùng chung, rồi so tên gọi và số lượng với từng dòng phụ tùng. Chỉ xem bằng mắt: chi tiết vừa tháo có thể còn nóng hoặc dính nhớt, đừng cầm khi chưa nguội. Chi tiết được nơi làm giữ lại, chẳng hạn để xử lý bảo hành, thì xin xem qua ảnh.',
      'Tình trạng chi tiết cũ nên khớp với lý do được nêu. Má phanh mỏng, bugi đóng muội hoặc mòn điện cực, lọc gió bít bụi, dây truyền động nứt hoặc xơ cạnh là những dấu hiệu dễ nhìn thấy của mòn và hỏng. Thay theo kỳ của nhà sản xuất thì chi tiết cũ có thể trông còn khá tốt, điều đó bình thường; điều cần có là lý do được nói rõ. Chi tiết mới chia hai loại: loại nhìn thấy được như lốp, ắc quy, bóng đèn, gương, và loại nằm kín như bugi, lọc gió, má phanh. Với loại kín, hãy xin xem bao bì hoặc nhãn của chi tiết mới trước khi lắp, hoặc nhờ chụp ảnh lúc đang mở.',
      'Bước cuối là đối chiếu với tình trạng xe. Hãy mở lại điều bạn đã mô tả lúc gửi xe rồi thử lại trong đúng điều kiện từng làm triệu chứng xuất hiện: tiếng kêu còn hay hết, phanh ăn đều không, máy chạy êm hơn không, đèn báo đã tắt chưa. Nếu hóa đơn ghi đã thay một bộ phận để xử lý triệu chứng mà triệu chứng vẫn y nguyên, đó là lý do chính đáng để quay lại tiệm cùng hóa đơn. Gặp dòng không đối chiếu được, đừng vội kết luận có gian dối; hãy hỏi tới khi hiểu hoặc đề nghị điều chỉnh. Việc liên quan đến phanh thì thử ở tốc độ thấp ngay trước tiệm, nơi vắng; tay phanh sâu hơn trước hoặc xe kéo lệch thì quay lại, đừng chạy tiếp.'
    ]),
    P('Lưu hóa đơn và theo dõi lịch sau bảo dưỡng', [
      'Hóa đơn chỉ hữu ích khi còn đọc được và tìm lại được. Chụp rõ cả hai mặt ngay tại quầy, vì giấy in nhiệt phai chữ theo thời gian còn bản viết tay dễ nhòe hoặc thất lạc. Gom ảnh vào một thư mục riêng, đặt tên theo ngày, và cất bản giấy cùng sách hướng dẫn hay sổ bảo hành của xe. Chụp thêm chi tiết cũ nếu bạn được xem, cùng đồng hồ ki-lô-mét; hai tấm ảnh nhỏ ấy nối hóa đơn với tình trạng thật của xe. Thời gian giữ hợp lý là lâu hơn thời hạn bảo hành ghi trên hóa đơn và lâu hơn kỳ bảo dưỡng kế tiếp, vì bạn sẽ cần đem ra so sánh.',
      'Phần ghi chú cuối phiếu là nguồn để lên lịch cho lần sau. Hãy tách nó thành hai loại: việc đã làm và việc chỉ được đề nghị làm sau. Với loại thứ hai, đặt nhắc lịch kèm lý do để đến hẹn biết mình cần xem lại điều gì. Đọc kỹ phần bảo hành: áp dụng cho phụ tùng hay cho công thợ, kéo dài đến lúc nào theo cách tính của nơi làm, và có điều kiện gì như phải quay lại đúng nơi đã làm hay không. Nhờ ghi những điều ấy lên hóa đơn thay vì nhớ lời nói. Một chi tiết phải thay lặp lại trong thời gian ngắn cũng đáng hỏi thợ, vì có thể nguyên nhân gốc chưa được xử lý.',
      'Vài ngày đầu sau bảo dưỡng là lúc lỗi lắp ráp có thể lộ ra. Hãy để ý phanh có đổi cảm giác không, có vệt dầu mới dưới gầm không, lốp có xẹp dần không, có tiếng lạ hay đèn báo nào hiện lên không, rồi quay lại nơi đã làm kèm hóa đơn; càng sớm thì việc đối chiếu càng rõ. Phanh yếu, rò xăng hoặc nhớt, mùi khét từ hệ thống điện đều là lý do dừng xe ở nơi an toàn, tránh xa nguồn lửa và nhờ thợ kiểm tra thay vì chạy tiếp. Khi đổi sang tiệm khác hoặc bán xe, bộ hóa đơn xếp theo thứ tự thời gian giúp thợ mới biết việc nào đã làm, khỏi làm trùng và khỏi đoán.'
    ])
  ],
  checklist: [
    'Đối chiếu biển số, ngày và số ki-lô-mét ghi trên hóa đơn với xe của bạn ngay tại quầy.',
    'Gạch chân động từ của từng dòng công, rồi tìm dòng phụ tùng đi kèm mỗi dòng thay.',
    'Hỏi lại các chữ viết tắt và cụm gộp như bảo dưỡng tổng thể hay công khác cho đến khi được ghi tách từng việc.',
    'Xem chi tiết cũ, so tên gọi và số lượng với từng dòng phụ tùng, rồi thử xe với đúng triệu chứng đã mô tả.',
    'Chụp hóa đơn, ghi lại phần bảo hành và khuyến nghị để đặt nhắc lịch cho lần sau.'
  ],
  steps: [
    { title: 'Chốt danh sách trước khi làm', detail: 'Nhờ thợ ghi từng hạng mục kèm một động từ lên phiếu tiếp nhận hoặc tin nhắn, và ghi rõ việc bạn chưa đồng ý.' },
    { title: 'Đọc hóa đơn theo động từ', detail: 'Xếp từng dòng vào thay, vệ sinh, kiểm tra hoặc điều chỉnh, rồi tìm dấu vết tương ứng của mỗi loại.' },
    { title: 'Đối chiếu phụ tùng và tình trạng xe', detail: 'Xem chi tiết cũ, so với dòng phụ tùng, kiểm tra chi tiết mới nhìn thấy được và thử xe với triệu chứng ban đầu.' },
    { title: 'Lưu hóa đơn và theo dõi', detail: 'Chụp ảnh hóa đơn, ghi bảo hành và khuyến nghị, đặt nhắc lịch và để ý xe trong những ngày đầu.' }
  ],
  warnings: [
    'Việc liên quan đến phanh phải được thử ở tốc độ thấp, nơi vắng, trước khi ra đường đông; tay phanh sâu hơn trước hoặc xe kéo lệch là lý do quay lại thợ ngay, không chạy tiếp.',
    'Không tự tháo chi tiết phanh hay đụng vào hệ thống xăng và điện để kiểm chứng; chỉ xem bằng mắt hoặc nhờ thợ cho xem, và không cầm chi tiết vừa tháo khi còn nóng hoặc dính nhớt.',
    'Không chấp nhận một dòng chưa hiểu chỉ vì bị giục; hãy hỏi cho tới khi dòng đó có động từ, đối tượng và dấu vết kiểm chứng được, và đừng kết luận gian dối khi chưa nghe giải thích.'
  ],
  notes: [
    'Bài nêu cách đọc hóa đơn nói chung; cách ghi phiếu, tên gọi hạng mục và chính sách bảo hành khác nhau tùy từng nơi làm, nên điều gì chưa rõ hãy hỏi trực tiếp và nhờ ghi lại.',
    'Bài không nêu giá, định mức hay chu kỳ bảo dưỡng; những chi tiết này phụ thuộc từng mẫu xe và được ghi trong sách hướng dẫn của nhà sản xuất.'
  ],
  references: [
    'Sách hướng dẫn sử dụng và sổ bảo hành của nhà sản xuất xe',
    'Phiếu tiếp nhận, báo giá và hóa đơn do nơi bảo dưỡng cung cấp'
  ],
  related: ['bao-duong-dinh-ky', 'tho-sua-xe-tin-cay', 'checklist-bao-duong', 'tiem-sua-xe-gan-day', 'nhat-ky-bao-duong-xe-may']
};
