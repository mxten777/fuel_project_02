import React from "react";
import Card from "../atoms/Card";

const features = [
  { title: "무인주유", icon: "⛽" },
  { title: "스마트 재고", icon: "📦" },
  { title: "멤버십", icon: "💳" },
  { title: "화상회의 운영", icon: "🎥" },
];

const FeaturesSection = () => (
  <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-b from-navy-dark/90 to-navy-light/80 dark:from-navy-dark/95 dark:to-navy w-full flex flex-col items-center transition-colors duration-500 animate-fadein-up">
  <div className="w-full max-w-md xs:max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto flex flex-col items-center px-2 xs:px-4 sm:px-8 md:px-0">
  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 xs:mb-6 sm:mb-10 text-white drop-shadow-lg tracking-tight leading-tight text-center transition-colors duration-500 animate-fadein-down">주요 기능</h2>
  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 sm:gap-6 md:gap-8 w-full">
        {features.map((f, idx) => (
          <React.Fragment key={idx}>
            <Card
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              tabIndex={0}
              animation="animate-scalein"
              icon={<span className="text-3xl xs:text-4xl sm:text-5xl mb-2 xs:mb-3 drop-shadow-lg">{f.icon}</span>}
            >
              <span className="font-bold text-base xs:text-lg sm:text-xl md:text-2xl drop-shadow text-center">{f.title}</span>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
