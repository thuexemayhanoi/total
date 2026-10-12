// AI WIKI TOTAL — S00541; informational-only; không nêu giá, địa chỉ hay quy định thời sự cụ thể.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'thue-xe-may-thue-xe-xe-may-chi-phi-ngan-ngay',
  title: 'Thuê xe máy: chi phí và cách tính khi dùng ngắn ngày',
  seoTitle: 'Chi phí thuê xe máy ngắn ngày: cách tính và các mốc giờ',
  metaDescription: 'Cách hiểu chi phí khi thuê xe máy một đến vài ngày: mốc giờ tính ngày, khoản cố định chiếm tỷ trọng lớn, mức nhiên liệu lúc nhận trả và phụ trội khi trả xe trễ.',
  summary: 'Bài viết phân tích cách tính chi phí khi thuê xe máy trong một đến ba ngày: mốc giờ bắt đầu và kết thúc, vì sao các khoản cố định như cọc, giao nhận hay phụ kiện chiếm tỷ trọng đáng kể, cách đối chiếu nhiên liệu khi nhận và trả, cùng cách lập bảng tổng để so sánh hợp lý.',
  quickAnswer: 'Với thuê ngắn ngày, hãy hỏi kỹ cách tính một ngày bắt đầu và kết thúc lúc nào, vì chênh lệch vài giờ có thể làm thay đổi số ngày bị tính. Đồng thời xác nhận mức nhiên liệu khi nhận trả, các khoản cố định và phụ trội nếu trả muộn để lập tổng chi phí dự kiến.',
  keyPoints: [
    'Mốc giờ tính một ngày thuê quyết định số ngày bị tính nên cần hỏi và ghi lại.',
    'Các khoản cố định như giao nhận hoặc phụ kiện chiếm tỷ trọng lớn hơn khi thuê ít ngày.',
    'Mức nhiên liệu khi nhận và khi trả cần ghi trong biên bản để không tranh cãi.',
    'Trả xe trễ vài giờ có thể bị tính như thế nào cần được xác nhận trước.',
    'Nên lập bảng tổng chi phí dự kiến trước khi quyết định thuê.'
  ],
  category: 'thue-xe',
  hub: 'xe-may',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['thuê xe máy ngắn ngày', 'chi phí thuê xe', 'nhiên liệu', 'phụ phí trả xe'],
  keywords: ['chi phí thuê xe máy ngắn ngày', 'cách tính ngày thuê xe máy', 'thuê xe máy một hai ngày', 'trả xe muộn tính thế nào'],
  sections: [
    P('Một ngày thuê bắt đầu và kết thúc vào lúc nào', [
      'Điều đầu tiên cần làm rõ khi thuê trong thời gian ngắn là cách bên cho thuê định nghĩa một ngày. Có nơi tính theo ngày dương lịch từ đầu ngày đến hết ngày, có nơi tính theo chu kỳ hai mươi bốn giờ kể từ lúc nhận xe, và có nơi chia mốc giờ trả cố định. Mỗi cách tính cho ra kết quả khác nhau khi bạn nhận xe vào buổi chiều.',
      'Hãy hỏi cụ thể bằng một ví dụ: nếu tôi nhận xe lúc chiều và trả vào trưa ngày hôm sau, bạn sẽ tính tôi bao nhiêu ngày? Câu hỏi có ví dụ giúp loại bỏ cách hiểu mơ hồ. Ghi lại câu trả lời bằng tin nhắn và đối chiếu khi nhận xe, vì mốc giờ chính là yếu tố dễ gây tranh cãi nhất ở các chuyến ngắn.',
      'Khi chuyến đi chỉ gồm một hai ngày, hãy cân nhắc chọn khung giờ nhận trả phù hợp với lịch trình thay vì cố lấp đầy cả ngày. Ví dụ nhận vào buổi sáng sớm và trả vào cuối ngày thường tận dụng tốt thời gian thuê. Việc lên kế hoạch giờ giấc từ trước giúp bạn tránh bị tính thêm một ngày chỉ vì lệch vài tiếng.'
    ]),
    P('Khoản cố định chiếm tỷ trọng lớn khi thuê ít ngày', [
      'Khi thuê dài, các khoản cố định như phí giao xe, phụ kiện hay thủ tục được chia đều nên không còn nổi bật. Nhưng với một hai ngày, chúng có thể chiếm phần đáng kể trong tổng chi phí. Vì vậy, đừng chỉ so sánh mức thuê theo ngày mà bỏ qua các khoản chỉ phát sinh một lần ở đầu hoặc cuối chuyến.',
      'Hãy hỏi rõ có phí giao hoặc nhận xe ngoài điểm cho thuê hay không, mũ bảo hiểm và áo mưa là miễn phí hay tính riêng, và có phụ phí cho thời điểm nhận trả ngoài khung giờ làm việc thông thường hay không. Mỗi khoản nhỏ có thể không nhiều nhưng cộng lại sẽ ảnh hưởng đến cảm nhận về mức hợp lý của báo giá.',
      'Một mẹo hữu ích là tính chi phí trên mỗi ngày sử dụng thực tế sau khi đã cộng toàn bộ khoản cố định. Con số này phản ánh trung thực hơn so với mức báo cho một ngày thuê đơn thuần. Khi đặt cạnh nhau những báo giá khác nhau, cách tính này giúp bạn nhận ra lựa chọn nào thật sự phù hợp với kế hoạch ngắn của mình.'
    ]),
    P('Nhiên liệu và công tơ mét: ghi lại ngay lúc nhận xe', [
      'Với thuê ngắn, chính mức nhiên liệu thường là nguồn tranh cãi nhỏ nhưng hay xảy ra. Hãy hỏi chính sách: nhận đầy trả đầy, nhận mức nào trả mức đó, hay tính theo vạch. Dù là cách nào, bạn nên chụp ảnh đồng hồ xăng hoặc mức pin và công tơ mét ngay lúc nhận xe, và yêu cầu ghi vào biên bản bàn giao để làm điểm chuẩn.',
      'Khi trả xe, hãy đổ nhiên liệu ở trạm gần điểm trả nếu cần, giữ lại biên lai làm bằng chứng. Tránh đổ đến mức tràn vì có thể làm bẩn xe và tốn không cần thiết. Nếu thỏa thuận cho phép trả khác mức, hãy hỏi cách quy đổi và ghi lại để hai bên cùng đồng ý trước khi bạn rời đi.',
      'Với xe điện, tương tự, hãy ghi mức pin lúc nhận và hỏi về cách sạc, nơi sạc phù hợp và bộ sạc có đi kèm không. Một chuyến ngắn có thể không cần sạc giữa chừng, nhưng việc biết rõ sẽ giúp bạn không bị lúng túng khi pin xuống thấp. Hãy coi mức nhiên liệu hay pin như một khoản nhỏ cần được đối chiếu, giống tiền thuê.'
    ]),
    P('Trả xe sớm, trễ hoặc ngoài giờ: cách tính phụ trội', [
      'Trong các chuyến ngắn, lịch trình thường sát nên việc trễ vài chục phút là hoàn toàn có thể. Hãy hỏi trước có thời gian ân hạn hay không, và nếu quá thì tính theo giờ hay tính tròn một ngày. Cách tính tròn một ngày có thể làm tổng chi phí tăng đáng kể so với tính theo giờ, vì vậy việc hỏi trước rất quan trọng.',
      'Nếu cần trả xe sớm hơn dự kiến, hãy hỏi xem có được tính lại hay không. Phần lớn nơi cho thuê sẽ không hoàn tiền cho thời gian chưa dùng, nhưng cũng có nơi linh hoạt. Hãy nghe rõ điều kiện và ghi lại thay vì giả định. Điều này đặc biệt cần thiết khi kế hoạch thay đổi vì thời tiết hoặc lịch bay.',
      'Nếu nhận hoặc trả xe ngoài giờ làm việc, hãy hỏi về hình thức giao nhận: gửi chìa khóa ở đâu, ai xác nhận tình trạng xe, và khi nào việc trả được ghi nhận. Chụp ảnh xe khi trả cùng giờ có hiển thị trên điện thoại. Chi tiết này nhỏ nhưng rất hữu ích khi hai bên cần xác định thời điểm kết thúc.'
    ]),
    P('Lập bảng tổng chi phí dự kiến cho chuyến một đến ba ngày', [
      'Trước khi quyết định, hãy dành vài phút lập một bảng tổng đơn giản. Cột thứ nhất ghi các nhóm khoản chi: thuê xe, cọc, nhiên liệu, phụ kiện, giao nhận, bảo hiểm tùy chọn và dự phòng. Cột thứ hai ghi giá trị đã xác nhận bằng văn bản, còn cột thứ ba ghi chú những điều kiện kèm theo. Bảng này giúp bạn nhìn toàn cảnh thay vì từng mảnh.',
      'Hãy thêm một dòng cho khoản dự phòng ngoài kế hoạch như đổ xăng thêm, gửi xe hoặc vá lốp nhẹ. Dòng này không cần chính xác, chỉ để nhắc bạn không dùng hết ngân sách cho tiền thuê mà quên các chi tiêu quanh xe. Người đi ngắn ngày thường lên kế hoạch chặt, nên một chút dự phòng giúp chuyến đi thoải mái hơn.',
      'Khi đã có bảng, hãy so sánh giữa các nơi bằng cùng định dạng. Đừng chọn chỉ vì tổng thấp nhất; hãy xét thêm các ghi chú về điều kiện. Nếu hai lựa chọn gần ngang nhau, nơi có thông tin minh bạch và hỗ trợ rõ ràng thường đáng cân nhắc hơn. Sau cùng, hãy lưu bảng này để đối chiếu lúc thanh toán khi trả xe.'
    ])
  ],
  checklist: [
    'Hỏi cách tính một ngày thuê bằng ví dụ cụ thể về giờ nhận và giờ trả.',
    'Liệt kê các khoản cố định như giao nhận, phụ kiện, phụ phí ngoài giờ.',
    'Chụp mức nhiên liệu hoặc pin và công tơ mét lúc nhận và lúc trả.',
    'Hỏi cách tính khi trả trễ vài chục phút hoặc vài giờ.',
    'Lập bảng tổng chi phí dự kiến có thêm dòng dự phòng.'
  ],
  steps: [
    { title: 'Làm rõ mốc giờ', detail: 'Hỏi bằng ví dụ cụ thể để biết số ngày sẽ bị tính cho giờ nhận trả của bạn.' },
    { title: 'Cộng khoản cố định', detail: 'Tính phí giao nhận, phụ kiện và phụ phí ngoài giờ vào tổng chi phí.' },
    { title: 'Ghi mức nhiên liệu', detail: 'Chụp đồng hồ và công tơ mét khi nhận, đối chiếu lại khi trả.' },
    { title: 'Lập bảng tổng', detail: 'Ghi từng khoản đã xác nhận và thêm khoản dự phòng trước khi quyết định.' }
  ],
  warnings: [
    'Không giả định rằng một ngày luôn bằng hai mươi bốn giờ kể từ lúc nhận xe.',
    'Không bỏ qua các khoản chỉ tính một lần vì chúng ảnh hưởng nhiều khi thuê ít ngày.',
    'Không trả xe trễ mà chưa báo trước và chưa biết cách tính phụ trội.'
  ],
  notes: [
    'Bài viết chỉ mô tả cách tính chung, không nêu mức giá hay điều khoản của đơn vị nào; hãy xác nhận trực tiếp với bên cho thuê.',
    'Cách tính mốc giờ và phụ trội có thể khác nhau giữa các nơi, nên cần hỏi và ghi lại trước khi thuê.'
  ],
  references: [
    'Cổng thông tin điện tử Bộ Công Thương — thông tin bảo vệ quyền lợi người tiêu dùng.',
    'Cục Cảnh sát giao thông — hướng dẫn chung về an toàn khi điều khiển xe máy.',
    'Hướng dẫn sử dụng xe của nhà sản xuất — thông tin về nhiên liệu và nạp pin.'
  ],
  related: ['thue-xe-may-ha-noi', 'kinh-nghiem-thue-xe-may-ha-noi', 'giay-to-thue-xe']
};
