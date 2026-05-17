#!/usr/bin/env python3
"""Tüm JPG/PNG dosyalarını WebP'ye dönüştür"""
import os
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parent
foto_dir = ROOT / "foto"
converted = []
skipped = []

def convert_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        # kullanilmayan_Fotolar klasörünü atla
        if 'kullanilmayan' in root:
            continue

        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                src_path = os.path.join(root, file)
                # WebP dosya adı oluştur
                base, ext = os.path.splitext(file)
                dst_path = os.path.join(root, base + '.webp')

                try:
                    # Zaten WebP varsa atla
                    if os.path.exists(dst_path):
                        skipped.append(src_path)
                        continue

                    # Dönüştür
                    img = Image.open(src_path)
                    if img.mode == 'RGBA':
                        img.save(dst_path, 'WEBP', quality=85)
                    else:
                        img.convert('RGB').save(dst_path, 'WEBP', quality=85)

                    converted.append(src_path)
                    print(f"Converted: {src_path} -> {dst_path}")
                except Exception as e:
                    print(f"Error: {src_path} - {e}")

    print(f"\nTotal: {len(converted)} converted, {len(skipped)} skipped")

if __name__ == "__main__":
    convert_to_webp(foto_dir)
