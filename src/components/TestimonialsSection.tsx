import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Software Engineer",
    quote: "Rutger helped me break through my plateau – best shape of my life. His programming is strategic and his accountability kept me consistent.",
    result: "Lost 15kg, gained strength"
  },
  {
    name: "David L.",
    role: "Business Owner",
    quote: "As a busy entrepreneur, I needed efficiency. Rutger's approach is no-nonsense and results-driven. I'm stronger and more disciplined than ever.",
    result: "Built muscle, improved focus"
  },
  {
    name: "Tom S.",
    role: "Athlete",
    quote: "Training with Rutger elevated my performance. His attention to detail and personalized programming made all the difference in my sport.",
    result: "Increased performance 25%"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">
            Client Transformations
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Real results from dedicated clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="w-8 h-8 text-accent" />
                
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-sm text-accent font-semibold mt-2">{testimonial.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
