import React from "react";
import Button from "../atoms/Button";
import { useSectionInView } from "../../hooks/useSectionInView";


const HeroSection = () => {
  const [ref, inView] = useSectionInView();
  return (
    <section
      ref={ref}
      className={`w-full min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-navy via-navy-light to-blue-200 dark:from-navy-dark dark:via-navy dark:to-blue-900 py-6 xs:py-8 sm:py-12 md:py-16 relative transition-colors duration-500 border-4 border-red-400 ${inView ? 'animate-fadein-up' : 'opacity-0 translate-y-8'}`}
      aria-label="스마트 주유소 운영 소개"
    >
      <div style={{position:'absolute',top:0,left:0,background:'red',color:'#fff',fontWeight:'bold',zIndex:1000,padding:'2px 8px',fontSize:'14px'}}>HeroSection</div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-navy/10 to-blue-200/20 dark:from-navy-dark/90 dark:via-navy/80 dark:to-blue-900/60 pointer-events-none z-0 transition-colors duration-500" />
      <div className="w-full max-w-full flex flex-col items-center p-0 gap-3 xs:gap-4 sm:gap-6 md:gap-8 relative z-10">
        <img
          src="/images/baikal_logo.png"
          alt="Baikal Logo"
          className="w-20 h-20 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-contain mb-3 xs:mb-5 sm:mb-8 drop-shadow-xl bg-white/90 dark:bg-navy/80 rounded-full p-1 xs:p-2 select-none transition-colors duration-500 animate-scalein"
          aria-label="Baikal 로고"
        />
        <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-6xl font-extrabold mb-1 xs:mb-2 sm:mb-4 text-center text-navy dark:text-white tracking-tight leading-tight transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_2px_16px_rgba(0,0,0,0.40)] animate-fadein-down px-2 xs:px-4">
          스마트한 주유소 운영의 시작
        </h1>
        <p className="mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base sm:text-xl md:text-2xl text-center text-navy dark:text-blue-100 font-semibold transition-colors duration-500 animate-fadein px-2 xs:px-4">
          (주)창원이엔지 스마트서비스 콘소시움 대표사
        </p>
        <Button
          size="lg"
          className="mb-1 xs:mb-2 w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg animate-scalein text-base xs:text-lg sm:text-xl"
          aria-label="지금 확인하기"
        >
          지금 확인하기
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
