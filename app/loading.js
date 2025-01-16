"use client"

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="z-50 fixed w-screen h-screen bg-white flex justify-center items-center">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <h3 className="text-4xl font-bold">Loading...</h3> */}
                    <Image src={"/logo/sdc-logo-black.png"} width={250} height={250} alt="Loading..." className="w-40" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
