import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

replacements = {
    r'foto/beforeafter2/before \(1\)\.jpg': r'foto/beforeafter/before (1).jpeg',
    r'foto/beforeafter2/before \(2\)\.jpg': r'foto/beforeafter/before (2).jpeg',
    r'foto/beforeafter2/before \(3\)\.jpg': r'foto/beforeafter/before (3).jpeg',
    r'foto/beforeafter2/before \(4\)\.jpg': r'foto/mus/before (4).jpg',
    r'foto/beforeafter2/after\.jpg': r'foto/beforeafter/after (1).jpeg',
    
    r'nettotoboya-hasar-onarım\.jpg': r'nettotoboya-hasar-onarm.jpg',
    r'nettotoboya-hasar-onar&#305;m\.jpg': r'nettotoboya-hasar-onarm.jpg',
    r'nettotoboya-hasar-onarm\.jpg': r'nettotoboya-hasar-onarm.jpg',
    
    r'ara_hasar_onarım\.jpg': r'ara_hasar_onarm.jpg',
    r'ara_hasar_onar&#305;m\.jpg': r'ara_hasar_onarm.jpg',
    r'ara_hasar_onarm\.jpg': r'ara_hasar_onarm.jpg',
}

for filepath in ROOT.rglob('*.html'):
    content = filepath.read_text(encoding='utf-8', errors='ignore')
    original_content = content

    for old, new in replacements.items():
        content = re.sub(old, new, content)

    if content != original_content:
        filepath.write_text(content, encoding='utf-8')
        print(f"Updated {filepath.relative_to(ROOT)}")
