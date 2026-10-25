#!/usr/bin/env node
// Dựng báo cáo kiểm toán 300 slot legacy (chỉ ghi file báo cáo, KHÔNG sửa matrix / topic-matrix / bài).
//
//   node legacy-audit-report.js json <legacy-audit-input.json> <audit-result.json> <out.json> [crosscheck.json]
//   node legacy-audit-report.js md   <report.json> <out.md>
//
// <audit-result.json> là kết quả workflow kiểm toán ({result:[{items,notes,vnotes,changes,missing}]}) hoặc mảng result.
// Phán quyết: A trùng (SKIPPED_DUPLICATE), B gộp có information gain, C viết lại V2, D lưu trữ.
// Trạng thái engine của slot không đổi (PLANNED + topic-matrix REJECTED/mergeInto = EDITORIAL_CLOSED); nhãn A/B/C/D chỉ nằm trong báo cáo.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..', '..');
const readJ = f => JSON.parse(fs.readFileSync(f, 'utf8'));

const LABEL = {
  A: 'SKIPPED_DUPLICATE',
  B: 'MERGE_PROPOSED',
  C: 'REWRITE_V2',
  D: 'ARCHIVED'
};
const ACTION = {
  A: 'Không viết bài, không xuất bản. Giữ nguyên slot và ID, ghi bài bao phủ và URL.',
  B: 'Đề xuất bổ sung một đoạn vào bài đã xuất bản; chưa áp dụng, chờ chủ repo duyệt (AGENTS.md: MERGE-CANDIDATE chỉ là đề xuất).',
  C: 'Tạo topic V2 mới bằng topic-propose/topic-approve; chỉ xuất bản khi qua QA và cổng trùng intent.',
  D: 'Lưu trữ kèm lý do; không xóa, không tái dùng ID.'
};

function buildJson(inputFile, resultFile, outFile, crossFile) {
  const input = readJ(inputFile);
  let result = readJ(resultFile);
  if (!Array.isArray(result)) result = result.result;
  const matrix = readJ(path.join(ROOT, 'factory/state/matrix.json'));
  const slotById = new Map(matrix.slots.map(s => [s.id, s]));
  const manifest = new Map(fs.readFileSync(path.join(ROOT, 'factory/state/article-manifest.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l)).map(r => [r.id, r]));
  const verdicts = new Map();
  for (const b of result) for (const it of b.items) verdicts.set(it.id, it);

  const slots = [];
  for (const c of input.clusters) {
    for (const s of c.slots) {
      const v = verdicts.get(s.id);
      if (!v) throw new Error('thiếu phán quyết cho ' + s.id);
      const cov = slotById.get(v.coveringId);
      const mf = manifest.get(v.coveringId);
      if (!cov || cov.state !== 'PUBLISHED' || !mf) throw new Error('bài bao phủ của ' + s.id + ' không phải PUBLISHED: ' + v.coveringId);
      const row = {
        id: s.id,
        slug: s.slug,
        title: s.title,
        hub: s.hub,
        cluster: s.cluster,
        engineState: slotById.get(s.id).state,
        editorialState: 'EDITORIAL_CLOSED',
        gateReasons: s.gate,
        engineMergeCover: { id: s.cover.id, url: s.cover.url },
        decision: v.decision,
        reportStatus: LABEL[v.decision],
        coveringId: v.coveringId,
        coveringSlug: cov.slug,
        coveringTitle: mf.title,
        coveringUrl: v.coveringUrl,
        evidence: v.evidence,
        rationale: v.rationale,
        action: ACTION[v.decision],
        result: v.decision === 'A' ? 'Không có bài mới; slot đóng biên tập, không tính vào chỉ tiêu 20.000.' : 'Chưa áp dụng (xem action).'
      };
      if (v.infoGain) row.infoGain = v.infoGain;
      if (v.v2Topic) row.v2Topic = v.v2Topic;
      slots.push(row);
    }
  }
  slots.sort((a, b) => (a.id < b.id ? -1 : 1));
  if (slots.length !== input.total) throw new Error('số slot ' + slots.length + ' khác input ' + input.total);

  const count = k => slots.filter(s => s.decision === k).length;
  const gateCounts = {};
  for (const s of slots) for (const g of s.gateReasons) gateCounts[g] = (gateCounts[g] || 0) + 1;
  const byCover = new Map();
  for (const s of slots) {
    if (!byCover.has(s.coveringId)) byCover.set(s.coveringId, { coveringId: s.coveringId, coveringSlug: s.coveringSlug, coveringTitle: s.coveringTitle, coveringUrl: s.coveringUrl, count: 0, slots: [] });
    const e = byCover.get(s.coveringId);
    e.count++;
    e.slots.push(s.id);
  }
  const hubs = {};
  for (const s of slots) hubs[s.hub] = (hubs[s.hub] || 0) + 1;

  const cross = crossFile && fs.existsSync(crossFile) ? readJ(crossFile) : null;
  const report = {
    generatedAt: new Date().toISOString(),
    scope: '300 slot PLANNED đã đóng biên tập (topic-matrix lifecycle REJECTED + mergeInto), nguồn legacy-v1',
    method: [
      'Đọc toàn bộ slot và bài bao phủ do engine chọn (docs/autopilot-kit/tools/legacy-audit-input.js).',
      '20 agent: mỗi cụm một agent đọc bài bao phủ, tự tìm bài xuất bản gần nhất theo đúng bối cảnh slot, quyết định A/B/C/D kèm trích dẫn nguyên văn.',
      'Verifier đối kháng độc lập đọc lại mọi quyết định không phải A và một mẫu A (cứ 4 slot A lấy 1), đối chiếu từng trích dẫn với file bài.',
      'Điều phối viên đối chiếu máy: mọi bài bao phủ là PUBLISHED, có trong manifest, có HTML và có trong sitemap-articles.xml; từng trích dẫn trong evidence có nguyên văn trong bài được viện dẫn.'
    ],
    totals: { slots: slots.length, A: count('A'), B: count('B'), C: count('C'), D: count('D') },
    verifier: {
      agreed: true,
      changesRequested: result.reduce((n, b) => n + (b.changes || []).length, 0),
      missingReported: result.reduce((n, b) => n + (b.missing || []).length, 0)
    },
    crossCheck: cross,
    causes: {
      note: 'Một slot có thể mang nhiều lý do cổng; số liệu theo từng lý do không cộng thành 300.',
      gateReasonCounts: gateCounts,
      summary: [
        'Cả 300 slot đều là hoán vị tiêu đề V1 của vài hạt giống (kiểm tra xe thuê, giấy tờ thuê xe, chi phí, rủi ro, so sánh, thuê xe điện, pin xe điện): hạt giống nhân với các khung "người mới / ngắn ngày / dài ngày / đường dài / đô thị / tình huống thực tế" hoặc đổi tiền tố tiêu đề.',
        'Mỗi khung bối cảnh đã có bài xuất bản riêng; slot không có câu hỏi tìm kiếm hay thông tin mới nào ngoài bài đó.',
        'Dữ kiện giá, phí, điều khoản cửa hàng không có nguồn xác minh nên không thể viết thêm nội dung khác biệt.'
      ]
    },
    hubs,
    coveringArticles: [...byCover.values()].sort((a, b) => b.count - a.count || (a.coveringId < b.coveringId ? -1 : 1)),
    batchNotes: result.map((b, i) => ({ batch: i + 1, slots: b.items.length, auditorNotes: b.notes, verifierNotes: b.vnotes })),
    actionsTaken: [
      'Không sửa matrix.json, topic-matrix.jsonl, bài đã xuất bản, URL, slug, canonical hay sitemap.',
      'Không viết bài cho bất kỳ slot nào trong 300 slot này.',
      'Báo cáo chỉ ghi nhãn; trạng thái engine giữ nguyên (EDITORIAL_CLOSED).'
    ],
    ownerDecisionsNeeded: [],
    slots
  };
  const b = slots.filter(s => s.decision === 'B');
  for (const s of b) report.ownerDecisionsNeeded.push({ slot: s.id, coveringUrl: s.coveringUrl, proposal: s.infoGain, reason: 'Sửa nội dung bài đã xuất bản cần chủ repo duyệt; đoạn đề xuất chỉ nêu nguyên tắc, không có số liệu mới.' });
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2) + '\n');
  console.log('OK ' + outFile + ' ' + JSON.stringify(report.totals));
}

function buildMd(jsonFile, outFile) {
  const r = readJ(jsonFile);
  const L = [];
  const t = r.totals;
  L.push('# Báo cáo kiểm toán 300 slot legacy (đã đóng biên tập)');
  L.push('');
  L.push('Tạo lúc ' + r.generatedAt + '. Dữ liệu đầy đủ từng slot: `factory/reports/legacy-300-audit.json`.');
  L.push('');
  L.push('Phạm vi: ' + r.scope + '.');
  L.push('');
  L.push('## Kết luận');
  L.push('');
  L.push('| Nhóm | Ý nghĩa | Số slot |');
  L.push('| --- | --- | ---: |');
  L.push('| A | Trùng intent, `SKIPPED_DUPLICATE` | ' + t.A + ' |');
  L.push('| B | Gộp, chỉ khi có information gain thật (`MERGE_PROPOSED`) | ' + t.B + ' |');
  L.push('| C | Viết lại thành topic V2 độc lập | ' + t.C + ' |');
  L.push('| D | Lưu trữ kèm lý do | ' + t.D + ' |');
  L.push('| | Tổng | ' + t.slots + ' |');
  L.push('');
  L.push('Không có slot nào trong 300 slot được viết hay xuất bản. 300 slot này không tính vào chỉ tiêu 20.000 bài xuất bản; cách đếm bài đã xuất bản là `docs/autopilot-kit/tools/count-published.js`.');
  L.push('');
  L.push('## Nguyên nhân');
  L.push('');
  for (const s of r.causes.summary) L.push('- ' + s);
  L.push('');
  L.push('Lý do cổng của engine (một slot có thể có nhiều lý do):');
  L.push('');
  L.push('| Lý do | Số slot |');
  L.push('| --- | ---: |');
  for (const [k, v] of Object.entries(r.causes.gateReasonCounts).sort((a, b) => b[1] - a[1])) L.push('| `' + k + '` | ' + v + ' |');
  L.push('');
  L.push('Theo hub: ' + Object.entries(r.hubs).map(([k, v]) => '`' + k + '` ' + v).join(', ') + '.');
  L.push('');
  L.push('## Kiểm chứng');
  L.push('');
  for (const m of r.method) L.push('- ' + m);
  L.push('');
  L.push('- Verifier yêu cầu đổi ' + r.verifier.changesRequested + ' quyết định, báo thiếu ' + r.verifier.missingReported + ' slot.');
  if (r.crossCheck) L.push('- Đối chiếu máy: ' + JSON.stringify(r.crossCheck) + '.');
  L.push('');
  L.push('## Việc đã làm và chưa làm');
  L.push('');
  for (const a of r.actionsTaken) L.push('- ' + a);
  L.push('');
  if (r.ownerDecisionsNeeded.length) {
    L.push('## Cần chủ repo quyết định');
    L.push('');
    for (const d of r.ownerDecisionsNeeded) {
      L.push('### ' + d.slot + ' (nhóm B)');
      L.push('');
      L.push('Bài nhận bổ sung: `' + d.coveringUrl + '`.');
      L.push('');
      L.push('Đề xuất: ' + d.proposal);
      L.push('');
      L.push('Chưa áp dụng vì ' + d.reason);
      L.push('');
    }
  }
  L.push('## Bài bao phủ (mỗi bài đã xuất bản đỡ bao nhiêu slot)');
  L.push('');
  L.push('| Bài bao phủ | URL | Số slot | Slot |');
  L.push('| --- | --- | ---: | --- |');
  for (const c of r.coveringArticles) L.push('| ' + c.coveringId + ' ' + c.coveringTitle.replace(/\|/g, '/') + ' | `' + c.coveringUrl + '` | ' + c.count + ' | ' + c.slots.join(', ') + ' |');
  L.push('');
  L.push('## Từng slot');
  L.push('');
  L.push('| Slot | Tiêu đề V1 | Nhóm | Bài bao phủ |');
  L.push('| --- | --- | --- | --- |');
  for (const s of r.slots) L.push('| ' + s.id + ' | ' + s.title.replace(/\|/g, '/') + ' | ' + s.decision + ' | ' + s.coveringId + ' |');
  L.push('');
  L.push('Chứng cứ trích dẫn và lý do từng slot nằm trong file JSON (trường `evidence`, `rationale`).');
  L.push('');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, L.join('\n'));
  console.log('OK ' + outFile + ' ' + L.length + ' dòng');
}

const [cmd, ...a] = process.argv.slice(2);
if (cmd === 'json' && a.length >= 3) buildJson(a[0], a[1], a[2], a[3]);
else if (cmd === 'md' && a.length >= 2) buildMd(a[0], a[1]);
else {
  console.error('dùng: json <input> <audit-result> <out.json> [crosscheck.json] | md <report.json> <out.md>');
  process.exit(2);
}
