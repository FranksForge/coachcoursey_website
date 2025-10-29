import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

const ApplicationSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load Tally widget script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      setIsFormLoaded(true);
      // Initialize Tally after script loads
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      setHasError(true);
      console.error('Failed to load Tally form');
    };
    
    document.body.appendChild(script);

    // Set a timeout to show error if form doesn't load
    const timeout = setTimeout(() => {
      if (!isFormLoaded) {
        setHasError(true);
      }
    }, 10000); // 10 second timeout

    return () => {
      clearTimeout(timeout);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [isFormLoaded]);

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
          {/* Loading Spinner */}
          {!isFormLoaded && !hasError && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
              <p className="text-foreground/70">Loading application form...</p>
            </div>
          )}

          {/* Error Fallback */}
          {hasError && (
            <div className="text-center py-12">
              <div className="mb-6">
                <svg className="w-16 h-16 text-accent/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-xl font-bold text-foreground mb-4">Form temporarily unavailable</h3>
                <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                  Please apply directly via the link below, or try refreshing the page.
                </p>
              </div>
              <a
                href="https://tally.so/r/n9LrWQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-lg btn-glow hover:scale-105 transition-transform"
              >
                Open Application Form
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Tally Form */}
          {!hasError && (
            <iframe 
              data-tally-src="https://tally.so/embed/n9LrWQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="694" 
              frameBorder="0" 
              marginHeight={0}
              marginWidth={0}
              title="Coaching Application"
              className={`rounded-lg transition-opacity duration-500 ${isFormLoaded ? 'opacity-100' : 'opacity-0'}`}
            ></iframe>
          )}
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
