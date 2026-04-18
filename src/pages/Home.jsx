import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simulate loading (remove this if you don't need it)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Section animations variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  // Loading spinner component
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
          <p className="mt-4 text-white text-lg font-semibold">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Main Content with Animations */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Hero />
        </motion.section>

        {/* Services Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Services />
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Portfolio />
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.section>
      </motion.main>

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

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
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Back to top"
        >
          <svg 
            className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" 
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

// Optional: Add metadata for SEO
export const metadata = {
  title: 'TechNova Solutions | Innovative Software Development Company',
  description: 'Transform your business with cutting-edge software solutions. Web development, mobile apps, AI integration, and cloud services.',
  keywords: 'software development, web development, mobile apps, AI, cloud services, tech company',
  openGraph: {
    title: 'TechNova Solutions - Innovative Software Development',
    description: 'Transform your business with cutting-edge software solutions',
    url: 'https://technova.com',
    siteName: 'TechNova Solutions',
    images: [
      {
        url: 'https://technova.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechNova Solutions - Innovative Software Development',
    description: 'Transform your business with cutting-edge software solutions',
    images: ['https://technova.com/twitter-image.jpg'],
  },
};

export default Home;