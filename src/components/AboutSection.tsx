import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import coachImage from "@/assets/coach-rutger.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={coachImage}
              alt="Coach Rutger - Online Fitness Coach"
              className="rounded-lg shadow-[var(--shadow-card)] w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-foreground">
              About Coach Rutger
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I help busy professionals and athletes take control of their body and performance 
              through proven, no-nonsense training and nutrition systems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach is built on discipline, consistency, and results. No gimmicks, 
              no quick fixes—just strategic programming that gets you stronger, leaner, 
              and more confident in your body.
            </p>

            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold"
            >
              <a 
                href="https://www.instagram.com/coachedbyrutger/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
