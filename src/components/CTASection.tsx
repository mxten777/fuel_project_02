// Moved to ../organisms/CTASection.tsx
import Button from "./ui/Button";

const CTASection = () => (
  <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-blue-600 dark:bg-navy-dark text-white flex flex-col items-center w-full transition-colors duration-500">
  <div className="w-full max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-center px-2 xs:px-4 sm:px-8 md:px-0">
  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 text-center transition-colors duration-500">위치 기반 검색 & 멤버십 가입</h2>
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 w-full justify-center items-center">
  <Button size="lg" variant="primary" className="w-full xs:w-auto animate-fadein">주변 주유소 찾기</Button>
  <Button size="lg" variant="secondary" className="w-full xs:w-auto animate-fadein">멤버십 가입</Button>
      </div>
    </div>
  </section>
);

export default CTASection;
