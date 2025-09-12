import { useState } from 'react';
import BusinessMenuModal from './BusinessMenuModal';

const MobileTopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-navy-dark/95 text-white shadow-md md:hidden sticky top-0 z-50">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-300 text-navy-dark font-bold shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => setMenuOpen(true)}
        aria-label="업무 메뉴 열기"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect y="4" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="18" width="24" height="2" rx="1" fill="currentColor"/></svg>
        <span className="font-bold text-base">업무 메뉴</span>
      </button>
  <div className="font-extrabold text-xl xs:text-2xl sm:text-3xl text-center flex-1 drop-shadow-lg">최첨단 AI/IOT 주유소</div>
      <div className="w-8" /> {/* 우측 여백용 */}
      <BusinessMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
};

export default MobileTopNav;
