const reviews = [
  { rating: 5, text: "무인 운영이 정말 편리해요!" },
  { rating: 4, text: "자동 정산으로 시간 절약!" },
  { rating: 5, text: "통합 CRM으로 고객 관리가 쉬워졌어요." },
];

const ReviewSection = () => (
  <section className="py-12 bg-navy text-white w-full flex flex-col items-center">
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8 text-center">고객 후기</h2>
      <div className="flex flex-col md:flex-row gap-3 sm:gap-6 justify-center items-center w-full px-2 sm:px-0">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-navy-dark rounded-xl px-3 sm:px-6 py-3 sm:py-4 shadow-md w-full min-w-0 flex flex-col items-center">
            <div className="flex mb-2">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <span className="text-center">{r.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewSection;
