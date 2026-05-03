import os
import re

blog_dir = r"C:\Users\Alpy\Desktop\222\blog"

files_and_images = {
    "antalya-iklimine-uygun-boya-koruma.html": "blog_ceramic.png",
    "antalya-gunes-yanigi-tamiri-rehberi.html": "nett_otomobil.jpg",
    "antalya-oto-boyaci-secerken.html": "netotoboya-akdenizsanayisi-dkkan.jpg",
    "arac-toplama-nedir.html": "ara_hasar_onarm.jpg",
    "klasik-araba-restorasyonu-nasil-yapilir.html": "nettotoboya-hasar-onarm.jpg",
    "komple-arac-boyama-antalya.html": "netotoboya-bmw-boyama.jpg",
    "lokal-boya-mi-komple-boya-mi.html": "minibs_onarm.jpg",
    "macun-astar-boya-oncesi-neden-onemli.html": "c.jpg"
}

sidebar_html = """
        <aside>
          <div class="sidebar-nav-sticky">
            <div class="sidebar-section">
              <h4>İlgili Makaleler</h4>
              <ul class="footer-links">
                <li><a href="antalya-oto-boya-rehberi.html">Antalya Boya Rehberi</a></li>
                <li><a href="firinli-boya-nedir.html">Fırınlı Boya Nedir?</a></li>
                <li><a href="antalya-oto-boya-fiyatlari-2026.html">Fiyat Analizi 2026</a></li>
              </ul>
            </div>
            <div class="sidebar-section">
              <h4>İletişime Geçin</h4>
              <p style="font-size:0.8rem; margin-bottom:15px">Hızlı teklif ve randevu için bize yazın.</p>
              <a href="https://wa.me/905388404264" class="btn btn-primary" style="width:100%; font-size:0.8rem">WhatsApp Yaz</a>
            </div>
          </div>
        </aside>
"""

for filename, img in files_and_images.items():
    filepath = os.path.join(blog_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract meta title, description
    title_match = re.search(r'<title>(.*?)</title>', content)
    desc_match = re.search(r'<meta name="description" content="(.*?)">', content)
    
    title = title_match.group(1) if title_match else ""
    desc = desc_match.group(1) if desc_match else ""
    
    # Extract h1, subp, and main content
    h1_match = re.search(r'<h1.*?>(.*?)</h1>', content)
    h1 = h1_match.group(1) if h1_match else ""

    subp_match = re.search(r'<h1.*?>.*?</h1>\s*<p>(.*?)</p>', content, re.DOTALL)
    subp = subp_match.group(1) if subp_match else ""
    
    # Extract intro-text
    intro_text_match = re.search(r'<div class="intro-text[^>]*>(.*?)</div>\s*(</article>|<div style="margin-top)', content, re.DOTALL)
    intro_text = intro_text_match.group(1) if intro_text_match else ""
    
    # Clean up intro text to remove margins from h2s
    intro_text = re.sub(r'style="margin:\s*32px\s*0\s*16px;\s*color:\s*var\(--text-primary\);"', '', intro_text)

    # Insert an image within the intro text (e.g. after the first paragraph)
    # Split by <h2
    parts = re.split(r'(<h2)', intro_text, maxsplit=1)
    if len(parts) > 1:
        img_insert = f'\n          <div class="image-card" style="margin:30px 0; border-radius:var(--radius-lg); overflow:hidden"><img src="../foto/{img}" alt="{h1}" style="width:100%; height:auto"></div>\n          '
        new_intro = parts[0] + img_insert + parts[1] + parts[2]
    else:
        new_intro = intro_text + f'\n          <div class="image-card" style="margin:30px 0; border-radius:var(--radius-lg); overflow:hidden"><img src="../foto/{img}" alt="{h1}" style="width:100%; height:auto"></div>\n          '

    new_html = f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <link rel="stylesheet" href="../styles.css">
  <link rel="icon" type="image/png" href="../logo.png">
</head>
<body>
  <section class="page-hero" style="min-height:300px; height:40vh">
    <img src="../foto/{img}" class="page-hero-bg" alt="{h1}">
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <h1 class="fade-in" style="font-size:clamp(1.5rem, 4vw, 3rem)">{h1}</h1>
      </div>
    </div>
  </section>
  <nav class="breadcrumb">
    <div class="container">
      <ol class="breadcrumb-list">
        <li><a href="../index.html">Anasayfa</a></li>
        <li><a href="index.html">Blog</a></li>
        <li>Makale</li>
      </ol>
    </div>
  </nav>
  <main class="section-padding">
    <div class="container">
      <div class="layout-with-sidebar">
        <article class="blog-article fade-in">
          <h2>{h1}</h2>
          <p>{subp}</p>
          {new_intro}
        </article>
{sidebar_html}
      </div>
    </div>
  </main>
  <script src="../components.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {{
      initPage({{activePage: 'blog/index.html', skipSchema: true}});
    }});
  </script>
</body>
</html>
"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_html)

print("Updated all 8 files successfully!")
