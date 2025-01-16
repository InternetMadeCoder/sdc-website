import React from 'react'
import { testimonials } from './constants'
import Carousel from '../ui/Carousel'
import TestimonialCard from '../ui/TestimonialCard'

const TestimonialsSection = () => {
    return (
        <div className="py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white flex flex-col gap-12 items-start relative z-30 md:items-center white-section">
            <h2 className="text-4xl">WHAT PEOPLE SAY ABOUT US</h2>
            <div className="lg:max-w-4xl">
                <Carousel autoSlide indicators>
                    {testimonials.map((display) => (
                        <TestimonialCard key={display.id} user={display.user} company={display.company} message={display.message} profile={display.profile} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default TestimonialsSection