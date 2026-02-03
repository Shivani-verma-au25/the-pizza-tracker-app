import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cardSlice";
import { toast } from "sonner";

function PizzaCard({pizza}) {
  const [size, setSize] = useState("Regular");
  const [quantity, setQuantity] = useState(1);
  const price = pizza.price[size]; // 🔥 key line
  const dispatch = useDispatch()

  const add = () =>{ 
    dispatch(addToCart({
      pizzaId : pizza.id,
        name:pizza.name,
        size,
        price : pizza.price[size],
        quantity,
        image:pizza.image
    }))
    toast.success('Pizza added to your cart')
  }
  return (
    // <div className=" bg-gray-50 rounded-xl overflow-hidden">
    //   <div className="">
    //     <img
    //       className="w-full h-full object-cover hover:scale-105 transition-all duration-250 ease-linear cursor-pointer "
    //       src={pizza?.image}
    //       alt=""
    //     />
    //   </div>
    //   <div className="flex flex-col p-2">
    //     <p className="text-lg font-bold">{pizza.name}</p>
    //     <p className="text-xs font-semibold ">{pizza.description}</p>
    //     <h3 className="text-sm font-semibold py-2 text-gray-700">{pizza.price}</h3>
    //   </div>
    //   <div className="flex justify-between p-2 items-center">
    //     <p className="font-semibold text-xs">₨.299</p>
    //     <Button className='cursor-pointer' >+ Add</Button>
    //   </div>
    // </div>


    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2">{pizza.name}</h2>
      <p className="text-sm text-gray-600">{pizza.description}</p>

      {/* Size Selector */}
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full mt-3 border p-2 rounded"
      >
        {pizza.sizes.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* Quantity */}
      <div className="flex items-center gap-3 mt-3">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>➖</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>➕</button>
      </div>

      {/* Price */}
      <p className="mt-3 font-semibold">
        Price: ₹ {price * quantity}
      </p>

      <Button onClick={add} className="w-full mt-3">
        Add to Cart
      </Button>
    </div>
  );
};


export default PizzaCard;
