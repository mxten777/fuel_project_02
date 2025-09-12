import React from "react";

const Footer = () => (
  <footer className="w-full py-5 px-3 bg-navy-dark dark:bg-navy/95 text-white text-center text-xs sm:text-sm border-t border-blue-100 dark:border-navy/40 transition-colors duration-500 animate-fadein-up flex-shrink-0 relative md:pb-0 pb-[80px]">
    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      <div className="flex flex-col items-start text-left gap-0.5">
        <span className="font-bold text-base sm:text-lg text-yellow-200">(주)창원이엔지</span>
        <span className="text-xs sm:text-sm text-blue-100">대표: 오창원 | 사업자등록번호: 110-86-07662</span>
        <span className="text-xs sm:text-sm text-blue-100">경기도 성남시 중원구 사기막골로 45번길 14, 502호</span>
        <span className="text-xs sm:text-sm text-blue-100">전화: 010-5923-8879</span>
        <a href="#" className="underline text-xs sm:text-sm text-blue-200 hover:text-yellow-200 mt-1">개인정보처리방침</a>
      </div>
      <div className="flex flex-col items-center gap-1">
  <img src="/baikal_logo.png" alt="BAIKAL AI Logo" className="w-12 h-12 object-contain rounded shadow bg-white p-1" onError={e => { e.currentTarget.style.display = 'none'; }} />
        <span className="text-xs text-blue-100">© 2025 Changwon ENG Smart Service Consortium.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
