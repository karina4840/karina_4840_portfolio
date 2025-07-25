import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const CallToAction = () => {
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-8 sm:space-y-12"
        >
          {/* Main CTA Content */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-glow-primary">
              Ready to Create
              <span className="text-primary"> Something Amazing?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
              Let's work together to turn your digital goals into reality. From
              performant, modern web applications to clean, accessible
              interfaces, I build solutions that are both technically sound and
              user-focused.
            </p>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <Link
              to="/project-showcase"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-text-tertiary rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:glow-primary hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3"
            >
              <Icon name="FolderOpen" size={20} className="sm:w-6 sm:h-6" />
              <span>Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <motion.a
              href="./assets/files/CV_Karina_Ivanova_Frontend_Developer.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-text-tertiary rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:glow-primary hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="Download" size={20} className="sm:w-6 sm:h-6" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-border px-4"
          >
            <Link
              to="/experience"
              className="group flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors duration-300 text-sm sm:text-base"
            >
              <Icon
                name="Briefcase"
                size={18}
                className="sm:w-5 sm:h-5 group-hover:animate-pulse-slow"
              />
              <span className="font-medium">View Experience</span>
            </Link>

            <Link
              to="/contact-section"
              className="group flex items-center space-x-2 text-text-secondary hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
            >
              <Icon
                name="MessageCircle"
                size={18}
                className="sm:w-5 sm:h-5 group-hover:animate-pulse-slow"
              />
              <span className="font-medium">Get In Touch</span>
            </Link>

            <a
              href="https://github.com/karina4840"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-text-secondary hover:text-success transition-colors duration-300 text-sm sm:text-base"
            >
              <Icon
                name="Github"
                size={18}
                className="sm:w-5 sm:h-5 group-hover:animate-pulse-slow"
              />
              <span className="font-medium">GitHub Profile</span>
            </a>

            <a
              href="https://www.linkedin.com/in/karina4840/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-text-secondary hover:text-warning transition-colors duration-300 text-sm sm:text-base"
            >
              <Icon
                name="Linkedin"
                size={18}
                className="sm:w-5 sm:h-5 group-hover:animate-pulse-slow"
              />
              <span className="font-medium">LinkedIn</span>
            </a>
          </motion.div>

          {/* Floating Elements - Hidden on mobile for better performance */}
          <div className="relative">
            <motion.div
              className="absolute -top-20 -left-20 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl  opacity-10 hidden xl:block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -top-16 -right-16 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-lg blur-xl   opacity-15 hidden xl:block"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
