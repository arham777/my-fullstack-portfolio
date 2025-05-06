import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useAnimationContext } from "../App";

interface IndexProps {
  onSectionChange: (section: string) => void;
}

const Index = ({ onSectionChange }: IndexProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar onSectionChange={onSectionChange} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Index;
