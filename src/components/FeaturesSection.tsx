
const features = [
  { title: "무인주유", icon: "⛽" },
  { title: "스마트 재고", icon: "📦" },
  { title: "멤버십", icon: "💳" },
  { title: "화상회의 운영", icon: "🎥" },
];

const FeaturesSection = () => (
  <section className="py-16 bg-gradient-to-b from-navy-dark/90 to-navy-light/80 dark:from-navy-dark dark:to-navy w-full flex flex-col items-center">
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-white drop-shadow-lg tracking-tight">주요 기능</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 w-full">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white/80 dark:bg-navy/80 text-navy dark:text-white rounded-2xl p-3 sm:p-8 shadow-xl border border-blue-100 dark:border-navy-light/30 backdrop-blur-md min-w-0 w-full max-w-xs mx-auto">
            <span className="text-5xl mb-3 drop-shadow-lg">{f.icon}</span>
            <span className="font-bold text-xl md:text-2xl drop-shadow">{f.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
