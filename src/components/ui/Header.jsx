import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "Experience", path: "/experience", icon: "Briefcase" },
    {
      name: "Projects",
      path: "/project-showcase",
      icon: "FolderOpen",
    },
    {
      name: "Contact",
      path: "/contact-section",
      icon: "MessageCircle",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-glass shadow-elevation" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-28 lg:h-20">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-2 sm:space-x-4 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:glow-primary transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-heading font-bold text-sm sm:text-xl">
                  K
                </span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse-slow"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg sm:text-2xl font-heading font-bold text-white group-hover:text-glow-primary transition-all duration-300">
                Karina I.
              </span>
              <div className="text-xs sm:text-md text-text-secondary font-mono">
                Web Creator
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? "text-primary bg-surface glow-primary"
                    : "text-text-secondary hover:text-white hover:bg-surface-light"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    name={item.icon}
                    size={18}
                    className={`transition-all duration-300 ${
                      isActivePath(item.path)
                        ? "text-primary"
                        : "group-hover:text-secondary"
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="./assets/files/CV_Karina_Ivanova_Frontend_Developer.pdf"
              download
              className="px-4 py-2 border border-primary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:glow-primary hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-text-secondary hover:text-white hover:bg-surface-light transition-all duration-300 min-w-[66px] min-h-[66px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} className="sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-72 sm:max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 sm:py-3 space-y-0.5 sm:space-y-1 backdrop-blur-glass rounded-lg mt-1 sm:mt-2 border border-border">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-2 px-3 py-2.5 sm:py-2 mx-2 rounded-lg font-medium transition-all duration-300 min-h-[44px] ${
                  isActivePath(item.path)
                    ? "text-primary bg-surface glow-primary"
                    : "text-text-secondary hover:text-white hover:bg-surface-light"
                }`}
              >
                <Icon
                  name={item.icon}
                  size={16}
                  className={`sm:w-4 sm:h-4 ${
                    isActivePath(item.path) ? "text-primary" : "text-accent"
                  }`}
                />
                <span className="text-sm sm:text-base">{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full animate-pulse-slow"></div>
                )}
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="px-3 py-2 space-y-2 border-t border-border mt-2 sm:mt-3">
              <a
                href="./assets/files/CV_Karina_Ivanova_Frontend_Developer.pdf"
                download
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full px-3 py-2.5 sm:py-2 border border-primary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:glow-primary text-sm sm:text-base min-h-[44px]"
              >
                <Icon name="Download" size={14} className="sm:w-4 sm:h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Availability Status Indicator */}
      <div className="absolute top-full right-3 sm:right-4 mt-1 sm:mt-2 hidden lg:block">
        <div className="flex items-center space-x-2 px-3 py-1 bg-surface backdrop-blur-glass rounded-full border border-success text-xs">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
          <span className="text-success font-medium">
            Available for Projects
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
