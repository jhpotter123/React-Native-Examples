#!/usr/bin/env sh

# Usage: ./filter-npm-versions.sh <package-name>
if [ -z "$1" ]; then
  echo "Usage: $0 <npm-package-name>"
  exit 1
fi

PKG=$1
FILTER_FILE="../filters.txt"

if [ ! -f "$FILTER_FILE" ]; then
  echo "Filter file '$FILTER_FILE' not found."
  exit 1
fi

# Read filters from file and join them with |
FILTERS=$(paste -sd'|' "$FILTER_FILE")

npm view "$PKG" versions --json | jq -r '.[]' \
  | grep -vE $FILTERS

# npm view "$PKG" versions --json 2>/dev/null \
#   | sed 's/,/\n/g' \
#   | grep -vE $FILTERS \
#   | tr -d '[]" '
