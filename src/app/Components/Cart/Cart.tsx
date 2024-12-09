import React from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const products: Product[] = [
  {
    name: 'Graystone vase',
    price: 85,
    image: '/images/grayson.jpg',
    quantity: 1,
  },
  {
    name: 'Basic white vase',
    price: 125,
    image: '/images/basicw.jpg',
    quantity: 1,
  },
];

const Cart: React.FC = () => {
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full h-[749px grid grid-cols-1 gap-10]">
      <h1 className="text-2xl font-bold mb-6">Your shopping cart</h1>
      <div className="space-y-6">
        {products.map((product, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center">
            <div className="col-span-1">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <span className="text-gray-500 mr-4">{product.quantity}</span>
              <div className="flex items-center">
                <button className="px-2 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300">
                  -
                </button>
                <button className="px-2 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <div>
          <p className="text-gray-500 mb-2">Subtotal</p>
          <p className="text-2xl font-bold">${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="bg-blue-500 text-white font-medium rounded-md px-6 py-3 hover:bg-blue-600">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;