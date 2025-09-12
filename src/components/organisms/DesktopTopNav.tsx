import React from "react";

const DesktopTopNav = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav
  className="hidden md:flex w-full items-center justify-between px-6 py-3 bg-navy-light dark:bg-navy-dark text-white border-b border-blue-100 dark:border-navy/40 transition-colors duration-500 animate-fadein-up border-4 border-purple-400 relative gap-6"
    aria-label="데스크탑 상단 네비게이션"
  >
    <div style={{position:'absolute',top:0,left:0,background:'purple',color:'#fff',fontWeight:'bold',zIndex:1000,padding:'2px 8px',fontSize:'14px'}}>DesktopTopNav</div>
    <div className="flex items-center gap-3 min-w-0 flex-shrink-0 animate-fadein">
      <img
  src="/baikal_logo.png"
        alt="Changwon ENG 로고"
        className="w-12 h-12 object-contain flex-shrink-0 bg-white rounded shadow"
        aria-label="Changwon ENG 로고"
        onError={e => { e.currentTarget.style.display = 'none'; }}
      />
    </div>
  <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap pointer-events-none select-none drop-shadow-lg">최첨단 AI/IOT 주유소</span>
    <button
      className="bg-blue-700 text-white font-extrabold px-6 py-2 rounded-2xl shadow-lg border-2 border-blue-900 text-lg tracking-wide hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition animate-scalein drop-shadow-md"
      onClick={onMenuClick}
      aria-label="업무 메뉴 열기"
    >
      업무 메뉴
    </button>
  </nav>
);

export default DesktopTopNav;
