import { Calendar, ExternalLink } from "lucide-react";
import { certifications } from "@/constants";
import { cn } from "@/lib/utils";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative p-6 rounded-lg border border-border/30 bg-card/50",
                "hover:border-primary/30 hover:bg-card/80 transition-all duration-300",
                "flex flex-col h-full shadow-sm hover:shadow-md"
              )}
            >
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              
              <div className="mb-4 inline-flex items-center">
                <span className={cn(
                  "px-2 py-1 rounded text-xs font-medium",
                  "bg-primary/10 text-primary"
                )}>
                  {cert.issuer}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground mb-2 pr-4 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="mt-auto flex items-center text-xs text-muted-foreground pt-4">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{cert.date}</span>
              </div>
              
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 