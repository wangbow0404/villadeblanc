import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import DesignerSection from '@/components/sections/DesignerSection';
import ProductsSection from '@/components/sections/ProductsSection';
import MembershipSection from '@/components/sections/MembershipSection';
import ChatButton from '@/components/common/ChatButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <DesignerSection />
        <ProductsSection />
        <MembershipSection />
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}
