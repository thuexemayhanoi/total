// AI WIKI TOTAL — wiki/lop-banh-xe: hướng dẫn chi tiết về áp suất lốp (slot S00299)
'use strict';

module.exports = {
  slug: 'ap-suat-lop',
  title: 'Hướng dẫn chi tiết về áp suất lốp',
  seoTitle: 'Áp suất lốp xe máy: chuẩn, cách kiểm tra và hệ quả của non hơi',
  metaDescription: 'Áp suất lốp xe máy chuẩn là bao nhiêu, kiểm khi nào, vì sao non hơi mòn mép lốp nhanh, vì sao căng quá mất bám, và cách xử lý rò khí kéo dài.',
  summary: 'Áp suất lốp là thông số duy nhất của lốp mà người dùng chỉnh được mỗi tuần — và cũng là thông số bị sai nhiều nhất. Non hơi vài PSI nhìn mắt thường không ra, nhưng đổi hình dạng vệt tiếp xúc: mép lốp gập xuống ăn mặt đường, mòn hai mép nhanh gấp bội, tăng lực cản lăn, và lốp nóng nhiều hơn khi chạy dài. Căng quá thì ngược lại: vệt tiếp xúc co vào giữa, giữa lốp mòn nhanh, lớp mỏi chịu ứng suất cao, và lực bám giảm đúng lúc cần bám nhất. Bài hướng dẫn này đi từ con số: áp suất chuẩn ở đâu, trước-sau khác nhau ra sao, chạy đôi hay chở nặng chỉnh thế nào; tới dụng cụ và kỹ thuật đo đúng (đo khi lốp nguội, kim đo hay đồng hồ trạm bơm); tới ba hệ quả vật lý của đo sai; và cuối cùng là cách săn tìm nguồn rò khí kéo dài — van, mép vành, hay lỗ đâm nhỏ vô hình.',
  quickAnswer: 'Áp suất lốp chuẩn nằm trên tem dán ở cổ giò hoặc trong cốp xe (ví dụ phổ biến quanh 29-33 psi trước, 33-36 psi sau tùy dòng xe), hoặc trong sổ tay. Kiểm hàng tuần khi lốp nguội bằng kim đo — kim cơ đáng tin hơn đồng hồ trạm bơm công cộng. Non hơi: mép lốp mòn nhanh, lăn nặng, nóng lốp, tay lái nặng. Căng quá: giữa lốp mòn nhanh, giảm bám và xóc. Chở nặng hoặc chạy đôi: chỉnh theo cột tải nặng trên tem dán (thường thêm 2-4 psi). Rò kéo dài không lỗ thấy rõ: xà phòng quanh van và mép vành để tìm bong bóng.',
  keyPoints: [
    'Con số chuẩn nằm trên tem dán cổ xe hoặc sổ tay — không dùng con số "người ta nói" cho xe mình.',
    'Đo khi lốp nguội: chạy xa rồi đo là sai con số — nhiệt làm áp tăng tự nhiên 2-4 psi.',
    'Trước và sau thường khác áp suất — kiểm cả hai bánh, mỗi tuần một lần.',
    'Non hơi mòn hai mép lốp và tăng nhiệt; căng quá mòn giữa và giảm lực bám.',
    'Chở nặng/chạy đôi: dùng cột áp suất tải nặng trên tem dán — thường thêm 2-4 psi.',
    'Kim đo cơ loại kim tốt nhất cho gia đình: rẻ, không Pin, để trong cốp kiểm mọi lúc.',
  ],
  category: 'wiki',
  hub: 'lop-banh-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['áp suất lốp', 'psi', 'kim đo áp suất', 'tem dán áp suất', 'lốp non hơi', 'lốp căng quá', 'vệt tiếp xúc'],
  keywords: ['áp suất lốp xe máy', 'bơm lốp bao nhiêu psi', 'lốp non hơi dấu hiệu', 'kiểm tra áp suất lốp', 'áp suất chuẩn xe tay ga', 'áp suất lốp chạy đôi'],
  sections: [
    {
      h2: 'Con số chuẩn nằm ở đâu và đọc thế nào',
      html: `<p>Tem dán áp suất nằm ở cổ xe bên dưới giò hoặc trong nắp cốp trên xe tay ga, ghi hai cột: một người (single) và chở nặng/two-up. Ví dụ dạng 29/33 psi: cột trái thường là bánh trước, phải là bánh sau. Cột tải nặng thường hơn cột một người 2-4 psi — lốp chịu tải lớn hơn cần áp lớn hơn để giữ đúng hình dạng vệt tiếp xúc.</p>
<p>Đơn vị: psi phổ biến ở Việt Nam; một số tem ghi kPa (1 psi ≈ 6,9 kPa) hoặc bar (1 bar ≈ 14,5 psi). Không quy đổi phỏng chừng trong đầu — dùng máy bơm có sẵn thang đơn vị mình đọc chắc nhất.</p>
<p>Nguyên tắc đọc: con số trên tem là điều kiện chuẩn của xe đó, lốp đó, tải đó. Không mang con số "xe tay ga cứ bơm 30 cho cùng" áp cho mọi xe: hai xe tay ga cùng cỡ lốp vẫn có thể chênh vài psi do khối lượng và phân bổ tải khác nhau. Nói cách khác: tin tem trên xe mình trước mọi lời khuyên chung.</p>`,
    },
    {
      h2: 'Đo đúng: lúc đo, dụng cụ và kỹ thuật',
      html: `<p>Lúc đo quan trọng hơn dụng cụ: áp suất tăng theo nhiệt — chạy vài km là hơi trong lốp nở ra thêm 2-4 psi. Đo "chuẩn" là đo khi lốp nguội, xe đậu ít nhất nửa giờ hoặc đậu qua đêm. Muốn theo dõi xu hướng thì đo cùng một thời điểm mỗi tuần — cùng điều kiện thì so sánh mới ra rò hay chỉ dao động nhiệt.</p>
<p>Dụng cụ: kim đo cơ loại tốt giá vài chục nghìn — đáng tin hơn đồng hồ kim trên trạm bơm công cộng bị hao sau nghìn lần dùng. Vặn nắp van, ép kim ngắt tiếng "xì" ngắn nhất có thể, đọc kim. Kim điện tử nhỏ gọn nhưng phụ thuộc Pin; kiểu kim kim cơ vẫn là lựa chọn "cứu hoả" bền nhất. Sau đo, đậy nắp van lại — nắp là lớp bụi thứ hai cho lõi van.</p>
<p>Kỹ thuật nhỏ đáng giá: khi đo, nếu nghe xì liên tục là mặt đo chưa ép kín — ép lại thay vì đọc số đang nhảy. Và khi bơm bằng trạm khí nén, bơm quá vài psi rồi xả dần về chuẩn bằng kim đo riêng: đồng hồ trạm không chính xác tới từng psi, nhưng kim đo của mình thì có thể.</p>`,
    },
    {
      h2: 'Non hơi: hệ quả bốn tầng',
      html: `<p>Tầng một — mòn: non hơi làm hai mép lốp gập xuống, vệt tiếp xúc mở rộng hai mép, và hai mép gánh ma sát — mòn nhanh bất thường còn giữa hoa còn nguyên. Nhìn lốp mòn hai mép là dấu hiệu xe đã chạy non hơi nhiều tuần.</p>
<p>Tầng hai — nhiệt và lực cản: lốp non gập liên tục khi lăn, mỗi vòng quay là một lần "gập-mở" hai mép, biến cơ năng thành nhiệt — lốp nóng nhiều hơn, nhanh hơn, và sự gập đó chính là lực cản lăn tăng: xe nặng tay, tốn xăng hơn — đo được bằng cảm giác chân ga.</p>
<p>Tầng ba — xử lý: non hơi làm thành lốp mềm, vào cua xe "nhũn" thiếu chính xác, bóp phanh thì trục bánh lắc lư theo độ gập. Với lốp có săng, non hơi còn là kịch bản rủi ro: lốp gập trượt, ruột bị kẹp giữa gờ và vành, rách mép ruột — xẹp đột ngột. Tầng bốn — cơ cấu: non kéo dài làm gờ lốp mài trên mép vành, hỏng cả vòng kín khí của tubeless. Sửa lốp nhưng vành đã mòn thì rò kéo dài vẫn còn.</p>`,
    },
    {
      h2: 'Căng quá: mất bám không cảnh báo',
      html: `<p>Căng quá làm vệt tiếp xúc co lại chính giữa: mép hai bên nhấc lên khỏi mặt đường, chỉ dải giữa lăn — diện tích bám giảm, và giữa lốp mòn nhanh. Bám giảm không có cảnh báo: trời khô vẫn thấy êm, tới đường ướt hoặc phanh gấp mới thấy bánh trượt sớm hơn bình thường.</p>
<p>Tầng ứng suất: hơi căng cao làm lớp mỏi và dây đai làm việc gần giới hạn đàn hồi — đâm phải ổ gà, va hố đá là va lực tập trung, tăng nguy cơ đứt dây bên trong (nổi phồng sau đó). Đồng thời lốp căng giảm quãng hấp thụ gờ đường, chuyển rung lên gảm xóc, cổ xe và tay người lái — đường nhấp nhô chạy lâu mỏi tay nhanh hơn.</p>
<p>Căng "tới mức" để bền hơn là hiểu lầm ngược: tuổi thọ lốp tối đa nằm ở áp suất đúng chuẩn, không phải ở mức cao nhất. Ngoại lệ duy nhất là chạy tải nặng — nhưng đó là con số của cột tải nặng trên tem, vẫn là con số đo được chứ không phải "bơm cứng tay cho chắc".</p>`,
    },
    {
      h2: 'Rò kéo dài: săn nguồn rò bằng nước xà phòng',
      html: `<p>Lốp non lại dù bơm đúng cách tuần trước nghĩa là có nguồn rò. Ba ứng viên: lõi van, đế van, và mép gờ lốp-vành (với tubeless), hoặc ruột xe (với có săng). Phép săn: xà phòng loãng bôi quanh đế van, nắp lõi, dọc mép gờ lốp theo vành — bong bóng nhỏ nổi lên nơi nào là rò ở đó.</p>
<p>Xử theo từng nguồn: lõi van rò thì siết lại bằng dụng cụ hoặc thay lõi (rẻ, nhanh); đế van chai thì thay van — với tubeless là tháo lốp một phần, thợ làm trong vài phút; mép vành rò thì xả, tháo lốp, vệ sinh mép vành và gờ lốp rồi ép lại — thường là vết gỉ hoặc dát bẩn đóng ở mép, không phải lỗ đâm.</p>
<p>Vết đâm nhỏ vô hình: đinh cắm đứt để lại lỗ cỡ đầu kim, giữ hơi chậm kiểu "non 3 psi một tuần" — soi mặt hoa dưới đèn nghiêng vẫn không thấy. Cách chắc chắn: tháo bánh, ngâm dò hoặc vào tiệm soi trong bằng dụng cụ mở rộng. Trước khi kết luận "lốp này tệ", hãy loại trừ cả ba nguồn trên — phần lớn rò kéo dài nằm ở van, không phải ở lốp.</p>`,
    },
  ],
  checklist: [
    'Đọc tem dán cổ xe: ghi lại áp suất chuẩn trước-sau cho một người và chở nặng.',
    'Kiểm hàng tuần khi lốp nguội bằng kim đo — không đo ngay sau khi chạy xa.',
    'Bơm quá vài psi rồi xả dần về chuẩn bằng kim đo của mình.',
    'Chở nặng hoặc chạy đôi: dùng cột áp suất tải nặng trên tem dán.',
    'Non lại không rõ lý do: xà phòng dò van, đế van, mép gờ lốp trước khi đổi lốp.',
    'Đậy nắp van sau mỗi lần đo/bơm — nắp là lớp chắn bụi cho lõi van.',
  ],
  warnings: [
    'Không "bơm cứng cho bền" — áp cao quá chuẩn làm mất bám và tăng nguy cơ phồng lốp khi va.',
    'Lốp non mà chạy nhanh dài: nhiệt dồn làm ruột hoặc lớp màng bên trong hỏng — dừng bơm lại trước khi tiếp tục.',
    'Đo áp suất ngay sau khi chạy dài cho con số cao hơn chuẩn — không xả bớt khi lốp còn nóng.',
  ],
  notes: [
    'Con số trong bài minh hoạ theo khối xe phổ thông; áp suất chuẩn từng xe nằm trên tem dán cổ xe hoặc sổ tay hãng.',
    'Với lốp có săng và không săng có ngưỡng chịu áp riêng ghi trên thành lốp — không bơm vượt ngưỡng ghi.',
  ],
  references: [
    'Tài liệu kỹ thuật về áp suất lốp và vệt tiếp xúc trên xe gắn máy hai bánh.',
    'Khuyến nghị áp suất của các nhà sản xuất xe cho từng dòng xe phổ thông.',
    'Quy chuẩn kỹ thuật quốc gia về lốp và áp suất hoạt động của mô tô hai bánh.',
  ],
  related: [
    'ap-suat-lop-xe-may-chuan-va-cach-kiem-tra',
    'lop-xe-may',
    'thay-lop-khi-nao',
    'lop-khong-sang',
  ],
};
