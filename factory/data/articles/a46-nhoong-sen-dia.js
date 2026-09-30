// AI WIKI TOTAL — bài mở rộng cụm /wiki/thuat-ngu-xe/: nhông sên dĩa xe máy cấu tạo và thời điểm thay (slot S00046)
'use strict';

module.exports = {
  slug: 'nhoong-sen-dia-xe-may-cau-tao-va-thoi-diem-thay',
  title: 'Nhông sên dĩa xe máy: cấu tạo, dấu hiệu hao mòn và thời điểm thay cả bộ',
  seoTitle: 'Nhông sên dĩa xe máy là gì, khi nào thay',
  metaDescription: 'Nhông sên dĩa xe máy là gì: cấu tạo bộ truyền động sau, dấu hiệu hao mòn từng bộ phận, cách bảo dưỡng và thời điểm nên thay cả bộ.',
  summary: 'Nhông sên dĩa là bộ truyền động cuối cùng của xe máy số phổ thông — bộ phận nhận lực từ hộp số đưa tới bánh sau, và cũng là một trong những cụm hao mòn nhanh nhất của xe. Trong thuật ngữ xe máy Việt Nam, "nhông" là bánh răng nhỏ gắn trục hộp số, "sên" là xích nối nhông với dĩa, "dĩa" là bánh răng lớn gắn moay-ơ bánh sau. Bài viết này giải thích vai trò của từng thành phần, cách nhận dấu hiệu hao mòn (kéo sên, mòn răng nhông, lệch dĩa) bằng mắt thường và bằng tay, vì sao nên thay cả bộ thay vì thay từng phần, cách bảo dưỡng — chỉnh độ căng và tra mỡ đúng cách, và trả lời các câu hỏi thực tế như sên rít, sên rớt giữa đường hay có nên nâng cấp bộ nhông sên.',
  quickAnswer: 'Nhông sên dĩa là bộ truyền lực từ hộp số ra bánh sau: nhông (bánh răng nhỏ phía trước), sên (xích) và dĩa (bánh răng lớn phía sau). Dấu hiệu hao mòn: sên bị kéo dài — kéo cả sên lên khỏi dĩa thấy độ hở lớn, răng nhông và dĩa mòn nhọn cong hình móc câu, xe có tiếng rít - lạch cạch sau, và xe giật khi thay đổi ga. Nên thay cả bộ ba món cùng lúc vì nhông mới chạy trên sên - dĩa cũ sẽ mòn lệch nhanh ngược trở lại. Bảo dưỡng nền: chỉnh độ căng đúng chuẩn ghi trong sổ tay và tra mỡ sên định kỳ — hai việc này quyết định tuổi của cả bộ.',
  keyPoints: [
    'Ba món một hệ thống: nhông, sên và dĩa ăn khớp với nhau theo hình dạng răng hiện tại — vì thế một món mòn thì hai món kia mòn theo, và thay một món mới vào giữa hai món cũ là món mới mau mòn lại.',
    'Dấu hiệu sên "kéo" (giãn): kéo sên ở điểm giữa hai dĩa lên được cao quá mức so với ghi chuẩn trong sổ tay — sên giãn làm đập dĩa, rít và nhảy răng khi ga gấp; kéo sên để kiểm mỗi lần bảo dưỡng là thao tác một phút đáng giá nhất.',
    'Dấu hiệu răng mòn: răng nhông và dĩa khỏe có vai tròn đều, rõ; răng mòn cong hình móc câu, cao thấp lởm chởm — nhìn theo hướng quay của răng thấy ngay. Răng mòn mà tiếp tục chạy là sên nhảy răng giữa dốc hoặc ngắt tải gấp.',
    'Chỉnh độ căng đúng: sên quá căng làm mòn trục và nhốt pôn (đuôi pôn), sên quá chùng làm đập - nhảy - tuột; chuẩn của từng xe ghi trong sổ tay — thợ chỉnh theo số, không chỉnh theo cảm giác "căng vừa".',
    'Tra mỡ sên định kỳ là việc bảo dưỡng rẻ nhất và hiệu quả nhất: mỡ đúng loại giảm ma sát, chống rỉ và cuột bụi vào mắt xích; rửa sạch trước khi tra lớp mới, và tra lại sau mỗi chuyến mưa - rửa xe.',
    'Thay đúng thời điểm thì cả bộ (nhông - sên - dĩa) là dịch vụ dự kiến trong đời xe; để trễ thì hao mòn lan: sên giãn đập trục dĩa, bát dĩa, rồi thấm cả trục pôn — tiền thay ba món thành tiền thay cả cụm sau.',
  ],
  category: 'wiki',
  hub: 'thuat-ngu-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['nhông sên dĩa', 'xích truyền động', 'bộ truyền lực xe máy', 'hao mòn xích', 'chỉnh độ căng sên', 'mỡ sên'],
  keywords: ['nhông sên dĩa xe máy', 'dấu hiệu hao mòn nhông sên dĩa', 'thay nhông sên dĩa khi nào', 'chỉnh độ căng xích xe máy', 'tra mỡ sên xe máy', 'sên xe máy bị rít'],
  sections: [
    {
      h2: 'Nhông sên dĩa là gì và làm việc thế nào',
      html: `<p>Trong thuật ngữ xe máy Việt Nam, bộ ba món quen gọi gọn là "nhông sên dĩa" là bộ truyền động cuối: nhông là bánh răng nhỏ gắn trên trục ra của hộp số, quay theo tốc độ máy và số đang chạy; sên là xích kim loại vòng khép kín ăn khớp răng nhông ở đầu này và răng dĩa ở đầu kia; dĩa là bánh răng lớn gắn moay-ơ bánh sau, nhận lực qua sên và quay bánh sau. Mọi lực đẩy xe đi từ hộp số đều đi qua đúng ba món này — vì thế hao mòn của chúng là hao mòn "bằng từng vòng quay xe chạy".</p>
<p>Tỷ số truyền giữa nhông và dĩa (số răng dĩa chia số răng nhông) là một phần tính cách của xe: đổi số răng dĩa hoặc nhông là cách dân chơi đổi tính năng — dĩa to hơn hoặc nhông nhỏ hơn thì xe bốc hơn nhưng đạt tốc độ tối đa thấp hơn, ngược lại thì xe "đèo" hơn và nhịp tua thấp hơn ở tốc độ chạy đường trường. Với người dùng phổ thông, tỷ số nhà sản xuất đã chọn là cân bằng tốt — đổi tỷ số là việc của người hiểu rõ đánh đổi, không phải việc "nâng cấp" vô hại.</p>
<p>Khác với bộ truyền của xe ga (dây curoa - hệ puli trong hộp CVT), bộ nhông sên dĩa hở — nằm ngoài, nhìn thấy được, và hứng trọn bụi đất - nước mưa. Đây vừa là điểm tiện (kiểm tra hằng tuần không cần tháo gì) vừa là nhược điểm bẩn: bụi + mỡ cũ tạo chất mài bám quanh mắt xích, và chính chất này mài trục xích từ bên trong, chỗ mắt thường nhìn không thấy.</p>
<p>Cấu tạo sên đáng biết ở một điểm: mắt xích có trục và con lăn (hoặc đế trượt tùy loại) — sên "kéo dài" không phải vì vành ngoài giãn mà vì mài mòn bên trong các trục mắt, khiến từng mắt dài thêm chút, cộng dồn thành cả vòng sên dài ra. Đây là lý do sên giãn là dấu hiệu của hao mòn thật bên trong chứ không phải "sên mới sa ra" — và cũng là lý do không thể "nắn sên" về độ dài cũ.</p>`,
    },
    {
      h2: 'Nhận dấu hiệu hao mòn bằng mắt và tay',
      html: `<p>Kiểm tra kéo sên — thao tác quan trọng nhất: đặt xe trên chống chính giữa, tìm điểm giữa cung sên (giữa nhông và dĩa, phía trên), kéo sên lên khỏi dĩa bằng tay. Sên khỏe ở điểm giữa này chỉ nhấc lên được một khoảng nhỏ; sên giãn thì nhấc được cao hơn nhiều, và khi nhấc lên thấy răng dĩa lộ sâu là sên đã giãn vượt chuẩn. Mỗi xe có thông số độ căng chuẩn trong sổ tay (thường ghi theo khoảng di chuyển của điểm giữa) — so số đo được với số chuẩn thay vì cảm tính.</p>
<p>Đọc răng: nhìn dĩa theo chiều quay của sên — răng khỏe có vai và chóp tròn đều, các răng đều nhau; răng mòn thì một mặt bị "ăn" cong, chóp nhọn lệch hình móc câu, và nhìn xa cả vành dĩa thấy răng sóng cao thấp lởm chởm. Nhông mòn thấy rõ hơn: chỉ hơn chục răng, một răng mòn là cả nhông xấu — nhông mòn mà kéo sên vẫn thấy sên "khỏe" là vì mòn đang nằm ở khớp răng chứ chưa giãn sên. Mòn nhông - dĩa cùng sên giãn là bộ ba dấu hiệu của thời điểm thay.</p>
      <p>Nghe và cảm khi chạy: tiếng rít nhẹ sau xe khi ga đều, tiếng lạch cạch ron rộn khi tăng - giảm ga đột ngột (sên đập dĩa), cảm giác giật nhẹ mỗi lần bóp - nhả ga (khe hở ăn khớp giữa sên giãn và răng mòn), và sên "nhảy" kèm tiếng cộp khi leo dốc hoặc ga gấp — tất cả là ngôn ngữ bộ truyền đang báo. Một trong các dấu hiệu này xuất hiện thì kiểm ngay ở nhà; hai dấu hiệu cùng lúc là tới lúc đặt lịch thay.</p>
<p>Kiểm tra thêm hai điểm phụ: trục dĩa (bát dĩa) — nắm dĩa giật ngang - dọc xem có đụng dư không, trục mòn làm dĩa lắc lệch mặt phẳng quay, sên chạy trên dĩa lắc thì hao mòn nhanh gấp; và trục pôn (đuôi pôn) — nắm pôn xe giật thử, trục pôn mòn làm bánh sau lắc, thêm sên quá căng lâu ngày là nguyên nhân đẩy trục pôn mòn sớm. Hai trục này là phần "hậu quả" của bộ nhông sên bị lơ — và cũng là phần chứng minh tại sao để trễ thì tiền tăng theo cấp số.</p>`,
    },
    {
      h2: 'Vì sao thay cả bộ và thay lúc nào',
      html: `<p>Quy tắc thay cả bộ (nhông + sên + dĩa) có cơ sở kỹ thuật rõ: ba món đã mòn theo hình dạng của nhau — răng nhông mòn cong khớp với mắt sên giãn, mắt sên giãn khớp với răng dĩa mòn lởm chởm. Thay sên mới vào giữa nhông - dĩa cũ: mắt sên mới chuẩn chạy trên răng đã mòn lệch, áp lực đè lên phần vai răng còn lại — sên mới mau giãn bất thường, và nhông - dĩa cũ tiếp tục mòn sâu hơn. Cùng lặp ngược với nhông mới - sên cũ. Tổng kết thực dụng: thay lẻ là mua hai lần thay trong một chu kỳ, kèm thêm rủi ro tuột - nhảy răng giữa đường.</p>
<p>Thời điểm thay không tính theo tháng mà theo dấu hiệu và theo điều kiện chạy: xe chạy phố sạch và tra mỡ đều thì bộ sống dài; xe hay đi đường bụi - mưa - rửa nước áp nhiều thì đời bộ ngắn hơn hẳn. Dấu hiệu quyết định là nhóm đã nói ở phần trên — sên vượt chuẩn căng dù đã chỉnh, răng mòn hình móc, rít - lạch cạch - giật ga. Khi bộ ba dấu hiệu hiện diện thì đó là thời điểm, không cần đợi mốc km nào cả.</p>
<p>Trường hợp chấp nhận thay lẻ hợp lý duy nhất: dĩa còn tốt rõ (răng đều), chỉ sên giãn và nhông mòn — một số thợ thay cặp nhông - sên giữ dĩa nếu dĩa thật sự còn; đây là lựa chọn tính toán, và ai chọn vậy nên hiểu đánh đổi: chu kỳ sau phải theo dõi dĩa sát hơn. Ngược lại, thay dĩa mà giữ nhông - sên cũ là phương án hầu như không bao giờ đáng — dĩa là món to và đắt nhất bộ, thay nó vào hai món mòn là mòn ngược lại.</p>
<p>Chọn bộ thay: mua theo mã của xe (số răng nhông - dĩa và kích cỡ sên ghi trong sổ tay), chọn loại phù hợp nhu cầu — sên thường có xích thường và xích có trục lăn (dài đời hơn, đắt hơn, hợp xe chạy nhiều), và hàng giữ tỷ số răng chuẩn nhà sản xuất trừ khi có lý do rõ. Nguồn mua đáng tin (hàng chính hãng hoặc nhà cung cấp uy tín) là một nửa tuổi của bộ — hàng nhái nhông sên dĩa là nhóm giả mạo phổ biến trên thị trường phụ tùng, và khác biệt chỉ thấy sau vài trăm km.</p>`,
    },
    {
      h2: 'Chỉnh độ căng và tra mỡ — hai việc quyết định tuổi bộ',
      html: `<p>Độ căng sên chuẩn: sên cần một khoảng chùng nhỏ để làm việc — quá căng thì mỗi vòng quay, sên căng thêm đè trục nhông, trục dĩa và cả trục pôn (vì pôn nối cứng khung - bánh sau); hậu quả tích lũy là mòn trục, kêu trục và hao pôn. Quá chùng thì sên đập dĩa khi tăng - giảm ga, nhảy khi qua gờ giảm tốc, và có thể tuột khỏi dĩa ở tải nặng. Chuẩn căng của từng xe ghi trong sổ tay (đo bằng khoảng nhích của điểm giữa cung sên) — chỉnh theo số, và chỉnh khi xe đứng trên chống chính cho đúng hình học treo sau.</p>
<p>Chu kỳ chỉnh căng: kiểm mỗi lần bảo dưỡng hoặc sau mỗi chuyến đi xa - mưa lớn; sên mới sau khi thay có "giãn chạy vào" trong vài trăm km đầu — chỉnh lại sớm một lần sau thay là việc nhiều người bỏ, rồi tưởng bộ mới "xấu sớm". Hai điểm chỉnh căng hai bên phải đều — chỉnh lệch làm bánh sau thẳng hàng sai với bánh trước, mòn lốp lệch và kéo lái nhẹ về một bên.</p>
<p>Tra mỡ: mỡ sên làm ba việc — giảm ma sát mặt trục mắt xích, chống rỉ, và "cầm" bụi khỏi vương vào mắt xích. Tra đúng: quét sạch lớp mỡ cũ dính bụi trước (mỡ cũ + bụi là chất mài), lau sên, tra lớp mỡ mới mỏng đều một vòng sên, để vài phút cho mỡ thấm rồi lau phần thừa bên ngoài (mỡ dày bên ngoài chỉ là bụi đổ về sau). Chu kỳ: theo tuần đi phố, và luôn tra lại sau mỗi chuyến mưa lớn hoặc rửa xe — nước cuột mỡ nhanh hơn nhiều so với thời gian.</p>
<p>Loại mỡ: dùng mỡ chuyên dụng cho xích (loại quánh, có sẵn ống bơm tiện), không thay bằng dầu nhớt động cơ (loãng, văng, giữ bụi kém) hay mỡ bôi trơn các loại khác. Với xích có đai bua cao su (xích có vòng đệm kín): mỡ tương thích với vòng đệm — một số dung dịch tẩy mạnh làm chai đai bua, mắt xích mất kín và mỡ bên trong thoát ra. Tránh "tắm sên" bằng xăng - dầu hỏa chà ngâm với xích có vòng đệm vì cùng lý do — vệ sinh bằng dung dịch chuyên dụng nhẹ và bàn chải.</p>`,
    },
    {
      h2: 'Các câu hỏi thực tế hay gặp',
      html: `<p>Sên rít ngay sau khi tra mỡ: hoặc lớp mỡ chưa vào được mặt trong mắt xích (chạy thêm vài trăm mét cho mỡ tan đều), hoặc rít không nằm ở sên mà ở chỗ khác — bát dĩa khô, trục pôn, hoặc đệm căng sên cũ; tra lại mỡ đúng cách và nghe lại, rít ở lại thì soi tiếp các điểm phụ chứ không "tra thêm mỡ cho tới hết rít".</p>
<p>Sên rớt giữa đường: dừng hẳn xe vào chỗ an toàn, không cố chạy tiếp — sên văng khi đang ga là rủi ro cuốn vào pôn và ngã thật. Nếu sên chỉ tuột khỏi dĩa mà còn nguyên: tra lại vị trí, đẩy bánh tới cho sên ăn khớp răng dĩa, về tới nơi gần nhất để kiểm — sên tuột một lần là dấu hiệu căng sai hoặc mòn, không phải chuyện "đắp lại là xong". Nếu sên đứt: cần hỗ trợ — bộ nhông sên dĩa không phải đồ sửa được ven đường với tay không, và đó là lý do kiểm tra căng - mỡ định kỳ rẻ hơn hẳn một buổi đứng giữa đường.</p>
<p>"Có nên thay bằng sên - nhông hàng hiệu có mã 'racing'?" — với xe phổ thông đi làm, câu trả lời gần như luôn là không: các bộ đổi tỷ số hoặc hàng hiệu "đá" nhắm vào người hiểu rõ tính năng đánh đổi; xe đi phố cần bộ chuẩn, hàng rõ nguồn gốc và bảo dưỡng đều — bộ đó chạy êm, dài đời và rẻ tổng hơn bất kỳ "bộ hiệu" nào trong cùng số km.</p>
<p>Chốt lại: nhông sên dĩa là cụm đơn giản nhất để tự kiểm trên cả chiếc xe — chống chính giữa, một phút kéo sên - nhìn răng, và mỗi tuần một lần tra mỡ. Ba thói quen rẻ này là toàn bộ khoảng cách giữa "cụm trăm nghìn km không chuyện" và "cụm rít - tuột - thay dĩa sớm" của cùng một dòng xe; kiểm tra bằng mắt thường, thay theo dấu hiệu, và thay cả bộ — công thức ngắn gọn của cả bài.</p>`,
    },
  ],
  checklist: [
    'Mỗi tuần hoặc sau chuyến mưa - rửa xe: lau sên và tra lớp mỡ mỏng đều một vòng, lau phần mỡ thừa bên ngoài để không đổ bụi về.',
    'Mỗi lần bảo dưỡng: kéo sên tại điểm giữa cung để đo độ chùng, so với thông số chuẩn trong sổ tay; chỉnh tại hai điểm đều nhau, xe đứng chống chính giữa.',
    'Soi răng nhông và dĩa theo chiều quay: răng tròn đều là khỏe, răng cong hình móc câu - cao thấp lởm chởm là mòn — mòn là lên lịch thay cả bộ.',
    'Sau khi thay bộ mới: chạy vài trăm km rồi chỉnh lại độ căng một lần — sên mới giãn "chạy vào" ở giai đoạn đầu.',
    'Nghe tiếng bộ truyền khi chạy: rít đều, lạch cạch khi tăng - giảm ga, giật nhẹ theo ga là các tín hiệu cần kiểm sớm — không chờ mốc km.',
    'Kiểm đồng thời bát dĩa và trục pôn: nắm dĩa - nắm pôn giật ngang dọc xem có lắc dư; hai trục này là phần hậu quả nếu sên căng sai hoặc mòn lâu không xử.',
  ],
  warnings: [
    'Không chạy tiếp khi sên đã tuột hoặc nhảy răng — sên văng khi đang ga có thể cuốn vào pôn gây ngã thật; dừng chỗ an toàn và xử trước khi tiếp tục.',
    'Không chỉnh sên quá căng với ý nghĩ "căng là chắc" — sên quá căng đè trục nhông, bát dĩa và trục pôn, mòn cả cụm sớm và là nguyên nhân phổ biến của hỏng pôn trên xe số.',
    'Không ngâm - chà sên có vòng đệm kín bằng xăng, dầu hỏa hoặc dung dịch tẩy mạnh — chai đai bua là mất lớp kín mỡ bên trong mắt xích, sên già nhanh gấp.',
    'Không thay lẻ bộ đã mòn chung (sên mới vào nhông - dĩa cũ hoặc ngược lại) — món mới chạy trên răng mòn mau hỏng lại, tốn hai lần thay trong một chu kỳ; ngoại lệ duy nhất là dĩa thật sự còn tốt và có theo dõi sát.',
  ],
  notes: [
    'Bài viết mang tính kiến thức chung về bộ nhông sên dĩa trên xe máy số phổ thông tại Việt Nam; thông số độ căng, số răng và loại sên chuẩn của từng xe ghi trong sổ tay — luôn theo khuyến nghị của nhà sản xuất xe mình.',
    'Việc thay bộ và chỉnh trục nên làm tại nơi có chuyên môn; bài viết giúp nhận biết dấu hiệu và bảo dưỡng cơ bản, không thay thế sửa chữa chuyên nghiệp.',
  ],
  references: [
    'Tài liệu kỹ thuật về xích truyền động bánh răng — cơ chế giãn mắt xích, hao mòn răng và điều kiện bôi trơn.',
    'Sổ tay hướng dẫn sử dụng xe máy của nhà sản xuất — thông số độ căng sên chuẩn, số răng bộ truyền và chu kỳ bảo dưỡng.',
    'Hướng dẫn bảo dưỡng bộ truyền cuối xe hai bánh — kiểm tra độ mòn răng, chỉnh căng và lựa chọn mỡ xích tương thích.',
  ],
  related: ['cau-tao-xe-may-tong-quan-cac-he-thong', 'lop-xe-may-cach-chon-va-thoi-diem-thay', 'dau-nhot-xe-may-loai-chu-ky-va-cach-chon', 'cham-soc-xe-may-mua-mua'],
};
