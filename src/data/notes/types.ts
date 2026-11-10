// Shared shapes for the revision notes rendered by NotesPage.tsx.

export interface NoteSection {
  heading: string;
  /** Paragraphs. */
  p?: string[];
  /** Bullet points. */
  bullets?: string[];
  /** Key definitions: [term, meaning]. */
  defs?: Array<[string, string]>;
  /** Simple table. */
  table?: { head: string[]; rows: string[][] };
  /** Further-reading style links. */
  links?: Array<{ label: string; href: string; description: string }>;
}

export interface Note {
  slug: string;
  unit: string;      // e.g. 'Unit 1 · WBI11'
  unitName: string;  // e.g. 'Molecules, Cells and Gas Exchange'
  title: string;
  intro: string;
  sections: NoteSection[];
  examTip: string;
}
