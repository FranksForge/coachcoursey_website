import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TransformationGallery = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section className="w-full py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Coach Transformation</span>
          <h2 className="mb-4 mt-4 text-foreground">
            The Standards I Live By
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            I changed my body by changing my mindset through discipline, simple habits, and faith. I teach what I believe in and what I live.
          </p>
        </div>

        {/* Coach before/after */}
        <div className={`relative transition-all duration-1200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid md:grid-cols-2 gap-0 md:gap-0">
            <div className="group mx-auto w-full sm:max-w-[400px] rounded-xl overflow-hidden border-2 border-accent/50 hover:border-accent bg-card shadow-[var(--shadow-glow)] hover:ring-2 hover:ring-accent/40 transition-all duration-500 animate-scale-in hover:scale-[1.03]">
              <div className="relative aspect-[4/5]">
                <img src="/before.png" alt="Coach Coursey transformation – before" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" sizes="(max-width: 640px) 100vw, 400px" />
                {/* Dark themed overlay to blend with site colors */}
                <div className="pointer-events-none absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" aria-hidden="true" />
                {/* Bottom gradient for caption readability */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/50 to-transparent" aria-hidden="true" />
                {/* Caption chip */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-black/75 backdrop-blur-sm text-accent text-sm md:text-base font-extrabold px-4 py-1.5 rounded border border-accent/60 shadow-[var(--shadow-glow)]">Before</span>
                </div>
              </div>
            </div>
            <div className="group mx-auto w-full sm:max-w-[400px] rounded-xl overflow-hidden border-2 border-accent/50 hover:border-accent bg-card shadow-[var(--shadow-glow)] hover:ring-2 hover:ring-accent/40 transition-all duration-500 animate-scale-in hover:scale-[1.03]">
              <div className="relative aspect-[4/5]">
                <img src="/after.png" alt="Coach Coursey transformation – after" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" sizes="(max-width: 640px) 100vw, 400px" />
                {/* Dark themed overlay to blend with site colors */}
                <div className="pointer-events-none absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" aria-hidden="true" />
                {/* Bottom gradient for caption readability */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/50 to-transparent" aria-hidden="true" />
                {/* Caption chip */}
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
          {/* Primary CTA only */}
          <div className="text-center mt-10">
            <div className="mt-0 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                onClick={(e) => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-lg btn-glow hover:scale-105 transition-transform"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>

        {/* Note removed */}

        {/* Extra CTA removed; handled above */}
      </div>
    </section>
  );
};

export default TransformationGallery;

