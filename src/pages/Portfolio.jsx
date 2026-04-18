import React, { useState, useEffect } from 'react';
import PortfolioComponent from '../components/Portfolio.jsx';
import { Award, TrendingUp, Users, Code, ArrowRight, Play, Star, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = { projects: 150, clients: 95, satisfaction: 98, experience: 5 };
    const duration = 2000;
    const stepTime = duration / 100;
    let current = { projects: 0, clients: 0, satisfaction: 0, experience: 0 };
    
    const timer = setInterval(() => {
      let allComplete = true;
      Object.keys(targets).forEach(key => {
        if (current[key] < targets[key]) {
          allComplete = false;
          current[key] = Math.min(current[key] + Math.ceil(targets[key] / 50), targets[key]);
        }
      });
      setStats({ ...current });
      if (allComplete) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

  const successStories = [
    {
      title: "E-commerce Revolution",
      client: "FashionHub",
      result: "300% increase in sales",
      icon: TrendingUp,
      color: "blue"
    },
    {
      title: "Healthcare Innovation",
      client: "MediCare Plus",
      result: "50K+ patients served",
      icon: Users,
      color: "purple"
    },
    {
      title: "Award-Winning App",
      client: "TechStart",
      result: "Best Mobile App 2023",
      icon: Award,
      color: "pink"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 pt-32 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl animate-pulse delay-500"></div>
          
          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30 animate-float"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 4 + 2 + 's',
              }}
            />
          ))}

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Badge with Animation */}
            <div className="mb-6 inline-flex animate-bounce items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              Our Creative Works
              <span className="ml-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
            </div>

            {/* Main Heading with Animation */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-in slide-in-from-bottom-8">
              Our{' '}
              <span className="relative inline-block">
                Portfolio
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path d="M0 2 L200 2" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
                </svg>
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl animate-in slide-in-from-bottom-8 delay-100">
              Explore our successful projects and see how we've transformed businesses through innovative software solutions
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in slide-in-from-bottom-8 delay-200">
              <button className="group inline-flex items-center rounded-full bg-white px-6 py-2.5 font-semibold text-blue-600 transition-all hover:shadow-xl hover:scale-105">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-6 py-2.5 font-semibold text-white transition-all hover:bg-white/30 hover:scale-105">
                <Play className="mr-2 h-4 w-4" />
                Watch Showreel
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/20 pt-12 sm:grid-cols-4">
              <div className="text-center animate-in slide-in-from-bottom-8 delay-300">
                <div className="text-3xl font-bold">{stats.projects}+</div>
                <div className="text-sm text-white/80 mt-1">Projects Completed</div>
                <div className="mt-2 h-1 w-12 mx-auto rounded-full bg-white/30"></div>
              </div>
              <div className="text-center animate-in slide-in-from-bottom-8 delay-400">
                <div className="text-3xl font-bold">{stats.clients}+</div>
                <div className="text-sm text-white/80 mt-1">Happy Clients</div>
                <div className="mt-2 h-1 w-12 mx-auto rounded-full bg-white/30"></div>
              </div>
              <div className="text-center animate-in slide-in-from-bottom-8 delay-500">
                <div className="text-3xl font-bold">{stats.satisfaction}%</div>
                <div className="text-sm text-white/80 mt-1">Client Satisfaction</div>
                <div className="mt-2 h-1 w-12 mx-auto rounded-full bg-white/30"></div>
              </div>
              <div className="text-center animate-in slide-in-from-bottom-8 delay-600">
                <div className="text-3xl font-bold">{stats.experience}+</div>
                <div className="text-sm text-white/80 mt-1">Years Experience</div>
                <div className="mt-2 h-1 w-12 mx-auto rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Client Success Stories
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-3 text-gray-600">
              Real results from real clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {successStories.map((story, idx) => {
              const Icon = story.icon;
              const colors = {
                blue: "from-blue-500 to-blue-600",
                purple: "from-purple-500 to-purple-600",
                pink: "from-pink-500 to-pink-600"
              };
              return (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gradient-to-r p-8 text-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1" style={{ background: `linear-gradient(135deg, ${story.color === 'blue' ? '#3b82f6' : story.color === 'purple' ? '#8b5cf6' : '#ec4899'} 0%, ${story.color === 'blue' ? '#1d4ed8' : story.color === 'purple' ? '#6d28d9' : '#be185d'} 100%)` }}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <Icon className="h-24 w-24" />
                  </div>
                  <div className="relative">
                    <Icon className="h-10 w-10 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{story.client}</p>
                    <p className="text-sm font-semibold">{story.result}</p>
                    <div className="mt-4 flex items-center text-sm">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PortfolioComponent />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and turn your vision into reality
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group inline-flex items-center rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-blue-600">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;