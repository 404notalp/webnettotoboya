/* ============================================
   NETTOTOBOYA.COM — NeTT Master Components v2.1
   ============================================ */
const CONFIG = {
  phone: '+90 538 840 42 64',
  phoneTel: 'tel:+905388404264',
  whatsapp: 'https://wa.me/905388404264',
  whatsappText: '?text=Merhaba%2C%20arac%C4%B1m%20i%C3%A7in%20fiyat%20bilgisi%20almak%20istiyorum.',
  address: 'Şafak, 5040.Sokak Sanayi 28/A Blok No 16, 07220 Kepez/Antalya',
  mapsUrl: 'https://share.google/4NpUNOn43V3WKK2TE',
  hours: '08:30 – 19:00',
  businessName: 'NeTT',
  logoPath: 'logo.webp',
  year: new Date().getFullYear()
};
const ICONS = {
  google: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.11c-.22-.67-.35-1.38-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335"/></svg>`,
  whatsapp: `<svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.4-.3-8.3 2.4-11.1 2.4-2.5 5.5-6.4 8.3-9.6 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`,
  phone: `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.75-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>`,
  chevron: `<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  map: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  spray: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path><path d="M14 10V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"></path><path d="M6 10h2"></path><path d="M8 6h4"></path><path d="M12 2v4"></path><circle cx="16" cy="16" r="1"></circle></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`
};
function renderHeader(activePage) {
  const basePath = window.location.pathname.includes('/blog/') || window.location.pathname.includes('/hizmetler/') ? '../' : '';

  const nav = [
    { label: 'Anasayfa', href: 'index.html' },
    {
      label: 'Hizmetlerimiz',
      href: 'hizmetler.html',
      dropdown: [
        { label: 'Oto Boya', href: 'antalya-oto-boya.html' },
        { label: 'Kaporta Onarım', href: 'antalya-kaporta-onarim.html' },
        { label: 'Tampon & Parça Boyama', href: 'antalya-tampon-parca-boyama.html' },
        { label: 'Lokal Boya', href: 'antalya-lokal-boya.html' },
        { label: 'Çizik Onarım', href: 'antalya-cizik-onarim.html' },
        { label: 'Macun & Astar', href: 'antalya-macun-astar-islemleri.html' },
        { label: 'Restorasyon', href: 'antalya-klasik-araba-restorasyon.html' },
        { label: 'Araç Toplama', href: 'antalya-arac-toplama.html' },
        { label: 'Güneş Yanığı', href: 'antalya-gunes-yanigi-tamiri.html' },
        { label: 'Uygun Araç Boyama', href: 'hizmetler/antalya-uygun-arac-boyama.html' },
        { label: 'Hasarlı Kaporta', href: 'hizmetler/antalya-hasarli-arac-kaporta-onarimi.html' }
      ]
    },
    { label: 'Bölgeler', href: 'bolgeler.html' },
    { label: 'Galeri', href: 'galeri.html' },
    { label: 'Hakkımızda', href: 'hakkimizda.html' },
    { label: 'Blog', href: 'blog/index.html' },
    { label: 'İletişim', href: 'iletisim.html' }
  ];

  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'main-header';
  header.innerHTML = `
    <div class="container" style="height:100%">
      <div class="header-inner">
        <a href="${basePath}index.html" class="header-logo"><img src="${basePath}${CONFIG.logoPath}" alt="NeTT Oto Boya Antalya" width="130" height="65" fetchpriority="high" decoding="sync"></a>
        <nav class="nav-menu" id="nav-menu" role="navigation" aria-label="Ana Menü">
          ${nav.map((n, i) => {
    if (n.dropdown) {
      return `<div class="nav-item-dropdown" id="dropdown-${i}">
                <a href="${basePath}${n.href}" class="dropdown-toggle ${activePage === n.href ? 'active' : ''}" aria-haspopup="true">${n.label} <span class="chevron">${ICONS.chevron}</span></a>
                <div class="dropdown-menu" role="menu">${n.dropdown.map(d => `<a href="${basePath}${d.href}" role="menuitem">${d.label}</a>`).join('')}</div>
              </div>`;
    }
    return `<a href="${basePath}${n.href}" class="${activePage === n.href ? 'active' : ''}">${n.label}</a>`;
  }).join('')}
        </nav>
        <button class="hamburger" id="hamburger" aria-label="Menüyü Aç" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>`;
  document.body.prepend(header);
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('nav-menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.querySelectorAll('.nav-item-dropdown').forEach(item => {
    const toggle = item.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        if (!item.classList.contains('open')) {
          e.preventDefault();
          // Close other dropdowns
          document.querySelectorAll('.nav-item-dropdown.open').forEach(other => {
            if (other !== item) other.classList.remove('open');
          });
          item.classList.add('open');
        }
      }
    });
  });
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    header.style.background = scrolled ? 'rgba(0,0,0,0.97)' : 'var(--bg-glass)';
    header.style.height = scrolled ? '70px' : 'var(--header-h)';
  }, { passive: true });
}
function renderFooter() {
  const basePath = window.location.pathname.includes('/blog/') || window.location.pathname.includes('/hizmetler/') ? '../' : '';

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-main">
        <div class="footer-col">
          <a href="${basePath}index.html" style="display:inline-block; margin-bottom:20px">
            <img src="${basePath}${CONFIG.logoPath}" alt="NeTT" style="height:55px; object-fit:contain">
          </a>
          <p style="color:var(--text-secondary); max-width:280px; font-size:0.9rem; line-height:1.8">Antalya'nın zirve otomobil atölyesi. Kusursuz işçilik, Fırınlı boya ve kaporta sanatı.</p>
          <div style="margin-top:20px; display:flex; gap:8px">
            <a href="${CONFIG.mapsUrl}" target="_blank" rel="noopener" style="display:flex; align-items:center; gap:6px; font-size:0.8rem; color:var(--text-muted); border:1px solid var(--border); padding:8px 14px; border-radius:20px">${ICONS.map} Konum</a>
            <a href="${CONFIG.whatsapp}" target="_blank" rel="noopener" style="display:flex; align-items:center; gap:6px; font-size:0.8rem; color:#128C7E; border:1px solid rgba(37,211,102,0.3); padding:8px 14px; border-radius:20px">WhatsApp</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Kurumsal</h3>
          <ul class="footer-links">
            <li><a href="${basePath}hakkimizda.html">Hakkımızda</a></li>
            <li><a href="${basePath}iletisim.html">İletişim & Konum</a></li>
            <li><a href="${basePath}galeri.html">Proje Galerisi</a></li>
            <li><a href="${basePath}hizmetler.html">Tüm Hizmetler</a></li>
            <li><a href="${basePath}bolgeler.html">Hizmet Bölgeleri</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Hizmetler</h3>
          <ul class="footer-links">
            <li><a href="${basePath}antalya-oto-boya.html">Oto Boya</a></li>
            <li><a href="${basePath}antalya-kaporta-onarim.html">Kaporta Onarım</a></li>
            <li><a href="${basePath}antalya-lokal-boya.html">Lokal Boya</a></li>
            <li><a href="${basePath}antalya-tampon-parca-boyama.html">Tampon Boyama</a></li>
            <li><a href="${basePath}antalya-gunes-yanigi-tamiri.html">Güneş Yanığı Tamiri</a></li>
            <li><a href="${basePath}antalya-klasik-araba-restorasyon.html">Restorasyon</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>İletişim</h3>
          <ul class="footer-links">
            <li>Adres: ${CONFIG.address}</li>
            <li>Telefon: <a href="${CONFIG.phoneTel}" style="color:var(--accent-yellow); font-weight:700">${CONFIG.phone}</a></li>
            <li>Saatler: ${CONFIG.hours} (Pzt–Cmt)</li>
            <li><a href="${CONFIG.whatsapp}" target="_blank" style="color:#128C7E">WhatsApp'tan Teklif Al</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bar">
        <p>© ${CONFIG.year} NeTT Antalya Oto Boya — Tüm Hakları Saklıdır.</p>
        <div style="display:flex; gap:20px">
          <a href="#" style="font-size:0.75rem; color:var(--text-muted)">KVKK</a>
          <a href="#" style="font-size:0.75rem; color:var(--text-muted)">Gizlilik</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(footer);
}
function renderTestimonials() {
  const reviews = [
    { name: "Ahmet Y.", location: "Lara", text: "BMW aracımın tamponundaki çiziği lokal boya ile 1 saatte hallettiler. Ton farkı kesinlikle yok. Akdeniz Sanayi'nin en iyisi.", stars: 5 },
    { name: "Selin K.", location: "Konyaaltı", text: "Güneş yanığı için gelmiştim, komple boyatmak yerine lokal çözümlerle orijinalliği korudular. Çok dürüst ve kaliteli bir ekip.", stars: 5 },
    { name: "Mehmet O.", location: "Muratpaşa", text: "Restorasyon projem için aylarca yer aradım, sonunda NeTT ile anlaştım. Sonucu inanılmaz. Her kuruşu helal olsun.", stars: 5 }
  ];

  const section = document.createElement('section');
  section.className = 'section-padding';
  section.style.background = 'var(--bg-secondary)';
  section.innerHTML = `
    <div class="container">
      <div class="section-title">
        <h2>MÜŞTERİ <span class="text-yellow">YORUMLARI</span></h2>
        <p style="color:var(--text-muted); margin-bottom:20px">Google üzerinden gerçek kullanıcı deneyimleri</p>
        <div class="section-divider"></div>
      </div>
      <div class="testimonial-grid">
        ${reviews.map(r => `
          <div class="testimonial-card fade-in" itemscope itemtype="https://schema.org/Review">
            <div class="stars">${'★'.repeat(r.stars)}</div>
            <p itemprop="reviewBody">"${r.text}"</p>
            <h3 itemprop="author">${r.name}</h3>
            <span>${r.location} · Doğrulanmış Müşteri</span>
          </div>
        `).join('')}
      </div>
    </div>`;

  const footer = document.querySelector('.site-footer');
  if (footer) document.body.insertBefore(section, footer);
}
function renderStickyCTA() {
  const actions = document.createElement('div');
  actions.className = 'floating-actions';
  actions.setAttribute('aria-label', 'Hızlı İletişim');
  actions.innerHTML = `
    <a href="${CONFIG.mapsUrl}" class="floating-btn" data-label="Konumumuz" target="_blank" rel="noopener" aria-label="Google Haritada Görüntüle">${ICONS.map}</a>
    <a href="${CONFIG.whatsapp}${CONFIG.whatsappText}" class="floating-btn wa" data-label="WhatsApp" target="_blank" rel="noopener" aria-label="WhatsApp ile Yaz">${ICONS.whatsapp}</a>
    <a href="${CONFIG.phoneTel}" class="floating-btn phone" data-label="Hemen Ara" aria-label="Bizi Arayın">${ICONS.phone}</a>
  `;
  document.body.appendChild(actions);
  const mobileBar = document.createElement('div');
  mobileBar.className = 'mobile-call-bar';
  mobileBar.innerHTML = `
    <a href="${CONFIG.phoneTel}" class="btn btn-primary" style="flex:1">${ICONS.phone} Hemen Ara</a>
    <a href="${CONFIG.whatsapp}${CONFIG.whatsappText}" class="btn btn-secondary" style="flex:1; background:#128C7E; border-color:#128C7E; color:#fff">${ICONS.whatsapp} WhatsApp</a>
  `;
  document.body.appendChild(mobileBar);
}
function renderSchema(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
function initPage(opts = {}) {
  renderHeader(opts.activePage || 'index.html');
  renderTestimonials();
  renderFooter();
  renderStickyCTA();
  // Default Local Business Schema
  if (!opts.skipSchema) {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "AutoBodyShop",
      "name": "NeTT Oto Boya & Kaporta",
      "image": "https://nettotoboya.com/foto/netotoboya-akdenizsanayisi-dkkan.webp",
      "description": "Antalya Akdeniz Sanayi'nde profesyonel fırınlı oto boya, kaporta onarım, araç toplama ve araç restorasyon hizmeti.",
      "url": "https://nettotoboya.com",
      "telephone": "+905388404264",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Şafak, 5040.Sokak Sanayi 28/A Blok No 16",
        "addressLocality": "Kepez",
        "addressRegion": "Antalya",
        "addressCountry": "TR"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 36.9262793, "longitude": 30.6443892 },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30", "closes": "19:00"
      }],
      "priceRange": "₺₺",
      "areaServed": ["Antalya", "Lara", "Muratpaşa", "Konyaaltı", "Kepez", "Döşemealtı", "Aksu"],
      "knowsAbout": ["Antalya oto boya", "Antalya oto boyacı", "Antalya araç toplama", "Kaporta onarım", "Fırınlı oto boya"],
      "sameAs": ["https://share.google/0gzxBtbt3USh0QMjM"]
    };
    if (opts.schema) {
      renderSchema(Object.assign({}, baseSchema, opts.schema));
    } else {
      renderSchema(baseSchema);
    }
  }

  // Intersection observer for fade-in
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // WebMCP Tool: AI ajanları için fiyat teklifi aracı
  if ('modelContext' in navigator && navigator.modelContext.provideContext) {
    navigator.modelContext.provideContext({
      tools: [{
        name: 'get_auto_paint_quote',
        description: 'NeTT Oto Boya fiyat teklifi al - araç modeli, boyanacak parça ve hasar durumuna göre WhatsApp üzerinden bilgi verir',
        inputSchema: {
          type: 'object',
          properties: {
            arac_modeli: { type: 'string', description: 'Aracın markası ve modeli (örn: BMW 3.20i, Mercedes C200)' },
            boyanacak_parca: { type: 'string', description: 'Boyanacak parça/ler (örn: kapı, tampon, çamurluk, komple)' },
            hasar_durumu: { type: 'string', description: 'Hasar durumu (örn: çizik, ezik, kaza hasarı, güneş yanığı)' }
          },
          required: ['arac_modeli', 'boyanacak_parca']
        },
        execute: async (args) => {
          const message = `Merhaba, fiyat teklifi almak istiyorum.\n\n🚗 Araç: ${args.arac_modeli}\n🔧 Parça: ${args.boyanacak_parca}\n⚠️ Hasar: ${args.hasar_durumu || 'Belirtilmedi'}\n\nLütfen tahmini fiyat ve süre hakkında bilgi verir misiniz?`;
          const whatsappUrl = `https://wa.me/905388404264?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
          return { success: true, url: whatsappUrl, message: 'WhatsApp açılıyor...' };
        }
      }]
    });
  }
}
