// AI WIKI TOTAL — bài hướng dẫn đi xe máy qua mặt đường cào bóc; nhận biết bằng quan sát, không nêu số liệu, thông số hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'di-xe-may-qua-mat-duong-dang-cao-boc-cho-tham-nhua-ranh-cao-lam-xe-lac-go-chenh-giua-lan-va-cach-doi-lan',
  title: 'Đi xe máy qua mặt đường đang cào bóc chờ thảm nhựa: rãnh cào làm xe lắc, gờ chênh giữa làn và cách đổi làn',
  seoTitle: 'Đi xe máy qua đường cào bóc: rãnh làm xe lắc, gờ chênh và đổi làn',
  metaDescription: 'Đường cào bóc chờ thảm nhựa có rãnh dọc làm xe máy lắc lái và gờ chênh giữa hai làn. Cách thả lỏng tay lái, giữ ga đều và đổi làn qua gờ ở góc lớn cho an toàn.',
  summary: 'Bài giải thích mặt đường đã cào bóc để chờ thảm nhựa trông ra sao và vì sao bánh trước lắc, tay lái như bị kéo qua lại. Nội dung nói về gờ chênh chạy dọc giữa phần đã cào và phần chưa cào, nơi bánh xe dễ bị trượt theo gờ, rồi hướng dẫn cách đi trên phần đã cào: giảm tốc từ trước, thả lỏng tay lái, giữ ga đều, nhìn xa và không phanh gấp. Bài cũng nêu cách đổi làn qua gờ ở góc lớn, cùng lưu ý khi trời mưa, ban đêm và gần máy thi công.',
  quickAnswer: 'Rãnh dọc trên mặt đường cào bóc làm lốp đi theo rãnh nên tay lái như bị kéo qua lại. Hãy giảm tốc từ trước, thả lỏng tay lái, giữ ga đều, nhìn xa và không phanh gấp. Gờ chênh dọc làn có thể kéo bánh trượt theo gờ, nên hạn chế đổi làn; nếu buộc phải đổi thì nhìn gương, bật xi nhan, giảm tốc và cắt qua gờ ở góc lớn, giữ xe thẳng.',
  keyPoints: [
    'Mặt đường cào bóc có nhiều rãnh dọc nhỏ cùng vụn nhựa và đá dăm rời; rãnh làm lốp đi theo rãnh nên bánh trước lắc và tay lái như bị kéo qua lại.',
    'Lốp nhỏ, lốp thiếu hơi, xe chở nặng hoặc có người ngồi sau thường cảm nhận rõ hơn và phản ứng chậm hơn khi bị kéo lệch.',
    'Trên phần đã cào, hãy giảm tốc từ trước, thả lỏng tay lái để bánh lắc nhẹ, giữ ga đều, nhìn xa, không phanh gấp và chừa khoảng cách rộng với xe phía trước.',
    'Gờ chênh dọc làn thấp nhưng có thể kéo bánh trượt theo gờ nếu lướt dọc ở góc hẹp; nên hạn chế đổi làn, nếu buộc phải đổi thì cắt qua gờ ở góc lớn và giữ xe thẳng.',
    'Mưa, ban đêm và gần máy thi công làm mọi rủi ro tăng lên: đi chậm hơn hẳn, làm theo người điều tiết và biển báo tạm, tránh xa vùng máy đang làm việc.'
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['cào bóc mặt đường', 'rãnh cào dọc', 'gờ chênh giữa làn', 'thảm nhựa', 'vụn nhựa và đá dăm', 'đổi làn'],
  keywords: ['đi xe máy qua đường đang cào bóc', 'mặt đường cào bóc chờ thảm nhựa', 'rãnh cào làm xe máy bị lắc lái', 'gờ chênh giữa hai làn đường đang sửa'],
  sections: [
    P('Mặt đường cào bóc trông thế nào và vì sao xe bị lắc', [
      'Cào bóc là công đoạn dùng máy bào đi lớp nhựa cũ trên mặt đường để lớp nhựa mới được thảm lên sau đó. Vì thế đoạn đường đang chờ thảm trông khác hẳn đường bình thường: màu xám sậm và nhám, nhìn gần thấy vô số đường sọc nhỏ chạy dọc theo hướng máy bào tiến, giống mặt lược hoặc mặt gỗ thô. Trên mặt còn có vụn nhựa, bụi mịn và đôi chỗ là đá dăm rời chưa được quét sạch. Điều khiến người đi xe máy bất ngờ là đoạn này thường xuất hiện đột ngột sau một khúc đường nhẵn, nhất là ở chỗ cua hoặc sau dốc cầu, lúc mắt còn mải nhìn xe phía trước. Dấu hiệu nhận ra sớm nhất thường là tiếng lốp rền khác thường và cảm giác tay bị rung tê nhẹ.',
      'Vì sao xe lắc? Những rãnh nhỏ ấy chạy song song với hướng xe đi, nên mép rãnh tạo ra một lực đẩy nhẹ theo chiều ngang lên bánh xe. Lốp có xu hướng trượt vào rãnh gần nhất, rồi bị mép rãnh bên kia đẩy ra, lặp đi lặp lại liên tục. Bánh trước truyền điều đó lên tay lái dưới dạng cảm giác bị kéo qua lại. Đây là hiện tượng lốp đi theo rãnh chứ chưa hẳn là xe mất lái. Cảm giác này mạnh nhất lúc bạn cố bẻ lái dứt khoát hoặc siết tay lái thật chặt để chống lại. Vụn nhựa và đá dăm rời làm tình hình xấu hơn vì chúng lăn dưới lốp, khiến độ bám lúc đổi hướng kém chắc chắn hơn so với mặt đường khô sạch.',
      'Mức lắc không giống nhau giữa các xe. Lốp nhỏ, lốp mỏng hoặc lốp thiếu hơi thường cảm nhận rõ hơn vì vệt tiếp xúc dễ bị rãnh dẫn đi; lốp đã mòn nhiều cũng có thể kém êm hơn, nhưng điều này tùy loại lốp và tùy xe. Xe chở nặng, xe có người ngồi sau hoặc đang mang hàng cồng kềnh phản ứng chậm hơn khi bị kéo lệch, nên cần chừa nhiều khoảng trống hơn để sửa hướng. Giảm xóc yếu hay vành bánh có vấn đề cũng có thể làm cảm giác lắc nặng thêm. Nếu qua khỏi đoạn cào mà đầu xe vẫn lắc, đó không còn là chuyện của mặt đường mà là dấu hiệu cần kiểm tra xe; phần phân biệt nằm trong bài về đầu xe lắc mạnh khi đang chạy.'
    ]),
    P('Gờ chênh giữa phần đã cào và phần chưa cào', [
      'Công trình sửa đường thường cào từng dải hoặc từng làn một, nên giữa phần đã cào và phần chưa cào, hoặc giữa phần đã cào và phần đã thảm lớp mới, xuất hiện một gờ chênh chạy dọc theo làn. Gờ này thường thấp, nhìn từ xa dễ tưởng chỉ là một vệt đổi màu của mặt đường. Nhưng với bánh xe máy nhỏ và hẹp, một bậc thấp cũng đủ làm bánh phản ứng, nhất là khi bậc nằm đúng vệt bánh. Bên cạnh gờ dọc còn có gờ ngang ở đầu và cuối đoạn cào, nơi mặt đường chuyển từ nhẵn sang sần. Chiều cao từng gờ khác nhau tùy công trình, nên đừng đoán bằng mắt rồi tự tin cắt qua; cách an toàn là coi mọi gờ chênh đều đáng được tôn trọng.',
      'Điều nguy hiểm của gờ dọc nằm ở góc tiếp cận. Bánh gặp bậc gần như vuông góc thì thường leo qua gọn, chỉ giật nhẹ. Bánh gặp bậc ở góc hẹp, tức xe chạy gần song song với gờ, lại có xu hướng bị gờ dẫn đi: thành lốp tì vào mép bậc, bánh trượt dọc theo gờ thay vì leo lên. Khi cuối cùng bánh vượt được, xe có thể bị giật chao sang một bên đúng lúc người lái đang nghiêng hoặc đang bẻ lái. Đây là kiểu ngã mà người lái thường kể là chưa kịp hiểu chuyện gì. Càng cố đổi hướng chậm rãi và nông, bánh càng kéo dài thời gian lướt dọc gờ, nên sự dứt khoát về góc quan trọng hơn là sự êm ái.',
      'Hãy tập nhận ra gờ từ xa. Vệt đổi màu giữa hai phần mặt đường, bóng đổ của bậc lúc nắng thấp, vụn nhựa và bụi dồn dọc chân gờ đều là manh mối. Sau khi cào, phần mặt đường quanh nắp hố ga bị hạ xuống, nên nắp có thể nhô lên khỏi mặt đường và trở thành một cái bẫy riêng; mặt kim loại ấy còn trơn khi ẩm, đã được bàn trong bài về tấm thép lót đường và nắp hố ga. Lề đường bị khoét hoặc bị hẫng sau khi sửa cũng là điều cần để mắt, và bài về lề đường bị hẫng nói riêng về cách leo lại mép. Nhìn xa hơn thường lệ là thói quen có ích nhất ở đoạn này.'
    ]),
    P('Cách đi trên phần mặt đường đã cào', [
      'Việc quan trọng nhất diễn ra trước khi bánh chạm vào mặt đường sần: giảm tốc từ xa. Hãy nhả ga và phanh nhẹ khi xe còn đi thẳng trên mặt nhẵn, bởi phanh mạnh giữa lúc bánh đã nằm trên vụn nhựa và rãnh dọc dễ làm bánh trượt hoặc làm xe chao. Giảm tốc sớm cũng cho bạn thời gian đọc đoạn đường: chỗ nào sần nhất, gờ nằm bên nào, có nắp hố ga hay đá dăm rời không. Mắt nên nhìn xa phía trước thay vì dán vào bánh trước, vì nhìn xuống chỉ làm bạn thấy rõ hơn cái lắc mà không giúp tránh được gì. Quyết định chọn vệt cần được đưa ra sớm, để khi vào đoạn sần bạn chỉ việc giữ hướng.',
      'Khi đã vào đoạn cào, hãy thả lỏng tay lái. Hai tay cầm vừa đủ chắc, khuỷu tay mềm, vai thả xuống, để bánh trước lắc nhẹ mà không gồng chống lại. Lực lắc là lực nhỏ nhưng liên tục; gồng cứng chỉ khiến nó truyền thẳng lên vai rồi dẫn tới những cú sửa lái quá tay, và cú sửa quá tay mới là thứ làm xe chao thật sự. Giữ ga đều: không vặn thêm ga để vượt cho nhanh, cũng không nhả ga đột ngột làm trọng tâm dồn về trước. Thân người nên thả lỏng, hai đầu gối ôm nhẹ thân xe để xe tự do lắc dưới người bạn. Tuyệt đối không phanh gấp; nếu buộc phải giảm tốc thêm, hãy bóp phanh từ từ khi xe đang thẳng.',
      'Xe phía trước cũng đang lắc, nên hãy giữ khoảng cách rộng hơn bình thường. Người đi trước có thể bất ngờ lệch vệt, giảm tốc hoặc làm văng vụn nhựa và đá dăm về phía sau. Khi chọn vệt, hãy tránh sát mép gờ và những chỗ vụn dồn thành đống; vệt hơi tách khỏi gờ thường êm và đoán được hơn. Sau khi ra khỏi đoạn cào, đừng vội vặn ga ngay vì đầu xe vừa bị kéo qua lại, cần một đoạn để lấy lại nhịp. Nếu xe vẫn có cảm giác bất thường, như tay lái nặng hay đầu xe còn lắc, hãy dừng ở chỗ an toàn, nhìn lốp bằng mắt rồi đưa thợ kiểm tra. Đoạn rải nhựa mới, đá dăm và khu vực xây dựng đã có bài riêng, nên bạn có thể đọc thêm.'
    ]),
    P('Đổi làn qua gờ chênh cho an toàn', [
      'Lựa chọn tốt nhất trên đoạn có gờ chênh là hạn chế đổi làn. Hãy chọn làn từ trước khi vào đoạn cào, dựa vào biển báo tạm và hướng dẫn của người điều tiết, rồi đi nguyên làn đó cho đến hết. Lý do rất đơn giản: đổi làn nghĩa là cắt ngang gờ giữa lúc xe đang lắc, mắt phải chia cho gương và cho xe bên cạnh, còn người lái thì không có nhiều dư địa để sửa. Việc cần đổi thường nên được làm trước đoạn cào, ở chỗ mặt đường còn nhẵn và đều. Nếu đã lỡ ở làn không muốn đi, hãy chấp nhận đi chậm hơn một chút thay vì cố chen sang bằng mọi giá, vì quyết định vội vã là gốc của nhiều cú ngã.',
      'Nếu buộc phải đổi làn, hãy làm theo thứ tự quen thuộc. Nhìn gương trước, liếc qua vai nếu xe của bạn có điểm mù, rồi bật xi nhan sớm để người phía sau hiểu ý. Giảm tốc từ trước, vì cắt gờ ở tốc độ cao thì cú giật mạnh hơn và thời gian phản ứng ngắn hơn. Chỉ đổi khi khoảng trống bên cạnh đủ rộng cho cả lúc bạn bị lắc nhẹ, chứ không phải chỗ vừa khít. Đừng đổi làn lúc đang phanh, đang ở khúc cua hay ngay sau chỗ xe phía trước vừa chao. Nếu xe sau bám sát hoặc xe bên cạnh không nhường, tốt hơn là bỏ ý định và đi tiếp theo làn hiện tại, để dành lần đổi sau ở nơi thoáng hơn.',
      'Kỹ thuật cốt lõi là cắt gờ ở góc lớn thay vì lướt dọc gờ. Hãy đưa xe thẳng, chọn một điểm trên làn bên kia, rồi đổi hướng đủ dứt khoát để bánh gặp gờ gần như vuông góc, chứ không bẻ lái nông kéo dài. Khi bánh trước qua gờ, giữ xe thẳng, tay lái thả lỏng, ga đều, không phanh và không nghiêng thêm; bánh sau sẽ qua gờ ngay sau đó, vẫn nên giữ nguyên nhịp ấy. Chỉ khi cả hai bánh đã nằm gọn trên làn mới, hãy chỉnh hướng để vào vệt. Nếu không đủ chỗ để tạo góc lớn, chẳng hạn vì xe khác kề sát, đừng đổi; việc nên làm là đi chậm lại và ở yên trong làn cho đến khi thoáng hơn.'
    ]),
    P('Khi trời mưa, ban đêm và gần máy thi công', [
      'Trời mưa làm đoạn đường cào bóc khó đoán hơn nhiều. Nước đọng trong các rãnh dọc, vụn nhựa trộn nước thành lớp bùn mỏng và trơn, còn gờ chênh bị nước che khuất nên khó thấy bằng mắt. Độ bám của lốp thường giảm hẳn, và vì rãnh vẫn kéo bánh đi theo hướng của nó, việc đổi hướng đột ngột trở nên khó kiểm soát. Hãy đi chậm hơn hẳn so với lúc đường khô, giữ khoảng cách xa hơn và tránh mọi thao tác dứt khoát ngoài mức cần thiết. Nếu có đường khác thoáng và nhẵn hơn thì nên cân nhắc đi đường đó, hoặc dừng ở chỗ an toàn chờ mưa bớt thay vì cố vượt đoạn cào lúc đường ướt nhiều.',
      'Ban đêm, nhiều dấu hiệu quen thuộc biến mất. Vạch sơn phân làn có thể đã bị cào mất, nên bạn không còn mốc để biết mình đang ở đâu trong làn. Mặt đường sậm màu và đồng đều dưới ánh đèn, khiến gờ chênh khó thấy hơn ban ngày. Thay vào đó, hãy dựa vào biển báo tạm, rào chắn, nón phản quang và đèn của khu thi công để đoán hướng đi, đồng thời giảm tốc nhiều hơn thường lệ. Nhìn xa, theo vệt của xe phía trước ở một khoảng cách an toàn, và để ý ánh phản quang trên biển báo, vì đó là thứ cho biết làn đường đã bị đổi hướng. Đừng dựa vào trí nhớ về con đường quen, vì sau một buổi chiều thi công nó có thể đã khác hẳn.',
      'Gần máy thi công, hãy làm theo người điều tiết và biển báo tạm, vì họ nhìn thấy toàn bộ khu vực còn bạn chỉ thấy một góc. Tránh xa vùng máy bào, xe tải và xe lu đang làm việc; chúng có thể lùi hoặc đổi hướng mà người lái ở trong cabin khó nhìn thấy xe máy. Bụi mù và vụn nhựa văng cũng che tầm nhìn, nên cần đi chậm và để ý người làm đường đứng sát mép. Xe chở nặng hoặc có người ngồi sau cần chậm hơn nữa, vì khó giữ thăng bằng và cần quãng dừng dài hơn. Với đoạn rải nhựa mới và đá dăm, khu vực xây dựng và nắp hố ga, hãy tham khảo các bài riêng đã có. Cảm thấy xe mất kiểm soát thì giảm tốc dần và dừng ở chỗ an toàn khi có thể.'
    ])
  ],
  checklist: [
    'Nhìn xa để nhận ra mặt đường sần, vệt sọc dọc, vụn nhựa và đổi màu mặt đường trước khi vào đoạn cào.',
    'Giảm tốc từ trước, khi xe còn thẳng trên mặt nhẵn, rồi mới vào đoạn đã cào.',
    'Thả lỏng tay lái và thân người, giữ ga đều, không phanh gấp trên rãnh hay vụn nhựa.',
    'Hạn chế đổi làn; nếu buộc phải đổi thì nhìn gương, bật xi nhan, giảm tốc và cắt gờ ở góc lớn.',
    'Đi chậm hơn hẳn khi mưa, ban đêm, gần máy thi công hoặc khi chở nặng, và làm theo người điều tiết.'
  ],
  steps: [
    { title: 'Nhìn xa và giảm tốc từ trước', detail: 'Nhận ra mặt đường sần, vệt sọc dọc và gờ chênh từ xa, nhả ga và phanh nhẹ khi xe còn thẳng trên mặt nhẵn.' },
    { title: 'Thả lỏng và giữ ga đều', detail: 'Cầm tay lái vừa đủ chắc, để bánh trước lắc nhẹ mà không gồng chống lại, giữ ga đều, không phanh gấp, chừa khoảng cách rộng với xe phía trước.' },
    { title: 'Hạn chế đổi làn qua gờ', detail: 'Chọn làn từ trước đoạn cào; nếu buộc phải đổi thì nhìn gương, bật xi nhan, giảm tốc và chờ khoảng trống đủ rộng.' },
    { title: 'Cắt gờ ở góc lớn và giữ xe thẳng', detail: 'Đổi hướng dứt khoát để bánh gặp gờ gần vuông góc, giữ xe thẳng, không phanh và không nghiêng thêm cho đến khi cả hai bánh đã qua.' }
  ],
  warnings: [
    'Không phanh gấp và không bẻ lái dứt khoát trên rãnh cào, vụn nhựa hay đá dăm rời; hãy giảm tốc từ trước và bóp phanh từ từ khi xe thẳng.',
    'Không lướt dọc gờ chênh ở góc hẹp và không đổi làn khi đang phanh, đang vào cua hay khi khoảng trống bên cạnh chưa đủ rộng.',
    'Mưa, ban đêm, gần máy thi công hoặc khi xe chở nặng cần đi chậm hơn hẳn; thấy xe mất kiểm soát hãy giảm tốc dần và dừng ở chỗ an toàn, qua khỏi đoạn cào mà đầu xe vẫn lắc thì đưa xe đi kiểm tra.'
  ],
  notes: [
    'Hình dạng rãnh, độ cao gờ chênh và cách bố trí làn khác nhau tùy từng công trình, nên bài chỉ nêu nguyên tắc chung; hãy ưu tiên biển báo tạm và hướng dẫn của người điều tiết tại chỗ.',
    'Mức độ lắc phụ thuộc loại lốp, tình trạng lốp, giảm xóc và tải trọng của xe; hãy đối chiếu với sách hướng dẫn của xe bạn và nhờ thợ kiểm tra nếu thấy xe có biểu hiện bất thường sau khi qua đoạn cào.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần lái xe an toàn và kiểm tra lốp',
    'Tài liệu hướng dẫn kỹ thuật lái xe máy an toàn trên đường có mặt đường không đồng đều'
  ],
  related: [
    'di-xe-may-qua-doan-rai-nhua-va-da-dam-luu-y',
    'di-xe-may-qua-khu-vuc-xay-dung-luu-y',
    'di-xe-may-qua-tam-thep-lot-duong-nap-ho-ga-va-khe-co-gian-mat-kim-loai-tron-go-va-khe-ho',
    'dau-xe-lac-manh-khi-dang-chay-nguyen-nhan-va-phan-xa',
    'le-duong-bi-hang-khi-di-xe-may-banh-truot-mep-be-tong-va-cach-leo-lai'
  ]
};
