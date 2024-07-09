import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId:{
        type:String,
        require:true
    },
    productId: {
        type: [String],
        required: true
      },
  address: {
    type: String,
    required: true, 
  },
  phone: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order",orderSchema) 