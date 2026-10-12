import { Exam } from '@/types';

export const EXAMS: Exam[] = [
  {
    id: 'ctet-p2',
    name: 'CTET Paper 2: Mathematics & Science',
    shortName: 'CTET Paper 2',
    category: 'Central TET',
    targetClasses: 'Classes VI – VIII',
    description: 'Central Teacher Eligibility Test conducted by CBSE for Elementary / Middle stage teachers (Classes 6 to 8).',
    officialBody: 'Central Board of Secondary Education (CBSE)',
    badgeColor: 'bg-blue-600',
    subjects: ['Mathematics & Pedagogy', 'Science & Pedagogy']
  },
  {
    id: 'bihar-stet-p1',
    name: 'Bihar STET Paper 1: Secondary Math & Science',
    shortName: 'Bihar STET Paper 1',
    category: 'State TET (Secondary)',
    targetClasses: 'Classes IX – X',
    description: 'Bihar Secondary Teachers Eligibility Test conducted by BSEB for Secondary School teachers (Classes 9 and 10).',
    officialBody: 'Bihar School Examination Board (BSEB)',
    badgeColor: 'bg-emerald-600',
    subjects: ['Secondary Mathematics', 'Secondary Science', 'Art of Teaching & Pedagogy']
  },
  {
    id: 'bpsc-tre-middle',
    name: 'BPSC TRE 4: Classes VI–VIII Math & Science',
    shortName: 'BPSC TRE Middle (6–8)',
    category: 'Teacher Recruitment (Middle)',
    targetClasses: 'Classes VI – VIII',
    description: 'Bihar Public Service Commission Teacher Recruitment Examination (TRE 4.0) for Middle School Mathematics and Science teachers.',
    officialBody: 'Bihar Public Service Commission (BPSC)',
    badgeColor: 'bg-amber-600',
    subjects: ['Middle School Mathematics', 'Middle School Science', 'General Studies']
  },
  {
    id: 'bpsc-tre-secondary',
    name: 'BPSC TRE 4: Classes IX–X Science',
    shortName: 'BPSC TRE Secondary (9–10)',
    category: 'Teacher Recruitment (Secondary)',
    targetClasses: 'Classes IX – X',
    description: 'Bihar Public Service Commission Teacher Recruitment Examination (TRE 4.0) for Secondary School Science teachers (Physics, Chemistry, Biology).',
    officialBody: 'Bihar Public Service Commission (BPSC)',
    badgeColor: 'bg-purple-600',
    subjects: ['Physics', 'Chemistry', 'Biology', 'General Studies']
  }
];

export function getExamById(id: string): Exam | undefined {
  return EXAMS.find(exam => exam.id === id);
}
