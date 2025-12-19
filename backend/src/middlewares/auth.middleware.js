import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv";
import { asyncHandler } from "../utils/asyncHandler.js";
configDotenv()


export const isVarifyUser = asyncHandler(async(req , res ,next) =>{
    // get token from cookies and auth headers
    const token = req.cookies?.rToken || req.header('Authorization')?.replace('Bearer ',"");
    // if there is no token
    if (!token) {
        return res.status(409).json({
            success : false,
            message : "You are not authorize to access this resource.Please signin fisrt."
        })
    }
    // if there is a token so verify it
    const decodedToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    if (!decodedToken) {
        return res.status(404).json({
            success:true,
            message : "Session is Expired! Please signin again."
        })
    }
    // find the user base on decoded token
    const user = await User.findById(decodedToken._id).select('-password');
    if (!user) {
        return res.status(409).json({
            success:false,
            message : "User not found."
        })
    }
    // if the user is found then create a variable in req (user) than call next() for next middlerware
    req.user = user
    next()
})
