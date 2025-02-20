
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "#"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-accent hover:text-accent/80 font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
