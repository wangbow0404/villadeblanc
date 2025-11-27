'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity bg-transparent"
            >
              <Image
                src="/assets/images/logo-2.png"
                alt="VILLA de BLANC"
                width={800}
                height={267}
                className="h-32 md:h-44 lg:h-56 w-auto object-contain"
                style={{ backgroundColor: 'transparent' }}
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('video-section')}
              className="text-sm font-medium text-black uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              BRAND
            </button>
            <button
              onClick={() => scrollToSection('designer-section')}
              className="text-sm font-medium text-black uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              DESIGNER
            </button>
            <button
              onClick={() => scrollToSection('lineup-section')}
              className="text-sm font-medium text-black uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              LINEUP
            </button>
            <button
              onClick={() => scrollToSection('partner-section')}
              className="text-sm font-medium text-black uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              PARTNERS
            </button>
            <button
              onClick={() => scrollToSection('membership-section')}
              className="text-sm font-medium text-black uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              MEMBERSHIP
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-sm font-medium text-black uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* My Page */}
            <button
              className="p-2 text-black hover:text-gray-600 transition-colors"
              aria-label="마이페이지"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Contact/Inquiry */}
            <button
              className="p-2 text-black hover:text-gray-600 transition-colors"
              aria-label="문의하기"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <button
              onClick={() => scrollToSection('video-section')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-black uppercase hover:bg-gray-50"
            >
              BRAND
            </button>
            <button
              onClick={() => scrollToSection('designer-section')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-black uppercase hover:bg-gray-50"
            >
              DESIGNER
            </button>
            <button
              onClick={() => scrollToSection('lineup-section')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-black uppercase hover:bg-gray-50"
            >
              LINEUP
            </button>
            <button
              onClick={() => scrollToSection('partner-section')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-black uppercase hover:bg-gray-50"
            >
              PARTNERS
            </button>
            <button
              onClick={() => scrollToSection('membership-section')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-black uppercase hover:bg-gray-50"
            >
              MEMBERSHIP
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-black uppercase hover:bg-gray-50"
            >
              CONTACT
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
