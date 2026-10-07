# Mistral Writer Runbook — Factory Lite 20k

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
- 1.600–3.000 từ.
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
