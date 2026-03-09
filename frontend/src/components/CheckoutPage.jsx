import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate()

  return (
    <div className="p-6 max-w-5xl mx-auto mt-44 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {/* users detail for order */}
      <div className="flex justify-center items-start gap-6">
        <div className="flex justify-center items-end flex-col  w-full">
          <form action="">
            <Input placeholder="Name" type={"text"} className="mb-4" />
            <Input placeholder="Phone Number" type={"tel"} className="mb-4" />
            <Input placeholder="City" type={"text"} className="mb-4" />
            <Input placeholder="State" type={"text"} className="mb-4" />
            <Input placeholder="Piz" type={"number"} className="mb-4" />
            <textarea
              placeholder="Enter delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-3 rounded-lg w-full mb-4"
            />
            <RadioGroup defaultValue="option-one" className=" flex ">
            <p className="font-sm text-gray-400 font-normal py-2">Payment options</p>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Cash on Delivery (COD)</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Pay Online </Label>
              </div>
            </RadioGroup>
          </form>
        </div>
        {/* orders summary what use going to order */}
        <div className="w-96 max-w-xl bg-white rounded-lg shadow-md p-6 ">
          <h2 className="text-xl font-bold ">Order Summary</h2>
          <div className="flex flex-col gap-3 mt-4 mb-6">
            <div className="flex justify-between items-center ">
              <p className="text-gray-500 font-semibold text-sm">Items</p>
              <p className="text-black font-semibold text-sm">3</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-gray-500 font-semibold text-sm">Sub Total</p>
              <p className="text-black font-semibold text-sm">200</p>
            </div>
            <div className="flex justify-between items-center border-t-2 mt-3">
              <p className="text-gray-500 font-semibold text-sm">Total</p>
              <p className="text-black font-semibold text-sm">200</p>
            </div>
          </div>
          {/* change to navigation location to 'payment gatway page' from  this '/' */}
          <Button onClink={() => navigate('/')} className="w-full">Place Order</Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
