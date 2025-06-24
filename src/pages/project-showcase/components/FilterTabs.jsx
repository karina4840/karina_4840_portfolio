import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const FilterTabs = ({ options, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-4 px-4">
      {options.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`relative flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 md:px-6 sm:py-2 md:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 ${
            activeFilter === option.id
              ? "text-primary bg-surface border border-primary glow-primary"
              : "text-text-secondary hover:text-white hover:bg-surface-light border border-border"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            name={option.icon}
            size={14}
            className={`sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 ${
              activeFilter === option.id ? "text-primary" : "text-accent"
            }`}
          />
          <span className="hidden sm:inline">{option.label}</span>
          <span className="sm:hidden">{option.label.split(' ')[0]}</span>

          {/* Active indicator */}
          {activeFilter === option.id && (
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
              layoutId="activeTab"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTabs;
