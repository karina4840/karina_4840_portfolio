import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const PersonalIntroduction = () => {
  const personalInfo = {
    name: "Karina Ivanova",
    title: "Frontend Developer & Digital Experience Designer",
    biography: `I'm a frontend developer with 3 years of experience building fast, accessible, and visually polished web interfaces. With a strong eye for design and a love for clean, maintainable code, I bridge the gap between aesthetics and functionality. I’ve always been drawn to the creative and technical sides of the web — and I bring that energy into every project I work on.`,
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
    <section className="py-20 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Profile */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-surface rounded-2xl border border-primary glow-primary flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-text-secondary font-mono text-sm">
                        {personalInfo.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Status Indicators */}
                <motion.div
                  className="absolute -top-4 -right-4 px-3 py-1 bg-success text-white rounded-full text-xs font-semibold glow-success"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Active
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white text-glow-primary">
                Crafting Digital
                <span className="text-secondary"> Experiences</span>
              </h2>

              <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
                <p>{personalInfo.biography}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalIntroduction;
