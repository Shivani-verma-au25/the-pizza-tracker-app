import { User } from "../models/user.model.js";
import {  asyncHandler } from "../utils/asyncHandler.js";


//  get cart items of the user
export const getCart = asyncHandler(async ( req , res) =>{
    const user = await User.findById(req?.user._id);  // find user by id from the request object
    if(!user) return res.status(404).json({message:"User not found"});
    res.status(200).json({cart : user?.cart || []}) // return the cart of the user or an empty array if the cart is not found
})

// add to cart 
export const addToCart = asyncHandler(async ( req,res)=>{
    const { pizzaid , size ,name,quantity,price,image  } = req.body; // get product id from the request body
    // todo image need to handle here

    const user = await User.findById(req?.user._id); // find user by id from the request object
    if(!user) return res.status(404).json({message:"User not found"});

    

    // find if the product already exists in the cart with the same size
    const existingCartItem = user.cart.find((item) =>(
        item.pizzaid === pizzaid && item.size === size
    )) 
    // if the product already exists in the cart, update the quantity  
    if(existingCartItem){
        existingCartItem.quantity += quantity;   
    }else{
    // if the product does not exist in the cart, add it to the cart
        user.cart.push({pizzaid ,size,name,image,quantity ,price})
    }
    // save user in database
    await user.save();
    return res.status(201).json({
        success : true,
        message : "Product addded to the cart successfully.",
        cart : user.cart
    })

})

// update quantity of the product in the cart
export const updateCartItem = asyncHandler( async ( req, res) =>{
    const { pizzaid , size ,quantity } = req.body; // get product id and quantity from the request body
    console.log(req.body);
    
    const user = await User.findById(req?.user._id); // find user by id from the request object

    // console.log("USER CART:", user.cart);
//   console.log("Searching:", pizzaid, size);
    if(!user) return res.status(404).json({message:"User not found"});  

    // find the product in the cart with the same size
    const existingCartItem = user.cart?.find((item) =>(
        item.pizzaid === String(pizzaid) 
    )) 
    // console.log(existingCartItem,"from update cart");
    
    if(!existingCartItem) return res.status(404).json({message:"Product not found in the cart"});
     // remove old size 
    //  user.cart = user.cart.filter((item) => !(
    //     item.pizzaid === String(pizzaid) && item.size === size
    //     ));

    // //add new size with updated quantity
    // user.cart.push({pizzaid ,size ,quantity});

    // update the quantity of the product in the cart
    existingCartItem.quantity = quantity;
     // update the size of the product in the cart 
    existingCartItem.size = size;

    // remove if qty 0
    user.cart = user.cart.filter((i) => i.quantity > 0);

    // save user in database
    await user.save();
    return res.status(200).json({
        success : true,
        message : "Cart item updated successfully.",
        cart : user.cart
    })  

})


// remove item from the cart
export const removeFromCart = asyncHandler( async (req,res) =>{
    const { pizzaid , size } = req.body; // get product id from the request body

    const user = await User.findById(req?.user._id); // find user by id from the request object
    if(!user) return res.status(404).json({message:"User not found"});

    // remove the product from the cart
    user.cart = user.cart.filter((item) => !(
        item.pizzaid === String(pizzaid) && item.size === size
    ));

    // save user in database
    await user.save();
    return res.status(200).json({
        success : true,
        message : "Product removed from the cart successfully.",
        cart : user.cart
    })                


})

// clear cart

export const clearCart = asyncHandler ( async ( req, res) =>{
    const user = req.user; // get user from the request object
    if(!user) return res.status(404).json({message:"User not found"});
    user.cart = []; // clear the cart
    await user.save(); // save user in database
    return res.status(200).json({
        success : true,
        message : "Cart cleared successfully.",
        cart : user.cart
    }) 
})