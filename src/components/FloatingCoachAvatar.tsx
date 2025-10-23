import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import coachImage from "@/assets/yourcoach.png";

const FloatingCoachAvatar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownAutoTooltip, setHasShownAutoTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownAutoTooltip) return;

      const philosophySection = document.getElementById('philosophy');
      if (philosophySection) {
        const rect = philosophySection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0;
        
        if (isInView) {
          setShowTooltip(true);
          setHasShownAutoTooltip(true);
          // Auto-hide after 5 seconds
          setTimeout(() => {
            setShowTooltip(false);
          }, 5000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownAutoTooltip]);

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-0 sm:right-0 z-[9999]">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-2 sm:right-8 mb-2 sm:mb-4 animate-fade-in-up">
          <div className="relative bg-card border border-accent/50 rounded-lg shadow-2xl p-4 min-w-[220px]">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold text-foreground mb-1">
              Got questions?
            </p>
            <p className="text-xs text-foreground/70 mb-3">
              Message me directly on Instagram
            </p>
            <a
              href="https://ig.me/m/coachedbyrutger"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </a>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-card border-r border-b border-accent/50 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Avatar Button */}
      <a
        href="https://ig.me/m/coachedbyrutger"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(false)}
        className="block relative group"
        aria-label="Chat with Coach Rutger on Instagram"
      >
        {/* Avatar image - no border, no circle, flush to corner */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 overflow-hidden transition-transform hover:scale-105 shadow-lg">
          <img
            src={coachImage}
            alt="Coach Rutger"
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </div>
  );
};

export default FloatingCoachAvatar;

