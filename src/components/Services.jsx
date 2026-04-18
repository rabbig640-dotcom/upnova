import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Bot,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: ['React/Next.js', 'Node.js/Python', 'E-commerce Solutions'],
    stats: { projects: '120+', satisfaction: '98%' },
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'Swift/Kotlin'],
    stats: { projects: '85+', satisfaction: '96%' },
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    features: ['Enterprise Software', 'CRM/ERP Systems', 'API Development'],
    stats: { projects: '95+', satisfaction: '97%' },
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    features: ['AWS/Azure/GCP', 'DevOps', 'Cloud Migration'],
    stats: { projects: '60+', satisfaction: '99%' },
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security solutions.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance'],
    stats: { projects: '40+', satisfaction: '100%' },
    color: 'red',
    gradient: 'from-red-500 to-rose-500'
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to transform your business.',
    features: ['Machine Learning', 'Chatbots', 'Data Analytics'],
    stats: { projects: '50+', satisfaction: '97%' },
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500'
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;
  
  const colors = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', dark: 'from-blue-600 to-blue-700' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', dark: 'from-purple-600 to-purple-700' },
    green: { bg: 'bg-green-100', text: 'text-green-600', dark: 'from-green-600 to-green-700' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', dark: 'from-orange-600 to-orange-700' },
    red: { bg: 'bg-red-100', text: 'text-red-600', dark: 'from-red-600 to-red-700' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', dark: 'from-indigo-600 to-indigo-700' },
  };

  const colorStyle = colors[service.color];

  return (
    <div 
      className="group relative rounded-2xl bg-white p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Border Gradient */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
      
      <div className="relative">
        {/* Icon with Animation */}
        <div className="mb-4 inline-flex">
          <div className={`relative rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            <Icon size={24} />
            {/* Pulsing ring effect */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 ${isHovered ? 'animate-ping opacity-20' : ''}`}></div>
          </div>
        </div>

        {/* Title with hover effect */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="mb-4 text-gray-600 leading-relaxed">{service.description}</p>

        {/* Stats Badges */}
        <div className="mb-4 flex gap-2">
          {Object.entries(service.stats).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-xs font-semibold text-gray-700">{value}</span>
            </div>
          ))}
        </div>

        {/* Features List with Icons */}
        <ul className="mb-4 space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
              <CheckCircle size={14} className={`mr-2 ${colorStyle.text} flex-shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Link with enhanced hover effect */}
        <Link 
          to="/contact" 
          className="inline-flex items-center text-sm font-semibold transition-all duration-300 group/link"
          style={{ color: colorStyle.text }}
        >
          <span>Learn More</span>
          <ArrowRight size={16} className="ml-1 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-110" />
        </Link>

        {/* Background Pattern */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
          <Icon size={80} />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [counters, setCounters] = useState({});

  // Animated counter for total projects
  useEffect(() => {
    const totalProjects = services.reduce((sum, service) => sum + parseInt(service.stats.projects), 0);
    let start = 0;
    const duration = 2000;
    const increment = totalProjects / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= totalProjects) {
        setCounters(prev => ({ ...prev, total: totalProjects }));
        clearInterval(timer);
      } else {
        setCounters(prev => ({ ...prev, total: Math.floor(start) }));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4 animate-bounce">
            <Zap className="h-4 w-4 mr-1" />
            Our Expertise
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            What{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We Do
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to transform your business ideas into reality
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">{counters.total || 0}+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Expert Developers</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              service={service} 
              index={idx}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 shadow-xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-white/90 mb-4">Let's discuss your specific requirements and build something amazing together</p>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-2.5 font-semibold text-blue-600 transition-all hover:shadow-lg hover:scale-105 group"
              >
                Get Free Consultation
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;