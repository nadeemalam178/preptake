"""
data_bpsc_mid.py - Comprehensive BPSC TRE 4 Middle (Classes 6–8) Syllabus & Study Materials
Covers:
1. Middle School Mathematics (2 chapters, 10 topics)
2. Middle School Science (3 chapters, 16 topics)
3. General Studies (1 chapter, 4 topics)
Strictly aligned with BPSC TRE 4 Middle Stage Syllabi (NCERT/SCERT Classes 6–8 with graduation difficulty calibration).
"""

BPSC_MID_SUBJECTS = [
    # --------------------------------------------------------------------------
    # BPSC TRE Middle: Mathematics (Classes 6-8)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 8 Chapter 13 (Direct and Inverse Proportions)"
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
                        "ncertReference": "NCERT Class 8 Commercial Mathematics Applications"
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
                        "ncertReference": "NCERT Class 8 Chapter 8 (Comparing Quantities)"
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
                        "ncertReference": "NCERT Class 8 Chapter 8"
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
                        "ncertReference": "NCERT Class 8 Mathematics & Quantitative Aptitude"
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
                        "ncertReference": "NCERT Class 8 Chapter 2 & Class 9 Chapter 4"
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
                        "ncertReference": "NCERT Class 8 Chapter 12"
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
                        "ncertReference": "NCERT Class 8 Chapter 3"
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
                        "ncertReference": "NCERT Class 7 Chapter 6 & Class 8 Chapter 6"
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
                        "ncertReference": "NCERT Class 8 Chapter 11 & Class 9 Chapter 13"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # BPSC TRE Middle: Science (Classes 6-8)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 7 Chapter 13 & Class 9 Chapter 8"
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
                        "ncertReference": "NCERT Class 8 Chapter 11 (Force and Pressure)"
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
                        "ncertReference": "NCERT Class 7 Chapter 4 (Heat)"
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
                        "ncertReference": "NCERT Class 7 Chapter 15 & Class 10 Chapters 10 & 11"
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
                        "ncertReference": "NCERT Class 10 Chapter 12 (Electricity)"
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
                        "ncertReference": "NCERT Class 8 Chapter 13 & Class 9 Chapter 12"
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
                        "ncertReference": "NCERT Class 9 Chapter 2 (Is Matter Around Us Pure)"
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
                        "ncertReference": "NCERT Class 10 Chapter 2 (Acids, Bases and Salts)"
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
                        "ncertReference": "NCERT Class 10 Chapter 3 (Metals and Non-metals)"
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
                        "ncertReference": "NCERT Class 8 Chapter 6 (Combustion and Flame)"
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
                        "ncertReference": "NCERT Class 7 Chapter 2 (Nutrition in Animals)"
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
                        "ncertReference": "NCERT Class 8 Chapter 8 & Class 9 Chapter 5"
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
                        "ncertReference": "NCERT Class 10 Chapter 6 (Life Processes)"
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
                        "ncertReference": "NCERT Class 7 Chapter 12 & Class 10 Chapter 8"
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
                        "ncertReference": "NCERT Class 8 Chapter 2 (Microorganisms: Friend and Foe)"
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
                        "ncertReference": "NCERT Class 10 Chapter 15 (Our Environment)"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # BPSC TRE Middle: General Studies
    # --------------------------------------------------------------------------
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
                        "ncertReference": "Bihar Special History & NCERT Modern Indian History"
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
                        "ncertReference": "Geography of Bihar (SCERT Class 9 & BPSC Studies)"
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
                        "ncertReference": "BPSC General Mental Ability Syllabus"
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
                        "ncertReference": "NCERT Class 8 & 9 Indian Polity"
                    }
                ]
            }
        ]
    }
]
