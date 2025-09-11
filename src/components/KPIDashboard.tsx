import React, { useEffect, useRef, useState } from "react";


const kpiData = [
  { name: "매출", value: 5200, target: 5000, unit: "만원", color: "#60a5fa", grad: "url(#grad-blue)", icon: "💰" },
  { name: "주유량", value: 2000, target: 1800, unit: "L", color: "#facc15", grad: "url(#grad-yellow)", icon: "⛽" },
  { name: "방문고객", value: 350, target: 300, unit: "명", color: "#34d399", grad: "url(#grad-green)", icon: "👥" },
  { name: "신규회원", value: 45, target: 50, unit: "명", color: "#f472b6", grad: "url(#grad-pink)", icon: "⭐" },
];

// 가상 데이터: 전월 실적, 증감률 추가
const kpiTableData = [
  { name: "매출", value: 5200, target: 5000, prev: 4800, unit: "만원" },
  { name: "주유량", value: 2000, target: 1800, prev: 1700, unit: "L" },
  { name: "방문고객", value: 350, target: 300, prev: 320, unit: "명" },
  { name: "신규회원", value: 45, target: 50, prev: 38, unit: "명" },
];

export default function KPIDashboard() {
  return (
  <div className="w-full max-w-md xs:max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto p-2 xs:p-3 sm:p-6 md:p-8 bg-white/90 dark:bg-navy/95 rounded-3xl shadow-2xl mt-2 xs:mt-3 sm:mt-8 transition-colors duration-500">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 xs:mb-3 sm:mb-4 md:mb-8 text-navy dark:text-white drop-shadow-lg leading-tight transition-colors duration-500">KPI 달성 비교</h2>
      {/* KPI 비교 표 (상단) */}
      <div className="mb-2 xs:mb-4 sm:mb-6 md:mb-10">
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-navy dark:text-white mb-1 xs:mb-2 sm:mb-3 md:mb-4 transition-colors duration-500">KPI 비교표</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[320px] xs:min-w-[380px] sm:min-w-[440px] w-full border border-navy-light dark:border-navy/40 rounded-xl bg-white dark:bg-navy-light text-center text-[10px] xs:text-[11px] sm:text-xs md:text-base transition-colors duration-500">
            <thead>
              <tr className="bg-btn-blue border-b border-navy-light">
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">KPI</th>
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">실적</th>
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">목표</th>
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">전월</th>
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">증감률</th>
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">달성률</th>
                <th className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2">상태</th>
              </tr>
            </thead>
            <tbody>
              {kpiTableData.map((kpi, idx) => {
                const percent = Math.round((kpi.value / kpi.target) * 100);
                const diff = kpi.value - kpi.prev;
                const diffRate = ((diff / kpi.prev) * 100).toFixed(1);
                return (
                  <tr key={kpi.name} className={"border-b border-navy-light dark:border-navy/40 transition-colors duration-500 " + (idx === kpiTableData.length-1 ? "" : "") }>
                    <td className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2 font-bold whitespace-nowrap text-navy dark:text-blue-100 transition-colors duration-500">{kpi.name}</td>
                    <td className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2 whitespace-nowrap text-navy dark:text-blue-100 transition-colors duration-500">{kpi.value}{kpi.unit}</td>
                    <td className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2 whitespace-nowrap text-navy dark:text-blue-100 transition-colors duration-500">{kpi.target}{kpi.unit}</td>
                    <td className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2 whitespace-nowrap text-navy dark:text-blue-100 transition-colors duration-500">{kpi.prev}{kpi.unit}</td>
                    <td className={"px-1 xs:px-2 sm:px-4 py-1 xs:py-2 font-semibold whitespace-nowrap transition-colors duration-500 " + (diff > 0 ? "text-green-600 dark:text-green-400" : diff < 0 ? "text-red-600 dark:text-red-400" : "")}>{diff > 0 ? `+${diff} (${diffRate}%)` : `${diff} (${diffRate}%)`}</td>
                    <td className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2 font-semibold whitespace-nowrap text-navy dark:text-blue-100 transition-colors duration-500">{percent}%</td>
                    <td className="px-1 xs:px-2 sm:px-4 py-1 xs:py-2 whitespace-nowrap">{kpi.value >= kpi.target ? <span className="text-green-600 dark:text-green-400 font-bold">달성</span> : <span className="text-yellow-600 dark:text-yellow-400 font-bold">진행중</span>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* KPI 카드 내용 (하단) */}
  <div className="grid grid-cols-1 gap-2 xs:gap-3 sm:grid-cols-2 sm:gap-6 md:gap-8">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f59e42" />
            </linearGradient>
            <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
            <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
          </defs>
        </svg>
  {kpiData.map((kpi, idx) => {
          const percent = Math.round((kpi.value / kpi.target) * 100);
          let grad = kpi.grad;
          if (percent >= 120) grad = "url(#grad-red)";
          else if (percent >= 110) grad = "url(#grad-green)";
          else if (percent >= 100) grad = kpi.grad;

          // 카운트업 애니메이션 훅
          function useCountUp(target: number, duration = 1200) {
            const [value, setValue] = useState(0);
            const raf = useRef<number | null>(null);
            useEffect(() => {
              let start: number | null = null;
              function step(ts: number) {
                if (!start) start = ts;
                const progress = Math.min((ts - start) / duration, 1);
                setValue(Math.round(target * progress));
                if (progress < 1 && raf.current !== null) raf.current = requestAnimationFrame(step);
                else setValue(target);
              }
              raf.current = requestAnimationFrame(step);
              return () => {
                if (raf.current !== null) cancelAnimationFrame(raf.current);
              };
            }, [target, duration]);
            return value;
          }
          const animatedPercent = useCountUp(percent);

          return (
            <div
              key={kpi.name}
              className="bg-white dark:bg-navy-light rounded-xl p-3 xs:p-4 sm:p-8 shadow-xl flex flex-col relative overflow-visible min-h-[180px] xs:min-h-[220px] sm:min-h-[340px] transition-all animate-fadein hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl"
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              tabIndex={0}
            >
              <div className="absolute -top-6 xs:-top-8 left-1/2 -translate-x-1/2 text-3xl xs:text-5xl sm:text-6xl animate-bounce select-none pointer-events-none z-10" style={{textShadow:'0 2px 12px #fff8,0 4px 24px #0004'}}>{kpi.icon}</div>
              <div className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-navy dark:text-white mb-2 xs:mb-4 mt-6 xs:mt-10 text-center w-full tracking-tight leading-tight drop-shadow-lg">{kpi.name}</div>
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="relative w-24 h-24 xs:w-32 xs:h-32 sm:w-56 sm:h-56 flex items-center justify-center mx-auto">
                  <svg width="96" height="96" className="xs:hidden"><circle cx="48" cy="48" r="40" fill="none" stroke="#e5e7eb" strokeWidth="10" /><circle cx="48" cy="48" r="40" fill="none" stroke={grad} strokeWidth="10" strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 * (1 - Math.min(percent, 130) / 100)} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.8s', filter: 'drop-shadow(0 0 12px #fff8)' }} /></svg>
                  <svg width="128" height="128" className="hidden xs:block sm:hidden"><circle cx="64" cy="64" r="56" fill="none" stroke="#e5e7eb" strokeWidth="12" /><circle cx="64" cy="64" r="56" fill="none" stroke={grad} strokeWidth="12" strokeDasharray={2 * Math.PI * 56} strokeDashoffset={2 * Math.PI * 56 * (1 - Math.min(percent, 130) / 100)} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.8s', filter: 'drop-shadow(0 0 12px #fff8)' }} /></svg>
                  <svg width="224" height="224" className="hidden sm:block"><circle cx="112" cy="112" r="100" fill="none" stroke="#e5e7eb" strokeWidth="22" /><circle cx="112" cy="112" r="100" fill="none" stroke={grad} strokeWidth="22" strokeDasharray={2 * Math.PI * 100} strokeDashoffset={2 * Math.PI * 100 * (1 - Math.min(percent, 130) / 100)} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.8s', filter: 'drop-shadow(0 0 12px #fff8)' }} /></svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl xs:text-3xl sm:text-6xl font-extrabold text-navy dark:text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)] animate-pulse transition-all duration-500 leading-none" style={{letterSpacing:'-0.04em'}}>{animatedPercent}%</span>
                  </div>
                </div>
              </div>
              <div className="mt-1 xs:mt-2 text-navy dark:text-white text-base xs:text-lg sm:text-2xl font-bold text-center w-full">
                {kpi.value >= kpi.target ? <span className="text-green-600 font-extrabold">달성!</span> : <span className="text-yellow-500 font-extrabold">진행중</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
