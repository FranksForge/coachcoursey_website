import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section id="about" className="w-full py-24 px-6 bg-secondary/30 cv-auto" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`order-2 md:order-1 transition-all duration-1200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="rounded-xl overflow-hidden border-2 border-border bg-transparent shadow-[var(--shadow-card)]">
              <img
                src="/coach-coursey.png"
                alt="Coach Coursey"
                className="w-full h-auto object-cover"
                decoding="async"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              <div className="px-4 py-3 bg-card border-t border-border/50 text-center">
                <span className="text-sm font-semibold text-foreground">1st Place Classic 35+</span>
              </div>
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Coach Coursey</span>
              <div className="h-0.5 w-12 bg-accent mt-2"></div>
            </div>
            
            <h2 className="text-foreground">
              Faith-Driven. Purpose-Led.
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              From burnout to purpose: I help out-of-shape men burn fat, build muscle, 
              and lead with discipline. This isn’t a quick fix–it’s a standard.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach is faith-driven and no-nonsense–simple habits, clean nutrition, 
              progressive training, and accountability that builds real men of discipline.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-foreground/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Professional</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Integrity First</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Purpose Over Comfort</span>
              </div>
            </div>

            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold mt-4 hover:scale-105 transition-transform"
            >
              <a 
                href="https://ig.me/m/coachcoursey_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                DM on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
