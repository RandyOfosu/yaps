import React from 'react'
import { Button } from './ui/moving-border'
import { werkErvaring } from '@/data'

const Experience = () => {
  return (
    <div className="mx-12 py-20">
      <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
        Mijn
        <span className="text-violet-500"> Werkervaring</span>

        <div className='w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {werkErvaring.map((card) => (
                <Button 
                    key={card.id}
                    borderRadius='1.75rem'
                    duration={Math.floor(Math.random() * 10000 + 10000)}
                    className='flex-1 text-gray-700 border-neutral-200 dark:border-teal-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={card.thumbnail} alt="Man achter een computer" className='lg:w-32 md:w-20 w-16' />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
      </h1>
    </div>
  )
}

export default Experience