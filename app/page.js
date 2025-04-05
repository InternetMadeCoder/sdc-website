import BlogSection from "@/components/Home/BlogSection";
import ContactSection from "@/components/Home/ContactSection";
import ExpertiseSection from "@/components/Home/ExpertiseSection";
import GallerySection from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection/page";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import FAQSection from "@/components/Home/FAQSection";
import SolutionsSection from "@/components/Home/SolutionsSection.jsx";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <HeroSection />
      <div className="white-section">
        <ExpertiseSection />
        <SolutionsSection />
        <TestimonialsSection />
        {/* <BlogSection /> */}
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
}
