import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
      },
     offer: {
    type: Number,
    required: true,
    
  },
  offprice:{
    type:Number,
    require:true
  },
     price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image:{
    type:String,
    require:true
  }
});

export default mongoose.model("product",productSchema) 