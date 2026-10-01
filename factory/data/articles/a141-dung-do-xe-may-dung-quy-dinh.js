// AI WIKI TOTAL — bài mở rộng cụm /learn/kien-thuc-phap-ly/: dừng đỗ xe máy đúng quy định (slot S00141)
'use strict';

module.exports = {
  slug: 'dung-do-xe-may-dung-quy-dinh',
  title: 'Dừng đỗ xe máy đúng quy định',
  seoTitle: 'Dừng đỗ xe máy đúng quy định và nơi cấm đỗ',
  metaDescription: 'Dừng đỗ sai chỗ là lỗi bị xử phạt phổ biến nhất tại nội đô. Bài viết giải thích chỗ nào được dừng, chỗ nào cấm và trình tự nhận xe khi bị cưỡng chế.',
  summary: 'Dừng và đỗ xe máy là thao tác lặp lại nhiều lần mỗi ngày, và cũng là một trong những lỗi bị xử phạt nhiều nhất trong nội đô: đỗ lên vỉa hè chật người đi bộ, đỗ sát góc giao lộ che khuất tầm nhìn, đỗ trên vạch dành cho xe buýt, hoặc đơn giản là gác xe trước cửa tiệm rồi quên coi vị trí đó thuộc diện cấm. Bài viết này đi qua nội dung theo cấu trúc dễ tra cứu: phân biệt dừng xe và đỗ xe theo định nghĩa pháp luật — dừng là tạm thời với người vẫn trên xe hoặc gần xe, đỗ là rời xe thời gian dài; nhóm nơi tuyệt đối cấm dừng lẫn đỗ như gờ đường xe chạy, trước cổng trụ sở có biển cấm, đầu cầu hầm; nhóm nơi cấm đỗ nhưng vẫn được dừng như trước lối đi của người đi bộ; các vị trí đặc thù của xe máy như vạch ô tô, làn xe buýt, nơi chở vỉa hè chỉ giữ lại lối đi; và kỹ năng đọc biển báo cấm dừng đỗ — biển tròn xanh viền đỏ với vạch chéo một nhánh là cấm đỗ, hai nhánh là cấm cả dừng. Phần cuối là tình huống thực tế: bị treo cưỡng chế phải làm gì, đến nhận xe theo trình tự nào, và thói quen ba giây quan sát trước khi gác xe giúp tránh hầu hết các vé xử phạt không đáng có.',
  quickAnswer: 'Trả lời ngắn: dừng xe là dừng tạm trong thời gian cần thiết để người lên xuống hoặc xếp hàng hóa, người không rời xa xe; đỗ xe là đứng yên quá thời gian dừng hoặc để xe ở nơi không thuộc trường hợp dừng. Nơi cấm tuyệt đối cả dừng lẫn đỗ: phần đường xe chạy và lề đường thuộc mặt đường có phân chia, điểm gặp gỡ đường sắt, đầu cầu, hầm, vị trí đỗ dồn, nơi che khuất biển báo. Nơi được dừng nhưng cấm đỗ: cách lối người đi bộ qua đường, trên vạch người đi bộ, trước cổng trụ sở khi có biển. Trước khi gác xe, ba giây quan sát: tìm biển cấm dừng đỗ bán kính hai chục mét, không để xe chắn vỉa hè và lối ra vào, không che biển báo hay góc giao lộ. Bị treo cưỡng chế thì mang giấy tờ và cước đến điểm ghi trên thông báo, đóng theo quy định rồi mới nhận xe. Quy tắc vàng: chỗ tiện nhất thường là chỗ cấm — đi bộ thêm mươi mét tới khu để xe quy hoạch luôn rẻ hơn một vé xử phạt.',
  keyPoints: [
    'Dừng xe là tạm thời, người ở lại gần xe; đỗ xe là rời xe lâu — cùng một vị trí, hai mức cấm khác nhau.',
    'Biển tròn xanh viền đỏ gạch chéo một nhánh cấm đỗ, hai nhánh chéo là cấm cả dừng — đọc nhầm là nhận vé.',
    'Tuyệt đối không dừng đỗ trên phần đường xe chạy, đầu cầu, hầm, gần đường sắt và chỗ che khuất tầm nhìn giao lộ.',
    'Vỉa hè chỉ được đỗ khi chừa trọn lối đi của người đi bộ — chắn lối đi là lỗi chặn đường giao thông.',
    'Đỗ gần góc giao lộ làm hai dòng xe không thấy nhau — khoảng cách tối thiểu với góc giao lộ là điều kiện an toàn, không chỉ luật.',
    'Bị treo cưỡng chế: đọc kỹ thông báo, mang đầy đủ giấy tờ, đóng đúng quy định và nhận biên lai trước khi rời đi.',
  ],
  category: 'learn',
  hub: 'kien-thuc-phap-ly',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['dừng xe', 'đỗ xe', 'biển cấm dừng đỗ', 'vỉa hè', 'cưỡng chế', 'xử phạt vi phạm'],
  keywords: ['dừng đỗ xe máy', 'nơi cấm đỗ xe máy', 'đỗ xe lên vỉa hè', 'bị treo xe máy', 'biển cấm dừng đỗ', 'quy định đỗ xe máy'],
  sections: [
    {
      h2: 'Phân biệt dừng xe và đỗ xe theo quy định',
      html: `<p>Định nghĩa nghe suông nhưng quyết định mức xử lý. Dừng xe là đứng yên tạm thời trong thời gian cần thiết để người lên xuống, xếp dỡ hàng hóa hoặc thực hiện các thủ tục giao tiếp nhanh, người lái không rời vị trí lái hoặc chỉ rời ngắn và xe sẵn sàng di chuyển ngay. Đỗ xe là để xe đứng yên ngoài trường hợp dừng: rời xe đi lâu, tắt máy khóa xe, hoặc để xe qua đêm. Nhiều vị trí trong đô thị cho phép dừng vài phút để người nhà lên xuống nhưng cấm đỗ — và ranh giới vi phạm nằm ở việc người lái có rời khỏi xe hay không.</p>
<p>Thực tiễn xử lý nhìn vào hai tiêu chí: xe có đang hoạt động trong tình huống giao thông không, và vị trí xe có thuộc diện cấm không. Người ngồi trên xe máy đang nổ máy trước cửa hàng chờ người nhà đi mua nhanh là dừng — hợp lệ nếu vị trí không cấm dừng; cùng vị trí đó mà tắt máy, khóa xe, đi vào hàng là đỗ — vi phạm ngay nếu chỗ đó chỉ cho phép dừng. Cách hiểu này giải thích vì sao có người thấy mình "chỉ gác xe hai phút" vẫn nhận thông báo xử phạt: hai phút đó đã đủ chuyển dừng thành đỗ theo cách nhìn của cơ quan chức năng.</p>
<p>Một định nghĩa phụ cũng cần nhớ: đỗ xe không được phép làm trong đường — tức là đứng im trên phần đường xe chạy để chờ người, nói chuyện, mua hàng rong dọc đường. Đây là tình huống phổ biến nhất ở phố đông: ghé sát vào mép đường mua bắp hoặc trả lời hỏi đường giữa làn, tưởng là "dừng nhanh" nhưng vị trí lại thuộc phần đường xe chạy — cấm cả dừng lẫn đỗ, và cũng là nguyên nhân dòng xe sau phải vắt ra giữa đường.</p>`,
    },
    {
      h2: 'Nhóm nơi tuyệt đối cấm dừng và cấm đỗ',
      html: `<p>Nhóm thứ nhất là những chỗ không bao giờ được đứng yên kể cả vài giây: phần đường xe chạy và lề đường thuộc mặt đường có phân chia; điểm gặp gỡ giữa đường bộ và đường sắt cùng bán kính quy định; đầu cầu, hầm và chỗ hẹp của cầu hầm; vị trí hẹp hòi và đoạn đường cong tầm nhìn hạn chế; nơi đỗ chắn lối ra vào của các khu vực chữa cháy; và các vị trí mà xe đỗ che khuất biển báo, đèn tín hiệu cho người khác. Đặc trưng của nhóm này: đứng yên tại đó là tự biến mình thành vật cản di động trong dòng giao thông hoặc tắt tầm nhìn chung.</p>
<p>Nhóm thứ hai là nơi được dừng nhưng cấm đỗ: cách lối người đi bộ qua đường một khoảng quy định, trên vạch qua đường của người đi bộ, trước và trong phạm vi cổng các trụ sở khi có biển cấm; khu vực đỗ xe buýt; nơi cửa đỗ của xe buýt công cộng; và phần đường có biển báo cấm đỗ còn hiệu lực theo khoảng cách ghi trên biển phụ hoặc theo quy định trong nội đô. Dừng vài giây người nhà xuống xe tại vạch người đi bộ là chấp nhận được nếu giữ xe sát mép, nhưng tắt máy đi vào quán ngay đó là đỗ trong vùng cấm.</p>
<p>Cách ghi nhớ thực dụng: hai nhóm này suy ra từ một câu hỏi duy nhất — xe của mình đứng yên tại chỗ này có lấy đi của người khác cái gì không? Lấy phần đường của dòng xe, lấy tầm nhìn của giao lộ, lấy lối đi của người bộ hành, lấy điểm đón của xe buýt, lấy lối ra của cứu hỏa — mỗi câu trả lời có là một vị trí cấm tương ứng. Câu hỏi này không thay thế biển báo, nhưng biển báo có thể bị cây che, bị xe khác chắn, còn câu hỏi thì luôn theo được người lái tới mọi con phố.</p>`,
    },
    {
      h2: 'Đọc biển báo cấm dừng đỗ và vạch kẻ đường',
      html: `<p>Biển cấm dừng và đỗ xe thuộc nhóm biển báo cấm, hình tròn nền xanh viền đỏ. Vạch chéo một nhánh màu đỏ gạch qua nền: cấm đỗ xe; hai nhánh chéo bắt chéo nhau: cấm dừng và đỗ xe. Biển ghi thêm khoảng cách hoặc giờ hiệu lực thì đọc theo biển phụ đặt dưới: "từ giờ này đến giờ kia" hoặc "trong vòng bao nhiêu mét" — nội đô nhiều đoạn chỉ cấm đỗ giờ cao điểm, và nguyên nhân vé oan kinh điển là nhìn thấy biển mà không đọc biển phụ phía dưới.</p>
<p>Vạch kẻ đường cũng mang ý nghĩa cấm: vạch chữ nhật trắng trên mặt đường là ô đỗ xe được quy hoạch, chỉ đỗ đúng trong ô và theo hướng quy định; vạch vàng liền mép đường là cấm dừng đỗ suốt đoạn vạch; vạch vàng nét đứt là cấm đỗ nhưng cho phép dừng theo quy định. Mép vỉa hè sơn đỏ trắng ở nhiều thành phố là lối đi của người đi bộ và khu đỗ xe đạp công cộng — đỗ xe máy lên đó vừa sai quy định vừa chặn đúng lối người cần đi.</p>
<p>Điểm dễ lầm của người đi xe máy là tin vào "vạ vật" — thấy xe khác đỗ thì đỗ theo. Tràn xe trước một quán nước không làm vị trí đó thành khu đỗ hợp lệ, và các đợt ra quân của lực lượng chức năng thường xử lý nguyên dãy cùng lúc. Duy nhất khu để xe có người trông giữ, có biển quy hoạch hoặc ô vạch rõ ràng là chỗ gửi xe an toàn cả về pháp lý lẫn về trộm cắp — mọi thứ còn lại trong phố đều là dừng đỗ tạm với rủi ro tự chịu.</p>`,
    },
    {
      h2: 'Đỗ xe máy trên vỉa hè: ranh giới đúng và sai',
      html: `<p>Vỉa hè là vùng xám nhất của chuyện dừng đỗ xe máy: vừa là nơi sinh hoạt của người đi bộ, vừa là nơi các thành phố đang dồn xe máy lên để mở thông mặt đường. Nguyên tắc hiện hành: chỉ được đỗ xe trên vỉa hè ở những đoạn có quy hoạch cho phép — có ô vạch, biển cho phép hoặc khu trông giữ — và kể cả khi được phép thì phải chừa lại trọn lối đi cho người đi bộ, xe lăn và xe trẻ em. Đỗ xe chiếm hết vỉa hè ép người đi bộ xuống lòng đường là lỗi chặn đường, và là lỗi bị phản ánh nhiều nhất ở các đô thị.</p>
<p>Thói quen cần tập khi gác xe lên vỉa hè: nhìn dọc vỉa hè trước khi gác — chừa được một hành lang đi bộ tối thiểu cho hai người vuông nhau qua không thì dịch xe lên gần tường hơn, hoặc chọn vỉa hè bên kia; không gác xe trước cửa nhà, trước lối vào tòa nhà và trước chỗ dốc lối lên của vỉa hè — những điểm đó là đường ra vào của người khác, kể cả khi trông qua như khe hổng nhỏ giữa hai xe đã có.</p>
<p>Khi vỉa hè chật vì quán xá lấn chiếm, giải pháp của người lái không phải là chen thêm: quay lại tìm khu trông giữ gần nhất hoặc chấp nhận đi bộ thêm một đoạn. Bài toán của một chiếc xe máy luôn là ba phương án — khu trông giữ, ô vạch quy hoạch, hoặc đoạn vỉa hè còn hành lang đi bộ — và khi phố không còn phương án thứ ba thì phương án đầu luôn rẻ hơn cả vé xử phạt lẫn cãi vã với người quản lý vỉa hè.</p>`,
    },
    {
      h2: 'Dừng đỗ quanh giao lộ và điểm tầm nhìn hạn chế',
      html: `<p>Giao lộ là nơi dừng đỗ sai làm hại người thứ ba. Xe đỗ sát mép góc giao lộ làm hai dòng xe rẽ phải và đi thẳng không nhìn thấy nhau — mép giao lộ do vậy thuộc nhóm cấm với khoảng cách lùi từ điểm mở rộng của đường. Đỗ xe gần vạch dừng, che biển đèn tín hiệu hoặc che gương cầu ngược chiều cũng cùng một bản chất: người khác mất thông tin điều khiển giao thông vì mình để xe sai chỗ.</p>
<p>Bến xe buýt và làn ưu tiên cũng cần nói riêng: xe máy đỗ ngay trạm buýt làm xe buýt phải đón khách ngoài làn, người lên xuống buộc lòng đường; đỗ vào làn ưu tiên hoặc làn xe buýt cấm trong giờ cao điểm thì xe buýt chuyên đề không kịp ứng cứu. Đây là những vị trí có biển riêng, nhưng biển hay bị đọc lướt vì người lái đang mải tìm chỗ trống — thói quen để ý vị trí biển báo trước khi thấy chỗ trống là kỹ năng quan trọng hơn kỹ năng lọt khe.</p>
<p>Trên đường cao tốc và đường vận tốc cao, dừng đỗ chỉ được phép ở nơi quy định:Dừng trên làn khẩn cấp chỉ cho tình huống sự cố thật, kèm đèn báo nguy hiểm và đủ khoảng cách an toàn. Đỗ nghỉ mát trên làn khẩn cấp vì thấy vắng là lỗi bị xử phạt nặng và là nguyên nhân của nhiều va chạm từ phía sau — và lối ra gần nhất luôn là phương án đúng cho mọi nhu cầu dừng không khẩn cấp.</p>`,
    },
    {
      h2: 'Bị treo cưỡng chế: trình tự nhận xe và phòng tránh',
      html: `<p>Quay lại thấy chỗ xe trống và tấm thông báo trên đất là trải nghiệm không ai muốn, nhưng trình tự sau đó có quy tắc. Trước hết đọc kỹ thông báo: ghi rõ lỗi vi phạm, vị trí, đơn vị thực hiện và điểm mang xe tới — mọi bước còn lại đều theo tấm thông báo đó. Mang theo đầy đủ giấy tờ cá nhân và giấy tờ xe tới điểm chỉ định, làm thủ tục xác nhận, nộp mức cưỡng chế theo quy định và lấy biên lai đầy đủ trước khi rời điểm.</p>
<p>Ba điều nên tránh tại điểm nhận xe: cãi rằng xe đã đỗ đó từ lâu không ai nhắc — trách nhiệm hiểu quy định là của người sử dụng đường; rời đi khi chưa có biên lai, coi như kết thúc nhanh để khỏi trễ — sau này tranh chấp không có căn cứ; và nhận xe về rồi bỏ luôn việc kiểm tra: xe bị di chuyển cưỡng chế nên tự kiểm tra lại ga, gương, khóa cổ và vết xước quanh xe trước khi nổ máy đi tiếp.</p>
<p>Phòng tránh thì quay về thói quen ba giây: mỗi lần định gác xe, dừng lại ba giây và soi ba câu — chỗ này có biển cấm trong tầm mắt không, xe mình có chặn lối đi hay tầm nhìn của ai không, và có khu trông giữ gần hơn mình chưa chịu đi tới không. Ba giây đó rẻ hơn mọi vé xử phạt, và dần thành phản xạ: người lái quen đọc phố sẽ thấy vị trí cấm bằng cảm giác trước cả khi nhìn thấy biển — kinh nghiệm đó không thể mua, nhưng có thể tập, và mỗi lần gác xe là một lần tập.</p>`,
    },
  ],
  checklist: [
    'Trước khi gác xe: quét bán kính hai chục mét tìm biển cấm dừng đỗ và biển phụ giờ hiệu lực, khoảng cách.',
    'Không dừng đỗ trên phần đường xe chạy, đầu cầu hầm, gần đường sắt và đoạn cong tầm nhìn hạn chế.',
    'Không đỗ chắn lối đi người đi bộ trên vỉa hè — chừa hành lang đi bộ tối thiểu cho hai người qua nhau.',
    'Không đỗ sát góc giao lộ, che biển báo, đèn tín hiệu hoặc trạm xe buýt.',
    'Đọc đúng biển: gạch chéo một nhánh cấm đỗ, hai nhánh cấm cả dừng — vạch vàng liền cấm dừng đỗ cả đoạn.',
    'Bị treo cưỡng chế: mang giấy tờ tới điểm ghi trên thông báo, nộp theo quy định, lấy biên lai và kiểm tra xe trước khi đi.',
  ],
  steps: [
    { title: 'Quan sát vị trí trước khi gác xe', detail: 'Dừng lại ba giây, soi ba câu: có biển cấm trong tầm mắt không, xe có chặn lối đi hoặc tầm nhìn của ai không, có khu trông giữ gần hơn không. Ưu tiên ô vạch quy hoạch và khu trông giữ trước mọi chỗ trống vạ vật.' },
    { title: 'Gác xe đúng cách tại nơi cho phép', detail: 'Lép xe sát mép hoặc vào ô vạch theo hướng quy định, không chặn cửa nhà, lối lên vỉa hè và góc giao lộ, khóa cổ và lấy đồ giá trị theo người, kiểm tra xe không che biển báo hay đèn tín hiệu của đường.' },
    { title: 'Xử lý khi cần dừng khẩn cấp trên đường nhanh', detail: 'Chỉ dừng ở làn hoặc lô khẩn cấp khi có sự cố thật: bật đèn báo nguy hiểm, dựng biển cảnh báo phía sau đủ khoảng cách, đưa người và xe ra khỏi làn xe chạy, và gọi hỗ trợ nếu không tự khắc phục được.' },
    { title: 'Nhận xe khi bị cưỡng chế', detail: 'Đọc kỹ thông báo, mang giấy tờ cá nhân và giấy tờ xe tới điểm ghi, xác nhận lỗi, nộp mức cưỡng chế theo quy định, lấy biên lai đầy đủ, kiểm tra ga gương khóa và vết xước trước khi nổ máy đi tiếp.' },
  ],
  warnings: [
    'Không đỗ theo số đông: cả dãy xe đỗ vạ vật trước quán không tạo ra khu đỗ hợp lệ, và các đợt xử lý thường phạt nguyên dãy cùng lúc.',
    'Không dừng giữa phần đường xe chạy để chờ người hoặc mua hàng dọc đường — vị trí đó cấm cả dừng lẫn đỗ kể cả vài giây.',
    'Không rời xe khi chỉ được phép dừng: tắt máy khóa xe và đi vào hàng là chuyển dừng thành đỗ, vi phạm ngay tại chỗ chỉ cho phép dừng.',
  ],
  notes: [
    'Nội đô nhiều đoạn chỉ cấm đỗ giờ cao điểm: biển phụ ghi khung giờ dưới biển chính là phần quyết định vi phạm hay không — đọc thiếu biển phụ là vé oan phổ biến nhất.',
    'Khu trông giữ có người giữ xe ưu tiên hơn mọi chỗ trống ven đường cả về pháp lý lẫn an toàn trộm cắp — khoản phí lẻ luôn rẻ hơn một lần xử phạt hoặc một bộ khóa bị kềnh.',
  ],
  references: [
    'Luật Trật tự, an toàn giao thông đường bộ và các văn bản quy định về dừng, đỗ xe trên đường bộ.',
    'Thông tư của Bộ Giao thông vận tải về biển báo, vạch kẻ đường bộ và quy định áp dụng tại đô thị.',
  ],
  related: [
    'khi-bi-dung-xe-kiem-tra-quy-trinh-va-quyen',
    'giay-to-can-mang-khi-lai-xe-may',
    'dang-kiem-xe-may-quy-trinh-va-luu-y',
    'ky-thuat-vuot-xe-an-toan',
  ],
};
