import React from "react";

const MobileBottomNav = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav
    className="fixed md:hidden bottom-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-navy-light dark:bg-navy-dark text-white shadow-t border-t border-blue-100 dark:border-navy/40 z-50 transition-colors duration-500 animate-fadein-up"
    aria-label="모바일 하단 네비게이션"
  >
    <button
      className="font-bold text-lg animate-scalein"
      onClick={onMenuClick}
      aria-label="업무 메뉴 열기"
    >
      업무 메뉴
    </button>
    <img
      src="/src/assets/footer_logo.png"
      alt="Changwon ENG 로고"
      className="w-20 h-6 object-contain animate-fadein"
      aria-label="Changwon ENG 로고"
    />
  </nav>
);

export default MobileBottomNav;
