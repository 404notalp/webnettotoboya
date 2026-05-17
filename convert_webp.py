import io, sys, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    os.system(f"{sys.executable} -m pip install Pillow -q")
    from PIL import Image

ROOT = Path(__file__).parent
SKIP_DIRS = {'.git', '_backup', 'node_modules'}
QUALITY = 82
MAX_WIDTH = 1920
EXT = {'.jpg', '.jpeg', '.png'}
converted = skipped = errors = saved_bytes = 0

def convert_image(src):
    global converted, skipped, errors, saved_bytes
    dst = src.with_suffix('.webp')
    if dst.exists():
        skipped += 1
        return
    try:
        img = Image.open(src)
        if img.mode in ('RGBA', 'P', 'LA'):
            bg = Image.new('RGB', img.size, (0, 0, 0))
            alpha = img.convert('RGBA').split()[3]
            bg.paste(img.convert('RGB'), mask=alpha)
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        if w > MAX_WIDTH:
            img = img.resize((MAX_WIDTH, int(h * MAX_WIDTH / w)), Image.LANCZOS)
        img.save(dst, 'WEBP', quality=QUALITY, method=6)
        orig = src.stat().st_size
        new = dst.stat().st_size
        saved_bytes += orig - new
        converted += 1
        print(f"  OK  {src.relative_to(ROOT)}  ({orig//1024}KB -> {new//1024}KB, -{(1-new/orig)*100:.0f}%)")
    except Exception as e:
        errors += 1
        print(f"  ERR {src}: {e}")

print(f"\nScanning: {ROOT}\n")
for path in sorted(ROOT.rglob('*')):
    if any(p in SKIP_DIRS for p in path.parts):
        continue
    if path.is_file() and path.suffix.lower() in EXT:
        convert_image(path)

print(f"\n{'='*55}")
print(f"Converted : {converted}")
print(f"Skipped   : {skipped} (webp exists)")
print(f"Errors    : {errors}")
print(f"Saved     : {saved_bytes / 1024 / 1024:.2f} MB")
print(f"{'='*55}\n")
