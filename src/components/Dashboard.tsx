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

type DashboardProps = { fullWidth?: boolean };
export default function Dashboard({ fullWidth }: DashboardProps) {
  return (
    <div className="w-full p-0 m-0 bg-transparent">
  <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-4 xs:mb-6 sm:mb-8 text-navy dark:text-white leading-tight transition-colors duration-500">통합 대시보드</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-0">
        {/* 월별 주유량 - 막대그래프 (최대높이 100px) */}
  <div className="bg-btn-green dark:bg-green-900/60 p-4 text-center transition-colors duration-500 animate-fadein" style={{ animationDelay: '0.12s' }} tabIndex={0}>
          <div className="text-2xl font-bold text-navy dark:text-green-100 mb-2 transition-colors duration-500">월별 주유량</div>
          <div className="flex items-end justify-center gap-2 h-32">
            {(() => {
              const max = Math.max(...fakeData.fuel);
              return fakeData.fuel.map((v, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-6 md:w-8 bg-blue-400 rounded-t-lg transition-all duration-300" style={{height: `${(v / max) * 100}px`, maxHeight: '100px'}}></div>
                  <span className="text-xs text-navy dark:text-green-100 mt-1 transition-colors duration-500">{fakeData.month[i]}</span>
                </div>
              ));
            })()}
          </div>
          <div className="mt-4 text-navy dark:text-green-100 text-lg font-semibold transition-colors duration-500">최고: {Math.max(...fakeData.fuel)}L</div>
        </div>
        {/* 월별 매출 - 선형그래프 */}
  <div className="bg-btn-blue dark:bg-blue-900/60 p-4 text-center transition-colors duration-500 animate-fadein" style={{ animationDelay: '0.18s' }} tabIndex={0}>
          <div className="text-2xl font-bold text-navy dark:text-blue-100 mb-2 transition-colors duration-500">월별 매출</div>
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
          <div className="mt-2 text-navy dark:text-blue-100 text-lg font-semibold transition-colors duration-500">최고: {Math.max(...fakeData.sales).toLocaleString()}만원</div>
        </div>
        {/* 월별 방문 고객 - 도넛그래프 */}
  <div className="bg-btn-pink dark:bg-pink-900/60 p-4 text-center flex flex-col items-center transition-colors duration-500 animate-fadein" style={{ animationDelay: '0.24s' }} tabIndex={0}>
          <div className="text-2xl font-bold text-navy dark:text-pink-100 mb-2 transition-colors duration-500">유종별 비율</div>
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
              <span key={d.type} className="flex items-center gap-1 text-xs text-navy dark:text-pink-100 transition-colors duration-500"><span style={{background:d.color, width:10, height:10, borderRadius:5, display:'inline-block'}}></span>{d.type}</span>
            ))}
          </div>
          <div className="text-navy dark:text-pink-100 text-lg font-semibold transition-colors duration-500">총 방문: 1,000명</div>
        </div>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0">
  <div className="bg-btn-yellow dark:bg-yellow-900/60 p-4 text-center transition-colors duration-500 animate-fadein" style={{ animationDelay: '0.30s' }} tabIndex={0}>
          <div className="text-xl font-bold text-navy dark:text-yellow-100 mb-2 transition-colors duration-500">실시간 주유소 상태</div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">⛽</span>
            <span className="text-navy dark:text-yellow-100 text-lg transition-colors duration-500">정상 운영 중</span>
          </div>
        </div>
  <div className="bg-navy-light dark:bg-navy/80 p-4 text-center transition-colors duration-500 animate-fadein" style={{ animationDelay: '0.36s' }} tabIndex={0}>
          <div className="text-xl font-bold text-white dark:text-blue-100 mb-2 transition-colors duration-500">알림 및 예측 리포트</div>
          <ul className="text-white dark:text-blue-100 text-left list-disc list-inside transition-colors duration-500">
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
