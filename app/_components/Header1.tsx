import Image from 'next/image'
import React from 'react'

function Header1() {
  return (
    <div className='bg-[#EFF5E1] py-16 overflow-hidden'>
      <div className='block sm:hidden md:hidden text-6xl font-extrabold text-[#2D3B36] leading-tight'>
        <h1>GLOWWWW<br /> NATURALLY</h1>
      </div>
      <div className='flex flex-col md:flex-row px-6 md:px-12 items-center justify-between gap-8 md:gap-72'>
        <div className='flex flex-row items-center justify-between gap-16 md:gap-32'>
          
          <div className='py-8 text-[#2D3B36]'>
            <p>Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.</p>
          </div>
  
          <div className='hidden md:block text-5xl md:text-6xl font-extrabold text-[#2D3B36] leading-tight'>
            <h1>GLOW<br /> NATUR-<br/>ALLY</h1>
          </div>

          {/* Change the medium sreen */}
          <div className='hidden sm:block md:hidden'>
            <Image 
              src='/pro.jpg'
              alt='plum'
              width={400}
              height={450}
              className='w-[750px] h-[300px] object-cover'
            />
          </div>
        </div>


        <div className='hidden md:block '>
          <Image 
            src='/pro.jpg'
            alt='plum'
            width={240}
            height={250}
            className='rounded-lg'
          />
        </div>

        <div className='hidden sm:block md:hidden mt-[-130px] text-8xl font-extrabold text-[#2D3B36] leading-tight'>
          <h1>GLOWWWW<br /> NATURALLY</h1>
        </div>
      </div>
    </div>
  )
}

export default Header1