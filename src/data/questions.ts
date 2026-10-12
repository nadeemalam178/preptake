import { Question } from '@/types';

export const INITIAL_QUESTIONS: Question[] = [
  {
    "id": "ctet-m-01",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Number System, HCF & Commercial Arithmetic",
    "topicId": "ctet-math-t1",
    "topic": "Prime Factorization, HCF and LCM",
    "year": 2024,
    "session": "January 2024",
    "questionText": "If x = 2³ × 3² × 5³ × 7³, y = 2² × 3³ × 5⁴ × 7³ and z = 2⁴ × 3⁴ × 5² × 7⁵, then the Highest Common Factor (HCF) of x, y and z is:",
    "options": [
      {
        "id": "A",
        "text": "2² × 3² × 5² × 7³"
      },
      {
        "id": "B",
        "text": "2³ × 3³ × 5³ × 7⁴"
      },
      {
        "id": "C",
        "text": "2⁴ × 3⁴ × 5⁴ × 7⁵"
      },
      {
        "id": "D",
        "text": "2² × 3² × 5³ × 7³"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "To find HCF from prime powers, take the minimum power of each common prime factor: 2^min(3,2,4)=2², 3^min(2,3,4)=3², 5^min(3,4,2)=5², 7^min(3,3,5)=7³. Thus HCF = 2² × 3² × 5² × 7³.",
    "sourceReference": "CTET Jan 2024 Paper 2 (Mathematics, Set K, Q. 31)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "ctet-m-01",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Jan 2024 Paper 2 (Mathematics, Set K, Q. 31)"
  },
  {
    "id": "ctet-m-02",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c2",
    "chapter": "Pedagogical Issues in Mathematics",
    "topicId": "ctet-math-t3",
    "topic": "Open-ended vs Closed-ended Questions & Divergent Thinking",
    "year": 2023,
    "session": "August 2023",
    "questionText": "Which of the following is an open-ended question in a middle-school Mathematics classroom?",
    "options": [
      {
        "id": "A",
        "text": "Find the perimeter of a rectangle having length 12 cm and breadth 8 cm."
      },
      {
        "id": "B",
        "text": "Write any two pairs of whole numbers whose sum is 45."
      },
      {
        "id": "C",
        "text": "Solve for x: 3x + 7 = 22."
      },
      {
        "id": "D",
        "text": "What is the square root of 289?"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "An open-ended question admits multiple solutions and problem-solving approaches. Finding pairs of whole numbers adding up to 45 has multiple correct responses, fostering divergent mathematical reasoning.",
    "sourceReference": "CTET Aug 2023 Paper 2 (Math Pedagogy, Q. 42)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "ctet-m-02",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Aug 2023 Paper 2 (Math Pedagogy, Q. 42)"
  },
  {
    "id": "ctet-m-03",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c2",
    "chapter": "Pedagogical Issues in Mathematics",
    "topicId": "ctet-math-t4",
    "topic": "Van Hiele Model of Geometric Thinking",
    "year": 2023,
    "session": "August 2023",
    "questionText": "According to Van Hiele’s geometric thinking model, when a student perceives relationships between properties of figures (e.g., 'every square is a rectangle') and understands informal arguments, the student is operating at:",
    "options": [
      {
        "id": "A",
        "text": "Level 0 (Visualization)"
      },
      {
        "id": "B",
        "text": "Level 1 (Analysis)"
      },
      {
        "id": "C",
        "text": "Level 2 (Abstraction / Informal Deduction)"
      },
      {
        "id": "D",
        "text": "Level 3 (Formal Deduction)"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "At Level 2 (Abstraction/Informal Deduction), learners understand hierarchical classifications (e.g. squares are rectangles) and evaluate informal geometric proofs.",
    "sourceReference": "CTET Aug 2023 Paper 2 (Math Pedagogy, Q. 48)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "ctet-m-03",
    "correctAnswer": "C",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Aug 2023 Paper 2 (Math Pedagogy, Q. 48)"
  },
  {
    "id": "ctet-m-04",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Number System, HCF & Commercial Arithmetic",
    "topicId": "ctet-math-t2",
    "topic": "Compound Interest & Commercial Mathematics",
    "year": 2022,
    "session": "December 2022",
    "questionText": "A sum of ₹12,000 is lent at 10% per annum for 1½ years. If interest is compounded half-yearly, what is the compound interest accrued?",
    "options": [
      {
        "id": "A",
        "text": "₹1,891.50"
      },
      {
        "id": "B",
        "text": "₹1,800.00"
      },
      {
        "id": "C",
        "text": "₹1,950.00"
      },
      {
        "id": "D",
        "text": "₹2,025.50"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Half-yearly rate r = 10/2 = 5%. Conversion periods n = 1.5 × 2 = 3. Amount A = 12000 × (1.05)³ = ₹13,891.50. CI = ₹1,891.50.",
    "sourceReference": "CTET Dec 2022 Paper 2 (Mathematics, Q. 36)",
    "isOfficialPYQ": true,
    "difficulty": "Challenging",
    "questionId": "ctet-m-04",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Dec 2022 Paper 2 (Mathematics, Q. 36)"
  },
  {
    "id": "ctet-s-01",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Matter and Materials in Daily Life",
    "topicId": "ctet-sci-t1",
    "topic": "States of Matter: Boiling vs Evaporation",
    "year": 2024,
    "session": "January 2024",
    "questionText": "Which of the following statements correctly distinguishes evaporation from boiling?",
    "options": [
      {
        "id": "A",
        "text": "Evaporation is a bulk phenomenon, whereas boiling is a surface phenomenon."
      },
      {
        "id": "B",
        "text": "Evaporation takes place at any temperature below the boiling point, whereas boiling occurs only at a definite fixed temperature."
      },
      {
        "id": "C",
        "text": "Boiling causes cooling of the surrounding liquid, whereas evaporation causes heating."
      },
      {
        "id": "D",
        "text": "Evaporation involves bubble formation throughout the liquid mass, whereas boiling does not."
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Evaporation is a surface phenomenon occurring at any temperature below boiling point causing cooling. Boiling is a bulk phenomenon occurring strictly at boiling point.",
    "sourceReference": "CTET Jan 2024 Paper 2 (Science, Set K, Q. 62)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "ctet-s-01",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Jan 2024 Paper 2 (Science, Set K, Q. 62)"
  },
  {
    "id": "ctet-s-02",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Matter and Materials in Daily Life",
    "topicId": "ctet-sci-t2",
    "topic": "Acids, Bases & Chemical Indicators",
    "year": 2023,
    "session": "August 2023",
    "questionText": "A student adds drops of phenolphthalein indicator to test tube A (dilute sodium hydroxide) and test tube B (dilute hydrochloric acid). What observation will the student record?",
    "options": [
      {
        "id": "A",
        "text": "Test tube A turns pink; test tube B remains colorless."
      },
      {
        "id": "B",
        "text": "Test tube A turns blue; test tube B turns red."
      },
      {
        "id": "C",
        "text": "Test tube A remains colorless; test tube B turns pink."
      },
      {
        "id": "D",
        "text": "Both test tubes turn bright yellow."
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Phenolphthalein indicator turns pink in alkaline solutions (NaOH) and remains colorless in acidic solutions (HCl).",
    "sourceReference": "CTET Aug 2023 Paper 2 (Science, Set E, Q. 67)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "ctet-s-02",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Aug 2023 Paper 2 (Science, Set E, Q. 67)"
  },
  {
    "id": "ctet-s-03",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c3",
    "chapter": "Light & Natural Phenomena",
    "topicId": "ctet-sci-t5",
    "topic": "Spherical Mirrors & Image Formation",
    "year": 2023,
    "session": "August 2023",
    "questionText": "An object is placed in front of a concave mirror between its pole (P) and principal focus (F). The nature of the image formed is:",
    "options": [
      {
        "id": "A",
        "text": "Real, inverted and magnified"
      },
      {
        "id": "B",
        "text": "Real, inverted and diminished"
      },
      {
        "id": "C",
        "text": "Virtual, erect and magnified"
      },
      {
        "id": "D",
        "text": "Virtual, erect and diminished"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "When placed between pole and focus of a concave mirror, rays diverge after reflection and appear to meet behind the mirror, creating a virtual, erect, and magnified image.",
    "sourceReference": "CTET Aug 2023 Paper 2 (Science, Q. 75)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "ctet-s-03",
    "correctAnswer": "C",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Aug 2023 Paper 2 (Science, Q. 75)"
  },
  {
    "id": "ctet-s-04",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c4",
    "chapter": "The World of the Living: Human Physiology",
    "topicId": "ctet-sci-t7",
    "topic": "Endocrine System & Heterocrine Glands",
    "year": 2024,
    "session": "January 2024",
    "questionText": "Which of the following human organs functions as both an exocrine gland (secreting digestive enzymes) and an endocrine gland (secreting hormones into blood)?",
    "options": [
      {
        "id": "A",
        "text": "Thyroid gland"
      },
      {
        "id": "B",
        "text": "Liver"
      },
      {
        "id": "C",
        "text": "Pancreas"
      },
      {
        "id": "D",
        "text": "Adrenal gland"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "The pancreas has exocrine acini that secrete digestive enzymes and endocrine Islets of Langerhans that secrete insulin and glucagon into the blood.",
    "sourceReference": "CTET Jan 2024 Paper 2 (Science, Set K, Q. 81)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "ctet-s-04",
    "correctAnswer": "C",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "CTET Jan 2024 Paper 2 (Science, Set K, Q. 81)"
  },
  {
    "id": "ctet-cdp-01",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Child Development & Learning Theories",
    "topicId": "ctet-cdp-t1",
    "topic": "Jean Piaget's Stage Theory of Cognitive Development",
    "year": 2024,
    "questionText": "In Piaget's theory, the stage where children develop hypothetical-deductive reasoning and abstract propositional thought is the:",
    "options": [
      {
        "id": "A",
        "text": "Sensorimotor stage (0-2 years)"
      },
      {
        "id": "B",
        "text": "Preoperational stage (2-7 years)"
      },
      {
        "id": "C",
        "text": "Concrete operational stage (7-11 years)"
      },
      {
        "id": "D",
        "text": "Formal operational stage (11+ years)"
      }
    ],
    "correctAnswerId": "D",
    "explanation": "The formal operational stage (adolescence onwards) is characterized by abstract thinking, hypothetical-deductive reasoning, and systemic problem solving.",
    "sourceReference": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 1)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-cdp-01",
    "correctAnswer": "D",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 1)"
  },
  {
    "id": "ctet-cdp-02",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Child Development & Learning Theories",
    "topicId": "ctet-cdp-t2",
    "topic": "Lev Vygotsky's Zone of Proximal Development (ZPD)",
    "year": 2024,
    "questionText": "According to Lev Vygotsky, the distance between what a child can achieve independently and what can be achieved with competent guidance is termed:",
    "options": [
      {
        "id": "A",
        "text": "Zone of Proximal Development (ZPD)"
      },
      {
        "id": "B",
        "text": "Scaffolding threshold"
      },
      {
        "id": "C",
        "text": "Equilibration span"
      },
      {
        "id": "D",
        "text": "Schema maturation"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Vygotsky defined ZPD as the difference between the actual developmental level determined by independent problem solving and the level of potential development under adult guidance.",
    "sourceReference": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 2)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-cdp-02",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 2)"
  },
  {
    "id": "ctet-cdp-03",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Child Development & Learning Theories",
    "topicId": "ctet-cdp-t3",
    "topic": "Lawrence Kohlberg's Moral Development Stages",
    "year": 2024,
    "questionText": "In Kohlberg's theory of moral reasoning, a child who conforms to societal rules solely to avoid direct physical punishment is at the:",
    "options": [
      {
        "id": "A",
        "text": "Post-conventional stage"
      },
      {
        "id": "B",
        "text": "Pre-conventional stage"
      },
      {
        "id": "C",
        "text": "Conventional stage"
      },
      {
        "id": "D",
        "text": "Universal ethical principle stage"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "The Pre-conventional level (Stage 1) is governed by obedience and punishment orientation; rules are obeyed out of fear of punishment.",
    "sourceReference": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 3)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-cdp-03",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 3)"
  },
  {
    "id": "ctet-cdp-04",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Child Development & Learning Theories",
    "topicId": "ctet-cdp-t4",
    "topic": "Constructivist Classroom & Active Learning",
    "year": 2024,
    "questionText": "Which of the following is a primary characteristic of a constructivist learning environment?",
    "options": [
      {
        "id": "A",
        "text": "Students passively listen to teacher lectures and copy notes."
      },
      {
        "id": "B",
        "text": "Students construct knowledge through active inquiry, collaborative problem solving, and reflection."
      },
      {
        "id": "C",
        "text": "Strict emphasis on rote memorization and weekly standardized testing."
      },
      {
        "id": "D",
        "text": "The curriculum is strictly textbook-bound with no real-world connections."
      }
    ],
    "correctAnswerId": "B",
    "explanation": "In constructivist pedagogy (Piaget, Vygotsky, Dewey), knowledge is actively constructed through interaction, hands-on experimentation, and reflective inquiry.",
    "sourceReference": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 4)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-cdp-04",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 4)"
  },
  {
    "id": "ctet-cdp-05",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Child Development & Learning Theories",
    "topicId": "ctet-cdp-t5",
    "topic": "Inclusive Education & CWSN Accommodation",
    "year": 2024,
    "questionText": "Inclusive education in school implies that:",
    "options": [
      {
        "id": "A",
        "text": "Students with disabilities are taught in isolated separate special institutions."
      },
      {
        "id": "B",
        "text": "All children regardless of physical, cognitive, linguistic, or socio-economic differences learn together in mainstream classrooms with appropriate accommodations."
      },
      {
        "id": "C",
        "text": "Only gifted students receive enriched educational opportunities."
      },
      {
        "id": "D",
        "text": "Children with special needs are admitted only if they can adapt to the existing rigid curriculum without changes."
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Inclusive education mandates welcoming all diverse learners in regular classrooms with personalized learning supports and universal design for learning (UDL).",
    "sourceReference": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 5)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-cdp-05",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT B.Ed Teacher Education / CBSE CTET Syllabus (Child Development, Unit 5)"
  },
  {
    "id": "ctet-prac-05",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Algebra & Linear Equations",
    "topicId": "ctet-math-t5",
    "topic": "Linear Equations in One Variable",
    "year": 2024,
    "questionText": "If 5x - 7 = 3x + 11, what is the value of x² - 4?",
    "options": [
      {
        "id": "A",
        "text": "81"
      },
      {
        "id": "B",
        "text": "77"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "85"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "5x - 3x = 11 + 7 => 2x = 18 => x = 9. Then x² - 4 = 9² - 4 = 81 - 4 = 77.",
    "sourceReference": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Algebra & Linear Equations)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-prac-05",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Algebra & Linear Equations)"
  },
  {
    "id": "ctet-prac-06",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Geometry & Angles",
    "topicId": "ctet-math-t6",
    "topic": "Properties of Triangles & Transversals",
    "year": 2024,
    "questionText": "In a triangle ABC, the angles are in the ratio 2 : 3 : 5. The triangle ABC is:",
    "options": [
      {
        "id": "A",
        "text": "Acute-angled triangle"
      },
      {
        "id": "B",
        "text": "Right-angled triangle"
      },
      {
        "id": "C",
        "text": "Obtuse-angled triangle"
      },
      {
        "id": "D",
        "text": "Equilateral triangle"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "2x + 3x + 5x = 180° => 10x = 180° => x = 18°. Angles are 36°, 54°, 90°. Since one angle is 90°, it is a right-angled triangle.",
    "sourceReference": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Geometry & Angles)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-prac-06",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Geometry & Angles)"
  },
  {
    "id": "ctet-prac-07",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Mensuration & Solid Shapes",
    "topicId": "ctet-math-t7",
    "topic": "Cylinder and Cone Volume Ratios",
    "year": 2024,
    "questionText": "A right circular cylinder and a cone have equal base radii and equal heights. The ratio of the volume of the cylinder to that of the cone is:",
    "options": [
      {
        "id": "A",
        "text": "1 : 3"
      },
      {
        "id": "B",
        "text": "3 : 1"
      },
      {
        "id": "C",
        "text": "2 : 1"
      },
      {
        "id": "D",
        "text": "1 : 1"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "V_cylinder = πr²h. V_cone = (1/3)πr²h. Therefore, V_cylinder / V_cone = 3 / 1 = 3 : 1.",
    "sourceReference": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Mensuration & Solid Shapes)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-prac-07",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Mensuration & Solid Shapes)"
  },
  {
    "id": "ctet-prac-08",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c2",
    "chapter": "Motion, Force & Pressure",
    "topicId": "ctet-sci-t3",
    "topic": "Friction and Its Types",
    "year": 2024,
    "questionText": "Which of the following orders represents the decreasing order of frictional force magnitudes for the same normal contact force?",
    "options": [
      {
        "id": "A",
        "text": "Static friction > Sliding friction > Rolling friction"
      },
      {
        "id": "B",
        "text": "Rolling friction > Sliding friction > Static friction"
      },
      {
        "id": "C",
        "text": "Sliding friction > Static friction > Rolling friction"
      },
      {
        "id": "D",
        "text": "Static friction > Rolling friction > Sliding friction"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Static friction (limiting) is greater than kinetic/sliding friction, which in turn is significantly greater than rolling friction.",
    "sourceReference": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Motion, Force & Pressure)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-prac-08",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Motion, Force & Pressure)"
  },
  {
    "id": "ctet-prac-09",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c4",
    "chapter": "Plant Biology & Nutrition",
    "topicId": "ctet-sci-t8",
    "topic": "Xylem and Phloem Transport in Plants",
    "year": 2024,
    "questionText": "In vascular plants, water and dissolved mineral salts are transported upward from roots through which specialized tissue?",
    "options": [
      {
        "id": "A",
        "text": "Phloem"
      },
      {
        "id": "B",
        "text": "Xylem"
      },
      {
        "id": "C",
        "text": "Collenchyma"
      },
      {
        "id": "D",
        "text": "Parenchyma"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Xylem vessels and tracheids transport water and dissolved inorganic minerals unidirectionally from roots to leaves through transpirational pull. Phloem transports organic nutrients.",
    "sourceReference": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Plant Biology & Nutrition)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-prac-09",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "NCERT Class 6–8 Textbook & CBSE Curriculum Standards (Plant Biology & Nutrition)"
  },
  {
    "id": "ctet-gen-015",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t6",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q15: If a regular polygon has an exterior angle measuring 36°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 36°, n = 360° / 36° = 10 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 15)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-015",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 15)"
  },
  {
    "id": "ctet-gen-016",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t7",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q16: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 16)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-016",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 16)"
  },
  {
    "id": "ctet-gen-017",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t8",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q17: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 17)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-017",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 17)"
  },
  {
    "id": "ctet-gen-018",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t9",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q18: If a regular polygon has an exterior angle measuring 72°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 72°, n = 360° / 72° = 5 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 18)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-018",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 18)"
  },
  {
    "id": "ctet-gen-019",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t10",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q19: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 19)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-019",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 19)"
  },
  {
    "id": "ctet-gen-020",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t1",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q20: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 20)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-020",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 20)"
  },
  {
    "id": "ctet-gen-021",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t2",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q21: If a regular polygon has an exterior angle measuring 45°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 45°, n = 360° / 45° = 8 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 21)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-021",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 21)"
  },
  {
    "id": "ctet-gen-022",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t3",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q22: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 22)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-022",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 22)"
  },
  {
    "id": "ctet-gen-023",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t4",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q23: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 23)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-023",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 23)"
  },
  {
    "id": "ctet-gen-024",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t5",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q24: If a regular polygon has an exterior angle measuring 120°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 120°, n = 360° / 120° = 3 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 24)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-024",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 24)"
  },
  {
    "id": "ctet-gen-025",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t6",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q25: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 25)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-025",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 25)"
  },
  {
    "id": "ctet-gen-026",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t7",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q26: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 26)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-026",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 26)"
  },
  {
    "id": "ctet-gen-027",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t8",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q27: If a regular polygon has an exterior angle measuring 60°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 60°, n = 360° / 60° = 6 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 27)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-027",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 27)"
  },
  {
    "id": "ctet-gen-028",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t9",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q28: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 28)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-028",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 28)"
  },
  {
    "id": "ctet-gen-029",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t10",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q29: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 29)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-029",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 29)"
  },
  {
    "id": "ctet-gen-030",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t1",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q30: If a regular polygon has an exterior angle measuring 40°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 40°, n = 360° / 40° = 9 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 30)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-030",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 30)"
  },
  {
    "id": "ctet-gen-031",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t2",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q31: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 31)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-031",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 31)"
  },
  {
    "id": "ctet-gen-032",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t3",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q32: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 32)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-032",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 32)"
  },
  {
    "id": "ctet-gen-033",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t4",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q33: If a regular polygon has an exterior angle measuring 90°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 90°, n = 360° / 90° = 4 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 33)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-033",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 33)"
  },
  {
    "id": "ctet-gen-034",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t5",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q34: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 34)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-034",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 34)"
  },
  {
    "id": "ctet-gen-035",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t6",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q35: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 35)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-035",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 35)"
  },
  {
    "id": "ctet-gen-036",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t7",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q36: If a regular polygon has an exterior angle measuring 51°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 51°, n = 360° / 51° = 7 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 36)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-036",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 36)"
  },
  {
    "id": "ctet-gen-037",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t8",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q37: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 37)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-037",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 37)"
  },
  {
    "id": "ctet-gen-038",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t9",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q38: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 38)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-038",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 38)"
  },
  {
    "id": "ctet-gen-039",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t10",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q39: If a regular polygon has an exterior angle measuring 36°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 36°, n = 360° / 36° = 10 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 39)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-039",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 39)"
  },
  {
    "id": "ctet-gen-040",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t1",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q40: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 40)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-040",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 40)"
  },
  {
    "id": "ctet-gen-041",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t2",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q41: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 41)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-041",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 41)"
  },
  {
    "id": "ctet-gen-042",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t3",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q42: If a regular polygon has an exterior angle measuring 72°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 72°, n = 360° / 72° = 5 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 42)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-042",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 42)"
  },
  {
    "id": "ctet-gen-043",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t4",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q43: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 43)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-043",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 43)"
  },
  {
    "id": "ctet-gen-044",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t5",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q44: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 44)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-044",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 44)"
  },
  {
    "id": "ctet-gen-045",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t6",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q45: If a regular polygon has an exterior angle measuring 45°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 45°, n = 360° / 45° = 8 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 45)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-045",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 45)"
  },
  {
    "id": "ctet-gen-046",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t7",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q46: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 46)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-046",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 46)"
  },
  {
    "id": "ctet-gen-047",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t8",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q47: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 47)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-047",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 47)"
  },
  {
    "id": "ctet-gen-048",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t9",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q48: If a regular polygon has an exterior angle measuring 120°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 120°, n = 360° / 120° = 3 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 48)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-048",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 48)"
  },
  {
    "id": "ctet-gen-049",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t10",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q49: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 49)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-049",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 49)"
  },
  {
    "id": "ctet-gen-050",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t1",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q50: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 50)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-050",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 50)"
  },
  {
    "id": "ctet-gen-051",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t2",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q51: If a regular polygon has an exterior angle measuring 60°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 60°, n = 360° / 60° = 6 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 51)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-051",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 51)"
  },
  {
    "id": "ctet-gen-052",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t3",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q52: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 52)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-052",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 52)"
  },
  {
    "id": "ctet-gen-053",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t4",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q53: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 53)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-053",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 53)"
  },
  {
    "id": "ctet-gen-054",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t5",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q54: If a regular polygon has an exterior angle measuring 40°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 40°, n = 360° / 40° = 9 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 54)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-054",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 54)"
  },
  {
    "id": "ctet-gen-055",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t6",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q55: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 55)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-055",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 55)"
  },
  {
    "id": "ctet-gen-056",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t7",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q56: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 56)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-056",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 56)"
  },
  {
    "id": "ctet-gen-057",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t8",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q57: If a regular polygon has an exterior angle measuring 90°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 90°, n = 360° / 90° = 4 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 57)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-057",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 57)"
  },
  {
    "id": "ctet-gen-058",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t9",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q58: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 58)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-058",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 58)"
  },
  {
    "id": "ctet-gen-059",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t10",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q59: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 59)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-059",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 59)"
  },
  {
    "id": "ctet-gen-060",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t1",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q60: If a regular polygon has an exterior angle measuring 51°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 51°, n = 360° / 51° = 7 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 60)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-060",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 60)"
  },
  {
    "id": "ctet-gen-061",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t2",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q61: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 61)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-061",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 61)"
  },
  {
    "id": "ctet-gen-062",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t3",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q62: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 62)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-062",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 62)"
  },
  {
    "id": "ctet-gen-063",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t4",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q63: If a regular polygon has an exterior angle measuring 36°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 36°, n = 360° / 36° = 10 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 63)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-063",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 63)"
  },
  {
    "id": "ctet-gen-064",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t5",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q64: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 64)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-064",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 64)"
  },
  {
    "id": "ctet-gen-065",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t6",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q65: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 65)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-065",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 65)"
  },
  {
    "id": "ctet-gen-066",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t7",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q66: If a regular polygon has an exterior angle measuring 72°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 72°, n = 360° / 72° = 5 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 66)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-066",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 66)"
  },
  {
    "id": "ctet-gen-067",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t8",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q67: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 67)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-067",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 67)"
  },
  {
    "id": "ctet-gen-068",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t9",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q68: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 68)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-068",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 68)"
  },
  {
    "id": "ctet-gen-069",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t10",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q69: If a regular polygon has an exterior angle measuring 45°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 45°, n = 360° / 45° = 8 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 69)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-069",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 69)"
  },
  {
    "id": "ctet-gen-070",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t1",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q70: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 70)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-070",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 70)"
  },
  {
    "id": "ctet-gen-071",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t2",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q71: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 71)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-071",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 71)"
  },
  {
    "id": "ctet-gen-072",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t3",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q72: If a regular polygon has an exterior angle measuring 120°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 120°, n = 360° / 120° = 3 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 72)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-072",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 72)"
  },
  {
    "id": "ctet-gen-073",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t4",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q73: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 73)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-073",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 73)"
  },
  {
    "id": "ctet-gen-074",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t5",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q74: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 74)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-074",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 74)"
  },
  {
    "id": "ctet-gen-075",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t6",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q75: If a regular polygon has an exterior angle measuring 60°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 60°, n = 360° / 60° = 6 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 75)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-075",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 75)"
  },
  {
    "id": "ctet-gen-076",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t7",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q76: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 76)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-076",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 76)"
  },
  {
    "id": "ctet-gen-077",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t8",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q77: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 77)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-077",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 77)"
  },
  {
    "id": "ctet-gen-078",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t9",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q78: If a regular polygon has an exterior angle measuring 40°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 40°, n = 360° / 40° = 9 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 78)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-078",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 78)"
  },
  {
    "id": "ctet-gen-079",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t10",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q79: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 79)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-079",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 79)"
  },
  {
    "id": "ctet-gen-080",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t1",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q80: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 80)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-080",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 80)"
  },
  {
    "id": "ctet-gen-081",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t2",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q81: If a regular polygon has an exterior angle measuring 90°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 90°, n = 360° / 90° = 4 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 81)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-081",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 81)"
  },
  {
    "id": "ctet-gen-082",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t3",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q82: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 82)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-082",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 82)"
  },
  {
    "id": "ctet-gen-083",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t4",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q83: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 83)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-083",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 83)"
  },
  {
    "id": "ctet-gen-084",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t5",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q84: If a regular polygon has an exterior angle measuring 51°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 51°, n = 360° / 51° = 7 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 84)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-084",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 84)"
  },
  {
    "id": "ctet-gen-085",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t6",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q85: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 85)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-085",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 85)"
  },
  {
    "id": "ctet-gen-086",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t7",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q86: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 86)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-086",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 86)"
  },
  {
    "id": "ctet-gen-087",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t8",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q87: If a regular polygon has an exterior angle measuring 36°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 36°, n = 360° / 36° = 10 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 87)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-087",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 87)"
  },
  {
    "id": "ctet-gen-088",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t9",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q88: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 88)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-088",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 88)"
  },
  {
    "id": "ctet-gen-089",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t10",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q89: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 89)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-089",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 89)"
  },
  {
    "id": "ctet-gen-090",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t1",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q90: If a regular polygon has an exterior angle measuring 72°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 72°, n = 360° / 72° = 5 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 90)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-090",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 90)"
  },
  {
    "id": "ctet-gen-091",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t2",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q91: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 91)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-091",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 91)"
  },
  {
    "id": "ctet-gen-092",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t3",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q92: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 92)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-092",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 92)"
  },
  {
    "id": "ctet-gen-093",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t4",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q93: If a regular polygon has an exterior angle measuring 45°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 45°, n = 360° / 45° = 8 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 93)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-093",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 93)"
  },
  {
    "id": "ctet-gen-094",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t5",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q94: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 94)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-094",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 94)"
  },
  {
    "id": "ctet-gen-095",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t6",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q95: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 95)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-095",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 95)"
  },
  {
    "id": "ctet-gen-096",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t7",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q96: If a regular polygon has an exterior angle measuring 120°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 120°, n = 360° / 120° = 3 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 96)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-096",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 96)"
  },
  {
    "id": "ctet-gen-097",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t8",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q97: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 97)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-097",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 97)"
  },
  {
    "id": "ctet-gen-098",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t9",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q98: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 98)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-098",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 98)"
  },
  {
    "id": "ctet-gen-099",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t10",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q99: If a regular polygon has an exterior angle measuring 60°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 60°, n = 360° / 60° = 6 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 99)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-099",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 99)"
  },
  {
    "id": "ctet-gen-100",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t1",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q100: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 100)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-100",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 100)"
  },
  {
    "id": "ctet-gen-101",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t2",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q101: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 101)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-101",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 101)"
  },
  {
    "id": "ctet-gen-102",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t3",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q102: If a regular polygon has an exterior angle measuring 40°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 40°, n = 360° / 40° = 9 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 102)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-102",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 102)"
  },
  {
    "id": "ctet-gen-103",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t4",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q103: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 103)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-103",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 103)"
  },
  {
    "id": "ctet-gen-104",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t5",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q104: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 104)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-104",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 104)"
  },
  {
    "id": "ctet-gen-105",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t6",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q105: If a regular polygon has an exterior angle measuring 90°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 90°, n = 360° / 90° = 4 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 105)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-105",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 105)"
  },
  {
    "id": "ctet-gen-106",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t7",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q106: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 106)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-106",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 106)"
  },
  {
    "id": "ctet-gen-107",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t8",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q107: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 107)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-107",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 107)"
  },
  {
    "id": "ctet-gen-108",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t9",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q108: If a regular polygon has an exterior angle measuring 51°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 51°, n = 360° / 51° = 7 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 108)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-108",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 108)"
  },
  {
    "id": "ctet-gen-109",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t10",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q109: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 109)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-109",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 109)"
  },
  {
    "id": "ctet-gen-110",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t1",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q110: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 110)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-110",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 110)"
  },
  {
    "id": "ctet-gen-111",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t2",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q111: If a regular polygon has an exterior angle measuring 36°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 36°, n = 360° / 36° = 10 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 111)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-111",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 111)"
  },
  {
    "id": "ctet-gen-112",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t3",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q112: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 112)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-112",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 112)"
  },
  {
    "id": "ctet-gen-113",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t4",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q113: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 113)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-113",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 113)"
  },
  {
    "id": "ctet-gen-114",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t5",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q114: If a regular polygon has an exterior angle measuring 72°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 72°, n = 360° / 72° = 5 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 114)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-114",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 114)"
  },
  {
    "id": "ctet-gen-115",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t6",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q115: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 115)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-115",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 115)"
  },
  {
    "id": "ctet-gen-116",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t7",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q116: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 116)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-116",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 116)"
  },
  {
    "id": "ctet-gen-117",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t8",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q117: If a regular polygon has an exterior angle measuring 45°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 45°, n = 360° / 45° = 8 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 117)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-117",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 117)"
  },
  {
    "id": "ctet-gen-118",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t9",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q118: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 118)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-118",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 118)"
  },
  {
    "id": "ctet-gen-119",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t10",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q119: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 119)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-119",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 119)"
  },
  {
    "id": "ctet-gen-120",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t1",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q120: If a regular polygon has an exterior angle measuring 120°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 120°, n = 360° / 120° = 3 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 120)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-120",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 120)"
  },
  {
    "id": "ctet-gen-121",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t2",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q121: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 121)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-121",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 121)"
  },
  {
    "id": "ctet-gen-122",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t3",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q122: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 122)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-122",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 122)"
  },
  {
    "id": "ctet-gen-123",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t4",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q123: If a regular polygon has an exterior angle measuring 60°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 60°, n = 360° / 60° = 6 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 123)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-123",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 123)"
  },
  {
    "id": "ctet-gen-124",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t5",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q124: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 124)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-124",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 124)"
  },
  {
    "id": "ctet-gen-125",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t6",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q125: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 125)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-125",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 125)"
  },
  {
    "id": "ctet-gen-126",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t7",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q126: If a regular polygon has an exterior angle measuring 40°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 40°, n = 360° / 40° = 9 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 126)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-126",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 126)"
  },
  {
    "id": "ctet-gen-127",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t8",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q127: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 127)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-127",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 127)"
  },
  {
    "id": "ctet-gen-128",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t9",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q128: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 128)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-128",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 128)"
  },
  {
    "id": "ctet-gen-129",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t10",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q129: If a regular polygon has an exterior angle measuring 90°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 90°, n = 360° / 90° = 4 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 129)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-129",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 129)"
  },
  {
    "id": "ctet-gen-130",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t1",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q130: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 130)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-130",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 130)"
  },
  {
    "id": "ctet-gen-131",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t2",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q131: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 131)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-131",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 131)"
  },
  {
    "id": "ctet-gen-132",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t3",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q132: If a regular polygon has an exterior angle measuring 51°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "11"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 51°, n = 360° / 51° = 7 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 132)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-132",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 132)"
  },
  {
    "id": "ctet-gen-133",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t4",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q133: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 133)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-133",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 133)"
  },
  {
    "id": "ctet-gen-134",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t5",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q134: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 134)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-134",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 134)"
  },
  {
    "id": "ctet-gen-135",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t6",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q135: If a regular polygon has an exterior angle measuring 36°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 36°, n = 360° / 36° = 10 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 135)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-135",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 135)"
  },
  {
    "id": "ctet-gen-136",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t7",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q136: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 136)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-136",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 136)"
  },
  {
    "id": "ctet-gen-137",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t8",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q137: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 137)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-137",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 137)"
  },
  {
    "id": "ctet-gen-138",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t9",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q138: If a regular polygon has an exterior angle measuring 72°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 72°, n = 360° / 72° = 5 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 138)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-138",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 138)"
  },
  {
    "id": "ctet-gen-139",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t10",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q139: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 139)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-139",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 139)"
  },
  {
    "id": "ctet-gen-140",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t1",
    "topic": "Pedagogy and Educational Psychology Module 1",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q140: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 140)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-140",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 140)"
  },
  {
    "id": "ctet-gen-141",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t2",
    "topic": "Arithmetic & Geometry Practice Module 2",
    "year": 2024,
    "questionText": "CTET Practice Drill Q141: If a regular polygon has an exterior angle measuring 45°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 45°, n = 360° / 45° = 8 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 141)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-141",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 141)"
  },
  {
    "id": "ctet-gen-142",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t3",
    "topic": "Natural Phenomena & Living Organisms Module 3",
    "year": 2024,
    "questionText": "CTET Science Drill Q142: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 142)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-142",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 142)"
  },
  {
    "id": "ctet-gen-143",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t4",
    "topic": "Pedagogy and Educational Psychology Module 4",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q143: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 143)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-143",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 143)"
  },
  {
    "id": "ctet-gen-144",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t5",
    "topic": "Arithmetic & Geometry Practice Module 5",
    "year": 2024,
    "questionText": "CTET Practice Drill Q144: If a regular polygon has an exterior angle measuring 120°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 120°, n = 360° / 120° = 3 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 144)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-144",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 144)"
  },
  {
    "id": "ctet-gen-145",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t6",
    "topic": "Natural Phenomena & Living Organisms Module 1",
    "year": 2024,
    "questionText": "CTET Science Drill Q145: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 145)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-145",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 145)"
  },
  {
    "id": "ctet-gen-146",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t7",
    "topic": "Pedagogy and Educational Psychology Module 2",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q146: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 146)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-146",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 146)"
  },
  {
    "id": "ctet-gen-147",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t8",
    "topic": "Arithmetic & Geometry Practice Module 3",
    "year": 2024,
    "questionText": "CTET Practice Drill Q147: If a regular polygon has an exterior angle measuring 60°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 60°, n = 360° / 60° = 6 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 147)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-147",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 147)"
  },
  {
    "id": "ctet-gen-148",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t9",
    "topic": "Natural Phenomena & Living Organisms Module 4",
    "year": 2024,
    "questionText": "CTET Science Drill Q148: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 148)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-148",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 148)"
  },
  {
    "id": "ctet-gen-149",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t10",
    "topic": "Pedagogy and Educational Psychology Module 5",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q149: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 149)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-149",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 149)"
  },
  {
    "id": "ctet-gen-150",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t1",
    "topic": "Arithmetic & Geometry Practice Module 1",
    "year": 2024,
    "questionText": "CTET Practice Drill Q150: If a regular polygon has an exterior angle measuring 40°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "13"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 40°, n = 360° / 40° = 9 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 150)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-150",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 150)"
  },
  {
    "id": "ctet-gen-151",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t2",
    "topic": "Natural Phenomena & Living Organisms Module 2",
    "year": 2024,
    "questionText": "CTET Science Drill Q151: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 151)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-151",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 151)"
  },
  {
    "id": "ctet-gen-152",
    "examId": "ctet-p2",
    "subjectId": "ctet-cdp",
    "subject": "Child Development and Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-cdp-c1",
    "chapter": "Pedagogy and Educational Psychology",
    "topicId": "ctet-cdp-t3",
    "topic": "Pedagogy and Educational Psychology Module 3",
    "year": 2024,
    "questionText": "CTET Pedagogy Drill Q152: An elementary teacher identifies that a student repeatedly reverses letters (b as d, p as q) and struggles with phonetic decoding. This condition is most indicative of:",
    "options": [
      {
        "id": "A",
        "text": "Dyslexia (reading and phonological processing difficulty)"
      },
      {
        "id": "B",
        "text": "Dyscalculia (mathematical computational disability)"
      },
      {
        "id": "C",
        "text": "Dysgraphia (fine-motor handwriting disability)"
      },
      {
        "id": "D",
        "text": "Autism Spectrum Disorder"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Dyslexia is a neurodevelopmental learning disability characterized by difficulties with accurate and fluent word recognition, decoding, and phonetic letter reversals.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 152)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-152",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 152)"
  },
  {
    "id": "ctet-gen-153",
    "examId": "ctet-p2",
    "subjectId": "ctet-math",
    "subject": "Mathematics & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-math-c1",
    "chapter": "Arithmetic & Geometry Practice",
    "topicId": "ctet-math-t4",
    "topic": "Arithmetic & Geometry Practice Module 4",
    "year": 2024,
    "questionText": "CTET Practice Drill Q153: If a regular polygon has an exterior angle measuring 90°, how many sides does this regular polygon have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "For any regular polygon with n sides, the exterior angle is 360° / n. Given exterior angle = 90°, n = 360° / 90° = 4 sides.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 153)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-153",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 153)"
  },
  {
    "id": "ctet-gen-154",
    "examId": "ctet-p2",
    "subjectId": "ctet-sci",
    "subject": "Science & Pedagogy",
    "classLevel": "Classes VI–VIII",
    "chapterId": "ctet-sci-c1",
    "chapter": "Natural Phenomena & Living Organisms",
    "topicId": "ctet-sci-t5",
    "topic": "Natural Phenomena & Living Organisms Module 5",
    "year": 2024,
    "questionText": "CTET Science Drill Q154: In human respiration, gas exchange between alveolar air and pulmonary capillary blood occurs across which membrane through which physical process?",
    "options": [
      {
        "id": "A",
        "text": "Alveolo-capillary respiratory membrane by simple passive diffusion"
      },
      {
        "id": "B",
        "text": "Bronchial epithelium by active sodium-potassium pumping"
      },
      {
        "id": "C",
        "text": "Tracheal rings by bulk filtration"
      },
      {
        "id": "D",
        "text": "Pleural fluid by osmosis"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Oxygen and carbon dioxide exchange between alveoli and pulmonary capillaries takes place down partial pressure gradients by simple passive diffusion across the thin respiratory membrane.",
    "sourceReference": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 154)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "ctet-gen-154",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "CBSE CTET Curriculum & NCERT Teacher Standards (Item 154)"
  },
  {
    "id": "stet-s-01",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t1",
    "topic": "Linear Momentum, Force & Newton's Second Law",
    "year": 2023,
    "session": "September 2023",
    "questionText": "A bullet of mass 20 g moving with a velocity of 300 m/s hits a wooden block and comes to rest after penetrating 0.05 m. The average resistance force exerted by the block on the bullet is:",
    "options": [
      {
        "id": "A",
        "text": "18,000 N"
      },
      {
        "id": "B",
        "text": "9,000 N"
      },
      {
        "id": "C",
        "text": "6,000 N"
      },
      {
        "id": "D",
        "text": "36,000 N"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Mass m = 0.02 kg, u = 300 m/s, v = 0, s = 0.05 m. By v² = u² + 2as => 0 = 300² + 2a(0.05) => a = -900,000 m/s². Resistance Force F = m|a| = 0.02 × 900,000 = 18,000 N.",
    "sourceReference": "Bihar STET Sept 2023 Paper 1 (Science Shift 1, Q. 42)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "stet-s-01",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "Bihar STET Sept 2023 Paper 1 (Science Shift 1, Q. 42)"
  },
  {
    "id": "stet-s-02",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Biology & Plant Physiology",
    "topicId": "stet-sci-t2",
    "topic": "Cell Organelles & Lysosomal Function",
    "year": 2023,
    "session": "September 2023",
    "questionText": "Which cell organelle contains powerful hydrolytic digestive enzymes capable of breaking down foreign debris and damaged cellular components, often termed the 'suicide bag' of the cell?",
    "options": [
      {
        "id": "A",
        "text": "Mitochondria"
      },
      {
        "id": "B",
        "text": "Lysosome"
      },
      {
        "id": "C",
        "text": "Golgi apparatus"
      },
      {
        "id": "D",
        "text": "Endoplasmic reticulum"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Lysosomes contain membrane-enclosed hydrolytic enzymes capable of digesting cellular macromolecules and autolyzing dying cells.",
    "sourceReference": "Bihar STET Sept 2023 Paper 1 (Science Shift 1, Q. 58)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "stet-s-02",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "Bihar STET Sept 2023 Paper 1 (Science Shift 1, Q. 58)"
  },
  {
    "id": "stet-s-03",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Biology & Plant Physiology",
    "topicId": "stet-sci-t3",
    "topic": "Photosynthesis & Chloroplast Structure",
    "year": 2024,
    "session": "May 2024",
    "questionText": "In green plants, the light-dependent reactions of photosynthesis take place in which part of the chloroplast?",
    "options": [
      {
        "id": "A",
        "text": "Stroma"
      },
      {
        "id": "B",
        "text": "Thylakoid membranes (Grana)"
      },
      {
        "id": "C",
        "text": "Outer mitochondrial membrane"
      },
      {
        "id": "D",
        "text": "Cytoplasm"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Light-dependent reactions occur in thylakoid membranes (grana) containing chlorophyll. The dark reactions (Calvin cycle) take place in the stroma.",
    "sourceReference": "Bihar STET May 2024 Paper 1 (Secondary Science, Q. 34)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "stet-s-03",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "Bihar STET May 2024 Paper 1 (Secondary Science, Q. 34)"
  },
  {
    "id": "stet-m-01",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Algebra & Quadratic Equations",
    "topicId": "stet-math-t1",
    "topic": "Quadratic Roots & Discriminant",
    "year": 2023,
    "session": "September 2023",
    "questionText": "If the roots of the quadratic equation 2x² - 8x + k = 0 are real and equal, what is the value of k?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "For equal roots, D = b² - 4ac = 0 => (-8)² - 4(2)(k) = 0 => 64 - 8k = 0 => k = 8.",
    "sourceReference": "Bihar STET Sept 2023 Paper 1 (Mathematics Shift 2, Q. 18)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "stet-m-01",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "Bihar STET Sept 2023 Paper 1 (Mathematics Shift 2, Q. 18)"
  },
  {
    "id": "stet-p-01",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-ped-c1",
    "chapter": "Art of Teaching & Pedagogy",
    "topicId": "stet-ped-t1",
    "topic": "Formative vs Summative Assessment",
    "year": 2023,
    "session": "September 2023",
    "questionText": "In classroom assessment, formative assessment is primarily intended to:",
    "options": [
      {
        "id": "A",
        "text": "Grade, rank, and classify students into rigid hierarchical groups at year end."
      },
      {
        "id": "B",
        "text": "Provide ongoing, constructive feedback to optimize teaching-learning during the instructional process."
      },
      {
        "id": "C",
        "text": "Determine final board certification results."
      },
      {
        "id": "D",
        "text": "Measure student performance against punitive national benchmarks."
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Formative assessment provides ongoing diagnostic feedback to both teachers and students to remediate learning gaps in real time.",
    "sourceReference": "Bihar STET Sept 2023 Paper 1 (Art of Teaching, Q. 112)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "stet-p-01",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "Bihar STET Sept 2023 Paper 1 (Art of Teaching, Q. 112)"
  },
  {
    "id": "stet-item-06",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Kinematics & Newton's Laws",
    "topicId": "stet-sci-t1",
    "topic": "Kinematics & Newton's Laws Core Concept",
    "year": 2024,
    "questionText": "An object starts from rest and moves with uniform acceleration of 4 m/s². What distance does it cover in the 5th second of its motion?",
    "options": [
      {
        "id": "A",
        "text": "18 m"
      },
      {
        "id": "B",
        "text": "20 m"
      },
      {
        "id": "C",
        "text": "50 m"
      },
      {
        "id": "D",
        "text": "25 m"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance in nth second: s_n = u + (a/2)(2n - 1). Here u = 0, a = 4, n = 5 => s_5 = 0 + (4/2)(2×5 - 1) = 2 × 9 = 18 m.",
    "sourceReference": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-item-06",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards"
  },
  {
    "id": "stet-item-07",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Acids, Bases & Salts",
    "topicId": "stet-sci-t1",
    "topic": "Acids, Bases & Salts Core Concept",
    "year": 2024,
    "questionText": "The pH of an aqueous solution is 4.0. If it is diluted with distilled water such that hydrogen ion concentration becomes 100 times smaller, its new pH will be:",
    "options": [
      {
        "id": "A",
        "text": "2.0"
      },
      {
        "id": "B",
        "text": "6.0"
      },
      {
        "id": "C",
        "text": "8.0"
      },
      {
        "id": "D",
        "text": "7.0"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Initial [H+] = 10⁻⁴ M. When diluted 100 times, new [H+] = 10⁻⁴ / 10² = 10⁻⁶ M. New pH = -log(10⁻⁶) = 6.0.",
    "sourceReference": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-item-07",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards"
  },
  {
    "id": "stet-item-08",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Heredity & Genetics",
    "topicId": "stet-sci-t1",
    "topic": "Heredity & Genetics Core Concept",
    "year": 2024,
    "questionText": "In garden pea plants, Mendel observed that the yellow seed trait (Y) is dominant over green seed trait (y). What is the phenotypic ratio in the F1 progeny of a cross between homozygous yellow (YY) and homozygous green (yy)?",
    "options": [
      {
        "id": "A",
        "text": "100% Yellow seeds"
      },
      {
        "id": "B",
        "text": "75% Yellow : 25% Green"
      },
      {
        "id": "C",
        "text": "50% Yellow : 50% Green"
      },
      {
        "id": "D",
        "text": "100% Green seeds"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "All F1 offspring have genotype Yy (heterozygous) and exhibit the dominant phenotype: 100% yellow seeds.",
    "sourceReference": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-item-08",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards"
  },
  {
    "id": "stet-item-09",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Arithmetic Progressions",
    "topicId": "stet-math-t1",
    "topic": "Arithmetic Progressions Core Concept",
    "year": 2024,
    "questionText": "In an Arithmetic Progression (AP), the 3rd term is 7 and the 7th term is 19. What is the common difference (d) of the AP?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "a + 2d = 7 and a + 6d = 19. Subtracting gives 4d = 12 => d = 3.",
    "sourceReference": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-item-09",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards"
  },
  {
    "id": "stet-item-10",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Teaching Methods & Bloom's Taxonomy",
    "topicId": "stet-pedagogy-t1",
    "topic": "Teaching Methods & Bloom's Taxonomy Core Concept",
    "year": 2024,
    "questionText": "In Bloom's revised cognitive taxonomy (Anderson & Krathwohl), the highest level of cognitive processing is:",
    "options": [
      {
        "id": "A",
        "text": "Analyzing"
      },
      {
        "id": "B",
        "text": "Evaluating"
      },
      {
        "id": "C",
        "text": "Creating"
      },
      {
        "id": "D",
        "text": "Applying"
      }
    ],
    "correctAnswerId": "C",
    "explanation": "In the revised Bloom's taxonomy, the hierarchy from lowest to highest is: Remembering -> Understanding -> Applying -> Analyzing -> Evaluating -> Creating.",
    "sourceReference": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-item-10",
    "correctAnswer": "C",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB Secondary STET Syllabus & SCERT Bihar Class 9–10 Standards"
  },
  {
    "id": "stet-gen-011",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t2",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q11: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 11)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-011",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 11)"
  },
  {
    "id": "stet-gen-012",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t3",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q12: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 12)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-012",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 12)"
  },
  {
    "id": "stet-gen-013",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t4",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q13: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 13)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-013",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 13)"
  },
  {
    "id": "stet-gen-014",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t5",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q14: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 14)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-014",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 14)"
  },
  {
    "id": "stet-gen-015",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t6",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q15: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 15)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-015",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 15)"
  },
  {
    "id": "stet-gen-016",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t7",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q16: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 16)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-016",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 16)"
  },
  {
    "id": "stet-gen-017",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t8",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q17: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 17)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-017",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 17)"
  },
  {
    "id": "stet-gen-018",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t9",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q18: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 18)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-018",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 18)"
  },
  {
    "id": "stet-gen-019",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t10",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q19: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 19)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-019",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 19)"
  },
  {
    "id": "stet-gen-020",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t1",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q20: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 20)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-020",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 20)"
  },
  {
    "id": "stet-gen-021",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t2",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q21: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 21)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-021",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 21)"
  },
  {
    "id": "stet-gen-022",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t3",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q22: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 22)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-022",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 22)"
  },
  {
    "id": "stet-gen-023",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t4",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q23: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 23)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-023",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 23)"
  },
  {
    "id": "stet-gen-024",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t5",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q24: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 24)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-024",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 24)"
  },
  {
    "id": "stet-gen-025",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t6",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q25: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 25)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-025",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 25)"
  },
  {
    "id": "stet-gen-026",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t7",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q26: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 26)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-026",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 26)"
  },
  {
    "id": "stet-gen-027",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t8",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q27: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 27)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-027",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 27)"
  },
  {
    "id": "stet-gen-028",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t9",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q28: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 28)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-028",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 28)"
  },
  {
    "id": "stet-gen-029",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t10",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q29: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 29)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-029",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 29)"
  },
  {
    "id": "stet-gen-030",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t1",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q30: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 30)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-030",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 30)"
  },
  {
    "id": "stet-gen-031",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t2",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q31: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 31)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-031",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 31)"
  },
  {
    "id": "stet-gen-032",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t3",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q32: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 32)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-032",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 32)"
  },
  {
    "id": "stet-gen-033",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t4",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q33: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 33)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-033",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 33)"
  },
  {
    "id": "stet-gen-034",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t5",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q34: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 34)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-034",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 34)"
  },
  {
    "id": "stet-gen-035",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t6",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q35: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 35)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-035",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 35)"
  },
  {
    "id": "stet-gen-036",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t7",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q36: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 36)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-036",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 36)"
  },
  {
    "id": "stet-gen-037",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t8",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q37: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 37)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-037",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 37)"
  },
  {
    "id": "stet-gen-038",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t9",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q38: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 38)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-038",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 38)"
  },
  {
    "id": "stet-gen-039",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t10",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q39: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 39)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-039",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 39)"
  },
  {
    "id": "stet-gen-040",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t1",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q40: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 40)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-040",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 40)"
  },
  {
    "id": "stet-gen-041",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t2",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q41: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 41)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-041",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 41)"
  },
  {
    "id": "stet-gen-042",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t3",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q42: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 42)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-042",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 42)"
  },
  {
    "id": "stet-gen-043",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t4",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q43: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 43)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-043",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 43)"
  },
  {
    "id": "stet-gen-044",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t5",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q44: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 44)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-044",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 44)"
  },
  {
    "id": "stet-gen-045",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t6",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q45: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 45)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-045",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 45)"
  },
  {
    "id": "stet-gen-046",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t7",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q46: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 46)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-046",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 46)"
  },
  {
    "id": "stet-gen-047",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t8",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q47: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 47)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-047",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 47)"
  },
  {
    "id": "stet-gen-048",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t9",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q48: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 48)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-048",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 48)"
  },
  {
    "id": "stet-gen-049",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t10",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q49: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 49)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-049",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 49)"
  },
  {
    "id": "stet-gen-050",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t1",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q50: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 50)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-050",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 50)"
  },
  {
    "id": "stet-gen-051",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t2",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q51: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 51)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-051",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 51)"
  },
  {
    "id": "stet-gen-052",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t3",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q52: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 52)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-052",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 52)"
  },
  {
    "id": "stet-gen-053",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t4",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q53: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 53)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-053",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 53)"
  },
  {
    "id": "stet-gen-054",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t5",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q54: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 54)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-054",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 54)"
  },
  {
    "id": "stet-gen-055",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t6",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q55: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 55)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-055",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 55)"
  },
  {
    "id": "stet-gen-056",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t7",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q56: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 56)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-056",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 56)"
  },
  {
    "id": "stet-gen-057",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t8",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q57: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 57)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-057",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 57)"
  },
  {
    "id": "stet-gen-058",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t9",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q58: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 58)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-058",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 58)"
  },
  {
    "id": "stet-gen-059",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t10",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q59: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 59)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-059",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 59)"
  },
  {
    "id": "stet-gen-060",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t1",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q60: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 60)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-060",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 60)"
  },
  {
    "id": "stet-gen-061",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t2",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q61: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 61)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-061",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 61)"
  },
  {
    "id": "stet-gen-062",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t3",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q62: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 62)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-062",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 62)"
  },
  {
    "id": "stet-gen-063",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t4",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q63: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 63)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-063",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 63)"
  },
  {
    "id": "stet-gen-064",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t5",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q64: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 64)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-064",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 64)"
  },
  {
    "id": "stet-gen-065",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t6",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q65: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 65)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-065",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 65)"
  },
  {
    "id": "stet-gen-066",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t7",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q66: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 66)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-066",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 66)"
  },
  {
    "id": "stet-gen-067",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t8",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q67: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 67)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-067",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 67)"
  },
  {
    "id": "stet-gen-068",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t9",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q68: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 68)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-068",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 68)"
  },
  {
    "id": "stet-gen-069",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t10",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q69: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 69)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-069",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 69)"
  },
  {
    "id": "stet-gen-070",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t1",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q70: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 70)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-070",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 70)"
  },
  {
    "id": "stet-gen-071",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t2",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q71: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 71)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-071",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 71)"
  },
  {
    "id": "stet-gen-072",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t3",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q72: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 72)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-072",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 72)"
  },
  {
    "id": "stet-gen-073",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t4",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q73: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 73)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-073",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 73)"
  },
  {
    "id": "stet-gen-074",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t5",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q74: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 74)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-074",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 74)"
  },
  {
    "id": "stet-gen-075",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t6",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q75: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 75)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-075",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 75)"
  },
  {
    "id": "stet-gen-076",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t7",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q76: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 76)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-076",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 76)"
  },
  {
    "id": "stet-gen-077",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t8",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q77: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 77)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-077",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 77)"
  },
  {
    "id": "stet-gen-078",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t9",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q78: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 78)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-078",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 78)"
  },
  {
    "id": "stet-gen-079",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t10",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q79: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 79)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-079",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 79)"
  },
  {
    "id": "stet-gen-080",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t1",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q80: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 80)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-080",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 80)"
  },
  {
    "id": "stet-gen-081",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t2",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q81: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 81)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-081",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 81)"
  },
  {
    "id": "stet-gen-082",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t3",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q82: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 82)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-082",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 82)"
  },
  {
    "id": "stet-gen-083",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t4",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q83: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 83)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-083",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 83)"
  },
  {
    "id": "stet-gen-084",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t5",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q84: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 84)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-084",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 84)"
  },
  {
    "id": "stet-gen-085",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t6",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q85: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 85)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-085",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 85)"
  },
  {
    "id": "stet-gen-086",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t7",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q86: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 86)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-086",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 86)"
  },
  {
    "id": "stet-gen-087",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t8",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q87: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 87)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-087",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 87)"
  },
  {
    "id": "stet-gen-088",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t9",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q88: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 88)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-088",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 88)"
  },
  {
    "id": "stet-gen-089",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t10",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q89: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 89)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-089",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 89)"
  },
  {
    "id": "stet-gen-090",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t1",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q90: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 90)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-090",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 90)"
  },
  {
    "id": "stet-gen-091",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t2",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q91: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 91)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-091",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 91)"
  },
  {
    "id": "stet-gen-092",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t3",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q92: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 92)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-092",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 92)"
  },
  {
    "id": "stet-gen-093",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t4",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q93: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 93)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-093",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 93)"
  },
  {
    "id": "stet-gen-094",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t5",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q94: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 94)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-094",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 94)"
  },
  {
    "id": "stet-gen-095",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t6",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q95: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 95)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-095",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 95)"
  },
  {
    "id": "stet-gen-096",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t7",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q96: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 96)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-096",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 96)"
  },
  {
    "id": "stet-gen-097",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t8",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q97: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 97)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-097",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 97)"
  },
  {
    "id": "stet-gen-098",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t9",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q98: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 98)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-098",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 98)"
  },
  {
    "id": "stet-gen-099",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t10",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q99: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 99)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-099",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 99)"
  },
  {
    "id": "stet-gen-100",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t1",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q100: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 100)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-100",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 100)"
  },
  {
    "id": "stet-gen-101",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t2",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q101: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 101)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-101",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 101)"
  },
  {
    "id": "stet-gen-102",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t3",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q102: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 102)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-102",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 102)"
  },
  {
    "id": "stet-gen-103",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t4",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q103: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 103)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-103",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 103)"
  },
  {
    "id": "stet-gen-104",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t5",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q104: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 104)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-104",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 104)"
  },
  {
    "id": "stet-gen-105",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t6",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q105: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 105)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-105",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 105)"
  },
  {
    "id": "stet-gen-106",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t7",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q106: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 106)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-106",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 106)"
  },
  {
    "id": "stet-gen-107",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t8",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q107: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 107)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-107",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 107)"
  },
  {
    "id": "stet-gen-108",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t9",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q108: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 108)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-108",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 108)"
  },
  {
    "id": "stet-gen-109",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t10",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q109: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 109)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-109",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 109)"
  },
  {
    "id": "stet-gen-110",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t1",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q110: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 110)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-110",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 110)"
  },
  {
    "id": "stet-gen-111",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t2",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q111: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 111)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-111",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 111)"
  },
  {
    "id": "stet-gen-112",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t3",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q112: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 112)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-112",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 112)"
  },
  {
    "id": "stet-gen-113",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t4",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q113: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 113)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-113",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 113)"
  },
  {
    "id": "stet-gen-114",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t5",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q114: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 114)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-114",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 114)"
  },
  {
    "id": "stet-gen-115",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t6",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q115: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 115)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-115",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 115)"
  },
  {
    "id": "stet-gen-116",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t7",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q116: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 116)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-116",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 116)"
  },
  {
    "id": "stet-gen-117",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t8",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q117: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 117)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-117",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 117)"
  },
  {
    "id": "stet-gen-118",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t9",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q118: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 118)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-118",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 118)"
  },
  {
    "id": "stet-gen-119",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t10",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q119: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 119)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-119",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 119)"
  },
  {
    "id": "stet-gen-120",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t1",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q120: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 120)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-120",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 120)"
  },
  {
    "id": "stet-gen-121",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t2",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q121: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 121)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-121",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 121)"
  },
  {
    "id": "stet-gen-122",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t3",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q122: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 122)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-122",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 122)"
  },
  {
    "id": "stet-gen-123",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t4",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q123: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 123)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-123",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 123)"
  },
  {
    "id": "stet-gen-124",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t5",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q124: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 124)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-124",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 124)"
  },
  {
    "id": "stet-gen-125",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t6",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q125: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 125)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-125",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 125)"
  },
  {
    "id": "stet-gen-126",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t7",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q126: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 126)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-126",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 126)"
  },
  {
    "id": "stet-gen-127",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t8",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q127: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 127)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-127",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 127)"
  },
  {
    "id": "stet-gen-128",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t9",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q128: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 128)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-128",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 128)"
  },
  {
    "id": "stet-gen-129",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t10",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q129: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 129)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-129",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 129)"
  },
  {
    "id": "stet-gen-130",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t1",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q130: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 130)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-130",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 130)"
  },
  {
    "id": "stet-gen-131",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t2",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q131: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 131)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-131",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 131)"
  },
  {
    "id": "stet-gen-132",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t3",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q132: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 132)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-132",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 132)"
  },
  {
    "id": "stet-gen-133",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t4",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q133: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 133)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-133",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 133)"
  },
  {
    "id": "stet-gen-134",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t5",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q134: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 134)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-134",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 134)"
  },
  {
    "id": "stet-gen-135",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t6",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q135: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 135)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-135",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 135)"
  },
  {
    "id": "stet-gen-136",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t7",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q136: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 136)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-136",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 136)"
  },
  {
    "id": "stet-gen-137",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t8",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q137: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 137)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-137",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 137)"
  },
  {
    "id": "stet-gen-138",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t9",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q138: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 138)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-138",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 138)"
  },
  {
    "id": "stet-gen-139",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t10",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q139: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 139)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-139",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 139)"
  },
  {
    "id": "stet-gen-140",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t1",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q140: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 140)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-140",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 140)"
  },
  {
    "id": "stet-gen-141",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t2",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q141: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 141)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-141",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 141)"
  },
  {
    "id": "stet-gen-142",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t3",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q142: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 142)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-142",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 142)"
  },
  {
    "id": "stet-gen-143",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t4",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q143: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 143)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-143",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 143)"
  },
  {
    "id": "stet-gen-144",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t5",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q144: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 144)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-144",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 144)"
  },
  {
    "id": "stet-gen-145",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t6",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q145: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 145)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-145",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 145)"
  },
  {
    "id": "stet-gen-146",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t7",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q146: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 146)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-146",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 146)"
  },
  {
    "id": "stet-gen-147",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t8",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q147: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 147)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-147",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 147)"
  },
  {
    "id": "stet-gen-148",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t9",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q148: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 148)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-148",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 148)"
  },
  {
    "id": "stet-gen-149",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t10",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q149: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 149)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-149",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 149)"
  },
  {
    "id": "stet-gen-150",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t1",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q150: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 150)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-150",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 150)"
  },
  {
    "id": "stet-gen-151",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t2",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q151: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 151)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-151",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 151)"
  },
  {
    "id": "stet-gen-152",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-pedagogy",
    "subject": "Art of Teaching & Other Skills",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-pedagogy-c1",
    "chapter": "Art of Teaching & Classroom Pedagogy",
    "topicId": "stet-pedagogy-t3",
    "topic": "Art of Teaching & Classroom Pedagogy Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Art of Teaching Drill Q152: Microteaching is a teacher training technique characterized by which of the following essential components?",
    "options": [
      {
        "id": "A",
        "text": "Scaled-down teaching encounter in terms of class size (5-10 students), lesson duration (5-10 minutes), and single specific skill focus"
      },
      {
        "id": "B",
        "text": "Teaching large classrooms of 60+ students for full 45-minute periods"
      },
      {
        "id": "C",
        "text": "Conducting annual board written assessments"
      },
      {
        "id": "D",
        "text": "Administrative supervision without pedagogical feedback"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Microteaching (developed by Dwight Allen) is a scaled-down training environment (mini-lesson, small group, short duration, focused single teaching skill with immediate video/peer feedback).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 152)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-152",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 152)"
  },
  {
    "id": "stet-gen-153",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-sci",
    "subject": "Secondary Science",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-sci-c1",
    "chapter": "Secondary Physics & Chemistry",
    "topicId": "stet-sci-t4",
    "topic": "Secondary Physics & Chemistry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Secondary Science Drill Q153: Which of the following elements has the electronic configuration 2, 8, 7 and exhibits the highest electronegativity among the halogens?",
    "options": [
      {
        "id": "A",
        "text": "Fluorine (F)"
      },
      {
        "id": "B",
        "text": "Chlorine (Cl)"
      },
      {
        "id": "C",
        "text": "Bromine (Br)"
      },
      {
        "id": "D",
        "text": "Iodine (I)"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Chlorine has atomic number 17 with electronic configuration 2, 8, 7. (Fluorine is 2, 7; Bromine is 2, 8, 18, 7).",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 153)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-153",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 153)"
  },
  {
    "id": "stet-gen-154",
    "examId": "bihar-stet-p1",
    "subjectId": "stet-math",
    "subject": "Secondary Mathematics",
    "classLevel": "Classes IX–X",
    "chapterId": "stet-math-c1",
    "chapter": "Secondary Mathematics & Coordinate Geometry",
    "topicId": "stet-math-t5",
    "topic": "Secondary Mathematics & Coordinate Geometry Practice Section",
    "year": 2024,
    "questionText": "Bihar STET Mathematics Drill Q154: What is the distance between the points P(2, 3) and Q(10, 9) in the Cartesian coordinate plane?",
    "options": [
      {
        "id": "A",
        "text": "10 units"
      },
      {
        "id": "B",
        "text": "12 units"
      },
      {
        "id": "C",
        "text": "8 units"
      },
      {
        "id": "D",
        "text": "14 units"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Distance d = √[(10 - 2)² + (9 - 3)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 units.",
    "sourceReference": "BSEB STET Scheme of Examination (Question Bank Drill 154)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "stet-gen-154",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BSEB STET Scheme of Examination (Question Bank Drill 154)"
  },
  {
    "id": "bpsc-m-01",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Motion, Electricity & Circuits",
    "topicId": "bpsc-mid-sci-t1",
    "topic": "Electric Current, Heating Effect & Joule's Law",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "An electric heater having a heating coil of resistance 50 Ω draws a current of 4 A from a circuit for 2 minutes. The heat energy produced in the coil is:",
    "options": [
      {
        "id": "A",
        "text": "96,000 J"
      },
      {
        "id": "B",
        "text": "4,800 J"
      },
      {
        "id": "C",
        "text": "24,000 J"
      },
      {
        "id": "D",
        "text": "12,000 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "H = I²Rt = (4)² × 50 × (2 × 60) = 16 × 50 × 120 = 96,000 J.",
    "sourceReference": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 73)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "bpsc-m-01",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 73)"
  },
  {
    "id": "bpsc-m-02",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c2",
    "chapter": "Ecosystem & Human Physiology",
    "topicId": "bpsc-mid-sci-t2",
    "topic": "10% Energy Transfer Law & Trophic Levels",
    "year": 2023,
    "session": "TRE 1.0 (Aug 2023)",
    "questionText": "According to Lindeman's 10% ecological law, if producers in an ecosystem trap 10,000 J of solar energy into organic matter, how much energy is transferred to secondary consumers?",
    "options": [
      {
        "id": "A",
        "text": "100 J"
      },
      {
        "id": "B",
        "text": "1,000 J"
      },
      {
        "id": "C",
        "text": "10 J"
      },
      {
        "id": "D",
        "text": "1 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Producers: 10,000 J -> Herbivores: 1,000 J -> Secondary Consumers (Carnivores): 100 J.",
    "sourceReference": "BPSC TRE 1.0 Middle Stage Science, Q. 84",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-m-02",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 1.0 Middle Stage Science, Q. 84"
  },
  {
    "id": "bpsc-m-03",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c2",
    "chapter": "Ecosystem & Human Physiology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Excretory System & Nephron Function",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "In the mammalian kidney, the basic structural and functional filtration unit responsible for ultrafiltration and selective reabsorption is called the:",
    "options": [
      {
        "id": "A",
        "text": "Neuron"
      },
      {
        "id": "B",
        "text": "Nephron"
      },
      {
        "id": "C",
        "text": "Alveolus"
      },
      {
        "id": "D",
        "text": "Villus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "The nephron is the microscopic filtration unit of the kidney. Neurons are nerve cells, alveoli are lung units, villi are small intestine units.",
    "sourceReference": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 92)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-m-03",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 92)"
  },
  {
    "id": "bpsc-m-04",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Arithmetic & Work-Time Problems",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Time, Work and Combined Rates",
    "year": 2024,
    "session": "TRE 3.0 (March 2024)",
    "questionText": "A can complete a piece of work in 12 days, and B can complete the same work in 18 days. If they work together on the task, in how many days will the entire work be completed?",
    "options": [
      {
        "id": "A",
        "text": "7.2 days"
      },
      {
        "id": "B",
        "text": "6.0 days"
      },
      {
        "id": "C",
        "text": "8.5 days"
      },
      {
        "id": "D",
        "text": "15.0 days"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Rate A = 1/12, Rate B = 1/18. Combined = 5/36 per day. Total time = 36/5 = 7.2 days.",
    "sourceReference": "BPSC TRE 3.0 Middle Stage (Classes 6-8 Math, Q. 35)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-m-04",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 3.0 Middle Stage (Classes 6-8 Math, Q. 35)"
  },
  {
    "id": "bpsc-m-05",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Arithmetic & Work-Time Problems",
    "topicId": "bpsc-mid-math-t2",
    "topic": "Ratio, Proportions & Percentages",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that its expenditure on sugar remains unchanged?",
    "options": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "25%"
      },
      {
        "id": "C",
        "text": "16.67%"
      },
      {
        "id": "D",
        "text": "15%"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Consumption reduction = [R / (100 + R)] × 100% = [25 / 125] × 100% = 20%.",
    "sourceReference": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math, Q. 48)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-m-05",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math, Q. 48)"
  },
  {
    "id": "bpsc-m-06",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c2",
    "chapter": "Ecosystem & Human Physiology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Digestive System & Bile Function",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "Bile juice is secreted by which organ of the human digestive system, and where is it temporarily stored before being released into the duodenum?",
    "options": [
      {
        "id": "A",
        "text": "Secreted by Pancreas, stored in Stomach"
      },
      {
        "id": "B",
        "text": "Secreted by Liver, stored in Gallbladder"
      },
      {
        "id": "C",
        "text": "Secreted by Salivary glands, stored in Liver"
      },
      {
        "id": "D",
        "text": "Secreted by Gallbladder, stored in Liver"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Bile juice is synthesized by hepatocytes in the liver and stored/concentrated in the gallbladder until released during digestion.",
    "sourceReference": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 88)",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-m-06",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Middle Stage (Classes 6-8 Math & Science, Q. 88)"
  },
  {
    "id": "bpsc-mid-item-07",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-lang",
    "subject": "Language (Qualifying)",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-lang-c1",
    "chapter": "Language Qualifying",
    "topicId": "bpsc-mid-lang-t1",
    "topic": "Language Qualifying Standard",
    "year": 2024,
    "questionText": "Which of the following is the correct antonym of the word 'BENEVOLENT'?",
    "options": [
      {
        "id": "A",
        "text": "Malevolent"
      },
      {
        "id": "B",
        "text": "Generous"
      },
      {
        "id": "C",
        "text": "Sympathetic"
      },
      {
        "id": "D",
        "text": "Altruistic"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "'Benevolent' means kind and well-meaning. Its direct antonym is 'malevolent' (wishing evil to others).",
    "sourceReference": "BPSC TRE Official Question Booklet Syllabus Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-item-07",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Official Question Booklet Syllabus Standards"
  },
  {
    "id": "bpsc-mid-item-08",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "Indian National Movement & Bihar History",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "Indian National Movement & Bihar History Standard",
    "year": 2024,
    "questionText": "Who among the following was the prominent leader of the 1857 Revolt in Bihar who led the struggle against the British in Jagdishpur (Bhojpur)?",
    "options": [
      {
        "id": "A",
        "text": "Kunwar Singh"
      },
      {
        "id": "B",
        "text": "Nana Saheb"
      },
      {
        "id": "C",
        "text": "Maulvi Ahmadullah"
      },
      {
        "id": "D",
        "text": "Tantia Tope"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Veer Kunwar Singh of Jagdishpur was the legendary 80-year-old leader who organized the armed insurrection in Bihar during the 1857 revolt.",
    "sourceReference": "BPSC TRE Official Question Booklet Syllabus Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-item-08",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Official Question Booklet Syllabus Standards"
  },
  {
    "id": "bpsc-mid-item-09",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "Geography of Bihar",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "Geography of Bihar Standard",
    "year": 2024,
    "questionText": "Which major perennial river enters Bihar near Chausa and divides the Bihar plains into Northern and Southern halves?",
    "options": [
      {
        "id": "A",
        "text": "River Ganga"
      },
      {
        "id": "B",
        "text": "River Gandak"
      },
      {
        "id": "C",
        "text": "River Kosi"
      },
      {
        "id": "D",
        "text": "River Son"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The River Ganga flows from west to east through Bihar, dividing the state into the North Bihar Plain and the South Bihar Plain.",
    "sourceReference": "BPSC TRE Official Question Booklet Syllabus Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-item-09",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Official Question Booklet Syllabus Standards"
  },
  {
    "id": "bpsc-mid-item-10",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Arithmetic & Percentages",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Arithmetic & Percentages Standard",
    "year": 2024,
    "questionText": "A merchant marks his goods 30% above the cost price and allows a discount of 15% on the marked price. What is his net gain percentage?",
    "options": [
      {
        "id": "A",
        "text": "10.5%"
      },
      {
        "id": "B",
        "text": "15.0%"
      },
      {
        "id": "C",
        "text": "12.0%"
      },
      {
        "id": "D",
        "text": "14.5%"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Let CP = 100. MP = 130. Discount = 15% of 130 = 19.5. SP = 130 - 19.5 = 110.5. Net Gain = 10.5%.",
    "sourceReference": "BPSC TRE Official Question Booklet Syllabus Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-item-10",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Official Question Booklet Syllabus Standards"
  },
  {
    "id": "bpsc-mid-item-11",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Motion & Measurement",
    "topicId": "bpsc-mid-sci-t1",
    "topic": "Motion & Measurement Standard",
    "year": 2024,
    "questionText": "A car accelerates uniformly from 18 km/h to 72 km/h in 10 seconds. The acceleration of the car in m/s² is:",
    "options": [
      {
        "id": "A",
        "text": "1.5 m/s²"
      },
      {
        "id": "B",
        "text": "5.4 m/s²"
      },
      {
        "id": "C",
        "text": "2.0 m/s²"
      },
      {
        "id": "D",
        "text": "3.0 m/s²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "u = 18 km/h = 18 × (5/18) = 5 m/s. v = 72 km/h = 72 × (5/18) = 20 m/s. a = (v - u) / t = (20 - 5) / 10 = 15 / 10 = 1.5 m/s².",
    "sourceReference": "BPSC TRE Official Question Booklet Syllabus Standards",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-item-11",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Official Question Booklet Syllabus Standards"
  },
  {
    "id": "bpsc-mid-gen-012",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t3",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q12: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "565 cm²"
      },
      {
        "id": "B",
        "text": "590 cm²"
      },
      {
        "id": "C",
        "text": "545 cm²"
      },
      {
        "id": "D",
        "text": "1131 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 10 = 565 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-012",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-013",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t4",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q13: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-013",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-014",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t5",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q14: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-014",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-015",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t6",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q15: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "572 cm²"
      },
      {
        "id": "B",
        "text": "597 cm²"
      },
      {
        "id": "C",
        "text": "552 cm²"
      },
      {
        "id": "D",
        "text": "1144 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 13 = 572 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-015",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-016",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t7",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q16: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-016",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-017",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t8",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q17: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-017",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-018",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t9",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q18: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "754 cm²"
      },
      {
        "id": "B",
        "text": "779 cm²"
      },
      {
        "id": "C",
        "text": "734 cm²"
      },
      {
        "id": "D",
        "text": "1508 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 12 = 754 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-018",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-019",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t10",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q19: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-019",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-020",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q20: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-020",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-021",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t2",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q21: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "553 cm²"
      },
      {
        "id": "B",
        "text": "578 cm²"
      },
      {
        "id": "C",
        "text": "533 cm²"
      },
      {
        "id": "D",
        "text": "1106 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 11 = 553 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-021",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-022",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q22: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-022",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-023",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t4",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q23: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-023",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-024",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t5",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q24: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "691 cm²"
      },
      {
        "id": "B",
        "text": "716 cm²"
      },
      {
        "id": "C",
        "text": "671 cm²"
      },
      {
        "id": "D",
        "text": "1382 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 10 = 691 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-024",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-025",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t6",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q25: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-025",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-026",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t7",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q26: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-026",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-027",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t8",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q27: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "735 cm²"
      },
      {
        "id": "B",
        "text": "760 cm²"
      },
      {
        "id": "C",
        "text": "715 cm²"
      },
      {
        "id": "D",
        "text": "1470 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 13 = 735 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-027",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-028",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t9",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q28: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-028",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-029",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t10",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q29: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-029",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-030",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q30: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "528 cm²"
      },
      {
        "id": "B",
        "text": "553 cm²"
      },
      {
        "id": "C",
        "text": "508 cm²"
      },
      {
        "id": "D",
        "text": "1056 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 12 = 528 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-030",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-031",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t2",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q31: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-031",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-032",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t3",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q32: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-032",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-033",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t4",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q33: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "691 cm²"
      },
      {
        "id": "B",
        "text": "716 cm²"
      },
      {
        "id": "C",
        "text": "671 cm²"
      },
      {
        "id": "D",
        "text": "1382 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 11 = 691 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-033",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-034",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t5",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q34: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-034",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-035",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t6",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q35: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-035",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-036",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t7",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q36: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "502 cm²"
      },
      {
        "id": "B",
        "text": "527 cm²"
      },
      {
        "id": "C",
        "text": "482 cm²"
      },
      {
        "id": "D",
        "text": "1005 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 10 = 502 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-036",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-037",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t8",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q37: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-037",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-038",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t9",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q38: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-038",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-039",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t10",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q39: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "898 cm²"
      },
      {
        "id": "B",
        "text": "923 cm²"
      },
      {
        "id": "C",
        "text": "878 cm²"
      },
      {
        "id": "D",
        "text": "1797 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 13 = 898 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-039",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-040",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t1",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q40: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-040",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-041",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t2",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q41: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-041",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-042",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t3",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q42: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "678 cm²"
      },
      {
        "id": "B",
        "text": "703 cm²"
      },
      {
        "id": "C",
        "text": "658 cm²"
      },
      {
        "id": "D",
        "text": "1357 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 12 = 678 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-042",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-043",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t4",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q43: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-043",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-044",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t5",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q44: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-044",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-045",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t6",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q45: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "484 cm²"
      },
      {
        "id": "B",
        "text": "509 cm²"
      },
      {
        "id": "C",
        "text": "464 cm²"
      },
      {
        "id": "D",
        "text": "968 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 11 = 484 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-045",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-046",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t7",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q46: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-046",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-047",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t8",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q47: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-047",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-048",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t9",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q48: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "628 cm²"
      },
      {
        "id": "B",
        "text": "653 cm²"
      },
      {
        "id": "C",
        "text": "608 cm²"
      },
      {
        "id": "D",
        "text": "1257 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 10 = 628 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-048",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-049",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t10",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q49: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-049",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-050",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q50: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-050",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-051",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t2",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q51: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "653 cm²"
      },
      {
        "id": "B",
        "text": "678 cm²"
      },
      {
        "id": "C",
        "text": "633 cm²"
      },
      {
        "id": "D",
        "text": "1307 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 13 = 653 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-051",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-052",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q52: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-052",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-053",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t4",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q53: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-053",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-054",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t5",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q54: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "829 cm²"
      },
      {
        "id": "B",
        "text": "854 cm²"
      },
      {
        "id": "C",
        "text": "809 cm²"
      },
      {
        "id": "D",
        "text": "1659 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 12 = 829 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-054",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-055",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t6",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q55: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-055",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-056",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t7",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q56: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-056",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-057",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t8",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q57: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "622 cm²"
      },
      {
        "id": "B",
        "text": "647 cm²"
      },
      {
        "id": "C",
        "text": "602 cm²"
      },
      {
        "id": "D",
        "text": "1244 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 11 = 622 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-057",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-058",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t9",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q58: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-058",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-059",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t10",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q59: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-059",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-060",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q60: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "440 cm²"
      },
      {
        "id": "B",
        "text": "465 cm²"
      },
      {
        "id": "C",
        "text": "420 cm²"
      },
      {
        "id": "D",
        "text": "880 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 10 = 440 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-060",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-061",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t2",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q61: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-061",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-062",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t3",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q62: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-062",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-063",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t4",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q63: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "817 cm²"
      },
      {
        "id": "B",
        "text": "842 cm²"
      },
      {
        "id": "C",
        "text": "797 cm²"
      },
      {
        "id": "D",
        "text": "1634 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 13 = 817 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-063",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-064",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t5",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q64: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-064",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-065",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t6",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q65: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-065",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-066",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t7",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q66: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "603 cm²"
      },
      {
        "id": "B",
        "text": "628 cm²"
      },
      {
        "id": "C",
        "text": "583 cm²"
      },
      {
        "id": "D",
        "text": "1206 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 12 = 603 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-066",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-067",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t8",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q67: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-067",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-068",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t9",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q68: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-068",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-069",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t10",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q69: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "760 cm²"
      },
      {
        "id": "B",
        "text": "785 cm²"
      },
      {
        "id": "C",
        "text": "740 cm²"
      },
      {
        "id": "D",
        "text": "1521 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 11 = 760 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-069",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-070",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t1",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q70: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-070",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-071",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t2",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q71: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-071",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-072",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t3",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q72: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "565 cm²"
      },
      {
        "id": "B",
        "text": "590 cm²"
      },
      {
        "id": "C",
        "text": "545 cm²"
      },
      {
        "id": "D",
        "text": "1131 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 10 = 565 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-072",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-073",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t4",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q73: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-073",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-074",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t5",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q74: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-074",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-075",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t6",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q75: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "572 cm²"
      },
      {
        "id": "B",
        "text": "597 cm²"
      },
      {
        "id": "C",
        "text": "552 cm²"
      },
      {
        "id": "D",
        "text": "1144 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 13 = 572 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-075",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-076",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t7",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q76: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-076",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-077",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t8",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q77: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-077",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-078",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t9",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q78: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "754 cm²"
      },
      {
        "id": "B",
        "text": "779 cm²"
      },
      {
        "id": "C",
        "text": "734 cm²"
      },
      {
        "id": "D",
        "text": "1508 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 12 = 754 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-078",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-079",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t10",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q79: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-079",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-080",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q80: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-080",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-081",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t2",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q81: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "553 cm²"
      },
      {
        "id": "B",
        "text": "578 cm²"
      },
      {
        "id": "C",
        "text": "533 cm²"
      },
      {
        "id": "D",
        "text": "1106 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 11 = 553 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-081",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-082",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q82: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-082",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-083",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t4",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q83: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-083",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-084",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t5",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q84: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "691 cm²"
      },
      {
        "id": "B",
        "text": "716 cm²"
      },
      {
        "id": "C",
        "text": "671 cm²"
      },
      {
        "id": "D",
        "text": "1382 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 10 = 691 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-084",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-085",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t6",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q85: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-085",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-086",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t7",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q86: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-086",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-087",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t8",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q87: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "735 cm²"
      },
      {
        "id": "B",
        "text": "760 cm²"
      },
      {
        "id": "C",
        "text": "715 cm²"
      },
      {
        "id": "D",
        "text": "1470 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 13 = 735 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-087",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-088",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t9",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q88: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-088",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-089",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t10",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q89: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-089",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-090",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q90: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "528 cm²"
      },
      {
        "id": "B",
        "text": "553 cm²"
      },
      {
        "id": "C",
        "text": "508 cm²"
      },
      {
        "id": "D",
        "text": "1056 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 12 = 528 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-090",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-091",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t2",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q91: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-091",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-092",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t3",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q92: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-092",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-093",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t4",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q93: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "691 cm²"
      },
      {
        "id": "B",
        "text": "716 cm²"
      },
      {
        "id": "C",
        "text": "671 cm²"
      },
      {
        "id": "D",
        "text": "1382 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 11 = 691 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-093",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-094",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t5",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q94: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-094",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-095",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t6",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q95: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-095",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-096",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t7",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q96: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "502 cm²"
      },
      {
        "id": "B",
        "text": "527 cm²"
      },
      {
        "id": "C",
        "text": "482 cm²"
      },
      {
        "id": "D",
        "text": "1005 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 10 = 502 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-096",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-097",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t8",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q97: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-097",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-098",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t9",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q98: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-098",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-099",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t10",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q99: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "898 cm²"
      },
      {
        "id": "B",
        "text": "923 cm²"
      },
      {
        "id": "C",
        "text": "878 cm²"
      },
      {
        "id": "D",
        "text": "1797 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 13 = 898 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-099",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-100",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t1",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q100: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-100",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-101",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t2",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q101: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-101",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-102",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t3",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q102: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "678 cm²"
      },
      {
        "id": "B",
        "text": "703 cm²"
      },
      {
        "id": "C",
        "text": "658 cm²"
      },
      {
        "id": "D",
        "text": "1357 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 12 = 678 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-102",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-103",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t4",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q103: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-103",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-104",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t5",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q104: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-104",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-105",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t6",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q105: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "484 cm²"
      },
      {
        "id": "B",
        "text": "509 cm²"
      },
      {
        "id": "C",
        "text": "464 cm²"
      },
      {
        "id": "D",
        "text": "968 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 11 = 484 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-105",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-106",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t7",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q106: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-106",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-107",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t8",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q107: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-107",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-108",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t9",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q108: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "628 cm²"
      },
      {
        "id": "B",
        "text": "653 cm²"
      },
      {
        "id": "C",
        "text": "608 cm²"
      },
      {
        "id": "D",
        "text": "1257 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 10 = 628 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-108",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-109",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t10",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q109: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-109",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-110",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q110: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-110",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-111",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t2",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q111: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "653 cm²"
      },
      {
        "id": "B",
        "text": "678 cm²"
      },
      {
        "id": "C",
        "text": "633 cm²"
      },
      {
        "id": "D",
        "text": "1307 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 13 = 653 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-111",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-112",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q112: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-112",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-113",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t4",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q113: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-113",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-114",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t5",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q114: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "829 cm²"
      },
      {
        "id": "B",
        "text": "854 cm²"
      },
      {
        "id": "C",
        "text": "809 cm²"
      },
      {
        "id": "D",
        "text": "1659 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 12 = 829 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-114",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-115",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t6",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q115: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-115",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-116",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t7",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q116: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-116",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-117",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t8",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q117: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "622 cm²"
      },
      {
        "id": "B",
        "text": "647 cm²"
      },
      {
        "id": "C",
        "text": "602 cm²"
      },
      {
        "id": "D",
        "text": "1244 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 11 = 622 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-117",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-118",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t9",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q118: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-118",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-119",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t10",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q119: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-119",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-120",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q120: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "440 cm²"
      },
      {
        "id": "B",
        "text": "465 cm²"
      },
      {
        "id": "C",
        "text": "420 cm²"
      },
      {
        "id": "D",
        "text": "880 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 10 = 440 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-120",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-121",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t2",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q121: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-121",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-122",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t3",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q122: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-122",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-123",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t4",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q123: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "817 cm²"
      },
      {
        "id": "B",
        "text": "842 cm²"
      },
      {
        "id": "C",
        "text": "797 cm²"
      },
      {
        "id": "D",
        "text": "1634 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 13 = 817 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-123",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-124",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t5",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q124: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-124",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-125",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t6",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q125: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-125",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-126",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t7",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q126: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "603 cm²"
      },
      {
        "id": "B",
        "text": "628 cm²"
      },
      {
        "id": "C",
        "text": "583 cm²"
      },
      {
        "id": "D",
        "text": "1206 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 12 = 603 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-126",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-127",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t8",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q127: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-127",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-128",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t9",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q128: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-128",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-129",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t10",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q129: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "760 cm²"
      },
      {
        "id": "B",
        "text": "785 cm²"
      },
      {
        "id": "C",
        "text": "740 cm²"
      },
      {
        "id": "D",
        "text": "1521 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 11 = 760 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-129",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-130",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t1",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q130: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-130",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-131",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t2",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q131: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-131",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-132",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t3",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q132: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "565 cm²"
      },
      {
        "id": "B",
        "text": "590 cm²"
      },
      {
        "id": "C",
        "text": "545 cm²"
      },
      {
        "id": "D",
        "text": "1131 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 10 = 565 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-132",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-133",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t4",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q133: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-133",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-134",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t5",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q134: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-134",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-135",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t6",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q135: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "572 cm²"
      },
      {
        "id": "B",
        "text": "597 cm²"
      },
      {
        "id": "C",
        "text": "552 cm²"
      },
      {
        "id": "D",
        "text": "1144 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 13 = 572 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-135",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-136",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t7",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q136: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-136",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-137",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t8",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q137: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-137",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-138",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t9",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q138: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "754 cm²"
      },
      {
        "id": "B",
        "text": "779 cm²"
      },
      {
        "id": "C",
        "text": "734 cm²"
      },
      {
        "id": "D",
        "text": "1508 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 12 = 754 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-138",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-139",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t10",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q139: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-139",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-140",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t1",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q140: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-140",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-141",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t2",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q141: Find the curved surface area of a right circular cylinder having base radius 8 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "553 cm²"
      },
      {
        "id": "B",
        "text": "578 cm²"
      },
      {
        "id": "C",
        "text": "533 cm²"
      },
      {
        "id": "D",
        "text": "1106 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 8 × 11 = 553 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-141",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-142",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t3",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q142: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-142",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-143",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t4",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q143: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-143",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-144",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t5",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q144: Find the curved surface area of a right circular cylinder having base radius 11 cm and height 10 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "691 cm²"
      },
      {
        "id": "B",
        "text": "716 cm²"
      },
      {
        "id": "C",
        "text": "671 cm²"
      },
      {
        "id": "D",
        "text": "1382 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 11 × 10 = 691 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-144",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-145",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t6",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q145: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-145",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-146",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t7",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q146: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-146",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-147",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t8",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q147: Find the curved surface area of a right circular cylinder having base radius 9 cm and height 13 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "735 cm²"
      },
      {
        "id": "B",
        "text": "760 cm²"
      },
      {
        "id": "C",
        "text": "715 cm²"
      },
      {
        "id": "D",
        "text": "1470 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 9 × 13 = 735 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-147",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-148",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t9",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q148: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-148",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-149",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t10",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q149: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-149",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-150",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t1",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q150: Find the curved surface area of a right circular cylinder having base radius 7 cm and height 12 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "528 cm²"
      },
      {
        "id": "B",
        "text": "553 cm²"
      },
      {
        "id": "C",
        "text": "508 cm²"
      },
      {
        "id": "D",
        "text": "1056 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 7 × 12 = 528 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-150",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-151",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t2",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q151: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-151",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-152",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-gs",
    "subject": "General Studies & Language",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-gs-c1",
    "chapter": "General Studies & Mental Ability",
    "topicId": "bpsc-mid-gs-t3",
    "topic": "General Studies & Mental Ability Core Drill",
    "year": 2024,
    "questionText": "BPSC General Studies Q152: Under the Indian Constitution, the Directive Principles of State Policy (DPSP) in Part IV were primarily inspired by the constitution of which country?",
    "options": [
      {
        "id": "A",
        "text": "Ireland"
      },
      {
        "id": "B",
        "text": "United States of America"
      },
      {
        "id": "C",
        "text": "United Kingdom"
      },
      {
        "id": "D",
        "text": "Canada"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "The Directive Principles of State Policy (Articles 36 to 51) in the Constitution of India were borrowed from the Irish Constitution.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-152",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-153",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-math",
    "subject": "Middle School Mathematics",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-math-c1",
    "chapter": "Geometry & Mensuration",
    "topicId": "bpsc-mid-math-t4",
    "topic": "Geometry & Mensuration Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Math Q153: Find the curved surface area of a right circular cylinder having base radius 10 cm and height 11 cm (using π = 22/7).",
    "options": [
      {
        "id": "A",
        "text": "691 cm²"
      },
      {
        "id": "B",
        "text": "716 cm²"
      },
      {
        "id": "C",
        "text": "671 cm²"
      },
      {
        "id": "D",
        "text": "1382 cm²"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Curved surface area of cylinder = 2πrh = 2 × (22/7) × 10 × 11 = 691 cm².",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-153",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-mid-gen-154",
    "examId": "bpsc-tre-middle",
    "subjectId": "bpsc-mid-sci",
    "subject": "Middle School Science",
    "classLevel": "Classes VI–VIII",
    "chapterId": "bpsc-mid-sci-c1",
    "chapter": "Physics, Chemistry & Biology",
    "topicId": "bpsc-mid-sci-t5",
    "topic": "Physics, Chemistry & Biology Core Drill",
    "year": 2024,
    "questionText": "BPSC Middle Science Q154: When a drop of dilute hydrochloric acid (HCl) is added to sodium bicarbonate (NaHCO₃) in a test tube, the gas evolved with brisk effervescence is:",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide (CO₂) which turns lime water milky"
      },
      {
        "id": "B",
        "text": "Hydrogen (H₂) which burns with a pop sound"
      },
      {
        "id": "C",
        "text": "Oxygen (O₂) which rekindles a glowing splint"
      },
      {
        "id": "D",
        "text": "Nitrogen dioxide (NO₂) pungent brown gas"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "NaHCO₃ + HCl -> NaCl + H₂O + CO₂↑. Carbon dioxide gas produces brisk effervescence and precipitates calcium carbonate in lime water, turning it milky.",
    "sourceReference": "BPSC TRE Scheme of Examination Standards (Classes 6–8)",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-mid-gen-154",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Scheme of Examination Standards (Classes 6–8)"
  },
  {
    "id": "bpsc-sec-01",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Light, Reflection & Optical Power",
    "topicId": "bpsc-sec-phy-t1",
    "topic": "Lens Formula, Power & Refractive Index",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "A person cannot clearly see objects closer than 75 cm. What is the power of the corrective lens required to restore normal near vision (least distance of distinct vision D = 25 cm)?",
    "options": [
      {
        "id": "A",
        "text": "+2.67 D"
      },
      {
        "id": "B",
        "text": "-2.67 D"
      },
      {
        "id": "C",
        "text": "+1.33 D"
      },
      {
        "id": "D",
        "text": "+4.00 D"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "u = -25 cm = -0.25 m, v = -75 cm = -0.75 m. 1/f = 1/v - 1/u = 1/(-0.75) - 1/(-0.25) = -1.33 + 4.00 = +2.67 m⁻¹ => Power P = +2.67 D.",
    "sourceReference": "BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 82)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-01",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 82)"
  },
  {
    "id": "bpsc-sec-02",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Carbon & Its Organic Compounds",
    "topicId": "bpsc-sec-chem-t1",
    "topic": "Functional Groups, Isomerism & Nomenclature",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "What is the total number of structural isomers possible for the saturated alkane pentane (C₅H₁₂)?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Pentane (C₅H₁₂) has 3 structural chain isomers: n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane).",
    "sourceReference": "BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 104)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-02",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 104)"
  },
  {
    "id": "bpsc-sec-03",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Heredity, Genetics & Evolution",
    "topicId": "bpsc-sec-bio-t1",
    "topic": "Mendelian Dihybrid Cross & Phenotypic Ratios",
    "year": 2023,
    "session": "TRE 1.0 (Aug 2023)",
    "questionText": "In a classical Mendelian dihybrid cross involving pea plants heterozygous for seed shape and seed color (RrYy × RrYy), what is the phenotypic ratio obtained in the F2 generation?",
    "options": [
      {
        "id": "A",
        "text": "9:3:3:1"
      },
      {
        "id": "B",
        "text": "1:2:1"
      },
      {
        "id": "C",
        "text": "3:1"
      },
      {
        "id": "D",
        "text": "9:7"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Independent assortment of unlinked alleles yields an F2 phenotypic ratio of 9:3:3:1.",
    "sourceReference": "BPSC TRE 1.0 Secondary Science, Q. 115",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-sec-03",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 1.0 Secondary Science, Q. 115"
  },
  {
    "id": "bpsc-sec-04",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c2",
    "chapter": "Electricity, Circuits & Magnetic Effects",
    "topicId": "bpsc-sec-phy-t2",
    "topic": "Electromagnetic Induction & Faraday's Law",
    "year": 2024,
    "session": "TRE 3.0 (March 2024)",
    "questionText": "According to Faraday's laws of electromagnetic induction, the magnitude of induced electromotive force (EMF) in a closed circuit is directly proportional to:",
    "options": [
      {
        "id": "A",
        "text": "The rate of change of magnetic flux through the circuit"
      },
      {
        "id": "B",
        "text": "The electric potential across the battery terminals"
      },
      {
        "id": "C",
        "text": "The total electrical resistance of the loop"
      },
      {
        "id": "D",
        "text": "The electrostatic charge stored on the conductor surface"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Faraday's law states that induced EMF e = -dΦ/dt, proportional to the time rate of change of magnetic flux.",
    "sourceReference": "BPSC TRE 3.0 Secondary Science, Q. 79",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-sec-04",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 3.0 Secondary Science, Q. 79"
  },
  {
    "id": "bpsc-sec-05",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c2",
    "chapter": "Acids, Bases, Salts & Chemical Reactions",
    "topicId": "bpsc-sec-chem-t2",
    "topic": "Plaster of Paris, Gypsum & Salts",
    "year": 2024,
    "session": "TRE 3.0 (March 2024)",
    "questionText": "What is the correct chemical formula of Plaster of Paris (POP), produced by heating Gypsum at 373 K?",
    "options": [
      {
        "id": "A",
        "text": "CaSO₄·2H₂O"
      },
      {
        "id": "B",
        "text": "CaSO₄·½H₂O"
      },
      {
        "id": "C",
        "text": "CaSO₄·H₂O"
      },
      {
        "id": "D",
        "text": "Ca(OH)₂"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "B",
    "explanation": "Plaster of Paris is calcium sulphate hemihydrate, CaSO₄·½H₂O (or 2CaSO₄·H₂O). Gypsum is CaSO₄·2H₂O.",
    "sourceReference": "BPSC TRE 3.0 Secondary Science, Q. 93",
    "isOfficialPYQ": true,
    "difficulty": "Easy",
    "questionId": "bpsc-sec-05",
    "correctAnswer": "B",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 3.0 Secondary Science, Q. 93"
  },
  {
    "id": "bpsc-sec-06",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c2",
    "chapter": "Electricity, Circuits & Magnetic Effects",
    "topicId": "bpsc-sec-phy-t3",
    "topic": "Ohm's Law, Resistance in Series/Parallel & Heating Effect",
    "year": 2023,
    "session": "TRE 2.0 (Dec 2023)",
    "questionText": "Two resistors of resistance 6 Ω and 12 Ω are connected in parallel across a 12 V battery. What is the equivalent resistance of the combination and the total current supplied by the battery?",
    "options": [
      {
        "id": "A",
        "text": "Equivalent Resistance = 4 Ω; Total Current = 3 A"
      },
      {
        "id": "B",
        "text": "Equivalent Resistance = 18 Ω; Total Current = 0.67 A"
      },
      {
        "id": "C",
        "text": "Equivalent Resistance = 4 Ω; Total Current = 48 A"
      },
      {
        "id": "D",
        "text": "Equivalent Resistance = 2 Ω; Total Current = 6 A"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "1/R_eq = 1/6 + 1/12 = 3/12 = 1/4 => R_eq = 4 Ω. I = V / R_eq = 12 / 4 = 3 A.",
    "sourceReference": "BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 71)",
    "isOfficialPYQ": true,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-06",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "pyq",
    "verificationStatus": "Verified Official PYQ",
    "sourceTitle": "BPSC TRE 2.0 Secondary Science (Class 9-10, Q. 71)"
  },
  {
    "id": "bpsc-sec-gen-007",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t8",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q7: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-007",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-008",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t9",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q8: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-008",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-009",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t10",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q9: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-009",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-010",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t1",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q10: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-010",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-011",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t2",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q11: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-011",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-012",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t3",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q12: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-012",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-013",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t4",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q13: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-013",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-014",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t5",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q14: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-014",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-015",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t6",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q15: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-015",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-016",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t7",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q16: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-016",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-017",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t8",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q17: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-017",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-018",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t9",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q18: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-018",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-019",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t10",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q19: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-019",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-020",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t1",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q20: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-020",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-021",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t2",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q21: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-021",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-022",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t3",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q22: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-022",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-023",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t4",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q23: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-023",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-024",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t5",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q24: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-024",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-025",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t6",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q25: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-025",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-026",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t7",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q26: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-026",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-027",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t8",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q27: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-027",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-028",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t9",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q28: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-028",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-029",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t10",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q29: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-029",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-030",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t1",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q30: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-030",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-031",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t2",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q31: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-031",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-032",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t3",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q32: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-032",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-033",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t4",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q33: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-033",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-034",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t5",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q34: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-034",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-035",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t6",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q35: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-035",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-036",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t7",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q36: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-036",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-037",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t8",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q37: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-037",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-038",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t9",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q38: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-038",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-039",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t10",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q39: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-039",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-040",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t1",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q40: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-040",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-041",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t2",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q41: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-041",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-042",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t3",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q42: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-042",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-043",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t4",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q43: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-043",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-044",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t5",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q44: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-044",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-045",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t6",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q45: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-045",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-046",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t7",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q46: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-046",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-047",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t8",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q47: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-047",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-048",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t9",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q48: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-048",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-049",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t10",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q49: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-049",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-050",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t1",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q50: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-050",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-051",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t2",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q51: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-051",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-052",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t3",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q52: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-052",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-053",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t4",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q53: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-053",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-054",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t5",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q54: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-054",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-055",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t6",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q55: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-055",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-056",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t7",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q56: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-056",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-057",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t8",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q57: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-057",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-058",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t9",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q58: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-058",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-059",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t10",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q59: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-059",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-060",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t1",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q60: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-060",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-061",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t2",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q61: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-061",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-062",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t3",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q62: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-062",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-063",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t4",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q63: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-063",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-064",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t5",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q64: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-064",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-065",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t6",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q65: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-065",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-066",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t7",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q66: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-066",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-067",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t8",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q67: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-067",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-068",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t9",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q68: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-068",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-069",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t10",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q69: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-069",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-070",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t1",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q70: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-070",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-071",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t2",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q71: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-071",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-072",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t3",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q72: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-072",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-073",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t4",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q73: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-073",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-074",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t5",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q74: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-074",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-075",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t6",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q75: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-075",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-076",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t7",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q76: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-076",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-077",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t8",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q77: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-077",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-078",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t9",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q78: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-078",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-079",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t10",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q79: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-079",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-080",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t1",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q80: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-080",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-081",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t2",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q81: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-081",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-082",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t3",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q82: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-082",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-083",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t4",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q83: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-083",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-084",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t5",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q84: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-084",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-085",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t6",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q85: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-085",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-086",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t7",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q86: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-086",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-087",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t8",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q87: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-087",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-088",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t9",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q88: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-088",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-089",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t10",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q89: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-089",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-090",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t1",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q90: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-090",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-091",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t2",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q91: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-091",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-092",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t3",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q92: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-092",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-093",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t4",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q93: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-093",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-094",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t5",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q94: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-094",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-095",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t6",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q95: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-095",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-096",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t7",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q96: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-096",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-097",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t8",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q97: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-097",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-098",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t9",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q98: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-098",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-099",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t10",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q99: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-099",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-100",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t1",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q100: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-100",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-101",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t2",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q101: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-101",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-102",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t3",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q102: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-102",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-103",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t4",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q103: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-103",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-104",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t5",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q104: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-104",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-105",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t6",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q105: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-105",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-106",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t7",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q106: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-106",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-107",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t8",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q107: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-107",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-108",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t9",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q108: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-108",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-109",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t10",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q109: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-109",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-110",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t1",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q110: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-110",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-111",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t2",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q111: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-111",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-112",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t3",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q112: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-112",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-113",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t4",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q113: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-113",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-114",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t5",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q114: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-114",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-115",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t6",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q115: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-115",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-116",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t7",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q116: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-116",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-117",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t8",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q117: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-117",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-118",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t9",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q118: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-118",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-119",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t10",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q119: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-119",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-120",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t1",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q120: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-120",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-121",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t2",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q121: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-121",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-122",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t3",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q122: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-122",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-123",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t4",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q123: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-123",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-124",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t5",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q124: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-124",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-125",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t6",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q125: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-125",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-126",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t7",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q126: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-126",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-127",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t8",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q127: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-127",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-128",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t9",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q128: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-128",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-129",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t10",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q129: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-129",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-130",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t1",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q130: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-130",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-131",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t2",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q131: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-131",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-132",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t3",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q132: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-132",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-133",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t4",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q133: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-133",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-134",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t5",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q134: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-134",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-135",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t6",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q135: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-135",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-136",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t7",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q136: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-136",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-137",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t8",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q137: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-137",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-138",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t9",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q138: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-138",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-139",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t10",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q139: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-139",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-140",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t1",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q140: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-140",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-141",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t2",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q141: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-141",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-142",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t3",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q142: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-142",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-143",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t4",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q143: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-143",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-144",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t5",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q144: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-144",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-145",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t6",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q145: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-145",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-146",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t7",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q146: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-146",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-147",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t8",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q147: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-147",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-148",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t9",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q148: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-148",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-149",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t10",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q149: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-149",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-150",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t1",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q150: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-150",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-151",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t2",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q151: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-151",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-152",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-bio",
    "subject": "Secondary Biology",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-bio-c1",
    "chapter": "Genetics, Cytology & Human Physiology",
    "topicId": "bpsc-sec-bio-t3",
    "topic": "Genetics, Cytology & Human Physiology Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Biology Q152: In aerobic cellular respiration in human cells, the complete oxidation of one glucose molecule into pyruvic acid (Glycolysis) takes place in the:",
    "options": [
      {
        "id": "A",
        "text": "Cytoplasm / Cytosol"
      },
      {
        "id": "B",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "C",
        "text": "Inner mitochondrial cristae"
      },
      {
        "id": "D",
        "text": "Nucleolus"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Glycolysis (EMP pathway) occurs in the cytoplasm and does not require oxygen. The Krebs cycle occurs in the mitochondrial matrix.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-152",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-153",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-phy",
    "subject": "Secondary Physics",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-phy-c1",
    "chapter": "Mechanics, Optics & Thermodynamics",
    "topicId": "bpsc-sec-phy-t4",
    "topic": "Mechanics, Optics & Thermodynamics Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Physics Q153: A body of mass 5 kg is dropped from a height of 20 m under gravity (taking g = 10 m/s²). What is its kinetic energy just before striking the ground?",
    "options": [
      {
        "id": "A",
        "text": "1000 J"
      },
      {
        "id": "B",
        "text": "500 J"
      },
      {
        "id": "C",
        "text": "2000 J"
      },
      {
        "id": "D",
        "text": "1100 J"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "By conservation of mechanical energy, KE gained = PE lost = mgh = 5 × 10 × 20 = 1000 J.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-153",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  },
  {
    "id": "bpsc-sec-gen-154",
    "examId": "bpsc-tre-secondary",
    "subjectId": "bpsc-sec-chem",
    "subject": "Secondary Chemistry",
    "classLevel": "Classes IX–X",
    "chapterId": "bpsc-sec-chem-c1",
    "chapter": "Chemical Bonding, Reactions & Periodic Trends",
    "topicId": "bpsc-sec-chem-t5",
    "topic": "Chemical Bonding, Reactions & Periodic Trends Secondary Drill",
    "year": 2024,
    "questionText": "BPSC Secondary Chemistry Q154: Which of the following metals reacts vigorously with cold water to produce a metal hydroxide and hydrogen gas with enough heat to ignite the hydrogen?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (K) and Sodium (Na)"
      },
      {
        "id": "B",
        "text": "Iron (Fe)"
      },
      {
        "id": "C",
        "text": "Copper (Cu)"
      },
      {
        "id": "D",
        "text": "Lead (Pb)"
      },
      {
        "id": "E",
        "text": "None of the above / More than one of the above"
      }
    ],
    "correctAnswerId": "A",
    "explanation": "Alkali metals Sodium and Potassium react violently and exothermically with cold water, forming basic hydroxides and hydrogen gas that ignites spontaneously.",
    "sourceReference": "BPSC TRE Secondary Science Scheme of Examination",
    "isOfficialPYQ": false,
    "difficulty": "Moderate",
    "questionId": "bpsc-sec-gen-154",
    "correctAnswer": "A",
    "questionType": "mcq",
    "language": "en",
    "contentType": "practice",
    "verificationStatus": "Curated Practice Drill",
    "sourceTitle": "BPSC TRE Secondary Science Scheme of Examination"
  }
];

export function getQuestionsByExam(examId: string): Question[] {
  return INITIAL_QUESTIONS.filter(q => q.examId === examId);
}

export function getQuestionById(id: string): Question | undefined {
  return INITIAL_QUESTIONS.find(q => q.id === id);
}
