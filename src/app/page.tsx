"use client"
import Link from 'next/link'
import lucy from '../../public/images/lucy.jpg'
import bchair from '../../public/images/bchair.jpg'
import silky from '../../public/images/silky.jpg'
import rustic from '../../public/images/rustic.jpg'
import Why from './Components/Why/Why'
import Image from 'next/image';
import React from 'react';
import Footer from './Components/Footer/Footer';
import NHeaders from './Components/Header/Header';
import GetBenefit from './Components/Getbenefit/Benefits';
import ProductShowcase from './Components/productnew/pnew'
export default function Home() {

  return (
    <div className="bg-gray-50">
      <NHeaders></NHeaders>
      <div className="flex w-full h-[704px] items-center justify-center bg-gray-900 text-white">
      <div className="w-[1280px] h-[584px] mx-auto grid md:grid-cols-2 items-center gap-8 p-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            The furniture brand for the future, with timeless designs
          </h1>
          <button className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600">
            <Link href={"/allproduct"}>View collection</Link>
          </button>
          <p className="text-gray-400">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>
        <div className="relative w-[520px] h-[584px]">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src={bchair}
        alt="chair"
              width={520}
              height={584}
              className="object-contain w-[520px] h-[584px] "
            />
          </div>
        </div>
      </div>
    </div>

    <Why></Why>


    <section className="py-12 w-full h-[761px]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-2xl font-semibold text-gray-800">New Ceramics</h3>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <div className="w-[305px] h-[462px]">
        <Image
          src={bchair}
          alt="chair"
          width={305}
          height={375}
          className="w-[305px] h-[375px]"
        />
        <p>The Dandy chair</p>
        <p>$250</p>
      </div>
      <div className="w-[305px] h-[462px]">
        <Image
          src={rustic}
          alt="vase"
          width={305}
          height={375}
          className="w-[305px] h-[375px]"
        />
        <p>Rustic Vase Set</p>
        <p>£155</p>
      </div>
      <div className="w-[305px] h-[462px]">
        <Image
          src={silky}
          alt="vase"
          width={305}
          height={375}
          className="w-[305px] h-[375px]"
        />
        <p>The Silky Vase</p>
        <p>£125</p>
      </div>
      <div className="w-[305px] h-[462px]">
        <Image
          src={lucy}
          alt="lamp"
          width={305}
          height={375}
          className="w-[305px] h-[375px]"
        />
        <p>The Lucy Lamp</p>
        <p>£399</p>
      </div>
    </div>

    <div className="flex justify-center items-center mt-8">
      <button
        type="button"
        className="w-[170px] h-[56px] text-gray-400 bg-[#F9F9F9]"
      >
        <Link href={"/allproduct"}>View collection</Link>
      </button>
    </div>
  </div>
</section>


      <ProductShowcase></ProductShowcase>
      <GetBenefit></GetBenefit>
      <Footer></Footer>
    </div>
  );
}
