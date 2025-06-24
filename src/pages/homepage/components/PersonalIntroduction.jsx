import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const PersonalIntroduction = () => {
  const personalInfo = {
    name: "Karina Ivanova",
    title: "Frontend Developer & Digital Experience Designer",
    biography: `I'm a frontend developer with 3 years of experience building fast, accessible, and visually polished web interfaces. With a strong eye for design and a love for clean, maintainable code, I bridge the gap between aesthetics and functionality. I've always been drawn to the creative and technical sides of the web — and I bring that energy into every project I work on.`,
    currentFocus: [
      "React 18 & Next.js 13+ Applications",
      "Advanced Animation with Framer Motion",
      "Performance Optimization & Core Web Vitals",
      "Accessible Design Systems",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Profile */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-surface rounded-2xl border border-primary glow-primary flex items-center justify-center">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <Icon name="User" size={32} className="sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-text-secondary font-mono text-xs sm:text-sm">
                        {personalInfo.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Status Indicators */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-2 sm:px-3 py-1 bg-success text-white rounded-full text-xs font-semibold glow-success"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Active
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Introduction */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white text-glow-primary">
                Crafting Digital
                <span className="text-secondary"> Experiences</span>
              </h2>

              <div className="prose prose-sm sm:prose-lg max-w-none text-text-secondary leading-relaxed">
                <p className="text-sm sm:text-base">{personalInfo.biography}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalIntroduction;
