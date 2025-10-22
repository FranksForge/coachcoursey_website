import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t-2 border-accent py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">Coach Rutger</h3>
            <p className="text-foreground/60">Transform Your Body. Elevate Your Standards.</p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/coachedbyrutger/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@coachedbyrutger</span>
            </a>
            <a
              href="mailto:contact@coachrutger.com"
              className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Coach Rutger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
