// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: đi xe máy qua khu chợ (slot S00157)
'use strict';

module.exports = {
  slug: 'di-xe-may-qua-khu-cho-luu-y',
  title: 'Đi xe máy qua khu chợ: giữ an toàn giữa chật chội',
  seoTitle: 'Đi xe máy qua khu chợ an toàn, tránh va chạm',
  metaDescription: 'Khu chợ chật chội có người bộ hành băng ngang, xe dừng mua hàng và sạp chiếm lề. Bài viết chỉ cách đi xe máy qua chợ an toàn và chọn chỗ đỗ xe.',
  summary: 'Khu chợ là một trong những môi trường giao thông đặc thù nhất mà người đi xe máy đô thị phải qua lại thường xuyên: lề đường bị sạp hàng và xe bán chiếm gần hết, người bộ hành băng ngang liên tục với tư duy "chỉ vài bước", xe mua hàng dừng nghiêng ngay giữa đoạn hẹp, hàng hóa và sạp tràn ra chiếm cả tầm nhìn. Điểm khác biệt của chợ so với đường đông thông thường: ở chợ, mọi chủ thể đều chấp nhận đi chậm và chấp nhận dừng — nhưng chính vì vậy, kẽ hở nhỏ nhất cũng bị người ta lọt vào, và một xe máy cố giữ nhịp bình thường giữa dòng người đang "tự sắp xếp" là nguồn xung đột lớn nhất. Bài viết này chia vấn đề theo ba tầng: tầng quan sát — đọc các mẫu hình nguy hiểm đặc trưng của chợ như người vác bao băng ngang, trẻ chạy theo mẹ, xe thúng ba bánh rẽ ngược; tầng thao tác — chọn tốc độ, chọn làn, chọn thời điểm vượt và cách xử lý khi bị kẹt giữa cụm người; và tầng đỗ xe — vì đi qua chợ đa số là để mua hàng, phần lớn rủi ro và mất mát thật sự nằm ở khúc đỗ xe: chọn chỗ, chống trộm, và cách sắp xếp để không chắn lối. Toàn bài xoay quanh một nguyên tắc đơn giản: ở khu chợ, người chịu thương tật khi va chạm luôn là người đi bộ — và vì vậy người lái xe máy là bên có toàn bộ trách nhiệm điều chỉnh.',
  quickAnswer: 'Trả lời ngắn: qua khu chợ, hạ tốc về gần bằng bước người bộ hành và coi lề đường là "nước lớn" — người có thể băng ra từ sạp bất cứ lúc nào, hàng hóa có thể rơi, xe dừng mua hàng có thể nghiêng bất ngờ. Không đi sát mép sạp; đi theo rãnh xe mà dòng xe đang tự xếp, giữ tốc độ thấp nhất của dòng thay vì tìm cách vượt từng chiếc. Nhường tuyệt đối người bộ hành băng ngang, kể cả khi họ đi ngược quy tắc — ở chợ, khoảng vài bước ngắn không ai quan niệm là "băng đường". Khi dừng mua hàng: chọn chỗ đỗ có người qua lại nhìn thấy được, khóa cổ, khóa từ, không chèn xe chắn lối sạp; mua nhanh ở gần xe khi được. Nếu bị kẹt giữa cụm người: chân đặt sẵn, không vặn ga, chờ dòng tự dãn — kẹt thêm vài phút đổi lấy một vết xước là giao dịch lỗ.',
  keyPoints: [
    'Tốc độ qua chợ do mật độ người bộ hành quyết định, không phải biển — hạ về gần bằng bước người đi, đủ dừng được trong một hai mét.',
    'Coi lề đường như vùng nguy hiểm cao: người băng ra từ sạp, hàng rơi, xe dừng mua hàng nghiêng bất ngờ — đi theo rãnh xe giữa đường hơn là bám sát mép sạp.',
    'Nhường người bộ hành tuyệt đối, kể cả khi họ đi không theo quy tắc — ở chợ, bên chịu thương tật khi va chạm luôn là người đi bộ.',
    'Không vượt trong đoạn chật: kẽ hở nhỏ được người ta lọt vào ngay, và xe máy cố giữ nhịp bình thường giữa dòng tự sắp xếp là nguồn xung đột lớn nhất.',
    'Đỗ xe là nửa rủi ro: chọn chỗ thoáng có người qua lại, khóa cổ và khóa từ, không chắn lối sạp — đa số mất mát ở chợ không phải va chạm mà là trộm.',
    'Bị kẹt giữa cụm người thì chân đặt sẵn, không vặn ga — chờ dòng tự dãn vài giây luôn nhanh hơn gỡ một va chạm.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['khu chợ', 'người bộ hành', 'sạp hàng', 'xe thúng ba bánh', 'chỗ đỗ xe', 'tốc độ an toàn'],
  keywords: ['đi xe máy qua khu chợ', 'xe máy đường chật chội', 'an toàn khi đi chợ', 'đỗ xe máy ở chợ', 'tránh va chạm người đi bộ', 'đường đông người đi chậm'],
  sections: [
    {
      h2: 'Vì sao khu chợ là môi trường giao thông riêng biệt',
      html: `<p>Điểm khác căn bản giữa chợ và đường đông thông thường nằm ở sự đồng thuận ngầm: mọi chủ thể ở chợ — người bộ hành, xe bán, người mua hàng — đều chấp nhận đi chậm và chấp nhận dừng bất kỳ lúc nào. Chính sự đồng thuận này tạo ra một dòng chảy "tự sắp xếp": người và xe tự dãn, tự nhường, tự lấp kẽ hở theo nhịp riêng. Nguy hiểm không nằm ở tốc độ mà ở ngoại lệ — và ngoại lệ phổ biến nhất chính là chiếc xe máy vẫn giữ nhịp đường bình thường, chen tìm kẽ hở, buộc cả cụm phải né một cách phản xạ.</p>
<p>Yếu tố thứ hai là cấu trúc không gian: sạp hàng chiếm gần hết lề, phần đường còn lại bị thu hẹp, và tầm nhìn bị cắt bởi bạt che, chồng thúng và người đứng chọn. Người bộ hành từ trong sạp băng ra gần như mù về phía đường — họ chỉ nhìn hàng, không nhìn xe — trong khi người lái cũng chỉ nhìn thấy phần trước của họ sau khi họ đã ló ra. Hai bên cùng "mù" trong khoảng một giây là đủ cho va chạm ở khoảng cách gần, cho dù tốc độ rất thấp.</p>
<p>Yếu tố thứ ba là hàng hóa và phương tiện đặc thù: xe thúng ba bánh rẽ ngược không quan sát, người vác bao hay khay hàng che hết tầm nhìn của chính họ, cáp ni-lông buộc sạp văng ngang đường, vỏ chuối hay rau héo rơi làm mất ma sát. Đây là những nguy cơ không xuất hiện trên đường thông thường, và người lái quen "đường trơn" sẽ không có phản xạ sẵn cho chúng — vì vậy cách duy nhất là hạ tốc độ xuống mức mà mọi bất ngờ đều chỉ còn là trượt ngang, không phải ngã.</p>`,
    },
    {
      h2: 'Quan sát: các mẫu hình nguy hiểm đặc trưng của chợ',
      html: `<p>Người từ sạp băng ra là mẫu phổ biến nhất: họ bước ra từ khe giữa hai sạp, mắt hướng vào túi tiền hoặc đòn gánh, hoàn toàn không nhìn đường. Cách đọc: quan sát chân người trong sạp thay vì mặt — chân đã xoay hướng nào là người sắp đi hướng đó, và một người đứng trong sạp quay vai về phía đường thì chớp mắt sau họ đã ở trên đường.</p>
<p>Trẻ em là mẫu thứ hai: trẻ đi chợ theo mẹ theo logic "mẹ đi đâu mình đi đó", sẵn sàng chạy bỗng ngang để đuổi theo khi bị tách vài bước, và chiều cao của trẻ khiến chúng chỉ hiện ra sau xe đỗ hoặc thúng hàng. Quy tắc đọc: thấy một người lớn đi bộ mà tay xách túi quay lưng lại liên tục, khả năng cao có đứa nhỏ đang theo sau — giảm sẵn tốc độ khi qua những cụm kiểu này.</p>
<p>Xe thúng ba bánh và xe bán hàng rẽ ngược là mẫu thứ ba: chúng rẽ theo kiểu "quay đầu tại chỗ" để vào chỗ khách, không có gương, không có tín hiệu, và tài xế của chúng quen tính rằng xe nhỏ tự né. Cuối cùng là người vác bao, khay, ống dài: tầm nhìn của họ bị vật che, họ đi theo đường thẳng bất chấp, và chỉ một va chạm nhẹ cũng làm vật văng gây ngã dây chuyền. Với mọi mẫu trên, phương án duy nhất hiệu quả là giữ khoảng cách và tốc độ thấp — không có kỹ thuật né nào thông minh hơn việc cho mình đủ thời gian dừng.</p>`,
    },
    {
      h2: 'Thao tác: chọn tốc độ, chọn làn và thời điểm vượt',
      html: `<p>Tốc độ qua chợ nên xấp xỉ tốc độ người bộ hành nhanh — mức mà phanh sau một cái bóp nhẹ đã dừng hẳn trong khoảng một hai mét. Nguyên tắc thử: nếu lốp trước kêu khi bóp phanh, tốc độ còn cao; ở mức an toàn, việc dừng gần như không tạo tiếng. Chân đặt sẵn trên mặt đường khi qua cụm dày — vị trí chân cho phép giữ thăng bằng và đỡ xe ngay khi dòng người ép lại gần.</p>
<p>Chọn làn ở chợ ngược với đường thường: không bám mép sạp — đó là nơi người băng ra và hàng hóa rơi — mà đi theo rãnh mà dòng xe đang tự xếp, thường lệch về giữa phần đường. Khoảng cách với xe phía trước để hở thật sự: một xe dừng mua hàng nghiêng có thể chiếm thêm nửa mét bất ngờ, và đi sát là tự đặt mình vào thế không lối thoát hai bên là sạp, ba bên là xe.</p>
<p>Về vượt: chỉ vượt khi đoạn phía trước thật sự thoáng và không có cụm người bộ hành ở hai mép — tức gần như chỉ vượt xe đang dừng hẳn. Đừng bao giờ vượt giữa hai xe đang di chuyển trong chợ: kẽ hở đó đang được người bộ hành coi là lối băng, và hai luồng bất ngờ đối đầu nhau trong khoảng cách dưới một mét thì ngay cả tốc độ năm mét mỗi giây — thời gian chỉ còn vài giây để cả hai phản xạ.</p>`,
    },
    {
      h2: 'Xử lý khi bị kẹt giữa cụm người',
      html: `<p>Tình huống điển hình: dòng người bộ hành băng ngang dày không ngớt ở đoạn trước mặt, xe hai bên đã dừng kín, mình bị đứng giữa cụm. Cách xử lý đúng là tắt ý niệm "vượt lên": tắt máy nếu chờ trên ba mươi giây — máy nổ giữa đám đông chật vừa ồn vừa làm người ta né kiểu sai, và một xe nổ máy giữa cụm trẻ con luôn là rủi ro đáng tránh.</p>
<p>Chân đặt phẳng, giữ thăng bằng, để xe đứng tự nhiên thay vì chống nghiêng ép người bên cạnh. Người bộ hành sẽ tự chảy quanh xe như nước — miễn là xe đứng yên và ổn định; điều họ né là xe đang di chuyển chậm trong khi người lái nhìn đâu đó khác hướng mắt.</p>
<p>Khi dòng bắt đầu dãn, đi lại bằng cách lăn đều ga nhỏ, quan sát cả hai mép trước khi rời cụm — giai đoạn rời cụm là lúc dễ va nhất vì mình vừa tăng tốc trong khi người bộ hành vẫn đang coi đoạn đó là không gian đi bộ. Một mẹo nhỏ đáng giá: chờ tới khi một bên cụm người hẳn hoi trống rồi mới lăn bánh, thay vì luồn theo miếng trống từng phần — vài giây chờ đó luôn rẻ hơn mọi phương án khác.</p>`,
    },
    {
      h2: 'Đỗ xe ở chợ: chọn chỗ, chống trộm, không chắn lối',
      html: `<p>Đa số mất mát thật sự ở chợ không phải va chạm mà trộm: xe đỗ ở góc khuất, khóa cổ một lớp, vài phút sau là đi bộ về. Chọn chỗ đỗ theo ba tiêu chí: có người qua lại nhìn thấy được, gần chỗ mình mua hàng nhất có thể, và không chắn lối — chắn lối sạp thì người bán dọn xe, và một chiếc xe bị "dọn" bởi người khác không bao giờ được đặt nhẹ nhàng.</p>
<p>Khóa đủ hai lớp: cổ xe và khóa từ hoặc khóa đĩa. Cất giấy tờ và đồ giá trị theo người, không để trong cốp — cốp xe máy mở được bằng xách nhanh ở nơi đông. Nếu chợ có bãi trông giữ xe thì dùng, vài nghìn phí trông xe rẻ hơn rất nhiều một bộ khóa bị cắt và đôi khi còn rẻ hơn cả tiền xước lại xe bị đổ bởi xe khác đỗ chạm.</p>
<p>Cách sắp xếp cũng quan trọng: đỗ theo hướng dễ ra — đầu xe hướng lối thoát — để khi rời chợ không phải quay xe giữa dòng người; không đỗ sát mép sạp để hàng rơi hoặc người băng ra va xe; và với xe có đồ nghề hay chở hàng, chằng gọn vì phần nhiều va chạm lề tại chỗ đỗ đến từ đồ cồng kềnh văng ra lối đi. Cuối cùng, ghi nhớ vị trí đỗ theo một mốc cố định — cột đèn, biển số sạp — vì khu chợ sau một giờ mua hàng trông rất khác lúc mới tới.</p>`,
    },
    {
      h2: 'Tư duy tổng: người lái là bên chịu trách nhiệm điều chỉnh',
      html: `<p>Ở khu chợ, quy tắc ưu tiên trên giấy gần như lặp lại một điều duy nhất: bên dễ bị thương tật luôn là người đi bộ. Một va chạm ở tốc độ năm mét mỗi giây gây cho người bộ hành chấn thương tương đương một ngã từ độ cao vài bậc — với đầu và khớp là điểm tiếp đất; trong khi người lái có mũ, có găng và có khung xe đỡ. Toàn bộ sự chênh lệch hậu quả này dồn về một kết luận: người lái giữ tốc độ là người quyết định mức độ hậu quả, và vì vậy là người chịu toàn bộ nghĩa vụ điều chỉnh.</p>
<p>Điều đáng nói là năng suất của chính người lái: đo thực tế đoạn chợ một km cho thấy thời gian qua chợ giữa hai kiểu đi — chậm nhịp và luồn vượt — chênh nhau dưới một phút, trong khi kiểu luồn vượt tăng gấp nhiều lần số lần phanh gấp, ra vào côn và đối đầu với người bộ hành. Nghĩa là hành vi nhanh ở chợ không đổi được tổng thời gian đáng kể, chỉ đổi rủi ro và mệt.</p>
<p>Và một cách nhìn để mang theo: qua chợ, coi mình là khách qua nhà của người ta — sạp là quầy của họ, lề là sân của họ. Cách đi chậm, nhường, đỗ gọn gàng không chỉ an toàn mà còn là thứ khiến mình được chào hỏi cho ngắt mớ rau thay vì bị nhìn khó chịu; trong không gian chật chội nhất của đô thị, cách mình đi xe nói lên gần như mọi thứ về tính cách mình trên đường.</p>`,
    },
  ],
  checklist: [
    'Hạ tốc về gần bằng bước người bộ hành trước khi vào đoạn chợ — mức dừng được trong một hai mét khi bóp phanh.',
    'Đi theo rãnh xe giữa đường, không bám mép sạp — người từ sạp băng ra không nhìn đường.',
    'Nhường tuyệt đối người bộ hành băng ngang, kể cả khi họ đi không theo quy tắc.',
    'Chân đặt sẵn khi qua cụm dày; tắt máy nếu chờ trên ba mươi giây giữa đám đông.',
    'Đỗ xe nơi có người qua lại nhìn thấy, khóa hai lớp, không chắn lối sạp; đỗ hướng lối thoát.',
    'Cất giấy tờ và đồ giá trị theo người, không để cốp xe ở chợ đông.',
  ],
  steps: [
    { title: 'Quan sát trước khi vào đoạn chợ', detail: 'Đoán các đoạn chật nhất — cổng chợ, cụm sạp thực phẩm, đoạn có xe bán dừng — và hạ tốc sẵn từ trước, chấp nhận rằng đoạn này sẽ đi bằng tốc độ người bộ hành.' },
    { title: 'Đi theo dòng tự sắp xếp', detail: 'Theo rãnh xe đang có, giữ khoảng cách thật với xe trước, không luồn kẽ hở giữa hai xe đang di chuyển và chỉ vượt xe đã dừng hẳn ở đoạn thoáng.' },
    { title: 'Đỗ và mua hàng đúng cách', detail: 'Chọn chỗ đỗ thoáng thấy được gần điểm mua nhất, khóa cổ và khóa từ, đỗ hướng lối ra, kiểm tra không chắn lối sạp và lối người băng.' },
    { title: 'Rời chợ an toàn', detail: 'Lăn bánh chỉ khi một mép cụm người đã trống hẳn, ga đều nhỏ, quét mắt hai mép trước khi tăng tốc về nhịp đường bình thường.' },
  ],
  warnings: [
    'Không vượt xe đang di chuyển trong đoạn chợ chật — kẽ hở đó cũng là lối người bộ hành đang băng.',
    'Không bấm còi để "mời" người bộ hành nhường ở trong chợ — gây hoảng và vô dụng; người băng với túi nặng không thể phản ứng nhanh hơn được.',
    'Không đỗ xe góc khuất với một lớp khóa ở chợ — đa số mất mát tại chợ là trộm trong vài phút ngắn.',
  ],
  notes: [
    'Tốc độ an toàn qua chợ do mật độ người bộ hành quyết định; nhiều đoạn không có biển nhưng vẫn cần đi gần bằng bước người đi.',
    'Thời gian qua chợ giữa đi chậm nhịp và luồn vượt chênh nhau dưới một phút — hành vi luồn chỉ đổi rủi ro, không đổi tổng thời gian đáng kể.',
  ],
  references: [
    { title: 'Giữ khoảng cách an toàn khi đi xe máy', url: 'https://thuexemayhanoi.github.io/total/ride/an-toan-giao-thong/giu-khoang-cach-an-toan-khi-di-xe-may/' },
    { title: 'Chống trộm xe máy: mẹo và thiết bị', url: 'https://thuexemayhanoi.github.io/total/hub/van-de-thuong-gap/chong-trom-xe-may-meo-va-thiet-bi/' },
  ],
  related: [
    'giu-khoang-cach-an-toan-khi-di-xe-may',
    'ky-thuat-phanh-khan-cap-xe-may',
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'chong-trom-xe-may-meo-va-thiet-bi',
  ],
};
