#!/usr/bin/env python3
# Dùng: python3 -I chkfacts.py PACK SLOT_ID   (chạy trong /home/user/total)
# Kiểm: mọi con số / "Điều N" / "khoản N" / "điểm x" / số hiệu văn bản trong thân bài và các trường chữ
# phải xuất hiện trong VERIFIED_FACTS + SOURCES của ITEM tương ứng (hoặc là ngày truy xuất 24/10/2026).
import json, re, subprocess, sys, unicodedata

pack, slot = sys.argv[1], sys.argv[2]
txt = open(pack, encoding='utf-8').read()
block = re.search(r'^ITEM ' + slot + r' .*?(?=^ITEM |\Z)', txt, re.S | re.M)
if not block:
    print('Không thấy ITEM', slot); sys.exit(2)
b = block.group(0)
slug = re.search(r'slug=(\S+)', b.split('\n')[0]).group(1)
facts = '\n'.join(l for l in b.split('\n') if l.strip().startswith(('VERIFIED_FACTS', 'SOURCES', 'TITLE')))

js = r"""
const m=require('/home/user/total/factory/data/articles/%s.js');
const strip=s=>String(s||'').replace(/<[^>]+>/g,' ');
const parts=[m.title,m.seoTitle,m.metaDescription,m.summary,m.quickAnswer,...(m.keyPoints||[]),
 ...m.sections.map(s=>strip(s.html)),...(m.checklist||[]),...(m.steps||[]).map(s=>s.title+' '+s.detail),
 ...(m.warnings||[]),...(m.notes||[]),...(m.references||[])];
console.log(JSON.stringify(parts));
""" % slug
out = subprocess.run(['node', '-e', js], capture_output=True, text=True, cwd='/home/user/total')
if out.returncode:
    print(out.stderr[:400]); sys.exit(2)
parts = json.loads(out.stdout)
body = '\n'.join(parts)

def fold(s):
    s = unicodedata.normalize('NFC', s).lower().replace('đ', 'd')
    s = unicodedata.normalize('NFD', s)
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn')

F = fold(facts)
pat_tokens = [
    ('số', r'\d+(?:[.,/]\d+)*(?:\s?(?:cm³|cm3|kw|km/h|giờ|tuổi|năm|tháng|ngày|điểm|người|m))?'),
]
bad = []
seen = set()
for m in re.finditer(r'(?:Điều|khoản|điểm)\s+\d+[a-zđ]?|\d+(?:[.,/]\d+)*(?:/[A-ZĐ0-9\-]+)*', body):
    tok = m.group(0)
    if tok in seen: continue
    seen.add(tok)
    ft = fold(tok)
    num = re.sub(r'[^0-9]', '', tok)
    if ft in F:
        continue
    # cho phép các số đơn nằm trong ngày truy xuất 24/10/2026 hoặc "24 tháng 10 năm 2026"
    if tok in ('24', '10', '2026', '24/10/2026', '2026-10-24'):
        continue
    # tách thành số rời và kiểm từng số
    nums = re.findall(r'\d+', tok)
    if tok.startswith(('Điều', 'khoản', 'điểm')):
        # kiểm "dieu N" trong fact
        if ft in F:
            continue
        bad.append(tok); continue
    if all(re.search(r'(?<!\d)' + n + r'(?!\d)', F) for n in nums):
        continue
    bad.append(tok)

print('SLOT', slot, 'slug', slug[:60])
print('Tổng token số/điều khoản duy nhất:', len(seen), '| không thấy trong VERIFIED_FACTS/SOURCES:', len(bad))
for t in bad:
    ctx = re.search(r'.{0,70}' + re.escape(t) + r'.{0,70}', body, re.S)
    print('  -', t, '|', (ctx.group(0).replace('\n', ' ') if ctx else '')[:160])
