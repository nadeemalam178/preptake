"""
data_bpsc_sec.py - Comprehensive BPSC TRE 4 Secondary (Classes 9–10) Syllabus & Study Materials
Covers:
1. Physics (2 chapters, 10 topics)
2. Chemistry (2 chapters, 9 topics)
3. Biology (2 chapters, 8 topics)
4. General Studies (1 chapter, 4 topics)
Strictly aligned with BPSC TRE 4 Secondary Stage Syllabi (NCERT/SCERT Classes 9–10 with graduation depth).
"""

BPSC_SEC_SUBJECTS = [
    # --------------------------------------------------------------------------
    # BPSC TRE Secondary: Physics (Classes 9-10)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 9 Chapter 8 & Class 11 Chapter 3"
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
                        "ncertReference": "NCERT Class 9 Chapter 9 & Class 11 Chapter 5"
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
                        "ncertReference": "NCERT Class 9 Chapter 10 & Class 11 Chapter 8"
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
                        "ncertReference": "NCERT Class 9 Chapter 11 & Class 11 Chapter 6"
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
                        "ncertReference": "NCERT Class 9 Chapter 12 & Class 11 Chapter 15"
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
                        "ncertReference": "NCERT Class 10 Chapter 10 & Class 12 Chapter 9"
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
                        "ncertReference": "NCERT Class 10 Chapter 11 & Class 12 Chapter 9"
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
                        "ncertReference": "NCERT Class 10 Chapter 12 & Class 12 Chapter 3 (Current Electricity)"
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
                        "ncertReference": "NCERT Class 10 Chapter 13 & Class 12 Chapter 4"
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
                        "ncertReference": "NCERT Class 10 Chapter 13 & Class 12 Chapter 6"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # BPSC TRE Secondary: Chemistry (Classes 9-10)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 9 Chapter 4 (Structure of the Atom) & Class 11 Chapter 2"
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
                        "ncertReference": "NCERT Class 10 Chapter 3 & Class 11 Chapter 4"
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
                        "ncertReference": "NCERT Class 9 Chapter 3 (Atoms and Molecules) & Class 11 Chapter 1"
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
                        "ncertReference": "NCERT Class 11 Chapter 5 (States of Matter)"
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
                        "ncertReference": "NCERT Class 10 Chapter 1 & Class 11 Chapter 8"
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
                        "ncertReference": "NCERT Class 10 Chapter 2 & Class 11 Chapter 7"
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
                        "ncertReference": "NCERT Class 10 Chapter 3 & Class 12 Chapter 6"
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
                        "ncertReference": "NCERT Class 10 Chapter 4 (Carbon and its Compounds)"
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
                        "ncertReference": "NCERT Class 10 Chapter 5 & Class 11 Chapter 3"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # BPSC TRE Secondary: Biology (Classes 9-10)
    # --------------------------------------------------------------------------
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
                        "ncertReference": "NCERT Class 9 Chapter 5 & Class 11 Chapters 8 and 10"
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
                        "ncertReference": "NCERT Class 9 Chapter 6 & Class 11 Chapter 6"
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
                        "ncertReference": "NCERT Class 10 Chapter 6 & Class 11 Unit 5 (Human Physiology)"
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
                        "ncertReference": "NCERT Class 10 Chapter 7 & Class 11 Chapters 21 and 22"
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
                        "ncertReference": "NCERT Class 10 Chapter 8 & Class 12 Chapters 2 and 3"
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
                        "ncertReference": "NCERT Class 10 Chapter 9 & Class 12 Chapter 5"
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
                        "ncertReference": "NCERT Class 10 Chapter 9 & Class 12 Chapter 6"
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
                        "ncertReference": "NCERT Class 10 Chapter 15 & Class 12 Chapter 14 and 15"
                    }
                ]
            }
        ]
    },

    # --------------------------------------------------------------------------
    # BPSC TRE Secondary: General Studies
    # --------------------------------------------------------------------------
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
                        "ncertReference": "Bihar Special Modern History & Freedom Movement"
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
                        "ncertReference": "Bihar Economy & Geography Profile"
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
                        "ncertReference": "NCERT Class 11 Indian Constitution at Work"
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
                        "ncertReference": "BPSC Mental Ability & Reasoning Guide"
                    }
                ]
            }
        ]
    }
]
