// AI WIKI TOTAL — S01122 (topic V2 T001184); nhận biết bằng quan sát và xử lý tạm thời an toàn, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'ac-quy-xe-may-phong-ri-nuoc-mui-la',
  title: 'Ắc quy xe máy phồng, rỉ nước hoặc có mùi lạ: dấu hiệu nguy hiểm và cách xử lý an toàn',
  seoTitle: 'Ắc quy xe máy bị phồng, rỉ nước hoặc có mùi lạ: xử lý an toàn',
  metaDescription: 'Ắc quy xe máy bị phồng, rỉ nước hay có mùi lạ thì phải ngừng dùng ngay. Nguyên nhân, nguy cơ axit và khí dễ cháy, cách xử lý tạm thời, việc cần làm sau khi thay.',
  summary: 'Bài giải thích vì sao ắc quy xe máy bị phồng, rỉ nước hoặc có mùi lạ, từ sạc quá mức do hệ thống sạc lỗi, nhiệt cao, tuổi đời, hư hỏng bên trong đến xả sâu, tùy loại ắc quy. Nội dung tách rõ những dấu hiệu buộc phải ngừng dùng ngay, nguy cơ bỏng axit, khí dễ cháy và tia lửa khi đứng gần, cách xử lý tạm thời an toàn trước khi nhờ thợ, rồi việc kiểm tra hệ thống sạc sau khi thay để ắc quy mới không hỏng theo cách cũ.',
  quickAnswer: 'Ắc quy xe máy phồng, rỉ nước hoặc bốc mùi trứng thối, chua gắt là dấu hiệu phải ngừng dùng ngay: đừng chạy tiếp, đừng đề máy, đừng sạc lại. Bên trong có axit gây bỏng và khí dễ cháy nổ khi gặp tia lửa. Hãy dừng xe ở chỗ thoáng, tránh lửa, giữ ắc quy thẳng, không tự mở hay tự thay, rồi nhờ thợ thay mới và kiểm tra hệ thống sạc để tìm nguyên nhân gốc.',
  keyPoints: [
    'Vỏ phồng, vệt ướt hoặc cặn ẩm quanh nắp và cực, mùi trứng thối hay chua gắt, hơi nóng bất thường là bốn nhóm dấu hiệu buộc phải ngừng dùng ngay; chỉ cần một nhóm là đủ.',
    'Nguyên nhân thường gặp gồm sạc quá mức do hệ thống sạc lỗi, nhiệt cao, tuổi đời, hư hỏng bên trong và xả sâu; ắc quy nước thường rỉ dung dịch, ắc quy khô kín thường phồng vỏ.',
    'Dung dịch bên trong là axit gây bỏng da và mắt, làm mục vải, ăn mòn khung xe; khí sinh ra khi sạc quá mức dễ cháy nổ nên tia lửa từ đề điện, dây cực hay lửa trần đều nguy hiểm.',
    'Xử lý tạm thời: dừng xe thoáng gió, tránh lửa, giữ xe và ắc quy thẳng, đeo găng và kính nếu phải lại gần; không mở, không nghiêng, không sạc lại, rửa nhiều nước nếu dính dung dịch.',
    'Thay xong chưa phải hết việc: nhờ thợ kiểm tra hệ thống sạc và chỗ đặt ắc quy, vì nguyên nhân gốc còn thì ắc quy mới cũng có thể hỏng theo cách cũ; ắc quy cũ giao nơi thu gom, không vứt bỏ.'
  ],
  category: 'garage',
  hub: 'dien-ac-quy',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['ắc quy chì axit', 'dung dịch axit', 'hệ thống sạc', 'bộ tiết chế chỉnh lưu', 'khí hydro', 'điểm thu gom ắc quy cũ'],
  keywords: ['ắc quy xe máy bị phồng', 'ắc quy rỉ nước', 'ắc quy có mùi lạ', 'ắc quy xe máy bị phồng phải làm sao'],
  sections: [
    P('Vì sao ắc quy xe máy bị phồng hoặc rỉ nước', [
      'Vỏ phồng, vệt nước hay mùi lạ đều báo cùng một chuyện: bên trong ắc quy đang sinh khí nhiều hơn mức vỏ chịu nổi, hoặc dung dịch axit đã tìm được đường thoát ra ngoài. Câu trả lời cho người đang phân vân là đừng chạy tiếp, đừng sạc lại và đừng tự mở; các phần sau giải thích lý do và cách giữ an toàn trong lúc chờ thợ. Ắc quy thông dụng trên xe máy là loại chì axit, gồm ắc quy nước có nắp châm và ắc quy khô kín, như bài về cấu tạo và cách bảo quản đã trình bày. Hai loại này hỏng theo hai kiểu: loại nước thường rỉ dung dịch qua nắp và lỗ thông hơi, loại khô kín thường phồng vỏ vì khí không thoát kịp.',
      'Thủ phạm hàng đầu là sạc quá mức. Máy phát nạp điện cho ắc quy qua bộ tiết chế chỉnh lưu, bộ phận giữ điện áp sạc vừa phải; bộ này hỏng hoặc kém thì điện áp bị đẩy cao, nước trong dung dịch phân giải thành khí nhanh hơn và ắc quy nóng dần lên. Bộ sạc rời dùng sai chế độ hoặc cắm quá lâu cho kết quả tương tự. Nhiệt cao đứng thứ hai: ắc quy nằm sát ống xả hay khối máy, thiếu tấm chắn nhiệt, hoặc xe hay đỗ dưới nắng gắt đều làm phản ứng bên trong mạnh lên, nước hao nhanh và vỏ nhựa mềm đi. Hai yếu tố này hay đi chung và tiếp sức cho nhau, nên người dùng thường chỉ nhận ra khi vỏ đã biến dạng.',
      'Tuổi đời, hư hỏng bên trong và xả sâu là nhóm còn lại. Ắc quy già có bản cực mòn, có thể chạm nhau hoặc bị vật liệu rụng nối tắt làm chập một ngăn; ngăn chập nóng lên và sinh khí, trong khi hệ thống sạc vẫn cố nạp, nên ắc quy phồng dù phần điện của xe còn bình thường. Ắc quy từng xả sâu nhiều lần cũng dễ nóng và sinh khí khi bị sạc dồn, vì khả năng nhận điện đã kém. Tùy loại ắc quy, còn có những lý do riêng: ắc quy nước rỉ vì châm nước cất quá vạch, vì xe đổ nghiêng, hay ống thoát hơi bị gập hoặc tắc; mọi loại đều có thể nứt vỏ do va chạm hay đai giữ lỏng làm ắc quy rung xóc.'
    ]),
    P('Những dấu hiệu bắt buộc phải ngừng dùng ngay', [
      'Chỉ cần một trong bốn dấu hiệu sau xuất hiện là bạn nên ngừng dùng xe: vỏ phồng, dung dịch lộ ra ngoài, mùi lạ, hoặc ắc quy nóng bất thường. Không cần đủ cả bốn. Đề chậm hay đèn mờ đơn thuần là dấu hiệu ắc quy yếu, đã có bài riêng, chưa phải tình huống phải dừng ngay. Phồng vỏ dễ nhận nhất khi nhìn từ phía khoang chứa: hai mặt bên cong ra, nắp vồng lên như mui, ắc quy chật hơn lúc mới lắp so với khung đỡ và đai giữ, hoặc đáy không còn phẳng. Nhựa đã bị kéo giãn thì thường không xẹp lại, và xe vẫn đề nổ bình thường cũng không chứng minh được gì về độ an toàn.',
      'Dấu hiệu thứ hai là dung dịch lộ ra: vệt ướt hoặc bóng dầu quanh nắp và đường nối vỏ, giọt nhỏ trên khung hay mặt đất dưới xe, cặn trắng hoặc xanh lục ẩm quanh cực, sơn khung nổi bọt hay xỉn màu gần chỗ đặt. Cần phân biệt với lớp bụi trắng mỏng và khô ở cực, vốn là chuyện bảo dưỡng và nên nhờ thợ làm sạch trong lần kiểm tra thường kỳ. Vệt ướt mới, cặn ẩm mọc lại sau khi lau hay dung dịch chảy thành dòng mới là rỉ thật. Đừng chạm tay trần để thử xem là nước hay axit, vì mắt thường không phân biệt được; mọi chất lỏng ở đó đều phải coi là axit.',
      'Dấu hiệu thứ ba là mùi lạ, có khi đến trước cả lúc vỏ biến dạng. Mùi trứng thối thường liên quan đến khí chứa lưu huỳnh sinh ra khi ắc quy bị sạc quá mức hoặc hỏng bên trong; mùi chua gắt, xộc vào mũi có thể là hơi axit. Ắc quy khỏe không có hai mùi này. Mùi khét của dây điện cũng có thể bốc ra từ khoang này, và bài về mùi khét giúp phân biệt các loại mùi, nhưng mùi lạ nào gần ắc quy cũng nên xử lý như nguy cơ. Dấu hiệu thứ tư là nhiệt: hơi nóng tỏa ra rõ rệt dù máy đã tắt một lúc. Kèm theo bóng đèn hay cháy hoặc đèn pha chói khi tăng ga thì nhiều khả năng hệ thống sạc đang đẩy điện quá cao.'
    ]),
    P('Nguy cơ từ axit và khí dễ cháy khi đứng gần ắc quy', [
      'Chất lỏng trong ắc quy chì axit là dung dịch axit sunfuric loãng, đủ mạnh để gây bỏng da, làm tổn thương mắt, làm mục vải, bong sơn và ăn mòn kim loại. Ắc quy khô kín không phải là hết axit: dung dịch chỉ được giữ trong lớp vật liệu hút hoặc dạng gel, nên vỏ nứt hay rạn vì phồng vẫn có thể để dung dịch thấm ra ngoài. Giọt nhỏ trên yên, trên sàn hay trong hộc đồ khó nhận ra ngay, nên người vô tình chạm vào rất dễ bị dính. Hơi bốc ra từ dung dịch làm rát mũi họng, vì thế đừng cúi sát để ngửi. Với trẻ nhỏ và vật nuôi, nên đưa xe ra xa nơi chúng chơi cho tới khi thợ xử lý xong.',
      'Nguy cơ thứ hai khó thấy hơn: khí. Khi sạc quá mức, nước trong dung dịch bị phân giải thành hydro và oxy. Hydro rất dễ cháy, nhẹ nên lan nhanh, và nếu tích đủ nhiều ở chỗ kín thì một tia lửa là có thể gây nổ. Khoang dưới yên, hộc đựng đồ, nhà để xe đóng kín hay phòng có xe dựng trong nhà đều là nơi khí dễ đọng. Vỏ phồng là bằng chứng khí đã bị giữ lại bên trong; vỏ chịu áp càng cao thì khi vỡ càng văng cả dung dịch lẫn mảnh nhựa. Không ngửi thấy mùi cũng chưa phải tín hiệu yên tâm, vì hydro không có mùi.',
      'Trên xe máy, tia lửa xuất hiện ở nhiều chỗ hơn người ta nghĩ: cực ắc quy lúc rút hoặc cắm dây, rơ-le đề, đầu nối lỏng, và cả kẹp của bộ sạc rời lúc gắn hay tháo. Lửa trần, bật lửa, điếu thuốc, bếp hay bình gas để gần còn rõ ràng hơn. Vì vậy đề điện, cắm sạc, rút hay cắm lại dây cực vào một ắc quy đang phồng đều không nên, kể cả khi chỉ thử một lần. Ắc quy chập bên trong còn có thể nóng lên bất ngờ, làm mềm vỏ nhựa và các chi tiết xung quanh. Tóm lại, axit gây hại khi chạm, khí gây hại khi gặp lửa, và cách giảm rủi ro chung là giữ khoảng cách, không đụng chạm, không tạo tia lửa.'
    ]),
    P('Xử lý tạm thời an toàn tại chỗ', [
      'Việc đầu tiên là dừng dùng xe một cách có kiểm soát. Đang chạy mà ngửi thấy mùi hay thấy khói, hãy bóp phanh, dừng xe an toàn ở chỗ thoáng rồi tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ. Sau đó dắt xe ra nơi thoáng gió, xa người, xa lửa và vật dễ cháy, không để trong nhà hay hầm kín. Chống xe cho vững và thẳng, không dựng nghiêng hay đặt nằm vì dung dịch có thể tràn qua nắp. Không hút thuốc, không châm lửa quanh đó. Hãy để ắc quy yên chỗ cũ, đừng tự tháo cực hay rút dây, vì tia lửa nhỏ ở cực là thứ cần tránh nhất.',
      'Phải lại gần để xem hoặc che chắn thì đeo găng chịu hóa chất cùng kính bảo hộ, mặc áo dài tay và đứng ở đầu gió để hơi bay đi chỗ khác, đừng chồm sát mặt vào ắc quy. Không mở nắp, không cạy van, không châm thêm nước cất hay dung dịch, không bóp hoặc ép vào chỗ vỏ phồng, và không sạc lại, vì sạc chỉ khiến một ắc quy đã không giữ nổi áp suất sinh thêm khí. Cũng đừng tự khoét lỗ hay xả khí để cứu. Da hoặc quần áo dính dung dịch thì rửa ngay dưới thật nhiều nước sạch; dung dịch bắn vào mắt thì xả nước sạch liên tục ngay rồi đến cơ sở y tế; da còn rát hay đỏ cũng nên nhờ người có chuyên môn y tế xem.',
      'Phần còn lại thuộc về thợ. Tiệm gần thì dắt xe đi khi máy đã tắt, giữ xe thẳng; tiệm xa thì nhờ dịch vụ vận chuyển xe thay vì nổ máy chạy tiếp cho tới nơi, vì đề máy và chạy xe có thể làm tình trạng nặng thêm. Báo trước tình trạng thấy được để thợ chuẩn bị găng và dụng cụ phù hợp. Ghi lại vài chi tiết giúp tìm nguyên nhân: mùi xuất hiện từ lúc nào, bóng đèn có hay cháy không, gần đây có dùng bộ sạc rời không, xe có đổ hay va chạm không. Thấy khói, lửa hoặc dung dịch chảy thành dòng thì lùi ra xa, giữ người khác tránh ra và gọi hỗ trợ khẩn cấp, đừng lại gần xử lý.'
    ]),
    P('Sau khi thay ắc quy: tìm nguyên nhân để không lặp lại', [
      'Thay ắc quy mới chỉ xử lý hậu quả. Nếu nguyên nhân là điện áp sạc quá cao hay nhiệt, ắc quy mới sẽ đi vào đúng con đường cũ; bài về cấu tạo và cách bảo quản cũng lưu ý rằng ắc quy mới thay mà vẫn yếu thường là lỗi ở bên nạp điện. Vì vậy hãy nhờ thợ kiểm tra hệ thống sạc ngay trong buổi thay: đo điện áp ở hai cực khi máy chạy ở các vòng tua khác nhau, đối chiếu với giá trị cho phép trong sách hướng dẫn, và xem bộ tiết chế chỉnh lưu, giắc cắm, dây nối đất có chắc, có cháy xém hay đổi màu vì nóng không. Việc này cần đồng hồ đo và hiểu biết, nên bạn chỉ cần xin thợ giải thích kết quả.',
      'Ngoài hệ thống sạc còn vài chỗ đáng soát lại. Về vị trí đặt: ắc quy có bị ống xả hay khối máy hắt nhiệt, tấm chắn và nắp hộc còn đủ không, xe có hay đỗ nắng gắt không. Về loại ắc quy: loại và cỡ mới phải khớp khuyến nghị trong sách hướng dẫn, vì ắc quy nước và ắc quy khô thoát khí khác nhau. Với ắc quy nước, ống thoát hơi (nếu xe có) phải không gập, không tắc và đi đúng đường; đai giữ không lỏng để ắc quy xóc, cũng không ép chặt vào vỏ. Thiết bị gắn thêm nối thẳng vào ắc quy và bộ sạc rời không đúng loại hay cắm quá lâu cũng cần xem lại. Thợ tìm nguyên nhân nhanh hơn khi nghe đúng thói quen thật của bạn.',
      'Vài tuần đầu sau khi thay, hãy theo dõi bằng những quan sát đơn giản: khoang ắc quy không nóng bất thường sau chuyến đi dài, vỏ vẫn phẳng, không có mùi lạ hay vệt ướt, bóng đèn không cháy liên tục, đèn pha không chói lên khi tăng ga. Dấu hiệu nào quay lại thì báo thợ ngay, đừng chờ ắc quy hỏng lần nữa. Ắc quy cũ chứa axit và chì nên không được vứt vào thùng rác, không đổ dung dịch ra cống hay mặt đất; hãy giao cho nơi thay ắc quy hoặc điểm thu gom ắc quy đã qua sử dụng để họ xử lý đúng cách. Ắc quy phồng càng không nên để lại góc nhà: giữ thẳng đứng, đeo găng khi chạm và đưa đi sớm.'
    ])
  ],
  checklist: [
    'Vỏ ắc quy còn phẳng hay đã phồng: hai mặt bên cong ra, nắp vồng lên, ắc quy chật hơn lúc mới lắp so với khung đỡ và đai giữ.',
    'Có vệt ướt, cặn trắng hoặc xanh ẩm quanh nắp, đường nối vỏ và cực, hay giọt nhỏ trên khung và mặt đất dưới xe không; chỉ nhìn, không chạm tay trần.',
    'Có mùi trứng thối hoặc chua gắt gần khoang ắc quy không; đứng ở đầu gió và cách xa khi ngửi, không cúi sát.',
    'Khoang ắc quy có tỏa hơi nóng rõ rệt khi máy đã tắt một lúc, bóng đèn có hay cháy hoặc đèn pha có chói bất thường khi tăng ga không.',
    'Ghi lại thời điểm mùi xuất hiện, thói quen dùng bộ sạc rời, va chạm gần đây và chụp ảnh chỗ phồng, vệt ướt để đưa thợ.'
  ],
  steps: [
    { title: 'Dừng xe và tắt điện an toàn', detail: 'Bóp phanh, dừng xe an toàn ở chỗ thoáng, tắt máy bằng công tắc tắt máy hoặc đưa khóa điện về vị trí tắt, không xoay sang vị trí khóa cổ; không đề lại, không rút hay cắm dây.' },
    { title: 'Đưa xe ra xa lửa và người', detail: 'Dắt xe tới nơi thoáng gió, xa nguồn lửa và vật dễ cháy, không hút thuốc; chống xe thẳng và vững, không nghiêng xe hay ắc quy, không mở nắp, không sạc lại.' },
    { title: 'Bảo vệ bản thân khi phải lại gần', detail: 'Đeo găng chịu hóa chất và kính bảo hộ, đứng đầu gió và nghiêng người thay vì chồm sát; da hay quần áo dính dung dịch thì rửa ngay thật nhiều nước; bắn vào mắt thì xả nước sạch liên tục rồi đến cơ sở y tế; da còn rát thì nhờ người có chuyên môn y tế.' },
    { title: 'Nhờ thợ thay và tìm nguyên nhân', detail: 'Báo trước tình trạng cho thợ, nhờ thay ắc quy cùng buổi kiểm tra hệ thống sạc và chỗ đặt; giao ắc quy cũ cho nơi thu gom, không vứt bỏ.' }
  ],
  warnings: [
    'Không đề máy, không sạc, không rút hay cắm lại dây cực khi ắc quy đang phồng, rỉ nước hoặc có mùi lạ: tia lửa gặp khí tích tụ có thể gây nổ và văng axit.',
    'Không tự mở nắp, cạy van, châm thêm nước, bóp vỏ phồng hay nghiêng ắc quy; không chạm tay trần vào dung dịch và không cúi sát mặt để ngửi.',
    'Không cố chạy tiếp cho tới tiệm khi vỏ phồng, vỏ nóng hoặc dung dịch đang nhỏ giọt; thấy khói, lửa hay dung dịch chảy thành dòng thì lùi ra xa và gọi hỗ trợ khẩn cấp.'
  ],
  notes: [
    'Bài nói về ắc quy chì axit thông dụng trên xe máy, gồm loại nước và loại khô kín; ắc quy loại khác, như ắc quy lithium, có yêu cầu và nguy cơ riêng nên hãy theo sách hướng dẫn của nhà sản xuất và hỏi thợ.',
    'Nội dung là kiến thức chung để nhận biết và giữ an toàn, không thay cho việc kiểm tra của thợ có dụng cụ đo; vị trí ắc quy, ống thoát hơi hay giá trị điện áp sạc khác nhau tùy xe. Phần về da và mắt chỉ gồm rửa nhiều nước và nhờ người có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hệ thống điện, ắc quy và hệ thống sạc của đúng dòng xe',
    'Hướng dẫn và cảnh báo an toàn của nhà sản xuất ắc quy ghi trên nhãn hoặc kèm theo ắc quy'
  ],
  related: ['ac-quy-xe-may-cau-tao-va-cach-bao-quan', 'ac-quy-kho', 'xe-may-co-mui-khet-nguyen-nhan-va-cach-xu-ly', 'ac-quy-yeu', 'loc-dien-xe-may']
};
