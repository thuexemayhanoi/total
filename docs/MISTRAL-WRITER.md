# Mistral Writer Runbook — Factory Lite 20k

> **Cập nhật owner 24/10/2026 — FAST MODE:** Tên file chỉ là lịch sử; Claude, Mistral và ChatGPT đều dùng cùng quy trình. `factory/topic-governance.json` hiện `mode=off` và `requireApproved=false`: **300 slot PLANNED cũ không cần topic-approve**. Hãy bắt đầu `writer-pack --count 10 --json` rồi tự nghiên cứu, chọn những topic thật sự khác bài PUBLISHED, viết/verify/push batch. Không đòi người dùng duyệt hay mở khóa mỗi bài. **Không** coi 300 tiêu đề cũ là 300 intent mới: có rất nhiều biến thể V1 trùng SEO; nếu trùng thì bỏ, không viết đệm. `v1Generation=frozen` vẫn giữ để không tự sinh topic hoán vị. Bài mới sau này cần nghiên cứu chủ đề độc lập, tiếp tục quy trình qua Topic Factory có kiểm chứng. Khóa transaction nội bộ trong publisher và QA ≥70 vẫn giữ. Publisher quét phục hồi backlog 30 phút/lượt, nhưng không tự gọi AI viết.


Mục tiêu: Mistral/Claude không tự đọc toàn matrix, không tự đoán internal link, không tự nghĩ workflow. **Nguồn hướng dẫn chuẩn là [`FAST-WRITER-LOOP.md`](FAST-WRITER-LOOP.md) và `AGENTS.md`**; file này giữ cho phiên Mistral cũ tương thích.

## Một vòng production

Bắt đầu mỗi vòng bằng:

```bash
git fetch origin main
git rebase origin/main
node factory/factory.js writer-pack --count 10
```

Có thể dùng JSON nếu agent xử lý tốt hơn:

```bash
node factory/factory.js writer-pack --count 10 --json
```

`writer-pack` trả đúng 1–10 slot cần viết, gồm:
- ID
- title + intent
- file path chính xác
- canonical path
- category/hub
- danh sách related slug đã PUBLISHED

## Luật viết

- Chỉ tạo đúng file `factory/data/articles/<slug>.js`.
- Không đổi ID, slug, hub, title hoặc intent của slot.
- **1.000–5.000 từ/bài** (phạm vi linh hoạt; viết đủ giá trị, không kéo dài để lấp số từ). Writer Pack và QA cùng lấy ngưỡng từ `factory/lib/factory-runtime.js`.
- Ít nhất 4 section có nội dung thật.
- Dùng ít nhất 2 internal link từ `RELATED_PUBLISHED`.
- Không tự bịa slug liên kết.
- Không bịa giá thuê, địa chỉ, hotline/Zalo hoặc policy kinh doanh.
- Không khẳng định luật/giá/dữ liệu thời sự mới nếu chưa có nguồn phù hợp.
- Ưu tiên bài khác intent; không viết lại bài đã PUBLISHED.

## Trước khi push

Dùng đúng batch IDs mà `writer-pack` in ra:

```bash
node factory/factory.js verify-batch "Sxxxxx,Sxxxxx,..."
```

Chỉ push khi có `VERIFY_BATCH_OK`.

Sau đó:

```bash
node factory/factory.js writer-heartbeat --phase waiting-publish --pair "Sxxxxx,Sxxxxx,..."
git add factory/data/articles factory/state/writer-heartbeat.json
git commit -m "writer: batch Sxxxxx-Sxxxxx"
git push
```

## Không cần chờ Pages để viết batch kế

Sau khi push thành công:

```bash
git fetch origin main
git rebase origin/main
node factory/factory.js writer-pack --count 10
```

Slot PLANNED đã có module bài sẽ được `writer-pack` bỏ qua, nên Mistral có thể tiếp tục viết batch kế trong khi Factory Publish Lite xử lý batch trước.

Publisher tự chạy:

```
exact push scope
→ verify-batch
→ publish-batch 1–10
→ render
→ internal-link 404 fail-closed
→ state commit
```

Nếu batch fail QA hoặc 404:
- sửa đúng batch đó;
- không reset matrix;
- không force push;
- không sửa bài PUBLISHED nếu không cần;
- không hạ QA để cho qua.

## Nguồn topic — FAST MODE hiện hành

- `factory/topic-governance.json` hiện là `mode=off`, `requireApproved=false`, `v1Generation=frozen`. Writer có thể nhận **300 slot PLANNED legacy hiện có** mà không cần chủ repo duyệt hay chạy `topic-approve` từng slot.
- **Không coi 300 slot = 300 bài hợp lệ.** Nhiều tiêu đề được tạo từ hoán vị V1; Writer tự đối chiếu câu hỏi, search intent, bài PUBLISHED gần nhất và bằng chứng trước khi viết. Chủ đề không có information gain độc lập thì bỏ, không nhồi bài.
- `queue-refill` vẫn frozen; không tự sinh thêm các topic V1 dạng seed × angle × context. Khi hết slot có giá trị, phải nghiên cứu đề xuất mới. **Giới hạn hiện có:** Topic V2 mới ngoài các slot legacy vẫn cần công cụ `topic-propose` / `topic-approve` do coordinator ghi slot; chưa có lệnh auto-create + auto-approve cho topic mới.
- Topic V2 đã có TOPIC_BRIEF/GAIN/OUTLINE/SCOPE thì phải tuân thủ, kể cả `no-figures`; slot legacy thiếu brief phải tự nghiên cứu và ghi đúng dữ kiện.
- Writer độc lập có thể dùng `writer-pack --count 10 --shard k/3 --json` theo hướng dẫn `FAST-WRITER-LOOP.md`; mỗi phiên một shard và working copy riêng. `writer-heartbeat.json` là **file chung**, không để nhiều writer cùng sửa và đẩy một lúc.

## Khi nào dừng

`writer-pack` trong FAST MODE có thể trả `wait-publish`, `refill`, `done-general-target` hoặc `ready`; mỗi status phải đọc trong output thật. Nếu `ready` nhưng 10 topic đầu trùng ý, đừng viết đệm: chọn shard khác nếu có, hoặc dừng báo rõ danh sách topic bị trùng/cần nghiên cứu bổ sung. `refill` không thể tự tạo topic nếu `v1Generation=frozen`. Nếu hết quota AI, lưu checkpoint rồi tiếp tục ở phiên mới; GitHub Actions không thể tự gọi AI. Không dừng chỉ vì một batch đã GREEN.
