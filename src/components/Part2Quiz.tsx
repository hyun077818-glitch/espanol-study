import React, { useState, useEffect } from 'react';
import {
  Volume2,
  Bookmark,
  Pause,
  Play,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { QuizQuestion, QuizSession } from '../types';
import {
  checkAnswer,
  saveActiveSession,
  clearActiveSession,
} from '../utils/quizEngine';
import { playSpanishTTS } from '../utils/speech';

interface Part2QuizProps {
  session: QuizSession;
  onUpdateSession: (updated: QuizSession) => void;
  onFinishQuiz: () => void;
  onStartNew50Round: () => void;
  onGoToChapter: (chapterId: number, sectionId?: string) => void;
}

export const Part2Quiz: React.FC<Part2QuizProps> = ({
  session,
  onUpdateSession,
  onFinishQuiz,
  onStartNew50Round,
  onGoToChapter,
}) => {
  const [practiceMode, setPracticeMode] = useState<boolean>(true); // Immediate feedback vs Exam mode
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isPauseModalOpen, setIsPauseModalOpen] = useState<boolean>(false);
  const [isFinishConfirmOpen, setIsFinishConfirmOpen] = useState<boolean>(false);

  const currentIndex = session.currentIndex;
  const currentQuestion: QuizQuestion | undefined = session.questions[currentIndex];
  const currentAnswer = currentQuestion ? session.answers[currentQuestion.id] || '' : '';
  const isFlagged = currentQuestion ? session.flaggedQuestionIds.includes(currentQuestion.id) : false;

  // Auto show explanation in practice mode if question was already answered
  useEffect(() => {
    if (practiceMode && currentAnswer) {
      setShowExplanation(true);
    } else {
      setShowExplanation(false);
    }
  }, [currentIndex, practiceMode, currentAnswer]);

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          세션을 불러오는 중이거나 문제가 없습니다.
        </h2>
        <button
          onClick={onStartNew50Round}
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
        >
          새로운 50제 퀴즈 생성하기
        </button>
      </div>
    );
  }

  const answeredCount = Object.keys(session.answers).length;
  const isAnswered = currentAnswer.trim().length > 0;
  const isCorrect = isAnswered ? checkAnswer(currentAnswer, currentQuestion) : false;

  // Record an answer
  const handleSelectAnswer = (ans: string) => {
    const updatedAnswers = {
      ...session.answers,
      [currentQuestion.id]: ans,
    };
    const updatedSession: QuizSession = {
      ...session,
      answers: updatedAnswers,
    };
    onUpdateSession(updatedSession);
    saveActiveSession(updatedSession);

    if (practiceMode) {
      setShowExplanation(true);
    }
  };

  // Spanish special character inserter for text answers
  const handleInsertChar = (char: string) => {
    const newAnswer = currentAnswer + char;
    handleSelectAnswer(newAnswer);
  };

  // Toggle flag/bookmark
  const handleToggleFlag = () => {
    let updatedFlags = [...session.flaggedQuestionIds];
    if (isFlagged) {
      updatedFlags = updatedFlags.filter((id) => id !== currentQuestion.id);
    } else {
      updatedFlags.push(currentQuestion.id);
    }
    const updated: QuizSession = {
      ...session,
      flaggedQuestionIds: updatedFlags,
    };
    onUpdateSession(updated);
    saveActiveSession(updated);
  };

  // Navigation
  const handleGoToQuestion = (index: number) => {
    if (index >= 0 && index < session.totalQuestions) {
      const updated: QuizSession = {
        ...session,
        currentIndex: index,
      };
      onUpdateSession(updated);
      saveActiveSession(updated);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Session Header & Status Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <span className="font-bold text-red-600">
              제 {session.roundNumber}회차 실전 50제
            </span>
            <span>·</span>
            <span>총 {session.totalQuestions}문항</span>
            {session.interleavedMistakeCount > 0 && (
              <>
                <span>·</span>
                <span className="text-amber-700 font-semibold">
                  오답 복습 {session.interleavedMistakeCount}문항 포함
                </span>
              </>
            )}
          </div>
          <h2 className="text-lg font-bold text-slate-900">
            문제 {currentIndex + 1} / {session.totalQuestions}
          </h2>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Mode toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            <button
              onClick={() => setPracticeMode(true)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                practiceMode
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              학습 모드 (즉시 확인)
            </button>
            <button
              onClick={() => setPracticeMode(false)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                !practiceMode
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              실전 시험 모드
            </button>
          </div>

          {/* Pause / Stop buttons */}
          <button
            onClick={() => setIsPauseModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            title="현재 진행상황을 저장하고 일시중지"
          >
            <Pause className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">일시중지</span>
          </button>

          <button
            onClick={() => setIsFinishConfirmOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>시험 종료 & 채점</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-red-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${(answeredCount / session.totalQuestions) * 100}%` }}
        />
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Question Topic & Review Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-red-700 px-2.5 py-1 bg-red-50 rounded-md">
              {currentQuestion.chapterTitle.split(':')[0]}
            </span>
            <span>·</span>
            <span className="text-slate-600 font-medium">
              {currentQuestion.topicLabel}
            </span>
            {currentQuestion.isReview && (
              <span className="ml-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                이전 회차 오답 복습 문제
              </span>
            )}
          </div>

          {/* Bookmark & Chapter Jump button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleFlag}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                isFlagged
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  isFlagged ? 'fill-amber-500 text-amber-600' : ''
                }`}
              />
              <span>{isFlagged ? '북마크됨' : '북마크'}</span>
            </button>

            <button
              onClick={() =>
                onGoToChapter(
                  currentQuestion.chapterId,
                  currentQuestion.targetSectionId
                )
              }
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
              title="이 문제와 관련된 Part 1 교재 내용으로 바로가기"
            >
              <BookOpen className="w-3.5 h-3.5 text-red-600" />
              <span>관련 이론 바로보기</span>
            </button>
          </div>
        </div>

        {/* Question Statement */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentQuestion.prompt}
          </h3>

          {/* Spanish Sentence Display with Audio TTS */}
          {currentQuestion.sentence && (
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-base sm:text-lg font-semibold text-slate-800 tracking-wide font-mono">
                {currentQuestion.sentence}
              </span>
              <button
                type="button"
                onClick={() => playSpanishTTS(currentQuestion.sentence || '')}
                className="p-2 text-slate-500 hover:text-red-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"
                title="스페인어 문장 듣기"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Answer Input Area: Multiple Choice or Fill Blank */}
        <div className="pt-2">
          {currentQuestion.type === 'multiple-choice' && currentQuestion.options ? (
            <div className="grid grid-cols-1 gap-2.5">
              {currentQuestion.options.map((opt, oIdx) => {
                const isSelected = currentAnswer === opt;
                let optionStyle =
                  'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50/70';

                if (practiceMode && showExplanation) {
                  if (opt === currentQuestion.correctAnswer) {
                    optionStyle =
                      'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                  } else if (isSelected) {
                    optionStyle =
                      'bg-red-50 border-red-500 text-red-950 line-through';
                  }
                } else if (isSelected) {
                  optionStyle =
                    'bg-slate-900 border-slate-900 text-white font-semibold shadow-xs';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectAnswer(opt)}
                    className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    <span
                      className={`w-6 h-6 rounded-full border text-xs flex items-center justify-center font-bold shrink-0 ${
                        isSelected
                          ? practiceMode && showExplanation
                            ? isCorrect
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-slate-900 border-white'
                          : 'border-slate-300 text-slate-500'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Fill in the blank (주관식/단답형) */
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="정답 철자(단어/문장)를 입력하세요..."
                  value={currentAnswer}
                  onChange={(e) => handleSelectAnswer(e.target.value)}
                  className={`w-full p-4 text-base font-semibold border rounded-xl focus:outline-none focus:ring-2 ${
                    practiceMode && showExplanation
                      ? isCorrect
                        ? 'border-emerald-500 bg-emerald-50/50 text-emerald-950 focus:ring-emerald-400'
                        : 'border-red-500 bg-red-50/50 text-red-950 focus:ring-red-400'
                      : 'border-slate-300 focus:border-slate-900 focus:ring-slate-400'
                  }`}
                />
              </div>

              {/* Spanish Special Characters Keyboard Toolbar */}
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-100 rounded-lg">
                <span className="text-xs text-slate-500 font-semibold px-2">
                  스페인어 특수문자 입력:
                </span>
                {['á', 'é', 'í', 'ó', 'ú', 'ñ', '¿', '¡', 'ü'].map((char) => (
                  <button
                    key={char}
                    type="button"
                    onClick={() => handleInsertChar(char)}
                    className="w-8 h-8 rounded bg-white hover:bg-slate-200 text-slate-900 font-mono font-bold text-sm shadow-xs transition-colors flex items-center justify-center"
                  >
                    {char}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Immediate Explanation Card in Practice Mode */}
        {practiceMode && showExplanation && isAnswered && (
          <div
            className={`p-5 rounded-xl border space-y-3 animate-in fade-in-50 duration-200 ${
              isCorrect
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-red-50/80 border-red-200 text-red-950'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>정답입니다!</span>
                  </>
                ) : (
                  <>
                    <HelpCircle className="w-5 h-5 text-red-600" />
                    <span>
                      아쉽게 틀렸습니다. 정답: {currentQuestion.correctAnswer}
                    </span>
                  </>
                )}
              </div>

              <button
                onClick={() =>
                  onGoToChapter(
                    currentQuestion.chapterId,
                    currentQuestion.targetSectionId
                  )
                }
                className="text-xs font-semibold underline text-slate-800 hover:text-red-700"
              >
                교재 해설 확인하기 →
              </button>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
              {currentQuestion.explanation}
            </p>

            {currentQuestion.examTip && (
              <div className="pt-2 border-t border-slate-200/60 text-xs text-slate-700 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>시험 팁: {currentQuestion.examTip}</span>
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation Toolbar */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => handleGoToQuestion(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전 문제</span>
          </button>

          <div className="text-xs text-slate-500 font-medium">
            진행률: {answeredCount} / {session.totalQuestions} 문제 완료
          </div>

          {currentIndex < session.totalQuestions - 1 ? (
            <button
              onClick={() => handleGoToQuestion(currentIndex + 1)}
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
            >
              <span>다음 문제</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setIsFinishConfirmOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors shadow-xs"
            >
              <span>전체 채점 및 결과보기</span>
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 50-Question Quick Navigator Grid */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
            50문항 전체 네비게이터
          </h4>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900" /> 완료
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" /> 미완료
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> 북마크
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> 오답복습
            </span>
          </div>
        </div>

        <div className="grid grid-cols-10 sm:grid-cols-25 gap-1.5 sm:gap-2">
          {session.questions.map((q, idx) => {
            const hasAns = !!session.answers[q.id];
            const isFlag = session.flaggedQuestionIds.includes(q.id);
            const isCur = idx === currentIndex;
            const isRev = q.isReview;

            return (
              <button
                key={idx}
                onClick={() => handleGoToQuestion(idx)}
                className={`h-8 sm:h-9 text-xs font-bold rounded-md relative flex items-center justify-center transition-all ${
                  isCur
                    ? 'ring-2 ring-red-500 ring-offset-1 z-10'
                    : ''
                } ${
                  hasAns
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{idx + 1}</span>
                {isFlag && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
                )}
                {isRev && (
                  <span className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-purple-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pause Modal */}
      {isPauseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Pause className="w-5 h-5 text-amber-500" />
              <span>퀴즈 일시 중지</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              현재까지 작성한 답안({answeredCount} / 50문제)이 브라우저에 안전하게 저장되었습니다. 언제든 다시 돌아와 이어서 풀 수 있습니다.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsPauseModalOpen(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg"
              >
                이어서 풀기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Finish Confirmation Modal */}
      {isFinishConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>시험을 종료하고 채점하시겠습니까?</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              현재 총 50문제 중 {answeredCount}문제를 풀었습니다. 시험을 종료하면 즉시 채점되고, 틀린 문제는 자동으로 오답 뱅크에 수집되어 다음 50제 출제 시 인터리빙 재출제됩니다.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsFinishConfirmOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                계속 풀기
              </button>
              <button
                onClick={() => {
                  setIsFinishConfirmOpen(false);
                  onFinishQuiz();
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-xs"
              >
                채점 및 분석 보기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
