import { Target, TrendingUp, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const PhilosophySection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  const principles = [
    {
      icon: Target,
      title: "Discipline First",
      description: "Standards over motivation. Simple, repeatable habits you can sustain—no gimmicks, no shortcuts.",
    },
    {
      icon: TrendingUp,
      title: "Strong Body, Strong Mind",
      description: "Progressive strength training paired with mindset work so you lead at home, work, and the gym.",
    },
    {
      icon: Award,
      title: "Faith‑Driven Accountability",
      description: "Clear expectations, weekly check‑ins, and honest feedback. Purpose over comfort, always.",
    },
  ];

  return (
    <section id="philosophy" className="w-full py-24 px-6 bg-secondary/30 cv-auto" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Philosophy</span>
          <h2 className="mb-4 mt-4">My Coaching Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Faith‑driven, discipline‑first coaching. Simple habits, clear standards, and strength work that changes bodies—and mindsets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-8 border border-border/50 card-hover transition-all duration-1200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 250}ms`,
                boxShadow: "var(--shadow-card)" 
              }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <principle.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-center mb-4 text-foreground">{principle.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
