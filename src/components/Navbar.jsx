import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
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
    setIsMobileDropdownOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="group relative flex items-center space-x-1.5 sm:space-x-2 z-50"
            >
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>
              <div className="relative">
                <Code2 className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <div className="absolute -top-1 -right-1">
                  <div className="flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
                  </div>
                </div>
              </div>
              <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                TechNova
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative flex items-center space-x-1 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-300 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  
                  {isActive(link.path) && !link.hasDropdown && (
                    <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                  )}

                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute left-0 mt-2 w-80 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-50">
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
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 transition-colors">
                <span className="text-lg">🌙</span>
              </button>
              
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative z-10 inline-flex items-center">
                  Get Started
                  <Sparkles className="ml-2 h-3.5 w-3.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 transition-transform duration-300"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative rounded-full p-1.5 sm:p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 lg:hidden z-50"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Fixed visibility */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '56px' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{link.icon}</span>
                        <span>{link.label}</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                        isMobileDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {isMobileDropdownOpen && (
                      <div className="ml-8 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">{service.label}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center text-base font-semibold text-white shadow-md transition-all hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;