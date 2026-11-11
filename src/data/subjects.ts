// Subject registry: the menus, unit cards, topic links and exam tables on the
// site are all driven from here. Topic slugs point at notes in data/notes.

export interface SubjectTopic {
  label: string;
  slug: string;
}

export interface SubjectUnit {
  code: string;
  title: string;
  copy: string;
  topics: SubjectTopic[];
}

export interface SubjectPaper {
  unit: string;
  paper: string;
  time: string;
  marks: string;
}

export interface Subject {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  units: SubjectUnit[];
  papers: SubjectPaper[];
}

export const SUBJECTS: Subject[] = [
  {
    slug: 'biology',
    name: 'Biology',
    tagline: 'Molecules, cells, organisms and ecosystems',
    blurb: 'Every unit of Pearson IAL Biology — from biological molecules and cells to genetics, physiology and ecology.',
    units: [
      {
        code: 'Unit 1 · WBI11',
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
        title: 'Practical Skills in Biology II',
        copy: 'Advanced practical techniques and the quantitative skills assessed alongside Units 3 and 4.',
        topics: [
          { label: 'Advanced practical techniques', slug: 'advanced-practical-techniques' },
          { label: 'Graphs & statistical tests', slug: 'statistical-tests' },
          { label: 'Scientific method', slug: 'scientific-method' },
        ],
      },
    ],
    papers: [
      { unit: 'Unit 1 — Molecules, Cells and Gas Exchange', paper: 'WBI11/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 2 — Reproduction, Inheritance and Evolution', paper: 'WBI12/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 3 — Energy, Exercise and Coordination', paper: 'WBI13/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 4 — Genetics, Populations and Ecosystems', paper: 'WBI14/01', time: '1h 30m', marks: '80 marks' },
    ],
  },
  {
    slug: 'chemistry',
    name: 'Chemistry',
    tagline: 'Atoms, bonding, reactions and organic synthesis',
    blurb: 'Notes for Pearson IAL Chemistry — atomic structure, bonding, calculations, kinetics, equilibria and the whole of organic chemistry.',
    units: [
      {
        code: 'Unit 1 · WCH11',
        title: 'Structure, Bonding and Introduction to Organic Chemistry',
        copy: 'What atoms are made of, how they bond, the shapes molecules adopt, and how organic chemistry is named and drawn.',
        topics: [
          { label: 'Atomic structure & ionisation energies', slug: 'atomic-structure' },
          { label: 'Bonding & structure', slug: 'bonding-and-structure' },
          { label: 'Shapes of molecules & intermolecular forces', slug: 'molecular-shapes' },
          { label: 'Introduction to organic chemistry', slug: 'intro-organic' },
        ],
      },
      {
        code: 'Unit 2 · WCH12',
        title: 'Energetics, Group Chemistry, Halogenoalkanes, Alcohols and Amounts of Substance',
        copy: 'Moles and stoichiometry, enthalpy changes, the chemistry of Groups 2 and 7, and the first major functional groups.',
        topics: [
          { label: 'Amounts of substance', slug: 'moles-and-stoichiometry' },
          { label: 'Energetics', slug: 'energetics' },
          { label: 'Group 2 & Group 7', slug: 'group-chemistry' },
          { label: 'Halogenoalkanes', slug: 'halogenoalkanes' },
          { label: 'Alcohols', slug: 'alcohols' },
        ],
      },
      {
        code: 'Unit 3 · WCH13',
        title: 'Practical Skills in Chemistry I',
        copy: 'Titration, colorimetry and core laboratory techniques, plus planning and measurement skills.',
        topics: [
          { label: 'Core practical techniques', slug: 'chem-practical-techniques' },
          { label: 'Planning & measurement', slug: 'chem-planning' },
        ],
      },
      {
        code: 'Unit 4 · WCH14',
        title: 'Rates, Equilibria and Further Organic Chemistry',
        copy: 'How fast reactions go, how far they go, pH and buffers, and the chemistry of carbonyls, acids and aromatic compounds.',
        topics: [
          { label: 'Rates of reaction', slug: 'rates-of-reaction' },
          { label: 'Equilibria', slug: 'equilibria' },
          { label: 'Acids, bases & pH', slug: 'acids-and-bases' },
          { label: 'Carbonyls & carboxylic acids', slug: 'carbonyls-and-carboxylic-acids' },
          { label: 'Aromatic chemistry', slug: 'aromatic-chemistry' },
        ],
      },
      {
        code: 'Unit 5 · WCH15',
        title: 'Transition Metals and Organic Nitrogen Chemistry',
        copy: 'Complex ions, colour and catalysis, amines and amino acids, and the analytical techniques used to identify compounds.',
        topics: [
          { label: 'Transition metals', slug: 'transition-metals' },
          { label: 'Amines & amino acids', slug: 'amines-and-amino-acids' },
          { label: 'Synthesis & analysis', slug: 'synthesis-and-analysis' },
        ],
      },
      {
        code: 'Unit 6 · WCH16',
        title: 'Practical Skills in Chemistry II',
        copy: 'Data analysis, uncertainty and the classic investigations assessed alongside Units 4 and 5.',
        topics: [
          { label: 'Data analysis & uncertainty', slug: 'chem-data-analysis' },
          { label: 'Classic investigations', slug: 'chem-investigations' },
        ],
      },
    ],
    papers: [
      { unit: 'Unit 1 — Structure, Bonding and Intro to Organic', paper: 'WCH11/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 2 — Energetics, Groups & Amounts of Substance', paper: 'WCH12/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 4 — Rates, Equilibria and Further Organic', paper: 'WCH14/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 5 — Transition Metals & Organic Nitrogen', paper: 'WCH15/01', time: '1h 30m', marks: '80 marks' },
    ],
  },
  {
    slug: 'physics',
    name: 'Physics',
    tagline: 'Mechanics, waves, fields and the quantum world',
    blurb: 'Notes for Pearson IAL Physics — mechanics, materials, waves, electricity, thermal physics, fields, nuclear and particle physics.',
    units: [
      {
        code: 'Unit 1 · WPH11',
        title: 'Mechanics and Materials',
        copy: 'Motion, forces, energy and momentum — and how real materials respond when you push, pull and stretch them.',
        topics: [
          { label: 'Motion & forces', slug: 'motion-and-forces' },
          { label: 'Work, energy & power', slug: 'work-energy-and-power' },
          { label: 'Momentum & collisions', slug: 'momentum-and-collisions' },
          { label: 'Materials', slug: 'materials' },
        ],
      },
      {
        code: 'Unit 2 · WPH12',
        title: 'Waves and Electricity',
        copy: 'The behaviour of waves — reflection, refraction, diffraction and interference — and the physics of electric circuits.',
        topics: [
          { label: 'Wave properties', slug: 'wave-properties' },
          { label: 'Superposition & diffraction', slug: 'superposition' },
          { label: 'Direct current circuits', slug: 'dc-circuits' },
        ],
      },
      {
        code: 'Unit 3 · WPH13',
        title: 'Practical Skills in Physics I',
        copy: 'Measurement, precision and planning — the experimental skills assessed alongside Units 1 and 2.',
        topics: [
          { label: 'Measurement & precision', slug: 'physics-measurement' },
          { label: 'Planning investigations', slug: 'physics-planning' },
        ],
      },
      {
        code: 'Unit 4 · WPH14',
        title: 'Further Mechanics and Thermal Physics',
        copy: 'Circular motion, oscillations, heat and temperature, and the behaviour of ideal gases.',
        topics: [
          { label: 'Circular motion', slug: 'circular-motion' },
          { label: 'Simple harmonic motion', slug: 'simple-harmonic-motion' },
          { label: 'Thermal physics & temperature', slug: 'thermal-physics' },
          { label: 'Ideal gases', slug: 'ideal-gases' },
        ],
      },
      {
        code: 'Unit 5 · WPH15',
        title: 'Fields and Nuclear Physics',
        copy: 'Gravitational, electric and magnetic fields, radioactivity, fission and fusion, quarks and leptons, and the stars.',
        topics: [
          { label: 'Gravitational fields', slug: 'gravitational-fields' },
          { label: 'Electric & magnetic fields', slug: 'electromagnetic-fields' },
          { label: 'Nuclear physics', slug: 'nuclear-physics' },
          { label: 'Particle physics', slug: 'particle-physics' },
          { label: 'Astrophysics', slug: 'astrophysics' },
        ],
      },
      {
        code: 'Unit 6 · WPH16',
        title: 'Practical Skills in Physics II',
        copy: 'Data analysis, statistics and the classic investigations assessed alongside Units 4 and 5.',
        topics: [
          { label: 'Data analysis & statistics', slug: 'physics-data-analysis' },
          { label: 'Classic investigations', slug: 'physics-investigations' },
        ],
      },
    ],
    papers: [
      { unit: 'Unit 1 — Mechanics and Materials', paper: 'WPH11/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 2 — Waves and Electricity', paper: 'WPH12/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 4 — Further Mechanics and Thermal Physics', paper: 'WPH14/01', time: '1h 30m', marks: '80 marks' },
      { unit: 'Unit 5 — Fields and Nuclear Physics', paper: 'WPH15/01', time: '1h 30m', marks: '80 marks' },
    ],
  },
];

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find(s => s.slug === slug);
}

/** The subject that owns a given topic slug (for note breadcrumbs). */
export function subjectOfTopic(topicSlug: string): Subject | undefined {
  return SUBJECTS.find(s => s.units.some(u => u.topics.some(t => t.slug === topicSlug)));
}

export function topicCount(subject: Subject): number {
  return subject.units.reduce((n, u) => n + u.topics.length, 0);
}
