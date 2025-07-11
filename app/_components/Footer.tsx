import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#2D3B36] text-[#E7E8E0] px-8 md:px-14 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
        {/* Left section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Join The Skincare <br /> Community Now.
          </h2>

            <div className="mt-20 text-sm">
                <div className="flex flex-row md:justify-start gap-4 md:gap-8 w-full">
                    <span className='w-full md:w-auto'>Facebook</span>
                    <span className='w-full md:w-auto'>Instagram</span>
                    <span >YouTube</span>
                </div>
            </div>
        </div>

        {/* Right section */}
        <div className="md:text-right mt-6">
          <p className="text-lg">Get in Touch</p>
          <p className="text-3xl md:text-4xl font-medium">
            contact.<span className="text-[#E7E8E0]">skincare.com</span>
          </p>

            <div className="mt-20 mb-20 text-sm">
                <div className="flex flex-row md:justify-end gap-4 md:gap-8 w-fullr">
                    <span className='w-full md:w-auto'>Terms of Service</span>
                    <span className='w-full md:w-auto'>Privacy Policy</span>
                    <span className='w-full md:w-auto'>Cookies Policy</span>
                </div>
            </div>
        </div>
      </div>


      {/* Large Background Text */}
      <div className="absolute inset-x-0 bottom-[-6%] md:bottom-[-25%] text-[120px] md:text-[250px] font-semibold text-[#35433E] leading-none select-none pointer-events-none z-0 flex justify-center overflow-hidden">
        <div className="whitespace-nowrap">SKINCARE</div>
      </div>
    </footer>
  );
}


export default Footer