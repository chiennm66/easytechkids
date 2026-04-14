// ═══════════════════════════════════════════════════════════
//  ADMIN.JS — CMS cho 3D Models Store
//  Lưu trữ: localStorage (không cần server)
//  Mật khẩu mặc định: admin123
// ═══════════════════════════════════════════════════════════

// ── STORAGE KEYS ────────────────────────────────────────────
const KEYS = {
  models:     'cms_models',
  categories: 'cms_categories',
  settings:   'cms_settings',
  password:   'cms_password',
  session:    'cms_session',
};

const DEFAULT_PASSWORD = 'admin123';

// ── SAMPLE MODELS (dữ liệu mẫu ban đầu) ─────────────────────
const SAMPLE_MODELS = [
  { id:'1', name:'Modern Sofa Set', category:'Furniture', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', images:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80','https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80','https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80'], description:'Bộ sofa hiện đại phong cách Bắc Âu, chi tiết cao.', software:'3ds Max', format:'MAX, FBX, OBJ', tags:'sofa,living room,modern' },
  { id:'2', name:'Minimalist Dining Table', category:'Furniture', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&q=80', images:['https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&q=80','https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80'], description:'Bàn ăn tối giản, chân kim loại, mặt gỗ sồi.', software:'Blender', format:'BLEND, FBX', tags:'table,dining,minimalist' },
  { id:'3', name:'Bamboo Indoor Plant', category:'Plants', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80', images:['https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80','https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80'], description:'Cây tre trong nhà, chậu đen tối giản.', software:'3ds Max', format:'MAX, FBX', tags:'plant,indoor,bamboo' },
  { id:'4', name:'Modern Kitchen Set', category:'Kitchen', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', images:['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80','https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80','https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80'], description:'Bộ bếp hiện đại đầy đủ tủ bếp, đảo bếp, thiết bị.', software:'3ds Max', format:'MAX, FBX, OBJ', tags:'kitchen,cabinet,modern' },
  { id:'5', name:'Pendant Light Classic', category:'Lighting', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80', images:['https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80','https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'], description:'Đèn thả trần cổ điển, chất liệu đồng.', software:'3ds Max', format:'MAX, FBX', tags:'lamp,pendant,classic' },
  { id:'6', name:'Luxury Bathroom Set', category:'Bathroom', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80', images:['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80','https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80','https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'], description:'Bộ phòng tắm cao cấp gồm bồn tắm, lavabo, gương.', software:'3ds Max', format:'MAX, FBX', tags:'bathroom,luxury,bathtub' },
  { id:'7', name:'Office Desk Setup', category:'Office', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80', images:['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80','https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80'], description:'Setup bàn làm việc văn phòng đầy đủ.', software:'Blender', format:'BLEND, OBJ', tags:'office,desk,workspace' },
  { id:'8', name:'Modern Armchair', category:'Furniture', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', images:['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'], description:'Ghế armchair hiện đại, vải bọc đẹp.', software:'3ds Max', format:'MAX, FBX', tags:'chair,armchair,modern' },
  { id:'9', name:'Decorative Vase Set', category:'Decoration', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&q=80', images:['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80'], description:'Bộ bình trang trí ceramic nhiều hình dạng.', software:'3ds Max', format:'MAX, FBX, OBJ', tags:'vase,decoration,ceramic' },
  { id:'10', name:'Luxury Bed Frame', category:'Bedroom', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80', images:['https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80','https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'], description:'Giường ngủ cao cấp kèm tủ đầu giường.', software:'3ds Max', format:'MAX, FBX', tags:'bed,bedroom,luxury' },
  { id:'11', name:'Floor Lamp Nordic', category:'Lighting', type:'FREE', price:'', thumbnail:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80', images:['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'], description:'Đèn sàn phong cách Bắc Âu.', software:'Blender', format:'BLEND, FBX', tags:'lamp,floor,nordic' },
  { id:'12', name:'Marble Coffee Table', category:'Furniture', type:'PRO', price:'', thumbnail:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80', images:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'], description:'Bàn cà phê mặt đá cẩm thạch, chân vàng.', software:'3ds Max', format:'MAX, FBX', tags:'table,marble,luxury' },
];

const SAMPLE_CATEGORIES = [
  { id:'c1', name:'Furniture',     icon:'🪑' },
  { id:'c2', name:'Architecture',  icon:'🏛️' },
  { id:'c3', name:'Bathroom',      icon:'🚿' },
  { id:'c4', name:'Bedroom',       icon:'🛏️' },
  { id:'c5', name:'Decoration',    icon:'🎨' },
  { id:'c6', name:'Kitchen',       icon:'🍳' },
  { id:'c7', name:'Lighting',      icon:'💡' },
  { id:'c8', name:'Living Room',   icon:'🛋️' },
  { id:'c9', name:'Office',        icon:'🖥️' },
  { id:'c10', name:'Plants',       icon:'🌱' },
  { id:'c11', name:'Technology',   icon:'⚡' },
  { id:'c12', name:'Transport',    icon:'🚗' },
  { id:'c13', name:'Other',        icon:'📦' },
];

// ── HELPERS ──────────────────────────────────────────────────
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ── AUTH ─────────────────────────────────────────────────────
function doLogin() {
  const pw = document.getElementById('loginPassword').value;
  const stored = localStorage.getItem(KEYS.password) || DEFAULT_PASSWORD;
  if (pw === stored) {
    save(KEYS.session, true);
    showAdmin();
  } else {
    document.getElementById('loginHint').textContent = '❌ Sai mật khẩu. Thử lại!';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginPassword').focus();
  }
}

function doLogout() {
  save(KEYS.session, false);
  location.reload();
}

function checkSession() {
  if (load(KEYS.session, false)) {
    showAdmin();
  }
}

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminWrap').style.display = 'flex';
  initAdmin();
}

// ── INIT ──────────────────────────────────────────────────────
function initAdmin() {
  // Seed dữ liệu mẫu nếu chưa có
  if (!localStorage.getItem(KEYS.models)) save(KEYS.models, SAMPLE_MODELS);
  if (!localStorage.getItem(KEYS.categories)) save(KEYS.categories, SAMPLE_CATEGORIES);

  loadSettings();
  updateDashboard();
  renderModelList();
  renderCategoryList();
  populateCategoryDropdowns();
  setupEmojiPicker();
}

// ── TABS ──────────────────────────────────────────────────────
function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelector(`.nav-item[data-tab="${name}"]`).classList.add('active');

  if (name === 'models') renderModelList();
  if (name === 'categories') renderCategoryList();
  if (name === 'dashboard') updateDashboard();
}

// ── DASHBOARD ─────────────────────────────────────────────────
function updateDashboard() {
  const models = load(KEYS.models, []);
  const cats = load(KEYS.categories, []);

  document.getElementById('statTotal').textContent = models.length;
  document.getElementById('statFree').textContent = models.filter(m => m.type === 'FREE').length;
  document.getElementById('statPro').textContent = models.filter(m => m.type === 'PRO').length;
  document.getElementById('statCats').textContent = cats.length;

  // Recent 5 models
  const recent = [...models].slice(-5).reverse();
  document.getElementById('recentModels').innerHTML = recent.length
    ? `<div class="recent-list">${recent.map(m => `
        <div class="recent-row">
          <div class="recent-thumb">
            ${m.thumbnail ? `<img src="${esc(m.thumbnail)}" alt="" onerror="this.style.display='none'" />` : ''}
          </div>
          <div class="recent-name">${esc(m.name)}<div class="recent-cat">${esc(m.category)} · <span class="badge badge-${m.type.toLowerCase()}">${m.type}</span></div></div>
          <button class="btn-edit" onclick="switchTab('models'); editModel('${m.id}')" title="Sửa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </div>`).join('')}</div>`
    : '<p style="color:var(--text-3);font-size:13px;padding:12px 0">Chưa có model nào</p>';
}

// ── MODELS ────────────────────────────────────────────────────
function renderModelList() {
  const models = load(KEYS.models, []);
  const q = (document.getElementById('modelSearch')?.value || '').toLowerCase();
  const filterCat = document.getElementById('modelFilterCat')?.value || '';
  const filterType = document.getElementById('modelFilterType')?.value || '';

  const filtered = models.filter(m => {
    if (q && !m.name.toLowerCase().includes(q) && !m.category.toLowerCase().includes(q)) return false;
    if (filterCat && m.category !== filterCat) return false;
    if (filterType && m.type !== filterType) return false;
    return true;
  });

  document.getElementById('modelsSubtitle').textContent = `${filtered.length} / ${models.length} models`;

  const tbody = document.getElementById('modelTableBody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="table-empty">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <p>Không tìm thấy model nào</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(m => `
    <tr>
      <td>
        <div class="table-thumb">
          ${m.thumbnail ? `<img src="${esc(m.thumbnail)}" alt="" loading="lazy" onerror="this.style.display='none'" />` : ''}
        </div>
      </td>
      <td class="table-name">
        ${esc(m.name)}
        ${m.software ? `<small>${esc(m.software)} · ${esc(m.format || '')}</small>` : ''}
      </td>
      <td>${esc(m.category)}</td>
      <td><span class="badge badge-${m.type.toLowerCase()}">${m.type}</span></td>
      <td>${esc(m.software || '—')}</td>
      <td>
        <div class="table-actions">
          <button class="btn-edit" onclick="editModel('${m.id}')" title="Sửa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-delete" onclick="deleteModel('${m.id}')" title="Xóa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ── MODEL FORM ────────────────────────────────────────────────
function openModelForm(model = null) {
  document.getElementById('drawerTitle').textContent = model ? 'Chỉnh sửa model' : 'Thêm model mới';
  document.getElementById('formId').value = model?.id || '';
  document.getElementById('formName').value = model?.name || '';
  document.getElementById('formCategory').value = model?.category || '';
  document.getElementById('formType').value = model?.type || 'PRO';
  document.getElementById('formSoftware').value = model?.software || '';
  document.getElementById('formFormat').value = model?.format || '';
  document.getElementById('formThumbnail').value = model?.thumbnail || '';
  document.getElementById('formImages').value = model?.images ? model.images.join('\n') : '';
  document.getElementById('formDesc').value = model?.description || '';
  document.getElementById('formTags').value = model?.tags || '';
  previewThumbnail();

  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('modelDrawer').classList.add('open');
  document.getElementById('formName').focus();
}

function editModel(id) {
  const model = load(KEYS.models, []).find(m => m.id === id);
  if (model) openModelForm(model);
}

function closeDrawer() {
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('modelDrawer').classList.remove('open');
}

function saveModel() {
  const name = document.getElementById('formName').value.trim();
  const category = document.getElementById('formCategory').value;
  if (!name) { showToast('Vui lòng nhập tên model!', 'error'); return; }
  if (!category) { showToast('Vui lòng chọn danh mục!', 'error'); return; }

  const rawImages = document.getElementById('formImages').value
    .split('\n').map(s => s.trim()).filter(Boolean);

  const model = {
    id:          document.getElementById('formId').value || genId(),
    name,
    category,
    type:        document.getElementById('formType').value,
    price:       '',
    thumbnail:   document.getElementById('formThumbnail').value.trim(),
    images:      rawImages,
    description: document.getElementById('formDesc').value.trim(),
    software:    document.getElementById('formSoftware').value.trim(),
    format:      document.getElementById('formFormat').value.trim(),
    tags:        document.getElementById('formTags').value.trim(),
  };

  let models = load(KEYS.models, []);
  const idx = models.findIndex(m => m.id === model.id);
  if (idx >= 0) {
    models[idx] = model;
    showToast('✅ Đã cập nhật model!', 'success');
  } else {
    models.push(model);
    showToast('✅ Đã thêm model mới!', 'success');
  }
  save(KEYS.models, models);

  closeDrawer();
  renderModelList();
  updateDashboard();
}

function deleteModel(id) {
  const models = load(KEYS.models, []);
  const model = models.find(m => m.id === id);
  if (!model) return;
  if (!confirm(`Xóa model "${model.name}"?\nThao tác này không thể hoàn tác.`)) return;

  save(KEYS.models, models.filter(m => m.id !== id));
  renderModelList();
  updateDashboard();
  showToast('🗑️ Đã xóa model!');
}

function previewThumbnail() {
  const url = document.getElementById('formThumbnail').value.trim();
  const preview = document.getElementById('thumbPreview');
  preview.innerHTML = url
    ? `<img src="${esc(url)}" alt="preview" onerror="this.src=''" />`
    : '';
}

// ── CATEGORIES ────────────────────────────────────────────────
function renderCategoryList() {
  const cats = load(KEYS.categories, []);
  const models = load(KEYS.models, []);

  const counts = {};
  models.forEach(m => { counts[m.category] = (counts[m.category] || 0) + 1; });

  document.getElementById('catsGrid').innerHTML = cats.length
    ? cats.map(c => `
      <div class="cat-card">
        <div class="cat-emoji">${c.icon || '📦'}</div>
        <div class="cat-info">
          <h4>${esc(c.name)}</h4>
          <span>${counts[c.name] || 0} models</span>
        </div>
        <div class="cat-card-actions">
          <button class="btn-edit" onclick="editCategory('${c.id}')" title="Sửa">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-delete" onclick="deleteCategory('${c.id}')" title="Xóa">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>
      </div>
    `).join('')
    : '<p style="color:var(--text-3);font-size:13px;padding:16px 0">Chưa có danh mục nào</p>';
}

function populateCategoryDropdowns() {
  const cats = load(KEYS.categories, []);
  const selects = ['formCategory', 'modelFilterCat'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const current = el.value;
    const defaultOpt = id === 'modelFilterCat' ? '<option value="">Tất cả danh mục</option>' : '<option value="">-- Chọn danh mục --</option>';
    el.innerHTML = defaultOpt + cats.map(c =>
      `<option value="${esc(c.name)}" ${c.name === current ? 'selected' : ''}>${c.icon || ''} ${esc(c.name)}</option>`
    ).join('');
  });
}

function openCategoryForm(cat = null) {
  document.getElementById('catModalTitle').textContent = cat ? 'Sửa danh mục' : 'Thêm danh mục';
  document.getElementById('catFormId').value = cat?.id || '';
  document.getElementById('catFormName').value = cat?.name || '';
  document.getElementById('catFormIcon').value = cat?.icon || '';
  document.getElementById('catModal').classList.add('open');
  document.getElementById('catFormName').focus();
}

function editCategory(id) {
  const cat = load(KEYS.categories, []).find(c => c.id === id);
  if (cat) openCategoryForm(cat);
}

function closeCatModal() {
  document.getElementById('catModal').classList.remove('open');
}

function saveCategory() {
  const name = document.getElementById('catFormName').value.trim();
  if (!name) { showToast('Vui lòng nhập tên danh mục!', 'error'); return; }

  const cat = {
    id:   document.getElementById('catFormId').value || genId(),
    name,
    icon: document.getElementById('catFormIcon').value.trim() || '📦',
  };

  let cats = load(KEYS.categories, []);
  const idx = cats.findIndex(c => c.id === cat.id);
  if (idx >= 0) {
    cats[idx] = cat;
    showToast('✅ Đã cập nhật danh mục!', 'success');
  } else {
    cats.push(cat);
    showToast('✅ Đã thêm danh mục!', 'success');
  }
  save(KEYS.categories, cats);

  closeCatModal();
  renderCategoryList();
  populateCategoryDropdowns();
  updateDashboard();
}

function deleteCategory(id) {
  const cats = load(KEYS.categories, []);
  const cat = cats.find(c => c.id === id);
  if (!cat) return;

  const inUse = load(KEYS.models, []).some(m => m.category === cat.name);
  if (inUse) {
    showToast(`❌ Danh mục "${cat.name}" đang được dùng, không thể xóa!`, 'error');
    return;
  }
  if (!confirm(`Xóa danh mục "${cat.name}"?`)) return;

  save(KEYS.categories, cats.filter(c => c.id !== id));
  renderCategoryList();
  populateCategoryDropdowns();
  updateDashboard();
  showToast('🗑️ Đã xóa danh mục!');
}

// ── EMOJI PICKER ──────────────────────────────────────────────
function setupEmojiPicker() {
  document.querySelector('.emoji-picks').addEventListener('click', (e) => {
    const text = e.target.textContent || e.target.innerText;
    const emojis = [...text].filter(c => c.trim());
    // find closest emoji to click position
    const icon = emojis.find(c => c !== ' ') || '';
    if (icon) document.getElementById('catFormIcon').value = icon;
  });
}

// ── SETTINGS ─────────────────────────────────────────────────
function loadSettings() {
  const s = load(KEYS.settings, {});
  document.getElementById('settingZalo').value = s.zalo || CONFIG.zaloPhone || '';
  document.getElementById('settingSiteName').value = s.siteName || CONFIG.siteName || '3D Models Store';
}

function saveSettings() {
  const zalo = document.getElementById('settingZalo').value.trim();
  const siteName = document.getElementById('settingSiteName').value.trim();
  save(KEYS.settings, { zalo, siteName });
  showToast('✅ Đã lưu cài đặt!', 'success');
}

function changePassword() {
  const oldPw = document.getElementById('oldPassword').value;
  const newPw = document.getElementById('newPassword').value;
  const confirmPw = document.getElementById('confirmPassword').value;
  const stored = localStorage.getItem(KEYS.password) || DEFAULT_PASSWORD;

  if (oldPw !== stored) { showToast('❌ Mật khẩu hiện tại không đúng!', 'error'); return; }
  if (newPw.length < 6) { showToast('❌ Mật khẩu mới phải có ít nhất 6 ký tự!', 'error'); return; }
  if (newPw !== confirmPw) { showToast('❌ Mật khẩu xác nhận không khớp!', 'error'); return; }

  localStorage.setItem(KEYS.password, newPw);
  document.getElementById('oldPassword').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
  showToast('✅ Đã đổi mật khẩu thành công!', 'success');
}

// ── EXPORT / IMPORT ───────────────────────────────────────────
function exportData() {
  const data = {
    models:     load(KEYS.models, []),
    categories: load(KEYS.categories, []),
    settings:   load(KEYS.settings, {}),
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `3dstore-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Đã xuất file JSON!', 'success');
}

function importData(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.models || !data.categories) {
        showToast('❌ File JSON không hợp lệ!', 'error');
        return;
      }
      if (!confirm(`Nhập dữ liệu sẽ ghi đè toàn bộ dữ liệu hiện tại.\n${data.models.length} models, ${data.categories.length} danh mục.\nTiếp tục?`)) return;

      save(KEYS.models, data.models);
      save(KEYS.categories, data.categories);
      if (data.settings) save(KEYS.settings, data.settings);

      renderModelList();
      renderCategoryList();
      populateCategoryDropdowns();
      updateDashboard();
      loadSettings();
      showToast(`✅ Đã nhập ${data.models.length} models!`, 'success');
    } catch {
      showToast('❌ Lỗi đọc file JSON!', 'error');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (!confirm('⚠️ Xóa TOÀN BỘ dữ liệu?\nThao tác không thể hoàn tác!')) return;
  if (!confirm('Xác nhận lần 2: Thật sự muốn xóa tất cả?')) return;
  localStorage.removeItem(KEYS.models);
  localStorage.removeItem(KEYS.categories);
  renderModelList();
  renderCategoryList();
  populateCategoryDropdowns();
  updateDashboard();
  showToast('🗑️ Đã xóa tất cả dữ liệu!');
}

// ── TOAST ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.classList.remove('show'); }, 2800);
}

// ── HELPERS ───────────────────────────────────────────────────
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ── START ─────────────────────────────────────────────────────
checkSession();
