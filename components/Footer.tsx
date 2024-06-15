import React from 'react'
import { socialMedia } from '@/data'

const words = `Klaar om jouw visie verder te verwezenlijken?`

const Footer = () => {
  return (
    <div className='mx-10'>
        <div className='flex flex-col items-center py-20'>
            <h1 className="text-xl md:text-5xl font-bold dark:text-white text-center">
                Ben je klaar om 
                <span className="text-teal-500"> jouw </span>
                visie verder te verwezenlijken?
            </h1>
            <p className="text-zinc-500 font-normal md:text-2xl md:mt-16 mt-10 my-5 text-center">
                Dus wat zeg je ervan?
            </p>
            <a>
            <button className="mt-10 shadow-xl shadow-green-300/70 px-8 py-4 bg-gradient-to-br from-green-300 to-cyan-400 rounded-md text-zinc-50 text-xl md:text-2xl font-semibold transition duration-200 ease-linear">
                Laten we in contact komen
            </button>
            </a>  
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Randy Ofosu
        </p>

        <div className="flex py-6 items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer