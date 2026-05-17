import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

for filepath in ROOT.rglob('*.html'):
    content = filepath.read_text(encoding='utf-8', errors='ignore')
    original_content = content

    # Remove any existing icon links
    content = re.sub(r'<link\s+rel="icon"[^>]*>\s*', '', content, flags=re.IGNORECASE)
    content = re.sub(r'<link\s+rel="shortcut icon"[^>]*>\s*', '', content, flags=re.IGNORECASE)
    content = re.sub(r'<link\s+href="[^"]*logo\.png"[^>]*rel="icon"[^>]*>\s*', '', content, flags=re.IGNORECASE)

    rel_path = filepath.relative_to(ROOT)
    icon_path = '../' * (len(rel_path.parts) - 1) + 'favicon.png'
    icon_tag = f'\n  <link rel="icon" type="image/png" href="{icon_path}">\n'

    content = re.sub(r'(</head>)', icon_tag + r'\1', content, flags=re.IGNORECASE)

    if content != original_content:
        filepath.write_text(content, encoding='utf-8')
        print(f"Updated favicon for {rel_path}")

