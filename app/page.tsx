"use client"
import Image from "next/image";

// import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Navbar from "./_components/Navbar";
import Description from "./_components/Description";
import WhyOurProducts from "./_components/WhyOurProducts";
import BestSelling from "./_components/BestSelling";
import FilterProduct from "./_components/FilterProduct";
import FAQSection from "./_components/FAQSection";
import Footer from "./_components/Footer";
import Header1 from "./_components/Header1";
import Header2 from "./_components/Header2";

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
        <div className="flex items-center justify-center relative w-full h-[600px] rounded-[20px] overflow-hidden">
          <Image
            src="/girl3.png"
            alt="Beauty Product"
            fill
            className="object-cover mb-8"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center text-center">
            <div className="w-full px-4 py-8 bg-gradient-to-t from-[#293330] to-transparent">
              <h1 className="text-white text-3xl md:text-4xl font-medium leading-snug">
                Feel Beautiful Inside and Out <br /> with Every Product.
              </h1>
              <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>


      <FilterProduct />

      <FAQSection />

      <Footer />

    </div>
  );
}
