// AI WIKI TOTAL — S01952 (topic V2); không nêu số liệu, tên hãng hay giá.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'quang-duong-con-di-duoc-tren-man-hinh-xe-may-dien-uoc-tinh-tu-dau-vi-sao-tut-nhanh-roi-hoi-lai-va-nen-tin-den-dau',
  title: 'Quãng đường còn đi được trên màn hình xe máy điện: ước tính từ đâu, vì sao tụt nhanh rồi hồi lại và nên tin đến đâu',
  seoTitle: 'Quãng đường còn lại xe máy điện: tính từ đâu, nên tin đến đâu',
  metaDescription: 'Màn hình xe máy điện báo còn đi được xa nhưng lên dốc hay chở hai là tụt mạnh, dừng nghỉ lại hồi: con số này tính từ đâu, vì sao nhảy và cách tự lập mốc tin cậy.',
  summary: 'Con số quãng đường còn lại trên màn hình xe máy điện không phải một phép đo trực tiếp. Xe ước tính nó từ trạng thái pin hiện tại và cách bạn đi gần đây, nên khi tải nặng, lên dốc, trời lạnh hay chạy nhanh thì số tụt mạnh, còn khi dừng nghỉ hoặc đi chậm thì hồi lại. Bài giải thích nguyên lý đó, cách phân biệt quãng đường, phần trăm pin và vạch pin, cách tự xây mốc tin cậy bằng các tuyến quen và biên an toàn, cùng dấu hiệu khi con số nhảy bất thường là chuyện của pin để ghi lại hỏi nơi bảo hành.',
  quickAnswer: 'Quãng đường còn lại là một con số ước tính, không phải đo trực tiếp: xe lấy mức pin hiện tại rồi nhân với mức tiêu hao của cách đi gần đây. Vì vậy nó tụt nhanh khi tải nặng hoặc lên dốc và hồi lại khi dừng hay đi chậm. Hãy xem nó như một con số tham khảo, dựa nhiều hơn vào phần trăm pin và vào mốc bạn tự ghi từ các tuyến quen, luôn chừa biên an toàn và đặt mốc quay đầu sớm hơn mức tưởng là cần.',
  keyPoints: [
    'Quãng đường còn lại là kết quả tính toán từ trạng thái pin và thói quen đi gần đây, không phải thứ có thể đo thẳng như quãng đường đã đi.',
    'Tải nặng, dốc, gió ngược, trời lạnh và tốc độ cao làm pin sụt điện áp và tiêu hao nhiều hơn, nên số tụt nhanh; dừng nghỉ thì điện áp phục hồi một phần và số hồi lên.',
    'Phần trăm pin thường mượt hơn và đáng tin hơn cho việc quyết định; vạch pin nhảy theo bậc và thường nghiêng về phía an toàn; quãng đường là số nhạy nhất với cách đi.',
    'Cách đáng tin nhất là tự lập mốc: ghi quãng đường thật của vài tuyến quen theo mức pin, giữ biên an toàn và đặt mốc quay đầu trước khi cần.',
    'Số nhảy quá bất thường, tụt sâu rồi bật lại liên tục dù cách đi không đổi, thường là chuyện của pin chứ không phải của màn hình; hãy ghi lại để trình nơi bảo hành.'
  ],
  category: 'learn',
  hub: 'kien-thuc-xe-dien',
  date: '2026-10-23',
  updated: '2026-10-23',
  entities: ['quãng đường còn lại xe máy điện', 'phần trăm pin', 'vạch pin', 'điện áp pin', 'sụt áp dưới tải', 'hệ thống quản lý pin', 'mốc quay đầu', 'biên an toàn'],
  keywords: ['quãng đường còn lại xe máy điện', 'xe máy điện báo còn đi được bao xa', 'vì sao quãng đường xe điện tụt nhanh', 'quãng đường xe điện tự tăng lại khi dừng', 'tin màn hình xe máy điện đến đâu'],
  sections: [
    P('Con số quãng đường còn lại được xe tính ra sao, vì sao không phải phép đo trực tiếp', [
      'Khi nhìn xuống màn hình và thấy xe báo còn đi được khá xa, rất dễ nghĩ rằng chiếc xe biết chắc đoạn đường phía trước. Thực tế thì xe không có cách nào biết trước bạn sắp đi lên dốc, gặp gió ngược hay chở thêm người. Thứ nó thật sự biết chỉ là tình trạng pin ngay lúc này, và vài thông tin về những gì đã xảy ra trong thời gian vừa qua. Con số quãng đường còn lại là kết quả của một phép tính ghép hai thứ đó lại, chứ không phải kết quả của một lần đo.',
      'Ở vế thứ nhất, xe ước lượng pin còn bao nhiêu năng lượng. Pin không có cái đồng hồ xăng như bình nhiên liệu, nên hệ thống quản lý pin phải suy ra từ điện áp, dòng điện đang chạy qua, nhiệt độ và đôi khi cả lịch sử nạp xả mà nó theo dõi. Hiểu đơn giản, đó là một cách đoán có cơ sở về lượng điện còn lại, và độ chính xác của lần đoán này đã có sai số ngay từ bước đầu. Pin mới, pin còn tốt thì phép đoán thường khớp hơn; pin đã dùng lâu thì đường cong điện áp thay đổi, phép đoán khó khớp hơn.',
      'Ở vế thứ hai, xe cần biết mỗi đoạn đường tốn bao nhiêu điện. Vì tương lai không biết được, xe lấy mức tiêu hao của quãng đường vừa đi để làm đại diện, thường là trung bình trong một khoảng thời gian hay quãng đường gần đây. Rồi nó lấy năng lượng còn lại chia cho mức tiêu hao đó để ra số đoạn đường còn đi được. Đây là lý do con số có vẻ rất chính xác mà lại thay đổi liên tục: nó chỉ là kết quả của phép chia giữa hai ước lượng, mà cả hai đều thay đổi theo từng giây.',
      'Hiểu như vậy sẽ bớt hoang mang. Nếu vừa chạy rất êm trên đường bằng, xe sẽ thấy mức tiêu hao thấp và báo một con số lạc quan. Chỉ cần vài phút gặp dốc hoặc chạy nhanh, mức tiêu hao trung bình tăng lên và con số rơi xuống, dù lượng pin gần như chưa mất bao nhiêu. Không ai nói dối ở đây; chiếc xe chỉ đang cập nhật lại phép chia của nó. Cũng vì vậy, những gì xe báo ngay sau khi sạc đầy phụ thuộc nhiều vào cách đi của lần trước, và hai chiếc xe cùng loại, cùng đầy pin, có thể báo hai con số khác nhau chỉ vì thói quen chạy của hai người chủ.'
    ]),
    P('Vì sao tụt nhanh khi tải nặng, lên dốc, trời lạnh rồi hồi lại khi dừng', [
      'Hiện tượng khiến nhiều người lo nhất là con số tụt rất nhanh khi lên dốc hay chở hai, rồi dừng lại nghỉ một lúc thì thấy nó nhích lên. Có hai nguyên nhân cùng tác động. Nguyên nhân thứ nhất là phép chia đã nói ở trên: khi tải nặng, mức tiêu hao tức thời tăng vọt, và xe cập nhật con số theo hướng xấu đi ngay. Nguyên nhân thứ hai nằm ở chính viên pin: khi phải cấp dòng điện lớn, điện áp của pin bị kéo xuống thấp tạm thời.',
      'Có thể hình dung viên pin như một cái bình chứa có đường ống dẫn ra hơi hẹp. Khi mở nước nhẹ, nước chảy ra thoải mái. Khi mở thật mạnh, nước vẫn còn trong bình nhưng áp lực ở đầu ra tụt xuống vì ống không kịp tải. Pin cũng vậy: dòng điện lớn làm điện áp đo được sụt xuống, trong khi lượng điện thật sự trong pin chưa mất tương ứng. Vì xe dựa một phần vào điện áp để đoán lượng điện còn lại, điện áp sụt thì phép đoán nghiêng về phía pin ít hơn thực tế.',
      'Khi bạn dừng lại hoặc đi chậm, dòng điện giảm, điện áp phục hồi một phần và phép đoán được điều chỉnh lên. Đó là lý do con số hồi lại như thể pin tự sạc, trong khi thực ra pin không hề thêm điện; chỉ có phép đoán trở nên bớt bi quan. Điều này không phải lỗi, mà là hành vi bình thường của pin, nhất là khi pin ấm lên sau lúc chịu tải và các phản ứng bên trong ổn định lại trong lúc nghỉ.',
      'Trời lạnh làm hiện tượng này rõ hơn. Pin lạnh có điện trở trong lớn hơn, nên cùng một dòng điện thì điện áp sụt nhiều hơn, và lượng điện có thể lấy ra được cũng giảm tạm thời. Ngược lại pin ấm lên khi chạy thì số liệu dễ chịu hơn. Gió ngược, chạy nhanh liên tục, lốp non, phanh bó và chở nặng đều làm mức tiêu hao cao hơn. Muốn hiểu sâu hơn phần dốc, bạn có thể đọc bài về xe máy điện lên dốc và xuống dốc dài, vì sao yếu pin tụt nhanh; còn trường hợp pin báo đầy mà nhanh hết đã có bài riêng về pin xe máy điện báo đầy nhưng nhanh hết, nên ở đây chỉ nói đến con số quãng đường.'
    ]),
    P('Quãng đường, phần trăm pin và vạch pin: cái nào mượt, cái nào nhảy, nên nhìn cái nào', [
      'Trên màn hình thường có đến ba loại thông tin về pin, và mỗi loại có tính cách riêng. Hiểu tính cách của chúng giúp bạn biết khi nào nên tin cái nào. Loại thứ nhất là phần trăm pin: đây là cách xe diễn đạt trạng thái năng lượng còn lại trên thang đầy tới cạn. Nó thường thay đổi chậm và mượt, ít chịu ảnh hưởng tức thời của tải, vì hệ thống thường làm trơn nó để người lái khỏi hoảng khi lên dốc.',
      'Loại thứ hai là vạch pin, tức vài ô hoặc vạch hiện trên màn hình. Vạch nhảy theo từng bậc nên người nhìn thấy ít thay đổi trong một thời gian dài, rồi đột ngột mất một vạch. Bậc cuối cùng thường được thiết kế để báo sớm, tức là nghiêng về phía an toàn, nhằm kéo người dùng dừng lại sạc trước khi hết thật. Vì thế đừng so vạch pin với phần trăm theo kiểu từng vạch bằng đúng một phần cố định; mỗi xe bố trí vạch theo một cách riêng.',
      'Loại thứ ba là quãng đường còn lại, và đây là con số nhạy nhất. Nó chịu ảnh hưởng của cả trạng thái pin lẫn cách đi gần đây, nên dao động nhiều nhất. Dùng nó để cảm nhận xu hướng thì hữu ích: đi êm thì số trụ lâu, đi dồn dập thì số tụt. Nhưng dùng nó làm cơ sở duy nhất để quyết định có đủ điện về nhà hay không thì không nên, nhất là khi trước chuyến đi bạn thay đổi hẳn cách đi, chẳng hạn từ đường bằng sang đường dốc hoặc từ đi một mình sang chở hai.',
      'Thói quen hợp lý là xem phần trăm pin làm thước chính để ra quyết định, xem vạch pin như lời nhắc cuối của xe, và xem quãng đường như một gợi ý về xu hướng chứ không phải một lời hứa. Khi ba thứ này nói những điều khá khác nhau, hãy tin theo hướng thận trọng hơn. Nếu phần trăm còn nhiều mà quãng đường báo rất ít sau một đoạn dốc, đừng vội kết luận pin hỏng; hãy đi êm một lúc trên đường bằng rồi xem con số có trở lại hợp lý không. Còn nếu cả ba cùng thấp, đó là lúc dành thời gian tìm chỗ sạc thay vì cố đi tiếp.'
    ]),
    P('Tự xây mốc tin cậy cho xe mình: tuyến quen, biên an toàn và mốc quay đầu', [
      'Thay vì tin hay không tin một con số, cách thiết thực hơn là tự xây một bảng đối chiếu cho chính chiếc xe và cách đi của mình. Việc này không cần dụng cụ gì ngoài điện thoại để ghi chú hoặc chụp màn hình. Chọn vài tuyến quen mà bạn đi thường xuyên, ví dụ đường đi làm, đường ra chợ, đường lên một đoạn dốc quen. Mỗi lần đi, hãy ghi lại mức phần trăm pin lúc xuất phát, mức pin lúc đến nơi và tuyến đó dài bao nhiêu theo đồng hồ của xe. Sau vài tuần bạn sẽ thấy tuyến nào ngốn pin nhiều, tuyến nào ít.',
      'Khi đã có vài dòng ghi chép, hãy thử đối chiếu với con số quãng đường mà xe báo lúc xuất phát. Bạn sẽ nhận ra xe thường báo hơi lạc quan hay hơi bi quan so với thực tế của bạn, và trong những điều kiện nào thì sai lệch lớn. Đó chính là mốc tin cậy của riêng chiếc xe này, hữu ích hơn mọi lời chung chung. Nhớ ghi cả những điều kiện đi kèm như có chở hai không, trời nóng hay lạnh, có mưa gió không, vì chúng quyết định phần lớn khác biệt giữa các lần đi.',
      'Tiếp theo, hãy đặt biên an toàn. Biên an toàn là phần pin bạn không bao giờ định dùng tới, để dành cho những chuyện bất ngờ như đường vòng, kẹt xe, gió lớn hoặc phải đổi lộ trình. Thay vì tính toán sát nút, hãy quyết định trước một mức phần trăm pin mà khi chạm tới bạn sẽ không đi thêm đường xa nữa mà tìm chỗ sạc. Với những chuyến đi chỉ có một chiều thuận lợi, như đi lên dốc rồi mới xuống, hãy tính riêng chặng đi và chặng về, đừng cộng gộp theo cảm tính.',
      'Cuối cùng là mốc quay đầu. Với chuyến đi đến nơi chưa chắc có chỗ sạc, hãy xác định mốc quay đầu ngay từ lúc xuất phát: khi pin tụt đến mức mà phần còn lại chỉ vừa đủ cho chặng về cộng biên an toàn, bạn phải quay lại, dù con số quãng đường lúc đó còn đẹp đến mấy. Nếu đang thử xe lạ hoặc thuê xe, các điều cần để ý đã nằm trong bài thử xe điện những điều cần biết; còn khi cất xe lâu ngày hoặc gửi xe đi xa, hãy xem hai bài về cất xe điện lâu ngày và gửi xe hoặc pin đi xa để giữ pin ở trạng thái tốt trước khi bắt đầu ghi mốc mới.'
    ]),
    P('Khi con số nhảy bất thường: dấu hiệu của pin và cách ghi lại để hỏi nơi bảo hành', [
      'Phần lớn các dao động đã nói ở trên là bình thường. Nhưng có những kiểu nhảy cho thấy vấn đề nằm ở pin hoặc hệ thống quản lý pin chứ không phải ở màn hình. Dấu hiệu thứ nhất là con số tụt sâu bất ngờ khi đi bình thường trên đường bằng, không dốc, không chở nặng, không có gì thay đổi về cách đi. Dấu hiệu thứ hai là con số lúc cao lúc thấp liên tục như bị giật cục, hoặc phần trăm pin nhảy từng cụm lớn thay vì trôi đều.',
      'Dấu hiệu thứ ba là xe tự tắt hoặc giảm sức kéo đột ngột khi màn hình vẫn báo còn nhiều pin, hay ngược lại màn hình báo gần cạn mà sau khi nghỉ một lúc lại báo còn khá nhiều và lặp lại nhiều lần. Dấu hiệu thứ tư là hai lần sạc đầy liên tiếp, đi cùng một tuyến theo cùng một cách, mà kết quả khác nhau rõ rệt. Khi pin đã dùng lâu, con số cũng kém tin cậy hơn, vì khả năng chứa của pin giảm dần trong khi phép đoán của xe có thể chưa theo kịp. Nếu những dấu hiệu này xuất hiện theo thói quen và kéo dài, nhiều khả năng pin đang có vấn đề cần người có chuyên môn kiểm tra.',
      'Để việc trao đổi với nơi bảo hành hiệu quả, hãy ghi lại cụ thể thay vì chỉ nói xe báo sai. Chụp màn hình lúc xuất phát và lúc xảy ra hiện tượng, ghi giờ, tuyến đường, có chở thêm người không, thời tiết ra sao, đã sạc đầy hay chưa và lần sạc gần nhất là lúc nào. Nếu hiện tượng lặp lại, ghi thêm lần xuất hiện sau đó và những gì giống hay khác. Một dãy ghi chép như vậy giúp thợ phân biệt được đâu là hành vi bình thường, đâu là hiện tượng cần đọc dữ liệu pin.',
      'Khi liên hệ, hãy mô tả điều đã quan sát thay vì tự kết luận pin hỏng, và đưa ra các ảnh chụp cùng bảng ghi tuyến quen của mình. Nếu màn hình đồng thời hiện biểu tượng hay mã lỗi, hãy xem thêm bài về biểu tượng và mã lỗi trên màn hình xe máy điện để biết cái nào chỉ là thông tin, cái nào là cảnh báo, và chụp lại nguyên văn. Những phần cài đặt trên màn hình cũng cần phân biệt phần nào chủ xe được chỉnh, phần nào nên để thợ hoặc đại lý, như bài về menu cài đặt đã trình bày. Tuyệt đối không tự mở pin hay can thiệp bên trong, vì đó là việc nguy hiểm và có thể làm mất quyền bảo hành.'
    ])
  ],
  checklist: [
    'Hiểu rằng quãng đường còn lại là con số ước tính, dùng để cảm nhận xu hướng chứ không phải lời hứa.',
    'Lấy phần trăm pin làm thước chính khi quyết định có đủ điện hay không; coi vạch pin là lời nhắc cuối.',
    'Ghi phần trăm pin lúc xuất phát và lúc đến cho vài tuyến quen, kèm điều kiện như chở hai, thời tiết, dốc.',
    'Đặt biên an toàn và mốc quay đầu trước khi xuất phát, tính riêng chặng đi và chặng về.',
    'Sau đoạn tải nặng, đi êm hoặc nghỉ một lúc rồi mới đánh giá lại con số, đừng kết luận vội.',
    'Khi con số nhảy bất thường lặp lại, chụp màn hình, ghi giờ, tuyến, điều kiện và mang đi hỏi nơi bảo hành.'
  ],
  steps: [
    { title: 'Nhìn đúng vai trò từng con số', detail: 'Xem phần trăm pin là thước chính, vạch pin là lời nhắc cuối và quãng đường còn lại là gợi ý về xu hướng.' },
    { title: 'Chọn vài tuyến quen để ghi', detail: 'Mỗi lần đi, ghi mức pin lúc xuất phát và lúc đến, kèm điều kiện: chở một mình hay chở hai, thời tiết, có dốc không.' },
    { title: 'Đối chiếu với con số xe báo', detail: 'Sau vài tuần xem xe thường báo lạc quan hay bi quan so với thực tế của bạn, và khi nào sai lệch lớn nhất.' },
    { title: 'Đặt biên an toàn và mốc quay đầu', detail: 'Quyết định trước mức pin mà khi chạm tới bạn thôi đi xa và tìm chỗ sạc, tính cả chặng về.' },
    { title: 'Ghi lại khi bất thường', detail: 'Nếu số nhảy bất thường lặp lại, chụp màn hình và ghi bối cảnh để trình nơi bảo hành.' }
  ],
  warnings: [
    'Không dựa duy nhất vào con số quãng đường để quyết định đi tiếp khi đang ở xa nơi sạc; hãy luôn chừa biên an toàn.',
    'Không tự mở pin, tháo bộ phận quản lý pin hay can thiệp mạch điện để hiệu chỉnh con số trên màn hình.',
    'Không kết luận pin hỏng chỉ vì số tụt sau một đoạn dốc; hãy xem nó có hồi lại khi đi êm hoặc nghỉ không.'
  ],
  notes: [
    'Cách xe tính, làm trơn và hiển thị quãng đường, phần trăm pin và vạch pin khác nhau tùy từng xe; hãy đối chiếu sách hướng dẫn sử dụng của xe bạn đang dùng.',
    'Bài chỉ giải thích ở mức nguyên lý chung và không đưa số liệu cụ thể; thông số thật của từng xe do nơi bán hoặc nơi bảo hành xác nhận.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần hiển thị trạng thái pin và quãng đường còn lại',
    'Tài liệu kỹ thuật cơ bản về pin lưu trữ năng lượng, điện áp dưới tải và hệ thống quản lý pin'
  ],
  related: [
    'pin-xe-may-dien-bao-day-nhung-nhanh-het',
    'man-hinh-xe-may-dien-bao-bieu-tuong-hoac-ma-loi-cai-nao-chi-la-thong-tin-cai-nao-la-canh-bao-va-ghi-lai-the-nao',
    'menu-cai-dat-tren-man-hinh-xe-may-dien-muc-nao-chu-xe-chinh-duoc-muc-nao-nen-de-tho-hoac-dai-ly',
    'xe-may-dien-len-doc-va-xuong-doc-dai-vi-sao-yeu-pin-tut-nhanh-va-cach-di-an-toan',
    'thu-xe-dien-nhung-dieu-can-biet',
    'cat-xe-may-dien-lau-ngay-khong-dung-de-pin-o-muc-lung-chung-sac-nhac-lai-chon-cho-de-va-kiem-gi-truoc-khi-dung-lai',
    'gui-xe-may-dien-hoac-pin-di-xa-bang-xe-khach-tau-hay-xe-tai-tat-nguon-thao-pin-va-nhung-dieu-phai-hoi-noi-nhan'
  ]
};
