import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* TEXT CONTAINER  */}
      <div className="flex-1">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.text-white
        </p>
        <button>Order Now</button>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className="flex-1 w-full relative">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
