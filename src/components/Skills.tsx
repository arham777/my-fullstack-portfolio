
import { motion } from "framer-motion";
import { 
  Atom, 
  Python, 
  Tailwind, 
  GitBranch, 
  AwsIcon, 
  Docker, 
  TypeScript, 
  Database,
  Flutter,
  User,
  Django
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  delay: number;
}

const skills: Skill[] = [
  { name: "React", icon: <Atom className="w-8 h-8 text-[#61DAFB]" />, delay: 0 },
  { name: "Django", icon: <Django className="w-8 h-8 text-[#092E20]" />, delay: 0.1 },
  { name: "Tailwind CSS", icon: <Tailwind className="w-8 h-8 text-[#38BDF8]" />, delay: 0.2 },
  { name: "Git", icon: <GitBranch className="w-8 h-8 text-[#F05032]" />, delay: 0.3 },
  { name: "AWS", icon: <AwsIcon className="w-8 h-8 text-[#FF9900]" />, delay: 0.4 },
  { name: "Docker", icon: <Docker className="w-8 h-8 text-[#2496ED]" />, delay: 0.5 },
  { name: "TypeScript", icon: <TypeScript className="w-8 h-8 text-[#3178C6]" />, delay: 0.6 },
  { name: "SQL", icon: <Database className="w-8 h-8 text-[#336791]" />, delay: 0.7 },
  { name: "Flutter", icon: <Flutter className="w-8 h-8 text-[#02569B]" />, delay: 0.8 },
  { name: "UI/UX", icon: <User className="w-8 h-8 text-[#FF4088]" />, delay: 0.9 },
  { name: "Python", icon: <Python className="w-8 h-8 text-[#3776AB]" />, delay: 1.0 },
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
  return (
    <section id="skills" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-gradient"
        >
          Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: skill.delay }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial="initial"
                animate="animate"
                variants={floatingAnimation}
                className="flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                {skill.icon}
              </motion.div>
              <span className="mt-3 text-sm font-medium text-white/80">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
