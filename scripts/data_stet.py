"""
data_stet.py - Comprehensive Bihar STET Paper 1 Syllabus & Study Materials
Covers:
1. Secondary Mathematics (4 chapters, 14 topics)
2. Secondary Science (4 chapters, 18 topics)
3. Art of Teaching & Pedagogy (2 chapters, 8 topics)
Strictly aligned with BSEB / NCERT Classes 9–10 Secondary Curriculum.
"""

STET_SUBJECTS = [
    # --------------------------------------------------------------------------
    # Bihar STET Paper 1: Secondary Mathematics (Classes 9-10)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 10 Chapter 1 (Real Numbers)"
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
                        "ncertReference": "NCERT Class 10 Chapter 2 (Polynomials)"
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
                        "ncertReference": "NCERT Class 10 Chapter 3 (Pair of Linear Equations)"
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
                        "ncertReference": "NCERT Class 10 Chapter 4 (Quadratic Equations)"
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
                        "ncertReference": "NCERT Class 10 Chapter 5 (Arithmetic Progressions)"
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
                        "ncertReference": "NCERT Class 10 Chapter 7 (Coordinate Geometry)"
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
                        "ncertReference": "NCERT Class 10 Chapter 7 (Coordinate Geometry)"
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
                        "ncertReference": "NCERT Class 10 Chapter 6 (Triangles)"
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
                        "ncertReference": "NCERT Class 10 Chapter 10 (Circles)"
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
                        "ncertReference": "NCERT Class 10 Chapters 8 & 9 (Trigonometry)"
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
                        "ncertReference": "NCERT Class 10 Chapter 12 (Areas Related to Circles)"
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
                        "ncertReference": "NCERT Class 10 Chapter 13 (Surface Areas and Volumes)"
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
                        "ncertReference": "NCERT Class 10 Chapter 14 (Statistics)"
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
                        "ncertReference": "NCERT Class 10 Chapter 15 (Probability)"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # Bihar STET Paper 1: Secondary Science (Classes 9-10)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 9 Chapters 8 & 9 (Motion; Force and Laws of Motion)"
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
                        "ncertReference": "NCERT Class 9 Chapter 10 (Gravitation)"
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
                        "ncertReference": "NCERT Class 9 Chapter 11 (Work and Energy)"
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
                        "ncertReference": "NCERT Class 9 Chapter 12 (Sound)"
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
                        "ncertReference": "NCERT Class 10 Chapter 10 (Light - Reflection and Refraction)"
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
                        "ncertReference": "NCERT Class 10 Chapter 11 (The Human Eye and the Colourful World)"
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
                        "ncertReference": "NCERT Class 10 Chapter 12 (Electricity)"
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
                        "ncertReference": "NCERT Class 10 Chapter 13 (Magnetic Effects of Electric Current)"
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
                        "ncertReference": "NCERT Class 10 Chapter 1 (Chemical Reactions and Equations)"
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
                        "ncertReference": "NCERT Class 10 Chapter 3 (Metals and Non-metals)"
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
                        "ncertReference": "NCERT Class 10 Chapter 5 (Periodic Classification of Elements)"
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
                        "ncertReference": "NCERT Class 9 Chapter 5 (The Fundamental Unit of Life)"
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
                        "ncertReference": "NCERT Class 9 Chapter 6 (Tissues)"
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
                        "ncertReference": "NCERT Class 10 Chapter 7 (Control and Coordination)"
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
                        "ncertReference": "NCERT Class 10 Chapter 15 (Our Environment)"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # Bihar STET Paper 1: Art of Teaching & Pedagogy (50 Marks)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "B.Ed Teaching Methodology Manual & BSEB Guidelines"
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
                        "ncertReference": "Anderson & Krathwohl (2001) Cognitive Taxonomy"
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
                        "ncertReference": "B.Ed Pedagogy & Teaching Methods Curriculum"
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
                        "ncertReference": "RPwD Act 2016 & NEP 2020 Inclusive Education Framework"
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
                        "ncertReference": "NCERT Environmental Studies & UNEP Overview"
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
                        "ncertReference": "National Education Policy 2020 Official Document"
                    }
                ]
            }
        ]
    }
]
