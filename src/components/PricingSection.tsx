import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const pricingTiers = [
  {
    name: "Training Plans",
    price: "€150-250",
    period: "/month",
    description: "Perfect for self-motivated individuals who want expert programming",
    features: [
      "Custom training program",
      "Exercise video library",
      "Progressive overload system",
      "Monthly program updates",
      "Email support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Full Coaching",
    price: "€350-500",
    period: "/month",
    description: "Complete transformation package with maximum support and accountability",
    features: [
      "Everything in Training Plans",
      "Personalized nutrition coaching",
      "Weekly video check-ins",
      "Direct WhatsApp access",
      "Form checks & video analysis",
      "Habit & mindset coaching",
      "Priority support"
    ],
    cta: "Apply Now",
    popular: true
  },
  {
    name: "Nutrition Coaching",
    price: "€200-300",
    period: "/month",
    description: "Build sustainable eating habits without restrictive dieting",
    features: [
      "Flexible nutrition strategy",
      "Macro & calorie guidance",
      "Meal planning support",
      "Weekly check-ins",
      "Supplement recommendations"
    ],
    cta: "Get Started",
    popular: false
  }
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled into view
      // Positive values = section is above viewport, 0 = top of section at bottom of viewport, negative = scrolled past
      const scrollProgress = windowHeight - sectionTop;
      
      // Define thresholds - each card appears at different scroll depths
      // Adjust these values to control spacing between reveals (higher = more scroll needed)
      const thresholds = [
        300,  // Training Plans (left) - appears first
        900,  // Full Coaching (center/Most Popular) - appears LAST for spotlight effect
        600   // Nutrition Coaching (right) - appears second
      ];

      setVisibleCards([
        scrollProgress > thresholds[0],
        scrollProgress > thresholds[1],
        scrollProgress > thresholds[2]
      ]);
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToApplication = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="w-full py-24 px-6 bg-secondary/30 cv-auto" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Investment</span>
          <h2 className="mb-4 mt-4 text-foreground">
            Coaching Packages
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Flexible options to match your goals and commitment level
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="text-foreground/80 font-medium">Limited spots available each month</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const isVisible = visibleCards[index];
            
            return (
              <div key={index}>
                <Card 
                  className={`relative bg-card border-border ${
                    tier.popular ? 'border-accent border-2 shadow-[var(--shadow-glow)]' : 'border shadow-[var(--shadow-card)]'
                  }`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
                    transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (isVisible) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isVisible) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = tier.popular ? 'var(--shadow-glow)' : 'var(--shadow-card)';
                    }
                  }}
                >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl text-foreground mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gradient">{tier.price}</span>
                  <span className="text-foreground/60 text-lg">{tier.period}</span>
                </div>
                <CardDescription className="text-foreground/70 text-base leading-relaxed">
                  {tier.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  onClick={scrollToApplication}
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90 btn-glow font-bold text-lg py-6' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-accent/20 font-semibold py-6'
                  }`}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
              </div>
            );
          })}
        </div>

        {/* Money-back guarantee */}
        <div 
          className={`mt-16 text-center transition-all duration-1200 ${
            visibleCards.some(v => v) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '750ms' }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-card border border-accent/20 rounded-xl px-8 py-6 shadow-lg">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-foreground/70">
                Not satisfied after the first month? Get a full refund, no questions asked. 
                I'm committed to your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

