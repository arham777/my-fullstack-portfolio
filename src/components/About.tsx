import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";
import meImg from "../assets/me.jpg";

const About: React.FC = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  
  // Text animation variants
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.3 + i * 0.2,
        ease: "easeOut"
      }
    })
  };

  // Image container variants
  const imageContainerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotate: -2
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.02,
      rotate: 1,
      transition: { duration: 0.3 }
    }
  };

  // Divider animation
  const dividerVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: { duration: 1.2, delay: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <section id="about" className="py-24 border-b border-border/40 relative overflow-hidden">
      {/* Background subtle gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80 opacity-80" />
      
      {/* Animated particles or shapes could be added here */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={containerRef}
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl font-bold text-center mb-16"
          >
            <span className="relative">
              About Me
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-primary/60 rounded-full"
                variants={dividerVariants}
              />
            </span>
          </motion.h2>

          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-12 items-center`}>
            {/* Image section with parallax */}
            <motion.div 
              ref={imageRef}
              className="w-full md:w-2/5 relative"
              variants={imageContainerVariants}
              whileHover="hover"
            >
              <motion.div 
                className="rounded-2xl w-[80%] overflow-hidden border border-border/20 shadow-md mx-auto"
                style={{ 
                  y: !isMobile ? imageY : 0,
                  scale: !isMobile ? imageScale : 1
                }}
              >
                <img 
                  src={meImg} 
                  alt="Muhammad Arham Athar" 
                  className="w-full object-cover object-top" 
                />
                
                {/* Fancy overlay effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>

            {/* Content section with staggered text reveal */}
            <motion.div 
              ref={textRef}
              className="w-full md:w-3/5 space-y-6"
            >
              <motion.h3 
                variants={titleVariants}
                className="text-2xl font-semibold"
              >
                Muhammad Arham Athar
              </motion.h3>
              
              <motion.p 
                custom={0}
                variants={paragraphVariants}
                className="text-muted-foreground text-lg"
              >
                I am a passionate Full Stack Developer with expertise in building modern web 
                applications and digital experiences that blend form and function.
              </motion.p>
              
              <div className="space-y-4">
                <motion.p
                  custom={1}
                  variants={paragraphVariants}
                >
                  With a strong foundation in both frontend and backend technologies, I create 
                  seamless user experiences using React and Next.js while building robust 
                  server-side solutions with Python and Django.
                </motion.p>
                
                <motion.p
                  custom={2}
                  variants={paragraphVariants}
                >
                  My approach combines clean code principles with modern design aesthetics, 
                  ensuring that applications are not only functional but also visually appealing 
                  and intuitive to use.
                </motion.p>
                
                <motion.p
                  custom={3}
                  variants={paragraphVariants}
                >
                  Currently, I'm focused on leveraging cloud technologies and containerization to 
                  build scalable, efficient applications that meet real-world business needs.
                </motion.p>
              </div>
              
              {/* Skills badges with hover effect */}
              <motion.div
                variants={paragraphVariants}
                custom={4}
                className="pt-4"
              >
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Python", "Django", "TypeScript", "AWS"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(var(--primary-rgb), 0.1)"
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 1.2 + index * 0.1 }
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 