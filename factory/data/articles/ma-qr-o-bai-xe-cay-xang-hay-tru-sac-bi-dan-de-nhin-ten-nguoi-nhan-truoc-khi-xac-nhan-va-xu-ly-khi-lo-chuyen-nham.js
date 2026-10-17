// AI WIKI TOTAL — S01783; nhận biết bằng quan sát và thói quen đối chiếu, không nêu số liệu, tên ngân hàng, ứng dụng hay địa điểm.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'ma-qr-o-bai-xe-cay-xang-hay-tru-sac-bi-dan-de-nhin-ten-nguoi-nhan-truoc-khi-xac-nhan-va-xu-ly-khi-lo-chuyen-nham',
  title: 'Mã QR ở bãi xe, cây xăng hay trụ sạc bị dán đè: nhìn tên người nhận trước khi xác nhận và xử lý khi lỡ chuyển nhầm',
  seoTitle: 'Mã QR bị dán đè ở bãi xe, cây xăng: đọc tên người nhận trước khi trả',
  metaDescription: 'Mã QR thu tiền ở bãi xe, cây xăng hay trụ sạc có thể bị dán đè. Cách đọc tên người nhận, nhận ra bảng mã lạ và việc cần làm ngay khi lỡ chuyển nhầm.',
  summary: 'Bài giải thích mã QR dán đè là gì và vì sao người đang ngồi trên xe dễ trúng ở bãi gửi xe, cây xăng hay trụ sạc. Nội dung hướng dẫn thói quen đọc và đối chiếu tên người nhận trước khi bấm xác nhận, những dấu hiệu bảng mã có vấn đề, việc nên làm ngay khi lỡ chuyển nhầm, cách thận trọng với lời mời hỗ trợ lấy lại tiền, cùng phần việc của người giữ bãi hay chủ tiệm để bảng mã luôn đáng tin.',
  quickAnswer: 'Mã QR dán đè là một mã khác được dán chồng lên bảng thu tiền thật, nên tiền đi về tài khoản lạ. Cách chắc nhất là dừng xe, đọc tên người nhận hiện trên điện thoại và đối chiếu với người thu trước khi bấm xác nhận. Lỡ chuyển nhầm thì báo người thu, chụp lại bảng mã và giao dịch, rồi liên hệ nơi giữ tài khoản qua kênh chính thức; không đưa mã xác thực hay mật khẩu cho ai.',
  keyPoints: [
    'Mã QR dán đè là mã lạ phủ lên bảng thu tiền thật; nhìn vào chỉ thấy ô đen trắng nên không thể biết mã đúng hay sai nếu chỉ dựa vào hình dáng bảng.',
    'Điểm dịch vụ dễ trúng vì người trả đang ngồi trên xe, vội, trời tối hoặc nắng gắt, còn bảng mã thường nằm ở chỗ ít người trông.',
    'Thói quen đáng giữ nhất là đọc tên người nhận trên màn hình rồi mới bấm xác nhận, và hỏi người thu tài khoản đứng tên ai; tên không khớp thì dừng lại hỏi.',
    'Tem dán lệch, mép bong, có hai lớp chồng hoặc mã nằm khác chỗ người thu chỉ là tín hiệu để thận trọng; bảng trông sạch sẽ cũng chưa chứng minh được là đúng.',
    'Lỡ chuyển nhầm thì báo và chỉ bảng mã cho người thu, chụp lại bằng chứng, liên hệ nơi giữ tài khoản qua kênh chính thức, và tuyệt đối không đưa mã xác thực hay mật khẩu cho ai.'
  ],
  category: 'map',
  hub: 'bai-do-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['mã QR thu tiền', 'bảng mã dán đè', 'tên người nhận', 'bãi gửi xe', 'trụ sạc', 'kênh liên hệ chính thức'],
  keywords: ['mã QR bị dán đè ở bãi xe', 'kiểm tra tên người nhận khi quét mã', 'mã QR giả ở cây xăng', 'lỡ chuyển nhầm tiền khi quét mã', 'bảng mã thu tiền bị thay'],
  sections: [
    P('Mã QR dán đè là gì và vì sao dễ trúng ở điểm dịch vụ', [
      'Mã QR dán đè là trường hợp một mã khác được dán chồng lên đúng chỗ của bảng mã thu tiền vốn có, nên người quét tưởng mình đang trả cho chủ điểm nhưng khoản tiền lại đi về một tài khoản khác. Lớp dán thêm có thể là một tem nhỏ phủ vừa khít phần mã cũ, hoặc cả tấm in giống hệt bảng ban đầu. Bản thân mã không cho mắt thường điều gì để phân biệt: nhìn vào chỉ thấy những ô đen trắng, không thấy tên ai. Vì vậy thứ đáng tin không phải hình dáng của bảng, mà là thông tin hiện ra trên điện thoại sau khi quét. Có trường hợp người thu chỉ biết chuyện khi khách nói đã trả xong còn bên mình chưa nhận được gì.',
      'Điểm dịch vụ có nhiều điều kiện khiến người trả tiền khó cẩn thận. Bạn đang ngồi trên xe, một chân chống đất, mũ còn đội, phía sau có xe khác chờ nên chỉ muốn quét cho nhanh rồi đi. Ở bãi gửi xe, cây xăng hay trụ sạc, việc trả tiền thường nằm cuối một chuỗi việc khác như lấy xe, đổ xong hay rút sạc, và đầu óc đã chuyển sang chuyện kế tiếp. Trời tối hoặc nắng gắt làm màn hình khó đọc, chữ nhỏ dễ bị lướt qua. Quen tay quét ở một nơi cũng khiến bạn không còn nhìn lại, vì tin mọi thứ vẫn như hôm trước. Những yếu tố ấy không phải lỗi của bạn, nhưng chúng cho thấy vì sao dừng một nhịp trước khi bấm là quan trọng.',
      'Phía điểm thu cũng có những khe hở riêng. Bảng mã thường được dán ở cột, cổng, thân trụ hay mặt tủ, nơi người thu không đứng sát và không nhìn thường xuyên, nhất là lúc đông khách hoặc ca trực vắng người. Người muốn dán đè chỉ cần một khoảnh khắc không ai để ý. Bảng đặt ngoài trời còn chịu nắng mưa, nên tem cũ bong mép hay lệch là chuyện bình thường, và chính vẻ cũ kỹ ấy khiến một lớp dán thêm khó bị chú ý hơn. Khách trả xong thường đi ngay, ít ai quay lại báo, nên sai sót có thể tồn tại khá lâu. Biện pháp hiệu quả nhất vì thế không nằm ở việc đoán thủ đoạn, mà ở thói quen kiểm tra đơn giản trước khi xác nhận, dù bạn đứng ở phía trả hay phía thu.'
    ]),
    P('Đọc tên người nhận trước khi bấm xác nhận', [
      'Điểm kiểm tra đáng tin nhất nằm ở màn hình ngay trước nút xác nhận. Sau khi quét, nhiều ứng dụng thanh toán hiển thị tên hoặc tên rút gọn của chủ tài khoản nhận tiền; cách hiển thị, mức đầy đủ của tên và vị trí trên màn hình đều tùy từng ứng dụng, nên hãy làm quen với màn hình của chính mình. Thói quen cần tập là dừng lại ở màn hình ấy, đọc tên từ đầu đến cuối rồi mới nhìn tới số tiền và nút bấm. Đừng bấm theo phản xạ chỉ vì nút trông nổi bật. Nếu màn hình không cho thấy tên người nhận, hãy coi đó là lý do để hỏi thêm chứ không phải lý do để yên tâm, vì lúc ấy bạn chưa có gì để đối chiếu cả.',
      'Bước tiếp theo là đối chiếu. Tên hiện ra có khớp với tên cửa hàng, tên bãi xe, tên cây xăng hay tên người đang đứng thu tiền trước mặt bạn không? Tài khoản của điểm kinh doanh nhỏ có thể đứng tên cá nhân của chủ điểm chứ không phải tên cửa hàng, và tên đôi khi bị viết rút gọn hoặc bỏ dấu, nên không phải lúc nào cũng khớp từng chữ. Cách đơn giản và chắc chắn nhất là hỏi thẳng người thu rằng tài khoản nhận tiền ở đây đứng tên ai, rồi so với điều màn hình đang hiển thị. Người thu thật thường trả lời được ngay vì họ biết rõ tài khoản của mình. Câu hỏi ấy chỉ tốn một câu nói và không làm ai phật lòng.',
      'Gặp tên không khớp, hoặc người thu ngập ngừng không biết trả lời thế nào, hãy dừng lại và chưa bấm xác nhận. Một cái tên lạ chưa chắc là dấu hiệu xấu, vì có nơi nhờ người thân đứng tên hộ, nhưng chưa rõ thì chưa nên chuyển. Hãy hỏi lại, nhờ người thu xác nhận bằng cách khác, hoặc trả bằng một cách mà cả hai bên cùng thấy rõ ràng. Đừng để người đứng sau hối thúc quyết định thay bạn; chậm thêm một lát thường đỡ rắc rối hơn nhiều so với việc chuyển nhầm. Khi thao tác, hãy dừng hẳn xe ở chỗ không cản lối, chống xe chắc chắn, tắt máy rồi mới cầm điện thoại, và đọc lại cả số tiền một lần trước khi xác nhận.'
    ]),
    P('Dấu hiệu một bảng mã có vấn đề', [
      'Bảng mã bị dán đè thường để lại dấu vết vật lý mà bạn có thể thấy nếu chịu nhìn kỹ một lần. Tem hoặc tờ giấy mới nằm lệch so với khung viền của bảng, các góc không thẳng với những cạnh còn lại, hoặc có chỗ nhô lên khác với mặt phẳng xung quanh. Mép tem bong, cuộn nhẹ hay lộ keo; bề mặt gợn sóng vì bọt khí nằm dưới lớp dán. Màu in lệch tông so với phần còn lại của bảng, nét chữ mờ hơn hoặc sắc hơn hẳn các dòng khác cũng là điểm đáng để ý. Đặc biệt, nếu nhìn nghiêng thấy hai lớp chồng lên nhau, tức bảng có một lớp phía dưới và một lớp phía trên, thì nên coi đó là điều bất thường và hỏi lại người thu.',
      'Dấu hiệu thứ hai nằm ở vị trí đặt mã. Người thu thường chỉ tay vào một bảng mã quen thuộc, chẳng hạn tấm gắn ở quầy hay ở thân trụ. Nếu bạn thấy thêm một mã ở chỗ khác, như dán lên cột, nằm ngoài khung, hoặc người thu chỉ vào chỗ này mà bạn lại đang quét mã ở chỗ kia, hãy hỏi lại xem mã nào mới là mã của họ. Một điểm thu thường chỉ có một hai mã chính thức, và chủ điểm biết rõ chúng nằm đâu. Mã mới xuất hiện mà không ai nhắc tới là điều đáng hỏi. Cũng nên để ý khi mã được dán ở nơi người thu khó với tới hoặc không có thói quen kiểm tra, như mặt khuất của trụ hay góc xa nhất của bãi.',
      'Cần nói rõ rằng một bảng mã trông sạch sẽ, phẳng phiu chưa chứng minh được nó đúng. Lớp dán khéo có thể rất khó nhận ra bằng mắt, nên dấu hiệu vật lý chỉ là tín hiệu phụ để bạn thận trọng hơn, còn kiểm tra tên người nhận mới là chốt cuối. Ngược lại, bảng cũ bong mép cũng chưa chắc đã bị dán đè, có thể chỉ vì nắng mưa lâu ngày. Điều nên làm khi thấy dấu hiệu lạ là nói cho người thu biết và để họ tự xem xét, thay vì tự tay gỡ, xé hay che bảng. Gỡ tem có thể làm mất dấu vết cần giữ, và đó không phải việc của khách. Bạn chỉ cần chỉ cho họ thấy chỗ bất thường, rồi trả bằng cách khác nếu chưa chắc chắn.'
    ]),
    P('Lỡ chuyển nhầm thì làm gì ngay, và thận trọng với lời mời hỗ trợ lấy lại tiền', [
      'Nhận ra mình vừa chuyển cho một người lạ, phản xạ đầu tiên dễ là hoảng và bấm loạn, nên hãy chậm lại một nhịp. Việc đầu tiên là nói ngay với người thu đang đứng đó rằng khoản vừa trả chưa đến tay họ, rồi chỉ cho họ thấy bảng mã có vấn đề để họ tự kiểm tra và xử lý bảng của mình. Làm vậy có hai lợi: người thu biết để những khách sau không gặp chuyện tương tự, và họ là người có thể xác nhận việc họ chưa nhận được tiền. Đừng tự gỡ bảng, đừng cãi vã tại chỗ; mục tiêu là cả hai bên cùng nhìn thấy sự việc rõ ràng. Trong lúc đó, bạn vẫn nên đứng ở chỗ an toàn, chống xe chắc chắn và tắt máy khi thao tác.',
      'Tiếp theo là giữ bằng chứng. Hãy chụp lại bảng mã từ gần và từ xa để thấy cả vị trí của nó, chụp màn hình giao dịch cùng thông tin người nhận đang hiển thị, và ghi lại thời điểm xảy ra cũng như tên điểm dịch vụ. Sau đó liên hệ với nơi đang giữ tài khoản hoặc ví của bạn qua kênh chính thức mà chính nơi ấy công bố. Không gọi theo số lạ, không bấm vào đường link do ai đó nhắn tới, kể cả khi họ nói họ đến từ nơi ấy. Bên giữ tài khoản sẽ hướng dẫn bạn bước kế tiếp; bài này không bàn trình tự xử lý của họ vì mỗi nơi mỗi khác, và cũng không có gì bảo đảm một kết quả cụ thể.',
      'Sau một lần chuyển nhầm, người đang bối rối dễ gặp thêm một vòng rủi ro khác: những lời mời hỗ trợ lấy lại tiền xuất hiện rất nhanh, qua tin nhắn, cuộc gọi hay bình luận, tự xưng là người giúp được. Có trường hợp người ta lợi dụng lúc lo lắng ấy để xin thêm thông tin. Hãy nhớ một nguyên tắc: không đưa mã xác thực, mật khẩu hay mã dùng một lần cho bất kỳ ai, dù người đó nói giọng thân thiện, nói đúng nội dung giao dịch của bạn hay bảo rằng làm vậy mới lấy lại được tiền. Đừng cài phần mềm do người lạ chỉ, đừng cho ai điều khiển điện thoại từ xa. Chưa chắc ai đang liên hệ mình thì hãy dừng cuộc trò chuyện và tự liên hệ lại qua kênh chính thức.'
    ]),
    P('Nếu bạn là người giữ bãi hay chủ tiệm', [
      'Phía người thu làm được nhiều hơn khách, vì bảng mã nằm ngay trong tầm tay của họ. Hãy tập thói quen nhìn lại bảng vào đầu ca và lúc khách thưa dần: có tem lạ không, mép có bong không, bề mặt có phẳng không, mã có còn nằm đúng chỗ quen không. Bạn cũng có thể tự quét thử mã của mình tới màn hình hiển thị tên rồi thoát ra mà không xác nhận, để xem tên hiện lên có đúng tài khoản của mình hay không; việc này nhanh và cho biết ngay bảng còn đúng hay đã bị thay. Nên dán bảng chắc chắn trên mặt phẳng, dùng chất liệu chịu thời tiết hoặc có lớp bảo vệ trong để dấu vết dán thêm dễ lộ ra. Thấy dấu hiệu lạ thì tạm dừng nhận tiền qua bảng ấy cho tới khi chắc chắn.',
      'Vị trí đặt bảng quan trọng không kém. Hãy để bảng ở nơi người thu nhìn thấy được từ chỗ đứng của mình, như ngay quầy hay cạnh lối ra vào, thay vì ở góc khuất. Với bãi rộng hoặc điểm có nhiều khu vực, nên hạn chế đặt nhiều bảng rải rác, vì càng ít nơi có mã thì càng ít chỗ cần canh. Nếu buộc phải có thêm bảng, hãy biết rõ từng bảng nằm ở đâu và ai chịu trách nhiệm xem. Ban đêm, chỗ thu tiền nên đủ sáng để khách đọc được tên trên màn hình và người thu nhìn rõ vùng dán. Nên cho khách biết điểm mình chỉ có những mã nào, để họ không quét nhầm một mã lạ ở chỗ khác.',
      'Cuối cùng, hãy biến việc đối chiếu thành một phần của cách thu tiền. Lúc khách chuẩn bị quét, người thu nói ngay tên tài khoản nhận tiền, hoặc ghi tên ấy ở chỗ dễ thấy cạnh bảng mã để khách tự đọc. Việc này cho khách thứ để so với màn hình, và giúp người thu sớm nhận ra khi có khách báo tên hiện ra không giống. Khi có khách nói đã trả mà bạn chưa nhận được, đừng vội nghi ngờ họ; hãy cùng xem bảng mã và màn hình của khách, vì rất có thể bảng đã bị thay. Hãy ghi lại sự việc, giữ nguyên hiện trạng bảng để xem xét và báo cho người chịu trách nhiệm quản lý điểm.'
    ])
  ],
  checklist: [
    'Dừng hẳn xe, chống xe chắc chắn và tắt máy trước khi cầm điện thoại để quét mã.',
    'Đọc tên người nhận hiện trên màn hình từ đầu đến cuối rồi mới bấm xác nhận.',
    'Hỏi người thu tài khoản nhận tiền đứng tên ai và đối chiếu với điều màn hình hiển thị.',
    'Nhìn nhanh bảng mã xem có tem lệch, mép bong, hai lớp chồng hoặc mã nằm khác chỗ người thu chỉ hay không.',
    'Không đưa mã xác thực, mật khẩu hay mã dùng một lần cho bất kỳ ai, kể cả người tự nhận là hỗ trợ.'
  ],
  steps: [
    { title: 'Dừng xe và đọc tên người nhận', detail: 'Đỗ ở chỗ không cản lối, chống xe chắc chắn, tắt máy, quét mã rồi đọc kỹ tên người nhận trước khi nhìn tới nút xác nhận.' },
    { title: 'Đối chiếu với người thu', detail: 'Hỏi tài khoản nhận tiền đứng tên ai, so với màn hình; tên không khớp hoặc người thu không rõ thì dừng lại, chưa chuyển.' },
    { title: 'Báo người thu và giữ bằng chứng', detail: 'Lỡ chuyển nhầm thì nói ngay với người thu, chỉ cho họ thấy bảng mã, rồi chụp bảng mã và màn hình giao dịch; không tự gỡ bảng.' },
    { title: 'Liên hệ qua kênh chính thức', detail: 'Tự liên hệ nơi giữ tài khoản hoặc ví của mình qua kênh chính thức; không gọi số lạ hay bấm đường link ai gửi tới.' }
  ],
  warnings: [
    'Không đưa mã xác thực, mật khẩu hay mã dùng một lần cho bất kỳ ai, dù họ nói sẽ giúp lấy lại tiền; cũng không cài phần mềm hay cho người lạ điều khiển điện thoại từ xa.',
    'Không cầm điện thoại thao tác khi xe còn đang lăn bánh hoặc đang chắn lối; dừng hẳn, chống xe chắc chắn rồi mới quét và xác nhận.',
    'Không tự gỡ, xé hay che bảng mã nghi ngờ; chỉ cho người thu thấy chỗ bất thường để chủ điểm tự xử lý và giữ nguyên hiện trạng.'
  ],
  notes: [
    'Cách hiển thị tên người nhận và các bước xác nhận khác nhau tùy từng ứng dụng; hãy làm quen với màn hình của chính bạn để biết tên hiện ở đâu.',
    'Bài chỉ nêu thói quen phòng tránh và việc nên làm ngay; cách xử lý tiếp theo do nơi giữ tài khoản hướng dẫn và không có gì bảo đảm kết quả.'
  ],
  references: [
    'Hướng dẫn sử dụng an toàn do nơi giữ tài khoản hoặc ví của bạn công bố',
    'Kênh hỗ trợ chính thức của nơi giữ tài khoản hoặc ví, do chính nơi ấy công bố'
  ],
  related: ['bai-do-xe', 'nho-nhan-vien-cay-xang-do-giup-nhin-tru-bom-noi-ro-loai-xang-va-muc-do-roi-kiem-tra-chia-nap-binh-truoc-khi-di', 'do-trong-cop-xe-may-bi-lay-khi-gui-xe-hoac-do-ngoai-duong-vi-sao-va-cach-giu-do', 'lay-nham-xe-may-giong-het-o-bai-gui-hoac-truoc-cua-hang-cach-nhan-ra-va-xu-ly', 'tra-cay-xang']
};
