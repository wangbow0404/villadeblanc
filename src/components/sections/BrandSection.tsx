'use client';

import { useState, useEffect } from 'react';

export default function BrandSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/assets/images/brand-1.jpg',
      bgColor: 'from-gray-200 to-gray-300',
      title: 'PRO LINE',
      subtitle: 'PRO ART VIBE',
      description: '파스텔 컬러를 완성하는 프리미엄 염모제를 경험해보세요.',
    },
    {
      id: 2,
      image: '/assets/images/brand-2.jpg',
      bgColor: 'from-gray-300 to-gray-400',
      title: 'PRO LINE',
      subtitle: 'PRO ART VIBE',
      description: '파스텔 컬러를 완성하는 프리미엄 염모제를 경험해보세요.',
    },
    {
      id: 3,
      image: '/assets/images/brand-3.jpg',
      bgColor: 'from-gray-400 to-gray-500',
      title: 'PRO LINE',
      subtitle: 'PRO ART VIBE',
      description: '파스텔 컬러를 완성하는 프리미엄 염모제를 경험해보세요.',
    },
    {
      id: 4,
      image: '/assets/images/brand-4.jpg',
      bgColor: 'from-gray-500 to-gray-600',
      title: 'PRO LINE',
      subtitle: 'PRO ART VIBE',
      description: '파스텔 컬러를 완성하는 프리미엄 염모제를 경험해보세요.',
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

  return (
    <section
      id="brand-section"
      className="scroll-section w-full min-h-screen bg-white flex items-center relative overflow-hidden"
    >
      <div className="w-full h-screen flex relative">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0 w-full h-full">
          {/* Left Section - Image Carousel */}
          <div className="relative w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div
                  className={`w-full h-full bg-cover bg-center bg-no-repeat bg-gradient-to-r ${slide.bgColor}`}
                  style={{
                    backgroundImage: slide.image && slide.image.includes('.jpg') 
                      ? `url(${slide.image})` 
                      : undefined,
                  }}
                >
                  {(!slide.image || !slide.image.includes('.jpg')) && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Brand Image {slide.id}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full h-full bg-gray-800 px-8 md:px-12 lg:px-16 flex items-center">
            <div className="space-y-6 text-white">
              <div className="text-sm uppercase tracking-wider opacity-80">
                {slides[currentSlide].title}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight">
                {slides[currentSlide].subtitle.split(' ').map((word, idx) => (
                  <span key={idx} className="block">
                    {word}
                  </span>
                ))}
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {slides[currentSlide].description}
              </p>
              <button className="mt-8 text-white uppercase underline text-sm md:text-base hover:opacity-80 transition-opacity">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>

        {/* Left Arrow - 전체 섹션의 왼쪽 끝 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-gray-800"
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

        {/* Right Arrow - 전체 섹션의 오른쪽 끝 */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-gray-800"
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

        {/* Pagination Dots - 전체 섹션의 하단 중앙 */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
