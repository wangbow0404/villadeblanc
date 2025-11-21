export default function StructuredData() {
  // 구조화된 데이터 (JSON-LD) - 검색 엔진 최적화
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "빌라드블랑",
    alternateName: "VILLA de BLANC",
    url: "https://villadeblanc.com",
    logo: "https://villadeblanc.com/assets/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-70-4193-8888",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["ko", "en"],
    },
    sameAs: [
      // 소셜 미디어 링크가 있다면 여기에 추가
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "빌라드블랑 압구정본점",
    alternateName: "VILLA de BLANC Apgujeong",
    image: "https://villadeblanc.com/assets/images/logo.png",
    "@id": "https://villadeblanc.com",
    url: "https://villadeblanc.com",
    telephone: "070-4193-8888",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "논현로 149길 8, 2층",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      postalCode: "06040",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.5187392,
      longitude: 127.0276868,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}

