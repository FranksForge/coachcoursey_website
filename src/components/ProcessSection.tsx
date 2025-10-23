import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FileText, MessageCircle, Dumbbell, TrendingUp, Trophy } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description: "Fill out the application form and tell me about your goals, experience, and what you want to achieve."
  },
  {
    icon: MessageCircle,
    title: "Consultation",
    description: "We'll have a free call to discuss your goals, assess fit, and determine the best program for you."
  },
  {
    icon: Dumbbell,
    title: "Custom Program",
    description: "Receive your personalized training and nutrition plan tailored to your body, goals, and lifestyle."
  },
  {
    icon: TrendingUp,
    title: "Weekly Check-ins",
    description: "Regular progress reviews, program adjustments, and ongoing support to keep you on track."
  },
  {
    icon: Trophy,
    title: "Transform",
    description: "Achieve your goals through consistent effort, expert guidance, and proven programming."
  }
];

const ProcessSection = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true });

  return (
    <section className="w-full py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-800 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="mb-4 mt-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A simple, proven process from application to transformation
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" aria-hidden="true"></div>
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1200 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Icon Circle */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 shadow-[var(--shadow-glow)] relative z-10 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="w-8 h-8 bg-card border-2 border-accent rounded-full flex items-center justify-center font-bold text-accent text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative flex gap-6 transition-all duration-1200 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 250}ms` }}
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-accent/30" aria-hidden="true"></div>
                )}

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[var(--shadow-glow)] relative z-10">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 bg-card border-2 border-accent rounded-full flex items-center justify-center font-bold text-accent text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1500ms' }}
        >
          <button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-4 rounded-lg btn-glow hover:scale-105 transition-transform"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

