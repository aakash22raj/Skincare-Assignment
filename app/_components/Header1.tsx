'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Header1() {
  return (
    <div className='bg-[#EFF5E1] py-16 overflow-hidden'>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='block sm:hidden md:hidden text-6xl font-extrabold text-[#2D3B36] leading-tight'
      >
        <h1>GLOWWWW<br /> NATURALLY</h1>
      </motion.div>

      <div className='flex flex-col md:flex-row px-6 md:px-12 items-center justify-between gap-8 md:gap-72'>
        <div className='flex flex-row items-center justify-between gap-16 md:gap-32'>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className='py-8 text-[#2D3B36]'
          >
            <p>
              Transform your skincare routine with premium products that restore,
              protect, and enhance your natural glow every day.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className='hidden md:block text-5xl md:text-6xl font-extrabold text-[#2D3B36] leading-tight'
          >
            <h1>GLOW<br /> NATUR-<br/>ALLY</h1>
          </motion.div>

          {/* Medium screen image animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='hidden sm:block md:hidden'
          >
            <Image 
              src='/pro.jpg'
              alt='plum'
              width={400}
              height={450}
              className='w-[750px] h-[300px] object-cover'
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className='hidden md:block'
        >
          <Image 
            src='/pro.jpg'
            alt='plum'
            width={240}
            height={250}
            className='rounded-lg'
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className='hidden sm:block md:hidden mt-[-130px] text-8xl font-extrabold text-[#2D3B36] leading-tight'
        >
          <h1>GLOWWWW<br /> NATURALLY</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Header1
