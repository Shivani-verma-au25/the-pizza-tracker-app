import React from 'react'

const UserOrder = () => {
  return (
     <div>
      <h2>My Orders</h2>

      <div style={{ border: "1px solid #ccc", padding: 10 }}>
        <p>Order ID: #123</p>
        <p>Status: PLACED</p>
        <p>Total: ₹599</p>
      </div>

      <div style={{ border: "1px solid #ccc", padding: 10 }}>
        <p>Order ID: #124</p>
        <p>Status: DELIVERED</p>
        <p>Total: ₹899</p>
      </div>
    </div>
  )
}

export default UserOrder