'use client';

export default function VideoSection() {
  return (
    <section
      id="video-section"
      className="scroll-section w-full h-screen bg-white relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-[50%_50%] relative">
        {/* Left Section - Video */}
        <div className="relative w-full h-[60%] lg:h-full overflow-hidden bg-black">
          <video
            className="w-full h-full object-cover"
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

        {/* Right Section - Text Content */}
        <div className="w-full flex-1 lg:h-full bg-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center">
          <div className="max-w-lg space-y-6 md:space-y-8">
            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
              망설임을 내려놓고 선택하는 순간,
              <br />
              이제서야 나도 이런 머릿결을 느낄 수 있게 된다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

