#!/bin/sh
# Usage: npm run shot -- https://example.com mysite
# Saves public/projects/mysite.jpg for a project card mockup (needs Google Chrome).
set -e
URL="$1"; NAME="$2"
[ -z "$URL" ] || [ -z "$NAME" ] && { echo "Usage: npm run shot -- <url> <name>"; exit 1; }
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=6000 --window-size=1440,2400 \
  --screenshot="public/projects/$NAME.png" "$URL" 2>/dev/null
sips -Z 1200 -s format jpeg -s formatOptions 80 "public/projects/$NAME.png" --out "public/projects/$NAME.jpg" >/dev/null
rm "public/projects/$NAME.png"
echo "Saved public/projects/$NAME.jpg  →  set image: 'projects/$NAME.jpg' in src/data.js"
