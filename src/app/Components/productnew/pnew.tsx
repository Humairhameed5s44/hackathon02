import Link from 'next/link';
import bhootchair from '../../../../public/images/bhootchair.jpg';
import sofa from '../../../../public/images/sofa.jpg';
import bchair from '../../../../public/images/bchair.jpg';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductProps {
  image: StaticImageData;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 font-medium">{price}</p>
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
    const products = [
      {
        image: sofa,
        title: 'The Popular suede sofa',
        price: '£980',
      },
      {
        image: bchair,
        title: 'The Dandy chair',
        price: '£250',
      },
      {
        image: bhootchair,
        title: 'The Bhoot chair',
        price: '£400',
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12 w-full h-[744px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Our popular products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-8">
            <button
              type="button"
              className="w-[170px] h-[56px] text-gray-400 bg-[#F9F9F9] rounded-md shadow-md hover:text-gray-600 hover:bg-gray-200"
            >
              <Link href="/Productlisting"> View collection </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
      

export default ProductShowcase;
