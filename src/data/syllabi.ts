import { Subject, Topic } from '@/types';

export const SUBJECTS: Subject[] = [
  // ================= CTET Paper 2 =================
  {
    id: 'ctet-math',
    examId: 'ctet-p2',
    name: 'Mathematics & Pedagogy',
    code: 'MATH-6-8',
    iconName: 'Calculator',
    description: 'CBSE CTET Paper 2 syllabus comprising 30 questions (20 content + 10 pedagogy).',
    chapters: [
      {
        id: 'ctet-math-c1',
        subjectId: 'ctet-math',
        examId: 'ctet-p2',
        title: 'Number System, HCF & Commercial Arithmetic',
        order: 1,
        topics: [
          {
            id: 'ctet-math-t1',
            chapterId: 'ctet-math-c1',
            subjectId: 'ctet-math',
            examId: 'ctet-p2',
            title: 'Prime Factorization, HCF and LCM',
            order: 1,
            notes: 'The Fundamental Theorem of Arithmetic guarantees that every composite number can be uniquely expressed as a product of prime powers. When finding the Highest Common Factor (HCF) of numbers in prime exponent form, multiply the prime factors with their lowest exponents. For Least Common Multiple (LCM), take the highest exponent of every prime factor present.',
            concepts: [
              'Fundamental Theorem of Arithmetic (Every composite integer n > 1 can be factored uniquely into primes).',
              'HCF = Product of common prime factors with lowest powers.',
              'LCM = Product of all prime factors with greatest powers.',
              'For any two numbers a and b: HCF(a, b) × LCM(a, b) = a × b.'
            ],
            formulas: [
              'HCF(x, y, z) = ∏ p_i^{min(a_i, b_i, c_i)}',
              'LCM(x, y, z) = ∏ p_i^{max(a_i, b_i, c_i)}',
              'HCF(Fractions) = HCF(Numerators) / LCM(Denominators)',
              'LCM(Fractions) = LCM(Numerators) / HCF(Denominators)'
            ],
            solvedExamples: [
              {
                problem: 'Find the HCF of 2³ × 3² × 5³ and 2² × 3⁴ × 5.',
                solution: 'Common primes are 2, 3, and 5. Minimum power for 2 is 2, for 3 is 2, for 5 is 1. Thus, HCF = 2² × 3² × 5¹ = 4 × 9 × 5 = 180.'
              }
            ],
            pyqIds: ['ctet-m-01'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 6 Chapter 3 (Playing with Numbers) & Class 10 Chapter 1'
          },
          {
            id: 'ctet-math-t2',
            chapterId: 'ctet-math-c1',
            subjectId: 'ctet-math',
            examId: 'ctet-p2',
            title: 'Compound Interest & Commercial Mathematics',
            order: 2,
            notes: 'Compound Interest (CI) is interest computed on the initial principal and also on the accumulated interest of previous periods. When compounding is half-yearly, the annual interest rate is divided by 2, and the compounding periods (n) are multiplied by 2.',
            concepts: [
              'Simple Interest vs Compound Interest.',
              'Half-yearly conversion period: r = R / 2, n = 2t.',
              'Quarterly conversion period: r = R / 4, n = 4t.',
              'CI = Amount (A) - Principal (P).'
            ],
            formulas: [
              'A = P(1 + R/100)^t (Annually)',
              'A = P(1 + R/200)^{2t} (Half-yearly)',
              'CI = A - P'
            ],
            solvedExamples: [
              {
                problem: 'Calculate CI on ₹8,000 at 10% per annum for 1 year compounded half-yearly.',
                solution: 'Rate per half-year r = 10/2 = 5%. Time n = 1 × 2 = 2 periods.\nA = 8000(1 + 5/100)² = 8000(1.05)² = 8000 × 1.1025 = ₹8,820.\nCI = 8,820 - 8,000 = ₹820.'
              }
            ],
            pyqIds: ['ctet-m-04'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 8 Chapter 8 (Comparing Quantities)'
          }
        ]
      },
      {
        id: 'ctet-math-c2',
        subjectId: 'ctet-math',
        examId: 'ctet-p2',
        title: 'Pedagogical Issues in Mathematics',
        order: 2,
        topics: [
          {
            id: 'ctet-math-t3',
            chapterId: 'ctet-math-c2',
            subjectId: 'ctet-math',
            examId: 'ctet-p2',
            title: 'Open-ended vs Closed-ended Questions & Divergent Thinking',
            order: 1,
            notes: 'Open-ended mathematical questions allow multiple paths and answers, fostering divergent thinking and inquiry in students. Closed-ended questions have single, unique answers, primarily measuring computational drill. NCF 2005 and NEP 2020 strongly advocate replacing rote memorization with open-ended mathematical discourse.',
            concepts: [
              'Closed-ended questions evaluate procedural knowledge with a unique answer.',
              'Open-ended questions allow multiple strategies, representations, and solutions.',
              'Divergent questioning boosts mathematical creativity and reduces math anxiety.'
            ],
            solvedExamples: [
              {
                problem: 'Convert the closed question "What is the area of a rectangle with length 6 cm and width 4 cm?" into an open-ended question.',
                solution: '"A rectangle has an area of 24 cm². What could be its possible dimensions? List at least three combinations."'
              }
            ],
            pyqIds: ['ctet-m-02'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Position Paper on Teaching of Mathematics (NCF 2005)'
          },
          {
            id: 'ctet-math-t4',
            chapterId: 'ctet-math-c2',
            subjectId: 'ctet-math',
            examId: 'ctet-p2',
            title: 'Van Hiele Model of Geometric Thinking',
            order: 2,
            notes: 'Pierre van Hiele and Dina van Hiele-Geldof defined a 5-level developmental progression in geometric learning. Students cannot skip levels; transition depends on pedagogical experiences rather than chronological age.',
            concepts: [
              'Level 0 (Visualization / Recognition): Identifies shapes by holistic look (e.g., "looks like a door").',
              'Level 1 (Analysis / Descriptive): Identifies properties of shapes (e.g., opposite sides equal, all angles 90°).',
              'Level 2 (Abstraction / Informal Deduction): Interrelates properties; understands class inclusions (e.g., every square is a rectangle).',
              'Level 3 (Formal Deduction): Writes geometric axioms and step-by-step proofs.',
              'Level 4 (Rigor): Evaluates non-Euclidean axiomatic systems.'
            ],
            pyqIds: ['ctet-m-03'],
            verificationStatus: 'verified',
            ncertReference: 'CBSE B.Ed Pedagogy of Mathematics Curriculum'
          }
        ]
      }
    ]
  },
  {
    id: 'ctet-sci',
    examId: 'ctet-p2',
    name: 'Science & Pedagogy',
    code: 'SCI-6-8',
    iconName: 'Atom',
    description: 'CBSE CTET Paper 2 science syllabus covering Matter, Materials, The Living World, and Pedagogy.',
    chapters: [
      {
        id: 'ctet-sci-c1',
        subjectId: 'ctet-sci',
        examId: 'ctet-p2',
        title: 'Matter and Materials in Daily Life',
        order: 1,
        topics: [
          {
            id: 'ctet-sci-t1',
            chapterId: 'ctet-sci-c1',
            subjectId: 'ctet-sci',
            examId: 'ctet-p2',
            title: 'States of Matter: Boiling vs Evaporation',
            order: 1,
            notes: 'Evaporation is a spontaneous surface phenomenon taking place at any temperature below the boiling point, causing cooling. Boiling is a bulk phenomenon occurring strictly at the boiling point where vapor pressure equals atmospheric pressure, forming bubbles throughout the liquid mass.',
            concepts: [
              'Evaporation: Surface phenomenon, variable temperature, cooling effect.',
              'Boiling: Bulk phenomenon, fixed temperature, rapid bubble formation throughout liquid.',
              'Factors affecting evaporation rate: Surface area, Temperature, Humidity, Wind speed.'
            ],
            formulas: [
              'Latent Heat of Vaporization Q = m × L_v'
            ],
            solvedExamples: [
              {
                problem: 'Why do wet clothes dry faster on a windy day?',
                solution: 'Higher wind velocity quickly sweeps away the vapor layer above the fabric surface, reducing local humidity and increasing the rate of surface evaporation.'
              }
            ],
            pyqIds: ['ctet-s-01'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 9 Chapter 1 (Matter in Our Surroundings)'
          },
          {
            id: 'ctet-sci-t2',
            chapterId: 'ctet-sci-c1',
            subjectId: 'ctet-sci',
            examId: 'ctet-p2',
            title: 'Acids, Bases & Chemical Indicators',
            order: 2,
            notes: 'Indicators are substances that show whether a solution is acidic or basic by a distinct color change. Common indicators include litmus (lichens), phenolphthalein, and methyl orange.',
            concepts: [
              'Litmus: Red in acid, Blue in base.',
              'Phenolphthalein: Colorless in acidic or neutral, Pink/Magenta in alkaline solutions.',
              'Methyl orange: Red in acid, Yellow in base.',
              'Neutralization: Acid + Base -> Salt + Water + Heat.'
            ],
            pyqIds: ['ctet-s-02'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 7 Chapter 5 (Acids, Bases and Salts)'
          }
        ]
      },
      {
        id: 'ctet-sci-c3',
        subjectId: 'ctet-sci',
        examId: 'ctet-p2',
        title: 'Light & Natural Phenomena',
        order: 2,
        topics: [
          {
            id: 'ctet-sci-t5',
            chapterId: 'ctet-sci-c3',
            subjectId: 'ctet-sci',
            examId: 'ctet-p2',
            title: 'Spherical Mirrors & Image Formation',
            order: 1,
            notes: 'Concave mirrors converge light. In 5 cases they form real, inverted images, but when an object is placed between the Pole (P) and Focus (F), the reflected rays diverge and produce a virtual, erect, and magnified image behind the mirror.',
            concepts: [
              'Concave Mirror (Converging): Used in vehicle headlights, shaving mirrors, dental mirrors.',
              'Convex Mirror (Diverging): Always gives virtual, erect, diminished images with wide field of view (rear-view mirror).',
              'Mirror Formula: 1/f = 1/v + 1/u.'
            ],
            formulas: [
              '1/f = 1/v + 1/u',
              'm = -v/u = h_i / h_o'
            ],
            pyqIds: ['ctet-s-03'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 10 (Light - Reflection and Refraction)'
          }
        ]
      },
      {
        id: 'ctet-sci-c4',
        subjectId: 'ctet-sci',
        examId: 'ctet-p2',
        title: 'The World of the Living: Human Physiology',
        order: 3,
        topics: [
          {
            id: 'ctet-sci-t7',
            chapterId: 'ctet-sci-c4',
            subjectId: 'ctet-sci',
            examId: 'ctet-p2',
            title: 'Endocrine System & Heterocrine Glands',
            order: 1,
            notes: 'Glands are categorized into Exocrine (ducts, enzymes) and Endocrine (ductless, hormones). The Pancreas is a heterocrine (dual) gland: its acinar tissue secretes digestive enzymes, while the Islets of Langerhans produce insulin (beta cells) and glucagon (alpha cells).',
            concepts: [
              'Exocrine glands: Salivary, sweat, digestive enzymes.',
              'Endocrine glands: Pituitary, Thyroid, Adrenal glands.',
              'Heterocrine gland: Pancreas (secretes both enzymes and hormones).',
              'Insulin lowers blood glucose, Glucagon raises blood glucose.'
            ],
            pyqIds: ['ctet-s-04'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 8 Chapter 10 & Class 10 Chapter 7 (Control and Coordination)'
          }
        ]
      }
    ]
  },

  // ================= Bihar STET Paper 1 =================
  {
    id: 'stet-sci',
    examId: 'bihar-stet-p1',
    name: 'Secondary Science (Classes 9–10)',
    code: 'STET-SCI-9-10',
    iconName: 'FlaskConical',
    description: 'BSEB STET Paper 1 Science: Physics, Chemistry & Biology based on Secondary NCERT/BSEB curriculum.',
    chapters: [
      {
        id: 'stet-sci-c1',
        subjectId: 'stet-sci',
        examId: 'bihar-stet-p1',
        title: 'Mechanics: Laws of Motion & Momentum',
        order: 1,
        topics: [
          {
            id: 'stet-sci-t1',
            chapterId: 'stet-sci-c1',
            subjectId: 'stet-sci',
            examId: 'bihar-stet-p1',
            title: 'Conservation of Linear Momentum & Recoil Velocity',
            order: 1,
            notes: 'According to Newton’s Third Law of Motion, every action has an equal and opposite reaction. In an isolated system with no external unbalanced force, total linear momentum is conserved before and after interaction.',
            concepts: [
              'Linear Momentum p = m × v (SI unit: kg·m/s).',
              'Newton’s Second Law: Force F = dp/dt = m·a.',
              'Law of Conservation of Linear Momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.',
              'Gun recoil velocity: v_gun = - (m_bullet × v_bullet) / m_gun.'
            ],
            formulas: [
              'p = mv',
              'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
              'v_recoil = - (m·v) / M'
            ],
            solvedExamples: [
              {
                problem: 'A rifle of mass 4 kg fires a bullet of mass 50 g at 400 m/s. Find the recoil speed of the rifle.',
                solution: 'Bullet mass m = 0.05 kg, velocity v = 400 m/s. Rifle mass M = 4 kg.\nv_recoil = -(0.05 × 400) / 4 = -20 / 4 = -5 m/s. Speed is 5 m/s backwards.'
              }
            ],
            pyqIds: ['stet-s-01'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 9 Chapter 9 (Force and Laws of Motion)'
          }
        ]
      },
      {
        id: 'stet-sci-c2',
        subjectId: 'stet-sci',
        examId: 'bihar-stet-p1',
        title: 'Cellular Biology: Organelles & Functions',
        order: 2,
        topics: [
          {
            id: 'stet-sci-t3',
            chapterId: 'stet-sci-c2',
            subjectId: 'stet-sci',
            examId: 'bihar-stet-p1',
            title: 'Lysosomes: Suicide Bags of the Cell',
            order: 1,
            notes: 'Lysosomes are membranous sacs filled with hydrolytic digestive enzymes synthesized by the rough endoplasmic reticulum. When cellular metabolism is disrupted or cells are aged/injured, lysosomes burst and hydrolyze their own host cell components.',
            concepts: [
              'Formed by the Golgi apparatus packaging.',
              'Active at acidic pH inside the vesicle.',
              'Act as internal cell garbage disposal and autolytic digesters ("suicide bags").'
            ],
            pyqIds: ['stet-s-02'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 9 Chapter 5 (The Fundamental Unit of Life)'
          }
        ]
      }
    ]
  },
  {
    id: 'stet-math',
    examId: 'bihar-stet-p1',
    name: 'Secondary Mathematics (Classes 9–10)',
    code: 'STET-MATH-9-10',
    iconName: 'Sigma',
    description: 'BSEB STET Paper 1 Mathematics: Quadratic Equations, AP, Trigonometry, and Coordinate Geometry.',
    chapters: [
      {
        id: 'stet-math-c1',
        subjectId: 'stet-math',
        examId: 'bihar-stet-p1',
        title: 'Quadratic Equations & Polynomials',
        order: 1,
        topics: [
          {
            id: 'stet-math-t1',
            chapterId: 'stet-math-c1',
            subjectId: 'stet-math',
            examId: 'bihar-stet-p1',
            title: 'Nature of Roots & Discriminant Analysis',
            order: 1,
            notes: 'For a general quadratic equation ax² + bx + c = 0 (where a ≠ 0), the discriminant D = b² - 4ac determines the nature of the roots. If D > 0, roots are real and distinct. If D = 0, roots are real and equal (-b/2a). If D < 0, roots are non-real complex numbers.',
            concepts: [
              'Discriminant D = b² - 4ac.',
              'D > 0: Two distinct real roots.',
              'D = 0: Two equal real roots (x = -b / 2a).',
              'D < 0: No real roots.'
            ],
            formulas: [
              'D = b² - 4ac',
              'x = (-b ± √D) / (2a)'
            ],
            solvedExamples: [
              {
                problem: 'Determine the nature of roots for 3x² - 4√3x + 4 = 0.',
                solution: 'D = (-4√3)² - 4(3)(4) = 48 - 48 = 0. Since D = 0, the equation has two real and equal roots: x = -(-4√3)/(2×3) = 2/√3.'
              }
            ],
            pyqIds: ['stet-m-01'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 4 (Quadratic Equations)'
          }
        ]
      }
    ]
  },
  {
    id: 'stet-ped',
    examId: 'bihar-stet-p1',
    name: 'Art of Teaching & Pedagogy',
    code: 'STET-AOT-50',
    iconName: 'BookOpen',
    description: '50-mark common mandatory section for Bihar STET covering Teaching Methodology and Child Psychology.',
    chapters: [
      {
        id: 'stet-ped-c1',
        subjectId: 'stet-ped',
        examId: 'bihar-stet-p1',
        title: 'Taxonomies of Learning & Assessment',
        order: 1,
        topics: [
          {
            id: 'stet-ped-t1',
            chapterId: 'stet-ped-c1',
            subjectId: 'stet-ped',
            examId: 'bihar-stet-p1',
            title: 'Bloom’s Revised Taxonomy & HOTS',
            order: 1,
            notes: 'Bloom\'s Taxonomy (revised by Lorin Anderson and David Krathwohl, 2001) shifts nominal categories into action verbs. The cognitive hierarchy ranges from Lower Order Thinking Skills (Remembering, Understanding) to Higher Order Thinking Skills (Analyzing, Evaluating, Creating).',
            concepts: [
              'LOTS: Remembering -> Understanding -> Applying.',
              'HOTS: Analyzing -> Evaluating -> Creating.',
              'Creating is the highest cognitive skill level.'
            ],
            pyqIds: ['stet-p-01'],
            verificationStatus: 'verified',
            ncertReference: 'Educational Psychology & Teacher Training Modules'
          }
        ]
      }
    ]
  },

  // ================= BPSC TRE 4 Middle (6-8) =================
  {
    id: 'bpsc-mid-sci',
    examId: 'bpsc-tre-middle',
    name: 'Middle School Science (Classes 6–8)',
    code: 'BPSC-MID-SCI',
    iconName: 'Zap',
    description: 'SCERT & NCERT Middle School Science with difficulty calibrated up to graduation/B.Ed standard.',
    chapters: [
      {
        id: 'bpsc-mid-sci-c1',
        subjectId: 'bpsc-mid-sci',
        examId: 'bpsc-tre-middle',
        title: 'Electricity, Potential Difference & Circuits',
        order: 1,
        topics: [
          {
            id: 'bpsc-mid-sci-t1',
            chapterId: 'bpsc-mid-sci-c1',
            subjectId: 'bpsc-mid-sci',
            examId: 'bpsc-tre-middle',
            title: 'Ohm’s Law, Resistance and Current Relationship',
            order: 1,
            notes: 'Ohm’s Law states that at constant temperature, current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) across its ends: V = I·R. Current is inversely proportional to resistance. Doubling resistance cuts current by half.',
            concepts: [
              'V = IR (Ohm’s Law).',
              'Resistance depends on length (L), cross-sectional area (A), and material resistivity (ρ): R = ρ·L/A.',
              'In series: R_eq = R₁ + R₂ + ...',
              'In parallel: 1/R_eq = 1/R₁ + 1/R₂ + ...'
            ],
            formulas: [
              'I = V / R',
              'R = ρ·L / A',
              'P = V·I = I²·R = V² / R'
            ],
            pyqIds: ['bpsc-m-01'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 12 / Class 7 & 8 Electric Currents'
          }
        ]
      },
      {
        id: 'bpsc-mid-sci-c2',
        subjectId: 'bpsc-mid-sci',
        examId: 'bpsc-tre-middle',
        title: 'Environmental Ecology & Atmosphere',
        order: 2,
        topics: [
          {
            id: 'bpsc-mid-sci-t3',
            chapterId: 'bpsc-mid-sci-c2',
            subjectId: 'bpsc-mid-sci',
            examId: 'bpsc-tre-middle',
            title: 'Greenhouse Gases & Climate Mechanism',
            order: 1,
            notes: 'The greenhouse effect is the trapping of solar heat by atmospheric gases. Primary greenhouse gases are Water Vapor (H₂O), Carbon Dioxide (CO₂), Methane (CH₄), Nitrous Oxide (N₂O), Ozone (O₃), and Chlorofluorocarbons (CFCs). Major atmospheric constituent gases Nitrogen (78%) and Oxygen (21%) are non-greenhouse gases.',
            concepts: [
              'Greenhouse gases absorb longwave infrared terrestrial radiation.',
              'Major greenhouse gases: CO₂, CH₄, N₂O, H₂O vapor, O₃.',
              'Non-greenhouse gases: N₂ (Nitrogen), O₂ (Oxygen), Ar (Argon).'
            ],
            pyqIds: ['bpsc-m-02'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 8 Chapter 18 (Pollution of Air and Water)'
          }
        ]
      },
      {
        id: 'bpsc-mid-sci-c3',
        subjectId: 'bpsc-mid-sci',
        examId: 'bpsc-tre-middle',
        title: 'Human Organ Systems & Excretion',
        order: 3,
        topics: [
          {
            id: 'bpsc-mid-sci-t5',
            chapterId: 'bpsc-mid-sci-c3',
            subjectId: 'bpsc-mid-sci',
            examId: 'bpsc-tre-middle',
            title: 'Human Excretory System: Nephron Structure',
            order: 1,
            notes: 'The human excretory system consists of a pair of kidneys, ureters, urinary bladder, and urethra. The basic structural and functional unit of the kidney is the Nephron. Each nephron has a renal corpuscle (Glomerulus + Bowman\'s Capsule) and renal tubules (PCT, Loop of Henle, DCT, collecting duct) that filter nitrogenous wastes (urea) from blood.',
            concepts: [
              'Nephron: Functional filtration unit of kidney.',
              'Ultrafiltration occurs under hydrostatic pressure in the glomerulus.',
              'Selective reabsorption of glucose, amino acids, and water occurs in renal tubules.',
              'Neuron = unit of nervous system; Alveoli = unit of respiratory system.'
            ],
            pyqIds: ['bpsc-m-04'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 6 (Life Processes) & Class 7'
          }
        ]
      }
    ]
  },
  {
    id: 'bpsc-mid-math',
    examId: 'bpsc-tre-middle',
    name: 'Middle School Mathematics (Classes 6–8)',
    code: 'BPSC-MID-MATH',
    iconName: 'Shapes',
    description: 'SCERT & NCERT Middle School Mathematics with applications in commercial arithmetic, algebra, and geometry.',
    chapters: [
      {
        id: 'bpsc-mid-math-c1',
        subjectId: 'bpsc-mid-math',
        examId: 'bpsc-tre-middle',
        title: 'Commercial Arithmetic: Time, Work & Proportion',
        order: 1,
        topics: [
          {
            id: 'bpsc-mid-math-t1',
            chapterId: 'bpsc-mid-math-c1',
            subjectId: 'bpsc-mid-math',
            examId: 'bpsc-tre-middle',
            title: 'Unitary Method & Time and Work Equivalence',
            order: 1,
            notes: 'Time and work problems are modeled using inverse variation: more people require fewer days to complete the same work. Total work is expressed in Man-Days (M × D) or Rate × Time.',
            concepts: [
              'Total Work = Men × Days × Hours (M₁·D₁·H₁ = M₂·D₂·H₂).',
              'If a person does a work in n days, 1-day work = 1/n.'
            ],
            formulas: [
              'M₁ × D₁ = M₂ × D₂',
              '(M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂'
            ],
            solvedExamples: [
              {
                problem: 'If 12 women finish an embroidery in 15 days, in how many days can 18 women finish it?',
                solution: '12 × 15 = 18 × D => D = 180 / 18 = 10 days.'
              }
            ],
            pyqIds: ['bpsc-m-03'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 8 Chapter 13 (Direct and Inverse Proportions)'
          }
        ]
      }
    ]
  },

  // ================= BPSC TRE 4 Secondary (9-10) =================
  {
    id: 'bpsc-sec-phy',
    examId: 'bpsc-tre-secondary',
    name: 'Physics (Secondary Science)',
    code: 'BPSC-SEC-PHY',
    iconName: 'Lightbulb',
    description: 'BPSC TRE 4 Secondary Science Physics: Optics, Mechanics, Electricity, and Magnetism.',
    chapters: [
      {
        id: 'bpsc-sec-phy-c1',
        subjectId: 'bpsc-sec-phy',
        examId: 'bpsc-tre-secondary',
        title: 'Ray Optics & Power of Lenses',
        order: 1,
        topics: [
          {
            id: 'bpsc-sec-phy-t1',
            chapterId: 'bpsc-sec-phy-c1',
            subjectId: 'bpsc-sec-phy',
            examId: 'bpsc-tre-secondary',
            title: 'Power of Lens & Myopia Correction',
            order: 1,
            notes: 'The power of a lens is the degree of convergence or divergence of light rays and is the reciprocal of focal length in metres (P = 1/f in m, unit: Dioptre, D). Convex lenses have positive power, concave lenses have negative power.',
            concepts: [
              'Power P = 1 / f(m).',
              'Positive power (+D) => Convex lens (converging). Used for Hypermetropia (far-sightedness).',
              'Negative power (-D) => Concave lens (diverging). Used for Myopia (short-sightedness).',
              'Power of combination: P_total = P₁ + P₂ + ...'
            ],
            formulas: [
              'P = 1 / f (in metres)',
              '1/f = (μ - 1)(1/R₁ - 1/R₂)'
            ],
            solvedExamples: [
              {
                problem: 'A person requires a lens of power +2.5 D. Find its focal length and identify the lens type.',
                solution: 'f = 1 / P = 1 / (+2.5) = +0.4 m = +40 cm. Since focal length is positive, it is a convex (converging) lens.'
              }
            ],
            pyqIds: ['bpsc-sec-01'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 10 (Light - Reflection and Refraction)'
          }
        ]
      },
      {
        id: 'bpsc-sec-phy-c2',
        subjectId: 'bpsc-sec-phy',
        examId: 'bpsc-tre-secondary',
        title: 'Electromagnetism & Magnetic Effects',
        order: 2,
        topics: [
          {
            id: 'bpsc-sec-phy-t3',
            chapterId: 'bpsc-sec-phy-c2',
            subjectId: 'bpsc-sec-phy',
            examId: 'bpsc-tre-secondary',
            title: 'Magnetic Effects of Electric Current: Right-Hand Rules',
            order: 1,
            notes: 'Hans Christian Oersted discovered that an electric current produces a magnetic field. The shape of magnetic field lines around a straight current conductor is concentric circles. Maxwell\'s Right-Hand Thumb rule determines direction.',
            concepts: [
              'Right-Hand Thumb Rule: Thumb points to current direction; curled fingers show concentric magnetic field lines.',
              'Fleming’s Left-Hand Rule: Motion (Thumb), Field (Forefinger), Current (Middle finger) - used for Motors.',
              'Fleming’s Right-Hand Rule: Motion, Field, Induced Current - used for Generators.'
            ],
            pyqIds: ['bpsc-sec-04'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 13 (Magnetic Effects of Electric Current)'
          }
        ]
      }
    ]
  },
  {
    id: 'bpsc-sec-chem',
    examId: 'bpsc-tre-secondary',
    name: 'Chemistry (Secondary Science)',
    code: 'BPSC-SEC-CHEM',
    iconName: 'TestTube2',
    description: 'BPSC TRE 4 Secondary Chemistry: Chemical Reactions, Acids/Bases, Metals/Non-metals, Carbon Compounds.',
    chapters: [
      {
        id: 'bpsc-sec-chem-c1',
        subjectId: 'bpsc-sec-chem',
        examId: 'bpsc-tre-secondary',
        title: 'Carbon and Its Compounds: Functional Groups',
        order: 1,
        topics: [
          {
            id: 'bpsc-sec-chem-t1',
            chapterId: 'bpsc-sec-chem-c1',
            subjectId: 'bpsc-sec-chem',
            examId: 'bpsc-tre-secondary',
            title: 'Organic Functional Groups & IUPAC Nomenclature',
            order: 1,
            notes: 'A functional group is an atom or group of atoms attached to a carbon skeleton that dictates the specific chemical properties of the organic compound. Homologous series share the same functional group and general formula.',
            concepts: [
              'Alcohol: -OH (suffix: -ol)',
              'Aldehyde: -CHO (suffix: -al)',
              'Ketone: >C=O (suffix: -one)',
              'Carboxylic Acid: -COOH (suffix: -oic acid)',
              'Halo group: -Cl, -Br (prefix: Chloro-, Bromo-)'
            ],
            pyqIds: ['bpsc-sec-02'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 4 (Carbon and its Compounds)'
          }
        ]
      }
    ]
  },
  {
    id: 'bpsc-sec-bio',
    examId: 'bpsc-tre-secondary',
    name: 'Biology (Secondary Science)',
    code: 'BPSC-SEC-BIO',
    iconName: 'Dna',
    description: 'BPSC TRE 4 Secondary Biology: Genetics, Heredity, Life Processes, and Ecology.',
    chapters: [
      {
        id: 'bpsc-sec-bio-c1',
        subjectId: 'bpsc-sec-bio',
        examId: 'bpsc-tre-secondary',
        title: 'Genetics, Heredity & Mendel’s Laws',
        order: 1,
        topics: [
          {
            id: 'bpsc-sec-bio-t1',
            chapterId: 'bpsc-sec-bio-c1',
            subjectId: 'bpsc-sec-bio',
            examId: 'bpsc-tre-secondary',
            title: 'Mendelian Genetics: Monohybrid Cross and Phenotypic Ratios',
            order: 1,
            notes: 'Gregor Johann Mendel performed hybridization experiments on Pisum sativum (Garden Pea). In a monohybrid cross studying one trait (e.g. plant height: Tall T vs Dwarf t), crossing homozygous parents TT × tt gives heterozygous Tt in F1. Selfing F1 gives F2 with phenotypic ratio 3:1 (Tall:Dwarf) and genotypic ratio 1:2:1 (TT:Tt:tt).',
            concepts: [
              'Law of Dominance: In a heterozygote, the dominant allele masks the recessive allele.',
              'Law of Segregation: Alleles separate during gamete formation so each gamete carries only one allele.',
              'Monohybrid F2 Phenotypic Ratio = 3 : 1.',
              'Monohybrid F2 Genotypic Ratio = 1 : 2 : 1.',
              'Dihybrid F2 Phenotypic Ratio = 9 : 3 : 3 : 1.'
            ],
            pyqIds: ['bpsc-sec-03'],
            verificationStatus: 'verified',
            ncertReference: 'NCERT Class 10 Chapter 9 (Heredity and Evolution)'
          }
        ]
      }
    ]
  }
];

export function getSubjectsByExam(examId: string): Subject[] {
  return SUBJECTS.filter(s => s.examId === examId);
}

export function getAllTopics(): Topic[] {
  const topics: Topic[] = [];
  for (const subject of SUBJECTS) {
    for (const chapter of subject.chapters) {
      topics.push(...chapter.topics);
    }
  }
  return topics;
}

export function getTopicById(id: string): Topic | undefined {
  for (const subject of SUBJECTS) {
    for (const chapter of subject.chapters) {
      const found = chapter.topics.find(t => t.id === id);
      if (found) return found;
    }
  }
  return undefined;
}
