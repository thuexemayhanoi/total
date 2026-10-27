#!/usr/bin/env python3
"""Tiến độ từng slot của một workflow viết đang chạy (chỉ đọc).

  python3 -I wf-progress.py <thư mục transcript của workflow>

Đọc journal.jsonl (kết quả từng agent) và agent-*.meta.json (nhãn "viết S…", "kiểm … S…", "sửa S…").
Một slot DONE khi agent sửa đã trả kết quả, hoặc cả hai verifier đã trả và không có lỗi medium/high.
Slot DONE không còn bị workflow sửa nữa trong lượt chạy này (trừ khi workflow bị resume: xem README).
"""
import json, os, re, sys
d = sys.argv[1]
label = {}
for f in os.listdir(d):
    if f.endswith('.meta.json'):
        try:
            label[f[len('agent-'):-len('.meta.json')]] = json.load(open(os.path.join(d, f), encoding='utf8')).get('description', '')
        except Exception:
            pass
slots = {}
for line in open(os.path.join(d, 'journal.jsonl'), encoding='utf8'):
    o = json.loads(line)
    if o.get('type') != 'result':
        continue
    lab = label.get(o.get('agentId', ''), '')
    m = re.search(r'(S\d{5})', lab)
    if not m:
        continue
    s = slots.setdefault(m.group(1), {'writer': None, 'verify': [], 'fix': None})
    r = o.get('result')
    if lab.startswith('viết'):
        s['writer'] = r
    elif lab.startswith('kiểm'):
        s['verify'].append(r)
    elif lab.startswith('sửa'):
        s['fix'] = r
for sid in sorted(slots):
    s = slots[sid]
    issues = [i for v in s['verify'] if isinstance(v, dict) for i in v.get('issues', []) if i.get('severity') != 'low']
    if s['fix'] is not None:
        st = 'DONE-fixed' if isinstance(s['fix'], dict) and s['fix'].get('fixed') else 'DONE-fix-incomplete'
    elif len(s['verify']) >= 2 and not issues:
        st = 'DONE-verified'
    elif s['writer'] is None:
        st = 'writing'
    else:
        st = 'verifying' if len(s['verify']) < 2 else 'fixing'
    f = s['writer'].get('file', '') if isinstance(s['writer'], dict) else ''
    print(sid, st, 'issues=%d' % len(issues), os.path.basename(f)[:-3] if f else '')
