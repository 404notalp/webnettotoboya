import os
import re

base_dir = r'C:\Users\Alpy\Desktop\222'

broken_links = []

for root, _, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.html'):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
            
            img_srcs = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', content)
            for src in img_srcs:
                if src.startswith('http') or src.startswith('data:'):
                    continue
                    
                file_dir = os.path.dirname(file_path)
                img_abs_path = os.path.normpath(os.path.join(file_dir, src))
                
                if not os.path.exists(img_abs_path):
                    broken_links.append((file_path, src))

with open('all_broken_images_log.txt', 'w', encoding='utf-8') as f:
    for b in broken_links:
        f.write(f'{b[0]} -> {b[1]}\n')
