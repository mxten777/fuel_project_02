import React from "react";

const DesktopTopNav = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav
    className="hidden md:flex w-full items-center justify-between px-8 py-4 bg-navy-light dark:bg-navy-dark text-white shadow border-b border-blue-100 dark:border-navy/40 transition-colors duration-500 animate-fadein-up"
    aria-label="데스크탑 상단 네비게이션"
  >
    <div className="flex items-center gap-4 animate-fadein">
      <img
        src="/src/assets/footer_logo.png"
        alt="Changwon ENG 로고"
        className="w-28 h-8 object-contain"
        aria-label="Changwon ENG 로고"
      />
      <span className="font-bold text-lg">Changwon ENG</span>
    </div>
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow transition animate-scalein"
      onClick={onMenuClick}
      aria-label="업무 메뉴 열기"
    >
      업무 메뉴
    </button>
  </nav>
);

export default DesktopTopNav;
