// AI WIKI TOTAL — bài mở rộng cụm /wiki/lop-banh-xe/: lốp xe máy cách chọn và thời điểm thay (slot S00019)
'use strict';

module.exports = {
  slug: 'lop-xe-may-cach-chon-va-thoi-diem-thay',
  title: 'Lốp xe máy: cách chọn và thời điểm thay',
  seoTitle: 'Lốp xe máy: cách chọn và thời điểm thay đúng',
  metaDescription: 'Lốp xe máy: cách đọc ký hiệu kích cỡ, chọn lốp không săng hay có săng, áp suất chuẩn, dấu hiệu lốp mòn và thời điểm thay để an toàn khi chạy.',
  summary: 'Lốp là bộ phận duy nhất của chiếc xe máy chạm vào mặt đường, nhưng lại là thứ bị xem nhẹ nhất: nhiều người chạy đến khi lốp nhẵn từng hay xuyên lỗ mới nhớ ra mình đã quá hạn thay từ lâu. Bài viết này đi theo trình tự thực tế của một vòng đời lốp: đọc ký hiệu trên thành lốp để biết xe mình đang dùng cỡ nào, chọn lốp đúng khi đến hạn thay, giữ áp suất đúng trong suốt quá trình dùng, nhận biết sớm các dấu hiệu mòn và hư hỏng, và chốt thời điểm thay — trước khi vệt mòn hay vết nứt biến chuyện thay lốp thành chuyện nằm lề đường.',
  quickAnswer: 'Thay lốp xe máy khi vệt mòn đã gần hết (rãnh còn khoảng một milimét hoặc nhẵn từng đoạn), thành lốp nứt nhiều vết nhỏ do lão hóa, lốp bị chồi u hoặc vá quá nhiều lần. Khi chọn lốp: giữ đúng kích cỡ ghi trên thành lốp cũ và sổ tay xe, chọn loại không săng nếu xe thiết kế cho không săng, và bơm đúng áp suất nhà sản xuất khuyến nghị — không phải bơm căng hết cỡ.',
  keyPoints: [
    'Lốp là bộ phận duy nhất tiếp xúc mặt đường: mọi thao tác phanh, vào cua và giữ hướng đều truyền qua hai mảng lốp nhỏ hơn bàn chân — lốp kém là mọi hỗ trợ an toàn khác của xe đều bị triệt tiêu.',
    'Đọc được ký hiệu trên thành lốp (ví dụ 90/90-14) là kỹ năng cơ bản để chọn đúng cỡ: sai cỡ hoặc sai chỉ số tải là lỗi phổ biến nhất khi thay lốp tự ý.',
    'Lốp không săng và lốp có săng cho trải nghiệm và quy trình thay khác nhau: dùng đúng loại theo thiết kế xe, không tự chuyển đổi vì ham rẻ hay ham kiểu.',
    'Áp suất là biến số ảnh hưởng đồng thời đến an toàn, tuổi thọ lốp và mức hao xăng: non lốp làm mòn hai vai, căng quá làm mòn giữa và giảm bám — kiểm tra định kỳ hàng tuần.',
    'Thời điểm thay nhìn vào bốn dấu hiệu: vệt mòn gần cạn, nứt lão hóa trên thành, chồi u hay móp biến dạng, và lịch sử vá quá dày — không chờ đến lúc lốp chết hẳn.',
    'Lắp lốp mới cần làm lại độ căng xiên xích, kiểm tra cân bánh và chạy rà vài chục cây số đầu ở tốc độ vừa — những việc nhỏ quyết định cảm giác lái của cả bộ lốp mới.',
  ],
  category: 'wiki',
  hub: 'lop-banh-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['lốp xe máy', 'lốp không săng', 'áp suất lốp', 'vệt mòn lốp', 'ký hiệu lốp', 'thay lốp'],
  keywords: ['lốp xe máy', 'thay lốp xe máy khi nào', 'chọn lốp xe máy', 'lốp không săng', 'áp suất lốp xe máy', 'ký hiệu lốp xe máy', 'lốp xe mòn'],
  sections: [
    {
      h2: 'Vì sao lốp quyết định an toàn nhiều hơn bạn nghĩ',
      html: `<p>Mọi thứ chiếc xe máy làm được đều truyền qua hai mảng lốp chạm đất — mỗi mảng chỉ lớn hơn ngón chân cái một chút. Khi bạn bóp phanh, lực dừng không đến từ đĩa phanh mà từ ma sát giữa lốp và mặt đường; khi bạn vào cua, lực giữ xe không đổ đến từ giảm xóc mà từ độ bám của vai lốp. Một chiếc xe máy dù có phanh tốt, giảm xóc đắt tiền nhưng đi đôi lốp nhẵn — về bản chất là một chiếc xe có phanh dở và vào cua trượt, vì phanh và giảm xóc chỉ làm được việc khi lốp truyền nổi lực xuống mặt đường.</p>
<p>Thực tế sử dụng khiến lốp xuống cấp âm thầm hơn bất kỳ bộ phận nào. Lốp không hỏng đột ngột như bugi hay ắc quy: nó mòn từng phần trăm milimét mỗi ngàn cây số, lão hóa từng vết nứt nhỏ trên thành cao su, và người lái thích nghi dần với cảm giác xấu đi — hôm nay phanh xa hơn hôm qua chút, vào cua leaned gợi hơn chút — mà không nhận ra nguyên nhân nằm ở hai vòng cao su. Đây là lý do các hướng dẫn bảo dưỡng đều đưa phần kiểm tra lốp vào danh mục định kỳ, chứ không phải chờ cảm giác lái báo động.</p>
<p>Hạ tầng đường sá càng làm vai trò của lốp nổi bật: ổ gà, vật rơi, mưa úng từng đoạn, mặt đường sơn mới trơn khi ướt — trong những tình huống ấy, khác biệt giữa một bộ lốp còn rãnh tốt và một bộ lốp nhẵn thường được đo bằng khoảng cách dừng xe mét nào đó, hoặc bằng biên độ lệch hướng mà xe trượt khi phanh trên đường ướt. Không có phụ kiện nào cải thiện an toàn với chi phí thấp bằng một bộ lốp đúng hạn.</p>
<p>Cuối cùng, lốp ảnh hưởng cả đến ví tiền theo cách gián tiếp: lốp non làm máy phải gánh lực lăn lớn hơn, mức xăng tốn thêm đáng kể trên quãng đường dài; lốp non còn làm mòn không đều, khiến bộ lốp phải thay sớm hơn tuổi thọ thiết kế. Bơm đúng và thay đúng kỳ là hình thức tiết kiệm được ngụy trang thành việc bảo dưỡng.</p>`,
    },
    {
      h2: 'Đọc ký hiệu trên thành lốp trước khi mua',
      html: `<p>Chuỗi ký tự bên hông lốp là "hộ chiếu" của nó, và đọc được chuỗi này là bước đầu để không mua nhầm. Lấy một cỡ phổ biến: 90/90-14. Số 90 đầu là bề rộng lốp tính theo milimét; số 90 thứ hai là chiều cao thành lốp tính theo phần trăm của bề rộng (thành cao bằng chín mươi phần trăm bề rộng); số 14 cuối là đường kính săng tính theo inch. Cùng họ xe có nhiều biến thể cỡ lốp — ví dụ 70/90-14 với 90/90-14 cùng ăn săng 14 inch nhưng khác chiều cao thành — và dùng sai biến thể làm xe thấp khác, tốc độ hiển thị lệch và phần che bùn có thể cạ lốp.</p>
<p>Sau chuỗi cỡ thường còn các chỉ số khác đáng đọc: chỉ số tải (con số chỉ mức tối đa lốp gánh được) và chỉ số tốc độ (chữ cái chỉ mức tốc độ thiết kế của lốp). Với xe máy thông dụng trong nước, nhóm chỉ số này ít khi là nút thắt, nhưng khi thay lốp không đúng cỡ gốc hoặc chọn hàng trôi nổi không ghi rõ — đó là lúc rủi ro hiện ra: lốp không đủ tải cho xe chở hai người, hoặc loại mỏng không hợp tốc độ cao của xe.</p>
<p>Một điểm dễ bị tranh tưởng: lốp trước và lốp sau của cùng một xe thường khác cỡ — sau thường to hơn, có gai rãnh theo kiểu xả nước khác, và cấu trúc bên trong khác để gánh lực truyền động. Không hoán đổi hai lốp, không dùng cỡ trước thay sau theo kiểu "tạm ổn", và khi mua cặp nên mua đúng vị trí ghi trên sổ tay xe.</p>
<p>Ngoài cỡ số, trên thành lốp còn in ngày sản xuất dưới dạng bốn chữ số (tuần và năm — ví dụ 3023 là tuần ba mươi của năm hai nghìn không hai ba). Cao su lão hóa kể cả khi chưa chạy: một bộ lốp nằm kho ba năm rồi mới lắp cũng đã mất một phần tuổi thọ. Khi thay lốp mới, đừng ngại hỏi ngày sản xuất — bộ lốp "mới" trong cửa hàng mà sinh cách đó quá lâu là điều đáng để chọn chỗ khác.</p>`,
    },
    {
      h2: 'Lốp không săng và lốp có săng: chọn đúng thiết kế của xe',
      html: `<p>Phân biệt lớn nhất giữa hai loại nằm ở cách giữ khí: lốp có săng (tuyp) dựa vào ruột cao su bên trong để chứa khí, còn lốp không săng tự thân nó kín khí nhờ lớp trong dày sát vành, khớp chặt vào vành bánh theo biên thiết kế đặc biệt. Với người dùng, khác biệt hiện ra ở ba điểm: độ bám và cảm giác lái, trọng lượng bánh, và cách xử lý khi bị dằm.</p>
<p>Lốp không săng có ưu điểm nổi trội về an toàn khi bị dằm: khí thoát chậm qua vết dằm do lớp trong tự bịt một phần, cho bạn quãng đường và thời gian để vào lề xử lý thay vì bị xẹp đột ngột giữa đường. Lốp không săng còn nhẹ hơn, tản nhiệt tốt hơn và hầu hết xe máy hiện đại được thiết kế cho loại này. Ngược lại, xe đời cũ với vành thiết kế cho lốp có săng thì không nên tự chuyển sang không săng — vành cho lốp có săng không có biên giữ kín cần thiết, lốp không săng lắp vào sẽ rò khí hoặc tọt vành khi gặp va chạm.</p>
<p>Một lỗi phổ biến ở các tiệm vặt là "cứm lốp không săng vào vành có săng rồi nhét ruột vào" — phương án lai này chạy được nhưng giết ưu điểm của cả hai loại: mất đặc tính thoát khí chậm, tăng trọng lượng, và tạo khe cho khí rò giữa các lớp. Quy tắc đơn giản: xe thiết kế cho không săng dùng không săng, xe thiết kế cho có săng giữ có săng; nếu muốn chuyển hẳn, phải đổi cả vành — việc cần thợ tư duy và thường không đáng chi phí trên xe phổ thông.</p>
<p>Khi mua lốp không săng, thêm một điểm kiểm tra sau khi lắp: ngâm hoặc xịt dung dịch phát hiện rò khí quanh biên lốp — vành móp nhẹ hoặc lắp không chuẩn là nguyên nhân "bơm hôm trước, non hôm sau" không rõ vết dằm nào. Với lốp có săng, điểm tương ứng là ruột: khi thay lốp mới nên thay luôn ruột nếu ruột đã vá nhiều hoặc đã dùng lâu — ruột già tái dùng với lốp mới là cách tạo hỏng hóc mới ngay trên bộ lốp vừa đầu tư.</p>`,
    },
    {
      h2: 'Áp suất: biến số rẻ nhất nhưng bị bỏ qua nhiều nhất',
      html: `<p>Áp suất lốp là thông số duy nhất mà bạn có thể điều chỉnh trong ba mươi giây nhưng ảnh hưởng đến cả ba thứ: an toàn, tuổi thọ lốp và mức hao xăng. Bơm non làm lốp biến dạng nhiều khi chạy, mòn nhanh ở hai vai, tăng lực lăn khiến máy nặng xăng và nhiệt sinh nhiều hơn; bơm căng quá làm mòn giữa vệt, giảm diện tích chạm đất nên phanh kém bám, và khiến xe nhún bờ cứng hơn — hấp thụ va chạm của lốp chính là một lớp giảm xóc, căng quá là mất lớp đó.</p>
<p>Mức chuẩn không phải là con số chung cho mọi xe: mỗi dòng xe có khuyến nghị riêng của nhà sản xuất, in trong sổ tay và thường dán ở cột hậu hoặc phía gần móc che, phân biệt mức cho chạy một người và chạy hai người. Dao động phổ biến với xe số trong nước nằm ở khoảng khá rộng — đó là lý do không thể "bơm theo cảm giác chung chung": lấy đúng khuyến nghị của dòng xe mình. Hai lốp trước sau thường có mức khác nhau, và áp suất kiểm tra lúc lốp nguội thì mới chuẩn — chạy xa vào thẳng tiệm bơm là đo lệch.</p>
<p>Nhịp kiểm tra hợp lý: hàng tuần một lần cùng lúc với lau xe, và bắt buộc trước mỗi chuyến dài hoặc chở nặng. Muốn kiểm tra tiện, tự đầu tư một đồng hồ đo áp suất nhỏ — ống bơm tự động ở ven đường thường sai số và không có kim đo; đồng hồ tay cho con số đọc được và thói quen ghi lại để so sánh tuần sau. Nếu một lốp non nhanh hơn hẳn lốp kia giữa hai lần kiểm tra — đó là tín hiệu có vết dằm nhỏ rò khí hoặc vành cần kiểm tra, đừng chỉ bơm lại cho qua tuần.</p>
<p>Một quan niệm sai cần bỏ: "bơm non cho êm". Cảm giác êm của lốp non thật ra là xe lượm và lượm theo mặt đường, dễ đâm vào rãnh và nặng lái ở tốc độ; còn phần êm thật đến từ giảm xóc đúng kỳ và lốp đúng áp suất. Tương tự, mùa lạnh không cần "bơm thêm cho chắc" — chênh lệch nhiệt độ làm áp suất tự giảm chút đỉnh, cứ bơm đúng khuyến nghị là đủ, đừng cộng thêm theo phán đoán.</p>`,
    },
    {
      h2: 'Dấu hiệu lốp cần thay: bốn tín hiệu không được bỏ qua',
      html: `<p>Tín hiệu thứ nhất, rõ nhất: vệt mòn. Rãnh lốp có vai xả nước khi đi mưa — khi rãnh còn khoảng một milimét hoặc có đoạn nhẵn tới mặt phẳng, khả năng xả nước gần như mất, phanh trên đường ướt dài ra rõ rệt. Nhiều lốp có cột chỉ báo mòn in sẵn trong rãnh: khi mặt lốp mòn bằng với cột là tới hạn. Cách kiểm tra không có cột: thả một chiếc đồng xu vào rãnh xem còn sâu bao nhiêu — sâu dưới một milimét là tính chuyện thay.</p>
<p>Tín hiệu thứ hai: nứt lão hóa. Cao su già đi theo thời gian kể cả khi ít chạy — vết nứt nhỏ lan trên thành lốp như mạng nhện là dấu lão hóa; nứt nhiều và sâu tới lớp vải là lốp hết tuổi, và không có cách vá cho hiện tượng này. Xe để lâu trong che, ít chạy nhưng đời lốp trên năm năm cũng nên soi kỹ nhóm dấu hiệu này trước khi đưa xe vận hành lại.</p>
<p>Tín hiệu thứ ba: biến dạng bất thường. Chồi u (phồng cục) trên thành hoặc vai lốp nghĩa là lớp vải bên trong đã đứt một phần — cấu trúc lốp hỏng, có thể nổ khi gặp va chạm hoặc chạy nhanh; đây là tình huống thay ngay không do dự. Móp vành sau cú va mạnh cũng nằm trong nhóm này: vành móp làm lốp không kín biên hoặc rung khi chạy — sửa vành hoặc thay vành cùng lúc với lốp.</p>
<p>Tín hiệu thứ tư: lịch sử vá. Một hai vết vá gọn ở giữa lốp chưa phải án tử; nhưng khi lốp trải qua dày đặc các vết dằm, các miếng vá to ở vai lốp, hoặc từng bị xẹp đột ngột khi đang chạy (lốp xẹp chạy tiếp làm lớp vải bên trong gãy) — lúc đó độ tin cậy của lốp đã giảm theo cấp số. Tổng hợp bốn tín hiệu này thành thói quen: mỗi tháng soi một vòng lốp lúc rửa xe — năm phút quyết định cả mùa an toàn.</p>`,
    },
    {
      h2: 'Quy trình thay lốp và rà xe sau khi lắp',
      html: `<p>Trước khi đến tiệm, chuẩn bị ba thông tin: cỡ lốp đọc trên thành lốp hiện tại, khuyến nghị loại (không săng hay có săng) từ sổ tay, và ngân sách phần thang hợp lý — lốp là mặt hàng chất lượng đi cùng giá cả, hàng quá rẻ so với mặt bằng thường đi kèm dấu hiệu đáng ngờ về nguồn gốc và ngày sản xuất. Chọn nơi thay có thợ hỏi lại dòng xe và kiểm tra vành trước khi lắp — dấu hiệu của tiệm có quy trình.</p>
<p>Lúc giao lốp, kiểm tra ngay ba thứ: đúng cỡ in trên thành, ngày sản xuất gần, và loại đúng thiết kế xe. Yêu cầu thay cả lốp hai bánh cùng lúc nếu cả hai đều gần hạn — cặp lốp đồng bộ cho độ bám đều trước sau; nếu chỉ thay một, thói quen là lốp mới về bánh sau (nơi gánh lực truyền động và mòn nhanh hơn).</p>
<p>Sau khi lắp, ba việc rà trước khi coi là xong. Thứ nhất, xoay bánh bằng tay nghe có tiếng cạ, cọ — vành móp hoặc lốp lắp lệch tâm tạo hiện tượng này. Thứ hai, chạy thử vài cây số ở tốc độ vừa, tay lái nhẹ nhàng: bánh mới rung hoặc giật ở tốc độ là lỗi cân bánh hoặc lắp biên chưa chuẩn. Thứ ba, kiểm tra lại áp suất sau một hai ngày chạy — đặc biệt với lốp không săng mới, biên cần thời gian khớp vành; non nhanh bất thường là tín hiệu rò biên cần quay lại tiệm.</p>
<p>Ba mươi cây số đầu của bộ lốp mới là giai đoạn rà: gai lốp chưa trôi hết lớp phủ, độ bám chưa đạt tối đa trên đường ướt — chạy nhẹ tay, tránh bóp phanh gấp và vào cua sát trong giai đoạn này. Sau giai đoạn rà, bộ lốp mới với áp suất đúng sẽ cho cảm giác lái khác hẳn bộ cũ đã mòn: phần lớn người lái mô tả là "xe bám đường hơn" — thực ra xe cũ của họ chỉ thiếu đúng hai mảng cao su đủ tiêu chuẩn.</p>`,
    },
  ],
  checklist: [
    'Đọc cỡ lốp trên thành bánh hiện tại và đối chiếu sổ tay xe trước khi mua — không mua theo lời "cỡ này cũng ăn được".',
    'Kiểm tra ngày sản xuất in trên thành lốp mới lúc giao hàng — bộ lốp tồn kho quá lâu đã mất một phần tuổi thọ.',
    'Chọn đúng loại theo thiết kế xe: không săng cho xe thiết kế không săng, có săng cho xe vành ruột — không tự chuyển đổi.',
    'Bơm đúng mức khuyến nghị của nhà sản xuất, kiểm tra hàng tuần lúc lốp nguội, phân biệt mức một người và hai người.',
    'Soi lốp hàng tháng: vệt mòn gần cạn, nứt thành, chồi u, vành móp — bốn dấu hiệu nào rõ là tính thay.',
    'Sau khi lắp lốp mới: xoay bánh nghe tiếng cạ, chạy rà ba mươi cây số đầu, kiểm tra lại áp suất sau một hai ngày.',
  ],
  warnings: [
    'Không chạy tiếp khi lốp chồi u hoặc nứt sâu — cấu trúc lốp đã hỏng, nguy cơ nổ lốp khi gặp va chạm hoặc chạy nhanh là thực tế, thay ngay.',
    'Không bơm non "cho êm" hoặc bơm căng hết cỡ — cả hai làm mòn không đều, giảm độ bám và tăng nguy cơ trượt khi phanh trên đường ướt.',
    'Không hoán đổi lốp trước và lốp sau — hai vị trí khác cỡ, khác cấu trúc gai và khác vai trò trong dẫn động và phanh.',
    'Không lắp lốp không săng vào vành thiết kế cho lốp có săng kèm ruột — biên không kín, rủi ro xẹp đột ngột giữa đường không giảm so với lốp cũ.',
  ],
  notes: [
    'Bài viết mang tính kiến thức chung về lốp xe máy, không quảng bá cho hãng lốp hay cửa hàng cụ thể nào; mức áp suất, cỡ lốp và khuyến nghị bảo dưỡng phải đối chiếu sổ tay của dòng xe đang dùng.',
    'Đặc tính lốp khác nhau theo từng dòng xe và từng hãng sản xuất; những con số mang tính tham khảo phổ biến, trường hợp cụ thể cần thợ kiểm tra trực tiếp.',
  ],
  references: [
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất xe máy — khuyến nghị áp suất lốp, cỡ lốp và kỳ kiểm tra theo số km chạy.',
    'Tài liệu kỹ thuật của các hãng sản xuất lốp — cách đọc ký hiệu kích cỡ, chỉ số tải và chỉ số tốc độ ghi trên thành lốp.',
    'Quy chuẩn kỹ thuật an toàn của xe máy đang lưu hành — yêu cầu về tình trạng lốp trong đăng kiểm xe.',
  ],
  related: ['lich-bao-duong-xe-may-dinh-ky-theo-so-km', 'xe-may-bi-bo-phanh-nguyen-nhan-va-cach-xu-ly', 'dau-nhot-xe-may-loai-chu-ky-va-cach-chon'],
};
