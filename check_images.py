from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
TARGET_DIRS = {'blog', 'hizmetler'}

broken_links = []

for file_path in ROOT.rglob('*.html'):
    rel_parts = file_path.relative_to(ROOT).parts
    if not rel_parts or rel_parts[0] not in TARGET_DIRS:
        continue

    content = file_path.read_text(encoding='utf-8', errors='ignore')
    img_srcs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', content)

    for src in img_srcs:
        if src.startswith(('http', 'data:', '//')):
            continue

        img_abs_path = (file_path.parent / src.split('#')[0].split('?')[0]).resolve()
        if not img_abs_path.exists():
            broken_links.append((file_path.relative_to(ROOT), src))

(ROOT / 'broken_images_log.txt').write_text(
    ''.join(f'{path} -> {src}\n' for path, src in broken_links),
    encoding='utf-8'
)

print(f'Checked blog/hizmetler images under {ROOT}')
print(f'Broken images: {len(broken_links)}')
