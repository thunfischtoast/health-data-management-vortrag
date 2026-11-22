#!/usr/bin/env bash
# Screenshot of every step of every slide with Edge headless.
# Usage: tools/shots.sh [first] [last]   (horizontal slide indices, zero-based)
# Output: shots/<h>-<v>-<step>.png
set -euo pipefail
cd "$(dirname "$0")/.."
EDGE="${EDGE:-/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe}"
OUT="${OUT:-shots}"
PROFILE="${PROFILE:-$(mktemp -d)}"
FIRST="${1:-0}"
LAST="${2:-999}"
mkdir -p "$OUT"
OUT="$(cd "$OUT" && pwd)"
PAGE="file:///$(cygpath -m "$PWD")/index.html"

# One line per slide: h v steps. Relies on one <section> tag per line.
list_slides() {
  awk '
    BEGIN { h = -1 }
    /<section class="stack"/ { h++; v = -1; stack = 1; next }
    /<!-- end stack -->/ { stack = 0 }
    /<section/ {
      if (stack) v++; else { h++; v = 0 }
      steps = 0
      if (match($0, /data-steps="[0-9]+"/)) steps = substr($0, RSTART + 12, RLENGTH - 13)
      print h, v, steps
    }
  ' index.html
}

list_slides | while read -r h v steps; do
  if [ "$h" -lt "$FIRST" ] || [ "$h" -gt "$LAST" ]; then continue; fi
  for ((s = 0; s <= steps; s++)); do
    hash="#/$h/$v"
    if [ "$s" -gt 0 ]; then hash="$hash/$((s - 1))"; fi
    "$EDGE" --headless=new --disable-gpu --hide-scrollbars \
      --user-data-dir="$(cygpath -w "$PROFILE")" --window-size=1920,1080 \
      --virtual-time-budget=4000 \
      --screenshot="$(cygpath -w "$OUT/$h-$v-$s.png")" \
      "$PAGE$hash" </dev/null >/dev/null 2>&1
    echo "$h-$v-$s"
  done
done
