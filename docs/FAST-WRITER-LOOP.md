# FAST WRITER LOOP — AI WIKI TOTAL (owner-approved 24/10/2026)

## Mô hình hiện hành

**Bài viết được sản xuất bởi Claude/Mistral/ChatGPT phiên đang hoạt động, KHÔNG phải GitHub Actions tạo nội dung.** Lấy hot-loop từ `/blog`: AI nghiên cứu -> viết -> QA nhanh -> push -> GitHub publisher. **Không cần chủ repo duyệt từng topic/khóa thủ công cho các slot PLANNED hiện có.** Mục tiêu là site tĩnh GitHub Pages `wiki.thuexemaynguyentu.com`, không phải WordPress.

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
# Chỉ khi có MỘT writer duy nhất: cập nhật heartbeat chia sẻ
node factory/factory.js writer-heartbeat --phase waiting-publish --pair "Sxxxxx,Syyyyy"
git add factory/data/articles factory/state/writer-heartbeat.json
# Nếu có W1/W2/W3 song song: KHÔNG đẩy cùng writer-heartbeat.json; chỉ add file bài của shard mình
# git add factory/data/articles/<slug-cua-minh>.js ...
git commit -m "writer: researched Vietnamese batch Sxxxxx-Syyyyy"
git push
```

Sau push, AI còn quota có thể fetch/rebase và lấy batch tiếp. Bài đã có file sẽ bị `writer-pack` bỏ qua. Nếu thiếu nguồn hoặc trùng ý, không tạo file; chuyển slot khác đủ giá trị. Không push khi `verify-batch` fail. Không force push.

### Chạy ba Writer song song mà không có lease/khóa thủ công

**Ba phiên phải độc lập về working copy/branch và mỗi phiên gắn cố định một shard khác nhau.** Không cần đủ 3 phiên: một Claude vẫn viết bình thường. Cơ chế shard lọc các slot PLANNED mới; các slot đang dở/REPAIR có thể xuất hiện trong nhiều pack — trước khi ghi phải kiểm tra file/owner và không sửa file của phiên khác:

- W1: `node factory/factory.js writer-pack --count 10 --shard 1/3 --json`
- W2: `node factory/factory.js writer-pack --count 10 --shard 2/3 --json`
- W3: `node factory/factory.js writer-pack --count 10 --shard 3/3 --json`

Không dùng hai writer trên cùng shard đồng thời. Không cùng sửa một file hoặc đụng state/heartbeat chung. **Shard không phải distributed lock/lease**; do đó cần working copy riêng, fetch/rebase trước mỗi batch, rà IDs/slug còn trống và tuyệt đối không force push. Nếu xung đột hoặc cùng ID trong pack resume, chỉ một phiên được sửa; phiên kia bỏ qua và nhận batch khác. Publisher giữ serialization/transaction lock nội bộ — KHÔNG được bỏ.

### Khi hết 300 slot

Không chuyển `v1Generation` sang `allowed` để tự đẻ biến thể 12 góc × 6 bối cảnh. Cần nghiên cứu topic độc lập, so bài gần nhất và đăng ký topic mới bằng công cụ chuẩn. **Giới hạn code hiện hành:** với topic V2 *mới* ngoài các slot đã có, vẫn cần coordinator tạo slot qua `topic-propose`/`topic-approve` (có thể ủy quyền AI thực hiện theo gate; không cần owner thao tác tay). Chưa có workflow tự sáng tác và tự tạo slot mới vô hạn. GitHub Actions cũng không thể tự khởi tạo phiên Claude/Mistral sau khi phiên AI kết thúc.
