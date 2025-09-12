
import React from "react";
import Button from "../atoms/Button";
import { useSectionInView } from "../../hooks/useSectionInView";

const CTASection = () => {
  const [ref, inView] = useSectionInView();
  return (
    <section ref={ref} className={`py-6 bg-blue-600 dark:bg-navy-dark text-white flex flex-col items-center w-full transition-colors duration-500 border-4 border-yellow-400 relative ${inView ? 'animate-fadein-up' : 'opacity-0 translate-y-8'}`}>
    <div style={{position:'absolute',top:0,left:0,background:'orange',color:'#fff',fontWeight:'bold',zIndex:1000,padding:'2px 8px',fontSize:'14px'}}>CTASection</div>
    <div className="w-full flex flex-col items-center px-0">
  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 text-center transition-colors duration-500 animate-fadein-down">위치 기반 검색 & 멤버십 가입</h2>
  <div className="flex flex-col xs:flex-row gap-0 w-full h-full justify-center items-center">
  <Button size="lg" variant="primary" className="w-full xs:w-auto animate-scalein">주변 주유소 찾기</Button>
  <Button size="lg" variant="secondary" className="w-full xs:w-auto animate-scalein">멤버십 가입</Button>
      </div>
    </div>

    </section>
  );
};

export default CTASection;
