# Contributing to Petit Maestro

Thank you for your interest in contributing! Here's how you can help.

## Adding Songs

Songs are defined in the `SONGS` array inside `index.html`. Each song follows this format:

```javascript
{
  id: 100,                                    // Unique integer
  title: { fr: 'Titre FR', en: 'Title EN' }, // Multilingual titles
  composer: 'Traditional',                     // Composer name
  world: 1,                                   // World number (1-3)
  difficulty: 1,                               // 1=easy, 2=medium, 3=hard
  ageMin: 3,                                   // Minimum recommended age
  rightHandOnly: true,                         // true for beginners
  bpm: { turtle: 50, normal: 72, rabbit: 90, rocket: 110 },
  notes: [
    { note: 'C4', duration: 'quarter', hand: 'right', finger: 1 },
    // ... more notes
  ]
}
```

### Duration values
`whole`, `half`, `dotted-half`, `quarter`, `dotted-quarter`, `eighth`, `sixteenth`

### Important
- All songs must be in the **public domain** (traditional, composer dead 70+ years)
- Notes must be **musically correct** — test them!
- Include both French and English titles

## Adding Translations

Translations are in the `I18N` object. Add a new language by copying the `en` object and translating all values.

## Reporting Bugs

Open an issue with:
1. Browser and OS version
2. Steps to reproduce
3. Expected vs actual behavior
4. Screenshot if relevant

## Code Style

- Vanilla JS only — no frameworks
- Well-commented with PART headers
- Use `textContent` not `innerHTML` for user data
- All strings through `t()` function for i18n
