import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Project data
const projects = [
  {
    id: 1,
    title: "Arham Photography",
    description: "Photography portfolio showcasing creative work and photoshoots.",
    image: `https://api.microlink.io/?url=https://arhamphotography.netlify.app&screenshot=true&meta=false&embed=screenshot.url&overlay.browser=dark&force=true&scale=1&height=400`,
    tech: ["React", "Tailwind"],
    link: "https://arhamphotography.netlify.app"
  },
  {
    id: 2,
    title: "Capture by Arham",
    description: "Photography portfolio with presets, resources and professional services.",
    image: `https://api.microlink.io/?url=https://capturebyarham.netlify.app&screenshot=true&meta=false&embed=screenshot.url&overlay.browser=dark&force=true&scale=1&height=400`,
    tech: ["React", "Tailwind"],
    link: "https://capturebyarham.netlify.app"
  },
  {
    id: 3,
    title: "Iframe Embed",
    description: "Demonstrates dynamic iframe embedding with responsive design.",
    image: `https://api.microlink.io/?url=https://iframe-embed-theta.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&overlay.browser=dark&force=true&scale=1&height=400`,
    tech: ["React", "Tailwind", "Iframe"],
    link: "https://iframe-embed-theta.vercel.app/"
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "Conversational AI chatbot built with React and Tailwind, leveraging the Gemini API for intelligent, real-time responses and a modern, user-friendly interface.",
    image: `https://api.microlink.io/?url=https://ai-chatbot-lac-iota.vercel.app/&screenshot=true&meta=false&embed=screenshot.url&overlay.browser=dark&force=true&scale=1&height=400`,
    tech: ["React", "Tailwind", "Gemini API"],
    link: "https://ai-chatbot-lac-iota.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 relative">
      {/* Section divider at the top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider mx-auto max-w-5xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimateOnScroll>
          <h2 className="text-title-2 text-center mb-8">Projects</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.id}
              delay={index * 0.1}
              distance={20}
            >
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card-surface  card-hover h-full flex flex-col rounded-lg overflow-hidden">
      {/* Project Image */}
      <div className="relative h-40 w-full overflow-hidden bg-dark-light">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent opacity-50"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3">
        <h3 className="text-heading mb-1 text-foreground">{project.title}</h3>
        <p className="text-body-sm mb-2.5 flex-grow">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tech.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="text-xs font-normal px-1.5 py-0.5 bg-dark-lighter text-foreground/80 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-end mt-auto pt-1">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 text-foreground/70 hover:text-accent-500 transition-colors rounded-full hover:bg-dark-lighter"
            title="Live Demo"
          >
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>

      {/* Special accent highlight */}
      <div className="h-0.5 w-full bg-gradient-accent"></div>
    </div>
  );
};

export default Projects;