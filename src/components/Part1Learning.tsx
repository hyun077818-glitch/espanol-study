import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Search,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chapters';
import { playSpanishTTS } from '../utils/speech';

interface Part1LearningProps {
  targetChapterId?: number | null;
  targetSectionId?: string | null;
  onGoToQuiz: () => void;
}

export const Part1Learning: React.FC<Part1LearningProps> = ({
  targetChapterId,
  targetSectionId,
  onGoToQuiz,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(
    targetChapterId || 1
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightedSectionId, setHighlightedSectionId] = useState<string | null>(
    targetSectionId || null
  );

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Sync when props change (e.g. from Analysis Dashboard 1-click jump)
  useEffect(() => {
    if (targetChapterId) {
      setSelectedChapterId(targetChapterId);
    }
    if (targetSectionId) {
      setHighlightedSectionId(targetSectionId);
      // Wait for DOM update, then smooth scroll
      setTimeout(() => {
        const el = sectionRefs.current[targetSectionId];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [targetChapterId, targetSectionId]);

  const currentChapter =
    CHAPTERS_DATA.find((c) => c.id === selectedChapterId) || CHAPTERS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Hero / Context Header */}
      <div className="mb-8 bg-gradient-to-r from-red-700 via-red-600 to-amber-600 rounded-2xl p-6 sm:p-8 text-white shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="text-xs uppercase tracking-wider text-red-100 font-semibold mb-2">
            한림대학교 스페인어 (002890-01) 2026-2학기 강의 통합
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Part 1. 시험 대비 챕터별 이론 & 문법 마스터
          </h1>
          <p className="text-red-50 text-sm sm:text-base leading-relaxed mb-4">
            김태영 교수님 강의 계획서, 슬라이드 및 과제물 연습문제의 모든 범위(발음, 강세, 인칭, 명사의 성수, 관사, SER vs ESTAR, 어미탈락, 국적형용사, 지시사, 무인칭 Hay, 숫자)를 체계적으로 학습합니다.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-red-100">
            <span>총 8개 집중 챕터</span>
            <span>·</span>
            <span>원어민 스페인어 발음 듣기 지원</span>
            <span>·</span>
            <span>시험 기출 100% 반영</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Sidebar Chapters + Chapter Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Chapter List (4 Cols) */}
        <aside className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-4 shadow-sm sticky top-20">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <span>학습 챕터 목차</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">8 Chapters</span>
          </div>

          {/* Search within chapter */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="문법 규칙, 단어 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
            />
          </div>

          <div className="space-y-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            {CHAPTERS_DATA.map((ch) => {
              const isSelected = ch.id === selectedChapterId;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    setHighlightedSectionId(null);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'bg-red-50/80 border border-red-200 text-red-950 shadow-xs'
                      : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-red-600">
                        Ch. 0{ch.id}
                      </span>
                      <span>·</span>
                      <span>{ch.lectureWeek}</span>
                    </div>
                    <div
                      className={`text-sm font-semibold truncate ${
                        isSelected ? 'text-red-900' : 'text-slate-800'
                      }`}
                    >
                      {ch.title.split(': ')[1] || ch.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {ch.subtitle}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform mt-1 ${
                      isSelected
                        ? 'text-red-600 translate-x-0.5'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Quick CTA to Part 2 Quiz */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <button
              onClick={onGoToQuiz}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>이 범위 실전 50제 퀴즈 풀기</span>
            </button>
          </div>
        </aside>

        {/* Right Main Content Area (8 Cols) */}
        <main className="lg:col-span-8 space-y-6">
          {/* Chapter Banner Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded font-semibold text-xs">
                {currentChapter.badge}
              </span>
              <span>·</span>
              <span>{currentChapter.lectureWeek}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {currentChapter.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {currentChapter.summary}
            </p>

            {/* Key Takeaways Strip */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>시험 핵심 요약 포인트 (Key Takeaways)</span>
              </h3>
              <ul className="space-y-1.5">
                {currentChapter.keyTakeaways.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chapter Detailed Sections */}
          <div className="space-y-6">
            {currentChapter.sections.map((sec) => {
              const isTargeted = highlightedSectionId === sec.id;
              return (
                <article
                  key={sec.id}
                  ref={(el) => {
                    sectionRefs.current[sec.id] = el;
                  }}
                  id={sec.id}
                  className={`bg-white rounded-xl border p-6 shadow-sm transition-all duration-300 ${
                    isTargeted
                      ? 'border-red-500 ring-2 ring-red-200 shadow-md'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <span>{sec.title}</span>
                      </h3>
                      {sec.subtitle && (
                        <p className="text-xs text-slate-500 mt-0.5">
                          {sec.subtitle}
                        </p>
                      )}
                    </div>
                    {isTargeted && (
                      <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-semibold rounded-md shadow-xs shrink-0 animate-pulse">
                        집중 복습 추천 위치
                      </span>
                    )}
                  </div>

                  {/* Rules & Tables */}
                  <div className="space-y-6">
                    {sec.rules?.map((rule, rIdx) => (
                      <div key={rIdx} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-800">
                            {rule.title}
                          </h4>
                        </div>
                        {rule.description && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {rule.description}
                          </p>
                        )}

                        {/* Interactive Spanish Examples with Audio */}
                        {rule.examples && rule.examples.length > 0 && (
                          <div className="grid grid-cols-1 gap-2 pt-1">
                            {rule.examples.map((ex, eIdx) => (
                              <div
                                key={eIdx}
                                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors"
                              >
                                <div>
                                  <div className="font-semibold text-sm text-slate-900 flex items-center gap-2">
                                    <span>{ex.es}</span>
                                  </div>
                                  <div className="text-xs text-slate-600 mt-0.5">
                                    {ex.ko}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => playSpanishTTS(ex.es)}
                                  title="스페인어 원어민 발음 듣기"
                                  className="p-2 text-slate-500 hover:text-red-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"
                                >
                                  <Volume2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tables */}
                        {rule.table && (
                          <div className="overflow-x-auto rounded-lg border border-slate-200">
                            <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
                              <thead className="bg-slate-100 text-slate-700 font-semibold">
                                <tr>
                                  {rule.table.headers.map((h, hIdx) => (
                                    <th
                                      key={hIdx}
                                      className="px-4 py-2.5 whitespace-nowrap"
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 bg-white">
                                {rule.table.rows.map((row, rowIdx) => (
                                  <tr
                                    key={rowIdx}
                                    className="hover:bg-slate-50/80 transition-colors"
                                  >
                                    {row.map((cell, cellIdx) => (
                                      <td
                                        key={cellIdx}
                                        className="px-4 py-3 text-slate-800 whitespace-pre-line leading-relaxed"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Exam Tip Callout */}
                        {rule.tip && (
                          <div className="flex items-start gap-3 p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-amber-900 text-xs sm:text-sm leading-relaxed">
                            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold">시험 대비 꿀팁: </span>
                              <span className="whitespace-pre-line">{rule.tip}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};
