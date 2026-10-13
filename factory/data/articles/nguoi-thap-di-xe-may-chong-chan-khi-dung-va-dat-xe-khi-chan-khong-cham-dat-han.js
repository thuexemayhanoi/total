// AI WIKI TOTAL — kỹ thuật dừng, khởi hành và dắt xe cho người có vóc dáng nhỏ; không số liệu, không tên hãng hay mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'nguoi-thap-di-xe-may-chong-chan-khi-dung-va-dat-xe-khi-chan-khong-cham-dat-han',
  title: 'Người thấp đi xe máy: chống chân khi dừng, chọn chỗ dừng và dắt xe khi chân không chạm đất hẳn',
  seoTitle: 'Người thấp đi xe máy: cách dừng, chống chân và dắt xe cho vững',
  metaDescription: 'Chân không chạm đất hẳn vẫn đi xe máy vững được: cách dừng êm, chống một chân, chọn chỗ đặt chân, khởi hành, dắt xe, chọn giày dép và điều không nên tự sửa.',
  summary: 'Bài giải thích vì sao người có vóc dáng nhỏ thường gặp khó ở lúc dừng chứ không phải lúc chạy: xe đứng yên không tự giữ thăng bằng, còn mặt đường nghiêng, mép lề hay ổ gà làm chỗ đặt chân thấp hơn dự tính. Nội dung đi qua kỹ thuật dừng và chống một chân, cách nhìn mặt đường trước khi đặt chân, khởi hành lại, dắt xe và ra vào chỗ đỗ, rồi tới giày dép, việc chọn xe và những thay đổi không nên tự làm. Bài cũng gợi ý cách luyện tập dừng và khởi hành ở sân vắng.',
  quickAnswer: 'Chân không chạm đất hẳn vẫn đi xe máy vững được nếu dừng đúng cách: giảm tốc sớm, dừng khi tay lái thẳng, nhích người sang một bên yên để một chân đặt cả bàn, giữ phanh và không nghiêng xe nhiều về phía chân ấy. Nhìn trước chỗ đặt chân để tránh mép lề thấp, rãnh, vệt dầu, ổ gà, mặt đường dốc xuống. Khởi hành bằng ga nhẹ; dắt xe thì đứng cạnh, nghiêng xe nhẹ về phía mình.',
  keyPoints: [
    'Khó khăn nằm ở lúc dừng chứ không phải lúc chạy: xe đứng yên không tự giữ thăng bằng nên đôi chân thành điểm tựa, còn mặt đường nghiêng, mép lề hay ổ gà làm chỗ đặt chân thấp hơn dự tính.',
    'Dừng êm bằng cách giảm tốc sớm, dừng hẳn khi tay lái thẳng, nhích người sang một bên yên để một chân trụ đặt cả bàn hoặc gần cả bàn, giữ phanh và không nghiêng xe nhiều về phía chân trụ.',
    'Nhìn trước chỗ sẽ đặt chân và tránh mép lề thấp, rãnh, vệt dầu, ổ gà hay mặt đường dốc xuống về phía chân trụ; dừng sát lề thì chọn chân ở phía mặt đường cao hơn nếu phía ấy an toàn.',
    'Khởi hành bằng ga nhẹ, nhích người về giữa yên và chỉ đưa chân lên khi xe đã đi đều; dắt xe thì đứng cạnh, một tay giữ tay lái và phanh, nghiêng xe nhẹ về phía mình để xe tựa vào người, chỗ đỗ chật thì nhờ người.',
    'Chọn giày dép đế bằng, bám, không trơn, không quá dày; không tự cắt hạ giảm xóc, yên hay thay bánh khác cỡ khi chưa hỏi thợ có chuyên môn, và luyện tập dừng, khởi hành ở sân vắng.'
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['chân không chạm đất', 'tư thế dừng xe', 'chân trụ', 'mặt đường nghiêng', 'dắt xe bằng tay', 'giày dép đi xe máy'],
  keywords: ['người thấp đi xe máy', 'chân không chạm đất khi đi xe máy', 'người thấp đi xe tay ga yên cao', 'cách chống chân khi dừng xe máy'],
  sections: [
    P('Vì sao chân không chạm đất hẳn gây khó ở lúc dừng chứ không phải lúc chạy', [
      'Người thấp đi xe máy, nhất là xe tay ga yên cao, thường kể cùng một điều: chạy thì ổn, đến lúc dừng đèn đỏ hay kẹt xe mới thấy lo. Nỗi lo ấy có lý do cụ thể chứ không phải chuyện thiếu tay nghề. Lúc xe đang chạy, chân đặt trên sàn hoặc cần để chân, còn việc giữ xe thẳng đứng do chính chuyển động, những cú bù nhỏ ở tay lái và vị trí ngồi đảm nhận, nên chân không cần chạm đất. Đến lúc dừng, các yếu tố ấy mất đi cùng một lúc và hai bàn chân trở thành điểm tựa duy nhất. Điều thuận lợi là khó khăn gói gọn trong vài giây dừng và khởi hành, nên có thể bù bằng kỹ thuật và thói quen nhìn mặt đường.',
      'Xe hai bánh đứng yên không tự giữ được thăng bằng: nó giống một cột cao đặt trên hai điểm tiếp đất nhỏ, chỉ cần nghiêng quá một góc nhỏ là trọng lực tự kéo xe đổ nốt phần còn lại. Người ngồi cộng thêm trọng lượng ở vị trí cao, nên việc chống đỡ dồn hết vào đôi chân. Chân đặt cả bàn thì lực dồn xuống chắc, còn chân nhón mũi thì mặt tiếp xúc nhỏ, cổ chân duỗi thẳng nên khó chống lực đẩy ngang, và chỉ cần mũi giày trượt là xe vượt qua điểm cân bằng khi chân chưa kịp bù. Chân không chạm đất khi đi xe máy không dành riêng cho ai: người ngồi xe cao so với mình, chở nặng hay đang mệt cũng gặp, chỉ là người có vóc dáng nhỏ gặp sớm hơn.',
      'Phần khó đoán nhất nằm ngay dưới chân. Mặt đường ít khi phẳng tuyệt đối: nhiều đường được làm hơi vồng ở giữa để thoát nước nên càng gần mép lề càng thấp dần, quanh đó còn có rãnh nước, nắp cống lệch, ổ gà, chỗ vá và những vệt lún. Khoảng cách từ bàn chân tới mặt đất vốn vừa đủ trên nền phẳng sẽ thiếu đi chỉ vì chân rơi vào chỗ trũng, và xe nghiêng về phía ấy ngay lúc bạn dồn trọng lượng xuống. Nhiều lần loạng choạng hay đổ xe khi dừng bắt đầu đúng như vậy: xe còn chạy chậm, chân vừa đặt xuống, mà mặt đất thấp hơn tưởng. Các phần sau đi theo thứ tự thao tác: cách dừng, nơi đặt chân, rồi khởi hành và dắt xe.'
    ]),
    P('Kỹ thuật dừng xe và chống một chân cho vững', [
      'Dừng êm bắt đầu từ trước chỗ dừng khá xa. Thấy đèn chuyển đỏ hoặc xe phía trước phanh, hãy nhả ga và giảm tốc sớm bằng cả hai phanh, đều tay, thay vì chạy sát rồi bóp gấp. Phanh gấp dồn trọng tâm ra trước, tay lái dễ giật và xe dừng trong tư thế lệch, đúng lúc bạn chưa kịp chọn chân. Khi xe đã chậm, đưa tay lái về thẳng và chỉ dừng hẳn lúc bánh trước đã thẳng. Tay lái còn bẻ thì xe đứng yên thường có xu hướng ngả về phía bẻ, và chân phía ấy phải đỡ nhiều hơn dự tính. Dừng khi tay lái thẳng thì xe dễ đứng thẳng hơn, và chân trụ chỉ cần giữ thăng bằng chứ không phải kéo xe về lại.',
      'Cách chống chân khi dừng xe máy gói trong một ý: một chân đặt chắc đáng tin hơn hai chân nhón. Sắp dừng, hãy nhích người sang một bên yên, phía chân bạn đã chọn, để chân trụ rơi xuống gần như thẳng đứng và đặt được cả bàn hoặc gần cả bàn; chân kia để yên trên sàn hoặc cần để chân. Hãy biết trước sẽ chống chân nào, chọn từ lúc còn giảm tốc dựa vào mặt đường phía trước, vì sát lúc dừng không còn thời gian cân nhắc. Giữ phanh suốt thời gian dừng để xe không nhích, nhờ vậy chân chỉ lo thăng bằng chứ không phải cản xe lăn. Đừng nghiêng xe nhiều về phía chân trụ: nghiêng chút ít giúp chân với tới, nghiêng nhiều thì cả trọng lượng xe đè lên một cổ chân.',
      'Vài chi tiết nhỏ giúp chân trụ đáng tin hơn. Đặt chân sát thân xe, gần dưới hông, để lực đi thẳng xuống đất; chân đặt xa thân xe bị dạng ra và dễ trượt. Giữ đầu gối hơi chùng, không khóa cứng, để chân hấp thụ những cú lắc nhẹ của xe. Mắt nhìn xa về phía trước, không cúi nhìn chân hay bánh xe, vì cúi đầu dễ kéo cả người nghiêng theo. Hãy chọn một bên làm mặc định để cơ thể quen dần, chỉ đổi khi mặt đường buộc phải đổi. Chờ đèn đỏ lâu thì chân trụ mỏi; đổi chân được, miễn là đang giữ phanh, tay lái thẳng, mặt đường phía bên kia đã nhìn kỹ, và chân mới đặt chắc rồi mới nhấc chân cũ.'
    ]),
    P('Chọn chỗ dừng và để ý mặt đường dưới chân', [
      'Thói quen đáng tập nhất là nhìn xuống mặt đường trước khi dừng, không chỉ nhìn đèn tín hiệu hay đuôi xe phía trước. Hãy quét mắt vào vùng chân sẽ đặt, ngay cạnh thân xe, một hai nhịp trước khi xe dừng hẳn. Những chỗ nên tránh gồm mép lề thấp sát rãnh nước, khe thoát nước và nắp cống, ổ gà và chỗ vá sâu, vệt lún thành rãnh, sỏi cát rời, lá cây ẩm, vệt dầu bóng loáng và vạch sơn khi ướt. Vũng nước cũng đáng ngại vì có thể che ổ gà, nên đừng đặt chân xuống nước khi chưa biết đáy ra sao. Nhìn sớm cho phép bạn đổi chân hoặc nhích sang một chút trước khi xe dừng, thay vì phát hiện chỗ xấu sau khi đã dồn trọng lượng xuống.',
      'Hướng dốc của mặt đường quyết định nên chống chân nào. Mặt đường dốc xuống về phía nào thì chân phía ấy phải với xa hơn mới chạm đất; muốn với tới, bạn lại nghiêng xe về chính phía ấy, và trọng lượng xe dồn lên đúng cổ chân đang ở thế yếu nhất. Chân ở phía mặt đường cao hơn có đất gần hơn nên dễ đặt cả bàn hơn. Dừng sát lề là ví dụ hay gặp: đường thường thấp dần về phía rãnh nước, nên nếu được hãy chọn chân ở phía xa rãnh. Điều kiện kèm theo là phía ấy không có xe khác đang lách qua sát bên, vì chân thò ra dòng xe còn nguy hiểm hơn một nền hơi thấp. Cả hai phía đều xấu thì nhích vị trí dừng một chút nếu giao thông cho phép.',
      'Ban đêm, trời mưa hay chỗ có bóng cây loang lổ, mặt đường khó đọc hơn nên cần thêm một bước kiểm tra. Hãy giảm tốc sớm hơn thường lệ, rồi lúc xe gần như đứng, đặt bàn chân xuống nhẹ trước, thấy chắc mới dồn trọng lượng. Chạm phải chỗ trơn, lún hay trũng thì đổi sang chân còn lại ngay khi xe chưa nghiêng, đừng cố cứu chân đã đặt sai. Xe đã nghiêng quá điểm cân bằng thì buông xe và bước tránh thường an toàn hơn gồng đỡ, vì chấn thương nặng hơn vết xước. Giữa dòng xe đông không phải lúc nào cũng có chỗ chọn; khi đó hãy ưu tiên một chân đặt chắc ở phía ít xấu nhất, giữ phanh và giữ xe thẳng.'
    ]),
    P('Khởi hành lại, dắt xe và ra vào chỗ đỗ', [
      'Khởi hành là lúc xe chuyển từ đứng yên sang chuyển động, và vài nhịp đầu vẫn là lúc xe kém vững nhất. Hãy nhìn quanh, giữ phanh tới khi sẵn sàng, rồi nhả phanh và vặn ga nhẹ, đều tay; ga giật làm xe chồm lên và kéo người ngả ra sau. Ngay khi xe lăn bánh, đưa người từ mép yên về giữa yên để trọng lượng cân đối trở lại. Chân còn gần mặt đất trong vài nhịp đầu và chỉ được đưa lên chỗ để chân khi xe đã đi đều, bánh trước tự giữ thẳng; chân lê trên đường lâu thì mũi giày có thể mắc vào vật trên mặt đường. Để thành phản xạ, hãy tập ở sân vắng: chọn một điểm dừng, dừng êm, chống chân, giữ phanh, khởi hành, rồi lặp lại, luân phiên hai chân.',
      'Có lúc xuống xe và dắt là cách vững nhất, nhất là khi quay đầu trong chỗ hẹp hoặc qua đoạn nền xấu. Hãy giữ phanh, tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ; xe số thì về số rỗng. Đứng cạnh xe, một tay giữ tay lái và cần phanh, tay kia nắm chỗ chắc phía sau nếu với tới, rồi nghiêng xe nhẹ về phía mình để thân xe tựa vào hông hoặc đùi. Nhờ vậy cơ thể đỡ bớt một phần trọng lượng xe thay vì dồn hết lên cánh tay và vai, còn nghiêng xe ra xa người thì tay phải gồng kéo giữ. Chỉ nghiêng nhẹ, bước chậm cùng nhịp xe và tránh để chân hay ống quần chạm ống xả còn nóng.',
      'Ra vào chỗ đỗ là lúc dễ đổ xe vì chỗ hẹp, nền dễ nghiêng và tầm nhìn bị che. Với chân không chạm đất hẳn, cách vững là dừng trước chỗ đỗ, xuống xe rồi dắt vào theo cách vừa nói, thay vì ngồi trên yên nhích từng chút. Chỗ đỗ chật, xe nặng hay nền dốc thì nhờ người trông xe hoặc người đi cùng; nhờ giúp là tránh đổ dây chuyền chứ không phải thừa nhận mình kém. Việc dựng xe lên chân chống đứng, còn gọi là chân chống giữa, bằng trọng lượng cơ thể và cách chọn nền đỗ đã có bài riêng; kỹ thuật lùi xe ra khỏi chỗ đỗ cũng vậy, và chân chỉ chạm bằng mũi giày thì dắt lùi từ bên cạnh chắc hơn đẩy lùi trên yên.'
    ]),
    P('Giày dép, chọn xe và những điều không nên tự làm', [
      'Giày dép là phần hỗ trợ rẻ nhất mà nhiều người bỏ qua. Đế bằng, ôm chân, có độ bám tốt giúp bàn chân đặt chắc lên mặt đường, kể cả khi hơi ướt. Đế mòn nhẵn, đế cứng như nhựa, dép lê hay dép quai lỏng dễ trượt hoặc tuột ngay lúc cần chống chân, còn gót cao hay gót nhọn khiến bàn chân khó đặt phẳng và dễ lọt vào khe. Đế độn dày có thể giúp chân xuống gần mặt đất hơn, nhưng quá dày thì làm mờ cảm giác với mặt đường và các cần điều khiển dưới chân, nền giày cao lại dễ làm lật cổ chân khi đặt lệch. Đôi giày hợp lý là đôi vừa đủ bám, vừa đủ cảm giác. Dây giày buộc gọn để khỏi mắc vào cần số hay cần phanh chân.',
      'Kỹ thuật tốt giúp được nhiều, nhưng không thay được chiếc xe vừa với người đi. Với xe tay ga yên cao, đáng nhìn không chỉ có chiều cao yên mà cả độ rộng phần yên phía trước, trọng lượng xe và cảm giác lúc nghiêng; hai xe có yên cao như nhau vẫn có thể cho cảm giác đặt chân khác nhau. Cách thử đáng tin là ngồi lên bằng đôi giày hay đi, nghiêng xe, thử chống một chân như phần trên, dắt xe vài bước, rồi tin vào cảm nhận thay vì chỉ đọc thông số. Bài về kích thước xe dành cho người mới đi sâu hơn vào việc ngồi thử và so xe với chỗ đỗ. Đã tập mà xe vẫn quá cao hay quá nặng thì chọn xe vừa tay hơn là lựa chọn an toàn nhất.',
      'Có ba việc không nên tự làm dù mục đích là giúp chân chạm đất: cắt hạ giảm xóc, gọt hoặc cắt yên, và thay bánh khác cỡ. Giảm xóc cắt ngắn hay hạ lệch có thể làm xe dằn, chạm gầm khi qua gờ và khiến tay lái, phanh phản ứng khác đi. Yên gọt mỏng có thể mất độ êm và độ đỡ, gây ê khi ngồi lâu. Bánh khác cỡ có thể ảnh hưởng khoảng hở với thân xe, cảm giác phanh và độ vững khi nghiêng. Đây là chuyện an toàn và vận hành, nên hãy hỏi thợ có chuyên môn, nói rõ nhu cầu và nghe họ nói điều gì phù hợp với đúng xe của bạn. Trong lúc ấy, tập dừng và khởi hành ở sân vắng là thay đổi an toàn nhất bạn có thể tự làm.'
    ])
  ],
  checklist: [
    'Nhìn trước vùng sẽ đặt chân: tránh mép lề thấp, rãnh, nắp cống, ổ gà, vệt dầu và mặt đường dốc xuống về phía chân trụ.',
    'Quyết định trước chân nào làm chân trụ, giảm tốc sớm và chỉ dừng hẳn khi tay lái đã thẳng.',
    'Nhích người sang một bên yên, đặt chân trụ cả bàn hoặc gần cả bàn, để chân kia trên sàn hay cần để chân.',
    'Giữ phanh suốt lúc dừng, không nghiêng xe nhiều về phía chân trụ, khởi hành bằng ga nhẹ rồi mới đưa chân lên.',
    'Mang giày dép đế bằng, bám, không trơn, không quá dày; dắt xe thì đứng cạnh, nghiêng xe nhẹ về phía mình, chỗ chật thì nhờ người.'
  ],
  steps: [
    { title: 'Giảm tốc sớm và đưa tay lái về thẳng', detail: 'Nhả ga và phanh đều tay từ xa, nhìn mặt đường nơi sẽ đặt chân, rồi chỉ dừng hẳn khi bánh trước đã thẳng.' },
    { title: 'Chọn chân trụ và nhích người sang một bên yên', detail: 'Quyết định trước chân nào chống, ưu tiên phía mặt đường cao và chắc; nhích người để chân ấy đặt cả bàn hoặc gần cả bàn, chân kia để trên sàn hoặc cần để chân.' },
    { title: 'Giữ phanh và giữ xe gần thẳng đứng', detail: 'Giữ phanh suốt lúc dừng, nghiêng xe rất ít về phía chân trụ, đặt chân sát thân xe; chạm phải chỗ trơn hay trũng thì đổi chân khi xe chưa nghiêng.' },
    { title: 'Khởi hành bằng ga nhẹ rồi mới đưa chân lên', detail: 'Nhìn quanh, nhả phanh, vặn ga nhẹ, đưa người về giữa yên và chỉ đưa chân lên khi xe đã đi đều.' }
  ],
  warnings: [
    'Không đặt chân xuống vũng nước, rãnh, vệt dầu hay mép lề thấp khi chưa biết mặt đất ra sao; xe đã nghiêng quá điểm cân bằng thì thường nên buông xe và bước tránh, đừng gồng đỡ bằng cổ chân.',
    'Không tự cắt hạ giảm xóc, gọt yên hoặc thay bánh khác cỡ; các thay đổi này ảnh hưởng đến an toàn và vận hành, cần thợ có chuyên môn đánh giá theo đúng xe.',
    'Không dắt xe khi máy còn nổ và tay đặt trên tay ga, không để chân hay ống quần chạm ống xả còn nóng; chỗ chật, nền dốc rõ hoặc trơn ướt thì nhờ người thay vì tự gắng sức.'
  ],
  notes: [
    'Vị trí cần phanh, công tắc tắt máy, số rỗng và cách tắt khóa điện khác nhau tùy xe; hãy đối chiếu với sách hướng dẫn sử dụng của xe bạn.',
    'Bài chỉ nêu nguyên tắc chung về dừng, khởi hành và dắt xe; xe quá nặng so với sức, hoặc người đang đau chân, cổ chân, lưng, nên nhờ người hỗ trợ thay vì cố tự làm.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần phanh, khóa điện và công tắc tắt máy',
    'Tài liệu đào tạo kỹ năng điều khiển xe hai bánh ở tốc độ thấp của cơ sở đào tạo người lái có chuyên môn'
  ],
  related: ['dung-xe-len-chan-chong-dung-dung-cach-tu-the-va-nen-do', 'lui-xe-may-ra-khoi-cho-do-an-toan-ky-thuat-day-lui-va-quan-sat', 'kich-thuoc-xe', 'do-xe-may-tren-le-doc-an-toan', 'di-xe-may-duong-tron-dau-nhot']
};
