
const keypoints = [
  "무인 운영",
  "자동 정산",
  "통합 CRM"
];

const IntroSection = () => (
  <section className="py-16 bg-gradient-to-b from-navy-light/80 to-white dark:from-navy-dark/80 dark:to-navy w-full flex flex-col items-center">
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center px-2 sm:px-0">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-navy dark:text-white drop-shadow-lg tracking-tight">AI·IoT 기반 스마트 주유소</h2>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full justify-center">
        {keypoints.map((point, idx) => (
          <div key={idx} className="bg-white/80 dark:bg-navy/80 text-navy dark:text-white rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-xl text-center w-full min-w-0 font-semibold text-base sm:text-lg border border-blue-100 dark:border-navy-light/30 backdrop-blur-md">
            {point}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
