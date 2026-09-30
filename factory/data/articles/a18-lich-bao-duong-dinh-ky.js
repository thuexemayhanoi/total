// AI WIKI TOTAL — bài nền hub /guide/bao-duong/: lịch bảo dưỡng định kỳ (slot S00018)
'use strict';

module.exports = {
  slug: 'lich-bao-duong-xe-may-dinh-ky-theo-so-km',
  title: 'Lịch bảo dưỡng xe máy định kỳ theo số km',
  seoTitle: 'Lịch bảo dưỡng xe máy định kỳ theo số km chạy',
  metaDescription: 'Lịch bảo dưỡng xe máy định kỳ theo số km: dầu nhớt, lọc gió, bugi, má phanh và các mốc kiểm tra phổ biến, kèm cách điều chỉnh theo điều kiện chạy xe.',
  summary: 'Bảo dưỡng định kỳ là khoản đầu tư rẻ nhất cho tuổi thọ chiếc xe, nhưng nhiều người chỉ nhớ mỗi việc thay nhớt mà bỏ qua toàn bộ phần còn lại của lịch trình. Thực tế, một chiếc xe máy có gần chục hạng mục cần chăm theo chu kỳ khác nhau: dầu nhớt, lọc gió, bugi, dầu hộp số, xích, má phanh, lốp, ắc quy, dầu nhún — mỗi thứ có mốc riêng theo số km hoặc thời gian. Bài viết này sắp xếp các hạng mục đó thành một lịch trình dễ theo dõi, giải thích vì sao mỗi mốc tồn tại và cách điều chỉnh chu kỳ theo điều kiện chạy xe thực tế của bạn.',
  quickAnswer: 'Lịch bảo dưỡng xe máy chạy theo hai đồng hồ: số km và thời gian (mốc nào tới trước thì làm). Khung phổ biến: nhớt và lọc gió theo mỗi vài nghìn km, bugi và dầu hộp số theo chu kỳ dài hơn, xiên xích vệ sinh - chỉnh chùng mỗi nghìn km nếu chạy bụi ẩm, má phanh và lốp kiểm tra định kỳ hằng tháng. Luôn đối chiếu sổ tay xe của bạn vì mỗi hãng có mốc riêng, và rút ngắn chu kỳ khi chạy điều kiện khắc nghiệt.',
  keyPoints: [
    'Bảo dưỡng chạy theo hai đồng hồ — số km và thời gian — với luật thay theo mốc tới trước; xe chạy ít vẫn cần bảo dưỡng theo tháng.',
    'Dầu nhớt là hạng mục dày nhất của lịch, nhưng chỉ là một trong gần chục hạng mục: lọc gió, bugi, dầu hộp số, xích, phanh, lốp, ắc quy, dầu nhún đều có chu kỳ riêng.',
    'Điều kiện khắc nghiệt — chặng ngắn nhiều, bụi, ngập nước, chở nặng, chạy dịch vụ — yêu cầu rút ngắn chu kỳ so với khung tiêu chuẩn của hãng.',
    'Vệ sinh lọc gió là việc bị bỏ quên nhiều nhất và là thứ khiến hao xăng rõ rệt nhất khi bẩn; làm kèm mỗi lần thay nhớt gần như không tốn thêm công.',
    'Xiên xích và má phanh nên kiểm tra bằng mắt hằng tuần: độ chùng, độ mòn và tiếng kêu báo trước khi thành sự cố giữa đường.',
    'Sổ bảo dưỡng ghi chép mỗi lần bảo dưỡng vừa tăng giá trị bán xe, vừa là dữ liệu để bạn tự điều chỉnh chu kỳ theo trải nghiệm thật.',
  ],
  category: 'guide',
  hub: 'bao-duong',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['bảo dưỡng định kỳ', 'thay dầu nhớt', 'lọc gió', 'bugi', 'dầu hộp số', 'xiên xích', 'má phanh'],
  keywords: ['lịch bảo dưỡng xe máy', 'bảo dưỡng xe máy định kỳ', 'thay nhớt bao lâu một lần', 'vệ sinh lọc gió', 'thay bugi xe máy', 'chỉnh xích xe máy', 'bảo dưỡng xe ga', 'bảo dưỡng xe số'],
  sections: [
    {
      h2: 'Vì sao lịch bảo dưỡng chạy theo hai đồng hồ',
      html: `<p>Mỗi nhà sản xuất đưa lịch bảo dưỡng theo số km — và kèm một cột thời gian mà ít người để ý. Hai cột tồn tại vì phụ tùng hao mòn theo hai cách khác nhau: dầu nhớt, bugi, lọc gió hao theo số giờ máy làm việc và cường độ chạy; ắc quy, gioăng, dầu nhún lại lão hóa theo thời gian bất kể xe chạy hay nằm. Vì thế quy tắc đầu tiên của bảo dưỡng định kỳ: làm theo mốc nào tới trước — xe chạy nhiều thì theo km, xe chạy ít thì theo tháng.</p>
<p>Nhiều người ngạc nhiên khi chiếc xe ba tháng chạy chưa đến nghìn km vẫn bị khuyến nghị thay nhớt. Lý do nằm ở hóa học: dầu trong máy dù máy đứng yên vẫn hấp thụ hơi ẩm từ không khí qua thông hơi, ô xy hóa theo nhiệt độ môi trường, và mất dần phụ gia bảo vệ. Xe chạy chặng ngắn còn tệ hơn về mặt này: máy không đủ thời gian nóng để đuổi hết hơi ẩm ngưng trong mỗi chuyến đi, khiến nước tích tụ trong dầu nhanh hơn xe chạy chặng dài.</p>
<p>Đồng hồ thứ ba ít được nhắc nhưng thực tế có mặt khắp nơi: điều kiện chạy. Hai chiếc xe cùng dòng, cùng số km, nhưng một chiếc chạy đưa con đi học trong phố và một chiếc chạy giao hàng qua khu công trình bụi — sẽ cần lịch khác nhau. Chu kỳ trong sổ tay được tính cho điều kiện tiêu chuẩn; phần việc của bạn là tự hiệu chỉnh theo điều kiện thật, chủ yếu theo hướng rút ngắn chứ không bao giờ kéo dài.</p>
<p>Hệ quả thực dụng của cách nhìn "hai đồng hồ cộng một hiệu chỉnh": đừng hỏi chung chung "bao lâu bảo dưỡng một lần" mà hãy hỏi ba câu — xe tôi chạy loại đường nào, tích lũy bao nhiêu km mỗi tháng, và sổ tay xe tôi quy định mốc nào. Ba câu trả lời ghép lại cho bạn lịch bảo dưỡng của riêng chiếc xe mình, không phải lịch của hàng xóm.</p>`,
    },
    {
      h2: 'Các mốc phổ biến và hạng mục kèm theo',
      html: `<p>Lưu ý trước: các mốc dưới đây là khung tham chiếu phổ biến để hiểu logic lịch trình — con số chính xác cho chiếc xe của bạn luôn là số trong sổ tay hãng, vì khác dòng xe khác các mốc đáng kể. Với phần lớn xe số và xe ga phổ thông, nhóm đầu tiên lặp dày nhất là dầu nhớt cùng kiểm tra tổng thể: mỗi lần thay nhớt là dịp soi lọc gió, nhìn xích, nghe máy — thay nhớt mà làm luôn vài việc này thì buổi bảo dưỡng đáng giá gấp mấy lần giá tiền của nó.</p>
<p>Nhóm thứ hai theo chu kỳ trung bình gồm bugi và dầu hộp số (với xe số có hộp số riêng). Bugi bẩn khiến đề khó nổ, ga lềnh bềnh và hao xăng — vệ sinh hoặc thay theo mốc; dầu hộp số chịu tải lớn từ các bánh răng, ít được để ý nhưng khi xuống cấp làm hộp số kêu và khó vào. Xe ga thường không có bước dầu hộp số riêng, thay vào đó là dây curoa và bộ ly hợp cần kiểm tra theo mốc dài hơn.</p>
<p>Nhóm thứ ba là các hạng mục "đêm": má phanh, lốp, ắc quy, dầu nhún chân trước, dung dịch ắc quy (với loại nước). Chúng không hết đột ngột như bugi mà suy giảm dần — cho tới lúc phanh ăn xa hơn, lốp non mỏi, đề yếu buổi lạnh. Vì đặc tính "suy giảm chậm", nhóm này nên có vị trí kiểm tra định kỳ hằng tháng trong lịch của bạn: bóp phanh thử cả trước lẫn sau, bóp lốp và nhìn rãnh, đề máy nghe tốc độ lốc.</p>
<p>Nhóm cuối cùng là các mốc dài hơi hoặc theo tình trạng: dây xích (với xe số) có tuổi thọ theo km nhưng phải thay khi bị giãn dù chưa tới mốc; lốp thay theo độ mòn rãnh và tuổi (cao su lão hóa dù còn gai); giảm xóc sau thăm dầu theo kỳ dài. Cách quản lý nhóm này đơn giản nhất: mỗi lần thay nhớt, hỏi thợ một câu "hôm nay thấy gì đáng chú ý ở nhóm đêm không" — thợ quen xe của bạn sẽ nhớ giúp cả những thứ bạn quên.</p>`,
    },
    {
      h2: 'Điều kiện chạy khắc nghiệt và cách hiệu chỉnh chu kỳ',
      html: `<p>Sổ tay thường có một trang ít ai đọc tên "điều kiện vận hành khắc nghiệt" — và phần lớn người Việt Nam đang chạy xe trong ít nhất một điều kiện liệt kê ở đó: chặng ngắn dưới mười km lặp lại, ngập nước mùa mưa, bụi công trình, kẹt xe đề - nổ liên tục, chở nặng, dốc nhiều. Nếu xe của bạn rơi vào bất kỳ nhóm nào, chu kỳ tiêu chuẩn không còn là chuẩn nữa — hãy rút ngắn.</p>
<p>Mức hiệu chỉnh thực dụng: chặng ngắn và kẹt xe nhiều rút chu kỳ dầu nhớt xuống còn khoảng ba phần tư mốc tiêu chuẩn; chạy bụi hoặc ven biển tăng tần suất vệ sinh lọc gió và phủ mỡ xích; ngập nước thường xuyên rút chu kỳ kiểm tra phanh và ắc quy; chở nặng hoặc chạy dịch vụ rút cả chu kỳ nhớt lẫn dầu hộp số. Không cần chính xác từng phần trăm — nguyên tắc là nghiêng về bảo dưỡng sớm khi điều kiện xấu đi.</p>
<p>Ba tín hiệu xe tự báo để bạn tự hiệu chỉnh chính xác hơn bất kỳ bảng nào: tiếng máy khan hơn và đề nặng hơn nói dầu nhớt đã giảm hiệu quả; ga lềnh bềnh, đề khó và hao xăng nói lọc gió hoặc bugi tới hạn; phanh ăn xa, kêu rít nói má phanh hoặc trống phanh mòn. Xe không nói dối về tình trạng — lịch chỉ là khung, tín hiệu của xe mới là quyết định cuối cùng.</p>
<p>Cũng có hướng ngược lại ít người biết: nếu chiếc xe của bạn phần lớn chạy cao tốc chặng dài đều đặn, sạch đường, không nặng — một số mốc có thể để theo đúng hoặc thậm chí trần trên của khoảng hãng cho phép. Nhưng đây là trường hợp thiểu số; với đại đa số xe đô thị, lời khuyên an toàn vẫn là phía rút ngắn. Khi không chắc, bảo dưỡng sớm luôn rẻ hơn sửa hỏng muộn.</p>`,
    },
    {
      h2: 'Tự làm được và nên đưa xưởng: phân định hợp lý',
      html: `<p>Nhóm tự làm được tại nhà với dụng cụ cơ bản: kiểm tra và bơm lốp (một chiếc bơmKim loại nhỏ là khoản đầu tư đáng giá), vệ sinh xe và ổ cắm sạc, nhìn rãnh lốp và độ chùng xích, bóp thử phanh, lau khô vùng điện sau mưa, và ghi chép sổ bảo dưỡng. Những việc này chiếm phần lớn giá trị của "bảo dưỡng hằng tháng" — và đều không cần hơn năm phút mỗi lần.</p>
<p>Nhóm nên đưa xưởng: thay nhớt kèm kiểm tra lọc gió, vệ sinh - can thiệp bugi, dầu hộp số, các việc đụng dây curoa và ly hợp xe ga, cân chỉnh và thay xích, thay má phanh, vá hoặc thay lốp, mọi việc đụng vào hệ thống điện phức tạp. Ngưỡng phân định không phải là khó dễ mà là hệ quả sai: việc tự làm sai mà hậu quả chỉ là lau lại thì cứ làm; việc tự làm sai mà hậu quả là mất phanh giữa đường thì đừng tiết kiệm.</p>
<p>Chọn xưởng có một tiêu chí đáng giá hơn giá rẻ: thợ ghi chép và tra sổ. Xưởng biết hỏi "lần trước thay nhớt bao giờ, bugi thay chưa" là xưởng giữ lịch giúp bạn — chính là giá trị lớn thứ hai của bảo dưỡng định kỳ sau phần kỹ thuật. Với xe còn bảo hành, các mốc quan trọng nên làm ở dịch vụ chính hãng để giữ quyền lợi bảo hành, phần còn lại có thể tùy chọn nơi tin cậy.</p>
<p>Một thói quen nhỏ gắn tất cả lại: sổ bảo dưỡng của riêng bạn — vở giấy hay ghi chú điện tử đều được — ghi ngày, km, việc làm, phụ tùng thay và tên xưởng. Sổ này giúp bạn không đoán mò ở mỗi lần tới xưởng, là bằng chứng chăm sóc khi bán xe, và sau vài năm là dữ liệu để bạn nhìn lại xe mình thật sự cần chu kỳ bao nhiêu — không phải chu kỳ của ai khác.</p>`,
    },
    {
      h2: 'Chi phí bỏ sót lớn nhất của bảo dưỡng định kỳ',
      html: `<p>Khoản "chi phí" của bảo dưỡng không nằm trong hóa đơn — mà nằm ở những gì xãy ra khi bỏ sót. Lọc gió bẩn vài tháng không vệ sinh khiến hao xăng âm thầm mỗi chuyến đi, cộng dồn lớn hơn tiền một buổi vệ sinh; xích khô không mỡ mòn rãnh răng và giãn sớm, kéo theo việc thay cả bộ nhổ tiền gấp nhiều lần; má phanh mòn tới kim loại xọc vào đĩa biến một buổi thay má thành một buổi thay cả cụm. Bảo dưỡng định kỳ đắt nhất khi bị bỏ — đó là tính chất thật của nó.</p>
<p>Có một cách nhìn đáng để thử một tháng: thay câu hỏi "chi phí bao nhiêu" bằng "cái gì đang mòn và tới hạn chưa". Câu hỏi thứ nhất khiến mọi buổi bảo dưỡng nhìn như chi phí; câu hỏi thứ hai khiến bạn nhìn thấy phần lớn các hạng mục chưa tới hạn ở lần này và sẽ tới hạn ở lần sau — lịch trình bỗng thành danh sách dự kiến rõ ràng thay vì một tờ giá dịch vụ.</p>
<p>Chi phí bỏ sót còn có mặt ở phía bán xe: một chiếc xe có sổ bảo dưỡng đều đặn bán được giá hơn và nhanh hơn chiếc cùng đời không lịch sử — người mua xe cũ đầu tiên nhìn tới là dấu vết chăm sóc, vì họ hiểu rằng phụ tùng có thể thay nhưng thói quen chăm sóc thì không mua được sau này. Sổ ghi chép vài phút mỗi buổi vì thế là khoản đầu tư có lãi kép theo năm.</p>
<p>Cuối cùng, đừng để bảo dưỡng định kỳ trở thành nguồn lo âu dài hạn: lịch trình tồn tại để gỡ lo, không phải thêm lo. Một khi sổ của bạn đã có ba cột — mốc hãng, hiệu chỉnh theo điều kiện, tín hiệu thực tế của xe — thì mọi quyết định đều thành phép trừ đơn giản: mốc tới trước thì làm, tín hiệu bất thường thì làm sớm, không thì yên tâm chạy. Đó là toàn bộ tinh thần của việc chăm xe theo lịch.</p>`,
    },
  ],
  checklist: [
    'Đọc trang lịch bảo dưỡng trong sổ tay xe và lập bảng hai cột: mốc km và mốc tháng — làm theo mốc tới trước.',
    'Hiệu chỉnh theo điều kiện chạy: chặng ngắn, bụi, ngập, chở nặng, dịch vụ — rút ngắn chu kỳ tương ứng thay vì theo mốc tiêu chuẩn.',
    'Mỗi lần thay nhớt kèm: vệ sinh lọc gió, nhìn xích, nghe máy — tận dụng buổi bảo dưỡng cho trọn giá trị.',
    'Kiểm tra hằng tháng nhóm "đêm": má phanh, áp suất và rãnh lốp, tốc độ lốc đề, độ chùng xích.',
    'Phân định tự làm và đưa xưởng theo hệ quả sai — việc đụng phanh, điện phức tạp, dây curoa luôn để xưởng.',
    'Ghi sổ mỗi lần bảo dưỡng: ngày, km, việc làm, phụ tùng, xưởng — làm bằng chứng chăm sóc và dữ liệu hiệu chỉnh.',
  ],
  warnings: [
    'Không kéo dài chu kỳ hơn mốc sổ tay dù xe "vẫn chạy tốt" — phần lớn hao mòn không báo hiệu cho tới khi thành hư hỏng lớn.',
    'Không bỏ qua mốc thời gian khi xe chạy ít — dầu, ắc quy và gioăng lão hóa theo tháng bất kể công-tơ-mét.',
    'Không tự can thiệp nhóm an toàn (phanh, dây curoa, hệ thống điện chính) nếu thiếu dụng cụ và kinh nghiệm.',
    'Không để xích khô chạy dài — mỡ và chỉnh chùng là việc rẻ nhất của cả lịch và ngăn thay cả bộ nhổ tiền sớm nhất.',
  ],
  notes: [
    'Các mốc trong bài là khung tham chiếu phổ biến để hiểu logic lịch trình; con số chính xác cho từng xe phải đối chiếu sổ tay của nhà sản xuất và khuyến nghị bảo dưỡng chính hãng.',
    'Xe đang bảo hành nên thực hiện các mốc quan trọng tại dịch vụ chính hãng để giữ quyền lợi; các mốc còn lại có thể ủy thác cho xưởng tin cậy.',
  ],
  references: [
    'Sổ tay sử dụng và lịch bảo dưỡng do nhà sản xuất xe máy cung cấp — mốc km, mốc tháng và điều kiện vận hành khắc nghiệt của từng dòng xe.',
    'Tài liệu hướng dẫn kỹ thuật về phụ tùng hao mòn (dầu nhớt, bugi, lọc gió) của các nhà sản xuất phụ tùng chính hãng — khuyến nghị chu kỳ theo điều kiện vận hành.',
    'Nghị định của Chính phủ về kiểm định an toàn kỹ thuật xe máy khi lưu hành — căn cứ đối chiếu điều kiện an toàn của các cụm phanh, lốp, đèn.',
  ],
  related: ['dau-nhot-xe-may-loai-chu-ky-va-cach-chon', 'xe-may-khong-no-may-nguyen-nhan-va-cach-xu-ly', 'xe-may-bi-bo-phanh-nguyen-nhan-va-cach-xu-ly'],
};
