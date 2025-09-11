import React from "react";

const DarkModeToggle = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="fixed top-4 right-4 z-50 bg-white dark:bg-navy text-navy dark:text-white rounded-full p-2 shadow-lg border border-blue-100 dark:border-navy/40 transition-colors duration-500"
    onClick={onClick}
    aria-label="다크모드 토글"
  >
    <span role="img" aria-label="dark mode">🌙</span>
  </button>
);

export default DarkModeToggle;
