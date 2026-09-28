#!/usr/bin/env node
// AI WIKI TOTAL — sinh og-cover.png (1200x630) thuần Node, không phụ thuộc ngoài.
// Xác định (deterministic): cùng script + cùng Node => cùng bytes.
// Chạy: node scripts/make-og-image.mjs  (ghi đè assets/img/og-cover.png nếu khác)
'use strict';
import { deflateSync } from 'node:zlib';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';

const W = 1200, H = 630, SS = 2; // supersample 2x cho mép mượt
const CW = W * SS, CH = H * SS;

// Font pixel 5x7 — chỉ gồm glyph cần cho wordmark ASCII
const F = {
  A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  I: ['..#..', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
  K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
  L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
  N: ['#...#', '##..#', '#.#.#', '#..##', '#...#', '#...#', '#...#'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
  T: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
  W: ['#...#', '#...#', '#...#', '#.#.#', '#.#.#', '##.##', '#...#'],
  ' ': ['.....', '.....', '.....', '.....', '.....', '.....', '.....'],
};
const INK = [255, 255, 255, 255];        // trắng
const COBALT = [49, 87, 213, 255];       // #3157D5
const AMBER = [245, 158, 11, 255];       // #F59E0B
const BG = COBALT;

// khung pixel
const px = new Uint8Array(CW * CH * 4);
function set(x, y, c) {
  if (x < 0 || y < 0 || x >= CW || y >= CH) return;
  const i = (y * CW + x) * 4;
  px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = c[3];
}
function fillRect(x, y, w, h, c) {
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) set(x + i, y + j, c);
}
function fillRoundRect(x, y, w, h, r, c) {
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const dx = Math.max(r - i, i - (w - 1 - r), 0);
    const dy = Math.max(r - j, j - (h - 1 - r), 0);
    if (dx * dx + dy * dy <= r * r) set(x + i, y + j, c);
  }
}
function text(str, x, y, scale, c) {
  let cx = x;
  for (const ch of str) {
    const g = F[ch] || F[' '];
    for (let r = 0; r < 7; r++) for (let q = 0; q < 5; q++) {
      if (g[r][q] === '#') fillRect(cx + q * scale, y + r * scale, scale, scale, c);
    }
    cx += 6 * scale;
  }
  return cx;
}

// nền
fillRect(0, 0, CW, CH, BG);

// logo: ô trắng bo góc + chữ N cobalt (khớp logo site)
const LX = 80 * SS, LY = 195 * SS, LS = 240 * SS, LR = 56 * SS;
fillRoundRect(LX, LY, LS, LS, LR, INK);
const NS = 20 * SS; // scale chữ N trong ô
text('N', LX + (LS - 5 * NS) / 2, LY + (LS - 7 * NS) / 2, NS, COBALT);

// wordmark hai dòng
text('AI WIKI', 400 * SS, 210 * SS, 16 * SS, INK);
text('TOTAL', 400 * SS, 400 * SS, 16 * SS, INK);

// gạch nhấn amber
fillRect(400 * SS, 356 * SS, 300 * SS, 12 * SS, AMBER);

// đường viền dưới
fillRect(0, (H - 14) * SS, W * SS, 14 * SS, [24, 38, 74, 255]);

// ---- hạ mẫu (supersample 2x) ----
const out = new Uint8Array(W * H * 4);
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const i = (y * W + x) * 4;
  for (let ch = 0; ch < 4; ch++) {
    const a = px[((2 * y) * CW + 2 * x) * 4 + ch];
    const b = px[((2 * y) * CW + 2 * x + 1) * 4 + ch];
    const c = px[((2 * y + 1) * CW + 2 * x) * 4 + ch];
    const d = px[((2 * y + 1) * CW + 2 * x + 1) * 4 + ch];
    out[i + ch] = (a + b + c + d) >> 2;
  }
}

// ---- PNG encode (color type 6, filter 0) ----
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
const raw = Buffer.alloc((W * 4 + 1) * H);
for (let y = 0; y < H; y++) {
  raw[y * (W * 4 + 1)] = 0; // filter: none
  Buffer.from(out.buffer, y * W * 4, W * 4).copy(raw, y * (W * 4 + 1) + 1);
}
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);

// Chỉ ghi khi khác bytes — CI dùng git diff để quyết định commit
const DEST = 'assets/img/og-cover.png';
const same = existsSync(DEST) && readFileSync(DEST).equals(png);
if (!same) {
  writeFileSync(DEST, png);
  console.log(`Đã sinh ${DEST} (${png.length} bytes)`);
} else {
  console.log(`${DEST} không đổi — bỏ qua ghi.`);
}
