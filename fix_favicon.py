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
            
            # Remove any existing icon links
            content = re.sub(r'<link\s+rel="icon"[^>]*>\s*', '', content, flags=re.IGNORECASE)
            content = re.sub(r'<link\s+rel="shortcut icon"[^>]*>\s*', '', content, flags=re.IGNORECASE)
            content = re.sub(r'<link\s+href="[^"]*logo\.png"[^>]*rel="icon"[^>]*>\s*', '', content, flags=re.IGNORECASE)
            
            # Calculate relative path
            rel_path = os.path.relpath(filepath, directory)
            depth = len(rel_path.split(os.sep)) - 1
            
            icon_path = '../' * depth + 'logo.png'
            icon_tag = f'\n  <link rel="icon" type="image/png" href="{icon_path}">\n'
            
            # Insert before </head>
            content = re.sub(r'(</head>)', icon_tag + r'\1', content, flags=re.IGNORECASE)
            
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Updated favicon for {rel_path}")

