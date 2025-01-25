import React from 'react'
import Button from '../../ui/Button'
import { projects } from '@/components/Portfolio/constants'
import Carousel from '../../ui/Carousel'
import Link from 'next/link'

const PortfolioSection = () => {
    return (
        <div className="relative z-10 flex flex-col h-screen justify-center">
            <div className="flex flex-col justify-center items-start gap-4  xl:px-20 lg:px-24 md:px-28      sm:pl-32 sm:pr-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">PORTFOLIO</h1>
                <h2 className="text-base lg:text-lg">Innovation Unleashed: A Glimpse into the Innovation Realm at MUJ</h2>
                <div className="my-4 lg:max-w-[340px]">
                    <Carousel autoSlide>
                        {projects.slice(2, 5).map((display) => (
                            <div key={display.id} className="flex flex-col justify-center w-fit h-fit border-2 p-4 rounded-xl">
                                <h3 className="text-lg font-semibold">{display.title}</h3>
                                <p className="text-sm">{display.description.slice(0, 150)}...</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <Button className="mt-4" link="/projects" title="EXPLORE" />
            </div>
        </div>
    )
}

export default PortfolioSection