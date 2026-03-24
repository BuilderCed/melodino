# 🎹 Melodino

**Apprends le piano en t'amusant ! / Learn piano the fun way!**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Offline Ready](https://img.shields.io/badge/Offline-Ready-blue.svg)](#-offline--pwa)
[![COPPA Compliant](https://img.shields.io/badge/COPPA-Compliant-green.svg)](#-privacy--safety)

> A free, open-source, gamified piano learning app for children aged 3-12. Multilingual, age-adaptive, accessible, with ROLI LUMI LED keyboard integration. Single HTML file, zero install, 100% offline.

---

## ✨ Features

### 🎵 Learn Piano the Fun Way
- **Falling notes highway** — Guitar Hero-style gameplay with real piano
- **Wait Mode** — The app waits for the right note (zero pressure for beginners)
- **4 speed settings** — 🐢 Turtle → 🎵 Normal → 🐇 Rabbit → 🚀 Rocket
- **3-star scoring** — Earn stars based on accuracy to unlock new worlds

### 🌍 Multilingual
- **French** (default) and **English** fully supported
- **Solfege (Do-Re-Mi)** or **Letter names (C-D-E)** — auto-switches by locale
- Songs from around the world: France, England, Japan, China, and more

### 👶 Age-Adaptive (3-12 years)
- **3-5 years**: Big buttons, voice guidance, simple songs, right hand only
- **6-8 years**: Progress bars, badges, two-hand introduction
- **9-12 years**: Full menus, streaks, detailed stats, advanced songs

### 🎹 ROLI LUMI Integration
- **Auto-detection** via USB-C — plug and play, zero drivers
- **LED control** — Next note glows gold, correct = green, incorrect = red
- **Works with ANY USB MIDI keyboard** — LUMI is optional
- **Computer keyboard** works too — A=C, S=D, D=E, F=F, G=G...

### 🏆 Gamification
- **3 Worlds**: 🌳 Enchanted Forest → 🌊 Magic Ocean → 🏰 Musical Castle
- **Stars, streaks, badges** to keep kids motivated
- **Celebration animations** on milestones

### ♿ Accessible
- **Color-blind safe** palette (Okabe-Ito)
- **Dyslexia font** toggle (OpenDyslexic)
- **Reduced motion** mode
- **Focus mode** for ADHD (minimal UI, no distractions)
- **Keyboard navigation** + screen reader support
- **Voice guidance** via SpeechSynthesis

### 🔒 Privacy & Safety
- **Zero data collection** — no analytics, no cookies, no server
- **100% offline** after first load (PWA with Service Worker)
- **Parent dashboard** with PIN lock
- **COPPA & GDPR-K compliant** by design

---

## 🚀 Quick Start

### Option 1: Live Demo
👉 [**Play now on GitHub Pages**](https://builderced.github.io/melodino/)

### Option 2: Download
1. Download `index.html` from this repo
2. Open it in **Chrome** or **Edge**
3. Pick a profile, choose a song, and start playing!

### Option 3: With ROLI LUMI
1. Connect ROLI LUMI via **USB-C** to your Mac
2. Open `index.html` in Chrome
3. Click **"Allow"** when Chrome asks for MIDI access
4. The MIDI badge turns green — keys light up automatically!

---

## 🎶 Song List

### 🌳 World 1: Enchanted Forest (Right Hand)
| Song | Origin | Difficulty |
|------|--------|-----------|
| Ah Vous Dirai-Je Maman / Twinkle Twinkle | FR/EN | ⭐ |
| Frere Jacques / Are You Sleeping | FR/EN | ⭐ |
| Au Clair de la Lune | FR | ⭐ |
| Mary Had a Little Lamb | EN | ⭐ |
| Hot Cross Buns | EN | ⭐ |

### 🌊 World 2: Magic Ocean
| Song | Origin | Difficulty |
|------|--------|-----------|
| Row Row Row Your Boat | EN | ⭐⭐ |
| London Bridge | EN | ⭐⭐ |
| Alouette | FR | ⭐⭐ |

### 🏰 World 3: Musical Castle (Both Hands)
| Song | Origin | Difficulty |
|------|--------|-----------|
| Jingle Bells (Vive le Vent) | Universal | ⭐⭐⭐ |
| Ode to Joy (Hymne a la Joie) | Beethoven | ⭐⭐⭐ |

---

## 🎹 ROLI LUMI Setup

1. **Connect** ROLI LUMI via USB-C cable to your Mac
2. **Open** Melodino in Chrome
3. **Allow** MIDI access when prompted
4. **Play!** — Keys light up to guide you

> Works with any USB MIDI keyboard. LUMI gets LED colors as a bonus.
> No MIDI keyboard? Use your computer keyboard (A-L keys) or tap the on-screen piano.

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Vanilla JS | Zero dependencies, zero build |
| Web Audio API | Low-latency piano synthesis |
| Web MIDI API | Keyboard input + LUMI SysEx LEDs |
| Canvas 2D | 60fps falling notes animation |
| IndexedDB | Async storage for profiles/progress |
| Service Worker | Offline-first PWA |
| SpeechSynthesis | Voice guidance for young children |

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

- **🎵 Add songs** — Submit new songs in our JSON format (see `songs/community/`)
- **🌍 Add translations** — Help translate to more languages
- **♿ Improve accessibility** — Test with assistive technology
- **🐛 Report bugs** — Open an issue

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📋 Comparison

| Feature | Melodino | Simply Piano | Flowkey | Piano Marvel |
|---------|:---:|:---:|:---:|:---:|
| **Free** | ✅ | ❌ ($120/yr) | ❌ ($120/yr) | ❌ ($100/yr) |
| **Open Source** | ✅ | ❌ | ❌ | ❌ |
| **Offline** | ✅ | ❌ | ❌ | ❌ |
| **Multilingual** | ✅ | Partial | Partial | ❌ |
| **MIDI LED Control** | ✅ (LUMI) | ❌ | ❌ | ❌ |
| **Age-Adaptive** | ✅ | ❌ | ❌ | ❌ |
| **Color-blind Safe** | ✅ | ❌ | ❌ | ❌ |
| **Zero Data Collection** | ✅ | ❌ | ❌ | ❌ |
| **No Install** | ✅ | App Store | App Store | Web+App |

---

## 📜 License

[MIT](LICENSE) — Built with ❤️ by a dad for his kids.

---

## 🙏 Credits

- Piano pedagogy inspired by Suzuki and Faber methods
- LUMI SysEx protocol thanks to [benob/LUMI-lights](https://github.com/benob/LUMI-lights)
- Color-blind palette from Okabe & Ito (2008)
- All songs are in the public domain
