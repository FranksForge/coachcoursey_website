import { Target, TrendingUp, Award } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      icon: Target,
      title: "Precision Training",
      description: "Every rep counts. Science-backed programming tailored to your goals, not cookie-cutter routines.",
    },
    {
      icon: TrendingUp,
      title: "Progressive Overload",
      description: "Consistent, measurable progress. We track everything to ensure you're always moving forward.",
    },
    {
      icon: Award,
      title: "Accountability",
      description: "Weekly check-ins, ongoing support, and real feedback. You're never alone in this journey.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">My Coaching Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No shortcuts. No gimmicks. Just proven methods that deliver real, sustainable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-center mb-4">{principle.title}</h3>
              <p className="text-muted-foreground text-center">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
