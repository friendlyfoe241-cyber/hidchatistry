import type { Note } from './types';

export const unit1Notes: Note[] = [
  {
    slug: 'biological-molecules',
    unit: 'Unit 1 · WBI11',
    unitName: 'Molecules, Cells and Gas Exchange',
    title: 'Biological molecules',
    intro: 'Life is built from a small set of elements — mainly carbon, hydrogen, oxygen and nitrogen — assembled into four major groups of biological molecules: carbohydrates, lipids, proteins and nucleic acids. Each group has a structure precisely matched to its function, and most are polymers built from repeating subunits.',
    sections: [
      {
        heading: 'Monomers, polymers and the reactions that join them',
        defs: [
          ['Monomer', 'A small molecule from which larger molecules are made, e.g. glucose, amino acids, nucleotides.'],
          ['Polymer', 'Many monomers joined covalently in a long chain, e.g. starch, proteins, DNA.'],
          ['Condensation reaction', 'Two molecules join with the formation of a covalent bond and the release of a molecule of water.'],
          ['Hydrolysis', 'A molecule of water is used to break a covalent bond, splitting a polymer into its monomers.'],
        ],
        bullets: [
          'Glycosidic bonds join monosaccharides; peptide bonds join amino acids; phosphodiester bonds join nucleotides.',
          'Digestion is hydrolysis: amylase, protease and lipase break polymers down for absorption.',
        ],
      },
      {
        heading: 'Carbohydrates',
        bullets: [
          'Glucose is a hexose sugar. α-glucose forms starch and glycogen; β-glucose forms cellulose.',
          'Maltose = two glucose molecules joined by a glycosidic bond in a condensation reaction.',
          'Starch (plants): amylose is unbranched and coiled (compact storage); amylopectin is branched so it can be hydrolysed rapidly.',
          'Glycogen (animals): even more highly branched than amylopectin — more ends for rapid glucose release when energy is needed.',
          'Cellulose (plant cell walls): straight chains of β-glucose joined by β-1,4 glycosidic bonds; chains run parallel and hydrogen-bond to form microfibrils — strong and rigid, resists osmotic lysis.',
        ],
        table: {
          head: ['Molecule', 'Monomer', 'Bond', 'Function'],
          rows: [
            ['Starch', 'α-glucose', 'Glycosidic', 'Energy storage in plants'],
            ['Glycogen', 'α-glucose', 'Glycosidic', 'Energy storage in animals'],
            ['Cellulose', 'β-glucose', 'Glycosidic', 'Structural support in plant cell walls'],
          ],
        },
      },
      {
        heading: 'Lipids',
        bullets: [
          'Triglycerides: glycerol + three fatty acids joined by ester bonds in condensation reactions. Very hydrophobic, insoluble — excellent energy store (more energy per gram than carbohydrate) and insulation.',
          'Phospholipids: only two fatty acids plus a phosphate group. The phosphate head is hydrophilic and the tails are hydrophobic, so phospholipids form bilayers — the basis of all cell membranes.',
          'Steroids such as cholesterol are lipids too: cholesterol sits between phospholipids and regulates membrane fluidity; steroid hormones (testosterone, oestrogen) are derived from cholesterol.',
        ],
      },
      {
        heading: 'Proteins',
        bullets: [
          'Amino acid: amine group (–NH₂), carboxyl group (–COOH), hydrogen and a variable R group. Peptide bonds join amino acids; a polypeptide is the resulting chain.',
          'Primary structure: the sequence of amino acids, determined by the gene.',
          'Secondary structure: the chain coils into an α-helix or folds into β-pleated sheets, held by hydrogen bonds.',
          'Tertiary structure: the 3-D shape held by hydrogen bonds, ionic bonds, disulfide bridges and hydrophobic interactions between R groups.',
          'Quaternary structure: two or more polypeptides together, e.g. haemoglobin (4 subunits) and collagen (3 chains).',
        ],
      },
      {
        heading: 'Enzymes',
        defs: [
          ['Activation energy', 'The energy needed to start a reaction; enzymes lower it.'],
          ['Active site', 'The region of the enzyme whose shape is complementary to the substrate.'],
        ],
        bullets: [
          'Enzymes are globular proteins; the active site is formed by the tertiary structure.',
          'Induced fit: the substrate binding slightly alters the active site shape, straining bonds in the substrate and lowering activation energy.',
          'Rate rises with temperature until the optimum, then falls sharply as bonds holding the tertiary structure break and the enzyme denatures.',
          'pH changes alter the charges on R groups and can disrupt ionic bonds — each enzyme has an optimum pH.',
          'Increasing substrate concentration increases rate until all active sites are saturated (Vmax).',
          'Competitive inhibitors resemble the substrate and block the active site; non-competitive inhibitors bind elsewhere, change the tertiary structure and distort the active site.',
        ],
      },
      {
        heading: 'Nucleic acids and ATP',
        bullets: [
          'A nucleotide = pentose sugar + phosphate group + organic base. DNA uses deoxyribose and bases A, T, C, G; RNA uses ribose and U instead of T.',
          'DNA is a double helix of two antiparallel strands; complementary base pairing (A–T, C–G) with hydrogen bonds makes it stable and semi-conservative when replicated.',
          'RNA is usually single-stranded: mRNA copies the gene, tRNA carries amino acids, rRNA forms ribosomes.',
          'ATP (adenosine triphosphate) = adenine + ribose + three phosphates. Hydrolysis to ADP + Pi releases energy for muscle contraction, active transport and protein synthesis — a universal, immediate energy source.',
        ],
      },
    ],
    examTip: 'Structure–function comparisons are a favourite 3–4 mark question. Name the structural feature (branching, straight chains, R groups), the bond involved, and the consequence for function (more ends for rapid hydrolysis, strength, solubility).',
  },
  {
    slug: 'cells-and-microscopy',
    unit: 'Unit 1 · WBI11',
    unitName: 'Molecules, Cells and Gas Exchange',
    title: 'Cells & microscopy',
    intro: 'All organisms are built from cells. Comparing prokaryotic and eukaryotic cells, understanding what each organelle does, and being able to calculate magnification are core skills for every unit of the specification.',
    sections: [
      {
        heading: 'Prokaryotic vs eukaryotic cells',
        table: {
          head: ['Feature', 'Prokaryotic (bacteria)', 'Eukaryotic'],
          rows: [
            ['Size', '1–5 µm', '10–100 µm'],
            ['DNA', 'Circular, free in cytoplasm; plasmids', 'Linear, in nucleus with histones'],
            ['Organelles', 'No membrane-bound organelles', 'Membrane-bound nucleus, mitochondria, ER, Golgi, lysosomes…'],
            ['Ribosomes', '70S (smaller)', '80S'],
            ['Cell wall', 'Murein (peptidoglycan)', 'Cellulose (plants), chitin (fungi), none (animals)'],
          ],
        },
      },
      {
        heading: 'Organelles and their functions',
        bullets: [
          'Nucleus: double membrane with pores; stores chromosomes; the nucleolus makes ribosomes.',
          'Mitochondria: double membrane; inner membrane folded into cristae; site of aerobic respiration and ATP production.',
          'Ribosomes (70S/80S): site of protein synthesis.',
          'Rough ER: ribosome-studded; folds and transports proteins. Smooth ER: lipid synthesis and detoxification.',
          'Golgi apparatus: modifies, packages and secretes proteins in vesicles; makes lysosomes.',
          'Lysosomes: membrane-bound sacs of hydrolytic enzymes (digestion of worn-out organelles, phagocytosis).',
          'Plant-specific: cell wall (cellulose), chloroplasts (photosynthesis — thylakoids, starch grains), permanent vacuole (cell sap, turgor).',
          'Cell surface membrane: phospholipid bilayer with proteins — controls what enters and leaves.',
        ],
      },
      {
        heading: 'The cell cycle and mitosis',
        bullets: [
          'Interphase: G1 growth, S-phase DNA replication, G2 preparation. The cell grows and organelles double.',
          'Mitosis: prophase (chromosomes condense, spindle forms), metaphase (chromosomes align on the equator), anaphase (sister chromatids pulled to poles), telophase (nuclear envelopes reform), then cytokinesis.',
          'Mitosis produces two genetically identical diploid daughter cells — for growth, repair and asexual reproduction.',
          'Mitotic index = cells in mitosis ÷ total cells — used to compare growth rates of tissues such as tumours.',
        ],
      },
      {
        heading: 'Stem cells and differentiation',
        bullets: [
          'Stem cells divide to produce more stem cells (self-renewal) and can differentiate into specialised cells.',
          'Embryonic stem cells are pluripotent (can become any cell type); adult stem cells are multipotent (limited range).',
          'Differentiation happens because different genes are expressed in different cells — the DNA is identical, the proteins made are not.',
          'Therapeutic use raises ethical issues: embryo destruction vs. potential cures for conditions such as leukaemia and spinal injury.',
        ],
      },
      {
        heading: 'Microscopy and magnification',
        defs: [
          ['Magnification', 'How many times larger the image is than the actual object. M = image size ÷ actual size.'],
          ['Resolution', 'The minimum distance apart two objects can be and still be seen as separate.'],
        ],
        bullets: [
          'Light microscope: maximum magnification ×1500, resolution ~200 nm. Specimens can be living; often stained (iodine for starch, methylene blue for nuclei).',
          'Transmission electron microscope (TEM): ×500,000, resolution ~0.1 nm — detailed 2-D images of internal structures.',
          'Scanning electron microscope (SEM): ×100,000 — 3-D images of surfaces.',
          'Electron micrographs require vacuum and dead specimens; preparation artefacts can appear.',
          'Always convert units before calculating: 1 mm = 1000 µm = 1 000 000 nm.',
        ],
      },
    ],
    examTip: 'Magnification questions almost always involve a unit conversion. Write the formula (M = image ÷ actual), convert everything to the same unit, and check whether the answer makes sense (cells are usually 10–100 µm).',
  },
  {
    slug: 'exchange-and-transport',
    unit: 'Unit 1 · WBI11',
    unitName: 'Molecules, Cells and Gas Exchange',
    title: 'Exchange and transport',
    intro: 'Every cell needs a supply of nutrients and oxygen and a way to remove waste. Small organisms do this by diffusion across their surface; larger organisms need specialised exchange surfaces and transport systems to overcome the limitations of diffusion.',
    sections: [
      {
        heading: 'Diffusion and the factors that affect it',
        defs: [
          ['Diffusion', 'The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, until evenly distributed.'],
          ['Fick’s law', 'Rate of diffusion ∝ (surface area × difference in concentration) ÷ thickness of the exchange surface.'],
        ],
        bullets: [
          'As organisms get larger, their volume (and so metabolic need) rises faster than their surface area — the SA:V ratio falls, so large organisms need specialised exchange surfaces.',
          'Exchange surfaces share features: large surface area, thin walls (short diffusion path), a maintained concentration gradient (ventilation / blood supply), and a mechanism for transporting substances away.',
          'Examples: alveoli, villi of the ileum, root hair cells, gill lamellae.',
        ],
      },
      {
        heading: 'Movement across membranes',
        bullets: [
          'Simple diffusion: small, non-polar molecules (O₂, CO₂) pass straight through the phospholipid bilayer.',
          'Facilitated diffusion: polar molecules and ions pass through channel or carrier proteins, still down the concentration gradient — no ATP needed.',
          'Osmosis: the net movement of water from a region of higher water potential to lower water potential through a partially permeable membrane. Pure water has a water potential of 0 kPa; solutes make it more negative.',
          'Active transport: carrier proteins and ATP move substances against a concentration gradient, e.g. uptake of mineral ions by root hairs, glucose reabsorption in the kidney.',
        ],
      },
      {
        heading: 'Transport in plants',
        bullets: [
          'Xylem carries water and mineral ions upwards from roots to leaves; vessels are dead, hollow and lignified.',
          'Transpiration: water evaporates from mesophyll cell walls and diffuses out of the stomata. The loss creates a tension that pulls the water column up — the transpiration stream (cohesion–tension theory). Water molecules cohere because of hydrogen bonding.',
          'Transpiration rate increases with light intensity (stomata open), temperature, wind and low humidity.',
          'Phloem transports sucrose from sources (leaves, storage organs) to sinks (roots, growing tips) — translocation.',
          'Phloem loading at the source uses active transport; the mass flow hypothesis suggests solutes are moved by a pressure gradient from high (source) to low (sink) pressure.',
        ],
      },
      {
        heading: 'Transport in animals',
        bullets: [
          'Open circulatory systems (insects): blood bathes organs directly. Closed systems (mammals): blood stays in vessels — higher pressure, faster delivery.',
          'Single circulation (fish): heart → gills → body → heart. Double circulation (mammals): heart → lungs → heart → body → heart — blood is re-pressurised so it reaches tissues quickly.',
          'Arteries: thick muscular, elastic walls for high pressure. Capillaries: one cell thick for exchange. Veins: thin walls with valves to prevent backflow.',
          'Haemoglobin binds oxygen in the lungs where pO₂ is high and releases it in respiring tissues where pO₂ is low.',
          'The oxygen dissociation curve shifts right in respiring tissues (Bohr effect): CO₂ lowers haemoglobin’s affinity for oxygen, so more oxygen is unloaded where it is needed.',
        ],
      },
    ],
    examTip: '“Explain how X is adapted for its function” needs the feature, the science behind it, and the benefit — e.g. “thin walls (1–2 cells) → short diffusion path → faster exchange”. Avoid writing the feature on its own.',
  },
  {
    slug: 'gas-exchange',
    unit: 'Unit 1 · WBI11',
    unitName: 'Molecules, Cells and Gas Exchange',
    title: 'Gas exchange',
    intro: 'Gas exchange always happens across a moist, thin surface down a concentration gradient. The structure of the gas-exchange surface in fish, insects, leaves and mammals reflects the environment each organism lives in.',
    sections: [
      {
        heading: 'The principles',
        bullets: [
          'Oxygen diffuses in and carbon dioxide diffuses out along concentration gradients maintained by ventilation and blood flow.',
          'Fick’s law again: large surface area, thin walls, steep concentration gradient, short diffusion distance.',
          'Single-celled organisms exchange gases directly across the cell surface membrane — their SA:V ratio is large enough.',
        ],
      },
      {
        heading: 'Fish gills',
        bullets: [
          'Gills are made of gill filaments carrying lamellae — thin, flattened, richly supplied with blood, giving a huge surface area.',
          'Water is taken in through the mouth and forced over the gills; blood flows through the lamellae in the opposite direction to the water (counter-current flow).',
          'Counter-current flow maintains a concentration gradient along the whole length of the lamellae, so diffusion is efficient at every point.',
        ],
      },
      {
        heading: 'Insects: the tracheal system',
        bullets: [
          'Air enters through spiracles (pores that can close to limit water loss) and travels through tracheae reinforced with chitin, branching into tracheoles that reach individual cells.',
          'Oxygen diffuses straight to respiring tissue — no transport pigment is needed, and the diffusion distance is tiny.',
          'During flight, muscles contract and relax, pumping air in and out; fluid in the tracheole tips retracts, exposing more surface area.',
        ],
      },
      {
        heading: 'Leaves',
        bullets: [
          'Stomata (usually on the lower epidermis) allow gas exchange; the mesophyll has air spaces so gases can diffuse quickly to every cell.',
          'Guard cells control the stomatal pore: when they take up K⁺ ions, water follows by osmosis, they become turgor and the pore opens (light, low CO₂); in darkness or drought they lose water and the pore closes.',
          'Closing stomata conserves water but limits photosynthesis — the classic trade-off.',
        ],
      },
      {
        heading: 'Alveoli and ventilation in mammals',
        bullets: [
          'Around 300 million alveoli give a surface area of roughly 70 m²; each alveolus is one cell thick, moist, and wrapped in capillaries.',
          'Breathing in (active): the diaphragm contracts and flattens, external intercostal muscles raise the ribs → thorax volume increases → pressure decreases → air rushes in.',
          'Breathing out (quiet, passive): the diaphragm and intercostals relax → volume decreases → pressure increases → air is forced out.',
          'Tidal ventilation means fresh air mixes with stale air, so the gradient is maintained but never maximal — unlike the counter-current system in fish.',
        ],
      },
    ],
    examTip: 'Compare, don’t list. A 4-mark comparison question (e.g. gills vs alveoli) should make parallel points: surface area, diffusion distance, how the gradient is maintained, and water conservation.',
  },
];
