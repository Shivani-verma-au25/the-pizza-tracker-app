import { ShoppingBasket, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import useAuth from "@/customHooks/useAuth";

function Cart() {
  const {isAuthenticated} =  useSelector(state => state.auth)
  const {cart} = useSelector(state => state.cart);
  console.log(cart);

  if (cart.length === 0) return <div className="w-full h-screen flex justify-center items-center flex-col  ">
            <h1 className="text-4xl py-3 font-semibold">
              Your Cart is Empty Now!
            </h1>
            <p className="text-gray-500 text-lg">
              You haven't ordered anything yet!
            </p>
            <ShoppingCartIcon size={50} className="text-4xl mt-10" />
            <Link to={"/"} className="py-5 ">
              <Button
                className={
                  "cursor-pointer hover:scale-105 transition-all duration-150 ease bg-amber-600 hover:bg-amber-500"
                }
              >
                Go Back
              </Button>
            </Link>
          </div>
  
  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
          <div className="w-3xl mx-auto flex justify-center items-start flex-col gap-3">
            <div className="flex justify-center items-center gap-2 mt-10">
              <span>
                <ShoppingBasket />
              </span>
              <span className="font-semibold text-2xl">Order Summary</span>
            </div>
            {/* cart items */}
            {
                cart.map((item,ind) => (
                    <CartItems key={ind} item={item} />
                ))
            }

            {/* total amount */}
            <div className="w-full flex justify-end gap-5 flex-col">
              <h2 className="text-end">Total Amount: ₨.300</h2>
              {/* <div className=''> */}
              <form
                action=""
                className="flex justify-center items-end flex-col"
              >
                <Input
                  className="w-1/2 mt-3 rounded-md  border-gray-300 focus:border-gray-500 focus:ring-gray-500 resize-none"
                  placeholder="Phone Number..."
                  type={"tel"}
                />
                <Textarea
                  className=" mt-3 rounded-md  border-gray-300 focus:border-gray-500 focus:ring-gray-500 resize-none"
                  placeholder="Address..."
                ></Textarea>
              </form>
              {/* </div> */}
              <Button className={"cursor-pointer"}>{isAuthenticated ? 'Order Now' : "Login To continue"}</Button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cart;
