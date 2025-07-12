'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'



function Header2() {
  return (
    <div className='bg-[#EFF5E1] overflow-hidden relative'>
      {/* Desktop Shop Now Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='hidden md:block'
      >
        <button className="absolute bottom-25 top-20 left-16 bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm md:text-base">
          Shop Now
        </button>
      </motion.div>

      {/* Image & Caption - Desktop */}
      <div className='hidden md:block'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className='flex justify-center relative z-10 mb-4'
        >
          <Image
            src="/girl.png"
            alt="Woman with avocado"
            width={610}
            height={670}
            className='rounded-2xl overflow-hidden w-80 md:w-100'
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className="absolute bottom-5 left-84 bg-[#EFF5E1] px-2 py-1.5 pr-4 rounded-full shadow flex items-center gap-4 border"
          >
            <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
              <Image
                src='/pro.jpg'
                alt='icon'
                width={34}
                height={34}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-[#2D3B36] font-medium">
              While giving you an invigorating <br /> cleansing experience.
            </span>
          </motion.div>
        </motion.div>
      </div>

        {/* Mobile & Tablet */}
        <div className='block md:hidden'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='flex justify-between px-6'
            >
                <div className='flex justify-center relative z-10 mb-4'>
                  <Image
                    src="/girl.png"
                    alt="Woman with avocado"
                    width={610}
                    height={670}
                    className='rounded-2xl overflow-hidden w-80 md:w-100'
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="absolute bottom-5 left-4 bg-[#EFF5E1] px-2 py-1.5 pr-4 rounded-full shadow flex items-center gap-4 border"
                  >
                    <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
                      <Image
                        src='/pro.jpg'
                        alt='icon'
                        width={34}
                        height={34}
                        className="rounded-full"
                      />
                    </div>
                    <span className="text-sm text-[#2D3B36] font-medium">
                      While giving you an invigorating <br /> cleansing experience.
                    </span>
                  </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='hidden sm:block mt-32 mr-6'
                >
                    <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm md:text-base">
                        Shop Now
                    </button>
                </motion.div>
            </motion.div>
        </div>

      {/* Large Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='hidden sm:block'
      >
        <div className="absolute inset-x-0 bottom-[-5%] md:bottom-[-10%] lg:bottom-[-10%] text-[120px] md:text-[180px] lg:text-[250px] font-semibold text-[#2D3B36] leading-none select-none pointer-events-none z-0 flex justify-center overflow-hidden">
          <div className="whitespace-nowrap">SKINCARE</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className='block sm:hidden'
      >
        <div className="absolute inset-x-0 bottom-[-3%] text-[80px] font-semibold text-[#2D3B36] leading-none select-none pointer-events-none z-0 flex justify-center overflow-hidden">
          <div className="whitespace-nowrap">SKINCARE</div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header2
