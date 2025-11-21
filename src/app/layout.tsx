import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/common/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "빌라드블랑 | VILLA de BLANC - 프리미엄 헤어케어 전문 브랜드",
  description: "빌라드블랑(VILLA de BLANC) 공식 홈페이지. 프리미엄 헤어케어 제품과 전문 디자이너 팀이 제공하는 최고의 헤어 스타일링 서비스를 만나보세요. 서울 강남 압구정 본점 운영 중.",
  keywords: [
    "빌라드블랑",
    "VILLA de BLANC",
    "빌라드블랑 압구정",
    "헤어케어",
    "헤어제품",
    "미용실",
    "헤어디자이너",
    "프리미엄 헤어케어",
    "강남 미용실",
    "압구정 미용실",
  ],
  authors: [{ name: "VILLA de BLANC" }],
  creator: "VILLA de BLANC",
  publisher: "VILLA de BLANC",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://villadeblanc.com",
    siteName: "빌라드블랑 | VILLA de BLANC",
    title: "빌라드블랑 | VILLA de BLANC - 프리미엄 헤어케어 전문 브랜드",
    description: "빌라드블랑(VILLA de BLANC) 공식 홈페이지. 프리미엄 헤어케어 제품과 전문 디자이너 팀이 제공하는 최고의 헤어 스타일링 서비스를 만나보세요.",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "빌라드블랑 VILLA de BLANC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "빌라드블랑 | VILLA de BLANC",
    description: "프리미엄 헤어케어 전문 브랜드",
    images: ["/assets/images/logo.png"],
  },
  alternates: {
    canonical: "https://villadeblanc.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // 네이버 검색 최적화
  other: {
    "naver-site-verification": "", // 네이버 웹마스터 도구에서 받은 인증 코드를 여기에 입력하세요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
