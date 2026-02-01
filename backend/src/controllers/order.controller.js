import { Order } from "../models/order.model.js";
import { Pizza } from "../models/pizza.model.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


// order conteroller
export const userOrder = asyncHandler( async (req ,res) =>{
    const {items } = req.body;

    if(!items || items.length === 0){
        return res.status(300).json({
            success : false,
            message : "Order items are required"
        })
    }

    let totalAmount = 0;
    const formatedItems = [];

     for (const item of items) {
      const { pizza, size, quantity } = item;

      // 🔴 1. Check pizza exists
      const pizzaDoc = await Pizza.findById(pizza);

      if (!pizzaDoc) {
        return res.status(404).json({
          message: `Pizza not found with id ${pizza}`
        });
      }

      // 🔴 2. Check availability
      if (!pizzaDoc.isAvailable) {
        return res.status(400).json({
          message: `${pizzaDoc.pizzaName} is currently unavailable`
        });
      }

      // 🔴 3. Get price from DB
      let unitPrice;
      if (size === "regular") unitPrice = pizzaDoc.prices.regular;
      if (size === "medium") unitPrice = pizzaDoc.prices.medium;
      if (size === "large") unitPrice = pizzaDoc.prices.large;

      if (!unitPrice) {
        return res.status(400).json({ message: "Invalid pizza size" });
      }

      const itemTotal = unitPrice * quantity;
      totalAmount += itemTotal;

      formatedItems.push({
        pizza,
        size,
        quantity,
        price: unitPrice
      });
    }

    // 🔥 4. Create order
    const order = await Order.create({
        itemName:formatedItems?.pizzaName ,
        user: req.user._id, // from auth middleware
        items: formatedItems,
        totalAmount
    });
    

    return res.status(201).json({
        success : true,
        message : "Your order has been placed.",
        order
    })

})


// get all order by user

export const getMyAllOrders = asyncHandler( async ( req ,res) =>{
    // find user
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
        return res.status(300).json({
            success  :false,
            message : "User not found."
        })
    }

    const orders = await Order.find({user : user._id}).populate('items.pizza');
    if (!orders) {
        return res.status(300).json({
            success  :false,
            message : "Order not found."
        })
    }

    return res.status(200).json({
        success : true,
        message : `Order fetched successfully.`,
        orders
    })
})