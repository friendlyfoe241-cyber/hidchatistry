import type { Note } from './types';

export const unit3Notes: Note[] = [
  {
    slug: 'homeostasis-and-excretion',
    unit: 'Unit 3 · WBI13',
    unitName: 'Energy, Exercise and Coordination',
    title: 'Homeostasis & excretion',
    intro: 'Homeostasis is the maintenance of a constant internal environment despite changes in the external conditions. Blood glucose, water potential and temperature are all controlled by negative feedback, and the liver and kidneys remove the waste products of metabolism.',
    sections: [
      {
        heading: 'The principles of homeostasis',
        defs: [
          ['Homeostasis', 'The regulation of the internal environment of an organism to maintain optimum conditions for enzyme action and cell function, within set limits.'],
          ['Negative feedback', 'A mechanism that detects a deviation from the normal level and activates responses that reverse it.'],
        ],
        bullets: [
          'Components: receptors (detect change), a coordinator (hormonal or nervous, usually the brain/hypothalamus) and effectors (muscles or glands that bring about the response).',
          'Positive feedback amplifies a change (e.g. oxytocin during labour) and is rare because it takes conditions further from the optimum.',
          'Effector responses counteract the original deviation; once the normal level is restored the response is switched off.',
        ],
      },
      {
        heading: 'Blood glucose regulation',
        bullets: [
          'Raised blood glucose (after a carbohydrate meal): β-cells of the islets of Langerhans detect it and release insulin. Insulin causes cells (especially liver and muscle) to take up more glucose and converts glucose to glycogen for storage (glycogenesis).',
          'Low blood glucose: α-cells release glucagon, which causes glycogen to be broken back into glucose (glycogenolysis) and non-carbohydrate sources to be converted to glucose (gluconeogenesis).',
          'Adrenaline also raises blood glucose (preparing for “fight or flight”) via a second messenger system in liver cells.',
          'Type I diabetes: autoimmune destruction of β-cells — little or no insulin; treated with insulin injections and diet.',
          'Type II diabetes: target cells lose sensitivity to insulin; strongly linked to obesity, diet and age; managed with diet, exercise and sometimes medication.',
        ],
      },
      {
        heading: 'Osmoregulation',
        bullets: [
          'The water potential of blood must stay within narrow limits: too low and cells burst (lysis), too high and they shrink (crenation).',
          'Detected by osmoreceptors in the hypothalamus; the posterior pituitary releases antidiuretic hormone (ADH).',
          'ADH makes the collecting ducts of the kidney more permeable to water by inserting aquaporins — more water is reabsorbed, urine is concentrated and blood water potential rises.',
          'In hot conditions or after salty food, more ADH is released; after drinking lots of water, less ADH is released and dilute urine is produced.',
        ],
      },
      {
        heading: 'Thermoregulation',
        bullets: [
          'The hypothalamus acts as a thermostat, receiving input from temperature receptors in the skin and blood.',
          'Too hot: vasodilation of arterioles near the skin (more heat radiates), sweating (latent heat of evaporation), behavioural responses (shade, sprawled posture).',
          'Too cold: vasoconstriction, shivering (rapid muscle contraction releases heat), piloerection (trapping an insulating air layer), hormones (adrenaline/thyroxine raise metabolic rate).',
        ],
      },
      {
        heading: 'Excretion: the liver and kidney',
        bullets: [
          'Excretion is the removal of the waste products of metabolism — e.g. carbon dioxide, excess nitrogen, bile pigments. (Egestion of undigested food is not excretion.)',
          'Deamination: excess amino acids cannot be stored, so the liver removes the amine group. The toxic ammonia is converted to less toxic urea in the ornithine cycle.',
          'The liver also detoxifies alcohol and drugs, breaks down old red blood cells (bilirubin → bile), and stores glycogen and vitamins.',
          'The nephron: ultrafiltration in the glomerulus (high pressure forces small molecules through the basement membrane into Bowman’s capsule; proteins and blood cells stay in the blood).',
          'Selective reabsorption in the proximal convoluted tubule: all glucose and useful ions are reabsorbed by co-transport and active transport; the loop of Henle creates a concentration gradient in the medulla so water can be reabsorbed from the collecting duct.',
          'Kidney failure is treated by dialysis (selective diffusion across a partially permeable membrane) or a transplant; dialysis must match blood composition and is time-consuming.',
        ],
      },
    ],
    examTip: 'Negative feedback answers should describe the whole loop: the change, the receptor detecting it, the hormone/nerve message, the effector response, and the return to the normal level with the response switching off.',
  },
  {
    slug: 'neuronal-coordination',
    unit: 'Unit 3 · WBI13',
    unitName: 'Energy, Exercise and Coordination',
    title: 'Neuronal coordination',
    intro: 'Nervous transmission relies on changes in membrane potential. A resting neurone is polarised at about −70 mV; a stimulus triggers an action potential that travels along the axon and is passed across synapses to other neurones, muscles or glands.',
    sections: [
      {
        heading: 'Resting potential',
        bullets: [
          'The inside of the axon is negative relative to the outside (about −70 mV).',
          'Maintained by the sodium–potassium pump (3 Na⁺ out, 2 K⁺ in, using ATP) and by K⁺ leak channels: the membrane is far more permeable to K⁺ than Na⁺ at rest.',
          'The axon is polarised — no impulse is being transmitted.',
        ],
      },
      {
        heading: 'The action potential',
        bullets: [
          'A stimulus opens some voltage-gated Na⁺ channels; if the membrane reaches the threshold (−55 mV), depolarisation is triggered.',
          'Depolarisation: many Na⁺ channels open, Na⁺ floods in — the inside becomes positive (+30 mV).',
          'Repolarisation: Na⁺ channels close, K⁺ channels open, K⁺ diffuses out — the inside becomes negative again.',
          'Hyperpolarisation briefly makes the membrane more negative than −70 mV, then the sodium–potassium pump restores the resting potential.',
          'The all-or-nothing law: a stimulus either reaches threshold and a full action potential occurs, or nothing happens. Stronger stimuli increase the frequency of action potentials, not their size.',
          'The refractory period ensures impulses travel in one direction only and limits their frequency.',
        ],
      },
      {
        heading: 'Speed of conduction',
        bullets: [
          'Myelinated neurones: the myelin sheath insulates the axon, so depolarisation only occurs at the nodes of Ranvier — saltatory conduction, which is much faster.',
          'Larger axon diameter = less resistance to the flow of ions = faster conduction.',
          'Temperature affects the rate of diffusion of ions (up to a point).',
        ],
      },
      {
        heading: 'Synaptic transmission',
        bullets: [
          'An action potential depolarises the presynaptic membrane; Ca²⁺ channels open and Ca²⁺ influx causes vesicles of neurotransmitter (e.g. acetylcholine) to fuse with the membrane and release the transmitter into the synaptic cleft.',
          'The transmitter diffuses across and binds to specific receptors on the postsynaptic membrane, opening Na⁺ channels and generating an excitatory postsynaptic potential (EPSP).',
          'Acetylcholinesterase breaks down the transmitter so the signal stops; the products are recycled.',
          'Summation: several sub-threshold stimuli arriving together or in quick succession can trigger an action potential.',
          'Inhibitory synapses open Cl⁻ or K⁺ channels, making the postsynaptic neurone less likely to fire — important in coordinating antagonistic muscles.',
          'Transmission is one-way only (vesicles only in the presynaptic neurone; receptors only on the postsynaptic neurone).',
        ],
      },
      {
        heading: 'Receptors, reflexes and the eye',
        bullets: [
          'A Pacinian corpuscle (pressure receptor): deformed membranes stretch mechanically gated Na⁺ channels, a generator potential develops, and if it reaches threshold an action potential passes along the sensory neurone.',
          'A reflex arc: receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector — fast, automatic, protective.',
          'The eye: cornea refracts light; the iris controls pupil size; the lens is fine-focused by the ciliary muscles and suspensory ligaments (accommodation).',
          'Rods (dim light, peripheral vision, no colour, many converge on one neurone) and cones (bright light, colour, high acuity) contain photopigments that trigger generator potentials.',
        ],
      },
    ],
    examTip: 'For a “describe the events of an action potential” 4–6 mark answer, be precise about which ion moves, which channel is open, and the direction of movement at each stage, quoting the potential values where possible.',
  },
  {
    slug: 'hormonal-coordination',
    unit: 'Unit 3 · WBI13',
    unitName: 'Energy, Exercise and Coordination',
    title: 'Hormonal coordination',
    intro: 'The endocrine system coordinates slower, longer-lasting responses through hormones carried in the blood to target cells with specific receptors. In animals the hypothalamus and pituitary control many of these pathways; plants use hormones to coordinate growth and responses to the environment.',
    sections: [
      {
        heading: 'How hormones work',
        bullets: [
          'Endocrine glands secrete hormones directly into the blood; hormones travel throughout the body but only affect target cells that have complementary receptors.',
          'Compared with nervous transmission: slower onset, longer lasting, carried chemically rather than electrically.',
          'Second messenger model (e.g. adrenaline): the hormone (first messenger) binds to a surface receptor → activates adenylate cyclase → cyclic AMP (second messenger) is formed inside the cell → activates enzyme cascades (e.g. glycogen phosphorylase) → a rapid amplification of the response.',
        ],
      },
      {
        heading: 'The hypothalamus and pituitary',
        bullets: [
          'The hypothalamus monitors blood conditions and releases releasing hormones that control the anterior pituitary.',
          'The pituitary is the “master gland”: it releases tropic hormones (e.g. FSH, LH, TSH, ACTH) that stimulate other endocrine glands, which release their own hormones.',
          'This cascade arrangement allows small signals to be amplified and provides several levels for control.',
        ],
      },
      {
        heading: 'The menstrual cycle',
        table: {
          head: ['Phase', 'Hormones', 'Effect'],
          rows: [
            ['Days 1–5', 'FSH rising', 'Uterus lining breaks down (menstruation); follicle begins to develop'],
            ['Days 6–13', 'FSH, oestrogen rising', 'Follicle matures, ovum develops, uterus lining thickens and becomes vascular'],
            ['Day 14', 'LH surge (triggered by high oestrogen)', 'Ovulation — the ovum is released'],
            ['Days 15–28', 'Progesterone (from corpus luteum)', 'Lining maintained; if no implantation, progesterone falls and the cycle restarts'],
          ],
        },
        bullets: [
          'Oestrogen shows negative feedback (suppresses FSH) at low levels but positive feedback at high levels, causing the LH surge.',
          'Progesterone maintains the uterus lining and exerts negative feedback on FSH and LH.',
          'The oral contraceptive pill supplies oestrogen and/or progesterone to inhibit FSH and prevent ovulation.',
        ],
      },
      {
        heading: 'Plant hormones',
        bullets: [
          'Auxin: promotes cell elongation; in phototropism auxin moves to the shaded side of a shoot, making those cells elongate more so the shoot bends towards light. In gravitropism auxin accumulates on the lower side of roots, inhibiting growth so the root grows downwards.',
          'Gibberellins: stimulate stem elongation, seed germination and flowering; used to produce seedless grapes and uniform flowering.',
          'Ethylene: promotes fruit ripening and leaf fall; used to ripen fruit during transport.',
          'Abscisic acid (ABA): inhibits growth, closes stomata during water stress, maintains seed dormancy.',
          'Plant hormones are used agriculturally as rooting powder, selective weedkillers, and to control flowering and ripening.',
        ],
      },
    ],
    examTip: 'Compare nerves and hormones in a table (speed, duration, method of travel, specificity). For plant hormone questions, state where the hormone is produced, where it moves to, and the effect on cell growth — including why (e.g. differential elongation causes bending).',
  },
  {
    slug: 'muscles-and-movement',
    unit: 'Unit 3 · WBI13',
    unitName: 'Energy, Exercise and Coordination',
    title: 'Muscles & movement',
    intro: 'Skeletal muscle contracts when nerve impulses trigger the sliding of actin past myosin within sarcomeres. The arrangement of myofilaments, the role of calcium and ATP, and the difference between muscle fibre types explain how movement is produced and sustained.',
    sections: [
      {
        heading: 'Muscle structure',
        defs: [
          ['Sarcomere', 'The functional unit of a muscle, between two Z lines.'],
          ['Myofibril', 'A long rod of sarcomeres made of actin (thin) and myosin (thick) filaments.'],
        ],
        bullets: [
          'A muscle contains bundles of muscle fibres; each fibre contains many myofibrils surrounded by a sarcoplasmic reticulum (stores Ca²⁺) and sarcoplasm (cytoplasm, rich in glycogen and mitochondria).',
          'A band = length of myosin; I band = actin only; H zone = myosin only; Z line anchors actin.',
        ],
      },
      {
        heading: 'The sliding filament theory',
        bullets: [
          'An action potential travels along the sarcolemma and into T-tubules; the sarcoplasmic reticulum releases Ca²⁺ ions.',
          'Ca²⁺ binds to troponin, moving tropomyosin off the binding sites on actin.',
          'Myosin heads bind to actin, forming cross-bridges; the power stroke pulls actin towards the centre of the sarcomere as ADP is released.',
          'ATP binds to the myosin head, detaching it; ATP is hydrolysed (by ATPase) to cock the head back for the next stroke.',
          'The sarcomere shortens (A band unchanged, I band and H zone narrow) — the muscle contracts. Relaxation occurs when Ca²⁺ is actively pumped back into the sarcoplasmic reticulum.',
        ],
      },
      {
        heading: 'Muscle fibre types',
        table: {
          head: ['Feature', 'Slow twitch (Type I)', 'Fast twitch (Type II)'],
          rows: [
            ['Contraction', 'Slow, sustained', 'Rapid, powerful'],
            ['Mitochondria', 'Many', 'Few'],
            ['Myoglobin', 'Much (red)', 'Little (pale)'],
            ['Energy', 'Aerobic respiration', 'Anaerobic respiration, glycogen stores'],
            ['Fatigue', 'Resistant', 'Fatigues quickly'],
            ['Example use', 'Posture, marathon running', 'Sprinting, weight lifting'],
          ],
        },
      },
      {
        heading: 'Movement and joints',
        bullets: [
          'Muscles pull, they cannot push — so they work in antagonistic pairs (e.g. biceps and triceps).',
          'Tendons attach muscle to bone; ligaments attach bone to bone and stabilise joints (e.g. the synovial joint with its capsule, synovial fluid and cartilage).',
          'Cardiac muscle: involuntary, branched, intercalated discs conduct stimulation so the heart beats as a unit; it never fatigues.',
          'Smooth muscle: involuntary, lines the gut and blood vessels; contracts slowly and rhythmically.',
        ],
      },
    ],
    examTip: 'Draw and label a sarcomere for revision — exams frequently ask you to identify bands and predict how they change during contraction. In descriptions, always include the role of Ca²⁺, troponin/tropomyosin and ATP.',
  },
  {
    slug: 'respiration',
    unit: 'Unit 3 · WBI13',
    unitName: 'Energy, Exercise and Coordination',
    title: 'Respiration',
    intro: 'Respiration releases energy from organic molecules and transfers it to ATP. It happens in four stages — glycolysis, the link reaction, the Krebs cycle and oxidative phosphorylation — and can proceed aerobically or anaerobically.',
    sections: [
      {
        heading: 'Glycolysis (cytoplasm)',
        bullets: [
          'Glucose (6C) is phosphorylated using 2 ATP, split into two triose phosphates (3C), and oxidised to two pyruvate (3C).',
          'Net gain: 2 ATP (4 produced, 2 used) and 2 reduced NAD. Occurs with or without oxygen.',
        ],
      },
      {
        heading: 'The link reaction and Krebs cycle (mitochondrial matrix)',
        bullets: [
          'Link reaction: pyruvate is decarboxylated (CO₂ released) and oxidised (NAD reduced) to acetyl CoA (2C).',
          'Krebs cycle: acetyl CoA combines with oxaloacetate (4C) to form citrate (6C); each turn releases 2 CO₂, 3 reduced NAD, 1 reduced FAD and 1 ATP (via GTP).',
          'The cycle turns twice per glucose molecule.',
        ],
      },
      {
        heading: 'Oxidative phosphorylation (inner mitochondrial membrane)',
        bullets: [
          'Reduced NAD and FAD donate electrons to the electron transfer chain; energy released pumps protons (H⁺) into the intermembrane space, creating an electrochemical gradient.',
          'Protons flow back through ATP synthase (chemiosmosis), driving the phosphorylation of ADP to ATP.',
          'Oxygen is the final electron acceptor: it combines with electrons and H⁺ to form water.',
          'Without oxygen the chain backs up, NAD cannot be regenerated, and only glycolysis continues.',
          'Aerobic respiration yields roughly 30–32 ATP per glucose (estimates vary with how NADH is shuttled into the mitochondria).',
        ],
      },
      {
        heading: 'Anaerobic respiration and oxygen debt',
        bullets: [
          'In animals: pyruvate is reduced to lactate by reduced NAD (regenerating NAD so glycolysis can continue). Lactate is later oxidised back to pyruvate in the liver.',
          'In plants and yeast: pyruvate is decarboxylated and reduced to ethanol + CO₂ (alcoholic fermentation).',
          'Anaerobic respiration yields only 2 ATP per glucose — far less efficient.',
          'Oxygen debt after exercise: extra oxygen is used to oxidise lactate, regenerate creatine phosphate and ATP, and restore myoglobin and haemoglobin oxygen stores.',
        ],
      },
      {
        heading: 'Respiratory quotient (RQ)',
        defs: [
          ['RQ', 'Volume of carbon dioxide produced ÷ volume of oxygen consumed, measured using a respirometer.'],
        ],
        table: {
          head: ['Respiratory substrate', 'RQ', 'Interpretation'],
          rows: [
            ['Carbohydrate (glucose)', '1.0', 'Equal volumes of CO₂ and O₂'],
            ['Lipid (tripalmitin)', '0.7', 'More oxygen needed — fats are more reduced'],
            ['Protein', '0.8', 'Deamination of amino acids also occurs'],
          ],
        },
        bullets: [
          'An RQ above 1 suggests anaerobic respiration is occurring as well (extra CO₂ released without O₂ uptake).',
          'Respirometers measure oxygen uptake; readings must be corrected for temperature and pressure (control tube with KOH or soda lime to absorb CO₂).',
        ],
      },
    ],
    examTip: 'Learn the location, inputs and outputs of each stage — “state where this occurs” marks are easy. For RQ questions, show the calculation and conclude which substrate is being used and whether respiration is fully aerobic.',
  },
];
