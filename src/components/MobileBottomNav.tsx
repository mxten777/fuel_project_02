import { useState } from 'react';
import BusinessMenuModal from './BusinessMenuModal';

const navItems = [
  { label: '홈', icon: '🏠' },
  { label: '기능', icon: '⚙️' },
  { label: '멤버십', icon: '💳' },
  { label: '내정보', icon: '👤' },
];

const MobileBottomNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
  <nav className="fixed bottom-0 left-0 w-full bg-navy-dark text-white flex justify-around items-center py-2 shadow-lg z-50 md:hidden">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center focus:outline-none"
            onClick={() => item.label === '기능' ? setMenuOpen(true) : null}
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </nav>
      <BusinessMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default MobileBottomNav;
