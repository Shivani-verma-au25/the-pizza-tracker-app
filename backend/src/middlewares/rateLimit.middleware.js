import {rateLimit} from 'express-rate-limit'
import { asyncHandler } from '../utils/asyncHandler.js'

export const SignInRateLimiter = rateLimit({
    windowMs:15*60*100, //15 mnt
    max:5, //5 attempts
    message :{
        success : false,
        message:'Too many Signin attempts.Try again later.'
    },
})