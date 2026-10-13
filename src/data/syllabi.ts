import { Subject, Topic } from '@/types';

export const SUBJECTS: Subject[] = [
  {
    "id": "ctet-math",
    "examId": "ctet-p2",
    "name": "Mathematics & Pedagogy",
    "code": "MATH-6-8",
    "iconName": "Calculator",
    "description": "CBSE CTET Paper 2 syllabus covering 30 questions (20 content + 10 pedagogy) from NCERT Classes 6 to 8.",
    "chapters": [
      {
        "id": "ctet-math-c1",
        "subjectId": "ctet-math",
        "examId": "ctet-p2",
        "title": "Number System, HCF, LCM & Commercial Arithmetic",
        "order": 1,
        "topics": [
          {
            "id": "ctet-math-t1",
            "chapterId": "ctet-math-c1",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Prime Factorization, HCF and LCM",
            "order": 1,
            "notes": "The Fundamental Theorem of Arithmetic guarantees that every composite number can be uniquely expressed as a product of prime powers. When finding the Highest Common Factor (HCF) of numbers in prime exponent form, multiply the prime factors with their lowest exponents. For Least Common Multiple (LCM), take the highest exponent of every prime factor present.\n\nFor any two numbers a and b, the relationship HCF(a, b) * LCM(a, b) = a * b is an essential identity. For fractions, HCF = HCF of numerators / LCM of denominators, and LCM = LCM of numerators / HCF of denominators.",
            "concepts": [
              "Fundamental Theorem of Arithmetic: Every composite integer factors uniquely into primes.",
              "HCF is the product of common prime factors with lowest powers.",
              "LCM is the product of all prime factors with greatest powers.",
              "For two positive integers: HCF(a, b) × LCM(a, b) = a × b.",
              "HCF of fractions = HCF(Numerators) / LCM(Denominators); LCM = LCM(Numerators) / HCF(Denominators)."
            ],
            "formulas": [
              "HCF(a, b) × LCM(a, b) = a × b",
              "HCF(Fractions) = HCF(Numerators) / LCM(Denominators)",
              "LCM(Fractions) = LCM(Numerators) / HCF(Denominators)"
            ],
            "solvedExamples": [
              {
                "problem": "Find the HCF of 2³ × 3² × 5³ and 2² × 3⁴ × 5.",
                "solution": "Common primes are 2, 3, and 5. Minimum exponent for 2 is 2, for 3 is 2, for 5 is 1.\nHCF = 2² × 3² × 5¹ = 4 × 9 × 5 = 180."
              },
              {
                "problem": "The HCF and LCM of two numbers are 12 and 240 respectively. If one number is 48, find the other number.",
                "solution": "Using HCF × LCM = a × b:\n12 × 240 = 48 × b => b = 2880 / 48 = 60."
              }
            ],
            "keyTakeaways": [
              "HCF takes lowest powers of common primes; LCM takes highest powers of all primes.",
              "Product rule HCF × LCM = a × b holds strictly for two numbers.",
              "Co-prime numbers always have HCF = 1 and LCM = product of the numbers."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 6 Chapter 3 & Class 10 Chapter 1",
            "pyqIds": [
              "ctet-q-0001",
              "ctet-q-0125",
              "ctet-q-0126",
              "ctet-q-0127",
              "ctet-q-0128",
              "ctet-q-0129",
              "ctet-q-0130",
              "ctet-q-0131"
            ]
          },
          {
            "id": "ctet-math-t2",
            "chapterId": "ctet-math-c1",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Fractions, Decimals & Rational Numbers",
            "order": 2,
            "notes": "A rational number is any number that can be expressed in the form p/q, where p and q are integers and q ≠ 0. The decimal expansion of a rational number p/q in lowest terms terminates if and only if the prime factorization of q contains only 2 and/or 5 (q = 2^m * 5^n). Otherwise, it is non-terminating recurring.\n\nBetween any two distinct rational numbers, there exist infinitely many rational numbers (density property). Reciprocal of a/b is b/a (where a, b ≠ 0).",
            "concepts": [
              "Rational numbers satisfy closure under addition, subtraction, and multiplication.",
              "Terminating decimal condition: Reduced denominator must be strictly 2^m × 5^n.",
              "Density Property: Infinitely many rational numbers lie between any two rationals.",
              "Converting 0.x̄ to rational: x / 9; 0.xȳ: (xy - x) / 90."
            ],
            "formulas": [
              "Rational number: p/q (q ≠ 0, gcd(p, q) = 1)",
              "Midpoint rational: (a + b) / 2 lies between a and b",
              "Converting recurring decimal: 0.d̄ = d / 9; 0.ab̄ = (ab - a) / 90"
            ],
            "solvedExamples": [
              {
                "problem": "Which of 7/75 and 13/80 has a terminating decimal expansion?",
                "solution": "75 = 3 × 5² (contains prime factor 3, hence non-terminating repeating).\n80 = 2⁴ × 5¹ (contains only 2 and 5).\nTherefore, 13/80 has a terminating decimal expansion."
              }
            ],
            "keyTakeaways": [
              "Only prime factors 2 and 5 in the reduced denominator give terminating decimals.",
              "Division by zero is undefined.",
              "Sum of a rational and an irrational number is always irrational."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 2 & Class 8 Chapter 1",
            "pyqIds": [
              "ctet-q-0004",
              "ctet-q-0181",
              "ctet-q-0182",
              "ctet-q-0183",
              "ctet-q-0184",
              "ctet-q-0185",
              "ctet-q-0186",
              "ctet-q-0187"
            ]
          },
          {
            "id": "ctet-math-t3",
            "chapterId": "ctet-math-c1",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Exponents, Powers & Scientific Notation",
            "order": 3,
            "notes": "Laws of exponents: a^m * a^n = a^(m+n), a^m / a^n = a^(m-n), and (a^m)^n = a^(mn). Any non-zero base with exponent 0 equals 1 (a^0 = 1). A negative exponent indicates reciprocal: a^(-n) = 1 / a^n.\n\nIn standard scientific notation, numbers are written as m * 10^k where 1 <= m < 10 and k is an integer.",
            "concepts": [
              "Product rule: a^m × a^n = a^(m+n); Quotient rule: a^m / a^n = a^(m-n).",
              "Power of a power: (a^m)^n = a^(mn).",
              "Zero exponent: a^0 = 1 (a ≠ 0); Negative exponent: a^(-n) = 1 / a^n.",
              "Scientific notation: M × 10^n where 1.0 ≤ M < 10."
            ],
            "formulas": [
              "a^m × a^n = a^(m+n)",
              "a^m / a^n = a^(m-n)",
              "(a^m)^n = a^(mn)",
              "a^(-n) = 1 / a^n, a^0 = 1"
            ],
            "solvedExamples": [
              {
                "problem": "Find x if 2^(x-1) + 2^(x+1) = 320.",
                "solution": "2^x(2^(-1) + 2¹) = 320 => 2^x(1/2 + 2) = 320\n2^x(5/2) = 320 => 2^x = (320 × 2) / 5 = 128 = 2⁷ => x = 7."
              }
            ],
            "keyTakeaways": [
              "Bases must be identical to combine exponents via addition/subtraction.",
              "(-1)^n is 1 if n is even, and -1 if n is odd.",
              "Scientific notation standard requires coefficient strictly in [1, 10)."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 13 & Class 8 Chapter 12",
            "pyqIds": [
              "ctet-q-0002",
              "ctet-q-0288",
              "ctet-q-0289",
              "ctet-q-0290",
              "ctet-q-0291",
              "ctet-q-0292",
              "ctet-q-0293",
              "ctet-q-0294"
            ]
          },
          {
            "id": "ctet-math-t4",
            "chapterId": "ctet-math-c1",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Compound Interest, Simple Interest & Percentages",
            "order": 4,
            "notes": "Simple interest (SI) is calculated on the initial principal: SI = (P * R * T) / 100. Compound interest (CI) compounds each period: Amount A = P(1 + R/100)^t.\n\nWhen interest is compounded half-yearly, rate is halved (R/2) and time is doubled (2t). Difference between CI and SI for 2 years is P(R/100)^2.",
            "concepts": [
              "SI remains uniform every year on the original principal.",
              "CI grows exponentially as interest adds to the principal base.",
              "Half-yearly conversion: r = R/2, n = 2t.",
              "2-year CI - SI difference = P(R / 100)²."
            ],
            "formulas": [
              "SI = (P × R × T) / 100",
              "A = P(1 + R/100)^t (Annually)",
              "A = P(1 + R/200)^(2t) (Half-yearly)",
              "CI₂ - SI₂ = P(R / 100)²"
            ],
            "solvedExamples": [
              {
                "problem": "Find the compound interest on ₹8,000 at 10% per annum for 1 year compounded half-yearly.",
                "solution": "Half-yearly rate r = 5%, n = 2 periods.\nA = 8000(1 + 5/100)² = 8000(1.05)² = 8000 × 1.1025 = ₹8,820.\nCI = 8820 - 8000 = ₹820."
              }
            ],
            "keyTakeaways": [
              "CI > SI for periods exceeding 1 year.",
              "For half-yearly, both divide rate by 2 and multiply time by 2.",
              "Shortcut: D = P(R/100)² for two-year interest difference."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 8 (Comparing Quantities)",
            "pyqIds": [
              "ctet-q-0003",
              "ctet-q-0193",
              "ctet-q-0194",
              "ctet-q-0195",
              "ctet-q-0196",
              "ctet-q-0197",
              "ctet-q-0198",
              "ctet-q-0199"
            ]
          },
          {
            "id": "ctet-math-t5",
            "chapterId": "ctet-math-c1",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Ratio, Proportion & Unitary Method",
            "order": 5,
            "notes": "A ratio compares two quantities of the same kind and unit. Two ratios a:b and c:d are in proportion (a:b :: c:d) if product of extremes equals product of means: ad = bc.\n\nIn direct proportion, x/y is constant. In inverse proportion, x * y is constant. The unitary method solves by finding the value of a single unit first.",
            "concepts": [
              "Proportion rule: Product of Extremes = Product of Means (ad = bc).",
              "Direct variation: x / y = k (graph is a straight line through origin).",
              "Inverse variation: x × y = k (more workers means fewer days).",
              "Mean proportional between a and b: √(ab)."
            ],
            "formulas": [
              "ad = bc (for a:b :: c:d)",
              "Direct: x₁ / y₁ = x₂ / y₂",
              "Inverse: x₁ × y₁ = x₂ × y₂",
              "Mean proportional: x = √(ab)"
            ],
            "solvedExamples": [
              {
                "problem": "If 12 women finish an embroidery in 15 days, in how many days can 18 women finish it?",
                "solution": "Inverse proportion: M₁ × D₁ = M₂ × D₂\n12 × 15 = 18 × D => D = 180 / 18 = 10 days."
              }
            ],
            "keyTakeaways": [
              "Ratios must always compare numbers in matching units.",
              "Inverse variation product is constant.",
              "Unitary method: find single unit value first."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 6 Chapter 12 & Class 8 Chapter 13",
            "pyqIds": [
              "ctet-q-0340",
              "ctet-q-0341",
              "ctet-q-0342",
              "ctet-q-0343",
              "ctet-q-0344",
              "ctet-q-0345",
              "ctet-q-0346",
              "ctet-q-0347"
            ]
          },
          {
            "id": "ctet-math-t6",
            "chapterId": "ctet-math-c1",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Square Roots, Cube Roots & Real Numbers",
            "order": 6,
            "notes": "A perfect square is an integer that can be written as the square of another integer. Perfect squares never end in the digits 2, 3, 7, or 8. The square root of an n-digit perfect square has n/2 digits if n is even, and (n+1)/2 digits if n is odd.\n\nSum of first n odd natural numbers is always n².",
            "concepts": [
              "Unit digits of square numbers: 0, 1, 4, 5, 6, 9 (never 2, 3, 7, 8).",
              "Number of digits in square root: n/2 (even), (n+1)/2 (odd).",
              "Sum of first n odd numbers = n².",
              "Cube roots have unique sign: ∛(-x) = -∛x."
            ],
            "formulas": [
              "√(ab) = √a × √b",
              "∛(ab) = ∛a × ∛b",
              "1 + 3 + 5 + ... + (2n - 1) = n²"
            ],
            "solvedExamples": [
              {
                "problem": "What is the smallest number by which 392 must be multiplied to obtain a perfect cube?",
                "solution": "392 = 2³ × 7². To form prime triplets, we need one more 7. Multiplier = 7."
              }
            ],
            "keyTakeaways": [
              "Look at the last digit to immediately rule out non-perfect squares.",
              "Square root of a number in (0, 1) is greater than the number itself.",
              "Every real number corresponds to a unique point on the number line."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapters 6 & 7",
            "pyqIds": [
              "ctet-q-0366",
              "ctet-q-0367",
              "ctet-q-0368",
              "ctet-q-0369",
              "ctet-q-0370",
              "ctet-q-0371",
              "ctet-q-0372",
              "ctet-q-0373"
            ]
          }
        ]
      },
      {
        "id": "ctet-math-c2",
        "subjectId": "ctet-math",
        "examId": "ctet-p2",
        "title": "Algebra & Linear Equations",
        "order": 2,
        "topics": [
          {
            "id": "ctet-math-t7",
            "chapterId": "ctet-math-c2",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Algebraic Expressions & Identities",
            "order": 1,
            "notes": "An algebraic expression is formed from variables and constants. Standard algebraic identities are equations true for all variable values:\n(a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², and (a+b)(a-b) = a² - b².\n\nCTET frequently tests expressions involving (x + 1/x) and evaluating symmetric polynomials without solving for individual roots.",
            "concepts": [
              "Like terms have identical variable components with matching powers.",
              "Degree of a single-variable polynomial is the highest variable exponent.",
              "Standard algebraic identities: (a±b)², a²-b², (x+a)(x+b).",
              "If x + 1/x = k, then x² + 1/x² = k² - 2."
            ],
            "formulas": [
              "(a + b)² = a² + 2ab + b²",
              "(a - b)² = a² - 2ab + b²",
              "(a + b)(a - b) = a² - b²",
              "x² + 1/x² = (x + 1/x)² - 2"
            ],
            "solvedExamples": [
              {
                "problem": "If x + 1/x = 5, find x² + 1/x².",
                "solution": "(x + 1/x)² = 25 => x² + 2 + 1/x² = 25 => x² + 1/x² = 23."
              }
            ],
            "keyTakeaways": [
              "Identities hold for all variable values, unlike conditional equations.",
              "Check for common factors before expanding.",
              "(a - b)² = (b - a)²."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 9",
            "pyqIds": [
              "ctet-q-0392",
              "ctet-q-0393",
              "ctet-q-0394",
              "ctet-q-0395",
              "ctet-q-0396",
              "ctet-q-0397",
              "ctet-q-0398",
              "ctet-q-0399"
            ]
          },
          {
            "id": "ctet-math-t8",
            "chapterId": "ctet-math-c2",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Linear Equations in One Variable & Word Problems",
            "order": 2,
            "notes": "A linear equation in one variable has the form ax + b = c (a ≠ 0). Transposition moves terms across equality while inverting operations (+ becomes -, × becomes ÷). Word problems focus on age problems, consecutive numbers, and reversing digits.",
            "concepts": [
              "Linear equation in one variable has degree 1 and exactly one unique root.",
              "Transposition maintains balance on both sides of the equation.",
              "Two-digit number with tens digit t and units digit u: 10t + u.",
              "Cross-multiplication simplifies rational equations: (ax+b)/(cx+d) = p/q."
            ],
            "formulas": [
              "ax + b = 0 => x = -b / a",
              "Original number: 10t + u; Reversed: 10u + t",
              "q(ax + b) = p(cx + d)"
            ],
            "solvedExamples": [
              {
                "problem": "The sum of three consecutive multiples of 8 is 888. Find these multiples.",
                "solution": "8x + 8(x+1) + 8(x+2) = 888 => 24x + 24 = 888 => 24x = 864 => x = 36.\nMultiples: 288, 296, 304."
              }
            ],
            "keyTakeaways": [
              "Always verify answers by substituting back into original word statement.",
              "In digit problems, reversing digits gives 10u + t.",
              "Time elapsed applies equally to everyone in age problems."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 2",
            "pyqIds": [
              "ctet-q-0201",
              "ctet-q-0202",
              "ctet-q-0418",
              "ctet-q-0419",
              "ctet-q-0420",
              "ctet-q-0421",
              "ctet-q-0422",
              "ctet-q-0423"
            ]
          },
          {
            "id": "ctet-math-t9",
            "chapterId": "ctet-math-c2",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Factorisation of Polynomials & Quadratic Trinomials",
            "order": 3,
            "notes": "Factorisation decomposes an expression into a product of irreducible factors. Key methods: common factor extraction, grouping terms, using identities, and splitting the middle term in quadratic trinomials ax² + bx + c.",
            "concepts": [
              "Common monomial factoring: extract highest common factor.",
              "Grouping: pair terms to reveal common binomial factors.",
              "Splitting middle term: find factors of ac that sum to b.",
              "Difference of two squares: x² - y² = (x - y)(x + y)."
            ],
            "formulas": [
              "ax² + bx + c = (mx + p)(nx + q) where mn = a, pq = c, mq + np = b",
              "a² - b² = (a - b)(a + b)",
              "a³ + b³ = (a + b)(a² - ab + b²)"
            ],
            "solvedExamples": [
              {
                "problem": "Factorise 6x² + 17x + 5.",
                "solution": "ac = 30. Factors summing to 17 are 15 and 2.\n6x² + 15x + 2x + 5 = 3x(2x + 5) + 1(2x + 5) = (2x + 5)(3x + 1)."
              }
            ],
            "keyTakeaways": [
              "Check for common monomial factor before factoring quadratics.",
              "Difference of squares requires a minus sign.",
              "Pair terms with compatible signs when 4 terms are present."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 14",
            "pyqIds": [
              "ctet-q-0444",
              "ctet-q-0445",
              "ctet-q-0446",
              "ctet-q-0447",
              "ctet-q-0448",
              "ctet-q-0449",
              "ctet-q-0450",
              "ctet-q-0451"
            ]
          }
        ]
      },
      {
        "id": "ctet-math-c3",
        "subjectId": "ctet-math",
        "examId": "ctet-p2",
        "title": "Geometry, Mensuration & Data Handling",
        "order": 3,
        "topics": [
          {
            "id": "ctet-math-t10",
            "chapterId": "ctet-math-c3",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Lines, Angles & Parallel Line Transversal Theorems",
            "order": 1,
            "notes": "When two parallel lines are cut by a transversal: alternate interior angles are equal, corresponding angles are equal, and consecutive interior angles sum to 180°. Vertically opposite angles are always equal.",
            "concepts": [
              "Complementary angles sum to 90°; Supplementary angles sum to 180°.",
              "Linear pair angles on a straight line sum to 180°.",
              "Alternate interior angles are equal (Z-pattern).",
              "Co-interior angles sum to 180° (C-pattern)."
            ],
            "formulas": [
              "Complement of θ = 90° - θ",
              "Supplement of θ = 180° - θ",
              "Co-interior angles: ∠A + ∠B = 180°"
            ],
            "solvedExamples": [
              {
                "problem": "An angle is 24° more than its complement. Find the angle.",
                "solution": "x = (90 - x) + 24 => 2x = 114 => x = 57°."
              }
            ],
            "keyTakeaways": [
              "Parallel line equalities hold only when lines are strictly parallel.",
              "Vertically opposite angles are equal for any intersecting lines.",
              "Angles around a point sum to 360°."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 5 & Class 9 Chapter 6",
            "pyqIds": [
              "ctet-q-0470",
              "ctet-q-0471",
              "ctet-q-0472",
              "ctet-q-0473",
              "ctet-q-0474",
              "ctet-q-0475",
              "ctet-q-0476",
              "ctet-q-0477"
            ]
          },
          {
            "id": "ctet-math-t11",
            "chapterId": "ctet-math-c3",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Triangles: Congruence Criteria & Angle Sum Property",
            "order": 2,
            "notes": "Interior angles of a triangle sum to 180°. An exterior angle equals the sum of its two opposite interior angles. Sum of any two sides must be strictly greater than the third side (Triangle Inequality). Valid congruence criteria: SSS, SAS, ASA, AAS, RHS.",
            "concepts": [
              "Angle sum property: ∠A + ∠B + ∠C = 180°.",
              "Exterior angle = sum of two opposite interior angles.",
              "Triangle Inequality: a + b > c, b + c > a, c + a > b.",
              "Valid Congruence criteria: SSS, SAS, ASA, AAS, RHS.",
              "AAA gives similarity, not congruence."
            ],
            "formulas": [
              "∠A + ∠B + ∠C = 180°",
              "Exterior ∠ = ∠1 + ∠2",
              "a + b > c (Triangle inequality)"
            ],
            "solvedExamples": [
              {
                "problem": "Can lengths 5 cm, 8 cm, and 14 cm form a triangle?",
                "solution": "5 + 8 = 13 cm < 14 cm. Violates triangle inequality. Cannot form a triangle."
              }
            ],
            "keyTakeaways": [
              "Check all three side pairs for triangle inequality.",
              "AAA does not establish congruence.",
              "RHS requires hypotenuse and one leg in right triangles."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 6 & Class 9 Chapter 7",
            "pyqIds": [
              "ctet-q-0203",
              "ctet-q-0204",
              "ctet-q-0205",
              "ctet-q-0206",
              "ctet-q-0207",
              "ctet-q-0208",
              "ctet-q-0209",
              "ctet-q-0210"
            ]
          },
          {
            "id": "ctet-math-t12",
            "chapterId": "ctet-math-c3",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Quadrilaterals, Polygons & Circle Geometry",
            "order": 3,
            "notes": "Sum of interior angles of an n-sided polygon is (n - 2) * 180°. Sum of exterior angles is always 360°. For a regular n-gon, each exterior angle is 360°/n. In circles, angle subtended by an arc at the centre is double the angle at any point on the circumference.",
            "concepts": [
              "Interior angle sum = (n - 2) × 180°.",
              "Exterior angle sum of ANY convex polygon = 360°.",
              "Regular polygon exterior angle = 360° / n.",
              "Rhombus diagonals bisect each other at right angles.",
              "Angle in a semicircle is a right angle (90°)."
            ],
            "formulas": [
              "Interior sum = (n - 2) × 180°",
              "Exterior sum = 360°",
              "Each exterior angle = 360° / n",
              "Rhombus area = (1/2) × d₁ × d₂"
            ],
            "solvedExamples": [
              {
                "problem": "Find the number of sides of a regular polygon with each exterior angle 45°.",
                "solution": "n = 360° / 45° = 8 sides (Octagon)."
              }
            ],
            "keyTakeaways": [
              "Exterior angle sum is invariant (360°) regardless of side count.",
              "Rhombus area is half the product of its diagonals.",
              "Angle in a semicircle is always 90°."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 3 & Class 9 Chapter 10",
            "pyqIds": [
              "ctet-q-0522",
              "ctet-q-0523",
              "ctet-q-0524",
              "ctet-q-0525",
              "ctet-q-0526",
              "ctet-q-0527",
              "ctet-q-0528",
              "ctet-q-0529"
            ]
          },
          {
            "id": "ctet-math-t13",
            "chapterId": "ctet-math-c3",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "2D Mensuration: Perimeter & Area of Plane Figures",
            "order": 4,
            "notes": "Area of triangle = (1/2) * base * height, or Heron's formula √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2. Circle Area = πr², Circumference = 2πr. Trapezium Area = (1/2) * (sum of parallel sides) * height. Sector Area = (θ/360) * πr².",
            "concepts": [
              "Heron's formula applies when all three sides are known.",
              "Trapezium area: average of parallel sides multiplied by height.",
              "Sector area is proportional to central angle (θ / 360°).",
              "Perimeter of closed semicircle: πr + 2r."
            ],
            "formulas": [
              "Area = √[s(s - a)(s - b)(s - c)], s = (a + b + c) / 2",
              "Trapezium Area = (1/2) × (a + b) × h",
              "Circle Area = πr²; Circumference = 2πr",
              "Sector Area = (θ / 360°) × πr²"
            ],
            "solvedExamples": [
              {
                "problem": "Find area of trapezium with parallel sides 14 cm and 20 cm, and height 8 cm.",
                "solution": "Area = (1/2) × (14 + 20) × 8 = (1/2) × 34 × 8 = 136 cm²."
              }
            ],
            "keyTakeaways": [
              "Include the diameter (2r) when computing perimeter of a closed semicircle.",
              "Scaling linear dimensions by k scales area by k².",
              "Keep units consistent before multiplying."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 11 & Class 8 Chapter 11",
            "pyqIds": [
              "ctet-q-0548",
              "ctet-q-0549",
              "ctet-q-0550",
              "ctet-q-0551",
              "ctet-q-0552",
              "ctet-q-0553",
              "ctet-q-0554",
              "ctet-q-0555"
            ]
          },
          {
            "id": "ctet-math-t14",
            "chapterId": "ctet-math-c3",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "3D Mensuration: Surface Area & Volume of Cubes, Cylinders",
            "order": 5,
            "notes": "Volume measures capacity while surface area measures exterior bounding boundary. For a cylinder of radius r and height h: CSA = 2πrh, TSA = 2πr(r+h), Volume = πr²h. Melting and recasting solids preserves total volume.",
            "concepts": [
              "Conservation of volume during melting/recasting.",
              "Cylinder: CSA = 2πrh, TSA = 2πr(r + h), Volume = πr²h.",
              "Cube: Volume = a³, TSA = 6a², Diagonal = a√3.",
              "Cuboid: Volume = lbh, TSA = 2(lb + bh + hl)."
            ],
            "formulas": [
              "Cylinder Volume = πr²h; CSA = 2πrh; TSA = 2πr(r + h)",
              "Cube Volume = a³; TSA = 6a²",
              "Cone Volume = (1/3)πr²h",
              "Sphere Volume = (4/3)πr³; TSA = 4πr²"
            ],
            "solvedExamples": [
              {
                "problem": "A cylindrical tank has radius 7 m and height 10 m. Find capacity in litres.",
                "solution": "Volume = (22/7) × 7² × 10 = 1540 m³.\nCapacity = 1540 × 1000 = 1,540,000 litres."
              }
            ],
            "keyTakeaways": [
              "1 m³ = 1000 litres; 1 litre = 1000 cm³.",
              "Doubling radius of cylinder quadruples volume (V ∝ r²).",
              "Recasting problems equate initial volume to final volume."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 11 & Class 9 Chapter 13",
            "pyqIds": [
              "ctet-q-0211",
              "ctet-q-0212",
              "ctet-q-0213",
              "ctet-q-0214",
              "ctet-q-0215",
              "ctet-q-0216",
              "ctet-q-0217",
              "ctet-q-0218"
            ]
          },
          {
            "id": "ctet-math-t15",
            "chapterId": "ctet-math-c3",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Statistics: Mean, Median, Mode & Data Representation",
            "order": 6,
            "notes": "Mean is the arithmetic average: ∑x / n. Median is the middle value of sorted data: (n+1)/2 term for odd n, and average of n/2 and (n/2 + 1) terms for even n. Mode is the most frequent observation. Empirical formula: Mode ≈ 3(Median) - 2(Mean).",
            "concepts": [
              "Mean = Sum of observations / Count of observations.",
              "Median is resistant to extreme outliers.",
              "Mode is the most frequently occurring score.",
              "Empirical relation: Mode = 3 × Median - 2 × Mean.",
              "Pie chart central angle = (Value / Total) × 360°."
            ],
            "formulas": [
              "Mean x̄ = (∑ f_i x_i) / (∑ f_i)",
              "Median (even n) = [(n/2)th + (n/2 + 1)th] / 2",
              "Mode = 3(Median) - 2(Mean)",
              "Pie sector angle = (Value / Total) × 360°"
            ],
            "solvedExamples": [
              {
                "problem": "Find the median of: 25, 34, 12, 45, 18, 22, 29, 31.",
                "solution": "Sorted: 12, 18, 22, 25, 29, 31, 34, 45 (n = 8).\nMedian = (25 + 29) / 2 = 54 / 2 = 27."
              }
            ],
            "keyTakeaways": [
              "Always sort values in ascending order before finding median.",
              "Outliers distort mean, so median is preferable for skewed distributions.",
              "Empirical formula connects all three measures."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 3 & Class 9 Chapter 14",
            "pyqIds": [
              "ctet-q-0600",
              "ctet-q-0601",
              "ctet-q-0602",
              "ctet-q-0603",
              "ctet-q-0604",
              "ctet-q-0605",
              "ctet-q-0606",
              "ctet-q-0607"
            ]
          }
        ]
      },
      {
        "id": "ctet-math-c4",
        "subjectId": "ctet-math",
        "examId": "ctet-p2",
        "title": "Pedagogical Issues in Mathematics",
        "order": 4,
        "topics": [
          {
            "id": "ctet-math-t16",
            "chapterId": "ctet-math-c4",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Nature of Mathematics, Logical Thinking & Abstraction",
            "order": 1,
            "notes": "Mathematics is an exact, abstract, deductive, and logical science. NCF 2005 defines the primary goal of school mathematics as the 'mathematisation' of the child's thought processes rather than mere computational drilling.",
            "concepts": [
              "Mathematics is deductive and axiomatic.",
              "Abstraction moves from concrete experiences to symbolic representations.",
              "Knowledge is hierarchical: new concepts require prerequisite structures.",
              "Mathematisation: developing reasoning, inquiry, and analytical habits."
            ],
            "solvedExamples": [
              {
                "problem": "What is the primary vision of NCF 2005 for school mathematics?",
                "solution": "Mathematisation of the child's thinking processes and fostering logical reasoning rather than rote algorithm memorization."
              }
            ],
            "keyTakeaways": [
              "Emphasize mathematisation over computational drill.",
              "Mathematics is inductive in discovery, deductive in formal proof.",
              "Language of mathematics is precise and symbolic."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCERT NCF 2005 Position Paper on Mathematics",
            "pyqIds": [
              "ctet-q-0221",
              "ctet-q-0626",
              "ctet-q-0627",
              "ctet-q-0628",
              "ctet-q-0629",
              "ctet-q-0630",
              "ctet-q-0631",
              "ctet-q-0632"
            ]
          },
          {
            "id": "ctet-math-t17",
            "chapterId": "ctet-math-c4",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Place of Mathematics in School Curriculum & NCF 2005",
            "order": 2,
            "notes": "NCF 2005 recommends connecting classroom mathematics to life outside school. Rote memorization must give way to conceptual understanding and hands-on modeling. Errors are valued as diagnostic insights into student thinking.",
            "concepts": [
              "Connecting math to real life reduces math phobia.",
              "Student errors are diagnostic assets, not punishable failures.",
              "Math lab activities anchor abstract concepts.",
              "Equity Principle: Every student can learn mathematics."
            ],
            "keyTakeaways": [
              "Contextualized problems stimulate intrinsic engagement.",
              "Errors indicate underlying conceptual schemas.",
              "NEP 2020 promotes foundational numeracy."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCF 2005 Curriculum Guidelines",
            "pyqIds": [
              "ctet-q-0652",
              "ctet-q-0653",
              "ctet-q-0654",
              "ctet-q-0655",
              "ctet-q-0656",
              "ctet-q-0657",
              "ctet-q-0658",
              "ctet-q-0659"
            ]
          },
          {
            "id": "ctet-math-t18",
            "chapterId": "ctet-math-c4",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Van Hiele Model of Geometric Thinking",
            "order": 3,
            "notes": "Van Hiele model defines 5 levels of geometric development: Level 0 (Visualization - recognition by appearance), Level 1 (Analysis - properties of shapes), Level 2 (Abstraction - informal deduction and class inclusion), Level 3 (Formal Deduction - axiomatic proofs), Level 4 (Rigor - comparing non-Euclidean geometries).",
            "concepts": [
              "Level 0 (Visualization): Looks like a shape.",
              "Level 1 (Analysis): Lists individual properties.",
              "Level 2 (Abstraction): Understands class inclusion ('square is a rectangle').",
              "Level 3 (Formal Deduction): Proves theorems deductively.",
              "Level 4 (Rigor): University-level axiomatic geometry."
            ],
            "solvedExamples": [
              {
                "problem": "A student states: 'Every square is a rectangle because opposite sides are equal and all angles are 90°.' Identify the Van Hiele level.",
                "solution": "Level 2 (Abstraction / Informal Deduction), because the student recognizes hierarchical property interrelations."
              }
            ],
            "keyTakeaways": [
              "Levels are instruction-dependent, not age-dependent.",
              "Elementary students typically operate between Levels 0 and 2.",
              "Class inclusion first appears at Level 2."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "B.Ed Pedagogy of Mathematics Curriculum",
            "pyqIds": [
              "ctet-q-0219",
              "ctet-q-0220",
              "ctet-q-0678",
              "ctet-q-0679",
              "ctet-q-0680",
              "ctet-q-0681",
              "ctet-q-0682",
              "ctet-q-0683"
            ]
          },
          {
            "id": "ctet-math-t19",
            "chapterId": "ctet-math-c4",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Error Analysis & Diagnosis of Learning Difficulties",
            "order": 4,
            "notes": "Error analysis separates computational slips from systematic conceptual misconceptions. Diagnostic tests identify specific learning gaps, followed by targeted remedial teaching using concrete manipulatives and guided scaffolding.",
            "concepts": [
              "Slips are accidental; misconceptions are systematic.",
              "Diagnostic tests pinpoint root causes of learning breakdown.",
              "Remedial teaching uses alternative explanations, not mere repetition.",
              "Formative assessment guides instruction in real time."
            ],
            "keyTakeaways": [
              "Errors are essential diagnostic evidence.",
              "Do not repeat the exact same verbal explanation in remediation.",
              "Address prerequisite conceptual deficits first."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Diagnostic Assessment Guidelines",
            "pyqIds": [
              "ctet-q-0222"
            ]
          },
          {
            "id": "ctet-math-t20",
            "chapterId": "ctet-math-c4",
            "subjectId": "ctet-math",
            "examId": "ctet-p2",
            "title": "Open-ended vs Closed-ended Questions & Divergent Thinking",
            "order": 5,
            "notes": "Closed questions have one predetermined answer, testing algorithmic recall. Open-ended questions allow multiple approaches and valid answers, stimulating divergent thinking, creativity, and mathematical discourse.",
            "concepts": [
              "Closed questions: Convergent thinking, unique answer.",
              "Open-ended questions: Divergent thinking, multiple solutions.",
              "Open questioning lowers math anxiety and welcomes diverse reasoning."
            ],
            "solvedExamples": [
              {
                "problem": "Convert the closed question: 'What is 5 + 7?' into an open-ended question.",
                "solution": "'Write three different pairs of numbers whose sum is 12.'"
              }
            ],
            "keyTakeaways": [
              "Open-ended tasks promote divergent mathematical reasoning.",
              "Closed questions test computational speed.",
              "Use open questions to stimulate classroom mathematical discussion."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Position Paper on Teaching of Mathematics",
            "pyqIds": [
              "ctet-q-0223",
              "ctet-q-0704",
              "ctet-q-0705",
              "ctet-q-0706",
              "ctet-q-0707",
              "ctet-q-0708",
              "ctet-q-0709",
              "ctet-q-0710"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ctet-sci",
    "examId": "ctet-p2",
    "name": "Science & Pedagogy",
    "code": "SCI-6-8",
    "iconName": "Atom",
    "description": "CBSE CTET Paper 2 science syllabus covering Matter, Materials, The Living World, Motion, and Science Pedagogy.",
    "chapters": [
      {
        "id": "ctet-sci-c1",
        "subjectId": "ctet-sci",
        "examId": "ctet-p2",
        "title": "Matter, Materials & Chemical Changes",
        "order": 1,
        "topics": [
          {
            "id": "ctet-sci-t1",
            "chapterId": "ctet-sci-c1",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "States of Matter: Boiling vs Evaporation",
            "order": 1,
            "notes": "Evaporation is a spontaneous surface phenomenon taking place at any temperature below the boiling point, causing cooling. Boiling is a bulk phenomenon occurring strictly at the boiling point where vapor pressure equals atmospheric pressure, forming bubbles throughout the liquid mass.\n\nFactors accelerating evaporation: increased surface area, higher temperature, lower atmospheric humidity, and increased wind speed.",
            "concepts": [
              "Evaporation: Surface phenomenon occurring at any temperature, causes cooling.",
              "Boiling: Bulk phenomenon occurring strictly at the fixed boiling point.",
              "Evaporation rate factors: Surface Area, Temperature, Wind Speed (direct); Humidity (inverse).",
              "Latent Heat of Vaporization is absorbed from surroundings, lowering temperature."
            ],
            "formulas": [
              "Q = m × L_v (Latent heat of vaporization)",
              "Rate of evaporation ∝ (Area × Temp × Wind) / Humidity"
            ],
            "solvedExamples": [
              {
                "problem": "Why does water kept in an earthen pot (matka) become cool in summer?",
                "solution": "Water seeps out through microscopic pores of the earthen pot and evaporates from the outer surface. The latent heat required for evaporation is taken from the water inside the pot, cooling it."
              }
            ],
            "keyTakeaways": [
              "Evaporation is a surface effect; boiling is a bulk effect.",
              "Evaporation produces a cooling effect on its container and surroundings.",
              "Low humidity speeds up evaporation."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 1 (Matter in Our Surroundings)",
            "pyqIds": [
              "ctet-q-0005",
              "ctet-q-0225",
              "ctet-q-0756",
              "ctet-q-0757",
              "ctet-q-0758",
              "ctet-q-0759",
              "ctet-q-0760",
              "ctet-q-0761"
            ]
          },
          {
            "id": "ctet-sci-t2",
            "chapterId": "ctet-sci-c1",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Acids, Bases, Salts & Chemical Indicators",
            "order": 2,
            "notes": "Acids taste sour, turn blue litmus red, and release H+ ions in aqueous solution. Bases taste bitter, feel soapy, turn red litmus blue, and release OH- ions. Neutralization occurs when an acid and base react to form salt and water.\n\nIndicators show pH through color changes: Litmus (lichens) is red in acid and blue in base; Phenolphthalein is colorless in acid and pink in base; Methyl orange is red in acid and yellow in base; Turmeric turns reddish-brown in basic solutions.",
            "concepts": [
              "Litmus: Red in acid, Blue in base.",
              "Phenolphthalein: Colorless in acidic/neutral, Pink in alkaline.",
              "Turmeric: Yellow in acid/neutral, Reddish-brown in base.",
              "Neutralization: Acid + Base -> Salt + Water + Heat.",
              "pH scale: < 7 is acidic, 7 is neutral, > 7 is basic."
            ],
            "formulas": [
              "Acid + Base -> Salt + H₂O + Heat",
              "pH = -log₁₀[H⁺]"
            ],
            "solvedExamples": [
              {
                "problem": "A curry stain on a white cloth turns reddish-brown when washed with soap. Why?",
                "solution": "Curry contains turmeric, a natural indicator. Soap is basic (alkaline) in nature, causing turmeric to change from yellow to reddish-brown."
              }
            ],
            "keyTakeaways": [
              "Litmus turns Red in Acid (remember: 'Acid burns red').",
              "Soap solutions are basic, turning turmeric red.",
              "Neutralization is an exothermic reaction."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 5 (Acids, Bases and Salts) & Class 10 Chapter 2",
            "pyqIds": [
              "ctet-q-0006",
              "ctet-q-0226",
              "ctet-q-0782",
              "ctet-q-0783",
              "ctet-q-0784",
              "ctet-q-0785",
              "ctet-q-0786",
              "ctet-q-0787"
            ]
          },
          {
            "id": "ctet-sci-t3",
            "chapterId": "ctet-sci-c1",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Physical and Chemical Changes & Rusting",
            "order": 3,
            "notes": "In physical changes, physical properties (state, shape, size) alter without changing chemical composition; they are usually reversible (e.g., melting of ice, tearing paper). In chemical changes, one or more new substances with different chemical properties are formed; they are generally irreversible (e.g., burning of wood, curdling of milk).\n\nRusting of iron is a chemical change requiring BOTH oxygen and water/moisture: 4Fe + 3O₂ + 2xH₂O -> 2Fe₂O₃·xH₂O. Galvanization coats iron with zinc to prevent rust.",
            "concepts": [
              "Physical changes: No new substance formed, usually reversible.",
              "Chemical changes: New substances formed, energy absorbed/evolved, irreversible.",
              "Rusting requires BOTH oxygen and water.",
              "Galvanization: Zinc coating prevents iron oxidation because zinc oxidizes preferentially."
            ],
            "formulas": [
              "Rusting: 4Fe + 3O₂ + 2xH₂O -> 2Fe₂O₃·xH₂O (Hydrated ferric oxide)",
              "Galvanization = Zn coating over Fe"
            ],
            "solvedExamples": [
              {
                "problem": "Why does an iron nail not rust when submerged in boiled distilled water sealed with an oil layer?",
                "solution": "Boiling expels all dissolved oxygen from the water, and the oil layer prevents atmospheric oxygen from entering. Since oxygen is absent, rusting cannot occur."
              }
            ],
            "keyTakeaways": [
              "Rusting requires both oxygen AND moisture; eliminating either stops rust.",
              "Burning of a candle is both a physical (wax melting) and chemical (wax burning) change.",
              "Galvanization uses zinc."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 6 (Physical and Chemical Changes)",
            "pyqIds": [
              "ctet-q-0808",
              "ctet-q-0809",
              "ctet-q-0810",
              "ctet-q-0811",
              "ctet-q-0812",
              "ctet-q-0813",
              "ctet-q-0814",
              "ctet-q-0815"
            ]
          },
          {
            "id": "ctet-sci-t4",
            "chapterId": "ctet-sci-c1",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Metals and Non-metals: Reactivity Series & Displacement",
            "order": 4,
            "notes": "Metals are malleable, ductile, sonorous, lustrous, and good conductors of heat and electricity (exception: mercury is liquid at room temp). Non-metals are brittle, dull, and poor conductors (exception: graphite conducts electricity, diamond has high melting point).\n\nReactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au. A more reactive metal displaces a less reactive metal from its salt solution (e.g., Fe + CuSO₄ -> FeSO₄ + Cu, blue turns light green).",
            "concepts": [
              "Metallic properties: Malleability (beaten into sheets), Ductility (drawn into wires).",
              "Metal oxides are basic; non-metal oxides are acidic.",
              "Displacement reaction: More reactive metal replaces less reactive metal.",
              "Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au."
            ],
            "formulas": [
              "Fe + CuSO₄ (blue) -> FeSO₄ (green) + Cu (red-brown deposit)",
              "Metal + Acid -> Metal Salt + Hydrogen gas (H₂ pop test)"
            ],
            "solvedExamples": [
              {
                "problem": "What happens when zinc granules are added to a blue copper sulphate solution?",
                "solution": "Zinc is more reactive than copper. It displaces copper, forming colorless zinc sulphate solution and depositing reddish-brown copper: Zn + CuSO₄ -> ZnSO₄ + Cu."
              }
            ],
            "keyTakeaways": [
              "More reactive metals displace less reactive metals from aqueous salts.",
              "Metal oxides turn red litmus blue (basic); non-metal oxides turn blue litmus red (acidic).",
              "Graphite is a non-metal that conducts electricity."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 4 (Materials: Metals and Non-metals) & Class 10 Chapter 3",
            "pyqIds": [
              "ctet-q-0227",
              "ctet-q-0834",
              "ctet-q-0835",
              "ctet-q-0836",
              "ctet-q-0837",
              "ctet-q-0838",
              "ctet-q-0839",
              "ctet-q-0840"
            ]
          },
          {
            "id": "ctet-sci-t5",
            "chapterId": "ctet-sci-c1",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Synthetic Fibres, Plastics, Coal & Petroleum",
            "order": 5,
            "notes": "Synthetic fibres are man-made polymers: Rayon (artificial silk, made from wood pulp), Nylon (first fully synthetic fibre made from coal, water, air), Polyester (Terylene/PET, wrinkle-free), Acrylic (artificial wool).\n\nPlastics: Thermoplastics soften on heating and can be remolded (polythene, PVC); Thermosetting plastics cannot be softened once molded (Bakelite, Melamine). Fossil fuels: Coal (carbonization of dead vegetation), Petroleum (fractional distillation yields petrol, diesel, kerosene, paraffin).",
            "concepts": [
              "Rayon is regenerated from wood pulp (semi-synthetic).",
              "Nylon is the first fully synthetic fibre; strong and elastic.",
              "Thermoplastics (polythene, PVC) melt easily; Thermosetting (Bakelite, Melamine) do not soften on reheating.",
              "Bakelite is a poor conductor of heat and electricity, used for electrical switches."
            ],
            "keyTakeaways": [
              "Bakelite is thermosetting and used in electrical switches and cookware handles.",
              "Rayon is derived from plant cellulose (wood pulp).",
              "Fractional distillation separates crude petroleum by boiling points."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 3 (Synthetic Fibres and Plastics) & Chapter 5",
            "pyqIds": [
              "ctet-q-0007",
              "ctet-q-0860",
              "ctet-q-0861",
              "ctet-q-0862",
              "ctet-q-0863",
              "ctet-q-0864",
              "ctet-q-0865",
              "ctet-q-0866"
            ]
          }
        ]
      },
      {
        "id": "ctet-sci-c2",
        "subjectId": "ctet-sci",
        "examId": "ctet-p2",
        "title": "The Living World: Biology & Human Physiology",
        "order": 2,
        "topics": [
          {
            "id": "ctet-sci-t6",
            "chapterId": "ctet-sci-c2",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Nutrition in Plants: Photosynthesis & Heterotrophs",
            "order": 1,
            "notes": "Autotrophic nutrition occurs in green plants via photosynthesis: 6CO₂ + 6H₂O + Sunlight + Chlorophyll -> C₆H₁₂O₆ + 6O₂. Chlorophyll absorbs light energy, primarily in the blue and red wavelengths.\n\nHeterotrophic plants: Parasitic (Cuscuta / Amarbel absorbs food from host via haustoria), Insectivorous (Pitcher plant, Venus flytrap grow in nitrogen-deficient soil and trap insects for nitrogen), Saprotrophic (Fungi grow on dead decaying organic matter), Symbiotic (Lichens: mutualism between Alga and Fungus).",
            "concepts": [
              "Photosynthesis equation: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ in presence of sunlight and chlorophyll.",
              "Cuscuta is a non-green parasitic plant lacking chlorophyll.",
              "Insectivorous plants (Nepenthes) photosynthesize but digest insects for nitrogen.",
              "Lichen is a symbiotic partnership: alga provides food, fungus provides shelter and water."
            ],
            "formulas": [
              "6CO₂ + 6H₂O + Sunlight -> C₆H₁₂O₆ + 6O₂"
            ],
            "solvedExamples": [
              {
                "problem": "Why does a pitcher plant trap insects even though its leaves are green and carry out photosynthesis?",
                "solution": "Pitcher plants grow in nitrogen-poor bogs and marshes. Although they synthesize carbohydrates via photosynthesis, they digest insects to obtain essential nitrogen compounds."
              }
            ],
            "keyTakeaways": [
              "Stomata regulate transpiration and gas exchange via guard cells.",
              "Pitcher plants trap insects for nitrogen, not carbohydrates.",
              "Lichens act as bio-indicators of sulfur dioxide pollution."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 1 (Nutrition in Plants)",
            "pyqIds": [
              "ctet-q-0228",
              "ctet-q-0886",
              "ctet-q-0887",
              "ctet-q-0888",
              "ctet-q-0889",
              "ctet-q-0890",
              "ctet-q-0891",
              "ctet-q-0892"
            ]
          },
          {
            "id": "ctet-sci-t7",
            "chapterId": "ctet-sci-c2",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Human Digestive & Circulatory System",
            "order": 2,
            "notes": "Human digestion: Mouth (salivary amylase digests starch to maltose), Stomach (HCl provides acidic pH, pepsin breaks proteins, mucus protects stomach lining), Small Intestine (site of complete digestion; bile emulsifies fats, pancreatic lipase breaks fats, trypsin breaks proteins; villi absorb nutrients), Large Intestine (absorbs water).\n\nCirculatory system: Double circulation in humans. Arteries carry oxygenated blood away from heart under high pressure (thick walls, no valves; exception: pulmonary artery). Veins carry deoxygenated blood toward heart (thin walls, have valves; exception: pulmonary vein).",
            "concepts": [
              "Bile is produced by liver, stored in gallbladder, and emulsifies fats (no enzymes).",
              "Complete digestion and maximum absorption occur in the small intestine via villi.",
              "Pulmonary artery is the only artery carrying deoxygenated blood.",
              "Human heart has 4 chambers preventing mixture of oxygenated and deoxygenated blood."
            ],
            "keyTakeaways": [
              "Bile contains no enzymes; its function is mechanical emulsification of lipids.",
              "Villi in the ileum vastly expand surface area for nutrient absorption.",
              "Pulmonary vein carries oxygenated blood from lungs to left atrium."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 2 & Class 10 Chapter 6 (Life Processes)",
            "pyqIds": [
              "ctet-q-0008",
              "ctet-q-0912",
              "ctet-q-0913",
              "ctet-q-0914",
              "ctet-q-0915",
              "ctet-q-0916",
              "ctet-q-0917",
              "ctet-q-0918"
            ]
          },
          {
            "id": "ctet-sci-t8",
            "chapterId": "ctet-sci-c2",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Respiration in Organisms: Aerobic vs Anaerobic",
            "order": 3,
            "notes": "Cellular respiration breaks down glucose to release energy (ATP). Aerobic respiration occurs in mitochondria in the presence of O₂: Glucose -> CO₂ + H₂O + 38 ATP.\n\nAnaerobic respiration in yeast produces Ethanol + CO₂ + 2 ATP (Fermentation). Anaerobic respiration in human muscle cells during vigorous exercise produces Lactic Acid + 2 ATP, causing muscle cramps. Breathing organs: Fish (Gills), Earthworm (Moist skin), Insects (Tracheae and spiracles), Plants (Stomata and lenticels).",
            "concepts": [
              "Aerobic: Complete glucose oxidation, occurs in mitochondria, yields high ATP.",
              "Anaerobic in yeast: Produces ethyl alcohol and CO₂ (brewing/baking).",
              "Anaerobic in muscles: Produces lactic acid, responsible for fatigue/cramps.",
              "Cutaneous respiration: Earthworms breathe through moist, vascular skin."
            ],
            "formulas": [
              "Aerobic: C₆H₁₂O₆ + 6O₂ -> 6CO₂ + 6H₂O + 36/38 ATP",
              "Yeast Fermentation: C₆H₁₂O₆ -> 2C₂H₅OH + 2CO₂ + 2 ATP",
              "Muscle: C₆H₁₂O₆ -> 2 Lactic Acid + 2 ATP"
            ],
            "solvedExamples": [
              {
                "problem": "Why do athletes experience severe muscle cramps during a sprint?",
                "solution": "During heavy sprinting, oxygen demand exceeds supply. Muscle cells respire anaerobically, converting pyruvate to lactic acid. Accumulation of lactic acid causes muscle cramps."
              }
            ],
            "keyTakeaways": [
              "Mitochondria are the powerhouses where aerobic ATP synthesis occurs.",
              "Lactic acid accumulation causes muscle cramps.",
              "Insects breathe through spiracles and tracheal tubes."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 10 (Respiration in Organisms)",
            "pyqIds": [
              "ctet-q-0229"
            ]
          },
          {
            "id": "ctet-sci-t9",
            "chapterId": "ctet-sci-c2",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Excretion & Human Nephron Function",
            "order": 4,
            "notes": "The human excretory system consists of two kidneys, two ureters, a urinary bladder, and a urethra. The Nephron is the structural and functional filtration unit of the kidney (approx 1 million per kidney).\n\nNephron function has three stages: Ultrafiltration in the glomerulus under high hydrostatic pressure, Selective reabsorption (glucose, amino acids, salts, water) in renal tubules (PCT and Loop of Henle), and Tubular secretion. Normal human urine contains 95% water, 2.5% urea, and 2.5% other metabolic salts.",
            "concepts": [
              "Nephron is the microscopic filtration unit of the kidney.",
              "Glomerular filtration separates cells and large proteins from blood plasma.",
              "Useful substances (glucose, water, amino acids) are selectively reabsorbed.",
              "Primary nitrogenous waste in humans is urea (synthesized in liver, excreted by kidneys)."
            ],
            "keyTakeaways": [
              "Nephron is excretory unit; Neuron is nervous unit; Alveoli is respiratory unit.",
              "Urea is synthesized in the liver and filtered out by kidneys.",
              "Dialysis acts as an artificial kidney using semipermeable membranes."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 11 & Class 10 Chapter 6",
            "pyqIds": [
              "ctet-q-0230",
              "ctet-q-0938",
              "ctet-q-0939",
              "ctet-q-0940",
              "ctet-q-0941",
              "ctet-q-0942",
              "ctet-q-0943",
              "ctet-q-0944"
            ]
          },
          {
            "id": "ctet-sci-t11",
            "chapterId": "ctet-sci-c2",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Reproduction in Plants & Adolescence in Animals",
            "order": 5,
            "notes": "Asexual plant reproduction: Vegetative propagation (Potato eyes, Bryophyllum leaf notches, Ginger rhizome), Budding (Yeast), Fragmentation (Spirogyra), Spore formation (Ferns, bread mold). Sexual plant reproduction involves flowers: Stamen (male - anther, filament) and Pistil/Carpel (female - stigma, style, ovary).\n\nAfter fertilization, ovary becomes fruit, and ovules become seeds. In human adolescence, pituitary hormones stimulate testes (testosterone) and ovaries (estrogen), initiating secondary sexual characteristics.",
            "concepts": [
              "Bryophyllum reproduces vegetatively via adventitious buds on leaf margins.",
              "Ovary develops into Fruit; Ovules develop into Seeds.",
              "Cross-pollination transfers pollen from anther to stigma of another flower.",
              "Pituitary gland is the master endocrine gland controlling sex hormone release."
            ],
            "keyTakeaways": [
              "Bryophyllum reproduces through leaves; potato through tubers (eyes).",
              "Fruit is a ripened, fertilized ovary.",
              "Pituitary gland directs pubertal onset via FSH and LH."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 12 & Class 8 Chapters 9 and 10",
            "pyqIds": [
              "ctet-q-0964",
              "ctet-q-0965",
              "ctet-q-0966",
              "ctet-q-0967",
              "ctet-q-0968",
              "ctet-q-0969",
              "ctet-q-0970",
              "ctet-q-0971"
            ]
          }
        ]
      },
      {
        "id": "ctet-sci-c3",
        "subjectId": "ctet-sci",
        "examId": "ctet-p2",
        "title": "Moving Things, Force, Light & Energy",
        "order": 3,
        "topics": [
          {
            "id": "ctet-sci-t12",
            "chapterId": "ctet-sci-c3",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Motion, Speed & Distance-Time Graphs",
            "order": 1,
            "notes": "Speed is distance travelled per unit time (SI unit: m/s). Speed = Distance / Time. Average speed = Total distance / Total time. In uniform motion, speed remains constant and distance-time graph is a straight line passing through origin. The slope of a distance-time graph gives speed.\n\nSimple pendulum: Time period T = 2π√(L/g). The period depends on pendulum length and gravity, but is independent of bob mass or amplitude (for small angles).",
            "concepts": [
              "Speed = Distance / Time; Average Speed = Total Distance / Total Time.",
              "Slope of Distance-Time graph represents Speed.",
              "Straight slope line represents uniform motion; curve represents non-uniform motion.",
              "Pendulum time period T depends on length L, not on bob mass."
            ],
            "formulas": [
              "v = s / t (Speed)",
              "v_avg = Total Distance / Total Time",
              "T = 2π√(L / g) (Simple Pendulum)"
            ],
            "solvedExamples": [
              {
                "problem": "A car travels 30 km at 60 km/h, and the next 30 km at 30 km/h. Find its average speed.",
                "solution": "Time 1: t₁ = 30 / 60 = 0.5 h. Time 2: t₂ = 30 / 30 = 1.0 h.\nTotal Distance = 60 km. Total Time = 1.5 h.\nAverage speed = 60 / 1.5 = 40 km/h (NOT the arithmetic average 45!)."
              }
            ],
            "keyTakeaways": [
              "Average speed is never simply (v₁ + v₂)/2 when distances are equal; use harmonic mean 2v₁v₂/(v₁+v₂).",
              "Pendulum time period is independent of bob mass.",
              "Slope of displacement-time graph is velocity; slope of velocity-time graph is acceleration."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 13 (Motion and Time)",
            "pyqIds": [
              "ctet-q-0990",
              "ctet-q-0991",
              "ctet-q-0992",
              "ctet-q-0993",
              "ctet-q-0994",
              "ctet-q-0995",
              "ctet-q-0996",
              "ctet-q-0997"
            ]
          },
          {
            "id": "ctet-sci-t13",
            "chapterId": "ctet-sci-c3",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Force, Pressure & Atmospheric Pressure",
            "order": 2,
            "notes": "Force is a push or pull that can change state of motion, speed, direction, or shape of an object (SI unit: Newton, N). Forces are contact (muscular, friction) or non-contact (gravitational, electrostatic, magnetic).\n\nPressure is force per unit area: P = F / A (SI unit: Pascal, N/m²). For the same applied force, reducing area increases pressure (why knives have sharp edges, camels have broad feet). Liquid pressure increases linearly with depth: P = h·ρ·g.",
            "concepts": [
              "Pressure = Force / Area (P = F / A). Unit: Pascal (Pa) = N/m².",
              "Smaller surface area produces higher pressure for the same force.",
              "Liquid pressure increases with depth and acts equally in all directions at the same depth.",
              "Atmospheric pressure decreases with increasing altitude above sea level."
            ],
            "formulas": [
              "P = F / A",
              "P_liquid = h × ρ × g"
            ],
            "solvedExamples": [
              {
                "problem": "Why do heavy transport vehicles have multiple wide tires?",
                "solution": "Wider tires increase the contact surface area with the ground. Since Pressure = Force / Area, increasing area significantly lowers pressure exerted on the road, preventing road damage."
              }
            ],
            "keyTakeaways": [
              "Pressure is inversely proportional to contact area.",
              "Atmospheric pressure decreases as altitude rises.",
              "Liquid pressure depends only on depth and fluid density, not container shape."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 11 (Force and Pressure)",
            "pyqIds": [
              "ctet-q-1016",
              "ctet-q-1017",
              "ctet-q-1018",
              "ctet-q-1019",
              "ctet-q-1020",
              "ctet-q-1021",
              "ctet-q-1022",
              "ctet-q-1023"
            ]
          },
          {
            "id": "ctet-sci-t14",
            "chapterId": "ctet-sci-c3",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Friction: Factors, Types & Fluid Friction",
            "order": 3,
            "notes": "Friction is a contact force opposing relative motion between surfaces in contact. It arises from microscopic irregularities interlocking on surfaces. Friction depends on nature of surfaces and the normal force pressing them together, but is independent of apparent surface area.\n\nFriction hierarchy: Static Friction (maximum) > Sliding Friction > Rolling Friction (minimum). Ball bearings replace sliding with rolling friction. Friction exerted by fluids (air, water) is called drag; streamlining shapes minimizes drag.",
            "concepts": [
              "Friction opposes impending or actual relative motion.",
              "Hierarchy: Static friction > Sliding friction > Rolling friction.",
              "Rolling friction is much smaller, which is why wheels and ball bearings conserve energy.",
              "Fluid friction is called drag; streamlined bodies (aeroplanes, fish) reduce drag."
            ],
            "formulas": [
              "f_s ≤ μ_s × N",
              "f_k = μ_k × N (where μ_k < μ_s)"
            ],
            "solvedExamples": [
              {
                "problem": "Why do aeroplanes and high-speed trains have pointed, streamlined shapes?",
                "solution": "Streamlined shapes smoothly channel fluid flow lines around the body, minimizing turbulence and reducing fluid friction (drag)."
              }
            ],
            "keyTakeaways": [
              "Rolling friction is significantly lower than sliding friction.",
              "Friction does not depend on the apparent surface area in contact.",
              "Lubricants form a thin film between microscopic irregularities to reduce friction."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 12 (Friction)",
            "pyqIds": [
              "ctet-q-1042",
              "ctet-q-1043",
              "ctet-q-1044",
              "ctet-q-1045",
              "ctet-q-1046",
              "ctet-q-1047",
              "ctet-q-1048",
              "ctet-q-1049"
            ]
          },
          {
            "id": "ctet-sci-t16",
            "chapterId": "ctet-sci-c3",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Light: Reflection, Spherical Mirrors & Lenses",
            "order": 4,
            "notes": "Laws of reflection: Angle of incidence equals angle of reflection (∠i = ∠r); incident ray, reflected ray, and normal lie in the same plane. Plane mirror forms virtual, erect, laterally inverted image of identical size at equal distance behind mirror.\n\nConcave mirror (converging) forms real inverted images for objects beyond focus, but produces virtual, erect, magnified image when object is between pole (P) and focus (F). Convex mirror (diverging) always produces virtual, erect, diminished images with wide field of view (rear-view vehicle mirror).",
            "concepts": [
              "Concave mirror converges light; forms magnified virtual image when object is between P and F.",
              "Convex mirror diverges light; always forms diminished, erect virtual image.",
              "Convex lens converges light; Concave lens diverges light.",
              "Lateral inversion: Left appears right in plane mirror images."
            ],
            "formulas": [
              "Mirror formula: 1/f = 1/v + 1/u",
              "Lens formula: 1/f = 1/v - 1/u",
              "Power of lens P = 1 / f(m)"
            ],
            "solvedExamples": [
              {
                "problem": "Which mirror is used by dentists to inspect teeth, and why?",
                "solution": "Concave mirror. When held close to the tooth (between pole and principal focus), it forms an erect, virtual, and enlarged image of the tooth."
              }
            ],
            "keyTakeaways": [
              "Dentists use concave mirrors; vehicle side mirrors use convex mirrors.",
              "Real images can be caught on a screen; virtual images cannot.",
              "Focal length of convex mirror/lens is positive; concave mirror/lens is negative."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 15 & Class 10 Chapter 10 (Light)",
            "pyqIds": [
              "ctet-q-0231"
            ]
          },
          {
            "id": "ctet-sci-t17",
            "chapterId": "ctet-sci-c3",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Electricity: Circuits, Heating & Magnetic Effects",
            "order": 5,
            "notes": "Electric current is the rate of flow of electric charge: I = Q / t (unit: Ampere). Complete closed circuit allows current flow. Heating effect of current (Joule's Law): Heat H = I²Rt. Elements made of high-resistance, high-melting-point nichrome are used in heaters; electric fuses use low-melting-point alloys for safety.\n\nMagnetic effect of electric current (Oersted experiment): Current in a wire deflects a magnetic needle. An electromagnet is a soft iron core wound with an insulated coil carrying current; it acts as a temporary magnet.",
            "concepts": [
              "Current I = Q / t; Potential difference V = W / Q.",
              "Joule's Heating Law: H = I²Rt (Heat is proportional to square of current).",
              "Electric fuse has low melting point, breaking circuit when current exceeds threshold.",
              "Electromagnet magnetism can be turned on/off and varies with current and turn count."
            ],
            "formulas": [
              "I = Q / t",
              "H = I² × R × t",
              "P = V × I = I²R = V² / R"
            ],
            "solvedExamples": [
              {
                "problem": "Why is nichrome wire used as a heating element whereas a fuse wire is made of a lead-tin alloy?",
                "solution": "Nichrome has high resistivity and a very high melting point, so it glows red-hot without melting. A fuse wire requires a low melting point so it melts rapidly and breaks the circuit during overloading."
              }
            ],
            "keyTakeaways": [
              "Fuse wire requires low melting point and appropriate current rating.",
              "Heating effect: H ∝ I² (doubling current quadruples generated heat).",
              "Soft iron core makes the strongest temporary electromagnet."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 14 & Class 8 Chapter 14",
            "pyqIds": [
              "ctet-q-0232"
            ]
          }
        ]
      },
      {
        "id": "ctet-sci-c4",
        "subjectId": "ctet-sci",
        "examId": "ctet-p2",
        "title": "Natural Phenomena & Science Pedagogy",
        "order": 4,
        "topics": [
          {
            "id": "ctet-sci-t19",
            "chapterId": "ctet-sci-c4",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Nature and Structure of Science & Scientific Method",
            "order": 1,
            "notes": "Science is both an organized body of knowledge (product) and a continuous process of inquiry and verification (process). Scientific knowledge is tentative, dynamic, evidence-based, and subject to falsification.\n\nSteps of the scientific method: Observation -> Formulating hypothesis -> Designing controlled experiment -> Data collection and analysis -> Drawing conclusions -> Validating or modifying hypothesis.",
            "concepts": [
              "Science as both process (inquiry, investigation) and product (facts, laws, theories).",
              "Scientific knowledge is tentative and empirically testable.",
              "Hypothesis formulation must be testable through observation or experiment.",
              "Science fosters critical open-mindedness and scientific temper (Article 51A(h))."
            ],
            "keyTakeaways": [
              "Science values process skills over rote recall of facts.",
              "A valid hypothesis must be falsifiable.",
              "Scientific temper is a fundamental duty under the Indian Constitution."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Position Paper on Teaching of Science (NCF 2005)",
            "pyqIds": [
              "ctet-q-0233",
              "ctet-q-1068",
              "ctet-q-1069",
              "ctet-q-1070",
              "ctet-q-1071",
              "ctet-q-1072",
              "ctet-q-1073",
              "ctet-q-1074"
            ]
          },
          {
            "id": "ctet-sci-t21",
            "chapterId": "ctet-sci-c4",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Inquiry-based Approach, Observation & Experiments",
            "order": 2,
            "notes": "Inquiry-based science learning positions students as active investigators. Rather than passive listeners, students formulate testable questions, conduct observations, analyze data, and construct conceptual understanding (Constructivism).\n\nProcess skills in science include: Observing, Classifying, Measuring, Inferring, Predicting, and Communicating. Hands-on laboratory experiments using low-cost locally available materials provide concrete sensory foundations.",
            "concepts": [
              "Inquiry approach: Student-centered exploration replaces lecture demonstrations.",
              "Basic process skills: Observing, Inferring, Predicting, Measuring, Classifying.",
              "Integrated process skills: Hypothesizing, Controlling variables, Experimenting.",
              "Constructivist 5E Instructional Model: Engage, Explore, Explain, Elaborate, Evaluate."
            ],
            "keyTakeaways": [
              "5E model: Engage -> Explore -> Explain -> Elaborate -> Evaluate.",
              "Process skills are durable and transferable across disciplines.",
              "Scaffold student experiments without giving away pre-determined outcomes."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "CBSE Pedagogy of Science Teacher Manual",
            "pyqIds": [
              "ctet-q-0234",
              "ctet-q-1094",
              "ctet-q-1095",
              "ctet-q-1096",
              "ctet-q-1097",
              "ctet-q-1098",
              "ctet-q-1099",
              "ctet-q-1100"
            ]
          },
          {
            "id": "ctet-sci-t22",
            "chapterId": "ctet-sci-c4",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Continuous & Comprehensive Evaluation (CCE) in Science",
            "order": 3,
            "notes": "CCE in science evaluates both cognitive scholastic domains (conceptual understanding, application) and co-scholastic domains (scientific temper, attitudes, collaborative laboratory skills). Assessment of learning (summative) measures final attainment, Assessment for learning (formative) guides ongoing instruction, and Assessment as learning fosters metacognition.\n\nEvaluation tools include rubrics, concept maps, observation schedules, portfolios, and practical performance tests.",
            "concepts": [
              "Assessment for learning (Formative): Diagnostic and ongoing during teaching.",
              "Assessment of learning (Summative): Evaluative judgment at term end.",
              "Assessment as learning: Self-assessment and peer-reflection promoting metacognition.",
              "Authentic assessment evaluates hands-on laboratory manipulation and inquiry skills."
            ],
            "keyTakeaways": [
              "Formative assessment provides descriptive feedback, not just numerical grades.",
              "Portfolios document student conceptual growth over time.",
              "Assess both scientific process skills and conceptual understanding."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT CCE Manual in Science",
            "pyqIds": [
              "ctet-q-0235",
              "ctet-q-1120",
              "ctet-q-1121",
              "ctet-q-1122",
              "ctet-q-1123",
              "ctet-q-1124",
              "ctet-q-1125",
              "ctet-q-1126"
            ]
          },
          {
            "id": "ctet-sci-t7-ped",
            "chapterId": "ctet-sci-c4",
            "subjectId": "ctet-sci",
            "examId": "ctet-p2",
            "title": "Endocrine System & Chemical Coordination",
            "order": 4,
            "notes": "The human endocrine system comprises ductless glands secreting hormones directly into the bloodstream. Key glands: Pituitary (Master gland - Growth Hormone, TSH), Thyroid (Thyroxine - regulates basal metabolism, requires iodine), Pancreas (Heterocrine gland - Insulin lowers blood glucose, Glucagon raises blood glucose), Adrenal (Adrenaline - fight-or-flight response, raises heart rate and blood pressure).\n\nIodine deficiency causes Goitre. Insulin deficiency causes Diabetes mellitus.",
            "concepts": [
              "Endocrine glands are ductless; hormones travel via bloodstream.",
              "Pancreas is a heterocrine (dual) gland: secretes digestive enzymes and hormones.",
              "Insulin (Beta cells) lowers glucose; Glucagon (Alpha cells) raises glucose.",
              "Thyroxine requires iodine; deficiency causes goitre."
            ],
            "keyTakeaways": [
              "Insulin and glucagon maintain blood glucose homeostasis.",
              "Adrenaline is the emergency hormone preparing body for rapid action.",
              "Pituitary regulates other endocrine glands via trophic hormones."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 10 & Class 10 Chapter 7",
            "pyqIds": [
              "ctet-q-0008",
              "ctet-q-0233",
              "ctet-q-0234",
              "ctet-q-0235",
              "ctet-q-1068",
              "ctet-q-1069",
              "ctet-q-1070",
              "ctet-q-1071"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "stet-math",
    "examId": "bihar-stet-p1",
    "name": "Secondary Mathematics (Classes 9–10)",
    "code": "STET-MATH-9-10",
    "iconName": "Sigma",
    "description": "BSEB STET Paper 1 Mathematics syllabus covering Real Numbers, Polynomials, AP, Geometry, Trigonometry, and Statistics.",
    "chapters": [
      {
        "id": "stet-math-c1",
        "subjectId": "stet-math",
        "examId": "bihar-stet-p1",
        "title": "Real Numbers, Polynomials & Quadratic Equations",
        "order": 1,
        "topics": [
          {
            "id": "stet-math-t1",
            "chapterId": "stet-math-c1",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Euclid's Division Lemma & Fundamental Theorem of Arithmetic",
            "order": 1,
            "notes": "Euclid's Division Lemma states that for any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 <= r < b. Euclid's Division Algorithm computes the HCF of two numbers through successive division steps.\n\nThe Fundamental Theorem of Arithmetic states that every composite number can be factored uniquely as a product of primes, regardless of the order of factors. Proving irrationality of √2, √3, √5 uses proof by contradiction.",
            "concepts": [
              "Euclid's Division Lemma: a = bq + r (0 ≤ r < b).",
              "Fundamental Theorem of Arithmetic: Unique prime factorization for composite integers.",
              "If prime p divides a², then p divides a (where a is a positive integer).",
              "Decimal expansion of p/q terminates iff q = 2^n × 5^m."
            ],
            "formulas": [
              "a = bq + r (0 ≤ r < b)",
              "HCF(a, b) × LCM(a, b) = a × b"
            ],
            "solvedExamples": [
              {
                "problem": "Find the HCF of 135 and 225 using Euclid's division algorithm.",
                "solution": "225 = 135 × 1 + 90\n135 = 90 × 1 + 45\n90 = 45 × 2 + 0\nSince remainder is now 0, the divisor at this step is the HCF: 45."
              }
            ],
            "keyTakeaways": [
              "Remainder r in Euclid's lemma must satisfy 0 ≤ r < b.",
              "The HCF is the last non-zero remainder in the algorithm.",
              "Product of HCF and LCM equals product of the two numbers."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 1 (Real Numbers)",
            "pyqIds": [
              "stet-q-0003",
              "stet-q-0280",
              "stet-q-0281",
              "stet-q-0282",
              "stet-q-0283",
              "stet-q-0284",
              "stet-q-0285",
              "stet-q-0286"
            ]
          },
          {
            "id": "stet-math-t2",
            "chapterId": "stet-math-c1",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Polynomials: Zeros & Coefficient Relationships",
            "order": 2,
            "notes": "A polynomial p(x) = a_n x^n + ... + a₀ of degree n has at most n real zeros. The zeros correspond to the x-coordinates of the points where the graph y = p(x) intersects the x-axis.\n\nFor a quadratic polynomial ax² + bx + c with zeros α and β: Sum of zeros α + β = -b/a, Product of zeros αβ = c/a. For a cubic polynomial ax³ + bx² + cx + d with zeros α, β, γ: α + β + γ = -b/a, αβ + βγ + γα = c/a, αβγ = -d/a.",
            "concepts": [
              "Geometrical meaning: Number of zeros equals number of x-axis intersections.",
              "Quadratic zeros relation: α + β = -b/a and αβ = c/a.",
              "Quadratic polynomial formula: k[x² - (α + β)x + αβ].",
              "Division Algorithm for polynomials: p(x) = g(x)q(x) + r(x), where deg(r) < deg(g)."
            ],
            "formulas": [
              "α + β = -b / a",
              "α × β = c / a",
              "p(x) = k[x² - (Sum)x + Product]"
            ],
            "solvedExamples": [
              {
                "problem": "Find a quadratic polynomial whose sum and product of zeros are -3 and 2 respectively.",
                "solution": "p(x) = k[x² - (Sum)x + Product] = k[x² - (-3)x + 2] = x² + 3x + 2 (taking k = 1)."
              }
            ],
            "keyTakeaways": [
              "Sum of zeros is -b/a; note the minus sign.",
              "A degree n polynomial can have at most n real zeros.",
              "Zeros are points where y = 0 on the coordinate plane."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 2 (Polynomials)",
            "pyqIds": [
              "stet-q-0312",
              "stet-q-0313",
              "stet-q-0314",
              "stet-q-0315",
              "stet-q-0316",
              "stet-q-0317",
              "stet-q-0318",
              "stet-q-0319"
            ]
          },
          {
            "id": "stet-math-t3",
            "chapterId": "stet-math-c1",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Pair of Linear Equations in Two Variables",
            "order": 3,
            "notes": "A pair of linear equations in two variables: a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0.\n\nConsistency conditions:\n1. Intersecting lines (Unique solution): a₁/a₂ ≠ b₁/b₂ (Consistent).\n2. Coincident lines (Infinitely many solutions): a₁/a₂ = b₁/b₂ = c₁/c₂ (Dependent, consistent).\n3. Parallel lines (No solution): a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (Inconsistent).",
            "concepts": [
              "Unique solution: a₁/a₂ ≠ b₁/b₂ (Lines intersect at a single point).",
              "Infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ (Coincident lines).",
              "No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (Parallel lines, inconsistent system).",
              "Algebraic methods: Substitution, Elimination, and Cross-Multiplication."
            ],
            "formulas": [
              "Unique: a₁/a₂ ≠ b₁/b₂",
              "Infinitely many: a₁/a₂ = b₁/b₂ = c₁/c₂",
              "No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂"
            ],
            "solvedExamples": [
              {
                "problem": "For what value of k will the system 2x + 3y = 7 and (k-1)x + (k+2)y = 3k have infinitely many solutions?",
                "solution": "Condition: 2/(k-1) = 3/(k+2) = 7/(3k)\n2(k+2) = 3(k-1) => 2k + 4 = 3k - 3 => k = 7.\nVerify with third ratio: 3/(7+2) = 3/9 = 1/3; 7/(3×7) = 7/21 = 1/3. Valid. k = 7."
              }
            ],
            "keyTakeaways": [
              "Parallel lines are inconsistent and have no common intersection.",
              "Check all three coefficient ratios to verify consistency.",
              "Elimination method is usually fastest for integer coefficient systems."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 3 (Pair of Linear Equations)",
            "pyqIds": [
              "stet-q-0344",
              "stet-q-0345",
              "stet-q-0346",
              "stet-q-0347",
              "stet-q-0348",
              "stet-q-0349",
              "stet-q-0350",
              "stet-q-0351"
            ]
          },
          {
            "id": "stet-math-t4",
            "chapterId": "stet-math-c1",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Quadratic Equations: Discriminant & Nature of Roots",
            "order": 4,
            "notes": "A quadratic equation in standard form is ax² + bx + c = 0 (where a ≠ 0). The quadratic formula gives roots: x = (-b ± √D) / (2a), where Discriminant D = b² - 4ac.\n\nNature of roots:\n- D > 0: Two distinct real roots.\n- D = 0: Two equal real roots (x = -b / 2a).\n- D < 0: No real roots (roots are complex conjugates).",
            "concepts": [
              "Standard form: ax² + bx + c = 0 (a ≠ 0).",
              "Discriminant D = b² - 4ac dictates the nature of the roots.",
              "D = 0 implies roots are real and coincident.",
              "D > 0 and a perfect square (with rational coefficients) implies roots are rational."
            ],
            "formulas": [
              "D = b² - 4ac",
              "x = (-b ± √D) / (2a)",
              "Equal roots: D = 0 => b² = 4ac"
            ],
            "solvedExamples": [
              {
                "problem": "Find the values of k for which 2x² + kx + 3 = 0 has two real equal roots.",
                "solution": "For equal roots, D = 0: b² - 4ac = 0\nk² - 4(2)(3) = 0 => k² - 24 = 0 => k² = 24 => k = ±2√6."
              }
            ],
            "keyTakeaways": [
              "Equal roots condition D = 0 is frequently tested in STET.",
              "If D < 0, there are no real roots.",
              "Denominator in quadratic formula is 2a, not 2."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 4 (Quadratic Equations)",
            "pyqIds": [
              "stet-q-0376",
              "stet-q-0377",
              "stet-q-0378",
              "stet-q-0379",
              "stet-q-0380",
              "stet-q-0381",
              "stet-q-0382",
              "stet-q-0383"
            ]
          }
        ]
      },
      {
        "id": "stet-math-c2",
        "subjectId": "stet-math",
        "examId": "bihar-stet-p1",
        "title": "Arithmetic Progressions & Coordinate Geometry",
        "order": 2,
        "topics": [
          {
            "id": "stet-math-t5",
            "chapterId": "stet-math-c2",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Arithmetic Progressions: nth Term & Sum Formula",
            "order": 1,
            "notes": "An arithmetic progression (AP) is a sequence in which each term is obtained by adding a fixed common difference d to the preceding term. The nth term is given by a_n = a + (n - 1)d.\n\nThe sum of the first n terms of an AP is S_n = (n/2)[2a + (n-1)d] = (n/2)[a + l], where l is the last term. Arithmetic Mean between two numbers a and b is (a + b) / 2.",
            "concepts": [
              "Common difference d = a_k - a_(k-1) (can be positive, zero, or negative).",
              "General term: a_n = a + (n - 1)d.",
              "Sum of n terms: S_n = (n/2)[2a + (n - 1)d] = (n/2)(first + last).",
              "n-th term from sum: a_n = S_n - S_(n-1)."
            ],
            "formulas": [
              "a_n = a + (n - 1)d",
              "S_n = (n / 2)[2a + (n - 1)d]",
              "S_n = (n / 2)(a + l)",
              "a_n = S_n - S_(n-1)"
            ],
            "solvedExamples": [
              {
                "problem": "Find the sum of the first 20 terms of the AP: 3, 7, 11, 15, ...",
                "solution": "Here a = 3, d = 4, n = 20.\nS₂₀ = (20 / 2)[2(3) + (20 - 1)(4)] = 10[6 + 19(4)] = 10[6 + 76] = 10 × 82 = 820."
              }
            ],
            "keyTakeaways": [
              "Common difference can be negative (decreasing sequence).",
              "Sum of first n natural numbers is n(n + 1) / 2.",
              "Formula a_n = S_n - S_(n-1) easily finds the general term from sum formula."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 5 (Arithmetic Progressions)",
            "pyqIds": [
              "stet-q-0408",
              "stet-q-0409",
              "stet-q-0410",
              "stet-q-0411",
              "stet-q-0412",
              "stet-q-0413",
              "stet-q-0414",
              "stet-q-0415"
            ]
          },
          {
            "id": "stet-math-t6",
            "chapterId": "stet-math-c2",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Coordinate Geometry: Distance Formula & Section Formula",
            "order": 2,
            "notes": "In a Cartesian plane, the distance between P(x₁, y₁) and Q(x₂, y₂) is given by the distance formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]. Distance from the origin (0, 0) is √(x² + y²).\n\nThe section formula gives the coordinates of a point P dividing line segment joining A(x₁, y₁) and B(x₂, y₂) internally in the ratio m₁:m₂:\nx = (m₁x₂ + m₂x₁) / (m₁ + m₂), y = (m₁y₂ + m₂y₁) / (m₁ + m₂). Midpoint coordinates: ((x₁ + x₂)/2, (y₁ + y₂)/2). Centroid of a triangle: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3).",
            "concepts": [
              "Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²].",
              "Internal Section Formula: [(m₁x₂ + m₂x₁)/(m₁+m₂), (m₁y₂ + m₂y₁)/(m₁+m₂)].",
              "Midpoint formula: [(x₁ + x₂)/2, (y₁ + y₂)/2].",
              "Centroid of triangle divides medians in ratio 2:1."
            ],
            "formulas": [
              "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
              "x = (m₁x₂ + m₂x₁) / (m₁ + m₂), y = (m₁y₂ + m₂y₁) / (m₁ + m₂)",
              "Centroid: G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)"
            ],
            "solvedExamples": [
              {
                "problem": "Find the ratio in which the point P(-1, 6) divides the line segment joining A(-3, 10) and B(6, -8).",
                "solution": "Let ratio be k:1. Using x-coordinate:\n-1 = (k(6) + 1(-3)) / (k + 1) => -(k + 1) = 6k - 3\n-k - 1 = 6k - 3 => 7k = 2 => k = 2/7. Ratio is 2:7."
              }
            ],
            "keyTakeaways": [
              "Assume ratio k:1 to solve section division problems with a single variable.",
              "Distance from origin (0, 0) is simply √(x² + y²).",
              "Midpoint is the special case where m₁ = m₂ = 1."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 7 (Coordinate Geometry)",
            "pyqIds": [
              "stet-q-0440",
              "stet-q-0441",
              "stet-q-0442",
              "stet-q-0443",
              "stet-q-0444",
              "stet-q-0445",
              "stet-q-0446",
              "stet-q-0447"
            ]
          },
          {
            "id": "stet-math-t7",
            "chapterId": "stet-math-c2",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Area of Triangles in Coordinate Plane & Collinearity",
            "order": 3,
            "notes": "The area of a triangle formed by vertices (x₁, y₁), (x₂, y₂), and (x₃, y₃) is:\nArea = (1/2) | x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂) |.\n\nThree points A, B, and C are collinear if and only if the area of the triangle formed by them is exactly ZERO. This algebraic test provides the standard method for proving collinearity or finding an unknown coordinate.",
            "concepts": [
              "Coordinate triangle area formula uses cyclic permutation of indices (1-2-3, 2-3-1, 3-1-2).",
              "Take the absolute value since geometric area is non-negative.",
              "Collinearity condition: Area of triangle = 0.",
              "Slope method alternative: Points are collinear if Slope(AB) = Slope(BC)."
            ],
            "formulas": [
              "Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|",
              "Collinear iff: x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂) = 0"
            ],
            "solvedExamples": [
              {
                "problem": "Find the value of k for which points A(2, 3), B(4, k), and C(6, -3) are collinear.",
                "solution": "Set Area = 0:\n2(k - (-3)) + 4(-3 - 3) + 6(3 - k) = 0\n2(k + 3) + 4(-6) + 6(3 - k) = 0\n2k + 6 - 24 + 18 - 6k = 0\n-4k + 0 = 0 => k = 0."
              }
            ],
            "keyTakeaways": [
              "Area of triangle formed by collinear points is strictly 0.",
              "Use cyclic order: x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂).",
              "Absolute value bars prevent negative area outputs."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 7 (Coordinate Geometry)",
            "pyqIds": [
              "stet-q-0472",
              "stet-q-0473",
              "stet-q-0474",
              "stet-q-0475",
              "stet-q-0476",
              "stet-q-0477",
              "stet-q-0478",
              "stet-q-0479"
            ]
          }
        ]
      },
      {
        "id": "stet-math-c3",
        "subjectId": "stet-math",
        "examId": "bihar-stet-p1",
        "title": "Triangles, Circles & Trigonometry",
        "order": 3,
        "topics": [
          {
            "id": "stet-math-t8",
            "chapterId": "stet-math-c3",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Similar Triangles & Basic Proportionality Theorem (Thales)",
            "order": 1,
            "notes": "Two triangles are similar if corresponding angles are equal and corresponding sides are proportional. Basic Proportionality Theorem (Thales' Theorem): If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides the two sides in the same ratio.\n\nRatio of areas of two similar triangles equals the ratio of squares of their corresponding sides: Area(Δ1) / Area(Δ2) = (s₁ / s₂)². Pythagoras Theorem: In a right triangle, hypotenuse² = base² + perpendicular².",
            "concepts": [
              "Thales' Theorem (BPT): DE || BC => AD / DB = AE / EC.",
              "Similarity criteria: AAA, SAS, SSS.",
              "Area theorem: Area(ΔABC) / Area(ΔDEF) = (AB / DE)².",
              "Converse of Pythagoras: If a² + b² = c², the angle opposite to c is 90°."
            ],
            "formulas": [
              "BPT: AD / DB = AE / EC",
              "Area Ratio: Area(Δ₁) / Area(Δ₂) = (side₁ / side₂)² = (altitude₁ / altitude₂)²",
              "Pythagoras: AC² = AB² + BC²"
            ],
            "solvedExamples": [
              {
                "problem": "In ΔABC, DE || BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.",
                "solution": "By BPT: AD / DB = AE / EC => 1.5 / 3 = 1 / EC => 1/2 = 1 / EC => EC = 2 cm."
              }
            ],
            "keyTakeaways": [
              "BPT requires the dividing line to be strictly parallel to one side.",
              "Area scales with the SQUARE of the similarity ratio (linear ratio squared).",
              "AAA ensures similarity; SSS congruence implies similarity with ratio 1:1."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 6 (Triangles)",
            "pyqIds": [
              "stet-q-0504",
              "stet-q-0505",
              "stet-q-0506",
              "stet-q-0507",
              "stet-q-0508",
              "stet-q-0509",
              "stet-q-0510",
              "stet-q-0511"
            ]
          },
          {
            "id": "stet-math-t9",
            "chapterId": "stet-math-c3",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Circle Geometry: Tangents, Secants & Theorems",
            "order": 2,
            "notes": "A tangent to a circle is perpendicular to the radius at the point of contact. From an external point, exactly two tangents can be drawn to a circle, and their lengths are equal (PA = PB).\n\nThe angle subtended by a chord at the centre is twice the angle subtended at the remaining circumference. Opposite angles of a cyclic quadrilateral are supplementary (∠A + ∠C = 180°).",
            "concepts": [
              "Tangent is perpendicular to radius: OT ⊥ PT at point of contact T.",
              "Tangents from an external point are equal in length: PA = PB.",
              "Angle in a semicircle is a right angle (90°).",
              "Cyclic quadrilateral: Opposite angles sum to 180°."
            ],
            "formulas": [
              "PA = PB (Tangents from external point)",
              "∠AOB = 2 × ∠ACB (Central angle theorem)",
              "∠A + ∠C = 180° (Cyclic quadrilateral)"
            ],
            "solvedExamples": [
              {
                "problem": "Tangents PA and PB are drawn to a circle with centre O from point P. If ∠APB = 80°, find ∠POA.",
                "solution": "In quadrilateral OAPB, ∠OAP = ∠OBP = 90°.\n∠AOB = 180° - 80° = 100°.\nLine OP bisects ∠AOB: ∠POA = 100° / 2 = 50°."
              }
            ],
            "keyTakeaways": [
              "Radius and tangent meet at 90° at the point of contact.",
              "External tangent lengths are identical.",
              "Opposite angles of any cyclic quadrilateral sum to 180°."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 10 (Circles)",
            "pyqIds": [
              "stet-q-0536",
              "stet-q-0537",
              "stet-q-0538",
              "stet-q-0539",
              "stet-q-0540",
              "stet-q-0541",
              "stet-q-0542",
              "stet-q-0543"
            ]
          },
          {
            "id": "stet-math-t10",
            "chapterId": "stet-math-c3",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Trigonometric Ratios, Identities & Heights/Distances",
            "order": 3,
            "notes": "Trigonometric ratios in a right-angled triangle: sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj. Fundamental identities:\nsin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = cosec²θ.\n\nComplementary angle formulas: sin(90°-θ) = cos θ, tan(90°-θ) = cot θ. In applications (Heights and Distances), angle of elevation is the angle between horizontal and line of sight looking up; angle of depression is looking down.",
            "concepts": [
              "Pythagorean identities: sin²θ + cos²θ = 1; sec²θ - tan²θ = 1; cosec²θ - cot²θ = 1.",
              "Values at key angles (0°, 30°, 45°, 60°, 90°): sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2.",
              "tan θ = sin θ / cos θ; cot θ = cos θ / sin θ.",
              "Angle of elevation equals angle of depression (alternate interior angles)."
            ],
            "formulas": [
              "sin²θ + cos²θ = 1",
              "sec²θ - tan²θ = 1",
              "cosec²θ - cot²θ = 1",
              "sin(90° - θ) = cos θ; tan(90° - θ) = cot θ",
              "tan θ = Height / Distance"
            ],
            "solvedExamples": [
              {
                "problem": "A tower stands vertically on the ground. From a point 15 m away from its foot, the angle of elevation of the top is 60°. Find the height of the tower.",
                "solution": "tan 60° = h / 15 => √3 = h / 15 => h = 15√3 m ≈ 25.98 m."
              }
            ],
            "keyTakeaways": [
              "Memorize the 0°, 30°, 45°, 60°, 90° table accurately.",
              "sec²θ - tan²θ = 1 implies (sec θ - tan θ)(sec θ + tan θ) = 1 (reciprocals).",
              "Angle of elevation equals angle of depression."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapters 8 & 9 (Trigonometry)",
            "pyqIds": [
              "stet-q-0568",
              "stet-q-0569",
              "stet-q-0570",
              "stet-q-0571",
              "stet-q-0572",
              "stet-q-0573",
              "stet-q-0574",
              "stet-q-0575"
            ]
          }
        ]
      },
      {
        "id": "stet-math-c4",
        "subjectId": "stet-math",
        "examId": "bihar-stet-p1",
        "title": "Mensuration, Statistics & Probability",
        "order": 4,
        "topics": [
          {
            "id": "stet-math-t12",
            "chapterId": "stet-math-c4",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Areas Related to Circles: Sectors & Segments",
            "order": 1,
            "notes": "For a circle of radius r: Area = πr², Circumference = 2πr. For a sector subtending central angle θ: Area of sector = (θ / 360°) * πr², Arc length = (θ / 360°) * 2πr.\n\nArea of minor segment = Area of sector - Area of corresponding triangle = (θ/360)πr² - (1/2)r² sin θ. Area of major segment = Total circle area - Area of minor segment.",
            "concepts": [
              "Sector is bounded by two radii and an arc.",
              "Segment is bounded by a chord and an arc.",
              "Minor segment area = Area of sector - Area of triangle formed by radii and chord.",
              "Area of triangle with angle θ between two radii r is (1/2)r² sin θ."
            ],
            "formulas": [
              "Arc length l = (θ / 360°) × 2πr",
              "Sector Area = (θ / 360°) × πr² = (1/2) × l × r",
              "Minor Segment Area = (θ / 360°)πr² - (1/2)r² sin θ"
            ],
            "solvedExamples": [
              {
                "problem": "Find the area of a sector of a circle with radius 6 cm if the central angle is 60°.",
                "solution": "Area = (60 / 360) × (22/7) × 6² = (1/6) × (22/7) × 36 = 6 × 22 / 7 = 132 / 7 = 18.86 cm²."
              }
            ],
            "keyTakeaways": [
              "Sector area is half the product of arc length and radius (1/2 l r).",
              "Segment area requires subtracting triangle area from sector area.",
              "Central angle θ must be in degrees for the θ/360 formula."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 12 (Areas Related to Circles)",
            "pyqIds": [
              "stet-q-0600",
              "stet-q-0601",
              "stet-q-0602",
              "stet-q-0603",
              "stet-q-0604",
              "stet-q-0605",
              "stet-q-0606",
              "stet-q-0607"
            ]
          },
          {
            "id": "stet-math-t13",
            "chapterId": "stet-math-c4",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Surface Areas and Volumes of Combinations of Solids",
            "order": 2,
            "notes": "Problems evaluate composite solids formed by combining two or more basic geometrical solids: cylinder, cone, hemisphere, sphere, and frustum.\n\nTotal volume of combination is the direct sum of volumes of constituent parts. However, total surface area includes ONLY exposed exterior surface areas (hidden interface faces are excluded!). For a cylinder with hemispherical ends (capsule): TSA = CSA(cylinder) + 2 * CSA(hemisphere).",
            "concepts": [
              "Volume of composite solids is additive: V_total = V₁ + V₂.",
              "Surface area includes ONLY visible, exposed boundaries (common faces are excluded).",
              "Hemisphere: CSA = 2πr², TSA = 3πr², Volume = (2/3)πr³.",
              "Cone: CSA = πrl (slant height l = √(r² + h²)), Volume = (1/3)πr²h."
            ],
            "formulas": [
              "Hemisphere Volume = (2/3)πr³; CSA = 2πr²",
              "Cone Volume = (1/3)πr²h; CSA = πrl; l = √(r² + h²)",
              "Sphere Volume = (4/3)πr³; TSA = 4πr²"
            ],
            "solvedExamples": [
              {
                "problem": "A toy is in the shape of a cone mounted on a hemisphere of same radius 3.5 cm. Total height is 15.5 cm. Find its total surface area.",
                "solution": "Cone height h = 15.5 - 3.5 = 12 cm. Slant height l = √(3.5² + 12²) = √(12.25 + 144) = √156.25 = 12.5 cm.\nTSA = CSA(cone) + CSA(hemisphere) = πrl + 2πr² = πr(l + 2r)\nTSA = (22/7) × 3.5 × (12.5 + 2×3.5) = 11 × (12.5 + 7) = 11 × 19.5 = 214.5 cm²."
              }
            ],
            "keyTakeaways": [
              "Do not add the flat circular faces between joined solids.",
              "Slant height l = √(r² + h²); do not confuse h with l.",
              "Volume is straightforwardly additive."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 13 (Surface Areas and Volumes)",
            "pyqIds": [
              "stet-q-0632",
              "stet-q-0633",
              "stet-q-0634",
              "stet-q-0635",
              "stet-q-0636",
              "stet-q-0637",
              "stet-q-0638",
              "stet-q-0639"
            ]
          },
          {
            "id": "stet-math-t14",
            "chapterId": "stet-math-c4",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Statistics: Mean, Median, Mode of Grouped Data",
            "order": 3,
            "notes": "Grouped data formulas:\n1. Mean by Step-Deviation Method: x̄ = a + [ (∑f_i u_i) / (∑f_i) ] * h, where u_i = (x_i - a)/h.\n2. Mode: l + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] * h, where l is lower boundary of modal class.\n3. Median: l + [ (N/2 - cf) / f ] * h, where cf is cumulative frequency of preceding class.\nEmpirical relationship: Mode = 3(Median) - 2(Mean).",
            "concepts": [
              "Modal class is the interval with highest individual frequency.",
              "Median class is the interval where cumulative frequency first exceeds N/2.",
              "Cumulative frequency graph (Ogive): Intersection of 'less than' and 'more than' ogives gives the median.",
              "Step deviation method greatly simplifies arithmetic in large datasets."
            ],
            "formulas": [
              "Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h",
              "Median = l + [(N/2 - cf) / f] × h",
              "Mean x̄ = a + [(∑f_i u_i) / N] × h",
              "Mode = 3(Median) - 2(Mean)"
            ],
            "solvedExamples": [
              {
                "problem": "In a distribution, Median is 32 and Mean is 30. Find the Mode using empirical relation.",
                "solution": "Mode = 3(Median) - 2(Mean) = 3(32) - 2(30) = 96 - 60 = 36."
              }
            ],
            "keyTakeaways": [
              "In Median formula, cf is the cumulative frequency of PRECEDING class.",
              "Modal class has the highest frequency f₁.",
              "Intersection point of two ogives directly gives median on the x-axis."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 14 (Statistics)",
            "pyqIds": [
              "stet-q-0664",
              "stet-q-0665",
              "stet-q-0666",
              "stet-q-0667",
              "stet-q-0668",
              "stet-q-0669",
              "stet-q-0670",
              "stet-q-0671"
            ]
          },
          {
            "id": "stet-math-t15",
            "chapterId": "stet-math-c4",
            "subjectId": "stet-math",
            "examId": "bihar-stet-p1",
            "title": "Classical Probability & Mutually Exclusive Events",
            "order": 4,
            "notes": "Theoretical (classical) probability of event E: P(E) = Number of outcomes favorable to E / Total number of possible outcomes. For any event: 0 <= P(E) <= 1. Sum of probabilities of all elementary outcomes of an experiment is 1.\n\nComplementary event: P(not E) = 1 - P(E). An impossible event has probability 0; a sure (certain) event has probability 1. In cards: 52 total cards (26 red, 26 black; 4 suits of 13 cards each; 12 face cards: 4 Kings, 4 Queens, 4 Jacks).",
            "concepts": [
              "0 ≤ P(E) ≤ 1 for any random event E.",
              "P(E) + P(not E) = 1 (Complementary events).",
              "Sample space for tossing 2 coins: 4; 3 coins: 8; 2 dice: 36 outcomes.",
              "Deck of 52 cards: 12 face cards (Kings, Queens, Jacks); 4 Aces are not face cards."
            ],
            "formulas": [
              "P(E) = n(E) / n(S)",
              "P(Ē) = 1 - P(E)",
              "0 ≤ P(E) ≤ 1"
            ],
            "solvedExamples": [
              {
                "problem": "A card is drawn from a well-shuffled deck of 52 cards. What is the probability of drawing a red face card?",
                "solution": "Total cards n(S) = 52. Face cards per suit = 3 (K, Q, J). Red suits = 2 (Hearts, Diamonds).\nTotal red face cards = 2 × 3 = 6.\nP(Red face card) = 6 / 52 = 3 / 26."
              }
            ],
            "keyTakeaways": [
              "Aces are honor cards, NOT face cards (there are 12 face cards, not 16).",
              "Probability can never be negative or exceed 1.",
              "Tossing n coins yields 2^n total outcomes."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 15 (Probability)",
            "pyqIds": [
              "stet-q-0696",
              "stet-q-0697",
              "stet-q-0698",
              "stet-q-0699",
              "stet-q-0700",
              "stet-q-0701",
              "stet-q-0702",
              "stet-q-0703"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "stet-sci",
    "examId": "bihar-stet-p1",
    "name": "Secondary Science (Classes 9–10)",
    "code": "STET-SCI-9-10",
    "iconName": "FlaskConical",
    "description": "BSEB STET Paper 1 Science covering Physics, Chemistry, and Biology from NCERT/BSEB secondary curriculum.",
    "chapters": [
      {
        "id": "stet-sci-c1",
        "subjectId": "stet-sci",
        "examId": "bihar-stet-p1",
        "title": "Physics: Mechanics, Gravitation & Sound",
        "order": 1,
        "topics": [
          {
            "id": "stet-sci-t1",
            "chapterId": "stet-sci-c1",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Kinematics, Linear Momentum & Newton's Laws",
            "order": 1,
            "notes": "Kinematic equations for uniformly accelerated motion: v = u + at, s = ut + (1/2)at², and v² = u² + 2as. Newton's First Law defines inertia (mass is the measure of inertia). Newton's Second Law states that force equals rate of change of momentum: F = dp/dt = ma (SI unit: Newton, N = kg·m/s²).\n\nNewton's Third Law: Action and reaction forces are equal in magnitude and opposite in direction, acting on different bodies. Conservation of Linear Momentum: In an isolated system without external force, m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. Recoil of gun: v_gun = -(m_bullet * v_bullet) / m_gun.",
            "concepts": [
              "Inertia is the inherent tendency to resist change in motion; mass is its quantitative measure.",
              "Newton's Second Law: Force F = m × a (Rate of change of momentum).",
              "Action and reaction forces act on two DIFFERENT bodies, never canceling each other out.",
              "Total linear momentum is conserved in any closed system with zero net external force."
            ],
            "formulas": [
              "v = u + at",
              "s = ut + (1/2)at²",
              "v² = u² + 2as",
              "F = ma = (mv - mu) / t",
              "v_recoil = - (m_b × v_b) / M_gun"
            ],
            "solvedExamples": [
              {
                "problem": "A rifle of mass 4 kg fires a bullet of mass 50 g at 400 m/s. Find recoil speed of the rifle.",
                "solution": "m = 0.05 kg, v = 400 m/s, M = 4 kg.\nv_recoil = - (0.05 × 400) / 4 = - 20 / 4 = -5 m/s (Speed is 5 m/s backwards)."
              }
            ],
            "keyTakeaways": [
              "Recoil velocity is negative, indicating direction opposite to bullet.",
              "Mass is the measure of inertia (heavier object has greater inertia).",
              "Action and reaction act on separate bodies."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapters 8 & 9 (Motion; Force and Laws of Motion)",
            "pyqIds": [
              "stet-q-0001",
              "stet-q-0728",
              "stet-q-0729",
              "stet-q-0730",
              "stet-q-0731",
              "stet-q-0732",
              "stet-q-0733",
              "stet-q-0734"
            ]
          },
          {
            "id": "stet-sci-t3",
            "chapterId": "stet-sci-c1",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Universal Gravitation, Free Fall & Buoyancy",
            "order": 2,
            "notes": "Newton's Universal Law of Gravitation: F = G(m₁m₂)/r², where universal gravitational constant G = 6.67 × 10^(-11) N·m²/kg². Acceleration due to gravity at Earth's surface: g = GM/R² ≈ 9.8 m/s².\n\nMass is constant everywhere; Weight W = mg varies with local g. Value of g is zero at the centre of Earth and maximum at the poles. Archimedes' Principle: When a body is submerged in fluid, it experiences an upward buoyant force equal to the weight of fluid displaced.",
            "concepts": [
              "Gravitational constant G is universal (same everywhere); g varies with position.",
              "g is maximum at poles and minimum at equator due to Earth's equatorial bulge.",
              "Weight at moon is approximately 1/6th of weight on Earth (g_moon = g_earth / 6).",
              "Archimedes' Principle: Buoyant force = Weight of displaced fluid = V × ρ × g."
            ],
            "formulas": [
              "F = G(m₁m₂) / r² (G = 6.674 × 10⁻¹¹ N·m²/kg²)",
              "g = GM / R² ≈ 9.8 m/s²",
              "W = mg; W_moon = W_earth / 6",
              "F_buoyant = V_displaced × ρ_fluid × g"
            ],
            "solvedExamples": [
              {
                "problem": "An object has a mass of 60 kg on Earth. What will be its mass and weight on the Moon?",
                "solution": "Mass is invariant: Mass on Moon = 60 kg.\nWeight on Earth = 60 × 9.8 = 588 N.\nWeight on Moon = 588 / 6 = 98 N."
              }
            ],
            "keyTakeaways": [
              "Mass never changes; only weight changes with local gravitational field.",
              "g = 0 at the center of Earth (apparent weightlessness).",
              "Flotation rule: Object floats if its density is less than or equal to fluid density."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 10 (Gravitation)",
            "pyqIds": [
              "stet-q-0760",
              "stet-q-0761",
              "stet-q-0762",
              "stet-q-0763",
              "stet-q-0764",
              "stet-q-0765",
              "stet-q-0766",
              "stet-q-0767"
            ]
          },
          {
            "id": "stet-sci-t4",
            "chapterId": "stet-sci-c1",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Work, Kinetic Energy, Potential Energy & Power",
            "order": 3,
            "notes": "Work done is defined as the product of force and displacement in the direction of force: W = F * s * cos θ (SI unit: Joule, J). Work is zero if displacement is perpendicular to force (e.g., coolie carrying load on head on horizontal platform).\n\nKinetic energy KE = (1/2)mv². Gravitational potential energy PE = mgh. Law of Conservation of Energy: Total mechanical energy (KE + PE) of an isolated system remains constant in free fall. Power is the rate of doing work: P = W / t (SI unit: Watt, W; 1 Horsepower = 746 W; 1 kWh = 3.6 × 10⁶ J).",
            "concepts": [
              "Work = F × s × cos θ. Work is zero when force is perpendicular to displacement (cos 90° = 0).",
              "Kinetic Energy = (1/2)mv²; proportional to square of speed.",
              "Potential Energy = mgh (depends on height relative to reference plane).",
              "Power P = Work / Time (Watt); 1 kWh = 3.6 × 10⁶ J."
            ],
            "formulas": [
              "W = F × s × cos θ",
              "KE = (1/2)mv²",
              "PE = mgh",
              "P = W / t; 1 hp = 746 W",
              "1 kWh = 3.6 × 10⁶ J"
            ],
            "solvedExamples": [
              {
                "problem": "If the speed of a vehicle is doubled, how does its kinetic energy change?",
                "solution": "KE = (1/2)mv². When speed v becomes 2v: KE' = (1/2)m(2v)² = 4 × (1/2)mv² = 4 KE. Kinetic energy quadruples."
              }
            ],
            "keyTakeaways": [
              "Centripetal force does zero work on circular orbits (force ⊥ displacement).",
              "Doubling velocity quadruples kinetic energy.",
              "Commercial unit of electric energy: 1 Board of Trade Unit = 1 kWh = 3.6 × 10⁶ J."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 11 (Work and Energy)",
            "pyqIds": [
              "stet-q-0792",
              "stet-q-0793",
              "stet-q-0794",
              "stet-q-0795",
              "stet-q-0796",
              "stet-q-0797",
              "stet-q-0798",
              "stet-q-0799"
            ]
          },
          {
            "id": "stet-sci-t5",
            "chapterId": "stet-sci-c1",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Sound: Wave Parameters, Echo, Sonar & Ultrasound",
            "order": 4,
            "notes": "Sound is a mechanical longitudinal wave requiring a material medium for propagation; it cannot travel through vacuum. In air, speed of sound is approximately 343 m/s at 20°C (speed in solids > liquids > gases). Wave equation: v = f * λ (Speed = Frequency * Wavelength).\n\nHuman audible frequency range: 20 Hz to 20,000 Hz (20 kHz). Infrasonic: < 20 Hz (whales, elephants, earthquakes); Ultrasonic: > 20 kHz (bats, dolphins, medical ultrasound, SONAR). Echo requires minimum distance of 17.2 m in air (due to 0.1 s persistence of hearing).",
            "concepts": [
              "Sound is longitudinal; mechanical wave requiring a medium (cannot travel in vacuum).",
              "Speed hierarchy: Solids > Liquids > Gases (fastest in steel/iron, slowest in air).",
              "Audible range: 20 Hz to 20 kHz. Pitch depends on frequency; Loudness on amplitude².",
              "Echo condition: Minimum distance to reflector = (v × 0.1) / 2 ≈ 17.2 m in air.",
              "SONAR uses ultrasound reflection: 2d = v × t."
            ],
            "formulas": [
              "v = f × λ (Speed = Frequency × Wavelength)",
              "Time period T = 1 / f",
              "Echo distance: 2d = v × t => d = (v × t) / 2",
              "SONAR depth: d = (v × t) / 2"
            ],
            "solvedExamples": [
              {
                "problem": "A SONAR device sends out ultrasound that returns from the seabed in 3.4 seconds. If the speed of sound in seawater is 1500 m/s, find depth of the sea.",
                "solution": "2d = v × t => 2d = 1500 × 3.4 = 5100 m => d = 5100 / 2 = 2550 m (2.55 km)."
              }
            ],
            "keyTakeaways": [
              "Sound cannot propagate through a vacuum.",
              "Persistence of human hearing is 0.1 s; minimum echo distance in air is 17.2 m.",
              "Loudness is proportional to the square of vibration amplitude (L ∝ A²)."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 12 (Sound)",
            "pyqIds": [
              "stet-q-0824",
              "stet-q-0825",
              "stet-q-0826",
              "stet-q-0827",
              "stet-q-0828",
              "stet-q-0829",
              "stet-q-0830",
              "stet-q-0831"
            ]
          }
        ]
      },
      {
        "id": "stet-sci-c2",
        "subjectId": "stet-sci",
        "examId": "bihar-stet-p1",
        "title": "Physics: Optics, Electricity & Magnetism",
        "order": 2,
        "topics": [
          {
            "id": "stet-sci-t6",
            "chapterId": "stet-sci-c2",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Refraction of Light, Snell's Law & Lens Formula",
            "order": 1,
            "notes": "Refraction is the bending of light as it passes from one optical medium to another due to change in wave speed. Snell's Law: (sin i) / (sin r) = n₂/n₁ = constant. Absolute refractive index n = c / v (speed in vacuum / speed in medium).\n\nWhen light travels from rarer to denser medium, it bends toward the normal; from denser to rarer, away from the normal. Thin Lens Formula: 1/f = 1/v - 1/u. Magnification m = v / u = h_i / h_o. Power of lens P = 1 / f(in metres) (Dioptre, D).",
            "concepts": [
              "Snell's Law: n₁ sin i = n₂ sin r.",
              "Refractive index n = c / v (Higher n indicates optically denser medium with slower light).",
              "Lens formula: 1/f = 1/v - 1/u (Minus sign differentiates it from mirror formula).",
              "Power P = 1 / f(m). Convex lens has +P; Concave lens has -P."
            ],
            "formulas": [
              "n = c / v",
              "n₁ sin i = n₂ sin r",
              "1/f = 1/v - 1/u",
              "m = v / u = h_i / h_o",
              "P = 1 / f (in metres)"
            ],
            "solvedExamples": [
              {
                "problem": "Find the focal length and type of a lens having power -2.0 D.",
                "solution": "f = 1 / P = 1 / (-2.0) = -0.5 m = -50 cm.\nSince focal length is negative, it is a concave (diverging) lens."
              }
            ],
            "keyTakeaways": [
              "Convex lenses have positive focal lengths; concave lenses have negative focal lengths.",
              "Lens formula has a MINUS sign: 1/f = 1/v - 1/u.",
              "Power in Dioptres strictly requires focal length in metres."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 10 (Light - Reflection and Refraction)",
            "pyqIds": [
              "stet-q-0856",
              "stet-q-0857",
              "stet-q-0858",
              "stet-q-0859",
              "stet-q-0860",
              "stet-q-0861",
              "stet-q-0862",
              "stet-q-0863"
            ]
          },
          {
            "id": "stet-sci-t7",
            "chapterId": "stet-sci-c2",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Human Eye: Power of Accommodation & Vision Defects",
            "order": 2,
            "notes": "The human eye forms a real, inverted image on the retina. The Ciliary muscles adjust lens curvature for clear vision (Power of Accommodation). Near point of normal human eye is 25 cm; far point is infinity.\n\nVision defects:\n1. Myopia (Short-sightedness): Can see nearby objects clearly but distant objects blurred; image forms in front of retina. Corrected with CONCAVE lens.\n2. Hypermetropia (Far-sightedness): Distant objects clear, near objects blurred; image forms behind retina. Corrected with CONVEX lens.\n3. Presbyopia: Age-related loss of accommodation. Corrected with Bi-focal lens (upper concave, lower convex).",
            "concepts": [
              "Retina acts as light-sensitive screen containing rods (dim light) and cones (color).",
              "Normal vision: Least distance of distinct vision is 25 cm.",
              "Myopia: Eyeball too long or lens too curved; corrected with Concave lens (-D).",
              "Hypermetropia: Eyeball too short or lens too flat; corrected with Convex lens (+D).",
              "Presbyopia corrected with bifocal lenses."
            ],
            "solvedExamples": [
              {
                "problem": "A student cannot read the blackboard clearly while sitting in the last bench. Name the defect and the corrective lens required.",
                "solution": "The student suffers from Myopia (short-sightedness). It is corrected using spectacles with a Concave (diverging) lens of suitable power."
              }
            ],
            "keyTakeaways": [
              "Myopia -> Concave lens; Hypermetropia -> Convex lens.",
              "Near point for a healthy adult eye is exactly 25 cm.",
              "Dispersion of white light by prism splits light into VIBGYOR (Red bends least, Violet most)."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 11 (The Human Eye and the Colourful World)",
            "pyqIds": [
              "stet-q-0888",
              "stet-q-0889",
              "stet-q-0890",
              "stet-q-0891",
              "stet-q-0892",
              "stet-q-0893",
              "stet-q-0894",
              "stet-q-0895"
            ]
          },
          {
            "id": "stet-sci-t8",
            "chapterId": "stet-sci-c2",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Ohm's Law, Resistivity & Electrical Circuits",
            "order": 3,
            "notes": "Ohm's Law: At constant temperature, current I flowing through a metallic conductor is directly proportional to potential difference V across its ends: V = IR.\n\nResistance R = ρ(L / A), where ρ is electrical resistivity of the material (SI unit: Ω·m). In series connection: R_eq = R₁ + R₂ + R₃ (same current through all resistors). In parallel connection: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ (same voltage across all branches; total resistance is less than the smallest individual resistor).",
            "concepts": [
              "Ohm's Law: V = IR (Linear V-I graph with slope = Resistance R).",
              "Resistance factors: R ∝ L, R ∝ 1/A => R = ρL/A.",
              "Resistivity ρ is an intrinsic material property, independent of length or area.",
              "Series circuit: Current is identical; R_eq = ∑R_i.",
              "Parallel circuit: Voltage is identical; 1/R_eq = ∑(1/R_i)."
            ],
            "formulas": [
              "V = I × R",
              "R = ρ × L / A",
              "R_series = R₁ + R₂ + ...",
              "1/R_parallel = 1/R₁ + 1/R₂ + ...",
              "Electric Power: P = VI = I²R = V² / R"
            ],
            "solvedExamples": [
              {
                "problem": "A wire of resistance R is stretched to double its original length. What is its new resistance?",
                "solution": "When length doubles (L' = 2L), volume remains constant (A' = A/2).\nNew resistance R' = ρ(2L) / (A/2) = 4 × (ρL/A) = 4R. Resistance quadruples."
              }
            ],
            "keyTakeaways": [
              "Stretching a wire to n times length increases resistance by n².",
              "Domestic electrical circuits are always wired in parallel.",
              "Resistivity of alloys is higher than pure metals, making them ideal for heating coils."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 12 (Electricity)",
            "pyqIds": [
              "stet-q-0920",
              "stet-q-0921",
              "stet-q-0922",
              "stet-q-0923",
              "stet-q-0924",
              "stet-q-0925",
              "stet-q-0926",
              "stet-q-0927"
            ]
          },
          {
            "id": "stet-sci-t9",
            "chapterId": "stet-sci-c2",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Magnetic Effects: Right-Hand Rule, Solenoid & Induction",
            "order": 4,
            "notes": "Magnetic field lines form closed, continuous curves directed from North to South outside a magnet, and South to North inside. Maxwell's Right-Hand Thumb Rule gives field direction around straight current wire. A solenoid is a long coil of insulated wire; its magnetic field is uniform inside, resembling a bar magnet.\n\nFleming's Left-Hand Rule predicts force direction on a current conductor in magnetic field (used in Electric Motors): Thumb = Motion, Forefinger = Field, Middle = Current. Faraday's Electromagnetic Induction: A changing magnetic flux induces electric current in a coil (Fleming's Right-Hand Rule, used in Electric Generators).",
            "concepts": [
              "Right-Hand Thumb Rule: Thumb in current direction; fingers curl in magnetic field line direction.",
              "Inside a solenoid, magnetic field lines are parallel and uniform.",
              "Fleming's Left-Hand Rule: Motion (Thumb), Field (Index), Current (Middle) -> Motors.",
              "Fleming's Right-Hand Rule: Motion, Field, Induced Current -> Generators.",
              "Earthing wire (Green insulation) protects from severe electric shock due to leakage."
            ],
            "keyTakeaways": [
              "Left-hand rule = Motor (electrical to mechanical energy).",
              "Right-hand rule = Generator (mechanical to electrical energy).",
              "Magnetic field inside a long current-carrying solenoid is completely uniform."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 13 (Magnetic Effects of Electric Current)",
            "pyqIds": [
              "stet-q-0952",
              "stet-q-0953",
              "stet-q-0954",
              "stet-q-0955",
              "stet-q-0956",
              "stet-q-0957",
              "stet-q-0958",
              "stet-q-0959"
            ]
          }
        ]
      },
      {
        "id": "stet-sci-c3",
        "subjectId": "stet-sci",
        "examId": "bihar-stet-p1",
        "title": "Chemistry: Chemical Reactions, Acids & Carbon",
        "order": 3,
        "topics": [
          {
            "id": "stet-sci-t10",
            "chapterId": "stet-sci-c3",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Chemical Reactions: Balancing & Types of Reactions",
            "order": 1,
            "notes": "A chemical reaction follows the Law of Conservation of Mass: number of atoms of each element must be equal on both sides of a balanced chemical equation.\n\nTypes of reactions:\n1. Combination: A + B -> AB (e.g., CaO + H₂O -> Ca(OH)₂ slaked lime, highly exothermic).\n2. Decomposition: AB -> A + B (Thermal: CaCO₃ -> CaO + CO₂; Electrolytic: 2H₂O -> 2H₂ + O₂; Photolytic: 2AgCl -> 2Ag + Cl₂ in sunlight).\n3. Displacement: Fe + CuSO₄ -> FeSO₄ + Cu.\n4. Double Displacement: Precipitation reactions (Na₂SO₄ + BaCl₂ -> BaSO₄↓ white ppt + 2NaCl).\n5. Redox: Oxidation (gain of oxygen/loss of electrons) and Reduction (loss of oxygen/gain of electrons) occur simultaneously.",
            "concepts": [
              "Balancing equations satisfies the Law of Conservation of Mass.",
              "Photolytic decomposition of AgCl/AgBr is used in black-and-white photography.",
              "Double displacement reactions typically precipitate an insoluble ionic salt.",
              "Redox: Oxidizing agent gets reduced; Reducing agent gets oxidized."
            ],
            "formulas": [
              "CaO + H₂O -> Ca(OH)₂ + Heat (Slaked lime)",
              "2AgCl (white) + Sunlight -> 2Ag (grey) + Cl₂ (Photolytic)",
              "Na₂SO₄ + BaCl₂ -> BaSO₄↓ + 2NaCl"
            ],
            "solvedExamples": [
              {
                "problem": "Identify the oxidizing and reducing agent in: CuO + H₂ -> Cu + H₂O.",
                "solution": "CuO loses oxygen to become Cu (Reduced); therefore, CuO is the Oxidizing Agent.\nH₂ gains oxygen to become H₂O (Oxidized); therefore, H₂ is the Reducing Agent."
              }
            ],
            "keyTakeaways": [
              "Quicklime is CaO; Slaked lime is Ca(OH)₂; Limestone/Marble is CaCO₃.",
              "Precipitation of BaSO₄ is white.",
              "Oxidizing agent causes oxidation by itself undergoing reduction."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 1 (Chemical Reactions and Equations)",
            "pyqIds": [
              "stet-q-0984",
              "stet-q-0985",
              "stet-q-0986",
              "stet-q-0987",
              "stet-q-0988",
              "stet-q-0989",
              "stet-q-0990",
              "stet-q-0991"
            ]
          },
          {
            "id": "stet-sci-t12",
            "chapterId": "stet-sci-c3",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Metals, Non-metals, Reactivity & Metallurgy Principles",
            "order": 2,
            "notes": "Metals form positive ions (cations) by losing electrons; non-metals form negative ions (anions) by gaining electrons. Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au. Sodium and Potassium are stored in kerosene to prevent vigorous oxidation with air and water.\n\nMetallurgy involves: Concentration of ore, Roasting (heating sulfide ores in excess air), Calcination (heating carbonate ores in limited air), and Reduction. Thermite reaction (Fe₂O₃ + 2Al -> 2Fe + Al₂O₃ + Heat) produces molten iron used for welding railway tracks.",
            "concepts": [
              "Sodium and potassium react vigorously with cold water and are stored under kerosene.",
              "Calcination heats carbonate ores in limited air (produces CO₂).",
              "Roasting heats sulfide ores in excess air (produces SO₂).",
              "Thermite reaction uses aluminium reduction of iron(III) oxide to weld railway tracks."
            ],
            "formulas": [
              "Calcination: ZnCO₃ -> ZnO + CO₂",
              "Roasting: 2ZnS + 3O₂ -> 2ZnO + 2SO₂",
              "Thermite: Fe₂O₃ + 2Al -> 2Fe + Al₂O₃ + Heat"
            ],
            "solvedExamples": [
              {
                "problem": "Distinguish between roasting and calcination in metallurgy.",
                "solution": "Roasting is heating sulfide ores strongly in the presence of excess air (releasing SO₂). Calcination is heating carbonate or hydrated ores in limited air/absence of air (releasing CO₂ or moisture)."
              }
            ],
            "keyTakeaways": [
              "Calcination applies to carbonates; Roasting applies to sulfides.",
              "Thermite reaction uses Aluminium as the reducing agent.",
              "Amalgam is an alloy containing Mercury."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 3 (Metals and Non-metals)",
            "pyqIds": [
              "stet-q-1016",
              "stet-q-1017",
              "stet-q-1018",
              "stet-q-1019",
              "stet-q-1020",
              "stet-q-1021",
              "stet-q-1022",
              "stet-q-1023"
            ]
          },
          {
            "id": "stet-sci-t14",
            "chapterId": "stet-sci-c3",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Periodic Classification: Modern Periodic Table & Periodic Trends",
            "order": 3,
            "notes": "Mendeleev's Periodic Law arranged elements by atomic mass; Modern Periodic Law (Henry Moseley, 1913) arranges elements by increasing ATOMIC NUMBER (Z): 'Properties of elements are periodic functions of their atomic numbers'. The Modern Periodic Table has 18 vertical Groups and 7 horizontal Periods.\n\nPeriodic Trends:\n1. Valency: Increases from 1 to 4 then decreases to 0 across a period; remains constant down a group.\n2. Atomic Size: Decreases across a period (due to increasing nuclear charge pulling electrons inward); increases down a group (due to addition of new electron shells).\n3. Metallic Character: Decreases across a period; increases down a group.\n4. Electronegativity: Increases across a period; decreases down a group (Fluorine is most electronegative).",
            "concepts": [
              "Modern Periodic Table is based on atomic number Z, not atomic mass.",
              "18 Groups and 7 Periods in the modern long form.",
              "Atomic radius decreases across a period and increases down a group.",
              "Metallic character increases down a group and decreases across a period.",
              "Fluorine is the most electronegative element in the periodic table."
            ],
            "solvedExamples": [
              {
                "problem": "Why does atomic radius decrease as we move from left to right across a period?",
                "solution": "Electrons are added to the same valence shell while the nuclear charge (number of protons) increases. The increased effective nuclear charge pulls valence electrons closer to the nucleus, shrinking atomic size."
              }
            ],
            "keyTakeaways": [
              "Modern table has 18 groups and 7 periods.",
              "Atomic radius: increases DOWN a group, decreases ACROSS a period.",
              "Inert gases belong to Group 18 and have complete octet electron configurations."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 5 (Periodic Classification of Elements)",
            "pyqIds": [
              "stet-q-1048",
              "stet-q-1049",
              "stet-q-1050",
              "stet-q-1051",
              "stet-q-1052",
              "stet-q-1053",
              "stet-q-1054",
              "stet-q-1055"
            ]
          }
        ]
      },
      {
        "id": "stet-sci-c4",
        "subjectId": "stet-sci",
        "examId": "bihar-stet-p1",
        "title": "Biology: Cell, Life Processes & Genetics",
        "order": 4,
        "topics": [
          {
            "id": "stet-sci-t15",
            "chapterId": "stet-sci-c4",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Cell Biology: Ultrastructure & Organelle Functions",
            "order": 1,
            "notes": "Cell is the fundamental structural and functional unit of life (Robert Hooke 1665; Cell Theory by Schleiden, Schwann, and Virchow: 'Omnis cellula e cellula'). Plasma membrane is selectively permeable (fluid mosaic model). Plant cells possess a rigid cellulose cell wall outside plasma membrane.\n\nOrganelles:\n- Mitochondria: Double-membraned powerhouse, site of ATP synthesis, has own DNA and ribosomes.\n- Plastids: Chloroplasts (photosynthesis), Chromoplasts (colored pigments), Leucoplasts (starch/oil storage).\n- Endoplasmic Reticulum: RER (ribosomes for protein synthesis), SER (lipid synthesis and drug detoxification).\n- Golgi Apparatus: Packaging, modification, and secretion of biomolecules; produces lysosomes.\n- Lysosomes: Contain hydrolytic enzymes, act as digestive system and autolytic 'suicide bags'.",
            "concepts": [
              "Mitochondria and Chloroplasts are semi-autonomous with their own circular DNA and 70S ribosomes.",
              "Lysosomes are 'suicide bags' containing hydrolytic enzymes active at acidic pH.",
              "Cellulose cell wall provides turgidity and prevents osmotic bursting in plant cells.",
              "Virchow added: all cells arise from pre-existing cells (Omnis cellula e cellula)."
            ],
            "keyTakeaways": [
              "Mitochondria and chloroplasts contain their own genetic material (DNA).",
              "Lysosomes destroy worn-out cellular organelles via autolysis.",
              "SER synthesizes lipids and detoxifies poisons in liver cells."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 5 (The Fundamental Unit of Life)",
            "pyqIds": [
              "stet-q-1080",
              "stet-q-1081",
              "stet-q-1082",
              "stet-q-1083",
              "stet-q-1084",
              "stet-q-1085",
              "stet-q-1086",
              "stet-q-1087"
            ]
          },
          {
            "id": "stet-sci-t16",
            "chapterId": "stet-sci-c4",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Plant and Animal Tissues: Meristematic, Permanent & Connective",
            "order": 2,
            "notes": "Plant tissues:\n1. Meristematic: Actively dividing cells (Apical at root/shoot tips for length, Lateral/Cambium for girth, Intercalary at internodes).\n2. Simple Permanent: Parenchyma (storage, unspecialized), Collenchyma (flexible mechanical support), Sclerenchyma (dead, lignified thick walls for rigidity, e.g., coconut husk).\n3. Complex Permanent (Vascular): Xylem (conducts water/minerals unidirectionally; Tracheids, Vessels, Xylem parenchyma, Xylem fibres) and Phloem (translocates organic solutes bidirectionally; Sieve tubes, Companion cells, Phloem parenchyma, Phloem fibres).\n\nAnimal tissues: Epithelial (covering), Connective (Blood - liquid matrix plasma; Bone - hard calcium matrix; Cartilage; Ligament - connects bone to bone; Tendon - connects muscle to bone), Muscular (Striated, Smooth, Cardiac), Nervous (Neurons).",
            "concepts": [
              "Ligaments connect bone to bone; Tendons connect muscle to bone.",
              "Xylem transport is unidirectional (root to shoot); Phloem translocation is multidirectional.",
              "Sclerenchyma cells are dead and thickened with lignin (gives hardness to coconut husk).",
              "Blood is a fluid connective tissue; matrix is liquid plasma without fibres."
            ],
            "keyTakeaways": [
              "Remember: Tendon = Muscle to Bone; Ligament = Bone to Bone.",
              "Xylem vessel elements are dead at maturity; companion cells of phloem are living.",
              "Cardiac muscles are striated, involuntary, and branched with intercalated discs."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 6 (Tissues)",
            "pyqIds": [
              "stet-q-1112",
              "stet-q-1113",
              "stet-q-1114",
              "stet-q-1115",
              "stet-q-1116",
              "stet-q-1117",
              "stet-q-1118",
              "stet-q-1119"
            ]
          },
          {
            "id": "stet-sci-t18",
            "chapterId": "stet-sci-c4",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Control and Coordination: Phytohormones & Nervous System",
            "order": 3,
            "notes": "Plant hormones (Phytohormones):\n- Auxin: Promotes cell elongation, apical dominance, and phototropism.\n- Gibberellins: Promotes stem elongation and seed germination.\n- Cytokinins: Promotes rapid cell division; delays leaf senescence.\n- Abscisic Acid (ABA): Stress hormone; inhibits growth, promotes stomatal closure and leaf wilting.\n- Ethylene: Gaseous hormone that accelerates fruit ripening.\n\nHuman nervous system: Central Nervous System (Brain and Spinal cord) and Peripheral Nervous System. Reflex arc: Receptor -> Sensory neuron -> Relay neuron (Spinal cord) -> Motor neuron -> Effector muscle.",
            "concepts": [
              "Auxin accumulates on shaded side of shoot, causing differential growth toward light (Phototropism).",
              "Abscisic acid (ABA) is a plant growth inhibitor and stress hormone.",
              "Reflex arc path bypasses conscious brain processing for immediate protective response.",
              "Synapse is the functional microscopic junction between two neurons where neurotransmitters cross."
            ],
            "solvedExamples": [
              {
                "problem": "Which plant hormone is responsible for the wilting and falling of yellow leaves?",
                "solution": "Abscisic acid (ABA), as it is a natural plant growth inhibitor that induces abscission and dormancy."
              }
            ],
            "keyTakeaways": [
              "Auxin promotes cell elongation and phototropism.",
              "Ethylene is the only gaseous hormone (ripens fruit).",
              "Reflex arcs are mediated at the level of the spinal cord."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 7 (Control and Coordination)",
            "pyqIds": [
              "stet-q-1144",
              "stet-q-1145",
              "stet-q-1146",
              "stet-q-1147",
              "stet-q-1148",
              "stet-q-1149",
              "stet-q-1150",
              "stet-q-1151"
            ]
          },
          {
            "id": "stet-sci-t20",
            "chapterId": "stet-sci-c4",
            "subjectId": "stet-sci",
            "examId": "bihar-stet-p1",
            "title": "Ecosystem, Trophic Levels, 10% Law & Environmental Conservation",
            "order": 4,
            "notes": "An ecosystem consists of biotic communities (producers, consumers, decomposers) interacting with abiotic physical factors (soil, temperature, water, light). Trophic levels: T1 Producers -> T2 Primary consumers (Herbivores) -> T3 Secondary consumers -> T4 Tertiary consumers.\n\nLindeman's 10% Law of Energy: Only approximately 10% of energy entering a trophic level is transferred to the next higher trophic level; 90% is dissipated as metabolic heat. Biological Magnification: Progressive accumulation of non-biodegradable toxins (DDT) at progressively higher trophic levels in a food chain (top predators suffer highest concentration).",
            "concepts": [
              "Energy flow in an ecosystem is strictly unidirectional (Solar -> Producers -> Consumers).",
              "Lindeman's 10% Law: Only 10% of chemical energy passes to the next trophic level.",
              "Biological Magnification: Toxic chemical concentration increases at successive trophic levels.",
              "Decomposers recycle nutrients back to abiotic reservoir (prevent nutrient dead-locks)."
            ],
            "formulas": [
              "Energy at T_(n+1) = Energy at T_n × 0.10"
            ],
            "solvedExamples": [
              {
                "problem": "If 20,000 J of energy is trapped by producers in a terrestrial food chain, how much energy will be available to the tertiary consumer?",
                "solution": "T1 (Producers): 20,000 J\nT2 (Herbivores): 20,000 × 0.10 = 2,000 J\nT3 (Secondary consumers): 2,000 × 0.10 = 200 J\nT4 (Tertiary consumers): 200 × 0.10 = 20 J."
              }
            ],
            "keyTakeaways": [
              "Energy flow is strictly unidirectional; nutrients cycle cyclically.",
              "Top carnivores have the highest toxin concentration due to biomagnification.",
              "Food chains rarely exceed 4-5 trophic levels due to 10% energy dissipation."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 15 (Our Environment)",
            "pyqIds": [
              "stet-q-1176",
              "stet-q-1177",
              "stet-q-1178",
              "stet-q-1179",
              "stet-q-1180",
              "stet-q-1181",
              "stet-q-1182",
              "stet-q-1183"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "stet-ped",
    "examId": "bihar-stet-p1",
    "name": "Art of Teaching & Pedagogy",
    "code": "STET-AOT-50",
    "iconName": "BookOpen",
    "description": "50-mark common mandatory section for Bihar STET covering Teaching Methodology, Bloom's Taxonomy, Classroom Management, and Environmental Aptitude.",
    "chapters": [
      {
        "id": "stet-ped-c1",
        "subjectId": "stet-ped",
        "examId": "bihar-stet-p1",
        "title": "Art of Teaching & Pedagogical Competence",
        "order": 1,
        "topics": [
          {
            "id": "stet-ped-t1",
            "chapterId": "stet-ped-c1",
            "subjectId": "stet-ped",
            "examId": "bihar-stet-p1",
            "title": "Teaching-Learning Process: Concepts, Phases & Variables",
            "order": 1,
            "notes": "Teaching is a goal-oriented tripolar process involving Teacher, Student, and Curriculum. Philip Jackson defined three distinct phases of teaching:\n1. Pre-active Phase: Planning, formulating instructional objectives, sequencing content.\n2. Interactive Phase: Execution in the classroom, questioning, stimulus variation, feedback.\n3. Post-active Phase: Evaluation, diagnosing learning outcomes, reflecting and modifying pedagogical strategies.\n\nVariables of teaching: Independent variable (Teacher), Dependent variable (Learner), and Intervening variable (Learning environment, instructional materials).",
            "concepts": [
              "Tripolar process: Teacher, Learner, and Curriculum (John Dewey).",
              "Pre-active phase: Lesson planning and setting behavioral objectives.",
              "Interactive phase: Direct classroom instructional execution and questioning.",
              "Post-active phase: Assessment, feedback, and pedagogical reflection."
            ],
            "keyTakeaways": [
              "Teacher is the independent variable; Student is the dependent variable.",
              "Teaching phases: Pre-active (planning), Interactive (execution), Post-active (evaluation).",
              "Effective teaching creates learner autonomy rather than teacher dependence."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "B.Ed Teaching Methodology Manual & BSEB Guidelines",
            "pyqIds": [
              "stet-q-0004",
              "stet-q-1208",
              "stet-q-1209",
              "stet-q-1210",
              "stet-q-1211",
              "stet-q-1212",
              "stet-q-1213",
              "stet-q-1214"
            ]
          },
          {
            "id": "stet-ped-t2",
            "chapterId": "stet-ped-c1",
            "subjectId": "stet-ped",
            "examId": "bihar-stet-p1",
            "title": "Bloom's Revised Taxonomy & HOTS",
            "order": 2,
            "notes": "Benjamin Bloom (1956), revised by Lorin Anderson & David Krathwohl (2001), classified cognitive educational objectives into a six-level hierarchy using action verbs:\n1. Remembering: Retrieving relevant knowledge from long-term memory.\n2. Understanding: Constructing meaning from oral, written, and graphic messages.\n3. Applying: Carrying out or using a procedure in a given situation.\n4. Analyzing: Breaking material into constituent parts and determining relationships.\n5. Evaluating: Making judgments based on criteria and standards.\n6. Creating: Putting elements together to form a novel, coherent whole (Highest cognitive level).\n\nLower Order Thinking Skills (LOTS): Remembering, Understanding, Applying. Higher Order Thinking Skills (HOTS): Analyzing, Evaluating, Creating.",
            "concepts": [
              "Cognitive domain hierarchy: Remembering -> Understanding -> Applying -> Analyzing -> Evaluating -> Creating.",
              "Creating replaced Evaluation as the apex level in the 2001 revision.",
              "HOTS questions encourage divergent reasoning, analysis, and synthesis.",
              "Affective domain (Krathwohl): Receiving, Responding, Valuing, Organizing, Characterizing."
            ],
            "keyTakeaways": [
              "Creating is the highest cognitive level in Bloom's revised taxonomy.",
              "Use action verbs to formulate measurable learning objectives.",
              "HOTS questions cannot be answered by textbook rote recall alone."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "Anderson & Krathwohl (2001) Cognitive Taxonomy",
            "pyqIds": [
              "stet-q-0004",
              "stet-q-1208",
              "stet-q-1209",
              "stet-q-1210",
              "stet-q-1211",
              "stet-q-1212",
              "stet-q-1213",
              "stet-q-1214"
            ]
          },
          {
            "id": "stet-ped-t3",
            "chapterId": "stet-ped-c1",
            "subjectId": "stet-ped",
            "examId": "bihar-stet-p1",
            "title": "Teaching Methods: Inductive-Deductive, Project & Heuristic",
            "order": 3,
            "notes": "Core teaching methodologies:\n1. Inductive Method: From concrete examples to general rule/law (Particular to General, Concrete to Abstract). Fosters scientific inquiry and active discovery.\n2. Deductive Method: From general formula to specific verification (General to Particular, Abstract to Concrete). Fast and time-saving for algorithmic problem-solving.\n3. Project Method (William Kilpatrick / Dewey): Purposeful, real-life activity carried out in natural settings.\n4. Heuristic Method (H.E. Armstrong): Student placed in the position of an original discoverer ('Heurisco' = I find out).",
            "concepts": [
              "Inductive: Concrete -> Abstract, Example -> Rule, Particular -> General.",
              "Deductive: Abstract -> Concrete, Rule -> Application, General -> Particular.",
              "Project Method: Purposeful activity completed in social/natural environment (Kilpatrick).",
              "Heuristic Method: Student as independent investigator/discoverer (Armstrong)."
            ],
            "solvedExamples": [
              {
                "problem": "A mathematics teacher presents 5 right triangles, measures sides, shows a² + b² = c² in each, and concludes Pythagoras theorem. Which method was used?",
                "solution": "Inductive Method, because the teacher guided students from concrete specific examples to the formulation of a general law."
              }
            ],
            "keyTakeaways": [
              "Inductive is best for introducing new concepts; Deductive is best for rapid practice.",
              "Project method emphasizes learning by doing and social participation.",
              "Heuristic method fosters self-reliance and discovery."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "B.Ed Pedagogy & Teaching Methods Curriculum",
            "pyqIds": [
              "stet-q-0004",
              "stet-q-1208",
              "stet-q-1209",
              "stet-q-1210",
              "stet-q-1211",
              "stet-q-1212",
              "stet-q-1213",
              "stet-q-1214"
            ]
          },
          {
            "id": "stet-ped-t6",
            "chapterId": "stet-ped-c1",
            "subjectId": "stet-ped",
            "examId": "bihar-stet-p1",
            "title": "Classroom Management & Inclusive Education Practices",
            "order": 4,
            "notes": "Inclusive education ensures that all students, regardless of physical, intellectual, social, linguistic, or cultural differences, learn together in the same general classroom. Differentiation of instruction provides multiple access points for diverse learners.\n\nPrinciples of classroom management: Establishing clear democratic norms, positive reinforcement, minimizing idle transition time, practicing active listening, and implementing Universal Design for Learning (UDL: Multiple means of engagement, representation, and action/expression).",
            "concepts": [
              "Inclusion: School adapts to the child's needs, not the child adapting to the school.",
              "Universal Design for Learning (UDL): Representation, Expression, and Engagement.",
              "Differentiated instruction adjusts content, process, and product according to learner readiness.",
              "Democratic classroom management values student agency and mutual respect."
            ],
            "keyTakeaways": [
              "Inclusion does not segregate; all learners participate in the common classroom.",
              "UDL provides multiple pathways to demonstrate mastery.",
              "Proactive management prevents disruptions better than reactive punishment."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "RPwD Act 2016 & NEP 2020 Inclusive Education Framework",
            "pyqIds": [
              "stet-q-1240",
              "stet-q-1241",
              "stet-q-1242",
              "stet-q-1243",
              "stet-q-1244",
              "stet-q-1245",
              "stet-q-1246",
              "stet-q-1247"
            ]
          }
        ]
      },
      {
        "id": "stet-ped-c2",
        "subjectId": "stet-ped",
        "examId": "bihar-stet-p1",
        "title": "General Knowledge & Environmental Aptitude",
        "order": 2,
        "topics": [
          {
            "id": "stet-ped-t7",
            "chapterId": "stet-ped-c2",
            "subjectId": "stet-ped",
            "examId": "bihar-stet-p1",
            "title": "Environmental Science, Climate Change & Biodiversity Treaties",
            "order": 1,
            "notes": "Global environmental issues and international agreements:\n- Greenhouse Effect: Trapping of infrared radiation by CO₂, CH₄, N₂O, and water vapor.\n- Ozone Layer Depletion: CFCs release chlorine free radicals that catalyze ozone destruction in the stratosphere; Montreal Protocol (1987) successfully phased out CFCs.\n- Paris Agreement (2015): Aims to limit global warming below 2°C (preferably 1.5°C) above pre-industrial levels.\n- Ramsar Convention (1971): Conservation and sustainable utilization of wetlands (Bihar's Kanwar Lake is a Ramsar site).",
            "concepts": [
              "Montreal Protocol (1987): Phased out ozone-depleting chlorofluorocarbons (CFCs).",
              "Kyoto Protocol & Paris Agreement: Greenhouse gas reduction and climate mitigation.",
              "Ramsar Convention: Conservation of ecologically sensitive wetlands.",
              "Stratospheric ozone is beneficial ('good ozone'); Tropospheric ozone is a pollutant."
            ],
            "keyTakeaways": [
              "Montreal Protocol protects the stratospheric ozone layer.",
              "Kanwar Lake (Begusarai, Bihar) is a designated Ramsar wetland.",
              "Paris Agreement sets the 1.5°C global temperature rise ambition."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Environmental Studies & UNEP Overview",
            "pyqIds": [
              "stet-q-1272",
              "stet-q-1273",
              "stet-q-1274",
              "stet-q-1275",
              "stet-q-1276",
              "stet-q-1277",
              "stet-q-1278",
              "stet-q-1279"
            ]
          },
          {
            "id": "stet-ped-t8",
            "chapterId": "stet-ped-c2",
            "subjectId": "stet-ped",
            "examId": "bihar-stet-p1",
            "title": "NEP 2020 Framework & General Mental Ability",
            "order": 2,
            "notes": "National Education Policy (NEP 2020) replaces the 10+2 system with a 5+3+3+4 pedagogical structure:\n- Foundational Stage (5 yrs: ages 3-8): Anganwadi/Pre-school (3 yrs) + Classes 1-2 (2 yrs); play-based learning.\n- Preparatory Stage (3 yrs: ages 8-11): Classes 3 to 5; experiential learning.\n- Middle Stage (3 yrs: ages 11-14): Classes 6 to 8; subject-oriented learning and vocational exposure.\n- Secondary Stage (4 yrs: ages 14-18): Classes 9 to 12; multidisciplinary flexibility without rigid stream separations.\n\nGeneral mental ability evaluates numerical reasoning, syllogisms, analogies, and logical sequencing.",
            "concepts": [
              "NEP 2020 curricular structure: 5 + 3 + 3 + 4.",
              "Mother tongue / regional language as medium of instruction at least till Grade 5.",
              "PARAKH: National assessment center for standard-setting and holistic progress cards.",
              "Logical deduction: Syllogistic conclusions must strictly follow given premise constraints."
            ],
            "keyTakeaways": [
              "New curricular design: 5 (Foundational) + 3 (Preparatory) + 3 (Middle) + 4 (Secondary).",
              "Removal of rigid separations between arts and sciences streams.",
              "PARAKH oversees holistic 360-degree assessment."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "National Education Policy 2020 Official Document",
            "pyqIds": [
              "stet-q-1272",
              "stet-q-1273",
              "stet-q-1274",
              "stet-q-1275",
              "stet-q-1276",
              "stet-q-1277",
              "stet-q-1278",
              "stet-q-1279"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-mid-math",
    "examId": "bpsc-tre-middle",
    "name": "Middle School Mathematics (Classes 6–8)",
    "code": "BPSC-MID-MATH",
    "iconName": "Shapes",
    "description": "BPSC TRE Middle School Mathematics covering Commercial Arithmetic, Algebra, Geometry, and Mensuration.",
    "chapters": [
      {
        "id": "bpsc-mid-math-c1",
        "subjectId": "bpsc-mid-math",
        "examId": "bpsc-tre-middle",
        "title": "Commercial Arithmetic: Time, Work & Proportion",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-mid-math-t1",
            "chapterId": "bpsc-mid-math-c1",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Unitary Method & Time and Work Equivalence",
            "order": 1,
            "notes": "Time and work problems are modeled using inverse variation: more people complete the same work in fewer days. The fundamental principle is that if a person can complete a piece of work in n days, their 1-day work rate is 1/n.\n\nWork Equivalence Formula: (M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂, where M is workforce, D is days, H is daily hours, and W is work output. When two workers A and B work together with individual times a and b, combined time is (a × b) / (a + b).",
            "concepts": [
              "If A completes work in n days, 1-day work of A = 1/n.",
              "Combined work rate: 1/T = 1/a + 1/b => T = (ab) / (a + b).",
              "Universal formula: (M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂.",
              "Wages are distributed in direct proportion to individual work contributions."
            ],
            "formulas": [
              "(M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂",
              "T_combined = (a × b) / (a + b)",
              "Total Work = LCM of individual time durations"
            ],
            "solvedExamples": [
              {
                "problem": "A can finish a task in 10 days and B can finish it in 15 days. In how many days can they complete it working together?",
                "solution": "Using LCM method: Total work = LCM(10, 15) = 30 units.\nA's efficiency = 30 / 10 = 3 units/day. B's efficiency = 30 / 15 = 2 units/day.\nCombined efficiency = 3 + 2 = 5 units/day.\nDays required = 30 / 5 = 6 days."
              }
            ],
            "keyTakeaways": [
              "Assume Total Work = LCM of individual times to avoid fraction arithmetic.",
              "Wages are proportional to work done, not simply time spent.",
              "Efficiency is inversely proportional to time taken."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 13 (Direct and Inverse Proportions)",
            "pyqIds": [
              "bpsc-mid-q-0004",
              "bpsc-mid-q-0116",
              "bpsc-mid-q-0117",
              "bpsc-mid-q-0118",
              "bpsc-mid-q-0119",
              "bpsc-mid-q-0120",
              "bpsc-mid-q-0121",
              "bpsc-mid-q-0122"
            ]
          },
          {
            "id": "bpsc-mid-math-t2",
            "chapterId": "bpsc-mid-math-c1",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Pipes and Cisterns, Relative Speed & Trains",
            "order": 2,
            "notes": "Pipes and cisterns problems follow time and work rules: Inlet pipe fills at rate +1/a; Outlet (drain/leak) empties at rate -1/b. Net rate = 1/a - 1/b.\n\nRelative speed:\n- Two objects moving in OPPOSITE directions: Relative speed = S₁ + S₂.\n- Two objects moving in the SAME direction: Relative speed = |S₁ - S₂|.\nTime for a train of length L to cross a stationary pole/man = L / S_train. Time to cross a platform/bridge of length P = (L + P) / S_train. Conversion: 1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h.",
            "concepts": [
              "Inlet pipe efficiency is positive (+); Drain/leak efficiency is negative (-).",
              "km/h to m/s conversion: Multiply by 5/18; m/s to km/h: Multiply by 18/5.",
              "Relative speed in opposite direction: S₁ + S₂; Same direction: S₁ - S₂.",
              "Passing a platform requires covering Distance = Length of Train + Length of Platform."
            ],
            "formulas": [
              "S (m/s) = S (km/h) × (5 / 18)",
              "Opposite direction speed = S₁ + S₂; Same direction = |S₁ - S₂|",
              "Time to cross platform = (L_train + L_platform) / Speed"
            ],
            "solvedExamples": [
              {
                "problem": "A 180 m long train traveling at 72 km/h crosses a 220 m long platform. Find time taken.",
                "solution": "Speed in m/s = 72 × (5/18) = 20 m/s.\nTotal distance = 180 + 220 = 400 m.\nTime = Distance / Speed = 400 / 20 = 20 seconds."
              }
            ],
            "keyTakeaways": [
              "Always convert speeds to m/s when train lengths are given in metres.",
              "Crossing a pole considers only the train's length; crossing a platform sums both lengths.",
              "Opposite direction speeds add together."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Commercial Mathematics Applications",
            "pyqIds": [
              "bpsc-mid-q-0005",
              "bpsc-mid-q-0153",
              "bpsc-mid-q-0154",
              "bpsc-mid-q-0155",
              "bpsc-mid-q-0156",
              "bpsc-mid-q-0157",
              "bpsc-mid-q-0158",
              "bpsc-mid-q-0159"
            ]
          },
          {
            "id": "bpsc-mid-math-t3",
            "chapterId": "bpsc-mid-math-c1",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Percentage, Profit, Loss & Successive Discounts",
            "order": 3,
            "notes": "Profit = Selling Price (SP) - Cost Price (CP). Loss = CP - SP. Profit% and Loss% are ALWAYS calculated on Cost Price: Profit% = (Profit / CP) × 100.\n\nDiscount is always calculated on Marked Price (MP): Discount = MP - SP; Discount% = (Discount / MP) × 100. Single equivalent discount for two successive discounts d₁% and d₂% is:\nD_net = [d₁ + d₂ - (d₁ × d₂) / 100] %.",
            "concepts": [
              "Profit% and Loss% are strictly based on CP, never on SP.",
              "Discount is strictly calculated on Marked Price (MP).",
              "Successive discount formula: d_net = d₁ + d₂ - (d₁ × d₂)/100.",
              "If Cost Price of x articles equals Selling Price of y articles: Gain% = [(x - y) / y] × 100."
            ],
            "formulas": [
              "Profit% = (Profit / CP) × 100",
              "SP = CP × (100 + P%) / 100 = CP × (100 - L%) / 100",
              "Discount% = (Discount / MP) × 100",
              "Net Successive Discount = d₁ + d₂ - (d₁d₂ / 100)"
            ],
            "solvedExamples": [
              {
                "problem": "Find the single discount equivalent to two successive discounts of 20% and 10%.",
                "solution": "D_net = 20 + 10 - (20 × 10) / 100 = 30 - 2 = 28%."
              }
            ],
            "keyTakeaways": [
              "Base of profit/loss is CP; base of discount is MP.",
              "Successive discounts of 20% and 10% give 28%, NOT 30%.",
              "False weight gain: Gain% = [Error / (True Value - Error)] × 100."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 8 (Comparing Quantities)",
            "pyqIds": [
              "bpsc-mid-q-0190",
              "bpsc-mid-q-0191",
              "bpsc-mid-q-0192",
              "bpsc-mid-q-0193",
              "bpsc-mid-q-0194",
              "bpsc-mid-q-0195",
              "bpsc-mid-q-0196",
              "bpsc-mid-q-0197"
            ]
          },
          {
            "id": "bpsc-mid-math-t4",
            "chapterId": "bpsc-mid-math-c1",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Simple Interest, Compound Interest & Depreciation",
            "order": 4,
            "notes": "Simple interest is linear: SI = (P * R * T) / 100. Compound interest compounds geometrically: Amount A = P(1 + R/100)^t.\n\nIn population growth: P_future = P_current(1 + R/100)^t. In machine depreciation: Value V = P(1 - R/100)^t. 2-year CI - SI difference formula D = P(R/100)²; 3-year CI - SI difference formula D₃ = P(R/100)² [3 + R/100].",
            "concepts": [
              "Simple Interest is constant every period; Compound Interest accelerates.",
              "Depreciation uses minus sign: V = P(1 - R/100)^t.",
              "2-year difference: D = P(R/100)².",
              "Half-yearly compounding doubles conversion periods and halves rate."
            ],
            "formulas": [
              "SI = (P × R × T) / 100",
              "A = P(1 + R/100)^t",
              "Depreciation: V = P(1 - R/100)^t",
              "CI₂ - SI₂ = P(R / 100)²"
            ],
            "solvedExamples": [
              {
                "problem": "The difference between CI and SI on a sum for 2 years at 8% per annum is ₹128. Find the principal.",
                "solution": "D = P(R/100)² => 128 = P(8/100)² = P(64 / 10000)\nP = (128 × 10000) / 64 = 2 × 10000 = ₹20,000."
              }
            ],
            "keyTakeaways": [
              "2-year CI - SI difference D = P(R/100)² directly solves principal without computing individual amounts.",
              "In depreciation, subtract rate: (1 - R/100).",
              "Compound interest grows exponentially."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 8",
            "pyqIds": [
              "bpsc-mid-q-0227",
              "bpsc-mid-q-0228",
              "bpsc-mid-q-0229",
              "bpsc-mid-q-0230",
              "bpsc-mid-q-0231",
              "bpsc-mid-q-0232",
              "bpsc-mid-q-0233",
              "bpsc-mid-q-0234"
            ]
          },
          {
            "id": "bpsc-mid-math-t5",
            "chapterId": "bpsc-mid-math-c1",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Ratio, Proportion, Partnership & Mixtures",
            "order": 5,
            "notes": "In business partnerships, profits are divided in direct proportion to the product of capital invested and duration of investment: Profit Ratio = (C₁ × T₁) : (C₂ × T₂).\n\nRule of Alligation for mixtures: When two ingredients at rates c (cheaper) and d (dearer) are mixed to produce mean price m, the ratio of quantities is (Quantity of Cheaper) / (Quantity of Dearer) = (d - m) / (m - c).",
            "concepts": [
              "Profit sharing ratio = (Investment₁ × Time₁) : (Investment₂ × Time₂).",
              "Alligation ratio = (Higher Price - Mean Price) : (Mean Price - Lower Price).",
              "Removal and replacement of liquids: Final pure liquid = Initial × [1 - (x / V)]^n.",
              "Compound ratio of a:b and c:d is (ac):(bd)."
            ],
            "formulas": [
              "Profit Ratio = (C₁ × T₁) : (C₂ × T₂)",
              "Alligation: Q_c / Q_d = (d - m) / (m - c)",
              "Residual quantity = Initial × (1 - x / V)^n"
            ],
            "solvedExamples": [
              {
                "problem": "In what ratio must rice at ₹40/kg be mixed with rice at ₹60/kg so that the mixture is worth ₹54/kg?",
                "solution": "By Alligation: Cheaper = 40, Dearer = 60, Mean = 54.\nRatio (Cheaper : Dearer) = (60 - 54) : (54 - 40) = 6 : 14 = 3 : 7."
              }
            ],
            "keyTakeaways": [
              "Alligation is a major time-saving shortcut for mixture problems.",
              "Partnership profits depend on BOTH investment amount and duration.",
              "Check that mean price falls strictly between cheaper and dearer prices."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Mathematics & Quantitative Aptitude",
            "pyqIds": [
              "bpsc-mid-q-0264",
              "bpsc-mid-q-0265",
              "bpsc-mid-q-0266",
              "bpsc-mid-q-0267",
              "bpsc-mid-q-0268",
              "bpsc-mid-q-0269",
              "bpsc-mid-q-0270",
              "bpsc-mid-q-0271"
            ]
          }
        ]
      },
      {
        "id": "bpsc-mid-math-c2",
        "subjectId": "bpsc-mid-math",
        "examId": "bpsc-tre-middle",
        "title": "Algebra, Geometry & Mensuration",
        "order": 2,
        "topics": [
          {
            "id": "bpsc-mid-math-t6",
            "chapterId": "bpsc-mid-math-c2",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Linear Equations in One & Two Variables",
            "order": 1,
            "notes": "Linear equations model relationships of degree 1. In one variable, transposition balances equations: ax + b = c => x = (c - b)/a.\n\nIn two variables, simultaneous equations ax + by = c and dx + ey = f are solved via elimination or substitution. Word problems frequently involve speed-distance-time, upstream-downstream boat speeds: Speed upstream = (v - u), Speed downstream = (v + u).",
            "concepts": [
              "Upstream speed = Boat speed (v) - Stream speed (u).",
              "Downstream speed = Boat speed (v) + Stream speed (u).",
              "Elimination method: Multiply equations to match one variable's coefficient.",
              "Transposition changes operational signs across equality."
            ],
            "formulas": [
              "v_downstream = v + u",
              "v_upstream = v - u",
              "Boat speed in still water v = (v_down + v_up) / 2",
              "Stream speed u = (v_down - v_up) / 2"
            ],
            "solvedExamples": [
              {
                "problem": "A boat travels downstream at 14 km/h and upstream at 8 km/h. Find speed of the boat in still water and speed of the stream.",
                "solution": "Boat speed v = (14 + 8) / 2 = 22 / 2 = 11 km/h.\nStream speed u = (14 - 8) / 2 = 6 / 2 = 3 km/h."
              }
            ],
            "keyTakeaways": [
              "Still water speed is the average of downstream and upstream speeds.",
              "Stream speed is half the difference of downstream and upstream speeds.",
              "Always check that boat speed exceeds stream speed."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 2 & Class 9 Chapter 4",
            "pyqIds": [
              "bpsc-mid-q-0301",
              "bpsc-mid-q-0302",
              "bpsc-mid-q-0303",
              "bpsc-mid-q-0304",
              "bpsc-mid-q-0305",
              "bpsc-mid-q-0306",
              "bpsc-mid-q-0307",
              "bpsc-mid-q-0308"
            ]
          },
          {
            "id": "bpsc-mid-math-t7",
            "chapterId": "bpsc-mid-math-c2",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Exponents, Powers & Scientific Notation",
            "order": 2,
            "notes": "Rules of indices: a^m * a^n = a^(m+n), a^m / a^n = a^(m-n), (a^m)^n = a^(mn), a^0 = 1, and a^(-n) = 1/a^n. Fractional exponents: a^(p/q) = q-th root of a^p.\n\nScientific notation expresses quantities as M × 10^k where 1.0 <= M < 10.",
            "concepts": [
              "Product rule: a^m × a^n = a^(m+n); Quotient rule: a^m / a^n = a^(m-n).",
              "Power of a power: (a^m)^n = a^(mn).",
              "Negative index: a^(-n) = 1 / a^n.",
              "Zero index: a^0 = 1 (for a ≠ 0)."
            ],
            "formulas": [
              "a^m × a^n = a^(m+n)",
              "a^m / a^n = a^(m-n)",
              "(a^m)^n = a^(mn)",
              "a^(-n) = 1 / a^n, a^0 = 1"
            ],
            "solvedExamples": [
              {
                "problem": "Evaluate: (64)^(-2/3).",
                "solution": "64 = 4³. Therefore, (4³)^(-2/3) = 4^(3 × -2/3) = 4^(-2) = 1 / 4² = 1 / 16."
              }
            ],
            "keyTakeaways": [
              "Convert base to a prime power before evaluating fractional exponents.",
              "Negative exponent inverts the fraction.",
              "Any non-zero quantity raised to power 0 equals 1."
            ],
            "estimatedMinutes": 10,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 12",
            "pyqIds": [
              "bpsc-mid-q-0338",
              "bpsc-mid-q-0339",
              "bpsc-mid-q-0340",
              "bpsc-mid-q-0341",
              "bpsc-mid-q-0342",
              "bpsc-mid-q-0343",
              "bpsc-mid-q-0344",
              "bpsc-mid-q-0345"
            ]
          },
          {
            "id": "bpsc-mid-math-t8",
            "chapterId": "bpsc-mid-math-c2",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Polygons, Quadrilaterals & Angle Properties",
            "order": 3,
            "notes": "For an n-sided convex polygon:\n- Sum of interior angles = (n - 2) * 180°.\n- Sum of exterior angles = 360°.\n- Each interior angle of regular n-gon = [(n - 2) * 180°] / n.\n- Each exterior angle of regular n-gon = 360° / n.\n- Number of diagonals = n(n - 3) / 2.",
            "concepts": [
              "Interior angle sum formula: (n - 2) × 180°.",
              "Exterior angle sum is constant at 360° for all convex polygons.",
              "Number of diagonals in an n-gon: n(n - 3) / 2.",
              "Adjacent angles of a parallelogram are supplementary (sum = 180°)."
            ],
            "formulas": [
              "Sum of interior angles = (n - 2) × 180°",
              "Number of diagonals = n(n - 3) / 2",
              "Each exterior angle = 360° / n"
            ],
            "solvedExamples": [
              {
                "problem": "Find the number of diagonals in a decagon (10-sided polygon).",
                "solution": "Number of diagonals = n(n - 3) / 2 = 10(10 - 3) / 2 = 10(7) / 2 = 35 diagonals."
              }
            ],
            "keyTakeaways": [
              "Number of diagonals is given by n(n - 3) / 2.",
              "Triangle has zero diagonals (3 × 0 / 2 = 0).",
              "Exterior angle plus interior angle at any vertex equals 180°."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 3",
            "pyqIds": [
              "bpsc-mid-q-0375",
              "bpsc-mid-q-0376",
              "bpsc-mid-q-0377",
              "bpsc-mid-q-0378",
              "bpsc-mid-q-0379",
              "bpsc-mid-q-0380",
              "bpsc-mid-q-0381",
              "bpsc-mid-q-0382"
            ]
          },
          {
            "id": "bpsc-mid-math-t9",
            "chapterId": "bpsc-mid-math-c2",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Triangles: Congruence, Similarity & Pythagorean Triples",
            "order": 4,
            "notes": "Pythagoras Theorem: In a right-angled triangle, hypotenuse² = base² + perpendicular² (h² = b² + p²). Common Pythagorean triples: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41), (20, 21, 29). For any integer m > 1, (2m, m² - 1, m² + 1) generates a Pythagorean triple.\n\nTriangle Inequality: Sum of any two sides > third side. Congruence: SSS, SAS, ASA, RHS.",
            "concepts": [
              "Pythagorean triples: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17).",
              "Triple generator: 2m, m² - 1, m² + 1 (for m > 1).",
              "Triangle inequality: a + b > c (strictly greater, not equal).",
              "Area of equilateral triangle = (√3 / 4) × a²; Height = (√3 / 2) × a."
            ],
            "formulas": [
              "h² = p² + b²",
              "Triple: (2m, m² - 1, m² + 1)",
              "Area(Equilateral) = (√3 / 4) × a²",
              "Height(Equilateral) = (√3 / 2) × a"
            ],
            "solvedExamples": [
              {
                "problem": "Write a Pythagorean triple whose smallest member is 8.",
                "solution": "Set 2m = 8 => m = 4.\nm² - 1 = 4² - 1 = 15.\nm² + 1 = 4² + 1 = 17.\nPythagorean triple is (8, 15, 17). Verify: 8² + 15² = 64 + 225 = 289 = 17²."
              }
            ],
            "keyTakeaways": [
              "Memorizing standard Pythagorean triples saves time during examinations.",
              "Formula (2m, m² - 1, m² + 1) generates integer triples.",
              "Equilateral triangle area formula: (√3 / 4)a²."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 6 & Class 8 Chapter 6",
            "pyqIds": [
              "bpsc-mid-q-0412",
              "bpsc-mid-q-0413",
              "bpsc-mid-q-0414",
              "bpsc-mid-q-0415",
              "bpsc-mid-q-0416",
              "bpsc-mid-q-0417",
              "bpsc-mid-q-0418",
              "bpsc-mid-q-0419"
            ]
          },
          {
            "id": "bpsc-mid-math-t10",
            "chapterId": "bpsc-mid-math-c2",
            "subjectId": "bpsc-mid-math",
            "examId": "bpsc-tre-middle",
            "title": "Mensuration of 2D & 3D Figures, Surface Areas & Volumes",
            "order": 5,
            "notes": "Comprehensive formulas:\n- 2D: Triangle (1/2 bh), Equilateral (√3/4 a²), Circle (πr²), Trapezium (1/2(a+b)h), Rhombus (1/2 d₁d₂).\n- 3D: Cube (Vol = a³, TSA = 6a²), Cuboid (Vol = lbh, TSA = 2(lb+bh+hl)), Cylinder (Vol = πr²h, CSA = 2πrh, TSA = 2πr(r+h)), Cone (Vol = 1/3 πr²h, CSA = πrl), Sphere (Vol = 4/3 πr³, TSA = 4πr²), Hemisphere (Vol = 2/3 πr³, CSA = 2πr², TSA = 3πr²).",
            "concepts": [
              "CSA excludes flat end faces; TSA includes all boundary faces.",
              "Volume is conserved when solids are melted, recast, or combined.",
              "Diagonal of cube: a√3; Diagonal of cuboid: √(l² + b² + h²).",
              "1 litre = 1,000 cm³; 1 m³ = 1,000 litres."
            ],
            "formulas": [
              "Cylinder: V = πr²h, CSA = 2πrh, TSA = 2πr(r + h)",
              "Cone: V = (1/3)πr²h, CSA = πrl (l = √(r² + h²))",
              "Sphere: V = (4/3)πr³, TSA = 4πr²",
              "Hemisphere: V = (2/3)πr³, TSA = 3πr²"
            ],
            "solvedExamples": [
              {
                "problem": "A solid metallic sphere of radius 6 cm is melted and recast into small spheres of radius 2 cm each. Find the number of small spheres formed.",
                "solution": "Volume of large sphere = (4/3)π(6)³. Volume of small sphere = (4/3)π(2)³.\nNumber of spheres = V_large / V_small = 6³ / 2³ = (6 / 2)³ = 3³ = 27 spheres."
              }
            ],
            "keyTakeaways": [
              "Ratio of recast spheres equals (R / r)³.",
              "Hemisphere Total Surface Area is 3πr² (includes flat circular base).",
              "1 m³ contains 1,000 litres of fluid."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 11 & Class 9 Chapter 13",
            "pyqIds": [
              "bpsc-mid-q-0449",
              "bpsc-mid-q-0450",
              "bpsc-mid-q-0451",
              "bpsc-mid-q-0452",
              "bpsc-mid-q-0453",
              "bpsc-mid-q-0454",
              "bpsc-mid-q-0455",
              "bpsc-mid-q-0456"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-mid-sci",
    "examId": "bpsc-tre-middle",
    "name": "Middle School Science (Classes 6–8)",
    "code": "BPSC-MID-SCI",
    "iconName": "Zap",
    "description": "BPSC TRE Middle School Science: Physics, Chemistry, and Biology calibrated to graduation/B.Ed standards.",
    "chapters": [
      {
        "id": "bpsc-mid-sci-c1",
        "subjectId": "bpsc-mid-sci",
        "examId": "bpsc-tre-middle",
        "title": "Physics: Force, Motion, Light & Electricity",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-mid-sci-t1",
            "chapterId": "bpsc-mid-sci-c1",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Measurement, Motion & Graphical Analysis of Speed",
            "order": 1,
            "notes": "Motion is relative to a reference frame. Types: Rectilinear (straight line), Circular (constant radius), Periodic (repeats at fixed intervals, e.g. pendulum).\n\nDistance is total path length (scalar); Displacement is shortest straight line from initial to final position (vector). Speed is distance/time; Velocity is displacement/time. Slope of distance-time graph represents speed; slope of velocity-time graph represents acceleration. Area under velocity-time graph represents displacement.",
            "concepts": [
              "Displacement can be zero even if distance traveled is positive.",
              "Slope of Distance-Time graph gives Speed.",
              "Slope of Velocity-Time graph gives Acceleration.",
              "Area under Velocity-Time graph gives total Displacement."
            ],
            "formulas": [
              "Speed = Distance / Time",
              "Velocity = Displacement / Time",
              "Acceleration a = (v - u) / t",
              "Area under v-t graph = Displacement s"
            ],
            "solvedExamples": [
              {
                "problem": "An athlete runs around a circular track of radius 70 m and completes one full lap in 40 seconds. Find distance and displacement.",
                "solution": "Distance = Circumference = 2πr = 2 × (22/7) × 70 = 440 m.\nDisplacement = 0 m (athlete returns to starting point)."
              }
            ],
            "keyTakeaways": [
              "One complete lap around any closed circuit has zero displacement.",
              "Area under v-t graph represents distance/displacement.",
              "Velocity is a vector with both magnitude and direction."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 13 & Class 9 Chapter 8",
            "pyqIds": [
              "bpsc-mid-q-0001",
              "bpsc-mid-q-0597",
              "bpsc-mid-q-0598",
              "bpsc-mid-q-0599",
              "bpsc-mid-q-0600",
              "bpsc-mid-q-0601",
              "bpsc-mid-q-0602",
              "bpsc-mid-q-0603"
            ]
          },
          {
            "id": "bpsc-mid-sci-t2",
            "chapterId": "bpsc-mid-sci-c1",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Forces, Pressure, Pascal's Principle & Atmospheric Pressure",
            "order": 2,
            "notes": "Pressure P = F / A (Pascal, Pa = N/m²). Pascal's Principle: Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and to the walls of the vessel (foundation of hydraulic brakes, hydraulic lift).\n\nAtmospheric pressure at sea level is approximately 1.013 × 10⁵ Pa (1 atm = 760 mm of Hg). Torricelli invented the mercury barometer. Atmospheric pressure decreases with height, which causes cooking at high altitudes to require pressure cookers.",
            "concepts": [
              "Pressure P = F / A. Smaller contact area exerts greater pressure.",
              "Pascal's Law: Enclosed fluid transmits pressure equally in all directions (Hydraulic Lift: F₁/A₁ = F₂/A₂).",
              "Standard atmospheric pressure = 760 mm of Hg = 1.013 × 10⁵ Pa.",
              "Boiling point of water decreases at high altitude due to lower atmospheric pressure."
            ],
            "formulas": [
              "P = F / A",
              "Hydraulic Lift: F₁ / A₁ = F₂ / A₂",
              "Fluid pressure: P = h × ρ × g"
            ],
            "solvedExamples": [
              {
                "problem": "In a hydraulic press, a force of 50 N is applied to a small piston of area 10 cm². What force is exerted on the large piston of area 200 cm²?",
                "solution": "F₁ / A₁ = F₂ / A₂ => 50 / 10 = F₂ / 200 => 5 = F₂ / 200 => F₂ = 1000 N."
              }
            ],
            "keyTakeaways": [
              "Hydraulic lifts act as force multipliers based on Pascal's law.",
              "Pressure cookers raise the boiling point of water by trapping steam pressure.",
              "Atmospheric pressure decreases exponentially with altitude."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 11 (Force and Pressure)",
            "pyqIds": [
              "bpsc-mid-q-0002",
              "bpsc-mid-q-0634",
              "bpsc-mid-q-0635",
              "bpsc-mid-q-0636",
              "bpsc-mid-q-0637",
              "bpsc-mid-q-0638",
              "bpsc-mid-q-0639",
              "bpsc-mid-q-0640"
            ]
          },
          {
            "id": "bpsc-mid-sci-t3",
            "chapterId": "bpsc-mid-sci-c1",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Heat, Temperature Scales, Conduction, Convection & Radiation",
            "order": 3,
            "notes": "Temperature is the degree of hotness or coldness of an object. Temperature scale relations: (C / 5) = (F - 32) / 9 = (K - 273.15) / 5. At -40°, Celsius and Fahrenheit scales read the exact same value.\n\nHeat transfer mechanisms:\n1. Conduction: Transfer through direct molecular collisions without bulk motion of matter (solids).\n2. Convection: Transfer through actual macroscopic movement of fluid molecules (liquids and gases; sea breeze and land breeze).\n3. Radiation: Transfer via electromagnetic waves without requiring any intervening medium (solar heat; black bodies absorb and radiate heat best).",
            "concepts": [
              "Scale conversion: C / 5 = (F - 32) / 9.",
              "-40° is the unique temperature where °C equals °F.",
              "Conduction occurs in solids; Convection occurs in fluids; Radiation requires no medium.",
              "Sea breeze blows from sea to land during the day; Land breeze blows from land to sea at night."
            ],
            "formulas": [
              "C / 5 = (F - 32) / 9",
              "K = °C + 273.15",
              "Q = m × c × ΔT"
            ],
            "solvedExamples": [
              {
                "problem": "Convert 37°C (normal human body temperature) into Fahrenheit.",
                "solution": "F = (9/5)C + 32 = (9/5)(37) + 32 = 66.6 + 32 = 98.6°F."
              }
            ],
            "keyTakeaways": [
              "-40° is identical on both Celsius and Fahrenheit scales.",
              "Radiation travels through vacuum at the speed of light.",
              "Dark, matte surfaces are the best absorbers and emitters of thermal radiation."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 4 (Heat)",
            "pyqIds": [
              "bpsc-mid-q-0003",
              "bpsc-mid-q-0006",
              "bpsc-mid-q-0671",
              "bpsc-mid-q-0672",
              "bpsc-mid-q-0673",
              "bpsc-mid-q-0674",
              "bpsc-mid-q-0675",
              "bpsc-mid-q-0676"
            ]
          },
          {
            "id": "bpsc-mid-sci-t4",
            "chapterId": "bpsc-mid-sci-c1",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Optics: Reflection, Refraction, Concave/Convex Mirrors & Lenses",
            "order": 4,
            "notes": "Mirror formula: 1/f = 1/v + 1/u. Lens formula: 1/f = 1/v - 1/u. Power P = 1 / f(m) in Dioptres.\n\nDispersion: Isaac Newton discovered that white sunlight passing through a triangular glass prism disperses into a spectrum of 7 constituent colors (VIBGYOR). Red light has the longest wavelength and bends least; Violet light has the shortest wavelength and bends most. Rainbow formation involves Refraction, Dispersion, and Total Internal Reflection inside raindrops.",
            "concepts": [
              "Concave mirror converges light; forms magnified virtual image when u < f.",
              "Convex mirror diverges light; always produces diminished, erect virtual images.",
              "Dispersion splits white light into VIBGYOR; Red bends least, Violet bends most.",
              "Rainbow involves refraction, dispersion, and total internal reflection in suspended raindrops."
            ],
            "formulas": [
              "Mirror: 1/f = 1/v + 1/u; Lens: 1/f = 1/v - 1/u",
              "P = 1 / f (in metres)",
              "Magnification m = -v / u (Mirror) = +v / u (Lens)"
            ],
            "solvedExamples": [
              {
                "problem": "Which phenomenon is responsible for the twinkling of stars in the night sky?",
                "solution": "Atmospheric Refraction. Starlight continuously bends through layers of fluctuating temperature and refractive index in the atmosphere, causing apparent position and brightness to flicker."
              }
            ],
            "keyTakeaways": [
              "Stars twinkle due to atmospheric refraction; planets do not twinkle because they are extended light sources.",
              "Red bends least through a prism because it has the longest visible wavelength.",
              "Convex lens focal length is positive (+); Concave lens is negative (-)."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 15 & Class 10 Chapters 10 & 11",
            "pyqIds": [
              "bpsc-mid-q-0708",
              "bpsc-mid-q-0709",
              "bpsc-mid-q-0710",
              "bpsc-mid-q-0711",
              "bpsc-mid-q-0712",
              "bpsc-mid-q-0713",
              "bpsc-mid-q-0714",
              "bpsc-mid-q-0715"
            ]
          },
          {
            "id": "bpsc-mid-sci-t5",
            "chapterId": "bpsc-mid-sci-c1",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Electric Circuits, Ohm's Law, Resistance & Magnetic Effects",
            "order": 5,
            "notes": "Ohm's Law: V = IR. Resistance R = ρ(L/A). Resistors in series add directly (R = R₁ + R₂); resistors in parallel add reciprocally (1/R = 1/R₁ + 1/R₂).\n\nJoule's Heating Law: H = I²Rt. Electric power P = VI = I²R = V²/R. 1 unit of commercial electricity = 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules. An electromagnet consists of insulated copper wire wrapped around a soft iron core; magnetism is active only when current flows.",
            "concepts": [
              "Ohm's Law: V = IR at constant temperature.",
              "Resistors in parallel have equal voltage and lower equivalent resistance.",
              "Heating effect: H = I²Rt (Joule's law).",
              "Commercial electricity unit: 1 kWh = 3.6 × 10⁶ J."
            ],
            "formulas": [
              "V = IR",
              "R_series = R₁ + R₂; 1/R_parallel = 1/R₁ + 1/R₂",
              "H = I²Rt",
              "P = VI = I²R = V² / R"
            ],
            "solvedExamples": [
              {
                "problem": "Two resistors of 6 Ω and 12 Ω are connected in parallel across a 12 V battery. Find the total current drawn.",
                "solution": "1/R_eq = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 => R_eq = 4 Ω.\nTotal current I = V / R_eq = 12 / 4 = 3 Amperes."
              }
            ],
            "keyTakeaways": [
              "Parallel circuits ensure appliances operate independently with full supply voltage.",
              "Soft iron is preferred for electromagnets due to low retentivity.",
              "Electric power is measured in Watts (W); electrical energy in Kilowatt-hours (kWh)."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 12 (Electricity)",
            "pyqIds": [
              "bpsc-mid-q-0745",
              "bpsc-mid-q-0746",
              "bpsc-mid-q-0747",
              "bpsc-mid-q-0748",
              "bpsc-mid-q-0749",
              "bpsc-mid-q-0750",
              "bpsc-mid-q-0751",
              "bpsc-mid-q-0752"
            ]
          },
          {
            "id": "bpsc-mid-sci-t6",
            "chapterId": "bpsc-mid-sci-c1",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Sound: Characteristics, Vibration, Infrasonic & Ultrasonic Waves",
            "order": 6,
            "notes": "Sound is produced by vibrating objects and travels as longitudinal mechanical waves. Amplitude determines loudness (L ∝ A²); frequency determines pitch (shrillness). Human hearing range: 20 Hz to 20,000 Hz.\n\nInfrasound (< 20 Hz): Produced by earthquakes, volcanic eruptions, rhinoceroses. Ultrasound (> 20 kHz): Used in SONAR, echocardiography, cleaning intricate machine parts, and bat echolocation. Sound velocity increases with temperature and humidity of air.",
            "concepts": [
              "Loudness is proportional to square of amplitude (L ∝ Amplitude²).",
              "Pitch (shrillness) is determined strictly by frequency of vibration.",
              "Audible range of human ear: 20 Hz to 20,000 Hz.",
              "Ultrasound (> 20 kHz) is used in SONAR and medical diagnostics."
            ],
            "formulas": [
              "v = f × λ",
              "Loudness ∝ Amplitude²",
              "Echo: d = (v × t) / 2"
            ],
            "solvedExamples": [
              {
                "problem": "If the amplitude of a vibrating body is tripled, by what factor does its loudness increase?",
                "solution": "Loudness ∝ (Amplitude)². When amplitude is tripled: Loudness' ∝ (3A)² = 9A². Loudness increases by a factor of 9."
              }
            ],
            "keyTakeaways": [
              "Loudness depends on amplitude; Pitch depends on frequency.",
              "Women's voices generally have higher frequency (higher pitch) than men's.",
              "Speed of sound in air increases by ~0.61 m/s for every 1°C rise in temperature."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 13 & Class 9 Chapter 12",
            "pyqIds": [
              "bpsc-mid-q-0782",
              "bpsc-mid-q-0783",
              "bpsc-mid-q-0784",
              "bpsc-mid-q-0785",
              "bpsc-mid-q-0786",
              "bpsc-mid-q-0787",
              "bpsc-mid-q-0788",
              "bpsc-mid-q-0789"
            ]
          }
        ]
      },
      {
        "id": "bpsc-mid-sci-c2",
        "subjectId": "bpsc-mid-sci",
        "examId": "bpsc-tre-middle",
        "title": "Chemistry: Matter, Acids, Metals & Fuels",
        "order": 2,
        "topics": [
          {
            "id": "bpsc-mid-sci-t7",
            "chapterId": "bpsc-mid-sci-c2",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Physical and Chemical Changes, Separation Techniques",
            "order": 1,
            "notes": "Separation techniques for mixtures:\n- Sublimation: Solid converts directly to gas on heating (Ammonium chloride, Camphor, Naphthalene, Iodine).\n- Fractional Distillation: Separates miscible liquids whose boiling points differ by less than 25 K (crude petroleum, air components).\n- Chromatography: Separates solutes dissolved in the same solvent based on differing solubility rates.\n- Centrifugation: Denser particles forced to bottom, lighter stay at top (cream from milk, blood testing).\n- Crystallization: Purifies solids from solution without thermal decomposition (superior to simple evaporation).",
            "concepts": [
              "Sublimation separates volatile solids (Camphor, NH₄Cl) from non-volatile salts.",
              "Fractional distillation is used when boiling points differ by less than 25 K.",
              "Chromatography separates pigments/dyes based on differential solubility.",
              "Crystallization is preferred over evaporation because it prevents thermal decomposition of solids."
            ],
            "keyTakeaways": [
              "Camphor, ammonium chloride, and dry ice (solid CO₂) undergo sublimation.",
              "Centrifugation separates cream from milk and blood components.",
              "Air components are separated by fractional distillation of liquid air."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 2 (Is Matter Around Us Pure)",
            "pyqIds": [
              "bpsc-mid-q-0819",
              "bpsc-mid-q-0820",
              "bpsc-mid-q-0821",
              "bpsc-mid-q-0822",
              "bpsc-mid-q-0823",
              "bpsc-mid-q-0824",
              "bpsc-mid-q-0825",
              "bpsc-mid-q-0826"
            ]
          },
          {
            "id": "bpsc-mid-sci-t8",
            "chapterId": "bpsc-mid-sci-c2",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Acids, Bases, Indicators & Salt Formation",
            "order": 2,
            "notes": "Acids produce H+ (or H₃O+) ions; bases produce OH- ions. Strong acids: HCl, H₂SO₄, HNO₃. Weak acids: CH₃COOH, H₂CO₃. Strong bases: NaOH, KOH. Neutralization: Acid + Base -> Salt + Water.\n\nImportant commercial salts:\n- Baking Soda: NaHCO₃ (Sodium hydrogen carbonate; releases CO₂ on heating to make bread/cakes fluffy).\n- Washing Soda: Na₂CO₃·10H₂O (Sodium carbonate decahydrate; softens hard water).\n- Bleaching Powder: CaOCl₂ (Calcium oxychloride; disinfectant, synthesized via Ca(OH)₂ + Cl₂).\n- Plaster of Paris: CaSO₄·(1/2)H₂O (Synthesized by heating gypsum CaSO₄·2H₂O at 373 K / 100°C).",
            "concepts": [
              "Baking soda is NaHCO₃; decomposes on heating to release leavening CO₂ gas.",
              "Plaster of Paris (CaSO₄·½H₂O) is prepared by carefully heating Gypsum (CaSO₄·2H₂O) at 373 K.",
              "Washing soda (Na₂CO₃·10H₂O) removes permanent water hardness.",
              "Bleaching powder is CaOCl₂, prepared by passing chlorine gas over dry slaked lime."
            ],
            "formulas": [
              "Baking soda: NaHCO₃",
              "Washing soda: Na₂CO₃·10H₂O",
              "Bleaching powder: CaOCl₂",
              "Plaster of Paris: CaSO₄·(1/2)H₂O; Gypsum: CaSO₄·2H₂O"
            ],
            "solvedExamples": [
              {
                "problem": "What happens when Plaster of Paris is mixed with water?",
                "solution": "Plaster of Paris absorbs water and sets into a hard crystalline solid mass of Gypsum within minutes: CaSO₄·½H₂O + 1½H₂O -> CaSO₄·2H₂O."
              }
            ],
            "keyTakeaways": [
              "Plaster of Paris is hemihydrate (½H₂O); Gypsum is dihydrate (2H₂O).",
              "Baking powder contains baking soda PLUS a mild edible acid like tartaric acid.",
              "Bleaching powder smells of chlorine due to reaction with atmospheric CO₂."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 2 (Acids, Bases and Salts)",
            "pyqIds": [
              "bpsc-mid-q-0856",
              "bpsc-mid-q-0857",
              "bpsc-mid-q-0858",
              "bpsc-mid-q-0859",
              "bpsc-mid-q-0860",
              "bpsc-mid-q-0861",
              "bpsc-mid-q-0862",
              "bpsc-mid-q-0863"
            ]
          },
          {
            "id": "bpsc-mid-sci-t9",
            "chapterId": "bpsc-mid-sci-c2",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Metals and Non-metals: Physical & Chemical Properties",
            "order": 3,
            "notes": "Physical properties: Metals are malleable and ductile (Gold is most ductile; 1 g can be drawn into 2 km wire). Exceptions: Mercury is liquid metal; Gallium and Caesium melt on human palm; Iodine is a lustrous non-metal; Diamond is an allotrope of carbon with highest melting point.\n\nChemical properties: Metal oxides are basic/amphoteric (Al₂O₃ and ZnO are amphoteric, reacting with both acids and bases). Metals react with acids to evolve Hydrogen gas (detected by pop sound with burning splint). Aqua regia (3 parts conc. HCl : 1 part conc. HNO₃) dissolves noble metals like gold and platinum.",
            "concepts": [
              "Aluminium oxide (Al₂O₃) and Zinc oxide (ZnO) are amphoteric oxides.",
              "Aqua Regia is 3:1 ratio of concentrated HCl to concentrated HNO₃.",
              "Gallium and Caesium have very low melting points and melt in hand.",
              "Gold and Silver are the most malleable and ductile metals."
            ],
            "formulas": [
              "Amphoteric: Al₂O₃ + 6HCl -> 2AlCl₃ + 3H₂O",
              "Amphoteric: Al₂O₃ + 2NaOH -> 2NaAlO₂ (Sodium aluminate) + H₂O",
              "Aqua Regia: 3 Conc. HCl : 1 Conc. HNO₃"
            ],
            "solvedExamples": [
              {
                "problem": "Why is aluminium oxide called an amphoteric oxide?",
                "solution": "Because it reacts with both acids (like HCl) and strong bases (like NaOH) to produce salt and water, showing both basic and acidic behavior."
              }
            ],
            "keyTakeaways": [
              "Amphoteric oxides: Al₂O₃ and ZnO.",
              "Aqua regia contains 3 parts HCl and 1 part HNO₃.",
              "Bromine is the only liquid non-metal at room temperature."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 3 (Metals and Non-metals)",
            "pyqIds": [
              "bpsc-mid-q-0002",
              "bpsc-mid-q-0003",
              "bpsc-mid-q-0006",
              "bpsc-mid-q-0819",
              "bpsc-mid-q-0820",
              "bpsc-mid-q-0821",
              "bpsc-mid-q-0822",
              "bpsc-mid-q-0823"
            ]
          },
          {
            "id": "bpsc-mid-sci-t10",
            "chapterId": "bpsc-mid-sci-c2",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Combustion, Flame, Fuels, Calorific Value & Pollution",
            "order": 4,
            "notes": "Combustion is a chemical process where a substance reacts with oxygen to give off heat and light. Requirements: Combustible substance, Oxygen, and Ignition temperature (lowest temperature at which substance catches fire).\n\nCalorific value is the amount of heat energy produced on complete combustion of 1 kg of fuel (kJ/kg). Hydrogen has highest calorific value (~150,000 kJ/kg); LPG has ~55,000 kJ/kg; Cow dung has lowest (~6,000-8,000 kJ/kg). Flame zones: Innermost (unburnt wax vapors, black, least hot), Middle (incomplete combustion, yellow, luminous, moderately hot), Outermost (complete combustion, blue, non-luminous, hottest zone used by goldsmiths).",
            "concepts": [
              "Ignition temperature: Minimum temperature required to start combustion.",
              "Outermost blue zone of flame is the hottest zone.",
              "Hydrogen gas has the highest calorific value (150,000 kJ/kg).",
              "Incomplete combustion produces poisonous Carbon Monoxide (CO), which binds strongly to hemoglobin."
            ],
            "keyTakeaways": [
              "Outermost blue zone of a candle flame is the hottest.",
              "Carbon monoxide binds to hemoglobin forming carboxyhemoglobin, suffocating cells.",
              "Hydrogen has the highest calorific value of all fuels."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 6 (Combustion and Flame)",
            "pyqIds": [
              "bpsc-mid-q-0893",
              "bpsc-mid-q-0894",
              "bpsc-mid-q-0895",
              "bpsc-mid-q-0896",
              "bpsc-mid-q-0897",
              "bpsc-mid-q-0898",
              "bpsc-mid-q-0899",
              "bpsc-mid-q-0900"
            ]
          }
        ]
      },
      {
        "id": "bpsc-mid-sci-c3",
        "subjectId": "bpsc-mid-sci",
        "examId": "bpsc-tre-middle",
        "title": "Biology: Living Organisms, Systems & Ecology",
        "order": 3,
        "topics": [
          {
            "id": "bpsc-mid-sci-t11",
            "chapterId": "bpsc-mid-sci-c3",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Nutrition in Plants & Animals: Modes & Digestive Anatomy",
            "order": 1,
            "notes": "Autotrophic nutrition: Plants synthesize food via photosynthesis in chloroplasts. Heterotrophic nutrition: Holozoic (ingestion of solid organic food - humans, amoeba), Saprophytic (absorption from dead matter - fungi), Parasitic (host nutrition without killing - Cuscuta, tapeworm).\n\nAmoeba captures food using pseudopodia, forming a food vacuole. In ruminants (cows), stomach has 4 chambers: Rumen (stores and ferments cellulose via symbiotic bacteria), Reticulum, Omasum, and Abomasum (true stomach).",
            "concepts": [
              "Amoeba performs phagocytosis using pseudopodia.",
              "Ruminants have a specialized 4-chambered stomach; rumen digests cellulose via anaerobic microflora.",
              "Bile juice produced by liver is alkaline and emulsifies fats.",
              "Pepsin functions strictly in acidic pH maintained by gastric HCl."
            ],
            "keyTakeaways": [
              "Abomasum is the true digestive stomach of ruminants.",
              "Amoeba ingests food via pseudopodia into food vacuoles.",
              "Bile contains no digestive enzymes; it acts as a mechanical lipid emulsifier."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 2 (Nutrition in Animals)",
            "pyqIds": [
              "bpsc-mid-q-0930",
              "bpsc-mid-q-0931",
              "bpsc-mid-q-0932",
              "bpsc-mid-q-0933",
              "bpsc-mid-q-0934",
              "bpsc-mid-q-0935",
              "bpsc-mid-q-0936",
              "bpsc-mid-q-0937"
            ]
          },
          {
            "id": "bpsc-mid-sci-t12",
            "chapterId": "bpsc-mid-sci-c3",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Cell Biology: Organelles, Plant vs Animal Cells",
            "order": 2,
            "notes": "Structural differences: Plant cells have a rigid cellulose cell wall, large central vacuole, and plastids (chloroplasts); animal cells lack cell walls, possess centrioles/centrosomes (involved in cell division), and have small temporary vacuoles.\n\nOrganelles: Nucleus (governs cell activities, contains chromatin DNA), Ribosomes (protein factories), Mitochondria (powerhouse, cellular respiration), Lysosomes (digestive enzyme sacs), Endoplasmic reticulum (intracellular transport and synthesis).",
            "concepts": [
              "Plant cells: Cell wall present, large central vacuole, chloroplasts, plastids.",
              "Animal cells: Cell wall absent, small vacuoles, centrosomes/centrioles present.",
              "Centrosomes/centrioles organize spindle fibres during animal cell division.",
              "Nucleolus within nucleus is the site of ribosomal RNA (rRNA) assembly."
            ],
            "keyTakeaways": [
              "Plant cells have cell walls and chloroplasts; animal cells do not.",
              "Centrosomes are exclusive to animal cells.",
              "Large central vacuole maintains turgor pressure in mature plant cells."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 8 & Class 9 Chapter 5",
            "pyqIds": [
              "bpsc-mid-q-0967",
              "bpsc-mid-q-0968",
              "bpsc-mid-q-0969",
              "bpsc-mid-q-0970",
              "bpsc-mid-q-0971",
              "bpsc-mid-q-0972",
              "bpsc-mid-q-0973",
              "bpsc-mid-q-0974"
            ]
          },
          {
            "id": "bpsc-mid-sci-t13",
            "chapterId": "bpsc-mid-sci-c3",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Human Excretory & Circulatory System",
            "order": 3,
            "notes": "Excretion: Filtration of metabolic nitrogenous wastes. Kidneys filter blood via 1 million nephrons per kidney. Glomerular filtration separates waste, followed by tubular reabsorption of water, glucose, and essential electrolytes. Ureters carry urine to urinary bladder.\n\nCirculation: Human heart has 4 chambers. Deoxygenated blood enters Right Atrium -> Right Ventricle -> Pulmonary Artery -> Lungs. Oxygenated blood returns via Pulmonary Veins -> Left Atrium -> Left Ventricle -> Aorta -> Body. Valves (Tricuspid, Bicuspid/Mitral, Semilunar) enforce strictly unidirectional flow.",
            "concepts": [
              "Nephron: Bowman's capsule and glomerulus carry out ultrafiltration.",
              "Bicuspid (mitral) valve is between left atrium and left ventricle.",
              "Tricuspid valve is between right atrium and right ventricle.",
              "Pulmonary vein carries oxygenated blood; Pulmonary artery carries deoxygenated blood."
            ],
            "keyTakeaways": [
              "Left ventricle has the thickest muscular wall to pump blood across the entire systemic circulation.",
              "Dialysis removes urea and excess fluids using a dialyzing cellophane membrane.",
              "Pacemaker of the human heart is the Sinoatrial (SA) node."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 6 (Life Processes)",
            "pyqIds": [
              "bpsc-mid-q-0930",
              "bpsc-mid-q-0931",
              "bpsc-mid-q-0932",
              "bpsc-mid-q-0933",
              "bpsc-mid-q-0934",
              "bpsc-mid-q-0935",
              "bpsc-mid-q-0936",
              "bpsc-mid-q-0937"
            ]
          },
          {
            "id": "bpsc-mid-sci-t14",
            "chapterId": "bpsc-mid-sci-c3",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Plant Reproduction, Pollination & Seed Dispersal",
            "order": 4,
            "notes": "Sexual reproduction in angiosperms occurs in flowers. Stamen is male organ (filament, anther producing pollen grains). Carpel/Pistil is female organ (stigma, style, ovary containing ovules).\n\nPollination: Transfer of pollen from anther to stigma (Self-pollination or Cross-pollination via wind, water, insects). After fertilization: Zygote -> Embryo; Ovule -> Seed coat and seed; Ovary -> Fruit. Seed dispersal agents: Wind (dandelion, drumstick with wings), Water (coconut with fibrous coat), Animals (cocklebur, Xanthium with hooks), Explosive mechanism (balsam, pea).",
            "concepts": [
              "Anther produces pollen grains (microspores); Ovary produces ovules (megaspores).",
              "Wind-pollinated flowers have light, non-sticky pollen and feathery stigmas.",
              "Xanthium and Urena seeds have hooked bristles for animal epizoochory dispersal.",
              "Post-fertilization: Ovary becomes Fruit; Ovule becomes Seed."
            ],
            "keyTakeaways": [
              "Ovary develops into Fruit; Ovule develops into Seed.",
              "Xanthium disperses via hooks sticking to animal fur.",
              "Wind-pollinated flowers produce abundant non-sticky pollen grains."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 7 Chapter 12 & Class 10 Chapter 8",
            "pyqIds": [
              "bpsc-mid-q-1004",
              "bpsc-mid-q-1005",
              "bpsc-mid-q-1006",
              "bpsc-mid-q-1007",
              "bpsc-mid-q-1008",
              "bpsc-mid-q-1009",
              "bpsc-mid-q-1010",
              "bpsc-mid-q-1011"
            ]
          },
          {
            "id": "bpsc-mid-sci-t15",
            "chapterId": "bpsc-mid-sci-c3",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Microorganisms: Beneficial vs Pathogenic Roles",
            "order": 5,
            "notes": "Microorganisms are categorized into Bacteria, Fungi, Protozoa, Algae, and Viruses (acellular, reproduce only inside host cells).\n\nBeneficial roles:\n- Lactobacillus converts milk to curd by lactic acid fermentation.\n- Yeast (Saccharomyces cerevisiae) ferments sugars into alcohol and CO₂ (leavening bread).\n- Rhizobium bacteria in root nodules of leguminous plants fix atmospheric nitrogen.\n- Alexander Fleming discovered Penicillin (from Penicillium notatum fungus, 1928).\n- Edward Jenner developed the first smallpox vaccine (1796).\n\nPathogenic roles: Tuberculosis (Mycobacterium, airborne bacteria), Malaria (Plasmodium protozoan, female Anopheles mosquito vector), Dengue (Virus, female Aedes mosquito vector), Ringworm (Fungi).",
            "concepts": [
              "Viruses reproduce only inside living host cells and are borderline living/non-living.",
              "Rhizobium fixes nitrogen symbiotically in leguminous root nodules.",
              "Penicillin was the first discovered antibiotic (Alexander Fleming).",
              "Female Anopheles transmits malaria; Female Aedes transmits dengue."
            ],
            "keyTakeaways": [
              "Malaria vector is female Anopheles; Dengue vector is female Aedes.",
              "Lactobacillus ferments lactose to lactic acid.",
              "Edward Jenner discovered smallpox vaccination."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 Chapter 2 (Microorganisms: Friend and Foe)",
            "pyqIds": [
              "bpsc-mid-q-1041",
              "bpsc-mid-q-1042",
              "bpsc-mid-q-1043",
              "bpsc-mid-q-1044",
              "bpsc-mid-q-1045",
              "bpsc-mid-q-1046",
              "bpsc-mid-q-1047",
              "bpsc-mid-q-1048"
            ]
          },
          {
            "id": "bpsc-mid-sci-t16",
            "chapterId": "bpsc-mid-sci-c3",
            "subjectId": "bpsc-mid-sci",
            "examId": "bpsc-tre-middle",
            "title": "Ecosystem, Food Chains, 10% Energy Transfer Law & Pollution",
            "order": 6,
            "notes": "Food chains represent energy transfer between trophic levels: Producers -> Herbivores -> Primary Carnivores -> Top Carnivores. Energy transfer follows Lindeman's 10% Law: Only 10% of chemical energy passes to the next trophic level.\n\nBiological magnification: Non-biodegradable pesticides (DDT) accumulate in increasing concentrations up the food chain, severely affecting top birds and mammals. Ozone depletion in stratosphere is caused by CFCs; Greenhouse gases (CO₂, CH₄, N₂O) drive global climate warming.",
            "concepts": [
              "Energy flow in an ecosystem is strictly unidirectional.",
              "Lindeman's 10% law dictates that 90% of energy is lost as heat at each trophic step.",
              "Biological magnification leads to maximum toxicity in top predators.",
              "Stratospheric ozone shields terrestrial biosphere from harmful UV-B radiation."
            ],
            "formulas": [
              "T_(n+1) Energy = T_n Energy × 0.10"
            ],
            "solvedExamples": [
              {
                "problem": "In a food chain: Grass -> Deer -> Tiger. If grass traps 10,000 kJ of solar energy, how much energy reaches the tiger?",
                "solution": "Grass: 10,000 kJ\nDeer (Herbivore): 10,000 × 0.10 = 1,000 kJ\nTiger (Carnivore): 1,000 × 0.10 = 100 kJ."
              }
            ],
            "keyTakeaways": [
              "Food chains rarely exceed 4-5 steps due to the 10% energy loss rule.",
              "DDT concentration is highest in top carnivores.",
              "CFCs catalyze ozone destruction in the stratosphere."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 15 (Our Environment)",
            "pyqIds": [
              "bpsc-mid-q-0930",
              "bpsc-mid-q-0931",
              "bpsc-mid-q-0932",
              "bpsc-mid-q-0933",
              "bpsc-mid-q-0934",
              "bpsc-mid-q-0935",
              "bpsc-mid-q-0936",
              "bpsc-mid-q-0937"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-mid-gs",
    "examId": "bpsc-tre-middle",
    "name": "General Studies",
    "code": "BPSC-MID-GS",
    "iconName": "BookOpen",
    "description": "BPSC TRE Middle General Studies covering Indian National Movement, Bihar Special History and Geography, and Mental Ability.",
    "chapters": [
      {
        "id": "bpsc-mid-gs-c1",
        "subjectId": "bpsc-mid-gs",
        "examId": "bpsc-tre-middle",
        "title": "General Studies: Science, Movement & Bihar Context",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-mid-gs-t1",
            "chapterId": "bpsc-mid-gs-c1",
            "subjectId": "bpsc-mid-gs",
            "examId": "bpsc-tre-middle",
            "title": "Indian National Movement: Champaran Satyagraha & 1857 in Bihar",
            "order": 1,
            "notes": "1857 Revolt in Bihar: Led by the 80-year-old chieftain Babu Veer Kunwar Singh of Jagdishpur (Arrah). He defeated British forces under Captain Le Grand and fought valiantly until his death.\n\nChamparan Satyagraha (1917): Mahatma Gandhi's first civil disobedience movement in India. Raj Kumar Shukla persuaded Gandhi at the Lucknow Congress (1916) to visit Champaran to protest against the exploitative Tinkathia system (compulsory cultivation of indigo on 3/20th of land). The British government abolished Tinkathia and refunded 25% of illegal dues. Key associates: Rajendra Prasad, J.B. Kripalani, Mazharul Haque, Anugrah Narayan Sinha.",
            "concepts": [
              "Veer Kunwar Singh of Jagdishpur led the 1857 rebellion in Bihar.",
              "Raj Kumar Shukla invited Mahatma Gandhi to Champaran in 1916.",
              "Tinkathia system forced farmers to plant indigo on 3/20th of every bigha.",
              "Champaran was Gandhi's first successful Satyagraha experiment in India."
            ],
            "keyTakeaways": [
              "Tinkathia mandated indigo on 3/20th of land.",
              "Babu Veer Kunwar Singh belonged to Jagdishpur (Bhojpur).",
              "Dr. Rajendra Prasad and J.B. Kripalani assisted Gandhi in Champaran."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "Bihar Special History & NCERT Modern Indian History",
            "pyqIds": [
              "bpsc-mid-q-1078",
              "bpsc-mid-q-1079",
              "bpsc-mid-q-1080",
              "bpsc-mid-q-1081",
              "bpsc-mid-q-1082",
              "bpsc-mid-q-1083",
              "bpsc-mid-q-1084",
              "bpsc-mid-q-1085"
            ]
          },
          {
            "id": "bpsc-mid-gs-t2",
            "chapterId": "bpsc-mid-gs-c1",
            "subjectId": "bpsc-mid-gs",
            "examId": "bpsc-tre-middle",
            "title": "Geography of Bihar: River Systems, Climate & Agro-ecological Zones",
            "order": 2,
            "notes": "Bihar is located in the eastern Gangetic plain, bounded by Nepal to the north, Jharkhand to the south, West Bengal to the east, and Uttar Pradesh to the west. The Ganga river flows from west to east through the state, dividing it into North Bihar and South Bihar.\n\nRivers of North Bihar (originating in Himalayas, prone to floods): Ghaghra, Gandak, Burhi Gandak, Bagmati, Kamla, Kosi ('Sorrow of Bihar' due to frequent course shifting), Mahananda. Rivers of South Bihar (originating in peninsular plateau): Karmanasa, Son, Punpun, Falgu (Gaya), Kiul. Agro-climatic zones: Zone I (North-West alluvial), Zone II (North-East alluvial), Zone III (South Bihar alluvial).",
            "concepts": [
              "Ganga river bisects Bihar from west to east.",
              "Kosi river is known as the 'Sorrow of Bihar' due to massive seasonal avulsion and flooding.",
              "Son river originates in Amarkantak and joins Ganga near Patna.",
              "Falgu river flows past Gaya, site of sacred Pind Daan rituals."
            ],
            "keyTakeaways": [
              "Kosi is termed the 'Sorrow of Bihar'.",
              "Son river joins the Ganga on its right bank near Patna.",
              "Someshwar hills in West Champaran form the highest point of Bihar."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "Geography of Bihar (SCERT Class 9 & BPSC Studies)",
            "pyqIds": [
              "bpsc-mid-q-1078",
              "bpsc-mid-q-1079",
              "bpsc-mid-q-1080",
              "bpsc-mid-q-1081",
              "bpsc-mid-q-1082",
              "bpsc-mid-q-1083",
              "bpsc-mid-q-1084",
              "bpsc-mid-q-1085"
            ]
          },
          {
            "id": "bpsc-mid-gs-t3",
            "chapterId": "bpsc-mid-gs-c1",
            "subjectId": "bpsc-mid-gs",
            "examId": "bpsc-tre-middle",
            "title": "General Mental Ability, Numerical Logic & Elementary Reasoning",
            "order": 3,
            "notes": "Elementary reasoning evaluated in BPSC General Studies includes:\n- Number series and alphanumeric patterns (finding next term or wrong term).\n- Blood relations: Family trees, decoding expressions (A + B means A is father of B).\n- Direction sense: Compass orientation, Pythagoras displacement.\n- Coding-decoding: Letter shifting, positional alphabet values (A=1 to Z=26; reverse pairs A-Z, B-Y).\n- Syllogisms: Venn diagram testing of valid deductive arguments.",
            "concepts": [
              "Direction sense: Clockwise turns from North -> East (90°) -> South (180°) -> West (270°).",
              "Opposite letter pairs sum to 27: A(1) + Z(26) = 27; B(2) + Y(25) = 27.",
              "Number series: Check first differences, second differences, prime sequences, and squares/cubes."
            ],
            "solvedExamples": [
              {
                "problem": "A man walks 6 km North, turns right and walks 8 km. How far is he from his starting point?",
                "solution": "Pythagoras displacement: d = √(6² + 8²) = √(36 + 64) = √100 = 10 km North-East."
              }
            ],
            "keyTakeaways": [
              "Draw simple sketch diagrams immediately for direction sense problems.",
              "Opposite alphabet letter positions always sum to 27.",
              "Always look for second-order differences in tricky number series."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "BPSC General Mental Ability Syllabus",
            "pyqIds": [
              "bpsc-mid-q-1115",
              "bpsc-mid-q-1116",
              "bpsc-mid-q-1117",
              "bpsc-mid-q-1118",
              "bpsc-mid-q-1119",
              "bpsc-mid-q-1120",
              "bpsc-mid-q-1121",
              "bpsc-mid-q-1122"
            ]
          },
          {
            "id": "bpsc-mid-gs-t4",
            "chapterId": "bpsc-mid-gs-c1",
            "subjectId": "bpsc-mid-gs",
            "examId": "bpsc-tre-middle",
            "title": "Indian Constitution & Fundamental Rights Basics",
            "order": 4,
            "notes": "The Constitution of India was adopted on 26 November 1949 and came into effect on 26 January 1950. Dr. B.R. Ambedkar was the Chairman of the Drafting Committee. Dr. Rajendra Prasad (of Bihar) was the President of the Constituent Assembly.\n\nFundamental Rights (Part III, Articles 12-35):\n1. Right to Equality (Articles 14-18)\n2. Right to Freedom (Articles 19-22)\n3. Right against Exploitation (Articles 23-24; Art 24 bans child labor in hazardous factories)\n4. Right to Freedom of Religion (Articles 25-28)\n5. Cultural and Educational Rights (Articles 29-30)\n6. Right to Constitutional Remedies (Article 32 - called the 'Heart and Soul' of the Constitution by Dr. Ambedkar; Supreme Court issues writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto). Article 21A provides Free and Compulsory Education to children aged 6 to 14 years.",
            "concepts": [
              "Dr. Rajendra Prasad was President of the Constituent Assembly.",
              "Article 32 (Constitutional Remedies) is the 'Heart and Soul' of the Constitution.",
              "Article 21A (added by 86th Constitutional Amendment 2002) guarantees Right to Education (ages 6-14).",
              "Writs: Habeas Corpus ('produce the body'), Mandamus ('we command')."
            ],
            "keyTakeaways": [
              "Article 21A makes elementary education a Fundamental Right for ages 6-14.",
              "Article 32 empowers citizens to move the Supreme Court for rights enforcement.",
              "Dr. Rajendra Prasad from Bihar was the first President of India."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 8 & 9 Indian Polity",
            "pyqIds": [
              "bpsc-mid-q-1078",
              "bpsc-mid-q-1079",
              "bpsc-mid-q-1080",
              "bpsc-mid-q-1081",
              "bpsc-mid-q-1082",
              "bpsc-mid-q-1083",
              "bpsc-mid-q-1084",
              "bpsc-mid-q-1085"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-sec-phy",
    "examId": "bpsc-tre-secondary",
    "name": "Physics (Secondary Science)",
    "code": "BPSC-SEC-PHY",
    "iconName": "Lightbulb",
    "description": "BPSC TRE Secondary Science Physics: Mechanics, Waves, Optics, Electricity, and Electromagnetism.",
    "chapters": [
      {
        "id": "bpsc-sec-phy-c1",
        "subjectId": "bpsc-sec-phy",
        "examId": "bpsc-tre-secondary",
        "title": "Mechanics, Gravitation & Waves",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-sec-phy-t1",
            "chapterId": "bpsc-sec-phy-c1",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Motion in One Dimension & Equations of Motion",
            "order": 1,
            "notes": "Kinematics in 1D analyzes position, velocity, and acceleration. Velocity is time derivative of position (v = dx/dt), and acceleration is time derivative of velocity (a = dv/dt).\n\nFor constant acceleration, the standard kinematic equations are:\n1. v = u + at\n2. s = ut + (1/2)at²\n3. v² = u² + 2as\n4. Distance traveled in n-th second: s_nth = u + (a/2)(2n - 1).\nIn vertical motion under gravity (g = 9.8 m/s²), maximum height reached when projected upward with speed u is H = u² / (2g), and time of flight is T = 2u / g.",
            "concepts": [
              "Three kinematic equations apply strictly when acceleration is uniform.",
              "Distance in n-th second: s_nth = u + (a/2)(2n - 1).",
              "Maximum vertical projectile height: H_max = u² / (2g).",
              "Time to reach maximum height equals time to return to ground: t_rise = t_fall = u / g."
            ],
            "formulas": [
              "v = u + at",
              "s = ut + (1/2)at²",
              "v² = u² + 2as",
              "s_nth = u + (a / 2)(2n - 1)",
              "H_max = u² / (2g); T_flight = 2u / g"
            ],
            "solvedExamples": [
              {
                "problem": "A stone is thrown vertically upward with speed 20 m/s. Taking g = 10 m/s², find the maximum height reached.",
                "solution": "At maximum height v = 0.\nv² = u² - 2gh => 0 = 20² - 2(10)h => 20h = 400 => h = 20 metres."
              }
            ],
            "keyTakeaways": [
              "Equations of motion apply ONLY for constant acceleration.",
              "At highest point of vertical trajectory, instantaneous velocity is 0 while acceleration is -g.",
              "Distance in n-th second uses (2n - 1)."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 8 & Class 11 Chapter 3",
            "pyqIds": [
              "bpsc-sec-q-0001",
              "bpsc-sec-q-0087",
              "bpsc-sec-q-0088",
              "bpsc-sec-q-0089",
              "bpsc-sec-q-0090",
              "bpsc-sec-q-0091",
              "bpsc-sec-q-0092",
              "bpsc-sec-q-0093"
            ]
          },
          {
            "id": "bpsc-sec-phy-t2",
            "chapterId": "bpsc-sec-phy-c1",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Newton's Laws, Momentum, Impulse & Friction",
            "order": 2,
            "notes": "Newton's First Law defines inertia and inertial reference frames. Newton's Second Law: F = dp/dt = ma. Impulse is the change in momentum: J = F * Δt = Δp = m(v - u).\n\nCatching a cricket ball: Pulling hands backward increases contact duration Δt, which reduces impact force F on the hands. Friction: Static friction f_s <= μ_s * N; Kinetic friction f_k = μ_k * N (μ_k < μ_s). Angle of friction θ satisfies tan θ = μ.",
            "concepts": [
              "Impulse J = F × Δt = Change in momentum (mv - mu).",
              "Lengthening impact duration reduces stopping impact force (cricket catching, car airbags).",
              "Static friction is self-adjusting up to its maximum value (limiting friction).",
              "Coefficient of static friction is greater than coefficient of kinetic friction (μ_s > μ_k)."
            ],
            "formulas": [
              "F = dp / dt = ma",
              "Impulse J = F × Δt = m(v - u)",
              "f_limiting = μ_s × N",
              "f_kinetic = μ_k × N"
            ],
            "solvedExamples": [
              {
                "problem": "A 0.15 kg cricket ball moving at 20 m/s is stopped by a player in 0.1 s. Find average force exerted on the hands.",
                "solution": "Change in momentum Δp = 0 - (0.15 × 20) = -3.0 kg·m/s.\nAverage force F = |Δp / Δt| = 3.0 / 0.1 = 30 Newtons."
              }
            ],
            "keyTakeaways": [
              "Impulse equals area under the Force-Time graph.",
              "Airbags and shock absorbers operate by lengthening impact duration.",
              "Static friction is self-adjusting."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 9 & Class 11 Chapter 5",
            "pyqIds": [
              "bpsc-sec-q-0004",
              "bpsc-sec-q-0134",
              "bpsc-sec-q-0135",
              "bpsc-sec-q-0136",
              "bpsc-sec-q-0137",
              "bpsc-sec-q-0138",
              "bpsc-sec-q-0139",
              "bpsc-sec-q-0140"
            ]
          },
          {
            "id": "bpsc-sec-phy-t3",
            "chapterId": "bpsc-sec-phy-c1",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Gravitation, Free Fall, Kepler's Laws & Archimedes' Principle",
            "order": 3,
            "notes": "Newton's Law of Gravitation: F = G(m₁m₂)/r². Kepler's Three Laws of Planetary Motion:\n1. Law of Orbits: Planets move in elliptical orbits with the Sun at one focus.\n2. Law of Areas: Radius vector sweeps out equal areas in equal intervals of time (Conservation of Angular Momentum).\n3. Law of Periods: Square of orbital period is proportional to cube of semi-major axis: T² ∝ r³.\n\nVariation of g: g decreases with altitude h (g' = g[1 - 2h/R]) and decreases with depth d (g' = g[1 - d/R]). At center of Earth (d = R), g = 0.",
            "concepts": [
              "Kepler's Second Law is a consequence of conservation of angular momentum.",
              "Kepler's Third Law: T² ∝ r³.",
              "g decreases both when going up into the sky and going down into a deep mine.",
              "Escape velocity from Earth's surface: v_e = √(2gR) ≈ 11.2 km/s."
            ],
            "formulas": [
              "F = G(m₁m₂) / r²",
              "Kepler: T² / r³ = constant",
              "g_altitude = g(1 - 2h/R) (for h << R)",
              "g_depth = g(1 - d/R)",
              "v_escape = √(2gR) ≈ 11.2 km/s"
            ],
            "solvedExamples": [
              {
                "problem": "If the distance between Earth and Sun is doubled, how many Earth years would make one orbital year?",
                "solution": "T² ∝ r³ => (T₂ / T₁)² = (r₂ / r₁)³ = (2 / 1)³ = 8.\nT₂ / T₁ = √8 = 2√2 ≈ 2.83 Earth years."
              }
            ],
            "keyTakeaways": [
              "Planets travel fastest when closest to Sun (perihelion) and slowest when farthest (aphelion).",
              "Escape velocity on Earth is 11.2 km/s.",
              "g is maximum at the surface of the Earth (specifically at the poles)."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 10 & Class 11 Chapter 8",
            "pyqIds": [
              "bpsc-sec-q-0006",
              "bpsc-sec-q-0181",
              "bpsc-sec-q-0182",
              "bpsc-sec-q-0183",
              "bpsc-sec-q-0184",
              "bpsc-sec-q-0185",
              "bpsc-sec-q-0186",
              "bpsc-sec-q-0187"
            ]
          },
          {
            "id": "bpsc-sec-phy-t4",
            "chapterId": "bpsc-sec-phy-c1",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Work, Energy, Conservation of Mechanical Energy & Power",
            "order": 4,
            "notes": "Work-Energy Theorem: Net work done on a body equals the change in its kinetic energy: W_net = ΔKE = (1/2)mv² - (1/2)mu².\n\nConservative forces (gravity, electrostatic, spring) do work that depends solely on initial and final positions, not on the path taken; work done in a closed path is zero. Non-conservative forces (friction, air drag) dissipate energy as heat. Potential energy of stretched spring: U = (1/2)kx².",
            "concepts": [
              "Work-Energy Theorem: Total Work = Change in Kinetic Energy (W = ΔKE).",
              "Conservative force: Work done around any closed loop is zero (∮ F·dr = 0).",
              "Elastic potential energy of a spring = (1/2)kx² (k is spring constant).",
              "Power P = F · v = Force × Velocity."
            ],
            "formulas": [
              "W_net = ΔKE = (1/2)m(v² - u²)",
              "Spring PE: U = (1/2)kx²",
              "P = dW / dt = F · v",
              "Mechanical Energy: E = KE + PE = constant (in conservative field)"
            ],
            "solvedExamples": [
              {
                "problem": "A car of mass 1000 kg accelerates from 36 km/h to 72 km/h. Find work done by engine.",
                "solution": "u = 36 × (5/18) = 10 m/s; v = 72 × (5/18) = 20 m/s.\nW = (1/2)m(v² - u²) = (1/2)(1000)(20² - 10²) = 500 × (400 - 100) = 500 × 300 = 150,000 J = 150 kJ."
              }
            ],
            "keyTakeaways": [
              "Work done is the area under the Force-Displacement graph.",
              "Work-energy theorem holds for both conservative and non-conservative forces.",
              "Instantaneous power is P = F · v."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 11 & Class 11 Chapter 6",
            "pyqIds": [
              "bpsc-sec-q-0228",
              "bpsc-sec-q-0229",
              "bpsc-sec-q-0230",
              "bpsc-sec-q-0231",
              "bpsc-sec-q-0232",
              "bpsc-sec-q-0233",
              "bpsc-sec-q-0234",
              "bpsc-sec-q-0235"
            ]
          },
          {
            "id": "bpsc-sec-phy-t5",
            "chapterId": "bpsc-sec-phy-c1",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Wave Motion, Speed of Sound, Doppler Effect Basics & Echoes",
            "order": 5,
            "notes": "Waves transport energy and momentum without net transport of matter. Transverse waves: Particle oscillation perpendicular to wave propagation (light, waves on string). Longitudinal waves: Particle oscillation parallel to wave propagation (sound waves, compression and rarefaction).\n\nNewton-Laplace formula for speed of sound in gas: v = √(γP / ρ) = √(γRT / M). Doppler Effect: The apparent shift in frequency when source and observer are in relative motion. When source approaches stationary observer, apparent frequency increases: f' = f [v / (v - v_s)].",
            "concepts": [
              "Transverse waves exhibit polarization; Longitudinal waves cannot be polarized.",
              "Speed of sound in gases: v = √(γRT / M); increases with temperature.",
              "Doppler Effect: Approaching source produces higher pitch (frequency shift upward).",
              "Sound velocity is independent of atmospheric pressure (at constant temperature)."
            ],
            "formulas": [
              "v = f × λ",
              "Laplace formula: v = √(γP / ρ) = √(γRT / M)",
              "Doppler (Approaching source): f' = f × [v / (v - v_s)]",
              "Doppler (Receding source): f' = f × [v / (v + v_s)]"
            ],
            "solvedExamples": [
              {
                "problem": "Why does a train whistle sound higher in pitch as the train rushes towards an observer on a platform?",
                "solution": "By the Doppler Effect, as the sound source moves toward the observer, wave crests are compressed in front of the source, decreasing wavelength and increasing the observed frequency (pitch)."
              }
            ],
            "keyTakeaways": [
              "Polarization proves light is a transverse wave; longitudinal sound waves cannot polarize.",
              "Speed of sound in air is independent of pressure if temperature remains constant.",
              "Approaching source = higher pitch; Receding source = lower pitch."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 12 & Class 11 Chapter 15",
            "pyqIds": [
              "bpsc-sec-q-0275",
              "bpsc-sec-q-0276",
              "bpsc-sec-q-0277",
              "bpsc-sec-q-0278",
              "bpsc-sec-q-0279",
              "bpsc-sec-q-0280",
              "bpsc-sec-q-0281",
              "bpsc-sec-q-0282"
            ]
          }
        ]
      },
      {
        "id": "bpsc-sec-phy-c2",
        "subjectId": "bpsc-sec-phy",
        "examId": "bpsc-tre-secondary",
        "title": "Optics, Electricity & Electromagnetism",
        "order": 2,
        "topics": [
          {
            "id": "bpsc-sec-phy-t6",
            "chapterId": "bpsc-sec-phy-c2",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Geometrical Optics: Reflection, Refraction & Lens/Mirror Formulas",
            "order": 1,
            "notes": "Sign conventions (Cartesian): Light travels from left to right; distances in direction of incident light are positive (+), opposite are negative (-); heights above principal axis are positive (+), below are negative (-).\n\nMirror Formula: 1/f = 1/v + 1/u, Magnification m = -v/u. Thin Lens Formula: 1/f = 1/v - 1/u, Magnification m = +v/u. Lens Maker's Formula: 1/f = (μ - 1)(1/R₁ - 1/R₂). Total Internal Reflection (TIR) occurs when light travels from denser to rarer medium at angle greater than critical angle: sin C = 1 / μ (optical fibres, mirage, diamond brilliance).",
            "concepts": [
              "TIR conditions: 1. Denser to rarer medium; 2. Angle of incidence > Critical angle (sin C = 1/n).",
              "Lens Maker's Formula: 1/f = (μ - 1)(1/R₁ - 1/R₂).",
              "Optical fibres transmit light signals lossless via successive total internal reflections.",
              "Combination of thin lenses in contact: P_total = P₁ + P₂ and 1/F = 1/f₁ + 1/f₂."
            ],
            "formulas": [
              "Mirror: 1/f = 1/v + 1/u; Lens: 1/f = 1/v - 1/u",
              "Lens Maker's: 1/f = (n - 1)(1/R₁ - 1/R₂)",
              "Critical Angle: sin C = 1 / n",
              "P_net = P₁ + P₂"
            ],
            "solvedExamples": [
              {
                "problem": "Find the critical angle for glass with refractive index n = 1.5.",
                "solution": "sin C = 1 / n = 1 / 1.5 = 2/3 ≈ 0.6667 => C = arcsin(0.6667) ≈ 41.8°."
              }
            ],
            "keyTakeaways": [
              "Total internal reflection requires denser-to-rarer light path and i > critical angle.",
              "Optical fibres rely strictly on TIR, not mirrors.",
              "Submerging a glass lens in water increases its focal length and reduces its optical power."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 10 & Class 12 Chapter 9",
            "pyqIds": [
              "bpsc-sec-q-0322",
              "bpsc-sec-q-0323",
              "bpsc-sec-q-0324",
              "bpsc-sec-q-0325",
              "bpsc-sec-q-0326",
              "bpsc-sec-q-0327",
              "bpsc-sec-q-0328",
              "bpsc-sec-q-0329"
            ]
          },
          {
            "id": "bpsc-sec-phy-t7",
            "chapterId": "bpsc-sec-phy-c2",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Human Eye, Dispersion, Atmospheric Refraction & Scattering",
            "order": 2,
            "notes": "Rayleigh Scattering: The intensity of scattered light is inversely proportional to the 4th power of wavelength: I ∝ 1 / λ⁴. Blue light has short wavelength and is scattered strongly, making the clear sky appear blue. Red light has longest wavelength, is scattered least, and penetrates furthest, making danger signals red and sunrise/sunset appear reddish.\n\nAtmospheric refraction: Sun is visible ~2 minutes before actual sunrise and ~2 minutes after actual sunset (lengthening day by ~4 minutes). Advanced optical instruments: Compound microscope (Objective lens short f, Eyepiece larger f) and Astronomical telescope (Objective large f, Eyepiece short f).",
            "concepts": [
              "Rayleigh scattering law: Intensity I ∝ 1 / λ⁴.",
              "Sky appears blue due to strong scattering of shorter blue wavelengths by air molecules.",
              "Sunset/sunrise appears red because longer red waves penetrate through thick atmospheric paths.",
              "Astronomical telescope has large objective focal length to gather maximum light from stars."
            ],
            "formulas": [
              "Rayleigh Scattering: I ∝ 1 / λ⁴",
              "Microscope Magnification: m ≈ -(L / f_o) × (D / f_e)",
              "Telescope Magnification: m = -f_o / f_e"
            ],
            "solvedExamples": [
              {
                "problem": "Why does an astronaut in space see the sky as dark/black rather than blue?",
                "solution": "In outer space, there is no atmosphere containing gas molecules or dust particles to scatter sunlight. With no scattered light entering the eye, the sky appears completely dark."
              }
            ],
            "keyTakeaways": [
              "Danger signals are red because red scatters least (longest wavelength).",
              "Rayleigh scattering follows 1/λ⁴.",
              "Early sunrise and delayed sunset add ~4 minutes to the apparent day length."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 11 & Class 12 Chapter 9",
            "pyqIds": [
              "bpsc-sec-q-0004",
              "bpsc-sec-q-0006",
              "bpsc-sec-q-0322",
              "bpsc-sec-q-0323",
              "bpsc-sec-q-0324",
              "bpsc-sec-q-0325",
              "bpsc-sec-q-0326",
              "bpsc-sec-q-0327"
            ]
          },
          {
            "id": "bpsc-sec-phy-t8",
            "chapterId": "bpsc-sec-phy-c2",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Current Electricity, Ohm's Law, Resistivity & Joule's Heating",
            "order": 3,
            "notes": "Microscopic view of current: I = n·e·A·v_d, where n is free electron density, A is cross-sectional area, and v_d is drift velocity (~10^(-4) m/s). Temperature dependence: Resistance of metallic conductors increases linearly with temperature (R_t = R₀(1 + αΔT)); resistance of semiconductors (silicon, germanium) decreases with temperature (negative temperature coefficient α).\n\nKirchhoff's Rules:\n1. Junction Rule (KCL): ∑ I_in = ∑ I_out (Conservation of Electric Charge).\n2. Loop Rule (KVL): ∑ ΔV = 0 around any closed circuit loop (Conservation of Energy).\nWheatstone Bridge: Balanced when R₁/R₂ = R₃/R₄, with zero current through galvanometer.",
            "concepts": [
              "Kirchhoff's Junction Rule (KCL) is based on Conservation of Charge.",
              "Kirchhoff's Loop Rule (KVL) is based on Conservation of Energy.",
              "Metals have positive temperature coefficient; Semiconductors have negative coefficient.",
              "Balanced Wheatstone Bridge: R₁ / R₂ = R₃ / R₄ (Galvanometer shows null deflection)."
            ],
            "formulas": [
              "I = n × e × A × v_d",
              "R_T = R₀(1 + α × ΔT)",
              "Wheatstone Balance: P / Q = R / S",
              "Joule Heating: H = I²Rt"
            ],
            "solvedExamples": [
              {
                "problem": "Four resistors 2 Ω, 4 Ω, 3 Ω, and 6 Ω are connected in a Wheatstone bridge. Is the bridge balanced?",
                "solution": "Check ratio: P / Q = 2 / 4 = 1/2. R / S = 3 / 6 = 1/2.\nSince P/Q = R/S = 1/2, the bridge is balanced. No current flows through the central galvanometer branch."
              }
            ],
            "keyTakeaways": [
              "KCL expresses conservation of charge; KVL expresses conservation of energy.",
              "Semiconductors have negative temperature coefficients of resistance.",
              "Drift velocity of conduction electrons in copper is surprisingly slow (fractions of mm/s)."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 12 & Class 12 Chapter 3 (Current Electricity)",
            "pyqIds": [
              "bpsc-sec-q-0369",
              "bpsc-sec-q-0370",
              "bpsc-sec-q-0371",
              "bpsc-sec-q-0372",
              "bpsc-sec-q-0373",
              "bpsc-sec-q-0374",
              "bpsc-sec-q-0375",
              "bpsc-sec-q-0376"
            ]
          },
          {
            "id": "bpsc-sec-phy-t9",
            "chapterId": "bpsc-sec-phy-c2",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Magnetic Effects, Ampere's Law, Solenoids & Fleming's Rules",
            "order": 4,
            "notes": "Magnetic force on a moving charged particle: Lorentz Force F = q(v × B) = qvB sin θ. Magnetic force does ZERO work on a charge because force is always perpendicular to velocity (acts as centripetal force in uniform field, forming circular orbits of radius r = mv / qB).\n\nBiot-Savart Law and Ampere's Circuital Law: ∮ B · dl = μ₀ I_enclosed. Magnetic field at the center of circular coil: B = (μ₀ I) / (2R). Magnetic field inside ideal solenoid: B = μ₀ n I (where n = N / L is turns per unit length). Magnetic field is completely independent of solenoid radius.",
            "concepts": [
              "Lorentz magnetic force does zero work on a charge (F ⊥ v; kinetic energy remains constant).",
              "Charge moving perpendicular to B describes a circle with radius r = mv / (qB).",
              "Ampere's Circuital Law: ∮ B · dl = μ₀ I.",
              "Solenoid internal field: B = μ₀ n I (Uniform, independent of radius)."
            ],
            "formulas": [
              "F = q(v × B) = qvB sin θ",
              "Circular orbit radius: r = mv / (qB)",
              "Solenoid internal field: B = μ₀ × n × I (n = N / L)",
              "Straight wire field: B = (μ₀ I) / (2πr)"
            ],
            "solvedExamples": [
              {
                "problem": "A proton moves with speed 2 × 10⁶ m/s perpendicular to a magnetic field of 0.5 T. What work is done by the magnetic force on the proton in 5 seconds?",
                "solution": "Zero. Magnetic force F = q(v × B) is always perpendicular to velocity. Since displacement and force are orthogonal (cos 90° = 0), work done is strictly 0 Joules."
              }
            ],
            "keyTakeaways": [
              "Magnetic force alters direction of motion, NEVER the speed or kinetic energy.",
              "Internal field of a solenoid is uniform and given by μ₀ n I.",
              "Cyclotron frequency f = qB / (2πm) is independent of particle speed."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 13 & Class 12 Chapter 4",
            "pyqIds": [
              "bpsc-sec-q-0416",
              "bpsc-sec-q-0417",
              "bpsc-sec-q-0418",
              "bpsc-sec-q-0419",
              "bpsc-sec-q-0420",
              "bpsc-sec-q-0421",
              "bpsc-sec-q-0422",
              "bpsc-sec-q-0423"
            ]
          },
          {
            "id": "bpsc-sec-phy-t10",
            "chapterId": "bpsc-sec-phy-c2",
            "subjectId": "bpsc-sec-phy",
            "examId": "bpsc-tre-secondary",
            "title": "Electromagnetic Induction, Faraday's Laws & AC/DC Generators",
            "order": 5,
            "notes": "Faraday's Laws of Electromagnetic Induction:\n1. Whenever magnetic flux linked with a closed circuit changes, an electromotive force (EMF) is induced.\n2. Magnitude of induced EMF is proportional to rate of change of magnetic flux: ε = -N (dΦ / dt).\n\nLenz's Law (represented by negative sign): The polarity of induced EMF is such that it always produces a current that opposes the change in magnetic flux that caused it (direct consequence of the Law of Conservation of Energy).\nAC Generator: Produces alternating current via rotating coil in magnetic field; uses slip rings. DC Generator uses split-ring commutator to produce unidirectional pulsating current.",
            "concepts": [
              "Faraday's Law: Induced EMF ε = -dΦ/dt.",
              "Lenz's Law is a manifestation of the Law of Conservation of Energy.",
              "AC Generator uses Slip Rings; DC Generator uses Split-Ring Commutator.",
              "Transformer operates on mutual induction (AC only, cannot operate on DC)."
            ],
            "formulas": [
              "Φ = B · A = BA cos θ",
              "ε = -N × (dΦ / dt)",
              "Transformer: V_s / V_p = N_s / N_p = I_p / I_s"
            ],
            "solvedExamples": [
              {
                "problem": "Why can a transformer not be used to step up or step down direct current (DC)?",
                "solution": "A transformer operates on the principle of Mutual Induction, which requires a continuously changing magnetic flux. Direct current produces a steady, unchanging magnetic field (dΦ/dt = 0), so no EMF is induced in the secondary coil."
              }
            ],
            "keyTakeaways": [
              "Lenz's law is based strictly on conservation of energy.",
              "Transformers function only with AC, never steady DC.",
              "Slip rings produce AC; Split-ring commutators produce DC."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 13 & Class 12 Chapter 6",
            "pyqIds": [
              "bpsc-sec-q-0463",
              "bpsc-sec-q-0464",
              "bpsc-sec-q-0465",
              "bpsc-sec-q-0466",
              "bpsc-sec-q-0467",
              "bpsc-sec-q-0468",
              "bpsc-sec-q-0469",
              "bpsc-sec-q-0470"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-sec-chem",
    "examId": "bpsc-tre-secondary",
    "name": "Chemistry (Secondary Science)",
    "code": "BPSC-SEC-CHEM",
    "iconName": "TestTube2",
    "description": "BPSC TRE Secondary Science Chemistry: Atomic Structure, Chemical Bonding, Mole Concept, Carbon Compounds, and Periodic Classification.",
    "chapters": [
      {
        "id": "bpsc-sec-chem-c1",
        "subjectId": "bpsc-sec-chem",
        "examId": "bpsc-tre-secondary",
        "title": "Matter, Atomic Structure & Chemical Bonding",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-sec-chem-t1",
            "chapterId": "bpsc-sec-chem-c1",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Atomic Structure: Bohr Model, Subatomic Particles & Electron Configuration",
            "order": 1,
            "notes": "Subatomic particles: Electron (J.J. Thomson, charge -1.6×10^(-19) C, mass 9.1×10^(-31) kg), Proton (E. Goldstein / Rutherford, mass 1.67×10^(-27) kg), Neutron (James Chadwick 1932, neutral particle).\n\nRutherford Alpha-scattering experiment showed that most of the atom is empty space with a dense, positively charged nucleus. Bohr Model: Electrons revolve in stationary discrete energy orbits without radiating energy; angular momentum is quantized: mvr = nh / (2π). Maximum electrons per shell: 2n² (K=2, L=8, M=18, N=32). Isotopes have same atomic number but different mass numbers (¹H, ²H, ³H); Isobars have same mass number but different atomic numbers (⁴⁰Ar, ⁴⁰Ca).",
            "concepts": [
              "James Chadwick discovered the neutron in 1932.",
              "Bohr's quantization postulate: mvr = nh / (2π).",
              "Maximum electrons in n-th principal shell = 2n².",
              "Isotopes: Same Z, different A (identical chemical properties, different physical properties).",
              "Isobars: Same A, different Z."
            ],
            "formulas": [
              "Max electrons = 2n² (K=2, L=8, M=18, N=32)",
              "Angular momentum L = mvr = n(h / 2π)",
              "Mass number A = Protons (Z) + Neutrons (N)"
            ],
            "solvedExamples": [
              {
                "problem": "An atom has 17 protons, 17 electrons, and 18 neutrons. State its atomic number, mass number, and electron configuration.",
                "solution": "Atomic number Z = 17 (Chlorine). Mass number A = 17 + 18 = 35.\nElectron configuration: K = 2, L = 8, M = 7 (Valency = 8 - 7 = 1)."
              }
            ],
            "keyTakeaways": [
              "Neutron was discovered by James Chadwick.",
              "Isotopes exhibit identical chemical reactions because they have identical electron configurations.",
              "Max electrons per shell: 2n²."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 4 (Structure of the Atom) & Class 11 Chapter 2",
            "pyqIds": [
              "bpsc-sec-q-0002",
              "bpsc-sec-q-0510",
              "bpsc-sec-q-0511",
              "bpsc-sec-q-0512",
              "bpsc-sec-q-0513",
              "bpsc-sec-q-0514",
              "bpsc-sec-q-0515",
              "bpsc-sec-q-0516"
            ]
          },
          {
            "id": "bpsc-sec-chem-t2",
            "chapterId": "bpsc-sec-chem-c1",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Chemical Bonding: Ionic, Covalent & Coordinate Bonds",
            "order": 2,
            "notes": "Atoms combine to achieve stable octet noble gas configurations (Kossel-Lewis Octet Rule).\n1. Ionic (Electrovalent) Bond: Complete transfer of one or more valence electrons from metal to non-metal, forming electrostatic lattice (e.g. NaCl, MgCl₂, CaO). High melting points, soluble in polar water, conduct electricity in molten/aqueous state (free ions).\n2. Covalent Bond: Mutual sharing of electron pairs between non-metals (e.g. H₂, O₂, N₂ with triple bond, CH₄, H₂O). Lower melting points, non-conductors, directional bonds.\n3. Coordinate (Dative) Bond: Shared pair is contributed entirely by one donor atom having lone pairs (e.g. NH₄⁺, H₃O⁺).",
            "concepts": [
              "Ionic compounds conduct electricity ONLY in molten or aqueous state, not in solid lattice.",
              "Nitrogen molecule (N₂) contains a strong triple covalent bond (one σ, two π bonds).",
              "Coordinate bond: Donor atom provides both electrons of the shared pair (e.g. NH₃ -> H⁺ to form NH₄⁺).",
              "Electronegativity difference > 1.7 typically yields predominantly ionic character."
            ],
            "keyTakeaways": [
              "Solid ionic crystals do not conduct electricity because ions are locked in rigid lattice positions.",
              "Nitrogen has a triple covalent bond.",
              "Coordinate bond is also called a dative bond."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 3 & Class 11 Chapter 4",
            "pyqIds": [
              "bpsc-sec-q-0005",
              "bpsc-sec-q-0557",
              "bpsc-sec-q-0558",
              "bpsc-sec-q-0559",
              "bpsc-sec-q-0560",
              "bpsc-sec-q-0561",
              "bpsc-sec-q-0562",
              "bpsc-sec-q-0563"
            ]
          },
          {
            "id": "bpsc-sec-chem-t3",
            "chapterId": "bpsc-sec-chem-c1",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Mole Concept, Stoichiometry & Chemical Formulae",
            "order": 3,
            "notes": "A Mole is the amount of substance containing as many elementary entities as there are carbon-12 atoms in 12 grams of pure ¹²C (Avogadro's Number N_A = 6.022 × 10²³ particles/mol).\n\nKey relationships:\n- Number of moles n = Mass (m) / Molar Mass (M).\n- Number of particles N = n × N_A.\n- Molar Volume of any gas at STP (0°C, 1 atm): 22.4 litres (or 22.7 L at standard ambient).\n- Percentage composition: % of element = (Mass of element in 1 mol / Molar mass) × 100.",
            "concepts": [
              "1 mole = 6.022 × 10²³ atoms, molecules, or formula units (Avogadro's Number).",
              "At STP (0°C, 1 atm), 1 mole of any ideal gas occupies 22.4 litres.",
              "Empirical formula represents simplest whole-number ratio of constituent atoms.",
              "Molecular formula = n × (Empirical Formula), where n = Molar Mass / Empirical Mass."
            ],
            "formulas": [
              "n = m / M",
              "n = N / N_A (N_A = 6.022 × 10²³)",
              "n = Volume of gas at STP / 22.4 L",
              "% element = (Total element mass / Molar mass) × 100"
            ],
            "solvedExamples": [
              {
                "problem": "Calculate the mass of 0.5 moles of water (H₂O) and the number of molecules present.",
                "solution": "Molar mass of H₂O = 2(1) + 16 = 18 g/mol.\nMass m = n × M = 0.5 × 18 = 9 grams.\nNumber of molecules = 0.5 × 6.022 × 10²³ = 3.011 × 10²³ molecules."
              }
            ],
            "keyTakeaways": [
              "1 mole of ANY ideal gas occupies 22.4 L at STP.",
              "Molecular formula is an integer multiple of empirical formula.",
              "Avogadro's number is 6.022 × 10²³."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 3 (Atoms and Molecules) & Class 11 Chapter 1",
            "pyqIds": [
              "bpsc-sec-q-0604",
              "bpsc-sec-q-0605",
              "bpsc-sec-q-0606",
              "bpsc-sec-q-0607",
              "bpsc-sec-q-0608",
              "bpsc-sec-q-0609",
              "bpsc-sec-q-0610",
              "bpsc-sec-q-0611"
            ]
          },
          {
            "id": "bpsc-sec-chem-t4",
            "chapterId": "bpsc-sec-chem-c1",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "States of Matter, Gas Laws & Kinetic Molecular Theory",
            "order": 4,
            "notes": "Gas Laws:\n1. Boyle's Law: At constant T, P ∝ 1/V => P₁V₁ = P₂V₂ (Isothermal).\n2. Charles's Law: At constant P, V ∝ T (in Kelvin) => V₁/T₁ = V₂/T₂ (Isobaric).\n3. Gay-Lussac's Law: At constant V, P ∝ T => P₁/T₁ = P₂/T₂ (Isochoric).\n4. Ideal Gas Equation: PV = nRT, where universal gas constant R = 8.314 J/(mol·K) = 0.0821 L·atm/(mol·K).\nAbsolute zero is 0 Kelvin (-273.15°C), the theoretical temperature where molecular kinetic energy reaches zero.",
            "concepts": [
              "Boyle's Law: P₁V₁ = P₂V₂ at constant temperature.",
              "Charles's Law: V₁/T₁ = V₂/T₂ (Temperature MUST be in Kelvin: T = °C + 273).",
              "Ideal Gas Equation: PV = nRT.",
              "Absolute zero is 0 K (-273.15°C); volume of ideal gas theoretically extrapolates to zero."
            ],
            "formulas": [
              "P₁V₁ = P₂V₂ (Boyle's Law)",
              "V₁ / T₁ = V₂ / T₂ (Charles's Law)",
              "PV = nRT (R = 8.314 J/mol·K)"
            ],
            "solvedExamples": [
              {
                "problem": "A gas occupies 2.0 L at 1 atm. What will be its volume if pressure is increased to 4 atm at constant temperature?",
                "solution": "By Boyle's Law: P₁V₁ = P₂V₂ => 1 × 2.0 = 4 × V₂ => V₂ = 2.0 / 4 = 0.5 litres."
              }
            ],
            "keyTakeaways": [
              "Charles's law requires absolute temperature in Kelvin (add 273 to Celsius).",
              "Boyle's law: pressure and volume are inversely proportional.",
              "Real gases approach ideal gas behavior at high temperature and low pressure."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 11 Chapter 5 (States of Matter)",
            "pyqIds": [
              "bpsc-sec-q-0651",
              "bpsc-sec-q-0652",
              "bpsc-sec-q-0653",
              "bpsc-sec-q-0654",
              "bpsc-sec-q-0655",
              "bpsc-sec-q-0656",
              "bpsc-sec-q-0657",
              "bpsc-sec-q-0658"
            ]
          }
        ]
      },
      {
        "id": "bpsc-sec-chem-c2",
        "subjectId": "bpsc-sec-chem",
        "examId": "bpsc-tre-secondary",
        "title": "Inorganic & Organic Chemistry",
        "order": 2,
        "topics": [
          {
            "id": "bpsc-sec-chem-t5",
            "chapterId": "bpsc-sec-chem-c2",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Chemical Reactions, Types & Redox Chemistry",
            "order": 1,
            "notes": "Redox reactions involve simultaneous reduction and oxidation. Modern electron transfer definition: Oxidation is Loss of Electrons (OIL); Reduction is Gain of Electrons (RIG).\n\nOxidation number rules: Elementary state = 0; Fluorine is always -1; Oxygen is usually -2 (peroxides -1, OF₂ +2); Hydrogen is +1 (metal hydrides -1). Corrosion (rusting of iron) and Rancidity (oxidation of fats/oils in food, prevented by antioxidants like BHA/BHT and nitrogen flushing) are everyday redox processes.",
            "concepts": [
              "OIL RIG: Oxidation is Loss of electrons; Reduction is Gain of electrons.",
              "Oxidizing agent undergoes reduction; Reducing agent undergoes oxidation.",
              "Rancidity is oxidative deterioration of unsaturated fats; prevented by nitrogen packaging.",
              "Rusting is an electrochemical redox process forming hydrated iron(III) oxide."
            ],
            "solvedExamples": [
              {
                "problem": "Find the oxidation state of Manganese in KMnO₄.",
                "solution": "K is +1; Oxygen is -2. Let Mn be x.\n+1 + x + 4(-2) = 0 => 1 + x - 8 = 0 => x - 7 = 0 => x = +7."
              }
            ],
            "keyTakeaways": [
              "Manganese has +7 oxidation state in KMnO₄.",
              "Nitrogen gas is flushed into potato chip bags to prevent oxidative rancidity.",
              "Loss of electrons is oxidation; gain of electrons is reduction."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 1 & Class 11 Chapter 8",
            "pyqIds": [
              "bpsc-sec-q-0698",
              "bpsc-sec-q-0699",
              "bpsc-sec-q-0700",
              "bpsc-sec-q-0701",
              "bpsc-sec-q-0702",
              "bpsc-sec-q-0703",
              "bpsc-sec-q-0704",
              "bpsc-sec-q-0705"
            ]
          },
          {
            "id": "bpsc-sec-chem-t6",
            "chapterId": "bpsc-sec-chem-c2",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Acids, Bases, pH Calculations, Buffers & Salts",
            "order": 2,
            "notes": "Arrhenius: Acids give H+, bases give OH-. Bronsted-Lowry: Acids donate protons, bases accept protons. Lewis: Acids accept electron pairs, bases donate electron pairs (e.g. BF₃ is Lewis acid, NH₃ is Lewis base).\n\npH scale: pH = -log₁₀[H⁺]. For pure water at 25°C, [H⁺] = [OH⁻] = 10⁻⁷ M, so pH = 7. pH + pOH = 14. Common ion effect suppresses ionization of weak electrolytes. Buffer solution resists pH change upon addition of small amounts of acid or base (e.g. blood buffer: H₂CO₃ / HCO₃⁻).",
            "concepts": [
              "Lewis concept: Acid is an electron-pair acceptor; Base is an electron-pair donor.",
              "pH = -log₁₀[H⁺]; Each unit change represents a 10-fold change in H⁺ concentration.",
              "pH + pOH = 14 at 25°C.",
              "Blood pH is strictly maintained around 7.35 to 7.45 by carbonic acid-bicarbonate buffer."
            ],
            "formulas": [
              "pH = -log₁₀[H⁺]",
              "pOH = -log₁₀[OH⁻]",
              "pH + pOH = 14 (at 25°C)"
            ],
            "solvedExamples": [
              {
                "problem": "Find the pH of a 0.001 M HCl solution.",
                "solution": "HCl completely dissociates: [H⁺] = 0.001 M = 10⁻³ M.\npH = -log₁₀(10⁻³) = -(-3) = 3."
              }
            ],
            "keyTakeaways": [
              "A change from pH 4 to pH 2 represents a 100-fold increase in acidity (10²).",
              "BF₃ and AlCl₃ are electron-deficient Lewis acids.",
              "Blood pH is buffered between 7.35 and 7.45."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 2 & Class 11 Chapter 7",
            "pyqIds": [
              "bpsc-sec-q-0745",
              "bpsc-sec-q-0746",
              "bpsc-sec-q-0747",
              "bpsc-sec-q-0748",
              "bpsc-sec-q-0749",
              "bpsc-sec-q-0750",
              "bpsc-sec-q-0751",
              "bpsc-sec-q-0752"
            ]
          },
          {
            "id": "bpsc-sec-chem-t7",
            "chapterId": "bpsc-sec-chem-c2",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Metals, Reactivity Series, Metallurgy & Extraction",
            "order": 3,
            "notes": "Occurrence of metals: Ores are minerals from which metals can be extracted profitably. Bauxite (Al₂O₃·2H₂O), Haematite (Fe₂O₃), Cinnabar (HgS), Zinc blende (ZnS).\n\nExtraction principles based on reactivity:\n- High reactivity (K, Na, Ca, Mg, Al): Extracted by electrolytic reduction of molten chlorides or oxides (Hall-Héroult process for Al).\n- Moderate reactivity (Zn, Fe, Pb): Extracted by Roasting (sulfides) or Calcination (carbonates), followed by Carbon reduction in a blast furnace.\n- Low reactivity (Cu, Hg): Extracted by simple thermal reduction in air (e.g. 2HgS + 3O₂ -> 2HgO + 2SO₂; 2HgO -> 2Hg + O₂).",
            "concepts": [
              "Aluminium is extracted by electrolytic reduction of molten bauxite in cryolite (Hall-Héroult).",
              "Cinnabar is mercury sulfide (HgS); extracted by roasting in air.",
              "Gangue refers to the unwanted earthy/sandy impurities associated with mined ore.",
              "Flux + Gangue = Slag (fusible waste removed from furnace)."
            ],
            "keyTakeaways": [
              "Aluminium cannot be reduced by carbon; it requires electrolytic reduction.",
              "Haematite is Fe₂O₃; Magnetite is Fe₃O₄.",
              "Cryolite (Na₃AlF₆) lowers the melting point of alumina in the Hall-Héroult cell."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 3 & Class 12 Chapter 6",
            "pyqIds": [
              "bpsc-sec-q-0792",
              "bpsc-sec-q-0793",
              "bpsc-sec-q-0794",
              "bpsc-sec-q-0795",
              "bpsc-sec-q-0796",
              "bpsc-sec-q-0797",
              "bpsc-sec-q-0798",
              "bpsc-sec-q-0799"
            ]
          },
          {
            "id": "bpsc-sec-chem-t8",
            "chapterId": "bpsc-sec-chem-c2",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Carbon & its Compounds: Hydrocarbons, Functional Groups & IUPAC",
            "order": 4,
            "notes": "Carbon displays unique versatility due to Catenation (covalent self-linking forming long chains and rings) and Tetravalency. Allotropes: Diamond (sp³, 3D tetrahedral network, hardest), Graphite (sp², hexagonal planar layers with mobile pi electrons, slippery solid lubricant and electrical conductor), Fullerenes (C₆₀, soccer-ball cage).\n\nHydrocarbons: Saturated Alkanes (C_n H_(2n+2)), Unsaturated Alkenes (C_n H_(2n)), Alkynes (C_n H_(2n-2)). Functional groups: Alcohol (-OH), Aldehyde (-CHO), Ketone (>C=O), Carboxylic acid (-COOH), Ester (-COOR, sweet fruity smell formed by reaction of alcohol and carboxylic acid with conc. H₂SO₄ catalyst - Esterification). Saponification: Alkaline hydrolysis of esters/fats to produce soap and glycerol.",
            "concepts": [
              "Catenation and tetravalency account for the millions of carbon compounds.",
              "Graphite conducts electricity due to delocalized electrons in sp² hybridized layers.",
              "Esterification: Carboxylic acid + Alcohol -> Ester + Water (Fruity aroma).",
              "Saponification: Triglyceride fat + NaOH -> Soap + Glycerol."
            ],
            "formulas": [
              "Alkanes: C_n H_(2n+2)",
              "Alkenes: C_n H_(2n)",
              "Alkynes: C_n H_(2n-2)",
              "Esterification: RCOOH + R'OH -> RCOOR' + H₂O"
            ],
            "solvedExamples": [
              {
                "problem": "Write the IUPAC name and structure of CH₃-CH₂-CHO and CH₃-CO-CH₃.",
                "solution": "CH₃-CH₂-CHO: 3 carbons with terminal aldehyde group -> Propanal.\nCH₃-CO-CH₃: 3 carbons with middle ketone group -> Propanone (commonly known as Acetone)."
              }
            ],
            "keyTakeaways": [
              "Esters have characteristic fruity smells used in perfumes and flavoring.",
              "Graphite is slippery and conducts electricity; diamond is hard and an insulator.",
              "Saponification produces soap and glycerol."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 4 (Carbon and its Compounds)",
            "pyqIds": [
              "bpsc-sec-q-0839",
              "bpsc-sec-q-0840",
              "bpsc-sec-q-0841",
              "bpsc-sec-q-0842",
              "bpsc-sec-q-0843",
              "bpsc-sec-q-0844",
              "bpsc-sec-q-0845",
              "bpsc-sec-q-0846"
            ]
          },
          {
            "id": "bpsc-sec-chem-t9",
            "chapterId": "bpsc-sec-chem-c2",
            "subjectId": "bpsc-sec-chem",
            "examId": "bpsc-tre-secondary",
            "title": "Periodic Classification: Modern Periodic Trends & Anomalies",
            "order": 5,
            "notes": "Modern Periodic Law arranges elements by increasing atomic number. Blocks: s-block (Groups 1-2), p-block (Groups 13-18), d-block (Transition metals, Groups 3-12), f-block (Lanthanoids and Actinoids at bottom).\n\nPeriodic Trends:\n- Ionization Enthalpy: Energy required to remove the outermost electron from isolated gaseous atom; increases across a period, decreases down a group.\n- Electron Gain Enthalpy: Enthalpy change when an electron is added; Halogens have most negative electron gain enthalpy (Chlorine has more negative electron gain enthalpy than Fluorine due to smaller electron-electron repulsion in 3p).\n- Electronegativity: Pauling scale (F = 4.0, O = 3.5, N = 3.0, Cl = 3.0).",
            "concepts": [
              "Chlorine has higher electron affinity than Fluorine due to less compact electron cloud.",
              "Ionization enthalpy generally increases across a period and decreases down a group.",
              "Transition elements (d-block) exhibit variable oxidation states and catalytic properties.",
              "Fluorine is the most electronegative element (4.0 on Pauling scale)."
            ],
            "keyTakeaways": [
              "Chlorine has higher electron gain enthalpy than fluorine.",
              "Noble gases have positive electron gain enthalpies (stable octet).",
              "d-block elements show variable oxidation states."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 5 & Class 11 Chapter 3",
            "pyqIds": [
              "bpsc-sec-q-0005",
              "bpsc-sec-q-0651",
              "bpsc-sec-q-0652",
              "bpsc-sec-q-0653",
              "bpsc-sec-q-0654",
              "bpsc-sec-q-0655",
              "bpsc-sec-q-0656",
              "bpsc-sec-q-0657"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-sec-bio",
    "examId": "bpsc-tre-secondary",
    "name": "Biology (Secondary Science)",
    "code": "BPSC-SEC-BIO",
    "iconName": "Dna",
    "description": "BPSC TRE Secondary Science Biology: Cytology, Histology, Physiology, Genetics, Reproduction, and Ecology.",
    "chapters": [
      {
        "id": "bpsc-sec-bio-c1",
        "subjectId": "bpsc-sec-bio",
        "examId": "bpsc-tre-secondary",
        "title": "Cytology, Tissues & Life Processes",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-sec-bio-t1",
            "chapterId": "bpsc-sec-bio-c1",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Cellular Biology: Ultra-structure, Membranes & Transport",
            "order": 1,
            "notes": "Cell membrane structure: Singer & Nicolson's Fluid Mosaic Model (1972) describes a quasi-fluid lipid bilayer with embedded intrinsic and extrinsic proteins.\n\nMembrane transport:\n1. Passive Transport: Movement along concentration gradient without ATP expenditure (Simple diffusion of gases O₂/CO₂, Osmosis of water, Facilitated diffusion via carrier permeases).\n2. Active Transport: Movement against concentration gradient requiring metabolic ATP energy (Na⁺/K⁺ ATPase pump: pumps 3 Na⁺ out and 2 K⁺ into cell per ATP).\nCell division: Mitosis (equational division, somatic growth, 2 identical 2n daughter cells) and Meiosis (reductional division, gametogenesis, crossing over in pachytene stage of prophase I produces genetic variation, 4 haploid n daughter cells).",
            "concepts": [
              "Fluid Mosaic Model: Phospholipid bilayer with mosaic of intrinsic and extrinsic proteins.",
              "Active transport moves solutes against concentration gradient using ATP.",
              "Na⁺/K⁺ pump exports 3 Na⁺ and imports 2 K⁺ per hydrolyzed ATP.",
              "Crossing over occurs in Pachytene substage of Meiosis I, driving genetic recombination."
            ],
            "keyTakeaways": [
              "Meiosis reduces chromosome number from 2n to n; Mitosis preserves 2n.",
              "Crossing over occurs during Pachytene stage of Prophase I.",
              "Na⁺/K⁺ pump maintains negative resting membrane potential."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 5 & Class 11 Chapters 8 and 10",
            "pyqIds": [
              "bpsc-sec-q-0003",
              "bpsc-sec-q-0886",
              "bpsc-sec-q-0887",
              "bpsc-sec-q-0888",
              "bpsc-sec-q-0889",
              "bpsc-sec-q-0890",
              "bpsc-sec-q-0891",
              "bpsc-sec-q-0892"
            ]
          },
          {
            "id": "bpsc-sec-bio-t2",
            "chapterId": "bpsc-sec-bio-c1",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Plant and Animal Histology: Complex Permanent Tissues",
            "order": 2,
            "notes": "Vascular plant histology:\n- Xylem: Vessels (angiosperms only), Tracheids (gymnosperms and pteridophytes), Xylem fibres (dead), Xylem parenchyma (only living xylem component; stores food and assists lateral water conduction). Transport explained by Dixon & Joly's Cohesion-Tension-Transpiration Pull theory.\n- Phloem: Sieve tube elements (enucleated at maturity), Companion cells (nucleated, control sieve tube loading), Phloem parenchyma, Phloem fibres (bast fibres, e.g. jute, hemp).\nAnimal histology: Blood (erythrocytes, leukocytes, thrombocytes in plasma), Cartilage (chondrocytes in chondrin matrix), Bone (osteocytes in hard ossein matrix containing calcium phosphate and Haversian canal systems).",
            "concepts": [
              "Xylem vessels are characteristic of angiosperms, absent in most gymnosperms.",
              "Sieve tube elements lose their nucleus at maturity and depend on companion cells.",
              "Haversian canals are microscopic longitudinal channels characteristic of mammalian bone.",
              "Cohesion-Tension theory: Hydrogen bonding between water molecules sustains transpiration pull."
            ],
            "keyTakeaways": [
              "Mature sieve tube elements lack a nucleus.",
              "Haversian canals are found exclusively in mammalian bones.",
              "Xylem parenchyma is the only living cell type in mature xylem."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 9 Chapter 6 & Class 11 Chapter 6",
            "pyqIds": [
              "bpsc-sec-q-0933",
              "bpsc-sec-q-0934",
              "bpsc-sec-q-0935",
              "bpsc-sec-q-0936",
              "bpsc-sec-q-0937",
              "bpsc-sec-q-0938",
              "bpsc-sec-q-0939",
              "bpsc-sec-q-0940"
            ]
          },
          {
            "id": "bpsc-sec-bio-t3",
            "chapterId": "bpsc-sec-bio-c1",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Human Physiology: Digestion, Respiration, Circulation & Excretion",
            "order": 3,
            "notes": "Digestion: Carbohydrates broken down by amylase/maltase into monosaccharides (glucose); Proteins broken by pepsin/trypsin/peptidases into amino acids; Lipids emulsified by bile and broken by lipase into fatty acids and glycerol.\n\nRespiration: Gas exchange across alveolar membrane; Oxygen transported primarily as Oxyhemoglobin (97%) and dissolved in plasma (3%); Carbon dioxide transported as Bicarbonate ions HCO₃⁻ (70%), Carbaminohemoglobin (20-25%), and dissolved gas (7%). Circulatory system: Double circulation (Systemic and Pulmonary). Cardiac output = Stroke volume (70 mL) × Heart rate (72 bpm) ≈ 5 L/min. Excretion: Nephron Counter-Current Mechanism in Loop of Henle and vasa recta concentrates urine.",
            "concepts": [
              "70% of carbon dioxide is transported in blood as bicarbonate ions (HCO₃⁻).",
              "Counter-current mechanism in Henle's loop and vasa recta maintains medullary hyperosmolarity.",
              "Cardiac output = Stroke volume × Heart rate ≈ 5 Litres/min.",
              "Hemoglobin exhibits sigmoidal oxygen dissociation curve; Bohr effect shifts curve right with acidity."
            ],
            "formulas": [
              "Cardiac Output = Stroke Volume × Heart Rate ≈ 70 mL × 72 ≈ 5040 mL/min",
              "Blood pressure normal: 120 / 80 mmHg (Systolic / Diastolic)"
            ],
            "solvedExamples": [
              {
                "problem": "How is the majority of CO₂ transported in human blood?",
                "solution": "Approximately 70% of CO₂ is transported as bicarbonate ions (HCO₃⁻) formed inside red blood cells through the catalytic action of the enzyme carbonic anhydrase: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻."
              }
            ],
            "keyTakeaways": [
              "Enzyme carbonic anhydrase in RBCs catalyzes bicarbonate formation.",
              "Normal resting blood pressure is 120/80 mmHg.",
              "Counter-current multiplier in Loop of Henle concentrates mammalian urine."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 6 & Class 11 Unit 5 (Human Physiology)",
            "pyqIds": [
              "bpsc-sec-q-0980",
              "bpsc-sec-q-0981",
              "bpsc-sec-q-0982",
              "bpsc-sec-q-0983",
              "bpsc-sec-q-0984",
              "bpsc-sec-q-0985",
              "bpsc-sec-q-0986",
              "bpsc-sec-q-0987"
            ]
          },
          {
            "id": "bpsc-sec-bio-t4",
            "chapterId": "bpsc-sec-bio-c1",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Control and Coordination: Nervous System & Endocrine Hormones",
            "order": 4,
            "notes": "Action potential in neurons: Resting membrane potential is -70 mV maintained by Na⁺/K⁺ pump (polarization). Depolarization occurs when voltage-gated Na⁺ channels open, influxing sodium. Repolarization occurs when K⁺ channels open, effluxing potassium.\n\nBrain regions: Forebrain (Cerebrum - memory, intelligence, voluntary actions; Thalamus - sensory relay; Hypothalamus - thermoregulation, hunger, thirst, endocrine control), Midbrain (visual and auditory reflexes), Hindbrain (Cerebellum - posture and balance coordination; Pons - respiration rate; Medulla Oblongata - involuntary autonomic centers: heartbeat, respiration, swallowing, vomiting).",
            "concepts": [
              "Cerebellum coordinates voluntary muscular posture and motor balance.",
              "Medulla oblongata controls involuntary vital functions: cardiac and respiratory centers.",
              "Hypothalamus regulates body temperature, satiety, and pituitary hormone secretion.",
              "Resting potential (-70 mV) flips to positive (+30 mV) during action potential generation."
            ],
            "keyTakeaways": [
              "Cerebellum controls balance and precision movements (affected by alcohol intoxication).",
              "Medulla oblongata houses the vomiting and respiratory rhythm center.",
              "Hypothalamus is the master control interface between nervous and endocrine systems."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 7 & Class 11 Chapters 21 and 22",
            "pyqIds": [
              "bpsc-sec-q-0003",
              "bpsc-sec-q-0886",
              "bpsc-sec-q-0887",
              "bpsc-sec-q-0888",
              "bpsc-sec-q-0889",
              "bpsc-sec-q-0890",
              "bpsc-sec-q-0891",
              "bpsc-sec-q-0892"
            ]
          }
        ]
      },
      {
        "id": "bpsc-sec-bio-c2",
        "subjectId": "bpsc-sec-bio",
        "examId": "bpsc-tre-secondary",
        "title": "Reproduction, Genetics & Ecology",
        "order": 2,
        "topics": [
          {
            "id": "bpsc-sec-bio-t5",
            "chapterId": "bpsc-sec-bio-c2",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Reproductive Biology: Plant and Human Reproduction",
            "order": 1,
            "notes": "Double fertilization in angiosperms (Navaschin 1898):\n1. Syngamy: One male gamete fuses with egg cell to form diploid Zygote (2n).\n2. Triple Fusion: Second male gamete fuses with two polar nuclei to form triploid Primary Endosperm Nucleus (PEN, 3n), which develops into nutritive endosperm tissue.\n\nHuman reproduction: Spermatogenesis occurs in seminiferous tubules of testes (under testosterone and FSH); Oogenesis occurs in ovaries. Menstrual cycle (28 days): Menstrual phase -> Follicular/Proliferative phase (estrogen peak) -> Ovulatory phase (LH Surge on day 14 causes graafian follicle to rupture releasing secondary oocyte) -> Luteal/Secretory phase (Corpus luteum secretes progesterone to maintain thick endometrium).",
            "concepts": [
              "Double fertilization is unique to angiosperms: Syngamy (2n) + Triple Fusion (3n).",
              "Endosperm in angiosperms is triploid (3n); in gymnosperms it is haploid (n).",
              "LH Surge (Luteinizing Hormone peak) on Day 14 triggers ovulation.",
              "Corpus luteum produces progesterone to support uterine pregnancy."
            ],
            "solvedExamples": [
              {
                "problem": "What is the ploidy level of endosperm in angiosperms compared to gymnosperms?",
                "solution": "In angiosperms, endosperm is triploid (3n) formed by triple fusion after fertilization. In gymnosperms, endosperm is haploid (n) formed before fertilization directly from the female gametophyte."
              }
            ],
            "keyTakeaways": [
              "Angiosperm endosperm is 3n (triploid).",
              "Ovulation is induced by the mid-cycle LH surge on approximately day 14.",
              "Progesterone maintains the endometrial lining for embryo implantation."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 8 & Class 12 Chapters 2 and 3",
            "pyqIds": [
              "bpsc-sec-q-1027",
              "bpsc-sec-q-1028",
              "bpsc-sec-q-1029",
              "bpsc-sec-q-1030",
              "bpsc-sec-q-1031",
              "bpsc-sec-q-1032",
              "bpsc-sec-q-1033",
              "bpsc-sec-q-1034"
            ]
          },
          {
            "id": "bpsc-sec-bio-t6",
            "chapterId": "bpsc-sec-bio-c2",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Mendelian Genetics: Monohybrid & Dihybrid Crosses & Ratios",
            "order": 2,
            "notes": "Gregor Johann Mendel established laws of inheritance through breeding Pisum sativum:\n1. Law of Dominance: In a heterozygote, the dominant allele expresses phenotypically while the recessive allele remains concealed.\n2. Law of Segregation (Purity of Gametes): Alleles separate during meiosis so each gamete receives only one allele (Universal law without exception).\n3. Law of Independent Assortment: Segregation of one pair of alleles is independent of other pairs during gametogenesis (holds for unlinked genes on different chromosomes).\n\nRatios:\n- Monohybrid F2 Phenotypic Ratio = 3 : 1; Genotypic Ratio = 1 : 2 : 1.\n- Dihybrid F2 Phenotypic Ratio = 9 : 3 : 3 : 1; Genotypic Ratio = 1:2:1:2:4:2:1:2:1.\nTest Cross: Crossing unknown dominant phenotype with homozygous recessive parent (e.g. T_ × tt) to determine genotype (monohybrid test cross gives 1:1 ratio).",
            "concepts": [
              "Law of Segregation is universally true without exception.",
              "Monohybrid F2 phenotypic ratio: 3:1; Genotypic ratio: 1:2:1.",
              "Dihybrid F2 phenotypic ratio: 9:3:3:1.",
              "Test cross with homozygous recessive reveals whether an individual is homozygous or heterozygous dominant."
            ],
            "formulas": [
              "Monohybrid F2: 3 Dominant : 1 Recessive",
              "Monohybrid Genotype: 1 TT : 2 Tt : 1 tt",
              "Dihybrid F2: 9 Dom/Dom : 3 Dom/Rec : 3 Rec/Dom : 1 Rec/Rec",
              "Test Cross Ratio: 1 : 1 (Monohybrid)"
            ],
            "solvedExamples": [
              {
                "problem": "In a dihybrid cross between RRYY (Round Yellow) and rryy (Wrinkled Green), what is the phenotypic ratio obtained in the F2 generation?",
                "solution": "F2 Phenotypic ratio = 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1)."
              }
            ],
            "keyTakeaways": [
              "Law of segregation has no biological exceptions.",
              "Test cross always crosses with homozygous recessive (recessive tester parent).",
              "Incomplete dominance (Mirabilis jalapa) gives identical phenotypic and genotypic ratio 1:2:1."
            ],
            "estimatedMinutes": 14,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 9 & Class 12 Chapter 5",
            "pyqIds": [
              "bpsc-sec-q-1027",
              "bpsc-sec-q-1028",
              "bpsc-sec-q-1029",
              "bpsc-sec-q-1030",
              "bpsc-sec-q-1031",
              "bpsc-sec-q-1032",
              "bpsc-sec-q-1033",
              "bpsc-sec-q-1034"
            ]
          },
          {
            "id": "bpsc-sec-bio-t7",
            "chapterId": "bpsc-sec-bio-c2",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Molecular Basis of Inheritance: DNA, Chromosomes & Sex Determination",
            "order": 3,
            "notes": "DNA (Deoxyribonucleic acid) double helix model proposed by Watson & Crick (1953) based on Rosalind Franklin's X-ray crystallography.\n\nKey features: Anti-parallel double strands (5'->3' and 3'->5'); Nitrogenous bases: Purines (Adenine A, Guanine G) and Pyrimidines (Cytosine C, Thymine T; Uracil U in RNA). Erwin Chargaff's Rules: A + G = C + T (A = T with two H-bonds; G ≡ C with three H-bonds). Central Dogma: DNA -> (Transcription) -> mRNA -> (Translation) -> Protein.\n\nSex Determination in humans: XX-XY system. Females are homogametic (44 + XX) producing only X eggs; Males are heterogametic (44 + XY) producing 50% X and 50% Y sperm. Sex of baby is determined solely by the paternal sperm.",
            "concepts": [
              "Chargaff's Rules: Amount of Adenine equals Thymine (A=T), Guanine equals Cytosine (G=C).",
              "Adenine pairs with Thymine via 2 hydrogen bonds; Guanine pairs with Cytosine via 3 hydrogen bonds.",
              "Central Dogma: Replication -> Transcription -> Translation.",
              "Human sex determination: Father's sperm determines genetic sex of the zygote."
            ],
            "formulas": [
              "Chargaff: A = T, G = C; (A + G) = (C + T)",
              "Total human chromosomes = 23 pairs (22 pairs autosomes + 1 pair allosomes/sex chromosomes)"
            ],
            "solvedExamples": [
              {
                "problem": "If a double-stranded DNA sample contains 20% Cytosine, find the percentage of Adenine present.",
                "solution": "By Chargaff's rule: %G = %C = 20%.\nTotal G + C = 40%.\nRemaining A + T = 100% - 40% = 60%.\nSince %A = %T, percentage of Adenine = 60% / 2 = 30%."
              }
            ],
            "keyTakeaways": [
              "G-C pairs have 3 hydrogen bonds, making them thermally more stable than A-T pairs (2 bonds).",
              "Genetic sex of the child is determined exclusively by the father's sperm contribution.",
              "DNA strands are complementary and anti-parallel."
            ],
            "estimatedMinutes": 13,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 9 & Class 12 Chapter 6",
            "pyqIds": [
              "bpsc-sec-q-1027",
              "bpsc-sec-q-1028",
              "bpsc-sec-q-1029",
              "bpsc-sec-q-1030",
              "bpsc-sec-q-1031",
              "bpsc-sec-q-1032",
              "bpsc-sec-q-1033",
              "bpsc-sec-q-1034"
            ]
          },
          {
            "id": "bpsc-sec-bio-t8",
            "chapterId": "bpsc-sec-bio-c2",
            "subjectId": "bpsc-sec-bio",
            "examId": "bpsc-tre-secondary",
            "title": "Ecology, Biogeochemical Cycles, Biodiversity & Conservation",
            "order": 4,
            "notes": "Biogeochemical cycles: Carbon cycle, Nitrogen cycle (Nitrogen fixation by Rhizobium/Azotobacter -> Nitrification by Nitrosomonas/Nitrobacter -> Denitrification by Pseudomonas returning N₂ to atmosphere), Phosphorus cycle.\n\nEcological pyramids: Pyramid of energy is ALWAYS upright (due to 2nd law of thermodynamics / 10% rule). Pyramid of biomass in ocean/aquatic ecosystems is INVERTED (small standing crop of phytoplankton supports large biomass of fish). Biodiversity conservation: In-situ (National Parks, Wildlife Sanctuaries, Biosphere Reserves - e.g. Valmiki National Park in West Champaran, Bihar) and Ex-situ (Botanical Gardens, Zoological Parks, Seed Banks, Cryopreservation).",
            "concepts": [
              "Pyramid of energy is ALWAYS upright without exception.",
              "Pyramid of biomass in aquatic ecosystems is inverted.",
              "In-situ conservation protects species in natural habitats (National Parks, Biosphere Reserves).",
              "Valmiki National Park in West Champaran is Bihar's only Tiger Reserve and National Park."
            ],
            "keyTakeaways": [
              "Pyramid of energy can NEVER be inverted.",
              "Valmiki National Park is located in West Champaran, Bihar.",
              "Denitrification is executed by Pseudomonas and Thiobacillus bacteria."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 10 Chapter 15 & Class 12 Chapter 14 and 15",
            "pyqIds": [
              "bpsc-sec-q-1027",
              "bpsc-sec-q-1028",
              "bpsc-sec-q-1029",
              "bpsc-sec-q-1030",
              "bpsc-sec-q-1031",
              "bpsc-sec-q-1032",
              "bpsc-sec-q-1033",
              "bpsc-sec-q-1034"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bpsc-sec-gs",
    "examId": "bpsc-tre-secondary",
    "name": "General Studies",
    "code": "BPSC-SEC-GS",
    "iconName": "BookOpen",
    "description": "BPSC TRE Secondary General Studies covering National Movement with Bihar leaders, Geography, Polity, and Mental Ability.",
    "chapters": [
      {
        "id": "bpsc-sec-gs-c1",
        "subjectId": "bpsc-sec-gs",
        "examId": "bpsc-tre-secondary",
        "title": "General Studies: Bihar Special & National Movement",
        "order": 1,
        "topics": [
          {
            "id": "bpsc-sec-gs-t1",
            "chapterId": "bpsc-sec-gs-c1",
            "subjectId": "bpsc-sec-gs",
            "examId": "bpsc-tre-secondary",
            "title": "Indian National Movement: Role of Bihar Leaders (Kunwar Singh, Rajendra Prasad)",
            "order": 1,
            "notes": "Bihar played a pivotal role in India's freedom struggle:\n- Veer Kunwar Singh: Led the 1857 Uprising from Jagdishpur (Arrah). Defeated British Captain Le Grand before succumbing to injuries in April 1858.\n- Dr. Rajendra Prasad: Born in Ziradei (Siwan). Led Non-Cooperation and Salt Satyagraha in Bihar, served as President of Constituent Assembly and first President of the Republic of India (Bharat Ratna 1962).\n- Jayaprakash Narayan (JP): Founded the Congress Socialist Party (1934). Escaped Hazaribagh jail during Quit India Movement (1942) to organize Azad Dasta underground resistance. Later launched Total Revolution (Sampoorna Kranti) in 1974.\n- Swami Sahjanand Saraswati: Founded the All India Kisan Sabha (AIKS) in 1936 to fight landlord exploitation.",
            "concepts": [
              "Veer Kunwar Singh led the 1857 revolt in Bihar from Jagdishpur.",
              "Jayaprakash Narayan organized the underground 'Azad Dasta' resistance during 1942 Quit India Movement.",
              "Swami Sahjanand Saraswati founded the All India Kisan Sabha in Lucknow (1936).",
              "Dr. Rajendra Prasad was the President of the Constituent Assembly."
            ],
            "keyTakeaways": [
              "Azad Dasta was formed by JP Narayan in Nepal during 1942 Quit India movement.",
              "Swami Sahjanand Saraswati championed the peasant movement in Bihar.",
              "Veer Kunwar Singh defeated British forces under Captain Le Grand."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "Bihar Special Modern History & Freedom Movement",
            "pyqIds": [
              "bpsc-sec-q-1074",
              "bpsc-sec-q-1075",
              "bpsc-sec-q-1076",
              "bpsc-sec-q-1077",
              "bpsc-sec-q-1078",
              "bpsc-sec-q-1079",
              "bpsc-sec-q-1080",
              "bpsc-sec-q-1081"
            ]
          },
          {
            "id": "bpsc-sec-gs-t2",
            "chapterId": "bpsc-sec-gs-c1",
            "subjectId": "bpsc-sec-gs",
            "examId": "bpsc-tre-secondary",
            "title": "Bihar Physical Geography, Mineral Resources & Economy",
            "order": 2,
            "notes": "Geography of Bihar: Extends from 24°20'10\" N to 27°31'15\" N latitude and 83°19'50\" E to 88°17'40\" E longitude. Area: 94,163 km² (12th largest state in India by area; 3rd largest by population). Ganga enters Bihar at Chausa (Buxar) and leaves near Bhagalpur/Katihar.\n\nMineral resources: Following the division of Bihar and Jharkhand (15 Nov 2000), most mineral deposits shifted to Jharkhand. However, Bihar possesses: Pyrites in Amjhore (Rohtas - largest deposit in India), Limestone in Rohtas/Kaimur (supporting cement industry), Mica in Nawada, and Gold reserves discovered in Sono (Jamui district).",
            "concepts": [
              "Ganga enters Bihar at Chausa (Buxar).",
              "Pyrites reserves: Amjhore (Rohtas) holds India's largest deposits.",
              "Significant gold reserves reported in Sono block of Jamui district.",
              "Major cement factories are located in Dalmianagar and Banjari (Rohtas) due to limestone."
            ],
            "keyTakeaways": [
              "Pyrites are found extensively in Rohtas (Amjhore).",
              "Ganga enters Bihar at Chausa in Buxar district.",
              "Jamui (Sono) has emerged as a major potential gold reserve site."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "Bihar Economy & Geography Profile",
            "pyqIds": [
              "bpsc-sec-q-1074",
              "bpsc-sec-q-1075",
              "bpsc-sec-q-1076",
              "bpsc-sec-q-1077",
              "bpsc-sec-q-1078",
              "bpsc-sec-q-1079",
              "bpsc-sec-q-1080",
              "bpsc-sec-q-1081"
            ]
          },
          {
            "id": "bpsc-sec-gs-t3",
            "chapterId": "bpsc-sec-gs-c1",
            "subjectId": "bpsc-sec-gs",
            "examId": "bpsc-tre-secondary",
            "title": "Indian Polity: Preamble, Directive Principles & Governance",
            "order": 3,
            "notes": "Preamble: Sovereign, Socialist, Secular, Democratic Republic. 'Socialist', 'Secular', and 'Integrity' were added by the 42nd Constitutional Amendment Act (1976).\n\nDirective Principles of State Policy (DPSP, Part IV, Articles 36-51, borrowed from Ireland): Non-justiciable guidelines for state welfare governance. Key articles:\n- Article 40: Organization of Village Panchayats (Bihar was first state to give 50% reservation to women in Panchayati Raj institutions in 2006).\n- Article 44: Uniform Civil Code.\n- Article 45: Early childhood care and education.\n- Article 50: Separation of judiciary from executive.\n- Article 51: Promotion of international peace.",
            "concepts": [
              "42nd Amendment (1976) inserted 'Socialist', 'Secular', and 'Integrity' into Preamble.",
              "DPSP is borrowed from Irish Constitution (Articles 36-51, non-justiciable).",
              "Article 40 promotes village panchayats; Bihar enacted 50% women reservation in Panchayats in 2006.",
              "Article 50 directs separation of judiciary from executive."
            ],
            "keyTakeaways": [
              "Bihar was the first Indian state to enact 50% reservation for women in Panchayati Raj.",
              "DPSPs are non-justiciable (cannot be enforced in court).",
              "Article 44 deals with Uniform Civil Code."
            ],
            "estimatedMinutes": 12,
            "verificationStatus": "verified",
            "ncertReference": "NCERT Class 11 Indian Constitution at Work",
            "pyqIds": [
              "bpsc-sec-q-1074",
              "bpsc-sec-q-1075",
              "bpsc-sec-q-1076",
              "bpsc-sec-q-1077",
              "bpsc-sec-q-1078",
              "bpsc-sec-q-1079",
              "bpsc-sec-q-1080",
              "bpsc-sec-q-1081"
            ]
          },
          {
            "id": "bpsc-sec-gs-t4",
            "chapterId": "bpsc-sec-gs-c1",
            "subjectId": "bpsc-sec-gs",
            "examId": "bpsc-tre-secondary",
            "title": "Logical Reasoning & Numerical Ability for Educators",
            "order": 4,
            "notes": "Evaluation of analytical capability: Data interpretation (tables, graphs, pie charts), logical deductions, seated arrangement puzzles (circular and linear), calendar and clock math.\n\nCalendar math: Ordinary year has 1 odd day (365 = 52 weeks + 1 day); Leap year has 2 odd days (366 = 52 weeks + 2 days). Century leap year must be divisible by 400 (e.g., 2000 was a leap year, 1900 was not). Clocks: Minute hand moves 6° per minute; Hour hand moves 0.5° per minute. Angle between hands: θ = |(30H - (11/2)M)|.",
            "concepts": [
              "Ordinary year has 1 odd day; leap year has 2 odd days.",
              "Clock angle formula: θ = |30H - (11/2)M|.",
              "Century year is a leap year only if divisible by 400.",
              "Speed of hour hand is 0.5° per minute; minute hand is 6° per minute."
            ],
            "formulas": [
              "Clock angle: θ = |30H - (11 / 2)M|",
              "Odd days in ordinary year = 1; in leap year = 2"
            ],
            "solvedExamples": [
              {
                "problem": "Find the angle between the hour and minute hands of a clock at 3:30.",
                "solution": "θ = |30(3) - (11/2)(30)| = |90 - 165| = |-75| = 75°."
              }
            ],
            "keyTakeaways": [
              "Clock angle shortcut θ = |30H - (11/2)M| gives instantaneous angle directly.",
              "1900 is NOT a leap year because it is not divisible by 400.",
              "Hands of a clock coincide 22 times in 24 hours (not 24 times)."
            ],
            "estimatedMinutes": 11,
            "verificationStatus": "verified",
            "ncertReference": "BPSC Mental Ability & Reasoning Guide",
            "pyqIds": [
              "bpsc-sec-q-1074",
              "bpsc-sec-q-1075",
              "bpsc-sec-q-1076",
              "bpsc-sec-q-1077",
              "bpsc-sec-q-1078",
              "bpsc-sec-q-1079",
              "bpsc-sec-q-1080",
              "bpsc-sec-q-1081"
            ]
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

export function getTopicsByChapter(chapterId: string): Topic[] {
  for (const subject of SUBJECTS) {
    const chapter = subject.chapters.find(c => c.id === chapterId);
    if (chapter) return chapter.topics;
  }
  return [];
}

export function getChaptersBySubject(subjectId: string) {
  const sub = SUBJECTS.find(s => s.id === subjectId);
  return sub ? sub.chapters : [];
}
