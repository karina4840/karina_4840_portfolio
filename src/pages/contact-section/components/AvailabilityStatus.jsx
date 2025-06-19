import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/AppIcon";

const AvailabilityStatus = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const preferredMethods = [
    {
      method: "Email",
      icon: "Mail",
      priority: "Primary",
      description: "Best for detailed project discussions",
      color: "text-secondary",
      contact: "karina4840@gmail.com",
      action: "mailto:karina4840@gmail.com",
      type: "mail",
    },
    {
      method: "LinkedIn",
      icon: "Linkedin",
      priority: "Quick Response",
      description: "For immediate questions and networking",
      color: "text-secondary",
      contact: "linkedin.com/in/karina4840",
      action: "https://www.linkedin.com/in/karina4840/",
      type: "link",
    },
    {
      method: "GitHub",
      icon: "Github",
      priority: "Portfolio",
      description: "View my code and projects",
      color: "text-secondary",
      contact: "github.com/karina4840",
      action: "https://github.com/karina4840",
      type: "link",
    },
    {
      method: "Resume",
      icon: "FileText",
      priority: "Download",
      description: "View or download my professional resume",
      color: "text-secondary",
      contact: "resume.pdf",
      action: "preview",
      type: "resume",
    },
  ];

  const handleContactAction = (method) => {
    if (method.type === "link") {
      window.open(method.action, "_blank", "noopener,noreferrer");
    } else if (method.type === "copy") {
      navigator.clipboard.writeText(method.contact);
    } else if (method.type === "resume") {
      setIsPreviewOpen(true);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./assets/files/CV_Karina_Ivanova_Frontend_Developer.pdf";
    link.download = "CV_Karina_Ivanova_Frontend_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mb-12">
      {/* Contact Methods Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {preferredMethods.map((method, index) => (
          <motion.button
            key={method.method}
            onClick={() => handleContactAction(method)}
            className="bg-surface rounded-lg p-4 border border-border hover:border-primary hover:glow-primary transition-all duration-300 text-left group cursor-pointer h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start space-x-3 mb-3">
              <div
                className={`w-8 h-8 bg-surface-light rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0`}
              >
                <Icon
                  name={method.icon}
                  size={18}
                  className={`${method.color} group-hover:text-primary transition-colors duration-300`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                  {method.method}
                </h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full bg-surface-light ${method.color} group-hover:bg-primary/20 transition-colors duration-300 inline-block mt-1`}
                >
                  {method.priority}
                </span>
              </div>
              <Icon
                name={
                  method.type === "resume"
                    ? "Eye"
                    : method.type === "mail"
                    ? "Mail"
                    : "ExternalLink"
                }
                size={16}
                className="text-text-secondary group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100 flex-shrink-0"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-sm text-text-secondary mb-2 group-hover:text-white transition-colors duration-300">
                {method.description}
              </p>
              <div className="text-xs text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">
                {method.contact}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              className="bg-surface rounded-xl border border-border max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-surface/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={16} color="white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-white">
                      Resume Preview
                    </h3>
                    <p className="text-xs text-text-secondary">
                      resume.pdf • June 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleDownload}
                    className="px-3 py-1.5 bg-accent text-white rounded-lg font-medium text-sm transition-all duration-300 hover:glow-accent hover:scale-105 flex items-center space-x-2"
                  >
                    <Icon name="Download" size={14} />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-1.5 text-text-secondary hover:text-white hover:bg-surface-light rounded-lg transition-all duration-300"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="h-[calc(90vh-80px)] bg-white">
                <iframe
                  src="./assets/files/CV_Karina_Ivanova_Frontend_Developer.pdf"
                  className="w-full h-full border-0"
                  title="Resume Preview"
                  style={{ minHeight: "500px" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AvailabilityStatus;
