import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const FilterTabs = ({ options, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
      {options.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`relative flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
            activeFilter === option.id
              ? "text-primary bg-surface border border-primary glow-primary"
              : "text-text-secondary hover:text-white hover:bg-surface-light border border-border"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon
            name={option.icon}
            size={18}
            className={`${
              activeFilter === option.id ? "text-primary" : "text-accent"
            }`}
          />
          <span className="text-sm sm:text-base">{option.label}</span>

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
