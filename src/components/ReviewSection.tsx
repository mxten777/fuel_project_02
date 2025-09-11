// Moved to ../organisms/ReviewSection.tsx
import React from "react";
import Card from "./atoms/Card";

const reviews = [
  { rating: 5, text: "무인 운영이 정말 편리해요!" },
  { rating: 4, text: "자동 정산으로 시간 절약!" },
  { rating: 5, text: "통합 CRM으로 고객 관리가 쉬워졌어요." },
];

const ReviewSection = () => (
  <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-navy dark:bg-navy-dark text-white w-full flex flex-col items-center transition-colors duration-500">
  <div className="w-full max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-center px-2 xs:px-4 sm:px-8 md:px-0">
  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8 text-center transition-colors duration-500">고객 후기</h2>
      <div className="flex flex-col md:flex-row gap-2 xs:gap-3 sm:gap-6 justify-center items-center w-full">
        {reviews.map((r, idx) => (
          <React.Fragment key={idx}>
            <Card
              className="bg-navy-dark dark:bg-navy/80 rounded-xl px-2 xs:px-3 sm:px-6 py-2 xs:py-3 sm:py-4 shadow-md w-full min-w-0 flex flex-col items-center animate-fadein hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl"
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              tabIndex={0}
            >
              <div className="flex mb-1 xs:mb-2">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base xs:text-lg sm:text-xl">★</span>
                ))}
              </div>
              <span className="text-center text-sm xs:text-base sm:text-lg text-white dark:text-blue-100 transition-colors duration-500">{r.text}</span>
            </Card>
          </React.Fragment>
        ))}
import React from "react";
import Card from "./ui/Card";
      </div>
    </div>
  </section>
);

export default ReviewSection;
