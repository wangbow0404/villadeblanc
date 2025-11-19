'use client';

import { useState, useEffect } from 'react';

export default function DesignerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/assets/images/designer-1.jpeg',
      bgColor: 'from-gray-200 to-gray-300',
      instagramUrl: 'https://www.instagram.com/_______hji/',
      naverReservationUrl: 'https://naver.me/FtGykcUQ',
    },
    {
      id: 2,
      image: '/assets/images/designer-2.jpeg',
      bgColor: 'from-gray-300 to-gray-400',
      instagramUrl: 'https://www.instagram.com/_imjinju._/',
      naverReservationUrl: 'https://naver.me/xAFbb9uH',
    },
    {
      id: 3,
      image: '/assets/images/designer-3.jpeg',
      bgColor: 'from-gray-400 to-gray-500',
      instagramUrl: 'https://www.instagram.com/syoung.ww/',
      naverReservationUrl: 'https://naver.me/5xaWZhJ1',
    },
    {
      id: 4,
      image: '/assets/images/designer-4.jpeg',
      bgColor: 'from-gray-500 to-gray-600',
      instagramUrl: 'https://www.instagram.com/designer4/',
      naverReservationUrl: 'https://booking.naver.com/booking/designer4',
    },
    {
      id: 5,
      image: '/assets/images/designer-5.jpeg',
      bgColor: 'from-gray-600 to-gray-700',
      instagramUrl: 'https://www.instagram.com/designer5/',
      naverReservationUrl: 'https://booking.naver.com/booking/designer5',
    },
    {
      id: 6,
      image: '/assets/images/designer-6.jpeg',
      bgColor: 'from-gray-700 to-gray-800',
      instagramUrl: 'https://www.instagram.com/designer6/',
      naverReservationUrl: 'https://booking.naver.com/booking/designer6',
    },
    {
      id: 7,
      image: '/assets/images/designer-7.jpeg',
      bgColor: 'from-gray-800 to-gray-900',
      instagramUrl: 'https://www.instagram.com/designer7/',
      naverReservationUrl: 'https://booking.naver.com/booking/designer7',
    },
    {
      id: 8,
      image: '/assets/images/designer-8.jpeg',
      bgColor: 'from-gray-900 to-gray-950',
      instagramUrl: 'https://www.instagram.com/designer8/',
      naverReservationUrl: 'https://booking.naver.com/booking/designer8',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 변경

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // 현재 슬라이드의 디자이너 정보
  const currentDesigner = slides[currentSlide];

  return (
    <section
      id="designer-section"
      className="scroll-section w-full h-screen bg-white relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-[60%_40%] relative">
        {/* Left Section - Image Carousel */}
        <div className="relative w-full h-[60%] lg:h-full overflow-hidden bg-white">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-white"
                  style={{
                    backgroundImage: slide.image && slide.image.includes('.jpeg') 
                      ? `url(${slide.image})` 
                      : undefined,
                    backgroundPosition: 'center 30%',
                    backgroundSize: 'cover',
                  }}
                >
                  {(!slide.image || !slide.image.includes('.jpeg')) && (
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Designer Image {slide.id}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full flex-1 lg:h-full bg-orange-300 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center py-2 md:py-2 lg:py-0">
          <div className="flex flex-col space-y-1 md:space-y-2 lg:space-y-6 text-white w-full">
            {/* Social Media Links - 모바일에서 가장 위에 표시, 데스크톱에서는 아래 */}
            <div className="flex items-center space-x-3 md:space-x-4 order-first lg:order-4 mb-2 lg:mb-0 lg:mt-8">
              {/* Instagram */}
              <a
                href={currentDesigner.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-purple-100 transition-all duration-300 hover:scale-110"
                aria-label="인스타그램"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Naver Reservation */}
              <a
                href={currentDesigner.naverReservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-100 transition-all duration-300 hover:scale-110"
                aria-label="네이버 예약하기"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
            </div>
            
            <div className="text-xs md:text-sm uppercase tracking-wider opacity-80 order-1 lg:order-0">
              DESIGNERS
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight leading-tight order-2">
              <span className="block">EXPERT</span>
              <span className="block">TEAM</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90 line-clamp-2 order-3">
              VILLA de BLANC의 전문 헤어디자이너들을 만나 보세요.
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 md:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1.5 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-5 md:w-6 lg:w-8' : 'bg-white/50 w-1.5 md:w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
