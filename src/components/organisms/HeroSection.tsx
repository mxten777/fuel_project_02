import React from "react";
import Button from "../atoms/Button";

const HeroSection = () => (
  <section
    className="w-full min-h-[70vh] grid grid-cols-1 md:flex md:justify-center md:items-center bg-gradient-to-br from-navy via-navy-light to-blue-200 dark:from-navy-dark dark:via-navy dark:to-blue-900 py-10 xs:py-14 sm:py-16 md:py-20 px-2 xs:px-4 sm:px-8 md:px-12 relative overflow-hidden transition-colors duration-500 animate-fadein-up"
    aria-label="스마트 주유소 운영 소개"
  >
    {/* 배경 오버레이 */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-navy/10 to-blue-200/20 dark:from-navy-dark/90 dark:via-navy/80 dark:to-blue-900/60 pointer-events-none z-0 transition-colors duration-500" />
    <div className="w-full max-w-lg xs:max-w-xl sm:max-w-2xl md:max-w-3xl bg-white/90 dark:bg-navy/95 rounded-3xl shadow-2xl flex flex-col items-center p-4 xs:p-6 sm:p-10 md:p-16 gap-4 xs:gap-6 sm:gap-8 border border-blue-100 dark:border-navy/40 relative z-10 backdrop-blur-md transition-colors duration-500 animate-fadein-up">
      <img
        src="/src/assets/ai_iot.png"
        alt="AI·IoT"
        className="w-24 h-24 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 object-contain mb-4 xs:mb-6 drop-shadow-xl bg-white/90 dark:bg-navy/80 rounded-full p-1 xs:p-2 select-none transition-colors duration-500 animate-scalein"
        aria-label="AI IoT 대표 이미지"
      />
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold mb-1 xs:mb-2 sm:mb-4 text-center text-navy dark:text-white tracking-tight leading-tight transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_2px_16px_rgba(0,0,0,0.40)] animate-fadein-down">
        스마트한 주유소 운영의 시작
      </h1>
      <p className="mb-2 xs:mb-3 sm:mb-4 text-base xs:text-lg sm:text-xl md:text-2xl text-center text-navy dark:text-blue-100 font-semibold transition-colors duration-500 animate-fadein">
        (주)창원이엔지 스마트서비스 콘소시움 대표사
      </p>
      <Button
        size="lg"
        className="mb-1 xs:mb-2 w-full sm:w-auto animate-scalein"
        aria-label="지금 확인하기"
      >
        지금 확인하기
      </Button>
    </div>
  </section>
);

export default HeroSection;
