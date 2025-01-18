import React from 'react'
import { testimonials } from './constants'
import Carousel from '../ui/Carousel'
import TestimonialCard from '../ui/TestimonialCard'

const TestimonialsSection = () => {
    // Split testimonials into static and carousel sections
    const staticTestimonials = testimonials.slice(0, 3);
    const carouselTestimonials = testimonials.slice(3);

    return (
        <div className="py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white flex flex-col gap-12 items-start relative z-30 md:items-center white-section">
            <h2 className="text-4xl">WHAT PEOPLE SAY ABOUT US</h2>
            
            {/* Static testimonials */}
            <div className="w-full flex flex-col gap-8 lg:max-w-4xl">
                {staticTestimonials.map((testimonial) => (
                    <TestimonialCard 
                        key={testimonial.id} 
                        user={testimonial.user} 
                        company={testimonial.company} 
                        message={testimonial.message} 
                        profile={testimonial.profile} 
                    />
                ))}
            </div>

            {/* Carousel testimonials */}
            {carouselTestimonials.length > 0 && (
                <div className="w-full lg:max-w-4xl">
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
    )
}

export default TestimonialsSection