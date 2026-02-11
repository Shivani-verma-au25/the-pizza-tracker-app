import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { decreaseQty, increseQuantity } from "@/redux/cardSlice";

function CartItems({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-between items-center py-4 px-3 border-b">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        
        {/* Image */}
        <div className="w-20 h-20 bg-white p-1 rounded-xl border shadow-sm overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition duration-200"
            src={item.image}
            alt={item.name}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="font-semibold text-base">{item.name}</p>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
          <p className="text-sm text-gray-500">{item.quantity} pcs</p>
        </div>
      </div>

      {/* CENTER → Quantity */}
      <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            dispatch(decreaseQty({ pizzaId: item.pizzaId, size: item.size }))
          }
        >
          −
        </Button>

        <span className="font-medium w-5 text-center">{item.quantity}</span>

        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            dispatch(increseQuantity({ pizzaId: item.pizzaId, size: item.size }))
          }
        >
          +
        </Button>
      </div>

      {/* RIGHT SIDE → Price */}
      <p className="font-semibold text-lg min-w-[70px] text-right">
        ₹ {item.price * item.quantity}
      </p>
    </div>
  );
}

export default CartItems;
