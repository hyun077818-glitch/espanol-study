import { QuizQuestion, QuizSession, MistakeItem } from '../types';
import { QUIZ_BANK } from '../data/quizBank';

const SESSION_STORAGE_KEY = 'spanish_master_active_session_v2';
const MISTAKES_STORAGE_KEY = 'spanish_master_mistakes_bank_v2';
const HISTORY_STORAGE_KEY = 'spanish_master_completed_history_v2';

// Migration helper from previous keys if present
function getFromStorageWithFallback(key: string, legacyKey: string): string | null {
  if (typeof window === 'undefined') return null;
  const val = localStorage.getItem(key);
  if (val) return val;
  const legacyVal = localStorage.getItem(legacyKey);
  if (legacyVal) {
    try {
      localStorage.setItem(key, legacyVal);
      localStorage.removeItem(legacyKey);
    } catch {
      // ignore
    }
    return legacyVal;
  }
  return null;
}

export const TOTAL_QUESTIONS_PER_SESSION = 50;

/**
 * Fisher-Yates array shuffle helper
 */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Clean & normalize student answers for flexible, robust comparison
 */
export function checkAnswer(userAnswer: string, question: QuizQuestion): boolean {
  if (!userAnswer || !userAnswer.trim()) return false;

  const clean = (str: string) =>
    str
      .trim()
      .toLowerCase()
      .replace(/[¿?¡!.,]/g, '')
      .replace(/\s+/g, ' ');

  const u = clean(userAnswer);
  const c = clean(question.correctAnswer);

  if (u === c) return true;

  // Check acceptable alternatives if provided
  if (question.acceptableAnswers && question.acceptableAnswers.length > 0) {
    for (const alt of question.acceptableAnswers) {
      if (u === clean(alt)) return true;
    }
  }

  // Also check without diacritics as a lenient secondary check for typing convenience
  const removeDiacritics = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (removeDiacritics(u) === removeDiacritics(c)) {
    return true;
  }

  return false;
}

/**
 * Get stored mistake bank
 */
export function getStoredMistakes(): MistakeItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = getFromStorageWithFallback(
      MISTAKES_STORAGE_KEY,
      'hallym_spanish_mistakes_bank_v2'
    );
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Save mistake items to bank
 */
export function saveMistakesToBank(newMistakes: MistakeItem[]) {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredMistakes();
    const map = new Map<string, MistakeItem>();

    // Load existing
    current.forEach((item) => map.set(item.questionId, item));

    // Update with new
    newMistakes.forEach((item) => {
      const existing = map.get(item.questionId);
      if (existing) {
        existing.incorrectCount += 1;
        existing.lastAttemptTime = item.lastAttemptTime;
        existing.wrongAnswer = item.wrongAnswer;
        existing.resolved = false;
      } else {
        map.set(item.questionId, item);
      }
    });

    localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(Array.from(map.values())));
  } catch (e) {
    console.error('Failed to save mistakes', e);
  }
}

/**
 * Mark a mistake as resolved
 */
export function resolveMistakeInBank(questionId: string) {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredMistakes();
    const updated = current.map((m) =>
      m.questionId === questionId ? { ...m, resolved: true } : m
    );
    localStorage.setItem(MISTAKES_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to resolve mistake', e);
  }
}

/**
 * Generate a 50-question session:
 * Weaves in previous mistake questions evenly between newly picked questions,
 * resulting in an exact total of 50 questions!
 */
export function generate50QuestionSession(roundNumber: number): QuizSession {
  const allMistakes = getStoredMistakes().filter((m) => !m.resolved);
  
  // Choose up to 25 mistakes (or all if fewer) to avoid starving fresh questions,
  // but if user has many mistakes, up to 40.
  const mistakesToReview = shuffle(allMistakes)
    .slice(0, Math.min(allMistakes.length, 30))
    .map((m) => ({
      ...m.question,
      isReview: true,
    }));

  const mistakeIds = new Set(mistakesToReview.map((q) => q.id));

  // Candidate pool for fresh questions
  const candidatePool = QUIZ_BANK.filter((q) => !mistakeIds.has(q.id));
  const shuffledCandidates = shuffle(candidatePool);

  const neededFresh = TOTAL_QUESTIONS_PER_SESSION - mistakesToReview.length;
  let selectedFresh: QuizQuestion[] = [];

  if (shuffledCandidates.length >= neededFresh) {
    selectedFresh = shuffledCandidates.slice(0, neededFresh);
  } else {
    // If bank is smaller than needed, repeat/cycle through candidates
    selectedFresh = [...shuffledCandidates];
    while (selectedFresh.length < neededFresh) {
      const remainingNeeded = neededFresh - selectedFresh.length;
      const additional = shuffle(QUIZ_BANK).slice(0, remainingNeeded);
      selectedFresh.push(...additional.map((q, idx) => ({ ...q, id: `${q.id}-cyc${idx}` })));
    }
  }

  // Interleave algorithm:
  // We place fresh questions in an array, then calculate slots to inject mistakes evenly
  const finalQuestions: QuizQuestion[] = new Array(TOTAL_QUESTIONS_PER_SESSION);
  const mistakeCount = mistakesToReview.length;

  if (mistakeCount === 0) {
    // All fresh
    for (let i = 0; i < TOTAL_QUESTIONS_PER_SESSION; i++) {
      finalQuestions[i] = selectedFresh[i];
    }
  } else {
    // Determine positions for mistakes so they are distributed throughout 0..49
    const mistakePositions = new Set<number>();
    const step = TOTAL_QUESTIONS_PER_SESSION / mistakeCount;
    for (let i = 0; i < mistakeCount; i++) {
      const pos = Math.min(TOTAL_QUESTIONS_PER_SESSION - 1, Math.floor(i * step + step / 2));
      // find nearest free slot
      let insertPos = pos;
      while (mistakePositions.has(insertPos) && insertPos < TOTAL_QUESTIONS_PER_SESSION - 1) {
        insertPos++;
      }
      while (mistakePositions.has(insertPos) && insertPos > 0) {
        insertPos--;
      }
      mistakePositions.add(insertPos);
    }

    let mIdx = 0;
    let fIdx = 0;
    for (let i = 0; i < TOTAL_QUESTIONS_PER_SESSION; i++) {
      if (mistakePositions.has(i) && mIdx < mistakesToReview.length) {
        finalQuestions[i] = mistakesToReview[mIdx++];
      } else if (fIdx < selectedFresh.length) {
        finalQuestions[i] = selectedFresh[fIdx++];
      } else if (mIdx < mistakesToReview.length) {
        finalQuestions[i] = mistakesToReview[mIdx++];
      } else {
        finalQuestions[i] = QUIZ_BANK[i % QUIZ_BANK.length];
      }
    }
  }

  const session: QuizSession = {
    sessionId: `session-${Date.now()}-${roundNumber}`,
    roundNumber,
    totalQuestions: TOTAL_QUESTIONS_PER_SESSION,
    questions: finalQuestions,
    answers: {},
    flaggedQuestionIds: [],
    currentIndex: 0,
    isCompleted: false,
    isPaused: false,
    startTime: Date.now(),
    elapsedSeconds: 0,
    interleavedMistakeCount: mistakeCount,
    newQuestionCount: TOTAL_QUESTIONS_PER_SESSION - mistakeCount,
  };

  saveActiveSession(session);
  return session;
}

/**
 * Save active session to LocalStorage
 */
export function saveActiveSession(session: QuizSession) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save session', e);
  }
}

/**
 * Get active session
 */
export function getActiveSession(): QuizSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = getFromStorageWithFallback(
      SESSION_STORAGE_KEY,
      'hallym_spanish_active_session_v2'
    );
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Clear active session
 */
export function clearActiveSession() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    localStorage.removeItem('hallym_spanish_active_session_v2');
  } catch (e) {
    console.error('Failed to clear session', e);
  }
}

/**
 * Finish a session, compute results, update mistake bank and history
 */
export function finalizeSession(session: QuizSession): {
  score: number;
  total: number;
  correctCount: number;
  incorrectCount: number;
  newMistakes: MistakeItem[];
} {
  const answers = session.answers;
  let correctCount = 0;
  const newMistakes: MistakeItem[] = [];

  session.questions.forEach((q) => {
    const ans = answers[q.id] || '';
    const isCorrect = checkAnswer(ans, q);
    if (isCorrect) {
      correctCount++;
      if (q.isReview) {
        resolveMistakeInBank(q.id);
      }
    } else {
      newMistakes.push({
        questionId: q.id,
        question: q,
        wrongAnswer: ans,
        lastAttemptTime: Date.now(),
        incorrectCount: 1,
        resolved: false,
      });
    }
  });

  // Save new mistakes to the bank
  if (newMistakes.length > 0) {
    saveMistakesToBank(newMistakes);
  }

  // Save to history log
  const completedSession: QuizSession = {
    ...session,
    isCompleted: true,
    isPaused: false,
    endTime: Date.now(),
  };
  saveHistory(completedSession);
  saveActiveSession(completedSession);

  return {
    score: Math.round((correctCount / session.totalQuestions) * 100),
    total: session.totalQuestions,
    correctCount,
    incorrectCount: session.totalQuestions - correctCount,
    newMistakes,
  };
}

/**
 * Save completed session to history
 */
function saveHistory(session: QuizSession) {
  if (typeof window === 'undefined') return;
  try {
    const raw = getFromStorageWithFallback(
      HISTORY_STORAGE_KEY,
      'hallym_spanish_completed_history_v2'
    );
    const history: QuizSession[] = raw ? JSON.parse(raw) : [];
    history.unshift(session);
    // Keep last 20
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history.slice(0, 20)));
  } catch (e) {
    console.error('Failed to save history', e);
  }
}

/**
 * Get all past completed sessions
 */
export function getHistory(): QuizSession[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = getFromStorageWithFallback(
      HISTORY_STORAGE_KEY,
      'hallym_spanish_completed_history_v2'
    );
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
