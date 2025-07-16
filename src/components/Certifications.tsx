import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import dlaiLogo from "../assets/dlai-logo.png";
import ibmLogo from "../assets/IBM.png";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  skills: string[];
  logo: string;
  isDarkLogo?: boolean;
}

const certificates: Certificate[] = [
  {
    id: "ibm-generative-ai",
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    date: "July 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/ZVWY1UWUBN7U",
    skills: ["Prompt Engineering", "OpenAI", "Generative AI"],
    logo: ibmLogo,
    isDarkLogo: true
  },
  {
    id: "chatgpt-prompt-engineering",
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://learn.deeplearning.ai/accomplishments/bb10f21c-e397-4f2d-8657-041b6b91743b",
    skills: ["Prompt Engineering", "GenAI Applications", "Transformers"],
    logo: dlaiLogo
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider mx-auto max-w-5xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-title-2 text-center mb-12 text-gradient">
            Certifications
          </h2>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <AnimateOnScroll
              key={cert.id}
              delay={index * 0.1}
              direction="up"
              distance={20}
            >
              <motion.div
                className="card-surface overflow-hidden flex flex-col h-full rounded-lg border border-dark-border/20"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Logo Section - Cleaner and more minimal */}
                <div className="p-5 flex justify-center items-center h-20">
                  <div className={`${cert.isDarkLogo ? 'bg-white p-3 rounded' : ''}`}>
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Content Section - Ultra minimal */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-base font-medium mb-1 text-foreground">
                    {cert.title}
                  </h3>
                  
                  {/* Date only - no "Completed:" text */}
                  <p className="text-sm text-primary-300 mb-3">
                    {cert.date}
                  </p>
                  
                  {/* Skills - Even more minimal */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {cert.skills.map(skill => (
                      <span
                        key={`${cert.id}-${skill}`}
                        className="px-2 py-0.5 bg-dark-light/10 text-primary-300/80 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Verify Button */}
                  <div className="flex mt-auto">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-dark-light/20 text-primary-300 font-medium rounded hover:bg-dark-light/30 transition-colors"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
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

export default Certifications; 