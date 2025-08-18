import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      className="fixed top-4 right-4 z-50 bg-navy-dark text-white rounded-full p-2 shadow-md hover:bg-blue-600 transition md:top-6 md:right-6"
      onClick={() => setDark((d) => !d)}
      aria-label="다크모드 토글"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
