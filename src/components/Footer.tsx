const Footer = () => (
  <footer className="bg-navy-dark text-white py-8 px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <div className="font-bold">(주)창원이엔지</div>
      <div>대표: 오창원 | 사업자등록번호: 110-86-07662</div>
      <div>경기도 성남시 중원구 사기막골로 45번길 14, 502호</div>
      <div>전화: 010-5923-8879</div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <a href="#" className="underline">개인정보처리방침</a>
      <button className="bg-blue-500 px-4 py-2 rounded-full font-semibold mt-2">앱 다운로드</button>
    </div>
  </footer>
);

export default Footer;
