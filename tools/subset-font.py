"""Regenerate the committed UI webfont: python -m pip install fonttools brotli."""
from pathlib import Path
from hashlib import sha256
import json
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
source = root / 'dist/fonts/ZCOOLKuaiLe-Regular.ttf'
target = root / 'dist/fonts/NaiwaUI.woff2'
used = set(range(32, 127))
for path in (root / 'dist').glob('*'):
    if path.suffix in ('.js', '.html', '.css'):
        used.update(map(ord, path.read_text(encoding='utf-8')))
font = TTFont(source, recalcTimestamp=False)
available = set(font.getBestCmap())
options = subset.Options()
options.name_IDs = ['*']
options.name_languages = ['*']
subsetter = subset.Subsetter(options=options)
subsetter.populate(unicodes=used & available)
subsetter.subset(font)
for name in font['name'].names:
    if name.nameID in (1, 4, 6, 16):
        value = 'NaiwaUI' if name.nameID == 6 else 'Naiwa Game UI'
        name.string = value.encode(name.getEncoding())
font.flavor = 'woff2'
font.save(target)
check = TTFont(target)
included = set(check.getBestCmap())
assert used & available <= included
metadata = dict(sourceSha256=sha256(source.read_bytes()).hexdigest(),
                sha256=sha256(target.read_bytes()).hexdigest(),
                sourceBytes=source.stat().st_size, bytes=target.stat().st_size,
                available=sorted(available), included=sorted(included))
(target.parent / 'NaiwaUI.metadata.json').write_text(json.dumps(metadata), encoding='utf-8')
print(f'UI font: {metadata["sourceBytes"]:,} -> {metadata["bytes"]:,} bytes; {len(included)} supported codepoints.')
