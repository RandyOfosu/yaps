'use client'

import React, { useState } from 'react'
import { socialMedia } from '@/data'
import { BackgroundBeams } from './ui/background-beams'
import Lottie from 'react-lottie'
import animationData from '@/data/confetti.json'
import ReactButton from './ReactButton'

// import { BackgroundBeams } from './ui/background-beams'
// const words = `Klaar om jouw visie verder te verwezenlijken?`

const Footer = () => {

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

    <div className='mx-10 relative z-20'>

        <div className='flex flex-col relative z-20 items-center py-20'>
            <h1 className="text-xl md:text-5xl font-bold dark:text-white text-center">
                Ben je klaar om 
                <span className="text-teal-500"> jouw </span>
                visie verder te verwezenlijken?
            </h1>
            <p className="text-zinc-500 relative z-20 font-normal md:text-3xl md:mt-16 mt-10 my-5 text-center">
                Zo ja?
            </p>

            
            <a href="mailto:hi@randyofosu.nl">
              <div className='absolute w-56 h-32 md:w-72 md:h-36 pointer-events-none'>
              <Lottie options={defaultOptions} />
              </div>
            <ReactButton
              title={copied ? 'Zo horen we het graag' : 'Laten we dan in contact komen'}
              handleClick={handleCopy}
            />
            </a>  
        </div>


        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Randy Ofosu
        </p>


        <div className="relative z-20 flex py-6 items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
            key={info.id}
            className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-zinc-50"
            >

              <a href={info.link} target='_blank'>
                <img src={info.img} alt="icons" width={25} height={25} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Footer