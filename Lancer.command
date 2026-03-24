#!/bin/bash
# Melodino — Double-cliquez pour lancer sur macOS
# localhost est un contexte sécurisé → MIDI SysEx fonctionne sans HTTPS
cd "$(dirname "$0")"
echo "🎹 Melodino démarre sur http://localhost:8000"
echo "   Ouvrez Chrome et cliquez Commencer !"
open -a "Google Chrome" "http://localhost:8000/index.html"
python3 -m http.server 8000 --bind 127.0.0.1
