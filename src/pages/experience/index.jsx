import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";
import TimelineCard from "./components/TimelineCard";
import SkillsSection from "./components/SkillsSection";

const ExperiencePage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experienceData = [
    {
      id: 1,
      type: "work",
      company: "Embed Signage",
      role: "Frontend Developer",
      duration: "Dec 2023 - Jun 2025",
      location: "Remote, UK",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEESFHZmdUj8Q/company-logo_200_200/company-logo_200_200/0/1728576429122/embed_signage_logo?e=1755734400&v=beta&t=UktzcR-HNCrxqKVbpUv17DxQ_6qUIFvbS5K8pgeEW0s",
      description: `Contributed to building and maintaining reusable components from Figma designs. Integrated APIs using React Query, enhanced UI/UX, and improved internal tools for content management. Led the development of an internal component library, boosting frontend consistency and team efficiency.`,
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind",
        "Figma",
        "Git",
        "GitHub",
        "API",
      ],
    },
    {
      id: 2,
      type: "work",
      company: "Agentum",
      role: "Junior Frontend Developer",
      duration: "Apr 2022 - May 2023",
      location: "Remote, Russia",
      logo: "https://static.tildacdn.com/tild3466-6161-4865-a333-653665656439/Agentum___Red.svg",
      description: `Collaborated with a team to develop responsive, user-friendly websites using HTML, CSS, and JavaScript. Integrated APIs, partnered with UX designers to refine interfaces, and contributed to code reviews and testing to ensure high-quality, reliable solutions.`,
      technologies: ["JavaScript", "HTML5", "CSS3", "GitHub", "API"],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "Award",
    },
    {
      id: 2,
      name: "React Professional Certification",
      issuer: "Meta",
      year: "2022",
      icon: "Certificate",
    },
    {
      id: 3,
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2021",
      icon: "TrendingUp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-color-background pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Hero Section */}
      <motion.section
        className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-surface rounded-full border border-primary mb-4 sm:mb-6"
            animate={{ glow: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="MapPin" size={14} className="sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              Professional Journey
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 text-glow-primary">
            Experience
            <span className="text-primary"> Timeline</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            A chronological journey through my professional growth, technical
            evolution, and the impactful projects that shaped my expertise in
            frontend development.
          </p>
        </div>

        {/* Floating Elements - Hidden on mobile for better performance */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary opacity-10 rounded-full blur-xl animate-pulse-slow hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary opacity-10 rounded-full blur-xl animate-pulse-slow hidden lg:block"></div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-24">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                {/* Timeline Node - Hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background z-10 hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse-slow opacity-50"></div>
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-32"
                  }`}
                >
                  <TimelineCard
                    item={item}
                    isActive={activeCard === item.id}
                    onToggle={() =>
                      setActiveCard(activeCard === item.id ? null : item.id)
                    }
                    index={index}
                  />
                </div>

                {/* Year Indicator - Hidden on mobile */}
                <div
                  className={`hidden lg:block w-5/12 text-center ${
                    index % 2 === 0 ? "order-last" : "order-last"
                  }`}
                >
                  <div className="text-2xl font-heading font-bold text-primary text-glow-primary">
                    {item.duration.split(" - ")[0]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4 text-glow-accent">
              Skills
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical proficiencies, years of
              experience, and expertise levels across different technologies and
              domains
            </p>
          </div>

          <SkillsSection />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 md:p-12 border border-primary/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-3 sm:mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how my experience and skills can contribute to your
              next project. I'm always excited to take on new challenges and
              create exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="/contact-section"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-text-tertiary rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:glow-primary hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="MessageCircle" size={18} className="sm:w-5 sm:h-5" />
                <span>Let's Connect</span>
              </motion.a>
              <motion.a
                href="/project-showcase"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border border-accent text-accent rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-accent hover:text-white hover:glow-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="FolderOpen" size={18} className="sm:w-5 sm:h-5" />
                <span>View Projects</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ExperiencePage;
