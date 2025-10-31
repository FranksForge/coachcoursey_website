import { CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const WhyChooseSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  const reasons = [
    "Faith-driven standards: discipline first, results follow",
    "Simple nutrition you can sustain with no gimmicks or extremes",
    "Progressive training that builds strength and muscle",
    "Direct accountability with clear check-ins and clear expectations",
    "Movement quality and injury prevention come first",
    "Lead at home, work, and the gym with purpose over comfort",
  ];

  return (
    <section className="w-full py-24 px-6 bg-secondary/30 cv-auto" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-12 transition-all duration-1200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Coursey</span>
            <h2 className="mb-4 mt-4">Built on Discipline and Purpose</h2>
              <p className="text-xl text-muted-foreground">
                This is more than workouts. It’s a faith-driven standard for how you live.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-4 transition-all duration-1200 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/80">{reason}</p>
              </div>
            ))}
          </div>

          <div 
            className={`mt-12 bg-card rounded-lg p-8 md:p-10 text-center border border-accent/20 transition-all duration-1200 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '1200ms', boxShadow: "var(--shadow-card)" }}
          >
            <div className="max-w-2xl mx-auto">
              <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-foreground leading-relaxed">
                "The power of mindset and faith can transform anyone who's willing to commit."
              </p>
              <p className="text-muted-foreground font-medium">– Coach Coursey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
