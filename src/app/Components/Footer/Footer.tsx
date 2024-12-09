import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Our company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Join our mailing list</h4>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-4 py-2 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-indigo-900 px-4 py-2 rounded-md"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2022 Avion LTD</p>
        <div className="flex justify-center space-x-4 mt-2">
          <FaLinkedinIn size={32} color='#F9F9F9'>
            LinkedIn
          </FaLinkedinIn>
          <FaFacebook size={32} color="#F9F9F9" >
            Facebook
          </FaFacebook>
          <FaInstagram size={32} color='#F9F9F9'>
            Instagram
          </FaInstagram>
          <FaTwitter size={32} color='#F9F9F9'>
            Twitter
          </FaTwitter>
          <FaPinterest size={32} color='#F9F9F9' >
            Pinterest
          </FaPinterest>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
