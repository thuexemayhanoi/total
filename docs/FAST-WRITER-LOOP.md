# FAST WRITER LOOP — AI WIKI TOTAL (owner-approved 24/10/2026)

## Mô hình hiện hành

**Bài viết được sản xuất bởi Claude/Mistral/ChatGPT phiên đang hoạt động, KHÔNG phải GitHub Actions tạo nội dung.** Lấy hot-loop từ /blog: AI đọc -> viết -> QA nhanh -> push -> GitHub publisher; không cần chủ repo phê duyệt từng chủ đề hoặc writer lock thủ công.

- Config `factory/topic-governance.json`: `mode=off`, `requireApproved=false`, `v1Generation=frozen`. Có thể chọn 300 slot legacy PLANNED ngay; tuy vậy **không có nghĩa 300 slot là 300 bài nên đăng**: audit V1 phát hiện nhiều intent trùng hoặc tiêu đề hoán vị. Không viết/đăng chủ đề không có information gain mới.
- Writer tạo các file `factory/data/articles/<slug>.js` bằng nghiên cứu nguồn đáng tin, bám hub/URL/ID đã có, không sửa `matrix.json`, `topic-matrix.jsonl`, receipt, checkpoint hoặc HTML sinh.
- Batch tối đa 10 bài. QA `>=70`, kiểm tra critical, category, slug, canonical, >=2 liên kết tới bài PUBLISHED, 1.000–5.000 từ. Trước khi push luôn `verify-batch`. SEO điểm phụ trợ, không thay thế QA.
- Một publisher duy nhất serializes transaction để không làm hỏng state; cron 17/47 phút hàng giờ xử lý lại backlog bài đã có file nếu push trigger bị lỡ. Không có bài -> no-op, không viết giả.

## Lệnh từ mỗi phiên Writer (chạy trong repo)

```bash
git fetch origin main
git rebase origin/main
node factory/factory.js writer-pack --count 10 --json
# AI đọc pack, tự so intent với PUBLISHED, chỉ viết bài có giá trị độc lập
# tạo tối đa 10 file factory/data/articles/<slug>.js tương ứng IDs đã chọn
node factory/factory.js verify-batch "Sxxxxx,Syyyyy"
node factory/factory.js writer-heartbeat --phase waiting-publish --pair "Sxxxxx,Syyyyy"
git add factory/data/articles factory/state/writer-heartbeat.json
git commit -m "writer: researched Vietnamese batch Sxxxxx-Syyyyy"
git push
```

Sau push, AI còn quota có thể fetch/rebase và lấy batch tiếp. Bài đã có file sẽ bị `writer-pack` bỏ qua. Nếu thiếu nguồn hoặc trùng ý, không tạo file; chuyển slot khác đủ giá trị. Không push khi `verify-batch` fail. Không force push.

### Chạy ba Writer song song mà không có lease/khóa thủ công

**Ba phiên phải độc lập về working copy/branch và mỗi phiên gắn cố định một shard khác nhau**:

- W1: `node factory/factory.js writer-pack --count 10 --shard 1/3 --json`
- W2: `node factory/factory.js writer-pack --count 10 --shard 2/3 --json`
- W3: `node factory/factory.js writer-pack --count 10 --shard 3/3 --json`

Không dùng hai writer trên cùng shard đồng thời. Không cùng sửa một file hoặc đụng state. Mỗi writer fetch/rebase latest main trước khi push, kiểm tra không có slug/ID đã xuất bản bởi writer khác. Nếu git conflict, dừng để reconcile, tuyệt đối không force push. Publisher nội bộ vẫn giữ serialization/transaction lock — KHÔNG được bỏ.

### Khi hết 300 slot

Không chuyển `v1Generation` sang `allowed` để tự đẻ biến thể 12 góc × 6 bối cảnh. Cần nghiên cứu ý tưởng thật, so bài gần nhất và đăng ký topic mới bằng công cụ chuẩn; owner không phải duyệt từng bài, nhưng writer/coordinator vẫn phải cung cấp bằng chứng và tránh trùng. GitHub Actions không thể tự khởi tạo phiên Claude/Mistral sau khi phiên AI kết thúc.
