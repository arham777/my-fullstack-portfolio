import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/constants";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const icons = {
  Email: <Mail className="w-6 h-6 text-primary" />,
  Phone: <Phone className="w-6 h-6 text-primary" />,
  Location: <MapPin className="w-6 h-6 text-primary" />,
  "Schedule a Meeting": <Calendar className="w-6 h-6 text-primary" />,
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Get in Touch
        </h2>
        <Card className="max-w-3xl mx-auto bg-card border border-border/20 rounded-2xl shadow-lg overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50"
                >
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    {icons[info.title as keyof typeof icons]}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {info.description}
                    </p>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline text-sm"
                    >
                      {info.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;