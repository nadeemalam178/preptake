import { ExamId, Question, QuestionOption, QuestionVerificationStatus } from '@/types';

/**
 * Transforms any Google Sheet sharing URL into a public CSV export URL.
 * Supports:
 * - https://docs.google.com/spreadsheets/d/{ID}/edit#gid=0
 * - https://docs.google.com/spreadsheets/d/{ID}/pub?output=csv
 * - Direct CSV links
 */
export function normalizeGoogleSheetUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // If already an export or published link
  if (trimmed.includes('output=csv') || trimmed.includes('/export?format=csv')) {
    return trimmed;
  }

  // Extract sheet ID from standard google doc URL
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    const sheetId = match[1];
    return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
  }

  return trimmed;
}

/**
 * Lightweight, robust CSV line parser respecting quoted cells containing commas and newlines.
 */
export function parseCSV(csvText: string): string[][] {
  const lines: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentCell.trim());
      if (currentRow.some(cell => cell.length > 0)) {
        lines.push(currentRow);
      }
      currentRow = [];
      currentCell = '';
    } else {
      currentCell += char;
    }
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(cell => cell.length > 0)) {
      lines.push(currentRow);
    }
  }

  return lines;
}

/**
 * Fetch and parse questions from a public Google Sheet.
 */
export async function fetchQuestionsFromGoogleSheet(sheetUrl: string): Promise<{ questions: Question[]; count: number }> {
  const exportUrl = normalizeGoogleSheetUrl(sheetUrl);
  if (!exportUrl) throw new Error('Invalid Google Sheet URL provided.');

  const res = await fetch(exportUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch Google Sheet. HTTP status ${res.status}. Make sure the sheet is public (Anyone with the link can view).`);
  }

  const csvText = await res.text();
  const rows = parseCSV(csvText);

  if (rows.length < 2) {
    throw new Error('Google Sheet appears empty or missing column headers.');
  }

  const rawHeaders = rows[0].map(h => h.toLowerCase().trim());
  
  // Find column indexes
  const colIndex = {
    id: rawHeaders.findIndex(h => h.includes('id')),
    exam: rawHeaders.findIndex(h => h.includes('exam')),
    subject: rawHeaders.findIndex(h => h.includes('subject')),
    chapter: rawHeaders.findIndex(h => h.includes('chapter')),
    topic: rawHeaders.findIndex(h => h.includes('topic')),
    question: rawHeaders.findIndex(h => h.includes('question')),
    optA: rawHeaders.findIndex(h => h.includes('opt') && (h.includes('a') || h.includes('1')) || h === 'option a'),
    optB: rawHeaders.findIndex(h => h.includes('opt') && (h.includes('b') || h.includes('2')) || h === 'option b'),
    optC: rawHeaders.findIndex(h => h.includes('opt') && (h.includes('c') || h.includes('3')) || h === 'option c'),
    optD: rawHeaders.findIndex(h => h.includes('opt') && (h.includes('d') || h.includes('4')) || h === 'option d'),
    optE: rawHeaders.findIndex(h => h.includes('opt') && (h.includes('e') || h.includes('5')) || h === 'option e'),
    correct: rawHeaders.findIndex(h => h.includes('correct') || h.includes('answer')),
    explanation: rawHeaders.findIndex(h => h.includes('explanation') || h.includes('solution')),
    source: rawHeaders.findIndex(h => h.includes('source') || h.includes('reference')),
    year: rawHeaders.findIndex(h => h.includes('year')),
    isPYQ: rawHeaders.findIndex(h => h.includes('pyq') || h.includes('official'))
  };

  const parsedQuestions: Question[] = [];

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const questionText = colIndex.question >= 0 ? row[colIndex.question] : '';
    if (!questionText || questionText.trim().length === 0) continue;

    const optA = colIndex.optA >= 0 ? row[colIndex.optA] : '';
    const optB = colIndex.optB >= 0 ? row[colIndex.optB] : '';
    const optC = colIndex.optC >= 0 ? row[colIndex.optC] : '';
    const optD = colIndex.optD >= 0 ? row[colIndex.optD] : '';
    const optE = colIndex.optE >= 0 ? row[colIndex.optE] : '';

    const options: QuestionOption[] = [];
    if (optA) options.push({ id: 'A', text: optA });
    if (optB) options.push({ id: 'B', text: optB });
    if (optC) options.push({ id: 'C', text: optC });
    if (optD) options.push({ id: 'D', text: optD });
    if (optE) options.push({ id: 'E', text: optE });

    // Normalize exam id
    const rawExam = colIndex.exam >= 0 ? row[colIndex.exam].toLowerCase() : '';
    let examId: ExamId = 'ctet-p2';
    if (rawExam.includes('stet')) examId = 'bihar-stet-p1';
    else if (rawExam.includes('bpsc') && (rawExam.includes('9') || rawExam.includes('sec'))) examId = 'bpsc-tre-secondary';
    else if (rawExam.includes('bpsc') || rawExam.includes('middle') || rawExam.includes('tre')) examId = 'bpsc-tre-middle';
    else if (rawExam.includes('ctet')) examId = 'ctet-p2';

    const rawCorrect = colIndex.correct >= 0 ? row[colIndex.correct].toUpperCase().trim() : 'A';
    const correctAnswerId = ['A', 'B', 'C', 'D', 'E'].includes(rawCorrect) ? rawCorrect : 'A';

    const source = colIndex.source >= 0 && row[colIndex.source] ? row[colIndex.source] : 'Imported from Google Sheets';
    const isOfficialPYQ = colIndex.isPYQ >= 0 ? (row[colIndex.isPYQ].toLowerCase().includes('true') || row[colIndex.isPYQ].toLowerCase().includes('yes')) : true;

    parsedQuestions.push({
      id: `gsheet-${r}-${Math.random().toString(36).substr(2, 5)}`,
      examId,
      subjectId: colIndex.subject >= 0 ? row[colIndex.subject] || 'general' : 'general',
      chapterId: colIndex.chapter >= 0 ? row[colIndex.chapter] || 'ch-1' : 'ch-1',
      topicId: colIndex.topic >= 0 ? row[colIndex.topic] || 't-1' : 't-1',
      questionText,
      options,
      correctAnswerId,
      explanation: colIndex.explanation >= 0 && row[colIndex.explanation] ? row[colIndex.explanation] : 'Explanation provided in sheet.',
      sourceReference: source,
      isOfficialPYQ,
      verificationStatus: isOfficialPYQ ? 'Verified Official PYQ' : 'Curated Practice Drill',
      year: colIndex.year >= 0 ? parseInt(row[colIndex.year], 10) || undefined : undefined
    });
  }

  return { questions: parsedQuestions, count: parsedQuestions.length };
}

/**
 * Returns a ready-to-copy template CSV format for Google Sheets.
 */
export function getSampleGoogleSheetCSV(): string {
  return `Exam,Subject,Chapter,Topic,Year,Question,Option A,Option B,Option C,Option D,Option E,Correct Answer,Explanation,Source,IsOfficialPYQ
CTET Paper 2,Mathematics,Number System,HCF and LCM,2024,"What is the HCF of 24 and 36?","6","12","18","24","","B","Prime factors of 24 = 2^3 * 3; 36 = 2^2 * 3^2. HCF = 2^2 * 3 = 12.","CTET Jan 2024 PYQ",TRUE
Bihar STET Paper 1,Secondary Science,Physics,Momentum,2023,"SI unit of linear momentum is:","kg m/s","m/s^2","Newton","Joule","","A","Momentum p = mass * velocity => kg * m/s.","Bihar STET 2023",TRUE
BPSC TRE Middle,Science,Electricity,Ohm's Law,2023,"If resistance is doubled at constant voltage, current will:","Double","Halve","Remain same","Quadruple","None of the above / More than one of the above","B","Current I = V/R. Doubling R halves I.","BPSC TRE 2.0 Booklet A",TRUE`;
}
