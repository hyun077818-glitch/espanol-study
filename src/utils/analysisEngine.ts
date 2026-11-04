import {
  QuizSession,
  OverallAnalysis,
  ChapterPerformance,
  TopicPerformance,
  GrammarTopic,
} from '../types';
import { CHAPTERS_DATA } from '../data/chapters';
import { checkAnswer, getHistory, getActiveSession } from './quizEngine';

const TOPIC_METADATA: Record<
  GrammarTopic,
  { label: string; chapterId: number; targetSectionId: string }
> = {
  'cultural-basics': {
    label: '스페인어권 문화 & 식문화 (Dos besos, 식사 5단계)',
    chapterId: 1,
    targetSectionId: 'sec-1-3',
  },
  'phonetics-accent': {
    label: '발음, 음절 분해 & 강세 위치 규칙',
    chapterId: 2,
    targetSectionId: 'sec-2-3',
  },
  'pronouns-ser-llamarse': {
    label: '주격 인칭대명사 & SER & Llamarse 동사',
    chapterId: 3,
    targetSectionId: 'sec-3-2',
  },
  'gender-number-articles': {
    label: '명사의 성과 수, 불규칙 명사 & 관사 (el agua)',
    chapterId: 4,
    targetSectionId: 'sec-4-2',
  },
  'ser-vs-estar': {
    label: 'SER vs ESTAR 동사 완벽 판별',
    chapterId: 5,
    targetSectionId: 'sec-5-2',
  },
  'adjectives-apocope': {
    label: '형용사 성수일치 & 어미탈락 (Apócope)',
    chapterId: 5,
    targetSectionId: 'sec-5-4',
  },
  'nationality-origin-titles': {
    label: '국적형용사 남녀형 & 호칭 명사 (Sr. vs Don)',
    chapterId: 6,
    targetSectionId: 'sec-6-2',
  },
  'demonstratives-possessives': {
    label: '지시사 (este, esto) & 소유사 & 동요 어휘',
    chapterId: 7,
    targetSectionId: 'sec-7-1',
  },
  'hay-vs-estar': {
    label: '무인칭동사 Hay vs ESTAR 위치 구분',
    chapterId: 8,
    targetSectionId: 'sec-8-1',
  },
  'numbers-positions': {
    label: '스페인어 숫자 (0~100) & 위치 전치사구',
    chapterId: 8,
    targetSectionId: 'sec-8-3',
  },
};

const PRESCRIPTIONS: Record<GrammarTopic, string> = {
  'ser-vs-estar':
    'SER(본질/출신/직업/성격: Soy médico, Es pequeña)와 ESTAR(일시적 상태/위치: Está cerrada, Está cansado, Está en Madrid)의 구분이 흔들리고 있습니다. 특히 "La puerta está cerrada", "El café está caliente"처럼 상태를 나타내는 표현을 복습하세요.',
  'hay-vs-estar':
    'Hay(불특정 존재: un/una, muchos, 숫자)와 ESTAR(특정 위치: el/la/los/las, mis, 고유명사)의 판별 법칙을 재정립해야 합니다. "Hay una farmacia" vs "Está la farmacia Seúl" 예문을 집중 확인하세요.',
  'gender-number-articles':
    '불규칙 명사(el día, el mapa, el problema, el tema, la mano, la foto)와 단수 여성명사 앞 남성관사(el agua limpia, el arma, el águila)에서 실수가 발생했습니다. Chapter 4의 불규칙 명사 표를 확인하세요.',
  'adjectives-apocope':
    '남성단수명사 앞 어미탈락(primer día, buen amigo)과 Santo vs San의 Do-/To- 예외(Santo Domingo vs San Diego), 그리고 grande가 여성단수 앞에서도 gran이 되는 규칙(una gran mujer)을 꼭 복습하세요.',
  'phonetics-accent':
    '음절분해 4대 규칙(연속 강모음 분리: i-de-a, 약모음 띨데: rí-o, pa-ís)과 모음/n/s 끝 2번째 음절 강세 규칙(ca-ma, Car-men), 자음 끝 마지막 음절 강세(hos-pi-tal)를 복습하세요.',
  'nationality-origin-titles':
    '국적형용사의 남녀형(francés/francesa, español/española, coreano/coreana)과 성 앞 호칭(el señor Gonzáles) vs 이름 앞 호칭(Don Quijote)을 정확히 구분해야 합니다.',
  'demonstratives-possessives':
    '중성 지시대명사 esto, eso, aquello는 명사를 수식할 수 없다는 점과, 소유대명사 el mío, el tuyo 형태를 복습하세요.',
  'numbers-positions':
    '불규칙 숫자 11~15(once, doce...), 16~19(dieciséis 띨데), 20대 veinti- 한 단어 및 60(sesenta)과 70(setenta) 철자 구분을 점검하세요.',
  'cultural-basics':
    '스페인의 5단계 식사 주기(Desayuno, Almuerzo, Comida/메뉴 델 디아, Merienda, Cena), Dos besos(스페인 2회 vs 중남미 1회), 주요 5개국의 문화적 특징을 확인하세요.',
  'pronouns-ser-llamarse':
    '인칭대명사와 SER 동사 현재형(soy, eres, es, somos, sois, son) 및 Llamarse 재귀동사(me llamo, te llamas...) 변형을 복습하세요.',
};

export function analyzePerformance(): OverallAnalysis {
  const history = getHistory();
  const active = getActiveSession();

  // Combine questions and answers from history + active session
  const allSessions: QuizSession[] = [...history];
  if (active && Object.keys(active.answers).length > 0) {
    allSessions.unshift(active);
  }

  // Deduplicate question attempts or accumulate
  const questionMap = new Map<
    string,
    { question: QuizSession['questions'][0]; answers: string[]; isLatestCorrect: boolean }
  >();

  allSessions.forEach((sess) => {
    sess.questions.forEach((q) => {
      const ans = sess.answers[q.id];
      if (ans !== undefined) {
        const correct = checkAnswer(ans, q);
        const existing = questionMap.get(q.id);
        if (existing) {
          existing.answers.push(ans);
          existing.isLatestCorrect = correct;
        } else {
          questionMap.set(q.id, {
            question: q,
            answers: [ans],
            isLatestCorrect: correct,
          });
        }
      }
    });
  });

  const totalAttempted = questionMap.size;
  let totalCorrect = 0;

  // Chapter aggregates
  const chapterCounts: Record<number, { total: number; correct: number }> = {};
  CHAPTERS_DATA.forEach((ch) => {
    chapterCounts[ch.id] = { total: 0, correct: 0 };
  });

  // Topic aggregates
  const topicCounts: Record<string, { total: number; correct: number }> = {};
  Object.keys(TOPIC_METADATA).forEach((top) => {
    topicCounts[top] = { total: 0, correct: 0 };
  });

  questionMap.forEach(({ question, isLatestCorrect }) => {
    if (isLatestCorrect) {
      totalCorrect++;
    }

    if (chapterCounts[question.chapterId]) {
      chapterCounts[question.chapterId].total++;
      if (isLatestCorrect) chapterCounts[question.chapterId].correct++;
    }

    if (topicCounts[question.topic]) {
      topicCounts[question.topic].total++;
      if (isLatestCorrect) topicCounts[question.topic].correct++;
    }
  });

  const totalIncorrect = totalAttempted - totalCorrect;
  const overallAccuracy =
    totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 100;

  // Build chapter stats
  const chapterStats: ChapterPerformance[] = CHAPTERS_DATA.map((ch) => {
    const data = chapterCounts[ch.id] || { total: 0, correct: 0 };
    const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 100;
    const status = acc < 60 ? 'critical' : acc < 80 ? 'warning' : 'good';
    return {
      chapterId: ch.id,
      title: ch.title,
      total: data.total,
      correct: data.correct,
      accuracy: acc,
      status,
      targetSectionId: ch.sections[0]?.id || `sec-${ch.id}-1`,
    };
  });

  // Build topic stats
  const topicStats: TopicPerformance[] = Object.entries(TOPIC_METADATA).map(
    ([topicKey, meta]) => {
      const data = topicCounts[topicKey] || { total: 0, correct: 0 };
      const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 100;
      const status = acc < 60 ? 'critical' : acc < 80 ? 'warning' : 'good';
      return {
        topic: topicKey as GrammarTopic,
        label: meta.label,
        chapterId: meta.chapterId,
        total: data.total,
        correct: data.correct,
        accuracy: acc,
        status,
        prescription: PRESCRIPTIONS[topicKey as GrammarTopic] || '',
        targetSectionId: meta.targetSectionId,
      };
    }
  );

  // Weakest topics sorted by lowest accuracy and attempt count
  const attemptedTopics = topicStats.filter((t) => t.total > 0);
  const weakestTopics = (attemptedTopics.length > 0 ? attemptedTopics : topicStats)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 4);

  // Recommendations
  const recommendations: OverallAnalysis['recommendations'] = weakestTopics
    .filter((t) => t.accuracy < 85 || t.total === 0)
    .map((t) => {
      return {
        chapterId: t.chapterId,
        title: `Chapter ${t.chapterId}: ${t.label}`,
        sectionId: t.targetSectionId,
        reason: t.prescription,
        actionLabel: `제${t.chapterId}장 해당 문법 집중 학습하기`,
        severity: t.accuracy < 60 ? ('high' as const) : ('medium' as const),
      };
    });

  // If recommendations empty (e.g., student got 100%), suggest Ch 4 or Ch 5 as highest yield
  if (recommendations.length === 0) {
    recommendations.push({
      chapterId: 5,
      title: 'Chapter 5: SER vs ESTAR & 형용사 어미탈락 (시험 최다 빈출)',
      sectionId: 'sec-5-2',
      reason: '시험에서 가장 높은 배점과 함정이 있는 SER vs ESTAR 판별법을 최종 점검하세요.',
      actionLabel: '제5장 SER vs ESTAR 최종 점검하기',
      severity: 'low',
    });
    recommendations.push({
      chapterId: 4,
      title: 'Chapter 4: 불규칙 성별 명사 & 관사 특수 규칙',
      sectionId: 'sec-4-2',
      reason: 'el agua, el mapa, el tema 등 주관식 단답형 빈출 명사들을 확인하세요.',
      actionLabel: '제4장 불규칙 명사 최종 확인하기',
      severity: 'low',
    });
  }

  return {
    totalAttempted,
    totalCorrect,
    totalIncorrect,
    overallAccuracy,
    chapterStats,
    topicStats,
    weakestTopics,
    recommendations,
  };
}
