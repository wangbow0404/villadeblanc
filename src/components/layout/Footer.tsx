export default function Footer() {
  return (
    <footer
      id="contact-section"
      className="scroll-section w-full min-h-screen bg-black text-white flex items-start justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          {/* 상단 3컬럼 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* 회사 정보 */}
            <div>
              <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-4">
                COMPANY INFO
              </h3>
              <div className="space-y-1.5 md:space-y-2 text-xs sm:text-sm text-gray-400">
                <p>AYUNCHE</p>
                <p>서울특별시 강남구 논현로 149길 8,</p>
                <p>2층</p>
                <p>(주)빌라드블랑</p>
                <p className="mt-3 md:mt-4">대표이사 : 홍종일</p>
                <p>사업자 등록번호: 165-86-02139</p>
                <p>통신판매업 신고 번호 : 2019-서울용산-1345</p>
              </div>
            </div>

            {/* CS CENTER */}
            <div>
              <h4 className="text-base md:text-lg font-semibold uppercase mb-3 md:mb-4">
                CS CENTER
              </h4>
              <div className="space-y-1.5 md:space-y-2 text-xs sm:text-sm">
                <p className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  080-023-0707
                </p>
                <p className="text-gray-400">운영시간 : 10:00~19:00</p>
                <p className="text-gray-400">휴무일 : 신정, 설연휴, 추석연휴</p>
              </div>
            </div>

            {/* 구매안전서비스 */}
            <div>
              <h4 className="text-base md:text-lg font-semibold uppercase mb-3 md:mb-4">
                구매안전서비스
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 md:mb-4">
                저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통금 거래에 대해
                구매안전서비스를 적용하고 있습니다.
              </p>
              <button className="text-xs sm:text-sm text-gray-400 underline hover:text-white transition-colors">
                가입 사실 확인
              </button>
            </div>
          </div>

          {/* 하단 카피라이트 */}
          <div className="pt-6 md:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
            <p>COPYRIGHT 2024 VB PROFESSIONAL CORP. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
