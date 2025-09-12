import FooterDownloadButton from "./FooterDownloadButton";

const Footer = () => (
  <footer
  className="bg-navy-dark dark:bg-navy/95 text-white py-6 xs:py-8 sm:py-10 px-2 xs:px-4 sm:px-8 w-full flex flex-col sm:flex-row justify-between items-center gap-4 xs:gap-6 sm:gap-8 transition-colors duration-500 animate-fadein-up border-4 border-pink-400 relative z-50 mt-auto pb-[80px] md:pb-0"
    aria-label="사이트 정보 및 앱 다운로드"
    style={{ position: 'relative', zIndex: 50 }}
  >
    <div className="absolute left-2 top-2 text-pink-400 text-xs font-bold z-50" style={{ pointerEvents: 'none' }}>Footer</div>
  <div className="mb-2 xs:mb-4 sm:mb-0 text-sm xs:text-base sm:text-lg text-white dark:text-blue-100 transition-colors duration-500 animate-fadein">
      <div className="font-bold text-base xs:text-lg sm:text-xl">(주)창원이엔지</div>
      <div>대표: 오창원 | 사업자등록번호: 110-86-07662</div>
      <div>경기도 성남시 중원구 사기막골로 45번길 14, 502호</div>
      <div>전화: 010-5923-8879</div>
    </div>
    <div className="flex flex-col items-center gap-1 xs:gap-2 animate-fadein-up">
      <a
        href="#"
        className="underline text-xs xs:text-sm sm:text-base text-white dark:text-blue-100 transition-colors duration-500 hover:text-pink-300 focus:text-pink-400"
        aria-label="개인정보처리방침"
      >
        개인정보처리방침
      </a>
      <FooterDownloadButton />
    </div>
  </footer>
);

export default Footer;
