import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ProgramSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: false });
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      // Attempt autoplay when in view
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might be blocked; keep controls so user can play
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section id="program" className="w-full py-24 px-6 bg-secondary/30 cv-auto" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Current Program</span>
          <h2 className="mb-4 mt-4 text-foreground">Build Real Strength & Get Shredded in 16 Weeks</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Structured training. Simple nutrition. Accountability that delivers. Commit for 16 weeks and transform how you look, feel, and lead.
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Video */}
          <div className="relative mx-auto w-full md:max-w-[560px] rounded-xl overflow-hidden border border-border/50 bg-card shadow-[var(--shadow-card)]">
            <div className="relative aspect-square">
              <video
                ref={videoRef}
                controls
                playsInline
                muted
                loop
                preload="none"
                poster="/after.png"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="Program overview video"
              >
                <source src="/videos/jointheprogram.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay for better integration */}
              <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden="true" />
              {/* Subtle gradient on top */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Highlights */}
          <div>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>4-Day strength split with progressive overload and conditioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Simple, sustainable nutrition targets—no extremes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Weekly check-ins and video form feedback for accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Clear standards and support to become a disciplined leader</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-6 btn-glow"
                aria-label="Apply now"
              >
                <span className="mr-2" aria-hidden="true">💪</span>
                Apply Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="border-2 border-accent/50 hover:bg-accent/10 hover:border-accent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;


