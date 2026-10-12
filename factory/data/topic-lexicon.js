// AI WIKI TOTAL — Topic Lexicon V2 (dữ liệu thuần, deterministic, không AI/API).
//
// Dùng cho topic-intel/topic-gate để NHẬN DIỆN hoán vị template và gom intent:
//   - wrappers   : khung tiêu đề cố định của pool cũ (“Kinh nghiệm X dành cho người mới”…)
//   - modifiers  : cụm bối cảnh/đối tượng (ngắn ngày, đô thị, người mới…) — KHÔNG tạo ra thông tin mới
//   - aspects    : góc nhìn (giấy tờ, chi phí, hợp đồng…) chia thành TOPICAL (đổi câu trả lời)
//                  và FORMAT (chỉ đổi cách trình bày: FAQ, checklist, hướng dẫn…)
//   - locations  : địa danh — biến thể chỉ khác địa danh bị coi là hoán vị nếu thiếu dữ liệu địa phương đã xác minh
// Từ vựng của Topic Factory V1 được NẠP TRỰC TIẾP từ PROFILES nên không thể lệch.
// Mọi cụm đều ở dạng đã fold (bỏ dấu, chữ thường) — xem foldVi trong topic-intel.js.
'use strict';

const { PROFILES } = require('../lib/topic-factory');

function fold(input) {
  return String(input || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// Âm tiết chức năng — loại khi so khớp nội dung.
// KHÔNG đưa từ phủ định/mức độ vào đây (không, bị, ít, nhiều, quá): “xe nổ máy” ≠ “xe không nổ máy”.
const STOP = new Set([
  'va', 'la', 'cua', 'cho', 'khi', 'trong', 'cac', 'nhung', 'mot', 'nhu', 'nay', 'do', 'duoc', 'co', 'voi',
  'de', 'theo', 'tai', 'tu', 'den', 've', 'se', 'da', 'dang', 'rat', 'hay', 'hoac', 'neu', 'thi', 'ma',
  'cung', 'nen', 'can', 'bang', 'o', 'vao', 'ra', 'len', 'xuong',
  'rang', 'sau', 'truoc', 'tren', 'duoi', 'vi', 'nao', 'gi', 'the', 'viec', 'moi', 'nguoi',
]);

// Từ lấp đầy của khung tiêu đề/template — không mang chủ đề.
const FILLER = new Set([
  'kinh', 'nghiem', 'tong', 'hop', 'kien', 'thuc', 'huong', 'dan', 'chi', 'tiet', 'nhung', 'dieu', 'can', 'biet',
  'danh', 'cho', 'nguoi', 'moi', 'xe', 'may',
]);

// Khung tiêu đề của pool cũ + Topic Factory V1 (regex trên text đã fold).
const WRAPPERS = [
  { id: 'kinh-nghiem-nguoi-moi', re: /^kinh nghiem (.+) danh cho nguoi moi$/ },
  { id: 'tong-hop-kien-thuc', re: /^tong hop kien thuc (.+)$/ },
  { id: 'huong-dan-chi-tiet', re: /^huong dan chi tiet ve (.+)$/ },
  { id: 'nhung-dieu-can-biet', re: /^(.+) nhung dieu can biet$/ },
];

// FORMAT aspects: chỉ đổi hình thức trình bày — cùng câu hỏi, cùng câu trả lời.
const FORMAT_ASPECT_IDS = new Set([
  'huong-dan', 'checklist', 'faq', 'kinh-nghiem', 'tong-quan', 'tung-buoc', 'thuc-hanh', 'quy-trinh', 'luu-y', 'thuc-te',
]);

// Từ khóa chủ đề → TOPICAL aspect (đổi nội dung câu trả lời).
const TOPICAL_VOCAB = {
  paperwork: ['giay to', 'thu tuc', 'ho so'],
  cost: ['chi phi', 'gia ca', 'bao nhieu tien'],
  inspection: ['kiem tra', 'nghiem thu', 'soat xe'],
  contract: ['hop dong', 'dieu khoan'],
  deposit: ['dat coc', 'tien coc'],
  risk: ['rui ro', 'lua dao'],
  return: ['hoan tra', 'tra xe'],
  compare: ['so sanh', 'lua chon'],
};

// Chuẩn hóa id góc nhìn của Topic Factory V1 về cùng một bộ id với TOPICAL_VOCAB,
// để “thủ tục và giấy tờ” (V1) và “Giấy tờ thuê xe” (viết tay) rơi vào cùng intent.
const ANGLE_ID_CANON = {
  'thu-tuc': 'paperwork', 'chi-phi': 'cost', 'kiem-tra': 'inspection', 'hop-dong': 'contract',
  'rui-ro': 'risk', 'so-sanh': 'compare', 'tra-xe': 'return', 'dat-coc': 'deposit', 'gia': 'cost',
};

const LOCATIONS = [
  'ha noi', 'sai gon', 'ho chi minh', 'tp hcm', 'da nang', 'hai phong', 'can tho', 'hue', 'nha trang', 'da lat',
  'sa pa', 'ha giang', 'phu quoc', 'vung tau', 'quang ninh', 'ninh binh', 'mien nui', 'nong thon', 'phan thiet',
  'quy nhon', 'con dao', 'mui ne', 'moc chau', 'dong van', 'cao bang', 'lao cai', 'thanh hoa', 'nghe an',
];

// Tín hiệu cần DỮ LIỆU ĐÃ XÁC MINH (luật, giá, thông số, tin mới): chạy trên text chữ thường
// còn dấu (tránh nhầm “thuê”/“thuế” sau khi fold). Có tín hiệu mà thiếu bằng chứng -> NEEDS-RESEARCH.
const RISK_TRIGGERS = {
  legal: /thuế|lệ phí|phí trước bạ|nghị định|thông tư|quy định|luật |mức phạt|xử phạt|giấy phép lái xe|bằng lái|đăng kiểm|biển số|bảo hiểm bắt buộc|điều kiện được phép|cần bằng/iu,
  price: /bảng giá|giá bao nhiêu|(?<!đánh\s)(?<![\p{L}])giá(?![\p{L}])|chi phí|\d+\s?(k|triệu|nghìn|đồng|vnđ)(?![\p{L}])/iu,
  spec: /dung tích|công suất|mô-men|mô men|tiêu hao|thông số|kích thước|trọng lượng|quãng đường|phạm vi hoạt động|dung lượng pin|(?<![\p{L}])cc(?![\p{L}])|km\/h|kwh|thời gian sạc/iu,
  news: /mới nhất|hôm nay|năm 20\d\d|vừa ra mắt|cập nhật mới|tin tức/iu,
};

// ---- nạp từ vựng template của Topic Factory V1 ----
const modifierPhrases = new Set();
const angleAspect = new Map(); // phrase(fold) -> {id, kind}
for (const profile of Object.values(PROFILES)) {
  for (const [, label] of profile.contexts) modifierPhrases.add(fold(label));
  for (const [id, label] of profile.angles) {
    const phrase = fold(label);
    if (!angleAspect.has(phrase)) angleAspect.set(phrase, { id: ANGLE_ID_CANON[id] || id, kind: FORMAT_ASPECT_IDS.has(id) ? 'format' : 'topical' });
  }
}
// Bối cảnh rời (khi đứng một mình sau dấu ':' hoặc cuối tiêu đề).
for (const p of ['nguoi moi', 'ngan ngay', 'dai ngay', 'duong dai', 'do thi', 'thuc te', 'hang ngay', 'mua mua', 'xe cu', 'xe pho thong']) {
  modifierPhrases.add(p);
}

const MODIFIERS = [...modifierPhrases].sort((a, b) => b.length - a.length);
const ANGLE_PHRASES = [...angleAspect.keys()].sort((a, b) => b.length - a.length);

module.exports = {
  fold, STOP, FILLER, WRAPPERS, FORMAT_ASPECT_IDS, TOPICAL_VOCAB, ANGLE_ID_CANON, LOCATIONS, RISK_TRIGGERS,
  MODIFIERS, ANGLE_PHRASES, ANGLE_ASPECT: angleAspect,
};
