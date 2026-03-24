# Changelog

All notable changes to Melodino will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-03-24

### Added
- 13 new French songs: Une souris verte, Do Re Mi la perdrix, Ainsi font font font,
  Savez-vous planter les choux, Il etait un petit navire, Maman les petits bateaux,
  Pomme de reinette, Un elephant qui se balancait, Promenons-nous dans les bois,
  La Mere Michel, Fur Elise (simplified), Canon de Pachelbel (simplified),
  Prelude en Do (Bach simplified)
- World 4: Classiques (Beethoven, Pachelbel, Bach)
- Real piano sound via soundfont-player + Gleitz CDN (Salamander Grand Piano MusyngKite)
- Complete ROLI LUMI SysEx library (from xivilay/lumi-web-control)
- AZERTY keyboard mapping (French Mac)
- Lancer.command for localhost launch on macOS
- Note colors by name (Do=red, Re=orange, Mi=yellow, Fa=blue, Sol=green, La=purple, Si=pink)
- Fun facts in French for every song

### Changed
- Renamed from Petit Maestro to Melodino
- Complete rebuild of audio engine using soundfont-player
- SysEx library rewritten with proper BitArray encoder

## [1.0.0] - 2026-03-24

### Added
- Initial release
- 10 songs across 3 worlds (Enchanted Forest, Magic Ocean, Musical Castle)
- Falling notes highway with Canvas 2D at 60fps
- Wait Mode (app pauses until correct note is played)
- 4 speed settings (Turtle, Normal, Rabbit, Rocket)
- 3-star scoring system with world unlock progression
- ROLI LUMI USB-C integration with LED color control via SysEx
- Support for any USB MIDI keyboard
- Computer keyboard mapping (A-L keys)
- On-screen touch piano
- Multi-child profiles (up to 6) with IndexedDB storage
- Streak tracking (consecutive practice days)
- French and English UI with auto-detection
- Solfege (Do-Re-Mi) and letter (C-D-E) notation switching
- Parent dashboard with PIN lock (default: 1234)
- Data export/import (JSON backup)
- Print progress report
- Accessibility: color-blind mode, dyslexia font, reduced motion, focus mode
- Voice guidance via SpeechSynthesis
- PWA with Service Worker for full offline support
- GitHub Pages deployment via GitHub Actions
