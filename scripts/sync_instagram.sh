#!/usr/bin/env bash
set -euo pipefail

USERNAME="${1:-shub.arambh22}"
MODE="${2:-}"
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IG_DIR="$BASE_DIR/instagram"
RAW_DIR="$IG_DIR/raw"
PROFILE_DIR="$RAW_DIR/$USERNAME"
DOWNLOAD_DIR="$PROFILE_DIR"
POSTS_JSON="$IG_DIR/posts.json"

if ! python3 -m instaloader --version >/dev/null 2>&1; then
  echo "instaloader is required. Install with: pip3 install --user instaloader"
  exit 1
fi

mkdir -p "$RAW_DIR"

if [ "$MODE" != "--build-only" ]; then
  echo "Downloading public images for @$USERNAME ..."
  EXTRA_ARGS=()
  if [ -n "${IG_LOGIN:-}" ]; then
    EXTRA_ARGS+=(--login "$IG_LOGIN")
  fi
  if [ -n "${IG_SESSIONFILE:-}" ]; then
    EXTRA_ARGS+=(--sessionfile "$IG_SESSIONFILE")
  fi
  python3 -m instaloader "$USERNAME" \
    --dirname-pattern "$RAW_DIR" \
    --filename-pattern "{shortcode}" \
    --no-videos \
    --no-video-thumbnails \
    --no-captions \
    --no-compress-json \
    "${EXTRA_ARGS[@]}"
fi

if [ ! -d "$PROFILE_DIR" ]; then
  DOWNLOAD_DIR="$RAW_DIR"
fi

shopt -s nullglob
images=("$DOWNLOAD_DIR"/*.jpg "$DOWNLOAD_DIR"/*.jpeg "$DOWNLOAD_DIR"/*.png "$DOWNLOAD_DIR"/*.webp)
if [ ${#images[@]} -eq 0 ]; then
  echo "No images found in $DOWNLOAD_DIR"
  exit 1
fi

{
  echo "["
  first=1
  count=0
  for file in "${images[@]}"; do
    name="$(basename "$file")"
    stem="${name%.*}"
    if [[ "$stem" == *_profile_pic ]]; then
      continue
    fi
    shortcode="${stem%_[0-9]*}"
    rel="./instagram/raw/$name"
    if [ "$first" -eq 0 ]; then
      echo ","
    fi
    printf '  {"image":"%s","postUrl":"https://www.instagram.com/p/%s/","alt":"@%s Instagram photo"}' \
      "$rel" "$shortcode" "$USERNAME"
    first=0
    count=$((count + 1))
  done
  echo
  echo "]"
} > "$POSTS_JSON"

echo "Created $POSTS_JSON with $count images."
