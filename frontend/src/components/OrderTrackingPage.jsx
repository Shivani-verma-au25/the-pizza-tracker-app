import { socket } from "@/utils/socket";
import React, { useEffect, useState } from "react";

const OrderTrackingPage = ({ orderId }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.emit("joinOrderRoom", orderId);

    socket.on("orderStatusUpdate", (data) => {
      if (data.orderId === orderId) {
        setStatus(data.orderId);
      }
    });
    return () => {
      socket.off("orderStatusUpdate");
    };
  }, [orderId]);
  return (
    <div>
      <div>
        <h2>Order Status</h2>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
