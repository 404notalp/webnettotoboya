import os
import re
import shutil

# 🔒 Önce backup klasörü
BACKUP_DIR = "_backup"
os.makedirs(BACKUP_DIR, exist_ok=True)

replacements = {
    r'Araçcınızı': 'Aracınızı',
    r'Araçcınızın': 'Aracınızın',
    r'Araçcınız': 'Aracınız',
    r'onarımıyoruz': 'onarmıyoruz',
    r'onarımıyor': 'onarmıyor',
    r'orijinaliğini': 'orijinalliğini',
    r'sŞase': 'şase',
    r'şŞase': 'şase',
    r'ŞŞase': 'Şase',
    r'ÖÖzellikler': 'Özellikler',
    r'düÖzeltiyoruz': 'düzeltiyoruz',
    r'düÖzeltilmesi': 'düzeltilmesi',
    r'düÖzelt': 'düzelt',
    r'zımparçalama': 'zımparalama',
    r'Araçyın': 'Arayın',
    r'Firinli': 'Fırınlı',
    r'\bislem\b': 'işlem',
    r'\bGunes\b': 'Güneş',
    r'Detaylari Incele \?': 'Detayları İncele →',
    r'Detaylari Incele': 'Detayları İncele',
    r'â€”': '—',
    r'â˜…': '★',
}

def process_file(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    original = content

    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)

    if content != original:
        # 🔒 Backup al
        backup_path = os.path.join(BACKUP_DIR, path.replace("/", "_").replace("\\", "_"))
        shutil.copy(path, backup_path)

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f'✔ Updated: {path}')
    else:
        print(f'— No change: {path}')


for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith(('.html', '.js', '.css')):
            full_path = os.path.join(root, file)
            process_file(full_path)