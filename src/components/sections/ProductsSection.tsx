import Image from 'next/image';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      image: '/assets/images/lineup-1.jpg',
      name: '빌라드블랑 시그니처 트리트먼트',
      hashtags: '#엔젤링 #머릿결',
    },
    {
      id: 2,
      image: '/assets/images/lineup-2.jpg',
      name: '빌라드블랑 시그니처 샴푸',
      hashtags: '#탈모 #비듬제거',
    },
    {
      id: 3,
      image: '/assets/images/lineup-3.jpg',
      name: '빌라드블랑 샴푸 브러쉬',
      hashtags: '#두피건강 #모근강화',
    },
  ];

  return (
    <section id="lineup-section" className="scroll-section w-full min-h-screen bg-white flex items-center justify-center pb-4 md:pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center w-full">
        <div className="max-w-7xl mx-auto w-full mt-16 md:mt-24 lg:mt-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase text-center mb-3 md:mb-4">
            BEST SELLERS
          </h2>
          <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-8 px-4">
            빌라드블랑에서 가장 사랑받는 베스트셀러 제품을 소개합니다
          </p>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-xs sm:text-sm font-medium text-black">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.hashtags}</p>
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
