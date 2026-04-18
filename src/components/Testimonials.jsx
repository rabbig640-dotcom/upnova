import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    content: 'TechNova transformed our business with their incredible software solutions. Their team is professional, responsive, and delivered beyond our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO, DataFlow Systems',
    content: 'The best development team we have worked with. They understood our requirements perfectly and delivered a scalable solution that grew with our business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder, HealthCare Plus',
    content: 'Outstanding work on our mobile app! The team was communicative, met all deadlines, and the quality of work is exceptional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-2 h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            <Quote className="absolute top-8 right-8 h-12 w-12 text-blue-100" />
            
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mb-4 h-20 w-20 rounded-full object-cover ring-4 ring-blue-100"
              />
              
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="mb-6 text-lg text-gray-700 italic">
                "{testimonial.content}"
              </p>
              
              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;