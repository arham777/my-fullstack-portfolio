import React from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  LayoutGrid, // React
  Code2, // Django
  PaintBucket, // Tailwind CSS
  GitBranch, // Git
  Cloud, // AWS
  Box, // Docker
  FileType, // TypeScript
  Database, // SQL
  Smartphone, // Flutter
  Palette, // UI/UX
  Terminal, // Python
  Globe, // NextJS
  Server, // Express
  FileJson, // GraphQL
  Database as DatabaseIcon, // MongoDB
  Braces, // JavaScript
  FolderGit2, // CI/CD
  MonitorSmartphone, // Responsive Design
} from "lucide-react";

// Define skills with their icons and colors
const skills = [
  {
    id: "react",
    name: "React",
    icon: <LayoutGrid className="w-8 h-8 text-[#61DAFB]" />,
    color: "#61DAFB",
  },
  {
    id: "django",
    name: "Django",
    icon: <Code2 className="w-8 h-8 text-[#44B78B]" />,
    color: "#44B78B",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <PaintBucket className="w-8 h-8 text-[#38B2AC]" />,
    color: "#38B2AC",
  },
  {
    id: "git",
    name: "Git",
    icon: <GitBranch className="w-8 h-8 text-[#F05032]" />,
    color: "#F05032",
  },
  {
    id: "aws",
    name: "AWS",
    icon: <Cloud className="w-8 h-8 text-[#FF9900]" />,
    color: "#FF9900",
  },
  {
    id: "docker",
    name: "Docker",
    icon: <Box className="w-8 h-8 text-[#2496ED]" />,
    color: "#2496ED",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <FileType className="w-8 h-8 text-[#3178C6]" />,
    color: "#3178C6",
  },
  {
    id: "sql",
    name: "SQL",
    icon: <Database className="w-8 h-8 text-[#336791]" />,
    color: "#336791",
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: <Smartphone className="w-8 h-8 text-[#02569B]" />,
    color: "#02569B",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "#ffffff",
  },
  {
    id: "python",
    name: "Python",
    icon: <Terminal className="w-8 h-8 text-[#3776AB]" />,
    color: "#3776AB",
  },
  {
    id: "uiux",
    name: "UI/UX",
    icon: <Palette className="w-8 h-8 text-[#FF6B6B]" />,
    color: "#FF6B6B",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 relative">
      {/* Section divider at the top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider mx-auto max-w-5xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-title-2 text-center mb-10">Skills & Technologies</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <AnimateOnScroll key={skill.id} delay={index * 0.08}>
              <SkillIcon skill={skill} index={index} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill Icon Component with floating animation
interface SkillIconProps {
  skill: {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index }) => {
  // Convert hex to rgba for glow effect
  const hexToRgba = (hex: string, alpha = 0.2) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  // Alternate floating animation timing based on index
  const floatDuration = 3 + (index % 3) * 0.5;
  const floatDelay = index * 0.2;
  const floatHeight = -4 - (index % 3);
  
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <motion.div 
        className="bg-dark-light/40 backdrop-blur-sm border border-dark-border/20 p-4 rounded-lg shadow-subtle flex items-center justify-center"
        style={{
          boxShadow: `0 3px 10px ${hexToRgba(skill.color, 0.08)}`
        }}
        whileHover={{ 
          y: -6, 
          boxShadow: `0 6px 16px ${hexToRgba(skill.color, 0.2)}`,
          transition: { duration: 0.2 }
        }}
        animate={{ 
          y: [0, floatHeight, 0],
          transition: { 
            delay: floatDelay,
            duration: floatDuration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }
        }}
      >
        {skill.icon}
      </motion.div>
      <span className="text-xs font-normal text-foreground/80">{skill.name}</span>
    </div>
  );
};

export default Skills;
