import os
import re

directory = r'C:\Users\Alpy\Desktop\222'

replacements = {
    r'foto/Minibüs projesi araç hasar boya onarım antalya akdeniz sanayisi\.jpg': r'foto/minibs_onarm.jpg',
    r'foto/minibs_onarım\.jpg': r'foto/minibs_onarm.jpg',
    r'foto/minibs_onar&#305;m\.jpg': r'foto/minibs_onarm.jpg',
    r'foto/araç hasar boya onarım antalya akdeniz sanayisi\.jpg': r'foto/ara_hasar_onarm.jpg',
    r'foto/1957 chevrolet belair/15\.jpeg': r'foto/1957 chevrolet belair/11.jpeg'
}

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                
            original_content = content
            for old, new in replacements.items():
                content = re.sub(old, new, content)
                
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Updated {filepath}")
