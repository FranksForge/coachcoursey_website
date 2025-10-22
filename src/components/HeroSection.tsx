import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToApplication = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden mt-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/95" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center -mt-32">
        <h1 className="mb-18 text-foreground max-w-5xl animate-fade-in">
          Transform Your Body.
          <br />
          <span className="text-gradient">Elevate Your Standards.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mb-12 animate-fade-in font-medium">
          Online coaching with Coach Rutger — build strength, confidence, and discipline.
        </p>

        <Button 
          onClick={scrollToApplication}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 btn-glow animate-scale-in"
        >
          Apply for Coaching
        </Button>

        <div className="absolute bottom-12 animate-bounce">
          <ArrowDown className="w-8 h-8 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
