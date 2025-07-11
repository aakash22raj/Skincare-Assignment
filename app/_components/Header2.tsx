import Image from 'next/image'
import React from 'react'

function Header2() {
  return (
    <div className='bg-[#EFF5E1] overflow-hidden'>
        <div className='hidden md:block'>
            <button className="absolute bottom-20 left-70 md:left-16 bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm md:text-base">
                Shop Now
            </button>
        </div>


        <div  className='hidden md:block'>
            <div className='flex justify-center relative z-10 mb-4'>
                <Image
                    src="/girl.png"
                    alt="Woman with avocado"
                    width={610}
                    height={670}
                    className='rounded-2xl overflow-hidden w-80 md:w-100'
    
                    
                />
                <div className="absolute bottom-5 left-70 md:left-84 bg-[#EFF5E1] px-2 py-1.5 pr-4 rounded-full shadow flex items-center gap-4 border">
                    <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
                        <div className="">
                            <Image 
                                src='/pro.jpg' 
                                alt='icon' 
                                width={34}
                                height={34}
                                className="rounded-full" 
                            />
                        </div>
                    </div>
                    <span className="text-sm text-[#2D3B36] font-medium">
                      While giving you an invigorating <br className="" /> cleansing experience.
                    </span>
                </div>
            </div>

            
            <div className='hidden sm:block md:hidden'>
                <div className='flex justify-center items-center h-full'>
                    <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm md:text-base">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>

        <div className='block md:hidden'>
            <div className='flex justify-between px-6'>
                <div className='flex justify-center relative z-10 mb-4'>
                    <Image
                        src="/girl.png"
                        alt="Woman with avocado"
                        width={610}
                        height={670}
                        className='rounded-2xl overflow-hidden w-80 md:w-100'
        
                        
                    />
                    <div className="absolute bottom-5 left-70 md:left-84 bg-[#EFF5E1] px-2 py-1.5 pr-4 rounded-full shadow flex items-center gap-4 border">
                        <div className="p-1 rounded-full border border-dotted border-[#2D3B36]">
                            <div className="">
                                <Image 
                                    src='/pro.jpg' 
                                    alt='icon' 
                                    width={34}
                                    height={34}
                                    className="rounded-full" 
                                />
                            </div>
                        </div>
                        <span className="text-sm text-[#2D3B36] font-medium">
                          While giving you an invigorating <br className="" /> cleansing experience.
                        </span>
                    </div>
                </div>
    
                
                <div className='hidden sm:block md:hidden'>
                    <div className='flex justify-center items-center h-full'>
                        <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm md:text-base">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>



        {/* Large Background Text */}
        <div className='hidden sm:block'>
            <div className="absolute inset-x-0 bottom-[-72%] md:bottom-[-30%] text-[120px] md:text-[250px] font-semibold text-[#35433E] leading-none select-none pointer-events-none z-0 flex justify-center overflow-hidden">
              <div className="whitespace-nowrap">SKINCARE</div>
            </div>
        </div>

        <div className='block sm:hidden'>
            <div className="absolute inset-x-0 bottom-[-3%] text-[80px] font-semibold text-[#35433E] leading-none select-none pointer-events-none z-0 flex justify-center overflow-hidden">
              <div className="whitespace-nowrap">SKINCARE</div>
            </div>
        </div>
    </div>
  )
}

export default Header2