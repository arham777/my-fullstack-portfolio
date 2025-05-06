import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react"; // Removed useRef as mouse move refs are no longer needed

interface NavbarProps {
  onSectionChange?: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ onSectionChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Scrollspy logic (remains the same)
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

  const headerVariants = {
    hidden: { y: prefersReducedMotion ? 0 : -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    },
  };

  const mobileMenuContainerVariants = {
    closed: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95, y: prefersReducedMotion ? 0 : -10, transition: { duration: 0.2, ease: "easeOut" } },
    open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: prefersReducedMotion ? 0 : -15 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 + 0.1, duration: 0.3, ease: "easeOut" }
    }),
  };

  // Removed mouse-move related state and handlers (rotate, handleMouseMove, handleMouseLeave)

  const logoAnimationProps = prefersReducedMotion ? {} : {
    whileHover:{ scale: 1.05, filter: "brightness(1.15)"},
    transition:{ type: "spring", stiffness: 300, damping: 15 }
  };

  const mobileButtonAnimationProps = prefersReducedMotion ? {} : {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 }
  };

  const theme = {
    mainBg: "bg-[#0A101F]/85",
    border: "border-sky-700/30",
    desktopNavBg: "bg-slate-800/50",
    mobileMenuBg: "bg-[#0A101F]/95",
    mobileMenuBorder: "border-sky-600/40",
    activePillGradient: "bg-gradient-to-r from-sky-500/90 to-blue-600/90",
    inactiveText: "text-sky-200/70",
    hoverText: "text-sky-100",
    activeText: "text-white",
    logoGradient: "bg-gradient-to-br from-white to-sky-300",
    focusRing: "focus-visible:ring-sky-500",
    mobileButtonBg: "bg-slate-700/60 hover:bg-slate-600/70 active:bg-slate-500/70",
    animatedBorderGradient: "bg-gradient-to-r from-cyan-400/20 via-sky-500/20 to-blue-600/20",
    desktopNavPillFocusOffset: "focus-visible:ring-offset-slate-800",
    mobileNavPillFocusOffset: "focus-visible:ring-offset-[#0A101F]",
  };

  // Define a subtle hover animation for the main navbar pill (optional)
  const navbarPillHover = prefersReducedMotion ? {} : {
    scale: 1.01, // Very slight scale
    // rotateX: '1deg' // Option to slightly reduce rotation on hover
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
      style={{ transformStyle: "preserve-3d" }} // Retain 3D context for children
    >
      {/* The container div sets up the perspective for the pill */}
      <div
        className="container mx-auto"
        style={{ perspective: "1200px" }} // Establish 3D perspective for child (the pill)
      >
        {/* Main Navbar Pill - Now with static 3D transform */}
        <motion.div
          className={`relative flex items-center justify-between ${theme.mainBg} backdrop-blur-lg ${theme.border} shadow-xl rounded-full px-3 py-2 sm:px-4 sm:py-2`}
          whileHover={navbarPillHover} // Apply subtle hover animation to the pill itself
          style={{
            transformStyle: "preserve-3d", // Children will be in this 3D space
            // Static 3D effect: lifted and slightly tilted. Adjust as needed.
            transform: prefersReducedMotion
              ? "none"
              : "translateZ(15px) rotateX(2.5deg)", // Lifted and slightly tilted
            transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)", // Smooth transition for hover
          }}
        >
          {/* Animated Gradient Border Glow */}
          {!prefersReducedMotion && (
            <div className="absolute -inset-px rounded-full overflow-hidden -z-10 pointer-events-none">
              <motion.div
                className={`absolute inset-0 ${theme.animatedBorderGradient}`}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ filter: 'blur(24px)' }}
              />
            </div>
          )}

          {/* Logo - translateZ is relative to the pill's new 3D space */}
          <motion.a
            href="#home"
            className={`text-xl sm:text-2xl font-semibold tracking-tight text-transparent bg-clip-text ${theme.logoGradient}`}
            {...logoAnimationProps}
            onClick={() => handleNavClick("home")}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)", // Lifted within the pill
            }}
          >
            MA.
          </motion.a>

          {/* Desktop Navigation - translateZ relative to the pill */}
          <ul
            className={`hidden md:flex items-center space-x-1 ${theme.desktopNavBg} border border-sky-800/20 rounded-full p-1`}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(5px)", // Lifted within the pill
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = !prefersReducedMotion && hoveredSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  className="relative"
                  onHoverStart={() => setHoveredSection(item.id)}
                  onHoverEnd={() => setHoveredSection(null)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative block text-xs sm:text-sm px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-colors duration-200 ease-out outline-none
                                focus-visible:ring-2 ${theme.focusRing} focus-visible:ring-offset-2 ${theme.desktopNavPillFocusOffset}
                              ${isActive ? theme.activeText : `${theme.inactiveText} hover:${theme.hoverText}`}`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.span
                      className="relative z-10 inline-block"
                      animate={{
                        translateZ: (isActive || isHovered) ? (prefersReducedMotion ? 0 : 4) : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18, duration: 0.15 }}
                    >
                      {item.label}
                    </motion.span>

                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="activePillDesktop"
                        className={`absolute inset-0 rounded-full ${theme.activePillGradient} shadow-md -z-0`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        style={{ transformStyle: "preserve-3d", transform: "translateZ(-1px)"}}
                      />
                    )}
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button - translateZ relative to the pill */}
          <motion.button
            className={`md:hidden ${theme.inactiveText} p-2 rounded-full ${theme.mobileButtonBg} transition-colors duration-200 outline-none focus-visible:ring-2 ${theme.focusRing}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            {...mobileButtonAnimationProps}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(5px)", // Lifted within the pill
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="x-icon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                  <X size={18} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div key="menu-icon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                  <Menu size={18} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay (remains largely the same, no direct 3D mouse interactions here) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenuOverlay"
            variants={mobileMenuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`md:hidden fixed inset-x-4 top-20 sm:top-24 p-4 rounded-2xl ${theme.mobileMenuBg} backdrop-blur-xl ${theme.mobileMenuBorder} shadow-xl`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <ul className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li /* ... (mobile list item unchanged) ... */ >
                     <a
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative block w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ease-out outline-none
                                 focus-visible:ring-2 ${theme.focusRing} focus-visible:ring-offset-2 ${theme.mobileNavPillFocusOffset}
                                ${isActive ? theme.activeText : `${theme.inactiveText} hover:${theme.hoverText} active:${theme.activeText}`}`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.span
                        className="relative z-10 inline-block"
                        animate={{
                            translateZ: isActive && !prefersReducedMotion ? 2 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                      >
                        {item.label}
                      </motion.span>
                      {isActive && (
                        <motion.div
                          layoutId="activePillMobile"
                          className={`absolute inset-0 rounded-lg ${theme.activePillGradient} -z-0`}
                          transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 25 }}
                          style={{ transformStyle: "preserve-3d", transform: "translateZ(-1px)"}}
                        />
                      )}
                    </a>
                  </motion.li>
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