// Tên riêng / viết tắt trong TIÊU ĐỀ công khai.
// V1 hạ chữ thường toàn bộ phần chủ đề của seed ("thuê honda vision", "đi xe ở hà nội", "abs xe máy") nên H1 sai chính tả tên riêng.
// Bảng BẢO THỦ: chỉ những token không thể nhầm với từ thường trong tiêu đề tiếng Việt (địa danh, hãng/mẫu xe, quốc gia/vùng, viết tắt kỹ thuật).
// Một nguồn duy nhất cho detector (topic-audit) và công cụ sửa; không tự mở rộng bảng nếu chưa đọc hết tiêu đề bị ảnh hưởng.
'use strict';

const TABLE = [
  // địa danh
  ['hà nội', 'Hà Nội'], ['sài gòn', 'Sài Gòn'], ['đà nẵng', 'Đà Nẵng'], ['hải phòng', 'Hải Phòng'], ['cần thơ', 'Cần Thơ'],
  ['nha trang', 'Nha Trang'], ['đà lạt', 'Đà Lạt'], ['tp hcm', 'TP HCM'], ['việt nam', 'Việt Nam'],
  ['miền bắc', 'miền Bắc'], ['miền trung', 'miền Trung'], ['miền nam', 'miền Nam'],
  // hãng xe
  ['honda', 'Honda'], ['yamaha', 'Yamaha'], ['suzuki', 'Suzuki'], ['sym', 'SYM'], ['vespa', 'Vespa'], ['piaggio', 'Piaggio'],
  ['vinfast', 'VinFast'], ['kymco', 'Kymco'], ['kawasaki', 'Kawasaki'],
  // mẫu xe
  ['vision', 'Vision'], ['air blade', 'Air Blade'], ['wave', 'Wave'], ['sirius', 'Sirius'], ['grande', 'Grande'], ['janus', 'Janus'],
  ['address', 'Address'], ['angela', 'Angela'], ['elegant', 'Elegant'], ['liberty', 'Liberty'], ['winner x', 'Winner X'], ['gd', 'GD'],
  // viết tắt kỹ thuật
  ['abs', 'ABS'], ['cvt', 'CVT'], ['ecu', 'ECU'], ['gps', 'GPS'],
];

const MAP = new Map(TABLE);
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s+');
const SRC = TABLE.map(x => x[0]).sort((a, b) => b.length - a.length).map(esc).join('|');
// ranh giới trái/phải: đầu chuỗi, khoảng trắng hoặc dấu câu — KHÔNG khớp giữa từ (vd. "gd110", "abstract")
const re = () => new RegExp('(^|[\\s:—,(-])(' + SRC + ')(?=[\\s:—,.)-]|$)', 'gu');
const norm = tok => tok.replace(/\s+/g, ' ');

// Các token viết thường cần viết hoa trong tiêu đề (theo thứ tự xuất hiện).
function lowercaseProperNouns(title) {
  const out = [];
  const r = re();
  const t = String(title || '');
  let m;
  while ((m = r.exec(t))) { out.push(norm(m[2])); r.lastIndex = m.index + m[1].length + m[2].length; }
  return out;
}

// Viết hoa đúng các token trên; KHÔNG đổi gì khác (so sánh không phân biệt hoa/thường luôn bằng nhau).
function fixTitle(title) {
  return String(title || '').replace(re(), (m, pre, tok) => pre + MAP.get(norm(tok)));
}

// Lời nhắc cho writer lúc verify-batch (ADVISORY, không chặn publish): chuỗi rỗng nếu tiêu đề ổn.
function advisory(title) {
  const low = [...new Set(lowercaseProperNouns(title))];
  return low.length ? 'tiêu đề có tên riêng/viết tắt viết thường: ' + low.join(', ') + ' (nên viết hoa: ' + low.map(x => MAP.get(x)).join(', ') + ')' : '';
}

module.exports = { TABLE, lowercaseProperNouns, fixTitle, advisory };
