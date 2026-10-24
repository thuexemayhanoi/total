# FAST WRITER LOOP — AI WIKI TOTAL (owner-approved 24/10/2026)

## Mô hình hiện hành

**Bài viết được sản xuất bởi Claude/Mistral/ChatGPT phiên đang hoạt động, KHÔNG phải GitHub Actions tạo nội dung.** Lấy hot-loop từ `/blog`: AI nghiên cứu -> viết -> QA nhanh -> push -> GitHub publisher. **Không cần chủ repo duyệt từng topic/khóa thủ công cho các slot PLANNED hiện có.** Mục tiêu là site tĩnh GitHub Pages `wiki.thuexemaynguyentu.com`, không phải WordPress.

- Config `factory/topic-governance.json`: `mode=off`, `requireApproved=false`, `v1Generation=frozen`. Có thể chọn 300 slot legacy PLANNED ngay; tuy vậy **không có nghĩa 300 slot là 300 bài nên đăng**: audit V1 phát hiện nhiều intent trùng hoặc tiêu đề hoán vị. Không viết/đăng chủ đề không có information gain mới.
- Writer tạo các file `factory/data/articles/<slug>.js` bằng nghiên cứu nguồn đáng tin, bám hub/URL/ID đã có, không sửa `matrix.json`, `topic-matrix.jsonl`, receipt, checkpoint hoặc HTML sinh.
- Batch tối đa 10 bài. QA `>=70`, kiểm tra critical, category, slug, canonical, >=2 liên kết tới bài PUBLISHED, 1.000–5.000 từ. Trước khi push luôn `verify-batch`. SEO điểm phụ trợ, không thay thế QA.
- Một publisher duy nhất serializes transaction để không làm hỏng state; cron 17/47 phút hàng giờ xử lý lại backlog bài đã có file nếu push trigger bị lỡ. Không có bài -> no-op, không viết giả.

## Đối soát 300 slot legacy (coordinator Claude, 24/10/2026)

Đọc tiêu đề + H2 của bài đã xuất bản thay vì chỉ tin cổng từ vựng: **300/300 slot legacy đều trùng câu hỏi với bài đã có** (277 do gate: hoán vị khung/bối cảnh; 23 còn lại — 9 REWRITE ghép góc template + 14 NEEDS-RESEARCH về thuê xe điện/pin — coordinator ghi `topic-reject --merge-into` kèm bài đích: `kiem-tra-xe-thue`, `doc-hop-dong-thue-xe`, `thue-xe-may-…-tra-xe-nguoi-moi`, `…-dat-coc-nguoi-moi`, `thu-xe-dien-nhung-dieu-can-biet`, `thue-xe-dien`, `pham-vi-hoat-dong`, `pin-xe-dien`, `chi-phi-sac`). Slot vẫn PLANNED (không đổi state/URL — quyết định M1 của chủ repo), nên `writer-pack` vẫn liệt kê chúng; từ 24/10 pack kèm `topicDecision` cho từng item và `mergedSlots` ở cấp pack (text mode: `WARN_MERGED_SLOTS` + dòng `TOPIC_DECISION SKIP … → <bài đích>`). **Writer KHÔNG viết item có `topicDecision.writeAdvice = "SKIP"`**; muốn bổ sung ý thì sửa bài đích. Nguồn bài mới là topic nghiên cứu độc lập đi qua `topic-propose` → đọc láng giềng → `topic-approve` (AI coordinator tự làm theo gate, không chờ owner).

### Slot đã đóng bởi quyết định biên tập (EDITORIAL_CLOSED) — từ 24/10/2026

Topic trong `factory/state/topic-matrix.jsonl` bị **REJECTED** hoặc có **`mergeInto`** (gộp vào bài đã có) **đóng slot của nó ở mọi chế độ governance, kể cả `mode=off`**:

- `writer-pack` KHÔNG đưa slot đó vào batch; pack có `editorialClosed` (số slot đóng) và, khi không còn slot mở nào, `status=need-topics` + `nextAction=COORDINATOR_TOPIC_PROPOSE_THEN_APPROVE` (ý nghĩa: hết slot, cần topic mới qua `topic-propose` → `topic-approve`; writer không tự viết đệm).
- `verify-batch` (và vì thế publisher) từ chối slot đóng với lý do và bài đích — gỡ module bài trùng; muốn mở lại phải `topic-reopen` (gate vẫn phải ACCEPT).
- `status` / `backlog` / `production-status` đếm riêng `EDITORIAL_CLOSED=N`, **không** tính vào `WAITING_FOR_WRITER` nên production về `idle` thay vì báo "chờ writer" vĩnh viễn.
- Ledger thiếu/hỏng: không slot nào bị đóng (fail-open cho writer; QA 7 gate vẫn chạy). Slot đã có module bài mà bị đóng vẫn hiện là backlog (không che) kèm lỗi verify rõ ràng.

## Lệnh từ mỗi phiên Writer (chạy trong repo)

```bash
git fetch origin main
git rebase origin/main
node factory/factory.js writer-pack --count 10 --json
# AI đọc pack, tự so intent với PUBLISHED, chỉ viết bài có giá trị độc lập
# tạo tối đa 10 file factory/data/articles/<slug>.js tương ứng IDs đã chọn
node factory/factory.js verify-batch "Sxxxxx,Syyyyy"
# Thêm CHỈ các module bài của phiên này (dù 1 hay 3 writers)
git add factory/data/articles/<slug-mot>.js factory/data/articles/<slug-hai>.js
git commit -m "writer: researched Vietnamese batch Sxxxxx-Syyyyy"
git push
```

**Heartbeat (tùy chọn, CHỈ khi chạy một writer):** trước `git commit` có thể chạy `node factory/factory.js writer-heartbeat --phase waiting-publish --pair "Sxxxxx,Syyyyy"` và `git add factory/state/writer-heartbeat.json`. Khi chạy W1/W2/W3 đồng thời, **bỏ bước này** vì heartbeat là một file chung, nhiều writer ghi cùng lúc dễ conflict.

Sau push, AI còn quota có thể fetch/rebase và lấy batch tiếp. Bài đã có file sẽ bị `writer-pack` bỏ qua. Nếu thiếu nguồn hoặc trùng ý, không tạo file; chuyển slot khác đủ giá trị. Không push khi `verify-batch` fail. Không force push.

### Chạy ba Writer song song mà không có lease/khóa thủ công

**Ba phiên phải độc lập về working copy/branch và mỗi phiên gắn cố định một shard khác nhau.** Không cần đủ 3 phiên: một Claude vẫn viết bình thường. Cơ chế shard lọc các slot PLANNED mới; các slot đang dở/REPAIR có thể xuất hiện trong nhiều pack — trước khi ghi phải kiểm tra file/owner và không sửa file của phiên khác:

- W1: `node factory/factory.js writer-pack --count 10 --shard 1/3 --json`
- W2: `node factory/factory.js writer-pack --count 10 --shard 2/3 --json`
- W3: `node factory/factory.js writer-pack --count 10 --shard 3/3 --json`

Không dùng hai writer trên cùng shard đồng thời. Không cùng sửa một file hoặc đụng state/heartbeat chung. **Shard không phải distributed lock/lease**; do đó cần working copy riêng, fetch/rebase trước mỗi batch, rà IDs/slug còn trống và tuyệt đối không force push. Nếu xung đột hoặc cùng ID trong pack resume, chỉ một phiên được sửa; phiên kia bỏ qua và nhận batch khác. Publisher giữ serialization/transaction lock nội bộ — KHÔNG được bỏ.

### Khi hết 300 slot

Không chuyển `v1Generation` sang `allowed` để tự đẻ biến thể 12 góc × 6 bối cảnh. Cần nghiên cứu topic độc lập, so bài gần nhất và đăng ký topic mới bằng công cụ chuẩn. **Giới hạn code hiện hành:** với topic V2 *mới* ngoài các slot đã có, vẫn cần coordinator tạo slot qua `topic-propose`/`topic-approve` (có thể ủy quyền AI thực hiện theo gate; không cần owner thao tác tay). Chưa có workflow tự sáng tác và tự tạo slot mới vô hạn. GitHub Actions cũng không thể tự khởi tạo phiên Claude/Mistral sau khi phiên AI kết thúc.
