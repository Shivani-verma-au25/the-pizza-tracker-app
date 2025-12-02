import React from "react";
import { Button } from "./ui/button";

function PizzaCard() {
  return (
    <div className=" bg-gray-50 rounded-xl overflow-hidden">
      <div className="">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-all duration-250 ease-linear cursor-pointer "
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center p-2">
        <p className="text-lg font-bold">Magherita</p>
        <h3 className="text-sm font-semibold text-gray-500">Small</h3>
      </div>
      <div className="flex justify-between p-2 items-center">
        <p className="font-semibold text-xs">₨.299</p>
        <Button className='cursor-pointer' >+ Add</Button>
      </div>
    </div>
  );
}

export default PizzaCard;
