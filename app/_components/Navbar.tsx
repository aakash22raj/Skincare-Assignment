'use client'
import React from 'react'
import { FiShoppingBag, FiHeart, FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className="bg-[#EFF5E1] py-4 px-6 md:px-10 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-[#2D3B36]">SKINCARE</div>

      {/* Menu (visible on desktop) */}
      <div className="hidden md:flex gap-8 text-lg text-gray-800 font-medium">
        <a href="#">All Products</a>
        <a href="#">Serum</a>
        <a href="#">Sunscreen</a>
        <a href="#">Bundle</a>
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        {[FiShoppingBag, FiHeart, FiUser].map((Icon, index) => (
          <div key={index} className="bg-[#F8FEE5] p-2 rounded-full">
            <Icon className="text-gray-700 text-xl cursor-pointer" />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
