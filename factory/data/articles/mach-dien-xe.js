// AI WIKI TOTAL — wiki/dien-xe: mạch điện xe — những điều cần biết (slot S00290)
'use strict';

module.exports = {
  slug: 'mach-dien-xe',
  title: 'Mạch điện xe — những điều cần biết',
  seoTitle: 'Mạch điện xe máy: dây dẫn, cầu chì, giắc nối — hiểu để tự chẩn đoán',
  metaDescription: 'Mạch điện xe máy gồm dây dẫn, cầu chì, giắc nối: cách đọc sơ đồ mạch đơn giản, lỗi mạch thường gặp và thao tác an toàn khi tự kiểm tra.',
  summary: 'Mạch điện là phần "vô hình" của hệ thống điện: các bó dây chạy sau ốp xe, các cầu chì nằm trong hộp nhỏ, các giắc nối rải rác từ tay lái tới đèn hậu. Khi đèn, còi hay đề gặp lỗi, phần lớn trục trặc nằm ở mạch — giắc oxyt, cầu chì đứt, dây chèn xẹp — chứ không phải ở thiết bị. Bài viết giúp người mới đọc được bức tranh mạch điện: các thành phần và vai trò, cách chẩn đoán lỗi theo từng nhóm triệu chứng, và những thao tác an toàn cần thuộc trước khi tự kiểm tra điện trên xe.',
  quickAnswer: 'Mạch điện xe gồm bốn thành phần: dây dẫn (nối nguồn tới thiết bị), cầu chì (ngắt dòng khi quá tải để bảo vệ mạch), giắc nối (các điểm tháo lắp được) và điểm mát (nối vỏ xe làm cực âm). Chẩn đoán theo triệu chứng: cả cụm đèn chết — kiểm cầu chì; một thiết bị chết — kiểm giắc và bóng; thiết bị kêu lúc được lúc không — tiếp xúc oxyt hoặc dây chèn. An toàn: tháo cọc âm ắc quy trước khi thao tác mạch, không thay cầu chì bằng dây kẽm.',
  keyPoints: [
    'Mạch gồm dây dẫn, cầu chì, giắc nối và điểm mát — bốn thành phần với bốn nhóm lỗi riêng.',
    'Cầu chì là "cửa ải bảo vệ": đứt là có nguyên nhân quá tải, thay mới mà không tìm nguyên nhân là lỗi lặp lại.',
    'Không bao giờ thay cầu chì bằng dây kẽm hoặc bạc năm — mất lớp bảo vệ, cháy mạch khi quá tải.',
    'Điểm mát là thủ phạm ẩn: bulong mát oxyt khiến đèn mờ, đề yếu dù ắc quy đầy.',
    'Giắc nối ẩm mùa mưa gây đủ loại lỗi lúc có lúc không — xịt vệ sinh tiếp xúc là trợ thủ số một.',
    'Trước khi thao tác mạch: tháo cọc âm ắc quy — một thói quen bảo vệ cả xe lẫn người.',
  ],
  category: 'wiki',
  hub: 'dien-xe',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['mạch điện', 'cầu chì', 'giắc nối', 'điểm mát', 'sơ đồ mạch', 'dây dẫn điện', 'oxyt'],
  keywords: ['mạch điện xe máy', 'cầu chì xe máy', 'sơ đồ mạch xe máy', 'điểm mát xe máy', 'giắc nối điện xe', 'tìm chập điện xe máy'],
  sections: [
    {
      h2: 'Bốn thành phần của mạch điện trên xe',
      html: `<p>Điện trên xe không chạy trong không trung: mọi dòng đi qua dây dẫn được bó gọn sau ốp, chia thành các mạch riêng cho đèn, còi, đề, đánh lửa. Mỗi mạch có một cầu chì — chiếc "cửa quan" nhỏ đứt khi dòng vượt mức, hy sinh bản thân để cứu cả mạch. Hộp cầu chì thường nằm dưới ốp trước hoặc gần ắc quy, nắp ghi ampe chuẩn từng vị trí.</p>
<p>Giắc nối là các điểm mạch chia làm đôi để tháo lắp được: giắc cặp từ cụm công tắc tay lái xuống, giắc đèn, giắc còi. Mỗi giắc là một điểm tiếp xúc — và cũng là một điểm tiềm lỗi: oxyt, ẩm, chập chân. Điểm mát là nơi mạch quay về cực âm qua vỏ xe: một vài bulong mát được mài sạch sơn — và chính các bulong này hay bị oxyt khiến triệu chứng kỳ lạ xuất hiện rải rác toàn xe.</p>
<p>Hiểu bốn thành phần này biến việc đọc sơ đồ mạch từ ma trận rối rắm thành dòng chảy dễ nhớ: dòng ra từ ắc quy, qua cầu chì, qua công tắc, vào thiết bị, và về điểm mát. Lỗi chỉ có thể nằm ở một khâu trên đường — và chẩn đoán là đi lần theo đường ấy.</p>`,
    },
    {
      h2: 'Đọc triệu chứng theo mạch: chẩn đoán không cần đồng hồ',
      html: `<p>Nhóm triệu chứng một — cả cụm chết: cả đèn pha không sáng, hoặc cả cụm xi nhan im. Trước tiên mở hộp cầu chì: cầu chì đứt thấy bằng mắt (dây bên trong đứt ngang hoặc cháy đen). Thay cầu chì đúng ampe — nếu cầu chì mới đứt lại ngay, mạch đang chập hoặc quá tải thật sự, cần tìm nguyên nhân, không phải lên ampe lớn hơn.</p>
<p>Nhóm triệu chứng hai — một thiết bị chết: chỉ đèn hậu không sáng, chỉ còi im. Kiểm theo trình tự từ rẻ: bóng, giắc của thiết bị đó, rồi dây dẫn bằng cách soi vỏ bọc có vết chèn rách (điểm hay gặp: sau ốp trước và dưới yên, nơi đồ đè và va chạm).</p>
<p>Nhóm triệu chứng ba — lúc có lúc không: đèn chớp tắt, còi lúc kêu lúc im, đề lúc được lúc không. Đây là địa hạt của tiếp xúc kém: giắc oxyt, chân giắc lỏng, dây sắp đứt trong vỏ bọc. Chi tiết khó chịu của nhóm này là xuất hiện khi xe rung và mất khi mang đi sửa — người lái nên quay video hiện tượng hoặc tự siết các giắc liên quan trước khi làm người mô tả bị nghi "bịa bệnh".</p>`,
    },
    {
      h2: 'Điểm mát: thủ phạm ẩn của những bệnh kỳ lạ',
      html: `<p>Vài triệu chứng không tuân theo bất kỳ mạch nào: đèn mờ toàn bộ, đề yếu dù ắc quy mới, còi nhỏ — và thợ kiểm từng thiết bị đều "bình thường". Khi ấy, điểm nghi là các bulong mát: dòng tất cả mạch đều phải về vỏ xe qua vài điểm này; oxyt một bulong là mọi thiết bị cùng thiếu dòng.</p>
<p>Cách tự kiểm: tìm các bulong mát (thường gần ắc quy và dưới khung sau, có nhiều dây đen/green gom về), tháo, mài sạch mặt tiếp xúc và bulong tới ánh kim loại, siết lại. Thao tác mười phút này chữa được nhiều "bệnh thần kinh" của xe máy đã làm thợ và người dùng đi lòng vòng nhiều ngày.</p>
<p>Nguyên tắc phòng bệnh: mỗi lần thay ắc quy hoặc bảo dưỡng điện, nhân tiện kiểm và lau sạch điểm mát. Với xe chạy mưa nhiều, vùng mát dưới gầm dễ bám bùn — lau vào mỗi kỳ rửa xe là thói quen nhỏ giữ mạch khỏe dài lâu.</p>`,
    },
    {
      h2: 'Cầu chì: thay đúng, không thay "khỏe hơn"',
      html: `<p>Cầu chì đóng vai "liều mình cứu mạch": khi dòng vượt mức — do chập, do thiết bị kẹt — sợi cầu chì nóng đứt, cắt dòng trước khi dây cháy cả bó. Vì vậy cầu chì đứt luôn là triệu chứng của một nguyên nhân khác, và thay cầu chì chỉ là bước đầu: quan sát tại sao nó đứt, kiểm mạch và thiết bị trước khi lại cấp điện.</p>
<p>Lỗi phổ biến và nguy hiểm: "chữa cháy" bằng dây kẽm, đầu đinh, lá bạc cắm thay cầu chì. Làm thế là gỡ bỏ toàn bộ lớp bảo vệ: lần sau chập, dòng tiếp tục chạy, dây nóng cháy bọc, và thiệt hại từ một cầu chì vài nghìn đồng thành cả bó dây và có khi là đám cháy. Nguyên tắc bất di: chỉ thay cầu chì đúng ampe ghi trên nắp hộp.</p>
<p>Bảo dưỡng hợp lý: mua một bộ cầu chì dự trữ đủ các ampe thông dụng để trong cốp — cầu chì rẻ, nhỏ, và đúng lúc cần thì không có gì thay thế được. Mỗi lần kiểm, soi màu cầu chì: cháy đen thay cho chập mạnh cần tìm kỹ; đứt sạch ngang thường chỉ quá tải tạm thời.</p>`,
    },
    {
      h2: 'An toàn khi tự thao tác mạch điện',
      html: `<p>Trước khi rà bất kỳ dây nào trên xe, tháo cọc âm ắc quy trước — thao tác nhỏ nhất và quan trọng nhất: nó cắt dòng khỏi toàn mạch, tránh chập do cờ lê chạm mát khi bạn tháo dây dương. Sau khi thao tác, siết lại cọc âm sau cùng. Chỉ một trình tự, nhớ bằng câu "âm trước khi bắt đầu, âm sau cùng khi kết thúc". Trên thực tế, phần lớn các sự cố điện nghiêm trọng xảy ra tại chính bước bỏ qua trình tự này: người thao tác mải mê tháo dây phía dương mà quên nguồn vẫn đang nối, một cú chạm nhẹ của cờ lê vào khung xe là đủ tạo tia lửa và làm tan cả chụp giắc. Chậm lại ba mươi giây để tháo cọc âm luôn rẻ hơn nhiều giờ sửa sau khi vạ lây lan sang các thiết bị khác.</p>
<p>Bốn điều không: không đo hay rà mạch khi máy đang nổ; không để hai đầu dây trần chạm nhau khi ắc quy còn nối; không bọc nối dây bằng băng dính thông thường trong vùng ẩm (dùng băng cách điện chất lượng hoặc đầu nối nhiệt co); không gắn phụ kiện rà dây tùy tiện không qua cầu chì.</p>
<p>Giới hạn tự làm: người dùng tự xử tốt các việc vệ sinh giắc, thay cầu chì, siết mát, thay bóng. Còn các lỗi chập khó tìm, mạch tiêu thụ kéo dòng khi tắt máy (kéo ắc quy), hoặc thao tác trên xe phun xăng điện tử nhiều cảm biến — nên để thợ có đồng hồ và sơ đồ. Biết dừng đúng chỗ cũng là một kỹ năng điện đấy đáng giá.</p>`,
    },
  ],
  checklist: [
    'Tháo cọc âm ắc quy trước mọi thao tác mạch; siết lại sau cùng.',
    'Giữ bộ cầu chì dự trữ đủ ampe trong cốp; chỉ thay đúng ampe ghi trên hộp.',
    'Định kỳ mài sạch và siết các bulong mát — thủ phạm của đèn mờ toàn xe.',
    'Mùa mưa: xịt vệ sinh tiếp xúc vào giắc và công tắc tay lái.',
    'Cầu chì đứt lặp lại: tìm nguyên nhân chập, không tăng ampe.',
    'Bọc nối dây bằng băng cách điện chất lượng, tránh vùng ẩm bằng đầu nối co nhiệt.',
  ],
  warnings: [
    'Không bao giờ thay cầu chì bằng dây kẽm, đầu đinh hay lá bạc — mất bảo vệ, rủi ro cháy mạch.',
    'Không rà mạch khi ắc quy còn nối và bạn chưa nắm rõ cực tính.',
    'Xe phun xăng điện tử: đọc mã lỗi trước khi can thiệm mạch cảm biến.',
  ],
  notes: [
    'Bài viết hướng dẫn theo mức người dùng tự kiểm an toàn, không thay thế tài liệu kỹ thuật của hãng.',
    'Sơ đồ mạch và vị trí cầu chì theo từng dòng xe nằm trong sổ tay — mở tham chiếu trước khi thao tác.',
  ],
  references: [
    'Tài liệu kỹ thuật về hệ thống điện xe gắn máy — sơ đồ mạch, cầu chì và điểm mát.',
    'Sổ tay hướng dẫn sử dụng của các nhà sản xuất xe máy — bố trí cầu chì và cảnh báo an toàn.',
    'Quy chuẩn an toàn điện thấp áp khi bảo trì phương tiện cơ giới.',
  ],
  related: [
    'he-thong-dien-xe',
    'ac-quy-xe-may',
    'ecu-tren-xe-may-la-gi',
    'xe-may-bi-chuot-can-day-dien-phong-va-xu-ly',
  ],
};
