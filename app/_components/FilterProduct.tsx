'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react'
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  {
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
    image: '/pro1.jpg',
    category: 'cleansing'
  },
  {
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.89',
    image: '/pro2.jpg',
    category: 'acne'
  },
  {
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.89',
    image: '/pro.jpg',
    category: 'anti-aging'
  },
  {
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
    image: '/pro3.jpg',
    category: 'new'
  }
]

const categories = [
  { label: 'NEW ARRIVAL', value: 'new' },
  { label: 'CLEANSING', value: 'cleansing' },
  { label: 'ACNE FIGHTER', value: 'acne' },
  { label: 'ANTI AGGING', value: 'anti-aging' }
]

const FilterProduct = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState('new')

  const visibleProducts = products

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
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#FEFFF4] px-6 md:px-16 py-10 space-y-8 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-medium text-[#2D3B36] text-center">
          Feel Beautiful Inside and Out <br />
          with Every Product.
        </h2>

        {/* Filter Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeCategory === cat.value
                  ? 'bg-[#2D3B36] text-white'
                  : 'bg-transparent text-[#2D3B36] border-[#2D3B36]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Product Cards Scrollable Row */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-2"
      >
        <AnimatePresence initial={false}>
          {visibleProducts.map((product, index) => {
            const isHighlighted = product.category === activeCategory

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className={`w-9 h-9 rounded-md shadow-md flex items-center justify-center border ${
                        isHighlighted
                          ? 'bg-[#2D3B36] text-white'
                          : 'bg-[#2D3B36]/10 text-[#2D3B36]'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Scroll Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
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
    </motion.section>
  )
}

export default FilterProduct
