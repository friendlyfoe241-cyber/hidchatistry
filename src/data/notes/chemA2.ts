import type { Note } from './types';

export const chemA2Notes: Note[] = [
  {
    slug: 'chem-practical-techniques',
    unit: 'Unit 3 · WCH13',
    unitName: 'Practical Skills in Chemistry I',
    title: 'Core practical techniques',
    intro: 'The practical units reward precise technique: accurate titration, clean separations and correct use of apparatus. These are the techniques every chemistry practical is built from.',
    sections: [
      {
        heading: 'Titration',
        bullets: [
          'Rinse the burette with the solution it will hold and the pipette with the solution it will deliver; rinse the conical flask with distilled water only.',
          'Fill the burette below the eye line, remove the funnel, and read the bottom of the meniscus at eye level (±0.05 cm³).',
          'Run the titrant in quickly until near the end point, then dropwise; swirl constantly. A white tile helps spot the colour change.',
          'Take concordant titres (within 0.10 cm³) and average them; rinse the flask with the same solution to remove residual water.',
          'Pipettes deliver a fixed volume at a stated temperature; burettes measure variable volumes. Never pipette acids or solutions of unknown hazard.',
        ],
      },
      {
        heading: 'Separation techniques',
        bullets: [
          'Simple distillation separates a solvent from a solution (thermometer at the side arm, just below the condenser).',
          'Fractional distillation separates miscible liquids with different boiling points using a fractionating column.',
          'Reflux heats a reaction mixture for a long time without loss of solvent — vertical condenser, anti-bumping granules, water in at the bottom.',
          'Thin-layer / paper chromatography separates mixtures by differential movement; Rf = distance moved by spot ÷ distance moved by solvent.',
          'Filtration, crystallisation (evaporate to crystallising point, cool, filter, dry) and use of a separating funnel for immiscible liquids.',
        ],
      },
      {
        heading: 'Measuring and monitoring',
        bullets: [
          'Colorimetry: absorbance is proportional to concentration (Beer–Lambert); calibrate with standard solutions and use a matched wavelength.',
          'Gas collection: over water (for insoluble gases) or by syringe; measure volume against time for rate studies.',
          'pH meters and probes give continuous readings; universal indicator is for classification only, never for precise pH.',
          'Mass measurements on a 2-decimal balance; volumes in burettes/pipettes; temperatures with a calibrated thermometer or probe.',
        ],
      },
      {
        heading: 'Safety and good practice',
        bullets: [
          'Risk assessment: name the hazard (concentrated acids, toxic chromium(VI), flammable solvents), the risk, and the specific control.',
          'Wear eye protection; use a fume cupboard for volatile/toxic vapours; never pipette by mouth.',
          'Waste: dispose of heavy-metal and organic waste in labelled containers — never down the sink.',
        ],
      },
    ],
    examTip: 'Technique questions want the reason as well as the action: “rinse the burette with the solution — otherwise residual water dilutes it and the titre is inaccurate”. The consequence is the second mark.',
  },
  {
    slug: 'chem-planning',
    unit: 'Unit 3 · WCH13',
    unitName: 'Practical Skills in Chemistry I',
    title: 'Planning & measurement',
    intro: 'Planning questions ask you to design a valid experiment: one independent variable, everything else controlled, and measurements precise enough to support a conclusion.',
    sections: [
      {
        heading: 'Designing the investigation',
        bullets: [
          'State the hypothesis as a prediction (e.g. rate increases with concentration because there are more frequent successful collisions).',
          'Independent variable: at least five values, evenly spread, with repeats. Dependent variable: measured with suitable apparatus and units.',
          'Control variables: name each and state how it is controlled (water bath at 25 °C, same volume of Na₂S₂O₃, same catalyst).',
          'Include a pilot to check the range produces measurable changes in a sensible time.',
          'Safety: specific hazards and controls (exothermic reactions, corrosive acids, toxic gases).',
        ],
      },
      {
        heading: 'Measurement and precision',
        bullets: [
          'Match the apparatus to the quantity: burette (±0.05 cm³) vs measuring cylinder (±0.5 cm³ or worse); balance (±0.001 or 0.01 g).',
          'Uncertainty of one reading = ± half the smallest division; a value measured twice (start/end burette readings) has the sum of the two uncertainties.',
          'Percentage uncertainty = (uncertainty ÷ value) × 100; small readings carry large percentage uncertainties — measure larger quantities where possible.',
          'Significant figures: give the answer to the least number of s.f. used in the data; keep all figures in intermediate steps.',
        ],
      },
      {
        heading: 'Rates and monitoring methods',
        bullets: [
          'Quench-and-titrate: withdraw samples at times, quench (cool/dilute), and titrate against standard solution.',
          'Continuous monitoring: colorimeter, pH probe, gas volume, or mass loss (for CO₂-producing reactions) — plotted as a graph of the measured quantity vs time.',
          'Rate = gradient of the tangent to the curve at a chosen time (draw the tangent, Δy ÷ Δx).',
          'Initial rate from the tangent at t = 0 gives the cleanest comparison between experiments.',
        ],
      },
    ],
    examTip: '“Describe how you would carry out this investigation” should read like a recipe someone else could follow: quantities, apparatus, times and temperatures included. Vague verbs (“heat it”, “add some acid”) score nothing.',
  },
  {
    slug: 'rates-of-reaction',
    unit: 'Unit 4 · WCH14',
    unitName: 'Rates, Equilibria and Further Organic Chemistry',
    title: 'Rates of reaction',
    intro: 'Reaction rate depends on collision frequency and the fraction of collisions with energy ≥ activation energy. Concentration, temperature, surface area and catalysts change those factors — and rate equations quantify exactly how.',
    sections: [
      {
        heading: 'Collision theory and the Boltzmann distribution',
        bullets: [
          'Particles must collide with the correct orientation and energy ≥ activation energy (Ea) for a reaction to occur.',
          'Increasing concentration/pressure increases collision frequency; increasing temperature also increases the proportion of molecules with E ≥ Ea.',
          'The Boltzmann distribution shows the spread of molecular energies: area under the curve = total molecules; the shaded tail beyond Ea = molecules that can react.',
          'A catalyst provides an alternative route with lower Ea, so a greater proportion of molecules can react — it is not consumed.',
        ],
      },
      {
        heading: 'Rate equations',
        defs: [
          ['Rate equation', 'rate = k[A]ᵐ[B]ⁿ, where m and n are orders (from experiment, not the stoichiometry) and k is the rate constant.'],
          ['Order', 'The power to which the concentration of a reactant is raised; zero order = no effect on rate.'],
        ],
        bullets: [
          'Determine orders from initial-rate data: double [A] alone and compare rates; or from a concentration–time graph (zero order = straight line, first order = constant half-life).',
          'Rate-determining step: the slowest step; its reactants appear in the rate equation. Species involved after it do not.',
          'Half-life for a first-order reaction is constant: t½ = ln2 ÷ k.',
          'Arrhenius equation (qualitative): raising temperature increases k exponentially.',
        ],
      },
      {
        heading: 'Catalysis',
        bullets: [
          'Homogeneous catalysts are in the same phase (e.g. Fe²⁺/Fe³⁺ catalysing S₂O₈²⁻ with I⁻); they form intermediate species.',
          'Heterogeneous catalysts are in a different phase (e.g. Fe in Haber process, Pt/Rh in catalytic converters); they work by adsorption onto active sites, reaction, then desorption.',
          'Autocatalysis: a product catalyses the reaction (e.g. Mn²⁺ in the MnO₄⁻/C₂O₄²⁻ reaction) — the rate rises then falls.',
        ],
      },
    ],
    examTip: 'Orders come from experiments, never from the balanced equation. When asked to deduce the rate-determining step, write the species from the rate equation into a single step and say it is the slow step.',
  },
  {
    slug: 'equilibria',
    unit: 'Unit 4 · WCH14',
    unitName: 'Rates, Equilibria and Further Organic Chemistry',
    title: 'Equilibria',
    intro: 'Many reactions are reversible and reach a dynamic equilibrium. Le Chatelier’s principle predicts how conditions shift that equilibrium, and equilibrium constants quantify where it lies.',
    sections: [
      {
        heading: 'Dynamic equilibrium and Le Chatelier',
        bullets: [
          'At equilibrium: forward and reverse reactions occur at equal rates, so concentrations are constant — not equal.',
          'Le Chatelier: a system at equilibrium opposes any change imposed on it — the equilibrium shifts to partially reverse the change.',
          'Increasing pressure shifts equilibrium to the side with fewer gas moles; increasing temperature shifts it in the endothermic direction.',
          'A catalyst changes neither the position nor the yield — it only helps equilibrium be reached faster.',
          'Haber process (N₂ + 3H₂ ⇌ 2NH₃, ΔH negative): 450 °C, 200 atm, Fe catalyst — a compromise between yield, rate and cost.',
        ],
      },
      {
        heading: 'Equilibrium constants',
        bullets: [
          'Kc = [products]^coefficients ÷ [reactants]^coefficients (concentrations at equilibrium, mol dm⁻³).',
          'Kp uses partial pressures (mole fraction × total pressure) for gas-phase equilibria.',
          'K changes with temperature only; concentration and pressure changes alter the position but not K.',
          'Large Kc → equilibrium lies to the right (favour products); small Kc → favours reactants.',
        ],
      },
      {
        heading: 'Reaction quotients and industrial choices',
        bullets: [
          'Qc has the same form as Kc but uses current concentrations: if Q < K the forward reaction is favoured; if Q > K the reverse is favoured.',
          'Industrial conditions balance equilibrium yield against rate and economics: high pressure is expensive but used in Haber (shifts right + faster); in Contact process (2SO₂ + O₂ ⇌ 2SO₃) only 1–2 atm is used as the yield is already high.',
          'Removal of product (NH₃ liquefied, SO₃ absorbed) drives the equilibrium to the right continuously.',
        ],
      },
    ],
    examTip: 'Le Chatelier answers need the change, the direction of shift, and the effect on yield — e.g. “increasing pressure shifts to the side with fewer gas moles (the right), increasing the yield of ammonia”. “It wants to reduce the pressure” alone is not enough.',
  },
  {
    slug: 'acids-and-bases',
    unit: 'Unit 4 · WCH14',
    unitName: 'Rates, Equilibria and Further Organic Chemistry',
    title: 'Acids, bases & pH',
    intro: 'Acids donate protons and bases accept them. pH, Ka and buffers quantify acid strength and the behaviour of buffer solutions — and titration curves put all of it together.',
    sections: [
      {
        heading: 'Brønsted–Lowry theory and pH',
        bullets: [
          'An acid is a proton (H⁺) donor; a base is a proton acceptor. Conjugate pairs differ by one H⁺ (HCl/Cl⁻, CH₃COOH/CH₃COO⁻).',
          'Strong acids (HCl, HNO₃, H₂SO₄) ionise completely; weak acids (CH₃COOH, HCN) ionise partially — strength is about ionisation, not concentration.',
          'pH = −log₁₀[H⁺]; for strong acids [H⁺] = acid concentration (×2 for diprotic H₂SO₄); for weak acids [H⁺] = √(Ka × [HA]).',
          'Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K; for strong bases [OH⁻] = base concentration.',
        ],
      },
      {
        heading: 'Ka, pKa and buffers',
        defs: [
          ['Ka', 'The acid dissociation constant: Ka = [H⁺][A⁻] ÷ [HA]. Larger Ka = stronger acid.'],
          ['Buffer', 'A solution that resists changes in pH when small amounts of acid or base are added.'],
        ],
        bullets: [
          'pKa = −log Ka; at the half-equivalence point of a titration, pH = pKa.',
          'Buffers work by equilibrium: added H⁺ reacts with A⁻ (from the salt), added OH⁻ reacts with HA — [HA] and [A⁻] barely change.',
          'pH of a buffer: pH = pKa + log([A⁻] ÷ [HA]) (Henderson–Hasselbalch).',
          'Biological importance: blood buffer (HCO₃⁻/H₂CO₃) keeps pH near 7.4; enzymes denature outside narrow pH ranges.',
        ],
      },
      {
        heading: 'Titration curves and indicators',
        bullets: [
          'Strong acid + strong base: vertical section pH 3–11, equivalence pH 7.',
          'Weak acid + strong base: vertical ~7–11, equivalence > 7; buffer region around pH = pKa.',
          'Strong acid + weak base: vertical 3–7, equivalence < 7; weak + weak: no vertical section — use a pH meter.',
          'Choose an indicator whose range lies within the vertical section: methyl orange (3.1–4.4) for strong acid titrations, thymolphthalein (9.3–10.5) for weak acid titrations.',
        ],
      },
    ],
    examTip: 'In calculations, show the expression for Ka before substituting. For “why does this solution act as a buffer?” name both components and show what each does with the added H⁺ or OH⁻.',
  },
  {
    slug: 'carbonyls-and-carboxylic-acids',
    unit: 'Unit 4 · WCH14',
    unitName: 'Rates, Equilibria and Further Organic Chemistry',
    title: 'Carbonyls & carboxylic acids',
    intro: 'The C=O group makes aldehydes and ketones reactive towards nucleophiles, and oxidation of the carbonyl gives carboxylic acids and their derivatives — esters, acyl chlorides and amides.',
    sections: [
      {
        heading: 'Aldehydes and ketones',
        bullets: [
          'Aldehydes have the carbonyl at the end of the chain (–CHO); ketones have it within the chain (–CO–).',
          'Nucleophilic addition: cyanide (HCN/KCN) adds across the C=O forming a hydroxynitrile (chain extended by one carbon); the mechanism uses a curly arrow from ⁻:CN to the δ+ carbonyl carbon and from the C=O bond to O.',
          'Reduction: NaBH₄ reduces aldehydes to primary alcohols and ketones to secondary alcohols.',
          'Tests: 2,4-dinitrophenylhydrazine (2,4-DNPH) gives an orange precipitate with any carbonyl (derivative melting point identifies it); Tollens’ reagent (silver mirror) is reduced by aldehydes only; Fehling’s gives a red Cu₂O precipitate with aldehydes.',
        ],
      },
      {
        heading: 'Carboxylic acids',
        bullets: [
          'Weak acids: they react with carbonates (fizzing — the definitive test), metals (H₂), and bases (neutralisation).',
          'Oxidised from primary alcohols or aldehydes with acidified dichromate under reflux; reduced back with LiAlH₄.',
          'Salts (ethanoate) and esters are the main derivatives.',
        ],
      },
      {
        heading: 'Esters and acyl chlorides',
        bullets: [
          'Esterification: carboxylic acid + alcohol with a concentrated H₂SO₄ catalyst under reflux → ester + water (reversible, slow).',
          'Esters hydrolyse with acid (reversible) or with aqueous alkali (saponification — irreversible, gives the carboxylate salt).',
          'Acyl chlorides react violently with water, alcohols and amines → carboxylic acids, esters and amides; faster and higher-yielding than direct esterification.',
          'Uses of esters: solvents, fragrances, plasticisers, biodiesel (transesterification of plant oils).',
        ],
      },
    ],
    examTip: 'Distinguishing tests are common: always give the reagent, the observation (colour/precipitate/mirror) and the conclusion. “It reacts with Tollens’ → silver mirror → it is an aldehyde” is the complete package.',
  },
  {
    slug: 'aromatic-chemistry',
    unit: 'Unit 4 · WCH14',
    unitName: 'Rates, Equilibria and Further Organic Chemistry',
    title: 'Aromatic chemistry',
    intro: 'Benzene’s delocalised ring makes it unusually stable: it undergoes electrophilic substitution rather than addition. The reactions of benzene and of phenol follow from that electron-rich ring and from the –OH group’s ability to activate it.',
    sections: [
      {
        heading: 'Benzene and delocalisation',
        bullets: [
          'Each carbon contributes one p-electron to a delocalised π ring above and below the plane; bond lengths are identical (0.139 nm, between single and double).',
          'Delocalisation makes benzene more stable than the hypothetical “cyclohexa-1,3,5-triene”: hydrogenation of benzene releases less energy than expected (evidence for delocalisation).',
          'Because addition would break the delocalised ring, benzene undergoes substitution — the ring is preserved.',
        ],
      },
      {
        heading: 'Electrophilic substitution',
        bullets: [
          'Nitration: concentrated HNO₃ + concentrated H₂SO₄ at 50 °C produce the nitronium ion NO₂⁺ (electrophile); benzene → nitrobenzene.',
          'Friedel–Crafts acylation/alkylation: RCOCl or RCl with an AlCl₃ catalyst generates RCO⁺ / R⁺.',
          'Mechanism: the π electrons attack the electrophile, forming a positively charged arenium ion intermediate; a base (HSO₄⁻) then removes H⁺ and restores the delocalised ring.',
          'Halogenation with Br₂ needs a halogen carrier (AlCl₃ or FeBr₃) to polarise the Br₂ and form Br⁺.',
        ],
      },
      {
        heading: 'Phenol',
        bullets: [
          'The –OH lone pair overlaps with the ring, making phenol more reactive than benzene — it brominates with bromine water without a catalyst (2,4,6-tribromophenol, white precipitate).',
          'Phenol is weakly acidic (forms phenoxide with NaOH — but not with carbonates; distinguishes it from carboxylic acids).',
          'Nitration of phenol gives a mixture of 2- and 4-nitrophenol at lower temperatures than benzene needs.',
          'Uses: resins, antiseptics, aspirin synthesis.',
        ],
      },
    ],
    examTip: 'Mechanism marks are strict: draw the curly arrow from the delocalised ring (or a C=C) to the electrophile, show the intermediate with its positive charge and circle the affected carbon, then the loss of H⁺ restoring the ring.',
  },
  {
    slug: 'transition-metals',
    unit: 'Unit 5 · WCH15',
    unitName: 'Transition Metals and Organic Nitrogen Chemistry',
    title: 'Transition metals',
    intro: 'Transition metals form coloured complexes, show variable oxidation states and act as catalysts — all because their partially filled d sub-shells allow d–d transitions and accessible oxidation states.',
    sections: [
      {
        heading: 'Complex ions',
        defs: [
          ['Ligand', 'A species that donates a lone pair of electrons to a metal ion, forming a dative covalent bond.'],
          ['Complex ion', 'A central metal ion surrounded by ligands, e.g. [Cu(H₂O)₆]²⁺.'],
        ],
        bullets: [
          'Common coordination numbers: 6 (octahedral, e.g. [Co(NH₃)₆]³⁺) and 4 (tetrahedral [CuCl₄]²⁻ or square planar cisplatin).',
          'Ligand exchange changes colour and shape: [Cu(H₂O)₆]²⁺ (pale blue) + excess NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue); + concentrated HCl → [CuCl₄]²⁻ (yellow-green).',
          'Chelating ligands (EDTA⁴⁻, en) form multiple dative bonds — very stable complexes; EDTA is used in medicine to remove toxic metals.',
        ],
      },
      {
        heading: 'Colour and d–d transitions',
        bullets: [
          'Ligands split the d orbitals into two energy levels; an electron absorbs a photon of visible light to jump the gap (ΔE = hf).',
          'The colour seen is the complement of the light absorbed. Changing the ligand, oxidation state or coordination number changes ΔE and therefore the colour.',
          'Zn²⁺ (d¹⁰) and Cu⁺ (d¹⁰) are colourless — no d–d transition is possible.',
        ],
      },
      {
        heading: 'Variable oxidation states and catalysis',
        bullets: [
          'Transition metals show variable oxidation states because 4s and 3d electrons are close in energy (e.g. Mn: +2 to +7; Fe: +2, +3; Cr: +3, +6).',
          'Homogeneous catalysis: e.g. Fe²⁺/Fe³⁺ catalysing S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂ — the catalyst is oxidised then reduced, regenerated each cycle.',
          'Heterogeneous catalysis: V₂O₅ in the Contact process; Fe in the Haber process; Ni hydrogenation of alkenes.',
          'Eₐ of catalysed vs uncatalysed reaction diagrams show the lower alternative route.',
        ],
      },
    ],
    examTip: 'For “why is the solution coloured?” the full chain is: ligands split d orbitals → electron absorbs a photon → d–d transition → complementary colour transmitted. For catalysis, show both half-equations with oxidation state changes.',
  },
  {
    slug: 'amines-and-amino-acids',
    unit: 'Unit 5 · WCH15',
    unitName: 'Transition Metals and Organic Nitrogen Chemistry',
    title: 'Amines & amino acids',
    intro: 'Nitrogen compounds are basic, nucleophilic and — in the form of amino acids — the building blocks of proteins. Amines are made from halogenoalkanes or nitriles; amino acids are amphoteric and form zwitterions and peptides.',
    sections: [
      {
        heading: 'Amines',
        bullets: [
          'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N) — named as alkanamines (e.g. ethanamine) or as substituents (N-methylethanamine).',
          'Preparation: halogenoalkane + excess ethanolic NH₃ (nucleophilic substitution), or nitrile reduction (LiAlH₄ or H₂/Ni) — this route also extends the carbon chain.',
          'Basicity: the lone pair on N accepts a proton. Aqueous alkylamines are weaker bases than ammonia because the alkyl group releases electron density, stabilising the ion — but in the gas phase alkylamines are stronger.',
          'Aromatic amines (phenylamine) are much weaker bases: the lone pair delocalises into the benzene ring and is less available.',
        ],
      },
      {
        heading: 'Amino acids',
        bullets: [
          'Both an amine and a carboxylic acid on the same carbon: H₂N–CHR–COOH. At neutral pH they exist as zwitterions (⁺H₃N–CHR–COO⁻) — high melting points, soluble in water.',
          'In acid: the carboxylate accepts H⁺ → cation. In alkali: the ammonium loses H⁺ → anion. The pH where the zwitterion dominates is the isoelectric point.',
          'Peptide bonds (amide links) join amino acids: dipeptides, tripeptides, polypeptides — formed by condensation, broken by hydrolysis.',
          'Essential amino acids must be eaten; the rest can be synthesised.',
        ],
      },
      {
        heading: 'Amides, proteins and electrophoresis',
        bullets: [
          'Amides are made from acyl chlorides + amines (or from carboxylic acids + amines under heat); hydrolysis with acid or alkali gives back the acid and amine/ammonium salt.',
          'Proteins: primary (amino acid sequence), secondary (α-helix/β-sheet, hydrogen bonds), tertiary (3-D shape, R-group interactions), quaternary (multiple chains).',
          'Electrophoresis separates amino acids/proteins by charge and size at a given pH — used in forensic and medical analysis.',
        ],
      },
    ],
    examTip: 'Basicity explanations need the availability of the lone pair: electron-releasing alkyl groups increase it, delocalisation into a benzene ring decreases it. Always state where the lone pair is and what happens to it.',
  },
  {
    slug: 'synthesis-and-analysis',
    unit: 'Unit 5 · WCH15',
    unitName: 'Transition Metals and Organic Nitrogen Chemistry',
    title: 'Synthesis & analysis',
    intro: 'Multi-step synthesis is the ultimate organic skill: choose reactions that give the right functional group and the right carbon chain length. Analysis — NMR, IR, mass spectrometry and chromatography — confirms what you made.',
    sections: [
      {
        heading: 'Planning a synthesis',
        bullets: [
          'Work backwards from the target: what functional group is needed, what reaction makes it, and what starting material does that need?',
          'Chain extension: halogenoalkane + KCN → nitrile → hydrolyse to acid or reduce to amine.',
          'Functional group interconversions: alcohol → aldehyde/acid (oxidation), acid + alcohol → ester, benzene → nitrobenzene → phenylamine (Sn/HCl reduction).',
          'Consider yield, atom economy, number of steps, and purification (distillation, recrystallisation, chromatography).',
        ],
      },
      {
        heading: 'Infrared spectroscopy',
        bullets: [
          'Bonds absorb infrared radiation at characteristic frequencies; the spectrum shows a transmittance trough for each bond.',
          'Key peaks: O–H (broad, 2500–3300 cm⁻¹ in acids; 3230–3550 in alcohols), N–H (~3300–3500), C=O (sharp, 1680–1750), C≡N (~2250), C–O (1000–1300).',
          'Used to identify functional groups and to confirm a reaction has occurred (e.g. loss of the broad O–H of an acid when an ester forms).',
          'The fingerprint region (below 1500 cm⁻¹) is unique to a compound and can identify it by comparison.',
        ],
      },
      {
        heading: 'NMR spectroscopy',
        bullets: [
          '¹³C NMR: one peak per chemically different carbon environment — the number of peaks tells you how many distinct environments.',
          '¹H NMR: chemical shift (δ, ppm) identifies the environment (alkyl ~0.9–2, next to C=O ~2–2.5, next to O ~3.5–4, aromatic ~7, aldehyde ~9–10, acid ~10–12).',
          'Integration (peak area) gives the ratio of protons; splitting (n+1 rule) shows how many hydrogens are on neighbouring carbons.',
          'TMS is the standard reference (δ = 0); deuterated solvents (CDCl₃) are used so the solvent does not give a proton peak.',
        ],
      },
      {
        heading: 'Mass spectrometry and chromatography',
        bullets: [
          'The molecular ion peak M⁺ gives Mr; the M+1 peak comes from ¹³C; fragmentation patterns (loss of 15 = CH₃, 17 = OH, 29 = CHO) identify structures.',
          'Time-of-flight analysers separate ions by m/z after acceleration (all ions gain the same kinetic energy).',
          'GC and HPLC separate mixtures by differential interaction with the stationary phase; retention time identifies, peak area quantifies.',
        ],
      },
    ],
    examTip: 'Spectra questions are gift marks if you work systematically: count environments, read the integration ratio, apply the n+1 rule, then piece the fragments together and check the structure against every piece of data.',
  },
  {
    slug: 'chem-data-analysis',
    unit: 'Unit 6 · WCH16',
    unitName: 'Practical Skills in Chemistry II',
    title: 'Data analysis & uncertainty',
    intro: 'Chemistry data must be processed with the right precision and honest uncertainty. Graphs, percentage errors and statistical treatment turn raw readings into defensible conclusions.',
    sections: [
      {
        heading: 'Processing data',
        bullets: [
          'Significant figures: give the final answer to the least s.f. in the data; keep extra figures in intermediate steps.',
          'Percentage error = (uncertainty ÷ measured value) × 100; in multi-step calculations add percentage errors for multiplied/divided quantities.',
          'The uncertainty of a burette titre is ±0.10 cm³ (two readings of ±0.05); a 25.0 cm³ pipette is ±0.06 cm³.',
          'Percentage yield compares experiment with theory; sources of loss (transfer, side reactions, equilibrium) must be identified.',
        ],
      },
      {
        heading: 'Graphs',
        bullets: [
          'Plot the independent variable on the x-axis; label both axes with quantity and unit; even scales using ≥ 50% of the paper.',
          'Line of best fit — smooth curve or straight line through the points, not point-to-point zigzags.',
          'Gradient = Δy ÷ Δx (choose distant points on the line, not data points); units follow from the axes.',
          'If the relationship is curved, linearise it: plot log k vs 1/T (Arrhenius), or 1/[A] vs t for second order.',
        ],
      },
      {
        heading: 'Evaluating results',
        bullets: [
          'Accuracy vs precision vs reliability; random errors (repeats and means) vs systematic errors (calibration).',
          'Anomalies: identify and justify removal; never discard points simply to improve a correlation.',
          'State improvements specifically (larger titre values, thermostatted water bath, digital probe) and suggest a further investigation.',
        ],
      },
    ],
    examTip: 'Error propagation questions often carry two marks: one for the calculation and one for the conclusion (“the percentage error is 2.1%, so the result is reasonably reliable, but the largest contribution is the small titre” ).',
  },
  {
    slug: 'chem-investigations',
    unit: 'Unit 6 · WCH16',
    unitName: 'Practical Skills in Chemistry II',
    title: 'Classic investigations',
    intro: 'A core set of investigations appears again and again — rates, enthalpy, equilibrium and analysis of unknowns. Knowing their methods, and their typical errors, prepares you for any variant.',
    sections: [
      {
        heading: 'Rates investigations',
        bullets: [
          'Sodium thiosulfate + HCl (disappearing cross): time for a mark to disappear; rate = 1/t; vary concentration, temperature or volume.',
          'Iodine clock (H₂O₂ + KI + Na₂S₂O₃ with starch): fixed amount of thiosulfate, time to blue–black; initial-rate method.',
          'Magnesium + acid: gas volume vs time (syringe or inverted burette); rate = gradient at t = 0.',
          'Typical errors: timing reaction, temperature fluctuation, judgment of the end point.',
        ],
      },
      {
        heading: 'Enthalpy investigations',
        bullets: [
          'Solution calorimetry (neutralisation, displacement): polystyrene cup, lid, thermometer, q = mcΔT.',
          'Combustion: spirit burner or calorimeter, copper can with fixed volume of water, mass of fuel burned.',
          'Heat loss is the dominant systematic error — extrapolate the cooling curve back to the time of mixing to correct it.',
        ],
      },
      {
        heading: 'Equilibrium and unknowns',
        bullets: [
          'Ester hydrolysis or the ethanoic acid–ethanol equilibrium: titrate the acid at equilibrium to find Kc.',
          'Aspirin preparation: salicylic acid + ethanoic anhydride; purify by recrystallisation, check purity by melting point or TLC.',
          'Analysis of an unknown: titration (concentration), IR (functional groups), NMR (carbon skeleton), mass spec (Mr).',
          'Vitamin C in fruit juice: titrate against DCPIP or iodine; compare with a standard.',
        ],
      },
    ],
    examTip: 'When asked to compare methods (“gravimetric vs titrimetric”), judge them against the same criteria: precision, time, cost, safety and the size of sample needed. A comparison that only describes one method scores half at best.',
  },
];
