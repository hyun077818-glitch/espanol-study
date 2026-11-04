import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Part1Learning } from './components/Part1Learning';
import { Part2Quiz } from './components/Part2Quiz';
import { AnalysisDashboard } from './components/AnalysisDashboard';
import { QuizResultModal } from './components/QuizResultModal';
import { QuizSession, MistakeItem, OverallAnalysis } from './types';
import {
  getActiveSession,
  generate50QuestionSession,
  finalizeSession,
  getStoredMistakes,
  resolveMistakeInBank,
  getHistory,
} from './utils/quizEngine';
import { analyzePerformance } from './utils/analysisEngine';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'part1' | 'part2' | 'analysis'>('part1');
  const [session, setSession] = useState<QuizSession | null>(null);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [targetChapterId, setTargetChapterId] = useState<number | null>(null);
  const [targetSectionId, setTargetSectionId] = useState<string | null>(null);

  // Result Modal State
  const [resultModalData, setResultModalData] = useState<{
    isOpen: boolean;
    score: number;
    total: number;
    correctCount: number;
    incorrectCount: number;
  }>({
    isOpen: false,
    score: 0,
    total: 50,
    correctCount: 0,
    incorrectCount: 0,
  });

  // Mistakes bank and Analysis State
  const [mistakes, setMistakes] = useState<MistakeItem[]>([]);
  const [analysis, setAnalysis] = useState<OverallAnalysis>(() => analyzePerformance());

  // Initialize on mount
  useEffect(() => {
    const existing = getActiveSession();
    const storedMistakes = getStoredMistakes();
    setMistakes(storedMistakes);

    const history = getHistory();
    const nextRound = history.length > 0 ? history[0].roundNumber + 1 : 1;
    setRoundNumber(nextRound);

    if (existing && !existing.isCompleted) {
      setSession(existing);
    } else {
      // Auto create Round 1 session ready to be played
      const newSession = generate50QuestionSession(nextRound);
      setSession(newSession);
    }

    setAnalysis(analyzePerformance());
  }, []);

  // Refresh analysis and mistakes whenever tab changes
  const handleSelectTab = (tab: 'part1' | 'part2' | 'analysis') => {
    if (tab === 'analysis') {
      setAnalysis(analyzePerformance());
      setMistakes(getStoredMistakes());
    }
    setCurrentTab(tab);
  };

  // Start fresh 50-round (or next round with interleaved mistakes)
  const handleStartNextRound = () => {
    const history = getHistory();
    const nextRound = history.length > 0 ? history[0].roundNumber + 1 : roundNumber + 1;
    setRoundNumber(nextRound);

    const newSess = generate50QuestionSession(nextRound);
    setSession(newSess);
    setMistakes(getStoredMistakes());
    setCurrentTab('part2');
  };

  // Finish current quiz session
  const handleFinishQuiz = () => {
    if (!session) return;
    const result = finalizeSession(session);

    // Update state
    setResultModalData({
      isOpen: true,
      score: result.score,
      total: result.total,
      correctCount: result.correctCount,
      incorrectCount: result.incorrectCount,
    });

    setMistakes(getStoredMistakes());
    setAnalysis(analyzePerformance());
  };

  // Navigate to Part 1 with anchor highlight
  const handleNavigateToChapter = (chapterId: number, sectionId?: string) => {
    setTargetChapterId(chapterId);
    setTargetSectionId(sectionId || null);
    setCurrentTab('part1');
  };

  // Resolve a mistake
  const handleResolveMistake = (questionId: string) => {
    resolveMistakeInBank(questionId);
    setMistakes(getStoredMistakes());
    setAnalysis(analyzePerformance());
  };

  const unresolvedMistakes = mistakes.filter((m) => !m.resolved);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      {/* Top Bar Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        hasActiveSession={!!session && !session.isCompleted}
        roundNumber={roundNumber}
        onStartNewRound={handleStartNextRound}
        onResumeSession={() => setCurrentTab('part2')}
        unresolvedMistakeCount={unresolvedMistakes.length}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {currentTab === 'part1' && (
          <Part1Learning
            targetChapterId={targetChapterId}
            targetSectionId={targetSectionId}
            onGoToQuiz={() => setCurrentTab('part2')}
          />
        )}

        {currentTab === 'part2' && session && (
          <Part2Quiz
            session={session}
            onUpdateSession={setSession}
            onFinishQuiz={handleFinishQuiz}
            onStartNew50Round={handleStartNextRound}
            onGoToChapter={handleNavigateToChapter}
          />
        )}

        {currentTab === 'analysis' && (
          <AnalysisDashboard
            analysis={analysis}
            mistakes={mistakes}
            roundNumber={roundNumber}
            onNavigateToChapter={handleNavigateToChapter}
            onStartNextRound={handleStartNextRound}
            onResolveMistake={handleResolveMistake}
          />
        )}
      </div>

      {/* Quiz Result Celebration Modal */}
      {resultModalData.isOpen && (
        <QuizResultModal
          score={resultModalData.score}
          total={resultModalData.total}
          correctCount={resultModalData.correctCount}
          incorrectCount={resultModalData.incorrectCount}
          roundNumber={roundNumber}
          onViewAnalysis={() => {
            setResultModalData((prev) => ({ ...prev, isOpen: false }));
            handleSelectTab('analysis');
          }}
          onStartNextRound={() => {
            setResultModalData((prev) => ({ ...prev, isOpen: false }));
            handleStartNextRound();
          }}
          onGoToLearning={() => {
            setResultModalData((prev) => ({ ...prev, isOpen: false }));
            setCurrentTab('part1');
          }}
          onClose={() => setResultModalData((prev) => ({ ...prev, isOpen: false }))}
        />
      )}

      {/* Subtle Educational Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span>한림대학교 2026-2학기 스페인어 (002890-01)</span>
            <span className="mx-2">·</span>
            <span>담당교수: 김태영 (florebonita@naver.com)</span>
          </div>
          <div>
            <span>중간고사 & 기말고사 대비 (객관식 20문항 + 주관식 20문항 총 40문항 100점 만점 구조)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
