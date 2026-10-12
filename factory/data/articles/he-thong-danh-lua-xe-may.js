// AI WIKI TOTAL — S01115 (topic V2 T001132); chuỗi đánh lửa từ nguồn điện đến bugi và triệu chứng từng mắt xích; không nêu số liệu, thông số, cách đo hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'he-thong-danh-lua-xe-may',
  title: 'Hệ thống đánh lửa trên xe máy: từ bô bin đến bugi, mỗi bộ phận làm gì',
  seoTitle: 'Hệ thống đánh lửa xe máy: bô bin, IC, bugi làm gì và hỏng ra sao',
  metaDescription: 'Hệ thống đánh lửa xe máy gồm nguồn điện, tín hiệu trục khuỷu, IC hoặc ECU, bô bin, dây cao áp và bugi. Mỗi mắt xích làm gì, hỏng thì xe biểu hiện ra sao.',
  summary: 'Bài giải thích hệ thống đánh lửa trên xe máy như một chuỗi sáu mắt xích nối tiếp: nguồn điện, tín hiệu vị trí trục khuỷu, bộ điều khiển (CDI hoặc ECU, thợ hay gọi là IC đánh lửa), bô bin, dây cao áp cùng chụp bugi, và bugi. Mỗi bộ phận được mô tả vai trò và kiểu triệu chứng khi hỏng, như mất lửa, tia lửa yếu, hụt lửa ở vòng tua cao hay khó nổ khi ẩm, để bạn hiểu lời chẩn đoán của thợ và tránh những việc nguy hiểm vì điện áp cao.',
  quickAnswer: 'Hỏng bô bin hay hỏng IC đánh lửa là hỏng một mắt xích trong chuỗi sáu mắt xích tạo tia lửa: nguồn điện, tín hiệu vị trí trục khuỷu, bộ điều khiển, bô bin, dây cao áp cùng chụp bugi, và bugi. Mỗi mắt xích để lại triệu chứng riêng, như tắt ngúm khi đang chạy (tín hiệu, IC), hụt lửa ở vòng tua cao (bô bin), khó nổ khi ẩm (dây cao áp, chụp bugi).',
  keyPoints: [
    'Tia lửa là kết quả của sáu mắt xích nối tiếp: nguồn điện, tín hiệu vị trí trục khuỷu, bộ điều khiển, bô bin, dây cao áp cùng chụp bugi, và bugi; một mắt xích yếu là đủ làm tia lửa yếu hoặc mất.',
    'Bộ điều khiển (CDI hoặc ECU, thợ hay gọi là IC đánh lửa) chọn lúc đánh lửa dựa trên tín hiệu vị trí trục khuỷu; thiếu tín hiệu ấy thì bô bin và bugi còn tốt vẫn không có lửa.',
    'Bô bin, còn gọi mô bin hay mô bin sườn khi gắn trên sườn xe, nâng điện áp thấp thành xung rất cao; bô bin yếu hay lộ ra lúc máy nóng, mở ga lớn hoặc quay ở vòng tua cao.',
    'Dây cao áp và chụp bugi nứt, ẩm hay lỏng làm điện rò ra khung: xe khó nổ vào sáng ẩm, sau mưa hoặc sau khi rửa xe, và hụt lửa khi xóc.',
    'Triệu chứng chỉ cho biết hướng nghi ngờ, không thay được chẩn đoán bằng dụng cụ; điện áp đánh lửa rất cao nên không chạm vào dây cao áp khi máy chạy và không thử tia lửa gần xăng.'
  ],
  category: 'wiki',
  hub: 'dong-co',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['hệ thống đánh lửa', 'bô bin', 'IC đánh lửa', 'dây cao áp', 'bugi', 'cảm biến vị trí trục khuỷu'],
  keywords: ['hệ thống đánh lửa xe máy', 'bô bin xe máy', 'mô bin sườn xe máy', 'hệ thống đánh lửa xe máy gồm những gì'],
  sections: [
    P('Tia lửa được tạo ra như thế nào: chuỗi sáu mắt xích từ nguồn điện đến bugi', [
      'Thợ nói hỏng bô bin hay hỏng IC đánh lửa nghĩa là họ chỉ ra một mắt xích trong chuỗi tạo tia lửa, không phải cả hệ thống đã hỏng. Chuỗi ấy có sáu mắt xích nối tiếp: nguồn điện cấp năng lượng; tín hiệu vị trí trục khuỷu báo máy đang quay đến đâu; bộ điều khiển chọn lúc đánh lửa; bô bin nâng điện áp lên rất cao; dây cao áp cùng chụp bugi dẫn xung điện đi; bugi là nơi tia lửa xuất hiện. Vì đứng nối tiếp, chỉ một mắt xích suy yếu là tia lửa yếu hoặc mất, và mỗi mắt xích để lại kiểu triệu chứng riêng. Bài tổng quan về hệ thống điện xe máy đã chia hệ thống điện thành ba mạch; ở đây chỉ đi sâu vào mạch đánh lửa.',
      'Điện áp phải rất cao vì tia lửa cần nhảy qua khe hở giữa hai điện cực bugi, xuyên qua hỗn hợp xăng và không khí đã bị nén chặt, trong khi ắc quy hay cuộn phát điện chỉ cho điện áp thấp. Việc nâng điện áp thuộc về bô bin, một máy biến áp nhỏ gồm hai cuộn dây quấn quanh lõi từ: một cuộn ít vòng dây to, một cuộn rất nhiều vòng dây mảnh. Khi dòng qua cuộn ít vòng đổi đột ngột, từ trường biến đổi nhanh và cuộn nhiều vòng sinh ra xung điện áp rất cao đưa ra bugi. Có xe tạo cú đổi ấy bằng cách xả tụ điện vào cuộn, có xe cấp dòng rồi ngắt bằng linh kiện bán dẫn, tùy xe, nhưng nguyên lý nâng điện áp vẫn thế.',
      'Xung điện ấy phải đến đúng lúc, gần cuối kỳ nén, sớm hơn một chút so với thời điểm piston lên tới điểm cao nhất, để hỗn hợp kịp cháy lan và đẩy piston đi xuống đúng nhịp. Máy quay càng nhanh thì thường phải đánh lửa càng sớm, nên thời điểm này do bộ điều khiển tính theo tín hiệu vòng quay chứ không cố định. Tên gọi của thợ cũng chưa thống nhất: IC đánh lửa hay CDI trên nhiều xe, còn xe phun xăng điện tử gộp việc ấy vào ECU; mô bin sườn là cách gọi bô bin gắn trên sườn xe. Tên khác nhau nhưng mỗi tên chỉ một mắt xích của cùng một chuỗi, nên lời thợ thực chất là chỉ ra lửa đứt ở khâu nào.'
    ]),
    P('Nguồn điện, tín hiệu vị trí trục khuỷu và bộ điều khiển: ba mắt xích đầu', [
      'Nguồn điện là mắt xích đầu tiên, và cách cấp điện khác nhau tùy xe. Có xe lấy điện đánh lửa trực tiếp từ cuộn phát điện trong cụm bánh đà, nơi thợ hay gọi là mâm lửa, nên ắc quy yếu trước hết làm đề chậm chứ chưa chắc làm mất lửa. Có xe lấy điện từ ắc quy qua khóa điện, và xe phun xăng điện tử phụ thuộc ắc quy nhiều hơn vì bộ điều khiển, bơm xăng, kim phun cùng cần điện. Nguồn yếu để lại dấu hiệu lan rộng: đề uể oải, đèn mờ, còi nhỏ, tia lửa kém ngay lúc đề, rồi xe nổ lại bình thường sau khi sạc đầy. Cuộn phát điện yếu có thể làm tia lửa kém ở vòng tua thấp hoặc khi máy nóng.',
      'Tiếp theo là tín hiệu cho bộ điều khiển biết trục khuỷu đang ở vị trí nào và quay nhanh đến đâu. Nguồn tín hiệu là cảm biến tín hiệu vị trí trục khuỷu hoặc loại tương đương, tùy xe, thường đặt sát bánh đà: mỗi lần một mấu hoặc răng trên bánh đà quét qua, nó phát một xung báo vị trí. Thiếu xung này, bộ điều khiển không biết lúc nào phải đánh lửa, nên bô bin và bugi còn tốt vẫn không có tia lửa; xe phun xăng thường còn ngừng cả phun xăng vì không thấy máy quay. Dấu hiệu điển hình là đề quay khỏe mà máy không bắt, hoặc đang chạy bỗng tắt ngúm, thường không ho không giật, nhất là lúc máy nóng hay sau cú xóc, rồi nổ lại sau một lúc nghỉ.',
      'Bộ điều khiển đánh lửa là mắt xích thứ ba, tức CDI hoặc ECU tùy xe; thợ quen gọi chung là IC đánh lửa vì bên trong là mạch điện tử tích hợp. Nó nhận nguồn điện và tín hiệu vị trí, tính thời điểm đánh lửa theo vòng quay, rồi đóng ngắt dòng điện cho bô bin đúng lúc. Trên một số xe, đánh lửa còn bị cắt theo công tắc tắt máy, công tắc chân chống, cảm biến nghiêng hay khóa chống trộm, nên xe không nổ chưa chắc vì hỏng bô bin hay IC. Bộ điều khiển hỏng thật thường cho tia lửa chập chờn: mất lửa hẳn, hụt lửa ở vòng tua cao, hoặc tắt máy lúc nóng rồi nổ lại khi nguội.'
    ]),
    P('Bô bin và dây cao áp: nơi điện áp được nâng lên rồi dẫn tới bugi', [
      'Bô bin, còn gọi mô bin hay cuộn đánh lửa, nhận lệnh đóng ngắt từ bộ điều khiển và nâng điện áp thành xung rất cao. Tên mô bin sườn chỉ loại cuộn gắn riêng trên sườn xe, nối với bugi bằng dây cao áp; nhiều xe phun xăng đời mới dùng cuộn liền chụp bugi, cắm thẳng vào đầu bugi nên không có dây dài, và khi hỏng thợ thường thay nguyên cụm. Bô bin ít chi tiết chuyển động nhưng chịu nhiệt, rung và ẩm, nên hỏng theo kiểu lão hóa lớp cách điện: vòng dây bên trong chạm nhau, hoặc điện rò qua vỏ bị nứt. Hậu quả là xung cao áp yếu đi hay mất hẳn dù nguồn điện, tín hiệu và bộ điều khiển đều tốt.',
      'Bô bin yếu thường lộ ra trước ở những lúc đòi hỏi nhiều nhất. Mở ga lớn khi tải nặng làm áp suất buồng đốt tăng, tia lửa khó nhảy qua khe hở hơn; vòng tua cao cho cuộn dây ít thời gian hơn giữa hai lần đánh lửa; máy nóng làm lớp cách điện đã lão hóa dễ rò. Bạn sẽ thấy xe giật cục, hụt lửa khi lên dốc hoặc vặn ga sâu trong khi cầm chừng vẫn êm, hoặc xe tắt lúc nóng rồi nổ lại khi nguội. Bô bin hỏng hẳn thì không còn tia lửa. Thân bô bin nứt, cháy xém hay có vệt đen là dấu hiệu rò điện thợ nhìn thấy được; còn cuộn dây bên trong còn tốt hay không thì chỉ dụng cụ mới cho biết.',
      'Dây cao áp và chụp bugi là đoạn đường cuối của xung điện: dây có lõi dẫn bọc lớp cách điện dày, chụp là đầu nối cắm vào bugi. Vỏ dây lão hóa, nứt, hoặc chụp bám nước và bụi bẩn làm điện rò ra khung thay vì tới bugi, nên xe khó nổ vào sáng ẩm, sau mưa hay sau khi rửa xe, rồi nổ lại bình thường khi khô. Chụp lỏng hoặc gỉ chân tiếp xúc gây hụt lửa lúc xe rung xóc, thậm chí tắt máy khi qua ổ gà. Điện áp ở đoạn này rất cao: không sờ vào dây cao áp, chụp bugi hay bô bin khi máy đang nổ hoặc đang đề, vì có thể bị giật mạnh và giật tay ra bất ngờ. Chỗ nào nghi rò điện thì để thợ xử lý.'
    ]),
    P('Bugi và những điều kiện để tia lửa đốt cháy được hỗn hợp', [
      'Bugi là mắt xích cuối: xung cao áp đi xuống điện cực trung tâm, nhảy qua khe hở sang điện cực mát gắn với thân bugi rồi về khung máy. Tia lửa tốt cần nhiều điều kiện cùng lúc: khe hở đúng thiết kế của xe, điện cực không mòn tròn hay bám muội dày, sứ cách điện không nứt, ren siết chắc để kín khí và tản nhiệt, đúng loại bugi về kích thước ren lẫn nhiệt trị, tùy xe. Bạn không cần nhớ thông số vì chúng nằm trong sách hướng dẫn của xe; điều cần nhớ là bugi sai loại hay lệch khe hở có thể gây triệu chứng giống hệt bô bin yếu. Bugi mòn hoặc bẩn thường để lại triệu chứng từ từ: máy khó nổ hơn, cầm chừng rung, hụt nhịp khi tăng ga.',
      'Ảnh hưởng giữa các mắt xích đi cả hai chiều. Khe hở nới rộng dần do mòn làm điện áp cần thiết tăng lên, bắt bô bin làm việc gần giới hạn hơn, nên bô bin yếu nhiều khi chỉ lộ ra lúc bugi đã cũ; thay bugi mới xong, bệnh hết ít lâu rồi quay lại, là gợi ý để thợ xem lại bô bin. Muội than, dầu hoặc xăng bám trên sứ làm tia lửa rò qua lớp bẩn thay vì nhảy qua khe. Xe đề nhiều lần khi chưa nổ có thể làm bugi ướt xăng và không đánh lửa được cho tới khi khô, nên bugi ướt chưa chắc là bugi hỏng, mà có thể chỉ cho thấy xăng thừa trong buồng đốt.',
      'Có tia lửa tốt vẫn chưa chắc máy nổ, vì tia lửa chỉ làm việc khi hỗn hợp đúng tỷ lệ và buồng đốt nén đủ. Xăng ngập, hỗn hợp quá loãng, thiếu xăng hay buồng đốt kém kín đều làm máy không bắt dù hệ thống đánh lửa khỏe, nên thợ thường tách hai nhánh: có lửa hay không, rồi xăng và độ nén. Đầu bugi mang dấu vết của buồng đốt, như lớp bám khô, ướt xăng hay ướt nhớt, nên thợ nhìn nó trước khi kết luận hỏng bô bin hay IC. Ngược lại, thay bugi không chữa được lỗi do bô bin, IC hay tín hiệu, và thay lần lượt từng món theo đoán mò vừa tốn tiền vừa che mất nguyên nhân thật. Tháo bugi và thử lửa nên để thợ làm.'
    ]),
    P('Triệu chứng riêng của từng mắt xích khi hỏng', [
      'Mỗi kiểu triệu chứng chỉ về một nhóm mắt xích nghi vấn. Không có tia lửa, đề khỏe mà máy không bắt: thiên về nguồn cấp cho đánh lửa, tín hiệu vị trí, bộ điều khiển, bô bin hỏng hẳn, hay một công tắc an toàn đang cắt lửa; xe đang chạy bỗng tắt ngúm không ho thì tín hiệu và bộ điều khiển đáng nghi hơn. Tia lửa yếu, khó nổ, chạy không đều: hay gặp ở bugi mòn, bô bin yếu hoặc nguồn điện tụt. Hụt lửa, giật cục khi mở ga lớn hay ở vòng tua cao: thiên về bô bin, bugi, chụp bugi hoặc bộ điều khiển. Khó nổ vào buổi ẩm, sau mưa hay rửa xe: thiên về dây cao áp, chụp bugi và vỏ bô bin. Đó là hướng nghi ngờ, chưa phải kết luận.',
      'Lỗi chỉ xuất hiện khi máy nóng là kiểu khó chẩn đoán nhất, vì cuộn dây, bô bin hay mạch điện tử giãn nở theo nhiệt: nóng thì hở mạch, nguội thì tiếp xúc lại. Mang xe đến lúc đã nguội, thợ có thể chẳng thấy gì, nên bản ghi hoàn cảnh của bạn rất đáng giá. Thợ thường đi từ chi tiết dễ kiểm tra và hay hỏng sang chi tiết khó kiểm tra hơn: bugi, chụp bugi, dây cao áp, rồi tín hiệu và bô bin, còn bộ điều khiển thường được nghĩ đến sau cùng, nên lời kết luận hỏng IC đáng được hỏi lại căn cứ. Bô bin hay IC vừa thay mà lại hỏng nữa là dấu hiệu cần xem lại nguồn điện, bộ sạc và các mối nối, chứ không chỉ thay tiếp.',
      'Phần của bạn là quan sát và ghi lại, không phải thử lửa: xe không nổ hẳn, nổ khó hay hụt khi chạy; đề khỏe hay yếu; lỗi gặp lúc nóng hay nguội, sau mưa hay rửa xe, ở vòng tua nào; có tắt đột ngột không; với xe phun xăng, đèn báo lỗi động cơ có sáng không. Việc thử tia lửa nên để thợ làm bằng dụng cụ, ở nơi thoáng, xa xăng, vì tia lửa gặp hơi xăng có thể bắt cháy. Xe tắt đột ngột nhiều lần, hụt lửa giữa dòng xe hay có mùi khét quanh bô bin thì giảm tốc, dừng xe an toàn rồi nhờ thợ, đừng cố chạy tiếp. Trình tự kiểm tra nhiên liệu, điện, cơ khí khi xe không nổ đã có bài riêng về xe máy không nổ máy.'
    ])
  ],
  checklist: [
    'Xác định xe không nổ hẳn, nổ khó, hay đang chạy bỗng hụt lửa hoặc tắt máy, vì mỗi kiểu chỉ về một nhóm mắt xích khác nhau.',
    'Ghi lỗi xảy ra lúc máy nóng hay nguội, sau mưa hay sau khi rửa xe, ở vòng tua thấp hay cao.',
    'Để ý tiếng đề khỏe hay yếu, đèn và còi sáng rõ hay mờ, để tách lỗi nguồn điện khỏi lỗi phía đánh lửa.',
    'Nhìn bằng mắt khi máy đã tắt và nguội, nếu thấy được mà không phải tháo ốp: dây cao áp, chụp bugi, thân bô bin có nứt, cháy xém, ướt hay lỏng không.',
    'Hỏi thợ đang nghi mắt xích nào, dựa vào đâu, và sau khi thay chi tiết mới thì lỗi có hết ở đúng hoàn cảnh cũ không.'
  ],
  steps: [
    { title: 'Phân biệt không có lửa với lửa yếu', detail: 'Quan sát xe đề khỏe mà không bắt máy, bắt máy khó hay hụt lửa khi chạy, rồi mô tả bằng lời; không tự thử tia lửa.' },
    { title: 'Ghi hoàn cảnh xảy ra', detail: 'Ghi máy nóng hay nguội, sau mưa hay rửa xe, vòng tua nào, có tắt đột ngột hay ho trước khi tắt, đèn báo lỗi động cơ có sáng không.' },
    { title: 'Đưa thợ kèm bản ghi', detail: 'Nhờ thợ kiểm tra bằng dụng cụ và nói rõ nghi mắt xích nào, thay vì thay lần lượt từng chi tiết theo đoán mò.' },
    { title: 'Theo dõi sau khi sửa', detail: 'Chạy lại đúng hoàn cảnh từng gây lỗi, như lúc nóng, buổi ẩm hay vòng tua cao; lỗi quay lại thì trở lại thợ, đừng thay thêm bừa.' }
  ],
  warnings: [
    'Điện áp đánh lửa rất cao: không sờ vào dây cao áp, chụp bugi hay bô bin khi máy đang nổ hoặc đang đề, nhất là khi tay ướt, và không rút chụp bugi khi máy đang chạy.',
    'Không thử tia lửa gần bình xăng, miệng bình đang mở, chỗ có mùi xăng hoặc nơi kín gió; tia lửa gặp hơi xăng có thể bắt cháy.',
    'Xe tắt đột ngột nhiều lần, hụt lửa giữa dòng xe hay có mùi khét quanh bô bin thì dừng xe an toàn và nhờ thợ; không xịt nước áp lực vào khu vực bô bin và chụp bugi.'
  ],
  notes: [
    'Tên gọi, vị trí và cách cấp điện của từng mắt xích khác nhau tùy xe số, xe tay ga, xe dùng bộ chế hòa khí hay phun xăng điện tử; hãy đối chiếu với sách hướng dẫn của xe bạn.',
    'Bài chỉ mô tả vai trò và triệu chứng quan sát được để hiểu lời thợ; không nêu thông số, quy trình tháo lắp hay cách đo, vì những việc đó thuộc về sổ tay sửa chữa và thợ có dụng cụ.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần bugi, khởi động động cơ và các đèn báo trên bảng đồng hồ',
    'Sổ tay sửa chữa của nhà sản xuất xe, phần hệ thống đánh lửa của đúng dòng xe'
  ],
  related: ['he-thong-dien-xe-may-tong-quan', 'xe-may-khong-no-may-nguyen-nhan-va-cach-xu-ly', 'loc-dien-xe-may', 'xe-may-bi-ngap-xang', 'he-thong-dien-xe']
};
