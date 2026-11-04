export type QuestionType = 'multiple-choice' | 'fill-blank';

export type GrammarTopic =
  | 'cultural-basics'
  | 'phonetics-accent'
  | 'pronouns-ser-llamarse'
  | 'gender-number-articles'
  | 'ser-vs-estar'
  | 'adjectives-apocope'
  | 'nationality-origin-titles'
  | 'demonstratives-possessives'
  | 'hay-vs-estar'
  | 'numbers-positions';

export interface QuizQuestion {
  id: string;
  chapterId: number;
  chapterTitle: string;
  topic: GrammarTopic;
  topicLabel: string;
  type: QuestionType;
  prompt: string;
  sentence?: string;
  options?: string[]; // for multiple-choice
  correctAnswer: string;
  acceptableAnswers?: string[]; // alternate spellings or trims
  explanation: string;
  examTip?: string;
  source?: string;
  isReview?: boolean; // if injected as mistake review question
  targetSectionId?: string; // anchor in Part 1 for 1-click study jump
}

export interface UserAnswerRecord {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timeSpentSec: number;
  timestamp: number;
}

export interface QuizSession {
  sessionId: string;
  roundNumber: number;
  totalQuestions: number;
  questions: QuizQuestion[];
  answers: Record<string, string>; // questionId -> answer
  flaggedQuestionIds: string[];
  currentIndex: number;
  isCompleted: boolean;
  isPaused: boolean;
  startTime: number;
  endTime?: number;
  elapsedSeconds: number;
  interleavedMistakeCount: number;
  newQuestionCount: number;
}

export interface MistakeItem {
  questionId: string;
  question: QuizQuestion;
  wrongAnswer: string;
  lastAttemptTime: number;
  incorrectCount: number;
  resolved: boolean;
}

export interface ChapterSection {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  rules?: {
    title: string;
    description: string;
    examples?: { es: string; ko: string; note?: string }[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    tip?: string;
  }[];
  exercises?: {
    question: string;
    answer: string;
    explanation: string;
  }[];
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  lectureWeek: string;
  summary: string;
  badge: string;
  sections: ChapterSection[];
  keyTakeaways: string[];
}

export interface TopicPerformance {
  topic: GrammarTopic;
  label: string;
  chapterId: number;
  total: number;
  correct: number;
  accuracy: number;
  status: 'critical' | 'warning' | 'good';
  prescription: string;
  targetSectionId: string;
}

export interface ChapterPerformance {
  chapterId: number;
  title: string;
  total: number;
  correct: number;
  accuracy: number;
  status: 'critical' | 'warning' | 'good';
  targetSectionId: string;
}

export interface OverallAnalysis {
  totalAttempted: number;
  totalCorrect: number;
  totalIncorrect: number;
  overallAccuracy: number;
  chapterStats: ChapterPerformance[];
  topicStats: TopicPerformance[];
  weakestTopics: TopicPerformance[];
  recommendations: {
    chapterId: number;
    title: string;
    sectionId: string;
    reason: string;
    actionLabel: string;
    severity: 'high' | 'medium' | 'low';
  }[];
}
