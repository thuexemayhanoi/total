module.exports = {
  slug: 'ty-so-truyen',
  title: 'Tỷ số truyền của xe máy: con số quyết định xe bốc hay phóng',
  seoTitle: 'Tỷ số truyền xe máy là gì và ảnh hưởng thế nào',
  metaDescription: 'Tỷ số truyền quyết định lực máy được nhân lên hay lấy đà khi truyền xuống bánh sau. Bài viết giải thích tỷ số sơ cấp, cấp số và tỷ số cuối dễ hiểu.',
  summary: 'Giữa trục khuỷu đang quay hàng nghìn vòng mỗi phút và bánh sau chỉ cần quay vài trăm vòng, cả một hệ thống bánh răng và xích làm nhiệm vụ "quy đổi" lực máy thành chuyển động — tỷ số truyền chính là các con số mô tả sự quy đổi đó. Đây là phần ít được nói đến nhất khi người ta xem xe, nhưng lại là thứ khiến hai xe cùng động cơ chạy khác hẳn nhau: một xe truyền "ngắn" để giật mạnh ở phố, một xe truyền "dài" để êm ở tốc độ cao. Bài viết này giải thích tỷ số truyền bằng ngôn ngữ đời thường: vì sao lên số xe thay đổi "giọng" máy, vì sao xe tải leo dốc khỏe dù máy nhỏ, nhông xích của bạn thuộc phần nào của hệ thống, và điều gì xảy ra khi đổi nhông trước hoặc răng sau to nhỏ khác biệt so với zin.',
  quickAnswer: 'Tỷ số truyền là mức nhân lực giữa trục khuỷu và bánh sau: tỷ số lớn (truyền ngắn) cho mô-men ra bánh mạnh, xe bốc ở tốc độ thấp nhưng ì khi chạy nhanh; tỷ số nhỏ (truyền dài) cho tốc độ cao êm nhưng giật yếu lúc mở ga. Trên xe số, mỗi cấp số có tỷ số riêng — số 1 ngắn nhất để xuất phát, số 4 dài nhất để chạy nhanh; trên xe ga, hệ pulley tự biến tỷ số liên tục. Đổi nhông/xích răng khác cỡ sẽ đổi tỷ số cuối: nhông trước to hơn = truyền dài, răng sau to hơn = truyền ngắn.',
  keyPoints: [
    'Tỷ số truyền là "bộ nhân lực" giữa máy và bánh sau — quyết định lực ra bánh và tốc độ tối đa ở từng cấp số.',
    'Truyền ngắn (tỷ số lớn): giật mạnh, leo dốc khỏe, nhưng máy gào ở tốc độ cao và tốn xăng hơn.',
    'Truyền dài (tỷ số nhỏ): êm và tiết kiệm khi chạy nhanh, nhưng xuất phát và leo dốc yếu hơn.',
    'Mỗi cấp số của xe số có tỷ số riêng, sắp từ ngắn (số 1) đến dài (số cao nhất) để máy luôn ở dải tua hợp lý.',
    'Nhông trước và răng sau là tầng truyền cuối — đổi cỡ răng là cách phổ biến nhất làm thay đổi tỷ số cuối.',
    'Tỷ số truyền zin do nhà sản xuất cân bằng giữa bốc – êm – tiết kiệm; thay đổi sẽ đánh đổi một lợi ích lấy một lợi ích khác.',
  ],
  category: 'learn',
  hub: 'doc-thong-so',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['tỷ số truyền', 'nhông xích', 'hộp số', 'trục khuỷu', 'bánh sau', 'pulley'],
  keywords: ['ty so truyen', 'ty so truyen xe may', 'truyen ngan truyen dai', 'doi nho nho xich', 'nho sau to hon', 'so 1 so 2 xe may'],
  sections: [
    {
      h2: 'Tỷ số truyền là gì: bộ nhân lực giữa máy và bánh',
      html: `<p>Trục khuỷu xe máy quay rất nhanh — hàng nghìn vòng mỗi phút khi chạy — nhưng bánh sau chỉ cần vài trăm vòng. Nếu nối thẳng trục khuỷu vào bánh, xe sẽ không có lực kéo nào: quay nhanh nhưng "không đủ sức nhấc nổi chính nó". Hệ thống truyền lực giải bài toán này bằng bánh răng giảm tốc: mỗi cặp bánh răng có số răng khác nhau, và tỷ số giữa chúng quyết định máy quay bao nhiêu vòng thì bánh ra quay một vòng.</p>
<p>Ví dụ dễ hình dung: cặp bánh răng tỷ số 4 vào 1 nghĩa là máy quay 4 vòng thì trục ra quay 1 vòng — trục ra quay chậm đi 4 lần nhưng lực kéo mạnh lên gần 4 lần (trừ hao phí ma sát). Đó là cả một phép "đổi tốc độ lấy lực". Xe tải leo dốc khỏe dù máy nhỏ vì hệ truyền của nó nhân lực rất mạnh; ngược lại xe đua gào rú nhưng hơi yếu ở đèn đỏ vì truyền dài, tối ưu tốc độ.</p>
<p>Trên bảng thông số, tỷ số truyền thường ghi thành chuỗi số: tỷ số sơ cấp (giữa trục khuỷu và trục ly hợp), tỷ số các cấp số 1–4, và tỷ số cuối (giữa trục ra hộp số và bánh sau qua nhông xích). Cả chuỗi nhân lại với nhau là tổng mức "nhân lực" của xe ở từng cấp số. Không cần nhớ từng con số — chỉ cần hiểu nguyên lý: số càng nhỏ, xe càng thiên về tốc độ; số càng lớn, xe càng thiên về lực kéo.</p>`,
    },
    {
      h2: 'Truyền ngắn và truyền dài: hai tính cách của cùng một máy',
      html: `<p>Truyền ngắn (tỷ số cuối lớn) là lựa chọn của xe số phổ thông đi phố: nhạy ga, xuất phát chỉ cần nhích ga là xe nhích theo, leo cầu vượt nhẹ nhàng, và người lái gần như không cần "vào gió" mạnh. Cái giá phải trả: ở tốc độ 60 km/h trở lên, máy đã quay ở vòng tua cao, tiếng máy gào lên rõ, tiêu hao nhiên liệu tăng. Với xe đi phố chở đôi, ngắn hợp lý vì dải tốc sử dụng dưới 50 km/h chiếm phần lớn thời gian.</p>
<p>Truyền dài ngược lại: ở cùng tốc độ 60 km/h, máy quay chậm hơn, êm, tiết kiệm — nhưng mở ga ở tốc độ thấp, xe phản ứng "trễ" một nhịp, leo dốc phải về số sớm hơn. Xe tay ga cỡ lớn định vị đường trường thường truyền dài hơn để êm khi chạy nhanh, và đổi lại người lái phải chấp nhận ga "trễ một nhịp" lúc nhích xe trong kẹt xe.</p>
<p>Kết luận thực tế: không có truyền "tốt nhất", chỉ có truyền "hợp mục đích". Nhà sản xuất chọn tỷ số zin dựa trên định vị sản phẩm — xe phố truyền ngắn nhẹ nhàng, xe thể thao truyền dài — và người dùng sau này có thể chỉnh lại thông qua việc đổi răng nhông, với những đánh đổi cần hiểu rõ trước khi làm.</p>`,
    },
    {
      h2: 'Nhông xích: tầng truyền cuối ai cũng có thể đổi',
      html: `<p>Ở xe số, phần truyền cuối cùng là cặp nhông trước – xích – răng sau. Tỷ số cuối bằng số răng răng sau chia cho số răng nhông trước. Vịnh một ví dụ: nhông 14 răng, răng sau 43 răng thì tỷ số cuối ≈ 3,07 — bánh sau quay chậm hơn trục ra hộp số 3 lần, lực nhân lên tương ứng. Đây chính là tầng mà người chơi xe hay chỉnh: rẻ, dễ thay, và hiệu quả thấy ngay sau vài trăm mét chạy thử.</p>
<p>Quy tắc nhớ: tăng răng sau (hoặc giảm nhông trước) → tỷ số cuối tăng → truyền ngắn hơn → xe giật mạnh, leo dốc khỏe, nhưng tốc độ đỉnh giảm và tốn xăng hơn. Ngược lại, tăng nhông trước hoặc giảm răng sau → truyền dài → êm ở tốc độ cao, nhạt ga ở tốc độ thấp. Nhiều người đi chở hàng nặng chọn cộng 1–2 răng sau; người chạy đường trường dài giảm vài răng sau để máy ron ron thấp hơn ở 70–80 km/h.</p>
<p>Nhưng đổi răng cũng đổi thêm ba thứ ít người nhắc: chỉ số tốc độ đồng hồ không đổi nên hiển thị lệch thực tế chút ít; xích phải chỉnh độ căng lại và có thể cần mua xích dài hơn; và mòn của răng sẽ nhanh hơn nếu cặp răng mới lệch "bước xích" so với thiết kế zin. Nguyên tắc an toàn: chỉ đổi khi thực sự cần, đổi từng bước nhỏ (một răng), và giữ tổng răng trong dải nhà sản xuất khuyến nghị — chi tiết có trong bài về chăm sóc dây xích.</p>`,
    },
    {
      h2: 'Tỷ số truyền trên xe ga: pulley tự biến liên tục',
      html: `<p>Xe tay ga không có cần số — nhưng tỷ số truyền của nó vẫn tồn tại và biến đổi liên tục qua hệ pulley và dây curoa. Ở vòng tua thấp, pulley ở tỷ số ngắn cho xe nhích mạnh; khi máy lên tốc, các con và cân nặng của ly hợp đóng dần pulley, tỷ số kéo dài ra cho xe đạt tốc độ cao mà máy không gào quá. Đây là "hộp số tự động vô cấp" cơ học — thông minh, nhưng mọi thay đổi đều theo trọng lượng cân nặng đã lắp sẵn.</p>
<p>Vì thế trên xe ga, "độ truyền" chủ yếu là chỉnh cân nặng ly hợp: cân nhẹ đóng pulley sớm, xe bốc và gào ở vòng thấp; cân nặng đóng muộn, xe ron ở vòng cao, êm hơn khi chạy nhanh. Tương tự đổi nhông răng sau (nhiều xe ga có hộp số giảm cấp trung gian), nhưng tác động chậm hơn và đòi hỏi thợ am hiểu. Người dùng phổ thông nên giữ cấu hình zin trừ khi có nhu cầu rõ ràng — và nhớ rằng mọi chỉnh pulley đều làm tiêu hao nhiên liệu và độ ồn thay đổi theo.</p>
<p>Điều quan trọng với xe ga là bảo dưỡng: curoa mòn và pulley bẩn làm dải truyền "hẹp" lại — xe ga cũ hay có cảm giác "chậm dần" phần lớn nằm ở đây chứ không phải máy yếu. Vệ sinh pulley, thay curoa đúng chu kỳ là cách giữ đúng tỷ số truyền thiết kế mà không cần độ chế gì cả — một trong những việc bảo dưỡng xe ga đáng làm nhất định kỳ.</p>`,
    },
    {
      h2: 'Đọc tỷ số truyền trong bảng thông số và dùng xe đúng cách',
      html: `<p>Khi bảng thông số ghi "Tỷ số truyền: sơ cấp 3,36 / 1 cấp 2,83 / 2 cấp 1,72 / 3 cấp 1,23 / 4 cấp 1,04 / cuối 2,53", bạn đang nhìn toàn bộ "bản đồ nhân lực" của xe. Cấp 1 nhân lực mạnh nhất để xuất phát và leo dốc đứng; cấp 4 gần như trực tiếp để giữ tốc độ; tỷ số cuối nhân thêm một lần trước khi tới bánh. So hai xe phổ thông: xe nào cấp 1 càng lớn, càng dễ chở nặng xuất phát; xe nào cấp 4 càng nhỏ, càng êm khi chạy nhanh.</p>
<p>Dùng xe đúng với tỷ số truyền còn quan trọng hơn chọn xe: giữ máy ở dải tua hợp lý bằng cách về số đúng lúc — máy gào ở số cao khi lên dốc thì về số, máy ì ở số thấp khi xuống dốc dài thì lên số và dùng phanh động cơ. Đây chính là "tự chọn tỷ số" theo tình huống, biến cùng một chiếc xe lúc bốc lúc êm tùy hoàn cảnh. Kỹ năng này không tốn tiền, không mòn máy, và cải thiện trải nghiệm rõ hơn mọi độ chế.</p>
<p>Tóm lại, tỷ số truyền là cầu nối giữa "máy mạnh" và "xe chạy khỏe" — hai thứ không phải một. Hiểu được điều đó, bạn đọc được vì sao xe 110cc của người hàng xóm leo dốc khỏe hơn xe 150cc của mình, vì sao đổi một chiếc răng sau đổi hẳn tính cách chiếc xe, và vì sao việc đầu tiên khi xe "chậm" không phải là độ máy, mà là kiểm tra xích, pulley, curoa và cách mình về số mỗi ngày.</p>`,
    },
  ],
  checklist: [
    'Đọc bảng tỷ số truyền theo trình tự: sơ cấp → các cấp số → tỷ số cuối; số lớn = thiên về lực, số nhỏ = thiên về tốc độ.',
    'Xe hay chở nặng/leo dốc: cân nhắc cộng 1–2 răng sau; xe hay chạy đường trường: cân nhắc giảm răng sau — từng bước nhỏ.',
    'Sau khi đổi nhông/răng: chỉnh lại độ căng xích, kiểm tra đường kính tổng, chạy thử và theo dõi tiêu hao nhiên liệu.',
    'Xe ga "chậm dần": kiểm tra pulley, cân nặng và curoa trước khi kết luận máy yếu.',
    'Mỗi ngày: về số đúng lúc — máy gào thì về số thấp, máy ì thì lên số; dùng phanh động cơ khi xuống dốc dài.',
    'Giữ cấu hình truyền zin nếu không có nhu cầu rõ ràng — zin là điểm cân bằng đã được nhà sản xuất tối ưu.',
  ],
  warnings: [
    'Không giảm nhông trước quá nhỏ (ví dụ xuống 12 răng với xe phổ thông) — răng nhông cong nhanh hơn hẳn và xích mòn sớm.',
    'Không đổi răng sau với biên độ lớn một lần — xe có thể mất hẳn tốc độ đỉnh hoặc yếu hẳn lúc xuất phát; hãy đổi từng răng.',
    'Không kết luận "máy yếu" trước khi kiểm tra xích căng quá, pulley bẩn, curoa mòn — đó là những nguyên nhân phổ biến hơn nhiều.',
    'Sau khi đổi truyền, chỉ số tốc độ hiển thị có thể lệch thực tế — hãy chạy thận trọng và hiệu chỉnh theo cảm nhận tốc độ thật.',
  ],
  notes: [
    'Số liệu trong bài mang tính minh họa cho dòng xe số và xe ga phổ thông; tỷ số chính thức của từng mẫu lấy theo bảng công bố của nhà sản xuất.',
    'Mọi thay đổi hệ truyền nên do thợ có kinh nghiệm thực hiện để đảm bảo độ căng xích, lẫm và độ đồng bộ của cặp răng — tìm hiểu thêm trong bài chăm sóc dây xích.',
  ],
  references: [
    'Giáo trình hệ thống truyền lực về tỷ số bánh răng, hộp số và truyền cuối (tài liệu kỹ thuật, 2023).',
    'Sổ tay sử dụng xe máy phổ thông về khuyến nghị cỡ nhông – răng sau và độ căng xích (hướng dẫn vận hành an toàn, 2024).',
    'Tài liệu kỹ thuật về hệ truyền vô cấp (pulley, cân nặng, curoa) trên xe tay ga (tài liệu đào tạo dịch vụ, 2023).',
  ],
  related: [
    'cham-soc-day-xich-xe-may-dung-ky',
    'cong-suat-mo-men-xoan',
    'doc-thong-so-xe',
    'xe-so-hay-xe-ga',
    'di-xe-may-so-ky-thuat-bop-con-va-chuyen-so',
  ],
};
