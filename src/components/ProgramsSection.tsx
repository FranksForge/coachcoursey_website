import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, ClipboardList, Apple } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "1:1 Online Coaching",
    description: "Personalized training and nutrition coaching tailored to your goals, schedule, and lifestyle. Direct access to Coach Rutger for accountability and support.",
    features: [
      "Custom training program",
      "Weekly check-ins",
      "Direct messaging access",
      "Progress tracking"
    ]
  },
  {
    icon: ClipboardList,
    title: "Custom Training Plans",
    description: "Get a professionally designed training program built specifically for your goals, whether that's strength, hypertrophy, or athletic performance.",
    features: [
      "Personalized programming",
      "Exercise video library",
      "Progressive overload system",
      "Monthly updates"
    ]
  },
  {
    icon: Apple,
    title: "Nutrition & Habit Coaching",
    description: "Learn sustainable nutrition strategies and build habits that support long-term results without restrictive dieting or burnout.",
    features: [
      "Flexible nutrition approach",
      "Habit-based coaching",
      "Meal planning guidance",
      "Supplement recommendations"
    ]
  }
];

const ProgramsSection = () => {
  const scrollToApplication = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">
            Coaching Programs
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the level of support that fits your goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-accent transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)]"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{program.title}</CardTitle>
                  <CardDescription className="text-foreground/70 text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={scrollToApplication}
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
