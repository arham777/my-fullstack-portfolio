import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onSectionChange?: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ onSectionChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = navItems[0].id;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.4;
      let sectionFound = false;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentSectionId = item.id;
            sectionFound = true;
            break;
          }
        }
      }
      
      if (!sectionFound) {
        let minPositiveTop = Infinity;
        let closestSectionId = navItems[0].id;
        let hasVisibleSection = false;
        
        for (const item of navItems) {
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < viewportHeight && rect.bottom > 0) {
                hasVisibleSection = true;
                if (rect.top < minPositiveTop) {
                    minPositiveTop = rect.top;
                    closestSectionId = item.id;
                }
            }
          }
        }
        
        if(hasVisibleSection) currentSectionId = closestSectionId;
        else {
            const lastVisibleOrPassed = navItems.reduce((acc, curr) => {
                const el = document.getElementById(curr.id);
                if (el && el.getBoundingClientRect().top < viewportHeight) return curr.id;
                return acc;
            }, navItems[0].id);
            currentSectionId = lastVisibleOrPassed;
        }
      }
      
      if (currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
        if (onSectionChange) {
          onSectionChange(currentSectionId);
        }
      }
    };
    
    const timer = setTimeout(() => handleScroll(), 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, onSectionChange]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
    setActiveSection(sectionId);
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
    setIsOpen(false);
  };

  // Simplified animations
  const headerVariants = {
    hidden: { y: prefersReducedMotion ? 0 : -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -5, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-5 py-3"
    >
      <div className="container mx-auto">
        {/* Main Navbar */}
        <div className="flex items-center justify-between bg-dark-surface/90 backdrop-blur-md border border-dark-border/15 shadow-subtle rounded-full px-3 py-1.5">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-medium text-accent-400"
            onClick={() => handleNavClick("home")}
          >
            Arham.
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block text-xs px-3.5 py-1.5 rounded-full transition-colors duration-200 outline-none
                      focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-1
                      ${isActive 
                        ? "text-foreground bg-dark-lighter" 
                        : "text-foreground/70 hover:text-foreground/90"}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-foreground/70 p-1.5 rounded-full bg-dark-light/60 hover:bg-dark-light transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div 
                  key="x-icon" 
                  initial={{ rotate: -90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: 90, opacity: 0 }} 
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div 
                  key="menu-icon" 
                  initial={{ rotate: 90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: -90, opacity: 0 }} 
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={16} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed inset-x-4 top-16 p-2.5 rounded-xl bg-dark-surface/95 backdrop-blur-md border border-dark-border/20 shadow-subtle"
          >
            <ul className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full px-3.5 py-1.5 rounded-lg text-xs transition-colors duration-200 outline-none
                      focus-visible:ring-2 focus-visible:ring-primary-600
                      ${isActive 
                        ? "text-foreground bg-dark-lighter" 
                        : "text-foreground/70 hover:text-foreground/90"}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;