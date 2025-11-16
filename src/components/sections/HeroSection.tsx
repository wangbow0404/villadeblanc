'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: '/assets/images/villa-de-blanc-1.jpg', // VILLA de BLANC 건물 전경
      bgColor: 'from-blue-50 to-gray-50',
      title: 'VILLA de BLANC',
      text: [
        'K-뷰티의 섬세함으로',
        '세계가 신뢰하는 아름다움의 기준을 완성하다.',
        '“The Standard of K-Beauty.”',
      ],
    },
    {
      id: 2,
      image: '/assets/images/villa-de-blanc-2.jpg', // VILLA de BLANC 건물 다른 각도
      bgColor: 'from-stone-50 to-gray-50',
      title: 'VILLA de BLANC',
      text: [
        'K-뷰티의 섬세함으로',
        '세계가 신뢰하는 아름다움의 기준을 완성하다.',
        '“The Standard of K-Beauty.”',
      ],
    },
    {
      id: 3,
      image: '/assets/images/villa-de-blanc-3.jpg', // VILLA de BLANC 내부 또는 다른 각도
      bgColor: 'from-gray-50 to-blue-50',
      title: 'VILLA de BLANC',
      text: [
        'K-뷰티의 섬세함으로',
        '세계가 신뢰하는 아름다움의 기준을 완성하다.',
        '“The Standard of K-Beauty.”',
      ],
    },
    {
      id: 4,
      image: '/assets/images/villa-de-blanc-4.jpg', // VILLA de BLANC 야외 공간 또는 다른 각도
      bgColor: 'from-gray-50 to-stone-50',
      title: 'VILLA de BLANC',
      text: [
        'K-뷰티의 섬세함으로',
        '세계가 신뢰하는 아름다움의 기준을 완성하다.',
        '“The Standard of K-Beauty.”',
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 변경

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="brand-section" className="scroll-section relative w-full min-h-screen bg-gray-100 flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background Images with Fade Effect */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image or Placeholder */}
            <div
              className={`w-full h-full bg-cover bg-center bg-no-repeat bg-gradient-to-r ${slide.bgColor}`}
              style={{
                backgroundImage: slide.image && slide.image.includes('.jpg') 
                  ? `url(${slide.image})` 
                  : undefined,
              }}
            >
              {/* Overlay for better text readability - 건물 사진에 맞게 조정 */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-transparent"></div>
              
              {/* Placeholder text if image doesn't exist */}
              {(!slide.image || !slide.image.includes('.jpg')) && (
                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${slide.bgColor}`}>
                  <span className="text-gray-500 text-sm">VILLA de BLANC Image {slide.id}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-12 md:py-0">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white uppercase tracking-tight leading-tight">
              {slides[currentSlide].title}
            </h1>
            <div className="space-y-2 md:space-y-4 text-white text-sm sm:text-base md:text-lg leading-relaxed">
              {slides[currentSlide].text.map((line, idx) => (
                <p 
                  key={idx}
                  className={line.includes('The Standard of K-Beauty') 
                    ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold' 
                    : ''
                  }
                >
                  {line}
                </p>
              ))}
            </div>
            <button className="mt-4 md:mt-8 text-white uppercase underline text-xs sm:text-sm md:text-base hover:opacity-80 transition-opacity">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
