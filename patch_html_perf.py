import io, sys, os, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from pathlib import Path

ROOT = Path(__file__).parent
SKIP_DIRS = {'.git', '_backup', 'node_modules'}

FONT_PRECONNECT = '''  <!-- Google Fonts async -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Outfit:wght@700;800;900&display=swap" media="print" onload="this.media=\'all\'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Outfit:wght@700;800;900&display=swap"></noscript>'''

patched = skipped = 0

def patch_html(path: Path):
    global patched, skipped
    rel = path.relative_to(ROOT)
    text = path.read_text(encoding='utf-8', errors='replace')

    changed = False

    # 1. Skip index.html (already done manually)
    if path.name == 'index.html' and path.parent == ROOT:
        skipped += 1
        return

    # 2. Add preconnect for Google Fonts if missing
    if 'fonts.googleapis.com' not in text and '</head>' in text:
        text = text.replace('</head>', FONT_PRECONNECT + '\n</head>', 1)
        changed = True

    # 3. Change all jpg/jpeg/png image srcs to webp where webp file exists
    def replace_img_src(m):
        src = m.group(1)
        # Build absolute path for the image
        if src.startswith('http') or src.startswith('data:'):
            return m.group(0)
        # Resolve relative to html file's directory
        img_path = (path.parent / src).resolve()
        webp_path = img_path.with_suffix('.webp')
        if webp_path.exists():
            new_src = src.rsplit('.', 1)[0] + '.webp'
            return m.group(0).replace(src, new_src)
        return m.group(0)

    new_text = re.sub(r'src="([^"]+\.(jpg|jpeg|png))"', replace_img_src, text, flags=re.IGNORECASE)
    if new_text != text:
        text = new_text
        changed = True

    # 4. Add loading="lazy" to non-LCP images that don't have it
    # Only for images that do NOT have loading= already and NOT the page-hero-bg
    def add_lazy(m):
        tag = m.group(0)
        if 'loading=' in tag:
            return tag
        if 'page-hero-bg' in tag or 'fetchpriority' in tag:
            return tag
        return tag.replace('<img ', '<img loading="lazy" ')

    new_text = re.sub(r'<img [^>]+>', add_lazy, text)
    if new_text != text:
        text = new_text
        changed = True

    # 5. Fix favicon: logo.png -> favicon.png
    text2 = text.replace('href="logo.png"', 'href="favicon.png"').replace("href='logo.png'", "href='favicon.png'")
    if text2 != text:
        text = text2
        changed = True

    if changed:
        path.write_text(text, encoding='utf-8')
        patched += 1
        print(f"  PATCHED  {rel}")
    else:
        skipped += 1
        print(f"  OK       {rel}")

print(f"\nPatching HTML files in: {ROOT}\n")
for path in sorted(ROOT.rglob('*.html')):
    if any(p in SKIP_DIRS for p in path.parts):
        continue
    patch_html(path)

print(f"\n{'='*50}")
print(f"Patched : {patched}")
print(f"Skipped : {skipped}")
print(f"{'='*50}\n")
