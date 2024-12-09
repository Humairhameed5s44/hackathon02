import creasofa from '../../../../public/images/creasofa.jpg'
import React from 'react';
import Image from 'next/image';
const ServiceShowcase: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] text-black py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 gap-8 ">
      <div>
        <Image src={creasofa} alt='Sofa' className='w-[720px] h-[603px]'></Image>
      </div>
      <div className="flex flex-col justify-center w-[720px] h-[603px]">
        <h2 className="text-3xl font-bold mb-4">Our service isn’t just personal, it’s actually
        hyper personally exquisite</h2>
        <p className="text-lg">When we started Avion, the idea was simple. 
            Make high quality furniture affordable and available for the mass market.
             Handmade, and lovingly crafted furniture and homeware is what we live, 
          breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
        <button className="bg-white text-gray-700 font-medium rounded-md px-6 py-3 mt-6 w-fit hover:bg-gray-200 transition-colors duration-300">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ServiceShowcase;