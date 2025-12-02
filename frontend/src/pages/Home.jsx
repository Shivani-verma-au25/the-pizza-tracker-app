import PizzaCategory from "@/components/PizzaCategory";
import { Button } from "@/components/ui/button";
import React from "react";

function Home() {
  return (
    <div className="max-w-7xl mx-auto ">
      <section className="bg-gray-50 h-full flex items-center justify-center">
        {/* left side */}
        <div className="w-1/2 h-10/12 flex flex-col gap-5 justify-center items-start px-10">
          <h1 className="text-xl font-semibold italic text-gray-700">
            Are you hungry? Bro
          </h1>
          <h2 className="text-6xl font-bold ">Don't Wait !</h2>
          <Button className="cursor-pointer">Order Now</Button>
        </div>

        {/* right side */}
        <div className="w-1/2">
          <img
            className="w-full max-h-96 object-cover rounded-2xl"
            src="https://plus.unsplash.com/premium_photo-1679924471066-dd984e92f395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpenphfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </section>
      {/* categoy section */}
      <PizzaCategory/>
    </div>
  );
}

export default Home;
