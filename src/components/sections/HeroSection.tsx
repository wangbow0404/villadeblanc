'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const slides = [
    {
      id: 1,
      image: '/assets/images/villa-de-blanc-1.jpg',
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
      image: '/assets/images/villa-de-blanc-2.jpg',
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
      image: '/assets/images/villa-de-blanc-3.jpg',
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
      image: '/assets/images/villa-de-blanc-4.jpeg',
      bgColor: 'from-gray-50 to-stone-50',
      title: 'VILLA de BLANC',
      text: [
        'K-뷰티의 섬세함으로',
        '세계가 신뢰하는 아름다움의 기준을 완성하다.',
        '“The Standard of K-Beauty.”',
      ],
    },
  ];

  // 터치/드래그로 슬라이드 변경
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // 마우스 드래그 이벤트
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging || !touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    // 드래그 중일 때는 자동 슬라이드 일시정지
    if (isDragging) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 변경

    return () => clearInterval(timer);
  }, [slides.length, isDragging]);

  return (
    <section 
      id="brand-section" 
      ref={sectionRef}
      className="scroll-section relative w-full h-screen bg-gray-100 flex items-center overflow-hidden pt-16 cursor-grab active:cursor-grabbing"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
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
            <div className={`relative w-full h-full bg-gradient-to-r ${slide.bgColor}`}>
              {slide.image && (slide.image.includes('.jpg') || slide.image.includes('.jpeg')) ? (
                <Image
                  src={slide.image}
                  alt={`VILLA de BLANC ${slide.id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${slide.bgColor}`}>
                  <span className="text-gray-500 text-sm">VILLA de BLANC Image {slide.id}</span>
                </div>
              )}
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full flex items-center justify-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
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
