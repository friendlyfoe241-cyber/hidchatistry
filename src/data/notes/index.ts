import type { Note } from './types';
import { unit1Notes } from './unit1';
import { unit2Notes } from './unit2';
import { unit3Notes } from './unit3';
import { unit4Notes } from './unit4';
import { unit5Notes } from './unit5';
import { unit6Notes } from './unit6';
import { chemASNotes } from './chemAS';
import { chemA2Notes } from './chemA2';
import { physASNotes } from './physAS';
import { physA2Notes } from './physA2';
import { extrasNotes } from './extras';

export * from './types';

/** All notes, in the order they appear on the site. */
export const NOTES: Note[] = [
  ...unit1Notes,
  ...unit2Notes,
  ...unit3Notes,
  ...unit4Notes,
  ...unit5Notes,
  ...unit6Notes,
  ...chemASNotes,
  ...chemA2Notes,
  ...physASNotes,
  ...physA2Notes,
  ...extrasNotes,
];

export function getNote(slug: string): Note | undefined {
  return NOTES.find(n => n.slug === slug);
}

/** Notes from the same unit — shown in the notes page side rail. */
export function siblingsOf(note: Note): Note[] {
  return NOTES.filter(n => n.unit === note.unit);
}

/** Previous / next note in the overall reading order. */
export function neighboursOf(note: Note): { prev?: Note; next?: Note } {
  const i = NOTES.findIndex(n => n.slug === note.slug);
  return {
    prev: i > 0 ? NOTES[i - 1] : undefined,
    next: i >= 0 && i < NOTES.length - 1 ? NOTES[i + 1] : undefined,
  };
}
