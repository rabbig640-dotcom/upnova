import React from 'react';
import { Users, Target, Trophy, Clock, Code, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client First',
      description: 'Your success is our success. We build partnerships, not just projects.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to find creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with you to ensure your vision becomes reality.'
    }
  ];

  const stats = [
    { icon: Trophy, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Code, value: '20+', label: 'Expert Developers' },
  ];

  return (
    <>
      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 pt-32 pb-20">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient Orbs */}
    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl animate-pulse delay-500"></div>
    
    {/* Floating Particles */}
    <div className="absolute top-20 left-10 animate-float">
      <div className="h-2 w-2 rounded-full bg-white/40"></div>
    </div>
    <div className="absolute top-40 right-20 animate-float delay-1000">
      <div className="h-3 w-3 rounded-full bg-white/30"></div>
    </div>
    <div className="absolute bottom-20 left-1/4 animate-float delay-500">
      <div className="h-2 w-2 rounded-full bg-white/40"></div>
    </div>
    <div className="absolute top-1/2 right-1/3 animate-float delay-700">
      <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
    </div>
    
    {/* Wave Pattern */}
    <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white">
      {/* Badge */}
      <div className="mb-6 inline-flex animate-bounce items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
        <span className="mr-2">✨</span>
        Innovating Since 2019
      </div>

      {/* Main Heading with Animation */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-in slide-in-from-bottom-8">
        About{' '}
        <span className="relative inline-block">
          TechNova
          <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4 L200 4" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
          </svg>
        </span>
      </h1>
      
      {/* Animated Underline */}
      <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-white to-transparent rounded-full animate-pulse"></div>
      
      {/* Description with Animation */}
      <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl animate-in slide-in-from-bottom-8 delay-100">
        We're on a mission to transform businesses through innovative software solutions
      </p>
      
      {/* Stats Preview */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 animate-in slide-in-from-bottom-8 delay-200">
        <div className="text-center">
          <div className="text-3xl font-bold">150+</div>
          <div className="text-sm text-white/80">Projects Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">98%</div>
          <div className="text-sm text-white/80">Client Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">50+</div>
          <div className="text-sm text-white/80">Expert Team</div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-2 w-1 rounded-full bg-white/50 animate-scroll"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="mx-auto h-10 w-10 text-blue-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="mb-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Founded in 2019, TechNova Solutions started with a simple mission: to help businesses 
                leverage technology to achieve their goals. What began as a small team of passionate 
                developers has grown into a full-service software development company serving clients 
                worldwide.
              </p>
              <p className="mb-4 text-gray-600 leading-relaxed">
                We believe that great software comes from great collaboration. Our approach combines 
                technical expertise with creative problem-solving to deliver solutions that not only 
                meet but exceed expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have helped over 50 businesses transform their operations, 
                streamline their processes, and achieve remarkable growth through technology.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-xl">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex rounded-xl bg-blue-100 p-3 mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;