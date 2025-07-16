import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AnimateOnScroll from "./AnimateOnScroll";

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative">
      {/* Section divider at the top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider mx-auto max-w-5xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-title-2 text-gradient">
              Get in Touch
            </h2>
            <p className="text-body-sm mt-1.5 max-w-md mx-auto">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          direction="up"
          delay={0.2}
          type="spring"
          className="max-w-sm mx-auto"
        >
          <Card className="card-surface card-hover">
            <CardHeader className="border-b border-dark-border/20 bg-dark-muted py-3">
              <CardTitle className="text-center text-heading">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-4 bg-gradient-to-b from-dark-surface to-dark-surface/95">
              <AnimateOnScroll delay={0.3} direction="right" className="flex items-center gap-2.5">
                <div className="bg-primary-600/10 p-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs font-normal">Location</p>
                  <p className="text-caption">College road Lahore</p>
                </div>
              </AnimateOnScroll>
              
              <Separator className="bg-dark-border/15" />
              
              <AnimateOnScroll delay={0.4} direction="right" className="flex items-center gap-2.5">
                <div className="bg-primary-600/10 p-1.5 rounded-full">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs font-normal">Phone</p>
                  <a 
                    href="tel:+923264002982" 
                    className="text-caption hover:text-primary-400 transition-colors"
                  >
                    +92 326 4002982
                  </a>
                </div>
              </AnimateOnScroll>
              
              <Separator className="bg-dark-border/15" />
              
              <AnimateOnScroll delay={0.5} direction="right" className="flex items-center gap-2.5">
                <div className="bg-primary-600/10 p-1.5 rounded-full">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <p className="text-xs font-normal">Email</p>
                  <a 
                    href="mailto:arhamawan200@gmail.com" 
                    className="text-caption hover:text-primary-400 transition-colors"
                  >
                    arhamawan200@gmail.com
                  </a>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.6} direction="up">
                <Button className="w-full mt-3 gap-1.5 bg-gradient-accent text-white font-normal rounded-md hover:opacity-90 transition-opacity py-2 px-4 text-sm">
                  Schedule a meeting
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </AnimateOnScroll>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;