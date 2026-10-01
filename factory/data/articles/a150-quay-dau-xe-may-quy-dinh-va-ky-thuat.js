// AI WIKI TOTAL — bài mở rộng cụm /learn/kien-thuc-phap-ly/: quay đầu xe máy an toàn (slot S00150)
'use strict';

module.exports = {
  slug: 'quay-dau-xe-may-quy-dinh-va-ky-thuat',
  title: 'Quay đầu xe máy: quy định và kỹ thuật an toàn',
  seoTitle: 'Quay đầu xe máy đúng quy định và an toàn',
  metaDescription: 'Quay đầu xe máy chỉ được ở nơi cho phép, có xi-nhan và nhường đường. Bài viết chỉ cách đọc biển, kỹ thuật quay đầu an toàn và các lỗi hay gây tai nạn.',
  summary: 'Quay đầu tưởng là thao tác nhỏ nhưng nằm trong nhóm hành vi gây va chạm nhiều trên đường đô thị: xe sau không ngờ xe trước đang chuẩn bị xoay, người xoay vội vàng kiểm tra nửa vế rồi cắt ngang dòng xe, và hơn một lần tai nạn xảy ra vì người đảo chiều tin rằng "xe sau nhìn thấy mình rồi". Về quy định, luật đặt ba điều kiện gói gọn trong một câu: chỉ đảo chiều ở nơi cho phép, phải có tín hiệu báo trước cho các xe xung quanh, và phải nhường đường cho các phương tiện đi trên đường trước khi xoay. Bài viết này đi theo ba tầng: tầng quy định — đọc đúng biển cấm đảo chiều và biển cấm đi ngược chiều, phân biệt chỗ luật cho phép với chỗ dù không có biển nhưng vẫn nguy hiểm như khúc cua, dốc, chỗ qua đường sắt; tầng kỹ thuật — trình tự chuẩn của một cú đảo chiều an toàn từ lúc có ý định tới lúc hoàn tất cung xoay, cách xử lý khi đường hẹp phải xoay kiểu tiến lùi, và khi nào nên đẩy bộ thay vì cố xoay trong không gian không đủ; và tầng lỗi — những thói quen gây va chạm nhiều nhất như đảo chiều đột ngột không tín hiệu, xoay sát gờ chia đường, hay đảo chiều ngay trước đầu xe phía sau. Mục tiêu không phải học luật để đối phó, mà là làm cho thao tác đảo chiều trở thành một trong những cú thao tác chắc tay nhất của người lái — vì nó là thao tác duy nhất bắt buộc xe đi ngược lại toàn bộ dòng xe đang chạy.',
  quickAnswer: 'Trả lời ngắn: đảo chiều xe máy hợp lệ cần đủ ba điều kiện — nơi cho phép (không có biển cấm đảo chiều và không thuộc nhóm điểm cấm như khúc cua, dốc, chỗ qua đường sắt, trên cầu, đầu cầu), có tín hiệu báo trước cho các xe xung quanh, và nhường đường cho các phương tiện đang đi trên đường trước khi cắt ngang. Trình tự an toàn: xác định chỗ đủ rộng và tầm nhìn đủ xa, bật xi-nhan sớm, giảm tốc, kiểm tra gương và đảo chiều nhìn lại vai phía sẽ xoay, chờ dòng xe thoáng rồi xoay theo cung tròn đều ga — không đi vòng quá rộng lấn sang phần đường ngược chiều, cũng không xoay chết trong không gian không đủ. Đường hẹp không đủ xoay một cung: dùng kiểu tiến lùi hai nhịp — xe tiến chếch một góc, dừng, lùi xoay phần đuôi, rồi tiến tiếp — hoặc đẩy bộ lên vỉa hè nếu đường quá nhỏ. Ba lỗi gây va chạm nhiều nhất: đảo chiều không xi-nhan, xoay sát đầu xe phía sau mà không quan sát, và đảo chiều ngay sau gờ hoặc khúc cua nơi xe sau không nhìn thấy kịp.',
  keyPoints: [
    'Ba điều kiện hợp lệ của một cú đảo chiều: nơi cho phép, có tín hiệu báo trước, và nhường đường cho các phương tiện đang đi trên đường.',
    'Biển cấm đảo chiều khác biển cấm đi ngược chiều: một biển cấm đảo chiều không cấm đi thẳng, và ngược lại cần đọc cả hai trước khi chọn hướng.',
    'Dù không có biển cấm, tránh đảo chiều tại khúc cua, dốc, đầu cầu, gần giao cắt đường sắt và chỗ tầm nhìn bị che — hợp lệ nhưng vẫn là chỗ va chạm.',
    'Trình tự an toàn: xi-nhan sớm, giảm tốc, kiểm tra gương và nhìn qua vai, chờ thoáng, quay cung tròn đều ga — tuyệt đối không xoay trong thế bị bất ngờ.',
    'Đường hẹp dùng kiểu tiến lùi hai nhịp, và khi không gian thật sự không đủ thì đẩy bộ — một phút đẩy bộ an toàn hơn mọi cú xoay chết trong khe hẹp.',
    'Quay đầu đột ngột không xi-nhan là một trong những nguyên nhân va chạm sau đầu xe phổ biến nhất ở đường đô thị.',
  ],
  category: 'learn',
  hub: 'kien-thuc-phap-ly',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['đảo chiều xe', 'biển cấm đảo chiều', 'xi-nhan', 'nhường đường', 'giao cắt đường sắt', 'nơi tầm nhìn hạn chế'],
  keywords: ['quay đầu xe máy', 'quy định quay đầu xe máy', 'kỹ thuật quay đầu xe', 'biển cấm quay đầu', 'quay đầu xe an toàn', 'quay đầu ở đâu được phép'],
  sections: [
    {
      h2: 'Quy định: ba điều kiện của một cú đảo chiều hợp lệ',
      html: `<p>Luật giao thông đường bộ quy định việc đảo chiều theo nguyên tắc: người lái chỉ được đảo chiều ở nơi cho phép, phải có tín hiệu báo trước cho các phương tiện xung quanh, và phải nhường đường cho xe và người đang đi trên đường phần đường mình sắp cắt qua. Ba điều kiện này không tách rời — xoay ở nơi cho phép nhưng cắt ngang dòng xe khiến xe khác phải phanh gấp vẫn là vi phạm phần nhường đường; còn có tín hiệu rồi nhưng xoay ở chỗ cấm thì tín hiệu không cứu được tính hợp lệ của thao tác.</p>
<p>Trong thực tế xử lý vụ va chạm khi đảo chiều, phần lớn các ca xe đảo chiều nhận trách nhiệm chính, vì nguyên tắc chung là phương tiện chuyển hướng phải nhường cho phương tiện đi thẳng. Điều này có nghĩa về mặt kỹ thuật lái: một cú đảo chiều an toàn không hoàn thành khi mình xoay xong xe, mà hoàn thành khi toàn bộ các xe xung quanh đã biết trước và không phải đổi gì vì cú xoay đó. Cách nghĩ này biến quy định nhường đường thành kỹ năng lái cụ thể — quan sát, tín hiệu, chờ thoáng.</p>
<p>Cần nói rõ thêm phần dễ nhầm: một số người coi đảo chiều ở đâu cũng được nếu không thấy biển cấm. Thực tế các nhóm điểm cấm đảo chiều không nhất thiết có biển ở từng chỗ — trên cầu, đầu cầu, nơi giao cắt với đường sắt, đoạn đường đông, khúc cua tầm nhìn hạn chế thuộc nhóm mà dù không có biển, việc đảo chiều ở đó vẫn vi phạm và hơn thế, là tự đặt mình vào thế va chạm không đường tránh. Biển chỉ là một nguồn thông tin; nguyên tắc an toàn và tầm nhìn là nguồn còn lại.</p>`,
    },
    {
      h2: 'Đọc biển và đọc đường: chỗ nào xoay được, chỗ nào không nên',
      html: `<p>Hai loại biển cần phân biệt trước khi đảo chiều: biển cấm đảo chiều ngược chiều và biển cấm đi ngược chiều. Biển cấm đảo chiều có mũi tên xoay tròn bị gạch đỏ — nó cấm đúng thao tác đảo chiều nhưng không cấm tiếp tục đi thẳng hay rẽ; biển cấm đi ngược chiều có mũi tên chỉ thẳng lên bị gạch — nó cấm lấn vào phần đường chạy hướng ngược, và hiển nhiên cũng cấm đảo chiều sang hướng đó, nhưng vẫn cho phép rẽ vào ngách hợp lệ. Nhầm hai biển này dẫn tới hai lỗi ngược chiều nhau: sợ đi thẳng vì thấy biển cấm đảo chiều, hoặc mải rẽ rồi phát hiện lấn vào đường một chiều.</p>
<p>Ngoài biển còn phải đọc đường: chỗ hợp lệ để đảo chiều là đoạn thẳng, tầm nhìn xa hai phía chục mét trở lên, mặt đường đủ rộng cho cung xoay mà không lấn qua phần đường ngược chiều quá lâu, và không có điểm mù che như gờ cầu, cột biển lớn, cây, xe đỗ sát mép. Chỗ không nên xoay dù không cấm: khúc cua — xe sau tới với tốc độ và không thấy người lái đang xoay giữa cua; dốc — khi dừng giữa cú xoay, xe dễ trôi; sát đầu cầu và trên cầu; và gần giao cắt đường sắt — nhóm này thuộc diện tuyệt đối, không có chuyện cân nhắc mức độ an toàn tương đối.</p>
<p>Một nguyên tắc thực tế giúp chọn chỗ xoay trong đô thị: nếu phải đi thêm vài trăm mét tới điểm rẽ hợp lệ — ngã tư có đèn, đoạn có gờ đảo chiều, hay khoảng trống đường hai chiều rộng — thì đi thêm đoạn đó luôn rẻ hơn xoay giữa dòng. Người lái quen thành thị thường có sẵn vài "điểm xoay quen" trên cung đường hằng ngày của mình, và đó chính là cách áp dụng đúng nhất của toàn phần này: chọn chỗ xoay trước khi cần xoay, không phải lúc đứng giữa dòng mới tìm.</p>`,
    },
    {
      h2: 'Trình tự một cú đảo chiều an toàn từ đầu tới cuối',
      html: `<p>Trước tiên là quyết định sớm: ngay khi có ý định xoay, quét gương xem xe phía sau đang thế nào — xe đông và gần thì đi tiếp tới điểm khác, không phanh ngay giữa dòng. Tiếp theo là tín hiệu: bật xi-nhan sớm chừng vài giây trước khi giảm tốc thực sự, để xe sau hiểu tín hiệu đi liền với giảm tốc chứ không bị bất ngờ. Sai ở trình tự này — phanh trước, xi-nhan sau — là lỗi trình tự phổ biến nhất khiến xe sau rít phanh ngay sau đầu xe mình.</p>
<p>Giai đoạn chờ thoáng: dính sát vào lề phía sẽ xoay, giảm tốc về gần dừng, kiểm tra gương rồi ngoảnh đầu nhìn qua vai phía xoay — khoảng mù gương không che được khu vực này. Cách kiểm tra đúng là nhìn thật, không phải "nghĩa là không có xe": hai bên, rồi xa theo hướng mình sẽ cắt qua, rồi gần theo hướng xe sẽ chạy tới sau khi xoay xong. Chờ tới khi khoảng trống hai hướng đều đủ — nhớ rằng sau cú xoay, xe mình về hướng ngược, tức cả hai dòng đều liên quan tới mình.</p>
<p>Thực hiện cung xoay: ga nhẹ và đều, xoay lái một nhịp dứt khoát theo cung tròn lớn nhất mà mặt đường cho phép — cung càng rộng, xe càng thẳng đứng và càng ít chổng. Ngược lại, xoay chết lái trong không gian hẹp làm xe nghiêng mạnh, chân tiếp đất thấp, và nếu có đồ nặng hoặc người ngồi sau thì đây đúng lúc mất thăng bằng. Hoàn tất: về thẳng hướng mới, tắt xi-nhan, tăng tốc theo dòng xe mới, và một lần kiểm tra gương cuối để chắc rằng không có xe nào phải phanh gấp vì mình. Tổng thời gian chuẩn của một cú xoay an toàn trong đô thị thường chỉ hơn một cú xoay vội khoảng mười lăm giây — cái giá rất nhỏ cho việc không phải đứng giải quyết tai nạn cả buổi.</p>`,
    },
    {
      h2: 'Đường hẹp: xoay kiểu tiến lùi hai nhịp và khi nào nên đẩy bộ',
      html: `<p>Không phải con đường nào cũng đủ rộng cho một cung xoay liên tục, và kỹ năng bù trừ cho hẹp là xoay kiểu tiến lùi hai nhịp: xe tiến chếch về một góc tới khi đầu xe gần sát mép, dừng chắc với chân tiếp đất, lùi nhẹ trong lúc xoay lái để phần đuôi xe xoay qua, rồi tiến tiếp theo hướng mới. Mỗi nhịp đều thực hiện chậm, ga nhỏ, và quan sát hai đầu mỗi lần đổi chiều tiến lùi — va chạm trong kiểu xoay này thường không với xe chạy, mà với xe đỗ sát mép và vỉa hè mà người lái quên không nhìn.</p>
<p>Điểm mấu chốt của kiểu xoay hẹp là biết dừng đúng lúc: nếu sau nhịp đầu đã thấy không gian vẫn không đủ, đừng cố nhịp hai ba trong khe hẹp — xe nghiêng giữa các lần lùi là lúc dễ ngã nhất của cả thao tác. Kỹ năng cao hơn ở đây không phải xoay gọn, mà là nhận ra sớm "cái ngõ này không xoay nổi" và đổi phương án trước khi xe đã nghiêng nửa chừng.</p>
<p>Phương án cuối cùng luôn tồn tại và luôn rẻ: xuống đẩy. Với xe số phổ thông, một người trưởng thành đẩy xe xoay trong khoảng ngõ rộng vài mét là việc nhẹ, và lên xuống xe hai lần vẫn nhanh hơn mọi hậu quả của việc cố xoay trong chỗ quá hẹp. Kỷ luật nhỏ nên tập: nếu ước lượng cung xoay chạm tới hai mép ngõ, xuống xe ngay từ đầu — quyết định này trong vài giây đầu quyết định cả thao tác, vì sau khi xe đã chếch nửa vế thì xuống đẩy còn khó hơn.</p>`,
    },
    {
      h2: 'Những lỗi gây va chạm nhiều nhất khi đảo chiều',
      html: `<p>Lỗi số một về tần suất là đảo chiều không tín hiệu: người lái quen đường tự động thao tác ở điểm quen, xe sau không được báo trước gì và phải phanh gấp. Đáng chú ý là lỗi này không chỉ ở người mới — người đi lâu năm quen tay lại chính là nhóm hay bỏ tín hiệu nhất, vì thao tác đã thành phản xạ không qua phần ý thức. Tập lại thói quen bật xi-nhan mọi cú xoay, kể cả ngõ vắng, là cách giữ phản xạ này luôn đi kèm tín hiệu.</p>
<p>Lỗi số hai là đảo chiều sau gờ hoặc khúc cua — vị trí xe sau không nhìn thấy mình tới kịp. Thói quen tương ứng cần rèn: trước khi xoay, tự hỏi "xe chạy phía sau nhìn thấy mình từ bao xa" — nếu câu trả lời nhỏ hơn khoảng cách phanh an toàn của tốc độ đường đó, dịch điểm xoay tới chỗ nhìn thoáng hơn. Đây là lý do nhiều tai nạn đảo chiều không phải do người quay vi phạm gì về biển, mà do chọn đúng chỗ hợp lệ nhưng tầm nhìn không đủ cho tốc độ của dòng xe.</p>
<p>Lỗi số ba là "nhào" vào khe hẹp giữa hai xe với niềm tin xe xa sẽ nhường — cách đánh đổi an toàn lấy vài giây. Nguyên tắc chờ thoáng không phải là chờ tới đường hoàn toàn trống, mà là chờ tới khoảng trống mà xe gần nhất thấy mình rõ và có đủ khoảng phanh; khoảng trống đúng là khoảng mà cả hai bên cùng thấy nhau, và phần quyết định khoảng đó thuộc về người xoay. Cuối cùng, một lỗi nhẹ nhưng gây khó chịu nhiều: xoay xong nhưng phanh chậm vặt lại giữa làn vì chưa chắc hướng — hoàn tất cú xoay về đúng làn và đúng tốc độ dòng xe cũng là một phần của thao tác, không phải phần tùy chọn.</p>`,
    },
    {
      h2: 'Quay đầu với người ngồi sau, hàng nặng và xe ga',
      html: `<p>Người ngồi sau thay đổi đáng kể khối lượng và trục xoay của xe: xe có người sau nghiêng dễ hơn, chân tiếp đất phải gánh thêm, và nếu người sau không hay biết sắp xoay, sự dịch người của họ giữa cú xoay làm lệch thăng bằng. Quy tắc giao tiếp trước khi lên đường: báo trước các cú xoay và dừng đột ngột, và nếu chở người mới ngồi sau thì chọn những điểm xoay rộng rãi, xoay chậm cho tới khi đôi bên hợp nhịp. Một người sau biết trước để nhích người theo hướng xoay giúp cú xoay gọn hẳn — và đó là thứ tự quen dần của các cặp anh chị em đi cùng xe nhiều năm.</p>
<p>Hàng nặng thay đổi khác: khối lượng cao làm cung xoay rộng ra và xe khó dừng giữa chừng, nên với hàng chồng cao hoặc đồ hai bên cồng kềnh, giảm thêm tốc và chọn thêm khoảng trống so với mức thấy vừa. Điểm hay quên là gương bị che: thùng hàng sau che gương thì các cú kiểm tra trước khi xoay phải đảo chiều nhìn thật nhiều hơn thường lệ — gương đã không nói được gì thì đừng dựa vào gương.</p>
<p>Xe ga có lưu ý riêng: tay lái ga nằm cùng chỗ với tay xoay, nên trong cú xoay gấp người mới dễ vênh ga gây xe giật — kỹ thuật là giữ cổ tay khoá ga ổn định trong lúc xoay, và thực hành các cú xoay chỗ trống để tạo phản xạ riêng cho thao tác ga không nổ vụt. Với mọi loại xe, một mẹo chung cho đảo chiều hàng nặng và chở người: luôn bắt đầu và kết thúc cú xoay ở tư thế xe gần thẳng đứng — mọi phần nghiêng của cú xoay chỉ nên diễn ra ở đoạn giữa, khi xe đã có tốc độ xoay đều.</p>`,
    },
  ],
  checklist: [
    'Có biển cấm đảo chiều hoặc cấm đi ngược chiều: không xoay — đi tới điểm rẽ hợp lệ kế tiếp.',
    'Chỗ không nên xoay dù không cấm: khúc cua, dốc, trên cầu, gần đường sắt, tầm nhìn bị che — dịch điểm xoay tới chỗ thoáng.',
    'Trình tự: xi-nhan sớm, giảm tốc, gương và nhìn qua vai, chờ hai hướng thoáng đủ, quay cung tròn đều ga, về đúng làn rồi tắt xi-nhan.',
    'Đường hẹp: nếu ước lượng cung xoay chạm hai mép, xuống đẩy ngay từ đầu — không cố xoay chết trong khe hẹp.',
    'Chở người sau hoặc hàng nặng: báo trước cú xoay, chọn điểm rộng hơn và chậm hơn, gương bị che thì nhìn thật nhiều hơn.',
    'Trước mỗi cú xoay tự hỏi: xe phía sau nhìn thấy mình từ bao xa — câu trả lời nhỏ hơn khoảng phanh an toàn thì đổi điểm xoay.',
  ],
  steps: [
    { title: 'Chọn điểm xoay trước khi cần xoay', detail: 'Quét trước đoạn đường tới: tìm chỗ thẳng, tầm nhìn xa hai phía, mặt đường đủ rộng — có biển cấm hoặc tầm nhìn kém thì đi tiếp tới điểm hợp lệ kế tiếp.' },
    { title: 'Báo tín hiệu và giảm tốc đúng trình tự', detail: 'Bật xi-nhan trước vài giây rồi mới phanh giảm tốc, dính sát lề phía sẽ xoay để không cản dòng xe phía sau.' },
    { title: 'Kiểm tra và chờ khoảng trống', detail: 'Kiểm tra gương, ngoảnh đầu nhìn qua vai phía xoay, chờ tới khoảng trống mà cả hai hướng đều thấy mình rõ và có đủ khoảng phanh — không nhào vào khe hẹp.' },
    { title: 'Thực hiện cung xoay và về làn', detail: 'Ga nhẹ đều, xoay lái dứt khoát theo cung tròn lớn nhất có thể, hoàn tất về đúng làn hướng mới, tắt xi-nhan và kiểm tra gương lần cuối trước khi tăng tốc.' },
  ],
  warnings: [
    'Không bao giờ đảo chiều sau gờ, khúc cua hoặc chỗ bị che khuất — xe sau không thấy mình tới kịp là va chạm gần như không tránh được.',
    'Quay đầu không xi-nhan là lỗi phổ biến nhất nhóm này — tập bật xi-nhan mọi cú xoay, kể cả chỗ vắng, để phản xạ luôn đi kèm tín hiệu.',
    'Gần giao cắt đường sắt và trên cầu tuyệt đối không đảo chiều — nhóm này không có mức an toàn tương đối để cân nhắc.',
  ],
  notes: [
    'Đi thêm vài trăm mét tới điểm rẽ hợp lệ luôn rẻ hơn xoay giữa dòng — chọn chỗ xoay trước khi cần xoay là cách áp dụng đúng nhất của toàn phần kỹ năng này.',
    'Quay kiểu tiến lùi hai nhịp cần quan sát hai đầu mỗi lần đổi chiều — va chạm kiểu này thường với xe đỗ sát mép và vỉa hè chứ không phải xe đang chạy.',
  ],
  references: [
    { title: 'Dừng đỗ xe máy đúng quy định', url: 'https://thuexemayhanoi.github.io/total/learn/kien-thuc-phap-ly/dung-do-xe-may-dung-quy-dinh/' },
    { title: 'Qua vòng xuyến: quy tắc ưu tiên và kỹ năng', url: 'https://thuexemayhanoi.github.io/total/learn/kien-thuc-phap-ly/qua-vong-xuyen-quy-tac-uu-tien-va-ky-nang/' },
  ],
  related: [
    'dung-do-xe-may-dung-quy-dinh',
    'qua-vong-xuyen-quy-tac-uu-tien-va-ky-nang',
    'hoc-lai-xe-may-tu-dau-cho-nguoi-moi',
    'ky-thuat-di-deo-doc-an-toan',
  ],
};
