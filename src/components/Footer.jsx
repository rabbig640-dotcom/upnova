import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Code, Share2, Users, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">TechNova</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ideas into innovative software solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-blue-400 transition">
                <Code size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition">
                <Share2 size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition">
                <Users size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition">AI Integration</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-400">Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400">hello@technova.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;