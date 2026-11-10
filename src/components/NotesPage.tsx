import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, ListTree } from 'lucide-react';
import type { Note } from '../data/notes';
import { siblingsOf, neighboursOf } from '../data/notes';

interface NotesPageProps {
  note: Note;
}

/**
 * Renders one revision note: breadcrumb, content sections (paragraphs,
 * bullets, definitions, tables, links), an exam tip and prev/next navigation.
 * Navigation uses in-page hashes (#/notes/<slug>), so clicking a link exits
 * the messaging layer via the shell's click handling.
 */
export function NotesPage({ note }: NotesPageProps) {
  const siblings = siblingsOf(note);
  const { prev, next } = neighboursOf(note);

  return (
    <div className="study-note-wrap">
      <div className="study-note-main">
        <nav className="study-crumb" aria-label="Breadcrumb">
          <a href="#home" className="study-link">Home</a>
          <span>/</span>
          <a href="#topics" className="study-link">Topics</a>
          <span>/</span>
          <span className="study-crumb-current">{note.title}</span>
        </nav>

        <p className="study-eyebrow">{note.unit} · {note.unitName}</p>
        <h1 className="study-note-title">{note.title}</h1>
        <p className="study-note-intro">{note.intro}</p>

        {note.sections.map((section, i) => (
          <section key={section.heading} id={`note-sec-${i}`} className="study-note-section">
            <h2>{section.heading}</h2>

            {section.p?.map((para, i) => <p key={i}>{para}</p>)}

            {section.defs && (
              <dl className="study-defs">
                {section.defs.map(([term, meaning]) => (
                  <div key={term} className="study-def">
                    <dt>{term}</dt>
                    <dd>{meaning}</dd>
                  </div>
                ))}
              </dl>
            )}

            {section.bullets && (
              <ul>
                {section.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}

            {section.table && (
              <div className="study-table-wrap">
                <table className="study-table">
                  <thead>
                    <tr>{section.table.head.map(h => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.links && (
              <ul className="study-note-links">
                {section.links.map(link => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <p>{link.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="study-note-tip">
          <span className="study-note-tip-icon"><Lightbulb className="w-4 h-4" /></span>
          <div>
            <strong>Exam tip</strong>
            <p>{note.examTip}</p>
          </div>
        </div>

        <div className="study-note-nav">
          {prev ? (
            <a href={`#/notes/${prev.slug}`} className="study-btn study-btn-ghost">
              <ArrowLeft className="w-4 h-4" /> {prev.title}
            </a>
          ) : <span />}
          <a href="#topics" className="study-btn study-btn-ghost"><ListTree className="w-4 h-4" /> All topics</a>
          {next ? (
            <a href={`#/notes/${next.slug}`} className="study-btn study-btn-ghost">
              {next.title} <ArrowRight className="w-4 h-4" />
            </a>
          ) : <span />}
        </div>
      </div>

      <aside className="study-note-rail">
        <div className="study-note-rail-box">
          <h3><BookOpen className="w-4 h-4" /> In this unit</h3>
          <ul>
            {siblings.map(s => (
              <li key={s.slug}>
                <a href={`#/notes/${s.slug}`} className={s.slug === note.slug ? 'study-note-rail-active' : undefined}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="study-note-rail-box">
          <h3>On this page</h3>
          <ul>
            {note.sections.map((s, i) => (
              <li key={s.heading}>
                <button type="button" onClick={() =>
                  document.getElementById(`note-sec-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }>{s.heading}</button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
