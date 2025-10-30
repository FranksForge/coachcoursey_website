import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounter } from "@/hooks/useCounter";

const ResultsSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.3, freezeOnceVisible: true });
  
  const stats = [
    { number: 120, suffix: "+", label: "Clients Transformed" },
    { number: 20, suffix: "+", label: "Years Experience" },
    { number: 95, suffix: "%", label: "Client Satisfaction" },
    { number: 2000, suffix: "+", label: "Training Sessions" },
  ];

  return (
    <section id="results" className="w-full py-24 px-6 bg-background cv-auto" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="mb-4 mt-4">Real People. Real Results.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't just numbers–they're life-changing transformations.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const count = useCounter(isInView, { 
              end: stat.number, 
              duration: 2000,
              start: 0
            });
            
            return (
                <div
                  key={index}
                  className={`bg-card rounded-lg p-6 text-center border border-border/50 card-hover transition-all duration-1200 ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                  boxShadow: "var(--shadow-card)" 
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Coach Transformation */}
        <div className={`relative mb-12 transition-all duration-1200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Coach Transformation</span>
            <h3 className="mb-3 mt-3 text-foreground text-3xl md:text-4xl">The Standards I Live By</h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              I changed my body by changing my mindset–discipline, simple habits, and faith. I teach what I believe in–and what I live.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 md:gap-0">
              <div className="group mx-auto w-full sm:max-w-[400px] rounded-xl overflow-hidden border-2 border-accent/50 hover:border-accent bg-card shadow-[var(--shadow-glow)] hover:ring-2 hover:ring-accent/40 transition-all duration-500 animate-scale-in hover:scale-[1.03]">
                <div className="relative aspect-[4/5]">
                  <img src="/before.png" alt="Coach Coursey transformation – before" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="pointer-events-none absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" aria-hidden="true" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/50 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-black/75 backdrop-blur-sm text-accent text-sm md:text-base font-extrabold px-4 py-1.5 rounded border border-accent/60 shadow-[var(--shadow-glow)]">Before</span>
                  </div>
                </div>
              </div>
              <div className="group mx-auto w-full sm:max-w-[400px] rounded-xl overflow-hidden border-2 border-accent/50 hover:border-accent bg-card shadow-[var(--shadow-glow)] hover:ring-2 hover:ring-accent/40 transition-all duration-500 animate-scale-in hover:scale-[1.03]">
                <div className="relative aspect-[4/5]">
                  <img src="/after.png" alt="Coach Coursey transformation – after" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="pointer-events-none absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" aria-hidden="true" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/50 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-black/75 backdrop-blur-sm text-accent text-sm md:text-base font-extrabold px-4 py-1.5 rounded border border-accent/60 shadow-[var(--shadow-glow)]">After</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Center accent arrow on desktop */}
            <div className="pointer-events-none hidden md:flex items-center justify-center absolute inset-y-0 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-accent/90 shadow-[var(--shadow-glow)] border border-accent/80 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="hsl(var(--accent-foreground))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Single CTA */}
        <div 
          className={`text-center transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-xl text-foreground/80 mb-6">
            Ready to write your own success story?
          </p>
          <a
            href="#apply"
            onClick={(e) => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg btn-glow hover:scale-105 transition-transform"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
