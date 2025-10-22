import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const transformations = [
  {
    name: "Michael T.",
    timeframe: "16 weeks",
    stats: "Lost 18kg | Gained Strength",
    description: "From desk job burnout to confident and energized"
  },
  {
    name: "Sarah K.",
    timeframe: "20 weeks",
    stats: "Body Recomp | First Pull-up",
    description: "Broke through years of plateau with strategic training"
  },
  {
    name: "David R.",
    timeframe: "24 weeks",
    stats: "Lost 22kg | Built Muscle",
    description: "Complete lifestyle transformation at age 45"
  },
  {
    name: "James L.",
    timeframe: "12 weeks",
    stats: "+15kg Strength | -8% BF",
    description: "Athlete performance optimization"
  }
];

const TransformationGallery = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Transformations</span>
          <h2 className="mb-4 mt-4 text-foreground">
            See The Transformations
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Real transformations from clients who committed to the process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border/50 rounded-xl overflow-hidden card-hover transition-all duration-1200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                boxShadow: "var(--shadow-card)"
              }}
            >
              {/* Placeholder for Before/After Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-secondary via-secondary/80 to-background relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90"></div>
                
                {/* Image placeholder with icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-20 h-20 text-accent/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="text-accent/50 font-semibold text-sm uppercase tracking-wider">
                      Transformation Photo
                    </div>
                  </div>
                </div>

                {/* Timeframe badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {transformation.timeframe}
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card via-card to-transparent">
                <h3 className="text-xl font-bold text-foreground mb-2">{transformation.name}</h3>
                <div className="text-accent font-semibold mb-2">{transformation.stats}</div>
                <p className="text-foreground/70 text-sm">{transformation.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Note about images */}
        <div 
          className={`mt-12 text-center transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-block bg-card border border-border/50 rounded-lg px-6 py-4">
            <p className="text-foreground/70 text-sm">
              <span className="font-semibold text-accent">Note:</span> Add your actual before/after transformation images here.
              <br />Replace placeholder backgrounds with real client photos (with permission).
            </p>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-xl text-foreground/80 mb-6">
            Want to see more transformations?
          </p>
          <a
            href="https://www.instagram.com/coachedbyrutger/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-lg btn-glow hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;

