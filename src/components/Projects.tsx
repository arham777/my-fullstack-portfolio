import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projectsData = [
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
    tech: ["React", "Tailwind","Iframe"],
    link: "https://iframe-embed-theta.vercel.app/"
  },
  // Add more projects if needed
];

// A simple external link icon
const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


const Projects = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    projectsData.forEach(project => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [project.id]: true }));
      };
      // Optional: handle image load errors
      img.onerror = () => {
        console.warn(`Failed to load image for ${project.title}`);
        setLoadedImages(prev => ({ ...prev, [project.id]: true })); // Still mark as "loaded" to remove spinner
      }
    });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const hoverVariants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" // Default shadow
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(var(--color-accent-rgb), 0.15), 0 8px 10px -6px rgba(var(--color-accent-rgb), 0.1)" // Accent shadow
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/10"> {/* Slightly adjusted padding and bg */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-5xl font-display font-bold text-center mb-12 md:mb-16 text-gradient" // Adjusted size & margin
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> {/* Potentially 3 columns on large screens */}
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
              animate="rest" // Use 'animate' for Framer Motion to control the state
              className="group bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 transition-all duration-300 flex flex-col"
            >
              <motion.div variants={hoverVariants} className="flex-grow flex flex-col"> {/* Inner div for shadow animation */}
                <div className="relative overflow-hidden h-48 md:h-56"> {/* Fixed height for consistency */}
                  {!loadedImages[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                      loadedImages[project.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    } group-hover:scale-105`} // Subtle zoom on load and hover
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 px-6 py-3 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent/80 flex items-center gap-2"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project
                      <ExternalLinkIcon className="w-4 h-4"/>
                    </a>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow"> {/* Increased padding */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {/* Replaced button with an icon link, main CTA is on image hover */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-accent transition-colors duration-200 shrink-0 ml-2"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-white/60 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2"> {/* mt-auto pushes tags to bottom if content above is short */}
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 text-accent text-xs rounded-full font-medium" // More subtle tag styling
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;