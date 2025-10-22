import Button from './ui/Button';
import React from 'react';

const CTASection = () => (
  <section className="w-full bg-primary-500 dark:bg-navy-dark text-white">
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">위치 기반 검색 & 멤버십 가입</h2>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button size="lg" variant="primary" className="w-full sm:w-auto">주문 주유소 찾기</Button>
        <Button size="lg" variant="secondary" className="w-full sm:w-auto">멤버십 가입</Button>
      </div>
    </div>
  </section>
);

export default CTASection;
