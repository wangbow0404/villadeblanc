'use client';

export default function VideoSection() {
  return (
    <section
      id="video-section"
      className="scroll-section w-full h-screen bg-black relative overflow-hidden"
    >
      {/* Full Screen Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover md:scale-100 scale-[0.95] transition-transform duration-300"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
          <source src="/assets/videos/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Overlay - Centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-2xl px-10 sm:px-12 md:px-16 text-center">
          <p 
            className="noto-sans-kr text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white leading-relaxed drop-shadow-lg font-normal"
          >
            망설임을 내려놓고 선택하는 순간,
            <br />
            이제서야 나도 이런 머릿결을 느낄 수 있게 된다.
          </p>
        </div>
      </div>
    </section>
  );
}

