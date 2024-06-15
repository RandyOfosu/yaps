"use client";

import React from 'react';
import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background';
import { TextGenerateEffect } from './ui/text-generate-effect';


const word = ["Problemen", "Vraagstukken", "Integratie"];
const words = `Hulp Nodig bij ICT Problemen`

export function Hero() {
  return (
    <div className='relative flex flex-col  h-[100vh] items-center justify-center'>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    <TextGenerateEffect words={words} />
                    </div>
                    <div className="font-light text-base md:text-4xl dark:text-neutral-200 py-4">
                    Oplossing: Randy Ofosu 
                    </div>

                    <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Aangenaam
                    </button>
                    
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake" width="100" height="100" /> 
            </motion.div>
    </div>
  )
}

export default Hero