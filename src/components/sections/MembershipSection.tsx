import Image from 'next/image';

export default function MembershipSection() {
  return (
    <section id="membership-section" className="scroll-section w-full min-h-screen bg-gray-50 flex items-center justify-center pt-4 md:pt-8 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center w-full">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black uppercase text-center mb-1 md:mb-2">
            MEMBERSHIP
          </h2>
          <p className="text-center text-gray-600 text-xs md:text-sm mb-4 md:mb-6 px-4">
            VB의 특별한 구독혜택
          </p>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-4">
            {/* Left Panel - 6 Months Only */}
            <div className="relative overflow-hidden rounded-lg aspect-[5/3] md:aspect-[4/3]">
              <Image
                src="/assets/images/membership-1.jpg"
                alt="6개월 구독 고객 전용"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
                <div className="p-3 md:p-4 lg:p-6 text-white relative z-10">
                  <div className="text-[10px] md:text-xs text-gray-300 uppercase mb-1">6 MONTHS ONLY</div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2">
                    6개월 구독 고객 전용
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-200 mb-2 md:mb-3 leading-relaxed">
                    헤어케어를 위해 준비한 VB의 특별한 혜택을 만나 보실 수 있습니다.
                  </p>
                  <button className="text-white uppercase underline text-[10px] md:text-xs hover:opacity-80 transition-opacity">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - VB Subscription */}
            <div className="relative overflow-hidden rounded-lg aspect-[5/3] md:aspect-[4/3]">
              <Image
                src="/assets/images/membership-2.jpg"
                alt="프리미엄 구독 고객 전용"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
                <div className="p-3 md:p-4 lg:p-6 text-white relative z-10">
                  <div className="text-[10px] md:text-xs text-gray-300 uppercase mb-1">VB SUBSCRIPTION</div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2">
                    프리미엄 구독 고객 전용
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-200 mb-2 md:mb-3 leading-relaxed">
                    프리미엄 고객에게만 제공되는 VB의 차별화된 혜택을 경험할 수 있습니다.
                  </p>
                  <button className="text-white uppercase underline text-[10px] md:text-xs hover:opacity-80 transition-opacity">
                    카카오톡 상담하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
