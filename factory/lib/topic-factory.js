'use strict';

// AI WIKI TOTAL — TOPIC FACTORY deterministic cho scale lớn.
// Không dùng AI/API, không bịa dữ kiện thời sự. Chỉ sinh đề bài từ taxonomy
// đã được chủ repo duyệt trong categories.js. Mỗi topic có slug/intent riêng.

const { CATEGORIES } = require('../data/categories');

function slugifyVi(input) {
  return String(input || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

function cap(s) {
  const x = String(s || '').trim();
  return x ? x.charAt(0).toUpperCase() + x.slice(1) : x;
}

const PROFILES = {
  rental: {
    angles: [
      ['huong-dan','hướng dẫn thực tế'], ['thu-tuc','thủ tục và giấy tờ'],
      ['chi-phi','chi phí và cách tính'], ['kiem-tra','cách kiểm tra trước khi quyết định'],
      ['hop-dong','hợp đồng và điều khoản cần đọc'], ['rui-ro','rủi ro thường gặp và cách tránh'],
      ['checklist','checklist từng bước'], ['faq','câu hỏi thường gặp'],
      ['so-sanh','cách so sánh lựa chọn'], ['kinh-nghiem','kinh nghiệm sử dụng thực tế'],
      ['tra-xe','những điều cần nhớ khi hoàn trả'], ['dat-coc','đặt cọc và nghiệm thu an toàn']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['ngan-ngay','khi dùng ngắn ngày'],
      ['dai-ngay','khi dùng dài ngày'], ['duong-dai','khi đi đường dài'],
      ['do-thi','trong điều kiện đô thị'], ['thuc-te','theo tình huống thực tế']
    ]
  },
  guide: {
    angles: [
      ['huong-dan','hướng dẫn từng bước'], ['quy-trinh','quy trình nên làm'],
      ['kiem-tra','cách tự kiểm tra'], ['loi-thuong-gap','lỗi thường gặp'],
      ['xu-ly','cách xử lý an toàn'], ['bao-duong','cách chăm sóc và duy trì'],
      ['checklist','checklist thực hành'], ['faq','câu hỏi thường gặp'],
      ['dau-hieu','dấu hiệu cần chú ý'], ['kinh-nghiem','kinh nghiệm thực tế'],
      ['nen-khong','khi nào nên và không nên'], ['tung-buoc','các bước từ cơ bản đến nâng cao']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['hang-ngay','khi sử dụng hằng ngày'],
      ['duong-dai','khi đi đường dài'], ['mua-mua','trong mùa mưa'],
      ['xe-cu','với xe đã qua sử dụng'], ['thuc-te','trong tình huống thực tế']
    ]
  },
  reference: {
    angles: [
      ['la-gi','giải thích dễ hiểu'], ['cau-tao','cấu tạo và vai trò'],
      ['nguyen-ly','nguyên lý hoạt động'], ['dau-hieu','dấu hiệu nhận biết'],
      ['kiem-tra','cách kiểm tra cơ bản'], ['bao-duong','bảo dưỡng và tuổi thọ'],
      ['loi','lỗi thường gặp và nguyên nhân'], ['so-sanh','so sánh với khái niệm liên quan'],
      ['faq','câu hỏi thường gặp'], ['thuc-hanh','ứng dụng trong thực tế'],
      ['doc-hieu','cách đọc và hiểu đúng'], ['luu-y','những lưu ý dễ bỏ sót']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['thuc-te','trong sử dụng thực tế'],
      ['xe-pho-thong','trên xe phổ thông'], ['xe-cu','với xe đã qua sử dụng'],
      ['hang-ngay','trong vận hành hằng ngày'], ['ky-thuat','dưới góc nhìn kỹ thuật cơ bản']
    ]
  },
  model: {
    angles: [
      ['tong-quan','tổng quan dễ hiểu'], ['thong-so','thông số và ý nghĩa thực tế'],
      ['uu-nhuoc','ưu nhược điểm cần biết'], ['van-hanh','trải nghiệm vận hành'],
      ['bao-duong','bảo dưỡng và chi tiết cần chú ý'], ['loi-thuong-gap','lỗi thường gặp'],
      ['chi-phi','chi phí sử dụng'], ['phu-tung','phụ tùng và khả năng sửa chữa'],
      ['mua-cu','kinh nghiệm khi xem xe cũ'], ['so-sanh','tiêu chí để so sánh'],
      ['phu-hop','đối tượng sử dụng phù hợp'], ['faq','câu hỏi thường gặp']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['di-lam','khi đi làm hằng ngày'],
      ['duong-dai','khi đi đường dài'], ['do-thi','trong đô thị'],
      ['xe-cu','khi cân nhắc xe cũ'], ['thuc-te','theo nhu cầu thực tế']
    ]
  },
  travel: {
    angles: [
      ['chuan-bi','cách chuẩn bị trước chuyến đi'], ['lich-trinh','cách lên lịch trình'],
      ['an-toan','an toàn và rủi ro cần tránh'], ['chi-phi','cách dự tính chi phí'],
      ['nhien-lieu','nhiên liệu và quãng đường'], ['nghi-ngoi','điểm nghỉ và nhịp di chuyển'],
      ['thoi-tiet','cách ứng phó thời tiết'], ['hanh-ly','hành lý và đồ cần mang'],
      ['su-co','xử lý sự cố giữa đường'], ['checklist','checklist trước khi xuất phát'],
      ['kinh-nghiem','kinh nghiệm thực tế'], ['faq','câu hỏi thường gặp']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['mot-ngay','cho chuyến đi một ngày'],
      ['hai-ngay','cho chuyến đi hai ngày'], ['mua-mua','trong mùa mưa'],
      ['xe-may','khi đi bằng xe máy'], ['duong-dai','cho hành trình đường dài']
    ]
  },
  local: {
    angles: [
      ['tong-quan','tổng quan di chuyển'], ['tuyen-duong','cách chọn tuyến đường'],
      ['giao-thong','đặc điểm giao thông cần biết'], ['gui-xe','kinh nghiệm gửi xe'],
      ['tram-xang','cách chuẩn bị nhiên liệu'], ['sua-xe','xử lý khi cần sửa xe'],
      ['an-toan','lưu ý an toàn'], ['chi-phi','cách ước tính chi phí'],
      ['thoi-diem','thời điểm di chuyển phù hợp'], ['checklist','checklist trước khi đi'],
      ['kinh-nghiem','kinh nghiệm thực tế'], ['faq','câu hỏi thường gặp']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['gio-cao-diem','vào giờ cao điểm'],
      ['cuoi-tuan','vào cuối tuần'], ['mua-mua','trong mùa mưa'],
      ['xe-may','khi đi xe máy'], ['thuc-te','theo tình huống thực tế']
    ]
  },
  garage: {
    angles: [
      ['chan-doan','cách chẩn đoán ban đầu'], ['nguyen-nhan','nguyên nhân thường gặp'],
      ['dau-hieu','dấu hiệu nhận biết'], ['kiem-tra','cách kiểm tra an toàn'],
      ['tu-xu-ly','việc có thể tự xử lý'], ['ra-tho','khi nào nên mang ra thợ'],
      ['chi-phi','các yếu tố ảnh hưởng chi phí'], ['phu-tung','phụ tùng liên quan'],
      ['phong-ngua','cách phòng ngừa tái diễn'], ['faq','câu hỏi thường gặp'],
      ['sai-lam','sai lầm dễ mắc'], ['bao-duong','bảo dưỡng để hạn chế lỗi']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['xe-cu','với xe đã qua sử dụng'],
      ['xe-ga','trên xe tay ga'], ['xe-so','trên xe số'],
      ['hang-ngay','khi chạy hằng ngày'], ['thuc-te','theo tình huống thực tế']
    ]
  },
  market: {
    angles: [
      ['tong-quan','cách nhìn tổng quan'], ['gia','các yếu tố ảnh hưởng giá'],
      ['chi-phi','cách tính tổng chi phí'], ['so-sanh','tiêu chí để so sánh'],
      ['rui-ro','rủi ro cần kiểm tra'], ['xu-huong','cách đọc xu hướng dài hạn'],
      ['quyet-dinh','khung ra quyết định'], ['checklist','checklist trước khi quyết định'],
      ['faq','câu hỏi thường gặp'], ['du-lieu','cách đọc dữ liệu và thông tin'],
      ['sai-lam','sai lầm thường gặp'], ['kinh-nghiem','kinh nghiệm thực tế']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['ngan-sach','khi có ngân sách giới hạn'],
      ['xe-cu','khi xem xe cũ'], ['xe-moi','khi xem xe mới'],
      ['dai-han','theo góc nhìn dài hạn'], ['thuc-te','theo nhu cầu thực tế']
    ]
  },
  review: {
    angles: [
      ['tieu-chi','bộ tiêu chí đánh giá'], ['uu-nhuoc','ưu nhược điểm cần biết'],
      ['so-sanh','cách so sánh công bằng'], ['van-hanh','trải nghiệm sử dụng'],
      ['chi-phi','chi phí sở hữu và sử dụng'], ['do-ben','độ bền và bảo dưỡng'],
      ['phu-hop','ai sẽ phù hợp'], ['sai-lam','sai lầm khi lựa chọn'],
      ['checklist','checklist trước khi mua'], ['faq','câu hỏi thường gặp'],
      ['dai-han','góc nhìn sử dụng dài hạn'], ['thuc-te','đánh giá theo nhu cầu thực tế']
    ],
    contexts: [
      ['nguoi-moi','cho người mới'], ['di-lam','khi dùng đi làm'],
      ['duong-dai','khi đi đường dài'], ['do-thi','trong đô thị'],
      ['ngan-sach','khi cân đối ngân sách'], ['xe-cu','khi cân nhắc đồ đã qua sử dụng']
    ]
  }
};

const PROFILE_BY_PARENT = {
  'thue-xe':'rental', 'guide':'guide', 'hub':'reference', 'wiki':'reference',
  'learn':'reference', 'moto':'model', 'ride':'travel', 'tips':'guide',
  'docs':'reference', 'news':'market', 'local':'local', 'map':'local',
  'garage':'garage', 'market':'market', 'review':'review'
};

function buildTopicCandidates(opts) {
  const o = opts || {};
  const existing = new Set(Array.isArray(o.existingSlugs) ? o.existingSlugs : (o.existingSlugs instanceof Set ? [...o.existingSlugs] : []));
  const limit = Number.isFinite(o.limit) && o.limit > 0 ? Math.floor(o.limit) : Infinity;
  const out = [];
  const localSeen = new Set();
  outer:
  for (const parent of CATEGORIES || []) {
    const profile = PROFILES[PROFILE_BY_PARENT[parent.slug] || 'reference'];
    for (const child of parent.children || []) {
      const hub = parent.slug + '/' + child.slug;
      const seeds = Array.isArray(child.chuDe) ? child.chuDe : [];
      for (const seed of seeds) {
        const seedSlug = slugifyVi(seed);
        if (!seedSlug) continue;
        for (const angle of profile.angles) {
          for (const ctx of profile.contexts) {
            const slug = [seedSlug, parent.slug, child.slug, angle[0], ctx[0]].join('-');
            if (existing.has(slug) || localSeen.has(slug)) continue;
            localSeen.add(slug);
            out.push({
              hub, slug,
              title: cap(seed) + ': ' + angle[1] + ' ' + ctx[1],
              intent: 'informational/' + slug,
              source: 'topic-factory-v1'
            });
            if (out.length >= limit) break outer;
          }
        }
      }
    }
  }
  return out;
}

function countPotentialTopics() {
  return buildTopicCandidates({ limit: Infinity }).length;
}

module.exports = { slugifyVi, buildTopicCandidates, countPotentialTopics, PROFILE_BY_PARENT, PROFILES };
