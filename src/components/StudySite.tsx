import React, { useEffect, useState } from 'react';
import {
  Leaf, FlaskConical, Dna, Atom, ClipboardList,
  FileText, GraduationCap, Library, MessagesSquare, LogOut, ArrowRight,
  CheckCircle2, Clock, Layers, Sparkles,
} from 'lucide-react';
import { NotesPage } from './NotesPage';
import { getNote } from '../data/notes';
import { SUBJECTS, getSubject, topicCount, type Subject, type SubjectUnit } from '../data/subjects';

interface StudySiteProps {
  chatOpen: boolean;
  onOpenChat: () => void;
  onExitChat: () => void;
  /** The messaging layer, rendered underneath the site navbar while open. */
  children?: React.ReactNode;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Biology', href: '#/subject/biology' },
  { label: 'Chemistry', href: '#/subject/chemistry' },
  { label: 'Physics', href: '#/subject/physics' },
  { label: 'Revision', href: '#revision' },
  { label: 'Past Papers', href: '#papers' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
];

const SUBJECT_ICONS: Record<string, React.ElementType> = {
  biology: Dna,
  chemistry: FlaskConical,
  physics: Atom,
};

const REVISION_CARDS = [
  {
    icon: FileText,
    title: 'Condensed revision notes',
    copy: 'Every sub-topic distilled into short, exam-focused summaries you can read in a single sitting.',
    href: '#subjects',
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

const RESOURCES = [
  {
    icon: FileText,
    title: 'Official specification',
    copy: 'The full Pearson Edexcel International AS/A Level specifications for all three sciences.',
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

const TODAY_REVISION = [
  { label: 'Moles & stoichiometry', slug: 'moles-and-stoichiometry' },
  { label: 'Newton’s laws & forces', slug: 'motion-and-forces' },
  { label: 'Homeostasis & negative feedback', slug: 'homeostasis-and-excretion' },
  { label: 'Atomic structure & ionisation energies', slug: 'atomic-structure' },
];

const NOTES_HASH = '#/notes/';
const SUBJECT_HASH = '#/subject/';

type Route = { kind: 'note'; slug: string } | { kind: 'subject'; slug: string } | null;

function parseRoute(): Route {
  const hash = window.location.hash;
  if (hash.startsWith(NOTES_HASH)) return { kind: 'note', slug: hash.slice(NOTES_HASH.length) };
  if (hash.startsWith(SUBJECT_HASH)) return { kind: 'subject', slug: hash.slice(SUBJECT_HASH.length) };
  return null;
}

/** Unit card with topic chips — used on subject pages. */
function UnitCard({ unit, icon: Icon }: { unit: SubjectUnit; icon: React.ElementType; key?: string }) {
  return (
    <article className="study-card">
      <div className="study-card-top">
        <span className="study-icon"><Icon className="w-4.5 h-4.5" /></span>
        <span className="study-code">{unit.code}</span>
      </div>
      <h3 className="study-card-title">{unit.title}</h3>
      <p className="study-card-copy">{unit.copy}</p>
      <div className="study-chips">
        {unit.topics.map(t => (
          <a key={t.slug} href={`#/notes/${t.slug}`} className="study-chip">{t.label}</a>
        ))}
      </div>
    </article>
  );
}

/** Papers table — with or without the Subject column. */
function PapersTable({ subject }: { subject?: Subject }) {
  const rows = subject
    ? subject.papers.map(p => ({ subjectName: subject.name, ...p }))
    : SUBJECTS.flatMap(s => s.papers.map(p => ({ subjectName: s.name, ...p })));
  return (
    <div className="study-table-wrap">
      <table className="study-table">
        <thead>
          <tr>
            {!subject && <th>Subject</th>}
            <th>Unit</th><th>Paper</th><th>Duration</th><th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.paper}>
              {!subject && <td>{row.subjectName}</td>}
              <td>{row.unit}</td><td>{row.paper}</td><td>{row.time}</td><td>{row.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** One subject's page: header, unit cards with topics, and its papers. */
function SubjectView({ subject }: { subject: Subject }) {
  const Icon = SUBJECT_ICONS[subject.slug] ?? ClipboardList;
  return (
    <div className="study-subject-wrap">
      <nav className="study-crumb" aria-label="Breadcrumb">
        <a href="#home" className="study-link">Home</a>
        <span>/</span>
        <a href="#subjects" className="study-link">Subjects</a>
        <span>/</span>
        <span className="study-crumb-current">{subject.name}</span>
      </nav>

      <header className="study-subject-head">
        <span className="study-badge"><Icon className="w-3.5 h-3.5" /> Pearson Edexcel International AS &amp; A Level</span>
        <h1 className="study-h1 study-h1-sm">{subject.name} notes &amp; revision topics</h1>
        <p className="study-lede">{subject.blurb}</p>
        <div className="study-hero-stats">
          <span><strong>{subject.units.length}</strong> units covered</span>
          <span><strong>{topicCount(subject)}</strong> revision topics</span>
          <span><strong>100%</strong> spec-aligned</span>
        </div>
      </header>

      <div className="study-grid study-grid-3">
        {subject.units.map(unit => (
          <UnitCard
            key={unit.code}
            unit={unit}
            icon={unit.title.includes('Practical') ? ClipboardList : Icon}
          />
        ))}
      </div>

      <section className="study-subject-papers">
        <div className="study-section-head">
          <p className="study-eyebrow">Exam practice</p>
          <h2 className="study-h2">Past papers &amp; mark schemes</h2>
          <p className="study-sub">Practise under timed conditions, then mark yourself honestly against the scheme.</p>
        </div>
        <PapersTable subject={subject} />
        <p className="study-note">Paper formats can change — always confirm against the latest Pearson specification.</p>
      </section>
    </div>
  );
}

export function StudySite({ chatOpen, onOpenChat, onExitChat, children }: StudySiteProps) {
  const [route, setRoute] = useState<Route>(parseRoute);
  const note = route?.kind === 'note' ? getNote(route.slug) : undefined;
  const subject = route?.kind === 'subject' ? getSubject(route.slug) : undefined;

  // In-page hash router: '#/notes/<slug>' shows a revision note,
  // '#/subject/<slug>' shows a subject page; any other hash is a section anchor.
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseRoute();
      if (parsed) {
        setRoute(parsed);
        window.scrollTo({ top: 0 });
        return;
      }
      setRoute(null);
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
  // user can leave Chatistry by simply clicking any menu item or link.
  const exitThen = (fn?: () => void) => () => { onExitChat(); fn?.(); };

  return (
    <div className="study-shell">
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header className="study-nav">
        <div className="study-nav-inner">
          <a href="#home" className="study-brand" onClick={exitThen()}>
            <span className="study-brand-mark"><Leaf className="w-4 h-4" /></span>
            <span className="study-brand-text">
              <strong>SciNotes</strong>
              <small>Pearson IAL Sciences</small>
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

      {/* ── A subject page ─────────────────────────────────────── */}
      {!note && subject && (
        <main className="study-main">
          <SubjectView subject={subject} />
        </main>
      )}

      {/* ── Home ───────────────────────────────────────────────── */}
      {!note && !subject && (
        <main className="study-main">
          {/* Hero */}
          <section id="home" className="study-hero">
            <div className="study-hero-copy">
              <span className="study-badge"><Sparkles className="w-3.5 h-3.5" /> Pearson Edexcel International AS &amp; A Level</span>
              <h1 className="study-h1">
                Biology, Chemistry &amp; Physics<br />
                <span className="study-accent-text">revision, organised for the exam.</span>
              </h1>
              <p className="study-lede">
                Clear, syllabus-aligned notes for every unit of Pearson IAL Biology, Chemistry and
                Physics — with revision topics, required practicals and exam practice, all in one place.
              </p>
              <div className="study-hero-actions">
                <a href="#subjects" className="study-btn study-btn-primary study-btn-lg" onClick={exitThen()}>
                  Browse the subjects <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#revision" className="study-btn study-btn-ghost study-btn-lg" onClick={exitThen()}>Start revising</a>
              </div>
              <div className="study-hero-stats">
                <span><strong>3</strong> subjects</span>
                <span><strong>18</strong> units covered</span>
                <span><strong>65</strong> revision topics</span>
              </div>
            </div>

            <div className="study-hero-card">
              <div className="study-hero-card-head">
                <span className="study-hero-card-dot" />
                <span>Today’s revision · mixed set</span>
              </div>
              <ul className="study-checklist">
                {TODAY_REVISION.map(item => (
                  <li key={item.slug}>
                    <CheckCircle2 className="w-4 h-4" />
                    <a href={`#/notes/${item.slug}`} onClick={exitThen()}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="study-hero-card-foot">
                <span><Clock className="w-3.5 h-3.5" /> ~45 min session</span>
                <span><Layers className="w-3.5 h-3.5" /> 12 flashcards due</span>
              </div>
            </div>
          </section>

          {/* Subjects */}
          <section id="subjects" className="study-section">
            <div className="study-section-head">
              <p className="study-eyebrow">Subjects</p>
              <h2 className="study-h2">Three subjects, every unit, nothing off the spec.</h2>
              <p className="study-sub">Each subject breaks down into units and focused revision topics with notes, diagrams and exam tips.</p>
            </div>
            <div className="study-grid study-grid-3">
              {SUBJECTS.map(s => {
                const Icon = SUBJECT_ICONS[s.slug] ?? ClipboardList;
                return (
                  <a key={s.slug} href={`#/subject/${s.slug}`} className="study-card study-card-link" onClick={exitThen()}>
                    <div className="study-card-top">
                      <span className="study-icon"><Icon className="w-4.5 h-4.5" /></span>
                      <span className="study-code">{s.units.length} units · {topicCount(s)} topics</span>
                    </div>
                    <h3 className="study-card-title">{s.name} notes &amp; revision</h3>
                    <p className="study-card-copy">{s.blurb}</p>
                    <div className="study-chips">
                      {s.units.slice(0, 3).map(u => (
                        <span key={u.code} className="study-chip">{u.code.split(' · ')[0]}</span>
                      ))}
                      <span className="study-chip">+{s.units.length - 3} more</span>
                    </div>
                    <span className="study-card-more">Browse {s.name.toLowerCase()} topics <ArrowRight className="w-3.5 h-3.5" /></span>
                  </a>
                );
              })}
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
            <PapersTable />
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
                SciNotes collects the notes, diagrams and practice material we wish we’d had — kept
                up to date with the Pearson IAL Biology, Chemistry and Physics specifications and
                free to use while revising.
              </p>
            </div>
          </section>
        </main>
      )}

      <footer className="study-footer">
        <div className="study-footer-inner">
          <a href="#home" className="study-brand" onClick={exitThen()}>
            <span className="study-brand-mark"><Leaf className="w-4 h-4" /></span> SciNotes
          </a>
          <nav className="study-footer-links" aria-label="Footer">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="study-link" onClick={exitThen()}>{link.label}</a>
            ))}
          </nav>
          <span className="study-footer-note">Study notes for revision purposes · Pearson IAL Sciences</span>
        </div>
      </footer>
    </div>
  );
}
