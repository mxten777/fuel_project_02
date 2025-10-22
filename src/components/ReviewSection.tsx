import React from 'react';
import Card from './atoms/Card';

const reviews = [
  { rating: 5, text: '무인 운영이 정말 편리해요!' },
  { rating: 4, text: '자동 결제로 시간 절약!' },
  { rating: 5, text: '통합 CRM으로 고객 관리가 잘되었어요.' },
];

const ReviewSection = () => (
  <section className="w-full bg-navy dark:bg-navy-dark text-white">
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">고객 후기</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, idx) => (
          <Card key={idx} className="p-4 rounded-lg bg-navy-dark dark:bg-navy/80" style={{ animationDelay: `${0.08 + idx * 0.06}s` }} tabIndex={0}>
            <div className="mb-2">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 mr-0.5">★</span>
              ))}
            </div>
            <p className="text-sm md:text-base text-white">{r.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewSection;
