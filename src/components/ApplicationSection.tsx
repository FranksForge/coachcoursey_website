import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  goal: z.string().trim().min(10, "Please describe your fitness goal").max(500),
  message: z.string().trim().min(20, "Please tell us more about why you're ready").max(1000)
});

const ApplicationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      applicationSchema.parse(formData);
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. Coach Rutger will review your application and get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        goal: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    }
  };

  return (
    <section id="apply" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            Start Your Transformation
          </h2>
          <p className="text-xl text-foreground/70">
            Ready to take control of your body and performance? Apply now.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2 bg-secondary border-border text-foreground"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-2 bg-secondary border-border text-foreground"
              required
            />
          </div>

          <div>
            <Label htmlFor="goal" className="text-foreground">Fitness Goal</Label>
            <Input
              id="goal"
              type="text"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="mt-2 bg-secondary border-border text-foreground"
              placeholder="e.g., Build muscle, lose fat, improve performance"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground">
              Tell me why you're ready to make a change
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-2 bg-secondary border-border text-foreground min-h-32"
              required
            />
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold btn-glow"
          >
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ApplicationSection;
