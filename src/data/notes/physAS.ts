import type { Note } from './types';

export const physASNotes: Note[] = [
  {
    slug: 'motion-and-forces',
    unit: 'Unit 1 · WPH11',
    unitName: 'Mechanics and Materials',
    title: 'Motion & forces',
    intro: 'Kinematics describes how objects move; dynamics explains why, through forces. SUVAT equations, Newton’s laws and the analysis of forces in equilibrium are the foundation of everything else in mechanics.',
    sections: [
      {
        heading: 'Kinematics and SUVAT',
        bullets: [
          'Scalar (distance, speed) vs vector (displacement, velocity, acceleration) — direction matters for vectors; negative values indicate direction.',
          'The SUVAT equations apply only for constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t.',
          'Velocity–time graphs: gradient = acceleration, area = displacement. Displacement–time graphs: gradient = velocity.',
          'Free fall: a = g = 9.81 m s⁻² downwards (ignore air resistance unless told otherwise).',
        ],
      },
      {
        heading: 'Newton’s laws',
        defs: [
          ['Newton’s first law', 'A body remains at rest or in uniform motion unless acted on by a resultant force.'],
          ['Newton’s second law', 'F = ma — the resultant force equals mass × acceleration (or F = rate of change of momentum).'],
          ['Newton’s third law', 'Every action has an equal and opposite reaction — on different bodies, same type of force.'],
        ],
        bullets: [
          'Draw free-body diagrams: weight (mg, downwards), normal contact force, tension, friction, drag — arrows from the centre of mass.',
          'Weight = mass × gravitational field strength (W = mg); mass is constant, weight varies with g.',
          'On a slope: resolve mg into mg cos θ (perpendicular) and mg sin θ (parallel).',
          'Terminal velocity: when drag equals weight, acceleration is zero and velocity is constant.',
        ],
      },
      {
        heading: 'Drag and resistance',
        bullets: [
          'Drag depends on speed, cross-sectional area, shape and viscosity of the fluid: F = ½ρv²CᴅA for turbulent drag.',
          'Streamlining reduces drag; in fluids, Stokes’ law (F = 6πηrv) applies to slow motion of spheres.',
          'Skydiver: acceleration decreases as drag rises until forces balance at terminal velocity.',
        ],
      },
    ],
    examTip: 'SUVAT questions: list the known quantities (including implied values like “starts from rest” → u = 0, “comes to rest” → v = 0), choose the equation without the missing variable, and keep the sign convention consistent.',
  },
  {
    slug: 'work-energy-and-power',
    unit: 'Unit 1 · WPH11',
    unitName: 'Mechanics and Materials',
    title: 'Work, energy & power',
    intro: 'Energy is never created or destroyed — it is transferred between stores. Work, kinetic and potential energy, and power give a complete quantitative account of those transfers.',
    sections: [
      {
        heading: 'Work and energy',
        bullets: [
          'Work done = force × distance moved in the direction of the force: W = Fs cos θ (in J).',
          'Kinetic energy: Ek = ½mv². Gravitational potential energy near Earth: ΔEp = mgΔh.',
          'Elastic potential energy in a spring: E = ½FΔx = ½kΔx² (area under the force–extension graph).',
          'Principle of conservation of energy: total energy in a closed system is constant — losses to heat/sound are still energy transfers, not destruction.',
        ],
      },
      {
        heading: 'Power and efficiency',
        bullets: [
          'Power = rate of doing work: P = ΔE/Δt = Fv (watts; 1 W = 1 J s⁻¹).',
          'Efficiency = useful output energy ÷ total input energy (or useful power ÷ total power), always < 1 in practice.',
          'Efficiency is limited by friction, drag and electrical resistance — these dissipate energy as heat to the surroundings.',
        ],
      },
      {
        heading: 'Deformation of materials',
        bullets: [
          'Hooke’s law: F = kΔx while the extension is proportional to the force (limit of proportionality).',
          'Beyond the elastic limit, deformation is plastic (permanent); the spring constant is the gradient of the force–extension graph.',
          'Stretching is not the only deformation: compression and shear obey the same principles.',
          'Energy stored = area under the force–extension curve — for a linear spring, ½FΔx.',
        ],
      },
    ],
    examTip: 'Energy questions often hinge on where the energy goes: state the store it leaves, the store it enters, and any dissipative losses. “Energy is lost” usually means “transferred to thermal stores of the surroundings”.',
  },
  {
    slug: 'momentum-and-collisions',
    unit: 'Unit 1 · WPH11',
    unitName: 'Mechanics and Materials',
    title: 'Momentum & collisions',
    intro: 'Momentum (p = mv) is conserved in every collision. Combined with Newton’s second law in the form F = Δ(mv)/Δt, it explains everything from car crashes to rocket propulsion.',
    sections: [
      {
        heading: 'Conservation of momentum',
        bullets: [
          'Momentum is a vector: p = mv (kg m s⁻¹). Total momentum before = total momentum after any collision or explosion.',
          'Elastic collisions: kinetic energy is also conserved (no deformation). Inelastic collisions: kinetic energy is transferred to other stores (sound, heat, deformation).',
          'One-dimensional problems: define a positive direction and keep signs consistent; two-dimensional problems: resolve into components.',
          'Explosions: total momentum before is zero, so momentum after sums to zero (equal and opposite).',
        ],
      },
      {
        heading: 'Force and momentum',
        bullets: [
          'Newton’s second law in momentum form: F = Δp/Δt — the force equals the rate of change of momentum.',
          'This explains airbags and crumple zones: extending the impact time reduces the average force for the same change in momentum.',
          'Impulse = FΔt = Δp — the area under a force–time graph.',
        ],
      },
    ],
    examTip: 'Two-dimensional collision questions: draw the vector diagram, resolve momentum into x and y components, apply conservation to each axis separately, then combine with Pythagoras and trigonometry.',
  },
  {
    slug: 'materials',
    unit: 'Unit 1 · WPH11',
    unitName: 'Mechanics and Materials',
    title: 'Materials',
    intro: 'How materials respond to stress reveals their structure. Stress–strain graphs, Young’s modulus and the distinction between ductile, brittle and polymeric materials are the core of the topic.',
    sections: [
      {
        heading: 'Stress, strain and Young’s modulus',
        defs: [
          ['Stress (σ)', 'Force per unit cross-sectional area: σ = F/A (Pa).'],
          ['Strain (ε)', 'Extension per unit length: ε = ΔL/L (no units).'],
          ['Young’s modulus (E)', 'E = σ/ε — the stiffness of the material; the gradient of the linear section of a stress–strain graph (Pa).'],
        ],
        bullets: [
          'Using stress and strain (rather than force and extension) removes the effect of the sample’s dimensions, so materials can be compared directly.',
          'The area under the stress–strain graph up to a point = energy stored per unit volume (toughness up to fracture).',
          'Ductile materials (copper) have a long plastic region; brittle materials (glass) fracture with little plastic deformation; polymers (rubber) show S-shaped curves and large reversible extensions.',
        ],
      },
      {
        heading: 'Deformation behaviour',
        bullets: [
          'The limit of proportionality: beyond it, Hooke’s law no longer applies. The elastic limit: beyond it, deformation is permanent.',
          'Yield point: where plastic deformation begins rapidly; necking occurs in ductile materials before fracture.',
          'Composite materials (fibreglass, carbon fibre) combine stiffness and low density for specific applications.',
        ],
      },
    ],
    examTip: 'Young’s modulus questions mix units constantly: convert mm → m for length and mm² → m² for area before dividing. A correct value with unconverted units gets no marks.',
  },
  {
    slug: 'wave-properties',
    unit: 'Unit 2 · WPH12',
    unitName: 'Waves and Electricity',
    title: 'Wave properties',
    intro: 'Waves transfer energy without transferring matter. The basic quantities — wavelength, frequency, speed — and the behaviours of reflection, refraction and polarisation apply to everything from sound to light.',
    sections: [
      {
        heading: 'The basics',
        defs: [
          ['Wavelength (λ)', 'The distance between two equivalent points on adjacent waves (m).'],
          ['Frequency (f)', 'The number of complete waves passing a point per second (Hz).'],
          ['Wave speed (v)', 'v = fλ (m s⁻¹).'],
        ],
        bullets: [
          'Transverse waves: oscillations perpendicular to direction of travel (light, water waves, S-waves). Longitudinal: parallel (sound, P-waves) — they show compressions and rarefactions.',
          'Displacement–time graphs give the period T = 1/f; displacement–distance graphs give λ.',
          'Amplitude: maximum displacement from equilibrium; intensity ∝ amplitude² (for light and sound).',
          'Phase: points in phase are one or more whole wavelengths apart; antiphase = half a wavelength apart.',
        ],
      },
      {
        heading: 'Reflection, refraction and polarisation',
        bullets: [
          'Reflection: angle of incidence = angle of reflection (measured to the normal).',
          'Refraction: waves change speed and direction at a boundary; n = c/v and n₁ sin θ₁ = n₂ sin θ₂ (Snell’s law). Entering a denser medium bends towards the normal.',
          'Total internal reflection: when the angle of incidence exceeds the critical angle (sin c = n₂/n₁); used in optical fibres and prisms.',
          'Polarisation: only transverse waves can be polarised — it proves the oscillation direction; used in Polaroid sunglasses to cut glare.',
        ],
      },
      {
        heading: 'Electromagnetic waves',
        bullets: [
          'The EM spectrum in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma — all travel at 3 × 10⁸ m s⁻¹ in a vacuum.',
          'Each region has characteristic uses and effects: microwaves (heating, communication), IR (thermal imaging), UV (fluorescence, sterilisation), X-rays (imaging), gamma (sterilisation, cancer therapy).',
          'Photon model: E = hf (energy of a quantum of EM radiation; h = 6.63 × 10⁻³⁴ J s).',
        ],
      },
    ],
    examTip: 'Wave questions live or die on definitions: learn “wavelength”, “frequency”, “amplitude” and “phase difference” word-perfect, and always measure angles to the normal.',
  },
  {
    slug: 'superposition',
    unit: 'Unit 2 · WPH12',
    unitName: 'Waves and Electricity',
    title: 'Superposition & diffraction',
    intro: 'When waves meet, their displacements add — superposition. This single principle explains interference patterns, stationary waves and the diffraction that happens whenever waves pass through gaps or around obstacles.',
    sections: [
      {
        heading: 'Superposition and interference',
        bullets: [
          'When waves overlap, the resultant displacement is the sum of the individual displacements at each point.',
          'Path difference in whole wavelengths → constructive interference (antinodes, loud/bright); path difference of (n + ½)λ → destructive (nodes, quiet/dark).',
          'Young’s double slit: fringe spacing Δx = λD/s (slit separation s, slit-to-screen distance D) — measuring λ of light or microwaves.',
          'Coherence is required for a stable pattern: constant phase difference (two sources from one source, or lasers).',
        ],
      },
      {
        heading: 'Stationary waves',
        bullets: [
          'Formed by a wave and its reflection travelling in opposite directions — same frequency and amplitude.',
          'Nodes: points of zero displacement (always). Antinodes: maximum displacement. The distance between adjacent nodes = λ/2.',
          'Strings and air columns resonate at harmonics: fundamental f = v/2L (string), f = v/4L (closed pipe), f = v/2L (open pipe); overtones follow.',
          'Changing tension, length or mass per unit length changes the frequency — the basis of musical instruments and of experiments to find the speed of sound.',
        ],
      },
      {
        heading: 'Diffraction',
        bullets: [
          'Diffraction is most significant when the gap or obstacle size is comparable with the wavelength.',
          'Single slit: a central maximum of width 2λD/a — narrower slit (a) gives wider spreading.',
          'Gratings: sharp maxima where d sin θ = nλ (d = slit spacing); more slits give brighter, narrower maxima.',
          'Resolution (Rayleigh criterion): two sources are just resolved when the central maximum of one falls on the first minimum of the other — the limit of telescopes and microscopes.',
        ],
      },
    ],
    examTip: '“Describe and explain” interference answers need the path difference in wavelengths, the resulting phase relationship, and the effect on amplitude. Quote fringe-spacing or grating equations with symbols defined.',
  },
  {
    slug: 'dc-circuits',
    unit: 'Unit 2 · WPH12',
    unitName: 'Waves and Electricity',
    title: 'Direct current circuits',
    intro: 'Circuit physics combines current, potential difference and resistance with Kirchhoff’s laws — and the real behaviour of batteries, internal resistance and potential dividers completes the picture.',
    sections: [
      {
        heading: 'Current, voltage and resistance',
        defs: [
          ['Current (I)', 'Rate of flow of charge: I = ΔQ/Δt (A).'],
          ['Potential difference (V)', 'Energy transferred per unit charge: V = W/Q (V).'],
          ['Resistance (R)', 'R = V/I (Ω); resistivity ρ: R = ρL/A.'],
        ],
        bullets: [
          'Ohmic conductors: I ∝ V at constant temperature (ohmic region). Filament lamps and diodes are non-ohmic — resistance changes with temperature/current.',
          'Resistance increases with temperature in metals (more lattice vibrations impede electron flow); thermistors (NTC) decrease in resistance as temperature rises.',
          'Resistivity is a material property: ρ = RA/L — useful for wires and strain gauges.',
        ],
      },
      {
        heading: 'Kirchhoff’s laws and circuit analysis',
        bullets: [
          'First law: total current into a junction = total current out (conservation of charge).',
          'Second law: total e.m.f. around a loop = sum of IR drops (conservation of energy).',
          'Series: Rtotal = R₁ + R₂; parallel: 1/Rtotal = 1/R₁ + 1/R₂. Power: P = IV = I²R = V²/R.',
          'Potential divider: Vout = Vin × R₂/(R₁+R₂) — used with LDRs and thermistors in sensing circuits.',
        ],
      },
      {
        heading: 'e.m.f., internal resistance and capacitance',
        bullets: [
          'A cell has internal resistance r: e.m.f. = terminal p.d. + Ir. Terminal voltage falls as current rises: V = ε − Ir.',
          'Maximum power transfer occurs when the external resistance equals r.',
          'Capacitors store charge: Q = CV; energy stored E = ½QV = ½CV². Discharge through a resistor: Q = Q₀e^(−t/RC), time constant RC.',
          'Charging: V rises exponentially; discharging: V falls exponentially — used in timing circuits and defibrillators.',
        ],
      },
    ],
    examTip: 'Circuit problems: label currents at junctions before writing equations, and be consistent with loop directions. For internal resistance, plot terminal pd against current — gradient = −r, y-intercept = e.m.f.',
  },
  {
    slug: 'physics-measurement',
    unit: 'Unit 3 · WPH13',
    unitName: 'Practical Skills in Physics I',
    title: 'Measurement & precision',
    intro: 'Physics is a quantitative science: every measurement carries uncertainty. Choosing the right instrument, calibrating it and reporting uncertainty honestly are assessed on every paper.',
    sections: [
      {
        heading: 'Instruments and their uncertainties',
        bullets: [
          'Uncertainty of one reading = ± half the smallest division (a 30 cm ruler: ±0.5 mm; a metre rule used for a length measured at both ends: ±1 mm total).',
          'Digital instruments: uncertainty is ± the smallest division on the display (or ±1 in the last digit).',
          'Repeat measurements and take a mean; timing should use ≥ 10 oscillations to reduce percentage uncertainty.',
          'Calibrate before use (zero error, level the spirit level, tare the balance).',
        ],
      },
      {
        heading: 'Uncertainty and error',
        bullets: [
          'Absolute uncertainty has the same units as the measurement; percentage uncertainty = (uncertainty ÷ value) × 100.',
          'When multiplying/dividing: add percentage uncertainties. When adding/subtracting: add absolute uncertainties.',
          'A quantity raised to a power n multiplies the percentage uncertainty by n (e.g. r² doubles it).',
          'Random errors scatter readings both ways (reduced by repeats); systematic errors shift all readings (reduced by calibration).',
        ],
      },
      {
        heading: 'Graphical analysis',
        bullets: [
          'Plot error bars; if a line of best fit can be drawn through all bars, the data are consistent.',
          'Linearise relationships: T² vs L for a pendulum (T = 2π√(L/g)), V vs I for a resistor, 1/v vs 1/u for lenses.',
          'Gradient and intercept uncertainties: use the max and min gradients through the error bars.',
          'Identify anomalies and exclude them only with a physical justification.',
        ],
      },
    ],
    examTip: 'The classic mark: “calculate the percentage uncertainty in g” where g = 4π²L/T². Remember the power rule — the T term doubles the percentage uncertainty before you add anything.',
  },
  {
    slug: 'physics-planning',
    unit: 'Unit 3 · WPH13',
    unitName: 'Practical Skills in Physics I',
    title: 'Planning investigations',
    intro: 'A good plan makes the physics testable: one variable changed, all others controlled, and measurements chosen to keep uncertainties small. These skills are directly assessed in the written papers.',
    sections: [
      {
        heading: 'Designing the experiment',
        bullets: [
          'State the hypothesis quantitatively (e.g. “T ∝ √L for a simple pendulum”).',
          'Independent variable: ≥ 5 values spread across the range; dependent variable measured with the most precise instrument available.',
          'Control variables: name and control each (same pendulum bob and angle < 10°, same string, same thermometer).',
          'Safety: masses falling, hot liquids, laser/UV sources, high voltages — with specific controls.',
          'Describe the analysis in advance: what will be plotted, what gradient means, what result would support the hypothesis.',
        ],
      },
      {
        heading: 'Improving precision',
        bullets: [
          'Reduce timing error: time many oscillations and divide (≥ 10), use a fiducial marker at the equilibrium position.',
          'Reduce length error: measure with the string in place, from the same two points.',
          'Use sensors and data loggers for continuous measurement; but check sampling rate and calibration.',
          'Repeat whole sets of readings, not just single values.',
        ],
      },
    ],
    examTip: 'Planning answers are marked on specificity and physics reasoning: “measure the time for 20 oscillations so the reaction-time uncertainty is 1/20th of the total” shows both the method and the reason.',
  },
];
