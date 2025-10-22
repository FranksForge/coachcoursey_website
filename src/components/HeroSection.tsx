import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToApplication = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.5;

  return (
    <section 
      id="hero"
      className="relative h-screen w-full overflow-hidden mt-20"
      aria-label="Hero section"
    >
      {/* Video Background with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover parallax"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/60 to-background/95" />
      
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />

      {/* Content - Split layout with space in middle for captions */}
      <div className="relative h-full flex flex-col justify-between px-6 text-center">
        {/* Top Section: Heading & Subtext - 10% higher */}
        <div className="pt-8 md:pt-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-6 text-foreground animate-fade-in-up">
              Transform Your Body.
              <br />
              <span className="text-gradient">Elevate Your Standards.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto animate-fade-in-up font-medium leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Join elite professionals and athletes who refuse to settle for average. 
              Build <span className="text-accent font-semibold">strength</span>, <span className="text-accent font-semibold">confidence</span>, and <span className="text-accent font-semibold">discipline</span> with proven coaching systems.
            </p>
          </div>
        </div>

        {/* Bottom Section: CTAs & Stats - 20% higher */}
        <div className="pb-40 md:pb-48">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={scrollToApplication}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 btn-glow hover:scale-105 transition-transform shadow-2xl"
              >
                Apply for Coaching
              </Button>
              <Button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent font-semibold text-lg px-10 py-7 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm">Transformations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">12+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8 text-accent" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
