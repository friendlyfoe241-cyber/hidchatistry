import type { Note } from './types';

export const unit5Notes: Note[] = [
  {
    slug: 'planning-experiments',
    unit: 'Unit 5 · WBI15',
    unitName: 'Practical Skills in Biology I',
    title: 'Planning experiments',
    intro: 'The written papers assess experimental design directly: given a scenario, you must identify variables, design a valid method, and consider risks. A well-planned investigation tests one clear hypothesis with everything else controlled.',
    sections: [
      {
        heading: 'Hypotheses',
        bullets: [
          'A hypothesis is a testable prediction, often phrased as “As X increases, Y will…” — it must be falsifiable.',
          'The null hypothesis (H₀) states there is no significant difference/relationship — this is what statistical tests examine.',
          'A pilot experiment lets you check the method works, refine ranges, and identify problems before the real investigation.',
        ],
      },
      {
        heading: 'Variables',
        defs: [
          ['Independent variable', 'The variable you deliberately change.'],
          ['Dependent variable', 'The variable you measure.'],
          ['Controlled variable', 'Any other factor kept constant to keep the test fair.'],
        ],
        bullets: [
          'Choose a sensible range with at least five values for the independent variable, spread evenly, plus repeats.',
          'Controls: a negative control (known to show no effect) and/or a positive control (known to show the effect) demonstrate the apparatus and method are working.',
          'Repeat measurements and calculate a mean — this identifies anomalies and improves reliability.',
        ],
      },
      {
        heading: 'Method and safety',
        bullets: [
          'Write the method as numbered, replicable steps: apparatus with precise volumes/masses, concentrations, times and temperatures stated.',
          'Select apparatus with suitable resolution and range (e.g. a 100 cm³ measuring cylinder vs a 1 cm³ pipette for 2.0 cm³).',
          'Risk assessment: identify hazards (biological, chemical, physical), state the risk and the specific precautions (wear goggles, use a water bath instead of a flame, handle microorganisms aseptically).',
          'Consider sample size and how results will be analysed before starting — deciding on statistical tests in advance avoids bias.',
        ],
      },
    ],
    examTip: 'Planning questions reward specificity. “Water bath set at 30 °C for 10 minutes” scores; “keep the temperature constant” does not. Control variables must be stated with a value or a method of control wherever possible.',
  },
  {
    slug: 'recording-and-analysing-data',
    unit: 'Unit 5 · WBI15',
    unitName: 'Practical Skills in Biology I',
    title: 'Recording & analysing data',
    intro: 'How data are recorded and processed matters as much as how they are collected. Tables must be clear and consistent; graphs must make relationships obvious; calculations must carry the correct units and precision.',
    sections: [
      {
        heading: 'Tables',
        bullets: [
          'Put the independent variable in the left-hand column and the dependent variable to the right.',
          'Headings carry units: “Time / s”, “Temperature / °C”. No units inside the cells.',
          'Use consistent decimal places — normally one more than the smallest division of the apparatus used.',
          'Record raw readings (not just means) so anomalies can be identified; calculate means and rates in extra columns.',
        ],
      },
      {
        heading: 'Graphs',
        bullets: [
          'Line graph: both variables continuous (e.g. rate vs temperature) — join points with a smooth curve or straight lines of best fit.',
          'Bar chart: one variable is categorical/discontinuous (e.g. different food types) — with a gap between bars.',
          'Scatter diagram: two continuous variables to look for a correlation; the line of best fit shows the trend.',
          'Axes are labelled with quantities and units; scales are even and use most of the graph paper.',
          'Plotting rate: rate = 1 ÷ time (or amount ÷ time) — state which quantity is being divided.',
        ],
      },
      {
        heading: 'Processing data',
        bullets: [
          'Mean = Σx ÷ n. Standard deviation shows the spread of data around the mean (see Unit 6).',
          'Percentage change = (final − initial) ÷ initial × 100. Percentage uncertainty of a measurement = (uncertainty ÷ measured value) × 100.',
          'Surface area : volume calculations: SA = 6 × side² for a cube, V = side³ — link the ratio to diffusion or enzyme rate data.',
          'State conclusions only from the data you have: quote figures, describe trends, and avoid extrapolating beyond your range.',
        ],
      },
    ],
    examTip: '“Describe the trend” and “draw a conclusion” are different questions: trend = what the data do (increase, plateau after 40 °C); conclusion = why (enzyme denaturing beyond the optimum) and any limitations.',
  },
  {
    slug: 'evaluation-and-uncertainty',
    unit: 'Unit 5 · WBI15',
    unitName: 'Practical Skills in Biology I',
    title: 'Evaluation & uncertainty',
    intro: 'Every measurement has uncertainty. Evaluating a method means identifying the sources of error, judging how much they affect the results, and suggesting realistic improvements — not simply saying “the experiment was wrong”.',
    sections: [
      {
        heading: 'Key vocabulary',
        defs: [
          ['Accuracy', 'How close a measurement is to the true value.'],
          ['Precision', 'How close repeated measurements are to each other (small spread).'],
          ['Reliability', 'How consistent the results are when repeated — improved by repeats and means.'],
        ],
        bullets: [
          'Random errors vary unpredictably in both directions and affect precision; they are reduced by repeating readings and calculating a mean.',
          'Systematic errors shift all readings in the same direction (e.g. an uncalibrated balance reading +0.2 g); repeats do not remove them — recalibration does.',
          'An anomaly is a value that does not fit the pattern. It may be excluded only with a stated reason (e.g. a known procedural mistake), never simply because it is inconvenient.',
        ],
      },
      {
        heading: 'Uncertainty',
        bullets: [
          'Uncertainty is expressed as a range: a measurement of 5.0 cm³ from a 10 cm³ measuring cylinder with 1 cm³ divisions has an uncertainty of ±0.5 cm³.',
          'Percentage uncertainty = (uncertainty ÷ value) × 100. Total percentage uncertainty for values that are multiplied or divided is the sum of the individual percentage uncertainties.',
          'Error bars show the range of uncertainty; overlapping error bars suggest the difference may not be significant.',
        ],
      },
      {
        heading: 'Evaluating and improving',
        bullets: [
          'For each limitation: state the problem, explain its effect on the results, and suggest a specific improvement (e.g. “the room temperature varied ±2 °C, affecting enzyme rate — use a water bath”).',
          'Always suggest further investigations: a wider range, more values, different organisms/concentrations, or measuring a different dependent variable.',
          'Judge how confident you can be in the conclusion: how large is the effect compared with the uncertainty?',
        ],
      },
    ],
    examTip: '“Evaluate” wants a judgement with evidence: quality of the data (repeatable? anomalies?), validity of the method (was everything but the independent variable controlled?), and what you would change. Avoid vague statements like “use more accurate equipment”.',
  },
];
