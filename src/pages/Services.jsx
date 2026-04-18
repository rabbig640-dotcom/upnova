import React, { useState, useEffect, useMemo } from 'react';
import ServicesComponent from '../components/Services.jsx';
import { CheckCircle, Code, Server, Database, Cloud, Shield, Bot, ArrowRight, Award, Clock, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const [hoveredProcess, setHoveredProcess] = useState(null);
  const [counters, setCounters] = useState({});
  
  const process = [
    { 
      title: 'Discovery & Requirements Gathering',
      description: 'Deep dive into your business needs and project requirements',
      icon: Users,
      duration: '1-2 weeks'
    },
    { 
      title: 'Planning & Architecture Design',
      description: 'Blueprints for scalable and robust system architecture',
      icon: Server,
      duration: '2-3 weeks'
    },
    { 
      title: 'Development & Agile Sprints',
      description: 'Iterative development with regular deliverables',
      icon: Code,
      duration: '8-12 weeks'
    },
    { 
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing for bug-free deployment',
      icon: Shield,
      duration: '2-3 weeks'
    },
    { 
      title: 'Deployment & Launch',
      description: 'Smooth deployment with minimal downtime',
      icon: Cloud,
      duration: '1 week'
    },
    { 
      title: 'Maintenance & Support',
      description: '24/7 support and continuous improvement',
      icon: Bot,
      duration: 'Ongoing'
    }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️', category: 'Frontend', popularity: 95 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', popularity: 92 },
    { name: 'Python', icon: '🐍', category: 'Backend', popularity: 90 },
    { name: 'Java', icon: '☕', category: 'Backend', popularity: 85 },
    { name: 'AWS', icon: '☁️', category: 'Cloud', popularity: 88 },
    { name: 'Docker', icon: '🐳', category: 'DevOps', popularity: 87 },
    { name: 'Kubernetes', icon: '⎈', category: 'DevOps', popularity: 82 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', popularity: 84 },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', popularity: 86 },
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML', popularity: 78 },
    { name: 'Flutter', icon: '📱', category: 'Mobile', popularity: 80 },
    { name: 'GraphQL', icon: '📊', category: 'API', popularity: 83 },
    { name: 'TypeScript', icon: '📘', category: 'Language', popularity: 88 },
    { name: 'Next.js', icon: '▲', category: 'Frontend', popularity: 89 },
    { name: 'Vue.js', icon: '💚', category: 'Frontend', popularity: 82 },
    { name: 'Angular', icon: '🅰️', category: 'Frontend', popularity: 78 },
  ];

  const stats = useMemo(() => [
    { value: 150, label: 'Projects Completed', icon: Award, suffix: '+' },
    { value: 98, label: 'Client Satisfaction', icon: TrendingUp, suffix: '%' },
    { value: 50, label: 'Expert Developers', icon: Users, suffix: '+' },
    { value: 24, label: 'Support Hours', icon: Clock, suffix: '/7' },
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newCounters = {};
      stats.forEach(stat => {
        let start = 0;
        const end = stat.value;
        const increment = end / 50;
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(counter);
            newCounters[stat.label] = end;
          } else {
            newCounters[stat.label] = Math.floor(start);
          }
          setCounters({ ...newCounters });
        }, 20);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl"></div>
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30 animate-float"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="mb-6 inline-flex animate-bounce items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
              <span className="mr-2">⚡</span>
              What We Offer
            </div>
            
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl animate-in slide-in-from-bottom-8">
              Our{' '}
              <span className="relative inline-block">
                Services
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path d="M0 2 L200 2" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
                </svg>
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl animate-in slide-in-from-bottom-8 delay-100">
              Comprehensive software solutions tailored to transform your business ideas into reality
            </p>

            {/* Stats Preview */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 animate-in slide-in-from-bottom-8 delay-200">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex rounded-full bg-white/20 p-2 mb-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold">
                      {counters[stat.label] || 0}{stat.suffix}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white"></path>
          </svg>
        </div>
      </section>

      <ServicesComponent />

      {/* Enhanced Development Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              How We Work
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic, transparent approach to deliver quality software on time
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = hoveredProcess === idx;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  onMouseEnter={() => setHoveredProcess(idx)}
                  onMouseLeave={() => setHoveredProcess(null)}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <div className="relative">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-xl shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {step.duration}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className={`h-8 w-8 transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-gray-400'}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    
                    {/* Checkmark */}
                    <div className="absolute top-6 right-6">
                      <CheckCircle className={`h-6 w-6 transition-all duration-300 ${isHovered ? 'text-green-500 scale-110' : 'text-gray-300'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Tech Stack */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
              <Database className="h-4 w-4 mr-1" />
              Tech Expertise
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Technologies We Work With
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging the latest technologies to build cutting-edge solutions
            </p>
          </div>
          
          {/* Tech categories filter (optional) */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'AI/ML', 'Mobile'].map((category) => (
              <button
                key={category}
                className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white bg-gray-100 text-gray-700"
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
              >
                {/* Popularity bar */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" style={{ width: `${tech.popularity}%` }}></div>
                
                <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <p className="font-semibold text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
                
                {/* Popularity tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Used in {tech.popularity}% of projects
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <button className="group inline-flex items-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl hover:scale-105">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;