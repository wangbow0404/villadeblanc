'use client';

import Image from 'next/image';

export default function PartnerSection() {
  // 파트너 매장 로고 데이터
  // 각 매장의 로고 이미지 경로를 여기에 추가하세요
  // 예: { id: 1, name: '강남점', logo: '/assets/images/partners/partner-gangnam.png' }
  const partners = [
    { id: 1, name: '매장 1', logo: '/assets/images/logo.png' },
    { id: 2, name: '매장 2', logo: '/assets/images/logo-2.png' },
    { id: 3, name: '매장 3', logo: '/assets/images/logo.png' },
    { id: 4, name: '매장 4', logo: '/assets/images/logo-2.png' },
    { id: 5, name: '매장 5', logo: '/assets/images/logo.png' },
    { id: 6, name: '매장 6', logo: '/assets/images/logo-2.png' },
    { id: 7, name: '매장 7', logo: '/assets/images/logo.png' },
    { id: 8, name: '매장 8', logo: '/assets/images/logo-2.png' },
  ];

  // 각 줄마다 다른 애니메이션 클래스 (왼쪽-오른쪽-왼쪽-오른쪽-왼쪽)
  const rowClasses = [
    'partner-scroll-1', // 왼쪽
    'partner-scroll-2', // 오른쪽
    'partner-scroll-1', // 왼쪽
    'partner-scroll-2', // 오른쪽
    'partner-scroll-1', // 왼쪽
  ];

  return (
    <section 
      id="partner-section" 
      className="scroll-section w-full bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase text-center mb-4 md:mb-6">
          PARTNERS
        </h2>
        
        {/* 다섯 줄의 무한 스크롤 로고 */}
        <div className="space-y-3 md:space-y-4">
          {rowClasses.map((rowClass, rowIndex) => (
            <div
              key={rowIndex}
              className="relative w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              }}
            >
              <div className={`flex gap-12 md:gap-16 lg:gap-20 ${rowClass}`}>
                {/* 무한 루프를 위해 여러 번 복제 (4번 복제로 충분한 연속성 보장) */}
                {[...Array(4)].map((_, cloneIndex) => (
                  <div key={cloneIndex} className="flex gap-12 md:gap-16 lg:gap-20">
                    {partners.map((partner) => (
                      <div
                        key={`${rowIndex}-${cloneIndex}-${partner.id}`}
                        className="flex-shrink-0 w-56 md:w-64 lg:w-72 h-28 md:h-32 lg:h-36 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 하단 텍스트 */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-500">
            전국 매장에서 VILLA de BLANC을 만나보세요
          </p>
        </div>
      </div>
    </section>
  );
}

