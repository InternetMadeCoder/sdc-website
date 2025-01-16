"use client";
import { useRef , useEffect} from 'react';

import Projects from '@/components/Portfolio/Projects';
import {
    motion,
    useScroll,
    useInView,
    useAnimation,
    useTransform,
  } from "framer-motion";
export default function Portfolio() {
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
    
     
    return (
        <div className=''>
               
        <div
        ref={ref}
        className="h-screen flex items-center relative overflow-hidden"
      >
        <motion.div
          className="relative z-20 text-white px-4 xl:px-48 lg:px-48 md:px-32 sm:pr-8 sm:pl-32"
          style={{ y: textY }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            PORTFOLIO
          </h1>
          <h3 className="mt-2 text-xl mb-20 sm:text-2xl md:text-3xl lg:text-4xl z-40 ">
            Experience our students innovative tech solutions and impactful projects.
          </h3>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url('/bg/bg3 .png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: bgY,
          }}
        />
        <div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: "url('/bg/bg3_removed.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
      </div>

            <div className='white-section mt-16'>
                {/* <div className='flex flex-col gap-12 px-4 py-16 sm:px-6 md:px-12 lg:px-20 xl:px-28 xl:py-24 white-section'> */}
                    {/* <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center'>Explore Our Projects</h2> */}
                    {/* <p className='text-base md:text-xl text-justify'>Welcome to the heart of innovation at the Software Development Center (SDC). Our talented students have been actively engaged in a diverse range of projects that demonstrate their skills, creativity, and problem-solving abilities. Explore the exciting projects below:</p> */}
                {/* </div> */}
                <Projects />
            </div>
        </div>
    );
}
