import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  Search,
  Globe,
  Sparkles,
  ArrowRight,
  Layers,
  FileCheck,
  Check,
  RotateCcw,
  BookMarked,
  Filter,
} from 'lucide-react';
import {
  GRAMMAR_SUMMARY_TOPICS,
  NATIONALITY_12_COUNTRIES,
  WORKBOOK_SETS,
  GrammarTopicItem,
  WorkbookQuestion,
} from '../data/part3GrammarData';
import { playSpanishTTS } from '../utils/speech';

interface Part3GrammarSummaryProps {
  onGoToPart1?: () => void;
  onGoToPart2?: () => void;
}

type TabType = 'all' | 'nationalities' | 'phonetics' | 'verbs' | 'nouns-adjectives' | 'determiners' | 'locations' | 'workbook';

export const Part3GrammarSummary: React.FC<Part3GrammarSummaryProps> = ({
  onGoToPart1,
  onGoToPart2,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [revealAllWorkbook, setRevealAllWorkbook] = useState<boolean>(false);
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [activeWorkbookSetId, setActiveWorkbookSetId] = useState<string>('all');
  const [hideNationalityFem, setHideNationalityFem] = useState<boolean>(false);

  // Toggle single workbook question answer
  const toggleAnswer = (qId: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  // Toggle reveal all in workbook
  const handleToggleRevealAll = () => {
    const nextState = !revealAllWorkbook;
    setRevealAllWorkbook(nextState);
    if (nextState) {
      const allRevealed: Record<string, boolean> = {};
      WORKBOOK_SETS.forEach((set) => {
        set.questions.forEach((q) => {
          allRevealed[q.id] = true;
        });
      });
      setRevealedAnswers(allRevealed);
    } else {
      setRevealedAnswers({});
    }
  };

  // User typing test check in workbook
  const handleInputChange = (qId: string, val: string) => {
    setUserInputs((prev) => ({
      ...prev,
      [qId]: val,
    }));
  };

  // Filtered grammar topics
  const filteredTopics = useMemo(() => {
    return GRAMMAR_SUMMARY_TOPICS.filter((topic) => {
      // Tab filter
      if (activeTab === 'phonetics' && topic.category !== 'phonetics') return false;
      if (activeTab === 'verbs' && topic.category !== 'verbs') return false;
      if (activeTab === 'nouns-adjectives' && topic.category !== 'nouns-adjectives') return false;
      if (activeTab === 'determiners' && topic.category !== 'determiners') return false;
      if (activeTab === 'locations' && topic.category !== 'locations') return false;
      if (activeTab === 'nationalities' || activeTab === 'workbook') return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = topic.title.toLowerCase().includes(query);
        const inSummary = topic.summary.toLowerCase().includes(query);
        const inPoints = topic.keyPoints.some((p) => p.toLowerCase().includes(query));
        const inExamples = topic.examples.some(
          (ex) => ex.es.toLowerCase().includes(query) || ex.ko.toLowerCase().includes(query)
        );
        return inTitle || inSummary || inPoints || inExamples;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  // Filtered 12 nationalities
  const filteredNationalities = useMemo(() => {
    if (!searchQuery.trim()) return NATIONALITY_12_COUNTRIES;
    const query = searchQuery.toLowerCase().trim();
    return NATIONALITY_12_COUNTRIES.filter(
      (n) =>
        n.countryKo.toLowerCase().includes(query) ||
        n.countryEs.toLowerCase().includes(query) ||
        n.mascSingular.toLowerCase().includes(query) ||
        n.femSingular.toLowerCase().includes(query) ||
        n.serDeExample.toLowerCase().includes(query) ||
        n.adjExample.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filtered workbook sets
  const filteredWorkbookSets = useMemo(() => {
    return WORKBOOK_SETS.map((set) => {
      if (activeWorkbookSetId !== 'all' && set.id !== activeWorkbookSetId) {
        return { ...set, questions: [] };
      }

      if (!searchQuery.trim()) return set;

      const query = searchQuery.toLowerCase().trim();
      const matchedQuestions = set.questions.filter(
        (q) =>
          q.sentence.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.explanation.toLowerCase().includes(query) ||
          (q.vocabulary && q.vocabulary.toLowerCase().includes(query))
      );

      return { ...set, questions: matchedQuestions };
    }).filter((set) => set.questions.length > 0);
  }, [activeWorkbookSetId, searchQuery]);

  const totalWorkbookQuestionsCount = useMemo(() => {
    return WORKBOOK_SETS.reduce((acc, set) => acc + set.questions.length, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 via-rose-700 to-amber-700 p-6 sm:p-8 text-white shadow-md">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Part 3. 번외 핵심 문법 총정리 & PDF 실전 워크북</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            스페인어 핵심 문법 & 12개국 국적형용사 완벽 마스터
          </h1>
          <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
            알파벳 음가·강세 규칙부터 <strong>HAY vs ESTAR</strong>, <strong>SER 동사 6대 용법</strong>, <strong>자연적/문법적 성</strong>, <strong>어미탈락(Apócope)</strong>, <strong>12개국 국적형용사</strong>, 그리고 교재 및 워크북에 수록된 <strong>실전 연습문제 98제</strong>를 한눈에 정리했습니다.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('nationalities')}
              className="px-4 py-2 bg-white text-red-700 hover:bg-rose-50 text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
            >
              <Globe className="w-4 h-4 text-red-600" />
              <span>12개국 국적형용사 바로가기</span>
            </button>
            <button
              onClick={() => setActiveTab('workbook')}
              className="px-4 py-2 bg-red-900/60 hover:bg-red-900/80 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors border border-white/20 flex items-center gap-1.5"
            >
              <FileCheck className="w-4 h-4 text-amber-300" />
              <span>PDF 실전 워크북 98제 풀기</span>
            </button>
            {onGoToPart2 && (
              <button
                onClick={onGoToPart2}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Part 2 퀴즈로 실력 검증</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Navigation & Search Control Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 p-3 sm:p-4 shadow-sm space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="문법 개념, 스페인어 단어, 국적, 예문 검색 (예: agua, alemán, hay, estar, santo, primero...)"
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1"
            >
              지우기
            </button>
          )}
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold text-slate-600 scrollbar-none">
          {[
            { id: 'all', label: '전체 문법 보기', icon: Layers },
            { id: 'nationalities', label: '12개국 국적형용사', icon: Globe },
            { id: 'phonetics', label: '글자 & 강세 규칙', icon: BookOpen },
            { id: 'verbs', label: 'SER & ESTAR 동사', icon: Sparkles },
            { id: 'nouns-adjectives', label: '명사·형용사·어미탈락', icon: BookMarked },
            { id: 'determiners', label: '관사(el agua)·지시사·소유사', icon: Filter },
            { id: 'locations', label: 'HAY vs ESTAR & 위치 표현', icon: CheckCircle2 },
            { id: 'workbook', label: `PDF 실전 워크북 (${totalWorkbookQuestionsCount}제)`, icon: FileCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  isActive
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: 12개국 국적형용사 완전 정리 (독일, 아르헨티나, 칠레, 중국, 한국, 스페인, 미국, 프랑스, 영국, 일본, 멕시코, 러시아) */}
      {(activeTab === 'all' || activeTab === 'nationalities') && (
        <section id="section-nationalities" className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-red-100 text-red-700 rounded-lg">
                  <Globe className="w-5 h-5" />
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  필수 12개국 국적형용사 & ser + de 표현 완전 정복
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                유저 지정 12개국 (독일, 아르헨티나, 칠레, 중국, 한국, 스페인, 미국, 프랑스, 영국, 일본, 멕시코, 러시아)의 남·여 단·복수 4가지 형태와 띨데 규칙을 완벽 정리했습니다.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHideNationalityFem(!hideNationalityFem)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                {hideNationalityFem ? (
                  <>
                    <Eye className="w-3.5 h-3.5 text-red-600" />
                    <span>여성/복수형 보이기</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                    <span>여성/복수형 가리기 (테스트)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Core Nationality Rules Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
              <span className="font-bold text-amber-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 1. 국적 표현 2가지 공식
              </span>
              <p className="leading-relaxed">
                <strong>ser + de + 국가명</strong> (출신 국가: Yo soy de Corea)<br />
                <strong>ser + 국적형용사</strong> (신분/국적: Yo soy coreano/a)
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 space-y-1">
              <span className="font-bold text-blue-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 2. 자음 국적형용사 띨데 탈락 규칙
              </span>
              <p className="leading-relaxed">
                <strong>-és, -án</strong> (francés, inglés, japonés, alemán)은 남성 단수만 띨데 표기! 여성/복수형(francesa, ingleses, alemana)에서는 음절이 늘어나 띨데가 탈락합니다.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <span className="font-bold text-emerald-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 3. 소문자 표기 원칙
              </span>
              <p className="leading-relaxed">
                국가명(Corea, España)은 대문자로 시작하지만, 국적형용사(coreano, español)는 문장 중간에서 반드시 <strong>소문자</strong>로 적습니다.
              </p>
            </div>
          </div>

          {/* Nationalities Table View */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">국가 (한국어)</th>
                    <th className="py-3 px-4">국가명 (스페인어)</th>
                    <th className="py-3 px-4">남성 단수</th>
                    <th className="py-3 px-4">여성 단수</th>
                    <th className="py-3 px-4">남성 복수</th>
                    <th className="py-3 px-4">여성 복수</th>
                    <th className="py-3 px-4">대표 예문 & 발음</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredNationalities.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{item.countryKo}</span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span>{item.countryEs}</span>
                          <button
                            onClick={() => playSpanishTTS(item.countryEs)}
                            className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            title="국가명 발음 듣기"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-slate-500 font-normal">수도: {item.capital}</span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-blue-700">
                        {item.mascSingular}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-rose-700">
                        {hideNationalityFem ? (
                          <span className="px-2 py-0.5 bg-slate-200 text-slate-400 rounded text-xs select-none">
                            [클릭하여 확인]
                          </span>
                        ) : (
                          item.femSingular
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-700">
                        {hideNationalityFem ? (
                          <span className="px-2 py-0.5 bg-slate-200 text-slate-400 rounded text-xs select-none">
                            ***
                          </span>
                        ) : (
                          item.mascPlural
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-700">
                        {hideNationalityFem ? (
                          <span className="px-2 py-0.5 bg-slate-200 text-slate-400 rounded text-xs select-none">
                            ***
                          </span>
                        ) : (
                          item.femPlural
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 font-medium text-slate-800">
                            <span>{item.adjExample}</span>
                            <button
                              onClick={() => playSpanishTTS(item.adjExample)}
                              className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                              title="예문 발음 듣기"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            {item.serDeExample}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: 14대 핵심 문법 상세 정리 카드 */}
      {activeTab !== 'nationalities' && activeTab !== 'workbook' && (
        <section id="section-grammar-topics" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-600" />
              <span>핵심 문법 상세 개념 & 비교표</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              총 {filteredTopics.length}개 주제 표시 중
            </span>
          </div>

          <div className="space-y-6">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                id={topic.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-4 p-6 sm:p-7"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-red-100 text-red-800">
                      {topic.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {topic.categoryLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {topic.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {topic.summary}
                </p>

                {/* Key Points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    핵심 원리 & 규칙
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                    {topic.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-red-50 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tables if any */}
                {topic.tables && topic.tables.length > 0 && (
                  <div className="space-y-3 pt-3">
                    {topic.tables.map((table, tIdx) => (
                      <div key={tIdx} className="rounded-xl border border-slate-200 overflow-hidden">
                        <div className="bg-slate-100 px-4 py-2 font-bold text-xs sm:text-sm text-slate-800 border-b border-slate-200">
                          {table.title}
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                              <tr>
                                {table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="py-2.5 px-3.5">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50/70">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="py-2.5 px-3.5 text-slate-800">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Example Sentences */}
                {topic.examples && topic.examples.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      대표 실전 예문 & 발음 듣기
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {topic.examples.map((ex, eIdx) => (
                        <div
                          key={eIdx}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3"
                        >
                          <div className="space-y-1">
                            <div className="text-sm font-semibold text-slate-900 font-mono">
                              {ex.es}
                            </div>
                            <div className="text-xs text-slate-600 font-medium">
                              {ex.ko}
                            </div>
                            {ex.note && (
                              <div className="text-[11px] text-red-600 font-medium">
                                ※ {ex.note}
                              </div>
                            )}
                          </div>
                          <button
                            onClick={() => playSpanishTTS(ex.es)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-white transition-colors shrink-0"
                            title="스페인어 듣기"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exam Tips */}
                {topic.tips && topic.tips.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1 text-xs sm:text-sm text-amber-950">
                    <div className="font-bold text-amber-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>시험 대비 암기 포인트</span>
                    </div>
                    {topic.tips.map((tip, tipIdx) => (
                      <p key={tipIdx} className="leading-relaxed">
                        {tip}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: PDF 1 & PDF 2 실전 워크북 98제 (대화형 풀이 & 정답 확인 토글) */}
      {(activeTab === 'all' || activeTab === 'workbook') && (
        <section id="section-workbook" className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-red-100 text-red-700 rounded-lg">
                    <FileCheck className="w-5 h-5" />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    PDF 교재 실전 워크북 98제 완벽 풀이 & 정답 모음
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  제공된 PDF 1 & 2 문서에 수록된 연습문제를 문항별로 분리하여 <strong>직접 답을 입력하거나 정답과 상세 문법 해설</strong>을 즉시 확인할 수 있습니다.
                </p>
              </div>

              {/* Master Control Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleRevealAll}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-xs ${
                    revealAllWorkbook
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {revealAllWorkbook ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      <span>전체 정답 가리기</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>전체 정답 & 해설 보기</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Set Sub-tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
              <button
                onClick={() => setActiveWorkbookSetId('all')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  activeWorkbookSetId === 'all'
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                전체 문항 ({totalWorkbookQuestionsCount}제)
              </button>
              {WORKBOOK_SETS.map((set) => (
                <button
                  key={set.id}
                  onClick={() => setActiveWorkbookSetId(set.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    activeWorkbookSetId === set.id
                      ? 'bg-red-600 text-white font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {set.title.split(' ')[0]} {set.title.split(' ')[1]} ({set.questions.length}제)
                </button>
              ))}
            </div>
          </div>

          {/* Render Sets */}
          <div className="space-y-6">
            {filteredWorkbookSets.map((set) => (
              <div
                key={set.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-4 p-5 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      {set.sourceFile}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {set.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                    총 {set.questions.length}문항
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  {set.description}
                </p>

                {/* Questions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {set.questions.map((q) => {
                    const isRevealed = revealedAnswers[q.id] || revealAllWorkbook;
                    const userInput = userInputs[q.id] || '';
                    const isUserCorrect =
                      userInput.trim().toLowerCase() === q.answer.trim().toLowerCase();

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border transition-all space-y-3 ${
                          isRevealed
                            ? 'bg-slate-50/70 border-slate-300'
                            : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                        }`}
                      >
                        {/* Question Header */}
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] flex items-center justify-center font-bold">
                              {q.number}
                            </span>
                            <span className="text-slate-500 font-medium">
                              {q.sectionTitle}
                            </span>
                          </span>

                          <button
                            onClick={() => toggleAnswer(q.id)}
                            className="font-semibold text-red-700 hover:text-red-900 flex items-center gap-1"
                          >
                            {isRevealed ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5" />
                                <span>정답 닫기</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5" />
                                <span>정답 확인</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Sentence display */}
                        <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-sm sm:text-base font-semibold text-slate-900">
                          <span>{q.sentence}</span>
                          <button
                            onClick={() => playSpanishTTS(q.sentence.replace(/_{2,}/g, q.answer))}
                            className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            title="정답 문장 발음 듣기"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* User Input Test Field */}
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="직접 답을 입력해보세요..."
                            value={userInput}
                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                            className={`flex-1 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border focus:outline-none ${
                              userInput
                                ? isUserCorrect
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950'
                                  : 'border-amber-400 bg-amber-50 text-amber-950'
                                : 'border-slate-300 bg-white'
                            }`}
                          />
                          {userInput && (
                            <span className="text-xs font-bold shrink-0">
                              {isUserCorrect ? (
                                <span className="text-emerald-600 flex items-center gap-0.5">
                                  <Check className="w-3.5 h-3.5" /> 정답!
                                </span>
                              ) : (
                                <span className="text-amber-700">일치 검사중</span>
                              )}
                            </span>
                          )}
                        </div>

                        {/* Revealed Explanation Area */}
                        {isRevealed && (
                          <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm space-y-1.5 animate-in fade-in-50">
                            <div className="font-bold text-emerald-950 flex items-center justify-between">
                              <span>
                                정답: <span className="font-mono underline text-emerald-800 text-sm">{q.answer}</span>
                              </span>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            </div>
                            <p className="text-xs text-slate-800 leading-relaxed">
                              {q.explanation}
                            </p>
                            {q.vocabulary && (
                              <div className="pt-1 text-[11px] font-medium text-slate-600 border-t border-emerald-200/60">
                                💡 {q.vocabulary}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA to Quizzes */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-bold">
            문법 정리가 끝났다면 지금 실전 50제 퀴즈로 테스트해보세요!
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            실전 시험 모드와 취약점 오답노트로 취약한 문법 유형을 100% 보완할 수 있습니다.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onGoToPart1 && (
            <button
              onClick={onGoToPart1}
              className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              Part 1 챕터 교재 보기
            </button>
          )}
          {onGoToPart2 && (
            <button
              onClick={onGoToPart2}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs flex items-center gap-2"
            >
              <span>Part 2 실전 50제 풀기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
