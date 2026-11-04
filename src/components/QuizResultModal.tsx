import React from 'react';
import {
  Trophy,
  BarChart3,
  RotateCw,
  BookOpen,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';

interface QuizResultModalProps {
  score: number;
  total: number;
  correctCount: number;
  incorrectCount: number;
  roundNumber: number;
  onViewAnalysis: () => void;
  onStartNextRound: () => void;
  onGoToLearning: () => void;
  onClose: () => void;
}

export const QuizResultModal: React.FC<QuizResultModalProps> = ({
  score,
  total,
  correctCount,
  incorrectCount,
  roundNumber,
  onViewAnalysis,
  onStartNextRound,
  onGoToLearning,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in-50 duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-center relative">
        {/* Badge Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 text-white flex items-center justify-center mx-auto shadow-md">
          {score >= 80 ? (
            <Trophy className="w-8 h-8" />
          ) : (
            <Sparkles className="w-8 h-8" />
          )}
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            제 {roundNumber}회차 50문항 채점 완료
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {score >= 90
              ? '완벽합니다! 최고 득점!'
              : score >= 70
              ? '훌륭합니다! 조금만 더 보완해요'
              : '수고하셨습니다! 취약점을 복습해볼까요?'}
          </h2>
        </div>

        {/* Score Display */}
        <div className="py-4 px-6 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-3 divide-x divide-slate-200">
          <div>
            <div className="text-xs text-slate-500 font-medium">환산 점수</div>
            <div className="text-2xl font-bold text-red-600 tabular-nums">
              {score}
              <span className="text-xs text-slate-400 font-normal">점</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">정답</div>
            <div className="text-2xl font-bold text-emerald-600 tabular-nums">
              {correctCount}
              <span className="text-xs text-slate-400 font-normal">/{total}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">오답</div>
            <div className="text-2xl font-bold text-red-600 tabular-nums">
              {incorrectCount}
              <span className="text-xs text-slate-400 font-normal">문제</span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {incorrectCount > 0 ? (
            <>
              틀린 <strong>{incorrectCount}문제</strong>가 오답 뱅크에 안전하게 보관되었습니다. 다음 50제 생성 시 <strong>새 문제와 오답 문제가 균등하게 인터리빙</strong>되어 재출제됩니다.
            </>
          ) : (
            <>50문항 전원 정답입니다! 한림대 스페인어 시험 준비가 완벽합니다.</>
          )}
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            onClick={() => {
              onClose();
              onViewAnalysis();
            }}
            className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <BarChart3 className="w-4 h-4 text-red-400" />
            <span>취약점 분석 & 공부해야 할 챕터 확인하기</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onStartNextRound();
            }}
            className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <RotateCw className="w-4 h-4" />
            <span>오답 섞어서 다음 50제 바로 시작하기</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onGoToLearning();
            }}
            className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Part 1 챕터별 이론 공부하러 가기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
