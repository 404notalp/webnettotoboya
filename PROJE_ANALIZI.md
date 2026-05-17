# NeTT Oto Boya & Kaporta — Proje Analizi

## Site Bilgisi
- **Alan adı:** nettotoboya.com
- **İşletme:** NeTT Oto Boya & Kaporta
- **Konum:** Şafak Mah. 5040 Sk. Sanayi 28/A Blok No 16, Kepez/Antalya
- **Telefon/WhatsApp:** +90 538 840 42 64
- **Platform:** Statik HTML + CSS + JS, Cloudflare Pages + Workers
- **Tema:** Premium koyu tema (siyah zemin, sarı/altın aksan)

## Dosya Yapısı
```
webnettotoboya-master/
├── index.html + 8 ana sayfa        # Ana sayfalar
├── components.js                   # Ana JS (header, footer, schema, GTM, OG)
├── styles.css                      # Ana CSS
├── blog/ (46 sayfa)                # Blog index + 45 yazı
├── hizmetler/ (14 sayfa)           # Hizmet alt sayfaları
├── foto/                           # WebP görseller (yeni/, mus/, bmw/, beforeafter/, logo/)
├── 20+ bolge sayfasi              # Lara, Muratpaşa, Konyaaltı vb.
├── gizlilik-politikasi.html        # KVKK/Gizlilik sayfası
├── 404.html                        # Hata sayfası
├── sitemap.xml (95 URL)            # XML site haritası
├── robots.txt                      # Robots yapılandırması
├── llms.txt / llms-full.txt        # AI kaynak dosyaları
├── ai-answers.md                   # AI QA dosyası
├── prompt_revision.txt             # Revizyon planı
├── markdown-agent.js + wrangler.toml  # Cloudflare Worker
├── _headers / .htaccess             # Sunucu yapılandırması
└── PROJE_ANALIZI.md                # Bu dosya
```

## Teknolojiler
- **HTML5:** Semantic markup, Schema.org JSON-LD
- **CSS3:** Custom properties, flexbox, grid, clamp() responsive
- **JavaScript:** Vanilla JS (components.js), IntersectionObserver, WebMCP tools
- **Cloudflare:** Pages (hosting), Workers (markdown-agent)
- **Fontlar:** Plus Jakarta Sans + Outfit (Google Fonts async)
- **Görseller:** WebP, lazy loading

## Sayfa Analizi (17 Mayıs 2026)

| Kategori | Adet |
|----------|:----:|
| Ana sayfalar (index, hizmetler, galeri, hakkimizda, iletisim, bolgeler, 404, gizlilik) | 8 |
| Blog (index + 45 yazı) | 46 |
| Hizmet alt sayfaları | 14 |
| Bölge sayfaları (Lara, Muratpaşa, Konyaaltı, Kepez, Aksu, Döşemealtı) | 6 |
| Servis sayfaları (antaly* prefix) | 10 |
| Özel sayfalar (akdeniz-sanayi*) | 4 |
| **Toplam** | **88** |

## SEO Durumu

### Kapak Tablosu
| Özellik | Ana Sayfalar | Blog | Alt Servisler | Bölge |
|---------|:---:|:---:|:---:|:---:|
| Title | ✅ | ✅ | ✅ | ✅ |
| Meta Description | ✅ | ✅ | ✅ | ✅ |
| Meta Keywords | ✅ | ✅ | ✅ | ✅ |
| Canonical | ✅ | ✅ | ✅ | ✅ |
| Robots (index,follow) | ✅ | ✅ | ✅ | ✅ |
| Open Graph (JS) | ✅ | ✅ | ✅ | ✅ |
| Schema JSON-LD | ✅ | ✅ (Article) | ✅ (AutoBodyShop) | ✅ |
| Viewport | ✅ | ✅ | ✅ | ✅ |

### GTM Kapsamı
- **Inline GTM:** 7 sayfa (index, hizmetler, galeri, hakkimizda, iletisim, bolgeler, blog/index)
- **JS injector (initPage):** Diğer tüm sayfalar
- **GTM ID:** `GTM-NGQBN2VB` (gerçek)
- **GA4 gtag.js:** Hazır (`CONFIG.gaMeasurementId` doldurulmayı bekliyor)
- **Kapsam:** %100 (88/88 sayfa)

### Schema Dağılımı
| Tür | Sayfa Sayısı | Detay |
|-----|:---:|-------|
| AutoBodyShop (inline) | 7 | Ana sayfalarda gömülü JSON-LD |
| AutoBodyShop (initPage) | 36 | Servis/bölge sayfalarında JS ile |
| Article (initPage) | 45 | Blog yazılarında JS ile |
| **Toplam şemalı** | **88** | %100 kapsama |

### AI & Yapısal Veri
- llms.txt, llms-full.txt, ai-answers.md mevcut
- WebMCP tools (get_auto_paint_quote)
- .well-known/ AI yapılandırması
- Breadcrumb navigation (86/88 sayfa)
- Sitemap.xml (95 URL)
- Robots.txt, _headers

## Güncel Revizyonlar (17 Mayıs 2026)

### Yapılan İyileştirmeler
- **GTM ID:** `GTM-XXXXXXX` → `GTM-NGQBN2VB` (8 dosya)
- **GA4 gtag.js:** Fallback eklendi, `CONFIG.gaMeasurementId` ile aktif
- **Blog meta keywords:** 45 yazıya eklendi (title bazlı)
- **Blog canonical+robots:** 40 yazıya eklendi
- **Blog schema:** skipSchema kaldırıldı, Article schema (initPage ile)
- **OG tags:** JS injection ile 88 sayfada aktif
- **Footer:** Gizlilik linki düzeltildi (gizlilik-politikasi.html)
- **index.html:** skipSchema:true ile çift schema önlendi
- **404.html:** canonical eklendi
- **akdeniz-sanayi-kaporta-onarim:** canonical, robots, activePage düzeltildi
- **Yeni sayfalar:** 5 sayfa eklendi (firinli-oto-boya, gunes-yanigi-onarimi, kaporta-onarimi-lokal-hasar, komple-arac-toplama-restorasyon, gizlilik-politikasi)
- **Galeri:** Lightbox, 4 yeni before/after kartı
- **Servis ikonları:** 5 yeni SVG ikon

### Açık Konular (Yapılması Gerekenler)
- [ ] **Yüksek:** GA4 Measurement ID (`G-XXXXXXXX`) alınıp `CONFIG.gaMeasurementId` değişkenine girilmeli
- [ ] **Yüksek:** GTM arayüzünde GA4 tag'i oluşturulup yayınlanmalı
- [ ] **Orta:** Google Business Profile optimizasyonu
- [ ] **Düşük:** Görsel optimizasyon (responsive srcset)
- [ ] **Düşük:** Blog içeriklerinde 7 içerik kümesine ait uzun kuyruklu anahtar kelimelerin kullanımının artırılması
- [ ] **Düşük:** Yeni blog yazıları
- [ ] **Düşük:** Core Web Vitals takibi

## İçerik Kümeleri (PDF Anahtar Kelime Analizi)

| Küme | Anahtar Kelime | Arama Niyeti |
|------|---------------|--------------|
| Lokal Boya & Onarım | lokal boya fiyatları, mikron değeri, renk eşleştirme | Bilgi + Randevu |
| Boyasız Göçük Düzeltme | boyasız göçük düzeltme, derin çizik giderme | Çözüm + Fiyat |
| Güneş Yanığı Tamiri | tavan güneş yanığı tamiri, vernik yenileme | Onarım + Fiyat |
| Kaporta Onarım & Şase | kaporta onarımı fiyatları, şase kontrolü | Hizmet + Güven |
| Fırınlı Boya & Premium | fırınlı boya kalitesi, PPG/Standox boya | Premium + Garanti |
| Araç Toplama & Restorasyon | araç toplama Antalya, klasik araç restorasyonu | Hizmet + Danışma |
| Fiyat & Ekspertiz | oto boya fiyatları 2026, ekspertiz raporu | Fiyat + Randevu |

## İletişim
- **Telefon:** +90 538 840 42 64
- **WhatsApp:** https://wa.me/905388404264
- **Adres:** Şafak Mahallesi, 5040. Sokak Sanayi 28/A Blok No 16, 07220 Kepez/Antalya
- **Harita:** Google Maps, Instagram, WhatsApp, Armut butonları header+footer'da
- **Çalışma:** Pzt–Cmt 08:30–19:00