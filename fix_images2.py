import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

replacements = {
    r'foto/Minibüs projesi araç hasar boya onarım antalya akdeniz sanayisi\.jpg': r'foto/minibs_onarm.jpg',
    r'foto/minibs_onarım\.jpg': r'foto/minibs_onarm.jpg',
    r'foto/minibs_onar&#305;m\.jpg': r'foto/minibs_onarm.jpg',
    r'foto/araç hasar boya onarım antalya akdeniz sanayisi\.jpg': r'foto/ara_hasar_onarm.jpg',
    r'foto/1957 chevrolet belair/15\.jpeg': r'foto/1957 chevrolet belair/11.jpeg'
}

for filepath in ROOT.rglob('*.html'):
    content = filepath.read_text(encoding='utf-8', errors='ignore')
    original_content = content

    for old, new in replacements.items():
        content = re.sub(old, new, content)

    if content != original_content:
        filepath.write_text(content, encoding='utf-8')
        print(f"Updated {filepath.relative_to(ROOT)}")
