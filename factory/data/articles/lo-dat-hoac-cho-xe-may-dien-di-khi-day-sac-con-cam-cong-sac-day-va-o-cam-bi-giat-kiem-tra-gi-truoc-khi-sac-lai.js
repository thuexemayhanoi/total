// AI WIKI TOTAL — S01642; nhận biết bằng quan sát, không nêu số liệu hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'lo-dat-hoac-cho-xe-may-dien-di-khi-day-sac-con-cam-cong-sac-day-va-o-cam-bi-giat-kiem-tra-gi-truoc-khi-sac-lai',
  title: 'Lỡ dắt hoặc cho xe máy điện đi khi dây sạc còn cắm: cổng sạc, dây và ổ cắm bị giật, kiểm tra gì trước khi sạc lại',
  seoTitle: 'Dắt xe điện khi dây sạc còn cắm: kiểm tra gì trước khi sạc lại',
  metaDescription: 'Xe máy điện bị dắt hoặc chạy đi khi dây sạc còn cắm: ngắt điện ở ổ cắm trước, rồi nhìn cổng sạc, dây, phích, ổ cắm và bộ sạc trước khi quyết định sạc lại.',
  summary: 'Bài giải thích vì sao xe điện vẫn dắt hoặc chạy đi được dù dây sạc còn cắm, và việc đó có thể làm gì với cổng sạc, dây, phích, ổ cắm trên tường hay bộ sạc. Nội dung đi theo thứ tự xử lý: dừng lại, ngắt điện ở ổ cắm trước rồi mới rút phần còn lại, kiểm tra bằng mắt từng chi tiết, và chỉ sạc lại khi mọi thứ còn nguyên vẹn. Bài cũng nêu thói quen rút sạc, cách đặt dây gọn và những dấu hiệu cần nhờ nơi có chuyên môn.',
  quickAnswer: 'Dây sạc không giữ được xe, nên xe vẫn dắt hoặc chạy đi được khi còn cắm; xe nào chặn chạy lúc đang sạc thì tùy xe. Sau khi phát hiện, hãy dừng lại, tắt máy, ngắt điện ở ổ cắm trước rồi mới rút phần còn lại, không chạm vào chỗ dây tróc. Chưa cắm sạc lại ngay: nhìn kỹ cổng sạc, dây, phích, ổ cắm và bộ sạc, thấy bất thường thì không cắm và nhờ nơi có chuyên môn.',
  keyPoints: [
    'Dây sạc chỉ là dây điện, không phải khóa: dắt bằng tay thì không gì ngăn được, còn xe có chặn chạy khi đang cắm sạc hay không thì tùy xe.',
    'Cú giật có thể làm cong hoặc lỏng chân cắm, nứt hoặc xô lệch cổng sạc, đứt ngầm lõi dây bên trong lớp vỏ, làm lỏng phích và ổ cắm hoặc làm vỡ vỏ bộ sạc.',
    'Ngay sau khi phát hiện: dừng lại, tắt máy, ngắt điện ở ổ cắm trước rồi mới rút phần còn lại, và không chạm vào chỗ dây bị tróc.',
    'Trước khi sạc lại, nhìn bằng mắt vỏ cổng sạc, chân cắm, dây có chỗ dẹp gập tróc, phích và ổ cắm có lỏng cháy xém, bộ sạc có nứt; thấy bất thường thì không cắm lại.',
    'Rút sạc rồi mới bật nguồn hay dắt xe, treo dây gọn, đặt bộ sạc chỗ không bị kéo; cổng sạc lỏng, sạc chập chờn, nóng hay có mùi thì nhờ nơi có chuyên môn.'
  ],
  category: 'learn',
  hub: 'kien-thuc-xe-dien',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['cổng sạc xe điện', 'dây sạc', 'phích cắm và ổ cắm', 'bộ sạc', 'tiếp xúc kém', 'kiểm tra bằng mắt'],
  keywords: ['dắt xe điện khi đang cắm sạc', 'quên rút sạc xe máy điện', 'dây sạc xe điện bị giật đứt', 'cổng sạc xe điện bị kéo lỏng'],
  sections: [
    P('Vì sao dây sạc còn cắm mà xe vẫn dắt hay đi được', [
      'Dây sạc không phải xích khóa. Nó chỉ là dây điện nối xe với ổ tường, nên bản thân nó chẳng giữ được bánh xe. Dắt xe bằng tay thì không có gì ngăn cản: bánh vẫn lăn, tay lái vẫn xoay, và chỉ cần lùi một bước là dây bị kéo căng. Tình huống này hay xảy ra ở chỗ để xe chật, nơi xe phải xê dịch qua lại mới ra được, hoặc khi người khác lấy xe giúp mà không biết xe đang sạc, vì dây thường nằm thấp sát nền, ngoài tầm mắt. Vậy câu trả lời ngắn cho người đang lo lắng là: có, xe hoàn toàn có thể bị dắt đi khi dây còn cắm, và lúc ấy dây, phích, cổng sạc hay bộ sạc sẽ là chỗ phải chịu lực thay cho cả chiếc xe.',
      'Còn chuyện xe có tự chạy được trong lúc đang nhận sạc hay không thì khác nhau giữa các xe. Có xe được làm để từ chối chạy khi đang cắm sạc, có xe không làm vậy, và cách biết chắc nhất là đọc sách hướng dẫn của xe hoặc hỏi thợ có chuyên môn, đừng đoán rồi thử. Một lần xe không chịu chạy cũng chưa chứng minh xe nào cũng thế, càng không nên lấy đó làm lý do để yên tâm cắm sẵn rồi đi. Cần nhớ thêm rằng ngay cả xe có chặn chạy thì cơ chế ấy chỉ cản việc vặn ga, chứ không cản được việc dắt hay đẩy, nên nó không bảo vệ dây khỏi bị kéo. Kinh nghiệm của người quen cũng hiếm khi áp nguyên cho xe của bạn.',
      'Với xe điện, chỗ dễ gây nhầm lẫn là sự im lặng. Không có tiếng nổ máy báo hiệu, nên người ngồi lên xe, bật nguồn rồi vặn ga có thể khiến xe lao đi trước khi kịp nhớ ra dây sạc còn cắm. Cú lao ấy kéo dây mạnh hơn nhiều so với việc dắt bằng tay, bởi dây bị giật theo đà của cả chiếc xe thay vì theo một bước chân nhẹ nhàng. Trong nhà có nhiều người dùng chung xe, nguy cơ càng tăng vì mỗi người một thói quen: người trước sạc xong để đó, người sau lấy xe mà không biết. Bởi vậy mục tiêu lâu dài không phải là mong ai cũng nhớ, mà là sắp xếp chỗ sạc sao cho dù lỡ quên thì dây cũng khó bị kéo mạnh, điều sẽ bàn kỹ ở phần cuối.'
    ]),
    P('Cổng sạc, dây và ổ cắm có thể bị gì khi bị giật', [
      'Đầu tiên là cổng sạc trên xe và đầu cắm của dây, hai chỗ nhận trọn cú giật. Chân cắm bên trong có thể bị cong, lệch hoặc lỏng khỏi chỗ bám, còn vỏ cổng sạc có thể nứt hay xô lệch so với vị trí ban đầu, nhiều khi chỉ lệch rất ít nên mắt thường khó nhận ra. Chỗ lệch ấy làm tiếp xúc giữa đầu cắm và cổng kém đi, mà tiếp xúc kém là nguồn gốc của hiện tượng nóng cục bộ, vì dòng điện đi qua chỗ tiếp xúc hẹp sẽ sinh nhiệt nhiều hơn. Vết nứt trên vỏ còn mở đường cho bụi và nước lọt vào trong. Dấu hiệu của cổng sạc ướt, bẩn, lỏng hay cháy xém đã có bài riêng, ở đây chỉ nhấn mạnh rằng một cú giật cũng có thể gây ra hư hại giống như vậy mà không báo trước.',
      'Dây sạc là chỗ tiếp theo, và nguy hiểm ở chỗ hư hại thường nằm ngầm. Lõi đồng bên trong có thể đứt hoặc chỉ còn dính bằng vài sợi trong khi lớp vỏ bên ngoài vẫn nguyên, nên nhìn thì bình thường mà dòng điện đã bị thắt lại, rất dễ nóng lên mỗi lần sạc. Đoạn sát hai đầu nối, nơi dây gập nhiều nhất và chịu kéo nhiều nhất, là điểm yếu hay gặp. Đoạn dây bị bánh xe đè dẹp, bị gập gắt hoặc bị vặn xoắn cũng cùng loại rủi ro. Nếu lớp vỏ đã tróc lộ lõi, hãy coi như dây còn mang điện cho tới khi chắc chắn đã ngắt nguồn, và đừng chạm tay vào. Dây có dấu hiệu như vậy thì không nên quấn băng dính tạm rồi dùng tiếp.',
      'Phía ổ tường và bộ sạc cũng chịu hậu quả. Phích bị giật mạnh có thể lỏng chân hoặc nứt vỏ, còn ổ cắm trên tường có thể bị kéo lệch, giãn lỗ cắm hoặc bung khỏi chỗ gắn, khiến phích cắm vào không còn khít. Phích lỏng trong ổ tạo ra tiếp xúc chập chờn, sinh nhiệt, để lại vết xám hoặc đen quanh lỗ cắm, thậm chí cháy xém nếu kéo dài. Bộ sạc rơi xuống nền cứng thì vỏ có thể nứt hay mẻ, còn các mối nối bên trong có thể bị xô lệch dù bên ngoài tạm nguyên vẹn. Bộ sạc gồm những khối nào, phần nào nằm sát phích, phần nào nằm sát xe, tùy từng xe nên sách hướng dẫn mới là nơi cho biết rõ. Bộ sạc từng rơi vỡ vỏ cần được xem kỹ hơn nhiều so với bộ chỉ bị kéo nhẹ.'
    ]),
    P('Việc làm ngay sau khi phát hiện', [
      'Việc đầu tiên là dừng lại, vì mỗi cú kéo thêm đều làm hư hại nặng hơn. Xe đang lăn thì bóp phanh, dừng xe an toàn rồi tắt máy; xe đang được dắt thì giữ yên, không kéo tiếp và không giật dây ra cho nhanh. Tắt máy trước còn để tránh chuyện vô tình vặn ga khi hai tay đang bận với dây và phích. Sau đó hãy đứng xa dây một chút để nhìn tổng thể: phích còn cắm trong ổ hay đã bật ra, dây đang căng hay đã chùng, bộ sạc nằm ở đâu, có tia lửa, khói hay mùi khét hay không. Khoảnh khắc quan sát này không nhằm sửa gì, chỉ để hiểu tình huống mà quyết định bước kế tiếp cho an toàn. Có khói hoặc lửa thì tránh xa và gọi trợ giúp.',
      'Bước then chốt là ngắt điện ở ổ cắm trước khi động vào bất kỳ phần dây nào. Ổ tường có công tắc riêng thì gạt công tắc, hoặc ngắt cầu dao của nhánh điện ấy nếu bạn biết chắc đó là nhánh nào, rồi mới rút phần còn lại. Làm theo thứ tự này vì đoạn dây từ phích tới bộ sạc có thể vẫn còn điện, nhất là khi dây đã tróc vỏ hoặc phích chỉ nửa cắm nửa rút, và chạm vào đó là nguy cơ bị điện giật. Hãy giữ tay khô, đứng trên nền khô, tránh chỗ nước đọng. Chỗ dây tróc lộ lõi thì không chạm bằng tay trần, kể cả sau khi đã ngắt điện, vì dây từng hư hại thì cứ coi như chưa an toàn cho tới khi có người kiểm tra.',
      'Khi nguồn điện ở ổ cắm đã ngắt, bạn mới rút nốt phần còn lại: tháo đầu cắm khỏi xe bằng cách cầm thân đầu cắm chứ không kéo bằng dây, rồi cuộn dây lỏng tay và đặt bộ sạc ra chỗ khô, xa lối đi. Chưa nên cắm sạc lại ngay dù xe trông bình thường, bởi xe vẫn chạy được không chứng minh cổng sạc còn nguyên vẹn. Hãy để mọi thứ yên một lúc rồi mới kiểm tra bằng mắt. Nên báo cho những người cùng dùng xe biết bộ sạc và cổng sạc đang chờ xem xét để không ai tiện tay cắm vào. Ghi nhanh những gì quan sát được, như phích bật khỏi ổ hay dây bị giật căng, bộ sạc có rơi xuống đất hay không; thông tin ấy có ích nếu sau này phải nhờ thợ xem.'
    ]),
    P('Kiểm tra bằng mắt trước khi sạc lại', [
      'Chỉ kiểm tra khi mọi thứ đã ngắt điện, tay khô và đủ ánh sáng. Bắt đầu từ cổng sạc trên xe: nhìn vỏ quanh cổng xem có vết nứt, mẻ, chỗ lún hay lệch so với mép thân xe không, rồi nhìn vào bên trong xem các chân cắm còn thẳng, đều và sạch hay đã cong, nghiêng, đổi màu. Vết xám, đen hoặc nâu quanh chân cắm là dấu của nhiệt từng sinh ra ở đó. Có thể dùng đèn soi nếu thấy tối, nhưng đừng đưa vật nhọn, vật kim loại hay đầu tăm bông vào ngoáy thử, cũng đừng bẻ chân cong cho thẳng, vì làm vậy dễ hỏng thêm hoặc gây chập. Vỏ cổng sạc rung hay xê dịch khi ấn nhẹ bằng ngón tay thì xếp vào nhóm cần thợ, không tự sửa.',
      'Tiếp theo là dây và đầu cắm. Hãy lần từng đoạn dây bằng mắt và bàn tay khô, từ đầu cắm ở xe tới bộ sạc rồi tới phích, tìm chỗ dẹp, gập, phồng, xoắn hoặc lớp vỏ bị tróc, nứt, đổi màu, đặc biệt là vùng sát hai đầu nối nơi chịu kéo nhiều nhất. Phích cần nguyên vẹn, chân phích thẳng, không cong, không có vết cháy hay xám đen. Sau đó nhìn ổ cắm tường: ổ có bị lệch khỏi mặt tường, nứt vỏ, ngả màu quanh lỗ cắm hay có mùi khét không. Ổ nào đã có những dấu hiệu ấy thì không cắm sạc vào nữa. Ổ cắm gắn trong tường là phần việc của người có chuyên môn về điện, không phải việc của người dùng xe.',
      'Bộ sạc là mục cuối. Nhìn vỏ có nứt, mẻ, phồng, móp, các khe ghép có hở ra không, và chỗ dây đi ra khỏi vỏ có bị tách hay hở. Bộ sạc từng rơi xuống nền mà vỏ đã nứt thì không nên cắm lại, vì bên trong có thể đã xô lệch mà bạn không thấy được, và tuyệt đối không mở vỏ ra xem. Mọi thứ đều nguyên vẹn thì có thể sạc lại, nhưng lần đầu nên có người ở gần, quan sát đèn báo, nghe tiếng lạ, để ý mùi, và ngắt điện ngay ở ổ nếu thấy chập chờn, nóng bất thường hay mùi khét. Bất cứ điểm nào ở trên không ổn thì đừng cắm, dù chỉ để thử. Dấu hiệu bộ sạc hỏng, việc dùng nhầm bộ sạc và việc kiểm tra cổng sạc sau cú ngã mạnh đều đã có bài riêng để đối chiếu.'
    ]),
    P('Thói quen rút sạc và lúc cần nơi có chuyên môn', [
      'Biện pháp đơn giản nhất là biến việc rút sạc thành bước cố định trước mọi việc khác: rút sạc xong rồi mới bật nguồn hay dắt xe. Thứ tự này dễ nhớ vì nó gắn với một câu hỏi duy nhất mỗi lần đến gần xe, đó là dây có còn cắm không. Một mẩu giấy dán ở chỗ sạc, hoặc việc luôn đặt đầu cắm vào cùng một chỗ dễ thấy khi không dùng, giúp nhắc cả những người ít khi lấy xe. Nhà có nhiều người dùng chung xe thì nên thống nhất ai rút sạc và ai báo cho người còn lại. Thói quen này còn mang lại lợi ích phụ: sạc xong rút ra đúng lúc thì dây nằm yên, bớt cơ hội bị vướng chân, vướng bánh xe hay bị trẻ nhỏ và thú nuôi cắn kéo.',
      'Cách bố trí chỗ sạc quan trọng không kém thói quen. Hãy đặt bộ sạc ở chỗ phẳng, khô và vững, không ở mép cao dễ rơi, không dưới bánh xe, không sát lối đi. Dây nên đi gọn dọc theo tường hoặc được treo bằng móc chắc chắn, vừa đủ dài để nối từ ổ tới cổng sạc mà không căng, cũng không thừa tới mức rủ xuống nền cho người và xe giẫm lên. Nếu có thể, hãy đặt xe sao cho khi bị đẩy hay lùi thì dây còn độ chùng, chưa bị kéo thẳng ngay, và ổ cắm nằm ở vị trí khó bị vướng. Ổ cắm cần gắn chắc trên tường, phích cắm vào phải khít; ổ cũ, lỏng thì nhờ người có chuyên môn về điện thay trước, không dùng tạm.',
      'Có những dấu hiệu nên chuyển ngay sang nơi có chuyên môn thay vì tiếp tục thử. Cổng sạc lỏng hoặc phải giữ đầu cắm mới nhận sạc, sạc lúc có lúc không, đèn báo nhấp nháy lạ so với sách hướng dẫn, đầu cắm hay bộ sạc nóng bất thường, mùi khét, tiếng lạch tách, hay tê tay khi chạm vào xe lúc đang sạc đều thuộc nhóm này. Chạm vào xe thấy tê tay đã có bài riêng giúp phân biệt tĩnh điện với rò điện. Cổng sạc và bộ sạc thì nhờ thợ xe điện có chuyên môn, còn ổ cắm hoặc đường dây trong nhà thì nhờ người có chuyên môn về điện. Bạn không nên tự hàn, quấn băng dính, mở vỏ hay thay linh kiện, vì chỗ nối điện làm sai cách là nơi dễ phát sinh nóng.'
    ])
  ],
  checklist: [
    'Dừng lại, tắt máy, không kéo thêm dây hay giật phích.',
    'Ngắt điện ở ổ cắm trước khi động vào dây, tay khô, nền khô.',
    'Không chạm vào chỗ dây bị tróc lộ lõi.',
    'Nhìn kỹ cổng sạc, dây, phích, ổ cắm và bộ sạc trước khi nghĩ tới chuyện sạc lại.',
    'Thấy nứt, lỏng, cháy xém, nóng hoặc mùi khét thì không cắm lại và nhờ nơi có chuyên môn.'
  ],
  steps: [
    { title: 'Dừng xe và tắt máy', detail: 'Xe đang lăn thì bóp phanh, dừng xe an toàn rồi tắt máy; xe đang dắt thì giữ yên, không kéo tiếp dây sạc.' },
    { title: 'Ngắt điện ở ổ cắm trước', detail: 'Gạt công tắc ổ cắm hoặc ngắt cầu dao nếu biết chắc nhánh điện, tay khô, nền khô; không chạm vào chỗ dây tróc lộ lõi.' },
    { title: 'Rút phần còn lại và để yên', detail: 'Cầm thân đầu cắm để tháo khỏi xe, cuộn dây lỏng tay, đặt bộ sạc ra chỗ khô, chưa cắm sạc lại ngay.' },
    { title: 'Kiểm tra bằng mắt rồi mới quyết định', detail: 'Xem cổng sạc, chân cắm, dây, phích, ổ cắm và bộ sạc; chỗ nào bất thường thì không cắm lại và nhờ nơi có chuyên môn.' }
  ],
  warnings: [
    'Không chạm vào chỗ dây bị tróc, và không động vào dây khi chưa ngắt điện ở ổ cắm; có khói hoặc lửa thì tránh xa và gọi trợ giúp.',
    'Không tự mở bộ sạc, không bẻ chân cắm cong, không quấn băng dính tạm rồi dùng tiếp; cổng sạc và bộ sạc là việc của nơi có chuyên môn.',
    'Xe vẫn chạy được sau cú giật không chứng minh cổng sạc, dây và ổ cắm còn an toàn; thấy bất thường thì không cắm sạc lại.'
  ],
  notes: [
    'Xe nào chặn chạy khi đang cắm sạc, và chặn theo cách nào, tùy xe; cần biết chắc thì đọc sách hướng dẫn của xe hoặc hỏi thợ có chuyên môn.',
    'Kiểm tra bằng mắt chỉ phát hiện được hư hại nhìn thấy; dây đứt ngầm hay bộ sạc xô lệch bên trong có thể không thấy, nên nghi ngờ thì nhờ nơi có chuyên môn.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe và bộ sạc',
    'Hướng dẫn an toàn khi sạc xe điện của thợ xe điện và thợ điện có chuyên môn'
  ],
  related: [
    'cong-sac-tren-xe-may-dien-bi-uot-ban-long-hoac-chay-xem-dau-hieu-va-viec-nen-lam',
    'bo-sac-xe-may-dien-bi-hong-dau-hieu-nhan-biet',
    'cham-vao-xe-may-bi-giat-te-tay-tinh-dien-hay-ro-dien-phan-biet-va-khi-nao-nguy-hiem',
    'lo-dung-nham-bo-sac-cua-xe-dien-khac-hoac-bo-sac-khong-di-kem-xe-da-sac-mot-lan-thi-kiem-tra-gi-va-nen-lam-gi',
    'xe-may-dien-sau-cu-nga-hoac-va-manh-vao-gam-kiem-tra-pin-giac-noi-va-cong-sac-truoc-khi-sac-lai'
  ]
};
