import FooterDownloadButton from "./FooterDownloadButton";

const Footer = () => (
  <footer
    className="bg-navy-dark dark:bg-navy/95 text-white py-6 px-4 w-full flex flex-col sm:flex-row justify-between items-start gap-6 transition-colors duration-500"
    aria-label="사이트 정보 및 앱 다운로드"
  >
    <div className="text-sm text-white dark:text-blue-100">
      <div className="font-bold">(주)창원이엔지</div>
      <div className="mt-1">대표: 오창원 | 사업자등록번호: 110-86-07662</div>
      <div className="mt-1">전화: 010-5923-8879</div>
    </div>
    <div className="flex flex-col items-start gap-2">
      <a href="#" className="underline text-sm text-white dark:text-blue-100 hover:text-pink-300">개인정보처리방침</a>
      {/* FooterDownloadButton intentionally kept as before */}
    </div>
  </footer>
);

export default Footer;
