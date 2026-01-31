import { asyncHandler } from "../utils/asyncHandler.js";

export const isAdmin = asyncHandler( async (req ,res,next) =>{
    
    if (req.user?.role !== 'admin') {
        return res.status(403).json({
            success : false,
            message :"Access denied.Admin only access"
        })
    }

    return res.status(200).json({
        success:true,
        message :`Welcome back ${req.user?.username}`
    })
    next()
})

