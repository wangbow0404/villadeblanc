import Image from 'next/image';

export default function MembershipSection() {
  return (
    <section
      id="membership-section"
      className="scroll-section w-full bg-gray-50 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center w-full">
        <div className="max-w-3xl mx-auto w-full py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase text-center mb-1 md:mb-2">
            MEMBERSHIP
          </h2>
          <p className="text-center text-gray-600 text-xs md:text-sm mb-12 md:mb-20 lg:mb-24 px-4">
            VB의 특별한 구독혜택
          </p>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
            {/* Left Panel - 6 Months Only */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3]">
              <Image
                src="/assets/images/membership-1.jpg"
                alt="6개월 구독 고객 전용"
                fill
                className="object-cover brightness-110"
                loading="lazy"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow/30 via-yellow/20 to-transparent flex items-center">
                <div className="p-4 md:p-5 lg:p-6 xl:p-8 text-gray-500 relative z-10">
                  <div className="text-[10px] md:text-xs text-gray-600 uppercase mb-0.5 md:mb-1 whitespace-nowrap font-semibold">6 MONTHS ONLY</div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-1.5 whitespace-nowrap text-gray-600">
                    6개월 구독 고객 전용
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-600 mb-1.5 md:mb-2 leading-relaxed whitespace-nowrap font-medium">
                    헤어케어를 위해 준비한 VB의 특별한 혜택을 만나 보실 수 있습니다.
                  </p>
                  <button className="text-gray-600 uppercase underline text-[10px] md:text-xs hover:opacity-80 transition-opacity whitespace-nowrap font-semibold">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - VB Subscription */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[3/2] lg:aspect-[5/3]">
              <Image
                src="/assets/images/membership-2.jpg"
                alt="프리미엄 구독 고객 전용"
                fill
                className="object-cover brightness-125"
                loading="lazy"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/20 flex items-center">
                <div className="p-4 md:p-5 lg:p-6 xl:p-8 text-white relative z-10">
                  <div className="text-[10px] md:text-xs text-white uppercase mb-0.5 md:mb-1 whitespace-nowrap font-medium">VB SUBSCRIPTION</div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-1.5 text-white whitespace-nowrap drop-shadow-lg">
                    프리미엄 구독 고객 전용
                  </h3>
                  <p className="text-[10px] md:text-xs text-white mb-1.5 md:mb-2 leading-relaxed whitespace-nowrap drop-shadow-md">
                    프리미엄 고객에게만 제공되는 VB의 차별화된 혜택을 경험할 수 있습니다.
                  </p>
                  <button className="text-white uppercase underline text-[10px] md:text-xs hover:opacity-80 transition-opacity font-medium whitespace-nowrap drop-shadow-md">
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
