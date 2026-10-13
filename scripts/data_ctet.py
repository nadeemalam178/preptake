"""
data_ctet.py - Comprehensive CTET Paper 2 Syllabus & Study Materials
Covers Mathematics & Pedagogy (4 chapters, 20 topics) and Science & Pedagogy (4 chapters, 20 topics)
Strictly aligned with CBSE NCERT Classes 6–8 Curriculum.
"""

CTET_SUBJECTS = [
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
                        "ncertReference": "NCERT Class 6 Chapter 3 & Class 10 Chapter 1"
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
                        "ncertReference": "NCERT Class 7 Chapter 2 & Class 8 Chapter 1"
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
                        "ncertReference": "NCERT Class 7 Chapter 13 & Class 8 Chapter 12"
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
                        "ncertReference": "NCERT Class 8 Chapter 8 (Comparing Quantities)"
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
                        "ncertReference": "NCERT Class 6 Chapter 12 & Class 8 Chapter 13"
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
                        "ncertReference": "NCERT Class 8 Chapters 6 & 7"
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
                        "ncertReference": "NCERT Class 8 Chapter 9"
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
                        "ncertReference": "NCERT Class 8 Chapter 2"
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
                        "ncertReference": "NCERT Class 8 Chapter 14"
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
                        "ncertReference": "NCERT Class 7 Chapter 5 & Class 9 Chapter 6"
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
                        "ncertReference": "NCERT Class 7 Chapter 6 & Class 9 Chapter 7"
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
                        "ncertReference": "NCERT Class 8 Chapter 3 & Class 9 Chapter 10"
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
                        "ncertReference": "NCERT Class 7 Chapter 11 & Class 8 Chapter 11"
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
                        "ncertReference": "NCERT Class 8 Chapter 11 & Class 9 Chapter 13"
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
                        "ncertReference": "NCERT Class 7 Chapter 3 & Class 9 Chapter 14"
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
                        "ncertReference": "NCERT NCF 2005 Position Paper on Mathematics"
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
                        "ncertReference": "NCF 2005 Curriculum Guidelines"
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
                        "ncertReference": "B.Ed Pedagogy of Mathematics Curriculum"
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
                        "ncertReference": "NCERT Diagnostic Assessment Guidelines"
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
                        "ncertReference": "NCERT Position Paper on Teaching of Mathematics"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # CTET Paper 2: Science & Pedagogy
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 9 Chapter 1 (Matter in Our Surroundings)"
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
                        "ncertReference": "NCERT Class 7 Chapter 5 (Acids, Bases and Salts) & Class 10 Chapter 2"
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
                        "ncertReference": "NCERT Class 7 Chapter 6 (Physical and Chemical Changes)"
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
                        "ncertReference": "NCERT Class 8 Chapter 4 (Materials: Metals and Non-metals) & Class 10 Chapter 3"
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
                        "ncertReference": "NCERT Class 8 Chapter 3 (Synthetic Fibres and Plastics) & Chapter 5"
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
                        "ncertReference": "NCERT Class 7 Chapter 1 (Nutrition in Plants)"
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
                        "ncertReference": "NCERT Class 7 Chapter 2 & Class 10 Chapter 6 (Life Processes)"
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
                        "ncertReference": "NCERT Class 7 Chapter 10 (Respiration in Organisms)"
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
                        "ncertReference": "NCERT Class 7 Chapter 11 & Class 10 Chapter 6"
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
                        "ncertReference": "NCERT Class 7 Chapter 12 & Class 8 Chapters 9 and 10"
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
                        "ncertReference": "NCERT Class 7 Chapter 13 (Motion and Time)"
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
                        "ncertReference": "NCERT Class 8 Chapter 11 (Force and Pressure)"
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
                        "ncertReference": "NCERT Class 8 Chapter 12 (Friction)"
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
                        "ncertReference": "NCERT Class 7 Chapter 15 & Class 10 Chapter 10 (Light)"
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
                        "ncertReference": "NCERT Class 7 Chapter 14 & Class 8 Chapter 14"
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
                        "ncertReference": "NCERT Position Paper on Teaching of Science (NCF 2005)"
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
                        "ncertReference": "CBSE Pedagogy of Science Teacher Manual"
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
                        "ncertReference": "NCERT CCE Manual in Science"
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
                        "ncertReference": "NCERT Class 8 Chapter 10 & Class 10 Chapter 7"
                    }
                ]
            }
        ]
    }
]
