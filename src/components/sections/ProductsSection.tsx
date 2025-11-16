export default function ProductsSection() {
  const products = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <section id="lineup-section" className="scroll-section w-full min-h-screen bg-white flex items-center py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center w-full">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase text-center mb-3 md:mb-4">
            BEST SELLERS
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12 lg:mb-16 px-4">
            아윤채에서 가장 사랑받는 베스트셀러 제품을 소개합니다
          </p>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {products.map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 md:mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                    <span className="text-gray-500 text-xs">Product {item}</span>
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-xs sm:text-sm font-medium text-black">Product Name {item}</h3>
                  <p className="text-xs text-gray-500">#해시태그 #해시태그</p>
                  <p className="text-xs sm:text-sm font-semibold text-black">24,000원</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center">
            <button className="text-black uppercase underline text-xs sm:text-sm md:text-base hover:opacity-80 transition-opacity">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
