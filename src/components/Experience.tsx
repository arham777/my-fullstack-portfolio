import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  tools: string[];
  delay: number;
}

const experiences: ExperienceItem[] = [
  {
    company: "Cybergen",
    position: "AI Engineer Internee",
    duration: "2025 - Ongoing",
    description: "Working on cutting-edge AI projects and solutions, focusing on machine learning model development, optimization, and deployment. Contributing to innovative applications of artificial intelligence in various domains.",
    tools: ["AI API Integrations", "Web Development", "UI Design", "Machine Learning", "Data Analysis"],
    delay: 0.1
  },
  // You can add more experiences in the future
];

const experienceItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-14 relative">
      {/* Section divider at the top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider mx-auto max-w-5xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-title-2 text-center mb-10 text-gradient">
            Professional Experience
          </h2>
        </AnimateOnScroll>
        
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimateOnScroll
              key={exp.company}
              delay={exp.delay}
              direction="up"
              distance={20}
            >
              <motion.div
                variants={experienceItemVariants}
                className="relative pl-6 mb-12"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/20 via-dark-border to-transparent"></div>
                <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-gradient-accent shadow-glow-sm"></div>
                
                <header className="mb-2">
                  <h3 className="text-subheading">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-xs text-primary-400">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </header>
                
                <div className="p-4 rounded-lg surface-container shadow-subtle">
                  <p className="mb-3 text-body-sm">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tools.map(tool => (
                      <span 
                        key={tool}
                        className="px-2 py-0.5 bg-dark-light/30 text-primary-300 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 