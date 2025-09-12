
import React from "react";
import Card from "../atoms/Card";
import { useSectionInView } from "../../hooks/useSectionInView";

const features = [
  { title: "무인주유", icon: "⛽" },
  { title: "스마트 재고", icon: "📦" },
  { title: "멤버십", icon: "💳" },
  { title: "화상회의 운영", icon: "🎥" },
];

const FeaturesSection = () => {
  const [ref, inView] = useSectionInView();
  return (
    <section ref={ref} className={`py-5 xs:py-7 sm:py-10 md:py-14 bg-gradient-to-b from-navy-dark/90 to-navy-light/80 dark:from-navy-dark/95 dark:to-navy w-full flex flex-col items-center transition-colors duration-500 border-4 border-green-400 relative ${inView ? 'animate-fadein-up' : 'opacity-0 translate-y-8'}`}>
    <div style={{position:'absolute',top:0,left:0,background:'green',color:'#fff',fontWeight:'bold',zIndex:1000,padding:'2px 8px',fontSize:'14px'}}>FeaturesSection</div>
  <div className="w-full max-w-full flex flex-col items-center px-0">
  <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 xs:mb-5 sm:mb-10 text-white drop-shadow-lg tracking-tight leading-tight text-center transition-colors duration-500 animate-fadein-down px-2 xs:px-4">주요 기능</h2>
  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 sm:gap-6 md:gap-8 w-full px-2 xs:px-4">
        {features.map((f, idx) => (
          <React.Fragment key={idx}>
            <Card
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              tabIndex={0}
              animation="animate-scalein"
              icon={<span className="text-2xl xs:text-3xl sm:text-5xl mb-1 xs:mb-2 sm:mb-3 drop-shadow-lg">{f.icon}</span>}
            >
              <span className="font-bold text-sm xs:text-base sm:text-xl md:text-2xl drop-shadow text-center">{f.title}</span>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>

    </section>
  );
};

export default FeaturesSection;
