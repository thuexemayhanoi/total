#!/usr/bin/env node
// AI WIKI TOTAL — kiểm thử TOPIC FACTORY V2 (4 tầng: Unit → Integration → Production invariant → Long-run/Failure recovery).
//
// Mục tiêu hợp đồng (xem docs/TOPIC-FACTORY-V2.md):
//   * hoán vị template (khung/bối cảnh/địa danh/đối tượng) KHÔNG thể đi qua gate để thành topic mới;
//   * topic chỉ thành slot khi coordinator DUYỆT (ack cảnh báo + xác nhận đã đọc láng giềng gần nhất);
//   * writer-pack/verify/publish chỉ nhận slot đã APPROVED khi governance=enforce; rollback = file điều khiển;
//   * mọi lỗi dữ liệu (dòng JSONL hỏng, cache SQLite hỏng, crash giữa slot↔row) fail-closed và tự phục hồi được;
//   * không bịa nhu cầu tìm kiếm / bằng chứng; state thật KHÔNG đổi sau suite.
//
// Fixture CLI chạy trên MICRO-REPO trong tmp (engine thật + corpus giả lập nhỏ, quyết định được) nên kết quả không
// phụ thuộc corpus thật; tầng Production invariant chạy READ-ONLY trên repo thật.
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const I = require('./lib/topic-intel');
const G = require('./lib/topic-gate');
const M = require('./lib/topic-matrix');
const Gov = require('./lib/topic-governance');
const T = require('./topic');
const IDX = require('./lib/indexing');
const GEN = require('./generate');

let pass = 0, fail = 0;
function ok(cond, name, detail) {
  if (cond) pass++;
  else { fail++; console.log(`  ✗ ${name}${detail ? ' — ' + detail : ''}`); }
}
function same(a, b, name) { ok(JSON.stringify(a) === JSON.stringify(b), name, 'nhận ' + JSON.stringify(a) + ' ≠ ' + JSON.stringify(b)); }
const readB = f => fs.readFileSync(f);
const readS = f => fs.readFileSync(f, 'utf8');
const readJ = f => JSON.parse(readS(f));
const metrics = {};

console.log('=== KIỂM THỬ TOPIC FACTORY V2 ===');

// State thật TRƯỚC suite (byte-exact) — cuối suite phải KHÔNG đổi.
const REAL_FILES = ['state/matrix.json', 'state/factory-state.json', 'state/checkpoint.json', 'state/topic-matrix.jsonl', 'topic-governance.json']
  .map(f => path.join(ROOT, 'factory', f));
const REAL_SNAPSHOT = REAL_FILES.map(f => ({ f, b: fs.existsSync(f) ? readB(f) : null }));

// ---------------------------------------------------------------------------
// Hạ tầng micro-repo
// ---------------------------------------------------------------------------
const GOV_ENFORCE = { schemaVersion: 1, mode: 'enforce', v1Generation: 'frozen', requireApproved: true, maxApprovedQueue: 50, thresholds: {} };
const GOV_OFF = { schemaVersion: 1, mode: 'off', v1Generation: 'allowed' };
const NOW = '2026-10-01T00:00:00.000Z';

function art(slug, title, hub, h2s, keywords, text) {
  const [category, hubSlug] = hub.split('/');
  const p = '<p>' + (text || 'Nội dung kiểm thử.') + '</p>';
  return {
    slug, title, category, hub: hubSlug, summary: text || 'Tóm tắt kiểm thử cho ' + title, quickAnswer: 'Trả lời nhanh kiểm thử.',
    keywords, entities: [], sections: h2s.map(h => ({ h2: h, html: p })), related: [],
  };
}
// Corpus nhỏ, quyết định được: 6 bài đã xuất bản + 2 slot legacy (S00007 hoán vị, S00008 có module bài).
const MICRO = [
  ['S00001', 'thay-nhot-xe-may', 'Thay nhớt xe máy: chu kỳ và cách thực hiện', 'guide/bao-duong', ['Chu kỳ thay nhớt', 'Chọn loại nhớt', 'Các bước thay nhớt', 'Lỗi thường gặp'], ['thay nhớt xe máy']],
  ['S00002', 'giay-to-thue-xe-may', 'Giấy tờ thuê xe máy: cần chuẩn bị những gì', 'thue-xe/xe-may', ['Giấy tờ tùy thân', 'Giấy phép lái xe', 'Đặt cọc bằng giấy tờ', 'Bản sao và bản gốc'], ['giấy tờ thuê xe máy']],
  ['S00003', 'sac-pin-xe-dien', 'Sạc pin xe điện đúng cách', 'thue-xe/xe-dien', ['Sạc đầy hay sạc một phần', 'Nhiệt độ khi sạc', 'Bộ sạc chính hãng', 'Dấu hiệu pin chai'], ['sạc pin xe điện']],
  ['S00004', 'thue-xe-may-ha-noi-thu-tuc', 'Thuê xe máy Hà Nội: thủ tục', 'thue-xe/xe-may', ['Thủ tục nhận xe', 'Điều khoản hợp đồng'], ['thuê xe máy hà nội']],
  ['S00005', 'mu-bao-hiem-dat-chuan', 'Mũ bảo hiểm đạt chuẩn: cách nhận biết khi mua', 'review/review-mu-bao-hiem', ['Tem hợp quy', 'Vật liệu vỏ mũ', 'Quai và khóa', 'Mũ giả dễ nhận ra'], ['mũ bảo hiểm đạt chuẩn']],
  ['S00006', 'phanh-dia-xe-may', 'Phanh đĩa xe máy: cấu tạo và dấu hiệu mòn', 'garage/phanh', ['Cấu tạo phanh đĩa', 'Dấu hiệu má phanh mòn', 'Cách kiểm tra dầu phanh', 'Khi nào cần thay'], ['phanh đĩa xe máy']],
];
const LEGACY = [
  ['S00007', 'kinh-nghiem-thay-nhot-xe-may-cho-nguoi-moi', 'Kinh nghiệm thay nhớt xe máy dành cho người mới', 'guide/bao-duong', 'topic-factory-v1 permutation', false],
  ['S00008', 'loc-gio-xe-may', 'Lọc gió xe máy: khi nào cần thay', 'garage/dong-co', 'legacy handwritten', true],
];

function copyTree(src, dst, skip, rel) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.name === 'node_modules' || skip(r)) continue;
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) copyTree(s, d, skip, r);
    else fs.copyFileSync(s, d);
  }
}
const SKIP_STATE = /^state\/(matrix\.json|topic-matrix\.jsonl|article-manifest\.jsonl|manifest\.json|.*\.(sqlite|sqlite-journal|sqlite-wal|sqlite-shm|tmp)|writer\.lock|txn\.json)$/;

// micro-repo: engine thật + state/corpus giả lập. opts.gov: nội dung topic-governance.json (null = không có file).
function microRepo(tag, opts) {
  const o = opts || {};
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'topicv2-' + tag + '-'));
  copyTree(path.join(ROOT, 'factory'), path.join(tmp, 'factory'), r => r === 'data/articles' || SKIP_STATE.test(r), '');
  const E = { root: tmp, p: rel => path.join(tmp, 'factory', ...rel.split('/')) };
  fs.mkdirSync(E.p('data/articles'), { recursive: true });
  const slots = [];
  const add = (id, slug, title, hub, state, notes) => slots.push({
    id, hub, slug, title, primaryIntent: 'informational/' + slug, notes: notes || '', state, qaScore: state === 'PUBLISHED' ? 100 : null,
    attempts: state === 'PUBLISHED' ? 1 : 0, createdAt: NOW, updatedAt: NOW,
  });
  for (const [id, slug, title, hub, h2s, kw] of MICRO) {
    add(id, slug, title, hub, 'PUBLISHED');
    fs.writeFileSync(E.p('data/articles/' + slug + '.js'), 'module.exports = ' + JSON.stringify(art(slug, title, hub, h2s, kw)) + ';\n');
  }
  for (const [id, slug, title, hub, notes, withArticle] of LEGACY) {
    add(id, slug, title, hub, 'PLANNED', notes);
    if (withArticle) fs.writeFileSync(E.p('data/articles/' + slug + '.js'), 'module.exports = ' + JSON.stringify(art(slug, title, hub, ['Khi nào cần thay lọc gió', 'Cách thay lọc gió', 'Lỗi thường gặp', 'Kiểm tra sau khi thay'], ['lọc gió xe máy'])) + ';\n');
  }
  const real = readJ(path.join(ROOT, 'factory', 'state', 'matrix.json'));
  const matrix = { version: real.version, capacity: real.capacity, plannedTarget: real.plannedTarget, reserved: real.reserved, slots };
  fs.writeFileSync(E.p('state/matrix.json'), JSON.stringify(matrix, null, 1));
  fs.writeFileSync(E.p('state/checkpoint.json'), JSON.stringify({ at: NOW, action: 'micro', slotCount: slots.length }, null, 1));
  fs.writeFileSync(E.p('state/factory-state.json'), JSON.stringify({ version: 1, slots: [], lastAction: { action: 'micro', at: NOW } }, null, 1));
  if (o.gov !== null) fs.writeFileSync(E.p('topic-governance.json'), JSON.stringify(o.gov || GOV_ENFORCE, null, 1));
  else if (fs.existsSync(E.p('topic-governance.json'))) fs.unlinkSync(E.p('topic-governance.json'));
  return E;
}
function cli(E, args, env) {
  try {
    const stdout = execFileSync(process.execPath, [E.p('factory.js'), ...args], {
      cwd: E.root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024, env: Object.assign({}, process.env, env || {}),
    });
    return { status: 0, out: stdout, stdout, stderr: '' };
  } catch (e) {
    const stdout = e.stdout || '';
    const stderr = e.stderr || String((e && e.message) || e);
    return { status: typeof e.status === 'number' ? e.status : 1, out: stdout + stderr, stdout, stderr };
  }
}
const COORD = ['--role', 'coordinator'];
const stateFiles = E => ['state/matrix.json', 'state/topic-matrix.jsonl', 'state/factory-state.json', 'state/checkpoint.json'].map(f => ({ f, b: fs.existsSync(E.p(f)) ? readB(E.p(f)) : null }));
function stateSame(E, snap) { return snap.every(s => (s.b === null ? !fs.existsSync(E.p(s.f)) : fs.existsSync(E.p(s.f)) && readB(E.p(s.f)).equals(s.b))); }
const matrixOf = E => readJ(E.p('state/matrix.json'));
const rowsOf = E => M.readRows(E.p('state/topic-matrix.jsonl')).rows;
function writeCands(E, name, list) { const f = path.join(E.root, name); fs.writeFileSync(f, list.map(c => JSON.stringify(c)).join('\n') + '\n'); return f; }
function parseIds(out) { const m = new Map(); for (const l of out.split('\n')) { const x = /^(\S+)\s+(T\d{6,})\s+(\S+)/.exec(l); if (x) m.set(x[3], { verdict: x[1], id: x[2] }); } return m; }

// Ứng viên chuẩn (hợp lệ hình dạng, độc lập chủ thể): ghi đè từng trường để tạo biến thể.
function cand(o) {
  return Object.assign({
    slug: 'bugi-xe-may-bi-dong-muoi', title: 'Bugi xe máy bị đóng muội: dấu hiệu nhận biết và cách vệ sinh', hub: 'garage/dong-co',
    intent: 'troubleshooting', contentType: 'troubleshooting', priority: 'P1',
    primaryKeyword: 'bugi xe máy bị đóng muội', secondaryKeywords: ['vệ sinh bugi xe máy'],
    userProblem: 'Xe nổ không đều, hao xăng và người dùng nghi bugi bẩn nhưng không biết nhìn màu muội để kết luận.',
    informationGain: 'Đọc màu muội trên điện cực bugi để suy ra tình trạng đốt cháy, kèm quy trình vệ sinh an toàn và khi nào phải thay thay vì cố vệ sinh.',
    outline: ['Muội bugi là gì và vì sao hình thành', 'Đọc màu muội: đen, trắng, nâu', 'Vệ sinh bugi tại nhà an toàn', 'Khi nào phải thay bugi', 'Lỗi thường gặp khi tháo lắp bugi'],
    evidence: { type: 'editorial-gap', status: 'unverified', sources: [] }, demand: { source: 'none' }, factualScope: 'no-figures',
  }, o || {});
}
const FIX = {
  bugi: cand(),
  guong: cand({
    slug: 'guong-chieu-hau-bi-rung', title: 'Gương chiếu hậu xe máy bị rung khi chạy nhanh: nguyên nhân và cách siết lại', hub: 'garage/truyen-dong',
    primaryKeyword: 'gương chiếu hậu xe máy bị rung', secondaryKeywords: ['siết gương xe máy'],
    userProblem: 'Gương rung làm hình ảnh phía sau nhòe khi chạy nhanh, người dùng không biết rung do ốc lỏng, ổ bi gương hay tay lái.',
    informationGain: 'Phân biệt rung do ốc chân gương lỏng, khớp xoay mòn và do rung tay lái; thứ tự siết đúng và dấu hiệu cần thay gương.',
    outline: ['Vì sao gương bị rung', 'Phân biệt ốc lỏng, khớp xoay mòn và rung tay lái', 'Siết lại chân gương đúng thứ tự', 'Khi nào phải thay gương', 'Kiểm tra góc nhìn sau khi lắp'],
  }),
  denHau: cand({
    slug: 'den-hau-xe-may-chap-chon', title: 'Đèn hậu xe máy chập chờn: tìm lỗi từ giắc cắm đến bóng đèn', hub: 'garage/dien-ac-quy',
    primaryKeyword: 'đèn hậu xe máy chập chờn', secondaryKeywords: ['đèn phanh chớp tắt'],
    userProblem: 'Đèn hậu lúc sáng lúc tắt khiến người đi sau khó nhận biết, người dùng không biết kiểm tra từ đâu.',
    informationGain: 'Quy trình dò lỗi theo thứ tự từ giắc cắm, mass điện, bóng đèn đến công tắc phanh, kèm cách đo thông mạch bằng đồng hồ vạn năng.',
    outline: ['Dấu hiệu đèn hậu chập chờn', 'Kiểm tra giắc cắm và dây điện', 'Kiểm tra mass và bóng đèn', 'Kiểm tra công tắc đèn phanh', 'Khi nào nên đưa xe đến thợ'],
  }),
  khoaDia: cand({
    slug: 'chon-khoa-dia-chong-trom', title: 'Chọn khóa đĩa chống trộm xe máy: cơ cấu khóa, độ dày chốt và cách dùng đúng', hub: 'guide/su-dung-xe', intent: 'informational', contentType: 'guide',
    primaryKeyword: 'khóa đĩa chống trộm xe máy', secondaryKeywords: ['chọn khóa đĩa xe máy'],
    userProblem: 'Người dùng muốn gắn thêm khóa đĩa nhưng không biết khóa nào cắt khó, khóa nào chỉ là hình thức.',
    informationGain: 'So sánh cơ cấu khóa, độ dày chốt và vật liệu theo khả năng chống cắt, kèm lỗi thường gặp khi dùng khiến khóa mất tác dụng.',
    outline: ['Khóa đĩa bảo vệ xe thế nào', 'Cơ cấu khóa và ruột khóa', 'Độ dày chốt và vật liệu', 'Cách khóa đúng và sai thường gặp', 'Kết hợp với biện pháp chống trộm khác'],
  }),
  chanChong: cand({
    slug: 'chan-chong-ngang-bi-long', title: 'Chân chống ngang xe máy bị lỏng: dấu hiệu và cách kiểm tra lò xo hồi vị', hub: 'garage/truyen-dong',
    primaryKeyword: 'chân chống ngang xe máy bị lỏng', secondaryKeywords: ['lò xo chân chống'],
    userProblem: 'Chân chống không tự cụp lại khi chạy gây nguy hiểm khi vào cua, người dùng không biết kiểm tra lò xo và công tắc.',
    informationGain: 'Hướng dẫn kiểm tra lò xo hồi vị, bu lông trục và công tắc cảm biến chân chống, kèm dấu hiệu nguy hiểm cần dừng xe ngay.',
    outline: ['Vì sao chân chống phải tự cụp', 'Kiểm tra lò xo hồi vị', 'Kiểm tra bu lông trục chân chống', 'Công tắc cảm biến chân chống', 'Dấu hiệu cần dừng xe ngay'],
  }),
  // sẽ bị biên tập MERGE (cùng câu hỏi với phanh-dia-xe-may khác từ ngữ) — gate từ vựng cho qua, người duyệt chặn
  reviewMe: cand({
    slug: 'ma-phanh-mon-den-muc-nao-phai-thay', title: 'Má phanh xe máy mòn đến mức nào thì phải thay mới', hub: 'garage/phanh',
    primaryKeyword: 'má phanh xe máy mòn', secondaryKeywords: ['khi nào thay má phanh'],
    userProblem: 'Người dùng không biết bề dày má phanh còn lại bao nhiêu thì nguy hiểm và nên thay.',
    informationGain: 'Cách đo bề dày má phanh bằng mắt thường và dấu hiệu tiếng kêu, cảm giác tay phanh báo hiệu phải thay trước khi hỏng đĩa.',
    outline: ['Má phanh mòn ảnh hưởng gì', 'Cách nhìn độ mòn bằng mắt', 'Tiếng kêu và cảm giác tay phanh', 'Hậu quả khi để mòn tới mức kim loại', 'Thay má phanh đúng thời điểm'],
  }),
  dupWrapper: cand({
    slug: 'kinh-nghiem-thay-nhot-xe-may-nguoi-moi-v2', title: 'Kinh nghiệm thay nhớt xe máy dành cho người mới', hub: 'guide/bao-duong', primaryKeyword: 'thay nhớt xe máy', intent: 'informational', contentType: 'guide',
    userProblem: 'Người mới chưa biết thay nhớt xe máy cần chuẩn bị gì và làm theo các bước nào cho đúng.',
    informationGain: 'Hướng dẫn từng bước thay nhớt tại nhà cho người mới, từ chuẩn bị dụng cụ đến xả nhớt cũ và châm nhớt mới.',
    outline: ['Chuẩn bị dụng cụ và nhớt', 'Xả nhớt cũ đúng cách', 'Châm nhớt mới đúng mức', 'Kiểm tra rò rỉ sau khi thay', 'Xử lý nhớt cũ an toàn'],
  }),
  dupLocation: cand({
    slug: 'thue-xe-may-da-nang-thu-tuc', title: 'Thuê xe máy Đà Nẵng: thủ tục', hub: 'thue-xe/xe-may', intent: 'commercial', contentType: 'checklist', primaryKeyword: 'thuê xe máy đà nẵng thủ tục',
    outline: ['Thủ tục nhận xe tại điểm giao', 'Điều khoản hợp đồng cần đọc', 'Đặt cọc và hoàn cọc', 'Trả xe và nghiệm thu', 'Lưu ý trước khi ký hợp đồng'],
  }),
  rewrite: cand({
    slug: 'gioi-thieu-lop-xe-may-ngan', title: 'Giới thiệu về lốp xe máy cho người dùng phổ thông', hub: 'garage/lop', intent: 'informational', contentType: 'guide',
    primaryKeyword: 'lốp xe máy', secondaryKeywords: ['giới thiệu lốp xe máy'],
    userProblem: 'Người dùng phổ thông chưa biết lốp xe máy gồm những thành phần nào và đọc thông số in trên thành lốp ra sao.',
    informationGain: 'Giải thích các thành phần của lốp và cách đọc ký hiệu in trên thành lốp để chọn đúng loại khi thay.',
    outline: ['Một', 'Hai'],
  }),
  research: cand({
    slug: 'muc-phat-khong-doi-mu-bao-hiem', title: 'Mức phạt không đội mũ bảo hiểm: người điều khiển và người ngồi sau', hub: 'guide/thu-tuc-xe', intent: 'informational', contentType: 'reference',
    primaryKeyword: 'mức phạt không đội mũ bảo hiểm', secondaryKeywords: ['xử phạt không đội mũ'],
    userProblem: 'Người đi xe không rõ ai bị xử phạt khi không đội mũ bảo hiểm và mức xử phạt hiện hành là bao nhiêu.',
    informationGain: 'Tổng hợp theo văn bản chính thức: đối tượng bị xử phạt, mức phạt, trường hợp được miễn và cách khiếu nại biên bản.',
    outline: ['Ai bị xử phạt', 'Mức xử phạt theo quy định hiện hành', 'Trường hợp được miễn', 'Cách nộp phạt', 'Quyền khiếu nại'], factualScope: undefined,
  }),
};

// ===========================================================================
// TẦNG 1 — UNIT (thuần, không I/O)
// ===========================================================================
console.log('1. UNIT — intent key, hoán vị, risk trigger, shape, gate, governance, matrix, CSV…');
{
  const key = t => I.analyzeTopic(t).intentKey;
  // khung template cũ cùng một chủ thể
  const wr = ['Kinh nghiệm pin xe điện dành cho người mới', 'Tổng hợp kiến thức pin xe điện', 'Hướng dẫn chi tiết về pin xe điện', 'Pin xe điện — những điều cần biết'];
  ok(new Set(wr.map(key)).size === 1, 'bốn khung template của pool cũ cùng một intent key', wr.map(key).join(' | '));
  ok(I.analyzeTopic(wr[0]).templated && I.analyzeTopic(wr[3]).wrapper === 'nhung-dieu-can-biet', 'nhận diện wrapper/templated');
  // đồng nghĩa topical
  ok(key('Giá cả thuê xe máy') === key('Chi phí thuê xe máy'), 'giá cả ≡ chi phí (cùng topical cost)');
  ok(key('Giấy tờ thuê xe máy') === key('Thủ tục thuê xe máy'), 'giấy tờ ≡ thủ tục (paperwork)');
  ok(key('Đặt cọc thuê xe máy') === key('Tiền cọc thuê xe máy'), 'đặt cọc ≡ tiền cọc');
  ok(key('Rủi ro khi thuê xe máy') === key('Lừa đảo khi thuê xe máy'), 'rủi ro ≡ lừa đảo');
  ok(key('Kiểm tra xe trước khi thuê') === key('Nghiệm thu xe trước khi thuê'), 'kiểm tra ≡ nghiệm thu (inspection)');
  ok(key('So sánh xe số và xe tay ga') === key('Lựa chọn xe số hay xe tay ga'), 'so sánh ≡ lựa chọn (compare)');
  // bối cảnh/đối tượng/format KHÔNG đổi câu trả lời
  ok(key('Giấy tờ thuê xe máy cho người mới') === key('Giấy tờ thuê xe máy'), 'đối tượng “cho người mới” bị bỏ qua');
  ok(key('Giấy tờ thuê xe máy: checklist từng bước') === key('Giấy tờ thuê xe máy'), 'format “checklist từng bước” bị bỏ qua');
  ok(I.analyzeTopic('Giấy tờ thuê xe máy: checklist từng bước').sigKey !== I.analyzeTopic('Giấy tờ thuê xe máy').sigKey, 'nhưng sigKey phân biệt hình thức');
  // khác intent thật
  ok(key('Chi phí thuê xe máy') !== key('Giấy tờ thuê xe máy'), 'topical khác nhau => intent khác nhau');
  ok(key('Xe máy không nổ máy') !== key('Xe máy nổ máy'), 'phủ định giữ nghĩa: “không nổ máy” ≠ “nổ máy”');
  ok(key('Thuê xe máy Hà Nội: thủ tục') !== key('Thuê xe máy Đà Nẵng: thủ tục'), 'địa danh nằm trong intent key');
  same(I.analyzeTopic('Thuê xe máy Hà Nội').locations, ['ha noi'], 'nhận diện địa danh');
  ok(I.isTemplatePermutation(I.analyzeTopic(wr[0]), I.analyzeTopic(wr[1])), 'isTemplatePermutation đúng với cặp cùng intent');
  ok(!I.isTemplatePermutation(I.analyzeTopic('Chi phí thuê xe máy'), I.analyzeTopic('Giấy tờ thuê xe máy')), 'isTemplatePermutation sai với cặp khác intent');
  ok(I.fold('Đà Nẵng — Đường Hồ Chí Minh') === 'da nang duong ho chi minh', 'fold bỏ dấu + đ');

  // tín hiệu rủi ro (không dương tính giả)
  const rt = c => G.riskTriggers(c);
  same(rt({ title: 'Đánh giá xe', userProblem: 'cần bằng chứng' }), [], 'riskTriggers: “đánh giá”, “cần bằng chứng” không phải giá/luật');
  ok(rt({ title: 'Giá thuê xe máy' }).includes('price'), 'riskTriggers: “giá” là price');
  ok(!rt({ title: 'Giá thuê xe máy', factualScope: 'no-figures' }).includes('price'), 'factualScope=no-figures bỏ trigger price');
  ok(rt({ title: 'Mức phạt khi không đội mũ bảo hiểm' }).includes('legal'), 'riskTriggers: mức phạt là legal');
  ok(rt({ title: 'Xe 50cc cần bằng lái không' }).includes('spec') && rt({ title: 'Xe 50cc cần bằng lái không' }).includes('legal'), 'riskTriggers: 50cc là spec, bằng lái là legal');
  ok(rt({ title: 'Mô-men xoắn là gì' }).includes('spec'), 'riskTriggers: mô-men là spec');
  ok(rt({ title: 'Thông tin cập nhật mới nhất' }).includes('news'), 'riskTriggers: “mới nhất” là news');
  same(rt({ title: 'Xe máy rung tay lái', requiresVerifiedData: true }), ['declared'], 'requiresVerifiedData khai báo');

  // hình dạng ứng viên
  const hubs = new Set(['garage/dong-co', 'garage/phanh', 'guide/bao-duong']);
  const T0 = G.DEFAULT_THRESHOLDS;
  const shape = c => G.shapeProblems(c, T0, hubs).map(x => x[0]);
  same(shape(cand()), [], 'ứng viên chuẩn không có lỗi hình dạng');
  ok(shape(cand({ title: 'Ngắn quá' })).includes('title-length'), 'shape: title quá ngắn');
  ok(shape(cand({ slug: 'Sai Slug' })).includes('slug-format'), 'shape: slug sai format');
  ok(shape(cand({ hub: 'abc/xyz' })).includes('hub-unknown'), 'shape: hub ngoài taxonomy (không tự thêm hub)');
  ok(shape(cand({ intent: 'abc' })).includes('intent-invalid') && shape(cand({ contentType: 'abc' })).includes('content-type-invalid'), 'shape: intent/contentType sai');
  ok(shape(cand({ primaryKeyword: '' })).includes('keyword-missing'), 'shape: thiếu primaryKeyword');
  ok(shape(cand({ primaryKeyword: 'khóa đĩa chống trộm' })).includes('keyword-not-in-title-or-outline'), 'shape: keyword không có trong title/outline');
  ok(shape(cand({ userProblem: 'ngắn' })).includes('user-problem-missing'), 'shape: thiếu vấn đề thật của người đọc');
  ok(shape(cand({ informationGain: 'ngắn' })).includes('info-gain-missing'), 'shape: thiếu information gain');
  ok(shape(cand({ informationGain: 'Cung cấp thông tin hữu ích và những điều cần biết cho người đọc về chủ đề này.' })).includes('info-gain-boilerplate'), 'shape: information gain sáo rỗng');
  ok(shape(cand({ informationGain: 'Bugi xe máy bị đóng muội: dấu hiệu nhận biết và cách vệ sinh bugi xe máy bị đóng muội.' })).includes('info-gain-thin'), 'shape: information gain chỉ lặp title');
  ok(shape(cand({ outline: ['Một', 'Hai'] })).includes('outline-invalid'), 'shape: outline thiếu/ngắn');
  ok(shape(cand({ outline: ['Vệ sinh bugi tại nhà an toàn', 'Vệ sinh bugi tại nhà an toàn nhé', 'Đọc màu muội trên bugi', 'Khi nào thay bugi', 'Lỗi thường gặp bugi'] })).includes('outline-repetitive'), 'shape: outline lặp ý');
  ok(shape(cand({ evidence: { type: 'abc', status: 'verified' } })).includes('evidence-type-invalid') && shape(cand({ evidence: { type: 'gsc', status: 'abc' } })).includes('evidence-status-invalid'), 'shape: evidence sai');
  ok(shape(cand({ demand: { source: 'none', impressions: 1200 } })).includes('demand-fabricated'), 'shape: cấm bịa số liệu nhu cầu (source=none mà có impressions)');
  ok(shape(cand({ demand: { source: 'gsc', clicks: 3 } })).includes('demand-incomplete'), 'shape: demand gsc thiếu impressions/period');
  ok(shape(cand({ priority: 'P0' })).includes('priority-without-demand'), 'shape: P0 cần nhu cầu đo thật');
  same(shape(cand({ priority: 'P0', demand: { source: 'gsc', impressions: 900, clicks: 20, period: '2026-07-01..2026-09-30' } })), [], 'P0 hợp lệ khi có demand GSC đầy đủ');

  // gate trên corpus tổng hợp
  const pub = (slug, title, hub, outline, keywords) => ({ slug, title, hub, status: 'PUBLISHED', source: 'article', headline: { title, outline, keywords, text: [] } });
  const corpus = G.TopicCorpus.fromDocs(MICRO.map(m => pub(m[1], m[2], m[3], m[4], m[5])));
  const ev = (c, o) => G.evaluate(c, corpus, Object.assign({ hubs: new Set(['garage/dong-co', 'garage/phanh', 'garage/truyen-dong', 'garage/dien-ac-quy', 'guide/bao-duong', 'guide/su-dung-xe', 'guide/thu-tuc-xe', 'thue-xe/xe-may', 'thue-xe/xe-dien']) }, o || {}));
  const codes = r => r.reasons.map(x => x.code);
  const rA = ev(FIX.bugi);
  ok(rA.verdict === 'ACCEPT', 'gate: chủ đề độc lập => ACCEPT', rA.verdict + ' ' + codes(rA).join());
  same(codes(rA).sort(), ['demand-unverified', 'evidence-unverified'], 'gate: ACCEPT luôn kèm WARN nhu cầu/bằng chứng chưa xác minh');
  ok(rA.reasons.filter(x => x.verdict === 'WARN').length === 2, 'gate: hai WARN không làm đổi verdict');
  ok(codes(ev(cand({ slug: 'thay-nhot-xe-may' }))).includes('dup-slug') && ev(cand({ slug: 'thay-nhot-xe-may' })).verdict === 'REJECT', 'gate: trùng slug => REJECT');
  const rT = ev(cand({ title: 'Thay nhớt xe máy: chu kỳ và cách thực hiện' }));
  ok(rT.verdict === 'REJECT' && codes(rT).includes('dup-title'), 'gate: trùng title chuẩn hóa => REJECT');
  const rW = ev(FIX.dupWrapper);
  ok(['REJECT', 'MERGE-CANDIDATE'].includes(rW.verdict), 'gate: hoán vị khung template của bài đã có bị chặn', rW.verdict + ' ' + codes(rW).join());
  ok(rW.reasons.some(x => x.target === 'thay-nhot-xe-may'), 'gate: chỉ rõ bài đích để gộp (target)');
  const rL = ev(FIX.dupLocation);
  ok(rL.verdict === 'REJECT' && codes(rL).includes('location-only-variant'), 'gate: chỉ khác địa danh => REJECT', codes(rL).join());
  const rLocal = ev(Object.assign({}, FIX.dupLocation, { evidence: { type: 'local-source', status: 'verified', sources: [{ label: 'Nguồn địa phương', url: 'https://example.invalid/a', retrievedAt: '2026-10-01' }] } }));
  ok(!codes(rLocal).includes('location-only-variant'), 'gate: có nguồn địa phương đã xác minh thì không bị coi là chỉ khác địa danh', codes(rLocal).join());
  const rR = ev(FIX.research);
  ok(rR.verdict === 'NEEDS-RESEARCH' && codes(rR).includes('needs-verified-data'), 'gate: dữ kiện luật cần nguồn => NEEDS-RESEARCH', rR.verdict);
  const verified = { type: 'official-source', status: 'verified', sources: [{ label: 'Văn bản chính thức', url: 'https://example.invalid/vb', retrievedAt: '2026-10-01' }] };
  ok(ev(Object.assign({}, FIX.research, { evidence: verified })).verdict === 'ACCEPT', 'gate: có bằng chứng đã xác minh đầy đủ thì hết NEEDS-RESEARCH');
  ok(ev(Object.assign({}, FIX.research, { evidence: { type: 'official-source', status: 'verified', sources: [{ label: 'x', url: 'https://example.invalid' }] } })).verdict === 'NEEDS-RESEARCH', 'gate: bằng chứng thiếu retrievedAt không được tính là đã xác minh');
  const rO = ev(cand({ slug: 'thue-xe-may-uy-tin', title: 'Chọn nơi cho thuê xe máy uy tín: những dấu hiệu cần để ý', hub: 'guide/bao-duong', intent: 'commercial', primaryKeyword: 'cho thuê xe máy uy tín' }));
  ok(codes(rO).includes('intent-ownership') && rO.verdict === 'REWRITE', 'gate: intent thuê xe thương mại phải thuộc /thue-xe/ (REWRITE)', rO.verdict + ' ' + codes(rO).join());
  const rS = ev(cand({ outline: ['Một', 'Hai'] }));
  ok(rS.verdict === 'REWRITE' && codes(rS).includes('outline-invalid'), 'gate: hình dạng yếu => REWRITE');
  // precedence + addReason chỉ làm chặt hơn
  const base = ev(FIX.bugi);
  const tighter = G.addReason(base, { code: 'x', verdict: 'REJECT', msg: 'm' });
  ok(tighter.verdict === 'REJECT' && tighter.overlap.risk === 'high', 'addReason: nâng verdict theo precedence');
  ok(G.addReason(base, { code: 'w', verdict: 'WARN', msg: 'm' }).verdict === 'ACCEPT', 'addReason: WARN không đổi verdict');
  ok(G.addReason(rT, { code: 'y', verdict: 'REWRITE', msg: 'm' }).verdict === 'REJECT', 'addReason: không bao giờ nới REJECT');
  const edit = G.applyEditorialReview(base, { mergeInto: 'phanh-dia-xe-may', why: 'cùng câu hỏi' });
  ok(edit.verdict === 'MERGE-CANDIDATE' && edit.reasons.some(x => x.code === 'editorial-overlap' && x.target === 'phanh-dia-xe-may'), 'rà soát biên tập: ACCEPT => MERGE-CANDIDATE kèm đích');
  ok(G.applyEditorialReview(rT, { mergeInto: 'x', why: 'y' }).verdict === 'REJECT', 'rà soát biên tập không nới REJECT của gate');
  ok(G.applyEditorialReview(base, null) === base, 'rà soát biên tập rỗng không đổi kết quả');
  // tính tất định
  same(JSON.stringify(ev(FIX.dupWrapper)), JSON.stringify(ev(FIX.dupWrapper)), 'gate tất định: cùng đầu vào => cùng đầu ra');
  // độ phủ truy vấn
  const cov = (q) => T.coverageFor(corpus, [{ query: q, imp: 1 }]).state;
  ok(cov('thay nhớt xe máy') === 'COVERED', 'coverage: truy vấn có từ khóa nằm trong title/H2/keywords => COVERED');
  ok(cov('cách nấu phở bò tại nhà') === 'GAP' && cov('lập trình python cơ bản') === 'GAP', 'coverage: truy vấn ngoài chủ đề => GAP');
  ok(cov('khóa đĩa chống trộm xe máy') !== 'COVERED', 'coverage: chủ đề chưa có bài không bị báo COVERED');

  // governance
  const tmpGov = fs.mkdtempSync(path.join(os.tmpdir(), 'topicv2-gov-'));
  const gp = f => path.join(tmpGov, f);
  ok(Gov.load(gp('absent.json')).mode === 'off' && Gov.load(gp('absent.json')).v1Generation === 'allowed', 'governance: không có file => off/allowed (tương thích checkout cũ)');
  fs.writeFileSync(gp('bad.json'), '{ không phải json');
  const bad = Gov.load(gp('bad.json'));
  ok(bad.mode === 'enforce' && bad.requireApproved && bad.v1Generation === 'frozen', 'governance: file hỏng => fail-closed (enforce + frozen)');
  fs.writeFileSync(gp('off.json'), JSON.stringify({ mode: 'off' }));
  const off = Gov.load(gp('off.json'));
  ok(!off.requireApproved && off.v1Generation === 'frozen', 'governance: mode=off tắt requireApproved nhưng v1Generation mặc định frozen khi file có mặt');
  fs.writeFileSync(gp('rb.json'), JSON.stringify(GOV_OFF));
  const rb = Gov.load(gp('rb.json'));
  ok(!rb.requireApproved && rb.v1Generation === 'allowed', 'governance: công tắc rollback {off, allowed}');
  fs.writeFileSync(gp('enf.json'), JSON.stringify(Object.assign({}, GOV_ENFORCE, { maxApprovedQueue: 7 })));
  const enf = Gov.load(gp('enf.json'));
  ok(enf.requireApproved && enf.maxApprovedQueue === 7, 'governance: enforce đọc maxApprovedQueue');
  fs.rmSync(tmpGov, { recursive: true, force: true });
  const bySlot = new Map([['S1', { lifecycle: 'APPROVED', editorial: { approvedBy: 'x' } }], ['S2', { lifecycle: 'PLANNED', editorial: { approvedBy: null } }], ['S3', { lifecycle: 'APPROVED', editorial: {} }]]);
  const wf = Gov.writableFilter(enf, bySlot);
  ok(wf({ id: 'S1' }) && !wf({ id: 'S2' }) && !wf({ id: 'S3' }) && !wf({ id: 'S9' }), 'writableFilter: chỉ slot có topic APPROVED kèm người duyệt');
  ok(Gov.writableFilter(off, bySlot)({ id: 'S9' }), 'writableFilter: off => mọi slot');

  // matrix
  const good = () => ({ schema: 2, topicId: 'T000001', slotId: null, slug: 'abc', title: 'Tiêu đề', hub: 'garage/phanh', lifecycle: 'PLANNED', source: 'v2-manual' });
  same(M.validateRow(good()), [], 'validateRow: dòng hợp lệ');
  ok(M.validateRow(Object.assign(good(), { schema: 1 })).length === 1, 'validateRow: sai schema');
  ok(M.validateRow(Object.assign(good(), { lifecycle: 'X' })).length === 1, 'validateRow: lifecycle lạ');
  ok(M.validateRow(Object.assign(good(), { source: 'bịa' })).length === 1, 'validateRow: source lạ');
  ok(M.validateRow(Object.assign(good(), { lifecycle: 'APPROVED' })).length >= 3, 'validateRow: APPROVED thiếu slot/người duyệt/gate');
  ok(M.validateRow(Object.assign(good(), { lifecycle: 'APPROVED', slotId: 'S00001', editorial: { approvedBy: 'x', approvedAt: NOW }, gate: { verdict: 'ACCEPT' } })).some(m => /neighboursReviewed/.test(m)), 'validateRow: topic V2 duyệt phải có neighboursReviewed');
  same(M.validateRow(Object.assign(good(), { lifecycle: 'APPROVED', slotId: 'S00001', editorial: { approvedBy: 'x', approvedAt: NOW, neighboursReviewed: ['a'] }, gate: { verdict: 'ACCEPT' } })), [], 'validateRow: APPROVED đủ điều kiện');
  ok(M.nextTopicId([{ topicId: 'T000009' }, { topicId: 'T000120' }, {}]) === 'T000121', 'nextTopicId tăng theo max');
  ok(M.nextTopicId([]) === 'T000001', 'nextTopicId khởi đầu');
  ok(M.effectiveLifecycle({ lifecycle: 'APPROVED' }, { state: 'PUBLISHED' }) === 'PUBLISHED' && M.effectiveLifecycle({ lifecycle: 'APPROVED' }, { state: 'QA' }) === 'QA' &&
    M.effectiveLifecycle({ lifecycle: 'PLANNED' }, { state: 'WRITING' }) === 'WRITING' && M.effectiveLifecycle({ lifecycle: 'REJECTED' }, { state: 'PLANNED' }) === 'REJECTED', 'effectiveLifecycle suy ra từ trạng thái slot');
  const mx = (slots) => ({ slots: slots.map(s => Object.assign({ hub: 'garage/phanh', title: 't', state: 'PLANNED', notes: '' }, s)) });
  const approvedRow = (id, slot, slug, cluster) => ({ schema: 2, topicId: id, slotId: slot, slug, title: 't', hub: 'garage/phanh', lifecycle: 'APPROVED', source: 'v2-manual', cluster: cluster || slug,
    editorial: { approvedBy: 'x', approvedAt: NOW, neighboursReviewed: [] }, gate: { verdict: 'ACCEPT' } });
  const inv = (rows, slots, gov) => M.checkInvariants({ rows, matrix: mx(slots), gov: gov || enf });
  same(inv([approvedRow('T000001', 'S00001', 'a')], [{ id: 'S00001', slug: 'a' }]).errors, [], 'invariant: topic APPROVED + slot khớp => sạch');
  ok(inv([approvedRow('T000001', 'S00001', 'a'), approvedRow('T000001', 'S00002', 'b')], [{ id: 'S00001', slug: 'a' }, { id: 'S00002', slug: 'b' }]).errors.some(e => /topicId trùng/.test(e)), 'invariant: topicId trùng');
  ok(inv([approvedRow('T000001', 'S00001', 'a'), approvedRow('T000002', 'S00001', 'b')], [{ id: 'S00001', slug: 'a' }]).errors.some(e => /slotId trùng/.test(e)), 'invariant: một slot cho hai topic');
  ok(inv([approvedRow('T000001', 'S00009', 'a')], [{ id: 'S00001', slug: 'z' }]).errors.some(e => /không có trong matrix/.test(e)), 'invariant: topic trỏ slot không tồn tại');
  ok(inv([approvedRow('T000001', 'S00001', 'a')], [{ id: 'S00001', slug: 'khac' }]).errors.some(e => /slug lệch/.test(e)), 'invariant: slug lệch slot');
  ok(inv([approvedRow('T000001', 'S00001', 'a'), approvedRow('T000002', 'S00002', 'a')], [{ id: 'S00001', slug: 'a' }, { id: 'S00002', slug: 'a' }]).errors.some(e => /slug trùng/.test(e)), 'invariant: slug trùng giữa topic còn hiệu lực');
  ok(inv([approvedRow('T000001', 'S00001', 'a', 'cum'), approvedRow('T000002', 'S00002', 'b', 'cum')], [{ id: 'S00001', slug: 'a' }, { id: 'S00002', slug: 'b' }]).errors.some(e => /intent cluster/.test(e)), 'invariant: 2 topic V2 cùng intent cluster vượt trần');
  ok(inv([], [{ id: 'S00001', slug: 'a', state: 'WRITING' }]).errors.some(e => /đang xử lý nhưng topic chưa APPROVED/.test(e)), 'invariant: slot đang xử lý mà topic chưa duyệt (enforce) là LỖI');
  same(inv([], [{ id: 'S00001', slug: 'a', state: 'WRITING' }], rb).errors, [], 'invariant: governance off không đòi duyệt');
  ok(inv([], [{ id: 'S00001', slug: 'a', state: 'PLANNED' }]).warnings.some(w => /chưa có topic APPROVED/.test(w)), 'invariant: slot PLANNED chưa duyệt chỉ là cảnh báo (chờ duyệt)');
  ok(inv([], [{ id: 'S00001', slug: 'a', state: 'PUBLISHED' }]).warnings.some(w => /PUBLISHED chưa có dòng/.test(w)), 'invariant: PUBLISHED chưa có dòng topic => cảnh báo');
  const sm = M.summarize([approvedRow('T000001', 'S00001', 'a')], mx([{ id: 'S00001', slug: 'a', state: 'QA' }]));
  ok(sm.lifecycle.QA === 1 && sm.total === 1, 'summarize dùng lifecycle hiệu lực');

  // I/O JSONL
  const jf = path.join(os.tmpdir(), 'topicv2-jsonl-' + process.pid + '.jsonl');
  fs.writeFileSync(jf, JSON.stringify(good()) + '\n{hỏng\n' + JSON.stringify(Object.assign(good(), { topicId: 'T000002' })) + '\n\n[1,2]\n');
  const rr = M.readRows(jf);
  ok(rr.rows.length === 2 && rr.errors.length === 2 && rr.errors[0].line === 2 && rr.errors[1].line === 5, 'readRows: báo đúng số dòng hỏng, bỏ dòng trống', JSON.stringify(rr.errors));
  M.writeRowsAtomic(rr.rows, jf);
  ok(M.readRows(jf).errors.length === 0 && M.readRows(jf).rows.length === 2, 'writeRowsAtomic ghi lại sạch');
  ok(!fs.readdirSync(os.tmpdir()).some(f => f.startsWith('topicv2-jsonl-' + process.pid) && f.endsWith('.tmp')), 'writeRowsAtomic không để lại file .tmp');
  fs.unlinkSync(jf);

  // CSV
  const csv = T.parseCsv('Query,Clicks,Impressions\r\n"a, b",1,"1,200"\r\n"c ""d""",2,3\n\n');
  same(csv, [['Query', 'Clicks', 'Impressions'], ['a, b', '1', '1,200'], ['c "d"', '2', '3']], 'parseCsv: ngoặc kép, dấu phẩy, CRLF, dòng trống');
  const nc = T.normalizeCandidate({ title: ' Bugi xe máy bị đóng muội ' });
  ok(nc.slug === 'bugi-xe-may-bi-dong-muoi' && nc.priority === 'P2' && nc.demand.source === 'none' && nc.evidence.status === 'unverified', 'normalizeCandidate: slug từ title, mặc định P2/demand none/evidence unverified');
}

// Tên riêng/viết tắt trong tiêu đề công khai (lib/title-case.js dùng chung cho detector topic-audit và công cụ sửa)
{
  const TC = require('./lib/title-case');
  const lc = x => x.normalize('NFC').toLowerCase();
  ok(TC.TABLE.every(([k, v]) => k === lc(k) && lc(v) === k && v !== k), 'title-case: mỗi dòng bảng là (từ thường → dạng viết đúng), chỉ khác chữ hoa/thường');
  ok(new Set(TC.TABLE.map(x => x[0])).size === TC.TABLE.length, 'title-case: không trùng khóa');
  const bad = ['Thuê honda vision: checklist từng bước', 'Kinh nghiệm abs xe máy dành cho người mới', 'Yamaha việt nam — những điều cần biết', 'Phượt miền bắc — những điều cần biết',
    'Tổng hợp kiến thức: giao thông tp hcm', 'Kinh nghiệm winner x dành cho người mới', 'Thuê xe máy hà nội: thủ tục', 'Hướng dẫn chi tiết về air blade', 'Xe gd110 và gd'];
  const good = ['Thuê Honda Vision: checklist từng bước', 'Hệ thống ABS trên xe máy', 'Bảo dưỡng xe máy sau 1000 km đầu tiên', 'Giữ đà khi xuống dốc', 'Công tơ mét xe cũ có bị chỉnh không',
    'Thuê xe máy Hà Nội: thủ tục', 'Lịch bảo dưỡng xe máy định kỳ theo số km', 'Kinh nghiệm pin lithium dành cho người mới', 'Xe gd110 chạy êm'];
  ok(bad.every(t => T.titleDefects(t).length === 1) && good.every(t => T.titleDefects(t).length === 0), 'titleDefects: bắt tên riêng viết thường, không dương tính giả (đà, km, pin lithium, gd110)',
    JSON.stringify([bad.filter(t => T.titleDefects(t).length !== 1), good.filter(t => T.titleDefects(t).length !== 0)]));
  ok(bad.every(t => { const x = TC.fixTitle(t); return lc(x) === lc(t) && x !== t && T.titleDefects(x).length === 0 && TC.fixTitle(x) === x; }), 'fixTitle: chỉ đổi chữ hoa/thường, hết lỗi, idempotent');
  ok(TC.fixTitle('Thuê honda vision: câu hỏi thường gặp') === 'Thuê Honda Vision: câu hỏi thường gặp' && TC.fixTitle('Kinh nghiệm suzuki gd dành cho người mới') === 'Kinh nghiệm Suzuki GD dành cho người mới' &&
    TC.fixTitle('Thuê xe tp hcm — những điều cần biết') === 'Thuê xe TP HCM — những điều cần biết', 'fixTitle: kết quả cụ thể (cụm nhiều từ, viết tắt, hãng + mẫu)');
  ok(TC.advisory('Thuê Honda Vision: checklist') === '' && /honda, vision/.test(TC.advisory('Thuê honda vision: checklist')) && /Honda, Vision/.test(TC.advisory('Thuê honda vision: checklist')), 'advisory: rỗng khi ổn, nêu token và dạng đúng khi lỗi');
}

// ===========================================================================
// TẦNG 2 — INTEGRATION (CLI trong micro-repo, governance enforce)
// ===========================================================================
console.log('2. INTEGRATION — backfill → propose → review → approve → writer-pack → verify → rollback…');
{
  const E = microRepo('int', { gov: Object.assign({}, GOV_ENFORCE, { maxApprovedQueue: 3 }) });
  let r = cli(E, ['topic-check']);
  ok(r.status === 0 && /TOPIC_CHECK_OK rows=0/.test(r.out) && /PUBLISHED chưa có dòng/.test(r.out), 'micro-repo: topic-check trước backfill = OK + cảnh báo thiếu dòng', r.out.slice(0, 200));

  // backfill
  r = cli(E, ['topic-backfill']);
  ok(r.status === 1 && /TỪ CHỐI/.test(r.out), 'topic-backfill không có --role coordinator bị từ chối');
  const mBytes = readB(E.p('state/matrix.json'));
  r = cli(E, ['topic-backfill', ...COORD]);
  ok(r.status === 0 && /added=8 total=8/.test(r.out), 'topic-backfill ghi dòng cho 6 published + 2 legacy', r.out);
  ok(readB(E.p('state/matrix.json')).equals(mBytes), 'topic-backfill KHÔNG đụng matrix.json');
  r = cli(E, ['topic-backfill', ...COORD]);
  ok(r.status === 0 && /added=0/.test(r.out), 'topic-backfill idempotent');
  const rows0 = rowsOf(E);
  const leg7 = rows0.find(x => x.slotId === 'S00007');
  const leg8 = rows0.find(x => x.slotId === 'S00008');
  ok(leg7 && leg7.lifecycle === 'REJECTED' && ['MERGE-CANDIDATE', 'REJECT'].includes(leg7.disposition) && leg7.mergeInto === 'thay-nhot-xe-may', 'backfill: slot legacy hoán vị => REJECTED + mergeInto bài đã có', JSON.stringify(leg7 && [leg7.lifecycle, leg7.disposition, leg7.mergeInto]));
  ok(leg8 && leg8.lifecycle === 'PLANNED', 'backfill: slot legacy độc lập giữ PLANNED (chờ duyệt)', JSON.stringify(leg8 && [leg8.lifecycle, leg8.disposition]));
  r = cli(E, ['topic-check']);
  ok(r.status === 0 && /TOPIC_CHECK_OK rows=8 awaitingApproval=2 openApproved=0/.test(r.out), 'topic-check sau backfill OK; 2 slot legacy chờ duyệt', r.out);

  // audit READ-ONLY
  let snap = stateFiles(E);
  const auditOut = path.join(E.root, 'audit.json');
  r = cli(E, ['topic-audit', '--out', auditOut, '--md', path.join(E.root, 'audit.md')]);
  ok(r.status === 0 && stateSame(E, snap), 'topic-audit READ-ONLY: không đổi state', r.out.slice(0, 200));
  const audit = fs.existsSync(auditOut) ? readJ(auditOut) : { audited: [] };
  // slot đã có module bài (S00008) là đang trong quy trình, không thuộc diện kiểm toán chỗ giữ chỗ
  ok(audit.audited.length === 1 && audit.audited[0].id === 'S00007' && audit.audited[0].verdict === 'MERGE-CANDIDATE' && audit.audited[0].target === 'thay-nhot-xe-may', 'topic-audit: slot legacy hoán vị => MERGE-CANDIDATE vào bài đã xuất bản (slot đã có module bài không bị kiểm toán)', JSON.stringify(audit.audited));

  r = cli(E, ['topic-coverage', '--json']);
  let covRep = null;
  try { covRep = JSON.parse(r.stdout); } catch (_) { /* kiểm ở dưới */ }
  ok(r.status === 0 && stateSame(E, snap) && covRep && covRep.totals.published === 6 && covRep.hubs.find(h => h.hub === 'thue-xe/xe-may').published === 2 && covRep.empty.length === T.hubSet().size - 5 && !covRep.empty.includes('garage/phanh'),
    'topic-coverage READ-ONLY: đếm bài theo hub, liệt kê hub chưa có bài', r.out.slice(0, 160));

  // propose: dry-run / role / file lỗi
  const all = Object.values(FIX);
  const cf = writeCands(E, 'cands.jsonl', all);
  snap = stateFiles(E);
  r = cli(E, ['topic-propose', '--file', cf, '--dry-run']);
  ok(r.status === 0 && stateSame(E, snap) && /TOPIC_PROPOSE dry-run total=10/.test(r.out), 'topic-propose --dry-run không ghi', r.out.slice(-200));
  r = cli(E, ['topic-propose', '--file', cf]);
  ok(r.status === 1 && /TỪ CHỐI/.test(r.out) && stateSame(E, snap), 'topic-propose không có role coordinator bị từ chối, không ghi');
  fs.writeFileSync(path.join(E.root, 'bad.jsonl'), JSON.stringify(FIX.bugi) + '\n{không phải json\n');
  r = cli(E, ['topic-propose', '--file', path.join(E.root, 'bad.jsonl'), ...COORD]);
  ok(r.status === 1 && /dòng 2 không phải JSON/.test(r.out) && stateSame(E, snap), 'topic-propose: một dòng JSON hỏng => dừng, không ghi dòng nào (atomic)');

  // --review fail-closed
  const rv = (o) => { const f = path.join(E.root, 'review.json'); fs.writeFileSync(f, JSON.stringify(o)); return f; };
  for (const [name, o, re] of [
    ['slug không có trong batch', { reviewedBy: 'qa', overrides: { 'khong-co-slug': { mergeInto: 'thay-nhot-xe-may', why: 'x' } } }, /không nằm trong batch/],
    ['mergeInto không tồn tại', { reviewedBy: 'qa', overrides: { 'ma-phanh-mon-den-muc-nao-phai-thay': { mergeInto: 'bai-ma-troi', why: 'x' } } }, /mergeInto không tồn tại/],
    ['thiếu reviewedBy', { overrides: {} }, /reviewedBy/],
    ['thiếu why', { reviewedBy: 'qa', overrides: { 'ma-phanh-mon-den-muc-nao-phai-thay': { mergeInto: 'phanh-dia-xe-may' } } }, /mergeInto và why/],
    ['gộp vào chính nó', { reviewedBy: 'qa', overrides: { 'ma-phanh-mon-den-muc-nao-phai-thay': { mergeInto: 'ma-phanh-mon-den-muc-nao-phai-thay', why: 'x' } } }, /chính nó/],
  ]) {
    r = cli(E, ['topic-propose', '--file', cf, '--review', rv(o), ...COORD]);
    ok(r.status === 1 && re.test(r.out) && stateSame(E, snap), '--review fail-closed: ' + name, r.out.slice(0, 160));
  }

  // propose thật + review hợp lệ
  const good = rv({ reviewedBy: 'biên tập viên kiểm thử', reviewedAt: '2026-10-12', overrides: { 'ma-phanh-mon-den-muc-nao-phai-thay': { mergeInto: 'phanh-dia-xe-may', why: 'Bài đích đã có mục dấu hiệu má phanh mòn và cách kiểm tra.' } } });
  r = cli(E, ['topic-propose', '--file', cf, '--review', good, '--source', 'v2-manual', ...COORD]);
  const ids = parseIds(r.out);
  ok(r.status === 0 && /verdicts=/.test(r.out), 'topic-propose thật chạy xong', r.out.slice(-300));
  const V = slug => (ids.get(slug) || {}).verdict;
  for (const k of ['bugi-xe-may-bi-dong-muoi', 'guong-chieu-hau-bi-rung', 'den-hau-xe-may-chap-chon', 'chon-khoa-dia-chong-trom', 'chan-chong-ngang-bi-long']) ok(V(k) === 'ACCEPT', 'propose: ' + k + ' => ACCEPT', V(k));
  ok(V('ma-phanh-mon-den-muc-nao-phai-thay') === 'MERGE-CANDIDATE', 'propose: rà soát biên tập chuyển ACCEPT => MERGE-CANDIDATE', V('ma-phanh-mon-den-muc-nao-phai-thay'));
  ok(['REJECT', 'MERGE-CANDIDATE'].includes(V('kinh-nghiem-thay-nhot-xe-may-nguoi-moi-v2')), 'propose: hoán vị khung template bị chặn', V('kinh-nghiem-thay-nhot-xe-may-nguoi-moi-v2'));
  ok(V('thue-xe-may-da-nang-thu-tuc') === 'REJECT', 'propose: chỉ khác địa danh => REJECT');
  const lineOf = slug => r.out.split('\n').filter(l => l.includes(slug)).join(' // ');
  ok(V('gioi-thieu-lop-xe-may-ngan') === 'REWRITE', 'propose: outline yếu => REWRITE', lineOf('gioi-thieu-lop-xe-may-ngan'));
  ok(V('muc-phat-khong-doi-mu-bao-hiem') === 'NEEDS-RESEARCH', 'propose: dữ kiện luật => NEEDS-RESEARCH', lineOf('muc-phat-khong-doi-mu-bao-hiem'));
  const rowsP = rowsOf(E);
  const rowBy = slug => rowsP.find(x => x.slug === slug);
  const rm = rowBy('ma-phanh-mon-den-muc-nao-phai-thay');
  ok(rm && rm.lifecycle === 'REJECTED' && rm.mergeInto === 'phanh-dia-xe-may' && rm.editorial.reviewedBy === 'biên tập viên kiểm thử' && rm.gate.reasons.some(x => x.code === 'editorial-overlap'), 'row biên tập: REJECTED/MERGE-CANDIDATE + mergeInto + reviewedBy + lý do editorial-overlap');
  ok(rm.overlap.urls.includes('phanh-dia-xe-may'), 'row biên tập: overlap.urls ghi bài đích');
  ok(rowBy('bugi-xe-may-bi-dong-muoi').lifecycle === 'PLANNED' && rowBy('bugi-xe-may-bi-dong-muoi').slotId === null, 'topic ACCEPT chỉ PLANNED, CHƯA có slot (writer không thấy)');
  ok(rowBy('bugi-xe-may-bi-dong-muoi').demand.source === 'none' && rowBy('bugi-xe-may-bi-dong-muoi').demand.impressions === undefined, 'không bịa nhu cầu: demand.none không có số liệu');
  same(matrixOf(E).slots.length, 8, 'propose không tạo slot trong matrix.json');
  ok(new Set(rowsP.map(x => x.topicId)).size === rowsP.length, 'topicId duy nhất sau propose');
  // idempotent (kể cả topic đã REJECTED)
  snap = stateFiles(E);
  r = cli(E, ['topic-propose', '--file', cf, '--review', good, '--source', 'v2-manual', ...COORD]);
  ok(r.status === 0 && /skipped=10/.test(r.out) && stateSame(E, snap), 'topic-propose idempotent: chạy lại bỏ qua cả topic đã REJECTED, không ghi', r.out.slice(-160));
  // slug đang bị slot legacy giữ (đã có dòng topic): propose bỏ qua kèm hướng dẫn đổi slug
  const clash = writeCands(E, 'clash.jsonl', [cand({ slug: 'loc-gio-xe-may', title: 'Lọc gió xe máy bị bẩn: dấu hiệu và cách vệ sinh', hub: 'garage/dong-co', primaryKeyword: 'lọc gió xe máy bị bẩn', outline: ['Lọc gió làm gì', 'Dấu hiệu lọc gió bẩn', 'Cách vệ sinh', 'Khi nào thay', 'Lỗi thường gặp'] })]);
  r = cli(E, ['topic-propose', '--file', clash, '--dry-run']);
  ok(/SKIP loc-gio-xe-may/.test(r.out) && /đổi slug/.test(r.out), 'propose: slug đang giữ bởi slot legacy bị bỏ qua kèm hướng dẫn đổi slug', r.out.slice(0, 200));

  // neighbours
  r = cli(E, ['topic-neighbours', ids.get('den-hau-xe-may-chap-chon').id, '--json']);
  let nb = null;
  try { nb = JSON.parse(r.stdout)[0]; } catch (_) { /* kiểm ở dưới */ }
  ok(r.status === 0 && nb && nb.neighbours.length > 0 && Array.isArray(nb.requiredReview), 'topic-neighbours --json trả láng giềng + danh sách phải đọc', r.out.slice(0, 160));
  r = cli(E, ['topic-neighbours', ids.get('den-hau-xe-may-chap-chon').id]);
  ok(/PHẢI ĐỌC trước khi duyệt/.test(r.out) && /H2:/.test(r.out), 'topic-neighbours hiển thị H2 của bài gần nhất');

  // chưa duyệt gì: writer-pack báo chờ coordinator, KHÔNG phát slot legacy chưa duyệt
  r = cli(E, ['writer-pack', '--count', '10']);
  ok(/WRITER_PACK status=awaiting-approval/.test(r.out) && /NEXT_ACTION=WAIT_FOR_COORDINATOR_TOPIC_APPROVAL/.test(r.out) && !/BATCH_IDS=S/.test(r.out), 'writer-pack khi chưa có topic APPROVED: awaiting-approval, không phát slot nào', r.out.slice(0, 200));
  ok(/WARN_UNAPPROVED_ARTICLE ids=S00008/.test(r.out), 'writer-pack cảnh báo riêng module bài của slot chưa APPROVED (không để writer chờ publish vô hạn)', r.out.slice(0, 300));

  // approve: các đường từ chối (state không đổi)
  const A = slug => ids.get(slug).id;
  const needFor = slug => { const x = JSON.parse(cli(E, ['topic-neighbours', A(slug), '--json']).stdout)[0]; return x.requiredReview; };
  const ACK = ['demand-unverified', 'evidence-unverified'];
  const approveArgs = (slug, extra) => ['topic-approve', A(slug), '--by', 'qa-test', '--ack', ACK.join(','), '--reviewed', needFor(slug).join(','), ...(extra || []), ...COORD];
  snap = stateFiles(E);
  const refuse = (name, args, re) => { const x = cli(E, args); ok(x.status === 1 && re.test(x.out) && stateSame(E, snap), 'approve từ chối: ' + name, x.out.slice(0, 200)); };
  refuse('thiếu --by', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), ...COORD], /thiếu --by/);
  refuse('không có role coordinator', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), '--by', 'x'], /TỪ CHỐI/);
  refuse('topic không tồn tại', ['topic-approve', 'T999999', '--by', 'x', ...COORD], /không tìm thấy/);
  refuse('topic REWRITE', ['topic-approve', A('gioi-thieu-lop-xe-may-ngan'), '--by', 'x', ...COORD], /chưa đủ điều kiện duyệt/);
  refuse('topic NEEDS-RESEARCH', ['topic-approve', A('muc-phat-khong-doi-mu-bao-hiem'), '--by', 'x', ...COORD], /chưa đủ điều kiện duyệt/);
  refuse('topic MERGE-CANDIDATE đã REJECTED', ['topic-approve', A('ma-phanh-mon-den-muc-nao-phai-thay'), '--by', 'x', ...COORD], /chưa đủ điều kiện duyệt/);
  refuse('chưa ack cảnh báo', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), '--by', 'x', '--reviewed', needFor('bugi-xe-may-bi-dong-muoi').join(','), ...COORD], /cảnh báo chưa được xác nhận/);
  refuse('chưa xác nhận đã đọc láng giềng', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), '--by', 'x', '--ack', ACK.join(','), ...COORD], /chưa xác nhận đã đọc bài gần nhất/);
  refuse('ack thiếu một cảnh báo', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), '--by', 'x', '--ack', 'demand-unverified', '--reviewed', needFor('bugi-xe-may-bi-dong-muoi').join(','), ...COORD], /evidence-unverified/);
  refuse('topicId lặp trong một yêu cầu', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), A('bugi-xe-may-bi-dong-muoi'), '--by', 'x', '--ack', ACK.join(','), '--reviewed', needFor('bugi-xe-may-bi-dong-muoi').join(','), ...COORD], /bị lặp/);
  refuse('--file lẫn topicId vị trí', ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), '--file', path.join(E.root, 'cands.jsonl'), '--by', 'x', ...COORD], /HOẶC/);
  r = cli(E, ['topic-approve', A('bugi-xe-may-bi-dong-muoi'), '--by', 'x', '--ack', ACK.join(','), '--reviewed', needFor('bugi-xe-may-bi-dong-muoi').join(','), '--dry-run']);
  ok(r.status === 0 && /DRY_RUN would approve/.test(r.out) && stateSame(E, snap), 'approve --dry-run không ghi và không cần role');

  // approve thành công 1 topic
  const slotsBefore = matrixOf(E).slots;
  r = cli(E, approveArgs('bugi-xe-may-bi-dong-muoi', ['--note', 'thử e2e']));
  ok(r.status === 0 && /APPROVED T\d+ → S00009 bugi-xe-may-bi-dong-muoi/.test(r.out) && /queue=1/.test(r.out), 'approve: tạo slot S00009 và đưa vào hàng đợi', r.out);
  const mAfter = matrixOf(E);
  ok(mAfter.slots.length === slotsBefore.length + 1 && JSON.stringify(mAfter.slots.slice(0, slotsBefore.length)) === JSON.stringify(slotsBefore), 'approve: matrix.json chỉ THÊM đúng 1 slot, slot cũ giữ nguyên byte');
  const s9 = mAfter.slots[mAfter.slots.length - 1];
  ok(s9.state === 'PLANNED' && s9.hub === 'garage/dong-co' && /source=topic-v2 topicId=T\d+/.test(s9.notes) && s9.title === FIX.bugi.title, 'approve: slot PLANNED, hub/title khớp, notes ghi nguồn topic-v2');
  const ra = rowsOf(E).find(x => x.slug === 'bugi-xe-may-bi-dong-muoi');
  ok(ra.lifecycle === 'APPROVED' && ra.slotId === 'S00009' && ra.editorial.approvedBy === 'qa-test' && Array.isArray(ra.editorial.neighboursReviewed) && ra.editorial.neighboursReviewed.length > 0 &&
    ra.editorial.note === 'thử e2e', 'approve: row APPROVED + người duyệt + neighboursReviewed + ghi chú');
  same(ra.editorial.acknowledged.slice().sort(), ACK, 'approve: ack đích danh ghi vào editorial');
  r = cli(E, ['topic-check', '--recheck']);
  ok(r.status === 0 && /openApproved=1/.test(r.out), 'topic-check --recheck sau khi duyệt: OK (đánh giá lại vẫn ACCEPT)', r.out);
  r = cli(E, approveArgs('bugi-xe-may-bi-dong-muoi'));
  ok(r.status === 1 && /chưa đủ điều kiện duyệt/.test(r.out), 'approve lần hai cùng topic bị từ chối (đã APPROVED)');

  // approve bằng --file (theo từng topic) + trần maxApprovedQueue=3
  const approvals = {};
  for (const k of ['guong-chieu-hau-bi-rung', 'den-hau-xe-may-chap-chon', 'chon-khoa-dia-chong-trom']) approvals[A(k)] = { ack: ACK, reviewed: needFor(k), note: 'file-' + k };
  const af = path.join(E.root, 'approvals.json');
  fs.writeFileSync(af, JSON.stringify(approvals));
  snap = stateFiles(E);
  r = cli(E, ['topic-approve', '--file', af, '--by', 'qa-test', ...COORD]);
  ok(r.status === 1 && /maxApprovedQueue=3/.test(r.out) && stateSame(E, snap), 'approve: vượt maxApprovedQueue bị từ chối TOÀN BỘ (atomic), không duyệt một phần', r.out.slice(0, 200));
  delete approvals[A('chon-khoa-dia-chong-trom')];
  fs.writeFileSync(af, JSON.stringify(approvals));
  r = cli(E, ['topic-approve', '--file', af, '--by', 'qa-test', ...COORD]);
  ok(r.status === 0 && /approved=2 queue=3/.test(r.out), 'approve --file: 2 topic, hàng đợi đạt trần 3', r.out);
  ok(rowsOf(E).find(x => x.slug === 'den-hau-xe-may-chap-chon').editorial.note === 'file-den-hau-xe-may-chap-chon', 'approve --file: ghi chú theo từng topic');
  r = cli(E, ['topic-check']);
  ok(r.status === 0 && /openApproved=3/.test(r.out), 'topic-check sau 3 lần duyệt OK');

  // writer-pack: chỉ nhận slot APPROVED
  r = cli(E, ['writer-pack', '--count', '10']);
  const batch = (/BATCH_IDS=(\S+)/.exec(r.out) || [])[1] || '';
  const approvedSlots = rowsOf(E).filter(x => x.lifecycle === 'APPROVED').map(x => x.slotId).sort();
  same(batch.split(',').sort(), approvedSlots, 'writer-pack: BATCH_IDS = đúng các slot APPROVED (không có slot legacy chưa duyệt)');
  ok(!/S00007|S00008/.test(batch), 'writer-pack: không bao giờ chứa slot legacy chưa duyệt');
  ok(/TOPIC_BRIEF keyword=/.test(r.out) && /TOPIC_GAIN /.test(r.out) && /TOPIC_OUTLINE /.test(r.out), 'writer-pack in TOPIC_BRIEF/GAIN/OUTLINE cho topic V2');
  const j = JSON.parse(cli(E, ['writer-pack', '--count', '10', '--json']).stdout);
  ok(j.items.every(it => it.brief && it.brief.informationGain && it.brief.outline.length >= 4), 'writer-pack --json: mỗi item có brief (informationGain, outline)');
  // hub còn trống (không có bài đã xuất bản cùng hub/danh mục) vẫn phải có gợi ý related, ưu tiên bài gần nghĩa do gate ghi lại
  const rowsNow = rowsOf(E);
  ok(j.items.every(it => it.relatedPublished.length >= 2), 'writer-pack: mọi item có >= 2 gợi ý related PUBLISHED kể cả khi hub chưa có bài nào', JSON.stringify(j.items.map(it => [it.id, it.relatedPublished.length])));
  ok(j.items.every(it => { const row = rowsNow.find(x => x.slotId === it.id); const np = ((row.gate || {}).nearestPublished || []).map(x => x.slug); return np.length === 0 || it.relatedPublished[0].slug === np[0]; }), 'writer-pack: gợi ý related ưu tiên bài đã xuất bản gần nghĩa nhất của topic');
  const sh1 = JSON.parse(cli(E, ['writer-pack', '--count', '10', '--shard', '1/2', '--json']).stdout);
  const sh2 = JSON.parse(cli(E, ['writer-pack', '--count', '10', '--shard', '2/2', '--json']).stdout);
  const s1 = (sh1.batchIds || []), s2 = (sh2.batchIds || []);
  ok(s1.length + s2.length === approvedSlots.length && !s1.some(x => s2.includes(x)), 'writer-pack --shard k/n: hai shard rời nhau', JSON.stringify([s1, s2]));
  same([...s1, ...s2].sort(), approvedSlots, 'writer-pack --shard k/n: hợp hai shard = đủ batch');

  // verify-batch từ chối module bài của slot chưa duyệt; backlog không che
  r = cli(E, ['verify-batch', 'S00008']);
  ok(/chưa APPROVED/.test(r.out), 'verify-batch từ chối module bài của slot chưa APPROVED (writer không tự nhận slot)', r.out.slice(0, 200));
  r = cli(E, ['backlog']);
  ok(/PENDING S00008 state=PLANNED article=yes APPROVAL=MISSING/.test(r.out), 'backlog không che bài của slot chưa duyệt: gắn APPROVAL=MISSING', r.out);
  r = cli(E, ['status']);
  ok(/Topic governance: mode=enforce v1Generation=frozen \| AWAITING_APPROVAL: \d+/.test(r.out), 'status hiển thị governance + số slot chờ duyệt');

  // queue-refill frozen
  snap = stateFiles(E);
  r = cli(E, ['queue-refill', ...COORD]);
  ok(r.status === 0 && /QUEUE_REFILL frozen/.test(r.out) && stateSame(E, snap), 'queue-refill bị đóng băng khi v1Generation=frozen, không ghi state');

  // reject
  r = cli(E, ['topic-reject', A('chon-khoa-dia-chong-trom'), ...COORD]);
  ok(r.status === 1 && /thiếu --reason/.test(r.out), 'topic-reject cần --reason');
  r = cli(E, ['topic-reject', A('chon-khoa-dia-chong-trom'), '--reason', 'trùng ý với bài sẵn có sau khi đọc lại', ...COORD]);
  ok(r.status === 0 && rowsOf(E).find(x => x.slug === 'chon-khoa-dia-chong-trom').lifecycle === 'REJECTED', 'topic-reject: chuyển REJECTED kèm lý do');
  // reject kèm gộp vào bài đã có (quyết định biên tập sau gate)
  snap = stateFiles(E);
  r = cli(E, ['topic-reject', A('chan-chong-ngang-bi-long'), '--reason', 'trùng ý', '--merge-into', 'bai-khong-ton-tai', '--by', 'qa-test', ...COORD]);
  ok(r.status === 1 && /không tồn tại/.test(r.out) && stateSame(E, snap), 'topic-reject --merge-into: đích không tồn tại bị từ chối, không ghi');
  r = cli(E, ['topic-reject', A('chan-chong-ngang-bi-long'), '--reason', 'trùng ý', '--merge-into', 'phanh-dia-xe-may', ...COORD]);
  ok(r.status === 1 && /cần --by/.test(r.out) && stateSame(E, snap), 'topic-reject --merge-into: bắt buộc --by (người chịu trách nhiệm rà soát)');
  r = cli(E, ['topic-reject', A('chan-chong-ngang-bi-long'), '--reason', 'Bài đích đã có mục kiểm tra lò xo và chân chống.', '--merge-into', 'phanh-dia-xe-may', '--by', 'qa-test', ...COORD]);
  const rmg = rowsOf(E).find(x => x.slug === 'chan-chong-ngang-bi-long');
  ok(r.status === 0 && rmg.lifecycle === 'REJECTED' && rmg.disposition === 'MERGE-CANDIDATE' && rmg.mergeInto === 'phanh-dia-xe-may' && rmg.editorial.reviewedBy === 'qa-test' &&
    rmg.gate.verdict === 'MERGE-CANDIDATE' && rmg.gate.reasons.some(x => x.code === 'editorial-overlap') && rmg.overlap.urls.includes('phanh-dia-xe-may'), 'topic-reject --merge-into: ghi MERGE-CANDIDATE + mergeInto + người rà soát + lý do editorial-overlap', r.out);
  ok(cli(E, ['topic-check']).status === 0, 'topic-check OK sau quyết định gộp');
  // reopen: đảo quyết định biên tập (gate vẫn ACCEPT) nhưng KHÔNG vượt qua gate
  snap = stateFiles(E);
  r = cli(E, ['topic-reopen', A('chan-chong-ngang-bi-long'), '--reason', 'chủ repo không đồng ý gộp', ...COORD]);
  ok(r.status === 1 && /thiếu --by/.test(r.out) && stateSame(E, snap), 'topic-reopen cần --by');
  r = cli(E, ['topic-reopen', A('kinh-nghiem-thay-nhot-xe-may-nguoi-moi-v2'), '--by', 'qa-test', '--reason', 'thử vượt gate', ...COORD]);
  ok(r.status === 1 && /gate vẫn/.test(r.out) && stateSame(E, snap), 'topic-reopen KHÔNG vượt gate: hoán vị bị gate chặn vẫn bị từ chối');
  r = cli(E, ['topic-reopen', A('chan-chong-ngang-bi-long'), '--by', 'qa-test', '--reason', 'chủ repo không đồng ý gộp', ...COORD]);
  const rre = rowsOf(E).find(x => x.slug === 'chan-chong-ngang-bi-long');
  ok(r.status === 0 && rre.lifecycle === 'PLANNED' && rre.gate.verdict === 'ACCEPT' && !rre.mergeInto && rre.editorial.history.length === 1 && rre.editorial.history[0].previous.mergeInto === 'phanh-dia-xe-may', 'topic-reopen: PLANNED + gate ACCEPT + lịch sử ghi quyết định trước đó', r.out);
  ok(cli(E, ['topic-check']).status === 0, 'topic-check OK sau reopen');
  const mm = matrixOf(E); mm.slots.find(s => s.id === 'S00009').state = 'WRITING'; fs.writeFileSync(E.p('state/matrix.json'), JSON.stringify(mm, null, 1));
  r = cli(E, ['topic-reject', A('bugi-xe-may-bi-dong-muoi'), '--reason', 'thử', ...COORD]);
  ok(r.status === 1 && /đang xử lý/.test(r.out), 'topic-reject từ chối topic đã có slot đang xử lý');
  mm.slots.find(s => s.id === 'S00009').state = 'PLANNED'; fs.writeFileSync(E.p('state/matrix.json'), JSON.stringify(mm, null, 1));

  // topic-brief
  r = cli(E, ['topic-brief', A('den-hau-xe-may-chap-chon')]);
  ok(r.status === 0 && JSON.parse(r.stdout).informationGain.length > 40, 'topic-brief trả brief cho writer');

  // topic-import (GSC)
  const csvF = path.join(E.root, 'gsc.csv');
  fs.writeFileSync(csvF, 'Query,Clicks,Impressions,Position\n"thay nhớt xe máy bao lâu một lần",12,"1,200",8.4\n"chu kỳ thay nhớt xe máy",30,2400,6.1\n"khóa đĩa chống trộm xe máy",5,900,12.3\n"mua khóa chống trộm xe máy",2,500,15\n"cách nấu phở bò tại nhà",1,40,30\n');
  r = cli(E, ['topic-import', '--file', csvF]);
  ok(r.status === 1 && /thiếu --period/.test(r.out), 'topic-import bắt buộc --period (kỳ báo cáo của export)');
  snap = stateFiles(E);
  const leads = path.join(E.root, 'leads.jsonl');
  r = cli(E, ['topic-import', '--file', csvF, '--period', '2026-07-01..2026-09-30', '--out', leads]);
  ok(r.status === 0 && stateSame(E, snap) && /TOPIC_IMPORT queries=5/.test(r.out), 'topic-import chỉ đọc (không ghi state)', r.out);
  const L = readS(leads).split('\n').filter(Boolean).map(JSON.parse);
  const sumImp = L.reduce((s, x) => s + x.demand.impressions, 0);
  ok(sumImp === 1200 + 2400 + 900 + 500 + 40, 'topic-import: tổng impressions = tổng số liệu trong CSV (không bịa thêm/bớt)', String(sumImp));
  ok(L.every(x => x.demand.source === 'gsc' && x.demand.period === '2026-07-01..2026-09-30' && x.evidence.type === 'gsc'), 'topic-import: demand/evidence mang nguồn gsc + kỳ báo cáo');
  const lNhot = L.find(x => /nhớt/.test(x.primaryKeyword));
  ok(lNhot && lNhot.coverage.state === 'COVERED' && lNhot.coverage.existing.some(e => e.slug === 'thay-nhot-xe-may'), 'topic-import: truy vấn thay nhớt => COVERED bởi bài đã có (không đề xuất URL mới)', JSON.stringify(lNhot && lNhot.coverage));
  const lPho = L.find(x => /phở/.test(x.primaryKeyword));
  ok(lPho && lPho.coverage.state === 'GAP', 'topic-import: truy vấn ngoài chủ đề => GAP');
  ok(L.every(x => !('topicId' in x)), 'topic-import không tự sinh topic (chỉ là lead)');

  // rollback: governance off + allowed => hành vi legacy
  fs.writeFileSync(E.p('topic-governance.json'), JSON.stringify(GOV_OFF));
  r = cli(E, ['writer-pack', '--count', '10']);
  ok(/BATCH_IDS=/.test(r.out) && /S00007|S00008/.test((/BATCH_IDS=(\S+)/.exec(r.out) || [])[1] || ''), 'ROLLBACK: governance off => writer-pack nhận lại slot legacy (hành vi cũ)', r.out.slice(0, 200));
  r = cli(E, ['queue-refill', '--dry-run', ...COORD]);
  ok(!/QUEUE_REFILL frozen/.test(r.out), 'ROLLBACK: v1Generation=allowed => queue-refill không còn bị đóng băng', r.out.slice(0, 160));
  r = cli(E, ['topic-check']);
  ok(r.status === 0, 'ROLLBACK: topic-check vẫn OK khi governance off');
  fs.unlinkSync(E.p('topic-governance.json'));
  r = cli(E, ['writer-pack', '--count', '10']);
  ok(/BATCH_IDS=/.test(r.out), 'ROLLBACK: xóa file governance => legacy 100% (tương thích checkout cũ)');
  fs.rmSync(E.root, { recursive: true, force: true });
}

// Tiêu đề CÔNG KHAI = module.title. slot.title chỉ là nhãn lúc lập kế hoạch và có thể lệch (writer sửa tiêu đề trong module): audit, backfill,
// coverage và gợi ý related của writer-pack phải dùng tiêu đề công khai, không dùng nhãn cũ (audit đầu tiên từng đo nhầm trên nhãn slot).
console.log('2b. TIÊU ĐỀ CÔNG KHAI — module.title thay cho nhãn slot cũ…');
{
  const T = microRepo('pubtitle', { gov: Object.assign({}, GOV_ENFORCE, { maxApprovedQueue: 3 }) });
  const MOD_NHOT = 'Thay nhớt xe máy: chu kỳ và cách thực hiện';
  const MOD_HN = 'Thuê xe máy Hà Nội: thủ tục';
  const mx = matrixOf(T);
  mx.slots.find(x => x.id === 'S00004').title = 'Thuê xe máy hà nội: thủ tục'; // nhãn cũ: địa danh viết thường; module (công khai) đã đúng
  mx.slots.find(x => x.id === 'S00001').title = 'Hướng dẫn chi tiết về thay nhớt xe máy'; // nhãn cũ: khung template; module không còn khung
  fs.writeFileSync(T.p('state/matrix.json'), JSON.stringify(mx, null, 1));

  const auditFile = path.join(T.root, 'audit.json');
  let r = cli(T, ['topic-audit', '--out', auditFile]);
  const au = readJ(auditFile);
  ok(r.status === 0 && au.published.titleDefects.length === 0, 'tiêu đề công khai: audit đo trên module.title — nhãn slot cũ viết thường KHÔNG bị tính là lỗi đang hiển thị', JSON.stringify(au.published.titleDefects));
  ok(!au.titleFamilies['C: "Hướng dẫn chi tiết về X"'], 'tiêu đề công khai: audit không đếm khung template của nhãn slot cũ', JSON.stringify(au.titleFamilies));

  r = cli(T, ['topic-coverage', '--json']);
  const cov = JSON.parse(r.stdout).hubs.find(h => h.hub === 'guide/bao-duong');
  ok(cov && cov.published === 1 && cov.templatedShare === 0, 'tiêu đề công khai: topic-coverage tính tỷ lệ template theo module.title', JSON.stringify(cov));

  r = cli(T, ['topic-backfill', ...COORD]);
  ok(r.status === 0 && rowsOf(T).find(x => x.slotId === 'S00004').title === MOD_HN && rowsOf(T).find(x => x.slotId === 'S00001').title === MOD_NHOT,
    'tiêu đề công khai: topic-backfill ghi dòng published bằng module.title', r.out);

  // dòng cũ đã ghi bằng nhãn slot: lệnh thường không tự sửa; --refresh-published sửa đúng, idempotent, không đụng matrix.json
  M.writeRowsAtomic(rowsOf(T).map(x => (x.slotId === 'S00004' ? Object.assign({}, x, { title: 'Thuê xe máy hà nội: thủ tục' }) : x)), T.p('state/topic-matrix.jsonl'));
  r = cli(T, ['topic-backfill', ...COORD]);
  ok(/added=0 .*refreshed=0/.test(r.out) && rowsOf(T).find(x => x.slotId === 'S00004').title === 'Thuê xe máy hà nội: thủ tục', 'topic-backfill thường chỉ thêm dòng thiếu, không tự sửa dòng cũ', r.out);
  r = cli(T, ['topic-backfill', '--refresh-published', '--dry-run', ...COORD]);
  ok(/would_refresh=1/.test(r.out) && rowsOf(T).find(x => x.slotId === 'S00004').title === 'Thuê xe máy hà nội: thủ tục', '--refresh-published --dry-run chỉ báo, không ghi', r.out);
  const mBytes = readB(T.p('state/matrix.json'));
  r = cli(T, ['topic-backfill', '--refresh-published', ...COORD]);
  ok(r.status === 0 && /refreshed=1/.test(r.out) && rowsOf(T).find(x => x.slotId === 'S00004').title === MOD_HN, '--refresh-published đồng bộ dòng published legacy về module.title', r.out);
  ok(readB(T.p('state/matrix.json')).equals(mBytes), '--refresh-published KHÔNG đụng matrix.json');
  r = cli(T, ['topic-backfill', '--refresh-published', ...COORD]);
  ok(/refreshed=0/.test(r.out), '--refresh-published idempotent', r.out);

  // gợi ý related của writer-pack hiển thị tiêu đề công khai
  const tf = writeCands(T, 'cands.jsonl', [FIX.bugi]);
  r = cli(T, ['topic-propose', '--file', tf, '--source', 'v2-manual', ...COORD]);
  const tid = (parseIds(r.out).get('bugi-xe-may-bi-dong-muoi') || {}).id;
  const need = tid ? JSON.parse(cli(T, ['topic-neighbours', tid, '--json']).stdout)[0].requiredReview : [];
  r = cli(T, ['topic-approve', tid, '--by', 'qa-test', '--ack', 'demand-unverified,evidence-unverified', '--reviewed', need.join(','), ...COORD]);
  ok(r.status === 0, 'tiêu đề công khai: chuẩn bị topic APPROVED để thử writer-pack', r.out.slice(0, 200));
  const pack = JSON.parse(cli(T, ['writer-pack', '--count', '10', '--json']).stdout);
  const relNhot = (pack.items[0] && pack.items[0].relatedPublished || []).find(x => x.slug === 'thay-nhot-xe-may');
  ok(relNhot && relNhot.title === MOD_NHOT, 'writer-pack: gợi ý related hiển thị tiêu đề công khai (module.title), không phải nhãn slot cũ', JSON.stringify(relNhot));

  // topic-coverage dùng lifecycle HIỆU LỰC: topic đã xuất bản không còn tính là "đã duyệt, chờ writer"
  const covHub = () => JSON.parse(cli(T, ['topic-coverage', '--json']).stdout).hubs.find(h => h.hub === 'garage/dong-co');
  const cv1 = covHub();
  ok(cv1.approved === 1, 'topic-coverage: topic APPROVED chờ writer được đếm ở cột duyệt', JSON.stringify(cv1));
  const mx2 = matrixOf(T);
  mx2.slots.find(x => x.id === 'S00009').state = 'PUBLISHED';
  fs.writeFileSync(T.p('state/matrix.json'), JSON.stringify(mx2, null, 1));
  const cv2 = covHub();
  ok(cv2.approved === 0 && cv2.published === cv1.published + 1, 'topic-coverage: topic đã xuất bản không còn tính là đã-duyệt-chờ-writer (lifecycle hiệu lực)', JSON.stringify(cv2));

  // verify-batch nhắc (ADVISORY) khi module có tên riêng viết thường trong title
  fs.writeFileSync(T.p('data/articles/thue-xe-may-ha-noi-thu-tuc.js'), 'module.exports = ' + JSON.stringify(Object.assign(art('thue-xe-may-ha-noi-thu-tuc', 'Thuê xe máy hà nội: thủ tục', 'thue-xe/xe-may', ['Thủ tục nhận xe', 'Điều khoản hợp đồng'], ['thuê xe máy hà nội']),
    { keyPoints: ['Ý chính'], checklist: [], steps: [], warnings: [], notes: [], references: [], date: '2026-10-01', updated: '2026-10-01', seoTitle: 'Thuê xe máy Hà Nội: thủ tục', metaDescription: 'Mô tả kiểm thử.' })) + ';\n');
  r = cli(T, ['verify-batch', 'S00004']);
  ok(/TITLE_ADVISORY S00004 — .*hà nội.*Hà Nội.*KHÔNG chặn publish/.test(r.out), 'verify-batch: TITLE_ADVISORY nêu tên riêng viết thường và dạng đúng (không chặn)', r.out.slice(0, 300));
  r = cli(T, ['verify-batch', 'S00002']);
  ok(!/TITLE_ADVISORY/.test(r.out), 'verify-batch: tiêu đề ổn thì không có TITLE_ADVISORY', r.out.slice(0, 200));
  fs.rmSync(T.root, { recursive: true, force: true });
}

// ===========================================================================
// 2c — CHÍNH SÁCH LẬP CHỈ MỤC (noindex,follow có thể hoàn tác; hợp nhất ý định mà KHÔNG xóa bài/đổi URL)
// ===========================================================================
console.log('2c. CHÍNH SÁCH LẬP CHỈ MỤC — validate, render, sitemap, hoàn tác bằng policy rỗng, bất biến repo thật…');
{
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'idxpol-'));
  const pub = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  const entry = over => Object.assign({ robots: 'noindex,follow', reason: 'Cùng ý định với bài giữ lại', consolidatedInto: 'b', decidedBy: 'chủ repo', decidedAt: '2026-10-12' }, over || {});
  const pol = entries => ({ schemaVersion: 1, entries });
  const errs = (entries, published) => IDX.validate(pol(entries), published || pub);

  // load: thiếu file = không noindex; hỏng = lỗi rõ ràng (không âm thầm bỏ qua)
  const f1 = path.join(tmpDir, 'absent.json');
  same(IDX.load(f1), { schemaVersion: 1, entries: {} }, 'index-policy: thiếu file ⇒ policy rỗng (không bài nào noindex)');
  fs.writeFileSync(path.join(tmpDir, 'corrupt.json'), '{ "entries": ');
  let thrown = '';
  try { IDX.load(path.join(tmpDir, 'corrupt.json')); } catch (e) { thrown = e.message; }
  ok(/không đọc được/.test(thrown), 'index-policy: file hỏng ⇒ lỗi rõ ràng, KHÔNG âm thầm coi là rỗng', thrown);
  fs.writeFileSync(path.join(tmpDir, 'shape.json'), JSON.stringify({ schemaVersion: 1, entries: [] }));
  thrown = '';
  try { IDX.load(path.join(tmpDir, 'shape.json')); } catch (e) { thrown = e.message; }
  ok(/sai định dạng/.test(thrown), 'index-policy: entries sai kiểu (mảng) ⇒ lỗi', thrown);

  // validate: từng luật có một ca đỏ + ca xanh
  same(errs({ a: entry() }), [], 'index-policy: mục hợp lệ ⇒ không lỗi');
  ok(errs({ zzz: entry() }).some(e => /không phải bài PUBLISHED/.test(e)), 'index-policy: slug không PUBLISHED bị từ chối');
  ok(errs({ a: entry({ robots: 'noindex,nofollow' }) }).some(e => /robots phải là/.test(e)), 'index-policy: robots khác noindex,follow bị từ chối (không nofollow lặng lẽ)');
  ok(errs({ a: entry({ reason: '  ' }) }).some(e => /thiếu reason/.test(e)), 'index-policy: thiếu lý do bị từ chối');
  ok(errs({ a: entry({ decidedBy: '' }) }).some(e => /decidedBy/.test(e)) && errs({ a: entry({ decidedAt: '12/10/2026' }) }).some(e => /decidedAt/.test(e)), 'index-policy: thiếu người quyết định/ngày YYYY-MM-DD bị từ chối');
  ok(errs({ a: entry({ consolidatedInto: 'a' }) }).some(e => /chính nó/.test(e)), 'index-policy: hợp nhất vào chính nó bị từ chối');
  ok(errs({ a: entry({ consolidatedInto: 'zzz' }) }).some(e => /không PUBLISHED/.test(e)), 'index-policy: đích hợp nhất chưa PUBLISHED bị từ chối');
  ok(errs({ a: entry({ consolidatedInto: 'b' }), b: entry({ consolidatedInto: 'c' }) }).some(e => /chuỗi\/vòng/.test(e)), 'index-policy: đích hợp nhất cũng bị noindex (chuỗi/vòng) bị từ chối');
  same(errs({ a: entry({ consolidatedInto: null }) }), [], 'index-policy: consolidatedInto là tùy chọn');
  ok(IDX.validate({ schemaVersion: 2, entries: {} }, pub).some(e => /schemaVersion/.test(e)), 'index-policy: schemaVersion lạ bị từ chối');
  const over = {}; for (const k of ['a', 'b', 'c', 'd']) over[k] = entry({ consolidatedInto: 'j' });
  ok(errs(over).some(e => /vượt trần/.test(e)), 'index-policy: noindex vượt trần ' + Math.round(IDX.MAX_SHARE * 100) + '% số bài PUBLISHED bị từ chối (chống nhầm lẫn hàng loạt)');
  const okShare = {}; for (const k of ['a', 'b', 'c']) okShare[k] = entry({ consolidatedInto: 'j' });
  same(errs(okShare), [], 'index-policy: đúng bằng trần vẫn hợp lệ');
  ok(IDX.isNoindex(pol({ a: entry() }), 'a') && !IDX.isNoindex(pol({ a: entry() }), 'b') && IDX.robotsFor(pol({ a: entry() }), 'a') === 'noindex,follow' && IDX.robotsFor(pol({ a: entry() }), 'b') === null, 'index-policy: isNoindex/robotsFor đúng, kể cả slug kiểu "constructor"');
  ok(!IDX.isNoindex(pol({}), 'constructor') && !IDX.isNoindex(pol({}), '__proto__'), 'index-policy: không nhầm slug trùng thuộc tính Object.prototype');

  // render/sinh: policy thật vs policy rỗng trên cùng corpus thật (bản nhớ, KHÔNG ghi đĩa)
  const realPolicy = IDX.load();
  const noindexSlugs = Object.keys(realPolicy.entries);
  const matrix = readJ(path.join(ROOT, 'factory/state/matrix.json'));
  const slotBySlug = new Map(matrix.slots.map(x => [x.slug, x]));
  const withPolicy = GEN.buildAll();
  const noPolicy = GEN.buildAll({ policy: { schemaVersion: 1, entries: {} } });
  const META = '<meta name="robots" content="noindex,follow">\n';
  const diff = Object.keys(noPolicy.files).filter(rel => withPolicy.files[rel] !== noPolicy.files[rel]).sort();
  const expectDiff = noindexSlugs.map(sl => slotBySlug.get(sl).hub + '/' + sl + '/index.html').concat(noindexSlugs.length ? ['sitemap-articles.xml'] : []).sort();
  same(diff, expectDiff, 'hoàn tác: policy rỗng chỉ đổi đúng các trang bị noindex + sitemap-articles.xml (không đụng trang/chỉ mục khác)');
  ok(Object.keys(withPolicy.files).length === Object.keys(noPolicy.files).length, 'hoàn tác: số file sinh không đổi (không xóa/thêm trang)');
  let removedOk = true, exactlyOneMeta = true;
  for (const sl of noindexSlugs) {
    const rel = slotBySlug.get(sl).hub + '/' + sl + '/index.html';
    const html = withPolicy.files[rel];
    if ((html.split(META).length - 1) !== 1) exactlyOneMeta = false;
    if (html.replace(META, '') !== noPolicy.files[rel]) removedOk = false;
  }
  ok(exactlyOneMeta, 'render: mỗi trang noindex có ĐÚNG một meta robots noindex,follow');
  ok(removedOk, 'hoàn tác: bỏ đúng một dòng meta robots ⇒ trang trùng BYTE với bản sinh khi không có policy (không đổi nội dung/URL/canonical)');
  ok(Object.keys(noPolicy.files).every(rel => !/name="robots"/.test(noPolicy.files[rel]) || rel.endsWith('.xml')), 'render: không có policy ⇒ không trang nào có meta robots (hành vi cũ)');
  const locsOf = x => [...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const smWith = locsOf(withPolicy.files['sitemap-articles.xml']), smNo = locsOf(noPolicy.files['sitemap-articles.xml']);
  const noindexUrls = new Set(noindexSlugs.map(sl => require('./site.config').SITE.baseUrl + slotBySlug.get(sl).hub + '/' + sl + '/'));
  same(smNo.filter(u => !noindexUrls.has(u)), smWith, 'sitemap: bài noindex vắng, mọi URL khác giữ nguyên thứ tự');
  ok(smNo.length - smWith.length === noindexSlugs.length, 'sitemap: bớt đúng số bài noindex', smNo.length + ' vs ' + smWith.length);
  same(withPolicy.files['assets/data/search-index.json'], noPolicy.files['assets/data/search-index.json'], 'tìm kiếm trong site: bài noindex vẫn nằm trong chỉ mục tìm kiếm (người đọc vẫn tìm thấy)');
  same(withPolicy.files['assets/data/chatbot-index.json'], noPolicy.files['assets/data/chatbot-index.json'], 'chatbot: chỉ mục không đổi vì noindex');

  // bất biến trên repo thật (đĩa)
  const pubSlugs = new Set(matrix.slots.filter(x => x.state === 'PUBLISHED').map(x => x.slug));
  same(IDX.validate(realPolicy, pubSlugs), [], 'repo thật: index-policy.json hợp lệ (bài PUBLISHED, đích hợp nhất PUBLISHED & còn lập chỉ mục, trong trần)');
  const smDisk = locsOf(readS(path.join(ROOT, 'sitemap-articles.xml')));
  const idxDisk = readJ(path.join(ROOT, 'assets/data/search-index.json'));
  let bad = [];
  for (const sl of noindexSlugs) {
    const e = realPolicy.entries[sl], s1 = slotBySlug.get(sl), tgt = e.consolidatedInto && slotBySlug.get(e.consolidatedInto);
    const url = require('./site.config').SITE.baseUrl + s1.hub + '/' + sl + '/';
    const page = path.join(ROOT, s1.hub, sl, 'index.html');
    if (!fs.existsSync(page)) bad.push(sl + ': mất trang');
    else if (!readS(page).includes(META.trim())) bad.push(sl + ': thiếu meta');
    if (smDisk.includes(url)) bad.push(sl + ': còn trong sitemap');
    if (!idxDisk.some(d => d.url === s1.hub + '/' + sl + '/')) bad.push(sl + ': mất khỏi tìm kiếm');
    if (e.consolidatedInto) {
      if (!tgt || tgt.hub !== s1.hub) bad.push(sl + ': đích hợp nhất khác hub');
      else if (!smDisk.includes(require('./site.config').SITE.baseUrl + tgt.hub + '/' + tgt.slug + '/')) bad.push(sl + ': đích hợp nhất không có trong sitemap');
    }
  }
  same(bad, [], 'repo thật: mọi bài noindex còn trang + meta, vắng sitemap, còn trong tìm kiếm; đích hợp nhất cùng hub và nằm trong sitemap');
  ok(smDisk.length === pubSlugs.size - noindexSlugs.length, 'repo thật: số URL sitemap-articles = số bài PUBLISHED trừ bài noindex', smDisk.length + ' vs ' + pubSlugs.size + ' - ' + noindexSlugs.length);
  ok(noindexSlugs.every(sl => slotBySlug.get(sl).hub === 'thue-xe/xe-may') || noindexSlugs.length === 0, 'phạm vi: chính sách hiện chỉ chạm hub thue-xe/xe-may (mở rộng sang hub khác là quyết định của chủ repo)');
  ok(['S00002', 'S00003', 'S00201', 'S00202', 'S00203', 'S00204', 'S00205', 'S00206'].every(id => { const s2 = matrix.slots.find(x => x.id === id); return s2 && !IDX.isNoindex(realPolicy, s2.slug); }), 'phạm vi: các bài trụ cột thuê xe vẫn lập chỉ mục (đại diện cho ý định Hà Nội/Honda Vision)');
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

// ===========================================================================
// TẦNG 3 — PRODUCTION INVARIANT (repo thật, READ-ONLY)
// ===========================================================================
console.log('3. PRODUCTION INVARIANT — repo thật: topic-check, dữ liệu không bịa, hoán vị bị chặn, calibration…');
{
  const real = { p: rel => path.join(ROOT, 'factory', ...rel.split('/')), root: ROOT };
  const realCli = args => cli(real, args);
  let r = realCli(['topic-check']);
  ok(r.status === 0 && /TOPIC_CHECK_OK/.test(r.out), 'repo thật: topic-check OK', r.out.slice(-300));
  r = realCli(['topic-check', '--recheck']);
  ok(r.status === 0, 'repo thật: topic-check --recheck OK (mọi topic V2 đã duyệt vẫn ACCEPT)', r.out.slice(-300));
  const { rows, errors } = M.readRows();
  const matrix = readJ(path.join(ROOT, 'factory', 'state', 'matrix.json'));
  ok(errors.length === 0, 'repo thật: topic-matrix.jsonl không có dòng hỏng', JSON.stringify(errors.slice(0, 3)));
  ok(rows.every(x => M.validateRow(x).length === 0), 'repo thật: mọi dòng topic-matrix hợp lệ theo validateRow');
  ok(new Set(rows.map(x => x.topicId)).size === rows.length, 'repo thật: topicId duy nhất');
  const pubSlots = matrix.slots.filter(s => s.state === 'PUBLISHED');
  const rowSlots = new Set(rows.map(x => x.slotId).filter(Boolean));
  ok(pubSlots.every(s => rowSlots.has(s.id)), 'repo thật: mọi slot PUBLISHED đều có dòng trong topic-matrix', 'thiếu ' + pubSlots.filter(s => !rowSlots.has(s.id)).length);
  r = realCli(['topic-coverage', '--json']);
  let covReal = null;
  try { covReal = JSON.parse(r.stdout); } catch (_) { /* kiểm ở dưới */ }
  ok(r.status === 0 && covReal && covReal.totals.published === pubSlots.length && covReal.hubs.reduce((t, h) => t + h.published, 0) === pubSlots.length, 'repo thật: topic-coverage đếm đủ mọi bài đã xuất bản theo hub', r.out.slice(0, 120));
  const gov = Gov.load();
  ok(gov.present, 'repo thật: có factory/topic-governance.json');
  if (gov.requireApproved) {
    const approved = M.approvedBySlot(rows);
    const open = matrix.slots.filter(s => !['PLANNED', 'PUBLISHED', 'BLOCKED'].includes(s.state));
    ok(open.every(s => approved.has(s.id)), 'repo thật (enforce): mọi slot đang xử lý đều có topic APPROVED', open.filter(s => !approved.has(s.id)).map(s => s.id).join());
  }
  // không bịa nhu cầu / bằng chứng
  const fabricated = rows.filter(x => x.demand && (x.demand.source === 'none' || !x.demand.source) && (x.demand.impressions != null || x.demand.clicks != null));
  ok(fabricated.length === 0, 'repo thật: không dòng nào có số liệu nhu cầu mà không có nguồn đo (GSC/site-search)', fabricated.map(x => x.topicId).join());
  const badDemand = rows.filter(x => x.demand && (x.demand.source === 'gsc' || x.demand.source === 'site-search') && !(Number.isFinite(x.demand.impressions) && x.demand.period));
  ok(badDemand.length === 0, 'repo thật: demand gsc/site-search luôn có impressions + period');
  const badEv = rows.filter(x => x.evidence && x.evidence.status === 'verified' && !G.evidenceVerified(x));
  ok(badEv.length === 0, 'repo thật: evidence “verified” luôn có nguồn đầy đủ (label/url/retrievedAt)', badEv.map(x => x.topicId).join());
  const unsafeApproved = rows.filter(x => /^v2-|^gsc-/.test(x.source) && M.APPROVED_SET.has(x.lifecycle) && x.lifecycle !== 'PUBLISHED' && G.riskTriggers(x).length && !G.evidenceVerified(x));
  ok(unsafeApproved.length === 0, 'repo thật: topic có dữ kiện luật/giá/thông số chỉ được duyệt khi bằng chứng đã xác minh', unsafeApproved.map(x => x.topicId).join());
  const ackMissing = rows.filter(x => /^v2-|^gsc-/.test(x.source) && M.APPROVED_SET.has(x.lifecycle) && x.gate && x.gate.reasons &&
    x.gate.reasons.filter(w => w.verdict === 'WARN').some(w => !((x.editorial || {}).acknowledged || []).includes(w.code)));
  ok(ackMissing.length === 0, 'repo thật: mọi topic đã duyệt đều ack đích danh từng cảnh báo', ackMissing.map(x => x.topicId).join());

  // hồ sơ pilot (nếu có): 100 ứng viên, kết quả đã ghi, rà soát biên tập đầy đủ
  const pilot = rows.filter(x => x.source === 'v2-pilot');
  if (pilot.length) {
    ok(pilot.length === 100, 'pilot: đúng 100 ứng viên được ghi nhận', String(pilot.length));
    const merged = pilot.filter(x => x.disposition === 'MERGE-CANDIDATE');
    const slugs = new Set(matrix.slots.map(s => s.slug).concat(rows.map(x => x.slug)));
    ok(merged.every(x => x.lifecycle === 'REJECTED' && x.mergeInto && slugs.has(x.mergeInto) && x.mergeInto !== x.slug), 'pilot: mọi topic MERGE-CANDIDATE đều REJECTED + mergeInto trỏ tới bài/topic có thật');
    ok(merged.every(x => x.editorial && x.editorial.reviewedBy && x.editorial.note), 'pilot: mọi quyết định gộp đều có người rà soát + lý do');
    const research = pilot.filter(x => x.disposition === 'NEEDS-RESEARCH');
    ok(research.every(x => x.lifecycle === 'RESEARCH' && x.gate.reasons.some(w => w.code === 'needs-verified-data' || w.code === 'location-only-variant' || w.code === 'local-evidence-unverified')), 'pilot: NEEDS-RESEARCH luôn kèm lý do cần dữ kiện xác minh');
    ok(pilot.filter(x => x.lifecycle === 'PLANNED').every(x => x.gate.verdict === 'ACCEPT' && !x.slotId), 'pilot: topic ACCEPT chưa duyệt không có slot (writer không thấy)');
    metrics.pilot = { total: pilot.length, accept: pilot.filter(x => x.gate.verdict === 'ACCEPT').length, merge: merged.length, research: research.length, reject: pilot.filter(x => x.disposition === 'REJECT').length, rewrite: pilot.filter(x => x.disposition === 'REWRITE').length };
  }
  // chống sót CJK/Cyrillic/Hangul (AGENTS.md quy tắc 8)
  const junk = new RegExp('[\\u3040-\\u30ff\\u3400-\\u9fff\\uac00-\\ud7af\\u0400-\\u04ff]');
  const scan = ['state/topic-matrix.jsonl', 'topic-governance.json', 'data/topic-lexicon.js', 'data/topic-pilot-v2.jsonl', 'data/topic-pilot-v2-review.json', 'topic.js', 'lib/topic-intel.js', 'lib/topic-gate.js', 'lib/topic-matrix.js', 'lib/topic-governance.js', 'lib/topic-index.js', 'test-topic-v2.js']
    .filter(f => fs.existsSync(real.p(f)));
  ok(scan.every(f => !junk.test(readS(real.p(f)))), 'không có ký tự CJK/Cyrillic/Hangul trong nguồn V2', scan.filter(f => junk.test(readS(real.p(f)))).join());

  // hoán vị của bài đã xuất bản (property trên corpus thật) — gate PHẢI chặn
  const direct = T.loadArticleDocs({ articlesDir: path.join(ROOT, 'factory', 'data', 'articles') }, { flags: new Set(['no-index']), opts: {} }).docs;
  const corpus = T.buildCorpus({ matrix, rows: [], gov, rowErrors: [] }, direct);
  const baseOf = d => I.leadPhrase(d.title) || d.title; // chủ thể chính của bài (trước dấu “:”)
  const pubDocs = direct.filter(d => I.analyzeTopic(baseOf(d)).head.length >= 2).sort((a, b) => (a.slug < b.slug ? -1 : 1));
  const stride = Math.max(1, Math.floor(pubDocs.length / 80));
  const sample = pubDocs.filter((_, i) => i % stride === 0).slice(0, 80);
  const flagged = v => v === 'REJECT' || v === 'MERGE-CANDIDATE';
  const kinds = {
    wrapper: d => 'Kinh nghiệm ' + baseOf(d) + ' dành cho người mới',
    summary: d => 'Tổng hợp kiến thức ' + baseOf(d),
    persona: d => baseOf(d) + ' cho người mới',
    place: d => baseOf(d) + ' tại Đà Nẵng',
  };
  const t0 = Date.now();
  let total = 0, caught = 0;
  const missed = [];
  const perKind = {};
  for (const [k, mk] of Object.entries(kinds)) {
    perKind[k] = { n: 0, caught: 0 };
    for (const d of sample) {
      const title = mk(d);
      const res = G.evaluate({ title, slug: 'perm-' + k + '-' + d.slug, hub: d.hub, source: 'v2-manual', intent: 'informational' }, corpus, { legacy: true });
      total++; perKind[k].n++;
      if (flagged(res.verdict)) { caught++; perKind[k].caught++; } else if (missed.length < 8) missed.push(k + ': ' + title);
    }
  }
  const recall = caught / total;
  metrics.permutation = { sample: sample.length, variants: total, caught, recall: Number(recall.toFixed(3)), perKind, ms: Date.now() - t0 };
  ok(sample.length >= 40, 'corpus thật đủ lớn để lấy mẫu hoán vị', String(sample.length));
  ok(recall >= 0.95, 'hoán vị khung/đối tượng/địa danh của bài đã xuất bản bị gate chặn >= 95%', 'recall ' + recall.toFixed(3) + ' missed: ' + missed.join(' | '));
  // tất định trên corpus thật
  const probe = { title: 'Kinh nghiệm ' + baseOf(sample[0]) + ' dành cho người mới', slug: 'perm-x', hub: sample[0].hub, source: 'v2-manual', intent: 'informational' };
  same(JSON.stringify(G.evaluate(probe, corpus, { legacy: true })), JSON.stringify(G.evaluate(probe, corpus, { legacy: true })), 'gate tất định trên corpus thật');

  // calibration độ phủ truy vấn trên corpus thật
  let q = 0, qCovered = 0, qGap = 0;
  for (const d of pubDocs) {
    const kws = (d.headline.keywords || []).filter(k => k && k.split(' ').length >= 2);
    if (!kws.length) continue;
    q++;
    const st = T.coverageFor(corpus, [{ query: kws[0].toLowerCase(), imp: 1 }]).state;
    if (st === 'COVERED' || st === 'NEARBY') qCovered++; else qGap++;
  }
  const unrelated = ['cách nấu phở bò tại nhà', 'lập trình python cơ bản', 'vé máy bay giá rẻ đi phú quốc', 'học tiếng anh giao tiếp', 'mua bitcoin an toàn', 'cách trồng rau sạch trên ban công'];
  const unrelGap = unrelated.filter(x => T.coverageFor(corpus, [{ query: x, imp: 1 }]).state === 'GAP').length;
  metrics.coverage = { ownKeywordQueries: q, coveredOrNearby: qCovered, falseGap: qGap, unrelatedGap: unrelGap + '/' + unrelated.length };
  ok(q >= 100 && qCovered / q >= 0.97, 'coverage: từ khóa của chính bài được nhận là đã phủ >= 97%', qCovered + '/' + q);
  ok(unrelGap === unrelated.length, 'coverage: truy vấn ngoài chủ đề đều là GAP', unrelGap + '/' + unrelated.length);
}

// ===========================================================================
// TẦNG 4 — LONG-RUN / FAILURE RECOVERY
// ===========================================================================
console.log('4. LONG-RUN / FAILURE RECOVERY — JSONL hỏng, cache SQLite hỏng, crash giữa slot↔row, flood hoán vị, quy mô…');
{
  // 4a. JSONL hỏng / cắt cụt: mọi lệnh GHI từ chối, lệnh đọc vẫn chạy, không mất dữ liệu
  const E = microRepo('fail');
  cli(E, ['topic-backfill', ...COORD]);
  const cf = writeCands(E, 'cands.jsonl', [FIX.bugi, FIX.guong]);
  let r = cli(E, ['topic-propose', '--file', cf, '--source', 'v2-manual', ...COORD]);
  const ids = parseIds(r.out);
  const tmFile = E.p('state/topic-matrix.jsonl');
  const good = readB(tmFile);
  fs.appendFileSync(tmFile, '{"schema":2,"topicId":"T9\n'); // dòng cuối bị cắt cụt giữa chừng (crash khi ghi)
  const corrupted = readB(tmFile);
  r = cli(E, ['topic-check']);
  ok(r.status === 1 && /dòng \d+ hỏng/.test(r.out), 'JSONL cắt cụt: topic-check báo lỗi và exit 1', r.out.slice(-200));
  r = cli(E, ['topic-status']);
  ok(r.status === 0, 'JSONL cắt cụt: topic-status (đọc) vẫn chạy');
  for (const args of [
    ['topic-propose', '--file', cf, '--source', 'v2-manual', ...COORD],
    ['topic-approve', ids.get('bugi-xe-may-bi-dong-muoi').id, '--by', 'x', '--ack', 'demand-unverified,evidence-unverified', '--reviewed', 'x', ...COORD],
    ['topic-reject', ids.get('bugi-xe-may-bi-dong-muoi').id, '--reason', 'x', ...COORD],
    ['topic-backfill', ...COORD],
  ]) {
    r = cli(E, args);
    ok(r.status === 1 && /TỪ CHỐI ghi/.test(r.out) && readB(tmFile).equals(corrupted), 'JSONL hỏng: ' + args[0] + ' từ chối ghi và KHÔNG làm mất dòng hỏng', r.out.slice(0, 160));
  }
  r = cli(E, ['topic-propose', '--file', cf, '--dry-run']);
  ok(r.status === 0, 'JSONL hỏng: propose --dry-run (không ghi) vẫn dùng được');
  fs.writeFileSync(tmFile, good); // khôi phục (như git checkout)
  r = cli(E, ['topic-check']);
  ok(r.status === 0, 'khôi phục JSONL => topic-check OK trở lại');
  fs.writeFileSync(tmFile + '.4242.tmp', 'rác dở dang');
  r = cli(E, ['topic-check']);
  ok(r.status === 0 && readB(tmFile).equals(good), 'file .tmp mồ côi (crash khi ghi nguyên tử) không ảnh hưởng dữ liệu thật');
  fs.unlinkSync(tmFile + '.4242.tmp');

  // 4b. crash giữa “tạo slot” và “ghi dòng topic” khi approve
  const A = ids.get('bugi-xe-may-bi-dong-muoi').id;
  const m = matrixOf(E);
  const nextId = 'S' + String(m.slots.length + 1).padStart(5, '0');
  m.slots.push({ id: nextId, hub: 'garage/dong-co', slug: 'bugi-xe-may-bi-dong-muoi', title: FIX.bugi.title, primaryIntent: 'troubleshooting/bugi-xe-may-bi-dong-muoi', notes: 'source=topic-v2 topicId=' + A, state: 'PLANNED', qaScore: null, attempts: 0, createdAt: NOW, updatedAt: NOW });
  fs.writeFileSync(E.p('state/matrix.json'), JSON.stringify(m, null, 1));
  r = cli(E, ['topic-check']);
  ok(r.status === 0, 'crash giữa slot↔row: trạng thái mồ côi không làm hỏng invariant (fail-closed: chưa APPROVED nên writer không nhận)', r.out.slice(-200));
  const wp = cli(E, ['writer-pack', '--count', '10']);
  ok(!/BATCH_IDS=S/.test(wp.out) || !(new RegExp(nextId).test((/BATCH_IDS=(\S+)/.exec(wp.out) || [])[1] || '')), 'crash giữa slot↔row: slot mồ côi KHÔNG được writer nhận');
  const need = JSON.parse(cli(E, ['topic-neighbours', A, '--json']).stdout)[0].requiredReview;
  r = cli(E, ['topic-approve', A, '--by', 'qa', '--ack', 'demand-unverified,evidence-unverified', '--reviewed', need.join(','), ...COORD]);
  ok(r.status === 0 && new RegExp('APPROVED ' + A + ' → ' + nextId).test(r.out), 'crash giữa slot↔row: approve lại NHẬN slot mồ côi (không tạo slot trùng)', r.out);
  same(matrixOf(E).slots.filter(s => s.slug === 'bugi-xe-may-bi-dong-muoi').length, 1, 'chỉ có đúng một slot cho topic sau khi phục hồi');
  ok(cli(E, ['topic-check']).status === 0, 'sau phục hồi topic-check OK');

  // 4c. slot trong matrix.json đang xử lý mà topic chưa duyệt (sửa tay) => LỖI khi enforce
  const m2 = matrixOf(E);
  m2.slots.push({ id: 'S' + String(m2.slots.length + 1).padStart(5, '0'), hub: 'garage/phanh', slug: 'slot-lau', title: 'Slot lậu', primaryIntent: 'x/slot-lau', notes: '', state: 'WRITING', qaScore: null, attempts: 0, createdAt: NOW, updatedAt: NOW });
  fs.writeFileSync(E.p('state/matrix.json'), JSON.stringify(m2, null, 1));
  r = cli(E, ['topic-check']);
  ok(r.status === 1 && /đang xử lý nhưng topic chưa APPROVED/.test(r.out), 'slot lậu đang xử lý không qua duyệt bị topic-check bắt (exit 1)', r.out.slice(-200));
  // 4c2. slug đang bị một slot KHÔNG có dòng topic (vd. slot BLOCKED cũ) giữ => REWRITE slug-taken-by-slot (approve sẽ không tạo được slot)
  const m3 = matrixOf(E);
  m3.slots.push({ id: 'S' + String(m3.slots.length + 1).padStart(5, '0'), hub: 'garage/truyen-dong', slug: 'khoa-co-xe-may-bi-ket', title: 'Khóa cổ xe máy bị kẹt', primaryIntent: 'x/khoa-co', notes: '', state: 'BLOCKED', qaScore: null, attempts: 3, createdAt: NOW, updatedAt: NOW });
  fs.writeFileSync(E.p('state/matrix.json'), JSON.stringify(m3, null, 1));
  const taken = writeCands(E, 'taken.jsonl', [cand({
    slug: 'khoa-co-xe-may-bi-ket', title: 'Ổ khóa cổ xe máy bị kẹt chìa: cách xử lý không làm hỏng ruột khóa', hub: 'garage/truyen-dong', primaryKeyword: 'ổ khóa cổ xe máy bị kẹt chìa',
    userProblem: 'Chìa khóa cắm vào ổ khóa cổ nhưng không xoay được, người dùng sợ bẻ gãy chìa hoặc làm hỏng ruột khóa.',
    informationGain: 'Thứ tự thử an toàn khi chìa kẹt: lắc nhẹ tay lái, dùng chất bôi trơn phù hợp và dấu hiệu phải gọi thợ thay ruột khóa.',
    outline: ['Vì sao ổ khóa cổ bị kẹt chìa', 'Lắc nhẹ tay lái đúng cách', 'Bôi trơn ruột khóa phù hợp', 'Những việc không nên làm khi chìa kẹt', 'Khi nào phải thay ruột khóa'],
  })]);
  r = cli(E, ['topic-propose', '--file', taken, '--dry-run']);
  ok(/^REWRITE\s/m.test(r.out) && /slug-taken-by-slot/.test(r.out), 'propose: slug đang bị slot không có dòng topic giữ => REWRITE slug-taken-by-slot', r.out.slice(0, 200));
  fs.rmSync(E.root, { recursive: true, force: true });

  // 4d. cache SQLite derived: stale / hỏng / thiếu => rebuild an toàn, kết quả không đổi
  let hasSqlite = true;
  try { execFileSync(process.execPath, ['-e', "require('node:sqlite')"], { stdio: 'ignore' }); } catch (_) { hasSqlite = false; }
  if (!hasSqlite) console.log('  (bỏ qua 4d: node:sqlite không khả dụng)');
  else {
    const X = microRepo('idx');
    cli(X, ['topic-backfill', ...COORD]);
    const xf = writeCands(X, 'c.jsonl', [FIX.bugi, FIX.guong, FIX.dupWrapper]);
    const verdicts = out => out.split('\n').filter(l => /^(ACCEPT|REJECT|MERGE-CANDIDATE|REWRITE|NEEDS-RESEARCH)\s/.test(l)).map(l => l.replace(/\s+T\d+\s+/, ' ')).join('\n');
    const baseline = cli(X, ['topic-propose', '--file', xf, '--dry-run', '--no-index']);
    ok(baseline.status === 0 && verdicts(baseline.out).length > 0, 'đường fallback (không index): propose --dry-run chạy được');
    r = cli(X, ['topic-index-check']);
    ok(r.status === 1 && /missing/.test(r.out), 'index thiếu: topic-index-check báo lỗi');
    r = cli(X, ['topic-index-rebuild']);
    ok(r.status === 1 && /TỪ CHỐI/.test(r.out), 'topic-index-rebuild cần role coordinator (derived cache chỉ coordinator ghi)');
    r = cli(X, ['topic-index-rebuild', ...COORD]);
    ok(r.status === 0 && /parsed=7/.test(r.out) && /broken=0/.test(r.out), 'topic-index-rebuild dựng 7 module bài', r.out);
    r = cli(X, ['topic-index-rebuild', ...COORD]);
    ok(/parsed=0 reused=7/.test(r.out), 'topic-index-rebuild tăng dần: lần hai chỉ tái dùng, không parse lại', r.out);
    ok(cli(X, ['topic-index-check']).status === 0, 'index OK sau rebuild');
    same(verdicts(cli(X, ['topic-propose', '--file', xf, '--dry-run']).out), verdicts(baseline.out), 'verdict dùng index == verdict parse trực tiếp');
    // stale: sửa nội dung một bài
    const af = X.p('data/articles/sac-pin-xe-dien.js');
    fs.appendFileSync(af, '\n// đổi nội dung => stamp lệch\n');
    r = cli(X, ['topic-index-check']);
    ok(r.status === 1 && /stale/.test(r.out), 'index stale khi module bài đổi: topic-index-check báo lỗi', r.out.slice(0, 160));
    same(verdicts(cli(X, ['topic-propose', '--file', xf, '--dry-run']).out), verdicts(baseline.out), 'index stale + không có role: tự fallback parse trực tiếp, kết quả không đổi');
    r = cli(X, ['topic-index-rebuild', ...COORD]);
    ok(r.status === 0 && /parsed=1 reused=6/.test(r.out), 'rebuild tăng dần sau stale: chỉ parse lại file đổi', r.out);
    // thêm / xoá bài
    fs.writeFileSync(X.p('data/articles/bai-moi.js'), 'module.exports = ' + JSON.stringify(art('bai-moi', 'Bài mới kiểm thử', 'garage/lop', ['Một ý', 'Hai ý ba', 'Ba ý bốn', 'Bốn ý năm'], ['bài mới'])) + ';\n');
    fs.unlinkSync(X.p('data/articles/mu-bao-hiem-dat-chuan.js'));
    r = cli(X, ['topic-index-rebuild', ...COORD]);
    ok(/parsed=1/.test(r.out) && /removed=1/.test(r.out), 'rebuild: bài mới được parse, bài bị xóa được loại khỏi cache', r.out);
    // hỏng hoàn toàn
    fs.writeFileSync(X.p('state/topic-index.sqlite'), Buffer.from('đây không phải sqlite — rác'.repeat(50)));
    r = cli(X, ['topic-index-check']);
    ok(r.status === 1 && /corrupt|TOPIC_INDEX_CHECK_FAIL/.test(r.out), 'index hỏng: topic-index-check báo lỗi');
    r = cli(X, ['topic-propose', '--file', xf, '--dry-run']);
    ok(r.status === 0, 'index hỏng + không role: propose --dry-run vẫn chạy (fallback)');
    r = cli(X, ['topic-index-rebuild', ...COORD]);
    ok(r.status === 0 && cli(X, ['topic-index-check']).status === 0, 'index hỏng: rebuild coordinator dựng lại từ nguồn thật');
    ok(!/topic-index/.test(cli(X, ['topic-check']).out.replace(/TOPIC_CHECK_OK.*/, '')), 'index chỉ là cache: topic-check không phụ thuộc index');
    fs.rmSync(X.root, { recursive: true, force: true });
  }

  // 4e. flood hoán vị + quy mô (một lần propose, corpus micro)
  const F = microRepo('flood');
  cli(F, ['topic-backfill', ...COORD]);
  const base = 'Chọn mũ bảo hiểm 3/4 đầu';
  const contexts = ['cho người mới', 'đô thị', 'đường dài', 'ngắn ngày', 'dài ngày', 'thực tế', 'hằng ngày', 'mùa mưa', 'cho sinh viên', 'cho người cao tuổi'];
  const frames = ['Kinh nghiệm {t} dành cho người mới', 'Tổng hợp kiến thức {t}', 'Hướng dẫn chi tiết về {t}', '{t} — những điều cần biết', '{t}: checklist từng bước', '{t}: câu hỏi thực tế'];
  const places = ['', ' tại Hà Nội', ' tại Đà Nẵng', ' tại TP.HCM', ' ở Huế'];
  const flood = [];
  let n = 0;
  for (const f of frames) for (const c of contexts) for (const p of places) {
    const title = f.replace('{t}', base) + ' ' + c + p;
    n++;
    flood.push(cand({ slug: 'flood-' + n, title, hub: 'review/review-mu-bao-hiem', intent: 'informational', contentType: 'guide', primaryKeyword: 'mũ bảo hiểm 3/4 đầu',
      outline: ['Mũ 3/4 đầu là gì', 'Tiêu chí chọn mũ', 'Kích cỡ và độ vừa đầu', 'Quai khóa và kính', 'Bảo quản mũ đúng cách'], informationGain: 'Hướng dẫn chọn mũ 3/4 đầu theo kích cỡ, độ vừa đầu, vật liệu vỏ, quai khóa và kính chắn gió, kèm cách bảo quản.', userProblem: 'Người mua không biết chọn mũ 3/4 đầu nào phù hợp với khuôn đầu của mình.' }));
  }
  const ff = writeCands(F, 'flood.jsonl', flood);
  const tF = Date.now();
  r = cli(F, ['topic-propose', '--file', ff, '--source', 'v2-manual', ...COORD]);
  const dtFlood = Date.now() - tF;
  const fl = [...parseIds(r.out).values()];
  const flAccept = fl.filter(x => x.verdict === 'ACCEPT').length;
  metrics.flood = { candidates: flood.length, accepted: flAccept, ms: dtFlood };
  ok(r.status === 0 && fl.length === flood.length, 'flood: gate xử lý đủ ' + flood.length + ' hoán vị', r.out.slice(-200));
  ok(flAccept <= 1, 'flood: ' + flood.length + ' hoán vị khung×bối cảnh×địa danh của MỘT chủ đề chỉ được tối đa 1 ACCEPT', 'accept=' + flAccept);
  ok(cli(F, ['topic-check']).status === 0, 'flood: invariant (trần intent cluster) vẫn thỏa sau propose hàng loạt');
  fs.rmSync(F.root, { recursive: true, force: true });

  // 4f. quy mô: nhiều ứng viên ĐA DẠNG (túi từ ngẫu nhiên tất định lấy từ từ vựng thật) trong MỘT lần chạy
  function mulberry32(seed) { let a = seed; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const realDocs = T.loadArticleDocs({ articlesDir: path.join(ROOT, 'factory', 'data', 'articles') }, { flags: new Set(['no-index']), opts: {} }).docs;
  const vocabSet = new Set();
  for (const d of realDocs) for (const f of [d.title].concat(d.headline.outline, d.headline.keywords, d.headline.text.filter(Boolean))) for (const t of I.contentTokens(f)) if (/^[a-z]+$/.test(t)) vocabSet.add(t);
  const vocab = [...vocabSet].sort();
  const bag = (rng, n) => Array.from({ length: n }, () => vocab[Math.floor(rng() ** 1.6 * vocab.length)]).join(' ');
  ok(vocab.length > 500, 'từ vựng thật đủ lớn để dựng ứng viên đa dạng', String(vocab.length));

  const S = microRepo('scale');
  cli(S, ['topic-backfill', ...COORD]);
  const rngS = mulberry32(20261012);
  const N_SCALE = 3000;
  const bagCands = [];
  for (let i = 0; i < N_SCALE; i++) {
    const w = bag(rngS, 5);
    bagCands.push(cand({
      slug: 'bag-' + i, title: 'Chủ đề ' + w + ' cần lưu ý', hub: 'garage/loi-thuong-gap', primaryKeyword: w.split(' ').slice(0, 2).join(' '),
      userProblem: 'Người dùng gặp tình huống ' + bag(rngS, 8) + ' nhưng chưa rõ nguyên nhân thuộc đâu.',
      informationGain: 'Phân tích riêng ' + bag(rngS, 12) + ' kèm quy trình kiểm tra từng bước.',
      outline: [bag(rngS, 4), bag(rngS, 4), bag(rngS, 4), bag(rngS, 4), bag(rngS, 4)].map(x => 'Mục ' + x),
    }));
  }
  const sf = writeCands(S, 'bag.jsonl', bagCands);
  const tS = Date.now();
  r = cli(S, ['topic-propose', '--file', sf, '--source', 'v2-manual', ...COORD]);
  const dtScale = Date.now() - tS;
  const sv = [...parseIds(r.out).values()];
  const cnt = {};
  for (const x of sv) cnt[x.verdict] = (cnt[x.verdict] || 0) + 1;
  metrics.scaleCli = { candidates: N_SCALE, ms: dtScale, perCandidateMs: Number((dtScale / N_SCALE).toFixed(2)), verdicts: cnt };
  ok(r.status === 0 && sv.length === N_SCALE, 'quy mô: ' + N_SCALE + ' ứng viên đa dạng được xử lý trong MỘT lần chạy', r.out.slice(-200));
  ok(dtScale < 300000, 'quy mô: ' + N_SCALE + ' ứng viên gate xong < 300s (đo ' + dtScale + 'ms)', dtScale + 'ms');
  ok((cnt.ACCEPT || 0) > N_SCALE * 0.5, 'quy mô: ứng viên thật sự đa dạng phần lớn được ACCEPT (gate không từ chối bừa)', JSON.stringify(cnt));
  const tc = cli(S, ['topic-check']);
  ok(tc.status === 0, 'quy mô: topic-check OK sau propose hàng loạt (trần intent cluster, slug/ID duy nhất)', tc.out.slice(-200));
  const rowsS = rowsOf(S);
  const live = rowsS.filter(x => x.lifecycle !== 'REJECTED');
  ok(new Set(rowsS.map(x => x.topicId)).size === rowsS.length && new Set(live.map(x => x.slug)).size === live.length, 'quy mô: topicId duy nhất, slug còn hiệu lực duy nhất');
  ok(matrixOf(S).slots.length === 8 && rowsS.every(x => x.lifecycle !== 'APPROVED'), 'quy mô: propose hàng loạt KHÔNG tạo slot, KHÔNG tự duyệt topic nào (chỉ duyệt mới tạo slot)');
  const sizeMB = fs.statSync(S.p('state/topic-matrix.jsonl')).size / 1048576;
  metrics.scaleCli.matrixMB = Number(sizeMB.toFixed(2));
  fs.rmSync(S.root, { recursive: true, force: true });

  // 4g. quy mô corpus trong tiến trình: dựng chỉ mục + đo thời gian đánh giá (corpus tổng hợp, từ vựng thật)
  const benchN = Number(process.env.TOPIC_V2_BENCH_DOCS || 10000);
  const rngB = mulberry32(7);
  const mkDoc = i => { const title = bag(rngB, 5); return { slug: 's' + i, title, hub: 'garage/phanh', status: 'PUBLISHED', source: 'article', headline: { title, outline: [bag(rngB, 4), bag(rngB, 4), bag(rngB, 4), bag(rngB, 4), bag(rngB, 4)], keywords: [bag(rngB, 3), bag(rngB, 3), bag(rngB, 3)], text: [bag(rngB, 30), bag(rngB, 20)] } }; };
  const docsB = Array.from({ length: benchN }, (_, i) => mkDoc(i));
  const tB0 = Date.now();
  const corpusB = G.TopicCorpus.fromDocs(docsB);
  const buildMs = Date.now() - tB0;
  const tE0 = Date.now();
  const EVALS = 100;
  let accB = 0;
  for (let i = 0; i < EVALS; i++) {
    const d = mkDoc(benchN + i);
    const res = G.evaluate(cand({ slug: 'x-' + i, title: 'Chủ đề ' + d.title, hub: 'garage/phanh', primaryKeyword: d.title.split(' ').slice(0, 2).join(' '), outline: d.headline.outline.map(x => 'Mục ' + x), userProblem: 'Người dùng gặp ' + bag(rngB, 10) + ' chưa rõ nguyên nhân.', informationGain: 'Phân tích ' + bag(rngB, 12) + ' từng bước.' }), corpusB, { hubs: new Set(['garage/phanh']) });
    if (res.verdict === 'ACCEPT') accB++;
  }
  const evalMs = (Date.now() - tE0) / EVALS;
  metrics.corpusBench = { docs: benchN, buildMs, msPerEvaluation: Number(evalMs.toFixed(2)), accepted: accB + '/' + EVALS, heapMB: Math.round(process.memoryUsage().heapUsed / 1048576) };
  ok(buildMs < 120000, 'corpus ' + benchN + ' mục: dựng chỉ mục < 120s (đo ' + buildMs + 'ms)', buildMs + 'ms');
  ok(evalMs < 1500, 'corpus ' + benchN + ' mục: một lần đánh giá < 1.5s (đo ' + evalMs.toFixed(1) + 'ms)', evalMs.toFixed(1) + 'ms');
}

// ---------------------------------------------------------------------------
// State thật không đổi
// ---------------------------------------------------------------------------
console.log('5. State thật nguyên vẹn…');
for (const s of REAL_SNAPSHOT) {
  const now = fs.existsSync(s.f) ? readB(s.f) : null;
  ok((s.b === null && now === null) || (s.b && now && s.b.equals(now)), 'state thật không đổi: ' + path.relative(ROOT, s.f));
}

console.log('\nSỐ ĐO:', JSON.stringify(metrics));
console.log(`\nKẾT QUẢ: ${pass} pass, ${fail} fail.`);
if (fail) { console.log('FAIL: TOPIC FACTORY V2 chưa đạt.'); process.exit(1); }
console.log('PASS: TOPIC FACTORY V2 (unit + integration + production invariant + long-run/failure recovery) đạt toàn bộ.');
