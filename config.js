// ============================================================
//  CONFIG - Chỉnh sửa file này để cấu hình website của bạn
// ============================================================

const CONFIG = {

  // ── ZALO ──────────────────────────────────────────────────
  // Thay YOUR_PHONE_NUMBER bằng số điện thoại Zalo của bạn
  // Ví dụ: '0912345678'
  zaloPhone: 'YOUR_PHONE_NUMBER',

  // ── GOOGLE SHEETS ─────────────────────────────────────────
  // Hướng dẫn lấy SHEET_ID:
  //   1. Mở Google Sheets của bạn
  //   2. URL dạng: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
  //   3. Copy phần SHEET_ID vào đây
  // Lưu ý: Sheet phải được chia sẻ công khai (Anyone with the link - Viewer)
  sheetId: 'YOUR_SHEET_ID',

  // Tên sheet (mặc định là 'Sheet1', đổi nếu bạn đặt tên khác)
  sheetName: 'Sheet1',

  // ── HIỂN THỊ ──────────────────────────────────────────────
  // Số model hiển thị mỗi lần (load more)
  pageSize: 20,

  // Tên website
  siteName: '3D Models Store',

  // ── CẤU TRÚC CỘT GOOGLE SHEETS ────────────────────────────
  // Đừng thay đổi nếu bạn dùng template mẫu
  // Cột A=0, B=1, C=2, ...
  columns: {
    id: 0,          // A - ID (tự động)
    name: 1,        // B - Tên model
    category: 2,    // C - Danh mục (Furniture, Architecture, ...)
    type: 3,        // D - Loại: FREE hoặc PRO
    price: 4,       // E - Giá (để trống nếu FREE)
    thumbnail: 5,   // F - Link ảnh thumbnail (Google Drive)
    images: 6,      // G - Các ảnh gallery, ngăn cách bởi dấu phẩy
    description: 7, // H - Mô tả ngắn
    software: 8,    // I - Phần mềm (3ds Max, Blender, ...)
    format: 9,      // J - Định dạng file (FBX, OBJ, MAX, ...)
    tags: 10,       // K - Tags, ngăn cách bởi dấu phẩy
  },

  // ── DANH MỤC & ICON ───────────────────────────────────────
  // Icon emoji cho từng danh mục (tùy chỉnh)
  categoryIcons: {
    'Architecture': '🏛️',
    'Bathroom':     '🚿',
    'Bedroom':      '🛏️',
    'Decoration':   '🎨',
    'Furniture':    '🪑',
    'Kitchen':      '🍳',
    'Lighting':     '💡',
    'Living Room':  '🛋️',
    'Office':       '🖥️',
    'Outdoor':      '🌿',
    'Plants':       '🌱',
    'Scripts':      '📜',
    'Technology':   '⚡',
    'Textures':     '🖼️',
    'Transport':    '🚗',
    'Other':        '📦',
  },
};

// Tạo Zalo link
function getZaloLink(modelName) {
  const phone = CONFIG.zaloPhone.replace(/\D/g, '');
  const msg = modelName
    ? `Xin chào! Tôi muốn hỏi về model: ${modelName}`
    : 'Xin chào! Tôi muốn tư vấn về 3D Model';
  return `https://zalo.me/${phone}`;
}
