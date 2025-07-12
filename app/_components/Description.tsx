'use client'

import React from 'react'
import { motion } from 'framer-motion'



function Description() {
  return (
    <section className="bg-[#FEFFF4] px-4 md:px-16 py-10 overflow-hidden">
      
      {/* Mobile "Shop Now" Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='block sm:hidden md:hidden mb-6'
      >
        <div className='flex justify-center items-center h-full'>
          <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm md:text-base">
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-full mx-auto text-[#2D3B36] text-[20px] leading-relaxed"
      >
        <p>
          Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients{' '}
          <span className="md:text-[#a8abaa]">
            with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
          </span>
        </p>
      </motion.div>
    </section>
  )
}

export default Description
