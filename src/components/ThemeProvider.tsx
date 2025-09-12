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

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  console.log('[useTheme] ThemeContext:', ThemeContext, 'ctx:', ctx);
  return ctx;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  console.log('[ThemeProvider] ThemeContext:', ThemeContext);
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  console.log('[ThemeProvider] theme:', theme);

  // Tailwind 변수 및 다크모드 적용
  React.useEffect(() => {
    if (theme.mode === "dark") {
      document.documentElement.classList.add("dark");
      console.log("[ThemeProvider] dark class added");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("[ThemeProvider] dark class removed");
    }
    document.documentElement.style.setProperty("--theme-color", theme.color);
    document.documentElement.style.setProperty("--theme-font", theme.font);
    console.log("[ThemeProvider] theme.mode:", theme.mode);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
