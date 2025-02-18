"use client";

import { motion } from "framer-motion";

export const AnimatedSection = ({ children, direction = "left" }) => {
  const slideAnimation = {
    offscreen: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.2,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideAnimation}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedTitle = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
    >
      {children}
    </motion.h2>
  );
};
