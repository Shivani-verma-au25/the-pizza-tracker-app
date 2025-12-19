import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// user signup controller
export const signupUser = asyncHandler(async ( req, res) =>{
    const { username, email, password, role} = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if ([username, email, password].some(field => !field || field.trim() === "")) {
        return res.status(400).json({ 
            success : false,
            message: "Fields cannot be empty" 
            });
    }
    if(password.length === 0 || password.length < 6 ){
        return res.status(400).json({
            success: false,
            message:"Password must be at least 6 characters long"
            });
    }

    // find user already exist or not
    const existedUser = await User.findOne({email}).select('-password');
    if(existedUser){
        return res.status(409).json({
            success : false,
            message:"User already exist with this email"
            });
    }
    // if user not exist create a new user
    const newUser = await User.create({
        username,
        email,
        password,
        role : role ? role : 'user',
    });

    //check new user is created or not
    const user = await User.findById(newUser._id).select('-password');
    if(!user){
        return res.status(500).json({message:"Unable to create new user"});
    }

    // tokens
    const rToken = await newUser.generateAccessToken();
    console.log("rtoken",rToken);
    
    const options = {
        httpOnly:true,
        secure :true,
        sameSite:'strict',
        maxAge: 1 * 24 * 60 * 60 * 1000,
    }

    // send response
    return res.status(201)
    .cookie('rToken',rToken,options)
    .json({
        success : true,
        message : "User created successfully",
        user
    })

})


// user signin controller 

export const signinUser = asyncHandler( async (req, res) =>{
    const {email,password} = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success:false,
            message:"All Field are Required!"
        })
    }


    if([email,password].some((f) => f.trim() === "")){
        return res.status(400).json({
            success:false,
            message:"Field should not be emplty!"
        })
    }
    
    // find the user 
    const existUser = await User.findOne({email});
    if (!existUser) {
        return res.status(404).json({
            success:false,
            message:"User is not exist!"
        })
    }

    // if exist check password
    const isCorrectPass = await existUser.isPasswordMatch(password);
    if (!isCorrectPass) {
        return res.status(409).json({
            success:false,
            message:"Password is Incorrect!"
        })
    }

    const user = await User.findOne({email}).select('-password');

    // generate token
    const rToken = await existUser.generateAccessToken();

    // options
    const options = {
        httpOnly:true,
        secure :true,
        sameSite:'strict',
        maxAge: 1 * 24 * 60 * 60 * 1000,
    }

    // return response

    return res.status(201).json({
        success:true,
        message:`Welcome back ${user.username} !`,
        user
    })
})