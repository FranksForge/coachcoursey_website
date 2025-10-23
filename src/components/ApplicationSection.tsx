import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ApplicationSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section 
      id="apply" 
      className="w-full py-24 px-6 bg-gradient-to-b from-background to-secondary/30"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="mb-6 text-foreground">
            Ready to Transform?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards the body and mindset you deserve. 
            <span className="text-accent font-semibold"> Limited spots available</span> for serious individuals only.
          </p>
        </div>

        {/* Tally Form Embed Container */}
        <div 
          className={`bg-card border border-border/50 rounded-xl p-8 md:p-12 shadow-[var(--shadow-card)] transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <iframe 
            data-tally-src="https://tally.so/embed/mZppo0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="694" 
            frameBorder="0" 
            marginHeight={0}
            marginWidth={0}
            title="Get Coached By Rutger"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Trust Indicators */}
        <div 
          className={`mt-12 flex flex-wrap justify-center gap-8 text-center transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex items-center gap-2 text-foreground/70">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Free Consultation</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">No Commitment Required</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Reply Within 24 Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
