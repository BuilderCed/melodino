import { describe, it, expect } from 'vitest';

// Scoring logic extracted from index.html Game engine (PART 6)
// Stars are based on accuracy: 3★ >= 90%, 2★ >= 70%, 1★ >= 50%, 0★ < 50%
function calcStars(accuracy) {
  if (accuracy >= 90) return 3;
  if (accuracy >= 70) return 2;
  if (accuracy >= 50) return 1;
  return 0;
}

function calcAccuracy(hits, total) {
  if (total === 0) return 0;
  return Math.round((hits / total) * 100);
}

// Duration map from index.html
const DUR = { w: 4, h: 2, q: 1, e: 0.5 };

function calcSongDuration(notes, bpm) {
  const beat = 60000 / bpm;
  return notes.reduce((sum, n) => sum + (DUR[n.du] || 1) * beat, 0);
}

describe('Scoring', () => {
  it('3 stars for >= 90% accuracy', () => {
    expect(calcStars(100)).toBe(3);
    expect(calcStars(95)).toBe(3);
    expect(calcStars(90)).toBe(3);
  });

  it('2 stars for >= 70% accuracy', () => {
    expect(calcStars(89)).toBe(2);
    expect(calcStars(70)).toBe(2);
  });

  it('1 star for >= 50% accuracy', () => {
    expect(calcStars(69)).toBe(1);
    expect(calcStars(50)).toBe(1);
  });

  it('0 stars for < 50% accuracy', () => {
    expect(calcStars(49)).toBe(0);
    expect(calcStars(0)).toBe(0);
  });

  it('accuracy calculation is correct', () => {
    expect(calcAccuracy(10, 10)).toBe(100);
    expect(calcAccuracy(7, 10)).toBe(70);
    expect(calcAccuracy(0, 10)).toBe(0);
    expect(calcAccuracy(0, 0)).toBe(0);
  });
});

describe('Duration calculation', () => {
  it('whole note = 4 beats', () => {
    expect(DUR.w).toBe(4);
  });

  it('half note = 2 beats', () => {
    expect(DUR.h).toBe(2);
  });

  it('quarter note = 1 beat', () => {
    expect(DUR.q).toBe(1);
  });

  it('eighth note = 0.5 beats', () => {
    expect(DUR.e).toBe(0.5);
  });

  it('song duration scales with BPM', () => {
    const notes = [{ du: 'q' }, { du: 'q' }, { du: 'h' }];
    const slow = calcSongDuration(notes, 60);
    const fast = calcSongDuration(notes, 120);
    expect(slow).toBe(fast * 2);
  });
});

describe('Input mapping', () => {
  // AZERTY keyboard mapping from index.html PART 7
  const AZERTY = { q: 'C', s: 'D', d: 'E', f: 'F', g: 'G', h: 'A', j: 'B', k: 'C' };
  const QWERTY = { a: 'C', s: 'D', d: 'E', f: 'F', g: 'G', h: 'A', j: 'B', k: 'C' };

  it('AZERTY maps q to C', () => {
    expect(AZERTY.q).toBe('C');
  });

  it('AZERTY maps all 7 notes', () => {
    const notes = new Set(Object.values(AZERTY));
    expect(notes).toContain('C');
    expect(notes).toContain('D');
    expect(notes).toContain('E');
    expect(notes).toContain('F');
    expect(notes).toContain('G');
    expect(notes).toContain('A');
    expect(notes).toContain('B');
  });

  it('MIDI note numbers map correctly', () => {
    const NN = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    // Middle C = MIDI 60
    expect(NN[60 % 12]).toBe('C');
    // A4 = MIDI 69
    expect(NN[69 % 12]).toBe('A');
    // Octave from MIDI
    expect(Math.floor(60 / 12) - 1).toBe(4); // C4
    expect(Math.floor(69 / 12) - 1).toBe(4); // A4
  });
});
