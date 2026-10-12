#!/usr/bin/env python3
"""
PrepTake Content Pipeline — Comprehensive Syllabus Topic Matrix
Defines the authoritative topic coverage matrix for all four supported examination tracks:
1. ctet-p2 (CTET Paper 2: Mathematics & Science, Classes VI–VIII)
2. bihar-stet-p1 (Bihar STET Paper 1: Secondary Mathematics & Science, Classes IX–X)
3. bpsc-tre-middle (BPSC TRE 4: Middle School Mathematics & Science, Classes VI–VIII)
4. bpsc-tre-secondary (BPSC TRE 4: Secondary School Science, Classes IX–X)
"""

TOPIC_MATRIX = {
    # =========================================================================
    # 1. CTET PAPER 2: MATHEMATICS & SCIENCE (CLASSES 6–8)
    # =========================================================================
    "ctet-p2": {
        "examName": "CTET Paper 2: Mathematics & Science",
        "officialBody": "Central Board of Secondary Education (CBSE)",
        "optionCount": 4,
        "negativeMarking": 0,
        "subjects": [
            {
                "id": "ctet-math",
                "name": "Mathematics & Pedagogy",
                "classLevel": "Classes VI–VIII",
                "chapters": [
                    {
                        "id": "ctet-math-c1",
                        "title": "Number System, HCF, LCM & Commercial Arithmetic",
                        "topics": [
                            {"id": "ctet-math-t1", "title": "Prime Factorization, HCF and LCM"},
                            {"id": "ctet-math-t2", "title": "Fractions, Decimals & Rational Numbers"},
                            {"id": "ctet-math-t3", "title": "Exponents, Powers & Scientific Notation"},
                            {"id": "ctet-math-t4", "title": "Compound Interest, Simple Interest & Percentages"},
                            {"id": "ctet-math-t5", "title": "Ratio, Proportion & Unitary Method"},
                            {"id": "ctet-math-t6", "title": "Square Roots, Cube Roots & Real Numbers"}
                        ]
                    },
                    {
                        "id": "ctet-math-c2",
                        "title": "Algebra & Linear Equations",
                        "topics": [
                            {"id": "ctet-math-t7", "title": "Algebraic Expressions & Identities"},
                            {"id": "ctet-math-t8", "title": "Linear Equations in One Variable & Word Problems"},
                            {"id": "ctet-math-t9", "title": "Factorisation of Polynomials & Quadratic Trinomials"}
                        ]
                    },
                    {
                        "id": "ctet-math-c3",
                        "title": "Geometry, Mensuration & Data Handling",
                        "topics": [
                            {"id": "ctet-math-t10", "title": "Lines, Angles & Parallel Line Transversal Theorems"},
                            {"id": "ctet-math-t11", "title": "Triangles: Congruence Criteria & Angle Sum Property"},
                            {"id": "ctet-math-t12", "title": "Quadrilaterals, Polygons & Circle Geometry"},
                            {"id": "ctet-math-t13", "title": "2D Mensuration: Perimeter & Area of Plane Figures"},
                            {"id": "ctet-math-t14", "title": "3D Mensuration: Surface Area & Volume of Cubes, Cylinders"},
                            {"id": "ctet-math-t15", "title": "Statistics: Mean, Median, Mode & Graphical Representation"}
                        ]
                    },
                    {
                        "id": "ctet-math-c4",
                        "title": "Pedagogical Issues in Mathematics",
                        "topics": [
                            {"id": "ctet-math-t16", "title": "Nature of Mathematics, Logical Thinking & Abstraction"},
                            {"id": "ctet-math-t17", "title": "Place of Mathematics in School Curriculum & NCF 2005"},
                            {"id": "ctet-math-t18", "title": "Van Hiele Model of Geometric Thinking"},
                            {"id": "ctet-math-t19", "title": "Error Analysis & Diagnosis of Learning Difficulties"},
                            {"id": "ctet-math-t20", "title": "Open-ended vs Closed-ended Questions & Divergent Thinking"},
                            {"id": "ctet-math-t21", "title": "Diagnostic & Remedial Teaching in Middle School"}
                        ]
                    }
                ]
            },
            {
                "id": "ctet-sci",
                "name": "Science & Pedagogy",
                "classLevel": "Classes VI–VIII",
                "chapters": [
                    {
                        "id": "ctet-sci-c1",
                        "title": "Matter, Materials & Chemical Changes",
                        "topics": [
                            {"id": "ctet-sci-t1", "title": "States of Matter: Evaporation, Boiling & Latent Heat"},
                            {"id": "ctet-sci-t2", "title": "Acids, Bases, Salts & Natural Indicators"},
                            {"id": "ctet-sci-t3", "title": "Physical and Chemical Changes & Rusting"},
                            {"id": "ctet-sci-t4", "title": "Metals and Non-metals: Reactivity Series & Displacement"},
                            {"id": "ctet-sci-t5", "title": "Synthetic Fibres, Plastics, Coal & Petroleum"}
                        ]
                    },
                    {
                        "id": "ctet-sci-c2",
                        "title": "The Living World: Biology & Human Physiology",
                        "topics": [
                            {"id": "ctet-sci-t6", "title": "Nutrition in Plants: Photosynthesis & Heterotrophs"},
                            {"id": "ctet-sci-t7", "title": "Human Digestive & Circulatory System"},
                            {"id": "ctet-sci-t8", "title": "Respiration in Organisms: Aerobic vs Anaerobic"},
                            {"id": "ctet-sci-t9", "title": "Excretion & Human Nephron Function"},
                            {"id": "ctet-sci-t10", "title": "Cell Structure, Organelles & Cell Division Basics"},
                            {"id": "ctet-sci-t11", "title": "Reproduction in Plants & Adolescence in Animals"}
                        ]
                    },
                    {
                        "id": "ctet-sci-c3",
                        "title": "Moving Things, Force, Light & Energy",
                        "topics": [
                            {"id": "ctet-sci-t12", "title": "Motion, Speed & Distance-Time Graphs"},
                            {"id": "ctet-sci-t13", "title": "Force, Pressure & Atmospheric Pressure"},
                            {"id": "ctet-sci-t14", "title": "Friction: Factors, Types & Fluid Friction"},
                            {"id": "ctet-sci-t15", "title": "Sound: Amplitude, Frequency, Pitch & Hearing"},
                            {"id": "ctet-sci-t16", "title": "Light: Reflection, Spherical Mirrors & Lenses"},
                            {"id": "ctet-sci-t17", "title": "Electricity: Circuits, Heating & Magnetic Effects"}
                        ]
                    },
                    {
                        "id": "ctet-sci-c4",
                        "title": "Natural Phenomena & Science Pedagogy",
                        "topics": [
                            {"id": "ctet-sci-t18", "title": "Lightning, Earthquakes & Natural Resources"},
                            {"id": "ctet-sci-t19", "title": "Nature and Structure of Science & Scientific Method"},
                            {"id": "ctet-sci-t20", "title": "Science Curriculum: Aims, Objectives & Bloom's Taxonomy"},
                            {"id": "ctet-sci-t21", "title": "Inquiry-based Approach, Observation & Experiments"},
                            {"id": "ctet-sci-t22", "title": "Continuous & Comprehensive Evaluation (CCE) in Science"}
                        ]
                    }
                ]
            }
        ]
    },

    # =========================================================================
    # 2. BIHAR STET PAPER 1: SECONDARY (CLASSES IX–X)
    # =========================================================================
    "bihar-stet-p1": {
        "examName": "Bihar STET Paper 1: Secondary Math & Science",
        "officialBody": "Bihar School Examination Board (BSEB)",
        "optionCount": 4,
        "negativeMarking": 0,
        "subjects": [
            {
                "id": "stet-math",
                "name": "Secondary Mathematics",
                "classLevel": "Classes IX–X",
                "chapters": [
                    {
                        "id": "stet-math-c1",
                        "title": "Real Numbers, Polynomials & Quadratic Equations",
                        "topics": [
                            {"id": "stet-math-t1", "title": "Euclid Division Lemma & Fundamental Theorem of Arithmetic"},
                            {"id": "stet-math-t2", "title": "Polynomials: Zeros & Coefficient Relationships"},
                            {"id": "stet-math-t3", "title": "Pair of Linear Equations in Two Variables"},
                            {"id": "stet-math-t4", "title": "Quadratic Equations: Discriminant & Nature of Roots"}
                        ]
                    },
                    {
                        "id": "stet-math-c2",
                        "title": "Arithmetic Progressions & Coordinate Geometry",
                        "topics": [
                            {"id": "stet-math-t5", "title": "Arithmetic Progressions: nth Term & Sum Formula"},
                            {"id": "stet-math-t6", "title": "Coordinate Geometry: Distance Formula & Section Formula"},
                            {"id": "stet-math-t7", "title": "Area of Triangles in Coordinate Plane & Collinearity"}
                        ]
                    },
                    {
                        "id": "stet-math-c3",
                        "title": "Triangles, Circles & Trigonometry",
                        "topics": [
                            {"id": "stet-math-t8", "title": "Similar Triangles & Basic Proportionality Theorem (Thales)"},
                            {"id": "stet-math-t9", "title": "Circle Geometry: Tangents, Secants & Theorems"},
                            {"id": "stet-math-t10", "title": "Trigonometric Ratios, Identities & Complementary Angles"},
                            {"id": "stet-math-t11", "title": "Heights and Distances: Angles of Elevation & Depression"}
                        ]
                    },
                    {
                        "id": "stet-math-c4",
                        "title": "Mensuration, Statistics & Probability",
                        "topics": [
                            {"id": "stet-math-t12", "title": "Areas Related to Circles: Sectors & Segments"},
                            {"id": "stet-math-t13", "title": "Surface Areas and Volumes of Combinations of Solids"},
                            {"id": "stet-math-t14", "title": "Statistics: Mean, Median, Mode of Grouped Data"},
                            {"id": "stet-math-t15", "title": "Classical Probability & Mutually Exclusive Events"}
                        ]
                    }
                ]
            },
            {
                "id": "stet-sci",
                "name": "Secondary Science",
                "classLevel": "Classes IX–X",
                "chapters": [
                    {
                        "id": "stet-sci-c1",
                        "title": "Physics: Mechanics, Gravitation & Sound",
                        "topics": [
                            {"id": "stet-sci-t1", "title": "Kinematics: Equations of Uniformly Accelerated Motion"},
                            {"id": "stet-sci-t2", "title": "Newton's Laws of Motion & Conservation of Linear Momentum"},
                            {"id": "stet-sci-t3", "title": "Universal Law of Gravitation, Free Fall & Buoyancy"},
                            {"id": "stet-sci-t4", "title": "Work, Kinetic Energy, Potential Energy & Power"},
                            {"id": "stet-sci-t5", "title": "Sound: Wave Parameters, Echo, Sonar & Ultrasound"}
                        ]
                    },
                    {
                        "id": "stet-sci-c2",
                        "title": "Physics: Optics, Electricity & Magnetism",
                        "topics": [
                            {"id": "stet-sci-t6", "title": "Refraction of Light, Snell's Law & Lens Formula"},
                            {"id": "stet-sci-t7", "title": "Human Eye: Power of Accommodation & Vision Defects"},
                            {"id": "stet-sci-t8", "title": "Ohm's Law, Resistivity & Electrical Circuits"},
                            {"id": "stet-sci-t9", "title": "Magnetic Effects: Right-Hand Rule, Solenoid & Induction"}
                        ]
                    },
                    {
                        "id": "stet-sci-c3",
                        "title": "Chemistry: Chemical Reactions, Acids & Carbon",
                        "topics": [
                            {"id": "stet-sci-t10", "title": "Chemical Reactions: Balancing & Types of Reactions"},
                            {"id": "stet-sci-t11", "title": "Acids, Bases, Salts, pH Scale & Chemical Compounds"},
                            {"id": "stet-sci-t12", "title": "Metals, Non-metals, Reactivity & Metallurgy Principles"},
                            {"id": "stet-sci-t13", "title": "Carbon Compounds: Covalent Bonding, Homologous Series & Reactions"},
                            {"id": "stet-sci-t14", "title": "Periodic Classification: Modern Periodic Table & Periodic Trends"}
                        ]
                    },
                    {
                        "id": "stet-sci-c4",
                        "title": "Biology: Cell, Life Processes & Genetics",
                        "topics": [
                            {"id": "stet-sci-t15", "title": "Cell Biology: Ultrastructure & Organelle Functions"},
                            {"id": "stet-sci-t16", "title": "Plant and Animal Tissues: Meristematic, Permanent & Connective"},
                            {"id": "stet-sci-t17", "title": "Life Processes: Nutrition, Respiration & Double Circulation"},
                            {"id": "stet-sci-t18", "title": "Control and Coordination: Phytohormones & Nervous System"},
                            {"id": "stet-sci-t19", "title": "Heredity, Mendel's Monohybrid/Dihybrid Laws & Sex Determination"},
                            {"id": "stet-sci-t20", "title": "Ecosystem, Trophic Levels, 10% Law & Environmental Conservation"}
                        ]
                    }
                ]
            },
            {
                "id": "stet-ped",
                "name": "Art of Teaching & Other Skills",
                "classLevel": "Secondary Education",
                "chapters": [
                    {
                        "id": "stet-ped-c1",
                        "title": "Art of Teaching & Pedagogical Competence",
                        "topics": [
                            {"id": "stet-ped-t1", "title": "Teaching-Learning Process: Concepts, Phases & Variables"},
                            {"id": "stet-ped-t2", "title": "Instructional Objectives & Bloom's Revised Taxonomy"},
                            {"id": "stet-ped-t3", "title": "Teaching Methods: Deductive, Inductive, Heuristic & Project"},
                            {"id": "stet-ped-t4", "title": "Lesson Planning & Microteaching Skills"},
                            {"id": "stet-ped-t5", "title": "Evaluation Systems: Diagnostic, Formative, Summative & Rubrics"},
                            {"id": "stet-ped-t6", "title": "Classroom Management & Inclusive Education Practices"}
                        ]
                    },
                    {
                        "id": "stet-ped-c2",
                        "title": "General Knowledge & Environmental Aptitude",
                        "topics": [
                            {"id": "stet-ped-t7", "title": "Environmental Science, Climate Change & Biodiversity Treaties"},
                            {"id": "stet-ped-t8", "title": "Mathematical Aptitude & Logical Reasoning in Teaching"}
                        ]
                    }
                ]
            }
        ]
    },

    # =========================================================================
    # 3. BPSC TRE 4: MIDDLE SCHOOL (CLASSES VI–VIII) MATH & SCIENCE
    # =========================================================================
    "bpsc-tre-middle": {
        "examName": "BPSC TRE 4: Classes VI–VIII Math & Science",
        "officialBody": "Bihar Public Service Commission (BPSC)",
        "optionCount": 5,
        "negativeMarking": 0,
        "subjects": [
            {
                "id": "bpsc-mid-math",
                "name": "Middle School Mathematics",
                "classLevel": "Classes VI–VIII",
                "chapters": [
                    {
                        "id": "bpsc-mid-math-c1",
                        "title": "Number Theory & Advanced Arithmetic",
                        "topics": [
                            {"id": "bpsc-mid-math-t1", "title": "Real Numbers, Divisibility Rules, HCF & LCM Applications"},
                            {"id": "bpsc-mid-math-t2", "title": "Fractions, Decimals, Surds & Indices"},
                            {"id": "bpsc-mid-math-t3", "title": "Percentages, Profit, Loss & Successive Discounts"},
                            {"id": "bpsc-mid-math-t4", "title": "Simple & Compound Interest with Half-Yearly Conversions"},
                            {"id": "bpsc-mid-math-t5", "title": "Ratio, Proportion, Partnership & Alligations"},
                            {"id": "bpsc-mid-math-t6", "title": "Time, Work, Pipes & Cisterns"},
                            {"id": "bpsc-mid-math-t7", "title": "Speed, Distance, Time, Trains & Relative Velocity"}
                        ]
                    },
                    {
                        "id": "bpsc-mid-math-c2",
                        "title": "Algebra, Geometry & Mensuration",
                        "topics": [
                            {"id": "bpsc-mid-math-t8", "title": "Polynomials, Identities & Linear Equations in One & Two Variables"},
                            {"id": "bpsc-mid-math-t9", "title": "Triangles: Congruence, Similarity & Pythagorean Triples"},
                            {"id": "bpsc-mid-math-t10", "title": "Quadrilaterals, Polygons & Circle Theorems"},
                            {"id": "bpsc-mid-math-t11", "title": "2D Mensuration: Triangles, Trapeziums, Circles & Shaded Regions"},
                            {"id": "bpsc-mid-math-t12", "title": "3D Mensuration: Surface Area & Volume of Prisms, Cylinders & Cones"},
                            {"id": "bpsc-mid-math-t13", "title": "Descriptive Statistics: Central Tendency & Data Interpretation"}
                        ]
                    }
                ]
            },
            {
                "id": "bpsc-mid-sci",
                "name": "Middle School Science",
                "classLevel": "Classes VI–VIII",
                "chapters": [
                    {
                        "id": "bpsc-mid-sci-c1",
                        "title": "Physics: Force, Motion, Light & Electricity",
                        "topics": [
                            {"id": "bpsc-mid-sci-t1", "title": "Measurement, Motion & Graphical Analysis of Speed"},
                            {"id": "bpsc-mid-sci-t2", "title": "Forces, Pressure, Pascal's Principle & Atmospheric Pressure"},
                            {"id": "bpsc-mid-sci-t3", "title": "Heat, Temperature Scales, Conduction, Convection & Radiation"},
                            {"id": "bpsc-mid-sci-t4", "title": "Optics: Reflection, Refraction, Concave/Convex Mirrors & Lenses"},
                            {"id": "bpsc-mid-sci-t5", "title": "Electric Circuits, Ohm's Law, Resistance & Magnetic Effects"},
                            {"id": "bpsc-mid-sci-t6", "title": "Sound: Characteristics, Vibration, Infrasonic & Ultrasonic Waves"}
                        ]
                    },
                    {
                        "id": "bpsc-mid-sci-c2",
                        "title": "Chemistry: Matter, Acids, Metals & Fuels",
                        "topics": [
                            {"id": "bpsc-mid-sci-t7", "title": "Physical and Chemical Changes, Separation Techniques"},
                            {"id": "bpsc-mid-sci-t8", "title": "Acids, Bases, Indicators & Salt Formation"},
                            {"id": "bpsc-mid-sci-t9", "title": "Metals, Non-metals, Reactivity Series & Corrosion"},
                            {"id": "bpsc-mid-sci-t10", "title": "Combustion, Flame, Fuels, Calorific Value & Pollution"}
                        ]
                    },
                    {
                        "id": "bpsc-mid-sci-c3",
                        "title": "Biology: Living Organisms, Systems & Ecology",
                        "topics": [
                            {"id": "bpsc-mid-sci-t11", "title": "Nutrition in Plants & Animals: Modes & Digestive Anatomy"},
                            {"id": "bpsc-mid-sci-t12", "title": "Cell Biology: Organelles, Plant vs Animal Cells"},
                            {"id": "bpsc-mid-sci-t13", "title": "Respiration, Circulation & Excretory System in Humans"},
                            {"id": "bpsc-mid-sci-t14", "title": "Plant Reproduction, Pollination & Seed Dispersal"},
                            {"id": "bpsc-mid-sci-t15", "title": "Microorganisms: Beneficial vs Pathogenic Roles"},
                            {"id": "bpsc-mid-sci-t16", "title": "Ecology: Habitats, Food Chains & Forest Conservation"}
                        ]
                    }
                ]
            },
            {
                "id": "bpsc-mid-gs",
                "name": "General Studies & Bihar Heritage",
                "classLevel": "Secondary / Recruitment",
                "chapters": [
                    {
                        "id": "bpsc-mid-gs-c1",
                        "title": "General Studies: Science, Movement & Bihar Context",
                        "topics": [
                            {"id": "bpsc-mid-gs-t1", "title": "Indian National Movement: Champaran Satyagraha & 1857 in Bihar"},
                            {"id": "bpsc-mid-gs-t2", "title": "Physical & Political Geography of Bihar & India"},
                            {"id": "bpsc-mid-gs-t3", "title": "General Mental Ability, Numerical Logic & Elementary Reasoning"}
                        ]
                    }
                ]
            }
        ]
    },

    # =========================================================================
    # 4. BPSC TRE 4: SECONDARY SCIENCE (CLASSES IX–X)
    # =========================================================================
    "bpsc-tre-secondary": {
        "examName": "BPSC TRE 4: Classes IX–X Science",
        "officialBody": "Bihar Public Service Commission (BPSC)",
        "optionCount": 5,
        "negativeMarking": 0,
        "subjects": [
            {
                "id": "bpsc-sec-phy",
                "name": "Physics (Secondary Science)",
                "classLevel": "Classes IX–X",
                "chapters": [
                    {
                        "id": "bpsc-sec-phy-c1",
                        "title": "Mechanics, Gravitation & Waves",
                        "topics": [
                            {"id": "bpsc-sec-phy-t1", "title": "Motion in One Dimension & Equations of Motion"},
                            {"id": "bpsc-sec-phy-t2", "title": "Newton's Laws, Momentum, Impulse & Friction"},
                            {"id": "bpsc-sec-phy-t3", "title": "Gravitation, Free Fall, Kepler's Laws & Archimedes' Principle"},
                            {"id": "bpsc-sec-phy-t4", "title": "Work, Energy, Conservation of Mechanical Energy & Power"},
                            {"id": "bpsc-sec-phy-t5", "title": "Wave Motion, Speed of Sound, Doppler Effect Basics & Echoes"}
                        ]
                    },
                    {
                        "id": "bpsc-sec-phy-c2",
                        "title": "Optics, Electricity & Electromagnetism",
                        "topics": [
                            {"id": "bpsc-sec-phy-t6", "title": "Geometrical Optics: Reflection, Refraction & Lens/Mirror Formulas"},
                            {"id": "bpsc-sec-phy-t7", "title": "Dispersion, Scattering of Light & Atmospheric Refraction"},
                            {"id": "bpsc-sec-phy-t8", "title": "Current Electricity, Ohm's Law, Resistivity & Joule's Heating"},
                            {"id": "bpsc-sec-phy-t9", "title": "Magnetic Effects, Ampere's Law, Solenoids & Fleming's Rules"},
                            {"id": "bpsc-sec-phy-t10", "title": "Electromagnetic Induction, Faraday's Laws & AC/DC Generators"}
                        ]
                    }
                ]
            },
            {
                "id": "bpsc-sec-chem",
                "name": "Chemistry (Secondary Science)",
                "classLevel": "Classes IX–X",
                "chapters": [
                    {
                        "id": "bpsc-sec-chem-c1",
                        "title": "Matter, Atomic Structure & Chemical Bonding",
                        "topics": [
                            {"id": "bpsc-sec-chem-t1", "title": "Atomic Structure: Subatomic Particles, Bohr Model & Quantum Numbers Basics"},
                            {"id": "bpsc-sec-chem-t2", "title": "Chemical Bonding: Ionic, Covalent & Coordinate Bonds"},
                            {"id": "bpsc-sec-chem-t3", "title": "Mole Concept, Stoichiometry & Chemical Formulae"}
                        ]
                    },
                    {
                        "id": "bpsc-sec-chem-c2",
                        "title": "Inorganic & Organic Chemistry",
                        "topics": [
                            {"id": "bpsc-sec-chem-t4", "title": "Chemical Reactions, Types & Redox Chemistry"},
                            {"id": "bpsc-sec-chem-t5", "title": "Acids, Bases, pH Calculations & Buffer Concepts"},
                            {"id": "bpsc-sec-chem-t6", "title": "Metals, Reactivity Series, Metallurgy & Extraction"},
                            {"id": "bpsc-sec-chem-t7", "title": "Carbon & its Compounds: Hydrocarbons, Functional Groups & IUPAC"},
                            {"id": "bpsc-sec-chem-t8", "title": "Periodic Classification: Modern Periodic Trends & Anomalies"}
                        ]
                    }
                ]
            },
            {
                "id": "bpsc-sec-bio",
                "name": "Biology (Secondary Science)",
                "classLevel": "Classes IX–X",
                "chapters": [
                    {
                        "id": "bpsc-sec-bio-c1",
                        "title": "Cytology, Tissues & Life Processes",
                        "topics": [
                            {"id": "bpsc-sec-bio-t1", "title": "Cellular Biology: Ultra-structure, Membranes & Transport"},
                            {"id": "bpsc-sec-bio-t2", "title": "Plant and Animal Histology: Complex Permanent Tissues"},
                            {"id": "bpsc-sec-bio-t3", "title": "Human Physiology: Digestion, Respiration, Circulation & Excretion"},
                            {"id": "bpsc-sec-bio-t4", "title": "Endocrine System, Neural Coordination & Reflex Arcs"}
                        ]
                    },
                    {
                        "id": "bpsc-sec-bio-c2",
                        "title": "Reproduction, Genetics & Ecology",
                        "topics": [
                            {"id": "bpsc-sec-bio-t5", "title": "Reproductive Biology: Plant and Human Reproduction"},
                            {"id": "bpsc-sec-bio-t6", "title": "Classical Genetics: Mendelian Inheritance & Chromosomal Theory"},
                            {"id": "bpsc-sec-bio-t7", "title": "Ecology, Energy Flow, Biogeochemical Cycles & Wildlife Conservation"}
                        ]
                    }
                ]
            },
            {
                "id": "bpsc-sec-gs",
                "name": "General Studies (Secondary)",
                "classLevel": "Secondary / Recruitment",
                "chapters": [
                    {
                        "id": "bpsc-sec-gs-c1",
                        "title": "General Studies: Bihar Special & National Movement",
                        "topics": [
                            {"id": "bpsc-sec-gs-t1", "title": "Indian National Movement: Role of Bihar Leaders (Kunwar Singh, Rajendra Prasad)"},
                            {"id": "bpsc-sec-gs-t2", "title": "Geography, Rivers & Mineral Resources of Bihar"}
                        ]
                    }
                ]
            }
        ]
    }
}

def get_all_topics():
    topics = []
    for exam_id, exam_data in TOPIC_MATRIX.items():
        for subj in exam_data["subjects"]:
            for ch in subj["chapters"]:
                for t in ch["topics"]:
                    topics.append({
                        "examId": exam_id,
                        "subjectId": subj["id"],
                        "subject": subj["name"],
                        "classLevel": subj["classLevel"],
                        "chapterId": ch["id"],
                        "chapter": ch["title"],
                        "topicId": t["id"],
                        "topic": t["title"],
                        "optionCount": exam_data["optionCount"]
                    })
    return topics

if __name__ == "__main__":
    topics = get_all_topics()
    print(f"Total topics mapped: {len(topics)}")
    by_exam = {}
    for t in topics:
        by_exam[t["examId"]] = by_exam.get(t["examId"], 0) + 1
    for k, v in by_exam.items():
        print(f"  {k}: {v} topics mapped")
