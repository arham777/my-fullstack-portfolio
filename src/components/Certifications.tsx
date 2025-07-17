import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/constants";
import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card border border-border/20 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 flex flex-col group"
            >
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer}
                </p>
                <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" font-medium  transition-colors duration-300"
                  >
                    View Certificate <MoveUpRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 