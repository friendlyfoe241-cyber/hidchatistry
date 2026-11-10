import type { Note } from './types';

export const unit6Notes: Note[] = [
  {
    slug: 'advanced-practical-techniques',
    unit: 'Unit 6 · WBI16',
    unitName: 'Practical Skills in Biology II',
    title: 'Advanced practical techniques',
    intro: 'Unit 6 builds on Unit 5 with more demanding techniques and quantitative skills. Being able to describe — and evaluate — these methods is assessed on every paper.',
    sections: [
      {
        heading: 'Techniques you should know',
        bullets: [
          'Colorimetry: a colored solution absorbs more light the more concentrated it is. Prepare a series of known concentrations, read absorbance, and plot a calibration curve to find unknown concentrations.',
          'Chromatography: separates pigments or sugars; Rf = distance moved by the solute ÷ distance moved by the solvent. Use a sealed tank with the solvent below the pencil baseline.',
          'Potometer: measures water uptake by a plant shoot as a proxy for transpiration — changes in one variable (light, wind, humidity) are tested with all others controlled.',
          'Serial dilutions: each step dilutes by the same factor (e.g. 1 in 10), producing a range of concentrations from one stock solution; use fresh tips at each step.',
          'Microscopy and field techniques: eyepiece graticule calibration (stage micrometer), slide preparation, staining, and sampling with quadrats and transects.',
          'Enzyme investigations: control pH with buffer solutions, temperature with water baths, and use initial rates for fair comparison.',
        ],
      },
      {
        heading: 'Good practical practice',
        bullets: [
          'Aseptic technique: flame loop, work near a Bunsen, disinfect surfaces — prevents contamination of cultures.',
          'Calibrate equipment before use; check zero readings; use appropriate apparatus for the volumes involved.',
          'Plan the order of operations (e.g. prepare all water baths before adding enzyme) so timing is consistent across repeats.',
          'Record everything as you go — including deviations from the plan.',
        ],
      },
      {
        heading: 'Analytical chemistry-style calculations',
        bullets: [
          'Concentration = amount ÷ volume; watch unit conversions (mg cm⁻³ ↔ g dm⁻³ ↔ % ).',
          'From a calibration curve, read unknown concentrations off the line — never extrapolate beyond the standards.',
          'Rates: choose sensible units (e.g. cm³ s⁻¹, mm min⁻¹) and state them every time.',
        ],
      },
    ],
    examTip: 'For technique questions, describe what you do and why: “place the tube in a water bath at 30 °C so that temperature is constant and the enzyme works at a consistent rate”. The “why” is what earns the mark.',
  },
  {
    slug: 'statistical-tests',
    unit: 'Unit 6 · WBI16',
    unitName: 'Practical Skills in Biology II',
    title: 'Graphs & statistical tests',
    intro: 'Statistical tests tell you whether a result is likely to be real or due to chance. Choosing the right test depends on the type of data: means of continuous data need a t-test; counts in categories need a chi-squared test.',
    sections: [
      {
        heading: 'Describing data spread',
        bullets: [
          'Mean (x̄) = Σx ÷ n — the centre of the data.',
          'Standard deviation (σ) measures the spread around the mean; a small σ means data are clustered close to the mean.',
          'The mean ± 1 SD covers about 68% of values in a normal distribution; error bars on graphs often show ±1 SD.',
          'Larger samples give more reliable means and smaller standard errors.',
        ],
      },
      {
        heading: 'The t-test',
        bullets: [
          'Use when comparing the means of two independent samples of continuous data (e.g. mean leaf area in two habitats).',
          'The t-statistic is calculated from the means, standard deviations and sample sizes of the two groups.',
          'Degrees of freedom = n₁ + n₂ − 2. Compare the calculated t to the critical value at p = 0.05.',
          'If t exceeds the critical value: reject the null hypothesis — the difference is significant (less than 5% probability it is due to chance).',
          'If not: accept the null hypothesis — the difference could easily be due to chance.',
        ],
      },
      {
        heading: 'The chi-squared test',
        bullets: [
          'Use for counts in categories (e.g. observed phenotypic ratios, numbers of organisms in different habitats).',
          'χ² = Σ (observed − expected)² ÷ expected. Degrees of freedom = categories − 1.',
          'Compare to the critical value at p = 0.05 as for the t-test.',
          'Never use chi-squared on percentages or means — and never use a t-test on categorical counts.',
        ],
      },
      {
        heading: 'Interpreting significance',
        bullets: [
          'p < 0.05 means the result is “statistically significant”: there is less than a 5% probability the pattern arose by chance.',
          'Statistically significant is not the same as biologically important — assess the size of the effect too.',
          'Significant tests do not prove a cause: correlation and causation are different things.',
        ],
      },
    ],
    examTip: 'A common 2-mark question: “State a suitable statistical test and justify its choice.” Name the test, state the data type (“two independent samples of continuous data / counts of categories”), and give the expected pattern or hypothesis being tested.',
  },
  {
    slug: 'scientific-method',
    unit: 'Unit 6 · WBI16',
    unitName: 'Practical Skills in Biology II',
    title: 'Scientific method',
    intro: 'Biology is evidence-based. Understanding how hypotheses are tested, how results are evaluated and communicated, and where ethics fit in underpins every practical and every data question.',
    sections: [
      {
        heading: 'Features of the scientific approach',
        bullets: [
          'Observations lead to questions; questions lead to testable, falsifiable hypotheses.',
          'Experiments test one variable at a time with controls, so conclusions can be attributed to a single cause.',
          'Objectivity: data are recorded without bias; results (including unexpected ones) are reported as found.',
          'Peer review: other scientists scrutinise methods, data and conclusions before publication — errors and fraud are challenged.',
          'Theories are explanations supported by large bodies of evidence and are open to revision if new evidence appears.',
        ],
      },
      {
        heading: 'Drawing conclusions',
        bullets: [
          'Use data as evidence: quote figures and statistical outcomes (“t = 3.12 > critical value 2.10, p < 0.05”).',
          'Link the conclusion back to the hypothesis: supported, refuted, or only partially supported.',
          'Distinguish correlation from causation, and avoid extrapolating beyond the data collected.',
        ],
      },
      {
        heading: 'Ethics',
        bullets: [
          'Human participants: informed consent, the right to withdraw, confidentiality, and no harm.',
          'Animals: the 3Rs — replace (use alternatives), reduce (fewer organisms), refine (minimise suffering).',
          'Microorganisms: aseptic technique and safe disposal (disinfectant/autoclave) protect the experimenter and the environment.',
          'Genetic technologies raise wider ethical questions (GM crops, cloning, gene therapy) that science alone cannot answer.',
        ],
      },
    ],
    examTip: 'Questions about the nature of science (“explain why peer review is important”) want reasoned points: reliability of published work, detection of errors or bias, and public confidence in scientific findings.',
  },
];
