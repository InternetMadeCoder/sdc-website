import BlogSection from "@/components/Home/BlogSection";
import ContactSection from "@/components/Home/ContactSection";
import ExpertiseSection from "@/components/Home/ExpertiseSection";
import GallerySection from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection/page";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import FAQSection from "@/components/Home/FAQSection";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <HeroSection />
      <div className="white-section">
        <TestimonialsSection />
        {/* <BlogSection /> */}
        <GallerySection />
        <ExpertiseSection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
}
