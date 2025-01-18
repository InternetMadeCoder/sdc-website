import BlogSection from "@/components/Home/BlogSection";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection/page";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <HeroSection />
      <div className="white-section">
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </div>
  );
}
