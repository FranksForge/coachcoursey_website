import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import coachImage from "@/assets/coach-rutger.jpg";

const AboutSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section id="about" className="w-full py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`order-2 md:order-1 transition-all duration-1200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src={coachImage}
                alt="Coach Rutger - Online Fitness Coach"
                className="relative rounded-lg shadow-[var(--shadow-card)] w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`order-1 md:order-2 space-y-6 transition-all duration-1200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Me</span>
              <div className="h-0.5 w-12 bg-accent mt-2"></div>
            </div>
            
            <h2 className="text-foreground">
              Meet Coach Rutger
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I help <span className="text-accent font-semibold">busy professionals</span> and <span className="text-accent font-semibold">athletes</span> take control of their body and performance 
              through proven, no-nonsense training and nutrition systems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach is built on <span className="font-semibold">discipline</span>, <span className="font-semibold">consistency</span>, and <span className="font-semibold">results</span>. No gimmicks, 
              no quick fixes—just strategic programming that gets you stronger, leaner, 
              and more confident in your body.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-foreground/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>500+ Clients Transformed</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified Coach</span>
              </div>
            </div>

            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold mt-4 hover:scale-105 transition-transform"
            >
              <a 
                href="https://www.instagram.com/coachedbyrutger/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
