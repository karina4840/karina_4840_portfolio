import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/AppIcon";

const ContactForm = ({ formSubmitted, setFormSubmitted }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchedFields = watch();

  const projectTypes = [
    { value: "", label: "Select Project Type" },
    { value: "job-offer", label: "Job Offer" },
    { value: "frontend-development", label: "Frontend Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage("");

    try {
      // Using Formspree for email handling
      const formData = new FormData();
      formData.append("email", "karina4840@gmail.com"); // Your email address
      formData.append("name", data.name);
      formData.append("from_email", data.email);
      formData.append("project_type", data.projectType);
      formData.append("message", data.message);
      formData.append(
        "subject",
        `New Contact Form Submission - ${data.projectType}`
      );

      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Email sent successfully:", data);
        setShowSuccess(true);
        setFormSubmitted(true);
        reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage(
        "Failed to send message. Please try again or contact me directly at karina4840@gmail.com"
      );
      setShowError(true);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const errorVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <div className="relative">
      <div className="mb-8">
        <h2 className="text-3xl font-heading font-bold text-white mb-4 text-glow-primary">
          Start a Conversation
        </h2>
        <p className="text-text-secondary">
          Tell me about your project and let's explore how we can work together
          to bring your vision to life.
        </p>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-color-background/90 backdrop-blur-sm rounded-lg"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="text-center p-8">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center mx-auto glow-success">
                  <Icon name="CheckCircle" size={40} color="white" />
                </div>
                {/* Particle effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-success rounded-full"
                    style={{
                      top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 40}px`,
                      left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 40}px`,
                    }}
                    variants={particleVariants}
                    initial="hidden"
                    animate="visible"
                  />
                ))}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 text-glow-success">
                Message Sent!
              </h3>
              <p className="text-text-secondary">
                Thank you for reaching out. I'll get back to you within 24
                hours.
              </p>
            </div>
          </motion.div>
        )}

        {showError && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-color-background/90 backdrop-blur-sm rounded-lg"
            variants={errorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="text-center p-8">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-error to-warning rounded-full flex items-center justify-center mx-auto glow-error">
                  <Icon name="AlertCircle" size={40} color="white" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 text-glow-error">
                Message Failed
              </h3>
              <p className="text-text-secondary mb-4">{errorMessage}</p>
              <div className="space-y-3">
                <button
                  onClick={() => setShowError(false)}
                  className="px-6 py-2 bg-error text-white rounded-lg hover:bg-error/80 transition-colors duration-300"
                >
                  Try Again
                </button>
                <div className="text-sm text-text-secondary">
                  Or contact me directly at:{" "}
                  <a
                    href="mailto:karina4840@gmail.com"
                    className="text-primary hover:underline"
                  >
                    karina4840@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Full Name *
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className={`w-full input-field ${
                errors.name
                  ? "border-error glow-error"
                  : "focus:border-primary focus:glow-primary"
              } ${watchedFields.name ? "border-success" : ""}`}
              placeholder="Enter your full name"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {watchedFields.name && !errors.name && (
                <Icon name="Check" size={18} className="text-success" />
              )}
              {errors.name && (
                <Icon name="AlertCircle" size={18} className="text-error" />
              )}
            </div>
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error text-sm mt-1 flex items-center space-x-1"
            >
              <Icon name="AlertTriangle" size={14} />
              <span>{errors.name.message}</span>
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full input-field ${
                errors.email
                  ? "border-error glow-error"
                  : "focus:border-primary focus:glow-primary"
              } ${
                watchedFields.email && !errors.email ? "border-success" : ""
              }`}
              placeholder="your.email@example.com"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {watchedFields.email && !errors.email && (
                <Icon name="Check" size={18} className="text-success" />
              )}
              {errors.email && (
                <Icon name="AlertCircle" size={18} className="text-error" />
              )}
            </div>
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error text-sm mt-1 flex items-center space-x-1"
            >
              <Icon name="AlertTriangle" size={14} />
              <span>{errors.email.message}</span>
            </motion.p>
          )}
        </div>

        {/* Project Type Field */}
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Project Type *
          </label>
          <div className="relative">
            <select
              id="projectType"
              {...register("projectType", {
                required: "Please select a project type",
              })}
              className={`w-full input-field ${
                errors.projectType
                  ? "border-error glow-error"
                  : "focus:border-primary focus:glow-primary"
              } ${watchedFields.projectType ? "border-success" : ""}`}
            >
              {projectTypes.map((type) => (
                <option
                  key={type.value}
                  value={type.value}
                  className="bg-surface text-text-primary"
                >
                  {type.label}
                </option>
              ))}
            </select>
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              {watchedFields.projectType && !errors.projectType && (
                <Icon name="Check" size={18} className="text-success" />
              )}
              {errors.projectType && (
                <Icon name="AlertCircle" size={18} className="text-error" />
              )}
            </div>
          </div>
          {errors.projectType && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error text-sm mt-1 flex items-center space-x-1"
            >
              <Icon name="AlertTriangle" size={14} />
              <span>{errors.projectType.message}</span>
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Project Details *
          </label>
          <div className="relative">
            <textarea
              id="message"
              rows={6}
              {...register("message", {
                required: "Please tell me about your project",
                minLength: {
                  value: 20,
                  message:
                    "Please provide more details (at least 20 characters)",
                },
              })}
              className={`w-full input-field resize-none ${
                errors.message
                  ? "border-error glow-error"
                  : "focus:border-primary focus:glow-primary"
              } ${
                watchedFields.message && !errors.message ? "border-success" : ""
              }`}
              placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
            />
            <div className="absolute right-3 top-3">
              {watchedFields.message &&
                !errors.message &&
                watchedFields.message.length >= 20 && (
                  <Icon name="Check" size={18} className="text-success" />
                )}
              {errors.message && (
                <Icon name="AlertCircle" size={18} className="text-error" />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-1">
            {errors.message ? (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-error text-sm flex items-center space-x-1"
              >
                <Icon name="AlertTriangle" size={14} />
                <span>{errors.message.message}</span>
              </motion.p>
            ) : (
              <span></span>
            )}
            <span className="text-xs text-text-muted">
              {watchedFields.message?.length || 0} characters
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
            isSubmitting
              ? "bg-surface text-text-muted cursor-not-allowed"
              : "bg-primary text-text-tertiary hover:glow-primary hover:scale-105"
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-text-muted border-t-transparent rounded-full animate-spin"></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Icon name="Send" size={20} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
