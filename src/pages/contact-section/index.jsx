import React, { useState } from "react";

import { motion } from "framer-motion";
import Icon from "components/AppIcon";
import ContactForm from "./components/ContactForm";
import AvailabilityStatus from "./components/AvailabilityStatus";

const ConnectionHubContactSocial = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-color-background pt-16 sm:pt-20 lg:pt-24">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <div className="relative inline-block mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white text-glow-primary">
              Let's Connect
            </h1>
            <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse-slow"></div>
          </div>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your digital vision to life? Let's collaborate and
            create something extraordinary together.
          </p>
        </motion.div>

        {/* Availability Status */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <AvailabilityStatus />
        </motion.div>

        {/* Contact Form Section */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-2/3 lg:mx-auto"
          >
            <ContactForm
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-surface to-surface-light rounded-lg border border-border mx-4 sm:mx-0"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Icon
              name="Heart"
              size={18}
              className="sm:w-5 sm:h-5 text-primary animate-pulse-slow"
            />
            <span className="text-sm sm:text-base text-text-secondary">Thank you for visiting</span>
            <Icon
              name="Heart"
              size={18}
              className="sm:w-5 sm:h-5 text-primary animate-pulse-slow"
            />
          </div>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to build something amazing, collaborate on a
            project, or just want to say hello, I'd love to hear from you.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConnectionHubContactSocial;
