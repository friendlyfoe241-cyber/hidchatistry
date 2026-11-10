import type { Note } from './types';

export const unit2Notes: Note[] = [
  {
    slug: 'reproduction',
    unit: 'Unit 2 · WBI12',
    unitName: 'Reproduction, Inheritance and Evolution',
    title: 'Sexual & asexual reproduction',
    intro: 'Reproduction can be asexual (one parent, mitosis, genetically identical offspring) or sexual (two parents, meiosis and fertilisation, genetically different offspring). In flowering plants, the structures of the flower are precisely adapted for pollination and fertilisation.',
    sections: [
      {
        heading: 'Asexual reproduction',
        bullets: [
          'Occurs by mitosis — one parent produces genetically identical offspring (clones).',
          'Fast, and allows rapid colonisation of a stable, favourable environment.',
          'Disadvantage: no genetic variation, so a single disease or change in conditions can wipe out the whole population.',
          'Examples: binary fission in bacteria, runners in strawberries, tubers in potatoes, vegetative propagation (cuttings) in horticulture.',
        ],
      },
      {
        heading: 'Meiosis and sexual reproduction',
        bullets: [
          'Meiosis produces four genetically different haploid gametes from one diploid cell, with two divisions but only one replication of DNA.',
          'Prophase I: homologous chromosomes pair up and exchange segments — crossing over creates new allele combinations.',
          'Metaphase I: homologous pairs line up randomly at the equator — independent segregation of maternal and paternal chromosomes.',
          'Anaphase I separates the pairs; meiosis II separates sister chromatids (like mitosis but without replication first).',
          'Random fertilisation (any sperm can fuse with any ovum) adds further variation.',
          'Genetic variation is the raw material for natural selection — this is why sexual reproduction is advantageous in a changing environment.',
        ],
      },
      {
        heading: 'Gametogenesis',
        bullets: [
          'Spermatogenesis (testes): many meiotic divisions produce four functional sperm per cell; continuous from puberty.',
          'Oogenesis (ovaries): meiosis produces one large ovum and small polar bodies (which degenerate); reserves of glycogen, lipids and ribosomes accumulate for the embryo.',
          'Hormones control both: FSH, LH, testosterone and oestrogen (see the hormonal coordination notes).',
        ],
      },
      {
        heading: 'The flowering plant',
        defs: [
          ['Pollination', 'The transfer of pollen grains from the anther to the stigma.'],
          ['Self-pollination', 'Pollen lands on the stigma of the same flower or another flower on the same plant.'],
          ['Cross-pollination', 'Pollen lands on the stigma of a flower on a different plant of the same species.'],
        ],
        bullets: [
          'Flower structure: sepals (protection), petals (attraction), stamen (anther produces pollen, filament supports it), carpel (sticky stigma, style, ovary containing ovules).',
          'Insect-pollinated flowers: large coloured petals, scent, nectar, sticky pollen. Wind-pollinated flowers: small dull petals, feathery stigmas, large amounts of small smooth pollen.',
          'Fertilisation: the pollen grain germinates on the stigma, a pollen tube grows down the style, and the male gamete fuses with the egg cell inside the ovule.',
          'Double fertilisation in flowering plants: one gamete fuses with the egg cell (zygote → embryo), the other fuses with the polar nuclei (endosperm — food store).',
          'The ovule becomes the seed (seed coat protects the embryo) and the ovary swells into the fruit, which aids dispersal.',
        ],
      },
      {
        heading: 'Contraception',
        bullets: [
          'Barrier methods (condoms, diaphragms) physically block sperm and protect against STIs.',
          'Hormonal methods (pill, implant, injection) prevent ovulation or implantation; IUDs prevent implantation.',
          'Surgical methods: vasectomy (cutting the vas deferens) or tubal ligation (cutting the oviducts).',
          'Effectiveness depends on correct use; abstinence and behavioural methods are less reliable.',
        ],
      },
    ],
    examTip: 'Questions on meiosis love the phrase “source of variation”. Name the stage (crossing over in prophase I / independent segregation in metaphase I), explain what happens physically to the chromosomes, and state that new allele combinations result.',
  },
  {
    slug: 'inheritance-and-genetic-diversity',
    unit: 'Unit 2 · WBI12',
    unitName: 'Reproduction, Inheritance and Evolution',
    title: 'Inheritance & genetic diversity',
    intro: 'DNA carries genetic information; genes are sections of DNA that code for proteins; alleles are different versions of a gene. Predicting offspring ratios with genetic crosses, and understanding where genetic diversity comes from, are core skills.',
    sections: [
      {
        heading: 'DNA structure and replication',
        bullets: [
          'A nucleotide = deoxyribose sugar + phosphate + base (adenine, thymine, cytosine, guanine). Nucleotides are joined by phosphodiester bonds into a polynucleotide strand.',
          'DNA is a double helix: two antiparallel strands, sugar–phosphate backbones on the outside, bases on the inside, held by hydrogen bonds (A–T, C–G).',
          'Semi-conservative replication: helicase unzips the strands, each strand acts as a template, DNA polymerase joins free nucleotides by complementary base pairing — each new DNA molecule has one old and one new strand.',
          'Meselson and Stahl’s isotope experiment (¹⁴N/¹⁵N in caesium chloride gradients) confirmed semi-conservative replication.',
        ],
        defs: [
          ['Gene', 'A sequence of DNA bases that codes for the amino acid sequence of a polypeptide.'],
          ['Allele', 'A different version of a gene, e.g. B and b for flower colour.'],
          ['Genotype', 'The alleles an organism carries, e.g. Bb.'],
          ['Phenotype', 'The observable characteristics resulting from the genotype and the environment.'],
        ],
      },
      {
        heading: 'Genetic crosses',
        bullets: [
          'Dominant alleles mask recessive alleles; recessive phenotypes only appear in the homozygous recessive genotype (bb).',
          'Monohybrid crosses give a 3:1 phenotypic ratio (or 1:1 in a test cross with a homozygous recessive).',
          'Dihybrid crosses (two genes) give 9:3:3:1 when the genes assort independently.',
          'Codominance: both alleles are expressed (e.g. blood groups Iᴬ and Iᴮ); a third allele can give multiple alleles in a population (Iᴬ, Iᴮ, i).',
          'Sex-linked genes are carried on the X chromosome: males (XY) show recessive conditions such as haemophilia and red–green colour blindness more often because they have no second X to mask the allele.',
          'Carrier females (XᴴXʰ) are unaffected but pass the allele on.',
        ],
      },
      {
        heading: 'Sources of genetic diversity',
        bullets: [
          'Crossing over during prophase I of meiosis.',
          'Independent segregation of homologous chromosomes in metaphase I.',
          'Random fertilisation — any one of millions of sperm can fuse with the ovum.',
          'Mutation — random changes in DNA that create new alleles (see cellular control).',
        ],
      },
      {
        heading: 'Chromosomes and karyotypes',
        bullets: [
          'Human body cells are diploid (2n = 46); gametes are haploid (n = 23).',
          'Homologous chromosomes carry the same genes in the same positions (loci) — one from each parent.',
          'A karyotype is an image of chromosomes arranged in homologous pairs, used to detect abnormalities (e.g. Down syndrome, trisomy 21) and determine biological sex.',
        ],
      },
    ],
    examTip: 'In cross questions, always show the parental genotypes, the gametes, and the Punnett square. For “suggest the genotype” questions, work backwards from the phenotypic ratios given in the offspring.',
  },
  {
    slug: 'biodiversity-and-classification',
    unit: 'Unit 2 · WBI12',
    unitName: 'Reproduction, Inheritance and Evolution',
    title: 'Biodiversity & classification',
    intro: 'Biodiversity describes the variety of genes, species and ecosystems on Earth. Classification groups organisms by shared features and evolutionary history, and sampling techniques let us measure diversity in the field.',
    sections: [
      {
        heading: 'Classification',
        bullets: [
          'Binomial nomenclature: every species has a two-part Latin name — Genus species — written in italics (or underlined), e.g. Homo sapiens.',
          'The hierarchy: domain → kingdom → phylum → class → order → family → genus → species. Each step down contains more closely related organisms.',
          'Three domains: Archaea, Bacteria and Eukaryota — based largely on ribosomal RNA (rRNA) sequences.',
          'Phylogenetic trees show evolutionary relationships; branching points (nodes) represent common ancestors. The more recent the common ancestor, the more similar the DNA and the more closely related the species.',
        ],
      },
      {
        heading: 'Measuring biodiversity',
        defs: [
          ['Species richness', 'The number of different species present in a community.'],
          ['Index of diversity (d)', 'd = N(N−1) ÷ Σn(n−1), where N = total organisms and n = organisms of each species. Higher d = greater diversity.'],
        ],
        bullets: [
          'A community with many equally abundant species has a higher index than one dominated by a single species — evenness matters as well as richness.',
          'High biodiversity buffers ecosystems against change and disease; low biodiversity (e.g. monocultures) is fragile.',
        ],
      },
      {
        heading: 'Sampling techniques',
        bullets: [
          'Quadrats (random coordinates generated with random number tables) for plants and slow-moving animals — sample, count, calculate mean per quadrat.',
          'Transects for measuring change across a gradient: a line transect records organisms touching the line; a belt transect counts within quadrats placed along the line.',
          'Mark–release–recapture for mobile animals: N = (n₁ × n₂) ÷ n₃ (total = first marked × second caught ÷ recaptured marked). Assumes marking does not affect survival, marked individuals mix fully, and there is no immigration/emigration/birth/death.',
          'Use mean values and repeat sampling to make results reliable; identify species with keys.',
        ],
      },
    ],
    examTip: 'When asked to compare two areas using the index of diversity, calculate d for both and state which community is more diverse and why (more species and/or a more even distribution) — the calculation alone rarely gets full marks.',
  },
  {
    slug: 'evolution',
    unit: 'Unit 2 · WBI12',
    unitName: 'Reproduction, Inheritance and Evolution',
    title: 'Evolution',
    intro: 'Evolution is the change in the inheritable characteristics of a population over successive generations. Natural selection acting on genetic variation explains both adaptation and the formation of new species.',
    sections: [
      {
        heading: 'Natural selection',
        bullets: [
          'Within a population there is genetic variation (from mutation, meiosis and fertilisation).',
          'Organisms compete for limited resources; those with alleles better suited to the environment are more likely to survive and reproduce (differential survival and reproduction).',
          'The advantageous alleles are passed on and become more common in the population over generations.',
          'Darwin’s theory required variation, inheritance and competition; Lamarck’s earlier idea (inheritance of acquired characteristics) is not accepted.',
        ],
      },
      {
        heading: 'Types of selection',
        bullets: [
          'Directional selection: one extreme phenotype is favoured, shifting the mean (e.g. antibiotic-resistant bacteria, darker peppered moths in polluted woodland).',
          'Stabilising selection: the mean is favoured, extremes are selected against (e.g. human birth mass).',
          'Disruptive selection: both extremes are favoured over the mean — can lead to speciation (e.g. beak sizes in seed-cracking finches).',
        ],
      },
      {
        heading: 'Adaptations',
        bullets: [
          'Structural: physical features, e.g. thick fur in arctic foxes, streamlined bodies in dolphins.',
          'Physiological: internal processes, e.g. production of antifreeze proteins, antibiotic resistance enzymes.',
          'Behavioural: actions that improve survival, e.g. migration, courtship displays, nocturnal feeding.',
          'An adaptation improves survival and reproduction in a specific environment — it is not “designed”, it is selected.',
        ],
      },
      {
        heading: 'Drift, isolation and speciation',
        bullets: [
          'In small populations, allele frequencies can change by chance alone — genetic drift. The founder effect (a small group colonising a new area) and bottleneck events (population crash) reduce diversity.',
          'Speciation: populations become reproductively isolated so they can no longer interbreed to produce fertile offspring.',
          'Geographical (allopatric) isolation: a physical barrier splits a population; different selection pressures and drift cause the gene pools to diverge.',
          'Sympatric isolation: behavioural, temporal or mechanical barriers separate populations living in the same place.',
        ],
      },
      {
        heading: 'Evidence for evolution',
        bullets: [
          'Fossils — direct evidence, but the record is incomplete and soft-bodied organisms rarely fossilise.',
          'Comparative anatomy: homologous structures (same embryonic origin, different function, e.g. vertebrate limbs) indicate common ancestry; analogous structures (same function, different origin) indicate convergent evolution.',
          'Molecular biology: the more similar the DNA base sequence or protein amino acid sequence (e.g. cytochrome c), the more closely related the species.',
          'Antibiotic resistance: resistant bacteria survive treatment, reproduce, and pass on the resistance gene — evolution by selection, sometimes with plasmids transferring resistance between bacteria.',
        ],
      },
    ],
    examTip: 'For “explain how X evolved” questions use the full sequence: variation exists → selection pressure → individuals with the favourable allele survive and reproduce → allele frequency increases over generations. Skipping straight to “they adapted” scores poorly.',
  },
];
