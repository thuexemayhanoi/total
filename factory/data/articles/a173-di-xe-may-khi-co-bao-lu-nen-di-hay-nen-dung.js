// AI WIKI TOTAL — bài mở rộng cụm /ride/an-toan-giao-thong/: đi xe máy khi có báo lũ, nên đi hay nên dừng (slot S00173)
'use strict';

module.exports = {
  slug: 'di-xe-may-khi-co-bao-lu-nen-di-hay-nen-dung',
  title: 'Đi xe máy khi có báo lũ: nên đi hay nên dừng',
  seoTitle: 'Đi xe máy khi có báo lũ: đi hay nên dừng',
  metaDescription: 'Báo lũ là lúc mọi quyết định đi xe máy đều đắt: nước dâng, dòng chảy, đường sập ẩn. Bài viết chỉ cách đọc tin, chọn phương án và chuẩn bị nếu buộc phải di chuyển.',
  summary: 'Mùa lũ ở nhiều tỉnh miền núi và đồng bằng đưa người đi xe máy vào những tình huống mà không có kỹ thuật lái nào gánh được: nước dâng nhanh hơn mọi dự đoán, dòng chảy tràn qua mặt đường đẩy cả người lẫn xe, đoạn đắp mới sạt lở không báo trước, và cú quyết định sai giữa hai lựa chọn — cố về hay chịu dừng — nhiều khi là khác biệt giữa về nhà và cho tìm thấy xe ở hạ nguồn. Bài viết này không dạy cách vượt lũ — nó dạy cách quyết định, vì trong tình huống lũ, phần lớn các tai nạn và mất tích bắt đầu từ một quyết định di chuyển không đủ căn cứ. Cấu trúc: phần đọc thông tin — hiểu các mức cảnh báo lũ, nguồn tin chính thống, và dấu hiệu tự quan sát trên đường: màu nước, tốc độ dâng, rác trôi; phần quyết định — khung ba câu hỏi trước khi lăn bánh: tuyến có qua sông suối, cầu ngầm không; nước đã tràn mặt đường đoạn nào chưa; mình có phải di chuyển thật sự không; phần nếu buộc phải đi — chuẩn bị xe, giấy tờ bị nước, tư trang gói kín, giờ đi và giờ không đi, quy tắc quay đầu tuyệt đối; phần nếu quyết định dừng — trú ở đâu, trú thế nào, khi nào mới tiếp tục; và phần sau lũ — đoạn đường nhìn ráo mà nguy hiểm nhất: sạt lở ẩn, cầu ngầm cuốn, vét cống mất nắp. Thông điệp xuyên suốt: với lũ, người lái giỏi nhất không phải người qua được nước sâu nhất — là người biết mình không nên qua.',
  quickAnswer: 'Trả lời ngắn: khi có báo lũ, nguyên tắc đầu là tin thông tin chính thống về mức cảnh báo của tuyến, và nguyên tắc hai là tự quan sát tại chỗ: nước đục cuồn cuộn chảy qua mặt đường, rác trôi dày, mực nước dâng lên từng phút — bất kỳ dấu hiệu nào xuất hiện thì dừng, không quyết định đi bằng hy vọng. Khung ba câu trước khi lăn bánh: một, tuyến của mình có qua cầu ngầm, qua suối tràn, qua đê không; hai, mực nước hiện tại ở đoạn trũng thấp nhất của tuyến là bao nhiêu; ba, việc đi hôm nay có thật sự không thể hoãn không — ba câu mà có một câu trả lời xấu thì chọn phương án khác: đường vòng cao, chờ nước rút, hoặc hoãn. Nếu buộc phải đi: đi lúc nước đứng chứ không lúc nước đang dâng, gói giấy tờ điện thoại trong túi kín, mặc áo mưa kín, đội mũ bảo hiểm chắc quai, không bao giờ đi sau khi trời tối giữa lũ. Trên đường gặp nước tràn mặt đường mà không thấy rõ mặt đường dưới nước — quay đầu, không thử: đoạn cuốn cầu ngầm và cống mất nắp không phân biệt xe máy với người. Nếu kẹt giữa chặng, trú cao, báo vị trí cho người thân, và coi việc tới muộn là chi phí rẻ nhất của mùa lũ.',
  keyPoints: [
    'Báo lũ có mức và có tuyến: quyết định đi phải dựa trên cảnh báo chính thống cho đúng tuyến, cộng quan sát tại chỗ — mực nước và tốc độ dâng là căn cứ cuối cùng.',
    'Nước tràn mặt đường mà không thấy rõ mặt đường bên dưới là điểm quay đầu tuyệt đối — cầu ngầm cuốn và cống mất náp không phân biệt xe máy với người.',
    'Nước đục chảy ngang qua đường có lực đẩy thật: hai mươi cen-ti-mét dòng chảy mạnh đủ quăng ngã một chiếc xe máy — đừng đo độ sâu bằng mắt, đo bằng dòng chảy.',
    'Nếu buộc phải di chuyển giữa lũ: đi lúc nước đứng, gói kín giấy tờ và điện thoại, tránh đoạn trũng và cầu ngầm, tuyệt đối không đi ban đêm.',
    'Quyết định dừng trú là một lựa chọn an toàn, không phải thua cuộc: trú cao, báo vị trí, chờ nước rút — tới muộn là chi phí rẻ nhất của mùa lũ.',
    'Sau lũ, đường ráo chưa chắc đã an toàn: sạt lở ẩn trên vai đường, đoạn đắp mới rỗng ruột, cống vét mất nắp — đoạn ráo nước cần đi chậm như đoạn ướt.',
  ],
  category: 'ride',
  hub: 'an-toan-giao-thong',
  date: '2026-10-01',
  updated: '2026-10-01',
  entities: ['báo lũ', 'nước tràn đường', 'cầu ngầm', 'dòng chảy', 'sạt lở', 'trú tránh'],
  keywords: ['đi xe máy mùa lũ', 'báo lũ đi xe máy', 'nước tràn mặt đường', 'cầu ngầm nước dâng', 'xe máy qua đường ngập', 'trú tránh khi có lũ'],
  sections: [
    {
      h2: 'Đọc tin lũ: từ cảnh báo chính thống tới quan sát tại chỗ',
      html: `<p>Nguồn tin của quyết định đi giữa mùa lũ phải là thông tin cảnh báo chính thống: các cơ quan chức năng phát cảnh báo lũ theo mức — từ mức thấp tới mức nguy hiểm — kèm phạm vi lưu vực và tuyến bị ảnh hưởng; bản tin thời tiết có tin mưa to diện rộng, và các đầu mối địa phương thường có thông tin mực nước tại trạm quan trắc sông. Cách dùng tin cho kế hoạch xe máy: tra tuyến của mình nằm trong vùng cảnh báo nào, và quan trọng hơn — tuyến có cắt qua chân đê, cầu ngầm, tràng phà, đoạn qua suối không. Bản tin là bản đồ rủi ro; người cầm kế hoạch xe máy phải tự rải bản đồ đó lên lộ trình cụ thể của mình.</p>
<p>Nhưng tin chính thống có độ trễ, còn nước thì không. Vì vậy lớp tin thứ hai là quan sát tại chỗ, và có ba dấu hiệu báo đi sớm: màu nước — nước đục vàng sắt có trọng tải đất đá từ thượng nguồn là nước lũ thật, khác hẳn nước mưa trong phố; tốc độ dâng — dán một cành cây lên mép đường, ngắm năm phút: nước lên thấy được bằng mắt nghĩa là dâng rất nhanh, và mọi tóm tắt về mực an toàn đều hết hạn; rác trôi — rác kết tảng, cành cây, bọt vàng là mặt cắt của dòng có lực, và dòng có lực trên mặt đường là dòng có lực dưới bánh xe.</p>
<p>Một dấu hiệu thứ tư ít ai để ý là hành vi của người địa phương: họ biết đoạn nào cuốn, đoạn nào trũng, giờ nước lên thế nào. Đo đường lạ gặp lũ, một câu hỏi với quán nước ven đường đáng giá hơn một giờ dò xe: anh chị ơi, đoạn này tối nay nước có qua mặt đường không. Người địa phương trả lời nhanh chính là vì họ đang sống với con nước đó; tin họ trước khi tin mọi phán đoán của mình.</p>`,
    },
    {
      h2: 'Khung ba câu hỏi trước khi lăn bánh',
      html: `<p>Quyết định đi trong điều kiện báo lũ nên được ép qua ba câu, và mỗi câu trả lời xấu đều là tín hiệu dừng lại. Câu một: tuyến của mình có qua cầu ngầm, qua suối tràn, qua chân đê không — mở bản đồ chậm lại một phút, nhìn cả những đoạn qua suối nhỏ không tên; lũ giết người nhiều nhất ở chính những chỗ này, vì mặt đường dưới nước nhìn phẳng mà thực ra đã bị cuốn rỗng hoặc tràn sâu. Câu hai: mực nước hiện tại ở đoạn thấp nhất của tuyến là bao nhiêu — không biết thì coi như chưa trả lời được, và chưa trả lời được là chưa nên đi; mực nước là biến số duy nhất trong phép toán này mà mình không được đoán.</p>
<p>Câu ba là câu khó nhất vì nó không phải về đường — nó về việc: mình có thật sự phải đi lúc này không. Phần lớn các chuyến đi trong lũ mà người ta kể lại sau tai nạn đều thuộc dạng có thể hoãn: về sớm, dự sinh nhật, đi chợ. Câu này không phải để phán xét ai — nó để tự hỏi lúc mắt còn thấy đường và xe còn trong khô ráo, vì câu trả lời sau khi nước đã tràn thì không còn giá trị nữa. Ai tự hỏi được câu ba với tất cả sự thật của nó gần như luôn chọn dừng lại hoặc đổi giờ — và đó là phần lớn câu chuyện của mùa lũ không có gì xảy ra.</p>
<p>Khi cả ba câu trả lời tốt — tuyến không cắt qua chỗ nguy hiểm, mực biết và ổn, việc đi thật cần — thì phần còn lại của bài viết là phần đi thế nào cho an toàn. Nhưng ghi nhớ thứ tự: ba câu là cổng, đi an toàn chỉ áp dụng cho ai đã qua cổng. Kỹ thuật lái tốt không phải giấy thông hành vượt qua một quyết định sai.</p>`,
    },
    {
      h2: 'Nếu buộc phải đi: chuẩn bị xe, tư trang và giờ đi',
      html: `<p>Chuẩn bị xe cho chuyến đi giữa lũ ngược với thói quen: càng đơn giản càng tốt. Xả bớt đồ, không chở thêm, vì xe nhẹ là xe đứng vững trước dòng chảy và ngã nhẹ hơn khi trượt. Giữ ống xả cao khỏi mặt nước — với xe số, nhiều xe có lỗ thoát ống dưới gầm, nước vào máy là hỏng cả hành trình; đi qua đoạn ướt sâu thì về số thấp, giữ đều ga, không để máy chết giữa nước: máy chết giữa nước là miệng hút nước ống nạp. Giấy tờ và điện thoại gói hai lớp túi kín, kèm bản đồ giấy phòng khi điện thoại chết giữa chặng; một ít đồ khô dự phòng trong balo kín.</p>
<p>Giờ đi là biến số ít được tính ra nhất: nước lũ có nhịp — dâng mạnh sau mưa lớn thượng nguồn vài giờ, rút chậm sau đó. Đi lúc nước đứng hoặc đang rút, không đi lúc đang dâng; và tuyệt đối không đi giữa tối: mọi ước đo mực nước, dòng chảy, mép đường đều mất tác dụng sau khi mặt trời lặn, còn đèn xe chiếu nước là chiếu ra một mặt gương loang không đọc được gì. Nếu hành trình dài, chia chặng theo điểm trú được: mỗi chặng phải có bến dừng đêm, và bến đó phải ở cao hơn mực dự báo.</p>
<p>Trên đường, ba quy tắc không thương lượng. Một: không đi qua đoạn nước tràn mà không thấy rõ mặt đường bên dưới — mòn mép, cuốn cống, mất nắp giếng đều nằm dưới lớp nước phẳng đó, và chúng không hiển thị. Hai: gặp dòng chảy ngang qua đường mạnh — rác trôi nhanh, dòng thấy rõ — quay đầu hoặc lên cao chờ, không băng theo phương dọc dòng: hai mươi cen-ti-mét nước chảy ngang mạnh đủ làm xe mất thăng bằng, và ba mươi, bốn mươi là cuốn trôi cả xe. Ba: không đi sát mép sông, mép đập, chân đê đang chịu tải nước — những mép đó là các mặt cắt đang yếu đi từng giờ mà mắt không nhìn thấy được, và phần lớn vụ sạt cuốn người xảy ra đúng lúc người ta đứng ngắm nước sát mép.</p>`,
    },
    {
      h2: 'Quyết định dừng: trú đúng chỗ và giữ liên lạc',
      html: `<p>Chọn dừng giữa lũ không phải thất bại của chuyến đi — nó là phần của chuyến đi. Người đi đường nhiều mang theo một nguyên tắc mùa lũ: tính trú trước khi tính đi, tức mọi lộ trình mùa lũ đều được mở ra kèm các bến trú — nhà quen trên cao, đình chùa, trụ sở, nhà nghỉ vùng cao — và quyết định dừng bao giờ cũng có sẵn chỗ đến, không phải tìm giữa nước. Trú đúng chỗ gồm ba điều: cao hơn mực dự báo của vùng, có người và có điện thoại; tránh trú dưới chân taluy dốc, sát mép suối, trên đê đang giữ nước — những chỗ đó chuyển từ chỗ trú thành chỗ rủi ro khi nước tiếp tục lên.</p>
<p>Giữ liên lạc là một phần của an toàn: khi dừng trú, báo vị trí cho người nhà vị trí mô tả theo mốc rõ, hẹn giờ gọi lại tiếp theo, và cập nhật khi đổi chỗ. Người thân biết mình đang ở đâu và định thế nào thì phần tìm kiếm khi mất liên lạc — nếu chẳng may xảy ra — có điểm bắt đầu; mất liên lạc giữa lũ mà không ai biết vị trí chặng cuối là kịch bản làm công việc tìm kiếm của hàng trăm người trở nên muộn.</p>
<p>Một điểm tâm lý đáng nói: phần lớn các quyết định đi tiếp trong lũ sai xảy ra khi người ta dừng rồi sốt ruột — đứng nhìn nước dâng chậm, một tiếng, hai tiếng, rồi lăn bánh. Cách chống lại sốt ruột là tự đặt trước một điều: quyết định đi tiếp chỉ được đưa ra khi nước RÚT hoặc khi có tin chính thống mới xác nhận an toàn tuyến — không phải khi sốt ruột lên tới đỉnh. Lũ không quan tâm tới lịch trình của ai; người hiểu điều đó là người về tới nơi, và người không hiểu thì để lại những câu chuyện người khác phải đi tìm hiểu.</p>`,
    },
    {
      h2: 'Sau lũ: đoạn đường ráo mà nguy hiểm nhất',
      html: `<p>Nước rút mở lại đường, và phần lớn tai nạn sau lũ xảy ra đúng ở đó — trên những đoạn đã ráo, khi người ta lấy lại tốc độ như đường chưa từng ngập. Ba nhóm rủi ro của đường sau lũ: một, các đoạn bị cuốn rỗng dưới mặt nhựa — mặt đường nhìn nguyên nhưng phần đất dưới đã bị dòng cuốn, một bánh xe đè lên là sập; hai, taluy và vai đường sạt không mép — mép đường sau lũ nhiều khi chỉ còn là một lớp vỏ nhựa mỏng nhô lên khoảng trống; ba, nắp cống, nắp giếng bị nước mở ra và trôi đi, để lại các hố miệng đúng trên đường đi quen thuộc.</p>
<p>Cách đi đường sau lũ: coi mọi đoạn từng ngập là đoạn lạ — đi chậm, đọc mặt đường, và tuyệt đối không phóng qua đoạn chỉ vừa khô vì màu nhựa khác. Vết nứt mới, mép nhựa võng xuống, chỗ lõm bất thường là tín hiệu cuốn rỗng dưới; khi nghi ngờ, dừng, gõ gõ hoặc dùng que thử, hoặc đổi vệt đi. Cầu ngầm sau lũ phải chờ người ta kiểm tra rồi mới qua — nhiều cầu ngầm bị cuốn hẳn phần kết cấu dưới mà mặt nhìn vẫn nguyên vẹn; tin tức tuyến qua đài địa phương hoặc người quản lý đoạn đường, không tin vào chiếc xe đầu tiên băng qua.</p>
<p>Phần xe sau lũ cũng là một chương riêng — rửa sạch, sấy hệ thống điện, thay nhớt nếu nước từng vào máy — nhưng về mặt đi đường, nguyên tắc gói lại trong một câu: sau lũ, mọi đường quen đều phải đi như đường lạ, cho tới khi từng mét của nó được mắt xác nhận lại. Mùa lũ không kết thúc khi ráo nước; nó kết thúc khi kết cấu đường được kiểm tra — và giữa hai thời điểm đó là đoạn nguy hiểm nhất mà phần lớn người ta đi nhanh nhất.</p>`,
    },
    {
      h2: 'Quyết định là kỹ năng: luyện từ trước cơn lũ',
      html: `<p>Khả năng quyết định giữa lũ không phải tài năng bẩm sinh — nó là kỹ năng luyện được, và mùa lũ chỉ có vài tuần mỗi năm thì nơi luyện là ngày thường. Việc thứ nhất: mở bản đồ, vẽ lại các tuyến hay đi của mình, và đánh dấu mọi chỗ qua suối, chân đê, đoạn trũng, cầu ngầm — người nào có bản đồ rủi ro của tuyến mình sẵn trong đầu thì cú hỏi đường khi lũ tới chỉ mất ba mươi giây thay vì phải đoán giữa nước. Việc thứ hai: lưu sẵn trong máy vài con số và liên kết: đường dây nóng bảo vệ dân thường của địa phương, kênh thông tin chính thống của tỉnh, và hai, ba người thân ở các đầu tuyến — khi lũ tới, người có sẵn danh bạ quyết định nhanh gấp mấy lần người phải tìm giữa sóng yếu.</p>
<p>Việc thứ ba là tự đặt mình vào các kịch bản khi chưa cần: nếu chiều nay tin báo lũ trên tuyến về quê, mình về theo đường nào, dừng ở đâu, gọi cho ai. Người hay làm việc đó sẽ nhận ra một điều: hầu hết các tuyến quen đều có một đường vòng cao hơn, dài thêm nhưng ít cắt qua mặt cắt nguy hiểm — và biết đường vòng đó trước là khác biệt giữa một quyết định nhàn và một quyết định vội giữa mưa.</p>
<p>Cuối cùng, một điểm cần nói thẳng: giữa lũ, mọi kỹ năng lái xe máy đều có giới hạn vật lý, và không có kỹ năng nào bù được dòng nước đủ sâu hoặc đủ nhanh. Người lái giỏi thật sự mùa lũ là người không bao giờ buộc phải dùng kỹ năng lái trong nước — vì anh ta đã dùng kỹ năng quyết định trước đó để không ở trong nước. Chuyến đi an toàn nhất mùa lũ, nhiều khi, là chuyến đi không khởi hành — và biết dừng đúng lúc là kỹ năng lái cao nhất của mùa nước lớn.</p>`,
    },
  ],
  checklist: [
    'Trước mùa lũ: vẽ bản đồ rủi ro các tuyến hay đi — suối tràn, cầu ngầm, chân đê, đoạn trũng — và lưu sẵn liên hệ chính thống, người thân hai đầu tuyến.',
    'Khi có báo lũ: tra mức cảnh báo cho đúng tuyến, cộng quan sát tại chỗ — nước đục, tốc độ dâng, rác trôi — một dấu hiệu xấu là dừng, không đoán.',
    'Khung ba câu trước khi đi: tuyến có cắt chỗ nguy hiểm không; mực đoạn thấp nhất là bao nhiêu; việc đi có thật sự không thể hoãn — một câu xấu là chọn phương án khác.',
    'Nếu đi: xe nhẹ, giấy tờ kín, đi lúc nước đứng, tránh đoạn trũng và cầu ngầm, không đi ban đêm; nước tràn không thấy rõ mặt đường là quay đầu.',
    'Sau lũ: đi đường quen như đường lạ — chậm, đọc mặt đường, chờ kiểm tra cầu ngầm; vết nứt mới và mép võng là tín hiệu cuốn rỗng dưới nhựa.',
  ],
  steps: [
    { title: 'Luyện bản đồ rủi ro từ trước', detail: 'Đánh dấu mọi mặt cắt nguy hiểm trên tuyến quen, lưu liên hệ chính thống và người thân; quyết định giữa lũ chỉ nên là tra bản đồ có sẵn, không phải đoán.' },
    { title: 'Đọc tin và quan sát', detail: 'Mức cảnh báo chính thống cho tuyến, cộng ba dấu hiệu tại chỗ: màu nước đục, tốc độ dâng đo được, rác trôi — mỗi dấu hiệu đều nặng hơn mọi lịch trình.' },
    { title: 'Qua khung ba câu', detail: 'Chỗ nguy hiểm trên tuyến, mực đoạn thấp nhất, tính cần thiết của việc đi — ba câu trả lời tốt mới lăn bánh, một câu xấu là đổi phương án.' },
    { title: 'Đi và dừng theo quy tắc', detail: 'Đi lúc nước đứng, gói kín hồ sơ, không ban đêm; nước tràn không rõ mặt đường là quay đầu; kẹt giữa chặng thì trú cao, báo vị trí, chờ nước rút.' },
  ],
  warnings: [
    'Không băng qua nước tràn khi không thấy rõ mặt đường bên dưới — cầu ngầm cuốn, cống mất nắp và mép mòn đều nằm dưới lớp nước phẳng đó.',
    'Không đi lúc nước đang dâng hoặc giữa tối — mọi ước đo mực, dòng và mép đường đều sai sau hoàng hôn, và nước dâng không chờ ai kiểm tra lại.',
    'Không đứng ngắm nước sát mép sông, chân đê, taluy đang chịu tải — những mặt cắt đó yếu đi từng giờ và sạt không báo trước.',
  ],
  notes: [
    'Bài viết về đi xe máy qua đường ngập tách riêng kỹ thuật qua một đoạn ngập đã xác nhận được; bài này là tầng quyết định trước đó — khi nào đi, khi nào dừng, đọc tin lũ và chuẩn bị.',
    'Mực nước, mức cảnh báo và phạm vi lũ thay đổi theo từng vùng và từng đợt; mọi khung trong bài chỉ là khung quyết định — căn cứ cuối cùng luôn là thông báo chính thống và quan sát thực tế tại chỗ.',
  ],
  references: [
    { title: 'Đi xe máy qua đường ngập', url: 'https://thuexemayhanoi.github.io/total/guide/xu-ly-su-co/di-xe-may-qua-duong-ngap/' },
    { title: 'Kỹ thuật đi xe máy trong mưa lớn', url: 'https://thuexemayhanoi.github.io/total/learn/ky-thuat-lai-xe/ky-thuat-di-xe-may-trong-mua-lon/' },
  ],
  related: [
    'di-xe-may-qua-duong-ngap',
    'ky-thuat-di-xe-may-trong-mua-lon',
    'xe-may-sa-lay-thoat-khoi-bun-va-cat',
    'cham-soc-xe-may-mua-mua',
  ],
};
