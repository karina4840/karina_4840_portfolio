import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      color: 'primary',
      skills: [
        { name: 'React', level: 95, years: 5, icon: 'Code' },
        { name: 'TypeScript', level: 90, years: 4, icon: 'FileCode' },
        { name: 'JavaScript', level: 95, years: 6, icon: 'Code2' },
        { name: 'HTML5/CSS3', level: 98, years: 6, icon: 'Layout' },
        { name: 'Tailwind CSS', level: 92, years: 3, icon: 'Palette' },
        { name: 'Sass/SCSS', level: 88, years: 4, icon: 'Paintbrush' }
      ]
    },
    backend: {
      title: 'Backend & Database',
      icon: 'Server',
      color: 'secondary',
      skills: [
        { name: 'Node.js/Express.js', level: 80, years: 3, icon: 'Terminal' },
        { name: 'REST APIs', level: 85, years: 4, icon: 'Link' },
        { name: 'MongoDB', level: 70, years: 2, icon: 'Database' },
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: 'Settings',
      color: 'accent',
      skills: [
        { name: 'Git/GitHub', level: 92, years: 5, icon: 'GitBranch' },
        { name: 'Webpack', level: 82, years: 4, icon: 'Box' },
        { name: 'Vite', level: 88, years: 2, icon: 'Zap' },
        { name: 'Jest/Testing', level: 85, years: 3, icon: 'CheckSquare' },
        { name: 'Figma', level: 80, years: 3, icon: 'Figma' },
        { name: 'VS Code', level: 95, years: 6, icon: 'Code' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: 'Users',
      color: 'success',
      skills: [
        { name: 'Project Management', level: 85, years: 4, icon: 'Calendar' },
        { name: 'Problem Solving', level: 92, years: 6, icon: 'Lightbulb' },
        { name: 'Communication', level: 90, years: 6, icon: 'MessageSquare' },
        { name: 'Agile/Scrum', level: 88, years: 4, icon: 'RotateCcw' },
        { name: 'Code Review', level: 90, years: 4, icon: 'Search' },
        { name: 'Documentation', level: 85, years: 5, icon: 'FileText' }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/20',
        text: 'text-primary',
        glow: 'hover:glow-primary',
        progress: 'bg-primary'
      },
      secondary: {
        bg: 'bg-secondary/10',
        border: 'border-secondary/20',
        text: 'text-secondary',
        glow: 'hover:glow-secondary',
        progress: 'bg-secondary'
      },
      accent: {
        bg: 'bg-accent/10',
        border: 'border-accent/20',
        text: 'text-accent',
        glow: 'hover:glow-accent',
        progress: 'bg-accent'
      },
      success: {
        bg: 'bg-success/10',
        border: 'border-success/20',
        text: 'text-success',
        glow: 'hover:glow-success',
        progress: 'bg-success'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
        {Object.entries(skillCategories).map(([key, category]) => {
          const colors = getColorClasses(category.color);
          return (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === key
                  ? `${colors.bg} ${colors.text} ${colors.border} border ${colors.glow}`
                  : 'bg-surface text-text-secondary border border-border hover:border-primary/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={category.icon} size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(' ')[0]}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {skillCategories[activeCategory].skills.map((skill, index) => {
          const colors = getColorClasses(skillCategories[activeCategory].color);
          
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${colors.bg} ${colors.border} ${colors.glow}`}
              whileHover={{ y: -5 }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <Icon name={skill.icon} size={16} className={`${colors.text} sm:w-5 sm:h-5`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">{skill.name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
};

export default SkillsSection;