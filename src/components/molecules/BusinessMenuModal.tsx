import React from "react";
import Modal from "../atoms/Modal";

const menuData = [
  {
    title: '운영관리', color: 'bg-gradient-to-br from-green-100 via-green-50 to-white dark:from-green-900 dark:via-navy-dark dark:to-navy', items: ['일반결제', '간편결제', '무인세차관리', '설비이력관리', '설비수리관리', '포인트적립', '전자영수증관리', '리워드관리', '고객만족도관리', '모듈오션관리']
  },
  {
    title: '매출정산', color: 'bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-navy-dark dark:to-navy', items: ['매출 관리', '매입 관리', '외상매출금 관리', '미수금 관리', '거래명세표 관리', '세금계산서 관리', '매출 자동집계', '마감관리(일/월)', '정산관리(정유사/카드사)']
  },
  {
    title: '재고관리', color: 'bg-gradient-to-br from-cyan-100 via-cyan-50 to-white dark:from-cyan-900 dark:via-navy-dark dark:to-navy', items: ['발주 관리', '입고 관리', '적정재고', '재고실사', '재고조정', '일계표', '재고현황(일/월)', '유류탱크 관리', '탱크 모니터링']
  },
  {
    title: '통계', color: 'bg-gradient-to-br from-yellow-100 via-yellow-50 to-white dark:from-yellow-900 dark:via-navy-dark dark:to-navy', items: ['리포트 자동생성기', '실시간 대시보드', '매출현황', '매입현황', '매출매입추이', '통합재고현황', '경신현황(정유사/카드사)', '손익현황(통합)']
  },
  {
    title: '기준정보', color: 'bg-gradient-to-br from-lime-100 via-lime-50 to-white dark:from-lime-900 dark:via-navy-dark dark:to-navy', items: ['코드마스터 관리', '메뉴 관리', '권한 관리', '시스템 로그', '시스템 설정', '주유기 인터페이스', '세차장 인터페이스', '세차기 모니터링']
  },
  {
    title: '공동활용', color: 'bg-gradient-to-br from-orange-100 via-orange-50 to-white dark:from-orange-900 dark:via-navy-dark dark:to-navy', items: ['통합고객 관리', '공동마케팅관리', '멤버십관리', '긴급정보 공유관리', '공급망 연동관리', '통합상태 대시보드', '알람 로그, 예측 리포트']
  },
];

const BusinessMenuModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Modal open={open} onClose={onClose} animation="animate-scalein" aria-label="업무 메뉴 모달">
      <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-10 text-center text-navy dark:text-white drop-shadow animate-fadein-down" aria-label="업무 메뉴 제목">
        업무 메뉴
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-6 sm:gap-8 w-full animate-fadein-up">
        {menuData.map((menu, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-2 xs:p-4 sm:p-6 shadow-lg border border-blue-100 dark:border-navy/40 flex flex-col items-center ${menu.color} transition-all hover:scale-[1.03] animate-scalein`}
            tabIndex={0}
            aria-label={menu.title}
          >
            <div className="font-bold mb-2 xs:mb-3 sm:mb-4 text-base xs:text-lg sm:text-xl text-navy dark:text-white text-center drop-shadow">
              {menu.title}
            </div>
            <ul className="space-y-1 xs:space-y-2 w-full">
              {menu.items.map((item, i) => (
                <li key={i}>
                  <button
                    className="w-full text-center px-2 xs:px-3 py-1 xs:py-2 rounded-lg bg-white/70 dark:bg-navy/60 text-navy dark:text-white shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition font-medium border border-blue-50 dark:border-navy/30 text-xs xs:text-sm sm:text-base animate-fadein"
                    aria-label={item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default BusinessMenuModal;
