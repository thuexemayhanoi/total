// AI WIKI TOTAL — S01098 (topic V2 T001117); khung bảng chi phí sở hữu xe máy ba năm, công thức viết bằng lời, không nêu số liệu, giá hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'chi-phi-so-huu-xe-may',
  title: 'Cách tự lập bảng chi phí sở hữu xe máy trong ba năm: các khoản mục và công thức tính',
  seoTitle: 'Chi phí sở hữu xe máy ba năm: tự lập bảng và công thức tính',
  metaDescription: 'Hướng dẫn tự lập bảng chi phí sở hữu xe máy trong ba năm: nhóm khoản mục, công thức viết bằng lời, cách lấy số liệu thật từ hóa đơn, đồng hồ km và so sánh hai xe.',
  summary: 'Bài hướng dẫn người đang cân nhắc giữa hai chiếc xe máy cách tự lập bảng chi phí sở hữu trong ba năm để biết xe nào thực sự rẻ khi dùng lâu dài: vì sao giá mua chỉ là một dòng trong bảng, các nhóm khoản mục từ nhiên liệu, bảo dưỡng, phụ tùng hao mòn, bảo hiểm, phí đăng ký đến giá trị bán lại, công thức tính viết bằng lời, cách lấy số liệu thật từ hóa đơn và đồng hồ km, rồi dùng cùng một bảng để so sánh hai phương án. Mọi ô do bạn tự điền.',
  quickAnswer: 'Giá mua chỉ là một dòng trong bảng chi phí sở hữu; xe nào rẻ khi dùng lâu chỉ lộ ra khi cộng đủ các dòng còn lại. Hãy lập bảng theo năm với các nhóm khoản mục như nhiên liệu, bảo dưỡng, phụ tùng hao mòn, bảo hiểm, giấy tờ, điền số từ hóa đơn và đồng hồ km của bạn, trừ giá trị bán lại ước tính, rồi chia cho số tháng hoặc số km. Dùng chung bảng cho hai xe.',
  keyPoints: [
    'Giá mua chỉ là một dòng trong bảng; nhiên liệu, bảo dưỡng, phụ tùng hao mòn, bảo hiểm và giấy tờ cộng dồn theo thời gian mới quyết định xe nào thực sự rẻ khi dùng lâu.',
    'Chia chi phí thành các nhóm khoản mục rõ ràng và ghi theo từng năm, để thấy khoản nào phát sinh đều đặn, khoản nào nhảy vọt vào một thời điểm.',
    'Mọi công thức chỉ gồm cộng, trừ, nhân và chia: tổng chi của nhóm chia cho số tháng sử dụng, hoặc chia cho số ki-lô-mét đã đi.',
    'Số liệu lấy từ hóa đơn, sao kê và ảnh đồng hồ km của chính bạn; ô nào chỉ là ước lượng thì đánh dấu riêng.',
    'Hai xe phải đi qua cùng một bảng, cùng thời gian và cùng quãng đường dự kiến; giá trị bán lại nên điền thành một khoảng thay vì một con số.'
  ],
  category: 'market',
  hub: 'chi-phi-su-dung',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['chi phí sở hữu xe máy', 'bảng chi phí', 'nhóm khoản mục', 'phụ tùng hao mòn', 'giá trị bán lại', 'đồng hồ km'],
  keywords: ['chi phí sở hữu xe máy', 'tính tổng chi phí nuôi xe máy', 'bảng chi phí xe máy theo năm', 'tự lập bảng chi phí xe máy'],
  sections: [
    P('Vì sao giá mua chỉ là một phần của chi phí sở hữu xe máy', [
      'Hai chiếc xe chênh nhau về giá mua chưa cho biết chiếc nào rẻ hơn sau vài năm dùng, vì giá mua chỉ là khoản đầu tiên trong một chuỗi khoản phải trả. Sau ngày nhận xe, bạn còn đổ nhiên liệu hoặc sạc điện đều đặn, đưa xe đi bảo dưỡng theo lịch, thay lốp, má phanh và bộ truyền động khi mòn, đóng bảo hiểm theo từng kỳ, nộp các khoản giấy tờ, trả tiền gửi xe và mua đồ đi kèm. Muốn tính tổng chi phí nuôi xe máy cho đúng, hãy cộng tất cả rồi trừ số tiền thu về khi bán xe; kết quả mới là chi phí sở hữu thực. Khoảng cách giá mua lúc đầu vì thế có thể bị thu hẹp, đảo ngược hoặc nới rộng bởi những khoản chi đến sau.',
      'Các khoản chi này không cùng một nhịp nên rất khó cộng nhẩm trong đầu. Có khoản trả một lần ở đầu, như giá mua và giấy tờ. Có khoản chạy theo quãng đường, như nhiên liệu, phụ tùng hao mòn và phần lớn bảo dưỡng. Có khoản chạy theo thời gian dù xe đi nhiều hay ít, như bảo hiểm và gửi xe. Cuối cùng là khoản thu về, tức giá bán lại. Người đi nhiều sẽ thấy nhóm theo quãng đường phình to, người ít đi lại thấy nhóm theo thời gian và phần mất giá chiếm chỗ. Vì vậy cùng một cặp xe có thể cho thứ tự khác nhau với hai người, và lời khuyên chung chung không thay được bảng của chính bạn.',
      'Ba năm là khoảng thời gian vừa phải để dựng khung: đủ dài để chu kỳ bảo dưỡng lặp lại, vài chi tiết hao mòn đến hạn thay và bảo hiểm được gia hạn nhiều lần, nhưng chưa xa đến mức quãng đường và giá bán lại chỉ còn là đoán mò. Định giữ xe lâu hơn hoặc ngắn hơn thì đổi số cột, công thức giữ nguyên. Bài về chọn xe theo nhu cầu đã gợi ý cách tính nhanh theo năm; ở đây cách tính ấy được mở rộng thành một bảng đầy đủ để bạn tự điền và đem so sánh. Vì giá nhiên liệu, phí dịch vụ và cách đi của mỗi người đều khác nhau, bài không đưa số mẫu nào: khung bảng là của bài, con số là của bạn.'
    ]),
    P('Các nhóm khoản mục nên có trong bảng chi phí', [
      'Phần đầu của bảng ghi những gì bạn bỏ ra để có xe và đưa xe vào sử dụng. Dòng mua xe lấy giá thực trả sau thương lượng, cộng đồ bảo hộ, khóa và phụ kiện mua ngay từ đầu; xe cũ thì thêm tiền nhờ thợ kiểm tra trước khi mua. Dòng phí đăng ký và giấy tờ gom lệ phí đăng ký hoặc sang tên cùng các thủ tục phát sinh về sau; với xe mới, từng khoản lăn bánh đã có bài bóc tách riêng. Mua trả góp thì phần chênh giữa tổng tiền trả theo hợp đồng và giá xe cũng là chi phí sở hữu, nên đưa vào dòng mua xe. Hai dòng này phần lớn dồn vào năm đầu nhưng chi phối mọi con số bình quân phía sau.',
      'Nhóm theo quãng đường gồm bốn dòng nên tách riêng. Nhiên liệu là tiền xăng hoặc tiền điện sạc; với xe điện, thêm khoản liên quan đến pin nếu có. Bảo dưỡng theo lịch là các lần đưa xe đi theo chu kỳ của nhà sản xuất, gồm vật tư, công thợ và những hạng mục tùy từng xe. Phụ tùng hao mòn gồm lốp, má phanh, bộ truyền động, ắc quy, bóng đèn, tức những thứ mòn dần rồi thay khi hết hạn dùng. Sửa chữa ngoài lịch là những lần xe hỏng hoặc va quệt, không nằm trong chu kỳ nào. Tách riêng giúp bạn thấy xe tốn tiền vì lịch bảo dưỡng, vì chi tiết mau mòn hay vì hỏng hóc; gộp chung thì một lần thay lốp cũng đủ làm lệch cả năm.',
      'Bảo hiểm thuộc nhóm theo thời gian, ghi theo phí từng kỳ, gồm cả loại theo quy định lẫn loại bạn tự chọn thêm. Cùng nhóm này là dòng gửi xe, rửa xe và đồ đi kèm như áo mưa hay khóa thay mới. Những khoản ấy nhỏ lẻ nên dễ bị bỏ quên, nhưng qua ba năm chúng cộng dồn thành một dòng cần có chỗ riêng trong bảng, nhất là khi bạn gửi xe theo tháng. Dòng cuối là giá trị bán lại: số tiền ước tính thu về khi bán xe ở cuối kỳ, sau khi trừ chi phí để bán nếu có. Đây là dòng duy nhất mang dấu trừ, và nó cho thấy phần mất giá thật thay vì coi toàn bộ giá mua là tiền mất.'
    ]),
    P('Công thức tính từng nhóm bằng dữ liệu của chính bạn', [
      'Các cột của bảng gồm từng năm, tổng ba năm, bình quân mỗi tháng, bình quân mỗi ki-lô-mét và một cột ghi nguồn số liệu; mỗi dòng chỉ cần ba phép tính. Tổng ba năm là phép cộng mọi khoản đã trả thuộc nhóm đó, còn các cột năm cho thấy khoản nào đều đặn, khoản nào dồn vào một thời điểm. Chi bình quân mỗi tháng bằng tổng chi của nhóm chia cho số tháng sử dụng. Chi bình quân mỗi ki-lô-mét bằng tổng chi chia cho quãng đường đã đi trong cùng khoảng thời gian, tức số đọc trên đồng hồ km lúc cuối kỳ trừ số đọc lúc đầu kỳ. Giữ nguyên ba phép tính này cho mọi dòng và cả hai xe thì các con số mới đứng cạnh nhau được.',
      'Với nhiên liệu, đổ đầy bình đến cùng một mức hai lần liên tiếp; lượng đổ lần sau chia cho quãng đường giữa hai lần là mức tiêu hao thực, nhân với đơn giá ra chi phí nhiên liệu mỗi ki-lô-mét. Với bảo dưỡng theo lịch, nếu chưa có hồ sơ, lấy quãng đường hoặc thời gian dự kiến chia cho chu kỳ trong sách hướng dẫn để ra số lần, rồi nhân với báo giá một lần. Với phụ tùng hao mòn, lấy giá thay gồm công chia cho quãng đường phụ tùng chạy giữa hai lần thay, rồi cộng lại. Công thức này thưởng cho việc dùng phụ tùng lâu hơn, nhưng với phanh và lốp thì an toàn đi trước bảng: phanh yếu hoặc lốp mòn tới vạch báo là lúc dừng đi xe, ra thợ.',
      'Các khoản theo thời gian tính đơn giản hơn: bảo hiểm bằng phí một kỳ nhân số kỳ trong ba năm, gửi xe bằng phí mỗi tháng nhân số tháng. Khoản trả một lần, như lệ phí đăng ký, được cộng vào tổng và có thể chia đều cho số tháng dự định giữ xe. Sau cùng, chi phí sở hữu ròng bằng khoản ban đầu (mua xe và giấy tờ) cộng tổng các nhóm vận hành trong ba năm rồi trừ giá trị bán lại. Chia số này cho số tháng ra chi phí mỗi tháng, chia cho quãng đường ra chi phí mỗi ki-lô-mét. Hiệu giữa giá mua và giá bán lại chính là phần mất giá; hình dạng đường mất giá theo tuổi xe đã có bài về khấu hao phân tích riêng.'
    ]),
    P('Thu thập số liệu thật từ hóa đơn và đồng hồ km', [
      'Mỗi số tiền trong bảng nên truy được về một chứng từ. Hóa đơn và phiếu dịch vụ là nguồn tốt nhất cho bảo dưỡng, phụ tùng và sửa chữa; hãy nhờ nơi làm ghi tách tiền phụ tùng với tiền công và chụp lại ngay khi nhận. Nhiên liệu ít khi được giữ hóa đơn, nên dùng sao kê ngân hàng hoặc ví điện tử và lọc các lần thanh toán tại nơi đổ nhiên liệu; trả tiền mặt thì ghi ngay sau mỗi lần đổ. Bảo hiểm, giấy tờ và hợp đồng trả góp đều có đơn hoặc biên lai riêng. Hãy gom mọi khoản vào một sổ ghi, mỗi dòng gồm ngày, số km, nhóm, nội dung, số tiền và nguồn, rồi để bảng tổng hợp lấy số từ sổ thay vì gõ lại bằng tay.',
      'Đồng hồ km là nguồn quãng đường dễ lấy nhất, nên hãy chụp nó mỗi lần đổ nhiên liệu, mỗi lần bảo dưỡng và vào ngày đầu của mỗi năm sử dụng; ảnh chụp thường lưu sẵn ngày giờ nên đỡ phải nhớ. Để tính mức tiêu hao, tắt máy khi đổ, đổ đầy bình đến cùng một mức, dừng khi vòi tự ngắt lần đầu, đặt xe ở cùng tư thế mỗi lần và không đổ tràn, vì xăng tràn vừa làm sai số vừa dễ bắt lửa. Hãy ghi chú mọi lần đồng hồ bị thay, hỏng hoặc tháo ra để khỏi cộng sai quãng đường. Một lần đổ nhiều hay ít chưa nói lên điều gì; chỉ mức bình quân qua nhiều lần mới đáng tin.',
      'Xe chưa mua thì chưa có hồ sơ, nên hãy thay bằng báo giá thật: giá một lần bảo dưỡng tại nơi bạn sẽ làm, giá lốp và má phanh đúng mẫu xe, báo giá bảo hiểm, chu kỳ ghi trong sách hướng dẫn. Mức tiêu hao do nhà sản xuất công bố được đo trong điều kiện chuẩn nên có thể khác cách đi của bạn; hỏi thêm người đang dùng đúng mẫu xe trong điều kiện gần giống bạn rồi ghi là ước lượng. Với xe cũ chưa có hồ sơ, số km hiển thị cần được đối chiếu với độ mòn thực tế. Ô nào thiếu chứng từ thì đánh dấu riêng, để khi đọc kết quả bạn biết phần nào chắc, phần nào chưa.'
    ]),
    P('Dùng cùng một bảng để so sánh hai phương án xe', [
      'Muốn so sánh công bằng, hai xe phải đi qua cùng một bảng với cùng khoảng thời gian, cùng quãng đường dự kiến và cùng cách tính ở mọi dòng. Quãng đường nên lấy từ đồng hồ km của chính bạn, không lấy mức trung bình nghe được. Phụ tùng vừa thay sát cuối kỳ chỉ tính phần đã dùng, kẻo xe thay đúng tháng cuối bị thiệt oan. Xe đang dùng thì điền từ hồ sơ, xe chưa mua thì điền từ báo giá, và nên ghi rõ khác biệt về độ chắc chắn đó. Đặt hai cột cạnh nhau và nhìn chênh lệch theo từng dòng chứ không chỉ ở dòng tổng, vì chênh lệch xuất phát từ nhiên liệu, từ phụ tùng hay từ phần mất giá sẽ dẫn đến những kết luận khác nhau.',
      'Hãy thử đổi vài giả định để xem thứ hạng có đảo không: quãng đường nhiều hoặc ít hơn dự kiến, giá trị bán lại ở khoảng thấp và khoảng cao, giá nhiên liệu cao hơn. Muốn biết xe có phần cố định cao hơn bắt đầu rẻ hơn từ quãng đường nào, gộp giá mua, giấy tờ, bảo hiểm, gửi xe rồi trừ giá bán lại thành phần cố định của mỗi xe; nhiên liệu, bảo dưỡng và phụ tùng gộp thành chi phí mỗi ki-lô-mét, tính gần đúng. Chênh lệch phần cố định chia cho chênh lệch chi phí mỗi ki-lô-mét là quãng đường hai xe có tổng chi bằng nhau, đem so với quãng đường dự kiến. Xe nào vừa cố định cao hơn vừa tốn hơn mỗi ki-lô-mét thì đắt hơn ở mọi quãng đường.',
      'Đừng để một con số quá chi tiết đánh lừa: khi chênh lệch giữa hai xe nhỏ hơn mức bất định của các ô ước lượng, hãy coi hai xe ngang nhau về tiền và để những điều bảng không đo được quyết định, như cảm giác khi lái thử, tư thế ngồi, chỗ để xe, bảo hành và độ gần của nơi bảo dưỡng. Sau mỗi năm dùng xe, điền số thực vào bảng dự toán rồi xem dòng nào lệch nhiều nhất; chính những chỗ lệch ấy cho biết cần ghi chép kỹ hơn ở đâu, và lần chọn xe sau của bạn sẽ dựa trên dữ liệu riêng thay vì ước đoán.'
    ])
  ],
  checklist: [
    'Chọn khoảng thời gian tính, ví dụ ba năm hoặc thời gian bạn dự định giữ xe, rồi lập dòng cho từng nhóm khoản mục và cột cho từng năm.',
    'Chụp đồng hồ km cùng lúc với mỗi lần đổ nhiên liệu và mỗi lần bảo dưỡng để có quãng đường thật.',
    'Ghi riêng bảo dưỡng theo lịch, phụ tùng hao mòn và sửa chữa ngoài lịch, không gộp chung vào một dòng.',
    'Đánh dấu ô nào là số lấy từ chứng từ, ô nào lấy từ báo giá, ô nào chỉ là ước lượng.',
    'Điền giá trị bán lại thành khoảng thấp và khoảng cao, rồi chạy bảng cho cả hai xe với cùng quãng đường dự kiến.'
  ],
  steps: [
    { title: 'Dựng khung bảng', detail: 'Lập các dòng nhóm khoản mục và các cột gồm từng năm, tổng ba năm, bình quân mỗi tháng, bình quân mỗi ki-lô-mét và nguồn số liệu.' },
    { title: 'Thu thập số liệu thật', detail: 'Gom hóa đơn, sao kê, đơn bảo hiểm và ảnh đồng hồ km; với xe chưa mua thì xin báo giá và đọc chu kỳ trong sách hướng dẫn.' },
    { title: 'Tính theo công thức', detail: 'Cộng từng nhóm, chia cho số tháng và số km, cộng khoản ban đầu rồi trừ giá trị bán lại để ra chi phí sở hữu ròng.' },
    { title: 'So sánh và thử giả định', detail: 'Đặt hai xe cạnh nhau, tìm dòng tạo ra chênh lệch, rồi đổi quãng đường và giá trị bán lại để xem thứ hạng có đảo không.' }
  ],
  warnings: [
    'Không kéo dài tuổi thọ lốp, má phanh hay chi tiết an toàn để bảng đẹp hơn; phanh yếu, lốp mòn tới vạch báo hoặc có tiếng động lạ thì dừng đi xe và ra thợ có chuyên môn.',
    'Không điền số nghe được hay số công bố vào ô như thể đó là số thật; những con số ấy chỉ nên là ước lượng được đánh dấu rõ.',
    'Bảng chỉ đo tiền; an toàn, độ tin cậy, sự tiện dụng và nơi bảo dưỡng gần nhà cần được cân nhắc bằng những công cụ khác trước khi quyết định.'
  ],
  notes: [
    'Bài giới thiệu khung bảng và công thức, không đưa mức giá hay số liệu mẫu nào vì chi phí phụ thuộc nơi ở, thời điểm, mẫu xe và cách đi của từng người.',
    'Điều khoản bảo hiểm, lệ phí và thủ tục giấy tờ do cơ quan và đơn vị liên quan quy định; hãy hỏi trực tiếp nơi đó thay vì suy từ bảng này.'
  ],
  references: [
    'Sách hướng dẫn sử dụng và lịch bảo dưỡng của nhà sản xuất cho đúng đời xe',
    'Hóa đơn, phiếu bảo dưỡng, đơn bảo hiểm, biên lai giấy tờ và sao kê do chính bạn lưu giữ'
  ],
  related: ['chon-xe-theo-nhu-cau', 'chi-phi-lan-banh-xe-may-moi-gom-nhung-gi', 'khau-hao-xe-may-theo-thoi-gian', 'xe-cu-bi-chinh-cong-to-met', 'chi-phi-phat-sinh-sau-khi-mua-xe-cu']
};
