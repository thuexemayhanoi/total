export const meta = {
  name: 'viet-lo-v2-toa-an-nd168',
  description: 'Viết 13 bài (tố tụng dân sự đòi cọc, xử phạt giao thông Nghị định 168) theo lô writer song song, một vòng kiểm hai góc nhìn, một lần sửa',
  phases: [
    { title: 'Viết', detail: '13 slot, lô 5 writer song song' },
    { title: 'Kiểm dữ kiện', detail: '2 verifier độc lập, một vòng' },
    { title: 'Sửa', detail: 'một lần sửa tối thiểu lỗi thật' },
  ],
}

const SP = '/tmp/claude-0/-home-user-total/e75d041e-39fa-580c-922a-dc1806d8b259/scratchpad'
const PACK = SP + '/pack-181.txt'
const ART = '/home/user/total/factory/data/articles/'
const CHUNK = 5

const WRITER = { type: 'object', properties: { file: { type: 'string' }, words: { type: 'number' }, qa: { type: 'number' }, warnings: { type: 'string' }, summary: { type: 'string' } }, required: ['file', 'words', 'qa'] }
const VERDICT = { type: 'object', properties: { ok: { type: 'boolean' }, issues: { type: 'array', items: { type: 'object', properties: { severity: { type: 'string', enum: ['high', 'medium', 'low'] }, quote: { type: 'string' }, problem: { type: 'string' }, fix: { type: 'string' } }, required: ['severity', 'quote', 'problem', 'fix'] } } }, required: ['ok', 'issues'] }
const FIX = { type: 'object', properties: { fixed: { type: 'boolean' }, qa: { type: 'number' }, words: { type: 'number' }, notes: { type: 'string' } }, required: ['fixed', 'qa', 'words'] }

const SLOTS = [{"id": "S02275", "slug": "don-khoi-kien-doi-tien-coc-hoac-boi-thuong-xe-may-phai-ghi-nhung-gi-kem-tai-lieu-nao-va-nop-bang-cach-nao", "grp": "tt"}, {"id": "S02276", "slug": "nop-don-khoi-kien-xong-khi-nao-toa-thu-ly-vu-an-cac-moc-03-ngay-05-ngay-07-ngay-nop-tam-ung-an-phi", "grp": "tt"}, {"id": "S02277", "slug": "kien-doi-tien-coc-hoac-boi-thuong-gia-tri-nho-tam-ung-an-phi-bao-nhieu-moc-6000000-dong-va-5-phan-tram", "grp": "tt"}, {"id": "S02278", "slug": "kien-doi-coc-mua-xe-may-hoac-doi-xe-cho-muon-thang-mot-phan-thi-ai-chiu-an-phi-hoa-giai-thanh-giam-bao-nhieu", "grp": "tt"}, {"id": "S02279", "slug": "hoa-giai-tai-toa-an-truoc-khi-kien-toa-thong-bao-may-ngay-hoa-giai-toi-da-bao-lau-va-co-phai-tra-phi-khong", "grp": "tt"}, {"id": "S02280", "slug": "khong-doi-mu-bao-hiem-hoac-khong-cai-quai-khi-di-xe-may-nguoi-lai-va-nguoi-ngoi-sau-bi-phat-the-nao", "grp": "ph"}, {"id": "S02281", "slug": "xe-may-keo-hoac-day-xe-khac-khi-dang-lai-nhu-xe-het-xang-hay-xe-hong-nguoi-lai-bi-phat-bao-nhieu", "grp": "ph"}, {"id": "S02282", "slug": "di-xe-may-vao-duong-cam-hoac-khu-vuc-cam-phat-bao-nhieu-tru-may-diem-va-tu-15-8-2026-co-gi-thay-doi", "grp": "ph"}, {"id": "S02283", "slug": "quay-dau-xe-may-bi-cam-o-nhung-cho-nao-va-quay-dau-sai-cho-hoac-trong-ham-duong-bo-bi-phat-bao-nhieu", "grp": "ph"}, {"id": "S02284", "slug": "gan-coi-hu-hoac-den-nhay-len-xe-may-luat-cam-the-nao-phat-bao-nhieu-va-thiet-bi-co-bi-tich-thu-khong", "grp": "ph"}, {"id": "S02285", "slug": "lai-xe-may-khi-trong-co-the-co-ma-tuy-hoac-chat-kich-thich-khac-phat-bao-nhieu-va-tuoc-giay-phep-lai-xe-may-thang", "grp": "ph"}, {"id": "S02286", "slug": "rai-dinh-do-chat-gay-tron-truot-hoac-dat-vat-can-tren-duong-bo-luat-cam-the-nao-va-phat-ca-nhan-bao-nhieu", "grp": "ph"}, {"id": "S02287", "slug": "tiem-sua-xe-rua-xe-hoac-bay-ban-tren-via-he-long-duong-phat-ca-nhan-bao-nhieu-va-khi-nao-duoc-dung-tam-thoi", "grp": "ph"}]

const GRP = {
  lp: `Nhóm lệ phí đăng ký, cấp biển phương tiện: Thông tư 155/2025/TT-BTC ngày 31/12/2025 của Bộ trưởng Bộ Tài chính (hiệu lực 01/01/2026; Điều 8 khoản 2 cho Thông tư 60/2023/TT-BTC hết hiệu lực), theo ĐÚNG VERIFIED_FACTS. Số tiền, mốc trị giá, khu vực I và khu vực II, các dòng của Biểu chỉ nêu nguyên văn kèm ngày hiệu lực; không quy đổi, không làm tròn, không tự áp một dòng của Biểu cho một việc cụ thể (kèm biển hay không do Bộ Công an quy định nếu dòng dữ kiện nêu), mục II và III chỉ có một số tiền trên mỗi dòng: bài chỉ nói "một số tiền" và không nói áp dụng chung hay theo khu vực nếu dữ kiện không nêu. Bài đã xuất bản a243-dang-ky-xe-may và chinh-sach-dang-ky-xe nêu mức lệ phí khác bản hiện hành: không sửa và không dẫn các bài đó, chỉ viết đúng văn bản. Không nhầm lệ phí đăng ký với lệ phí trước bạ (bài S02225 là lệ phí trước bạ). Không tư vấn pháp lý. Nêu ngày truy xuất 24 tháng 10 năm 2026 và nhắc tra lại văn bản còn hiệu lực.`,
  dg: `Nhóm Nghị định 156/2024/NĐ-CP về đấu giá biển số xe (hiệu lực 01/01/2025), theo ĐÚNG VERIFIED_FACTS. Tiền hồ sơ, tiền đặt trước, bước giá, mốc ngày, trường hợp hoàn hoặc mất tiền gắn đúng điều/khoản như dòng dữ kiện; mức sàn trong Luật (bài S02143) chỉ nhắc khi dòng dữ kiện nêu; không kết luận một phiên đấu giá hay một người cụ thể, không hướng dẫn mẹo trúng đấu giá, không nêu địa chỉ, tài khoản, trang web ngoài dữ kiện, không tư vấn pháp lý. Nêu ngày truy xuất 24 tháng 10 năm 2026 và nhắc tra lại văn bản còn hiệu lực.`,
  ds: `Nhóm Bộ luật Dân sự số 91/2015/QH13 (hiệu lực 01/01/2017; tại 24/10/2026 vbpl.vn ghi còn hiệu lực, không có văn bản sửa đổi theo dòng dữ kiện; Luật 142/2025/QH15 không sửa Bộ luật Dân sự nếu dòng dữ kiện nêu), phần hợp đồng thuê tài sản, theo ĐÚNG VERIFIED_FACTS. Chép đúng câu chữ điều luật; mốc (ba kỳ liên tiếp, thời hạn) gắn đúng điều/khoản và chủ thể (bên cho thuê, bên thuê); không kết luận một chiếc xe, một hợp đồng hay một cơn bão cụ thể thuộc điều nào, không nói ai "sẽ được hoàn tiền" hay "phải đền X", không hướng dẫn cách lách hay né nghĩa vụ, không tư vấn pháp lý, không nêu số tiền ngoài dữ kiện; cơ quan có thẩm quyền xác định từng vụ việc. Nêu ngày truy xuất 24 tháng 10 năm 2026 và nhắc tra lại văn bản còn hiệu lực.`,
  tt: `Nhóm tố tụng dân sự khi kiện đòi tiền cọc hoặc bồi thường: Bộ luật Tố tụng dân sự 92/2015/QH13 theo văn bản hợp nhất 21/VBHN-VPQH (12/02/2026; Điều 35 theo Luật 85/2025/QH15 sửa đổi hiệu lực 01/7/2025; Luật 142/2025/QH15 chỉ sửa điểm g khoản 1 Điều 214 và cụm từ về phá sản), Nghị quyết 326/2016/UBTVQH14 về án phí, lệ phí Tòa án và Luật Hòa giải, đối thoại tại Tòa án 58/2020/QH14 (văn bản hợp nhất 122) theo ĐÚNG VERIFIED_FACTS. Mốc ngày (03, 05, 07 ngày, 01 tháng, 10 ngày), mức án phí (6.000.000 đồng, 5%, 300.000 đồng, giảm 50% ...) chỉ nêu đúng điều/khoản/danh mục như dòng dữ kiện; không tự tính án phí cho một vụ cụ thể, không dự đoán kết quả vụ kiện, không khuyên nên kiện hay không, không hướng dẫn soạn đơn thay người đọc, không tư vấn pháp lý; nói rõ cơ quan, mức cụ thể của từng vụ do Tòa án xác định. Nêu ngày truy xuất 24 tháng 10 năm 2026 và nhắc tra lại văn bản còn hiệu lực.`,
  ph: `Nhóm xử phạt vi phạm hành chính giao thông: Nghị định 168/2024/NĐ-CP (hiệu lực 01/01/2025) và Luật Trật tự, an toàn giao thông đường bộ theo văn bản hợp nhất 55/VBHN-VPQH; Nghị định 238/2026/NĐ-CP (hiệu lực 15/8/2026) chỉ sửa Điều 7 khoản 1 điểm e và khoản 6 điểm b nếu dòng dữ kiện nêu — nơi có bản gốc và bản sửa thì nêu cả hai kèm ngày hiệu lực; theo ĐÚNG VERIFIED_FACTS. Mỗi khung tiền, số điểm trừ, số tháng tước, điểm/khoản gắn đúng hành vi và chủ thể (người điều khiển, người ngồi sau) như dòng dữ kiện; không tự cộng khung, không kết luận một người cụ thể bị phạt bao nhiêu, không hướng dẫn né, không tư vấn pháp lý, không nêu số tiền ngoài dữ kiện. Nêu ngày truy xuất 24 tháng 10 năm 2026 và nhắc tra lại văn bản còn hiệu lực.`,
}

function writerPrompt(s) {
  return `Bạn là writer của AI WIKI TOTAL (repo /home/user/total). Viết ĐÚNG MỘT module bài cho slot ${s.id}.

PACK=${PACK} (khối \`ITEM ${s.id}\`; lấy bằng: awk '/^ITEM ${s.id} /{f=1;print;next} /^ITEM /{f=0} f' ${PACK})
Đọc theo thứ tự và tuân thủ tuyệt đối: (1) ${SP}/WRITER-BRIEF-VERIFIED.md, (2) ${SP}/WRITER-BRIEF-PENALTY.md (phụ lục thủ tục/số liệu, ưu tiên hơn khi khác). Thân bài 1.500–2.300 từ, đúng 5 H2 mỗi H2 4 đoạn, một H2 cuối nêu rõ phần bài chưa đối chiếu. File đích: ${ART}${s.slug}.js

${GRP[s.grp]}
Chung: mỗi con số/mốc/điều khoản phải nằm trong VERIFIED_FACTS của ITEM và gắn đúng sự việc/đối tượng như dòng đó; không suy rộng; bài nêu tên văn bản, số hiệu, điều khoản đã dùng, ngày truy xuất 24 tháng 10 năm 2026 và lời nhắc kiểm tra văn bản còn hiệu lực; dẫn sang bài láng giềng chỉ bằng cụm "bài … trên trang", không URL, không thẻ a. Tự kiểm bằng: cd /home/user/total && node -e "require('./factory/data/articles/${s.slug}.js')" && node factory/factory.js qa-preview ${s.id} (QA ≥ 90, không cảnh báo; chú ý mật độ từ khóa: đừng để từ đầu của keyword như "khoản", "xe", "điều", "phạt", "giao" vượt 3%). TUYỆT ĐỐI không để lộ từ ngữ nội bộ của quy trình trong văn bản bài (người đọc không biết các từ này): không dùng các cụm "dòng dữ kiện", "dòng đã đối chiếu", "dữ kiện đã kiểm chứng", "VERIFIED_FACTS", "ITEM", "RELATED_PUBLISHED"; thay bằng "điều khoản đã đối chiếu", "văn bản"; cũng không dùng "đoạn đã chép", "đoạn đã đọc", "bài chỉ chép". Chỉ tạo file module của bạn; KHÔNG chạy git, KHÔNG sửa file khác, KHÔNG chạy generate/publish. Trả về JSON theo schema: file (đường dẫn tuyệt đối), words (số từ thân bài đếm theo brief), qa (điểm qa-preview), warnings, summary (3–6 câu: điểm rủi ro đã xử lý và bài khác bài láng giềng ở đâu).`
}

const LENSES = [
  { key: 'gan-dung', prompt: (s) => `Bạn là verifier ĐỐI KHÁNG (chỉ đọc, KHÔNG sửa file nào, KHÔNG chạy git). Tìm mọi chỗ trong bài ${s.id} gán sai hoặc không có trong dữ kiện.
Bài: ${ART}${s.slug}.js (in thân bài thuần chữ: cd /home/user/total && node -e "const m=require('./factory/data/articles/${s.slug}.js');const s=x=>String(x||'').replace(/<[^>]+>/g,' ').replace(/\\s+/g,' ');console.log(s(m.quickAnswer));m.keyPoints.forEach(x=>console.log('KP',s(x)));m.sections.forEach(x=>{console.log('## '+x.h2);console.log(s(x.html))});m.warnings.forEach(x=>console.log('W',s(x)))").
Dữ kiện: ${PACK}, khối ITEM ${s.id} (awk '/^ITEM ${s.id} /{f=1;print;next} /^ITEM /{f=0} f' ${PACK}).
Liệt kê MỌI con số (tiền, ngày, giờ, tháng, năm, tuổi, tỷ lệ, lần), Điều/khoản/điểm, tên văn bản/ngày/hiệu lực trong thân bài, quickAnswer, keyPoints, warnings. Với từng mục: (1) có trong VERIFIED_FACTS/SOURCES của ITEM không; (2) trong bài nó có gắn đúng hành vi/đối tượng/điều khoản như dòng dữ kiện chứa nó không (không đảo, không khái quát một điểm thành mọi trường hợp, không bỏ điều kiện/ngoại lệ có trong dòng dữ kiện); (3) điều khoản có bản gốc và bản sửa: bài nêu đúng như dòng dữ kiện chưa. Mỗi sai lệch = issue "high" (sai/gán nhầm/ngoài dữ kiện) hoặc "medium" (mơ hồ dễ hiểu sai). quote = trích nguyên câu; problem; fix = câu sửa tối thiểu. Chỉ báo lỗi THẬT, có thể chỉ ra cụ thể dòng dữ kiện đối chiếu; không báo văn phong. ok=true chỉ khi KHÔNG có issue high/medium.` },
  { key: 'pham-vi-an-toan', prompt: (s) => `Bạn là verifier ĐỐI KHÁNG (chỉ đọc, KHÔNG sửa file nào, KHÔNG chạy git). Tìm mọi chỗ trong bài ${s.id} nói quá phạm vi dữ kiện, tư vấn pháp lý, hướng dẫn né, hoặc sai quy cách.
Bài: ${ART}${s.slug}.js (in thân bài: cd /home/user/total && node -e "const m=require('./factory/data/articles/${s.slug}.js');const s=x=>String(x||'').replace(/<[^>]+>/g,' ').replace(/\\s+/g,' ');console.log(s(m.quickAnswer));m.keyPoints.forEach(x=>console.log('KP',s(x)));m.sections.forEach(x=>{console.log('## '+x.h2);console.log(s(x.html))});m.warnings.forEach(x=>console.log('W',s(x)));console.log('RELATED',m.related.join(','))").
Dữ kiện: ${PACK}, khối ITEM ${s.id} (awk '/^ITEM ${s.id} /{f=1;print;next} /^ITEM /{f=0} f' ${PACK}). Brief: ${SP}/WRITER-BRIEF-VERIFIED.md và ${SP}/WRITER-BRIEF-PENALTY.md.
Kiểm: (a) câu khẳng định điều luật/quy trình/điều kiện/thời hạn/đối tượng KHÔNG có trong VERIFIED_FACTS (kể cả "thông thường", định nghĩa, ví dụ có số liệu); (b) câu mô tả nội dung bài khác trên trang (chỉ được dẫn bằng "bài … trên trang"); (c) số tiền, địa chỉ, hotline, tên cơ quan/ứng dụng ngoài dữ kiện; (d) lời tư vấn kiểu "bạn sẽ/được/không bị…", dự đoán án, kết luận cho tình huống cụ thể, hướng dẫn né nộp phạt/né trách nhiệm; (e) quy cách: đúng 5 H2, mỗi H2 4 đoạn, H2 cuối nêu rõ phần chưa đối chiếu, thân bài 1.500–2.300 từ, related đúng 5 slug nguyên văn từ RELATED_PUBLISHED của ITEM, có ngày truy xuất 24 tháng 10 năm 2026, nếu dòng dữ kiện có nêu dự án luật sửa đổi đang chờ thông qua thì bài nêu đúng như vậy, có câu kết luận từng vụ việc do cơ quan có thẩm quyền xác định và cần tra văn bản còn hiệu lực, không ký tự CJK/Cyrillic/Hangul; (f) tiêu đề/slug khớp ITEM; (g) từ ngữ nội bộ lộ trong bài như \"dòng dữ kiện\", \"dòng đã đối chiếu\", \"dữ kiện đã kiểm chứng\", \"VERIFIED_FACTS\", \"ITEM\" (issue medium, fix = thay bằng \"điều khoản đã đối chiếu\" hoặc \"văn bản\"). Mỗi vi phạm = issue "high" (khẳng định ngoài dữ kiện, tư vấn, dự đoán, số liệu ngoài dữ kiện) hoặc "medium" (quy cách, mơ hồ) hoặc "low" (văn phong). Chỉ báo lỗi THẬT, có thể chỉ ra cụ thể. ok=true chỉ khi KHÔNG có issue high/medium.` },
]

function fixPrompt(s, issues) {
  return `Bạn là người sửa bài ${s.id} (repo /home/user/total). Chỉ sửa file ${ART}${s.slug}.js bằng công cụ Edit (không viết lại cả bài, không chạy git, không sửa file khác).
Các lỗi verifier tìm ra:
${JSON.stringify(issues, null, 1)}
Dữ kiện gốc: ${PACK}, khối ITEM ${s.id} (awk '/^ITEM ${s.id} /{f=1;print;next} /^ITEM /{f=0} f' ${PACK}). Với MỖI lỗi, trước khi sửa hãy tự đối chiếu với dòng VERIFIED_FACTS; nếu lỗi do verifier hiểu sai (bài đã đúng dữ kiện) thì KHÔNG sửa và ghi rõ vì sao. Nếu lỗi thật: sửa TỐI THIỂU (đưa câu về đúng chữ trong VERIFIED_FACTS, hoặc bỏ cụm không có trong dữ kiện, hoặc chuyển thành "bài chưa đối chiếu"); không thêm dữ kiện ngoài ITEM. Giữ đúng 5 H2 mỗi H2 4 đoạn, thân bài 1.500–2.300 từ, giữ nguyên slug/title/related. Sau khi sửa chạy: cd /home/user/total && node -e "require('./factory/data/articles/${s.slug}.js')" && node factory/factory.js qa-preview ${s.id} (QA ≥ 90, không cảnh báo). Trả về JSON: fixed (true nếu mọi lỗi thật đã xử lý), qa, words, notes (từng lỗi: đã sửa thế nào / không sửa vì sao).`
}

async function work(s) {
  let w = null
  for (let a = 0; a < 3 && !w; a++) {
    w = await agent(writerPrompt(s), { label: 'viết ' + s.id, phase: 'Viết', schema: WRITER, agentType: 'general-purpose' })
    if (!w) log(`${s.id}: writer lần ${a + 1} thất bại, thử lại`)
  }
  if (!w) return { id: s.id, status: 'writer-failed' }
  let votes = []
  for (let a = 0; a < 2 && votes.length < LENSES.length; a++) {
    votes = (await parallel(LENSES.map(l => () =>
      agent(l.prompt(s), { label: `kiểm ${l.key} ${s.id}`, phase: 'Kiểm dữ kiện', schema: VERDICT, agentType: 'general-purpose' })))).filter(Boolean)
  }
  if (votes.length < LENSES.length) return { id: s.id, status: 'unverified', file: w.file, words: w.words, qa: w.qa, summary: w.summary }
  const issues = votes.flatMap(v => v.issues).filter(i => i.severity !== 'low')
  if (!issues.length) return { id: s.id, status: 'verified', file: w.file, words: w.words, qa: w.qa, summary: w.summary }
  const f = await agent(fixPrompt(s, issues), { label: `sửa ${s.id}`, phase: 'Sửa', schema: FIX, agentType: 'general-purpose' })
  return { id: s.id, status: f && f.fixed ? 'fixed' : 'fix-incomplete', file: w.file, issues, fix: f }
}

const results = []
for (let i = 0; i < SLOTS.length; i += CHUNK) {
  const group = SLOTS.slice(i, i + CHUNK)
  log(`lô ${Math.floor(i / CHUNK) + 1}: ${group.map(s => s.id).join(', ')}`)
  const out = await parallel(group.map(s => () => work(s)))
  group.forEach((s, j) => results.push(out[j] || { id: s.id, status: 'failed' }))
}
return results
