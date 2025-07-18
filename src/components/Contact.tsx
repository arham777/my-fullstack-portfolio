import { contactInfo } from "@/constants";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const icons = {
  Email: <Mail className="w-5 h-5" />,
  Phone: <Phone className="w-5 h-5" />,
  Location: <MapPin className="w-5 h-5" />,
  "Schedule a Meeting": <Calendar className="w-5 h-5" />,
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Get in Touch
        </h2>
        
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 place-items-center">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-center space-x-4 group w-64"
              >
                <div className="flex-shrink-0 p-2 rounded-md bg-background border border-border/50 group-hover:border-primary/50 transition-all duration-200">
                  {icons[info.title as keyof typeof icons]}
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm mt-1 block"
                  >
                    {info.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 text-muted-foreground text-sm">
            <p>Open to opportunities and collaborations worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;