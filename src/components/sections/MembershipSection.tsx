export default function MembershipSection() {
  return (
    <section id="membership-section" className="scroll-section w-full min-h-screen bg-gray-50 flex items-center py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center w-full">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase text-center mb-2 md:mb-4">
            MEMBERSHIP
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12 lg:mb-16 px-4">
            아윤채의 특별한 회원혜택
          </p>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Panel - Designer Only */}
            <div className="bg-white p-6 md:p-8 lg:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs md:text-sm text-gray-500 uppercase mb-2">DESIGNER ONLY</div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4">
                  디자이너 고객 전용
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  디자이너만을 위해 준비한 아윤채의 특별한 혜택을 만나 보실 수 있습니다.
                </p>
                <button className="text-black uppercase underline text-xs sm:text-sm md:text-base hover:opacity-80 transition-opacity">
                  VIEW MORE
                </button>
              </div>
              {/* Background Product Images */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              </div>
            </div>

            {/* Right Panel - Ayunche Membership */}
            <div className="bg-white p-6 md:p-8 lg:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs md:text-sm text-gray-500 uppercase mb-2">AYUNCHE MEMBERSHIP</div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4">
                  프리미엄 살롱 전용
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  프리미엄 살롱에게만 제공되는 아윤채의 차별화된 혜택을 경험할 수 있습니다.
                </p>
                <button className="text-black uppercase underline text-xs sm:text-sm md:text-base hover:opacity-80 transition-opacity">
                  카카오톡 상담하기
                </button>
              </div>
              {/* Background Envelope Graphic */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
                <div className="w-full h-full bg-gray-400 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
