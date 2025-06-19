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
      title: "E-Commerce Platform",
      category: "Web Apps",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      shortDescription:
        "Modern e-commerce platform with advanced filtering and payment integration",
      longDescription: `A comprehensive e-commerce solution built with Next.js and React, featuring advanced product filtering, real-time inventory management, and seamless payment processing through Stripe integration.

The platform includes a sophisticated admin dashboard for inventory management, order tracking, and customer analytics. The frontend delivers a smooth shopping experience with optimized performance and mobile-first responsive design.`,
      problemStatement:
        "Traditional e-commerce platforms often suffer from slow loading times, poor mobile experience, and complex checkout processes that lead to high cart abandonment rates.",
      solutionApproach:
        "Implemented server-side rendering with Next.js for optimal performance, created an intuitive mobile-first design, and streamlined the checkout process to a single page with guest checkout options.",
      technicalDetails: `// Advanced filtering with debounced search
const useProductFilter = (products, filters) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filtered = products.filter(product => {
        return filters.category === 'all' || 
               product.category === filters.category;
      });
      setFilteredProducts(filtered);
    }, 300);
    
    return () => clearTimeout(debounceTimer);
  }, [products, filters]);
  
  return filteredProducts;
};`,
      userImpact:
        "Achieved 40% reduction in cart abandonment rate and 60% improvement in mobile conversion rates",
      liveDemo: "https://ecommerce-demo.example.com",
      githubRepo: "https://github.com/username/ecommerce-platform",
      testimonial:
        "The new platform increased our online sales by 150% in the first quarter. The user experience is exceptional!",
      lessonsLearned:
        "Performance optimization is crucial for e-commerce success. Server-side rendering and image optimization made a significant difference in user engagement.",
    },
    {
      id: 2,
      title: "HabitFlow - Habit Tracker",
      category: "Web Apps",
      technologies: ["React", "Framer Motion", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      shortDescription:
        "Collaborative task management with real-time updates and analytics",
      longDescription: `A powerful task management dashboard designed for teams, featuring real-time collaboration, advanced analytics, and intuitive drag-and-drop functionality.

Built with React and Redux Toolkit for state management, the application provides seamless team collaboration with live updates, comprehensive project tracking, and detailed performance analytics.`,
      problemStatement:
        "Teams struggle with fragmented task management tools that don't provide real-time collaboration and lack comprehensive project insights.",
      solutionApproach:
        "Created a unified dashboard with real-time WebSocket connections, drag-and-drop task management, and comprehensive analytics to provide teams with complete project visibility.",
      technicalDetails: `// Real-time task updates with WebSocket
const useRealTimeUpdates = (projectId) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const socket = new WebSocket(\`ws://localhost:8080/projects/\${projectId}\`);
    
    socket.onmessage = (event) => {
      const update = JSON.parse(event.data);
      dispatch(updateTask(update));
    };
    
    return () => socket.close();
  }, [projectId, dispatch]);
};`,
      userImpact:
        "Teams reported 35% increase in productivity and 50% reduction in project completion time",
      liveDemo: "https://taskmanager-demo.example.com",
      githubRepo: "https://github.com/username/task-manager",
      testimonial:
        "This dashboard transformed how our team collaborates. The real-time updates keep everyone in sync effortlessly.",
      lessonsLearned:
        "Real-time features require careful consideration of state management and WebSocket connection handling to ensure smooth user experience.",
    },
    {
      id: 3,
      title: "Creative Portfolio Website",
      category: "Portfolios",
      technologies: ["React", "Framer Motion", "Tailwind"],
      image: "./assets/images/portfolio.png",
      shortDescription:
        "Interactive 3D portfolio with immersive animations and storytelling",
      longDescription: `An award-winning creative portfolio website featuring 3D animations, interactive storytelling, and immersive user experiences that showcase creative work in an engaging digital environment.

The site combines Three.js for 3D graphics with Framer Motion for smooth transitions, creating a unique browsing experience that reflects the creative professional's artistic vision.`,
      problemStatement:
        "Traditional portfolios fail to capture the dynamic nature of creative work and don't provide engaging ways to showcase artistic vision.",
      solutionApproach:
        "Developed an interactive 3D environment where users can explore projects through immersive storytelling, with each project presented as a unique digital experience.",
      technicalDetails: `// 3D scene setup with Three.js
const Scene3D = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  
  return <div ref={mountRef} />;
};`,
      userImpact:
        "Portfolio generated 300% more client inquiries and won 2 design awards for innovation",
      liveDemo: "https://music-companion.netlify.app/playlist-selection-screen",
      githubRepo: "https://github.com/karina4840/music_companion",
      testimonial:
        "This portfolio completely changed how I present my work. Clients are amazed by the interactive experience!",
      lessonsLearned:
        "3D web experiences require careful performance optimization and fallback options for devices with limited graphics capabilities.",
    },
    {
      id: 4,
      title: "MoodTunes Your AI Music Assistant",
      category: "Web Apps",
      technologies: ["React", "Tailwind", "OpenAI", "Node.js", "Vite"],
      image: "./assets/images/moodTunes.png",
      shortDescription:
        "Interactive data visualization platform with real-time analytics",
      longDescription: `A comprehensive data visualization platform that transforms complex datasets into interactive, insightful charts and dashboards for business intelligence and decision-making.

Built with React and D3.js, the platform offers customizable dashboards, real-time data updates, and advanced filtering capabilities to help organizations make data-driven decisions.`,
      problemStatement:
        "Organizations struggle to make sense of large datasets and need intuitive ways to visualize and interact with their data for better decision-making.",
      solutionApproach:
        "Created a flexible visualization platform with drag-and-drop dashboard builder, real-time data connections, and interactive chart components that make complex data accessible.",
      technicalDetails: `// Custom D3 hook for data visualization
const useD3Chart = (data, config) => {
  const ref = useRef();
  
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const chart = svg
      .append("g")
      .attr("transform", \`translate(\${margin.left},\${margin.top})\`);
    
    // Chart rendering logic based on config
    renderChart(chart, data, config, width, height);
  }, [data, config]);
  
  return ref;
};`,
      userImpact:
        "Reduced data analysis time by 70% and improved decision-making speed across multiple departments",
      liveDemo: "https://music-companion.netlify.app/playlist-selection-screen",
      githubRepo: "https://github.com/karina4840/music_companion",
      testimonial:
        "The platform made our data come alive. We can now spot trends and make decisions faster than ever before.",
      lessonsLearned:
        "Performance optimization is critical when dealing with large datasets. Implementing virtualization and data pagination significantly improved user experience.",
    },

    {
      id: 6,
      title: "Minimalist Design System",
      category: "UI/UX",
      technologies: ["React", "Storybook", "Figma", "Sass"],
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      shortDescription:
        "Comprehensive design system with reusable components and documentation",
      longDescription: `A comprehensive design system built for scalability and consistency, featuring a complete component library, design tokens, and extensive documentation for development teams.

The system includes over 50 reusable components, comprehensive style guides, and integration tools that ensure design consistency across multiple products and platforms.`,
      problemStatement:
        "Development teams struggle with design consistency across products, leading to fragmented user experiences and increased development time.",
      solutionApproach:
        "Created a unified design system with reusable components, design tokens, and comprehensive documentation that ensures consistency while maintaining flexibility.",
      technicalDetails: `// Design token system
const tokens = {
  colors: {
    primary: {
      50: '#f0f9ff',100: '#e0f2fe',500: '#0ea5e9',900: '#0c4a6e'
    }
  },
  spacing: {
    xs: '0.25rem',sm: '0.5rem',md: '1rem',lg: '1.5rem',xl: '3rem'
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  }
};

// Component with design tokens
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-colors';
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',md: 'px-4 py-2',lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
};`,
      userImpact:
        "Reduced development time by 40% and improved design consistency across 15+ products",
      liveDemo: "https://design-system-demo.example.com",
      githubRepo: "https://github.com/username/design-system",
      testimonial:
        "The design system transformed our development workflow. We can now build consistent interfaces in half the time.",
      lessonsLearned:
        "A successful design system requires close collaboration between design and development teams, and comprehensive documentation is crucial for adoption.",
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Project{" "}
              <span className="text-primary text-glow-primary">Showcase</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Explore my technical capabilities through interactive demos,
              detailed case studies, and comprehensive project documentation
              that demonstrates real-world impact.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-tertiary">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Code" size={16} />
                <span>{projects.length} Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-warning">
                <Icon name="Star" size={16} />
                <span>Live Demos Available</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Github" size={16} />
                <span>Open Source</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FilterTabs
            options={filterOptions}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className="text-center py-20"
            >
              <Icon
                name="Search"
                size={48}
                className="text-text-tertiary mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-text-secondary mb-2">
                No projects found
              </h3>
              <p className="text-text-tertiary">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's collaborate on your next project and create exceptional
              digital experiences together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact-section"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-text-tertiary rounded-lg font-semibold transition-all duration-300 hover:glow-primary hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start a Project</span>
              </motion.a>
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-accent text-accent rounded-lg font-semibold transition-all duration-300 hover:bg-accent hover:text-white hover:glow-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Github" size={20} />
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
