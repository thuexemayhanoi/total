'use strict';
// AI WIKI TOTAL — writer lock ownership-safe (DEFECT A hardening)
//
// Acquire dùng primitive exclusive THẬT của filesystem, KHÔNG dùng
// "exists -> write" cho mutual exclusion:
//   1) Ghi record vào file tạm, rồi link(2) vào vị trí lock — link là atomic
//      exclusive (EEXIST nếu đã có) VÀ lock file chỉ nhìn thấy được khi ĐÃ
//      CÓ ĐỦ NỘI DUNG (không có cửa sổ "file rỗng đang ghi" để reader khác
//      đọc nhầm thành corrupt).
//
// Ownership: mỗi acquisition sinh token unique (crypto.randomUUID). Record:
//   { owner, token, at, pid, ttlMs }
//
// Release chỉ xóa lock khi owner + token khớp CHÍNH XÁC record trên đĩa
// (re-check trước mutation). Sai owner/token -> REFUSE, KHÔNG xóa lock của
// writer khác. forceRelease() là lệnh recovery RIÊNG, explicit — workflow
// KHÔNG BAO GIỜ tự gọi.
//
// Stale lock (quá TTL 30 phút): KHÔNG có background daemon tự xóa. TTL chỉ
// được reclaim theo contract trong acquire(): reclaimer phải giữ "reclaim
// mutex" (open 'wx') rồi RE-READ lock hiện tại trước khi rename cách ly —
// lock FRESH của writer khác không bao giờ bị rename/xóa nhầm.
//
// Đường đọc (status) KHÔNG bao giờ mutate/xóa lock — kể cả lock stale.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const LOCK_TTL_MS = 30 * 60 * 1000; // 30 phút

function lockFile(dir) { return path.join(dir, 'writer.lock'); }

// Thuần: lock record có còn "sống" tại thời điểm `now`?
// - lock null/hỏng -> coi là reclaim được (true = "đã hết hạn").
// - lock thiếu `at` hoặc `at` không parse được -> hỏng -> reclaim được.
// - ttlMs trong record (nếu có) thắng mặc định LOCK_TTL_MS.
function isExpired(lock, now) {
  const t = Number.isFinite(now) ? now : Date.now();
  if (!lock || typeof lock !== 'object') return true;
  const at = new Date(lock.at).getTime();
  if (!Number.isFinite(at)) return true;
  const ttl = Number.isFinite(lock.ttlMs) ? lock.ttlMs : LOCK_TTL_MS;
  return (t - at) > ttl;
}

// Đọc lock record (null nếu không có / hỏng JSON). KHÔNG mutate.
function readLock(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { return null; }
}

// Đọc trạng thái lock — READ-ONLY, không xóa lock stale.
function status(dir) {
  const file = lockFile(dir);
  const lock = readLock(file);
  return { lock, expired: isExpired(lock) };
}

function refused(holder) {
  const owner = (holder && holder.owner) || '(không rõ)';
  const at = (holder && holder.at) || '(không rõ)';
  const err = new Error(`BỊ TỪ CHỐI: writer lock đang giữ bởi "${owner}" (từ ${at}) — không ghi đè lock của writer khác.`);
  err.code = 'ELOCKED';
  err.holder = holder || null;
  return err;
}

// Acquire exclusive. Trả record { owner, token, at, pid, ttlMs } khi thắng.
// Thua -> throw ELOCKED (kèm holder). Stale/corrupt -> reclaim race-safe.
//
// Tính đúng đắn (exactly-one-winner):
//   - link() atomic exclusive: đúng 1 process thắng khi file lock chưa có.
//   - Lock FRESH KHÔNG BAO GIỜ bị rename/xóa: fresh lock chỉ được tạo khi file
//     vắng — trong khi file stale còn tồn tại, không process nào tạo được lock
//     mới (link sẽ EEXIST). Reclaim chỉ xảy ra sau khi RE-READ trong vùng loại
//     trừ (reclaim mutex) xác nhận file hiện tại vẫn là stale/corrupt.
//   - Nhiều reclaimer cùng lúc: đúng 1 giữ được mutex; kẻ sau re-read thấy lock
//     mới (nếu có) và refuse, hoặc thấy file vắng -> cùng tranh link mà đúng 1
//     thắng. Đồng thời reclaim cùng một stale lock cũng vẫn exactly-one-winner
//     (rename chỉ thắng 1 lần, link chỉ thắng 1 lần).
function acquire(dir, owner, opts) {
  const file = lockFile(dir);
  const reclaimFile = path.join(dir, 'writer.lock.reclaim');
  const RECLAIM_MUTEX_STALE_MS = 10 * 1000; // mutex của reclaimer crash -> dọn
  const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  const ttlMs = (opts && Number.isFinite(opts.ttlMs)) ? opts.ttlMs : LOCK_TTL_MS;
  fs.mkdirSync(dir, { recursive: true });
  // Dọn file tạm bỏ sót của process crash (best-effort, > 60s).
  try {
    for (const f of fs.readdirSync(dir)) {
      if (!f.startsWith('writer.lock.new-')) continue;
      try {
        const st = fs.statSync(path.join(dir, f));
        if (Date.now() - st.mtimeMs > 60000) fs.unlinkSync(path.join(dir, f));
      } catch (_) { /* bỏ */ }
    }
  } catch (_) { /* readdir thất bại -> bỏ qua */ }
  for (;;) {
    const token = crypto.randomUUID();
    const record = { owner, token, at: new Date().toISOString(), pid: process.pid, ttlMs };
    // 1) Ghi record vào file tạm (chưa nhìn thấy với reader khác).
    const tmp = path.join(dir, 'writer.lock.new-' + token);
    fs.writeFileSync(tmp, JSON.stringify(record, null, 1) + '\n');
    // 2) link() atomic exclusive: thắng nếu file lock chưa tồn tại.
    try {
      fs.linkSync(tmp, file);
      fs.unlinkSync(tmp);
      return record;
    } catch (e) {
      try { fs.unlinkSync(tmp); } catch (_) { /* đã xóa */ }
      if (e.code !== 'EEXIST') throw e;
    }
    // 3) File đã tồn tại: đọc lock hiện tại (nội dung luôn nguyên vẹn nhờ link).
    const cur = readLock(file);
    if (fs.existsSync(file) && cur && !isExpired(cur, Date.now())) throw refused(cur);
    // 4) STALE/CORRUPT — reclaim trong VÙNG LOẠI TRỪ (mutex, đúng 1 reclaimer).
    let mutex = null;
    for (let attempt = 0; mutex === null; attempt++) {
      try { mutex = fs.openSync(reclaimFile, 'wx'); }
      catch (e2) {
        if (e2.code !== 'EEXIST') throw e2;
        // Reclaimer khác đang giữ mutex (phần crit chỉ vài ms). Mutex của
        // process crash (quá cũ) được dọn — an toàn vì chỉ lock stale/corrupt
        // mới có thể bị rename (re-read trong mutex), lock fresh thì không.
        try {
          const st = fs.statSync(reclaimFile);
          if (Date.now() - st.mtimeMs > RECLAIM_MUTEX_STALE_MS) fs.unlinkSync(reclaimFile);
        } catch (_) { /* biến mất — thử lại */ }
        if (attempt >= 4000) throw new Error('acquire: kẹt reclaim mutex quá lâu (>20s) — rà soát factory/state thủ công');
        sleep(5);
      }
    }
    try {
      // RE-READ ownership/token TRƯỚC mutation, trong vùng loại trừ:
      // reclaimer trước có thể đã reclaim xong và lock mới đã được acquire.
      const fresh = readLock(file);
      if (fs.existsSync(file)) {
        if (fresh && !isExpired(fresh, Date.now())) throw refused(fresh);
        // Đúng stale/corrupt — cách ly qua rename atomic rồi thử acquire lại.
        const quarantine = path.join(dir, 'writer.lock.stale-' + token);
        try { fs.renameSync(file, quarantine); } catch (e3) { if (e3.code !== 'ENOENT') throw e3; }
        try { fs.unlinkSync(quarantine); } catch (_) { /* bỏ */ }
      }
    } finally {
      try { fs.closeSync(mutex); } catch (_) { /* bỏ */ }
      try { fs.unlinkSync(reclaimFile); } catch (_) { /* bỏ */ }
    }
    continue; // vòng lặp: link lại từ đầu — đúng 1 winner
  }
}

// Release ownership-safe: chỉ xóa khi expected.owner + expected.token khớp
// record trên đĩa (re-check ngay trước unlink). Sai -> throw ELOCKREFUSE,
// KHÔNG xóa. Không có lock -> no-op idempotent (không lỗi).
function release(dir, expected) {
  const file = lockFile(dir);
  const cur = readLock(file);
  if (!cur) return { released: false, existed: false };
  const ownerOk = expected && expected.owner === cur.owner;
  const tokenOk = !!(expected && expected.token && cur.token && expected.token === cur.token);
  if (!ownerOk || !tokenOk) {
    const err = new Error(`TỪ CHỐI giải phóng: lock đang giữ bởi owner="${cur.owner}" token=${cur.token || '(không có)'} — không phải lock của process này. KHÔNG xóa lock của writer khác.`);
    err.code = 'ELOCKREFUSE';
    err.holder = cur;
    throw err;
  }
  // Re-check trước mutation: lock không được đổi owner giữa lúc đọc và lúc xóa.
  const cur2 = readLock(file);
  if (!cur2 || cur2.token !== cur.token) {
    const err = new Error('TỪ CHỐI giải phóng: lock đã đổi giữa chừng (token lệch) — không xóa lock hiện tại.');
    err.code = 'ELOCKREFUSE';
    err.holder = cur2;
    throw err;
  }
  fs.unlinkSync(file);
  return { released: true, existed: true };
}

// Force release — CHỈ cho recovery thủ công sau khi xác minh writer không còn
// sống. Workflow/production KHÔNG BAO GIỜ gọi hàm này.
function forceRelease(dir) {
  const file = lockFile(dir);
  const cur = readLock(file);
  try { fs.unlinkSync(file); } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
  return { released: !!cur, holder: cur };
}

module.exports = { LOCK_TTL_MS, lockFile, isExpired, status, acquire, release, forceRelease };
