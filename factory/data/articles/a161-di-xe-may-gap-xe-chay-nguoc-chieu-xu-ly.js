// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: đi xe máy gặp xe chạy ngược chiều (slot S00161)
'use strict';

module.exports = {
  slug: 'di-xe-may-gap-xe-chay-nguoc-chieu-xu-ly',
  title: 'Đi xe máy gặp xe chạy ngược chiều: xử lý an toàn',
  seoTitle: 'Gặp xe chạy ngược chiều trên xe máy: xử lý',
  metaDescription: 'Xe máy chạy ngược chiều trên đường một chiều hoặc lấn làn xuất hiện bất ngờ. Bài viết chỉ cách giảm tốc, chọn vị trí và né an toàn.',
  summary: 'Xe chạy ngược chiều là một trong những tình huống bất ngờ nhất trên đường: chiếc xe đạp lù lù xuất hiện đầu đường một chiều, xe máy đi tắt ngược lên làn của mình, hoặc ô tô lấn hẳn sang làn ngược để vượt trên quốc lộ. Điểm nguy hiểm của tình huống này nằm ở tốc độ tiếp cận: hai xe đi ngược chiều nhau thì tốc độ khép lại bằng tổng tốc độ hai bên — hai xe máy chạy bốn mươi ký một giờ mỗi chiếc khép lại khoảng hai mươi hai mét mỗi giây, và khoảng cách phản ứng bị đốt nhanh gấp đôi so với xe cùng chiều. Bài viết này chia tình huống ra theo ba môi trường phổ biến: đường một chiều đô thị — nơi xe máy ngược chiều thường chậm và "lén" men theo mép; đường hai chiều có vạch phân làn — nơi xe ô tô vượt ngược chiều là kịch bản nghiêm trọng nhất; và làn đường có dải phân cách cứng — nơi xe ngược chiều chỉ có thể xuất hiện tại khe hở. Với mỗi môi trường, bài viết xác định tín hiệu cảnh báo sớm, thao tác xử lý đúng — giảm tốc trước, giữ làng của mình, không né về phía đối phương — và những lỗi khiến va chạm từ nhẹ thành nặng. Toàn bài xoay quanh một nguyên tắc trụ: khi có xe ngược chiều, mọi việc né đều bắt đầu bằng giảm tốc của chính mình, vì đó là biến số duy nhất mình kiểm soát được trong hai xe đang khép lại.',
  quickAnswer: 'Trả lời ngắn: gặp xe chạy ngược chiều, việc đầu tiên là giảm tốc ngay — tốc độ khép lại của hai xe bằng tổng hai bên nên mỗi ký mình chậm lại là gấp đôi khoảng cách phản ứng được mua thêm. Giữ đúng làn của mình và bám sát mép phải an toàn, tuyệt đối không né về phía đối phương: hai xe cùng chuyển sang cùng một phía là nguyên nhân va chạm phổ biến nhất. Tín hiệu cảnh báo để né sớm: đèn pha xa của xe đối diện lắc lư phía trước, người bộ hành nhìn về hướng sai, hoặc xe phía trước cùng chiều bất ngờ kéo giãn cách. Trên đường một chiều đô thị gặp xe máy ngược chiều men theo mép: giữ đường thẳng chậm lại và để họ tự chọn phía trống — không bấm còi để "mời" họ vì họ đang phân tâm tìm khe. Trên đường hai chiều thấy ô tô vượt ngược chiều phía trước: phanh sớm và nếu cần, dừng hẳn sát mép — dừng là thao tác an toàn nhất vì dừng xóa hẳn tốc độ khép lại. Không bao giờ đối phó bằng cách lấn sang làn ngược để né rộng: cách này đổi một rủi ro thành hai rủi ro đối đầu.',
  keyPoints: [
    'Tốc độ khép lại của hai xe ngược chiều bằng tổng tốc độ hai bên — giảm tốc của mình có giá trị gấp đôi mọi tình huống cùng chiều.',
    'Giữ làn của mình và bám mép phải an toàn; không bao giờ né về phía đối phương — hai xe cùng né về một phía là kịch bản va chạm phổ biến nhất.',
    'Phanh sớm và sẵn sàng dừng hẳn sát mép với ô tô vượt ngược chiều — dừng xóa hẳn tốc độ khép lại, là thao tác an toàn nhất.',
    'Đọc tín hiệu sớm: đèn pha đối diện lắc lư sai hướng, người bộ hành nhìn về phía sai, xe cùng chiều phía trước kéo giãn cách bất ngờ.',
    'Trên đường một chiều, gặp xe máy ngược chiều men theo mép thì đi thẳng chậm — để họ tự chọn khe trống, không bấm còi gây phân tâm.',
    'Không đối phó bằng cách lấn sang làn ngược để né rộng — cách này tự đặt mình vào vị trí va chạm đối đầu với xe thứ ba.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['xe ngược chiều', 'đường một chiều', 'vạch phân làn', 'tốc độ khép lại', 'dải phân cách cứng', 'xe vượt ngược chiều'],
  keywords: ['xe máy gặp xe ngược chiều', 'xe chạy ngược chiều', 'đường một chiều an toàn', 'né xe ngược chiều', 'xe lấn làn ngược chiều', 'phòng tránh va chạm đối đầu'],
  sections: [
    {
      h2: 'Vì sao xe ngược chiều nguy hiểm hơn xe cùng chiều',
      html: `<p>Vật lý của tốc độ khép lại là khác biệt căn bản: hai xe cùng chiều chạy bốn mươi ký một giờ có tốc độ khép lại bằng hiệu tốc độ — gần bằng không nếu đều tốc; hai xe ngược chiều có tốc độ khép lại bằng tổng — tám mươi ký một giờ, tương đương hai mươi hai mét mỗi giây. Trong hai giây phản ứng trung bình của người lái, khoảng cách hai xe bị đốt hơn bốn mươi mét: nghĩa là phán đoán khoảng cách quen dùng cho xe cùng chiều hoàn toàn không dùng được cho xe ngược chiều.</p>
<p>Điểm nguy hiểm thứ hai là chỗ đứng: xe ngược chiều đang đi trên phần đường không thuộc về nó, nên nó luôn ở trạng thái tìm khe — quanh xe mình, quanh người bộ hành, quanh xe đỗ. Một phương tiện đang tìm khe thay đổi hướng liên tục và khó dự đoán, trong khi người lái xe ngược chiều thường đang ở tâm thế vội hoặc bất chấp — hai yếu tố làm giảm thêm phần dự đoán.</p>
<p>Và như mọi tình huống giao thông, bên chịu hậu quả nặng nhất trong va chạm đối đầu là người đi xe máy — không có khung xe đỡ, không đai an toàn. Với va chạm đối đầu ở tốc độ khép lại cao, biên giới giữa chấn thương và tử vong nằm ở tốc độ, và tốc độ là thứ người lái xe máy kiểm soát được một nửa — nửa của chính mình.</p>`,
    },
    {
      h2: 'Đường một chiều đô thị: xe máy ngược chiều men theo mép',
      html: `<p>Đường một chiều đô thị là môi trường gặp xe ngược chiều dày đặc nhất: xe máy đi tắt, đi ngược trăm hai trăm mét cho tiện, men sát mép phải của họ — tức mép trái của mình — với tâm thế "nhường hết rồi thì mình đi". Tín hiệu nhận biết sớm: nhìn đầu các ngả hẻm bên trái phía trước — một chiếc xe nghiêng chuẩn bị rẽ ngược ra là tín hiệu rõ nhất; thứ hai là người bộ hành ở mép đối diện đang lùi lại tránh một thứ gì đó chưa hiện ra.</p>
<p>Thao tác xử lý: giảm sẵn tốc độ từ khi thấy tín hiệu, giữ đường đi thẳng của mình — không kéo sang phải đột ngột vì mép phải của mình có thể có xe đỗ, hố ga, hoặc xe cùng chiều đang bám. Xe ngược chiều men theo mép sẽ tự chọn khe trống khi hai xe tới gần nhau; cái họ cần ở mình là tính dự đoán được, không phải tín hiệu. Bấm còi dài để "mời" họ ra giữa là điều ngược tác dụng: người đi ngược chiều đang căng ra tìm khe, một tiếng còi làm họ giật và chọn phía sai.</p>
<p>Trường hợp đặc biệt: xe ngược chiều là người già, người chở hàng cồng kềnh hoặc xe thúng ba bánh — những phương tiện không đủ linh hoạt né. Với các đối tượng này, chuẩn bị dừng hẳn là phương án mặc định: dừng sát mép phải, để họ lượn qua trong không gian thoáng, rồi mới tiếp tục. Nửa phút mất đi để đổi lấy một cụm không va chạm luôn là giao dịch lời.</p>`,
    },
    {
      h2: 'Đường hai chiều: ô tô vượt ngược chiều là kịch bản nghiêm trọng nhất',
      html: `<p>Trên quốc lộ hai chiều, kịch bản đáng sợ nhất là chiếc ô tô phía đối diện vượt xe cùng chiều của nó và chiếm nguyên làn của mình. Tín hiệu cảnh báo sớm: đèn pha của dòng xe đối diện phía xa bỗng kéo thành chuỗi nhấp nhô lệch làn — nghĩa là có xe đang vượt trong chuỗi đó; và xe cùng chiều đối diện mình bỗng kéo sát mép phải bất thường — động tác né của xe bị vượt lộ ra trước khi xe vượt hiện hình.</p>
<p>Thao tác chuẩn gồm ba bước theo thứ tự: phanh sớm và dứt — giảm tốc là ưu tiên một vì nó mua lại toàn bộ khoảng cách; bám mép phải và thẳng tay lái — cho xe vượt thấy sớm quỹ đạo thoát của mình; và nếu còn tiếp cận nhanh, dừng hẳn sát mép, đặt một chân xuống mặt đường. Dừng hẳn là hành động bị đánh giá thấp nhất nhưng an toàn nhất: một xe máy dừng sát mép cho xe vượt ô tô một lối đi rõ ràng, và tự xóa mình khỏi mọi phép tính tốc độ khép lại.</p>
<p>Hai lỗi khiến va chạm từ nhẹ thành nặng ở tình huống này: thứ nhất là tiếp tục chạy với tâm "nó phải né mình" — xe vượt ô tô đã tính sai một lần khi ra vượt, đừng phó mặc tính mạng cho lần tính thứ hai của nó; thứ hai là phanh gấp từng cú khiến bánh khóa hoặc mất thế lái — với xe máy, phanh trong tình huống đối đầu cần dứt khoát nhưng đều, giữ xe nằm đúng hướng để phần còn lại của khoảng cách được dùng cho lách khi có khe.</p>`,
    },
    {
      h2: 'Làn có dải phân cách cứng: xe ngược chiều chỉ xuất hiện tại khe hở',
      html: `<p>Đường có dải phân cách cứng xem như đã loại xe ngược chiều — trừ một điểm: khe hở dành cho xe quay đầu. Xe máy quen "nghĩ" rằng có dải là không bao giờ gặp ngược chiều, nên khi chiếc xe ngược trườn ra từ khe hở, thời gian phản ứng thực tế của người lái gần như bằng không vì não không có sẵn kịch bản. Đây là lý do các khe hở quay đầu là điểm cần chủ động giảm tốc trên đường quen, kể cả khi không thấy xe nào.</p>
<p>Cách xử lý khi chiếc xe đã trườn ra: nếu nó cầm chừng trên phần đường của nó, chỉ cần giữ đường và tốc độ; nếu nó đã lấn sang phần của mình, phanh dứt khoát và bám mép — phần lớn xe ngược ở khe hở là xe chuẩn bị quay đầu, tốc độ thấp, nên khoảng cách trần vài chục mét thường đủ với phanh sớm. Điều cần tránh là vòng sang làn ngược để "quanh" nó: xe ngược chiếm mép, mình chiếm giữa làn ngược, và kịch bản va chạm với xe thứ ba hoàn toàn có thể xảy ra ở đúng điểm đó.</p>
<p>Nhìn tổng thể, nguyên tắc cho mọi loại dải phân cách là một: dải cứng loại bỏ rủi ro thường trực nhưng tạo rủi ro tập trung — tại các khe hở. Xử lý rủi ro tập trung bằng cách chủ động: biết trước vị trí khe hở trên tuyến quen, hạ nhẹ tốc và nới rộng quan sát mỗi khi qua, để lần gặp phải thật sự chỉ còn là một tình huống đã có sẵn phương án.</p>`,
    },
    {
      h2: 'Lỗi né khiến va chạm nặng hơn và cách đúng',
      html: `<p>Lỗi phổ biến nhất khi gặp xe ngược chiều là hai bên cùng né về một phía — thường là cả hai cùng rẽ về phía phải của người lái, tức hai xe lại tiến về đúng một điểm. Sự đối xứng này xuất phát từ tâm lý phổ quát: thấy đối tượng tới, người lái có xu hướng rời khỏi vị trí đối tượng chứ không phải rời khỏi hướng va chạm. Phép xử lý nằm ở tính dự đoán được của mình: giữ mép phải sớm và ổn định, nhường phần giữa đường cho đối phương tự chọn — phần giữa là không gian cả hai đều đoán được.</p>
<p>Lỗi thứ hai là nhìn chằm chằm vào xe ngược chiều: tay lái xe máy theo mắt — nhìn đâu đổ đó, và nhìn vào đầu xe đối diện khiến tay lái bám theo hướng đối đầu. Cách khắc phục chủ động: dời mắt sang điểm thoát của mình — mép phải sạch, khe trống phía sau xe đỗ — tay lái tự theo điểm nhìn về nơi an toàn thay vì nơi nguy hiểm.</p>
<p>Lỗi thứ ba là đánh đổi phanh lấy còi: nhiều người giữ tốc và bấm còi thay vì giảm tốc, coi tín hiệu là biện pháp phòng vệ. Thực tế còi chỉ có tác dụng nếu đối phương nghe và hiểu đúng — hai điều không đảm bảo với người đang vội, đang mang tai nghe, hoặc đã tính sai hướng đi một lần rồi. Phanh giảm tốc là điều mình kiểm soát hoàn toàn; còi là điều phó thác cho người khác. Ưu tiên đúng phải luôn là phanh trước, còi sau.</p>`,
    },
    {
      h2: 'Tư duy tổng: giảm tốc là biến số duy nhất của mình',
      html: `<p>Đặt mọi tình huống cạnh nhau, cấu trúc chung hiện ra: xe ngược chiều có thể chậm hoặc nhanh, có thể né hoặc băng, có thể nhìn thấy mình hoặc không — không có yếu tố nào trong số đó mình kiểm soát được. Biến số duy nhất thuộc về mình là tốc độ của chính mình, và nó tham gia vào mọi phép tính nguy hiểm với trọng số gấp đôi: tốc độ khép lại đổi theo mỗi ký mình thay đổi.</p>
<p>Điều đáng nói là chi phí của việc giảm sẵn: trên tuyến quen có điểm hay gặp ngược chiều, hạ tốc về bốn mươi thay vì năm mươi qua một đoạn hai trăm mét mất chưa tới ba giây. Đổi lại, cùng điểm đó với tốc độ chậm hơn, mọi tình huống bất ngờ đều rơi vào vùng "phanh được, dừng được" thay vì vùng "va hoặc suýt va". Không có phép tính an toàn nào trên đường rẻ hơn ba giây đó.</p>
<p>Và một cách nhìn để mang theo: mỗi xe ngược chiều gặp trên đường đều là một lần nhắc rằng quy tắc là lưới, không phải tường — lưới giữ phần lớn nhưng lọt những ai cố tình chui. Người đi xe máy an toàn không phải người tin rằng mọi xe đều đúng chiều, mà là người luôn để lại một lối thoát cho xe không đúng chiều: mép phải sạch, tốc độ cho phép dừng, mắt dán vào điểm thoát. Đó là toàn bộ kỹ năng: chấp nhận đường có ngoại lệ, và tự tạo khoảng trống cho ngoại lệ đó tồn tại mà không va vào mình.</p>`,
    },
  ],
  checklist: [
    'Giảm sẵn tốc tại các điểm hay gặp ngược chiều: ngả hẻm đường một chiều, khe hở dải phân cách, đoạn xe hay vượt trên quốc lộ.',
    'Giữ làn và bám mép phải ổn định — nhường phần giữa đường cho xe ngược chiều tự chọn khe, tránh né về phía đối phương.',
    'Thấy ô tô vượt ngược chiều phía xa: phanh sớm dứt khoát, thẳng tay lái về mép, dừng hẳn nếu tiếp cận nhanh — dừng là phương án an toàn nhất.',
    'Đường một chiều gặp xe ngược men mép: đi thẳng chậm, không bấm còi gây giật — tính dự đoán được của mình là tín hiệu tốt nhất.',
    'Dời mắt sang điểm thoát của mình thay vì nhìn chằm vào xe đối diện — tay lái theo mắt, mắt phải nằm ở nơi an toàn.',
    'Không lấn sang làn ngược để né rộng — đổi một rủi ro thành rủi ro đối đầu với xe thứ ba.',
  ],
  steps: [
    { title: 'Nhận diện sớm trên tuyến quen', detail: 'Ghi nhớ các điểm hay xuất hiện xe ngược chiều — ngả hẻm, khe hở quay đầu, đoạn vượt trên quốc lộ — và chủ động hạ nhẹ tốc mỗi khi qua các điểm này.' },
    { title: 'Giảm tốc và giữ làn khi gặp', detail: 'Phanh sớm và đều khi phát hiện xe ngược chiều, giữ đúng quỹ đạo mép phải của mình, để phần giữa đường làm không gian đoán được cho cả hai bên.' },
    { title: 'Dừng hẳn khi cần', detail: 'Với ô tô vượt ngược chiều tiếp cận nhanh hoặc xe ngược chiếm gần hết mặt đường: dừng hẳn sát mép, đặt chân xuống, xóa hẳn tốc độ khép lại.' },
    { title: 'Khôi phục dòng sau tình huống', detail: 'Sau khi xe ngược qua khỏi, quan sát gương trước khi trở lại tốc độ bình thường và kiểm tra mép phải trước khi bám lại vị trí làn quen.' },
  ],
  warnings: [
    'Không bấm còi thay cho phanh — còi phó thác an toàn cho người đã tính sai một lần; phanh mới là biến số mình kiểm soát.',
    'Không nhìn chằm chằm vào đầu xe đối diện — tay lái theo mắt, và mắt vào xe đối diện là tự lái về hướng va chạm.',
    'Không phanh gấp từng cú làm bánh khóa trong tình huống đối đầu — phanh dứt khoát nhưng đều, giữ xe nằm đúng hướng để còn lách khi có khe.',
  ],
  notes: [
    'Tốc độ khép lại hai xe ngược chiều bằng tổng tốc độ hai bên — mọi ước lượng khoảng cách theo thói quen xe cùng chiều đều sai gấp đôi.',
    'Dải phân cách cứng loại bỏ xe ngược chiều thường trực nhưng dồn rủi ro về các khe hở quay đầu — chủ động hạ tốc tại mọi khe hở trên tuyến quen.',
  ],
  references: [
    { title: 'Giữ khoảng cách an toàn khi đi xe máy', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/giu-khoang-cach-an-toan-khi-di-xe-may/' },
    { title: 'Kỹ thuật phanh khẩn cấp xe máy', url: 'https://thuexemayhanoi.github.io/total/learn/ky-thuat-lai-xe/ky-thuat-phanh-khan-cap-xe-may/' },
  ],
  related: [
    'giu-khoang-cach-an-toan-khi-di-xe-may',
    'ky-thuat-phanh-khan-cap-xe-may',
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'vung-mu-cua-xe-tai-khi-di-xe-may',
  ],
};
