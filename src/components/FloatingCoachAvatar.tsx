import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingCoachAvatar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownAutoTooltip, setHasShownAutoTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  // Animate avatar appearance on mount
  useEffect(() => {
    // Delay the appearance for a smooth entrance after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Appears 1.5 seconds after page load
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're still in hero section (within viewport height)
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Consider in hero if less than 70% of hero is scrolled past
        const inHero = heroRect.bottom > window.innerHeight * 0.3;
        setIsHeroSection(inHero);
      }

      // Handle tooltip auto-show at philosophy section
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
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownAutoTooltip]);

  // Calculate scale based on hero section and visibility
  const getScale = () => {
    if (!isVisible) return 0.8;
    return isHeroSection ? 2 : 1;
  };

  return (
    <div 
      className="fixed bottom-2 right-2 sm:bottom-0 sm:right-0 z-[9999] transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? `translateY(0) scale(${getScale()})` 
          : 'translateY(30px) scale(0.8)',
        transformOrigin: 'bottom right',
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && isVisible && (
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
              Have questions? DM me on Instagram.
            </p>
            <a
              href="https://ig.me/m/coachcoursey_/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowTooltip(false)}
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              DM on Instagram
            </a>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-card border-r border-b border-accent/50 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Avatar Button */}
      <a
        href="https://www.instagram.com/coachcoursey_/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="block relative group"
        aria-label="Chat with Coach Coursey on Instagram"
      >
        {/* Avatar image - no border, no circle, flush to corner */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 overflow-hidden transition-transform hover:scale-105">
          <img
            src="/coach-coursey.png"
            alt="Coach Coursey"
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    </div>
  );
};

export default FloatingCoachAvatar;

