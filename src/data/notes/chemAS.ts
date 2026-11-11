import type { Note } from './types';

export const chemASNotes: Note[] = [
  {
    slug: 'atomic-structure',
    unit: 'Unit 1 · WCH11',
    unitName: 'Structure, Bonding and Introduction to Organic Chemistry',
    title: 'Atomic structure & ionisation energies',
    intro: 'Atoms consist of a tiny nucleus of protons and neutrons surrounded by electrons in shells (orbitals). The arrangement of electrons determines how an atom bonds, and successive ionisation energies provide the evidence for that arrangement.',
    sections: [
      {
        heading: 'Subatomic particles and the mass spectrometer',
        defs: [
          ['Atomic number (Z)', 'The number of protons in the nucleus — it defines the element.'],
          ['Mass number (A)', 'The total number of protons and neutrons in the nucleus.'],
          ['Isotopes', 'Atoms of the same element with the same number of protons but different numbers of neutrons.'],
        ],
        bullets: [
          'Relative masses: proton 1, neutron 1, electron 1/1836 (negligible). Relative charge: proton +1, neutron 0, electron −1.',
          'A mass spectrometer ionises atoms (electron impact), accelerates them, and separates them by mass:charge ratio — lighter isotopes are deflected more.',
          'The relative atomic mass (Aᵣ) is the weighted average of the isotopic masses: Aᵣ = Σ(isotopic mass × % abundance) ÷ 100.',
          'Time-of-flight mass spectrometry: ions are accelerated to the same kinetic energy, so lighter ions travel faster; detection gives a mass spectrum from which Mr and fragmentation patterns are read.',
        ],
      },
      {
        heading: 'Electron arrangement',
        bullets: [
          'Electrons occupy shells (energy levels); each shell holds up to 2n² electrons (2, 8, 18…).',
          'Sub-shells s, p and d hold 2, 6 and 10 electrons. The order of filling is 1s 2s 2p 3s 3p 4s 3d 4p…',
          'Electrons fill the lowest available energy first; for the d-block, 4s fills before 3d but empties first when ionised.',
          'Half-filled and fully-filled sub-shells are slightly more stable — this explains anomalies such as Cr (3d⁵4s¹) and Cu (3d¹⁰4s¹).',
        ],
      },
      {
        heading: 'Ionisation energies',
        defs: [
          ['First ionisation energy', 'The energy required to remove one electron from each atom in one mole of gaseous atoms.'],
          ['Second ionisation energy', 'The energy required to remove one electron from each ion in one mole of gaseous 1+ ions.'],
        ],
        bullets: [
          'Trends across a period: ionisation energy increases — nuclear charge rises while electrons are added to the same shell, so attraction strengthens and the radius shrinks.',
          'Down a group: ionisation energy decreases — more shells mean greater distance and more shielding, so outer electrons are held less tightly.',
          'A large jump between successive ionisation energies marks the start of a new, closer shell — this is how the shell structure is deduced.',
          'Dips occur where an electron is removed from a higher-energy sub-shell (e.g. Be → B: 2p is higher than 2s) or where electron–electron repulsion in a paired p-orbital makes removal easier (e.g. N → O).',
        ],
      },
    ],
    examTip: 'For “explain the trend” questions use three key phrases: nuclear charge, distance/shielding, and electron–electron repulsion. For successive ionisation energies, always identify which shell the electron came from.',
  },
  {
    slug: 'bonding-and-structure',
    unit: 'Unit 1 · WCH11',
    unitName: 'Structure, Bonding and Introduction to Organic Chemistry',
    title: 'Bonding & structure',
    intro: 'The type of bonding between atoms determines a substance’s properties. Ionic, covalent and metallic bonding each produce characteristic structures — and giant structures have very different properties from simple molecular ones.',
    sections: [
      {
        heading: 'Ionic bonding',
        bullets: [
          'Electrons are transferred from a metal to a non-metal, forming positive and negative ions held together by strong electrostatic attraction in a giant lattice.',
          'High melting and boiling points (many strong ionic bonds must be broken), brittle (like charges repel when layers shift), and conduct electricity when molten or aqueous — but not when solid.',
          'Ionic compounds often dissolve in water: polar water molecules surround the ions, stabilising them in solution.',
        ],
      },
      {
        heading: 'Covalent and dative covalent bonding',
        bullets: [
          'A covalent bond is a shared pair of electrons attracted to both nuclei.',
          'Dative covalent (coordinate) bonds: both electrons in the shared pair come from the same atom (e.g. NH₄⁺ from NH₃ + H⁺, and in Al₂Cl₆).',
          'Bond polarity arises when atoms of different electronegativity share electrons unequally — creating a permanent dipole.',
          'Electronegativity increases across a period and decreases down a group (smaller atoms, greater nuclear charge over the bonding pair).',
        ],
      },
      {
        heading: 'Metallic bonding and giant structures',
        bullets: [
          'Metallic bonding: positive ions in a lattice surrounded by a “sea” of delocalised electrons — explains electrical conductivity, malleability and high melting points.',
          'Giant covalent structures (diamond, graphite, silicon(IV) oxide): vast networks of covalent bonds → very high melting points. Diamond is hard; graphite has layers of delocalised electrons and conducts.',
          'Giant ionic (NaCl), giant metallic (Fe), giant covalent (diamond) vs simple molecular (I₂, H₂O): simple molecular substances have weak intermolecular forces, so low melting points and no conductivity.',
        ],
      },
      {
        heading: 'Metallic and ionic trends',
        bullets: [
          'Melting points across Period 3: Na→Al rise (charge on the ion increases, more delocalised electrons, stronger bonding), Si stays highest (giant covalent), then P₄, S₈, Cl₂, Ar are simple molecular — low melting points with weak van der Waals forces.',
          'The strength of van der Waals forces increases with the number of electrons (relative molecular mass).',
        ],
      },
    ],
    examTip: 'Structure–property questions need three things: the type of structure, the forces that must be overcome (ionic bonds / covalent bonds / intermolecular forces), and the consequence for the property. “Strong bonds between molecules” is a classic wrong answer — molecules have forces between them, not bonds.',
  },
  {
    slug: 'molecular-shapes',
    unit: 'Unit 1 · WCH11',
    unitName: 'Structure, Bonding and Introduction to Organic Chemistry',
    title: 'Shapes of molecules & intermolecular forces',
    intro: 'Electron pairs around a central atom repel each other and arrange themselves as far apart as possible. This simple idea explains molecular shapes, bond angles, and why some molecules have permanent dipoles — and how those dipoles produce intermolecular forces.',
    sections: [
      {
        heading: 'VSEPR shapes and bond angles',
        bullets: [
          'Electron pairs (bonding and lone pairs) arrange themselves to minimise repulsion; lone pairs repel more strongly than bonding pairs and reduce bond angles by about 2.5° each.',
          '2 pairs: linear (180°). 3 pairs: trigonal planar (120°). 4 pairs: tetrahedral (109.5°). 5: trigonal bipyramidal. 6: octahedral (90°).',
          'Examples: H₂O (2 bonding + 2 lone pairs) is bent at 104.5°; NH₃ (3 bonding + 1 lone) is trigonal pyramidal at 107°; CO₂ is linear; BF₃ is trigonal planar.',
          'When asked for the shape, describe the arrangement of electron pairs and the actual shape of the molecule separately.',
        ],
      },
      {
        heading: 'Polarity',
        bullets: [
          'A bond is polar if the atoms differ in electronegativity; the dipole points towards the more electronegative atom.',
          'A molecule is polar only if the bond dipoles do not cancel — CO₂ is non-polar (dipoles cancel, linear) while H₂O is polar (bent).',
          'Symmetrical molecules (CCl₄, BF₃) are non-polar even with polar bonds.',
        ],
      },
      {
        heading: 'Intermolecular forces',
        bullets: [
          'Van der Waals forces (London dispersion forces): exist between all molecules; temporary induced dipoles caused by instantaneous fluctuations in electron distribution. Stronger with more electrons (larger Mr).',
          'Permanent dipole–dipole forces: between polar molecules, in addition to van der Waals forces.',
          'Hydrogen bonding: a strong type of dipole–dipole attraction when H is bonded to N, O or F and is attracted to a lone pair on N, O or F of a neighbouring molecule.',
          'Hydrogen bonding explains water’s high boiling point, ice being less dense than water, and the solubility of alcohols and sugars.',
        ],
      },
    ],
    examTip: '“Why does X have a higher boiling point than Y?” → identify the strongest intermolecular force in each, compare their strengths (van der Waals < dipole–dipole < hydrogen bonding), and state that more energy is needed to overcome them.',
  },
  {
    slug: 'intro-organic',
    unit: 'Unit 1 · WCH11',
    unitName: 'Structure, Bonding and Introduction to Organic Chemistry',
    title: 'Introduction to organic chemistry',
    intro: 'Organic chemistry is the chemistry of carbon compounds. Naming (nomenclature), drawing structures, isomerism and reaction mechanisms are the tools used in every later topic — master them here and the rest of the course follows.',
    sections: [
      {
        heading: 'Nomenclature and formulae',
        bullets: [
          'Count the longest carbon chain: meth- 1, eth- 2, prop- 3, but- 4, pent- 5, hex- 6. Suffixes: -ane (single bonds), -ene (C=C), -ol (–OH), -al (–CHO), -oic acid (–COOH).',
          'Number the chain from the end that gives substituents the lowest numbers; list substituents alphabetically (bromo-, chloro-, methyl-) with their position.',
          'Empirical formula: simplest whole-number ratio. Molecular formula: actual atoms. Structural formula: how they are arranged. General formula: e.g. CnH₂ₙ₊₂ for alkanes.',
          'Displayed, skeletal and structural formulae are all acceptable in exams — but watch for hidden CH₃ and CH₂ groups.',
        ],
      },
      {
        heading: 'Isomerism',
        defs: [
          ['Structural isomers', 'The same molecular formula with different structural formulae (chain, positional or functional-group isomers).'],
          ['Stereoisomers', 'The same structural formula but a different arrangement in space.'],
        ],
        bullets: [
          'Chain isomerism: different carbon skeletons (butane / methylpropane). Positional isomerism: functional group in a different place (butan-1-ol / butan-2-ol).',
          'Functional group isomerism: different functional groups (ethanol / methoxymethane; propanal / propanone).',
          'E–Z (cis–trans) isomerism: restricted rotation about a C=C with two different groups on each carbon; occurs in but-2-ene but not in but-1-ene.',
        ],
      },
      {
        heading: 'Alkanes and free-radical substitution',
        bullets: [
          'Alkanes are saturated hydrocarbons; their main reaction is free-radical substitution with halogens in UV light.',
          'Mechanism: initiation (Cl₂ → 2Cl• by homolytic fission), propagation (Cl• + CH₄ → •CH₃ + HCl, then •CH₃ + Cl₂ → CH₃Cl + Cl•), termination (any two radicals combine).',
          'Free-radical substitution gives mixtures of products (further substitution occurs) — poor yield for synthesis.',
        ],
      },
      {
        heading: 'Alkenes and electrophilic addition',
        bullets: [
          'Alkenes contain a C=C double bond; the π bond is electron-rich and attracts electrophiles.',
          'Mechanism: the π electrons attack the electrophile (e.g. HBr), forming a carbocation intermediate, then the nucleophile (Br⁻) attacks — giving an addition product.',
          'Markovnikov’s rule: with unsymmetrical alkenes, the H adds to the carbon already bearing more hydrogens, via the more stable carbocation.',
          'Test for unsaturation: bromine water decolourises (orange → colourless) as Br₂ adds across the double bond.',
        ],
      },
    ],
    examTip: 'Mechanism questions demand curly arrows drawn from the electron source (a bond or lone pair) to the atom being attacked. An arrow drawn from HBr to nowhere, or from the wrong end, loses the mark every time.',
  },
  {
    slug: 'moles-and-stoichiometry',
    unit: 'Unit 2 · WCH12',
    unitName: 'Energetics, Group Chemistry, Halogenoalkanes, Alcohols and Amounts of Substance',
    title: 'Amounts of substance',
    intro: 'The mole ties together masses, volumes, concentrations and equations. Every calculation in chemistry — yields, titrations, gas volumes, empirical formulae — comes back to n = m ÷ M and the balanced equation.',
    sections: [
      {
        heading: 'The mole and the key equations',
        bullets: [
          'n = m ÷ M (moles = mass ÷ molar mass, g mol⁻¹ — numerically equal to Mr).',
          'n = c × V (concentration in mol dm⁻³ × volume in dm³; convert cm³ to dm³ by ÷ 1000).',
          'Ideal gas equation pV = nRT: p in Pa (kPa × 1000), V in m³ (cm³ ÷ 10⁶), T in K (°C + 273).',
          'One mole of any gas occupies 24.0 dm³ at room temperature and pressure (rtp).',
          'Percentage yield = (actual ÷ theoretical) × 100. Atom economy = (Mr of desired product ÷ Σ Mr of all products) × 100.',
        ],
      },
      {
        heading: 'Empirical and molecular formulae',
        bullets: [
          'From percentages: assume 100 g, convert each element to moles, divide by the smallest, and multiply to get whole numbers.',
          'Molecular formula = empirical formula × (Mr ÷ empirical formula mass).',
          'Combustion data (masses of CO₂ and H₂O produced) gives the amounts of C and H — and O by difference.',
        ],
      },
      {
        heading: 'Titration and concentration calculations',
        bullets: [
          'Write the balanced equation, find moles of the known substance, use the ratio to find moles of the unknown, then convert to concentration or mass.',
          'Titration readings: use a burette (±0.05 cm³); concordant titres (within 0.10 cm³) are averaged.',
          'Back titration: an excess of reagent reacts, and the unreacted remainder is titrated — useful for slow or incomplete reactions.',
        ],
      },
      {
        heading: 'Titrations and curves',
        bullets: [
          'Strong acid–strong base: vertical section pH 3–11, equivalence pH 7.',
          'Weak acid–strong base: vertical section ~pH 7–11, equivalence above 7 (hydrolysis of the salt).',
          'The pH at the equivalence point of a weak acid titration can be estimated from the salt formed; the half-equivalence point has pH = pKa.',
          'Choose indicators whose pH range lies within the vertical section (methyl orange 3.1–4.4, thymolphthalein 9.3–10.5).',
        ],
      },
    ],
    examTip: 'Unit slips are the biggest source of lost marks: convert cm³ → dm³ → m³ consistently, and remember R = 8.31 J K⁻¹ mol⁻¹ wants pressure in pascals and volume in m³.',
  },
  {
    slug: 'energetics',
    unit: 'Unit 2 · WCH12',
    unitName: 'Energetics, Group Chemistry, Halogenoalkanes, Alcohols and Amounts of Substance',
    title: 'Energetics',
    intro: 'Chemical reactions break and make bonds, and the balance between those energies decides whether heat is released or absorbed. Enthalpy changes quantify this, and Hess’s cycle lets us find values that cannot be measured directly.',
    sections: [
      {
        heading: 'Enthalpy changes',
        defs: [
          ['Enthalpy change (ΔH)', 'The heat energy change at constant pressure, in kJ mol⁻¹. Negative = exothermic, positive = endothermic.'],
          ['Standard conditions', '298 K (25 °C), 100 kPa, solutions at 1 mol dm⁻³; states must be specified.'],
        ],
        bullets: [
          'Bond enthalpy: energy needed to break one mole of a gaseous bond (endothermic); ΔH = Σ bonds broken − Σ bonds formed.',
          'Standard enthalpy of formation (ΔHƒ): one mole of compound formed from its elements in standard states.',
          'Standard enthalpy of combustion (ΔHc): one mole of substance burned completely in excess oxygen.',
          'Neutralisation (ΔHneut): strong acid + strong alkali ≈ −57.3 kJ mol⁻¹ (the formation of water from H⁺ and OH⁻).',
        ],
      },
      {
        heading: 'Hess’s law and cycles',
        bullets: [
          'Hess’s law: the enthalpy change is independent of the route taken — the basis of every cycle calculation.',
          'ΔHreaction = Σ ΔHƒ(products) − Σ ΔHƒ(reactants).',
          'ΔHreaction = Σ ΔHc(reactants) − Σ ΔHc(products) — note the order is reversed for combustion data.',
          'Draw the cycle, label every arrow with its value and sign, then follow the arrows; a wrong sign on one arrow loses the answer.',
        ],
      },
      {
        heading: 'Measuring enthalpy changes',
        bullets: [
          'Calorimetry: q = mcΔT, where m = mass of solution (g), c = 4.18 J g⁻¹ K⁻¹, ΔT = temperature change (K or °C). Convert q to kJ and divide by moles for ΔH.',
          'Heat loss to the surroundings and the calorimeter causes experimental values to be less exothermic than data-book values.',
          'A flame calorimeter (combustion) uses a copper can and stirrer; solution calorimetry uses a polystyrene cup with a lid.',
          'Bond enthalpies are averages from many compounds, so calculations from them are approximate.',
        ],
      },
    ],
    examTip: 'Always check the sign of ΔH against the physics: if the temperature rises the reaction is exothermic and ΔH is negative. In Hess calculations, draw the cycle before writing numbers.',
  },
  {
    slug: 'group-chemistry',
    unit: 'Unit 2 · WCH12',
    unitName: 'Energetics, Group Chemistry, Halogenoalkanes, Alcohols and Amounts of Substance',
    title: 'Group 2 & Group 7',
    intro: 'Trends in the periodic table are predictable: Group 2 metals get more reactive down the group, while Group 7 halogens get less reactive. The reactions of their compounds — carbonates, hydroxides, halides and the halogens themselves — follow directly from those trends.',
    sections: [
      {
        heading: 'Group 2 — the alkaline earth metals',
        bullets: [
          'Reactivity increases down the group: the outer electrons are further from the nucleus and more shielded, so they are lost more easily.',
          'Reaction with water: Mg (slowly with cold water, vigorously with steam → MgO + H₂) down to Ba (vigorous with cold water → Ba(OH)₂ + H₂).',
          'Carbonates become more thermally stable down the group: MgCO₃ decomposes readily (to MgO + CO₂), BaCO₃ needs high heat — the larger cation distorts the carbonate ion less.',
          'Hydroxides become more soluble down the group: Mg(OH)₂ is sparingly soluble (milk of magnesia), Ba(OH)₂ is soluble.',
          'Uses: CaCO₃ (limestone, neutralising acidic soils), Ca(OH)₂ (lime, flue-gas desulfurisation), Mg(OH)₂/CaCO₃ (antacids), BaSO₄ (barium meals).',
        ],
      },
      {
        heading: 'Group 7 — the halogens',
        bullets: [
          'Reactivity decreases down the group: the larger atom has more shielding and a weaker attraction for an incoming electron (less easily reduced).',
          'Halogens become darker and less volatile down the group (more electrons → stronger van der Waals forces).',
          'Displacement reactions: a more reactive halogen displaces a less reactive halide (Cl₂ + 2KBr → 2KCl + Br₂; observed as colour changes in organic solvent layers).',
          'Halogens are oxidising agents; halide ions are reducing agents — the reducing power of halide ions increases down the group.',
        ],
      },
      {
        heading: 'Reactions of halide ions',
        bullets: [
          'With aqueous silver nitrate (acidified with dilute nitric acid): Cl⁻ white precipitate (soluble in dilute ammonia), Br⁻ cream (soluble only in concentrated ammonia), I⁻ yellow (insoluble in ammonia).',
          'With concentrated sulfuric acid: NaCl gives HCl (misty fumes, no redox); NaBr gives brown Br₂ (reduction of S from +6 to +4, SO₂); NaI gives purple I₂ and H₂S and S (I⁻ is such a strong reducing agent it reduces sulfur further).',
          'This trend in reducing power is the standard explanation question — always mention electron shielding and distance from the nucleus.',
        ],
      },
    ],
    examTip: 'For trend questions, quote the physical evidence (reaction observations) and then explain with atomic structure. “Why does barium carbonate need more heat?” wants a distortion argument about cation size, not just “it is more stable”.',
  },
  {
    slug: 'halogenoalkanes',
    unit: 'Unit 2 · WCH12',
    unitName: 'Energetics, Group Chemistry, Halogenoalkanes, Alcohols and Amounts of Substance',
    title: 'Halogenoalkanes',
    intro: 'Halogenoalkanes contain a polar C–X bond that is attacked by nucleophiles. Nucleophilic substitution and elimination are their two key reactions — and the strength of the C–X bond controls how fast they happen.',
    sections: [
      {
        heading: 'Nucleophilic substitution',
        bullets: [
          'The C–X bond is polar (X is more electronegative), so the carbon is δ+ and attracts nucleophiles (OH⁻, CN⁻, NH₃, :NH₃).',
          'Mechanism: the nucleophile attacks the δ+ carbon with a curly arrow from its lone pair; the C–X bond breaks heterolytically and the halide leaves.',
          'With aqueous NaOH → alcohol; with KCN in ethanol → nitrile (extends the carbon chain by one); with excess NH₃ → amine.',
          'NaOH(aq) favours substitution; NaOH in ethanol and heat favours elimination.',
        ],
      },
      {
        heading: 'Rates of hydrolysis',
        bullets: [
          'C–I is the weakest bond (largest halogen atom, poorest overlap), so iodoalkanes hydrolyse fastest; C–F is strongest and fluoroalkanes barely react.',
          'Order of reactivity: RI > RBr > RCl > RF — bond enthalpy is the rate-determining factor.',
          'Rate is followed by reacting with aqueous silver nitrate in ethanol and timing the appearance of precipitate, or by titrating the acid produced.',
        ],
      },
      {
        heading: 'Elimination and uses',
        bullets: [
          'Elimination removes HX to form an alkene: the hydroxide ion behaves as a base, attacking a β-hydrogen; the C–H bond breaks and the C=C forms as the halide leaves.',
          'Substitution vs elimination: aqueous conditions favour substitution; ethanolic conditions, higher temperatures and bulky bases favour elimination.',
          'CFCs were refrigerants and propellants but release chlorine radicals in the stratosphere that catalyse ozone breakdown; modern replacements (HFCs) are ozone-friendly but greenhouse gases.',
        ],
      },
    ],
    examTip: 'Draw the mechanism with curly arrows from the nucleophile’s lone pair to the carbon, and from the C–X bond to the halogen. For rate explanations, name the bond that breaks in the rate-determining step and quote its strength trend.',
  },
  {
    slug: 'alcohols',
    unit: 'Unit 2 · WCH12',
    unitName: 'Energetics, Group Chemistry, Halogenoalkanes, Alcohols and Amounts of Substance',
    title: 'Alcohols',
    intro: 'Alcohols contain the –OH group and can be oxidised to aldehydes, ketones and carboxylic acids. Their classification (primary, secondary, tertiary) decides which products form — and that decides how the products are identified.',
    sections: [
      {
        heading: 'Classification and properties',
        bullets: [
          'Primary (RCH₂OH), secondary (R₂CHOH), tertiary (R₃COH) — classified by how many carbon groups are attached to the C carrying the –OH.',
          'Alcohols hydrogen bond, so they have far higher boiling points than alkanes of similar Mr, and short-chain alcohols are miscible with water.',
          'As chain length rises, van der Waals forces dominate and solubility in water falls.',
        ],
      },
      {
        heading: 'Oxidation',
        bullets: [
          'Oxidising agent: acidified potassium dichromate(VI) (orange → green as Cr⁶⁺ → Cr³⁺).',
          'Primary alcohol → aldehyde (distil off as it forms) → carboxylic acid (reflux with excess oxidising agent).',
          'Secondary alcohol → ketone (no further oxidation). Tertiary alcohols are not oxidised (no H on the C–OH carbon).',
          'Distillation separates a volatile aldehyde as it forms; reflux returns vapour to the flask for complete oxidation to the acid.',
        ],
      },
      {
        heading: 'Dehydration and other reactions',
        bullets: [
          'Elimination with hot concentrated phosphoric/sulfuric acid → alkene (E1 mechanism via a carbocation).',
          'With carboxylic acids and a concentrated sulfuric acid catalyst → esters (esterification; reflux).',
          'With sodium → alkoxide + hydrogen (effervescence).',
          'With PCl₅ → chloroalkane + HCl + POCl₃ (misty fumes of HCl confirm an –OH group).',
        ],
      },
    ],
    examTip: 'In synthesis questions, watch the conditions: “distil” gives the aldehyde, “reflux” gives the carboxylic acid. Writing the wrong apparatus is a guaranteed lost mark even when the product is right.',
  },
];
