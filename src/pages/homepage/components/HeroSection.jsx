import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Building Interfaces That Perform",
    "Turning Complex Problems into Clean UI",
    "Design-Driven Frontend Engineering",
    "Where Function Meets Aesthetic Precision",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-[60vh] lg:min-h-screen flex items-center justify-center px-4 pt-20 lg:pt-0">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-8xl font-heading font-black text-white text-glow-primary leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Karina I.
              <br />
              <span className="text-primary">Frontend Developer </span>
            </motion.h1>

            {/* Animated Taglines */}
            <motion.div
              className="h-12 flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-secondary text-glow-secondary"
              >
                {taglines[currentTagline]}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Role Description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Frontend developer building fast, accessible, and polished
              interfaces with a focus on user experience and modern tools.
            </p>
          </motion.div>

          {/* Status Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <div className="flex items-center space-x-2 px-4 py-2 bg-surface backdrop-blur-glass rounded-full border border-success">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
              <span className="text-success font-medium">
                Available for Work
              </span>
            </div>

            <div className="flex items-center space-x-2 px-4 py-2 bg-surface backdrop-blur-glass rounded-full border border-accent">
              <Icon name="MapPin" size={16} className="text-accent" />
              <span className="text-accent font-medium">York, UK</span>
            </div>

            <div className="flex items-center space-x-2 px-4 py-2 bg-surface backdrop-blur-glass rounded-full border border-warning">
              <Icon name="Clock" size={16} className="text-warning" />
              <span className="text-warning font-medium">
                3+ Years Experience
              </span>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 hidden lg:block"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-20 glow-primary"></div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-10 hidden lg:block"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full opacity-30 glow-accent"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/4 hidden lg:block"
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-success to-primary rounded-lg opacity-25 glow-success"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
