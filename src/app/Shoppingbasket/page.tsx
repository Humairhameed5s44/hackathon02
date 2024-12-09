'use client'
import React from "react";
import NHeaders from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Cart from "../Components/Cart/Cart";

const ShoppingCart: React.FC = () => {
  return (
    <div className="bg-gray-50 w-full  flex flex-col">
      <NHeaders></NHeaders>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default ShoppingCart;
