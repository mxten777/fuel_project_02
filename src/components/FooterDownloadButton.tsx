import React, { useRef } from "react";

const FooterDownloadButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
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
      ref={btnRef}
      className="bg-blue-500 dark:bg-blue-900 px-3 xs:px-4 py-1 xs:py-2 rounded-full font-semibold mt-1 xs:mt-2 text-xs xs:text-sm sm:text-base text-white dark:text-blue-100 transition-colors duration-500 animate-scalein relative overflow-hidden hover:scale-[1.06] active:scale-95 focus:scale-[1.06]"
      aria-label="앱 다운로드"
      onClick={handleRipple}
    >
      앱 다운로드
    </button>
  );
};

export default FooterDownloadButton;
