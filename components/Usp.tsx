'use client'

import { usps } from '@/data'
import React from 'react'
import { HoverEffect } from './ui/card-hover'

const Usp = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
        <HoverEffect items={usps} />
    </div>
  )
}

export default Usp