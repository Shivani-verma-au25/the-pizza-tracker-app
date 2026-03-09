import { ShoppingBasket, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "@/customHooks/useAuth";
import { decreaseQty, increseQuantity } from "@/redux/cardSlice";

function Cart() {
  const {isAuthenticated,userLoading} =  useSelector(state => state.auth)
  const {cart,totalPrice,totalQuantity} = useSelector(state => state.cart);
  const disptach = useDispatch();
  const navigate = useNavigate();
  console.log(cart);

  if(userLoading) {
    return <div className="w-full h-screen flex justify-center items-center">
      <ShoppingBasket size={50} className="animate-spin text-amber-600" />
    </div>
  }


  // const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (cart?.length === 0) return <div className="w-full h-screen flex justify-center items-center flex-col  ">
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
    <div className="bg-gray-50 py-10 mt-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
          <div className="w-3xl mx-auto flex justify-center items-start flex-col gap-3">
            <div className="flex justify-center items-center gap-2 mt-10">
              <span>
                <ShoppingBasket />
              </span>
              <span className="font-semibold text-2xl">Your Cart</span>
            </div>
            {/* cart items */}
            {
                cart.map((item,ind) => (
                    <CartItems key={ind} item={item} />
                ))
            }

            {/* total amount */}
            <div className="w-full flex justify-end gap-5 flex-col">
              <h2 className="text-end">Total Amount: ₨.{totalPrice}</h2>
              {/* <div className=''> */}
              {/* <form
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
              </form> */}
              {/* </div> */}
              <Button 
              onClick ={() => navigate('/check-out')}
               className={"cursor-pointer"}>{isAuthenticated ? 'Order Checkout' : "Login To continue"}</Button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cart;
