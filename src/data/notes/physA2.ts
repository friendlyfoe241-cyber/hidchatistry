import type { Note } from './types';

export const physA2Notes: Note[] = [
  {
    slug: 'circular-motion',
    unit: 'Unit 4 · WPH14',
    unitName: 'Further Mechanics and Thermal Physics',
    title: 'Circular motion',
    intro: 'An object moving in a circle has constant speed but constantly changing velocity — so it accelerates towards the centre. Circular motion and gravitation together explain orbits, satellites and the experience of “centrifugal” forces.',
    sections: [
      {
        heading: 'Angular motion',
        defs: [
          ['Angular displacement (θ)', 'The angle swept, in radians (2π rad = 360°).'],
          ['Angular velocity (ω)', 'ω = Δθ/Δt = v/r = 2πf (rad s⁻¹).'],
          ['Centripetal acceleration', 'a = v²/r = ω²r, directed towards the centre of the circle.'],
        ],
        bullets: [
          'The centripetal force is the resultant force towards the centre: F = mv²/r = mω²r. It is not a new force — tension, friction, gravity or normal contact force can provide it.',
          '“Centrifugal force” is the inertia felt in the rotating frame — in an inertial frame only the centripetal force exists.',
          'On a roundabout: friction provides the centripetal force; on a banked track, the horizontal component of the normal force does.',
        ],
      },
      {
        heading: 'Orbits',
        bullets: [
          'A satellite in orbit: gravity provides the centripetal force, so GMm/r² = mv²/r → v = √(GM/r).',
          'Geostationary satellites: period 24 h, orbit above the equator — used for communication and weather.',
          'Lower orbits move faster and have shorter periods (T = 2π√(r³/GM)).',
          'Weightlessness in orbit is free fall — gravity still acts, but there is no contact force.',
        ],
      },
    ],
    examTip: 'For “identify the force providing centripetal acceleration” always name the physical force (gravity, tension, friction) — “centripetal force” is the resultant, not a new kind of force.',
  },
  {
    slug: 'simple-harmonic-motion',
    unit: 'Unit 4 · WPH14',
    unitName: 'Further Mechanics and Thermal Physics',
    title: 'Simple harmonic motion',
    intro: 'Simple harmonic motion (SHM) is oscillation where acceleration is proportional to displacement and directed towards the equilibrium position: a = −ω²x. Springs and pendulums follow it — and so do many systems in later topics.',
    sections: [
      {
        heading: 'The defining equations',
        bullets: [
          'Displacement: x = A sin(ωt) (from equilibrium) or x = A cos(ωt) (from an extreme).',
          'Velocity: v = ±ω√(A² − x²); maximum velocity ωA at x = 0; zero at the extremes.',
          'Acceleration: a = −ω²x; maximum ω²A at the extremes, zero at equilibrium.',
          'Period: T = 2π/ω. For a mass on a spring, T = 2π√(m/k); for a simple pendulum, T = 2π√(L/g) (small angles only).',
        ],
      },
      {
        heading: 'Graphs and energy',
        bullets: [
          'x–t is a sine/cosine curve; v–t is a quarter-cycle out of step; a–t is in antiphase with x–t.',
          'Energy exchange: at maximum displacement all energy is potential (½kA²); at equilibrium all is kinetic (½mω²A²); total energy is constant and ∝ A².',
          'With damping: amplitude decays exponentially and energy is transferred to thermal stores; at resonance (driving frequency = natural frequency) amplitude is maximal.',
          'Resonance applications: tuning circuits, microwave heating of water, bridges (avoided!), seismometers.',
        ],
      },
    ],
    examTip: 'SHM questions reward knowing where the extremes are: state that acceleration is maximum at ±A and velocity is maximum at x = 0. If asked to show motion is SHM, derive a = −(constant)×x from the forces.',
  },
  {
    slug: 'thermal-physics',
    unit: 'Unit 4 · WPH14',
    unitName: 'Further Mechanics and Thermal Physics',
    title: 'Thermal physics & temperature',
    intro: 'Temperature measures the average random kinetic energy of particles. Heat transfers change internal energy — and specific and latent heats quantify exactly how much energy is needed.',
    sections: [
      {
        heading: 'Temperature and internal energy',
        bullets: [
          'Internal energy = sum of random kinetic and potential energies of the particles in a system.',
          'Temperature scales: Celsius (ice → steam, 0–100 °C) and the absolute scale T(K) = θ(°C) + 273.15; 0 K = −273.15 °C (no lower limit).',
          'Absolute zero: particles have minimum internal energy; not “zero energy” — quantum zero-point motion remains.',
          'Thermal equilibrium: net heat transfer is zero when temperatures are equal.',
        ],
      },
      {
        heading: 'Heating and phase changes',
        defs: [
          ['Specific heat capacity (c)', 'Energy to raise the temperature of 1 kg by 1 K: E = mcΔT (J kg⁻¹ K⁻¹).'],
          ['Specific latent heat (L)', 'Energy to change the state of 1 kg without temperature change: E = mL (J kg⁻¹).'],
        ],
        bullets: [
          'During a phase change, energy goes into breaking intermolecular forces (potential energy), so temperature is constant.',
          'Heating curve plateaus correspond to melting and boiling; cooling curves reverse the process.',
          'Measuring c electrically: E = IVt = mcΔT; heat losses mean measured c is overestimated unless insulation/cooling correction is used.',
        ],
      },
      {
        heading: 'Heat transfer',
        bullets: [
          'Conduction: kinetic energy passed along a chain of vibrating particles; faster in metals (free electrons).',
          'Convection: less dense warm fluid rises, cooler fluid sinks — circulation currents.',
          'Radiation: emission and absorption of infrared; a perfect black body absorbs all radiation incident on it.',
          'Stefan–Boltzmann: P = σAT⁴ (total power radiated; σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴); Wien’s law: λmax = b/T (b = 2.90 × 10⁻³ m K).',
        ],
      },
    ],
    examTip: 'Latent heat vs specific heat: if the temperature is changing, use mcΔT; if the state is changing at constant temperature, use mL. Mixing the two is the most common error in this topic.',
  },
  {
    slug: 'ideal-gases',
    unit: 'Unit 4 · WPH14',
    unitName: 'Further Mechanics and Thermal Physics',
    title: 'Ideal gases',
    intro: 'The ideal gas model treats molecules as elastic, point-like particles with no intermolecular forces. It links pressure, volume and temperature — and derives the kinetic theory equation that ties temperature to molecular speed.',
    sections: [
      {
        heading: 'The gas laws and the ideal gas equation',
        bullets: [
          'Boyle’s law: pV = constant at constant T. Charles’s law: V ∝ T at constant p. Pressure law: p ∝ T at constant V.',
          'Ideal gas equation: pV = nRT (n in mol, R = 8.31 J K⁻¹ mol⁻¹), or pV = NkT (k = 1.38 × 10⁻²³ J K⁻¹).',
          'An ideal gas obeys these laws at all conditions; real gases deviate at high pressure/low temperature where molecular volume and intermolecular forces matter.',
        ],
      },
      {
        heading: 'Kinetic theory',
        bullets: [
          'Assumptions: large numbers of molecules, random motion, elastic collisions, negligible molecular volume, no intermolecular forces except during collisions.',
          'Pressure arises from the change of momentum of molecules colliding with the walls: p = ⅓(N/V)mc²(rms).',
          'Mean kinetic energy ∝ absolute temperature: ½mc²(rms) = 3/2 kT — temperature is a measure of mean molecular kinetic energy.',
          'Root-mean-square speed: crms = √(3kT/m); heavier molecules move more slowly at the same temperature.',
        ],
      },
      {
        heading: 'Using the equations',
        bullets: [
          'Typical tasks: find the number of moles, the mass of gas, or a new pressure/volume after a change of conditions.',
          'Worked example pattern: write pV = nRT, convert units (Pa, m³, K), rearrange, substitute.',
          'Graphs: p vs V (hyperbola), p vs T (straight line extrapolating to −273 °C), V vs T (Charles’s law).',
        ],
      },
    ],
    examTip: 'State the assumptions of the kinetic model when asked “explain, in terms of molecules, why pressure increases” — more collisions per second and greater momentum change per collision as temperature rises.',
  },
  {
    slug: 'gravitational-fields',
    unit: 'Unit 5 · WPH15',
    unitName: 'Fields and Nuclear Physics',
    title: 'Gravitational fields',
    intro: 'Masses create gravitational fields; the field strength g is the force per unit mass. Potential, orbital motion and escape velocity all follow from the inverse-square law.',
    sections: [
      {
        heading: 'Field strength and potential',
        defs: [
          ['Gravitational field strength (g)', 'Force per unit mass: g = F/m (N kg⁻¹). For a point mass: g = GM/r².'],
          ['Gravitational potential (V)', 'Work done per unit mass bringing a mass from infinity: V = −GM/r (J kg⁻¹).'],
        ],
        bullets: [
          'Field lines point towards the mass (radial for a point mass); closer lines mean stronger field.',
          'Potential is always negative (zero at infinity); equipotentials are spheres around a point mass.',
          'Near Earth’s surface g ≈ 9.81 N kg⁻¹ and the field is uniform (parallel, equally spaced lines).',
        ],
      },
      {
        heading: 'Potential energy and orbits',
        bullets: [
          'Gravitational potential energy of mass m: Ep = −GMm/r. Energy to move from r₁ to r₂: ΔEp = GMm(1/r₁ − 1/r₂).',
          'Orbital speed: v = √(GM/r). Orbital period: T = 2π√(r³/GM) (Kepler’s third law: T² ∝ r³).',
          'Escape velocity: the speed giving enough kinetic energy to reach zero potential: vesc = √(2GM/r).',
          'Geostationary orbits (period = 24 h, equatorial) vs low Earth orbits (faster, used for imaging).',
        ],
      },
    ],
    examTip: 'Note the minus signs: gravitational potential and potential energy are negative because the field is attractive. Energy questions usually need Δ between two radii — never write GMm/r as a positive energy.',
  },
  {
    slug: 'electromagnetic-fields',
    unit: 'Unit 5 · WPH15',
    unitName: 'Fields and Nuclear Physics',
    title: 'Electric & magnetic fields',
    intro: 'Electric fields act on charges, magnetic fields on moving charges. Together they explain capacitors, the motion of charged particles, electric motors and electromagnetic induction.',
    sections: [
      {
        heading: 'Electric fields',
        bullets: [
          'Field strength: E = F/Q = kQ/r² (radial) or E = V/d (uniform between parallel plates).',
          'Field lines point from positive to negative; the potential around a point charge V = kQ/r.',
          'Equipotentials are perpendicular to field lines; no work is done moving along an equipotential.',
          'Capacitance C = Q/V; in parallel C = C₁ + C₂; in series 1/C = 1/C₁ + 1/C₂; energy stored ½CV².',
          'Charging/discharging through a resistor: exponential, time constant RC; applications: timing circuits, defibrillators, camera flashes.',
        ],
      },
      {
        heading: 'Magnetic fields and forces',
        bullets: [
          'Field around a straight wire: concentric circles (right-hand grip rule); around a solenoid: like a bar magnet.',
          'Force on a moving charge: F = Bqv sin θ; force on a wire: F = BIL sin θ (Fleming’s left-hand rule).',
          'Charged particles in a magnetic field move in circles: Bqv = mv²/r → r = mv/(Bq). Mass spectrometers and cyclotrons use this.',
          'Magnetic flux Φ = BA cos θ; flux linkage = NΦ (Wb).',
        ],
      },
      {
        heading: 'Electromagnetic induction',
        bullets: [
          'Faraday’s law: the induced e.m.f. equals the rate of change of flux linkage: ε = −N ΔΦ/Δt (Lenz’s law gives the direction — the induced current opposes the change).',
          'A rotating coil in a magnetic field produces a sinusoidal e.m.f.; the peak value ε₀ = NBAω.',
          'Transformers: Vp/Vs = Np/Ns; for 100% efficiency VpIp = VsIs — used to step voltage up/down in the National Grid.',
          'Eddy currents, laminating cores and shielding reduce energy losses.',
        ],
      },
    ],
    examTip: 'For induced e.m.f. questions, say what is changing (flux, area, angle, field strength) and that the induced current opposes that change (Lenz’s law) — and remember the minus sign means “opposes”.',
  },
  {
    slug: 'nuclear-physics',
    unit: 'Unit 5 · WPH15',
    unitName: 'Fields and Nuclear Physics',
    title: 'Nuclear physics',
    intro: 'The nucleus is held together by the strong nuclear force — but some nuclei are unstable. Radioactivity, decay equations, binding energy and the fission/fusion that power reactors and stars all come from nuclear structure.',
    sections: [
      {
        heading: 'Nuclear structure and forces',
        bullets: [
          'Nucleons (protons and neutrons) are held by the strong nuclear force: it is attractive at short range (~1–3 fm), repulsive below ~0.5 fm, and has no effect beyond ~3 fm.',
          'Nuclide notation ᴬ_zX: A = nucleons, Z = protons; isotopes share Z, differ in neutron number.',
          'Nuclear radius: R = R₀A^(1/3) (R₀ ≈ 1.2 fm) — density of nuclear matter is constant.',
        ],
      },
      {
        heading: 'Radioactive decay',
        bullets: [
          'α decay: ⁴₂He emitted; A − 4, Z − 2. β⁻ decay: neutron → proton + electron + antineutrino; Z + 1. γ: photon from an excited nucleus.',
          'Decay is random and spontaneous: activity A = λN; decay constant λ = ln2/t½; N = N₀e^(−λt).',
          'Half-life: the time for half the nuclei to decay; large t½ means low activity.',
          'The decay constant is unaffected by temperature, pressure or chemical state — evidence that the nucleus, not the atom, controls decay.',
        ],
      },
      {
        heading: 'Mass–energy and nuclear power',
        bullets: [
          'E = mc²; mass defect (Δm) between a nucleus and its nucleons is converted to binding energy.',
          'Binding energy per nucleon peaks at Fe-56: fission of heavy nuclei and fusion of light nuclei both release energy.',
          'Fission chain reaction: U-235 + neutron → fragments + 2–3 neutrons; moderated (graphite/water) and controlled with boron control rods.',
          'Fusion powers the stars: ²₁H + ³₁H → ⁴₂He + n; needs ~10⁸ K to overcome Coulomb repulsion; no long-lived radioactive waste but hard to sustain.',
        ],
      },
    ],
    examTip: 'Decay equations must balance: total A and total Z the same on both sides. For half-life questions, either halve repeatedly or use N = N₀e^(−λt) with λ = ln2/t½ — and convert units (minutes → seconds) consistently.',
  },
  {
    slug: 'particle-physics',
    unit: 'Unit 5 · WPH15',
    unitName: 'Fields and Nuclear Physics',
    title: 'Particle physics',
    intro: 'Protons and neutrons are not fundamental: quarks, held together by the strong force mediated by gluons, make up the hadrons. Leptons, exchange particles and the Standard Model organise everything smaller.',
    sections: [
      {
        heading: 'The Standard Model',
        defs: [
          ['Hadrons', 'Particles made of quarks that feel the strong force (baryons: 3 quarks; mesons: quark–antiquark).'],
          ['Leptons', 'Fundamental particles that do not feel the strong force (electron, muon, tau + their neutrinos).'],
        ],
        bullets: [
          'Quark flavours: up (+⅔e), down (−⅓e); heavier: charm, strange, top, bottom. Antiquarks have opposite charge.',
          'Proton = uud (+1), neutron = udd (0); strangeness is conserved in strong interactions (associated production of strange particles).',
          'Beta decay involves the weak force: d → u + e⁻ + antineutrino (β⁻); u → d + e⁺ + neutrino (β⁺).',
          'Exchange particles: photons (EM), W⁺/W⁻/Z⁰ (weak), gluons (strong), (graviton, hypothetical).',
        ],
      },
      {
        heading: 'Interactions and conservation',
        bullets: [
          'Conservation laws: charge, baryon number, lepton number, (and strangeness in strong/EM interactions).',
          'Feynman diagrams show interactions at vertices — time flows left→right (or bottom→top), particles are lines, exchange particles are wavy/dashed.',
          'Deep inelastic scattering showed protons contain point-like quarks — evidence for the quark model.',
        ],
      },
    ],
    examTip: 'Check conservation at every vertex in a Feynman diagram (charge and lepton/baryon number). For “which interaction?” questions, quote the exchange particle and the range/time scale of the force.',
  },
  {
    slug: 'astrophysics',
    unit: 'Unit 5 · WPH15',
    unitName: 'Fields and Nuclear Physics',
    title: 'Astrophysics',
    intro: 'Astronomy applies the physics of the course to the Universe: telescopes measure starlight, stellar spectra reveal composition and motion, and the life cycles of stars run on gravity and nuclear fusion.',
    sections: [
      {
        heading: 'Observing the Universe',
        bullets: [
          'Telescopes: light-gathering power ∝ area; resolving power (Rayleigh) improves with larger aperture and shorter wavelength.',
          'Radio telescopes have poor resolution (long λ) — solved with interferometry; atmospheric distortion limits ground-based optical telescopes.',
          'Stellar parallax: p (arcseconds) gives distance d = 1/p parsecs; standard candles (Cepheids, supernovae) measure larger distances.',
          'Luminosity vs brightness: b = L/(4πd²); apparent magnitude vs absolute magnitude gives distance.',
        ],
      },
      {
        heading: 'Stars and spectra',
        bullets: [
          'Stellar spectra: hot dense cores give continuous spectra; cooler atmospheres add absorption lines (Fraunhofer lines) that identify elements.',
          'Hertzsprung–Russell diagram: main sequence (hydrogen fusion), red giants, white dwarfs; a star’s mass determines its position and lifespan.',
          'Doppler effect: λobserved = λrest(1 ± v/c) for receding/approaching stars — redshift measures recession speed.',
          'Hubble’s law: v = H₀d — the Universe is expanding; the cosmic microwave background is evidence for the Big Bang.',
        ],
      },
      {
        heading: 'Stellar evolution',
        bullets: [
          'Main sequence: hydrogen fuses to helium in the core; balance between gravity and radiation pressure.',
          'Sun-like stars → red giant → planetary nebula → white dwarf. Massive stars → red supergiant → supernova → neutron star or black hole.',
          'Elements heavier than iron are forged in supernovae and distributed into new nebulae.',
          'Black holes: escape velocity exceeds c at the event horizon; detected by X-ray binaries and gravitational lensing/waves.',
        ],
      },
    ],
    examTip: 'Astrophysics answers often want the physics invoked, not just description: redshift → Doppler → expansion; luminosity → Stefan–Boltzmann (L = 4πR²σT⁴) → radius of a star.',
  },
  {
    slug: 'physics-data-analysis',
    unit: 'Unit 6 · WPH16',
    unitName: 'Practical Skills in Physics II',
    title: 'Data analysis & statistics',
    intro: 'Turning measurements into conclusions requires correct uncertainty handling and, where appropriate, statistical testing. The same skills appear in every unit and in the practical assessments.',
    sections: [
      {
        heading: 'Uncertainty in calculations',
        bullets: [
          'Percentage uncertainties add when quantities are multiplied or divided; absolute uncertainties add when added or subtracted.',
          'Powers multiply the percentage uncertainty: x = a²b → %u(x) = 2%u(a) + %u(b).',
          'When plotting, propagate errors into error bars; a gradient can carry an uncertainty from the max/min lines.',
          'Report answers to the correct significant figures and always with units.',
        ],
      },
      {
        heading: 'Statistical tests',
        bullets: [
          'The t-test compares two means of continuous data; degrees of freedom = n₁ + n₂ − 2; compare with the critical value at p = 0.05.',
          'Chi-squared compares observed counts with expected counts: χ² = Σ(O − E)²/E; df = categories − 1.',
          'p < 0.05 → reject the null hypothesis: the difference is statistically significant (less than 5% chance it arose randomly).',
          'Statistically significant ≠ physically important: always assess the size of the effect as well.',
        ],
      },
      {
        heading: 'Evaluating investigations',
        bullets: [
          'Systematic errors (zero error, calibration) shift all results; random errors scatter them — different remedies.',
          'Anomalies: justified exclusion only; otherwise keep and explain.',
          'Improvements must address identified weaknesses (insulation, larger measurements, better timing), and further work should extend the range or test a related prediction.',
        ],
      },
    ],
    examTip: 'In uncertainty questions the final mark is often for judgement: “the uncertainty in g is 3%, dominated by the timing error, so repeating with 20 oscillations would improve confidence”.',
  },
  {
    slug: 'physics-investigations',
    unit: 'Unit 6 · WPH16',
    unitName: 'Practical Skills in Physics II',
    title: 'Classic investigations',
    intro: 'A handful of experiments appear repeatedly in physics assessments. Knowing their methods, expected graphs and typical uncertainties makes any variation straightforward.',
    sections: [
      {
        heading: 'Mechanics and materials',
        bullets: [
          'Spring constant: Hooke’s law — hang masses, measure extension, plot F vs x (gradient k); keep the spring within its limit of proportionality.',
          'Young’s modulus: measure diameter with a micrometer (several positions), length with a vernier/metre rule, load with masses, extension with a marker; plot stress vs strain.',
          'Acceleration of a trolley: runway, light gates or ticker timer; plot v² vs 2s (gradient = a) or use F = ma with a known force.',
          'g by free fall or pendulum: plot T² vs L (gradient 4π²/g); time ≥ 10 oscillations.',
        ],
      },
      {
        heading: 'Waves and electricity',
        bullets: [
          'Speed of sound: resonance tube (closed pipe, first resonance at λ/4) or two microphones and an oscilloscope.',
          'Refractive index: pins and a glass block (measure angles) or a semicircular block and critical angle.',
          'I–V characteristics: diode, filament lamp, thermistor — use a potential divider circuit and take readings both ways to check consistency.',
          'e.m.f. and internal resistance: vary external resistance, measure terminal pd and current, plot V vs I (intercept ε, gradient −r).',
        ],
      },
      {
        heading: 'Thermal and modern physics',
        bullets: [
          'Specific heat capacity: electric heater, thermometer, insulation; plot temperature vs time and use the gradient (E = mcΔT, power known).',
          'Cooling correction: extrapolate the warming curve back to the mid-time of the heating period.',
          'Half-life of protactinium: shake the sample with an organic layer, measure count rate with a GM tube over time; background radiation must be subtracted.',
          'Absorption of gamma: measure count rate vs thickness of lead, plot ln(count) vs thickness (gradient −μ).',
        ],
      },
    ],
    examTip: 'For “write a method” questions, include: apparatus with ranges/precisions, how the independent variable is set and measured, how the dependent variable is measured, repeats, and how results will be analysed.',
  },
];
