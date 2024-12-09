'use client'
import Image from 'next/image';
import React from 'react';
import NHeaders from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

interface Product {
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    name: 'The Candy Chair',
    price: 250,
    image: '/images/bchair.jpg',
  },
  {
    name: 'Rustic Vase Set',
    price: 165,
    image: '/images/rustic.jpg',
  },
  {
    name: 'The Silky Vase',
    price: 205,
    image: '/images/silky.jpg',
  },
  {
    name: 'The Lucy Lamp',
    price: 399,
    image: '/images/lucy.jpg',
  },
  {
    name: 'Classic Lamp',
    price: 399,
    image: '/images/dandylamp.jpg',
  },
  {
    name: 'Clay Vase',
    price: 699,
    image: '/images/clayvase.jpg',
  },
  {
    name: 'Metallic sit',
    price: 249,
    image: '/images/yellowstool.jpg',
  },
  {
    name: 'Back Chair',
    price: 99,
    image: '/images/plain.jpg',
  },
  {
    name: 'The Candy Chair',
    price: 250,
    image: '/images/bchair.jpg',
  },
  {
    name: 'Rustic Vase Set',
    price: 165,
    image: '/images/rustic.jpg',
  },
  {
    name: 'The Silky Vase',
    price: 205,
    image: '/images/silky.jpg',
  },
  {
    name: 'The Lucy Lamp',
    price: 399,
    image: '/images/lucy.jpg',
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NHeaders />
      <div className="w-full h-[209px]">
        <Image
          src="/images/banner.jpg"
          alt="banner"
          className="w-full h-[209px]"
          width={1440}
          height={209}
        />
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between"
            >
              <div className="h-[462px] w-[305px] bg-gray-200 rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={305}
                  height={375}
                  className="rounded-lg h-[375px] w-[305]"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">${product.price}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-4 py-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}