import { useState, useRef } from 'react';
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
  <nav className="fixed bottom-0 left-0 w-full backdrop-blur-md bg-navy-dark/80 text-white flex justify-around items-center py-3 shadow-xl z-50 md:hidden px-3 border-t border-blue-300 rounded-t-2xl">
        {navItems.map((item, idx) => {
          const btnRef = useRef<HTMLButtonElement>(null);
          // Ripple effect handler
          const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
            const button = btnRef.current;
            if (!button) return;
            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
            circle.className = "absolute bg-white/40 dark:bg-blue-200/30 rounded-full pointer-events-none animate-ripple z-10";
            button.appendChild(circle);
            setTimeout(() => circle.remove(), 500);
          };
          return (
            <button
              key={idx}
              ref={btnRef}
              className={
                `flex flex-col items-center justify-center focus:outline-none px-3 py-2 rounded-xl transition-all duration-200 shadow-md relative overflow-hidden ` +
                (item.label === '기능'
                  ? 'bg-gradient-to-br from-yellow-200 to-yellow-400 text-navy-dark font-bold border-2 border-yellow-400 scale-110 shadow-lg'
                  : 'bg-navy-light/80 text-white hover:bg-blue-400/80 hover:text-navy-dark') +
                ' hover:scale-[1.08] active:scale-95 focus:scale-[1.08]'
              }
              style={item.label === '기능' ? { boxShadow: '0 4px 16px 0 #facc1533' } : {}}
              onClick={e => {
                handleRipple(e);
                if (item.label === '기능') setMenuOpen(true);
              }}
            >
              <span className="text-xl xs:text-2xl sm:text-3xl mb-1 drop-shadow-lg">{item.icon}</span>
              <span className="text-xs xs:text-sm font-semibold tracking-wide">{item.label === '기능' ? '업무 메뉴' : item.label}</span>
            </button>
          );
        })}
      </nav>
      <BusinessMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default MobileBottomNav;
