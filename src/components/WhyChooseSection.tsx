import { CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    "Personalized training programs designed for YOUR body and goals",
    "Weekly progress tracking and program adjustments",
    "Direct access to me via WhatsApp for questions and support",
    "Comprehensive nutrition guidance–not just meal plans",
    "Form checks and video analysis to prevent injuries",
    "Lifetime access to training resources and education",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Coach Rutger?</h2>
            <p className="text-xl text-muted-foreground">
              I don't just give you a workout plan and disappear. I'm invested in your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-lg p-8 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="text-xl font-semibold mb-4">
              "I don't work with everyone. I work with people who are serious about change."
            </p>
            <p className="text-muted-foreground">– Coach Rutger</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
