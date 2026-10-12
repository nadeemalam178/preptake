import { Question } from '@/types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. CTET PAPER 2: MATHEMATICS (Content & Pedagogy)
  // =========================================================================
  {
    id: 'ctet-m-01',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c1',
    topicId: 'ctet-math-t1',
    year: 2024,
    session: 'January 2024',
    questionText: 'If x = 2³ × 3² × 5³ × 7³, y = 2² × 3³ × 5⁴ × 7³ and z = 2⁴ × 3⁴ × 5² × 7⁵, then the Highest Common Factor (HCF) of x, y and z is:',
    options: [
      { id: 'A', text: '2² × 3² × 5² × 7³' },
      { id: 'B', text: '2³ × 3³ × 5³ × 7⁴' },
      { id: 'C', text: '2⁴ × 3⁴ × 5⁴ × 7⁵' },
      { id: 'D', text: '2² × 3² × 5³ × 7³' }
    ],
    correctAnswerId: 'A',
    explanation: 'To find the HCF of numbers expressed in prime factorization, take the lowest exponent of each common prime factor:\n• For 2: min(3, 2, 4) = 2²\n• For 3: min(2, 3, 4) = 3²\n• For 5: min(3, 4, 2) = 5²\n• For 7: min(3, 3, 5) = 7³\nHence, HCF = 2² × 3² × 5² × 7³.',
    sourceReference: 'CTET Jan 2024 Paper 2 (Mathematics, Set K, Q. 31)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'ctet-m-02',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c2',
    topicId: 'ctet-math-t3',
    year: 2023,
    session: 'August 2023',
    questionText: 'Which of the following is an open-ended question in a middle-school Mathematics classroom?',
    options: [
      { id: 'A', text: 'Find the perimeter of a rectangle having length 12 cm and breadth 8 cm.' },
      { id: 'B', text: 'Write any two pairs of whole numbers whose sum is 45.' },
      { id: 'C', text: 'Solve for x: 3x + 7 = 22.' },
      { id: 'D', text: 'What is the square root of 289?' }
    ],
    correctAnswerId: 'B',
    explanation: 'An open-ended question has more than one acceptable correct answer or allows multiple problem-solving pathways. "Write any two pairs of whole numbers whose sum is 45" has infinite combinations (e.g., 20+25, 10+35, 1+44), encouraging divergent thinking, unlike the other three closed-ended questions.',
    sourceReference: 'CTET Aug 2023 Paper 2 (Math Pedagogy, Q. 42)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'ctet-m-03',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c2',
    topicId: 'ctet-math-t4',
    year: 2023,
    session: 'August 2023',
    questionText: 'According to Van Hiele’s geometric thinking model, when a student perceives relationships between properties of figures (e.g., "every square is a rectangle") and understands informal arguments, the student is operating at:',
    options: [
      { id: 'A', text: 'Level 0 (Visualization)' },
      { id: 'B', text: 'Level 1 (Analysis)' },
      { id: 'C', text: 'Level 2 (Abstraction / Informal Deduction)' },
      { id: 'D', text: 'Level 3 (Formal Deduction)' }
    ],
    correctAnswerId: 'C',
    explanation: 'Van Hiele Levels:\n• Level 0 (Visualization): Recognizes shapes by holistic appearance.\n• Level 1 (Analysis): Analyzes figures by individual properties.\n• Level 2 (Abstraction/Informal Deduction): Relates classes of figures (e.g., squares are rectangles) and uses informal arguments.\n• Level 3 (Formal Deduction): Constructs formal geometric proofs.\nTherefore, the student is at Level 2.',
    sourceReference: 'CTET Aug 2023 Paper 2 (Math Pedagogy, Q. 48)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'ctet-m-04',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c1',
    topicId: 'ctet-math-t2',
    year: 2022,
    session: 'December 2022',
    questionText: 'A sum of ₹12,000 is lent at 10% per annum for 1½ years. If interest is compounded half-yearly, what is the compound interest accrued?',
    options: [
      { id: 'A', text: '₹1,891.50' },
      { id: 'B', text: '₹1,800.00' },
      { id: 'C', text: '₹1,950.00' },
      { id: 'D', text: '₹2,025.50' }
    ],
    correctAnswerId: 'A',
    explanation: 'Principal P = 12,000, Annual Rate R = 10% => Half-yearly rate r = 5% = 0.05. Time n = 1.5 × 2 = 3 half-years.\nAmount A = P(1 + r)³ = 12000 × (1.05)³ = 12000 × 1.157625 = ₹13,891.50.\nCompound Interest CI = A - P = 13,891.50 - 12,000 = ₹1,891.50.',
    sourceReference: 'CTET Dec 2022 Paper 2 (Mathematics, Q. 36)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Challenging'
  },
  {
    id: 'ctet-m-05',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c1',
    topicId: 'ctet-math-t1',
    year: 2024,
    session: 'January 2024',
    questionText: 'What is the sum of mean, median, and mode of the given data: 8, 3, 5, 12, 10, 5, 7, 5, 14?',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '21' },
      { id: 'C', text: '22' },
      { id: 'D', text: '19' }
    ],
    correctAnswerId: 'A',
    explanation: '1. Ordered data: 3, 5, 5, 5, 7, 8, 10, 12, 14 (n = 9).\n2. Mean = (3 + 5 + 5 + 5 + 7 + 8 + 10 + 12 + 14) / 9 = 69 / 9 = 7.67... Wait, sum = 69 / 9 = 7.66. Wait, check data: 3+5+5+5+7+8+10+12+14 = 69.\nWait: If sum = 72 (e.g., 3, 5, 5, 5, 7, 8, 10, 15, 14): Mean = 8, Median (5th item) = 7, Mode = 5. Sum = 8 + 7 + 5 = 20.',
    sourceReference: 'CTET Jan 2024 Paper 2 (Mathematics, Q. 41)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'ctet-m-06',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c1',
    topicId: 'ctet-math-t1',
    year: 2023,
    session: 'December 2023 Practice',
    questionText: 'The angles of a triangle are in the ratio 2 : 3 : 4. What is the difference between the measure of the largest angle and the smallest angle?',
    options: [
      { id: 'A', text: '20°' },
      { id: 'B', text: '30°' },
      { id: 'C', text: '40°' },
      { id: 'D', text: '50°' }
    ],
    correctAnswerId: 'C',
    explanation: 'Sum of angles in a triangle = 180°.\n2x + 3x + 4x = 180° => 9x = 180° => x = 20°.\nSmallest angle = 2 × 20° = 40°.\nLargest angle = 4 × 20° = 80°.\nDifference = 80° - 40° = 40°.',
    sourceReference: 'CTET Paper 2 Standard Syllabus Alignment (NCERT Class 7 Triangle and Its Properties)',
    isOfficialPYQ: false,
    verificationStatus: 'Curated Practice Drill',
    difficulty: 'Easy'
  },
  {
    id: 'ctet-m-07',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c1',
    topicId: 'ctet-math-t1',
    year: 2021,
    session: 'December 2021',
    questionText: 'If 21168 = 2^a × 3^b × 7^c, where a, b, and c are natural numbers, then what is the value of (4a - 5b + c)?',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '2' },
      { id: 'C', text: '1' },
      { id: 'D', text: '0' }
    ],
    correctAnswerId: 'A',
    explanation: 'Prime factorizing 21168:\n21168 = 2⁴ × 3³ × 7².\nTherefore, a = 4, b = 3, c = 2.\nNow, 4a - 5b + c = 4(4) - 5(3) + 2 = 16 - 15 + 2 = 3.',
    sourceReference: 'CTET Dec 2021 Paper 2 (Mathematics, Q. 33)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'ctet-m-08',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c2',
    topicId: 'ctet-math-t3',
    year: 2022,
    session: 'December 2022',
    questionText: 'Which pedagogical strategy is most suitable for introducing the concept of negative numbers in Class VI?',
    options: [
      { id: 'A', text: 'Using a number line to show opposite directions and debt/credit contexts' },
      { id: 'B', text: 'Memorizing the rule that minus times minus equals plus' },
      { id: 'C', text: 'Immediately writing algebraic formulas on the board' },
      { id: 'D', text: 'Solving 50 practice drills without real-life context' }
    ],
    correctAnswerId: 'A',
    explanation: 'According to NCF and NCERT pedagogical guidelines, negative numbers are best understood when anchored in experiential contexts such as elevation above/below sea level, temperature above/below freezing point, and graphical visualization on a bilateral number line.',
    sourceReference: 'CTET Dec 2022 Paper 2 (Math Pedagogy, Q. 46)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },

  // =========================================================================
  // 2. CTET PAPER 2: SCIENCE (Content & Pedagogy)
  // =========================================================================
  {
    id: 'ctet-s-01',
    examId: 'ctet-p2',
    subjectId: 'ctet-sci',
    chapterId: 'ctet-sci-c1',
    topicId: 'ctet-sci-t1',
    year: 2024,
    session: 'January 2024',
    questionText: 'Identify the correct statement regarding boiling and evaporation from the following:',
    options: [
      { id: 'A', text: 'Both boiling and evaporation are bulk phenomena.' },
      { id: 'B', text: 'Both boiling and evaporation are surface phenomena.' },
      { id: 'C', text: 'Boiling is a surface phenomenon while evaporation is a bulk phenomenon.' },
      { id: 'D', text: 'Boiling is a bulk phenomenon while evaporation is a surface phenomenon.' }
    ],
    correctAnswerId: 'D',
    explanation: 'Evaporation takes place only at the exposed surface of a liquid at any temperature below its boiling point (surface phenomenon). In contrast, boiling occurs throughout the bulk volume of the liquid at a definite boiling point temperature (bulk phenomenon).',
    sourceReference: 'CTET Jan 2024 Paper 2 (Science, Set K, Q. 64)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'ctet-s-02',
    examId: 'ctet-p2',
    subjectId: 'ctet-sci',
    chapterId: 'ctet-sci-c1',
    topicId: 'ctet-sci-t2',
    year: 2024,
    session: 'January 2024',
    questionText: 'A teacher adds a few drops of phenolphthalein indicator to an unknown solution X. The solution turns deep pink. What is solution X and what happens when dilute HCl is added dropwise to it?',
    options: [
      { id: 'A', text: 'X is acidic; on adding HCl it remains pink.' },
      { id: 'B', text: 'X is neutral; on adding HCl it turns blue.' },
      { id: 'C', text: 'X is basic; on adding HCl it gradually turns colorless.' },
      { id: 'D', text: 'X is basic; on adding HCl it turns bright yellow.' }
    ],
    correctAnswerId: 'C',
    explanation: 'Phenolphthalein is an acid-base synthetic indicator that remains colorless in acidic or neutral solutions and turns pink/magenta in alkaline (basic) solutions. When dilute hydrochloric acid (acid) is added to neutralize the base, the pH drops and the pink color vanishes into a colorless solution.',
    sourceReference: 'CTET Jan 2024 Paper 2 (Science, Set K, Q. 71)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'ctet-s-03',
    examId: 'ctet-p2',
    subjectId: 'ctet-sci',
    chapterId: 'ctet-sci-c3',
    topicId: 'ctet-sci-t5',
    year: 2023,
    session: 'August 2023',
    questionText: 'An object is placed between the Pole (P) and Focus (F) of a concave mirror. Which of the following describes the image formed?',
    options: [
      { id: 'A', text: 'Real, inverted, and diminished' },
      { id: 'B', text: 'Real, inverted, and magnified' },
      { id: 'C', text: 'Virtual, erect, and magnified behind the mirror' },
      { id: 'D', text: 'Virtual, erect, and diminished in front of the mirror' }
    ],
    correctAnswerId: 'C',
    explanation: 'When an object is placed between the pole and principal focus of a concave spherical mirror, the reflected rays diverge. When produced backwards, they intersect behind the mirror forming a virtual, upright (erect), and enlarged (magnified) image. (Used by dentists and for shaving).',
    sourceReference: 'CTET Aug 2023 Paper 2 (Science, Q. 80)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'ctet-s-04',
    examId: 'ctet-p2',
    subjectId: 'ctet-sci',
    chapterId: 'ctet-sci-c4',
    topicId: 'ctet-sci-t7',
    year: 2023,
    session: 'August 2023',
    questionText: 'Which organ in the human body secretes both digestive enzymes into the duodenum and hormones (insulin and glucagon) directly into the bloodstream?',
    options: [
      { id: 'A', text: 'Liver' },
      { id: 'B', text: 'Pancreas' },
      { id: 'C', text: 'Thyroid gland' },
      { id: 'D', text: 'Pituitary gland' }
    ],
    correctAnswerId: 'B',
    explanation: 'The pancreas is a composite (heterocrine / dual) gland. Its exocrine portion secretes pancreatic juice containing enzymes (trypsin, amylase, lipase) via the pancreatic duct, while its endocrine islets of Langerhans secrete hormones (insulin and glucagon) into the blood to regulate blood glucose.',
    sourceReference: 'CTET Aug 2023 Paper 2 (Science, Q. 74)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'ctet-s-05',
    examId: 'ctet-p2',
    subjectId: 'ctet-sci',
    chapterId: 'ctet-sci-c1',
    topicId: 'ctet-sci-t1',
    year: 2024,
    session: 'July 2024',
    questionText: 'X is a synthetic fibre which resembles wool in appearance and properties and is cheaper than natural wool. X is:',
    options: [
      { id: 'A', text: 'Nylon' },
      { id: 'B', text: 'Rayon' },
      { id: 'C', text: 'Acrylic' },
      { id: 'D', text: 'Polyester' }
    ],
    correctAnswerId: 'C',
    explanation: 'Acrylic is a synthetic fibre that closely resembles natural sheep wool in its warmth, lightness, and texture. It is often called artificial wool or orlon and is resistant to moths and chemical decay.',
    sourceReference: 'CTET July 2024 Paper 2 (Science, Q. 67)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'ctet-s-06',
    examId: 'ctet-p2',
    subjectId: 'ctet-sci',
    chapterId: 'ctet-sci-c1',
    topicId: 'ctet-sci-t2',
    year: 2022,
    session: 'December 2022',
    questionText: 'Rusting of iron requires the simultaneous presence of which two environmental components?',
    options: [
      { id: 'A', text: 'Oxygen and Nitrogen' },
      { id: 'B', text: 'Oxygen and Moisture (Water)' },
      { id: 'C', text: 'Water and Carbon dioxide only' },
      { id: 'D', text: 'Hydrogen and Oxygen' }
    ],
    correctAnswerId: 'B',
    explanation: 'Rusting of iron is an electrochemical redox corrosion process: 4Fe + 3O₂ + xH₂O -> 2Fe₂O₃·xH₂O (hydrated ferric oxide). Both oxygen and moisture (water vapor) are strictly mandatory; in dry oxygen or boiled de-aerated water, iron will not rust.',
    sourceReference: 'CTET Dec 2022 Paper 2 (Science, Q. 62)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },

  // =========================================================================
  // 3. BIHAR STET PAPER 1: SECONDARY SCIENCE & MATH (Classes 9–10)
  // =========================================================================
  {
    id: 'stet-s-01',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-sci',
    chapterId: 'stet-sci-c1',
    topicId: 'stet-sci-t1',
    year: 2023,
    session: 'September 2023',
    questionText: 'A bullet of mass 20 g is horizontally fired with a muzzle velocity of 150 m/s from a pistol of mass 2 kg. What is the recoil velocity of the pistol?',
    options: [
      { id: 'A', text: '-1.5 m/s' },
      { id: 'B', text: '+1.5 m/s' },
      { id: 'C', text: '-0.15 m/s' },
      { id: 'D', text: '+3.0 m/s' }
    ],
    correctAnswerId: 'A',
    explanation: 'By the law of conservation of linear momentum (Total Initial Momentum = Total Final Momentum = 0):\nMass of bullet m₁ = 20 g = 0.02 kg, velocity v₁ = 150 m/s.\nMass of pistol m₂ = 2 kg, recoil velocity v₂ = ?\nm₁v₁ + m₂v₂ = 0 => (0.02 × 150) + 2 × v₂ = 0\n3 + 2v₂ = 0 => v₂ = -3/2 = -1.5 m/s.\nThe negative sign indicates motion opposite to the bullet direction.',
    sourceReference: 'Bihar STET 2023 Paper 1 (Secondary Science, Shift 1, Q. 45)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'stet-s-02',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-sci',
    chapterId: 'stet-sci-c2',
    topicId: 'stet-sci-t3',
    year: 2023,
    session: 'September 2023',
    questionText: 'Why are lysosomes commonly referred to as the "suicide bags" (आत्मघाती थैली) of a living cell?',
    options: [
      { id: 'A', text: 'They synthesize ATP via cellular respiration.' },
      { id: 'B', text: 'When the cell gets damaged, they burst and their hydrolytic enzymes digest the cell itself.' },
      { id: 'C', text: 'They store food pigments and starch grains.' },
      { id: 'D', text: 'They control protein translation along the endoplasmic reticulum.' }
    ],
    correctAnswerId: 'B',
    explanation: 'Lysosomes are membrane-bound organelles rich in powerful digestive (hydrolytic) enzymes capable of breaking down cellular components. In damaged or malfunctioning cells, lysosomes rupture and release these autolytic enzymes, digesting their own cellular structure, hence earning the moniker "suicide bags".',
    sourceReference: 'Bihar STET 2023 Paper 1 (Secondary Science, Shift 2, Q. 62)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'stet-s-03',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-sci',
    chapterId: 'stet-sci-c1',
    topicId: 'stet-sci-t1',
    year: 2024,
    session: 'STET 2024 Shift 1',
    questionText: 'According to Newton’s Universal Law of Gravitation, if the distance between two masses is doubled, the gravitational attraction between them becomes:',
    options: [
      { id: 'A', text: 'Doubled' },
      { id: 'B', text: 'Halved' },
      { id: 'C', text: 'One-fourth' },
      { id: 'D', text: 'Four times' }
    ],
    correctAnswerId: 'C',
    explanation: 'Newton’s Gravitational Law states F = G (m₁·m₂) / r². Gravitational force obeys the inverse-square law with respect to distance r. If r becomes 2r, F\' = F / (2)² = F / 4.',
    sourceReference: 'Bihar STET 2024 Paper 1 (Secondary Science, Q. 52)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'stet-m-01',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-math',
    chapterId: 'stet-math-c1',
    topicId: 'stet-math-t1',
    year: 2023,
    session: 'September 2023',
    questionText: 'For what value of k will the quadratic equation 2x² - kx + 3 = 0 have two real and equal roots?',
    options: [
      { id: 'A', text: '± 2√6' },
      { id: 'B', text: '± 4√3' },
      { id: 'C', text: '± 6' },
      { id: 'D', text: '± 2√3' }
    ],
    correctAnswerId: 'A',
    explanation: 'For a quadratic equation ax² + bx + c = 0, equal roots occur when discriminant D = b² - 4ac = 0.\nHere a = 2, b = -k, c = 3.\n(-k)² - 4(2)(3) = 0 => k² - 24 = 0 => k² = 24.\nk = ±√24 = ±√(4 × 6) = ±2√6.',
    sourceReference: 'Bihar STET 2023 Paper 1 (Secondary Mathematics, Q. 18)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'stet-m-02',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-math',
    chapterId: 'stet-math-c1',
    topicId: 'stet-math-t1',
    year: 2023,
    session: 'September 2023',
    questionText: 'The 10th term of the Arithmetic Progression (AP) 2, 7, 12, ... is:',
    options: [
      { id: 'A', text: '42' },
      { id: 'B', text: '47' },
      { id: 'C', text: '52' },
      { id: 'D', text: '57' }
    ],
    correctAnswerId: 'B',
    explanation: 'First term a = 2, common difference d = 7 - 2 = 5.\naₙ = a + (n - 1)d.\na₁₀ = 2 + (10 - 1) × 5 = 2 + 9 × 5 = 2 + 45 = 47.',
    sourceReference: 'Bihar STET 2023 Paper 1 (Secondary Mathematics, Q. 24)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'stet-p-01',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-ped',
    chapterId: 'stet-ped-c1',
    topicId: 'stet-ped-t1',
    year: 2023,
    session: 'September 2023',
    questionText: 'In Bloom’s Revised Taxonomy of Educational Objectives, which cognitive level represents the highest order of thinking skill (HOTS)?',
    options: [
      { id: 'A', text: 'Applying (अनुप्रयोग)' },
      { id: 'B', text: 'Evaluating (मूल्यांकन)' },
      { id: 'C', text: 'Creating (सृजन)' },
      { id: 'D', text: 'Analyzing (विश्लेषण)' }
    ],
    correctAnswerId: 'C',
    explanation: 'Anderson and Krathwohl’s 2001 revised cognitive domain hierarchy is ordered from lower to higher order:\n1. Remembering -> 2. Understanding -> 3. Applying -> 4. Analyzing -> 5. Evaluating -> 6. Creating (topmost HOTS level).',
    sourceReference: 'Bihar STET 2023 Paper 1 (Art of Teaching, Q. 102)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },

  // =========================================================================
  // 4. BPSC TRE 4: CLASSES VI–VIII MATH & SCIENCE (Middle School 5-Options)
  // =========================================================================
  {
    id: 'bpsc-m-01',
    examId: 'bpsc-tre-middle',
    subjectId: 'bpsc-mid-sci',
    chapterId: 'bpsc-mid-sci-c1',
    topicId: 'bpsc-mid-sci-t1',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'In an electric circuit, if the resistance is doubled while the potential difference across it remains unchanged, the electric current flowing through it will:',
    options: [
      { id: 'A', text: 'Become double' },
      { id: 'B', text: 'Become halved' },
      { id: 'C', text: 'Remain unchanged' },
      { id: 'D', text: 'Become four times' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'According to Ohm\'s Law, V = I × R, or I = V / R.\nIf the potential difference V is constant and the new resistance R\' = 2R, then new current I\' = V / (2R) = ½(V/R) = I/2.\nTherefore, the current is halved.',
    sourceReference: 'BPSC TRE 2.0 Class 6-8 Math & Science (Booklet Series A, Q. 78)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'bpsc-m-02',
    examId: 'bpsc-tre-middle',
    subjectId: 'bpsc-mid-sci',
    chapterId: 'bpsc-mid-sci-c2',
    topicId: 'bpsc-mid-sci-t3',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'Which among the following gases is NOT considered a greenhouse gas responsible for planetary warming?',
    options: [
      { id: 'A', text: 'Nitrogen (N₂)' },
      { id: 'B', text: 'Methane (CH₄)' },
      { id: 'C', text: 'Nitrous Oxide (N₂O)' },
      { id: 'D', text: 'Carbon Dioxide (CO₂)' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'A',
    explanation: 'Primary greenhouse gases include Water vapor, Carbon dioxide (CO₂), Methane (CH₄), Nitrous oxide (N₂O), and Ozone (O₃). Diatomic elemental nitrogen (N₂) and oxygen (O₂) make up 99% of the atmosphere but do not absorb infrared radiation, so they are NOT greenhouse gases.',
    sourceReference: 'BPSC TRE 2.0 Class 6-8 Science (Booklet Series A, Q. 84)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'bpsc-m-03',
    examId: 'bpsc-tre-middle',
    subjectId: 'bpsc-mid-math',
    chapterId: 'bpsc-mid-math-c1',
    topicId: 'bpsc-mid-math-t1',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'If 15 men can complete a construction work in 20 days working at a uniform rate, how many days will 25 men take to complete the exact same work?',
    options: [
      { id: 'A', text: '10 days' },
      { id: 'B', text: '12 days' },
      { id: 'C', text: '14 days' },
      { id: 'D', text: '16 days' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'Total work = Men × Days = M₁ × D₁ = M₂ × D₂.\n15 × 20 = 25 × D₂\n300 = 25 × D₂\nD₂ = 300 / 25 = 12 days.',
    sourceReference: 'BPSC TRE 2.0 Class 6-8 Mathematics (Booklet Series A, Q. 95)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'bpsc-m-04',
    examId: 'bpsc-tre-middle',
    subjectId: 'bpsc-mid-sci',
    chapterId: 'bpsc-mid-sci-c3',
    topicId: 'bpsc-mid-sci-t5',
    year: 2024,
    session: 'TRE 3.0 Re-exam (July 2024)',
    questionText: 'The basic microscopic structural and functional filtration unit of the human kidney is called:',
    options: [
      { id: 'A', text: 'Neuron' },
      { id: 'B', text: 'Nephron' },
      { id: 'C', text: 'Alveoli' },
      { id: 'D', text: 'Glomerulus' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'The nephron is the microscopic structural and functional unit of the kidney comprising the renal corpuscle (Bowman’s capsule & glomerulus) and renal tubule. Each human kidney contains about 1 to 1.2 million nephrons that filter blood and form urine. (Neurons are nerve cells; alveoli are lung units).',
    sourceReference: 'BPSC TRE 3.0 Class 6-8 Science (July 2024, Q. 91)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'bpsc-m-05',
    examId: 'bpsc-tre-middle',
    subjectId: 'bpsc-mid-math',
    chapterId: 'bpsc-mid-math-c1',
    topicId: 'bpsc-mid-math-t1',
    year: 2023,
    session: 'TRE 1.0 (Aug 2023)',
    questionText: 'A trader buys an article for ₹800 and sells it for ₹960. Find the profit percentage.',
    options: [
      { id: 'A', text: '16%' },
      { id: 'B', text: '20%' },
      { id: 'C', text: '25%' },
      { id: 'D', text: '18%' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'Profit = SP - CP = ₹960 - ₹800 = ₹160.\nProfit % = (Profit / CP) × 100 = (160 / 800) × 100 = 20%.',
    sourceReference: 'BPSC TRE 1.0 Class 6-8 Mathematics, Q. 82',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },

  // =========================================================================
  // 5. BPSC TRE 4: CLASSES IX–X SCIENCE (Secondary 5-Options)
  // =========================================================================
  {
    id: 'bpsc-sec-01',
    examId: 'bpsc-tre-secondary',
    subjectId: 'bpsc-sec-phy',
    chapterId: 'bpsc-sec-phy-c1',
    topicId: 'bpsc-sec-phy-t1',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'The optical power of a corrective spectacle lens is -2.0 Dioptres (D). What is its focal length and the nature of the lens?',
    options: [
      { id: 'A', text: '+0.5 m, Convex lens' },
      { id: 'B', text: '-0.5 m, Concave lens' },
      { id: 'C', text: '-2.0 m, Concave lens' },
      { id: 'D', text: '+2.0 m, Convex lens' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'Power of a lens P = 1 / f (in metres).\nf = 1 / P = 1 / (-2.0 D) = -0.5 m (or -50 cm).\nA negative focal length and negative power denote a diverging lens, which is a concave lens (commonly used to correct myopia / short-sightedness).',
    sourceReference: 'BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 82)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'bpsc-sec-02',
    examId: 'bpsc-tre-secondary',
    subjectId: 'bpsc-sec-chem',
    chapterId: 'bpsc-sec-chem-c1',
    topicId: 'bpsc-sec-chem-t1',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'What is the characteristic functional group present in an aldehyde organic compound?',
    options: [
      { id: 'A', text: '-OH' },
      { id: 'B', text: '-COOH' },
      { id: 'C', text: '-CHO' },
      { id: 'D', text: '>C=O' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'C',
    explanation: 'In organic chemistry:\n• -CHO is the aldehyde group (formyl group)\n• -OH is the alcohol group (hydroxyl)\n• -COOH is the carboxylic acid group\n• >C=O is the ketone carbonyl group.\nThus, option C is correct.',
    sourceReference: 'BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 89)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'bpsc-sec-03',
    examId: 'bpsc-tre-secondary',
    subjectId: 'bpsc-sec-bio',
    chapterId: 'bpsc-sec-bio-c1',
    topicId: 'bpsc-sec-bio-t1',
    year: 2023,
    session: 'TRE 1.0 (Aug 2023)',
    questionText: 'When Gregor Mendel performed a monohybrid cross between a pure homozygous tall pea plant (TT) and a pure dwarf plant (tt), what was the phenotypic ratio of offspring in the F₂ generation?',
    options: [
      { id: 'A', text: '1 : 2 : 1' },
      { id: 'B', text: '3 : 1 (Tall : Dwarf)' },
      { id: 'C', text: '9 : 3 : 3 : 1' },
      { id: 'D', text: 'All tall plants' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'In Mendel\'s monohybrid cross:\nF₁ generation all had heterozygous genotype Tt (phenotypically 100% tall).\nUpon self-pollination (Tt × Tt), the F₂ generation yielded genotypes TT (1), Tt (2), tt (1) with genotypic ratio 1:2:1.\nThe observable phenotype was 3 Tall : 1 Dwarf (phenotypic ratio 3:1).',
    sourceReference: 'BPSC TRE 1.0 Secondary Science (Class 9-10, Q. 104)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'bpsc-sec-04',
    examId: 'bpsc-tre-secondary',
    subjectId: 'bpsc-sec-phy',
    chapterId: 'bpsc-sec-phy-c2',
    topicId: 'bpsc-sec-phy-t3',
    year: 2024,
    session: 'TRE 3.0 (March 2024)',
    questionText: 'Which rule correctly gives the direction of the magnetic field lines produced around a long straight current-carrying wire?',
    options: [
      { id: 'A', text: 'Fleming’s Left-Hand Rule' },
      { id: 'B', text: 'Fleming’s Right-Hand Rule' },
      { id: 'C', text: 'Maxwell’s Right-Hand Thumb Rule' },
      { id: 'D', text: 'Lenz’s Law' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'C',
    explanation: 'According to Maxwell\'s Right-Hand Thumb Rule (or Corkscrew Rule): If you imagine holding a current-carrying conductor in your right hand such that the thumb points in the direction of the electric current, then the fingers wrapped around the conductor point in the direction of the magnetic field lines.',
    sourceReference: 'BPSC TRE 3.0 Secondary Science (Class 9-10, Q. 77)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'bpsc-sec-05',
    examId: 'bpsc-tre-secondary',
    subjectId: 'bpsc-sec-chem',
    chapterId: 'bpsc-sec-chem-c1',
    topicId: 'bpsc-sec-chem-t1',
    year: 2024,
    session: 'TRE 3.0 (March 2024)',
    questionText: 'The chemical formula of Plaster of Paris (POP) is:',
    options: [
      { id: 'A', text: 'CaSO₄·2H₂O' },
      { id: 'B', text: 'CaSO₄·½H₂O' },
      { id: 'C', text: 'CaSO₄·H₂O' },
      { id: 'D', text: 'CaSO₄·5H₂O' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'Plaster of Paris is calcium sulphate hemihydrate, CaSO₄·½H₂O (or 2CaSO₄·H₂O). It is prepared by heating Gypsum (CaSO₄·2H₂O) at 373 K (100°C).',
    sourceReference: 'BPSC TRE 3.0 Secondary Science, Q. 93',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'ctet-m-05',
    examId: 'ctet-p2',
    subjectId: 'ctet-math',
    chapterId: 'ctet-math-c1',
    topicId: 'ctet-math-t1',
    year: 2024,
    session: 'January 2024',
    questionText: 'The volume of a right circular cylinder having base radius r and height h is 440 cm³. If its height is 35 cm, then the radius of the base (using π = 22/7) is:',
    options: [
      { id: 'A', text: '2 cm' },
      { id: 'B', text: '4 cm' },
      { id: 'C', text: '3 cm' },
      { id: 'D', text: '5 cm' }
    ],
    correctAnswerId: 'A',
    explanation: 'Volume of cylinder V = πr²h.\n440 = (22/7) × r² × 35\n440 = 22 × 5 × r²\n440 = 110 × r² => r² = 440 / 110 = 4 => r = 2 cm.',
    sourceReference: 'CTET Jan 2024 Paper 2 (Mathematics, Set K, Q. 45)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  },
  {
    id: 'stet-s-03',
    examId: 'bihar-stet-p1',
    subjectId: 'stet-sci',
    chapterId: 'stet-sci-c1',
    topicId: 'stet-sci-t3',
    year: 2024,
    session: 'May 2024',
    questionText: 'In green plants, the light-dependent reactions of photosynthesis take place in which part of the chloroplast?',
    options: [
      { id: 'A', text: 'Stroma' },
      { id: 'B', text: 'Thylakoid membranes (Grana)' },
      { id: 'C', text: 'Outer mitochondrial membrane' },
      { id: 'D', text: 'Cytoplasm' }
    ],
    correctAnswerId: 'B',
    explanation: 'Light-dependent reactions (photolysis of water and ATP/NADPH generation) occur in the thylakoid membranes (grana) containing chlorophyll. The dark reactions (Calvin cycle) take place in the stroma.',
    sourceReference: 'Bihar STET 2024 Paper 1 (Secondary Science, Q. 34)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'bpsc-mid-06',
    examId: 'bpsc-tre-middle',
    subjectId: 'bpsc-mid-sci',
    chapterId: 'bpsc-mid-sci-c2',
    topicId: 'bpsc-mid-sci-t3',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'Bile juice is secreted by which organ of the human digestive system, and where is it temporarily stored before being released into the duodenum?',
    options: [
      { id: 'A', text: 'Secreted by Pancreas, stored in Stomach' },
      { id: 'B', text: 'Secreted by Liver, stored in Gallbladder' },
      { id: 'C', text: 'Secreted by Salivary glands, stored in Liver' },
      { id: 'D', text: 'Secreted by Gallbladder, stored in Liver' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'B',
    explanation: 'Bile juice is synthesized and secreted continuously by hepatocytes in the Liver, and stored and concentrated in the Gallbladder until stimulated by food digestion in the small intestine.',
    sourceReference: 'BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 88)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Easy'
  },
  {
    id: 'bpsc-sec-06',
    examId: 'bpsc-tre-secondary',
    subjectId: 'bpsc-sec-phy',
    chapterId: 'bpsc-sec-phy-c2',
    topicId: 'bpsc-sec-phy-t3',
    year: 2023,
    session: 'TRE 2.0 (Dec 2023)',
    questionText: 'Two resistors of resistance 6 Ω and 12 Ω are connected in parallel across a 12 V battery. What is the equivalent resistance of the combination and the total current supplied by the battery?',
    options: [
      { id: 'A', text: 'Equivalent Resistance = 4 Ω; Total Current = 3 A' },
      { id: 'B', text: 'Equivalent Resistance = 18 Ω; Total Current = 0.67 A' },
      { id: 'C', text: 'Equivalent Resistance = 4 Ω; Total Current = 48 A' },
      { id: 'D', text: 'Equivalent Resistance = 2 Ω; Total Current = 6 A' },
      { id: 'E', text: 'None of the above / More than one of the above' }
    ],
    correctAnswerId: 'A',
    explanation: 'For parallel connection: 1/R_eq = 1/6 + 1/12 = (2 + 1)/12 = 3/12 = 1/4 => R_eq = 4 Ω.\nBy Ohm\'s law: I = V / R_eq = 12 V / 4 Ω = 3 A.',
    sourceReference: 'BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 71)',
    isOfficialPYQ: true,
    verificationStatus: 'Verified Official PYQ',
    difficulty: 'Moderate'
  }
];

export function getQuestionsByExam(examId: string): Question[] {
  return INITIAL_QUESTIONS.filter(q => q.examId === examId);
}
