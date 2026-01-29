import mongoose, { Schema } from "mongoose";

const pizzaSchema = new Schema({
  pizzaName: {
    type: String,
    required: true,
    trim: true
  },

  image: {
    type: String, // Cloudinary URL
    required: true
  },

  description: {
    type: String
  },

  prices: {
    regular: {
      type: Number,
      required: true
    },
    medium: {
      type: Number,
      required: true
    },
    large: {
      type: Number,
      required: true
    }
  },

  isAvailable: {
    type: Boolean,
    default: true
  },

  category: {
    type: String,
    enum: ["Veg", "Non-Veg"],
    required: true
  }

}, { timestamps: true });

export const Pizza = mongoose.model("Pizza", pizzaSchema);
