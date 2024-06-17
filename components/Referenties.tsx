import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'
import { companies } from '@/data'

const Referenties = () => {
  return (
    <div className="py-20">

      <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
        Mijn
        <span className="text-cyan-500"> Referenties</span>
      </h1>

      <div className='h-[90vh] md:h-[30rem] py-10 rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
          <InfiniteMovingCards 
              items={testimonials}
              direction="right"
              speed='slow'
          />
      </div>

      <div className="flex flex-wrap items-center justify-center py-10 gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-full"
                />
                {/* <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                /> */}
              </div>
            </React.Fragment>
          ))}
      </div>      

    </div>
  )
}

export default Referenties