
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "Skills", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 nav-glass"
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <motion.a
          href="#home"
          className="text-2xl font-display font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          MA.
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 top-[64px] bg-primary/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-white/90 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
