import React from 'react'
import PizzaCard from './PizzaCard'

function PizzaCategory() {
  return (
    <div className='sm:w-full w-full bg-amber-100 py-10'>
        <p className='font-semibold text-lg uppercase p-3'>All categories</p>
        <div className='px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaCategory