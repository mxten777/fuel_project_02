import HeroSection from './components/organisms/HeroSection';
import FeaturesSection from './components/organisms/FeaturesSection';
import ReviewSection from './components/organisms/ReviewSection';
import CTASection from './components/organisms/CTASection';
import BusinessMenuModal from './components/molecules/BusinessMenuModal';
import Dashboard from './components/Dashboard';
import KPIDashboard from './components/KPIDashboard';
// ...existing code...
import DesktopTopNav from './components/organisms/DesktopTopNav';
import Footer from './components/organisms/Footer';
import MobileTopNav from './components/MobileTopNav';


// ...existing code...
import { useUIStore } from './store/uiStore';



function App() {
  const {
    menuOpen, setMenuOpen,
    showDashboard, setShowDashboard,
    showKPI, setShowKPI
  } = useUIStore();

  // 심플 다크모드 토글
  const handleDarkModeToggle = () => {
    document.documentElement.classList.toggle('dark');
  };

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
      {/* 다크모드 토글 버튼: 모바일에서는 bottom-right, 데스크탑에서는 top-right */}
      <button
        className="fixed right-4 z-40 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full p-2 shadow hover:scale-110 transition bottom-[calc(4rem+env(safe-area-inset-bottom))] md:top-20 md:bottom-auto md:right-6"
        onClick={handleDarkModeToggle}
        aria-label="다크모드 토글"
      >
        🌙/☀️
      </button>
  <main id="main" role="main" className="flex-1 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-12">
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
          {/* ...existing code... */}
          <HeroSection />
          <FeaturesSection />
          <ReviewSection />
          <CTASection />
          <Footer />
          <BusinessMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}
      </main>
    </div>
  );
}

export default App;
