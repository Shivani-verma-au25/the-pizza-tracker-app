import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cardSlice";
import { toast } from "sonner";

function PizzaCard({ pizza }) {
  const [size, setSize] = useState("Regular");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const price = pizza.price[size];

  const add = () => {
    dispatch(
      addToCart({
        pizzaId: pizza.id,
        name: pizza.name,
        size,
        price,
        quantity,
        image: pizza.image,
      })
    );
    toast.success("Pizza added to your cart 🍕");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-lg font-semibold">{pizza.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {pizza.description}
        </p>

        {/* Size selector */}
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border rounded-lg p-2 text-xs"
        >
          {pizza.sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Quantity */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-lg md:text-xs"
            >
              −
            </button>

            <span className="font-medium">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-lg md:text-xs"
            >
              +
            </button>
          </div>

          {/* Price */}
          <p className="font-semibold text-gray-800">
            ₹ {price * quantity}
          </p>
        </div>
      </div>

      {/* Add Button */}
      <div className="p-4 pt-0">
        <Button onClick={add} className="w-full cursor-pointer">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default PizzaCard;
