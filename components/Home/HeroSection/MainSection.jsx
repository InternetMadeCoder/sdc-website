"use client";

import React from "react";
import Button from "../../ui/Button";
import { heroText } from "./../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/components/Portfolio/constants";
import Carousel from "../../ui/Carousel";
import Link from "next/link";

const MainSection = () => {
  return (
    <div className="relative z-10 flex flex-col h-screen justify-center">
      <div className="flex flex-col justify-center items-start gap-2 lg:gap-4 lg:max-w-3xl xl:px-20 lg:px-24 md:px-28 sm:pr-8 sm:pl-32">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={"/logo/muj-logo.png"}
            width={200}
            height={200}
            alt="Manipal University Jaipur"
            className="w-40 lg:w-60"
          />
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
          className="text-lg lg:text-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {heroText.description}
        </motion.p>

        {/* Sliding Carousel */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[85%] lg:w-[90%] xl:w-[95%]"
        >
          <Carousel autoSlide className="shadow-xl">
            {projects.slice(2, 5).map((display) => (
              <div
                key={display.id}
                className="flex flex-col h-52 sm:h-56 p-5 sm:p-7 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm relative transition-all duration-300 hover:from-white/15 hover:to-white/10"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-wide mb-2 sm:mb-3">
                    {display.title}
                  </h3>
                  <div className="h-px w-16 bg-gradient-to-r from-white/60 to-transparent mb-3"></div>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {display.description.slice(0, 140)}...
                  </p>
                </div>
                <Link
                  href={{
                    pathname: "/projects",
                    query: { openProject: display.id },
                  }}
                  className="absolute bottom-5 sm:bottom-7 right-5 sm:right-7 text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  Read more
                  <span className="text-lg">→</span>
                </Link>
              </div>
            ))}
          </Carousel>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="mt-2" link="/projects" title="READ MORE" />
        </motion.div>
      </div>
    </div>
  );
};

export default MainSection;
