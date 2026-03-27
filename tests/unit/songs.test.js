import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';

// Extract SONGS from index.html
function extractSongs() {
  const html = readFileSync('index.html', 'utf8');
  const match = html.match(/const SONGS=(\[[\s\S]*?\]);/);
  if (!match) throw new Error('SONGS array not found');
  return new Function(`return ${match[1]}`)();
}

function extractWorlds() {
  const html = readFileSync('index.html', 'utf8');
  const match = html.match(/const WORLDS=(\[[\s\S]*?\]);/);
  if (!match) throw new Error('WORLDS array not found');
  return new Function(`return ${match[1]}`)();
}

const SONGS = extractSongs();
const WORLDS = extractWorlds();

describe('Songs data integrity', () => {
  it('has exactly 23 songs', () => {
    expect(SONGS.length).toBe(23);
  });

  it('all songs have unique IDs', () => {
    const ids = SONGS.map(s => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all songs have unique titles', () => {
    const titles = SONGS.map(s => s.t);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('all songs have required fields', () => {
    for (const song of SONGS) {
      expect(song).toHaveProperty('id');
      expect(song).toHaveProperty('t');
      expect(song).toHaveProperty('c');
      expect(song).toHaveProperty('w');
      expect(song).toHaveProperty('d');
      expect(song).toHaveProperty('bpm');
      expect(song).toHaveProperty('n');
      expect(song.n.length).toBeGreaterThan(0);
    }
  });

  it('all notes have valid fields', () => {
    const validNotes = /^[A-G](#|b)?[0-9]$/;
    const validDurations = ['w', 'h', 'q', 'e'];
    for (const song of SONGS) {
      for (const note of song.n) {
        expect(note.n).toMatch(validNotes);
        expect(validDurations).toContain(note.du);
        expect(note).toHaveProperty('h');
        expect(note).toHaveProperty('f');
      }
    }
  });

  it('all songs reference valid worlds (1-4)', () => {
    const worldIds = WORLDS.map(w => w.id);
    for (const song of SONGS) {
      expect(worldIds).toContain(song.w);
    }
  });

  it('BPM values are reasonable (40-140)', () => {
    for (const song of SONGS) {
      expect(song.bpm.turtle).toBeGreaterThanOrEqual(40);
      expect(song.bpm.rocket).toBeLessThanOrEqual(140);
      expect(song.bpm.turtle).toBeLessThan(song.bpm.normal);
      expect(song.bpm.normal).toBeLessThan(song.bpm.rabbit);
      expect(song.bpm.rabbit).toBeLessThan(song.bpm.rocket);
    }
  });

  it('each world has at least 3 songs', () => {
    for (const world of WORLDS) {
      const worldSongs = SONGS.filter(s => s.w === world.id);
      expect(worldSongs.length).toBeGreaterThanOrEqual(3);
    }
  });
});
