import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "Eye" },
    { id: "technical", label: "Technical", icon: "Code" },
    { id: "impact", label: "Impact", icon: "TrendingUp" },
  ];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Project Description
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Problem Statement
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Solution Approach
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {project.solutionApproach}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface-light text-sm font-medium text-accent rounded-lg border border-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case "technical":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Technical Implementation
              </h4>
              <div className="bg-surface-dark rounded-lg p-4 border border-border">
                <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
                  <code>{project.technicalDetails}</code>
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Key Features
              </h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-success mt-1 flex-shrink-0"
                  />
                  <span>Responsive design with mobile-first approach</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-success mt-1 flex-shrink-0"
                  />
                  <span>
                    Performance optimized with lazy loading and code splitting
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-success mt-1 flex-shrink-0"
                  />
                  <span>Accessibility compliant with WCAG 2.1 guidelines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-success mt-1 flex-shrink-0"
                  />
                  <span>Cross-browser compatibility and testing</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Lessons Learned
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          </div>
        );

      case "impact":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                User Impact
              </h4>
              <p className="text-text-secondary leading-relaxed mb-4">
                {project.userImpact}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-light rounded-lg p-4 border border-success">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      name="TrendingUp"
                      size={20}
                      className="text-success"
                    />
                    <span className="text-sm font-medium text-success">
                      Performance
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white">40%</div>
                  <div className="text-xs text-text-tertiary">
                    Improvement in key metrics
                  </div>
                </div>

                <div className="bg-surface-light rounded-lg p-4 border border-accent">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" size={20} className="text-accent" />
                    <span className="text-sm font-medium text-accent">
                      User Satisfaction
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-text-tertiary">
                    Positive user feedback
                  </div>
                </div>
              </div>
            </div>

            {project.testimonial && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Client Testimonial
                </h4>
                <blockquote className="bg-surface-light rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-text-secondary italic leading-relaxed">
                    "{project.testimonial}"
                  </p>
                </blockquote>
              </div>
            )}

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Project Outcomes
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-text-secondary">
                    Successfully delivered on time and within budget
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-text-secondary">
                    Exceeded performance benchmarks by 25%
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-text-secondary">
                    Received positive feedback from stakeholders
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-text-secondary">
                    Established foundation for future enhancements
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-color-background bg-opacity-90 backdrop-blur-sm"></div>

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface rounded-lg border border-border overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-surface backdrop-blur-glass rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-colors duration-300"
          >
            <Icon name="X" size={20} />
          </button>

          {/* Project Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-surface backdrop-blur-glass rounded-full text-xs font-medium text-accent border border-accent">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-2 text-glow-primary">
              {project.title}
            </h2>
            <p className="text-text-secondary">{project.shortDescription}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-border">
          <div className="flex space-x-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary bg-surface-light"
                    : "text-text-secondary hover:text-white hover:bg-surface-light"
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:glow-primary hover:scale-105"
                >
                  <Icon name="ExternalLink" size={16} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 border border-accent text-accent rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:glow-accent"
                >
                  <Icon name="Github" size={16} />
                  <span>View Code</span>
                </a>
              )}
            </div>

            <div className="flex items-center space-x-4 text-sm text-text-tertiary">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>3 min read</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
