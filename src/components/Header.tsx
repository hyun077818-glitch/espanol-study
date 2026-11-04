import React from 'react';
import { BookOpen, HelpCircle, BarChart3, RotateCw, Play } from 'lucide-react';

interface HeaderProps {
  currentTab: 'part1' | 'part2' | 'analysis';
  onSelectTab: (tab: 'part1' | 'part2' | 'analysis') => void;
  hasActiveSession: boolean;
  roundNumber: number;
  onStartNewRound: () => void;
  onResumeSession: () => void;
  unresolvedMistakeCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  hasActiveSession,
  roundNumber,
  onStartNewRound,
  onResumeSession,
  unresolvedMistakeCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            ES
          </div>
          <button
            onClick={() => onSelectTab('part1')}
            className="text-left font-bold text-slate-900 text-lg tracking-tight hover:text-red-700 transition-colors"
          >
            한림대 스페인어 마스터
          </button>
        </div>

        {/* Zone 2: 3-4 clean single-line nav links */}
        <nav className="flex items-center gap-2 sm:gap-6 text-sm font-medium text-slate-600 overflow-x-auto py-1">
          <button
            onClick={() => onSelectTab('part1')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              currentTab === 'part1'
                ? 'bg-red-50 text-red-700 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-red-600" />
            <span>Part 1. 챕터별 이론 학습</span>
          </button>

          <button
            onClick={() => onSelectTab('part2')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              currentTab === 'part2'
                ? 'bg-red-50 text-red-700 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span>Part 2. 50제 실전 퀴즈</span>
            {hasActiveSession && (
              <span className="text-xs text-amber-700 font-bold ml-1">
                진행중
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('analysis')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors ${
              currentTab === 'analysis'
                ? 'bg-red-50 text-red-700 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-red-600" />
            <span>취약점 분석 & 오답노트</span>
            {unresolvedMistakeCount > 0 && (
              <span className="text-xs text-red-600 font-semibold">
                ({unresolvedMistakeCount})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {hasActiveSession ? (
            <button
              onClick={() => {
                onResumeSession();
                onSelectTab('part2');
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <Play className="w-3.5 h-3.5" />
              <span>50제 이어풀기</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onStartNewRound();
                onSelectTab('part2');
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>
                {roundNumber === 1 ? '50제 퀴즈 시작' : `제 ${roundNumber}회 50제 생성`}
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
