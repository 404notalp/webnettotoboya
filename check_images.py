import os
import re

directories_to_check = [r'C:\Users\Alpy\Desktop\222', r'C:\Users\Alpy\Desktop\222\blog']

all_html_files = []
for d in directories_to_check:
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith('.html'):
                all_html_files.append(os.path.join(root, f))

broken_links = []

for file_path in all_html_files:
    if 'hizmetler' not in file_path.lower() and 'blog' not in file_path.lower():
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    img_srcs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', content)
    for src in img_srcs:
        if src.startswith('http') or src.startswith('data:'):
            continue
            
        file_dir = os.path.dirname(file_path)
        img_abs_path = os.path.normpath(os.path.join(file_dir, src))
        
        if not os.path.exists(img_abs_path):
            broken_links.append((file_path, src))

with open('broken_images_log.txt', 'w', encoding='utf-8') as f:
    for b in broken_links:
        f.write(f'{b[0]} -> {b[1]}\n')
