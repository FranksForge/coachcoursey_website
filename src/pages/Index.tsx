import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";
import TransformationGallery from "@/components/TransformationGallery";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";
import FloatingCoachAvatar from "@/components/FloatingCoachAvatar";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ProcessSection />
      <PricingSection />
      <ResultsSection />
      <TransformationGallery />
      <WhyChooseSection />
      <FAQSection />
      <ApplicationSection />
      <Footer />
      <FloatingCoachAvatar />
      <ScrollToTop />
    </div>
  );
};

export default Index;
