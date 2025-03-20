import React from 'react';
import { testimonials } from './constants';
import Carousel from '../ui/Carousel';
import TestimonialCard from '../ui/TestimonialCard';
import Image from 'next/image';

const TestimonialsSection = () => {
  const staticTestimonials = testimonials.slice(0, 2);
  const carouselTestimonials = testimonials.slice(2);

  return (
    <div className="py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white flex flex-col gap-12 items-start relative z-30 md:items-center white-section">
      <h2 className="text-5xl sm:text-5xl mb-4">FOUNDERS</h2>
      
      {/* Static testimonials */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-7xl place-items-center">
        {staticTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative pt-16 hover:transform hover:scale-105 transition-transform duration-300 w-full">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
              <Image
                src={testimonial.profile}
                width={150} 
                height={150}
                alt={testimonial.user}
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white rounded-2xl p-4 pt-14 h-[200px] flex flex-col items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-bold text-xl text-center mb-1">{testimonial.user}</h3>
              <p className="text-gray-200 text-sm mb-3 text-center">{testimonial.company}</p>
              <p className="text-sm text-justify px-3 pb-3 overflow-y-auto scrollbar-hide">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel section heading */}
      <h2 className="text-5xl mt-8">WHAT PEOPLE SAY ABOUT US</h2>

      {/* Carousel testimonials */}
      {carouselTestimonials.length > 0 && (
        <div className="w-full lg:max-w-7xl">
          <Carousel autoSlide indicators>
            {carouselTestimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                user={testimonial.user} 
                company={testimonial.company} 
                message={testimonial.message} 
                profile={testimonial.profile} 
              />
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;