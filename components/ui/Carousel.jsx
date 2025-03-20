"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from 'react-swipeable';

const Carousel = ({ children, indicators = false, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = () => setCurr(curr === 0 ? children.length - 1 : curr - 1);
  const next = () => setCurr(curr === children.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    let slideInterval;
    if (autoSlide && !hovered) {
      slideInterval = setInterval(() => {
        next();
      }, autoSlideInterval);
    }

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, curr, hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleTouchStart = () => {
    setHovered(true);
  };

  const handleTouchEnd = () => {
    setHovered(false);
  };

  return (
    <div className="flex flex-col gap-8 lg:gap-16" {...handlers} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <motion.div
        className="w-full"
        key={curr}
        initial={{ opacity: 0, x: "10%" }}
        animate={{ opacity: 1, x: "0%" }}
        exit={{ opacity: 0, x: "-10%" }}
        transition={{ duration: 0.5 }}
      >
        {children[curr]}
      </motion.div>
      {children.length > 1 && indicators && (
        <div className="flex justify-center gap-8">
          {children.map((_, i) => (
            <button key={i} onClick={() => setCurr(i)} className={`w-3 h-3 rounded-full ${curr === i ? "bg-black" : "border-2 border-black"}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;