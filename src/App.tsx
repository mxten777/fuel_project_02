import HeroSection from './components/organisms/HeroSection';
import FeaturesSection from './components/organisms/FeaturesSection';
import ReviewSection from './components/organisms/ReviewSection';
import CTASection from './components/organisms/CTASection';
import BusinessMenuModal from './components/molecules/BusinessMenuModal';
import Dashboard from './components/Dashboard';
import KPIDashboard from './components/KPIDashboard';
import DarkModeToggle from './components/atoms/DarkModeToggle';
import DesktopTopNav from './components/organisms/DesktopTopNav';
import Footer from './components/organisms/Footer';
import MobileTopNav from './components/MobileTopNav';


import ThemeSelector from './components/ThemeSelector';
import { useUIStore } from './store/uiStore';



function App() {
  const {
    menuOpen, setMenuOpen,
    showDashboard, setShowDashboard,
    showKPI, setShowKPI
  } = useUIStore();
  return (
  <div className="min-h-[100dvh] w-full flex flex-col" style={{ fontFamily: "var(--theme-font)" }}>
      {/* Desktop Nav: md 이상에서만 보임 */}
      <div className="hidden md:block w-full">
        <DesktopTopNav onMenuClick={() => setMenuOpen(true)} />
      </div>
      {/* Mobile Nav: md 미만에서만 보임 (상단) */}
      <div className="md:hidden w-full">
        <MobileTopNav />
      </div>
      <div className="fixed top-4 right-4 z-50 hidden xs:block">
        <ThemeSelector />
      </div>
      {/* 기능구성 버튼 샘플 */}
      <div className="flex gap-4 p-8 flex-wrap justify-center w-full">
        <button className="bg-btn-green text-navy font-bold px-4 py-2 rounded-lg shadow">운영관리</button>
        <button className="bg-btn-blue text-navy font-bold px-4 py-2 rounded-lg shadow">매출정산</button>
        <button className="bg-btn-yellow text-navy font-bold px-4 py-2 rounded-lg shadow">재고관리</button>
        <button className="bg-btn-pink text-navy font-bold px-4 py-2 rounded-lg shadow" onClick={() => setShowDashboard(true)}>통합대시보드</button>
        <button className="bg-navy-light text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-navy-dark" onClick={() => setShowKPI(true)}>KPI 달성비교</button>
      </div>
      {showDashboard && (
        <>
          <Dashboard fullWidth />
          <button className="mt-4 px-6 py-2 bg-navy text-white rounded-lg shadow hover:bg-navy-dark" onClick={() => setShowDashboard(false)}>닫기</button>
        </>
      )}
      {showKPI && (
        <>
          <KPIDashboard fullWidth />
          <button className="mt-4 px-6 py-2 bg-navy text-white rounded-lg shadow hover:bg-navy-dark" onClick={() => setShowKPI(false)}>닫기</button>
        </>
      )}
      {!showDashboard && !showKPI && (
        <>
          <DarkModeToggle />
          <HeroSection />
          <FeaturesSection />
          <ReviewSection />
          <CTASection />
          <Footer />
          <BusinessMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}
    </div>
  );
}

export default App;
