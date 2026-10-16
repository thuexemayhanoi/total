// AI WIKI TOTAL — S01707; đi xe máy qua làn rẽ phải riêng có đảo dẫn hướng, chỉ bàn cách đi an toàn tại chỗ, không nêu số liệu hay tên địa danh.
'use strict';
const P = (h2, ps) => ({ h2, html: ps.map(p => '<p>' + p + '</p>').join('\n') });
module.exports = {
  slug: 'lan-re-phai-rieng-co-dao-dan-huong-o-nga-tu-khi-di-xe-may-vao-lan-nhuong-nguoi-di-bo-va-nhap-dong-xe-ngang',
  title: 'Làn rẽ phải riêng có đảo dẫn hướng ở ngã tư: vào làn, nhường người đi bộ và nhập dòng xe ngang khi đi xe máy',
  seoTitle: 'Làn rẽ phải riêng có đảo dẫn hướng: cách đi xe máy an toàn',
  metaDescription: 'Đi xe máy qua làn rẽ phải riêng có đảo dẫn hướng: vào làn đúng lúc, dừng cho người đi bộ băng qua, giữ vị trí khi có ô tô cùng làn và nhập dòng xe ngang ở cuối làn.',
  summary: 'Bài giải thích làn rẽ phải riêng có đảo dẫn hướng khác rẽ phải thường ở đâu và vì sao tâm lý “được đi luôn” dễ khiến người đi xe máy chủ quan. Nội dung đi qua các chặng nối tiếp nhau: vào làn bằng xi-nhan sớm và giảm tốc trước mũi đảo, dừng hẳn cho người đi bộ băng qua làn rẽ, giữ một vị trí rõ ràng khi có ô tô và xe lớn cùng làn, rồi nhập dòng xe ngang ở cuối làn khi khe đủ rộng. Bài cũng nhắc việc đọc biển, vạch và đèn tại chỗ, vì mỗi nơi bố trí một khác.',
  quickAnswer: 'Làn rẽ phải riêng có đảo dẫn hướng không phải chỗ để rẽ mà không cần nhìn. Hãy bật xi-nhan sớm, giảm tốc trước mũi đảo, ngoái kiểm tra xe đi thẳng bên phải rồi mới vào làn. Dừng hẳn khi có người đi bộ đang qua hoặc sắp bước xuống, không bấm còi giục. Giữ một vị trí rõ ràng khi có ô tô cùng làn, nhập dòng ở cuối làn khi khe đủ và đọc biển, vạch, đèn tại chỗ.',
  keyPoints: [
    'Làn rẽ phải riêng tách xe rẽ khỏi luồng chính bằng đảo dẫn hướng, nhưng không làm người đi bộ và dòng xe ngang biến mất; chúng chỉ dời sang lối qua đường và điểm nhập ở cuối làn.',
    'Vào làn bằng xi-nhan sớm, giảm tốc trước mũi đảo, nhìn gương và ngoái kiểm tra xe máy đi thẳng bên phải; không cắt ngang trước ô tô cùng vào làn và không đi sát mũi đảo.',
    'Người đi bộ băng qua làn rẽ có thể bị khuất sau ô tô hoặc vật cản trên đảo: giảm tốc, nhìn cả hai đầu lối qua, dừng hẳn khi có người đang qua hoặc sắp bước xuống và không bấm còi giục.',
    'Với ô tô và xe lớn cùng làn, giữ một vị trí rõ ràng, không đi song song trong làn hẹp, tránh điểm mù và khoảng trống phía trong nơi đuôi xe dài quét vào.',
    'Nhập dòng ở cuối làn khi khe đủ và khớp nhịp với dòng ngang; không ép xe ngang phải phanh và không cắt ngay sang làn trong.'
  ],
  category: 'ride',
  hub: 'lai-xe-trong-thanh-pho',
  date: '2026-10-12',
  updated: '2026-10-12',
  entities: ['làn rẽ phải riêng', 'đảo dẫn hướng', 'mũi đảo', 'lối qua đường cho người đi bộ', 'điểm mù của xe lớn', 'điểm nhập dòng ở cuối làn'],
  keywords: ['làn rẽ phải riêng có đảo dẫn hướng', 'rẽ phải qua đảo dẫn hướng bằng xe máy', 'nhập dòng sau khi rẽ phải ở ngã tư lớn', 'người đi bộ băng qua làn rẽ phải'],
  sections: [
    P('Làn rẽ phải riêng khác rẽ phải thường ở chỗ nào', [
      'Ở ngã tư thông thường, xe rẽ phải đi chung dòng với xe đi thẳng cho tới sát chỗ rẽ, rồi mới bẻ tay lái vào đường giao. Làn rẽ phải riêng thì khác: nó được tách khỏi luồng chính bằng một đảo dẫn hướng, tức mảng nhô lên hoặc mảng sơn hình giọt nước nằm giữa hai dòng xe. Xe rẽ phải đi vào lối riêng ấy, có điểm vào ở phía trước đảo và điểm nhập ở phía sau, còn xe đi thẳng chạy tiếp bên cạnh mà không còn bị xe rẽ cắt ngang đầu như ở ngã tư thường. Cách bố trí này giúp hai dòng bớt vướng nhau ngay giữa ngã tư, nhưng các va chạm không biến mất. Chúng chỉ dời sang ba chỗ mới, gồm lúc vào làn, lúc qua lối đi bộ và lúc nhập dòng ở cuối làn.',
      'Điều dễ gây hiểu lầm nhất là tâm lý “được đi luôn”. Vì làn rẽ nằm tách riêng, nhiều người đi xe máy nghĩ rằng chỉ cần vào làn là khỏi phải chờ, nên vào nhanh, giữ ga và dồn mắt về cuối làn. Thực tế, làn này vẫn là đường chung với những người khác: người đi bộ bước qua làn từ đảo, ô tô và xe lớn cùng vào làn, và ở cuối làn là dòng xe ngang đang chạy. Dù cách bố trí cụ thể ra sao, các điểm xung đột ấy vẫn còn đó, chỉ khác chỗ xuất hiện. Vì thế tốc độ hợp lý khi vào làn rẽ riêng thường chậm hơn người ta nghĩ, đủ chậm để dừng hẳn ngay trước lối qua đường nếu cần, và đủ chậm để kịp nhìn khi dòng ngang bất ngờ dày lên.',
      'Biển, vạch và đèn ở mỗi nơi một khác, nên cách làm đúng nhất là đọc biển, vạch và đèn tại chỗ thay vì mang thói quen từ nơi khác sang. Có nơi đảo lớn, làn rộng, lối đi bộ nằm lùi sâu; có nơi đảo chỉ là vài mảng sơn, làn hẹp, lối qua đường nằm sát ngay chỗ vào. Có nơi cuối làn có đèn riêng, có nơi chỉ có vạch báo nhường, có nơi gần như chỉ có mũi tên sơn trên mặt đường. Bài này không thay cho việc đọc những tín hiệu ấy mà chỉ bàn cách đi an toàn tại chỗ. Tới một nút giao lạ, hãy giảm tốc từ xa, nhìn hình dạng đảo, hướng mũi tên và vị trí lối đi bộ trước khi quyết định vào làn; chưa rõ thì cứ theo nhịp chậm của xe phía trước.'
    ]),
    P('Vào làn đúng lúc, không cắt ngang và không chạm mũi đảo', [
      'Vào làn đúng lúc bắt đầu từ rất sớm, trước cả khi mũi đảo hiện rõ trước mắt. Hãy bật xi-nhan phải sớm, đủ lâu để xe phía sau và xe đi thẳng bên cạnh kịp hiểu bạn sắp tách khỏi luồng, thay vì bật khi xe đã nghiêng. Nên đưa xe về phía làn ngoài cùng từ trước chỗ tách, theo vạch kẻ trên mặt đường, để đường vào làn là một đường cong thoải chứ không phải cú bẻ gấp vào phút chót. Đến gần mũi đảo, hãy giảm tốc trước chứ không phanh trong lúc đang nghiêng xe, vì mặt đường quanh đảo thường có vạch sơn, nắp cống hoặc cát bụi dồn lại, nhất là sau mưa. Giảm tốc sớm còn cho bạn thêm thời gian nhìn xem lối đi bộ phía sau mũi đảo có người hay không.',
      'Trước khi nhích vào làn, hãy nhìn gương rồi ngoái vai kiểm tra phía bên phải. Ở chỗ tách làn thường có xe máy đi thẳng chạy sát mép trong, ngay vùng gương không phủ tới, và họ có thể không biết bạn định rẽ nếu bạn bật tín hiệu muộn. Cú ngoái nên ngắn và gọn, đủ để thấy có xe hay không rồi quay lại nhìn phía trước, đừng giữ đầu quay lâu khi xe đang chạy. Phần quan trọng không kém là ô tô cùng vào làn: đừng cắt ngang trước đầu xe lớn để giành chỗ, vì người lái xe lớn cần quãng để giảm tốc và khó thấy một chiếc xe máy lọt vào sát trước mũi xe. Cứ để xe đã ở gần lối vào đi trước, rồi bạn vào sau, dù mất thêm một nhịp chờ.',
      'Mũi đảo là chỗ nhiều người chạm vào nhất vì nó thấp, cùng màu với mặt đường và thường chỉ được báo bằng lớp sơn đã mờ. Cách tránh là nhìn theo đường mình muốn đi, không nhìn chằm chằm vào chính mũi đảo, vì xe có xu hướng đi theo hướng mắt nhìn. Hãy giữ xe ở khoảng giữa làn, chừa một dải rộng với mép đảo thay vì ôm sát, để nếu có xe khác ép nhẹ bên cạnh thì bạn còn chỗ nhích mà không đụng đảo. Trời tối, mưa hay chói đèn thì tầm nhìn tới đảo kém đi nhiều, nên cần giảm tốc hơn nữa. Chuyện va vào đầu dải phân cách và đảo giao thông giữa đường đã có bài riêng. Lỡ vào làn quá muộn thì bỏ lần này, đi tiếp rồi tìm đường vòng an toàn, đừng bẻ gấp cắt ngang.'
    ]),
    P('Người đi bộ băng qua làn rẽ', [
      'Lối qua đường dành cho người đi bộ thường cắt ngang làn rẽ phải ở một trong hai chỗ: ngay sau điểm vào hoặc ở giữa đảo, nơi người đi bộ đứng chờ trước khi bước tiếp sang phần đường còn lại. Đây là điểm dễ gây bất ngờ nhất, vì xe rẽ vào làn thường còn đà, người lái lại đang dồn mắt về cuối làn, nơi sắp phải nhập dòng, trong khi người đi bộ bước ra từ phía bên phải. Người đi bộ có thể bị khuất sau ô tô chạy cùng làn, sau cột đèn, bảng biển hay cây trên đảo, nên bạn không thể chỉ chờ đến lúc nhìn thấy họ rồi mới phản ứng. Cách phản ứng tốt nhất là tính trước rằng có người ở đó, kể cả khi lối qua đường trông vắng vẻ.',
      'Cách xử lý gồm ba việc theo thứ tự. Một là giảm tốc từ trước lối qua đường, đủ để dừng êm mà không phải bóp phanh gấp. Hai là nhìn cả hai đầu lối qua, gồm người đang đứng trên đảo lẫn người đang ở mép vỉa hè, vì người sắp bước xuống thường nghiêng người, quay đầu nhìn về phía xe hoặc dắt theo xe đẩy, xe đạp, trẻ nhỏ. Ba là dừng hẳn khi có người đang qua hoặc sắp bước xuống, dừng trước lối qua một khoảng chứ không đè lên lối, để người đi bộ còn chỗ đi và xe phía sau còn thấy bạn đã dừng. Hãy chờ người qua hẳn rồi mới đi, đừng lách vòng sau lưng họ, vì có thể còn người khác bước ra ngay sau người đầu tiên.',
      'Đừng bấm còi để giục. Tiếng còi làm người đi bộ giật mình, có thể khiến họ khựng lại giữa làn, bước lùi hoặc chạy vội, và người lớn tuổi hay trẻ nhỏ càng dễ bối rối. Muốn báo hiệu mình đang tới, hãy dùng việc giảm tốc rõ ràng, nhìn thẳng về phía người ấy và chờ họ quyết định bước tiếp. Một dấu hiệu nên nhớ là ô tô phía trước bỗng giảm tốc hoặc dừng giữa làn mà không có lý do rõ ràng: rất có thể có người đang qua, bị thân xe che mất. Đừng vượt bên cạnh chiếc xe đang dừng đó mà hãy dừng theo. Khi xe phía trước đã đi, hãy nhìn lại gương rồi mới nhả phanh, vì xe sau có thể đang bám sát và tưởng đường đã thông.'
    ]),
    P('Ô tô và xe lớn rẽ cùng làn', [
      'Làn rẽ riêng thường vẫn đủ rộng cho cả xe máy lẫn ô tô, nên rất hay có ô tô, xe tải nhỏ hoặc xe buýt cùng vào một lúc. Nguyên tắc đơn giản nhất là giữ một vị trí rõ ràng trong làn: hoặc đi sau xe lớn với khoảng cách đủ rộng, hoặc nếu đã ở phía trước thì giữ nhịp ổn định để người lái xe sau còn đoán được bạn sẽ làm gì. Điều nên tránh là đi song song với xe lớn trong làn hẹp. Ở đó, chỉ cần xe lớn lệch tay lái một chút hoặc một xe khác bên ngoài ép vào, bạn không còn chỗ thoát, một bên là thân xe, bên kia là mép đảo. Vị trí rõ ràng cũng giúp người lái xe lớn đoán được bạn ở đâu, và điều đó quan trọng hơn mọi mẹo lách.',
      'Xe lớn có hai đặc điểm mà người đi xe máy cần để ý. Thứ nhất là điểm mù: vùng sát hông và sát đuôi thường nằm ngoài tầm nhìn của người lái, nên nếu bạn không thấy gương hay mặt người lái thì rất có thể họ cũng không thấy bạn. Thứ hai là phần đuôi quét vào trong. Khi xe dài rẽ, bánh sau đi theo vòng cua hẹp hơn bánh trước, nên thân và đuôi xe cắt vào phía trong vòng rẽ, đúng chỗ bạn có thể đang nghĩ là khoảng trống an toàn giữa xe lớn và đảo. Đừng chui vào khoảng trống đó. Xe lớn cũng có thể lệch ra ngoài trước khi vào cua để lấy thêm chỗ, nên hướng đầu xe lúc đầu dễ làm bạn đoán sai ý định của người lái.',
      'Cách xử lý thực tế là nhường xe lớn đi trước và để một khoảng đệm sau đuôi, đủ để thấy toàn bộ thân xe và đèn phanh. Xe lớn bật xi-nhan phải nghĩa là nó sắp chiếm phần lớn làn, vì vậy đừng cố vượt hay lách vào phía trong. Nếu có ô tô chèn sát từ bên cạnh, hãy giảm tốc, bóp phanh nhẹ để lùi lại phía sau thay vì vặn ga cố thoát lên trước, vì lùi một nhịp thường dễ hơn đối đầu với thân xe đang nghiêng vào. Tình huống ô tô rẽ phải ngay trước mặt khi xe máy đi thẳng, cùng cách phán đoán khi qua ngã tư nói chung, đã được bàn riêng trong các bài sẵn có về ô tô rẽ phải và về kỹ thuật qua ngã tư; bài này chỉ giữ phần làn rẽ.'
    ]),
    P('Nhập dòng xe ngang ở cuối làn', [
      'Cuối làn rẽ là chỗ bạn trở lại làm một phần của dòng xe thường. Việc đầu tiên là nhìn sớm sang trái để tìm khe, ngay từ lúc còn đang chạy trong làn chứ không đợi tới sát điểm nhập mới quay đầu. Nhìn sớm cho phép bạn biết dòng ngang đang thưa hay dày, xe nào sắp tới và có xe nào chạy nhanh hơn dòng hay không. Dòng dày thì hãy giảm tốc hoặc dừng ở chỗ nhập, nhưng dừng sao cho không đè lên lối đi bộ phía sau và không chắn hẳn ra giữa dòng. Ở chỗ có đèn, dòng ngang thường đi thành từng đợt, hết đợt thường có khe dài hơn; biết điều đó giúp bạn kiên nhẫn chờ khe tốt thay vì liều chen vào khe hẹp.',
      'Hãy nhập khi khe đủ, và nhập sao cho nhịp của bạn khớp với dòng. Khe đủ nghĩa là xe ngang phía sau khe vẫn còn xa đến mức họ không phải bóp phanh hay đổi hướng vì bạn; chỉ cần thấy xe ngang giảm tốc rõ ràng thì khe ấy chưa đủ. Hãy tăng ga dần khi bắt đầu nhập để đạt nhịp xấp xỉ với dòng, chứ đừng vào chậm chạp giữa khe rồi mới tăng, vì xe sau sẽ dồn tới nhanh hơn bạn tưởng. Đừng ép dòng ngang phải phanh, đừng nhích đầu xe ra giữa dòng để “xin đường” và đừng mặc định rằng ai đó sẽ nhường. Chưa rõ ai nhường ai thì chọn đứng yên hoặc đi chậm, vì chiếc xe đứng vững dễ đoán hơn chiếc xe đang do dự.',
      'Sau khi nhập, đừng cắt ngay sang làn trong. Hãy giữ ở làn ngoài cùng một đoạn, ổn định nhịp, quan sát phía trước và phía sau rồi mới tìm chỗ chuyển làn. Làn ngoài cùng đôi khi có xe đỗ, xe dừng đón khách hoặc xe chuẩn bị rẽ vào lề đường, nên bạn cần nhìn sớm để không bị kẹp giữa lề và dòng xe. Lúc chuyển làn, bật xi-nhan, nhìn gương và ngoái vai như khi vào làn rẽ, rồi nhích dần chứ không bẻ ngang. Cả chuỗi từ lúc vào làn, qua lối đi bộ tới lúc nhập dòng tuy ngắn nhưng có ba điểm xung đột liên tiếp, nên cần giữ nhịp chậm và đều từ đầu đến cuối. Thấy tình huống quá đông hoặc quá dày, dừng lại một nhịp thường là lựa chọn an toàn hơn.'
    ])
  ],
  checklist: [
    'Giảm tốc từ xa và đọc biển, vạch, đèn tại chỗ trước khi quyết định vào làn rẽ riêng.',
    'Bật xi-nhan sớm, nhìn gương và ngoái vai kiểm tra xe máy đi thẳng bên phải, rồi mới vào làn.',
    'Giữ xe ở giữa làn, chừa khoảng với mũi đảo và với ô tô cùng làn, không đi song song với xe lớn.',
    'Nhìn cả hai đầu lối qua đường, dừng hẳn khi có người đang qua hoặc sắp bước xuống, không bấm còi giục.',
    'Nhìn sớm sang trái tìm khe ở cuối làn, nhập khi khe đủ và khớp nhịp, không cắt ngay sang làn trong.'
  ],
  steps: [
    { title: 'Đọc tình huống từ xa', detail: 'Giảm tốc, quan sát hình dạng đảo, hướng mũi tên, vị trí lối đi bộ và tín hiệu ở cuối làn; chưa rõ thì đi chậm theo nhịp xe phía trước.' },
    { title: 'Báo hiệu và vào làn êm', detail: 'Bật xi-nhan sớm, nhìn gương, ngoái vai kiểm tra bên phải, nhường ô tô đã ở gần lối vào, rồi đi vào bằng đường cong thoải và giữ cách mũi đảo một dải rộng.' },
    { title: 'Nhường người đi bộ ở lối qua đường', detail: 'Giảm tốc, nhìn cả hai đầu lối qua, dừng hẳn trước lối khi có người đang qua hoặc sắp bước xuống và chờ họ qua hẳn mới đi tiếp.' },
    { title: 'Nhập dòng ở cuối làn', detail: 'Nhìn sớm sang trái tìm khe, giảm tốc hoặc dừng nếu dòng dày, nhập khi khe đủ và khớp nhịp, rồi giữ làn ngoài cùng một đoạn trước khi chuyển làn.' }
  ],
  warnings: [
    'Người đi bộ có thể bị khuất sau ô tô hoặc vật cản trên đảo: tính trước rằng có người ở lối qua đường, dừng hẳn khi họ đang qua hoặc sắp bước xuống và không vượt bên cạnh xe đang dừng giữa làn.',
    'Không đi song song với ô tô hay xe lớn trong làn hẹp và không chui vào khoảng trống phía trong khi xe dài đang rẽ, vì đuôi xe có thể quét vào đúng chỗ đó.',
    'Không ép dòng xe ngang phải phanh hay đổi hướng; chưa chắc ai nhường ai thì đứng yên hoặc đi chậm và chờ khe rõ ràng hơn.'
  ],
  notes: [
    'Hình dạng đảo, vị trí lối qua đường, biển, vạch và đèn khác nhau tùy từng nơi; luôn đọc tín hiệu tại chỗ, bài này chỉ bàn cách đi an toàn.',
    'Phản ứng của xe lớn tùy kích cỡ và cách bố trí gương của từng xe; với xe càng dài, hãy chừa khoảng rộng hơn và đừng dựa vào việc người lái đã thấy bạn.'
  ],
  references: [
    'Tài liệu hướng dẫn lái xe an toàn trong đô thị do cơ sở đào tạo và cơ quan quản lý giao thông biên soạn',
    'Biển báo, vạch kẻ đường và tín hiệu đèn ngay tại nút giao mà bạn đi qua'
  ],
  related: [
    'va-vao-dau-dai-phan-cach-dao-giao-thong-giua-duong-vi-sao-hay-xay-ra-luc-toi-luc-mua-va-cach-nhan-ra-som',
    'o-to-re-phai-xe-may-di-thang-xu-ly',
    'ky-thuat-qua-nga-tu-va-quy-tac-uu-tien',
    'di-trong-lan-xe-may-co-dai-phan-cach-cung-it-loi-thoat-cho-o-to-cat-ngang-va-cach-giu-khoang-trong-lan-chat',
    'di-xe-may-tranh-va-cham-voi-xe-buyt'
  ]
};
