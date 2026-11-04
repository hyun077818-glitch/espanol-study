import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  RotateCw,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Filter,
  Volume2,
} from 'lucide-react';
import { OverallAnalysis, MistakeItem } from '../types';
import { CHAPTERS_DATA } from '../data/chapters';
import { playSpanishTTS } from '../utils/speech';

interface AnalysisDashboardProps {
  analysis: OverallAnalysis;
  mistakes: MistakeItem[];
  roundNumber: number;
  onNavigateToChapter: (chapterId: number, sectionId?: string) => void;
  onStartNextRound: () => void;
  onResolveMistake: (questionId: string) => void;
}

export const AnalysisDashboard: React.FC<AnalysisDashboardProps> = ({
  analysis,
  mistakes,
  roundNumber,
  onNavigateToChapter,
  onStartNextRound,
  onResolveMistake,
}) => {
  const [mistakeFilter, setMistakeFilter] = useState<number | 'all'>('all');

  const unresolvedMistakes = mistakes.filter((m) => !m.resolved);
  const filteredMistakes =
    mistakeFilter === 'all'
      ? unresolvedMistakes
      : unresolvedMistakes.filter((m) => m.question.chapterId === mistakeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Performance Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
              <span>학습 분석 & 처방 리포트</span>
              <span>·</span>
              <span>2026-2학기 스페인어 평가 대비</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              실전 문제 풀이 종합 진단
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onStartNextRound}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors"
            >
              <RotateCw className="w-4 h-4" />
              <span>
                {unresolvedMistakes.length > 0
                  ? `오답 ${Math.min(unresolvedMistakes.length, 30)}개 포함 다음 50제 생성`
                  : `제 ${roundNumber + 1}회 50제 실전 모의고사 생성`}
              </span>
            </button>
          </div>
        </div>

        {/* 4 Metric Strips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-500 font-medium mb-1">
              전체 정답률
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              {analysis.overallAccuracy}%
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {analysis.overallAccuracy >= 80
                ? '안정권 (A+ 예상)'
                : analysis.overallAccuracy >= 60
                ? '보완 필요 (B권)'
                : '집중 복습 시급'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-500 font-medium mb-1">
              풀이한 총 문항
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              {analysis.totalAttempted}
              <span className="text-sm font-normal text-slate-500 ml-1">문제</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              정답 {analysis.totalCorrect} · 오답 {analysis.totalIncorrect}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-500 font-medium mb-1">
              현재 누적 오답 뱅크
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-red-600 tabular-nums">
              {unresolvedMistakes.length}
              <span className="text-sm font-normal text-slate-500 ml-1">문제</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              다음 50제 생성 시 자동 인터리빙
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-500 font-medium mb-1">
              진행한 회차
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
              제 {roundNumber}
              <span className="text-sm font-normal text-slate-500 ml-1">회차</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              50문제 단위 반복 훈련
            </div>
          </div>
        </div>
      </div>

      {/* Part 1 Chapter-Linking Learning Recommendations */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <div className="text-xs font-semibold text-red-600 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>맞춤 학습 처방 및 연계 복습</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            무엇을 집중 학습해야 할까요? (Part 1 챕터 바로가기)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            현재까지 틀린 문제의 문법 패턴을 분석하여 가장 취약한 이론 영역을 진단했습니다. 카드를 누르면 Part 1 교재의 해당 위치로 즉시 이동합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                rec.severity === 'high'
                  ? 'bg-red-50/40 border-red-200 hover:border-red-300'
                  : 'bg-amber-50/40 border-amber-200 hover:border-amber-300'
              }`}
            >
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-red-700 px-2 py-0.5 bg-red-100 rounded">
                    Chapter {rec.chapterId}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {rec.severity === 'high' ? '⚠️ 집중 보완 추천' : '💡 확인 추천'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {rec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {rec.reason}
                </p>
              </div>

              <button
                onClick={() => onNavigateToChapter(rec.chapterId, rec.sectionId)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>{rec.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter & Topic Accuracy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chapter Performance */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-red-600" />
            <span>챕터별 정답률 현황</span>
          </h3>

          <div className="space-y-3.5">
            {analysis.chapterStats.map((ch) => (
              <div key={ch.chapterId} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <button
                    onClick={() => onNavigateToChapter(ch.chapterId, ch.targetSectionId)}
                    className="font-semibold text-slate-800 hover:text-red-700 text-left transition-colors truncate max-w-[70%]"
                  >
                    Ch {ch.chapterId}. {ch.title.split(': ')[1] || ch.title}
                  </button>
                  <span className="tabular-nums font-semibold text-slate-700">
                    {ch.correct} / {ch.total} ({ch.accuracy}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      ch.accuracy >= 80
                        ? 'bg-emerald-500'
                        : ch.accuracy >= 60
                        ? 'bg-amber-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${ch.total > 0 ? ch.accuracy : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Round Interleaving Info Banner */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600">
              <RotateCw className="w-4 h-4" />
              <span>50제 회차 반복 & 오답 인터리빙 알고리즘</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              틀린 문제는 자동으로 다음 50제 사이에 배치됩니다
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              사용자 요청 사양에 따라, 퀴즈를 풀고 틀린 오답 문제들은 오답 뱅크에 수집됩니다. 다음 50제 생성 버튼을 누르면, 새로운 문제들과 이전 회차 오답 문제가 사이사이에 균등하게 섞여 <strong>정확히 총 50문제</strong>로 구성된 맞춤 모의고사가 생성됩니다.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>현재 오답 뱅크 수록 문제:</span>
                <span className="font-bold text-red-600">
                  {unresolvedMistakes.length}문제
                </span>
              </div>
              <div className="flex justify-between">
                <span>다음 생성 퀴즈 구성:</span>
                <span className="font-semibold text-slate-900">
                  신규 {Math.max(20, 50 - unresolvedMistakes.length)}문제 + 오답 복습{' '}
                  {Math.min(30, unresolvedMistakes.length)}문제 = 총 50문제
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onStartNextRound}
            className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <RotateCw className="w-4 h-4" />
            <span>제 {roundNumber + 1}회 50제 퀴즈 생성 및 시작</span>
          </button>
        </section>
      </div>

      {/* Mistake Vault (오답 노트 모음) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>오답 노트 보관함 (Mistake Vault)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              틀린 문제의 정답과 상세 해설을 확인하고, Part 1 교재로 즉시 이동할 수 있습니다.
            </p>
          </div>

          {/* Chapter Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            <button
              onClick={() => setMistakeFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                mistakeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체 ({unresolvedMistakes.length})
            </button>
            {CHAPTERS_DATA.map((ch) => {
              const count = unresolvedMistakes.filter(
                (m) => m.question.chapterId === ch.id
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={ch.id}
                  onClick={() => setMistakeFilter(ch.id)}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    mistakeFilter === ch.id
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ch {ch.id} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Mistake Items List */}
        {filteredMistakes.length === 0 ? (
          <div className="py-12 text-center text-slate-500 space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <div className="font-semibold text-slate-800">
              현재 필터에 등록된 미해결 오답이 없습니다!
            </div>
            <div className="text-xs text-slate-400">
              50제 퀴즈를 풀고 틀린 문제가 생기면 자동으로 여기에 등록됩니다.
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMistakes.map((m) => {
              const q = m.question;
              return (
                <article
                  key={m.questionId}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-red-700 px-2 py-0.5 bg-red-100 rounded">
                        {q.chapterTitle.split(':')[0]}
                      </span>
                      <span>·</span>
                      <span className="text-slate-600 font-medium">{q.topicLabel}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          onNavigateToChapter(q.chapterId, q.targetSectionId)
                        }
                        className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors shadow-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-red-600" />
                        <span>Part 1 이론 보기</span>
                      </button>

                      <button
                        onClick={() => onResolveMistake(m.questionId)}
                        className="text-xs text-slate-500 hover:text-emerald-700 px-2 py-1 transition-colors"
                        title="이 문제를 마스터 완료 처리"
                      >
                        마스터 완료
                      </button>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {q.prompt}
                  </h3>

                  {q.sentence && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 text-sm font-semibold font-mono text-slate-800">
                      <span>{q.sentence}</span>
                      <button
                        type="button"
                        onClick={() => playSpanishTTS(q.sentence || '')}
                        className="text-slate-400 hover:text-red-600 transition-colors"
                        title="스페인어 듣기"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Wrong answer vs Correct answer comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-950">
                      <div className="font-bold text-red-800 mb-0.5">내가 입력한 오답:</div>
                      <div className="font-mono">{m.wrongAnswer || '(미응시 또는 오답)'}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                      <div className="font-bold text-emerald-800 mb-0.5">정답:</div>
                      <div className="font-mono font-semibold">{q.correctAnswer}</div>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900">해설: </span>
                    {q.explanation}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
