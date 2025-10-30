import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { brandName, logoSrc } from "@/brand/config";

const navItems = [
  { id: "about", label: "About" },
  { id: "pricing", label: "Pricing" },
  { id: "results", label: "Results" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const activeSection = useScrollSpy(
    navItems.map(item => item.id).concat(['apply']), 
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percent = (winScroll / height) * 100;
      setScrollProgress(scrolled_percent);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
            : "bg-transparent"
        }`}
        style={isScrolled ? { boxShadow: "var(--shadow-glass)" } : undefined}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/80 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-shrink-0 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label="Home"
            >
              <img 
                src={logoSrc} 
                alt="Brand logo" 
                className="h-12 md:h-14" 
                width={56}
                height={56}
                decoding="async"
              />
              <span className="text-foreground font-bold text-lg md:text-xl hidden sm:inline">
                {brandName}
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`text-foreground hover:text-accent transition-colors font-medium relative group ${
                    activeSection === item.id ? 'text-accent' : ''
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              ))}
              <a
                href="#apply"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('apply');
                }}
                className="bg-accent text-accent-foreground px-6 py-2 rounded-md hover:bg-accent/90 transition-all font-semibold btn-glow hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-accent transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-64 bg-card border-l border-border/50 z-40 md:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="flex flex-col p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-3 text-foreground hover:text-accent hover:bg-accent/10 transition-colors font-medium rounded-md ${
                      activeSection === item.id ? 'text-accent bg-accent/10' : ''
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#apply"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('apply');
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4 px-4 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-semibold text-center"
                >
                  Apply Now
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
