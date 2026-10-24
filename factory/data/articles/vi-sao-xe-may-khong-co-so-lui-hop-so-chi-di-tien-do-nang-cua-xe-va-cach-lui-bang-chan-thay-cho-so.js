// AI WIKI TOTAL — S02092 (topic V2); không nêu số liệu, giá hay tên hãng.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') }); // helper AI WIKI TOTAL
module.exports = {
  slug: 'vi-sao-xe-may-khong-co-so-lui-hop-so-chi-di-tien-do-nang-cua-xe-va-cach-lui-bang-chan-thay-cho-so',
  title: 'Vì sao xe máy không có số lùi: hộp số chỉ đi tiến, độ nặng của xe và cách lùi bằng chân thay cho số',
  seoTitle: 'Vì sao xe máy không có số lùi và cách lùi xe bằng chân',
  metaDescription: 'Xe số và xe tay ga không có số lùi vì hộp số và bộ truyền chỉ quay một chiều. Giải thích cơ chế, xe nào có chế độ lùi và cách đẩy lùi bằng chân cho an toàn.',
  summary: 'Người mới đi xe số hoặc xe tay ga hay thắc mắc vì sao gài số hay vặn ga mà xe vẫn không tự lùi, trong khi ô tô thì có số lùi. Bài này giải thích bằng cơ chế chứ không chỉ nói “xe thiết kế vậy”: động cơ xe máy quay một chiều, hộp số xe số chỉ là dãy bánh răng đổi tỷ lệ truyền chứ không đảo chiều, còn bộ truyền xe tay ga gồm dây curoa, nồi ly tâm và hộp giảm tốc cũng chỉ truyền lực theo một hướng. Tiếp theo là lý do xe hai bánh bỏ số lùi, những dòng xe có chế độ lùi như xe cỡ lớn, xe ba bánh hay xe điện có chế độ dắt bằng mô-tơ, và việc nên hay không nên làm khi cần lùi xe ra khỏi chỗ đỗ.',
  quickAnswer: 'Xe máy phổ thông không có số lùi vì động cơ quay một chiều và hộp số xe số, hay bộ truyền dây curoa kèm nồi ly tâm ở xe tay ga, chỉ đổi tỷ lệ truyền chứ không đảo chiều quay ra bánh. Thêm số lùi nghĩa là thêm cụm bánh răng, làm xe nặng, to và phức tạp hơn, trong khi xe hai bánh nhẹ nên người lái vốn đẩy lùi được bằng chân. Khi cần lùi, đừng cố gài số: giữ phanh, đưa xe số về số mo hoặc tắt máy xe tay ga rồi dùng chân đẩy lùi từng bước ngắn, không vặn ga lúc chân còn đang đẩy. Một số xe cỡ lớn, xe ba bánh và xe điện có chế độ lùi riêng, tùy từng xe.',
  keyPoints: [
    'Không có số lùi là thiết kế bình thường của phần lớn xe hai bánh phổ thông, không phải xe thiếu bộ phận hay người lái làm sai thao tác.',
    'Động cơ xăng quay một chiều; hộp số xe số chỉ đổi tỷ lệ truyền, còn xe tay ga truyền lực qua dây curoa, nồi ly tâm và hộp giảm tốc, nên không chỗ nào trong chuỗi truyền động đảo được chiều quay.',
    'Muốn có số lùi phải thêm cụm bánh răng đảo chiều và cơ cấu gạt riêng, làm xe nặng hơn, to hơn và nhiều chi tiết hơn, trong khi xe hai bánh nhẹ và người lái đã có sẵn đôi chân để đẩy lùi.',
    'Một số xe cỡ lớn, xe ba bánh và xe điện có chế độ lùi riêng, hoạt động bằng cụm bánh răng đảo chiều hoặc bằng mô-tơ; đây là tính năng tùy xe, cần đọc sách hướng dẫn của đúng chiếc xe đó.',
    'Khi cần lùi: không cố gài số, giữ phanh, xe số về số mo hoặc xe tay ga tắt máy, đẩy lùi bằng chân từng bước ngắn và tuyệt đối không vặn ga khi chân đang đẩy.'
  ],
  category: 'wiki',
  hub: 'cau-tao-xe',
  date: '2026-10-24',
  updated: '2026-10-24',
  entities: ['số lùi xe máy', 'hộp số xe số', 'số mo (số rỗng)', 'ly hợp (côn)', 'bộ truyền xe tay ga', 'dây curoa và nồi ly tâm', 'bánh răng trung gian đảo chiều', 'xe ba bánh', 'chế độ dắt bằng mô-tơ trên xe điện'],
  keywords: ['vì sao xe máy không có số lùi', 'cách lùi xe máy bằng chân', 'hộp số xe máy chỉ đi tiến', 'chế độ lùi trên xe điện', 'bộ truyền xe tay ga'],
  sections: [
    P('Xe máy không có số lùi: điều người dùng hay hiểu nhầm', [
      'Người mới chuyển từ ô tô sang xe máy, hoặc lần đầu cầm xe số hay xe tay ga, thường chung một thắc mắc: sao gài số, vặn ga mà xe vẫn không chịu lùi? Trên ô tô có sẵn một vị trí số lùi trong cần số, nên nhiều người mặc nhiên cho rằng xe nào cũng có. Khi tìm mãi không thấy, họ nghĩ xe của mình thiếu một bộ phận, hoặc nghĩ mình đang thao tác sai. Thực ra phần lớn xe hai bánh phổ thông được thiết kế không có số lùi, và đó là chuyện bình thường chứ không phải lỗi của xe hay của người lái.',
      'Một hiểu nhầm khác đến từ cái tên của các vị trí số. Ở xe số, ngoài các số tiến còn có vị trí số mo, tức số rỗng, thường nằm xen giữa hai số đầu. Gài vào đó thì động cơ không còn nối với bánh sau và xe lăn tự do. Có người thấy một vị trí “lạ” trong dãy số liền đoán là số lùi, thử gài rồi vặn ga hoặc nhả côn, kết quả là máy gầm lên mà xe không nhúc nhích. Số mo chỉ có nghĩa là “không truyền lực”, không phải “truyền lực ngược”. Ở xe tay ga thì chẳng có cần số nào để tìm, nên người mới càng dễ bối rối khi vặn ga mà xe chỉ lao tiến.',
      'Tình huống làm thắc mắc này nổi lên thường rất đời thường: chỗ đỗ chật trước cửa nhà, dãy xe dựng sát nhau, hầm xe hơi dốc, hay một chỗ trống ở quán mà xe phía sau đã lấp kín. Người lái cần đưa xe ra, tìm cái nút hay cái số nào đó để xe tự lùi, không thấy thì dễ phản ứng sai theo hai hướng. Hướng thứ nhất là đạp cần số thật mạnh để “tìm” số lùi; hướng thứ hai là vặn ga rồi lấy chân đẩy theo. Cả hai đều không giúp gì mà còn có thể gây hại: dùng lực quá mức lên cần số chỉ làm mòn hoặc cong cơ cấu, còn vặn ga trong lúc chân đang đẩy thì xe có thể bất ngờ lao tới.',
      'Bài này giải thích bằng cơ chế để người đọc hiểu vì sao xe không lùi và thôi tự trách mình: động cơ xe máy quay một chiều, hộp số hay bộ truyền chỉ đổi tỷ lệ chứ không đổi chiều, và xe hai bánh nhẹ hơn nhiều so với ô tô nên người lái đã đẩy lùi được bằng chân. Sau đó là phần phân biệt những ngoại lệ, tức các xe có chế độ lùi, và cuối cùng là việc nên và không nên làm khi cần lùi. Kỹ thuật đẩy lùi từng bước, cách quan sát phía sau và xử lý chỗ chật, chỗ dốc đã có bài riêng trên trang, nên bài này chỉ nêu phần cần nhớ.'
    ]),
    P('Hộp số xe số và bộ truyền xe tay ga chỉ quay theo một chiều', [
      'Muốn hiểu vì sao không có số lùi, hãy bắt đầu từ động cơ. Động cơ xăng của xe máy biến chuyển động lên xuống của pít-tông thành chuyển động quay ở trục khuỷu, và nó được thiết kế để quay theo một chiều duy nhất: thời điểm đánh lửa, nạp hỗn hợp và xả khí đều gắn với chiều quay ấy. Nó không giống mô-tơ điện, vốn có thể đảo chiều nhờ đổi cách cấp điện. Vì vậy mọi thứ phía sau động cơ, từ ly hợp, hộp số tới bánh xe, đều nhận vào một chuyển động quay có chiều cố định.',
      'Ở xe số, hộp số là một dãy cặp bánh răng. Mỗi số tiến ứng với một cặp có tỷ lệ riêng: số thấp cho bánh sau quay chậm mà khỏe để xe vọt đi, số cao cho bánh quay nhanh hơn để xe chạy xuôi. Khi người lái đạp cần số bằng chân, thực chất là chọn cặp bánh răng nào đang nối trục vào với trục ra, còn ly hợp, tức côn, ở giữa chỉ làm nhiệm vụ nối và ngắt lực. Điểm mấu chốt là mọi cặp bánh răng ấy đều được bố trí theo cùng một kiểu, nên chiều quay của trục ra, và do đó của bánh sau, giống nhau ở mọi số tiến. Hộp số xe số đổi được “nhanh hay chậm”, “khỏe hay nhẹ”, nhưng không đổi được “tiến hay lùi”.',
      'Trên ô tô, số lùi có được nhờ một chi tiết riêng: một bánh răng trung gian được đẩy vào giữa đường truyền để chiều quay bị đảo lại. Hãy hình dung hai bánh răng ăn khớp trực tiếp thì quay ngược chiều nhau; chen thêm bánh thứ ba vào giữa thì bánh cuối lại quay cùng chiều với bánh đầu, nghĩa là chiều quay ra bánh xe đã bị đảo so với trước. Xe số phổ thông không có bánh răng trung gian ấy lẫn cần gạt riêng cho nó, nên dù đạp cần số kiểu nào, cơ cấu cũng chỉ chạy qua các số tiến và số mo. Muốn có số lùi phải thêm cụm này vào trong vỏ máy, và đó là chuyện thiết kế lại chứ không phải thao tác của người dùng.',
      'Xe tay ga đi bằng một con đường khác nhưng kết quả y hệt. Lực từ trục khuỷu truyền qua cặp bánh đai có dây curoa, trong đó đường kính làm việc của bánh đai thay đổi liên tục nhờ các viên bi nồi văng ra bởi lực ly tâm, nên xe không cần cần số mà vẫn tăng tốc êm. Phía sau là nồi ly hợp ly tâm, chỉ ôm vào khi máy lên đủ vòng tua, rồi một hộp giảm tốc bánh răng cố định đưa lực ra bánh sau. Cả chuỗi dây curoa, nồi và hộp giảm tốc không có chỗ nào để đảo chiều, nên vặn ga chỉ làm xe lao tiến; còn lúc tắt máy hoặc để chạy không tải thì nồi ly hợp nhả, bánh quay tự do để người lái đẩy lùi dễ dàng. Phần cấu tạo chi tiết của bộ truyền vô cấp đã có bài riêng trên trang.'
    ]),
    P('Vì sao xe hai bánh bỏ số lùi: nặng thêm, to thêm và ít khi cần', [
      'Thêm số lùi không phải chuyện bất khả thi về kỹ thuật, mà là chuyện được không bù mất. Một cụm bánh răng đảo chiều cùng cần gạt, trục và vỏ chứa nó là một khối kim loại nặng thêm ngay trong thân máy, nơi từng phần của xe hai bánh đều được tính toán để gọn nhẹ. Xe máy phổ thông được thiết kế quanh các tiêu chí như nhẹ, dễ điều khiển trong dòng xe đông và dễ bảo dưỡng; thêm một cụm nữa đi ngược lại những tiêu chí đó. Nói đơn giản, lợi ích nhận được nhỏ trong khi cái phải chấp nhận là thêm khối lượng và thêm độ phức tạp cho cả chiếc xe.',
      'Kích thước là mặt thứ hai. Hộp số xe máy nằm sát lốc máy, và bề rộng của cụm máy ảnh hưởng tới độ nghiêng của xe khi vào cua cũng như chỗ đặt chân của người lái. Thêm một trục hay một cặp bánh răng thường làm vỏ máy rộng hơn hoặc dài hơn, kéo theo việc phải đổi thiết kế khung, chỗ để chân, đôi khi cả vị trí trọng tâm. Điều này tùy từng dòng xe, nhưng nhìn chung ở xe nhỏ, nhà thiết kế ít khi chọn đánh đổi như vậy chỉ để có một tính năng hiếm khi dùng tới.',
      'Thêm vào đó là bài toán độ bền và bảo dưỡng. Mỗi chi tiết chuyển động thêm là thêm một chỗ có thể mòn, thêm một điểm cần bôi trơn, thêm một khả năng người lái thao tác nhầm. Số lùi lại là loại chi tiết “nằm ngủ” gần hết thời gian, chỉ làm việc vài lần ngắn, nên khó phát hiện hư hỏng cho tới lúc cần dùng. Thêm một vị trí có thể gài nhầm cũng là điều nhà thiết kế ngại, vì trên xe hai bánh đang di chuyển thì sai sót nào cũng dễ dẫn tới mất thăng bằng. Với đa số người dùng chỉ cần chạy tiến, mang theo một bộ phận như vậy là không đáng.',
      'Điều cuối cùng quyết định là xe hai bánh nhẹ hơn nhiều so với ô tô và người lái vốn đã có sẵn công cụ: đôi chân. Khi dừng, người lái xe máy phải chống chân xuống đất để giữ thăng bằng, nên chuyện nhích lùi vài bước bằng chân là thao tác tự nhiên mà hầu như ai cũng làm được. Nhu cầu lùi trên xe máy cũng thường chỉ là vài bước ngắn: ra khỏi chỗ đỗ, tránh một vật cản, chỉnh xe cho thẳng. Với quãng ngắn như vậy, đẩy bằng chân vừa nhanh vừa dễ kiểm soát; còn khi xe quá nặng, chỗ dốc hoặc nền trơn thì việc nên làm là xuống dắt từ bên cạnh, như bài kỹ thuật lùi xe đã nêu.'
    ]),
    P('Xe nào có chế độ lùi: dòng cỡ lớn, xe ba bánh và chế độ dắt trên xe điện', [
      'Nói xe máy không có số lùi là đúng với phần lớn xe hai bánh phổ thông, nhưng không đúng với tất cả. Khi xe đủ nặng thì lý lẽ nhẹ gọn không còn đứng vững: người lái khó đẩy lùi bằng chân một chiếc xe rất nặng, chất đầy hành lý, chở thêm người phía sau, lại đang đứng trên nền hơi dốc. Vì vậy một số dòng xe cỡ lớn, thiên về đi đường dài, có chế độ lùi, và nhà thiết kế chấp nhận thêm khối lượng để đổi lấy sự tiện lợi đó. Cách làm tùy dòng xe: có xe dùng cụm bánh răng đảo chiều riêng, có xe tận dụng mô-tơ khởi động để đẩy xe lùi chậm.',
      'Xe ba bánh là nhóm thứ hai. Xe ba bánh, dù là loại chở hàng, chở người hay kiểu mô tô có hai bánh trước hoặc hai bánh sau, thường nặng hơn xe hai bánh rất nhiều, và người lái ngồi trên xe thường không đủ lực đẩy xe lùi bằng chân. Vì thế nhiều xe ba bánh có số lùi hoặc cơ cấu hỗ trợ lùi, tùy từng xe. Do hình dáng, cách lái và cơ cấu lùi của chúng rất khác nhau, cách nhận biết chắc chắn nhất là nhìn cần số hoặc nút trên xe rồi đọc sách hướng dẫn, chứ không suy ra từ kinh nghiệm với xe hai bánh.',
      'Nhóm thứ ba là xe điện. Mô-tơ điện khác động cơ xăng ở chỗ nó có thể quay theo hai chiều tùy cách bộ điều khiển cấp điện, nên làm chế độ lùi không cần thêm bánh răng đảo chiều. Một số xe điện, nhất là xe tay ga điện, có chế độ hỗ trợ dắt hoặc chế độ lùi: người lái bật một công tắc hay nhấn một nút, xe tự di chuyển chậm bằng mô-tơ, thường chỉ trong lúc còn giữ nút. Tuy nhiên đây là tính năng tùy xe và tùy phiên bản, và rất nhiều xe điện không có. Nếu xe có, cách bật, đèn báo và giới hạn sử dụng nằm trong sách hướng dẫn của đúng chiếc xe đó.',
      'Vậy nhìn thấy một ký hiệu lạ thì xử lý ra sao? Ở xe điện, người dùng đôi khi thấy một nút, một công tắc hay ký hiệu chữ R trên tay lái hoặc bảng đồng hồ. Đừng đoán chức năng bằng cách bấm thử khi đang chạy; hãy đọc sách hướng dẫn hoặc hỏi người giao xe, rồi thử ở chỗ trống và phẳng, xe đứng yên, chân sẵn sàng đặt xuống đất. Nếu xe không phải của mình, hãy hỏi chủ xe xem xe có chế độ lùi không và bật ra sao, thay vì tự suy ra. Chế độ lùi bằng mô-tơ dù nhẹ nhàng vẫn là xe đang tự di chuyển: người lái vẫn phải quan sát phía sau, giữ sẵn phanh và không lùi nhanh.'
    ]),
    P('Khi cần lùi: giữ phanh, về số mo hoặc tắt máy rồi dùng chân đẩy lùi', [
      'Với xe không có số lùi, quy tắc đầu tiên là đừng cố gài số để lùi. Xe số không có số nào đưa xe lùi, và mọi cú đạp mạnh vào cần số chỉ chuốc thêm hao mòn; xe tay ga thì không có gì để gài. Quy tắc thứ hai là biến xe thành vật dễ dắt: xe số về số mo để bánh sau tách khỏi động cơ, xe tay ga tắt máy để nồi ly hợp nhả hẳn và không ai lỡ tay vặn ga. Nhờ vậy xe lăn nhẹ theo chân người đẩy thay vì còn kéo theo lực cản của động cơ.',
      'Ngồi trên xe, giữ sẵn tay phanh trước, nhìn thẳng ra phía sau và sang hai bên rồi mới đẩy. Hai chân đặt xuống đất chắc, bước từng bước ngắn, nhả phanh từng chút để xe lăn chậm và bóp phanh khi cần dừng, thay vì để xe tự trôi. Phanh là thứ giữ cho xe luôn trong tầm kiểm soát khi nền hơi nghiêng hay xe khá nặng. Nếu chân không chạm đất vững, nền trơn, nền nghiêng hoặc xe quá nặng, xuống dắt lùi từ bên cạnh an toàn hơn là cố ngồi trên xe mà đẩy. Chi tiết về tư thế, cách nhìn phía sau và xử lý chỗ đỗ chật đã có bài riêng trên trang.',
      'Có những điều không nên làm ngay cả khi đang vội. Không vặn ga khi chân đang đẩy lùi: xe số còn gài số mà nhả côn, hay xe tay ga còn nổ máy mà vặn ga, thì côn hoặc nồi ly hợp ôm vào và xe lao tiến trong lúc chân người lái còn đang bước ngược. Không lùi khi tầm nhìn phía sau bị che, và không lùi ra đường có xe cộ qua lại mà không nhờ người đứng quan sát. Cũng không nên nhún mạnh người để “kéo” xe lùi, vì động tác đó làm xe lắc và dễ mất thăng bằng. Những sai sót tưởng nhỏ này là nguyên nhân dễ dẫn tới các cú đổ xe ngay tại chỗ.',
      'Nếu xe dắt nặng bất thường hoặc không lùi được dù đã về số mo và nhả khóa phanh đỗ, đó thường là chuyện của phanh bó, bánh kẹt hay khóa chưa mở, không phải chuyện thiếu số lùi; bài về xe dắt nặng đã nêu thứ tự thử cụ thể. Còn muốn biết xe của mình có chế độ lùi hay không, cách chắc chắn nhất là đọc sách hướng dẫn sử dụng, đừng dựa vào ý nghĩ “xe nào cũng thế”. Hãy nhớ rằng lùi xe máy là thao tác cần vài bước ngắn, sự kiên nhẫn và quan sát, chứ không phải thao tác cần tốc độ.'
    ])
  ],
  checklist: [
    'Xác định đúng loại xe: xe số, xe tay ga, xe điện hay xe ba bánh; chỉ một số xe cỡ lớn, xe ba bánh và xe điện mới có chế độ lùi.',
    'Muốn biết xe của mình có chế độ lùi không, đọc sách hướng dẫn sử dụng; đừng bấm thử nút hay công tắc lạ khi xe đang chạy.',
    'Không cố gài số hay đạp mạnh cần số để “tìm” số lùi trên xe số phổ thông.',
    'Giữ sẵn phanh trước, xe số về số mo, xe tay ga tắt máy trước khi đẩy xe lùi.',
    'Nhìn thẳng ra phía sau và sang hai bên trước khi lùi; tầm nhìn bị che thì nhờ người đứng quan sát.',
    'Đẩy lùi từng bước ngắn bằng chân, nhả phanh từng chút; chân không vững, nền trơn hoặc nghiêng thì xuống dắt lùi từ bên cạnh.',
    'Không vặn ga khi chân đang đẩy lùi, kể cả để “hỗ trợ” xe nhích thêm một chút.'
  ],
  steps: [
    { title: 'Hiểu xe của mình', detail: 'Xe số hay xe tay ga phổ thông không có số lùi; nếu là xe điện, xe ba bánh hoặc xe cỡ lớn, đọc sách hướng dẫn để biết xe có chế độ lùi riêng hay không.' },
    { title: 'Đưa xe về trạng thái dễ dắt', detail: 'Xe số về số mo, xe tay ga tắt máy, giữ sẵn tay phanh trước để xe không tự trôi khi bắt đầu đẩy.' },
    { title: 'Quan sát trước khi lùi', detail: 'Nhìn thẳng ra phía sau và sang hai bên, kiểm tra có người, xe hay vật cản; tầm nhìn bị che thì nhờ người đứng canh.' },
    { title: 'Đẩy lùi từng bước ngắn', detail: 'Hai chân đặt xuống đất chắc, bước chậm, nhả phanh từng chút và bóp phanh khi cần dừng; không vặn ga lúc chân còn đang đẩy.' },
    { title: 'Biết lúc nào nên xuống dắt', detail: 'Nền dốc, nền trơn, chân không chạm đất vững hoặc xe quá nặng thì xuống xe và dắt lùi từ bên cạnh thay vì ngồi trên xe mà đẩy.' },
    { title: 'Nghi ngờ thì kiểm tra tiếp', detail: 'Xe dắt nặng bất thường hay không lùi được dù đã về số mo thì xem lại phanh đỗ, phanh bó và bánh kẹt; thấy tiếng cạ hoặc mùi khét thì dừng lại và nhờ thợ.' }
  ],
  warnings: [
    'Không dùng lực mạnh lên cần số để cố tìm số lùi; xe số phổ thông không có số này và cơ cấu chuyển số có thể bị cong hoặc mòn.',
    'Không vặn ga khi chân đang đẩy lùi; xe có thể lao tiến bất ngờ khi còn gài số hoặc còn nổ máy và người lái dễ mất thăng bằng.',
    'Không bấm thử nút hay công tắc lạ trên xe điện khi xe đang chạy; hãy đọc sách hướng dẫn và thử ở chỗ trống khi xe đứng yên.',
    'Không lùi ra đường có xe cộ qua lại khi tầm nhìn phía sau bị che; nhờ người đứng quan sát hoặc dắt xe từ bên cạnh.'
  ],
  notes: [
    'Cấu tạo và tính năng khác nhau tùy từng dòng xe: một số xe cỡ lớn, xe ba bánh và xe điện có chế độ lùi bằng cụm bánh răng hoặc bằng mô-tơ, còn cách bật và giới hạn sử dụng chỉ có trong sách hướng dẫn của xe đó.',
    'Bài tập trung vào lý do xe máy phổ thông không có số lùi và những điều nên làm khi cần lùi; kỹ thuật đẩy lùi chi tiết, xe dắt nặng bất thường và cấu tạo bộ truyền xe tay ga đã có các bài riêng trên trang.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hộp số, chế độ lùi và cách dắt xe',
    'Tài liệu kỹ thuật cơ bản về truyền động xe hai bánh và tài liệu đào tạo lái xe an toàn'
  ],
  related: [
    'lui-xe-may-ra-khoi-cho-do-an-toan-ky-thuat-day-lui-va-quan-sat',
    'xe-may-dat-nang-bat-thuong-hoac-khong-lui-duoc-khoa-phanh-do-phanh-bo-con-gai-so-hay-banh-ket-thu-theo-thu-tu',
    'lo-de-may-khi-xe-so-con-gai-so-hoac-quen-bop-con-xe-nhich-hay-lao-toi-co-hai-gi-va-cach-khoi-dong-dung',
    'xe-may-do-chung-cho-voi-o-to-trong-gara-san-chung-hay-ham-cua-xe-bat-mo-o-to-lui-va-cach-dat-xe-cho-an-toan',
    'dau-hop-so'
  ]
};
