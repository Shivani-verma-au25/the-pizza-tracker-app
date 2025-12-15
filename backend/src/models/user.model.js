import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcryptjs'   
import jwt from 'jsonwebtoken'  

const userSchema = new Schema({
    userName :{
        type : String,
        trim : true,
        required : true,
    },
    email:{
        type:String,
        trim:true,
        rquired:true,
        lowercase: true
    },
    password:{
        type: String,
        trim:true,
        minlength: 6
    }
},{timestamps:true})

// mongoose middleware to hash password before saving it to databse
userSchema.pre('save', async function(next){
   try {
        if(!this.isModified('password')) return next();
        //hashed the password here
        this.password = await bcrypt.hash(this.password,10);
        next();
   } catch (error) {
        console.log("Getting error while saving the password",error);
        // important to call next with error to step the middleware chain
        next(error);
   }
})

// generate method to campare password
userSchema.methods.isPasswordMatch = async function(password){
    try {
        if (!password) {
            console.log("Password is required for compair");
        }
        return await bcrypt.compare(password,this.password);
    } catch (error) {
        console.log("Error getting while compairing error",error);
    }
}


// Generate tokens 
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            userName:this.userName,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_SECRET}
    )
}


export const User = mongoose.model('User',userSchema);
   