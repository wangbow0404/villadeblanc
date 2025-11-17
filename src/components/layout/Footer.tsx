export default function Footer() {
  return (
    <footer id="contact-section" className="scroll-section w-full min-h-screen bg-black text-white pt-8 md:pt-12 pb-6 md:pb-8 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-4">COMPANY INFO</h3>
              <div className="space-y-1.5 md:space-y-2 text-xs sm:text-sm text-gray-400">
                <p>AYUNCHE</p>
                <p>서울특별시 용산구 한강대로 100</p>
                <p>(한강로2가) 아모레퍼시픽 16층</p>
                <p>(주)아모스프로페셔널</p>
                <p className="mt-3 md:mt-4">대표이사 : 권오창</p>
                <p>사업자 등록번호: 135-81-11122</p>
                <p>통신판매업 신고 번호 : 2019-서울용산-1345</p>
              </div>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold uppercase mb-3 md:mb-4">CS CENTER</h4>
              <div className="space-y-1.5 md:space-y-2 text-xs sm:text-sm">
                <p className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">080-023-0707</p>
                <p className="text-gray-400">운영시간 : 09:00~18:00</p>
                <p className="text-gray-400">점심시간 : 12:00~13:00</p>
                <p className="text-gray-400">휴무일 : 토요일, 일요일, 공휴일</p>
              </div>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold uppercase mb-3 md:mb-4">구매안전서비스</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 md:mb-4">
                저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통금 거래에 대해 구매안전서비스를 적용하고 있습니다.
              </p>
              <button className="text-xs sm:text-sm text-gray-400 underline hover:text-white transition-colors">
                가입 사실 확인
              </button>
            </div>
          </div>
          <div className="pt-6 md:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
            <p>COPYRIGHT 2024 AMOS PROFESSIONAL CORP. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
