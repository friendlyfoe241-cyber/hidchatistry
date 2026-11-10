import type { Note } from './types';

export const unit4Notes: Note[] = [
  {
    slug: 'cellular-control',
    unit: 'Unit 4 · WBI14',
    unitName: 'Genetics, Populations and Ecosystems',
    title: 'Cellular control',
    intro: 'Gene expression — how information flows from DNA to protein and how that flow is regulated — determines the proteins a cell makes and therefore its structure and function. Mutations create new alleles and, rarely, new characteristics.',
    sections: [
      {
        heading: 'From gene to protein',
        bullets: [
          'Transcription (nucleus): RNA polymerase binds to the promoter region of the gene; the DNA double helix unwinds and one strand is used as a template to build a complementary mRNA strand (A–U, T–A, C–G, G–C).',
          'In eukaryotes, pre-mRNA is processed: introns (non-coding) are spliced out, exons (coding) are joined, and a 5′ cap and poly-A tail are added. The mature mRNA leaves through a nuclear pore.',
          'Translation (ribosome): the ribosome reads mRNA codons (triples of bases); tRNA molecules with complementary anticodons bring specific amino acids; peptide bonds form between amino acids, building a polypeptide.',
          'The genetic code is universal, non-overlapping and degenerate (most amino acids have more than one codon).',
        ],
        defs: [
          ['Codon', 'Three mRNA bases coding for one amino acid.'],
          ['Gene expression', 'The process by which the information in a gene is used to make a functional product (polypeptide).'],
        ],
      },
      {
        heading: 'Controlling gene expression',
        bullets: [
          'Transcription factors are proteins that bind to DNA and switch genes on or off; they control which genes are expressed in each cell type — this is how differentiation occurs despite every cell containing the same DNA.',
          'In prokaryotes, the lac operon is a classic switch: the repressor protein blocks transcription of the lactose-digesting genes until lactose (the inducer, allolactose) binds to it and removes it.',
          'Epigenetics: methylation of DNA generally silences genes; acetylation of histones generally activates them. These changes can be influenced by the environment and sometimes inherited.',
          'Post-translational modification (folding, adding carbohydrate groups) also controls the final active protein.',
        ],
      },
      {
        heading: 'Mutations',
        bullets: [
          'Substitution: one base is replaced. May be silent (same amino acid, due to degeneracy), missense (different amino acid) or nonsense (a stop codon is formed).',
          'Insertion or deletion of a base causes a frameshift, changing every downstream codon — usually much more serious.',
          'Mutagens (UV light, ionising radiation, certain chemicals) increase mutation rate.',
          'Most mutations are neutral or harmful; occasionally one produces a useful new allele — the raw material for evolution. Example: the ΔF508 deletion in the CFTR gene causes cystic fibrosis.',
        ],
      },
      {
        heading: 'Stem cells, cancer and the cell cycle',
        bullets: [
          'Differentiation = selective gene expression: the same genome, different proteins produced.',
          'The cell cycle is controlled by checkpoints; proto-oncogenes stimulate division and tumour suppressor genes (e.g. p53) slow it down.',
          'Mutations in these control genes cause uncontrolled division — a tumour. Carcinogens (e.g. tobacco tar, HPV) increase the risk.',
          'Stem cell therapies offer treatments for diseases such as leukaemia and Parkinson’s, but raise ethical questions about embryo use.',
        ],
      },
    ],
    examTip: '“Explain how a mutation leads to a change in phenotype” needs the full chain: base change → altered codon → different amino acid → altered primary structure → altered tertiary structure → different/non-functional protein → new characteristic.',
  },
  {
    slug: 'biotechnology',
    unit: 'Unit 4 · WBI14',
    unitName: 'Genetics, Populations and Ecosystems',
    title: 'Biotechnology & gene technologies',
    intro: 'Genetic engineering transfers genes between organisms using restriction enzymes, vectors and host cells. PCR, DNA profiling, cloning and industrial fermentation are all practical applications of the same core techniques.',
    sections: [
      {
        heading: 'The tools of gene technology',
        bullets: [
          'Restriction endonucleases cut DNA at specific palindromic recognition sequences, producing sticky or blunt ends.',
          'DNA ligase joins complementary sticky ends by forming phosphodiester bonds.',
          'Vectors carry the desired gene into host cells: plasmids (small circular bacterial DNA), bacteriophages or liposomes. Marker genes (e.g. antibiotic resistance) allow transformed cells to be identified.',
          'The same restriction enzyme must be used to cut both the gene and the vector so the sticky ends are complementary.',
        ],
      },
      {
        heading: 'Genetic engineering — the insulin example',
        bullets: [
          '1. Isolate the human insulin gene (from mRNA using reverse transcriptase, or by PCR).',
          '2. Cut the gene and a plasmid vector with the same restriction enzyme.',
          '3. Mix them with DNA ligase to form recombinant DNA.',
          '4. Introduce the plasmids into bacteria (transformation) and grow them on selective media containing the antibiotic.',
          '5. Screen for colonies carrying the gene; grow in fermenters; harvest and purify human insulin.',
          'Advantages: identical human protein, no allergic reactions, cheap, unlimited supply, no ethical issues from animal sources.',
        ],
      },
      {
        heading: 'PCR and DNA profiling',
        bullets: [
          'Polymerase chain reaction amplifies tiny DNA samples in cycles: denaturation (~95 °C, strands separate), annealing (~55 °C, primers bind), extension (~72 °C, heat-stable Taq polymerase builds new strands). Each cycle doubles the DNA.',
          'Gel electrophoresis separates DNA fragments: DNA is negative (phosphate groups) so it moves towards the positive electrode; smaller fragments travel further through the gel.',
          'DNA profiling compares variable number tandem repeats (VNTRs/STRs). Fragments are amplified by PCR, separated, and the pattern compared — used in forensics, paternity testing and identifying genetic disorders.',
        ],
      },
      {
        heading: 'Cloning and gene therapy',
        bullets: [
          'Embryo splitting produces genetically identical animals; somatic cell nuclear transfer (SCNT) — as used for Dolly the sheep — transfers a nucleus from an adult cell into an enucleated ovum.',
          'Gene therapy aims to replace or supplement a defective gene: somatic gene therapy (body cells, not inherited) vs germinal gene therapy (gametes/embryos, inherited — currently illegal in many countries).',
          'Challenges: delivering the gene to enough cells, the gene integrating correctly, and effects not lasting as cells divide.',
        ],
      },
      {
        heading: 'Biotechnology in industry',
        bullets: [
          'Fermenters/bioreactors grow microorganisms or cells on a large scale: sterilised air, impellers for mixing, cooling jackets, pH and temperature control, nutrient supply. Antibiotics prevent contamination.',
          'Batch culture: the vessel is filled, the product harvested and the process restarted. Continuous culture: fresh medium is added continuously and product removed — higher long-term output.',
          'Immobilised enzymes (adsorbed onto beads or entrapped in alginate) can be reused, produce a purer product and work continuously — used in biosensors (e.g. glucose meters) and isomerisation of glucose syrup.',
          'Aseptic technique and pure cultures are essential: unwanted microbes produce toxins and compete for nutrients.',
        ],
      },
    ],
    examTip: 'Sequencing questions (“put these steps in order”) turn up often — know the genetic engineering workflow cold, and in evaluation questions weigh benefits (e.g. cheap insulin) against risks (allergies, gene transfer to wild populations).',
  },
  {
    slug: 'patterns-of-inheritance',
    unit: 'Unit 4 · WBI14',
    unitName: 'Genetics, Populations and Ecosystems',
    title: 'Patterns of inheritance',
    intro: 'Beyond simple dominant–recessive inheritance, alleles can interact in codominant, epistatic and polygenic ways. Pedigree analysis and the chi-squared test let us test whether inheritance patterns and observed ratios match expectations.',
    sections: [
      {
        heading: 'More complex inheritance',
        bullets: [
          'Codominance: both alleles are expressed in the heterozygote (e.g. human ABO blood groups: Iᴬ and Iᴮ are codominant; i is recessive).',
          'Multiple alleles: more than two alleles exist in the population (Iᴬ, Iᴮ, i) though each individual carries only two.',
          'Epistasis: one gene affects the expression of another — e.g. in Labrador coat colour, the E gene determines whether pigment is deposited at all, masking the B gene.',
          'Polygenic inheritance: a single characteristic is influenced by several genes (height, skin colour) — producing continuous variation.',
          'Sex linkage: genes on the X chromosome (haemophilia, colour blindness). A female can be a carrier; a male either has the condition or does not.',
        ],
      },
      {
        heading: 'Continuous vs discontinuous variation',
        table: {
          head: ['Feature', 'Discontinuous', 'Continuous'],
          rows: [
            ['Categories', 'Distinct classes', 'Full range of values'],
            ['Cause', 'One or few genes', 'Many genes + environment'],
            ['Example', 'Blood group, tongue rolling', 'Height, mass, skin colour'],
            ['Graph', 'Bar chart', 'Histogram / normal distribution curve'],
          ],
        },
      },
      {
        heading: 'Pedigrees and genetic counselling',
        bullets: [
          'Circles = females, squares = males; shaded = affected. Parents are joined by a horizontal line; offspring hang below.',
          'Patterns reveal dominance: recessive traits often skip generations and appear when both parents are carriers; dominant traits appear in every generation.',
          'Genetic counselling uses family history and carrier testing to estimate the probability of a condition being passed on — but probabilities never guarantee outcomes.',
        ],
      },
      {
        heading: 'The chi-squared test',
        bullets: [
          'Used for genetic crosses and categorical data to test whether observed results differ significantly from expected ones.',
          'χ² = Σ (observed − expected)² ÷ expected.',
          'Degrees of freedom = number of categories − 1.',
          'Compare the calculated χ² to the critical value at p = 0.05. If χ² is smaller, there is no significant difference — accept the null hypothesis and the expected ratio.',
          'A p-value below 0.05 means the difference is unlikely to be due to chance (less than 5% probability) — reject the null hypothesis.',
        ],
      },
    ],
    examTip: 'State the null hypothesis explicitly (“there is no significant difference between observed and expected results”) — it is a mark of its own. And remember chi-squared is for categorical counts; if the data are means, a t-test is needed.',
  },
  {
    slug: 'populations-and-evolution',
    unit: 'Unit 4 · WBI14',
    unitName: 'Genetics, Populations and Ecosystems',
    title: 'Populations & evolution',
    intro: 'Evolution happens to populations, not individuals. Allele frequencies in a population’s gene pool change through selection, drift, migration and mutation — and the Hardy–Weinberg principle lets us model and predict those changes.',
    sections: [
      {
        heading: 'The gene pool and allele frequency',
        defs: [
          ['Gene pool', 'All the alleles of all the genes in a population at a given time.'],
          ['Allele frequency', 'How common an allele is in the population, expressed as a proportion (p or q).'],
        ],
        bullets: [
          'A population is a group of organisms of the same species in the same area that can interbreed.',
          'Evolution = a change in allele frequency over time.',
        ],
      },
      {
        heading: 'The Hardy–Weinberg principle',
        bullets: [
          'p + q = 1 (frequencies of the two alleles) and p² + 2pq + q² = 1 (frequencies of the two homozygotes and the heterozygote).',
          'Assumptions: a large population, random mating, no mutation, no migration and no selection — in reality these are rarely all met, so allele frequencies usually do change.',
          'Typical use: if 1 in 2500 people has a recessive condition (q² = 0.0004), then q = 0.02, p = 0.98, and the carrier frequency 2pq = 3.9%.',
        ],
      },
      {
        heading: 'Selection and adaptation',
        bullets: [
          'Sickle cell anaemia: heterozygotes (HbA HbS) are more resistant to malaria and show few symptoms — the allele is maintained at higher frequency in malaria-endemic regions (balancing selection).',
          'Directional selection shifts the mean phenotype; stabilising selection maintains it; disruptive selection favours both extremes.',
          'Antibiotic resistance: overuse of antibiotics creates a strong selection pressure; resistant bacteria survive, reproduce, and can pass resistance plasmids horizontally.',
        ],
      },
      {
        heading: 'Population growth',
        bullets: [
          'Exponential (J-shaped) growth occurs with unlimited resources: dN/dt = rN (r = per capita growth rate).',
          'Logistic (S-shaped) growth: the rate slows as the population approaches the carrying capacity (K), limited by food, space, predation and disease.',
          'A population fluctuates around K when births, deaths, immigration and emigration change.',
          'r-strategists (many offspring, little care, rapid growth — e.g. insects) vs K-strategists (few offspring, much care, near K — e.g. elephants).',
        ],
      },
    ],
    examTip: 'Hardy–Weinberg questions often start with “1 in N people has the condition”. Always take the square root first to get q — a common slip is treating 1/N as q rather than q².',
  },
  {
    slug: 'ecosystems',
    unit: 'Unit 4 · WBI14',
    unitName: 'Genetics, Populations and Ecosystems',
    title: 'Ecosystems',
    intro: 'Ecosystems are communities of organisms interacting with their physical environment. Energy flows through them in one direction while nutrients are recycled — and human activity can disrupt both.',
    sections: [
      {
        heading: 'Energy flow and productivity',
        bullets: [
          'Gross primary production (GPP) = total chemical energy fixed by plants in photosynthesis.',
          'Net primary production (NPP) = GPP − energy lost in plant respiration. This is the energy available to the next trophic level.',
          'Only about 10% of energy passes between trophic levels: most is lost in respiration, in indigestible parts, and in urea/faeces.',
          'This limits food chain length and explains why top predators are rare. Ecological efficiency = (production at level n+1 ÷ production at level n) × 100.',
        ],
      },
      {
        heading: 'Nutrient cycles',
        bullets: [
          'Carbon cycle: photosynthesis fixes CO₂; respiration, decomposition and combustion return it; fossil fuels and oceans act as carbon sinks.',
          'Nitrogen cycle: nitrogen fixation (Rhizobium in root nodules, free-living bacteria, lightning) converts N₂ to ammonia/ammonium; nitrification (Nitrosomonas → nitrite, Nitrobacter → nitrate); ammonification releases ammonium from dead organisms; denitrification (Pseudomonas, anaerobic conditions) returns N₂ to the air.',
          'Plants absorb nitrate ions by active transport; fertilisers add nitrates but excess causes eutrophication.',
          'Decomposers (bacteria and fungi) secrete extracellular enzymes and are essential for recycling minerals.',
        ],
      },
      {
        heading: 'Succession',
        bullets: [
          'Pioneer species (lichens, mosses) colonise bare rock; they die and decay, forming soil so larger plants can grow.',
          'Intermediate communities follow; the final stable stage is the climax community for that climate (e.g. oak woodland in temperate lowland Britain).',
          'Primary succession starts with no soil (bare rock); secondary succession starts where soil already exists (after a fire or clearing).',
          'Deflected succession: grazing, mowing or burning prevents the climax stage (e.g. maintained grassland or heathland).',
        ],
      },
      {
        heading: 'Human impacts and conservation',
        bullets: [
          'Eutrophication: fertiliser run-off → algal bloom → decomposition by bacteria uses up oxygen → fish and invertebrates die → anaerobic conditions.',
          'Deforestation releases CO₂, destroys habitats and causes soil erosion and desertification.',
          'Global warming: increased CO₂ and methane enhance the greenhouse effect — shifting ranges, sea-level rise, more extreme weather.',
          'Conservation in situ: nature reserves, legal protection, wildlife corridors. Ex situ: zoos, seed banks, captive breeding programmes.',
          'Sustainable management: fishing quotas, coppicing, selective logging, reforestation — meeting present needs without compromising future generations.',
          'Indicator species and monitoring: lichens indicate SO₂ levels; invertebrate diversity indicates water quality.',
        ],
      },
    ],
    examTip: 'For “assess the impact” 6-markers, argue both sides: economic benefit vs ecological cost, and finish with a justified judgement — e.g. sustainable quotas allow harvesting while keeping the population above the level where it can recover.',
  },
];
