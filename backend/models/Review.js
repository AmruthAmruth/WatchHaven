import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    buyer:{
       type:Boolean, 
    },
    star: {
        type: Number,
        required: true
      },
  title: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true
  }
});

export default mongoose.model("Review",reviewSchema) 