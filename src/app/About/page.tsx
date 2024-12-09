"use client"
import ychair from "../../../public/images/ychair.jpg"
import Why from "../Components/Why/Why"
import Image from "next/image";
import React from "react";
import Hotbar from "../Components/Hotbar/Hotbar";
import NHeaders from "../Components/Header/Header";
import ServiceShowcase from "../Components/mdle/md";
import Footer from "../Components/Footer/Footer";
import ClubSignup from "../Components/Getbenefit/Benefits";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">

      <Hotbar></Hotbar>
      <NHeaders></NHeaders>

      <section className="bg-white py-16 h-[277px] w-full grid grid-cols-2 gap-4">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
          A brand built on the love of craftmanship,</h2><h2 className="text-2xl md:text-3xl font-bold mb-4">
          quality and outstanding customer service
          </h2>
        </div>
        <div className="container mx-auto text-center justify-end px-4">
          <button className="px-6 py-2 bg-[#F9F9F9] text-gray-500 rounded-md hover:bg-indigo-700">
            View Products
          </button>
        </div>
        
      </section>

      <section className="py-16 bg-gray-100 h-[598px] grid grid-cols-2 md:grid-cols-2 gap-8 w-full">
        <div className="container mx-auto px-4  w-[634px] h-[478px] bg-[#2A254B]">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center justify-center py-10">It started with a small idea</h3>
            <p className="text-white flex justify-center items-center">
            A global brand with local beginnings, our story begain in a small studio in South London in early 2014
            </p>
            <button className="px-6 py-2 bg-[#F9F9F926] text-white rounded-md mb-11 flex justify-center items-center hover:bg-indigo-700">
              View Collection
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center">
            <Image
              src={ychair}
              alt="Yellow chair"
              className="rounded-lg shadow-lg h-[478px] w-[630px]"
              height={478}
              width={630}
            />
          </div>
        </div>
      </section>

      <ServiceShowcase></ServiceShowcase>    
      
      <Why></Why>

      <ClubSignup></ClubSignup>

      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
