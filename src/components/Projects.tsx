import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/80 border border-border/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-border/60 transition-all duration-300 flex flex-col group"
            >
              <CardHeader>
                <img src={project.image} alt={project.title} className="mb-4 rounded-md grayscale group-hover:grayscale-0 transition-all duration-300" />
                <CardTitle className="text-lg font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/80 font-medium hover:text-primary hover:underline transition-colors duration-300"
                >
                  View Project
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;