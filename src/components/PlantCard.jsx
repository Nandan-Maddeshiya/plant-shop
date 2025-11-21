import React from "react";
import cart from "../assets/icons/Cart.png"
import Button from "./Button";


export default function PlantCard({ img, title, desc, price }) {
  return (
    <article
      className=" bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-5 md:p-6 
             shadow-lg mx-auto flex flex-col justify-center w-full max-w-sm md:max-w-4xl lg:max-w-none mt-20 opacity-70 font-inter"
    >
      <div className="w-full h-40 md:h-44 flex items-center justify-center -mt-10">
        <img
          src={img}
          alt={title}
          className="object-contain mx-auto rounded-lg drop-shadow-lg w-100 sm:w-120 md:w-200 lg:w-120 h-auto"
        />
      </div>

      <div className="mt-25 sm:mt-30 text-white font-inter">
        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">{title}</h3>

        {desc && (
          <p className="text-sm sm:text-base  mt-3">
            {desc}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="font-semibold text-xl sm:text-2xl  text-white">{price}</p>
        <Button variant="cart">
          <img
            src={cart}
            alt="cart"
            className="w-4 h-4"
          />
        </Button>
      </div>
    </article>
  );
}