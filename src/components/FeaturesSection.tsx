import React from 'react';
import Card from './atoms/Card';

const features = [
  { title: '무인주유', icon: '⛽' },
  { title: '스마트 재고', icon: '📦' },
  { title: '멤버십', icon: '💳' },
  { title: '통합 리포트', icon: '📊' },
];

const FeaturesSection = () => (
  <section className="w-full bg-gradient-to-b from-navy-dark/90 to-navy-light/80 dark:from-navy-dark/95 dark:to-navy">
    <div className="container mx-auto px-4 py-10 sm:py-14 md:py-18">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-white text-center">주요 기능</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {features.map((f, idx) => (
          <Card key={idx} className="p-5 text-center" style={{ animationDelay: `${0.08 + idx * 0.06}s` }} tabIndex={0}>
            <div className="text-4xl mb-3">{f.icon}</div>
            <div className="font-semibold text-lg text-white">{f.title}</div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
