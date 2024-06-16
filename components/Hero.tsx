"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
// import { AuroraBackground } from './ui/aurora-background';
import { TextGenerateEffect } from './ui/text-generate-effect';
import ReactButton from './ReactButton';
import animationData from '@/data/confetti.json'
import Lottie from 'react-lottie';


// const word = ["Problemen", "Vraagstukken", "Integratie"];
const words = `Hulp Nodig bij ICT Problemen`

export function Hero() {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hi@randyofosu.nl');
    setCopied(true);
  }

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
                    <div className="font-bold dark:text-white text-center">
                    <TextGenerateEffect words={words} />
                    </div>
                    <div className="text-base md:text-4xl dark:text-neutral-200 py-4">
                    Oplossing: Randy Ofosu 
                    </div>


                    <div className='absolute w-56 h-64 md:w-72 md:h-72 pointer-events-none'>
                    <Lottie options={defaultOptions}  />
                    </div>

                    <ReactButton 
                    title={copied ? 'Je hebt mijn email' : 'Aangenaam'}
                    handleClick={handleCopy}
                    />


                    {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Aangenaam
                    </button> */}
                    
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake" width="100" height="100" /> 
            </motion.div>
    </div>
  )
}

export default Hero