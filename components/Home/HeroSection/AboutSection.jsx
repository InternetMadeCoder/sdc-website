"use client"

import React from 'react'
import Button from '../../ui/Button'
import { aboutText } from './../constants'
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <div className="relative z-10 mb-16">
            <div className="flex flex-col justify-center items-start gap-4 lg:max-w-3xl xl:px-20 lg:px-24 md:px-28 sm:pr-8 sm:pl-32">
                <h1 className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl">{aboutText.heading}</h1>
                <h2 className="text-lg lg:text-xl">{aboutText.subHeading}</h2>
                <p className="text-base lg:text-lg">{aboutText.description}</p>
                <Button className="mt-2" link="/about-us" title="READ MORE" />
            </div>
        </div>
    )
}

export default AboutSection