import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/cbr-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/50 border-t-2 border-accent py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <img 
                src={logo} 
                alt="Coached By Rutger" 
                className="h-16" 
                width="auto"
                height="64"
              />
              <span className="text-foreground font-bold text-2xl">
                Coached By Rutger
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Transform Your Body.<br />
              Elevate Your Standards.
            </p>
            <p className="text-foreground/60 text-sm">
              Empowering professionals and athletes to achieve their physical potential through proven coaching systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-foreground/70 hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-foreground/70 hover:text-accent transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-foreground/70 hover:text-accent transition-colors"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-foreground mb-4">Connect</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/coachedbyrutger/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-3 text-foreground/70 hover:text-accent transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@coachedbyrutger</span>
              </a>
              <a
                href="mailto:contact@coachrutger.com"
                className="flex items-center justify-center md:justify-end gap-3 text-foreground/70 hover:text-accent transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>contact@coachrutger.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 btn-glow"
            >
              Start Your Transformation
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/60 text-sm">
            <p>&copy; {currentYear} Coach Rutger. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>🇳🇱 Based in the Netherlands</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
