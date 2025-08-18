
const HeroSection = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center bg-gradient-to-br from-navy via-navy-light to-blue-200 dark:from-navy-dark dark:via-navy dark:to-blue-900 py-16 px-4 relative overflow-hidden">
    {/* 배경 오버레이 */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-navy/10 to-blue-200/20 dark:from-navy-dark/80 dark:via-navy/60 dark:to-blue-900/40 pointer-events-none z-0" />
    <div className="w-full max-w-3xl bg-white/90 dark:bg-navy/95 rounded-3xl shadow-2xl flex flex-col items-center p-8 md:p-16 gap-6 border border-blue-100 dark:border-navy/40 relative z-10 backdrop-blur-md">
      <img src="/src/assets/ai_iot.png" alt="AI·IoT" className="w-36 h-36 md:w-48 md:h-48 object-contain mb-6 drop-shadow-xl bg-white/90 rounded-full p-2 select-none" />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-center text-navy dark:text-white tracking-tight">스마트한 주유소 운영의 시작</h1>
      <p className="mb-4 text-lg md:text-2xl text-center text-navy dark:text-white font-semibold">(주)창원이엔지 스마트서비스 콘소시움 대표사</p>
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-12 rounded-full shadow-xl transition-all text-lg mb-2 scale-105 hover:scale-110">지금 확인하기</button>
    </div>
  </section>
);

export default HeroSection;
