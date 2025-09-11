
const keypoints = [
  "무인 운영",
  "자동 정산",
  "통합 CRM"
];

const IntroSection = () => (
  <section
    className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-b from-navy-light/80 to-white dark:from-navy-dark/90 dark:to-navy w-full flex flex-col items-center transition-colors duration-500 animate-fadein-up"
    aria-label="AI·IoT 기반 스마트 주유소 소개"
  >
    <div className="w-full max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-center px-2 xs:px-4 sm:px-8 md:px-0">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-navy dark:text-white drop-shadow-lg tracking-tight leading-tight text-center transition-colors duration-500 animate-fadein-down">
        AI·IoT 기반 스마트 주유소
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xs:gap-4 sm:gap-6 w-full justify-center animate-fadein-up">
        {keypoints.map((point, idx) => (
          <div
            key={idx}
            className="bg-white/80 dark:bg-navy/80 text-navy dark:text-blue-100 rounded-2xl px-3 xs:px-4 sm:px-8 py-3 xs:py-4 sm:py-6 shadow-xl text-center w-full min-w-0 font-semibold text-sm xs:text-base sm:text-lg md:text-xl border border-blue-100 dark:border-navy-light/30 backdrop-blur-md transition-all transition-colors duration-500 animate-scalein"
            tabIndex={0}
            aria-label={point}
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
