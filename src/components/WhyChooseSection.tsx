import { CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const WhyChooseSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  const reasons = [
    "Personalized training programs designed for YOUR body and goals",
    "Weekly progress tracking and program adjustments",
    "Direct access to me via WhatsApp for questions and support",
    "Comprehensive nutrition guidance—not just meal plans",
    "Form checks and video analysis to prevent injuries",
    "Lifetime access to training resources and education",
  ];

  return (
    <section className="w-full py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-12 transition-all duration-1200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Me</span>
            <h2 className="mb-4 mt-4">Why Coach Rutger?</h2>
            <p className="text-xl text-muted-foreground">
              I don't just give you a workout plan and disappear. I'm invested in your success.
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
                "I don't work with everyone. I work with people who are serious about change."
              </p>
              <p className="text-muted-foreground font-medium">– Coach Rutger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
