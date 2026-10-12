// AI WIKI TOTAL — S00522; informational-only; không nêu tên bãi, địa chỉ, giá gửi xe hay quy định thời sự cụ thể.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'bai-do-xe',
  title: 'Bãi đỗ xe — những điều cần biết',
  seoTitle: 'Bãi đỗ xe: cách chọn, vào gửi và giữ xe an toàn',
  metaDescription: 'Những điều cần biết về bãi đỗ xe: các loại bãi, cách chọn nơi gửi, quan sát biển báo và vé, giữ đồ có giá trị, khóa xe, kiểm tra khi nhận lại và xử lý khi xe bị mất hoặc hư hại.',
  summary: 'Bài viết giải thích cách chọn và sử dụng bãi đỗ xe an toàn: phân biệt các loại bãi, quan sát biển báo, vé và quy trình gửi, cách khóa xe và giữ đồ có giá trị, kiểm tra khi nhận lại xe và việc cần làm nếu xe bị hư hại hoặc thất lạc.',
  quickAnswer: 'Hãy chọn bãi đỗ xe có biển hiệu, người trông coi và quy trình vé rõ ràng, khóa xe cẩn thận, không để đồ giá trị trên xe và chụp ảnh xe khi gửi. Khi nhận xe, kiểm tra xe và vé trước khi rời đi; nếu có hư hại hoặc thất lạc, báo ngay cho người quản lý.',
  keyPoints: [
    'Ưu tiên bãi có biển hiệu, người trông coi và hệ thống vé rõ ràng.',
    'Đọc thông tin về giờ mở cửa, cách tính phí và trách nhiệm của bãi trước khi gửi.',
    'Khóa xe, rút chìa và không để đồ giá trị hoặc giấy tờ trên xe.',
    'Giữ vé cẩn thận và chụp ảnh tình trạng xe khi gửi.',
    'Kiểm tra xe khi nhận lại và báo ngay nếu có vấn đề.'
  ],
  category: 'map',
  hub: 'bai-do-xe',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['bãi đỗ xe', 'gửi xe', 'vé xe', 'an toàn tài sản'],
  keywords: ['bãi đỗ xe', 'gửi xe máy an toàn', 'chọn nơi gửi xe', 'vé gửi xe'],
  sections: [
    P('Các loại bãi đỗ xe thường gặp', [
      'Bãi đỗ xe có nhiều hình thức, mỗi loại có ưu điểm và hạn chế riêng. Bãi trông giữ xe chính thức thường có biển hiệu, giờ mở cửa, vé và người quản lý rõ ràng. Bãi trong tòa nhà hoặc trung tâm thương mại thường có hệ thống kiểm soát ra vào, camera và quy trình rõ ràng. Một số nơi có khu vực gửi xe máy riêng, tách biệt với ô tô.',
      'Bên cạnh đó có những điểm gửi xe nhỏ lẻ ven đường, cổng nhà dân hoặc cửa hàng. Chúng tiện lợi nhưng mức độ rõ ràng và an toàn có thể khác nhau. Bạn nên quan sát kỹ trước khi gửi: có biển hiệu và người trông xe không, có vé hoặc dấu hiệu nhận biết không, xe được sắp xếp thế nào và nơi này có hợp lệ về mặt đỗ xe hay không.',
      'Ngoài ra còn có đỗ xe tại lòng đường hoặc vỉa hè ở những nơi cho phép và có biển báo. Hình thức này cần tuân thủ quy định về vị trí, thời gian và phí nếu có. Không tự ý đỗ ở nơi có biển cấm, trước cổng cơ quan, đường dành cho người đi bộ hoặc cạnh vạch cấm, kể cả khi thấy người khác đã đỗ.'
    ]),
    P('Cách chọn bãi đỗ phù hợp', [
      'Khi chọn bãi, hãy xem xét vị trí, mức độ an toàn và sự thuận tiện. Bãi gần điểm đến giúp tiết kiệm thời gian đi bộ, nhưng không nên đánh đổi sự an toàn chỉ vì tiện. Ưu tiên bãi có mái che, có chiếu sáng vào buổi tối và có người trông coi trong suốt thời gian gửi. Nếu để xe qua đêm, hãy kiểm tra giờ mở cửa và cách xử lý khi cần lấy xe sớm.',
      'Đọc kỹ thông tin ghi trên biển hoặc mặt sau vé: giờ mở cửa, hình thức tính phí, quy định về mất vé và trách nhiệm của bãi. Cách tính phí có thể theo lượt, theo giờ hoặc theo ngày; hãy hỏi trước nếu chưa rõ. Tránh những nơi không niêm yết thông tin gì hoặc từ chối cho xem điều kiện giữ xe, vì khi xảy ra vấn đề rất khó đối chiếu.',
      'Với chuyến đi dài, nên xem trước các bãi đỗ gần điểm lưu trú hoặc điểm tham quan thông qua bản đồ và đánh giá gần đây. Đối chiếu với thông tin từ người địa phương, nhân viên khách sạn hoặc nhân viên cửa hàng. Nếu đi nhóm, nên đỗ xe gần nhau để dễ quan sát và thống nhất cách sắp xếp, tránh gây cản trở lối đi.'
    ]),
    P('Quy trình gửi xe và giữ tài sản', [
      'Khi vào gửi, dừng xe đúng vị trí, tắt máy và làm theo hướng dẫn của người trông xe. Nhận vé và kiểm tra thông tin trên vé có khớp với xe không. Chụp nhanh ảnh xe, biển số và tình trạng bên ngoài, đặc biệt các vết xước sẵn có. Ảnh này hữu ích khi cần đối chiếu nếu xe bị hư hại sau đó.',
      'Khóa xe cẩn thận bằng khóa cổ, rút chìa và mang theo bên người. Nếu xe có khóa phụ như khóa đĩa hoặc khóa chống trộm, hãy dùng thêm. Không để giấy tờ xe, ví tiền, điện thoại, mũ bảo hiểm có giá trị hoặc đồ cá nhân trong cốp, giỏ hay trên xe. Nếu bắt buộc để mũ ở xe, hãy dùng khóa mũ hoặc gửi theo chỉ dẫn của bãi.',
      'Giữ vé ở nơi an toàn, nên chụp lại ảnh vé phòng khi mất. Ghi nhớ khu vực đỗ nếu bãi lớn, chụp ảnh số khu vực hoặc cột số. Nếu gửi lâu, hãy hỏi giờ đóng cửa và quy định gia hạn. Khi cần lấy xe ngoài giờ, liên hệ người quản lý trước chứ không để đến lúc bãi đóng mới biết.'
    ]),
    P('Nhận lại xe và kiểm tra', [
      'Khi nhận lại xe, đưa vé và trả phí đúng quy định, đồng thời yêu cầu biên nhận nếu có. Trước khi rời đi, kiểm tra nhanh xe: biển số, gương, đèn, yên, cốp, chân chống và phần thân xe có xước mới hay thay đổi bất thường không. Nếu phát hiện vấn đề, báo ngay tại chỗ chứ không nên đợi đến khi đã rời đi vì sẽ khó chứng minh.',
      'Nếu mất vé, hãy bình tĩnh và nói rõ với người quản lý. Chuẩn bị giấy tờ xe, chứng minh bạn là chủ xe, và ảnh vé hoặc ảnh xe lúc gửi nếu có. Mỗi bãi có quy trình xử lý mất vé riêng; làm theo hướng dẫn và giữ thái độ hợp tác. Không tranh cãi to tiếng, vì mọi việc sẽ nhanh hơn khi cả hai bên giữ bình tĩnh.',
      'Nếu xe bị mất, hư hại hoặc có tài sản bị mất, hãy yêu cầu lập biên bản, xin xem camera nếu có, chụp ảnh hiện trường và liên hệ cơ quan chức năng theo quy định. Giữ lại vé, biên nhận và mọi chứng từ liên quan. Việc xác định trách nhiệm dựa trên điều kiện gửi và quy định pháp luật; khi cần, hãy tìm tư vấn từ nguồn đáng tin cậy.'
    ]),
    P('Thói quen giúp tiết kiệm thời gian và hạn chế rủi ro', [
      'Một thói quen hữu ích là xác định điểm đỗ trước khi tới nơi: xem bản đồ, chọn bãi chính thức gần điểm đến và có phương án dự phòng nếu bãi đã đầy. Đến sớm hơn vào những giờ cao điểm hoặc dịp lễ để có chỗ tốt. Nếu phải đỗ ở xa, đi bộ thêm một đoạn thường an toàn và rẻ hơn so với việc đỗ sai quy định.',
      'Không để xe ở nơi có nguy cơ ngập khi trời mưa to, nơi có cành cây dễ gãy hoặc dưới biển quảng cáo cũ. Hãy chú ý tránh cản trở lối đi, cổng ra vào hoặc xe cứu hỏa. Khi đỗ trong tầng hầm, ghi nhớ lối thoát hiểm và hạn chế tiếp xúc với khu vực có biển cảnh báo.',
      'Cuối cùng, hãy luôn có thói quen kiểm tra xe và đồ đạc trước khi rời đi. Thái độ ân cần với người trông xe giúp quan hệ thuận lợi và mọi vấn đề được giải quyết nhẹ nhàng. Một chút cẩn trọng khi chọn bãi và gửi xe sẽ bảo vệ tài sản của bạn và giúp chuyến đi diễn ra yên tâm hơn.'
    ])
  ],
  checklist: [
    'Chọn bãi có biển hiệu, người trông coi và vé rõ ràng.',
    'Đọc thông tin giờ mở cửa, cách tính phí và điều kiện giữ xe trước khi gửi.',
    'Khóa xe, rút chìa và không để đồ giá trị hoặc giấy tờ trên xe.',
    'Chụp ảnh xe, biển số và vé khi gửi.',
    'Kiểm tra xe và báo ngay nếu có vấn đề khi nhận lại.'
  ],
  steps: [
    { title: 'Chọn bãi phù hợp', detail: 'Xem vị trí, mức độ an toàn, giờ mở cửa và cách tính phí.' },
    { title: 'Gửi xe đúng quy trình', detail: 'Dừng đúng chỗ, nhận vé, chụp ảnh và khóa xe cẩn thận.' },
    { title: 'Giữ tài sản và vé', detail: 'Mang theo chìa, đồ có giá trị và giữ vé ở nơi an toàn.' },
    { title: 'Nhận lại và kiểm tra', detail: 'Xem tình trạng xe trước khi rời đi và báo ngay khi có bất thường.' }
  ],
  warnings: [
    'Không đỗ xe ở nơi có biển cấm hoặc cản trở lối đi, cổng ra vào.',
    'Không để giấy tờ xe, ví tiền hoặc đồ có giá trị trong cốp hay trên xe.',
    'Không rời bãi khi chưa kiểm tra tình trạng xe nếu thấy dấu hiệu bất thường.'
  ],
  notes: [
    'Bài viết không nêu tên bãi, địa chỉ hay giá gửi xe cụ thể.',
    'Quy định về trông giữ xe có thể khác nhau theo địa phương; hãy tham khảo nguồn chính thức.'
  ],
  references: [
    'Cổng thông tin điện tử của địa phương — thông tin về điểm trông giữ xe.',
    'Cục Cảnh sát giao thông — thông tin về quy tắc dừng, đỗ xe.',
    'Quy định bảo vệ quyền lợi người tiêu dùng của cơ quan quản lý.'
  ],
  related: ['giu-xe-may', 'do-xe-o-dau', 'di-xe-o-sai-gon']
};
