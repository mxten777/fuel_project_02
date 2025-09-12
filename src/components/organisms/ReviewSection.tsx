
import React from "react";
import Card from "../atoms/Card";
import { useSectionInView } from "../../hooks/useSectionInView";

const reviews = [
  { rating: 5, text: "무인 운영이 정말 편리해요!" },
  { rating: 4, text: "자동 정산으로 시간 절약!" },
  { rating: 5, text: "통합 CRM으로 고객 관리가 쉬워졌어요." },
];

const ReviewSection = () => {
  const [ref, inView] = useSectionInView();
  return (
    <section ref={ref} className={`py-6 bg-navy dark:bg-navy-dark text-white w-full flex flex-col items-center transition-colors duration-500 border-4 border-blue-400 relative ${inView ? 'animate-fadein-up' : 'opacity-0 translate-y-8'}`}>
    <div style={{position:'absolute',top:0,left:0,background:'blue',color:'#fff',fontWeight:'bold',zIndex:1000,padding:'2px 8px',fontSize:'14px'}}>ReviewSection</div>
    <div className="w-full flex flex-col items-center px-0">
  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8 text-center transition-colors duration-500 animate-fadein-down">고객 후기</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center items-center w-full">
        {reviews.map((r, idx) => (
          <React.Fragment key={idx}>
            <Card
              className=""
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              tabIndex={0}
              animation="animate-scalein"
            >
              <div className="flex mb-1 xs:mb-2">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base xs:text-lg sm:text-xl">★</span>
                ))}
              </div>
              <span className="text-center text-sm xs:text-base sm:text-lg">{r.text}</span>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>

    </section>
  );
};

export default ReviewSection;
