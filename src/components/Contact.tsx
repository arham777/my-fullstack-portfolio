import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionTransition from "./SectionTransition";
import AnimateOnScroll from "./AnimateOnScroll";

const Contact = () => {
  return (
    <SectionTransition id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <AnimateOnScroll
          direction="up"
          delay={0.2}
          type="spring"
          className="max-w-md mx-auto"
        >
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-center text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimateOnScroll delay={0.3} direction="right" className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">College road Lahore</p>
                </div>
              </AnimateOnScroll>
              
              <Separator />
              
              <AnimateOnScroll delay={0.4} direction="right" className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a 
                    href="tel:+923264002982" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 326 4002982
                  </a>
                </div>
              </AnimateOnScroll>
              
              <Separator />
              
              <AnimateOnScroll delay={0.5} direction="right" className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a 
                    href="mailto:arhamawan200@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    arhamawan200@gmail.com
                  </a>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.6} direction="up">
                <Button className="w-full mt-4 gap-2">
                  Schedule a meeting
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </AnimateOnScroll>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </SectionTransition>
  );
};

export default Contact;