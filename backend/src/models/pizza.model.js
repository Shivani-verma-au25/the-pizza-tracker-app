import mongoose ,{Schema} from 'mongoose';

const pizzaSchema = new Schema({
    pizzaName:{
        type:String,
        required : true,
    },
    image:{
        type: String, // url of image from cloudinary
        required : true,
    },
    price :{
        type:Number,
        required:true,
    },
    size:{
        type:String,
        required :true,
        enum:['Regular','Medium','Large']
    },
    isAvailable:{
        type:Boolean,
        default : true,
    }
},{timestamps : true});

export const Pizza = mongoose.model('Pizza',pizzaSchema);