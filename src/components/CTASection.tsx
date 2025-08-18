const CTASection = () => (
  <section className="py-12 bg-blue-600 text-white flex flex-col items-center w-full">
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">위치 기반 검색 & 멤버십 가입</h2>
      <div className="flex gap-4">
        <button className="bg-navy px-6 py-3 rounded-full font-semibold hover:bg-navy-dark transition">주변 주유소 찾기</button>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">멤버십 가입</button>
      </div>
    </div>
  </section>
);

export default CTASection;
