import React, { useState, useEffect } from 'react';
import ContactComponent from '../components/Contact.jsx';
import { Mail, Phone, MapPin, Clock, ArrowRight, Sparkles, MessageCircle, Globe, Users, Award } from 'lucide-react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@technova.com', 'support@technova.com'],
      color: 'blue',
      action: 'mailto:hello@technova.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'purple',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Street', 'Silicon Valley, CA 94025'],
      color: 'pink',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 - 18:00', 'Sat: 10:00 - 16:00'],
      color: 'green',
      action: null
    }
  ];

  const officeLocations = [
    { city: 'San Francisco', country: 'USA', flag: '🇺🇸', timezone: 'PST' },
    { city: 'London', country: 'UK', flag: '🇬🇧', timezone: 'GMT' },
    { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', timezone: 'SGT' },
    { city: 'Sydney', country: 'Australia', flag: '🇦🇺', timezone: 'AEDT' }
  ];

  const faqs = [
    { question: 'What is your typical response time?', answer: 'We usually respond within 24 hours on business days.' },
    { question: 'Do you offer free consultations?', answer: 'Yes, we offer a free 30-minute initial consultation.' },
    { question: 'What industries do you serve?', answer: 'We serve various industries including healthcare, finance, e-commerce, and more.' }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs with mouse following */}
          <div 
            className="absolute h-96 w-96 rounded-full bg-white/10 blur-3xl transition-transform duration-500 ease-out"
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
          
          {/* Floating Particles */}
          {[...Array(40)].map((_, i) => (
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

          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="mb-6 inline-flex animate-bounce items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
              <MessageCircle className="mr-2 h-4 w-4" />
              Get in Touch
              <span className="ml-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-in slide-in-from-bottom-8">
              Let's{' '}
              <span className="relative inline-block">
                Connect
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path d="M0 2 L200 2" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
                </svg>
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl animate-in slide-in-from-bottom-8 delay-100">
              Have a project in mind? We'd love to hear about it. Let's work together to create something amazing.
            </p>

            {/* Quick Response Indicator */}
            <div className="mt-6 inline-flex items-center space-x-2 rounded-full bg-green-500/20 backdrop-blur-sm px-4 py-2 animate-in slide-in-from-bottom-8 delay-200">
              <div className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-sm">Average response time: 2 hours</span>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-16 mb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const colors = {
                blue: "from-blue-500 to-blue-600",
                purple: "from-purple-500 to-purple-600",
                pink: "from-pink-500 to-pink-600",
                green: "from-green-500 to-green-600"
              };
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="h-24 w-24" />
                  </div>
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${colors[info.color]} p-3 text-white shadow-lg mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                    >
                      Get in touch
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactComponent />

      {/* Global Offices Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
              <Globe className="h-4 w-4 mr-1" />
              Global Presence
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Global Offices
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to serve you no matter where you are
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {officeLocations.map((location, idx) => (
              <div key={idx} className="group text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-5xl mb-3">{location.flag}</div>
                <h3 className="font-bold text-gray-900">{location.city}</h3>
                <p className="text-sm text-gray-500">{location.country}</p>
                <p className="text-xs text-gray-400 mt-1">{location.timezone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
              <Users className="h-4 w-4 mr-1" />
              FAQs
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 overflow-hidden">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332233354666!2d-122.03116068469454!3d37.32394057984296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6c7f2e9b3%3A0x123456789abcdef!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-600">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-600">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-pink-600" />
              <span className="text-sm text-gray-600">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;