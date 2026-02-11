import { User } from "../models/user.model.js";
import {  asyncHandler } from "../utils/asyncHandler.js";


export const getCart = asyncHandler(async ( req , res) =>{
    const user = await User.findById(req?.user._id);  // find user by id from the request object
    if(!user) return res.status(404).json({message:"User not found"});
    res.status(200).json({cart : user?.cart || []}) // return the cart of the user or an empty array if the cart is not found
})