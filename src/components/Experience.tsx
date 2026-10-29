import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

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
    company: "Qubit Dynamics",
    position: "Full Stack Gen AI Developer",
    duration: "Oct 2025 - Present",
    description: "Architecting and developing end-to-end AI SaaS solutions using Next.js, MongoDB, and FastAPI. Building powerful AI-driven tools with natural language querying, embedded Python execution, and auto-visualization. Designing complex ReAct agent architectures using Gemini and OpenAI APIs, alongside intelligent RAG pipelines via LangChain for advanced document analysis and context-aware responses, all optimized for high-performance low-latency inference.",
    tools: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "LangChain", "Gemini API", "OpenAI API", "RAG"],
    delay: 0.1
  },
  {
    company: "Cybergen",
    position: "Junior AI Engineer",
    duration: "Mar 2025 - Oct 2025",
    description: "Designed, fine-tuned, and deployed LLMs and multimodal models for enterprise use cases such as automated customer support. Developed robust RAG pipelines with LangChain and integrated AI endpoints into production via secure REST and WebSocket APIs. Optimized model performance through quantization, batching, and asynchronous request handling for high-availability inference.",
    tools: ["Python", "FastAPI", "LangChain", "RAG", "WebSocket", "REST APIs", "LLMs"],
    delay: 0.2
  }
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
    <section id="experience" className="py-20 border-b border-border/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-8 mb-12 last:mb-0"
            >
              <div className="absolute left-0 top-1 h-full w-px bg-border/20"></div>
              <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-primary/80 border-2 border-background"></div>

              <header className="mb-3">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </header>

              <div className="p-4 rounded-xl bg-card/80 border border-border/20">
                <p className="mb-4 text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-secondary/80 text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 