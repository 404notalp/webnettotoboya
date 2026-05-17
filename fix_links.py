import os
import re

directory = r'C:\Users\Alpy\Desktop\222'

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                
            original_content = content
            content = re.sub(r'antalya-cÇÇizik-onarım\.html', r'antalya-cizik-onarim.html', content)
                
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Updated link in {filepath}")
