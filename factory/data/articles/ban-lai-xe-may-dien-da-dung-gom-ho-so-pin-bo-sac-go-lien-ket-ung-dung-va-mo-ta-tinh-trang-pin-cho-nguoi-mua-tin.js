// AI WIKI TOTAL — S01879; hướng dẫn bán lại xe máy điện đã dùng, không nêu số liệu, tên hãng hay thủ tục chuyển chủ.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'ban-lai-xe-may-dien-da-dung-gom-ho-so-pin-bo-sac-go-lien-ket-ung-dung-va-mo-ta-tinh-trang-pin-cho-nguoi-mua-tin',
  title: 'Bán lại xe máy điện đã dùng: gom hồ sơ pin, bộ sạc, gỡ liên kết ứng dụng và mô tả tình trạng pin cho người mua tin',
  seoTitle: 'Bán lại xe máy điện cũ: hồ sơ pin, bộ sạc và gỡ liên kết ứng dụng',
  metaDescription: 'Bán lại xe máy điện cũ cần gom hồ sơ pin, bộ sạc, mô tả pin trung thực, gỡ liên kết ứng dụng và chìa thông minh, cho thử xe an toàn rồi bàn giao rõ ràng.',
  summary: 'Bài hướng dẫn người đang dùng xe máy điện chuẩn bị bán lại. Nội dung giải thích vì sao người mua lo nhất về pin và bộ sạc, cách gom hồ sơ gồm giấy tờ mua bán, sổ bảo hành, hóa đơn sửa chữa và đồ giao kèm, cách mô tả pin bằng lời trung thực mà không hứa điều mình không đo được, cách gỡ liên kết ứng dụng, tài khoản, chìa thông minh và định vị theo hướng dẫn của nhà sản xuất, rồi cho thử xe an toàn và giao xe bằng biên bản ghi tình trạng. Bài không bàn thủ tục chuyển chủ.',
  quickAnswer: 'Muốn bán lại xe máy điện đã dùng, hãy gom hồ sơ, bộ sạc đúng loại, chìa phụ và sách hướng dẫn; mô tả pin bằng điều bạn thực sự quan sát như quãng đi thường ngày, pin đã thay chưa, xe từng ngập hay va chạm không; gỡ ứng dụng, tài khoản và chìa thông minh theo hướng dẫn của nhà sản xuất; cho thử xe có người đi cùng; giao xe kèm biên bản. Đừng hứa điều mình không đo được.',
  keyPoints: [
    'Người mua xe điện cũ lo nhất về pin và bộ sạc vì đây là phần đắt, khó kiểm tra bằng mắt và xuống cấp âm thầm, nên bạn cần trả lời bằng thông tin kiểm chứng được.',
    'Hồ sơ nên gom thành một bộ: giấy tờ mua bán, sổ bảo hành, hóa đơn thay pin hay sửa chữa, lịch sạc và bảo dưỡng nếu có ghi, bộ sạc đúng loại, chìa phụ và sách hướng dẫn.',
    'Mô tả pin bằng sự việc: quãng đi thực tế gần đây trong điều kiện bạn thường đi, pin đã thay chưa, xe có từng ngập hay va chạm không; không hứa điều không đo được.',
    'Gỡ xe khỏi ứng dụng, tài khoản, chìa thông minh và định vị theo hướng dẫn của nhà sản xuất, và đừng đưa mật khẩu tài khoản cá nhân cho người mua.',
    'Cho thử xe có người đi cùng trên đường vắng, giữ giấy tờ xe trong tay, rồi giao xe kèm biên bản ghi tình trạng và danh sách đồ đi theo.'
  ],
  category: 'learn',
  hub: 'kien-thuc-xe-dien',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['xe máy điện đã dùng', 'pin xe điện', 'bộ sạc', 'hồ sơ bảo hành', 'chìa thông minh', 'biên bản bàn giao'],
  keywords: ['bán lại xe máy điện cũ', 'bán xe điện đã dùng cần chuẩn bị gì', 'mô tả pin khi bán xe điện', 'gỡ ứng dụng trước khi bán xe điện'],
  sections: [
    P('Vì sao người mua xe điện cũ lo nhất về pin và bộ sạc', [
      'Người đến xem một chiếc xe máy điện cũ thường nhìn thân xe trước, nhưng câu hỏi nằm sâu trong đầu họ lại là pin còn khỏe không và bộ sạc có đúng của xe không. Hai thứ này là phần đắt nhất của xe, đồng thời là phần khó kiểm tra nhất bằng mắt. Với xe xăng, người mua nghe tiếng máy, nhìn khói, thử ga là đoán được phần nào; với xe điện, vỏ pin sạch bóng hay xe chạy êm trong một đoạn thử ngắn chưa nói được gì về những chặng dài. Pin yếu đi từ từ theo cách dùng và cách sạc, không báo trước bằng tiếng động, nên người mua dễ cảm thấy mình đang đặt cược vào thứ không nhìn thấy được.',
      'Nỗi lo ấy có lý do cụ thể. Pin dùng lâu thường cho quãng đi ngắn dần so với lúc còn mới, nhanh hay chậm tùy loại pin, thói quen sạc và điều kiện sử dụng. Một cục pin từng ngập nước, va đập mạnh hoặc sạc bằng bộ sạc không phù hợp có thể xuống cấp nhanh hơn, thậm chí gây sự cố an toàn, trong khi bên ngoài chưa chắc lộ dấu hiệu gì. Bộ sạc cũng vậy: sạc thất lạc rồi thay bằng loại khác, dây nứt vỏ, đầu cắm cháy xém là những chi tiết khiến người mua dè chừng. Vì thế họ hay hỏi đi hỏi lại về pin, và những câu hỏi dồn dập đó thường không nhằm làm khó bạn mà để thay cho việc họ không tự đo được.',
      'Cách thiết thực nhất là đáp lại nỗi lo bằng thông tin kiểm chứng được thay vì lời hứa. Hồ sơ rõ ràng, bộ sạc đúng loại, lời mô tả pin bằng sự việc cụ thể và sự sẵn lòng để người mua mời thợ xem là bốn thứ làm họ yên tâm nhất, và bài này đi theo đúng thứ tự ấy. Những việc chung của người bán xe máy như dọn xe, chụp ảnh, viết tin đăng đã có bài về chuẩn bị bán xe máy cũ và bài về viết tin đăng bán xe máy cũ trung thực, nên ở đây chỉ bàn phần riêng của xe điện. Muốn hiểu người mua sẽ nhìn vào đâu, hãy đọc bài về mua xe máy điện cũ để thấy câu chuyện từ phía họ.'
    ]),
    P('Gom hồ sơ trước khi bán: giấy tờ, hóa đơn, bộ sạc và đồ giao kèm', [
      'Hồ sơ của xe điện nên được gom thành một bộ, cất trong một túi hoặc một thư mục ảnh trên điện thoại, trước khi bạn đăng bán. Trước hết là giấy tờ mua bán ban đầu và sổ bảo hành nếu còn giữ, vì chúng cho người mua biết xe đến từ đâu và đã đi qua những lần bảo hành nào. Tiếp theo là hóa đơn của mọi lần sửa chữa, đặc biệt hóa đơn thay pin, thay bộ điều khiển hay thay bộ sạc, vì đó là những mốc người mua tìm đầu tiên. Nếu bạn có ghi lại lịch sạc và bảo dưỡng, dù chỉ vài dòng trong sổ tay hay ghi chú điện thoại, hãy đưa vào luôn, vì thói quen sạc là điều không ai đoán được từ bên ngoài.',
      'Bộ sạc là món người mua kiểm tra sớm nhất, nên hãy tìm đúng bộ sạc đi kèm xe, xem dây có nứt vỏ, đầu cắm có cháy xém hay lỏng lẻo không. Từng dùng bộ sạc khác thay cho bộ gốc thì hãy nói thẳng và nêu lý do, vì giấu chuyện này rồi để người mua tự phát hiện sẽ làm mất lòng tin ngay. Chìa phụ, thẻ hay chìa thông minh dự phòng, sách hướng dẫn sử dụng cùng hộp hay túi đi kèm cũng nên tìm cho đủ. Sách hướng dẫn đặc biệt hữu ích cho người mới dùng xe điện, vì chuyện sạc, cất pin và ý nghĩa các đèn báo đều tùy xe. Thứ nào đã mất thì ghi rõ là không còn, đừng để người mua tưởng xe vẫn đủ đồ.',
      'Sau khi gom xong, hãy đối chiếu từng món với thực tế: hóa đơn có khớp những gì đã làm trên xe, sổ có ghi đều hay bỏ dở giữa chừng, bộ sạc cắm vào xe có vừa khớp không. Đừng chỉnh sửa hóa đơn, cũng đừng bổ sung ghi chú bảo dưỡng cho những việc thực tế chưa làm, vì người mua cẩn thận có thể gọi hỏi nơi đã sửa xe để đối chiếu. Một lời giải thích ngay thẳng về phần hồ sơ còn thiếu thường thuyết phục hơn bộ hồ sơ có vẻ đầy đủ nhưng lộ chỗ không khớp. Hãy chụp hồ sơ thành ảnh để gửi người mua nghiêm túc xem trước, che bớt thông tin cá nhân không cần thiết, và giữ bản gốc trong tay đến lúc giao xe.'
    ]),
    P('Mô tả tình trạng pin cho trung thực, không phóng đại và không tự hạ', [
      'Nguyên tắc cốt lõi khi nói về pin là chỉ nói điều bạn đã thấy và đã làm, không nói điều bạn chỉ đoán. Bạn không có dụng cụ đo thì đừng đưa ra kết luận kiểu pin còn rất tốt hay pin gần như mới, vì người mua nghe những câu đó như lời quảng cáo. Điều bạn biết chắc nằm ở chuyện đã xảy ra trong lúc dùng: đi quãng đường quen thuộc của bạn thì sạc đầy đi được tới đâu, về đến nơi pin còn dư nhiều hay gần cạn, quãng đi so với dạo đầu thấy ngắn lại hay vẫn như cũ. Hãy kể bằng lời, theo điều kiện bạn thường đi, chẳng hạn đường phẳng hay nhiều dốc, đi một mình hay chở thêm người, trời nóng hay mát.',
      'Ngoài cảm nhận khi đi, có mấy sự thật về lịch sử pin mà người mua nào cũng muốn biết, và bạn nên nói trước khi họ hỏi. Pin đã từng thay chưa, thay vào lúc nào, có hóa đơn không. Xe có từng ngập nước, va chạm mạnh hay bị ngã đè lên khu vực đặt pin không. Pin có từng báo lỗi, sạc không vào, nóng bất thường hay tự ngắt giữa đường không. Những điều này nếu có thật thì cần nói ra, vì pin là bộ phận liên quan đến an toàn chứ không chỉ chuyện bền hay không bền. Nói thẳng một vấn đề đã xử lý, kèm hóa đơn nếu có, thường ít gây nghi ngờ hơn việc để người mua tự tìm ra sau khi nhận xe.',
      'Có ba điều bạn không nên làm. Một là hứa điều mình không đo được, như pin còn dùng bền thêm lâu hay chắc chắn không phải thay trong thời gian tới. Hai là hạ thấp pin quá mức vì sợ bị hỏi khó; mô tả sai lệch theo chiều nào cũng làm người mua hiểu nhầm, và chiều tự hạ còn khiến chính bạn thiệt. Ba là giấu một lỗi đã biết. Thay vào đó, hãy mời người mua sạc thử, đi thử, và nếu họ muốn thì nhờ thợ có chuyên môn xem pin trước khi quyết định. Cách đọc tình trạng pin bằng thiết bị tùy từng loại xe và thuộc về thợ, bạn không cần tự kết luận.'
    ]),
    P('Gỡ liên kết ứng dụng, tài khoản, chìa thông minh và định vị', [
      'Một số xe máy điện đi kèm ứng dụng trên điện thoại để xem tình trạng pin, mở khóa, định vị hay nhận cảnh báo; có xe dùng chìa thông minh hoặc thẻ ghép với xe thay cho chìa cơ. Tất cả những liên kết đó đang gắn với tài khoản và điện thoại của bạn. Giao xe mà chưa gỡ thì người mua có thể không đăng nhập hay ghép chìa của họ được, còn bạn vẫn có thể thấy vị trí, hành trình hoặc nhận thông báo từ chiếc xe đã không còn là của mình. Cả hai chiều đều phiền: họ không dùng trọn vẹn được xe, và bạn để lộ thông tin cá nhân ra ngoài tầm kiểm soát trong khi dữ liệu của một người xa lạ lại hiện trên điện thoại của bạn.',
      'Cách gỡ khác nhau giữa các xe, nên nguồn đáng tin nhất là sách hướng dẫn hoặc chỉ dẫn chính thức của nhà sản xuất, không phải mẹo truyền miệng. Thường thì việc cần làm gồm gỡ xe khỏi danh sách thiết bị trong tài khoản của bạn, hủy ghép chìa thông minh, thẻ hay điều khiển từ xa nếu có, tắt chia sẻ quyền dùng xe với người thân, và xóa dữ liệu cá nhân như địa chỉ nhà hay lộ trình đã lưu. Xe nào cho phép chuyển quyền chủ tài khoản thì làm theo hướng dẫn chuyển; xe nào yêu cầu gỡ hẳn rồi để người mua tạo tài khoản riêng thì làm theo cách đó. Thiết lập lại xe về mặc định hay không cũng tùy xe, chỉ làm khi sách hướng dẫn nói rõ.',
      'Hai nguyên tắc nên giữ. Đừng đưa mật khẩu tài khoản cá nhân cho người mua, vì tài khoản ấy còn gắn với số điện thoại và thư điện tử của bạn; hãy để họ tạo tài khoản riêng hoặc nhận chuyển giao đúng cách. Và nên làm các bước gỡ ngay lúc giao xe, trước mặt người mua, để họ thấy xe đăng nhập và ghép chìa được. Làm xong, hãy mở ứng dụng trên điện thoại của bạn để chắc xe không còn hiện trong danh sách, rồi đổi mật khẩu nếu từng chia sẻ cho người khác dùng. Gặp bước nào không rõ, hãy hỏi nơi bảo hành của nhà sản xuất hoặc thợ có chuyên môn thay vì thử bừa, vì thao tác sai có thể làm khó cả hai bên.'
    ]),
    P('Cho thử xe an toàn rồi giao xe kèm biên bản và đồ đi theo', [
      'Cho người mua thử xe là lúc rủi ro dồn lại, vì bạn đưa chiếc xe của mình cho một người xa lạ. Hãy đi cùng hoặc chạy theo sát, chọn đường vắng, phẳng, ít xe, và đừng để người thử mang xe đi một mình ra phố. Giữ giấy tờ xe và chìa phụ trong tay bạn, chỉ đưa chìa đang dùng. Hỏi người thử đã quen xe điện chưa: xe điện thường phản ứng êm nhưng khá nhạy lúc vặn ga, nên người lần đầu dễ bất ngờ; hãy dặn họ vặn ga nhẹ, bóp phanh sớm và đội mũ bảo hiểm đầy đủ. Có mùi khét, vỏ pin nóng bất thường hay đèn báo lỗi sáng thì bóp phanh, dừng xe an toàn rồi tắt máy, để xe nơi thoáng, không sạc và nhờ thợ xem.',
      'Trước khi giao, hãy lập một biên bản ghi tình trạng, viết tay hay đánh máy đều được, hai bên cùng đọc rồi ký. Nội dung nên gồm tình trạng thân xe và những vết xước đã có, lời mô tả pin đúng như bạn đã nói với người mua, bộ sạc đi kèm, hồ sơ giao kèm, chìa chính và chìa phụ, cùng lời xác nhận rằng liên kết ứng dụng đã được gỡ hoặc chuyển. Chụp ảnh xe, bảng đồng hồ, bộ sạc và các giấy tờ ngay lúc giao, mỗi bên giữ một bản. Cách làm này bảo vệ cả hai: người mua có căn cứ về những gì đã được hứa, bạn có căn cứ rằng mọi điều đã nói ra đều nằm trên giấy.',
      'Phần giao kèm nên đối chiếu với danh sách đã gom ở trên: xe, pin, bộ sạc đúng loại, chìa chính và chìa phụ, thẻ hoặc chìa thông minh dự phòng, sách hướng dẫn, sổ bảo hành, hóa đơn thay pin hay sửa chữa. Với xe có pin tháo rời, hãy giao đúng pin đã thử cùng xe, đừng đổi sang pin khác vào phút bàn giao. Dặn người mua vài điều cơ bản về cách sạc và cất pin theo sách hướng dẫn của xe, vì thói quen của họ sẽ quyết định độ bền về sau. Chuyện chốt giao dịch và bàn giao có biên nhận đã được bàn trong bài về chuẩn bị bán xe máy cũ, bạn có thể đọc để làm trọn bước cuối.'
    ])
  ],
  checklist: [
    'Gom giấy tờ mua bán, sổ bảo hành, hóa đơn thay pin hay sửa chữa và lịch sạc bảo dưỡng nếu có ghi vào một bộ.',
    'Tìm bộ sạc đúng loại đi kèm xe, kiểm tra dây và đầu cắm, cùng chìa phụ, thẻ dự phòng và sách hướng dẫn.',
    'Viết sẵn lời mô tả pin bằng sự việc: quãng đi thực tế, pin đã thay chưa, xe có từng ngập hay va chạm không.',
    'Xem sách hướng dẫn của nhà sản xuất để biết cách gỡ xe khỏi ứng dụng, tài khoản, chìa thông minh và định vị.',
    'Chuẩn bị biên bản ghi tình trạng và danh sách đồ giao kèm để hai bên cùng đọc, ký và giữ mỗi bên một bản.'
  ],
  steps: [
    { title: 'Gom hồ sơ và đồ đi kèm', detail: 'Tập hợp giấy tờ mua bán, sổ bảo hành, hóa đơn, bộ sạc đúng loại, chìa phụ và sách hướng dẫn; món nào đã mất thì ghi rõ là không còn.' },
    { title: 'Viết lời mô tả pin trung thực', detail: 'Nói bằng sự việc bạn đã thấy: quãng đi trong điều kiện thường đi, pin đã thay chưa, xe có từng ngập hay va chạm không; không hứa điều không đo được.' },
    { title: 'Cho xem, cho thử xe có người đi cùng', detail: 'Chọn đường vắng, giữ giấy tờ xe trong tay, mời người mua sạc thử hoặc nhờ thợ có chuyên môn xem pin nếu họ muốn.' },
    { title: 'Gỡ liên kết và giao xe có biên bản', detail: 'Gỡ ứng dụng, tài khoản, chìa thông minh theo hướng dẫn của nhà sản xuất ngay lúc giao, rồi lập biên bản ghi tình trạng và đồ giao kèm.' }
  ],
  warnings: [
    'Có mùi khét, vỏ pin nóng bất thường, khói hoặc đèn báo lỗi khi thử xe hay khi sạc: bóp phanh, dừng xe an toàn, tắt máy, để xe nơi thoáng, không sạc tiếp và nhờ thợ có chuyên môn xem.',
    'Không giấu lỗi pin đã biết, không hứa điều mình không đo được và không tự mở vỏ pin hay bộ sạc để kiểm tra; việc đó thuộc về thợ có chuyên môn.',
    'Không đưa mật khẩu tài khoản cá nhân cho người mua và không để người thử xe đi một mình, nhất là khi giấy tờ xe và chìa phụ vẫn còn trong tay bạn.'
  ],
  notes: [
    'Cách gỡ liên kết, cách chuyển quyền chủ tài khoản và cách đọc tình trạng pin bằng thiết bị đều khác nhau tùy xe; hãy theo sách hướng dẫn của nhà sản xuất hoặc hỏi thợ có chuyên môn.',
    'Bài chỉ bàn phần riêng của xe điện khi bán lại; thủ tục chuyển chủ và chuyện giá cả không nằm trong phạm vi bài này.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần pin, bộ sạc, ứng dụng và chìa thông minh',
    'Hướng dẫn chính thức của nhà sản xuất về gỡ liên kết và chuyển tài khoản khi chuyển chủ xe'
  ],
  related: ['mua-xe-may-dien-cu-kiem-tra-pin-bo-sac-dong-co-va-nhung-diem-khac-xe-xang-cu', 'chuan-bi-ban-xe-may-cu', 'viet-tin-dang-ban-xe-may-cu', 'chong-trom-pin-va-bo-sac-xe-may-dien-khoa-khoang-pin-va-cat-bo-sac', 'pin-va-sac-xe-may-dien-nhung-dieu-can-biet']
};
