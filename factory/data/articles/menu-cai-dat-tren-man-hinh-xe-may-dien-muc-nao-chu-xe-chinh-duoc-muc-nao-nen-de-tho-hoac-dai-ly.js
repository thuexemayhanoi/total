// AI WIKI TOTAL — S01882; phân loại menu cài đặt xe máy điện bằng nguyên tắc chung, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'menu-cai-dat-tren-man-hinh-xe-may-dien-muc-nao-chu-xe-chinh-duoc-muc-nao-nen-de-tho-hoac-dai-ly',
  title: 'Menu cài đặt trên màn hình xe máy điện: mục nào chủ xe chỉnh được, mục nào nên để thợ hoặc đại lý',
  seoTitle: 'Menu cài đặt xe máy điện: mục nào tự chỉnh, mục nào để thợ',
  metaDescription: 'Menu cài đặt xe máy điện thường có nhóm mục nào, mục nào chủ xe chỉnh được, mục nào nên để thợ hoặc nơi bảo hành, và cách xử lý khi lỡ chỉnh nhầm.',
  summary: 'Bài giải thích menu cài đặt trên màn hình xe máy điện thường gồm những nhóm mục nào, từ hiển thị, ngôn ngữ, chế độ lái, đèn, kết nối điện thoại đến nhóm kỹ thuật dành cho thợ, và nhấn mạnh rằng không phải xe nào cũng có menu. Nội dung phân biệt mục chủ xe thường chỉnh được với các mục liên quan pin, bộ điều khiển, cảm biến và giới hạn nên để nơi bảo hành, rồi nêu cách chỉnh an toàn, cách xử lý khi lỡ chỉnh nhầm và lý do không nên tìm cách vào mục kỹ thuật.',
  quickAnswer: 'Chủ xe thường chỉnh được nhóm hiển thị như độ sáng, giờ, ngôn ngữ, đơn vị và kết nối điện thoại, nếu xe có menu và sách hướng dẫn cho phép. Các mục về pin, bộ điều khiển, cảm biến, mã kỹ thuật và giới hạn tốc độ nên để thợ hoặc nơi bảo hành. Chỉ chỉnh khi xe đứng yên, ghi lại cài đặt cũ, đổi từng mục một; lỡ chỉnh nhầm thì trả về như cũ, đừng thử bừa.',
  keyPoints: [
    'Không phải xe máy điện nào cũng có menu cài đặt; có xe chỉ hiển thị thông tin, có xe đưa cài đặt sang ứng dụng điện thoại hoặc nơi bảo hành, nên sách hướng dẫn là căn cứ đầu tiên.',
    'Mục chỉ đổi cách bạn nhìn thông tin như độ sáng, giờ, ngôn ngữ, đơn vị hiển thị và ghép điện thoại thường là phần của chủ xe; mục đổi cách xe hoạt động cần thận trọng hơn nhiều.',
    'Các mục về pin, bộ điều khiển, cảm biến, mã kỹ thuật và giới hạn tốc độ nên để thợ hoặc nơi bảo hành, vì chỉnh sai có thể làm hiển thị sai pin hoặc xe phản ứng nguy hiểm.',
    'Chỉ chỉnh khi xe đứng yên trên nền vững, nguồn ổn định; ghi lại cài đặt cũ trước khi đổi và đổi từng mục một để biết mục nào gây thay đổi.',
    'Lỡ chỉnh nhầm thì ngừng bấm, trả về theo ghi chép hoặc theo hướng dẫn khôi phục trong sách; xe có dấu hiệu lạ thì ngừng đi và nhờ nơi bảo hành.'
  ],
  category: 'learn',
  hub: 'kien-thuc-xe-dien',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['menu cài đặt', 'màn hình hiển thị', 'độ sáng màn hình', 'kết nối điện thoại', 'bộ điều khiển', 'hệ thống quản lý pin'],
  keywords: ['menu cài đặt xe máy điện', 'cài đặt trên đồng hồ xe điện', 'chỉnh màn hình xe máy điện', 'cài đặt sai xe điện chạy khác'],
  sections: [
    P('Menu cài đặt trên xe điện thường có những nhóm mục nào', [
      'Màn hình xe máy điện không chỉ để xem tốc độ và mức pin. Nhiều xe còn có thêm một lớp menu cài đặt, thường vào bằng nút trên tay lái hoặc nút ngay trên đồng hồ, nhưng cách vào, số lớp menu và tên từng mục khác nhau rất nhiều giữa các xe. Có xe tối giản đến mức màn hình chỉ hiển thị thông tin mà không cho chỉnh gì; có xe cho đổi vài thứ bằng nút bấm; có xe chuyển phần lớn cài đặt sang ứng dụng trên điện thoại hoặc giao hẳn cho nơi bảo hành. Vì vậy câu hỏi đầu tiên không phải mục nào chỉnh được, mà là xe của bạn có menu hay không và sách hướng dẫn mô tả đến đâu. Điều gì sách không nhắc thì nên coi như chưa dành cho chủ xe.',
      'Dù tên gọi khác nhau, các mục trong menu thường rơi vào vài nhóm quen thuộc. Nhóm hiển thị gồm độ sáng, nền sáng hoặc tối, thời gian màn hình sáng, đơn vị quãng đường, ngày giờ và ngôn ngữ chữ. Nhóm chế độ lái cho chọn cách xe đáp lại tay ga, nhóm đèn cho chỉnh độ sáng nền hoặc kiểu tự động của một số đèn, còn nhóm kết nối giúp ghép màn hình với điện thoại để nhận thông báo hoặc xem lại các chuyến đi. Cuối cùng là nhóm thông tin xe, thường chỉ để đọc, như phiên bản phần mềm hay tình trạng hệ thống. Không xe nào chắc chắn có đủ các nhóm này; hãy xem danh sách trên như tấm bản đồ để biết mình đang đứng ở đâu, không phải lời hứa về những gì có trên xe.',
      'Ngoài các nhóm dành cho chủ xe, nhiều xe còn một nhóm kỹ thuật dành cho thợ và nơi bảo hành, liên quan đến pin, bộ điều khiển, cảm biến, mã kỹ thuật và các giới hạn do nhà sản xuất đặt. Nhóm này có thể được ẩn, hoặc cần thao tác riêng và thiết bị riêng, nên chủ xe bình thường ít khi gặp. Một cách phân loại dễ nhớ là tự hỏi mục đó đổi cách bạn nhìn thông tin hay đổi cách xe hoạt động. Đổi cách nhìn, như độ sáng hay giờ, thường ít rủi ro. Đổi cách xe hoạt động thì cần thận trọng hơn nhiều. Riêng chế độ lái đã có bài riêng về các kiểu tiết kiệm, tiêu chuẩn và thể thao, nên ở đây chỉ nhắc như một mục trong menu.'
    ]),
    P('Mục nào chủ xe thường chỉnh được', [
      'Nhóm hiển thị là nơi chủ xe chỉnh nhiều nhất và cũng an toàn nhất, miễn là sách hướng dẫn của xe có nhắc tới. Độ sáng màn hình đáng chú ý hơn cả: để quá tối, dưới nắng bạn sẽ không đọc nổi và dễ tưởng đồng hồ hỏng, một tình huống đã được bàn trong bài về đồng hồ điện tử tắt, chập chờn hoặc đen màn hình. Để quá sáng thì ban đêm chói mắt, làm khó nhìn đường. Nếu xe có kiểu ngày đêm hoặc tự động theo ánh sáng, nên thử cả hai ở nơi đỗ xe rồi chọn kiểu dễ đọc nhất. Thời gian màn hình còn sáng sau khi dừng cũng thường chỉnh được, và chỉnh nó chỉ đổi thói quen hiển thị chứ không đụng đến cách xe vận hành.',
      'Giờ, ngày, ngôn ngữ và đơn vị hiển thị là nhóm thứ hai. Đặt đúng giờ giúp bạn đối chiếu lịch sử chuyến đi hoặc ghi chú cho thợ sau này. Đổi ngôn ngữ chỉ đổi chữ, nhưng nếu lỡ sang một ngôn ngữ lạ thì tìm lại mục này rất khó, nên hãy nhớ biểu tượng hoặc vị trí của mục ngôn ngữ trước khi đổi. Đổi đơn vị chỉ thay cách con số được hiển thị, không làm xe chạy nhanh hay chậm hơn, nhưng sau khi đổi, những con số quen mắt sẽ khác đi và bạn có thể đọc nhầm tốc độ hay quãng đường còn lại trong vài ngày đầu. Kết nối điện thoại cũng thuộc nhóm này: ghép hoặc ngắt ghép thường là việc của chủ xe, tùy xe và theo đúng cách sách mô tả.',
      'Vài mục khác cũng có thể nằm trong tầm tay chủ xe, nhưng nên hỏi sách trước. Bộ đếm quãng đường của từng chuyến thường cho đặt lại về không; ngược lại, tổng quãng đường của xe là dữ liệu cần giữ nguyên và không có lý do chính đáng để chỉnh. Âm thanh phím bấm hay thông báo từ điện thoại thường chỉnh được, còn tiếng báo cảnh báo của xe thì nên để nguyên, vì đó là kênh để xe nói với bạn khi có việc cần chú ý. Mục đèn chỉ nên chỉnh phần hiển thị hoặc độ sáng nền; đừng đổi kiểu hoạt động của đèn chiếu sáng nếu sách không cho. Dấu hiệu một mục thuộc về chủ xe là có mô tả trong sách, có cách quay lại và không đòi mã hay thiết bị riêng.'
    ]),
    P('Mục nào nên để thợ hay nơi bảo hành', [
      'Các mục liên quan đến pin là nhóm nên để thợ hoặc nơi bảo hành, vì pin vừa là bộ phận quan trọng nhất, vừa là nơi cần giữ nguyên nhất về mặt an toàn. Bên trong xe có hệ thống quản lý pin lo việc theo dõi, cân bằng và cắt khi cần; những mục như hiệu chuẩn mức pin, ngưỡng cảnh báo pin yếu hay kiểu sạc, nếu xuất hiện trong menu, đều không phải đồ chơi. Chỉnh sai có thể khiến đồng hồ báo còn nhiều pin trong khi thực tế đã gần cạn, làm xe yếu hẳn hoặc dừng giữa đường, hoặc làm pin phải chịu tải sai cách, nhất là khi chạy dưới nắng hay chở nặng. Những chuyện này không lộ ra ngay lúc bấm mà chỉ hiện dần qua nhiều lần đi sau đó.',
      'Bộ điều khiển và cảm biến là nhóm thứ hai. Bộ điều khiển quyết định xe đáp lại tay ga ra sao, cấp điện cho động cơ thế nào và khi nào phải cắt lực; cảm biến tay ga, cảm biến phanh và cảm biến tốc độ cung cấp tín hiệu để nó làm việc đó. Những mục như hiệu chuẩn tay ga, học lại cảm biến hay đổi cách trả lực, nếu bị chỉnh lệch, có thể khiến xe nhạy ga bất thường, giật khi vừa vặn ga, hoặc cắt lực chậm khi bạn bóp phanh, tùy xe. Đó đều là lỗi nguy hiểm vì xảy ra đúng lúc bạn cần xe nghe lời nhất. Tương tự, các mục chẩn đoán, đọc mã kỹ thuật hay nhập mã để mở lớp menu sâu hơn là công cụ của thợ, có thiết bị và quy trình đi kèm.',
      'Giới hạn tốc độ và các giới hạn khác do nhà sản xuất đặt là nhóm cuối. Chúng không phải sự bất tiện cố ý, mà gắn với khung xe, phanh, lốp, hệ thống treo, pin và bộ điều khiển được chọn và thử cùng nhau. Vì thế mọi thay đổi ở đây, nếu nhà sản xuất cho phép, chỉ nên làm tại nơi bảo hành theo cách họ hướng dẫn. Có một mẹo nhanh cho người đứng trước menu: thấy mục có chữ hiệu chuẩn, nạp lại, mã, bộ điều khiển, cảm biến hay giới hạn thì dừng, thoát ra và hỏi nơi bảo hành. Cập nhật phần mềm cũng thuộc nhóm này: tùy xe, có xe cập nhật qua ứng dụng, có xe phải mang tới nơi bảo hành, và nên làm đúng theo cách sách mô tả thay vì tự tìm tập tin từ nguồn lạ.'
    ]),
    P('Chỉnh thế nào cho an toàn và xử lý khi lỡ chỉnh nhầm', [
      'Trước khi chỉnh bất cứ mục nào, hãy đưa xe về trạng thái đứng yên và ổn định: đỗ trên nền bằng phẳng, dựng chân chống, không vội. Nguồn điện cũng nên ổn định, nghĩa là pin không quá thấp và xe không bị rút sạc đột ngột giữa lúc đang đổi cài đặt, vì có xe chỉ lưu thay đổi khi bạn thoát menu và mất nguồn giữa chừng có thể làm cài đặt lưu dở. Tuyệt đối không chỉnh khi đang đi. Menu nhiều lớp đòi mắt nhìn xuống màn hình và tay rời khỏi tay lái, một thao tác bấm nhầm giữa dòng xe cộ là đủ gây tai nạn. Nếu có việc cần chỉnh gấp lúc đang chạy, hãy bóp phanh, dừng xe an toàn bên lề rồi mới đụng tới màn hình.',
      'Việc thứ hai là ghi lại trạng thái cũ trước khi đổi. Chụp màn hình bằng điện thoại, hoặc viết ra giấy tên mục cùng lựa chọn đang đặt, để lúc cần biết chính xác phải trả về đâu. Với menu nhiều lớp, hãy ghi cả đường đi, tức là từ màn hình chính bấm vào đâu rồi vào đâu. Sau đó chỉnh từng mục một, không đổi nhiều mục cùng lúc: đổi một mục thì nếu có gì lạ, bạn biết ngay thủ phạm; đổi cả chùm thì không truy ngược được. Sau mỗi thay đổi, thoát menu đúng cách sách mô tả, quan sát màn hình, và nếu mục đó liên quan đến lúc xe chạy thì thử nhẹ ở chỗ rộng, vắng, tốc độ thấp. Mục nào làm xe phản ứng khác lạ thì trả lại ngay.',
      'Lỡ chỉnh nhầm thì việc đầu tiên là ngừng bấm. Đừng thử chuỗi nút lấy từ lời đồn, vì mỗi lần bấm bừa là thêm một thay đổi chưa biết nằm ở đâu. Nếu đã ghi chép, hãy đưa mục đó về đúng lựa chọn cũ. Nếu chưa, mở sách hướng dẫn tìm mục khôi phục cài đặt, nhưng nhớ rằng cách khôi phục tùy xe và có thể xóa cả những cài đặt khác như ghép điện thoại hay bộ đếm chuyến. Nếu xe có dấu hiệu lạ khi chạy, như tay ga nhạy bất thường, mức pin hiển thị lạ hoặc xuất hiện cảnh báo, hãy ngừng đi, ghi lại những gì đã bấm, rồi nhờ nơi bảo hành; cách đọc và ghi cảnh báo có trong bài về màn hình báo biểu tượng hoặc mã lỗi.'
    ]),
    P('Vì sao không nên vào mục kỹ thuật hay gỡ giới hạn', [
      'Tò mò muốn vào mục kỹ thuật hay gỡ giới hạn tốc độ là chuyện dễ hiểu, nhưng lý do đầu tiên để không làm là an toàn. Giới hạn là một phần của thiết kế: phanh, lốp, khung, hệ thống treo, pin và bộ điều khiển được chọn để làm việc tốt trong một phạm vi nhất định. Gỡ giới hạn đẩy xe ra ngoài phạm vi đó, nghĩa là cần quãng phanh dài hơn, lốp và hệ thống treo phải gánh nhiều hơn, pin và bộ điều khiển nóng lên nhanh hơn, trong khi tay lái và phản xạ của người ngồi trên xe vẫn như cũ. Hậu quả không chỉ gói gọn ở chủ xe mà còn lan sang những người đi đường quanh bạn, những người không hề chọn rủi ro đó.',
      'Lý do thứ hai là bảo hành và độ bền của chính chiếc xe. Nhiều nhà sản xuất loại trừ khỏi bảo hành những hư hỏng phát sinh sau khi người dùng can thiệp vào phần mềm hoặc cài đặt kỹ thuật, nên một lần thử có thể kéo theo việc bị từ chối bảo hành cả những hạng mục chẳng liên quan. Bản thân việc can thiệp cũng có thể làm hỏng bộ điều khiển hoặc khiến xe không khởi động được, kể cả khi bạn đã cố trả về như cũ. Các cách tìm lối vào mục kỹ thuật truyền nhau trên mạng không có gì bảo đảm đúng với xe của bạn, và cũng không ai chịu trách nhiệm nếu xe hỏng. Vì vậy bài này cố ý không mô tả những cách ấy.',
      'Lý do thứ ba nằm ở việc lưu thông. Xe có giới hạn được thiết kế để thuộc một loại phương tiện nhất định, và gỡ giới hạn có thể khiến xe không còn khớp với loại mà nó được sản xuất và đăng ký, kéo theo rắc rối khi lưu thông trên đường; chi tiết tùy nơi và tùy loại xe, bài này không bàn. Điều thiết thực hơn là nhìn vào nhu cầu phía sau câu hỏi. Nếu thấy xe chậm hơn mong muốn, hãy xem nhu cầu đi lại của mình có hợp loại xe đang dùng không, và lần chọn xe sau nên lái thử kỹ, có thể xem thêm bài về lái thử xe máy điện. Nếu có người rủ mở khóa giúp, hãy hỏi nơi bảo hành xem xe có cách điều chỉnh chính thức nào không.'
    ])
  ],
  checklist: [
    'Mở sách hướng dẫn của xe để biết xe có menu cài đặt hay không và sách cho chủ xe chỉnh những mục nào.',
    'Chụp màn hình hoặc ghi giấy tên mục và lựa chọn hiện tại, kể cả đường đi trong menu, trước khi đổi bất cứ thứ gì.',
    'Đỗ xe trên nền bằng phẳng, dựng chân chống, giữ nguồn ổn định rồi mới vào menu; không chỉnh khi đang đi.',
    'Chỉ đổi một mục mỗi lần, thoát menu đúng cách, quan sát màn hình và cảm nhận về xe trước khi sang mục khác.',
    'Gặp mục có chữ hiệu chuẩn, mã, bộ điều khiển, cảm biến, pin hoặc giới hạn thì dừng lại và hỏi nơi bảo hành.'
  ],
  steps: [
    { title: 'Xác định xe có menu hay không', detail: 'Đọc phần màn hình và cài đặt trong sách hướng dẫn; mục nào sách không mô tả thì coi như chưa dành cho chủ xe.' },
    { title: 'Ghi lại trạng thái cũ', detail: 'Chụp màn hình hoặc viết ra tên mục, lựa chọn đang đặt và đường đi từ màn hình chính để có thể trả về như cũ.' },
    { title: 'Chỉnh từng mục khi xe đứng yên', detail: 'Đỗ vững, dựng chân chống, giữ nguồn ổn định; đổi một mục, thoát menu đúng cách rồi quan sát trước khi đổi mục tiếp theo.' },
    { title: 'Trả lại hoặc nhờ nơi bảo hành', detail: 'Mục nào làm hiển thị hay cảm nhận về xe lạ đi thì trả về theo ghi chép hoặc mục khôi phục trong sách; có dấu hiệu bất thường khi chạy thì ngừng đi và nhờ nơi bảo hành.' }
  ],
  warnings: [
    'Không chỉnh menu khi đang đi; cần chỉnh gấp thì bóp phanh, dừng xe an toàn rồi mới thao tác.',
    'Không tìm cách vào mục kỹ thuật, nhập mã hay gỡ giới hạn tốc độ: có thể mất an toàn, ảnh hưởng bảo hành và khiến xe không còn phù hợp để lưu thông.',
    'Xe có dấu hiệu lạ sau khi chỉnh, như nhạy ga bất thường, mức pin hiển thị khác hẳn hoặc xuất hiện cảnh báo, thì ngừng đi và nhờ nơi bảo hành thay vì bấm thử thêm.'
  ],
  notes: [
    'Số nhóm mục, tên gọi, cách vào menu và cách khôi phục cài đặt khác nhau tùy xe; có xe không có menu hoặc chuyển cài đặt sang ứng dụng điện thoại hay nơi bảo hành.',
    'Bài chỉ nêu cách phân loại chung để chủ xe biết đâu là phần của mình; việc cụ thể trên từng xe cần đối chiếu sách hướng dẫn hoặc hỏi thợ có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần màn hình hiển thị, cài đặt và khôi phục cài đặt',
    'Tài liệu bảo hành và hướng dẫn của nhà sản xuất về phần mềm và cài đặt kỹ thuật của đúng dòng xe'
  ],
  related: ['man-hinh-xe-may-dien-bao-bieu-tuong-hoac-ma-loi-cai-nao-chi-la-thong-tin-cai-nao-la-canh-bao-va-ghi-lai-the-nao', 'dong-ho-dien-tu-xe-may-tat-chap-chon-hoac-den-man-hinh', 'bao-duong-xe-may-dien-nhung-hang-muc-van-phai-lam', 'lai-thu-xe-may-dien', 'che-do-lai-xe-may-dien-tiet-kiem-tieu-chuan-the-thao']
};
