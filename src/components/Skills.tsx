import { motion } from "framer-motion";
import { 
  Atom, 
  Code2, 
  Paintbrush, 
  GitBranch, 
  Cloud, 
  Container, 
  FileCode, 
  Database,
  Smartphone,
  Layout,
  Terminal
} from "lucide-react";
import SectionTransition from "./SectionTransition";
import AnimateOnScroll from "./AnimateOnScroll";
import { useAnimationContext } from "../App";

interface Skill {
  name: string;
  icon: React.ReactNode;
  delay: number;
}

const skills: Skill[] = [
  { name: "React", icon: <Atom className="w-8 h-8 text-[#61DAFB]" />, delay: 0 },
  { name: "Django", icon: <Code2 className="w-8 h-8 text-[#092E20]" />, delay: 0.1 },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-8 h-8 text-[#38BDF8]" />, delay: 0.2 },
  { name: "Git", icon: <GitBranch className="w-8 h-8 text-[#F05032]" />, delay: 0.3 },
  { name: "AWS", icon: <Cloud className="w-8 h-8 text-[#FF9900]" />, delay: 0.4 },
  { name: "Docker", icon: <Container className="w-8 h-8 text-[#2496ED]" />, delay: 0.5 },
  { name: "TypeScript", icon: <FileCode className="w-8 h-8 text-[#3178C6]" />, delay: 0.6 },
  { name: "SQL", icon: <Database className="w-8 h-8 text-[#336791]" />, delay: 0.7 },
  { name: "Flutter", icon: <Smartphone className="w-8 h-8 text-[#02569B]" />, delay: 0.8 },
  { name: "UI/UX", icon: <Layout className="w-8 h-8 text-[#FF4088]" />, delay: 0.9 },
  { name: "Python", icon: <Terminal className="w-8 h-8 text-[#3776AB]" />, delay: 1.0 },
];

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Skills = () => {
  // Get animation context
  const { activeSection, triggerAnimation } = useAnimationContext();
  const isActive = activeSection === "skills";

  return (
    <SectionTransition id="skills" className="py-20 bg-primary/800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-gradient">
          Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <AnimateOnScroll
              key={skill.name}
              delay={skill.delay + 0.1}
              direction={index % 2 === 0 ? "up" : "down"}
              distance={30}
              className="flex flex-col items-center"
            >
              <motion.div
                initial="initial"
                animate="animate"
                variants={floatingAnimation}
                className="flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-lg hover:border-accent/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  rotate: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.div>
              <span className="mt-3 text-sm font-medium text-white/80">
                {skill.name}
              </span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};

export default Skills;
