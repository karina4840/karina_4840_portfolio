import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const TimelineCard = ({ item, isActive, onToggle, index }) => {
  const cardVariants = {
    collapsed: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`relative bg-surface rounded-xl border transition-all duration-300 cursor-pointer ${
        item.type === "work"
          ? "border-accent hover:border-accent hover:glow-accent"
          : "border-primary hover:border-primary hover:glow-primary"
      } ${isActive ? "scale-105" : "hover:scale-102"}`}
      variants={cardVariants}
      animate={isActive ? "expanded" : "collapsed"}
      onClick={onToggle}
      whileHover={{ y: -5 }}
    >
      {/* Card Header */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start space-x-3 sm:space-x-4">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-border">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white truncate">
                {item.role}
              </h3>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  name="ChevronDown"
                  size={18}
                  className={`sm:w-5 sm:h-5 ${
                    item.type === "work" ? "text-accent" : "text-primary"
                  }`}
                />
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
              <p className="text-base sm:text-lg font-semibold text-text-secondary">
                {item.company}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-text-muted">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brief Description */}
        <div className="mt-3 sm:mt-4">
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed line-clamp-2">
            {item.description.split("\n\n")[0]}
          </p>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="border-t border-border"
          >
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Full Description */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  Overview
                </h4>
                <div className="text-sm sm:text-base text-text-secondary leading-relaxed whitespace-pre-line">
                  {item.description}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        item.type === "work"
                          ? "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                          : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none ${
          item.type === "work"
            ? "bg-accent/5 hover:opacity-100"
            : "bg-primary/5 hover:opacity-100"
        }`}
      ></div>
    </motion.div>
  );
};

export default TimelineCard;
