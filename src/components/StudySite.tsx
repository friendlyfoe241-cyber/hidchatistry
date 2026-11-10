import React, { useEffect, useState } from 'react';
import {
  Leaf, Microscope, Dna, FlaskConical, BookOpenCheck, ClipboardList,
  FileText, GraduationCap, Library, MessagesSquare, LogOut, ArrowRight,
  CheckCircle2, Clock, Layers, Sparkles,
} from 'lucide-react';
import { NotesPage } from './NotesPage';
import { getNote } from '../data/notes';

interface StudySiteProps {
  chatOpen: boolean;
  onOpenChat: () => void;
  onExitChat: () => void;
  /** The messaging layer, rendered underneath the site navbar while open. */
  children?: React.ReactNode;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Topics', href: '#topics' },
  { label: 'Revision', href: '#revision' },
  { label: 'Past Papers', href: '#papers' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
];

const UNITS = [
  {
    code: 'Unit 1 · WBI11',
    icon: Microscope,
    title: 'Molecules, Cells and Gas Exchange',
    copy: 'The chemistry of life, cell structure and the systems that move substances in and out of organisms.',
    topics: [
      { label: 'Biological molecules', slug: 'biological-molecules' },
      { label: 'Cells & microscopy', slug: 'cells-and-microscopy' },
      { label: 'Exchange and transport', slug: 'exchange-and-transport' },
      { label: 'Gas exchange', slug: 'gas-exchange' },
    ],
  },
  {
    code: 'Unit 2 · WBI12',
    icon: Dna,
    title: 'Reproduction, Inheritance and Evolution',
    copy: 'How organisms reproduce, how characteristics are passed on, and how diversity arises over time.',
    topics: [
      { label: 'Sexual & asexual reproduction', slug: 'reproduction' },
      { label: 'Inheritance & genetic diversity', slug: 'inheritance-and-genetic-diversity' },
      { label: 'Biodiversity & classification', slug: 'biodiversity-and-classification' },
      { label: 'Evolution', slug: 'evolution' },
    ],
  },
  {
    code: 'Unit 3 · WBI13',
    icon: FlaskConical,
    title: 'Energy, Exercise and Coordination',
    copy: 'Homeostasis, respiration, and the neural and hormonal systems that coordinate the body.',
    topics: [
      { label: 'Homeostasis & excretion', slug: 'homeostasis-and-excretion' },
      { label: 'Neuronal coordination', slug: 'neuronal-coordination' },
      { label: 'Hormonal coordination', slug: 'hormonal-coordination' },
      { label: 'Muscles & movement', slug: 'muscles-and-movement' },
      { label: 'Respiration', slug: 'respiration' },
    ],
  },
  {
    code: 'Unit 4 · WBI14',
    icon: BookOpenCheck,
    title: 'Genetics, Populations and Ecosystems',
    copy: 'Gene expression, biotechnology, population genetics and the ecology of living systems.',
    topics: [
      { label: 'Cellular control', slug: 'cellular-control' },
      { label: 'Biotechnology & gene technologies', slug: 'biotechnology' },
      { label: 'Patterns of inheritance', slug: 'patterns-of-inheritance' },
      { label: 'Populations & evolution', slug: 'populations-and-evolution' },
      { label: 'Ecosystems', slug: 'ecosystems' },
    ],
  },
  {
    code: 'Unit 5 · WBI15',
    icon: ClipboardList,
    title: 'Practical Skills in Biology I',
    copy: 'Planning, analysis and evaluation — the experimental skills assessed alongside Units 1 and 2.',
    topics: [
      { label: 'Planning experiments', slug: 'planning-experiments' },
      { label: 'Recording & analysing data', slug: 'recording-and-analysing-data' },
      { label: 'Evaluation & uncertainty', slug: 'evaluation-and-uncertainty' },
    ],
  },
  {
    code: 'Unit 6 · WBI16',
    icon: ClipboardList,
    title: 'Practical Skills in Biology II',
    copy: 'Advanced practical techniques and the quantitative skills assessed alongside Units 3 and 4.',
    topics: [
      { label: 'Advanced practical techniques', slug: 'advanced-practical-techniques' },
      { label: 'Graphs & statistical tests', slug: 'statistical-tests' },
      { label: 'Scientific method', slug: 'scientific-method' },
    ],
  },
];

const REVISION_CARDS = [
  {
    icon: FileText,
    title: 'Condensed revision notes',
    copy: 'Every sub-topic distilled into short, exam-focused summaries you can read in a single sitting.',
    href: '#topics',
  },
  {
    icon: Layers,
    title: 'Diagrams & definitions',
    copy: 'Labelled diagrams, required terminology and the exact definitions mark schemes look for.',
    href: '#/notes/key-definitions',
  },
  {
    icon: FlaskConical,
    title: 'Required practicals',
    copy: 'Method, variables, safety and evaluation points for each practical you can be asked about.',
    href: '#/notes/practical-handbook',
  },
  {
    icon: Sparkles,
    title: 'Exam technique',
    copy: 'Command words, how marks are allocated, and worked examples of full-mark answers.',
    href: '#/notes/exam-technique',
  },
];

const EXAM_ROWS = [
  { unit: 'Unit 1 — Molecules, Cells and Gas Exchange', paper: 'WBI11/01', time: '1h 30m', marks: '80 marks' },
  { unit: 'Unit 2 — Reproduction, Inheritance and Evolution', paper: 'WBI12/01', time: '1h 30m', marks: '80 marks' },
  { unit: 'Unit 3 — Energy, Exercise and Coordination', paper: 'WBI13/01', time: '1h 30m', marks: '80 marks' },
  { unit: 'Unit 4 — Genetics, Populations and Ecosystems', paper: 'WBI14/01', time: '1h 30m', marks: '80 marks' },
];

const RESOURCES = [
  {
    icon: FileText,
    title: 'Official specification',
    copy: 'The full Pearson Edexcel International AS/A Level Biology specification.',
    href: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels.html',
    external: true,
  },
  {
    icon: ClipboardList,
    title: 'Practical handbook',
    copy: 'Guidance, apparatus lists and exemplar results for every required practical.',
    href: '#/notes/practical-handbook',
    external: false,
  },
  {
    icon: GraduationCap,
    title: 'Flashcard decks',
    copy: 'Spaced-repetition decks covering key terms, definitions and processes.',
    href: '#/notes/key-definitions',
    external: false,
  },
  {
    icon: Library,
    title: 'Further reading',
    copy: 'Curated articles and videos that make the harder topics click.',
    href: '#/notes/further-reading',
    external: false,
  },
];

const REVISION_STEPS = [
  'Read the condensed notes for one sub-topic.',
  'Redraw the key diagrams from memory and label them fully.',
  'Answer the topic questions under timed conditions.',
  'Mark your answer against the scheme and note every lost mark.',
  'Revisit weak sub-topics on a spaced schedule.',
];

const NOTES_HASH = '#/notes/';

function parseNoteSlug(): string | null {
  const hash = window.location.hash;
  return hash.startsWith(NOTES_HASH) ? hash.slice(NOTES_HASH.length) : null;
}

export function StudySite({ chatOpen, onOpenChat, onExitChat, children }: StudySiteProps) {
  const [noteSlug, setNoteSlug] = useState<string | null>(parseNoteSlug);
  const note = noteSlug ? getNote(noteSlug) : undefined;

  // In-page hash router: '#/notes/<slug>' shows a revision note; any other
  // hash is a section anchor on the main page.
  useEffect(() => {
    const onHashChange = () => {
      const slug = parseNoteSlug();
      if (slug) {
        setNoteSlug(slug);
        window.scrollTo({ top: 0 });
        return;
      }
      setNoteSlug(null);
      const id = window.location.hash.replace('#', '');
      if (!id) return;
      // Two frames: let React render the main page back first, then scroll.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Any navigation on the study site also exits the messaging layer, so the
  // user can leave Chatistry by simply clicking Home, Topics, or any other link.
  const exitThen = (fn?: () => void) => () => { onExitChat(); fn?.(); };

  return (
    <div className="study-shell">
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header className="study-nav">
        <div className="study-nav-inner">
          <a href="#home" className="study-brand" onClick={exitThen()}>
            <span className="study-brand-mark"><Leaf className="w-4 h-4" /></span>
            <span className="study-brand-text">
              <strong>BioNotes</strong>
              <small>Pearson IAL Biology</small>
            </span>
          </a>

          <nav className="study-nav-links" aria-label="Main">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="study-link" onClick={exitThen()}>{link.label}</a>
            ))}
          </nav>

          <div className="study-nav-actions">
            {chatOpen ? (
              <button type="button" onClick={onExitChat} className="study-btn study-btn-exit">
                <LogOut className="w-4 h-4" />
                Exit Chatistry
              </button>
            ) : (
              <button type="button" onClick={onOpenChat} className="study-btn study-btn-primary">
                <MessagesSquare className="w-4 h-4" />
                Communicate
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Messaging layer — sits directly under the navbar while open. */}
      {chatOpen && <div className="study-chat-frame">{children}</div>}

      {/* ── A revision note ────────────────────────────────────── */}
      {note && (
        <main className="study-main">
          <NotesPage note={note} />
        </main>
      )}

      {/* ── Study content ──────────────────────────────────────── */}
      {!note && (
        <main className="study-main">
          {/* Hero */}
          <section id="home" className="study-hero">
            <div className="study-hero-copy">
              <span className="study-badge"><Sparkles className="w-3.5 h-3.5" /> Pearson Edexcel International AS &amp; A Level</span>
              <h1 className="study-h1">
                Biology notes &amp; revision,<br />
                <span className="study-accent-text">organised for the exam.</span>
              </h1>
              <p className="study-lede">
                Clear, syllabus-aligned notes for every unit of Pearson IAL Biology — with revision
                topics, required practicals and exam practice, all in one place.
              </p>
              <div className="study-hero-actions">
                <a href="#topics" className="study-btn study-btn-primary study-btn-lg" onClick={exitThen()}>
                  Browse the units <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#revision" className="study-btn study-btn-ghost study-btn-lg" onClick={exitThen()}>Start revising</a>
              </div>
              <div className="study-hero-stats">
                <span><strong>6</strong> units covered</span>
                <span><strong>40+</strong> revision topics</span>
                <span><strong>100%</strong> spec-aligned</span>
              </div>
            </div>

            <div className="study-hero-card">
              <div className="study-hero-card-head">
                <span className="study-hero-card-dot" />
                <span>Today’s revision · Unit 3</span>
              </div>
              <ul className="study-checklist">
                <li><CheckCircle2 className="w-4 h-4" /><a href="#/notes/homeostasis-and-excretion" onClick={exitThen()}>Homeostasis &amp; negative feedback</a></li>
                <li><CheckCircle2 className="w-4 h-4" /><a href="#/notes/neuronal-coordination" onClick={exitThen()}>Action potentials &amp; synapses</a></li>
                <li><CheckCircle2 className="w-4 h-4" /><a href="#/notes/muscles-and-movement" onClick={exitThen()}>Muscle contraction sliding filament</a></li>
                <li><CheckCircle2 className="w-4 h-4" /><a href="#/notes/respiration" onClick={exitThen()}>Respiration: glycolysis → Krebs → ETC</a></li>
              </ul>
              <div className="study-hero-card-foot">
                <span><Clock className="w-3.5 h-3.5" /> ~45 min session</span>
                <span><Layers className="w-3.5 h-3.5" /> 12 flashcards due</span>
              </div>
            </div>
          </section>

          {/* Topics */}
          <section id="topics" className="study-section">
            <div className="study-section-head">
              <p className="study-eyebrow">Topics by unit</p>
              <h2 className="study-h2">Everything on the specification, nothing off it.</h2>
              <p className="study-sub">Each unit breaks down into focused revision topics with notes, diagrams and questions.</p>
            </div>
            <div className="study-grid study-grid-3">
              {UNITS.map(({ code, icon: Icon, title, copy, topics }) => (
                <article key={code} className="study-card">
                  <div className="study-card-top">
                    <span className="study-icon"><Icon className="w-4.5 h-4.5" /></span>
                    <span className="study-code">{code}</span>
                  </div>
                  <h3 className="study-card-title">
                    <a href={`#/notes/${topics[0].slug}`} onClick={exitThen()}>{title}</a>
                  </h3>
                  <p className="study-card-copy">{copy}</p>
                  <div className="study-chips">
                    {topics.map(t => (
                      <a key={t.slug} href={`#/notes/${t.slug}`} className="study-chip" onClick={exitThen()}>{t.label}</a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Revision */}
          <section id="revision" className="study-section study-section-alt">
            <div className="study-section-head">
              <p className="study-eyebrow">Revision</p>
              <h2 className="study-h2">Revise smarter, not longer.</h2>
              <p className="study-sub">Short summaries, active recall and exam-style practice — the routine that actually sticks.</p>
            </div>
            <div className="study-grid study-grid-4">
              {REVISION_CARDS.map(({ icon: Icon, title, copy, href }) => (
                <a key={title} href={href} className="study-card study-card-link" onClick={exitThen()}>
                  <span className="study-icon"><Icon className="w-4.5 h-4.5" /></span>
                  <h3 className="study-card-title">{title}</h3>
                  <p className="study-card-copy">{copy}</p>
                  <span className="study-card-more">Read notes <ArrowRight className="w-3.5 h-3.5" /></span>
                </a>
              ))}
            </div>

            <div className="study-steps">
              <h3 className="study-steps-title">A revision loop that works</h3>
              <ol className="study-steps-list">
                {REVISION_STEPS.map((step, i) => <li key={step}><span className="study-step-num">{i + 1}</span>{step}</li>)}
              </ol>
            </div>
          </section>

          {/* Past papers */}
          <section id="papers" className="study-section">
            <div className="study-section-head">
              <p className="study-eyebrow">Exam practice</p>
              <h2 className="study-h2">Past papers &amp; mark schemes</h2>
              <p className="study-sub">Practise under timed conditions, then mark yourself honestly against the scheme.</p>
            </div>
            <div className="study-table-wrap">
              <table className="study-table">
                <thead>
                  <tr><th>Unit</th><th>Paper</th><th>Duration</th><th>Marks</th></tr>
                </thead>
                <tbody>
                  {EXAM_ROWS.map(row => (
                    <tr key={row.paper}>
                      <td>{row.unit}</td><td>{row.paper}</td><td>{row.time}</td><td>{row.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="study-note">Paper formats can change — always confirm against the latest Pearson specification.</p>
          </section>

          {/* Resources */}
          <section id="resources" className="study-section study-section-alt">
            <div className="study-section-head">
              <p className="study-eyebrow">Resources</p>
              <h2 className="study-h2">Useful extras</h2>
            </div>
            <div className="study-grid study-grid-4">
              {RESOURCES.map(({ icon: Icon, title, copy, href, external }) => (
                <a
                  key={title}
                  href={href}
                  className="study-card study-card-link"
                  onClick={exitThen()}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="study-icon"><Icon className="w-4.5 h-4.5" /></span>
                  <h3 className="study-card-title">{title}</h3>
                  <p className="study-card-copy">{copy}</p>
                  <span className="study-card-more">Open <ArrowRight className="w-3.5 h-3.5" /></span>
                </a>
              ))}
            </div>
          </section>

          {/* About */}
          <section id="about" className="study-section study-about">
            <div className="study-section-head">
              <p className="study-eyebrow">About</p>
              <h2 className="study-h2">Made by students, for students.</h2>
              <p className="study-sub">
                BioNotes collects the notes, diagrams and practice material we wish we’d had — kept
                up to date with the Pearson IAL Biology specification and free to use while revising.
              </p>
            </div>
          </section>
        </main>
      )}

      <footer className="study-footer">
        <div className="study-footer-inner">
          <a href="#home" className="study-brand" onClick={exitThen()}>
            <span className="study-brand-mark"><Leaf className="w-4 h-4" /></span> BioNotes
          </a>
          <nav className="study-footer-links" aria-label="Footer">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="study-link" onClick={exitThen()}>{link.label}</a>
            ))}
          </nav>
          <span className="study-footer-note">Study notes for revision purposes · Pearson IAL Biology</span>
        </div>
      </footer>
    </div>
  );
}
