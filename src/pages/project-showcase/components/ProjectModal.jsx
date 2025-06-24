import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const ProjectModal = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-color-background bg-opacity-90 backdrop-blur-sm"></div>

      {/* Modal */}
      <motion.div
        className="relative w-full sm:w-[90%] md:w-[80%] max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-surface rounded-lg border border-border overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent border-b border-b-primary"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-surface backdrop-blur-glass rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-colors duration-300"
          >
            <Icon name="X" size={16} className="sm:w-5 sm:h-5" />
          </button>

          {/* Project Info */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 sm:px-3 py-1 bg-surface backdrop-blur-glass rounded-full text-xs font-medium text-accent border border-accent">
                {project.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-2 text-glow-primary">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">{project.shortDescription}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Project Description */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                Project Description
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technology Stack */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-surface-light text-xs sm:text-sm font-medium text-accent rounded-lg border border-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-border pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:glow-primary hover:scale-105"
                    >
                      <Icon name="ExternalLink" size={14} className="sm:w-4 sm:h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 border border-accent text-accent rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-accent hover:text-white hover:glow-accent"
                    >
                      <Icon name="Github" size={14} className="sm:w-4 sm:h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
