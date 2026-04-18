import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Code, Cloud, Zap, Play, Star, Award, Users, Rocket, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const words = ['Innovative', 'Scalable', 'Secure', 'Future-Ready'];

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Stats data with proper color mapping
  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: Code, color: 'blue' },
    { value: '98%', label: 'Client Satisfaction', icon: Users, color: 'purple' },
    { value: '24/7', label: 'Support Available', icon: Cloud, color: 'cyan' },
    { value: '50+', label: 'Expert Developers', icon: Rocket, color: 'pink' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600', hover: 'group-hover:bg-blue-200' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600', hover: 'group-hover:bg-purple-200' },
      cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-600', hover: 'group-hover:bg-cyan-200' },
      pink: { bg: 'bg-pink-100', icon: 'text-pink-600', hover: 'group-hover:bg-pink-200' },
    };
    return colors[color];
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
      
      {/* Animated Background with Mouse Following Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute h-96 w-96 rounded-full bg-blue-400/20 blur-3xl transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '-10%'
          }}
        ></div>
        <div 
          className="absolute h-96 w-96 rounded-full bg-purple-400/20 blur-3xl transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            bottom: '-10%',
            right: '-10%'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl animate-pulse"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              opacity: Math.random() * 0.3 + 0.1,
            }}
          ></div>
        ))}

        {/* Animated Circles */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle cx="20%" cy="30%" r="300" fill="url(#grad1)" className="animate-pulse" />
          <circle cx="80%" cy="70%" r="400" fill="url(#grad1)" className="animate-pulse delay-1000" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Badge with Animation */}
          <div className="mb-6 inline-flex animate-bounce items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
            <Sparkles className="mr-1 h-4 w-4 animate-pulse" />
            AI-Powered Solutions
            <span className="ml-2 flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
          </div>

          {/* Main Heading with Enhanced Animation */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Build{' '}
            <span className="relative inline-block min-w-[200px]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {words[currentWord]}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-gradient bg-[length:200%_auto]"></div>
              {/* Glow effect */}
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-50 animate-pulse"></div>
            </span>
            <br />
            Software Solutions
          </h1>

          {/* Description with Enhanced Styling */}
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent blur-3xl"></div>
            <p className="relative mb-10 text-lg text-gray-700 md:text-xl leading-relaxed animate-in slide-in-from-bottom-8">
              Transform your business with cutting-edge software development. From web apps to AI integration, 
              we deliver excellence that drives growth.
            </p>
          </div>

          {/* CTA Buttons with Enhanced Effects */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 inline-flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 transition-transform duration-300"></div>
            </Link>
            <Link
              to="/portfolio"
              className="group relative overflow-hidden rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
            >
              <span className="relative z-10 inline-flex items-center">
                View Our Work
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Trust Badges with Icons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 rounded-full bg-white/50 backdrop-blur-sm px-3 py-1.5 text-xs text-gray-600 transition-all hover:bg-white/80">
              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              <span>Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center space-x-2 rounded-full bg-white/50 backdrop-blur-sm px-3 py-1.5 text-xs text-gray-600 transition-all hover:bg-white/80">
              <Shield className="h-3 w-3 text-green-500" />
              <span>99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 rounded-full bg-white/50 backdrop-blur-sm px-3 py-1.5 text-xs text-gray-600 transition-all hover:bg-white/80">
              <Award className="h-3 w-3 text-blue-600" />
              <span>Industry recognized</span>
            </div>
          </div>

          {/* Enhanced Stats with Fixed Colors */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-gray-200 pt-12 sm:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colorClasses = getColorClasses(stat.color);
              return (
                <div 
                  key={idx} 
                  className="group relative text-center transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative">
                    <div className={`inline-flex rounded-2xl ${colorClasses.bg} p-3 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video Preview / Demo Button with Modal (optional) */}
          <div className="mt-12">
            <button className="group inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
              <div className="rounded-full bg-white shadow-md p-2 group-hover:shadow-lg transition-all group-hover:bg-blue-50">
                <Play className="h-4 w-4 fill-current" />
              </div>
              <span>Watch demo video (2 min)</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-gray-400">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgba(255,255,255,0.1)"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;