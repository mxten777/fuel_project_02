const cardImages = [
  '/src/assets/feature_card1.png',
  '/src/assets/feature_card2.png',
  '/src/assets/feature_card3.png',
  '/src/assets/feature_card4.png',
];

const cardColors = [
  'bg-white/80 dark:bg-navy-light/80',
  'bg-blue-50 dark:bg-blue-900/60',
  'bg-cyan-50 dark:bg-cyan-900/60',
  'bg-indigo-50 dark:bg-indigo-900/60',
];

const BusinessMenuPage = ({ title, items }: { title: string; items: string[] }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-navy via-navy-light to-blue-200 dark:from-navy-dark dark:via-navy dark:to-blue-900">
    <h1 className="text-3xl md:text-5xl font-bold text-white mb-10 drop-shadow-lg text-center">{title}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-5 rounded-2xl shadow-xl border border-blue-100 dark:border-navy px-6 py-5 hover:scale-[1.03] transition-transform ${cardColors[idx % cardColors.length]}`}
        >
          <img src={cardImages[idx % cardImages.length]} alt={item} className="w-16 h-16 object-contain rounded-lg bg-white/60 shadow" />
          <span className="text-lg font-semibold text-navy dark:text-white text-center flex-1">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BusinessMenuPage;
