import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home', icon: '' },
    { path: '/about', label: 'About', icon: '' },
    { path: '/services', label: 'Services', icon: '', hasDropdown: true },
    { path: '/portfolio', label: 'Portfolio', icon: '' },
    { path: '/contact', label: 'Contact', icon: '' },
  ];

  const serviceDropdown = [
    { path: '/services/web-dev', label: 'Web Development', description: 'Modern web applications' },
    { path: '/services/mobile-apps', label: 'Mobile Apps', description: 'iOS & Android solutions' },
    { path: '/services/cloud', label: 'Cloud Solutions', description: 'Scalable infrastructure' },
    { path: '/services/ai', label: 'AI Integration', description: 'Intelligent systems' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm py-4'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Animation */}
            <Link 
              to="/" 
              className="group relative flex items-center space-x-2"
            >
              {/* Animated background glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>
              
              {/* Icon with animation */}
              <div className="relative">
                <Code2 className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <div className="absolute -top-1 -right-1">
                  <div className="flex h-3 w-3">
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </div>
                </div>
              </div>
              
              {/* Text with gradient */}
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                TechNova
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative flex items-center space-x-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  
                  {/* Active indicator */}
                  {isActive(link.path) && !link.hasDropdown && (
                    <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                  )}

                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute left-0 mt-2 w-80 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                      <div className="p-2">
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block rounded-xl p-3 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                          >
                            <div className="font-medium text-gray-900">{service.label}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Theme Toggle (Optional) */}
              <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 transition-colors">
                <span className="text-lg">🌙</span>
              </button>
              
              {/* CTA Button with animation */}
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative z-10 inline-flex items-center">
                  Get Started
                  <Sparkles className="ml-2 h-4 w-4" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 transition-transform duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button with animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative rounded-full p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 md:hidden"
            >
              <div className="relative">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <div
          className={`fixed inset-x-0 top-16 z-40 transform transition-all duration-500 ease-in-out md:hidden ${
            isOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-screen bg-white shadow-2xl">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transform transition-all duration-300 block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                </Link>
              ))}
              
              {/* Mobile Dropdown for Services */}
              <div className="mt-4 space-y-2 pl-8">
                <p className="text-xs font-semibold uppercase text-gray-400">Services</p>
                {serviceDropdown.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <Link
                to="/contact"
                className="mt-6 block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center text-base font-semibold text-white shadow-md transition-all hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden animate-in fade-in"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;