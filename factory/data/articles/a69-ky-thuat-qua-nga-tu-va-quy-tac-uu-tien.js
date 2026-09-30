// AI WIKI TOTAL — bài mở rộng cụm /learn/ky-thuat-lai-xe/: kỹ thuật qua ngã tư và quy tắc ưu tiên (slot S00069)
'use strict';

module.exports = {
  slug: 'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
  title: 'Kỹ thuật qua ngã tư và quy tắc ưu tiên',
  seoTitle: 'Kỹ thuật qua ngã tư và quy tắc ưu tiên xe máy',
  metaDescription: 'Qua ngã tư an toàn cần giảm tốc sớm, quan sát hai bên, hiểu đúng quy tắc ưu tiên và tránh đua đèn vàng. Bài viết hướng dẫn kỹ thuật vào cua và nhường đường đúng luật.',
  summary: 'Ngã tư là nơi giao thông hai bánh dễ va chạm nhất: các dòng xe cắt nhau từ bốn hướng, người đi thẳng gặp người rẽ, người rẽ gặp người ngược chiều cũng muốn rẽ, và mọi phán đoán sai đều diễn ra trong bán kính vài mét. Bài viết này tách kỹ thuật qua ngã tư thành hai tầng rõ ràng. Tầng thứ nhất là kỹ thuật lái: giảm tốc trước khi tới, đặt xe đúng làn theo hướng đi, quét hai bên theo thứ tự ngược chiều kim đồng hồ, chọn đúng thời điểm vào và giữ tốc độ đều khi đã quyết định qua. Tầng thứ hai là quy tắc ưu tiên theo Luật Giao thông đường bộ: xe nào được đi trước, xe nào phải nhường, cách xử lý khi hai xe cùng lúc tới giao lộ, quy tắc với xe đang đi trên đường ưu tiên, và những tình huống đời thường như ngã tư không đèn, ngã tư có đèn và ngã tư có vòng xuyến. Bài cũng chỉ ra các lỗi phổ biến khiến người lái xe máy bị thương: đua đèn vàng, rẽ không đổn mở cua, dừng quá vạch, và chuyển làn ngay giữa giao lộ — kèm cách sửa từng lỗi bằng thói quen cụ thể.',
  quickAnswer: 'Trả lời ngắn: qua ngã tư an toàn theo bốn bước. Một, giảm tốc từ xa và nhìn trước: dấu hiệu giao lộ, biển báo, đèn tín hiệu và dòng xe phía trước cho biết ngã tư kiểu gì. Hai, vào đúng làn theo hướng đi: rẽ trái thì sát làn trái, rẽ phải thì sát làn phải, đi thẳng thì giữ làn giữa — quyết định làn trước ngã tư, không đổi làn giữa giao lộ. Ba, quét hai bên theo thứ tự: nhìn trái trước vì dòng xe từ trái tới trước, rồi phải, rồi trái lần nữa khi lăn bánh; tại ngã tư không đèn, xe đến trước đi trước, xe từ đường chính được ưu tiên so với đường nhánh. Bốn, giữ tốc độ đều khi đã vào giao lộ: không dừng cà nhắc giữa dòng xe cắt, không tăng ga vượt; nếu đèn vàng bật khi gần vạch thì phanh dứt khoát phía sau vạch chứ không lao qua. Quy tắc ưu tiên cốt lõi: nhường xe đang đi trên đường bạn sắp đi vào, nhường người đi bộ qua đường nơi có vạch, và khi cùng rẽ trái với xe ngược chiều thì ôm cua nhỏ tránh cắt mặt nhau.',
  keyPoints: [
    'Giảm tốc và nhìn trước từ xa: nhận biết ngã tư qua biển báo, đèn và dòng xe trước khi tới nơi.',
    'Đặt đúng làn trước ngã tư theo hướng đi, tuyệt đối không đổi làn giữa giao lộ.',
    'Quét hai bên theo thứ tự trái – phải – trái, và duy trì quan sát cả khi đã vào giao lộ.',
    'Ngã tư không đèn: xe đến trước đi trước, đường chính ưu tiên đường nhánh, nhường người đi bộ.',
    'Đèn vàng gần vạch thì phanh dứt khoát sau vạch, không đua đèn vàng — lỗi gây va chạm nhiều nhất.',
    'Cùng rẽ trái với xe ngược chiều thì giữ cua sát nhỏ, tránh hai xe cắt mặt nhau giữa giao lộ.',
  ],
  category: 'learn',
  hub: 'ky-thuat-lai-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['ngã tư', 'quy tắc ưu tiên', 'đèn tín hiệu', 'làn đường', 'nhường đường', 'vạch dừng'],
  keywords: ['kỹ thuật qua ngã tư', 'quy tắc ưu tiên giao thông', 'đi xe máy qua ngã tư', 'nhường đường ngã tư', 'đèn vàng có nên qua', 'rẽ trái tại ngã tư'],
  sections: [
    {
      h2: 'Vì sao ngã tư là điểm nóng va chạm của xe máy',
      html: `<p>Mọi chuyến đi đều phải xuyên qua giao lộ, và gần như mọi dòng xe — đi thẳng, rẽ trái, rẽ phải, người đi bộ, xe ngược chiều — đều cắt nhau tại đúng một chấm bản đồ đó. Với xe máy, nguy hiểm nhân lên vì một đặc thù: người lái xe máy ngồi cao nhìn được xa nhưng lại là phương tiện nhỏ nhất trong mớ hỗn độn, dễ nằm gọn trong điểm mù của ô tô đang chuẩn bị rẽ.</p>
<p>Phân tích các vụ va chạm tại ngã tư của xe máy thường quy về ba gốc: nhìn thấy nhưng phán đoán sai tốc độ xe kia; không nhìn thấy vì nằm điểm mù hoặc bị che khuất; và cố tình mạo hiểm — chủ yếu là đua đèn vàng hoặc vượt xe đang giảm tốc trước ngã tư. Cả ba gốc đều có chung một liệu pháp: giảm tốc, đặt xe đúng vị trí dễ thấy, và cho người khác đoán được mình muốn đi đâu.</p>
<p>Điều đáng ghi nhận là kỹ thuật qua ngã tư rẻ nhất trong mọi kỹ thuật lái — nó không cần phản xạ nhanh hay sức khỏe phi thường, chỉ cần trình tự quan sát và kỹ thuật giảm tốc đúng lúc. Bài viết này viết trình tự đó thành các bước cụ thể, kèm phần quy tắc ưu tiên theo luật để khi tình huống xảy ra, người lái biết mình được hay phải nhường.</p>`,
    },
    {
      h2: 'Chuẩn bị trước ngã tư: giảm tốc, đúng làn, báo hiệu',
      html: `<p>Quá trình an toàn của một ngã tư bắt đầu từ vài chục mét trước khi tới. Giai đoạn này làm ba việc. Giảm tốc về mức vừa đủ để phanh được và bẻ lái được nếu có xe bất ngờ — kinh nghiệm của nhiều người dạy lái là về dưới mức giới hạn của tuyến, vì ngã tư luôn có thể xuất hiện người đi bộ hoặc xe từ nhánh. Nhìn trước lấy thông tin: ngã tư có đèn không, có biển báo hiệu gì, đường nhánh có xe đang tới không, dòng xe phía trước có ai sắp rẽ làm mình bị che tầm nhìn.</p>
<p>Thứ hai, đặt xe vào đúng làn theo hướng đi của mình. Muốn rẽ trái thì chuyển dần về làn trái, muốn rẽ phải thì về làn phải, đi thẳng thì giữ làn giữa; mọi quyết định làn phải hoàn tất trước vạch dừng hoặc trước vùng giao lộ, vì giữa ngã tư là nơi đổi làn nguy hiểm nhất — xe bốn hướng đang cắt nhau, không ai đoán được một chiếc xe đột ngột lượn làn. Thứ ba, bật đèn báo rẽ sớm nếu xe có trang bị, hoặc dùng tay báo hiệu đúng cách khi xe không có; tín hiệu sớm chính là cách nói với ô tô xung quanh mình muốn đi đâu.</p>
<p>Thêm một thói quen nhỏ nhưng sống còn: khi tiến gần ngã tư có xe hơi phía trước, không bám sát nó rồi vụt ra vượt, vì xe hơi giảm tốc có thể đang nhường người đi bộ hoặc chuẩn bị rẽ. Đi chậm sau lưng nó tới khi nhìn được toàn cảnh ngã tư mới tính toán đường đi của riêng mình.</p>`,
    },
    {
      h2: 'Trình tự quan sát khi vào giao lộ',
      html: `<p>Quan sát tại ngã tư không phải liếc đại một vòng, mà theo một trình tự có chủ đích. Chuẩn phổ biến: nhìn trái trước, sau phải, rồi trái lần nữa khi bắt đầu lăn bánh. Lý do nhìn trái trước: dòng xe từ phía trái (theo hướng đi bên phải đường) tới trước các hướng khác trong hầu hết bố cục giao lộ, và một phần lớn va chạm ngã tư là xe từ bên trái cản đường xe đi thẳng.</p>
<p>Tuy nhiên thứ tự đó chỉ là khung; cái quan trọng hơn là quét liên tục chứ không quét một lần. Khi đã vào giao lộ, mắt vẫn phải rời khỏi đường trước mặt một nhịp để kiểm tra hai bên, vì xe từ hướng khác có thể xuất hiện sau lượt quét đầu — đặc biệt xe máy từ nhánh nhỏ lao ra hoặc ô tô đổi ý rẽ. Mỗi lần quét lấy thông tin theo cặp: có xe không, nó đang đi hướng nào, nó thấy mình chưa.</p>
<p>Với ngã tư rộng nhiều làn, thêm một nguyên tắc: nhìn xa trước khi nhìn gần. Kiểm tra dòng xe xa nhất trước — chúng cần thời gian dài nhất để tới — rồi mới tới dòng gần. Nhìn gần trước dễ tạo cảm giác an toàn giả: phóng ra khỏi dòng gần rồi mới thấy dòng xa đang tới với tốc độ cao. Đây cũng là lý do không nên dừng cà nhắc giữa ngã tư: mỗi lần đứng khởi động lại là một lần phải quét lại toàn bộ từ đầu giữa dòng xe đang cắt.</p>`,
    },
    {
      h2: 'Quy tắc ưu tiên theo luật: ai đi trước, ai nhường',
      html: `<p>Tại giao lộ không có đèn tín hiệu hoặc biển báo điều khiển, Luật Giao thông đường bộ quy định xe nào đến trước được đi trước; xe đến sau phải nhường. Khi hai xe tới gần như cùng lúc, xe từ bên phải của mình được ưu tiên đi trước — quy tắc nhường xe từ bên phải là quy tắc gốc cần thuộc lòng, vì nó áp dụng ở mọi giao lộ nhỏ không biển không đèn, kể cả trong khu dân cư.</p>
<p>Trên đường có phân cấp, xe đang đi trên đường ưu tiên hoặc đường chính được đi trước xe từ đường nhánh, đường nhỏ hoặc đường dành riêng; tại nơi giao cắt có biển báo hiệu hoặc vẽ sơn chỉ dẫn, tuân theo tín hiệu đó trước mọi quy tắc mặc định. Với người đi bộ đang qua đường trên vạch người đi bộ tại ngã tư, xe cơ giới phải nhường — đây vừa là quy định vừa là khuôn khổ an toàn, vì người đi bộ là phương thể yếu nhất trong mọi tình huống va chạm.</p>
<p>Một tình huống dễ nhầm nhất: hai xe máy ngược chiều cùng rẽ trái tại ngã tư không đèn. Cách xử lý an toàn chuẩn là hai xe ôm cua nhỏ gần tâm giao lộ, giữ khoảng với xe kia, không cua lớn cắt mặt kiểu vòng ra ngoài vòng ra ngoài — cua lớn khiến hai xe đối đầu nhau giữa giao lộ. Tương tự khi rẽ trái có xe ngược chiều đi thẳng: chờ nhịp xe thẳng qua rồi mới rẽ, hoặc nếu giao lộ có đèn riêng pha rẽ trái thì tuân đèn đó. Ghi nhớ ngắn gọn: quyền ưu tiên không cho phép mình mạo hiểm — khi không chắc ai được đi, nhường trước rồi qua sau vẫn nhanh hơn đứng chờ khởi động lại giữa đường.</p>`,
    },
    {
      h2: 'Đèn tín hiệu: vàng gần vạch thì xử lý thế nào',
      html: `<p>Đèn vàng là pha gây tranh cãi nhiều nhất, và cũng là pha sinh ra va chạm nhiều nhất tại ngã tư. Thói quen nguy hiểm phổ biến: thấy đèn vàng thì tăng ga để về đích trước khi đèn đỏ. Thực tế, khoảng thời gian đèn vàng ngắn và được tính cho quãng phanh an toàn — xe đã gần vạch thì phanh được, và nếu phải tăng ga mới kịp thì tức là khi đèn đỏ bật, mình vẫn còn nằm giữa giao lộ.</p>
<p>Cách xử lý chuẩn: khi tới gần ngã tư, nhìn tín hiệu kèm ước lượng quãng cách còn lại. Nếu đèn xanh đã bật lâu — tức sắp sang — chủ động giảm sẵn tốc độ về mức có thể dừng hẳn sau vạch. Nếu đèn vàng bật khi còn cách vạch một khoảng phanh được, phanh dứt khoát phía sau vạch dừng, giữ nguyên vị trí chờ pha kế; nếu đã vượt qua vạch khi đèn vàng bật thì đi tiếp bằng tốc độ đều và mau rời giao lộ chứ không dừng khựng giữa ngã tư.</p>
<p>Đèn xanh cũng cần kỹ thuật: khi đèn mới bật, đừng bắn ga tức thì. Bên kia đang có xe chạy vẹo đèn vàng hoặc ô tô tải còn đang lọt trong giao lộ chưa thoát; cho dòng bên kia hai giây thoát ra rồi mới lăn bánh, và khi lăn thì lại quét trái – phải như mọi ngã tư không đèn. Nguyên tắc tín hiệu rút cục chỉ là sự đồng thuận: nó chỉ an toàn khi mọi bên cùng tôn trọng nó, và người lái xe máy luôn là bên chịu thiệt nặng nhất khi một bên không tôn trọng.</p>`,
    },
    {
      h2: 'Các lỗi phổ biến và cách sửa thành thói quen',
      html: `<p>Bốn lỗi gặp nhiều nhất khi xe máy qua ngã tư: một, đua đèn vàng; hai, rẽ trái kiểu cua lớn cắt mặt xe ngược chiều; ba, dừng quá vạch làm mình thành vật cản cho dòng bên cạnh; bốn, đổi làn hoặc vượt ngay sát ngã tư. Cả bốn đều không phải lỗi kỹ năng mà lỗi quyết định — đều sửa được bằng thói quen chứ không cần phản xạ đặc biệt.</p>
<p>Sửa lần lượt: với đua đèn vàng, tập nhìn tín hiệu sớm từ khi còn năm mươi mét và tự nguyện bỏ một pha xanh khi không chắc — mỗi pha nhường được là một lần tập kiểm soát ham muốn. Với cua trái, thói quen ôm cua nhỏ gần tâm giao lộ và nhường xe thẳng ngược chiều trước khi rẽ; nếu giao lộ đông, cách an toàn nhất là đi thẳng qua ngã tư, đỗ bên đường rồi rẽ trái từ vị trí đó khi dòng xe thoáng — mất hai phút, đổi cả một đoạn đường an toàn.</p>
<p>Với dừng quá vạch, tập phanh sớm hơn mức nghĩ là cần: phanh xe máy mất hiệu quả khi mặt đường ướt hoặc có cát, và vạch dừng được đặt ở vị trí cho xe hơi tải nhìn thấy được mình. Với vượt sát ngã tư, quy tắc đơn giản: trong bán kính một trăm mét quanh giao lộ không vượt xe, kể cả xe chậm — vì xe chậm đang giảm cho ngã tư có thể đang nhường một cái gì mình chưa nhìn thấy. Quá ngã tư xong, toàn lại tốc độ và nhịp đường trường như bình thường.</p>`,
    },
  ],
  checklist: [
    'Trước ngã tư: giảm tốc sớm, đọc biển báo và tín hiệu, quyết định làn theo hướng đi.',
    'Đúng làn trước vạch: trái rẽ trái, phải rẽ phải, giữa đi thẳng — không đổi làn giữa giao lộ.',
    'Quét theo thứ tự trái – phải – trái, và tiếp tục quét cả khi đã vào giao lộ.',
    'Ngã tư không đèn: xe đến trước đi trước; cùng lúc thì nhường xe từ bên phải; đường chính ưu tiên đường nhánh.',
    'Nhường người đi bộ trên vạch; rẽ trái cùng xe ngược chiều thì ôm cua nhỏ không cắt mặt.',
    'Đèn vàng gần vạch: phanh dứt khoát phía sau; trong bán kính trăm mét quanh ngã tư không vượt xe.',
  ],
  steps: [
    { title: 'Chuẩn bị từ xa', detail: 'Còn năm mươi mét: nhìn tín hiệu và dòng xe, giảm về tốc độ phanh được, hoàn tất việc chọn làn theo hướng đi.' },
    { title: 'Quan sát theo trình tự', detail: 'Trước vạch: quét trái – phải – trái, xác định xe nào tới, hướng nào, nó đã thấy mình chưa; nhường theo quy tắc khi chưa chắc.' },
    { title: 'Vào giao lộ quyết đoán', detail: 'Khi đủ khoảng trống thì vào với tốc độ đều, không dừng cà nhắc giữa dòng cắt; giữ hướng đã báo hiệu, mắt vẫn quét hai bên.' },
    { title: 'Thoát và về nhịp đường', detail: 'Rời giao lộ về đúng làn, tăng lại tốc độ sau khi hoàn toàn qua; không mở ga ăn mừng ngay tại lối ra.' },
  ],
  warnings: [
    'Không đua đèn vàng: quãng phanh không đủ thì đèn đỏ bật lúc mình còn nằm giữa ngã tư.',
    'Không rẽ trái cua lớn cắt mặt xe ngược chiều; giao lộ đông thì đi thẳng qua rồi rẽ từ bên đường.',
    'Không dừng quá vạch dừng: mình trở thành vật cản ngay trước dòng xe tải đang vào giao lộ.',
  ],
  notes: [
    'Quyền ưu tiên chỉ có giá trị khi người khác cũng biết và tôn trọng luật; lái phòng vệ nghĩa là luôn có phương án nhường.',
    'Đèn tín hiệu và biển báo hiệu tại chỗ luôn override quy tắc ưu tiên mặc định — đọc tín hiệu trước khi áp dụng quy tắc chung.',
  ],
  references: [
    'Quy định về quyền ưu tiên qua lại tại giao lộ được quy định trong Luật Giao thông đường bộ của Việt Nam.',
    'Kỹ thuật quan sát trình tự trái – phải – trái là chuẩn được dùng trong nhiều giáo trình huấn luyện lái xe hai bánh.',
  ],
  related: [
    'ky-thuat-phanh-khan-cap-xe-may',
    'guong-chieu-hau-xe-may-cach-chinh-dung',
    'giay-to-can-mang-khi-lai-xe-may',
    'mu-bao-hiem-dat-chuan-cach-chon',
  ],
};
