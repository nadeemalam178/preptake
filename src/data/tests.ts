import { PracticeTest } from '@/types';

export const PRACTICE_TESTS: PracticeTest[] = [
  // --- CTET Paper 2 Tests ---
  {
    id: 'test-ctet-pyq-full',
    examId: 'ctet-p2',
    type: 'pyq-paper',
    title: 'CTET Paper 2 Official PYQ Speed Drill (Jan 2024 & Aug 2023)',
    description: 'Authentic previous-year questions from CTET Paper 2 Mathematics and Science sections.',
    durationMinutes: 15,
    questionIds: ['ctet-m-01', 'ctet-m-02', 'ctet-m-03', 'ctet-m-04', 'ctet-s-01', 'ctet-s-02', 'ctet-s-03', 'ctet-s-04']
  },
  {
    id: 'test-ctet-math-ch1',
    examId: 'ctet-p2',
    type: 'chapter',
    title: 'CTET Math Chapter Test: Number System & Commercial Arithmetic',
    description: 'Focused test on Prime Factorization, HCF/LCM, and Compound Interest calculations.',
    durationMinutes: 8,
    questionIds: ['ctet-m-01', 'ctet-m-04']
  },
  {
    id: 'test-ctet-sci-matter',
    examId: 'ctet-p2',
    type: 'topic',
    title: 'CTET Science Topic Drill: Matter, Acids & Chemical Indicators',
    description: 'Topic-wise practice on Evaporation, Boiling, and chemical indicators.',
    durationMinutes: 6,
    questionIds: ['ctet-s-01', 'ctet-s-02']
  },
  {
    id: 'test-ctet-mock-1',
    examId: 'ctet-p2',
    type: 'mock',
    title: 'CTET Paper 2 Mathematics & Science Full Mock Test',
    description: 'Comprehensive simulation matching the latest CBSE pattern with balanced content and pedagogy.',
    durationMinutes: 12,
    questionIds: ['ctet-m-01', 'ctet-m-02', 'ctet-m-03', 'ctet-s-01', 'ctet-s-03', 'ctet-s-04']
  },

  // --- Bihar STET Paper 1 Tests ---
  {
    id: 'test-stet-pyq-paper',
    examId: 'bihar-stet-p1',
    type: 'pyq-paper',
    title: 'Bihar STET Paper 1 Official PYQ Practice (Sept 2023)',
    description: 'Real secondary-stage questions covering Momentum, Cell Biology, Quadratic Equations, and Art of Teaching.',
    durationMinutes: 10,
    questionIds: ['stet-s-01', 'stet-s-02', 'stet-m-01', 'stet-p-01']
  },
  {
    id: 'test-stet-sci-drill',
    examId: 'bihar-stet-p1',
    type: 'chapter',
    title: 'Bihar STET Secondary Science Chapter Test',
    description: 'Physics & Biology high-yield topics for Classes 9 & 10.',
    durationMinutes: 6,
    questionIds: ['stet-s-01', 'stet-s-02']
  },

  // --- BPSC TRE 4 Middle (6-8) Tests ---
  {
    id: 'test-bpsc-mid-pyq',
    examId: 'bpsc-tre-middle',
    type: 'pyq-paper',
    title: 'BPSC TRE 2.0 & 3.0 Middle School (Classes 6–8) PYQ Drill',
    description: 'Authentic 5-option BPSC format questions in Electricity, Environment, Nephron, and Time & Work.',
    durationMinutes: 10,
    questionIds: ['bpsc-m-01', 'bpsc-m-02', 'bpsc-m-03', 'bpsc-m-04']
  },
  {
    id: 'test-bpsc-mid-mock',
    examId: 'bpsc-tre-middle',
    type: 'mock',
    title: 'BPSC TRE 4 Middle (6–8) Science & Math Mock Test',
    description: 'Practice with BPSC 5-option format ("None of the above / More than one of the above").',
    durationMinutes: 12,
    questionIds: ['bpsc-m-01', 'bpsc-m-02', 'bpsc-m-03', 'bpsc-m-04']
  },

  // --- BPSC TRE 4 Secondary (9-10) Tests ---
  {
    id: 'test-bpsc-sec-pyq',
    examId: 'bpsc-tre-secondary',
    type: 'pyq-paper',
    title: 'BPSC TRE Secondary Science (Classes 9–10) PYQ Practice',
    description: 'Authentic secondary science questions across Optics, Organic Functional Groups, Genetics, and Magnetic Fields.',
    durationMinutes: 10,
    questionIds: ['bpsc-sec-01', 'bpsc-sec-02', 'bpsc-sec-03', 'bpsc-sec-04']
  },
  {
    id: 'test-bpsc-sec-mock',
    examId: 'bpsc-tre-secondary',
    type: 'mock',
    title: 'BPSC TRE 4 Secondary Science Full Mock Test',
    description: 'Graduation-calibrated NCERT/SCERT secondary science simulation.',
    durationMinutes: 12,
    questionIds: ['bpsc-sec-01', 'bpsc-sec-02', 'bpsc-sec-03', 'bpsc-sec-04']
  }
];

export function getTestsByExam(examId: string): PracticeTest[] {
  return PRACTICE_TESTS.filter(t => t.examId === examId);
}

export function getTestById(id: string): PracticeTest | undefined {
  return PRACTICE_TESTS.find(t => t.id === id);
}
