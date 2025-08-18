import React from "react";

const fakeData = {
  month: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
  fuel: [1200, 1500, 1100, 1800, 1700, 1600, 2000],
  sales: [3200, 4100, 3900, 4700, 4500, 4300, 5200],
  customers: [220, 260, 210, 300, 280, 270, 350],
  oilType: [
    { type: '휘발유', value: 60, color: '#60a5fa' },
    { type: '경유', value: 30, color: '#facc15' },
    { type: 'LPG', value: 10, color: '#34d399' },
  ],
};

export default function Dashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white/90 dark:bg-navy/95 rounded-3xl shadow-2xl mt-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-navy dark:text-white drop-shadow-lg">통합 대시보드</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* 월별 주유량 - 막대그래프 (최대높이 100px) */}
        <div className="bg-btn-green rounded-xl p-6 shadow text-center">
          <div className="text-2xl font-bold text-navy mb-2">월별 주유량</div>
          <div className="flex items-end justify-center gap-2 h-32">
            {(() => {
              const max = Math.max(...fakeData.fuel);
              return fakeData.fuel.map((v, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-6 md:w-8 bg-blue-400 rounded-t-lg transition-all duration-300" style={{height: `${(v / max) * 100}px`, maxHeight: '100px'}}></div>
                  <span className="text-xs text-navy mt-1">{fakeData.month[i]}</span>
                </div>
              ));
            })()}
          </div>
          <div className="mt-4 text-navy text-lg font-semibold">최고: {Math.max(...fakeData.fuel)}L</div>
        </div>
        {/* 월별 매출 - 선형그래프 */}
        <div className="bg-btn-blue rounded-xl p-6 shadow text-center">
          <div className="text-2xl font-bold text-navy mb-2">월별 매출</div>
          <svg viewBox="0 0 220 120" className="w-full h-32 mb-2">
            {/* 선형 그래프 */}
            <polyline
              fill="none"
              stroke="#facc15"
              strokeWidth="4"
              points={fakeData.sales.map((v, i) => `${20 + i * 30},${120 - (v - 3200) / 20}`).join(' ')}
            />
            {/* 점 */}
            {fakeData.sales.map((v, i) => (
              <circle key={i} cx={20 + i * 30} cy={120 - (v - 3200) / 20} r="5" fill="#facc15" />
            ))}
            {/* 월 텍스트 */}
            {fakeData.month.map((m, i) => (
              <text key={m} x={20 + i * 30} y={115} fontSize="10" textAnchor="middle" fill="#1e293b">{m}</text>
            ))}
          </svg>
          <div className="mt-2 text-navy text-lg font-semibold">최고: {Math.max(...fakeData.sales).toLocaleString()}만원</div>
        </div>
        {/* 월별 방문 고객 - 도넛그래프 */}
        <div className="bg-btn-pink rounded-xl p-6 shadow text-center flex flex-col items-center">
          <div className="text-2xl font-bold text-navy mb-2">유종별 비율</div>
          <svg width="100" height="100" viewBox="0 0 42 42" className="mb-2">
            {(() => {
              let acc = 0;
              return fakeData.oilType.map((d, i) => {
                const r = 15;
                const c = 2 * Math.PI * r;
                const val = d.value / 100 * c;
                const dasharray = `${val} ${c - val}`;
                const el = (
                  <circle
                    key={d.type}
                    r={r}
                    cx="21"
                    cy="21"
                    fill="transparent"
                    stroke={d.color}
                    strokeWidth="8"
                    strokeDasharray={dasharray}
                    strokeDashoffset={-acc}
                  />
                );
                acc += val;
                return el;
              });
            })()}
          </svg>
          <div className="flex justify-center gap-2 mb-2">
            {fakeData.oilType.map((d) => (
              <span key={d.type} className="flex items-center gap-1 text-xs text-navy"><span style={{background:d.color, width:10, height:10, borderRadius:5, display:'inline-block'}}></span>{d.type}</span>
            ))}
          </div>
          <div className="text-navy text-lg font-semibold">총 방문: 1,000명</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-btn-yellow rounded-xl p-6 shadow text-center">
          <div className="text-xl font-bold text-navy mb-2">실시간 주유소 상태</div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">⛽</span>
            <span className="text-navy text-lg">정상 운영 중</span>
          </div>
        </div>
        <div className="bg-navy-light rounded-xl p-6 shadow text-center">
          <div className="text-xl font-bold text-white mb-2">알림 및 예측 리포트</div>
          <ul className="text-white text-left list-disc list-inside">
            <li>7월 매출 예상: <span className="font-bold">5,200만원</span></li>
            <li>7월 주유량 예상: <span className="font-bold">2,000L</span></li>
            <li>고객 증가 추세: <span className="font-bold">+15%</span></li>
            <li>이상 징후 없음</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
