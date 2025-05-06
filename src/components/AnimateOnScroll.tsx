import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  type?: "spring" | "tween";
}

const AnimateOnScroll = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  distance = 50,
  type = "spring",
}: AnimateOnScrollProps) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        duration,
        delay,
        ease: type === "spring" ? "easeOut" : "easeInOut",
        stiffness: type === "spring" ? 100 : undefined,
        damping: type === "spring" ? 12 : undefined,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 