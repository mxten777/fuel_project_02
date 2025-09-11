import React, { createContext, useContext, useState, ReactNode } from "react";

// 테마 타입 정의
export type Theme = {
  mode: "light" | "dark";
  color: string; // 주요 색상(hex)
  font: string;  // 폰트 패밀리
};

const defaultTheme: Theme = {
  mode: "light",
  color: "#2563eb", // Tailwind blue-600
  font: "'Noto Sans KR', sans-serif",
};

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Tailwind 변수 및 다크모드 적용
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme.mode === "dark");
    document.documentElement.style.setProperty("--theme-color", theme.color);
    document.documentElement.style.setProperty("--theme-font", theme.font);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
