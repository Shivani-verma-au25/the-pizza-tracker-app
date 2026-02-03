import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <ul>
        <li><Link to="/admin/pizzas">Manage Pizzas</Link></li>
        <li><Link to="/admin/orders">View Orders</Link></li>
      </ul>
    </div>
  )
}

export default AdminDashboard