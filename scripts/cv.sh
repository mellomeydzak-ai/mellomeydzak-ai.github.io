#!/bin/sh
# Usage: npm run cv  →  turns cv/cv.html into public/Mellomey-Dzaklidzie-CV.pdf (needs Google Chrome).
set -e
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="public/Mellomey-Dzaklidzie-CV.pdf" "file://$PWD/cv/cv.html" 2>/dev/null
echo "Saved public/Mellomey-Dzaklidzie-CV.pdf"
