'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Headphones, Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Are your products safe for sensitive skin?',
    answer:
      'Yes, our products are formulated with gentle, non-irritating ingredients and are dermatologically tested.'
  },
  {
    question: 'Are your products cruelty-free?',
    answer:
      'Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.'
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a hassle-free return policy within 30 days of purchase. Products must be unused and in original packaging. '
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we do ship internationally. Shipping times and costs vary by location and will be calculated at checkout. '
  },
  {
    question: 'How do I choose the right product?',
    answer:
      'To choose the right product, consider your skin type, concerns (like dryness, acne, or aging), and ingredient preferences.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-[#FEFFF4] px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative hidden md:block">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/pro.jpg"
              alt="FAQ Product"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Support bubble */}
          <div className="absolute bottom-5 left-7 md:left-44 bg-[#EFF5E1] px-2 py-1.5 pr-4 rounded-full shadow flex items-center gap-4 border">
            <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
              <div className="bg-[#2D3B36] text-[#EFF5E1] p-2 rounded-full">
                <Headphones className="w-4 h-4" />
              </div>
            </div>
            <span className="text-sm text-[#2D3B36] font-medium">
              24/7 We're Here <br /> to Help You
            </span>
          </div>
        </div>

        {/* Right FAQs */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium text-[#2D3B36]">
            <span className="w-3 h-3 rounded-full bg-[#2D3B36]" />
            Frequently Asked Question
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-medium text-[#2D3B36] leading-snug">
            Answers to Your <br />
            Skincare Questions, All <br />
            in One Place.
          </h2>

          {/* Accordions */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className="border border-[#2D3B36] rounded-lg px-4 py-3 transition-shadow shadow-sm hover:shadow-md bg-white"
                >
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-[#2D3B36] font-medium text-sm md:text-base">
                      {faq.question}
                    </span>
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#2D3B36]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#2D3B36]" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm text-[#2D3B36]/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
