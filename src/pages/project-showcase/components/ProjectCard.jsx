import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const ProjectCard = ({ project, onSelect }) => {
  const handleCardClick = () => {
    onSelect(project);
  };

  return (
    <motion.div
      className="group relative bg-surface rounded-lg overflow-hidden border border-border cursor-pointer transition-all duration-300 hover:border-primary hover:glow-primary"
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

        {/* Overlay Icons */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
          {project.liveDemo && (
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-surface backdrop-blur-glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Icon name="ExternalLink" size={14} className="sm:w-4 sm:h-4 text-accent" />
            </div>
          )}
          {project.githubRepo && (
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-surface backdrop-blur-glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Icon name="Github" size={14} className="sm:w-4 sm:h-4 text-text-secondary" />
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="px-2 sm:px-3 py-1 bg-surface backdrop-blur-glass rounded-full text-xs font-medium text-accent border border-accent">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-glow-primary transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary mb-3 sm:mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-surface-light text-xs font-medium text-text-muted rounded border border-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-surface-light text-xs font-medium text-text-muted rounded border border-border">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors duration-300">
            <span>View Details</span>
            <Icon
              name="ArrowRight"
              size={14}
              className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          <div className="flex items-center space-x-1 sm:space-x-2">
            {project.liveDemo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveDemo, "_blank");
                }}
                className="p-1.5 sm:p-2 text-text-muted hover:text-accent transition-colors duration-300"
                title="Live Demo"
              >
                <Icon name="Play" size={14} className="sm:w-4 sm:h-4" />
              </button>
            )}
            {project.githubRepo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubRepo, "_blank");
                }}
                className="p-1.5 sm:p-2 text-text-muted hover:text-text-secondary transition-colors duration-300"
                title="View Code"
              >
                <Icon name="Github" size={14} className="sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent opacity-10 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
