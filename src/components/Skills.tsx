import React from "react";
import {
  Atom,
  Code2,
  PaintBucket,
  GitBranch,
  Cloud,
  Container,
  Database,
  Smartphone,
  Palette,
  Terminal,
  Server,
  FileJson,
  Database as DatabaseIcon,
  Braces,
  FolderGit2,
  MonitorSmartphone,
  Type,
} from "lucide-react";
import { DiDocker } from "react-icons/di";

const skills = [
  { id: "react", name: "React", icon: <Atom className="w-8 h-8" /> },
  { id: "django", name: "Django", icon: <Code2 className="w-8 h-8" /> },
  { id: "tailwind", name: "Tailwind CSS", icon: <PaintBucket className="w-8 h-8" /> },
  { id: "git", name: "Git", icon: <GitBranch className="w-8 h-8" /> },
  { id: "aws", name: "AWS", icon: <Cloud className="w-8 h-8" /> },
  { id: "docker", name: "Docker", icon: <DiDocker className="w-8 h-8" /> },
  { id: "typescript", name: "TypeScript", icon: <Type className="w-8 h-8" /> },
  { id: "sql", name: "SQL", icon: <Database className="w-8 h-8" /> },
  { id: "flutter", name: "Flutter", icon: <Smartphone className="w-8 h-8" /> },
  { id: "nextjs", name: "Next.js", icon: <Server className="w-8 h-8" /> },
  { id: "python", name: "Python", icon: <Terminal className="w-8 h-8" /> },
  { id: "uiux", name: "UI/UX", icon: <Palette className="w-8 h-8" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-border/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillIcon key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillIconProps {
  skill: {
    id: string;
    name: string;
    icon: React.ReactNode;
  };
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 text-center">
      <div className="bg-card/80 border border-border/20 p-5 rounded-xl transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:scale-105">
        {skill.icon}
      </div>
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{skill.name}</span>
    </div>
  );
};

export default Skills;
