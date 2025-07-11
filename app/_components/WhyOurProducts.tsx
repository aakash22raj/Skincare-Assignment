'use client'

import { Lock } from 'lucide-react'
import Image from 'next/image'



const WhyOurProducts = () => {
  return (
    <section className="bg-[#FEFFF4] px-6 md:px-16 py-10 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-32">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium text-[#2D3B36]">
                  <span className="w-3 h-3 rounded-full bg-[#2D3B36]" />
                  Best Selling Products
                </div>
    
                <h2 className="text-3xl md:text-4xl font-medium text-[#2D3B36] leading-tight pt-6">
                  YOUR SKIN DESERVES <br /> THE BEST CARE.
                </h2>
    
                <p className="text-[#525349] text-sm md:text-base max-w-lg">
                  Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our rage crafted with love backed by science, and inspired by nature.
                </p>
    
                {/* Features */}
                <div className="space-y-8 pt-6">
                    {/* Feature 1 */}
                    <div>
                        <h3 className="text-2xl text-[#2D3B36] font-medium flex items-center gap-4">
                          <span className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4]">01</span>
                          Bio Ingredients
                        </h3>
                        <p className="text-sm text-[#2D3B36] pl-[52px] mt-3">
                          Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
                        </p>
                    </div>
    
                    {/* Feature 2 */}
                    <div>
                        <h3 className="text-2xl text-[#2D3B36] font-medium flex items-center gap-4">
                          <span className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4]">02</span>
                          Everything Natural
                        </h3>
                        <p className="text-sm text-[#2D3B36] pl-[52px] mt-3">
                          Pure ingredients for pure skin. The Perfect solution for your skin care needs.
                        </p>
                    </div>
    
                    {/* Feature 3 */}
                    <div>
                        <h3 className="text-2xl text-[#2D3B36] font-medium flex items-center gap-4">
                          <span className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4]">03</span>
                          All Handmade
                        </h3>
                        <p className="text-sm text-[#2D3B36] pl-[52px] mt-3">
                          Made with love and care. Just for you. Give your skin the tender loving care it deserves.
                        </p>
                    </div>            
                </div>
            </div>

            {/* Right Image with Badge */}
            <div className="flex-1 relative w-full">
                <div className="rounded-2xl overflow-hidden w-full max-w-xl mx-auto">
                    <Image
                      src="/girl2.png" 
                      alt="Skincare model"
                      width={620}
                      height={700}
                      className="w-full h-auto object-cover"
                    />
                </div>
    
                {/* Badge */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-[#F0F6D7] flex sm:flex-row items-center px-4 py-2 rounded-full shadow-md text-sm text-center md:text-left w-[80%] max-w-xs">
                    <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
                        {/* Inner icon with background */}
                        <div className="bg-[#2D3B36] text-white p-2 rounded-full">
                            <Lock className="w-4 h-4" />
                        </div>
                    </div>
                    <span className="text-[#2D3B36] font-medium px-6">
                        Best Skin Care Product <br /> Award Wining
                    </span>
                </div>
                {/* Bottom Labels */}
                <div className="mt-4 flex items-center justify-between text-sm text-[#2D3B36]/70 px-2">
                    <span>SINCE 2001</span>
                    <span>LEARN MORE</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WhyOurProducts
