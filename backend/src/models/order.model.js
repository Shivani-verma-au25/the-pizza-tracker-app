import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  
  items: [
    {
      pizza: {
        type: Schema.Types.ObjectId,
        ref: "Pizza",
        required: true
      },
      size: {
        type: String,
        enum: ["regular", "medium", "large"],
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],

  totalAmount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: [
      "PLACED",
      "CONFIRMED",
      "PREPARING",
      "OUT_FOR_DELIVERY",
      "DELIVERED"
    ],
    default: "PLACED"
  },

  paymentStatus: {
    type: String,
    enum: ["PENDING", "PAID"],
    default: "PENDING"
  }

}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);
