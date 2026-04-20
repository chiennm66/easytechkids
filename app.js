// ============================================================
//  APP.JS - Logic chính của website 3D Models Store
// ============================================================

// ── STATE ────────────────────────────────────────────────────
const state = {
  allModels: [],       // Toàn bộ dữ liệu gốc
  filtered: [],        // Sau khi filter/search
  currentCategory: 'all',
  currentType: 'all',
  currentSoftware: 'all',
  searchQuery: '',
  page: 1,
  currentModal: null,  // Model đang xem
  currentImgIdx: 0,
};

// ── SAMPLE DATA (dùng khi chưa kết nối Google Sheets) ────────
const SAMPLE_DATA = [
  { id:'1', name:'Modern Sofa Set', category:'Furniture', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', images:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80','https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80','https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80'], description:'Bộ sofa hiện đại phong cách Bắc Âu, chi tiết cao, phù hợp nội thất phòng khách.', software:'3ds Max', format:'MAX, FBX, OBJ', tags:'sofa,living room,modern' },
  { id:'2', name:'Minimalist Dining Table', category:'Furniture', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&q=80', images:['https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&q=80','https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80'], description:'Bàn ăn tối giản, chân kim loại, mặt gỗ sồi. Polygon thấp, tối ưu render.', software:'Blender', format:'BLEND, FBX', tags:'table,dining,minimalist' },
  { id:'3', name:'Bamboo Indoor Plant', category:'Plants', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80', images:['https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80','https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80'], description:'Cây tre trong nhà, chậu đen tối giản, texture chi tiết cao.', software:'3ds Max', format:'MAX, FBX', tags:'plant,indoor,bamboo' },
  { id:'4', name:'Modern Kitchen Set', category:'Kitchen', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', images:['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80','https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80','https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80'], description:'Bộ bếp hiện đại đầy đủ tủ bếp, đảo bếp, thiết bị. Chi tiết cực cao.', software:'3ds Max', format:'MAX, FBX, OBJ', tags:'kitchen,cabinet,modern' },
  { id:'5', name:'Pendant Light Classic', category:'Lighting', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80', images:['https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80','https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'], description:'Đèn thả trần cổ điển, chất liệu đồng, ánh sáng IES có sẵn.', software:'3ds Max', format:'MAX, FBX', tags:'lamp,pendant,classic' },
  { id:'6', name:'Luxury Bathroom Set', category:'Bathroom', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80', images:['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80','https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80','https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'], description:'Bộ phòng tắm cao cấp gồm bồn tắm, lavabo, gương và phụ kiện.', software:'3ds Max', format:'MAX, FBX', tags:'bathroom,luxury,bathtub' },
  { id:'7', name:'Office Desk Setup', category:'Office', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80', images:['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80','https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80'], description:'Setup bàn làm việc văn phòng, đầy đủ màn hình, bàn phím, ghế.', software:'Blender', format:'BLEND, OBJ', tags:'office,desk,workspace' },
  { id:'8', name:'Modern Armchair', category:'Furniture', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', images:['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'], description:'Ghế armchair hiện đại, vải bọc đẹp, phù hợp phòng khách và văn phòng.', software:'3ds Max', format:'MAX, FBX', tags:'chair,armchair,modern' },
  { id:'9', name:'Decorative Vase Set', category:'Decoration', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&q=80', images:['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80','https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?w=800&q=80'], description:'Bộ bình trang trí ceramic nhiều hình dạng, trang trí kệ sách và bàn.', software:'3ds Max', format:'MAX, FBX, OBJ', tags:'vase,decoration,ceramic' },
  { id:'10', name:'Luxury Bed Frame', category:'Bedroom', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80', images:['https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80','https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80','https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80'], description:'Giường ngủ cao cấp kèm tủ đầu giường, chất liệu gỗ óc chó cao cấp.', software:'3ds Max', format:'MAX, FBX', tags:'bed,bedroom,luxury' },
  { id:'11', name:'Floor Lamp Nordic', category:'Lighting', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80', images:['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'], description:'Đèn sàn phong cách Bắc Âu, chân mảnh thanh lịch.', software:'Blender', format:'BLEND, FBX', tags:'lamp,floor,nordic' },
  { id:'12', name:'Marble Coffee Table', category:'Furniture', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', images:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80','https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80'], description:'Bàn cà phê mặt đá cẩm thạch, chân vàng, phong cách luxury.', software:'3ds Max', format:'MAX, FBX', tags:'table,marble,luxury' },
];

// ── GOOGLE DRIVE LINK CONVERT ─────────────────────────────────
// Hỗ trợ tất cả dạng link Google Drive:
//   /file/d/ID/view
//   /file/d/ID/view?usp=sharing
//   open?id=ID
//   uc?id=ID  hoặc  uc?export=view&id=ID
//   lh3.googleusercontent.com/d/ID
function convertDriveLink(url) {
  if (!url) return '';
  url = url.trim();

  // Đã là link direct rồi → giữ nguyên
  if (url.includes('uc?export=view&id=')) return url;

  // Dạng /file/d/ID  hoặc  /d/ID (googleusercontent)
  const slashD = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (slashD) {
    return `https://drive.google.com/uc?export=view&id=${slashD[1]}`;
  }

  // Dạng open?id=ID  hoặc  uc?id=ID
  const queryId = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (queryId) {
    return `https://drive.google.com/uc?export=view&id=${queryId[1]}`;
  }

  // URL ảnh bình thường (jpg, png, webp, gif, jpeg, avif) → giữ nguyên
  return url;
}

// ── FETCH DATA: localStorage (CMS) → Google Sheets → Sample ──
async function fetchFromSheets() {
  // 1. Ưu tiên đọc từ CMS (localStorage)
  const cmsData = (() => {
    try { return JSON.parse(localStorage.getItem('cms_models')); } catch { return null; }
  })();
  if (cmsData && cmsData.length > 0) {
    // Đảm bảo tất cả link ảnh đều được convert đúng (backward compat)
    const sanitized = cmsData.map(m => ({
      ...m,
      thumbnail: convertDriveLink(m.thumbnail || ''),
      images: Array.isArray(m.images)
        ? m.images.map(img => convertDriveLink(img)).filter(Boolean)
        : (m.thumbnail ? [convertDriveLink(m.thumbnail)] : []),
    }));
    console.log(`Dùng dữ liệu từ CMS: ${sanitized.length} models`);
    return sanitized;
  }

  // 2. Thử Google Sheets nếu đã cấu hình
  if (!CONFIG.sheetId || CONFIG.sheetId === 'YOUR_SHEET_ID') {
    console.log('Chưa cấu hình → dùng dữ liệu mẫu');
    return SAMPLE_DATA;
  }

  try {
    const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(CONFIG.sheetName)}&headers=1`;
    const res = await fetch(url);
    const text = await res.text();

    // Parse Google Visualization JSON (wrapped format)
    const json = JSON.parse(text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\)/)[1]);
    const rows = json.table.rows;
    const cols = CONFIG.columns;

    return rows
      .filter(r => r.c && r.c[cols.name] && r.c[cols.name].v)
      .map((r, i) => {
        const cell = (idx) => (r.c[idx] && r.c[idx].v != null) ? String(r.c[idx].v).trim() : '';
        const rawImages = cell(cols.images);
        const imageList = rawImages
          ? rawImages.split(',').map(s => convertDriveLink(s.trim())).filter(Boolean)
          : [];
        const thumb = cell(cols.thumbnail)
          ? convertDriveLink(cell(cols.thumbnail))
          : (imageList[0] || '');

        return {
          id: cell(cols.id) || String(i + 1),
          name: cell(cols.name),
          category: cell(cols.category) || 'Other',
          type: (cell(cols.type) || 'PRO').toUpperCase(),
          price: cell(cols.price),
          thumbnail: thumb,
          images: imageList.length ? imageList : (thumb ? [thumb] : []),
          description: cell(cols.description),
          software: cell(cols.software),
          format: cell(cols.format),
          tags: cell(cols.tags),
        };
      });

  } catch (err) {
    console.error('Lỗi tải Google Sheets:', err);
    console.log('Dùng dữ liệu mẫu do lỗi kết nối');
    return SAMPLE_DATA;
  }
}

// ── INIT ──────────────────────────────────────────────────────
async function init() {
  setupZalo();
  setupSearch();

  const models = await fetchFromSheets();
  state.allModels = models;
  state.filtered = [...models];

  buildCategoryList();
  buildSoftwareList();
  applyFilters();
}

// ── ZALO SETUP ────────────────────────────────────────────────
function setupZalo() {
  const phone = CONFIG.zaloPhone.replace(/\D/g, '');
  const link = `https://zalo.me/${phone}`;
  document.getElementById('zaloFloat').href = link;
  document.getElementById('zaloHeaderBtn').href = link;
}

// ── SEARCH ────────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');

  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    const val = input.value.trim();
    clearBtn.classList.toggle('visible', val.length > 0);
    timer = setTimeout(() => {
      state.searchQuery = val;
      state.page = 1;
      applyFilters();
    }, 300);
  });
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  state.searchQuery = '';
  state.page = 1;
  applyFilters();
}

// ── CATEGORY ─────────────────────────────────────────────────
function buildCategoryList() {
  const counts = {};
  state.allModels.forEach(m => {
    counts[m.category] = (counts[m.category] || 0) + 1;
  });

  // Lấy icon từ CMS categories hoặc CONFIG
  const cmsCategories = (() => {
    try { return JSON.parse(localStorage.getItem('cms_categories')) || []; } catch { return []; }
  })();
  const iconMap = {};
  cmsCategories.forEach(c => { iconMap[c.name] = c.icon; });

  const list = document.getElementById('categoryList');
  document.getElementById('count-all').textContent = state.allModels.length;

  // Sort categories by count desc
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  sorted.forEach(([cat, count]) => {
    const icon = iconMap[cat] || CONFIG.categoryIcons[cat] || '◆';
    const li = document.createElement('li');
    li.className = 'category-item';
    li.dataset.category = cat;
    li.onclick = () => filterByCategory(cat);
    li.innerHTML = `
      <span class="cat-icon">${icon}</span>
      <span class="cat-name">${cat}</span>
      <span class="cat-count">${count}</span>
    `;
    list.appendChild(li);
  });
}

function filterByCategory(cat) {
  state.currentCategory = cat;
  state.page = 1;

  // Update active state
  document.querySelectorAll('.category-item').forEach(el => {
    el.classList.toggle('active', el.dataset.category === cat);
  });

  // Close sidebar on mobile
  closeSidebarMobile();
  applyFilters();
}

// ── TYPE FILTER ───────────────────────────────────────────────
function filterByType(type) {
  state.currentType = type;
  state.page = 1;

  // Update toolbar buttons
  document.querySelectorAll('.btn-type').forEach(b => b.classList.remove('active'));
  const map = { all: 'btnAll', PRO: 'btnPRO', FREE: 'btnFREE' };
  if (map[type]) document.getElementById(map[type]).classList.add('active');

  // Update sidebar type items
  document.querySelectorAll('.type-item').forEach(el => {
    el.classList.toggle('active', el.dataset.type === type);
  });

  applyFilters();
}

// ── SOFTWARE FILTER ───────────────────────────────────────────
function buildSoftwareList() {
  const softwares = [...new Set(
    state.allModels.map(m => m.software).filter(Boolean)
  )].sort();

  if (softwares.length === 0) return;

  document.getElementById('softwareSection').style.display = 'block';
  const list = document.getElementById('softwareList');
  list.innerHTML = '';

  softwares.forEach(sw => {
    const li = document.createElement('li');
    li.className = 'software-item';
    li.textContent = sw;
    li.onclick = () => filterBySoftware(sw, li);
    list.appendChild(li);
  });
}

function filterBySoftware(sw, el) {
  if (state.currentSoftware === sw) {
    state.currentSoftware = 'all';
    el.classList.remove('active');
  } else {
    state.currentSoftware = sw;
    document.querySelectorAll('.software-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
  }
  state.page = 1;
  applyFilters();
}

// ── MAIN FILTER + SORT ────────────────────────────────────────
function applyFilters() {
  let result = [...state.allModels];

  // Category
  if (state.currentCategory !== 'all') {
    result = result.filter(m => m.category === state.currentCategory);
  }

  // Type
  if (state.currentType !== 'all') {
    result = result.filter(m => m.type === state.currentType);
  }

  // Software
  if (state.currentSoftware !== 'all') {
    result = result.filter(m => m.software === state.currentSoftware);
  }

  // Search
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    result = result.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      (m.description || '').toLowerCase().includes(q) ||
      (m.tags || '').toLowerCase().includes(q) ||
      (m.software || '').toLowerCase().includes(q)
    );
  }

  // Sort
  const sort = document.getElementById('sortSelect').value;
  if (sort === 'name_az') result.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'name_za') result.sort((a, b) => b.name.localeCompare(a.name));
  else if (sort === 'free_first') result.sort((a, b) => (a.type === 'FREE' ? -1 : 1));
  // 'newest' = default order from sheet

  state.filtered = result;

  renderGrid();
  updateResultCount();
  renderActiveFilters();
  updateCategoryCountHighlight();
}

function resetFilters() {
  state.currentCategory = 'all';
  state.currentType = 'all';
  state.currentSoftware = 'all';
  state.searchQuery = '';
  state.page = 1;
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  document.getElementById('sortSelect').value = 'newest';

  document.querySelectorAll('.category-item').forEach(el =>
    el.classList.toggle('active', el.dataset.category === 'all')
  );
  document.querySelectorAll('.btn-type').forEach(b => b.classList.remove('active'));
  document.getElementById('btnAll').classList.add('active');
  document.querySelectorAll('.type-item').forEach(el =>
    el.classList.toggle('active', el.dataset.type === 'all')
  );
  document.querySelectorAll('.software-item').forEach(el => el.classList.remove('active'));

  applyFilters();
}

// ── RENDER GRID ───────────────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById('modelsGrid');
  const empty = document.getElementById('emptyState');
  const loadMoreWrap = document.getElementById('loadMoreWrap');

  const pageItems = state.filtered.slice(0, state.page * CONFIG.pageSize);
  const hasMore = pageItems.length < state.filtered.length;

  if (state.filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    loadMoreWrap.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  loadMoreWrap.style.display = hasMore ? 'block' : 'none';

  grid.innerHTML = pageItems.map(model => createCardHTML(model)).join('');
}

function createCardHTML(model) {
  const badge = model.type === 'FREE'
    ? `<span class="card-badge badge-free">FREE</span>`
    : `<span class="card-badge badge-pro">PRO</span>`;

  const imgCount = model.images && model.images.length > 1
    ? `<span class="card-img-count">🖼 ${model.images.length}</span>` : '';

  const thumbHtml = model.thumbnail
    ? `<img src="${escHtml(model.thumbnail)}" alt="${escHtml(model.name)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'card-no-img\\'><svg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'#cbd5e1\\' stroke-width=\\'1.5\\'><path d=\\'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\'/>\\</svg><span>No image</span></div>'" />`
    : `<div class="card-no-img"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>`;

  const swBadge = model.software
    ? `<span class="card-software">${escHtml(model.software)}</span>` : '';

  return `
    <div class="model-card" onclick="openModal('${escHtml(model.id)}')">
      <div class="card-thumb">
        ${thumbHtml}
        ${badge}
        ${imgCount}
      </div>
      <div class="card-body">
        <div class="card-name" title="${escHtml(model.name)}">${escHtml(model.name)}</div>
        <div class="card-meta">
          <span class="card-category">${escHtml(model.category)}</span>
          ${swBadge}
        </div>
      </div>
    </div>
  `;
}

function loadMore() {
  state.page++;
  renderGrid();
}

// ── RESULT COUNT ──────────────────────────────────────────────
function updateResultCount() {
  const total = state.filtered.length;
  const shown = Math.min(total, state.page * CONFIG.pageSize);
  document.getElementById('resultCount').textContent =
    total === state.allModels.length
      ? `${total} models`
      : `${shown} / ${total} kết quả`;
}

// ── ACTIVE FILTERS TAGS ───────────────────────────────────────
function renderActiveFilters() {
  const wrap = document.getElementById('activeFilters');
  wrap.innerHTML = '';
  const tags = [];

  if (state.currentCategory !== 'all') {
    tags.push({ label: `📁 ${state.currentCategory}`, clear: () => filterByCategory('all') });
  }
  if (state.currentType !== 'all') {
    tags.push({ label: state.currentType, clear: () => filterByType('all') });
  }
  if (state.currentSoftware !== 'all') {
    tags.push({ label: `💻 ${state.currentSoftware}`, clear: () => { state.currentSoftware = 'all'; document.querySelectorAll('.software-item').forEach(el=>el.classList.remove('active')); state.page=1; applyFilters(); } });
  }
  if (state.searchQuery) {
    tags.push({ label: `🔍 "${state.searchQuery}"`, clear: clearSearch });
  }

  tags.forEach(t => {
    const div = document.createElement('div');
    div.className = 'filter-tag';
    div.innerHTML = `<span>${t.label}</span><button onclick="">✕</button>`;
    div.querySelector('button').addEventListener('click', (e) => { e.stopPropagation(); t.clear(); });
    wrap.appendChild(div);
  });
}

function updateCategoryCountHighlight() {
  // nothing extra needed - counts are static
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(id) {
  const model = state.allModels.find(m => m.id === id);
  if (!model) return;

  state.currentModal = model;
  state.currentImgIdx = 0;

  // Badges
  const badgesEl = document.getElementById('modalBadges');
  badgesEl.innerHTML = model.type === 'FREE'
    ? `<span class="modal-badge badge-free">FREE</span>`
    : `<span class="modal-badge badge-pro">PRO</span>`;

  // Name & category
  document.getElementById('modalName').textContent = model.name;
  document.getElementById('modalCategoryTag').textContent = model.category;

  // Details
  const details = [];
  if (model.software) details.push({ label: 'Phần mềm', value: model.software });
  if (model.format)   details.push({ label: 'Định dạng', value: model.format });
  if (model.price)    details.push({ label: 'Giá', value: model.price });
  if (model.tags)     details.push({ label: 'Tags', value: model.tags.split(',').map(t => t.trim()).join(', ') });

  document.getElementById('modalDetails').innerHTML = details.map(d =>
    `<div class="detail-row"><span class="detail-label">${d.label}</span><span class="detail-value">${escHtml(d.value)}</span></div>`
  ).join('');

  // Description
  document.getElementById('modalDesc').textContent = model.description || '';

  // Zalo link with model name
  const phone = CONFIG.zaloPhone.replace(/\D/g, '');
  document.getElementById('modalZaloBtn').href = `https://zalo.me/${phone}`;

  // Gallery
  const imgs = (model.images && model.images.length) ? model.images : (model.thumbnail ? [model.thumbnail] : []);
  renderGallery(imgs, 0);

  // Open overlay
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderGallery(imgs, idx) {
  const mainImg = document.getElementById('galleryMainImg');
  const counter = document.getElementById('galleryCounter');
  const thumbsWrap = document.getElementById('galleryThumbs');

  mainImg.src = imgs[idx] || '';
  mainImg.alt = state.currentModal?.name || '';
  counter.textContent = `${idx + 1} / ${imgs.length}`;

  // Thumbs
  thumbsWrap.innerHTML = imgs.map((img, i) =>
    `<div class="thumb-item ${i === idx ? 'active' : ''}" onclick="jumpImage(${i})">
      <img src="${escHtml(img)}" alt="thumb ${i+1}" loading="lazy" />
    </div>`
  ).join('');

  // Nav buttons
  document.querySelector('.gallery-nav.prev').disabled = idx === 0;
  document.querySelector('.gallery-nav.next').disabled = idx === imgs.length - 1;

  state.currentImgIdx = idx;
}

function getModalImages() {
  const m = state.currentModal;
  return (m && m.images && m.images.length) ? m.images : (m?.thumbnail ? [m.thumbnail] : []);
}

function prevImage() {
  const imgs = getModalImages();
  if (state.currentImgIdx > 0) renderGallery(imgs, state.currentImgIdx - 1);
}

function nextImage() {
  const imgs = getModalImages();
  if (state.currentImgIdx < imgs.length - 1) renderGallery(imgs, state.currentImgIdx + 1);
}

function jumpImage(idx) {
  renderGallery(getModalImages(), idx);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  state.currentModal = null;
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('modalOverlay').classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

// ── MOBILE SIDEBAR ────────────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function closeSidebarMobile() {
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
  }
}

// ── HELPERS ───────────────────────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── START ─────────────────────────────────────────────────────
init();
