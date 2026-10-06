module.exports = {
  slug: 'bang-thong-so-xe',
  title: 'Bảng thông số xe máy: cách đọc, so sánh và tránh bẫy con số',
  seoTitle: 'Cách đọc và so sánh bảng thông số xe máy',
  metaDescription: 'Bảng thông số xe máy chứa hàng chục dòng số liệu. Bài viết hướng dẫn đọc bảng theo nhóm, so sánh hai xe đúng cách và nhận ra bẫy thông số thường gặp khi mua xe.',
  summary: 'Mở trang giới thiệu một mẫu xe máy, khối nội dung dài nhất thường là bảng thông số: vài chục dòng từ dung tích xi lanh đến chiều dài cơ sở, từ lực nén đến trọng lượng không tải. Bảng này là nguồn dữ liệu khách quan nhất người mua có được — nhưng cũng là nơi dễ gây hiểu lầm nhất, vì mỗi dòng chỉ có ý nghĩa khi đọc đúng điều kiện kèm theo và so trong đúng ngữ cảnh. Bài viết này xem bảng thông số như một "tài liệu thẩm định": hướng dẫn chia bảng thành các nhóm dễ đọc, chỉ ra dòng nào quyết định trải nghiệm hàng ngày, dòng nào chỉ mang tính kỹ thuật, cách so hai bảng cạnh nhau cho công bằng, và những bẫy quen thuộc — con số quảng cáo tách khỏi điều kiện đo, thông số giữa các phiên bản bị trộn lẫn, hay cách ghi đơn vị không đồng nhất giữa các hãng.',
  quickAnswer: 'Đọc bảng thông số xe máy hiệu quả theo bốn bước: (1) chia bảng thành nhóm động cơ, kích thước – trọng lượng, khung gầm – phanh – lốp, vận hành; (2) với mỗi con số quan trọng, đọc kèm điều kiện đo (vòng tua, điều kiện đường, mức tải); (3) khi so hai xe, xếp hai bảng cạnh nhau và chỉ so các dòng cùng đơn vị, cùng phiên bản; (4) ưu tiên các dòng ảnh hưởng trực tiếp đến bạn hàng ngày — chiều cao yên, trọng lượng, mô-men xoắn ở vòng tua thấp, khoảng sáng gầm, tiêu hao nhiên liệu — trước khi nhìn các con số "khoe" như công suất tối đa và tốc độ đỉnh.',
  keyPoints: [
    'Bảng thông số chia được thành bốn nhóm: động cơ, kích thước – trọng lượng, khung gầm – an toàn, vận hành — đọc theo nhóm nhanh hơn đọc từng dòng rời rạc.',
    'Con số nào cũng cần điều kiện kèm: công suất/mô-men gắn với vòng tua, tiêu hao nhiên liệu gắn với điều kiện đo, tải trọng gắn với trạng thái xe.',
    'Khi so hai xe: đặt hai bảng cạnh nhau, chuẩn hóa đơn vị (kW đổi mã lực, mm đổi mét) và xác nhận đang so cùng phiên bản, cùng năm.',
    'Các dòng ảnh hưởng hàng ngày nhất: chiều cao yên, trọng lượng, mô-men xoắn, khoảng sáng gầm, dung tích bình xăng, cỡ lốp.',
    'Cẩn thận thông số trộn lẫn giữa các phiên bản (bản thường, bản đặc biệt, bản ABS) — đây là bẫy phổ biến khi tra trên mạng.',
    'Bảng thông số là điểm khởi đầu thẩm định, không thay thế chạy thử — cảm giác ngồi, phanh và độ êm không nằm trong bảng.',
  ],
  category: 'learn',
  hub: 'doc-thong-so',
  date: '2026-10-06',
  updated: '2026-10-06',
  entities: ['bảng thông số', 'thông số kỹ thuật', 'phiên bản xe', 'điều kiện đo', 'so sánh xe', 'phiên bản đặc biệt'],
  keywords: ['bang thong so xe', 'doc bang thong so xe may', 'so sanh thong so xe may', 'thong so xe may la gi', 'chon xe theo thong so', 'thong so ky thuat'],
  sections: [
    {
      h2: 'Chia bảng thông số thành bốn nhóm để không bị choáng',
      html: `<p>Người mới đọc bảng thông số thường cố nhớ từng dòng và chóng mặt từ dòng thứ mười. Cách hiệu quả hơn: nhận diện bảng gồm bốn cụm. Cụm động cơ gồm dung tích, đường kính × hành trình piston, công suất, mô-men xoắn, tỷ số nén, hệ thống cung cấp nhiên liệu — trả lời "máy mạnh kiểu gì". Cụm kích thước gồm dài × rộng × cao, chiều cao yên, chiều dài cơ sở, trọng lượng không tải, khoảng cách hai bánh — trả lời "xe vừa vóc người và chỗ đỗ của mình không".</p>
<p>Cụm khung gầm – an toàn gồm khoảng sáng gầm, loại treo trước sau, cỡ phanh (đĩa/tang trống, đường kính), cỡ lốp trước sau — trả lời "xe thích nghi đường xấu và phanh chắc đến đâu". Cụm vận hành gồm dung tích bình xăng, mức tiêu hao nhiên liệu, tốc độ tối đa, loại nhiên liệu — trả lời "chạy một bình được bao xa, mỗi tháng tốn bao nhiêu".</p>
<p>Chỉ cần nắm bản đồ bốn cụm này, bạn mở bảng thông số của bất kỳ hãng nào cũng định vị được ngay: dòng nào thuộc cụm nào, cụm nào quan trọng với nhu cầu mình, cụm nào có thể đọc lướt. Đây cũng là khung sườn để lập bảng so sánh hai xe: một hàng cho mỗi cụm, so xong một cụm mới chuyển sang cụm khác, tránh bị con số đơn lẻ dẫn đi lòng vòng.</p>`,
    },
    {
      h2: 'Điều kiện đo: phần chữ nhỏ quyết định con số lớn',
      html: `<p>Mọi con số trong bảng thông số đều được đo trong điều kiện cụ thể, và phần điều kiện thường in nhỏ hơn hoặc ghi chú ở cuối bảng. Công suất "tại 8500 vòng/phút" nghĩa là con số đó chỉ xuất hiện khi máy quay đúng 8500 vòng; tiêu hao nhiên liệu "1,9 lít/100 km" thường đo ở tốc độ đều 50 km/h trên đường phẳng, không tính khởi động, dừng đèn đỏ — nên khi đi phố số thật có thể lên tới 2,3–2,5 lít/100 km mà không phải xe hỏng.</p>
<p>Trọng lượng cũng cần đọc kỹ: "không tải" hay "đầy dầu xăng" chênh nhau vài kilôgam; "tải trọng tối đa" là tổng khối lượng người và hàng cho phép thêm vào, vượt quá là hủy cân bằng phanh – treo và làm hỏng làn quả xốp. Với người hay chở đôi hoặc chở hộp, hai dòng tải trọng và trọng lượng bản thân xe là thứ phải đối chiếu trước — chiếc xe "nhẹ hơn 3 kg" trên giấy rất khó cảm nhận, nhưng "tải tối đa thấp hơn 20 kg" thì ảnh hưởng trực tiếp mỗi khi chở người ngồi sau kèm vali.</p>
<p>Thói quen đơn giản mà hiệu quả: khi ghi lại một con số từ bảng thông số, luôn ghi kèm điều kiện theo sau — "6,5 kW @ 7500 rpm", "2,2 lít/100 km (điều kiện chuẩn)". Sau hai ba mẫu xe, bạn sẽ có một danh sách so sánh sạch, mỗi dòng tự nói về điều kiện của nó, và các cuộc tranh luận "xe A mạnh hơn xe B" sẽ có căn cứ thay vì cảm tính.</p>`,
    },
    {
      h2: 'So sánh hai bảng thông số cho công bằng',
      html: `<p>Bước chuẩn bị: chắc chắn hai bảng cùng nguồn (đều trang chính hãng hoặc đều tài liệu cung cấp tại đại lý), cùng phiên bản và cùng năm — vì một mẫu xe 2024 và 2026 có thể khác công suất, lốp và cả chiều cao yên sau các đợt "cập nhật phiên bản". Bẫy phổ biến trên mạng là bảng của bản đặc biệt (xếp mâm đen, phi phí ABS) bị dán cho bản thường, hoặc dữ liệu thị trường khác (chẳng hạn bản nội địa Nhật) bị dùng cho xe bán tại Việt Nam.</p>
<p>Bước chuẩn hóa đơn vị: công suất có nơi ghi kW, có nơi ghi mã lực (1 kW = 1,36 mã lực); mô-men có nơi N.m tại vòng/phút, có nơi kgf.m (1 kgf.m ≈ 9,8 N.m); tiêu hao có nơi ghi lít/100 km, có nơi km/lít. Đưa về một đơn vị trước khi so, nếu không "9,5 cao hơn 0,95" là một phép so sai đơn vị kinh điển. Tiêu hao kiểu km/lít càng lớn càng tốt, còn lít/100 km càng nhỏ càng tốt — hai xe ghi hai kiểu là so ngược nhau ầm ờ.</p>
<p>Bước đối chiếu: đi theo bốn cụm, mỗi cụm chấm điểm ưu tiên theo nhu cầu mình (ví dụ cụm kích thước quan trọng hơn cụm vận hành với người đô thị). Chỉ so các dòng hai xe đều có; dòng chỉ một xe có thì ghi chú riêng để hỏi đại lý (ví dụ một xe ghi sẵn loại lốp không săn, xe kia không ghi). Kết thúc bằng một dòng kết luận ngắn: xe nào thắng ở cụm quan trọng nhất với mình — đó là dữ liệu ra quyết định, không phải điểm quảng cáo.</p>`,
    },
    {
      h2: 'Các dòng đáng đọc kỹ và các dòng có thể lướt',
      html: `<p>Nếu chỉ có mười phút, đọc kỹ sáu dòng sau: chiều cao yên (chống chân có chạm đất thoải mái không), trọng lượng không tải (đẩy xe, dừng xe, chở đồ có vất vả không), mô-men xoắn và vòng tua đạt tối đa (xe bốc ở dải bạn đi hàng ngày không), khoảng sáng gầm (qua ổ gà, gờ giảm tốc, đường quê có chạm gầm không), dung tích bình xăng cộng tiêu hao nhiên liệu (mỗi bình đi được chừng nào), và cỡ lốp (linh kiện phổ biến hay, giá thay thế thế nào). Sáu dòng này bao gần trọn trải nghiệm sở hữu xe mỗi ngày.</p>
<p>Có thể lướt nhanh: đường kính × hành trình piston, tỷ số nén, loại bugi, tỷ số các cấp số, loại ắc quy — các dòng này chỉ cần thiết khi độ chế hay thay phụ tùng, còn khi chọn mua chỉ dùng để tham khảo thêm. Tốc độ tối đa và công suất tối đa thuộc nhóm "đọc cho biết" — chúng gắn với vòng tua cao mà thực tế lưu thông ít khi dùng tới, và không nên là lý do chính chọn một mẫu xe bỏ mẫu khác.</p>
<p>Ngoài bảng: vài thông tin quan trọng không nằm trong bảng thông số mà nằm trong tài liệu bảo dưỡng — mốc thay dầu, chu kỳ bảo hành, giá phụ tùng phổ biến. Người mua kỹ tính sẽ hỏi kèm ba câu này tại đại lý: bảo dưỡng đầu tiên ở km thứ mấy, khoảng cách giữa hai lần thay dầu định kỳ, và thời gian chờ phụ tùng thông thường. Đây là phần "chi phí sở hữu thật" mà bảng thông số không in.</p>`,
    },
    {
      h2: 'Bẫy thông số thường gặp và cách tránh',
      html: `<p>Bẫy thứ nhất: con số tách khỏi điều kiện — quảng cáo in "công suất lớn nhất phân khúc" mà không in vòng tua, hoặc in "tiết kiệm xăng số một" với điều kiện đo chuẩn rất hẹp. Cách tránh: luôn hỏi vòng tua, điều kiện đo và nguồn công bố. Bẫy thứ hai: trộn phiên bản — thông số bản cao cấp (đĩa phanh kép, ABS, lốp đặc biệt) bị gộp vào bài giới thiệu bản thường. Cách tránh: đối chiếu bản in trên website chính hãng và bản trong giấy tờ kèm xe lúc nhận hàng.</p>
<p>Bẫy thứ ba: đơn vị không đồng nhất giữa các bảng so sánh trên mạng — web tổng hợp đôi khi tự dịch kW ra mã lực sai hệ số, hoặc quy đổi tiêu hao mà quên ghi đơn vị. Cách tránh: lấy bảng gốc của hãng cho mỗi xe rồi tự dịch. Bẫy thứ tư: con số "đẹp" không ảnh hưởng mình — ví dụ cãi nhau nửa mã lực trong khi chiều cao yên chênh 30 mm lại quyết định việc chân có chống chạm đất, thứ dùng mỗi ngày.</p>
<p>Bẫy cuối cùng: tin bảng thông số thay cho chạy thử. Bảng là điều kiện cần — loại nhanh các mẫu không hợp — nhưng điều kiện đủ vẫn là 15 phút ngồi lên xe: chống thử hai chân, mở ga thử, phanh thử, chở người ngồi sau thử. Chiếc xe thắng trên giấy mà thua dưới yên thì bảng thông số cũng chỉ là bảng số — chọn chiếc khiến bạn tự tin mỗi sáng ra khỏi nhà, đó mới là mục đích thật của việc đọc bảng.</p>`,
    },
  ],
  checklist: [
    'Chia bảng thông số thành bốn nhóm: động cơ, kích thước – trọng lượng, khung gầm – an toàn, vận hành; đọc theo nhóm.',
    'Ghi mỗi con số kèm điều kiện đo: vòng tua cho công suất/mô-men, điều kiện đường cho tiêu hao nhiên liệu.',
    'Khi so hai xe: xác nhận cùng phiên bản, cùng năm, cùng nguồn; chuẩn hóa đơn vị (kW–mã lực, N.m–kgf.m, lít/100 km–km/lít).',
    'Đọc kỹ sáu dòng ảnh hưởng hàng ngày: chiều cao yên, trọng lượng, mô-men xoắn, khoảng sáng gầm, bình xăng + tiêu hao, cỡ lốp.',
    'Hỏi đại lý ba câu ngoài bảng: mốc bảo dưỡng đầu, chu kỳ thay dầu, thời gian chờ phụ tùng.',
    'Kết thúc bằng chạy thử: bảng chọn được rút gọn danh sách, cảm giác thật chọn chiếc cuối cùng.',
  ],
  warnings: [
    'Không so hai con số khác đơn vị (kW với mã lực, lít/100 km với km/lít) — quy đổi trước, nếu không phép so là sai.',
    'Không lấy thông số bản đặc biệt/high-end để quyết định mua bản thường — phiên bản có thể khác phanh, lốp và cả động cơ.',
    'Không dùng bảng thông số thị trường nước ngoài cho xe bán nội địa — cấu hình và phép đo có thể khác.',
    'Không chở vượt tải trọng tối đa ghi trong bảng — vượt tải làm hỏng treo, lốp và kéo dài quãng đường phanh.',
  ],
  notes: [
    'Cách ghi thông số có thể khác nhau giữa các hãng và giữa các phiên bản — luôn ưu tiên bảng công bố chính thức kèm xe tại thị trường Việt Nam.',
    'Bài viết hướng dẫn phương pháp đọc bảng; ý nghĩa chi tiết của từng loại thông số được giải thích trong bài đọc thông số xe máy.',
  ],
  references: [
    'Bảng thông số kỹ thuật các mẫu xe máy phổ thông do nhà sản xuất công bố tại Việt Nam (tài liệu sản phẩm, 2024).',
    'Sổ tay hướng dẫn sử dụng xe máy về tải trọng, bảo dưỡng và điều kiện vận hành (hướng dẫn vận hành an toàn, 2024).',
    'Quy chuẩn công bố tiêu hao nhiên liệu và phương pháp đo điều kiện chuẩn (tài liệu kỹ thuật, 2023).',
  ],
  related: [
    'doc-thong-so-xe',
    'doc-thong-so-ky-thuat-xe-may',
    'cong-suat-mo-men-xoan',
    'kich-co-lop',
    'chon-xe-theo-nhu-cau',
  ],
};
