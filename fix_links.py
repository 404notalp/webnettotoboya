import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

for filepath in ROOT.rglob('*.html'):
    content = filepath.read_text(encoding='utf-8', errors='ignore')
    original_content = content
    content = re.sub(r'antalya-cÇÇizik-onarım\.html', r'antalya-cizik-onarim.html', content)

    if content != original_content:
        filepath.write_text(content, encoding='utf-8')
        print(f"Updated link in {filepath.relative_to(ROOT)}")
