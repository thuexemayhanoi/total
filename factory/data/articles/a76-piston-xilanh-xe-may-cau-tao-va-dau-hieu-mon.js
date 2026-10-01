// AI WIKI TOTAL — bài mở rộng cụm /wiki/dong-co/: piston và xy-lanh xe máy — cấu tạo và dấu hiệu mòn (slot S00076)
'use strict';

module.exports = {
  slug: 'piston-xilanh-xe-may-cau-tao-va-dau-hieu-mon',
  title: 'Piston và xy-lanh xe máy: cấu tạo và dấu hiệu mòn',
  seoTitle: 'Piston và xy-lanh xe máy: cấu tạo và dấu hiệu mòn',
  metaDescription: 'Piston và xy-lanh là trái tim của động cơ xe máy, chịu nhiệt và áp suất cực đại mỗi vòng quay. Bài viết giải thích cấu tạo, xéc-măng và dấu hiệu mòn.',
  summary: 'Piston và xy-lanh là cặp chi tiết làm việc nặng nhất trong động cơ xe máy: mỗi phút, piston đi lên đi xuống hàng nghìn lần, chịu nhiệt độ cháy cao và áp suất nén lớn, vừa phải kín khí vừa phải trượt mượt trong xy-lanh với lớp dầu mỏng vài mi-li-mét phần trăm. Bài viết này giải thích cấu tạo của cặp chi tiết đó: thân piston với các đường rãnh lắp xéc-măng, chốt piston nối với thanh truyền, và thành xy-lanh được mạ hoặc lót lớp chống mài mòn; vai trò của từng lá xéc-măng — lá khí kín buồng đốt, lá dầu gạt ngược — và vì sao khoảng hở giữa piston và xy-lanh tính bằng phần trăm mi-li-mét lại quyết định cả tuổi thọ lẫn tiếng máy. Từ cấu tạo, bài mô tả quá trình mòn tự nhiên theo cây số: thành xy-lanh mòn thành hình oval, xéc-măng mòn mép, khoảng hở mở dần thành tiếng gõ khi máy nguội và khó nổ khi máy nóng; các nguyên nhân làm mòn nhanh ngoài chu kỳ: nhớt kém, nghèo xăng chạy lâu gây nóng, lọc gió hở hút bụi, hoặc nước vào máy. Phần cuối hướng dẫn cách nhận biết dấu hiệu mòn từ ngoài máy — máy thổi khói xanh, hao nhớt đều, máy yếu, tiếng kêu gõ khi nguội mất dần khi nóng — và cách kiểm tra chuẩn bằng đồng hồ đo áp suất nén, kèm những việc nên làm khi phát hiện sớm so với hậu quả của việc để muộn.',
  quickAnswer: 'Trả lời ngắn: piston là chi tiết trượt lên xuống trong xy-lanh, nhận lực cháy đẩy xuống truyền sang trục khuỷu; xy-lanh là ống chứa, thành trong nhẵn bóng để piston trượt với lớp dầu mỏng. Kín khí giữa hai chi tiết này nhờ các lá xéc-măng đàn hồi ép sát thành xy-lanh. Mòn diễn ra tự nhiên theo cây số: thành xy-lanh mở rộng và hơi oval, xéc-măng mòn mép, kết quả là khí lọt xuống các-te, nhớt lọt lên buồng đốt. Dấu hiệu nhận biết: máy thổi khói xanh đặc khi ga, hao nhớt đều đặn không thấy rò, máy yếu và khó nổ khi trời nóng, và tiếng gõ lỏng khi máy nguội mất dần khi máy nóng lên. Kiểm tra chuẩn là đo áp suất nén bằng đồng hồ: con số thấp hơn ngưỡng khuyến nghị của hãng, hoặc chênh lệch giữa hai xy-lanh trên xe hai xy-lanh, là bằng chứng mòn thật. Muốn mòn chậm: thay nhớt đúng loại và đúng chu kỳ, giữ lọc gió sạch, không chạy liên tục ga đầy, không để máy nghèo xăng chạy nóng. Khi đã mòn: sửa sớm bằng bộ chi tiết kích cỡ tăng cấp theo tiêu chuẩn sửa chữa của hãng, rẻ hơn nhiều so với để xy-lanh nứt hoặc piston bó chết giữa đường.',
  keyPoints: [
    'Piston nhận lực cháy, truyền qua thanh truyền sang trục khuỷu; xy-lanh là ống dẫn piston với thành trong bóng nhẵn.',
    'Xéc-măng ép sát thành xy-lanh giữ kín khí và gạt dầu; mòn xéc-măng là mòn nhanh nhất của cặp chi tiết này.',
    'Mòn tự nhiên: xy-lanh mở rộng và oval theo thời gian, khoảng hở piston mở dần thành tiếng gõ và hao nhớt.',
    'Dấu hiệu ngoài máy: khói xanh khi ga, hao nhớt không rò, máy yếu, gõ khi nguội mất dần khi nóng.',
    'Kiểm tra chuẩn là đo áp suất nén từng xy-lanh, so ngưỡng khuyến nghị của hãng.',
    'Nguyên nhân mòn nhanh: nhớt kém hoặc thiếu, lọc gió hở hút bụi, chạy nghèo xăng nóng máy, nước vào máy.',
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['piston', 'xy-lanh', 'xéc-măng', 'thanh truyền', 'áp suất nén', 'lọc gió'],
  keywords: ['piston xy-lanh xe máy', 'cấu tạo piston xe máy', 'dấu hiệu mòn xy-lanh', 'xéc-măng xe máy', 'đo áp suất nén', 'xe hao nhớt thổi khói'],
  sections: [
    {
      h2: 'Piston và xy-lanh làm việc thế nào trong động cơ',
      html: `<p>Động cơ xe máy chuyển hóa nhiệt thành chuyển động tại đúng cặp chi tiết này: hỗn hợp xăng gió được nén trong xy-lanh, bugi đốt, khí cháy dãn nở đẩy piston đi xuống, và piston truyền lực qua chốt piston và thanh truyền sang trục khuỷu, biến chuyển động thẳng thành chuyển động quay. Ở vòng tua cao, toàn bộ chu trình nạp – nén – cháy – xả diễn ra vài chục lần mỗi giây.</p>
<p>Điều đáng ngạc nhiên là piston không chạm xy-lanh. Giữa hai chi tiết luôn có một khoảng hở tính bằng phần trăm mi-li-mét, và trong khoảng hở đó là lớp dầu mỏng: piston trượt trên lớp dầu, không trượt trên kim loại. Các lá xéc-măng làm bằng thép đàn hồi ép sát thành xy-lanh giữ hai việc cùng lúc: giữ khí cháy không lọt xuống dưới, và gạt dầu thừa khỏi bám lên buồng đốt — chỉ chừa lại đúng lớp mỏng bôi trơn.</p>
<p>Toàn bộ sự sống của động cơ nằm ở ba lớp mỏng đó: lớp dầu giữa piston và xy-lanh, lớp kín của xéc-măng, và lớp dầu bôi trơn chốt piston. Thiếu bất kỳ lớp nào trong vài giây — hết nhớt, bó piston, đứt xéc-măng — động cơ dừng ngay và mang theo hỏng nặng; vì vậy mọi vấn đề nhớt đều là vấn đề của piston trước tiên.</p>`,
    },
    {
      h2: 'Cấu tạo chi tiết: thân piston, xéc-măng và chốt',
      html: `<p>Thân piston hình trụ ngắn, mặt trên phẳng hoặc lõm nhẹ tùy kiểu buồng cháy, chịu trực tiếp ngọn lửa cháy. Trên thành piston có hai ba rãnh để lắp xéc-măng: hai lá trên là xéc-măng khí, nhiệm vụ kín buồng đốt; lá dưới là xéc-măng dầu, nhiệm vụ gạt dầu thừa bôi lại thành xy-lanh. Mỗi lá xéc-măng có mép tiếp xúc mỏng, ép ra thành xy-lanh bằng độ đàn hồi riêng và bằng áp suất khí phía sau nó khi máy nén.</p>
<p>Chốt piston là ống thép cứng nối piston với đầu nhỏ của thanh truyền, cho phép thanh truyền lắc nhẹ qua lại khi trục khuỷu quay. Khe chốt và lỗ chốt khớp sát nhưng vẫn cần lớp dầu bôi trơn — đây là một trong những điểm ăn mòn đầu tiên khi máy chạy thiếu nhớt.</p>
<p>Xy-lanh là ống chứa, vật liệu nhôm rỗng có ủi thép lót hoặc thành mạ đặc biệt, bóng nhẵn tới độ soi mặt bằng phản chiếu được. Độ bóng đó không phải để đẹp: các vệt mịn giữ dầu bám trên thành, tạo lớp trượt. Khi thành xy-lanh bị xước — do bụi qua lọc gió, mạt kim loại lọt vào nhớt, hoặc chạy thiếu dầu — lớp trượt chết ngay, và xước chính là vết mòn tăng tốc của cả cụm.</p>`,
    },
    {
      h2: 'Mòn tự nhiên theo cây số: diễn ra như thế nào',
      html: `<p>Mòn là quy luật, không phải sự cố. Mỗi hành trình piston, các lá xéc-măng ép sát thành xy-lanh tại các vị trí chết trên và chết dưới, nơi hướng ép mạnh nhất; sau hàng chục nghìn cây số, thành xy-lanh mòn không đều — rộng hơn ở khu vực xéc-măng hoạt động, và hơi ô-van vì hướng đẩy của thanh truyền lệch nhẹ hai bên. Piston cũng mòn nhẹ thành dưới, còn rãnh xéc-măng mở rộng vì xéc-măng dậm lên rãnh mỗi vòng.</p>
<p>Hệ quả đầu tiên của mòn là kín khí giảm: một phần khí cháy lọt qua xéc-măng xuống các-te làm nhớt nhanh đen và loãng, một phần nhớt bốc lên buồng đốt cháy theo khí — biểu hiện là hao nhớt đều đặn dù không hề thấy vết rò, và thỉnh thoảng có làn khói xanh ra khỏi ống xả khi ga. Máy cũng yếu dần vì một phần áp suất nén mất qua khe hở.</p>
<p>Giai đoạn sau của mòn nghe được: tiếng gõ lỏng nhẹ khi máy nguội — piston và xy-lanh co giãn nhiệt khác nhau, khi nguội khe hở lớn hơn, tiếng gõ rõ; máy nóng lên, hai chi tiết giãn tới, tiếng gõ dịu. Coi đó là tín hiệu gần cuối: mòn đã tới mức cần đo kiểm, không phải mức để tiếp tục chạy chờ.</p>`,
    },
    {
      h2: 'Dấu hiệu nhận biết mòn từ ngoài máy',
      html: `<p>Bộ dấu hiệu kinh điển của mòn piston – xy-lanh gồm bốn biểu hiện. Một, hao nhớt đều đặn: bổ sung nhớt giữa hai chu kỳ thay mà không tìm thấy vết rò — nhớt đã lên buồng đốt cháy theo. Hai, khói xanh từ ống xả, rõ nhất khi ga lên hoặc khởi động sau khi đứng lâu — nhớt cháy trong buồng đốt tạo khói xanh khác khói trắng của nước và khói đen của xăng dư.</p>
<p>Ba, máy yếu và khó nổ: áp suất nén tụt làm mọi hành trình đốt kém hiệu quả — khởi động lâu hơn, lên ga đuối hơn so với thời mới. Bốn, tiếng gõ khi máy nguội như đã mô tả — và nếu để thêm, tiếng gõ chuyển thành tiếng gõ liên tục cả khi nóng, tức khe hở đã quá ngưỡng hoạt động bình thường.</p>
<p>Cách kiểm tra chuẩn là đo áp suất nén từng xy-lanh bằng đồng hồ đo nén vặn vào lỗ bugi: con số đọc được so với ngưỡng khuyến nghị trong sách hướng dẫn của hãng, và với xe hai xy-lanh trở lên, so chênh lệch giữa các xy-lanh với nhau — một xy-lanh tụt rõ so với xy-lanh kia là bằng chứng mòn cục bộ ngay cả khi cả hai vẫn trên ngưỡng chung. Thêm một cách kiểm tra phụ: nhỏ vài giọt nhớt vào xy-lanh rồi đo lại — nếu áp suất nhảy lên rõ, khe hở nằm ở xéc-măng và thành xy-lanh; nếu không nhảy, vấn đề ở xupap.</p>`,
    },
    {
      h2: 'Vì sao có những chiếc xe mòn nhanh hơn xe khác',
      html: `<p>Cùng một mẫu xe, có chiếc chạy trăm nghìn cây số chưa đại tu, có chiếc năm mươi nghìn đã khói xanh — khác biệt nằm ở bốn nguyên nhân tăng tốc mòn. Thứ nhất là nhớt: sai loại nhớt, chậm chu kỳ thay, hoặc chạy với lượng nhớt thấp thường xuyên — piston là chi tiết chết đầu tiên khi thiếu dầu, và mỗi lần máy sắp hết nhớt chạy thêm một quãng là một lần mài thành xy-lanh bằng chuyển động khô.</p>
<p>Thứ hai là bụi: lọc gió hở, hộp lọc không kín hoặc chạy đường bụi mà lọc đã bão hòa — bụi mịn lọt qua bám vào thành xy-lanh như giấy nhám, xẻ rãnh trên lớp mạ. Thứ ba là nhiệt: chạy ga đầy liên tục trên đường trường, chở nặng leo dốc dài, hoặc để chế độ hòa khí nghèo xăng — nghèo làm nhiệt cháy cao hơn chuẩn, piston giãn vượt khe hở, mép xéc-măng mất đàn hồi nhanh.</p>
<p>Thứ tư là nước và nhớt loãng: xe hay đi ngập nước vào máy, hoặc chỉ chạy những đoạn ngắn trong phố khiến máy không đạt nhiệt độ làm việc — nhớt loãng bởi xăng ngưng đọng, giảm khả năng tạo lớp dầu bám. Bốn nguyên nhân đó giải thích gần hết các ca mòn sớm; và cả bốn đều phòng được bằng thói quen: nhớt đúng chu kỳ, lọc sạch, không chạy nóng dai dẳng, và thỉnh thoảng chạy một quãng đủ dài cho máy đạt nhiệt làm việc thật.</p>`,
    },
    {
      h2: 'Khi phát hiện mòn: sửa sớm và sửa đúng',
      html: `<p>Khi các dấu hiệu và phép đo nén xác nhận mòn, đường sửa đúng là đại tu phần trên: tháo xy-lanh, đo kiểm độ mòn và độ ô-van bằng dụng cụ đo chuyên dụng, rồi chọn một trong hai lối — thay xy-lanh và piston bằng bộ chi tiết tăng cỡ theo các cấp sửa chữa của hãng nếu xy-lanh còn đủ dư lượng, hoặc thay xy-lanh lỏng mới cùng piston chuẩn nếu thành xy-lanh đã mòn qua cấp cuối. Xéc-măng luôn thay mới trong mọi trường hợp.</p>
<p>Việc sửa sớm và sửa trọn giữ được hai giá trị: chi phí giữ ở mức bộ chi tiết và công tháo lắp, và không để mòn lan — khí lọt xuống làm bạc thanh truyền và trục khuỷu mài mòn theo, biến một ca sửa phần trên thành đại tu cả cụm dưới. Để tới tiếng gõ liên tục rồi mới sửa, đơn giá tăng gấp nhiều lần vì phải xử thêm các chi tiết đã hỏng theo.</p>
<p>Sau khi đại tu phần trên, vận hành rà theo hướng dẫn: nghìn cây số đầu đổi nhớt sớm để thổi mạt rà, giữ ga vừa không lên vùng cao liên tục, và kiểm tra lại độ xiết sau khi chạy rà — một ca đại tu đúng kết thúc bằng máy đầm trở lại, hết hao nhớt, hết khói xanh, và áp suất nén về ngưỡng. Coi đó là cuộc đầu tư cuối cùng của cả cụm trong nhiều chục nghìn cây số kế tiếp, tùy việc giữ bốn thói quen phòng mòn đã nêu.</p>`,
    },
  ],
  checklist: [
    'Theo dõi mức nhớt giữa các chu kỳ: hao đều mà không thấy vết rò là dấu khí lọt lên buồng đốt.',
    'Để ý khói ống xả: khói xanh khi ga lên hoặc khởi động là dấu nhớt cháy trong buồng đốt.',
    'Máy yếu, khó nổ kéo dài hoặc gõ khi nguội mất dần khi nóng: đo áp suất nén từng xy-lanh.',
    'Giữ lọc gió sạch và kín: bụi lọt qua là giấy nhám mài thành xy-lanh.',
    'Thay nhớt đúng loại đúng chu kỳ, không chạy thiếu nhớt, không chạy nghèo xăng nóng máy dai dẳng.',
    'Khi đã mòn: đại tu phần trên đúng cấp sửa chữa của hãng, thay xéc-măng mới, rà đúng nghìn cây số đầu.',
  ],
  steps: [
    { title: 'Ghi nhận biểu hiện', detail: 'Ghi lại mức hao nhớt giữa chu kỳ, tần suất khói xanh, tiếng gõ khi nguội, và độ yếu máy — bốn dữ liệu cho thợ chẩn đoán nhanh.' },
    { title: 'Đo kiểm xác nhận', detail: 'Đo áp suất nén từng xy-lanh qua lỗ bugi, so ngưỡng hãng và chênh lệch giữa các xy-lanh; thử nhỏ nhớt đo lại để định vị khe hở.' },
    { title: 'Tháo và đo xy-lanh', detail: 'Tháo phần trên, đo độ mòn và độ ô-van thành xy-lanh, chọn cấp sửa chữa của hãng hoặc thay xy-lanh lỏng, piston và xéc-măng mới.' },
    { title: 'Rà và tái kiểm', detail: 'Nghìn cây số đầu đổi nhớt sớm thổi mạt rà, giữ ga vừa, xiết lại sau rà, đo nén lại xác nhận về ngưỡng.' },
  ],
  warnings: [
    'Không chạy tiếp khi máy gõ liên tục cả khi nóng: khe hở đã quá ngưỡng, mỗi cây số thêm là mài bạc thanh truyền và trục khuỷu.',
    'Không tự kéo xéc-măng loại bất kỳ về lắp: sai cỡ hoặc sai cấp xy-lanh là mất kín khí ngay sau khi lắp.',
    'Không pha nhớt tùy tiện theo lời khuyên truyền miệng: sai độ nhớt là piston chạy trên lớp dầu mỏng hơn thiết kế.',
  ],
  notes: [
    'Xe hay chỉ chạy đoạn ngắn trong phố nên thỉnh thoảng chạy một quãng dài: máy đạt nhiệt làm việc thật, bốc được xăng ngưng đọng làm loãng nhớt.',
    'Đại tu phần trên đúng cách không làm máy yếu đi: xy-lanh và piston mới chuẩn trả lại áp suất nén như xuất xưởng, miễn chạy rà đúng cách.',
  ],
  references: [
    'Cấu tạo piston, xéc-măng và quy trình đo áp suất nén là nội dung chuẩn của giáo trình động cơ đốt trong.',
    'Các cấp sửa chữa xy-lanh và quy trình rà sau đại tu tuân theo tài liệu kỹ thuật của nhà sản xuất từng dòng xe.',
  ],
  related: [
    'dong-co-2-thi-va-4-thi-khac-biet-co-ban',
    'xupap-xe-may-vai-tro-va-dau-hieu-can-chinh',
    'dau-nhot-xe-may-loai-chu-ky-va-cach-chon',
    'bugi-xe-may-chu-ky-thay-va-dau-hieu-hong',
  ],
};
