import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import PersonalIntroduction from "./components/PersonalIntroduction";
import CallToAction from "./components/CallToAction";
import ParticleBackground from "./components/ParticleBackground";

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-color-background relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Personal Introduction */}
        <PersonalIntroduction />

        {/* Call to Action */}
        <CallToAction />
      </motion.main>
    </div>
  );
};

export default Homepage;
