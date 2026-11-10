import type { Note } from './types';

export const extrasNotes: Note[] = [
  {
    slug: 'key-definitions',
    unit: 'Revision resources',
    unitName: 'Study skills',
    title: 'Key definitions',
    intro: 'Examiners award definition marks for precise wording. These are the definitions worth learning verbatim — practise writing them out until they are automatic.',
    sections: [
      {
        heading: 'Molecules and cells',
        defs: [
          ['Active transport', 'The movement of molecules or ions across a membrane, against a concentration gradient, using ATP and carrier proteins.'],
          ['Osmosis', 'The net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.'],
          ['Diffusion', 'The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient.'],
          ['Enzyme', 'A biological catalyst: a globular protein that speeds up reactions by lowering activation energy, without being used up.'],
          ['Hydrolysis', 'A reaction in which a molecule of water is used to break a covalent bond.'],
          ['Condensation', 'A reaction in which two molecules join with the formation of a covalent bond and the release of a molecule of water.'],
          ['Gene', 'A sequence of DNA bases that codes for the amino acid sequence of a polypeptide.'],
          ['Species', 'A group of similar organisms able to breed and produce fertile offspring.'],
        ],
      },
      {
        heading: 'Exchange, transport and coordination',
        defs: [
          ['Transpiration', 'The loss of water vapour from plant leaves through the stomata by evaporation and diffusion.'],
          ['Action potential', 'A rapid change in the potential difference across a neurone membrane, caused by the movement of Na⁺ and K⁺ ions.'],
          ['Synapse', 'The junction between two neurones, or a neurone and an effector, where a chemical neurotransmitter transmits the signal.'],
          ['Hormone', 'A chemical messenger produced by an endocrine gland, secreted into the blood, acting on target cells with specific receptors.'],
          ['Homeostasis', 'The maintenance of a constant internal environment within restricted limits.'],
          ['Excretion', 'The removal of the waste products of metabolism, toxic materials and excess substances from an organism.'],
          ['Negative feedback', 'A mechanism that reverses a deviation from the normal level, restoring the original conditions.'],
        ],
      },
      {
        heading: 'Genetics, evolution and ecology',
        defs: [
          ['Allele', 'A different version of a gene.'],
          ['Genotype', 'The genetic constitution of an organism.'],
          ['Phenotype', 'The observable characteristics of an organism, determined by its genotype and the environment.'],
          ['Natural selection', 'The process by which individuals with characteristics better suited to the environment are more likely to survive, reproduce and pass on their alleles.'],
          ['Adaptation', 'An inherited characteristic that increases the chance of survival and reproduction in a particular environment.'],
          ['Speciation', 'The formation of new species when populations become reproductively isolated and their gene pools diverge.'],
          ['Biodiversity', 'The variety of all the different species of organisms on Earth (or within an ecosystem), including their genetic variation and the ecosystems in which they live.'],
          ['Gene pool', 'All the alleles of all the genes in a population at a given time.'],
          ['NPP', 'Net primary production: the chemical energy stored in plant biomass after respiration losses — available to the next trophic level.'],
          ['Climax community', 'The final, stable community reached at the end of succession for a given habitat.'],
        ],
      },
    ],
    examTip: 'In definition questions, watch the command word: “define” wants the precise wording; “state what is meant by” accepts your own clear explanation; “describe” wants what happens, not a definition.',
  },
  {
    slug: 'practical-handbook',
    unit: 'Revision resources',
    unitName: 'Study skills',
    title: 'Required practicals handbook',
    intro: 'Every paper can ask about practical work — apparatus, method, variables, safety and evaluation. This handbook summarises the core practical skills and the investigations they are drawn from.',
    sections: [
      {
        heading: 'Core investigations by unit',
        table: {
          head: ['Unit', 'Typical investigations'],
          rows: [
            ['Unit 1', 'Food tests (Benedict’s, iodine, biuret); enzyme activity vs pH/temperature; osmosis in potato tissue; dissection of gill/lung/tissue'],
            ['Unit 2', 'Mitosis in root tips (mitotic index); extraction of DNA; germination rates; field sampling with quadrats and transects'],
            ['Unit 3', 'Effect of temperature on heart rate/Daphnia; respirometers and RQ; reaction times; potometer transpiration'],
            ['Unit 4', 'Enzyme immobilisation; aseptic technique and cultures; PCR/gel electrophoresis simulations; population sampling and index of diversity'],
          ],
        },
      },
      {
        heading: 'Apparatus and what it is for',
        bullets: [
          'Colorimeter/viscometer tubes: absorbance or colour intensity as a proxy for concentration (calibrate first).',
          'Respirometer: oxygen uptake of small organisms; soda lime absorbs CO₂ so the volume change reflects O₂ used.',
          'Potometer: water uptake of a shoot; seal joints with petroleum jelly and cut shoots underwater.',
          'Syringes and graduated pipettes: precise volumes; measuring cylinders for larger volumes.',
          'Water baths: constant temperature; buffers: constant pH.',
          'Microscope + eyepiece graticule: sizes of cells and structures (calibrate with a stage micrometer).',
        ],
      },
      {
        heading: 'Reliability and validity checklist',
        bullets: [
          'Independent variable: at least five values, evenly spread, covering the expected effect.',
          'Dependent variable: measured with appropriate precision and units.',
          'Control variables: named and controlled (with values) — this is what makes the test fair.',
          'Repeats and means; identification and treatment of anomalies.',
          'Controls (positive/negative) where relevant; a pilot to check the method.',
          'Safety: specific hazards and precautions, including biological and chemical hazards.',
        ],
      },
    ],
    examTip: 'Practical questions often ask “how would you make this investigation reliable?” — answer with repeats, means, controlled variables and a wider range of the independent variable, not generic phrases.',
  },
  {
    slug: 'exam-technique',
    unit: 'Revision resources',
    unitName: 'Study skills',
    title: 'Exam technique',
    intro: 'Marks are lost for command words, missing links and unfinished answers far more often than for missing knowledge. A little technique converts revision into marks.',
    sections: [
      {
        heading: 'Command words',
        table: {
          head: ['Command word', 'What the examiner wants'],
          rows: [
            ['State / Give', 'A short factual answer — no explanation needed.'],
            ['Describe', 'What happens or what the data show — trends, sequence, detail.'],
            ['Explain', 'Give reasons and mechanisms — use “because”, link cause to effect.'],
            ['Compare', 'Similarities and differences — “both… whereas…” earns more than two separate descriptions.'],
            ['Suggest', 'Apply knowledge to an unfamiliar situation — a sensible, justified idea.'],
            ['Evaluate', 'Weigh strengths against weaknesses and reach a justified judgement.'],
            ['Determine / Calculate', 'Show working with units; use data from the question.'],
          ],
        },
      },
      {
        heading: 'Timing and structure',
        bullets: [
          'Roughly one mark per minute: a 6-mark extended response deserves about 6–8 minutes.',
          'For “explain” questions, write in linked sentences: fact → mechanism → consequence.',
          'Extended writing: open with a clear point, develop the science, add an example or data reference, and conclude if asked to judge.',
          'Answer in context: use the names, organisms and data given in the question.',
          'Look at the mark allocation — 3 marks means 3 distinct points.',
        ],
      },
      {
        heading: 'Marks most often lost',
        bullets: [
          'Not answering all parts of a question (check the lettering: a, b, c).',
          'Repeating the same point in different words instead of a new point.',
          'Mechanism answers missing the link: “the enzyme denatures” → “so the active site changes shape and the substrate can no longer bind → rate falls”.',
          'Graph work: missing axis labels/units, or conclusions without figures.',
          'Leaving blanks — a reasoned attempt can pick up credit marks.',
        ],
      },
    ],
    examTip: 'Underline command words and data in the question before answering. Examiners place the information you need in the stem — using it is usually worth a mark.',
  },
  {
    slug: 'further-reading',
    unit: 'Revision resources',
    unitName: 'Study skills',
    title: 'Further reading',
    intro: 'Sometimes a topic clicks better from another explanation. These are free, reliable resources that follow the same content as the Pearson specification.',
    sections: [
      {
        heading: 'Free online resources',
        links: [
          {
            label: 'OpenStax Biology 2e',
            href: 'https://openstax.org/details/books/biology-2e',
            description: 'A complete, free university-level biology textbook — excellent for deeper explanations of cells, genetics, evolution and ecology.',
          },
          {
            label: 'Khan Academy — Biology',
            href: 'https://www.khanacademy.org/science/biology',
            description: 'Short videos and practice questions on every core topic, from biological molecules to ecosystems.',
          },
          {
            label: 'Pearson Qualifications — International A Levels',
            href: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels.html',
            description: 'The official awarding-body page: specifications, sample assessment materials and subject documents for International A Level Biology.',
          },
        ],
      },
      {
        heading: 'How to use these alongside BioNotes',
        bullets: [
          'Read the BioNotes topic first — it gives you the examinable scope.',
          'Use the video/textbook resources for any mechanism that still feels unclear.',
          'Return to the topic questions and past papers to convert understanding into marks.',
          'Keep the key definitions page ticking over — 10 minutes of recall daily beats re-reading.',
        ],
      },
    ],
    examTip: 'Use extra resources to fill gaps, not to replace active recall. If you can explain a topic out loud without notes, you are ready to answer questions on it.',
  },
];
