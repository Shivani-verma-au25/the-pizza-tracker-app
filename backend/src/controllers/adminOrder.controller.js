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

    const order = await Order.findById(orderId);
    if (!order) {
        return res.status(400).json({
            success : false,
            message : "Order not found."
        })
    }

    if (!status || status.trim() === '') {
        return res.status(303).json({
            success : false,
            message : "Status should be given."
        })
    }

    order.status = status;
    await order.save();

    return res.status(200).json({
        success : true,
        message : "Status updated Just Now.",
        order
    })


})
