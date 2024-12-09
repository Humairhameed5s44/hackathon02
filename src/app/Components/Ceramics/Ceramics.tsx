import React, { useState, useEffect } from 'react';
import Image from 'next/image';
interface Product {
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    name: 'The Dandy chair',
    price: 250,
    image: '/images/chair.jpg',
  },
  {
    name: 'Rustic Vase Set',
    price: 155,
    image: '/images/vases.jpg',
  },
  {
    name: 'The Silky Vase',
    price: 125,
    image: '/images/vase.jpg',
  },
  {
    name: 'The Lucy Lamp',
    price: 399,
    image: '/images/lamp.jpg',
  },
];

const NewCeramics = () => {
  const [showLargeView, setShowLargeView] = useState(true);

  const handleResize = () => {
    setShowLargeView(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 w-full h-[761px]">
      <h2 className="text-3xl font-bold mb-4">New ceramics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.name} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <Image 
  src="" 
  alt="Image description" 
  layout="intrinsic" 
  width={305} 
  height={375}
/>

            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700">£{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt- 4">
        {showLargeView ? (
          <div className="hidden md:block">
            <p className="text-lg">This is the large view design.</p>
          </div>
        ) : (
          <div className="block md:hidden">
            <p className="text-lg">This is the small device view design.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCeramics;