
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 nav-glass"
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <motion.a
          href="#home"
          className="text-2xl font-display font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          MA.
        </motion.a>
        <ul className="flex items-center space-x-8">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ y: -2 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/90 hover:text-white link-underline"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
