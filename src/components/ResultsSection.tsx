import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounter } from "@/hooks/useCounter";

const ResultsSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.3, freezeOnceVisible: true });
  
  const stats = [
    { number: 500, suffix: "+", label: "Clients Transformed" },
    { number: 12, suffix: "+", label: "Years Experience" },
    { number: 95, suffix: "%", label: "Client Satisfaction" },
    { number: 2000, suffix: "+", label: "Training Sessions" },
  ];

  const results = [
    {
      title: "Lost 25kg in 6 Months",
      client: "Mark, 34",
      result: "From 105kg to 80kg while building muscle and confidence",
      metric: "-25kg"
    },
    {
      title: "Broke Through Plateau",
      client: "Sarah, 28",
      result: "Added 40kg to her deadlift and achieved her first pull-up",
      metric: "+40kg"
    },
    {
      title: "Complete Body Recomp",
      client: "James, 42",
      result: "Dropped 15% body fat while gaining 8kg of lean muscle",
      metric: "-15%"
    },
  ];

  return (
    <section id="results" className="py-24 px-6 bg-background" ref={ref}>
      <div className="container mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="mb-4 mt-4">Real People. Real Results.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't just numbers—they're life-changing transformations.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
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

        {/* Client Results */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-8 border-l-4 border-accent hover:border-primary card-hover transition-all duration-1200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${800 + (index * 250)}ms`,
                boxShadow: "var(--shadow-card)" 
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl text-foreground">{result.title}</h3>
                <span className="text-2xl font-bold text-accent">{result.metric}</span>
              </div>
              <p className="text-primary font-semibold mb-3">{result.client}</p>
              <p className="text-muted-foreground leading-relaxed">{result.result}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1600ms' }}
        >
          <p className="text-xl text-foreground/80 mb-6">
            Ready to write your own success story?
          </p>
          <button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg btn-glow hover:scale-105 transition-transform"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
