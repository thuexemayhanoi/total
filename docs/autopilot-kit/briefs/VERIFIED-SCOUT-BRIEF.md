# VERIFIED SCOUT BRIEF — AI WIKI TOTAL (làn dữ kiện có nguồn)

Nhiệm vụ: tìm tối đa 15 chủ đề bài viết MỚI THẬT SỰ cho người đi xe máy/xe điện ở Việt Nam, mỗi chủ đề được trả lời bằng một điều khoản cụ thể trong VĂN BẢN CHÍNH THỨC còn hiệu lực, và ghi ra file JSONL ứng viên có bằng chứng đã xác minh. Chất lượng quan trọng hơn số lượng: thà ít còn hơn sai dữ kiện.

## Nguyên tắc bất di bất dịch
1. Chỉ dùng nội dung bạn THỰC SỰ ĐÃ TẢI VÀ ĐỌC trong phiên này. Không dùng trí nhớ để nêu điều luật, con số, mức phạt. Nếu không tải được toàn văn hoặc không xác nhận được văn bản còn hiệu lực ở ngày 2026-10-24 thì BỎ chủ đề đó.
2. Nguồn chỉ từ cổng chính thức: datafiles.chinhphu.vn, vbpl.vn, chinhphu.vn, các cổng bộ/ngành `.gov.vn`. Không dùng báo, blog, diễn đàn, thuvienphapluat hay nguồn thương mại làm bằng chứng.
3. Sandbox chặn tải trực tiếp (curl) tới các host này. Dùng công cụ fetch phía máy chủ: `mcp__Parallel_Search__web_fetch` (nạp bằng ToolSearch `select:mcp__Parallel_Search__web_fetch,mcp__Parallel_Search__web_search`; tham số bắt buộc `urls`; thêm `model_name` = "claude-sonnet-5-5" và `session_id` = một chuỗi hex 32 ký tự cố định cho cả phiên). Chế độ mặc định chỉ trả trích đoạn rời; khi cần đọc đủ điều khoản, đặt `full_content: true` cho đúng văn bản đó (kết quả lớn có thể được hệ thống lưu ra file, khi đó đọc từng đoạn bằng offset/limit). Tải mỗi văn bản MỘT lần, ghi các đoạn cần dùng vào file nháp trong thư mục scratchpad để tra lại, đừng tải lặp. Có thể dùng `mcp__Firecrawl__firecrawl_scrape` (định dạng markdown, parsers pdf) nếu fetch thất bại. KHÔNG dùng công cụ tốn credit hàng loạt (crawl, dataset, audit).
4. Mỗi `verifiedFacts[].fact` phải chép NGUYÊN VĂN hoặc sát nguyên văn câu trong văn bản (giữ nguyên con số), kèm `cite` ghi đúng Điều, khoản, điểm và tên văn bản. Mọi con số (tốc độ, độ tuổi, mức phạt, thời hạn) mà bài sau này được phép nêu phải nằm trong `verifiedFacts`.
5. Ghi tình trạng hiệu lực: một `verifiedFacts` riêng nêu số hiệu, ngày ban hành, ngày hiệu lực và các văn bản sửa đổi được ghi ngay trên văn bản (ví dụ trang đầu bản hợp nhất). Văn bản nào có dấu hiệu đã bị thay thế mà bạn không xác nhận được bản hiện hành thì bỏ.
6. `retrievedAt` = "2026-10-24" (ngày hôm nay). `sources[].url` là URL đã tải thật. `sources[].label` ghi số hiệu và tên văn bản.
7. Không tư vấn pháp lý, không suy diễn nghĩa vụ ngoài điều khoản. Ý bài là giải thích điều khoản và việc người đi xe nên kiểm tra thêm.

## Cách chọn chủ đề
- Mỗi chủ đề là MỘT câu hỏi người đi xe máy thật sự hỏi, trả lời được từ một điều/khoản hoặc một nhóm khoản nhỏ. Không làm bài "tổng hợp cả luật".
- Tránh hoán vị: đừng tạo nhiều bài cùng khung chỉ đổi đối tượng. Ưu tiên điều khoản khác nhau thật sự.
- Trước khi giữ một ý: grep kho bài `/home/user/total/factory/data/articles/*.js` (slug, tiêu đề, keywords, thân bài, đã bỏ dấu) và `/home/user/total/factory/state/topic-matrix.jsonl` (kể cả APPROVED, REJECTED, MERGE-CANDIDATE). Nếu đã có bài trả lời cùng câu hỏi (kể cả kiểu nói chung chung không dẫn điều luật) thì ghi bài gần nhất và chỉ giữ nếu bài mới nêu được điều khoản cụ thể mà bài cũ không có. Ghi các lệnh grep đã dùng.
- Tiêu đề ≤ 120 ký tự, dạng câu hỏi/vấn đề thật; tránh cụm "cần thợ" (cổng đọc nhầm thành địa danh), tránh "mới nhất".
- `hub` chọn trong các hub có sẵn: `learn/kien-thuc-phap-ly`, `guide/thu-tuc-xe`, `ride/an-toan-giao-thong`, `docs/bieu-mau-thu-tuc`, `news/chinh-sach-phap-ly`, hoặc hub phù hợp khác trong `factory/data/categories.js`. Không tạo hub mới.
- `internalLinks`: 3 slug CÓ THẬT (file `/home/user/total/factory/data/articles/<slug>.js` tồn tại), gần chủ đề nhất.

## Định dạng JSONL (một dòng một ứng viên)
Mẫu đầy đủ: `/tmp/claude-0/-home-user-total/e75d041e-39fa-580c-922a-dc1806d8b259/scratchpad/example-verified.json` (đây là chủ đề đã được xuất bản làm chuẩn). Giữ đúng tên trường: slug, title, hub, subtopic, intent ("informational"), contentType ("explainer"|"guide"|"troubleshooting"), priority "P1", primaryKeyword, secondaryKeywords (3), userProblem (≥ 60 ký tự), informationGain (≥ 400 ký tự, nêu bài sẽ giải thích điều khoản nào, phân biệt gì, và kết bằng câu "Chỉ nêu dữ kiện đã kiểm chứng trong …; phần … chỉ dẫn sang bài sẵn có."), outline (đúng 5 H2), schemaOrg "Article", evidence { "type": "official-source", "status": "verified", "sources": [{label,url,retrievedAt}], "verifiedFacts": [{fact,cite}, ...] } (2 đến 8 dữ kiện, có một dòng tình trạng hiệu lực), demand {"source":"none"}, factualScope "verified-facts-only", requiresVerifiedData true, internalLinks.

## Đầu ra
- Ghi file JSONL vào đường dẫn OUT trong prompt. Kiểm tra: `python3 -I -c "import json,sys;[json.loads(l) for l in open(sys.argv[1])]" OUT`.
- Báo cáo ngắn: các văn bản đã tải (URL, số hiệu, tình trạng hiệu lực xác nhận ra sao), danh sách tiêu đề; với mỗi tiêu đề một dòng: điều khoản dùng, đã grep gì, bài gần nhất và khác ở đâu. Nêu rõ các văn bản/ý bị bỏ vì không xác nhận được.
- KHÔNG tạo/sửa file nào trong repo, KHÔNG chạy git, KHÔNG chạy lệnh ghi của factory.js (chỉ được `node factory/factory.js topic-coverage`).
