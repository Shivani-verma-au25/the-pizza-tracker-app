import React from 'react'

const AdminAllORders = () => {
  return (
    <div>
      <h2>All Orders</h2>

      <div style={{ border: "1px solid blue", margin: 10 }}>
        <p>Order ID: #123</p>
        <p>User: John</p>
        <p>Status: PLACED</p>

        <select>
          <option>PLACED</option>
          <option>PREPARING</option>
          <option>OUT_FOR_DELIVERY</option>
          <option>DELIVERED</option>
        </select>
      </div>
    </div>
  )
}

export default AdminAllORders