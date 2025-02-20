
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3"
            >
              <MapPin className="w-6 h-6 text-accent" />
              <span className="text-lg">Green Town Lahore</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3"
            >
              <Phone className="w-6 h-6 text-accent" />
              <a href="tel:+923032224501" className="text-lg hover:text-accent transition-colors">
                +92 303 2224501
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3"
            >
              <Mail className="w-6 h-6 text-accent" />
              <a href="mailto:arhamawan200@gmail.com" className="text-lg hover:text-accent transition-colors">
                arhamawan200@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
