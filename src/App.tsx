import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewSection from './components/ReviewSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import MobileBottomNav from './components/MobileBottomNav';
import DesktopTopNav from './components/DesktopTopNav';
import BusinessMenuModal from './components/BusinessMenuModal';
import Dashboard from './components/Dashboard';
import KPIDashboard from './components/KPIDashboard';
import { useState } from 'react';



function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showKPI, setShowKPI] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-navy min-h-screen flex flex-col items-center dark:bg-navy-dark">
      <DesktopTopNav onMenuClick={() => setMenuOpen(true)} />
      {/* 기능구성 버튼 샘플 */}
      <div className="flex gap-4 p-8 flex-wrap justify-center">
        <button className="bg-btn-green text-navy font-bold px-4 py-2 rounded-lg shadow">운영관리</button>
        <button className="bg-btn-blue text-navy font-bold px-4 py-2 rounded-lg shadow">매출정산</button>
        <button className="bg-btn-yellow text-navy font-bold px-4 py-2 rounded-lg shadow">재고관리</button>
        <button className="bg-btn-pink text-navy font-bold px-4 py-2 rounded-lg shadow" onClick={() => setShowDashboard(true)}>통합대시보드</button>
        <button className="bg-navy-light text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-navy-dark" onClick={() => setShowKPI(true)}>KPI 달성비교</button>
      </div>
      {showDashboard && (
        <>
          <Dashboard />
          <button className="mt-4 px-6 py-2 bg-navy text-white rounded-lg shadow hover:bg-navy-dark" onClick={() => setShowDashboard(false)}>닫기</button>
        </>
      )}
      {showKPI && (
        <>
          <KPIDashboard />
          <button className="mt-4 px-6 py-2 bg-navy text-white rounded-lg shadow hover:bg-navy-dark" onClick={() => setShowKPI(false)}>닫기</button>
        </>
      )}
      {!showDashboard && !showKPI && (
        <>
          <DarkModeToggle />
          <HeroSection />
          <IntroSection />
          <FeaturesSection />
          <ReviewSection />
          <CTASection />
          <Footer />
          <MobileBottomNav />
          <BusinessMenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}
    </div>
  );
}

export default App;
