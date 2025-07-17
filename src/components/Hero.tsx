
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 },
    },
  };

  const scrollIconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    bounce: {
      y: [0, -6, 0],
      transition: {
        delay: 2,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-14 pb-16">
      {/* Subtle linear gradient for a smoother background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-secondary/20 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="space-y-1"
          >
            <h1 className="text-title-1 text-center">
              <span className="text-gradient">Muhammad Arham Athar</span>
            </h1>
            <h2 className="text-title-2 text-center">Full Stack Developer</h2>
          </motion.div>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg mx-auto text-body-sm sm:text-body"
          >
            I build modern web applications with <span className="highlight">React</span>,
            <span className="text-foreground"> Next.js</span>, and <span className="highlight">Python</span>.
            Specializing in creating responsive user interfaces and robust backend systems.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <div className="flex items-center gap-4">
              <a href="https://github.com/arham777" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-arham-athar-4bba202b7/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
          
          {/* Arrow icon moved below the buttons in the flex layout */}
          <motion.div
            variants={scrollIconVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
            className="mt-4 cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown className="w-5 h-5 text-foreground/60" />
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute -bottom-2 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
