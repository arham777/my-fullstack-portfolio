
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Muhammad Arham Athar</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A passionate full-stack developer crafting beautiful and functional web experiences
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/arham777"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-accent transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="www.linkedin.com/in/muhammad-arham-athar-4bba202b7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:arhamawan200@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
