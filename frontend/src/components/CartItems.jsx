import React from "react";

function CartItems() {
  return (
    <div className="w-full flex  justify-between items-center border-t border-b">
      {/* image */}
      <div className="flex justify-center items-center gap-2">
        <div className="bg-white w-32 h-32 p-1 overflow-hidden rounded-md border m-2 shadow-2xl">
          <img
            className="w-full h-full object-cover p-2 rounded-full hover:scale-105 transition-all duration-150 ease"
            src="https://t3.ftcdn.net/jpg/07/70/75/16/360_F_770751689_FZdxDkfXHjeKTK4C49yapEIkiuafVJEY.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-start p-2 ">
          <p className="font-semibold text-lg">Margherita</p>
          <p className="font-medium text-sm text-gray-400">Medium</p>
          <p className="font-medium text-sm text-gray-400">1 Pcs</p>
        </div>
      </div>
      <span>₨.300</span>
    </div>
  );
}

export default CartItems;
