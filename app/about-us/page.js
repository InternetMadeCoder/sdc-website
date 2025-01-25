"use client";

import {
  heroText,
  aboutText,
  visionText,
  whyConst,
  commitText,
} from "@/components/About/constants";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useInView,
  useAnimation,
  useTransform,
} from "framer-motion";

const words = ["Innovate", "Develop", "Excel"];

export default function About() {
  // parallax
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

  const dref1 = useRef(null);
  const dref2 = useRef(null);

  const isInView1 = useInView(dref1);
  const isInView2 = useInView(dref2);

  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls1.start("visible");
    }
  }, [isInView1,mainControls1]);

  useEffect(() => {
    if (isInView2) {
      mainControls2.start("visible");
    }
  }, [isInView2,mainControls2]);
  const popVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { dusration: 2, delay: 0.7 },
    },
  };

  // words animation
  const wref = useRef(null);
  const wInView = useInView(wref);
  const wControls = useAnimation();
  useEffect(() => {
    if (wInView) {
      wControls.start("after");
    }
  }, [wInView,wControls]);

  const wordVariants = {
    before: { opacity: 0, x: -100 },
    after: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="font-manrope">
      <
        div
        ref={ref}
        className="h-screen flex items-center relative overflow-hidden"
      >
        <motion.div
          className="relative z-20 text-white px-4 xl:px-48 lg:px-48 md:px-32 sm:pr-8 sm:pl-32"
          style={{ y: textY }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            {heroText.heading}
          </h1>
          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {heroText.subHeading}
          </h3>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url('/bg/full-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: bgY,
          }}
        />
        <div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: "url('/bg/mountain.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
      </div>

      {/* about us */}
      <div className="white-section">
        <motion.div
          ref={dref1}
          variants={popVariants}
          initial="hidden"
          animate={mainControls1}
          className="flex flex-col items-center gap-8 px-8 sm:px-16 md:px-20 xl:px-32 sm:py-16 py-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            {aboutText.heading}
          </h1>
          <div className="text-base sm:text-xl text-justify">
            <p>{aboutText.desc1}</p>
            {/* <p>{aboutText.desc2}</p> */}
          </div>
        </motion.div>

        {/* vision */}
        <div className="flex flex-col items-center sec sm:gap-12 gap-4 px-8 sm:px-16 md:px-20 xl:px-32 text-center white-section py-4 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            {visionText.heading}
          </h1>

          <div className="flex gap-8 text-base sm:text-2xl xl:text-3xl font-bold">
            {" "}
            {/* //drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)] */}
            {words.map((word, index) => (
              <motion.div
                ref={wref}
                key={index}
                variants={wordVariants}
                initial="before"
                animate={wControls}
                transition={{ duration: 0.3, delay: index * 0.2 }} // Modified these values
              >
                <div className={`pb-2 border-b-4 ${ index===0 ? 'border-b-[#D34747]' : index===1 ? 'border-b-[#BD9101]': 'border-b-[#EB9335]'}`}>{word}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-base sm:text-xl">{visionText.description}</p>
        </div>

        {/* why sdc */}
        <div className="text-black bg-[#ececec] white-section">
          <motion.div
            ref={dref2}
            variants={popVariants}
            initial="hidden"
            animate={mainControls2}
            className="md:py-20 sm:py-12 py-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
              Why Choose SDC
            </h1>
            <div className="md:py-20 py-16 md:grid grid-cols-2 px-8 sm:px-12 md:px-20 md:gap-x-20 md:gap-y-20 flex flex-col gap-8 md:gap-6">
              {whyConst.map((el, index) => {
                const Icon = el.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-2 sm:gap-4 md:gap-8"
                  >
                    <div className="flex">
                      <Icon className="text-5xl md:text-6xl lg:text-7xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-xl md:text-2xl">
                        {el.title}
                      </h3>
                      <p className="text-base text-justify md:text-xl">
                        {el.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* commitment */}
        <div className="flex flex-col items-center py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            {commitText.heading}
          </h1>
          <div className="md:text-xl text-base text-justify flex flex-col gap-3 px-8 sm:px-16 md:px-20 xl:px-32 py-12 mb-12">
            <p className="">{commitText.description}</p>
            <p className="italic">{commitText.foot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}