import os
import re

directory = r'C:\Users\Alpy\Desktop\222'

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
