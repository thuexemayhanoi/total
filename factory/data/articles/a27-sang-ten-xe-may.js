// AI WIKI TOTAL — bài mở rộng cụm /guide/thu-tuc-xe/: sang tên xe máy quy trình và giấy tờ (slot S00027)
'use strict';

module.exports = {
  slug: 'sang-ten-xe-may-quy-trinh-va-giay-to',
  title: 'Sang tên xe máy: quy trình và giấy tờ',
  seoTitle: 'Sang tên xe máy: quy trình và giấy tờ cần chuẩn bị',
  metaDescription: 'Sang tên xe máy: giấy tờ bên bán và bên mua cần chuẩn bị, trình tự công chứng - khai báo - cấp đăng ký, lệ phí theo quy định và những lỗi khiến hồ sơ bị trả lại.',
  summary: 'Mua xe máy cũ là giao dịch bằng tiền, nhưng quyền sở hữu thật sự chỉ chuyển tay khi giấy tờ sang tên xong — xe chưa sang tên thì người mua vẫn đang "mượn" chiếc xe theo mắt pháp luật, và người bán vẫn ôm trách nhiệm pháp lý cho một chiếc xe không còn trong tay mình. Bài viết này đi trọn quy trình sang tên xe máy theo trình tự thực tế: giấy tờ cần chuẩn bị cho hai bên, các bước công chứng - khai báo - nộp hồ sơ - nhận đăng ký mới, các khoản lệ phí theo quy định hiện hành, và những lỗi khiến hồ sơ bị trả lại — vì phần lớn thời gian mất trong quy trình này không phải do luật chậm, mà do hồ sơ đến nơi đã thiếu một tờ.',
  quickAnswer: 'Sang tên xe máy gồm ba chặng chính: công chứng hợp đồng mua bán (hoặc giấy tờ chuyển nhượng hợp pháp khác), bên bán khai báo chuyển quyền sở hữu với cơ quan công an nơi quản lý xe, và bên mua nộp hồ sơ xin cấp lại đăng ký xe kèm lệ phí theo quy định. Chuẩn bị trước: giấy đăng ký xe, giấy tờ chứng nhận nguồn gốc xe, chứng minh nhân dân hoặc căn cước của cả hai bên; kiểm tra tên trên đăng ký khớp người bán thật, và đừng giao tiền hết trước khi giấy tờ của bên bán được xác minh đủ.',
  keyPoints: [
    'Chưa sang tên là chưa xong giao dịch: người mua không có giấy tờ pháp lý khi bị kiểm tra, người bán vẫn chịu trách nhiệm với phương tiện mang biển số của mình — thiệt hại rơi về cả hai phía.',
    'Bộ hồ sơ gốc quan trọng nhất: giấy đăng ký xe và giấy tờ nguồn gốc xe — thiếu một trong hai thì hồ sơ xin cấp đăng ký gần như chắc chắn bị trả lại.',
    'Tên trên đăng ký phải khớp người bán thật: chủ cũ mất CCCD/còn giấy tờ cũ, hoặc xe qua nhiều tay chưa sang tên kịp là hai nhóm rắc rối phổ biến nhất cần xử trước khi công chứng.',
    'Kê khai lệ phí theo quy định hiện hành (lệ phí trước bạ và lệ phí cấp biển - đăng ký) — mang đủ tiền theo thông báo và giữ hóa đơn làm bằng chứng pháp lý.',
    'Mốc 30 ngày là khung thời gian phổ biến để bên bán khai báo và bên mua làm thủ tục sau công chứng — chậm trễ kéo dài rủi ro và phiền phức về sau cho cả hai bên.',
    'Bảo hiểm trách nhiệm dân sự của xe không tự chuyển theo chủ mới — xe sang tên xong cần mua lại bảo hiểm mang tên mình trước khi lưu thông.',
  ],
  category: 'guide',
  hub: 'thu-tuc-xe',
  date: '2026-09-30',
  updated: '2026-09-30',
  entities: ['sang tên xe máy', 'công chứng', 'giấy đăng ký xe', 'lệ phí trước bạ', 'chuyển quyền sở hữu', 'đăng ký xe'],
  keywords: ['sang tên xe máy', 'thủ tục sang tên xe', 'giấy tờ sang tên xe máy', 'công chứng mua bán xe', 'lệ phí sang tên xe', 'mua xe cũ sang tên', 'đăng ký xe máy sang tên'],
  sections: [
    {
      h2: 'Vì sao sang tên là việc không được trì hoãn',
      html: `<p>Giao dịch kiểu "bằng tay" thường hiểu là mua xe giao tiền, cầm đăng ký, hai bên viết giấy tay rồi coi như xong. Pháp luật không công nhận cách này như một giao dịch hoàn chỉnh: giấy đăng ký xe ghi tên ai thì người đó là chủ đăng ký; giấy viết tay có giá trị làm chứng về việc trao đổi tiền, nhưng không thay đổi chủ sở hữu trong sổ đăng ký xe của cơ quan chức năng.</p>
<p>Rủi ro của người mua trong kịch bản chưa sang tên: khi bị kiểm tra giấy tờ, xe mang đăng ký tên người khác là tình huống giải thích dai dẳng; xe bị cưỡng chế, tạm giữ vì lý do thuộc về chủ cũ (nợ thuế, tranh chấp, vi phạm chưa xử lý) thì người giữ xe là người thiệt trực tiếp; và khi đến lượt mình muốn bán tiếp, hồ sơ không thể làm vì mình chưa bao giờ là chủ đăng ký chính thức — chuỗi "bán tay tư tay năm" hình thành từ chính những lần trì hoãn kiểu này.</p>
<p>Rủi ro của người bán thì ít ai nói tới nhưng không nhỏ: chiếc xe mang biển số và tên mình mà người khác điều khiển gây tai nạn, vi phạm nghiêm trọng, hoặc dính vào việc không hay — cơ quan chức năng lần theo đăng ký tới người bán trước tiên. Bên bán làm trọn nghĩa vụ khai báo chuyển quyền sở hữu và đốc người mua làm trọn thủ tục là tự bảo vệ mình, không phải làm phúc cho người mua.</p>
<p>Nhìn cho đúng bản chất: sang tên không phải thủ tục hành chính hình thức — đó là mốc kết thúc giao dịch. Giao tiền mới là giữa đường; xe về tay người mua và đăng ký ghi đúng tên người mua thì hợp đồng mua bán mới đóng lại được. Kế hoạch mua xe nên tính chi phí và thời gian của phần sang tên ngay từ đầu, như cách tính tiền đăng ký hay tiền mua mũ bảo hiểm cho chiếc xe.</p>`,
    },
    {
      h2: 'Giấy tờ cần chuẩn bị: hai bên, hai danh mục',
      html: `<p>Danh mục bên bán — người hiện đứng tên đăng ký: giấy đăng ký xe bản gốc; chứng minh nhân dân hoặc căn cước công dân còn hiệu lực; và giấy tờ chứng minh nguồn gốc xe (chứng nhận kiểm định hoặc tờ khai nguồn gốc xe theo quy định áp dụng cho xe của mình). Ba món này là trục của cả hồ sơ — thiếu món nào thì chỗ công chứng và cơ quan đăng ký đều dừng lại ở món đó.</p>
<p>Danh mục bên mua: chứng minh nhân dân hoặc căn cước công dân còn hiệu lực; giấy xác nhận thường trú hoặc sổ hộ khẩu nơi mình đăng ký thường trú (nơi xin cấp đăng ký xe sẽ gắn với địa chỉ này); và khi nộp hồ sơ — tờ khai xin cấp đăng ký theo mẫu tại nơi tiếp nhận. Người mua nên chuẩn bị sẵn các bản sao kèm bản chính để đối chiếu tại chỗ.</p>
      <p>Kiểm tra khớp nhau trước khi đi công chứng — ba phép soi quan trọng nhất: tên trên đăng ký khớp với giấy tờ tùy thân của người bán thật (khớp cả họ tên lẫn số định danh); xe đang kiểm tra thực tế khớp số khung số máy ghi trong đăng ký; và người đứng tên đăng ký có mặt thật trong giao dịch (chính chủ ký, hoặc có ủy quyền hợp pháp theo đúng quy định — không nhận "em ruột đứng tên thay" không có giấy tờ ủy quyền).</p>
<p>Nhóm hồ sơ có vấn đề cần xử trước: đăng ký ghi tên người đã mất hoặc không liên lạc được; xe mua tay ba bốn chưa từng sang tên; đăng ký cũ dạng bản giấy không có dữ liệu điện tử. Ba nhóm này không phải bế tắc, nhưng cần trình tự riêng (khai báo với cơ quan công an nơi quản lý xe, xác minh nguồn gốc) và thời gian dài hơn hẳn — người mua nên biết điều này trước khi cọc, đừng phát hiện sau khi giao tiền.</p>`,
    },
    {
      h2: 'Ba chặng của quy trình: công chứng - khai báo - cấp đăng ký',
      html: `<p>Chặng một — công chứng hợp đồng mua bán: hai bên mang hồ sơ gốc tới tổ chức công chứng (văn phòng công chứng hoặc các điểm tiếp nhận theo địa phương), lập hợp đồng chuyển quyền sở hữu xe, ký trước công chứng viên. Hợp đồng cần ghi rõ thông tin xe (biển số, số khung, số máy), giá trị giao dịch, thông tin hai bên. Công chứng là bước niêm phong pháp lý cho sự đồng ý của hai bên — và cũng là lúc mọi thông tin lệch nhau (tên, số định danh, số khung) bị soi ra, nên mang theo xe để đối chiếu dễ hơn.</p>
<p>Chặng hai — bên bán khai báo chuyển quyền sở hữu: sau khi hợp đồng công chứng xong, bên bán thực hiện việc khai báo với cơ quan công an nơi quản lý hồ sơ xe theo thời hạn quy định. Đây là bước người bán thường bỏ quên — coi như giao xong là hết việc — và cũng là bước tách trách nhiệm pháp lý của bên bán khỏi chiếc xe từ thời điểm chuyển giao. Kiểm soát bằng văn bản: giữ bản sao hợp đồng công chứng có ghi ngày, hai bên cùng lưu.</p>
<p>Chặng ba — bên mua nộp hồ sơ xin cấp đăng ký xe: mang hợp đồng công chứng, giấy tờ tùy thân và hồ sơ nguồn gốc tới cơ quan đăng ký xe có thẩm quyền theo nơi cư trú, nộp lệ phí theo quy định, nhận giấy hẹn và sau đó nhận đăng ký xe mới (và biển số mới nếu thuộc trường hợp đổi biển theo quy định). Khoảng thời gian từ lúc nộp tới lúc nhận được thông báo hẹn cụ thể từng nơi tiếp nhận — hỏi rõ lúc nộp để biết khi nào quay lại.</p>
<p>Trình tự ba chặng có lý do của nó: công chứng chứng minh hai bên đồng ý; khai báo tách xe khỏi trách nhiệm chủ cũ; cấp đăng ký gắn xe vào trách nhiệm chủ mới. Người mua nắm trình tự này sẽ hiểu vì sao không thể nhảy bước — nộp hồ sơ xin đăng ký mà chưa có hợp đồng công chứng, hoặc công chứng xong mà bên bán không khai báo, đều là hồ sơ treo.</p>`,
    },
    {
      h2: 'Chi phí: các khoản theo quy định và cách tránh bị "phát sinh"',
      html: `<p>Ba nhóm chi phí chính thức của một lần sang tên. Nhóm một — lệ phí trước bạ: tính theo giá trị xe và tỷ lệ quy định hiện hành cho loại xe tương ứng, nộp khi làm thủ tục khai trước bạ. Nhóm hai — lệ phí đăng ký, cấp biển số (khi thuộc trường hợp cấp đổi): mức theo quy định cho từng loại đăng ký và biển. Nhóm ba — phí công chứng hợp đồng: tính theo giá trị hợp đồng theo bảng phí của tổ chức công chứng. Ba nhóm đều là các khoản có quy định — hỏi bảng phí tại chỗ tiếp nhận, không nhận báo giá không kèm căn cứ quy định.</p>
<p>Cách chuẩn bị tiền đúng: trước ngày đi làm thủ tục, tra mức lệ phí hiện hành cho loại xe của mình theo địa phương (mức quy định có thể thay đổi theo văn bản mới — dùng thông tin mới nhất tại thời điểm làm, đừng bám theo con số cũ ai đó kể). Mang theo một chút dư cho nhóm khoản nhỏ như phí chụp ảnh hồ sơ, photo chứng thực — để không bị kẹt vì thiếu tờ mười nghìn.</p>
<p>Chi phí có thể tránh — phát sinh từ việc làm lại: hồ sơ thiếu tờ phải đi lại nhiều lần (tốn cả ngày công lẫn chi phí đi lại); hợp đồng công chứng viết sai số định danh phải lập lại; xe không khớp số khung phải làm thủ tục xác minh. Tất cả đều là tiền của sự chưa chuẩn bị — và đều tránh được bằng một buổi kiểm tra hồ sơ tại bàn trước ngày đi.</p>
<p>Một khoản nữa người mua hay quên tính vào giá xe: sau sang tên, mua lại bảo hiểm trách nhiệm dân sự bắt buộc mang tên chủ mới — bảo hiểm của chủ cũ không theo xe sang tay. Khoản này nhỏ nhưng mang tính bắt buộc khi lưu thông, và việc không có nó là lỗi bị xử phạt — tính vào checklist cuối buổi nhận đăng ký, đừng để nó thành việc bỏ lửng.</p>`,
    },
    {
      h2: 'Những lỗi khiến hồ sơ bị trả lại',
      html: `<p>Lỗi số một, chiếm phần lớn các chuyến đi lại: giấy tờ không khớp — số định danh trên đăng ký khác CCCD hiện tại (người đổi từ CMND cũ sang chưa cập nhật đăng ký), tên trên hợp đồng gõ sai dấu hoặc thiếu, số khung đọc nhầm một ký tự. Tránh bằng phép kiểm tại bàn trước ngày đi: đặt giấy tờ cạnh nhau, đối từng dòng — năm phút này tiết kiệm một ngày làm lại.</p>
<p>Lỗi số hai: thiếu giấy tờ nguồn gốc. Nhiều người coi giấy đăng ký là đủ — nhưng hồ sơ xin cấp đăng ký cho xe đã qua sử dụng đòi hỏi chứng từ nguồn gốc; mất chứng từ này thì phải làm thủ tục xác minh lại nguồn gốc xe, một quy trình riêng với thời gian không ngắn. Nếu bên bán không tỏ ra được giấy tờ nguồn gốc ngay từ lúc xem xe — đó là cờ đỏ đáng để dừng và hỏi kỹ trước khi cọc.</p>
<p>Lỗi số ba: bên bán vắng mặt hoặc ủy quyền không đúng quy định. Giao dịch qua "người nhà đứng ra bán" mà không có giấy ủy quyền công chứng hợp lệ là hồ sơ trả lại chắc chắn. Nếu người bán không đến công chứng được vì lý do chính đáng — làm ủy quyền đúng luật trước, đừng dùng "giấy viết tay có dấu" kiểu xưa.</p>
<p>Lỗi số bốn: chủ cũ chưa làm nghĩa vụ khai báo, hoặc xe còn "dính" nghĩa vụ cũ — vi phạm giao thông chưa xử lý nốt, phí chưa tất toán — khiến hồ sơ bên mua bị giữ. Cách phòng: trước khi cọc, nhờ bên bán thực hiện kiểm tra tình trạng nghĩa vụ của xe với cơ quan chức năng, và làm phần nghĩa vụ của mình (khai báo) ngay sau công chứng — phần giữ quyền lợi của cả hai người, không chỉ của người mua.</p>`,
    },
    {
      h2: 'Sau khi nhận đăng ký mới: checklist đóng hồ sơ',
      html: `<p>Ngày nhận đăng ký xe mới, kiểm tra tại chỗ ba dòng: họ tên và số định danh của mình ghi đúng chưa; thông tin xe (số khung, số máy, biển số) khớp thực tế chưa; và địa chỉ đăng ký đúng nơi cư trú hiện tại của mình chưa. Lỗi đánh máy phát hiện tại quầy sửa trong vài phút; phát hiện sau một tuần thì trở thành một chuyến đi lại với đầy đủ hồ sơ.</p>
<p>Bộ hồ sơ cá nhân lưu nhà sau khi xong: bản sao hợp đồng công chứng, biên lai các khoản lệ phí, giấy hẹn (đã hoàn thành), và bản sao đăng ký mới. Về nguyên tắc, bản gốc đăng ký mang theo khi lái xe; bộ bản sao lưu nhà là bản dự phòng cho mọi tình huống mất giấy — và là chứng cứ nhanh nhất khi cần chứng minh lịch sử sở hữu.</p>
<p>Việc kế tiếp trong tuần: mua bảo hiểm trách nhiệm dân sự bắt buộc cho chủ mới (đã nói ở phần chi phí); cập nhật xe vào các thứ gắn chủ xe khác nếu có — thẻ gửi xe ở chung cư, giấy đỗ xe nơi làm việc; và nếu xe có gắn thiết bị định vị - khóa từ của chủ cũ, nhờ hỗ trợ chuyển tài khoản ứng dụng quản lý nếu còn dùng được.</p>
<p>Phần ký gửi cho người bán trong giai đoạn cuối: giữ bản sao hợp đồng công chứng và bản sao khai báo chuyển quyền sở hữu đã nộp — hai tờ giấy này là bằng chứng phân tách trách nhiệm pháp lý của mình kể từ ngày giao dịch. Người bán chu đáo tự làm trọn việc này không phải vì làm phúc, mà vì hai tờ giấy đó cũng bảo vệ chính mình sau này.</p>`,
    },
  ],
  checklist: [
    'Trước khi cọc: soi giấy đăng ký gốc với CCCD người bán (khớp họ tên và số định danh), đối chiếu số khung - số máy với xe thực tế, và đòi xem giấy tờ nguồn gốc xe.',
    'Chuẩn bị hai danh mục song song: bên bán (đăng ký gốc, CCCD, nguồn gốc xe), bên mua (CCCD, giấy tờ thường trú) — kèm bản sao dự phòng.',
    'Làm đúng trình tự: công chứng hợp đồng trước, bên bán khai báo chuyển quyền sở hữu đúng thời hạn, rồi bên mua mới nộp hồ sơ xin cấp đăng ký.',
    'Tra mức lệ phí hiện hành (trước bạ, đăng ký, công chứng) ngay trước ngày đi làm thủ tục — mang đủ tiền và giữ mọi biên lai.',
    'Từ chối các kiểu "bán hộ không ủy quyền" hoặc giao dịch với người không khớp tên đăng ký — hồ sơ ủy quyền phải đúng luật từ đầu.',
    'Sau khi nhận đăng ký mới: kiểm tra ba dòng thông tin tại quầy, lưu bộ bản sao hồ sơ ở nhà, và mua lại bảo hiểm trách nhiệm dân sự mang tên chủ mới trong tuần.',
  ],
  warnings: [
    'Không nhận giao dịch "bằng tay" chỉ cầm đăng ký kèm giấy viết tay — quyền sở hữu chưa chuyển trong sổ đăng ký, rủi ro pháp lý đè lên cả người mua lẫn người bán.',
    'Không giao phần lớn tiền trước khi xác minh xong bộ hồ sơ gốc của bên bán — thiếu giấy tờ nguồn gốc là hồ sơ trả lại và bắt đầu một chuỗi xác minh dài ngày.',
    'Không để bên bán bỏ bước khai báo chuyển quyền sở hữu — xe dính nghĩa vụ của chủ cũ (vi phạm, tranh chấp) sẽ kéo người bán vào chuyện, và người mua vào phiền phức.',
    'Không trì hoãn phần thủ tục của người mua sau công chứng — thời hạn khai báo và nộp hồ sơ theo quy định, chậm trễ kéo dài là tự giữ rủi ro cho cả hai bên.',
  ],
  notes: [
    'Bài viết mang tính kiến thức chung về quy trình sang tên xe máy tại Việt Nam, không thay thế hướng dẫn chính thức; mức lệ phí, thời hạn và thẩm quyền tiếp nhận thay đổi theo văn bản pháp luật — đối chiếu quy định hiện hành tại thời điểm làm thủ tục.',
    'Trường hợp đặc biệt (chủ cũ mất liên lạc, xe qua nhiều tay, hồ sơ cũ dạng giấy) có trình tự riêng theo quy định; nên liên hệ trực tiếp cơ quan đăng ký xe có thẩm quyền để được hướng dẫn cho tình huống cụ thể.',
  ],
  references: [
    'Luật Giao thông đường bộ và các văn bản quy định về đăng ký, đăng ký xe cơ giới đường bộ — điều kiện và trình tự cấp đổi đăng ký xe.',
    'Các quy định về lệ phí trước bạ và lệ phí đăng ký, cấp biển số xe máy hiện hành — căn cứ tính các khoản khi làm thủ tục.',
    'Nghị định về xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ — trách nhiệm khi điều khiển xe chưa chuyển quyền sở hữu và không có bảo hiểm bắt buộc.',
  ],
  related: ['cach-doc-gia-xe-may-moi', 'thu-tuc-thue-xe-dieu-can-biet', 'chay-ra-xe-may-dung-cach'],
};
