# -*- coding: utf-8 -*-
"""Generate unified product concept images via Pollinations (no key needed)."""
import urllib.parse
import urllib.request
import os
import sys
import time

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public', 'images', 'products')
os.makedirs(OUT, exist_ok=True)

STYLE = ('minimalist Japanese still life product photography, warm off-white beige paper background, '
         'soft diffused natural window light from the left, gentle soft shadows, muted warm neutral tones, '
         'high-end editorial catalog style, matte finishes, quiet luxury aesthetic, blank unlabeled packaging, '
         'no text, no letters, no logos, no watermark')

JOBS = [
    ('system-laundry.jpg', 1440, 1080, 41,
     'tall frosted white plastic laundry detergent bottle with pump dispenser and a pale blue cap, '
     'neatly folded natural linen towels stacked beside it'),
    ('system-kitchen.jpg', 1440, 1080, 42,
     'amber glass spray bottle with a white fine-mist nozzle beside a small brushed steel basin and a stone gray folded cloth'),
    ('system-bathroom.jpg', 1440, 1080, 43,
     'white ceramic pump bottle and a small frosted glass jar on a travertine stone shelf, small glass of pale blue water beside'),
    ('system-home.jpg', 1440, 1080, 44,
     'set of two matte white bottles of different heights with pale blue caps arranged on a light oak wooden tray'),
    ('system-shoe.jpg', 1440, 1080, 45,
     'small amber glass care bottle with a wooden handled brush and a neatly folded gray cloth'),
    ('system-pods.jpg', 1440, 1080, 46,
     'clear lidded glass jar filled with white laundry detergent pods, one pod resting beside it on natural linen fabric'),
    ('family-lineup.jpg', 1080, 1350, 47,
     'family lineup of six minimal white and frosted glass bottles with pale blue caps of varied heights, '
     'standing in a row on a warm beige seamless studio background, generous negative space above'),
]

def fetch(name, w, h, seed, subject):
    q = urllib.parse.quote(STYLE + ', ' + subject)
    url = f'https://image.pollinations.ai/prompt/{q}?width={w}&height={h}&nologo=true&seed={seed}'
    dest = os.path.join(OUT, name)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=240) as r, open(dest, 'wb') as f:
        f.write(r.read())
    size = os.path.getsize(dest)
    head = open(dest, 'rb').read(4)
    ok = head[:3] == b'\xff\xd8\xff' or head[:4] == b'\x89PNG'
    print(f'{name}: {size//1024} KB, jpeg/png={ok}', flush=True)
    return ok and size > 50000

only = sys.argv[1:] if len(sys.argv) > 1 else None
for name, w, h, seed, subject in JOBS:
    if only and name not in only:
        continue
    for attempt in range(2):
        try:
            if fetch(name, w, h, seed + attempt * 10, subject):
                break
        except Exception as e:
            print(f'{name} attempt {attempt+1} failed: {e}', flush=True)
            time.sleep(3)
    else:
        print(f'{name}: FAILED', flush=True)
