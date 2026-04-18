import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Check if device is mobile for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate loading with minimum display time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Section animations variants with responsive adjustments
  const sectionVariants = {
    hidden: { opacity: 0, y: isMobile ? 30 : 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.6, 
        ease: "easeOut" 
      }
    }
  };

  // Loading spinner component with responsive design
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="text-center px-4">
          {/* Animated Logo */}
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
              <span className="text-3xl sm:text-4xl">🚀</span>
            </div>
          </div>
          <div className="inline-block h-12 w-12 sm:h-16 sm:w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
          <p className="mt-4 text-white text-base sm:text-lg font-semibold animate-pulse px-4">
            Loading amazing content...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Progress Bar - Responsive height */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Main Content with Animations */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: isMobile ? 0.1 : 0.2
            }
          }
        }}
        className="overflow-x-hidden"
      >
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
          <Hero />
        </motion.section>

        {/* Services Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
          <Services />
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
          <Portfolio />
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
          <Testimonials />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
          <Contact />
        </motion.section>
      </motion.main>

      {/* Back to Top Button - Responsive positioning and sizing */}
      <BackToTopButton isMobile={isMobile} />
    </>
  );
};

// Back to Top Button Component with responsive design
const BackToTopButton = ({ isMobile }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > (isMobile ? 200 : 300)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed z-50 p-2.5 sm:p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${
            isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'
          }`}
          aria-label="Back to top"
        >
          <svg 
            className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-1`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

// Optional: Add viewport meta for better responsive behavior
// Add this to your index.html or main HTML file:
// <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

export default Home;