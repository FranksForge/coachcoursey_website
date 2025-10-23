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
      className="relative min-h-screen w-full max-w-full overflow-hidden pt-20"
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
      
      {/* Decorative Gradient Blobs - Contained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content - Three-tier layout: Heading → Caption Space → Subtitle → CTAs */}
      <div className="relative h-full min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 text-center py-8">
        
        {/* TOP: Heading only */}
        <div className="flex-shrink-0">
          <div className="max-w-2xl md:max-w-5xl mx-auto">
            <h1 className="text-foreground animate-fade-in-up text-4xl md:text-5xl lg:text-7xl">
              Transform Your Body.
              <br />
              <span className="text-gradient">Elevate Your Standards.</span>
            </h1>
          </div>
        </div>

        {/* MIDDLE: Empty space for video captions - reduced on mobile */}
        <div className="h-12 md:h-32 lg:h-40"></div>

        {/* LOWER: Subtitle, CTAs & Stats */}
        <div className="flex-shrink-0 space-y-6 md:space-y-12">
          {/* Subtitle below captions */}
          <div className="max-w-2xl md:max-w-5xl mx-auto px-2">
            <p className="text-base md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto animate-fade-in-up font-medium leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Join elite professionals and athletes who refuse to settle for average. 
              Build <span className="text-accent font-semibold">strength</span>, <span className="text-accent font-semibold">confidence</span>, and <span className="text-accent font-semibold">discipline</span> with proven coaching systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="max-w-2xl md:max-w-5xl mx-auto">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={scrollToApplication}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base md:text-lg px-6 py-4 md:px-10 md:py-7 btn-glow hover:scale-105 transition-transform shadow-2xl"
              >
                Apply for Coaching
              </Button>
              <Button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="hidden sm:flex border-2 border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent font-semibold text-base md:text-lg px-6 py-4 md:px-10 md:py-7 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

          </div>

          {/* Social Proof */}
          <div className="max-w-2xl md:max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 text-foreground/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm">Transformations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">12+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center hidden sm:block">
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8 text-accent" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
