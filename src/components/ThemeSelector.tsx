import React from "react";
import { useTheme, Theme } from "./ThemeProvider";

const colorOptions = [
  { name: "블루", value: "#2563eb" },
  { name: "그린", value: "#22c55e" },
  { name: "퍼플", value: "#7c3aed" },
  { name: "오렌지", value: "#f97316" },
];
const fontOptions = [
  { name: "Noto Sans KR", value: "'Noto Sans KR', sans-serif" },
  { name: "Nanum Gothic", value: "'Nanum Gothic', sans-serif" },
  { name: "Roboto", value: "'Roboto', sans-serif" },
];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme({ ...theme, mode: e.target.value as Theme["mode"] });
  };
  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme({ ...theme, color: e.target.value });
  };
  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme({ ...theme, font: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2 p-4 bg-white dark:bg-navy/80 rounded-xl shadow w-full max-w-xs animate-fadein-up">
      <label className="font-bold">테마 모드</label>
      <select value={theme.mode} onChange={handleModeChange} className="rounded p-1">
        <option value="light">라이트</option>
        <option value="dark">다크</option>
      </select>
      <label className="font-bold mt-2">주요 색상</label>
      <select value={theme.color} onChange={handleColorChange} className="rounded p-1">
        {colorOptions.map((c) => (
          <option key={c.value} value={c.value}>{c.name}</option>
        ))}
      </select>
      <label className="font-bold mt-2">폰트</label>
      <select value={theme.font} onChange={handleFontChange} className="rounded p-1">
        {fontOptions.map((f) => (
          <option key={f.value} value={f.value}>{f.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
