"use client"

import React from 'react';
import Image from 'next/image';
import MainSection from './MainSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ParticlesComponent from './particles';
import { motion } from 'framer-motion';

const HeroSection = () => {

    return (
        <div className="hero-section px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-black flex flex-col justify-center overflow-hidden relative text-white dark-section">

            <ParticlesComponent className="-z-10 h-full w-full absolute" />

            <div className="flex">
                <motion.div
                    className="fixed -right-0 bottom-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={'/bg/bg-earth.svg'} width={1024} height={1024} alt="earth" className="max-w-96 lg:max-w-lg xl:max-w-xl" priority={true} />
                </motion.div>

                {/* <div className="hidden lg:flex fixed -right-28 -bottom-32">
                    <Image src={'/bg/link-vector.svg'} width={1024} height={1024} alt="vector" className="lg:max-w-[655px] xl:max-w-[725px]" priority={true} />
                </div> */}
            </div>

            <MainSection />
            <AboutSection />
            <PortfolioSection />
        </div>
    );
};

export default HeroSection;
