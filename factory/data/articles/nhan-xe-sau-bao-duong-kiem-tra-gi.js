// AI WIKI TOTAL — S01156 (nhận xe sau bảo dưỡng); kiểm tra bằng mắt và chạy thử ngắn, không nêu số liệu, thông số hay tên hãng/mẫu xe.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'nhan-xe-sau-bao-duong-kiem-tra-gi',
  title: 'Nhận xe sau khi bảo dưỡng: các việc kiểm tra tại tiệm trước khi lăn bánh',
  seoTitle: 'Nhận xe sau bảo dưỡng: kiểm tra gì ngay tại tiệm trước khi lăn bánh',
  metaDescription: 'Nhận xe sau khi bảo dưỡng cần xem gì? Thứ tự kiểm tra tại tiệm: tiếng máy, đèn còi xi nhan, phanh, tay ga, lốp, nắp nhớt, rò rỉ và đối chiếu phiếu việc đã làm.',
  summary: 'Bài hướng dẫn cách nhận lại xe sau khi bảo dưỡng mà không bị vội vàng bỏ sót. Nội dung đi theo thứ tự cố định ngay tại tiệm: nổ máy, nghe tiếng máy và nhìn đèn báo, thử đèn pha, đèn hậu, còi, xi nhan và phanh, vặn thử tay ga, nhìn lốp và nắp van, soi nắp nhớt cùng các điểm có thể rò rỉ, xem lại những chi tiết vừa được tháo ra. Cuối bài là cách chạy thử thật chậm, những câu nên hỏi thợ trước khi rời tiệm và cách đối chiếu với phiếu việc đã làm.',
  quickAnswer: 'Nhận xe sau khi bảo dưỡng, hãy kiểm tra ngay tại tiệm theo thứ tự: nổ máy và nghe tiếng máy, đèn báo, đèn còi xi nhan, phanh, tay ga, lốp và nắp van, nắp nhớt cùng vết rò rỉ, các chi tiết vừa tháo. Sau đó chạy thử thật chậm trong khu vực tiệm, hỏi thợ điều còn thắc mắc và đối chiếu phiếu việc đã làm. Có điều lạ ở phanh hay xe rung giật thì chưa nên lên đường.',
  keyPoints: [
    'Kiểm tra ngay tại tiệm là lúc rẻ công nhất để sửa sai sót: thợ, dụng cụ và phụ tùng còn ở đó, và người làm còn nhớ rõ mình vừa động tới chi tiết nào.',
    'Thứ tự gọn là nổ máy và nghe tiếng máy, xem đèn báo, thử đèn pha, đèn hậu, còi, xi nhan, bóp phanh, vặn thử tay ga rồi mới nhìn lốp, nắp van, nắp nhớt và vết ướt.',
    'Phanh có cảm giác mềm, hẫng, phải bóp rất sâu mới ăn hoặc có tiếng cọ lạ là lý do để thợ kiểm tra lại, không phải thứ để lên đường rồi tính.',
    'Chạy thử thật chậm ở nơi vắng, thẳng và thoáng gần tiệm, có đội mũ bảo hiểm; thấy rung, lệch lái hoặc tiếng lạ thì dừng an toàn và quay lại báo ngay.',
    'Đối chiếu từng dòng phiếu việc đã làm với thực tế, hỏi lại điều chưa rõ trước khi rời tiệm và giữ hóa đơn, phiếu để có căn cứ nếu sau này cần trao đổi lại.'
  ],
  category: 'guide',
  hub: 'bao-duong',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['phiếu việc đã làm', 'đèn báo trên bảng đồng hồ', 'nắp nhớt', 'nắp van lốp', 'tay ga', 'vết rò rỉ'],
  keywords: ['nhận xe sau khi bảo dưỡng', 'kiểm tra xe sau khi sửa', 'xe vừa bảo dưỡng xong cần xem gì', 'kiểm tra xe máy trước khi rời tiệm'],
  sections: [
    P('Vì sao nên kiểm tra xe ngay tại tiệm, trước khi rời đi', [
      'Nhận lại xe trong lúc vội, thanh toán xong là phóng đi, rồi mới phát hiện ốc lỏng, đèn không sáng hay phanh có cảm giác lạ là chuyện không hiếm. Cách tránh gọn nhất là dành vài phút kiểm tra ngay tại tiệm, theo một thứ tự cố định, trước khi cầm tay lái rời đi. Lý do rất thực tế: xe còn ở nơi có thợ, dụng cụ và phụ tùng, nên một lỗi nhỏ như giắc điện chưa cắm chặt hay một nắp chưa đóng thường được xử lý trong chốc lát. Còn khi đã về xa, ngay cả vấn đề nhỏ cũng kéo theo việc quay lại, chờ đợi và giải thích lại từ đầu. Người thợ lại đang nhớ rõ mình vừa làm những gì, nên câu trả lời của họ thường chính xác hơn.',
      'Bảo dưỡng nghĩa là nhiều chi tiết bị tháo ra rồi lắp lại: nắp ốp, yên, bộ lọc, đôi khi cả bánh xe hay má phanh, tùy hạng mục bạn đã giao. Một người thợ giỏi vẫn có thể bỏ sót một việc nhỏ khi phải làm nhiều xe trong một buổi, và điều đó thường là sơ suất của công việc lặp đi lặp lại hơn là cẩu thả. Có lỗi lộ ra ngay như đèn không sáng, có lỗi chỉ hiện ra khi bóp phanh hay vặn ga. Mục đích của buổi xem lại không phải để bắt lỗi mà để cùng xác nhận xe đã sẵn sàng. Chiếc xe vào tiệm chạy bình thường mà ra khỏi tiệm lại có điều lạ thì nên được xem trước tiên ở những chỗ vừa bị động tới.',
      'Cách tiếp cận hợp lý là đi từ cái dễ thấy tới cái cần chạy thử. Bắt đầu bằng lúc xe đứng yên: nổ máy, nghe tiếng máy, nhìn đèn báo, thử đèn còi xi nhan, bóp phanh, vặn thử tay ga, nhìn lốp rồi soi các vị trí có thể rò rỉ. Chỉ khi những bước đó ổn, bạn mới chạy thử thật chậm trong khu vực của tiệm và đối chiếu với phiếu việc đã làm. Hãy nói thẳng với người giao xe rằng bạn muốn xem qua một lượt; đa số tiệm sẵn lòng vì họ cũng muốn xe rời tiệm trong tình trạng tốt. Giữ thái độ bình tĩnh, hỏi từng điều một, và cứ hỏi lại khi chưa hiểu câu trả lời đầu tiên.'
    ]),
    P('Nổ máy, nghe tiếng máy và nhìn các đèn báo', [
      'Bước đầu tiên là nổ máy ở chỗ thoáng, không phải trong gian kín, vì khí thải tích tụ có thể gây hại. Xe cần đứng vững, tay bạn sẵn sàng bóp phanh, và người ngồi lên xe phải biết rõ xe đang ở trạng thái nào trước khi nhấn đề. Hãy để ý lần đề đầu: máy bắt nhanh hay phải đề lâu hơn thường lệ. Sau khi nổ, quan sát vòng tua cầm chừng có đều không, có tụt xuống rồi chết máy hay lên xuống thất thường không. Những biểu hiện này không tự động nghĩa là thợ làm sai, vì có lúc máy cần chút thời gian ổn định sau khi được vệ sinh hoặc thay nhớt, nhưng chúng đáng được nêu ngay để thợ nhìn tận mắt.',
      'Tiếng máy là thứ bạn so sánh bằng trí nhớ: máy chạy đều và êm hay có tiếng gõ kim loại, tiếng rít, tiếng lạch cạch, tiếng xì mà trước đây không có. Tiếng lạch cạch đôi khi chỉ do một nắp ốp hay chi tiết bên ngoài chưa vào khớp, còn tiếng gõ hay rít từ bên trong máy thì cần thợ nghe kỹ hơn. Tới đây hãy vặn thử tay ga nhẹ và ngắn: máy tăng đều, không ho, không khựng, và khi buông tay ga thì vòng tua hạ về cầm chừng một cách trơn tru. Tay ga phải trả về nhẹ nhàng, không kẹt, không dính. Hãy bẻ lái sang hai bên khi xe đứng yên để chắc rằng dây ga không bị kéo căng và máy không tự tăng vòng tua theo góc lái.',
      'Bảng đồng hồ nói lên nhiều điều nếu bạn chịu nhìn. Ở nhiều xe, các đèn báo sáng lên lúc bật khóa như một lần tự kiểm tra rồi tắt sau khi máy nổ, nhưng điều này tùy xe, nên hãy đối chiếu với sách hướng dẫn nếu bạn chưa quen. Đèn nào còn sáng sau khi nổ, đặc biệt là đèn liên quan nhớt, nhiệt độ, sạc điện hay lỗi động cơ, cần được hỏi ngay trước khi rời tiệm. Gặp đèn cảnh báo nghiêm trọng, hãy tắt máy bằng công tắc tắt máy hoặc xoay khóa điện về vị trí tắt, giữ xe đứng yên và gọi thợ lại xem. Đồng hồ xăng, đèn báo số hay đèn xi nhan trên bảng cũng nên hoạt động như trước khi bạn giao xe, không đứng yên hay chập chờn.'
    ]),
    P('Đèn, còi, xi nhan và phanh: nhóm an toàn cần thử kỹ nhất', [
      'Hệ thống đèn là phần hay bị bỏ sót nhất vì ai cũng mặc định thợ không đụng tới nó, nhưng khi nhiều nắp ốp bị tháo ra, giắc điện có thể bị rút rồi cắm lại không chặt. Bật lần lượt đèn pha ở chế độ chiếu gần và chiếu xa, đèn hậu, đèn xi nhan bên trái và bên phải, cả đầu lẫn đuôi xe. Nên nhờ một người đứng ngoài xem hộ, hoặc dùng bức tường, cửa kính để nhìn phản chiếu. Xi nhan chớp đều nhịp là bình thường; ở nhiều xe, nhịp chớp nhanh hơn hẳn là gợi ý một bóng không sáng hay tiếp xúc kém, dù điều này tùy xe. Chùm sáng đèn pha hắt lệch hẳn so với trước cũng nên được nhắc để thợ chỉnh lại.',
      'Còi chỉ cần bóp thử một nhịp ngắn, nhưng nên làm vì dây còi cũng nằm trong vùng bị tháo lắp. Đèn phanh là chi tiết thường bị quên: ở nhiều xe, cả tay phanh lẫn bàn đạp phanh đều làm sáng đèn hậu, vì mỗi bên có công tắc riêng, nên hãy thử riêng từng bên khi có người nhìn phía sau. Công tắc trên tay lái cũng cần êm và bấm có nấc, không bị kẹt hay lúc ăn lúc không. Những lỗi điện kiểu này rất rẻ để sửa ngay tại tiệm, nhưng sẽ trở thành rủi ro thật khi bạn ra đường mà đèn phanh không sáng và người đi sau không hề biết bạn đang giảm tốc.',
      'Phanh là nhóm duy nhất không được hứa hẹn bằng cảm giác chung chung. Khi xe đứng yên, bóp tay phanh và đạp phanh chân: lực phải chắc dần, không hẫng, không mềm bất thường, tay phanh không chạm sát tay cầm mới ăn và bàn đạp không chìm quá sâu so với trước. Nhả phanh rồi đẩy xe nhích nhẹ, bánh phải quay trơn, không có cảm giác bị kéo hay cọ. Nghe thêm xem có tiếng rít hay cọ kim loại không. Má phanh mới đôi khi cần chạy một đoạn mới ăn đều, tùy xe, nên hãy hỏi thợ thay vì tự đoán. Phanh mềm, hẫng hoặc kéo lệch là lý do để thợ kiểm tra lại ngay, không phải điều để tự xử lý hay lên đường rồi tính.'
    ]),
    P('Rò rỉ, nắp nhớt, lốp và những chi tiết vừa tháo', [
      'Nhớt và các chất lỏng khác là nơi dễ phát hiện dấu vết của việc làm chưa trọn vẹn. Nhìn nắp đổ nhớt xem có vào đúng vị trí, không nghiêng, không hở; nếu bạn nghi ngờ, nhờ thợ kiểm tra thay vì tự vặn thử. Soi dưới gầm, quanh ốc xả nhớt, lọc nhớt nếu xe có và các mối nối ống xem có vết ướt, bóng dầu hay giọt nhỏ không. Một tờ giấy sạch đặt dưới gầm trong lúc máy chạy giúp thấy giọt dễ hơn. Mức nhớt nên được kiểm tra theo đúng cách mà sách hướng dẫn của xe mô tả, trên nền phẳng, không quá thấp cũng không quá đầy. Máy và ống xả rất nóng, vì vậy hãy chỉ nhìn, không chạm tay vào.',
      'Hai chiếc lốp là điểm tiếp xúc duy nhất giữa xe và mặt đường nên cần một cái nhìn riêng. Quan sát lốp có đều, không xẹp, không có vật nhọn cắm vào gai. Nắp van phải còn đủ ở cả hai bánh và được vặn đúng; thiếu nắp van thì bụi bẩn dễ lọt vào ruột van, nên hãy xin thợ bổ sung nếu bị mất. Độ căng lốp nên được đo bằng dụng cụ đo và đối chiếu với mức mà nhà sản xuất khuyến nghị cho xe của bạn, thường được ghi trong sách hướng dẫn hoặc trên tem gắn ở xe; đừng chỉ ấn tay rồi đoán. Nếu bánh xe vừa được tháo ra, hãy hỏi thợ về độ chặt của các chi tiết giữ bánh, đây là việc cần người có chuyên môn xác nhận.',
      'Cuối cùng là toàn bộ những chi tiết có dấu hiệu từng bị động tới. Yên, cốp, nắp ốp, bửng che, chắn bùn: khe hở giữa các tấm nên đều, không chênh, không thiếu ốc ở chỗ lẽ ra phải có ốc, lay nhẹ không nghe lạch cạch. Yên cần khóa chắc và cốp đóng kín. Nhìn dây điện, dây ga, dây phanh xem có bị kẹp giữa hai tấm ốp, bị gập gấp hay thõng xuống gần chỗ nóng hoặc gần bánh xe không. Nếu thấy thiếu một con ốc hay thừa một chi tiết, hãy hỏi thợ ngay; đôi khi có lời giải thích hợp lý, đôi khi đó là điều cần được lắp lại. Tuyệt đối không tự tháo vặn để kiểm tra, vì mục tiêu của bạn là quan sát, không phải làm lại việc của thợ.'
    ]),
    P('Chạy thử chậm và đối chiếu phiếu việc đã làm', [
      'Sau khi xe đứng yên ổn, hãy chạy thử thật chậm, nhưng chưa vội ra đường lớn. Đội mũ bảo hiểm, chọn đoạn thẳng, thoáng, vắng và bằng phẳng gần tiệm, rồi đi với tốc độ đi bộ nhanh. Bóp phanh nhẹ để xem xe giảm đều, không giật, không kéo về một bên, rồi tăng dần mức bóp. Chú ý cảm giác trên tay lái: có rung không, có lệch về một phía khi buông tay nhẹ không, có tiếng lạ từ bánh hay từ máy không. Với xe có số, kiểm tra số vào êm, không trượt. Nếu có điều bất thường, bóp phanh, dừng xe an toàn rồi tắt máy bằng công tắc hoặc xoay khóa điện về vị trí tắt, sau đó quay lại báo thợ, đừng cố chạy tiếp để thử cho quen.',
      'Trước khi rời tiệm, đây là lúc hỏi lại. Bạn có thể hỏi những hạng mục nào đã được làm, chi tiết nào đã được thay, thợ có phát hiện điều gì khác cần theo dõi không, và có điều gì nên chú ý trong những ngày đầu sau khi nhận xe. Hãy hỏi cả việc tiệm có hẹn xem lại hay lưu ý riêng cho lần bảo dưỡng này hay không. Nếu bạn có yêu cầu riêng khi giao xe, hãy hỏi xem việc đó đã được thực hiện chưa. Chi tiết cũ đã thay, nếu bạn muốn xem, nên được nói trước thay vì đợi đến khi xe đã chạy xa. Việc hỏi cặn kẽ ngay tại chỗ giúp cả hai bên tránh hiểu lầm về sau.',
      'Phiếu việc đã làm là bản đối chiếu cuối cùng. Đọc từng dòng và so với những gì bạn đã quan sát: việc nào ghi mà bạn không thấy dấu hiệu nào, việc nào bạn nhờ làm mà phiếu không nhắc tới, thì hỏi lại ngay. Bạn không cần kiểm chứng kỹ thuật, chỉ cần chắc rằng phiếu, lời thợ và tình trạng xe khớp với nhau. Hãy chụp lại phiếu và giữ hóa đơn cẩn thận; chúng cho biết xe đã được làm gì và khi nào, rất hữu ích nếu sau này có điều cần trao đổi với tiệm hoặc với thợ khác. Những ngày đầu sau bảo dưỡng, hãy để ý phanh, lốp, tiếng máy và vết ướt dưới gầm; có điều lạ thì quay lại sớm, đừng chờ nó nặng thêm.'
    ])
  ],
  checklist: [
    'Nổ máy ở chỗ thoáng, nghe tiếng máy và vòng tua cầm chừng, đối chiếu với trí nhớ về tiếng máy trước khi giao xe.',
    'Xem các đèn báo trên bảng đồng hồ có tắt như thường lệ sau khi nổ không; đèn nào còn sáng thì hỏi thợ ngay.',
    'Thử đèn pha, đèn hậu, đèn phanh bằng cả tay phanh lẫn chân phanh, bốn xi nhan và còi.',
    'Bóp phanh, đạp phanh, vặn thử tay ga, bẻ lái hai bên; nhìn lốp, nắp van, nắp nhớt và vết ướt dưới gầm.',
    'Chạy thử thật chậm trong khu vực tiệm, hỏi lại thợ và đối chiếu phiếu việc đã làm, rồi giữ hóa đơn.'
  ],
  steps: [
    { title: 'Kiểm tra khi xe đứng yên', detail: 'Nổ máy ở chỗ thoáng, nghe tiếng máy, nhìn đèn báo, thử đèn, còi, xi nhan, bóp phanh và vặn nhẹ tay ga trong lúc xe đứng vững.' },
    { title: 'Soi rò rỉ và chi tiết vừa tháo', detail: 'Nhìn nắp nhớt, dưới gầm, lốp, nắp van, các nắp ốp và dây điện, dây phanh, dây ga; chỉ quan sát, không tự tháo vặn.' },
    { title: 'Chạy thử thật chậm', detail: 'Đội mũ bảo hiểm, chạy chậm ở đoạn thẳng, vắng gần tiệm, thử phanh nhẹ rồi tăng dần; có điều lạ thì dừng an toàn và quay lại báo.' },
    { title: 'Hỏi lại và đối chiếu phiếu', detail: 'So từng dòng phiếu việc đã làm với thực tế, hỏi thợ điều còn thắc mắc rồi giữ hóa đơn, phiếu trước khi rời tiệm.' }
  ],
  warnings: [
    'Phanh mềm, hẫng, phải bóp rất sâu mới ăn, kéo lệch hoặc có tiếng cọ lạ: không lên đường, đưa xe lại cho thợ kiểm tra ngay.',
    'Mùi xăng nồng, xăng hay nhớt nhỏ giọt, đèn báo nhớt hoặc nhiệt độ còn sáng sau khi nổ: tắt máy bằng công tắc hoặc khóa điện, giữ xe đứng yên và báo thợ.',
    'Không tự tháo vặn chi tiết phanh, bánh xe, nắp ốp hay đụng vào máy và ống xả đang nóng để kiểm tra; việc đó thuộc về thợ có chuyên môn.'
  ],
  notes: [
    'Cách bố trí đèn báo, vị trí kiểm tra nhớt và những việc cần làm sau bảo dưỡng khác nhau tùy dòng xe; hãy đối chiếu với sách hướng dẫn của đúng xe bạn.',
    'Bài chỉ nêu những điều bạn có thể quan sát và thử đơn giản tại tiệm; kết luận kỹ thuật về lỗi hay trách nhiệm thuộc về thợ có chuyên môn và thỏa thuận giữa bạn với tiệm.'
  ],
  references: [
    'Sách hướng dẫn sử dụng của nhà sản xuất xe, phần đèn báo, kiểm tra trước khi đi và bảo dưỡng định kỳ',
    'Tài liệu hướng dẫn của nhà sản xuất về các hạng mục bảo dưỡng của đúng dòng xe'
  ],
  related: ['bao-duong-xe-may-sau-chuyen-di-xa', 'thay-lop-xe-may-can-kiem-tra-gi', 'checklist-nhan-xe', 'tiem-sua-xe-gan-day']
};
