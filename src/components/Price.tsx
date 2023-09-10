"use client";

import React, { useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER  */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        {/* QUANTITY AND ADD BUTTON CONTAINER  */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button>{"<"}</button>
            <span>{quantity}</span>
            <button>{">"}</button>
          </div>
        </div>
        {/* CART BUTTON  */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
