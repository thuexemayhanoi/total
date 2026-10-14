// AI WIKI TOTAL — S01666; ứng xử khi gặp đoàn xe chở hàng to rộng có xe dẫn đường, chỉ mô tả hành vi, không nêu con số hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'gap-xe-cho-hang-to-rong-chiem-ca-lan-co-xe-dan-duong-va-den-vang-quay-nhuong-giu-xa-va-cho-cho-rong-moi-vuot',
  title: 'Gặp xe chở hàng to rộng chiếm cả làn có xe dẫn đường và đèn vàng quay: nhường, giữ xa và chờ chỗ rộng mới vượt',
  seoTitle: 'Gặp xe chở hàng to rộng có xe dẫn đường: nhường, giữ xa, khi nào vượt',
  metaDescription: 'Gặp xe chở hàng to rộng có xe dẫn đường và đèn vàng quay: cách đọc tín hiệu, nhường đường, giữ xa, không chen giữa đoàn và chỉ vượt khi đủ chỗ rộng.',
  summary: 'Bài giải thích vì sao đoàn xe chở hàng to rộng có xe dẫn đường khác hẳn xe tải thông thường: thân xe và hàng có thể rộng hơn làn, tầm nhìn người lái hẹp, quay vòng rộng, tăng tốc và dừng đều chậm. Nội dung hướng dẫn đọc đèn vàng quay và hiệu lệnh của người ra hiệu, nhường đường, không chen vào khoảng giữa các xe trong đoàn, giữ khoảng xa khi đi sau, cân nhắc vượt hoặc không vượt, rồi ứng xử khi gặp đoàn ngược chiều, ở ngã tư hay ban đêm.',
  quickAnswer: 'Gặp xe chở hàng to rộng có xe dẫn đường và đèn vàng quay, hãy giảm tốc từ xa, nhường đường và làm theo hiệu lệnh của người hướng dẫn tại chỗ. Không chen vào khoảng giữa các xe trong đoàn; đi sau thì giữ khoảng rộng để còn nhìn thấy đèn và người ra hiệu. Chỉ cân nhắc vượt ở đoạn thẳng, rộng, nhìn xa, không có xe ngược chiều; chưa chắc thì đi sau chờ đoàn rẽ hoặc dừng.',
  keyPoints: [
    'Đoàn xe chở hàng to rộng khác xe tải thường: thân xe và hàng có thể rộng hơn làn, tầm nhìn người lái hẹp, quay vòng rộng ở ngã rẽ, tăng tốc và dừng đều chậm.',
    'Đèn vàng quay trên xe dẫn đường và xe đi sau là lời báo có xe đặc biệt, không phải lời mời vượt; điều cần làm theo là hiệu lệnh của người cầm cờ hoặc đèn hướng dẫn tại chỗ.',
    'Không chen vào khoảng giữa các xe trong đoàn và không chạy song song với phần hàng nhô ra; khoảng giữa là chỗ để họ phối hợp, không phải lối đi cho xe máy.',
    'Đi sau thì giữ khoảng rộng để nhìn thấy đèn và người ra hiệu; chỉ cân nhắc vượt ở đoạn thẳng, rộng, nhìn xa, không có xe ngược chiều, còn chưa chắc thì đi sau chờ đoàn rẽ hoặc dừng.',
    'Gặp đoàn ngược chiều, ở ngã tư hay ban đêm thì giảm tốc sớm, dừng hẳn ở chỗ vững chắc nếu họ lấn làn, đứng xa chỗ quay vòng và đợi cả xe đi sau qua hết.'
  ],
  category: 'ride',
  hub: 'lai-xe-duong-dai',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['xe chở hàng to rộng', 'xe dẫn đường', 'đèn vàng quay', 'người ra hiệu tại chỗ', 'tầm nhìn của người lái', 'khoảng cách an toàn'],
  keywords: ['gặp xe chở hàng to rộng có xe dẫn đường', 'xe chở máy móc lớn chiếm cả làn', 'đèn vàng quay trên xe dẫn đường', 'vượt xe chở hàng rất rộng khi đi xe máy'],
  sections: [
    P('Vì sao đoàn xe chở hàng to rộng khác hẳn xe tải thông thường', [
      'Trên quốc lộ hay đoạn đường ven khu công nghiệp, đôi khi bạn gặp xe chở hàng to rộng có xe dẫn đường: máy móc hoặc cấu kiện cồng kềnh chiếm gần hết làn, xe chạy rất chậm. Phía trước và phía sau có xe bật đèn vàng quay, thỉnh thoảng còn có người cầm cờ hoặc đèn đứng ra hiệu. Câu hỏi bật ra ngay là phải dừng hay đi tiếp. Câu trả lời ngắn gọn: giảm tốc từ xa, nhường đường, giữ khoảng cách lớn và làm theo người hướng dẫn tại chỗ, không chen vào giữa đoàn, chỉ vượt khi chỗ rộng, thoáng và nhìn được xa. Đoàn xe này vận hành khác hẳn một xe tải thông thường, nên phản xạ quen thuộc của người đi xe máy thường không còn đúng.',
      'Điểm khác đầu tiên là hình học. Xe tải thông thường nằm gọn trong làn nên bạn còn tính được chỗ hở hai bên để tránh hay vượt. Xe chở hàng to rộng thì thân xe hoặc phần hàng có thể rộng hơn cả làn, tức là chẳng còn khoảng hở nào để tính. Qua đoạn hẹp, đoàn có thể phải lấn sang làn ngược chiều hoặc ra sát lề; ở ngã rẽ, họ quay vòng rất rộng và quét qua cả phần đường bạn tưởng là an toàn. Hàng còn có thể nhô ra hai bên, vươn lên phía trên, nên mép thật sự của đoàn thường xa hơn những gì mắt thấy từ phía sau. Hãy coi cả bề ngang mặt đường quanh đoàn là vùng họ có thể cần dùng đến, không chỉ phần giữa làn.',
      'Điểm khác thứ hai là tầm nhìn và khả năng đáp ứng. Hàng chất cao hoặc rộng có thể che gần hết tầm nhìn qua gương, người lái chỉ thấy một dải hẹp phía trước và gần như không thấy bên hông hay phía sau. Họ phải dựa vào xe dẫn đường và người ra hiệu để biết đường đang ra sao, nên chiếc xe máy len sát hông rất dễ nằm trong vùng khuất. Xe nặng và cồng kềnh cũng khởi động, tăng tốc và dừng đều chậm, khó tránh gấp hay phanh gấp để nhường bạn. Đoàn chạy chậm không phải vì cố tình cản đường mà vì đó là nhịp họ kiểm soát được. Bên nhỏ gọn và linh hoạt hơn là bạn, nên chính bạn phải là người chủ động điều chỉnh.'
    ]),
    P('Đọc tín hiệu của xe dẫn đường và xe đi sau', [
      'Đèn vàng quay trên xe dẫn đường và xe đi sau trước hết là lời báo: ở đoạn đường này đang có xe đặc biệt di chuyển. Nó không phải lệnh cho bạn đi tiếp hay vượt, cũng không có nghĩa là phần đường bên cạnh đã được dọn sẵn cho bạn. Bạn thường thấy ánh đèn quay trước khi thấy xe chính, nhất là khi đoàn còn khuất sau khúc cua hay đỉnh dốc, nên vừa thấy đèn từ xa là phải nhả ga và nhìn kỹ hơn, đừng chờ tới khi thấy cả đoàn mới phản ứng. Ban đêm hay lúc trời mù bụi, ánh đèn quay thường dễ nhận ra hơn hình dáng chiếc xe. Khoảng thời gian báo trước ấy đủ để bóp phanh nhẹ, nhìn gương và chọn chỗ nhường.',
      'Người cầm cờ hoặc đèn đứng ra hiệu thường là đôi mắt của đoàn ở chỗ hẹp, ngã rẽ hay đoạn cần chặn bớt xe. Hiệu lệnh của họ đáng tin hơn nhận định của bạn: họ thấy phần hàng sắp quét qua đâu, còn bạn chỉ thấy mặt đường trước mũi xe. Họ có thể ra hiệu để bạn chậm lại, dừng, tấp vào lề, chờ hoặc đi tiếp, và nghĩa cụ thể tùy cử chỉ lẫn hoàn cảnh lúc đó. Cứ làm đúng điều được ra hiệu, kể cả khi mặt đường phía trước có vẻ vắng. Cử chỉ chưa rõ thì chọn phương án an toàn nhất: giảm tốc, dừng hẳn ở chỗ chắc chắn và chờ họ ra hiệu lại. Đừng cố đi tiếp trái hiệu lệnh, cũng đừng lách sát người đang đứng giữa đường.',
      'Xe dẫn đường và xe đi sau thường đảm nhiệm hai việc khác nhau. Xe dẫn đường báo cho người ngược chiều và người ở ngã tư biết có đoàn sắp tới, đồng thời dò đường cho xe chính; xe đi sau báo cho những xe đang tiến lên từ phía sau. Thấy xe đi sau bật đèn vàng quay, bạn thường hiểu mình đang ở đuôi đoàn, còn xe chính và xe dẫn đường nằm phía trước; vượt xe đi sau mới chỉ qua một phần nhỏ của đoàn. Tài xế khác vẫy tay mời vượt cũng không thay được việc bạn tự quan sát, và bài về tín hiệu mời vượt của xe tải, xe khách đã nói kỹ lý do. Điều bạn cần làm theo là hiệu lệnh của người hướng dẫn tại chỗ.'
    ]),
    P('Không chen vào giữa đoàn, và đi sau thì giữ khoảng xa', [
      'Khoảng trống giữa xe dẫn đường, xe chính và xe đi sau trông như lối đi rộng rãi, nhưng đó là chỗ làm việc của đoàn. Người lái xe chính nhìn qua một dải hẹp, người ra hiệu cần thấy rõ từng xe, và các xe giữ khoảng với nhau để kịp phối hợp khi dừng, nhường hay quay vòng. Chiếc xe máy chui vào đó trở thành vật cản không ai báo trước: người lái có thể không thấy bạn, người ra hiệu khó điều phối, còn khoảng trống có thể khép lại bất cứ lúc nào khi xe chính phanh hoặc bẻ lái. Lách giữa xe dẫn đường và xe chính để lên trước cũng nguy hiểm không kém, vì lúc ấy bạn nằm ngay trên đường quét của phần hàng nhô sang bên.',
      'Sức hút của khoảng trống mạnh nhất ở ngã tư hay đoạn đông xe, khi dòng xe phía sau bị dồn lại và ai cũng muốn thoát cảnh chạy chậm. Đó là lúc nên nhắc mình ba điều không làm. Không chui vào giữa các xe trong đoàn. Không chạy song song với phần hàng, vì mép hàng nhô ra, có thể rung lắc theo mặt đường và che mất tầm nhìn của bạn. Không bám sát đuôi xe đi sau để đi nhờ qua chỗ vắng, vì nếu nó dừng bất ngờ hay đổi hướng, bạn không còn đường thoát. Người đi xe máy hay nghĩ mình nhỏ nên lách được; với đoàn xe này, chính vì nhỏ nên bạn dễ bị bỏ sót, và hậu quả của việc bị bỏ sót nặng hơn bình thường.',
      'Đi sau phải giữ khoảng rộng hơn thói quen thường ngày, và lý do không chỉ nằm ở chuyện phanh. Khoảng rộng giúp bạn nhìn được đèn vàng quay, người ra hiệu và có thể cả xe dẫn đường phía trước; bám sát đuôi xe đi sau hay phần hàng thì tầm nhìn bị che, bạn chỉ biết đoàn dừng khi đèn phanh đã sáng. Nó còn cho bạn thời gian phản ứng khi đoàn đột ngột dừng, nhường đường hay đổi hướng. Bao nhiêu là đủ còn tùy xe, tốc độ và mặt đường, nên hãy chọn khoảng thừa thay vì vừa đủ. Phanh xe bạn mà có dấu hiệu yếu, mềm hoặc kêu lạ thì đừng đi gần đoàn; hãy dừng chạy và đưa xe ra thợ có chuyên môn kiểm tra.'
    ]),
    P('Chờ chỗ rộng mới vượt, hoặc không vượt', [
      'Mặc định tốt nhất là không vượt. Vượt một đoàn như vậy khác hẳn vượt một xe tải: bạn phải đi qua xe đi sau, xe chính với phần hàng rộng, rồi cả xe dẫn đường, nghĩa là ở bên làn ngược chiều lâu hơn nhiều và mỗi chặng lại có một điểm mù riêng. Thời gian bạn rút ngắn được lại rất ít: sớm muộn đoàn cũng rẽ khỏi đường, dừng lại hoặc tới đoạn rộng hơn, và khi ấy mọi việc nhẹ nhàng hơn nhiều. Đoàn còn có thể lấn sang đúng làn bạn đang dùng để vượt, khi ấy bạn bị kẹp giữa phần hàng và dòng xe ngược chiều. Chờ thêm một lúc gần như luôn ít rủi ro hơn một cú vượt dài.',
      'Chỗ rộng đáng để cân nhắc vượt phải hội đủ mọi điều kiện cùng lúc. Đó là đoạn đường thẳng, mặt đường rộng, tầm nhìn thoáng tới tận xe dẫn đường và còn dư xa phía sau nó. Phía trước không có xe ngược chiều, đường nhánh, ngã rẽ hay cầu hẹp; người ra hiệu không bảo bạn chờ; bên định vượt không có phần hàng nhô ra chắn lối. Thiếu một điều là bỏ ý định. Cũng đừng coi chỗ đoàn vừa tránh sang một bên là chỗ rộng dành cho mình, vì khoảng hở đó để đoàn quay vòng, không phải để người khác chen qua. Đủ điều kiện rồi vẫn nhìn lại một lượt trước khi ra khỏi làn, vì đoạn đường vừa trống có thể có xe ngược chiều xuất hiện.',
      'Chưa chắc thì cứ đi sau, giữ khoảng rộng và chờ đoàn rẽ, dừng hay tách ra. Áp lực chủ yếu đến từ phía sau: còi giục, xe khác chen sang trái, hay chính sự nóng ruột của bạn. Những người đó không nhìn thấy điều bạn nhìn thấy và cũng không chịu hậu quả thay bạn. Nếu cuối cùng bạn vẫn quyết định vượt, hãy làm gọn, chỉ quay về làn khi đã cách xe dẫn đường một khoảng thừa, đừng cắt ngang mũi nó. Đoàn chở hàng rộng còn có nhiều điểm chung với xe kéo xe hỏng và xe chở sắt thép, ống nhô ra phía sau; các bài riêng về hai loại xe này nói thêm về dây kéo, phần hàng nhô và chỗ không nên vượt.'
    ]),
    P('Gặp đoàn khi đi ngược chiều, ở ngã tư và vào ban đêm', [
      'Gặp đoàn đi ngược chiều, bạn thường thấy xe dẫn đường xuất hiện trước, đó là tín hiệu để giảm tốc ngay, chưa cần chờ thấy xe chính. Hãy đi về phía mép phải của làn mình nếu mặt đường tốt, giữ hướng ổn định và quan sát thân xe cùng phần hàng đang chiếm bao nhiêu phần đường, nhất là ở khúc cua hay đoạn hẹp, nơi đoàn dễ lấn qua vạch giữa. Nếu họ lấn sang làn của bạn, đừng cố giữ đường theo thói quen: hãy dừng hẳn ở chỗ vững chắc, bóp phanh giữ xe và chờ họ qua. Đừng tìm cách chui qua khe giữa phần hàng và mép đường, vì phần nhô ra hai bên hay phía trên có thể quét trúng người và tay lái bạn.',
      'Ở ngã tư hay chỗ giao nhau, đoàn thường cần rất nhiều chỗ để quay vòng, nên người ra hiệu có thể chặn xe từ nhiều hướng cùng lúc. Hãy dừng sớm và cách xa chỗ giao nhau hơn thường lệ, đủ xa để phần hàng quét qua không chạm tới bạn. Đừng bắt đầu đi chỉ vì xe chính đã đi qua trước mặt: xe đi sau còn đó, phần đuôi hàng vẫn đang vẽ một đường cong rộng và người ra hiệu chưa cho đi. Đèn giao thông đang cho phép đi cũng không phải lý do để vào giao lộ khi đoàn còn dàn ngang. Khi đoàn quay đầu hoặc rẽ gấp, phần hàng nhô ra có thể xoay qua chỗ vừa trống, nên càng đứng xa càng an toàn.',
      'Ban đêm là lúc khó đoán nhất. Bạn thấy đèn xe và ánh đèn vàng quay, nhưng rất khó biết phần hàng nhô ra tới đâu, nhất là khi mép hàng ít đèn hay vật phản quang; đừng suy bề ngang thật của đoàn từ vị trí hai đèn pha. Ánh đèn chiếu thẳng vào mắt còn làm bạn khó nhìn người ra hiệu và mép đường. Giảm tốc từ rất sớm, dùng đèn chiếu gần, giữ khoảng rộng hơn ban ngày và chọn chỗ dừng bằng phẳng, tránh xa mép đường mềm, để đoàn đi qua trọn vẹn. Mưa, sương hay bụi càng khiến mọi việc khó hơn. Mệt, mắt mờ hoặc đèn xe yếu là lý do để tấp vào nơi an toàn nghỉ, chứ không phải để cố đi tiếp sát đoàn.'
    ])
  ],
  checklist: [
    'Thấy đèn vàng quay hoặc xe dẫn đường từ xa thì nhả ga, nhìn gương và chọn sẵn chỗ nhường.',
    'Làm theo hiệu lệnh của người cầm cờ hoặc đèn tại chỗ; cử chỉ chưa rõ thì giảm tốc và dừng hẳn ở chỗ vững chắc.',
    'Không chui vào khoảng giữa các xe trong đoàn, không chạy song song với phần hàng nhô ra.',
    'Đi sau ở khoảng rộng để nhìn thấy đèn và người ra hiệu; chưa chắc về đường phía trước thì không vượt.',
    'Ở ngã tư, chỗ quay đầu hay ban đêm, dừng sớm và đứng xa, chờ cả xe đi sau qua hết rồi mới chạy.'
  ],
  steps: [
    { title: 'Giảm tốc ngay khi thấy đèn vàng quay', detail: 'Nhả ga, nhìn gương, bóp phanh nhẹ và tìm chỗ nhường thay vì chờ tới khi thấy cả đoàn mới phản ứng.' },
    { title: 'Làm theo người hướng dẫn tại chỗ', detail: 'Chậm lại, dừng, tấp vào lề hay chờ đúng như cử chỉ của người cầm cờ hoặc đèn; chưa rõ thì chọn phương án an toàn nhất.' },
    { title: 'Giữ xa, không chen vào giữa đoàn', detail: 'Đi sau ở khoảng rộng để thấy đèn và người ra hiệu; không lách giữa các xe, không chạy song song với phần hàng.' },
    { title: 'Chỉ vượt khi đủ chỗ rộng, nhìn xa', detail: 'Đoạn thẳng, thoáng, không có xe ngược chiều và người ra hiệu không bảo chờ; thiếu một điều kiện thì đi sau, chờ đoàn rẽ hoặc dừng.' }
  ],
  warnings: [
    'Không chen vào khoảng giữa các xe trong đoàn và không lách giữa xe dẫn đường với xe chính: khoảng trống có thể khép lại bất cứ lúc nào, và người lái xe chính có thể không nhìn thấy bạn.',
    'Không đi sát mép phần hàng nhô ra hai bên hay phía trên, kể cả khi đoàn đứng yên hoặc chạy rất chậm; gặp đoàn lấn sang làn của mình thì dừng hẳn ở chỗ vững chắc.',
    'Phanh yếu, mềm hoặc kêu lạ, đèn xe mờ là lý do để dừng chạy và đưa xe ra thợ có chuyên môn kiểm tra; người mệt, mắt mờ cũng nên tấp vào nơi an toàn nghỉ, đừng đi gần đoàn trong tình trạng đó.'
  ],
  notes: [
    'Bài chỉ mô tả cách ứng xử của người đi xe máy khi gặp đoàn xe chở hàng to rộng; cử chỉ và tín hiệu của người hướng dẫn có thể khác nhau tùy tình huống, nên hãy quan sát kỹ và chọn phương án an toàn hơn.',
    'Khả năng phanh, độ nhạy của tay phanh và cách xe đáp ứng khi giảm tốc khác nhau tùy xe; hãy đối chiếu với sách hướng dẫn của xe bạn hoặc hỏi thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần phanh, đèn và cách đi xe an toàn',
    'Tài liệu hướng dẫn lái xe an toàn dành cho người đi xe máy trên đường dài'
  ],
  related: ['gap-may-gat-xe-cong-nong-va-may-cay-keo-ro-mooc-tren-duong-que-mua-vu-doc-huong-re-khi-khong-co-xi-nhan-va-luc-nao-moi-vuot', 'xe-tai-xe-khach-bat-xi-nhan-hay-vay-tay-moi-vuot-vi-sao-xe-may-khong-nen-vuot-theo-tin-hieu-cua-nguoi-khac', 'di-gan-xe-dang-keo-hay-cho-xe-hong-day-keo-xe-bi-keo-lac-va-cho-khong-nen-vuot', 'di-gan-xe-cho-sat-thep-ong-hay-cay-dai-nho-ra-giu-khoang-cach-va-tranh-phan-nho', 'di-xe-may-sau-xe-tai-khoang-cach-va-tam-nhin']
};
