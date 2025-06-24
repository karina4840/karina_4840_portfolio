import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen bg-color-background flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-color-accent to-color-secondary rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute inset-3 sm:inset-4 bg-color-surface rounded-full flex items-center justify-center">
              <Icon name="Wrench" size={36} className="sm:w-12 sm:h-12 text-color-accent text-glow-accent" />
            </div>
          </div>
        </div>
        <motion.h1 
          className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3 sm:mb-4 text-glow-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Under Maintenance
        </motion.h1>
        
        <p className="text-sm sm:text-base text-text-secondary mb-6 sm:mb-8 leading-relaxed px-4">
          Some updates are coming soon. 
          Please check back soon!
        </p>
        
        <div className="space-y-3 sm:space-y-4">
          <Link
            to="/homepage"
            className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:glow-accent hover:scale-105"
          >
            <Icon name="Home" size={18} className="sm:w-5 sm:h-5" />
            <span>Return Home</span>
          </Link>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
            <Link
              to="/experience"
              className="text-accent hover:text-white transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              to="/project-showcase"
              className="text-accent hover:text-white transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact-section"
              className="text-accent hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance; 