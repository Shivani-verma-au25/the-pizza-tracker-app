import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
     const pizzas = [
    { id: 1, name: "Margherita" },
    { id: 2, name: "Farmhouse" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <Button className="mb-4">+ Add New Pizza</Button>

      <div className="space-y-3">
        {pizzas.map((p) => (
          <div key={p.id} className="flex justify-between border p-4 rounded-xl">
            <span>{p.name}</span>

            <div className="flex gap-2">
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default AdminDashboard