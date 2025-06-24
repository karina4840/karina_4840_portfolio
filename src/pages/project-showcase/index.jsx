import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/AppIcon";

import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import FilterTabs from "./components/FilterTabs";

const ProjectShowcaseInteractiveGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Creative Portfolio Website",
      category: "Portfolios",
      technologies: ["React", "Framer Motion", "Tailwind", "Node.js", "Vite"],
      image: "./assets/images/portfolio.png",
      shortDescription:
        "A modern, responsive portfolio showcasing my web development journey with smooth animations and interactive elements",
        longDescription: `A dynamic and visually stunning portfolio website that showcases my creative journey in web development. Features include smooth animations powered by Framer Motion, responsive design that adapts to any device, and interactive elements that engage visitors. Built with modern React practices and optimized for performance.`,
      liveDemo: "https://karina4840.github.io/karina_4840_portfolio/#/homepage",
      githubRepo: "https://github.com/karina4840/karina_4840_portfolio",
    },
    {
      id: 2,
      title: "[Coming Soon] HabitFlow - Habit Tracker",
      category: "Web Apps",
      technologies: [
        "React",
        "Framer Motion",
        // "Chart.js",
        "Node.js",
        "Vite",
      ],
      image: "./assets/images/habitFlow.png",
      shortDescription:
        "A sleek and intuitive habit tracker designed to help you build routines, stay consistent, and achieve your goals with ease.",
      longDescription: `HabitFlow is a simple, effective habit tracker to help you build routines, stay consistent, and reach your goals—one habit at a time.`,

      liveDemo: "",
      githubRepo: "",
    },
    {
      id: 3,
      title: "MoodTunes Your AI Music Assistant",
      category: "Web Apps",
      technologies: ["React", "Tailwind", "OpenAI", "Node.js", "Vite"],
      image: "./assets/images/moodTunes.png",
      shortDescription:
        "Your AI-powered music assistant that curates playlists to match your mood, vibe, or activity",
      longDescription: `MoodTunes is your intelligent music companion that understands how you feel and delivers the perfect soundtrack for every moment. Whether you're working out, relaxing, studying, or just vibing, MoodTunes uses AI to analyze your mood and create playlists that sync with your emotions and activities.`,

      liveDemo: "https://music-companion.netlify.app/playlist-selection-screen",
      githubRepo: "https://github.com/karina4840/music_companion",
    },
    {
      id: 4,
      title: "[Coming Soon] E-Commerce Platform",
      category: "Web Apps",
      technologies: [
        "React",
        // "Next.js",
        "Tailwind CSS",
        "Stripe",
        "Node.js",
        "Vite",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      shortDescription:
        "Modern e-commerce platform with advanced filtering and payment integration",
      longDescription: `A comprehensive e-commerce solution built with Next.js and React, featuring advanced product filtering, real-time inventory management, and seamless payment processing through Stripe integration.

    The platform includes a sophisticated admin dashboard for inventory management, order tracking, and customer analytics. The frontend delivers a smooth shopping experience with optimized performance and mobile-first responsive design.`,

      liveDemo: "",
      githubRepo: "",
    },
    {
      id: 5,
      title: "[Coming Soon] Minimalist Design System",
      category: "UI/UX",
      technologies: [
        "React",
        // "Storybook",
        "Figma",
        "Sass",
        "Node.js",
        "Vite",
      ],
      image: "./assets/images/designSystem.png",
      shortDescription:
        "Comprehensive design system with reusable components and documentation",
      longDescription: `A comprehensive design system built for scalability and consistency, featuring a complete component library, design tokens, and extensive documentation for development teams.

    The system includes over 50 reusable components, comprehensive style guides, and integration tools that ensure design consistency across multiple products and platforms.`,

      liveDemo: "",
      githubRepo: "",
    },
  ];

  const filterOptions = [
    { id: "all", label: "All Projects", icon: "Grid3X3" },
    { id: "Web Apps", label: "Web Apps", icon: "Globe" },
    { id: "Portfolios", label: "Portfolios", icon: "User" },
    { id: "UI/UX", label: "UI/UX", icon: "Palette" },
  ];

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-color-background">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
              Project{" "}
              <span className="text-primary text-glow-primary">Showcase</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Explore my technical capabilities through interactive demos,
              detailed case studies, and comprehensive project documentation
              that demonstrates real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-text-tertiary">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Code" size={14} className="sm:w-4 sm:h-4" />
                <span>{projects.length} Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-warning">
                <Icon name="Star" size={14} className="sm:w-4 sm:h-4" />
                <span>Live Demos Available</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Github" size={14} className="sm:w-4 sm:h-4" />
                <span>Open Source</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FilterTabs
            options={filterOptions}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    onSelect={setSelectedProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 sm:py-20"
            >
              <Icon
                name="Search"
                size={40}
                className="sm:w-12 sm:h-12 text-text-tertiary mx-auto mb-3 sm:mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-text-secondary mb-2">
                No projects found
              </h3>
              <p className="text-sm sm:text-base text-text-tertiary">
                Try adjusting your filter to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 sm:mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 px-4">
              Let's collaborate on your next project and create exceptional
              digital experiences together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 px-4">
              <motion.a
                href="/contact-section"
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-text-tertiary rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:glow-primary hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="MessageCircle" size={18} className="sm:w-5 sm:h-5" />
                <span>Start a Project</span>
              </motion.a>
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-accent text-accent rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-accent hover:text-white hover:glow-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Github" size={18} className="sm:w-5 sm:h-5" />
                <span>View All Code</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectShowcaseInteractiveGallery;
