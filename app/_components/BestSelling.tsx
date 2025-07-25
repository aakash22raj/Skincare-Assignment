'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react'
import { useRef } from 'react'
import { motion } from 'framer-motion'



const products = [
  {
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
    image: '/pro1.jpg'
  },
  {
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.89',
    image: '/pro2.jpg'
  },
  {
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.89',
    image: '/pro.jpg'
  },
  {
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
    image: '/pro3.jpg'
  }
]

const BestSelling = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#FEFFF4] px-6 md:px-16 py-10 space-y-8 overflow-hidden"
    >
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium text-[#2D3B36]"
      >
        <span className="w-3 h-3 rounded-full bg-[#2D3B36]" />
        Best Selling Products
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <h2 className="text-2xl md:text-3xl font-medium text-[#2D3B36] text-left md:text-center flex-1">
          Skincare That Brings Out <br className="" />
          Your Natural Radiance
        </h2>

        {/* Arrows */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#2D3B36] flex items-center justify-center text-[#2D3B36]"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#2D3B36] text-white flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Product Cards */}
      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-2"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl overflow-hidden w-[300px] min-w-[280px] shadow-sm snap-start shrink-0"
          >
            <div className="relative w-full h-[360px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center rounded-lg p-2 bg-[#FEFFF4] backdrop-blur-sm">
                <div>
                  <h3 className="text-sm text-[#2D3B36] font-medium">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#2D3B36]/50 mt-1">
                    {product.price}
                  </p>
                </div>
                <button className="w-9 h-9 bg-[#2D3B36]/10 rounded-md shadow-md flex items-center justify-center border">
                  <ShoppingCart className="w-4 h-4 text-[#2D3B36]" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Arrows */}
      <div className="block md:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8"
        >
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full border border-[#2D3B36] flex items-center justify-center text-[#2D3B36]"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full bg-[#2D3B36] text-white flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BestSelling
