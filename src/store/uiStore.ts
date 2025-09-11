import { create } from 'zustand';

// 예시: 글로벌 UI 상태 (모달, 대시보드, KPI 등)
interface UIState {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  showDashboard: boolean;
  setShowDashboard: (show: boolean) => void;
  showKPI: boolean;
  setShowKPI: (show: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
  showDashboard: false,
  setShowDashboard: (show) => set({ showDashboard: show }),
  showKPI: false,
  setShowKPI: (show) => set({ showKPI: show }),
}));
