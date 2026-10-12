// AI WIKI TOTAL — S01100 (topic V2 T001125); quy trình đối chiếu mã theo xe, câu hỏi cho người bán và cách lưu bằng chứng, không nêu giá, tên nơi bán hay quy định pháp luật.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'mua-phu-tung-xe-may-online',
  title: 'Mua phụ tùng xe máy trực tuyến: đối chiếu mã phụ tùng với xe và điều kiện đổi trả',
  seoTitle: 'Mua phụ tùng xe máy online: đối chiếu mã với xe, hỏi rõ đổi trả',
  metaDescription: 'Mua phụ tùng xe máy online không nhầm mã: đối chiếu theo số khung hoặc tem thông tin, câu cần hỏi người bán, kiểm hàng khi nhận và xử lý khi hàng không khớp.',
  summary: 'Bài hướng dẫn người mua phụ tùng xe máy trực tuyến tránh nhầm mã và nhầm đời xe. Nội dung gồm những rủi ro thường gặp, quy trình đối chiếu mã phụ tùng với số khung hoặc tem thông tin của đúng chiếc xe, các câu hỏi nên hỏi người bán trước khi đặt hàng, cách kiểm tra hàng khi nhận và lưu bằng chứng, rồi các bước xử lý khi hàng không khớp dựa trên điều kiện đổi trả đã thỏa thuận.',
  quickAnswer: 'Hãy xuất phát từ chiếc xe của bạn: dùng số khung, số máy hoặc tem thông tin để tra mã trong danh mục của nhà sản xuất, rồi nhờ người bán xác nhận bằng tin nhắn chữ rằng đúng mã đó lắp vừa xe này, kèm điều kiện đổi trả. Khi nhận hàng, quay video mở gói và so với chi tiết cũ; nếu không khớp, dừng lắp, giữ bằng chứng và báo người bán theo chính sách đổi trả đã thỏa thuận.',
  keyPoints: [
    'Việc tìm mã phụ tùng phải bắt đầu từ chính chiếc xe của bạn, qua số khung hoặc tem thông tin rồi sang danh mục của nhà sản xuất, không bắt đầu từ lời giới thiệu trong bài đăng.',
    'Tên xe kèm năm sản xuất là mô tả quá rộng; cùng một dòng xe có thể có nhiều phiên bản với chi tiết khác nhau.',
    'Hỏi người bán bằng chữ viết về mã, phạm vi áp dụng, loại hàng và điều kiện đổi trả trước khi đặt, và lưu cả câu hỏi lẫn câu trả lời.',
    'Quay video liên tục khi mở gói và so hàng với chi tiết cũ ngay ngày nhận; còn nghi ngờ thì chưa lắp, không dùng lực, không gia công cho vừa.',
    'Căn cứ thực tế để đổi trả là chính sách đã thỏa thuận lúc đặt hàng, nên hãy lưu chính sách, tin nhắn xác nhận, video mở gói và ảnh so sánh.'
  ],
  category: 'market',
  hub: 'gia-phu-tung',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['phụ tùng xe máy', 'mã phụ tùng', 'số khung', 'tem thông tin xe', 'chính sách đổi trả', 'bằng chứng nhận hàng'],
  keywords: ['mua phụ tùng xe máy online', 'mua nhầm phụ tùng online', 'đổi trả phụ tùng xe máy', 'đặt phụ tùng xe máy qua mạng'],
  sections: [
    P('Những rủi ro hay gặp khi mua phụ tùng qua mạng', [
      'Mua nhầm phụ tùng vì sai mã hoặc sai đời xe là rủi ro đầu tiên khi mua phụ tùng xe máy online, và nhiều trường hợp bắt nguồn từ hiểu nhầm chứ không phải ý xấu của người bán. Ở cửa hàng, thợ đặt chi tiết cũ cạnh hàng mới là thấy ngay chỗ lệch; trên mạng, mối nối giữa phụ tùng và chiếc xe của bạn chỉ còn là chữ và ảnh: tên bài đăng, danh sách xe tương thích, vài tin nhắn. Cùng một dòng xe có thể có nhiều phiên bản, và nhà sản xuất có thể đổi chi tiết giữa các lô dù hình dáng gần như không đổi. Tên gọi thông dụng của chi tiết lại khác nhau theo vùng và theo thợ, nên mô tả bằng lời dễ bị hiểu theo hai cách.',
      'Lỗi không khớp thường rơi vào bốn nhóm. Nhóm đầu là sai phiên bản: chi tiết trông giống hệt nhưng khác vị trí lỗ bắt, hình dạng giắc cắm, chiều dài hoặc hướng lắp. Nhóm thứ hai là sai vị trí hay quy cách bán, như nhầm bên trái với bên phải, phía trước với phía sau, hoặc mua một chiếc trong khi xe cần cả cặp. Nhóm thứ ba là thiếu thành phần đi kèm như ốc, vòng đệm hay gioăng. Nhóm cuối liên quan đến tình trạng hàng: đã qua sử dụng nhưng mô tả mơ hồ, bao bì từng bị mở hoặc hư hại khi vận chuyển. Biết mình gặp nhóm nào giúp bạn nói đúng vấn đề với người bán và dẫn đúng điều khoản đổi trả.',
      'Vì thường không thể cầm hàng trước khi trả tiền, thứ bảo vệ bạn là hồ sơ chứ không phải niềm tin. Căn cứ thực tế để đổi trả là chính sách mà người bán công bố và hai bên chấp nhận lúc đặt hàng, nên trước khi thanh toán cần có trong tay ba thứ: mã lấy từ chính chiếc xe, lời xác nhận bằng chữ viết của người bán và điều kiện đổi trả nêu rõ. Vài dấu hiệu nên khiến bạn hỏi thêm: bài đăng chỉ ghi dùng được cho nhiều dòng xe mà không kèm mã, ảnh lấy từ danh mục thay vì hàng thật, người bán xác nhận lắp vừa mà không hỏi gì về xe, hoặc né chuyện đổi trả. Chúng chưa chứng minh gian dối, chỉ là lý do để chậm lại.'
    ]),
    P('Đối chiếu mã phụ tùng với đúng chiếc xe của bạn', [
      'Nguyên tắc nền tảng là mã phải xuất phát từ chiếc xe của bạn chứ không từ bài đăng. Chuỗi đối chiếu đáng tin gồm ba mắt xích: thông tin nhận dạng xe, danh mục phụ tùng của nhà sản xuất và mã người bán nêu trên hàng thật. Ở mắt xích đầu, số khung gắn với từng chiếc xe cụ thể và là căn cứ xác định đúng phiên bản, số máy gắn với cụm động cơ, còn tem thông tin thường ghi kiểu loại hay màu sơn, dán ở vị trí tùy xe. Tem có thể mờ hoặc bị thay trên xe lâu năm, nên số khung vẫn là căn cứ chính. Cách tìm và đọc số khung, số máy đã có trong bài tra cứu thông số; ở đây chỉ cần chụp rõ và lưu sẵn.',
      'Mắt xích thứ hai là danh mục phụ tùng của nhà sản xuất, tài liệu có hình tách rời từng cụm và mã của từng chi tiết. Danh mục thường có ở đại lý ủy quyền hoặc cửa hàng phụ tùng có chuyên môn, và họ có thể tra giúp bằng số khung. Hãy nhờ ghi lại mã cùng phạm vi áp dụng, vì danh mục thường cho biết chi tiết dùng cho xe sản xuất trong giai đoạn nào, tùy hãng. Mắt xích thứ ba là mã người bán ghi cho món hàng thật, phải trùng với mã bạn tra được. Hãng có thể cập nhật mã theo thời gian nên mã khác chưa chắc là sai, nhưng người bán cần giải thích bằng chữ viết. Đừng đối chiếu bằng tên gọi; mã và hình ảnh ít gây nhầm hơn.',
      'Chi tiết cũ tháo ra chỉ là nguồn kiểm tra phụ: dùng để loại trừ chứ không để khẳng định. Đặt nó cạnh ảnh hàng thật của người bán rồi so hình dạng, vị trí lỗ bắt, giắc cắm và chiều dài; thấy khác là dấu hiệu dừng lại. Ngược lại, hàng mới giống hệt, trùng cả dãy ký tự đúc nổi hay in trên chi tiết cũ, vẫn chưa đủ để kết luận. Ký tự trên chi tiết cũ có thể đã mòn mờ, bản thân nó có thể từng được thợ hoặc chủ trước thay bằng loại khác, và một số dãy ký tự chỉ là mã khuôn hay mã nhà cung ứng chứ không phải mã trong danh mục. Chỉ một mắt xích không khớp là phải dừng lại hỏi; đừng cho rằng gần giống chắc dùng được.'
    ]),
    P('Những câu hỏi nên hỏi người bán trước khi đặt hàng', [
      'Trước hết là các câu hỏi về sự khớp. Hãy gửi mã bạn đã tra cùng ảnh số khung hoặc tem thông tin, chỉ chụp phần cần thiết, không kèm giấy đăng ký hay giấy tờ cá nhân, rồi hỏi: mã này có dùng cho đúng chiếc xe này không, và hàng thật sẽ giao in mã nào. Hỏi thêm bài đăng áp dụng cho khoảng đời xe nào, chi tiết dùng bên trái hay bên phải, bán theo chiếc, cặp hay bộ, và trong bộ gồm những gì. Người bán cẩn thận thường hỏi ngược lại thông tin xe hoặc nhờ chụp chi tiết cũ; câu trả lời kiểu lắp vừa hết, không kèm mã hay điều kiện, đáng được hỏi lại. Đề nghị xác nhận bằng tin nhắn chữ, dễ lưu và dễ dẫn lại hơn tin nhắn thoại.',
      'Nhóm tiếp theo nói về món hàng thật bạn sẽ nhận. Hỏi hàng mới hay đã qua sử dụng, nguồn gốc ra sao, thuộc loại chính hãng hay loại thay thế, và đề nghị ghi điều đó vào đơn. Loại thay thế có chấp nhận được với từng bộ phận hay không là một chủ đề riêng; ở đây chỉ cần người bán gọi đúng tên loại hàng. Tiếp đến, xin ảnh hoặc đoạn video chính món hàng sẽ giao, thấy rõ mã in trên chi tiết hoặc bao bì, thay vì ảnh minh họa dùng chung. Với chi tiết dễ vỡ như kính đèn, nhựa ốp hay cụm đồng hồ, hãy hỏi cách đóng gói. Cuối cùng là cách vận chuyển, mã theo dõi, hóa đơn và chế độ bảo hành nếu có.',
      'Phần thứ ba là chính sách đổi trả, thứ cần rõ trước chứ không phải sau khi xảy ra sự cố. Hãy hỏi trường hợp nào được đổi: hàng giao sai so với đơn, hàng không khớp xe dù người bán đã xác nhận, người mua đặt nhầm mã, hàng hư hại khi vận chuyển. Hỏi tiếp thời hạn báo tính từ lúc nhận, điều kiện hàng khi trả như chưa lắp và còn nguyên bao bì hay tem, ai chịu phí vận chuyển chiều về, được đổi hàng hay hoàn tiền, và có được mở gói để kiểm tra không. Chụp màn hình chính sách cùng các câu trả lời, vì bài đăng có thể bị sửa hoặc gỡ sau khi bạn đặt. Chỗ nào còn mơ hồ, hãy nhờ người bán viết rõ trước khi thanh toán.'
    ]),
    P('Kiểm tra hàng ngay khi nhận và lưu bằng chứng', [
      'Việc kiểm tra bắt đầu từ bên ngoài gói hàng, trước khi mở. Xem bao bì có rách, móp, ướt hay dán lại không, và nhãn giao hàng có đúng tên người nhận cùng mã đơn như bạn đặt không. Nếu điều khoản vận chuyển đã thỏa thuận cho phép kiểm tra trước khi ký nhận hoặc thanh toán, hãy tận dụng; nếu không, chụp ảnh cả gói cùng nhãn giao hàng trước khi cắt băng dính. Gói hư hại nặng nên được ghi nhận ngay lúc giao, trước mặt người giao, thay vì để về nhà mới nói. Hãy mở gói ngay trong ngày nhận, lúc đủ ánh sáng và thời gian, vì thời hạn báo hàng không khớp thường tính từ lúc nhận và để lâu thì khó chứng minh hàng đã sai từ đầu.',
      'Quay video liên tục từ lúc gói còn nguyên: lia qua nhãn giao hàng, chỗ cắt băng dính, từng món lấy ra, rồi chiếu rõ mã in trên bao bì và chi tiết. Đặt hàng mới cạnh chi tiết cũ để so hình dạng, lỗ bắt và giắc cắm cùng lúc, rồi kiểm đủ thành phần trong bộ so với đơn. Đừng dừng quay hay cắt ghép giữa chừng, vì đoạn liền mạch thuyết phục hơn vài ảnh rời; giữ nguyên tệp gốc. Hạn chế gỡ màng bọc, tem hay niêm phong của chi tiết khi chưa chắc hàng đúng; nếu buộc phải mở để đọc mã, hãy quay lại thao tác đó. Kiểm tra chỉ gồm đặt cạnh và quan sát: không ép lắp thử, không siết ốc, không chạy thử xe với chi tiết còn nghi ngờ.',
      'Bộ hồ sơ nên có bốn lớp. Lớp thứ nhất là những gì người bán đã hứa: ảnh chụp màn hình bài đăng, mô tả, danh sách xe tương thích và chính sách đổi trả. Lớp thứ hai là trao đổi: toàn bộ tin nhắn, nhất là đoạn người bán xác nhận hàng khớp xe bạn. Lớp thứ ba là giao dịch: xác nhận đặt hàng, thanh toán, hóa đơn và mã vận đơn. Lớp thứ tư là bằng chứng nhận hàng: video, ảnh bao bì, ảnh so sánh với chi tiết cũ, kèm ảnh số khung hoặc tem thông tin cho thấy bạn đối chiếu theo đúng chiếc xe nào. Gom vào một thư mục theo từng đơn, đặt tên theo ngày và tên chi tiết, sao lưu thêm một nơi và giữ đến khi việc xử lý xong.'
    ]),
    P('Xử lý khi phụ tùng nhận về không khớp với xe', [
      'Bước đầu tiên là dừng lại: không lắp, không ép, không mài hay khoan cho vừa, và giữ nguyên hiện trạng hàng cùng bao bì. Ép lắp có thể làm hỏng ren, vỏ hoặc giắc cắm trên xe, còn chi tiết đã gia công hay đã dùng thường không còn đủ điều kiện để trả. Nếu chi tiết cũ đã tháo ra mà xe đang cần đi, hãy nhờ thợ xử lý; riêng phanh, lốp, xích truyền động và các chi tiết điện, không đi xe khi chi tiết đó đang thiếu hoặc còn nghi ngờ. Sau đó xác định trường hợp của mình: người bán giao sai so với đơn, hàng đúng đơn nhưng không khớp xe dù đã xác nhận, bạn đặt nhầm mã, hay hàng hư hại.',
      'Người bán cần được báo sớm, qua đúng kênh đã dùng để đặt hàng. Một tin nhắn tốt ngắn gọn và dựa trên sự việc: mã đơn, món bạn đặt, món bạn nhận, điểm khác cụ thể như vị trí lỗ bắt, giắc cắm hay mã in trên hàng, kèm ảnh và video. Dẫn lại câu xác nhận trước đó của người bán và đoạn chính sách đổi trả liên quan, rồi nêu đề nghị phù hợp với trường hợp của bạn, chẳng hạn đổi đúng mã hoặc hoàn tiền theo chính sách đã thỏa thuận. Giữ giọng bình tĩnh, tránh quy kết, vì nhiều trường hợp chỉ là hiểu nhầm. Yêu cầu người bán trả lời bằng chữ về cách trả hàng: nơi nhận, đóng gói, đơn vị vận chuyển, bên chịu phí và thời hạn.',
      'Sau khi thống nhất, đóng gói trả hàng đúng như lúc nhận, gồm bao bì gốc, phụ kiện, tem và giấy tờ; chụp gói đã dán nhãn, gửi theo cách có mã theo dõi và giữ biên nhận đến khi xong việc đổi hoặc hoàn tiền. Chưa được người bán xác nhận cách trả thì đừng gửi, vì hàng gửi sai nơi hay sai cách có thể bị từ chối. Nếu người bán chậm trễ hoặc từ chối trái chính sách đã thỏa thuận, hãy nhắc lại kèm bộ bằng chứng, rồi dùng chức năng khiếu nại của nơi bán hoặc đơn vị trung gian; tranh chấp phức tạp thì nên tìm tư vấn từ nguồn có thẩm quyền. Hàng đổi cũng cần kiểm lại từ đầu; có phụ tùng đúng rồi, hãy ghi mã vào ghi chú về xe.'
    ])
  ],
  checklist: [
    'Chụp rõ số khung, số máy và tem thông tin của xe, lưu cùng ghi chú về dòng xe và phiên bản.',
    'Nhờ đại lý ủy quyền hoặc cửa hàng phụ tùng có chuyên môn tra mã theo số khung, ghi cả phạm vi áp dụng.',
    'Gửi thông tin xe và mã cho người bán, nhờ xác nhận bằng tin nhắn chữ; hỏi rõ loại hàng, nội dung trọn bộ và điều kiện đổi trả.',
    'Quay video liên tục khi mở gói, so mã và hình dạng với chi tiết cũ trước khi lắp.',
    'Lưu chính sách, tin nhắn, hóa đơn, mã vận đơn, video và ảnh thành một thư mục theo từng đơn hàng.'
  ],
  steps: [
    { title: 'Xác định đúng xe', detail: 'Chụp số khung, số máy và tem thông tin; ghi dòng xe, phiên bản và màu. Cách tìm các dãy số này đã có trong bài tra cứu thông số.' },
    { title: 'Lấy mã từ danh mục', detail: 'Nhờ đại lý hoặc cửa hàng phụ tùng có chuyên môn tra mã theo số khung; ghi phạm vi áp dụng và mã thay thế nếu có.' },
    { title: 'Chốt bằng chữ với người bán', detail: 'Gửi thông tin xe và mã, yêu cầu xác nhận khớp, loại hàng, nội dung trọn bộ và điều kiện đổi trả; chụp màn hình bài đăng và chính sách.' },
    { title: 'Kiểm hàng rồi mới lắp', detail: 'Quay video mở gói, so với chi tiết cũ; nếu lệch thì dừng lắp, báo người bán kèm bằng chứng theo chính sách đổi trả đã thỏa thuận.' }
  ],
  warnings: [
    'Không ép, mài, khoan hay cắt chi tiết cho vừa; làm vậy có thể hỏng cả chi tiết lẫn xe và thường làm mất điều kiện đổi trả.',
    'Với phanh, lốp, xích truyền động và hệ thống điện, chi tiết còn nghi ngờ thì không lắp và không đi xe với nó; nhờ thợ có chuyên môn xem.',
    'Không gửi trả hàng khi người bán chưa xác nhận cách trả và nơi nhận; giữ biên nhận vận chuyển cho đến khi xử lý xong.'
  ],
  notes: [
    'Bài không nêu tên nơi bán, hãng, mức giá hay điều luật; phần đổi trả dựa trên chính sách mà bạn và người bán đã thỏa thuận lúc đặt hàng.',
    'Vị trí số khung, tem thông tin và cách đọc mã phụ tùng khác nhau tùy xe và tùy hãng; hãy đối chiếu với sách hướng dẫn hoặc hỏi thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng và danh mục phụ tùng của nhà sản xuất, đúng với phiên bản xe',
    'Chính sách đổi trả và thông tin sản phẩm do người bán công bố tại thời điểm đặt hàng'
  ],
  related: ['tra-cuu-thong-so', 'bo-phan-xe-may', 'phu-tung-thay-the-xe-may-co-nen-dung', 'huong-dan-chinh-hang']
};
