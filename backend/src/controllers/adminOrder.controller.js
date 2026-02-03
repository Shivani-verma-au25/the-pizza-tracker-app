import { Order } from "../models/order.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


// get all controller ordered by users
export const getAllOrder = asyncHandler( async (req ,res) =>{
    const  orders = await Order.find()
    .populate("user","username email")
    .populate("items.pizza");

    if(!orders){
        return res.status(301).json({
            success : false,
            message : "Order not found."
        })
    }

    return res.status(200).json({
        success : true,
        message : "All orders are here.",
        orders
    })
})

// update order status controller 

export const updateOrderStatus = asyncHandler( async ( req ,res) =>{
    const {orderId} = req.params;   // orders's
    const {status} = req.body;

    if (!status || status.trim() === '') {
        return res.status(303).json({
            success : false,
            message : "Status should be given."
        })
    }

    // find and update status at the same time
    const order = await Order.findByIdAndUpdate(
        orderId,
        {status},
        {new : true}
    );
    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }
    console.log("📡 Emitting status update to room:", orderId, status);

    // reat time emit connection with socket
    global.io.to(orderId).emit("orderStatusUpdate" ,{
        orderId,
        status
    })

    return res.status(200).json({
        success : true,
        message : "Status updated Just Now.",
        order
    })


})
