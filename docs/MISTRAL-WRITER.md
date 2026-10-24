# Mistral Writer Runbook — Factory Lite 20k

> **Cập nhật owner 24/10/2026 — FAST MODE:** Tên file chỉ là lịch sử; Claude, Mistral và ChatGPT đều dùng cùng quy trình. `factory/topic-governance.json` hiện `mode=off` và `requireApproved=false`: **300 slot PLANNED cũ không cần topic-approve**. Hãy bắt đầu `writer-pack --count 10 --json` rồi tự nghiên cứu, chọn những topic thật sự khác bài PUBLISHED, viết/verify/push batch. Không đòi người dùng duyệt hay mở khóa mỗi bài. **Không** coi 300 tiêu đề cũ là 300 intent mới: có rất nhiều biến thể V1 trùng SEO; nếu trùng thì bỏ, không viết đệm. `v1Generation=frozen` vẫn giữ để không tự sinh topic hoán vị. Bài mới sau này cần nghiên cứu chủ đề độc lập, tiếp tục quy trình qua Topic Factory có kiểm chứng. Khóa transaction nội bộ trong publisher và QA ≥70 vẫn giữ. Publisher quét phục hồi backlog 30 phút/lượt, nhưng không tự gọi AI viết.


Mục tiêu: Mistral không tự đọc toàn matrix, không tự đoán internal link, không tự nghĩ workflow.

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

## Nguồn topic

> **Topic Factory V2 (đang áp dụng, `factory/topic-governance.json` = enforce):** `queue-refill` bị đóng băng; Writer **chỉ nhận slot có topic APPROVED** trong `writer-pack` và phải viết đúng
> `TOPIC_BRIEF` / `TOPIC_GAIN` / `TOPIC_OUTLINE` / `TOPIC_SCOPE` (`no-figures` = không số liệu/giá/thông số). Không tự tạo slot hay topic. Xem [TOPIC-FACTORY-V2.md](TOPIC-FACTORY-V2.md).
> Phần mô tả `queue-refill` bên dưới là hành vi **legacy** (chỉ còn khi chủ repo đặt `v1Generation: allowed`).

Coordinator giữ khoảng 300 PLANNED.

Khi queue xuống dưới ngưỡng, `queue-refill` dùng:
1. seed topic cũ nếu còn;
2. Topic Factory deterministic theo taxonomy 97 hub.

`plannedTarget=16000` là phần topic tự động. 4.000 slot còn lại được giữ cho:
GSC query discovery, model xe mới, địa phương, luật mới, thị trường, technical gap và rental-intent gap.

Topic Factory không preallocate 20.000 slot cùng lúc; chỉ refill theo queue để matrix và writer luôn nhẹ.

## Khi nào dừng

Chỉ dừng khi `writer-pack` trả:
- `status=wait-publish`: fetch/rebase fresh main rồi kiểm lại;
- `status=refill`: chờ/cho coordinator refill rồi kiểm lại;
- `status=done-general-target`: phần 16k auto target đã xong.

Không dừng chỉ vì một batch đã GREEN.
