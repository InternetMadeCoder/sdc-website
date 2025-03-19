"use client"

import React from 'react';
import Button from '../../ui/Button';
import { heroText } from './../constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/components/Portfolio/constants'

const MainSection = () => {
    return (
        <div className="relative z-10 flex flex-col h-screen justify-center">
            <div className="flex flex-col justify-center items-start gap-2 lg:gap-4 lg:max-w-3xl xl:px-20 lg:px-24 md:px-28   sm:pr-8   sm:pl-32">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={"/logo/muj-logo.png"} width={200} height={200} alt='Manipal University Jaipur' className='w-40 lg:w-60' />
                </motion.div>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {heroText.heading}
                </motion.h1>
                <motion.p
                    className="text-lg lg:text-xl "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {heroText.description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button className="mt-4" link="/projects" title="READ MORE" />
                </motion.div>
                {/* <div className='flex'>
                    {projects.slice(4, 9).map((display) => (
                        <div key={display.id} className="flex flex-col justify-center w-60 h-40 border-2 p-2 rounded-xl">
                            <h3 className="text-base font-semibold">{display.title}</h3>
                            <p className="text-sm">{display.description.slice(0, 120)}...</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default MainSection;