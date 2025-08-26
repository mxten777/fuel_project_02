import React from 'react';

const navItems = [
  { label: '홈', icon: '🏠' },
  { label: '기능', icon: '⚙️' },
  { label: '멤버십', icon: '💳' },
  { label: '내정보', icon: '👤' },
];


const DesktopTopNav = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav className="hidden md:flex w-full justify-center gap-8 py-4 bg-navy-dark text-white shadow z-40">
    {navItems.map((item, idx) => (
      <button
        key={idx}
        className="flex flex-col items-center justify-center w-24 h-20 rounded-xl bg-navy-light text-white font-bold shadow-md focus:outline-none hover:bg-btn-blue hover:text-white transition-all duration-200 border-2 border-transparent hover:border-btn-blue"
        onClick={item.label === '기능' ? onMenuClick : undefined}
      >
        <span className="text-2xl mb-1">{item.icon}</span>
        <span className="text-base">{item.label}</span>
      </button>
    ))}
  </nav>
);

export default DesktopTopNav;
