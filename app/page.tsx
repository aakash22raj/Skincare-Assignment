"use client"
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Description from "./_components/Description";
import WhyOurProducts from "./_components/WhyOurProducts";
import BestSelling from "./_components/BestSelling";
import FilterProduct from "./_components/FilterProduct";
import FAQSection from "./_components/FAQSection";
import Footer from "./_components/Footer";
import Header1 from "./_components/Header1";
import Header2 from "./_components/Header2";

import { motion } from 'framer-motion'

export default function Home() {

  return (
    <div  className="bg-[#FEFFF4]">
      <Navbar />
      

      <Header1 />
      <Header2 />


      <Description />

      <WhyOurProducts />

      <BestSelling />


      <div className="min-h-screen hidden md:block bg-[#FEFFF4] px-16 p-6 mb-10 mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center relative w-full h-[600px] rounded-[20px] overflow-hidden"
        >
          <Image
            src="/girl3.png"
            alt="Beauty Product"
            fill
            className="object-cover mb-8"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center text-center">
            <div className="w-full px-4 py-8 bg-gradient-to-t from-[#293330] to-transparent">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white text-3xl md:text-4xl font-medium leading-snug"
              >
                Feel Beautiful Inside and Out <br /> with Every Product.
              </motion.h1>
              <motion.button 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-200 transition"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>


      <FilterProduct />

      <FAQSection />

      <Footer />

    </div>
  );
}
