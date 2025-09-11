import React from 'react';

const navItems = [
  { label: '홈', icon: '🏠' },
  { label: '기능', icon: '⚙️' },
  { label: '멤버십', icon: '💳' },
  { label: '내정보', icon: '👤' },
];


const DesktopTopNav = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav className="hidden md:flex w-full justify-center gap-4 lg:gap-8 xl:gap-12 py-2 sm:py-4 bg-navy-dark text-white shadow z-40 px-2 sm:px-6">
    {navItems.map((item, idx) => (
      <button
        key={idx}
        className="flex flex-col items-center justify-center w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-xl bg-navy-light text-white font-bold shadow-md focus:outline-none hover:bg-btn-blue hover:text-white transition-all duration-200 border-2 border-transparent hover:border-btn-blue text-xs sm:text-base md:text-lg"
        onClick={item.label === '기능' ? onMenuClick : undefined}
      >
        <span className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1">{item.icon}</span>
        <span className="text-xs sm:text-base md:text-lg">{item.label}</span>
      </button>
    ))}
  </nav>
);

export default DesktopTopNav;
